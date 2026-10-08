// Prints how many questions cover each objective in the DP-900 skills outline.
// Run: node scripts/coverage.js
const bank = require('./load-bank')();
const fs = require('fs');
const path = require('path');
const window = { DP900: {} };
new Function('window', fs.readFileSync(path.join(__dirname, '..', 'data', 'outline.js'), 'utf8'))(window);
const outline = window.DP900.outline;
const count = {};
for (const q of bank) count[q.sk] = (count[q.sk] || 0) + 1;
const weights = { 1: '25-30%', 2: '20-25%', 3: '15-20%', 4: '25-30%' };
console.log(`DP-900 skills measured as of ${outline.asOf}\n`);
for (const area of [1, 2, 3, 4]) {
  const objs = outline.objectives.filter((o) => o[0].startsWith(area + '.'));
  const total = objs.reduce((n, o) => n + (count[o[0]] || 0), 0);
  console.log(`Area ${area} (${weights[area]}): ${total} questions`);
  for (const [code, name] of objs) console.log(`  ${code}  ${String(count[code] || 0).padStart(3)}  ${name}`);
}
for (const [code, label] of Object.entries(outline.extra)) console.log(`\n${code}: ${count[code] || 0} questions (${label}; practice only)`);
