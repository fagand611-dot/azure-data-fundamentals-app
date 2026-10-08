// Loads the question bank into Node for scripts: const bank = require('./load-bank')();
const fs = require('fs');
const path = require('path');
module.exports = function loadBank() {
  const window = {};
  const DP900 = (window.DP900 = { bank: [] });
  const dir = path.join(__dirname, '..', 'data');
  for (const f of ['bank.js', 'q-core.js', 'q-relational.js', 'q-nonrelational.js', 'q-analytics.js']) {
    new Function('window', 'DP900', fs.readFileSync(path.join(dir, f), 'utf8'))(window, DP900);
  }
  return window.DP900.bank;
};
