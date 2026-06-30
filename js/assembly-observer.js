/* =====================================================
   PART ENTRY TRANSITIONS — a single labelled cursor builds a
   corpse section's OWN real pieces on scroll-enter. Each piece
   is first "redrawn" as a draft of its discipline's real
   process (sized to that piece's own footprint), then the real
   piece is revealed and the draft removed:

     • HEAD  (.corpse__item--upper)  "Diseño" — UX wireframe
       (dashed placeholder + skeleton) → UI piece.
     • TRUNK (.corpse__item--middle) "Desarrollo" — DOM/code
       node (typing code) → rendered piece. Arms and hands are
       built as SEPARATE nodes (each draft matches its own size).
     • LEGS  (.corpse__item--lower)  "Escalabilidad" — process
       varies per piece by its modal topic (no concept text):
         · legs  → responsive resize frame (viewport/fluid),
         · feet  → modular block grid (modular architecture),
         · tail  → legacy code being struck out (legacy/bundle).

   Invariant: the idle state is ALWAYS the pristine, fully
   interactive section. Drafts + the armed/hidden state exist
   only mid-build; settle() removes every helper + draft, so the
   assembled creature is byte-for-byte the original (modal,
   highlights, hit-testing untouched).

   Each step is { el, variant, exclude }: el is revealed; the
   draft uses `variant` (defaults to the section type); when a
   piece nests another step (hand inside arm, foot inside leg)
   `exclude` drops that child so the draft matches the parent's
   own footprint, not the union. Cursor + drafts are aligned by
   measuring FINAL rects while pristine; the cursor moves with a
   requestAnimationFrame tween (inline transform, NO css
   transition — transitions here can stick at their start value).
   ===================================================== */
