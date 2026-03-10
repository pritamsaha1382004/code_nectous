const BADGE_MILESTONES = [
  { xp: 100, name: 'Beginner', tier: 'bronze' },
  { xp: 200, name: 'Novice', tier: 'bronze' },
  { xp: 500, name: 'Amateur', tier: 'silver' },
  { xp: 1000, name: 'Explorer', tier: 'gold' },
  { xp: 1700, name: 'Elite', tier: 'legend' },
  { xp: 2500, name: 'Master', tier: 'master' },
  { xp: 3500, name: 'Grand Master', tier: 'master' },
];

const BADGE_ID_SET = new Set(BADGE_MILESTONES.map((item) => `xp-${item.xp}`));
const MASTER_BADGE_META = {
  'master-python': { name: 'Pro Python', tier: 'master' },
  'master-javascript': { name: 'Pro JavaScript', tier: 'master' },
  'master-java': { name: 'Pro Java', tier: 'master' },
  'master-cpp': { name: 'Pro C++', tier: 'master' },
  'master-c': { name: 'Pro C', tier: 'master' },
  'master-sql': { name: 'Pro SQL', tier: 'master' },
};
const MASTER_BADGE_IDS = new Set(Object.keys(MASTER_BADGE_META));

const MASTERY_BADGE_META = {
  'mastery-python': { name: 'Master Python', tier: 'master' },
  'mastery-javascript': { name: 'Master JavaScript', tier: 'master' },
  'mastery-java': { name: 'Master Java', tier: 'master' },
  'mastery-cpp': { name: 'Master C++', tier: 'master' },
  'mastery-c': { name: 'Master C', tier: 'master' },
};
const MASTERY_BADGE_IDS = new Set(Object.keys(MASTERY_BADGE_META));

// Badge images
// Badge images live in `assets/` in this project, but we also support:
// - `badges/` (root) if you keep them separately
// - `assets/badges/` as a fallback
const BADGE_IMAGE_BASE_NAMES = {
  // XP milestone badges
  'xp-100': ['beginner', 'beginner badge'],
  'xp-200': ['novice', 'novice badge'],
  'xp-500': ['amateur', 'amateur badge'],
  'xp-1000': ['explorer', 'explorer badge'],
  'xp-1700': ['elite', 'elite badge'],
  'xp-2500': ['master', 'master badge'],
  'xp-3500': ['grand-master', 'grand master', 'grand master badge'],

  // Exam (20/20) badges
  'master-python': ['exam-python', 'python master badge', 'python master'],
  'master-javascript': ['exam-javascript', 'javascript master badge', 'javascript master'],
  'master-java': ['exam-java', 'java master badge', 'java master'],
  'master-cpp': ['exam-cpp', 'c++ master badge', 'cpp master badge', 'c++ master'],
  'master-c': ['exam-c', 'c master badge', 'c master'],
  'master-sql': ['exam-sql', 'sql master badge', 'sql master'],
};

const BADGE_IMAGE_DIRS = ['assets', 'badges', 'assets/badges'];
const BADGE_IMAGE_EXTS = ['png', 'webp', 'jpg', 'jpeg', 'svg'];
const COURSE_CHART_ORDER = ['python', 'javascript', 'cpp', 'c', 'java', 'sql', 'artificial-intelligence'];
const COURSE_LABELS = {
  python: 'Python',
  javascript: 'JavaScript',
  cpp: 'C++',
  c: 'C',
  java: 'Java',
  sql: 'SQL',
  'artificial-intelligence': 'AI',
};

function uniqueList(items) {
  const out = [];
  const seen = new Set();
  (Array.isArray(items) ? items : []).forEach((item) => {
    const key = String(item || '');
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(key);
  });
  return out;
}

function getCourseDisplayName(courseKey) {
  const key = String(courseKey || '');
  if (COURSE_LABELS[key]) return COURSE_LABELS[key];
  return key
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function getEnrolledCourseKeys(progress) {
  if (!progress || !Array.isArray(progress.enrolled)) return [];
  return uniqueList(
    progress.enrolled
      .map((key) => String(key || '').trim())
      .filter((key) => key.length > 0),
  );
}

function getVisibleCourseKeys(courseProgress, enrolledCourseKeys) {
  if (!courseProgress || typeof courseProgress !== 'object') return [];
  const enrolledSet = new Set(Array.isArray(enrolledCourseKeys) ? enrolledCourseKeys : []);
  if (enrolledSet.size === 0) return [];

  const ordered = [];
  const pushKey = (key) => {
    if (!enrolledSet.has(key)) return;
    if (!courseProgress[key]) return;
    if (ordered.includes(key)) return;
    ordered.push(key);
  };

  COURSE_CHART_ORDER.forEach(pushKey);
  Object.keys(courseProgress).forEach(pushKey);
  return ordered;
}

function toSlug(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');
}

function toSnake(name) {
  return String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[\s-]+/g, '_');
}

