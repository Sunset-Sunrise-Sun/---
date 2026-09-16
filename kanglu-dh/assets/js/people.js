/* ============================================================
   康鹭记忆 · 人物档案卡片
   —— 本文件是「展示逻辑」，一般不需要修改。
      要改的是档案内容：assets/js/people-data.js
   ============================================================ */

/* 身份分类（如要新增分类，请同时在这里和 people-data.js 的 cat 字段中增加） */
const CATS = ['全部', '制衣厂主', '配套从业者', '制衣工人', '观察者'];

/* 未指定 color 时的自动配色 */
const CAT_COLOR = {
  '制衣厂主':   '#b3452f',
  '配套从业者': '#4a7a5c',
  '制衣工人':   '#2f6b7d',
  '观察者':     '#7a4a6b'
};

/* 示例数据提示条：换成你自己的档案内容后，把这里改成 false 即可隐藏 */
const SHOW_SAMPLE_NOTICE = true;

/* 当前正在展示的档案列表（导入 CSV 预览时会被临时替换） */
let LIST = [];
let state = { cat:'全部', q:'' };

const colorOf = p => p.color || CAT_COLOR[p.cat] || '#79705f';

/* ---------- 头像 ---------- */
function avatarHTML(p, size){
  const c = colorOf(p);
  const inner = p.photo
    ? `<img src="${p.photo}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`
    : `<span style="color:#fff">${p.name.charAt(0)}</span>`;
  return `<div class="avatar" style="width:${size};height:${size};font-size:${parseInt(size) * 0.4}px;background:${c};color:${c}">${inner}</div>`;
}

/* ---------- 卡片渲染 ---------- */
function renderPeople(){
  const grid = document.getElementById('peopleGrid');
  if (!grid) return;

  const q = state.q.trim().toLowerCase();
  const list = LIST.filter(p => {
    const okCat = state.cat === '全部' || p.cat === state.cat;
    if (!okCat) return false;
    if (!q) return true;
    return [p.name, p.cat, p.hometown, p.quote, p.story, (p.tags || []).join(' ')]
      .join(' ').toLowerCase().includes(q);
  });

  const cnt = document.getElementById('pCount');
  if (cnt) cnt.textContent = list.length;

  if (!list.length){
    grid.innerHTML = `<div class="empty">没有匹配的档案，试试换个关键词。</div>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <article class="pcard reveal" data-id="${p.id}">
      <div class="bar" style="background:${colorOf(p)}"></div>
      <div class="top">
        ${avatarHTML(p, '60px')}
        <div class="who">
          <h3>${p.name} <small>${p.hometown} · ${p.cat}</small></h3>
          <span class="tagline">${p.since} 年来康鹭 · 已 ${p.years} 年</span>
        </div>
      </div>
      <p class="quote">${p.quote}</p>
      <div class="tags">${(p.tags || []).map(t => `<span>${t}</span>`).join('')}</div>
      <div class="foot">
        <span>NO.${String(LIST.indexOf(p) + 1).padStart(2, '0')} / ${String(LIST.length).padStart(2, '0')}</span>
        <span class="read">展开档案 →</span>
      </div>
    </article>`).join('');
}

/* ---------- 筛选条 ---------- */
function initPeopleFilters(){
  const bar = document.getElementById('pFilters');
  if (!bar) return;

  bar.innerHTML = CATS.map(c => {
    const n = c === '全部' ? LIST.length : LIST.filter(p => p.cat === c).length;
    return `<button class="chip ${c === state.cat ? 'on' : ''}" data-cat="${c}">${c} <span style="opacity:.6">${n}</span></button>`;
  }).join('');

  bar.addEventListener('click', e => {
    const b = e.target.closest('[data-cat]'); if (!b) return;
    state.cat = b.dataset.cat;
    $$('.chip', bar).forEach(x => x.classList.toggle('on', x === b));
    renderPeople(); initReveal();
  });

  const input = document.getElementById('pSearch');
  if (input){
    let t;
    input.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => { state.q = input.value; renderPeople(); initReveal(); }, 180);
    });
  }
}

