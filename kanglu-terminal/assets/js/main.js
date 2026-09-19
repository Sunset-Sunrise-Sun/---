/* ============================================================
   康鹭记忆 · 公共脚本
   ============================================================ */

/* ---------- 工具 ---------- */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));

/* ---------- 顶栏 ---------- */
function initHeader(){
  const cur = document.body.dataset.page || 'home';
  $$('.nav a').forEach(a => {
    if (a.dataset.nav === cur) a.classList.add('on');
  });
  const toggle = $('.nav-toggle');
  const nav = $('.nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.addEventListener('click', e => { if (e.target.tagName === 'A') nav.classList.remove('open'); });
  }
}

/* ---------- 滚动显现 ---------- */
/* 单例 observer：可重复调用（筛选后重新渲染卡片时不会堆积 observer、也不会漏挂新节点） */
let _revealIO = null;
function initReveal(){
  const items = $$('.reveal:not(.in):not([data-obs])');
  if (!items.length) return;
  if (!('IntersectionObserver' in window)){ items.forEach(i => i.classList.add('in')); return; }
  if (!_revealIO){
    _revealIO = new IntersectionObserver((ents) => {
      ents.forEach((en, i) => {
        if (en.isIntersecting){
          setTimeout(() => en.target.classList.add('in'), i * 60);
          _revealIO.unobserve(en.target);
        }
      });
    }, { threshold:.12, rootMargin:'0px 0px -40px 0px' });
  }
  items.forEach(i => { i.dataset.obs = '1'; _revealIO.observe(i); });
}

/* ---------- 数字滚动 ---------- */
function initCounters(){
  const nodes = $$('[data-count]:not([data-cnt])');
  if (!nodes.length) return;
  const run = el => {
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.count.split('.')[1] || '').length;
    const dur = 1100, t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * e).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(dec);
    };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)){ nodes.forEach(el => { el.dataset.cnt = '1'; run(el); }); return; }
  const io = new IntersectionObserver(ents => {
    ents.forEach(en => { if (en.isIntersecting){ run(en.target); io.unobserve(en.target); } });
  }, { threshold:.5 });
  nodes.forEach(n => { n.dataset.cnt = '1'; io.observe(n); });
}

/* ---------- 进度条动画 ---------- */
/* 注意：.bar-fill 的初始宽度是 0，元素本身是零面积。
   零面积目标在部分浏览器里不会触发带 threshold 的交叉回调，会导致进度条永远是空的，
   因此这里改为观察有真实面积的 .bar-track（不存在时才回退到父节点），阈值降到 0。 */
function initBars(){
  const fills = $$('.bar-fill[data-w]');
  if (!fills.length) return;
  const set = f => { f.style.width = f.dataset.w + '%'; };
  if (!('IntersectionObserver' in window)){ fills.forEach(set); return; }
  const io = new IntersectionObserver(es => {
    es.forEach(e => {
      if (!e.isIntersecting) return;
      const f = e.target.classList.contains('bar-fill')
        ? e.target
        : e.target.querySelector('.bar-fill[data-w]');
      if (f && f.dataset.w) set(f);
      io.unobserve(e.target);
    });
  }, { threshold:0 });
  fills.forEach(f => io.observe(f.closest('.bar-track') || f.parentElement || f));
}

/* ---------- 统计条 ---------- */
function renderStats(sel){
  const box = $(sel); if (!box) return;
  box.innerHTML = STATS.map(s => `
    <div class="stat reveal">
      <div class="v">${s.suffix}<span data-count="${s.num}">0</span><span class="u">${s.unit}</span></div>
      <div class="l">${s.label}</div>
      <div class="d">${s.desc}</div>
    </div>`).join('');
}

