/* ============================================================================
 *  康鹭记忆 · 三维微缩街区  scene3d.js
 *  Kanglu Memory — interactive 3D miniature block (Three.js r169, no build step)
 *  ---------------------------------------------------------------------------
 *  设计要点（为什么这么做，供后续维护者参考）
 *
 *  1. 全部程序化生成。不加载任何外部模型 / 贴图 / CDN，所有材质贴图都在
 *     canvas 上现画（用种子化随机保证每次刷新纹理一致）。
 *  2. 单一世界坐标系，米为单位，1 世界单位 ≈ 0.9 米：整个片区按 1.1 km² 的
 *     真实尺度压缩到 x ∈ [-130,140]、z ∈ [-107,86] 的一块街区模型。
 *     +x 向东（广州大道南）、-z 向北（新港西路）、+y 向上。
 *     与实际指北针的唯一差别是新港西路是斜的，见 DISTRICT.southZ。
 *  3. 建筑形态用「沿斜向巷道两侧排布 + 矩形裁切」生成，而不是规则网格。
 *     巷道与 x 轴成 -14°，宽 2–4.4 单位，两侧楼紧贴，形成握手楼 / 一线天。
 *  4. 性能：所有楼体按 4 种外立面材质合并成 4 个 mesh（合并时把每栋楼的
 *     颜色差异烘进顶点色），环境小物件（空调、水箱、晾衣杆…）用 InstancedMesh，
 *     整场 draw call 控制在 40 个量级，桌面与中端手机都能跑。
 *  5. 交互全部自写，不用 OrbitControls，因为要严格控制：俯仰 25°–70°、
 *     拖动 4px 判定、双指缩放、缓动可被打断。见「控制器」一节。
 * ==========================================================================*/

import * as THREE from '../vendor/three.module.min.js';

/* ==========================================================================
 * 0. 常量与配置
 * ========================================================================*/

const VERSION = '1.0.0';

/** 片区四至与地面范围（世界单位） */
const DISTRICT = {
  west: -128,      // 瑞康路
  east: 138,       // 广州大道南
  north: -107,     // 新港西路（水平，片区内最北）
  // 南界逸景路是斜的：z = SOUTH_BASE + SOUTH_SLOPE * x（-9.3°，从上到下向右下走）
  southBase: 78,
  southSlope: -0.164,
  roadHalf: 8.6,   // 四至道路的车行道半宽
  margin: 3.2      // 建筑退让
};

/** 地面平面范围（比片区大一圈，让远处有"场"） */
const GROUND = { x0: -172, x1: 182, z0: -152, z1: 132 };

/** 地面贴图分辨率（2048 已足够：1 像素 ≈ 0.17 世界单位） */
const GROUND_TEX = 2048;
const GROUND_PPU = GROUND_TEX / (GROUND.x1 - GROUND.x0);   // pixels per unit

/** 街区骨架：巷道方向角（绕 y 轴，正值 = 自 +x 向 -z 偏转） */
const LANE = {
  deg: 14,
  spacing: 21.5,    // 巷道间距（垂直巷道方向）
  widthMin: 2.4,    // 巷道净宽：2–5 单位 ≈ 2–4.5 米，握手楼尺度
  widthMax: 5.2,
  depthMin: 6.0,    // 楼进深范围（窄而深，城中村自建房的常见比例）
  depthMax: 8.8,
  /* 一条巷道两侧各"两进"：贴巷一进 + 背靠背一进。
     每进的相对偏移（相对巷道中线）：
       贴巷排 中心 = laneW/2 + 1.3 + depth/2
       背排   中心 = laneW/2 + 1.3 + depth + 1.7 + depth/2
     spacing 必须大于两进总深（≈18.8）才不会让相邻巷道的楼穿插。 */
  frontGap: 1.3,    // 贴巷排与巷壁之间的退让（人行/排水明沟）
  backGap: 1.7,     // 背排之间的一线天缝隙
  uMin: -84, uMax: 70,   // 沿巷道方向的生成范围（超出片区的部分会被裁掉）
  vMin: -96, vMax: 62    // 垂直巷道方向的生成范围
};

/** 全部地点（id 固定，与 map3d.js 的 POI / INFO 对应）
 *
 *  前三条是「核心地标」（见 PRIMARY_IDS）：标签加粗，默认取景也**只**按这三处算。
 *  这一点很关键：computeDefaultView() 是拿 LANDMARK_IDS 的重心与横向展开去
 *  自动算默认相机距离的，若把 11 处一起算进去，默认镜头会被推到很远，
 *  "三地标同框"的构图就散了 —— 所以默认取景仍然只认核心三处。
 *
 *  其余 8 条是「次级地点」：各自有独立网格（见 6.1 节）与避让区，
 *  默认也显示标签（字号更小、底色更淡，见 .k3d-label:not(.is-primary)），
 *  但会被 updateLabels 的防堆叠逻辑让位给核心地标。
 *
 *  ⚠ 维护提醒：PLACES 里每一个 id 都**必须**在 initScene 的「地标建模」一节里
 *  建出对应的网格并写进 landmarks / labelAnchors。只加标签、不建网格，
 *  标签层就会在取 PLACES[id].label 之外的环节拿到 undefined 而抛错。
 */
const PLACES = {
  'kangle-arch':  { x: -64, z: -57, rot: -0.28, dist: 42, label: { name: '康乐牌坊', sub: '康乐东约 · 片区西北入口' } },
  'lujiang-arch': { x: 92,  z: -48, rot: 0.24,  dist: 46, label: { name: '鹭江牌坊', sub: '鹭江春晓 · 片区东北入口' } },
  'hiring-plaza': { x: 2,   z: 44,  dist: 62,   label: { name: '招工广场', sub: '原鹭江球场 · 零工市场' } },
  /* ---- 8 处次级地点 ---- */
  'kangle-village':   { x: -52, z: -12, rot: 0.10,  dist: 52, label: { name: '康乐村', sub: '康乐片区 · 制衣作坊集中区' } },
  'lujiang-village':  { x: 56,  z: -6,  rot: -0.16, dist: 52, label: { name: '鹭江村', sub: '鹭江片区 · 早期加工厂落脚地' } },
  'fabric-market':    { x: -104, z: -26, rot: 0,    dist: 58, label: { name: '中大布匹市场', sub: '瑞康路西侧 · 布料供应来源' } },
  'hiring-street':    { x: 74,  z: 14,  rot: 0.05,  dist: 50, label: { name: '鹭江南约大街', sub: '招工街 · 沿街招工与招租' } },
  'kangle-south-st':  { x: -38, z: 26,  rot: -0.06, dist: 50, label: { name: '康乐东约南大街', sub: '康乐主街 · 作坊与出租屋' } },
  'kangle-canal':     { x: -20, z: -22, rot: 0,     dist: 48, label: { name: '康乐中约南新街涌边一巷', sub: '涌边巷 · 握手楼最密处' } },
  'lujiang-yard':     { x: 78,  z: 28,  rot: 0.12,  dist: 50, label: { name: '鹭江东约新街 88 号大院', sub: '出租大院 · 一户一厂的典型' } },
  'fengyang-office':  { x: 30,  z: 62,  rot: -0.06, dist: 54, label: { name: '凤阳街道办事处', sub: '治理节点 · 旧改与整治的实施方' } }
};
const LANDMARK_IDS = Object.keys(PLACES);

/** 核心地标（顺序即标签层里 is-primary 的判定顺序，不要改动） */
const PRIMARY_IDS = ['kangle-arch', 'lujiang-arch', 'hiring-plaza'];
/** 次级地点：除核心三处之外的全部地点 */
const SUB_PLACE_IDS = LANDMARK_IDS.filter((id) => PRIMARY_IDS.indexOf(id) < 0);

/** 场内地标标号顺序（01–11）：核心三处排前，其余按"自北向南、同纬度自西向东"。
 *  为什么要显式排一次：场景里的圆标与页面下方的图例是两套 DOM，
 *  必须共用同一份顺序，否则 05 号圆标和图例第 5 条会对不上。
 *  页面通过 api.getPlaces() 拿这份顺序（不要各排各的）。 */
const BADGE_ORDER = PRIMARY_IDS.concat(
  SUB_PLACE_IDS.slice().sort((a, b) => (PLACES[a].z - PLACES[b].z) || (PLACES[a].x - PLACES[b].x))
);

/** 地标占位区（建筑生成时避让）：id -> [x0,z0,x1,z1]
 *  牌坊的避让区要留得比牌坊本身大不少：牌坊是 8–13 单位宽的独立构筑物，
 *  若被 3–8 层的自建房贴脸围住，从默认视角根本看不出"牌坊"这个形，
 *  所以给它留出一小块前庭空地。8 处次级地点同理：矩形比形体大一圈，
 *  否则新地点会被自建房贴脸埋掉（叠进楼群里就完全看不见了）。 */
const EXCLUDE = {
  'kangle-arch':  [-84, -76, -42, -30],
  'lujiang-arch': [72, -72, 116, -24],
  'hiring-plaza': [-30, 14, 42, 80],
  'yizhen':       [-22, -30, 10, -4],     // 卫生站，允许被压，仅避免完全遮挡
  /* ---- 8 处次级地点的避让区（比各自形体大一圈） ---- */
  'kangle-village':   [-70, -26, -34, 2],
  'lujiang-village':  [40, -20, 72, 8],
  'fabric-market':    [-120, -52, -90, 0],
  'hiring-street':    [56, 4, 92, 26],
  'kangle-south-st':  [-48, 8, -28, 44],
  'kangle-canal':     [-30, -38, -12, -6],
  'lujiang-yard':     [64, 16, 92, 40],
  'fengyang-office':  [22, 44, 56, 68]
};

/** 配色（严格按视觉方向：纸白 / 墨灰 / 砖红，辅以工作服蓝、招牌黄） */
const C = {
  paper: 0xF1EBDD,
  ink: 0x302D28,
  brick: 0xB84A3A,
  blue: 0x536976,
  yellow: 0xC2A264,
  green: 0x6E7C63,
  ground: 0xB5AC9C,
  asphalt: 0x59544C,
  roof: 0xC7C1B4
};

/**
 * 相机尺度约定。
 * defPos/defTarget 是**宽屏下的基准默认视角**；窄容器下 defPos 会被
 * computeDefaultView() 沿着同一方位角/俯仰角拉远（见那里的说明），
 * 以保证三地标始终在画面内。
 */
const CAM = {
  fov: 45,
  defPos: new THREE.Vector3(116, 148, 176),   // 方位角 ≈ 33.4°，俯仰 ≈ 35.3°
  defTarget: new THREE.Vector3(6, 6, 8),
  minPitch: 25 * Math.PI / 180,   // 低于 25° 会看到近似地平线，失去微缩模型感
  maxPitch: 70 * Math.PI / 180,   // 高于 70° 变成平面图，看不出楼高
  minDist: 60,                    // 保证相机不会钻进楼群里
  /* 上限是这么定的：窄容器（390px 宽）的水平视角只有约 ±21°，
     而三地标在"垂直于视线"方向上的展开约 213 世界单位
     （康乐牌坊在最西、鹭江牌坊在最东），要同时收进画面需要退到约 420。
     所以 260（最初凭感觉设的值）在手机上是不够的，放宽到 440。 */
  maxDist: 440,
  easeMs: 750,                    // focusLandmark 缓动时长（要求 0.6–0.9s）
  pauseMs: 520                    // 用户操作后暂停"自动跟随"的时长
};

/** 拖动 / 点击判定阈值（硬性要求：4 像素） */
const DRAG_THRESHOLD_PX = 4;

const IS_COARSE = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
const IS_SMALL = typeof matchMedia === 'function' && matchMedia('(max-width: 820px)').matches;
/** 低性能启发式：粗糙指针 + 小屏，或硬件并发数很低 → 降档 */
const LOW_POWER = (IS_COARSE && IS_SMALL) ||
  (typeof navigator !== 'undefined' && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);

/** 若外部页把 COLORS 传进来（少见），与之合并 */
function mergeColors(extra) {
  if (!extra || typeof extra !== 'object') return C;
  const out = Object.assign({}, C);
  for (const k of Object.keys(extra)) {
    const v = extra[k];
    if (typeof v === 'number') out[k] = v;
    else if (typeof v === 'string') {
      const s = v.trim().replace('#', '');
      const n = parseInt(s.length === 3 ? s.replace(/(.)/g, '$1$1') : s, 16);
      if (!Number.isNaN(n)) out[k] = n;
    }
  }
  return out;
}

/* ==========================================================================
 * 1. 基础工具：种子化伪随机 / 数学
 * ========================================================================*/

/**
 * mulberry32：32 位种子伪随机。
 * 用它而不是 Math.random()，是为了「每次刷新街区形态一致」——
 * 同一个 seed 永远得到同一片康鹭，这对一个文献型网站的稳定观感很重要。
 */
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function makeRng(seed) {
  const r = mulberry32(seed);
  const api = () => r();
  api.range = (a, b) => a + (b - a) * r();
  api.int = (a, b) => Math.floor(a + (b - a + 1) * r()) ;
  api.pick = (arr) => arr[Math.min(arr.length - 1, Math.floor(r() * arr.length))];
  api.chance = (p) => r() < p;
  api.sign = () => (r() < 0.5 ? -1 : 1);
  return api;
}
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
/** easeInOutCubic：缓动曲线，起步慢、中段快、收尾稳 */
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** 南界逸景路在给定 x 处的 z 中心 */
const southRoadZ = (x) => DISTRICT.southBase + DISTRICT.southSlope * x;
/** 街区（建筑可建范围）的 z 边界 */
const innerNorthZ = () => DISTRICT.north + DISTRICT.roadHalf + DISTRICT.margin;
const innerSouthZ = (x) => southRoadZ(x) - DISTRICT.roadHalf - DISTRICT.margin;
const innerWestX = () => DISTRICT.west + DISTRICT.roadHalf + DISTRICT.margin;
const innerEastX = () => DISTRICT.east - DISTRICT.roadHalf - DISTRICT.margin;

/** 点是否在扩展后的街区矩形内（用于裁掉越界的楼房） */
function insideDistrict(x, z, pad) {
  pad = pad || 0;
  if (x < innerWestX() - pad || x > innerEastX() + pad) return false;
  if (z < innerNorthZ() - pad) return false;
  if (z > innerSouthZ(x) + pad) return false;
  return true;
}
function inExclusion(x, z) {
  for (const k in EXCLUDE) {
    const e = EXCLUDE[k];
    if (x > e[0] && x < e[2] && z > e[1] && z < e[3]) return true;
  }
  return false;
}

/* ==========================================================================
 * 2. 程序化贴图（canvas）：外立面 / 屋顶 / 地面
 *    全部灰度绘制，最终颜色 = 贴图 × 顶点色，这样一张贴图能出十几种楼色。
 * ========================================================================*/

const TILE_U = 18.75;   // 一个贴图横向周期对应的世界宽度（≈4 个开间）
const TILE_V = 9.0;     // 一个贴图纵向周期 ≈ 3 层（层高 3 单位）
const ATLAS_ROWS = 3;   // 贴图纵向叠 3 个变体，用 v 偏移挑变体

const FLOOR_H = [2.7, 3.0, 3.35];   // 每层高度候选（世界单位）

/** 在 canvas 上画一个可纵向平铺的外立面 */
function drawFacadeTile(ctx, x0, y0, w, h, variant, rng) {
  const rows = ATLAS_ROWS;
  const rowH = h / rows;
  const cols = 4;
  const colW = w / cols;
  const openRatio = [0.60, 0.50, 0.68][variant];
  const openW = colW * openRatio;
  const openH = rowH * 0.52;
  const sillY = rowH * 0.63;

  // 底：水泥抹面（略偏灰，靠顶点色染色）
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x0, y0, w, h);

  // 墙体脏迹：竖向水痕
  for (let i = 0; i < 46; i++) {
    const gx = x0 + rng() * w;
    const gw = rng.range ? rng.range(1, 3.5) : rng() * 3 + 1;
    ctx.fillStyle = 'rgba(120,113,102,' + (0.03 + rng() * 0.06).toFixed(3) + ')';
    ctx.fillRect(gx, y0, gw, h);
  }
  // 横向雨痕
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = 'rgba(120,113,102,' + (0.02 + rng() * 0.05).toFixed(3) + ')';
    ctx.fillRect(x0, y0 + rng() * h, w, 1 + rng() * 4);
  }

  for (let r = 0; r < rows; r++) {
    const ty = y0 + r * rowH;
    // 层间楼板线
    ctx.fillStyle = 'rgba(140,132,120,.30)';
    ctx.fillRect(x0, ty + rowH - 4, w, 2);
    // 勒脚
    if (r === rows - 1) {
      ctx.fillStyle = 'rgba(96,90,80,.20)';
      ctx.fillRect(x0, ty + rowH - rowH * 0.16, w, rowH * 0.16);
    }
    // 中间一道竖向分隔（贴砖缝 / 抹面分格）
    ctx.fillStyle = 'rgba(150,142,130,.14)';
    ctx.fillRect(x0 + w / 2 - 1, ty, 2, rowH);

    for (let c = 0; c < cols; c++) {
      const cx = x0 + c * colW + (colW - openW) / 2;
      const cy = ty + sillY - openH;

      // 窗洞（深色，最终乘上暖色顶点色即成为暗暖窗）
      ctx.fillStyle = 'rgba(46,42,38,.86)';
      ctx.fillRect(cx, cy, openW, openH);

      // 玻璃反光（一部分窗户）
      if (rng() < 0.38) {
        ctx.fillStyle = 'rgba(255,255,255,.20)';
        ctx.fillRect(cx + 1, cy + 1, openW * 0.45, openH * 0.5);
      } else if (rng() < 0.16) {
        // 亮灯（少量暖光，暗示夜间也有人在赶工）
        ctx.fillStyle = 'rgba(255,231,178,.55)';
        ctx.fillRect(cx + 1, cy + 1, openW - 2, openH - 2);
      }

      // 窗框（细边）
      ctx.strokeStyle = 'rgba(232,226,214,.75)';
      ctx.lineWidth = 1.4;
      ctx.strokeRect(cx + 0.5, cy + 0.5, openW - 1, openH - 1);
      // 竖梃
      ctx.strokeStyle = 'rgba(232,226,214,.45)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx + openW / 2, cy + 1);
      ctx.lineTo(cx + openW / 2, cy + openH - 1);
      ctx.stroke();

      // 窗台（挑出的浅色线脚）
      ctx.fillStyle = 'rgba(255,255,255,.55)';
      ctx.fillRect(cx - 2, cy + openH, openW + 4, 2.2);

      // 窗下空调机位（外立面常见，强化"生活痕迹"）
      if (rng() < 0.30) {
        const aw = openW * 0.4, ah = openH * 0.34;
        const ax = cx + (openW - aw) * 0.5, ay = cy + openH + 4;
        ctx.fillStyle = 'rgba(206,200,190,.92)';
        ctx.fillRect(ax, ay, aw, ah);
        ctx.strokeStyle = 'rgba(110,104,96,.5)';
        ctx.lineWidth = 1;
        ctx.strokeRect(ax + 0.5, ay + 0.5, aw - 1, ah - 1);
        ctx.beginPath();
        ctx.arc(ax + aw * 0.5, ay + ah * 0.5, Math.min(aw, ah) * 0.3, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 防盗网 / 晾晒（细密横线）
      if (rng() < 0.26) {
        ctx.strokeStyle = 'rgba(226,220,208,.55)';
        ctx.lineWidth = 0.8;
        for (let g = 1; g <= 4; g++) {
          const gy = cy + (openH / 5) * g;
          ctx.beginPath(); ctx.moveTo(cx - 1, gy); ctx.lineTo(cx + openW + 1, gy); ctx.stroke();
        }
      }
    }
  }

  // 竖向明暗渐变：底部略暗，模拟街巷里的环境遮蔽
  const grd = ctx.createLinearGradient(0, y0, 0, y0 + h);
  grd.addColorStop(0, 'rgba(255,255,255,0)');
  grd.addColorStop(1, 'rgba(88,80,70,.10)');
  ctx.fillStyle = grd;
  ctx.fillRect(x0, y0, w, h);
}

function makeFacadeTextures() {
  const W = 512, H = 128, rows = ATLAS_ROWS;   // 单行 128px → 一层楼 42.7px
  const out = [];
  const variants = [
    { seed: 1201, brickBase: false },
    { seed: 2207, brickBase: true },
    { seed: 3313, brickBase: false }
  ];
  for (let vi = 0; vi < 3; vi++) {
    const cv = document.createElement('canvas');
    cv.width = W; cv.height = H * rows;
    const ctx = cv.getContext('2d');
    const rng = makeRng(variants[vi].seed);
    drawFacadeTile(ctx, 0, 0, W, H * rows, vi, rng);

    if (variants[vi].brickBase) {
      // 贴砖肌理：细密砖缝，让这一档立面读起来是"外墙砖"而不是涂料
      ctx.save();
      ctx.globalAlpha = 0.10;
      ctx.strokeStyle = '#5a5248';
      ctx.lineWidth = 1;
      for (let y = 0; y < H * rows; y += 9) {
        ctx.beginPath(); ctx.moveTo(0, y + 0.5); ctx.lineTo(W, y + 0.5); ctx.stroke();
        const off = ((y / 9) % 2) * 11;
        for (let x = off; x < W; x += 22) {
          ctx.beginPath(); ctx.moveTo(x + 0.5, y); ctx.lineTo(x + 0.5, y + 9); ctx.stroke();
        }
      }
      ctx.restore();
    }

    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 4;
    tex.needsUpdate = true;
    out.push(tex);
  }
  return out;
}

/** 屋顶：水泥面 + 防水卷材分格（灰度） */
function makeRoofTexture() {
  const W = 256, H = 256;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const rng = makeRng(9091);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  // 分格
  ctx.strokeStyle = 'rgba(126,119,108,.30)';
  ctx.lineWidth = 2;
  for (let i = 1; i < 3; i++) {
    ctx.beginPath(); ctx.moveTo(i * W / 3, 0); ctx.lineTo(i * W / 3, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i * H / 3); ctx.lineTo(W, i * H / 3); ctx.stroke();
  }
  // 污渍 / 积水痕（屋面不会是干净的）
  for (let i = 0; i < 90; i++) {
    const r = rng.range(3, 16);
    ctx.save();
    ctx.translate(rng() * W, rng() * H);
    const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, r);
    gg.addColorStop(0, 'rgba(108,101,90,' + (0.05 + rng() * 0.10).toFixed(3) + ')');
    gg.addColorStop(1, 'rgba(108,101,90,0)');
    ctx.fillStyle = gg;
    ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 4;
  return tex;
}

/** 屋瓦：横向瓦垄（牌坊屋檐用） */
function makeTileTexture() {
  const W = 128, H = 128;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);
  for (let y = 0; y < H; y += 8) {
    ctx.fillStyle = 'rgba(104,96,86,.34)';
    ctx.fillRect(0, y, W, 1.6);
    ctx.fillStyle = 'rgba(255,255,255,.30)';
    ctx.fillRect(0, y + 3, W, 1.4);
  }
  const rng = makeRng(4242);
  for (let i = 0; i < 26; i++) {
    ctx.fillStyle = 'rgba(104,96,86,' + (0.03 + rng() * 0.07).toFixed(3) + ')';
    ctx.fillRect(rng() * W, rng() * H, rng.range(6, 30), rng.range(3, 12));
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  return tex;
}

/** 天空：上冷下暖的竖向渐变。纯色背景会让浅色楼体失去轮廓，渐变能把屋顶线"托"出来。 */
function makeSkyTexture() {
  const cv = document.createElement('canvas');
  cv.width = 16; cv.height = 256;
  const ctx = cv.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0.00, '#C6D2DA');   // 天顶：微冷的灰蓝
  g.addColorStop(0.38, '#DCE1E2');
  g.addColorStop(0.60, '#EDE7DA');   // 中段：纸白
  g.addColorStop(0.78, '#E2D9C6');   // 近地：暖霾
  g.addColorStop(1.00, '#D6CBB4');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 16, 256);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.mapping = THREE.EquirectangularReflectionMapping;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/* -------- 地面：把四至道路、内部巷道、招工广场铺地一次画进贴图 -------- */

function worldToTex(x, z) {
  return {
    px: (x - GROUND.x0) * GROUND_PPU,
    py: (GROUND.z1 - z) * GROUND_PPU    // 画布 y 向下，世界 z 向南为正 → 翻转
  };
}
function texScale(v) { return v * GROUND_PPU; }

