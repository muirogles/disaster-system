# ¿Design System o Disaster System?
## El cadáver exquisito entre diseño y desarrollo

> **Ponente:** María Rogles López — Women Techmakers Madrid · Celonis · 17 abril 2026
> **Duración:** 40–45 min + 5 min Q&A · **Formato:** TED-style con dinámica analógica (cadáver exquisito) + landing interactiva

---

## Estrategia de la dinámica

**Principio base:**
- Número de voluntarios **abierto** — se ajusta al tamaño de la sala y a la energía del público.
- Múltiplos de 3 funcionan mejor (3 dibujantes por papel × N papeles). Cuanto más grande el público, más papeles → más impacto visual en la revelación final.
- Lo **no negociable**: 3 turnos (cabeza / tronco / piernas), 30 s cada uno, un solo dibujante por parte.

**Setup:**
- Papeles A3 plegados previamente en tres franjas (cabeza / tronco / piernas) con dos marcas laterales de referencia. Los dos trazos que "cruzan el pliegue" son la única pista que recibe el siguiente dibujante.
- Un rotulador negro grueso por voluntario (que se vea desde el fondo de la sala).
- Un soporte rígido (clipboard o cartón) por papel.

**Mezcla de perfiles:**
- Cada papel debe pasar por manos de perfiles distintos — diseño, desarrollo y "tercera especie" (QA, PM, research, devops, data…).
- Rotar el orden en cada papel para que ningún perfil dibuje siempre la misma parte. Esto es clave para el cierre: al abrir los papeles, no se puede culpar al perfil, porque todos han tocado todas las partes.

**Reglas (se leen en voz alta antes de empezar):**
1. 30 segundos por turno. El cronómetro de la landing marca el tiempo en pantalla.
2. Dibujas, **doblas el papel por la marca**, y se lo pasas al siguiente **sin enseñarlo**.
3. **No se habla.** No se mira el papel del de al lado.
4. Dibujas **antes** de que María explique qué debería tener esa parte del cuerpo. Así descubrimos lo que sale "a ciegas" — y luego lo contrastamos con lo que *debería* haber salido si el equipo tuviera un contrato.

**Orden temporal dentro de cada sección:**
1. Anuncio el turno → los voluntarios correspondientes dibujan (30 s, cronómetro en pantalla).
2. Suena el timer → doblan y pasan.
3. **Entonces** abro el modal de esa parte del cuerpo y explico qué debería tener. El público compara mentalmente con lo que acaban de dibujar sin ver.

---

## Timing general

| Bloque | Min. | Acumulado |
|--------|------|-----------|
| 0 · Apertura + dolor compartido                     | 4   | 4   |
| 0b · Presentación de la dinámica + voluntarios      | 3   | 7   |
| 1a · Turno 1 (dibujan la cabeza, 30 s)              | 1   | 8   |
| 1b · Cabeza: cerebro, ojos, orejas, boca            | 11  | 19  |
| 2a · Turno 2 (dibujan el tronco, 30 s)              | 1   | 20  |
| 2b · Tronco: torso, corazón, brazos, manos          | 11  | 31  |
| 3a · Turno 3 (dibujan piernas, 30 s)                | 1   | 32  |
| 3b · Piernas: piernas, pies, cola                   | 9   | 41  |
| 4 · Clímax: revelación de los cadáveres             | 3   | 44  |
| 5 · Cierre: contrato social + llamada a la acción   | 2   | 46  |
| 6 · Q&A                                              | 5   | 51  |

---

## 0 · Apertura — Bienvenidos al programa (4 min)

Buenos días.

> *[Pausa. No proyectes nada aún. Mira al público.]*

Os voy a confesar algo antes de empezar: **esta es mi primera charla**.

> *[Pausa. Sonrisa pequeña.]*

Os cuento cómo he llegado hasta aquí. Yo empecé en diseño. Un día, por motivos que ni mi terapeuta entiende, me pasé al desarrollo. Llevo ya años ahí. Así que puedo decirlo con propiedad: **he tocado los dos mundos. Y sufro en los dos. A la vez. En estéreo.**

