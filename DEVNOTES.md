# 开发记录（内部文档）

> **用途**：记录本项目改造过程中遇到的问题、根因、定位方法与解决办法，便于后续排查和继续优化。
> **性质**：面向开发与维护，**不是站点内容**，不对访客呈现。站点对外的说明见 `kanglu-dh/statement.html`。

---

## 0. 环境与约束

| 项 | 情况 |
|---|---|
| 系统 / Shell | Windows，**Windows PowerShell 5.1**（不是 pwsh 7，部分语法与编码行为不同） |
| Git | 2.55.0.windows.3，凭据由 Git Credential Manager 管理 |
| 仓库 | 公开仓库 `Sunset-Sunrise-Sun/---`，默认分支 `main` |
| 站点形态 | 纯静态、零依赖（无框架、无 CDN、无网络字体），可直接 `file://` 打开 |
| 文件沙箱 | 开发过程中策略有变更（`workspace-write` → `danger-full-access`）；沙箱会**禁止进程创建命名管道** |
| 无头浏览器 | Microsoft Edge（`msedge.exe --headless=new`），用于渲染验证 |

---

## 1. 环境与工具链问题

### 1.1 Git 连不上 GitHub：`schannel: AcquireCredentialsHandle failed: SEC_E_NO_CREDENTIALS`

- **现象**：`git ls-remote` 连公开仓库都失败；连本机代理（127.0.0.1:7890）也一样。报文里是 schannel 的凭证获取失败。
- **定位**：用 Node 的 `fetch` 请求 `https://github.com` 得到 HTTP 200 → **网络本身通畅**，问题在 Git 的 TLS 后端。
- **解决**：改用 OpenSSL 后端，仓库级配置 `git config http.sslBackend openssl`。
- **备注**：这是沙箱进程令牌下的现象，你自己的终端里不会有这个问题。

### 1.2 沙箱禁止命名管道

- **现象 A**：`git push` 报 `sh.exe: fatal error - couldn't create signal pipe, Win32 error 5`，随后 `could not read Username`。
  - **根因**：Git 调用凭据助手要走 `sh.exe`，需要创建信号管道，被沙箱拒绝 → 拿不到凭据。
  - **解决**：放宽沙箱后推送成功。**注意：凡在本沙箱内 `git push` 都会遇到，属于已知边界。**
- **现象 B**：`msedge.exe --headless` 报 `mojo platform_channel.cc ... 拒绝访问 (0x5)`。
  - **根因**：同为命名管道限制。
  - **解决**：放宽沙箱后正常出图（策略改为 `danger-full-access` 后不再需要逐次申请）。

### 1.2d 两个反复踩到的坑：未声明变量 + 截图验证的假阳性

- **坑一：删代码块时误删变量声明 → 运行期 ReferenceError**
  现象：小白鹭「头朝鼠标」怎么改都不动。
  根因：替换代码块时把 `var flipped = ...` 这一行一起删掉了，而后面仍在用 `flipped`。
  每次 `mousemove` 都抛 `ReferenceError`，`transform` 永远写不进去。
  `node --check` **只查语法、不查未声明变量**，所以一路"语法 OK"。
  → 教训：改动时若 `old_string` 里含声明行，务必确认 `new_string` 里还在。
  → 排查手法：把 `head.style.transform` 的真实值渲染到页面上再截图读数——
    第 1 帧是 `(空)` 且始终不更新，就说明是"根本没写进去"，而不是"写了没画出来"。
- **坑二：截图差异可能来自动画相位，而非被测的改动**
  现象：对比「鼠标在右/左」两张截图，鸟的位置明显不同，看着像生效了。
  根因：`.ai-bird` 上有 `aiBirdBob` 浮动动画，两次截图取到的相位不同，差异全来自它。
  → 正确做法：验证某个变换时，先 `animation:none !important` 关掉无关动画，
    并且**读渲染后的实际值**（`head.style.transform` / `getComputedStyle`），
    而不是只看"两张图不一样"。

### 1.2c CSS 动画的 transform 会盖掉普通声明的 transform

- **现象**：给 `.ai-bird` 加了 `animation: aiBirdBob`（写 `transform:translateY`）之后，
  另外写的 `.ai-bird-wrap.flip .ai-bird{ transform:scaleX(-1) }` **完全不生效**，转身效果从来没出现过。