function drawGroundTexture() {
  const S = GROUND_TEX;
  const cv = document.createElement('canvas');
  cv.width = S; cv.height = S;
  const ctx = cv.getContext('2d');
  const rng = makeRng(777001);

  // ① 底色：纸白的城市底，略带暖调
  ctx.fillStyle = '#efe8db';
  ctx.fillRect(0, 0, S, S);

  // ② 城市肌理的暗示：远处不建模的街区，用浅色块表示（不喧宾夺主）
  ctx.save();
  for (let i = 0; i < 260; i++) {
    const x = rng.range(GROUND.x0, GROUND.x1);
    const z = rng.range(GROUND.z0, GROUND.z1);
    if (x > DISTRICT.west - 24 && x < DISTRICT.east + 24 && z > DISTRICT.north - 24 && z < southRoadZ(x) + 24) continue;
    const p = worldToTex(x, z);
    const w = texScale(rng.range(8, 26)), h = texScale(rng.range(8, 26));
    ctx.fillStyle = 'rgba(199,191,177,' + (0.30 + rng() * 0.35).toFixed(3) + ')';
    ctx.fillRect(p.px, p.py, w, h);
  }
  ctx.restore();

  // ③ 片区底：略深一点的暖灰，把 1.1 km² 的范围先"垫"出来
  ctx.save();
  ctx.beginPath();
  const c0 = worldToTex(DISTRICT.west, DISTRICT.north);
  const c1 = worldToTex(DISTRICT.east, southRoadZ(DISTRICT.east));
  const c2 = worldToTex(DISTRICT.west, southRoadZ(DISTRICT.west));
  ctx.moveTo(c0.px, c0.py);
  ctx.lineTo(c1.px, c1.py);
  ctx.lineTo(c2.px, c2.py);
  ctx.closePath();
  ctx.fillStyle = '#c3bbab';
  ctx.fill();
  ctx.restore();

  /* 内部巷道：与 x 轴成 LANE.deg 的斜向窄巷 + 几条横向巷 */
  const th = LANE.deg * Math.PI / 180;
  const n = { x: Math.sin(th), z: Math.cos(th) };     // 巷道法向（垂直巷道）
  const d = { x: Math.cos(th), z: -Math.sin(th) };    // 巷道走向
  const nu = { x: -n.z, z: n.x };                     // 沿巷道的单位向量

  // 先把巷道的"路面"铺成比底浅的色（混凝土巷）
  const laneCount = Math.ceil((LANE.vMax - LANE.vMin) / LANE.spacing);
  const lanes = [];
  for (let i = 0; i <= laneCount; i++) {
    const v = LANE.vMin + i * LANE.spacing;
    const w = rng.range(LANE.widthMin, LANE.widthMax);
    const cx = nu.x * v, cz = nu.z * v;   // 巷道中线上的一个点
    const half = 90;
    lanes.push({ v, w, cx, cz });
    // 画一条宽带
    const A = worldToTex(cx - d.x * half, cz - d.z * half);
    const B = worldToTex(cx + d.x * half, cz + d.z * half);
    ctx.strokeStyle = '#d8d1c3';
    ctx.lineWidth = Math.max(2, texScale(w));
    ctx.lineCap = 'butt';
    ctx.beginPath(); ctx.moveTo(A.px, A.py); ctx.lineTo(B.px, B.py); ctx.stroke();
    // 巷子两侧的墙脚暗线（握手楼贴线感）
    ctx.strokeStyle = 'rgba(70,63,55,.30)';
    ctx.lineWidth = Math.max(1, texScale(0.5));
    for (const s of [-1, 1]) {
      const ox = n.x * (w / 2 + 0.35) * s, oz = n.z * (w / 2 + 0.35) * s;
      const A2 = worldToTex(cx + ox - d.x * half, cz + oz - d.z * half);
      const B2 = worldToTex(cx + ox + d.x * half, cz + oz + d.z * half);
      ctx.beginPath(); ctx.moveTo(A2.px, A2.py); ctx.lineTo(B2.px, B2.py); ctx.stroke();
    }
  }
  // 横向连通巷（每隔几条切一刀，形成"井"字，避免全是平行条）
  for (let i = 0; i < 5; i++) {
    const u = -78 + i * 46;
    const w = rng.range(1.8, 3.4);
    const Ax = nu.x * LANE.vMin + d.x * u, Az = nu.z * LANE.vMin + d.z * u;
    const Bx = nu.x * LANE.vMax + d.x * u, Bz = nu.z * LANE.vMax + d.z * u;
    const A = worldToTex(Ax, Az), B = worldToTex(Bx, Bz);
    ctx.strokeStyle = '#d8d1c3';
    ctx.lineWidth = Math.max(2, texScale(w));
    ctx.beginPath(); ctx.moveTo(A.px, A.py); ctx.lineTo(B.px, B.py); ctx.stroke();
  }

  /* 四至道路：先画细的瑞康路 / 广州大道南，再画宽的新港西路 / 逸景路 */
  function road(x0, z0, x1, z1, half, opt) {
    opt = opt || {};
    const p0 = worldToTex(x0, z0), p1 = worldToTex(x1, z1);
    // 路缘
    ctx.strokeStyle = '#8d8577';
    ctx.lineWidth = Math.max(2, texScale(1.1));
    ctx.beginPath(); ctx.moveTo(p0.px, p0.py); ctx.lineTo(p1.px, p1.py); ctx.stroke();
    // 车行道
    ctx.strokeStyle = opt.color || '#59544c';
    ctx.lineWidth = texScale(half * 2);
    ctx.beginPath(); ctx.moveTo(p0.px, p0.py); ctx.lineTo(p1.px, p1.py); ctx.stroke();
    // 中线
    if (opt.center) {
      ctx.save();
      ctx.setLineDash([texScale(2.6), texScale(3.4)]);
      ctx.strokeStyle = opt.center;
      ctx.lineWidth = Math.max(1.5, texScale(0.45));
      ctx.beginPath(); ctx.moveTo(p0.px, p0.py); ctx.lineTo(p1.px, p1.py); ctx.stroke();
      ctx.restore();
    }
  }
  const R = DISTRICT.roadHalf;
  road(DISTRICT.west, DISTRICT.north, DISTRICT.west, southRoadZ(DISTRICT.west) + 6, R);
  road(DISTRICT.east, DISTRICT.north - 6, DISTRICT.east, southRoadZ(DISTRICT.east) + 10, R);
  road(DISTRICT.west - 26, DISTRICT.north, DISTRICT.east + 26, DISTRICT.north, R + 1.4, { center: 'rgba(226,214,176,.55)' });
  road(DISTRICT.west - 26, southRoadZ(DISTRICT.west - 26), DISTRICT.east + 26, southRoadZ(DISTRICT.east + 26), R + 1.0, { center: 'rgba(226,214,176,.45)' });

  // 新港西路北侧绿化带（中大南门一带的行道树）
  {
    const p0 = worldToTex(DISTRICT.west - 26, DISTRICT.north - R - 3.4);
    const p1 = worldToTex(DISTRICT.east + 26, DISTRICT.north - R - 3.4);
    ctx.strokeStyle = 'rgba(110,124,99,.55)';
    ctx.lineWidth = texScale(5.2);
    ctx.beginPath(); ctx.moveTo(p0.px, p0.py); ctx.lineTo(p1.px, p1.py); ctx.stroke();
    // 树冠点
    for (let x = DISTRICT.west - 24; x < DISTRICT.east + 24; x += 9) {
      const p = worldToTex(x, DISTRICT.north - R - 3.4);
      const r = texScale(rng.range(2.2, 3.6));
      const g = ctx.createRadialGradient(p.px, p.py, 0, p.px, p.py, r);
      g.addColorStop(0, 'rgba(96,112,86,.85)');
      g.addColorStop(1, 'rgba(96,112,86,0)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(p.px, p.py, r, 0, Math.PI * 2); ctx.fill();
    }
  }

  // 广州大道南：高架快速路的落影（实体高架在 3D 里另建）
  {
    const p0 = worldToTex(DISTRICT.east + 2.2, DISTRICT.north - 10);
    const p1 = worldToTex(DISTRICT.east + 2.2, southRoadZ(DISTRICT.east) + 14);
    ctx.strokeStyle = 'rgba(40,36,32,.22)';
    ctx.lineWidth = texScale(7);
    ctx.beginPath(); ctx.moveTo(p0.px, p0.py); ctx.lineTo(p1.px, p1.py); ctx.stroke();
  }

  /* 招工广场铺地：水泥 + 黄色导流线（照片里广场地面有黄色分道线） */
  {
    const P = PLACES['hiring-plaza'];
    const p0 = worldToTex(P.x - 30, P.z - 22);
    ctx.fillStyle = '#b9b3a6';
    ctx.fillRect(p0.px, p0.py, texScale(60), texScale(48));
    ctx.strokeStyle = 'rgba(196,168,96,.85)';
    ctx.lineWidth = Math.max(2, texScale(0.6));
    for (let i = -2; i <= 2; i++) {
      const A = worldToTex(P.x - 30, P.z + i * 5.4);
      const B = worldToTex(P.x + 30, P.z + i * 5.4);
      ctx.beginPath(); ctx.moveTo(A.px, A.py); ctx.lineTo(B.px, B.py); ctx.stroke();
    }
  }

  /* ④ 噪点：一次性叠一张 512 的低分辨率噪点图放大（globalAlpha 混合）。
     如果对 2048² 逐像素遍历，光这一项就要 400 万次循环，首屏会明显卡顿；
     放大混合的等效观感一致（都是细颗粒），成本却低一个数量级。 */
  {
    const NS = 512;
    const ncv = document.createElement('canvas');
    ncv.width = NS; ncv.height = NS;
    const nctx = ncv.getContext('2d');
    const nimg = nctx.createImageData(NS, NS);
    const nd = nimg.data;
    for (let i = 0; i < nd.length; i += 4) {
      const v = 128 + (rng() - 0.5) * 255;
      nd[i] = v; nd[i + 1] = v; nd[i + 2] = v; nd[i + 3] = 255;
    }
    nctx.putImageData(nimg, 0, 0);
    ctx.save();
    ctx.globalAlpha = 0.055;
    ctx.globalCompositeOperation = 'overlay';
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(ncv, 0, 0, S, S);
    ctx.restore();
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = LOW_POWER ? 2 : 8;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  return tex;
}

/* -------- 文字贴图：匾额 / LED 公示屏 / 提示牌 -------- */

function makeSignTexture(text, opt) {
  opt = opt || {};
  const W = opt.w || 1024, H = opt.h || 256;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = opt.bg || '#f3ece0';
  ctx.fillRect(0, 0, W, H);
  if (opt.border) {
    ctx.strokeStyle = opt.borderColor || '#8d7a52';
    ctx.lineWidth = Math.max(3, H * 0.055);
    ctx.strokeRect(ctx.lineWidth / 2, ctx.lineWidth / 2, W - ctx.lineWidth, H - ctx.lineWidth);
  }
  const chars = Array.from(text);
  const size = opt.size || Math.floor(H * (opt.sizeRatio || 0.62));
  ctx.fillStyle = opt.fg || '#2b2621';
  ctx.font = (opt.weight || '700') + ' ' + size + 'px ' +
    (opt.font || '"Songti SC","STSong","SimSun","Noto Serif SC",serif');
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  if (opt.vertical && chars.length > 1) {
    // 竖排（楹联）：从上到下
    const step = Math.min(H / chars.length, size * 1.12);
    const startY = H / 2 - (chars.length - 1) * step / 2;
    chars.forEach((ch, i) => ctx.fillText(ch, W / 2, startY + i * step));
  } else {
    const step = W / chars.length;
    chars.forEach((ch, i) => {
      // 传统匾额自右向左
      const cx = opt.ltr ? step * (i + 0.5) : W - step * (i + 0.5);
      ctx.fillText(ch, cx, H / 2 + H * 0.02);
    });
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** LED 招工信息屏：模仿「海珠区纺织零工市场—招工信息发布」的蓝底表格 */
function makeLedTexture() {
  const W = 1024, H = 640;
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#f2f4f8';
  ctx.fillRect(0, 0, W, H);
  // 蓝底标题
  ctx.fillStyle = '#2f5fa8';
  ctx.fillRect(0, 0, W, 96);
  ctx.fillStyle = '#ffffff';
  ctx.font = '700 46px "Songti SC","STSong","SimSun",serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('海珠区纺织零工市场—招工信息发布', W / 2, 50);

  ctx.textAlign = 'left';
  ctx.font = '24px "Microsoft YaHei","PingFang SC",sans-serif';
  ctx.fillStyle = '#40474f';
  ctx.fillText('发布时间：2026.8.28', 26, 130);

  // 表头
  const cols = [24, 200, 380, 560, 720, 900];
  const heads = ['所招工种', '薪资待遇', '企业名称', '联系人', '联系电话', '招聘人数'];
  ctx.fillStyle = '#e8ecf3';
  ctx.fillRect(16, 160, W - 32, 44);
  ctx.fillStyle = '#2b3138';
  ctx.font = '700 22px "Microsoft YaHei",sans-serif';
  heads.forEach((h, i) => ctx.fillText(h, cols[i], 183));

  const rows = [
    ['整件车位', '7000—10000', '莉翔制衣', '王师傅', '17512960980', '4'],
    ['装拉链', '7000—10000', '莉翔制衣', '管师傅', '13580961078', '1'],
    ['前后袋', '7000—10000', '莉翔制衣', '邹师傅', '18970653591', '4'],
    ['车脚边', '7000—10000', '莉翔制衣', '王厂', '13570398446', '2'],
    ['上腰', '7000—10000', '利玥服装', '刘师傅', '13600000000', '1'],
    ['尾部杂工', '7000—10000', '利玥服装', '/', '13700000000', '1']
  ];
  ctx.font = '21px "Microsoft YaHei",sans-serif';
  rows.forEach((r, ri) => {
    const y = 204 + ri * 62;
    ctx.fillStyle = ri % 2 ? '#ffffff' : '#f7f9fc';
    ctx.fillRect(16, y, W - 32, 62);
    ctx.strokeStyle = '#dfe4ec';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(16, y + 62.5); ctx.lineTo(W - 16, y + 62.5); ctx.stroke();
    r.forEach((cell, ci) => {
      ctx.fillStyle = ci === 0 ? '#B84A3A' : '#39414a';
      ctx.font = (ci === 0 ? '700 ' : '') + '21px "Microsoft YaHei",sans-serif';
      ctx.fillText(cell, cols[ci], y + 36);
    });
  });
  ctx.fillStyle = '#5a6470';
  ctx.font = '18px "Microsoft YaHei",sans-serif';
  ctx.fillText('添加招工广场微信免费发布招工信息，微信号：18026423804', 24, H - 24);

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** 简易像素风小图标贴图（清远外联入口用，不用外链图片） */
function makeIconTexture(kind) {
  const S = 128;
  const cv = document.createElement('canvas');
  cv.width = S; cv.height = S;
  const ctx = cv.getContext('2d');
  ctx.clearRect(0, 0, S, S);
  const hex = (v) => '#' + v.toString(16).padStart(6, '0');
  if (kind === 'factory') {
    // 厂房 + 烟囱：表示"产业园"
    ctx.fillStyle = hex(C.green);
    ctx.beginPath();
    ctx.moveTo(14, 100); ctx.lineTo(14, 58); ctx.lineTo(44, 76); ctx.lineTo(44, 58);
    ctx.lineTo(74, 76); ctx.lineTo(74, 46); ctx.lineTo(96, 46);
    ctx.lineTo(96, 100); ctx.closePath(); ctx.fill();
    ctx.fillStyle = hex(C.brick);
    ctx.fillRect(78, 18, 14, 32);
    ctx.fillStyle = hex(C.paper);
    for (let i = 0; i < 3; i++) ctx.fillRect(24 + i * 20, 82, 10, 12);
  } else {
    // 箭头：产业转移方向
    ctx.fillStyle = hex(C.brick);
    ctx.beginPath();
    ctx.moveTo(18, 46); ctx.lineTo(74, 46); ctx.lineTo(74, 26); ctx.lineTo(112, 64);
    ctx.lineTo(74, 102); ctx.lineTo(74, 82); ctx.lineTo(18, 82); ctx.closePath(); ctx.fill();
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/* ==========================================================================
 * 3. 几何工具：盒子 UV 展开 / 合并 / 翘角屋檐
 * ========================================================================*/

/**
 * 把 BoxGeometry 的 UV 改写成「按世界尺度平铺」：
 *  BoxGeometry 面序 0:+x 1:-x 2:+y 3:-y 4:+z 5:-z，每面 4 个顶点
 *  - 四个立面：u 按宽/深缩放，v 按高度缩放 → 同一贴图在每栋楼上开间大小一致
 *  - 顶/底面：按世界尺寸平铺（供屋顶水泥贴图）
 * vOffset 为每栋楼随机取值，避免左右相邻楼房窗线完全对齐（真实城中村就是这样错位的）
 */
function remapBoxUV(geo, w, h, d, vOffset) {
  const uv = geo.attributes.uv;
  const su = 1 / TILE_U, sv = 1 / TILE_V;
  const offsets = [
    [d * su, h * sv], [d * su, h * sv],
    [w * su, d * su], [w * su, d * su],
    [w * su, h * sv], [w * su, h * sv]
  ];
  const raw = uv.array.slice();
  for (let f = 0; f < 6; f++) {
    const [ou, ov] = offsets[f];
    for (let i = 0; i < 4; i++) {
      const k = f * 8 + i * 2;
      uv.array[k] = raw[k] * ou;
      uv.array[k + 1] = raw[k + 1] * ov + (vOffset || 0);
    }
  }
  uv.needsUpdate = true;
}

/** 顶点色：给整块几何乘一个色调（顶面略亮、底面略暗，增加体积感） */
function tintGeometry(geo, color, topBoost, bottomMul) {
  const pos = geo.attributes.position;
  const n = pos.count;
  const arr = new Float32Array(n * 3);
  const c = new THREE.Color(color);
  const boost = topBoost === undefined ? 1.0 : topBoost;
  const bmul = bottomMul === undefined ? 1.0 : bottomMul;
  for (let i = 0; i < n; i++) {
    const y = pos.getY(i);
    let f = 1;
    // 用局部 y 的相对位置做很轻的明暗（合并前计算，局部坐标已知）
    f = bmul + (boost - bmul) * clamp(y / 30, 0, 1);
    arr[i * 3] = c.r * f;
    arr[i * 3 + 1] = c.g * f;
    arr[i * 3 + 2] = c.b * f;
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(arr, 3));
}

/**
 * 合并一组 BufferGeometry 成一个（position / normal / uv / color，带索引）。
 *
 * 为什么不用 InstancedMesh：
 *   楼体虽然是同一个 BoxGeometry，但每栋楼的**开间数**不同——贴图 UV 必须按
 *   世界尺寸缩放（见 remapBoxUV），否则楼越宽窗户被拉得越扁。InstancedMesh
 *   的 UV 是几何体自带的，无法逐实例缩放，所以这里走"烘焙进一个大几何体"的路线。
 *   顶点色已经承担了逐栋的颜色差异，四边形数量在十万级，合并后只有 6 个 draw call，
 *   比几百个独立 Mesh 快得多，代价（约 20e3 顶点 × 4 属性）也完全可接受。
 *
 * 为什么不用 THREE.BufferGeometryUtils：
 *   它属于 Three.js 的 examples/jsm 外挂模块，不在 vendor 的 three.module.min.js 里，
 *   运行时一定是 undefined。所以这里自带一份实现，不依赖外挂、也不走 CDN。
 */
function mergeGeometries(list) {
  return mergeManual(list);
}

/** 手写合并（保险起见，不依赖 addons） */
function mergeManual(list) {
  const keys = ['position', 'normal', 'uv', 'color'];
  const present = keys.filter(k => list.every(g => g.attributes[k]));
  const out = new THREE.BufferGeometry();
  for (const k of present) {
    const itemSize = list[0].attributes[k].itemSize;
    let total = 0;
    for (const g of list) total += g.attributes[k].count;
    const arr = new Float32Array(total * itemSize);
    let off = 0;
    for (const g of list) {
      arr.set(g.attributes[k].array, off);
      off += g.attributes[k].count * itemSize;
    }
    out.setAttribute(k, new THREE.Float32BufferAttribute(arr, itemSize));
  }
  const idx = [];
  let base = 0;
  let indexed = true;
  for (const g of list) {
    if (!g.index) { indexed = false; break; }
  }
  if (indexed) {
    let total = 0;
    for (const g of list) total += g.index.count;
    const ia = total > 65535 ? new Uint32Array(total) : new Uint16Array(total);
    let o = 0;
    for (const g of list) {
      const gi = g.index.array;
      for (let i = 0; i < gi.length; i++) ia[o + i] = gi[i] + base;
      o += gi.length;
      base += g.attributes.position.count;
    }
    out.setIndex(new THREE.BufferAttribute(ia, 1));
  }
  return out;
}

/**
 * 中式瓦顶（牌坊最核心的可辨认特征）。
 *
 * 几何构成：一个**闭合的屋面实体**，而不是几片飘带。
 *   - 正脊：沿 x 的线，y = eaveH，两端按 |t|^e 起翘（这就是"起翘"）
 *   - 前后檐：z = ±halfD，y = curve(t)（比正脊低 eaveH，角部同样上翘）
 *   - 顶面 / 底面：分别把正脊与前后檐连起来；底面整体下移 thick，
 *     于是檐口自然有了厚度（瓦口），不用再单独贴封边
 *   - 两端山面：沿 x = ±halfW 闭合，封住屋面，不会看到空腔
 *   - 檐口边：把顶面与底面在四条边上缝合
 *
 * 为什么之前那版是坏的：早先只画了前后两条屋面带，中间（正脊）是空的，
 * 渲染出来就是两片红色飘带、牌坊像空架子。必须把正脊与檐口真正连成面。
 */
function curvedEaveGeometry(halfW, halfD, eaveH, lift, segments, e) {
  segments = Math.max(4, segments || 14);
  e = e || 2.4;
  const thick = 0.2;
  const curve = (t) => Math.pow(Math.abs(t), e) * lift;
  const RIDGE_SHRINK = 0.96;          // 正脊比檐口略短，屋面才有收分
  const pos = [], uv = [];

  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  /** 正脊上第 i 点 */
  const ridge = (i) => {
    const t = -1 + 2 * i / segments;
    return V(t * halfW * RIDGE_SHRINK, curve(t) + eaveH, 0);
  };
  /** 前后檐上第 i 点（zs = +1 前檐 / -1 后檐） */
  const eave = (i, zs) => {
    const t = -1 + 2 * i / segments;
    return V(t * halfW, curve(t), zs * halfD);
  };
  /** 端部檐角（x = ±halfW 处的两个角点） */
  const corner = (xs, zs) => V(xs * halfW, curve(xs), zs * halfD);
  /** 端部正脊点（x = ±halfW·RIDGE_SHRINK） */
  const ridgeEnd = (xs) => V(xs * halfW * RIDGE_SHRINK, curve(xs) + eaveH, 0);

  const push = (v, dy) => { pos.push(v.x, v.y + (dy || 0), v.z); uv.push(v.x * 0.5, v.z * 0.5); };
  const tri = (a, b, c, dy) => { push(a, dy); push(b, dy); push(c, dy); };
  const quad = (a, b, c, d, dy) => { tri(a, b, c, dy); tri(a, c, d, dy); };

  for (let i = 0; i < segments; i++) {
    const r0 = ridge(i), r1 = ridge(i + 1);
    for (const zs of [1, -1]) {
      const e0 = eave(i, zs), e1 = eave(i + 1, zs);
      // 顶面主坡
      if (zs > 0) quad(r0, r1, e1, e0, 0);
      else quad(r1, r0, e0, e1, 0);
      // 底面（整体下移 thick；绕序反过来，法线朝下）
      if (zs > 0) quad(r0, e0, e1, r1, -thick);
      else quad(r1, e1, e0, r0, -thick);
    }
  }

  // 两端山面：正脊端点 <-> 该端的两个檐角
  for (const xs of [-1, 1]) {
    const r = ridgeEnd(xs);
    const cF = corner(xs, 1), cB = corner(xs, -1);
    if (xs > 0) {
      tri(r, cF, cB, 0); tri(r, cB, cF, -thick);
    } else {
      tri(r, cB, cF, 0); tri(r, cF, cB, -thick);
    }
    // 端部檐口（山面下缘到檐角）
    const iEnd = xs > 0 ? segments : 0;
    const eF = eave(iEnd, 1), eB = eave(iEnd, -1);
    quad(eF, cF, cB, eB, -thick);
  }

  // 檐口缝合成独立的条带（顶边 -> 底边），给屋面收口
  const seam = (p0, p1) => {
    const t0 = p0.clone(), t1 = p1.clone();
    const b0 = p0.clone(); b0.y -= thick;
    const b1 = p1.clone(); b1.y -= thick;
    quad(t0, t1, b1, b0, 0);
    quad(b0, b1, t1, t0, 0);
  };
  for (let i = 0; i < segments; i++) {
    seam(eave(i, 1), eave(i + 1, 1));
    seam(eave(i, -1), eave(i + 1, -1));
  }
  for (const xs of [-1, 1]) {
    const iEnd = xs > 0 ? segments : 0;
    seam(eave(iEnd, -1), eave(iEnd, 1));
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.computeVertexNormals();
  return geo;
}

/** 单坡挑檐（雨棚 / 铁皮加建顶） */
function makeShedRoof(w, d, h, color, tex) {
  const geo = new THREE.BoxGeometry(w, h, d);
  geo.translate(0, h / 2, 0);
  tintGeometry(geo, color, 1.05, 0.85);
  if (tex) remapBoxUV(geo, w, h, d, 0);
  return geo;
}

/* ==========================================================================
 * 4. 材质库
 * ========================================================================*/

function createMaterials() {
  const facadeTextures = makeFacadeTextures();
  const roofTex = makeRoofTexture();
  const tileTex = makeTileTexture();

  // 4 档外立面：以纸白 / 浅灰 / 米色为主，一档偏砖色（数量由 pickFacade 的权重控制）
  const facadeDefs = [
    { name: 'plaster-warm', color: 0xDCD2BE },   // 米白（微暖）
    { name: 'cement-cool', color: 0xCFCABE },    // 浅灰
    { name: 'cement-sand', color: 0xC6B99C },    // 砂黄
    { name: 'brick-red', color: 0xAE7A63 }       // 砖红
  ];
  const facades = facadeDefs.map((def, i) => {
    const m = new THREE.MeshLambertMaterial({
      map: facadeTextures[i % facadeTextures.length],
      vertexColors: true
    });
    m.name = def.name;
    return { material: m, base: def.color, geos: [] };
  });

  const roofMat = new THREE.MeshLambertMaterial({
    map: roofTex, vertexColors: true, polygonOffset: true, polygonOffsetFactor: -1
  });
  roofMat.name = 'roof';
  const roofGeos = [];

  const metalMat = new THREE.MeshLambertMaterial({
    color: 0xffffff, map: tileTex, vertexColors: true
  });
  metalMat.name = 'metal';
  const metalGeos = [];

  const detailMat = new THREE.MeshLambertMaterial({ vertexColors: true });
  detailMat.name = 'detail';
  const detailGeos = [];

  const paintMat = new THREE.MeshLambertMaterial({ vertexColors: true });
  paintMat.name = 'paint';
  const paintGeos = [];

  return {
    facadeTextures, roofTex, tileTex,
    facades, roofMat, roofGeos,
    metalMat, metalGeos,
    detailMat, detailGeos,
    paintMat, paintGeos,
    /** 按权重挑外立面档位：多数纸白/浅灰/米色，少量砖色 */
    pickFacade(rng) {
      const r = rng();
      if (r < 0.36) return 0;
      if (r < 0.66) return 1;
      if (r < 0.88) return 2;
      return 3;
    },
    dispose() {
      facadeTextures.forEach(t => t.dispose());
      roofTex.dispose();
      tileTex.dispose();
      facades.forEach(f => f.material.dispose());
      roofMat.dispose();
      metalMat.dispose();
      detailMat.dispose();
      paintMat.dispose();
    }
  };
}

/* 常用色（用后即弃的小材质，统一登记以便 dispose） */
function makeSimpleMaterials(reg) {
  const mk = (color, opt) => {
    const m = new THREE.MeshLambertMaterial(Object.assign({ color }, opt || {}));
    reg.push(m);
    return m;
  };
  return {
    brick: mk(C.brick),
    ink: mk(C.ink),
    paper: mk(C.paper),
    blue: mk(C.blue),
    yellow: mk(C.yellow),
    green: mk(0x5E7A55),
    stone: mk(0xD6D1C6),
    white: mk(0xEDE9E0),
    darkGlass: mk(0x3A3B38, { emissive: 0x111111 }),
    steel: mk(0xB9BCB6),
    canvasTop: mk(0xEFE9DC, { side: THREE.DoubleSide }),
    tarp: mk(0x8C8F86),
    filmByColor: {}
  };
}

/**
 * 按颜色取材质，但**每个 mesh 一份独立实例**。
 * 为什么不用共享缓存：选中高亮是靠改 material.emissive 实现的，若两座牌坊共用
 * 同一份材质，点亮康乐牌坊时鹭江牌坊会一起亮。牌坊mesh数量只有几十个，克隆的成本
 * 可以忽略；街区里几百个盒子走的是"合并几何体 + 顶点色"的路线，不经过这里。
 */
function cloneMats(simple, reg, tileTex) {
  const cache = {};
  const byColor = (hex) => {
    const k = hex >>> 0;
    if (!cache[k]) {
      const m = new THREE.MeshLambertMaterial({ color: k });
      cache[k] = m;
      reg.push(m);
    }
    return cache[k];
  };
  const clone = (src) => {
    const m = src.clone();
    reg.push(m);
    return m;
  };
  return {
    byColor,
    clone,
    /** 常用材质的本地副本 */
    stone: clone(simple.stone),
    white: clone(simple.white),
    steel: clone(simple.steel),
    brick: clone(simple.brick),
    paper: clone(simple.paper),
    /** 瓦顶：砖红向墨灰压一点，才是岭南灰瓦偏赭的观感 */
    tile() {
      const m = new THREE.MeshLambertMaterial({
        color: new THREE.Color(C.brick).lerp(new THREE.Color(0x6E6259), 0.18),
        map: tileTex,
        side: THREE.DoubleSide
      });
      reg.push(m);
      return m;
    }
  };
}

/** 雀替几何体缓存（按尺寸），避免每次调用都新建 ExtrudeGeometry */
const bracketGeoCache = {};

/** 通用：中式立柱（带柱础与柱头线脚） */
function makeColumn(simple, reg, h, w, color) {
  const g = new THREE.Group();
  const shaftGeo = new THREE.BoxGeometry(w, h, w);
  const baseGeo = new THREE.BoxGeometry(w * 1.36, 0.7, w * 1.36);
  const capGeo = new THREE.BoxGeometry(w * 1.2, 0.36, w * 1.2);
  reg.push(shaftGeo, baseGeo, capGeo);

  const shaft = new THREE.Mesh(shaftGeo, simple.byColor(color));
  shaft.position.y = h / 2;
  shaft.castShadow = true; shaft.receiveShadow = true;
  g.add(shaft);
  const base = new THREE.Mesh(baseGeo, simple.stone);
  base.position.y = 0.35;
  base.castShadow = true;
  g.add(base);
  const cap = new THREE.Mesh(capGeo, simple.stone);
  cap.position.y = h - 0.2;
  g.add(cap);
  g.userData.height = h;
  return g;
}

/** 通用：雀替（柱与额枋之间的角撑，中式牌坊的辨识细节） */
function makeBracket(simple, reg, size, color) {
  const key = size.toFixed(3);
  if (!bracketGeoCache[key]) {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(size, 0);
    shape.lineTo(size, size * 0.18);
    shape.quadraticCurveTo(size * 0.3, size * 0.2, 0, size);
    shape.lineTo(0, 0);
    const geo = new THREE.ExtrudeGeometry(shape, { depth: size * 0.32, bevelEnabled: false });
    geo.rotateY(Math.PI / 2);
    bracketGeoCache[key] = geo;
  }
  const m = new THREE.Mesh(bracketGeoCache[key], simple.byColor(color));
  m.castShadow = true;
  return m;
}

/* ==========================================================================
 * 5. 街区生成：楼房 / 环境细节
 * ========================================================================*/

/* 楼体色板：纸白 / 浅灰 / 米色打底，混入少量灰绿、工作服蓝、招牌黄、砖红。
   刻意的"没有纯白"：真石漆/水泥抹面在日光下本来就不是白的，
   留出白色只会让整片街区在浅色天空下发灰、发飘。 */
const BUILDING_COLORS = [
  // 纸白 / 米 / 浅灰（10）
  0xE0D6C2, 0xD8CEBB, 0xE4DBC8, 0xD2C9BA, 0xDCD4C4,
  0xD5CDBE, 0xE1D8C6, 0xCEC7B9, 0xDAD2C1, 0xC9C3B6,
  // 砂 / 赭（2）
  0xC3B091, 0xB8A585,
  // 灰绿（2，环境色）
  0x9AA595, 0x8F9C8C,
  // 工作服蓝（2）
  0x8098A6, 0x6F879B,
  // 招牌黄（2）
  0xC3A96F, 0xB99E62,
  // 砖红（2）
  0xA87261, 0x9C6A58
];

function pickBuildingColor(rng) {
  const r = rng();
  if (r < 0.48) return BUILDING_COLORS[Math.floor(rng() * 10)];           // 纸白/米/浅灰
  if (r < 0.66) return BUILDING_COLORS[10 + Math.floor(rng() * 2)];       // 砂 / 赭
  if (r < 0.78) return BUILDING_COLORS[12 + Math.floor(rng() * 2)];       // 灰绿
  if (r < 0.89) return BUILDING_COLORS[14 + Math.floor(rng() * 2)];       // 蓝
  if (r < 0.95) return BUILDING_COLORS[16 + Math.floor(rng() * 2)];       // 黄
  return BUILDING_COLORS[18 + Math.floor(rng() * 2)];                     // 砖红
}

/** 屋顶色：铁皮灰为主（比女儿墙略深，才有"压在楼上"的重量），混少量蓝/黄/砖红铁皮。
 *  注意屋顶面朝上、几乎正对主光，若按"看起来刚好"的灰度去选，
 *  渲染出来会被高光与 ACES 拉成一片白——所以这里比直觉再暗一档。 */
const ROOF_COLORS = [
  0x9E988B, 0x948E81, 0xA8A295, 0x8C8679, 0xACA699,
  0x7C8A8A, 0x72828C,     // 蓝灰铁皮
  0x9C8759,               // 黄铁皮
  0x865C4E                // 砖红铁皮
];
function pickRoofColor(rng) {
  const r = rng();
  if (r < 0.66) return ROOF_COLORS[Math.floor(rng() * 5)];
  if (r < 0.85) return ROOF_COLORS[5 + Math.floor(rng() * 2)];
  if (r < 0.93) return ROOF_COLORS[7];
  return ROOF_COLORS[8];
}


/** 单栋楼：主体 + 屋顶层 + 女儿墙 + 楼顶铁皮加建 + 雨棚 */
function addBuilding(mats, rng, cx, cz, w, d, h, rotY, ctx3d) {
  const matIdx = mats.pickFacade(rng);
  const wallColor = pickBuildingColor(rng);
  const roofColor = pickRoofColor(rng);
  const vOffset = rng.range(0, ATLAS_ROWS);
  // 每栋楼给一点点朝向抖动（±1.6°），避免整条街完全平行——真实城中村是"歪"的
  const jitter = rng.range(-0.028, 0.028);

  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, rotY + jitter, 0));
  const one = new THREE.Vector3(1, 1, 1);
  const pos = new THREE.Vector3(cx, 0, cz);

  // --- 主体 ---
  const body = new THREE.BoxGeometry(w, h, d);
  body.translate(0, h / 2, 0);
  remapBoxUV(body, w, h, d, vOffset);
  tintGeometry(body, wallColor, 1.06, 0.90);
  m4.compose(pos, q, one);
  body.applyMatrix4(m4);
  mats.facades[matIdx].geos.push(body);

  // --- 屋顶面（单独一张贴图，避免被外立面窗格纹污染） ---
  const roof = new THREE.BoxGeometry(w - 0.05, 0.34, d - 0.05);
  roof.translate(0, h + 0.17, 0);
  remapBoxUV(roof, w - 0.05, 0.34, d - 0.05, 0);
  tintGeometry(roof, roofColor, 1.12, 0.88);
  m4.compose(pos, q, one);
  roof.applyMatrix4(m4);
  mats.roofGeos.push(roof);

  // --- 低层楼顶的铁皮加建（制衣作坊最典型的载体） ---
  const shedP = rng();
  if (shedP < (ctx3d.lowPower ? 0.32 : 0.52)) {
    const sx = w * rng.range(0.34, 0.62);
    const sz = d * rng.range(0.32, 0.55);
    const sh = rng.range(1.9, 2.9);
    const ox = rng.range(-1, 1) * (w - sx) * 0.3;
    const oz = rng.range(-1, 1) * (d - sz) * 0.3;
    const shed = new THREE.BoxGeometry(sx, sh, sz);
    shed.translate(0, sh / 2, 0);
    remapBoxUV(shed, sx, sh, sz, rng.range(0, ATLAS_ROWS));
    tintGeometry(shed, rng.chance(0.6) ? 0xA9A296 : roofColor, 1.1, 0.9);
    const lp = new THREE.Vector3(cx + ox, h + 0.34, cz + oz);
    m4.compose(lp, q, one);
    shed.applyMatrix4(m4);
    mats.metalGeos.push(shed);

    // 铁皮棚顶（略微出挑）
    const cap = new THREE.BoxGeometry(sx + 0.7, 0.16, sz + 0.7);
    cap.translate(0, 0, 0);
    remapBoxUV(cap, sx + 0.7, 0.16, sz + 0.7, 0);
    tintGeometry(cap, rng.chance(0.5) ? 0xB4ADA0 : 0x9FA8A6, 1.15, 0.9);
    const capp = new THREE.Vector3(cx + ox, h + 0.34 + sh + 0.5, cz + oz);
    m4.compose(capp, q, one);
    cap.applyMatrix4(m4);
    mats.metalGeos.push(cap);
  }

  // --- 女儿墙 / 屋面栏杆（一部分楼有，屋面就不是光板了） ---
  if (rng.chance(0.45)) {
    const ph = rng.range(0.6, 1.0);
    const pw = 0.28;
    const segs = [
      [w, pw, 0, (d - pw) / 2], [w, pw, 0, -(d - pw) / 2],
      [pw, d, (w - pw) / 2, 0], [pw, d, -(w - pw) / 2, 0]
    ];
    for (const [sw, sd, ox, oz] of segs) {
      const g = new THREE.BoxGeometry(sw, ph, sd);
      g.translate(0, ph / 2, 0);
      remapBoxUV(g, sw, ph, sd, 0);
      tintGeometry(g, 0xCFC8BA, 1.0, 0.9);
      const pp = new THREE.Vector3(cx + ox, h + 0.34, cz + oz);
      m4.compose(pp, q, one);
      g.applyMatrix4(m4);
      mats.roofGeos.push(g);
    }
  }

  // --- 雨棚 / 遮阳篷（沿街面） ---
  if (rng.chance(ctx3d.lowPower ? 0.18 : 0.34)) {
    const aw = w * rng.range(0.5, 0.9);
    const ad = rng.range(1.1, 1.9);
    const ay = rng.range(2.4, 3.2);
    const dz = (d / 2 + ad / 2) * (rng.chance(0.5) ? 1 : -1);
    const g = new THREE.BoxGeometry(aw, 0.12, ad);
    g.translate(0, 0, 0);
    remapBoxUV(g, aw, 0.12, ad, 0);
    const col = rng.pick([0x536976, 0xC2A264, 0xB84A3A, 0x6E7C63, 0x8C8F86]);
    tintGeometry(g, col, 1.0, 0.8);
    const p = new THREE.Vector3(cx + 0, ay, cz + dz);
    const qq = new THREE.Quaternion().setFromEuler(new THREE.Euler(rng.range(-0.14, -0.04), rotY + jitter, 0));
    m4.compose(p, qq, one);
    g.applyMatrix4(m4);
    mats.paintGeos.push(g);
  }

  // 记录给拾取 / 统计用（不做成独立对象，只登记体量）
  return { cx, cz, w, d, h };
}

/**
 * 环境细节：空调外机、水箱、晾衣杆、招牌、电线。
 * 全部用 InstancedMesh，几百个物件也只占几个 draw call。
 */
function buildEnvDetails(root, rng, buildings, textures, ctx3d) {
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const groups = {
    ac: [],
    tank: [],
    pole: [],
    laundry: [],
    sign: [],
    wire: []
  };

  // ---- 收集安放点（墙面中部 / 屋顶） ----
  for (const b of buildings) {
    if (rng.chance(ctx3d.lowPower ? 0.25 : 0.5)) {
      groups.ac.push({
        x: b.cx + rng.range(-0.3, 0.3) * b.w,
        y: Math.max(3.4, b.h * rng.range(0.35, 0.75)),
        z: b.cz + (b.d / 2 + 0.45) * rng.sign(),
        ry: 0
      });
    }
    if (rng.chance(0.22)) {
      groups.tank.push({ x: b.cx + rng.range(-0.25, 0.25) * b.w, y: b.h + 0.5, z: b.cz + rng.range(-0.25, 0.25) * b.d, ry: rng.range(0, 3.14) });
    }
    if (rng.chance(0.3)) {
      groups.pole.push({ x: b.cx + rng.range(-0.3, 0.3) * b.w, y: b.h + 0.6, z: b.cz + (b.d / 2 + 0.5), ry: rng.range(0, 3.14) });
    }
    if (rng.chance(0.34)) {
      groups.laundry.push({
        x: b.cx, y: Math.max(3.0, b.h * rng.range(0.4, 0.8)), z: b.cz + (b.d / 2 + 0.75) * rng.sign(),
        ry: rng.range(-0.2, 0.2)
      });
    }
    if (rng.chance(0.28)) {
      groups.sign.push({
        x: b.cx, y: rng.range(2.6, 4.4), z: b.cz + (b.d / 2 + 0.18) * rng.sign(),
        ry: 0
      });
    }
  }

  // ---- 空调外机 ----
  if (groups.ac.length) {
    const geo = new THREE.BoxGeometry(0.95, 0.62, 0.42);
    const mat = new THREE.MeshLambertMaterial({ color: 0xD9D4C8 });
    ctx3d.track(mat);
    const mesh = new THREE.InstancedMesh(geo, mat, groups.ac.length);
    mesh.name = 'ac-units';
    groups.ac.forEach((it, i) => {
      dummy.position.set(it.x, it.y, it.z);
      dummy.rotation.set(0, it.ry, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    mesh.castShadow = false;
    root.add(mesh);
    ctx3d.track(geo);
  }

  // ---- 屋顶水箱 ----
  if (groups.tank.length) {
    const geo = new THREE.CylinderGeometry(0.72, 0.72, 1.5, 12);
    const mat = new THREE.MeshLambertMaterial({ color: 0xB8BCB6 });
    ctx3d.track(mat);
    const mesh = new THREE.InstancedMesh(geo, mat, groups.tank.length);
    mesh.name = 'water-tanks';
    groups.tank.forEach((it, i) => {
      dummy.position.set(it.x, it.y + 0.75, it.z);
      dummy.rotation.set(0, it.ry, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    root.add(mesh);
    ctx3d.track(geo);
  }

  // ---- 晾衣杆 + 衣物（楼顶晒衣服是这里最日常的"生活痕迹"） ----
  if (groups.laundry.length) {
    const barGeo = new THREE.CylinderGeometry(0.05, 0.05, 4.6, 5);
    barGeo.rotateZ(Math.PI / 2);
    const barMat = new THREE.MeshLambertMaterial({ color: 0x8E8A80 });
    ctx3d.track(barMat); ctx3d.track(barGeo);
    const bar = new THREE.InstancedMesh(barGeo, barMat, groups.laundry.length);
    const clothGeo = new THREE.BoxGeometry(0.55, 1.05, 0.06);
    const clothMat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    ctx3d.track(clothMat); ctx3d.track(clothGeo);
    const PER = 5;
    const cloth = new THREE.InstancedMesh(clothGeo, clothMat, groups.laundry.length * PER);
    cloth.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(groups.laundry.length * PER * 3), 3);
    const CLOTH_COLORS = [0xF1EBDD, 0xE4DCCE, 0x8FA3AD, 0xC2A264, 0x536976, 0xB84A3A, 0xD8D2C6];
    let ci = 0;
    groups.laundry.forEach((it, i) => {
      dummy.position.set(it.x, it.y, it.z);
      dummy.rotation.set(0, it.ry, 0);
      dummy.updateMatrix();
      bar.setMatrixAt(i, dummy.matrix);
      for (let k = 0; k < PER; k++) {
        dummy.position.set(it.x + (k - (PER - 1) / 2) * 0.82, it.y - 0.62, it.z + 0.02);
        dummy.rotation.set(0, it.ry, 0);
        dummy.updateMatrix();
        cloth.setMatrixAt(ci, dummy.matrix);
        color.setHex(CLOTH_COLORS[Math.floor(rng() * CLOTH_COLORS.length)]);
        cloth.setColorAt(ci, color);
        ci++;
      }
    });
    bar.instanceMatrix.needsUpdate = true;
    cloth.instanceMatrix.needsUpdate = true;
    if (cloth.instanceColor) cloth.instanceColor.needsUpdate = true;
    root.add(bar); root.add(cloth);
  }

  // ---- 招牌色块（挂在二层位置的小招牌，纸白底 + 砖红/黄/蓝字块） ----
  if (groups.sign.length) {
    const geo = new THREE.BoxGeometry(2.6, 0.75, 0.12);
    const mat = new THREE.MeshLambertMaterial({ color: 0xffffff });
    ctx3d.track(mat); ctx3d.track(geo);
    const mesh = new THREE.InstancedMesh(geo, mat, groups.sign.length);
    mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(groups.sign.length * 3), 3);
    const SIGN_COLORS = [0xC2A264, 0xB84A3A, 0x536976, 0xE6DECD, 0x302D28, 0x8FA3AD, 0xBFA46F];
    groups.sign.forEach((it, i) => {
      dummy.position.set(it.x, it.y, it.z);
      dummy.rotation.set(0, it.ry, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
      color.setHex(SIGN_COLORS[Math.floor(rng() * SIGN_COLORS.length)]);
      mesh.setColorAt(i, color);
    });
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
    root.add(mesh);
  }

  // ---- 电线：沿巷道拉几条细线，是这里最有辨识度的天空细节 ----
  const wirePts = [];
  const wireCount = ctx3d.lowPower ? 10 : 22;
  const th = LANE.deg * Math.PI / 180;
  for (let i = 0; i < wireCount; i++) {
    // 沿一条巷道，在两侧楼顶之间拉线（用二次曲线做垂度）
    const v = LANE.vMin + rng.range(0, LANE.vMax - LANE.vMin);
    const u0 = rng.range(-60, 20);
    const len = rng.range(26, 60);
    const y = rng.range(13, 26);
    const a = new THREE.Vector3(
      Math.cos(th) * u0 + Math.sin(th) * v, y, -Math.sin(th) * u0 + Math.cos(th) * v);
    const b = new THREE.Vector3(
      Math.cos(th) * (u0 + len) + Math.sin(th) * v, y + rng.range(-1.6, 1.6), -Math.sin(th) * (u0 + len) + Math.cos(th) * v);
    if (!insideDistrict(a.x, a.z, -2) || !insideDistrict(b.x, b.z, -2)) continue;
    const mid = a.clone().lerp(b, 0.5);
    mid.y -= rng.range(0.5, 1.4);
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);
    const pts = curve.getPoints(8);
    for (let k = 0; k < pts.length - 1; k++) {
      wirePts.push(pts[k].x, pts[k].y, pts[k].z, pts[k + 1].x, pts[k + 1].y, pts[k + 1].z);
    }
  }
  if (wirePts.length) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(wirePts, 3));
    const m = new THREE.LineBasicMaterial({ color: 0x4A453D, transparent: true, opacity: 0.42 });
    ctx3d.track(m); ctx3d.track(g);
    const lines = new THREE.LineSegments(g, m);
    lines.name = 'power-lines';
    root.add(lines);
  }

  // ---- 屋顶晒衣杆用的立杆 ----
  if (groups.pole.length) {
    const geo = new THREE.CylinderGeometry(0.06, 0.06, 1.2, 5);
    geo.translate(0, 0.6, 0);
    const mat = new THREE.MeshLambertMaterial({ color: 0x8E8A80 });
    ctx3d.track(mat); ctx3d.track(geo);
    const mesh = new THREE.InstancedMesh(geo, mat, groups.pole.length);
    groups.pole.forEach((it, i) => {
      dummy.position.set(it.x, it.y, it.z);
      dummy.rotation.set(0, it.ry, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
    root.add(mesh);
  }
}

/** 行道树：新港西路北侧与广场周边（灰绿，只作环境色） */
function buildTrees(root, rng, ctx3d) {
  const trunkGeo = new THREE.CylinderGeometry(0.16, 0.24, 2.6, 6);
  trunkGeo.translate(0, 1.3, 0);
  const trunkMat = new THREE.MeshLambertMaterial({ color: 0x6B5F4E });
  const crownGeo = new THREE.IcosahedronGeometry(1.9, 1);
  const crownMat = new THREE.MeshLambertMaterial({ color: 0x6E7C63, flatShading: true });
  ctx3d.track(trunkGeo); ctx3d.track(trunkMat); ctx3d.track(crownGeo); ctx3d.track(crownMat);

  const pts = [];
  for (let x = DISTRICT.west - 12; x < DISTRICT.east + 12; x += rng.range(9, 14)) {
    pts.push({ x, z: DISTRICT.north - DISTRICT.roadHalf - 3.2, s: rng.range(0.85, 1.25) });
  }
  // 广场周边
  const P = PLACES['hiring-plaza'];
  for (let i = 0; i < 10; i++) {
    const a = rng.range(0, Math.PI * 2);
    const r = rng.range(22, 30);
    pts.push({ x: P.x + Math.cos(a) * r, z: P.z + Math.sin(a) * r * 0.8, s: rng.range(0.7, 1.1) });
  }
  const dummy = new THREE.Object3D();
  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, pts.length);
  const crowns = new THREE.InstancedMesh(crownGeo, crownMat, pts.length);
  crowns.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(pts.length * 3), 3);
  const col = new THREE.Color();
  pts.forEach((p, i) => {
    dummy.position.set(p.x, 0, p.z);
    dummy.scale.setScalar(p.s);
    dummy.rotation.set(0, rng.range(0, 3.14), 0);
    dummy.updateMatrix();
    trunks.setMatrixAt(i, dummy.matrix);
    dummy.position.set(p.x + rng.range(-0.3, 0.3), 2.7 * p.s, p.z + rng.range(-0.3, 0.3));
    dummy.scale.setScalar(p.s * rng.range(0.85, 1.15));
    dummy.updateMatrix();
    crowns.setMatrixAt(i, dummy.matrix);
    col.setHex(rng.chance(0.5) ? 0x6E7C63 : 0x63735A);
    crowns.setColorAt(i, col);
  });
  trunks.instanceMatrix.needsUpdate = true;
  crowns.instanceMatrix.needsUpdate = true;
  if (crowns.instanceColor) crowns.instanceColor.needsUpdate = true;
  trunks.castShadow = false;
  crowns.castShadow = false;
  root.add(trunks); root.add(crowns);
}

/** 广州大道南高架（片段，用来交代东侧边界，不进入片区内部） */
function buildElevatedRoad(root, mats, ctx3d) {
  const z0 = DISTRICT.north - 8, z1 = southRoadZ(DISTRICT.east) + 12;
  const x = DISTRICT.east + 2.4;
  const deck = new THREE.Mesh(new THREE.BoxGeometry(9.6, 1.1, z1 - z0), mats.steel);
  deck.position.set(x, 9.2, (z0 + z1) / 2);
  deck.castShadow = true;
  deck.receiveShadow = true;
  root.add(deck);
  const railGeo = new THREE.BoxGeometry(0.24, 1.0, z1 - z0);
  for (const s of [-1, 1]) {
    const r = new THREE.Mesh(railGeo, mats.stone);
    r.position.set(x + s * 4.6, 10.1, (z0 + z1) / 2);
    root.add(r);
  }
  const pierGeo = new THREE.CylinderGeometry(0.9, 1.0, 8.4, 10);
  const pierMat = new THREE.MeshLambertMaterial({ color: 0xC2BDB2 });
  ctx3d.track(pierGeo); ctx3d.track(pierMat);
  const n = Math.floor((z1 - z0) / 18);
  const piers = new THREE.InstancedMesh(pierGeo, pierMat, n);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    dummy.position.set(x, 4.2, z0 + 9 + i * 18);
    dummy.updateMatrix();
    piers.setMatrixAt(i, dummy.matrix);
  }
  piers.instanceMatrix.needsUpdate = true;
  root.add(piers);
  ctx3d.track(deck.geometry);
}

/** 片区外的城市示意：一组低矮长方体，压低饱和度。
 *  刻意做得比片区里的楼更小、更远、更淡——它们是"场"，不是主角；
 *  如果背景体块比片区楼房还大，微缩模型的尺度感会立刻垮掉。 */
function buildSurroundings(root, rng, ctx3d) {
  const list = [];
  // 北侧（新港西路以北，中大南门与布匹市场方向）
  for (let i = 0; i < 42; i++) {
    const x = rng.range(GROUND.x0 + 16, GROUND.x1 - 16);
    const z = rng.range(DISTRICT.north - 60, DISTRICT.north - 20);
    list.push({ x, z, w: rng.range(7, 15), d: rng.range(7, 14), h: rng.range(7, 22) });
  }
  // 东西两侧
  for (let i = 0; i < 16; i++) {
    list.push({ x: rng.range(GROUND.x0 + 14, DISTRICT.west - 26), z: rng.range(-95, 70), w: rng.range(7, 15), d: rng.range(7, 14), h: rng.range(6, 20) });
    list.push({ x: rng.range(DISTRICT.east + 26, GROUND.x1 - 14), z: rng.range(-95, 70), w: rng.range(7, 15), d: rng.range(7, 14), h: rng.range(6, 20) });
  }
  // 南侧
  for (let i = 0; i < 22; i++) {
    const x = rng.range(GROUND.x0 + 16, GROUND.x1 - 16);
    const z = rng.range(southRoadZ(x) + 26, GROUND.z1 - 14);
    list.push({ x, z, w: rng.range(7, 15), d: rng.range(7, 14), h: rng.range(7, 21) });
  }
  const base = new THREE.BoxGeometry(1, 1, 1);
  ctx3d.track(base);
  const merged = [];
  for (const b of list) {
    const g = base.clone();
    g.applyMatrix4(new THREE.Matrix4().compose(
      new THREE.Vector3(b.x, b.h / 2, b.z),
      new THREE.Quaternion(),
      new THREE.Vector3(b.w, b.h, b.d)));
    // 比片区内更淡、更冷、更亮，往背景里退（与片区的暖色密集肌理拉开层次）
    const c = new THREE.Color(rng.chance(0.7) ? 0xE7E0D2 : 0xDBD4C6);
    tintGeometry(g, c.getHex(), 1.05, 0.95);
    merged.push(g);
  }
  const geo = mergeGeometries(merged);
  ctx3d.track(geo);
  merged.forEach(g => g.dispose());
  const mat = new THREE.MeshLambertMaterial({ vertexColors: true });
  ctx3d.track(mat);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'surroundings';
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  root.add(mesh);
}

/* ==========================================================================
 * 6. 地标建模
 *    —— 三处必须"精细、可辨认、位置正确"
 * ========================================================================*/

/**
 * 康乐牌坊：两柱 + 单檐 + 匾额（对应 assets/img/field/arch-kangle-1.jpg）
 * 特征：白身柱、云纹雀替、横匾「康樂東約」、瓦顶端部上翘、两侧楹联
 */
function buildKangleArch(simple, ctx3d, reg) {
  const g = new THREE.Group();
  const span = 13.2, colW = 1.25, colH = 11.2;   // 楼高 9-24（3-8 层），原 6.2 约 2 层会被埋
  const wallCol = 0xEDE7DA;

  for (const s of [-1, 1]) {
    const col = makeColumn(simple, reg, colH, colW, wallCol);
    col.position.set(s * span / 2, 0, 0);
    g.add(col);
    for (const ss of [-1, 1]) {
      const br = makeBracket(simple, reg, 1.05, 0xE2DACB);
      br.position.set(s * (span / 2 - colW / 2 * ss), colH - 1.5, -0.42);
      g.add(br);
    }
    // 楹联（竖排小字，示意）
    const cgeo = new THREE.PlaneGeometry(0.5, 3.0);
    const cmat = new THREE.MeshLambertMaterial({
      map: makeSignTexture(s < 0 ? '康樂東約' : '鳳和康樂',
        { w: 128, h: 768, vertical: true, bg: '#e9e2d3', fg: '#8a3a2c', sizeRatio: 0.58, border: false }),
      side: THREE.DoubleSide
    });
    reg.push(cgeo, cmat);
    const couplet = new THREE.Mesh(cgeo, cmat);
    couplet.position.set(s * (span / 2 + 0.02), 3.1, colW / 2 + 0.01);
    g.add(couplet);
  }

  // 额枋（两道）
  const beamGeo = new THREE.BoxGeometry(span + colW * 1.4, 0.66, 0.9);
  reg.push(beamGeo);
  const beam = new THREE.Mesh(beamGeo, simple.byColor(0xE6DFD0));
  beam.position.y = colH + 0.1;
  beam.castShadow = true;
  g.add(beam);
  const beam2Geo = new THREE.BoxGeometry(span + colW * 0.8, 0.3, 0.7);
  reg.push(beam2Geo);
  const beam2Mat = simple.byColor(0xB84A3A);
  const beam2 = new THREE.Mesh(beam2Geo, beam2Mat);
  beam2.position.y = colH + 0.58;
  g.add(beam2);

  // 匾额（横匾：「康樂東約」自右向左）
  const plaqueW = 4.5, plaqueH = 1.35;
  const plaqueGeo = new THREE.BoxGeometry(plaqueW, plaqueH, 0.24);
  reg.push(plaqueGeo);
  const plaque = new THREE.Mesh(plaqueGeo, simple.byColor(0xF5F0E4));
  plaque.position.set(0, colH + 1.35, 0);
  plaque.castShadow = true;
  g.add(plaque);

  const signMat = new THREE.MeshLambertMaterial({
    map: makeSignTexture('康樂東約',
      { w: 1024, h: 300, bg: '#f3ece0', fg: '#2b2621', border: true, borderColor: '#8d7a52', sizeRatio: 0.66 }),
    side: THREE.DoubleSide
  });
  const faceGeo = new THREE.PlaneGeometry(plaqueW - 0.3, plaqueH - 0.28);
  reg.push(faceGeo, signMat);
  const face = new THREE.Mesh(faceGeo, signMat);
  face.position.set(0, colH + 1.35, 0.135);
  g.add(face);
  const faceBack = new THREE.Mesh(faceGeo, signMat);
  faceBack.position.z = -0.135;
  faceBack.rotation.y = Math.PI;
  g.add(faceBack);

  // 屋檐：瓦顶 + 端部起翘（关键特征，必须能认出来）
  const eaveGeo = curvedEaveGeometry(5.9, 1.85, 0.62, 1.05, 16, 2.5);
  const tileMat = simple.tile();
  reg.push(eaveGeo);
  const eave = new THREE.Mesh(eaveGeo, tileMat);
  eave.position.y = colH + 2.15;
  eave.castShadow = true; eave.receiveShadow = true;
  g.add(eave);
  // 正脊（选中时和匾额一起发光）
  const ridgeGeo = new THREE.BoxGeometry(5.9 * 2 * 0.98, 0.24, 0.5);
  reg.push(ridgeGeo);
  const ridgeMat = simple.byColor(0x6E6259);
  const ridge = new THREE.Mesh(ridgeGeo, ridgeMat);
  ridge.position.y = colH + 2.15 + 0.62 + 0.12;
  g.add(ridge);

  // 檐下斗栱层（一圈小方块，暗示斗栱）
  const dougongGeo = new THREE.BoxGeometry(0.26, 0.34, 0.26);
  reg.push(dougongGeo);
  const dougongMat = simple.byColor(0xE6DFD0);
  for (let i = -4; i <= 4; i++) {
    for (const zz of [-1, 1]) {
      const d = new THREE.Mesh(dougongGeo, dougongMat);
      d.position.set(i * 1.2, colH + 1.82, zz * 0.52);
      g.add(d);
    }
  }

  // 门前石阶
  const stepGeo = new THREE.BoxGeometry(span + 2.4, 0.3, 2.6);
  reg.push(stepGeo);
  const step = new THREE.Mesh(stepGeo, simple.stone);
  step.position.set(0, 0.15, 0.4);
  step.receiveShadow = true;
  g.add(step);

  /* 高亮目标：只标"特征件"（红额枋 / 匾额 / 正脊），让选中像"被灯打亮"，
     而不是整座牌坊糊上一层红光——那会同时洗掉材质层次。 */
  g.userData.emissiveMats = [signMat, beam2Mat, ridgeMat];
  // focus.dist 是"至少要退到多远"；fitH 是希望竖向装进画面的高度。
  // 牌坊本体只有 8 单位高，若按它的实际高度取景会近到只剩屋檐，
  // 所以 fitH 取 21 左右：让牌坊占画面高约 1/3，前后街巷一并入镜，才看得懂它在街口的位置。
  g.userData.focus = { dist: 30, fitH: 15, height: 3.2 };
  return g;
}

/**
 * 鹭江牌坊：三间四柱 + 重檐 + 匾额「鷺江春曉」+ 脊饰（对应 arch-lujiang.jpg）
 * 比康乐牌坊更大更繁复，是天河—海珠方向的主要入口。
 */
function buildLujiangArch(simple, ctx3d, reg) {
  const g = new THREE.Group();
  const stoneCol = 0xD9D3C6;
  const mainH = 12.4, sideH = 8.6;  const midSpan = 13.0, sideSpan = 4.0;

  // 四柱
  const colXs = [-(midSpan / 2 + sideSpan / 2), -midSpan / 2, midSpan / 2, (midSpan / 2 + sideSpan / 2)];
  const colHs = [sideH, mainH, mainH, sideH];
  colXs.forEach((x, i) => {
    const col = makeColumn(simple, reg, colHs[i], 1.05, stoneCol);
    col.position.set(x, 0, 0);
    g.add(col);
    // 柱身石刻竖排（示意）
    if (i === 1 || i === 2) {
      const tgeo = new THREE.PlaneGeometry(0.46, 3.6);
      const tmat = new THREE.MeshLambertMaterial({
        map: makeSignTexture(i === 1 ? '鷺江春曉' : '鳳陽鷺江',
          { w: 128, h: 900, vertical: true, bg: '#d9d3c6', fg: '#8d7a52', sizeRatio: 0.5, border: false }),
        side: THREE.DoubleSide
      });
      reg.push(tgeo, tmat);
      const t = new THREE.Mesh(tgeo, tmat);
      t.position.set(x, 3.4, 0.54);
      g.add(t);
    }
    // 抱鼓石
    const drumGeo = new THREE.CylinderGeometry(0.62, 0.62, 0.5, 14);
    reg.push(drumGeo);
    const drum = new THREE.Mesh(drumGeo, simple.stone);
    drum.rotation.z = Math.PI / 2;
    drum.position.set(x + (x < 0 ? -0.75 : 0.75), 0.66, 0);
    g.add(drum);
  });

  // 主额枋 + 石雕纹样
  const beamGeo = new THREE.BoxGeometry(midSpan + 1.4, 0.78, 1.0);
  reg.push(beamGeo);
  const beam = new THREE.Mesh(beamGeo, simple.byColor(0xE0DACD));
  beam.position.y = mainH + 0.1;
  beam.castShadow = true;
  g.add(beam);
  const carveGeo = new THREE.BoxGeometry(midSpan + 0.9, 0.34, 0.7);
  reg.push(carveGeo);
  const carve = new THREE.Mesh(carveGeo, simple.byColor(0x9A9086));
  carve.position.y = mainH - 0.42;
  g.add(carve);

  // 匾额「鷺江春曉」
  const plaqueW = 5.6, plaqueH = 1.6;
  const plaqueGeo = new THREE.BoxGeometry(plaqueW, plaqueH, 0.3);
  reg.push(plaqueGeo);
  const plaque = new THREE.Mesh(plaqueGeo, simple.byColor(0xE8E2D4));
  plaque.position.set(0, mainH + 1.55, 0);
  plaque.castShadow = true;
  g.add(plaque);

  const signMat = new THREE.MeshLambertMaterial({
    map: makeSignTexture('鷺江春曉',
      { w: 1200, h: 320, bg: '#f0eade', fg: '#a8863f', border: true, borderColor: '#a8863f', sizeRatio: 0.68 }),
    side: THREE.DoubleSide
  });
  const faceGeo = new THREE.PlaneGeometry(plaqueW - 0.34, plaqueH - 0.3);
  reg.push(faceGeo, signMat);
  const face = new THREE.Mesh(faceGeo, signMat);
  face.position.set(0, mainH + 1.55, 0.16);
  g.add(face);
  const faceBack = new THREE.Mesh(faceGeo, signMat);
  faceBack.position.z = -0.16;
  faceBack.rotation.y = Math.PI;
  g.add(faceBack);

  // 重檐：上檐 + 下檐
  const tileMat = simple.tile();
  const upperGeo = curvedEaveGeometry(6.6, 2.0, 0.7, 1.25, 18, 2.5);
  const lowerGeo = curvedEaveGeometry(6.2, 2.5, 0.62, 1.1, 18, 2.5);
  reg.push(upperGeo, lowerGeo);
  const upper = new THREE.Mesh(upperGeo, tileMat);
  upper.position.y = mainH + 2.5;
  upper.castShadow = true; upper.receiveShadow = true;
  g.add(upper);
  const lower = new THREE.Mesh(lowerGeo, tileMat);
  lower.position.y = mainH + 1.9;
  g.add(lower);
  const ridgeGeo = new THREE.BoxGeometry(6.6 * 2 * 0.97, 0.3, 0.6);
  reg.push(ridgeGeo);
  const ridgeMat = simple.byColor(0x6E6259);
  const ridge = new THREE.Mesh(ridgeGeo, ridgeMat);
  ridge.position.y = mainH + 2.5 + 0.7 + 0.15;
  g.add(ridge);

  // 脊饰：两条鱼龙 / 小兽剪影（简化锥+球，远看轮廓可辨）
  const beastMat = simple.byColor(0x5F564D);
  const bodyGeo = new THREE.ConeGeometry(0.34, 1.5, 6);
  const headGeo = new THREE.SphereGeometry(0.3, 8, 6);
  reg.push(bodyGeo, headGeo);
  for (const s of [-1, 1]) {
    const beast = new THREE.Group();
    const body = new THREE.Mesh(bodyGeo, beastMat);
    body.rotation.z = s * 0.9;
    body.position.set(0, 0.6, 0);
    beast.add(body);
    const head = new THREE.Mesh(headGeo, beastMat);
    head.position.set(s * 0.62, 1.15, 0);
    beast.add(head);
    beast.position.set(s * 5.2, mainH + 3.35, 0);
    g.add(beast);
  }

  // 次间小檐（两侧）
  const sideGeo = curvedEaveGeometry(sideSpan * 1.55, 1.7, 0.5, 0.75, 12, 2.4);
  const capGeo = new THREE.BoxGeometry(sideSpan * 2.6, 0.5, 0.9);
  reg.push(sideGeo, capGeo);
  for (const s of [-1, 1]) {
    const side = new THREE.Mesh(sideGeo, tileMat);
    side.position.set(s * (midSpan / 2 + sideSpan / 2), sideH + 1.5, 0);
    side.castShadow = true;
    g.add(side);
    const cap = new THREE.Mesh(capGeo, simple.byColor(0xE0DACD));
    cap.position.set(s * (midSpan / 2 + sideSpan / 2), sideH + 0.3, 0);
    g.add(cap);
  }

  // 台阶
  const stepGeo = new THREE.BoxGeometry(midSpan + sideSpan * 2 + 2.4, 0.34, 3.0);
  reg.push(stepGeo);
  const step = new THREE.Mesh(stepGeo, simple.stone);
  step.position.set(0, 0.17, 0.5);
  step.receiveShadow = true;
  g.add(step);

  g.userData.emissiveMats = [signMat, ridgeMat, beastMat];
  // 鹭江牌坊比康乐牌坊高一档（重檐 + 脊饰），取景略退
  g.userData.focus = { dist: 40, fitH: 20, height: 4.4 };
  return g;
}

/** 人群中的人：躯干 + 头 + 两条腿（低模但姿态正确，远看就是"人"） */
function makePersonGeometry() {
  const parts = [];
  const torso = new THREE.CapsuleGeometry(0.21, 0.52, 4, 8);
  torso.translate(0, 1.06, 0);
  parts.push(torso);
  const head = new THREE.SphereGeometry(0.145, 10, 8);
  head.translate(0, 1.58, 0);
  parts.push(head);
  const legGeo = new THREE.BoxGeometry(0.15, 0.72, 0.17);
  legGeo.translate(0, 0.36, 0);
  for (const s of [-1, 1]) {
    const l = legGeo.clone();
    l.translate(s * 0.11, 0, 0);
    parts.push(l);
  }
  legGeo.dispose();
  const g = mergeGeometries(parts);
  parts.forEach(p => p.dispose());
  // 腿要偏深色，但顶点色是整块的，所以这里只做整体；靠实例色区分上衣
  const pos = g.attributes.position;
  const arr = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    let v = 1.0;
    if (y < 0.36) v = 0.34;          // 裤
    else if (y < 0.8) v = 0.86;
    else if (y > 1.45) v = 1.25;     // 头（浅）
    arr[i * 3] = v; arr[i * 3 + 1] = v; arr[i * 3 + 2] = v;
  }
  g.setAttribute('color', new THREE.Float32BufferAttribute(arr, 3));
  return g;
}

/**
 * 招工广场：膜结构白色棚顶 + 细钢柱 + 灯罩吊灯 + LED 公示屏 + 绿色围挡 + 人群
 * 对应 market-hiring-1/2.jpg 与 board-hiring-led.jpg
 */
function buildHiringPlaza(simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'hiring-plaza-group';
  const W = 46, D = 30;            // 棚顶覆盖范围
  const roofY = 7.2;
  // 自己开一条随机流：保证同一次刷新里人群分布稳定，又不扰动街区那边的种子序列
  const rng = makeRng(778811);

  // --- 地面（比周边略浅的水泥；黄色导流线由地面贴图负责） ---
  const floorGeo = new THREE.BoxGeometry(W + 8, 0.22, D + 8);
  const floorMat = new THREE.MeshLambertMaterial({ color: 0xC5BFB2 });
  reg.push(floorGeo, floorMat);
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.position.y = 0.11;
  floor.receiveShadow = true;
  g.add(floor);

  // --- 膜结构顶棚：5×3 片张拉膜 ---
  /* 2026-09 补充：俯视时这片棚顶是广场上最大的一块浅色面，原来是一整片死白。
     按用户要求只给「棚顶 / 棚架本身」补结构细节，不动地面空地、人群、围挡与公示屏：
       ① 分幅明暗：5×3 共 15 片，按 (i+j)%3 给三档极接近的纸白，避免整块死白；
       ② 横向肋条：沿跨度方向每隔一片（3.75 单位）一道浅墨灰细肋，读到"骨架"；
       ③ 分幅接缝：5 条纵向接缝（膜结构本来就是分幅张拉的），比膜面略深一线；
       ④ 柱顶斜撑 + 斜拉索：柱顶到棚面的短撑，以及四角从檐口斜拉到地面锚点的细拉索，
          读起来"这东西是被撑起来的"。
     体量与位置一律不动：棚顶仍覆盖 46×30、檐高仍 roofY=7.2；
     新增构件都比膜面低一线（膜面在上），不抬高轮廓，也不改变整体亮度。 */
  const memMat = new THREE.MeshLambertMaterial({
    color: 0xF2EDE1, side: THREE.DoubleSide
  });
  reg.push(memMat);
  /* 三档几乎同色的纸白：相邻膜片之间只差一点点，看不出"格子"，但不再是一块死白 */
  const memMats = [0xF4EFE4, 0xEFE9DC, 0xEBE4D5].map(c => {
    const m = new THREE.MeshLambertMaterial({ color: c, side: THREE.DoubleSide });
    reg.push(m);
    return m;
  });
  const ribMat = simple.byColor(0xB3AA95);      // 肋条：明显比膜面深一档的浅墨灰
  const seamMat = simple.byColor(0xA79E88);     // 接缝：再深一线
  const cols = 5, rows = 3;
  const pw = W / cols, pd = D / rows;
  const memGeo = new THREE.BoxGeometry(pw * 0.99, 0.16, pd * 0.99);
  const ridgeGeo = new THREE.BoxGeometry(0.1, 0.16, pd * 0.99);
  reg.push(memGeo, ridgeGeo);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const m = new THREE.Mesh(memGeo, memMats[(i + j) % 3]);
      m.position.set(-W / 2 + pw * (i + 0.5), roofY + 0.28, -D / 2 + pd * (j + 0.5));
      m.rotation.z = (i % 2 ? -1 : 1) * 0.012;
      m.receiveShadow = true;
      g.add(m);
      // 膜片之间的脊线
      const ridge = new THREE.Mesh(ridgeGeo, memMat);
      ridge.position.set(-W / 2 + pw * (i + 0.5), roofY + 0.42, -D / 2 + pd * (j + 0.5));
      g.add(ridge);
      // 纵向接缝：每列膜片的东侧边缘一道，比膜面略深
      if (i < cols - 1) {
        const seamGeo = new THREE.BoxGeometry(0.2, 0.14, D * 0.99);
        reg.push(seamGeo);
        const seam = new THREE.Mesh(seamGeo, seamMat);
        seam.position.set(-W / 2 + pw * (i + 1), roofY + 0.30, 0);
        g.add(seam);
      }
    }
  }
  /* 横向肋条：沿跨度方向（X）整条拉通，落在每排膜片的交界上。
     间距 = pd = 10 单位（3 排 ⇒ 2 道内肋 + 2 道檐口肋），等距、读起来像张拉膜的骨架。 */
  const ribGeo = new THREE.BoxGeometry(W, 0.2, 0.42);
  reg.push(ribGeo);
  for (let j = 0; j <= rows; j++) {
    const rib = new THREE.Mesh(ribGeo, ribMat);
    rib.position.set(0, roofY + 0.30, -D / 2 + pd * j);
    g.add(rib);
  }
  // 顶棚边梁
  const frameMat = simple.byColor(0xE8E4DA);
  for (const [w, d, x, z] of [[W, 0.22, 0, -D / 2], [W, 0.22, 0, D / 2], [0.22, D, -W / 2, 0], [0.22, D, W / 2, 0]]) {
    const fg = new THREE.BoxGeometry(w, 0.3, d);
    reg.push(fg);
    const f = new THREE.Mesh(fg, frameMat);
    f.position.set(x, roofY + 0.16, z);
    g.add(f);
  }

  // --- 细钢柱 ---
  const colGeo = new THREE.CylinderGeometry(0.13, 0.13, roofY, 8);
  colGeo.translate(0, roofY / 2, 0);
  reg.push(colGeo);
  const colMat = simple.byColor(0xE4E0D6);
  const colXs = [-W / 2, -W / 4, 0, W / 4, W / 2];
  const colZs = [-D / 2, 0, D / 2];
  /* 柱顶斜撑：柱头到棚面之间的一小段短撑。檐口那排没有棚面可顶，跳过。 */
  const strutGeo = new THREE.CylinderGeometry(0.055, 0.055, 0.75, 6);
  reg.push(strutGeo);
  for (const x of colXs) {
    for (const z of colZs) {
      if (Math.abs(x) === W / 2 && z !== 0) continue;   // 四角少两根，避免呆板
      const c = new THREE.Mesh(colGeo, colMat);
      c.position.set(x, 0, z);
      c.castShadow = true;
      g.add(c);
      if (z !== -D / 2 && z !== D / 2) {
        const strut = new THREE.Mesh(strutGeo, colMat);
        strut.position.set(x, roofY + 0.02, z);
        g.add(strut);
      }
    }
  }

  /* 斜拉索：四角从檐口斜拉到地面锚点，读起来"这个棚是撑起来的"。
     只有 4 根（每角 1 根），细线 + 半透明，克制；锚点落在广场铺地范围内，不越到马路上。 */
  const cableMat = new THREE.LineBasicMaterial({ color: 0x8E8677, transparent: true, opacity: 0.62 });
  reg.push(cableMat);
  const cablePts = [];
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      cablePts.push(sx * W / 2, roofY - 0.1, sz * D / 2);
      cablePts.push(sx * (W / 2 + 3), 0.2, sz * (D / 2 - 2));
    }
  }
  const cableGeo = new THREE.BufferGeometry();
  cableGeo.setAttribute('position', new THREE.Float32BufferAttribute(cablePts, 3));
  reg.push(cableGeo);
  g.add(new THREE.LineSegments(cableGeo, cableMat));

  // --- 灯罩吊灯（照片里最显眼的细节：黑色锥形灯罩吊在膜下） ---
  const shadeGeo = new THREE.ConeGeometry(0.46, 0.34, 14, 1, true);
  const shadeMat = new THREE.MeshLambertMaterial({ color: 0x2B2823, side: THREE.DoubleSide });
  const bulbGeo = new THREE.SphereGeometry(0.14, 8, 6);
  const bulbMat = simple.byColor(0xF0E2C0);
  const wireMat = new THREE.LineBasicMaterial({ color: 0x2B2823, transparent: true, opacity: 0.75 });
  reg.push(shadeGeo, bulbGeo, shadeMat, wireMat);
  const lampPts = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      const x = -W / 2 + pw * (i + 1), z = -D / 2 + pd * (j + 0.5);
      const y = roofY - 1.5;
      const shade = new THREE.Mesh(shadeGeo, shadeMat);
      shade.position.set(x, y, z);
      g.add(shade);
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.set(x, y - 0.12, z);
      g.add(bulb);
      lampPts.push(x, roofY, z, x, y + 0.1, z);
    }
  }
  if (lampPts.length) {
    const lg = new THREE.BufferGeometry();
    lg.setAttribute('position', new THREE.Float32BufferAttribute(lampPts, 3));
    reg.push(lg);
    g.add(new THREE.LineSegments(lg, wireMat));
  }

  // --- LED 公示屏（朝南，正对入口人流） ---
  const boardW = 8.6, boardH = 5.4, boardY = 3.4;
  const ledFrameGeo = new THREE.BoxGeometry(boardW + 0.5, boardH + 0.5, 0.42);
  const ledFrameMat = simple.byColor(0x4A463F);
  reg.push(ledFrameGeo);
  const ledFrame = new THREE.Mesh(ledFrameGeo, ledFrameMat);
  ledFrame.position.set(-W / 2 + 2.0, boardY, -D / 2 - 1.2);
  ledFrame.castShadow = true;
  g.add(ledFrame);

  const ledScreenMat = new THREE.MeshLambertMaterial({
    map: makeLedTexture(), emissive: 0x1a2233, emissiveIntensity: 0.5
  });
  const ledGeo = new THREE.PlaneGeometry(boardW, boardH);
  reg.push(ledScreenMat, ledGeo);
  const led = new THREE.Mesh(ledGeo, ledScreenMat);
  led.position.set(ledFrame.position.x, boardY, ledFrame.position.z + 0.23);
  led.name = 'hiring-led';
  g.add(led);
  // 屏幕支架
  const legGeo = new THREE.BoxGeometry(0.26, boardY - boardH / 2, 0.26);
  reg.push(legGeo);
  for (const s of [-1, 1]) {
    const leg = new THREE.Mesh(legGeo, simple.steel);
    leg.position.set(ledFrame.position.x + s * (boardW / 2 - 0.4), (boardY - boardH / 2) / 2, ledFrame.position.z);
    g.add(leg);
  }
  // 侧挂小屏
  const miniFrameGeo = new THREE.BoxGeometry(3.0, 1.9, 0.3);
  const miniGeo = new THREE.PlaneGeometry(2.8, 1.7);
  reg.push(miniFrameGeo, miniGeo);
  const miniFrame = new THREE.Mesh(miniFrameGeo, ledFrameMat);
  miniFrame.position.set(W / 2 - 2.4, 2.3, -D / 2 - 0.6);
  g.add(miniFrame);
  const mini = new THREE.Mesh(miniGeo, ledScreenMat);
  mini.position.set(miniFrame.position.x, miniFrame.position.y, miniFrame.position.z + 0.17);
  g.add(mini);

  /* --- 绿色围挡（照片里的绿网施工围挡）。
     注意：这里 x 是"围挡中心 x"，z 是"围挡中心 z"，所以数组里第三、四项
     是尺寸而不是坐标——写成 [x0,z0,sx,sz] 会让围挡跑到错误的位置。 --- */
  const fenceMat = simple.byColor(0x4F6B4A);
  const fenceGeoCache = {};
  const addFence = (sx, sz, x, z) => {
    const key = sx.toFixed(2) + 'x' + sz.toFixed(2);
    if (!fenceGeoCache[key]) {
      fenceGeoCache[key] = new THREE.BoxGeometry(sx, 1.5, sz);
      reg.push(fenceGeoCache[key]);
    }
    const f = new THREE.Mesh(fenceGeoCache[key], fenceMat);
    f.position.set(x, 0.75, z);
    f.castShadow = false;
    g.add(f);
  };
  const fW = W + 8, fD = D + 8;
  addFence(fW, 0.6, 0, -fD / 2);            // 北
  addFence(0.6, fD, -fW / 2, 0);            // 西
  addFence(0.6, fD, fW / 2, 0);             // 东
  // 南侧留出入口
  addFence(22, 0.6, -fW / 2 + 11, fD / 2);
  addFence(14, 0.6, fW / 2 - 7, fD / 2);

  // --- 人群：老板举样衣、工人围站（实例化） ---
  const personGeo = makePersonGeometry();
  reg.push(personGeo);
  personGeo.computeBoundingSphere();
  const personMat = new THREE.MeshLambertMaterial({ vertexColors: true });
  reg.push(personMat);
  const COUNT = ctx3d.lowPower ? 70 : 150;
  const crowd = new THREE.InstancedMesh(personGeo, personMat, COUNT);
  crowd.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(COUNT * 3), 3);
  crowd.name = 'crowd';
  const dummy = new THREE.Object3D();
  const col = new THREE.Color();
  const SHIRT = [0xF1EBDD, 0xE4DCCE, 0x536976, 0x3F5564, 0x302D28, 0x8FA3AD, 0xC2A264, 0xB84A3A, 0xD8D2C6, 0x6E7C63];
  const crowdData = [];
  let placed = 0, guard = 0;
  while (placed < COUNT && guard < COUNT * 14) {
    guard++;
    const x = -W / 2 + 3 + rng() * (W - 6);
    const z = -D / 2 + 2 + rng() * (D - 4);
    // 与钢柱保持距离，避免"长在柱子里"
    let bad = false;
    for (const cxv of colXs) for (const czv of colZs) {
      if (Math.abs(x - cxv) < 0.85 && Math.abs(z - czv) < 0.85) bad = true;
    }
    if (bad) continue;
    const s = 0.92 + rng() * 0.22;
    const ph = rng() * Math.PI * 2;
    dummy.position.set(x, 0, z);
    dummy.rotation.set(0, ph, 0);
    dummy.scale.setScalar(s);
    dummy.updateMatrix();
    crowd.setMatrixAt(placed, dummy.matrix);
    col.setHex(SHIRT[Math.floor(rng() * SHIRT.length)]);
    crowd.setColorAt(placed, col);
    crowdData.push({ x, z, ph, s });
    placed++;
  }
  crowd.count = placed;
  crowd.instanceMatrix.needsUpdate = true;
  if (crowd.instanceColor) crowd.instanceColor.needsUpdate = true;
  crowd.castShadow = false;
  g.add(crowd);

  // 招工牌 / 展板（几块立牌，说明"这里是零工市场"）
  const signMat = simple.byColor(0xB84A3A);
  const signGeo = new THREE.BoxGeometry(1.5, 2.1, 0.1);
  reg.push(signGeo);
  for (let i = 0; i < 5; i++) {
    const s = new THREE.Mesh(signGeo, signMat);
    s.position.set(-W / 2 + 6 + i * 7.5, 1.1, D / 2 - 1.5);
    s.rotation.y = 0.1 * (i % 2 ? 1 : -1);
    g.add(s);
  }

  g.userData.focus = { dist: 62, fitH: 34, height: 2.0 };
  g.userData.crowd = { mesh: crowd, data: crowdData, dummy: new THREE.Object3D() };
  g.userData.emissiveMats = [ledScreenMat];
  return g;
}

