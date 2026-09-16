/* ============================================================
   康鹭记忆 · AI 问答 接口配置（示例模板）
   ------------------------------------------------------------
   用法：把本文件复制为同目录下的 ai-config.js，填入下面的值。
        ai-config.js 已在 .gitignore 中，不会被提交，Key 不会外泄。
        不填也能用：页面会自动退化为「本地检索」，从站内数据里找答案。

   接口格式：OpenAI 兼容（POST /chat/completions，stream）。
   DeepSeek、通义千问、智谱、Moonshot、OpenAI 等都支持，换家只改下面三行。

   ⚠️ 两种用法只能选一种：
   ────────────────────────────────────────────────────────────
   方式一：浏览器直连（只适合本地演示）
     把 baseUrl / apiKey / model 填上即可。
     缺点：Key 会出现在浏览器里，任何打开页面的人都能从网络面板看到；
           且不少厂商不允许浏览器直接跨域调用（CORS），可能报 "Failed to fetch"。
     → 所以线上部署请用方式二。

   方式二：走自建代理（推荐，线上必须用这个）
     只需要填 proxyUrl，Key 存在代理端（例如 Cloudflare Worker 的环境变量）。
     代理接收 { messages, temperature, max_tokens }，转发给大模型，
     并把上游的流式响应原样透传回来即可。Cloudflare Worker 示例：

       export default {
         async fetch(req, env) {
           if (req.method === 'OPTIONS') {
             return new Response(null, { headers: cors() });
           }
           const { messages, temperature, max_tokens } = await req.json();
           const upstream = await fetch('https://api.deepseek.com/v1/chat/completions', {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${env.DEEPSEEK_KEY}`   // 在 Worker 里配环境变量
             },
             body: JSON.stringify({
               model: 'deepseek-chat',
               messages, temperature, max_tokens, stream: true
             })
           });
           const res = new Response(upstream.body, upstream);
           Object.entries(cors()).forEach(([k, v]) => res.headers.set(k, v));
           return res;
         }
       };
       const cors = () => ({
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Headers': 'Content-Type',
         'Access-Control-Allow-Methods': 'POST, OPTIONS'
       });
     （部署后把 Worker 的地址填到下面的 proxyUrl。）
   ============================================================ */

window.KL_AI = {

  /* ---------- 方式二：自建代理（推荐） ---------- */
  proxyUrl:  '',            // 例如 'https://kanglu-ai.你的账号.workers.dev'
  proxyPath: '/chat',       // 代理接收路径，默认 /chat

  /* ---------- 方式一：浏览器直连（本地演示用） ---------- */
  baseUrl:   '',            // 例如 'https://api.deepseek.com/v1'
  apiKey:    '',            // 例如 'sk-xxxxxxxx'
  model:     '',            // 例如 'deepseek-chat'

  /* ---------- 可选：外观与行为 ---------- */
  title:     '康鹭摸摸问',   // 对话框标题
  intro:     '关于康鹭片区，问点具体的。',
  placeholder: '问：这里为什么叫「制衣村」？',
  mascotImg: '',            // 卡通形象图片路径，例如 'assets/img/mascot.png'；留空则用文字按钮
  mascotText: '问',          // 没有图片时按钮上显示的字
  temperature: 0.3,
  maxTokens: 800,
  presets: [                // 预设问题（点一下直接问）
    '这里为什么叫「制衣村」？',
    '「小单快反」是什么意思？',
    '招工广场是怎么来的？',
    '旧改现在到哪一步了？',
    '受访者一共有几位？他们分别是谁？'
  ]
};
