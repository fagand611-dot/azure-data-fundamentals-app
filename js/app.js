(function () {
  'use strict';

  var DOMAINS = {
    1: { name: 'Describe core data concepts', short: 'Core data concepts', weight: 27.5, range: '25–30%' },
    2: { name: 'Relational data on Azure', short: 'Relational data', weight: 22.5, range: '20–25%' },
    3: { name: 'Non-relational data on Azure', short: 'Non-relational data', weight: 17.5, range: '15–20%' },
    4: { name: 'Analytics workloads on Azure', short: 'Analytics workloads', weight: 27.5, range: '25–30%' }
  };
  var PASS = 700;
  var LETTERS = 'ABCDEFGH';
  var KEY = 'dp900.trainer.v1';

  var BANK = (window.DP900 && window.DP900.bank) || [];
  var BY_ID = {};
  BANK.forEach(function (q) { BY_ID[q.id] = q; });

  // ---------- storage ----------
  function loadStore() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  var store = Object.assign({
    stats: {},       // id -> { s: seen, c: correct, l: last result (1/0) }
    history: [],     // finished exams
    saved: [],       // bookmarked question ids
    session: null,   // in-progress quiz
    last: null,      // last finished quiz, for review
    prefs: { examCount: 50, examTime: 45, practiceCount: 20, practiceSource: 'all', domains: [1, 2, 3, 4] }
  }, loadStore());
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* storage unavailable */ }
  }
  // Drop anything that no longer exists in the bank.
  store.saved = store.saved.filter(function (id) { return BY_ID[id]; });
  if (store.session && !store.session.items.every(function (it) { return BY_ID[it.id]; })) store.session = null;
  if (store.last && !store.last.items.every(function (it) { return BY_ID[it.id]; })) store.last = null;

  // ---------- helpers ----------
  var app = document.getElementById('app');
  var modalRoot = document.getElementById('modal-root');
  var view = 'home';
  var reviewFilter = 'all';
  var timerHandle = null;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function fmt(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>'); }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sameSet(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    var x = a.slice().sort(), y = b.slice().sort();
    return x.every(function (v, i) { return v === y[i]; });
  }
  function clock(sec) {
    sec = Math.max(0, Math.round(sec));
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    var mm = (h ? String(m).padStart(2, '0') : m) + ':' + String(s).padStart(2, '0');
    return h ? h + ':' + mm : mm;
  }
  function pct(n, d) { return d ? Math.round((n / d) * 100) : 0; }
  function isSaved(id) { return store.saved.indexOf(id) !== -1; }
  function toggleSaved(id) {
    var i = store.saved.indexOf(id);
    if (i === -1) store.saved.push(id); else store.saved.splice(i, 1);
    save();
    toast(i === -1 ? 'Saved to your list' : 'Removed from saved');
  }
  function missedIds() {
    return Object.keys(store.stats).filter(function (id) { return BY_ID[id] && store.stats[id].l === 0; });
  }

  var ICON = {
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 21V4M5 4h11l-2 4 2 4H5"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/></svg>',
    starOn: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/></svg>',
    dash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 12h12"/></svg>'
  };

  function toast(msg) {
    var old = document.querySelector('.toast');
    if (old) old.remove();
    var t = document.createElement('div');
    t.className = 'toast';
    t.setAttribute('role', 'status');
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }

  function modal(opts) {
    // opts: { title, body, actions: [{label, cls, onClick}], sheet: html (for custom), center }
    closeModal();
    var scrim = document.createElement('div');
    scrim.className = 'scrim' + (opts.center ? ' middle' : '');
    scrim.innerHTML =
      '<div class="sheet' + (opts.center ? ' center' : '') + '" role="dialog" aria-modal="true" aria-label="' + esc(opts.title || 'Dialog') + '">' +
      (opts.html || ('<h2>' + esc(opts.title) + '</h2>' + (opts.body ? '<p>' + opts.body + '</p>' : ''))) +
      (opts.actions ? '<div class="btn-row">' + opts.actions.map(function (a, i) {
        return '<button class="btn ' + (a.cls || '') + '" data-act="' + i + '">' + esc(a.label) + '</button>';
      }).join('') + '</div>' : '') +
      '</div>';
    scrim.addEventListener('click', function (e) {
      if (e.target === scrim) { closeModal(); return; }
      var b = e.target.closest('[data-act]');
      if (b && opts.actions) {
        var a = opts.actions[+b.getAttribute('data-act')];
        closeModal();
        if (a.onClick) a.onClick();
      }
      if (opts.onClick) opts.onClick(e);
    });
    modalRoot.appendChild(scrim);
    var first = scrim.querySelector('button');
    if (first) first.focus({ preventScroll: true });
  }
  function closeModal() { modalRoot.innerHTML = ''; }

  // ---------- quiz creation ----------
  function makeItem(q) {
    var order = q.o.map(function (_, i) { return i; });
    if (!q.k) shuffle(order);
    return { id: q.id, order: order };
  }

  function startSession(mode, questions, opts) {
    store.session = {
      mode: mode,
      title: opts.title,
      items: questions.map(makeItem),
      idx: 0,
      ans: {},
      done: {},
      flags: {},
      limit: opts.limit || 0,   // seconds, 0 = untimed
      elapsed: 0,
      started: Date.now()
    };
    save();
    go('quiz');
  }

  function buildExam(count) {
    var total = 0, counts = {}, ds = [1, 2, 3, 4];
    ds.forEach(function (d) { total += DOMAINS[d].weight; });
    var assigned = 0;
    ds.forEach(function (d) {
      counts[d] = Math.round(count * DOMAINS[d].weight / total);
      assigned += counts[d];
    });
    counts[4] += count - assigned;
    var picked = [];
    ds.forEach(function (d) {
      var pool = BANK.filter(function (q) { return q.d === d; });
      // Prefer questions answered least often so repeated exams cover the bank.
      shuffle(pool);
      pool.sort(function (a, b) { return ((store.stats[a.id] || {}).s || 0) - ((store.stats[b.id] || {}).s || 0); });
      picked = picked.concat(pool.slice(0, counts[d]));
    });
    return shuffle(picked);
  }

  function startExam() {
    var n = store.prefs.examCount, t = store.prefs.examTime;
    startSession('exam', buildExam(n), { title: 'Exam simulation', limit: t * 60 });
  }

  function practicePool() {
    var p = store.prefs, ds = p.domains.length ? p.domains : [1, 2, 3, 4];
    var pool = BANK.filter(function (q) { return ds.indexOf(q.d) !== -1; });
    if (p.practiceSource === 'unseen') pool = pool.filter(function (q) { return !store.stats[q.id]; });
    if (p.practiceSource === 'missed') pool = pool.filter(function (q) { return store.stats[q.id] && store.stats[q.id].l === 0; });
    if (p.practiceSource === 'saved') pool = pool.filter(function (q) { return isSaved(q.id); });
    return pool;
  }

  function startPractice(pool, title) {
    pool = shuffle(pool.slice());
    var n = store.prefs.practiceCount;
    if (n > 0) pool = pool.slice(0, n);
    if (!pool.length) { toast('No questions match those filters'); return; }
    startSession('practice', pool, { title: title || 'Practice' });
  }

  // ---------- grading ----------
  function grade(sess) {
    var res = { correct: 0, total: sess.items.length, answered: 0, byDomain: {} };
    [1, 2, 3, 4].forEach(function (d) { res.byDomain[d] = { c: 0, t: 0 }; });
    sess.items.forEach(function (it) {
      var q = BY_ID[it.id], a = sess.ans[it.id];
      var ok = sameSet(a, q.a);
      if (a && a.length) res.answered++;
      if (ok) res.correct++;
      res.byDomain[q.d].t++;
      if (ok) res.byDomain[q.d].c++;
    });
    res.score = res.total ? Math.round((res.correct / res.total) * 1000) : 0;
    return res;
  }

  function recordStat(id, ok) {
    var s = store.stats[id] || { s: 0, c: 0, l: 0 };
    s.s++;
    if (ok) s.c++;
    s.l = ok ? 1 : 0;
    store.stats[id] = s;
  }

  function finishSession() {
    var sess = store.session;
    if (!sess) return;
    stopTimer();
    if (sess.mode === 'exam') {
      sess.items.forEach(function (it) { recordStat(it.id, sameSet(sess.ans[it.id], BY_ID[it.id].a)); });
    } else {
      // Practice: only answered-and-submitted questions count; drop the rest from the summary.
      sess.items = sess.items.filter(function (it) { return sess.done[it.id]; });
    }
    var res = grade(sess);
    sess.finished = Date.now();
    sess.result = res;
    if (sess.mode === 'exam') {
      store.history.unshift({ at: sess.finished, score: res.score, correct: res.correct, total: res.total, secs: Math.round(sess.elapsed) });
      store.history = store.history.slice(0, 30);
    }
    store.last = sess;
    store.session = null;
    save();
    if (sess.mode === 'practice' && !sess.items.length) { go('home'); return; }
    go('results');
  }

  // ---------- timer ----------
  function startTimer() {
    stopTimer();
    var sess = store.session;
    if (!sess) return;
    var lastTick = Date.now();
    timerHandle = setInterval(function () {
      var now = Date.now();
      sess.elapsed += (now - lastTick) / 1000;
      lastTick = now;
      var el = document.getElementById('timer');
      if (sess.limit) {
        var left = sess.limit - sess.elapsed;
        if (el) {
          el.textContent = clock(left);
          el.classList.toggle('low', left <= 300);
        }
        if (left <= 0) {
          save();
          finishSession();
          toast('Time is up. Your exam was submitted.');
          return;
        }
      } else if (el) {
        el.textContent = clock(sess.elapsed);
      }
      if (Math.floor(sess.elapsed) % 5 === 0) save();
    }, 1000);
  }
  function stopTimer() {
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = null;
  }
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { save(); stopTimer(); }
    else if (view === 'quiz' && store.session) startTimer();
  });

  // ---------- navigation ----------
  function go(v, opts) {
    view = v;
    closeModal();
    if (v !== 'quiz') stopTimer();
    if (!(opts && opts.fromPop)) {
      try { history.pushState({ v: v }, '', location.pathname + location.search); } catch (e) { /* ignore */ }
    }
    render();
    window.scrollTo(0, 0);
  }
  window.addEventListener('popstate', function () {
    if (view === 'quiz') { save(); go('home', { fromPop: true }); return; }
    if (view !== 'home') go('home', { fromPop: true });
  });

  function render() {
    if (view === 'quiz' && store.session) renderQuiz();
    else if (view === 'results' && store.last) renderResults();
    else if (view === 'review' && store.last) renderReview();
    else { view = 'home'; renderHome(); }
  }

  // ---------- home ----------
  function renderHome() {
    var p = store.prefs;
    var seen = 0, correctNow = 0;
    var per = {};
    [1, 2, 3, 4].forEach(function (d) { per[d] = { total: 0, seen: 0, right: 0 }; });
    BANK.forEach(function (q) {
      per[q.d].total++;
      var s = store.stats[q.id];
      if (s) { per[q.d].seen++; seen++; if (s.l) { per[q.d].right++; correctNow++; } }
    });
    var missed = missedIds().length;
    var sess = store.session;
    var pool = practicePool();
    var poolCount = p.practiceCount > 0 ? Math.min(pool.length, p.practiceCount) : pool.length;

    var h = '';
    h += '<section class="hero">' +
      '<span class="eyebrow">Microsoft Azure Data Fundamentals</span>' +
      '<h1>DP-900 Exam Trainer</h1>' +
      '<p>' + BANK.length + ' exam-style questions across all four skill areas. Every answer comes with an explanation.</p>' +
      '</section>';

    h += '<div class="stack">';

    if (sess) {
      var answered = Object.keys(sess.ans).filter(function (k) { return sess.ans[k].length; }).length;
      h += '<section class="card resume">' +
        '<h2>Continue your ' + (sess.mode === 'exam' ? 'exam' : 'practice session') + '</h2>' +
        '<p class="sub">' + answered + ' of ' + sess.items.length + ' answered' +
        (sess.limit ? ' · ' + clock(sess.limit - sess.elapsed) + ' left' : '') + '</p>' +
        '<div class="btn-row"><button class="btn primary" data-a="resume">Resume</button>' +
        '<button class="btn ghost" data-a="discard">Discard</button></div>' +
        '</section>';
    }

    h += '<section class="card">' +
      '<div><span class="eyebrow">Exam mode</span></div>' +
      '<h2>Full exam simulation</h2>' +
      '<p class="sub">Timed, with questions weighted like the real exam. Mark questions for review, jump around, then see your score and every explanation at the end.</p>' +
      '<div class="field-row">' +
      '<div class="field"><label for="exam-count">Questions</label><select id="exam-count" data-pref="examCount">' +
      [40, 50, 60].map(function (n) { return '<option value="' + n + '"' + (p.examCount === n ? ' selected' : '') + '>' + n + '</option>'; }).join('') +
      '</select></div>' +
      '<div class="field"><label for="exam-time">Time limit</label><select id="exam-time" data-pref="examTime">' +
      [[45, '45 minutes'], [60, '60 minutes'], [90, '90 minutes'], [0, 'Untimed']].map(function (o) { return '<option value="' + o[0] + '"' + (p.examTime === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
      '</select></div>' +
      '</div>' +
      '<ul class="specs"><li>Pass mark 700 / 1000</li><li>Single &amp; multiple choice</li><li>No feedback until you submit</li></ul>' +
      '<button class="btn primary block" data-a="exam">Start exam</button>' +
      '</section>';

    h += '<section class="card">' +
      '<div><span class="eyebrow">Practice mode</span></div>' +
      '<h2>Study by topic</h2>' +
      '<p class="sub">Submit each answer to see right away whether you got it and why.</p>' +
      '<div class="field"><span class="label">Skill areas</span><div class="chips">' +
      [1, 2, 3, 4].map(function (d) {
        return '<button class="chip" data-domain="' + d + '" aria-pressed="' + (p.domains.indexOf(d) !== -1) + '">' + esc(DOMAINS[d].short) + ' <span class="num">' + per[d].total + '</span></button>';
      }).join('') +
      '</div></div>' +
      '<div class="field-row">' +
      '<div class="field"><label for="pr-source">Questions from</label><select id="pr-source" data-pref="practiceSource">' +
      [['all', 'All questions'], ['unseen', 'Not seen yet'], ['missed', 'Last answered wrong'], ['saved', 'Saved']].map(function (o) { return '<option value="' + o[0] + '"' + (p.practiceSource === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
      '</select></div>' +
      '<div class="field"><label for="pr-count">How many</label><select id="pr-count" data-pref="practiceCount">' +
      [[10, '10'], [20, '20'], [30, '30'], [50, '50'], [0, 'All matching']].map(function (o) { return '<option value="' + o[0] + '"' + (p.practiceCount === o[0] ? ' selected' : '') + '>' + o[1] + '</option>'; }).join('') +
      '</select></div>' +
      '</div>' +
      '<button class="btn primary block" data-a="practice"' + (poolCount ? '' : ' disabled') + '>' +
      (poolCount ? 'Practice ' + poolCount + ' question' + (poolCount === 1 ? '' : 's') : 'No questions match') + '</button>' +
      '</section>';

    h += '<div class="quick">' +
      '<button class="btn" data-a="missed"' + (missed ? '' : ' disabled') + '><strong>' + missed + '</strong>Retry missed</button>' +
      '<button class="btn" data-a="saved"' + (store.saved.length ? '' : ' disabled') + '><strong>' + store.saved.length + '</strong>Saved questions</button>' +
      '</div>';

    h += '<section class="card"><h2>Your progress</h2>' +
      '<p class="sub">' + seen + ' of ' + BANK.length + ' questions attempted · ' + pct(correctNow, seen) + '% right on latest attempt</p>' +
      '<div class="domain-list">' +
      [1, 2, 3, 4].map(function (d) {
        var x = per[d];
        return '<div class="domain-row"><div class="top"><span>' + esc(DOMAINS[d].name) + '</span>' +
          '<span class="nums">' + x.seen + '/' + x.total + ' · ' + (x.seen ? pct(x.right, x.seen) + '%' : '–') + '</span></div>' +
          '<div class="bar" title="Correct and incorrect on latest attempt"><i class="good" style="width:' + pct(x.right, x.total) + '%"></i><i class="bad" style="width:' + pct(x.seen - x.right, x.total) + '%"></i></div>' +
          '<div class="nums">Exam weight ' + DOMAINS[d].range + '</div></div>';
      }).join('') +
      '</div></section>';

    if (store.history.length) {
      h += '<section class="card"><h2>Exam history</h2><ul class="history">' +
        store.history.slice(0, 8).map(function (r) {
          var dt = new Date(r.at);
          return '<li><span class="when">' + dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) + ' · ' + r.correct + '/' + r.total + '</span>' +
            '<span class="score">' + r.score + '</span>' +
            '<span class="pill ' + (r.score >= PASS ? 'pass">Pass' : 'fail">Fail') + '</span></li>';
        }).join('') +
        '</ul></section>';
    }

    if (store.last) {
      h += '<button class="btn block" data-a="last">Review last ' + (store.last.mode === 'exam' ? 'exam' : 'practice session') + ' answers</button>';
    }

    h += '</div>';
    h += '<footer class="foot"><span>Not affiliated with Microsoft. Scores are a study guide, not a prediction.</span>' +
      '<button class="linkish" data-a="reset">Reset progress</button></footer>';

    app.innerHTML = h;
  }

  app.addEventListener('change', function (e) {
    var sel = e.target.closest('[data-pref]');
    if (!sel) return;
    var k = sel.getAttribute('data-pref');
    var v = sel.value;
    store.prefs[k] = /^-?\d+$/.test(v) ? +v : v;
    save();
    if (view === 'home') renderHome();
  });

  app.addEventListener('click', function (e) {
    var t = e.target.closest('[data-a],[data-domain],[data-opt],[data-filter],[data-jump]');
    if (!t) return;
    if (t.hasAttribute('data-domain')) {
      var d = +t.getAttribute('data-domain');
      var ds = store.prefs.domains, i = ds.indexOf(d);
      if (i === -1) ds.push(d); else if (ds.length > 1) ds.splice(i, 1);
      ds.sort();
      save();
      renderHome();
      return;
    }
    if (t.hasAttribute('data-opt')) { pickOption(+t.getAttribute('data-opt')); return; }
    if (t.hasAttribute('data-filter')) { reviewFilter = t.getAttribute('data-filter'); renderReview(); return; }
    if (t.hasAttribute('data-jump')) { jumpTo(+t.getAttribute('data-jump')); return; }
    var a = t.getAttribute('data-a');
    actions[a] && actions[a](t);
  });

  var actions = {
    resume: function () { go('quiz'); },
    discard: function () {
      modal({
        title: 'Discard this session?', center: true,
        body: 'Your answers in this session will be lost. Progress from earlier sessions is kept.',
        actions: [{ label: 'Keep it' }, { label: 'Discard', cls: 'danger', onClick: function () { store.session = null; save(); renderHome(); } }]
      });
    },
    exam: function () {
      if (store.session) {
        modal({
          title: 'Replace your current session?', center: true,
          body: 'You have a session in progress. Starting a new exam discards it.',
          actions: [{ label: 'Cancel' }, { label: 'Start new exam', cls: 'primary', onClick: startExam }]
        });
      } else startExam();
    },
    practice: function () {
      var run = function () { startPractice(practicePool(), 'Practice'); };
      if (store.session) {
        modal({
          title: 'Replace your current session?', center: true,
          body: 'Starting a new practice session discards the one in progress.',
          actions: [{ label: 'Cancel' }, { label: 'Start practice', cls: 'primary', onClick: run }]
        });
      } else run();
    },
    missed: function () {
      var pool = missedIds().map(function (id) { return BY_ID[id]; });
      var run = function () {
        var keep = store.prefs.practiceCount; store.prefs.practiceCount = 0;
        startPractice(pool, 'Retry missed');
        store.prefs.practiceCount = keep; save();
      };
      store.session ? modal({ title: 'Replace your current session?', center: true, body: 'Starting this discards the session in progress.', actions: [{ label: 'Cancel' }, { label: 'Continue', cls: 'primary', onClick: run }] }) : run();
    },
    saved: function () {
      var pool = store.saved.map(function (id) { return BY_ID[id]; });
      var run = function () {
        var keep = store.prefs.practiceCount; store.prefs.practiceCount = 0;
        startPractice(pool, 'Saved questions');
        store.prefs.practiceCount = keep; save();
      };
      store.session ? modal({ title: 'Replace your current session?', center: true, body: 'Starting this discards the session in progress.', actions: [{ label: 'Cancel' }, { label: 'Continue', cls: 'primary', onClick: run }] }) : run();
    },
    last: function () { reviewFilter = 'all'; go('review'); },
    reset: function () {
      modal({
        title: 'Reset all progress?', center: true,
        body: 'This clears your answer history, exam scores and saved questions on this device.',
        actions: [{ label: 'Cancel' }, {
          label: 'Reset', cls: 'danger', onClick: function () {
            store.stats = {}; store.history = []; store.saved = []; store.session = null; store.last = null;
            save(); renderHome(); toast('Progress cleared');
          }
        }]
      });
    },
    home: function () { go('home'); },
    exit: function () {
      var sess = store.session;
      save();
      if (sess && sess.mode === 'practice' && Object.keys(sess.done).length) {
        modal({
          title: 'Leave practice?', center: true,
          body: 'Finish now to see a summary, or leave and resume later from the home screen.',
          actions: [{ label: 'Resume later', onClick: function () { go('home'); } }, { label: 'Finish & see summary', cls: 'primary', onClick: finishSession }]
        });
      } else go('home');
    },
    prev: function () { jumpTo(store.session.idx - 1); },
    next: function () {
      var sess = store.session;
      if (sess.idx < sess.items.length - 1) jumpTo(sess.idx + 1);
      else if (sess.mode === 'exam') openNavigator(true);
      else confirmFinish();
    },
    submit: function () { submitPractice(); },
    flag: function () {
      var sess = store.session, id = sess.items[sess.idx].id;
      if (sess.flags[id]) delete sess.flags[id]; else sess.flags[id] = 1;
      save(); renderQuiz();
    },
    star: function (t) { toggleSaved(t.getAttribute('data-id') || store.session.items[store.session.idx].id); if (view === 'quiz') renderQuiz(); else renderReview(); },
    nav: function () { openNavigator(false); },
    finish: function () { confirmFinish(); },
    review: function () { reviewFilter = store.last && store.last.result.correct < store.last.result.total ? 'wrong' : 'all'; go('review'); },
    results: function () { go('results'); },
    again: function () {
      var last = store.last;
      if (last.mode === 'exam') startExam();
      else startPractice(practicePool(), 'Practice');
    },
    retrywrong: function () {
      var last = store.last;
      var pool = last.items.filter(function (it) { return !sameSet(last.ans[it.id], BY_ID[it.id].a); }).map(function (it) { return BY_ID[it.id]; });
      var keep = store.prefs.practiceCount; store.prefs.practiceCount = 0;
      startPractice(pool, 'Retry wrong answers');
      store.prefs.practiceCount = keep; save();
    }
  };

  function confirmFinish() {
    var sess = store.session;
    if (sess.mode === 'practice') { finishSession(); return; }
    var unanswered = sess.items.filter(function (it) { return !(sess.ans[it.id] && sess.ans[it.id].length); }).length;
    var flagged = Object.keys(sess.flags).length;
    var bits = [];
    if (unanswered) bits.push(unanswered + ' unanswered (scored as wrong)');
    if (flagged) bits.push(flagged + ' marked for review');
    modal({
      title: 'End the exam?', center: true,
      body: bits.length ? 'You have ' + esc(bits.join(' and ')) + '.' : 'All questions are answered. You can’t change answers after you finish.',
      actions: [{ label: 'Keep going' }, { label: 'End exam', cls: 'primary', onClick: finishSession }]
    });
  }

  // ---------- quiz screen ----------
  function jumpTo(i) {
    var sess = store.session;
    if (i < 0 || i >= sess.items.length) return;
    sess.idx = i;
    save();
    closeModal();
    renderQuiz();
    window.scrollTo(0, 0);
  }

  function pickOption(orig) {
    var sess = store.session;
    if (!sess) return;
    var it = sess.items[sess.idx], q = BY_ID[it.id];
    if (sess.done[it.id]) return;
    var need = q.a.length;
    var cur = (sess.ans[it.id] || []).slice();
    if (need === 1) cur = [orig];
    else {
      var at = cur.indexOf(orig);
      if (at !== -1) cur.splice(at, 1);
      else {
        cur.push(orig);
        if (cur.length > need) cur.shift();
      }
    }
    sess.ans[it.id] = cur;
    save();
    renderQuiz();
  }

  function submitPractice() {
    var sess = store.session, it = sess.items[sess.idx], q = BY_ID[it.id];
    var cur = sess.ans[it.id] || [];
    if (cur.length !== q.a.length) return;
    sess.done[it.id] = 1;
    recordStat(it.id, sameSet(cur, q.a));
    save();
    renderQuiz();
    var ex = document.querySelector('.explain');
    if (ex) ex.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
  }

  function optionsHtml(q, order, chosen, reveal) {
    var multi = q.a.length > 1;
    return '<div class="opts" role="' + (multi ? 'group' : 'radiogroup') + '">' + order.map(function (orig, pos) {
      var sel = chosen.indexOf(orig) !== -1, right = q.a.indexOf(orig) !== -1;
      var cls = 'opt' + (multi ? ' multi' : ''), mark = '';
      if (reveal) {
        if (right && sel) { cls += ' is-correct'; mark = '<span class="mark good" aria-label="Correct, your choice">' + ICON.check + '</span>'; }
        else if (right) { cls += ' is-missed'; mark = '<span class="mark good" aria-label="Correct answer">' + ICON.check + '</span>'; }
        else if (sel) { cls += ' is-wrong'; mark = '<span class="mark bad" aria-label="Your choice, incorrect">' + ICON.x + '</span>'; }
      }
      return '<button class="' + cls + '" role="' + (multi ? 'checkbox' : 'radio') + '" aria-checked="' + (sel && !reveal) + '"' +
        (reveal ? ' disabled' : ' data-opt="' + orig + '"') + '>' +
        '<span class="key">' + LETTERS[pos] + '</span><span class="txt">' + fmt(q.o[orig]) + '</span>' + mark + '</button>';
    }).join('') + '</div>';
  }

  function letterList(q, order, list) {
    return list.map(function (orig) { return LETTERS[order.indexOf(orig)]; }).sort().join(', ');
  }

  function explainHtml(q, order, chosen) {
    var ok = sameSet(chosen, q.a);
    var none = !chosen.length;
    var cls = none ? 'neutral' : ok ? 'good' : 'bad';
    var head = none ? ICON.dash + 'Not answered' : ok ? ICON.check + 'Correct' : ICON.x + 'Incorrect';
    return '<section class="explain ' + cls + '"><header>' + head + '</header><div class="body">' +
      '<p class="answer-line">Correct answer: <b>' + letterList(q, order, q.a) + '</b>' +
      (!none && !ok ? ' · You chose: <b>' + letterList(q, order, chosen) + '</b>' : '') + '</p>' +
      '<p class="e">' + fmt(q.e) + '</p></div></section>';
  }

  function renderQuiz() {
    var sess = store.session;
    var it = sess.items[sess.idx], q = BY_ID[it.id];
    var chosen = sess.ans[it.id] || [];
    var practice = sess.mode === 'practice';
    var revealed = practice && sess.done[it.id];
    var multi = q.a.length > 1;
    var n = sess.items.length;
    var answeredCount = sess.items.filter(function (x) { return (sess.ans[x.id] || []).length; }).length;

    var timerText = sess.limit ? clock(sess.limit - sess.elapsed) : clock(sess.elapsed);
    var h = '<header class="topbar">' +
      '<button class="icon-btn" data-a="exit" aria-label="Leave and resume later">' + ICON.close + '</button>' +
      '<span class="title">' + esc(sess.title) + '</span>' +
      '<span class="timer' + (sess.limit && sess.limit - sess.elapsed <= 300 ? ' low' : '') + '" id="timer" aria-label="' + (sess.limit ? 'Time remaining' : 'Time elapsed') + '">' + timerText + '</span>' +
      '<button class="icon-btn" data-a="nav" aria-label="All questions">' + ICON.grid + '</button>' +
      '</header>' +
      '<div class="progress-line"><i style="width:' + pct(practice ? Object.keys(sess.done).length : answeredCount, n) + '%"></i></div>';

    h += '<div class="qmeta"><span class="qnum">Question ' + (sess.idx + 1) + ' of ' + n + '</span>' +
      '<span class="dtag">' + esc(DOMAINS[q.d].short) + '</span><span class="spacer"></span>' +
      (practice ? '' : '<button class="icon-btn' + (sess.flags[it.id] ? ' on' : '') + '" data-a="flag" aria-pressed="' + !!sess.flags[it.id] + '">' + ICON.flag + (sess.flags[it.id] ? 'Marked' : 'Mark for review') + '</button>') +
      '<button class="icon-btn' + (isSaved(it.id) ? ' on' : '') + '" data-a="star" aria-pressed="' + isSaved(it.id) + '" aria-label="' + (isSaved(it.id) ? 'Remove from saved' : 'Save question') + '">' + (isSaved(it.id) ? ICON.starOn : ICON.star) + '</button>' +
      '</div>';

    h += '<h2 class="qtext">' + fmt(q.q) + '</h2>';
    h += '<p class="hint">' + (multi ? 'Select ' + q.a.length + ' answers. Each correct selection is part of the answer.' : 'Select one answer.') + '</p>';
    h += optionsHtml(q, it.order, chosen, revealed);
    if (revealed) h += explainHtml(q, it.order, chosen);

    // action bar
    var bar = '<div class="actionbar"><div class="inner">';
    bar += '<button class="btn narrow" data-a="prev" aria-label="Previous question"' + (sess.idx === 0 ? ' disabled' : '') + '>' + '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>' + '</button>';
    if (practice) {
      if (revealed) {
        bar += sess.idx < n - 1
          ? '<button class="btn primary" data-a="next">Next question</button>'
          : '<button class="btn primary" data-a="finish">See summary</button>';
      } else {
        bar += '<button class="btn primary" data-a="submit"' + (chosen.length === q.a.length ? '' : ' disabled') + '>Submit answer</button>';
      }
    } else {
      bar += sess.idx < n - 1
        ? '<button class="btn primary" data-a="next">Next</button>'
        : '<button class="btn primary" data-a="next">Review &amp; finish</button>';
    }
    bar += '</div></div>';
    h += bar;

    app.innerHTML = h;
    if (!timerHandle) startTimer();
  }

  function openNavigator(atEnd) {
    var sess = store.session;
    var practice = sess.mode === 'practice';
    var unanswered = sess.items.filter(function (it) { return !(sess.ans[it.id] || []).length; }).length;
    var html = '<h2>' + (atEnd ? 'Review your answers' : 'All questions') + '</h2>' +
      '<p>' + (practice
        ? Object.keys(sess.done).length + ' of ' + sess.items.length + ' submitted.'
        : (sess.items.length - unanswered) + ' of ' + sess.items.length + ' answered · ' + Object.keys(sess.flags).length + ' marked for review. Tap a number to go to it.') + '</p>' +
      (practice
        ? '<div class="legend"><span><i class="a" style="background:var(--good);border-color:var(--good)"></i>Correct</span><span><i style="background:var(--bad);border-color:var(--bad)"></i>Incorrect</span><span><i></i>Not submitted</span></div>'
        : '<div class="legend"><span><i class="a"></i>Answered</span><span><i></i>Unanswered</span><span><i class="f"></i>Marked</span></div>') +
      '<div class="grid-nav">' + sess.items.map(function (it, i) {
        var cls = [];
        if (practice) {
          if (sess.done[it.id]) cls.push(sameSet(sess.ans[it.id], BY_ID[it.id].a) ? 'right' : 'wrong');
        } else {
          if ((sess.ans[it.id] || []).length) cls.push('answered');
          if (sess.flags[it.id]) cls.push('flagged');
        }
        if (i === sess.idx) cls.push('current');
        return '<button class="' + cls.join(' ') + '" data-jump="' + i + '" aria-label="Question ' + (i + 1) + '">' + (i + 1) + '</button>';
      }).join('') + '</div>';
    modal({
      title: 'Questions',
      html: html,
      actions: [{ label: 'Close' }, { label: practice ? 'Finish practice' : 'End exam', cls: 'primary', onClick: confirmFinish }],
      onClick: function (e) {
        var b = e.target.closest('[data-jump]');
        if (b) jumpTo(+b.getAttribute('data-jump'));
      }
    });
  }

  // ---------- results ----------
  function renderResults() {
    var s = store.last, r = s.result;
    var exam = s.mode === 'exam';
    var pass = r.score >= PASS;
    var C = 2 * Math.PI * 52;
    var frac = r.total ? r.correct / r.total : 0;
    var color = exam ? (pass ? 'var(--good)' : 'var(--bad)') : 'var(--accent)';

    var h = '<header class="topbar"><button class="icon-btn" data-a="home" aria-label="Home">' + ICON.back + '</button>' +
      '<span class="title">' + (exam ? 'Exam result' : 'Practice summary') + '</span></header>';

    h += '<section class="result-hero">' +
      '<div class="gauge"><svg viewBox="0 0 120 120" aria-hidden="true">' +
      '<circle cx="60" cy="60" r="52" fill="none" stroke-width="10" style="stroke:var(--line)"/>' +
      (frac > 0 ? '<circle cx="60" cy="60" r="52" fill="none" stroke-width="10" stroke-linecap="round" stroke-dasharray="' + (C * frac) + ' ' + C + '" style="stroke:' + color + '"/>' : '') +
      '</svg><div class="val">' +
      (exam ? '<strong>' + r.score + '</strong><span>of 1000 · pass 700</span>' : '<strong>' + pct(r.correct, r.total) + '%</strong><span>correct</span>') +
      '</div></div>' +
      (exam ? '<span class="pill ' + (pass ? 'pass">Pass' : 'fail">Below passing') + '</span>' : '') +
      '<h1>' + (exam ? (pass ? 'You passed this practice exam' : 'Not quite there yet') : 'Session complete') + '</h1>' +
      '<p>' + (exam
        ? (pass ? 'Strong result. Review the explanations for anything you missed or guessed.' : 'You need ' + Math.max(1, Math.ceil(PASS / 1000 * r.total) - r.correct) + ' more correct answer' + (Math.ceil(PASS / 1000 * r.total) - r.correct === 1 ? '' : 's') + ' to reach 700. Focus on your weakest skill area below.')
        : 'Every answer counts toward your progress on the home screen.') + '</p>' +
      '</section>';

    h += '<div class="stack"><div class="stats3">' +
      '<div class="stat"><strong>' + r.correct + '/' + r.total + '</strong><span>Correct</span></div>' +
      '<div class="stat"><strong>' + (r.total - r.correct) + '</strong><span>Incorrect' + (exam && r.total - r.answered ? ' (' + (r.total - r.answered) + ' blank)' : '') + '</span></div>' +
      '<div class="stat"><strong>' + clock(s.elapsed) + '</strong><span>Time used</span></div>' +
      '</div>';

    h += '<section class="card"><h2>By skill area</h2><div class="domain-list">' +
      [1, 2, 3, 4].filter(function (d) { return r.byDomain[d].t; }).map(function (d) {
        var x = r.byDomain[d], p = pct(x.c, x.t);
        return '<div class="domain-row"><div class="top"><span>' + esc(DOMAINS[d].name) + '</span><span class="nums">' + x.c + '/' + x.t + ' · ' + p + '%</span></div>' +
          '<div class="bar"><i class="' + (p >= 70 ? 'good' : 'bad') + '" style="width:' + p + '%"></i></div></div>';
      }).join('') + '</div></section>';

    h += '<div class="btn-row">' +
      '<button class="btn primary" data-a="review">Review answers &amp; explanations</button>' +
      '</div><div class="btn-row">' +
      (r.correct < r.total ? '<button class="btn" data-a="retrywrong">Practice the ' + (r.total - r.correct) + ' I missed</button>' : '') +
      '<button class="btn" data-a="again">' + (exam ? 'New exam' : 'New practice set') + '</button>' +
      '</div><button class="btn ghost block" data-a="home">Back to home</button></div>';

    app.innerHTML = h;
  }

  // ---------- review ----------
  function renderReview() {
    var s = store.last;
    var items = s.items.map(function (it, i) {
      var q = BY_ID[it.id], a = s.ans[it.id] || [];
      return { it: it, q: q, a: a, i: i, ok: sameSet(a, q.a), blank: !a.length, flag: s.flags && s.flags[it.id] };
    });
    var counts = {
      all: items.length,
      wrong: items.filter(function (x) { return !x.ok; }).length,
      right: items.filter(function (x) { return x.ok; }).length,
      flagged: items.filter(function (x) { return x.flag; }).length
    };
    var shown = items.filter(function (x) {
      return reviewFilter === 'all' || (reviewFilter === 'wrong' && !x.ok) || (reviewFilter === 'right' && x.ok) || (reviewFilter === 'flagged' && x.flag);
    });

    var h = '<header class="topbar"><button class="icon-btn" data-a="results" aria-label="Back to results">' + ICON.back + '</button>' +
      '<span class="title">Answer review</span></header>';
    h += '<div class="tabs" role="tablist">' +
      [['all', 'All'], ['wrong', 'Incorrect'], ['right', 'Correct']].concat(s.mode === 'exam' ? [['flagged', 'Marked']] : []).map(function (f) {
        return '<button class="chip" role="tab" data-filter="' + f[0] + '" aria-pressed="' + (reviewFilter === f[0]) + '" aria-selected="' + (reviewFilter === f[0]) + '">' + f[1] + ' <span class="num">' + counts[f[0]] + '</span></button>';
      }).join('') + '</div>';

    if (!shown.length) h += '<p class="empty">Nothing to show for this filter.</p>';
    shown.forEach(function (x) {
      h += '<article class="review-item">' +
        '<div class="qmeta"><span class="qnum">Q' + (x.i + 1) + '</span><span class="dtag">' + esc(DOMAINS[x.q.d].short) + '</span>' +
        '<span class="status-dot ' + (x.blank ? 'skip">Blank' : x.ok ? 'good">Correct' : 'bad">Incorrect') + '</span><span class="spacer"></span>' +
        '<button class="icon-btn' + (isSaved(x.q.id) ? ' on' : '') + '" data-a="star" data-id="' + x.q.id + '" aria-pressed="' + isSaved(x.q.id) + '" aria-label="' + (isSaved(x.q.id) ? 'Remove from saved' : 'Save question') + '">' + (isSaved(x.q.id) ? ICON.starOn : ICON.star) + '</button></div>' +
        '<h2 class="qtext">' + fmt(x.q.q) + '</h2>' +
        optionsHtml(x.q, x.it.order, x.a, true) +
        explainHtml(x.q, x.it.order, x.a) +
        '</article>';
    });
    h += '<div class="btn-row" style="padding-top:1rem"><button class="btn" data-a="results">Back to results</button><button class="btn ghost" data-a="home">Home</button></div>';
    app.innerHTML = h;
  }

  // ---------- keyboard ----------
  document.addEventListener('keydown', function (e) {
    if (view !== 'quiz' || !store.session || modalRoot.firstChild) return;
    if (e.target.closest && e.target.closest('select,input,textarea')) return;
    var sess = store.session, it = sess.items[sess.idx];
    var k = e.key.toUpperCase();
    var pos = LETTERS.indexOf(k);
    if (pos === -1 && /^[1-8]$/.test(k)) pos = +k - 1;
    if (pos !== -1 && pos < it.order.length) { pickOption(it.order[pos]); e.preventDefault(); return; }
    if (e.key === 'ArrowRight') { actions.next(); e.preventDefault(); }
    else if (e.key === 'ArrowLeft') { actions.prev(); e.preventDefault(); }
    else if (e.key === 'Enter') {
      if (sess.mode === 'practice' && !sess.done[it.id]) actions.submit();
      else actions.next();
      e.preventDefault();
    }
  });

  // ---------- boot ----------
  try { history.replaceState({ v: 'home' }, '', location.pathname + location.search); } catch (e) { /* ignore */ }
  render();
})();
