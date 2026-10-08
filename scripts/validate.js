// Sanity-checks the question bank: run with `node scripts/validate.js`.
const fs = require('fs');
const path = require('path');
global.window = {};
const dir = path.join(__dirname, '..', 'data');
const files = ['bank.js', 'q-core.js', 'q-relational.js', 'q-nonrelational.js', 'q-analytics.js', 'outline.js'];
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
  if (q.t === 'yesno') {
    // Exam format: a set of three statements, each answered Yes or No.
    if (!Array.isArray(q.s) || q.s.length !== 3) fail(q, 'yesno needs exactly 3 statements');
    else if (q.s.some((x) => typeof x[0] !== 'string' || typeof x[1] !== 'boolean')) fail(q, 'yesno statements are [text, true|false]');
  } else if (q.t === 'match') {
    if (!Array.isArray(q.c) || q.c.length < 3 || q.c.length > 6) fail(q, 'match needs 3-6 answer choices');
    else if (new Set(q.c).size !== q.c.length) fail(q, 'duplicate match choices');
    if (!Array.isArray(q.s) || q.s.length < 3 || q.s.length > 5) fail(q, 'match needs 3-5 items');
    else if (q.s.some((x) => !Number.isInteger(x[1]) || x[1] < 0 || x[1] >= q.c.length)) fail(q, 'match answer index out of range');
  } else if (q.t === 'complete') {
    if (!Array.isArray(q.b) || q.b.length < 1 || q.b.length > 3) fail(q, 'complete needs 1-3 blanks');
    else q.b.forEach((b, i) => {
      if (!q.q.includes(`{${i}}`)) fail(q, `sentence is missing blank {${i}}`);
      if (!Array.isArray(b.o) || b.o.length < 2 || b.o.length > 4) fail(q, `blank ${i} needs 2-4 options`);
      else if (!Number.isInteger(b.a) || b.a < 0 || b.a >= b.o.length) fail(q, `blank ${i} answer out of range`);
    });
  } else if (q.t) {
    fail(q, `unknown type ${q.t}`);
  } else {
    // Exam formats: single answer = 2-4 options with 1 correct; multiple answer = 5 options with 2 correct.
    if (!q.a.length || q.a.some((i) => i < 0 || i >= q.o.length)) fail(q, 'answer index out of range');
    if (q.a.length === 1 && (q.o.length < 2 || q.o.length > 4)) fail(q, 'single-answer questions need 2-4 options');
    if (q.a.length > 1 && (q.a.length !== 2 || q.o.length !== 5)) fail(q, 'multiple-answer questions need 5 options and 2 answers');
    if (new Set(q.o).size !== q.o.length) fail(q, 'duplicate options');
    const need = /\(Choose two\.\)$/.test(q.q) ? 2 : 1;
    if (need !== q.a.length) fail(q, `says choose ${need} but has ${q.a.length} answers`);
  }
  if (texts.has(q.q)) fail(q, 'duplicate question text');
  texts.add(q.q);
}
// Every question must map to exactly one outline objective (or X / D).
const outline = window.DP900.outline;
const codes = new Set(outline.objectives.map((o) => o[0]).concat(Object.keys(outline.extra)));
const mapped = {};
for (const [code, ids] of Object.entries(outline.byObjective)) {
  if (!codes.has(code)) { problems++; console.error(`outline: unknown objective ${code}`); }
  for (const id of ids) {
    if (mapped[id]) { problems++; console.error(`outline: ${id} is listed under ${mapped[id]} and ${code}`); }
    mapped[id] = code;
  }
}
for (const q of window.DP900.bank) if (!mapped[q.id]) fail(q, 'not mapped to an outline objective in data/outline.js');
for (const id of Object.keys(mapped)) if (!window.DP900.bank.some((q) => q.id === id)) { problems++; console.error(`outline: ${id} does not exist`); }

const shapes = {};
for (const q of window.DP900.bank) {
  const k = q.t ? q.t : q.a.length > 1 ? 'multiple (5 options, 2 correct)' : `single, ${q.o.length} options`;
  shapes[k] = (shapes[k] || 0) + 1;
}
console.log(`${window.DP900.bank.length} questions`, counts, shapes);
if (problems) { console.error(`${problems} problem(s) found`); process.exit(1); }
