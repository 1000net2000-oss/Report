// ── i18n ─────────────────────────────────────
const TRANSLATIONS = {
  ru: {
    appTitle: 'Отчёт о работе',
    backup: '💾 Бэкап',
    restore: '📂 Загрузить',
    mobile: 'Мобильная',
    otherWork: 'Другие работы',
    regular: 'Обычные',
    minibar: 'Минибар',
    took: 'Забрал',
    gave: 'Отдал',
    total: 'Всего',
    travel: 'Время в пути',
    warehouse: 'Склад',
    highway: 'Трасса',
    days: 'дней',
    workDesc: 'Вид работы…',
    minutes: 'минуты…',
    clearDay: 'Очистить день',
    sectionMobile: 'Мобильная',
    sectionDist: 'Дистрибуторы воды',
    sectionOther: 'Другие работы',
    sectionProk: 'Проклеенные',
    prok: 'Прок',
    sectionTravel: 'Время в пути · минуты',
    tookFromWarehouse: 'Забрал со склада',
    gaveReady: 'Отдал готовых',
    mbTook: 'МБ забрал',
    mbGave: 'МБ отдал',
    otherWorkRecords: 'Другие работы',
    records: 'записей',
    onRoad: 'В пути',
    histOtherWork: 'Другие работы',
    histTravel: 'Время в пути',
    histEmpty: 'Записей пока нет',
    histTotal: 'итого:',
    histRecords: 'записей',
    exportBtn: '📋 Скопировать как текст',
    copied: 'Скопировано!',
    noData: 'Нет данных',
    restored: 'Данные восстановлены!',
    restoreError: 'Ошибка при загрузке файла',
    tabOther: '📋 Другие работы',
    tabTravel: '🚗 В пути',
    summaryBtn: '📋 Сводка',
    chartBtn: '📊 График',
    pdfBtn: '📄 PDF',
    summaryCopied: 'Сводка скопирована!',
    chartTitle: 'График за месяц',
    chartMobile: 'Мобильная',
    chartStation: 'Стационарная',
    chartGave: 'Отдал',
    chartTravel: 'В пути (мин)',
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    weekdays: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    mobilePDF: 'Мобильная',
    regularPDF: 'Обычные отдал',
    mbPDF: 'МБ отдал',
    otherPDF: 'Другие работы',
    travelPDF: 'В пути',
    totalPDF: 'Итого',
    warehousePDF: 'Склад',
    highwayPDF: 'Трасса',
    daysPDF: 'дн.',
    reportTitle: 'Отчёт о работе',
    generatedPDF: 'Сформировано:',
    summaryLabel: 'Мобильная:',
    summaryOther: 'Другие работы:',
    summaryRegGave: 'Обычные отдал:',
    summaryMbGave: 'Минибар отдал:',
    summaryTotal: 'Всего:',
    summaryTravel: 'В пути:',
    summaryWarehouse: 'Склад:',
    summaryHighway: 'Трасса:',
    summaryDays: 'дн.',
  },
  pl: {
    appTitle: 'Raport pracy',
    backup: '💾 Kopia',
    restore: '📂 Wczytaj',
    mobile: 'Mobilna',
    otherWork: 'Inne prace',
    regular: 'Zwykłe',
    minibar: 'Minibar',
    took: 'Pobrano',
    gave: 'Oddano',
    total: 'Łącznie',
    travel: 'Czas w drodze',
    warehouse: 'Magazyn',
    highway: 'Trasa',
    days: 'dni',
    workDesc: 'Rodzaj pracy…',
    minutes: 'minuty…',
    clearDay: 'Wyczyść dzień',
    sectionMobile: 'Mobilna',
    sectionDist: 'Dystrybutorzy wody',
    sectionOther: 'Inne prace',
    sectionProk: 'Sklejone',
    prok: 'Sklej',
    sectionTravel: 'Czas w drodze · minuty',
    tookFromWarehouse: 'Pobrano z magazynu',
    gaveReady: 'Oddano gotowych',
    mbTook: 'MB pobrano',
    mbGave: 'MB oddano',
    otherWorkRecords: 'Inne prace',
    records: 'wpisów',
    onRoad: 'W drodze',
    histOtherWork: 'Inne prace',
    histTravel: 'Czas w drodze',
    histEmpty: 'Brak wpisów',
    histTotal: 'razem:',
    histRecords: 'wpisów',
    exportBtn: '📋 Kopiuj jako tekst',
    copied: 'Skopiowano!',
    noData: 'Brak danych',
    restored: 'Dane przywrócone!',
    restoreError: 'Błąd podczas wczytywania pliku',
    tabOther: '📋 Inne prace',
    tabTravel: '🚗 W drodze',
    summaryBtn: '📋 Podsumowanie',
    chartBtn: '📊 Wykres',
    pdfBtn: '📄 PDF',
    summaryCopied: 'Podsumowanie skopiowane!',
    chartTitle: 'Wykres miesiąca',
    chartMobile: 'Mobilna',
    chartStation: 'Stacjonarna',
    chartGave: 'Oddano',
    chartTravel: 'W drodze (min)',
    months: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec','Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
    weekdays: ['Nd','Pn','Wt','Śr','Cz','Pt','Sb'],
    mobilePDF: 'Mobilna',
    regularPDF: 'Zwykłe oddano',
    mbPDF: 'MB oddano',
    otherPDF: 'Inne prace',
    travelPDF: 'W drodze',
    totalPDF: 'Łącznie',
    warehousePDF: 'Magazyn',
    highwayPDF: 'Trasa',
    daysPDF: 'dni',
    reportTitle: 'Raport pracy',
    generatedPDF: 'Wygenerowano:',
    summaryLabel: 'Mobilna:',
    summaryOther: 'Inne prace:',
    summaryRegGave: 'Zwykłe oddano:',
    summaryMbGave: 'Minibar oddano:',
    summaryTotal: 'Łącznie:',
    summaryTravel: 'W drodze:',
    summaryWarehouse: 'Magazyn:',
    summaryHighway: 'Trasa:',
    summaryDays: 'dni',
  }
};

let lang = localStorage.getItem('lang') || 'ru';
if (lang !== 'ru' && lang !== 'pl') {
  // Defensive fix: corrupted value (e.g. double-JSON-encoded like '"ru"') from a buggy restore
  try {
    const parsed = JSON.parse(lang);
    lang = (parsed === 'ru' || parsed === 'pl') ? parsed : 'ru';
  } catch(e) { lang = 'ru'; }
  localStorage.setItem('lang', lang);
}
function t(key) { return (TRANSLATIONS[lang] || TRANSLATIONS.ru)[key] || key; }

function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.getElementById('flagRu').classList.toggle('active', l === 'ru');
  document.getElementById('flagPl').classList.toggle('active', l === 'pl');
  render();
  if (document.getElementById('pageHistory').classList.contains('active')) renderHistory();
  if (document.getElementById('pageStats').classList.contains('active')) renderStats();
}

// ── Constants ─────────────────────────────────
const COLS = ['mob','sklad','mbSklad','tookDist','gaveDist','tookMb','gaveMb','prok','inst','missed','missedMl','missedRefuse','missedLate','missedClosed','missedParking'];

let now = new Date(), year = now.getFullYear(), month = now.getMonth();
let data = {}, curHistTab = 'work';

// ── Storage ───────────────────────────────────
function storageKey()        { return `report_${year}_${month}`; }
function workLogKey()        { return `worklog_${year}_${month}`; }
function travelLogKey()      { return `travellog_${year}_${month}`; }

let _wlCache = null, _tlCache = null;
function invalidateLogCache() { _wlCache = null; _tlCache = null; }

function load()              { try { data = JSON.parse(localStorage.getItem(storageKey()) || '{}'); } catch(e) { data = {}; } }
function save()              { localStorage.setItem(storageKey(), JSON.stringify(data)); }
function loadWorkLog()       { if (_wlCache) return _wlCache; try { _wlCache = JSON.parse(localStorage.getItem(workLogKey())   || '[]'); } catch(e) { _wlCache = []; } return _wlCache; }
function saveWorkLog(log)    { _wlCache = log; localStorage.setItem(workLogKey(),   JSON.stringify(log)); }
function loadTravelLog()     { if (_tlCache) return _tlCache; try { _tlCache = JSON.parse(localStorage.getItem(travelLogKey()) || '[]'); } catch(e) { _tlCache = []; } return _tlCache; }
function saveTravelLog(log)  { _tlCache = log; localStorage.setItem(travelLogKey(), JSON.stringify(log)); }

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

