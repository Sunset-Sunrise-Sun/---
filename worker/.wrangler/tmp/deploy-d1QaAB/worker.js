var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker.js
var CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Max-Age": "86400"
};
function json(obj, status, extra) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: Object.assign({ "Content-Type": "application/json; charset=utf-8" }, CORS, extra || {})
  });
}
__name(json, "json");
var worker_default = {
  async fetch(request, env) {
    if (request.method === "OPTIONS") return new Response(null, { headers: CORS });
    if (request.method !== "POST") return json({ error: "\u53EA\u63A5\u53D7 POST" }, 405);
    const url = new URL(request.url);
    if (url.pathname !== "/chat" && url.pathname !== "/") {
      return json({ error: "\u8DEF\u5F84\u5E94\u4E3A /chat" }, 404);
    }
    if (!env.DEEPSEEK_KEY) {
      return json({ error: "Worker \u672A\u914D\u7F6E DEEPSEEK_KEY\uFF0C\u8BF7\u5728 Cloudflare \u540E\u53F0\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF" }, 500);
    }
    const allow = String(env.ALLOW_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
    const origin = request.headers.get("Origin") || "";
    if (allow.length && !allow.includes(origin)) {
      return json({ error: "\u6765\u6E90\u672A\u5728 ALLOW_ORIGINS \u767D\u540D\u5355\u5185\uFF1A" + (origin || "(\u65E0)") }, 403);
    }
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return json({ error: "\u8BF7\u6C42\u4F53\u4E0D\u662F\u5408\u6CD5 JSON" }, 400);
    }
    if (!Array.isArray(body.messages) || !body.messages.length) {
      return json({ error: "\u7F3A\u5C11 messages" }, 400);
    }
    const upstreamUrl = String(env.UPSTREAM || "https://api.deepseek.com").replace(/\/$/, "") + "/chat/completions";
    let upstream;
    try {
      upstream = await fetch(upstreamUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + env.DEEPSEEK_KEY
        },
        body: JSON.stringify({
          model: env.MODEL || "deepseek-chat",
          messages: body.messages,
          temperature: body.temperature == null ? 0.3 : body.temperature,
          max_tokens: body.max_tokens == null ? 800 : body.max_tokens,
          stream: !!body.stream
        })
      });
    } catch (e) {
      return json({ error: "\u4E0A\u6E38\u8BF7\u6C42\u5931\u8D25\uFF1A" + e.message }, 502);
    }
    const res = new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: upstream.headers
    });
    Object.keys(CORS).forEach((k) => res.headers.set(k, CORS[k]));
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
