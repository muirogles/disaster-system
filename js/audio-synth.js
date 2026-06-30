/* =====================================================
   AUDIO SYNTHESIZER — Melodic Heartbeat Countdown
   ===================================================== */

const AudioSynth = (function () {
    let audioCtx = null;
    let tensionOsc = null;
    let tensionGain = null;
    let tensionLFO = null;
    let shockOsc = null;
    let shockGain = null;
    let muted = false;   // global mute toggle (sound button)

    async function init() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            await audioCtx.resume();
        }
    }

    /* ── Musical Heartbeat ── */
    async function playTick(secondsLeft) {
        if (muted) return;
        await init();
        const now = audioCtx.currentTime;

        const urgency = (30 - secondsLeft) / 30;
        const beatInterval = 0.9 - urgency * 0.5;

        const chords = [
            [220, 261.63, 329.63],
            [196, 246.94, 293.66],
            [174.61, 220, 261.63],
            [196, 246.94, 329.63]
        ];

        const step = Math.floor((30 - secondsLeft) / 2) % chords.length;
        const chord = chords[step];

        const heartbeat = (time, strength = 1) => {
            const thump = (t, gainValue) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(60, t);

                gain.gain.setValueAtTime(0, t);
                gain.gain.linearRampToValueAtTime(gainValue, t + 0.01);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start(t);
                osc.stop(t + 0.25);
            };

            thump(time, 0.9 * strength);       // lub
            thump(time + 0.18, 0.6 * strength); // dub
        };

        const playChord = (time) => {
            chord.forEach((freq) => {
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, time);

                gain.gain.setValueAtTime(0, time);
                gain.gain.linearRampToValueAtTime(0.08, time + 0.1);
                gain.gain.exponentialRampToValueAtTime(0.001, time + 0.8);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start(time);
                osc.stop(time + 0.8);
            });
        };

        const playLead = (time) => {
            const note = chord[Math.floor(Math.random() * chord.length)] * 2;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(note, time);

            const lfo = audioCtx.createOscillator();
            const lfoGain = audioCtx.createGain();
            lfo.frequency.setValueAtTime(5 + urgency * 6, time);
            lfoGain.gain.setValueAtTime(6, time);

            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);

            gain.gain.setValueAtTime(0, time);
            gain.gain.linearRampToValueAtTime(0.12, time + 0.05);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.5);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(time);
            osc.stop(time + 0.5);
            lfo.start(time);
            lfo.stop(time + 0.5);
        };

        heartbeat(now, 1);
        playChord(now + 0.02);
        playLead(now + 0.05);

        if (secondsLeft <= 10) {
            heartbeat(now + beatInterval * 0.6, 0.9);
            playLead(now + beatInterval * 0.6);
        }

        if (secondsLeft <= 5) {
            heartbeat(now + beatInterval, 1.2);
            playLead(now + beatInterval);

            for (let i = 0; i < 3; i++) {
                const t = now + 0.2 + i * 0.1;

                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();

                osc.type = 'triangle';
                osc.frequency.setValueAtTime(800 + Math.random() * 200, t);

                gain.gain.setValueAtTime(0.1, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

                osc.connect(gain);
                gain.connect(audioCtx.destination);

                osc.start(t);
                osc.stop(t + 0.15);
            }
        }

        updateTension(secondsLeft);
    }

    /* ── Melodic Layer ── */
    const scale = [220, 246.94, 261.63, 293.66, 329.63];

    function playMelody(secondsLeft) {
        const now = audioCtx.currentTime;

        const note = scale[Math.floor(Math.random() * scale.length)];

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note, now);

        const lfo = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();
        lfo.frequency.setValueAtTime(4 + (secondsLeft < 10 ? 6 : 0), now);
        lfoGain.gain.setValueAtTime(5, now);

        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.15, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(now + 0.6);
        lfo.start();
        lfo.stop(now + 0.6);
    }

    /* ── Tension Drone ── */
    async function startTension() {
        if (muted) return;
        await init();
        const now = audioCtx.currentTime;

        tensionOsc = audioCtx.createOscillator();
        tensionGain = audioCtx.createGain();

        tensionOsc.type = 'sine';
        tensionOsc.frequency.setValueAtTime(55, now);

        tensionGain.gain.setValueAtTime(0, now);
        tensionGain.gain.linearRampToValueAtTime(0.05, now + 2);

        tensionLFO = audioCtx.createOscillator();
        const lfoGain = audioCtx.createGain();

        tensionLFO.frequency.setValueAtTime(0.5, now);
        lfoGain.gain.setValueAtTime(0.02, now);

        tensionLFO.connect(lfoGain);
        lfoGain.connect(tensionGain.gain);

        tensionOsc.connect(tensionGain);
        tensionGain.connect(audioCtx.destination);

        tensionOsc.start();
        tensionLFO.start();
    }

    function updateTension(secondsLeft) {
        if (!tensionGain) return;

        const intensity = (30 - secondsLeft) / 30;

        tensionGain.gain.setTargetAtTime(
            0.05 + intensity * 0.1,
            audioCtx.currentTime,
            0.3
        );

        if (tensionLFO) {
            tensionLFO.frequency.setTargetAtTime(
                0.5 + intensity * 4,
                audioCtx.currentTime,
                0.3
            );
        }
    }

    function stopTension() {
        if (tensionGain) {
            tensionGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);

            setTimeout(() => {
                if (tensionOsc) tensionOsc.stop();
                if (tensionLFO) tensionLFO.stop();
            }, 600);
        }
    }

    /* ── FULL ALARM ── */
    async function playAlarm() {
        if (muted) return;
        await init();
        const now = audioCtx.currentTime;

        const master = audioCtx.createGain();
        master.gain.setValueAtTime(1, now);
        master.connect(audioCtx.destination);

        /* ── 1. MASSIVE DETUNED SIREN ── */
        const createSiren = (freq, detune) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(freq, now);
            osc.detune.setValueAtTime(detune, now);

            gain.gain.setValueAtTime(0.4, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 1.5);

            const lfo = audioCtx.createOscillator();
            const lfoGain = audioCtx.createGain();
            lfo.frequency.setValueAtTime(10, now);
            lfoGain.gain.setValueAtTime(500, now);

            lfo.connect(lfoGain);
            lfoGain.connect(osc.frequency);

            osc.connect(gain);
            gain.connect(master);

            osc.start(now);
            osc.stop(now + 1.5);
            lfo.start(now);
            lfo.stop(now + 1.5);
        };

        createSiren(700, -10);
        createSiren(700, 10);
        createSiren(900, 0);

        /* ── 2. SUB BASS SHOCKWAVE ── */
        const sub = audioCtx.createOscillator();
        const subGain = audioCtx.createGain();

        sub.type = 'sine';
        sub.frequency.setValueAtTime(120, now);
        sub.frequency.exponentialRampToValueAtTime(30, now + 0.6);

        subGain.gain.setValueAtTime(1.2, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

        sub.connect(subGain);
        subGain.connect(master);

        sub.start(now);
        sub.stop(now + 0.8);

        /* ── 3. EXPLOSION NOISE BURST ── */
        const bufferSize = audioCtx.sampleRate * 1.2;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            // heavy distorted noise
            data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
        }

        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;

        const noiseGain = audioCtx.createGain();
        noiseGain.gain.setValueAtTime(1.5, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

        noise.connect(noiseGain);
        noiseGain.connect(master);

        noise.start(now);

        /* ── 4. METALLIC IMPACT CLANG ── */
        for (let i = 0; i < 6; i++) {
            const t = now + i * 0.05;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(300 + Math.random() * 1200, t);

            gain.gain.setValueAtTime(0.5, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

            osc.connect(gain);
            gain.connect(master);

            osc.start(t);
            osc.stop(t + 0.2);
        }

        /* ── 5. CHAOTIC GLITCH TAIL ── */
        for (let i = 0; i < 12; i++) {
            const t = now + 0.2 + i * 0.07;

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'square';
            osc.frequency.setValueAtTime(
                500 + Math.random() * 1500,
                t
            );

            gain.gain.setValueAtTime(0.25, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

            osc.connect(gain);
            gain.connect(master);

            osc.start(t);
            osc.stop(t + 0.15);
        }
    }

    /* ── Impact ── */
    async function playImpact() {
        if (muted) return;
        await init();
        const now = audioCtx.currentTime;

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(40, now + 0.4);

        gain.gain.setValueAtTime(0.6, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start();
        osc.stop(now + 0.4);
    }

    /* ── Shock (UNCHANGED) ── */
    async function startShock() {
        if (muted) return;
        await init();

        shockOsc = audioCtx.createOscillator();
        shockGain = audioCtx.createGain();

        shockOsc.type = 'sawtooth';
        shockOsc.frequency.setValueAtTime(50, audioCtx.currentTime);

        shockGain.gain.setValueAtTime(0.2, audioCtx.currentTime);

        shockOsc.connect(shockGain);
        shockGain.connect(audioCtx.destination);

        shockOsc.start();
    }

    async function stopShock() {
        if (shockGain && shockOsc) {
            shockGain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.2);
            shockOsc.stop(audioCtx.currentTime + 0.2);
        }
    }

    /* PROCESS-STEP CUES — short sounds fired as each piece is placed during
       the section build transitions, one timbre per discipline so the audio
       matches the visual: design = pencil + pad note (UX->UI); dev = keyboard
       clicks (built in code); resize = elastic upward glide (responsive);
       modular = blocky ticks (modular architecture); legacy = descending sweep
       + noise (legacy cleanup). Gentle + short; play only when the context is
       already running (a prior gesture), never forcing autoplay. */
    let processIndex = {};
    function resetProcessIndex(kind) { processIndex[kind] = 0; }
    function noiseBurst(t, dur, freq, q, peak) {
        const size = Math.floor(audioCtx.sampleRate * dur);
        const buf = audioCtx.createBuffer(1, size, audioCtx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < size; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / size);
        const src = audioCtx.createBufferSource();
        src.buffer = buf;
        const bp = audioCtx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.setValueAtTime(freq, t);
        bp.Q.setValueAtTime(q, t);
        const g = audioCtx.createGain();
        g.gain.setValueAtTime(peak, t);
        g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
        src.connect(bp); bp.connect(g); g.connect(audioCtx.destination);
        src.start(t); src.stop(t + dur);
    }
    function tone(type, t, f0, f1, dur, peak, glideShape) {
        const osc = audioCtx.createOscillator();
        const g = audioCtx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(f0, t);
        if (f1 && f1 !== f0) {
            if (glideShape === 'exp') osc.frequency.exponentialRampToValueAtTime(f1, t + dur);
            else osc.frequency.linearRampToValueAtTime(f1, t + dur);
        }
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(peak, t + Math.min(0.03, dur * 0.3));
        g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
        osc.connect(g); g.connect(audioCtx.destination);
        osc.start(t); osc.stop(t + dur + 0.02);
    }
    async function playProcessStep(kind) {
        if (muted) return;
        await init();
        if (!audioCtx || audioCtx.state !== 'running') return;
        const now = audioCtx.currentTime;
        const i = (processIndex[kind] = (processIndex[kind] || 0) + 1) - 1;
        if (kind === 'design') {
            const scale = [329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99];
            const f = scale[i % scale.length];
            tone('sine', now + 0.02, f, f, 0.5, 0.07);
            tone('triangle', now + 0.02, f * 2, f * 2, 0.4, 0.025);
            noiseBurst(now, 0.12, 1900, 0.8, 0.035);
        } else if (kind === 'dev') {
            const clicks = 2 + (i % 2);
            for (let k = 0; k < clicks; k++) {
                const t = now + k * 0.055;
                tone('square', t, 1300 + Math.random() * 500, null, 0.03, 0.045);
                noiseBurst(t, 0.02, 3200, 1.2, 0.02);
            }
            tone('square', now + clicks * 0.055 + 0.02, 880, null, 0.05, 0.04);
        } else if (kind === 'resize') {
            tone('triangle', now, 280, 560, 0.28, 0.07, 'exp');
            tone('sine', now, 140, 280, 0.28, 0.04, 'exp');
        } else if (kind === 'modular') {
            for (let k = 0; k < 3; k++) tone('square', now + k * 0.05, 320 + k * 130, null, 0.05, 0.04);
        } else if (kind === 'legacy') {
            tone('sawtooth', now, 460, 120, 0.34, 0.06, 'exp');
            noiseBurst(now + 0.04, 0.22, 900, 0.6, 0.04);
        }
    }

    /* ── Success (UNCHANGED) ── */
    async function playSuccess() {
        if (muted) return;
        await init();
        const now = audioCtx.currentTime;

        const notes = [523.25, 659.25, 783.99, 1046.5];

        notes.forEach((f, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(f, now + i * 0.1);

            gain.gain.setValueAtTime(0.15, now + i * 0.1);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.4);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(now + i * 0.1);
            osc.stop(now + i * 0.1 + 0.4);
        });
    }

    /* AUTOPLAY UNLOCK — navigation here is driven by scroll/wheel, which
       Chrome does NOT treat as an activating gesture. So a body section's
       build can reach playProcessStep -> init() -> resume() with no qualifying
       gesture, which Chrome blocks (the "AudioContext was not allowed to
       start" warning) and the cues fall silent. Create + resume the context on
       the first REAL gesture (pointerdown/keydown/touchstart) so it's already
       'running' before any scroll-triggered build. Self-removes once running;
       never forces autoplay. */
    function unlockAudio() {
        init().then(function () {
            if (audioCtx && audioCtx.state === 'running') {
                ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
                    window.removeEventListener(ev, unlockAudio);
                });
            }
        });
    }
    ['pointerdown', 'keydown', 'touchstart'].forEach(function (ev) {
        window.addEventListener(ev, unlockAudio, { passive: true });
    });

    /* GLOBAL MUTE — driven by the sound toggle button. When muting, silence any
       sustained drones already playing. When unmuting, the toggle click is a
       valid gesture, so resume the context so later scroll-triggered cues work. */
    function isMuted() { return muted; }
    function setMuted(value) {
        muted = !!value;
        if (muted) {
            stopTension();
            stopShock();
        } else {
            init();
        }
        return muted;
    }
    function toggleMute() { return setMuted(!muted); }

    return {
        startTension,
        stopTension,
        playTick,
        playAlarm,
        playImpact,
        startShock,
        stopShock,
        playSuccess,
        playProcessStep,
        resetProcessIndex,
        isMuted,
        setMuted,
        toggleMute
    };
})();
window.AudioSynth = AudioSynth;