Sufro, por ejemplo, cuando abro un Figma que alguien llama *"Design System"* y encuentro **treinta y siete** tonos de gris — todos llamados "gris". Dieciséis botones llamados *Button*. Y espaciados como `13.6px`, `21.6px`, `0.38rem`.

Un jardín de números primos.

En diseño a eso lo llamamos *espasmo visual*. En desarrollo lo llamamos *"ya lo refactorizaremos"*. En ambos idiomas significa exactamente lo mismo: **nadie lo va a tocar nunca**.

Y como esta es mi primera vez aquí arriba, yo me he dicho: "María, si vas a salir al escenario por primera vez, **no salgas a dar una charla. Sal a montar un concurso.**"

> *[Pausa. Cambia el tono. Voz de presentador/a de concurso de los 90. Gesto teatral.]*

Así que, señoras y señores, bienvenidos… a la edición en directo de:

> *[Proyecta la landing. Beat.]*

**¿DESIGN SYSTEM…**

> *[Pausa. Deja que lean. Que se haga el silencio.]*

**…O DISASTER SYSTEM?**

> *[Pausa más larga. Sonrisa. Baja el tono de nuevo a conversacional.]*

Hoy no vengo con slides de teoría. Vengo con un experimento. En directo. Con vuestras manos. Vosotros sois el jurado, y unos cuantos valientes del público van a ser los concursantes.

Y al final de la charla, ellos van a descubrir, delante de todos vosotros, si lo que han construido entre todos merece el título de Design System… o el otro.

> *[Sonrisa cómplice.]*

Aviso: yo ya sé la respuesta. Ellos todavía no.

---

## 0b · Los concursantes (3 min)

> *[Tono de presentador/a. Entusiasmo medido.]*

Para jugar necesito **concursantes**. Y los quiero mezclados:

**Gente de diseño.**

**Gente de desarrollo.**

Y **gente de esa tercera especie**: QA, PM, research, devops, data… lo que sea que hagáis cuando en LinkedIn ponéis "& más".

> *[Señala cuando vayan subiendo. Reparte rotuladores. Asigna cada persona a su papel y turno sin explicar todavía en qué orden. Ajusta sobre la marcha al número de voluntarios que suban — en múltiplos de 3, un grupo de 3 por cada papel.]*

Venga, un aplauso para los valientes.

> *[Aplauso. Todos en escena.]*

El juego de hoy se llama **cadáver exquisito**. Quien lo conozca, no destripe nada. Para los que no: es un juego surrealista de los años 20. Varias personas dibujan un cuerpo **por turnos** — cabeza, tronco, piernas — pero **sin ver lo que ha dibujado el anterior**.

¿Os suena de algo? Yo diría que se parece bastante a un lunes cualquiera en muchos equipos.

> *[Sonrisa cómplice al público.]*

Tenemos **varios papeles**. Varias partidas en paralelo. Cada papel pasa por tres manos distintas — una de diseño, una de desarrollo, una de la tercera especie — pero en orden diferente. Cada concursante dibuja **una sola parte**. Y nadie, hasta el final, va a ver el resultado completo.

**Reglas del concurso:**

- Treinta segundos por turno. El cronómetro sale ahí arriba.
- Dibujáis, dobláis por la marca, pasáis al siguiente.
- **No se habla.** No se mira el papel del de al lado. No se pide consejo a la sala.
- Y una regla que va a costar: **no vais a saber qué os toca dibujar hasta que os toque**. Os lo digo justo antes del cronómetro.

> *[Pausa teatral. Mira al público.]*

Y al resto de la sala: mientras nuestros concursantes dibujan, vosotros y yo vamos a charlar. Tranquilos — no se van a perder nada. Ese es precisamente el truco de este juego: nunca se pierden nada, **porque nunca están escuchando**.

> *[Confirma rotuladores y papel. Cronómetro listo en pantalla.]*

¿Preparados, concursantes?

> *[Beat.]*

Empezamos.

---

## 1 · Parte superior — Cabeza estilo Frankenstein

### 1a · Turno 1 — El primer trazo (1 min)

> **Dibujantes del turno 1:** el primero de cada papel. Rotación de perfiles entre papeles (p. ej. diseño / desarrollo / tercera especie, cambiando el orden en cada papel).

Vosotros: os toca lo de arriba. Lo que hay por encima del cuello. No os digo más.