- **根因**：CSS 动画在层叠里的优先级高于普通声明，动画运行期间它会持续覆盖 `transform`，
  所以在同一元素上「动画写 transform + 普通声明也写 transform」必然只有一个生效。
- **解决**：把两件事拆到不同元素——浮动动画留在 `.ai-bird`（svg），
  转身改到外层容器 `.ai-bird-wrap`（div）上。
- **教训**：想让同一元素既动画又做另一套变换，用嵌套元素，不要指望优先级。

### 1.2b github.com 直连会间歇性不通，推送要走本机代理

- **现象**：`git push` 报 `Failed to connect to github.com:443 after 21063 ms: Could not connect to server`，
  但同一次会话里 `api.github.com` 与 `web_fetch` 都正常。
- **定位**：`curl.exe -x http://127.0.0.1:7890 https://github.com` 返回 200，而直连失败 →
  属对 github.com:443 的选择性阻断（时通时不通）。
- **解决**：推送时挂本机代理：
  ```powershell
  git -c http.proxy=http://127.0.0.1:7890 push origin main
  ```
  之所以用一次性 `-c` 而不写进仓库配置：代理没开时配置会导致推送直接失败。
  建议的推送脚本写法是「先直连，失败再走代理」。

### 1.3 PowerShell 5.1 按 ANSI 读取无 BOM 的 `.ps1`

- **现象**：脚本里的中文变成乱码（`缂╃暐KB`），并报 `Unexpected token ')'`、`Missing '=' operator` 等一堆解析错误。
- **根因**：PS 5.1 对**无 BOM 的 UTF-8 `.ps1`** 按系统 ANSI（GBK）解码。
- **解决**：写入前补 BOM：
  ```powershell
  $t = [System.IO.File]::ReadAllText($p, (New-Object System.Text.UTF8Encoding($false)))
  [System.IO.File]::WriteAllText($p, $t, (New-Object System.Text.UTF8Encoding($true)))
  ```
- **备选**：把脚本写成纯 ASCII，或改用 `node` 执行。

### 1.4 仓库里 CRLF 与 LF 混存

- **现象**：只改了 62 行的 `data.js`，`git show --numstat` 却报 **319 增 / 263 删**（整个文件），无法逐行审阅。
- **根因**：初始提交时 `core.autocrlf=true`（LF 入库），之后为保持前端文件原样改成 `false`；被编辑过的文件于是整份以 CRLF 入库。另有 `background.html` 处于 `i/lf + w/crlf` 错配，只因 git 的 stat 缓存才没被报成 modified。
- **定位**：`git ls-files --eol` 一次看清索引 / 工作区 / 属性的行尾状态。
- **解决**：新增 `.gitattributes`（`* text=auto eol=lf`，二进制资源显式 `binary`），并 `git add --renormalize .`。提交 `8704f1f`。

---

## 2. 前端 Bug

### 2.1 占比条 / 分布条恒为空（**原站点就存在**）

- **现象**：无论数据多少，进度条只有浅色底轨，没有填充色。用户第一反应是"颜色太淡"。
- **根因（两层）**：
  1. `.bar-track` 与 `.bar-fill` 都是 `<span>`，**行内元素的 `width` / `height` 不生效**。`.bar-track` 是 grid 子项会被自动块化所以底轨可见，而 `.bar-fill` 不是 grid 子项，始终是行内元素 → 无论 JS 把 `width` 写成多少都画不出来。
  2. `initBars()` 把**零宽度的 `.bar-fill` 自身**交给带 `threshold:.4` 的 `IntersectionObserver` 观察。零面积目标在部分浏览器里不会触发交叉回调，属于第二重隐患。
- **定位方法（关键）**：`--dump-dom` 后发现 `style` 里 `width: 80%` **已经写进去了**，但画面上仍是空的 → 说明问题不在 JS，而在盒模型。
- **解决**：两个元素显式 `display:block`；`initBars()` 改为观察有真实面积的 `.bar-track`，阈值降为 `0`。提交 `007ca5e`。
- **影响面**：同一段 CSS 被 `index.html` 的「人口与产业构成」与 `people.html` 的分布条共用，两处都是坏的。

### 2.2 封面图完全不显示