/* ---------- 时间轴 ---------- */
function renderTimeline(sel, limit){
  const box = $(sel); if (!box) return;
  const list = limit ? TIMELINE.slice(-limit) : TIMELINE;
  box.innerHTML = list.map((t, i) => `
    <li class="tl-item reveal ${limit && i < list.length - 4 ? 'ghost' : ''}">
      <span class="tl-year">${t.year}</span>
      <span class="tl-dot"></span>
      <div class="tl-body">
        <span class="tl-tag">${t.tag} · ${t.phase}</span>
        <h4>${t.title}</h4>
        <p>${t.body}</p>
      </div>
    </li>`).join('');
}

/* ---------- 发展历程（首页纵向时间轴） ---------- */
/* 与 renderTimeline 的区别：时段标题在左轴外侧，正文可多段，
   最后一段用 now 标记为「进行时」，节点填充朱红。 */
function renderHistory(sel){
  const box = $(sel); if (!box) return;
  box.innerHTML = HISTORY.map(h => `
    <li class="tl-item reveal${h.now ? ' now' : ''}">
      <span class="tl-year">${h.era}</span>
      <span class="tl-dot"></span>
      <div class="tl-body">
        <h4>${h.title}</h4>
        ${h.body.map(p => `<p>${p}</p>`).join('')}
      </div>
    </li>`).join('');
}

/* ---------- 产业链 ---------- */
const CHAIN_ICON = {
  fabric:'<path d="M3 6c3-2 6 2 9 0s6-2 9 0M3 12c3-2 6 2 9 0s6-2 9 0M3 18c3-2 6 2 9 0s6-2 9 0"/>',
  cut:'<path d="M4 20 20 4M8 4h12v12M4 16v4h4"/><path d="M14 4l6 6"/>',
  sew:'<path d="M8 3h8l-2 18H10L8 3z"/><path d="M10 8h4M10 13h4"/><path d="M12 3v18"/>',
  iron:'<path d="M4 14h16v6H4z"/><path d="M6 14V8a6 6 0 0112 0v6"/><path d="M9 6h6"/>',
  ship:'<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
  loop:'<path d="M20 12a8 8 0 11-3-6.2"/><path d="M20 4v5h-5"/>'
};
function renderChain(sel){
  const box = $(sel); if (!box) return;
  /* 桌面端（≥1081px）是「6 列 + 5 个箭头格」共 11 个网格项，一行摆满：
       [01]→[02]→[03]→[04]→[05]→[06]
     箭头用真实元素 .chain-arw（不是伪元素），位置由 CSS 网格决定，
     垂直方向由 .chain-arw::after 的 top 压到图标圆心线上。
     窄屏时 .chain-arw 隐藏，改由 .chain-step.has-arrow::before 画向下箭头。
     工序名称与时间戳全部来自 data.js 的 CHAIN，未新增或改动。 */
  const steps = CHAIN.map((c, i) => `
    <div class="chain-step reveal${i < CHAIN.length - 1 ? ' has-arrow' : ''}">
      <div class="chain-ic"><svg viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">${CHAIN_ICON[c.icon] || ''}</svg></div>
      <span class="chain-time">${c.time}</span>
      <h5>${c.step} ${c.title}</h5>
      <p>${c.desc}</p>
    </div>`);
  box.innerHTML = steps
    .map((s, i) => (i < steps.length - 1 ? s + '<div class="chain-arw" aria-hidden="true"></div>' : s))
    .join('');
}

/* ---------- 词条 ---------- */
function renderGlossary(sel){
  const box = $(sel); if (!box) return;
  box.innerHTML = GLOSSARY.map(g => `
    <dl class="gloss-item reveal">
      <dt><span></span>${g.term}</dt>
      <dd>${g.def}</dd>
    </dl>`).join('');
}

/* ---------- 参考文献 ---------- */
function renderRefs(sel){
  const box = $(sel); if (!box) return;
  box.innerHTML = REFS.map(r => `<li><b>${r.t}</b><span>${r.d}</span></li>`).join('');
}

/* ---------- 封面 ---------- */
/* 两层效果：
   1) 顶栏透明态切换——封面底部仍在顶栏之下时顶栏透明，滚过封面后恢复纸感实底
   2) 滚动视差——封面图以 0.08 系数缓慢位移，制造纵深（.cover-media 上下各留 10% 余量） */
