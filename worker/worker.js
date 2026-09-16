/* ============================================================
   康鹭记忆 · AI 问答代理（Cloudflare Worker）
   ------------------------------------------------------------
   作用：把 API Key 留在服务端，前端只跟这个 Worker 说话。
   为什么必须有它：浏览器的代码是公开的，Key 写进前端等于公开泄露。
   （本项目实测 DeepSeek 支持跨域，所以浏览器直连在技术上可行——
     但那只适合你自己机器上的本地演示，线上绝不能用。）

   接口：POST /chat
     请求体 { messages, temperature?, max_tokens?, stream? }
     响应   原样透传上游（含 text/event-stream 流式响应）

   需要的环境变量（在 Cloudflare 后台配置，不要写进这个文件）：
     DEEPSEEK_KEY     必填，你的 API Key
     MODEL            选填，默认 deepseek-chat
     UPSTREAM         选填，默认 https://api.deepseek.com
     ALLOW_ORIGINS    选填，允许的来源，逗号分隔。
                      例如 "https://sunset-sunrise-sun.github.io,null"
                      留空则不校验来源（方便调试，但别人也能白用你的额度）
   ============================================================ */

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400'
};

function json(obj, status, extra) {
  return new Response(JSON.stringify(obj), {
    status: status,
    headers: Object.assign({ 'Content-Type': 'application/json; charset=utf-8' }, CORS, extra || {})
  });
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'POST') return json({ error: '只接受 POST' }, 405);

    const url = new URL(request.url);
    if (url.pathname !== '/chat' && url.pathname !== '/') {
      return json({ error: '路径应为 /chat' }, 404);
    }

    if (!env.DEEPSEEK_KEY) {
      return json({ error: 'Worker 未配置 DEEPSEEK_KEY，请在 Cloudflare 后台添加环境变量' }, 500);
    }

    /* 来源校验：Origin 可以被非浏览器客户端伪造，所以它只能挡住顺手盗用，
       挡不住有意攻击。真要防滥用得再加限流（例如按 IP 计数）。 */
    const allow = String(env.ALLOW_ORIGINS || '')
      .split(',').map((s) => s.trim()).filter(Boolean);
    const origin = request.headers.get('Origin') || '';
    if (allow.length && !allow.includes(origin)) {
      return json({ error: '来源未在 ALLOW_ORIGINS 白名单内：' + (origin || '(无)') }, 403);
    }

    let body;
    try {
      body = await request.json();
    } catch (e) {
      return json({ error: '请求体不是合法 JSON' }, 400);
    }
    if (!Array.isArray(body.messages) || !body.messages.length) {
      return json({ error: '缺少 messages' }, 400);
    }

    const upstreamUrl = String(env.UPSTREAM || 'https://api.deepseek.com').replace(/\/$/, '')
      + '/chat/completions';

    let upstream;
    try {
      upstream = await fetch(upstreamUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + env.DEEPSEEK_KEY
        },
        body: JSON.stringify({
          model: env.MODEL || 'deepseek-chat',
          messages: body.messages,
          temperature: body.temperature == null ? 0.3 : body.temperature,
          max_tokens: body.max_tokens == null ? 800 : body.max_tokens,
          stream: !!body.stream
        })
      });
    } catch (e) {
      return json({ error: '上游请求失败：' + e.message }, 502);
    }

    /* 原样透传（流式响应的 body 是 ReadableStream，直接转发即可） */
    const res = new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: upstream.headers
    });
    Object.keys(CORS).forEach((k) => res.headers.set(k, CORS[k]));
    /* 让浏览器能读到流式响应 */
    res.headers.set('Cache-Control', 'no-store');
    return res;
  }
};
