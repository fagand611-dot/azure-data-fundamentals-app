// Reports answer-length cues: how often the correct option is simply the longest one.
// Run: node scripts/check-cues.js   (lower is better; chance is roughly 1 / number of options)
const bank = require('./load-bank')();
const single = bank.filter((q) => !q.type && q.a.length === 1 && q.o.length > 2);
const multi = bank.filter((q) => !q.type && q.a.length === 2);
let longest = 0;
let chance = 0;
for (const q of single) {
  const len = q.o.map((o) => o.length);
  if (len[q.a[0]] > Math.max(...len.filter((_, i) => i !== q.a[0]))) longest++;
  chance += 1 / q.o.length;
}
let topTwo = 0;
for (const q of multi) {
  const order = q.o.map((o, i) => [o.length, i]).sort((a, b) => b[0] - a[0]);
  if (q.a.includes(order[0][1]) && q.a.includes(order[1][1])) topTwo++;
}
const pct = (n, d) => `${Math.round((100 * n) / d)}%`;
console.log(`Single answer: correct option is the longest in ${pct(longest, single.length)} (chance ${pct(chance, single.length)})`);
console.log(`Multiple answer: both correct options are the two longest in ${pct(topTwo, multi.length)} (chance 10%)`);
