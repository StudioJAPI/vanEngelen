/* ==========================================================================
   VEMAT: main.js
   Progressive enhancement only: every feature here is additive.
   If this script fails to load or throws, the page must remain fully
   usable and readable (see styles.css comments for the CSS-only fallbacks
   this script assumes).
   ========================================================================== */

(function () {
  "use strict";

  var html = document.documentElement;
  document.body.classList.remove("no-js");
  html.classList.add("js-enabled");

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  var isCoarsePointer = window.matchMedia("(hover: none)").matches;

  /* ------------------------------------------------------------------ */
  /* Header: scrolled state + mobile nav                                 */
  /* ------------------------------------------------------------------ */
  (function header() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var onScroll = function () {
      if (window.scrollY > 8) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = document.querySelector(".menu-toggle");
    var mobileNav = document.querySelector(".mobile-nav");
    if (!toggle || !mobileNav) return;

    var closeMenu = function () {
      toggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    };

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.classList.toggle("is-open", !expanded);
      document.body.classList.toggle("nav-open", !expanded);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  })();

  /* ------------------------------------------------------------------ */
  /* Scroll-reveal systeem                                                */
  /* Basisstatus: alles zichtbaar (zie CSS). Pas als IntersectionObserver */
  /* beschikbaar is en de observer succesvol is opgezet, zet dit script   */
  /* de .js-reveal klasse op <html>. Daardoor kan content nooit per       */
  /* ongeluk permanent onzichtbaar blijven.                               */
  /* ------------------------------------------------------------------ */
  (function reveal() {
    if (!("IntersectionObserver" in window)) return;

    var groups = document.querySelectorAll("[data-reveal-group]");
    groups.forEach(function (group) {
      var items = group.querySelectorAll("[data-reveal]");
      items.forEach(function (item, i) {
        item.style.setProperty("--reveal-delay", Math.min(i * 90, 360) + "ms");
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });

    /* Pas nu, na succesvolle opzet, de voor-animatiestatus activeren */
    html.classList.add("js-reveal");
  })();

  /* ------------------------------------------------------------------ */
  /* Subtiele parallax op hero- en verhaalafbeeldingen                   */
  /* ------------------------------------------------------------------ */
  (function parallax() {
    if (prefersReducedMotion || isCoarsePointer) return;

    var targets = document.querySelectorAll(
      ".hero-figure img, .story-visual img, .dienst-media img"
    );
    if (!targets.length) return;

    var update = function () {
      var vh = window.innerHeight;
      targets.forEach(function (img) {
        var rect = img.getBoundingClientRect();
        var center = rect.top + rect.height / 2;
        var offset = (center - vh / 2) / vh;
        var shift = Math.max(Math.min(offset * -18, 18), -18);
        img.style.transform = "translateY(" + shift + "px)";
      });
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  })();

  /* ------------------------------------------------------------------ */
  /* Sticky storytelling: services section (en vergelijkbare secties)    */
  /* Default state (geen JS / JS nog niet actief): eerste foto via CSS.  */
  /* Met JS: wisselt de actieve foto mee met het panel dat in beeld is,  */
  /* via IntersectionObserver indien beschikbaar.                        */
  /* ------------------------------------------------------------------ */
  (function story() {
    var stories = document.querySelectorAll(".story");
    if (!stories.length) return;
    if (!("IntersectionObserver" in window)) return;

    stories.forEach(function (storyEl) {
      var stack = storyEl.querySelector(".story-visual-stack");
      var panels = storyEl.querySelectorAll(".story-panel");
      if (!stack || !panels.length) return;

      var images = stack.querySelectorAll("img, .ph");
      if (images.length < 2) return;

      storyEl.classList.add("js-story");

      var activate = function (index) {
        images.forEach(function (img, i) {
          img.classList.toggle("is-active", i === index);
        });
      };

      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var index = Array.prototype.indexOf.call(panels, entry.target);
              if (index > -1) activate(index);
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );

      panels.forEach(function (panel) {
        observer.observe(panel);
      });
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
        if (!expanded) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = null;
        }
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
