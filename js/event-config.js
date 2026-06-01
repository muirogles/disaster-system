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
            hashtags: ['#DisasterSystem', '#WTMMadrid', '#IWD2026', '#BreakThePattern', '#WomenInTech', '#GDGMadrid'],
            qr: BASE_PATH + 'img/qr/qr_disaster-system_wtm.png'
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
            qr: BASE_PATH + 'img/qr/qr_disaster-system_w4tt.png',
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
                url: 'https://danocerebralestatal.org/',
                phone: '914 178 905',
                phoneHref: 'tel:+34914178905',
                services: 5,
                manifestoImg: 'danocerebral_atencion.jpg',
                manifestoImgAlt: 'Atención universal e inclusiva — una vida salvada merece ser vivida',
                collaborator: {
                    name: 'Fundación ONCE',
                    logo: 'logo-fonce.png',
                    url: 'https://www.fundaciononce.es/'
                }
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
            hashtags: ['#DisasterSystem', '#GuarandingaTech', '#TenerifeSummerSessions'],
            qr: BASE_PATH + 'img/qr/qr_disaster-system_guarandinga.png'
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
        [document.getElementById('event-logo'), document.getElementById('event-logo-heart')].forEach(function (logoImg) {
            if (!logoImg) return;
            logoImg.src = EVENT.logo;
            logoImg.alt = EVENT.logoAlt;
            if (EVENT.logoClass) {
                logoImg.classList.add(EVENT.logoClass);
            }
        });

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

        var qrImg = document.getElementById('event-qr');
        if (qrImg && EVENT.qr) {
            qrImg.src = EVENT.qr;
        }

        renderSponsorsAndCause();
    });

    /**
     * Inject ONE consolidated slide that contains:
     *   1. Sponsors compact band (4 tiers)
     *   2. A storytelling bridge line connecting sponsors → cause
     *      ("ticket revenue → this cause")
     *   3. Cause band: animated brain + intro + services + CTA + collaborator
     *
     * Slide is inserted between the closing slide and the footer slide.
     * A single nav dot is added before the closing dot.
     */
    function renderSponsorsAndCause() {
        var sponsors = EVENT.sponsors;
        var cause    = EVENT.cause;

        var hasSponsors = sponsors && Object.keys(sponsors).some(function (k) {
            return Array.isArray(sponsors[k]) && sponsors[k].length > 0;
        });
        var hasCause = cause && cause.url;
        if (!hasSponsors && !hasCause) return;

        var assetBase = BASE_PATH + 'img/sponsors/';
        var blocks    = [];

        /* ── Sponsors band ── */
        if (hasSponsors) {
            var TIERS = [
                { key: 'venue',    labelKey: 'sponsors.tier.venue' },
                { key: 'platinum', labelKey: 'sponsors.tier.platinum' },
                { key: 'gold',     labelKey: 'sponsors.tier.gold' },
                { key: 'silver',   labelKey: 'sponsors.tier.silver' }
            ];

            var tiersHtml = TIERS.map(function (tier) {
                var list = sponsors[tier.key];
                if (!list || !list.length) return '';
                var logosHtml = list.map(function (s) {
                    return '<li class="sponsors__logo sponsors__logo--' + tier.key + '">' +
                           '<img src="' + assetBase + s.file + '" alt="' + s.name + '" loading="lazy">' +
                           '</li>';
                }).join('');
                return '<div class="sponsors__tier sponsors__tier--' + tier.key + '">' +
                       '<h3 class="sponsors__tier-title" data-i18n="' + tier.labelKey + '">' + tier.key + '</h3>' +
                       '<ul class="sponsors__logos">' + logosHtml + '</ul>' +
                       '</div>';
            }).join('');

            blocks.push(
                '<section class="sc-block sc-block--sponsors" aria-labelledby="sponsors-title">' +
                  '<header class="sc-block__head">' +
                    '<h2 class="sc-block__title" id="sponsors-title" data-i18n="sponsors.title">Sponsors</h2>' +
                    '<p class="sc-block__eyebrow" data-i18n="sponsors.eyebrow"></p>' +
                  '</header>' +
                  '<div class="sponsors__tiers">' + tiersHtml + '</div>' +
                '</section>'
            );
        }

        /* ── Bridge / storytelling line ── */
        if (hasSponsors && hasCause) {
            blocks.push(
                '<p class="sc-bridge" data-i18n="cause.bridge"></p>'
            );
        }

        /* ── Cause band ── */
        if (hasCause) {
            // Reuse the slide-1 .head-wrap > .head DOM so the brain inherits
            // its native sizing context and aspect ratio — no overrides needed.
            // The wrapping .head is made invisible via .cause__head-host.
            var brainHtml =
                '<div class="cause__brain-stage" aria-hidden="true">' +
                  '<div class="head-wrap cause__head-host">' +
                    '<div class="head">' +
                      '<div class="brain">' +
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
                    '</div>' +
                  '</div>' +
                '</div>';

            // Services rendered as full list items (title + description)
            var servicesHtml = '';
            for (var i = 1; i <= cause.services; i++) {
                servicesHtml +=
                    '<li class="cause__service">' +
                      '<span class="cause__service-num" aria-hidden="true">' + String(i).padStart(2, '0') + '</span>' +
                      '<div>' +
                        '<h4 class="cause__service-title" data-i18n="cause.service.' + i + '.title"></h4>' +
                        '<p class="cause__service-desc" data-i18n="cause.service.' + i + '.desc"></p>' +
                      '</div>' +
                    '</li>';
            }

            var collab = cause.collaborator;
            var collabHtml = '';
            if (collab && collab.logo) {
                var openTag  = collab.url
                    ? '<a class="cause__collab-link" href="' + collab.url + '" target="_blank" rel="noopener noreferrer" aria-label="' + collab.name + '">'
                    : '<span class="cause__collab-link">';
                var closeTag = collab.url ? '</a>' : '</span>';
                collabHtml =
                    '<div class="cause__collab">' +
                      '<span class="cause__collab-label" data-i18n="cause.collab.label"></span>' +
                      openTag +
                        '<img src="' + assetBase + collab.logo + '" alt="' + collab.name + '" loading="lazy">' +
                      closeTag +
                    '</div>';
            }

            var phoneHtml = cause.phone
                ? '<a class="cause__phone" href="' + (cause.phoneHref || ('tel:' + cause.phone.replace(/\s+/g, ''))) + '" data-i18n-aria="cause.cta.phone.aria">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
                      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>' +
                    '</svg>' +
                    '<span>' + cause.phone + '</span>' +
                  '</a>'
                : '';

            // Cause band — flat structure with the danocerebral brand
            // promoted to the header (it anchors the whole section):
            //   brand header (logo + title + url)
            //   eyebrow / kicker
            //   brain stage (visual hero)
            //   lead paragraph
            //   services list
            //   manifesto quote + about
            //   cta row (call + collaborator)
            var causeBand =
                '<section class="cause" aria-labelledby="cause-title">' +
                  '<header class="cause__brand">' +
                    '<a class="cause__brand-link" href="' + cause.url + '" target="_blank" rel="noopener noreferrer" aria-label="' + cause.logoAlt + ' — ' + cause.url + '">' +
                      '<img class="cause__brand-logo" src="' + assetBase + cause.logo + '" alt="' + cause.logoAlt + '" loading="lazy">' +
                    '</a>' +
                    '<div class="cause__brand-meta">' +
                      '<p class="cause__eyebrow" data-i18n="cause.eyebrow"></p>' +
                      '<h2 class="cause__title" id="cause-title" data-i18n="cause.title"></h2>' +
                    '</div>' +
                  '</header>' +
                  brainHtml +
                  '<p class="cause__lead" data-i18n-html="cause.lead"></p>' +
                  '<ul class="cause__services-list">' + servicesHtml + '</ul>' +
                  '<div class="cause__manifesto">' +
                    (cause.manifestoImg
                      ? '<figure class="cause__manifesto-figure">' +
                          '<img src="' + assetBase + cause.manifestoImg + '" alt="' + cause.manifestoImgAlt + '" loading="lazy">' +
                        '</figure>'
                      : '') +
                    '<div class="cause__manifesto-text">' +
                      '<blockquote class="cause__quote" data-i18n="cause.manifesto"></blockquote>' +
                      '<p class="cause__about" data-i18n-html="cause.about"></p>' +
                    '</div>' +
                  '</div>' +
                  '<div class="cause__cta-row">' +
                    '<a class="cause__cta-url-link" href="' + cause.url + '" target="_blank" rel="noopener noreferrer">' +
                      '<span class="cause__cta-label" data-i18n="cause.cta.label"></span>' +
                      '<span class="cause__cta-url">danocerebralestatal.org →</span>' +
                    '</a>' +
                    phoneHtml +
                    collabHtml +
                  '</div>' +
                '</section>';

            blocks.push(causeBand);
        }

        // 2-column split: sponsors (left, narrower) | cause (right, brain hero).
        // Bridge becomes a top strip that visually links sponsors → cause via
        // an explicit arrow that points from left column to right column.
        var bridgeBlock  = blocks.filter(function (b) { return b.indexOf('sc-bridge')           !== -1; }).join('');
        var sponsorsBlk  = blocks.filter(function (b) { return b.indexOf('sc-block--sponsors')  !== -1; }).join('');
        var causeBlk     = blocks.filter(function (b) { return b.indexOf('class="cause"')       !== -1; }).join('');

        var sectionHtml =
            '<section class="corpse__item corpse__item--sc" id="sponsorsCauseSection">' +
              '<div class="sc">' +
                bridgeBlock +
                '<div class="sc__split">' +
                  '<div class="sc__col sc__col--sponsors">' + sponsorsBlk + '</div>' +
                  '<div class="sc__col sc__col--cause">'    + causeBlk    + '</div>' +
                '</div>' +
              '</div>' +
            '</section>';

        var footerSlide  = document.querySelector('.corpse__item--footer');
        var closingSlide = document.querySelector('.corpse__item--closing');
        var anchor = footerSlide || (closingSlide && closingSlide.nextSibling);
        if (anchor && anchor.parentNode) {
            anchor.insertAdjacentHTML('beforebegin', sectionHtml);
        } else if (closingSlide && closingSlide.parentNode) {
            closingSlide.insertAdjacentHTML('afterend', sectionHtml);
        }

        var slideNav = document.getElementById('slideNav');
        if (slideNav) {
            /* Dot order must mirror slide order:
                  ...corpse → closing → sponsors+cause → (footer)
               So the new dot is inserted AFTER the closing dot, not before. */
            var closingDot = slideNav.querySelector('.slide-nav__dot[data-slide="5"]')
                          || slideNav.lastElementChild;
            var dotHtml =
                '<button class="slide-nav__dot" data-slide="sc" aria-label="Sponsors y causa social" data-i18n-aria="cause.nav.aria">' +
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
                    /* Star — sponsors / featured supporters */
                    '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>' +
                  '</svg>' +
                '</button>';
            if (closingDot) {
                closingDot.insertAdjacentHTML('afterend', dotHtml);
            } else {
                slideNav.insertAdjacentHTML('beforeend', dotHtml);
            }
        }
    }
}());
