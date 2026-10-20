"use strict";
/* ===== El arte de la palabra: poética, retórica y tópicos (19-10, Bachillerato) =====
   Unidad transversal de literatura, humanidades y filología clásica, con el patrón del Universo aristotélico:
   la prosa aquí (PALABRA) y las piezas en palabraview.js. Plan: lab_iesmdb\encargos\plan_arte_de_la_palabra_2026-10-19.md.
   Imágenes y créditos en recursos\imagenes_museos\arte_palabra\ (manifest.json) y web/media/galeria_museo/palabra/.
   Citas comprobadas en el griego de Perseus (canonical-greekLit, numeración Bekker), en traducción propia:
   Retórica I 1, 1354a1; I 2, 1356a1-4; I 3, 1358b6-8; II 23, 1397b12-13; III 13, 1414a30-32. Poética 4, 1448b5-8; 5, 1449b12-13;
   6, 1449b24-28; 9, 1451b5-7; 11, 1452a22-32; 13, 1453a7-10; 21, 1457b6-7; 24, 1460a26-27. Latín (The Latin Library): Quintiliano
   XII 1, 1; Horacio, Arte poética 333-344; Cicerón, El orador 69. Lope, Arte nuevo vv. 40-41 (Wikisource); Boileau, Art poétique III.
   Tópicos y Refutaciones sofísticas, por libro y capítulo (no están en el corpus de Perseus). */

