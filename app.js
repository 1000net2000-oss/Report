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
function t(key) { return TRANSLATIONS[lang][key] || key; }

function setLang(l) {
  lang = l;
  localStorage.setItem('lang', l);
  document.getElementById('flagRu').classList.toggle('active', l === 'ru');
  document.getElementById('flagPl').classList.toggle('active', l === 'pl');
  render();
  if (document.getElementById('pageHistory').classList.contains('active')) renderHistory();
  if (document.getElementById('pageChart').classList.contains('active')) renderChart();
}

// ── Constants ─────────────────────────────────
const COLS = ['mob','sklad','mbSklad','tookDist','gaveDist','tookMb','gaveMb','prok','missed','missedMl','missedRefuse','missedLate','missedClosed','missedParking'];

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
  const minsHtml = x.mins ? `<span class="work-item-mins">${x.mins} мин</span>` : '';
  return `<div class="work-item">
    <div class="work-item-dot"></div>
    <div class="work-item-text">${x.desc}</div>
    ${minsHtml}
    <button class="work-item-del" onclick="delWork('${dateStr}',${x.id})">×</button>
  </div>`;
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
    const filterColors = { mob:'#f472b6', gave:'#34d399', prok:'#fbbf24', mb:'#60a5fa', missed:'#f87171' };
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

      const workHtml = wl.length ? wl.map(x =>
        `<div class="filter-work-item">
          <span class="filter-work-desc">${x.desc}</span>
          ${x.mins ? `<span class="filter-work-time">${toHM(x.mins)}</span>` : ''}
        </div>`).join('') : '';

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
            ${tm ? `<span class="filter-card-travel">🚗 ${toHM(tm)}</span>` : ''}
            <span class="filter-card-val">${mainVal}</span>
          </div>
        </div>
        ${missedBreakdown}
        ${workHtml ? `<div class="filter-work-list">${workHtml}</div>` : ''}`;

      card.addEventListener('click', () => openDetail(dateStr));
      list.appendChild(card);
    });

    updateTotals();
    updateBestDays();
    return;
  }

  // Normal grid view
  days.forEach(d => {
    const dateStr = formatDate(d);
    const wd  = t('weekdays')[d.getDay()];
    const r   = data[dateStr] || {};
    const wl  = _wl.filter(x => x.date === dateStr);
    const tl  = _tl.filter(x => x.date === dateStr);
    const tm  = tl.reduce((s,x) => s+x.mins, 0);
    const total = (+r.mob||0) + (+r.prok||0) + (+r.sklad||0) + (+r.mbSklad||0) + (+r.tookDist||0) + (+r.gaveDist||0) + (+r.tookMb||0) + (+r.gaveMb||0);
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
    list.appendChild(cell);
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
    </div>

    <div class="missed-block">
      <div class="missed-block-hdr">
        <span class="section-label missed-label">Мимо · <span id="missedTotal_${dateStr}" style="font-size:11px">${(+r.missedMl||0)+(+r.missedRefuse||0)+(+r.missedLate||0)+(+r.missedClosed||0)}</span></span>
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
           ['missedClosed','🔒','Закрыто','#60a5fa'],['missedParking','🅿️','Паркинг','#a78bfa']].filter(([key])=>(+r[key]||0)>0).map(([key,icon,label,color])=>
          `<div class="missed-entry" style="background:${color}12;border-color:${color}30">
            <span>${icon}</span>
            <span class="missed-entry-label" style="color:#e2e8f0">${label}</span>
            <button onclick="changeMissedCat('${dateStr}','${key}',-1)" style="color:${color}">−</button>
            <span class="missed-entry-val" id="${key}_${dateStr}" style="color:${color}">${+r[key]||0}</span>
            <button onclick="changeMissedCat('${dateStr}','${key}',1)" style="color:${color}">+</button>
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
  data[dateStr][key] = (+data[dateStr][key]||0) + 1;
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
}

