/* ============================================================
   康鹭记忆 · AI 问答
   ------------------------------------------------------------
   形态：右侧一个卡通形象（按钮），点击从右侧展开对话框，约占屏幕 1/4 宽。
   两种工作方式（按配置自动选择）：
     ① 已配置接口 → 走真实大模型，流式输出，逐字显示
     ② 未配置接口 → 退化为「本地检索」：从本站自己的数据里找出最相关的一段作答，
        并明确标注这是本地检索结果，不冒充 AI
   知识来源：本站自身的 assets/js/data.js 与 people-data.js，
   不额外维护第二套知识库，避免两处内容对不上。
   ============================================================ */
(function () {
  'use strict';

  var DEFAULTS = {
    title: '康鹭摸摸问',
    intro: '关于康鹭片区，问点具体的。',
    temperature: 0.3,
    maxTokens: 800,
    maxContextChars: 7000,
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
  var ctx = null;
  var els = null;
  var busy = false;

  /* ---------- 站点数据 → 上下文 ---------- */
  function buildContext() {
    if (ctx) return ctx;
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
      parts.push('【人物档案】' + PEOPLE.map(function (p) {
        return '档案' + p.no + '：' + p.label + '，' + p.sub + '。' + p.lead;
      }).join('\n'));
    }
    if (typeof REFS !== 'undefined') {
      parts.push('【参考文献】' + REFS.map(function (r) { return r.t; }).join('；'));
    }

    ctx = parts.join('\n\n').slice(0, DEFAULTS.maxContextChars);
    return ctx;
  }

  function systemPrompt() {
    return [
      '你是「康鹭记忆」数字人文项目的问答助手，只回答与广州海珠康鹭片区（康乐村、鹭江村）制衣产业相关的问题。',
      '回答必须依据下面提供的项目资料，不要编造数据、人名或时间。资料里没有的，就直说“项目资料里没有记录”，',
      '并提示可以看站内的哪一页。回答用简体中文，语气平实，控制在 200 字以内，必要时分点。',
      '不要复述本段说明。',
      '',
      '=== 项目资料 ===',
      buildContext()
    ].join('\n');
  }

  /* ---------- 本地检索（未配置接口时使用） ---------- */
  function splitParagraphs() {
    return buildContext()
      .split(/\n+/)
      .map(function (s) { return s.trim(); })
      .filter(function (s) { return s.length > 12; });
  }

  function localAnswer(q) {
    var paras = splitParagraphs();
    var grams = [];
    var clean = q.replace(/[？?。，,、\s]/g, '');
    for (var i = 0; i < clean.length - 1; i++) grams.push(clean.slice(i, i + 2));
    if (!grams.length) grams = [clean];

    var best = null, bestScore = 0;
    paras.forEach(function (p) {
      var score = 0;
      grams.forEach(function (g) { if (p.indexOf(g) >= 0) score += 1; });
      if (score > bestScore) { bestScore = score; best = p; }
    });

    if (!best || bestScore < 2) {
      return '这个问题在项目资料里没有找到对应记录。可以换个问法，或直接看站内的「背景资料」「康鹭地图」「人物档案」三页。';
    }
    return '（本地检索结果，未接入 AI 模型）\n\n' + best.replace(/^【[^】]+】/, '');
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

    var body = {
      messages: [
        { role: 'system', content: systemPrompt() },
        { role: 'user', content: q }
      ],
      temperature: cfg.temperature == null ? DEFAULTS.temperature : cfg.temperature,
      max_tokens: cfg.maxTokens || DEFAULTS.maxTokens,
      stream: true
    };
    /* 走自建代理时，模型名与 key 由代理端决定，前端不传 */
    if (!cfg.proxyUrl) {
      body.model = cfg.model;
    }

    var headers = { 'Content-Type': 'application/json' };
    if (!cfg.proxyUrl && cfg.apiKey) headers.Authorization = 'Bearer ' + cfg.apiKey;

    fetch(url, { method: 'POST', headers: headers, body: JSON.stringify(body) })
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        if (!res.body || !res.body.getReader) return res.json().then(function (j) {
          var t = j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content;
          onDone(t || '（接口返回为空）');
        });
        var reader = res.body.getReader();
        var dec = new TextDecoder();
        var buf = '';
        (function pump() {
          return reader.read().then(function (r) {
            if (r.done) { onDone(); return; }
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
                if (piece) onDelta(piece);
              } catch (e) { /* 忽略不完整的分片 */ }
            });
            return pump();
          });
        })();
      })
      .catch(function (e) {
        onError(e);
      });
  }

  /* ---------- 界面 ---------- */
  function build() {
    var launch = document.createElement('button');
    launch.className = 'ai-launch';
    launch.type = 'button';
    launch.setAttribute('aria-label', DEFAULTS.title);
    launch.innerHTML = (cfg.mascotImg
      ? '<img class="ai-mascot-img" src="' + cfg.mascotImg + '" alt="">'
      : '<span class="ai-mascot">' + (cfg.mascotText || DEFAULTS.mascotText) + '</span>') +
      '<span class="ai-launch-txt">AI 问答</span>';

    var panel = document.createElement('aside');
    panel.className = 'ai-panel';
    panel.setAttribute('aria-hidden', 'true');
    panel.innerHTML =
      '<div class="ai-hd">' +
        (cfg.mascotImg
          ? '<img class="ai-mascot-img" src="' + cfg.mascotImg + '" alt="">'
          : '<span class="ai-mascot">' + (cfg.mascotText || DEFAULTS.mascotText) + '</span>') +
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

    greet();

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

  function isConfigured() {
    return !!(cfg.proxyUrl || (cfg.baseUrl && cfg.apiKey && cfg.model));
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

  function greet() {
    bubble('bot', DEFAULTS.intro + (isConfigured()
      ? ''
      : '\n\n（当前未配置大模型接口，回答来自站内数据的本地检索。配置方法见 assets/js/ai-config.example.js）'));
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
  function loadConfig() {
    return new Promise(function (resolve) {
      if (window.KL_AI) return resolve(window.KL_AI);
      var s = document.createElement('script');
      s.src = 'assets/js/ai-config.js';
      s.onload = function () { resolve(window.KL_AI || {}); };
      s.onerror = function () { resolve({}); };   /* 未创建配置文件时静默降级 */
      document.head.appendChild(s);
    });
  }

  loadConfig().then(function (user) {
    cfg = Object.assign({}, DEFAULTS, user || {});
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', build);
    } else {
      build();
    }
  });
})();
