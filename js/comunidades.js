"use strict";
/* (11-10) «Comunidades de filósofos y sus lugares» (Bachillerato) — datos de casosview.js. 
   Cada una: dónde se reunían (el lugar físico) y qué queda hoy, quién la fundó y quiénes formaron parte, cómo vivían o trabajaban,
   qué ideas compartían, una cita con su referencia, cómo acabó, el «caso trampa» y una pregunta para pensar.
   cas_cas_ilu = ids de Ilustres (retratos y biografías); cas_epoca: ant|med|ren|mod|ilu|con; temas = claves de THEORY;
   imgs = [{f, pie, page}] de Wikimedia Commons, solo dominio público (créditos en recursos/imagenes_museos/comunidades/);
   cronologia = [{a: año, t: suceso}]; etapas = [{nom, a, q: quiénes, d}] (nom y no n: «n» está en KEY_BLACKLIST y no se traduciría) (opcional). Hechos comprobados con las fuentes. */
const COMUNIDADES = [
 {
  "id": "academia",
  "cas_ilu": [
   "platon",
   "aristoteles",
   "espeusipo",
   "arcesilao",
   "carneades"
  ],
  "nombre": "La Academia de Platón",
  "fechas": "Atenas, hacia 387 a. C. – 529 d. C.",
  "cas_epoca": "ant",
  "lugar": "Un recinto arbolado de olivos y plátanos con un gimnasio dedicado al héroe Academo, de quien toma el nombre, fuera de las murallas, a algo más de un kilómetro al noroeste de Atenas, junto al camino de Eleusis. Platón tenía cerca un terreno propio donde vivía y enseñaba.",
  "hoy": "La zona es hoy un parque arqueológico en el barrio ateniense que todavía se llama Akadimía Plátonos, con restos excavados desde el siglo XX.",
  "miembros": "La fundó Platón. Allí estudió y enseñó Aristóteles durante veinte años. Diógenes Laercio cuenta que entre sus alumnos hubo dos mujeres, Lastenia de Mantinea y Axiotea de Fliunte. En casi un milenio de tradición la dirigieron filósofos muy distintos: platónicos dogmáticos, escépticos, un director que la acercó al estoicismo y, al final, neoplatónicos (ver «Las etapas»).",
  "vida": "No era una universidad con matrícula ni títulos: era una comunidad de maestros y alumnos que conversaban e investigaban juntos problemas de matemáticas, astronomía, política y ética. Su manera de pensar cambió tanto con los siglos que llegó a defender cosas opuestas: del sistema de Platón a la duda escéptica.",
  "ideas": "La búsqueda del saber mediante el diálogo y las matemáticas como entrenamiento para pensar lo que no se ve. Las discrepancias eran parte del método: Aristóteles salió de ella criticando la teoría de las Ideas.",
  "cita": {
   "t": "Soy amigo de Platón, pero más amigo de la verdad.",
   "ref": "Fórmula latina tradicional (Amicus Plato, sed magis amica veritas) que resume Aristóteles, Ética a Nicómaco, I, 6, 1096a"
  },
  "fin": "Durante el asedio de Atenas en el 86 a. C., el general romano Sila taló la arboleda, y la escuela fundada por Platón dejó de existir como institución. La enseñanza platónica continuó en la ciudad hasta que, en 529, el emperador Justiniano prohibió enseñar a los paganos.",
  "trampa": "Dos cosas que se suelen contar mal. La inscripción de la entrada, «Que no entre nadie que no sepa geometría», solo aparece en autores de muchos siglos después. Y la Academia no fue una sola institución durante casi mil años: los neoplatónicos del siglo V se consideraban herederos de Platón, pero los historiadores discuten cuánta continuidad real hubo con la escuela que destruyó la guerra del 86 a. C.",
  "pregunta": "¿Se aprende mejor en una comunidad que discute que leyendo a solas? ¿Qué debería tener un lugar para pensar juntos?",
  "temas": [
   "hf-platon",
   "hf-ap",
   "hf-aa",
   "fil-t1"
  ],
  "fuentes": [
   {
    "t": "Wikipedia: Academia de Atenas",
    "url": "https://es.wikipedia.org/wiki/Academia_de_Atenas"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/academia_mosaico.jpg",
    "pie": "Mosaico de la Academia de Platón, hallado en Pompeya (siglo I), Museo Arqueológico Nacional de Nápoles",
    "page": "https://commons.wikimedia.org/wiki/File:MANNapoli_124545_plato%27s_academy_mosaic_(cropped).jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/atenas_bocage.jpg",
    "pie": "Las afueras de Atenas en el mapa de Barbié du Bocage para el Viaje del joven Anacarsis (1785): arriba, la Academia y la «casa de Platón»; en el centro, la puerta del Dípilon; a la derecha, el Cinosarges y el Liceo. Es una reconstrucción del siglo XVIII, no un plano exacto.",
    "page": "https://commons.wikimedia.org/wiki/File:1784_Bocage_Map_of_the_City_of_Athens_in_Ancient_Greece_-_Geographicus_-_AthensPlan2-white-1793.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "hacia 387 a. C.",
    "t": "Platón, de vuelta de Sicilia, empieza a enseñar junto al gimnasio de Academo."
   },
   {
    "a": "367 a. C.",
    "t": "Llega Aristóteles, con unos 17 años. Se quedará veinte."
   },
   {
    "a": "347 a. C.",
    "t": "Muere Platón. Lo sucede su sobrino Espeusipo; Aristóteles se marcha de Atenas."
   },
   {
    "a": "335 a. C.",
    "t": "Aristóteles vuelve y funda su propia escuela, el Liceo, al otro lado de la ciudad."
   },
   {
    "a": "hacia 268 a. C.",
    "t": "Arcesilao dirige la Academia y le da un giro escéptico."
   },
   {
    "a": "155 a. C.",
    "t": "Carnéades viaja a Roma como embajador y habla un día a favor de la justicia y al siguiente en contra; Catón pide que los filósofos se vayan cuanto antes."
   },
   {
    "a": "88 a. C.",
    "t": "Filón de Larisa, el último director conocido, huye a Roma."
   },
   {
    "a": "86 a. C.",
    "t": "Sila asedia Atenas y tala la arboleda de la Academia."
   },
   {
    "a": "79 a. C.",
    "t": "Cicerón estudia en Atenas con Antíoco y pasea con sus amigos por el camino de la Academia, junto a los jardines de Epicuro."
   },
   {
    "a": "176",
    "t": "Marco Aurelio crea en Atenas cátedras pagadas para las cuatro grandes escuelas."
   },
   {
    "a": "hacia 437-485",
    "t": "Proclo dirige la escuela neoplatónica de Atenas, su época de mayor esplendor."
   },
   {
    "a": "529",
    "t": "Justiniano prohíbe enseñar filosofía a los paganos."
   },
   {
    "a": "siglo XX",
    "t": "Excavaciones arqueológicas en el lugar; hoy es un parque en el barrio de Akadimía Plátonos."
   }
  ],
  "etapas": [
   {
    "nom": "Academia Antigua",
    "a": "hacia 387 – hacia 268 a. C.",
    "q": "Platón, Espeusipo, Jenócrates, Polemón y Crates",
    "d": "Desarrollan las ideas de Platón en matemáticas, metafísica y ética. Con Polemón estudió Zenón de Citio, que después fundaría el estoicismo."
   },
   {
    "nom": "Academia escéptica",
    "a": "hacia 268 – 241 a. C.",
    "q": "Arcesilao",
    "d": "Vuelve al Sócrates que sabe que no sabe: frente a los estoicos, defiende suspender el juicio cuando no hay certeza."
   },
   {
    "nom": "Academia Nueva",
    "a": "siglo II a. C.",
    "q": "Carnéades y Clitómaco",
    "d": "Un escepticismo moderado: no hay certeza, pero sí ideas más o menos convincentes que bastan para guiar la vida."
   },
   {
    "nom": "Filón y Antíoco",
    "a": "hacia 110 – 79 a. C.",
    "q": "Filón de Larisa y Antíoco de Ascalón",
    "d": "Filón, el último director conocido, huyó a Roma durante la guerra contra Mitrídates. Su discípulo Antíoco abandonó el escepticismo y sostuvo que platónicos, aristotélicos y estoicos decían en el fondo lo mismo, lo que acercó la escuela al estoicismo."
   },
   {
    "nom": "Platonismo en la Atenas romana",
    "a": "siglo I a. C. – siglo IV d. C.",
    "q": "Maestros platónicos, sin una escuela continua",
    "d": "Tras la guerra del 86 a. C. se sigue enseñando a Platón en Atenas, pero ya no en la misma institución. En 176 el emperador Marco Aurelio crea en la ciudad cátedras pagadas para platónicos, aristotélicos, estoicos y epicúreos."
   },
   {
    "nom": "Escuela neoplatónica de Atenas",
    "a": "hacia 400 – 529",
    "q": "Plutarco de Atenas, Siriano, Proclo y Damascio",
    "d": "Se llaman a sí mismos «sucesores» de Platón y leen sus diálogos, en la línea de Plotino, como un camino hacia lo Uno. Justiniano les prohíbe enseñar en 529, y Damascio y otros se refugian un tiempo en Persia."
   }
  ]
 },
 {
  "id": "liceo",
  "cas_ilu": [
   "aristoteles",
   "teofrasto",
   "straton"
  ],
  "nombre": "El Liceo de Aristóteles (el Perípato)",
  "fechas": "Atenas, desde 335 a. C.",
  "cas_epoca": "ant",
  "lugar": "El Liceo era un santuario de Apolo Liceo con un gimnasio, fuera de las murallas, al este de Atenas, entre el río Iliso y el monte Licabeto. Antes de Aristóteles ya habían discutido allí Sócrates, Protágoras o Pródico. Aristóteles, que no era ciudadano ateniense y no podía comprar tierras, usó el recinto público. Sus paseos cubiertos (peripatoi) dieron a la escuela su otro nombre: el Perípato.",
  "hoy": "Los restos del gimnasio aparecieron en 1996, cuando se excavaba para construir un museo, junto a la calle Rigillis, en el centro de Atenas. Hoy son un parque arqueológico visitable.",
  "miembros": "La fundó Aristóteles. Lo sucedieron Teofrasto, el gran estudioso de las plantas, y Estratón de Lámpsaco, llamado «el Físico». También trabajaron allí Eudemo de Rodas, que escribió historias de las matemáticas, Aristóxeno, que estudió la música, y Dicearco, geógrafo y escritor de ética y política. También pasó por la escuela Demetrio de Falero, que llegó a gobernar Atenas.",
  "vida": "Más que una escuela con temario fijo era un grupo de investigación: había miembros veteranos que dirigían y daban lecciones y jóvenes que ayudaban. Aristóteles enseñaba por la mañana a sus alumnos y daba charlas abiertas al público. Reunieron una gran biblioteca y repartieron el trabajo: recoger datos de animales y plantas, de las constituciones de las ciudades y de las opiniones de los filósofos anteriores.",
  "ideas": "Conocer es buscar las causas de las cosas, empezando por observar con cuidado lo que hay. Por eso se interesaban por todo: lógica, física, biología, ética, política, retórica o poesía. Los discípulos no se limitaron a repetir al maestro: Estratón, por ejemplo, explicó la naturaleza sin recurrir a un dios.",
  "cita": {
   "t": "Todos los hombres desean por naturaleza saber.",
   "ref": "Aristóteles, Metafísica, I, 1, 980a"
  },
  "fin": "Tras Estratón la escuela perdió fuerza. En el 86 a. C. el general romano Sila asaltó Atenas y el Liceo dejó de funcionar como institución, pero se llevó a Roma los libros de Aristóteles. Allí, Andrónico de Rodas los ordenó y editó hacia mediados del siglo I a. C.: esa edición es la base de las obras de Aristóteles que leemos hoy. Después siguieron los comentaristas, como Alejandro de Afrodisias hacia el año 200.",
  "trampa": "Dos historias que se repiten demasiado. Se dice que se llamaban «peripatéticos» porque Aristóteles enseñaba paseando; lo más probable es que el nombre venga de los paseos cubiertos del lugar, y la anécdota quizá la inventó un biógrafo posterior, Hermipo. Y la novela de los libros escondidos durante siglos en un sótano de Escepsis viene de autores antiguos, pero los historiadores creen que pudo exagerarse.",
  "pregunta": "¿Se puede investigar en equipo en filosofía como se hace en las ciencias? ¿Qué se gana y qué se pierde si cada uno se encarga de una parte?",
  "temas": [
   "hf-aa",
   "hf-politica",
   "hf-aristoteles-arabe"
  ],
  "fuentes": [
   {
    "t": "Wikipedia: Lyceum (classical)",
    "url": "https://en.wikipedia.org/wiki/Lyceum_(classical)"
   },
   {
    "t": "Wikipedia: Peripatetic school",
    "url": "https://en.wikipedia.org/wiki/Peripatetic_school"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/atenas_bocage.jpg",
    "pie": "Las afueras de Atenas en el mapa de Barbié du Bocage (1785): a la derecha, el Liceo («Lycaeum»), al este de la ciudad; arriba, la Academia de Platón. Es una reconstrucción del siglo XVIII, no un plano exacto.",
    "page": "https://commons.wikimedia.org/wiki/File:1784_Bocage_Map_of_the_City_of_Athens_in_Ancient_Greece_-_Geographicus_-_AthensPlan2-white-1793.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/liceo_1.jpg",
    "pie": "«La escuela de Aristóteles», fresco de Gustav Adolph Spangenberg (hacia 1883-1888): una escena imaginada en el siglo XIX, con maestro y discípulos paseando bajo un pórtico",
    "page": "https://commons.wikimedia.org/wiki/File:The_School_of_Aristotle.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "335 a. C.",
    "t": "Aristóteles vuelve a Atenas, ya bajo dominio macedonio, y empieza a enseñar en el Liceo."
   },
   {
    "a": "323 a. C.",
    "t": "Muere Alejandro Magno. Aristóteles, mal visto por su relación con Macedonia, deja Atenas; muere al año siguiente en Calcis."
   },
   {
    "a": "322 a. C.",
    "t": "Teofrasto pasa a dirigir la escuela, durante más de treinta años."
   },
   {
    "a": "306 a. C.",
    "t": "Una ley obliga a los filósofos extranjeros a salir de Atenas y la escuela queda cerrada un año."
   },
   {
    "a": "hacia 287 a. C.",
    "t": "Muere Teofrasto. En su testamento deja el jardín y los paseos a sus amigos para que sigan estudiando juntos, y sus libros y los de Aristóteles a Neleo. La escuela elige a Estratón, y Neleo acabará llevándose la biblioteca a Escepsis."
   },
   {
    "a": "86 a. C.",
    "t": "Sila asalta Atenas: el Liceo deja de funcionar y los libros de Aristóteles viajan a Roma."
   },
   {
    "a": "siglo I a. C.",
    "t": "Andrónico de Rodas ordena y edita las obras de Aristóteles."
   },
   {
    "a": "176",
    "t": "Marco Aurelio crea en Atenas cátedras pagadas para aristotélicos, platónicos, estoicos y epicúreos."
   },
   {
    "a": "hacia 200",
    "t": "Alejandro de Afrodisias escribe sus comentarios a Aristóteles, muy leídos después en árabe y en latín."
   },
   {
    "a": "1996",
    "t": "Aparecen en el centro de Atenas los restos del gimnasio del Liceo."
   }
  ],
  "etapas": [
   {
    "nom": "Aristóteles",
    "a": "335 – 323 a. C.",
    "q": "Aristóteles, Teofrasto, Eudemo, Aristóxeno y Dicearco",
    "d": "Un grupo de investigadores que trabajan como socios: recogen datos, discuten y escriben sobre casi todos los saberes."
   },
   {
    "nom": "Teofrasto y Estratón",
    "a": "322 – hacia 269 a. C.",
    "q": "Teofrasto y Estratón de Lámpsaco",
    "d": "Teofrasto organiza el estudio de las plantas y compra terrenos y edificios para la escuela. Estratón da a la física un giro más naturalista."
   },
   {
    "nom": "Decadencia",
    "a": "hacia 269 – 86 a. C.",
    "q": "Licón, Aristón de Ceos, Critolao y otros",
    "d": "La escuela sigue, pero sin grandes ideas nuevas: el estoicismo y el epicureísmo atraen más. La guerra del 86 a. C. acaba con ella."
   },
   {
    "nom": "Los comentaristas",
    "a": "siglo I a. C. – siglo III d. C.",
    "q": "Andrónico de Rodas y Alejandro de Afrodisias",
    "d": "Ya no se trata de ampliar la obra de Aristóteles, sino de editarla, explicarla y defenderla. Esa tradición pasará a los filósofos árabes y a la Edad Media latina."
   }
  ]
 },
 {
  "id": "jardin",
  "cas_ilu": [
   "epicuro"
  ],
  "nombre": "El Jardín de Epicuro",
  "fechas": "Atenas, desde 306 a. C.",
  "cas_epoca": "ant",
  "lugar": "Una casa con huerto que Epicuro compró a las afueras de Atenas. De ahí el nombre de la escuela: el Jardín (Kêpos). Cicerón cuenta que, paseando de la puerta del Dípilon a la Academia, pasaban junto a los jardines de Epicuro (Del supremo bien y del supremo mal, V, 1-3).",
  "hoy": "No se ha localizado el lugar exacto.",
  "miembros": "Epicuro y sus amigos. Admitía a mujeres, como Leontion o Temista de Lámpsaco, y a esclavos, como Mys, al que Epicuro dejó libre en su testamento. Lo sucedió al frente de la escuela Hermarco.",
  "vida": "Vivían juntos con sencillez: pan, agua y conversación con los amigos. Se reunían cada día 20 del mes para recordar a su maestro y procuraban mantenerse lejos de la política de la ciudad.",
  "ideas": "La felicidad es el placer entendido como ausencia de dolor en el cuerpo y de turbación en el alma (ataraxia). Para lograrla hacen falta pocos deseos, la amistad y perder el miedo a los dioses y a la muerte.",
  "cita": {
   "t": "Huésped, aquí te sentirás bien: aquí el bien supremo es el placer.",
   "ref": "Inscripción de la entrada del Jardín, según Séneca, Cartas a Lucilio, 21, 10"
  },
  "fin": "La escuela duró siglos. Hubo comunidades epicúreas en otras ciudades, y en la Villa de los Papiros de Herculano, sepultada por el Vesubio en el año 79, se han encontrado rollos del epicúreo Filodemo.",
  "trampa": "«Epicúreo» no significa glotón ni juerguista. El placer del Jardín era sobrio: pocos deseos, comida sencilla y amigos.",
  "pregunta": "¿Puede una comunidad de amigos que se aparta de la política ser feliz mientras la ciudad va mal? ¿Es una huida o una forma de resistencia?",
  "temas": [
   "hf-helenismo",
   "fil-helenismo",
   "fil-t5"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Epicurus",
    "url": "https://plato.stanford.edu/entries/epicurus/"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/atenas_bocage.jpg",
    "pie": "El mismo mapa de 1785 (Barbié du Bocage). El Jardín de Epicuro no aparece, porque no se sabe dónde estaba exactamente: según Cicerón, junto al camino que va de la puerta del Dípilon a la Academia (arriba a la izquierda).",
    "page": "https://commons.wikimedia.org/wiki/File:1784_Bocage_Map_of_the_City_of_Athens_in_Ancient_Greece_-_Geographicus_-_AthensPlan2-white-1793.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/jardin_tetrafarmaco.jpg",
    "pie": "El «tetrafármaco» epicúreo en un papiro de Filodemo (PHerc. 1005, col. 5), según una copia dibujada hacia 1803-1806",
    "page": "https://commons.wikimedia.org/wiki/File:Tetrapharmakos_PHerc_1005_col_5.png"
   },
   {
    "f": "media/galeria_museo/comunidades/jardin_papiro.jpg",
    "pie": "Copia dibujada en el siglo XIX de una columna de un papiro de Herculano (PHerc. 1425), de la biblioteca epicúrea de la Villa de los Papiros",
    "page": "https://commons.wikimedia.org/wiki/File:Herculaneum_papyrus_1425.png"
   }
  ],
  "cronologia": [
   {
    "a": "341 a. C.",
    "t": "Nace Epicuro en la isla de Samos, en una familia de colonos atenienses."
   },
   {
    "a": "306 a. C.",
    "t": "Se instala en Atenas y compra la casa con huerto: nace el Jardín."
   },
   {
    "a": "271-270 a. C.",
    "t": "Muere Epicuro. Su testamento deja el Jardín a Hermarco y manda celebrar cada día 20 del mes."
   },
   {
    "a": "siglo I a. C.",
    "t": "En Italia, Lucrecio escribe el poema De la naturaleza de las cosas y Filodemo enseña en Herculano."
   },
   {
    "a": "79",
    "t": "La erupción del Vesubio sepulta la Villa de los Papiros de Herculano con su biblioteca epicúrea."
   },
   {
    "a": "1752",
    "t": "Aparecen en Herculano los rollos carbonizados; desde entonces se intentan leer, hoy también con rayos X e inteligencia artificial."
   }
  ]
 },
 {
  "id": "stoa",
  "cas_ilu": [
   "zenon",
   "cleantes",
   "crisipo",
   "seneca"
  ],
  "nombre": "La Stoa (el Pórtico Pintado)",
  "fechas": "Atenas, hacia 300 a. C.; después, Rodas y Roma, hasta el siglo III",
  "cas_epoca": "ant",
  "lugar": "La Stoa Poikile o Pórtico Pintado, una larga galería de columnas en el lado norte del Ágora de Atenas, construida hacia el 460 a. C. Tenía cuadros famosos, como el de la batalla de Maratón, y estaba abierta a todo el mundo. Zenón eligió enseñar allí, en un lugar público, y de la palabra stoa (pórtico) viene «estoicismo».",
  "hoy": "Solo se ha excavado la esquina occidental, en las excavaciones de 1980-1982 junto a la calle Adrianou, y se ve desde la calle. Para imaginar cómo era una stoa se puede visitar la Stoa de Átalo, en el mismo Ágora, reconstruida en los años cincuenta como museo.",
  "miembros": "La fundó Zenón de Citio. Lo sucedieron Cleantes de Aso y Crisipo de Solos, que ordenó toda la doctrina. Más tarde destacaron Panecio, el último director indiscutido en Atenas, y su alumno Posidonio, que abrió escuela en Rodas. En Roma fueron estoicos Séneca, consejero de Nerón; Epicteto, que había sido esclavo; y el emperador Marco Aurelio.",
  "vida": "Enseñaban en público: unos paseando por la galería y otros sentados en los escalones, junto a curiosos, vendedores y mendigos. Para ellos la filosofía era un entrenamiento diario: revisar lo que uno piensa y desea y cómo actúa, no solo aprender teorías.",
  "ideas": "La filosofía tiene tres partes unidas: lógica, física y ética. La virtud es el único bien; la salud, la riqueza o el placer no son buenos ni malos por sí mismos. Las pasiones que nos dañan nacen de juicios equivocados y se pueden corregir con la razón. Crisipo creó una lógica de proposiciones («si…, entonces…», «o…, o…») que se parece a la lógica moderna.",
  "cita": {
   "t": "No son las cosas las que perturban a los hombres, sino las opiniones que tienen sobre las cosas.",
   "ref": "Epicteto, Enquiridión (Manual), 5, recogido por su alumno Arriano"
  },
  "fin": "No hubo un final de golpe. Tras la muerte de Panecio en el 110 a. C., el centro del estoicismo pasó a Rodas y después a Roma, donde se puso de moda entre la élite. Fue perdiendo fuerza desde el siglo III. El edificio siguió en pie: hacia el 396 un gobernador romano se llevó los cuadros, y en el siglo VI se usó como cantera.",
  "trampa": "Ser «estoico» no es aguantar sin sentir nada ni tragarse las emociones: se trataba de no dejarse arrastrar por juicios falsos sobre lo que es bueno o malo. Además, de los primeros estoicos no se conserva ninguna obra completa; lo que más se lee hoy (Séneca, Epicteto, Marco Aurelio) es el estoicismo romano, varios siglos posterior.",
  "pregunta": "¿Es verdad que lo que nos hace sufrir no son las cosas, sino lo que pensamos de ellas? Busca un ejemplo en el que funcione y otro en el que no.",
  "temas": [
   "hf-helenismo",
   "fil-helenismo",
   "fil-t5"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Stoicism",
    "url": "https://plato.stanford.edu/entries/stoicism/"
   },
   {
    "t": "Wikipedia: Stoa Poikile",
    "url": "https://en.wikipedia.org/wiki/Stoa_Poikile"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/stoa_1.jpg",
    "pie": "Las excavaciones del lado norte del Ágora de Atenas, donde se han identificado restos de la Stoa Poikile (fotografía de 2020)",
    "page": "https://commons.wikimedia.org/wiki/File:The_excavated_north_side_of_the_Ancient_Agora_of_Athens_on_August_13,_2020.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/stoa_2.jpg",
    "pie": "La galería de la Stoa de Átalo, en el Ágora de Atenas, reconstruida en los años cincuenta: así era por dentro un pórtico griego (fotografía de 2024)",
    "page": "https://commons.wikimedia.org/wiki/File:Stoa_of_Attalos,_Interior,_Athens,_Greece.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "hacia 460 a. C.",
    "t": "Se construye el Pórtico Pintado en el Ágora de Atenas."
   },
   {
    "a": "hacia 300 a. C.",
    "t": "Zenón de Citio, antiguo alumno del cínico Crates, empieza a enseñar en el Pórtico."
   },
   {
    "a": "hacia 262 a. C.",
    "t": "Muere Zenón. Lo sucede Cleantes."
   },
   {
    "a": "hacia 230 – 206 a. C.",
    "t": "Crisipo dirige la escuela y la convierte en un sistema completo."
   },
   {
    "a": "110 a. C.",
    "t": "Muere Panecio. Su alumno Posidonio se instala en Rodas, que pasa a ser el gran centro estoico."
   },
   {
    "a": "66 y 62 a. C.",
    "t": "Pompeyo asiste a lecciones de Posidonio en Rodas; también Cicerón había estudiado con él."
   },
   {
    "a": "65",
    "t": "Muere Séneca, que había sido consejero del emperador Nerón."
   },
   {
    "a": "hacia 93",
    "t": "El emperador Domiciano expulsa de Roma a los filósofos. Epicteto abre escuela en Nicópolis, en Grecia."
   },
   {
    "a": "161 – 180",
    "t": "Reina Marco Aurelio, que escribe en griego sus reflexiones personales, las Meditaciones."
   },
   {
    "a": "176",
    "t": "Marco Aurelio crea en Atenas cátedras pagadas para las cuatro grandes escuelas, también la estoica."
   },
   {
    "a": "hacia 396",
    "t": "Un gobernador romano retira los cuadros del Pórtico."
   },
   {
    "a": "1980-1982",
    "t": "Se excavan los cimientos de la esquina occidental del Pórtico."
   }
  ],
  "etapas": [
   {
    "nom": "Estoa antigua",
    "a": "hacia 300 – mediados del siglo II a. C.",
    "q": "Zenón, Cleantes, Crisipo, Diógenes de Babilonia y Antípatro",
    "d": "Se construye el sistema: lógica, física y ética. Crisipo es su gran ordenador. De estos autores solo quedan fragmentos citados por otros."
   },
   {
    "nom": "Estoa media",
    "a": "siglos II – I a. C.",
    "q": "Panecio y Posidonio",
    "d": "Dialogan con Platón y Aristóteles y llevan el estoicismo a los romanos. Cicerón se inspira en Panecio para su obra Sobre los deberes. El centro se traslada de Atenas a Rodas."
   },
   {
    "nom": "Estoicismo romano",
    "a": "siglo I – siglo III",
    "q": "Musonio Rufo, Séneca, Epicteto y Marco Aurelio",
    "d": "Una filosofía práctica para vivir: cartas, conversaciones y apuntes personales. Son las únicas obras estoicas que se conservan completas."
   }
  ]
 },
 {
  "id": "museo-alejandria",
  "cas_ilu": [
   "hipatia"
  ],
  "nombre": "El Museo y la Biblioteca de Alejandría",
  "fechas": "Alejandría, hacia 300 a. C. – siglos IV-V d. C.",
  "cas_epoca": "ant",
  "lugar": "Dentro del palacio real de los Ptolomeos, junto al puerto de Alejandría, en Egipto. El Museo (Mouseion, «casa de las Musas») era una institución de investigación con salas de estudio, un comedor común, un paseo y jardines; a su lado, la gran Biblioteca reunía los rollos de papiro. Una segunda biblioteca, más accesible, se guardaba en el Serapeo, el templo del dios Serapis.",
  "hoy": "No queda nada de los edificios antiguos: su emplazamiento exacto se discute y buena parte de la Alejandría de los Ptolomeos está hoy bajo el agua o bajo la ciudad moderna. En 2002 se inauguró junto al mar la Bibliotheca Alexandrina, que recuerda a la antigua sin ser su continuación.",
  "miembros": "La fundaron los primeros Ptolomeos (Ptolomeo I y Ptolomeo II) siguiendo, según la tradición, el consejo de Demetrio de Falero. No era una escuela con una doctrina, sino un centro de sabios pagados por el rey: el matemático Euclides, Eratóstenes (que midió la circunferencia de la Tierra y dirigió la Biblioteca), el astrónomo Aristarco de Samos (que propuso que la Tierra gira alrededor del Sol), los médicos Herófilo y Erasístrato, y el poeta y bibliotecario Calímaco, que ordenó los fondos en los Pínakes, el primer gran catálogo. Siglos después, ya en época romana, enseñó en Alejandría la filósofa y matemática Hipatia.",
  "vida": "Los sabios vivían del sueldo real y comían juntos, dedicados a copiar, corregir y comentar textos y a investigar en matemáticas, astronomía, geografía y medicina. Para llenar la Biblioteca, los Ptolomeos compraban rollos por todo el Mediterráneo y, según cuenta Galeno, mandaban requisar los libros que viajaban en los barcos que hacían escala en el puerto, para copiarlos.",
  "ideas": "La idea de reunir en un solo lugar todo el saber escrito del mundo y estudiarlo con método. Alejandría convirtió el conocimiento en un trabajo colectivo y organizado, sostenido por el poder político.",
  "cita": {
   "t": "Un libro grande es un mal grande.",
   "ref": "Dicho atribuido a Calímaco, bibliotecario de Alejandría, que prefería las obras breves (fragmento 465 Pfeiffer)"
  },
  "fin": "La Biblioteca no desapareció en un solo día. Sufrió daños durante la guerra de Julio César en Alejandría (48 a. C.) y fue decayendo con los siglos a medida que los Ptolomeos perdían poder; el Serapeo fue destruido en el 391 d. C. por orden del obispo Teófilo. Cuando los árabes tomaron la ciudad en el 642, de la gran Biblioteca ya apenas quedaba nada.",
  "trampa": "Se suele contar que la Biblioteca ardió entera de golpe —por culpa de César, del cristianismo o de los árabes— y se repite la cifra de 700.000 rollos. Los historiadores lo matizan: la pérdida fue lenta y por muchas causas, las cifras antiguas son poco fiables, y la famosa historia del califa Omar mandando quemar los libros aparece por primera vez más de quinientos años después, en un autor del siglo XIII.",
  "pregunta": "¿Puede un solo lugar guardar todo el saber del mundo? ¿Qué se pierde cuando se pierde una biblioteca?",
  "temas": [
   "hf-helenismo"
  ],
  "fuentes": [
   {
    "t": "Wikipedia: Biblioteca de Alejandría",
    "url": "https://es.wikipedia.org/wiki/Biblioteca_de_Alejandr%C3%ADa"
   },
   {
    "t": "Wikipedia: Museo de Alejandría",
    "url": "https://es.wikipedia.org/wiki/Museo_de_Alejandr%C3%ADa"
   }
  ]
 },
 {
  "id": "casa-sabiduria",
  "cas_ilu": [],
  "nombre": "La Casa de la Sabiduría (Bayt al-Hikma) de Bagdad",
  "fechas": "Bagdad, finales del siglo VIII – siglo IX",
  "cas_epoca": "med",
  "lugar": "Una biblioteca de los califas abasíes en Bagdad, la ciudad que el califa al-Mansur fundó en 762 como nueva capital. Empezó como colección de libros de la corte, al estilo de la biblioteca de los antiguos reyes persas, y creció con Harún al-Rashid y sobre todo con su hijo al-Mamún.",
  "hoy": "No queda nada de ella y no se sabe exactamente dónde estaba; del Bagdad de los primeros califas abasíes apenas se conservan restos. Un centro de investigación del Bagdad actual lleva hoy su nombre.",
  "miembros": "Los califas al-Mansur, Harún al-Rashid y al-Mamún (que reinó de 813 a 833) pagaban libros y traductores. Se relaciona con ella a Hunayn ibn Ishaq, un médico cristiano que tradujo a Galeno y a Hipócrates; al matemático al-Juarismi, de cuyo nombre viene la palabra «algoritmo»; a los hermanos Banu Musa; y al filósofo al-Kindi, que dirigió uno de los dos grandes grupos de traductores de su tiempo (el otro era el de Hunayn).",
  "vida": "Se buscaban manuscritos griegos, persas e indios y se traducían al árabe, a menudo pasando antes por el siriaco, la lengua de los cristianos de la zona. Muchos traductores eran cristianos, y los mecenas eran musulmanes: califas, cortesanos y familias ricas. Además de filosofía, se traducían y escribían libros de medicina, matemáticas y astronomía.",
  "ideas": "Que el saber de otros pueblos, sobre todo el de los griegos, merece ser estudiado aunque venga de fuera, y que la filosofía de Aristóteles puede ayudar a pensar sobre Dios y el mundo. Al-Kindi defendió esta idea frente a quienes desconfiaban del pensamiento griego.",
  "cita": {
   "t": "No debemos avergonzarnos de admirar la verdad ni de adquirirla, venga de donde venga, aunque venga de pueblos lejanos y extranjeros.",
   "ref": "Al-Kindi, Sobre la filosofía primera, cap. 1 (traducido de la versión inglesa citada en la Stanford Encyclopedia of Philosophy, entrada «al-Kindi»)"
  },
  "fin": "El califa al-Mutawakkil (847-861) se apartó de la filosofía y el apoyo de la corte disminuyó. En 1258 los mongoles tomaron Bagdad y destruyeron sus bibliotecas. No está claro que la biblioteca de al-Mamún siguiera existiendo para entonces.",
  "trampa": "Los historiadores discuten qué fue de verdad. La imagen de una gran academia, casi una universidad con departamentos, se construyó sobre todo en los siglos XIX y XX. Dimitri Gutas sostiene que era una biblioteca de palacio, con una oficina que traducía sobre todo historia persa, y que el gran movimiento de traducción del griego ocurrió en Bagdad pero fuera de ella: Hunayn, por ejemplo, nunca la menciona en sus traducciones. Otros creen que fue algo más. También es una leyenda la del río Tigris teñido de negro por la tinta de los libros arrojados en 1258: según la historiadora Michal Biran, es un tópico literario para exagerar la barbarie mongola.",
  "pregunta": "¿Por qué un poder político paga para traducir libros de otra cultura? ¿Qué gana y qué arriesga al hacerlo?",
  "temas": [
   "hf-aristoteles-arabe",
   "hf-verdad-no-contradice",
   "hf-islam-ideas",
   "hf-medieval"
  ],
  "fuentes": [
   {
    "t": "Wikipedia: House of Wisdom",
    "url": "https://en.wikipedia.org/wiki/House_of_Wisdom"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy: al-Kindi",
    "url": "https://plato.stanford.edu/entries/al-kindi/"
   },
   {
    "t": "Wikipedia: Casa de la Sabiduría",
    "url": "https://es.wikipedia.org/wiki/Casa_de_la_Sabidur%C3%ADa"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/casa_sabiduria_1.jpg",
    "pie": "Una biblioteca con lectores, en una miniatura de Yahya al-Wasiti para las Maqamat de al-Hariri (Bagdad, 1237), Biblioteca Nacional de Francia. No representa la Casa de la Sabiduría, pero muestra cómo era una biblioteca de la época.",
    "page": "https://commons.wikimedia.org/wiki/File:Maqamat_hariri.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/casa_sabiduria_2.jpg",
    "pie": "Plano de la Ciudad Redonda de Bagdad en tiempos del califa al-Mansur, según la reconstrucción del historiador Guy Le Strange (1900)",
    "page": "https://commons.wikimedia.org/wiki/File:Round_City_in_the_Time_of_Mansur_(Le_Strange).png"
   },
   {
    "f": "media/galeria_museo/comunidades/casa_sabiduria_3.jpg",
    "pie": "Los mongoles asedian Bagdad en 1258, en una miniatura persa de hacia 1430-1434",
    "page": "https://commons.wikimedia.org/wiki/File:Bagdad1258.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "762",
    "t": "El califa al-Mansur funda Bagdad como capital y reúne una biblioteca en palacio."
   },
   {
    "a": "786 – 809",
    "t": "Reina Harún al-Rashid; su biblioteca es la antecesora directa de la Casa de la Sabiduría."
   },
   {
    "a": "813 – 833",
    "t": "Reina al-Mamún, el gran mecenas de traductores y sabios."
   },
   {
    "a": "hacia 820",
    "t": "Al-Juarismi escribe, animado por al-Mamún, su libro sobre el cálculo de al-jabr, de donde viene la palabra «álgebra»."
   },
   {
    "a": "833 – 842",
    "t": "Reina al-Mutasim. Al-Kindi le dedica Sobre la filosofía primera y es preceptor de su hijo."
   },
   {
    "a": "847 – 861",
    "t": "Reina al-Mutawakkil, que retira el apoyo a la filosofía griega."
   },
   {
    "a": "hacia 870",
    "t": "Muere al-Kindi, «el filósofo de los árabes»."
   },
   {
    "a": "873",
    "t": "Muere Hunayn ibn Ishaq, el traductor más prolífico."
   },
   {
    "a": "1258",
    "t": "Los mongoles de Hulagu toman Bagdad (13 de febrero) y destruyen sus bibliotecas."
   },
   {
    "a": "1998",
    "t": "Dimitri Gutas publica Greek Thought, Arabic Culture y pone en duda la imagen tradicional de la Casa de la Sabiduría."
   }
  ]
 },
 {
  "id": "academia-florencia",
  "cas_ilu": [
   "pico"
  ],
  "nombre": "La Academia platónica de Florencia",
  "fechas": "Florencia, hacia 1462 – 1499",
  "cas_epoca": "ren",
  "lugar": "Las colinas de las afueras de Florencia: la villa de los Médici en Careggi y una pequeña finca con casa que Cosimo de Médici regaló a Marsilio Ficino muy cerca, en 1463. También en la ciudad, en casas de amigos y en cartas.",
  "hoy": "La Villa Medici de Careggi forma parte de las Villas y jardines de los Médici, Patrimonio de la Humanidad de la UNESCO. Es propiedad de la administración pública de la Toscana y está en restauración, cerrada al público.",
  "miembros": "Su protector fue Cosimo de Médici y, después, su nieto Lorenzo el Magnífico. El centro era Marsilio Ficino. A su alrededor hubo, según un estudioso de principios del siglo XX, un centenar de personas, entre ellas Cristoforo Landino, Angelo Poliziano y, desde 1484, el joven Giovanni Pico della Mirandola. Pero el propio Ficino dijo que algunos de ellos nunca habían sido sus oyentes.",
  "vida": "Ficino traducía a Platón del griego al latín, escribía comentarios y largas cartas a sus amigos y enseñaba a jóvenes de las familias importantes de Florencia. Se reunían para conversar como amigos, al estilo de los diálogos de Platón, y a veces celebraban banquetes en su honor, como el de El banquete.",
  "ideas": "Platón y el cristianismo dicen en el fondo lo mismo: existe una sabiduría antigua que viene de Hermes Trismegisto y otros sabios y culmina en Platón. El alma humana es inmortal y puede elevarse por el amor y la belleza hasta Dios. Pico añadió que el ser humano no tiene un lugar fijo en el mundo: puede elegir lo que llega a ser.",
  "cita": {
   "t": "Me dedico con entusiasmo a la Academia que nos has preparado en la finca de Careggi, como si venerara un santuario de la contemplación.",
   "ref": "Marsilio Ficino, carta a Cosimo de Médici, septiembre de 1462 (traducida de la versión inglesa citada en la Stanford Encyclopedia of Philosophy, entrada «Marsilio Ficino»)"
  },
  "fin": "Cosimo murió en Careggi en 1464 y Lorenzo, en la misma villa, en 1492. Pico murió en 1494 y Ficino, en Careggi, en 1499. Según algunos relatos, un grupo de sus seguidores siguió reuniéndose en los jardines Rucellai (Orti Oricellari) de Florencia hasta 1522; otros historiadores creen que esas reuniones ya eran otra cosa.",
  "trampa": "No fue una academia como las de hoy. No tenía estatutos ni lista de miembros, y no hay documentos de la época que la llamen «Academia platónica». Era un círculo informal de amigos y alumnos alrededor de Ficino. La idea de que Cosimo la fundó tras escuchar al sabio griego Pletón en 1439 procede del propio Ficino, que lo contó muchos años después.",
  "pregunta": "¿Necesita un grupo de amigos un nombre, unas normas o un local para ser una «escuela»? ¿Qué convierte una tertulia en una institución?",
  "temas": [
   "hf-modernidad",
   "hf-renacimiento-magia",
   "hf-platon"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Marsilio Ficino",
    "url": "https://plato.stanford.edu/entries/ficino/"
   },
   {
    "t": "Wikipedia: Platonic Academy (Florence)",
    "url": "https://en.wikipedia.org/wiki/Platonic_Academy_(Florence)"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/academia_florencia_1.jpg",
    "pie": "Marsilio Ficino (a la izquierda), Cristoforo Landino y Angelo Poliziano, en un detalle del fresco de Domenico Ghirlandaio en Santa Maria Novella de Florencia (1486-1490)",
    "page": "https://commons.wikimedia.org/wiki/File:Annuncio_dell%27angelo_a_Zaccaria_-_Marsilio_Ficino_-_Cristoforo_Landino_-_Agnolo_Poliziano.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/academia_florencia_2.jpg",
    "pie": "La villa de los Médici en Careggi, grabado de Giuseppe Zocchi (1744)",
    "page": "https://commons.wikimedia.org/wiki/File:Zocchi,_ville_33_careggi.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/academia_florencia_3.jpg",
    "pie": "«El aniversario de Platón celebrado en la villa de Careggi», cuadro de Luigi Mussini (1867): una escena imaginada cuatro siglos después a partir de un banquete que cuenta Ficino",
    "page": "https://commons.wikimedia.org/wiki/File:The_Birthday_of_Plato_Celebrated_in_the_Villa_di_Careggi_by_Lorenzo_the_Magnificent.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1433",
    "t": "Nace Marsilio Ficino en Figline, cerca de Florencia. Su padre es médico de Cosimo de Médici."
   },
   {
    "a": "1439",
    "t": "Concilio de Florencia: el sabio griego Jorge Gemisto Pletón habla de Platón ante los humanistas florentinos."
   },
   {
    "a": "1462",
    "t": "Ficino escribe a Cosimo agradeciéndole «la Academia» de Careggi y empieza a traducir a Platón."
   },
   {
    "a": "1463",
    "t": "Cosimo regala a Ficino una pequeña finca con casa en Careggi."
   },
   {
    "a": "1464",
    "t": "Ficino lee a Cosimo, ya moribundo, sus traducciones de Platón. Cosimo muere en Careggi."
   },
   {
    "a": "1469-1474",
    "t": "Ficino escribe la Teología platónica, impresa en 1482."
   },
   {
    "a": "1484",
    "t": "Se imprimen las obras completas de Platón en latín. Pico della Mirandola se instala en Florencia y conoce a Ficino y a Lorenzo."
   },
   {
    "a": "1486",
    "t": "Pico publica en Roma sus 900 tesis para debatirlas en público; en 1487 el papa suspende el debate."
   },
   {
    "a": "1492",
    "t": "Muere Lorenzo el Magnífico en Careggi."
   },
   {
    "a": "1494",
    "t": "Muere Pico, el mismo día en que el rey de Francia Carlos VIII entra en Florencia."
   },
   {
    "a": "1499",
    "t": "Muere Ficino en Careggi."
   }
  ]
 },
 {
  "id": "coterie-holbach",
  "cas_ilu": [
   "holbach",
   "diderot",
   "helvetius",
   "dalembert",
   "hume",
   "rousseau"
  ],
  "nombre": "La tertulia del barón d'Holbach (la «coterie holbachique»)",
  "fechas": "París y Grandval, hacia 1750 – 1789",
  "cas_epoca": "ilu",
  "lugar": "La casa del barón d'Holbach en la rue Royale, butte Saint-Roch, en el centro de París. Dos veces por semana, los jueves y los domingos, se celebraban allí largas cenas en las que se hablaba con una libertad que no había en casi ningún otro sitio de Europa. En verano el grupo se trasladaba al campo, a la casa de la familia de la esposa de Holbach en Grandval, en el valle del Marne, al sureste de París, donde Diderot pasaba semanas enteras y desde donde escribía sus cartas a Sophie Volland.",
  "hoy": "La vieja rue Royale, butte Saint-Roch quedó absorbida por el trazado del actual distrito 1.º de París, cerca de la iglesia de Saint-Roch, y de la casa de Holbach no se conserva nada señalado. La finca de Grandval estaba en lo que hoy es Sucy-en-Brie (Valle del Marne); de su estado actual no hemos podido confirmar nada con una fuente fiable.",
  "miembros": "El anfitrión era Paul-Henri Thiry, barón d'Holbach, un alemán afincado en París que había heredado una gran fortuna. El alma del grupo era su amigo íntimo Denis Diderot, director de la Enciclopedia. Acudían con frecuencia Helvétius, el crítico Friedrich Melchior Grimm (que contaba estas reuniones en su Correspondance littéraire), el abate Raynal, el abate Morellet, el escritor Marmontel y Jacques-André Naigeon, secretario y colaborador de Holbach que después editaría sus obras. Acudía también D'Alembert, codirector de la Enciclopedia. Y por aquella mesa desfilaron viajeros extranjeros célebres: David Hume, Adam Smith, Laurence Sterne, Edward Gibbon, Cesare Beccaria o Benjamin Franklin. Rousseau fue de los primeros en frecuentar el grupo, pero acabó rompiendo con él. (Grimm, Raynal, Morellet, Marmontel y Naigeon no tienen aquí ficha propia.)",
  "vida": "No era una escuela ni una academia, sino una tertulia de amigos: se comía bien y se discutía de todo durante horas, de ciencia, de religión, de política y de moral. Muchos de ellos escribían en la Enciclopedia; el propio Holbach redactó varios cientos de artículos, sobre todo de química, mineralogía y ciencia alemana, que traducía. La casa funcionaba además como una pequeña imprenta clandestina de ideas: desde allí salían, con nombres falsos y editadas fuera de Francia, las obras más audaces del grupo.",
  "ideas": "Eran el ala más radical de la Ilustración francesa. Defendían un materialismo completo (solo existe la materia en movimiento, también el pensamiento), una crítica frontal de la religión y una moral basada en la razón y en la búsqueda de la felicidad común, no en el premio o el castigo de otra vida. Holbach fue de los primeros autores que se declararon abiertamente ateos. No todos pensaban igual —Hume no era ateo y discutía con ellos, y muchos preferían un deísmo más prudente—, pero compartían la convicción de que ninguna autoridad, ni la Iglesia ni el rey, debía quedar fuera del examen de la razón.",
  "cita": {
   "t": "Mire alrededor de la mesa: somos dieciocho; quince son ateos sin más, y los otros tres todavía no lo tienen decidido.",
   "ref": "Respuesta del barón d'Holbach a David Hume —que decía no haber conocido nunca a un ateo—, según la narra Diderot en una carta a Sophie Volland (octubre de 1765); las cifras varían algo según la versión"
  },
  "fin": "No terminó de golpe: se fue apagando con sus protagonistas. Helvétius murió en 1771, Hume en 1776, Rousseau en 1778, D'Alembert en 1783 y Diderot en 1784. El propio Holbach murió en París el 21 de enero de 1789, meses antes de que estallara la Revolución francesa. Ninguno de ellos la vio. Naigeon siguió editando y difundiendo las obras del barón durante la Revolución.",
  "trampa": "Es tentador trazar una línea recta —«los filósofos de la Ilustración prepararon y provocaron la Revolución francesa»—, pero conviene frenar. Casi todos los miembros de la tertulia habían muerto antes de 1789, y la mayoría no eran revolucionarios ni demócratas: Holbach desconfiaba de las multitudes y esperaba reformas hechas desde arriba, no una revolución desde abajo. Los historiadores discuten cuánto influyeron de verdad estas ideas en lo que vino después (ver «El debate»). Y otra confusión frecuente: «materialista» y «ateo» no significaban aquí «egoísta» ni «sin moral»; precisamente defendían una ética razonada y la felicidad compartida.",
  "pregunta": "¿Cambian el mundo las ideas discutidas en una cena entre amigos, o solo lo cambian los hechos? Cuando después de una revolución o una catástrofe se buscan culpables entre los pensadores anteriores, ¿se está explicando o se está acusando?",
  "temas": [
   "hf-ilustracion",
   "hf-metafisica",
   "hf-contrato"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Paul-Henri Thiry (Baron) d'Holbach",
    "url": "https://plato.stanford.edu/entries/holbach/"
   },
   {
    "t": "Wikipedia: Coterie holbachique",
    "url": "https://en.wikipedia.org/wiki/Coterie_Holbachique"
   },
   {
    "t": "Wikipedia: Barón d'Holbach",
    "url": "https://es.wikipedia.org/wiki/Barón_d%27Holbach"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/coterie_holbach_retrato.jpg",
    "pie": "El barón d'Holbach, retrato al lápiz y acuarela de Louis Carrogis Carmontelle (1766)",
    "page": "https://commons.wikimedia.org/wiki/File:D%27Holbach.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/coterie_holbach_enciclopedia.jpg",
    "pie": "Frontispicio de la Enciclopedia de Diderot y D'Alembert, grabado en 1772 por Benoît-Louis Prévost a partir de un dibujo de Charles-Nicolas Cochin de 1764: la Razón y la Filosofía levantan el velo que cubre a la Verdad. Holbach escribió para la obra muchos artículos, sobre todo de química y mineralogía.",
    "page": "https://commons.wikimedia.org/wiki/File:Encyclopedie_frontispice_full.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/coterie_holbach_sistema.jpg",
    "pie": "Portada del Sistema de la naturaleza (1770), la obra más radical de Holbach, publicada con el nombre de un autor ya fallecido, «M. Mirabaud», para escapar de la censura",
    "page": "https://commons.wikimedia.org/wiki/File:Systemedelanature.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1723",
    "t": "Nace Paul-Henri Thiry, futuro barón d'Holbach, en Edesheim (Palatinado, actual Alemania). Se criará y hará rico en Francia."
   },
   {
    "a": "hacia 1750",
    "t": "Instalado en París y dueño de una gran fortuna, Holbach abre su casa a los filósofos. Empiezan las cenas de los jueves y los domingos."
   },
   {
    "a": "1751",
    "t": "Sale el primer tomo de la Enciclopedia, dirigida por Diderot y D'Alembert. Holbach colabora con artículos de ciencia."
   },
   {
    "a": "1759",
    "t": "El poder revoca el privilegio de la Enciclopedia y la obra queda prohibida; Diderot la continúa en parte en secreto."
   },
   {
    "a": "hacia 1761-1766",
    "t": "Circula clandestinamente El cristianismo desvelado, primer gran ataque de Holbach contra la religión."
   },
   {
    "a": "1765",
    "t": "David Hume, de paso por París, cena en casa de Holbach: de ahí la célebre anécdota sobre los ateos a la mesa. Ese año salen, con pie de imprenta falso, los diez tomos de texto que faltaban de la Enciclopedia."
   },
   {
    "a": "1770",
    "t": "Se publica el Sistema de la naturaleza con el nombre de «Mirabaud». El Parlamento de París lo condena y lo manda quemar; Voltaire lo refuta para defender su deísmo."
   },
   {
    "a": "1771",
    "t": "Muere Helvétius, uno de los habituales de la tertulia."
   },
   {
    "a": "1772",
    "t": "Se completan los tomos de láminas de la Enciclopedia."
   },
   {
    "a": "1784",
    "t": "Muere Diderot, el amigo más cercano de Holbach y el alma del grupo (D'Alembert había muerto en 1783)."
   },
   {
    "a": "21 de enero de 1789",
    "t": "Muere el barón d'Holbach en París, pocos meses antes de la Revolución."
   },
   {
    "a": "14 de julio de 1789",
    "t": "Comienza la Revolución francesa. Ninguno de los principales miembros de la tertulia llegó a verla."
   }
  ],
  "etapas": [
   {
    "nom": "La mesa se llena",
    "a": "hacia 1750 – 1759",
    "q": "Holbach, Diderot, Grimm, Rousseau (al principio) y D'Alembert",
    "d": "Nace la tertulia alrededor de las cenas de Holbach, en pleno arranque de la Enciclopedia. Rousseau frecuenta el grupo, pero las discrepancias crecen y acabará rompiendo con lo que llamó despectivamente la «coterie holbachique»."
   },
   {
    "nom": "Los años de la Enciclopedia",
    "a": "1751 – 1772",
    "q": "Diderot, D'Alembert, Holbach, Helvétius, Marmontel, Morellet y Raynal",
    "d": "Muchos de los contertulios escriben en la Enciclopedia pese a la prohibición. La casa se convierte también en punto de encuentro de los viajeros extranjeros ilustrados que pasan por París."
   },
   {
    "nom": "Los libros clandestinos",
    "a": "hacia 1761 – 1776",
    "q": "Holbach y su secretario Naigeon",
    "d": "Holbach publica sus obras más audaces —culminan en el Sistema de la naturaleza (1770)— con nombres falsos y editadas fuera de Francia. Es el momento más combativo del materialismo y el ateísmo del grupo."
   },
   {
    "nom": "El final y el debate posterior",
    "a": "desde 1771",
    "q": "Los últimos supervivientes y, después, los historiadores",
    "d": "La tertulia se apaga al morir sus miembros, todos antes de 1789. Desde entonces se discute qué relación tuvieron estas ideas con la Revolución: el historiador Jonathan Israel sitúa a esta «Ilustración radical» en el origen de los valores democráticos de 1789, mientras que otros estudiosos matizan esa tesis y recuerdan que la mayoría de estos filósofos no eran ni revolucionarios ni demócratas."
   }
  ]
 },
 {
  "id": "escuela-francfort",
  "cas_ilu": [
   "horkheimer",
   "adorno",
   "benjamin",
   "habermas"
  ],
  "nombre": "La Escuela de Fráncfort",
  "fechas": "Fráncfort, Ginebra, Nueva York y de nuevo Fráncfort, desde 1923",
  "cas_epoca": "con",
  "lugar": "El Instituto de Investigación Social, ligado a la Universidad de Fráncfort del Meno. Su primer edificio propio se inauguró en 1924 en la Viktoria-Allee (hoy Senckenberganlage), junto a la universidad, y fue destruido en los bombardeos de la Segunda Guerra Mundial. Durante el exilio tuvo sede en Ginebra y después en Nueva York, en una casa cedida por la Universidad de Columbia.",
  "hoy": "El Instituto sigue funcionando en Fráncfort, en el edificio construido en 1951 en la misma avenida, frente al solar del primero. Lo han dirigido, entre otros, Axel Honneth (2001-2018) y Stephan Lessenich (desde 2021).",
  "miembros": "Lo financió Felix Weil, hijo de un rico comerciante, y su primer director fue Carl Grünberg. Desde 1930 lo dirigió Max Horkheimer, que reunió a Theodor W. Adorno, Herbert Marcuse, Erich Fromm, Friedrich Pollock y Leo Löwenthal. Walter Benjamin colaboró con ellos y publicó en su revista sin ser miembro de pleno derecho. De la segunda generación, el más conocido es Jürgen Habermas, que trabajó en el Instituto de 1956 a 1959.",
  "vida": "Querían unir disciplinas que solían ir por separado: filosofía, sociología, economía y psicoanálisis, junto con encuestas y estudios empíricos, por ejemplo sobre la autoridad en la familia o sobre la personalidad autoritaria. Publicaban la Revista de Investigación Social (Zeitschrift für Sozialforschung, desde 1932). La mayoría de los miembros de la primera generación eran de origen judío y vivieron el exilio.",
  "ideas": "Horkheimer distinguió la «teoría tradicional», que solo describe la sociedad, de una «teoría crítica», que pregunta por qué la sociedad es como es y cómo podría ser más libre. Partían de Marx, pero también lo revisaron. En Dialéctica de la Ilustración, Horkheimer y Adorno sostienen que la razón, convertida en simple instrumento para dominar, puede volverse contra la libertad, y critican la «industria cultural». Habermas defendió después que el diálogo racional entre ciudadanos puede fundamentar la vida en común.",
  "cita": {
   "t": "Comprender por qué la humanidad, en lugar de entrar en un estado verdaderamente humano, se hunde en un nuevo tipo de barbarie.",
   "ref": "Horkheimer y Adorno, Dialéctica de la Ilustración (1944), prólogo, donde exponen el objetivo del libro (Adorno, Gesammelte Schriften, 3, p. 11)"
  },
  "fin": "No terminó: es una tradición que continúa. Sí hubo rupturas. En enero de 1969 unos estudiantes ocuparon el Instituto para exigir un debate político; Adorno y Ludwig von Friedeburg, sus directores, llamaron a la policía. Marcuse, que simpatizaba con el movimiento estudiantil, se lo criticó. Adorno murió en agosto de ese año.",
  "trampa": "No era un grupo con una sola doctrina: Fromm se separó del Instituto en 1939 por desacuerdos teóricos, Marcuse y Adorno discreparon sobre los estudiantes y Habermas corrigió buena parte del pesimismo de sus maestros.",
  "pregunta": "¿Puede una teoría describir la sociedad sin juzgarla? ¿Debe la filosofía limitarse a explicar el mundo o también a criticarlo?",
  "temas": [
   "hf-posmodernidad",
   "hf-ilustracion",
   "hf-marxismos",
   "fil-marxismos",
   "fil-t6"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Critical Theory (Frankfurt School)",
    "url": "https://plato.stanford.edu/entries/critical-theory/"
   },
   {
    "t": "Wikipedia: Frankfurt School",
    "url": "https://en.wikipedia.org/wiki/Frankfurt_School"
   },
   {
    "t": "Wikipedia: Instituto de Investigación Social",
    "url": "https://es.wikipedia.org/wiki/Instituto_de_Investigaci%C3%B3n_Social"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/escuela_francfort_1.jpg",
    "pie": "Portada del primer número de la revista del Instituto, la Zeitschrift für Sozialforschung (1932)",
    "page": "https://commons.wikimedia.org/wiki/File:Zeitschrift_f%C3%BCr_Sozialforschung_1932_Titel.jpg"
   },
   {
    "f": "media/galeria_museo/comunidades/escuela_francfort_2.jpg",
    "pie": "Entrada del antiguo edificio principal de la Universidad de Fráncfort (1906), en el campus de Bockenheim, a pocos pasos del Instituto (fotografía de 2009)",
    "page": "https://commons.wikimedia.org/wiki/File:Frankfurt_Bockenheim_J%C3%BCgelhaus_22.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1923",
    "t": "Se funda en Fráncfort el Instituto de Investigación Social, financiado por Felix Weil."
   },
   {
    "a": "1924",
    "t": "Se inaugura el edificio del Instituto; Carl Grünberg es su primer director."
   },
   {
    "a": "1930",
    "t": "Max Horkheimer asume la dirección y propone un programa interdisciplinar."
   },
   {
    "a": "1933",
    "t": "Los nazis cierran el Instituto, que ya había abierto una sede en Ginebra."
   },
   {
    "a": "1934",
    "t": "El Instituto se instala en Nueva York, acogido por la Universidad de Columbia."
   },
   {
    "a": "1937",
    "t": "Horkheimer publica «Teoría tradicional y teoría crítica»."
   },
   {
    "a": "1940",
    "t": "Walter Benjamin muere en Portbou (Girona) mientras huía de Francia."
   },
   {
    "a": "1941",
    "t": "Horkheimer, Adorno y Pollock se trasladan a Los Ángeles."
   },
   {
    "a": "1944",
    "t": "Horkheimer y Adorno terminan Dialéctica de la Ilustración."
   },
   {
    "a": "1951",
    "t": "El Instituto reabre en Fráncfort, en un edificio nuevo, con Horkheimer como director."
   },
   {
    "a": "1964",
    "t": "Marcuse, que se quedó en Estados Unidos, publica El hombre unidimensional, muy leído por los estudiantes de los años sesenta."
   },
   {
    "a": "1969",
    "t": "Ocupación estudiantil del Instituto en enero y muerte de Adorno en agosto."
   }
  ],
  "etapas": [
   {
    "nom": "Los comienzos",
    "a": "1923 – 1930",
    "q": "Felix Weil, Carl Grünberg y Friedrich Pollock",
    "d": "El primer centro de investigación marxista de una universidad alemana, con un marxismo todavía bastante clásico y académico."
   },
   {
    "nom": "Horkheimer y el exilio",
    "a": "1930 – 1950",
    "q": "Horkheimer, Adorno, Marcuse, Fromm, Löwenthal y Pollock; Benjamin como colaborador",
    "d": "Nace la «teoría crítica». Con el nazismo, el Instituto huye a Ginebra y después a Nueva York y California, donde se escribe Dialéctica de la Ilustración."
   },
   {
    "nom": "El regreso",
    "a": "1951 – 1969",
    "q": "Horkheimer (director hasta 1958) y Adorno (hasta 1969)",
    "d": "Solo vuelven Horkheimer, Adorno y Pollock. El Instituto forma a nuevos sociólogos en la Alemania de posguerra y choca al final con el movimiento estudiantil."
   },
   {
    "nom": "La segunda generación y después",
    "a": "desde los años sesenta",
    "q": "Jürgen Habermas y, más tarde, Axel Honneth",
    "d": "Habermas pone en el centro la comunicación y el diálogo racional; Honneth, la lucha por el reconocimiento."
   }
  ]
 },
 {
  "id": "circulo-viena",
  "cas_ilu": [
   "schlick",
   "carnap",
   "wittgenstein",
   "popper"
  ],
  "nombre": "El Círculo de Viena",
  "fechas": "Viena, 1924-1936",
  "cas_epoca": "con",
  "lugar": "Las aulas de la Universidad de Viena, donde Moritz Schlick reunía al grupo la mayoría de los jueves por la tarde durante el curso.",
  "hoy": "La Universidad de Viena conserva su memoria, y el Instituto Círculo de Viena (Institut Wiener Kreis) estudia y difunde su legado.",
  "miembros": "Lo animaba Moritz Schlick, con Rudolf Carnap, Otto Neurath, Hans Hahn, la matemática Olga Hahn-Neurath, Rose Rand, Friedrich Waismann y el joven Kurt Gödel, entre otros. Wittgenstein nunca fue miembro, aunque se reunió con Schlick y Waismann, y Karl Popper discutió con ellos desde fuera.",
  "vida": "Eran filósofos, matemáticos y científicos que discutían juntos sobre lógica, física y lenguaje. En 1929 publicaron un manifiesto, «La concepción científica del mundo», dedicado a Schlick.",
  "ideas": "Solo tienen sentido los enunciados que se pueden comprobar con la experiencia o los de la lógica y las matemáticas; buena parte de la metafísica tradicional sería un sinsentido. Querían una ciencia unificada y una filosofía al servicio de la claridad.",
  "cita": {
   "t": "La concepción científica del mundo no conoce enigmas insolubles.",
   "ref": "Carnap, Hahn y Neurath, La concepción científica del mundo: el Círculo de Viena (1929)"
  },
  "fin": "Hahn murió en 1934 y ese año Neurath huyó a Holanda; Carnap emigró a Estados Unidos en 1935. En 1936 un antiguo alumno, Johann Nelböck, mató a Schlick en la universidad. Tras la anexión nazi de Austria en 1938 casi todos los que quedaban se exiliaron, y sus ideas siguieron vivas en el mundo anglosajón.",
  "trampa": "No eran un bloque: discutían mucho entre ellos, por ejemplo sobre qué cuenta como verificación. Y Wittgenstein y Popper, a quienes a veces se incluye, nunca fueron miembros.",
  "pregunta": "¿Tiene sentido una pregunta que no se puede comprobar de ningún modo? Piensa en un ejemplo y discútelo.",
  "temas": [
   "hf-analitica",
   "fil-t3",
   "fil-t4"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Vienna Circle",
    "url": "https://plato.stanford.edu/entries/vienna-circle/"
   },
   {
    "t": "Wikipedia: Círculo de Viena",
    "url": "https://es.wikipedia.org/wiki/C%C3%ADrculo_de_Viena"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/comunidades/viena_universidad.jpg",
    "pie": "La Universidad de Viena hacia 1890-1900 (fotocromo, Biblioteca del Congreso de EE. UU.)",
    "page": "https://commons.wikimedia.org/wiki/File:The_University,_Vienna,_Austro-Hungary-LCCN2002708401_(cropped).jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1907",
    "t": "Hahn, Frank y Neurath ya se reúnen en Viena para discutir de ciencia y filosofía."
   },
   {
    "a": "1922",
    "t": "Moritz Schlick llega a la cátedra de Filosofía de las Ciencias Inductivas de la Universidad de Viena."
   },
   {
    "a": "1924",
    "t": "Empiezan las reuniones de los jueves en torno a Schlick."
   },
   {
    "a": "1929",
    "t": "Manifiesto «La concepción científica del mundo»."
   },
   {
    "a": "1930",
    "t": "En un congreso en Königsberg, Gödel anuncia su resultado de incompletitud."
   },
   {
    "a": "1934",
    "t": "Muere Hahn; Neurath huye a Holanda tras la guerra civil austriaca."
   },
   {
    "a": "1935",
    "t": "Carnap emigra a Estados Unidos."
   },
   {
    "a": "1936",
    "t": "Un antiguo alumno asesina a Schlick en la universidad."
   },
   {
    "a": "1938",
    "t": "Anexión nazi de Austria: los que quedan se exilian."
   },
   {
    "a": "1940",
    "t": "Gödel llega a Estados Unidos; Neurath escapa de Holanda a Inglaterra."
   }
  ]
 }
];
