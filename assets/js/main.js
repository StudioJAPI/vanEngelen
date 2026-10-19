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
  /* Praktijkverhalen-slider (/cases/). Leest window.VEMAT_CASES uit      */
  /* cases-data.js. Zonder JavaScript staan de verhalen onder elkaar.     */
  /* ------------------------------------------------------------------ */
  (function showcase() {
    var root = document.querySelector("[data-showcase]");
    if (!root) return;
    var viewport = root.querySelector(".showcase-viewport");
    var track = root.querySelector(".showcase-track");
    var controls = root.querySelector(".showcase-controls");
    if (!viewport || !track) return;

    var P = root.getAttribute("data-prefix") || "";
    var data = (window.VEMAT_CASES || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });

    function el(tag, cls, text) {
      var n = document.createElement(tag);
      if (cls) n.className = cls;
      if (text != null) n.textContent = text;
      return n;
    }
    function pad(n) { return (n < 10 ? "0" : "") + n; }

    function build() {
      if (!data.length) return;
      track.textContent = "";
      data.forEach(function (c, i) {
        var li = el("li", "slide");
        li.id = "case-" + c.id;
        li.setAttribute("role", "group");
        li.setAttribute("aria-roledescription", "slide");
        li.setAttribute("aria-label", (i + 1) + " van " + data.length);
        var card = el("article", "slide-card");

        var vis = el("div", "slide-visual");
        if (c.image) {
          var im = el("img");
          im.src = P + c.image; im.alt = c.imageAlt || ""; im.loading = "lazy"; im.decoding = "async";
          vis.appendChild(im);
        } else if (c.logo) {
          vis.className += " slide-visual--logo";
          var lg = el("img", "slide-logo");
          lg.src = P + c.logo; lg.alt = c.organisation || ""; lg.loading = "lazy"; lg.decoding = "async";
          vis.appendChild(lg);
        } else {
          vis.className += " slide-visual--mark";
          vis.appendChild(el("span", "slide-mark", c.organisation || c.category));
        }
        vis.appendChild(el("span", "slide-no", pad(i + 1)));

        var body = el("div", "slide-body");
        body.appendChild(el("span", "slide-cat", c.category));
        if (c.organisation) body.appendChild(el("h3", "slide-org", c.organisation));
        var title = el(c.organisation ? "p" : "h3", "slide-title", c.title);
        body.appendChild(title);
        if (c.themes && c.themes.length) {
          var ul = el("ul", "slide-themes");
          c.themes.forEach(function (th) { ul.appendChild(el("li", null, th)); });
          body.appendChild(ul);
        }
        body.appendChild(el("p", "slide-desc", c.description));
        if (c.testimonial && c.testimonial.quote) {
          var bq = el("blockquote", "slide-quote");
          bq.appendChild(el("p", null, "\u201C" + c.testimonial.quote + "\u201D"));
          bq.appendChild(el("cite", null, c.testimonial.name || ""));
          body.appendChild(bq);
        }
        var a = el("a", "btn btn-primary slide-link", "Bekijk het verhaal op LinkedIn");
        a.href = c.url; a.target = "_blank"; a.rel = "noopener noreferrer";
        body.appendChild(a);

        card.appendChild(vis); card.appendChild(body); li.appendChild(card);
        track.appendChild(li);
      });
    }
    build();

    var slides = Array.prototype.slice.call(track.children);
    var n = slides.length;
    if (!n) return;
    var idx = 0, dragDX = 0;
    var counter = root.querySelector("[data-showcase-counter]");
    var bar = root.querySelector("[data-showcase-bar]");
    var prev = root.querySelector("[data-showcase-prev]");
    var next = root.querySelector("[data-showcase-next]");
    root.classList.add("is-ready");
    if (controls) controls.hidden = false;

    function offsetFor(i) {
      var s = slides[i];
      return viewport.clientWidth / 2 - (s.offsetLeft + s.offsetWidth / 2);
    }
    function render(animate) {
      track.style.transition = animate === false ? "none" : "";
      track.style.transform = "translate3d(" + (offsetFor(idx) + dragDX) + "px,0,0)";
      slides.forEach(function (s, i) {
        var on = i === idx;
        s.classList.toggle("is-active", on);
        s.setAttribute("aria-hidden", on ? "false" : "true");
        if (on) s.removeAttribute("inert"); else s.setAttribute("inert", "");
      });
      if (counter) counter.textContent = pad(idx + 1) + " / " + pad(n);
      if (bar) bar.style.transform = "scaleX(" + ((idx + 1) / n) + ")";
      if (prev) prev.disabled = idx === 0;
      if (next) next.disabled = idx === n - 1;
    }
    function go(i) {
      idx = Math.max(0, Math.min(n - 1, i));
      dragDX = 0;
      render(true);
    }
    render(false);
    window.addEventListener("resize", function () { render(false); });
    window.addEventListener("load", function () { render(false); });

    if (prev) prev.addEventListener("click", function () { go(idx - 1); });
    if (next) next.addEventListener("click", function () { go(idx + 1); });

    viewport.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); go(idx + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); go(idx - 1); }
      else if (e.key === "Home") { e.preventDefault(); go(0); }
      else if (e.key === "End") { e.preventDefault(); go(n - 1); }
    });

    /* Klik op een naastgelegen slide brengt die naar het midden */
    slides.forEach(function (s, i) {
      s.addEventListener("click", function (e) {
        if (i !== idx && !moved) { e.preventDefault(); go(i); }
      });
    });

    /* Swipe en slepen */
    var startX = 0, startY = 0, startT = 0, dragging = false, moved = false, locked = null;
    viewport.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      startX = e.clientX; startY = e.clientY; startT = Date.now();
      dragging = true; moved = false; locked = null;
    });
    viewport.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      if (locked === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) locked = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
      if (locked !== "x") return;
      moved = true;
      if ((idx === 0 && dx > 0) || (idx === n - 1 && dx < 0)) dx = dx / 3;
      dragDX = dx;
      viewport.classList.add("is-dragging");
      render(false);
    });
    function endDrag(e) {
      if (!dragging) return;
      dragging = false;
      viewport.classList.remove("is-dragging");
      var dx = dragDX, dt = Date.now() - startT;
      var flick = Math.abs(dx) > 30 && dt < 280;
      if (moved && (Math.abs(dx) > 70 || flick)) go(idx + (dx < 0 ? 1 : -1));
      else { dragDX = 0; render(true); }
      setTimeout(function () { moved = false; }, 0);
    }
    viewport.addEventListener("pointerup", endDrag);
    viewport.addEventListener("pointercancel", endDrag);
    viewport.addEventListener("dragstart", function (e) { e.preventDefault(); });
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
