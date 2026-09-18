/* 三维场景入口（供上一版页面以传统 script 方式调用）
   打包命令：node build-3d.js  → 生成 assets/js/scene-bundle.js  */
import { initScene, disposeScene } from './scene3d.js';
window.KangluScene = { initScene, disposeScene };