/** 招工广场上人群的轻微晃动（不用精灵动画，直接改实例矩阵） */
function animateCrowd(plaza, t) {
  const cd = plaza.userData.crowd;
  if (!cd) return;
  const { mesh, data, dummy } = cd;
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const bob = Math.sin(t * 1.6 + d.ph) * 0.045;
    const sway = Math.sin(t * 0.9 + d.ph * 1.7) * 0.05;
    dummy.position.set(d.x + sway * 0.5, bob, d.z + sway);
    dummy.rotation.set(0, d.ph + sway * 0.4, 0);
    dummy.scale.setScalar(d.s * (1 + bob * 0.12));
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
}

/** 小诊所 / 社区卫生站（环境节点，setLabelMode('all') 时出现） */
function buildClinic(simple, ctx3d, reg) {
  const g = new THREE.Group();
  const bodyGeo = new THREE.BoxGeometry(14, 9.5, 11);
  const baseGeo = new THREE.BoxGeometry(14.6, 1.1, 11.6);
  const signGeo = new THREE.BoxGeometry(7.2, 1.15, 0.2);
  const crossGeo = new THREE.PlaneGeometry(0.9, 0.9);
  reg.push(bodyGeo, baseGeo, signGeo, crossGeo);

  const body = new THREE.Mesh(bodyGeo, simple.byColor(0xEDE7DA));
  body.position.y = 4.75;
  body.castShadow = true; body.receiveShadow = true;
  g.add(body);
  const base = new THREE.Mesh(baseGeo, simple.byColor(0x536976));
  base.position.y = 0.55;
  g.add(base);
  const sign = new THREE.Mesh(signGeo, simple.byColor(0xB84A3A));
  sign.position.set(0, 2.6, 5.6);
  g.add(sign);
  const cross = new THREE.Mesh(crossGeo, simple.white);
  cross.position.set(0, 2.6, 5.72);
  g.add(cross);
  g.userData.focus = { dist: 40, height: 3 };
  return g;
}

