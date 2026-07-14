/* Reader feedback: loads approved entries from the Google Apps Script
   Web App configured in feedback-config.js, and submits new ones to it.
   Only present on the homepage (needs #feedbackList / #feedbackForm). */
(function () {
  var list = document.getElementById("feedbackList");
  var form = document.getElementById("feedbackForm");
  var status = document.getElementById("feedbackStatus");

  function isConfigured() {
    return (
      typeof FEEDBACK_API_URL === "string" &&
      /^https:\/\//.test(FEEDBACK_API_URL)
    );
  }

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = String(str == null ? "" : str);
    return div.innerHTML;
  }

  function renderStars(rating) {
    var n = Math.max(0, Math.min(5, Number(rating) || 0));
    if (!n) return "";
    return (
      '<span class="feedback-stars" aria-label="' +
      n +
      ' out of 5 stars">' +
      "★★★★★☆☆☆☆☆".slice(5 - n, 10 - n) +
      "</span>"
    );
  }

  function setStatus(text, kind) {
    if (!status) return;
    status.textContent = text;
    status.className = "form-status" + (kind ? " " + kind : "");
  }

  function renderFeedback(items) {
    if (!list) return;
    if (!items || !items.length) {
      list.innerHTML =
        '<p class="feedback-empty">No feedback yet — be the first to share your thoughts.</p>';
      return;
    }
    list.innerHTML = items
      .map(function (item) {
        var d = item.date ? new Date(item.date) : null;
        var dateStr =
          d && !isNaN(d)
            ? d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })
            : "";
        return (
          '<div class="feedback-card">' +
          renderStars(item.rating) +
          '<p class="feedback-message">“' + escapeHtml(item.message) + "”</p>" +
          '<p class="feedback-meta">' +
          escapeHtml(item.name || "Anonymous") +
          (dateStr ? " · " + dateStr : "") +
          "</p></div>"
        );
      })
      .join("");
  }

  function loadFeedback() {
    if (!list) return;
    if (!isConfigured()) {
      list.innerHTML =
        '<p class="feedback-empty">Feedback isn’t connected yet.</p>';
      return;
    }
    fetch(FEEDBACK_API_URL)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        renderFeedback(data && data.feedback);
      })
      .catch(function () {
        list.innerHTML =
          '<p class="feedback-empty">Couldn’t load feedback right now.</p>';
      });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!isConfigured()) {
        setStatus("Feedback isn’t connected yet.", "error");
        return;
      }

      var fd = new FormData(form);
      var message = String(fd.get("message") || "").trim();
      if (!message) {
        setStatus("Please write a message before sending.", "error");
        return;
      }

      var payload = {
        name: String(fd.get("name") || "").trim(),
        message: message,
        rating: fd.get("rating") || 0,
        website: fd.get("website") || ""
      };

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;
      setStatus("Sending…");

      fetch(FEEDBACK_API_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      })
        .then(function () {
          form.reset();
          setStatus("Thanks! Your feedback was sent for review.", "success");
        })
        .catch(function () {
          setStatus("Something went wrong. Please try again later.", "error");
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  loadFeedback();
})();
