/* =====================================================
   MODAL SYSTEM — Panel lateral con errores y soluciones
   ===================================================== */

/* ── Outline SVG icons per body part ── */
const PART_ICONS = {
    brain:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.16Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"/></svg>`,
    eyes:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    ears:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 0 1-7 0"/><path d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"/></svg>`,
    mouth:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l4 6h10l4-6"/><path d="M7 12s.5 5 5 5 5-5 5-5"/></svg>`,
    heart:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    torso:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3H6l-2 7h5l-1 11h8l-1-11h5L18 3z"/></svg>`,
    arms:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6V2"/><path d="m8 10-4-4 1.5-1.5"/><path d="m16 10 4-4-1.5-1.5"/><path d="M12 14v8"/><path d="m8 18-3 3"/><path d="m16 18 3 3"/></svg>`,
    hands:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>`,
    legs:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v10.5l-3 3V22"/><path d="M14 2v10.5l3 3V22"/><path d="M8 22h4"/><path d="M12 22h4"/></svg>`,
    feet:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5c0 1.9-.68 3.02-2 4l-2 2"/><path d="M3.14 18a2 2 0 0 0 1.86 2h5a2 2 0 0 0 1.86-2.5l-.64-2.5H4l-.86 3z"/><path d="M20 16v-2.38C20 11.5 21.03 10.5 21 8c-.03-2.72-1.49-6-4.5-6C14.63 2 14 3.8 14 5c0 1.9.68 3.02 2 4l2 2"/><path d="M20.86 18a2 2 0 0 1-1.86 2h-5a2 2 0 0 1-1.86-2.5l.64-2.5H20l.86 3z"/></svg>`,
    tail:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z"/><path d="M12 12v10"/><path d="M9 19l3 3 3-3"/></svg>`,
};


const TOOL_URLS = {
    'Tokens Studio':                   'https://tokens.studio/',
    'Style Dictionary':                'https://styledictionary.com/',
    'axe DevTools':                    'https://www.deque.com/axe/devtools/',
    'Stark (Figma)':                   'https://www.getstark.co/',
    'Lighthouse':                      'https://developer.chrome.com/docs/lighthouse/',
    'NVDA / VoiceOver':                'https://www.nvaccess.org/',
    'Accessibility Insights':          'https://accessibilityinsights.io/',
    'i18next':                         'https://www.i18next.com/',
    'Pseudolocalization':              'https://lingohub.com/academy/best-practices/pseudolocalization',
    'Chromatic':                       'https://www.chromatic.com/',
    'Figma Tokens Plugin':             'https://www.figma.com/community/plugin/843461159747178978',
    'CSS Grid Inspector':              'https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/',
    'VisBug':                          'https://visbug.web.app/',
    'CSS Stacking Context Inspector':  'https://github.com/andreadev-it/stacking-contexts-inspector',
    'Touch Target Checker':            'https://www.google.com/accessibility/for-developers/',
    'Chrome Device Mode':              'https://developer.chrome.com/docs/devtools/device-mode/',
    'Responsively':                    'https://responsively.app/',
    'Polypane':                        'https://polypane.app/',
    'Storybook':                       'https://storybook.js.org/',
    'Stylelint':                       'https://stylelint.io/',
    'Bundlephobia':                    'https://bundlephobia.com/',
    'Knip':                            'https://knip.dev/',
};
function getPartIconHtml(partKey) {
    const svg = PART_ICONS[partKey] || '';
    return svg ? `<span class="modal__title-icon" aria-hidden="true">${svg}</span>` : '';
}

function stripEmoji(str) {
    return str.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '').trim();
}
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalConcept = document.getElementById('modalConcept');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const corpseEl = document.getElementById('corpse');
let activePart = null;
let activePartKey = null;

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Which slide owns each part — used to keep sibling decorations visible */
const PART_SECTIONS = {
    brain: 'head', eyes: 'head', ears: 'head', mouth: 'head',
    heart: 'trunk', torso: 'trunk', arms: 'trunk', hands: 'trunk',
    legs: 'legs', feet: 'legs', tail: 'legs'
};