const PALABRA = {
  retrato: "Marco Tulio Cicerón, busto romano de mediados del siglo I. Museos Capitolinos, Roma; foto de Wilfredo Rodríguez, CC0.",
  intro: "Hablar bien, contar una historia que emocione o encontrar el argumento justo no es un don misterioso: para Aristóteles es un <strong>arte</strong>, una <em>tékhne</em>, algo que tiene reglas y se puede aprender. Escribió dos libros para enseñarlo: la <strong>Retórica</strong> y la <strong>Poética</strong>.",
  pista: "Aquí vas a ver cómo se convence, cómo se cuenta y dónde se buscan los argumentos, y cómo llegó todo eso de Atenas a tus clases de Lengua, de Latín y Griego, y al cine y la publicidad de hoy.",

  indice: [
    { id: "tekhne", t: "Hablar bien también se aprende", m: "Filosofía" },
    { id: "retorica", t: "Retórica: cómo se convence", m: "Retórica" },
    { id: "discurso", t: "Las partes del discurso y el estilo", m: "Retórica" },
    { id: "poetica", t: "Poética: imitar para comprender", m: "Literatura" },
    { id: "topicos", t: "Los lugares de los argumentos", m: "Dialéctica" },
    { id: "tradicion", t: "La tradición: de Roma al guion de hoy", m: "Humanidades" },
    { id: "preguntas", t: "Para pensar", m: "Todas" }
  ],

  retorica: {
    titulo: "Retórica: cómo se convence",
    materia: "Retórica",
    texto: [
      "Platón desconfiaba de la retórica: le parecía el arte de los sofistas, capaz de hacer parecer justo lo injusto. Aristóteles le da la vuelta. La retórica no es buena ni mala: es la capacidad de ver, en cada caso, <strong>qué puede convencer</strong>. Y la necesitamos, porque en la asamblea, en el tribunal o en la calle no basta con tener razón: hay que saber hacerla ver.",
      "Por eso la compara con la <strong>dialéctica</strong>, el arte de discutir a partir de opiniones aceptadas. Las dos sirven para cualquier tema, y todo el mundo las usa un poco sin saberlo."
    ],
    cita: "La retórica es la contrapartida de la dialéctica.",
    citaPie: "Aristóteles, <em>Retórica</em> I 1, 1354a1 (traducción propia)",
    pruebasTit: "Tres maneras de convencer",
    pruebas: [
      "Aristóteles distingue tres tipos de pruebas que salen del propio discurso. La primera es el <strong>éthos</strong>: el carácter del que habla. Si el discurso nos hace ver a alguien honrado, competente y de buena fe, le creemos. La segunda es el <strong>páthos</strong>: la emoción del oyente. No juzgamos igual cuando estamos tristes que alegres, enfadados que tranquilos. La tercera es el <strong>lógos</strong>: el argumento mismo, lo que el discurso demuestra o parece demostrar.",
      "Dentro del lógos hay dos herramientas: el <strong>entimema</strong>, un razonamiento abreviado que se apoya en lo que el oyente ya cree («si no ha estudiado, suspenderá»), y el <strong>ejemplo</strong>, un caso parecido que hace pensar en el general («mira lo que le pasó a quien no estudió el año pasado») (<em>Retórica</em> I 2)."
    ],
    cita2: "De las pruebas que se consiguen mediante el discurso hay tres clases: unas están en el carácter del que habla; otras, en poner al oyente en cierta disposición; y otras, en el propio discurso, porque demuestra o parece demostrar.",
    cita2Pie: "Aristóteles, <em>Retórica</em> I 2, 1356a1-4 (traducción propia)",
    pieza1Tit: "¿Éthos, páthos o lógos?",
    pieza1Txt: "Todas estas frases quieren convencer de lo mismo: que te pongas el cinturón de seguridad. ¿En qué se apoya cada una?",
    frases: [
      { id: "f1", t: "«Como médica de urgencias desde hace veinte años, te lo pido: ponte el cinturón».", r: [1], e: "Se apoya en quién habla: su experiencia la hace digna de crédito." },
      { id: "f2", t: "«Imagina a tu familia esperando una llamada que nunca llega».", r: [2], e: "Busca una emoción (miedo, pena) que te disponga a actuar." },
      { id: "f3", t: "«Si el cinturón impide que salgas despedido en un choque, y salir despedido es lo que más mata, el cinturón salva vidas».", r: [3], e: "Es un entimema: un razonamiento que va de unas premisas a una conclusión." },
      { id: "f4", t: "«Acuérdate de aquel compañero que el curso pasado no se lo puso y acabó en el hospital».", r: [3, 2], e: "Es un ejemplo (lógos): un caso concreto que hace pensar en la regla. Además, conmueve: también hay páthos." },
      { id: "f5", t: "«Nunca te he engañado, ni cuando la verdad no te gustaba: tampoco lo hago ahora».", r: [1], e: "Recuerda la honradez del que habla." },
      { id: "f6", t: "«¡Basta de excusas! ¿Cuántas familias más tienen que llorar?».", r: [2], e: "Indignación y pena: mueve, pero no da ningún dato ni ningún razonamiento." },
      { id: "f7", t: "«Soy bombero: he sacado a mucha gente de coches destrozados, y quien llevaba el cinturón casi siempre salía con vida».", r: [1, 3], e: "Caso trampa: hay éthos (la experiencia del bombero) y lógos (lo que ha visto, como inducción). Muchas frases mezclan las tres pruebas." }
    ],
    pruebasNom: ["Éthos", "Páthos", "Lógos"],   /* r: 1 éthos, 2 páthos, 3 lógos */
    generosTit: "Tres géneros de discurso",
    generos: [
      "Aristóteles clasifica los discursos según <strong>quién escucha</strong> y qué tiene que decidir. En la asamblea, el oyente decide sobre el <strong>futuro</strong>: es el género <strong>deliberativo</strong>, que aconseja o desaconseja según lo útil y lo perjudicial. En el tribunal, juzga el <strong>pasado</strong>: es el <strong>judicial</strong>, que acusa o defiende según lo justo y lo injusto. Y en una celebración, el oyente es espectador del <strong>presente</strong>: es el <strong>epidíctico</strong>, que elogia o censura según lo noble y lo vergonzoso (<em>Retórica</em> I 3)."
    ],
    cita3: "De modo que necesariamente habrá tres géneros de discursos retóricos: el deliberativo, el judicial y el epidíctico.",
    cita3Pie: "Aristóteles, <em>Retórica</em> I 3, 1358b6-8 (traducción propia)",
    pieza2Tit: "¿Qué género es?",
    pieza2Txt: "Decide de qué género es cada discurso. Pista: pregúntate quién escucha y si decide sobre el futuro, juzga el pasado o contempla el presente.",
    situaciones: [
      { id: "s1", t: "Los delegados de clase discuten si la excursión será a la costa o a la montaña.", r: [1], e: "Se decide algo futuro según lo que conviene." },
      { id: "s2", t: "Explicas al jefe de estudios por qué ayer llegaste tarde.", r: [2], e: "Te defiendes por un hecho pasado." },
      { id: "s3", t: "Un discurso de despedida a una profesora que se jubila.", r: [3], e: "Elogio: se celebra a alguien ante un público." },
      { id: "s4", t: "Una abogada acusa a una empresa de haber contaminado el río.", r: [2], e: "Acusación sobre hechos pasados ante un juez." },
      { id: "s5", t: "Una campaña pide el voto para construir un carril bici.", r: [1], e: "Se aconseja una decisión futura." },
      { id: "s6", t: "Una reseña que destroza una película recién estrenada.", r: [3], e: "Censura: lo contrario del elogio, también epidíctico." },
      { id: "s7", t: "En un mitin, el candidato alaba su propia honradez para que le votes.", r: [1, 3], e: "Caso trampa: hay elogio (epidíctico), pero al servicio de una decisión futura, el voto (deliberativo). Los géneros se mezclan." }
    ],
    generosNom: ["Deliberativo", "Judicial", "Epidíctico"],   /* r: 1 deliberativo, 2 judicial, 3 epidíctico */
    cuidado: "Ojo con la palabra. Hoy «retórica» suena a palabras vacías («eso es pura retórica»). Para Aristóteles era lo contrario: el arte de dar razones que la gente pueda seguir. Pero las mismas herramientas sirven para engañar: un páthos sin lógos puede arrastrar a una multitud. Por eso conviene preguntarse siempre <strong>qué quiere conseguir quien habla</strong>.",
    tradicionTit: "Lo que vino después",
    tradicion: [
      "Roma convirtió la retórica en el centro de la educación. Cicerón la practicó en el foro y la teorizó en <em>Sobre el orador</em>; Quintiliano, en su <em>Formación del orador</em>, recogió la definición de Catón: el orador es «un hombre de bien que sabe hablar». Durante siglos, aprender a escribir fue aprender retórica.",
      "Hoy la encuentras en la publicidad, en los debates electorales y en las redes, y también en tus exámenes: la disertación de la PAU pide exactamente lo que pedía Aristóteles, argumentos a favor y en contra y una conclusión que convenza."
    ],
    cita4: "El orador que queremos formar es, según la definición de Marco Catón, un hombre de bien que sabe hablar.",
    cita4Pie: "Quintiliano, <em>Formación del orador</em> XII 1, 1 (traducción propia)",
    quintiliano: "Quintiliano, en la <em>Crónica de Núremberg</em> (1493). Dominio público.",
    otrasTit: "En otras materias",
    otras: [
      "<strong>Lengua castellana y Literatura:</strong> el texto argumentativo (tesis, argumentos y conclusión) y las figuras retóricas.",
      "<strong>Euskara eta Literatura:</strong> la argumentación oral; el <em>bertsolari</em> también convence con éthos, páthos y lógos.",
      "<strong>Latín y Griego:</strong> las palabras vienen de ahí: retórica (<em>rhetoriké</em>), entimema, epidíctico; y Cicerón es lectura de Latín."
    ],
    enlaces: "En la web: el Duelo de razones (debatir y detectar falacias); Polémicas (Sócrates frente a los sofistas); la disertación de la PAU; los sofistas y Sócrates (HF, tema 5)."
  },

  /* imágenes: f (fichero), pie (qué es) y cred (autor, colección y licencia); url = ficha en Commons */
  img: {
    catilina: { f: "media/galeria_museo/palabra/ciceron_catilina.jpg", pie: "Cicerón acusa a Catilina ante el Senado romano (63 a. C.), en el fresco de Cesare Maccari (1889).", cred: "Cesare Maccari · Palazzo Madama, Roma · dominio público", url: "https://commons.wikimedia.org/wiki/File:Cicero_Denounces_Catiline_in_the_Roman_Senate_by_Cesare_Maccari.png" },
    sofocles: { f: "media/galeria_museo/palabra/sofocles.jpg", pie: "Sófocles, autor de <em>Edipo rey</em>, la tragedia que Aristóteles pone como modelo. Estatua de Letrán, en una fotografía del siglo XIX.", cred: "Rijksmuseum · CC0", url: "https://commons.wikimedia.org/wiki/File:Beeldhouwwerk_Sophocles_Sophocles,_Lateran_(titel_op_object),_RP-F-F01143-CN.jpg" },
    mascara: { f: "media/galeria_museo/palabra/mascaras.jpg", pie: "Máscara de comedia en terracota. Museo del Ágora, Atenas.", cred: "Foto de Jebulon · CC0", url: "https://commons.wikimedia.org/wiki/File:Terracotta_comedy_mask_agora_museum_athens.jpg" },
    pronomo: { f: "media/galeria_museo/palabra/pronomos.jpg", pie: "El vaso de Prónomo (h. 400 a. C.): actores con sus máscaras en la mano, en el dibujo de Furtwängler y Reichhold.", cred: "Furtwängler y Reichhold, <em>Griechische Vasenmalerei</em> · dominio público", url: "https://commons.wikimedia.org/wiki/File:Griechische_Vasenmalerei,_Taflen_-_A._Furtwangler,_K_Reichhold.jpg" },
    epidauro: { f: "media/galeria_museo/palabra/epidauro.jpg", pie: "El teatro de Epidauro (s. IV a. C.), para unos 14 000 espectadores.", cred: "Foto de George E. Koronaios · CC0", url: "https://commons.wikimedia.org/wiki/File:Inside_the_Great_Theatre_of_Epidaurus_on_23_May_2019.jpg" },
    adagia: { f: "media/galeria_museo/palabra/adagia.jpg", pie: "Los <em>Adagia</em> de Erasmo en la edición de Aldo Manucio (Venecia, 1508): miles de lugares comunes de los clásicos.", cred: "Biblioteca de la Universidad de Basilea · dominio público", url: "https://commons.wikimedia.org/wiki/File:Erasmus_Adagia,_Aldine_1508_(Basel_Univ_Lib).jpg" },
    horacio: { f: "media/galeria_museo/palabra/ars_poetica.jpg", pie: "Horacio en la portada de una edición de sus obras (1735).", cred: "Rijksmuseum · CC0", url: "https://commons.wikimedia.org/wiki/File:Portret_van_Horatius_Titelpagina_voor_Q._Horatius_Flaccus,_Oeuvres,_1735,_RP-P-OB-51.020.jpg" },
    pinciano: { f: "media/galeria_museo/palabra/pinciano.jpg", pie: "Portada de la <em>Philosophía antigua poética</em> del Pinciano (Madrid, 1596), la primera gran lectura española de la <em>Poética</em>.", cred: "Alonso López Pinciano · dominio público", url: "https://commons.wikimedia.org/wiki/File:Pinciano_-_Philosophia_antigua_poetica.jpg" },
    lope: { f: "media/galeria_museo/palabra/lope.jpg", pie: "Lope de Vega, autor del <em>Arte nuevo de hacer comedias</em> (1609).", cred: "Juan van der Hamen · dominio público", url: "https://commons.wikimedia.org/wiki/File:Portrait_of_F%C3%A9lix_Lope_de_Vega_y_Carpio_(by_Juan_van_der_Hamen_y_Le%C3%B3n).jpg" },
    boileau: { f: "media/galeria_museo/palabra/boileau.jpg", pie: "Nicolas Boileau, autor del <em>Arte poética</em> (1674).", cred: "Rijksmuseum · CC0", url: "https://commons.wikimedia.org/wiki/File:Portret_van_Nicolas_Boileau,_RP-P-OB-42.757.jpg" }
  },

  /* ---------- 1 · La tékhne ---------- */
  tekhne: {
    titulo: "Hablar bien también se aprende",
    materia: "Filosofía",
    texto: [
      "En la Atenas democrática, quien sabía hablar mandaba: en la asamblea se votaban las leyes y la guerra, y en los tribunales cada uno se defendía solo. Los <strong>sofistas</strong> vendían ese saber: Gorgias presumía de poder convencer de cualquier cosa.",
      "Platón desconfió de ese poder. En el <em>Gorgias</em> compara la retórica con la cosmética: da apariencia de salud sin darla. Aristóteles, discípulo suyo, no lo niega, pero da un paso más: si se puede convencer con trampas, también se puede convencer con razones, y eso <strong>se puede enseñar</strong>. Por eso escribe una <em>Retórica</em> y una <em>Poética</em>: dos <em>tékhnai</em>, dos artes con reglas."
    ],
    cuidado: "Ojo: para los griegos, <em>tékhne</em> no es «técnica» en el sentido de máquinas. Es todo saber hacer que puede explicar por qué funciona: la medicina, la navegación, la carpintería… y también hablar y escribir.",
    lineaTit: "De los sofistas a la escuela",
    linea: [
      { y: "s. V a. C.", t: "Gorgias y los sofistas", d: "Enseñan a hablar en público por dinero; la palabra es poder." },
      { y: "h. 390 a. C.", t: "Isócrates", d: "Abre en Atenas una escuela de retórica: formar ciudadanos que sepan hablar." },
      { y: "h. 387 a. C.", t: "Platón, <em>Gorgias</em>", d: "La retórica sin saber es halago, no arte." },
      { y: "h. 335 a. C.", t: "Aristóteles, <em>Retórica</em> y <em>Poética</em>", d: "Las convierte en saberes con reglas." },
      { y: "55 a. C.", t: "Cicerón, <em>Sobre el orador</em>", d: "El orador ideal sabe de todo: filosofía, derecho, historia." },
      { y: "h. 95", t: "Quintiliano, <em>Formación del orador</em>", d: "Un programa de educación completo, de la infancia al foro." }
    ]
  },

  /* ---------- 3 · El discurso y el estilo ---------- */
  discurso: {
    titulo: "Las partes del discurso y el estilo",
    materia: "Retórica",
    texto: [
      "¿Cómo se ordena un discurso? Aristóteles es más sencillo que muchos manuales: solo hay dos partes imprescindibles, <strong>decir de qué se trata</strong> y <strong>demostrarlo</strong>. A lo sumo se añaden un <strong>exordio</strong>, que prepara al oyente, y un <strong>epílogo</strong>, que recapitula y deja al oyente bien dispuesto (<em>Retórica</em> III 13 y 19). Los romanos lo convirtieron en un esquema fijo: exordio, narración, argumentación y peroración."
    ],
    cita: "El discurso tiene dos partes, porque es necesario decir de qué se trata y demostrarlo.",
    citaPie: "Aristóteles, <em>Retórica</em> III 13, 1414a30-32 (traducción propia)",
    pieza1Tit: "Ordena el discurso",
    pieza1Txt: "Estos cuatro trozos de un discurso de una delegada de clase están desordenados. Usa las flechas para ponerlos en orden y comprueba.",
    partes: [
      { id: "p1", n: "Exordio", t: "«Gracias por escucharme: sé que es la última hora y que todos queréis iros. Seré breve, porque lo que os traigo os afecta a todos».", o: 1 },
      { id: "p2", n: "Exposición", t: "«La dirección propone quitar los diez minutos de descanso de la mañana para salir antes».", o: 2 },
      { id: "p3", n: "Argumentación", t: "«Si quitamos el descanso, llegaremos cansados a las últimas clases; y las otras veces que se probó, bajaron las notas de la tarde. Salir diez minutos antes no compensa».", o: 3 },
      { id: "p4", n: "Epílogo", t: "«Por eso os pido que votéis que no. Os lo digo como compañera: el descanso es nuestro y vale la pena defenderlo».", o: 4 }
    ],
    estiloTit: "El estilo: claridad y metáfora",
    estilo: [
      "La primera virtud del estilo, para Aristóteles, es la <strong>claridad</strong>: un discurso que no se entiende no cumple su función (<em>Retórica</em> III 2). Pero lo claro no tiene por qué ser plano: la <strong>metáfora</strong> enseña algo nuevo, porque nos hace ver una cosa a través de otra y la «pone ante los ojos» (III 10-11).",
      "En la <em>Poética</em> la define como el paso de un nombre de una cosa a otra. Y añade que hacer buenas metáforas no se aprende de otro: es señal de talento, porque supone <strong>ver lo semejante</strong> en lo distinto (<em>Poética</em> 22)."
    ],
    cita2: "La metáfora es el traslado a una cosa de un nombre que pertenece a otra.",
    cita2Pie: "Aristóteles, <em>Poética</em> 21, 1457b6-7 (traducción propia)",
    pieza2Tit: "¿Metáfora o comparación?",
    pieza2Txt: "La comparación dice «como»; la metáfora salta directamente. Aristóteles dice que la comparación es también una metáfora, que solo se distingue por un añadido (<em>Retórica</em> III 4). Clasifica estas frases.",
    frases: [
      { id: "m1", t: "«Tus ojos son dos luceros».", r: [1], e: "Metáfora: llama «luceros» a los ojos, sin «como»." },
      { id: "m2", t: "«Corre como el viento».", r: [2], e: "Comparación: lleva «como»." },
      { id: "m3", t: "«La vejez es la tarde de la vida».", r: [1], e: "Metáfora por analogía: la vejez es a la vida lo que la tarde al día. Es el tipo que más le gustaba a Aristóteles." },
      { id: "m4", t: "«Aquiles se lanzó como un león».", r: [2], e: "Comparación: el ejemplo de la propia <em>Retórica</em> (III 4). Si dijera «el león se lanzó», sería metáfora." },
      { id: "m5", t: "«Las redes sociales son un escaparate».", r: [1], e: "Metáfora: hace ver algo (la exhibición, el querer vender una imagen) que una definición tardaría en explicar." }
    ],
    figurasNom: ["Metáfora", "Comparación"],
    metanoiaTit: "Corregirse en voz alta: la metanoia",   /* (19-10) visto bueno del profesor */
    metanoia: [
      "Hay una figura que consiste en <strong>rectificar lo que uno acaba de decir</strong> para decir algo más fuerte o más exacto: «Es un buen libro; mejor dicho, es un libro extraordinario». Los retóricos latinos la llamaron <em>correctio</em>; los griegos, ἐπανόρθωσις (<em>epanórthōsis</em>), «enderezamiento», y los manuales posteriores, también <strong>metanoia</strong>, «cambio de mente».",
      "Funciona porque el oyente asiste al cambio: la primera palabra se queda corta delante de él y la segunda pesa más por contraste. La <em>Retórica a Herenio</em>, el manual latino de retórica más antiguo que se conserva, explica que así se conmueve el ánimo de quien escucha. La usan los oradores, la publicidad («no es un coche: es una forma de vida») y cualquiera que discute en clase.",
      "La palabra tiene otra vida en filosofía. μετάνοια (<em>metánoia</em>) es también un cambio de mente en serio: arrepentirse, darse la vuelta. Platón llama «giro» (περιαγωγή, <em>periagōgḗ</em>) a la educación, que no mete la vista en el alma, sino que la vuelve entera hacia lo que es (<em>República</em> VII, 518c-d). Los Evangelios piden «convertíos» (μετανοεῖτε, <em>metanoeîte</em>, Marcos 1, 15). Y el poeta latino Ausonio retrata a Metanoea como la compañera de la Ocasión que se escapa: «Soy la diosa que pide cuentas de lo hecho y de lo no hecho, para que uno se arrepienta: por eso me llamo Metanoea». Está en el glosario de HF, en «Metanoia»."
    ],
    cita3: "La corrección quita lo que se ha dicho y pone en su lugar lo que parece más adecuado.",
    cita3Pie: "<em>Retórica a Herenio</em> IV 26, 36 (traducción propia)",
    cuidado: "Caso trampa: no toda metáfora es literaria. Decimos «el pie de la montaña» o «la cabeza de la manifestación» sin darnos cuenta: son metáforas gastadas. Y algunas metáforas no solo adornan: también piensan por nosotros. Llamar «invasión» a una llegada de personas ya es un argumento escondido."
  },

  /* ---------- 4 · Poética ---------- */
  poetica: {
    titulo: "Poética: imitar para comprender",
    materia: "Literatura",
    texto: [
      "¿Por qué nos gustan las historias, incluso las tristes? Aristóteles responde con una idea sencilla: imitar es natural en el ser humano. Desde niños aprendemos imitando, y disfrutamos al reconocer lo imitado. La poesía (que para él incluye el teatro) es <strong>mímesis</strong>, imitación de acciones humanas (<em>Poética</em> 4).",
      "Distingue los géneros por cómo imitan y a quién: la <strong>tragedia</strong> imita a personas mejores que nosotros y las pone en escena; la <strong>épica</strong> las narra; la <strong>comedia</strong> imita a personas peores, en lo ridículo, que no hace daño (<em>Poética</em> 2, 3 y 5)."
    ],
    cita: "Imitar es connatural a los seres humanos desde niños, y en esto se diferencian de los demás animales: en que son los más imitadores y hacen sus primeros aprendizajes por imitación.",
    citaPie: "Aristóteles, <em>Poética</em> 4, 1448b5-8 (traducción propia)",
    tragediaTit: "La tragedia",
    tragedia: [
      "La definición de tragedia es la frase más comentada del libro: imitación de una acción seria y completa que, por medio de la <strong>compasión</strong> y el <strong>temor</strong>, lleva a la <strong>catarsis</strong> de esas emociones. De sus partes, la más importante es la <strong>trama</strong> (el <em>mŷthos</em>): no los personajes ni los decorados, sino cómo se encadenan los hechos.",
      "Una buena trama tiene <strong>unidad de acción</strong>: principio, medio y fin, sin episodios que sobren. Y sus mejores momentos son dos: la <strong>peripecia</strong>, un giro hacia lo contrario de lo que se esperaba, y la <strong>anagnórisis</strong>, el paso de la ignorancia al conocimiento. En <em>Edipo rey</em> llegan juntas: el mensajero que viene a tranquilizar a Edipo le revela quién es (<em>Poética</em> 7-11)."
    ],
    cita2: "La tragedia es imitación de una acción seria y completa, de cierta extensión […], que mediante la compasión y el temor lleva a término la purificación de tales emociones.",
    cita2Pie: "Aristóteles, <em>Poética</em> 6, 1449b24-28 (traducción propia)",
    catarsis: "¿Qué es la <strong>catarsis</strong>? Aristóteles no lo explica en la <em>Poética</em> que conservamos, y el debate sigue abierto. Unos la leen como <strong>purgación</strong>, como un desahogo de las emociones; otros, como <strong>purificación</strong>, una educación de las emociones; otros, como <strong>clarificación</strong>, comprender mejor qué nos da miedo y por qué.",
    piezaTit: "Arma una tragedia",
    piezaTxt: "Aristóteles razona qué historia produce compasión y temor (<em>Poética</em> 13). Elige el héroe, el cambio de fortuna y su causa, y mira qué efecto tendría.",
    heroes: ["Alguien muy bueno, sin defectos", "Alguien malvado", "Alguien como nosotros, ni del todo bueno ni malo"],
    cambios: ["De la desdicha a la dicha", "De la dicha a la desdicha"],
    causas: ["Por su maldad", "Por un error (hamartía)", "Por puro azar"],
    heroeTxt: "El héroe", cambioTxt: "El cambio", causaTxt: "La causa",
    res: {
      buenoCae: "Repugnancia, no compasión: ver caer a alguien intachable no da miedo ni pena, indigna. Aristóteles lo descarta.",
      maloSube: "Lo menos trágico de todo: ni compasión ni temor, solo irrita. Aristóteles dice que no tiene nada de tragedia.",
      maloCae: "Satisfacción moral, quizá, pero no compasión (no es inocente) ni temor (no se parece a nosotros).",
      subir: "Puede gustar al público (el final feliz), pero eso es más propio de la comedia. No produce compasión ni temor.",
      maldad: "Si cae por su maldad, merece su castigo: no hay compasión.",
      azar: "Si cae por puro azar, da pena, pero no enseña nada sobre la acción humana: Aristóteles quiere que los hechos se encadenen por necesidad o verosimilitud.",
      tragedia: "¡Tragedia! Alguien como nosotros cae en la desdicha por un error, no por maldad. Sentimos <strong>compasión</strong> (no lo merece del todo) y <strong>temor</strong> (nos podría pasar). Es el caso de Edipo."
    },
    cita3: "Es el caso de quien no sobresale por su virtud y su justicia, ni cae en la desdicha por su maldad y perversión, sino por algún error.",
    cita3Pie: "Aristóteles, <em>Poética</em> 13, 1453a7-10 (traducción propia)",
    verosimilTit: "Lo verosímil: por qué la poesía es más filosófica que la historia",
    verosimil: [
      "El historiador cuenta lo que pasó; el poeta, lo que <strong>podría pasar</strong>. Por eso, dice Aristóteles, la poesía es más filosófica que la historia: habla de lo general (qué haría un tipo de persona en una situación) y no solo de lo particular (qué hizo Alcibíades) (<em>Poética</em> 9).",
      "De ahí sale una regla que sigue viva en cualquier guion: más vale un imposible que resulte creíble que un posible que no se crea (<em>Poética</em> 24, 1460a26-27). A una película de dragones le pedimos coherencia, no realismo."
    ],
    cita4: "Por eso la poesía es más filosófica y más seria que la historia: la poesía dice más bien lo general; la historia, lo particular.",
    cita4Pie: "Aristóteles, <em>Poética</em> 9, 1451b5-7 (traducción propia)",
    cuidado: "Ojo con la palabra «mímesis». No es copiar la realidad como una fotocopia: es representar lo que podría ser, ordenándolo en una trama. Por eso una tragedia puede enseñar más sobre la culpa que un expediente judicial."
  },

  /* ---------- 5 · Tópicos ---------- */
  topicos: {
    titulo: "Los lugares de los argumentos",
    materia: "Dialéctica",
    texto: [
      "La <strong>dialéctica</strong>, para Aristóteles, es el arte de discutir a partir de <strong>opiniones aceptadas</strong> (<em>éndoxa</em>): lo que piensa todo el mundo, la mayoría o los sabios. No demuestra como la ciencia, pero permite examinar cualquier tesis y descubrir sus contradicciones (<em>Tópicos</em> I 1).",
      "Para encontrar argumentos propone una herramienta: los <strong>lugares</strong> (<em>tópoi</em>). Un lugar es como un cajón donde buscar: «¿qué pasa con lo contrario?», «¿si vale para lo más, vale para lo menos?», «¿cómo se define?». La <em>Retórica</em> recoge veintiocho (II 23). Uno de ellos lo explica con un ejemplo: si ni los dioses lo saben todo, menos aún los seres humanos."
    ],
    cita: "Otro lugar es el del más y el menos: por ejemplo, si ni siquiera los dioses lo saben todo, difícilmente lo sabrán los seres humanos.",
    citaPie: "Aristóteles, <em>Retórica</em> II 23, 1397b12-13 (traducción propia)",
    piezaTit: "Busca el lugar",
    piezaTxt: "¿De qué lugar sale cada argumento?",
    lugaresNom: ["Contrarios", "Más y menos", "Definición", "Causa y efecto"],
    argumentos: [
      { id: "a1", t: "«Si estar sano es bueno, estar enfermo es malo».", r: [1], e: "Lugar de los contrarios: lo que vale de algo, lo contrario vale de su contrario." },
      { id: "a2", t: "«Si no estudias para el examen fácil, menos lo harás para el difícil».", r: [2], e: "Del más y el menos: si no ocurre donde es más probable, menos donde lo es menos." },
      { id: "a3", t: "«Eso no fue valentía: la valentía es afrontar el peligro con medida, y él se lanzó sin pensar».", r: [3], e: "Lugar de la definición: se fija qué es algo para ver si el caso encaja." },
      { id: "a4", t: "«Si quitamos los árboles del parque, en verano hará más calor en la plaza».", r: [4], e: "Lugar de la causa y el efecto: se argumenta por las consecuencias." },
      { id: "a5", t: "«Si a un adulto no se le puede leer el móvil sin permiso, menos aún a un menor, que está más desprotegido».", r: [2], e: "Del más y el menos: aquí funciona al revés, de lo más fácil de justificar a lo menos." },
      { id: "a6", t: "«Llamarlo libertad de expresión es engañoso: insultar no es expresar una opinión».", r: [3], e: "Definición: la discusión está en qué cuenta como «libertad de expresión»." }
    ],
    falaciasTit: "Las trampas: las refutaciones sofísticas",
    falacias: "Aristóteles dedicó un libro entero a las trampas que parecen argumentos: las <strong>Refutaciones sofísticas</strong>. Allí clasifica por primera vez las <strong>falacias</strong>: las que juegan con las palabras (la ambigüedad, por ejemplo) y las que no (dar por supuesto lo que se quiere probar, confundir la causa…). En la web puedes practicarlas en el Duelo de razones.",
    lugarComunTit: "Del lugar al «lugar común»",
    lugarComun: [
      "Los romanos tradujeron <em>tópos</em> por <em>locus</em>, y los «lugares comunes» (<em>loci communes</em>) eran argumentos que servían para muchos casos. En el Renacimiento, los estudiantes llenaban cuadernos de lugares comunes, y Erasmo publicó los <strong>Adagia</strong>, miles de frases de los clásicos para tener siempre a mano: es el origen de la sección Adagios de esta web.",
      "Con el tiempo, «tópico» y «lugar común» pasaron a significar lo contrario: una idea gastada que se repite sin pensar. Para Aristóteles era al revés: un lugar donde empezar a pensar."
    ],
    cuidado: "Caso trampa: un argumento que sale de un buen lugar no por eso es verdadero. «Si ni los dioses lo saben todo…» solo convence a quien acepte que los dioses saben más. Los lugares ayudan a encontrar argumentos; si valen, hay que comprobarlo después."
  },

  /* ---------- 6 · Tradición ---------- */
  tradicion: {
    titulo: "La tradición: de Roma al guion de hoy",
    materia: "Humanidades",
    texto: [
      "La retórica y la poética de Aristóteles no viajaron solas: pasaron por Roma, se mezclaron con otras ideas y llegaron hasta hoy. Cicerón resumió los deberes del orador en tres verbos: <strong>probar, deleitar y conmover</strong>, que vienen a ser el lógos, el éthos y el páthos. Horacio, en su <strong>Arte poética</strong>, pidió a los poetas que enseñaran deleitando."
    ],
    cita: "Se llevó todos los votos quien mezcló lo útil con lo agradable, deleitando al lector y a la vez aconsejándolo.",
    citaPie: "Horacio, <em>Arte poética</em> 343-344 (traducción propia)",
    cita2: "Será elocuente quien en el foro y en las causas civiles hable de modo que pruebe, deleite y conmueva.",
    cita2Pie: "Cicerón, <em>El orador</em> 69 (traducción propia)",
    renacTit: "El Renacimiento y las tres unidades",
    renac: [
      "La <em>Poética</em> estuvo casi olvidada en Europa hasta el siglo XVI. Cuando se recuperó, los comentaristas italianos la convirtieron en un reglamento, y en España el Pinciano escribió su <em>Philosophía antigua poética</em> (1596). Así nacieron las famosas <strong>tres unidades</strong>: de acción, de tiempo y de lugar. En Francia, Boileau las resumió en dos versos: que una sola acción, en un solo lugar y en un solo día, llene el teatro hasta el final (<em>Arte poética</em>, canto III).",
      "Lope de Vega se rebeló. En su <em>Arte nuevo de hacer comedias</em> (1609) confesó, con ironía, que cuando escribía encerraba los preceptos con seis llaves, y que, como el público paga, hay que darle gusto: mezcló lo trágico con lo cómico y saltó en el tiempo y en el espacio."
    ],
    cita3: "Y cuando he de escribir una comedia, encierro los preceptos con seis llaves.",
    cita3Pie: "Lope de Vega, <em>Arte nuevo de hacer comedias en este tiempo</em> (1609), vv. 40-41",
    piezaTit: "¿Lo dijo Aristóteles?",
    piezaTxt: "Muchas «reglas de Aristóteles» no son suyas. Decide cuáles están de verdad en la <em>Poética</em> o en la <em>Retórica</em>.",
    siNo: ["Sí, es de Aristóteles", "No, es de otros"],
    reglas: [
      { id: "r1", t: "Una buena trama tiene una sola acción, con principio, medio y fin.", r: [1], e: "Sí: la unidad de acción es la única que Aristóteles defiende de verdad (<em>Poética</em> 7-8)." },
      { id: "r2", t: "Toda la obra debe pasar en un solo lugar.", r: [2], e: "No: la unidad de lugar la añadieron los comentaristas del siglo XVI. Aristóteles no la menciona." },
      { id: "r3", t: "La tragedia procura que la acción quepa en una sola vuelta del sol.", r: [1], e: "Sí, pero como costumbre, no como regla: dice que la tragedia «procura» no pasar de un día (<em>Poética</em> 5, 1449b12-13)." },
      { id: "r4", t: "La poesía tiene que enseñar deleitando.", r: [2], e: "No: es de Horacio (<em>Arte poética</em> 333-344). A Aristóteles le basta con que la tragedia produzca su placer propio." },
      { id: "r5", t: "Más vale un imposible creíble que un posible increíble.", r: [1], e: "Sí: <em>Poética</em> 24, 1460a26-27." },
      { id: "r6", t: "Hay que mezclar lo trágico y lo cómico, como en la vida.", r: [2], e: "No: es la propuesta de Lope de Vega en el <em>Arte nuevo</em>, contra las reglas." }
    ],
    hoyTit: "Y hoy",
    hoy: "Los manuales de guion de cine y series siguen hablando de planteamiento, nudo y desenlace, de giros (peripecias) y de revelaciones (anagnórisis). La publicidad juega con el éthos (el famoso que recomienda), el páthos (la música, la familia) y el lógos (los datos). Y un debate escolar se evalúa, en el fondo, con los criterios de la <em>Retórica</em>.",
    cuidado: "Sin caricaturas: los comentaristas del Renacimiento no «se equivocaron» por torpeza. Leían a Aristóteles junto a Horacio y a los romanos, y querían reglas para un teatro nuevo. Y Lope tampoco despreciaba a Aristóteles: lo conocía bien y discutía con él."
  },

  preguntas: {
    titulo: "Para pensar",
    lista: [
      "¿Es lo mismo convencer que manipular? Busca un anuncio que use sobre todo el páthos y piensa si te da alguna razón.",
      "¿Por qué crees que Aristóteles pone el éthos dentro del discurso y no en la fama previa de quien habla? ¿Pasa lo mismo hoy con los influencers?",
      "Piensa en una serie que te haya enganchado: ¿dónde están la peripecia y la anagnórisis?",
      "Si la poesía es «más filosófica que la historia», ¿puede una novela enseñarte más sobre una guerra que un libro de historia?",
      "Elige una tesis («los deberes deberían prohibirse») y busca un argumento con cada lugar: contrarios, más y menos, definición, causa y efecto.",
      "¿Hizo bien Lope en «encerrar los preceptos con seis llaves»? ¿Hay reglas que valga la pena romper?"
    ],
    otras: [
      "<strong>Lengua castellana y Literatura:</strong> los géneros literarios, el texto argumentativo, las figuras retóricas y el teatro del Siglo de Oro.",
      "<strong>Euskara eta Literatura:</strong> la argumentación oral y el <em>bertsolarismo</em>, una retórica y una poética improvisadas.",
      "<strong>Latín y Griego:</strong> Cicerón, Horacio y Sófocles en su lengua; el léxico de la retórica (<em>inventio</em>, <em>dispositio</em>, <em>elocutio</em>)."
    ],
    enlaces: "En la web: el Duelo de razones y Polémicas (debatir); Adagios (lugares comunes); el Rincón de lógica (falacias); los sofistas y Sócrates (HF, tema 5); la disertación y el comentario de la PAU; la estética (Filosofía 1.º, tema 7)."
  }
};
