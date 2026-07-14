# Prompt Engineering Presentation

Companion site for a prompt engineering presentation, published as a static site via GitHub Pages.

Plain HTML/CSS/JS — no Jekyll, no build step, no dependencies. `.nojekyll` tells GitHub Pages to serve the files as-is.

```
index.html                     landing page (also hosts the reader feedback section)
pages/*.html                    chapters
assets/css/style.css            styles
assets/js/                      nav data + interactivity (theme toggle, copy buttons, TOC, search)
assets/js/feedback.js           reader feedback: submit + load
assets/js/feedback-config.js    the one line you edit: your feedback API URL
feedback-apps-script/           free Google Sheets backend for reader feedback (setup guide + Code.gs)
```

## Preview locally

```
python -m http.server 8000
```

Then open http://localhost:8000 in a browser.

## Edit content

Each chapter is a standalone HTML file in `pages/`. The chapter list (titles, order, descriptions) lives in one place: `assets/js/nav-data.js` — edit it to reorder, rename, or add chapters, and the sidebar, homepage menu, and prev/next links all update automatically.

## Reader feedback

The homepage has a feedback form and a "What Readers Are Saying" section.
Submissions are stored in a private Google Sheet (free) that only you can
see; nothing shows on the site until you approve it. One-time setup: see
[feedback-apps-script/README.md](feedback-apps-script/README.md).
