/* ============================================================
   康鹭记忆 · AI 问答
   ------------------------------------------------------------
   形态：右侧一个形象按钮，点击从右侧展开对话框，约占屏幕 1/4 宽。
   两种工作方式（按配置自动选择）：
     ① 已配置接口 → 走真实大模型，流式输出，逐字显示
     ② 未配置接口 → 退化为「本地检索」：从本站数据里找出最相关的一两段作答，
        并明确标注这是本地检索结果，不冒充 AI
   知识来源：本站自身的 assets/js/data.js 与 people-data.js，
   不额外维护第二套知识库，避免两处内容对不上。

   语料与检索：
     corpus()      —— 把站点数据拼成一份完整语料（不截断）
     paragraphs()  —— 切成候选片段（按换行与分号），供检索
     rank(q)       —— 用二元词重合度打分排序
   发给模型的提示词只带排名靠前的若干片段，而不是整份语料：
   提示词更小 = 更快更省，也更聚焦。
   ============================================================ */
(function () {
  'use strict';

  var DEFAULTS = {
    title: '康鹭摸摸问',
    intro: '我是小白鹭，就住在鹭江边。康鹭的事，你问，我讲给你听。',
    /* 人格设定：这是"回答像百度搜索"的解药——先立人，再约束事实 */
    persona: [
      '你叫小白鹭，是「康鹭记忆」这个数字人文项目的向导，一只住在鹭江边的小白鹭。',
      '你不是搜索引擎，而是带人逛展的人：说人话、有温度，用「我」自称。',
      '偶尔可以带一句鹭鸟的视角（爱站在水边看人来人往、记性还好），但别卖萌过头，一次一句就够。',
      '',
      '三条底线：',
      '1. 只讲广州海珠康鹭片区（康乐村、鹭江村）的制衣产业、空间与人；别的话题礼貌推回。',
      '2. 只用下面「与本次提问相关的资料」里的事实。绝不编造数字、人名或时间——',
      '   没记下来的就直说「这个我没记下来」，再建议一个可能的问法。',
      '3. 不要「根据资料」「综上所述」「首先其次」这类百科腔，也不要堆名词。',
      '   把一个事讲清楚，通常 120 字以内；确实需要展开时，最多再加两句。',
      '',
      '结尾：如果答案对应站内某一页或某一节，就另起一行给一个 Markdown 链接，',
      '格式 [去看「小节名」](路径)，链接文字**只写小节名**，不要把路径再写进文字里。',
      '路径只能从下面「站内目录」里挑，不要自己编。问题与站内内容无关时不用给链接。'
    ].join('\n'),
    temperature: 0.3,
    maxTokens: 800,
    topChunks: 8,
    placeholder: '问：这里为什么叫「制衣村」？',
    mascotImg: '',        /* 有卡通形象图片就填路径，例如 'assets/img/mascot.png' */
    mascotText: '问',      /* 没有图片时按钮里显示的字 */
    presets: [
      '这里为什么叫「制衣村」？',
      '「小单快反」是什么意思？',
      '招工广场是怎么来的？',
      '旧改现在到哪一步了？',
      '受访者一共有几位？他们分别是谁？'
    ]
  };

  var cfg = {};
  var els = null;
  var busy = false;

  /* ---------- 站点数据 → 带出处的语料 ----------
     每个片段都记着它来自站内哪一节，这样即使是本地检索也能给出可跳转的链接。 */
  var CHUNKS = null;
  function chunks() {
    if (CHUNKS) return CHUNKS;
    var out = [];
    /* group 用于「小节展开」：同组片段会被一起带进提示词。
       注意不能按 link 分组——4 份档案的链接是 person.html?id=aX，与概述的 people.html 不同。 */
    function add(group, section, link, text) {
      String(text).split(/[\n；]+/).forEach(function (s) {
        s = s.trim().replace(/^【[^】]*】/, '');
        if (s.length > 8) out.push({ text: s, group: group, section: section, link: link });
      });
    }

    if (typeof STATS !== 'undefined') {
      add('stats', '首页 · 数字里的康鹭', 'index.html#figures', STATS.map(function (s) {
        return (s.suffix || '') + s.num + s.unit + ' ' + s.label + '（' + s.desc + '）';
      }).join('；'));
    }
    if (typeof HISTORY !== 'undefined') {
      add('history', '首页 · 发展历程', 'index.html#history', HISTORY.map(function (h) {
        return h.era + ' ' + h.title + '：' + h.body.join('');
      }).join('\n'));
    }
    if (typeof GLOSSARY !== 'undefined') {
      add('glossary', '背景资料 · 乡土词条', 'background.html#glossary', GLOSSARY.map(function (g) {
        return g.term + '：' + g.def;
      }).join('；'));
    }
    if (typeof POIS !== 'undefined') {
      add('pois', '康鹭地图', 'map.html', POIS.map(function (p) {
        return p.name + '（' + p.summary + '）';
      }).join('；'));
    }
    if (typeof PEOPLE !== 'undefined') {
      /* 这句概述是必要的：档案本身只写「档案一/二…」，
         不点明「共 4 份、受访者 4 位」，问「有几位受访者」就检索不到 */
      add('people', '人物档案', 'people.html',
        '本站共收录 ' + PEOPLE.length + ' 份田野访谈档案（受访者共 ' + PEOPLE.length + ' 位）。');
      PEOPLE.forEach(function (p) {
        add('people', '人物档案 · 档案' + p.no, 'person.html?id=' + encodeURIComponent(p.id),
          '档案' + p.no + '：' + p.label + '，' + p.sub + '。' + p.lead);
      });
    }
    if (typeof REFS !== 'undefined') {
      add('refs', '背景资料 · 参考文献', 'background.html#refs',
        REFS.map(function (r) { return r.t; }).join('；'));
    }

    CHUNKS = out;
    return CHUNKS;
  }

  /* ---------- 检索 ---------- */
  function gramsOf(q) {
    var clean = String(q).replace(/[？?。，,、\s「」（）()：:]/g, '');
    var g = [];
    for (var i = 0; i < clean.length - 1; i++) g.push(clean.slice(i, i + 2));
    return g.length ? g : [clean];
  }

  function rank(q) {
    var g = gramsOf(q);
    return chunks().map(function (c) {
      var score = 0;
      g.forEach(function (x) { if (c.text.indexOf(x) >= 0) score += 1; });
      return { text: c.text, group: c.group, section: c.section, link: c.link, score: score };
    }).sort(function (a, b) { return b.score - a.score; });
  }

  function clip(s, n) {
    if (s.length <= n) return s;
    var cut = s.slice(0, n);
    var i = Math.max(cut.lastIndexOf('。'), cut.lastIndexOf('，'), cut.lastIndexOf('、'));
    return (i > n * 0.5 ? cut.slice(0, i + 1) : cut) + '…';
  }

  /* ---------- 本地检索作答（未配置接口时） ---------- */
  function localAnswer(q) {
    var list = rank(q);
    var top = list[0];
    if (!top || top.score < 1) {
      return '这个问题在项目资料里没有找到对应记录。可以换个问法，或者从「背景资料」「康鹭地图」「人物档案」三页翻起。';
    }
    var out = [clip(top.text, 220)];
    var second = list[1];
    if (second && second.text !== top.text && second.score >= top.score - 1) {
      out.push(clip(second.text, 160));
    }
    return '（本地检索结果，未接入 AI 模型）\n\n' + out.join('\n\n') +
      '\n\n[去「' + top.section + '」看看 →](' + top.link + ')';
  }

  /* ---------- 站内目录：链接只能从这里挑 ---------- */
  var SITE_MAP = [
    '首页 · 康鹭简介 → index.html#intro',
    '首页 · 数字里的康鹭 → index.html#figures',
    '首页 · 发展历程 → index.html#history',
    '首页 · 人物档案轮播 → index.html#people',
    '背景资料 · 区位与概况 → background.html#location',
    '背景资料 · 产业逻辑 → background.html#industry',
    '背景资料 · 空间形态 → background.html#space',
    '背景资料 · 编年 → background.html#chronicle',
    '背景资料 · 乡土词条 → background.html#glossary',
    '背景资料 · 改造与政策 → background.html#policy',
    '背景资料 · 现场材料 → background.html#materials',
    '背景资料 · 参考文献 → background.html#refs',
    '康鹭地图 → map.html',
    '人物档案（4 份）→ people.html',
    '某一份档案 → person.html?id=a1（a1…a4）',
    '声明与方法 → statement.html'
  ].join('\n');

  /* ---------- 提示词：人格 + 站内目录 + 命中片段 ---------- */
  var lastHit = null;   /* 本次提问最相关的那一条，用于兜底补链接 */

  function systemPrompt(q) {
    var topN = cfg.topChunks || DEFAULTS.topChunks;
    var ranked = rank(q);
    var hits = ranked.filter(function (x) { return x.score > 0; }).slice(0, topN);

    /* 小节展开：命中「人物档案」概述时，把同组的 4 份档案也带进来，
       否则问「受访者有几位」只能拿到概述那一句，模型就无法列出是谁 */
    if (hits.length) {
      var topGroup = hits[0].group;
      ranked.forEach(function (x) {
        if (hits.length >= topN + 6) return;
        if (x.group !== topGroup) return;
        for (var i = 0; i < hits.length; i++) if (hits[i] === x) return;
        hits.push(x);
      });
    }

    lastHit = hits.length ? hits[0] : null;

    var guide = hits.map(function (x) {
      return '· ' + x.text + '　〔出处：' + x.section + ' → ' + x.link + '〕';
    }).join('\n');

    return [
      cfg.persona || DEFAULTS.persona,
      '',
      '=== 站内目录（链接只能从这里挑，不要自己编）===',
      SITE_MAP,
      '',
      '=== 与本次提问相关的资料（括注里已给出该条对应的站内位置）===',
      guide || '（本次没有检索到相关片段，请据实说明资料里没有记录，并建议一个大致方向）'
    ].join('\n');
  }

  /* ---------- 接口调用（OpenAI 兼容） ---------- */
  function endpoint() {
    if (cfg.proxyUrl) return cfg.proxyUrl.replace(/\/$/, '') + (cfg.proxyPath || '/chat');
    if (cfg.baseUrl) return cfg.baseUrl.replace(/\/$/, '') + '/chat/completions';
    return '';
  }

  function ask(q, onDelta, onDone, onError) {
    var url = endpoint();
    if (!url || (!cfg.apiKey && !cfg.proxyUrl)) {
      onDone(localAnswer(q));
      return;
    }

    var messages = [
      { role: 'system', content: systemPrompt(q) },
      { role: 'user', content: q }
    ];

    function reqBody(stream) {
      var b = {
        messages: messages,
        temperature: cfg.temperature == null ? DEFAULTS.temperature : cfg.temperature,
        max_tokens: cfg.maxTokens || DEFAULTS.maxTokens,
        stream: !!stream
      };
      /* 走自建代理时，模型名与 key 由代理端决定，前端不传 */
      if (!cfg.proxyUrl) b.model = cfg.model;
      return JSON.stringify(b);
    }

    var headers = { 'Content-Type': 'application/json' };
    if (!cfg.proxyUrl && cfg.apiKey) headers.Authorization = 'Bearer ' + cfg.apiKey;

    /* stream=true 时边收边吐；onText 在结束时给出完整文本 */
    function once(stream, onText, onFail) {
      fetch(url, { method: 'POST', headers: headers, body: reqBody(stream) })
        .then(function (res) {
          if (!res.ok) throw new Error('HTTP ' + res.status);
          if (!stream || !res.body || !res.body.getReader) {
            return res.json().then(function (j) {
              var c = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
              onText(c || '');
            });
          }
          var reader = res.body.getReader();
          var dec = new TextDecoder();
          var buf = '', full = '';
          (function pump() {
            return reader.read().then(function (r) {
              if (r.done) { onText(full); return; }
              buf += dec.decode(r.value, { stream: true });
              var lines = buf.split('\n');
              buf = lines.pop();
              lines.forEach(function (line) {
                line = line.trim();
                if (!line || line.indexOf('data:') !== 0) return;
                var payload = line.slice(5).trim();
                if (payload === '[DONE]') return;
                try {
                  var j = JSON.parse(payload);
                  var d = j.choices && j.choices[0];
                  var piece = (d && ((d.delta && d.delta.content) || (d.message && d.message.content))) || '';
                  if (piece) { full += piece; onDelta(piece); }
                } catch (e) { /* 忽略不完整的分片 */ }
              });
              return pump();
            });
          })();
        })
        .catch(onFail);
    }

    once(true, function (full) {
      if (full) { onDone(full); return; }
      /* 流式一个字都没收到——可能是换了推理模型（token 全花在 reasoning_content 上），
         也可能是代理改写了流。退回非流式再请求一次，避免给用户一个空回答。 */
      once(false, function (text) {
        onDone(text || '（接口没有返回内容）');
      }, onError);
    }, onError);
  }

  /* ---------- 界面 ---------- */
  function isConfigured() {
    return !!(cfg.proxyUrl || (cfg.baseUrl && cfg.apiKey && cfg.model));
  }

  /* 默认形象：一只小白鹭（鹭江的「鹭」），纯 SVG，零依赖。
     配色沿用站点语言：纸白身 + 墨色勾线 + 朱红喙脚。 */
  var EGRET_SVG =
    '<svg class="ai-bird" viewBox="0 0 56 56" aria-hidden="true">' +
      /* 腿脚：两条细腿 + 小横脚，画在身体下沿之下，别被身体盖住 */
      '<path d="M22 37v10M31 37v10" stroke="#b3452f" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M18.5 47h7M27.5 47h7" stroke="#b3452f" stroke-width="2.2" stroke-linecap="round"/>' +
      '<ellipse class="ai-bird-body" cx="26" cy="28" rx="15" ry="11" fill="#faf7f0" stroke="#1c1a17" stroke-width="1.8"/>' +
      '<path class="ai-bird-wing" d="M19 25c5-5 12-5 16 1-4 6-12 7-16-1z" fill="#eae2d3" stroke="#1c1a17" stroke-width="1.5"/>' +
      '<g class="ai-bird-head">' +
        '<circle cx="39" cy="16" r="9.5" fill="#faf7f0" stroke="#1c1a17" stroke-width="1.8"/>' +
        '<path d="M33 8c2-5 7-6 10-3-3 .5-5 2-6 4.5" fill="none" stroke="#1c1a17" stroke-width="1.5" stroke-linecap="round"/>' +
        '<circle class="ai-bird-eye" cx="42" cy="14" r="1.9" fill="#1c1a17"/>' +
        '<path class="ai-bird-beak" d="M48 14l7.5 2.2L48 18.6z" fill="#b3452f"/>' +
      '</g>' +
    '</svg>';

  function mascotHTML() {
    return cfg.mascotImg
      ? '<img class="ai-mascot-img" src="' + cfg.mascotImg + '" alt="">'
      : (cfg.mascotText && cfg.mascotText !== DEFAULTS.mascotText
          ? '<span class="ai-mascot">' + cfg.mascotText + '</span>'
          : EGRET_SVG);
  }

  var POS_KEY = 'kl-mascot-pos';

  function build() {
    /* 形象本体：一个可拖动的浮标（不是侧边按钮） */
    var wrap = document.createElement('div');
    wrap.className = 'ai-bird-wrap';
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-label', DEFAULTS.title + '（可拖动，点击展开对话）');
    wrap.setAttribute('title', '拖动我 · 点我提问');
    wrap.innerHTML = mascotHTML();

    var panel = document.createElement('aside');
    panel.className = 'ai-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML =
      '<div class="ai-hd">' + mascotHTML() +
        '<div class="ai-hd-tx"><b>' + DEFAULTS.title + '</b><i>' +
          (isConfigured() ? '已接入模型' : '本地检索模式') + '</i></div>' +
        '<button class="ai-close" type="button" aria-label="关闭">×</button>' +
      '</div>' +
      '<div class="ai-log" id="aiLog"></div>' +
      '<div class="ai-presets" id="aiPresets"></div>' +
      '<form class="ai-form">' +
        '<input class="ai-input" type="text" autocomplete="off" placeholder="' + DEFAULTS.placeholder + '">' +
        '<button class="ai-send" type="submit">发送</button>' +
      '</form>';

    document.body.appendChild(wrap);
    document.body.appendChild(panel);

    els = {
      wrap: wrap,
      panel: panel,
      log: panel.querySelector('#aiLog'),
      presets: panel.querySelector('#aiPresets'),
      form: panel.querySelector('.ai-form'),
      input: panel.querySelector('.ai-input'),
      send: panel.querySelector('.ai-send'),
      close: panel.querySelector('.ai-close')
    };

    els.presets.innerHTML = DEFAULTS.presets
      .map(function (p) { return '<button type="button" class="ai-chip">' + p + '</button>'; })
      .join('');

    bubble('bot', DEFAULTS.intro + (isConfigured()
      ? ''
      : '\n\n（当前未配置大模型接口，回答来自站内数据的本地检索。配置方法见 assets/js/ai-config.example.js）'));

    restorePos();
    initBirdDrag();
    initBirdGaze();

    wrap.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
    els.close.addEventListener('click', function () { toggle(false); });
    els.presets.addEventListener('click', function (e) {
      var b = e.target.closest('.ai-chip');
      if (!b) return;
      els.input.value = b.textContent;
      submit();
    });
    els.form.addEventListener('submit', function (e) { e.preventDefault(); submit(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && els.panel.classList.contains('open')) toggle(false);
    });
    window.addEventListener('resize', function () {
      clampToView();
      if (els.panel.classList.contains('open')) { placePanel(); fitPanel(); }
    });
  }

  /* ---------- 拖动 ---------- */
  function clampToView() {
    var w = els.wrap.offsetWidth, h = els.wrap.offsetHeight;
    var x = Math.max(6, Math.min(window.innerWidth - w - 6, els.wrap.offsetLeft));
    var y = Math.max(6, Math.min(window.innerHeight - h - 6, els.wrap.offsetTop));
    els.wrap.style.left = x + 'px';
    els.wrap.style.top = y + 'px';
  }

  function savePos() {
    try {
      localStorage.setItem(POS_KEY, JSON.stringify({
        x: els.wrap.offsetLeft, y: els.wrap.offsetTop
      }));
    } catch (e) { /* file:// 下 localStorage 可能不可用，忽略 */ }
  }

  function restorePos() {
    var p = null;
    try { p = JSON.parse(localStorage.getItem(POS_KEY) || 'null'); } catch (e) { p = null; }
    if (p && typeof p.x === 'number' && typeof p.y === 'number') {
      els.wrap.style.left = p.x + 'px';
      els.wrap.style.top = p.y + 'px';
      els.wrap.style.right = 'auto';
      els.wrap.style.bottom = 'auto';
      clampToView();
    }
  }

  function initBirdDrag() {
    var wrap = els.wrap;
    var dragging = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0;

    wrap.addEventListener('pointerdown', function (e) {
      if (e.button != null && e.button !== 0) return;
      dragging = true; moved = false;
      sx = e.clientX; sy = e.clientY;
      var r = wrap.getBoundingClientRect();
      ox = r.left; oy = r.top;
      wrap.style.left = ox + 'px'; wrap.style.top = oy + 'px';
      wrap.style.right = 'auto'; wrap.style.bottom = 'auto';
      wrap.classList.add('dragging');
      try { wrap.setPointerCapture(e.pointerId); } catch (err) {}
    });

    wrap.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var dx = e.clientX - sx, dy = e.clientY - sy;
      if (!moved && Math.abs(dx) < 4 && Math.abs(dy) < 4) return;  // 先判断是拖动还是点击
      moved = true;
      wrap.style.left = (ox + dx) + 'px';
      wrap.style.top = (oy + dy) + 'px';
    });

    function end(e) {
      if (!dragging) return;
      dragging = false;
      wrap.classList.remove('dragging');
      try { wrap.releasePointerCapture(e.pointerId); } catch (err) {}
      if (moved) { clampToView(); savePos(); }
      else { toggle(); }            // 没移动 = 点击 → 开合对话框
    }
    wrap.addEventListener('pointerup', end);
    wrap.addEventListener('pointercancel', function (e) {
      if (!dragging) return;
      dragging = false; wrap.classList.remove('dragging');
    });
  }

  /* ---------- 头朝鼠标 ---------- */
  /* 不是简单平移：以颈部为轴做旋转（歪头看你），光标在下方时略微低头；
     光标移到左侧时整体转身，转身后旋转方向要跟着取反，否则会"拧着脖子"看。 */
  function initBirdGaze() {
    var head = els.wrap.querySelector('.ai-bird-head');
    if (!head) return;
    var mx = -1, my = -1, raf = 0;

    function apply() {
      raf = 0;
      if (mx < 0) return;
      var r = els.wrap.getBoundingClientRect();
      var hx = r.left + r.width * 0.70;   /* 头部大致位置：偏右上 */
      var hy = r.top + r.height * 0.30;
      var dx = mx - hx, dy = my - hy;
      var d = Math.max(1, Math.sqrt(dx * dx + dy * dy));
      var flipped = els.wrap.classList.contains('flip');
      /* 用叠加模型而不是方位角：
         方位角在"鼠标与头同高"时恒为 0，横向移动完全看不出反应（这就是之前"头不转"的原因）。
         改为「横向偏移 → 歪头角度」+「纵向偏移 → 颔首角度」，横向一动就有反馈。
         幅度取到 ±24°/±9°，是为了"一眼能看见"——早先 ±13° 实际只有两三度，等于没转。 */
      var localX = flipped ? -dx : dx;
      var amp = Math.min(9, d / 22);
      var tx = (localX / d) * amp, ty = (dy / d) * amp;
      var rot = Math.max(-24, Math.min(24, localX / 22));   /* 横向：左右歪头 */
      var tilt = Math.max(-9, Math.min(9, dy / 26));        /* 纵向：抬头/低头 */
      var deg = Math.max(-28, Math.min(28, rot + tilt));

      head.style.transform = 'translate(' + tx.toFixed(2) + 'px,' + ty.toFixed(2) + 'px) '
        + 'rotate(' + deg.toFixed(1) + 'deg)';

      els.wrap.classList.toggle('flip', dx < -10 && Math.abs(dy) < 260);
    }

    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    }, { passive: true });
  }

  /* ---------- 气泡：随内容平滑长大 ---------- */
  /* 高度不能直接用 auto 过渡，所以先钉住当前高度、下一帧再给目标高度，
     由 CSS 的 height 过渡负责补间 —— 长文进来时是"吹大"而不是"跳大"。 */
  function fitPanel() {
    var panel = els.panel;
    if (!panel.classList.contains('open')) return;
    var chrome = panel.offsetHeight - els.log.offsetHeight;   /* 头 + 预设 + 输入框 */
    var maxH = Math.min(window.innerHeight * 0.72, 600);
    var want = Math.max(200, Math.min(maxH, els.log.scrollHeight + chrome + 2));
    var cur = panel.offsetHeight;
    if (Math.abs(want - cur) < 2) return;
    panel.style.height = cur + 'px';
    requestAnimationFrame(function () { panel.style.height = want + 'px'; });
  }

  var fitRaf = 0;
  function scheduleFit() {
    if (fitRaf) return;
    fitRaf = requestAnimationFrame(function () { fitRaf = 0; fitPanel(); });
  }

  /* ---------- 小气泡对话框：贴着小白鹭弹出 ---------- */
  function placePanel() {
    var r = els.wrap.getBoundingClientRect();
    var pw = els.panel.offsetWidth, ph = els.panel.offsetHeight;
    var left = r.right - pw;
    left = Math.max(12, Math.min(window.innerWidth - pw - 12, left));
    var top = r.top - ph - 14;                  /* 优先放在小鸟上方 */
    var below = top < 12;
    if (below) top = Math.min(r.bottom + 14, window.innerHeight - ph - 12);
    els.panel.style.left = left + 'px';
    els.panel.style.top = Math.max(12, top) + 'px';
    els.panel.style.right = 'auto';
    els.panel.style.bottom = 'auto';
    /* 小尾巴指向小鸟中心 */
    els.panel.classList.toggle('tail-top', below);
    els.panel.classList.toggle('tail-bottom', !below);
    var tailX = Math.max(20, Math.min(pw - 34, r.left + r.width / 2 - left - 8));
    els.panel.style.setProperty('--tail-x', tailX + 'px');
  }

  function toggle(force) {
    var open = force == null ? !els.panel.classList.contains('open') : force;
    if (open) {
      els.panel.style.height = 'auto';       /* 先按内容量一次，再交给过渡 */
      placePanel();
      fitPanel();
    }
    els.panel.classList.toggle('open', open);
    els.panel.setAttribute('aria-hidden', open ? 'false' : 'true');
    els.wrap.classList.toggle('asking', open);
    if (open) setTimeout(function () { els.input.focus(); }, 240);
  }

  /* 把回答里的 Markdown 链接渲染成可点的链接。
     安全约束：先整体转义，再只放行站内相对路径——
     外部 http(s)、协议相对 //、javascript:、data: 一律还原成纯文本。 */
  function escHTML(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function renderRich(el, text) {
    el.innerHTML = escHTML(text).replace(
      /\[([^\]\n]+)\]\(([^)\s]+)\)/g,
      function (whole, label, url) {
        if (/^(https?:)?\/\//i.test(url) || /^javascript:/i.test(url) || /^data:/i.test(url)) {
          return label;
        }
        return '<a href="' + url + '">' + label + '</a>';
      }
    );
  }

  function bubble(who, text) {
    var d = document.createElement('div');
    d.className = 'ai-msg ai-' + who;
    d.textContent = text;
    els.log.appendChild(d);
    els.log.scrollTop = els.log.scrollHeight;
    scheduleFit();
    return d;
  }

  function submit() {
    var q = els.input.value.trim();
    if (!q || busy) return;
    busy = true;
    els.input.value = '';
    els.send.disabled = true;
    bubble('me', q);
    var out = bubble('bot', '');
    out.classList.add('typing');

    var first = true;
    ask(
      q,
      function (piece) {
        if (first) { out.textContent = ''; out.classList.remove('typing'); first = false; }
        out.textContent += piece;
        els.log.scrollTop = els.log.scrollHeight;
        scheduleFit();          /* 逐字进来时气泡跟着"吹大" */
      },
      function (full) {
        out.classList.remove('typing');
        /* 流式过程中只显示纯文本（链接可能还没吐完），结束后再渲染成可点的链接 */
        var text = full || out.textContent || '';
        if (!text) text = '（没有返回内容）';
        /* 不让格式依赖模型的自觉：真漏了链接，就补上本次最相关的那一节 */
        if (text.indexOf('](') < 0 && lastHit) {
          text += '\n\n[去「' + lastHit.section + '」看看 →](' + lastHit.link + ')';
        }
        renderRich(out, text);
        busy = false;
        els.send.disabled = false;
        scheduleFit();
      },
      function (err) {
        out.classList.remove('typing');
        out.textContent = '调用接口失败：' + (err && err.message ? err.message : err) +
          '\n\n可能是浏览器直连被 CORS 拦下了。线上使用建议改走自建代理（见 assets/js/ai-config.example.js 里的 Cloudflare Worker 示例）。';
        busy = false;
        els.send.disabled = false;
      }
    );
  }

  /* ---------- 启动 ---------- */
  /* 两级配置：ai-config.js（公开，随站点发布）→ ai-config.local.js（含 Key，已被 gitignore）
     先捕获公开配置，再加载本地配置，最后合并——local 优先级更高。
     本地文件不存在时静默跳过，线上因此不会因为缺文件而报错。 */
  function loadScript(src) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () { resolve(true); };
      s.onerror = function () { resolve(false); };
      document.head.appendChild(s);
    });
  }

  loadScript('assets/js/ai-config.js')
    .then(function () {
      var pub = window.KL_AI || {};
      return loadScript('assets/js/ai-config.local.js').then(function () {
        var loc = window.KL_AI || {};
        return Object.assign({}, DEFAULTS, pub, loc);
      });
    })
    .then(function (user) {
      cfg = user;
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
      } else {
        build();
      }
    });
})();