/* ==========================================================================
 * 6.1 次级地点：8 处片区内节点（康乐村 / 鹭江村 / 布匹市场 / 招工街 …）
 *
 *  为什么要"必须有网格"：标签层按 id 取 labelAnchors、focusLandmark 按 id 取
 *  landmarks[id]、拾取也按 id 回溯。PLACES 里登记了 id 却没有对应网格，
 *  这些地方就会拿到 undefined 并在读 .name / .getWorldPosition 时抛异常，
 *  整个三维街区直接初始化失败。所以 PLACES 的每个 id 都必须在这里建出形体。
 *
 *  统一的轻量做法（与街区楼体同一套，但做成独立 Group 以便高亮 / 聚焦）：
 *    · 自建房体量走 makeHouseBatch：盒子 → 按世界尺度平铺外立面 UV → 顶点色
 *      烘颜色 → 按「墙身 / 屋顶」各合并成 1 个 mesh。一簇十几栋楼只占 2 个
 *      draw call，整场多边形量只增加约 3 千（相对街区的十万级可以忽略）。
 *    · 招牌文字一律用 makeSignTexture 现画，不引任何外部字体 / 图片。
 *    · 每个 group 都写 userData.focus（focusLandmark 的取景参数）
 *      与 userData.emissiveMats（高亮时点亮的"特征件"）。
 * ========================================================================*/

/** 一簇自建房的合批器：add() 收盒子，flush() 合并成「墙身 + 屋顶」两个 mesh */
function makeHouseBatch(mats, reg, facadeIdx) {
  const bodies = [];
  const roofs = [];
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const one = new THREE.Vector3(1, 1, 1);
  const p = new THREE.Vector3();

  /** 在 (cx,cz) 放一栋 w(沿 x) × d(沿 z) × h 高的自建房；
   *  baseY 用于"骑楼"这种楼身架空在柱廊之上的体量（默认落地）。 */
  function add(cx, cz, w, d, h, rotY, wallColor, roofColor, vOffset, baseY) {
    const y0 = baseY || 0;
    q.setFromEuler(new THREE.Euler(0, rotY || 0, 0));
    p.set(cx, y0, cz);

    const body = new THREE.BoxGeometry(w, h, d);
    body.translate(0, h / 2, 0);
    remapBoxUV(body, w, h, d, vOffset || 0);
    tintGeometry(body, wallColor, 1.06, 0.90);
    m4.compose(p, q, one);
    body.applyMatrix4(m4);
    bodies.push(body);

    const roof = new THREE.BoxGeometry(w - 0.05, 0.34, d - 0.05);
    roof.translate(0, h + 0.17, 0);
    remapBoxUV(roof, w - 0.05, 0.34, d - 0.05, 0);
    tintGeometry(roof, roofColor, 1.12, 0.88);
    roof.applyMatrix4(m4);
    roofs.push(roof);
  }

  function flush(group) {
    if (bodies.length) {
      const geo = mergeGeometries(bodies);
      bodies.forEach(g => g.dispose());
      const mat = new THREE.MeshLambertMaterial({
        map: mats.facadeTextures[(facadeIdx || 0) % mats.facadeTextures.length],
        vertexColors: true
      });
      reg.push(geo, mat);
      const m = new THREE.Mesh(geo, mat);
      m.name = 'sub-houses';
      m.castShadow = true; m.receiveShadow = true;
      group.add(m);
    }
    if (roofs.length) {
      const geo = mergeGeometries(roofs);
      roofs.forEach(g => g.dispose());
      const mat = new THREE.MeshLambertMaterial({ map: mats.roofTex, vertexColors: true });
      reg.push(geo, mat);
      const m = new THREE.Mesh(geo, mat);
      m.name = 'sub-roofs';
      m.castShadow = true; m.receiveShadow = true;
      group.add(m);
    }
  }
  return { add, flush };
}

/** 把一组已经摆好位置的几何体合并成一个 mesh（省 draw call） */
function mergeToMesh(geos, mat, reg, group, name) {
  if (!geos.length) return null;
  const geo = mergeGeometries(geos);
  geos.forEach(g => g.dispose());
  reg.push(geo, mat);
  const m = new THREE.Mesh(geo, mat);
  m.name = name || 'merged';
  m.castShadow = true; m.receiveShadow = true;
  group.add(m);
  return m;
}

/** 就地摆放：可选绕自身 y 轴旋转，再平移到 (x,y,z) */
function poseGeo(geo, x, y, z, rotY) {
  if (rotY) geo.rotateY(rotY);
  geo.translate(x, y, z);
  return geo;
}

/** 一批"水泥 / 金属"小构件的共用材质（按颜色取，**要求几何体带顶点色**） */
function flatMat(color, reg) {
  const m = new THREE.MeshLambertMaterial({ color: color, vertexColors: true });
  reg.push(m);
  return m;
}

/** 立一块招牌：一块薄板 + 正反面两张 makeSignTexture 贴图。
 *  注意板身用的是**不带顶点色**的实色材质：几何体没有 color 属性时，
 *  vertexColors:true 会让板子渲染成黑色（WebGL 未启用属性的默认值）。 */
function makeSignBoard(text, w, h, x, y, z, rotY, reg, opt) {
  opt = opt || {};
  const boardGeo = new THREE.BoxGeometry(w, h, 0.18);
  const faceGeo = new THREE.PlaneGeometry(w - 0.12, h - 0.12);
  const boardMat = new THREE.MeshLambertMaterial({ color: opt.boardColor === undefined ? 0xE6DFD0 : opt.boardColor });
  const mat = new THREE.MeshLambertMaterial({
    map: makeSignTexture(text, opt.tex || {
      w: 1024, h: Math.round(1024 * h / w),
      bg: opt.bg || '#f3ece0', fg: opt.fg || '#2b2621',
      border: true, borderColor: '#8d7a52', sizeRatio: 0.62
    }),
    side: THREE.DoubleSide
  });
  reg.push(boardGeo, faceGeo, boardMat, mat);
  const g = new THREE.Group();
  const board = new THREE.Mesh(boardGeo, boardMat);
  board.castShadow = true;
  g.add(board);
  const f1 = new THREE.Mesh(faceGeo, mat);
  f1.position.z = 0.10;
  g.add(f1);
  const f2 = new THREE.Mesh(faceGeo, mat);
  f2.position.z = -0.10;
  f2.rotation.y = Math.PI;
  g.add(f2);
  g.position.set(x, y, z);
  if (rotY) g.rotation.y = rotY;
  return { group: g, mat, boardMat };
}

/** 卷闸门排：沿 x 排 n 扇，贴在 z 面上（制衣作坊 / 底商的典型门脸） */
function shutterRow(geos, x0, z, y, w, d, n, gap, color) {
  const total = n * w + (n - 1) * gap;
  for (let i = 0; i < n; i++) {
    const g = new THREE.BoxGeometry(w, d, 0.16);
    g.translate(x0 - total / 2 + w / 2 + i * (w + gap), y, z);
    tintGeometry(g, color, 1.0, 0.86);
    geos.push(g);
  }
}

/* --- ① 康乐村：两排握手楼夹一条窄巷 + 巷口门洞 ------------------------- */
function buildKangleVillage(mats, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'kangle-village-group';
  const rng = makeRng(510701);
  const batch = makeHouseBatch(mats, reg, 0);

  /* 巷子净宽 1.4 单位（≈1.3 米，康乐村的巷子常在 1–2 米），
     两排楼进深固定 6.6，于是两排几乎贴脸；巷口朝 +z（默认视角那一侧）。 */
  const LANE_HALF = 0.7;
  const DEPTH = 6.6;
  const ROW_END = 8.0;             // 两排楼都停在 z = 8.0，把巷口让给门洞
  for (const side of [-1, 1]) {
    const cx = side * (LANE_HALF + DEPTH / 2);
    let zz = -11.5;
    let guard = 0;
    while (zz < 7.0 && guard++ < 40) {
      let span = rng.range(4.6, 7.2);             // 沿巷开间
      if (zz + span > ROW_END) span = ROW_END - zz;
      if (span < 2.6) break;                      // 收尾太窄就不放，免得出现薄片楼
      const floors = rng.int(4, 7);
      batch.add(cx, zz + span / 2, DEPTH, span, floors * rng.pick(FLOOR_H),
        rng.range(-0.05, 0.05), pickBuildingColor(rng), pickRoofColor(rng), rng.range(0, ATLAS_ROWS));
      zz += span + rng.range(0.06, 0.5);          // 楼与楼之间几乎不留缝
    }
  }
  batch.flush(g);

  // 巷口门洞：两根方柱 + 横梁 + 匾额「康樂村」——一眼读出"这是村口那条巷子"
  const gateZ = 9.2;
  const pierGeo = new THREE.BoxGeometry(0.95, 7.0, 0.95);
  pierGeo.translate(0, 3.5, 0);
  const lintelGeo = new THREE.BoxGeometry(4.0, 0.85, 1.15);
  lintelGeo.translate(0, 7.42, 0);
  const plaqueGeo = new THREE.BoxGeometry(2.9, 1.05, 0.24);
  plaqueGeo.translate(0, 8.37, 0);
  reg.push(pierGeo, lintelGeo, plaqueGeo);
  const pierMat = simple.byColor(0xE6DFD0);
  for (const side of [-1, 1]) {
    const pier = new THREE.Mesh(pierGeo, pierMat);
    pier.position.set(side * 1.45, 0, gateZ);
    pier.castShadow = true;
    g.add(pier);
  }
  // 横梁用独立材质实例：lmat.byColor 是按颜色共享的，若直接借用牌坊那根
  // 0xB84A3A 额枋的材质，点亮本处时牌坊的红梁会一起亮（串色）。
  const lintelMat = new THREE.MeshLambertMaterial({ color: C.brick });
  reg.push(lintelMat);
  const lintel = new THREE.Mesh(lintelGeo, lintelMat);
  lintel.position.z = gateZ;
  lintel.castShadow = true;
  g.add(lintel);
  const plaqueMat = simple.byColor(0xF5F0E4);
  const plaque = new THREE.Mesh(plaqueGeo, plaqueMat);
  plaque.position.z = gateZ;
  g.add(plaque);

  const sign = makeSignBoard('康樂村', 2.5, 0.8, 0, 8.37, gateZ + 0.16, 0, reg,
    { tex: { w: 640, h: 210, bg: '#f3ece0', fg: '#2b2621', border: true, borderColor: '#8d7a52', sizeRatio: 0.62 } });
  g.add(sign.group);

  // 巷内地面：一条深色水泥带，读得出"往里是巷子"
  const laneGeo = new THREE.BoxGeometry(2.4, 0.16, 22.4);
  laneGeo.translate(0, 0.08, -0.4);
  reg.push(laneGeo);
  const lane = new THREE.Mesh(laneGeo, simple.stone);
  lane.receiveShadow = true;
  g.add(lane);

  g.userData.emissiveMats = [sign.mat, lintelMat];
  g.userData.focus = { dist: 44, fitH: 20, height: 6, pitch: 26 };
  return g;
}

/* --- ② 鹭江村：一簇楼 + 一个带雨棚的作坊门面 --------------------------- */
function buildLujiangVillage(mats, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'lujiang-village-group';
  const rng = makeRng(620311);
  const batch = makeHouseBatch(mats, reg, 1);

  // 后排（北）与中排：越靠里越高，读作"作坊从临街往里长起来"
  const rows = [
    { z: -10.5, hFloors: [5, 8] },
    { z: -2.6, hFloors: [4, 6] }
  ];
  for (const row of rows) {
    let xx = -12.5;
    let guard = 0;
    while (xx < 11.0 && guard++ < 40) {
      let span = rng.range(4.8, 7.0);
      if (xx + span > 12.8) span = 12.8 - xx;
      if (span < 2.6) break;
      const floors = rng.int(row.hFloors[0], row.hFloors[1]);
      batch.add(xx + span / 2, row.z, span, 6.6, floors * rng.pick(FLOOR_H),
        rng.range(-0.05, 0.05), pickBuildingColor(rng), pickRoofColor(rng), rng.range(0, ATLAS_ROWS));
      xx += span + rng.range(0.06, 0.5);
    }
  }

  /* 临街作坊门面：低矮的两层铺面（下面卷闸门 + 上面出挑雨棚 + 一条招牌），
     这是"早期加工厂落脚地"最典型的门脸。 */
  const FRONT_Z = 3.4;                 // 铺面中心
  const FRONT_D = 6.6;
  batch.add(0, FRONT_Z, 25.6, FRONT_D, 5.4, 0, 0xD8CEBB, 0x9E988B, 0.4);
  batch.flush(g);

  const shGeo = [];
  shutterRow(shGeo, 0, FRONT_Z + FRONT_D / 2 + 0.09, 1.75, 3.2, 3.5, 4, 1.35, 0x8C8F86);
  const shMat = flatMat(0xffffff, reg);
  mergeToMesh(shGeo, shMat, reg, g, 'lujiang-shutters');

  // 出挑雨棚（坡向街面，微微下倾）
  const awGeo = [];
  for (let i = 0; i < 4; i++) {
    const a = new THREE.BoxGeometry(6.0, 0.14, 2.3);
    tintGeometry(a, i % 2 ? 0x536976 : 0xC2A264, 1.0, 0.84);
    a.rotateX(-0.13);
    a.translate(-9.2 + i * 6.1, 3.75, FRONT_Z + FRONT_D / 2 + 1.05);
    awGeo.push(a);
  }
  mergeToMesh(awGeo, flatMat(0xffffff, reg), reg, g, 'lujiang-awnings');

  // 作坊招牌「鷺江製衣」
  const sign = makeSignBoard('鷺江製衣作坊', 7.6, 1.2, 0, 4.9, FRONT_Z + FRONT_D / 2 + 0.2, 0, reg,
    { tex: { w: 1200, h: 190, bg: '#e9e2d3', fg: '#8a3a2c', sizeRatio: 0.6 }, boardColor: C.brick });
  g.add(sign.group);

  // 门口两盏灯（暖光小球，夜里读得出"厂房还在开工"）
  const lampGeo = new THREE.SphereGeometry(0.26, 8, 6);
  reg.push(lampGeo);
  const lampMat = new THREE.MeshLambertMaterial({ color: 0xF1EBDD, emissive: 0x6b5330 });
  reg.push(lampMat);
  for (const s of [-1, 1]) {
    const l = new THREE.Mesh(lampGeo, lampMat);
    l.position.set(s * 4.2, 3.9, FRONT_Z + FRONT_D / 2 + 0.5);
    g.add(l);
  }

  g.userData.emissiveMats = [sign.mat, lampMat];
  g.userData.focus = { dist: 48, fitH: 24, height: 5, pitch: 30 };
  return g;
}