Treinta segundos. Cuando suene: doblar y pasar. **Sin enseñar.**

> *[Arranca el cronómetro. Silencio. Timer → "doblad y pasad". Quedan dos trazos asomando del pliegue: la única herencia para el siguiente.]*

Hecho. Tres criaturas empezadas a ciegas. Y ahora, mientras ellos respiran, os cuento una cosa.

### 1b · Mientras el papel viaja (11 min)

> **Subtítulo:** *El cerebro decide, los sentidos perciben. Cuando fallan, nadie nota que el sistema está ciego.*

Empezamos por arriba. Por lo que manda. Por lo que, si falla, arrastra al resto.

#### 🧠 Design tokens sin neuronas (3 min)

> *[Abre el modal del cerebro.]*

Un Design System sin tokens es una reunión sin orden del día: todo el mundo habla, nadie decide nada, y al final alguien pone `#333` porque "queda bien".

Un token no es un hex. Es un **acuerdo**. `color.surface.elevated`, `space.md`, `radius.button`. Los tokens son las pocas palabras comunes que diseño y dev usan sin traducirse.

Y aquí va el dato favorito de mis pesadillas:

`0.38rem`. `13.6px`. `21.6px`. Esos números no los ha decidido nadie. No existen en ningún idioma humano. Son lo que pasa cuando Figma escupe decimales y el dev hace `Ctrl+C` sin leer.

Base 8 — 8, 16, 24, 32, 48 — es el ritmo común. Es el metrónomo. Sin metrónomo, los tokens son solo variables con nombre bonito.

Pero un cerebro puede tener todas las neuronas del mundo… y aun así no ver lo que tiene delante.

#### 👁️ Miopía de la interfaz (3 min)

> *[Modal ojos.]*

Contraste 1.8:1 entre gris y gris. `outline: none` porque "es feo". Imágenes pixeladas en Retina porque alguien exportó a @1x y se fue a comer. Y, cómo no, `border: 0.7px solid #ccc` — porque un navegador, de repente, va a inventar el medio píxel.

Si vuestra interfaz no pasa un audit de accesibilidad, no tenéis un producto. Tenéis una obra de arte decorativa con usuarios invisibles.

Y si los ojos fallan, al menos podríais escuchar al usuario. Pero resulta que…

#### 👂 Sordera semántica (3 min)

> *[Modal orejas.]*

`<div onclick>` no es un botón. Es un div con ínfulas.

Tres botones con el texto "Ver más" no son tres botones — son un mismo sonido repetido tres veces en el oído de quien usa lector de pantalla. Y un toast que anuncia "guardado con éxito" sin `aria-live` es exactamente igual que si no existiera.

La accesibilidad no es un extra. Es la diferencia entre "producto para todos" y "producto para gente exactamente como yo".

Llegamos al último sentido de la cabeza. El que, cuando falla, nos deja sin voz.

#### 👄 Afasia del contenido (2 min)

> *[Modal boca.]*

Favoritismo por el inglés. El alemán existe. *Konfigurationseinstellungen*. Ahí la tenéis. Esa palabra ocupa un 40% más que "Settings" y va a entrar, le hagáis hueco o no.

Si vuestro botón explota en alemán, vuestro diseño nunca fue responsive. Era inglés con suerte.

> *[Pausa breve. Señala a los voluntarios del turno 2.]*

Una cabeza sin cerebro, ciega, sorda y muda ya se ha cruzado el primer pliegue del papel. Lo que viene ahora es lo que tiene que aguantar el peso de todo esto.

---

## 2 · Parte central — Tronco estilo hombre de hojalata

### 2a · Turno 2 — Seguimos a ciegas (1 min)

> **Dibujantes del turno 2:** el segundo de cada papel (perfil distinto al del turno 1 en ese mismo papel).

Segundo turno. Os toca **el medio**. Lo que hay entre los dos pliegues. Dos trazos asoman como única pista — o como única excusa.

Treinta segundos. Doblar. Pasar.

> *[Cronómetro. Dibujan. Timer → doblan y pasan.]*

### 2b · Mientras el papel sigue viajando (11 min)

> **Subtítulo:** *Aquí vive la arquitectura. Si cede, todo lo demás cae.*

