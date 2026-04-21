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
    chartGave: 'Отдал (обычные+МБ)',
    chartTravel: 'В пути (мин)',
    noRecords: 'Нет записей',
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
    chartGave: 'Oddano (zwykłe+MB)',
    chartTravel: 'W drodze (min)',
    noRecords: 'Brak wpisów',
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
const COLS = ['mob','sush','sklad','mbSush','mbSklad'];

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
  document.getElementById('monthLabel').textContent = `${t('months')[month]} ${year}`;
  document.getElementById('appTitle').textContent = t('appTitle');
  document.getElementById('btnBackup').textContent = t('backup');
  document.getElementById('btnRestore').textContent = t('restore');
  document.getElementById('btnSummary').textContent = t('summaryBtn');
  document.getElementById('btnChart').textContent = t('chartBtn');
  document.getElementById('btnPdf').textContent = t('pdfBtn');
  document.getElementById('labelMob').textContent = t('mobile');
  document.getElementById('labelOtherWork').textContent = t('otherWork');
  document.getElementById('labelRegular').textContent = t('regular');
  document.getElementById('labelMinibar').textContent = t('minibar');
  document.getElementById('labelRegTook').textContent = t('took');
  document.getElementById('labelRegGave').textContent = t('gave');
  document.getElementById('labelMbTook').textContent = t('took');
  document.getElementById('labelMbGave').textContent = t('gave');
  document.getElementById('labelTotal').textContent = t('total');
  document.getElementById('labelTravel').textContent = t('travel');
  document.getElementById('labelWarehouse').textContent = t('warehouse');
  document.getElementById('labelHighway').textContent = t('highway');
  document.getElementById('labelWarehouseDays').textContent = t('days');
  document.getElementById('labelHighwayDays').textContent = t('days');
  document.getElementById('tabWork').textContent = t('tabOther');
  document.getElementById('tabTravel').textContent = t('tabTravel');

  const days = getWorkdays(year, month);
  const list = document.getElementById('daysList');
  list.innerHTML = '';

  days.forEach(d => {
    const dateStr = formatDate(d);
    const wd  = t('weekdays')[d.getDay()];
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
          <div class="section-label">${t('sectionMobile')}</div>
          <div class="fields-grid">
            <div class="field mob">
              <label>${t('mobile')}</label>
              <input type="text" inputmode="text" class="formula-input" value="${r.mob||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','mob')" onfocus="focusField(this,'${dateStr}','mob')">
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div>
          <div class="section-label">${t('sectionDist')}</div>
          <div class="fields-grid">
            <div class="field">
              <label>${t('tookFromWarehouse')}</label>
              <input type="text" inputmode="text" class="formula-input" value="${r.sush||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','sush')" onfocus="focusField(this,'${dateStr}','sush')">
            </div>
            <div class="field">
              <label>${t('gaveReady')}</label>
              <input type="text" inputmode="text" class="formula-input" value="${r.sklad||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','sklad')" onfocus="focusField(this,'${dateStr}','sklad')">
            </div>
            <div class="field">
              <label>${t('mbTook')}</label>
              <input type="text" inputmode="text" class="formula-input" value="${r.mbSush||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','mbSush')" onfocus="focusField(this,'${dateStr}','mbSush')">
            </div>
            <div class="field">
              <label>${t('mbGave')}</label>
              <input type="text" inputmode="text" class="formula-input" value="${r.mbSklad||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','mbSklad')" onfocus="focusField(this,'${dateStr}','mbSklad')">
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div>
          <div class="section-label">${t('sectionOther')}</div>
          <div class="work-row">
            <input class="work-desc" type="text" placeholder="${t('workDesc')}" id="wd_${dateStr}"
              onkeydown="if(event.key==='Enter') addWork('${dateStr}')"/>
            <button class="add-work-btn" onclick="addWork('${dateStr}')">+</button>
          </div>
          <div id="wlist_${dateStr}" style="margin-top:6px;display:flex;flex-direction:column;gap:4px">
            ${wl.map(x => workItemHtml(x, dateStr)).join('')}
          </div>
        </div>

        <div class="divider"></div>

        <div>
          <div class="section-label">${t('sectionTravel')}</div>
          <div class="travel-row">
            <input class="travel-mins" type="number" min="1" placeholder="${t('minutes')}" id="tm_${dateStr}"/>
            <button class="add-travel-btn" onclick="addTravel('${dateStr}')">+</button>
          </div>
        </div>

        <div class="day-time-totals">
          <div class="day-time-chip" id="wchip_${dateStr}">${t('otherWorkRecords')}<span>${wl.length} ${t('records')}</span></div>
          <div class="day-time-chip travel" id="tchip_${dateStr}">${t('onRoad')}<span>${toHM(tm)}</span></div>
        </div>

        <button class="clear-btn" onclick="clearDay('${dateStr}')">${t('clearDay')}</button>
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
  if (wchip) wchip.innerHTML = `${t('otherWorkRecords')}<span>${wl.length} ${t('records')}</span>`;

  const tchip = document.getElementById('tchip_' + dateStr);
  if (tchip) tchip.innerHTML = `${t('onRoad')}<span>${toHM(tm)}</span>`;

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

  const wl = loadWorkLog();
  const tl = loadTravelLog();
  const wCount = wl.length;
  const tm     = tl.reduce((s,x) => s+x.mins, 0);
  document.getElementById('totalExtraWork').textContent   = wCount;
  document.getElementById('totalExtraTravel').textContent = toHM(tm);

  const totalAll = mob + wCount + sklad + mbSklad;
  const elAll = document.getElementById('totalAll');
  if (elAll) elAll.textContent = totalAll;

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
function copySummary() {
  load();
  let mob=0, sklad=0, mbSklad=0;
  Object.values(data).forEach(r => {
    mob    += +r.mob    || 0;
    sklad  += +r.sklad  || 0;
    mbSklad+= +r.mbSklad|| 0;
  });
  const wl = loadWorkLog();
  const tl = loadTravelLog();
  const wCount = wl.length;
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  const totalAll = mob + wCount + sklad + mbSklad;

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

  const text = [
    `${t('months')[month]} ${year}`,
    `${t('summaryLabel')} ${mob}`,
    `${t('summaryOther')} ${wCount}`,
    `${t('summaryRegGave')} ${sklad}`,
    `${t('summaryMbGave')} ${mbSklad}`,
    `${t('summaryTotal')} ${totalAll}`,
    `${t('summaryTravel')} ${toHM(tm)}`,
    `${t('summaryWarehouse')} ${skladDays} ${t('summaryDays')} | ${t('summaryHighway')} ${trassaDays} ${t('summaryDays')}`,
  ].join('\n');

  navigator.clipboard.writeText(text)
    .then(() => alert(t('summaryCopied')))
    .catch(() => alert(text));
}

// ── Chart page ────────────────────────────────
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
  document.getElementById('chartPageTitle').textContent = t('chartTitle');
  document.getElementById('chartMonthLabel').textContent = `${t('months')[month]} ${year}`;

  const workdays = getWorkdays(year, month);
  const wl = loadWorkLog();
  const tl = loadTravelLog();

  const labels = [], mobData = [], gaveData = [], travelData = [];

  workdays.forEach(d => {
    const dateStr = formatDate(d);
    const r = data[dateStr] || {};
    const mob = +r.mob || 0;
    const gave = (+r.sklad||0) + (+r.mbSklad||0);
    const tm = tl.filter(x => x.date === dateStr).reduce((s,x) => s+x.mins, 0);
    labels.push(dateStr.slice(0,2));
    mobData.push(mob);
    gaveData.push(gave);
    travelData.push(tm);
  });

  const canvas = document.getElementById('chartCanvas');
  const ctx = canvas.getContext('2d');

  // Destroy old chart if exists
  if (window._chart) { window._chart.destroy(); }

  window._chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: t('chartMobile'),
          data: mobData,
          backgroundColor: '#818cf8cc',
          borderRadius: 4,
        },
        {
          label: t('chartGave'),
          data: gaveData,
          backgroundColor: '#6ee7b7cc',
          borderRadius: 4,
        },
        {
          label: t('chartTravel'),
          data: travelData,
          backgroundColor: '#fb923c55',
          borderRadius: 4,
          hidden: true,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#e2e8f0', font: { size: 11 } }
        }
      },
      scales: {
        x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: '#2a2a38' } },
        y: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: '#2a2a38' } }
      }
    }
  });
}

