/* =====================================================
   SCROLL CONTROL — one section per gesture
   Prevents skipping multiple snap sections on fast scroll.
   Tracks current slide for the progress nav.
   ===================================================== */

function initScrollControl() {
    var corpse = document.getElementById('corpse');
    if (!corpse) return;

    var slides = Array.from(corpse.querySelectorAll('.corpse__item'));
    if (!slides.length) return;

    var currentSlide = 0;
    var isScrolling = false;
    var SCROLL_COOLDOWN = 1000;

    function goToSlide(index) {
        if (index < 0 || index >= slides.length) return;
        if (isScrolling) return;

        isScrolling = true;
        currentSlide = index;

        slides[index].scrollIntoView({ behavior: 'smooth' });

        window.dispatchEvent(new CustomEvent('slidechange', { detail: { index: index } }));

        setTimeout(function () {
            isScrolling = false;
        }, SCROLL_COOLDOWN);
    }

    /* ── IntersectionObserver — track current slide for nav dots ──
       Use multiple thresholds so we still pick the most-visible slide
       even when slides have different heights (e.g. injected slides with
       overflow:hidden + custom height). */
    var observer = new IntersectionObserver(function (entries) {
        // Track the visibility ratio for every slide we know about
        entries.forEach(function (entry) {
            entry.target.__visibility = entry.intersectionRatio;
        });

        // Pick the most visible slide across ALL slides (not just entries)
        var best = null;
        var bestRatio = 0;
        slides.forEach(function (slide) {
            var r = slide.__visibility || 0;
            if (r > bestRatio) {
                bestRatio = r;
                best = slide;
            }
        });

        if (best && bestRatio > 0.3) {
            var idx = slides.indexOf(best);
            if (idx !== -1 && idx !== currentSlide) {
                currentSlide = idx;
                window.dispatchEvent(new CustomEvent('slidechange', { detail: { index: idx } }));
            }
        }
    }, {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px"
    });

    slides.forEach(function (slide) {
        observer.observe(slide);
    });

    window.scrollControl = {
        goToSlide: goToSlide,
        getCurrentSlide: function () { return currentSlide; }
    };

    /* ── Progress Nav ── */
    var slideNav = document.getElementById('slideNav');
    if (slideNav) {
        var dots = slideNav.querySelectorAll('.slide-nav__dot');

        // Click to navigate — use the dot's position so non-numeric data-slide values work too
        dots.forEach(function (dot, i) {
            dot.addEventListener('click', function () {
                goToSlide(i);
            });
        });

        // Update active dot on slide change
        window.addEventListener('slidechange', function (e) {
            var idx = e.detail.index;
            dots.forEach(function (d, i) {
                d.classList.toggle('slide-nav__dot--active', i === idx);
            });
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollControl);
} else {
    initScrollControl();
}