#### 🦴 Armazón inflexible (3 min)

> *[Modal torso.]*

Dos clásicos del género "no lo toques que funciona":

Uno: `margin-top: -32px`. El parche. Ese margen negativo que alguien puso un viernes y que ahora, cada vez que tocas algo cerca, explota en otro sitio. Funcionaba — en ese contexto. En cuanto cambia el padre, el hijo cae por las escaleras.

Dos: el carrusel con `overflow: hidden` que corta las sombras de las tarjetas. La sombra está ahí — existe en el CSS, existe en Figma — pero el padre le ha dicho "de aquí no pasas". Solución: `overflow: clip` con `overflow-clip-margin`, o padding interno. Dos líneas. Pero claro, había que pensarlas antes.

Un torso puede sostenerse a base de parches. Pero dentro de ese torso, algo tiene que **latir**.

#### ❤️ Un corazón sin alma (3 min)

> *[Modal corazón.]*

El corazón bombea — o no.

Cuando alguien hace *detach* de un componente en Figma y el dev copia-pega el HTML, eso es **tráfico de órganos**. Esa instancia ya no recibe actualizaciones. Seis meses después, el DS está en la v2.3 y el producto sigue con el `border-radius` de la v1. Dos corazones. Uno late, el otro está embalsamado.

Y luego está el problema del lenguaje: Figma lo llama *Card/Destacada*, el código lo llama `<FeaturedTile />`, y QA lo llama *"el recuadro de arriba"*. Tres nombres para una cosa. En cualquier hospital, a eso le llaman urgencias.

Del corazón salen los brazos. Y los brazos, en un Disaster System, **nunca alcanzan lo que quieren alcanzar**.

#### 💪 Alcance fallido (3 min)

> *[Modal brazos.]*

`z-index: 999`. `z-index: 9999`. `z-index: 99999`. `z-index: 999999`. Cada capa añadiendo un nueve más al anterior, como una subasta de ego.

Y encima, el `position: absolute` al que le da igual lo que dice el layout: se planta donde le apetece y tapa el contenido del padre. Los brazos sin coordinación no alcanzan nada — se golpean entre ellos.

Solución: una escala de cinco tokens. `--z-dropdown: 100`, `--z-modal: 300`, `--z-tooltip: 400`. Cinco números. No novecientos mil.

De los brazos colgamos las manos. Y las manos, al final, son lo único que el usuario toca.

#### 🤚 Manos de hojalata (2 min)

> *[Modal manos.]*

Un botón de 24×24 píxeles. El dedo humano mide 44. No es opinión, es WCAG. Cada vez que alguien intenta pulsar ese icono y falla dos veces, no es torpeza: es que **diseño puso un botón para un ratón y nadie pensó en que existen los dedos**.

Añadid los clásicos: pseudo-elementos decorativos sin `pointer-events: none` que se comen los clics. Y modales que se abren mientras el body sigue scrolleando alegremente por detrás, como si nada estuviera pasando.

Enterrar un bug con `pointer-events: none` no es arreglarlo. Es tapar el cadáver con una alfombra.

> *[Pausa breve. Mira a los voluntarios del turno 3 — siguen con el papel cerrado.]*

Ya tenemos cabeza y tronco. Lo que viene ahora es lo que decide si la criatura puede **moverse** — o si se queda de adorno.

---

## 3 · Parte inferior — Piernas y cola estilo lagarto

### 3a · Turno 3 — El último trazo (1 min)

> **Dibujantes del turno 3:** el tercero de cada papel (perfil distinto a los dos anteriores en ese mismo papel).

Último turno. Lo que queda por debajo. Treinta segundos — y a partir de ahora, **el papel no lo soltáis**. Cerrado. En la mano. Hasta que yo diga.

> *[Cronómetro. Dibujan. Timer → **doblan pero NO pasan**: se quedan con el papel cerrado.]*

### 3b · Mientras el papel descansa (9 min)

> **Subtítulo:** *Lo que sostiene el peso y lo que arrastra el pasado.*

#### 🦿 Extremidades estáticas (3 min)

> *[Modal piernas.]*

Cuatro pecados capitales de las piernas que no se doblan:

`width: 1200px`. Fijo. ¿En serio? ¿En 2026? Eso funciona en exactamente un monitor. El vuestro.