(function () {
    function setup(opts) {
        var section = document.querySelector(opts.sectionSel);
        if (!section) return;

        var steps = opts.getSteps(section).filter(function (s) { return s && s.el; });
        if (!steps.length) return;
        var stepEls = steps.map(function (s) { return s.el; });

        var cursor = section.querySelector('.asm-cursor');
        var nib = cursor && cursor.querySelector('.asm-cursor__nib');
        var defaultVariant = opts.draftType;

        var prefersReduced = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReduced || !('IntersectionObserver' in window)) {
            if (cursor) cursor.style.display = 'none';
            return;
        }

        var timers = [];
        var playing = false;
        var hasPlayed = false;   // the build sequence (with sound) runs ONCE per section
        function clearTimers() { timers.forEach(clearTimeout); timers = []; }

        function center(el) {
            var r = el.getBoundingClientRect();
            return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
        }
        // Footprint of `el` relative to the section, optionally excluding a
        // nested child (so an arm draft doesn't swallow the hand, etc).
        function rectOf(el, exclude) {
            var sr = section.getBoundingClientRect();
            var box;
            if (exclude && el.children.length) {
                var l = Infinity, t = Infinity, r = -Infinity, b = -Infinity, any = false;
                Array.prototype.forEach.call(el.children, function (c) {
                    if (c === exclude || c.contains(exclude)) return;
                    var cr = c.getBoundingClientRect();
                    if (!cr.width && !cr.height) return;
                    any = true;
                    l = Math.min(l, cr.left); t = Math.min(t, cr.top);
                    r = Math.max(r, cr.right); b = Math.max(b, cr.bottom);
                });
                box = any ? { left: l, top: t, width: r - l, height: b - t } : el.getBoundingClientRect();
            } else {
                box = el.getBoundingClientRect();
            }
            return { left: box.left - sr.left, top: box.top - sr.top, w: box.width, h: box.height, sw: sr.width, sh: sr.height };
        }
        function esc(s) {
            return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
                .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        var curX = 0, curY = 0, rafId = null;
        function cancelTween() { if (rafId) { cancelAnimationFrame(rafId); rafId = null; } }
        function easeInOut(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }
        function tweenTo(tx, ty, dur) {
            if (!cursor) return;
            cancelTween();
            cursor.style.transition = 'none';
            var sx = curX, sy = curY, dx = tx - sx, dy = ty - sy, t0 = null;
            function frame(now) {
                if (t0 === null) t0 = now;
                var p = dur > 0 ? Math.min(1, (now - t0) / dur) : 1;
                var e = easeInOut(p);
                curX = sx + dx * e; curY = sy + dy * e;
                cursor.style.transform = 'translate(' + curX + 'px,' + curY + 'px)';
                if (p < 1) { rafId = requestAnimationFrame(frame); }
                else { curX = tx; curY = ty; rafId = null; }
            }
            rafId = requestAnimationFrame(frame);
        }
        function cursorTick() {
            if (!cursor) return;
            cursor.classList.remove('is-sketching');
            void cursor.offsetWidth;
            cursor.classList.add('is-sketching');
        }

        /* PROCESS DRAFT — redraw the piece in its discipline's process,
           sized to the piece's own footprint (clamped into the section). */
        var DRAFT_LIFE = 760;
        var drafts = [];
        function clearDrafts() { drafts.forEach(function (d) { d.remove(); }); drafts = []; }
        function spawnDraft(rect, variant, label) {
            if (!variant) return;
            var minW = 50, minH = 34;
            var w = Math.max(minW, rect.w), h = Math.max(minH, rect.h);
            var cx = rect.left + rect.w / 2, cy = rect.top + rect.h / 2;
            var left = Math.max(6, Math.min(rect.sw - w - 6, cx - w / 2));
            var top = Math.max(40, Math.min(rect.sh - h - 8, cy - h / 2));
            var d = document.createElement('div');
            d.setAttribute('aria-hidden', 'true');
            d.className = 'asm-draft asm-draft--' + variant;
            d.style.left = left + 'px';
            d.style.top = top + 'px';
            d.style.width = w + 'px';
            d.style.height = h + 'px';
            d.style.setProperty('--asm-life', DRAFT_LIFE + 'ms');

            if (variant === 'design') {
                d.innerHTML = '<span class="asm-draft__bar"></span><span class="asm-draft__bar"></span><span class="asm-draft__bar"></span>';
            } else if (variant === 'dev') {
                // rows of syntax-coloured tokens that "type" in + a caret.
                var rows = [
                    [['kw', 16], ['str', 30], ['txt', 12]],
                    [['txt', 10], ['kw', 20], ['str', 24]],
                    [['kw', 13], ['txt', 34]]
                ];
                var delay = 0, html = '';
                for (var ri = 0; ri < rows.length; ri++) {
                    html += '<span class="asm-draft__row">';
                    for (var ci = 0; ci < rows[ri].length; ci++) {
                        html += '<span class="asm-draft__tok asm-draft__tok--' + rows[ri][ci][0]
                            + '" style="width:' + rows[ri][ci][1] + '%;animation-delay:' + delay + 'ms"></span>';
                        delay += 90;
                    }
                    if (ri === rows.length - 1) html += '<span class="asm-draft__caret"></span>';
                    html += '</span>';
                }
                d.innerHTML = html;
            } else if (variant === 'resize') {
                // responsive resize frame: corner brackets + side handles that
                // widen (scaleX). No center arrow (it collided with the cursor).
                d.innerHTML = '<span class="asm-draft__br tl"></span><span class="asm-draft__br tr"></span>'
                    + '<span class="asm-draft__br bl"></span><span class="asm-draft__br br"></span>'
                    + '<span class="asm-draft__handle l"></span><span class="asm-draft__handle r"></span>';
            } else if (variant === 'modular') {
                // modular block grid (modular architecture / BEM foundation).
                var cells = '';
                for (var n = 0; n < 6; n++) cells += '<span class="asm-draft__cell" style="animation-delay:' + (n * 70) + 'ms"></span>';
                d.innerHTML = '<div class="asm-draft__grid">' + cells + '</div>';
            } else if (variant === 'legacy') {
                // legacy code being struck through / removed (dead code, bundle).
                d.innerHTML =
                    '<span class="asm-draft__old"><i class="asm-draft__strike"></i></span>'
                    + '<span class="asm-draft__old"><i class="asm-draft__strike"></i></span>'
                    + '<span class="asm-draft__old asm-draft__old--short"><i class="asm-draft__strike"></i></span>';
            }
            section.appendChild(d);
            drafts.push(d);
            setTimeout(function () {
                d.remove();
                var k = drafts.indexOf(d);
                if (k >= 0) drafts.splice(k, 1);
            }, DRAFT_LIFE);
        }

        function arm() {
            section.classList.add('is-assembling');
            clearDrafts();
            stepEls.forEach(function (el) {
                el.classList.add('asm-armed');
                el.classList.remove('asm-drawn');
            });
            cancelTween();
            curX = 0; curY = 0;
            if (cursor) {
                cursor.style.transition = 'none';
                cursor.style.opacity = '0';
                cursor.style.transform = 'translate(0,0)';
            }
        }

        function settle() {
            playing = false;
            section.classList.remove('is-assembling');
            clearDrafts();
            cancelTween();
            curX = 0; curY = 0;
            stepEls.forEach(function (el) {
                el.classList.remove('asm-armed', 'asm-drawn');
            });
            if (cursor) {
                cursor.classList.remove('is-sketching');
                cursor.style.transition = 'none';
                cursor.style.opacity = '0';
                cursor.style.transform = 'translate(0,0)';
            }
        }

        var MOVE = opts.move || 260;     // cursor travel to a piece
        var HOLD = opts.hold || 300;     // draft shown before the real piece resolves
        var GAP = opts.gap || 120;       // pause after a piece resolves
        var STEP = MOVE + HOLD + GAP;
        var START = opts.start || 440;

        function play() {
            clearTimers();
            playing = true;

            // reset audio step sequences for this section's variants
            if (window.AudioSynth && AudioSynth.resetProcessIndex) {
                var kinds = {};
                steps.forEach(function (s) { kinds[s.variant || defaultVariant] = 1; });
                Object.keys(kinds).forEach(function (k) { AudioSynth.resetProcessIndex(k); });
            }

            // Measure final centres + rects while pristine, then arm.
            stepEls.forEach(function (el) { el.classList.remove('asm-armed', 'asm-drawn'); });
            void section.offsetWidth;
            var targets = stepEls.map(center);

            arm();
            void section.offsetWidth;

            var home = nib ? center(nib) : { x: 0, y: 0 };

            if (cursor) {
                timers.push(setTimeout(function () { cursor.style.opacity = '1'; }, 140));
            }

            steps.forEach(function (s, i) {
                var moveAt = START + i * STEP;
                var target = targets[i];
                // cursor travels onto the piece
                timers.push(setTimeout(function () {
                    if (cursor) {
                        cursor.style.opacity = '1';
                        tweenTo(target.x - home.x, target.y - home.y, MOVE);
                    }
                }, moveAt));
                // draft of the piece's process is drawn under the cursor.
                // Measured live (not pre-measured) so it lands on the piece's
                // current position even if the creature has native motion.
                var draftAt = moveAt + MOVE;
                timers.push(setTimeout(function () {
                    var v = s.variant || defaultVariant;
                    spawnDraft(rectOf(s.el, s.exclude), v, s.label);
                    cursorTick();
                    if (window.AudioSynth && AudioSynth.playProcessStep) AudioSynth.playProcessStep(v);
                }, draftAt));
                // the real piece resolves in as the draft dissolves
                timers.push(setTimeout(function () {
                    s.el.classList.remove('asm-armed');
                    s.el.classList.add('asm-drawn');
                }, draftAt + HOLD));
            });

            var done = START + steps.length * STEP + 200;
            timers.push(setTimeout(function () {
                if (cursor) {
                    cursor.classList.remove('is-sketching');
                    cursor.style.opacity = '0';
                }
            }, done));
            // Mark "played" only when the build runs to completion. abort()
            // clears timers, so an interrupted build leaves hasPlayed false and
            // can replay (with sound) on the next entry — matching the old
            // behaviour, while a fully-finished build never replays.
            timers.push(setTimeout(function () { hasPlayed = true; settle(); }, done + 400));
        }

        function abort() {
            if (!playing) return;
            clearTimers();
            settle();
        }
        function enter() {
            if (playing) return;
            // After the one-time build, re-entering must NOT replay the
            // sequence or its sound — just show the pristine assembled section.
            if (hasPlayed) { settle(); return; }
            play();
        }

        // Start EMPTY from first paint so entering never flashes the piece.
        arm();

        var corpse = document.getElementById('corpse');
        var slides = corpse ? Array.prototype.slice.call(corpse.querySelectorAll('.corpse__item')) : [];
        var ownIndex = slides.indexOf(section);
        window.addEventListener('slidechange', function (e) {
            var idx = e && e.detail ? e.detail.index : -1;
            if (idx === ownIndex) { enter(); } else { abort(); }
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.55) { enter(); }
                else if (!entry.isIntersecting) { abort(); }
            });
        }, { threshold: [0, 0.55, 1] });
        observer.observe(section);
    }

    function step(el, variant, exclude, label) {
        return { el: el, variant: variant || null, exclude: exclude || null, label: label || null };
    }

    function initAll() {
        // HEAD — "Diseño": each piece wireframed (UX) → real piece (UI).
        setup({
            sectionSel: '.corpse__item--upper',
            draftType: 'design',
            move: 250, hold: 280, gap: 110,
            getSteps: function (s) {
                return [
                    step(s.querySelector('.head')), step(s.querySelector('.neck')),
                    step(s.querySelector('.ear--l')), step(s.querySelector('.ear--r')),
                    step(s.querySelector('.face__eyes')), step(s.querySelector('.nose')),
                    step(s.querySelector('.mouth')), step(s.querySelector('.brain')),
                    step(s.querySelector('.hair')), step(s.querySelector('.glasses')),
                    step(s.querySelector('.blush'))
                ];
            }
        });

        // TRUNK — "Desarrollo": each piece a DOM/code node → rendered.
        // Arms and hands are SEPARATE nodes; each arm draft excludes its hand
        // so its box matches the arm only, and each hand gets its own node.
        setup({
            sectionSel: '.corpse__item--middle',
            draftType: 'dev',
            move: 250, hold: 290, gap: 110,
            getSteps: function (s) {
                var armL = s.querySelector('.arm--left'), armR = s.querySelector('.arm--right');
                var handL = armL && armL.querySelector('.hand');
                var handR = armR && armR.querySelector('.hand');
                return [
                    step(s.querySelector('.trunk__body')), step(s.querySelector('.trunk__collar')),
                    step(s.querySelector('.trunk__waist')), step(s.querySelector('.trunk__belly')),
                    step(s.querySelector('.heart-window')),
                    step(armL, null, handL), step(handL),
                    step(armR, null, handR), step(handR)
                ];
            }
        });

        // LEGS — "Escalabilidad": legs, feet and tail are separate pieces,
        // each drawn as the process tied to its modal topic (no concept text):
        //   leg  → responsive resize frame (viewport / fluid layout)
        //   foot → modular block grid (modular architecture / foundation)
        //   tail → legacy code struck out (legacy / bundle / dead code)
        setup({
            sectionSel: '.corpse__item--lower',
            draftType: 'resize',
            move: 260, hold: 300, gap: 120,
            getSteps: function (s) {
                var legL = s.querySelector('.leg--l'), legR = s.querySelector('.leg--r');
                var footL = legL && legL.querySelector('.foot');
                var footR = legR && legR.querySelector('.foot');
                return [
                    step(s.querySelector('.pubis')),
                    step(legL, 'resize', footL), step(footL, 'modular'),
                    step(legR, 'resize', footR), step(footR, 'modular'),
                    step(s.querySelector('.tail'), 'legacy')
                ];
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAll);
    } else {
        initAll();
    }
}());
