/* =====================================================
   I18N — Language switch: ES (default) ↔ EN
   ===================================================== */

var currentLang = 'es';
var I18N = {}; // Will be populated from JSON

/* ── Translation helper ── */
function t(key) {
    var dict = I18N || {};
    return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
}
window.t = t;

/* ── Load translations from JSON ── */
async function loadTranslations(lang) {
    try {
        const response = await fetch(`./i18n/${lang}.json`);
        if (!response.ok) throw new Error(`Could not load ${lang}.json`);
        I18N = await response.json();
    } catch (error) {
        console.error('Translation load error:', error);
        // Fallback or keep current if load fails
    }
}

/* ── Apply language to the DOM ── */
async function setLanguage(lang) {
    await loadTranslations(lang);
    currentLang = lang;

    document.documentElement.lang = lang;

    /* --- Meta tags & SEO Synchronization --- */
    if (I18N['meta.title']) {
        document.title = I18N['meta.title'];
    }

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && I18N['meta.desc']) {
        metaDesc.setAttribute('content', I18N['meta.desc']);
    }

    // Open Graph (Facebook, LinkedIn, Discord)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && I18N['meta.title']) ogTitle.setAttribute('content', I18N['meta.title']);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc && I18N['meta.desc']) ogDesc.setAttribute('content', I18N['meta.desc']);

    // Twitter Cards (X)
    const twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle && I18N['meta.title']) twTitle.setAttribute('content', I18N['meta.title']);

    const twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc && I18N['meta.desc']) twDesc.setAttribute('content', I18N['meta.desc']);

    try { localStorage.setItem('lang', lang); } catch (e) {}

    /* Text content nodes */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.dataset.i18n;
        if (Object.prototype.hasOwnProperty.call(I18N, key)) {
            el.textContent = I18N[key];
        }
    });

    /* HTML nodes (contain markup) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
        var key = el.dataset.i18nHtml;
        if (Object.prototype.hasOwnProperty.call(I18N, key)) {
            el.innerHTML = I18N[key];
        }
    });

    /* title attributes */
    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
        var key = el.dataset.i18nTitle;
        if (Object.prototype.hasOwnProperty.call(I18N, key)) {
            el.setAttribute('title', I18N[key]);
        }
    });

    /* aria-label attributes */
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
        var key = el.dataset.i18nAria;
        if (Object.prototype.hasOwnProperty.call(I18N, key)) {
            el.setAttribute('aria-label', I18N[key]);
        }
    });

    /* Re-init reanimate share button if morphed */
    const btnReanimate = document.getElementById('btnReanimate');
    if (btnReanimate && btnReanimate.dataset.btnKey && btnReanimate.classList.contains('btn-reanimate--share')) {
        const label = btnReanimate.querySelector('.btn-reanimate__label');
        if (label && Object.prototype.hasOwnProperty.call(I18N, btnReanimate.dataset.btnKey)) {
            label.textContent = I18N[btnReanimate.dataset.btnKey];
        }
    }

    /* Re-render open modal if any */
    var modalEl = document.getElementById('modal');
    if (modalEl && modalEl.classList.contains('open')) {
        var activePart = document.querySelector('.part-active');
        if (activePart && activePart.dataset.part && typeof openModal === 'function') {
            openModal(activePart.dataset.part);
        }
    }
}

/* ── Lang button wiring ── */
document.addEventListener('DOMContentLoaded', function () {
    var langBtn = document.getElementById('langBtn');
    if (!langBtn) return;
    langBtn.addEventListener('click', function () {
        setLanguage(currentLang === 'es' ? 'en' : 'es');
    });

    /* Restore from localStorage or use default */
    var saved;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    setLanguage(saved || currentLang);
});