`height: 100vh`. En móvil, la barra del navegador cuenta como viewport, así que os comen el contenido. La solución se llama `dvh` y existe desde hace años.

Sin `env(safe-area-inset)`. Los iPhones con notch existen. La gente los usa. Vuestro botón de "Aceptar" está ahora mismo detrás del home indicator de alguien en la sala.

Y lo más bonito: `float: left` con `clearfix` para hacer layout. Técnica de 2010. Grid y Flex llevan una década pidiendo el relevo.

Si vuestra landing se ve rota en el iPhone que llevo ahora mismo en el bolsillo, no es responsive. Es desktop con maquillaje.

Pero unas piernas, por muy flexibles que sean, **no sirven de nada si no se apoyan bien en el suelo**.

#### 🦶 Base inestable (3 min)

> *[Modal pies.]*

Los pies fijan el sistema al suelo. O no.

`#page .content div.box > span { !important }`: un selector con tanta especificidad que para sobreescribirlo hay que invocar a un chamán. Tokens con nombre `--color1`, `--color2`, `--color3`. Y el mítico `margin-top: 37px`. ¿Por qué 37? Porque sí. Porque el primer dev que lo puso ya no está en la empresa.

Encima: jQuery UI datepicker en 2026. Bootstrap 3. Compass. Todo envejeciendo como leche al sol.

Y la pregunta que nadie quiere contestar: "¿Cuándo fue la última auditoría de accesibilidad?" Silencio. "¿Y la de performance?" Más silencio. Lo que no se mide no existe — y si no existe, rompe.

Y cuando por fin tenéis base… todavía queda una cosa por atender. Algo que arrastráis sin querer.

#### 🦎 El lastre del legacy (3 min)

> *[Modal cola.]*

Importar `moment.js` — 73 kilobytes — para formatear **una fecha**. Cuando `Intl.DateTimeFormat` existe, es nativo, y pesa cero. Lodash entero para usar `_.debounce`. Son cinco líneas, chavales.

`OldCarousel.jsx` sin usar desde 2022. `LegacyModal.css` con 400 líneas muertas. *"No lo borres por si acaso"*. Ese "por si acaso" es el epitafio más común de los repos.

Y el más peligroso de todos: cincuenta componentes que solo entienden **tres personas**. Si una se va, se va parte del sistema con ella. Bus factor de 1. Catastrófico.

La cola no se corta de golpe. Se acorta con disciplina: Knip al trimestre, Bundlephobia antes de instalar nada, Storybook con todo documentado, y tests que os protejan de vuestro yo de hace seis meses.

> *[Pausa. Mira a los voluntarios. Mira al público.]*

Hemos recorrido un cuerpo entero — de la cabeza a la cola. Durante todo este rato, unos cuantos papeles han estado cerrados en las manos del turno 3. Ha llegado el momento.

---

## 4 · Clímax — La revelación (3 min)

> *[Los voluntarios del turno 3 siguen con el papel cerrado en la mano. Pídeles que suban al escenario. Pausa teatral.]*

Durante los últimos cuarenta minutos habéis escuchado una charla sobre Design Systems.

Y durante los últimos cuarenta minutos, unos papeles han estado esperando este momento.

> *[Señala a los voluntarios.]*

Vamos a ver qué hemos construido entre todos.

> *[Uno a uno, los voluntarios desdoblan el papel delante del público. Los pegas al telón, los pones bajo cámara, o los proyectas.]*

> *[Pausa larguísima. Deja que la gente se ría. Deja que se incomoden. Tres criaturas distintas, las tres inconsistentes. Eso es oro escénico.]*

Miradlos bien.

Esto que tenéis delante — estas tres cabezas que no corresponden a estos tres troncos, que no corresponden a estas tres piernas — **esto no lo ha dibujado un equipo torpe.**

Esto lo ha dibujado **un grupo de profesionales**. Diseñadores. Desarrolladores. QAs, PMs, gente de producto. Personas que cada día, en su trabajo real, hacen cosas bastante mejores que esto.

Entonces, ¿qué ha pasado aquí?

> *[Pausa.]*

Ha pasado exactamente **lo mismo que pasa en vuestros equipos cada sprint**.

