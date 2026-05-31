# ¿Design System o Disaster System? 🧟‍♂️
## El cadáver exquisito entre diseño y desarrollo

**Ponente:** María Rogles López
**Eventos:** charla itinerante con varias ediciones (ver § Ediciones).
**Dinámica:** Creación colectiva analógica (Cadáver Exquisito) con voluntarios del público + landing pedagógica interactiva.

> La misma landing sirve para todas las ediciones; cada una se distingue por la URL (`/wtm`, `/w4tt`, `/guarandinga`…). El branding, los hashtags y las secciones opcionales (Sponsors + Causa social) se cargan desde [`js/event-config.js`](../js/event-config.js). Ver detalles técnicos en el [README](../README.md#arquitectura-multi-evento).

---

## ⏱️ Mapa de Tiempos (Total: 40 min sin contar Q&A)

### 0. El Inicio: El dolor compartido (05 min)
* **Introducción:** Del diseño gráfico al desarrollo: el drama de los "microinfartos" visuales.
* **Dinámica:** Selección de voluntarios del público con perfiles mixtos (Diseño, Dev y otros perfiles).
* **Instrucciones:** Reglas del juego (30s por turno, doblar y pasar).

---

### 1. La Parte Superior: Cabeza estilo Frankenstein (10 min)
* **Dinámica en vivo:** Turno 1 de dibujo - Cabeza (30s).
* **🧠 El Cerebro:** Estrategia.
* **👁️ Los Ojos:** Accesibilidad visual.
* **👂 Las Orejas:** Accesibilidad auditiva.
* **👄 La Boca:** Internacionalización y contenidos.

---

### 2. La Parte Central: Tronco estilo hombre de hojalata (10 min)
* **Dinámica en vivo:** Turno 2 de dibujo - Tronco (30s).
* **🦴 El Tronco:** Arquitectura.
* **❤️ El Corazón:** Componentes.
* **💪 Los Brazos:** Jerarquía.
* **🤚 Las Manos:** Interacción.

---

### 3. La Parte Inferior: Piernas y cola estilo lagarto (10 min)
* **Dinámica en vivo:** Turno 3 de dibujo - Piernas (30s).
* **🦿 Las Piernas:** Flexibilidad y responsive.
* **🦶 Los Pies:** Escalabilidad y mantenimiento.
* **🦎 La Cola:** Deuda técnica (Legacy).

---

### 4. El Clímax: El Despertar del Sistema (05 min)
* **La Revelación:** Apertura de los folios y visualización del desastre creativo.
* **La Metamorfosis:** Transición en la landing hacia la criatura coordinada.
* **Conclusión:** El Design System como **Contrato Social y Empatía Técnica**.
* **Cierre:** Invitación a compartir resultados en Linkedin con #DisasterSystem mencionando a @WTM.

---

### 5. Q&A (05 min)
* Q&A de 5-10 min fuera del tiempo de charla.

---

## 🎟️ Ediciones

| Edición | URL | Fecha | Cierre extendido |
|---|---|---|---|
| **WTM Madrid** (IWD2026 · Celonis) | `/wtm` (raíz) | 17 abril 2026 | — |
| **W4TT** (Anfitrionas Hablemos de Tecnología, NTT DATA) | `/w4tt` | — | ⭐ Sponsors + ❤️ Causa: Daño Cerebral Estatal |
| **Guarandinga Tech** | `/guarandinga` | — | — |

Cada edición sustituye el logo del evento (corazón del cuerpo, footer), los hashtags del cierre y el enlace a LinkedIn de la comunidad. Las **secciones opcionales** (Sponsors + Causa) se inyectan solo si están declaradas en la configuración del evento — no aparece markup ni botón de navegación cuando no aplica.

---

### Bonus track W4TT — Sponsors + Causa social (+02 min)

Solo en `/w4tt`. Se inserta una slide entre el cierre y el footer con un dot de navegación adicional (icono de estrella ⭐).

* **Columna izquierda — Sponsors:** Sede (NTT DATA), Platino (Tokiota, Bravent, axazure, Encamina, Devoteam), Oro (NextStep, Prodware, V-Valley), Plata (Infoavan, Crosspoint, Creativity Spark).
* **Puente narrativo:** *"// gracias · el 100 % de las entradas va a esta causa →"* — conecta visualmente lo que financian los patrocinadores con su destino.
* **Columna derecha — Causa (Daño Cerebral Estatal):**
  * Brand header con logo y URL.
  * Cerebro animado (reutiliza el componente CSS-art de la cabeza).
  * 5 servicios de la asociación: Información y apoyo · Autonomía personal · Recursos asistenciales · Prevención y sensibilización · Incidencia y representación.
  * Manifiesto con ilustración "Atención universal e inclusiva" + cita *"Una vida salvada merece ser vivida"*.
  * CTA: web + teléfono (914 178 905) + colaborador (Fundación ONCE).