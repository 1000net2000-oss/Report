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
const COLS = ['mob','sush','sklad','mbSush','mbSklad','prok'];

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

function getDayRows(dateStr, r, wl, tl) {
  r = r || data[dateStr] || {};
  wl = wl || loadWorkLog().filter(x => x.date === dateStr);
  tl = tl || loadTravelLog().filter(x => x.date === dateStr);
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  const workMins = wl.reduce((s,x) => s+(x.mins||0), 0);
  const rows = [];
  if (r.mob)    rows.push(`<div class="day-row"><span class="day-row-key">${t('mobile')}</span><span class="day-row-val day-row-mob">${r.mob}</span></div>`);
  if (r.prok)   rows.push(`<div class="day-row"><span class="day-row-key">${t('prok')}</span><span class="day-row-val day-row-prok">${r.prok}</span></div>`);
  const sush = (+r.sush||0)+(+r.mbSush||0);
  const sklad = (+r.sklad||0)+(+r.mbSklad||0);
  if (sush)  rows.push(`<div class="day-row"><span class="day-row-key">${t('took')}</span><span class="day-row-val">${sush}</span></div>`);
  if (sklad) rows.push(`<div class="day-row"><span class="day-row-key">${t('gave')}</span><span class="day-row-val">${sklad}</span></div>`);
  if (wl.length) {
    const mStr = workMins > 0 ? ` · ${toHM(workMins)}` : '';
    rows.push(`<div class="day-row"><span class="day-row-key">${t('otherWork')}</span><span class="day-row-val day-row-work">${wl.length}${mStr}</span></div>`);
  }
  if (tm) rows.push(`<div class="day-row"><span class="day-row-key">${t('onRoad')}</span><span class="day-row-val day-row-travel">${toHM(tm)}</span></div>`);
  return rows.join('');
}

// ── Render ────────────────────────────────────
function render() {
  load();
  document.getElementById('monthLabel').textContent = `${t('months')[month]} ${year}`;
  document.getElementById('btnBackup').textContent   = t('backup');
  const restoreEl = document.getElementById('btnRestoreLbl');
  if (restoreEl) restoreEl.textContent = t('restore');
  document.getElementById('btnSummary-lbl').textContent = lang === 'pl' ? 'Udostępnij' : 'Поделиться';
  document.getElementById('btnArchive-lbl').textContent  = lang === 'pl' ? 'Archiwum'   : 'Архив';
  document.getElementById('btnChart-lbl').textContent    = lang === 'pl' ? 'Wykres'     : 'График';
  document.getElementById('labelMob').textContent        = t('mobile');
  document.getElementById('labelOtherWork').textContent  = t('otherWork');
  document.getElementById('labelRegular').textContent    = t('regular');
  document.getElementById('labelMinibar').textContent    = t('minibar');
  document.getElementById('labelRegTook').textContent    = t('took');
  document.getElementById('labelRegGave').textContent    = t('gave');
  document.getElementById('labelMbTook').textContent     = t('took');
  document.getElementById('labelMbGave').textContent     = t('gave');
  document.getElementById('labelTotal').textContent      = t('total');
  const elLabelProk = document.getElementById('labelProk');
  if (elLabelProk) elLabelProk.textContent = t('prok');
  document.getElementById('labelTravel').textContent     = t('travel');
  document.getElementById('labelWarehouse').textContent  = t('warehouse');
  document.getElementById('labelHighway').textContent    = t('highway');
  document.getElementById('labelWarehouseDays').textContent = t('days');
  document.getElementById('labelHighwayDays').textContent   = t('days');

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
        <div class="day-left">
          <div class="day-date">${dateStr.slice(0,5)}</div>
          <div class="day-weekday">${wd}</div>
        </div>
        <div class="day-rows">${getDayRows(dateStr, r, wl, tl)}</div>
        <div class="chevron">▼</div>
      </div>
      <div class="day-body">
        <div>
          <div class="section-label">${t('sectionMobile')}</div>
          <div class="fields-grid">
            <div class="field mob">
              <label>${t('mobile')}</label>
              <input type="text" inputmode="text" value="${r.mob||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','mob')" onfocus="focusField(this,'${dateStr}','mob')">
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div>
          <div class="section-label">${t('sectionProk')}</div>
          <div class="fields-grid">
            <div class="field prok">
              <label>${t('prok')}</label>
              <input type="text" inputmode="text" value="${r.prok||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','prok')" onfocus="focusField(this,'${dateStr}','prok')">
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div>
          <div class="section-label">${t('sectionDist')}</div>
          <div class="fields-grid">
            <div class="field">
              <label>${t('tookFromWarehouse')}</label>
              <input type="text" inputmode="text" value="${r.sush||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','sush')" onfocus="focusField(this,'${dateStr}','sush')">
            </div>
            <div class="field">
              <label>${t('gaveReady')}</label>
              <input type="text" inputmode="text" value="${r.sklad||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','sklad')" onfocus="focusField(this,'${dateStr}','sklad')">
            </div>
            <div class="field">
              <label>${t('mbTook')}</label>
              <input type="text" inputmode="text" value="${r.mbSush||''}" placeholder="0"
                onblur="evalField(this,'${dateStr}','mbSush')" onfocus="focusField(this,'${dateStr}','mbSush')">
            </div>
            <div class="field">
              <label>${t('mbGave')}</label>
              <input type="text" inputmode="text" value="${r.mbSklad||''}" placeholder="0"
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
            <input class="work-mins" type="text" inputmode="numeric" placeholder="мин" id="wm_${dateStr}"/>
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

    setupLongPress(card, dateStr);
    list.appendChild(card);
  });

  updateTotals();
  updateBestDays();
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
    const rows = card.querySelector('.day-rows');
    if (rows) rows.innerHTML = getDayRows(dateStr, null, wl, tl);
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
    if (card.querySelector('.day-date')?.textContent === dateStr.slice(0,5)) {
      card.classList.toggle('has-data', hasData(dateStr));
      const rows = card.querySelector('.day-rows');
      if (rows) rows.innerHTML = getDayRows(dateStr);
    }
  });
}

