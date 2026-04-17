/* =====================================================
   VISUAL DEMO BUILDER — BEM classes, no inline styles
   TV/Auditorium size — LARGE and readable from back row
   ===================================================== */
function getDemo(key, part) {
    return (I18N && I18N[`visual.demo.${key}.${part}`]) || '';
}

function buildVisualDemo(visual) {
    const demos = {
        tokens: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('tokens', 'error')}</div>
                    <div class="visual-demo__token-grid visual-demo__token-grid--big">
                        <div class="visual-demo__token-swatch">
                            <div class="visual-demo__token-color" style="background:#ff0000"></div>
                            <div class="visual-demo__token-name visual-demo__token-name--bad">#ff0000</div>
                        </div>
                        <div class="visual-demo__token-swatch">
                            <div class="visual-demo__token-color" style="background:#00ff00"></div>
                            <div class="visual-demo__token-name visual-demo__token-name--bad">#00ff00</div>
                        </div>
                        <div class="visual-demo__token-swatch">
                            <div class="visual-demo__token-color" style="background:#0000ff"></div>
                            <div class="visual-demo__token-name visual-demo__token-name--bad">#0000ff</div>
                        </div>
                        <div class="visual-demo__token-swatch">
                            <div class="visual-demo__token-color" style="background:#333333"></div>
                            <div class="visual-demo__token-name visual-demo__token-name--bad">#333333</div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('tokens', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('tokens', 'solution')}</div>
                    <div class="visual-demo__token-grid visual-demo__token-grid--big">
                        <div class="visual-demo__token-swatch">
                            <div class="visual-demo__token-color" style="background:#d32f2f"></div>
                            <div class="visual-demo__token-name visual-demo__token-name--good">error</div>
                        </div>
                        <div class="visual-demo__token-swatch">
                            <div class="visual-demo__token-color" style="background:#2e7d32"></div>
                            <div class="visual-demo__token-name visual-demo__token-name--good">success</div>
                        </div>
                        <div class="visual-demo__token-swatch">
                            <div class="visual-demo__token-color" style="background:#1565c0"></div>
                            <div class="visual-demo__token-name visual-demo__token-name--good">primary</div>
                        </div>
                        <div class="visual-demo__token-swatch">
                            <div class="visual-demo__token-color" style="background:#f9a825"></div>
                            <div class="visual-demo__token-name visual-demo__token-name--good">warning</div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('tokens', 'label.solution')}</div>
                </div>
            </div>`,
        themes: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('themes', 'error')}</div>
                    <div class="visual-demo__theme-cards">
                        <div class="visual-demo__theme-card visual-demo__theme-card--light visual-demo__theme-card--big">
                            <div class="visual-demo__theme-card-header">Light Mode</div>
                            <div class="visual-demo__theme-card-body">
                                <div class="visual-demo__theme-text visual-demo__theme-text--readable">Texto legible en fondo claro</div>
                                <div class="visual-demo__theme-btn visual-demo__theme-btn--ok">Aceptar</div>
                            </div>
                        </div>
                        <div class="visual-demo__theme-card visual-demo__theme-card--dark-broken visual-demo__theme-card--big">
                            <div class="visual-demo__theme-card-header visual-demo__theme-card-header--invisible">Dark Mode</div>
                            <div class="visual-demo__theme-card-body">
                                <div class="visual-demo__theme-text visual-demo__theme-text--invisible">Texto invisible en fondo oscuro</div>
                                <div class="visual-demo__theme-btn visual-demo__theme-btn--invisible">Aceptar</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('themes', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('themes', 'solution')}</div>
                    <div class="visual-demo__theme-cards">
                        <div class="visual-demo__theme-card visual-demo__theme-card--light visual-demo__theme-card--big">
                            <div class="visual-demo__theme-card-header">Light Mode</div>
                            <div class="visual-demo__theme-card-body">
                                <div class="visual-demo__theme-text visual-demo__theme-text--readable">Texto legible en fondo claro</div>
                                <div class="visual-demo__theme-btn visual-demo__theme-btn--ok">Aceptar</div>
                            </div>
                        </div>
                        <div class="visual-demo__theme-card visual-demo__theme-card--dark-ok visual-demo__theme-card--big">
                            <div class="visual-demo__theme-card-header">Dark Mode</div>
                            <div class="visual-demo__theme-card-body">
                                <div class="visual-demo__theme-text visual-demo__theme-text--dark-readable">Texto legible en fondo oscuro</div>
                                <div class="visual-demo__theme-btn visual-demo__theme-btn--dark-ok">Aceptar</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('themes', 'label.solution')}</div>
                </div>
            </div>`,
        spacing: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('spacing', 'error')}</div>
                    <div class="visual-demo__spacing-blocks visual-demo__spacing-blocks--big">
                        <div class="visual-demo__spacing-block visual-demo__spacing-block--bad" style="height:26px"><span>13px</span></div>
                        <div class="visual-demo__spacing-block visual-demo__spacing-block--bad" style="height:14px"><span>7px</span></div>
                        <div class="visual-demo__spacing-block visual-demo__spacing-block--bad" style="height:22px"><span>11px</span></div>
                        <div class="visual-demo__spacing-block visual-demo__spacing-block--bad" style="height:38px"><span>19px</span></div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('spacing', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('spacing', 'solution')}</div>
                    <div class="visual-demo__spacing-blocks visual-demo__spacing-blocks--big">
                        <div class="visual-demo__spacing-block visual-demo__spacing-block--ok" style="height:32px"><span>32px (8x4)</span></div>
                        <div class="visual-demo__spacing-block visual-demo__spacing-block--ok" style="height:16px"><span>16px (8x2)</span></div>
                        <div class="visual-demo__spacing-block visual-demo__spacing-block--ok" style="height:16px"><span>16px (8x2)</span></div>
                        <div class="visual-demo__spacing-block visual-demo__spacing-block--ok" style="height:8px"><span>8px (8x1)</span></div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('spacing', 'label.solution')}</div>
                </div>
            </div>`,
        units: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('units', 'error')}</div>
                    <div class="visual-demo__units-stack">
                        <div class="visual-demo__units-row">
                            <div class="visual-demo__units-box visual-demo__units-box--bad">
                                <span class="visual-demo__units-value">14px</span>
                                <span class="visual-demo__units-desc">font-size fijo</span>
                            </div>
                        </div>
                        <div class="visual-demo__units-row">
                            <div class="visual-demo__units-box visual-demo__units-box--bad">
                                <span class="visual-demo__units-value">1.2rem</span>
                                <span class="visual-demo__units-desc">padding relativo a root</span>
                            </div>
                        </div>
                        <div class="visual-demo__units-row">
                            <div class="visual-demo__units-box visual-demo__units-box--bad">
                                <span class="visual-demo__units-value">0.8em</span>
                                <span class="visual-demo__units-desc">\u00bfrelativo a qu\u00e9?</span>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('units', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('units', 'solution')}</div>
                    <div class="visual-demo__units-stack">
                        <div class="visual-demo__units-row">
                            <div class="visual-demo__units-box visual-demo__units-box--good">
                                <span class="visual-demo__units-value">0.875rem</span>
                                <span class="visual-demo__units-desc">font = rem (14/16)</span>
                            </div>
                        </div>
                        <div class="visual-demo__units-row">
                            <div class="visual-demo__units-box visual-demo__units-box--good">
                                <span class="visual-demo__units-value">1rem</span>
                                <span class="visual-demo__units-desc">spacing = rem (global)</span>
                            </div>
                        </div>
                        <div class="visual-demo__units-row">
                            <div class="visual-demo__units-box visual-demo__units-box--good">
                                <span class="visual-demo__units-value">0.5em</span>
                                <span class="visual-demo__units-desc">margin = em (local)</span>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('units', 'label.solution')}</div>
                </div>
            </div>`,
        contrast: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('contrast', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__phone-header">Mi App</div>
                            <div class="visual-demo__contrast-demo">
                                <div class="visual-demo__btn visual-demo__btn--bad visual-demo__btn--huge">
                                    <span>Comprar ahora</span>
                                </div>
                                <div class="visual-demo__contrast-ratio visual-demo__contrast-ratio--bad">
                                    <span class="visual-demo__contrast-number">1.8:1</span>
                                    <span class="visual-demo__contrast-verdict">FAIL WCAG</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('contrast', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('contrast', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__phone-header">Mi App</div>
                            <div class="visual-demo__contrast-demo">
                                <div class="visual-demo__btn visual-demo__btn--good visual-demo__btn--huge">
                                    <span>Comprar ahora</span>
                                </div>
                                <div class="visual-demo__contrast-ratio visual-demo__contrast-ratio--good">
                                    <span class="visual-demo__contrast-number">7:1</span>
                                    <span class="visual-demo__contrast-verdict">PASS AAA \u2713</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('contrast', 'label.solution')}</div>
                </div>
            </div>`,
        touch: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('touch', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__touch-demo">
                                <div class="visual-demo__touch-target visual-demo__touch-target--small">
                                    <span class="visual-demo__touch-icon">\u2715</span>
                                    <div class="visual-demo__touch-finger visual-demo__touch-finger--miss">
                                        <span>44px dedo</span>
                                    </div>
                                </div>
                                <div class="visual-demo__touch-size">24\u00d724px</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('touch', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('touch', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__touch-demo">
                                <div class="visual-demo__touch-target visual-demo__touch-target--proper">
                                    <span class="visual-demo__touch-icon">\u2715</span>
                                    <div class="visual-demo__touch-finger visual-demo__touch-finger--hit">
                                        <span>44px dedo</span>
                                    </div>
                                </div>
                                <div class="visual-demo__touch-size">44\u00d744px</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('touch', 'label.solution')}</div>
                </div>
            </div>`,
        focus: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('focus', 'error')}</div>
                    <div class="visual-demo__focus-demo">
                        <div class="visual-demo__focus-btn visual-demo__focus-btn--no-focus visual-demo__focus-btn--big">
                            <span>Tab aqu\u00ed</span>
                            <span class="visual-demo__focus-hint visual-demo__focus-hint--bad">outline: none</span>
                        </div>
                        <div class="visual-demo__focus-cursor">\u2328 TAB</div>
                        <div class="visual-demo__focus-result visual-demo__focus-result--bad">\u00bfD\u00f3nde estoy?</div>
                    </div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('focus', 'solution')}</div>
                    <div class="visual-demo__focus-demo">
                        <div class="visual-demo__focus-btn visual-demo__focus-btn--focused visual-demo__focus-btn--big">
                            <span>Tab aqu\u00ed</span>
                            <span class="visual-demo__focus-hint visual-demo__focus-hint--good">:focus-visible</span>
                        </div>
                        <div class="visual-demo__focus-cursor">\u2328 TAB</div>
                        <div class="visual-demo__focus-result visual-demo__focus-result--good">Aqu\u00ed estoy \u2713</div>
                    </div>
                </div>
            </div>`,
        srcset: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('srcset', 'error')}</div>
                    <div class="visual-demo__image visual-demo__image--blurry visual-demo__image--big">\uD83D\uDDBC</div>
                    <div class="visual-demo__image-detail visual-demo__image-detail--bad">Pixelado y borroso</div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('srcset', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('srcset', 'solution')}</div>
                    <div class="visual-demo__image visual-demo__image--sharp visual-demo__image--big">\uD83D\uDDBC</div>
                    <div class="visual-demo__image-detail visual-demo__image-detail--good">N\u00edtido y claro</div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('srcset', 'label.solution')}</div>
                </div>
            </div>`,
        heading: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('heading', 'error')}</div>
                    <div class="visual-demo__heading-tree">
                        <div class="visual-demo__heading-node visual-demo__heading-node--h1 visual-demo__heading-node--error">
                            <span class="visual-demo__heading-tag">H1</span> P\u00e1gina principal
                        </div>
                        <div class="visual-demo__heading-node visual-demo__heading-node--h4 visual-demo__heading-node--error visual-demo__heading-node--indent2">
                            <span class="visual-demo__heading-tag visual-demo__heading-tag--warn">H4</span> Secci\u00f3n
                            <span class="visual-demo__heading-skip">\u26a0 salt\u00f3 H2, H3</span>
                        </div>
                        <div class="visual-demo__heading-node visual-demo__heading-node--h2 visual-demo__heading-node--error visual-demo__heading-node--indent1">
                            <span class="visual-demo__heading-tag visual-demo__heading-tag--warn">H2</span> Subsecci\u00f3n
                            <span class="visual-demo__heading-skip">\u26a0 desorden</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('heading', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('heading', 'solution')}</div>
                    <div class="visual-demo__heading-tree">
                        <div class="visual-demo__heading-node visual-demo__heading-node--h1 visual-demo__heading-node--good">
                            <span class="visual-demo__heading-tag">H1</span> P\u00e1gina principal
                        </div>
                        <div class="visual-demo__heading-node visual-demo__heading-node--h2 visual-demo__heading-node--good visual-demo__heading-node--indent1">
                            <span class="visual-demo__heading-tag">H2</span> Secci\u00f3n
                        </div>
                        <div class="visual-demo__heading-node visual-demo__heading-node--h3 visual-demo__heading-node--good visual-demo__heading-node--indent2">
                            <span class="visual-demo__heading-tag">H3</span> Subsecci\u00f3n
                        </div>
                        <div class="visual-demo__heading-node visual-demo__heading-node--h4 visual-demo__heading-node--good visual-demo__heading-node--indent3">
                            <span class="visual-demo__heading-tag">H4</span> Detalle
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('heading', 'label.solution')}</div>
                </div>
            </div>`,
        overflow: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('overflow', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__overflow-card visual-demo__overflow-card--broken">
                                <div class="visual-demo__overflow-card-header">Producto</div>
                                <div class="visual-demo__overflow-card-body">
                                    <div class="visual-demo__overflow-text visual-demo__overflow-text--overflow">Konfigurationseinstellungen f\u00fcr erweiterte Benutzeroptionen</div>
                                </div>
                                <div class="visual-demo__overflow-card-footer">
                                    <div class="visual-demo__overflow-price">19,99\u20ac</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('overflow', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('overflow', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__overflow-card visual-demo__overflow-card--ok">
                                <div class="visual-demo__overflow-card-header">Producto</div>
                                <div class="visual-demo__overflow-card-body">
                                    <div class="visual-demo__overflow-text visual-demo__overflow-text--fit">Konfigurationseinstellungen f\u00fcr erweiterte Benutzeroptionen</div>
                                </div>
                                <div class="visual-demo__overflow-card-footer">
                                    <div class="visual-demo__overflow-price">19,99\u20ac</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('overflow', 'label.solution')}</div>
                </div>
            </div>`,
        rtl: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('rtl', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <span class="visual-demo__rtl-dir-pill">\u2192 LTR</span>
                            <div class="visual-demo__rtl-card visual-demo__rtl-card--big">
                                <div class="visual-demo__rtl-avatar visual-demo__rtl-avatar--error"></div>
                                <div class="visual-demo__rtl-text visual-demo__rtl-text--error">margin-left \u2717</div>
                            </div>
                            <span class="visual-demo__rtl-dir-pill visual-demo__rtl-dir-pill--rtl">\u2190 RTL</span>
                            <div class="visual-demo__rtl-card visual-demo__rtl-card--big" dir="rtl">
                                <div class="visual-demo__rtl-avatar visual-demo__rtl-avatar--error"></div>
                                <div class="visual-demo__rtl-text visual-demo__rtl-text--error">\u0641\u064a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u2014 roto \u2717</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('rtl', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('rtl', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <span class="visual-demo__rtl-dir-pill">\u2192 LTR</span>
                            <div class="visual-demo__rtl-card visual-demo__rtl-card--big">
                                <div class="visual-demo__rtl-avatar visual-demo__rtl-avatar--good"></div>
                                <div class="visual-demo__rtl-text visual-demo__rtl-text--good">inline-start \u2713</div>
                            </div>
                            <span class="visual-demo__rtl-dir-pill visual-demo__rtl-dir-pill--rtl">\u2190 RTL</span>
                            <div class="visual-demo__rtl-card visual-demo__rtl-card--big" dir="rtl">
                                <div class="visual-demo__rtl-avatar visual-demo__rtl-avatar--good"></div>
                                <div class="visual-demo__rtl-text visual-demo__rtl-text--good">\u0641\u064a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u2014 \u2713</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('rtl', 'label.solution')}</div>
                </div>
            </div>`,
        detach: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('detach', 'error')}</div>
                    <div class="visual-demo__detach-layers">
                        <div class="visual-demo__detach-card visual-demo__detach-card--detached">
                            <div class="visual-demo__detach-icon">\u2702</div>
                            <div class="visual-demo__detach-name" style="color: #fff;">Button (detached)</div>
                            <div class="visual-demo__detach-style" style="background:#ff4444;border-radius:4px;height:8px;margin-top:6px"></div>
                        </div>
                        <div class="visual-demo__detach-card visual-demo__detach-card--detached">
                            <div class="visual-demo__detach-icon">\u2702</div>
                            <div class="visual-demo__detach-name" style="color: #90caf9;">Button (detached)</div>
                            <div class="visual-demo__detach-style" style="background:#cc3333;border-radius:8px;height:8px;margin-top:6px"></div>
                        </div>
                        <div class="visual-demo__detach-card visual-demo__detach-card--detached">
                            <div class="visual-demo__detach-icon">\u2702</div>
                            <div class="visual-demo__detach-name">Button (detached)</div>
                            <div class="visual-demo__detach-style" style="background:#aa2222;border-radius:12px;height:8px;margin-top:6px"></div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('detach', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('detach', 'solution')}</div>
                    <div class="visual-demo__detach-layers">
                        <div class="visual-demo__detach-card visual-demo__detach-card--linked" style="background: rgba(156, 39, 176, 0.25); border-color: #ce93d8;">
                            <div class="visual-demo__detach-icon">\uD83D\uDD17</div>
                            <div class="visual-demo__detach-name" style="color: #ce93d8;">Button primary (instance)</div>
                            <div class="visual-demo__detach-style" style="background:#2E7D32;border-radius:8px;height:8px;margin-top:6px"></div>
                        </div>
                        <div class="visual-demo__detach-card visual-demo__detach-card--linked" style="background: rgba(33, 150, 243, 0.25); border-color: #90caf9;">
                            <div class="visual-demo__detach-icon">\uD83D\uDD17</div>
                            <div class="visual-demo__detach-name" style="color: #90caf9;">Button secondary (instance)</div>
                            <div class="visual-demo__detach-style" style="background:#2E7D32;border-radius:8px;height:8px;margin-top:6px"></div>
                        </div>
                        <div class="visual-demo__detach-card visual-demo__detach-card--linked">
                            <div class="visual-demo__detach-icon">\uD83D\uDD17</div>
                            <div class="visual-demo__detach-name">Button success (instance)</div>
                            <div class="visual-demo__detach-style" style="background:#2E7D32;border-radius:8px;height:8px;margin-top:6px"></div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('detach', 'label.solution')}</div>
                </div>
            </div>`,
        zindex: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('zindex', 'error')}</div>
                    <div class="visual-demo__zindex-stack visual-demo__zindex-stack--chaos">
                        <div class="visual-demo__zindex-layer visual-demo__zindex-layer--bad" style="background:#ff4444;top:10px;left:5px;z-index:4">
                            <span class="visual-demo__zindex-num">z: 999</span>
                            <span class="visual-demo__zindex-name">header</span>
                        </div>
                        <div class="visual-demo__zindex-layer visual-demo__zindex-layer--bad" style="background:#cc3333;top:30px;left:25px;z-index:3">
                            <span class="visual-demo__zindex-num">z: 9999</span>
                            <span class="visual-demo__zindex-name">modal</span>
                        </div>
                        <div class="visual-demo__zindex-layer visual-demo__zindex-layer--bad" style="background:#993333;top:50px;left:45px;z-index:2">
                            <span class="visual-demo__zindex-num">z: 99999</span>
                            <span class="visual-demo__zindex-name">tooltip</span>
                        </div>
                        <div class="visual-demo__zindex-layer visual-demo__zindex-layer--bad" style="background:#662222;top:70px;left:65px;z-index:1">
                            <span class="visual-demo__zindex-num">z: 999999</span>
                            <span class="visual-demo__zindex-name">dropdown</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('zindex', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('zindex', 'solution')}</div>
                    <div class="visual-demo__zindex-stack visual-demo__zindex-stack--ordered">
                        <div class="visual-demo__zindex-layer visual-demo__zindex-layer--good" style="background:#1B5E20;top:70px;left:5px;z-index:1">
                            <span class="visual-demo__zindex-num">z: 1</span>
                            <span class="visual-demo__zindex-name">base</span>
                        </div>
                        <div class="visual-demo__zindex-layer visual-demo__zindex-layer--good" style="background:#2E7D32;top:50px;left:15px;z-index:2">
                            <span class="visual-demo__zindex-num">z: 100</span>
                            <span class="visual-demo__zindex-name">dropdown</span>
                        </div>
                        <div class="visual-demo__zindex-layer visual-demo__zindex-layer--good" style="background:#388E3C;top:30px;left:25px;z-index:3">
                            <span class="visual-demo__zindex-num">z: 200</span>
                            <span class="visual-demo__zindex-name">sticky</span>
                        </div>
                        <div class="visual-demo__zindex-layer visual-demo__zindex-layer--good" style="background:#43A047;top:10px;left:35px;z-index:4">
                            <span class="visual-demo__zindex-num">z: 300</span>
                            <span class="visual-demo__zindex-name">modal</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('zindex', 'label.solution')}</div>
                </div>
            </div>`,
        bundle: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('bundle', 'error')}</div>
                    <div class="visual-demo__bundle-chart">
                        <div class="visual-demo__bundle-row visual-demo__bundle-row--big">
                            <div class="visual-demo__bundle-bar visual-demo__bundle-bar--heavy" style="width:90%"></div>
                            <span class="visual-demo__bundle-label--error visual-demo__bundle-label--big">moment.js 73KB</span>
                        </div>
                        <div class="visual-demo__bundle-row visual-demo__bundle-row--big">
                            <div class="visual-demo__bundle-bar visual-demo__bundle-bar--heavy" style="width:88%"></div>
                            <span class="visual-demo__bundle-label--error visual-demo__bundle-label--big">lodash 72KB</span>
                        </div>
                        <div class="visual-demo__bundle-total visual-demo__bundle-total--bad">TOTAL: 145KB</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('bundle', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('bundle', 'solution')}</div>
                    <div class="visual-demo__bundle-chart">
                        <div class="visual-demo__bundle-row visual-demo__bundle-row--big">
                            <div class="visual-demo__bundle-bar visual-demo__bundle-bar--light" style="width:3%"></div>
                            <span class="visual-demo__bundle-label--success visual-demo__bundle-label--big">Intl nativo 0.2KB</span>
                        </div>
                        <div class="visual-demo__bundle-row visual-demo__bundle-row--big">
                            <div class="visual-demo__bundle-bar visual-demo__bundle-bar--light" style="width:1.5%"></div>
                            <span class="visual-demo__bundle-label--success visual-demo__bundle-label--big">debounce 0.1KB</span>
                        </div>
                        <div class="visual-demo__bundle-total visual-demo__bundle-total--good">TOTAL: 0.3KB</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('bundle', 'label.solution')}</div>
                </div>
            </div>`,
        responsive: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('responsive', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--overflow">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__phone-content visual-demo__phone-content--overflow">
                                <div class="visual-demo__phone-header">Mi App</div>
                                <div class="visual-demo__phone-block visual-demo__phone-block--wide">width: 1200px fijo</div>
                                <div class="visual-demo__phone-overflow-indicator">\u2192\u2192\u2192</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('responsive', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('responsive', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__phone-content visual-demo__phone-content--fit">
                                <div class="visual-demo__phone-header">Mi App</div>
                                <div class="visual-demo__phone-block visual-demo__phone-block--fluid">min(100%, 1200px)</div>
                                <div class="visual-demo__phone-block visual-demo__phone-block--fluid">Contenido fluido</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('responsive', 'label.solution')}</div>
                </div>
            </div>`,
        aria: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('aria', 'error')}</div>
                    <div class="visual-demo__btn-group visual-demo__btn-group--big">
                        <div class="visual-demo__btn visual-demo__btn--ghost visual-demo__btn--big">Ver m\u00e1s</div>
                        <div class="visual-demo__btn visual-demo__btn--ghost visual-demo__btn--big">Ver m\u00e1s</div>
                        <div class="visual-demo__btn visual-demo__btn--ghost visual-demo__btn--big">Ver m\u00e1s</div>
                    </div>
                    <div class="visual-demo__sr-output visual-demo__sr-output--bad">
                        \uD83D\uDD07 "Ver m\u00e1s, Ver m\u00e1s, Ver m\u00e1s"
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('aria', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('aria', 'solution')}</div>
                    <div class="visual-demo__btn-group visual-demo__btn-group--big">
                        <div class="visual-demo__btn visual-demo__btn--good visual-demo__btn--big">Ofertas</div>
                        <div class="visual-demo__btn visual-demo__btn--good visual-demo__btn--big">Noticias</div>
                        <div class="visual-demo__btn visual-demo__btn--good visual-demo__btn--big">Blog</div>
                    </div>
                    <div class="visual-demo__sr-output visual-demo__sr-output--good">
                        \uD83D\uDD0A "Ver m\u00e1s ofertas, noticias, blog"
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('aria', 'label.solution')}</div>
                </div>
            </div>`,
        liveregion: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('liveregion', 'error')}</div>
                    <div class="visual-demo__toast visual-demo__toast--silent visual-demo__toast--big">
                        \u2713 Guardado con \u00e9xito
                        <div class="visual-demo__toast-sr visual-demo__toast-sr--big">\uD83D\uDD07 Silencio</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('liveregion', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('liveregion', 'solution')}</div>
                    <div class="visual-demo__toast visual-demo__toast--announced visual-demo__toast--big">
                        \u2713 Guardado con \u00e9xito
                        <div class="visual-demo__toast-sr visual-demo__toast-sr--big">\uD83D\uDD0A Anunciado</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('liveregion', 'label.solution')}</div>
                </div>
            </div>`,
        version: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('version', 'error')}</div>
                    <div class="visual-demo__version-compare">
                        <div class="visual-demo__version-badge visual-demo__version-badge--outdated visual-demo__version-badge--big">
                            <span class="visual-demo__version-label">Producto</span>
                            <span class="visual-demo__version-num">v1.2</span>
                        </div>
                        <div class="visual-demo__version-arrow">\u2260</div>
                        <div class="visual-demo__version-badge visual-demo__version-badge--current visual-demo__version-badge--big">
                            <span class="visual-demo__version-label">DS</span>
                            <span class="visual-demo__version-num">v2.3</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('version', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('version', 'solution')}</div>
                    <div class="visual-demo__version-compare">
                        <div class="visual-demo__version-badge visual-demo__version-badge--synced visual-demo__version-badge--big">
                            <span class="visual-demo__version-label">Producto</span>
                            <span class="visual-demo__version-num">v2.3</span>
                        </div>
                        <div class="visual-demo__version-arrow">=</div>
                        <div class="visual-demo__version-badge visual-demo__version-badge--synced visual-demo__version-badge--big">
                            <span class="visual-demo__version-label">DS</span>
                            <span class="visual-demo__version-num">v2.3</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('version', 'label.solution')}</div>
                </div>
            </div>`,
        negative: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('negative', 'error')}</div>
                    <div class="visual-demo__margin-parent visual-demo__margin-parent--big">
                        <div class="visual-demo__margin-child--bad visual-demo__margin-child--big">
                            <span>margin: -20px -10px</span>
                            <span class="visual-demo__margin-note">"funciona, no lo toques"</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('negative', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('negative', 'solution')}</div>
                    <div class="visual-demo__margin-parent visual-demo__margin-parent--big" style="display:grid;gap:0">
                        <div class="visual-demo__margin-child--good visual-demo__margin-child--big">
                            <span>grid layout</span>
                            <span class="visual-demo__margin-note">Sin hacks, sin m\u00e1rgenes negativos</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('negative', 'label.solution')}</div>
                </div>
            </div>`,
        shadow: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error" style="padding:0;overflow:hidden">
                    <div class="visual-demo__side-title visual-demo__side-title--error" style="padding:8px 12px">${getDemo('shadow', 'error')}</div>
                    <div class="visual-demo__carousel visual-demo__carousel--clipped visual-demo__carousel--big">
                        <div class="visual-demo__carousel-card visual-demo__carousel-card--error visual-demo__carousel-card--big"></div>
                        <div class="visual-demo__carousel-card visual-demo__carousel-card--error visual-demo__carousel-card--big"></div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error" style="padding:8px 12px">${getDemo('shadow', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution" style="padding:0;overflow:hidden">
                    <div class="visual-demo__side-title visual-demo__side-title--success" style="padding:8px 12px">${getDemo('shadow', 'solution')}</div>
                    <div class="visual-demo__carousel visual-demo__carousel--safe visual-demo__carousel--big">
                        <div class="visual-demo__carousel-card visual-demo__carousel-card--good visual-demo__carousel-card--big"></div>
                        <div class="visual-demo__carousel-card visual-demo__carousel-card--good visual-demo__carousel-card--big"></div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success" style="padding:8px 12px">${getDemo('shadow', 'label.solution')}</div>
                </div>
            </div>`,
        specificity: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('specificity', 'error')}</div>
                    <div class="visual-demo__specificity visual-demo__specificity--big">
                        <div class="visual-demo__specificity-selector--bad visual-demo__specificity-selector--big">#page .content div.box > span</div>
                        <div class="visual-demo__specificity-score visual-demo__specificity-score--bad visual-demo__specificity-score--big">
                            <span>Especificidad: 1-2-3</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('specificity', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('specificity', 'solution')}</div>
                    <div class="visual-demo__specificity visual-demo__specificity--big">
                        <div class="visual-demo__specificity-selector--good visual-demo__specificity-selector--big">.card__title</div>
                        <div class="visual-demo__specificity-score visual-demo__specificity-score--good visual-demo__specificity-score--big">
                            <span>Especificidad: 0-1-0</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('specificity', 'label.solution')}</div>
                </div>
            </div>`,
        deadcode: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('deadcode', 'error')}</div>
                    <div class="visual-demo__file-list visual-demo__file-list--big">
                        <div class="visual-demo__file visual-demo__file--dead visual-demo__file--big">
                            <span class="visual-demo__file-icon">\uD83D\uDC80</span> OldCarousel.jsx
                            <span class="visual-demo__file-status">sin uso desde 2022</span>
                        </div>
                        <div class="visual-demo__file visual-demo__file--dead visual-demo__file--big">
                            <span class="visual-demo__file-icon">\uD83D\uDC80</span> LegacyModal.css
                            <span class="visual-demo__file-status">400 l\u00edneas muertas</span>
                        </div>
                        <div class="visual-demo__file visual-demo__file--dead visual-demo__file--big">
                            <span class="visual-demo__file-icon">\uD83D\uDC80</span> utils_old.js
                            <span class="visual-demo__file-status">0% coverage</span>
                        </div>
                        <div class="visual-demo__file visual-demo__file--alive visual-demo__file--big">
                            <span class="visual-demo__file-icon">\u2705</span> App.jsx
                            <span class="visual-demo__file-status">en uso</span>
                        </div>
                    </div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('deadcode', 'solution')}</div>
                    <div class="visual-demo__file-list visual-demo__file-list--big">
                        <div class="visual-demo__file visual-demo__file--clean visual-demo__file--big">
                            <span class="visual-demo__file-icon">\u2705</span> App.jsx
                            <span class="visual-demo__file-status">100% en uso</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('deadcode', 'label.solution')}</div>
                </div>
            </div>`,
        decimals: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('decimals', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__pixel-demo">
                                <div class="visual-demo__pixel-line visual-demo__pixel-line--blurry">0.5px border</div>
                                <div class="visual-demo__pixel-box visual-demo__pixel-box--bad">100.3px</div>
                                <div class="visual-demo__pixel-badge visual-demo__pixel-badge--bad">Anti-alias artefactos</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('decimals', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('decimals', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__pixel-demo">
                                <div class="visual-demo__pixel-line visual-demo__pixel-line--crisp">1px border</div>
                                <div class="visual-demo__pixel-box visual-demo__pixel-box--good">100px</div>
                                <div class="visual-demo__pixel-badge visual-demo__pixel-badge--good">N\u00edtido \u2713</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('decimals', 'label.solution')}</div>
                </div>
            </div>`,
        lineclamp: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('lineclamp', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__clamp-card">
                                <div class="visual-demo__clamp-text visual-demo__clamp-text--single">El texto largo queda cortado de forma brusca sin sentido y corta palabr\u2026</div>
                                <div class="visual-demo__clamp-tag visual-demo__clamp-tag--bad">white-space: nowrap</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('lineclamp', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('lineclamp', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__clamp-card">
                                <div class="visual-demo__clamp-text visual-demo__clamp-text--multi">El texto largo se muestra en hasta tres l\u00edneas y luego termina\u2026</div>
                                <div class="visual-demo__clamp-tag visual-demo__clamp-tag--good">-webkit-line-clamp: 3</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('lineclamp', 'label.solution')}</div>
                </div>
            </div>`,
        naming: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('naming', 'error')}</div>
                    <div class="visual-demo__naming-grid">
                        <div class="visual-demo__naming-role visual-demo__naming-role--design">Design</div>
                        <div class="visual-demo__naming-name visual-demo__naming-name--bad">Card/Destacada</div>
                        <div class="visual-demo__naming-role visual-demo__naming-role--dev">Dev</div>
                        <div class="visual-demo__naming-name visual-demo__naming-name--bad">FeaturedTile</div>
                        <div class="visual-demo__naming-role visual-demo__naming-role--qa">QA</div>
                        <div class="visual-demo__naming-name visual-demo__naming-name--bad">"el recuadro"</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('naming', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('naming', 'solution')}</div>
                    <div class="visual-demo__naming-grid">
                        <div class="visual-demo__naming-role visual-demo__naming-role--design">Design</div>
                        <div class="visual-demo__naming-name visual-demo__naming-name--good">Card/Featured</div>
                        <div class="visual-demo__naming-role visual-demo__naming-role--dev">Dev</div>
                        <div class="visual-demo__naming-name visual-demo__naming-name--good">CardFeatured</div>
                        <div class="visual-demo__naming-role visual-demo__naming-role--qa">QA</div>
                        <div class="visual-demo__naming-name visual-demo__naming-name--good">Card Featured</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('naming', 'label.solution')}</div>
                </div>
            </div>`,
        overlap: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('overlap', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__overlap-demo visual-demo__overlap-demo--bad">
                                <div class="visual-demo__overlap-content">Contenido importante importante importante importante importante importante importante importante importante importante importante importante importante importante importante importanteimportante importante importante importante importante</div>
                                <div class="visual-demo__overlap-btn visual-demo__overlap-btn--bad">+ Add</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('overlap', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('overlap', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__overlap-demo visual-demo__overlap-demo--good">
                                <div class="visual-demo__overlap-content">Contenido importante</div>
                                <div class="visual-demo__overlap-btn visual-demo__overlap-btn--good">+ Add</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">${getDemo('overlap', 'label.solution')}</div>
                </div>
            </div>`,
        pointerevents: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('pointerevents', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__pe-demo">
                                <div class="visual-demo__pe-overlay visual-demo__pe-overlay--blocking">decorativo::before</div>
                                <div class="visual-demo__pe-btn visual-demo__pe-btn--blocked">
                                    <span>\uD83D\uDD12</span> Bloqueado
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">${getDemo('pointerevents', 'label.error')}</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('pointerevents', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__pe-demo">
                                <div class="visual-demo__pe-overlay visual-demo__pe-overlay--passthrough">decorativo::before</div>
                                <div class="visual-demo__pe-btn visual-demo__pe-btn--active">
                                    <span>\u2713</span> Bot\u00f3n funciona
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">Click atraviesa el decorativo \u2713</div>
                </div>
            </div>`,
        viewport: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('viewport', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen" style="position:relative;overflow:hidden">
                            <div class="visual-demo__viewport-hero visual-demo__viewport-hero--cut">
                                <div class="visual-demo__viewport-bar">Nav bar del browser</div>
                                <div class="visual-demo__viewport-content">Hero 100vh</div>
                                <div class="visual-demo__viewport-hidden">\u26a0 CTA oculto</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">CTA queda detr\u00e1s de la barra</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('viewport', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen" style="position:relative;overflow:hidden">
                            <div class="visual-demo__viewport-hero visual-demo__viewport-hero--full">
                                <div class="visual-demo__viewport-content">Hero 100dvh</div>
                                <div class="visual-demo__viewport-cta">CTA visible \u2713</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">dvh descuenta la barra del browser \u2713</div>
                </div>
            </div>`,
        safearea: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('safearea', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--notch visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-island"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__safearea-content">App content</div>
                            <div class="visual-demo__safearea-bar visual-demo__safearea-bar--bad">
                                <span>\u2715 Nav bar</span>
                            </div>
                        </div>
                        <div class="visual-demo__phone-homeind visual-demo__phone-homeind--cover">
                            <span class="visual-demo__safearea-hidden-label">HIDDEN</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">bottom: 0 \u2014 detr\u00e1s del home indicator</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('safearea', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--notch visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-island"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__safearea-content">App content</div>
                            <div class="visual-demo__safearea-bar visual-demo__safearea-bar--good">
                                <span>\u2713 Nav bar</span>
                            </div>
                        </div>
                        <div class="visual-demo__phone-homeind"></div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">env(safe-area-inset-bottom) \u2713</div>
                </div>
            </div>`,
        grid: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('grid', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__grid-demo visual-demo__grid-demo--float">
                                <div class="visual-demo__grid-col visual-demo__grid-col--bad">33%</div>
                                <div class="visual-demo__grid-col visual-demo__grid-col--bad">33%</div>
                                <div class="visual-demo__grid-col visual-demo__grid-col--bad">33%</div>
                                <div class="visual-demo__grid-clear">clearfix hack</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">float: left \u2014 t\u00e9cnica 2010</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('grid', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__grid-demo visual-demo__grid-demo--modern">
                                <div class="visual-demo__grid-col visual-demo__grid-col--good">1fr</div>
                                <div class="visual-demo__grid-col visual-demo__grid-col--good">1fr</div>
                                <div class="visual-demo__grid-col visual-demo__grid-col--good">1fr</div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">display: grid \u2014 est\u00e1ndar \u2713</div>
                </div>
            </div>`,
        maintainability: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('maintainability', 'error')}</div>
                    <div class="visual-demo__file-list visual-demo__file-list--big">
                        <div class="visual-demo__file visual-demo__file--dead visual-demo__file--big">
                            <span class="visual-demo__file-icon">\uD83D\uDCA3</span> styles.css
                            <span class="visual-demo__file-status">4000 l\u00edneas, 0 comentarios</span>
                        </div>
                        <div class="visual-demo__file visual-demo__file--dead visual-demo__file--big">
                            <span class="visual-demo__file-icon">\u2753</span> margin-top: 37px
                            <span class="visual-demo__file-status">\u00bfPor qu\u00e9 37?</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">Imposible de mantener</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('maintainability', 'solution')}</div>
                    <div class="visual-demo__file-list visual-demo__file-list--big">
                        <div class="visual-demo__file visual-demo__file--clean visual-demo__file--big">
                            <span class="visual-demo__file-icon">\u2705</span> tokens/_spacing.css
                            <span class="visual-demo__file-status">--space-lg: 2rem (32px)</span>
                        </div>
                        <div class="visual-demo__file visual-demo__file--clean visual-demo__file--big">
                            <span class="visual-demo__file-icon">\u2705</span> components/_card.css
                            <span class="visual-demo__file-status">margin: var(--space-lg)</span>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">Cada archivo tiene un prop\u00f3sito \u2713</div>
                </div>
            </div>`,
        obsolete: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('obsolete', 'error')}</div>
                    <div class="visual-demo__bundle-chart">
                        <div class="visual-demo__bundle-row visual-demo__bundle-row--big">
                            <div class="visual-demo__bundle-bar visual-demo__bundle-bar--heavy" style="width:85%"></div>
                            <span class="visual-demo__bundle-label--error visual-demo__bundle-label--big">jQuery UI 93KB</span>
                        </div>
                        <div class="visual-demo__bundle-row visual-demo__bundle-row--big">
                            <div class="visual-demo__bundle-bar visual-demo__bundle-bar--heavy" style="width:70%"></div>
                            <span class="visual-demo__bundle-label--error visual-demo__bundle-label--big">Bootstrap 3.x 120KB</span>
                        </div>
                        <div class="visual-demo__bundle-total visual-demo__bundle-total--bad">CVEs + 213KB muertos</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">Seguridad + rendimiento rotos</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('obsolete', 'solution')}</div>
                    <div class="visual-demo__bundle-chart">
                        <div class="visual-demo__bundle-row visual-demo__bundle-row--big">
                            <div class="visual-demo__bundle-bar visual-demo__bundle-bar--light" style="width:2%"></div>
                            <span class="visual-demo__bundle-label--success visual-demo__bundle-label--big">CSS Grid nativo 0KB</span>
                        </div>
                        <div class="visual-demo__bundle-row visual-demo__bundle-row--big">
                            <div class="visual-demo__bundle-bar visual-demo__bundle-bar--light" style="width:2%"></div>
                            <span class="visual-demo__bundle-label--success visual-demo__bundle-label--big">&lt;input date&gt; nativo 0KB</span>
                        </div>
                        <div class="visual-demo__bundle-total visual-demo__bundle-total--good">0 CVEs + auditable</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">Stack moderno, seguro \u2713</div>
                </div>
            </div>`,
        audits: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('audits', 'error')}</div>
                    <div class="visual-demo__audit-scores">
                        <div class="visual-demo__audit-score visual-demo__audit-score--unknown">?</div>
                        <div class="visual-demo__audit-label">Performance</div>
                        <div class="visual-demo__audit-score visual-demo__audit-score--unknown">?</div>
                        <div class="visual-demo__audit-label">Accesibilidad</div>
                        <div class="visual-demo__audit-score visual-demo__audit-score--unknown">?</div>
                        <div class="visual-demo__audit-label">SEO</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">"En la v1 estaba bien..."</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('audits', 'solution')}</div>
                    <div class="visual-demo__audit-scores">
                        <div class="visual-demo__audit-score visual-demo__audit-score--good">96</div>
                        <div class="visual-demo__audit-label">Performance</div>
                        <div class="visual-demo__audit-score visual-demo__audit-score--good">100</div>
                        <div class="visual-demo__audit-label">Accesibilidad</div>
                        <div class="visual-demo__audit-score visual-demo__audit-score--good">98</div>
                        <div class="visual-demo__audit-label">SEO</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">Lo que se mide, mejora \u2713</div>
                </div>
            </div>`,
        scalability: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('scalability', 'error')}</div>
                    <div class="visual-demo__bus-demo">
                        <div class="visual-demo__bus-person visual-demo__bus-person--key">\uD83D\uDC77 "Solo yo s\u00e9"</div>
                        <div class="visual-demo__bus-arrow">\u2193 se va</div>
                        <div class="visual-demo__bus-result visual-demo__bus-result--bad">50 componentes sin doc</div>
                        <div class="visual-demo__bus-result visual-demo__bus-result--bad">0 tests</div>
                        <div class="visual-demo__bus-result visual-demo__bus-result--bad">Cat\u00e1strofe</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">Bus factor = 1</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('scalability', 'solution')}</div>
                    <div class="visual-demo__bus-demo">
                        <div class="visual-demo__bus-person visual-demo__bus-person--team">\uD83D\uDC77\uD83D\uDC69\u200D\uD83D\uDCBB\uD83E\uDDD1\u200D\uD83C\uDFA8 Equipo completo</div>
                        <div class="visual-demo__bus-result visual-demo__bus-result--good">Storybook completo</div>
                        <div class="visual-demo__bus-result visual-demo__bus-result--good">Tests visuales</div>
                        <div class="visual-demo__bus-result visual-demo__bus-result--good">Gu\u00eda de contribuci\u00f3n</div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">Bus factor &gt; 1 \u2713</div>
                </div>
            </div>`,
        scroll: `
            <div class="visual-demo visual-demo--large">
                <div class="visual-demo__side visual-demo__side--error visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--error">${getDemo('scroll', 'error')}</div>
                    <div class="visual-demo__phone visual-demo__phone--error">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__scroll-demo visual-demo__scroll-demo--big">
                                <div class="visual-demo__scroll-modal visual-demo__scroll-modal--big">Modal abierto</div>
                                <div class="visual-demo__scroll-body visual-demo__scroll-body--scrolling visual-demo__scroll-body--big">
                                    \u2195 Body con scroll
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--error">Scroll detr\u00e1s del modal</div>
                </div>
                <div class="visual-demo__arrow">\u2192</div>
                <div class="visual-demo__side visual-demo__side--solution visual-demo__side--centered">
                    <div class="visual-demo__side-title visual-demo__side-title--success">${getDemo('scroll', 'solution')}</div>
                    <div class="visual-demo__phone visual-demo__phone--ok">
                        <div class="visual-demo__phone-notch"></div>
                        <div class="visual-demo__phone-screen">
                            <div class="visual-demo__scroll-demo visual-demo__scroll-demo--big">
                                <div class="visual-demo__scroll-modal visual-demo__scroll-modal--big">Modal abierto</div>
                                <div class="visual-demo__scroll-body visual-demo__scroll-body--locked visual-demo__scroll-body--big">
                                    \uD83D\uDD12 Bloqueado
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="visual-demo__label visual-demo__label--success">overflow:hidden en body \u2713</div>
                </div>
            </div>`
    };
    return demos[visual] || '';
}
window.buildVisualDemo = buildVisualDemo;