/* ---------- 弹窗 ---------- */
function openPerson(id){
  const p = LIST.find(x => x.id === id);
  if (!p) return;
  const modal = document.getElementById('pModal');
  const idx = LIST.indexOf(p) + 1;

  modal.querySelector('.modal-hd').innerHTML = `
    <button class="close" aria-label="关闭">×</button>
    <div class="mavatar">
      ${avatarHTML(p, '66px')}
      <div>
        <h2>${p.name}</h2>
        <div class="msub">${p.cat} · ${p.hometown} · ${p.since} 年来康鹭 · 已 ${p.years} 年${p.age && p.age !== '—' ? ' · ' + p.age + ' 岁' : ''}</div>
      </div>
    </div>`;

  const metaKeys = Object.keys(p.meta || {});
  modal.querySelector('.modal-ct').innerHTML = `
    ${metaKeys.length ? `<div class="meta-grid">
      ${metaKeys.map(k => `<div><div class="k">${k}</div><div class="v">${p.meta[k]}</div></div>`).join('')}
    </div>` : ''}
    <h5>口述摘录</h5>
    <blockquote class="pull" style="margin-top:0;font-size:19px">${p.quote}</blockquote>
    <h5>档案正文</h5>
    <p class="story">${p.story}</p>
    <div class="tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px">
      ${(p.tags || []).map(t => `<span style="font-size:11.5px;padding:2px 9px;border:1px solid var(--line);border-radius:2px;color:var(--ink-3);background:var(--paper-2)">${t}</span>`).join('')}
    </div>
    <div class="src">
      档案编号 NO.${String(idx).padStart(2, '0')} · 资料来源：${p.source || '未注明'}
    </div>`;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  const modal = document.getElementById('pModal');
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

function initModal(){
  const modal = document.getElementById('pModal');
  if (!modal) return;
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal-bd') || e.target.closest('.close')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  document.getElementById('peopleGrid').addEventListener('click', e => {
    const card = e.target.closest('.pcard');
    if (card) openPerson(card.dataset.id);
  });
}

/* ---------- 身份分布 ---------- */
function initDist(){
  const box = document.getElementById('pDist');
  if (!box) return;
  const groups = {};
  LIST.forEach(p => { groups[p.cat] = (groups[p.cat] || 0) + 1; });
  const total = LIST.length || 1;
  box.innerHTML = Object.entries(groups).map(([k, v]) => {
    const pct = Math.round(v / total * 100);
    return `<div class="bar-row reveal">
      <span class="bl">${k}</span>
      <span class="bar-track"><span class="bar-fill" style="background:${CAT_COLOR[k] || '#79705f'}" data-w="${pct}"></span></span>
      <span class="bv">${v} 人 / ${pct}%</span>
    </div>`;
  }).join('');
}

/* ---------- 示例数据提示 ---------- */
function initNotice(){
  const box = document.getElementById('sampleNotice');
  if (!box) return;
  box.style.display = SHOW_SAMPLE_NOTICE ? '' : 'none';
}

/* ============================================================
   CSV 批量导入 / 导出
   ============================================================ */

const CSV_COLS = [
  ['id', '编号'], ['name', '姓名'], ['cat', '身份'], ['hometown', '籍贯'],
  ['age', '年龄'], ['since', '来康鹭年份'], ['years', '在康鹭年数'],
  ['tags', '关键词'], ['color', '主色'], ['quote', '口述摘录'],
  ['story', '档案正文'], ['meta', '信息项'], ['source', '资料来源'], ['photo', '照片路径']
];
const CSV_HEAD = CSV_COLS.map(c => c[1]).join(',');
const CSV_SAMPLE = 'p17,张某某,制衣厂主,湖北天门,42,2010,16,"日结工,夫妻档","","他原话说的一句话。","档案正文。","厂房面积=200 ㎡；工人=8 人；关键年份=2019","2026年3月 笔者访谈",""';

/* 简易 CSV 解析（支持引号内逗号与换行） */
function parseCSV(text){
  const rows = []; let row = [], cur = '', inQ = false;
  text = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  for (let i = 0; i < text.length; i++){
    const c = text[i];
    if (inQ){
      if (c === '"'){
        if (text[i + 1] === '"'){ cur += '"'; i++; }
        else inQ = false;
      } else cur += c;
    } else {
      if (c === '"') inQ = true;
      else if (c === ','){ row.push(cur); cur = ''; }
      else if (c === '\n'){ row.push(cur); rows.push(row); row = []; cur = ''; }
      else cur += c;
    }
  }
  if (cur !== '' || row.length){ row.push(cur); rows.push(row); }
  return rows.filter(r => r.some(c => String(c).trim() !== ''));
}

/* 行 → 档案对象 */
function rowToPerson(r, i){
  const o = {};
  CSV_COLS.forEach((c, k) => { o[c[0]] = (r[k] || '').trim(); });
  if (!o.name) return null;
  return {
    id: o.id || ('p' + String(i + 1).padStart(2, '0')),
    name: o.name,
    cat: CATS.includes(o.cat) ? o.cat : (o.cat || '制衣厂主'),
    hometown: o.hometown || '—',
    age: o.age || '—',
    since: parseInt(o.since) || 0,
    years: parseInt(o.years) || 0,
    tags: o.tags ? o.tags.split(/[、,，;；]/).map(s => s.trim()).filter(Boolean) : [],
    color: o.color || '',
    quote: o.quote || '',
    story: o.story || '',
    meta: o.meta ? Object.fromEntries(
      o.meta.split(/[；;]/).map(s => s.split('=')).filter(a => a.length === 2)
        .map(a => [a[0].trim(), a[1].trim()])
    ) : {},
    source: o.source || '',
    photo: o.photo || ''
  };
}

