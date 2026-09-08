/* lang.js — bascule bilingue EN/FR partagée par toutes les pages du site.
   Le texte HTML par défaut est en ANGLAIS ; la version française vit dans data-fr.
   - Tout élément avec un attribut data-en (et data-fr) voit son contenu basculé.
     Ajouter data-i18n-html pour interpréter la valeur comme du HTML (spans, accents…).
   - Attributs traduisibles : data-en-title / data-fr-title, idem -placeholder, -aria-label, -content.
   - Le choix est mémorisé (localStorage). Un évènement 'langchange' est émis pour le contenu
     généré en JS (compteurs, légendes) que chaque page met à jour elle-même via window.getLang().
*/
(function () {
  var LANGS = ['en', 'fr'];
  var lang = localStorage.getItem('site-lang') || 'en';
  if (LANGS.indexOf(lang) === -1) lang = 'en';

  var ATTRS = ['title', 'placeholder', 'aria-label', 'content'];

  function applyEl(el) {
    var v = el.getAttribute('data-' + lang);
    if (v === null) v = el.getAttribute('data-en'); // repli anglais
    if (v === null) return;
    if (el.hasAttribute('data-i18n-html')) el.innerHTML = v; else el.textContent = v;
  }
  function applyAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      var v = el.getAttribute('data-' + lang + '-' + a);
      if (v === null) v = el.getAttribute('data-en-' + a);
      if (v !== null) el.setAttribute(a, v);
    }
  }
  function apply() {
    document.documentElement.lang = lang;
    var els = document.querySelectorAll('[data-en]');
    for (var i = 0; i < els.length; i++) applyEl(els[i]);
    var ael = document.querySelectorAll('[data-en-title],[data-en-placeholder],[data-en-aria-label],[data-en-content]');
    for (var j = 0; j < ael.length; j++) applyAttrs(ael[j]);
    var b = document.getElementById('langtoggle');
    if (b) { b.textContent = (lang === 'en' ? 'FR' : 'EN'); b.setAttribute('aria-label', lang === 'en' ? 'Passer en français' : 'Switch to English'); }
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
  }

  window.getLang = function () { return lang; };
  window.setLang = function (l) { if (LANGS.indexOf(l) === -1) return; lang = l; try { localStorage.setItem('site-lang', lang); } catch (e) {} apply(); };

  function makeToggle() {
    if (document.getElementById('langtoggle')) return;
    var b = document.createElement('button');
    b.id = 'langtoggle';
    b.type = 'button';
    b.style.cssText = [
      'position:fixed', 'bottom:16px', 'left:16px', 'z-index:99999',
      'font:600 12px/1 system-ui,-apple-system,"Segoe UI",sans-serif', 'letter-spacing:.08em',
      'padding:8px 12px', 'border-radius:999px', 'border:1px solid rgba(140,140,140,.45)',
      'background:rgba(250,249,246,.82)', 'color:#2a2724', 'cursor:pointer',
      'box-shadow:0 1px 6px rgba(0,0,0,.12)', 'backdrop-filter:blur(8px)', '-webkit-backdrop-filter:blur(8px)',
      'transition:opacity .15s'
    ].join(';');
    b.onmouseenter = function () { b.style.opacity = '.8'; };
    b.onmouseleave = function () { b.style.opacity = '1'; };
    b.onclick = function () { window.setLang(lang === 'en' ? 'fr' : 'en'); };
    document.body.appendChild(b);
  }

  function init() { makeToggle(); apply(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
