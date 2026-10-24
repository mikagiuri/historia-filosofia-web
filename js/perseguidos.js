"use strict";
/* (11-10) «Perseguidos por sus ideas» (Bachillerato) — datos de casosview.js. 
   Cada caso: quién, cuándo y dónde, qué ideas molestaron, qué poder lo persiguió, qué le pasó (cas_castigo: muerte|carcel|exilio|censura),
   el relato, una cita con su referencia, qué vino después, el «caso trampa» (lo que se suele contar mal) y una pregunta para pensar.
   cas_ilu = ids de Biografías (retrato y biografía); cas_epoca: ant|med|ren|mod|ilu|con; temas = claves de THEORY (se enlazan si existen en la web);
   imgs = [{f, pie, page}] de Wikimedia Commons, solo dominio público (créditos en recursos/imagenes_museos/perseguidos/); cronologia = [{a, t}].
   Hechos, fechas y citas comprobados con las fuentes de cada ficha. */
const PERSEGUIDOS = [
 {
  "id": "socrates",
  "cas_ilu": [
   "socrates"
  ],
  "nombre": "Sócrates",
  "fechas": "Atenas, 399 a. C.",
  "cas_epoca": "ant",
  "cas_castigo": "muerte",
  "poder": "Un tribunal popular de la democracia ateniense (unos 500 ciudadanos sorteados como jurado)",
  "ideas": "Preguntaba en la plaza a políticos, poetas y artesanos hasta mostrar que no sabían lo que creían saber. Defendía que una vida sin examen no merece la pena y que hay que obedecer a la propia conciencia antes que a la opinión de la mayoría.",
  "relato": "Meleto, Ánito y Licón lo acusaron de no reconocer a los dioses de la ciudad, de introducir divinidades nuevas y de corromper a los jóvenes. Atenas acababa de salir de una guerra perdida y del gobierno violento de los Treinta Tiranos, entre los que había antiguos discípulos suyos, como Critias. El jurado lo declaró culpable por pocos votos; según la Apología de Platón, con que treinta hubieran cambiado habría quedado absuelto. Como contrapropuesta de pena pidió, con ironía, que la ciudad lo mantuviera como a un benefactor, y la segunda votación fue más dura. Esperó unos treinta días en la cárcel, mientras volvía la nave sagrada de Delos, rechazó el plan de fuga de su amigo Critón y bebió la cicuta.",
  "cita": {
   "t": "Una vida sin examen no merece ser vivida por el ser humano.",
   "ref": "Platón, Apología de Sócrates, 38a"
  },
  "despues": "Sus discípulos convirtieron el juicio en el símbolo del filósofo que muere por no renunciar a pensar. Platón escribió la Apología, el Critón y el Fedón; Jenofonte, su propia Apología.",
  "trampa": "No fue un juicio «contra la filosofía» sin más. Pesaron la religión de la ciudad y la política: una amnistía impedía acusar a nadie por lo ocurrido con los Treinta, pero la sospecha sobre su círculo seguía viva. Además, solo conocemos el juicio por sus discípulos, que lo admiraban.",
  "pregunta": "¿Hizo bien Sócrates en no huir de la cárcel? ¿Se debe obedecer una ley que te condena injustamente?",
  "temas": [
   "hf-sofistas",
   "hf-etica",
   "hf-spinoza-huir",
   "fil-t1",
   "fil-t5"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Socrates",
    "url": "https://plato.stanford.edu/entries/socrates/"
   },
   {
    "t": "Wikipedia: Juicio de Sócrates",
    "url": "https://es.wikipedia.org/wiki/Juicio_de_S%C3%B3crates"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/perseguidos/socrates_david.jpg",
    "pie": "La muerte de Sócrates, de Jacques-Louis David (1787), Museo Metropolitano de Nueva York: Sócrates, a punto de beber la cicuta, sigue hablando con sus discípulos; al pie de la cama, Platón, que en realidad no estuvo presente",
    "page": "https://commons.wikimedia.org/wiki/File:The_Death_of_Socrates_MET_DT40.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "469 a. C.",
    "t": "Nace Sócrates en Atenas, hijo de un escultor y de una partera."
   },
   {
    "a": "431-404 a. C.",
    "t": "Guerra del Peloponeso entre Atenas y Esparta; Sócrates combate como soldado."
   },
   {
    "a": "404-403 a. C.",
    "t": "Tras la derrota, gobiernan los Treinta Tiranos, entre ellos Critias, que había frecuentado a Sócrates."
   },
   {
    "a": "403 a. C.",
    "t": "Vuelve la democracia y se aprueba una amnistía por lo ocurrido con los Treinta."
   },
   {
    "a": "399 a. C.",
    "t": "Juicio, condena y muerte de Sócrates."
   },
   {
    "a": "después",
    "t": "Platón y Jenofonte escriben sobre el juicio y convierten a Sócrates en el modelo del filósofo."
   }
  ]
 },
 {
  "id": "hipatia",
  "cas_ilu": [
   "hipatia"
  ],
  "nombre": "Hipatia de Alejandría",
  "fechas": "Alejandría, marzo de 415",
  "cas_epoca": "ant",
  "cas_castigo": "muerte",
  "poder": "Una turba de cristianos de la ciudad, en plena lucha por el poder entre el obispo Cirilo y el prefecto romano Orestes",
  "ideas": "Enseñaba filosofía platónica y matemáticas a alumnos paganos y cristianos, comentó obras de matemáticos y astrónomos, y era una consejera escuchada por las autoridades de la ciudad, entre ellas el prefecto Orestes.",
  "relato": "Alejandría vivía años de choques violentos entre cristianos, judíos y paganos, y entre el obispo y el prefecto imperial. Se extendió el rumor de que Hipatia era quien impedía que Orestes se reconciliara con Cirilo. Según el historiador cristiano Sócrates Escolástico, un grupo encabezado por un tal Pedro la sacó de su carro, la arrastró a una iglesia, la desnudó y la mató con trozos de cerámica; después quemaron sus restos.",
  "cita": {
   "t": "Había en Alejandría una mujer llamada Hipatia, hija del filósofo Teón, que llegó tan lejos en las letras y en la ciencia que superó con mucho a todos los filósofos de su tiempo.",
   "ref": "Sócrates Escolástico, Historia eclesiástica, VII, 15"
  },
  "despues": "El mismo Sócrates Escolástico, que era cristiano, escribió que aquel crimen fue una deshonra para Cirilo y para la Iglesia de Alejandría. Siglos después Hipatia se convirtió en un símbolo de la libertad de pensamiento y de las mujeres en la ciencia.",
  "trampa": "No la mataron «por ser científica» ni su muerte acabó con la Biblioteca de Alejandría, que para entonces ya no existía como en tiempos de los Ptolomeos. Fue sobre todo violencia política y religiosa en una ciudad dividida. Películas y novelas suelen simplificarlo.",
  "pregunta": "¿Por qué una persona que enseña y aconseja puede llegar a parecer peligrosa para quien quiere el poder?",
  "temas": [
   "hf-helenismo",
   "hf-medieval",
   "fil-helenismo"
  ],
  "fuentes": [
   {
    "t": "Sócrates Escolástico, Historia eclesiástica, libro VII (en inglés)",
    "url": "https://www.newadvent.org/fathers/26017.htm"
   },
   {
    "t": "Wikipedia: Hipatia",
    "url": "https://es.wikipedia.org/wiki/Hipatia"
   }
  ],
  "imgs": [
   {
    "f": "media/retratos/museo/hipatia.jpg",
    "pie": "Hipatia, en el cuadro de Charles William Mitchell (1885): una imagen romántica, no un retrato",
    "page": "https://commons.wikimedia.org/wiki/File:Hypatia_(Charles_William_Mitchell).jpg"
   }
  ],
  "cronologia": [
   {
    "a": "hacia 355-370",
    "t": "Nace Hipatia en Alejandría, hija del matemático y astrónomo Teón; la fecha exacta se discute."
   },
   {
    "a": "391",
    "t": "Una multitud cristiana destruye el Serapeo, el gran templo de Serapis de Alejandría."
   },
   {
    "a": "412",
    "t": "Cirilo se convierte en obispo de Alejandría."
   },
   {
    "a": "414-415",
    "t": "Choques violentos en la ciudad y enfrentamiento abierto entre Cirilo y el prefecto Orestes."
   },
   {
    "a": "marzo de 415",
    "t": "Asesinato de Hipatia."
   }
  ]
 },
 {
  "id": "boecio",
  "cas_ilu": ["boecio"],
  "nombre": "Boecio",
  "fechas": "Verona y Pavía, 523-524",
  "cas_epoca": "med",
  "cas_castigo": "muerte",
  "poder": "El rey ostrogodo Teodorico, que gobernaba Italia, y su consejo real",
  "ideas": "Senador romano y filósofo cristiano, quería traducir al latín y comentar todo Platón y Aristóteles. En política defendía al Senado de Roma y se enfrentó a funcionarios de la corte a los que acusaba de corrupción.",
  "relato": "Boecio llegó a lo más alto: fue cónsul en 510, sus dos hijos fueron cónsules a la vez en 522 y él pasó a dirigir los servicios de palacio de Teodorico. En 523, en una reunión del consejo real en Verona, el funcionario Cipriano acusó al senador Albino de cartearse en secreto con el emperador de Constantinopla. Boecio lo defendió diciendo que, si Albino era culpable, también lo eran él y todo el Senado. Entonces lo acusaron a él del mismo delito, con tres testigos, y además de practicar la magia. Fue condenado y encerrado cerca de Pavía. Allí escribió La consolación de la filosofía, un diálogo en el que la Filosofía, en figura de mujer, visita al preso. Fue ejecutado poco después; Teodorico mandó matar también a su suegro, Símaco.",
  "cita": {
   "t": "¿Quieres saber de qué crimen se me acusa? Se dice que quise que el Senado estuviera a salvo. […] Lo quise, y nunca dejaré de quererlo.",
   "ref": "Boecio, La consolación de la filosofía, libro I, prosa 4"
  },
  "despues": "La consolación de la filosofía fue uno de los libros más leídos de la Edad Media: la tradujeron, entre otros, el rey Alfredo de Inglaterra y Chaucer. Sus traducciones de la lógica de Aristóteles fueron durante siglos casi lo único que Occidente conoció de él. En Pavía se le venera como santo y mártir; la Iglesia confirmó ese culto local en 1883.",
  "trampa": "No lo mataron por una idea filosófica ni, con seguridad, por su fe. Teodorico era cristiano arriano y Boecio católico, y más tarde se le veneró como mártir, pero lo que conocemos es una acusación política de traición en un momento de tensión con Constantinopla. Casi todo lo sabemos por el propio Boecio, que escribe como acusado. Tampoco la fecha es segura: se suele dar 524, pero hay quien la lleva a 525 o 526.",
  "pregunta": "Boecio, en la cárcel, busca consuelo en la razón y no en la venganza. ¿Puede la filosofía ayudar a alguien que lo ha perdido todo?",
  "temas": [
   "hf-medieval",
   "hf-fe-razon",
   "fil-t2"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Anicius Manlius Severinus Boethius",
    "url": "https://plato.stanford.edu/entries/boethius/"
   },
   {
    "t": "Wikipedia: Boecio",
    "url": "https://es.wikipedia.org/wiki/Boecio"
   },
   {
    "t": "Wikipedia: Boethius (en inglés)",
    "url": "https://en.wikipedia.org/wiki/Boethius"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/perseguidos/boecio_1.jpg",
    "pie": "Boecio enseñando a sus alumnos y Boecio en la cárcel, en la letra inicial de un manuscrito italiano de La consolación de la filosofía (1385).",
    "page": "https://commons.wikimedia.org/wiki/File:Consolation_of_philosophy_1385_boethius_images.jpg"
   },
   {
    "f": "media/galeria_museo/perseguidos/boecio_2.jpg",
    "pie": "La Filosofía conversa con Boecio, que está en cama. Miniatura de un manuscrito de La consolación de la filosofía, hacia 1470 (Biblioteca de la Universidad de Utrecht).",
    "page": "https://commons.wikimedia.org/wiki/File:De_consolatione_philosophiae-UBU_Hs._1335-f.086bis_v-Philosophia_in_discussie_met_Boethius_op_zijn_ziektebed.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "c. 480",
    "t": "Nace en Roma, en una familia de senadores."
   },
   {
    "a": "510",
    "t": "Es cónsul, el cargo de más honor del Senado."
   },
   {
    "a": "522",
    "t": "Sus dos hijos son nombrados cónsules a la vez. Él pasa a dirigir los servicios de palacio de Teodorico (magister officiorum)."
   },
   {
    "a": "523",
    "t": "En Verona defiende al senador Albino, acusado de traición, y es acusado él mismo. Lo encierran cerca de Pavía."
   },
   {
    "a": "523-524",
    "t": "En prisión escribe La consolación de la filosofía."
   },
   {
    "a": "524",
    "t": "Es ejecutado (algunos estudiosos proponen 525 o 526). Poco después muere también su suegro Símaco."
   },
   {
    "a": "526",
    "t": "Muere Teodorico."
   },
   {
    "a": "1883",
    "t": "La Iglesia confirma el culto que se le daba en Pavía como santo."
   }
  ]
 },
 {
  "id": "averroes",
  "cas_ilu": [
   "averroes"
  ],
  "nombre": "Averroes (Ibn Rushd)",
  "fechas": "Córdoba y Lucena, 1195-1197",
  "cas_epoca": "med",
  "cas_castigo": "exilio",
  "poder": "El califa almohade Abu Yusuf Yaqub al-Mansur y un tribunal reunido en Córdoba",
  "ideas": "Médico, juez (cadí) y filósofo, comentó casi toda la obra de Aristóteles. Defendía que la filosofía no va contra la religión: si un razonamiento demostrado parece chocar con el sentido literal de un texto sagrado, ese texto debe interpretarse.",
  "relato": "Averroes pasó años al servicio de los califas almohades: fue cadí de Sevilla y de Córdoba y, desde 1182, médico de la corte. En 1195 su suerte cambió. Un tribunal reunido en Córdoba lo juzgó por varios cargos, condenó sus enseñanzas, mandó quemar sus libros y lo desterró a la cercana Lucena. Al cabo de un tiempo el califa lo perdonó y lo llamó a su corte de Marrakech, donde murió en diciembre de 1198.",
  "cita": {
   "t": "La verdad no contradice a la verdad, sino que concuerda con ella y da testimonio a su favor.",
   "ref": "Averroes, Tratado decisivo (Fasl al-maqal), hacia 1180"
  },
  "despues": "Muchas de sus obras se perdieron en árabe, pero llegaron a Europa traducidas al hebreo y al latín. En las universidades cristianas lo llamaron «el Comentador» y sus lectores latinos, los averroístas, provocaron grandes debates en París en el siglo XIII.",
  "trampa": "Los historiadores no se ponen de acuerdo en por qué cayó en desgracia. Los cronistas antiguos hablan de ofensas al califa, como llamarlo «rey de los bereberes» en un libro sobre animales. Muchos estudiosos actuales ven sobre todo razones políticas: al-Mansur, en guerra con los reinos cristianos, necesitaba el apoyo de los juristas más tradicionales, que desconfiaban de Averroes. Además, el castigo duró poco. Por eso es dudoso contarlo como «el islam contra la filosofía»: Averroes defendía la filosofía con argumentos de la propia ley islámica.",
  "pregunta": "¿Puede un gobernante sacrificar a un pensador para ganarse el apoyo de otros grupos? ¿Qué dice eso del poder y de las ideas?",
  "temas": [
   "hf-verdad-no-contradice",
   "hf-aristoteles-arabe",
   "hf-fe-razon",
   "hf-islam-ideas"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Ibn Rushd [Averroes]",
    "url": "https://plato.stanford.edu/entries/ibn-rushd/"
   },
   {
    "t": "Wikipedia: Averroes",
    "url": "https://es.wikipedia.org/wiki/Averroes"
   },
   {
    "t": "Wikipedia: Averroes (en inglés)",
    "url": "https://en.wikipedia.org/wiki/Averroes"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/perseguidos/averroes_1.jpg",
    "pie": "La desgracia de Averroes, grabado del libro de Louis Figuier Vidas de sabios ilustres de la Edad Media (1867). Es una escena imaginada siete siglos después.",
    "page": "https://commons.wikimedia.org/wiki/File:The_Disgrace_of_Averroes_-_Vies_Des_Savants_Illustr%C3%A9s.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1126",
    "t": "Nace en Córdoba, en una familia de juristas."
   },
   {
    "a": "c. 1180",
    "t": "Escribe el Tratado decisivo, sobre la relación entre filosofía y ley religiosa."
   },
   {
    "a": "1182",
    "t": "Es médico de la corte almohade y cadí jefe de Córdoba."
   },
   {
    "a": "1184",
    "t": "Abu Yusuf Yaqub al-Mansur sucede a su padre como califa."
   },
   {
    "a": "1195",
    "t": "Un tribunal en Córdoba condena sus enseñanzas, manda quemar sus libros y lo destierra a Lucena."
   },
   {
    "a": "1197-1198",
    "t": "El califa lo perdona y lo llama a Marrakech."
   },
   {
    "a": "1198",
    "t": "Muere en Marrakech en diciembre."
   }
  ]
 },
 {
  "id": "servet",
  "cas_ilu": [
   "servet"
  ],
  "nombre": "Miguel Servet",
  "fechas": "Vienne (Francia) y Ginebra, 1553",
  "cas_epoca": "ren",
  "cas_castigo": "muerte",
  "poder": "Primero la Inquisición católica en Francia; después el Pequeño Consejo de la ciudad protestante de Ginebra",
  "ideas": "Médico y teólogo aragonés, negaba la Trinidad tal como la definían católicos y protestantes y rechazaba el bautismo de los niños. En su libro Christianismi restitutio (1553) incluyó, de paso, la primera descripción publicada en Europa de la circulación pulmonar: la sangre va del corazón a los pulmones, se mezcla con el aire y vuelve al corazón.",
  "relato": "Servet publicó sus ideas sobre la Trinidad ya en 1531 y desde entonces vivió en Francia con otro nombre, Michel de Villeneuve, trabajando como médico. En 1553 imprimió en secreto la Christianismi restitutio. Un refugiado en Ginebra, amigo de Calvino, lo denunció ante la Inquisición francesa, que lo arrestó en Vienne con la ayuda de cartas que Calvino le había escrito. Escapó de la cárcel a los tres días y fue condenado en ausencia y quemado en efigie. Huyendo hacia Italia se detuvo en Ginebra, donde lo reconocieron en un sermón de Calvino y lo detuvieron. Tras un largo juicio, el consejo de la ciudad lo condenó por negar la Trinidad y el bautismo de los niños. Calvino pidió que lo decapitaran en lugar de quemarlo, pero no le hicieron caso: el 27 de octubre de 1553 fue quemado vivo en Champel junto con su libro.",
  "cita": {
   "t": "Matar a un hombre no es defender una doctrina, es matar a un hombre.",
   "ref": "Sebastián Castellion, Contra libellum Calvini (escrito en 1554, publicado en 1612)"
  },
  "despues": "Su muerte provocó uno de los primeros grandes debates sobre la tolerancia religiosa: Castellion respondió a Calvino defendiendo que no se debe matar a nadie por sus creencias. En 1903 los seguidores de Calvino en Ginebra levantaron un monumento en Champel reconociendo el «error de su siglo».",
  "trampa": "No lo quemaron por descubrir la circulación de la sangre: la condena fue por herejías teológicas, y la circulación pulmonar ocupa unas pocas páginas de un libro de teología. Además, ya la había descrito en el siglo XIII el médico árabe Ibn al-Nafis. Tampoco fue «solo cosa de Calvino»: lo condenaron también los católicos, y en Ginebra la sentencia la dictó el consejo de la ciudad, no Calvino.",
  "pregunta": "Católicos y protestantes estaban enfrentados, pero ambos condenaron a Servet. ¿Por qué grupos enemigos se pueden poner de acuerdo para castigar al que piensa distinto?",
  "temas": [
   "hf-modernidad"
  ],
  "fuentes": [
   {
    "t": "Wikipedia: Miguel Servet",
    "url": "https://es.wikipedia.org/wiki/Miguel_Servet"
   },
   {
    "t": "Wikipedia: Michael Servetus (en inglés)",
    "url": "https://en.wikipedia.org/wiki/Michael_Servetus"
   },
   {
    "t": "Wikipedia: Sebastián Castellion",
    "url": "https://es.wikipedia.org/wiki/Sebasti%C3%A1n_Castellion"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/perseguidos/servet_1.jpg",
    "pie": "Miguel Servet en un grabado de Christian Fritzsch, hacia 1740, casi dos siglos después de su muerte.",
    "page": "https://commons.wikimedia.org/wiki/File:Michael_Servetus.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1509 o 1511",
    "t": "Nace, probablemente en Villanueva de Sijena (Huesca)."
   },
   {
    "a": "1531",
    "t": "Publica De Trinitatis erroribus (Sobre los errores de la Trinidad), que escandaliza a católicos y protestantes."
   },
   {
    "a": "1553",
    "t": "Imprime en secreto Christianismi restitutio, con la descripción de la circulación pulmonar."
   },
   {
    "a": "1553",
    "t": "Abril: la Inquisición lo arresta en Vienne; a los tres días escapa."
   },
   {
    "a": "1553",
    "t": "17 de junio: un tribunal católico lo condena en ausencia y lo quema en efigie."
   },
   {
    "a": "1553",
    "t": "13 de agosto: lo reconocen y detienen en Ginebra."
   },
   {
    "a": "1553",
    "t": "27 de octubre: es quemado vivo en Champel, a las afueras de Ginebra."
   },
   {
    "a": "1554",
    "t": "Castellion escribe contra Calvino y en defensa de la libertad de conciencia."
   },
   {
    "a": "1903",
    "t": "Monumento expiatorio en Champel, levantado por seguidores de Calvino."
   }
  ]
 },
 {
  "id": "bruno",
  "cas_ilu": [
   "giordano_bruno"
  ],
  "nombre": "Giordano Bruno",
  "fechas": "Venecia y Roma, 1592-1600",
  "cas_epoca": "ren",
  "cas_castigo": "muerte",
  "poder": "La Inquisición romana",
  "ideas": "Defendía un universo infinito, con innumerables mundos como el nuestro, y una idea de Dios presente en toda la naturaleza. Negaba además dogmas centrales del catolicismo, como la Trinidad o la transubstanciación, y creía en la transmigración de las almas.",
  "relato": "Fraile dominico que había abandonado la orden, recorrió Europa enseñando en Ginebra, París, Londres y Alemania. En 1592 lo invitó a Venecia el noble Giovanni Mocenigo, que acabó denunciándolo a la Inquisición. Fue entregado a Roma al año siguiente y su proceso duró siete años. Se negó a retractarse de todo lo que le pedían y fue quemado vivo el 17 de febrero de 1600 en el Campo de’ Fiori de Roma.",
  "cita": {
   "t": "Quizá pronunciáis esta sentencia contra mí con más miedo del que yo siento al recibirla.",
   "ref": "Palabras a sus jueces, según la carta de Kaspar Schoppe, testigo del proceso (1600)"
  },
  "despues": "En 1889 se levantó su estatua en el mismo Campo de’ Fiori, como símbolo de la libertad de pensamiento frente a la autoridad religiosa.",
  "trampa": "No fue condenado sobre todo por defender a Copérnico. Los cargos que conocemos son, ante todo, herejías teológicas; su cosmología infinita formaba parte del conjunto, pero convertirlo en «mártir de la ciencia» simplifica el caso.",
  "pregunta": "¿Debe tener límites la libertad de expresar ideas que la mayoría de una sociedad considera falsas o blasfemas?",
  "temas": [
   "hf-renacimiento-magia",
   "hf-modernidad"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Giordano Bruno",
    "url": "https://plato.stanford.edu/entries/bruno/"
   },
   {
    "t": "Wikipedia: Giordano Bruno",
    "url": "https://es.wikipedia.org/wiki/Giordano_Bruno"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/perseguidos/bruno_relieve.jpg",
    "pie": "El proceso de Bruno ante la Inquisición romana, en un relieve del monumento de Ettore Ferrari (1889) en el Campo de’ Fiori de Roma",
    "page": "https://commons.wikimedia.org/wiki/File:Relief_Bruno_Campo_dei_Fiori_n1.jpg"
   },
   {
    "f": "media/galeria_museo/perseguidos/bruno_mentzel.jpg",
    "pie": "Giordano Bruno en un grabado probablemente de comienzos del siglo XVIII; no se conserva ningún retrato hecho en vida",
    "page": "https://commons.wikimedia.org/wiki/File:Giordano_Bruno_-_Mentzel_(cropped).jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1548",
    "t": "Nace en Nola, cerca de Nápoles."
   },
   {
    "a": "1565",
    "t": "Entra en la orden de los dominicos."
   },
   {
    "a": "1576",
    "t": "Abandona la orden, sospechoso de herejía, y empieza a recorrer Europa."
   },
   {
    "a": "1584",
    "t": "En Londres publica Del infinito, el universo y los mundos."
   },
   {
    "a": "1592",
    "t": "Mocenigo lo denuncia en Venecia y la Inquisición lo detiene."
   },
   {
    "a": "1593",
    "t": "Es trasladado a Roma, donde el proceso dura siete años."
   },
   {
    "a": "8 y 17 de febrero de 1600",
    "t": "Sentencia como hereje y muerte en la hoguera en el Campo de’ Fiori."
   },
   {
    "a": "1889",
    "t": "Se inaugura su monumento en el mismo lugar."
   }
  ]
 },
 {
  "id": "galileo",
  "cas_ilu": [
   "galileo"
  ],
  "nombre": "Galileo Galilei",
  "fechas": "Roma y Arcetri (Florencia), 1633-1642",
  "cas_epoca": "mod",
  "cas_castigo": "carcel",
  "poder": "La Inquisición romana (el Santo Oficio), con el papa Urbano VIII",
  "ideas": "Defendía, con el telescopio y con argumentos de física, que la Tierra gira alrededor del Sol, como había propuesto Copérnico. Sostenía además, con una frase que tomó del cardenal Baronio, que la Biblia enseña cómo se va al cielo y no cómo va el cielo (Carta a Cristina de Lorena, 1615), y que en cuestiones de la naturaleza deben mandar la observación y la demostración.",
  "relato": "En 1616 la Iglesia declaró contraria a la Sagrada Escritura la idea de que la Tierra se mueve, y a Galileo se le ordenó no defenderla. Años después, con un papa que había sido su amigo, Urbano VIII, publicó el Diálogo sobre los dos máximos sistemas del mundo (1632). En él un defensor de Copérnico gana claramente la discusión a un aristotélico llamado Simplicio, y el papa se sintió burlado. Galileo fue llamado a Roma y juzgado por la Inquisición; lo interrogaron bajo amenaza de tortura. El 22 de junio de 1633 fue declarado «vehementemente sospechoso de herejía» y obligado a abjurar de rodillas. El Diálogo quedó prohibido y él pasó el resto de su vida bajo arresto domiciliario en su villa de Arcetri, cerca de Florencia.",
  "cita": {
   "t": "Con corazón sincero y fe no fingida, abjuro, maldigo y detesto dichos errores y herejías.",
   "ref": "Abjuración de Galileo, Roma, 22 de junio de 1633"
  },
  "despues": "Ya casi ciego, siguió trabajando y en 1638 publicó en Leiden (Países Bajos) los Discursos sobre dos nuevas ciencias, base de la física moderna. Su Diálogo salió del Índice de libros prohibidos en 1835. En 1992 el papa Juan Pablo II reconoció el error de los teólogos que lo condenaron.",
  "trampa": "La famosa frase «Eppur si muove» («y sin embargo, se mueve») es una leyenda: no aparece en las actas del juicio ni en la primera biografía de Galileo, y se publicó por primera vez en 1757, más de cien años después. Tampoco fue torturado ni encerrado en una mazmorra. Y el choque no fue solo «ciencia contra fe»: pesaron la política del papado, el enfado personal de Urbano VIII y el hecho de que en 1633 aún no existía una prueba definitiva del movimiento de la Tierra.",
  "pregunta": "Galileo abjuró para salvarse. ¿Fue cobardía o una decisión sensata? ¿Hay que estar dispuesto a morir por una verdad científica?",
  "temas": [
   "hf-modernidad",
   "fil-t3"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Galileo Galilei",
    "url": "https://plato.stanford.edu/entries/galileo/"
   },
   {
    "t": "Wikipedia: Proceso a Galileo Galilei",
    "url": "https://es.wikipedia.org/wiki/Proceso_a_Galileo_Galilei"
   },
   {
    "t": "Wikipedia: Eppur si muove",
    "url": "https://es.wikipedia.org/wiki/Eppur_si_muove"
   },
   {
    "t": "Wikipedia: Galileo affair (en inglés)",
    "url": "https://en.wikipedia.org/wiki/Galileo_affair"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/perseguidos/galileo_1.jpg",
    "pie": "Galileo ante el Santo Oficio, cuadro de Joseph-Nicolas Robert-Fleury (1847). Es una reconstrucción romántica, pintada más de dos siglos después del juicio.",
    "page": "https://commons.wikimedia.org/wiki/File:Galileo_before_the_Holy_Office_-_Joseph-Nicolas_Robert-Fleury%2C_1847.png"
   },
   {
    "f": "media/galeria_museo/perseguidos/galileo_2.jpg",
    "pie": "Galileo ante la Inquisición romana, cuadro de Cristiano Banti (1857). También es una escena imaginada en el siglo XIX.",
    "page": "https://commons.wikimedia.org/wiki/File:Galileo_facing_the_Roman_Inquisition.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1610",
    "t": "Publica El mensajero sideral con lo que ha visto con el telescopio: montañas en la Luna y satélites de Júpiter."
   },
   {
    "a": "1616",
    "t": "La Iglesia condena la teoría de Copérnico y se ordena a Galileo no defenderla."
   },
   {
    "a": "1632",
    "t": "Publica el Diálogo sobre los dos máximos sistemas del mundo."
   },
   {
    "a": "1633",
    "t": "Juicio en Roma. El 22 de junio es condenado y abjura en el convento de Santa María sopra Minerva."
   },
   {
    "a": "1634",
    "t": "Vive bajo arresto domiciliario en su villa de Arcetri, cerca de Florencia."
   },
   {
    "a": "1638",
    "t": "Publica en Leiden los Discursos sobre dos nuevas ciencias."
   },
   {
    "a": "1642",
    "t": "Muere en Arcetri el 8 de enero."
   },
   {
    "a": "1757",
    "t": "Aparece impresa por primera vez la frase «Eppur si muove», en un libro de Giuseppe Baretti."
   },
   {
    "a": "1835",
    "t": "El Diálogo deja de figurar en el Índice de libros prohibidos."
   },
   {
    "a": "1992",
    "t": "Juan Pablo II reconoce el error de los teólogos que lo juzgaron."
   }
  ]
 },
 {
  "id": "spinoza",
  "cas_ilu": [
   "spinoza"
  ],
  "nombre": "Baruch Spinoza",
  "fechas": "Ámsterdam y La Haya, 1656-1677",
  "cas_epoca": "mod",
  "cas_castigo": "censura",
  "poder": "Los dirigentes de la comunidad judía portuguesa de Ámsterdam y, después, la Iglesia reformada y las autoridades de Holanda",
  "ideas": "Identificaba a Dios con la naturaleza, negaba que Dios actúe con fines como una persona y que el alma sea inmortal. Leía la Biblia como un libro escrito por seres humanos en una época concreta y defendía la libertad de pensar y de expresarse dentro del Estado.",
  "relato": "Spinoza nació en Ámsterdam en una familia de judíos de origen portugués. El 27 de julio de 1656, con 23 años, los dirigentes de la comunidad Talmud Torah lo expulsaron con un herem, la sentencia más dura que habían dictado nunca. El texto habla de «abominables herejías» y «actos monstruosos», sin decir cuáles. Nadie podía hablarle ni leer lo que escribiera, y la sentencia nunca se levantó. Vivió después de pulir lentes y escribiendo. En 1670 publicó sin su nombre el Tratado teológico-político, con un falso lugar de edición (Hamburgo) y un editor inventado. El libro fue condenado por la Iglesia reformada y prohibido por las autoridades de Holanda en 1674. Por prudencia, dejó sin publicar su Ética.",
  "cita": {
   "t": "Se muestra que en un Estado libre está permitido a cada uno pensar lo que quiera y decir lo que piensa.",
   "ref": "Spinoza, Tratado teológico-político (1670), título del capítulo 20"
  },
  "despues": "Murió en La Haya en 1677. Sus amigos publicaron ese mismo año sus obras póstumas, entre ellas la Ética, con solo sus iniciales en la portada. Durante un siglo «spinozista» fue casi un insulto; después Goethe, Hegel o Einstein lo admiraron.",
  "trampa": "El herem no fue una «excomunión de la Iglesia» ni una pena de cárcel: fue la expulsión de una comunidad religiosa, que usaba esa sanción a menudo, aunque nunca tan dura. No sabemos qué ideas concretas se le reprocharon, aunque probablemente eran las que luego escribió. La historia de que un fanático intentó apuñalarlo es una anécdota tardía y poco segura. Y aunque los Países Bajos eran de lo más tolerante de Europa, su amigo Adriaan Koerbagh murió en prisión en 1669 por publicar ideas parecidas.",
  "pregunta": "Spinoza llevaba un anillo con la palabra «Caute» («con cuidado»). ¿Es cobarde quien no publica lo que piensa para protegerse, o es sensato?",
  "temas": [
   "hf-spinoza-universal",
   "hf-spinoza-sistema",
   "hf-spinoza-huir",
   "fil-spinoza-sistema",
   "hf-racionalismo"
  ],
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy: Baruch Spinoza",
    "url": "https://plato.stanford.edu/entries/spinoza/"
   },
   {
    "t": "Wikipedia: Baruch Spinoza",
    "url": "https://es.wikipedia.org/wiki/Baruch_Spinoza"
   },
   {
    "t": "Wikipedia: Tratado teológico-político",
    "url": "https://es.wikipedia.org/wiki/Tratado_teol%C3%B3gico-pol%C3%ADtico"
   },
   {
    "t": "Wikipedia: Baruch Spinoza (en inglés)",
    "url": "https://en.wikipedia.org/wiki/Baruch_Spinoza"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/perseguidos/spinoza_1.jpg",
    "pie": "Retrato anónimo de Spinoza, hacia 1665 (Biblioteca Herzog August, Wolfenbüttel).",
    "page": "https://commons.wikimedia.org/wiki/File:Baruch_Spinoza_portrait_HAB_original.jpg"
   },
   {
    "f": "media/galeria_museo/perseguidos/spinoza_2.jpg",
    "pie": "Spinoza expulsado, cuadro de Samuel Hirszenberg (1907). Imagina la escena dos siglos y medio después.",
    "page": "https://commons.wikimedia.org/wiki/File:Hirszenberg%2C_Spinoza_wykl%C3%AAty_(Excommunicated_Spinoza)%2C_1907.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1632",
    "t": "Nace en Ámsterdam, en una familia judía de origen portugués."
   },
   {
    "a": "1656",
    "t": "27 de julio: herem de la comunidad Talmud Torah de Ámsterdam."
   },
   {
    "a": "1669",
    "t": "Su amigo Adriaan Koerbagh muere en prisión por sus escritos."
   },
   {
    "a": "1670",
    "t": "Publica sin su nombre el Tratado teológico-político, con falso lugar de edición."
   },
   {
    "a": "1672",
    "t": "Una multitud asesina en La Haya a los hermanos De Witt, gobernantes republicanos."
   },
   {
    "a": "1673",
    "t": "Un sínodo de la Iglesia reformada condena el Tratado."
   },
   {
    "a": "1674",
    "t": "Las autoridades de Holanda prohíben el libro."
   },
   {
    "a": "1677",
    "t": "Muere en La Haya el 21 de febrero; ese año sus amigos publican sus obras póstumas, con la Ética."
   }
  ]
 },
 {
  "id": "condorcet",
  "cas_ilu": ["condorcet"],
  "nombre": "Nicolas de Condorcet",
  "fechas": "París y Bourg-la-Reine, 1793-1794",
  "cas_epoca": "ilu",
  "cas_castigo": "carcel",
  "poder": "La Convención Nacional durante el Terror, dominada por los jacobinos (la Montaña)",
  "ideas": "Matemático y filósofo ilustrado, creía en el progreso de la humanidad gracias a la razón y a la educación. Defendió la abolición de la esclavitud, el derecho de las mujeres a ser ciudadanas, una escuela pública para todos y se opuso a la pena de muerte.",
  "relato": "Condorcet fue diputado en la Revolución francesa y estaba cerca de los girondinos. Votó contra la ejecución de Luis XVI y fue el principal autor de un proyecto de constitución que nunca se votó. Cuando los montañeses tomaron el control de la Convención y aprobaron su propia constitución, Condorcet la criticó en público. El 8 de julio de 1793 la Convención ordenó su arresto. Se escondió durante unos nueve meses en París, en casa de la viuda Vernet, y allí escribió el Esbozo de un cuadro histórico de los progresos del espíritu humano. En marzo de 1794, temiendo comprometer a quien lo escondía, huyó. Lo detuvieron en Clamart y lo encerraron en Bourg-la-Reine, entonces llamado Bourg-l’Égalité, donde dos días después apareció muerto en su celda.",
  "cita": {
   "t": "Llegará, pues, el momento en que el sol solo alumbre en la tierra a hombres libres, que no reconozcan otro amo que su razón.",
   "ref": "Condorcet, Esbozo de un cuadro histórico de los progresos del espíritu humano, décima época (1795)"
  },
  "despues": "El Esbozo se publicó en 1795, después de su muerte, y es uno de los grandes textos sobre la idea de progreso. En 1989, en el bicentenario de la Revolución, sus restos fueron trasladados simbólicamente al Panteón de París.",
  "trampa": "No murió en la guillotina, y no sabemos con seguridad cómo murió: la explicación más aceptada es que tomó un veneno que le había dado su amigo Cabanis, pero otros hablan de agotamiento o incluso de asesinato. Tampoco lo persiguieron por el Esbozo, que escribió ya escondido, sino por su oposición política a los jacobinos. Y es llamativo que el gran defensor del progreso escribiera su libro más optimista mientras lo buscaban para detenerlo.",
  "pregunta": "Condorcet escribió sobre el progreso de la humanidad mientras la Revolución perseguía a sus propios defensores. ¿Se puede seguir creyendo en el progreso en los peores momentos de la historia?",
  "temas": [
   "hf-ilustracion",
   "fil-t6"
  ],
  "fuentes": [
   {
    "t": "Wikipedia: Nicolas de Condorcet",
    "url": "https://es.wikipedia.org/wiki/Nicolas_de_Condorcet"
   },
   {
    "t": "Wikipedia: Marquis de Condorcet (en inglés)",
    "url": "https://en.wikipedia.org/wiki/Marquis_de_Condorcet"
   },
   {
    "t": "Wikipédia: Nicolas de Condorcet (en francés)",
    "url": "https://fr.wikipedia.org/wiki/Nicolas_de_Condorcet"
   }
  ],
  "imgs": [
   {
    "f": "media/galeria_museo/perseguidos/condorcet_1.jpg",
    "pie": "Retrato anónimo de Condorcet, finales del siglo XVIII (Museo Carnavalet, París).",
    "page": "https://commons.wikimedia.org/wiki/File:Anonymous_-_Portrait_de_Marie_Jean_Antoine_Nicolas_de_Caritat%2C_marquis_de_Condorcet_(1743-1794)%2C_philosophe%2C_math%C3%A9maticien_et_homme_politique._-_P1668_-_Mus%C3%A9e_Carnavalet.jpg"
   }
  ],
  "cronologia": [
   {
    "a": "1743",
    "t": "Nace en Ribemont (Picardía)."
   },
   {
    "a": "1781",
    "t": "Publica sin su nombre las Reflexiones sobre la esclavitud de los negros, contra la esclavitud."
   },
   {
    "a": "1790",
    "t": "Escribe Sobre la admisión de las mujeres al derecho de ciudadanía."
   },
   {
    "a": "1793",
    "t": "Enero: en el juicio a Luis XVI se opone a la pena de muerte. Febrero: presenta el proyecto de constitución girondino."
   },
   {
    "a": "1793",
    "t": "8 de julio: la Convención ordena su arresto y se esconde en París, donde escribe el Esbozo."
   },
   {
    "a": "1794",
    "t": "25 de marzo: abandona el escondite; dos días después lo detienen en Clamart."
   },
   {
    "a": "1794",
    "t": "28 o 29 de marzo: aparece muerto en su celda de Bourg-la-Reine."
   },
   {
    "a": "1795",
    "t": "Se publica el Esbozo."
   },
   {
    "a": "1989",
    "t": "Traslado simbólico al Panteón de París."
   }
  ]
 }
];