function updateTotals() {
  let mob=0, sklad=0, mbSklad=0, tookDist=0, gaveDist=0, tookMb=0, gaveMb=0, prok=0, missed=0;
  Object.values(data).forEach(r => {
    mob     += +r.mob     || 0;
    sklad   += +r.sklad   || 0;
    mbSklad += +r.mbSklad || 0;
    tookDist+= +r.tookDist|| 0;
    gaveDist+= +r.gaveDist|| 0;
    tookMb  += +r.tookMb  || 0;
    gaveMb  += +r.gaveMb  || 0;
    prok    += +r.prok    || 0;
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
function openChart() {
  document.getElementById('pageMain').classList.remove('active');
  document.getElementById('pageHistory').classList.remove('active');
  document.getElementById('pageChart').classList.add('active');
  renderChart();
}

function closeChart() {
  document.getElementById('pageChart').classList.remove('active');
  document.getElementById('pageMain').classList.add('active');
}

function renderChart() {
  load();
  document.getElementById('chartPageTitle').textContent  = lang === 'pl' ? 'Diagram' : 'Диаграмма';
  document.getElementById('chartMonthLabel').textContent = `${t('months')[month]} ${year}`;

  const wrap = document.getElementById('chartWrap');

  // Collect totals
  let mob=0, prok=0, sklad=0, mbSklad=0, tookDist=0, gaveDist=0, tookMb=0, gaveMb=0;
  Object.values(data).forEach(r => {
    mob     += +r.mob     || 0;
    prok    += +r.prok    || 0;
    sklad   += +r.sklad   || 0;
    mbSklad += +r.mbSklad || 0;
    tookDist+= +r.tookDist|| 0;
    gaveDist+= +r.gaveDist|| 0;
    tookMb  += +r.tookMb  || 0;
    gaveMb  += +r.gaveMb  || 0;
  });
  const gave = sklad + mbSklad + tookDist + gaveDist + tookMb + gaveMb;
  const total = mob + prok + gave;

  const _wl = loadWorkLog();
  const _tl = loadTravelLog();
  const workMins   = _wl.reduce((s,x) => s+(x.mins||0), 0);
  const travelMins = _tl.reduce((s,x) => s+x.mins, 0);

  if (total === 0) {
    wrap.innerHTML = `<div class="chart-empty">${lang==='pl'?'Brak danych':'Нет данных'}</div>`;
    return;
  }

  const segments = [
    { label: t('mobile'),  val: mob,  color:'#f472b6' },
    { label: t('prok'),    val: prok, color:'#fbbf24' },
    { label: t('gave'),    val: gave, color:'#34d399' },
  ].filter(s => s.val > 0);

  // Build SVG donut
  const cx=110, cy=110, r=80, thick=28;
  let angle = -90;

  const polarToXY = (deg, radius) => {
    const rad = deg * Math.PI / 180;
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  };

  const arcPath = (startDeg, endDeg, radius) => {
    const s = polarToXY(startDeg, radius);
    const e = polarToXY(endDeg - 0.5, radius);
    const large = endDeg - startDeg > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${radius} ${radius} 0 ${large} 1 ${e.x} ${e.y}`;
  };

  const paths = segments.map(s => {
    const deg = (s.val / total) * 360;
    const start = angle;
    angle += deg;
    const path = arcPath(start, angle, r);
    return `<path d="${path}" fill="none" stroke="${s.color}" stroke-width="${thick}" stroke-linecap="butt"/>`;
  }).join('');

  wrap.innerHTML = `
    <div style="padding:16px">
      <svg width="220" height="220" style="display:block;margin:0 auto">
        ${paths}
        <circle cx="${cx}" cy="${cy}" r="${r-thick/2-2}" fill="#0f0f12"/>
        <text x="${cx}" y="${cy-8}" text-anchor="middle" fill="#e2e8f0" font-size="26" font-weight="700" font-family="'Unbounded',sans-serif">${total}</text>
        <text x="${cx}" y="${cy+12}" text-anchor="middle" fill="#64748b" font-size="10">${lang==='pl'?'łącznie':'всего'}</text>
      </svg>

      <div class="donut-legend">
        ${segments.map(s => `
          <div class="donut-leg-item">
            <div class="donut-leg-color" style="background:${s.color}"></div>
            <div class="donut-leg-body">
              <div class="donut-leg-label">${s.label}</div>
              <div class="donut-leg-row">
                <span class="donut-leg-val" style="color:${s.color}">${s.val}</span>
                <span class="donut-leg-pct">${Math.round(s.val/total*100)}%</span>
              </div>
            </div>
          </div>`).join('')}
      </div>

      <div class="donut-secondary">
        ${workMins > 0 ? `<div class="donut-sec-item" style="border-left-color:#fb923c">
          <div class="donut-sec-lbl">${lang==='pl'?'Inne prace':'Другие работы'}</div>
          <div class="donut-sec-val" style="color:#fb923c">${toHM(workMins)}</div>
        </div>` : ''}
        ${travelMins > 0 ? `<div class="donut-sec-item" style="border-left-color:#818cf8">
          <div class="donut-sec-lbl">${lang==='pl'?'W drodze':'В пути'}</div>
          <div class="donut-sec-val" style="color:#818cf8">${toHM(travelMins)}</div>
        </div>` : ''}
      </div>
    </div>`;
}



  const workdays = getWorkdays(year, month);
  const _wl = loadWorkLog();
  const _tl = loadTravelLog();

  const allRows = [];
  workdays.forEach(d => {
    const dateStr = formatDate(d);
    const r = data[dateStr] || {};
    const mob    = +r.mob || 0;
    const prok   = +r.prok || 0;
    const gave   = (+r.sklad||0) + (+r.mbSklad||0) + (+r.tookDist||0) + (+r.gaveDist||0) + (+r.tookMb||0) + (+r.gaveMb||0);
    const wl     = _wl.filter(x => x.date === dateStr);
    const tl     = _tl.filter(x => x.date === dateStr);
    const work   = wl.reduce((s,x) => s+(x.mins||0), 0);
    const travel = tl.reduce((s,x) => s+x.mins, 0);
    allRows.push({ label: dateStr.slice(0,5), mob, prok, gave, work, travel });
  });

  const metrics = [
    { key:'mob',    label:'Моб',    color:'#f472b6', isTime:false },
    { key:'prok',   label:'Прок',   color:'#fbbf24', isTime:false },
    { key:'gave',   label:'Отдал',  color:'#34d399', isTime:false },
    { key:'work',   label:'Работы', color:'#fb923c', isTime:true  },
    { key:'travel', label:'Путь',   color:'#818cf8', isTime:true  },
  ];

  const wrap = document.getElementById('chartWrap');

  const renderMetric = () => {
    const active = metrics.find(m => m.key === chartMetric);
    const vals = allRows.map(r => r[chartMetric]);
    const maxV = Math.max(...vals, 1);
    const total = vals.reduce((a,b)=>a+b,0);
    const filledRows = allRows.filter(r => r[chartMetric] > 0);
    const avg = filledRows.length > 0 ? (total/filledRows.length).toFixed(1) : 0;
    const best = allRows.reduce((a,b) => b[chartMetric]>a[chartMetric]?b:a);

    const fmt = (v) => active.isTime ? toHM(v) : v;

    wrap.innerHTML = `
      <div class="ch-metric-tabs">
        ${metrics.map(m => `<button class="ch-metric-btn${chartMetric===m.key?' active':''}"
          style="${chartMetric===m.key?`color:${m.color};border-color:${m.color};background:${m.color}18`:''}"
          onclick="chartMetric='${m.key}';renderChart()">${m.label}</button>`).join('')}
      </div>

      <div class="ch-kpi">
        <div class="ch-kpi-item">
          <div class="ch-kpi-label">Итого</div>
          <div class="ch-kpi-val" style="color:${active.color}">${fmt(total)}</div>
        </div>
        <div class="ch-kpi-item">
          <div class="ch-kpi-label">Среднее/д</div>
          <div class="ch-kpi-val">${active.isTime ? toHM(Math.round(+avg)) : avg}</div>
        </div>
        <div class="ch-kpi-item">
          <div class="ch-kpi-label">Лучший</div>
          <div class="ch-kpi-val" style="color:${active.color};font-size:10px">${best[chartMetric]>0?`${best.label} · ${fmt(best[chartMetric])}`:'—'}</div>
        </div>
      </div>

      ${allRows.map(r => {
        const val = r[chartMetric];
        const pct = Math.round((val/maxV)*100);
        const isEmpty = val === 0;
        return `<div class="ch-clean-row${isEmpty?' ch-clean-row--empty':''}">
          <div class="ch-clean-date">${r.label}</div>
          <div class="ch-clean-bar-wrap">
            ${!isEmpty ? `<div class="ch-clean-bar" style="width:${pct}%;background:${active.color};box-shadow:0 0 8px ${active.color}44"></div>` : ''}
          </div>
          <div class="ch-clean-val" style="${isEmpty?'':'color:'+active.color}">${isEmpty?'—':fmt(val)}</div>
        </div>`;
      }).join('')}
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
  document.getElementById('pageChart').classList.remove('active');
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

function restoreData(event) {
  const file = event.target.files[0];
  if (!file) return;
  event.target.value = '';
  const confirmMsg = lang === 'pl'
    ? 'Wczytać kopię zapasową? Wszystkie bieżące dane zostaną nadpisane.'
    : 'Загрузить бэкап? Все текущие данные будут перезаписаны.';
  if (!confirm(confirmMsg)) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const allData = JSON.parse(e.target.result);
      Object.keys(allData).forEach(key => localStorage.setItem(key, JSON.stringify(allData[key])));
      if (allData.lang) lang = allData.lang;
      invalidateLogCache();
      load();
      render();
      alert(t('restored'));
    } catch(err) { alert(t('restoreError')); }
  };
  reader.readAsText(file);
}


// ── Init ──────────────────────────────────────
document.getElementById('flagRu').classList.toggle('active', lang === 'ru');
document.getElementById('flagPl').classList.toggle('active', lang === 'pl');
document.getElementById('btnBackup').addEventListener('click', backupData);
render();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