// Groups a flat list of workdays (Date objects) into week chunks.
// A new week starts whenever the weekday resets to Monday (or the first day).
function groupIntoWeeks(days) {
  const weeks = [];
  let current = [];
  days.forEach(d => {
    if (d.getDay() === 1 && current.length) { weeks.push(current); current = []; }
    current.push(d);
  });
  if (current.length) weeks.push(current);
  return weeks;
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
  const skladSum = (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
  if (skladSum) chips += `<span class="preview-chip">О:${skladSum}</span>`;
  if (r.prok) chips += `<span class="preview-chip prok">П:${r.prok}</span>`;
  if (wl.length) {
    const workMins = wl.reduce((s, x) => s + (x.mins || 0), 0);
    const minsStr = workMins > 0 ? ` · ${toHM(workMins)}` : '';
    chips += `<span class="preview-chip extra">Р:${wl.length}${minsStr}</span>`;
  }
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  if (tm) chips += `<span class="preview-chip travel">🚗${toHM(tm)}</span>`;
  return chips;
}

function workItemHtml(x, dateStr) {
  const minsHtml = `<span class="work-item-mins ${x.mins ? '' : 'work-item-mins--empty'}" onclick="startEditMins(this,'${dateStr}',${x.id})">${x.mins ? x.mins + ' мин' : '+ мин'}</span>`;
  return `<div class="work-item" id="workItem_${x.id}">
    <div class="work-item-dot"></div>
    <div class="work-item-text">${x.desc}</div>
    ${minsHtml}
    <button class="work-item-del" onclick="delWork('${dateStr}',${x.id})">×</button>
  </div>`;
}

function startEditMins(el, dateStr, id) {
  const item = el.closest('.work-item');
  if (!item || item.classList.contains('work-item--editing')) return;
  item.classList.add('work-item--editing');

  const wl = loadWorkLog();
  const entry = wl.find(x => x.id === id);
  const currentMins = entry && entry.mins ? entry.mins : '';

  el.outerHTML = `
    <input class="inline-mins-input" type="number" inputmode="numeric" placeholder="мин" value="${currentMins}"
      onkeydown="if(event.key==='Enter'){event.preventDefault();saveEditMins(${id},'${dateStr}',this)}">
    <button class="inline-save-btn" onclick="saveEditMins(${id},'${dateStr}',this.previousElementSibling)">OK</button>`;

  const input = item.querySelector('.inline-mins-input');
  if (input) { input.focus(); input.select(); }
}

function saveEditMins(id, dateStr, inputEl) {
  const val = inputEl.value.trim();
  const mins = val === '' ? null : Math.max(0, Math.round(+val) || 0);
  const wl = loadWorkLog();
  const entry = wl.find(x => x.id === id);
  if (entry) {
    entry.mins = mins || undefined;
    saveWorkLog(wl);
  }
  refreshDayExtras(dateStr);
  updateTotals();
}

function pill(mod, icon, label, value) {
  const valHtml = value != null ? `<span class="pill-val pill-val--${mod}">${value}</span>` : '';
  return `<div class="day-pill day-pill--${mod}"><span class="pill-label">${label}</span>${valHtml}</div>`;
}

function getDayRows(dateStr, r, wl, tl) {
  r = r || data[dateStr] || {};
  wl = wl || loadWorkLog().filter(x => x.date === dateStr);
  tl = tl || loadTravelLog().filter(x => x.date === dateStr);
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  const workMins = wl.reduce((s,x) => s+(x.mins||0), 0);
  const rows = [];
  if (r.mob)    rows.push(pill('mob',   'М', t('mobile'),   r.mob));
  if (r.prok)   rows.push(pill('prok',  'П', t('prok'),     r.prok));
  const sklad = (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
  if (sklad)    rows.push(pill('distr', 'О', t('gave'),     sklad));
  if (wl.length) {
    const mStr = workMins > 0 ? ` · ${toHM(workMins)}` : '';
    rows.push(pill('work', 'Р', t('otherWork'), `${wl.length}${mStr}`));
  }
  if (tm)       rows.push(pill('travel', '🚗', t('onRoad'), toHM(tm)));
  return rows.join('');
}

// ── Render ────────────────────────────────────
function render() {
  load();
  document.getElementById('monthLabel').textContent = `${t('months')[month]} ${year}`;

  // Day counter
  const allWorkdays = getWorkdays(year, month);
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
  const totalDays = allWorkdays.length;
  const passedDays = isCurrentMonth
    ? allWorkdays.filter(d => d <= today).length
    : (new Date(year, month+1, 1) <= today ? totalDays : 0);
  const counterEl = document.getElementById('monthDayCounter');
  if (counterEl) {
    counterEl.textContent = isCurrentMonth
      ? `День ${passedDays} из ${totalDays}`
      : passedDays === totalDays ? `${totalDays} дней` : '';
  }
  const restoreEl = document.getElementById('btnRestoreLbl');
  if (restoreEl) restoreEl.textContent = t('restore');
  document.getElementById('labelMob').textContent        = t('mobile');
  document.getElementById('labelOtherWork').textContent  = t('otherWork');
              document.getElementById('labelTotal').textContent      = t('total');
  const elLabelProk = document.getElementById('labelProk');
  if (elLabelProk) elLabelProk.textContent = t('prok');
  document.getElementById('labelTravel').textContent     = t('travel');
  const elLabelSklad = document.getElementById('labelSklad');
  if (elLabelSklad) elLabelSklad.textContent = lang === 'pl' ? 'Oddano dystr.' : 'Отдал дистр.';
  const elLabelMbSklad = document.getElementById('labelMbSklad');
  if (elLabelMbSklad) elLabelMbSklad.textContent = lang === 'pl' ? 'Oddano MB' : 'Отдал МБ';
  document.getElementById('labelWarehouse').textContent  = t('warehouse');
  document.getElementById('labelHighway').textContent    = t('highway');
  document.getElementById('labelWarehouseDays').textContent = t('days');
  document.getElementById('labelHighwayDays').textContent   = t('days');

  const days = getWorkdays(year, month);
  const list = document.getElementById('daysList');
  list.innerHTML = '';

  const _wl = loadWorkLog();
  const _tl = loadTravelLog();

  // Update chip active states
  document.querySelectorAll('.stat-chip').forEach(c => c.classList.remove('stat-chip--active'));
  const activeChip = document.querySelector(`.stat-chip--${activeFilter}`);
  if (activeChip) activeChip.classList.add('stat-chip--active');

  if (activeFilter !== 'total') {
    // Filter view — card list
    const filterColors = { mob:'#f472b6', gave:'#34d399', prok:'#fbbf24', mb:'#60a5fa', missed:'#f87171', inst:'#a78bfa' };
    const color = filterColors[activeFilter] || '#e2e8f0';

    // Calculate summary
    let filterTotal = 0, filterDays = 0;
    days.forEach(d => {
      const dateStr = formatDate(d);
      const r = data[dateStr] || {};
      const sklad = (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
      const missedTot = (+r.missed||0)+(+r.missedMl||0)+(+r.missedRefuse||0)+(+r.missedLate||0)+(+r.missedClosed||0)+(+r.missedParking||0);
      const val = activeFilter === 'gave' ? sklad : activeFilter === 'missed' ? missedTot : (+r[activeFilter]||0);
      if (val > 0) { filterTotal += val; filterDays++; }
    });
    const avg = filterDays > 0 ? (filterTotal / filterDays).toFixed(1) : 0;

    const summary = document.createElement('div');
    summary.className = 'filter-summary';
    summary.style.setProperty('--fc', color);
    summary.innerHTML = `
      <span class="filter-summary-total" style="color:${color}">${filterTotal}</span>
      <span class="filter-summary-sep">·</span>
      <span class="filter-summary-avg">~${avg}/д</span>
      <span class="filter-summary-days">${filterDays} дн.</span>`;
    list.appendChild(summary);

    days.forEach(d => {
      const dateStr = formatDate(d);
      const r   = data[dateStr] || {};
      const wl  = _wl.filter(x => x.date === dateStr);
      const tl  = _tl.filter(x => x.date === dateStr);
      const tm  = tl.reduce((s,x) => s+x.mins, 0);
      const sklad = (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
      const missedTotal = (+r.missed||0)+(+r.missedMl||0)+(+r.missedRefuse||0)+(+r.missedLate||0)+(+r.missedClosed||0)+(+r.missedParking||0);
      const mainVal = activeFilter === 'gave' ? sklad : activeFilter === 'missed' ? missedTotal : (+r[activeFilter]||0);
      if (!mainVal) return;

      const wd = t('weekdays')[d.getDay()];
      const card = document.createElement('div');
      card.className = 'filter-card';
      card.style.setProperty('--fc', color);

      const missedBreakdown = activeFilter === 'missed' ? `
        <div class="filter-missed-cats">
          ${r.missedMl     > 0 ? `<span class="fmc fmc--ml">📋 ${r.missedMl}</span>` : ''}
          ${r.missedRefuse > 0 ? `<span class="fmc fmc--refuse">🚫 ${r.missedRefuse}</span>` : ''}
          ${r.missedLate   > 0 ? `<span class="fmc fmc--late">⏱ ${r.missedLate}</span>` : ''}
          ${r.missedClosed > 0 ? `<span class="fmc fmc--closed">🔒 ${r.missedClosed}</span>` : ''}${r.missedParking > 0 ? `<span class="fmc fmc--parking">🅿️ ${r.missedParking}</span>` : ''}
        </div>` : '';

      card.innerHTML = `
        <div class="filter-card-hdr">
          <div class="filter-card-left">
            <span class="filter-card-date">${dateStr.slice(0,5)}</span>
            <span class="filter-card-wd">${wd}</span>
          </div>
          <div class="filter-card-right">
            <span class="filter-card-val">${mainVal}</span>
          </div>
        </div>
        ${missedBreakdown}`;

      card.addEventListener('click', () => openDetail(dateStr));
      list.appendChild(card);
    });

    updateTotals();
    updateBestDays();
    return;
  }

  // Normal grid view — grouped into collapsible weeks
  const today2 = new Date();
  const todayStr = formatDate(today2);
  const weeks = groupIntoWeeks(days);

  function buildDayCell(d) {
    const dateStr = formatDate(d);
    const wd  = t('weekdays')[d.getDay()];
    const r   = data[dateStr] || {};
    const wl  = _wl.filter(x => x.date === dateStr);
    const tl  = _tl.filter(x => x.date === dateStr);
    const tm  = tl.reduce((s,x) => s+x.mins, 0);
    const hd = hasData(dateStr) || wl.length > 0 || tm > 0;

    // Dominant color
    let domColor = '';
    if (+r.mob)    domColor = '#f472b6';
    else if (+r.prok)  domColor = '#fbbf24';
    else if ((+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0)) domColor = '#34d399';
    else if (tm)   domColor = '#818cf8';

    const cell = document.createElement('div');
    cell.className = 'day-cell' + (hd ? ' day-cell--data' : '') + (domColor ? '' : '');
    cell.dataset.date = dateStr;
    if (domColor && hd) cell.style.setProperty('--dom', domColor);

    const sklad = (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
    const workMinsCell = wl.reduce((s,x) => s+(x.mins||0), 0);
    const dots = [
      r.mob      ? `<span class="dc dc--mob">${r.mob}</span>`   : '',
      r.prok     ? `<span class="dc dc--prok">${r.prok}</span>` : '',
      sklad      ? `<span class="dc dc--gave">${sklad}</span>`  : '',
      wl.length  ? `<span class="dc dc--work">${wl.length}${workMinsCell > 0 ? '·' + toHM(workMinsCell) : ''}</span>` : '',
      (() => { const mt = (+r.missed||0)+(+r.missedMl||0)+(+r.missedRefuse||0)+(+r.missedLate||0)+(+r.missedClosed||0)+(+r.missedParking||0); return mt > 0 ? `<span class="dc dc--missed">-${mt}</span>` : ''; })(),
    ].join('');

    const indicators = [
      tm ? '<span class="di di--travel"></span>' : '',
    ].join('');

    cell.innerHTML = `
      <div class="day-cell-top">
        <div>
          <div class="day-cell-date">${dateStr.slice(0,5)}</div>
          <div class="day-cell-wd">${wd}</div>
        </div>
        <div class="day-cell-indicators">${indicators}</div>
      </div>
      <div class="day-cell-dots">${dots}</div>`;

    let pressTimer = null;
    cell.addEventListener('touchstart', () => { pressTimer = setTimeout(() => copyDaySummary(dateStr), 600); }, { passive:true });
    cell.addEventListener('touchend',   () => clearTimeout(pressTimer), { passive:true });
    cell.addEventListener('touchmove',  () => clearTimeout(pressTimer), { passive:true });
    cell.addEventListener('click', () => openDetail(dateStr));
    return cell;
  }

  weeks.forEach((weekDays, wi) => {
    let weekMob = 0, weekSklad = 0;
    weekDays.forEach(d => {
      const dateStr = formatDate(d);
      const r = data[dateStr] || {};
      weekMob   += (+r.mob || 0);
      weekSklad += (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
    });

    const isCurrentWeek = weekDays.some(d => formatDate(d) === todayStr);
    const block = document.createElement('div');
    block.className = 'week-block';

    const firstStr = formatDate(weekDays[0]).slice(0,5);
    const lastStr  = formatDate(weekDays[weekDays.length-1]).slice(0,5);
    const rangeLabel = weekDays.length > 1 ? `${firstStr}–${lastStr}` : firstStr;

    const hdr = document.createElement('div');
    hdr.className = 'week-hdr' + (isCurrentWeek ? ' week-hdr--open' : '');
    hdr.innerHTML = `
      <div class="week-hdr-left">
        <span class="week-hdr-num">Неделя ${wi+1}</span>
        <span class="week-hdr-range">${rangeLabel}</span>
      </div>
      <div class="week-hdr-metrics">
        <span class="week-mc week-mc--mob">М ${weekMob}</span>
        <span class="week-mc week-mc--sklad">С ${weekSklad}</span>
        <span class="week-chevron${isCurrentWeek ? ' week-chevron--open' : ''}">▾</span>
      </div>`;

    const body = document.createElement('div');
    body.className = 'week-body' + (isCurrentWeek ? ' week-body--open' : '');
    weekDays.forEach(d => body.appendChild(buildDayCell(d)));

    hdr.addEventListener('click', () => {
      hdr.classList.toggle('week-hdr--open');
      body.classList.toggle('week-body--open');
      hdr.querySelector('.week-chevron').classList.toggle('week-chevron--open');
    });

    block.appendChild(hdr);
    block.appendChild(body);
    list.appendChild(block);
  });

  updateTotals();
  updateBestDays();
}

function setFilter(f) {
  activeFilter = f;
  closeDetail();
  render();
}

let _activeDetail = null;

function openDetail(dateStr) {
  _activeDetail = dateStr;
  const r   = data[dateStr] || {};
  const _wl = loadWorkLog();
  const _tl = loadTravelLog();
  const wl  = _wl.filter(x => x.date === dateStr);
  const tl  = _tl.filter(x => x.date === dateStr);
  const tm  = tl.reduce((s,x) => s+x.mins, 0);
  const workMins = wl.reduce((s,x) => s+(x.mins||0), 0);
  const d   = new Date(dateStr.split('.').reverse().join('-'));
  const wd  = t('weekdays')[d.getDay()];
  const sklad = (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
  const total = (+r.mob||0)+(+r.prok||0)+sklad;

  document.getElementById('detailDate').textContent = dateStr;
  document.getElementById('detailWd').textContent   = wd;

  const totalsEl = document.getElementById('detailTotals');
  totalsEl.innerHTML = total > 0 ? `<span class="detail-total-lbl">Итого</span><span class="detail-total-val">${total}</span>` : '';

  document.getElementById('detailBody').innerHTML = `
    <div class="dp-grid">
      <div class="dp-tile dp-tile--mob" onclick="this.querySelector('input').focus()">
        <div class="dp-tile-label">${t('mobile')}</div>
        <input class="dp-tile-input" type="text" inputmode="text" value="${r.mob||''}" placeholder="0"
          onblur="evalField(this,'${dateStr}','mob')" onfocus="focusField(this,'${dateStr}','mob')">
      </div>
      <div class="dp-tile dp-tile--prok" onclick="this.querySelector('input').focus()">
        <div class="dp-tile-label">${t('prok')}</div>
        <input class="dp-tile-input" type="text" inputmode="text" value="${r.prok||''}" placeholder="0"
          onblur="evalField(this,'${dateStr}','prok')" onfocus="focusField(this,'${dateStr}','prok')">
      </div>
      <div class="dp-tile dp-tile--gave dp-tile--sklad-btn" onclick="openSkladPanel('${dateStr}')">
        <div class="dp-tile-label">Склад</div>
        <div class="dp-tile-sklad-preview">
          <span class="dp-sklad-dist" id="skladDistPrev_${dateStr}">${(+r.tookDist||0)+(+r.gaveDist||0) > 0 ? `Д: ${+r.tookDist||0}↓ ${+r.gaveDist||0}↑` : ''}</span>
          <span class="dp-sklad-mb" id="skladMbPrev_${dateStr}">${(+r.tookMb||0)+(+r.gaveMb||0) > 0 ? `МБ: ${+r.tookMb||0}↓ ${+r.gaveMb||0}↑` : ''}</span>
          <span class="dp-sklad-empty" id="skladEmpty_${dateStr}">${(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0) === 0 ? '○' : ''}</span>
        </div>
      </div>
      <div class="dp-tile dp-tile--inst" onclick="this.querySelector('input').focus()">
        <div class="dp-tile-label">Инсталляция</div>
        <input class="dp-tile-input" type="text" inputmode="text" value="${r.inst||''}" placeholder="0"
          onblur="evalField(this,'${dateStr}','inst'); syncInstWork('${dateStr}')" onfocus="focusField(this,'${dateStr}','inst')">
      </div>
    </div>

    <div class="missed-block">
      <div class="missed-block-hdr">
        <span class="section-label missed-label">Мимо · <span id="missedTotal_${dateStr}" style="font-size:11px">${(+r.missedMl||0)+(+r.missedRefuse||0)+(+r.missedLate||0)+(+r.missedClosed||0)+(+r.missedParking||0)}</span></span>
        <button class="missed-add-btn" onclick="toggleMissedPicker('${dateStr}')">+</button>
      </div>
      <div class="missed-picker" id="missedPicker_${dateStr}" style="display:none">
        ${[['missedMl','📋','Расхождение','В МЛ больше чем по факту','#fbbf24'],
           ['missedRefuse','🚫','Отказ','Клиент не захотел','#f87171'],
           ['missedLate','⏱','Не успел','Не доехал физически','#818cf8'],
           ['missedClosed','🔒','Закрыто','Точка была закрыта','#60a5fa'],['missedParking','🅿️','Паркинг','Не нашёл парковку','#a78bfa']].map(([key,icon,label,desc,color])=>
          `<button class="missed-cat-btn" onclick="addMissedCat('${dateStr}','${key}')" style="border-color:${color}20">
            <span>${icon}</span>
            <div><div style="color:${color};font-size:11px;font-weight:600">${label}</div><div style="color:#64748b;font-size:9px">${desc}</div></div>
          </button>`).join('')}
      </div>
      <div class="missed-entries" id="missedEntries_${dateStr}">
        ${[['missedMl','📋','Расхождение','#fbbf24'],
           ['missedRefuse','🚫','Отказ','#f87171'],
           ['missedLate','⏱','Не успел','#818cf8'],
           ['missedClosed','🔒','Закрыто','#60a5fa'],['missedParking','🅿️','Паркинг','#a78bfa']].filter(([key])=>r[key]!==undefined&&r[key]!==null).map(([key,icon,label,color])=>
          `<div class="missed-entry" style="background:${color}12;border-color:${color}30">
            <span>${icon}</span>
            <span class="missed-entry-label" style="color:#e2e8f0">${label}</span>
            <button onclick="changeMissedCat('${dateStr}','${key}',-1)" style="color:${color}">−</button>
            <span class="missed-entry-val" id="${key}_${dateStr}" style="color:${color}">${+r[key]||0}</span>
            <button onclick="changeMissedCat('${dateStr}','${key}',1)" style="color:${color}">+</button>
            <button class="missed-entry-del" onclick="removeMissedCat('${dateStr}','${key}')" style="color:${color}99">×</button>
          </div>`).join('')}
      </div>
    </div>

    <div class="dp-section">
      <div class="dp-section-hdr">
        <span class="dp-section-title dp-section-title--work">${t('sectionOther')}</span>
        <span class="day-time-chip" id="wchip_${dateStr}">${wl.length} ${t('records')}${workMins > 0 ? ' · ' + toHM(workMins) : ''}</span>
      </div>
      <div class="work-row">
        <input class="work-desc" type="text" placeholder="${t('workDesc')}" id="wd_${dateStr}"
          onkeydown="if(event.key==='Enter') addWork('${dateStr}')"/>
        <input class="work-mins" type="text" inputmode="numeric" placeholder="мин" id="wm_${dateStr}"/>
        <button class="add-work-btn" onclick="addWork('${dateStr}')">+</button>
      </div>
      <div id="wlist_${dateStr}" class="wlist-items">${wl.map(x => workItemHtml(x, dateStr)).join('')}</div>
    </div>

    <div class="dp-section">
      <div class="dp-section-hdr">
        <span class="dp-section-title dp-section-title--travel">${t('sectionTravel')}</span>
        <span class="day-time-chip travel" id="tchip_${dateStr}">${toHM(tm)}</span>
      </div>
      <div class="travel-row">
        <input class="travel-mins" type="number" min="1" placeholder="${t('minutes')}" id="tm_${dateStr}"/>
        <button class="add-travel-btn" onclick="addTravel('${dateStr}')">+</button>
      </div>
    </div>

    <button class="clear-btn" onclick="clearDay('${dateStr}')">${t('clearDay')}</button>`;

  const panel = document.getElementById('dayDetailPanel');
  panel.classList.add('open');

  // Highlight active cell
  document.querySelectorAll('.day-cell').forEach(c => c.classList.remove('day-cell--active'));
  const activeCell = document.querySelector(`.day-cell[data-date="${dateStr}"]`);
  if (activeCell) activeCell.classList.add('day-cell--active');
}

function closeDetail() {
  document.getElementById('dayDetailPanel').classList.remove('open');
  document.querySelectorAll('.day-cell').forEach(c => c.classList.remove('day-cell--active'));
  _activeDetail = null;
}

function openSkladPanel(dateStr) {
  const r = data[dateStr] || {};
  const panel = document.getElementById('skladPanel');
  panel.dataset.date = dateStr;

  const renderSkladBody = () => {
    const r2 = data[dateStr] || {};
    document.getElementById('sp_tookDist').textContent = +r2.tookDist || 0;
    document.getElementById('sp_gaveDist').textContent = +r2.gaveDist || 0;
    document.getElementById('sp_tookMb').textContent   = +r2.tookMb   || 0;
    document.getElementById('sp_gaveMb').textContent   = +r2.gaveMb   || 0;
  };

  panel.innerHTML = `
    <div class="sklad-panel-header">
      <button class="sklad-back-btn" onclick="closeSkladPanel('${dateStr}')">‹ День</button>
      <span class="sklad-panel-title">Склад</span>
      <span style="width:60px"></span>
    </div>
    <div class="sklad-panel-body">
      <div class="sp-group">
        <div class="sp-group-label sp-dist">Дистрибутор</div>
        <div class="sp-row">
          <div class="sp-cell ${(+r.tookDist||0) > 0 ? 'sp-cell--active-dist' : ''}">
            <div class="sp-cell-label">← Забрал</div>
            <div class="sp-counter">
              <button class="sp-btn sp-btn--minus" onclick="changeSklad('${dateStr}','tookDist',-1)">−</button>
              <span class="sp-val ${(+r.tookDist||0) > 0 ? 'sp-val--dist' : 'sp-val--zero'}" id="sp_tookDist">${+r.tookDist||0}</span>
              <button class="sp-btn sp-btn--plus-dist" onclick="changeSklad('${dateStr}','tookDist',1)">+</button>
            </div>
          </div>
          <div class="sp-cell ${(+r.gaveDist||0) > 0 ? 'sp-cell--active-dist' : ''}">
            <div class="sp-cell-label">Отдал →</div>
            <div class="sp-counter">
              <button class="sp-btn sp-btn--minus" onclick="changeSklad('${dateStr}','gaveDist',-1)">−</button>
              <span class="sp-val ${(+r.gaveDist||0) > 0 ? 'sp-val--dist' : 'sp-val--zero'}" id="sp_gaveDist">${+r.gaveDist||0}</span>
              <button class="sp-btn sp-btn--plus-dist" onclick="changeSklad('${dateStr}','gaveDist',1)">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="sp-group">
        <div class="sp-group-label sp-mb">Минибар</div>
        <div class="sp-row">
          <div class="sp-cell ${(+r.tookMb||0) > 0 ? 'sp-cell--active-mb' : ''}">
            <div class="sp-cell-label">← Забрал</div>
            <div class="sp-counter">
              <button class="sp-btn sp-btn--minus" onclick="changeSklad('${dateStr}','tookMb',-1)">−</button>
              <span class="sp-val ${(+r.tookMb||0) > 0 ? 'sp-val--mb' : 'sp-val--zero'}" id="sp_tookMb">${+r.tookMb||0}</span>
              <button class="sp-btn sp-btn--plus-mb" onclick="changeSklad('${dateStr}','tookMb',1)">+</button>
            </div>
          </div>
          <div class="sp-cell ${(+r.gaveMb||0) > 0 ? 'sp-cell--active-mb' : ''}">
            <div class="sp-cell-label">Отдал →</div>
            <div class="sp-counter">
              <button class="sp-btn sp-btn--minus" onclick="changeSklad('${dateStr}','gaveMb',-1)">−</button>
              <span class="sp-val ${(+r.gaveMb||0) > 0 ? 'sp-val--mb' : 'sp-val--zero'}" id="sp_gaveMb">${+r.gaveMb||0}</span>
              <button class="sp-btn sp-btn--plus-mb" onclick="changeSklad('${dateStr}','gaveMb',1)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  panel.classList.add('open');
}

function closeSkladPanel(dateStr) {
  const panel = document.getElementById('skladPanel');
  panel.classList.remove('open');
  if (dateStr) refreshSkladPreview(dateStr);
}

function changeSklad(dateStr, key, delta) {
  if (!data[dateStr]) data[dateStr] = {};
  data[dateStr][key] = Math.max(0, (+data[dateStr][key]||0) + delta);
  save();
  // Update counter value in panel
  const el = document.getElementById('sp_' + key);
  if (el) {
    const val = data[dateStr][key];
    el.textContent = val;
    const isDistKey = key === 'tookDist' || key === 'gaveDist';
    el.className = 'sp-val ' + (val > 0 ? (isDistKey ? 'sp-val--dist' : 'sp-val--mb') : 'sp-val--zero');
    // Update cell active state
    const cell = el.closest('.sp-cell');
    if (cell) {
      cell.classList.toggle('sp-cell--active-dist', isDistKey && val > 0);
      cell.classList.toggle('sp-cell--active-mb', !isDistKey && val > 0);
    }
  }
  refreshSkladPreview(dateStr);
  updateTotals();
  updateCellData(dateStr);
}

function refreshSkladPreview(dateStr) {
  const r = data[dateStr] || {};
  const distTotal = (+r.tookDist||0) + (+r.gaveDist||0);
  const mbTotal   = (+r.tookMb||0)   + (+r.gaveMb||0);
  const distEl  = document.getElementById('skladDistPrev_' + dateStr);
  const mbEl    = document.getElementById('skladMbPrev_' + dateStr);
  const emptyEl = document.getElementById('skladEmpty_' + dateStr);
  if (distEl)  distEl.textContent  = distTotal > 0 ? `Д: ${+r.tookDist||0}↓ ${+r.gaveDist||0}↑` : '';
  if (mbEl)    mbEl.textContent    = mbTotal   > 0 ? `МБ: ${+r.tookMb||0}↓ ${+r.gaveMb||0}↑` : '';
  if (emptyEl) emptyEl.textContent = distTotal + mbTotal === 0 ? '○' : '';
}

function refreshDetail(dateStr) {
  if (_activeDetail === dateStr) openDetail(dateStr);
}

function toggle(header) { header.parentElement.classList.toggle('open'); }

// ── Work log ──────────────────────────────────
function addWork(dateStr) {
  const desc = document.getElementById('wd_' + dateStr).value.trim();
  if (!desc) return;
  const minsEl = document.getElementById('wm_' + dateStr);
  const mins = minsEl ? parseInt(minsEl.value) || 0 : 0;
  const log = loadWorkLog();
  log.push({ id: Date.now(), date: dateStr, desc, mins: mins || undefined });
  saveWorkLog(log);
  document.getElementById('wd_' + dateStr).value = '';
  if (minsEl) minsEl.value = '';
  refreshDayExtras(dateStr);
  updateTotals();
}

function delWork(dateStr, id) {
  saveWorkLog(loadWorkLog().filter(x => x.id !== id));
  refreshDayExtras(dateStr);
  updateTotals();
}

// ── Auto-sync "Инсталляция" counter → "Другие работы" entry ──
const INST_LABEL = 'Инсталляция дистрибутора';

function syncInstWork(dateStr) {
  const r = data[dateStr] || {};
  const count = +r.inst || 0;
  const log = loadWorkLog();
  const existing = log.find(x => x.date === dateStr && x.desc && x.desc.startsWith(INST_LABEL));

  if (count > 0) {
    const newDesc = `${INST_LABEL} ×${count}`;
    if (existing) {
      existing.desc = newDesc;
    } else {
      log.push({ id: Date.now(), date: dateStr, desc: newDesc, mins: undefined });
    }
    saveWorkLog(log);
  } else if (existing) {
    saveWorkLog(log.filter(x => x.id !== existing.id));
  }

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


function toggleMissedPicker(dateStr) {
  const picker = document.getElementById('missedPicker_' + dateStr);
  if (picker) picker.style.display = picker.style.display === 'none' ? 'flex' : 'none';
}

function addMissedCat(dateStr, key) {
  if (!data[dateStr]) data[dateStr] = {};
  if (data[dateStr][key] === undefined || data[dateStr][key] === null) {
    data[dateStr][key] = 0;
  }
  save();
  toggleMissedPicker(dateStr);
  refreshDetail(dateStr);
  updateTotals();
}

function changeMissedCat(dateStr, key, delta) {
  if (!data[dateStr]) data[dateStr] = {};
  data[dateStr][key] = Math.max(0, (+data[dateStr][key]||0) + delta);
  save();
  refreshDetail(dateStr);
  updateCellData(dateStr);
  updateTotals();
}

function removeMissedCat(dateStr, key) {
  if (data[dateStr]) delete data[dateStr][key];
  save();
  refreshDetail(dateStr);
  updateCellData(dateStr);
  updateTotals();
}

function changeMissed(dateStr, delta) {
  if (!data[dateStr]) data[dateStr] = {};
  const cur = +data[dateStr].missed || 0;
  const next = Math.max(0, cur + delta);
  data[dateStr].missed = next;
  save();
  const el = document.getElementById('missed_' + dateStr);
  if (el) el.textContent = next;
  updateCellData(dateStr);
  updateTotals();
}

function refreshDayExtras(dateStr) {
  const wl = loadWorkLog().filter(x => x.date === dateStr);
  const tl = loadTravelLog().filter(x => x.date === dateStr);
  const tm = tl.reduce((s,x) => s+x.mins, 0);

  const wlist = document.getElementById('wlist_' + dateStr);
  if (wlist) wlist.innerHTML = wl.map(x => workItemHtml(x, dateStr)).join('');

  const wchip = document.getElementById('wchip_' + dateStr);
  if (wchip) wchip.innerHTML = `${t('otherWorkRecords')}<span>${wl.length} ${t('records')}</span>`;

  const tchip = document.getElementById('tchip_' + dateStr);
  if (tchip) tchip.innerHTML = `${t('onRoad')}<span>${toHM(tm)}</span>`;

  refreshDetail(dateStr);
  updateCellData(dateStr);
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
  closeDetail();
  render();
}

function updateCard(dateStr) { updateCellData(dateStr); }

function updateCellData(dateStr) {
  const cell = document.querySelector(`.day-cell[data-date="${dateStr}"]`);
  if (!cell) return;
  const r  = data[dateStr] || {};
  const wl = loadWorkLog().filter(x => x.date === dateStr);
  const tl = loadTravelLog().filter(x => x.date === dateStr);
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  const sklad = (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
  const total = (+r.mob||0)+(+r.prok||0)+sklad;
  const hd = hasData(dateStr) || wl.length > 0 || tm > 0;

  let domColor = '';
  if (+r.mob)   domColor = '#f472b6';
  else if (+r.prok)  domColor = '#fbbf24';
  else if (sklad)    domColor = '#34d399';
  else if (tm)       domColor = '#818cf8';

  cell.classList.toggle('day-cell--data', hd);
  if (domColor) cell.style.setProperty('--dom', domColor);

  const workMinsU = wl.reduce((s,x) => s+(x.mins||0), 0);
  const dots = [
    r.mob     ? `<span class="dc dc--mob">${r.mob}</span>`   : '',
    r.prok    ? `<span class="dc dc--prok">${r.prok}</span>` : '',
    sklad     ? `<span class="dc dc--gave">${sklad}</span>`  : '',
    wl.length ? `<span class="dc dc--work">${wl.length}${workMinsU > 0 ? '·' + toHM(workMinsU) : ''}</span>` : '',
    (() => { const mt = (+r.missed||0)+(+r.missedMl||0)+(+r.missedRefuse||0)+(+r.missedLate||0)+(+r.missedClosed||0)+(+r.missedParking||0); return mt > 0 ? `<span class="dc dc--missed">-${mt}</span>` : ''; })(),
  ].join('');
  const indicators = tm ? '<span class="di di--travel"></span>' : '';

  const dotsEl = cell.querySelector('.day-cell-dots');
  if (dotsEl) dotsEl.innerHTML = dots;

  const indEl = cell.querySelector('.day-cell-indicators');
  if (indEl) indEl.innerHTML = indicators;

  // Refresh this day's week metrics (mob/sklad chips in the week header)
  const weekBody = cell.closest('.week-body');
  if (weekBody) {
    const hdr = weekBody.previousElementSibling;
    if (hdr && hdr.classList.contains('week-hdr')) {
      let weekMob = 0, weekSklad = 0;
      weekBody.querySelectorAll('.day-cell').forEach(c => {
        const ds = c.dataset.date;
        const rr = data[ds] || {};
        weekMob   += (+rr.mob || 0);
        weekSklad += (+rr.sklad||0)+(+rr.mbSklad||0)+(+rr.tookDist||0)+(+rr.gaveDist||0)+(+rr.tookMb||0)+(+rr.gaveMb||0);
      });
      const mobEl   = hdr.querySelector('.week-mc--mob');
      const skladEl = hdr.querySelector('.week-mc--sklad');
      if (mobEl)   mobEl.textContent   = `М ${weekMob}`;
      if (skladEl) skladEl.textContent = `С ${weekSklad}`;
    }
  }
}

function updateTotals() {
  let mob=0, sklad=0, mbSklad=0, tookDist=0, gaveDist=0, tookMb=0, gaveMb=0, prok=0, inst=0, missed=0;
  Object.values(data).forEach(r => {
    mob     += +r.mob     || 0;
    sklad   += +r.sklad   || 0;
    mbSklad += +r.mbSklad || 0;
    tookDist+= +r.tookDist|| 0;
    gaveDist+= +r.gaveDist|| 0;
    tookMb  += +r.tookMb  || 0;
    gaveMb  += +r.gaveMb  || 0;
    prok    += +r.prok    || 0;
    inst    += +r.inst    || 0;
    missed  += (+r.missed||0) + (+r.missedMl||0) + (+r.missedRefuse||0) + (+r.missedLate||0) + (+r.missedClosed||0) + (+r.missedParking||0);
  });

  // Склад chip expanded breakdown
  const elTookDist = document.getElementById('chip_tookDist');
  const elGaveDist = document.getElementById('chip_gaveDist');
  const elTookMb   = document.getElementById('chip_tookMb');
  const elGaveMb   = document.getElementById('chip_gaveMb');
  if (elTookDist) elTookDist.textContent = tookDist;
  if (elGaveDist) elGaveDist.textContent = gaveDist;
  if (elTookMb)   elTookMb.textContent   = tookMb;
  if (elGaveMb)   elGaveMb.textContent   = gaveMb;

  const skladTotal = sklad + mbSklad + tookDist + gaveDist + tookMb + gaveMb;
  const elSkladChipVal = document.getElementById('totalSkladNew');
  if (elSkladChipVal) elSkladChipVal.textContent = skladTotal > 0 ? skladTotal : 0;

  // Count days with mob/gave data
  const mobDays  = Object.values(data).filter(r => +r.mob  > 0).length;
  const gladDays = Object.values(data).filter(r => (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0) > 0).length;
  const mobAvg  = mobDays  > 0 ? (mob  / mobDays).toFixed(1)  : null;
  const gaveAvg = gladDays > 0 ? ((sklad+mbSklad+tookDist+gaveDist+tookMb+gaveMb) / gladDays).toFixed(1) : null;

  document.getElementById('totalMob').textContent = mob;
  const elMobAvg = document.getElementById('avgMob');
  if (elMobAvg) elMobAvg.textContent = mobAvg ? `~${mobAvg}/д` : '';

  const elSklad = document.getElementById('totalSklad');
  if (elSklad) elSklad.textContent = sklad + mbSklad + tookDist + gaveDist + tookMb + gaveMb;
  const elGaveAvg = document.getElementById('avgGave');
  if (elGaveAvg) elGaveAvg.textContent = gaveAvg ? `~${gaveAvg}/д` : '';
  const elMbSklad = document.getElementById('totalMbSklad');
  if (elMbSklad) elMbSklad.textContent = mbSklad;
  const elProk = document.getElementById('totalProk');
  if (elProk) elProk.textContent = prok;
  const elInst = document.getElementById('totalInst');
  if (elInst) elInst.textContent = inst;

  const wl = loadWorkLog();
  const tl = loadTravelLog();
  const wCount = wl.length;
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  const workTotalMins = wl.reduce((s, x) => s + (x.mins || 0), 0);
  const elWork = document.getElementById('totalExtraWork');
  const elWorkTime = document.getElementById('totalExtraWorkTime');
  const elWorkDot = document.querySelector('.stat-tile-dot');
  if (elWork) elWork.textContent = wCount;
  if (elWorkTime) elWorkTime.textContent = workTotalMins > 0 ? toHM(workTotalMins) : '';
  if (elWorkDot) elWorkDot.classList.toggle('sr-only', workTotalMins === 0);
  document.getElementById('totalExtraTravel').textContent = toHM(tm);

  const totalAll = mob + sklad + mbSklad + tookDist + gaveDist + tookMb + gaveMb;
  const elAll = document.getElementById('totalAll');
  if (elAll) elAll.textContent = totalAll;
  const elMissed = document.getElementById('totalMissed');
  if (elMissed) elMissed.textContent = missed;

  const workdays = getWorkdays(year, month);
  let skladDays = 0, trassaDays = 0;
  workdays.forEach(d => {
    const dateStr = formatDate(d);
    const hasReport = hasData(dateStr);
    const hasWork   = wl.some(x => x.date === dateStr);
    const hasTravel = tl.some(x => x.date === dateStr);
    if (hasReport || hasWork || hasTravel) {
      if (hasTravel) trassaDays++;
      else skladDays++;
    }
  });
  const elSkl = document.getElementById('totalSkladDays');
  const elTrs = document.getElementById('totalTrassaDays');
  if (elSkl) elSkl.textContent = skladDays;
  if (elTrs) elTrs.textContent = trassaDays;
}

function changeMonth(dir) {
  month += dir;
  if (month > 11) { month = 0;  year++; }
  if (month < 0)  { month = 11; year--; }
  invalidateLogCache();
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

// ── Summary ───────────────────────────────────
function copySummary() { shareSummary(); }

// ── Chart page (vanilla canvas, no CDN) ───────
// ── Stats page ────────────────────────────────
function openStats() {
  document.getElementById('pageMain').classList.remove('active');
  document.getElementById('pageStats').classList.add('active');
  renderStats();
}

function closeStats() {
  document.getElementById('pageStats').classList.remove('active');
  document.getElementById('pageMain').classList.add('active');
}

function getMonthData(y, m) {
  try { return JSON.parse(localStorage.getItem(`report_${y}_${m}`) || '{}'); }
  catch(e) { return {}; }
}

function getMonthWorkLog(y, m) {
  try { return JSON.parse(localStorage.getItem(`worklog_${y}_${m}`) || '[]'); }
  catch(e) { return []; }
}

function getMonthTravelLog(y, m) {
  try { return JSON.parse(localStorage.getItem(`travellog_${y}_${m}`) || '[]'); }
  catch(e) { return []; }
}

function dayStationTotal(r) {
  return (+r.sklad||0)+(+r.mbSklad||0)+(+r.tookDist||0)+(+r.gaveDist||0)+(+r.tookMb||0)+(+r.gaveMb||0);
}

function dayMissedTotal(r) {
  return (+r.missed||0)+(+r.missedMl||0)+(+r.missedRefuse||0)+(+r.missedLate||0)+(+r.missedClosed||0)+(+r.missedParking||0);
}

function renderStats() {
  const data2 = getMonthData(year, month);
  const wl2 = getMonthWorkLog(year, month);
  const tl2 = getMonthTravelLog(year, month);
  const workdays = getWorkdays(year, month);

  document.getElementById('statsMonthLabel').textContent = `${t('months')[month]} ${year}`;

  const dates = Object.keys(data2);
  const hasAnyData = dates.length > 0 || wl2.length > 0 || tl2.length > 0;

  const content = document.getElementById('statsContent');

  if (!hasAnyData) {
    content.innerHTML = `<div class="sp-no-data">Пока нет данных за этот месяц.<br>Заполни хотя бы пару дней — здесь появится статистика.</div>`;
    return;
  }

  let html = '';
  html += renderSummarySection(data2);
  html += renderForecastSection(data2, workdays);
  html += renderWeekdaySection(data2, workdays);
  html += renderRecordsSection(data2, tl2, workdays);
  html += renderStreaksSection(data2, workdays);
  html += renderMissedSection(data2);
  html += renderTrendSection(data2, tl2);
  html += renderOtherWorkSection(wl2);
  html += renderAvgPerVisitSection(data2, tl2);

  content.innerHTML = html;
}

// ── Summary bar (replaces old standalone chart page) ──
function renderSummarySection(data2) {
  let mob = 0, sklad = 0;
  Object.values(data2).forEach(r => {
    mob += +r.mob || 0;
    sklad += dayStationTotal(r);
  });

  const total = mob + sklad;
  if (total === 0) return '';

  const segments = [
    { label: 'Мобильная', val: mob,   color: '#f472b6' },
    { label: 'Склад',     val: sklad, color: '#34d399' },
  ].filter(s => s.val > 0);

  const workdaysWithData = Object.keys(data2).filter(d => (+data2[d].mob||0) + dayStationTotal(data2[d]) > 0).length;
  const avgPerDay = workdaysWithData > 0 ? (total / workdaysWithData).toFixed(1) : 0;

  const bar = segments.map(s => {
    const pct = (s.val / total) * 100;
    return `<div class="sp-stack-seg" style="width:${pct}%;background:${s.color}">${pct > 12 ? `<span class="sp-stack-seg-label">${Math.round(pct)}%</span>` : ''}</div>`;
  }).join('');

  const legend = segments.map(s => `
    <div class="sp-stack-leg-item">
      <div class="sp-stack-dot" style="background:${s.color}"></div>
      <span class="sp-stack-leg-text">${s.label} <b>${s.val}</b></span>
    </div>`).join('');

  return `
    <div class="sp-section">
      <div class="sp-section-label">Сводка за месяц</div>
      <div class="sp-card">
        <div class="sp-stack-bar">${bar}</div>
        <div class="sp-stack-legend">${legend}</div>
        <div class="sp-grid-stats">
          <div class="sp-grid-stat">
            <div class="sp-grid-stat-lbl">Всего за месяц</div>
            <div class="sp-grid-stat-val" style="color:#e8e8f0">${total}</div>
          </div>
          <div class="sp-grid-stat">
            <div class="sp-grid-stat-lbl">В среднем/день</div>
            <div class="sp-grid-stat-val" style="color:#818cf8">${avgPerDay}</div>
          </div>
        </div>
      </div>
    </div>`;
}

// ── Forecast ──
function renderForecastSection(data2, workdays) {
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;
  const passedDays = isCurrentMonth
    ? workdays.filter(d => d <= today).length
    : workdays.length;
  if (passedDays === 0) return '';

  let currentTotal = 0;
  Object.values(data2).forEach(r => {
    currentTotal += (+r.mob||0) + dayStationTotal(r);
  });

  const dailyAvg = currentTotal / passedDays;
  const totalDays = workdays.length;
  const projected = Math.round(dailyAvg * totalDays);
  const pct = Math.min(100, Math.round((passedDays / totalDays) * 100));

  // Only show forward-looking forecast if month isn't over yet
  const isFinished = !isCurrentMonth && (new Date(year, month+1, 1) <= today);

  return `
    <div class="sp-section">
      <div class="sp-section-label">${isFinished ? 'Итог месяца' : 'Прогноз месяца'}</div>
      <div class="sp-forecast">
        <div class="sp-forecast-glow"></div>
        <div class="sp-forecast-row">
          <div>
            <div class="sp-forecast-label">${isFinished ? 'Итоговый показатель' : 'При текущем темпе закончишь с'}</div>
            <div><span class="sp-forecast-num">${isFinished ? currentTotal : projected}</span><span class="sp-forecast-unit">визитов</span></div>
          </div>
          <div class="sp-forecast-pace">
            <div class="sp-forecast-pace-val">${dailyAvg.toFixed(1)}</div>
            <div class="sp-forecast-pace-lbl">в день</div>
          </div>
        </div>
        <div class="sp-forecast-track">
          <div class="sp-forecast-fill" style="width:${pct}%"></div>
        </div>
        <div class="sp-forecast-days">День <b>${passedDays}</b> из ${totalDays} рабочих</div>
      </div>
    </div>`;
}

// ── Weekday comparison ──
function renderWeekdaySection(data2, workdays) {
  const wdNames = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
  const sums = [0,0,0,0,0,0,0];
  const counts = [0,0,0,0,0,0,0];

  workdays.forEach(d => {
    const dateStr = formatDate(d);
    const r = data2[dateStr];
    if (!r) return;
    const val = (+r.mob||0) + dayStationTotal(r);
    if (val > 0) {
      sums[d.getDay()] += val;
      counts[d.getDay()]++;
    }
  });

  // Only Mon-Fri (1-5) since these are workdays typically
  const days = [1,2,3,4,5].map(i => ({
    idx: i, name: wdNames[i],
    avg: counts[i] > 0 ? sums[i] / counts[i] : 0
  })).filter(d => counts[d.idx] > 0);

  if (days.length < 2) return '';

  const max = Math.max(...days.map(d => d.avg), 0.1);
  const best = days.reduce((a,b) => b.avg > a.avg ? b : a, days[0]);
  const worst = days.reduce((a,b) => b.avg < a.avg ? b : a, days[0]);
  const diffPct = worst.avg > 0 ? Math.round(((best.avg - worst.avg) / best.avg) * 100) : 0;

  const bars = days.map(d => `
    <div class="sp-wd-col">
      <span class="sp-wd-val ${d.idx === best.idx ? 'sp-wd-val--best' : ''}">${d.avg.toFixed(1)}</span>
      <div class="sp-wd-bar ${d.idx === best.idx ? 'sp-wd-bar--best' : 'sp-wd-bar--mid'}" style="height:${Math.max((d.avg / max) * 70, 3)}px"></div>
      <span class="sp-wd-name ${d.idx === best.idx ? 'sp-wd-name--best' : ''}">${d.name}</span>
    </div>`).join('');

  const insight = best.idx !== worst.idx
    ? `Лучший день — <b>${weekdayFull(best.idx)}</b> (${best.avg.toFixed(1)} в среднем). По ${weekdayGenitive(worst.idx)} на ${diffPct}% меньше.`
    : '';

  return `
    <div class="sp-section">
      <div class="sp-section-label">Мобильная + Склад по дням недели</div>
      <div class="sp-card">
        <div class="sp-wd-grid">${bars}</div>
        ${insight ? `<div class="sp-wd-insight">${insight}</div>` : ''}
      </div>
    </div>`;
}

function weekdayFull(idx) {
  return ['воскресенье','понедельник','вторник','среду','четверг','пятницу','субботу'][idx];
}
function weekdayGenitive(idx) {
  return ['воскресеньям','понедельникам','вторникам','средам','четвергам','пятницам','субботам'][idx];
}

// ── Records ──
function renderRecordsSection(data2, tl2, workdays) {
  let bestMob = { date: null, val: 0 };
  let bestStation = { date: null, val: 0 };

  Object.entries(data2).forEach(([dateStr, r]) => {
    const mob = +r.mob || 0;
    const station = dayStationTotal(r);
    if (mob > bestMob.val) bestMob = { date: dateStr, val: mob };
    if (station > bestStation.val) bestStation = { date: dateStr, val: station };
  });

  // Больше всего "Других работ" по времени за день
  let bestOtherWork = { date: null, val: 0 };
  const wl2 = getMonthWorkLog(year, month);
  const workMinsByDate = {};
  wl2.forEach(x => { workMinsByDate[x.date] = (workMinsByDate[x.date]||0) + (x.mins||0); });
  Object.entries(workMinsByDate).forEach(([dateStr, mins]) => {
    if (mins > bestOtherWork.val) bestOtherWork = { date: dateStr, val: mins };
  });

  // День с наибольшим числом разных типов активности (Мобильная, Склад, Прок, Инсталляция)
  let bestVariety = { date: null, val: 0 };
  Object.entries(data2).forEach(([dateStr, r]) => {
    let types = 0;
    if (+r.mob) types++;
    if (dayStationTotal(r) > 0) types++;
    if (+r.prok) types++;
    if (+r.inst) types++;
    if (types > bestVariety.val) bestVariety = { date: dateStr, val: types };
  });

  const records = [
    bestMob.val > 0       ? { icon: '📱', val: bestMob.val,          lbl: 'Лучший день · Мобильная',        date: bestMob.date,       color: '#f472b6' } : null,
    bestStation.val > 0   ? { icon: '📦', val: bestStation.val,      lbl: 'Лучший день · Склад',            date: bestStation.date,   color: '#34d399' } : null,
    bestOtherWork.val > 0 ? { icon: '🛠️', val: toHM(bestOtherWork.val), lbl: 'Больше всего Других работ',   date: bestOtherWork.date, color: '#fb923c' } : null,
    bestVariety.val >= 2  ? { icon: '🎯', val: bestVariety.val,       lbl: 'Самый разносторонний день',      date: bestVariety.date,   color: '#fbbf24' } : null,
  ].filter(Boolean);

  if (records.length === 0) return '';

  const cards = records.map(r => `
    <div class="sp-record-card">
      <span class="sp-record-icon">${r.icon}</span>
      <div class="sp-record-val" style="color:${r.color}">${r.val}</div>
      <div class="sp-record-lbl">${r.lbl}</div>
      <div class="sp-record-date">${r.date}${year}</div>
    </div>`).join('');

  return `
    <div class="sp-section">
      <div class="sp-section-label">Рекорды месяца</div>
      <div class="sp-records-grid">${cards}</div>
    </div>`;
}

// ── Streaks ──
function renderStreaksSection(data2, workdays) {
  // Streak 1: consecutive workdays without any "missed"
  let cleanStreak = 0, maxCleanStreak = 0;
  // Streak 2: consecutive workdays with (mob+station) >= 14
  let thresholdStreak = 0, maxThresholdStreak = 0;

  workdays.forEach(d => {
    const dateStr = formatDate(d);
    const r = data2[dateStr];
    if (!r) { cleanStreak = 0; thresholdStreak = 0; return; }

    const missed = dayMissedTotal(r);
    if (missed === 0 && hasAnyDayData(r)) { cleanStreak++; maxCleanStreak = Math.max(maxCleanStreak, cleanStreak); }
    else if (hasAnyDayData(r)) cleanStreak = 0;

    const val = (+r.mob||0) + dayStationTotal(r);
    if (val >= 14) { thresholdStreak++; maxThresholdStreak = Math.max(maxThresholdStreak, thresholdStreak); }
    else if (hasAnyDayData(r)) thresholdStreak = 0;
  });

  if (maxCleanStreak === 0 && maxThresholdStreak === 0) return '';

  return `
    <div class="sp-section">
      <div class="sp-section-label">Серии</div>
      <div class="sp-streak-row">
        <div class="sp-streak-card">
          <div class="sp-streak-num sp-streak-num--fire">${maxCleanStreak}</div>
          <div class="sp-streak-lbl">дней подряд без<br>пропущенных визитов</div>
        </div>
        <div class="sp-streak-card">
          <div class="sp-streak-num sp-streak-num--clean">${maxThresholdStreak}</div>
          <div class="sp-streak-lbl">дней подряд<br>с показателем 14+</div>
        </div>
      </div>
    </div>`;
}

function hasAnyDayData(r) {
  return !!(r.mob || r.prok || r.sklad || r.mbSklad || r.tookDist || r.gaveDist || r.tookMb || r.gaveMb || r.inst ||
    r.missed || r.missedMl || r.missedRefuse || r.missedLate || r.missedClosed || r.missedParking);
}

// ── Missed breakdown ──
function renderMissedSection(data2) {
  let ml=0, refuse=0, late=0, closed=0, parking=0;
  Object.values(data2).forEach(r => {
    ml      += +r.missedMl||0;
    refuse  += +r.missedRefuse||0;
    late    += +r.missedLate||0;
    closed  += +r.missedClosed||0;
    parking += +r.missedParking||0;
  });

  const total = ml + refuse + late + closed + parking;
  if (total === 0) return '';

  const items = [
    { name: 'Отказ',     val: refuse,  color: '#f87171' },
    { name: 'Закрыто',   val: closed,  color: '#fb923c' },
    { name: 'Поздно',    val: late,    color: '#fbbf24' },
    { name: 'Парковка',  val: parking, color: '#a78bfa' },
    { name: 'ML',        val: ml,      color: '#60a5fa' },
  ].filter(i => i.val > 0).sort((a,b) => b.val - a.val);

  const rows = items.map(i => {
    const pct = Math.round((i.val / total) * 100);
    return `
      <div class="sp-missed-row">
        <span class="sp-missed-name">${i.name}</span>
        <div class="sp-missed-track">
          <div class="sp-missed-fill" style="width:${pct}%;background:${i.color}"></div>
        </div>
        <span class="sp-missed-pct" style="color:${i.color}">${pct}%</span>
      </div>`;
  }).join('');

  return `
    <div class="sp-section">
      <div class="sp-section-label">Причины «Мимо»</div>
      <div class="sp-card">
        <div class="sp-missed-bars">${rows}</div>
      </div>
    </div>`;
}

// ── Trend vs previous month ──
function renderTrendSection(data2, tl2) {
  let prevMonth = month - 1, prevYear = year;
  if (prevMonth < 0) { prevMonth = 11; prevYear--; }

  const prevData = getMonthData(prevYear, prevMonth);
  const prevTl = getMonthTravelLog(prevYear, prevMonth);

  if (Object.keys(prevData).length === 0 && prevTl.length === 0) return '';

  const sumField = (d, field) => Object.values(d).reduce((s,r) => s + (+r[field]||0), 0);
  const sumStation = (d) => Object.values(d).reduce((s,r) => s + dayStationTotal(r), 0);
  const sumMissed = (d) => Object.values(d).reduce((s,r) => s + dayMissedTotal(r), 0);
  const sumTravel = (tl) => tl.reduce((s,x) => s + x.mins, 0);

  const rows = [
    { label: 'Мобильная',    old: sumField(prevData,'mob'),  val: sumField(data2,'mob') },
    { label: 'Склад',        old: sumStation(prevData),      val: sumStation(data2) },
    { label: 'Прок',         old: sumField(prevData,'prok'), val: sumField(data2,'prok') },
    { label: 'Инсталляция',  old: sumField(prevData,'inst'), val: sumField(data2,'inst') },
    { label: 'Мимо',         old: sumMissed(prevData),       val: sumMissed(data2), positiveIsDown: true },
  ];

  const travelOld = sumTravel(prevTl), travelNew = sumTravel(tl2);

  let rowsHtml = rows.map(r => {
    if (r.old === 0 && r.val === 0) return '';
    const pct = r.old > 0 ? Math.abs(Math.round(((r.val - r.old) / r.old) * 100)) : null;
    let up;
    if (r.positiveIsDown) up = r.val <= r.old;
    else up = r.val >= r.old;
    const same = r.val === r.old;
    return `
      <div class="sp-trend-row">
        <span class="sp-trend-label">${r.label}</span>
        ${same ? `<span class="sp-trend-nochange">без изменений</span>` : `
        <div class="sp-trend-vals">
          <span class="sp-trend-old">${r.old}</span>
          <span class="sp-trend-arrow">→</span>
          <span class="sp-trend-new">${r.val}</span>
          <span class="sp-trend-delta ${up ? 'sp-trend-delta--up' : 'sp-trend-delta--down'}">${up ? '↑' : '↓'} ${pct !== null ? pct + '%' : ''}</span>
        </div>`}
      </div>`;
  }).join('');

  if (travelOld > 0 || travelNew > 0) {
    const up = travelNew <= travelOld;
    const same = travelNew === travelOld;
    rowsHtml += `
      <div class="sp-trend-row">
        <span class="sp-trend-label">Время в пути</span>
        ${same ? `<span class="sp-trend-nochange">без изменений</span>` : `
        <div class="sp-trend-vals">
          <span class="sp-trend-old">${toHM(travelOld)}</span>
          <span class="sp-trend-arrow">→</span>
          <span class="sp-trend-new">${toHM(travelNew)}</span>
          <span class="sp-trend-delta ${up ? 'sp-trend-delta--up' : 'sp-trend-delta--down'}">${up ? '↓ меньше' : '↑ больше'}</span>
        </div>`}
      </div>`;
  }

  if (!rowsHtml) return '';

  const prevMonthName = t('months')[prevMonth];
  const curMonthName = t('months')[month];

  return `
    <div class="sp-section">
      <div class="sp-section-label">${prevMonthName} → ${curMonthName}</div>
      <div class="sp-card">${rowsHtml}</div>
    </div>`;
}

// ── Other work ──
function renderOtherWorkSection(wl2) {
  if (wl2.length === 0) return '';

  const totalMins = wl2.reduce((s,x) => s + (x.mins||0), 0);
  const avgMins = wl2.length > 0 ? Math.round(totalMins / wl2.length) : 0;

  // Count by description (normalize "×N" suffix for grouping similar entries loosely, but keep exact text grouping otherwise)
  const counts = {};
  wl2.forEach(x => {
    const key = x.desc || 'Без названия';
    counts[key] = (counts[key]||0) + 1;
  });

  const top = Object.entries(counts)
    .sort((a,b) => b[1] - a[1])
    .slice(0, 3);

  const colors = ['#a78bfa', '#60a5fa', '#fb923c'];
  const maxCount = top.length > 0 ? top[0][1] : 1;

  const rows = top.map(([name, count], i) => `
    <div class="sp-missed-row">
      <span class="sp-ow-name">${name}</span>
      <div class="sp-ow-track">
        <div class="sp-ow-fill" style="width:${(count/maxCount)*100}%;background:${colors[i]||'#a78bfa'}"></div>
      </div>
      <span class="sp-ow-count" style="color:${colors[i]||'#a78bfa'}">×${count}</span>
    </div>`).join('');

  return `
    <div class="sp-section">
      <div class="sp-section-label">Другие работы</div>
      <div class="sp-card">
        <div class="sp-otherwork-stats">
          <div class="sp-ow-stat">
            <div class="sp-ow-stat-val">${wl2.length}</div>
            <div class="sp-ow-stat-lbl">записей<br>за месяц</div>
          </div>
          <div class="sp-ow-stat">
            <div class="sp-ow-stat-val">${toHM(totalMins)}</div>
            <div class="sp-ow-stat-lbl">всего<br>времени</div>
          </div>
          <div class="sp-ow-stat">
            <div class="sp-ow-stat-val">${avgMins} м</div>
            <div class="sp-ow-stat-lbl">в среднем<br>на запись</div>
          </div>
        </div>
        <div class="sp-missed-bars">${rows}</div>
      </div>
    </div>`;
}

// ── Avg time per visit ──
function renderAvgPerVisitSection(data2, tl2) {
  const totalTravel = tl2.reduce((s,x) => s + x.mins, 0);
  let totalVisits = 0;
  Object.values(data2).forEach(r => {
    totalVisits += (+r.mob||0);
  });

  if (totalTravel === 0 || totalVisits === 0) return '';

  const avgPerVisit = (totalTravel / totalVisits).toFixed(1);

  return `
    <div class="sp-section">
      <div class="sp-section-label">Эффективность пути</div>
      <div class="sp-card sp-avg-card">
        <div class="sp-avg-text">Среднее время в пути на <b>один визит</b> (Мобильная) в этом месяце</div>
        <div>
          <div class="sp-avg-num">${avgPerVisit}</div>
          <div class="sp-avg-unit">минут</div>
        </div>
      </div>
    </div>`;
}

// ── PDF ───────────────────────────────────────
function generatePDF() {
  load();
  const workdays = getWorkdays(year, month);
  const wl = loadWorkLog();
  const tl = loadTravelLog();

  let mob=0, sklad=0, mbSklad=0, prok=0, missed=0;
  Object.values(data).forEach(r => {
    mob    += +r.mob    || 0;
    sklad  += (+r.sklad||0) + (+r.tookDist||0) + (+r.gaveDist||0);
    mbSklad+= (+r.mbSklad||0) + (+r.tookMb||0) + (+r.gaveMb||0);
    prok   += +r.prok   || 0;
  });
  const wCount   = wl.length;
  const totalTm  = tl.reduce((s,x) => s+x.mins, 0);
  const totalAll = mob + sklad + mbSklad;

  let skladDays = 0, trassaDays = 0;
  workdays.forEach(d => {
    const dateStr = formatDate(d);
    const hasWork   = wl.some(x => x.date === dateStr);
    const hasTravel = tl.some(x => x.date === dateStr);
    if (hasData(dateStr) || hasWork || hasTravel) {
      if (hasTravel) trassaDays++; else skladDays++;
    }
  });

  // Only days with data
  const rows = workdays.map(d => {
    const dateStr = formatDate(d);
    const wd = t('weekdays')[d.getDay()];
    const r  = data[dateStr] || {};
    const dayWl = wl.filter(x => x.date === dateStr);
    const dayTm = tl.filter(x => x.date === dateStr).reduce((s,x) => s+x.mins, 0);
    if (!hasData(dateStr) && !dayWl.length && !dayTm) return '';
    const rowSklad = (+r.sklad||0) + (+r.tookDist||0) + (+r.gaveDist||0);
    const rowMb    = (+r.mbSklad||0) + (+r.tookMb||0) + (+r.gaveMb||0);
    return `<tr>
      <td>${dateStr}</td><td>${wd}</td>
      <td>${r.mob||''}</td>
      <td>${rowSklad||''}</td>
      <td>${rowMb||''}</td>
      <td>${dayWl.length||''}</td>
      <td>${dayTm ? toHM(dayTm) : ''}</td>
    </tr>`;
  }).join('');

  const d2 = new Date();
  const dateStr2 = `${d2.getDate()}.${d2.getMonth()+1}.${d2.getFullYear()}`;

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <style>
    @page { size: A4; margin: 12mm; }
    * { box-sizing: border-box; }
    body { font-family: Arial, sans-serif; font-size: 12px; color: #111; margin: 0; }
    h1 { font-size: 16px; margin: 0 0 2px; }
    .sub { color: #666; font-size: 10px; margin-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 12px; table-layout: fixed; }
    col.c-date  { width: 13%; }
    col.c-day   { width: 7%; }
    col.c-num   { width: 12%; }
    col.c-other { width: 16%; }
    col.c-road  { width: 16%; }
    th {
      background: #1a1a22; color: #6ee7b7;
      padding: 5px 4px; text-align: center;
      font-size: 10px; line-height: 1.2;
      word-break: break-word; hyphens: auto;
    }
    td { padding: 5px 4px; border-bottom: 1px solid #e5e7eb; font-size: 12px; text-align: center; }
    td:first-child { text-align: left; }
    tr:nth-child(even) td { background: #f9fafb; }
    tfoot td { font-weight: 700; background: #f0fdf4 !important; }
    .totals { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
    .tot { border: 1px solid #e5e7eb; border-radius: 6px; padding: 7px 10px; flex: 1; min-width: 80px; }
    .tot-lbl { font-size: 9px; color: #666; text-transform: uppercase; margin-bottom: 3px; word-break: break-word; }
    .tot-val { font-size: 18px; font-weight: 700; color: #1a1a22; }
    .gen { font-size: 9px; color: #aaa; margin-top: 12px; }
  </style></head><body>
  <h1>${t('reportTitle')} — ${t('months')[month]} ${year}</h1>
  <div class="sub">${t('generatedPDF')} ${dateStr2}</div>
  <table>
    <colgroup>
      <col class="c-date"><col class="c-day">
      <col class="c-num"><col class="c-num"><col class="c-num">
      <col class="c-other"><col class="c-road">
    </colgroup>
    <thead><tr>
      <th>Дата</th><th>День</th>
      <th>${t('mobilePDF')}</th>
      <th>${t('regularPDF')}</th>
      <th>${t('mbPDF')}</th>
      <th>${t('otherPDF')}</th>
      <th>${t('travelPDF')}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
    <tfoot><tr>
      <td colspan="2">${t('totalPDF')}</td>
      <td>${mob}</td><td>${sklad}</td><td>${mbSklad}</td>
      <td>${wCount}</td><td>${toHM(totalTm)}</td>
    </tr></tfoot>
  </table>
  <div class="totals">
    <div class="tot"><div class="tot-lbl">${t('totalPDF')}</div><div class="tot-val">${totalAll}</div></div>
    <div class="tot"><div class="tot-lbl">${t('warehousePDF')}</div><div class="tot-val">${skladDays} <span style="font-size:12px;font-weight:400">${t('daysPDF')}</span></div></div>
    <div class="tot"><div class="tot-lbl">${t('highwayPDF')}</div><div class="tot-val">${trassaDays} <span style="font-size:12px;font-weight:400">${t('daysPDF')}</span></div></div>
    <div class="tot"><div class="tot-lbl">${t('travelPDF')}</div><div class="tot-val" style="font-size:14px">${toHM(totalTm)}</div></div>
  </div>
  <div class="gen">${t('reportTitle')}</div>
  </body></html>`;

  const win = window.open('', '_blank');
  if (!win) { alert('Разрешите всплывающие окна в браузере'); return; }
  win.document.write(html);
  win.document.close();
  setTimeout(() => win.print(), 400);
}

// ── Long press on day card ────────────────────
function setupLongPress(card, dateStr) { return; // disabled in grid mode
  // eslint-disable-next-line no-unreachable
  let timer = null;
  const start = () => { timer = setTimeout(() => copyDaySummary(dateStr), 600); };
  const cancel = () => { clearTimeout(timer); };
  card.addEventListener('touchstart', start, { passive: true });
  card.addEventListener('touchend', cancel);
  card.addEventListener('touchmove', cancel);
  card.addEventListener('mousedown', start);
  card.addEventListener('mouseup', cancel);
  card.addEventListener('mouseleave', cancel);
}

function copyDaySummary(dateStr) {
  const r  = data[dateStr] || {};
  const wl = loadWorkLog().filter(x => x.date === dateStr);
  const tl = loadTravelLog().filter(x => x.date === dateStr);
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  const lines = [dateStr];
  if (r.mob)    lines.push(`${t('mobile')}: ${r.mob}`);
  if (r.sklad)  lines.push(`${t('regularPDF')}: ${r.sklad}`);
  if (r.mbSklad) lines.push(`${t('mbPDF')}: ${r.mbSklad}`);
  if (+r.tookDist) lines.push(`Забрал дистр.: ${r.tookDist}`);
  if (+r.gaveDist) lines.push(`Отдал дистр.: ${r.gaveDist}`);
  if (+r.tookMb)   lines.push(`Забрал МБ: ${r.tookMb}`);
  if (+r.gaveMb)   lines.push(`Отдал МБ: ${r.gaveMb}`);
  if (wl.length) lines.push(`${t('otherWork')}: ${wl.length}`);
  if (tm)       lines.push(`${t('onRoad')}: ${toHM(tm)}`);
  const text = lines.join('\n');
  navigator.clipboard.writeText(text)
    .then(() => showToast('📋 ' + dateStr))
    .catch(() => alert(text));
}

function showToast(msg) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2000);
}

// ── Best day highlight ────────────────────────
function getBestDay() {
  let bestMob = { date: null, val: 0 };
  let bestStation = { date: null, val: 0 };
  Object.entries(data).forEach(([date, r]) => {
    const mob = +r.mob || 0;
    const station = (+r.sklad||0) + (+r.mbSklad||0) + (+r.tookDist||0) + (+r.gaveDist||0) + (+r.tookMb||0) + (+r.gaveMb||0);
    if (mob > bestMob.val) bestMob = { date, val: mob };
    if (station > bestStation.val) bestStation = { date, val: station };
  });
  return { bestMob, bestStation };
}

function updateBestDays() {
  const { bestMob, bestStation } = getBestDay();
  document.querySelectorAll('.day-cell').forEach(cell => {
    cell.classList.remove('best-mob', 'best-station');
    const dateStr = cell.dataset.date;
    if (!dateStr) return;
    const d = dateStr.slice(0,5);
    if (bestMob.date && bestMob.date.startsWith(d) && bestMob.val > 0) cell.classList.add('best-mob');
    else if (bestStation.date && bestStation.date.startsWith(d) && bestStation.val > 0) cell.classList.add('best-station');
  });
}

// ── Archive page ──────────────────────────────
// ── Salary toggle ─────────────────────────────
let salaryVisible = false;
let activeFilter = 'total'; // total | mob | gave | prok
function toggleSalary() {
  salaryVisible = !salaryVisible;
  const num = document.getElementById('salaryNum');
  if (num) num.classList.toggle('salary-hidden', !salaryVisible);
}

function toggleSkladChip(el) {
  el.classList.toggle('stat-chip--sklad-open');
}

function toggleMoreMenu() {
  const menu = document.getElementById('moreMenu');
  menu.classList.toggle('more-menu--open');
}

document.addEventListener('click', (e) => {
  const menu = document.getElementById('moreMenu');
  const btn = document.getElementById('btnMore');
  if (!menu || !btn) return;
  if (menu.classList.contains('more-menu--open') && !menu.contains(e.target) && e.target !== btn && !btn.contains(e.target)) {
    menu.classList.remove('more-menu--open');
  }
});

// ── Archive page ──────────────────────────────
function openArchive() {
  document.getElementById('pageMain').classList.remove('active');
  document.getElementById('pageArchive').classList.add('active');
  renderArchive();
}

function closeArchive() {
  document.getElementById('pageArchive').classList.remove('active');
  document.getElementById('pageMain').classList.add('active');
}

function cleanOldData(keys) {
  const confirmMsg = lang === 'pl'
    ? `Usunąć dane za ${keys.length} mies.? Tej operacji nie można cofnąć.`
    : `Удалить данные за ${keys.length} мес.? Это действие нельзя отменить.`;
  if (!confirm(confirmMsg)) return;
  keys.forEach(key => {
    const [, y, m] = key.split('_');
    localStorage.removeItem(key);
    localStorage.removeItem(`worklog_${y}_${m}`);
    localStorage.removeItem(`travellog_${y}_${m}`);
  });
  renderArchive();
}

function getHeatColor(intensity) {
  if (intensity <= 0)   return '#1e1e28';
  if (intensity < 0.2)  return '#818cf8';
  if (intensity < 0.4)  return '#34d399';
  if (intensity < 0.6)  return '#fbbf24';
  if (intensity < 0.8)  return '#fb923c';
  return '#f472b6';
}

function renderArchive() {
  document.getElementById('archiveTitle').textContent = lang === 'pl' ? 'Archiwum' : 'Архив';
  const MONTHS = t('months');
  const content = document.getElementById('archiveContent');

  // Collect all years with data
  const allKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('report_')) allKeys.push(key);
  }
  if (!allKeys.length) {
    content.innerHTML = `<div class="hist-empty">${t('histEmpty')}</div>`;
    return;
  }

  // Build stats per month
  const statsMap = {};
  allKeys.forEach(key => {
    const [, y, m] = key.split('_');
    let d = {};
    try { d = JSON.parse(localStorage.getItem(key) || '{}'); } catch(e) {}
    let mob=0, gave=0;
    Object.values(d).forEach(r => {
      mob  += +r.mob    || 0;
      gave += (+r.sklad||0) + (+r.mbSklad||0) + (+r.tookDist||0) + (+r.gaveDist||0) + (+r.tookMb||0) + (+r.gaveMb||0);
    });
    const total = mob + gave;
    statsMap[`${y}_${m}`] = { y:+y, m:+m, mob, gave, total };
  });

  const allTotals = Object.values(statsMap).map(s => s.total);
  const maxTotal = Math.max(...allTotals, 1);

  // Get unique years
  const years = [...new Set(Object.values(statsMap).map(s => s.y))].sort().reverse();

  // Selected month for detail
  let html = '';

  years.forEach(yr => {
    html += `<div class="arc-year-label">${yr}</div>`;
    html += `<div class="arc-heatmap">`;

    for (let mo = 0; mo < 12; mo++) {
      const s = statsMap[`${yr}_${mo}`];
      const total = s ? s.total : 0;
      const intensity = total / maxTotal;
      const color = getHeatColor(intensity);
      const isActive = yr === year && mo === month;
      const hasFuture = !s && (yr > new Date().getFullYear() || (yr === new Date().getFullYear() && mo > new Date().getMonth()));

      // Mini workday cells — based on real per-day data
      const monthData = (() => {
        try { return JSON.parse(localStorage.getItem(`report_${yr}_${mo}`) || '{}'); }
        catch(e) { return {}; }
      })();
      const workdays = getWorkdays(yr, mo);
      const wdCount = workdays.length;
      let dayCells = '';
      for (let d = 0; d < Math.min(wdCount, 23); d++) {
        const dateStr = formatDate(workdays[d]);
        const r = monthData[dateStr] || {};
        const dayTotal = (+r.mob||0) + (+r.prok||0) + (+r.sklad||0) + (+r.mbSklad||0) + (+r.tookDist||0) + (+r.gaveDist||0) + (+r.tookMb||0) + (+r.gaveMb||0);
        const cellIntensity = dayTotal > 0 ? Math.min(dayTotal / Math.max(maxTotal / wdCount, 1), 1) : 0;
        const cellColor = getHeatColor(cellIntensity);
        dayCells += `<div class="arc-day-cell" style="background:${dayTotal>0?cellColor:'#22222e'}"></div>`;
      }

      html += `<div class="arc-month-cell${isActive?' arc-month-cell--active':''}" 
        style="--cell-color:${color}"
        onclick="goToMonth(${yr},${mo})">
        <div class="arc-month-name" style="color:${isActive?color:''}">
          ${MONTHS[mo].slice(0,3)}
        </div>
        <div class="arc-day-grid">${dayCells}</div>
        ${total > 0 ? `<div class="arc-month-val" style="color:${color}">${total}</div>` : ''}
      </div>`;
    }

    html += `</div>`;
  });

  // Cleanup old data button
  const now = new Date();
  const oldKeys = allKeys.filter(key => {
    const [, y, m] = key.split('_');
    return (+y < now.getFullYear()) || (+y === now.getFullYear() && +m < now.getMonth() - 1);
  });
  const cleanBtn = oldKeys.length > 0
    ? `<button class="archive-clean-btn" onclick="cleanOldData(${JSON.stringify(oldKeys)})">`
      + (lang === 'pl' ? `🗑 Usuń stare (${oldKeys.length} mies.)` : `🗑 Удалить старые (${oldKeys.length} мес.)`)
      + `</button>`
    : '';

  // Legend
  const legend = `<div class="arc-legend">
    <span class="arc-legend-lbl">${lang==='pl'?'Mniej':'Меньше'}</span>
    ${['#818cf8','#34d399','#fbbf24','#fb923c','#f472b6'].map(c=>
      `<div class="arc-legend-dot" style="background:${c}"></div>`
    ).join('')}
    <span class="arc-legend-lbl">${lang==='pl'?'Więcej':'Больше'}</span>
  </div>`;

  content.innerHTML = legend + html + cleanBtn;
}

function goToMonth(y, m) {
  year = +y; month = +m;
  closeArchive();
  render();
}

// ── Quick input ───────────────────────────────

// ── Share ─────────────────────────────────────
function shareSummary() {
  load();
  let mob=0, sklad=0, mbSklad=0;
  Object.values(data).forEach(r => {
    mob    += +r.mob    || 0;
    sklad  += (+r.sklad||0) + (+r.tookDist||0) + (+r.gaveDist||0);
    mbSklad+= (+r.mbSklad||0) + (+r.tookMb||0) + (+r.gaveMb||0);
  });
  const wl = loadWorkLog();
  const tl = loadTravelLog();
  const wCount = wl.length;
  const workTotalMins = wl.reduce((s,x) => s+(x.mins||0), 0);
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  const totalAll = mob + sklad + mbSklad;
  const workdays = getWorkdays(year, month);
  let skladDays = 0, trassaDays = 0;
  workdays.forEach(d => {
    const dateStr = formatDate(d);
    const hasWork   = wl.some(x => x.date === dateStr);
    const hasTravel = tl.some(x => x.date === dateStr);
    if (hasData(dateStr) || hasWork || hasTravel) {
      if (hasTravel) trassaDays++; else skladDays++;
    }
  });
  const text = [
    `${t('months')[month]} ${year}`,
    `${t('summaryLabel')} ${mob}`,
    `${t('summaryOther')} ${wCount}${workTotalMins > 0 ? ' · ' + toHM(workTotalMins) : ''}`,
    `${t('summaryRegGave')} ${sklad}`,
    `${t('summaryMbGave')} ${mbSklad}`,
    `${t('summaryTotal')} ${totalAll}`,
    `${t('summaryTravel')} ${toHM(tm)}`,
    `${t('summaryWarehouse')} ${skladDays} ${t('summaryDays')} | ${t('summaryHighway')} ${trassaDays} ${t('summaryDays')}`,
  ].join('\n');

  if (navigator.share) {
    navigator.share({ title: t('reportTitle'), text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text)
      .then(() => alert(t('summaryCopied')))
      .catch(() => alert(text));
  }
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
  document.getElementById('pageStats').classList.remove('active');
  document.getElementById('pageArchive').classList.remove('active');
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
  const histTitleEl = document.getElementById('histTitle');
  histTitleEl.textContent = isTravel ? t('histTravel') : t('histOtherWork');
  histTitleEl.classList.toggle('hist-title--accent2', isTravel);
  histTitleEl.classList.toggle('hist-title--orange', !isTravel);
  document.getElementById('tabWork').textContent     = t('tabOther');
  document.getElementById('tabTravel').textContent   = t('tabTravel');

  const content = document.getElementById('histContent');
  if (!log.length) { content.innerHTML = `<div class="hist-empty">${t('histEmpty')}</div>`; return; }

  const byDate = {};
  log.forEach(x => { if (!byDate[x.date]) byDate[x.date] = []; byDate[x.date].push(x); });

  const totalAllMins = log.reduce((s,x) => s + (x.mins||0), 0);
  const workDays = totalAllMins > 0 ? (totalAllMins / 480).toFixed(1) : 0;

  content.innerHTML = Object.keys(byDate).sort().reverse().map(date => {
    const items = byDate[date];
    const total = items.reduce((s,x) => s + (x.mins||0), 0);
    const dayTimeStr = !isTravel && total > 0 ? ` · ${toHM(total)}` : '';
    return `<div class="hist-day">
      <div class="hist-day-hdr">
        <div class="hist-day-date">${date}</div>
        <div class="hist-day-total">${isTravel ? `${t('histTotal')} <b class="travel">${toHM(total)}</b>` : `${items.length} ${t('histRecords')}${dayTimeStr}`}</div>
      </div>
      ${items.map(x => `
        <div class="hist-item">
          <div class="hist-dot ${isTravel ? 'travel' : ''}"></div>
          <div class="hist-text">${isTravel ? toHM(x.mins) : x.desc}</div>
          ${isTravel ? `<div class="hist-min travel">${toHM(x.mins)}</div>` : (x.mins ? `<div class="hist-min">${toHM(x.mins)}</div>` : '')}
        </div>`).join('')}
    </div>`;
  }).join('')
  + (totalAllMins > 0 ? `
    <div class="hist-month-total">
      <div class="hist-month-total-row">
        <span class="hist-month-total-lbl">${lang === 'pl' ? 'Łącznie za miesiąc' : 'Итого за месяц'}</span>
        <span class="hist-month-total-val ${isTravel ? 'travel' : ''}">${toHM(totalAllMins)}</span>
      </div>
      ${isTravel ? `<div class="hist-month-total-row">
        <span class="hist-month-total-lbl">${lang === 'pl' ? 'Dni robocze (8 godz)' : 'Рабочих дней (8 ч)'}</span>
        <span class="hist-month-total-val workdays">${workDays} ${lang === 'pl' ? 'dni' : 'дн.'}</span>
      </div>` : ''}
    </div>` : '')
  + `<div class="export-btns">
      <button class="export-btn" onclick="exportHistory()">${t('exportBtn')}</button>
      ${!isTravel ? `<div style="display:flex;gap:8px">
        <button class="export-btn export-btn--pdf" onclick="exportPdf()" style="flex:1">🇵🇱 PDF (польский)</button>
        <button class="export-btn export-btn--pdf" onclick="resetGeminiKey()" style="width:44px;flex-shrink:0">⚙️</button>
      </div>` : ''}
    </div>`;
}

function exportHistory() {
  const isTravel = curHistTab === 'travel';
  const log = isTravel ? loadTravelLog() : loadWorkLog();
  if (!log.length) { alert(t('noData')); return; }
  const byDate = {};
  log.forEach(x => { if (!byDate[x.date]) byDate[x.date] = []; byDate[x.date].push(x); });
  const text = Object.keys(byDate).sort().reverse().map(date => {
    const items = byDate[date];
    const total = items.reduce((s,x) => s + (x.mins||0), 0);
    const lines = items.map(x => isTravel
      ? `  • ${toHM(x.mins)}`
      : `  • ${x.desc}${x.mins ? ' — ' + toHM(x.mins) : ''}`
    ).join('\n');
    return `=== ${date}${isTravel ? ` (${toHM(total)})` : ` (${items.length} ${t('records')}${total ? ', ' + toHM(total) : ''})`} ===\n${lines}`;
  }).join('\n\n');
  const totalAllMins = log.reduce((s,x) => s+(x.mins||0), 0);
  const workDays = totalAllMins > 0 ? (totalAllMins/480).toFixed(1) : null;
  const totalLine = totalAllMins > 0
    ? `\n${lang==='pl' ? 'Łącznie' : 'Итого'}: ${toHM(totalAllMins)}`
      + (isTravel && workDays ? `\n${lang==='pl' ? 'Dni robocze (8 godz)' : 'Рабочих дней (8 ч)'}: ${workDays} ${lang==='pl'?'dni':'дн.'}` : '')
    : '';
  navigator.clipboard.writeText((isTravel ? t('histTravel') : t('histOtherWork')) + '\n\n' + text + totalLine)
    .then(() => showToast(t('copied')))
    .catch(() => alert(text));
}


function toHMlat(mins) {
  if (!mins) return '';
  const h = Math.floor(mins/60), m = mins%60;
  if (h === 0) return m + ' min';
  if (m === 0) return h + ' godz';
  return h + ' godz ' + m + ' min';
}

function resetGeminiKey() {
  localStorage.removeItem('gemini_key');
  showToast('Ключ сброшен');
}

async function exportPdf() {
  const log = loadWorkLog();
  if (!log.length) { alert(t('noData')); return; }

  showToast('Tlumaczenie...');

  const descs = [...new Set(log.filter(x => x.desc).map(x => x.desc))];
  const map = {};
  try {
    await Promise.all(descs.map(async desc => {
      const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=ru&tl=pl&dt=t&q=' + encodeURIComponent(desc);
      const r = await fetch(url);
      const d = await r.json();
      map[desc] = d[0].map(x => x[0]).join('');
    }));
  } catch(e) {
    alert('catch: ' + e.message);
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'mm', format:'a4' });
  doc.setFont('helvetica');

  // Normalize Polish chars to ASCII equivalents for helvetica compatibility
  function normPl(s) {
    return s
      .replace(/ą/g,'a').replace(/Ą/g,'A')
      .replace(/ć/g,'c').replace(/Ć/g,'C')
      .replace(/ę/g,'e').replace(/Ę/g,'E')
      .replace(/ł/g,'l').replace(/Ł/g,'L')
      .replace(/ń/g,'n').replace(/Ń/g,'N')
      .replace(/ó/g,'o').replace(/Ó/g,'O')
      .replace(/ś/g,'s').replace(/Ś/g,'S')
      .replace(/ź/g,'z').replace(/Ź/g,'Z')
      .replace(/ż/g,'z').replace(/Ż/g,'Z');
  }

  const byDate = {};
  log.forEach(x => { if (!byDate[x.date]) byDate[x.date] = []; byDate[x.date].push(x); });

  const MONTHS_PL = ['Styczen','Luty','Marzec','Kwiecien','Maj','Czerwiec',
    'Lipiec','Sierpien','Wrzesien','Pazdziernik','Listopad','Grudzien'];

  let y = 15;
  const lh = 7, margin = 15, pageH = 277;
  let grandTotal = 0;

  doc.setFontSize(14); doc.setTextColor(30,30,30);
  doc.text(normPl('Inne prace - ' + MONTHS_PL[month] + ' ' + year), margin, y); y += 10;

  Object.keys(byDate).sort().reverse().forEach(date => {
    const items = byDate[date];
    const total = items.reduce((s,x) => s+(x.mins||0), 0);
    grandTotal += total;
    const count = items.length;

    if (y > pageH - 10) { doc.addPage(); y = 15; }

    doc.setFontSize(11); doc.setTextColor(60,60,180);
    doc.text(date, margin, y);
    doc.setFontSize(9); doc.setTextColor(110,110,110);
    const sub = normPl(count + ' wpisow' + (total ? '  ' + toHMlat(total) : ''));
    doc.text(sub, margin + 22, y);
    y += lh;

    doc.setFontSize(10); doc.setTextColor(30,30,30);
    items.forEach(x => {
      if (y > pageH) { doc.addPage(); y = 15; }
      const translated = map[x.desc] || x.desc;
      const timeStr = x.mins ? ' - ' + toHMlat(x.mins) : '';
      const line = normPl('- ' + translated + timeStr);
      const split = doc.splitTextToSize(line, 175);
      doc.text(split, margin + 3, y);
      y += lh * split.length;
    });
    y += 4;
  });

  if (grandTotal > 0) {
    if (y > pageH - 10) { doc.addPage(); y = 15; }
    y += 2;
    doc.setDrawColor(180,180,180);
    doc.line(margin, y, 195, y); y += 5;
    doc.setFontSize(11); doc.setTextColor(60,60,180);
    doc.text(normPl('Lacznie: ' + toHMlat(grandTotal)), margin, y);
  }

  const mm = String(month+1).padStart(2,'0');
  doc.save('inne_prace_' + year + '-' + mm + '.pdf');
  showToast('PDF gotowy!');
}

function exportHistoryPl() {
  const isTravel = curHistTab === 'travel';
  const log = isTravel ? loadTravelLog() : loadWorkLog();
  if (!log.length) { alert(t('noData')); return; }

  const byDate = {};
  log.forEach(x => { if (!byDate[x.date]) byDate[x.date] = []; byDate[x.date].push(x); });
  const text = Object.keys(byDate).sort().reverse().map(date => {
    const items = byDate[date];
    const total = items.reduce((s,x) => s + (x.mins||0), 0);
    const lines = items.map(x => isTravel
      ? `  • ${toHM(x.mins)}`
      : `  • ${translateToPl(x.desc)}${x.mins ? ' — ' + toHM(x.mins) : ''}`
    ).join('\n');
    return `=== ${date}${isTravel ? ` (${toHM(total)})` : ` (${items.length} wpisów${total ? ', ' + toHM(total) : ''})`} ===\n${lines}`;
  }).join('\n\n');

  const header = isTravel ? 'Czas w drodze' : 'Inne prace';
  navigator.clipboard.writeText(header + '\n\n' + text)
    .then(() => showToast('Skopiowano!'))
    .catch(() => alert(text));
}

// ── Backup / Restore ──────────────────────────
function backupData() {
  try {
    const allData = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
    if (key.startsWith('report_') || key.startsWith('worklog_') || key.startsWith('travellog_') || key === 'lang') {
        const raw = localStorage.getItem(key);
        try { allData[key] = JSON.parse(raw); } catch(e) { allData[key] = raw; }
      }
    }
    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    const d = new Date();
    const mm = String(d.getMonth()+1).padStart(2,'0'), dd = String(d.getDate()).padStart(2,'0');
    a.download = `otchet_${d.getFullYear()}-${mm}-${dd}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  } catch(e) {
    alert('Ошибка: ' + e.message);
  }
}

function showToast(msg, isError) {
  let toast = document.getElementById('restoreToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'restoreToast';
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.padding = '12px 18px';
    toast.style.borderRadius = '12px';
    toast.style.fontSize = '13px';
    toast.style.fontWeight = '600';
    toast.style.zIndex = '99999';
    toast.style.maxWidth = '85vw';
    toast.style.textAlign = 'center';
    toast.style.boxShadow = '0 4px 20px rgba(0,0,0,0.4)';
    document.body.appendChild(toast);
  }
  toast.style.background = isError ? '#3a1414' : '#143a1f';
  toast.style.color = isError ? '#f87171' : '#34d399';
  toast.style.border = isError ? '1px solid #f8717150' : '1px solid #34d39950';
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => { toast.style.display = 'none'; }, 5000);
}

function restoreData(event) {
  const file = event.target.files[0];
  if (!file) return;
  event.target.value = '';
  const confirmMsg = lang === 'pl'
    ? 'Wczytać kopię zapasową? Wszystkie bieżące dane zostaną nadpisane.'
    : 'Загрузить бэкап? Все текущие данные будут перезаписаны.';
  if (!confirm(confirmMsg)) return;
  showToast('Читаю файл…', false);

  let handled = false;
  const watchdog = setTimeout(() => {
    if (!handled) {
      handled = true;
      showToast('Файл не прочитан за 5 сек. Тип: ' + file.type + ', размер: ' + file.size, true);
    }
  }, 5000);

  const reader = new FileReader();

  reader.onload = e => {
    if (handled) return;
    handled = true;
    clearTimeout(watchdog);
    try {
      const allData = JSON.parse(e.target.result);
      Object.keys(allData).forEach(key => {
        if (key === 'lang') return; // handled separately as plain string, not JSON
        localStorage.setItem(key, JSON.stringify(allData[key]));
      });
      if (allData.lang && (allData.lang === 'ru' || allData.lang === 'pl')) {
        lang = allData.lang;
        localStorage.setItem('lang', lang);
      }
      activeFilter = 'total';
      invalidateLogCache();
      load();
      render();
      showToast(t('restored'), false);
    } catch(err) {
      console.error('Restore failed:', err);
      showToast((t('restoreError')) + (err && err.message ? ': ' + err.message : ''), true);
    }
  };

  reader.onerror = () => {
    if (handled) return;
    handled = true;
    clearTimeout(watchdog);
    console.error('FileReader error:', reader.error);
    showToast(t('restoreError') + ': ' + (reader.error ? reader.error.name : 'unknown'), true);
  };

  try {
    reader.readAsText(file);
  } catch(syncErr) {
    handled = true;
    clearTimeout(watchdog);
    showToast('Не удалось начать чтение: ' + syncErr.message, true);
  }
}


// ── Init ──────────────────────────────────────
document.getElementById('flagRu').classList.toggle('active', lang === 'ru');
document.getElementById('flagPl').classList.toggle('active', lang === 'pl');
render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