- **现象**：封面版式、文字、顶栏都对，图片区域一片空底。
- **根因**：入场动画把 `opacity` 从 0 拉到 1，一旦动画未执行（版本差异、动效被禁用、无头渲染冻结），封面图**永久不可见**。
- **定位**：在复刻页 `--dump-dom` 读出 `IMG op=0 disp=block anim=coverIn fill=both`。
- **解决**：封面图**只做 `transform` 缩放推进，不参与透明度开场**——动画即使完全不执行，图片依然可见。提交 `60e03ee`。

### 2.3 IntersectionObserver 重复创建

- **现象**：筛选或重新渲染卡片后再次调用初始化函数，会反复新建 observer；已触发过的元素可能不再被观察。
- **解决**：改为**单例 observer + 幂等标记**（`data-obs` / `data-cnt`），重复调用安全。提交 `60e03ee`。

### 2.4 锚点跳转被顶栏遮挡

- **根因**：顶栏是 66px 高的 `position:sticky`，锚点会把标题顶到顶栏底下。
- **解决**：`section[id]{ scroll-margin-top:84px; }`。提交 `21fb17c`。

### 2.5 移动端下拉菜单对比度

- **根因**：顶栏在封面上方为透明态（白字），而移动端下拉菜单是浅色实底 → 白字落在浅底上不可读。
- **解决**：`@media (max-width:760px)` 内把透明态下的菜单文字改回深色。提交 `60e03ee`。

### 2.6 `people.html` 被可视化编辑器污染

- **现象**：文件里残留 154 处 `data-page-node-id`，体积近乎翻倍（17.1KB）。
- **解决**：正则清理全部残留属性（→ 7.8KB）。提交 `60e03ee`。

---

## 3. 验证方法（可复用，重要）

> 这套方法在本次改造中反复用到，后续改样式/动效时建议沿用。

1. **无头渲染截图**
   ```powershell
   & "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --disable-gpu `
     --hide-scrollbars --no-first-run --disk-cache-size=1 --force-device-scale-factor=1 `
     --window-size=1440,1000 --virtual-time-budget=10000 `
     --user-data-dir="$preview\p1" --screenshot="$out.png" "file:///…/index.html"
   ```
   - 必须用**每次全新的 `--user-data-dir`**，否则 `file://` 的 CSS 会被缓存，改了样式看到的是旧版。
   - `--virtual-time-budget` 用于让页面"跑一会儿"再截图。

2. **无头环境会冻结 CSS 动画与 rAF**，因此**截到的常是动画中间态**，不能据此判断对错。
   - 验证终态：注入 `transition:none !important; animation:none !important`，或把初始化函数停掉后直接钉值。
   - 计数器会停在 10~25% 的中间值（例如 1.1 显示成 0.3、350 显示成 84），这是假象，不是数据错误。

3. **锚点滚动在无头模式下不生效** → 生成临时副本，隐藏封面等前置板块，让目标板块落在首屏（`_xlsx_tmp/make-shot.js` 即此用途）。

4. **`--dump-dom` 读计算/内联样式**：用于区分「JS 没写进去」与「写进去了但没画出来」，2.1 就是靠这一步定位的。注意 `<script>` 源码也会出现在 dump 里，统计元素个数时会多算一个；取探针结果时要取**最后一个**匹配。
   - **`--dump-dom` 不驱动渲染帧**：依赖 `requestAnimationFrame` 的效果（例如小白鹭「头朝鼠标」的 transform）在 dump 里**永远是空值**，不是代码没生效。这类效果必须用 `--screenshot` 验证（截图会驱动帧）。
   - 探针要**先同步创建元素、再逐步追加内容**，否则中途报错就什么都看不到。

5. **素材批量辨认**：把待看的图拼成带编号的联络表（contact sheet）一次看完，比逐张省事。

6. **隐私打码必须放大复核**：第一版按坐标逐处打码，放大后发现 5 处数字仍可读，改为整块遮盖并重新核对（见 4.4）。

---

## 4. 内容与数据问题（**待办 / 存疑**）

### 4.1 旧改时间线三说并存（需课题组核实）
| 来源 | 首拆 | 首建/开工 | 地块 |
|---|---|---|---|
| 南方都市报 2024-07-24 | 2023-12-31 | **2024-07-24** | F37、F57 |
| 本站旧版 `data.js` / `background.html` | 2023.12.31 | **2025.07.24** | 未写 |
| 课题组文案（修改列表） | — | **2026 年 3 月** | F50、F56 |