function updateTotals() {
  let mob=0, sush=0, sklad=0, mbSush=0, mbSklad=0, prok=0;
  Object.values(data).forEach(r => {
    mob    += +r.mob    || 0;
    sush   += +r.sush   || 0;
    sklad  += +r.sklad  || 0;
    mbSush += +r.mbSush || 0;
    mbSklad+= +r.mbSklad|| 0;
    prok   += +r.prok   || 0;
  });

  document.getElementById('totalMob').textContent     = mob;
  document.getElementById('totalSush').textContent    = sush;
  document.getElementById('totalSklad').textContent   = sklad;
  document.getElementById('totalMbSush').textContent  = mbSush;
  document.getElementById('totalMbSklad').textContent = mbSklad;
  const elProk = document.getElementById('totalProk');
  if (elProk) elProk.textContent = prok;

  const wl = loadWorkLog();
  const tl = loadTravelLog();
  const wCount = wl.length;
  const tm = tl.reduce((s,x) => s+x.mins, 0);
  const workTotalMins = wl.reduce((s, x) => s + (x.mins || 0), 0);
  const elWork = document.getElementById('totalExtraWork');
  if (elWork) {
    elWork.innerHTML = wCount + (workTotalMins > 0 ? `<span class="work-sep"> · </span><span class="work-time-lbl">${toHM(workTotalMins)}</span>` : '');
  }
  document.getElementById('totalExtraTravel').textContent = toHM(tm);

  const totalAll = mob + wCount + sklad + mbSklad + prok;
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
  document.getElementById('chartPageTitle').textContent  = t('chartTitle');
  document.getElementById('chartMonthLabel').textContent = `${t('months')[month]} ${year}`;

  const workdays = getWorkdays(year, month);
  const tl = loadTravelLog();

  const rows = [];
  workdays.forEach(d => {
    const dateStr = formatDate(d);
    const r = data[dateStr] || {};
    const mob  = +r.mob || 0;
    const gave = (+r.sklad||0) + (+r.mbSklad||0);
    if (mob || gave) rows.push({ label: dateStr.slice(0,2), mob, gave });
  });

  const canvas = document.getElementById('chartCanvas');
  const ctx = canvas.getContext('2d');
  const wrap = canvas.parentElement;
  canvas.width  = wrap.clientWidth  || 340;

  const ROW_H  = 36;
  const LEG_H  = 24;
  const PAD    = { top: 8, right: 48, bottom: LEG_H + 8, left: 28 };
  canvas.height = PAD.top + rows.length * ROW_H + PAD.bottom;

  const W = canvas.width, H = canvas.height;
  const barAreaW = W - PAD.left - PAD.right;
  const maxVal = Math.max(...rows.map(r => Math.max(r.mob, r.gave)), 1);
  const BAR_H  = 10;
  const GAP    = 3;

  ctx.fillStyle = '#0f0f12';
  ctx.fillRect(0, 0, W, H);

  rows.forEach((row, i) => {
    const y = PAD.top + i * ROW_H;
    const cy = y + ROW_H / 2;

    // Day label
    ctx.fillStyle = '#64748b';
    ctx.font = 'bold 9px Inter, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(row.label, PAD.left - 4, cy + 3);

    // Mob bar
    const mW = (row.mob / maxVal) * barAreaW;
    if (mW > 0) {
      const g1 = ctx.createLinearGradient(PAD.left, 0, PAD.left + mW, 0);
      g1.addColorStop(0, '#a78bfa');
      g1.addColorStop(1, '#818cf844');
      ctx.fillStyle = g1;
      ctx.beginPath();
      ctx.roundRect
        ? ctx.roundRect(PAD.left, cy - BAR_H - GAP, mW, BAR_H, [0, 3, 3, 0])
        : ctx.rect(PAD.left, cy - BAR_H - GAP, mW, BAR_H);
      ctx.fill();
      // value
      ctx.fillStyle = '#a78bfa';
      ctx.font = 'bold 9px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(row.mob, PAD.left + mW + 4, cy - GAP - 1);
    }

    // Gave bar (stacionarnaya + mb)
    const gW = (row.gave / maxVal) * barAreaW;
    if (gW > 0) {
      const g2 = ctx.createLinearGradient(PAD.left, 0, PAD.left + gW, 0);
      g2.addColorStop(0, '#34d399');
      g2.addColorStop(1, '#6ee7b744');
      ctx.fillStyle = g2;
      ctx.beginPath();
      ctx.roundRect
        ? ctx.roundRect(PAD.left, cy + GAP, gW, BAR_H, [0, 3, 3, 0])
        : ctx.rect(PAD.left, cy + GAP, gW, BAR_H);
      ctx.fill();
      // value
      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 9px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(row.gave, PAD.left + gW + 4, cy + GAP + BAR_H - 1);
    }

    // Separator line
    if (i < rows.length - 1) {
      ctx.strokeStyle = '#2a2a38';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(PAD.left, y + ROW_H);
      ctx.lineTo(W - 8, y + ROW_H);
      ctx.stroke();
    }
  });

  // Legend
  const legY = H - LEG_H + 8;
  [[t('chartMobile'), '#a78bfa'], [t('chartStation'), '#34d399']].forEach(([name, color], i) => {
    const lx = PAD.left + i * 130;
    ctx.fillStyle = color;
    ctx.fillRect(lx, legY - 7, 10, 6);
    ctx.fillStyle = '#94a3b8';
    ctx.font = '9px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(name, lx + 14, legY - 1);
  });
}

