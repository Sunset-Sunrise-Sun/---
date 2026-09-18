/* ============================================================
   康鹭记忆 · 人物档案 展示逻辑
   ------------------------------------------------------------
   数据在 assets/js/people-data.js（4 份田野档案）。
   本文件负责：列表页的筛选与检索、详情页渲染、首页轮播。
   依赖 main.js 提供的 $ / $$ / initReveal。
   ============================================================ */

/* 筛选类别与配色 */
const CATS = ['散工', '长工', '厂二代'];
const CAT_COLOR = {
  '散工':   'var(--red)',
  '长工':   'var(--indigo)',
  '厂二代': 'var(--ochre)'
};

/* 本文件自带的转义，避免与 main.js 的同名工具互相影响 */
const escHtml = s => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const personById = id => PEOPLE.find(p => p.id === id);
const colorOf = p => p.color || CAT_COLOR[p.cat] || 'var(--ink-3)';
/* 头像里放档案序号（一/二/三/四）：四份档案的标签都以「湖」或「厂」开头，
   取首字没有区分度；序号既好认，也与卡片底部的编号一致 */
const avatarText = p => p.no || '档';

/* 卡片（列表页与首页轮播共用） */
function cardHTML(p, tag){
  return `
    <a class="pcard${tag ? ' ' + tag : ''}" href="person.html?id=${encodeURIComponent(p.id)}">
      <div class="top">
        <div class="avatar" style="background:${colorOf(p)}">${escHtml(avatarText(p))}</div>
        <div class="who">
          <h3>${escHtml(p.label)}</h3>
          <div class="tagline">${escHtml(p.sub)}</div>
        </div>
      </div>
      <div class="quote">${escHtml(p.quote)}</div>
      <div class="tags">${(p.tags || []).map(t => `<span>${escHtml(t)}</span>`).join('')}</div>
      <div class="bar" style="background:${colorOf(p)}"></div>
      <div class="foot"><span>档案 ${escHtml(p.no)} · ${escHtml(p.cat)}</span><span class="read">阅读完整档案 →</span></div>
    </a>`;
}

/* ---------- 列表页 ---------- */
function initPeopleList(){
  const grid = $('#peopleGrid');
  if (!grid) return;
  const filters = $('#pFilters');
  const search = $('#pSearch');
  const count = $('#pCount');
  const state = { cat: '全部', q: '' };

  const haystack = p => [
    p.label, p.sub, p.lead, p.quote,
    (p.tags || []).join(' '),
    (p.facts || []).map(f => f.join(' ')).join(' ')
  ].join(' ').toLowerCase();

  const render = () => {
    const q = state.q.trim().toLowerCase();
    const list = PEOPLE.filter(p =>
      (state.cat === '全部' || p.cat === state.cat) && (!q || haystack(p).includes(q))
    );
    if (count) count.textContent = list.length;
    grid.innerHTML = list.length
      ? list.map(p => cardHTML(p, 'reveal')).join('')
      : '<p class="empty">没有匹配的档案。试试其他关键词，或点「全部」。</p>';
  };

  if (filters){
    const counts = {};
    PEOPLE.forEach(p => { counts[p.cat] = (counts[p.cat] || 0) + 1; });
    const items = ['全部', ...CATS.filter(c => counts[c])];
    filters.innerHTML = items.map(c => `
      <button class="chip${c === state.cat ? ' on' : ''}" data-cat="${escHtml(c)}">
        ${c === '全部' ? '' : `<i class="swatch" style="background:${CAT_COLOR[c] || 'var(--ink-3)'}"></i>`}${escHtml(c)}
        <b style="font-weight:600;opacity:.55">${c === '全部' ? PEOPLE.length : counts[c]}</b>
      </button>`).join('');
    filters.addEventListener('click', e => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      state.cat = btn.dataset.cat;
      $$('.chip', filters).forEach(x => x.classList.toggle('on', x === btn));
      render(); initReveal();
    });
  }

  if (search){
    let timer = 0;
    search.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => { state.q = search.value; render(); initReveal(); }, 180);
    });
  }

  render();
}

