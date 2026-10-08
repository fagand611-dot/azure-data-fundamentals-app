// Sanity-checks the question bank: run with `node scripts/validate.js`.
const fs = require('fs');
const path = require('path');
global.window = {};
const dir = path.join(__dirname, '..', 'data');
const files = ['bank.js', 'q-core.js', 'q-relational.js', 'q-nonrelational.js', 'q-analytics.js'];
const DP900 = (window.DP900 = { bank: [] });
global.DP900 = DP900;
for (const f of files) new Function('window', 'DP900', fs.readFileSync(path.join(dir, f), 'utf8'))(window, DP900);

const counts = {};
const texts = new Set();
let problems = 0;
const fail = (q, msg) => { problems++; console.error(`${q.id}: ${msg}`); };
for (const q of window.DP900.bank) {
  counts[q.d] = (counts[q.d] || 0) + 1;
  if (!q.q || !q.e) fail(q, 'missing question or explanation');
  if (!Array.isArray(q.o) || q.o.length < 2) fail(q, 'needs at least two options');
  if (!q.a.length || q.a.some((i) => i < 0 || i >= q.o.length)) fail(q, 'answer index out of range');
  if (new Set(q.o).size !== q.o.length) fail(q, 'duplicate options');
  if (texts.has(q.q)) fail(q, 'duplicate question text');
  texts.add(q.q);
  const m = q.q.match(/Choose (two|three)/i);
  const need = m ? { two: 2, three: 3 }[m[1].toLowerCase()] : 1;
  if (need !== q.a.length) fail(q, `says choose ${need} but has ${q.a.length} answers`);
}
console.log(`${window.DP900.bank.length} questions`, counts);
if (problems) { console.error(`${problems} problem(s) found`); process.exit(1); }