function toTitleCase(name) {
  return String(name || '').replace(/\b([a-z])/g, (m) => m.toUpperCase());
}

function getBadgeImageCandidates(badgeId) {
  const id = String(badgeId || '');
  const names = BADGE_IMAGE_BASE_NAMES[id] || [];
  const derived = [];
  names.forEach((n) => {
    derived.push(n);
    derived.push(toTitleCase(n));
    derived.push(toSlug(n));
    derived.push(toSnake(n));
  });
  const baseNames = uniqueList(derived);
  const candidates = [];

  BADGE_IMAGE_DIRS.forEach((dir) => {
    baseNames.forEach((base) => {
      BADGE_IMAGE_EXTS.forEach((ext) => {
        const raw = `${dir}/${base}.${ext}`;
        const encoded = encodeURI(raw);
        candidates.push(encoded);
        candidates.push(encodeURI(`${dir}/${base}.${ext.toUpperCase()}`));
        // Some servers behave better with explicit %2B for '+' in paths.
        if (encoded.includes('+')) candidates.push(encoded.replace(/\+/g, '%2B'));
      });
    });
  });

  return uniqueList(candidates);
}

function attachImgFallback(imgEl, candidates, onExhausted) {
  if (!imgEl) return;
  const list = Array.isArray(candidates) ? candidates : [];
  let idx = 0;

  const tryNext = () => {
    while (idx < list.length) {
      const next = list[idx++];
      if (!next) continue;
      imgEl.src = next;
      return;
    }
    imgEl.removeEventListener('error', tryNext);
    if (typeof onExhausted === 'function') onExhausted();
    imgEl.remove();
  };

  imgEl.addEventListener('error', tryNext);
  tryNext();
}

function showLoginRequired() {
  if (typeof window.cnToast === 'function') {
    window.cnToast('Login Required', 'Login first.');
  } else {
    window.alert('Login first.');
  }
  window.setTimeout(() => {
    window.location.href = 'auth.html';
  }, 900);
}

function getBadgeXPValue(badgeId) {
  if (!badgeId) return 0;
  const match = badgeId.match(/^xp-(\d+)$/);
  return match ? parseInt(match[1], 10) : 0;
}

function getBadgeMeta(badgeId) {
  if (MASTERY_BADGE_META[badgeId]) return { xp: 0, ...MASTERY_BADGE_META[badgeId], kind: 'mastery' };
  if (MASTER_BADGE_META[badgeId]) return { xp: 0, ...MASTER_BADGE_META[badgeId], kind: 'exam' };
  const xp = getBadgeXPValue(badgeId);
  const milestone = BADGE_MILESTONES.find((m) => m.xp === xp);
  if (milestone) return { ...milestone, kind: 'xp' };
  return { xp, name: `${xp} XP`, tier: 'bronze', kind: 'xp' };
}

function getBadgeStars(meta) {
  if (!meta) return '';
  if (meta.tier === 'legend') return '★★★★★';
  if (meta.tier === 'gold') return '★★★★';
  if (meta.tier === 'silver') return '★★★';
  if (meta.tier === 'master') return '★★★';
  return '★★';
}

function getBadgeBars(meta) {
  if (!meta) return 2;
  if (meta.tier === 'legend') return 5;
  if (meta.tier === 'gold') return 4;
  if (meta.tier === 'silver') return 3;
  if (meta.tier === 'master') return 3;
  return 2;
}

function getNextBadgeTarget(currentXP) {
  const xp = Number.isFinite(Number(currentXP)) ? Number(currentXP) : 0;
  for (const milestone of BADGE_MILESTONES) {
    if (xp < milestone.xp) {
      return milestone.xp;
    }
  }
  return null;
}

function ensureBadgeDetail() {
  const panel = document.querySelector('.chart-panel');
  if (!panel) return null;
  let el = document.getElementById('badgeDetail');
  if (el) return el;
  el = document.createElement('div');
  el.id = 'badgeDetail';
  el.className = 'badge-detail';
  panel.insertBefore(el, panel.firstChild);
  return el;
}

function isBadgeModalOpen() {
  const modal = document.getElementById('badgeModal');
  return !!(modal && modal.classList.contains('show'));
}

function closeBadgeModal() {
  const modal = document.getElementById('badgeModal');
  if (!modal) return;
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('badge-modal-open');

  const media = document.getElementById('badgeModalMedia');
  const fallback = document.getElementById('badgeModalFallback');
  if (fallback) fallback.style.display = 'none';
  if (media) {
    const img = media.querySelector('img');
    if (img) img.remove();
  }
}

