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
            hashtags: ['#DisasterSystem', '#W4TT', '#AnfitrionasW4TT'],
            sponsors: {
                venue: [
                    { name: 'NTT DATA', file: 'sponsor-main_nttdata.png' }
                ],
                platinum: [
                    { name: 'Tokiota',  file: 'sponsor-platinum-1_tokiota.png' },
                    { name: 'Bravent',  file: 'sponsor-platinum-2_bravent.svg' },
                    { name: 'axazure',  file: 'sponsor-platinum-3_axazure.png' },
                    { name: 'Encamina', file: 'sponsor-platinum-4_emcamina.svg' },
                    { name: 'Devoteam', file: 'sponsor-platinum-3_devoteam.svg' }
                ],
                gold: [
                    { name: 'NextStep',     file: 'sponsor-gold-1_nextstep.jpg' },
                    { name: 'Prodware',     file: 'sponsor-gold-2_prodware.svg' },
                    { name: 'V-Valley',     file: 'sponsor-gold-3_vvalley.jpg' }
                ],
                silver: [
                    { name: 'Infoavan',         file: 'sponsor-silver-1_infoavan.png' },
                    { name: 'Crosspoint',       file: 'sponsor-silver-2_crosspoint.png' },
                    { name: 'Creativity Spark', file: 'sponsor-silver-3_creativityspark.png' }
                ]
            },
            cause: {
                slug: 'danocerebral',
                logo: 'danocerebral.png',
                logoAlt: 'Daño Cerebral Estatal',
                url: 'https://danocerebralestatal.org/'
            }
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

        renderSponsors();
        renderCause();
    });

    /**
     * Inject the sponsors slide + slide-nav dot when EVENT.sponsors exists.
     * Slide is inserted between .corpse__item--closing and .corpse__item--footer.
     * Dot is inserted before the closing dot in #slideNav.
     */
    function renderSponsors() {
        var sponsors = EVENT.sponsors;
        var hasSponsors = sponsors && Object.keys(sponsors).some(function (k) {
            return Array.isArray(sponsors[k]) && sponsors[k].length > 0;
        });
        if (!hasSponsors) return;

        var TIERS = [
            { key: 'venue',    labelKey: 'sponsors.tier.venue' },
            { key: 'platinum', labelKey: 'sponsors.tier.platinum' },
            { key: 'gold',     labelKey: 'sponsors.tier.gold' },
            { key: 'silver',   labelKey: 'sponsors.tier.silver' }
        ];

        var basePath = BASE_PATH + 'img/sponsors/';

        var tiersHtml = TIERS.map(function (tier) {
            var list = sponsors[tier.key];
            if (!list || !list.length) return '';

            var logosHtml = list.map(function (s) {
                return '<li class="sponsors__logo sponsors__logo--' + tier.key + '">' +
                       '<img src="' + basePath + s.file + '" alt="' + s.name + '" loading="lazy">' +
                       '</li>';
            }).join('');

            return '<div class="sponsors__tier sponsors__tier--' + tier.key + '">' +
                   '<h3 class="sponsors__tier-title" data-i18n="' + tier.labelKey + '">' + tier.key + '</h3>' +
                   '<ul class="sponsors__logos">' + logosHtml + '</ul>' +
                   '</div>';
        }).join('');

        var sectionHtml =
            '<section class="corpse__item corpse__item--sponsors" id="sponsorsSection" aria-labelledby="sponsors-title">' +
              '<div class="sponsors">' +
                '<header class="sponsors__header">' +
                  '<p class="sponsors__eyebrow" data-i18n="sponsors.eyebrow"></p>' +
                  '<h2 class="sponsors__title" id="sponsors-title" data-i18n="sponsors.title">Sponsors</h2>' +
                  '<div class="sponsors__divider" aria-hidden="true"><span>◆</span></div>' +
                '</header>' +
                '<div class="sponsors__tiers">' + tiersHtml + '</div>' +
              '</div>' +
            '</section>';

        var footerSlide = document.querySelector('.corpse__item--footer');
        var closingSlide = document.querySelector('.corpse__item--closing');
        var anchor = footerSlide || (closingSlide && closingSlide.nextSibling);
        if (anchor && anchor.parentNode) {
            anchor.insertAdjacentHTML('beforebegin', sectionHtml);
        } else if (closingSlide && closingSlide.parentNode) {
            closingSlide.insertAdjacentHTML('afterend', sectionHtml);
        }

        var slideNav = document.getElementById('slideNav');
        if (slideNav) {
            var closingDot = slideNav.querySelector('.slide-nav__dot[data-slide="5"]')
                          || slideNav.lastElementChild;
            var dotHtml =
                '<button class="slide-nav__dot" data-slide="sponsors" aria-label="Sponsors" data-i18n-aria="sponsors.nav.aria">' +
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
                    '<path d="M12 2l2.39 4.84L20 7.83l-4 3.9.94 5.5L12 14.77 7.06 17.23 8 11.73l-4-3.9 5.61-.99L12 2z"/>' +
                  '</svg>' +
                '</button>';
            if (closingDot) {
                closingDot.insertAdjacentHTML('beforebegin', dotHtml);
            } else {
                slideNav.insertAdjacentHTML('beforeend', dotHtml);
            }
        }
    }

    /**
     * Inject the social-cause slide (animated brain + mission + CTA)
     * when EVENT.cause is defined. Slide is inserted between
     * the sponsors slide (or closing slide) and the footer slide.
     * Reuses the .brain markup from slide 1 for visual coherence.
     */
    function renderCause() {
        var cause = EVENT.cause;
        if (!cause || !cause.url) return;

        var logoSrc = BASE_PATH + 'img/sponsors/' + cause.logo;

        var brainHtml =
            '<div class="cause__brain-wrap" aria-hidden="true">' +
              '<div class="brain cause__brain">' +
                '<div class="brain__lobe brain__lobe--l">' +
                  '<div class="brain__vein bv-1"></div>' +
                  '<div class="brain__vein bv-2"></div>' +
                  '<div class="brain__vein bv-3"></div>' +
                '</div>' +
                '<div class="brain__lobe brain__lobe--r">' +
                  '<div class="brain__vein bv-4"></div>' +
                  '<div class="brain__vein bv-5"></div>' +
                  '<div class="brain__vein bv-6"></div>' +
                '</div>' +
                '<div class="brain__fissure"></div>' +
                '<div class="brain__gyrus brain__gyrus--1"></div>' +
                '<div class="brain__gyrus brain__gyrus--2"></div>' +
                '<div class="brain__gyrus brain__gyrus--3"></div>' +
                '<div class="brain__gyrus brain__gyrus--4"></div>' +
                '<div class="brain__gyrus brain__gyrus--5"></div>' +
                '<div class="brain__gyrus brain__gyrus--6"></div>' +
                '<div class="brain__gyrus brain__gyrus--7"></div>' +
                '<div class="brain__gyrus brain__gyrus--8"></div>' +
                '<div class="brain__stem"></div>' +
              '</div>' +
              '<svg class="cause__connector" viewBox="0 0 200 200" aria-hidden="true">' +
                '<path d="M30 100 Q 100 30, 170 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 6" />' +
              '</svg>' +
            '</div>';

        var contentHtml =
            '<div class="cause__content">' +
              '<p class="cause__eyebrow" data-i18n="cause.eyebrow"></p>' +
              '<h2 class="cause__title" id="cause-title" data-i18n="cause.title"></h2>' +
              '<p class="cause__lead" data-i18n-html="cause.lead"></p>' +
              '<p class="cause__body" data-i18n-html="cause.body"></p>' +
              '<a class="cause__cta" href="' + cause.url + '" target="_blank" rel="noopener noreferrer">' +
                '<span class="cause__cta-logo-tile">' +
                  '<img src="' + logoSrc + '" alt="' + cause.logoAlt + '" loading="lazy">' +
                '</span>' +
                '<span class="cause__cta-meta">' +
                  '<span class="cause__cta-label" data-i18n="cause.cta.label"></span>' +
                  '<span class="cause__cta-url">danocerebralestatal.org →</span>' +
                '</span>' +
              '</a>' +
            '</div>';

        var sectionHtml =
            '<section class="corpse__item corpse__item--cause" id="causeSection" aria-labelledby="cause-title">' +
              '<div class="cause">' + brainHtml + contentHtml + '</div>' +
            '</section>';

        var footerSlide = document.querySelector('.corpse__item--footer');
        var sponsorsSlide = document.getElementById('sponsorsSection');
        var closingSlide = document.querySelector('.corpse__item--closing');
        var anchor = footerSlide
                  || (sponsorsSlide && sponsorsSlide.nextSibling)
                  || (closingSlide && closingSlide.nextSibling);
        if (anchor && anchor.parentNode) {
            anchor.insertAdjacentHTML('beforebegin', sectionHtml);
        }

        var slideNav = document.getElementById('slideNav');
        if (slideNav) {
            var closingDot = slideNav.querySelector('.slide-nav__dot[data-slide="5"]')
                          || slideNav.lastElementChild;
            var dotHtml =
                '<button class="slide-nav__dot slide-nav__dot--cause" data-slide="cause" aria-label="Daño Cerebral Estatal" data-i18n-aria="cause.nav.aria">' +
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
                    '<path d="M12 21s-6-4.35-9-8.5C1 8 4 4 8 4c2 0 3.5 1 4 2 0.5-1 2-2 4-2 4 0 7 4 5 8.5-3 4.15-9 8.5-9 8.5z"/>' +
                  '</svg>' +
                '</button>';
            if (closingDot) {
                closingDot.insertAdjacentHTML('beforebegin', dotHtml);
            } else {
                slideNav.insertAdjacentHTML('beforeend', dotHtml);
            }
        }
    }
}());
