/* Interactive behaviors: theme toggle, mobile drawer, copy-to-clipboard,
   reading progress, on-page TOC + scrollspy, sidebar search filter,
   before/after reveal toggles. */
(function () {
  var root = document.documentElement;

  // ---------- theme toggle ----------
  var THEME_KEY = "oir-theme";
  function applyStoredTheme() {
    var stored = localStorage.getItem(THEME_KEY);
    if (stored) root.setAttribute("data-theme", stored);
  }
  applyStoredTheme();

  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current =
        root.getAttribute("data-theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  // ---------- mobile drawer ----------
  var menuBtn = document.getElementById("menuBtn");
  var sidebar = document.getElementById("sidebar");
  var drawerClose = document.getElementById("drawerClose");
  function closeDrawer() {
    if (!sidebar) return;
    sidebar.classList.remove("drawer-open");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  }
  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", function () {
      var open = sidebar.classList.toggle("drawer-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (sidebar) {
    sidebar.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeDrawer();
    });
  }

  // ---------- sidebar search filter ----------
  var navSearch = document.getElementById("navSearch");
  if (navSearch) {
    navSearch.addEventListener("input", function () {
      var q = navSearch.value.trim().toLowerCase();
      document.querySelectorAll("#navList a").forEach(function (a) {
        var match = !q || a.dataset.title.indexOf(q) !== -1;
        a.classList.toggle("hidden", !match);
      });
    });
  }

  // ---------- reading progress bar ----------
  var progressBar = document.getElementById("progressBar");
  if (progressBar) {
    window.addEventListener(
      "scroll",
      function () {
        var h = document.documentElement;
        var scrollTop = h.scrollTop || document.body.scrollTop;
        var scrollHeight = (h.scrollHeight || document.body.scrollHeight) - h.clientHeight;
        var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = pct + "%";
      },
      { passive: true }
    );
  }

  // ---------- copy-to-clipboard on code tickets ----------
  document.querySelectorAll(".ticket").forEach(function (ticket) {
    var btn = ticket.querySelector(".copy-btn");
    var codeEl = ticket.querySelector("pre");
    if (!btn || !codeEl) return;
    btn.addEventListener("click", function () {
      var text = codeEl.innerText;
      navigator.clipboard.writeText(text).then(function () {
        var original = btn.textContent;
        btn.textContent = "Copied ✓";
        btn.classList.add("copied");
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1600);
      });
    });
  });

  // ---------- before/after reveal (interactive examples page) ----------
  document.querySelectorAll(".reveal-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.getElementById(btn.getAttribute("aria-controls"));
      if (!target) return;
      var open = target.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Hide the improved order ▲" : "Show the improved order ▼";
    });
  });

  // ---------- on-page TOC + scrollspy ----------
  var toc = document.getElementById("toc");
  var article = document.querySelector("article");
  if (toc && article) {
    var headings = Array.prototype.slice.call(article.querySelectorAll("h2, h3"));
    if (headings.length > 2) {
      var list = document.createElement("ul");
      headings.forEach(function (h, i) {
        if (!h.id) h.id = "sec-" + i;
        var li = document.createElement("li");
        if (h.tagName === "H3") li.className = "lvl3";
        var a = document.createElement("a");
        a.href = "#" + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        list.appendChild(li);
      });
      toc.innerHTML = '<p class="menu-label">On This Page</p>';
      toc.appendChild(list);

      var tocLinks = Array.prototype.slice.call(toc.querySelectorAll("a"));
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            var link = toc.querySelector('a[href="#' + entry.target.id + '"]');
            if (!link) return;
            if (entry.isIntersecting) {
              tocLinks.forEach(function (l) {
                l.classList.remove("active");
              });
              link.classList.add("active");
            }
          });
        },
        { rootMargin: "-15% 0px -70% 0px" }
      );
      headings.forEach(function (h) {
        observer.observe(h);
      });
    } else {
      toc.style.display = "none";
    }
  }
})();