function openBadgeModal(badgeId) {
  const modal = document.getElementById('badgeModal');
  const media = document.getElementById('badgeModalMedia');
  const fallback = document.getElementById('badgeModalFallback');
  const titleEl = document.getElementById('badgeModalTitle');
  const subEl = document.getElementById('badgeModalSub');
  const closeBtn = document.getElementById('badgeModalClose');
  if (!modal || !media || !fallback || !titleEl || !subEl) return;

  const meta = getBadgeMeta(badgeId);
  const kind = meta.kind || 'xp';
  const pointsLabel =
    kind === 'exam' ? 'EXAM • 20/20' : kind === 'mastery' ? 'MASTER CHALLENGES' : `${meta.xp} XP MILESTONE`;

  titleEl.textContent = meta.name;
  subEl.textContent = pointsLabel;

  // Reset previous preview.
  fallback.textContent = meta.name;
  fallback.style.display = 'none';
  const oldImg = media.querySelector('img');
  if (oldImg) oldImg.remove();

  const candidates = getBadgeImageCandidates(badgeId);
  if (candidates.length) {
    const img = document.createElement('img');
    img.alt = `${meta.name} badge`;
    img.loading = 'eager';
    media.insertBefore(img, fallback);
    attachImgFallback(img, candidates, () => {
      fallback.style.display = 'block';
    });
  } else {
    fallback.style.display = 'block';
  }

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('badge-modal-open');
  if (closeBtn) closeBtn.focus();
}

function bindBadgeModal() {
  const modal = document.getElementById('badgeModal');
  if (!modal || modal.dataset.bound === '1') return;
  modal.dataset.bound = '1';

  const backdrop = document.getElementById('badgeModalBackdrop');
  const closeBtn = document.getElementById('badgeModalClose');
  if (backdrop) backdrop.addEventListener('click', closeBadgeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeBadgeModal);

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (!isBadgeModalOpen()) return;
    event.preventDefault();
    closeBadgeModal();
  });
}

function setBadgeDetail(detailEl, badgeId, totalXP = 0) {
  if (!detailEl) return;
  if (!badgeId) {
    detailEl.textContent = '';
    return;
  }

  const meta = getBadgeMeta(badgeId);
  const candidates = getBadgeImageCandidates(badgeId);
  const imgMarkup = candidates.length ? `<img class="badge-detail-img" alt="${meta.name} badge" loading="lazy">` : '';

  if (meta.kind === 'exam') {
    detailEl.innerHTML = `
      ${imgMarkup}
      <div class="badge-detail-title">${meta.name}</div>
      <div class="badge-detail-meta">Type: Exam Pro Badge</div>
      <div class="badge-detail-meta">Unlocked by scoring 20/20 in exam</div>
    `;
    const img = detailEl.querySelector('.badge-detail-img');
    if (img) attachImgFallback(img, candidates);
    detailEl.dataset.tier = meta.tier;
    return;
  }

  if (meta.kind === 'mastery') {
    detailEl.innerHTML = `
      ${imgMarkup}
      <div class="badge-detail-title">${meta.name}</div>
      <div class="badge-detail-meta">Type: Master Badge</div>
      <div class="badge-detail-meta">Unlocked by completing 4 Master Challenges</div>
    `;
    const img = detailEl.querySelector('.badge-detail-img');
    if (img) attachImgFallback(img, candidates);
    detailEl.dataset.tier = meta.tier;
    return;
  }

  const nextTarget = getNextBadgeTarget(totalXP);
  const remaining = nextTarget === null ? 0 : Math.max(0, nextTarget - totalXP);
  const nextText = nextTarget === null ? 'All milestone badges unlocked' : `Next badge in ${remaining} XP`;

  detailEl.innerHTML = `
    ${imgMarkup}
    <div class="badge-detail-title">${meta.name}</div>
    <div class="badge-detail-meta">Unlock XP: ${meta.xp}</div>
    <div class="badge-detail-meta">Tier: ${String(meta.tier || '').toUpperCase()}</div>
    <div class="badge-detail-meta">${nextText}</div>
  `;
  const img = detailEl.querySelector('.badge-detail-img');
  if (img) attachImgFallback(img, candidates);
  detailEl.dataset.tier = meta.tier;
}

let dailyLineRangeDays = 30;
let lastDailyLessonsMap = {};

function pad2(value) {
  return String(value).padStart(2, '0');
}

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

function addDays(date, days) {
  const d = startOfDay(date);
  d.setDate(d.getDate() + days);
  return d;
}

function toDateKey(date) {
  const d = startOfDay(date);
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
}

function sanitizeDailyLessonsMap(map) {
  const out = {};
  if (!map || typeof map !== 'object') return out;
  Object.entries(map).forEach(([key, value]) => {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) return;
    const n = parseInt(value, 10);
    if (!Number.isFinite(n) || n <= 0) return;
    out[key] = n;
  });
  return out;
}

