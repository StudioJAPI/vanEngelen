(function () {
  'use strict';

  /* Kleine, defensieve forEach-helper: werkt ook als een browser
     NodeList.forEach niet kent (oudere of ongebruikelijke browsers,
     bijvoorbeeld tijdens een salespresentatie op onbekende hardware). */
  function each(nodeList, fn) {
    for (var i = 0; i < nodeList.length; i++) { fn(nodeList[i], i); }
  }

  /* Header scroll state */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  if (header) {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Mobile menu */
  var toggle = document.querySelector('.menu-toggle');
  var mobileNav = document.querySelector('.mobile-nav');

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    each(mobileNav.querySelectorAll('a'), function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeMenu(); }
    });
  }

  /* Demo-links: interne pagina's die nog niet bestaan in dit concept.
     Werkende externe/mailto-links (frank@vemat.nl, socials) zijn hier
     bewust van uitgesloten en functioneren gewoon. */
  each(document.querySelectorAll('[data-demo-link]'), function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.alert('Dit is een homepage-concept. Deze pagina wordt gebouwd bij de volledige website.');
    });
  });

  /* Jaartal in de footer altijd actueel houden */
  var yearEl = document.getElementById('year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