/* --- ③ 中大布匹市场：长条市场大棚 + 成排货架（紧贴西侧瑞康路） --------- */
function buildFabricMarket(mats, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'fabric-market-group';
  const rng = makeRng(730917);
  // 整体往西挪 4 单位，让大棚紧贴片区西界的瑞康路，形成"布料从这儿进来"的外联感
  const OX = -4;

  const LZ = 46;      // 沿 z 的总长（长条形）
  const WX = 14;      // 进深（沿 x）
  const H = 5.4;      // 檐口高

  // 场地：一块比棚子大一圈的浅色水泥地
  const floorGeo = new THREE.BoxGeometry(WX + 4, 0.2, LZ + 4);
  floorGeo.translate(OX, 0.1, 0);
  tintGeometry(floorGeo, 0xC5BFB2, 1.05, 0.95);
  mergeToMesh([floorGeo], flatMat(0xffffff, reg), reg, g, 'market-floor')
    .castShadow = false;

  // 两排柱 + 双坡屋面（脊线沿 z，长条形大棚的轮廓）
  const posts = [];
  for (let i = 0; i < 7; i++) {
    const z = -LZ / 2 + 3 + i * (LZ - 6) / 6;
    for (const s of [-1, 1]) {
      const cg = new THREE.CylinderGeometry(0.2, 0.24, H, 8);
      cg.translate(0, H / 2, 0);
      tintGeometry(cg, 0xD8D3C7, 1.05, 0.9);
      poseGeo(cg, OX + s * (WX / 2 - 0.8), 0, z, 0);
      posts.push(cg);
    }
  }
  mergeToMesh(posts, flatMat(0xffffff, reg), reg, g, 'market-posts');

  const roofGeos = [];
  for (const s of [-1, 1]) {
    const slab = new THREE.BoxGeometry(WX / 2 + 0.9, 0.3, LZ + 1.6);
    slab.rotateZ(s * 0.145);
    tintGeometry(slab, 0xA9A296, 1.14, 0.86);
    slab.translate(OX + s * (WX / 4), H + 0.85, 0);
    roofGeos.push(slab);
  }
  // 正脊 + 两端山墙压边
  const ridge = new THREE.BoxGeometry(0.5, 0.34, LZ + 1.8);
  ridge.translate(OX, H + 1.6, 0);
  tintGeometry(ridge, 0x8C8679, 1.1, 0.9);
  roofGeos.push(ridge);
  for (const s of [-1, 1]) {
    const cap = new THREE.BoxGeometry(WX + 1.9, 0.34, 0.5);
    cap.translate(OX, H + 1.35, s * (LZ / 2 + 0.8));
    tintGeometry(cap, 0x9E988B, 1.1, 0.9);
    roofGeos.push(cap);
  }
  mergeToMesh(roofGeos, flatMat(0xffffff, reg), reg, g, 'market-roof');

  /* 成排货架：4 条长货架 + 架上的布卷（布卷用色板里的砖红 / 招牌黄 /
     工作服蓝 / 灰绿轮换，远看就是"一匹匹布"）。 */
  const shelfGeos = [];
  const baleGeos = [];
  const baleColors = [C.brick, C.yellow, C.blue, C.green, C.paper];
  for (let i = 0; i < 4; i++) {
    const x = OX - 4.5 + i * 3.0;
    const sg = new THREE.BoxGeometry(2.0, 1.0, LZ - 8);
    tintGeometry(sg, 0x7A736A, 1.0, 0.86);
    sg.translate(x, 0.6, 0);
    shelfGeos.push(sg);
    // 布卷：一条略窄的彩色长条压在货架上
    const bg = new THREE.BoxGeometry(2.1, 0.95, LZ - 8.4);
    tintGeometry(bg, baleColors[i % baleColors.length], 1.12, 0.9);
    bg.translate(x, 1.6, 0);
    baleGeos.push(bg);
    // 分隔：每 6 单位一个短隔断，读得出"一格格货位"
    for (let k = 0; k < 6; k++) {
      const dg = new THREE.BoxGeometry(2.2, 1.5, 0.16);
      tintGeometry(dg, 0x6E675E, 1.0, 0.9);
      dg.translate(x, 0.75, -LZ / 2 + 4.5 + k * 6.4);
      shelfGeos.push(dg);
    }
  }
  mergeToMesh(shelfGeos, flatMat(0xffffff, reg), reg, g, 'market-shelves').castShadow = false;
  mergeToMesh(baleGeos, flatMat(0xffffff, reg), reg, g, 'market-bales').castShadow = false;

  /* 市场招牌：立在大棚东侧（朝向片区方向），是这处地点最好认的标识 */
  const signMat = new THREE.MeshLambertMaterial({
    map: makeSignTexture('中大布匹市場', { w: 1400, h: 260, bg: '#f0eade', fg: '#8a3a2c', border: true, borderColor: '#8d7a52', sizeRatio: 0.66 }),
    side: THREE.DoubleSide
  });
  const signGeo = new THREE.PlaneGeometry(15, 2.8);
  reg.push(signGeo, signMat);
  const sg2 = new THREE.Mesh(signGeo, signMat);
  sg2.position.set(OX + WX / 2 + 0.4, H + 3.1, 0);
  sg2.rotation.y = Math.PI / 2;
  g.add(sg2);
  const backGeo = new THREE.BoxGeometry(0.36, 3.1, 15.4);
  backGeo.translate(OX + WX / 2 + 0.18, H + 3.1, 0);
  tintGeometry(backGeo, 0xE6DFD0, 1.05, 0.9);
  mergeToMesh([backGeo], flatMat(0xffffff, reg), reg, g, 'market-sign-frame').castShadow = false;

  g.userData.emissiveMats = [signMat];
  g.userData.focus = { dist: 58, fitH: 30, height: 6, pitch: 26 };
  return g;
}

/* --- ④ 鹭江南约大街：一段沿街骑楼 + 立式招工牌 ------------------------- */
function buildHiringStreet(mats, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'hiring-street-group';
  const rng = makeRng(840523);
  const batch = makeHouseBatch(mats, reg, 0);

  const L = 30;            // 沿 x 的总长
  const UPPER_Z = -1.6;    // 二层楼身中心（往里收，给骑楼留出人行道）
  const UPPER_D = 6.4;

  /* 骑楼剖面：二层楼身出挑在柱廊之上（baseY = 3.9，底下架空），
     柱廊后面是退进去的底商 —— 这是岭南沿街商业最典型的断面，
     也是"招工街"的空间底子。 */
  batch.add(0, UPPER_Z, L, UPPER_D, 5.4, 0, 0xDCD2BE, 0x9E988B, 0.2, 3.9);  // 二层及以上
  batch.add(0, -3.4, L - 3, 3.6, 3.9, 0, 0xD2C9BA, 0x8C8679, 1.6);          // 退进去的底商
  batch.flush(g);

  // 底层柱廊（6 根方柱，撑住出挑的二层）
  const colGeos = [];
  for (let i = 0; i < 6; i++) {
    const cg = new THREE.BoxGeometry(0.6, 3.9, 0.6);
    cg.translate(-L / 2 + 2.5 + i * (L - 5) / 5, 1.95, 1.2);
    tintGeometry(cg, 0xE6DFD0, 1.05, 0.9);
    colGeos.push(cg);
  }
  mergeToMesh(colGeos, flatMat(0xffffff, reg), reg, g, 'street-arcade');

  // 底商卷闸门 + 骑楼雨棚
  const shGeo = [];
  shutterRow(shGeo, 0, -1.6 + 3.6 / 2 + 0.09, 1.7, 3.4, 3.3, 5, 1.0, 0x8C8F86);
  mergeToMesh(shGeo, flatMat(0xffffff, reg), reg, g, 'street-shutters').castShadow = false;

  const awGeo = [];
  for (let i = 0; i < 5; i++) {
    const a = new THREE.BoxGeometry(5.0, 0.12, 1.9);
    tintGeometry(a, i % 2 ? 0xB84A3A : 0x536976, 1.0, 0.84);
    a.rotateX(-0.12);
    a.translate(-L / 2 + 3 + i * (L - 6) / 4, 3.62, 2.6);
    awGeo.push(a);
  }
  mergeToMesh(awGeo, flatMat(0xffffff, reg), reg, g, 'street-awnings').castShadow = false;

  // 骑楼檐下的街名招牌
  const sign = makeSignBoard('鷺江南約大街', 8.6, 1.2, -6.5, 4.55, 1.5, 0, reg,
    { tex: { w: 1400, h: 200, bg: '#e9e2d3', fg: '#2b2621', sizeRatio: 0.62 }, boardColor: C.brick });
  g.add(sign.group);

  /* 立式招工牌：老板举牌招工是这条街的核心场景，
     牌面用真实工种（平车 / 四线 / 及骨 / 杂工），竖排字。 */
  const jobs = [
    { t: '招平車', x: -10.5, ry: 0.08 },
    { t: '招四線', x: -3.2, ry: -0.05 },
    { t: '招及骨', x: 4.0, ry: 0.06 },
    { t: '招雜工', x: 11.0, ry: -0.09 }
  ];
  const stickMat = simple.byColor(0x8C8679);
  const boardMats = [];
  jobs.forEach((j) => {
    // 牌高 2.9，底边离地 1.4（下面接一根小立柱）→ 牌心 y = 1.4 + 2.9/2
    const b = makeSignBoard(j.t, 1.35, 2.9, j.x, 2.85, 3.05, j.ry, reg,
      { tex: { w: 256, h: 560, vertical: true, bg: '#efe7d6', fg: '#8a3a2c', sizeRatio: 0.56, border: true, borderColor: '#8d7a52' },
        boardColor: 0xE6DFD0 });
    g.add(b.group);
    boardMats.push(b.mat);
    const leg = new THREE.BoxGeometry(0.16, 1.4, 0.16);
    leg.translate(j.x, 0.7, 3.05);
    const m = new THREE.Mesh(leg, stickMat);
    g.add(m);
  });

  g.userData.emissiveMats = [sign.mat].concat(boardMats);
  g.userData.focus = { dist: 50, fitH: 24, height: 5, pitch: 28 };
  return g;
}

/* --- ⑤ 康乐东约南大街：一段街道界面 + 楼栋底商 ------------------------- */
function buildKangleSouthStreet(mats, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'kangle-south-st-group';
  const rng = makeRng(950214);
  const batch = makeHouseBatch(mats, reg, 2);

  /* 街道沿 z 走向（不是沿 x）：因为东边 20 多个单位就是招工广场的大棚，
     街道若横着铺过去会插进广场的棚下；竖着排既避开了广场，
     也正好贴着康乐村那条主街的实际走向。 */
  const HALF_W = 2.6;      // 街宽的一半（净宽 5.2，两侧再各让出 1.2 给底商）
  const DEPTH = 6.8;
  for (const side of [-1, 1]) {
    const cx = side * (HALF_W + DEPTH / 2);
    let zz = -17;
    let guard = 0;
    while (zz < 16 && guard++ < 40) {
      let span = rng.range(5.0, 7.4);
      if (zz + span > 18) span = 18 - zz;
      if (span < 2.6) break;
      const floors = rng.int(3, 6);
      batch.add(cx, zz + span / 2, DEPTH, span, floors * rng.pick(FLOOR_H),
        rng.range(-0.05, 0.05), pickBuildingColor(rng), pickRoofColor(rng), rng.range(0, ATLAS_ROWS));
      zz += span + rng.range(0.1, 0.7);
    }
  }
  batch.flush(g);

  // 街面：深色沥青带（正好铺到两侧的楼房界面）
  const roadGeo = new THREE.BoxGeometry(HALF_W * 2, 0.16, 37);
  roadGeo.translate(0, 0.08, 0);
  tintGeometry(roadGeo, C.asphalt, 1.05, 0.95);
  mergeToMesh([roadGeo], flatMat(0xffffff, reg), reg, g, 'south-st-road').castShadow = false;

  /* 楼栋底商：贴街一溜低矮的店面条带（略微探进街道 1.2 单位）+ 卷闸门，
     这是"一楼作坊、楼上出租屋"最直观的一眼。店面条带必须站在楼的**街面一侧**，
     若摆到楼里去就会被建筑体量吞掉、完全看不见。 */
  const shopGeos = [];
  const shutGeos = [];
  for (const side of [-1, 1]) {
    const z0 = -15.5;
    for (let i = 0; i < 5; i++) {
      const len = 6.0;
      const cz = z0 + i * 6.9;
      const sg = new THREE.BoxGeometry(1.2, 3.2, len - 0.3);
      tintGeometry(sg, [0xDCD2BE, 0xC6B99C, 0xD2C9BA][i % 3], 1.06, 0.9);
      sg.translate(side * (HALF_W - 0.6), 1.6, cz);
      shopGeos.push(sg);
      // 卷闸门贴在店面朝街的那一面
      const dg = new THREE.BoxGeometry(0.14, 2.4, len - 0.9);
      tintGeometry(dg, 0x8C8F86, 1.0, 0.86);
      dg.translate(side * (HALF_W - 1.24), 1.2, cz);
      shutGeos.push(dg);
    }
  }
  mergeToMesh(shopGeos, flatMat(0xffffff, reg), reg, g, 'south-st-shops');
  mergeToMesh(shutGeos, flatMat(0xffffff, reg), reg, g, 'south-st-shutters').castShadow = false;

  /* 三块底商招牌：挂在店面上方（±1.3 就是店面的外沿），
     绕 y 转 ±90° 让牌面朝街心。 */
  const boards = [];
  const shopSigns = [
    { t: '製衣', x: -1.3, y: 3.85, z: -9.0, ry: Math.PI / 2 },
    { t: '招租', x: 1.3, y: 3.85, z: 2.0, ry: -Math.PI / 2 },
    { t: '布料', x: 1.3, y: 3.85, z: 12.0, ry: -Math.PI / 2 }
  ];
  shopSigns.forEach((s) => {
    const b = makeSignBoard(s.t, 3.4, 0.95, s.x, s.y, s.z, s.ry, reg,
      { tex: { w: 640, h: 180, bg: '#efe7d6', fg: '#2b2621', sizeRatio: 0.6 }, boardColor: C.blue });
    g.add(b.group);
    boards.push(b.mat);
  });

  g.userData.emissiveMats = boards;
  g.userData.focus = { dist: 50, fitH: 26, height: 6, pitch: 30 };
  return g;
}

/* --- ⑥ 康乐中约南新街涌边一巷：一线天 --------------------------------- */
function buildKangleCanal(mats, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'kangle-canal-group';
  const rng = makeRng(160827);
  const batch = makeHouseBatch(mats, reg, 1);

  /* 全片最窄的一条巷：净宽 1.2 单位（≈1.1 米），两侧是 6–8 层的自建房，
     抬头只剩一条缝 —— 这就是"一线天 / 阳光都要收费"的空间原型。
     整体向西偏 3.4 单位：东侧 6 个单位处就是卫生站（yizhen）的楼，
     不偏开的话两栋体量会贴在一起，读起来像同一栋楼。 */
  const OX = -3.4;
  const LANE_HALF = 0.6;
  const DEPTH = 6.0;
  for (const side of [-1, 1]) {
    const cx = OX + side * (LANE_HALF + DEPTH / 2);
    let zz = -13.5;
    let guard = 0;
    while (zz < 12.5 && guard++ < 40) {
      let span = rng.range(4.4, 6.2);
      if (zz + span > 14.5) span = 14.5 - zz;
      if (span < 2.4) break;
      const floors = rng.int(6, 8);                 // 6–8 层：18–24 单位高
      batch.add(cx, zz + span / 2, DEPTH, span, floors * rng.pick(FLOOR_H),
        rng.range(-0.03, 0.03), pickBuildingColor(rng), pickRoofColor(rng), rng.range(0, ATLAS_ROWS));
      zz += span + rng.range(0.04, 0.3);
    }
  }
  batch.flush(g);

  // 明涌：巷底一条深色水沟 + 两侧沟壁（涌边巷的"涌"）
  const waterGeo = new THREE.BoxGeometry(1.7, 0.3, 29);
  waterGeo.translate(OX, 0.05, 0);
  tintGeometry(waterGeo, C.asphalt, 0.95, 0.9);
  mergeToMesh([waterGeo], flatMat(0xffffff, reg), reg, g, 'canal-water').castShadow = false;
  const kerbGeos = [];
  for (const s of [-1, 1]) {
    // 沟壁贴在两排楼的墙脚之内（巷净宽 1.2，所以只能占 0.22 宽），露不出来就等于没画
    const kg = new THREE.BoxGeometry(0.22, 0.55, 29);
    kg.translate(OX + s * 0.49, 0.27, 0);
    tintGeometry(kg, 0xB5AC9C, 1.05, 0.9);
    kerbGeos.push(kg);
  }
  mergeToMesh(kerbGeos, flatMat(0xffffff, reg), reg, g, 'canal-kerbs');

  /* 横跨巷子的两块小招牌 —— 城中村里最常见的"空中招牌"，
     也是把"巷子很窄"讲清楚的最省多边形的一招。 */
  const crossGeos = [];
  const boardMats = [];
  [{ t: '製衣', z: -6.5 }, { t: '招車位', z: 5.5 }].forEach((c) => {
    const bg = new THREE.BoxGeometry(3.6, 0.9, 0.2);
    bg.translate(OX, 4.6, c.z);
    tintGeometry(bg, 0xE6DFD0, 1.05, 0.9);
    crossGeos.push(bg);
    const b = makeSignBoard(c.t, 3.2, 0.72, OX, 4.6, c.z + 0.14, 0, reg,
      { tex: { w: 640, h: 150, bg: '#efe7d6', fg: '#8a3a2c', sizeRatio: 0.62 }, boardColor: 0xE6DFD0 });
    g.add(b.group);
    boardMats.push(b.mat);
  });
  mergeToMesh(crossGeos, flatMat(0xffffff, reg), reg, g, 'canal-cross-signs').castShadow = false;

  // 晾衣杆：两根横杆 + 几片晾着的布（窄巷的生活感）
  const poleMat = simple.byColor(0x8C8679);
  const clothGeos = [];
  const clothColors = [0xEDE9E0, 0x8098A6, 0xB84A3A];
  for (let i = 0; i < 3; i++) {
    const pg = new THREE.CylinderGeometry(0.06, 0.06, 1.9, 6);
    pg.rotateZ(Math.PI / 2);
    pg.translate(OX, 6.4 + i * 0.1, -9 + i * 7.5);
    const p = new THREE.Mesh(pg, poleMat);
    g.add(p);
    const cg = new THREE.BoxGeometry(0.1, 1.5, 0.9);
    tintGeometry(cg, clothColors[i], 1.06, 0.94);
    cg.translate(OX, 5.6, -9 + i * 7.5);
    clothGeos.push(cg);
  }
  mergeToMesh(clothGeos, flatMat(0xffffff, reg), reg, g, 'canal-cloths').castShadow = false;

  g.userData.emissiveMats = boardMats;
  g.userData.focus = { dist: 42, fitH: 20, height: 5, pitch: 52 };
  return g;
}

/* --- ⑦ 鹭江东约新街 88 号大院：围合院子 + 院内小楼 --------------------- */
function buildLujiangYard(mats, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'lujiang-yard-group';
  const rng = makeRng(271188);
  const batch = makeHouseBatch(mats, reg, 2);

  /* 三面楼围出一个天井（U 形），南面是一道院墙 + 院门。
     "一户一厂"的典型：整栋楼被分租给多户作坊，共用一个院子。 */
  batch.add(-8.0, -2.0, 6.4, 22.0, 4 * 3.1, 0, 0xDCD2BE, 0x9E988B, 0.5);   // 西翼
  batch.add(8.0, -2.0, 6.4, 22.0, 5 * 3.0, 0, 0xD2C9BA, 0x8C8679, 1.2);    // 东翼
  batch.add(0, -9.4, 21.0, 7.0, 4 * 3.1, 0, 0xD8CEBB, 0xA8A295, 2.0);      // 北翼
  batch.add(0, -1.0, 8.4, 8.4, 3 * 3.2, 0, 0xE1D8C6, 0x9E988B, 0.9);       // 院内小楼
  batch.flush(g);

  // 天井地面
  const yardGeo = new THREE.BoxGeometry(20, 0.16, 20);
  yardGeo.translate(0, 0.08, 0);
  tintGeometry(yardGeo, 0xC5BFB2, 1.05, 0.95);
  mergeToMesh([yardGeo], flatMat(0xffffff, reg), reg, g, 'yard-floor').castShadow = false;

  // 南面院墙 + 院门（两根门柱 + 门楣 + 门牌「88」）
  const wallGeos = [];
  for (const s of [-1, 1]) {
    const wg = new THREE.BoxGeometry(6.6, 2.6, 0.5);
    tintGeometry(wg, 0xD5CDBE, 1.06, 0.9);
    wg.translate(s * 6.9, 1.3, 8.6);
    wallGeos.push(wg);
  }
  for (const s of [-1, 1]) {
    const pg = new THREE.BoxGeometry(1.0, 3.6, 1.0);
    tintGeometry(pg, 0xE6DFD0, 1.05, 0.9);
    pg.translate(s * 3.0, 1.8, 8.6);
    wallGeos.push(pg);
  }
  const lint = new THREE.BoxGeometry(7.6, 0.7, 1.1);
  tintGeometry(lint, 0xB84A3A, 1.06, 0.9);
  lint.translate(0, 3.95, 8.6);
  wallGeos.push(lint);
  mergeToMesh(wallGeos, flatMat(0xffffff, reg), reg, g, 'yard-walls');

  const sign = makeSignBoard('88', 2.0, 0.9, 0, 3.95, 8.6 + 0.62, 0, reg,
    { tex: { w: 512, h: 230, bg: '#e9e2d3', fg: '#8a3a2c', border: true, borderColor: '#8d7a52', sizeRatio: 0.66 }, boardColor: C.brick });
  g.add(sign.group);

  // 院门内的车 / 货堆：两个矮箱，暗示"院里就是厂房"
  const boxGeos = [];
  const rngC = [C.blue, C.yellow, C.green];
  for (let i = 0; i < 3; i++) {
    const bg = new THREE.BoxGeometry(2.4, 1.6, 2.0);
    tintGeometry(bg, rngC[i], 1.08, 0.9);
    bg.translate(-4.5 + i * 2.7, 0.8, 6.2);
    boxGeos.push(bg);
  }
  mergeToMesh(boxGeos, flatMat(0xffffff, reg), reg, g, 'yard-cargo');

  // 屋顶水箱 + 晾衣杆（大院生活的两个记号）
  const tankGeo = new THREE.CylinderGeometry(1.1, 1.1, 1.8, 10);
  tankGeo.translate(8.0, 15 * 1.0 + 0.9, -8.0);
  tintGeometry(tankGeo, 0xB9BCB6, 1.08, 0.9);
  mergeToMesh([tankGeo], flatMat(0xffffff, reg), reg, g, 'yard-tank');

  g.userData.emissiveMats = [sign.mat];
  g.userData.focus = { dist: 50, fitH: 26, height: 6, pitch: 32 };
  return g;
}

/* --- ⑧ 凤阳街道办事处：一栋规整的公共办公楼 --------------------------- */
function buildFengyangOffice(mats, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'fengyang-office-group';

  /* 与自建房形成对比：方正、对称、平屋顶带女儿墙、正面有台阶与门廊柱。
     两点空间上的讲究（都是实测撞出来的）：
       ① 楼体在局部坐标里往东北偏 (5,-5) —— 西南方向 10 个单位就是招工广场
          的膜棚，压过去会插进棚下；这样偏完，楼体西墙正好落在广场水泥地的
          东沿（x = 29）之外。
       ② 正门朝**东**（+x），不朝南 —— 南边 2 个单位就是片区南界逸景路的
          退让带，门前广场铺不下；而且默认视角在东南侧，朝东的正脸正好看得见。
     PLACES 里登记的仍是用户给的 (−30 之外的) x=30,z=62 那个名义点，
     所以标签锚点单独按楼体真实中心写（见 labelAnchors）。 */
  const CX = 5, CZ = -5;
  const W = 12, D = 9, H = 16.5;

  const bodyGeo = new THREE.BoxGeometry(W, H, D);
  bodyGeo.translate(0, H / 2, 0);
  remapBoxUV(bodyGeo, W, H, D, 0.25);
  tintGeometry(bodyGeo, 0xE4DBC8, 1.06, 0.92);
  const bodyMat = new THREE.MeshLambertMaterial({ map: mats.facadeTextures[0], vertexColors: true });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.set(CX, 0, CZ);
  body.castShadow = true; body.receiveShadow = true;
  reg.push(bodyGeo, bodyMat);
  g.add(body);

  // 女儿墙 + 通长窗带 + 勒脚
  const capGeos = [];
  const pH = 0.9, pW = 0.34;
  const segs = [
    [W, pW, 0, (D - pW) / 2], [W, pW, 0, -(D - pW) / 2],
    [pW, D, (W - pW) / 2, 0], [pW, D, -(W - pW) / 2, 0]
  ];
  for (const [sw, sd, ox, oz] of segs) {
    const cg = new THREE.BoxGeometry(sw, pH, sd);
    cg.translate(CX + ox, H + pH / 2, CZ + oz);
    tintGeometry(cg, 0xCFC8BA, 1.1, 0.9);
    capGeos.push(cg);
  }
  // 横向玻璃带（公共建筑那种通长窗，一眼区别于自建房的小窗）
  const faceX = CX + W / 2;
  for (const by of [5.2, 12.2]) {
    const bandGeo = new THREE.BoxGeometry(0.24, 1.4, D - 1.2);
    bandGeo.translate(faceX + 0.04, by, CZ);
    tintGeometry(bandGeo, 0x3A3B38, 1.0, 0.95);
    capGeos.push(bandGeo);
  }
  const plinth = new THREE.BoxGeometry(W + 0.7, 1.1, D + 0.7);
  plinth.translate(CX, 0.55, CZ);
  tintGeometry(plinth, 0x9A9086, 1.05, 0.92);
  capGeos.push(plinth);
  mergeToMesh(capGeos, flatMat(0xffffff, reg), reg, g, 'office-details');

  // 门廊：4 根圆柱 + 出挑雨篷 + 三级台阶（正门朝 +x）
  const colGeos = [];
  for (let i = 0; i < 4; i++) {
    const cg = new THREE.CylinderGeometry(0.32, 0.34, 4.6, 10);
    cg.translate(0, 2.3, 0);
    tintGeometry(cg, 0xEDE7DA, 1.06, 0.92);
    poseGeo(cg, faceX + 2.0, 1.1, CZ - 2.4 + i * 1.6, 0);
    colGeos.push(cg);
  }
  const canopy = new THREE.BoxGeometry(3.2, 0.5, 7.6);
  canopy.translate(faceX + 1.5, 5.9, CZ);
  tintGeometry(canopy, 0xDCD2BE, 1.1, 0.9);
  colGeos.push(canopy);
  for (let i = 0; i < 3; i++) {
    const st = new THREE.BoxGeometry(1.0, 0.34, 8.6 - i * 0.5);
    st.translate(faceX + 1.6 + i * 0.5, 0.17 + i * 0.34, CZ);
    tintGeometry(st, 0xD6D1C6, 1.06, 0.94);
    colGeos.push(st);
  }
  mergeToMesh(colGeos, flatMat(0xffffff, reg), reg, g, 'office-porch');

  // 门楣招牌「鳳陽街道辦事處」（正面朝东，默认视角里正对镜头）
  const signMat = new THREE.MeshLambertMaterial({
    map: makeSignTexture('鳳陽街道辦事處', { w: 1500, h: 220, bg: '#f1ebdd', fg: '#2b2621', border: true, borderColor: '#8d7a52', sizeRatio: 0.6 }),
    side: THREE.DoubleSide
  });
  const signGeo = new THREE.PlaneGeometry(7.2, 1.06);
  const backGeo = new THREE.BoxGeometry(0.22, 1.4, 7.6);
  backGeo.translate(faceX + 0.36, 7.1, CZ);
  tintGeometry(backGeo, 0x536976, 1.06, 0.9);
  reg.push(signGeo, signMat);
  mergeToMesh([backGeo], flatMat(0xffffff, reg), reg, g, 'office-sign-frame');
  const signMesh = new THREE.Mesh(signGeo, signMat);
  signMesh.position.set(faceX + 0.50, 7.1, CZ);
  signMesh.rotation.y = Math.PI / 2;
  g.add(signMesh);

  // 旗杆（公共机构门前最直白的记号）
  const poleGeo = new THREE.CylinderGeometry(0.12, 0.14, 11, 8);
  poleGeo.translate(faceX + 4.5, 5.5, CZ - 4.5);
  tintGeometry(poleGeo, 0xD8D3C7, 1.1, 0.9);
  const flagGeo = new THREE.PlaneGeometry(2.4, 1.5);
  flagGeo.rotateY(Math.PI / 2);
  flagGeo.translate(faceX + 5.7, 9.6, CZ - 4.5);
  tintGeometry(flagGeo, C.brick, 1.08, 0.95);
  mergeToMesh([poleGeo, flagGeo], flatMat(0xffffff, reg), reg, g, 'office-flag');

  // 门前小广场（水泥地，铺在正门东侧，不越过南界）
  const plazaGeo = new THREE.BoxGeometry(11, 0.18, 9);
  plazaGeo.translate(faceX + 4.5, 0.09, CZ - 1.0);
  tintGeometry(plazaGeo, 0xC5BFB2, 1.05, 0.95);
  mergeToMesh([plazaGeo], flatMat(0xffffff, reg), reg, g, 'office-plaza').castShadow = false;

  g.userData.emissiveMats = [signMat];
  g.userData.focus = { dist: 54, fitH: 30, height: 8, pitch: 26 };
  return g;
}