function getHeatLevel(count) {
  const n = Math.max(0, parseInt(count, 10) || 0);
  if (n <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n <= 4) return 3;
  return 4;
}

function renderActivityLegend(hasData) {
  const legend = document.getElementById('activityLegend');
  if (!legend) return;
  legend.innerHTML = `
    <span>Less</span>
    <span class="activity-legend-squares" aria-hidden="true">
      <span class="heat-cell level-0"></span>
      <span class="heat-cell level-1"></span>
      <span class="heat-cell level-2"></span>
      <span class="heat-cell level-3"></span>
      <span class="heat-cell level-4"></span>
    </span>
    <span>More</span>
    ${hasData ? '' : '<span class="activity-legend-note">No activity yet</span>'}
  `;
}

function renderActivityCalendar(dailyMap, isLoggedIn) {
  const calendar = document.getElementById('activityCalendar');
  if (!calendar) return;

  calendar.innerHTML = '';
  calendar.classList.remove('empty');

  if (!isLoggedIn) {
    calendar.classList.add('empty');
    calendar.innerHTML = '<div class="activity-empty">Login to view daily activity.</div>';
    renderActivityLegend(false);
    return;
  }

  const data = sanitizeDailyLessonsMap(dailyMap);
  const hasData = Object.keys(data).length > 0;
  renderActivityLegend(hasData);

  const today = startOfDay(new Date());
  const rangeDays = 365;
  const startInRange = addDays(today, -(rangeDays - 1));

  // Align the grid to start on Sunday for a GitHub/LeetCode-style layout.
  const start = new Date(startInRange);
  start.setDate(start.getDate() - start.getDay());
  start.setHours(0, 0, 0, 0);

  const totalDays = Math.round((today - start) / 86400000) + 1;

  for (let i = 0; i < totalDays; i++) {
    const date = addDays(start, i);
    const key = toDateKey(date);
    const count = data[key] || 0;
    const outside = date < startInRange;
    const level = getHeatLevel(count);

    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = `heat-cell level-${level}${outside ? ' outside' : ''}`;
    const labelCount = count === 1 ? '1 lesson' : `${count} lessons`;
    cell.title = `${key} • ${labelCount}`;
    cell.setAttribute('aria-label', `${key}: ${labelCount} completed`);
    calendar.appendChild(cell);
  }
}

function updateLineControlsActive(rangeDays) {
  const controls = document.getElementById('dailyLineControls');
  if (!controls) return;
  controls.querySelectorAll('.range-pill').forEach((btn) => {
    const n = parseInt(btn.dataset.range, 10);
    btn.classList.toggle('active', n === rangeDays);
  });
}

function formatShortDate(key) {
  if (!key || key.length < 10) return key || '';
  return key.slice(5);
}

function buildNiceYAxisTicks(maxVal) {
  const max = Math.max(0, Math.ceil(Number(maxVal) || 0));
  if (max <= 4) {
    return Array.from({ length: max + 1 }, (_, i) => i);
  }

  // Aim for ~5 ticks (0..max) while keeping integers and avoiding duplicates.
  const step = Math.max(1, Math.ceil(max / 4));
  const raw = [0, step, step * 2, step * 3, step * 4, max].filter((v) => v <= max);
  const uniq = [...new Set(raw)].sort((a, b) => a - b);
  if (uniq[uniq.length - 1] !== max) uniq.push(max);
  return uniq;
}

