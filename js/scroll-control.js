/* =====================================================
   SCROLL CONTROL — one section per gesture
   Prevents skipping multiple snap sections on fast scroll.
   Tracks current slide for the progress nav.
   ===================================================== */

(function () {
    var corpse = document.getElementById('corpse');
    if (!corpse) return;

    var slides = Array.from(corpse.querySelectorAll('.corpse__item'));
    if (!slides.length) return;

    var currentSlide = 0;
    var isScrolling = false;
    var SCROLL_COOLDOWN = 850;

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

    /* ── IntersectionObserver — track current slide for nav dots ── */
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                var idx = slides.indexOf(entry.target);
                if (idx !== -1 && !isScrolling) {
                    currentSlide = idx;
                    window.dispatchEvent(new CustomEvent('slidechange', { detail: { index: idx } }));
                }
            }
        });
    }, { threshold: 0.3 });

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

        // Click to navigate
        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                var idx = parseInt(dot.dataset.slide, 10);
                goToSlide(idx);
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
})();