// ── PDF ───────────────────────────────────────
function generatePDF() {
  load();
  const workdays = getWorkdays(year, month);
  const wl = loadWorkLog();
  const tl = loadTravelLog();

  let mob=0, sush=0, sklad=0, mbSush=0, mbSklad=0, prok=0;
  Object.values(data).forEach(r => {
    mob    += +r.mob    || 0;
    sush   += +r.sush   || 0;
    sklad  += +r.sklad  || 0;
    mbSush += +r.mbSush || 0;
    mbSklad+= +r.mbSklad|| 0;
    prok   += +r.prok   || 0;
  });
  const wCount   = wl.length;
  const totalTm  = tl.reduce((s,x) => s+x.mins, 0);
  const totalAll = mob + wCount + sklad + mbSklad + prok;

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
    return `<tr>
      <td>${dateStr}</td><td>${wd}</td>
      <td>${r.mob||''}</td>
      <td>${r.sklad||''}</td>
      <td>${r.mbSklad||''}</td>
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
function setupLongPress(card, dateStr) {
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
    const station = (+r.sklad||0) + (+r.mbSklad||0);
    if (mob > bestMob.val) bestMob = { date, val: mob };
    if (station > bestStation.val) bestStation = { date, val: station };
  });
  return { bestMob, bestStation };
}

function updateBestDays() {
  const { bestMob, bestStation } = getBestDay();
  document.querySelectorAll('.day-card').forEach(card => {
    card.classList.remove('best-mob', 'best-station');
    const dateEl = card.querySelector('.day-date');
    if (!dateEl) return;
    const d = dateEl.textContent;
    const fullDate = d.length === 5 ? d + String(new Date().getMonth()+1).padStart(2,'0') + '.' : d;
    if (bestMob.date && bestMob.date.startsWith(d) && bestMob.val > 0) card.classList.add('best-mob');
    else if (bestStation.date && bestStation.date.startsWith(d) && bestStation.val > 0) card.classList.add('best-station');
  });
}

// ── Archive page ──────────────────────────────
// ── Salary toggle ─────────────────────────────
let salaryVisible = false;
function toggleSalary() {
  salaryVisible = !salaryVisible;
  const num = document.getElementById('salaryNum');
  if (num) num.classList.toggle('salary-hidden', !salaryVisible);
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

function renderArchive() {
  document.getElementById('archiveTitle').textContent = lang === 'pl' ? 'Archiwum' : 'Архив';
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('report_')) keys.push(key);
  }
  keys.sort().reverse();

  const MONTHS = t('months');
  const content = document.getElementById('archiveContent');
  if (!keys.length) {
    content.innerHTML = `<div class="hist-empty">${t('histEmpty')}</div>`;
    return;
  }

  content.innerHTML = keys.map(key => {
    const [, y, m] = key.split('_');
    let d = {};
    try { d = JSON.parse(localStorage.getItem(key) || '{}'); } catch(e) {}
    let mob=0, sklad=0, mbSklad=0;
    Object.values(d).forEach(r => {
      mob    += +r.mob    || 0;
      sklad  += +r.sklad  || 0;
      mbSklad+= +r.mbSklad|| 0;
    });
    const wlKey = `worklog_${y}_${m}`;
    let wCount = 0;
    try { wCount = JSON.parse(localStorage.getItem(wlKey) || '[]').length; } catch(e) {}
    const total = mob + wCount + sklad + mbSklad;
    const isActive = +y === year && +m === month;
    return `<div class="archive-card${isActive ? ' active' : ''}" onclick="goToMonth(${y},${m})">
      <div class="archive-month">${MONTHS[+m]} ${y}</div>
      <div class="archive-stats">
        <span class="archive-chip mob">${t('mobile')}: <b>${mob}</b></span>
        <span class="archive-chip">${t('total')}: <b>${total}</b></span>
      </div>
    </div>`;
  }).join('');
}

function goToMonth(y, m) {
  year = +y; month = +m;
  closeArchive();
  render();
}

// ── Quick input ───────────────────────────────
function openQuickInput() {
  const today = formatDate(new Date());
  document.getElementById('quickDate').textContent = today;
  document.getElementById('quickMob').value = '';
  document.getElementById('quickSklad').value = '';
  document.getElementById('quickMbSklad').value = '';
  document.getElementById('quickOverlay').classList.add('show');
  document.getElementById('quickMob').focus();
}

function closeQuickInput() {
  document.getElementById('quickOverlay').classList.remove('show');
}

function evalQuick(val) {
  if (!val) return '';
  if (/^[\d\s\+\-\*\/\.]+$/.test(val) && /[\+\-\*\/]/.test(val)) {
    try {
      const r = Function('"use strict"; return (' + val + ')')();
      if (isFinite(r)) return String(Math.round(r * 100) / 100);
    } catch(e) {}
  }
  return val;
}

function saveQuickInput() {
  const today   = formatDate(new Date());
  const mob     = evalQuick(document.getElementById('quickMob').value.trim());
  const sklad   = evalQuick(document.getElementById('quickSklad').value.trim());
  const mbSklad = evalQuick(document.getElementById('quickMbSklad').value.trim());
  load();
  if (!data[today]) data[today] = {};
  if (mob)     data[today].mob     = mob;
  if (sklad)   data[today].sklad   = sklad;
  if (mbSklad) data[today].mbSklad = mbSklad;
  save();
  closeQuickInput();
  render();
}

// ── Share ─────────────────────────────────────
function shareSummary() {
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
  const totalAll = mob + wCount + sklad + mbSklad + prok;
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
    `${t('summaryOther')} ${wCount}`,
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
  document.getElementById('histTitle').textContent   = isTravel ? t('histTravel') : t('histOtherWork');
  document.getElementById('histTitle').style.color   = isTravel ? 'var(--accent2)' : 'var(--orange)';
  document.getElementById('tabWork').textContent     = t('tabOther');
  document.getElementById('tabTravel').textContent   = t('tabTravel');

  const content = document.getElementById('histContent');
  if (!log.length) { content.innerHTML = `<div class="hist-empty">${t('histEmpty')}</div>`; return; }

  const byDate = {};
  log.forEach(x => { if (!byDate[x.date]) byDate[x.date] = []; byDate[x.date].push(x); });

  const totalAllMins = !isTravel ? log.reduce((s,x) => s + (x.mins||0), 0) : 0;

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
          ${isTravel ? `<div class="hist-min travel">${x.mins} мин</div>` : (x.mins ? `<div class="hist-min">${x.mins} мин</div>` : '')}
        </div>`).join('')}
    </div>`;
  }).join('')
  + (!isTravel && totalAllMins > 0 ? `<div class="hist-total-row"><span class="hist-total-lbl">${lang === 'pl' ? 'Łącznie' : 'Итого'}</span><span class="hist-total-val">${toHM(totalAllMins)}</span></div>` : '')
  + `<button class="export-btn" onclick="exportHistory()">${t('exportBtn')}</button>`;
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
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
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
if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js');