function getSlideForPart(partKey) {
    const section = PART_SECTIONS[partKey];
    if (section === 'head') return 1;
    if (section === 'trunk') return 2;
    if (section === 'legs') return 3;
    return null;
}

function buildModalContent(data) {
    let html = '';
    data.errors.forEach((err, i) => {
        html += '<div class="modal__section">'
            + '<span class="modal__section-num" aria-hidden="true">0' + (i + 1) + '</span>'
            + '<p class="modal__text">' + err.desc + '</p>'
            + (err.visual ? buildVisualDemo(err.visual) : '')
            + '</div>';
    });

    /* Add recommended tools if available */
    if (data.tools) {
        const toolsTitle = I18N && I18N['modal.tools.title'] ? I18N['modal.tools.title'] : 'Recommended tools';
        html += `<div class="modal__tools">
            <h3 class="modal__tools-title">${toolsTitle}</h3>
            <div class="modal__tools-grid">`;
        data.tools.forEach(tool => {
            const url = TOOL_URLS[tool.name];
            const nameHtml = url
                ? '<a class="modal__tool-name" href="' + url + '" target="_blank" rel="noopener noreferrer">' + tool.name + ' <span class="modal__tool-link-icon" aria-hidden="true">↗</span></a>'
                : '<div class="modal__tool-name">' + tool.name + '</div>';
            html += '<div class="modal__tool">' + nameHtml + '</div>';
        });
        html += `</div></div>`;
    }

    return html;
}

function highlightPart(partKey) {
    /* Remove old highlights */
    document.querySelectorAll('.part-active').forEach(el => el.classList.remove('part-active'));
    document.querySelectorAll('.section-active').forEach(el => el.classList.remove('section-active'));
    document.querySelectorAll('.part-has-active-child').forEach(el => el.classList.remove('part-has-active-child'));

    /* Highlight ALL elements with this data-part */
    document.querySelectorAll(`[data-part="${partKey}"]`).forEach(el => {
        el.classList.add('part-active');

        /* If this part is nested inside another [data-part], mark that ancestor
           so it doesn't get dimmed (e.g. heart-window inside trunk__body) */
        let ancestor = el.parentElement;
        while (ancestor && ancestor !== corpseEl) {
            if (ancestor.hasAttribute('data-part') && ancestor.dataset.part !== partKey) {
                ancestor.classList.add('part-has-active-child');
            }
            ancestor = ancestor.parentElement;
        }
    });

    /* Mark the parent slide so sibling decorations stay colorful */
    const slideIndex = getSlideForPart(partKey);
    if (slideIndex !== null) {
        const slides = corpseEl.querySelectorAll('.corpse__item');
        if (slides[slideIndex]) {
            slides[slideIndex].classList.add('section-active');
        }
    }

    activePart = document.querySelector(`[data-part="${partKey}"]`);
    activePartKey = partKey;
}