/* ---------- 详情页 ---------- */
function initPersonDetail(){
  const box = $('#personDetail');
  if (!box) return;
  const id = new URLSearchParams(location.search).get('id') || (PEOPLE[0] && PEOPLE[0].id);
  const p = personById(id);
  if (!p){
    box.innerHTML = `<p class="empty">没有找到这份档案。<a href="people.html" style="color:var(--red)">返回人物档案</a></p>`;
    return;
  }
  document.title = `${p.label} · 人物档案 · 康鹭记忆`;

  const i = PEOPLE.indexOf(p);
  const prev = PEOPLE[(i - 1 + PEOPLE.length) % PEOPLE.length];
  const next = PEOPLE[(i + 1) % PEOPLE.length];

  box.innerHTML = `
    <p class="crumb"><a href="index.html">首页</a> / <a href="people.html">人物档案</a> / 档案 ${escHtml(p.no)}</p>

    <div class="pd-head">
      <div class="avatar" style="background:${colorOf(p)}">${escHtml(avatarText(p))}</div>
      <div>
        <p class="eyebrow">档案 ${escHtml(p.no)} · ${escHtml(p.cat)}</p>
        <h1>${escHtml(p.label)}</h1>
        <p class="pd-sub">${escHtml(p.sub)}</p>
      </div>
    </div>

    <div class="pd-tags">${(p.tags || []).map(t => `<span>${escHtml(t)}</span>`).join('')}</div>

    <blockquote class="pull">${escHtml(p.quote)}<cite>${escHtml(p.source)}</cite></blockquote>

    <p class="lead">${escHtml(p.lead)}</p>

    <h3 class="sub-head"><em>Facts</em>基本信息</h3>
    <div class="meta-grid">
      ${(p.facts || []).map(f => `<div><div class="k">${escHtml(f[0])}</div><div class="v">${escHtml(f[1])}</div></div>`).join('')}
    </div>

    <h3 class="sub-head"><em>Story</em>完整档案</h3>
    <div class="pd-story">
      ${(p.story || []).map(s => `<p>${escHtml(s)}</p>`).join('')}
    </div>

    <p class="pd-note">
      为保护受访者，本站不记录姓名、住址、厂名等可识别信息；档案以「身份标签 + 叙述」的方式呈现。
      处理原则见<a href="statement.html">声明与方法</a>。
    </p>

    <div class="pd-nav">
      <a class="btn ghost" href="person.html?id=${encodeURIComponent(prev.id)}">← 档案 ${escHtml(prev.no)}</a>
      <a class="btn ghost" href="people.html">返回档案列表</a>
      <a class="btn ghost" href="person.html?id=${encodeURIComponent(next.id)}">档案 ${escHtml(next.no)} →</a>
    </div>`;
}

/* ---------- 首页轮播 ---------- */
function initPeopleCarousel(){
  const track = $('#pplTrack');
  if (!track) return;

  track.innerHTML = PEOPLE
    .map(p => `<div class="ppl-slide">${cardHTML(p)}</div>`)
    .join('');

  const slides = $$('.ppl-slide', track);
  if (!slides.length) return;

  const dotBox = $('#pplDots');
  if (dotBox){
    dotBox.innerHTML = slides
      .map((_, i) => `<button type="button" aria-label="第 ${i + 1} 份档案"${i === 0 ? ' class="on"' : ''}></button>`)
      .join('');
  }
  const dots = dotBox ? $$('button', dotBox) : [];

  let cur = -1;
  const goTo = i => {
    i = Math.max(0, Math.min(slides.length - 1, i));
    const s = slides[i];
    track.scrollTo({ left: s.offsetLeft - (track.clientWidth - s.offsetWidth) / 2, behavior: 'smooth' });
  };

  const sync = () => {
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0, bestD = Infinity;
    slides.forEach((s, i) => {
      const d = Math.abs(s.offsetLeft + s.offsetWidth / 2 - mid);
      if (d < bestD){ bestD = d; best = i; }
    });
    if (best === cur) return;
    cur = best;
    slides.forEach((s, i) => s.classList.toggle('on', i === best));
    dots.forEach((d, i) => d.classList.toggle('on', i === best));
  };

  let raf = 0;
  track.addEventListener('scroll', () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; sync(); }); }, { passive:true });
  window.addEventListener('resize', sync);
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  const prev = $('#pplPrev'), next = $('#pplNext');
  if (prev) prev.addEventListener('click', () => goTo(cur - 1));
  if (next) next.addEventListener('click', () => goTo(cur + 1));
  sync();
}
