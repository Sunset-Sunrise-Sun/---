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
    intro: '关于康鹭片区，问点具体的。',
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
  var corpusCache = null;
  var els = null;
  var busy = false;

  /* ---------- 站点数据 → 完整语料 ---------- */
  function corpus() {
    if (corpusCache) return corpusCache;
    var parts = [];

    if (typeof STATS !== 'undefined') {
      parts.push('【数字】' + STATS.map(function (s) {
        return (s.suffix || '') + s.num + s.unit + ' ' + s.label + '（' + s.desc + '）';
      }).join('；'));
    }
    if (typeof HISTORY !== 'undefined') {
      parts.push('【发展历程】' + HISTORY.map(function (h) {
        return h.era + ' ' + h.title + '：' + h.body.join('');
      }).join('\n'));
    }
    if (typeof GLOSSARY !== 'undefined') {
      parts.push('【乡土词条】' + GLOSSARY.map(function (g) {
        return g.term + '：' + g.def;
      }).join('；'));
    }
    if (typeof POIS !== 'undefined') {
      parts.push('【空间节点】' + POIS.map(function (p) {
        return p.name + '（' + p.summary + '）';
      }).join('；'));
    }
    if (typeof PEOPLE !== 'undefined') {
      /* 开头这句概述是必要的：档案本身只写「档案一/二…」，
         若不点明「共 4 份、受访者 4 位」，问「有几位受访者」就检索不到 */
      parts.push('【人物档案】本站共收录 ' + PEOPLE.length + ' 份田野访谈档案（受访者共 ' +
        PEOPLE.length + ' 位）。' +
        PEOPLE.map(function (p) {
          return '档案' + p.no + '：' + p.label + '，' + p.sub + '。' + p.lead;
        }).join('\n'));
    }
    if (typeof REFS !== 'undefined') {
      parts.push('【参考文献】' + REFS.map(function (r) { return r.t; }).join('；'));
    }

    corpusCache = parts.join('\n\n');
    return corpusCache;
  }

  /* ---------- 检索 ---------- */
  function paragraphs() {
    return corpus()
      .split(/[\n；]+/)
      .map(function (s) { return s.trim().replace(/^【[^】]*】/, ''); })
      .filter(function (s) { return s.length > 8; });
  }

  function gramsOf(q) {
    var clean = String(q).replace(/[？?。，,、\s「」（）()：:]/g, '');
    var g = [];
    for (var i = 0; i < clean.length - 1; i++) g.push(clean.slice(i, i + 2));
    return g.length ? g : [clean];
  }

  function rank(q) {
    var g = gramsOf(q);
    return paragraphs().map(function (p) {
      var score = 0;
      g.forEach(function (x) { if (p.indexOf(x) >= 0) score += 1; });
      return { p: p, score: score };
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
      return '这个问题在项目资料里没有找到对应记录。可以换个问法，或直接看站内的「背景资料」「康鹭地图」「人物档案」三页。';
    }
    var parts = [clip(top.p, 240)];
    var second = list[1];
    if (second && second.p !== top.p && second.score >= top.score - 1) {
      parts.push(clip(second.p, 180));
    }
    return '（本地检索结果，未接入 AI 模型）\n\n' + parts.join('\n\n');
  }

  /* ---------- 提示词：只带命中的片段 ---------- */
  function systemPrompt(q) {
    var top = rank(q)
      .filter(function (x) { return x.score > 0; })
      .slice(0, cfg.topChunks || DEFAULTS.topChunks)
      .map(function (x) { return '· ' + x.p; });

    return [
      '你是「康鹭记忆」数字人文项目的问答助手，只回答与广州海珠康鹭片区（康乐村、鹭江村）制衣产业相关的问题。',
      '回答必须依据下面的「相关资料」，不要编造数据、人名或时间；资料里没有的就直说“项目资料里没有记录”，',
      '并提示读者可以看站内的哪一页（背景资料 / 康鹭地图 / 人物档案 / 声明与方法）。',
      '用简体中文，语气平实，控制在 200 字以内，必要时分点。不要复述本段说明。',
      '',
      '=== 相关资料 ===',
      top.length ? top.join('\n') : '（本次没有检索到相关片段，请据实说明资料中没有记录）'
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

  function build() {
    var launch = document.createElement('button');
    launch.className = 'ai-launch';
    launch.type = 'button';
    launch.setAttribute('aria-label', DEFAULTS.title);
    launch.innerHTML = mascotHTML() + '<span class="ai-launch-txt">AI 问答</span>';

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

    document.body.appendChild(launch);
    document.body.appendChild(panel);

    els = {
      launch: launch,
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

    els.launch.addEventListener('click', function () { toggle(true); });
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
  }

  function toggle(open) {
    els.panel.classList.toggle('open', open);
    els.panel.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.documentElement.classList.toggle('ai-open', open);
    if (open) setTimeout(function () { els.input.focus(); }, 260);
  }

  function bubble(who, text) {
    var d = document.createElement('div');
    d.className = 'ai-msg ai-' + who;
    d.textContent = text;
    els.log.appendChild(d);
    els.log.scrollTop = els.log.scrollHeight;
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
      },
      function (full) {
        out.classList.remove('typing');
        if (full) out.textContent = full;
        else if (!out.textContent) out.textContent = '（没有返回内容）';
        busy = false;
        els.send.disabled = false;
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