function renderDailyLineChart(dailyMap, rangeDays, isLoggedIn) {
  const host = document.getElementById('dailyLineChart');
  if (!host) return;
  host.innerHTML = '';

  if (!isLoggedIn) {
    host.innerHTML = '<div class="chart-empty">Login to view daily graph.</div>';
    return;
  }

  const dataMap = sanitizeDailyLessonsMap(dailyMap);
  const days = Math.max(7, Math.min(365, parseInt(rangeDays, 10) || 30));
  const today = startOfDay(new Date());
  const start = addDays(today, -(days - 1));

  const points = [];
  for (let i = 0; i < days; i++) {
    const date = addDays(start, i);
    const key = toDateKey(date);
    points.push({ key, value: dataMap[key] || 0 });
  }

  const maxVal = points.reduce((m, p) => Math.max(m, p.value), 0);
  if (maxVal <= 0) {
    host.innerHTML = '<div class="chart-empty">No lessons completed yet. Finish a lesson to start tracking.</div>';
    return;
  }

  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 640 220');
  svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', `Lessons completed per day (last ${days} days)`);

  const width = 640;
  const height = 220;
  const pad = { left: 44, right: 18, top: 18, bottom: 34 };
  const plotW = width - pad.left - pad.right;
  const plotH = height - pad.top - pad.bottom;

  const defs = document.createElementNS(NS, 'defs');
  const grad = document.createElementNS(NS, 'linearGradient');
  grad.setAttribute('id', 'cnDailyFill');
  grad.setAttribute('x1', '0');
  grad.setAttribute('x2', '0');
  grad.setAttribute('y1', '0');
  grad.setAttribute('y2', '1');
  const stop1 = document.createElementNS(NS, 'stop');
  stop1.setAttribute('offset', '0%');
  stop1.setAttribute('stop-color', '#10b981');
  stop1.setAttribute('stop-opacity', '0.35');
  const stop2 = document.createElementNS(NS, 'stop');
  stop2.setAttribute('offset', '100%');
  stop2.setAttribute('stop-color', '#10b981');
  stop2.setAttribute('stop-opacity', '0');
  grad.appendChild(stop1);
  grad.appendChild(stop2);
  defs.appendChild(grad);
  svg.appendChild(defs);

  const grid = document.createElementNS(NS, 'g');
  grid.setAttribute('stroke', 'rgba(148, 163, 184, 0.18)');
  grid.setAttribute('stroke-width', '1');

  const ticks = buildNiceYAxisTicks(maxVal);
  ticks.forEach((tickVal) => {
    const y = pad.top + plotH - (tickVal / maxVal) * plotH;
    const line = document.createElementNS(NS, 'line');
    line.setAttribute('x1', String(pad.left));
    line.setAttribute('x2', String(width - pad.right));
    line.setAttribute('y1', String(y));
    line.setAttribute('y2', String(y));
    grid.appendChild(line);

    const label = document.createElementNS(NS, 'text');
    label.setAttribute('x', String(pad.left - 10));
    label.setAttribute('y', String(y + 4));
    label.setAttribute('text-anchor', 'end');
    label.setAttribute('fill', 'rgba(156, 163, 175, 0.95)');
    label.setAttribute('font-size', '11');
    label.textContent = String(tickVal);
    svg.appendChild(label);
  });
  svg.appendChild(grid);

  const xStep = points.length > 1 ? plotW / (points.length - 1) : 0;
  const getX = (idx) => pad.left + idx * xStep;
  const getY = (val) => pad.top + plotH - (val / maxVal) * plotH;

  let d = '';
  points.forEach((p, idx) => {
    const x = getX(idx);
    const y = getY(p.value);
    d += idx === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
  });

  const area = document.createElementNS(NS, 'path');
  const lastX = getX(points.length - 1);
  const baseY = pad.top + plotH;
  area.setAttribute('d', `${d} L ${lastX} ${baseY} L ${pad.left} ${baseY} Z`);
  area.setAttribute('fill', 'url(#cnDailyFill)');
  area.setAttribute('stroke', 'none');
  svg.appendChild(area);

  const path = document.createElementNS(NS, 'path');
  path.setAttribute('d', d);
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', '#10b981');
  path.setAttribute('stroke-width', '2.5');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(path);

  const showDots = days <= 90;
  if (showDots) {
    points.forEach((p, idx) => {
      const dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', String(getX(idx)));
      dot.setAttribute('cy', String(getY(p.value)));
      dot.setAttribute('r', p.value > 0 ? '3' : '2');
      dot.setAttribute('fill', p.value > 0 ? '#22c55e' : 'rgba(156, 163, 175, 0.55)');
      dot.setAttribute('stroke', 'rgba(2, 6, 23, 0.65)');
      dot.setAttribute('stroke-width', '1');
      const title = document.createElementNS(NS, 'title');
      title.textContent = `${p.key}: ${p.value} lesson${p.value === 1 ? '' : 's'}`;
      dot.appendChild(title);
      svg.appendChild(dot);
    });
  }

  const xLabels = document.createElementNS(NS, 'g');
  const labelIdxs = [0, Math.floor((points.length - 1) / 2), points.length - 1].filter((v, i, a) => a.indexOf(v) === i);
  labelIdxs.forEach((idx) => {
    const t = document.createElementNS(NS, 'text');
    t.setAttribute('x', String(getX(idx)));
    t.setAttribute('y', String(height - 12));
    t.setAttribute('text-anchor', idx === 0 ? 'start' : idx === points.length - 1 ? 'end' : 'middle');
    t.setAttribute('fill', 'rgba(156, 163, 175, 0.95)');
    t.setAttribute('font-size', '11');
    t.textContent = formatShortDate(points[idx].key);
    xLabels.appendChild(t);
  });
  svg.appendChild(xLabels);

  host.appendChild(svg);
}

function bindDailyLineControls() {
  const controls = document.getElementById('dailyLineControls');
  if (!controls || controls.dataset.bound === '1') return;
  controls.dataset.bound = '1';

  controls.addEventListener('click', (event) => {
    const btn = event.target.closest('button[data-range]');
    if (!btn) return;
    const range = parseInt(btn.dataset.range, 10);
    if (!Number.isFinite(range)) return;
    dailyLineRangeDays = range;
    updateLineControlsActive(dailyLineRangeDays);
    renderDailyLineChart(lastDailyLessonsMap, dailyLineRangeDays, true);
  });
}