Fijaos en una cosa. Es importante. **No podéis culpar al perfil.** En cada papel ha dibujado un diseñador, un dev y un perfil mixto. Los tres. En orden distinto.

Si aun así el resultado es un monstruo…

El problema no son las personas.

El problema es **el contrato que no existía entre ellas**.

> *[Pausa. Mira al público.]*

Y ahora la parte incómoda: **vosotros hacéis esto todos los días**. Solo que a cámara lenta, repartido en tres sprints, y con mejor iluminación.

> *[Pulsa "system.reanimate()". La criatura monstruosa se transforma visualmente en la criatura coordinada.]*

Mismos dibujantes. Mismos treinta segundos. Pero esta vez **con contrato**: base 8, tokens compartidos, vocabulario común, componentes con estados.

El resultado ya no es un monstruo.

Es un sistema.

Y la diferencia no son las herramientas. La diferencia **es que hablaron antes de dibujar**.

---

## 5 · Cierre — El contrato (2 min)

Me gustaría dejaros con una idea sola. Una. Si olvidáis todo lo demás, quedaos con esta:

> **Un Design System no es un entregable de Figma.**
> **Es un contrato social.**

Se firma entre diseño, desarrollo y producto. Se revisa. Se mantiene. Se paga — como cualquier infraestructura viva. Y, como cualquier contrato, solo vale si todas las partes lo han leído.

Un **Disaster System** es lo contrario: lo que pasa cuando cada uno firma su cláusula sin mirar las de al lado. Un grupo de personas competentes dibujando a ciegas.

Habéis visto hoy qué pasa cuando falta ese contrato.

Ahora os toca a vosotros decidir si, el lunes por la mañana, vais a abrir Figma y seguir dibujando a ciegas — o si vais a llamar a la persona del otro lado del muro y empezar a escribirlo juntos.

> *[Pausa. Mira a la sala.]*

Os dejo con tres líneas. Las únicas que necesitáis recordar:

> **No trabajéis a ciegas.**
> **Cread sistemas con alma.**
> **Y, sobre todo — hablad entre vosotros.**

Porque al final, toda la arquitectura, todos los tokens, todos los componentes del mundo no valen nada si el equipo que los usa sigue dibujando con el papel doblado.

Publicad vuestro cadáver con `#DisasterSystem` mencionando a `@WTMMadrid`. Enseñádselo a vuestro equipo el lunes. Si os ha servido, que le sirva a otros que también están cosiendo Frankensteins sin darse cuenta.

Gracias.

> *[QR code final. Aplauso. 5 min de Q&A.]*

---

## Notas de ejecución

- **Materiales imprescindibles:** papeles A3 pre-plegados (uno por grupo de 3 voluntarios), un rotulador grueso negro por voluntario, un soporte rígido (clipboard o cartón) por papel, cinta adhesiva para pegar los cadáveres en el telón al final. Prepara stock para el escenario más grande que esperes.
- **Preselección de voluntarios:** si no hay confianza en que salgan espontáneamente, preavisa a un grupo del público antes de empezar. El experimento falla si pierdes 3 minutos buscando voluntarios.
- **Orden del turno sobre el papel:** escribe el número de turno (1, 2, 3) en un post-it en cada clipboard para que los voluntarios sepan su orden sin que lo repitas en escena.
- **Timing flexible:** si los voluntarios tardan más, acorta los ejemplos de cada órgano; si tardan menos, amplía los modales de ojos, corazón y piernas (son los más visuales).
- **Dispositivo:** la landing está pensada para proyector (1080p / 1600px / 4K) y móvil portrait (asistentes escaneando el QR). Ambas experiencias deben verse nítidas.
- **Cronómetro:** usa el cronómetro integrado de la landing, no el del móvil. Los asistentes ven la cuenta atrás en pantalla — eso es parte del espectáculo.
- **Base 8:** cualquier número de píxeles que salga en pantalla y no sea múltiplo de 8 (o integer para tipografía) es incoherente con el mensaje. Revísalo antes de entrar.
- **Tono:** no hagas humor a costa de diseño ni a costa de dev. El enemigo común es la *falta de contrato*, no el otro perfil. La rotación de perfiles entre papeles es la prueba escénica de esto.
