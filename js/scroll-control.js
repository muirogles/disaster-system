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

    function onWheel(e) {
        if (document.documentElement.classList.contains('scroll-locked')) return;

        e.preventDefault();

        if (isScrolling) return;

        if (e.deltaY > 0) {
            goToSlide(currentSlide + 1);
        } else if (e.deltaY < 0) {
            goToSlide(currentSlide - 1);
        }
    }

    var touchStartY = 0;
    var touchStartTime = 0;
    var SWIPE_THRESHOLD = 50;

    function onTouchStart(e) {
        if (document.documentElement.classList.contains('scroll-locked')) return;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
    }

    function onTouchEnd(e) {
        if (document.documentElement.classList.contains('scroll-locked')) return;
        if (isScrolling) return;

        var deltaY = touchStartY - e.changedTouches[0].clientY;
        var deltaTime = Date.now() - touchStartTime;

        if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;
        if (deltaTime > 800) return;

        if (deltaY > 0) {
            goToSlide(currentSlide + 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }

    function onKeydown(e) {
        if (document.documentElement.classList.contains('scroll-locked')) return;

        switch (e.key) {
            case 'ArrowDown':
            case 'PageDown':
            case ' ':
                e.preventDefault();
                goToSlide(currentSlide + 1);
                break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                goToSlide(currentSlide - 1);
                break;
            case 'Home':
                e.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                goToSlide(slides.length - 1);
                break;
        }
    }

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
    }, { threshold: 0.6 });

    slides.forEach(function (slide) {
        observer.observe(slide);
    });

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    document.addEventListener('keydown', onKeydown);

    window.scrollControl = {
        goToSlide: goToSlide,
        getCurrentSlide: function () { return currentSlide; }
    };
})();