/* ==========================================================================
 * 6.2 街景道具：招工广场四边 + 康乐牌坊前庭
 *
 *  为什么加、以及在哪儿加（用户反馈：广场一片纯色、牌坊周边太空）：
 *  · 广场本体（膜棚 + 围挡 + 公示屏 + 人群）不动。膜棚顶覆盖 46×30、围挡正好压
 *    在 54×38 的水泥台边上，中间是招工用的空场——**道具一律放到围挡之外与四角**，
 *    中间留空：既符合"招工空地"这个事实，也不会挡住棚下与地标。
 *  · 牌坊前庭只加"地面与两侧"：石板铺地、花池绿篱、货堆、两小块作坊招牌、
 *    晾衣杆——都放在 |x| ≥ 7.5（牌坊开间 13.2，正面视线通路上什么都不放），
 *    保证牌坊本体仍是画面里最清楚的东西。
 *  · 招牌文字只用真实存在的业态词（製衣 / 印花 / 招工），不指认任何具体经营者；
 *    **不做任何人物造型**，只用抽象体块示意"有摊位在营业"（本项目硬线：
 *    不把任何人指认为受访者）。
 *  · 全部合并成少数几个 mesh（每种材质一个），不增加多少 draw call。
 * ========================================================================*/
function buildStreetProps(root, simple, ctx3d, reg) {
  const rng = makeRng(968211);

  /** 小工具：摆一个盒子 / 一根圆柱（顶点色烘进几何体，最后按材质合并） */
  function box(list, w, h, d, color, x, y, z, rotY, rotX) {
    const g = new THREE.BoxGeometry(w, h, d);
    if (rotX) g.rotateX(rotX);
    tintGeometry(g, color, 1.05, 0.9);
    list.push(poseGeo(g, x, y, z, rotY || 0));
  }
  function cyl(list, r, h, color, x, y, z, axis) {
    const g = new THREE.CylinderGeometry(r, r, h, 8);
    if (axis === 'x') g.rotateZ(Math.PI / 2);
    if (axis === 'z') g.rotateX(Math.PI / 2);
    tintGeometry(g, color, 1.05, 0.9);
    list.push(poseGeo(g, x, y, z, 0));
  }

  const steel = [];    // 棚架 / 车 / 桌凳 / 划线（金属与塑料构件）
  const goods = [];    // 货箱、布匹卷、卷起的棚布
  const greens = [];   // 绿篱
  const stones = [];   // 铺地与花池边石

  /* ---------------- 招工广场四边（局部坐标：广场中心为原点，W=46 D=30，台面 ±27/±19） ---------------- */
  const plaza = new THREE.Group();
  plaza.name = 'plaza-props';
  plaza.position.set(2, 0, 44);        // 与招工广场同位
  plaza.rotation.y = -0.06;            // 同向，道具才不会歪
  root.add(plaza);

  // ① 收起的棚架（斜靠在西侧围挡外）+ 卷起的棚布
  [[-30.6, -10], [-30.6, -2.0], [-30.6, 6.0], [-16.5, 21.0], [17.5, 21.0]].forEach(function (p) {
    const x = p[0], z = p[1];
    box(steel, 0.09, 2.3, 0.09, 0xB9BCB6, x, 1.15, z - 0.55);
    box(steel, 0.09, 2.3, 0.09, 0xB9BCB6, x, 1.15, z + 0.55);
    box(steel, 0.07, 0.07, 1.3, 0xB9BCB6, x, 1.95, z);
    box(steel, 0.08, 2.6, 1.5, 0x9AA595, x - 0.28, 1.35, z, 0, 0.34);   // 斜靠的棚面
    cyl(goods, 0.3, 1.7, 0x8C8F86, x + 0.6, 0.32, z + 0.2, 'x');        // 卷起的棚布
  });

  // ② 货箱与布匹卷（堆在西南角与北侧）
  [[-24, 21.5], [-21.4, 21.8], [12.5, -21.4]].forEach(function (p) {
    const x = p[0], z = p[1];
    box(goods, 0.95, 0.7, 0.75, C.yellow, x, 0.35, z, rng.range(-0.3, 0.3));
    box(goods, 0.9, 0.66, 0.7, C.blue, x + 0.2, 1.03, z + 0.12, rng.range(-0.3, 0.3));
    cyl(goods, 0.34, 1.6, C.brick, x + 1.35, 0.34, z - 0.1, 'x');       // 一匹布
  });

  // ③ 平板手推车 ×2（南入口两侧、西侧）
  [[-9.5, 22.2, 0.12], [-30.0, 2.0, -0.55]].forEach(function (p) {
    const x = p[0], z = p[1], ry = p[2];
    box(steel, 1.9, 0.12, 0.95, 0xA9A296, x, 0.62, z, ry);              // 车板
    box(steel, 1.9, 0.06, 0.06, 0x8C8679, x, 0.72, z - 0.45, ry);
    box(steel, 0.06, 0.06, 0.9, 0x8C8679, x, 0.72, z, ry);
    for (const s of [-1, 1]) {
      cyl(steel, 0.16, 0.1, 0x6E675E, x + s * 0.62, 0.16, z - 0.42, 'x');
      cyl(steel, 0.16, 0.1, 0x6E675E, x + s * 0.62, 0.16, z + 0.42, 'x');
    }
    box(steel, 0.06, 1.0, 0.06, 0xB9BCB6, x + 0.85, 1.1, z - 0.45, ry);  // 推把
    box(steel, 0.06, 1.0, 0.06, 0xB9BCB6, x + 0.85, 1.1, z + 0.45, ry);
    box(steel, 0.06, 0.06, 0.95, 0xB9BCB6, x + 0.85, 1.58, z, ry);
  });

  // ④ 电动车 / 自行车：东侧围挡外成排停放（抽象体块：两个轮 + 车身 + 车把，无人形）
  for (let i = 0; i < 6; i++) {
    const x = 29.6, z = -8.5 + i * 2.6;
    cyl(steel, 0.32, 0.09, 0x4A463F, x - 0.62, 0.32, z, 'x');
    cyl(steel, 0.32, 0.09, 0x4A463F, x + 0.62, 0.32, z, 'x');
    box(steel, 1.35, 0.24, 0.28, 0x536976, x, 0.6, z, 0);
    box(steel, 0.6, 0.1, 0.34, 0x8C8679, x + 0.1, 0.82, z, 0);
    box(steel, 0.06, 0.62, 0.06, 0xB9BCB6, x + 0.6, 0.95, z, 0);
    box(steel, 0.06, 0.06, 0.56, 0xB9BCB6, x + 0.6, 1.24, z, 0);
  }

  // ⑤ 塑料凳与小桌（西南角落）
  [[-26.5, 12.4], [-25.9, 13.6], [-27.2, 13.2]].forEach(function (p) {
    box(steel, 0.42, 0.46, 0.42, C.brick, p[0], 0.23, p[1], rng.range(-0.4, 0.4));
  });
  box(steel, 0.86, 0.06, 1.7, 0xD8CEBB, -26.4, 0.72, 16.6);
  for (const s of [-1, 1]) {
    box(steel, 0.07, 0.7, 0.07, 0x8C8679, -26.4 + s * 0.36, 0.35, 16.6 - 0.75);
    box(steel, 0.07, 0.7, 0.07, 0x8C8679, -26.4 + s * 0.36, 0.35, 16.6 + 0.75);
  }

  // ⑥ 地面白色划线（广场本来就有的分区线；只画在围挡外的台面与入口通道上）
  for (let i = 0; i < 6; i++) box(steel, 0.09, 0.03, 3.4, 0xEDE9E0, 27.4 + (i % 2) * 1.4, 0.02, -10.5 + i * 4.2);
  for (let i = 0; i < 5; i++) box(steel, 3.4, 0.03, 0.09, 0xEDE9E0, -16 + i * 7.0, 0.02, 21.0);
  box(steel, 0.09, 0.03, 5.0, 0xEDE9E0, -4.5, 0.02, 22.6);
  box(steel, 0.09, 0.03, 5.0, 0xEDE9E0, 12.5, 0.02, 22.6);

  // ⑦ 招工公示板（南入口东侧；文字只用"招工"这一真实业态词）
  const board = makeSignBoard('招工', 1.9, 1.35, 8.6, 1.55, 21.6, -0.16, reg,
    { tex: { w: 640, h: 460, bg: '#efe7d6', fg: '#8a3a2c', border: true, borderColor: '#8d7a52', sizeRatio: 0.62 },
      boardColor: 0xE6DFD0 });
  plaza.add(board.group);
  box(steel, 0.09, 1.0, 0.09, 0x8C8679, 8.0, 0.5, 21.75);
  box(steel, 0.09, 1.0, 0.09, 0x8C8679, 9.2, 0.5, 21.75);

  /* ---------------- 康乐牌坊前庭（局部坐标：牌坊中心为原点，开间 13.2，正面朝 +z） ---------------- */
  const arch = new THREE.Group();
  arch.name = 'arch-props';
  arch.position.set(-64, 0, -57);
  arch.rotation.y = -0.28;
  root.add(arch);

  // 石板铺地（浅色）+ 分格缝（像石板网格，读得出是"前庭"）
  box(stones, 26, 0.1, 13, 0xD6D1C6, 0, 0.05, 7.0);
  for (let i = -3; i <= 3; i++) box(stones, 0.07, 0.06, 13, 0xBDB6A8, i * 3.6, 0.11, 7.0);
  for (let j = 0; j < 4; j++) box(stones, 26, 0.06, 0.07, 0xBDB6A8, 0, 0.11, 1.8 + j * 3.4);

  // 花池 + 绿篱（放在牌坊开间之外，|x| = 8.6，不挡正面）
  for (const s of [-1, 1]) {
    box(stones, 3.0, 0.5, 1.3, 0xCFC8BA, s * 8.6, 0.25, 5.4, 0.06 * s);
    box(greens, 2.8, 0.55, 1.1, 0x6E7C63, s * 8.6, 0.75, 5.4, 0.06 * s);
    box(greens, 2.4, 0.2, 0.9, 0x5E7A55, s * 8.6, 1.06, 5.4, 0.06 * s);
  }

  // 货堆（布匹卷 + 箱子）：靠两侧，不压中轴
  cyl(goods, 0.34, 1.7, C.brick, -9.6, 0.34, 2.6, 'x');
  cyl(goods, 0.32, 1.5, C.blue, -9.4, 0.32, 4.4, 'x');
  box(goods, 0.9, 0.7, 0.75, C.yellow, 9.8, 0.35, 8.6, 0.18);
  box(goods, 0.86, 0.64, 0.7, 0xC6B99C, 9.6, 1.02, 8.8, -0.1);

  // 作坊招牌 ×2（真实业态词；立在铺地两侧，不在正面视线通路上）
  const signA = makeSignBoard('製衣', 2.0, 1.0, 8.9, 2.0, 3.0, -0.22, reg,
    { tex: { w: 640, h: 320, bg: '#e9e2d3', fg: '#8a3a2c', border: true, borderColor: '#8d7a52', sizeRatio: 0.6 }, boardColor: C.brick });
  arch.add(signA.group);
  box(steel, 0.08, 1.5, 0.08, 0x8C8679, 8.4, 0.75, 3.0);
  box(steel, 0.08, 1.5, 0.08, 0x8C8679, 9.4, 0.75, 3.0);
  const signB = makeSignBoard('印花', 1.7, 0.9, -9.4, 1.85, 9.4, 0.24, reg,
    { tex: { w: 640, h: 340, bg: '#efe7d6', fg: '#2b2621', border: true, borderColor: '#8d7a52', sizeRatio: 0.6 }, boardColor: C.blue });
  arch.add(signB.group);
  box(steel, 0.08, 1.4, 0.08, 0x8C8679, -9.4, 0.7, 9.4);

  // 晾衣杆 ×2（城中村日常；挂在两侧建筑之间，横向杆 + 两片布，不做人形）
  [[11.6, -1.0], [-11.8, 6.6]].forEach(function (p) {
    const x = p[0], z = p[1];
    cyl(steel, 0.06, 2.6, 0x8C8679, x, 4.6, z, 'x');
    box(goods, 0.12, 1.6, 1.1, 0xEDE9E0, x - 0.7, 3.7, z);
    box(goods, 0.12, 1.3, 1.0, 0x8098A6, x + 0.75, 3.85, z);
  });

  /* ---------------- 合并落位：每种材质一个 mesh ---------------- */
  mergeToMesh(steel, flatMat(0xffffff, reg), reg, plaza, 'plaza-props-steel');
  mergeToMesh(goods, flatMat(0xffffff, reg), reg, plaza, 'plaza-props-goods');
  mergeToMesh(stones, flatMat(0xffffff, reg), reg, arch, 'arch-props-paving');
  mergeToMesh(greens, flatMat(0xffffff, reg), reg, arch, 'arch-props-greens');
  // 广场的绿篱/铺地一并挂到广场组（这两组目前只有牌坊用，保留分组以免以后改乱）
  return { plaza: plaza, arch: arch };
}

/* ==========================================================================
 * 7. 片区外联：清远产业园（独立入口，不是街区里的建筑）
 * ========================================================================*/

/** 片区外联：清远产业园（独立入口，**不是**街区里的一栋楼）
 *
 *  语义与做法：
 *   - 它是 80km 外的承接地，所以刻意**不做建筑形态**：一块悬浮的方向牌 + 一根
 *     带环的立柱，脱离地面建筑的语境；
 *   - 放在片区轮廓之外（东北角外），并且带一条虚线连回片区边界，表示产业转移；
 *   - HTML 侧另有一枚固定钉在容器左上角的标牌（见 createLabelLayer），
 *     那是它在界面上的"外联入口"身份，不随镜头跑到街区上面去。
 */
function buildQingyuanMarker(root, simple, ctx3d, reg) {
  const g = new THREE.Group();
  g.name = 'qingyuan-external';
  // 放在片区外：x 超过东界、z 超过北界，绝不与任何楼体混在一起
  const X = 172, Z = -132;
  g.position.set(X, 0, Z);

  const cardW = 16, cardH = 7.0;
  const cardMat = new THREE.MeshLambertMaterial({ color: 0x536976, side: THREE.DoubleSide });
  const cardGeo = new THREE.BoxGeometry(cardW, cardH, 0.6);
  reg.push(cardMat, cardGeo);
  const card = new THREE.Mesh(cardGeo, cardMat);
  card.position.y = 9.4;
  card.castShadow = true;
  g.add(card);

  // 图标（厂房 + 箭头），说明是"产业园 / 转移方向"
  const iconMat = new THREE.MeshBasicMaterial({ map: makeIconTexture('factory'), transparent: true });
  const iconGeo = new THREE.PlaneGeometry(4.4, 4.4);
  reg.push(iconMat, iconGeo);
  const icon = new THREE.Mesh(iconGeo, iconMat);
  icon.position.set(-cardW / 2 + 3.4, 9.9, 0.34);
  g.add(icon);
  const arrowMat = new THREE.MeshBasicMaterial({ map: makeIconTexture('arrow'), transparent: true });
  const arrowGeo = new THREE.PlaneGeometry(3.0, 3.0);
  reg.push(arrowMat, arrowGeo);
  const arrow = new THREE.Mesh(arrowGeo, arrowMat);
  arrow.position.set(cardW / 2 - 2.6, 9.9, 0.34);
  arrow.rotation.z = Math.PI;   // 指回片区方向
  g.add(arrow);

  // 卡片上的字
  const txtGeo = new THREE.PlaneGeometry(cardW - 0.6, 2.6);
  const txtMat = new THREE.MeshBasicMaterial({
    map: makeSignTexture('清遠產業園 · 約 80km', { w: 1400, h: 220, bg: '#536976', fg: '#F1EBDD', sizeRatio: 0.6, font: '"Source Han Sans SC","Microsoft YaHei",sans-serif', weight: '500' }),
    transparent: true
  });
  reg.push(txtGeo, txtMat);
  const txt = new THREE.Mesh(txtGeo, txtMat);
  txt.position.set(0, 6.4, 0.34);
  g.add(txt);

  // 立柱
  const poleMat = simple.byColor(0xC2A264);
  const poleGeo = new THREE.CylinderGeometry(0.34, 0.4, 6.4, 10);
  const ringGeo = new THREE.TorusGeometry(2.6, 0.22, 8, 32);
  reg.push(poleGeo, ringGeo);
  const pole = new THREE.Mesh(poleGeo, poleMat);
  pole.position.y = 3.2;
  g.add(pole);
  const ring = new THREE.Mesh(ringGeo, poleMat);
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.22;
  g.add(ring);

  // 从片区西北角连过来的虚线（示意"产业转移"，不是本地道路）
  const dashMat = new THREE.LineDashedMaterial({ color: 0xB84A3A, dashSize: 2.6, gapSize: 2.0, transparent: true, opacity: 0.85 });
  reg.push(dashMat);
  const start = new THREE.Vector3(DISTRICT.west - 6, 1.4, DISTRICT.north + 6);
  const a = start.clone().sub(g.position);
  const b = new THREE.Vector3(0, 1.4, 0);
  const lg = new THREE.BufferGeometry().setFromPoints([a, b]);
  reg.push(lg);
  const line = new THREE.Line(lg, dashMat);
  line.computeLineDistances();
  g.add(line);

  root.add(g);
  return { group: g, x: X, z: Z, cardW, cardH };
}

/* ==========================================================================
 * 8. 标签（HTML 覆盖层）
 * ========================================================================*/

function createLabelLayer(container, places, options) {
  const layer = document.createElement('div');
  layer.className = 'k3d-labels';
  const hint = document.createElement('div');
  hint.className = 'k3d-hint';
  hint.textContent = '拖动旋转 · 滚轮缩放 · 点击地标查看';
  const external = document.createElement('div');
  external.className = 'k3d-external';
  external.innerHTML =
    '<span class="k3d-external-icon" aria-hidden="true"></span>' +
    '<span class="k3d-external-body">' +
    '<b>清远产业园</b><i>约 80km · 产业转移承接地</i>' +
    '</span>' +
    '<span class="k3d-external-arrow" aria-hidden="true"></span>';
  external.setAttribute('role', 'note');
  // 固定钉在容器左上角：它是"区域外联入口"，位置不该随镜头跑
  external.style.top = '16px';
  external.style.left = '16px';

  layer.appendChild(hint);
  layer.appendChild(external);
  container.appendChild(layer);

  const items = new Map();
  /* 核心 3 处 / 次级 8 处都在默认模式（minimal）下显示：
     "地点多一点、看得见"与"不糊成一团"靠两件事兼得 ——
       ① CSS：.k3d-label:not(.is-primary) 字号更小、底色更淡；
       ② updateLabels 的防堆叠：核心地标（prio 0）先落位，次级节点（prio 1）
          冲突时最多下移 4 次，仍冲突就整条隐藏（拉近后自然会露出来）。
     'yizhen'（卫生站）是服务节点不是地点，只在 setLabelMode('all') 时出现。 */
  const primaryIds = PRIMARY_IDS.slice();
  const allIds = LANDMARK_IDS.concat(['yizhen']);

  /* 文案直接取自 PLACES[id].label —— 不要在标签层里再抄一份，
     否则 PLACES 一加地点，这里就会 defs[id] === undefined 而崩。 */
  const defs = {};
  LANDMARK_IDS.forEach((id) => {
    defs[id] = Object.assign({}, places[id].label);
  });
  defs['yizhen'] = { name: '凤阳街社区卫生服务站', sub: '生活服务节点' };
  // 外部传入的 labels 覆盖默认文案
  (options.labels || []).forEach(l => {
    if (l && l.id && defs[l.id]) {
      if (l.name) defs[l.id].name = l.name;
      if (l.sub !== undefined) defs[l.id].sub = l.sub;
    }
  });

  allIds.forEach((id) => {
    const d = defs[id];
    if (!d) return;
    const el = document.createElement('button');
    el.type = 'button';
    el.className = 'k3d-label' + (primaryIds.indexOf(id) >= 0 ? ' is-primary' : '');
    el.setAttribute('data-id', id);
    /* 场景里只放**水滴状标针**（上圆下尖，针尖就是锚点），不放名称/副标题文字——
       文字交给场景下方的图例（见 api.getPlaces() 与 map.html 的 #placeLegend）。
       为什么用 SVG 画而不是 CSS 圆点：针尖要精确落在锚点上（外层定位壳底边对齐锚点），
       且需要"圆头 + 尖尾 + 描边"一体成形；SVG path 一次到位，描边不会被裁掉。
       卫生站（yizhen）不是"地点"、没有编号，用一个"医"字针区分。 */
    const idx = BADGE_ORDER.indexOf(id);
    const badge = idx >= 0 ? String(idx + 1).padStart(2, '0') : (id === 'yizhen' ? '医' : '·');
    el.innerHTML =
      '<svg class="k3d-pin" viewBox="0 0 22 36" aria-hidden="true" focusable="false">' +
      '<path class="k3d-pin-body" d="M11 36 C 11 36, 2.4 19.4, 2.4 10.2 A 8.6 8.6 0 1 1 19.6 10.2 C 19.6 19.4, 11 36, 11 36 Z"/>' +
      '<text class="k3d-pin-num" x="11" y="14.2" text-anchor="middle">' + badge + '</text>' +
      '</svg>';
    el.setAttribute('data-num', badge);
    el.setAttribute('aria-label', d.name + '：' + d.sub);
    layer.appendChild(el);
    /* okStreak / hitStreak：防重叠结算的迟滞计数（连续判得下 / 判不下几帧）；
       everPlaced / animReady：首帧落位之后再开位移过渡，避免标签从左上角飞进来。 */
    items.set(id, {
      el, id, w: 0, h: 0, visible: false, allowed: false,
      okStreak: 0, hitStreak: 0, everPlaced: false, animReady: false
    });
  });

  return {
    layer, items, external, defs,
    setMode(mode) {
      const showAll = mode === 'all';
      items.forEach((it, id) => {
        // 地点默认全显示；只有卫生站这类"服务节点"跟着 'all' 模式走
        it.allowed = (id !== 'yizhen') || showAll;
        if (!it.allowed) {
          // 关掉时必须把状态一并复位，否则 update() 会跳过它、it.visible 一直停在 true，
          // 于是"当前可见标签数"这类统计会算多（踩过这个坑）。
          it.el.style.display = 'none';
          it.el.style.opacity = '0';
          it.el.style.pointerEvents = 'none';
          it.el.classList.remove('is-on');
          it.visible = false;
        } else {
          it.el.style.display = '';
        }
      });
    },
    dispose() {
      layer.remove();
    }
  };
}

/* --------------------------------------------------------------------------
 * 标签层的"运动中不做隐藏决策 + 迟滞结算"参数
 *
 * 修的是什么（用户实测：转动地图时标签会"闪现"）：
 *   两处标签的屏幕位置每帧都在变，"放不下 → 隐藏"的判定会随视角连续翻转——
 *   某帧判得下就显示、下一帧判不下就隐藏，肉眼就是反复闪。
 *   实测：300 次"改一次相机 + 重排一次标签"里，旧逻辑产生 20 次这样的显隐翻转。
 *
 * 做法：
 *   ① 相机在动（拖动 / 双指 / 滚轮 / focus·reset 缓动 / 停手后 LABEL_MOVE_HOLD_MS
 *      毫秒内）**只更新位置与出画淡出，不做隐藏决策**：已经在显示的标签即使一时
 *      放不下也保持显示，已经隐藏的也先不恢复；等相机静止后再一次性结算。
 *   ② 结算带迟滞：连续 LABEL_HIDE_STREAK 帧判"没位置"才隐藏，连续
 *      LABEL_SHOW_STREAK 帧判"有位置"才恢复显示 —— 临界抖动因此不会来回闪。
 *   ③ 位置每帧更新（原先每 2 帧才跑一次），标签跟手，转动时不再有半步滞后。
 * ------------------------------------------------------------------------ */
const LABEL_MOVE_HOLD_MS = 150;   // 停手后仍视为"运动中"的时长
const LABEL_HIDE_STREAK = 3;      // 连续判"没位置"几帧才隐藏
const LABEL_SHOW_STREAK = 2;      // 连续判"有位置"几帧才恢复显示

function updateLabels(labelApi, ctx3d, selectedId) {
  if (!labelApi || !labelApi.items) return false;
  const cam = ctx3d.camera;
  const v = ctx3d._v3 || (ctx3d._v3 = new THREE.Vector3());
  const w = ctx3d.size.w, h = ctx3d.size.h;
  const placed = [];
  const list = [];

  /* ---- 相机是否在动：对位姿做指纹比对（位置 + 朝向）----
     位置和朝向任一变化都算"动"：拖动 / 滚轮 / 双指 / focus·reset 的缓动都会改
     相机位姿，所以直接比位姿比逐个判断交互状态可靠（也不会漏掉将来新加的交互）。
     停手后再保持 LABEL_MOVE_HOLD_MS 毫秒，把缓动尾巴与惯性微动一起圈进去。 */
  const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
  const cp = cam.position, cq = cam.quaternion;
  let sig = ctx3d._camSig;
  if (!sig) { sig = [0, 0, 0, 0, 0, 0, 0]; ctx3d._camSig = sig; }
  const camMoved = Math.abs(sig[0] - cp.x) > 1e-4 || Math.abs(sig[1] - cp.y) > 1e-4 ||
                   Math.abs(sig[2] - cp.z) > 1e-4 ||
                   Math.abs(sig[3] - cq.x) > 1e-5 || Math.abs(sig[4] - cq.y) > 1e-5 ||
                   Math.abs(sig[5] - cq.z) > 1e-5 || Math.abs(sig[6] - cq.w) > 1e-5;
  if (camMoved) ctx3d._camMovedAt = now;
  sig[0] = cp.x; sig[1] = cp.y; sig[2] = cp.z;
  sig[3] = cq.x; sig[4] = cq.y; sig[5] = cq.z; sig[6] = cq.w;

  /* 首帧特判：冷启动时相机也是"刚变过"，若照章办事会把标签压到 150ms 之后才出现。
     所以首帧直接按静止处理（并把迟滞计数初始化到"已结算"），保持原来的首屏观感。 */
  const coldStart = !ctx3d._labelsStarted;
  const interacting = !!(ctx3d.controls && (ctx3d.controls.isInteracting || ctx3d.controls.isTweening));
  const moving = !coldStart && (interacting || (now - (ctx3d._camMovedAt || 0)) < LABEL_MOVE_HOLD_MS);
  ctx3d.labelMoving = moving;
  ctx3d._labelsStarted = true;
  // 运动期间也要让渲染循环继续跑（否则降到 reduced-motion 时循环会停、标签永远不结算）
  let settling = moving;

  labelApi.items.forEach(it => {
    if (!it.allowed) return;
    const p = ctx3d.labelAnchors[it.id];
    if (!p) return;
    v.copy(p).project(cam);
    const dist = cam.position.distanceTo(p);
    /* 距离淡入淡出。
       阈值必须覆盖"默认视角下最远的那个地标"：默认相机在片区东南侧约 246 单位处，
       于是片区最西北角的康乐牌坊离相机足有 325 单位——早先按 320 淡出，
       结果默认视角下它的标签常驻不可见（三地标就没凑齐）。
       现在按 360–520 淡出，最远 325 也仍然是完全不透明的。 */
    const fadeIn = clamp((dist - 34) / 26, 0, 1);
    const fadeOut = clamp((520 - dist) / 160, 0, 1);
    let op = fadeIn * fadeOut;
    if (v.z > 1) op = 0;                              // 在相机背后
    const x = (v.x * 0.5 + 0.5) * w;
    const y = (-v.y * 0.5 + 0.5) * h;
    const off = ctx3d.size.edge;
    if (x < -off || x > w + off || y < -off || y > h + off) op = 0;
    list.push({ it, x, y, op, dist, prio: it.el.classList.contains('is-primary') ? 0 : 1 });
  });

  list.sort((a, b) => a.prio - b.prio || a.dist - b.dist);

  /* 容器底部有两条常驻提示（.k3d-tip 居中、.k3d-hint 左下）压在场景上，
     标签若落到它们身上会糊成一团。所以可用下边界要抬到提示条的上沿之上。
     提示条的位置随容器高度变化 → 只在容器高度变化时重量一次。 */
  if (ctx3d._labelPadFor !== h) {
    let pad = 8;
    const host = ctx3d.container;
    const tips = host ? host.querySelectorAll('.k3d-tip, .k3d-hint') : [];
    const cr = host ? host.getBoundingClientRect() : { top: 0 };
    for (const t of tips) {
      if (!t.getClientRects || !t.getClientRects().length) continue;   // 窄屏下被 CSS 隐藏
      const r = t.getBoundingClientRect();
      const band = h - (r.top - cr.top);
      if (band > pad) pad = Math.min(64, band);
    }
    ctx3d._labelPadFor = h;
    ctx3d._labelPadBottom = pad;
  }
  const padBottom = ctx3d._labelPadBottom || 8;

  // label 尺寸缓存（避免每帧 reflow）
  list.forEach(item => {
    const it = item.it;
    if (!it.w || !it.h) {
      const r = it.el.getBoundingClientRect();
      it.w = r.width || 120;
      it.h = r.height || 40;
    }
  });

  for (const item of list) {
    const it = item.it;
    const halfW = it.w / 2 + 5;
    const halfH = it.h / 2 + 3;
    const mx = 8, my = 8;
    const halfW2 = it.w / 2, halfH2 = it.h / 2;
    /* 标针是"上圆下尖"的水滴：**针尖 = 锚点**。所以下面的 y 一律指"针尖位置"：
         · 可用范围：针尖之上要放得下整根针（minY = 针高 + 8），针尖之下留 8px
         · 防重叠判定的盒子中心 = 针尖上方半个针高（boxOff）
         · 落位用 y - it.h（元件底边压在锚点上），不是 y - halfH2 */
    const boxOff = halfH2;
    const minX = halfW2 + mx, maxX = Math.max(minX, w - halfW2 - mx);
    const minY = it.h + my, maxY = Math.max(minY, h - my - padBottom);

    /* ① 先把锚点投影夹进容器内，再拿**夹取后的位置**去做防堆叠判定。
       早先的版本是"判定用未夹取的投影坐标、落位用夹取后的坐标"，
       两者不一致：贴底的两个标签会被夹到同一条边界上而叠成一坨
       （实测 kangle-village 与 kangle-canal 横向重叠 78px、纵向完全重合）。 */
    const baseX = clamp(item.x, minX, maxX);
    const baseY = clamp(item.y, minY, maxY);

    /* ② 候选位置：先原地，再依次往下 / 往上让**一整个标签高**。
       步长必须 ≥ 两个标签的半高之和，否则让一步之后纵向就错开到判定阈值
       之外、反而检测不到重叠，于是继续叠着（同样是早先那版踩的坑：
       原步长 (halfH*2+5)*(1+attempt*0.5) 越让越大，一下就"逃"出了判定区）。
       核心地标只往下让（它们是画面主角，不该往上飘）；
       次级地点允许上下都试。 */
    const step = it.h + 8;
    const cand = item.prio === 0 ? [0, 1, 2] : [0, 1, -1, 2, -2, 3, -3];
    /* culled = 锚点出画 / 转到相机背后 / 超出距离淡出：这时标签本来就不该显示，
       隐藏它是正常行为，不算"闪现"（计数也分开记，见 labelFlips）。 */
    const culled = item.op <= 0.04;
    let x = baseX;
    let y = baseY;
    let hasRoom = false;
    if (!culled) {
      for (const k of cand) {
        const ty = clamp(baseY + k * step, minY, maxY);
        const boxY = ty - boxOff;                 // 判定用的盒子中心（针尖上方半个针高）
        let hit = false;
        for (const p of placed) {
          if (Math.abs(p.x - x) < (p.halfW + halfW) &&
              Math.abs(p.y - boxY) < (p.halfH + halfH)) { hit = true; break; }
        }
        if (!hit) { y = ty; hasRoom = true; break; }
      }
    }

    /* 显隐决策（"运动中不决策 + 迟滞"就在这里）：
       · 出画 → 直接隐藏（运动中也可以，因为它确实不该在画面上）
       · 相机在动 → 保持当前显隐，一帧都不翻（这是"不闪"的关键）
       · 相机静止 → 带迟滞地结算：连续 LABEL_HIDE_STREAK 帧判不下才隐藏，
         连续 LABEL_SHOW_STREAK 帧判得下才恢复 */
    let show;
    if (culled) {
      show = false;
      it.okStreak = 0;
      it.hitStreak = LABEL_HIDE_STREAK;
    } else if (moving) {
      show = !!it.visible;
    } else {
      if (hasRoom) { it.okStreak = (it.okStreak || 0) + 1; it.hitStreak = 0; }
      else { it.hitStreak = (it.hitStreak || 0) + 1; it.okStreak = 0; }
      if (coldStart) {
        // 首帧：把计数直接置成"已结算"，于是首屏与旧行为一致（该显示的立刻显示）
        it.okStreak = hasRoom ? LABEL_SHOW_STREAK : 0;
        it.hitStreak = hasRoom ? 0 : LABEL_HIDE_STREAK;
      }
      show = it.visible ? (it.hitStreak < LABEL_HIDE_STREAK) : (it.okStreak >= LABEL_SHOW_STREAK);
      // 还有标签在"数帧"路上 → 告诉渲染循环别停，把这次结算跑完
      if (it.hitStreak > 0 && it.hitStreak < LABEL_HIDE_STREAK) settling = true;
      if (!show && it.okStreak > 0 && it.okStreak < LABEL_SHOW_STREAK) settling = true;
    }

    if (show) {
      /* 暂时没有空位（运动中、或迟滞还没让它隐藏）时，位置退回锚点投影处：
         宁可短暂压一下，也不要让标签"闪"掉。 */
      if (!hasRoom) { x = baseX; y = baseY; }
      placed.push({ x, y: y - boxOff, halfW, halfH });   // 判定盒子的中心在针尖上方
      // 针尖压在锚点上：底边对齐 y（不是中心对齐），这样"指哪"才没有歧义
      it.el.style.transform = 'translate3d(' + (x - halfW2).toFixed(1) + 'px,' + (y - it.h).toFixed(1) + 'px,0)';
      it.el.style.opacity = item.op.toFixed(3);
      it.el.style.pointerEvents = item.op > 0.35 ? 'auto' : 'none';
      /* 位移过渡（.is-placed，80ms）在**第二次**落位之后才开：
         否则首帧会从容器左上角 (0,0) 一路"飞"到锚点位置。 */
      if (!it.animReady) {
        if (it.everPlaced) { it.el.classList.add('is-placed'); it.animReady = true; }
        else it.everPlaced = true;
      }
      if (!it.visible) {
        it.el.classList.add('is-on');
        it.visible = true;
        if (culled) ctx3d.labelFlips.cullShow++; else ctx3d.labelFlips.placeShow++;
      }
      it.el.classList.toggle('is-selected', selectedId === it.id);
    } else {
      if (it.visible) {
        it.el.classList.remove('is-on');
        it.visible = false;
        if (culled) ctx3d.labelFlips.cullHide++; else ctx3d.labelFlips.placeHide++;
      }
      it.el.style.opacity = '0';
      it.el.style.pointerEvents = 'none';
    }
  }

  /* 外部入口：清远产业园。
     它是"区域外联"，不是本地地标，所以**固定钉在容器左上角**（CSS 里 top/left=0），
     只根据它相对镜头方位做一个很轻的位移（±10px），形成"那个方向有东西"的暗示；
     绝不做投影跟随——否则镜头一转它就会飘到街区楼群上面，读起来像街区里的一栋楼。
     与街区的位置关系由 3D 那条红色虚线交代。 */
  const ext = labelApi.external;
  const q = ctx3d.qingyuan;
  if (q && ext) {
    // ±8px 的轻微浮动即可；幅度必须小于 base(16px)，否则会贴到容器边上
    const camDir = ctx3d.controls ? ctx3d.controls.spherical.theta : 0;
    const dx = clamp(Math.cos(camDir) * 10, -8, 8);
    const dy = clamp(Math.sin(camDir) * 7, -5, 5);
    ext.style.transform = 'translate3d(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px,0)';
  }

  /* 返回"是否还在结算"：渲染循环据此决定要不要再多跑几帧
     （reduced-motion 下没有人群动画，循环本来会立刻停，那样迟滞就永远走不完）。 */
  return settling;
}

