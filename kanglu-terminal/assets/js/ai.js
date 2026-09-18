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
  /* 提问里的疑问词与虚词不参与匹配：
     否则「这里有什么好吃的」会因为「有什」「什么」这种二字组命中任何一段，
     返回一段毫不相干的资料（实测踩过）。 */
  var STOP_PHRASES = ['什么', '怎么', '怎样', '如何', '哪里', '哪个', '哪些', '多少', '几位',
    '几个', '请问', '介绍', '告诉', '一下', '是不是', '有没有', '为什么', '这个', '那个',
    '你们', '我们', '能不能', '可以'];
  var STOP_CHARS = '的了是在有和与及这那它们吗呢吧啊呀哦嘛你我的地得就都也很会被把给对从到为以要能';

  function gramsOf(q) {
    var clean = String(q).replace(/[？?。，,、\s「」（）()：:！!；;“”"']/g, '');
    STOP_PHRASES.forEach(function (p) { clean = clean.split(p).join(''); });
    clean = clean.split('').filter(function (ch) { return STOP_CHARS.indexOf(ch) < 0; }).join('');
    if (clean.length < 2) return [];
    var g = [];
    for (var i = 0; i < clean.length - 1; i++) g.push(clean.slice(i, i + 2));
    return g;
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
      /* 不给死胡同：说清这里有什么，并给几个能问的入口 */
      return '这个我没记下来。\n\n我这儿存的主要是康鹭片区的制衣产业、空间与人：\n'
        + '· 为什么被叫作「制衣村」\n· 「小单快反」怎么运转\n· 招工广场（原鹭江球场）的来历\n'
        + '· 旧改走到哪一步了\n· 4 份田野访谈档案\n\n换个问法可能就有了。\n\n'
        + '[去「康鹭记忆」首页看看 →](index.html)';
    }
    var parts = ['站内资料里与这个问题相关的部分：', '· ' + clip(top.text, 220)];
    var second = list[1];
    if (second && second.text !== top.text && second.score >= top.score - 1) {
      parts.push('· ' + clip(second.text, 160));
    }
    return parts.join('\n') + '\n\n（站内检索模式，未接入大模型）'
      + '\n[去「' + top.section + '」看看 →](' + top.link + ')';
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
  /* 优先级：本机有 Key 就走直连（本地演示更直接），
     否则走代理（线上唯一不泄露 Key 的方式）。 */
  function useProxy() {
    return !cfg.apiKey && !!cfg.proxyUrl;
  }

  function endpoint() {
    if (useProxy()) return cfg.proxyUrl.replace(/\/$/, '') + (cfg.proxyPath || '/chat');
    if (cfg.baseUrl) return cfg.baseUrl.replace(/\/$/, '') + '/chat/completions';
    return '';
  }

  function ask(q, onDelta, onDone, onError) {
    var url = endpoint();
    if (!url || (!cfg.apiKey && !useProxy())) {
      onDone(localAnswer(q));
      return;
    }
    var viaProxy = useProxy();

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
      if (!viaProxy) b.model = cfg.model;
      return JSON.stringify(b);
    }

    var headers = { 'Content-Type': 'application/json' };
    if (!viaProxy && cfg.apiKey) headers.Authorization = 'Bearer ' + cfg.apiKey;

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
    return useProxy() || !!(cfg.baseUrl && cfg.apiKey && cfg.model);
  }

  /* 默认形象：一只小白鹭（鹭江的「鹭」），纯 SVG，零依赖。
     配色沿用站点语言：纸白身 + 墨色勾线 + 朱红喙脚。 */
  var EGRET_SVG =
    '<svg class="ai-bird" viewBox="0 0 56 56" aria-hidden="true">' +
      /* 腿脚：两条细腿 + 小横脚，画在身体下沿之下，别被身体盖住 */
      '<path d="M22 37v10M31 37v10" stroke="#B84A3A" stroke-width="2.2" stroke-linecap="round"/>' +
      '<path d="M18.5 47h7M27.5 47h7" stroke="#B84A3A" stroke-width="2.2" stroke-linecap="round"/>' +
      '<ellipse class="ai-bird-body" cx="26" cy="28" rx="15" ry="11" fill="#F1EBDD" stroke="#302D28" stroke-width="1.8"/>' +
      '<path class="ai-bird-wing" d="M19 25c5-5 12-5 16 1-4 6-12 7-16-1z" fill="#eae2d3" stroke="#302D28" stroke-width="1.5"/>' +
      '<g class="ai-bird-head">' +
        '<circle cx="39" cy="16" r="9.5" fill="#F1EBDD" stroke="#302D28" stroke-width="1.8"/>' +
        '<path d="M33 8c2-5 7-6 10-3-3 .5-5 2-6 4.5" fill="none" stroke="#302D28" stroke-width="1.5" stroke-linecap="round"/>' +
        '<circle class="ai-bird-eye" cx="42" cy="14" r="1.9" fill="#302D28"/>' +
        '<path class="ai-bird-beak" d="M48 14l7.5 2.2L48 18.6z" fill="#B84A3A"/>' +
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
      : '\n\n（现在是站内检索模式：回答来自本站已整理的数据，没有接入大模型）'));

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

  /* ---------- 头一直对准鼠标（几何瞄准 + 每帧缓动） ----------
     要点一「对准」：头的喙在图形里朝右，所以要让喙指向鼠标，
       局部旋转角就是「头 → 鼠标」的方位角；鼠标绕到身后时先转身，
       再把屏幕方向折算进镜像后的局部坐标系（镜像下角度是 180-ang）。
     要点二「丝滑」：不在 mousemove 里直接写死角度，而是维护当前值与目标值，
       用一条持续的 requestAnimationFrame 逐帧插值靠拢，收敛后自动停下。 */
  function initBirdGaze() {
    var head = els.wrap.querySelector('.ai-bird-head');
    if (!head) return;
    var mx = -1, my = -1;
    var cur = { tx: 0, ty: 0, deg: 0 };
    var tgt = { tx: 0, ty: 0, deg: 0 };
    var running = false;
    var MAX_DEG = 60;      /* 头相对身体能转多少度 */
    var EASE = 0.18;       /* 每帧向目标靠拢的比例：越小越绵、越大越跟手 */

    function wrap180(a) {
      while (a > 180) a -= 360;
      while (a < -180) a += 360;
      return a;
    }

    function aim() {
      if (mx < 0) return;
      var r = els.wrap.getBoundingClientRect();
      var hx = r.left + r.width * 0.68;   /* 旋转轴大致在颈部 */
      var hy = r.top + r.height * 0.32;
      var dx = mx - hx, dy = my - hy;
      var d = Math.max(1, Math.sqrt(dx * dx + dy * dy));
      var ang = Math.atan2(dy, dx) * 180 / Math.PI;   /* 屏幕坐标：0=右，90=下，±180=左 */

      /* 鼠标绕到身后就转身。94/86 的差是迟滞，避免在正后方来回翻转抖动 */
      var flipped = els.wrap.classList.contains('flip');
      if (!flipped && Math.abs(ang) > 94) { els.wrap.classList.add('flip'); flipped = true; }
      else if (flipped && Math.abs(ang) < 86) { els.wrap.classList.remove('flip'); flipped = false; }

      tgt.deg = Math.max(-MAX_DEG, Math.min(MAX_DEG, flipped ? wrap180(180 - ang) : ang));
      var amp = Math.min(6, d / 55);
      tgt.tx = (dx / d) * amp;
      tgt.ty = (dy / d) * amp;
    }

    function loop() {
      cur.tx += (tgt.tx - cur.tx) * EASE;
      cur.ty += (tgt.ty - cur.ty) * EASE;
      cur.deg += (tgt.deg - cur.deg) * EASE;
      head.style.transform = 'translate(' + cur.tx.toFixed(2) + 'px,' + cur.ty.toFixed(2) + 'px) '
        + 'rotate(' + cur.deg.toFixed(2) + 'deg)';
      var settled = Math.abs(tgt.deg - cur.deg) < 0.15
        && Math.abs(tgt.tx - cur.tx) < 0.1 && Math.abs(tgt.ty - cur.ty) < 0.1;
      if (settled) { running = false; return; }
      requestAnimationFrame(loop);
    }

    window.addEventListener('mousemove', function (e) {
      mx = e.clientX; my = e.clientY;
      aim();
      if (!running) { running = true; requestAnimationFrame(loop); }
    }, { passive: true });

    /* 供调试：读出当前瞄准状态 */
    els.wrap.klGaze = function () { return { cur: cur, tgt: tgt, flip: els.wrap.classList.contains('flip') }; };
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
    els.panel.style.left = left + 'px';
    els.panel.style.right = 'auto';
    /* 关键：放上方时用"底边锚定"，而不是用 top。
       原来的写法是 top = max(12, r.top - ph - 14)：面板一高就被顶到 12px，
       然后随着回答流式变长继续向下长，最后把小白鹭整个盖住
       （用户反馈："新对话生成时会把小白鹭挡住"）。
       改成把底边钉在"小鸟上沿 -14px"，面板就只会向上生长，永远压不到小鸟。 */
    if (below) {
      els.panel.style.top = Math.max(12, Math.min(r.bottom + 14, window.innerHeight - ph - 12)) + 'px';
      els.panel.style.bottom = 'auto';
    } else {
      els.panel.style.top = 'auto';
      els.panel.style.bottom = Math.max(12, window.innerHeight - r.top + 14) + 'px';   /* 底边锚定 */
    }
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
        /* 接口不可用时不要甩一个报错框给用户：
           退回站内检索照常作答（例如 workers.dev 在部分网络下不可达） */
        if (window.console && console.warn) console.warn('AI 接口不可用，已退回站内检索：', err);
        renderRich(out, localAnswer(q)
          + '\n\n（大模型接口本次没能连上，以上为站内检索结果）');
        busy = false;
        els.send.disabled = false;
        scheduleFit();
      }
    );
  }

  /* ---------- 启动 ---------- */
  /* 两级配置：ai-config.js（公开，随站点发布）→ ai-config.local.js（含密钥，已被 gitignore）
     本地那份没拿到时静默跳过，线上因此不会因为缺文件而报错。 */

  /* 加载一个配置脚本，并**立刻把它写下的 window.KL_AI 取走**：
     take(src, 目标对象)。这样两个配置文件不再共享同一个全局，
     谁后加载都不会把已经合并好的配置覆盖掉。
     （踩过的坑：两个配置都写 window.KL_AI，local 后加载会把 pub 整个替换，
      表现为"proxyUrl 莫名为空、线上退化成站内检索"。） */
  function loadConfig(src, into) {
    return new Promise(function (resolve) {
      var s = document.createElement('script');
      s.src = src;
      s.onload = function () {
        var got = window.KL_AI;
        if (got && typeof got === 'object') {
          Object.keys(got).forEach(function (k) { into[k] = got[k]; });
        }
        try { delete window.KL_AI; } catch (e) { window.KL_AI = undefined; }
        resolve(true);
      };
      s.onerror = function () { resolve(false); };
      document.head.appendChild(s);
    });
  }

  /* 启动流程（配置解析完只调用一次 build）：
       ① 读公开配置 assets/js/ai-config.js（随站点发布，不含密钥）
       ② 本地（file:// 或 localhost）再尝试读含密钥的本地配置，两个候选位置：
            ../_ai-config.local.js        —— 项目根目录（推荐：在交付目录之外，
                                              "把终版文件夹整个发给别人"不会带出密钥）
            assets/js/ai-config.local.js  —— 老位置（兼容）
       ③ DEFAULTS ← 公开 ← 本地，逐层覆盖（后者优先）
     线上（有域名）不加载本地配置 → apiKey 为空 → 由 ai.js 自动改走 proxyUrl。 */
  function boot() {
    var config = Object.assign({}, DEFAULTS);
    var host = location.hostname;
    var isLocal = !host || host === 'localhost' || host === '127.0.0.1' || host === '::1';
    loadConfig('assets/js/ai-config.js', config).then(function () {
      if (!isLocal) return true;
      return loadConfig('../_ai-config.local.js', config).then(function (ok) {
        if (ok) return true;
        return loadConfig('assets/js/ai-config.local.js', config);
      });
    }).then(function () {
      cfg = config;
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', build);
      } else {
        build();
      }
    }).catch(function (err) {
      if (window.console && console.warn) console.warn('AI 配置加载失败：', err);
    });
  }
  boot();
})();
