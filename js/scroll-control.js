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

    /* ── Active-slide tracking for the nav dots ──
       We can't rely on IntersectionObserver's intersectionRatio: that's the
       fraction of the SLIDE that's visible, which breaks for slides taller
       than the viewport (e.g. the sponsors/cause slide scrolls naturally and
       can be 2–4× viewport height, so it never reaches a high ratio and the
       dot never activates / pulses). Instead we measure how much of the
       VIEWPORT each slide covers — that's reliable regardless of slide height.

       IntersectionObserver still drives WHEN we recompute (it fires on every
       threshold crossing + scroll), but the decision uses viewport coverage. */
    function updateActiveSlide() {
        var vh = window.innerHeight || document.documentElement.clientHeight;
        var best = -1;
        var bestCoverage = 0;

        slides.forEach(function (slide, i) {
            var rect = slide.getBoundingClientRect();
            // Visible height of this slide within the viewport, clamped to [0, vh].
            var visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
            if (visible < 0) visible = 0;
            var coverage = visible / vh; // fraction of the SCREEN this slide fills
            if (coverage > bestCoverage) {
                bestCoverage = coverage;
                best = i;
            }
        });

        // A slide needs to fill at least ~40% of the screen to claim the nav.
        if (best !== -1 && bestCoverage > 0.4 && best !== currentSlide) {
            currentSlide = best;
            window.dispatchEvent(new CustomEvent('slidechange', { detail: { index: best } }));
        }
    }

    var observer = new IntersectionObserver(function () {
        updateActiveSlide();
    }, {
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px"
    });

    slides.forEach(function (slide) {
        observer.observe(slide);
    });

    // IntersectionObserver fires sparsely while scrolling THROUGH a tall slide
    // (no threshold is crossed mid-slide), so also recompute on scroll — but
    // throttle to a rAF so it stays cheap.
    var scrollTick = false;
    window.addEventListener('scroll', function () {
        if (scrollTick) return;
        scrollTick = true;
        window.requestAnimationFrame(function () {
            scrollTick = false;
            updateActiveSlide();
        });
    }, { passive: true });

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
