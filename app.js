const MONTHS   = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const WEEKDAYS = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
const COLS     = ['mob','sush','sklad','mbSush','mbSklad'];

let now = new Date(), year = now.getFullYear(), month = now.getMonth();
let data = {}, curHistTab = 'work';

// ── Storage ───────────────────────────────────
function storageKey()        { return `report_${year}_${month}`; }
function workLogKey()        { return `worklog_${year}_${month}`; }
function travelLogKey()      { return `travellog_${year}_${month}`; }

function load()              { try { data = JSON.parse(localStorage.getItem(storageKey()) || '{}'); } catch(e) { data = {}; } }
function save()              { localStorage.setItem(storageKey(), JSON.stringify(data)); }
function loadWorkLog()       { try { return JSON.parse(localStorage.getItem(workLogKey())   || '[]'); } catch(e) { return []; } }
function saveWorkLog(log)    { localStorage.setItem(workLogKey(),   JSON.stringify(log)); }
function loadTravelLog()     { try { return JSON.parse(localStorage.getItem(travelLogKey()) || '[]'); } catch(e) { return []; } }
function saveTravelLog(log)  { localStorage.setItem(travelLogKey(), JSON.stringify(log)); }

// ── Helpers ───────────────────────────────────
function toHM(mins) {
  if (!mins) return '0 мин';
  if (mins < 60) return `${mins} мин`;
  const h = Math.floor(mins / 60), m = mins % 60;
  return m > 0 ? `${h} ч ${m} мин` : `${h} ч`;
}

