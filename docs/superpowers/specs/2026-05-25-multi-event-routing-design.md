# Multi-event routing design

**Date:** 2026-05-25  
**Status:** Approved

## Problem

The talk is given at multiple events. Each event needs its own logo, hashtags, LinkedIn link, and event label — but the codebase and HTML are shared.

## Scope

Three events, resolved by URL pathname:

| Path | Event |
|------|-------|
| `/` or `/wtm` | WTM Madrid (default, current content) |
| `/w4tt` | W4TT |
| `/guarandinga` | Guarandinga Tech |

## Architecture

A new synchronous script `js/event-config.js` loaded as the **first `<script>` in `<head>`** (no `type="module"`). It runs before any other JS so `window.EVENT` is available to all subsequent scripts.

It:
1. Reads `window.location.pathname`
2. Resolves the matching event config (falls back to `wtm`)
3. Sets `document.documentElement.style.setProperty('--event-name', eventLabel)` for CSS
4. Exposes `window.EVENT`

No build step required. No router. No new dependencies.

## Event config data

```js
const EVENTS = {
  wtm: {
    logo: 'img/wtm.png',
    logoAlt: 'WTM Madrid',
    logoClass: null,
    eventLabel: 'IWD2026',
    linkedin: 'https://linkedin.com/in/wtmmadrid',
    linkedinHandle: '/wtmmadrid',
    hashtags: ['#DisasterSystem','#WTMMadrid','#IWD2026','#BreakThePattern','#WomenInTech','#GDGMadrid']
  },
  w4tt: {
    logo: 'img/w4tt.png',
    logoAlt: 'W4TT',
    logoClass: null,
    eventLabel: 'W4TT',
    linkedin: 'https://es.linkedin.com/company/women-for-technical-talks-w4tt',
    linkedinHandle: '/w4tt',
    hashtags: ['#DisasterSystem','#W4TT','#AnfitrionasW4TT']
  },
  guarandinga: {
    logo: 'img/guarandingatech.jpg',
    logoAlt: 'Guarandinga Tech',
    logoClass: 'logo--multiply',
    eventLabel: 'Guarandinga Tech',
    linkedin: 'https://www.linkedin.com/company/guarandinga-tech',
    linkedinHandle: '/guarandinga-tech',
    hashtags: ['#DisasterSystem','#GuarandingaTech','#TenerifeSummerSessions']
  }
};
```

## DOM changes

Four zones updated at script execution time:

1. **Footer logo** — `<img class="site-footer__social-logo">`: `src`, `alt`, and optional `logoClass`
2. **Footer LinkedIn link** — `<a href="https://linkedin.com/in/wtmmadrid">`: `href` and `textContent`
3. **Slide 4 hashtags** — `.corpse__header-hashtags` inner HTML regenerated from `hashtags[]`
4. **CSS custom property** — `--event-name` on `:root` for the header pseudoelement

## CSS change

`css/layout/_site-header.css` pseudoelement content:

```css
/* before */
content: '● ○ ○   session.end()   ▶   thanks! landing created for IWD2026';

/* after */
content: '● ○ ○   session.end()   ▶   thanks! landing created for ' var(--event-name);
```

`--event-name` default value set in `:root` as `'IWD2026'` so it works even without JS.

## Guarandinga logo treatment

The JPG has a white background. Applied via CSS:

```css
.logo--multiply {
  mix-blend-mode: multiply;
}
```

Works correctly on the dark background of this site.

## What does NOT change

- i18n system (translations, language toggle)
- Slide content, body copy, tool lists
- María Rogles author link (personal, not event-specific)
- QR code image

## Files changed

- `js/event-config.js` — new file
- `index.html` — add script tag in `<head>`, add `data-event` attributes to the 3 DOM zones
- `css/layout/_site-header.css` — use `var(--event-name)` in pseudoelement