/* ==========================================================================
 * 9. 控制器：自写轨道控制器（拖动 / 滚轮 / 双指 / 4px 判定 / 可打断缓动）
 * ========================================================================*/

function createControls(dom, ctx3d) {
  const cam = ctx3d.camera;
  const spherical = new THREE.Spherical();
  const offset = new THREE.Vector3();
  const target = ctx3d.target.clone();
  let interacting = false;

  // 从相机初始位置反推球坐标
  function syncFromCamera() {
    offset.copy(cam.position).sub(target);
    spherical.setFromVector3(offset);
  }
  syncFromCamera();

  /* ---------------- 缓动（可被打断） ---------------- */
  const tween = {
    active: false, start: 0, dur: CAM.easeMs, onDone: null,
    fromPos: new THREE.Vector3(), toPos: new THREE.Vector3(),
    fromTarget: new THREE.Vector3(), toTarget: new THREE.Vector3()
  };

  function startTween(toPos, toTarget, dur, onDone, reason) {
    /* 先取起点：必须在任何"立刻改相机"的动作之前 copy 当前位姿，
       否则缓动会从一个被劫持过的位置出发（曾经踩过这个坑：
       resetView 先 setTargetTo 把相机瞬移了，缓动起点就变成了终点）。 */
    tween.fromPos.copy(cam.position);
    tween.fromTarget.copy(target);
    tween.toPos.copy(toPos);
    tween.toTarget.copy(toTarget);
    tween.onDone = onDone || null;
    tween.start = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    tween.reason = reason || 'tween';
    // 尊重 prefers-reduced-motion：不做缓动，直接跳到位
    tween.dur = ctx3d.reducedMotion ? 0 : (dur || CAM.easeMs);
    tween.active = true;
    ctx3d.tweenTrace = (ctx3d.tweenTrace || []);
    ctx3d.tweenTrace.push({ ev: 'start', r: tween.reason, at: Math.round(tween.start) });
    if (ctx3d.tweenTrace.length > 12) ctx3d.tweenTrace.shift();
    if (tween.dur <= 0) {
      cam.position.copy(toPos);
      target.copy(toTarget);
      cam.lookAt(target);
      tween.active = false;
      syncFromCamera();
      if (tween.onDone) { const f = tween.onDone; tween.onDone = null; f(); }
    }
    ctx3d.invalidate();
  }
  /** 用户一动手，立刻放弃缓动——"不抢镜头" */
  function interrupt() {
    if (tween.active) {
      tween.active = false;
      tween.onDone = null;
      ctx3d.tweenTrace = (ctx3d.tweenTrace || []);
      ctx3d.tweenTrace.push({ ev: 'interrupt', r: tween.reason, at: Math.round(performance.now()) });
      syncFromCamera();
      ctx3d.pausedUntil = performance.now() + CAM.pauseMs;
    }
  }

  /* ---------------- 指针交互 ---------------- */
  const pointers = new Map();
  let dragInfo = null;      // { id, x, y, moved }
  let pinch = null;         // { d0, dist0 }

  function localPos(e) {
    const r = dom.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  function onPointerDown(e) {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    try { dom.setPointerCapture(e.pointerId); } catch (_) { /* 某些环境不支持，忽略 */ }
    if (pointers.size === 1) {
      dragInfo = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: 0, isDrag: false };
    } else if (pointers.size === 2) {
      const arr = Array.from(pointers.values());
      pinch = { d0: Math.hypot(arr[0].x - arr[1].x, arr[0].y - arr[1].y), dist0: cam.position.distanceTo(target) };
      if (dragInfo) dragInfo.isDrag = true;   // 双指必然是缩放，不是点击
    }
    interrupt();
    dom.classList.add('is-grabbing');
  }

  function onPointerMove(e) {
    if (!pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

    // 双指捏合缩放
    if (pinch && pointers.size >= 2) {
      const arr = Array.from(pointers.values());
      const d = Math.hypot(arr[0].x - arr[1].x, arr[0].y - arr[1].y);
      if (pinch.d0 > 8) {
        // 手指张开（d 变大）→ dist0/d 变小 → 相机靠近
        setDistance(clamp(pinch.dist0 * (pinch.d0 / Math.max(1, d)), CAM.minDist, CAM.maxDist));
      }
      return;
    }

    if (!dragInfo || e.pointerId !== dragInfo.id) return;
    const dx = e.clientX - dragInfo.x;
    const dy = e.clientY - dragInfo.y;
    dragInfo.moved += Math.hypot(dx, dy);
    dragInfo.x = e.clientX; dragInfo.y = e.clientY;

    /* 4px 判定：一旦累计位移超过 4 像素，这次手势就永久定性为"拖动"，
       松手时不再触发点击（isDrag 是单向锁，不随指针回移而复位）。
       为什么是 4：鼠标按下几乎总会带 1–3px 抖动，按 0 判定会把点击全吃掉；
       而 4px 又足够小，用户真想转视角时第一下移动就越过它。 */
    if (dragInfo.moved > DRAG_THRESHOLD_PX) dragInfo.isDrag = true;
    if (!dragInfo.isDrag) return;

    const k = 0.0052;
    spherical.theta -= dx * k;
    spherical.phi -= dy * k;
    // 俯仰限制：低于 25° 会贴着地面看，微缩模型感消失；高于 70° 就成了平面图，看不出楼高
    spherical.phi = clamp(spherical.phi, Math.PI / 2 - CAM.maxPitch, Math.PI / 2 - CAM.minPitch);
    applySpherical();
    ctx3d.pausedUntil = performance.now() + CAM.pauseMs;
    ctx3d.invalidate();
  }

  function onPointerUp(e) {
    if (!pointers.has(e.pointerId)) return;
    pointers.delete(e.pointerId);
    try { dom.releasePointerCapture(e.pointerId); } catch (_) { /* noop */ }
    if (pointers.size < 2) pinch = null;
    if (dragInfo && e.pointerId === dragInfo.id) {
      const wasClick = !dragInfo.isDrag && dragInfo.moved <= DRAG_THRESHOLD_PX;
      ctx3d.lastGesture = { moved: +dragInfo.moved.toFixed(2), isDrag: dragInfo.isDrag, wasClick };
      dragInfo = null;
      if (wasClick) ctx3d.onCanvasClick(e);
    }
    if (pointers.size === 0) dom.classList.remove('is-grabbing');
  }

  function onPointerCancel(e) {
    pointers.delete(e.pointerId);
    if (dragInfo && e.pointerId === dragInfo.id) dragInfo = null;
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) dom.classList.remove('is-grabbing');
  }

  /* ---------------- 滚轮 ---------------- */
  function onWheel(e) {
    e.preventDefault();          // 阻止整页滚动（仅当指针在场景容器上）
    interrupt();
    const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? 100 : 1;
    const d = e.deltaY * unit;
    const dist = cam.position.distanceTo(target) * Math.exp(clamp(d, -260, 260) * 0.0011);
    setDistance(dist);
    ctx3d.pausedUntil = performance.now() + CAM.pauseMs;
  }

  function setDistance(dist) {
    spherical.radius = clamp(dist, CAM.minDist, CAM.maxDist);
    applySpherical();
    ctx3d.invalidate();
  }

  function applySpherical() {
    spherical.makeSafe();
    offset.setFromSpherical(spherical);
    cam.position.copy(target).add(offset);
    cam.lookAt(target);
  }

  /* ---------------- 动画推进 ---------------- */
  function update() {
    if (!tween.active) return;
    /* 用 performance.now() 而不是逐帧累加 dt：
       一是 dt 被 0.05s 上限夹过（低帧率下累加会比真实时间慢，动画被拉长），
       二是这样"0.75 秒"就是真实的 0.75 秒，缓动时长可预期。 */
    const now = (typeof performance !== 'undefined' ? performance.now() : Date.now());
    const t = clamp((now - tween.start) / tween.dur, 0, 1);
    const e = easeInOutCubic(t);
    cam.position.lerpVectors(tween.fromPos, tween.toPos, e);
    target.lerpVectors(tween.fromTarget, tween.toTarget, e);
    cam.lookAt(target);
    ctx3d.invalidate();
    if (t >= 1) {
      tween.active = false;
      ctx3d.lastTweenMs = Math.round(now - tween.start);
      ctx3d.tweenTrace = (ctx3d.tweenTrace || []);
      ctx3d.tweenTrace.push({ ev: 'done', r: tween.reason, ms: ctx3d.lastTweenMs, t: +t.toFixed(3) });
      // 缓动终点要用最终位姿刷新一次球坐标，否则下一次拖动会"跳"回缓动前的角度
      syncFromCamera();
      const f = tween.onDone;
      tween.onDone = null;
      if (f) f();
    }
  }

  dom.addEventListener('pointerdown', onPointerDown);
  dom.addEventListener('pointermove', onPointerMove);
  dom.addEventListener('pointerup', onPointerUp);
  dom.addEventListener('pointercancel', onPointerCancel);
  dom.addEventListener('lostpointercapture', onPointerCancel);
  dom.addEventListener('wheel', onWheel, { passive: false });
  // 屏蔽长按菜单 / 双击缩放，避免和拖动冲突
  dom.addEventListener('contextmenu', e => e.preventDefault());
  dom.addEventListener('dblclick', e => e.preventDefault());

  syncFromCamera();

  return {
    target,
    spherical,
    interrupt,
    update,
    setDistance,
    applySpherical,
    startTween,
    setTargetTo(v) { target.copy(v); applySpherical(); },
    get isTweening() { return tween.active; },
    /** 用户是否正在直接操作相机（按住指针拖动 / 双指缩放）。标签层用它判断"相机在动" */
    get isInteracting() { return !!dragInfo || pointers.size > 0; },
    dispose() {
      dom.removeEventListener('pointerdown', onPointerDown);
      dom.removeEventListener('pointermove', onPointerMove);
      dom.removeEventListener('pointerup', onPointerUp);
      dom.removeEventListener('pointercancel', onPointerCancel);
      dom.removeEventListener('lostpointercapture', onPointerCancel);
      dom.removeEventListener('wheel', onWheel);
    }
  };
}

/* ==========================================================================
 * 10. 主入口
 * ========================================================================*/

