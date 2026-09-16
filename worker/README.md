# AI 问答代理（Cloudflare Worker）

站点的 AI 问答需要一个代理来保管 API Key。**为什么必须有它**：浏览器的代码是公开的，
Key 写进前端等于公开泄露。代理把 Key 留在服务端，前端只跟代理说话。

> 实测说明：DeepSeek **支持跨域**（预检与实际响应都会回显 Origin），所以浏览器直连在技术上可行。
> 但那**只适合你自己机器上的本地演示**；线上任何形式的"把 Key 放进前端"都等于泄露。

---

## 最快的方式：在浏览器里部署（不用装任何工具，约 3 分钟）

1. 打开 <https://dash.cloudflare.com/> 注册/登录（免费账号即可）
2. 左侧 **Workers & Pages** → **Create** → **Create Worker** → 起个名字，例如 `kanglu-ai`
3. 点 **Deploy**（先部署默认模板）
4. 点 **Edit code**，把本目录 `worker.js` 的内容**整个替换进去**，再点 **Deploy**
5. 回到该 Worker 的 **Settings → Variables and Secrets**，添加：
   | 名称 | 值 | 说明 |
   |---|---|---|
   | `DEEPSEEK_KEY` | 你的 Key | 点 **Encrypt** 加密保存 |
   | `ALLOW_ORIGINS` | 例如 `https://sunset-sunrise-sun.github.io,null` | 允许的来源；`null` 是给本地 file:// 打开用的 |
   | `MODEL` | 选填，默认 `deepseek-chat` | |
6. 记下 Worker 地址，形如 `https://kanglu-ai.你的子域.workers.dev`

然后打开站点的 `kanglu-dh/assets/js/ai-config.js`，把地址填进去：

```js
window.KL_AI = {
  proxyUrl: 'https://kanglu-ai.你的子域.workers.dev',
  proxyPath: '/chat',
  ...
};
```

`ai-config.js` 是**公开配置**，会随站点发布——填地址没问题，**不要往里写 Key**。

---

## 用命令行部署（可选）

```bash
npm install -g wrangler
wrangler login
cd worker
wrangler deploy

# 配置密钥（会以加密方式保存，不落盘、不进仓库）
wrangler secret put DEEPSEEK_KEY
# 其余可选变量写在 wrangler.toml 的 [vars] 里
```

---

## 验证代理是否通了

```bash
curl -X POST https://你的worker地址/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"只回复两个字：可用"}]}'
```

- 返回一段 JSON 且 `choices[0].message.content` 有内容 → **通了**
- 返回 `来源未在 ALLOW_ORIGINS 白名单内` → 把 curl 的 `-H "Origin: null"` 加上，
  或把 ALLOW_ORIGINS 暂时留空
- 返回 `Worker 未配置 DEEPSEEK_KEY` → 第 5 步的变量没保存成功

---

## 安全须知（请务必读）

1. **Key 只存在于 Cloudflare 的环境变量里**，不要写进 `worker.js`、不要写进 `ai-config.js`、
   不要提交到仓库
2. `ALLOW_ORIGINS` **只能挡顺手盗用**：Origin 头可以被非浏览器客户端伪造。
   真要防滥用，需要再加按 IP 的限流（可用 Cloudflare 的 Rate Limiting 规则，或 Durable Objects 计数）
3. 建议在服务商后台**设置消费上限**，并定期轮换 Key
4. 这个 Worker 只代理 `/chat` 一个路径，不做别的转发

---

## 费用

Cloudflare Workers 免费额度为每天 10 万次请求，本项目的问答量远远用不到；
DeepSeek 的调用费用按 token 计，一次问答通常在千 token 量级。
