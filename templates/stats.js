// ═══════════════════════════════════════
//  🐱 陪伴数据统计模块
//  每个页面引入后调用 recordStat(key)
//  主页调用 getStats() 读取显示
// ═══════════════════════════════════════

const STATS_KEY = 'meowcafe_stats_v1';

function getStats() {
  try {
    let raw = localStorage.getItem(STATS_KEY);
    if (!raw) return initStats();
    let data = JSON.parse(raw);
    // 检查是否新的一周
    let now = new Date();
    let weekStart = new Date(data.weekStart || '2000-01-01');
    let diffDays = (now - weekStart) / (1000 * 60 * 60 * 24);
    if (diffDays > 7) return initStats();
    return data;
  } catch(e) { return initStats(); }
}

function initStats() {
  return {
    cream_pets: 0,
    orange_best: 0,
    orange_total: 0,
    black_dreams: 0,
    mimi_reports: 0,
    menu_orders: 0,
    lastVisit: new Date().toISOString().slice(0, 10),
    weekStart: getMonday().toISOString().slice(0, 10),
  };
}

function getMonday() {
  let d = new Date();
  d.setHours(0,0,0,0);
  d.setDate(d.getDate() - (d.getDay() + 6) % 7);
  return d;
}

function recordStat(key, value) {
  let stats = getStats();
  if (value !== undefined) {
    stats[key] = (stats[key] || 0) + value;
  } else {
    stats[key] = (stats[key] || 0) + 1;
  }
  stats.lastVisit = new Date().toISOString().slice(0, 10);
  try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch(e) {}
}

function saveStats(stats) {
  try { localStorage.setItem(STATS_KEY, JSON.stringify(stats)); } catch(e) {}
}
