/* ── Monroe Urgent Care — Navigation dropdown ────────────────────────
   Handles the header menu-toggle button:
   - Click to open / close
   - Click outside to close
   - Escape key to close
   - aria-expanded synced on every state change
──────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.menu-toggle');
    const menu   = document.getElementById('site-menu');

    if (!toggle || !menu) return;

    /* ── open / close helper ──────────────────────────────────────── */
    function openMenu() {
      menu.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      /* move focus to first link so keyboard users can tab through */
      var firstLink = menu.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
    }

    /* ── toggle on button click ───────────────────────────────────── */
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      } else {
        openMenu();
      }
    });

    /* ── close when clicking anywhere outside ─────────────────────── */
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        closeMenu();
      }
    });

    /* ── close on Escape ─────────────────────────────────────────── */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });

    /* ── close when a link is activated (same-page nav) ─────────── */
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });
  });
}());
