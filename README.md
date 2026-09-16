# 康鹭记忆 · Kanglu Memory

一个关于广州海珠**康鹭片区**（康乐村、鹭江村）制衣产业与零工市场的数字人文网站。
用结构化数据、空间标注与人物口述，保存一场正在发生的城市变迁。

## 在线访问

开启 GitHub Pages 后：

**https://sunset-sunrise-sun.github.io/---/**

（根目录的 `index.html` 会自动跳到 `kanglu-dh/index.html`。）

开启方式：仓库 **Settings → Pages → Source** 选 `Deploy from a branch`，
分支选 `main`、目录选 `/ (root)`，保存后等一两分钟。

## 本地查看

不需要服务器、不需要安装任何东西：**双击 `kanglu-dh/index.html`** 即可
（整站零依赖，不联网、不加载任何外部资源）。

## 目录

```
kanglu-dh/
  index.html        首页：封面、康鹭简介、数字特征、板块入口、发展历程、人物档案
  background.html   背景资料：区位、产业逻辑、空间形态、编年、乡土词条、改造与政策、现场材料、参考文献
  map.html          康鹭地图：关系示意图（15 个空间节点）+ 规划图对照
  people.html       人物档案：4 份田野访谈
  person.html       单份档案详情（?id=a1 … a4）
  statement.html    声明与方法：资料来源、隐私与伦理、数据范围、AI 边界、版权
  assets/css/       样式
  assets/js/        数据（data.js / people-data.js）与交互
  assets/img/       田野影像、展板、封面
DEVNOTES.md         开发日志（排查记录、验证方法、待办）
```

## AI 问答（右下角的小白鹭）

点右下角的**小白鹭**打开对话框，可以拖动它；它的头会一直朝着鼠标。

- **未配置接口时**：走「本地检索」——从站内数据里找最相关的片段作答，并明确标注
  「未接入 AI 模型」，不会冒充 AI，也不需要任何密钥
- **要接真实大模型**：把 `kanglu-dh/assets/js/ai-config.js` 按
  `ai-config.example.js` 的说明填写。接口按 OpenAI 兼容格式（`/chat/completions` + 流式），
  DeepSeek、通义、智谱、Moonshot 等都通用

**关于密钥**：本地演示可以直连，密钥写在 `ai-config.local.js`（该文件已被 gitignore，
不会入库、也不会被部署）。线上要让 AI 真正工作，必须走一个持密钥的代理——
代码与部署步骤见 [`worker/`](worker/README.md)，里面有一份**已在本地跑通的** Cloudflare Worker
（预检、正常调用、流式透传、来源白名单都验过）。
**不要把密钥写进会发布的文件里。**

## 分享给别人看

**开启 GitHub Pages**（仓库 Settings → Pages → Source 选 `main` / `(root)`），
链接即为 `https://sunset-sunrise-sun.github.io/---/`。

线上没有密钥文件，所以分享出去的版本里 AI 会走「本地检索」模式（界面、动效、
拖动、转头、气泡都正常）。要让线上的 AI 也接真实模型，先把 `worker/` 部署好，
再把 Worker 地址填进 `ai-config.js` 的 `proxyUrl`，然后重新推送。

## 说明

本站图片均为课题组田野拍摄；涉及的电话号码已打码，人物以中远景为主。
引用与转载要求见站内「声明与方法」页。