function bindDrawer() {
  const toggle = document.getElementById('drawerToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');

  if (!toggle || !drawer || !overlay || !closeBtn) return;

  const open = () => {
    drawer.classList.add('open');
    overlay.classList.add('show');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
  };
  const close = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('drawer-open');
  };

  toggle.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
}

function bindLogout() {
  const logoutBtn = document.getElementById('logoutBtn');
  const drawerLogout = document.getElementById('drawerLogout');
  const accountLink = document.getElementById('accountLink');

  const doLogout = async () => {
    try {
      if (window.CN && typeof window.CN.signOut === 'function') {
        await window.CN.signOut();
      }
    } catch (e) {
      console.error('Logout failed', e);
    }
    window.location.href = 'auth.html';
  };

  if (logoutBtn) logoutBtn.addEventListener('click', doLogout);
  if (drawerLogout) drawerLogout.addEventListener('click', doLogout);

  if (accountLink) {
    accountLink.textContent = 'Account';
    accountLink.href = 'account.html';
  }
}

function updateHeaderAuth({ user, profile, progress }) {
  const accountLink = document.getElementById('accountLink');
  const chip = document.getElementById('currentUserChip');
  const mobileAvatar = document.getElementById('mobileAvatar');
  const logoutBtn = document.getElementById('logoutBtn');
  const drawerChip = document.getElementById('drawerUserChip');
  const drawerName = document.getElementById('drawerUserName');
  const drawerEmail = document.getElementById('drawerUserEmail');
  const drawerAccountLink = document.getElementById('drawerAccountLink');
  const drawerXP = document.getElementById('drawerXP');
  const drawerStreak = document.getElementById('drawerStreak');
  const drawerLessons = document.getElementById('drawerLessons');

  const avatar = profile && profile.avatar ? profile.avatar : '';
  const displayName = (profile && profile.name) ? profile.name : (user.displayName || 'User');

  if (accountLink) {
    accountLink.textContent = 'Account';
    accountLink.href = 'account.html';
  }

  if (logoutBtn) logoutBtn.hidden = false;

  const applyChip = (el) => {
    if (!el) return;
    el.textContent = '';
    el.classList.remove('guest');
    el.hidden = false;
    if (avatar) {
      el.style.backgroundImage = `url(${avatar})`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
    } else {
      el.style.backgroundImage = '';
      el.textContent = '👤';
    }
  };

  applyChip(chip);
  applyChip(mobileAvatar);
  applyChip(drawerChip);
  if (drawerName) drawerName.textContent = displayName;
  if (drawerEmail) drawerEmail.textContent = user.email || '';
  if (drawerAccountLink) drawerAccountLink.textContent = 'Account';

  const xp = progress && Number.isFinite(Number(progress.xp)) ? Number(progress.xp) : 0;
  const streak = progress && Number.isFinite(Number(progress.streak)) ? Number(progress.streak) : 0;
  const maxStreak = progress && Number.isFinite(Number(progress.maxStreak)) ? Number(progress.maxStreak) : Math.max(0, streak);
  const completed = progress && Array.isArray(progress.completed) ? progress.completed.length : 0;

  if (drawerXP) drawerXP.textContent = xp;
  const drawerMaxStreak = document.getElementById('drawerMaxStreak');
  if (drawerMaxStreak) drawerMaxStreak.textContent = maxStreak;
  if (drawerStreak) drawerStreak.textContent = streak;
  if (drawerLessons) drawerLessons.textContent = completed;
}