function openModal(partKey) {
    if (!I18N || !I18N['modal.content']) return;
    const data = I18N['modal.content'][partKey];
    if (!data) return;

    const isAlreadyOpen = modal.classList.contains('open');
    const isSameSection = activePartKey && PART_SECTIONS[activePartKey] === PART_SECTIONS[partKey];

    if (isAlreadyOpen && isSameSection && activePartKey !== partKey) {
        /* Same section, different part — smooth swap without close/reopen */
        modalBody.classList.add('modal__body--transitioning');

        setTimeout(() => {
            modalTitle.innerHTML = getPartIconHtml(partKey) + '<span>' + stripEmoji(data.title) + '</span>';
            modalSubtitle.textContent = data.subtitle;
            if (data.concept) {
                modalConcept.textContent = data.concept;
                modalConcept.style.display = '';
            } else {
                modalConcept.style.display = 'none';
            }
            modalBody.innerHTML = buildModalContent(data);
            highlightPart(partKey);

            requestAnimationFrame(() => {
                modalBody.classList.remove('modal__body--transitioning');
                modal.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }, 200);
        return;
    }

    if (isAlreadyOpen && activePartKey === partKey) {
        /* Same part clicked — close modal */
        closeModal();
        return;
    }

    /* Set content */
    modalTitle.innerHTML = getPartIconHtml(partKey) + '<span>' + stripEmoji(data.title) + '</span>';
    modalSubtitle.textContent = data.subtitle;
    if (data.concept) {
        modalConcept.textContent = data.concept;
        modalConcept.style.display = '';
    } else {
        modalConcept.style.display = 'none';
    }
    modalBody.innerHTML = buildModalContent(data);

    /* Reset scroll before opening — prevents stale scroll from previous section */
    modal.scrollTop = 0;

    /* Open modal */
    modal.classList.add('open');
    corpseEl.classList.add('has-modal');
    document.documentElement.classList.add('scroll-locked');
    document.documentElement.classList.add('modal-open');

    highlightPart(partKey);
}

function closeModal() {
    modal.classList.remove('open');
    corpseEl.classList.remove('has-modal');
    document.documentElement.classList.remove('scroll-locked');
    document.documentElement.classList.remove('modal-open');
    document.querySelectorAll('.part-active').forEach(el => el.classList.remove('part-active'));
    document.querySelectorAll('.section-active').forEach(el => el.classList.remove('section-active'));
    document.querySelectorAll('.part-has-active-child').forEach(el => el.classList.remove('part-has-active-child'));
    activePart = null;
    activePartKey = null;
}

/* Selectors whose clicks should NEVER close the modal even when
   they land outside the panel (language switcher, theme toggle,
   fixed controls that live above the modal in z-order). */
const MODAL_KEEP_OPEN_SELECTOR = '.lang-control, .lang-btn, #langBtn, .theme-fab, #themeBtn';

/* Unified click handler — open on data-part, close on outside click */
document.addEventListener('click', (e) => {
    const partEl = e.target.closest('[data-part]');
    if (partEl) {
        openModal(partEl.dataset.part);
        return;
    }
    /* Ignore clicks on persistent controls (lang, theme toggle…) */
    if (e.target.closest(MODAL_KEEP_OPEN_SELECTOR)) {
        return;
    }
    /* Close if modal is open and click landed outside the panel */
    if (modal.classList.contains('open') && !modal.contains(e.target)) {
        closeModal();
    }
});

/* =====================================================
   THEME TOGGLE — light/dark switcher
   Reads from localStorage, applies data-theme on <html>.
   Initial theme was applied pre-paint by the inline script
   in index.html <head>.
   ===================================================== */
(function () {
    const btn = document.getElementById('themeBtn');
    if (!btn) return;

    const root = document.documentElement;

    function currentTheme() {
        return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    }

    function applyTheme(next) {
        if (next === 'light') {
            root.setAttribute('data-theme', 'light');
        } else {
            root.removeAttribute('data-theme');
        }
        try { localStorage.setItem('theme', next); } catch (e) {}
        btn.setAttribute('aria-pressed', String(next === 'light'));
    }

    // Sync aria-pressed with the pre-paint state
    btn.setAttribute('aria-pressed', String(currentTheme() === 'light'));

    btn.addEventListener('click', function () {
        applyTheme(currentTheme() === 'light' ? 'dark' : 'light');
    });
})();

modalClose.addEventListener('click', closeModal);

/* Close with Escape key */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});


/*TODO: remove or adapt - old snippets
<div class="error-card">
    <div class="error-card__side error-card__side--error">
        <div class="error-card__label error-card__label--error">Error</div>
        <div class="error-card__code error-card__code--error">${escapeHtml(err.errorCode)}</div>
        <div class="error-card__desc">${err.error}</div>
    </div>
    <div class="error-card__side error-card__side--solution">
        <div class="error-card__label error-card__label--solution">Soluci\u00f3n</div>
        <div class="error-card__code error-card__code--solution">${escapeHtml(err.solutionCode)}</div>
        <div class="error-card__desc">${err.solution}</div>
    </div>
</div>
<p class="error-card__explanation">${err.desc}</p>
*/