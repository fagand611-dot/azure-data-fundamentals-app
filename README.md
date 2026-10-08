# DP-900 Exam Trainer

A mobile study app for the **Microsoft Azure Data Fundamentals (DP-900)** exam. It is an installable Progressive Web App (PWA): open it in your phone's browser, add it to your home screen, and it runs full screen and works offline like a native app.

## Features

- **337 exam-style questions** across all four skill areas, weighted like the real exam:
  | Skill area | Exam weight | Questions |
  |---|---|---|
  | Describe core data concepts | 25–30% | 86 |
  | Relational data on Azure | 20–25% | 80 |
  | Non-relational data on Azure | 15–20% | 67 |
  | Analytics workloads on Azure (incl. Microsoft Fabric) | 25–30% | 104 |
- **Exam simulation**: 40/50/60 questions, 45/60/90 minute timer (or untimed), mark-for-review flags, a question navigator, and a score out of 1000 with a 700 pass mark. Explanations appear after you end the exam.
- **Practice mode**: choose skill areas, question source (all, not seen yet, last answered wrong, saved) and set size. **Submit each answer to see right away whether you got it and why.**
- **Explanations for every question** cover why the right answer is right and why the distractors are wrong.
- Single-answer and multiple-answer ("Choose two") questions. Answer order is shuffled each time.
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
data/q-*.js             Questions, one file per skill area
sw.js                   Service worker for offline use
manifest.webmanifest    Install metadata and icons
scripts/validate.js     Checks the question bank (run: node scripts/validate.js)
```

## Adding questions

Append objects to the list in the matching `data/q-*.js` file:

```js
{
  q: "Which Azure service ...? (Choose two.)",
  o: ["Option A", "Option B", "Option C", "Option D"],
  a: [0, 2],                 // indexes of the correct options
  e: "Why A and C are right, and why B and D are not."
}
```

Append to the end of a list so existing progress stays linked to the right question. Run `node scripts/validate.js`, then bump `VERSION` in `sw.js` so installed copies pick up the change.

## Disclaimer

This is an independent study aid. It is not affiliated with or endorsed by Microsoft, and the questions are not real exam questions. Practice scores are a guide to your readiness and do not predict your exam result. Always check the official [DP-900 study guide](https://learn.microsoft.com/credentials/certifications/resources/study-guides/dp-900) for the current skills outline.
