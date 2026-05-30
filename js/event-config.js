(function () {
    var EVENT_SLUGS = ['wtm', 'w4tt', 'guarandinga'];

    function resolveBasePath() {
        var path = window.location.pathname.replace(/\/+$/, '');
        var segment = path.split('/').pop().toLowerCase();
        if (EVENT_SLUGS.indexOf(segment) !== -1) {
            return path.slice(0, path.length - segment.length);
        }
        return path.endsWith('/') ? path : path + '/';
    }

    var BASE_PATH = resolveBasePath();
    window.BASE_PATH = BASE_PATH;

    var EVENTS = {
        wtm: {
            logo: BASE_PATH + 'img/wtm.png',
            logoAlt: 'WTM Madrid',
            logoClass: 'logo--wtm',
            eventLabel: 'IWD2026 WTM Madrid',
            communityLabel: 'WTM Madrid',
            linkedin: 'https://linkedin.com/in/wtmmadrid',
            linkedinHandle: '/wtmmadrid',
            hashtags: ['#DisasterSystem', '#WTMMadrid', '#IWD2026', '#BreakThePattern', '#WomenInTech', '#GDGMadrid']
        },
        w4tt: {
            logo: BASE_PATH + 'img/w4tt.png',
            logoAlt: 'W4TT',
            logoClass: 'logo--w4tt',
            eventLabel: 'Anfitrionas hablemos de tecnología W4TT',
            communityLabel: 'W4TT',
            linkedin: 'https://es.linkedin.com/company/women-for-technical-talks-w4tt',
            linkedinHandle: '/w4tt',
            hashtags: ['#DisasterSystem', '#W4TT', '#AnfitrionasW4TT']
        },
        guarandinga: {
            logo: BASE_PATH + 'img/guarandingatech.jpg',
            logoAlt: 'Guarandinga Tech',
            logoClass: 'logo--guarandinga',
            eventLabel: 'Guarandinga Tech',
            communityLabel: 'Guarandinga Tech',
            linkedin: 'https://www.linkedin.com/company/guarandinga-tech',
            linkedinHandle: '/guarandinga-tech',
            hashtags: ['#DisasterSystem', '#GuarandingaTech', '#TenerifeSummerSessions']
        }
    };

    function resolveEvent() {
        var path = window.location.pathname.replace(/\/+$/, '').toLowerCase();
        var segment = path.split('/').pop();
        return EVENTS[segment] || EVENTS.wtm;
    }

    var EVENT = resolveEvent();
    window.EVENT = EVENT;

    document.documentElement.style.setProperty('--event-name', '"' + EVENT.eventLabel + '"');
    document.documentElement.style.setProperty('--community-name', '"' + EVENT.communityLabel + '"');

    document.addEventListener('DOMContentLoaded', function () {
        var logoImg = document.getElementById('event-logo');
        if (logoImg) {
            logoImg.src = EVENT.logo;
            logoImg.alt = EVENT.logoAlt;
            if (EVENT.logoClass) {
                logoImg.classList.add(EVENT.logoClass);
            }
        }

        var linkedinLink = document.getElementById('event-linkedin');
        if (linkedinLink) {
            linkedinLink.href = EVENT.linkedin;
            linkedinLink.textContent = EVENT.linkedinHandle;
            linkedinLink.setAttribute('aria-label', EVENT.logoAlt + ' on LinkedIn');
        }

        var linkedinFooter = document.getElementById('event-linkedin-footer');
        if (linkedinFooter) {
            linkedinFooter.href = EVENT.linkedin;
            linkedinFooter.setAttribute('aria-label', EVENT.logoAlt + ' on LinkedIn');
        }

        var hashtagsEl = document.getElementById('event-hashtags');
        if (hashtagsEl) {
            hashtagsEl.innerHTML = EVENT.hashtags
                .map(function (tag) { return '<span class="corpse__header-hashtag">' + tag + '</span>'; })
                .join('');
        }

        var communityLabelEl = document.getElementById('event-community-label');
        if (communityLabelEl) {
            communityLabelEl.textContent = EVENT.communityLabel;
        }
    });
}());