三者不可能同时成立。当前页面按课题组文案呈现，**存疑已记入对外声明**，待核实后统一订正（首页与 `background.html` 需同步改）。

### 4.2 改造范围 110.17 → 110.27
已订正，依据：南都同篇报道两次写作 110.27 公顷，且该报道的 346.67 亿元、11.96 万人/km²、13 万常住人口与课题组文案完全吻合，可确认其为文案来源。

### 4.3 人物档案文案问题（M5 待处理）
- 第 2 位身份是「夫妻同行、与丈夫一同前来」，正文却混用「他 / 她」；
- 第 3 位「**五年年前**开始在康鹭当散工」与「务工 4 年」矛盾；
- 4 份编号格式不统一（档案一 / 档案·二 / 档案三 / 档案4）。

### 4.4 其余展板未逐张查电话
仅《纺织零工市场信息栏》含第三方电话并经逐处复核；`展板_24`（含「服务电话」）本批未采用。其余 8 张展板**未在可辨认分辨率下逐张检查**，如后续采用需补一次检查。

### 4.5 未完成
- AI 问答：形态已定（接大模型 API，key 走 gitignore 的 `ai-config.js`，线上需代理），但 provider / key / 是否要 Cloudflare Worker 未定。
- 地图交互：拟用真实控规图对照，**控规图准确出处待补**。
- 封面分层动效：4 张封面元素自带 alpha，可直接做，尚未实施。
- 人物档案轮播 + `person.html` 详情页（M5）。
- 全站背景（原列表 C4「暂无想法，看 ai 会怎么做」）。

---

## 5. 提交时间线

| 提交 | 内容 |
|---|---|
| `f47a33c` | 初始化：站点源码首次提交 |
| `60e03ee` | M0–M1 地基改造 + 全屏实景封面 |
| `21fb17c` | M3 康鹭简介 + 数字特征（3×2 大数字表 + 口径脚注） |
| `007ca5e` | 修复占比条 / 分布条永远为空的问题 |
| `5b37cb5` | M4 发展历程：六阶段纵向时间轴 + 田野回声 |
| `8704f1f` | 统一行尾：新增 `.gitattributes` 并归一化 |
| `d1f3d17` | 批次 A：影像素材处理管线 + 隐私处理 |
| `5f1f447` | 新增「声明与方法」页（对外） |
| `06c3394` | 声明措辞改准确 |
| `9339fbe` | 开发问题记录移出对外页面 → `DEVNOTES.md` |
| `0c60a57` | 批次 B：background.html 图文改造（对称图行版，后被替换） |

---

## 6. 影像处理管线（批次 A 可复跑）

- 脚本：`_xlsx_tmp/pipeline.ps1`（需 UTF-8 BOM 才能被 PS 5.1 正确解析）
- 输出：`kanglu-dh/assets/img/{field,boards,cover}/`
- 规格：现场照长边 1800 / 展板 1600，q82~84；缩略图长边 560，q80
- 体积：原始 22 张 67MB → 处理后 40 个文件 **10.8MB**
- 隐私：`board-jobinfo` 的右半面板整块马赛克（x 1855-3890, y 1080-2610，源图 4032×3024 坐标）
- 人脸：`market-hiring-1` 裁至 `0,0,4032,1450`，去掉近景人群
- 原始 zip（`数字人文图片.zip`，67MB）与 `资料/` 均已 gitignore

---

## 7. 二级页视觉体系（影像带 / 错位图文 / 图件面板）

**问题**：批次 B 只把照片放进 4:3 小框里，页面仍然"素"，而且照片大小不一、色温各异。

**三个组件**（`style.css`，全部在浅色纸感框架内，不引入深色）

| 组件 | 用途 | 要点 |
|---|---|---|
| `.band` / `.band.short` | 小节开场的全幅影像带 | 高 `clamp(320px,44vh,520px)` / `clamp(220px,32vh,380px)`；纸色渐变压层 `42% → 16% → 76% → --paper` |
| `.feature` / `.feature.flip` | 大图 + 侧栏文字 | 图 1.25fr / 文 0.8fr，`.flip` 左右互换；1080px 以下堆叠 |
| `.panel` / `.panel-row` | 图件类（展板、规划图） | 纸色底 + 1px 描边 + 18px 内边距 + `图件 · Document` 角标 |