function getWorkdays(y, m) {
  const days = [], d = new Date(y, m, 1);
  while (d.getMonth() === m) {
    if (d.getDay() !== 0 && d.getDay() !== 6) days.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return days;
}

function formatDate(d) {
  return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.`;
}

function hasData(dateStr) {
  const r = data[dateStr];
  return r && COLS.some(c => r[c] && r[c] !== '');
}

function getPreview(dateStr) {
  const r  = data[dateStr] || {};
  const wl = loadWorkLog().filter(x => x.date === dateStr);
  const tl = loadTravelLog().filter(x => x.date === dateStr);
  let chips = '';
  if (r.mob) chips += `<span class="preview-chip mob">М:${r.mob}</span>`;
  if (r.sush || r.mbSush) chips += `<span class="preview-chip">З:${(+r.sush||0)+(+r.mbSush||0)}</span>`;
  if (r.sklad || r.mbSklad) chips += `<span class="preview-chip">О:${(+r.sklad||0)+(+r.mbSklad||0)}</span>`;
  if (wl.length) chips += `<span class="preview-chip extra">Р:${wl.length}</span>`;
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  if (tm) chips += `<span class="preview-chip travel">🚗${toHM(tm)}</span>`;
  return chips;
}

function workItemHtml(x, dateStr) {
  return `<div class="work-item">
    <div class="work-item-dot"></div>
    <div class="work-item-text">${x.desc}</div>
    <button class="work-item-del" onclick="delWork('${dateStr}',${x.id})">×</button>
  </div>`;
}

// ── Render ────────────────────────────────────
function render() {
  load();
  document.getElementById('monthLabel').textContent = `${MONTHS[month]} ${year}`;
  const days = getWorkdays(year, month);
  const list = document.getElementById('daysList');
  list.innerHTML = '';

  days.forEach(d => {
    const dateStr = formatDate(d);
    const wd  = WEEKDAYS[d.getDay()];
    const r   = data[dateStr] || {};
    const wl  = loadWorkLog().filter(x => x.date === dateStr);
    const tl  = loadTravelLog().filter(x => x.date === dateStr);
    const tm  = tl.reduce((s,x) => s+x.mins, 0);

    const card = document.createElement('div');
    card.className = 'day-card' + (hasData(dateStr) ? ' has-data' : '');
    card.dataset.date = dateStr;

    card.innerHTML = `
      <div class="day-header" onclick="toggle(this)">
        <div>
          <div class="day-date">${dateStr}</div>
          <div class="day-weekday">${wd}</div>
        </div>
        <div class="day-preview">${getPreview(dateStr)}</div>
        <div class="chevron">▼</div>
      </div>
      <div class="day-body">

        <div>
          <div class="section-label">Мобильная</div>
          <div class="fields-grid">
            <div class="field mob">
              <label>Мобильная</label>
              <input type="text" inputmode="decimal" class="formula-input" value="${r.mob||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','mob')" onfocus="focusField(this,'${dateStr}','mob')">
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div>
          <div class="section-label">Дистрибуторы воды</div>
          <div class="fields-grid">
            <div class="field">
              <label>Забрал со склада</label>
              <input type="text" inputmode="decimal" class="formula-input" value="${r.sush||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','sush')" onfocus="focusField(this,'${dateStr}','sush')">
            </div>
            <div class="field">
              <label>Отдал готовых</label>
              <input type="text" inputmode="decimal" class="formula-input" value="${r.sklad||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','sklad')" onfocus="focusField(this,'${dateStr}','sklad')">
            </div>
            <div class="field">
              <label>МБ забрал</label>
              <input type="text" inputmode="decimal" class="formula-input" value="${r.mbSush||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','mbSush')" onfocus="focusField(this,'${dateStr}','mbSush')">
            </div>
            <div class="field">
              <label>МБ отдал</label>
              <input type="text" inputmode="decimal" class="formula-input" value="${r.mbSklad||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','mbSklad')" onfocus="focusField(this,'${dateStr}','mbSklad')">
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div>
          <div class="section-label">Другие работы</div>
          <div class="work-row">
            <input class="work-desc" type="text" placeholder="Вид работы…" id="wd_${dateStr}"
              onkeydown="if(event.key==='Enter') addWork('${dateStr}')"/>
            <button class="add-work-btn" onclick="addWork('${dateStr}')">+</button>
          </div>
          <div id="wlist_${dateStr}" style="margin-top:6px;display:flex;flex-direction:column;gap:4px">
            ${wl.map(x => workItemHtml(x, dateStr)).join('')}
          </div>
        </div>

        <div class="divider"></div>

        <div>
          <div class="section-label">Время в пути · минуты</div>
          <div class="travel-row">
            <input class="travel-mins" type="number" min="1" placeholder="минуты…" id="tm_${dateStr}"/>
            <button class="add-travel-btn" onclick="addTravel('${dateStr}')">+</button>
          </div>
        </div>

        <div class="day-time-totals">
          <div class="day-time-chip" id="wchip_${dateStr}">Другие работы<span>${wl.length} записей</span></div>
          <div class="day-time-chip travel" id="tchip_${dateStr}">В пути<span>${toHM(tm)}</span></div>
        </div>

        <button class="clear-btn" onclick="clearDay('${dateStr}')">Очистить день</button>
      </div>`;

    list.appendChild(card);
  });

  updateTotals();
}

function toggle(header) { header.parentElement.classList.toggle('open'); }

// ── Work log ──────────────────────────────────
function addWork(dateStr) {
  const desc = document.getElementById('wd_' + dateStr).value.trim();
  if (!desc) return;
  const log = loadWorkLog();
  log.push({ id: Date.now(), date: dateStr, desc });
  saveWorkLog(log);
  document.getElementById('wd_' + dateStr).value = '';
  refreshDayExtras(dateStr);
  updateTotals();
}

function delWork(dateStr, id) {
  saveWorkLog(loadWorkLog().filter(x => x.id !== id));
  refreshDayExtras(dateStr);
  updateTotals();
}

// ── Travel log ────────────────────────────────
function addTravel(dateStr) {
  const mins = parseInt(document.getElementById('tm_' + dateStr).value);
  if (!mins) return;
  const log = loadTravelLog();
  log.push({ id: Date.now(), date: dateStr, mins });
  saveTravelLog(log);
  document.getElementById('tm_' + dateStr).value = '';
  refreshDayExtras(dateStr);
  updateTotals();
}

function refreshDayExtras(dateStr) {
  const wl = loadWorkLog().filter(x => x.date === dateStr);
  const tl = loadTravelLog().filter(x => x.date === dateStr);
  const tm = tl.reduce((s,x) => s+x.mins, 0);

  const wlist = document.getElementById('wlist_' + dateStr);
  if (wlist) wlist.innerHTML = wl.map(x => workItemHtml(x, dateStr)).join('');

  const wchip = document.getElementById('wchip_' + dateStr);
  if (wchip) wchip.innerHTML = `Другие работы<span>${wl.length} записей</span>`;

  const tchip = document.getElementById('tchip_' + dateStr);
  if (tchip) tchip.innerHTML = `В пути<span>${toHM(tm)}</span>`;

  const card = document.querySelector(`.day-card[data-date="${dateStr}"]`);
  if (card) {
    const p = card.querySelector('.day-preview');
    if (p) p.innerHTML = getPreview(dateStr);
  }
}

// ── Report fields ─────────────────────────────
function setVal(dateStr, col, val, formula) {
  if (!data[dateStr]) data[dateStr] = {};
  data[dateStr][col] = val;
  if (formula !== undefined) data[dateStr][col + '_formula'] = formula;
  save();
  updateTotals();
  updateCard(dateStr);
}

function clearDay(dateStr) {
  delete data[dateStr];
  save();
  saveWorkLog(loadWorkLog().filter(x => x.date !== dateStr));
  saveTravelLog(loadTravelLog().filter(x => x.date !== dateStr));
  render();
}

function updateCard(dateStr) {
  document.querySelectorAll('.day-card').forEach(card => {
    if (card.querySelector('.day-date')?.textContent === dateStr) {
      card.classList.toggle('has-data', hasData(dateStr));
      const p = card.querySelector('.day-preview');
      if (p) p.innerHTML = getPreview(dateStr);
    }
  });
}

function updateTotals() {
  let mob=0, sush=0, sklad=0, mbSush=0, mbSklad=0;
  Object.values(data).forEach(r => {
    mob    += +r.mob    || 0;
    sush   += +r.sush   || 0;
    sklad  += +r.sklad  || 0;
    mbSush += +r.mbSush || 0;
    mbSklad+= +r.mbSklad|| 0;
  });

  document.getElementById('totalMob').textContent     = mob;
  document.getElementById('totalSush').textContent    = sush;
  document.getElementById('totalSklad').textContent   = sklad;
  document.getElementById('totalMbSush').textContent  = mbSush;
  document.getElementById('totalMbSklad').textContent = mbSklad;

  // В сушилке = Было + Забрал − Отдал, минимум 0
  const wasN = Math.max(0, parseInt(localStorage.getItem('wasNormal')) || 0);
  const wasM = Math.max(0, parseInt(localStorage.getItem('wasMb'))     || 0);

  const netNormal = Math.max(0, wasN + sush - sklad);
  const netMb     = Math.max(0, wasM + mbSush - mbSklad);

  const elN = document.getElementById('totalSushNet');
  if (elN) elN.textContent = netNormal;

  const elM = document.getElementById('totalMbNet');
  if (elM) elM.textContent = netMb;

  const wCount = loadWorkLog().length;
  const tm     = loadTravelLog().reduce((s,x) => s+x.mins, 0);
  document.getElementById('totalExtraWork').textContent   = wCount;
  document.getElementById('totalExtraTravel').textContent = toHM(tm);
}

function changeMonth(dir) {
  month += dir;
  if (month > 11) { month = 0;  year++; }
  if (month < 0)  { month = 11; year--; }
  render();
}

function evalField(input, dateStr, col) {
  let val = input.value.trim();
  if (val === '') { setVal(dateStr, col, '', ''); return; }
  let formula = val, result = val;
  if (/^[\d\s\+\-\*\/\.]+$/.test(val) && /[\+\-\*\/]/.test(val)) {
    try {
      const r = Function('"use strict"; return (' + val + ')')();
      if (isFinite(r)) result = String(Math.round(r * 100) / 100);
    } catch(e) {}
  } else {
    formula = '';
  }
  input.value = result;
  setVal(dateStr, col, result, formula);
}

function focusField(input, dateStr, col) {
  const r = data[dateStr];
  if (r && r[col + '_formula']) input.value = r[col + '_formula'];
  input.select();
}

// ── History page ──────────────────────────────
function openHistory(tab) {
  curHistTab = tab;
  document.getElementById('pageMain').classList.remove('active');
  document.getElementById('pageHistory').classList.add('active');
  renderHistory();
}

function openMain() {
  document.getElementById('pageHistory').classList.remove('active');
  document.getElementById('pageMain').classList.add('active');
}

function switchTab(tab) {
  curHistTab = tab;
  document.getElementById('tabWork').className   = 'hist-tab' + (tab === 'work'   ? ' on' : '');
  document.getElementById('tabTravel').className = 'hist-tab' + (tab === 'travel' ? ' on travel' : '');
  renderHistory();
}

function renderHistory() {
  const isTravel = curHistTab === 'travel';
  const log = isTravel ? loadTravelLog() : loadWorkLog();
  document.getElementById('histTitle').textContent = isTravel ? 'Время в пути' : 'Другие работы';
  document.getElementById('histTitle').style.color = isTravel ? 'var(--accent2)' : 'var(--orange)';

  const content = document.getElementById('histContent');
  if (!log.length) { content.innerHTML = '<div class="hist-empty">Записей пока нет</div>'; return; }

  const byDate = {};
  log.forEach(x => { if (!byDate[x.date]) byDate[x.date] = []; byDate[x.date].push(x); });

  content.innerHTML = Object.keys(byDate).sort().reverse().map(date => {
    const items = byDate[date];
    const total = items.reduce((s,x) => s + (x.mins||0), 0);
    return `<div class="hist-day">
      <div class="hist-day-hdr">
        <div class="hist-day-date">${date}</div>
        <div class="hist-day-total">${isTravel ? `итого: <b class="travel">${toHM(total)}</b>` : `${items.length} записей`}</div>
      </div>
      ${items.map(x => `
        <div class="hist-item">
          <div class="hist-dot ${isTravel ? 'travel' : ''}"></div>
          <div class="hist-text">${isTravel ? toHM(x.mins) : x.desc}</div>
          ${isTravel ? `<div class="hist-min travel">${x.mins} мин</div>` : ''}
        </div>`).join('')}
    </div>`;
  }).join('') + `<button class="export-btn" onclick="exportHistory()">📋 Скопировать как текст</button>`;
}

function exportHistory() {
  const isTravel = curHistTab === 'travel';
  const log = isTravel ? loadTravelLog() : loadWorkLog();
  if (!log.length) { alert('Нет данных'); return; }
  const byDate = {};
  log.forEach(x => { if (!byDate[x.date]) byDate[x.date] = []; byDate[x.date].push(x); });
  const text = Object.keys(byDate).sort().reverse().map(date => {
    const items = byDate[date];
    const total = items.reduce((s,x) => s + (x.mins||0), 0);
    const lines = items.map(x => isTravel ? `  • ${x.mins} мин` : `  • ${x.desc}`).join('\n');
    return `=== ${date}${isTravel ? ` (${toHM(total)})` : ''} ===\n${lines}`;
  }).join('\n\n');
  navigator.clipboard.writeText((isTravel ? 'В пути' : 'Другие работы') + '\n\n' + text)
    .then(() => alert('Скопировано!'))
    .catch(() => alert(text));
}

// ── Backup / Restore ──────────────────────────
function backupData() {
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('report_') || key.startsWith('worklog_') || key.startsWith('travellog_'))
      allData[key] = JSON.parse(localStorage.getItem(key));
  }
  const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  const d = new Date();
  a.download = `otchet_backup_${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}.json`;
  a.click();
}

function restoreData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const allData = JSON.parse(e.target.result);
      Object.keys(allData).forEach(key => localStorage.setItem(key, JSON.stringify(allData[key])));
      render();
      alert('Данные восстановлены!');
    } catch(err) { alert('Ошибка при загрузке файла'); }
  };
  reader.readAsText(file);
}

// ── Init ──────────────────────────────────────
render();
loadWas();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