// ── PDF ───────────────────────────────────────
function generatePDF() {
  load();
  const workdays = getWorkdays(year, month);
  const wl = loadWorkLog();
  const tl = loadTravelLog();

  let mob=0, sush=0, sklad=0, mbSush=0, mbSklad=0, wCount=0, totalTm=0;
  Object.values(data).forEach(r => {
    mob    += +r.mob    || 0;
    sush   += +r.sush   || 0;
    sklad  += +r.sklad  || 0;
    mbSush += +r.mbSush || 0;
    mbSklad+= +r.mbSklad|| 0;
  });
  wCount = wl.length;
  totalTm = tl.reduce((s,x) => s+x.mins, 0);
  const totalAll = mob + wCount + sklad + mbSklad;

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

  const rows = workdays.map(d => {
    const dateStr = formatDate(d);
    const wd = t('weekdays')[d.getDay()];
    const r = data[dateStr] || {};
    const dayWl = wl.filter(x => x.date === dateStr);
    const dayTl = tl.filter(x => x.date === dateStr);
    const dayTm = dayTl.reduce((s,x) => s+x.mins, 0);
    return `<tr>
      <td>${dateStr}</td>
      <td>${wd}</td>
      <td>${r.mob||''}</td>
      <td>${r.sklad||''}</td>
      <td>${r.mbSklad||''}</td>
      <td>${dayWl.length||''}</td>
      <td>${dayTm ? toHM(dayTm) : ''}</td>
    </tr>`;
  }).join('');

  const now2 = new Date();
  const dateStr2 = `${now2.getDate()}.${now2.getMonth()+1}.${now2.getFullYear()}`;

  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; font-size: 12px; color: #111; padding: 20px; }
    h1 { font-size: 18px; margin-bottom: 4px; }
    .sub { color: #666; font-size: 12px; margin-bottom: 16px; }
    table { width: 100%; border-collapse: collapse; margin-bottom: 16px; }
    th { background: #1a1a22; color: #6ee7b7; padding: 7px 8px; text-align: left; font-size: 11px; }
    td { padding: 6px 8px; border-bottom: 1px solid #e5e7eb; font-size: 11px; }
    tr:nth-child(even) td { background: #f9fafb; }
    .totals { display: flex; gap: 16px; flex-wrap: wrap; margin-top: 12px; }
    .tot-card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px 14px; min-width: 120px; }
    .tot-label { font-size: 10px; color: #666; text-transform: uppercase; margin-bottom: 4px; }
    .tot-val { font-size: 20px; font-weight: 700; color: #1a1a22; }
    .gen { font-size: 10px; color: #aaa; margin-top: 20px; }
  </style></head><body>
  <h1>${t('reportTitle')} — ${t('months')[month]} ${year}</h1>
  <div class="sub">${t('generatedPDF')} ${dateStr2}</div>
  <table>
    <thead><tr>
      <th>Дата</th><th>День</th>
      <th>${t('mobilePDF')}</th>
      <th>${t('regularPDF')}</th>
      <th>${t('mbPDF')}</th>
      <th>${t('otherPDF')}</th>
      <th>${t('travelPDF')}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
    <tfoot><tr style="font-weight:700;background:#f0fdf4">
      <td colspan="2">${t('totalPDF')}</td>
      <td>${mob}</td>
      <td>${sklad}</td>
      <td>${mbSklad}</td>
      <td>${wCount}</td>
      <td>${toHM(totalTm)}</td>
    </tr></tfoot>
  </table>
  <div class="totals">
    <div class="tot-card"><div class="tot-label">${t('totalPDF')}</div><div class="tot-val">${totalAll}</div></div>
    <div class="tot-card"><div class="tot-label">${t('warehousePDF')}</div><div class="tot-val">${skladDays} <span style="font-size:13px;font-weight:400">${t('daysPDF')}</span></div></div>
    <div class="tot-card"><div class="tot-label">${t('highwayPDF')}</div><div class="tot-val">${trassaDays} <span style="font-size:13px;font-weight:400">${t('daysPDF')}</span></div></div>
    <div class="tot-card"><div class="tot-label">${t('travelPDF')}</div><div class="tot-val" style="font-size:15px">${toHM(totalTm)}</div></div>
  </div>
  <div class="gen">${t('reportTitle')} App</div>
  </body></html>`;

  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
  setTimeout(() => win.print(), 300);
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
  document.getElementById('histTitle').textContent = isTravel ? t('histTravel') : t('histOtherWork');
  document.getElementById('histTitle').style.color = isTravel ? 'var(--accent2)' : 'var(--orange)';
  document.getElementById('tabWork').textContent = t('tabOther');
  document.getElementById('tabTravel').textContent = t('tabTravel');

  const content = document.getElementById('histContent');
  if (!log.length) { content.innerHTML = `<div class="hist-empty">${t('histEmpty')}</div>`; return; }

  const byDate = {};
  log.forEach(x => { if (!byDate[x.date]) byDate[x.date] = []; byDate[x.date].push(x); });

  content.innerHTML = Object.keys(byDate).sort().reverse().map(date => {
    const items = byDate[date];
    const total = items.reduce((s,x) => s + (x.mins||0), 0);
    return `<div class="hist-day">
      <div class="hist-day-hdr">
        <div class="hist-day-date">${date}</div>
        <div class="hist-day-total">${isTravel ? `${t('histTotal')} <b class="travel">${toHM(total)}</b>` : `${items.length} ${t('histRecords')}`}</div>
      </div>
      ${items.map(x => `
        <div class="hist-item">
          <div class="hist-dot ${isTravel ? 'travel' : ''}"></div>
          <div class="hist-text">${isTravel ? toHM(x.mins) : x.desc}</div>
          ${isTravel ? `<div class="hist-min travel">${x.mins} мин</div>` : ''}
        </div>`).join('')}
    </div>`;
  }).join('') + `<button class="export-btn" onclick="exportHistory()">${t('exportBtn')}</button>`;
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
    const lines = items.map(x => isTravel ? `  • ${x.mins} мин` : `  • ${x.desc}`).join('\n');
    return `=== ${date}${isTravel ? ` (${toHM(total)})` : ''} ===\n${lines}`;
  }).join('\n\n');
  navigator.clipboard.writeText((isTravel ? t('histTravel') : t('histOtherWork')) + '\n\n' + text)
    .then(() => alert(t('copied')))
    .catch(() => alert(text));
}

// ── Backup / Restore ──────────────────────────
function backupData() {
  const allData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('report_') || key.startsWith('worklog_') || key.startsWith('travellog_') || key === 'lang')
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
      if (allData.lang) lang = allData.lang;
      render();
      alert(t('restored'));
    } catch(err) { alert(t('restoreError')); }
  };
  reader.readAsText(file);
}

// ── Init ──────────────────────────────────────
document.getElementById('flagRu').classList.toggle('active', lang === 'ru');
document.getElementById('flagPl').classList.toggle('active', lang === 'pl');
render();
updateTotals();
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