export function initScene(container, options) {
  options = options || {};
  const COLORS = mergeColors(options.colors);

  /* ---------- 生命周期容器（无论成功失败都会返回一个 api） ---------- */
  const ctx3d = {
    container: null,
    renderer: null,
    scene: null,
    camera: null,
    controls: null,
    labelApi: null,
    qingyuan: null,
    groups: {},
    disposables: { geos: [], mats: [], textures: [], others: [] },
    track(x) {
      if (!x) return x;
      if (x.isBufferGeometry) this.disposables.geos.push(x);
      else if (x.isMaterial) this.disposables.mats.push(x);
      else if (x.isTexture) this.disposables.textures.push(x);
      else this.disposables.others.push(x);
      return x;
    },
    size: { w: 1, h: 1, dpr: 1, edge: 0 },
    sized: false,
    labelAnchors: {},
    reducedMotion: options.reducedMotion !== undefined
      ? !!options.reducedMotion
      : (typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches),
    lowPower: LOW_POWER,
    pausedUntil: 0,
    /* 标记"需要重绘"并唤醒渲染循环。
       暂停策略见 frame()：页面不可见或容器离开视口时循环会自行停下，
       所以任何会改变画面的操作都要经这里把循环叫醒。 */
    invalidate() {
      this.dirty = true;
      if (typeof ensureLoop === 'function') ensureLoop();
    },
    dirty: true,
    running: false,
    visible: true,
    inView: true,
    selected: null,
    onCanvasClick: null
  };

  let supported = true;
  let disposed = false;

  /* ---------- WebGL 能力检测：不可用时不抛异常，交给调用方回退 ---------- */
  function webglAvailable() {
    try {
      const cv = document.createElement('canvas');
      const gl = cv.getContext('webgl2') || cv.getContext('webgl') || cv.getContext('experimental-webgl');
      if (!gl) return false;
      const lose = gl.getExtension && gl.getExtension('WEBGL_lose_context');
      if (lose) lose.loseContext();
      return true;
    } catch (e) {
      return false;
    }
  }

  const api = {
    focusLandmark(id) { return focusLandmark(id); },
    resetView() { return resetView(); },
    setLabelMode(mode) { if (ctx3d.labelApi) ctx3d.labelApi.setMode(mode === 'all' ? 'all' : 'minimal'); ctx3d.invalidate(); },
    getSelected() { return ctx3d.selected; },
    highlight(idOrNull) { return applyHighlight(idOrNull); },
    dispose() { doDispose(); },
    isSupported() { return supported; },
    /* 便于外部做自适应（也用于自测） */
    getCameraState() { return getCameraState(); },
    getVersion() { return VERSION; },
    /* 地标清单（含标号与文案）：页面侧用它生成场景下方的图例。
       顺序与场内圆标完全一致（都来自 BADGE_ORDER），不要再各排一套。 */
    getPlaces() {
      const defs = (ctx3d.labelApi && ctx3d.labelApi.defs) || {};
      return BADGE_ORDER.map((id, i) => {
        const d = defs[id] || PLACES[id].label;
        return {
          id: id,
          num: String(i + 1).padStart(2, '0'),
          name: d.name,
          sub: d.sub,
          primary: PRIMARY_IDS.indexOf(id) >= 0,
          x: PLACES[id].x, z: PLACES[id].z
        };
      });
    }
  };

  /* ---------- 渲染失败 / 不支持：直接返回 api，页面继续 ---------- */
  // 窄/宽容器下的默认位姿由 resize() 首次调用时按宽高比落定（见那里）
  if (!webglAvailable()) {
    supported = false;
    container.classList.add('k3d-unsupported');
    return api;
  }

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      antialias: !LOW_POWER,
      alpha: false,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true     // 允许外部截图（paused 后仍能取到画面）
    });
  } catch (e) {
    supported = false;
    container.classList.add('k3d-unsupported');
    return api;
  }

  /* =================== 场景搭建 =================== */
  const scene = new THREE.Scene();
  const skyTex = makeSkyTexture();
  ctx3d.track(skyTex);
  scene.background = skyTex;
  scene.fog = new THREE.Fog(0xE3DCCD, 300, 720);

  const camera = new THREE.PerspectiveCamera(CAM.fov, 1, 1, 1600);
  // 初始位姿先用基准默认视角占位；容器量到尺寸后由 applyDefaultView() 校正
  camera.position.copy(CAM.defPos);
  camera.lookAt(CAM.defTarget);

  ctx3d.scene = scene;
  ctx3d.camera = camera;
  ctx3d.renderer = renderer;
  ctx3d.container = container;
  ctx3d.target = CAM.defTarget.clone();

  renderer.setClearColor(0xE7E0D2, 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = LOW_POWER ? THREE.PCFShadowMap : THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  // 略微压暗：ACES 会把亮面拉得很白，0.98 能把"屋顶一片白"收回来一点
  renderer.toneMappingExposure = 0.98;

  const dprCap = LOW_POWER ? 1.5 : 2;          // 要求：devicePixelRatio 上限 2
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));

  const canvas = renderer.domElement;
  canvas.className = 'k3d-canvas';
  // 让移动端单指拖动旋转生效，同时不拦截容器外的页面滚动
  canvas.style.touchAction = 'none';
  container.classList.add('k3d-host');
  container.appendChild(canvas);

  /* ------------------- 光照：斜上方主光 + 环境光 ------------------- */
  const hemi = new THREE.HemisphereLight(0xF3ECDD, 0x8E8676, 1.55);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xFFF3E0, 2.05);
  sun.position.set(150, 210, 120);
  sun.castShadow = true;
  const sc = LOW_POWER ? 1024 : 2048;
  sun.shadow.mapSize.set(sc, sc);
  sun.shadow.camera.near = 40;
  sun.shadow.camera.far = 700;
  const sh = 200;
  sun.shadow.camera.left = -sh; sun.shadow.camera.right = sh;
  sun.shadow.camera.top = sh; sun.shadow.camera.bottom = -sh;
  sun.shadow.bias = -0.0009;
  sun.shadow.normalBias = 0.6;
  scene.add(sun);
  scene.add(sun.target);
  sun.target.position.set(0, 0, 0);
  // 反向补光（不投影），避免背光面死黑
  const fill = new THREE.DirectionalLight(0xCFD8DE, 0.55);
  fill.position.set(-140, 90, -120);
  scene.add(fill);
  const bounce = new THREE.AmbientLight(0xF1EBDD, 0.28);
  scene.add(bounce);

  /* =================== 地面 =================== */
  const groundTex = drawGroundTexture();
  ctx3d.track(groundTex);
  const groundGeo = new THREE.PlaneGeometry(GROUND.x1 - GROUND.x0, GROUND.z1 - GROUND.z0);
  ctx3d.track(groundGeo);
  const groundMat = new THREE.MeshLambertMaterial({ map: groundTex });
  ctx3d.track(groundMat);
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.set((GROUND.x0 + GROUND.x1) / 2, 0, (GROUND.z0 + GROUND.z1) / 2);
  ground.receiveShadow = true;
  ground.name = 'ground';
  scene.add(ground);
  ctx3d.groups.ground = ground;

  /* =================== 材质与街区生成 =================== */
  const mats = createMaterials();
  const simpleReg = [];
  const simple = makeSimpleMaterials(simpleReg);
  // 牌坊 / 广场用的是一份独立的材质组：每个构件可独立高亮，不会互相串色
  const landmarkReg = [];
  const lmat = cloneMats(simple, landmarkReg, mats.tileTex);

  const cityGroup = new THREE.Group();
  cityGroup.name = 'kanglu-district';
  scene.add(cityGroup);
  ctx3d.groups.city = cityGroup;

  const rng = makeRng(20260828);   // 固定种子 → 每次刷新街区形态一致

  // 楼体生成（同时记录每栋的位置，供环境细节使用）
  const buildingLog = [];
  const stats = buildBuildingsRecord(mats, rng, ctx3d, buildingLog);

  // 合并出 4 个外立面 mesh + 1 个屋顶 mesh + 金属件
  mats.facades.forEach(f => {
    if (!f.geos.length) return;
    const geo = mergeGeometries(f.geos);
    // 用「基准色 / 白」的比例让贴图的灰度乘上色调
    geo.setAttribute('color', geo.attributes.color);
    ctx3d.track(geo);
    const mesh = new THREE.Mesh(geo, f.material);
    mesh.name = 'buildings-' + f.material.name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    cityGroup.add(mesh);
    f.geos.forEach(g => g.dispose());
    f.geos.length = 0;
  });
  if (mats.roofGeos.length) {
    const geo = mergeGeometries(mats.roofGeos);
    ctx3d.track(geo);
    const mesh = new THREE.Mesh(geo, mats.roofMat);
    mesh.name = 'roofs';
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    cityGroup.add(mesh);
    mats.roofGeos.forEach(g => g.dispose());
    mats.roofGeos.length = 0;
  }
  if (mats.metalGeos.length) {
    const geo = mergeGeometries(mats.metalGeos);
    ctx3d.track(geo);
    const mesh = new THREE.Mesh(geo, mats.metalMat);
    mesh.name = 'metal-sheds';
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    cityGroup.add(mesh);
    mats.metalGeos.forEach(g => g.dispose());
    mats.metalGeos.length = 0;
  }
  if (mats.paintGeos.length) {
    const geo = mergeGeometries(mats.paintGeos);
    ctx3d.track(geo);
    const mesh = new THREE.Mesh(geo, mats.paintMat);
    mesh.name = 'awnings';
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    cityGroup.add(mesh);
    mats.paintGeos.forEach(g => g.dispose());
    mats.paintGeos.length = 0;
  }
  ctx3d.stats = stats;

  // 环境细节
  buildEnvDetails(cityGroup, rng, buildingLog, mats, ctx3d);
  buildTrees(cityGroup, rng, ctx3d);
  buildElevatedRoad(cityGroup, lmat, ctx3d);
  buildSurroundings(cityGroup, rng, ctx3d);

  /* =================== 地标建模 =================== */
  const landmarks = {};

  const kangle = buildKangleArch(lmat, ctx3d, landmarkReg);
  const P1 = PLACES['kangle-arch'];
  kangle.position.set(P1.x, 0, P1.z);
  kangle.rotation.y = P1.rot;
  kangle.name = 'landmark-kangle-arch';
  kangle.userData.id = 'kangle-arch';
  cityGroup.add(kangle);
  landmarks['kangle-arch'] = kangle;

  const lujiang = buildLujiangArch(lmat, ctx3d, landmarkReg);
  const P2 = PLACES['lujiang-arch'];
  lujiang.position.set(P2.x, 0, P2.z);
  lujiang.rotation.y = P2.rot;
  lujiang.name = 'landmark-lujiang-arch';
  lujiang.userData.id = 'lujiang-arch';
  cityGroup.add(lujiang);
  landmarks['lujiang-arch'] = lujiang;

  const plaza = buildHiringPlaza(lmat, ctx3d, landmarkReg);
  const P3 = PLACES['hiring-plaza'];
  plaza.position.set(P3.x, 0, P3.z);
  plaza.rotation.y = -0.06;
  plaza.userData.id = 'hiring-plaza';
  cityGroup.add(plaza);
  landmarks['hiring-plaza'] = plaza;

  const clinic = buildClinic(lmat, ctx3d, landmarkReg);
  clinic.position.set(-6, 0, -17);
  clinic.rotation.y = 0.2;
  clinic.userData.id = 'yizhen';
  cityGroup.add(clinic);
  landmarks['yizhen'] = clinic;

  /* ---- 8 处次级地点：**必须逐个建出网格** ----
     标签层按 id 取 labelAnchors、focusLandmark 按 id 取 landmarks[id]。
     PLACES 里登记了却拿不到网格，就会在读 .name / .getWorldPosition 时抛
     "Cannot read properties of undefined"，整个三维街区初始化失败。 */
  const subBuilders = {
    'kangle-village': buildKangleVillage,
    'lujiang-village': buildLujiangVillage,
    'fabric-market': buildFabricMarket,
    'hiring-street': buildHiringStreet,
    'kangle-south-st': buildKangleSouthStreet,
    'kangle-canal': buildKangleCanal,
    'lujiang-yard': buildLujiangYard,
    'fengyang-office': buildFengyangOffice
  };
  SUB_PLACE_IDS.forEach((id) => {
    const fn = subBuilders[id];
    if (typeof fn !== 'function') return;
    const P = PLACES[id];
    const grp = fn(mats, lmat, ctx3d, landmarkReg);
    grp.position.set(P.x, 0, P.z);
    grp.rotation.y = P.rot || 0;
    grp.name = 'landmark-' + id;
    grp.userData.id = id;
    cityGroup.add(grp);
    landmarks[id] = grp;
  });

  /* ---- 街景道具：招工广场四边 + 康乐牌坊前庭 ----
     只加"边角/两侧"的日常道具，广场中间留空、牌坊正面不动；
     不注册成地标（不参与拾取/高亮），也不会让牌坊与广场失去主角位置。 */
  buildStreetProps(cityGroup, lmat, ctx3d, landmarkReg);

  landmarkReg.forEach(x => ctx3d.track(x));
  simpleReg.forEach(x => ctx3d.track(x));

  ctx3d.landmarks = landmarks;
  // 拾取列表：只拾取地标（不做建筑级拾取，避免误点）
  ctx3d.pickables = LANDMARK_IDS.concat(['yizhen']).map(id => landmarks[id]).filter(Boolean);

  // 标签锚点（世界坐标）。
  // 注意锚点要落在几何体上方一点点的位置：太高会让标签飘离建筑，
  // 太低又会糊在瓦顶上；同时因为牌坊有 0.28rad 的旋转，锚点沿进深方向
  // 略微内收，别贴在最外沿（否则标签视觉上会"挂在屋檐外面"）。
  ctx3d.labelAnchors = {
    'kangle-arch': new THREE.Vector3(P1.x, 8.6, P1.z + 2),
    'lujiang-arch': new THREE.Vector3(P2.x, 11.8, P2.z + 2),
    'hiring-plaza': new THREE.Vector3(P3.x, 9.0, P3.z),
    'yizhen': new THREE.Vector3(-6, 12.0, -17)
  };
  /* 次级地点的锚点：y 取"形体视觉重心偏上"处——太低会被两侧的楼挡住，
     太高会飘。个别地点的形体在局部坐标里偏过（如涌边巷向西让开卫生站、
     街道办向东北让开招工广场），所以这里用真实几何中心，而不是 PLACES 的名义点。 */
  const SUB_ANCHORS = {
    'kangle-village':  [0, 14.5, 0],
    'lujiang-village': [0, 13.5, 0],
    'fabric-market':   [-4, 7.5, 0],
    'hiring-street':   [0, 11.5, 0],
    'kangle-south-st': [0, 13.0, 0],
    'kangle-canal':    [-3.4, 19.0, 0],
    'lujiang-yard':    [0, 13.0, 0],
    'fengyang-office': [5.0, 15.0, -5.0]
  };
  SUB_PLACE_IDS.forEach((id) => {
    const P = PLACES[id];
    const a = SUB_ANCHORS[id] || [0, 12, 0];
    ctx3d.labelAnchors[id] = new THREE.Vector3(P.x + a[0], a[1], P.z + a[2]);
  });

  /* =================== 清远外联入口 =================== */
  const qy = buildQingyuanMarker(scene, lmat, ctx3d, landmarkReg);
  ctx3d.qingyuan = qy;

  /* =================== 拾取 =================== */
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();

  ctx3d.onCanvasClick = function (e) {
    const rect = canvas.getBoundingClientRect();
    ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(ndc, camera);
    raycaster.params.Line = { threshold: 1 };
    const hits = raycaster.intersectObjects(ctx3d.pickables, true);
    // 记录本次拾取结果，便于自测/排查"点不中"这类问题
    ctx3d.lastPick = {
      ndc: [+ndc.x.toFixed(4), +ndc.y.toFixed(4)],
      client: [Math.round(e.clientX), Math.round(e.clientY)],
      hitCount: hits.length,
      first: hits.length ? (function () {
        let o = hits[0].object;
        while (o && !o.userData.id) o = o.parent;
        return { id: o ? o.userData.id : null, name: hits[0].object.name || hits[0].object.type, dist: +hits[0].distance.toFixed(2) };
      })() : null
    };
    if (!hits.length) {
      // 点空白：取消选中
      if (ctx3d.selected) {
        applyHighlight(null);
        if (typeof selectCb === 'function') selectCb(null);
      }
      return;
    }
    // 回溯到带 id 的根节点
    let o = hits[0].object;
    while (o && !o.userData.id) o = o.parent;
    const id = o && o.userData.id;
    if (!id) return;
    applyHighlight(id);
    if (typeof selectCb === 'function') selectCb(id);
  };

  let selectCb = typeof options.onSelect === 'function' ? options.onSelect : null;

  /* =================== 控制器 =================== */
  ctx3d.controls = createControls(canvas, ctx3d);

  /* =================== 标签 =================== */
  ctx3d.labelApi = createLabelLayer(container, PLACES, options);
  ctx3d.labelApi.setMode(options.labelMode === 'all' ? 'all' : 'minimal');

  // 点击标签也等同于选中（HTML 覆盖层的好处）
  ctx3d.labelApi.items.forEach(it => {
    it.el.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (!it.allowed) return;
      applyHighlight(it.id);
      if (typeof selectCb === 'function') selectCb(it.id);
    });
    it.el.style.touchAction = 'manipulation';
    it.el.addEventListener('pointerdown', e => e.stopPropagation());
  });

  /* =================== 高亮 / 选中 =================== */
  const highlightState = { id: null, materials: [] };

  /**
   * 高亮实现：给该地标的"特征件"材质加自发光 + 整体轻微抬起。
   * 特征件由各 builder 通过 userData.emissiveMats 指定（匾额 / 红额枋 / 正脊 / LED 屏），
   * 只照亮有信息的部分，比整体泛红光更耐看，也不会互相串色。
   */
  function applyHighlight(idOrNull) {
    // 先还原上一次
    highlightState.materials.forEach(m => {
      if (m.userData.__origEmissive !== undefined) {
        m.emissive.setHex(m.userData.__origEmissive);
        m.emissiveIntensity = m.userData.__origIntensity;
      }
    });
    highlightState.materials = [];
    if (highlightState.id && ctx3d.landmarks[highlightState.id]) {
      ctx3d.landmarks[highlightState.id].position.y = 0;
    }
    highlightState.id = null;
    ctx3d.selected = null;

    if (!idOrNull || !ctx3d.landmarks[idOrNull]) {
      ctx3d.invalidate();
      return;
    }
    const g = ctx3d.landmarks[idOrNull];
    const list = Array.isArray(g.userData.emissiveMats) ? g.userData.emissiveMats : [];
    list.forEach(m => {
      if (m.userData.__origEmissive === undefined) {
        m.userData.__origEmissive = m.emissive.getHex();
        m.userData.__origIntensity = m.emissiveIntensity === undefined ? 1 : m.emissiveIntensity;
      }
      m.emissive.setHex(0x8C3A2C);
      m.emissiveIntensity = 0.55;
    });
    highlightState.id = idOrNull;
    highlightState.materials = list;
    ctx3d.selected = idOrNull;
    /* 场内圆标的选中环**当场**套上，不等下一帧：
       updateLabels 每帧也会同步一次，但如果渲染循环正好歇着
       （reduced-motion 下没有人群动画、又没有别的事要做），
       光靠帧就会慢半拍，点图例时看起来像"没反应"。 */
    if (ctx3d.labelApi && ctx3d.labelApi.items) {
      ctx3d.labelApi.items.forEach((it, id) => it.el.classList.toggle('is-selected', id === idOrNull));
    }
    ctx3d.invalidate();
  }

  /** 高亮时轻微抬起（reduced-motion 时改为静止抬起 0.9，不做脉动） */
  function updateHighlight(t) {
    if (!highlightState.id) return;
    const g = ctx3d.landmarks[highlightState.id];
    if (!g) return;
    if (ctx3d.reducedMotion) { g.position.y = 0.9; return; }
    const k = (Math.sin(t * 2.4) * 0.5 + 0.5);
    g.position.y = 0.55 + k * 0.85;
  }

  /* =================== 视角：默认 / focus / 复位 =================== */

  /* 默认视角的"基准"方向（宽屏下的 CAM.defPos 方向），球坐标只取它的
     方位角与俯仰角，距离则按容器宽高比另算——见 defaultDistFor。 */
  const baseOffset = CAM.defPos.clone().sub(CAM.defTarget);
  const baseSpherical = new THREE.Spherical().setFromVector3(baseOffset);
  const baseDir = baseOffset.clone().normalize();

  /* ------------------------------------------------------------------
   * 默认取景的几何依据：直接从**核心三地标**的世界坐标算出来，不靠手调数字。
   *   centerXZ  —— 三地标的水平重心，作为默认 target（保证画面不偏）
   *   SPREAD_XZ —— 三地标在"垂直于视线"方向上的展开宽度，
   *                默认距离至少要能看到这个宽度，否则手机竖屏上
   *                最东的鹭江牌坊会被推出画面（这是实测踩到的坑：
   *                原先按片区 x 跨度估了个 195，实际垂直视线方向的
   *                展开约 210，于是鹭江牌坊差 19px 在容器外）。
   *
   *  ⚠ 这里必须用 PRIMARY_IDS（3 个），不能用 LANDMARK_IDS（现在是 11 个）：
   *  8 处次级地点里最西的布匹市场在 x = -104、最南的街道办在 z = 62，
   *  一起算进来会把重心拉偏、把展开撑大，默认镜头被迫退到很远，
   *  "三地标同框"的构图就散了。次级地点只影响标签，不影响取景。
   * ------------------------------------------------------------------ */
  const centerXZ = (function () {
    let sx = 0, sz = 0;
    for (const id of PRIMARY_IDS) { sx += PLACES[id].x; sz += PLACES[id].z; }
    return { x: sx / PRIMARY_IDS.length, z: sz / PRIMARY_IDS.length };
  })();

  /** 视线方向的水平分量（由 yaw 得到），用于算"垂直于视线"的展开 */
  const viewDirXZ = { x: baseDir.x, z: baseDir.z };
  (function norm() {
    const l = Math.hypot(viewDirXZ.x, viewDirXZ.z) || 1;
    viewDirXZ.x /= l; viewDirXZ.z /= l;
  })();
  /** 屏幕水平方向（右手系）：right = up × forward，这里只取水平分量 */
  const rightXZ = { x: -viewDirXZ.z, z: viewDirXZ.x };
  const perpOf = (p) => p.x * rightXZ.x + p.z * rightXZ.z;

  const SPREAD_XZ = (function () {
    let min = Infinity, max = -Infinity;
    for (const id of PRIMARY_IDS) {
      const v = perpOf(PLACES[id]);
      if (v < min) min = v;
      if (v > max) max = v;
    }
    return max - min;
  })();

  const VERT_H = 150;                               // 竖向希望装下的世界高度
  const HORIZ_MIN = SPREAD_XZ + 46;                 // 横向：三地标展开 + 两侧留白

  /**
   * 默认距离：给宽高比算出"三地标同时入画"所需的相机距离。
   * 取两条约束的较大值：
   *   ① 竖向：VERT_H 装进垂直视角，留 1.16 余量给标签；
   *   ② 横向：HORIZ_MIN 装进水平视角，留 1.10 余量。
   * 方位角与俯仰角不动，只改距离，所以宽窄屏的构图关系一致。
   */
  function defaultDistFor(aspect) {
    const vFov = CAM.fov * Math.PI / 180;
    const dV = (VERT_H / 2) / Math.tan(vFov / 2) * 1.16;
    const dH = (HORIZ_MIN / 2) / (Math.tan(vFov / 2) * Math.max(0.05, aspect)) * 1.10;
    return clamp(Math.max(dV, dH), CAM.minDist, CAM.maxDist);
  }

  function defaultTarget() {
    return new THREE.Vector3(centerXZ.x, CAM.defTarget.y, centerXZ.z);
  }

  function computeDefaultView() {
    const w = Math.max(1, container.clientWidth || 800);
    const h = Math.max(1, container.clientHeight || 600);
    const dist = defaultDistFor(w / h);
    const tgt = defaultTarget();
    return {
      dist,
      target: tgt,
      pos: tgt.clone().add(baseDir.clone().multiplyScalar(dist)),
      spherical: new THREE.Spherical(dist, baseSpherical.phi, baseSpherical.theta),
      spread: SPREAD_XZ,
      horizMin: HORIZ_MIN
    };
  }
  ctx3d.computeDefaultView = computeDefaultView;

  function resetView() {
    if (!ctx3d.controls) return false;
    const def = computeDefaultView();
    /* 顺序很关键：
       ① 先用 startTween 抓取"当前位姿"作为缓动起点并设好终点；
       ② 再把球坐标状态改成默认值（供缓动结束后继续拖动用），
          这一步只写在 controls.spherical 上、由缓动结束时的 syncFromCamera 落地，
          绝不能在缓动期间调用 applySpherical() —— 那会让相机瞬移，把缓动架空。 */
    ctx3d.controls.startTween(def.pos, def.target, CAM.easeMs, () => {
      ctx3d.controls.spherical.radius = def.spherical.radius;
      ctx3d.controls.spherical.theta = def.spherical.theta;
      ctx3d.controls.spherical.phi = def.spherical.phi;
      ctx3d.controls.setTargetTo(def.target);
    }, 'reset');
    ctx3d.pausedUntil = performance.now() + CAM.easeMs + 120;
    return true;
  }

  function focusLandmark(id) {
    if (!ctx3d.controls) return false;
    const g = ctx3d.landmarks[id];
    if (!g) return false;
    const focusCfg = g.userData.focus || { dist: 48, fitH: 24, height: 3 };
    const worldPos = new THREE.Vector3();
    g.getWorldPosition(worldPos);
    const toTarget = new THREE.Vector3(worldPos.x, focusCfg.height, worldPos.z);

    /* 取景距离：让 fitH 这个高度装进画面竖向约 2/3，
       d = (fitH/2) / tan(fov/2) / 0.66
       再用配置的 dist（"至少要退到多远"）兜底，避免贴得太近看不清全貌。
       注意这里**不夹 minDist**：minDist 是"用户滚轮缩放"的下限，
       而 focusLandmark 是导演镜头，允许比用户能滚到的距离更近，
       否则牌坊这种 8 单位高的小构筑物永远只能占画面几个百分点。 */
    const vFov = CAM.fov * Math.PI / 180;
    const fitH = focusCfg.fitH || (focusCfg.height * 2.4);
    const fitDist = (fitH / 2) / Math.tan(vFov / 2) / 0.66;
    const d = clamp(Math.max(focusCfg.dist || 0, fitDist), 22, CAM.maxDist);

    // 从相机当前的水平方向接近，保持用户的空间感（不做"传送式"切换）
    const dir = new THREE.Vector3().subVectors(camera.position, ctx3d.controls.target);
    dir.y = 0;
    if (dir.lengthSq() < 1e-4) dir.set(1, 0, 1);
    dir.normalize();
    /* 仰角：牌坊这类"立着的东西"必须接近平视才看得出形
       （参考照片就是站在街口平视拍的）。20° 时相机只比牌坊中段高一点，
       能看到翘起的屋檐与匾额；如果沿用默认的 35° 俯视，就只剩一个顶。
       成片的楼群 / 窄巷不一样：平视只能看到第一排楼的立面，
       巷子与"一线天"全被挡住，所以它们各自用 focus.pitch 抬高视角
       （不写 pitch 的一律沿用 20°，三处核心地标的取景因此完全不变）。 */
    const pitch = (focusCfg.pitch === undefined ? 20 : focusCfg.pitch) * Math.PI / 180;
    const toPos = new THREE.Vector3(
      toTarget.x + dir.x * Math.cos(pitch) * d,
      toTarget.y + Math.sin(pitch) * d,
      toTarget.z + dir.z * Math.cos(pitch) * d
    );
    ctx3d.controls.startTween(toPos, toTarget, CAM.easeMs, null, 'focus:' + id);
    ctx3d.pausedUntil = performance.now() + CAM.easeMs + 120;
    return true;
  }

  function getCameraState() {
    const tgt = ctx3d.controls ? ctx3d.controls.target : CAM.defTarget;
    const off = new THREE.Vector3().subVectors(camera.position, tgt);
    const s = new THREE.Spherical().setFromVector3(off);
    return {
      position: [+camera.position.x.toFixed(3), +camera.position.y.toFixed(3), +camera.position.z.toFixed(3)],
      target: [+tgt.x.toFixed(3), +tgt.y.toFixed(3), +tgt.z.toFixed(3)],
      distance: +s.radius.toFixed(3),
      azimuthDeg: +(THREE.MathUtils.radToDeg(s.theta)).toFixed(3),
      pitchDeg: +(90 - THREE.MathUtils.radToDeg(s.phi)).toFixed(3),
      selected: ctx3d.selected,
      tweening: ctx3d.controls ? ctx3d.controls.isTweening : false,
      buildings: stats.count,
      quality: LOW_POWER ? 'low' : 'high',
      reducedMotion: ctx3d.reducedMotion,
      supported: supported,
      running: ctx3d.running,
      /* 上一次指针手势的判定结果：自测用来确认 4px 阈值的实际取值 */
      lastGesture: ctx3d.lastGesture || null,
      /* 最近一次缓动的实际耗时（毫秒），用于确认 0.6–0.9s 的承诺 */
      lastTweenMs: ctx3d.lastTweenMs === undefined ? null : ctx3d.lastTweenMs,
      lastPick: ctx3d.lastPick || null,
      tweenTrace: ctx3d.tweenTrace || []
    };
  }

  /* =================== 渲染循环 ===================
   * 循环的**全部可变状态都挂在 ctx3d 上**，而不是用模块内的 let/const。
   *
   * 为什么（重要，别再改回去）：ensureLoop / schedule / frame 都是函数声明，会被提升，
   * 所以任何一次 ctx3d.invalidate()（内部会调 ensureLoop）都可能在看似"安全"的
   * 时机把它们跑起来；此时若循环状态还是 `const clock` / `let rafId` 这种形式，
   * 就会撞上暂时性死区（TDZ）抛 "Cannot access 'clock' before initialization"，
   * 整个场景起不来。挂在早于一切函数调用就存在的 ctx3d 上，次序问题就不存在了。
   */
  ctx3d.clock = new THREE.Clock();
  ctx3d.rafId = 0;
  ctx3d.labelTick = 0;
  /* 标签显隐计数（自测用，不参与业务）：
       placeShow / placeHide = 因为**防重叠判定**而显示 / 隐藏的次数，
         也就是"转动地图时标签闪现"的量化指标——相机在动时它应该接近 0；
       cullShow / cullHide = 锚点跑出画面、转到相机背后或超出距离淡出
         导致的显隐，这是正常行为（标签确实不该显示），不算法闪。
     见 updateLabels 里的记数与 api._debug.labelStats()。 */
  ctx3d.labelFlips = { placeShow: 0, placeHide: 0, cullShow: 0, cullHide: 0 };
  ctx3d.disposed = false;

  function frame() {
    ctx3d.rafId = 0;
    if (ctx3d.disposed) return;
    const t = ctx3d.clock.getElapsedTime();

    if (!ctx3d.visible || !ctx3d.inView) {
      // 暂停：不再安排下一帧，等 visibility / intersection 事件唤醒
      ctx3d.running = false;
      return;
    }

    ctx3d.controls.update();
    updateHighlight(t);
    if (!ctx3d.reducedMotion && (t - (ctx3d.lastCrowd || 0)) > 0.055) {
      ctx3d.lastCrowd = t;
      animateCrowd(landmarks['hiring-plaza'], t);
    }

    renderer.render(scene, camera);

    // 标签每帧更新（位置跟手；隐藏决策由 updateLabels 内部按"相机是否在动 + 迟滞"把关）
    ctx3d.labelTick++;
    const labelSettling = updateLabels(ctx3d.labelApi, ctx3d, ctx3d.selected);

    // 需要持续渲染的条件：缓动中 / 选中高亮 / 人群动画在跑 / 标签还在结算
    const needs = ctx3d.controls.isTweening || !!highlightState.id || !ctx3d.reducedMotion || labelSettling;
    if (needs || ctx3d.dirty) {
      ctx3d.dirty = false;
      schedule();
    } else {
      ctx3d.running = false;
    }
  }

  function schedule() {
    if (ctx3d.rafId || ctx3d.disposed) return;
    ctx3d.rafId = requestAnimationFrame(frame);
  }
  function ensureLoop() {
    if (ctx3d.disposed || ctx3d.running) return;
    ctx3d.running = true;
    ctx3d.clock.getDelta();     // 丢掉暂停期间累积的时间
    schedule();
  }

  /* =================== 尺寸 / 生命周期 ===================
   * 注意：这一段刻意排在渲染循环与所有 const/let 之后。
   * resize() 内部会调 ctx3d.invalidate()，从而（经由被提升的 ensureLoop）进入 frame()；
   * 放在这里可以保证 frame() 依赖的 camera / renderer / controls / landmarks / clock
   * 全部已经初始化完成，不会踩到 TDZ。
   */
  let resizeRaf = 0;
  const onResize = () => {
    if (resizeRaf) return;
    resizeRaf = requestAnimationFrame(() => { resizeRaf = 0; resize(); });
  };
  function resize() {
    const w = Math.max(1, container.clientWidth || container.offsetWidth || 800);
    const h = Math.max(1, container.clientHeight || container.offsetHeight || 600);
    const prevW = ctx3d.size.w, prevH = ctx3d.size.h;
    const first = !ctx3d.sized;
    ctx3d.size.w = w;
    ctx3d.size.h = h;
    ctx3d.size.edge = Math.max(w, h) * 0.2;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    ctx3d.sized = true;

    /* 宽高比变化时，按新旧默认距离的比例缩放当前距离。
       这样"手机转横屏 / 桌面拖窗口"时，构图会跟着重新适配，
       而用户自己缩放过的相对距离感仍被保留（不会跳回默认）。
       首帧（first）直接落到默认距离，避免初始镜头是歪的。 */
    if (ctx3d.controls) {
      const prevAspect = prevW / prevH;
      const asp = w / h;
      if (first) {
        const def = computeDefaultView();
        ctx3d.controls.target.copy(def.target);
        ctx3d.controls.spherical.radius = def.spherical.radius;
        ctx3d.controls.spherical.theta = def.spherical.theta;
        ctx3d.controls.spherical.phi = def.spherical.phi;
        ctx3d.controls.applySpherical();
      } else if (Math.abs(asp - prevAspect) > 1e-3) {
        const prevD = defaultDistFor(prevAspect);
        const nextD = defaultDistFor(asp);
        if (prevD > 0) ctx3d.controls.setDistance(ctx3d.controls.spherical.radius * (nextD / prevD));
      }
    }
    ctx3d.invalidate();
  }
  resize();

  window.addEventListener('resize', onResize);
  let ro = null;
  if (typeof ResizeObserver !== 'undefined') {
    ro = new ResizeObserver(onResize);
    ro.observe(container);
  }

  // 页面不可见 → 暂停；容器离开视口 → 暂停
  const onVisibility = () => {
    ctx3d.visible = !document.hidden;
    if (ctx3d.visible) ctx3d.invalidate();
  };
  document.addEventListener('visibilitychange', onVisibility);

  let io = null;
  if (typeof IntersectionObserver !== 'undefined') {
    io = new IntersectionObserver((entries) => {
      for (const en of entries) ctx3d.inView = en.isIntersecting;
      if (ctx3d.inView) ctx3d.invalidate();
    }, { threshold: 0.02 });
    io.observe(container);
  }

  // prefers-reduced-motion 变化的实时响应
  let mqReduce = null;
  const onReduceChange = (e) => { ctx3d.reducedMotion = e.matches; };
  if (typeof matchMedia === 'function') {
    mqReduce = matchMedia('(prefers-reduced-motion: reduce)');
    if (mqReduce.addEventListener) mqReduce.addEventListener('change', onReduceChange);
    else if (mqReduce.addListener) mqReduce.addListener(onReduceChange);
  }

  // 首帧
  ensureLoop();

  // 首帧就绪回调（下一帧之后，保证画面已经画出来）
  if (typeof options.onReady === 'function') {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!ctx3d.disposed) {
          try { options.onReady(); } catch (e) { /* 调用方异常不影响场景 */ }
        }
      });
    });
  }

  /* =================== 释放 =================== */
  function doDispose() {
    if (ctx3d.disposed) return;
    ctx3d.disposed = true;
    ctx3d.running = false;
    if (ctx3d.rafId) cancelAnimationFrame(ctx3d.rafId);
    if (resizeRaf) cancelAnimationFrame(resizeRaf);

    window.removeEventListener('resize', onResize);
    document.removeEventListener('visibilitychange', onVisibility);
    if (ro) { ro.disconnect(); ro = null; }
    if (io) { io.disconnect(); io = null; }
    if (mqReduce) {
      if (mqReduce.removeEventListener) mqReduce.removeEventListener('change', onReduceChange);
      else if (mqReduce.removeListener) mqReduce.removeListener(onReduceChange);
    }
    if (ctx3d.controls) ctx3d.controls.dispose();

    // 标签层
    if (ctx3d.labelApi) ctx3d.labelApi.dispose();

    // 遍历场景释放几何体与材质
    const seenGeo = new Set(), seenMat = new Set(), seenTex = new Set();
    scene.traverse(o => {
      if (o.geometry) {
        if (!seenGeo.has(o.geometry)) { seenGeo.add(o.geometry); o.geometry.dispose(); }
      }
      const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
      for (const m of ms) {
        if (!m || seenMat.has(m)) continue;
        seenMat.add(m);
        for (const k of ['map', 'emissiveMap', 'normalMap', 'roughnessMap', 'alphaMap']) {
          if (m[k] && !seenTex.has(m[k])) { seenTex.add(m[k]); m[k].dispose(); }
        }
        m.dispose();
      }
    });
    // 额外登记的（未挂在场景上的中间资源）
    ctx3d.disposables.geos.forEach(g => { try { g.dispose(); } catch (e) { void e; } });
    ctx3d.disposables.mats.forEach(m => { try { m.dispose(); } catch (e) { void e; } });
    ctx3d.disposables.textures.forEach(t => { try { t.dispose(); } catch (e) { void e; } });

    mats.dispose();
    scene.clear();
    renderer.dispose();
    if (renderer.forceContextLoss) { try { renderer.forceContextLoss(); } catch (e) { void e; } }
    if (canvas && canvas.parentNode) canvas.parentNode.removeChild(canvas);
    container.classList.remove('k3d-host');
    ctx3d.scene = null;
    ctx3d.camera = null;
    ctx3d.renderer = null;
  }

  /* =================== 调试出口（自测用，不影响业务） =================== */
  ctx3d.getCameraState = getCameraState;
  api._debug = {
    state: getCameraState,
    select(id) { applyHighlight(id); if (typeof selectCb === 'function') selectCb(id); },
    labels() {
      const out = [];
      const v = new THREE.Vector3();
      const cam = ctx3d.camera;
      ctx3d.labelApi.items.forEach((it, id) => {
        const p = ctx3d.labelAnchors[id];
        let raw = null;
        if (p) {
          v.copy(p).project(cam);
          const w = ctx3d.size.w, h = ctx3d.size.h;
          raw = {
            dist: +cam.position.distanceTo(p).toFixed(2),
            ndc: [+v.x.toFixed(3), +v.y.toFixed(3), +v.z.toFixed(3)],
            screen: [Math.round((v.x * 0.5 + 0.5) * w), Math.round((-v.y * 0.5 + 0.5) * h)],
            viewport: [w, h]
          };
        }
        out.push({
          id,
          allowed: !!it.allowed,
          visible: !!it.visible,
          // 缓存下来的标签尺寸（防堆叠判定用的就是它，量错了会叠在一起）
          w: Math.round(it.w || 0),
          h: Math.round(it.h || 0),
          opacity: it.el.style.opacity,
          display: getComputedStyle(it.el).display,
          visibility: getComputedStyle(it.el).visibility,
          transform: it.el.style.transform,
          rect: (function () {
            const r = it.el.getBoundingClientRect();
            return [Math.round(r.left), Math.round(r.top), Math.round(r.width), Math.round(r.height)];
          })(),
          raw,
          text: it.el.textContent
        });
      });
      return out;
    },
    /* 立刻跑一次标签布局（自测专用）。
       无头环境里 --virtual-time-budget 会把 rAF 饿死（实测 rAF 回调一次都不跑），
       没法自然制造"相机每动一帧、标签跟着重排一次"的过程。这个钩子把
       "改相机 → 重排标签"从 rAF 里解耦出来，于是可以确定性地跑 300 次
       "移动 + 重排"，用来定量测"转动时标签闪几次"（见 labelStats 的计数）。 */
    updateLabelsNow() {
      updateLabels(ctx3d.labelApi, ctx3d, ctx3d.selected);
      return true;
    },
    /* 标签显隐计数：placeShow/placeHide 是"因防重叠而显/隐"的次数（闪现指标），
       cull* 是锚点出画/太远导致的正常显隐。自测用，不参与业务。 */
    labelStats() {
      const f = ctx3d.labelFlips;
      const items = [];
      if (ctx3d.labelApi) {
        ctx3d.labelApi.items.forEach((it, id) => {
          items.push({ id, visible: !!it.visible, okStreak: it.okStreak || 0, hitStreak: it.hitStreak || 0 });
        });
      }
      return {
        placeShow: f.placeShow, placeHide: f.placeHide,
        cullShow: f.cullShow, cullHide: f.cullHide,
        flips: f.placeShow + f.placeHide,
        visibleNow: items.filter(x => x.visible).length,
        labelFrames: ctx3d.labelTick,
        moving: !!ctx3d.labelMoving,
        items
      };
    },
    resetLabelStats() {
      ctx3d.labelFlips = { placeShow: 0, placeHide: 0, cullShow: 0, cullHide: 0 };
      return true;
    },
    /* 返回清远外联入口的位置与"是否在片区轮廓之外"，供自测断言 */    external() {
      if (!qy) return null;
      const p = qy.group.position;
      return {
        name: '清远产业园',
        x: p.x, y: p.y, z: p.z,
        insideDistrict: insideDistrict(p.x, p.z, 20),
        eastOfDistrict: p.x > DISTRICT.east,
        northOfDistrict: p.z < DISTRICT.north,
        isPickable: ctx3d.pickables.indexOf(qy.group) >= 0,
        labelTransform: ctx3d.labelApi.external.style.transform
      };
    },
    landmarkPositions() {
      const o = {};
      Object.keys(landmarks).forEach(k => {
        const p = new THREE.Vector3();
        landmarks[k].getWorldPosition(p);
        o[k] = [+p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2)];
      });
      return o;
    },
    counts() {
      let meshes = 0, instanced = 0, lines = 0;
      scene.traverse(o => {
        if (o.isInstancedMesh) instanced++;
        else if (o.isMesh) meshes++;
        else if (o.isLine || o.isLineSegments) lines++;
      });
      return { meshes, instanced, lines, buildings: stats.count, drawCalls: renderer.info.render.calls };
    }
  };
  ctx3d.api = api;
  if (typeof window !== 'undefined') {
    window.__KANGLU_SCENE__ = ctx3d;
    window.__KANGLU_API__ = api;
  }

  return { api };
}

/* ==========================================================================
 * 11. 生成器（带记录版本，供环境细节与统计使用）
 * ========================================================================*/
/**
 * 沿斜向巷道生成全部楼体。
 *
 * 布局：一条巷道两侧各"两进"——贴巷一排（开门就是巷子）+ 背靠背一排，
 *       两排之间留 1.7 单位的一线天。相邻巷道的两进之间隔着一整条巷道，
 *       所以楼不会互相穿插（spacing > 两进总深）。
 * 裁切：任何一角落到片区道路之外、或落进地标占位区，整栋放弃。
 */
function buildBuildingsRecord(mats, rng, ctx3d, log) {
  const th = LANE.deg * Math.PI / 180;
  const du = { x: Math.cos(th), z: -Math.sin(th) };   // 沿巷道方向
  const nu = { x: -du.z, z: du.x };                   // 垂直巷道方向（单位向量）

  const stats = { count: 0, floors: [], laneCount: 0, skipped: 0 };
  const laneCount = Math.ceil((LANE.vMax - LANE.vMin) / LANE.spacing);
  stats.laneCount = laneCount + 1;
  // 每一进的名义进深（用于把"背排"整体推到"贴巷排"之后）
  const depthRowDepth = (LANE.depthMin + LANE.depthMax) / 2;

  for (let i = 0; i <= laneCount; i++) {
    const v = LANE.vMin + i * LANE.spacing;
    const laneW = rng.range(LANE.widthMin, LANE.widthMax);
    const rows = ctx3d.lowPower ? 1 : 2;    // 低配只保留贴巷一进
    for (let side = -1; side <= 1; side += 2) {
      for (let depthIdx = 0; depthIdx < rows; depthIdx++) {
        // 该进内楼体中心相对巷道中线的距离：
        //   贴巷排 = 巷壁(laneW/2) + 退让(frontGap) + 半个进深
        //   背  排 = 上面这一整进之后，再隔一条一线天(backGap) + 半个进深
        const frontInner = laneW / 2 + LANE.frontGap;
        const offset = side * (frontInner + (depthIdx === 0 ? 0 : (depthRowDepth + LANE.backGap)));

        let u = LANE.uMin + rng.range(0, 4);
        let guard = 0;
        while (u < LANE.uMax && guard++ < 240) {
          const w = rng.range(5.5, 13.5);       // 沿街开间
          const depth = rng.range(LANE.depthMin, LANE.depthMax);   // 进深
          // 楼体中心 = 沿巷道推进 w/2，同时沿法向偏移 offset + depth/2
          const cu = u + w / 2;
          const cvv = v + offset + depth / 2;
          const cx = du.x * cu + nu.x * cvv;
          const cz = du.z * cu + nu.z * cvv;

          let ok = true;
          for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) {
            const px = cx + du.x * (a * w / 2) + nu.x * (b * depth / 2);
            const pz = cz + du.z * (a * w / 2) + nu.z * (b * depth / 2);
            if (!insideDistrict(px, pz, -0.4)) { ok = false; break; }
            if (inExclusion(px, pz)) { ok = false; break; }
          }
          if (ok && !inExclusion(cx, cz)) {
            // 楼高 3–8 层，形成参差天际线；层高在 2.7/3.0/3.35 里随机
            const floors = ctx3d.lowPower ? rng.int(3, 7) : rng.int(3, 8);
            const fh = rng.pick(FLOOR_H);
            const h = floors * fh;
            const rec = addBuilding(mats, rng, cx, cz, w, depth, h, -th, ctx3d);
            log.push(rec);
            stats.count++;
            stats.floors.push(floors);
          } else {
            stats.skipped++;
          }
          u += w + rng.range(0.15, 1.1);   // 楼与楼之间只留极窄缝，紧贴成排
        }
      }
    }
  }
  stats.avgFloors = stats.floors.length
    ? +(stats.floors.reduce((a, b) => a + b, 0) / stats.floors.length).toFixed(2)
    : 0;
  return stats;
}

export function disposeScene() {
  if (typeof window !== 'undefined' && window.__KANGLU_API__ && window.__KANGLU_API__.dispose) {
    try { window.__KANGLU_API__.dispose(); } catch (e) { void e; }
  }
  if (typeof window !== 'undefined') {
    delete window.__KANGLU_SCENE__;
    delete window.__KANGLU_API__;
  }
}
