/* =====================================================
   TIMER SYSTEM — Cronómetro de 30 segundos
   Space to start, Space again to stop
   ===================================================== */
let timerActive = false;
let timerInterval = null;
let timerSeconds = 30;
const timerOverlay = document.getElementById('timerOverlay');
const timerDisplay = document.getElementById('timerDisplay');

function fabReset() {
    const fab = document.getElementById('timerFab');
    if (!fab) return;
    fab.classList.remove('timer-fab--active');
    
    const secEl = fab.querySelector('.timer-fab__seconds');
    if (secEl) secEl.innerHTML = '30<small>s</small>';
    
    fab.setAttribute('aria-label', t('timer.fab.start'));
    fab.setAttribute('title', t('timer.fab.start'));
}

function fabActivate() {
    const fab = document.getElementById('timerFab');
    if (!fab) return;
    fab.classList.add('timer-fab--active');
    
    fab.setAttribute('aria-label', t('timer.fab.stop'));
    fab.setAttribute('title', t('timer.fab.stop'));
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    if (timerOverlay) timerOverlay.classList.remove('active', 'alarm');
    document.documentElement.classList.remove('scroll-locked');
    timerActive = false;
    timerSeconds = 30;
    if (timerDisplay) timerDisplay.textContent = '30';

    if (typeof AudioSynth !== 'undefined') AudioSynth.stopTension(); // 🔊
    fabReset();
}

function startTimer() {
    if (timerActive) {
        /* Second press stops the timer */
        stopTimer();
        return;
    }
    timerActive = true;
    timerSeconds = 30;
    if (timerDisplay) timerDisplay.textContent = timerSeconds;
    if (timerOverlay) {
        timerOverlay.classList.add('active');
        timerOverlay.classList.remove('alarm');
    }
    document.documentElement.classList.add('scroll-locked');
    fabActivate();

    // Start sounds
    if (typeof AudioSynth !== 'undefined') {
        AudioSynth.startTension(); // 🔊
        AudioSynth.playTick(timerSeconds); // 🔊
    }

    timerInterval = setInterval(() => {
        timerSeconds--;
        if (timerDisplay) timerDisplay.textContent = timerSeconds;

        const fab = document.getElementById('timerFab');
        if (fab) {
            const secEl = fab.querySelector('.timer-fab__seconds');
            if (secEl) secEl.innerHTML = timerSeconds + '<small>s</small>';
        }

        // Procedural tick sound
        if (typeof AudioSynth !== 'undefined' && timerSeconds > 0) {
            AudioSynth.playTick(timerSeconds);
        }

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            if (timerOverlay) timerOverlay.classList.add('alarm');
            if (timerDisplay) timerDisplay.textContent = '0';

            // Procedural alarm sound
            if (typeof AudioSynth !== 'undefined') AudioSynth.playAlarm();

            setTimeout(() => {
                stopTimer();
            }, 2500);
        }
    }, 1000);
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        /* Don't start timer if modal is open */
        if (!timerActive && document.querySelector('.modal.open')) return;
        startTimer();
    }
});

/* FAB button — accessible click trigger */
const timerFab = document.getElementById('timerFab');
if (timerFab) {
    timerFab.addEventListener('click', startTimer);
}

/* Clicking the overlay itself also stops the timer */
if (timerOverlay) {
    timerOverlay.addEventListener('click', () => {
        if (timerActive) stopTimer();
    });
}