function initCover(){
  const cover = $('.cover');
  if (!cover) return;
  const media = $('.cover-media', cover);
  const head  = $('.site-head');
  const calm  = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (head){
    const sync = () => head.classList.toggle('head-clear', cover.getBoundingClientRect().bottom > head.offsetHeight + 20);
    sync();
    window.addEventListener('scroll', sync, { passive:true });
    window.addEventListener('resize', sync);
  }

  if (media && !calm){
    let raf = 0;
    const move = () => {
      raf = 0;
      const h = cover.offsetHeight;
      const y = Math.min(Math.max(-cover.getBoundingClientRect().top, 0), h);
      media.style.transform = `translate3d(0, ${(y * .08).toFixed(2)}px, 0)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(move); };
    window.addEventListener('scroll', onScroll, { passive:true });
    window.addEventListener('resize', onScroll);
    move();
  }
}

/* ---------- 左侧小节导航（滚动进度） ---------- */
/* 1) 用 IntersectionObserver 把视口中线所在的小节标为当前项
   2) 轴上从顶端到当前阅读位置填充朱红，作为进度 */
function initSideNav(){
  const nav = $('.side-nav');
  if (!nav) return;
  /* 导航项从 <a> 改成 <div class="item">：因为收起时它是一条细轴，
     展开靠 :hover 而不是靠链接本身；点击/回车仍然跳到对应小节。
     （改成 div 的原因见 style.css 里 .side-nav 的注释：a 元素在收起宽度下
      会被 overflow 裁成零宽，点击区域也没了。） */
  const links = $$('[data-side]', nav);
  if (!links.length) return;
  const targets = links.map(a => document.getElementById(a.dataset.side)).filter(Boolean);
  if (!targets.length) return;
  const fill = $('.track i', nav);

  links.forEach(a => {
    if (!document.getElementById(a.dataset.side)) a.style.display = 'none';
    const go = () => {
      const t = document.getElementById(a.dataset.side);
      if (t) t.scrollIntoView({ behavior:'smooth', block:'start' });
    };
    a.addEventListener('click', go);
    a.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); }
    });
  });

  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver(ents => {
      ents.forEach(en => {
        if (!en.isIntersecting) return;
        links.forEach(a => a.classList.toggle('on', a.dataset.side === en.target.id));
      });
    }, { rootMargin:'-45% 0px -50% 0px', threshold:0 });
    targets.forEach(t => io.observe(t));
  }

  if (fill){
    let raf = 0;
    const update = () => {
      raf = 0;
      const top = targets[0].getBoundingClientRect().top + window.scrollY;
      const last = targets[targets.length - 1];
      const bottom = last.getBoundingClientRect().bottom + window.scrollY;
      const p = (window.scrollY + window.innerHeight * .5 - top) / Math.max(1, bottom - top);
      fill.style.height = (Math.max(0, Math.min(1, p)) * 100).toFixed(1) + '%';
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener('scroll', onScroll, { passive:true });
    window.addEventListener('resize', onScroll);
    update();
  }
}

/* ---------- 小屏的小节跳转面板（右下角「带路」按钮弹出） ----------
   大屏用左侧细轴导航（.side-nav），小屏（≤1199px）细轴隐藏，
   改由这个面板提供同样的小节跳转。点外面或按 Esc 收起。 */
function initNavSheet(){
  const fab = $('#navSheetFab');
  const sheet = $('#subnavSheet');
  if (!fab || !sheet) return;

  function setOpen(open){
    sheet.hidden = !open;
    fab.setAttribute('aria-expanded', open ? 'true' : 'false');
    fab.textContent = open ? '收起' : '带路';
  }
  fab.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(sheet.hidden);
  });
  sheet.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);   // 点条目跳走后就收起
    e.stopPropagation();
  });
  document.addEventListener('click', () => { if (!sheet.hidden) setOpen(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
}

/* ---------- 启动 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initCover();
  initSideNav();
  initNavSheet();
  initReveal();
  initCounters();
  initBars();
});
