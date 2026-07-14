# Prompt Engineering Presentation

Companion site for a prompt engineering presentation, published as a static site via GitHub Pages.

Plain HTML/CSS/JS — no Jekyll, no build step, no dependencies. `.nojekyll` tells GitHub Pages to serve the files as-is.

```
index.html              landing page
pages/*.html             chapters
assets/css/style.css     styles
assets/js/               nav data + interactivity (theme toggle, copy buttons, TOC, search)
```

## Preview locally

```
python -m http.server 8000
```

Then open http://localhost:8000 in a browser.

## Edit content

Each chapter is a standalone HTML file in `pages/`. The chapter list (titles, order, descriptions) lives in one place: `assets/js/nav-data.js` — edit it to reorder, rename, or add chapters, and the sidebar, homepage menu, and prev/next links all update automatically.
