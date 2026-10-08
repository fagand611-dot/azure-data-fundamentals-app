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
  // Exam formats: single answer = 2-4 options with 1 correct; multiple answer = 5 options with 2 correct.
  if (q.a.length === 1 && (q.o.length < 2 || q.o.length > 4)) fail(q, 'single-answer questions need 2-4 options');
  if (q.a.length > 1 && (q.a.length !== 2 || q.o.length !== 5)) fail(q, 'multiple-answer questions need 5 options and 2 answers');
  if (!q.a.length || q.a.some((i) => i < 0 || i >= q.o.length)) fail(q, 'answer index out of range');
  if (new Set(q.o).size !== q.o.length) fail(q, 'duplicate options');
  if (texts.has(q.q)) fail(q, 'duplicate question text');
  texts.add(q.q);
  const need = /\(Choose two\.\)$/.test(q.q) ? 2 : 1;
  if (need !== q.a.length) fail(q, `says choose ${need} but has ${q.a.length} answers`);
}
const shapes = {};
for (const q of window.DP900.bank) {
  const k = q.a.length > 1 ? 'multiple (5 options, 2 correct)' : `single, ${q.o.length} options`;
  shapes[k] = (shapes[k] || 0) + 1;
}
console.log(`${window.DP900.bank.length} questions`, counts, shapes);
if (problems) { console.error(`${problems} problem(s) found`); process.exit(1); }
