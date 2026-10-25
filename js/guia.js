/* ===== Guía «Cómo usar la web» (13-10-2026; menú al día el 21-10-2026: Étimos, Lógica como pestaña propia, Adagios|Frases; 22-10: Pilares en Estudiar, Lógica fuera del menú de HF, Épocas fuera del de 1.º, Taller de Hegel en Talleres de HF; 25-10: Esquemas en Estudiar, Pilares y Étimos en Historia, Prepara PAU con índice de 6 grupos, diccionario dentro del texto, portada de 1.º por bloques) =====
   Contenido de la sección #guia (la pinta guiaview.js): la versión web del tutorial en PDF para el alumnado
   (lab_iesmdb\proyectos\tutorial_web_alumnado). Una sola lista de bloques para las dos materias de Bachillerato; los
   que solo valen para una llevan `solo: "hf"` o `solo: "fil"`. Las capturas están en media/guia/<materia>/ (y en
   media/guia/<materia>/eu/ las de la web en euskera, desde el 19-10), en MODO NOCHE; las rehace
   lab_iesmdb\proyectos\tutorial_web_alumnado\scripts\capturas_web_noche.js + png_a_webp.py. Si cambia el menú, hay que rehacerlas.
   Tipos de bloque (campo `type`, que no se traduce): h (apartado), p (párrafo), img (captura: src, cap y w = "menu" | "movil"), list (filas con
   nombre, texto y la vista que abre), tip (consejo), warn (aviso), steps (pasos numerados).
   Traducción: es un fichero de datos más (web_i18n/i18n_lib.js DATA_FILES) → memoria tm/<lengua>.json. */