/* 生成可下载的 people-data.js 文本 */
function buildJS(list){
  const body = list.map(p => `  {
    id: '${p.id}',
    name: '${p.name}',
    cat: '${p.cat}',
    hometown: '${p.hometown}',
    age: '${p.age}',
    since: ${p.since},
    years: ${p.years},
    tags: [${p.tags.map(t => `'${t}'`).join(', ')}],
    color: '${p.color}',
    quote: '${p.quote}',
    story: '${p.story}',
    meta: {${Object.entries(p.meta).map(([k, v]) => ` '${k}': '${v}'`).join(',')} },
    source: '${p.source}',
    photo: '${p.photo}'
  }`).join(',\n\n');

  return `/* 康鹭记忆 · 人物档案数据（由网页工具导出） */
/* 用法：把本文件内容覆盖到 assets/js/people-data.js 即可 */

const PEOPLE = [

${body}

];
`;
}

function download(name, text, mime){
  const blob = new Blob([text], { type: mime || 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
}

function initImport(){
  const box = document.getElementById('csvBox');
  if (!box) return;

  box.innerHTML = `
    <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center">
      <button class="btn ghost" id="btnTpl">下载 Excel / CSV 模板</button>
      <button class="btn ghost" id="btnPick">选择填好的 CSV</button>
      <input type="file" id="csvFile" accept=".csv,.txt" style="display:none">
      <span class="small muted">表头须为：${CSV_COLS.slice(0, 6).map(c => c[1]).join('、')}……</span>
    </div>
    <div id="csvOut" style="margin-top:16px"></div>`;

  box.querySelector('#btnTpl').addEventListener('click', () => {
    download('康鹭人物档案模板.csv', '\uFEFF' + CSV_HEAD + '\n' + CSV_SAMPLE + '\n', 'text/csv;charset=utf-8');
  });

  const file = box.querySelector('#csvFile');
  box.querySelector('#btnPick').addEventListener('click', () => file.click());

  file.addEventListener('change', () => {
    const f = file.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => {
      const rows = parseCSV(String(rd.result));
      if (rows.length < 2){
        box.querySelector('#csvOut').innerHTML = `<p class="small" style="color:var(--red)">没读到数据行，请检查文件格式。</p>`;
        return;
      }
      const head = rows[0].map(s => String(s).trim());
      const ok = head[1] === '姓名' || head.includes('姓名');
      if (!ok){
        box.querySelector('#csvOut').innerHTML = `<p class="small" style="color:var(--red)">表头不匹配，请先下载模板并按模板填写。</p>`;
        return;
      }
      const list = rows.slice(1).map(rowToPerson).filter(Boolean);
      LIST = list;
      renderPeople(); initPeopleFilters(); initDist(); initReveal(); initBars();
      const t = document.getElementById('pTotal'); if (t) t.textContent = list.length;

      box.querySelector('#csvOut').innerHTML = `
        <p class="small" style="margin:0 0 10px">
          已读取 <b style="color:var(--red)">${list.length}</b> 份档案，页面上方已即时预览。
          确认无误后，下载生成的文件覆盖 <code>assets/js/people-data.js</code>，下次打开就是这批内容。
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:10px">
          <button class="btn" id="btnJs">下载 people-data.js</button>
          <button class="btn ghost" id="btnBack">恢复原档案</button>
        </div>`;

      box.querySelector('#btnJs').addEventListener('click', () => {
        download('people-data.js', buildJS(list), 'text/javascript;charset=utf-8');
      });
      box.querySelector('#btnBack').addEventListener('click', () => {
        LIST = PEOPLE.slice();
        renderPeople(); initPeopleFilters(); initDist(); initReveal(); initBars();
        const t2 = document.getElementById('pTotal'); if (t2) t2.textContent = LIST.length;
        box.querySelector('#csvOut').innerHTML = '';
      });
    };
    rd.readAsText(f, 'utf-8');
    file.value = '';
  });
}

/* ---------- 启动 ---------- */
document.addEventListener('DOMContentLoaded', () => {
  LIST = (typeof PEOPLE !== 'undefined' ? PEOPLE : []).slice();
  renderPeople();
  initPeopleFilters();
  initModal();
  initDist();
  initNotice();
  initImport();
  initReveal();
  initBars();
});
