# DP-900 Exam Trainer

A mobile study app for the **Microsoft Azure Data Fundamentals (DP-900)** exam. It is an installable Progressive Web App (PWA): open it in your phone's browser, add it to your home screen, and it runs full screen and works offline like a native app.

## Features

- **622 exam-style questions** mapped to the official skills outline (skills measured as of July 21, 2026). Every one of the 26 objectives has at least 10 questions:
  | Skill area | Exam weight | Questions in the outline |
  |---|---|---|
  | Describe core data concepts | 25–30% | 115 |
  | Identify considerations for relational data on Azure | 20–25% | 152 |
  | Describe considerations for working with non-relational data on Azure | 15–20% | 115 |
  | Describe an analytics workload on Azure | 25–30% | 178 |

  A further 62 questions are kept for practice only: 22 on topics the outline doesn't list (types of analytics, data governance with Purview, cloud concepts such as regions, availability zones and CapEx/OpEx, Azure Disks, Queue storage, the retired Azure SQL Edge) and 40 that go deeper than the outline asks (for example Stream Analytics window functions, Defender for SQL, Cosmos DB partition limits). Each question shows its objective, and exam simulations use only in-outline questions.
- **Progress by exam objective**: see your score on each of the 26 objectives and tap one to practise it.
- **Exam simulation**: 40/50/60 questions, 45/60/90 minute timer (or untimed), mark-for-review flags, a question navigator, and a score out of 1000 with a 700 pass mark. Explanations appear after you end the exam.
- **Practice mode**: choose skill areas, question source (all, exam outline only, not seen yet, last answered wrong, saved) and set size. **Submit each answer to see right away whether you got it and why.**
- **Explanations for every question** cover why the right answer is right and why the distractors are wrong, followed by a **memory aid** (for example "LRS = Local, ZRS = Zones, GRS = Geo, GZRS = Geo + Zones") and a **key terms** list defining each term with an example (193 definitions across 37 topics, such as each ACID property, SQL statement category, normal form, Cosmos DB API and consistency level). Key terms start open while practising and collapsed in reviews. The memory aids are adapted from the course notes for the in28minutes *DP-900: Microsoft Azure Data Fundamentals in a Weekend* course. Where the course material is out of date (Hyperscale size, Cosmos DB serverless limits, the old "Core (SQL) API" name, Fabric's service model, MariaDB and Azure Data Studio retirements), the explanation says so.
- Question formats match the exam:
  - **Single answer:** 2, 3 or 4 options with one correct answer (2-option questions are Yes/No statements).
  - **Multiple answer:** 5 options with two correct answers ("Choose two"). You must pick both to get the mark.
  - **Yes/No statement sets:** three statements about one topic, each answered Yes or No.
  - **Matching:** pair each item with an answer from a shared list (answers can be used once, more than once, or not at all). Shown as a dropdown per item, which works better than drag and drop on a phone.
  - **Sentence completion:** choose the word or phrase for each blank from a dropdown.
- Multi-part questions (statement sets, matching, sentence completion) earn partial credit per part in the exam score, like the real exam.
- Answer order is shuffled each time (Yes/No and ordered lists keep their order). Options are written so the correct answer can't be spotted by length; `node scripts/check-cues.js` measures this.
- Progress tracking per skill area, exam history, "retry missed", and saved questions. Everything is stored on your device.
- Light and dark mode, large tap targets, works offline after the first visit.

## Run it

It is a static site with no build step.

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

### Put it on your phone

1. Publish the site (see below) or serve it on your local network.
2. Open the URL on your phone.
   - **iPhone (Safari):** Share → *Add to Home Screen*.
   - **Android (Chrome):** menu → *Install app* / *Add to Home screen*.

### Deploy with GitHub Pages

The workflow in `.github/workflows/pages.yml` publishes the app whenever `main` is updated.
One-time setup: in the repository go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
The app will be served at `https://<user>.github.io/<repo>/`.

## Project layout

```
index.html              App shell
css/styles.css          Styles (light/dark tokens)
js/app.js               App logic: exam, practice, results, review, progress
data/bank.js            Question registry
data/q-*.js             Questions, grouped by skill area
data/outline.js         Skills outline and the objective each question tests
data/tips.js            Memory aids and the key-terms glossary shown under explanations
sw.js                   Service worker for offline use
manifest.webmanifest    Install metadata and icons
scripts/validate.js     Checks the question bank (run: node scripts/validate.js)
scripts/check-cues.js   Checks that answer length doesn't give the correct option away
scripts/coverage.js     Shows how many questions cover each outline objective
scripts/load-bank.js    Loads the bank into Node for scripts
```

## Adding questions

Append objects to the list in the matching `data/q-*.js` file. Single-answer questions have 2–4 options and one answer; multiple-answer questions have exactly 5 options, two answers, and end with "(Choose two.)". Write wrong options that are plausible and about as long as the right one. The validator enforces the formats.

```js
{
  q: "Which Azure services ...? (Choose two.)",
  o: ["Option A", "Option B", "Option C", "Option D", "Option E"],
  a: [0, 2],                 // indexes of the correct options
  e: "Why A and C are right, and why B, D and E are not."
}

// Yes/No statement: keep option order fixed with k: 1
{ q: "Select Yes if the statement is true. Otherwise, select No.\n\n...", o: ["Yes", "No"], a: [1], k: 1, e: "..." }

// Set of three Yes/No statements
{ t: "yesno", q: "Consider these statements about ...", s: [["Statement", true], ["Statement", false], ["Statement", true]], e: "..." }

// Matching: c = answer choices, s = [item, index of its answer in c]
{ t: "match", q: "Match each ... to ...", c: ["Choice A", "Choice B", "Choice C"], s: [["Item 1", 0], ["Item 2", 2], ["Item 3", 0]], e: "..." }

// Sentence completion: {0}, {1} mark the blanks; each blank has its own options and answer index
{ t: "complete", q: "A {0} stores ... and a {1} ...", b: [{ o: ["fact", "dimension"], a: 0 }, { o: ["fact", "dimension"], a: 1 }], e: "..." }
```

Append to the end of a list so existing progress stays linked to the right question. Then add the new question's id (for example `core-157`) to its objective in `data/outline.js`, run `node scripts/validate.js` and `node scripts/coverage.js`, and bump `VERSION` in `sw.js` so installed copies pick up the change.

## Disclaimer

This is an independent study aid. It is not affiliated with or endorsed by Microsoft, and the questions are not real exam questions. Practice scores are a guide to your readiness and do not predict your exam result. The bank follows the skills outline as of July 21, 2026. Azure Synapse Analytics and Azure HDInsight are included in exam simulations under "Microsoft cloud services for large-scale analytics" (the outline names Azure Databricks and Microsoft Fabric, but its wording is not exclusive), and HDInsight Kafka under real-time analytics. If Microsoft updates the outline, update `data/outline.js` and check the result with `node scripts/coverage.js`. Always check the official [DP-900 study guide](https://learn.microsoft.com/credentials/certifications/resources/study-guides/dp-900) for the current skills outline.