**文字与图片的关系——三条硬规则**（这是"糊在一起"的解法）

1. 正文永远在纸色底上；只有影像带的标题压在图上，且必须压在**已 100% 过渡到纸色**的那一段；
2. 图注永远在图的下方，不压在图上；
3. 数字与引语不用图承载。

**分工**：照片 = 氛围（铺满、当背景），图件 = 材料（面板里完整呈现）。两类图不再用同一种处理。
**色调统一**：统一滤镜 `saturate(.9) contrast(1.03) brightness(1.02)`，把黄昏偏蓝、白炽灯、白光拍下的照片拉进同一暖纸色系。

**为什么 `#space` 与 `#policy` 没有影像带**：这两节的材料是图件与公告墙，图件本身信息密度高，
做背景会立刻变成"字压字"。所以用 `panel-row`（两张图件）与 `feature`（公告墙 + 侧栏文字）代替，
节奏靠"高带 → 矮带 → 图件面板 → 大图"的变化来维持，而不是每节都套同一个模板。

**踩过的坑**：`has-band` 小节必须 `padding-top:0`，否则带上会多出 86px 空隙；
带宽用 `vh` 而不是固定像素，超宽屏上才不会显得像一条细缝。

---

## 8. 待办清单（按建议顺序）

1. 把同一套组件（影像带 / 错位图文 / 图件面板）套到 `map.html`
2. 首页微调：简介段加一条影像带（首页深色封面保持全站唯一深色）
3. 批次 C：影像墙 + 灯箱
4. 批次 D：地图接真实地理（需要课题组在控规图上圈出 POI 大致位置）
5. M6：我们的初心 / AI 问答 / 地图交互

已完成：~~M5 人物档案轮播 + `person.html` 详情页~~（见第 9 节）

---

## 9. M5：人物档案改造（数据结构换血）

**背景**：原 `people-data.js` 里是 16 条**示例/占位**档案（姓名、厂房、账目均为虚构），
与「本站不虚构人物与数据」的对外声明直接冲突，必须整体替换为课题组提供的 4 份田野档案。

**新数据结构**（`people-data.js`）

```
id / no（中文序号，用于头像与编号）/ label（身份标签，兼作标题）/ sub（副标题）
cat（筛选类别：散工 / 长工 / 厂二代）/ tags[]
quote（原话）/ lead（概要）/ facts[[字段,值]] / story[]（多段正文）/ source
```
与旧结构（name / hometown / age / since / years / meta / photo）不兼容，是**破坏性替换**。

**随之删除的内容**（属于内部工具或与新结构冲突）
- 页面顶部的 `SAMPLE` 示例数据提示条
- `people.html` 的「怎么录入我自己的档案」整节（三步指引 + 空白模板）
- CSV 批量导入/导出面板（`csvBox`）
- `#pModal` 弹窗详情（详情改为独立页 `person.html?id=`，可分享链接、可被搜索引擎收录）
- `people.js` 中的 `SHOW_SAMPLE_NOTICE` / `openPerson` / `initDist`（分布条：4 份样本无统计意义）

**文案处理**（原档案里的三处问题，已按字段核对后统一）
1. 第 2 份身份是「夫妻同行、与丈夫一同前来」，原文却混用「他／她」——按身份统一为**「她」**
2. 第 3 份「**五年年前**开始在康鹭当散工」与身份标签「务工 4 年」矛盾——取标签口径，改为「**四年前**」
3. 4 份编号格式不统一（档案一 / 人物档案·二 / 人物档案三 / 人物档案4）——统一为**一 / 二 / 三 / 四**

**新增**
- `person.html`：详情页，展示身份标签、标签、原话、概要、基本信息（3×2 网格）、完整正文、
  隐私说明与上一份/下一份导航；`?id=a1..a4`
- 首页「人物档案」段：滑动式轮播（`scroll-snap` + `scroll-snap-align:center`），
  卡片 47% 宽形成「中间大卡、两侧露边」，当前居中的一张加描边与阴影，配圆点与左右箭头
- 头像取**档案序号**而非标签首字：4 份标签都以「湖」或「厂」开头，取首字没有区分度

**注意**：`facts` 是 3 列网格，条数取 3 的倍数（各档案补至 6 条，均取自原文），
否则最后一行会空出一格。

