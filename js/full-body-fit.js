/* =====================================================
   FULL-BODY FIT — portrait phones only
   The full-body slide must show the whole creature AND the whole card on
   one screen (scrolling would jump to the next slide). The card sits at
   the bottom; this sizes the figure (--fc-zoom) to the space between the
   slide-nav icons and the card, and aligns its top (--fc-pad-top).
   Re-fits when the card changes size (reanimation, language) and on
   resize / rotation.
   ===================================================== */
(function () {
    var mq = window.matchMedia('(max-width: 600px) and (orientation: portrait)');
    var BASE_ZOOM = 0.30;   // published size — never grow beyond it
    var GAP = 12;           // px between nav / figure / card

    function init() {
        var slide = document.querySelector('.corpse__item--full');
        if (!slide) return;
        var card = slide.querySelector('.corpse__header');
        var nav = document.getElementById('slideNav');
        var parts = '.hair, .head, .trunk__body, .arm, .hand, .pubis, .leg, .foot, .tail';

        // Painted bounds of the creature (ignores empty wrapper space)
        function figureBounds() {
            var b = { top: Infinity, bottom: -Infinity, left: Infinity, right: -Infinity };
            slide.querySelectorAll('.full-corpse ' + parts.split(', ').join(', .full-corpse ')).forEach(function (el) {
                var cs = getComputedStyle(el);
                if (cs.display === 'none' || parseFloat(cs.opacity) === 0) return;
                var r = el.getBoundingClientRect();
                if (!r.width || !r.height) return;
                b.top = Math.min(b.top, r.top);
                b.bottom = Math.max(b.bottom, r.bottom);
                b.left = Math.min(b.left, r.left);
                b.right = Math.max(b.right, r.right);
            });
            return b;
        }

        function fit() {
            if (!mq.matches) {
                slide.style.removeProperty('--fc-zoom');
                slide.style.removeProperty('--fc-pad-top');
                return;
            }
            // Measure at the published size
            slide.style.setProperty('--fc-zoom', BASE_ZOOM);
            slide.style.setProperty('--fc-pad-top', '0px');

            var s = slide.getBoundingClientRect();
            // nav is fixed to the viewport; the slide fills the viewport when shown
            var navBottom = nav ? nav.getBoundingClientRect().bottom : 64;
            var top = Math.max(navBottom, 0) + GAP;
            var bottom = card.getBoundingClientRect().top - s.top - GAP;

            var b = figureBounds();
            var h = b.bottom - b.top, w = b.right - b.left;
            if (!isFinite(h) || h <= 0) return;

            var zoom = BASE_ZOOM * Math.min(1, (bottom - top) / h, (s.width - 2 * GAP) / w);
            slide.style.setProperty('--fc-zoom', zoom.toFixed(4));

            // Shift so the top of the hair sits just under the nav icons
            var newTop = figureBounds().top - s.top;
            slide.style.setProperty('--fc-pad-top', Math.max(0, top - newTop) + 'px');
        }

        var raf = 0;
        function schedule() {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(fit);
        }

        fit();
        window.addEventListener('resize', schedule);
        if (mq.addEventListener) mq.addEventListener('change', schedule);
        else if (mq.addListener) mq.addListener(schedule);
        if ('ResizeObserver' in window) new ResizeObserver(schedule).observe(card);
        // Reanimation swaps the theme (hides the tail, changes the outfit)
        // (and re-fit once its 1.8s colour/opacity transitions have settled)
        new MutationObserver(function () {
            schedule();
            setTimeout(schedule, 2000);
        }).observe(slide, { attributes: true, attributeFilter: ['data-theme'] });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
}());
