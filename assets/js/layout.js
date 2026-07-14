/* Injects header / sidebar nav / footer / prev-next chapter links from
   CHAPTERS (nav-data.js) into every page. Single source of truth for nav
   so no link list is ever hand-duplicated across 9 HTML files. */
(function () {
  var slug = document.body.getAttribute("data-slug") || "home";
  var isHome = slug === "home";
  var base = isHome ? "./" : "../";

  function chapterHref(s) {
    return base + "pages/" + s + ".html";
  }
  function homeHref() {
    return base + "index.html";
  }

  // ---------- header ----------
  var header = document.getElementById("siteHeader");
  if (header) {
    header.className = "site-header";
    header.innerHTML =
      '<a class="brand" href="' + homeHref() + '"><span class="mark">✎</span>Order It Right</a>' +
      '<div class="header-actions">' +
      (document.getElementById("sidebar")
        ? '<button class="icon-btn menu-btn" id="menuBtn" aria-label="Open chapter menu" aria-expanded="false">☰ Menu</button>'
        : "") +
      '<button class="icon-btn" id="themeBtn" aria-label="Toggle color theme">◐ Theme</button>' +
      "</div>";
  }

  // ---------- sidebar ----------
  var sidebar = document.getElementById("sidebar");
  if (sidebar) {
    var items = CHAPTERS.map(function (c, i) {
      var num = String(i + 1).padStart(2, "0");
      var active = c.slug === slug ? " active" : "";
      return (
        '<li><a class="' +
        active.trim() +
        '" href="' +
        chapterHref(c.slug) +
        '" data-title="' +
        c.title.toLowerCase() +
        '"><span class="num">' +
        num +
        "</span>" +
        c.title +
        "</a></li>"
      );
    }).join("");

    sidebar.innerHTML =
      '<button class="icon-btn drawer-close" id="drawerClose" aria-label="Close menu">✕ Close</button>' +
      '<div class="search-wrap"><input type="search" id="navSearch" placeholder="Filter chapters…" aria-label="Filter chapters"></div>' +
      '<p class="menu-label">The Menu</p>' +
      '<ul class="nav-list" id="navList">' +
      items +
      "</ul>";
  }

  // ---------- prev / next ----------
  var pageNav = document.getElementById("pageNav");
  if (pageNav && !isHome) {
    var idx = CHAPTERS.findIndex(function (c) {
      return c.slug === slug;
    });
    var prev = idx > 0 ? CHAPTERS[idx - 1] : null;
    var next = idx >= 0 && idx < CHAPTERS.length - 1 ? CHAPTERS[idx + 1] : null;
    var html = '<nav class="page-nav" aria-label="Chapter navigation">';
    html += prev
      ? '<a class="prev" href="' + chapterHref(prev.slug) + '"><span class="dir">← Previous</span><span class="title">' + prev.title + "</span></a>"
      : "<span></span>";
    html += next
      ? '<a class="next" href="' + chapterHref(next.slug) + '"><span class="dir">Next →</span><span class="title">' + next.title + "</span></a>"
      : "<span></span>";
    html += "</nav>";
    pageNav.innerHTML = html;
  }

  // ---------- homepage menu grid ----------
  var menuGrid = document.getElementById("menuGrid");
  if (menuGrid) {
    menuGrid.innerHTML = CHAPTERS.map(function (c, i) {
      var num = String(i + 1).padStart(2, "0");
      return (
        '<a class="dish" href="' +
        chapterHref(c.slug) +
        '"><div class="dish-top"><span class="dish-no">' +
        num +
        " · " +
        c.dish +
        '</span><span class="dish-time">' +
        c.mins +
        ' min</span></div><h3>' +
        c.title +
        "</h3><p>" +
        c.desc +
        "</p></a>"
      );
    }).join("");
  }

  // ---------- footer ----------
  var footer = document.getElementById("siteFooter");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML =
      "<p>Order It Right — a companion for the prompt engineering presentation.</p>" +
      '<p><a href="' + homeHref() + '">Back to the menu</a></p>';
  }
})();
