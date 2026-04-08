# Design System or Disaster System? · ¿Design System o Disaster System? 🧟‍♂️

> *The exquisite corpse between design and development.*  
> *El cadáver exquisito entre diseño y desarrollo.*

🔗 **Live demo / Demo en vivo:** [muirogles.github.io/disaster-system](https://muirogles.github.io/disaster-system/)

---

## English

### What is this?

An interactive landing page built to support a live tech talk about Design Systems — using the **Exquisite Corpse** game mechanic to make the abstract tangible, the technical playful, and the collaborative unforgettable.

The talk uses an old surrealist parlour game to show, live on stage, what happens when designers, developers, and mixed-profile teams build *without a shared system*:

1. Six volunteers each draw one section of a body (head / torso / legs) in **30 seconds**, without seeing what the others drew.
2. They fold the paper and pass it on.
3. The result is revealed: a glorious, chaotic **Disaster System** creature.
4. The landing then **transforms** that creature into a healthy, coordinated human — a Design System done right.

Each body part maps to a real Design System concept, explored live with code snippets and tool recommendations.

### Body Parts → Design System Concepts

| Body Part | Concept |
|---|---|
| 🧠 Brain | Design Tokens & naming strategy |
| 👁️ Eyes | Visual accessibility (contrast, focus, retina) |
| 👂 Ears | Semantic HTML & screen reader support |
| 👄 Mouth | Internationalisation (i18n) & content strategy |
| 🦴 Trunk | CSS architecture & layout |
| ❤️ Heart | Components, instances & versioning |
| 💪 Arms | Z-index hierarchy & skeleton screens |
| 🤚 Hands | Touch targets, pointer events & scroll lock |
| 🦿 Legs | Responsive design & fluid units |
| 🦶 Feet | Scalability, methodology & audits |
| 🦎 Tail | Technical debt & legacy dependencies |

### Features

- **30-second countdown timer** with a Web Audio API heartbeat synthesizer — escalating urgency, full explosion alarm at zero
- **Interactive body parts** — click any part to open a modal panel with code snippets, error examples, and tool recommendations
- **Reanimate button** — CSS transitions that transform the Frankenstein/Tin Man/Lizard creature into a healthy human
- **ES / EN language toggle** — full i18n support, persisted in `localStorage`
- **LinkedIn share CTA** — direct share button pointing to the live demo
- **No build step** — pure HTML, CSS, and vanilla JS

### Tech Stack

- **HTML / CSS / JavaScript** — no frameworks, no bundlers
- **Web Audio API** — procedural heartbeat, alarm, shock, and success sounds
- **CSS custom properties** — design tokens for the entire visual system
- **CSS art** — all body parts drawn in pure CSS, no images
- **Vanilla i18n** — lightweight ES/EN switching with JSON translation files
- **GitHub Pages** — zero-config deployment

### How to Use

Open `index.html` with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) VS Code extension (recommended — correctly serves the i18n JSON files), or visit the live version directly.

**Timer:** Press **Space** or click the clock FAB to start · press again to stop.

---

## Español

### ¿Qué es esto?

Una landing interactiva creada para apoyar en directo una charla técnica sobre Design Systems — usando el juego del **Cadáver Exquisito** para hacer lo abstracto tangible, lo técnico lúdico y lo colaborativo inolvidable.

La charla utiliza el juego surrealista del Cadáver Exquisito para demostrar en vivo qué ocurre cuando diseñadores, desarrolladores y perfiles mixtos construyen *sin un sistema compartido*:

1. Seis voluntarios dibujan cada uno una sección del cuerpo (cabeza / tronco / piernas) en **30 segundos**, sin ver lo que han dibujado los demás.
2. Doblan el papel y lo pasan.
3. Se revela el resultado: una criatura gloriosa y caótica — el **Disaster System**.
4. La landing **transforma** esa criatura en un ser humano sano y coordinado: un Design System bien hecho.

Cada parte del cuerpo corresponde a un concepto real de Design System, explorado en directo con snippets de código y recomendaciones de herramientas.

### Partes del cuerpo → Conceptos del Design System

| Parte | Concepto |
|---|---|
| 🧠 Cerebro | Design Tokens y estrategia de naming |
| 👁️ Ojos | Accesibilidad visual (contraste, foco, retina) |
| 👂 Orejas | HTML semántico y lectores de pantalla |
| 👄 Boca | Internacionalización (i18n) y contenidos |
| 🦴 Tronco | Arquitectura CSS y layout |
| ❤️ Corazón | Componentes, instancias y versiones |
| 💪 Brazos | Jerarquía z-index y skeleton screens |
| 🤚 Manos | Touch targets, pointer events y scroll lock |
| 🦿 Piernas | Diseño responsive y unidades fluidas |
| 🦶 Pies | Escalabilidad, metodología y auditorías |
| 🦎 Cola | Deuda técnica y dependencias legacy |

### Funcionalidades

- **Cronómetro de 30 segundos** con sintetizador procedural (Web Audio API) — latido que escala en urgencia y explosión de alarma al llegar a cero
- **Partes del cuerpo interactivas** — clic en cualquier parte para abrir un panel modal con snippets, errores y herramientas recomendadas
- **Botón Reanimar** — transiciones CSS que transforman la criatura en un ser humano coordinado
- **Selector de idioma ES / EN** — i18n completo, persistido en `localStorage`
- **CTA de compartir en LinkedIn** — botón de compartir directo a la demo en vivo
- **Sin proceso de build** — HTML, CSS y JS vanilla puros

### Cómo usarlo

Abre `index.html` con la extensión [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) de VS Code (recomendado — sirve correctamente los archivos JSON de i18n), o visita la versión en vivo directamente.

**Cronómetro:** Pulsa **Espacio** o el FAB del reloj para iniciar · pulsa de nuevo para detener.

---

## Project Structure / Estructura

```
disaster-system/
├── index.html              # Main page / Página principal
├── css/
│   ├── base/               # Variables, reset, typography, buttons
│   ├── layout/             # Corpse grid, modal layout, footer
│   ├── components/         # Each body part (brain, eyes, trunk…)
│   ├── slides/             # Intro and timer slides
│   ├── modal/              # Modal panel, error cards, demos
│   └── animations/         # Keyframes and transitions
├── js/
│   ├── audio-synth.js      # Web Audio API synthesizer
│   ├── timer.js            # 30-second countdown
│   ├── modal.js            # Modal rendering
│   ├── i18n.js             # Language switching
│   └── visual-demos.js     # Interactive demos
├── i18n/
│   ├── es.json             # Spanish (default) / Español (por defecto)
│   └── en.json             # English / Inglés
└── context/                # Talk outline & speaker script
```

---

## License / Licencia

[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — Free to share and adapt for non-commercial purposes with attribution · Libre para compartir y adaptar con fines no comerciales citando a la autora.

---

## Credits / Créditos

**Speaker & creator / Ponente y creadora:** [María Rogles López](https://linkedin.com/in/mariarogles)  
**Event / Evento:** [Women Techmakers Madrid](https://linkedin.com/in/wtmmadrid) × Celonis — International Women's Day 2026

---

`#DisasterSystem` `#DesignSystem` `#WTMMadrid` `#BreakThePattern` `#BuildWithIA`
