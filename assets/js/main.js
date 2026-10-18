/* ==========================================================================
   VEMAT: main.js
   Progressive enhancement: alles hier is aanvullend. Als dit script niet
   laadt of faalt, blijft de pagina volledig bruikbaar en leesbaar.
   ========================================================================== */

(function () {
  "use strict";

  var html = document.documentElement;
  document.body.classList.remove("no-js");
  html.classList.add("js-enabled");

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ------------------------------------------------------------------ */
  /* Header: scrolled state, menu op mobiel, submenu op desktop          */
  /* ------------------------------------------------------------------ */
  (function header() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = document.querySelector(".menu-toggle");
    var mobileNav = document.querySelector(".mobile-nav");

    var closeMenu = function () {
      if (!toggle || !mobileNav) return;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menu openen");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    };

    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        var expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!expanded));
        toggle.setAttribute("aria-label", expanded ? "Menu openen" : "Menu sluiten");
        mobileNav.classList.toggle("is-open", !expanded);
        document.body.classList.toggle("nav-open", !expanded);
      });
      mobileNav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
      });
    }

    var subs = document.querySelectorAll(".has-sub");
    var closeSubs = function () {
      subs.forEach(function (s) {
        s.classList.remove("is-open");
        var b = s.querySelector(".sub-toggle");
        if (b) b.setAttribute("aria-expanded", "false");
      });
    };
    subs.forEach(function (sub) {
      var btn = sub.querySelector(".sub-toggle");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var open = sub.classList.contains("is-open");
        closeSubs();
        if (!open) {
          sub.classList.add("is-open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".has-sub")) closeSubs();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMenu();
        closeSubs();
      }
    });
  })();

  /* ------------------------------------------------------------------ */
  /* Scroll-reveal: lichte fade-in. Basisstatus is "zichtbaar"; de       */
  /* voor-animatiestatus wordt pas actief na een geslaagde setup.        */
  /* ------------------------------------------------------------------ */
  (function reveal() {
    if (!("IntersectionObserver" in window)) return;

    document.querySelectorAll("[data-reveal-group]").forEach(function (group) {
      group.querySelectorAll("[data-reveal]").forEach(function (item, i) {
        item.style.setProperty("--reveal-delay", Math.min(i * 80, 320) + "ms");
      });
    });

    var targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    targets.forEach(function (el) { observer.observe(el); });
    html.classList.add("js-reveal");
  })();

  /* ------------------------------------------------------------------ */
  /* Video: pas laden en afspelen na een klik op de afspeelknop          */
  /* ------------------------------------------------------------------ */
  (function video() {
    document.querySelectorAll("[data-video]").forEach(function (frame) {
      var vid = frame.querySelector("video");
      var play = frame.querySelector(".video-play");
      if (!vid || !play) return;

      play.addEventListener("click", function () {
        frame.classList.add("is-playing");
        var p = vid.play();
        if (p && p.catch) {
          p.catch(function () { frame.classList.remove("is-playing"); });
        }
      });
      vid.addEventListener("play", function () { frame.classList.add("is-playing"); });
      vid.addEventListener("ended", function () { frame.classList.remove("is-playing"); });
    });
  })();

  /* ------------------------------------------------------------------ */
  /* FAQ accordion                                                        */
  /* ------------------------------------------------------------------ */
  (function faq() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var question = item.querySelector(".faq-question");
      var answer = item.querySelector(".faq-answer");
      if (!question || !answer) return;

      question.addEventListener("click", function () {
        var expanded = question.getAttribute("aria-expanded") === "true";

        items.forEach(function (other) {
          if (other === item) return;
          var otherQ = other.querySelector(".faq-question");
          var otherA = other.querySelector(".faq-answer");
          if (!otherQ || !otherA) return;
          otherQ.setAttribute("aria-expanded", "false");
          otherA.style.maxHeight = null;
          other.classList.remove("is-open");
        });

        question.setAttribute("aria-expanded", String(!expanded));
        item.classList.toggle("is-open", !expanded);
        answer.style.maxHeight = !expanded ? answer.scrollHeight + "px" : null;
      });
    });
  })();

  /* ------------------------------------------------------------------ */
  /* Contactformulier: verzenden naar Formspree zonder paginaherlaad,    */
  /* daarna door naar de bedankpagina. Zonder JavaScript werkt het       */
  /* formulier nog steeds via de gewone POST naar Formspree.             */
  /* ------------------------------------------------------------------ */
  (function contactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form || !window.fetch) return;

    var status = form.querySelector(".form-status");
    var button = form.querySelector("button[type=submit]");

    var showError = function (msg) {
      if (!status) return;
      status.textContent = msg;
      status.classList.add("is-visible", "is-error");
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (status) status.classList.remove("is-visible", "is-error");
      if (button) button.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (res.ok) {
            window.location.href = form.getAttribute("data-thanks") || "../bedankt/";
            return;
          }
          return res.json().then(function (data) {
            var msg = data && data.errors
              ? data.errors.map(function (er) { return er.message; }).join(", ")
              : "Het verzenden is niet gelukt.";
            throw new Error(msg);
          });
        })
        .catch(function (err) {
          showError(
            (err && err.message ? err.message + " " : "") +
            "Probeer het opnieuw of mail direct naar frank@vemat.nl."
          );
          if (button) button.disabled = false;
        });
    });
  })();
})();