function renderProgress({ user, docData }) {
  const progress = docData && docData.progress && typeof docData.progress === 'object' ? docData.progress : {};
  const profile = docData && docData.profile && typeof docData.profile === 'object' ? docData.profile : {};

  updateHeaderAuth({ user, profile, progress });

  const completed = Array.isArray(progress.completed) ? progress.completed : [];
  const xp = Number.isFinite(Number(progress.xp)) ? Number(progress.xp) : 0;
  const badgesRaw = Array.isArray(progress.badges) ? progress.badges : [];
  const seededMilestones = BADGE_MILESTONES.filter((m) => xp >= m.xp).map((m) => `xp-${m.xp}`);
  const kept = badgesRaw.filter((id) => MASTER_BADGE_IDS.has(id) || MASTERY_BADGE_IDS.has(id) || BADGE_ID_SET.has(id));
  const badges = uniqueList([...seededMilestones, ...kept]).filter(
    (id) => BADGE_ID_SET.has(id) || MASTER_BADGE_IDS.has(id) || MASTERY_BADGE_IDS.has(id),
  );
  const streak = Number.isFinite(Number(progress.streak)) ? Number(progress.streak) : 0;
  const maxStreak = Number.isFinite(Number(progress.maxStreak)) ? Number(progress.maxStreak) : Math.max(0, streak);
  const lastActive = typeof progress.lastStreak === 'string' ? (progress.lastStreak || '-') : '-';
  const enrolledCourseKeys = getEnrolledCourseKeys(progress);

  const courseProgress =
    progress.courseProgress && typeof progress.courseProgress === 'object' ? progress.courseProgress : null;
  const visibleCourseKeys = getVisibleCourseKeys(courseProgress, enrolledCourseKeys);
  const hasCourseProgress = visibleCourseKeys.length > 0;
  const totalLessons = hasCourseProgress
    ? visibleCourseKeys.reduce((sum, key) => sum + Number((courseProgress[key] && courseProgress[key].total) || 0), 0)
    : 0;
  const completedCount = hasCourseProgress
    ? visibleCourseKeys.reduce((sum, key) => sum + Number((courseProgress[key] && courseProgress[key].completed) || 0), 0)
    : 0;

  document.getElementById('totalXP').textContent = xp;
  document.getElementById('completedLessons').textContent = completedCount;
  document.getElementById('totalLessons').textContent = totalLessons || 0;
  const maxStreakEl = document.getElementById('maxStreak');
  if (maxStreakEl) maxStreakEl.textContent = maxStreak;
  document.getElementById('streak').textContent = streak;
  document.getElementById('lastActive').textContent = lastActive === '' ? '-' : lastActive;

  const totalXpSummary = document.getElementById('totalXpSummary');
  const completedSummary = document.getElementById('completedLessonsSummary');
  const totalLessonsSummary = document.getElementById('totalLessonsSummary');
  const streakSummary = document.getElementById('streakSummary');
  const maxStreakSummary = document.getElementById('maxStreakSummary');
  if (totalXpSummary) totalXpSummary.textContent = xp;
  if (completedSummary) completedSummary.textContent = completedCount;
  if (totalLessonsSummary) totalLessonsSummary.textContent = totalLessons || 0;
  if (maxStreakSummary) maxStreakSummary.textContent = maxStreak;
  if (streakSummary) streakSummary.textContent = streak;

  const overallPercent =
    totalLessons > 0 ? Math.max(0, Math.min(100, Math.round((completedCount / totalLessons) * 100))) : 0;
  const overallValue = document.getElementById('overallProgressValue');
  const overallFill = document.getElementById('overallProgressFill');
  const overallBar = document.getElementById('overallProgressBar');
  if (overallValue) overallValue.textContent = `${overallPercent}%`;
  if (overallFill) overallFill.style.width = `${overallPercent}%`;
  if (overallBar) overallBar.setAttribute('aria-valuenow', `${overallPercent}`);

  const dailyLessons =
    progress.dailyLessons && typeof progress.dailyLessons === 'object' && !Array.isArray(progress.dailyLessons)
      ? progress.dailyLessons
      : {};
  lastDailyLessonsMap = dailyLessons;
  renderActivityCalendar(dailyLessons, true);
  updateLineControlsActive(dailyLineRangeDays);
  renderDailyLineChart(dailyLessons, dailyLineRangeDays, true);

  const badgeList = document.getElementById('badgeList');
  const badgeDetail = ensureBadgeDetail();
  badgeList.innerHTML = '';

  if (badges.length === 0) {
    badgeList.textContent = 'No badges yet.';
    if (badgeDetail) badgeDetail.textContent = '';
  } else {
    const kindRank = (kind) => {
      if (kind === 'xp') return 0;
      if (kind === 'mastery') return 1;
      if (kind === 'exam') return 2;
      return 9;
    };

    const sortedBadges = [...badges].sort((a, b) => {
      const aMeta = getBadgeMeta(a);
      const bMeta = getBadgeMeta(b);
      const aRank = kindRank(aMeta.kind);
      const bRank = kindRank(bMeta.kind);
      if (aRank !== bRank) return aRank - bRank;
      if (aRank !== 0) return aMeta.name.localeCompare(bMeta.name);
      return getBadgeXPValue(a) - getBadgeXPValue(b);
    });

    let activeId = sortedBadges[sortedBadges.length - 1];
    if (badgeDetail) setBadgeDetail(badgeDetail, activeId, xp);

    const setActiveBadge = (badgeId, shouldFocus = false) => {
      activeId = badgeId;
      badgeList.querySelectorAll('.badge').forEach((btn) => {
        const isActive = btn.dataset.badgeId === badgeId;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        if (shouldFocus && isActive) btn.focus();
      });
      if (badgeDetail) setBadgeDetail(badgeDetail, badgeId, xp);
    };

    sortedBadges.forEach((badge) => {
      const meta = getBadgeMeta(badge);
      const candidates = getBadgeImageCandidates(badge);
      const el = document.createElement('button');
      el.type = 'button';
      el.className = `badge tier-${meta.tier}`;
      el.dataset.badgeId = badge;
      el.setAttribute('aria-pressed', badge === activeId ? 'true' : 'false');
      if (badge === activeId) el.classList.add('active');
      const pointsLabel =
        meta.kind === 'exam' ? 'EXAM' : meta.kind === 'mastery' ? 'MASTER' : `${meta.xp} XP`;
      el.innerHTML = `
        <span class="badge-media" aria-hidden="true">
          ${candidates.length ? '<img class="badge-img" alt="" loading="lazy">' : ''}
          <span class="badge-fallback">${meta.name}</span>
        </span>
        <span class="badge-caption">${meta.name}</span>
        <span class="badge-sub">${pointsLabel}</span>
      `;
      el.title = `${meta.name} badge`;
      if (!candidates.length) el.classList.add('img-missing');
      const img = el.querySelector('.badge-img');
      if (img) attachImgFallback(img, candidates, () => el.classList.add('img-missing'));

      el.addEventListener('click', () => {
        setActiveBadge(badge);
        openBadgeModal(badge);
      });
      el.addEventListener('mouseenter', () => {
        if (badgeDetail) setBadgeDetail(badgeDetail, badge, xp);
      });
      el.addEventListener('mouseleave', () => {
        if (badgeDetail) setBadgeDetail(badgeDetail, activeId, xp);
      });

      badgeList.appendChild(el);
    });

    badgeList.onkeydown = (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const currentIndex = sortedBadges.indexOf(activeId);
      if (currentIndex < 0) return;
      const nextIndex =
        event.key === 'ArrowRight'
          ? Math.min(sortedBadges.length - 1, currentIndex + 1)
          : Math.max(0, currentIndex - 1);
      setActiveBadge(sortedBadges[nextIndex], true);
    };
  }

  const lessonList = document.getElementById('lessonList');
  lessonList.innerHTML = '';
  if (completed.length === 0) {
    lessonList.textContent = 'No completed lessons yet.';
  } else {
    completed.forEach((id) => {
      const el = document.createElement('div');
      el.className = 'lesson-pill';
      el.textContent = id;
      lessonList.appendChild(el);
    });
  }

  const chart = document.getElementById('progressChart');
  chart.innerHTML = '';
  if (!hasCourseProgress) {
    chart.textContent = 'Enroll in a course to see progress here.';
    return;
  }

  visibleCourseKeys.forEach((lang) => {
    const data = courseProgress[lang];
    if (!data) return;
    const row = document.createElement('div');
    row.className = 'chart-row';

    const label = document.createElement('div');
    label.className = 'chart-label';
    label.textContent = getCourseDisplayName(lang);

    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    const fill = document.createElement('div');
    fill.className = 'chart-fill';
    fill.style.width = `${Math.round(data.percent || 0)}%`;
    bar.appendChild(fill);

    const value = document.createElement('div');
    value.className = 'chart-value';
    value.textContent = `${data.completed || 0}/${data.total || 0}`;

    row.appendChild(label);
    row.appendChild(bar);
    row.appendChild(value);
    chart.appendChild(row);
  });
}

