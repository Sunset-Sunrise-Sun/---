#!/usr/bin/env node
/*
 * 站点体检 —— 一条命令确认「康鹭记忆」线上是否仍然正常。
 *
 * 用法：  node 站点体检.js
 * 退出码：0 = 全部正常；1 = 有项目失败（可直接用于定时任务告警）
 *
 * 检查内容：
 *   ① 7 个页面是否 200 且体积合理（不是 GitHub 的 404 页）
 *   ② 关键资源（样式、脚本、字体、分享图）是否 200
 *   ③ 分享元数据是否仍指向新站（防止被人改回旧站）
 *   ④ AI 小白鹭的后端是否可用（这一步失败**不代表站点坏了**——
 *      站内浏览与检索照常，只是 AI 会退化成「站内检索模式」）
 *   ⑤ 根网址跳转是否仍然指向新版
 *
 * 网络说明：如果本机需要代理才能访问 github.io，先设环境变量
 *   HTTPS_PROXY=http://127.0.0.1:7890
 */
'use strict';

const BASE = 'https://sunset-sunrise-sun.github.io/---/kanglu-terminal/';
const ROOT = 'https://sunset-sunrise-sun.github.io/---/';
const AI = 'https://kanglu-ai.kanglu-memory.workers.dev/chat';

const PAGES = ['index.html', 'map.html', 'background.html', 'chronicle.html', 'people.html', 'person.html', 'statement.html'];
const ASSETS = [
  'assets/css/style.css',
  'assets/css/brush.css',
  'assets/js/main.js',
  'assets/js/ai.js',
  'assets/fonts/brush-heading.woff2',
  'assets/img/share-card.jpg',
  'assets/img/field/arch-lujiang.jpg'
];

/* 代理：Node 的 fetch 默认**不认** HTTPS_PROXY，本机又必须走代理才能访问 github.io。
   为了做到零依赖，这里用内置 http/net 模块实现一个极小的 CONNECT 隧道，
   直接把请求走代理发出（不使用 fetch）。 */
const http = require('http');
const https = require('https');
const net = require('net');
const { URL } = require('url');

function proxyUrl() {
  return process.env.HTTPS_PROXY || process.env.https_proxy ||
         process.env.HTTP_PROXY || process.env.http_proxy || '';
}

/* 极简 GET/POST，可选走 HTTP 代理的 CONNECT 隧道。返回 {status, headers, body} */
function request(urlStr, opts = {}) {
  const u = new URL(urlStr);
  const isHttps = u.protocol === 'https:';
  const proxy = proxyUrl();
  const port = u.port || (isHttps ? 443 : 80);
  const body = opts.body || null;

  const headers = Object.assign({
    'User-Agent': 'kanglu-health-check/1.0',
    'Accept': '*/*'
  }, opts.headers || {});
  if (body) headers['Content-Length'] = Buffer.byteLength(body);

  return new Promise((resolve, reject) => {
    /* send 必须定义在 Promise 内部，才能拿到 resolve / reject
       （早先写在外面，运行时抛 "reject is not defined"） */
    const send = (socket, host, servername) => {
      const mod = isHttps ? https : http;
      const req = mod.request({
        host, port, path: u.pathname + u.search, method: opts.method || 'GET',
        headers, socket, agent: false, servername
      }, (res) => {
        let data = '';
        res.setEncoding('utf8');
        res.on('data', (c) => { data += c; });
        res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
      });
      req.on('error', reject);
      if (body) req.write(body);
      req.end();
    };

    if (!proxy) { send(null, u.hostname, u.hostname); return; }
    const p = new URL(proxy);
    const sock = net.connect(Number(p.port), p.hostname, () => {
      sock.write('CONNECT ' + u.hostname + ':' + port + ' HTTP/1.1\r\nHost: ' + u.hostname + ':' + port + '\r\n\r\n');
    });
    sock.once('data', (chunk) => {
      const head = chunk.toString('utf8');
      if (!/^HTTP\/1\.[01] 200/.test(head)) { sock.destroy(); reject(new Error('代理 CONNECT 失败: ' + head.split('\r\n')[0])); return; }
      send(sock, u.hostname, u.hostname);
    });
    sock.on('error', (e) => reject(new Error('代理连接失败: ' + e.message)));
    sock.setTimeout(25000, () => { sock.destroy(); reject(new Error('超时')); });
  });
}

(async () => {
  const proxy = proxyUrl();
  console.log('康鹭记忆 · 站点体检  ' + new Date().toLocaleString('zh-CN'));
  if (proxy) console.log('代理：' + proxy);
  console.log('');

  let fail = 0;
  const bad = (msg) => { fail++; console.log('  ✗ ' + msg); };
  const ok = (msg) => console.log('  ✓ ' + msg);

  console.log('① 页面');
  for (const p of PAGES) {
    try {
      const r = await request(BASE + p);
      const body = r.body;
      const isShell = /<html/i.test(body);
      if (r.status !== 200) bad(p + '  HTTP ' + r.status);
      else if (!isShell) bad(p + '  返回的不是页面（可能被 CDN 拦截）');
      else ok(p.padEnd(18) + 'HTTP 200  ' + String(body.length).padStart(6) + ' 字符');
    } catch (e) { bad(p + '  请求失败：' + e.message); }
  }

  console.log('\n② 关键资源');
  for (const a of ASSETS) {
    try {
      const r = await request(BASE + a);
      if (r.status !== 200) bad(a + '  HTTP ' + r.status);
      else ok(a.padEnd(38) + 'HTTP 200');
    } catch (e) { bad(a + '  请求失败：' + e.message); }
  }

  console.log('\n③ 分享元数据');
  try {
    const html = (await request(BASE + 'index.html')).body;
    const ogUrl = (html.match(/property="og:url" content="([^"]+)"/) || [])[1] || '';
    const ogTitle = (html.match(/property="og:title" content="([^"]+)"/) || [])[1] || '';
    if (ogUrl.includes('kanglu-terminal')) ok('og:url 指向新站：' + ogUrl);
    else bad('og:url 不是新站：' + ogUrl);
    if (ogTitle) ok('og:title：' + ogTitle);
    else bad('缺少 og:title');
  } catch (e) { bad('读取首页失败：' + e.message); }

  console.log('\n④ AI 后端（失败不影响浏览与检索）');
  try {
    const r = await request(AI, {
      method: 'POST',
      headers: { 'content-type': 'application/json', Origin: 'https://sunset-sunrise-sun.github.io' },
      body: JSON.stringify({ messages: [{ role: 'user', content: '只回复两个字：可用' }], max_tokens: 16, temperature: 0.2 })
    });
    if (r.status === 200) ok('AI 可用（Worker HTTP 200）');
    else bad('AI 不可用 HTTP ' + r.status + ' —— 站点仍可浏览，AI 会退化为站内检索模式');
  } catch (e) { bad('AI 请求失败：' + e.message + ' —— 站点仍可浏览'); }

  console.log('\n⑤ 根网址跳转');
  try {
    const html = (await request(ROOT)).body;
    if (html.includes('kanglu-terminal')) ok('根网址仍跳转到新版');
    else bad('根网址未跳转到注册的新版，当前内容片段：' + html.slice(0, 80).replace(/\s+/g, ' '));
  } catch (e) { bad('根网址请求失败：' + e.message); }

  console.log('\n' + (fail ? '★ 有 ' + fail + ' 项需要处理' : '全部正常 ✓'));
  process.exit(fail ? 1 : 0);
})();
