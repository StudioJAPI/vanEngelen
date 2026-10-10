/* ==========================================================================
   VEMAT — main.js
   Progressive enhancement only: every feature here is additive.
   If this script fails to load or throws, the page must remain fully
   usable and readable (see styles.css comments for the CSS-only fallbacks
   this script assumes).
   ========================================================================== */

(function () {
  "use strict";

  var html = document.documentElement;
  html.classList.remove("no-js");
  html.classList.add("js-enabled");

  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  var isCoarsePointer = window.matchMedia("(hover: none)").matches;
  var isNarrow = window.matchMedia("(max-width: 1024px)").matches;

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
  /* Custom cursor — desktop/mouse only                                   */
  /* ------------------------------------------------------------------ */
  (function cursor() {
    if (isCoarsePointer || isNarrow) return;

    var dot = document.createElement("div");
    dot.className = "cursor-dot";
    dot.setAttribute("aria-hidden", "true");
    var label = document.createElement("span");
    label.className = "cursor-label";
    dot.appendChild(label);
    dot.style.opacity = "0";
    document.body.appendChild(dot);

    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var curX = x;
    var curY = y;
    var visible = false;

    var usingKeyboard = false;
    document.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        usingKeyboard = true;
        dot.style.display = "none";
      }
    });

    window.addEventListener("mousemove", function (e) {
      if (usingKeyboard) {
        usingKeyboard = false;
        dot.style.display = "";
      }
      x = e.clientX;
      y = e.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
      }
    });

    window.addEventListener("mouseleave", function () {
      dot.style.opacity = "0";
    });

    var raf = function () {
      curX += (x - curX) * 0.18;
      curY += (y - curY) * 0.18;
      dot.style.transform =
        "translate(" + curX + "px," + curY + "px) translate(-50%,-50%)";
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    var hoverTargets = document.querySelectorAll("[data-cursor]");
    hoverTargets.forEach(function (el) {
      var text = el.getAttribute("data-cursor");
      el.addEventListener("mouseenter", function () {
        dot.classList.add("is-hovering");
        label.textContent = text || "";
      });
      el.addEventListener("mouseleave", function () {
        dot.classList.remove("is-hovering");
        label.textContent = "";
      });
    });
  })();

  /* ------------------------------------------------------------------ */
  /* Magnetic buttons — desktop/mouse only                                */
  /* ------------------------------------------------------------------ */
  (function magnetic() {
    if (isCoarsePointer || isNarrow || prefersReducedMotion) return;

    var items = document.querySelectorAll(".magnetic");
    items.forEach(function (wrap) {
      var btn = wrap.querySelector(".btn") || wrap;
      var strength = 0.3;

      wrap.addEventListener("mousemove", function (e) {
        var rect = wrap.getBoundingClientRect();
        var relX = e.clientX - rect.left - rect.width / 2;
        var relY = e.clientY - rect.top - rect.height / 2;
        btn.style.transform =
          "translate(" + relX * strength + "px," + relY * strength + "px)";
      });

      wrap.addEventListener("mouseleave", function () {
        btn.style.transform = "translate(0,0)";
      });
    });
  })();

  /* ------------------------------------------------------------------ */
  /* Sticky storytelling — services section (and similar)                */
  /* Default state (no JS / JS not yet run): first image shown via CSS.  */
  /* With JS: swaps active image as each panel crosses the viewport      */
  /* midpoint, using IntersectionObserver when available.                */
  /* ------------------------------------------------------------------ */
  (function story() {
    var stories = document.querySelectorAll(".story");
    if (!stories.length) return;
    if (!("IntersectionObserver" in window)) return;

    stories.forEach(function (storyEl) {
      var stack = storyEl.querySelector(".story-visual-stack");
      var panels = storyEl.querySelectorAll(".story-panel");
      if (!stack || !panels.length) return;

      var images = stack.querySelectorAll("img");
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
        });

        question.setAttribute("aria-expanded", String(!expanded));
        if (!expanded) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = null;
        }
      });
    });
  })();

  /* ------------------------------------------------------------------ */
  /* Reveal-on-scroll refinement (optional, CSS already animates on      */
  /* load via .fade-in-up; this just staggers items already in view      */
  /* using a small delay set as a CSS variable — never gates visibility) */
  /* ------------------------------------------------------------------ */
  (function stagger() {
    if (prefersReducedMotion) return;
    var groups = document.querySelectorAll("[data-stagger]");
    groups.forEach(function (group) {
      var children = group.children;
      Array.prototype.forEach.call(children, function (child, i) {
        child.style.animationDelay = i * 80 + "ms";
      });
    });
  })();

  /* ------------------------------------------------------------------ */
  /* Contact form — basic client-side status handling (Formspree-ready)  */
  /* ------------------------------------------------------------------ */
  (function contactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    var status = form.querySelector(".form-status");

    form.addEventListener("submit", function (e) {
      // If the form's action is still a placeholder, keep default
      // mailto-style behaviour and show a note rather than silently
      // failing. Once a real Formspree endpoint is configured this
      // branch simply won't trigger.
      var action = form.getAttribute("action") || "";
      if (action.indexOf("FORMSPREE_ENDPOINT") > -1) {
        e.preventDefault();
        if (status) {
          status.textContent =
            "Het formulier is nog niet gekoppeld aan een verzendservice. Mail ons gerust direct op info@vemat.nl.";
          status.classList.add("is-visible", "is-error");
        }
      }
    });
  })();
})();
