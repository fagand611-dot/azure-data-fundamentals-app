// Loads the question bank into Node for scripts: const bank = require('./load-bank')();
const fs = require('fs');
const path = require('path');
module.exports = function loadBank() {
  const window = {};
  const DP900 = (window.DP900 = { bank: [] });
  const dir = path.join(__dirname, '..', 'data');
  for (const f of ['bank.js', 'q-core.js', 'q-relational.js', 'q-nonrelational.js', 'q-analytics.js', 'outline.js']) {
    new Function('window', 'DP900', fs.readFileSync(path.join(dir, f), 'utf8'))(window, DP900);
  }
  const map = {};
  for (const [code, ids] of Object.entries(window.DP900.outline.byObjective)) ids.forEach((id) => (map[id] = code));
  window.DP900.bank.forEach((q) => (q.sk = map[q.id]));
  return window.DP900.bank;
};
