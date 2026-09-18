/* ============================================================
   康鹭地图（三维版）：把上一版的二维关系图换成真实三维街区
   ------------------------------------------------------------
   与上一版二维图的分工：
     · 地图本体  → 可旋转/缩放/复位/点击的三维街区
     · 点击地标  → 在该地标位置弹出「地点卡片」（紧凑：照片 + 一句话 + 完整档案入口）
     · 右侧面板  → 保留原有的节点索引与空间关系速览（不重复卡片内容）
   依赖：scene-bundle.js（暴露 window.KangluScene）
   ============================================================ */
(function () {
  'use strict';

  var HOST_ID = 'kanglu3d';
  var POP_ID = 'placePop';

  /* 图层配色与空间关系：原先定义在二维地图脚本 map.js 里，这里内联过来，
     因为二维脚本已被三维场景取代。 */
  var LAYERS = {
    industry: '#B84A3A', life: '#4a7a5c', governance: '#2f6b7d',
    transit: '#b0863b', outside: '#7a4a6b'
  };
  var RELATIONS = [
    { c: '#B84A3A', t: '实线 · 布料供应', d: '中大布匹市场 → 村内制衣厂（步行 / 电动车）' },
    { c: '#2f6b7d', t: '实线 · 成衣出货', d: '村内制衣厂 → 十三行、沙河批发档口（凌晨发车）' },
    { c: '#4a7a5c', t: '虚线 · 用工匹配', d: '招工广场 ⇄ 村内作坊（步行几分钟）' },
    { c: '#7a4a6b', t: '虚线 · 产业转移', d: '康鹭 → 清远 · 广清纺织服装产业园（约 80 km）' }
  ];

  /* 三个核心地标：id 必须与三维场景里的地标 id 一致 */
  var LANDMARKS = [
    { id: 'kangle-arch', name: '康乐牌坊', sub: '片区西侧' },
    { id: 'lujiang-arch', name: '鹭江牌坊', sub: '片区东侧' },
    { id: 'hiring-plaza', name: '招工广场', sub: '原鹭江球场' },
    { id: 'kangle-village', name: '康乐村', sub: '康乐片区 · 制衣作坊集中区' },
    { id: 'lujiang-village', name: '鹭江村', sub: '鹭江片区 · 早期加工厂落脚地' },
    { id: 'fabric-market', name: '中大布匹市场', sub: '瑞康路西侧 · 布料供应来源' },
    { id: 'hiring-street', name: '鹭江南约大街', sub: '招工街 · 沿街招工与招租' },
    { id: 'kangle-south-st', name: '康乐东约南大街', sub: '康乐主街 · 作坊与出租屋' },
    { id: 'kangle-canal', name: '康乐中约南新街涌边一巷', sub: '涌边巷 · 握手楼最密处' },
    { id: 'lujiang-yard', name: '鹭江东约新街 88 号大院', sub: '出租大院 · 一户一厂的典型' },
    { id: 'fengyang-office', name: '凤阳街道办事处', sub: '治理节点 · 旧改与整治的实施方' }
  ];

  /* 地点卡片内容。配图一律是环境影像，并注明非本人肖像。 */  var INFO = {
    'kangle-arch': {
      title: '康乐牌坊',
      sub: '片区西侧入口',
      photo: 'assets/img/field/arch-kangle-1.jpg',
      cap: '康乐东约牌坊：朱红瓦顶、两侧楹联与匾额。图为环境影像。',
      line: '牌坊立在康乐村街口。走进牌坊，巷子立刻收窄，两侧是自建的握手楼与一楼作坊——康鹭的密度感从这里开始。',
      quote: '「以前都是在路边招工，比较散乱。」',
      quoteSrc: '档案一，来康鹭二十余年的散工',
      links: [['人物档案 · 档案一', 'person.html?id=a1']]
    },
    'lujiang-arch': {
      title: '鹭江牌坊',
      sub: '片区东侧入口',
      photo: 'assets/img/field/arch-lujiang.jpg',
      cap: '鹭江村口的牌坊。图为环境影像。',
      line: '鹭江村是这一带最早的服装加工落脚地之一。牌坊内侧是成片的出租屋与作坊，许多湖北来的师傅一住就是十几年。',
      quote: '「十多年前，和丈夫一道来到鹭江。」',
      quoteSrc: '档案二（夫妻同行）',
      links: [['人物档案 · 档案二', 'person.html?id=a2']]
    },
    'hiring-plaza': {
      title: '招工广场',
      sub: '原鹭江球场 · 2023 年改建为零工市场',
      photo: 'assets/img/field/market-hiring-2.jpg',
      cap: '招工广场的上午：人群集中在广场地面，上方是膜结构棚顶与成排灯罩。',
      line: '这里原是鹭江球场，约 5000 平方米。2023 年 8 月改造为零工市场，配了饮水、卫生间、云广播与 LED 屏，取代了从前沿街招工、人车混杂的场面。',
      quote: '「想上班了就去广场找活干，工钱结够了就可以玩几天。」',
      quoteSrc: '档案三，31 岁男工',
      links: [['人物档案 · 档案三', 'person.html?id=a3'], ['产业背景', 'background.html']]
    }
  };

  /* 新增地点的卡片内容（与节点索引对应；照片用课题组自己的田野影像） */
  var INFO_MORE = {
    'kangle-village': { title: '康乐村', sub: '康乐片区', photo: 'assets/img/field/arch-kangle-1.jpg',
      cap: '康乐东约一带街巷。环境影像。',
      line: '康乐村是片区西半部，自建房密集、一楼多为作坊。改造启动后，部分厂主开始向外寻找落脚点。',
      quote: '「以前都是在路边招工，比较散乱。」', quoteSrc: '档案一',
      links: [['人物档案 · 档案一', 'person.html?id=a1']] },
    'lujiang-village': { title: '鹭江村', sub: '鹭江片区', photo: 'assets/img/field/arch-lujiang.jpg',
      cap: '鹭江村口牌坊一带。环境影像。',
      line: '鹭江村是这一带最早的服装加工落脚地之一，1993 年前后第一批加工厂在此聚集。',
      quote: '「十多年前，和丈夫一道来到鹭江。」', quoteSrc: '档案二',
      links: [['人物档案 · 档案二', 'person.html?id=a2']] },
    'fabric-market': { title: '中大布匹市场', sub: '瑞康路西侧 · 区域外联', photo: 'assets/img/field/market-hiring-1.jpg',
      cap: '村内招工与布料搬运的日常。环境影像。',
      line: '片区的布料来源。中大纺织商圈与村内作坊之间靠步行与电动车完成"上午拿布、下午出货"的循环。',
      quote: '「清远距离广州 80 公里左右。」', quoteSrc: '档案四',
      links: [['产业背景', 'background.html']] },
    'hiring-street': { title: '鹭江南约大街', sub: '招工街', photo: 'assets/img/field/market-hiring-2.jpg',
      cap: '招工广场棚下的人群。环境影像。',
      line: '在零工市场建成之前，招工主要发生在这样的沿街路段——老板举牌、工人围观，人车混行。',
      quote: '「现在有广场，比较集中、比较好找人。」', quoteSrc: '档案一',
      links: [['变迁记录', 'chronicle.html']] },
    'kangle-south-st': { title: '康乐东约南大街', sub: '康乐主街', photo: 'assets/img/field/board-hiring-led.jpg',
      cap: '招工广场的 LED 公示屏。环境影像。',
      line: '康乐村的主街之一，作坊与出租屋沿街排开，是"下楼即上班"这种生活形态的典型断面。',
      quote: '「工钱结够了就可以玩几天。」', quoteSrc: '档案三',
      links: [['人物档案 · 档案三', 'person.html?id=a3']] },
    'kangle-canal': { title: '康乐中约南新街涌边一巷', sub: '涌边巷', photo: 'assets/img/field/arch-kangle-1.jpg',
      cap: '涌边一带的握手楼。环境影像。',
      line: '涌边一带是握手楼最密的地方：楼间距常在 1 米上下，"阳光都要收费"说的就是这里。',
      quote: '「阳光都要收费。」', quoteSrc: '公开报道中的居民表述',
      links: [['产业背景 · 空间形态', 'background.html#space']] },
    'lujiang-yard': { title: '鹭江东约新街 88 号大院', sub: '出租大院', photo: 'assets/img/field/market-hiring-1.jpg',
      cap: '大院门口一带。环境影像。',
      line: '典型的"一户一厂"：整栋楼被分租给多户制衣作坊，房东、厂主、工人共用一个院子。',
      quote: '「老板和工人每天上午在这里对工价。」', quoteSrc: '档案一',
      links: [['人物档案', 'people.html']] },
    'fengyang-office': { title: '凤阳街道办事处', sub: '治理节点', photo: 'assets/img/field/clinic-yizhen.jpg',
      cap: '街道层面的公共服务空间。环境影像。',
      line: '旧改与综合整治的实施方。片区的"拆、治、兴"、零工市场改造都由这一级推动。',
      quote: '「人居环境治理、整体规划建设、产业形态引导三方面同步。」', quoteSrc: '公开政策表述',
      links: [['变迁记录 · 改造与政策', 'chronicle.html#policy']] }
  };
  /* 图层中文名（与 data.js 的 LAYERS 同名）：平面关系图的图例文字要用。
     注意本文件的 LAYERS 是"图层 → 颜色"，没有名字，别再写成 LAYERS[l].name。 */
  var LAYER_NAMES = {
    industry: '产业空间', life: '生活服务', governance: '治理节点',
    transit: '交通连接', outside: '区域外联'
  };

  /* 只有平面 / 文字记录、**没有**三维形体的节点（区域外联、轨道站点、
     以及未单独重建的工业区）。点它们也要有反馈，所以各补一条卡片文案；
     只写"它属于哪一类、在片区什么方位、为何不在三维里"这些项目自有的事实
     （来源：data.js 里这些 POI 自带的 summary / detail / facts），不另编内容。
     注意：必须定义在下面"合并进 INFO"之前（var 只在赋值后才可用，早先放在
     合并之后会让 Object.keys(INFO_EXT) 抛 TypeError，整个脚本起不来）。 */
  var INFO_EXT = {
    m10: { title: '鹭江站', sub: '交通连接 · 位于片区之外 · 未做三维重建',
      line: '地铁 8 号线的车站，在片区南侧一带，是片区对外联系的主要轨道交通节点之一；三维街区只重建了片区内部，所以这里没有它的形体。',
      links: [['产业背景 · 空间形态', 'background.html#space']] },
    m11: { title: '逸景路站', sub: '交通连接 · 位于片区之外 · 未做三维重建',
      line: '在建的地铁 11 号线（环线）车站，与在建的五凤站、上涌公园一起构成片区南部新的轨道支撑——属于片区之外的城市条件，不在三维街区的重建范围内。',
      links: [['产业背景 · 空间形态', 'background.html#space']] },
    m12: { title: '鹭江第三工业区', sub: '产业空间 · 未单独重建三维形体',
      line: '鹭江村内的集体工业区之一，集中了大量中小型制衣厂及配套的印花、烫钻、绣花工序。三维街区里它没有被单独建模——那一片以成排自建房与厂房肌理来表示。',
      links: [['产业背景 · 空间形态', 'background.html#space']] },
    m13: { title: '广州塔', sub: '区域外联 · 约 4 km 外 · 未做三维重建',
      line: '片区天际线之外的城市地标，与这里的制衣村形成尺度对比。它远在片区之外，不在三维街区的重建范围内。',
      links: [['关于研究 · 声明与方法', 'statement.html']] },
    m14: { title: '沙河 / 十三行', sub: '区域外联 · 成衣批发档口 · 未做三维重建',
      line: '康鹭的成衣出货方向，通常说车程约半小时。它属于片区之外的批发端，没有对应的三维形体。',
      links: [['产业背景', 'background.html']] },
    m15: { title: '广清纺织服装产业园', sub: '区域外联 · 约 80 km · 未做三维重建',
      line: '产业转移的承接地，在清远。三维场景里用一个悬浮的方向标牌加一条虚线表示它的方位（不随镜头跑），而不是一栋街区里的楼——因为它本来就在片区之外。',
      links: [['产业背景 · 产业转移', 'background.html#industry']] }
  };

  /* 合并进 INFO */
  Object.keys(INFO_MORE).forEach(function (k) { INFO[k] = INFO_MORE[k]; });
  Object.keys(INFO_EXT).forEach(function (k) { INFO[k] = INFO_EXT[k]; });

  /* 场景里真正建了网格的地标白名单。
     场景按 id 去取 landmarks[id] 会抛 Cannot read properties of undefined，
     所以聚焦前必须先过这份名单；它必须与 scene3d.js 的 PLACES 键列表一致。 */
  var IN_SCENE = [
    'kangle-arch', 'lujiang-arch', 'hiring-plaza',
    'kangle-village', 'lujiang-village', 'fabric-market', 'hiring-street',
    'kangle-south-st', 'kangle-canal', 'lujiang-yard', 'fengyang-office'
  ];
  /* 可以聚焦的还有卫生站（yizhen，有三维形体、但没有编号，默认隐藏）。
     focusLandmark 内部对没有网格的 id 会 return false，不会抛错。 */
  var FOCUSABLE = IN_SCENE.concat(['yizhen']);

  var esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  };

  var host = document.getElementById(HOST_ID);
  var pop = document.getElementById(POP_ID);
  var api = null;
  var current = null;
  var wrap = host ? host.closest('.map-stage') : null;

  /* ---------- 地点卡片：贴着对应地标的标签弹出 ---------- */
  function labelRect(id) {
    // 三维场景把地标标签渲染成带 data-id 的按钮，并且已经按投影定位——
    // 直接读它的屏幕位置，就能把卡片弹在"地图上对应的位置"。
    var el = document.querySelector('.k3d-label[data-id="' + id + '"]');
    if (!el) return null;
    var r = el.getBoundingClientRect();
    if (!r.width && !r.height) return null;
    return r;
  }

  function placePop(id) {
    if (!pop || !INFO[id]) return;
    var d = INFO[id];
    var hostRect = (wrap || host).getBoundingClientRect();

    /* 配图与引语都是可选的：没有三维形体的外联节点（鹭江站 / 广州塔 / 沙河·十三行 …）
       没有现场照片可用，这里就不放 <figure>，只给"类别 + 未做三维重建"的说明。 */
    var figure = d.photo
      ? '<figure><img src="' + esc(d.photo) + '" alt="' + esc(d.cap || d.title) + '" loading="lazy">' +
        '<figcaption>' + esc(d.cap || '') + '</figcaption></figure>'
      : '';
    var quote = d.quote
      ? '<blockquote>' + esc(d.quote) + '<cite>' + esc(d.quoteSrc || '') + '</cite></blockquote>'
      : '';
    var links = (d.links || []).map(function (l) {
      return '<a href="' + esc(l[1]) + '">' + esc(l[0]) + '</a>';
    }).join('');

    pop.innerHTML =
      '<button class="pp-close" type="button" aria-label="关闭">×</button>' +
      '<p class="pp-eyebrow">' + esc(d.sub) + '</p>' +
      '<h3>' + esc(d.title) + '</h3>' +
      figure +
      '<p class="pp-line">' + esc(d.line) + '</p>' +
      quote +
      (links ? '<p class="pp-links">' + links + '</p>' : '');

    pop.hidden = false;
    pop.classList.add('open');

    // 定位：优先放在标签上方；空间不够就放到下方；左右夹在容器内
    var lr = labelRect(id);
    var pw = pop.offsetWidth, ph = pop.offsetHeight;
    var x, y;
    if (lr) {
      x = lr.left - hostRect.left + lr.width / 2 - pw / 2;
      y = lr.top - hostRect.top - ph - 12;
      if (y < 8) y = lr.bottom - hostRect.top + 12;
    } else {
      x = hostRect.width / 2 - pw / 2;
      y = 16;
    }
    x = Math.max(8, Math.min(hostRect.width - pw - 8, x));
    y = Math.max(8, Math.min(hostRect.height - ph - 8, y));
    pop.style.left = Math.round(x) + 'px';
    pop.style.top = Math.round(y) + 'px';

    pop.querySelector('.pp-close').addEventListener('click', closePop);
    current = id;
  }

  /* ---------- 地标图例（场景下方） ----------
     场内只放小圆标（01–11），名称与副标题都收在这张图例里：
       · 编号顺序由场景给出（api.getPlaces()，与场内圆标同一份 BADGE_ORDER），
         页面侧**不再自己排一套**，否则圆标 05 和图例第 5 条会对不上；
       · 悬停场内圆标 → 图例对应条目高亮；点图例条目 → 推三维镜头 + 圆标高亮；
       · 末尾另列"没有三维形体"的节点（点开是说明卡片）与默认隐藏的卫生站。 */
  function legendItem(p) {
    return '<li><button class="pl-item" type="button" data-id="' + esc(p.id) + '" data-num="' + esc(p.num) + '">'
      + '<span class="pl-num' + (p.primary ? ' is-primary' : '') + '">' + esc(p.num) + '</span>'
      + '<span class="pl-text"><b>' + esc(p.name) + '</b><i>' + esc(p.sub) + '</i></span>'
      + '</button></li>';
  }

  function renderPlaceLegend() {
    var listBox = document.getElementById('placeLegendList');
    if (!listBox || !api || !api.getPlaces) return false;
    var places = api.getPlaces();
    listBox.innerHTML = places.map(legendItem).join('');

    /* 末尾一组：没有编号的节点 */
    var otherBox = document.getElementById('placeLegendOther');
    var otherTitle = document.getElementById('placeLegendOtherTitle');
    var others = [], extN = 0;
    POIS.forEach(function (p) {
      var lm = matchLandmark(p.name);
      if (lm && IN_SCENE.indexOf(lm.id) >= 0) return;   // 有三维形体的都在上面编号了
      extN++;
      var tag = LAYER_NAMES[p.layer] || '';
      others.push('<button class="pl-other" type="button" data-poi="' + esc(p.id) + '" data-name="' + esc(p.name) + '">'
        + esc(p.name) + '<em>' + esc(tag) + ' · 未做三维重建</em></button>');
    });
    // 卫生站是三维形体（buildClinic），但没有编号、默认隐藏，单独列一条
    others.push('<button class="pl-other is-hidden3d" type="button" data-id="yizhen">凤阳街社区卫生服务站'
      + '<em>三维 · 默认隐藏</em></button>');
    if (otherBox) otherBox.innerHTML = others.join('');
    if (otherTitle) {
      otherTitle.textContent = '其他节点（未编号）：其中 ' + extN + ' 处未做三维重建，1 处服务节点默认隐藏';
    }

    // 点图例条目 → 镜头推近 + 圆标高亮
    listBox.addEventListener('click', function (e) {
      var b = e.target.closest('[data-id]');
      if (b && b.dataset.id) activatePlace(b.dataset.id);
    });
    if (otherBox) otherBox.addEventListener('click', function (e) {
      var b = e.target.closest('[data-poi],[data-id]');
      if (!b) return;
      if (b.dataset.poi) { placePop(b.dataset.poi); markLegend(b); return; }   // 无三维：说明卡片
      if (b.dataset.id) {           // 卫生站：先切到"含服务节点"再聚焦
        var allBtn = document.querySelector('#mapFilters [data-mode="all"]');
        if (allBtn && api && api.setLabelMode) {
          allBtn.click();
        }
        activatePlace(b.dataset.id);
      }
    });
    return true;
  }

  /** 图例条目的高亮状态：同时驱动场内圆标的 is-selected */
  function markLegend(el) {
    var box = document.getElementById('placeLegend');
    if (!box) return;
    var all = box.querySelectorAll('.pl-item, .pl-other');
    for (var i = 0; i < all.length; i++) all[i].classList.toggle('is-active', all[i] === el);
  }

  /** 点图例 → 推镜头 + 高亮圆标（场景侧 is-selected 由 highlight() 驱动） */
  function activatePlace(id) {
    if (!id) return;
    var el = document.querySelector('#placeLegend [data-id="' + id + '"]');
    if (FOCUSABLE.indexOf(id) >= 0 && api && api.focusLandmark) {
      try {
        api.focusLandmark(id);
        if (api.highlight) api.highlight(id);
      } catch (err) { console.warn('图例聚焦失败：', err); }
    }
    markLegend(el);
  }

  /* 反向：鼠标移到场内圆标上 → 图例对应条目亮起来、圆标自己放大一点（移出恢复）。
     放大走的是内层 .k3d-badge（外层 transform 被每帧的定位占用），
     所以这里给圆标加 is-hover 类，由 CSS 负责缩放。 */
  function bindBadgeHover() {
    var badges = document.querySelectorAll('.k3d-label[data-id]');
    for (var i = 0; i < badges.length; i++) {
      (function (el) {
        var id = el.getAttribute('data-id');
        function on() {
          var it = document.querySelector('#placeLegend [data-id="' + id + '"]');
          if (it && !it.classList.contains('is-active')) it.classList.add('is-hover');
          el.classList.add('is-hover');
        }
        function off() {
          var it = document.querySelector('#placeLegend [data-id="' + id + '"]');
          if (it) it.classList.remove('is-hover');
          el.classList.remove('is-hover');
        }
        el.addEventListener('mouseenter', on);
        el.addEventListener('mouseleave', off);
        el.addEventListener('focus', on);
        el.addEventListener('blur', off);
        /* 点击圆标时也把图例条目点亮（onSelect 已经会调 markLegend，
           这里再兜一层：即使外部没接 onSelect，图例也不会没反应） */
        el.addEventListener('click', function () { markLegend(document.querySelector('#placeLegend [data-id="' + id + '"]')); });
      })(badges[i]);
    }
    return badges.length;
  }

  function closePop() {
    if (!pop) return;
    pop.classList.remove('open');
    pop.hidden = true;
    current = null;
  }

  /* ---------- 侧栏：节点索引（点一下等于在地图上聚焦该地标） ---------- */
  function renderIndex() {
    var box = document.getElementById('poiList');
    if (!box || typeof POIS === 'undefined') return;
    box.innerHTML = POIS.map(function (p) {
      var lm = matchLandmark(p.name);
      var has3d = !!(lm && IN_SCENE.indexOf(lm.id) >= 0);
      /* 没有三维形体的节点：淡底 + 右上箭头 + 悬停说明，点它则弹一张说明卡片 */
      return '<button class="chip' + (lm ? ' on' : '') + (has3d ? '' : ' is-external') + '" type="button"'
        + ' data-name="' + esc(p.name) + '" data-poi="' + esc(p.id) + '"'
        + (has3d ? '' : ' title="' + esc(p.name) + '：属于片区之外或未单独重建的节点，没有三维形体，点开看说明"')
        + '>'
        + '<span class="swatch" style="background:' + layerColor(p.layer) + '"></span>' + esc(p.name) + '</button>';
    }).join('');
    box.addEventListener('click', function (e) {
      var b = e.target.closest('[data-name]');
      if (!b || !api) return;
      var lm = matchLandmark(b.dataset.name);
      if (lm && IN_SCENE.indexOf(lm.id) >= 0) {
        /* 有三维形体：把镜头推过去（场景里没有网格的地标聚焦会抛错，所以先过白名单） */
        try {
          api.focusLandmark(lm.id);
          if (api.highlight) api.highlight(lm.id);
        } catch (err) { console.warn('聚焦失败：', err); }
        placePop(lm.id);
        return;
      }
      /* 没有三维形体：不再"什么都不发生"，弹一张说明它类别与"未做三维重建"的卡片 */
      var poiId = b.getAttribute('data-poi');
      if (poiId && INFO[poiId]) placePop(poiId);
      else if (lm) placePop(lm.id);
    });
  }

  function layerColor(layer) { return LAYERS[layer] || '#79705f'; }

  /* ---------- 节点索引（data.js 的 POI）→ 三维地标的对应 ----------
     两边的名字并不是逐字相同：data.js 里写「鹭江东约新街88号大院」「康鹭新招工广场」
     「鹭江南约大街（招工街）」，而三维场景的地标名是「鹭江东约新街 88 号大院」
     「招工广场」「鹭江南约大街」。早先这里按字符串**全等**匹配，于是这些节点
     点了没有任何反应（既不聚焦、也不弹卡片）。现在改成"去掉空白再比 + 一份别名表"，
     节点索引里凡是有对应地标的条目都能真正点开。 */
  var NAME_ALIAS = {
    '康鹭新招工广场': 'hiring-plaza',
    '鹭江南约大街（招工街）': 'hiring-street',
    '鹭江南约大街(招工街)': 'hiring-street'
  };
  function normName(s) { return String(s == null ? '' : s).replace(/[\s\u3000]/g, ''); }
  function landmarkById(id) {
    for (var i = 0; i < LANDMARKS.length; i++) { if (LANDMARKS[i].id === id) return LANDMARKS[i]; }
    return null;
  }
  function matchLandmark(name) {
    var key = normName(name);
    for (var i = 0; i < LANDMARKS.length; i++) {
      if (normName(LANDMARKS[i].name) === key) return LANDMARKS[i];
    }
    for (var alias in NAME_ALIAS) {
      if (normName(alias) === key) return landmarkById(NAME_ALIAS[alias]);
    }
    return null;
  }

  /* ---------- 空间关系速览（沿用上一版的数据结构） ---------- */
  function renderRelations() {
    var box = document.getElementById('relList');
    if (!box) return;
    box.innerHTML = RELATIONS.map(function (r) {
      return '<div><span style="display:flex;align-items:center;gap:8px;font-size:13.5px">'
        + '<i style="width:16px;height:3px;background:' + r.c + ';display:inline-block"></i>' + esc(r.t) + '</span>'
        + '<p style="margin:4px 0 0 24px;font-size:12.5px;color:var(--ink-3);line-height:1.7">' + esc(r.d) + '</p></div>';
    }).join('');
  }

  /* ---------- 平面关系图（左栏） ----------
     老站点（kanglu-dh / 三维地图试验）的二维意象图。老 map.js 是传统 script、
     在 DOMContentLoaded 里自己 buildMap() 并往 #panelBody 写档案面板，与现在的
     打包体系（scene-bundle + map3d）冲突，所以这里只把它"画 SVG"的那部分
     重写成一个函数：图层配色、底图构件、构图尺度全部沿用老图（1000×680 的
     viewBox，宽度自适应），节点与关系线仍取自 data.js 的 POIS / LINKS。
     与老图的差别只有两处：① 不再画筛选条（页面上的筛选条归三维标签模式用）；
     ② 给"已建三维形体"的节点加一圈细环，点它可以把三维镜头推过去。 */
  var MAP2D = {
    baseRoads: [
      { d: 'M0 206 L1000 196', w: 6, label: '新港西路', lx: 30, ly: 200 },
      { d: 'M432 40 L436 460', w: 5, label: '瑞康路', lx: 444, ly: 70 },
      { d: 'M524 430 L516 680', w: 5, label: '逸景路', lx: 536, ly: 660 },
      { d: 'M120 520 L860 470', w: 4, label: '', lx: 0, ly: 0 }
    ],
    villageLanes: [
      'M210 250 L430 236', 'M206 300 L436 288', 'M204 350 L440 338', 'M214 400 L446 386',
      'M250 214 L244 424', 'M300 210 L296 428', 'M352 208 L350 430', 'M404 210 L400 432',
      'M470 262 L706 250', 'M466 312 L710 300', 'M462 362 L714 350', 'M470 412 L706 400',
      'M508 232 L502 436', 'M560 230 L556 440', 'M614 228 L610 442', 'M668 232 L664 444'
    ],
    river: 'M150 452 C 300 470, 420 430, 520 452 S 700 478, 880 442',
    regions: [
      { id: 'rg-kangle', name: '康乐村', x: 330, y: 318, rx: 118, ry: 112, layer: 'industry' },
      { id: 'rg-lujiang', name: '鹭江村', x: 588, y: 340, rx: 118, ry: 100, layer: 'industry' },
      { id: 'rg-zhongda', name: '中大布匹市场', x: 648, y: 132, rx: 120, ry: 60, layer: 'industry' }
    ]
  };

  function buildRelationMap(svg) {
    if (!svg || typeof POIS === 'undefined') return false;
    var P = function (id) {
      for (var i = 0; i < POIS.length; i++) { if (POIS[i].id === id) return POIS[i]; }
      return null;
    };
    var col = function (l) { return LAYERS[l] || '#79705f'; };
    var has3d = function (name) {
      var lm = matchLandmark(name);
      return !!(lm && IN_SCENE.indexOf(lm.id) >= 0);
    };
    var s = '';

    s += '<defs><pattern id="mp2d-hatch" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">'
      + '<line x1="0" y1="0" x2="0" y2="8" stroke="rgba(48,45,40,.10)" stroke-width="1"/></pattern></defs>';
    s += '<rect x="0" y="0" width="1000" height="680" fill="#F1EBDD"/>';
    s += '<rect x="20" y="20" width="960" height="640" rx="6" fill="none" stroke="rgba(48,45,40,.10)" stroke-dasharray="4 6"/>';
    // 中大纺织商圈范围（片区外，只在平面图上交代）
    s += '<path d="M470 40 L900 40 L900 196 L470 196 Z" fill="rgba(184,74,58,.045)" stroke="rgba(184,74,58,.20)" stroke-dasharray="6 5"/>';
    s += '<text x="478" y="60" font-size="12" fill="rgba(48,45,40,.45)" font-family="sans-serif">中大纺织商圈 · 布匹市场一带</text>';

    MAP2D.regions.forEach(function (r) {
      s += '<ellipse class="mp-region" data-region="' + r.id + '" cx="' + r.x + '" cy="' + r.y + '" rx="' + r.rx + '" ry="' + r.ry + '"'
        + ' fill="' + col(r.layer) + '" fill-opacity=".07" stroke="' + col(r.layer) + '" stroke-opacity=".30" stroke-dasharray="7 5"/>';
    });

    s += '<g opacity=".55">' + MAP2D.villageLanes.map(function (d) {
      return '<path d="' + d + '" stroke="rgba(48,45,40,.16)" stroke-width="2.2" fill="none" stroke-linecap="round"/>';
    }).join('') + '</g>';

    s += MAP2D.baseRoads.map(function (r) {
      return '<path d="' + r.d + '" stroke="#fffdf8" stroke-width="' + (r.w + 5) + '" fill="none" stroke-linecap="round"/>'
        + '<path d="' + r.d + '" stroke="rgba(48,45,40,.22)" stroke-width="' + r.w + '" fill="none" stroke-linecap="round"/>';
    }).join('');
    s += MAP2D.baseRoads.filter(function (r) { return r.label; }).map(function (r) {
      return '<text x="' + r.lx + '" y="' + r.ly + '" font-size="11" fill="rgba(48,45,40,.42)" font-family="sans-serif">' + r.label + '</text>';
    }).join('');

    s += '<path d="' + MAP2D.river + '" stroke="rgba(47,107,125,.28)" stroke-width="7" fill="none" stroke-linecap="round"/>';
    s += '<path d="' + MAP2D.river + '" stroke="rgba(47,107,125,.55)" stroke-width="1" fill="none" stroke-dasharray="3 4"/>';
    s += '<text x="770" y="436" font-size="11" fill="rgba(47,107,125,.75)" font-family="sans-serif">河涌</text>';

    // 关系连线（来自 data.js 的 LINKS）
    if (typeof LINKS !== 'undefined') {
      s += '<g id="mp2d-links">' + LINKS.map(function (l) {
        var a = P(l.from), b = P(l.to);
        if (!a || !b) return '';
        var mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2 - 34;
        return '<path class="mp-link' + (l.dashed ? ' dashed' : '') + '" data-link="' + l.from + '-' + l.to + '"'
          + ' d="M' + a.x + ' ' + a.y + ' Q ' + mx + ' ' + my + ' ' + b.x + ' ' + b.y + '"/>'
          + '<text x="' + mx + '" y="' + (my - 5) + '" font-size="10" text-anchor="middle" fill="rgba(48,45,40,.42)" font-family="sans-serif">'
          + l.label + '</text>';
      }).join('') + '</g>';
    }

    // 节点
    s += '<g id="mp2d-pois">' + POIS.map(function (p) {
      var c = col(p.layer);
      var big = p.r >= 40;
      var right = p.x < 740 && !big;
      var is3d = has3d(p.name);
      var g = '<g class="mp-poi" data-id="' + p.id + '" data-layer="' + p.layer + '" data-has3d="' + (is3d ? '1' : '0') + '"'
        + ' tabindex="0" role="button" aria-label="' + esc(p.name) + (is3d ? '（已建三维形体）' : '（未做三维重建）') + '">';
      g += '<title>' + esc(p.name) + (is3d ? ' · 已建三维形体，点击可推镜头' : ' · 未做三维重建') + '</title>';
      if (big) {
        g += '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + p.r + '" fill="' + c + '" fill-opacity=".075" stroke="' + c + '" stroke-opacity=".22" stroke-dasharray="4 5"/>';
      }
      // 已建三维的地点：外面再套一圈细环（老图没有，用来和三维对照）
      if (is3d) {
        g += '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + (big ? 22 : 20) + '" fill="none" stroke="' + c + '" stroke-opacity=".55" stroke-width="1.2"/>';
      }
      g += '<circle cx="' + p.x + '" cy="' + p.y + '" r="' + (big ? 16 : 15) + '" fill="' + c + '" fill-opacity=".13"/>';
      g += '<circle class="dot" cx="' + p.x + '" cy="' + p.y + '" r="' + (big ? 8 : 6.5) + '" fill="' + c + '" stroke="#F1EBDD" stroke-width="2"/>';
      if (big) {
        g += '<text x="' + p.x + '" y="' + (p.y + p.r - 12) + '" text-anchor="middle" font-size="13.5" font-weight="600" fill="#302D28">' + esc(p.name) + '</text>';
        g += '<text class="sm" x="' + p.x + '" y="' + (p.y + p.r + 2) + '" text-anchor="middle">' + (LAYER_NAMES[p.layer] || '') + '</text>';
      } else {
        var tx = right ? p.x + 20 : p.x - 20;
        g += '<text x="' + tx + '" y="' + (p.y + 1) + '" text-anchor="' + (right ? 'start' : 'end') + '" font-size="12.5">' + esc(p.name) + '</text>';
        g += '<text class="sm" x="' + tx + '" y="' + (p.y + 15) + '" text-anchor="' + (right ? 'start' : 'end') + '">' + (LAYER_NAMES[p.layer] || '') + '</text>';
      }
      return g + '</g>';
    }).join('') + '</g>';

    // 指北针 + 比例尺
    s += '<g transform="translate(928,600)">'
      + '<circle r="19" fill="rgba(241,235,221,.9)" stroke="rgba(48,45,40,.2)"/>'
      + '<path d="M0 -13 L4.5 4 L0 0.5 L-4.5 4 Z" fill="#B84A3A"/>'
      + '<text y="-20" text-anchor="middle" font-size="10" fill="rgba(48,45,40,.5)" font-family="sans-serif">N</text></g>'
      + '<g transform="translate(56,640)">'
      + '<line x1="0" y1="0" x2="120" y2="0" stroke="rgba(48,45,40,.45)" stroke-width="1.5"/>'
      + '<line x1="0" y1="-5" x2="0" y2="5" stroke="rgba(48,45,40,.45)" stroke-width="1.5"/>'
      + '<line x1="120" y1="-5" x2="120" y2="5" stroke="rgba(48,45,40,.45)" stroke-width="1.5"/>'
      + '<text x="60" y="-8" text-anchor="middle" font-size="10.5" fill="rgba(48,45,40,.5)" font-family="sans-serif">示意距离 · 非等比例</text></g>';

    svg.innerHTML = s;
    return true;
  }

  /* 平面图上的节点：可点可键盘操作 —— 有三维形体的推三维镜头，其余弹说明卡片 */
  function initRelationMap() {
    var svg = document.getElementById('kangluMap2d');
    if (!svg || !buildRelationMap(svg)) return;
    function activate(g) {
      if (!g) return;
      var id = g.getAttribute('data-id');
      var p = null;
      for (var i = 0; i < POIS.length; i++) { if (POIS[i].id === id) p = POIS[i]; }
      if (!p) return;
      var lm = matchLandmark(p.name);
      if (lm && IN_SCENE.indexOf(lm.id) >= 0 && api && api.focusLandmark) {
        try {
          api.focusLandmark(lm.id);
          if (api.highlight) api.highlight(lm.id);
        } catch (err) { console.warn('平面图聚焦失败：', err); }
        placePop(lm.id);
      } else if (INFO[p.id]) {
        placePop(p.id);      // 没有三维形体：弹"未做三维重建"的说明卡
      } else if (lm) {
        placePop(lm.id);
      }
      var all = svg.querySelectorAll('.mp-poi');
      for (var k = 0; k < all.length; k++) all[k].classList.toggle('active', all[k] === g);
    }
    svg.addEventListener('click', function (e) {
      activate(e.target.closest ? e.target.closest('.mp-poi') : null);
    });
    svg.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      var g = e.target.closest ? e.target.closest('.mp-poi') : null;
      if (g) { e.preventDefault(); activate(g); }
    });
  }

  /* ---------- 启动 ---------- */
  function boot() {
    if (!host || !window.KangluScene) {
      if (host) host.innerHTML = '<p style="padding:20px;color:var(--ink-3);font-size:14px">三维街区未能加载。你仍可查看右侧的节点索引与空间关系速览。</p>';
      renderIndex(); renderRelations();
      return;
    }
    try {
      var ret = window.KangluScene.initScene(host, {
        labels: LANDMARKS,
        /* 点场内的圆标：弹地点卡片（原行为），并把图例里对应条目点亮 */
        onSelect: function (id) {
          placePop(id);
          markLegend(document.querySelector('#placeLegend [data-id="' + id + '"]'));
        },
        onReady: function () { host.classList.add('ready'); }
      });
      /* initScene 返回的是 { api } 这层包装（scene3d.js 的导出形状），
         真正的方法在 ret.api 上。早先这里直接把返回值当成 api 用，
         于是 focusLandmark / setLabelMode / resetView 全部静默失效
         （节点索引点不动、标签显隐按钮点不动、复位按钮点不动）。
         两种形状都兼容，避免以后再改导出时又踩一次。 */
      api = (ret && ret.api && typeof ret.api.focusLandmark === 'function') ? ret.api : ret;
    } catch (e) {
      console.warn('三维场景初始化失败：', e);
      host.innerHTML = '<p style="padding:20px;color:var(--ink-3);font-size:14px">三维街区初始化失败：' + String((e && e.message) || e) + '</p>';
    }

    renderIndex();
    renderRelations();
    initRelationMap();      // 左栏的平面关系图（老站点那张二维意象图）
    renderPlaceLegend();    // 场景下方的地标图例（编号与场内圆标一一对应）
    bindBadgeHover();       // 悬停场内圆标 → 图例对应条目高亮

    /* 标签显隐：默认显示全部 11 处地点（核心三地标加粗），切到全部节点再加上服务节点 */
    var bar = document.getElementById('mapFilters');
    if (bar) {
      bar.innerHTML =
        '<button class="chip on" type="button" data-mode="minimal">全部地点</button>' +
        '<button class="chip" type="button" data-mode="all">含服务节点</button>' +
        '<button class="chip" type="button" id="btnReset3d">复位视角</button>';
      bar.addEventListener('click', function (e) {
        var b = e.target.closest('[data-mode]');
        if (b) {
          bar.querySelectorAll('[data-mode]').forEach(function (x) { x.classList.toggle('on', x === b); });
          if (api && api.setLabelMode) api.setLabelMode(b.dataset.mode);
          return;
        }
        if (e.target.closest('#btnReset3d') && api && api.resetView) api.resetView();
      });
    }

    /* 点击场景空白处关闭卡片 */
    host.addEventListener('pointerdown', function (e) {
      if (!e.target.closest('.k3d-label')) closePop();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePop(); });

    /* 深链接（#place-<id>）：等首帧与尺寸校正之后再把镜头推过去，之后复查几次。
       map3d 在 load 与 +1.5s 各补发一次 resize（nudgeResize），而场景 resize
       在宽高比变化时会走 setDistance + applySpherical —— 那会把**正在进行**的
       聚焦缓动打断并弹回原处（实测）。所以间隔 1s（> 缓动 750ms）复查：
       只有"确实没推到位"才重推，已到位直接返回（幂等）。 */
    setTimeout(function () { applyHash(true); }, 1200);
    [2400, 3400, 4400].forEach(function (ms) {
      setTimeout(function () { applyHash(false); }, ms);
    });

    /* 容器尺寸变化时若卡片开着，重新贴一次位置 */
    window.addEventListener('resize', function () { if (current) placePop(current); });
  }

  /* ---------- 尺寸校正 ----------
     三维场景在初始化的瞬间读容器尺寸，而那一刻样式表/字体可能还没生效，
     容器高度会被算成远小于 CSS 里的 clamp 值（实测 620px 被算成约 255px），
     表现为"楼群只出现在容器下缘一小条、上方大片空白"。
     所以页面加载完成后再触发一次 resize，让渲染器按真实尺寸重算。 */
  function nudgeResize() {
    setTimeout(function () {
      window.dispatchEvent(new Event('resize'));
      setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 600);
    }, 200);
  }
  window.addEventListener('load', nudgeResize);
  setTimeout(nudgeResize, 1500);

  /* ---------- 深链接：#place-<id> 直接把镜头推到该地点 ----------
     便于把"某处地点"的直达链接分享出去（也方便截图核对单体形态）。
     未知 id 一律忽略：场景里没有对应网格的地标聚焦会抛错。

     为什么要试两次：map3d 在 load 与 +1.5s 各补发一次 resize（nudgeResize，
     为了修正容器高度被算错的问题），而场景 resize 在宽高比变化时会走
     setDistance + applySpherical —— 那会把**正在进行**的聚焦缓动打断并弹回原处。
     所以第一次只负责"启动"，稍后再检查一次：若相机其实没推过去，就重新推。 */
  var hashFocused = null;
  function applyHash(force) {
    var m = /^#place-([a-z0-9-]+)$/.exec(window.location.hash || '');
    if (!m || !api || !api.focusLandmark) return;
    if (IN_SCENE.indexOf(m[1]) < 0) return;
    var sc = window.__KANGLU_SCENE__;
    var g = sc && sc.landmarks ? sc.landmarks[m[1]] : null;
    if (!g) return;
    var st = api.getCameraState ? api.getCameraState() : null;
    if (st && st.tweening) return;          // 缓动进行中：别打断，等下一次复查
    if (!force && hashFocused === m[1] && st) {
      // 已经推到位（目标点与该地标基本重合）就不再重复推
      if (Math.abs(st.target[0] - g.position.x) < 6 && Math.abs(st.target[2] - g.position.z) < 6) return;
    }
    hashFocused = m[1];
    try {
      api.focusLandmark(m[1]);
      if (api.highlight) api.highlight(m[1]);
    } catch (err) { console.warn('深链接聚焦失败：', err); }
  }
  window.addEventListener('hashchange', function () { hashFocused = null; applyHash(true); });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