const GUIA = {
  ui: {
    titulo: "Cómo usar la web",
    eyebrow: "Guía para el alumnado",
    lead: "Qué hay en la web y cómo sacarle partido para estudiar, practicar y preparar los exámenes. Las capturas son de la web en ordenador y en modo noche, salvo donde se indica.",
    abrir: "Abrir",
    pie: "¿Cómo se usa esta web? Guía con capturas",
    pdf: "Descargar esta guía en PDF",
    indice: "En esta guía",
    materia_hf: "Historia de la Filosofía",
    materia_fil: "Filosofía 1.º"
  },
  pdf: {},
  bloques: [
    { type: "h", x: "Antes de empezar" },
    { type: "p", x: "La web reúne en un solo sitio todo lo que trabajamos en clase: la teoría de cada tema, resúmenes, tarjetas de repaso, cuestionarios, ejercicios, juegos y todo lo necesario para los exámenes." },
    { type: "p", x: "<strong>No hace falta registrarse</strong> ni instalar nada, y está en cinco lenguas: castellano, euskera, francés, inglés y árabe. <strong>Tu avance se guarda en tu navegador</strong>: las tarjetas que ya sabes, tu mejor puntuación en los cuestionarios y el último tema que leíste. No se guarda en ningún servidor ni lo ve nadie más." },
    { type: "warn", x: "Como el avance se guarda en el navegador, si cambias de dispositivo o borras los datos de navegación, empiezas de cero. El contenido, en cambio, sigue siempre ahí." },
    { type: "p", x: "Las primeras pestañas del menú son las imprescindibles: <strong>Estudiar</strong> (la teoría y lo que te ayuda a aprenderla), <strong>Practicar</strong> (comprobar lo que sabes y entrenar) y <strong>PAU</strong> (el examen, los textos y la escritura). Tras una línea vienen las complementarias: <strong>Historia</strong> (el contexto de los filósofos, con los Pilares y los Étimos) y <strong>Juegos</strong>. El <strong>Rincón de lógica</strong> no tiene pestaña en esta web: lo abren los enlaces de los temas que lo usan.", solo: "hf" },
    { type: "p", x: "Las primeras pestañas del menú son las imprescindibles: <strong>Estudiar</strong> (la teoría y lo que te ayuda a aprenderla), <strong>Practicar</strong> (comprobar lo que sabes y entrenar), <strong>Lógica</strong> (el Rincón de lógica, con sus ejercicios y su laboratorio) y <strong>Escribir y leer</strong> (la disertación y los textos). Tras una línea vienen las complementarias: <strong>Historia</strong> (el contexto de los filósofos, con los Pilares y los Étimos) y <strong>Juegos</strong>.", solo: "fil" },
    { type: "p", x: "Algunas secciones reúnen varias cosas del mismo tipo: arriba tienen una <strong>fila de botones</strong> para pasar de una a otra. Por ejemplo, en Cuestionarios puedes cambiar a <strong>Retos</strong>, y en Biografías, a <strong>Perseguidos</strong> o <strong>Comunidades</strong>." },

    { type: "h", x: "La pantalla principal" },
    { type: "p", x: "Al abrir la web llegas a la <strong>página de la materia</strong>: el título, una breve presentación y la <strong>lista de temas</strong>. Pulsa un tema para abrir su teoría. Desde cualquier sitio vuelves aquí con <strong>Estudiar › Teoría</strong> o pulsando «Aula de Filosofía», arriba a la izquierda." },
    { type: "img", src: "01_ficha.webp", cap: "La página de la materia: arriba, el menú; debajo, la lista de temas." },
    { type: "p", x: "Los temas están agrupados por <strong>épocas</strong> (Antigua, Medieval, Moderna, Ilustración y Contemporánea), cada una con su color, y la lista empieza por el Tema 3. Los temas 1 y 2, de introducción a la materia, están al final. El color de cada época te acompaña por toda la web: en los filtros, las tarjetas y los cuestionarios.", solo: "hf" },
    { type: "p", x: "Si ya has usado la web, arriba aparece <strong>Continuar donde lo dejaste</strong>, con lo último que abriste." },
    { type: "p", x: "Los temas están agrupados en <strong>bloques</strong> («Bloque 2 · …»), cada uno con el color de su rama de la filosofía (antropología, conocimiento, lógica, ética, política y estética). Pulsa la cabecera de un bloque para desplegarlo: verás sus temas, con los subtemas numerados (1.1, 1.2…). El Tema 1 va aparte, en un grupo de Introducción, en gris. Ese color te acompaña por toda la web: en los filtros, las tarjetas y los cuestionarios.", solo: "fil" },
    { type: "p", x: "La etiqueta dorada <strong>LECTURA PAU</strong> marca los temas que tienen uno de los cinco textos de la PAU (Platón, Descartes, Kant, Nietzsche y Beauvoir). <strong>Exploraciones</strong> despliega lecturas de ampliación del tema, que son voluntarias. Más abajo están <strong>Explora la materia</strong> (todo lo que hay en la web, contado por tipos) y el <strong>Itinerario PAU</strong>, que te guía paso a paso por la preparación del examen.", solo: "hf" },
    { type: "p", x: "Dentro de cada bloque, <strong>Exploraciones</strong> despliega las actividades y lecturas de ampliación, que son voluntarias. Más abajo está <strong>Explora la materia</strong>: todo lo que hay en la web, contado por tipos.", solo: "fil" },
    { type: "p", x: "En la cabecera tienes también el <strong>buscador</strong> 🔎, el botón de <strong>idioma</strong> 🌐, el de <strong>tema claro u oscuro</strong> ◐ y el de esta <strong>guía</strong> ?. Las capturas de esta guía están en <strong>modo noche</strong>; si prefieres el fondo claro, pulsa ◐." },
    { type: "p", x: "El botón <strong>Aa</strong> abre los <strong>ajustes de lectura</strong>. <strong>Escuchar esta página</strong> lee en voz alta, párrafo a párrafo, lo que tienes delante. También puedes agrandar la letra, separar más las líneas, las letras y las palabras, cambiar el tipo de letra, alinear el texto a la izquierda, subir el contraste o quitar las animaciones. Los ajustes se guardan solo en tu dispositivo, y <strong>Restablecer</strong> lo deja todo como estaba. Para escuchar, el dispositivo necesita una voz en el idioma de la web; con las voces «en línea» de Chrome o Edge, el texto de la página pasa por el servicio de voz del navegador. Además, en la Teoría, los términos del diccionario aparecen subrayados con puntos dentro del texto. Si te molestan, apágalos con <strong>Aa</strong>." },
    { type: "h", x: "Dentro de un tema" },
    { type: "img", src: "05_tema.webp", cap: "Un tema abierto: a la izquierda, sus apartados; a la derecha, el texto." },
    { type: "p", x: "En la columna de la izquierda están los <strong>apartados del tema</strong>: pulsa uno para saltar a esa parte. <strong>Ver el tema entero</strong> muestra todos los apartados seguidos, para leerlo de principio a fin o imprimirlo con el navegador." },
    { type: "p", x: "Al final de cada tema hay una caja, <strong>Para seguir con este tema</strong>, con todo el material de ese tema en tres bloques: <strong>Estudiar</strong> (tarjetas, cuestionarios, infografías, mapas, esquemas, conceptos del diccionario, su época y su cronograma), <strong>Preparar la PAU</strong> (lecturas, comentarios, disertaciones y comparativas) y <strong>Ampliar</strong>, que se despliega al pulsarlo (exploraciones, dilemas, pistas, el Rincón de lógica, polémicas, comunidades, perseguidos, el Duelo de razones, juegos y, en algunos temas, vídeos en euskera con su transcripción). La caja sale <strong>una sola vez</strong>, al final. Además, los materiales del tema (tarjetas, esquemas…) también aparecen <strong>intercalados entre los párrafos</strong> donde tocan.", solo: "hf" },
    { type: "p", x: "Al final de cada tema hay una caja, <strong>Para seguir con este tema</strong>, con todo el material de ese tema en tres bloques: <strong>Estudiar</strong> (tarjetas, cuestionarios, infografías, mapas, esquemas, conceptos del diccionario y su época), <strong>Pensar y escribir</strong> (lecturas, disertaciones, dilemas, pistas y el Rincón de lógica) y <strong>Ampliar</strong>, que se despliega al pulsarlo (exploraciones, polémicas, comunidades, perseguidos, el Duelo de razones, juegos y, en algunos temas, vídeos en euskera con su transcripción). La caja sale <strong>una sola vez</strong>, al final. Además, los materiales del tema (tarjetas, esquemas…) también aparecen <strong>intercalados entre los párrafos</strong> donde tocan.", solo: "fil" },
    { type: "img", src: "06_para_seguir.webp", cap: "La caja del final del tema, con «Ampliar» desplegado: cada botón te lleva a un material de ese mismo tema." },
    { type: "tip", x: "Lee el tema y, justo al terminar, entra en sus tarjetas y en su cuestionario desde esta caja. Repasar en el momento fija mucho mejor lo que acabas de leer." },

    { type: "h", x: "Los puntos de importancia (●●●●●)", solo: "hf" },
    { type: "p", solo: "hf", x: "En esta web, los pensadores, los temas y los términos del diccionario llevan de uno a cinco <strong>puntos de importancia</strong> ●●●●○: cuantos más puntos, más pesa en la materia y en la PAU. Cada nivel tiene su nombre:" },
    { type: "list", solo: "hf", rows: [
      { nombre: "●●●●● Imprescindible", texto: "Lectura o autor de la PAU, o algo sin lo que no se entienden." },
      { nombre: "●●●●○ Esencial", texto: "Lo que el currículo marca como imprescindible (con asterisco) o lo que ya ha caído en la PAU." },
      { nombre: "●●●○○ Importante", texto: "Lo que nombra el currículo, o lo que hace falta para entender lo anterior." },
      { nombre: "●●○○○ Complemento", texto: "Útil como contexto o para argumentar en la disertación." },
      { nombre: "●○○○○ Ampliación", texto: "Curiosidad o ampliación: para saber más." },
      { nombre: "●●●◐○ Medio punto", texto: "Entre dos niveles. Un 3,5 no cuenta todavía como esencial." }
    ] },
    { type: "p", solo: "hf", x: "Criterio: primero el currículo vasco (Decreto 76/2023), después la PAU de la UPV/EHU. Es decir, lo que la ley pide estudiar en esta materia y lo que se pregunta en el examen." },
    { type: "p", solo: "hf", x: "Los puntos aparecen en <strong>Biografías</strong> (junto a las fechas de cada pensador; en su ficha, con el nombre del nivel y una línea <strong>Por qué</strong> que explica el motivo), en la <strong>lista de temas</strong> de la página de la materia y en el <strong>Diccionario</strong>. En Biografías y en el Diccionario, el botón <strong>Solo imprescindibles y esenciales</strong> deja solo los de cinco y cuatro puntos, y <strong>Qué significan los puntos</strong> despliega esta misma explicación." },
    { type: "img", solo: "hf", src: "11_imprescindibles.webp", cap: "Una ficha de Biografías: los puntos, el nombre del nivel y el «Por qué»." },
    { type: "tip", solo: "hf", x: "Si tienes poco tiempo, empieza por lo que tiene cinco y cuatro puntos; lo demás te ayuda a entenderlo mejor y a argumentar en la disertación." },

    { type: "h", x: "Estudiar" },
    { type: "img", src: "02_menu_estudiar.webp", cap: "El menú «Estudiar».", w: "menu" },
    { type: "list", rows: [
      { nombre: "Teoría", texto: "La página de la materia, con la lista de temas. Desde ahí entras en cada tema.", view: "MATERIA" },
      { nombre: "Tarjetas", texto: "Pulsa la tarjeta (o la barra espaciadora) para darle la vuelta y marca «Ya la sé» las que domines. Tu avance se guarda.", view: "tarjetas" },
      { nombre: "Mapas e infografías", texto: "Mapas que se pliegan y despliegan: pulsa un nodo para abrir o cerrar sus ramas, arrastra para moverte y usa la rueda para ampliar. Arriba hay dos botones para pasar de los mapas conceptuales a las infografías.", view: "mapas" },
      { nombre: "Esquemas", texto: "Esquemas conceptuales con sus relaciones. Elige uno por su título. En Historia de la Filosofía puedes filtrarlos por época.", view: "esquemas" },
      { nombre: "Diccionario", texto: "El diccionario de la asignatura: cada término con su definición. Busca una palabra o filtra los términos. Dentro de la Teoría, los términos del diccionario de ese tema van con un <em>subrayado punteado</em> la primera vez que salen en cada apartado. Tócalos, llega a ellos con el teclado o pasa el ratón por encima: verás la definición, la raíz y «Ver ficha». <strong>Esc</strong> la cierra. Viene activado de serie, y el botón <strong>Aa</strong> lo apaga.", view: "diccionario" },
    ] },
    { type: "img", src: "07_tarjetas.webp", cap: "Tarjetas: elige el tipo, el filtro y la baraja; debajo, los botones para pasar, barajar y marcar «Ya la sé»." },
    { type: "tip", x: "En <strong>Mapas e infografías</strong> está también <strong>Mi mapa</strong>: haz tu propio mapa mientras lees, con una idea por línea y la sangría para las ramas, o empieza desde un mapa de la web y complétalo. Se guarda en tu dispositivo y puedes descargarlo para verlo sin conexión. No se entrega ni se corrige: es para estudiar." },

    { type: "h", x: "Practicar" },
    { type: "img", src: "03_menu_practicar.webp", cap: "El menú «Practicar».", w: "menu" },
    { type: "list", rows: [
      { nombre: "Cuestionarios", texto: "Preguntas tipo test con corrección al instante y la explicación de cada respuesta. Se guarda tu mejor puntuación. Arriba, el botón Retos: preguntas contra el reloj, con puntos por velocidad y por racha.", view: "cuestionarios" },
      { nombre: "Pistas", texto: "Preguntas clave del temario para responder por tu cuenta, con pistas que se destapan de una en una, de la más vaga a la que casi te da la respuesta.", view: "pistas" },
      { nombre: "Rescritura", texto: "Aprende a explicar un texto con tus palabras: sin copiarlo, sin limitarte a cambiar palabras por sinónimos y sin contar otra cosa.", view: "rescritura" },
      { nombre: "Debatir", texto: "Cuatro maneras de entrenar la argumentación, con sus botones arriba: Dilemas (elige entre dos cosas que importan y da tu razón), Polémicas (filósofos de la misma época que se enfrentaron de verdad), Duelo (debate contra el ordenador) y Nudos (descubre dónde chocan tus propias opiniones).", view: "dilemas" }
    ] },
    { type: "img", src: "08_cuestionarios.webp", cap: "Cuestionarios: arriba, el botón Retos; debajo, filtra, elige el cuestionario en el desplegable y responde." },
    { type: "tip", x: "Haz el cuestionario de un tema sin mirar los apuntes y lee siempre la explicación de las preguntas que falles: ahí está el aprendizaje." },
    { type: "p", x: "Los de <strong>Debatir</strong> son un buen entrenamiento para la disertación: obligan a dar razones y a tener en cuenta las del otro lado." },

    // (22-10, opción A del profesor) en HF el Rincón de lógica no está en el menú: este bloque, solo en 1.º
    { type: "h", x: "Lógica", solo: "fil" },
    { type: "p", solo: "fil", x: "El <strong>Rincón de lógica</strong> tiene ahora su propia pestaña. Reúne tablas de verdad, argumentos válidos, silogismos con diagramas de Venn, paradojas y ejercicios para entrenar el razonamiento, y un <strong>itinerario de cero a experto</strong> para recorrerlo en orden." },
    { type: "p", solo: "fil", x: "Arriba está el <strong>Laboratorio</strong>, con varias mesas para trabajar paso a paso: árboles de verdad, un mundo de figuras, relaciones, demostraciones guiadas, deducción natural, inducción y abducción, «Hablamos», los juicios de Kant y «Mundos posibles», que todavía está en desarrollo." },

    { type: "h", x: "PAU", solo: "hf" },
    { type: "img", src: "04_menu_tercera.webp", cap: "El menú «PAU».", w: "menu", solo: "hf" },
    { type: "list", solo: "hf", rows: [
      { nombre: "Prepara PAU", texto: "Un índice con 6 grupos plegables, en el orden del examen: <strong>Conoce el examen</strong>, <strong>Ejercicio 1 · Comprensión de texto</strong>, <strong>Ejercicio 2 · Disertación</strong>, <strong>Ejercicio 3 · Repensando la HF</strong>, <strong>Las cinco lecturas</strong> y <strong>Practica: simulacros</strong>. Abre cada guía desde su enlace y pasa de una a otra con los botones <strong>Anterior</strong> y <strong>Siguiente</strong>. Incluye <strong>Respuestas resueltas</strong>: modelos resueltos del Ejercicio 1, de la disertación y del Ejercicio 3.", view: "prepara_PAU" },
      { nombre: "Comentario de texto", texto: "El método paso a paso para comentar un texto, con rúbrica, plantilla y ejemplos resueltos de los cinco autores.", view: "comentario" },
      { nombre: "Disertaciones", texto: "La metodología y la rúbrica de la disertación (Ejercicio 2), con modelos completos resueltos para practicar la argumentación.", view: "disertaciones" },
      { nombre: "Lecturas", texto: "Los cinco textos de la PAU con su guía de lectura, los fragmentos, modelos de respuesta y diccionario.", view: "lecturas" },
    ] },
    { type: "tip", solo: "hf", x: "Empieza por Prepara PAU para saber qué te van a pedir. Recorre los 6 grupos en orden con <strong>Anterior</strong> y <strong>Siguiente</strong>, y sigue el Itinerario PAU de la página de la materia: te lleva en orden por cada ejercicio. Cuando tengas dudas, mira las <strong>Respuestas resueltas</strong>." },
    { type: "h", x: "Escribir y leer", solo: "fil" },
    { type: "img", src: "04_menu_tercera.webp", cap: "El menú «Escribir y leer».", w: "menu", solo: "fil" },
    { type: "list", solo: "fil", rows: [
      { nombre: "Disertaciones", texto: "La disertación breve: el método paso a paso, modelos resueltos y preguntas para practicar.", view: "disertaciones" },
      { nombre: "Lecturas", texto: "Textos breves de autores clásicos y actuales, uno o dos por tema, para leer en clase y preparar la disertación.", view: "lecturas" }
    ] },

    { type: "h", x: "Historia" },
    { type: "p", x: "La pestaña <strong>Historia</strong> reúne material para entender el contexto de los filósofos. No es imprescindible, pero ayuda mucho a situar las ideas:" },
    { type: "list", rows: [
      { nombre: "Épocas", texto: "Fichas de cada época: cómo eran la sociedad, la política, la ciencia y el arte, y cómo se imaginaba el cosmos. Arriba, los botones Cronogramas y Genealogías.", view: "epocas", solo: "hf" },
      { nombre: "Cronogramas", texto: "Líneas de tiempo: quién vivió a la vez que quién.", view: "cronogramas", solo: "hf" },
      { nombre: "Biografías", texto: "Las biografías de los pensadores que aparecen en la teoría: quiénes fueron, qué pensaron y en qué temas los estudiamos. Arriba, los botones Perseguidos (filósofos y científicos a los que su manera de pensar les costó la vida, la libertad o la patria) y Comunidades (escuelas y grupos de pensadores).", view: "biografias" },
      { nombre: "Adagios", texto: "Lemas latinos y griegos que los filósofos llevan siglos citando, y cuándo usarlos. Arriba, el botón <strong>Frases</strong>: frases célebres de los pensadores, con lo que quieren decir y cuándo usarlas.", view: "adagios" },
      { nombre: "Galería", texto: "Imágenes por autor y tema; púlsalas para verlas a pantalla completa.", view: "galeria" },
      { nombre: "Pilares", texto: "Los grandes conceptos (razón, idea, causa) en diez peldaños, de la palabra de todos los días al debate de hoy. Cada peldaño corrige al anterior y pide trabajo: aplicar la idea a un caso, enlazarla con lo que ya has subido y comprobar si la has entendido. Marca los peldaños que superes: se guarda solo en tu navegador.", view: "pilares" },
      { nombre: "Étimos", texto: "De dónde vienen las palabras de la filosofía: su raíz griega o latina, para entender mejor lo que significan hoy. Busca una palabra o recórrelas por temas.", view: "etimos" },
    ] },
    { type: "h", x: "Juegos" },
    { type: "p", x: "La pestaña <strong>Juegos</strong> es para repasar jugando:" },
    { type: "list", rows: [
      { nombre: "Eudaimonía", texto: "Encarna a un pensador griego y afronta dilemas morales: tus decisiones deciden si alcanzas la buena vida.", view: "eudaimonia", solo: "hf" },
      { nombre: "República", texto: "Reparte la población en las tres clases de Platón y mantén la ciudad en armonía.", view: "republica", solo: "hf" },
      { nombre: "Rayuela filosófica", texto: "Un viaje por una red de ideas: tus respuestas deciden el camino y al final descubres con qué filósofos coincides.", view: "rayuela" },
      { nombre: "Talleres", texto: "Cuatro talleres que unen la filosofía con otras materias, con sus botones arriba: el Taller de Leibniz (matemáticas e informática), El universo aristotélico (física, química y biología), El arte de la palabra (literatura, retórica y lenguas clásicas) y Los afectos de Spinoza (psicología y un modelo que se simula paso a paso).", view: "leibniz", solo: "fil" },
      { nombre: "Talleres", texto: "Cinco talleres que unen la filosofía con otras materias, con sus botones arriba: el Taller de Leibniz (matemáticas e informática), El universo aristotélico (física, química y biología), El arte de la palabra (literatura, retórica y lenguas clásicas), Los afectos de Spinoza (psicología y un modelo que se simula paso a paso) y el Taller de Hegel (historia: el camino de la conciencia y la historia de la libertad, leída como Hegel y a contrapelo).", view: "leibniz", solo: "hf" }
    ] },

    { type: "h", x: "El buscador" },
    { type: "p", x: "Pulsa la lupa 🔎 y escribe una palabra: el buscador mira en toda la web (teoría, diccionario, lecturas, preguntas, tarjetas…) y agrupa los resultados por tipo, con la palabra resaltada. Muévete con las flechas, abre un resultado con Intro y cierra con Esc. Al abrir un resultado, la web te lleva al punto exacto donde aparece la palabra." },
    { type: "img", src: "09_buscador.webp", cap: "El buscador, con la palabra resaltada en cada resultado." },

    { type: "h", x: "En el móvil" },
    { type: "p", x: "La web funciona igual en el móvil. El menú se recoge en el botón ☰: al pulsarlo se abren las pestañas, una debajo de otra, y cada una se despliega al tocarla. Si la usas a menudo, añádela a la pantalla de inicio desde el menú del navegador («Añadir a pantalla de inicio»): se abrirá como una aplicación." },
    { type: "img", src: "10_movil_menu.webp", cap: "El menú abierto en el móvil.", w: "movil" },

    { type: "h", x: "Cómo estudiar un tema con la web" },
    { type: "steps", rows: [
      { titulo: "Lee la teoría del tema", texto: "Estudiar › Teoría › el tema. Usa los apartados de la izquierda para ir por partes.", view: "MATERIA" },
      { titulo: "Repasa con el esquema", texto: "Desde la caja «Para seguir con este tema», abre su esquema, su mapa o su infografía.", view: "MATERIA" },
      { titulo: "Fija los conceptos", texto: "Desde la caja «Para seguir con este tema», abre sus tarjetas y marca las que ya sabes.", view: "tarjetas" },
      { titulo: "Comprueba lo que sabes", texto: "Practicar › Cuestionarios, filtrando por el tema. Lee la explicación de los fallos.", view: "cuestionarios" },
      { titulo: "Explícalo con tus palabras", texto: "Practicar › Pistas te hace las preguntas clave y te ayuda poco a poco.", view: "pistas" },
      { titulo: "Prepara el examen", texto: "PAU: lecturas, comentarios y disertaciones.", view: "prepara_PAU", solo: "hf" },
      { titulo: "Prepara el examen", texto: "Escribir y leer: disertaciones y lecturas.", view: "disertaciones", solo: "fil" },
      { titulo: "Si quieres más", texto: "Las pestañas Historia y Juegos, Practicar › Debatir y el bloque «Ampliar» de la caja del tema: contexto, juegos, debates y vídeos para ir más allá." }
    ] },

    { type: "h", x: "Preguntas frecuentes" },
    { type: "list", rows: [
      { nombre: "¿Necesito una cuenta?", texto: "No. La web es abierta y no pide ningún dato." },
      { nombre: "¿Dónde se guarda mi avance?", texto: "Solo en tu navegador. Si cambias de dispositivo o borras los datos de navegación, se pierde." },
      { nombre: "¿Puedo imprimir un tema?", texto: "Sí: abre el tema, pulsa «Ver el tema entero» y usa la opción de imprimir del navegador." },
      { nombre: "¿La web sustituye a las clases o al libro?", texto: "No. Es un apoyo para estudiar y repasar lo que trabajamos en clase." },
      { nombre: "He encontrado un error", texto: "Díselo a tu profesor o profesora: la web se corrige y crece durante todo el curso." }
    ] }
  ]
};