async function init() {
  if (!window.CN || !window.CN.authReady) {
    console.error('Firebase helpers not loaded (firebase-init.js).');
    showLoginRequired();
    return;
  }

  await window.CN.authReady;
  const user = window.CN.getAuthUser && window.CN.getAuthUser();
  if (!user || !user.email) {
    showLoginRequired();
    return;
  }

  bindLogout();
  bindDrawer();
  bindBadgeModal();
  bindDailyLineControls();

  const clearBtn = document.getElementById('clearProgress');
  if (clearBtn) {
    clearBtn.addEventListener('click', async () => {
      const confirmed = window.confirm('Delete all progress for your account?');
      if (!confirmed) return;
      try {
        await window.CN.saveProgress({ ...window.CN.defaultProgress });
      } catch (e) {
        console.error('Failed to clear progress', e);
        if (typeof window.cnToast === 'function') {
          window.cnToast('Error', 'Could not reset progress. Please try again.');
        }
      }
    });
  }

  // Initial render + live updates.
  try {
    const docData = await window.CN.getUserDoc();
    renderProgress({ user, docData });
  } catch (e) {
    console.error('Failed to load progress', e);
    const code = e && typeof e.code === 'string' ? e.code : '';
    const suffix = code ? ` (${code})` : '';
    if (typeof window.cnToast === 'function') {
      window.cnToast('Sync Error', `Could not load progress from Firebase. Check Firestore rules.${suffix}`);
    }
  }

  try {
    await window.CN.subscribeUserDoc((docData) => {
      renderProgress({ user, docData });
    });
  } catch (e) {
    // ignore subscription failures
  }
}

init();
