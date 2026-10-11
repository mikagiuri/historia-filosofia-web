/* (11-10) «Polémicas: cara a cara» — pensadores COETÁNEOS que se enfrentaron de verdad (cara a cara, por cartas,
   con libros que se responden en vida de ambos o desde escuelas rivales). Datos de polemicasview.js. Hechos, fechas y citas
   comprobados con las fuentes de cada ficha; ilu_a/ilu_b = ids de Ilustres; pol_via: cara|cartas|libros|escuelas;
   pol_epoca: ant|med|ren|mod|ilu|con; temas = claves de THEORY; duelo (12-10, sesión 40) = id del tema del Duelo de razones (#hf/<duelo>). */
const POLEMICAS = [
 {
  "id": "socrates-sofistas",
  "ilu_a": [
   "socrates",
   "platon"
  ],
  "ilu_b": [
   "protagoras",
   "gorgias",
   "trasimaco"
  ],
  "a": "Sócrates y Platón",
  "b": "Los sofistas (Protágoras, Gorgias, Trasímaco)",
  "fechas": "hacia 430-399 a. C. (y los diálogos de Platón, escritos después)",
  "lugar": "Atenas: casas privadas, el gimnasio y la plaza",
  "pol_via": "cara",
  "pol_epoca": "ant",
  "temas": [
   "hf-sofistas",
   "hf-etica",
   "hf-politica",
   "fil-t5",
   "fil-t6"
  ],
  "pregunta": "¿Se puede enseñar la virtud cobrando? ¿Hay una justicia verdadera o solo lo que conviene a cada uno?",
  "contexto": "En la Atenas democrática quien hablaba bien en la asamblea y en los tribunales tenía poder. Los sofistas, maestros viajeros como Protágoras (hacia 490-420 a. C.) o Gorgias (que llegó a Atenas como embajador en 427 a. C.), enseñaban oratoria y «virtud» política a cambio de dinero. Sócrates discutía con ellos sin cobrar; casi todo lo que sabemos de esos encuentros viene de los diálogos de Platón, que eran enemigos declarados de los sofistas y escribieron después.",
  "tesis_a": "Existe una verdad sobre lo justo y lo bueno que se puede buscar con el diálogo. La retórica que solo persuade, sin saber, es halago y no conocimiento.",
  "tesis_b": "Protágoras sostenía que cada ser humano es la medida de las cosas: no hay una verdad única por encima de las opiniones. Trasímaco, en el libro I de la República, dice que la justicia es lo que conviene al más fuerte, porque cada gobierno hace las leyes a su favor.",
  "cita_a": {
   "t": "Si fuera necesario cometer injusticia o sufrirla, preferiría sufrirla antes que cometerla.",
   "ref": "Platón, Gorgias, 469c (habla Sócrates)"
  },
  "cita_b": {
   "t": "El ser humano es la medida de todas las cosas: de las que son, en cuanto que son; de las que no son, en cuanto que no son.",
   "ref": "Protágoras, fragmento 80 B1 Diels-Kranz (citado en Platón, Teeteto, 152a)"
  },
  "fuerte_a": "Si todo depende de la opinión de cada uno, tampoco puede ser verdad que «todo es opinión»; y nadie podría decir que una ley es injusta.",
  "fuerte_b": "Lo que cada pueblo llama justo cambia de una ciudad a otra y suele coincidir con lo que favorece a quien manda; mirarlo así no es cinismo, sino observar cómo funcionan de verdad las leyes.",
  "desenlace": "Sócrates fue condenado a muerte en 399 a. C. por impiedad y por «corromper a los jóvenes». Platón ganó el relato: durante siglos «sofista» quiso decir tramposo, aunque hoy se reconoce a los sofistas como pensadores serios de la ley, el lenguaje y la educación.",
  "trucos": "Platón escribe los dos papeles: pone en boca de los sofistas las respuestas y hace que se contradigan o se enfaden (Trasímaco entra en escena «como una fiera»), así que conviene preguntarse qué habrían respondido ellos mismos.",
  "fuentes": [
   {
    "t": "Internet Encyclopedia of Philosophy, «The Sophists (Ancient Greek)»",
    "url": "https://iep.utm.edu/sophists/"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «Callicles and Thrasymachus»",
    "url": "https://plato.stanford.edu/entries/callicles-thrasymachus/"
   }
  ]
 },
 {
  "id": "diogenes-platon",
  "ilu_a": [
   "diogenes"
  ],
  "ilu_b": [
   "platon"
  ],
  "a": "Diógenes de Sinope",
  "b": "Platón",
  "fechas": "s. IV a. C. (antes de 347 a. C., muerte de Platón)",
  "lugar": "Atenas: la calle y la Academia",
  "pol_via": "cara",
  "pol_epoca": "ant",
  "temas": [
   "hf-helenismo",
   "fil-helenismo",
   "hf-platon"
  ],
  "pregunta": "¿La filosofía es una teoría que se aprende en una escuela o una forma de vivir?",
  "contexto": "Diógenes (hacia 404-323 a. C.), seguidor de Antístenes, vivía en Atenas en la pobreza voluntaria, sin casa y desafiando las costumbres. Platón dirigía la Academia, una escuela para jóvenes de familias acomodadas donde se buscaban definiciones exactas e Ideas eternas. Casi todo lo que sabemos de sus choques son anécdotas que recoge Diógenes Laercio unos cinco siglos después.",
  "tesis_a": "La filosofía se demuestra con la vida: vivir según la naturaleza, con lo mínimo, libre de convenciones. Las definiciones abstractas y las Ideas no ayudan a vivir mejor.",
  "tesis_b": "Para vivir bien hay que saber qué son el bien y la justicia, y eso exige definiciones rigurosas, estudio y una comunidad que enseñe a pensar.",
  "cita_a": {
   "t": "Aquí tenéis al hombre de Platón.",
   "ref": "Diógenes Laercio, Vidas de los filósofos ilustres, VI, 40 (anécdota)"
  },
  "cita_b": {
   "t": "Un Sócrates enloquecido.",
   "ref": "Diógenes Laercio, Vidas de los filósofos ilustres, VI, 54 (Platón, preguntado por Diógenes; anécdota)"
  },
  "fuerte_a": "Una filosofía que no cambia la forma de vivir de quien la enseña es solo un adorno; la prueba de una idea es si puedes vivir según ella.",
  "fuerte_b": "Sin definiciones y sin razonamiento no hay manera de distinguir una vida sabia de una simple excentricidad; también la provocación necesita razones.",
  "desenlace": "No hubo vencedor: la Academia duró siglos y el cinismo de Diógenes inspiró a los estoicos, que unieron la vida austera con la teoría.",
  "trucos": "Según cuenta Diógenes Laercio (VI, 40), cuando Platón definió al ser humano como «bípedo implume», Diógenes desplumó un gallo y lo llevó a la Academia; la anécdota es probablemente embellecida, pero muestra su método: refutar con un gesto, ridiculizando, más que con un argumento.",
  "fuentes": [
   {
    "t": "Internet Encyclopedia of Philosophy, «Diogenes of Sinope»",
    "url": "https://iep.utm.edu/diogenes-of-sinope/"
   }
  ]
 },
 {
  "id": "epicureos-estoicos",
  "ilu_a": [
   "epicuro"
  ],
  "ilu_b": [
   "zenon"
  ],
  "a": "Los epicúreos (Epicuro)",
  "b": "Los estoicos (Zenón de Citio)",
  "fechas": "hacia 306-260 a. C. (y siglos después entre sus seguidores)",
  "lugar": "Atenas: el Jardín y la Estoa Pintada",
  "pol_via": "escuelas",
  "pol_epoca": "ant",
  "temas": [
   "hf-helenismo",
   "fil-helenismo",
   "fil-t5"
  ],
  "pregunta": "¿La felicidad está en el placer sereno o en la virtud?",
  "contexto": "Tras las conquistas de Alejandro, las ciudades griegas perdieron su independencia y la filosofía se centró en cómo vivir feliz en un mundo inseguro. Epicuro (341-270 a. C.) compró una casa con huerto en Atenas hacia 306 a. C. y abrió allí el Jardín; Zenón de Citio empezó a enseñar hacia el 300 a. C. en la Estoa Pintada, un pórtico público. Fueron escuelas rivales que convivieron en la misma ciudad durante siglos.",
  "tesis_a": "El fin de la vida es el placer, entendido como ausencia de dolor en el cuerpo y de inquietud en el alma. Todo está hecho de átomos y vacío, los dioses no se ocupan de nosotros y la muerte no es nada que temer.",
  "tesis_b": "Solo la virtud es un bien; el placer, la riqueza o la salud son «indiferentes». El cosmos está ordenado por una razón divina (providencia) y ser feliz es vivir de acuerdo con esa razón.",
  "cita_a": {
   "t": "La muerte no es nada para nosotros: lo que se ha disuelto no siente, y lo que no siente no es nada para nosotros.",
   "ref": "Epicuro, Máximas capitales, II (en Diógenes Laercio, X, 139)"
  },
  "cita_b": {
   "t": "Zenón fue el primero en decir que el fin es vivir de acuerdo con la naturaleza, que es vivir según la virtud.",
   "ref": "Diógenes Laercio, Vidas de los filósofos ilustres, VII, 87"
  },
  "fuerte_a": "Todo ser vivo busca el placer y huye del dolor desde que nace; una ética que lo ignore va contra la naturaleza, y el placer bien calculado lleva a una vida sobria y tranquila.",
  "fuerte_b": "Si el placer fuera el bien, una persona virtuosa que sufre sería menos feliz que un malvado satisfecho; la virtud es lo único que nadie puede quitarnos.",
  "desenlace": "Ninguna escuela venció: ambas duraron hasta el Imperio romano (Lucrecio por un lado, Séneca y Marco Aurelio por otro). El cristianismo aceptó mejor a los estoicos que a los epicúreos.",
  "trucos": "Los ataques personales fueron más tarde: según Diógenes Laercio (X, 3), el estoico Diotimo atribuyó a Epicuro cincuenta cartas escandalosas falsas, y Epicteto lo llamó predicador de la molicie; de ahí viene el sentido vulgar de «epicúreo» como glotón.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Epicurus»",
    "url": "https://plato.stanford.edu/entries/epicurus/"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «Stoicism»",
    "url": "https://plato.stanford.edu/entries/stoicism/"
   },
   {
    "t": "Diógenes Laercio, Lives of the Eminent Philosophers, libro X (Wikisource, trad. Hicks)",
    "url": "https://en.wikisource.org/wiki/Lives_of_the_Eminent_Philosophers/Book_X"
   }
  ]
 },
 {
  "id": "agustin-maniqueos",
  "ilu_a": [
   "agustin"
  ],
  "ilu_b": [],
  "a": "Agustín",
  "b": "Los maniqueos Fortunato y Félix",
  "fechas": "392-404",
  "lugar": "cara a cara en Hipona: en las termas de Sosio (agosto de 392) y, con Félix, en una iglesia de la ciudad (diciembre de 404)",
  "pol_via": "cara",
  "pol_epoca": "med",
  "temas": [
   "hf-fe-razon",
   "fil-metafisica"
  ],
  "pregunta": "¿El mal es una fuerza tan real como el bien, o nace de que nosotros elegimos mal?",
  "contexto": "El maniqueísmo, la religión fundada por Mani en el siglo III, enseñaba que hay dos principios eternos en lucha, la luz y las tinieblas. Agustín había sido «oyente» maniqueo en su juventud; en 392, recién ordenado sacerdote, los vecinos de Hipona le pidieron que debatiera con Fortunato, un sacerdote maniqueo con muchos seguidores en la ciudad que lo había conocido en Cartago. Debatieron dos días ante el público, con taquígrafos; Fortunato empezó pidiendo a Agustín que, como antiguo maniqueo, desmintiera los rumores de inmoralidad contra su grupo, y Agustín reconoció que en sus oraciones no había visto nada vergonzoso.",
  "tesis_a": "Hay un solo Dios, bueno e incorruptible, y todo lo que hizo es bueno. El mal no es una sustancia: es el pecado, que nace de la libre voluntad del alma.",
  "tesis_b": "Hay dos sustancias desde siempre: la luz, donde está Dios, y una naturaleza contraria, las tinieblas. El alma es una parte de la luz atrapada en este mundo, y Cristo vino a liberarla.",
  "cita_a": {
   "t": "Dios hizo todas las cosas buenas y las ordenó bien; pero el pecado no lo hizo, y eso es lo único que se llama mal: nuestro pecado voluntario.",
   "ref": "Agustín, Debate contra Fortunato (28 de agosto de 392), 15"
  },
  "cita_b": {
   "t": "Sostengo que hubo dos sustancias. En la sustancia de la luz está Dios, incorruptible; y hubo una naturaleza contraria, la de las tinieblas.",
   "ref": "Fortunato, en Agustín, Debate contra Fortunato (392), 18"
  },
  "fuerte_a": "Si a Dios nada puede dañarle, ¿por qué iba a mandar una parte de sí mismo a sufrir en este mundo? Y si el mal no es culpa nuestra, no tiene sentido ni castigar ni premiar.",
  "fuerte_b": "Todos sentimos dentro una lucha entre dos fuerzas que tiran en sentidos contrarios. Si todo viene de un Dios bueno y todopoderoso, ¿de dónde sale tanto mal que nadie quiere?",
  "desenlace": "Fortunato no supo contestar la última pregunta y dijo que la consultaría con sus superiores; según Posidio, el biógrafo de Agustín, se marchó de Hipona y no volvió. En 404 el maniqueo Félix, tras dos sesiones (7 y 12 de diciembre), firmó ante el pueblo una condena de Mani. Hacia 400 Agustín escribió además Contra Fausto, réplica al libro de Fausto de Milevi, el obispo maniqueo al que había conocido en Cartago.",
  "fuentes": [
   {
    "t": "New Advent, «Acts or Disputation Against Fortunatus the Manichaean» (Agustín, trad. inglesa)",
    "url": "https://www.newadvent.org/fathers/1404.htm"
   },
   {
    "t": "Augustinus Hipponensis, «Acta seu disputatio contra Fortunatum Manichaeum» (texto latino, augustinus.it)",
    "url": "https://www.augustinus.it/latino/contro_fortunato/index.htm"
   },
   {
    "t": "New Advent, «Contra Faustum» (Agustín, trad. inglesa)",
    "url": "https://www.newadvent.org/fathers/1406.htm"
   }
  ]
 },
 {
  "id": "agustin-jeronimo",
  "ilu_a": [
   "agustin"
  ],
  "ilu_b": [],
  "a": "Agustín",
  "b": "Jerónimo",
  "fechas": "394-405",
  "lugar": "por carta, entre Hipona y Belén",
  "pol_via": "cartas",
  "pol_epoca": "med",
  "temas": [
   "hf-fe-razon",
   "fil-t5"
  ],
  "pregunta": "¿Se puede mentir por una buena causa? ¿Puede haber una mentira útil en un texto sagrado?",
  "contexto": "Jerónimo, el mayor experto en la Biblia de su tiempo, vivía en Belén y traducía el Antiguo Testamento directamente del hebreo. Hacia 394-395 Agustín, más joven y todavía sacerdote, le escribió para discutirle dos cosas: esa traducción, que se apartaba de la griega de los Setenta que usaban las iglesias, y su comentario a la carta a los Gálatas. Allí Jerónimo explicaba que la discusión entre Pedro y Pablo en Antioquía (Gálatas 2) había sido fingida, de común acuerdo.",
  "tesis_a": "Si se admite que los autores de la Biblia dijeron una sola mentira «útil», ya no hay forma de fiarse de ningún pasaje: cada uno decidirá qué es verdad según le convenga. Pablo reprendió a Pedro de verdad, porque Pedro había obrado mal.",
  "tesis_b": "Pedro y Pablo, por miedo a los judíos, hicieron los dos como si cumplieran la Ley; la reprensión fue una acomodación prudente, no una mentira. Así lo leían Orígenes y otros comentaristas, para responder al pagano Porfirio, que se burlaba de la pelea entre apóstoles. Y traducir del hebreo es volver al original.",
  "cita_a": {
   "t": "Admitida una sola vez alguna mentira útil en una autoridad tan alta, no quedará parte de esos libros que no pueda explicarse con esa misma regla perniciosísima.",
   "ref": "Agustín, carta 28 a Jerónimo (394-395), 3, 3"
  },
  "cita_b": {
   "t": "Yo, o mejor, otros antes que yo, no defendimos una mentira útil, como tú escribes, sino que enseñamos una acomodación honesta.",
   "ref": "Jerónimo, carta a Agustín (403-404): Agustín, carta 75 = Jerónimo, carta 112, 3, 11"
  },
  "fuerte_a": "La autoridad de un texto depende de que no mienta nunca. Si se acepta una mentira «piadosa» en un punto, cualquiera puede declarar «piadosa» la frase que le moleste.",
  "fuerte_b": "Hay que leer los textos con los mejores intérpretes y en su lengua original. A veces hay que adaptarse para no escandalizar a la gente, y eso no es mentir sino ser prudente.",
  "desenlace": "Agustín no cambió de opinión sobre Gálatas (carta 82, hacia 405), pero pidió perdón por el tono y la amistad se rehízo. Años después fueron aliados contra Pelagio, y Jerónimo escribió a Agustín que los católicos lo veneraban como el que «vuelve a fundar la fe antigua» (carta 195, hacia 418).",
  "trucos": "Una carta de Agustín de 397 pasó de mano en mano antes de llegar a Belén, y Jerónimo la tomó por un ataque público; le contestó que un joven no debía provocar a un viejo en el campo de las Escrituras, porque «el buey cansado pisa más fuerte» (carta 68, 402).",
  "fuentes": [
   {
    "t": "New Advent, «Letter 28 (Augustine) or 56 (Jerome)»",
    "url": "https://www.newadvent.org/fathers/1102028.htm"
   },
   {
    "t": "New Advent, «Letter 75 (Augustine) or 112 (Jerome)»",
    "url": "https://www.newadvent.org/fathers/1102075.htm"
   },
   {
    "t": "New Advent, «Letter 68 (Augustine) or 102 (Jerome)»",
    "url": "https://www.newadvent.org/fathers/1102068.htm"
   }
  ]
 },
 {
  "id": "agustin-petiliano",
  "ilu_a": [
   "agustin"
  ],
  "ilu_b": [],
  "a": "Agustín",
  "b": "Petiliano y los donatistas",
  "fechas": "400-411",
  "lugar": "por escrito desde hacia 400, y cara a cara en la conferencia de Cartago (junio de 411)",
  "pol_via": "cara",
  "pol_epoca": "med",
  "temas": [
   "hf-fe-razon",
   "fil-t6"
  ],
  "pregunta": "¿Vale un sacramento si lo da un mal sacerdote? ¿Y puede el Estado obligar a alguien a volver a una Iglesia?",
  "contexto": "Desde comienzos del siglo IV la Iglesia del norte de África estaba partida en dos. Los donatistas sostenían que los obispos que habían colaborado con los perseguidores habían perdido la gracia, y que los sacramentos que daban no valían; por eso volvían a bautizar a quien se pasaba a ellos. Hacia 400 Petiliano, obispo donatista de Cirta (Constantina), escribió una carta a los suyos; Agustín la refutó, Petiliano contestó atacándole a él y Agustín volvió a responder.",
  "tesis_a": "Quien bautiza de verdad es Cristo; el sacerdote es solo un instrumento. Por eso el sacramento vale aunque el ministro sea indigno, y nadie debe repetirlo.",
  "tesis_b": "Lo que cuenta es la conciencia del que da el sacramento: un ministro manchado no puede limpiar a nadie. La verdadera Iglesia es la de los puros, la que no pactó con los perseguidores.",
  "cita_a": {
   "t": "Reciba uno el sacramento del bautismo de un ministro fiel o de uno infiel, que toda su esperanza esté en Cristo.",
   "ref": "Agustín, Contra las cartas de Petiliano (hacia 400), I, 6, 7"
  },
  "cita_b": {
   "t": "Se mira la conciencia del que da [el bautismo], que es la que lava la del que lo recibe.",
   "ref": "Petiliano, carta citada por Agustín en Contra las cartas de Petiliano, I, 1, 2"
  },
  "fuerte_a": "Si el bautismo dependiera de la conciencia del sacerdote, nadie podría estar seguro de estar bautizado, porque la conciencia ajena no se ve. La esperanza se pondría en un hombre y no en Dios.",
  "fuerte_b": "Una Iglesia que acoge como pastores a quienes traicionaron la fe para salvarse pierde su santidad. La pureza de los ministros es la garantía de que sigue siendo la Iglesia de los mártires.",
  "desenlace": "En la conferencia de Cartago (1, 3 y 8 de junio de 411), con 286 obispos católicos y unos 280 donatistas, el delegado imperial Marcelino falló a favor de los católicos, y una ley de Honorio de 412 castigó a los donatistas. Agustín, que al principio no quería obligar a nadie, acabó aceptando la presión de las leyes imperiales (carta 93, de 408), una postura que se ha discutido mucho después.",
  "trucos": "Petiliano acusó a Agustín de haber sido sacerdote maniqueo y de ser un «dialéctico», un artista del engaño; Agustín negó lo primero y defendió la dialéctica (Contra las cartas de Petiliano, III, 16-17).",
  "fuentes": [
   {
    "t": "Catholic Encyclopedia (New Advent), «Donatists»",
    "url": "https://www.newadvent.org/cathen/05121a.htm"
   },
   {
    "t": "New Advent, «Answer to Petilian the Donatist» (Agustín, trad. inglesa)",
    "url": "https://www.newadvent.org/fathers/1409.htm"
   },
   {
    "t": "New Advent, «Letter 93» (Agustín a Vicente, 408)",
    "url": "https://www.newadvent.org/fathers/1102093.htm"
   }
  ]
 },
 {
  "id": "agustin-volusiano",
  "ilu_a": [
   "agustin"
  ],
  "ilu_b": [],
  "a": "Agustín",
  "b": "Los paganos Nectario y Volusiano",
  "fechas": "408-412",
  "lugar": "por carta, entre Hipona, Calama y Cartago",
  "pol_via": "cartas",
  "pol_epoca": "med",
  "temas": [
   "hf-fe-razon",
   "fil-t6"
  ],
  "pregunta": "¿El cristianismo hace peores ciudadanos? ¿Se puede «poner la otra mejilla» y defender a la vez la patria?",
  "contexto": "Muchos romanos cultos seguían siendo paganos. En 408, en Calama, una fiesta pagana prohibida por las leyes acabó en el asalto a una iglesia y la muerte de un cristiano; Nectario, un notable pagano de la ciudad, pidió clemencia a Agustín en nombre del amor a la patria, citando a Cicerón. Tras el saqueo de Roma por Alarico (410), en Cartago el pagano Volusiano y su círculo preguntaban si la doctrina cristiana no arruinaba el Estado, y el tribuno Marcelino pidió a Agustín que respondiera.",
  "tesis_a": "La doctrina cristiana no prohíbe ser soldado ni servir a la patria: si todos vivieran según ella, el Estado estaría más sano. Pero la patria verdadera es la ciudad del cielo, y la de la tierra no merece un amor sin límites.",
  "tesis_b": "El amor a la patria es el primer deber, como enseñó Cicerón. Perdonar al enemigo y poner la otra mejilla es incompatible con un Estado que tiene que defenderse; y, aunque Volusiano no lo dijera en voz alta, con emperadores cristianos al Estado le había ido mal.",
  "cita_a": {
   "t": "Los que dicen que la doctrina de Cristo es contraria al Estado, que den un ejército tal como esa doctrina manda que sean los soldados.",
   "ref": "Agustín, carta 138 a Marcelino (411-412), 2, 15"
  },
  "cita_b": {
   "t": "Su predicación y su doctrina no convienen en nada a las costumbres del Estado.",
   "ref": "Volusiano, según la carta 136 de Marcelino a Agustín (411-412), 2"
  },
  "fuerte_a": "El Evangelio no manda a los soldados dejar las armas, sino no abusar de ellas. Y los males de Roma no empezaron con los cristianos: sus propios autores ya lamentaban la corrupción de las costumbres.",
  "fuerte_b": "Una moral que manda no devolver mal por mal deja la ciudad indefensa ante quien la saquea, como acababa de pasar en Roma. Una religión también se juzga por lo que hace con la vida pública.",
  "desenlace": "Las cartas no bastaron, y Marcelino pidió a Agustín una obra completa contra esas acusaciones. Así nació La ciudad de Dios (413-426), dedicada a Marcelino, donde Agustín contrapone la ciudad terrena y la ciudad de Dios.",
  "fuentes": [
   {
    "t": "New Advent, «Letter 91» (Agustín a Nectario)",
    "url": "https://www.newadvent.org/fathers/1102091.htm"
   },
   {
    "t": "New Advent, «Letter 136» (Marcelino a Agustín)",
    "url": "https://www.newadvent.org/fathers/1102136.htm"
   },
   {
    "t": "New Advent, «Letter 138» (Agustín a Marcelino)",
    "url": "https://www.newadvent.org/fathers/1102138.htm"
   }
  ]
 },
 {
  "id": "agustin-pelagio",
  "ilu_a": [
   "agustin"
  ],
  "ilu_b": [],
  "a": "Agustín",
  "b": "Pelagio y Celestio",
  "fechas": "411-418",
  "lugar": "por escrito y en concilios, entre Cartago, Hipona, Palestina y Roma (se vieron en persona en Cartago en 411)",
  "pol_via": "libros",
  "pol_epoca": "med",
  "temas": [
   "hf-fe-razon",
   "fil-t2",
   "fil-t5"
  ],
  "pregunta": "¿Puede el ser humano hacer el bien con sus propias fuerzas, o necesita la gracia de Dios?",
  "contexto": "Pelagio, un monje llegado de Britania, predicaba en Roma una vida cristiana muy exigente. Según cuenta Agustín, cuando un obispo citó delante de él una frase de las Confesiones («Da lo que mandas y manda lo que quieras»), Pelagio no lo soportó y casi riñó con él. Tras el saqueo de Roma por Alarico (410), Pelagio y su discípulo Celestio pasaron a África: Agustín vio a Pelagio en Cartago «una o dos veces», y ese mismo año 411 un concilio de Cartago condenó varias tesis de Celestio.",
  "tesis_a": "Desde el pecado de Adán toda la humanidad nace herida. La voluntad sigue siendo libre, pero sin la gracia de Dios, que actúa por dentro, no llega a querer ni a hacer el bien.",
  "tesis_b": "Dios nos hizo capaces de no pecar. El pecado de Adán le dañó solo a él, no a todo el género humano; si Dios manda algo, es que podemos cumplirlo. La gracia es sobre todo esa capacidad natural, junto con la ley y el ejemplo de Cristo.",
  "cita_a": {
   "t": "Da lo que mandas y manda lo que quieras.",
   "ref": "Agustín, Confesiones (hacia 397-400), X, 29, 40"
  },
  "cita_b": {
   "t": "Ponemos el poder en la naturaleza, el querer en el albedrío y el ser en la obra.",
   "ref": "Pelagio, citado por Agustín en Sobre la gracia de Cristo (418), I, 4, 5"
  },
  "fuerte_a": "Sabemos muchas veces qué es lo bueno y aun así no lo hacemos: la voluntad está dividida y necesita ser sanada. Si pudiéramos ser buenos con nuestras solas fuerzas, Cristo habría venido solo a dar ejemplo.",
  "fuerte_b": "Si no podemos evitar el pecado, no somos responsables de él y no tiene sentido exigirnos nada. Decir que sin la gracia no hacemos el bien da una excusa perfecta al que no quiere esforzarse.",
  "desenlace": "El sínodo de Dióspolis, en Palestina, absolvió a Pelagio en diciembre de 415. Pero los concilios africanos de 416 y 418, el papa Inocencio I (417), una ley del emperador Honorio (abril de 418) y al final el papa Zósimo condenaron sus tesis. No se sabe cuándo ni dónde murió Pelagio.",
  "trucos": "Agustín sostuvo que en Dióspolis Pelagio había condenado de palabra unas tesis que en sus escritos seguía defendiendo (Sobre la gracia de Cristo, I, 3).",
  "fuentes": [
   {
    "t": "Catholic Encyclopedia (New Advent), «Pelagius and Pelagianism»",
    "url": "https://www.newadvent.org/cathen/11604a.htm"
   },
   {
    "t": "New Advent, «On the Grace of Christ, and on Original Sin» (Agustín, trad. inglesa)",
    "url": "https://www.newadvent.org/fathers/1506.htm"
   },
   {
    "t": "New Advent, «On the Proceedings of Pelagius» (Agustín, trad. inglesa)",
    "url": "https://www.newadvent.org/fathers/1505.htm"
   }
  ]
 },
 {
  "id": "agustin-julian",
  "ilu_a": [
   "agustin"
  ],
  "ilu_b": [],
  "a": "Agustín",
  "b": "Julián de Eclana",
  "fechas": "419-430",
  "lugar": "por escrito, entre Hipona y el destierro de Julián",
  "pol_via": "libros",
  "pol_epoca": "med",
  "temas": [
   "hf-fe-razon",
   "fil-t2",
   "fil-t5"
  ],
  "pregunta": "¿Puede un recién nacido cargar con un pecado que no ha cometido? ¿Es malo el deseo sexual?",
  "contexto": "Julián, joven obispo de Eclana, en el sur de Italia, se negó en 418 a firmar la condena de Pelagio que el papa Zósimo envió a todos los obispos; fue depuesto y desterrado. Desde el destierro escribió cuatro libros contra la obra de Agustín Sobre el matrimonio y la concupiscencia; Agustín le replicó, Julián contestó con ocho libros más, y Agustín le respondía casi frase por frase. Julián acusaba a Agustín de seguir siendo, en el fondo, maniqueo.",
  "tesis_a": "Todos nacemos con el pecado original heredado de Adán, y por eso se bautiza también a los niños. La concupiscencia, el deseo desordenado que no obedece a la razón, es fruto de ese pecado, aunque el matrimonio sea bueno.",
  "tesis_b": "No hay pecado sin voluntad, y un recién nacido no tiene voluntad propia. Un Dios justo no puede culpar a nadie del pecado de otro. El deseo sexual es una fuerza natural creada por Dios, buena si se usa con medida.",
  "cita_a": {
   "t": "Dirías una verdad más completa si añadieras: «o de contagio».",
   "ref": "Agustín, Obra inacabada contra Julián (hacia 427-430), I, 60, en respuesta a la frase de Julián"
  },
  "cita_b": {
   "t": "No hay pecado en el hombre si no hay nada de voluntad propia o de asentimiento.",
   "ref": "Julián de Eclana, A Floro, citado por Agustín en Obra inacabada contra Julián, I, 60"
  },
  "fuerte_a": "Todos, desde el principio, estamos inclinados al mal y sufrimos dolor, ignorancia y muerte sin haberlo elegido: eso pide una explicación. Y si los niños no tuvieran nada de lo que ser salvados, Cristo no sería el salvador de todos.",
  "fuerte_b": "Culpar a alguien de lo que no ha hecho es la definición misma de injusticia, y no puede atribuirse a Dios. Si la naturaleza humana es mala desde que nace, se parece demasiado al principio malo de los maniqueos.",
  "desenlace": "Agustín murió en 430 sin terminar su respuesta: llegó al sexto de los ocho libros de Julián, por eso la obra se llama Obra inacabada. Julián siguió condenado y en el destierro y murió hacia 454; sus libros se conocen sobre todo por las citas de Agustín.",
  "trucos": "Julián llamaba a Agustín «Aristóteles de los púnicos» (de los cartagineses) y lo emparentaba con Mani; Agustín le contestaba con ironía llamándole «gran protector de los niños» (Obra inacabada, III, 197-199).",
  "fuentes": [
   {
    "t": "Wikipedia, «Julian of Eclanum»",
    "url": "https://en.wikipedia.org/wiki/Julian_of_Eclanum"
   },
   {
    "t": "Augustinus Hipponensis, «Contra Iulianum opus imperfectum» (texto latino, augustinus.it)",
    "url": "https://www.augustinus.it/latino/incompiuta_giuliano/index.htm"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «Augustine of Hippo»",
    "url": "https://plato.stanford.edu/entries/augustine/"
   }
  ]
 },
 {
  "id": "agustin-maximino",
  "ilu_a": [
   "agustin"
  ],
  "ilu_b": [],
  "a": "Agustín",
  "b": "Maximino, obispo arriano",
  "fechas": "hacia 427-428",
  "lugar": "cara a cara en Hipona, ante clérigos y laicos",
  "pol_via": "cara",
  "pol_epoca": "med",
  "temas": [
   "hf-fe-razon"
  ],
  "pregunta": "¿Son el Padre, el Hijo y el Espíritu Santo un solo Dios, iguales entre sí, o el Hijo es inferior al Padre?",
  "contexto": "Arrio había enseñado en el siglo IV que el Hijo es inferior al Padre; Nicea (325) lo condenó, pero los godos se habían hecho cristianos en esa versión. Con tropas godas al servicio de Roma llegó a África Maximino, un obispo arriano, enviado según él por el conde Segisvulto «para la paz». A petición de muchos, debatió con Agustín, que tenía unos 73 años, con notarios que lo anotaron todo.",
  "tesis_a": "El Padre, el Hijo y el Espíritu Santo son cada uno Dios, con el mismo poder; y los tres juntos no son tres dioses, sino uno solo, como dice la Escritura: «Escucha, Israel, el Señor tu Dios es uno».",
  "tesis_b": "Solo el Padre es Dios sin origen e invisible; el Hijo es Dios, pero engendrado por el Padre y subordinado a él, y el Espíritu Santo está sujeto al Hijo. Así lo fijó el concilio de Rímini (359).",
  "cita_a": {
   "t": "Si se nos pregunta si el Padre es Dios, respondemos: Dios; si el Hijo, Dios; si el Espíritu Santo, Dios. […] La misma Trinidad es un solo Dios.",
   "ref": "Agustín, Debate con Maximino (hacia 427-428), 12"
  },
  "cita_b": {
   "t": "Yo mantengo la fe que en Rímini expusieron y firmaron trescientos treinta obispos.",
   "ref": "Maximino, en Agustín, Debate con Maximino, 2"
  },
  "fuerte_a": "Si el Padre es Dios y el Hijo también es Dios, pero otro e inferior, entonces adoráis a dos dioses; o, si solo hay un Dios, no adoráis a Cristo.",
  "fuerte_b": "Un hijo procede de su padre, y lo que tiene su origen en otro no es igual a él. La Escritura muestra al Hijo enviado por el Padre y obediente a él: leída tal como suena, enseña subordinación.",
  "desenlace": "Maximino habló tanto que se acabó el día y Agustín no pudo contestarle; los dos firmaron las actas, y Maximino prometió responder por escrito si le enviaban el texto. Agustín escribió después dos libros Contra Maximino, de los que no se conoce respuesta; hoy algún estudio sostiene que en el debate oral fue Maximino quien llevó la iniciativa.",
  "trucos": "Agustín acusó a Maximino de alargar su discurso para gastar el tiempo, y Maximino acusó a Agustín de hablar protegido por el poder de los emperadores (Debate con Maximino, final).",
  "fuentes": [
   {
    "t": "«In Augustinum: Maximinus of Durostorum and his dispute with Augustine», Research Announcements «Heritage BG» (Universidad de Sofía)",
    "url": "https://periodicals.uni-sofia.bg/index.php/AR-NBg/article/view/1320"
   },
   {
    "t": "Augustinus Hipponensis, «Collatio cum Maximino Arianorum episcopo» (texto latino, augustinus.it)",
    "url": "https://www.augustinus.it/latino/conferenza_massimino/index.htm"
   }
  ]
 },
 {
  "id": "abelardo-bernardo",
  "ilu_a": [
   "abelardo"
  ],
  "ilu_b": [],
  "a": "Pedro Abelardo",
  "b": "Bernardo de Claraval",
  "fechas": "1140-1141 (concilio de Sens: probablemente 25 de mayo de 1141; la fecha tradicional era junio de 1140)",
  "lugar": "Sens (Francia) y, por cartas, la curia de Roma",
  "pol_via": "cara",
  "pol_epoca": "med",
  "temas": [
   "hf-medieval",
   "hf-fe-razon"
  ],
  "pregunta": "¿Puede la razón examinar los misterios de la fe o debe callar ante ellos?",
  "contexto": "Abelardo era el profesor de lógica más famoso de París, con muchísimos alumnos, y ya había sido condenado una vez (Soissons, 1121). Bernardo, abad del monasterio cisterciense de Claraval, era el hombre más influyente de la Iglesia de su tiempo. Abelardo pidió un debate público con él en Sens; Bernardo convirtió la reunión en un examen de sus escritos por los obispos.",
  "tesis_a": "La fe no pierde nada si se la piensa con lógica: hay que comparar las autoridades que se contradicen, distinguir los sentidos de las palabras y preguntar. La moralidad de un acto depende de la intención.",
  "tesis_b": "Los misterios de la fe (como la Trinidad) se acogen con humildad; querer explicarlos con dialéctica, y además ante jóvenes estudiantes, los rebaja y lleva al error.",
  "cita_a": {
   "t": "Dudando llegamos a la investigación; investigando alcanzamos la verdad.",
   "ref": "Abelardo, Sic et non, Prólogo (PL 178, 1349)"
  },
  "fuerte_a": "Las propias autoridades cristianas se contradicen entre sí; sin razonar no hay manera de saber qué dicen de verdad, y una fe que no entiende lo que cree es frágil.",
  "fuerte_b": "La razón humana es limitada; si se convierte en juez de lo que Dios revela, acabará aceptando solo lo que le parece razonable, y eso ya no es fe.",
  "desenlace": "Al ver que no habría debate, Abelardo se retiró y apeló al papa; el concilio condenó diecinueve proposiciones e Inocencio II le impuso silencio. Se reconcilió con Bernardo gracias a Pedro el Venerable y murió en 1142 bajo su protección, primero en Cluny y luego en el priorato cluniacense de Saint-Marcel, junto a Chalon-sur-Saône. Su método de preguntas y respuestas pasó a las universidades.",
  "trucos": "Bernardo escribió a la curia asimilando a Abelardo con tres herejes antiguos a la vez (Arrio, Pelagio y Nestorio) y se aseguró el veredicto antes del encuentro: Abelardo no tuvo ocasión de defenderse.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Peter Abelard»",
    "url": "https://plato.stanford.edu/entries/abelard/"
   },
   {
    "t": "For and Against Abelard: The Invective of Bernard of Clairvaux and Berengar of Poitiers, Introducción (Cambridge)",
    "url": "https://www.cambridge.org/core/books/for-and-against-abelard/introduction/AB816EF770D3BD2D380CBE3FA335E9E2"
   }
  ]
 },
 {
  "id": "tomas-siger",
  "ilu_a": [
   "tomas"
  ],
  "ilu_b": [],
  "a": "Tomás de Aquino",
  "b": "Siger de Brabante",
  "fechas": "hacia 1270",
  "lugar": "Universidad de París",
  "pol_via": "libros",
  "pol_epoca": "med",
  "temas": [
   "hf-fe-razon",
   "hf-medieval"
  ],
  "pregunta": "¿Hay un solo intelecto para toda la humanidad? ¿Puede la razón demostrar lo contrario de lo que enseña la fe?",
  "contexto": "En París, la Facultad de Artes enseñaba a Aristóteles con los comentarios de Averroes, y la Facultad de Teología temía sus consecuencias. Siger de Brabante (hacia 1240-1284), maestro de Artes, defendía la lectura de Averroes; Tomás, teólogo dominico, también admiraba a Aristóteles, pero leído de otro modo. En 1270 Tomás escribió Sobre la unidad del intelecto contra los averroístas, y ese mismo año el obispo Tempier condenó trece tesis.",
  "tesis_a": "Cada ser humano tiene su propio intelecto, que es parte de su alma: por eso es este hombre concreto el que piensa. Y lo leía en el mismo Aristóteles. La razón bien usada nunca contradice la fe.",
  "tesis_b": "Siguiendo a Averroes, el intelecto que conoce es uno y separado para toda la especie humana. Siger decía exponer lo que sostenían los filósofos con la razón natural, aunque, como cristiano, aceptara lo que manda la fe.",
  "cita_a": {
   "t": "Que no hable en los rincones ni ante muchachos que no saben juzgar cuestiones tan arduas, sino que escriba contra este escrito, si se atreve.",
   "ref": "Tomás de Aquino, Sobre la unidad del intelecto, cap. 5, § 124 (ed. McInerny)"
  },
  "fuerte_a": "La experiencia más simple es que «yo entiendo»; si el intelecto fuera uno y separado, no sería yo quien piensa, y no tendría sentido hablar de responsabilidad personal.",
  "fuerte_b": "Si el intelecto conoce verdades universales, iguales para todos, parece que no puede estar dividido en cuerpos particulares; y un filósofo debe explicar a Aristóteles como es, no como le gustaría que fuera.",
  "desenlace": "Siger matizó después sus tesis. En 1277 Tempier condenó 219 proposiciones (sin nombrarlo) y en 1276 un inquisidor lo había citado; murió en Orvieto hacia 1284. Dante lo puso en el Paraíso junto a Tomás.",
  "trucos": "Tomás atribuye a sus rivales la frase «por la razón concluyo que el intelecto es uno, pero por la fe sostengo lo contrario»; la idea de una «doble verdad» fue sobre todo un reproche de sus adversarios, y no consta que Siger la defendiera así.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Condemnation of 1277»",
    "url": "https://plato.stanford.edu/entries/condemnation/"
   },
   {
    "t": "Tomás de Aquino, De unitate intellectus contra Averroistas (texto latino e inglés, Isidore.co)",
    "url": "https://isidore.co/aquinas/DeUnitateIntellectus.htm"
   },
   {
    "t": "Catholic Encyclopedia (1912), «Siger of Brabant»",
    "url": "https://www.newadvent.org/cathen/13784a.htm"
   }
  ]
 },
 {
  "id": "ockham-juan-xxii",
  "ilu_a": [
   "ockham"
  ],
  "ilu_b": [],
  "a": "Guillermo de Ockham",
  "b": "El papa Juan XXII",
  "fechas": "1323-1334 (hasta la muerte del papa)",
  "lugar": "Aviñón y, desde 1328, Pisa y Múnich",
  "pol_via": "libros",
  "pol_epoca": "med",
  "temas": [
   "hf-medieval",
   "hf-fe-razon"
  ],
  "pregunta": "¿Tiene el papa un poder sin límites? ¿Vivieron Cristo y los apóstoles sin propiedad?",
  "contexto": "Los franciscanos sostenían que Cristo y los apóstoles no tuvieron nada en propiedad y que ellos, imitándolos, solo «usaban» las cosas. Juan XXII, papa en Aviñón, lo declaró herejía en la bula Cum inter nonnullos (1323). Ockham, citado en Aviñón en 1324 para examinar sus escritos, estudió las bulas a petición del general de su orden, Miguel de Cesena, y concluyó que el papa se equivocaba.",
  "tesis_a": "El papa puede errar e incluso caer en herejía; su poder no es pleno, porque reduciría a los cristianos a esclavos. El poder civil no depende del papa.",
  "tesis_b": "Es imposible usar algo que se consume (como la comida) sin ser su dueño, así que decir que Cristo no tuvo nada contradice la Escritura. El papa, como cabeza de la Iglesia, tiene autoridad para decidir la doctrina y corregir a las órdenes.",
  "fuerte_a": "Si el papa no pudiera equivocarse, cualquier decisión suya sería verdad por el solo hecho de dictarla; pero la verdad de la fe no depende de una persona, y la libertad de los fieles debe protegerse.",
  "fuerte_b": "Distinguir entre «usar» y «poseer» unas cosas que se gastan al usarlas es una ficción jurídica; y una Iglesia en la que cada orden decide qué es herejía se rompe.",
  "desenlace": "En 1328 Ockham huyó de Aviñón con Miguel de Cesena y se refugió con el emperador Luis de Baviera, también enemistado con el papa. Fue excomulgado y escribió contra Juan XXII y sus sucesores hasta morir en Múnich hacia 1347.",
  "trucos": "Ockham no se limitó a discutir la tesis: acusó al papa de hereje y dijo que, por serlo, había perdido el papado.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «William of Ockham»",
    "url": "https://plato.stanford.edu/entries/ockham/"
   }
  ]
 },
 {
  "id": "erasmo-lutero",
  "duelo": "pol-erasmo-lutero",
  "ilu_a": [
   "erasmo"
  ],
  "ilu_b": [
   "lutero"
  ],
  "a": "Erasmo",
  "b": "Lutero",
  "fechas": "1524-1525 (y la réplica Hyperaspistes, 1526-1527)",
  "lugar": "por escrito, entre Basilea y Wittenberg",
  "pol_via": "libros",
  "pol_epoca": "ren",
  "temas": [
   "hf-modernidad",
   "fil-t2",
   "fil-t5"
  ],
  "pregunta": "¿Tenemos libre albedrío o la voluntad es esclava sin la gracia?",
  "contexto": "Erasmo era el humanista más admirado de Europa y había criticado los abusos de la Iglesia; muchos esperaban que apoyara a Lutero. Presionado para posicionarse, publicó en septiembre de 1524 Sobre el libre albedrío. Lutero respondió en diciembre de 1525 con Sobre la voluntad esclava, el año de la guerra de los campesinos, mientras la imprenta extendía la Reforma.",
  "tesis_a": "El ser humano tiene una fuerza propia, pequeña, para acercarse o apartarse de la salvación, que coopera con la gracia de Dios. En lo oscuro de la Escritura, mejor no hacer afirmaciones tajantes y seguir a la Iglesia.",
  "tesis_b": "Sin la gracia, la voluntad humana está sometida al pecado y no puede elegir el bien por sí misma; la salvación viene solo de Dios, por la fe. La Escritura es clara y hay que afirmar lo que dice.",
  "cita_a": {
   "t": "Entendemos aquí por libre albedrío una fuerza de la voluntad humana con la que el hombre puede acercarse a lo que lleva a la salvación eterna o apartarse de ello.",
   "ref": "Erasmo, Sobre el libre albedrío (1524), I b 10 (ed. Walter)"
  },
  "cita_b": {
   "t": "El Espíritu Santo no es escéptico.",
   "ref": "Lutero, Sobre la voluntad esclava (1525), WA 18, 605"
  },
  "fuerte_a": "Si no podemos elegir nada, los mandatos, premios y castigos de la Biblia no tendrían sentido, y Dios castigaría por algo que no podemos evitar.",
  "fuerte_b": "Si la salvación dependiera en parte de nuestro esfuerzo, nadie podría estar seguro de ella y uno podría presumir de méritos ante Dios; reconocer la propia impotencia libera de esa angustia.",
  "desenlace": "Erasmo replicó con Hyperaspistes, pero la ruptura fue definitiva: el humanismo católico y la Reforma protestante siguieron caminos separados. La pregunta por la libertad volvió en Spinoza, Leibniz o Kant.",
  "trucos": "Erasmo había escrito que le gustaban tan poco las afirmaciones tajantes que se pasaría a la opinión de los escépticos allí donde lo permitieran la Escritura y la Iglesia; Lutero se burló de esa prudencia y le replicó que un cristiano debe afirmar, porque «el Espíritu Santo no es escéptico».",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Desiderius Erasmus»",
    "url": "https://plato.stanford.edu/entries/erasmus/"
   }
  ]
 },
 {
  "id": "lascasas-sepulveda",
  "ilu_a": [],
  "ilu_b": [],
  "a": "Bartolomé de las Casas",
  "b": "Juan Ginés de Sepúlveda",
  "fechas": "agosto-septiembre de 1550 y abril-mayo de 1551",
  "lugar": "Valladolid: ante la junta, en el Colegio de San Gregorio, y por escrito",
  "pol_via": "libros",
  "pol_epoca": "ren",
  "temas": [
   "hf-modernidad",
   "fil-t6",
   "fil-t5"
  ],
  "pregunta": "¿Es justa la guerra para conquistar y evangelizar a los pueblos de América? ¿Hay pueblos «siervos por naturaleza»?",
  "contexto": "Tras las Leyes Nuevas (1542), que limitaban las encomiendas, Carlos V suspendió nuevas conquistas y reunió en Valladolid una junta de teólogos y juristas. Sepúlveda, humanista y cronista del rey, cuyo Demócrates segundo no había logrado licencia de impresión, habló primero; Las Casas, fraile dominico y antiguo obispo de Chiapas, leyó durante cinco días su Apología. No discutieron frente a frente: hablaron por separado ante los jueces, Domingo de Soto resumió las dos posturas y sobre ese resumen se respondieron por escrito (las doce objeciones de Sepúlveda y las doce réplicas de Las Casas).",
  "tesis_a": "Los pueblos americanos son racionales, tienen ciudades, leyes y gobierno propios. La fe solo se puede predicar con persuasión y ejemplo; la guerra contra ellos es injusta.",
  "tesis_b": "La guerra es justa por cuatro razones: la gravedad de sus pecados (idolatría), su rudeza, que los haría siervos por naturaleza según Aristóteles, la necesidad de abrir paso a la predicación y la defensa de los inocentes sacrificados.",
  "fuerte_a": "Una guerra para salvar a algunos inocentes de los sacrificios mata a muchos más inocentes; y una fe impuesta por la fuerza no es fe.",
  "fuerte_b": "Si un pueblo sacrifica a personas inocentes, quien puede impedirlo tiene el deber de hacerlo, del mismo modo que defendemos a una víctima aunque no sea de los nuestros.",
  "desenlace": "La junta no emitió una sentencia y los dos se proclamaron vencedores. Las Casas publicó el resumen del debate en Sevilla en 1552; las ordenanzas de Felipe II (1573) sustituyeron la palabra «conquista» por «pacificación».",
  "fuentes": [
   {
    "t": "Biblioteca Virtual Miguel de Cervantes, «Bartolomé de las Casas. Cronología»",
    "url": "https://www.cervantesvirtual.com/portales/bartolome_de_las_casas/autor_cronologia/"
   },
   {
    "t": "Wikipedia, «Junta de Valladolid»",
    "url": "https://es.wikipedia.org/wiki/Junta_de_Valladolid"
   }
  ]
 },
 {
  "id": "descartes-hobbes-gassendi",
  "ilu_a": [
   "descartes"
  ],
  "ilu_b": [
   "hobbes"
  ],
  "a": "Descartes",
  "b": "Hobbes y Gassendi",
  "fechas": "1641",
  "lugar": "por escrito, a través de Mersenne en París",
  "pol_via": "libros",
  "pol_epoca": "mod",
  "temas": [
   "hf-racionalismo",
   "hf-metafisica",
   "hf-descartes-makro",
   "fil-t2",
   "fil-t3"
  ],
  "pregunta": "¿La mente es una cosa distinta del cuerpo o algo material?",
  "contexto": "Antes de publicar las Meditaciones metafísicas, Descartes pidió al fraile Marin Mersenne que las hiciera circular entre sabios para recoger objeciones. Se imprimieron en 1641 junto con seis series de objeciones y sus respuestas: la tercera era de Thomas Hobbes, exiliado en París, y la quinta del filósofo y sacerdote Pierre Gassendi, que defendía el atomismo de Epicuro. Era la época de Galileo y de la nueva física mecánica.",
  "tesis_a": "Puedo dudar de que tengo cuerpo, pero no de que pienso: luego soy una cosa que piensa, una sustancia distinta del cuerpo, que es solo extensión.",
  "tesis_b": "Hobbes: del «pienso» no se sigue qué soy; la cosa que piensa podría ser algo corpóreo. Gassendi: una mente sin extensión no podría unirse a un cuerpo ni moverlo, y no hay ideas claras que no vengan de los sentidos.",
  "cita_a": {
   "t": "Soy, por tanto, en sentido estricto, solo una cosa que piensa.",
   "ref": "Descartes, Meditaciones metafísicas, II (AT VII, 27)"
  },
  "cita_b": {
   "t": "Puede ser que la cosa que piensa sea algo corpóreo.",
   "ref": "Hobbes, Terceras objeciones a las Meditaciones (1641), objeción 2 (AT VII, 172-173)"
  },
  "fuerte_a": "Puedo concebir con claridad mi mente sin nada de cuerpo, y el cuerpo sin nada de pensamiento; lo que se puede concebir por separado puede existir por separado.",
  "fuerte_b": "Que yo pueda pensar en mí sin pensar en mi cuerpo no prueba que no lo sea: igual que de «paseo» no se sigue «soy un paseo», del pensar no se sigue qué clase de cosa piensa.",
  "desenlace": "Descartes respondió punto por punto y siguió defendiendo el dualismo; Gassendi replicó con un libro entero (Disquisitio metaphysica). La pregunta de cómo una mente inmaterial mueve un cuerpo volvió con Isabel de Bohemia y sigue abierta en la filosofía de la mente.",
  "trucos": "Gassendi se dirigía a Descartes con un burlón «¡Oh, Mente!», y Descartes le contestó llamándolo «¡Oh, Carne!»; con Hobbes sus respuestas fueron breves y secas.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Pierre Gassendi»",
    "url": "https://plato.stanford.edu/entries/gassendi/"
   },
   {
    "t": "Early Modern Texts, Descartes, Objections and Replies (trad. J. Bennett)",
    "url": "https://www.earlymoderntexts.com/authors/descartes"
   }
  ]
 },
 {
  "id": "hobbes-bramhall",
  "ilu_a": [
   "hobbes"
  ],
  "ilu_b": [],
  "a": "Hobbes",
  "b": "Bramhall",
  "fechas": "1645-1658",
  "lugar": "cara a cara en París (1645) y después por escrito, desde el exilio",
  "pol_via": "libros",
  "pol_epoca": "mod",
  "temas": [
   "hf-metafisica",
   "hf-contrato",
   "fil-metafisica",
   "fil-t5"
  ],
  "pregunta": "Si todo lo que hacemos tiene causas que lo determinan, ¿podemos seguir llamándonos libres y responsables?",
  "contexto": "En plena guerra civil inglesa, muchos partidarios del rey vivían exiliados en París. En 1645, en casa del marqués de Newcastle, discutieron sobre la libertad Thomas Hobbes, filósofo materialista, y John Bramhall, obispo anglicano de Derry. Newcastle les pidió que pusieran sus posturas por escrito, sin intención de publicarlas.",
  "tesis_a": "Todo lo que ocurre, también lo que queremos, tiene causas que lo hacen necesario. Ser libre es poder hacer lo que uno quiere sin que nada externo lo impida, y eso es compatible con la necesidad.",
  "tesis_b": "La verdadera libertad es la capacidad de la voluntad racional para elegir entre alternativas. Si la voluntad estuviera determinada de antemano, no tendría sentido deliberar, aconsejar, premiar ni castigar.",
  "cita_a": {
   "t": "La libertad y la necesidad son compatibles: como en el agua, que no solo tiene libertad, sino necesidad de bajar por el cauce.",
   "ref": "Hobbes, Leviatán (1651), cap. XXI"
  },
  "cita_b": {
   "t": "Juzgad, pues, qué bonita clase de libertad sostiene T. H.: una libertad como la de los niños pequeños antes de tener uso de razón.",
   "ref": "Bramhall, Defensa de la verdadera libertad (1655), n.º III, reproducida en Hobbes, Cuestiones sobre la libertad, la necesidad y el azar (1656)"
  },
  "fuerte_a": "Cada decisión tiene motivos y causas, y quien decide no puede elegir querer otra cosa distinta de la que quiere. Aun así, distinguimos al que actúa por su voluntad del que es empujado o encadenado, y eso basta para hablar de libertad y para que las leyes y los castigos sirvan: forman parte de las causas que mueven la voluntad.",
  "fuerte_b": "Si la voluntad está fijada de antemano por causas externas, ¿para qué damos razones, pedimos, rogamos o reprochamos? Toda nuestra vida moral supone que la persona podía haber elegido otra cosa.",
  "desenlace": "En 1654 se imprimió la respuesta de Hobbes sin su permiso. Bramhall se sintió atacado en público y siguieron réplicas y contrarréplicas hasta 1658, cuando Bramhall acusó además a Hobbes de destruir la religión y la moral. Es el primer gran debate moderno entre compatibilismo (libertad y determinismo pueden convivir) y libertarismo (la libertad exige poder elegir otra cosa), y sigue abierto.",
  "trucos": "Bramhall llamó a la libertad de Hobbes «brutal», propia de abejas y arañas, y Hobbes se burló de que una metáfora del obispo sobre corderos y lana solo podía ocurrírsele a quien cobra diezmos.",
  "fuentes": [
   {
    "t": "Thomas Hobbes, The English Works, vol. 5: The Questions concerning Liberty, Necessity, and Chance (Project Gutenberg)",
    "url": "https://gutenberg.org/cache/epub/76650/pg76650-images.html"
   },
   {
    "t": "Nicholas D. Jackson, Hobbes, Bramhall and the Politics of Liberty and Necessity (Cambridge University Press, 2007), cap. 7",
    "url": "https://www.cambridge.org/core/books/hobbes-bramhall-and-the-politics-of-liberty-and-necessity/public-quarrel-hobbes-of-liberty-and-necessity-1654-bramhall-defence-of-true-liberty-1655-and-hobbes-questions-concerning-liberty-necessity-and-chance-1656/46A3F615833D8159C9B000182CBC329B"
   }
  ]
 },
 {
  "id": "leibniz-newton-clarke",
  "duelo": "pol-leibniz-newton-clarke",
  "ilu_a": [
   "leibniz"
  ],
  "ilu_b": [
   "newton"
  ],
  "a": "Leibniz",
  "b": "Newton y Clarke",
  "fechas": "1711-1716",
  "lugar": "por escrito, entre Hannover y Londres; las cartas pasaban por la princesa de Gales",
  "pol_via": "cartas",
  "pol_epoca": "mod",
  "temas": [
   "hf-modernidad",
   "hf-racionalismo",
   "hf-metafisica",
   "fil-metafisica"
  ],
  "pregunta": "¿El espacio es un gran recipiente que existiría aunque no hubiera nada, o solo el orden en que están colocadas las cosas? ¿Y necesita Dios corregir de vez en cuando su obra?",
  "contexto": "Newton y Leibniz habían inventado el cálculo infinitesimal cada uno por su cuenta; Leibniz publicó primero (1684). Desde 1711 los seguidores de Newton acusaron a Leibniz de plagio, y en 1712 la Royal Society, presidida por Newton, le dio la razón a Newton en un informe redactado en buena parte por él mismo. En 1715 Leibniz escribió a Carolina, princesa de Gales, a la que conocía de la corte alemana, criticando la filosofía de Newton, y le respondió el teólogo Samuel Clarke, con consejos de Newton.",
  "tesis_a": "El espacio y el tiempo no son cosas: son relaciones entre las cosas. Un Dios perfecto hizo un mundo que funciona sin necesidad de retoques, y nada ocurre sin una razón suficiente.",
  "tesis_b": "El espacio es absoluto, real e independiente de los cuerpos. Dios no es un relojero que se retira: gobierna el mundo continuamente, y un mundo que funcionara solo dejaría a Dios sin papel.",
  "cita_a": {
   "t": "Tengo el espacio por algo meramente relativo, como el tiempo: por un orden de coexistencias, como el tiempo es un orden de sucesiones.",
   "ref": "Leibniz, tercer escrito a Clarke (25 de febrero de 1716), §4"
  },
  "cita_b": {
   "t": "La idea de que el mundo es una gran máquina que sigue andando sin que Dios intervenga, como un reloj sin ayuda del relojero, es la idea del materialismo y del destino.",
   "ref": "Clarke, primera respuesta a Leibniz (noviembre de 1715), §4"
  },
  "fuerte_a": "Si el espacio fuera absoluto, Dios habría podido colocar el universo entero unos metros más allá sin que cambiara nada, y no habría ninguna razón para elegir un sitio u otro. Como nada ocurre sin razón, el espacio tiene que ser solo el orden de las cosas.",
  "fuerte_b": "La física de Newton explica los movimientos con precisión matemática, y en ella hay efectos, como las fuerzas que aparecen al girar, que parecen exigir un espacio absoluto. Además, un mundo que se basta a sí mismo deja la puerta abierta a prescindir de Dios.",
  "desenlace": "La correspondencia quedó cortada por la muerte de Leibniz en noviembre de 1716, y Clarke la publicó en 1717. Hoy se acepta que los dos inventaron el cálculo por separado, y la discusión sobre el espacio volvió con Mach y con la teoría de la relatividad de Einstein.",
  "trucos": "La Royal Society actuó a la vez como juez y parte: Newton presidía la institución y escribió en buena parte el informe que lo declaraba vencedor.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Samuel Clarke»",
    "url": "https://plato.stanford.edu/entries/clarke/"
   },
   {
    "t": "The Newton Project, «Mr. Leibniz's First Paper» (A Collection of Papers…, Londres, 1717)",
    "url": "https://newtonproject.ox.ac.uk/view/texts/normalized/THEM00226"
   },
   {
    "t": "The Newton Project, «Dr. Clarke's First Reply»",
    "url": "https://newtonproject.ox.ac.uk/view/texts/normalized/THEM00227"
   }
  ]
 },
 {
  "id": "voltaire-rousseau-lisboa",
  "duelo": "pol-voltaire-rousseau-lisboa",
  "ilu_a": [
   "voltaire"
  ],
  "ilu_b": [
   "rousseau"
  ],
  "a": "Voltaire",
  "b": "Rousseau",
  "fechas": "1756-1759",
  "lugar": "por escrito, entre Ginebra (Les Délices) y Montmorency, cerca de París",
  "pol_via": "cartas",
  "pol_epoca": "ilu",
  "temas": [
   "hf-ilustracion",
   "fil-metafisica",
   "fil-t5"
  ],
  "pregunta": "Después de una catástrofe, ¿se puede seguir diciendo que «todo está bien»? ¿De quién es la culpa del mal?",
  "contexto": "El 1 de noviembre de 1755 un terremoto, un maremoto y varios incendios destruyeron Lisboa y mataron a decenas de miles de personas. Voltaire, el escritor más famoso de Europa, publicó en 1756 un poema contra el optimismo filosófico de Leibniz y del poeta Alexander Pope, para quienes este es el mejor de los mundos posibles. Rousseau, entonces un autor polémico pero mucho menos famoso, le respondió con una larga carta.",
  "tesis_a": "Decir que «todo está bien» ante miles de muertos inocentes es un insulto a las víctimas. El mal es real, la razón no sabe explicarlo, y lo honrado es reconocerlo.",
  "tesis_b": "La Providencia no es culpable: casi todos nuestros males los causamos nosotros. Fueron los seres humanos quienes amontonaron casas altas en una ciudad junto al mar, y quien pierde la esperanza en el sentido del mundo se queda sin consuelo.",
  "cita_a": {
   "t": "Filósofos engañados que gritáis: «Todo está bien», acudid, contemplad estas ruinas espantosas.",
   "ref": "Voltaire, Poema sobre el desastre de Lisboa (1756), vv. 4-5"
  },
  "cita_b": {
   "t": "Convenga usted, por ejemplo, en que la naturaleza no había reunido allí veinte mil casas de seis a siete pisos.",
   "ref": "Rousseau, carta a Voltaire, 18 de agosto de 1756"
  },
  "fuerte_a": "Un niño aplastado en brazos de su madre no ha hecho nada malo. Ninguna teoría sobre el orden del universo puede convencer a quien sufre de que su dolor era necesario o bueno.",
  "fuerte_b": "El terremoto es natural, pero el desastre no del todo: las víctimas dependen de cómo construimos y vivimos. Si los habitantes hubieran estado más repartidos y en casas más bajas, habrían muerto muchos menos.",
  "desenlace": "Voltaire contestó el 12 de septiembre de 1756 con una carta breve y amable que esquivaba el debate. Su respuesta de fondo llegó en 1759 con Cándido, la sátira del optimista Pangloss. La idea de Rousseau de que las catástrofes también tienen causas sociales está hoy en los estudios sobre riesgos y desastres.",
  "trucos": "Voltaire no discutió con Rousseau cara a cara: lo ridiculizó todo en una novela satírica en la que el optimismo queda como una manía absurda.",
  "fuentes": [
   {
    "t": "Wikisource, Rousseau, «Lettre à Voltaire sur la Providence» (con la respuesta de Voltaire)",
    "url": "https://fr.wikisource.org/wiki/Lettre_à_Voltaire_sur_la_Providence"
   },
   {
    "t": "Wikisource, Voltaire, «Poème sur le désastre de Lisbonne»",
    "url": "https://fr.wikisource.org/wiki/Poème_sur_le_désastre_de_Lisbonne"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «Voltaire»",
    "url": "https://plato.stanford.edu/entries/voltaire/"
   }
  ]
 },
 {
  "id": "hume-rousseau",
  "ilu_a": [
   "hume"
  ],
  "ilu_b": [
   "rousseau"
  ],
  "a": "Hume",
  "b": "Rousseau",
  "fechas": "1766-1767",
  "lugar": "Londres y Wootton (Staffordshire), y por escrito con París",
  "pol_via": "cartas",
  "pol_epoca": "ilu",
  "temas": [
   "hf-ilustracion",
   "hf-racionalismo"
  ],
  "pregunta": "¿Aceptar la ayuda de un protector poderoso te hace menos libre? ¿Y cómo se decide quién tiene razón cuando una amistad acaba en acusaciones públicas?",
  "contexto": "En 1762 el Emilio de Rousseau fue condenado en París y en Ginebra, y Rousseau vivía huyendo. David Hume, muy admirado en París, se lo llevó a Inglaterra en enero de 1766, le buscó una casa en el campo y gestionó para él una pensión del rey Jorge III. A la vez circulaba una carta burlesca contra Rousseau, falsamente atribuida al rey de Prusia, escrita por Horace Walpole, amigo de Hume.",
  "tesis_a": "Hume se veía como un benefactor generoso, víctima de la ingratitud de un hombre enfermo de desconfianza. Para limpiar su nombre ante Europa publicó las cartas de los dos con un relato de los hechos.",
  "tesis_b": "Rousseau creía que Hume lo había traído a Inglaterra para controlarlo y humillarlo, junto con sus enemigos de París. Defendía que un escritor debe ser independiente y no deberle favores a los poderosos.",
  "fuerte_a": "Hume tenía pruebas de todo lo que había hecho por Rousseau: el viaje, la casa, la pensión, las gestiones. Ninguna de esas ayudas le hacía daño, y Rousseau nunca presentó pruebas del complot.",
  "fuerte_b": "Rousseau no se lo inventó todo: la carta falsa de Walpole era real, en París se burlaban de él amigos de Hume, y una pensión del rey le habría hecho depender del poder que criticaba. Ya en 1752 había rechazado ser presentado a Luis XV para no deberle una pensión.",
  "desenlace": "Rousseau rompió con Hume en una larguísima carta del 10 de julio de 1766. Hume publicó en París la Exposición sucinta de la disputa (octubre de 1766) y su versión inglesa en noviembre, y Rousseau dejó Inglaterra en mayo de 1767. Muchos historiadores hablan de la paranoia de Rousseau; otros, como Daniel Klein, sospechan que Hume, sin saberlo del todo, quería domesticar a un crítico incómodo.",
  "trucos": "La disputa se llevó más a la reputación que a las ideas: las cartas privadas de Hume contra Rousseau circularon por los salones de París antes de publicarse, y cada uno intentó ganar a la opinión pública más que convencer al otro.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Jean Jacques Rousseau»",
    "url": "https://plato.stanford.edu/entries/rousseau/"
   },
   {
    "t": "Daniel B. Klein, «To Tolerant England and a Pension from the King: Did Hume Subconsciously Aim to Subvert Rousseau's Legacy?», Econ Journal Watch 18 (2021)",
    "url": "https://econjwatch.org/articles/to-tolerant-england-and-a-pension-from-the-king-did-hume-subconsciously-aim-to-subvert-rousseau-s-legacy"
   }
  ]
 },
 {
  "id": "kant-herder",
  "ilu_a": [
   "kant"
  ],
  "ilu_b": [
   "herder"
  ],
  "a": "Kant",
  "b": "Herder",
  "fechas": "1784-1785",
  "lugar": "por escrito: las reseñas de Kant en la Allgemeine Literatur-Zeitung de Jena y los libros de Herder desde Weimar",
  "pol_via": "libros",
  "pol_epoca": "ilu",
  "temas": [
   "hf-kant",
   "hf-ilustracion",
   "fil-t2",
   "fil-t6"
  ],
  "pregunta": "¿Necesita el ser humano un señor, un Estado que lo obligue, para progresar? ¿O cada pueblo y cada época valen por sí mismos?",
  "contexto": "Herder había sido alumno de Kant en Königsberg (1762-1764). En 1784 Kant publicó su Idea para una historia universal y Herder la primera parte de sus Ideas para la filosofía de la historia de la humanidad. Kant reseñó, sin firmar, las dos primeras partes del libro de su antiguo alumno en enero y noviembre de 1785, y el tono fue duro.",
  "tesis_a": "La historia se puede pensar como un progreso de la especie hacia la razón y la libertad, que solo se alcanza dentro de un Estado con leyes justas. La filosofía no debe sustituir los argumentos por analogías e imágenes poéticas.",
  "tesis_b": "La historia humana es parte de la naturaleza, y cada pueblo y cada época tienen su propio valor y su propia felicidad. No vivimos solo como medios para el progreso futuro, y someterse a un señor es propio de animales, no de seres humanos.",
  "cita_a": {
   "t": "El hombre es un animal que, cuando vive entre otros de su especie, necesita un señor.",
   "ref": "Kant, Idea para una historia universal en clave cosmopolita (1784), sexta proposición (AA VIII, 23)"
  },
  "cita_b": {
   "t": "Dale la vuelta a la frase: el hombre que necesita un señor es un animal; en cuanto se hace hombre, ya no necesita propiamente ningún señor.",
   "ref": "Herder, Ideas para la filosofía de la historia de la humanidad, 2.ª parte (1785), libro IX, cap. 4, p. 260 de la 1.ª ed."
  },
  "fuerte_a": "La experiencia de todas las épocas muestra que los seres humanos abusan de su libertad cuando nadie los frena. Y si los felices habitantes de Tahití vivieran mil siglos sin cambiar nada, cabría preguntar para qué existen: el valor de la vida humana no está solo en el disfrute.",
  "fuerte_b": "Si cada generación solo sirve para preparar a las siguientes, las personas se convierten en piezas de una máquina estatal. La felicidad de una vida sencilla en su tiempo y en su pueblo no vale menos que la de una civilización futura.",
  "desenlace": "Un defensor de Herder, el joven Reinhold, respondió a la primera reseña y Kant le replicó, aunque poco después Reinhold se hizo kantiano. Herder no lo olvidó: en 1799 y 1800 publicó dos libros contra la filosofía crítica de Kant.",
  "trucos": "Kant firmaba como «el reseñador» y, al defender en la segunda reseña la frase que Herder llamaba «malvada», añadió con ironía: «Puede que la haya dicho un hombre malvado», sabiendo que la frase era suya.",
  "fuentes": [
   {
    "t": "Kant, Recensionen von J. G. Herders Ideen…, Akademie-Ausgabe VIII, pp. 64-65 (Korpora, Universität Duisburg-Essen)",
    "url": "https://korpora.org/Kant/aa08/064.html"
   },
   {
    "t": "Deutsches Textarchiv, Herder, Ideen zur Philosophie der Geschichte der Menschheit, 2.ª parte (1785), p. 260",
    "url": "https://www.deutschestextarchiv.de/book/view/herder_geschichte02_1785?p=272"
   },
   {
    "t": "Cambridge University Press, Kant: Political Writings, «Introduction to Reviews of Herder's Ideas…»",
    "url": "https://cambridge.org/highereducation/books/kant-political-writings/F044FA976B84C8BF0268C08583B0DB80/introduction-to-reviews-of-herders-ideas-on-the-philosophy-of-the-history-of-mankind-and-conjectures-on-the-beginning-of-human-history/274885E4B4ADA92D2CFB8B1E07BAC59A"
   }
  ]
 },
 {
  "id": "burke-paine-wollstonecraft",
  "ilu_a": [],
  "ilu_b": [
   "wollstonecraft"
  ],
  "a": "Burke",
  "b": "Paine y Wollstonecraft",
  "fechas": "1790-1792",
  "lugar": "por escrito, en Londres",
  "pol_via": "libros",
  "pol_epoca": "ilu",
  "temas": [
   "hf-contrato",
   "hf-ilustracion",
   "hf-beauvoir",
   "fil-t6"
  ],
  "pregunta": "¿Deben guiar la política la tradición y la prudencia heredadas, o los derechos universales que descubre la razón?",
  "contexto": "En 1789 estalló la Revolución francesa y en Inglaterra muchos la celebraron, como el pastor Richard Price en un sermón famoso. Edmund Burke, político irlandés del partido whig que había defendido a los colonos americanos, respondió el 1 de noviembre de 1790 con sus Reflexiones sobre la Revolución en Francia. En pocos meses le contestaron Mary Wollstonecraft y Thomas Paine, entre muchos otros.",
  "tesis_a": "La sociedad no se puede rehacer desde cero con principios abstractos. Las instituciones heredadas guardan la experiencia de muchas generaciones, y destruirlas de golpe lleva al desorden y a la fuerza.",
  "tesis_b": "Los derechos naturales valen para todos y ninguna generación puede atar a las siguientes. Las instituciones solo merecen respeto si resisten el examen de la razón; Wollstonecraft añadió que esos derechos deben valer también para las mujeres.",
  "cita_a": {
   "t": "Se convierte en una asociación no solo entre los vivos, sino entre los que viven, los que han muerto y los que van a nacer.",
   "ref": "Burke, Reflexiones sobre la Revolución en Francia (1790), sobre la sociedad como contrato"
  },
  "cita_b": {
   "t": "Cada época y cada generación debe ser tan libre de actuar por sí misma, en todos los casos, como las épocas y generaciones que la precedieron.",
   "ref": "Paine, Los derechos del hombre, 1.ª parte (1791)"
  },
  "fuerte_a": "Nadie es lo bastante sabio para diseñar una sociedad entera desde un papel. Las costumbres y las instituciones que han durado siglos contienen un saber práctico que no cabe en una teoría, y cuando se derriban todas a la vez el vacío lo ocupa la violencia.",
  "fuerte_b": "Si la tradición fuera la medida de lo justo, la esclavitud, los privilegios hereditarios y la sumisión de las mujeres serían intocables solo por antiguos. Los muertos no tienen derecho a gobernar a los vivos.",
  "desenlace": "Wollstonecraft publicó su Vindicación de los derechos del hombre en noviembre de 1790, primero sin firma, y en 1792 la Vindicación de los derechos de la mujer, dirigida sobre todo contra Rousseau. Paine fue procesado por sedición en 1792 y se refugió en Francia. El debate fijó dos tradiciones que siguen enfrentadas: el conservadurismo, que tiene a Burke como fundador, y el liberalismo radical de los derechos.",
  "trucos": "Burke habló de una «multitud porcina» que pisotearía la cultura, y sus adversarios convirtieron la expresión en arma; Paine le reprochó que lloraba por la reina María Antonieta y olvidaba a los pobres: «se compadece del plumaje y olvida al pájaro que muere». Wollstonecraft, por su parte, atribuyó la postura de Burke a su gusto por los rangos y la nobleza.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Edmund Burke»",
    "url": "https://plato.stanford.edu/entries/burke/"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «Thomas Paine»",
    "url": "https://plato.stanford.edu/entries/paine/"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «Mary Wollstonecraft»",
    "url": "https://plato.stanford.edu/entries/wollstonecraft/"
   }
  ]
 },
 {
  "id": "schopenhauer-hegel",
  "ilu_a": [],
  "ilu_b": [
   "hegel"
  ],
  "a": "Schopenhauer",
  "b": "Hegel",
  "fechas": "1820-1831",
  "lugar": "Universidad de Berlín",
  "pol_via": "cara",
  "pol_epoca": "con",
  "temas": [
   "hf-kant",
   "hf-sospecha",
   "fil-metafisica"
  ],
  "pregunta": "¿Es el mundo la obra de una razón que avanza en la historia, o de una voluntad ciega que nos hace sufrir?",
  "contexto": "Hegel era el filósofo más influyente de Alemania y catedrático en Berlín, la universidad del Estado prusiano. Schopenhauer, de 32 años, acababa de publicar El mundo como voluntad y representación (1819), que casi nadie había leído. El 23 de marzo de 1820 dio su lección de prueba para enseñar en Berlín, con Hegel en el tribunal, y los dos discutieron cara a cara sobre si un animal puede moverse sin un motivo.",
  "tesis_a": "Detrás de las apariencias no hay razón, sino una voluntad ciega e insaciable que se manifiesta en todo lo que existe. Por eso la vida es sobre todo dolor, y la historia no avanza hacia ninguna meta.",
  "tesis_b": "La realidad es el despliegue del espíritu, de la razón, que se va conociendo a sí misma a lo largo de la historia. Lo que ocurre tiene un sentido, y el Estado moderno es una de sus realizaciones.",
  "cita_a": {
   "t": "El mundo es mi representación.",
   "ref": "Schopenhauer, El mundo como voluntad y representación (1819), libro I, §1"
  },
  "cita_b": {
   "t": "Lo que es racional es real; y lo que es real es racional.",
   "ref": "Hegel, Principios de la filosofía del derecho (1820, con fecha de 1821 en la portada), prólogo"
  },
  "fuerte_a": "Basta mirar el mundo, lleno de guerras, enfermedades y animales que se devoran, para dudar de que la historia sea el camino de una razón. Un sistema que lo justifica todo como necesario acaba justificando también el poder que lo protege.",
  "fuerte_b": "Si la realidad fuera una voluntad sin razón, no podríamos entender nada de ella, ni siquiera esa misma tesis. La historia muestra avances reales, como la extensión de la libertad, y la filosofía tiene que explicarlos.",
  "desenlace": "Schopenhauer puso su curso a la misma hora que la lección principal de Hegel: lo dio en el verano de 1820 con pocos oyentes y lo siguió anunciando hasta 1831 casi siempre sin alumnos. Hegel apenas le hizo caso. Schopenhauer dejó Berlín huyendo del cólera en 1831, el año en que Hegel murió, y su fama llegó solo al final de su vida.",
  "trucos": "Fue un enfrentamiento muy desigual: Hegel casi no respondió, y Schopenhauer pasó décadas insultándolo («charlatán», «farsante»), sobre todo después de la muerte de Hegel. Sus ataques mezclan crítica filosófica y resentimiento personal.",
  "fuentes": [
   {
    "t": "Arthur Hübscher, «Schopenhauer als Hochschullehrer», Schopenhauer-Jahrbuch (1958)",
    "url": "https://download.uni-mainz.de/fb05-philosophie-schopenhauer/files/2019/06/1958_Hübscher.pdf"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «Arthur Schopenhauer»",
    "url": "https://plato.stanford.edu/entries/schopenhauer/"
   }
  ]
 },
 {
  "id": "marx-proudhon-bakunin",
  "ilu_a": [
   "marx"
  ],
  "ilu_b": [
   "proudhon"
  ],
  "a": "Marx",
  "b": "Proudhon y Bakunin",
  "fechas": "1846-1873",
  "lugar": "por escrito (Bruselas, París, Londres) y en los congresos de la Primera Internacional",
  "pol_via": "libros",
  "pol_epoca": "con",
  "temas": [
   "hf-sospecha",
   "hf-capitalismo",
   "fil-t6"
  ],
  "pregunta": "Para acabar con la explotación, ¿hay que cambiar la producción y conquistar el Estado, o reformar el intercambio y abolir el Estado cuanto antes?",
  "contexto": "En 1846 Marx, joven exiliado en Bruselas, invitó a Proudhon, el socialista francés más famoso, a una red de correspondencia; Proudhon aceptó, pero le pidió no fundar «una nueva intolerancia». Ese año Proudhon publicó Filosofía de la miseria y Marx le contestó en 1847 con Miseria de la filosofía. Veinte años después, dentro de la Primera Internacional (la Asociación Internacional de los Trabajadores), el anarquista ruso Bakunin se enfrentó a Marx.",
  "tesis_a": "La explotación nace de cómo se produce, no solo de cómo se intercambia. Las categorías económicas son históricas, y los trabajadores deben organizarse en partidos y conquistar el poder político para transformar la sociedad.",
  "tesis_b": "Proudhon proponía reformar el intercambio con crédito gratuito y asociaciones libres, sin revolución violenta. Bakunin defendía abolir el Estado de inmediato: un «Estado obrero» acabaría siendo una nueva dictadura de una minoría.",
  "cita_a": {
   "t": "El molino de mano os dará la sociedad con el señor feudal; el molino de vapor, la sociedad con el capitalista industrial.",
   "ref": "Marx, Miseria de la filosofía (1847), cap. 2, §1, segunda observación"
  },
  "cita_b": {
   "t": "No nos pongamos como apóstoles de una nueva religión, aunque sea la religión de la lógica, la religión de la razón.",
   "ref": "Proudhon, carta a Marx, Lyon, 17 de mayo de 1846"
  },
  "fuerte_a": "Sin entender cómo funciona la producción, cualquier reforma es un parche: mientras unos posean los medios de producción y otros solo su trabajo, el intercambio seguirá siendo desigual. Y sin poder político organizado, los trabajadores quedan desarmados frente a un Estado que sí está organizado.",
  "fuerte_b": "Bakunin respondió que toda dictadura solo busca perpetuarse y que la libertad solo se crea con libertad. Si los dirigentes obreros llegan al poder, dejan de ser obreros y pasan a mirar al pueblo desde arriba.",
  "desenlace": "Proudhon no respondió en público a Marx. En el congreso de La Haya (septiembre de 1872) la Internacional expulsó a Bakunin y a su colaborador Guillaume, y la organización se partió en una rama marxista y otra antiautoritaria. La discusión entre socialismo de Estado y anarquismo siguió durante todo el siglo XX.",
  "trucos": "Para expulsar a Bakunin se usó, además de la acusación de dirigir una sociedad secreta dentro de la Internacional, una carta amenazante de Necháyev sobre un adelanto que Bakunin había cobrado por traducir El capital; según el historiador Paul Avrich, Bakunin no sabía que esa carta se había enviado. Bakunin, por su parte, atacó a Marx con insultos personales, algunos antisemitas, como en su carta a los compañeros de la Federación del Jura (febrero-marzo de 1872).",
  "fuentes": [
   {
    "t": "Marxists Internet Archive, Proudhon, carta a Marx (Lyon, 17 de mayo de 1846)",
    "url": "https://www.marxists.org/reference/subject/economics/proudhon/letters/46_05_17.htm"
   },
   {
    "t": "Marxists Internet Archive, Marx, The Poverty of Philosophy, cap. 2",
    "url": "https://www.marxists.org/archive/marx/works/1847/poverty-philosophy/ch02.htm"
   },
   {
    "t": "Marxists Internet Archive, Bakunin, Statism and Anarchy (1873)",
    "url": "https://www.marxists.org/reference/archive/bakunin/works/1873/statism-anarchy.htm"
   }
  ]
 },
 {
  "id": "nietzsche-wagner",
  "ilu_a": [
   "nietzsche"
  ],
  "ilu_b": [],
  "a": "Nietzsche",
  "b": "Wagner",
  "fechas": "1868-1883 (ruptura en 1876-1878; epílogo en 1888)",
  "lugar": "Tribschen (Lucerna), Bayreuth y Sorrento, y después por escrito",
  "pol_via": "cara",
  "pol_epoca": "con",
  "temas": [
   "hf-sospecha",
   "hf-posmodernidad",
   "fil-t7"
  ],
  "pregunta": "¿Puede el arte salvar a una cultura, o puede también enfermarla?",
  "contexto": "Nietzsche conoció a Richard Wagner en Leipzig cuando era estudiante, y como profesor en Basilea visitó a menudo su casa de Tribschen, junto al lago de Lucerna. En El nacimiento de la tragedia (1872) presentó el drama musical de Wagner como el renacer de la tragedia griega. En 1876 asistió al primer festival de Bayreuth, el teatro que Wagner había construido para sus obras, y salió decepcionado.",
  "tesis_a": "Tras el festival de Bayreuth, Nietzsche vio en el arte de Wagner un espectáculo teatral para masas y un culto al genio, y en Parsifal un regreso al cristianismo y a la redención. En Humano, demasiado humano (1878) defendió un pensamiento libre y crítico, cercano a la ciencia, que no busca consuelo en el arte ni en la metafísica.",
  "tesis_b": "Para Wagner, la obra de arte total, que une música, poesía y escena, debía renovar el espíritu alemán; su giro hacia el cristianismo y la redención era una profundización de su arte, no una traición.",
  "cita_a": {
   "t": "Ayer llegó a mi casa, enviado por Wagner, el Parsifal. Impresión de la primera lectura: más Liszt que Wagner, espíritu de la Contrarreforma; […] todo es demasiado cristiano.",
   "ref": "Nietzsche, carta a Reinhart von Seydlitz, Basilea, 4 de enero de 1878 (eKGWB, BVN-1878,678)"
  },
  "fuerte_a": "El arte no es inocente: lo que nos emociona también nos educa. Un arte que vive de la exaltación y del deseo de redención enseña a huir de la vida en lugar de aceptarla.",
  "fuerte_b": "Wagner unió en una sola obra lo que estaba separado y creó una forma de espectáculo nueva que sigue llenando teatros. Que conmueva a las masas no prueba que esté enfermo: el arte puede ser profundo y popular a la vez.",
  "desenlace": "Se vieron por última vez en Sorrento, en otoño de 1876. A principios de 1878 se cruzaron el libreto de Parsifal, enviado por Wagner, y Humano, demasiado humano, enviado por Nietzsche, y la amistad se acabó; ese verano Wagner criticó a Nietzsche sin nombrarlo en su revista Bayreuther Blätter («Público y popularidad»). Nietzsche no publicó en vida de Wagner ningún ataque con su nombre. Cuando Wagner murió (1883), escribió que había sido muy duro ser durante seis años adversario del hombre al que más había venerado. Epílogo: en 1888 publicó El caso Wagner, que ya no tuvo respuesta.",
  "trucos": "Wagner difundió rumores sobre su salud y su vida privada, incluso en cartas a los médicos de Nietzsche; él lo supo más tarde y lo vivió como una ofensa grave (carta a Heinrich Köselitz, 21 de abril de 1883).",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Friedrich Nietzsche»",
    "url": "https://plato.stanford.edu/entries/nietzsche/"
   },
   {
    "t": "Nietzsche Source (eKGWB), carta de Nietzsche a Reinhart von Seydlitz, 4 de enero de 1878",
    "url": "http://www.nietzschesource.org/#eKGWB/BVN-1878,678"
   },
   {
    "t": "Project Gutenberg, Nietzsche, The Case of Wagner, Nietzsche Contra Wagner, and Selected Aphorisms",
    "url": "https://www.gutenberg.org/ebooks/25012"
   }
  ]
 },
 {
  "id": "freud-jung",
  "ilu_a": [
   "freud"
  ],
  "ilu_b": [],
  "a": "Freud",
  "b": "Jung",
  "fechas": "1906-1913",
  "lugar": "por carta entre Viena y Zúrich, y en persona (Viena, 1907; viaje a Estados Unidos, 1909)",
  "pol_via": "cartas",
  "pol_epoca": "con",
  "temas": [
   "hf-sospecha",
   "fil-t2"
  ],
  "pregunta": "¿Lo que mueve el inconsciente es sobre todo el deseo sexual, o una energía psíquica más amplia, con raíces en los mitos y la religión?",
  "contexto": "En abril de 1906 Freud, a punto de cumplir 50 años y muy discutido en Viena, escribió a Jung, un joven psiquiatra suizo de 30 que le había enviado sus estudios. Se conocieron en Viena en 1907 y hablaron, según Jung, trece horas seguidas. Freud lo vio como su heredero: un no judío de prestigio que sacaría al psicoanálisis del círculo vienés, y lo hizo primer presidente de la Asociación Psicoanalítica Internacional (1910).",
  "tesis_a": "Freud sostenía que la libido es energía sexual y que los conflictos sexuales de la infancia, como el complejo de Edipo, explican las neurosis. Quitar ese centro era, para él, desactivar el psicoanálisis.",
  "tesis_b": "Jung amplió la libido a una energía psíquica general. En «Transformaciones y símbolos de la libido» (1911-1912) leyó los mitos y la religión como expresiones de esa energía, no como disfraces del deseo sexual.",
  "cita_a": {
   "t": "Propongo, por tanto, que abandonemos por completo nuestras relaciones personales.",
   "ref": "Freud, carta a Jung, 3 de enero de 1913 (manuscrito en la Library of Congress)"
  },
  "fuerte_a": "Si el inconsciente se vuelve una energía vaga que lo explica todo, la teoría deja de explicar nada concreto. La sexualidad infantil al menos permite señalar conflictos precisos en cada paciente.",
  "fuerte_b": "Los mismos símbolos (héroes, renacimientos, figuras de la madre) aparecen en culturas que nunca se conocieron. Reducirlos todos al sexo empobrece lo que la mente humana produce.",
  "desenlace": "Freud cortó la relación personal en enero de 1913 y Jung dejó la presidencia de la Asociación en 1914. Jung fundó su propia escuela, la «psicología analítica», y Freud escribió ese mismo año una historia del movimiento psicoanalítico que lo excluía.",
  "trucos": "Cada uno «diagnosticó» al otro: Jung acusó a Freud de tratar a sus discípulos como pacientes, y Freud, en la carta en que lo negaba, aludió a la «enfermedad» de Jung.",
  "fuentes": [
   {
    "t": "Library of Congress, «Sigmund Freud: Conflict & Culture» · Exploded Manuscript: Freud's Letter to Jung",
    "url": "https://loc.gov/exhibits/freud/ex/131.html"
   },
   {
    "t": "Library of Congress, «Sigmund Freud: Conflict & Culture» · From the Individual to Society",
    "url": "https://www.loc.gov/exhibits/freud/freud03.html"
   }
  ]
 },
 {
  "id": "heidegger-cassirer",
  "ilu_a": [
   "heidegger"
  ],
  "ilu_b": [],
  "a": "Heidegger",
  "b": "Cassirer",
  "fechas": "1929",
  "lugar": "Davos (Suiza), en los II Cursos Universitarios Internacionales",
  "pol_via": "cara",
  "pol_epoca": "con",
  "temas": [
   "hf-existencialismo",
   "hf-kant"
  ],
  "pregunta": "¿Qué nos enseña Kant: que el ser humano es finito y está arrojado a la angustia, o que la cultura y la razón le abren a verdades que valen para todos?",
  "contexto": "En la primavera de 1929 unos cursos universitarios reunieron en Davos a centenares de estudiantes de toda Europa; entre el público estaban Carnap y Levinas. Cassirer, de 54 años, era el gran neokantiano, liberal y judío; Heidegger, de 39, acababa de publicar «Ser y tiempo» (1927). La República de Weimar estaba en crisis.",
  "tesis_a": "Heidegger leía la «Crítica de la razón pura» como una reflexión sobre la finitud humana: no conocemos como Dios, sino desde nuestra existencia limitada. La filosofía debe devolver al ser humano a esa condición, no acomodarlo en la cultura.",
  "tesis_b": "Cassirer aceptaba que somos finitos, pero sostenía que, mediante las «formas simbólicas» (lenguaje, mito, ciencia, arte), creamos verdades objetivas y necesarias, como las de la matemática o el deber moral, que superan esa finitud.",
  "fuerte_a": "Ninguna obra de la cultura nos ahorra la pregunta de cómo vivir nuestra propia existencia, limitada y mortal. Una filosofía que lo olvida se vuelve erudición cómoda.",
  "fuerte_b": "La matemática o la ley moral valen igual para cualquiera, sea quien sea y viva cuando viva. Eso muestra que la razón humana no queda encerrada en su finitud.",
  "desenlace": "Según los testigos, el público joven sintió que ganaba Heidegger, aunque la transcripción muestra un diálogo más equilibrado. En 1933 Heidegger fue rector nazi de Friburgo y Cassirer tuvo que exiliarse, y desde entonces Davos se releyó, quizá en exceso, como el choque entre humanismo liberal e irracionalismo nacionalista.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Ernst Cassirer»",
    "url": "https://plato.stanford.edu/entries/cassirer/"
   },
   {
    "t": "Notre Dame Philosophical Reviews, reseña de Peter E. Gordon, «Continental Divide: Heidegger, Cassirer, Davos»",
    "url": "https://ndpr.nd.edu/reviews/continental-divide-heidegger-cassirer-davos/"
   }
  ]
 },
 {
  "id": "wittgenstein-popper",
  "ilu_a": [
   "wittgenstein"
  ],
  "ilu_b": [
   "popper"
  ],
  "a": "Wittgenstein",
  "b": "Popper",
  "fechas": "1946",
  "lugar": "Cambridge, Club de Ciencias Morales (King's College), 25 de octubre de 1946",
  "pol_via": "cara",
  "pol_epoca": "con",
  "temas": [
   "hf-analitica",
   "fil-t1"
  ],
  "pregunta": "¿Hay problemas filosóficos auténticos, o solo enredos que nacen de usar mal el lenguaje?",
  "contexto": "Dos vieneses exiliados por el nazismo se vieron una sola vez. Wittgenstein era la figura dominante de Cambridge; Popper, que acababa de publicar «La sociedad abierta y sus enemigos» (1945), fue invitado a hablar y eligió un título provocador: «¿Hay problemas filosóficos?». Bertrand Russell estaba en la sala.",
  "tesis_a": "Para Wittgenstein, los grandes «problemas» filosóficos surgen cuando el lenguaje se usa fuera de su contexto ordinario. La tarea de la filosofía es aclarar ese uso, y entonces el problema se disuelve.",
  "tesis_b": "Para Popper existen problemas reales (sobre el conocimiento, la inducción, la moral) que no son malentendidos verbales. Reducir la filosofía a análisis del lenguaje es esquivarlos.",
  "cita_a": {
   "t": "La filosofía es una lucha contra el embrujo de nuestro entendimiento por medio de nuestro lenguaje.",
   "ref": "Wittgenstein, Investigaciones filosóficas (póstumas, 1953), § 109"
  },
  "fuerte_a": "Muchas disputas eternas desaparecen cuando se aclara qué significan las palabras en juego. Si un problema sobrevive siglos sin avanzar, quizá esté mal planteado.",
  "fuerte_b": "Preguntar si podemos conocer el mundo o qué debemos hacer no depende de un uso torpe de las palabras: las respuestas cambian lo que hacemos. Hay problemas que existen aunque el lenguaje sea perfecto.",
  "desenlace": "La discusión duró unos diez minutos y Wittgenstein se marchó antes del final. Las versiones de los testigos difieren: según el relato que Popper publicó en su autobiografía (1976), Wittgenstein le amenazó con un atizador de la chimenea, pero otros asistentes niegan esa secuencia, y el episodio quedó como leyenda.",
  "trucos": "Según el propio Popper, cuando Wittgenstein, atizador en mano, le pidió un ejemplo de regla moral, respondió: «No amenazar con atizadores a los conferenciantes invitados»; la réplica es ingeniosa, pero solo la cuenta él.",
  "fuentes": [
   {
    "t": "The Christian Science Monitor, «Dueling philosophers» (2002), sobre «Wittgenstein's Poker» de Edmonds y Eidinow",
    "url": "https://www.csmonitor.com/2002/0117/p17s02-bogn.html"
   }
  ]
 },
 {
  "id": "sartre-camus",
  "duelo": "pol-sartre-camus",
  "ilu_a": [
   "sartre"
  ],
  "ilu_b": [
   "camus"
  ],
  "a": "Sartre",
  "b": "Camus",
  "fechas": "1951-1952",
  "lugar": "por escrito, en París (el libro de Camus y la revista Les Temps modernes)",
  "pol_via": "libros",
  "pol_epoca": "con",
  "temas": [
   "hf-existencialismo",
   "fil-t6"
  ],
  "pregunta": "¿Se puede justificar la violencia revolucionaria en nombre de la historia, y hay que callar los campos de trabajo soviéticos para no ayudar al enemigo?",
  "contexto": "Sartre y Camus eran amigos desde la Resistencia y las dos grandes voces de la izquierda francesa. En plena Guerra Fría, Camus publicó «El hombre rebelde» (1951), que denunciaba los crímenes cometidos en nombre de la revolución, incluidos los campos soviéticos. Sartre se acercaba entonces al Partido Comunista Francés.",
  "tesis_a": "Sartre sostenía que no se puede juzgar la historia desde fuera, con principios puros: hay que comprometerse en ella. Criticar a la URSS sin matices hacía el juego a la derecha y abandonaba a los obreros que confiaban en el comunismo.",
  "tesis_b": "Camus defendía la rebelión contra la injusticia, pero con límites: ningún fin futuro justifica el asesinato planificado ni los campos. Quien acepta la violencia «lógica» de la revolución acaba sirviendo a nuevas tiranías.",
  "cita_a": {
   "t": "Nuestra amistad no era fácil, pero la echaré de menos.",
   "ref": "Sartre, «Respuesta a Albert Camus», Les Temps modernes, agosto de 1952"
  },
  "cita_b": {
   "t": "Me rebelo, luego somos.",
   "ref": "Camus, El hombre rebelde (1951), cap. I, «El hombre rebelde»"
  },
  "fuerte_a": "Nadie está fuera de la historia: callar o mantenerse puro también tiene consecuencias. Quien no se compromete deja las cosas como están, y eso favorece a quienes ya mandan.",
  "fuerte_b": "Si un fin futuro justifica matar hoy, cualquier crimen puede justificarse. Por eso hay que nombrar los campos, sea quien sea el que los mantiene.",
  "desenlace": "Tras la reseña de Francis Jeanson en la revista de Sartre (1952), Camus respondió con una carta y Sartre le contestó en el mismo número de agosto. No volvieron a hablarse. Cuando Camus murió en 1960, Sartre le dedicó un homenaje elogioso.",
  "trucos": "Camus dirigió su carta al «señor director», tratando a Jeanson como si no existiera, y Sartre respondió con burlas personales, como decirle que llegaba a la revista con «un pedestal portátil», y lo acusó de incompetencia filosófica, en lugar de ceñirse a los argumentos.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Albert Camus»",
    "url": "https://plato.stanford.edu/entries/camus/"
   },
   {
    "t": "Another Look (Stanford University), «The Camus-Sartre spat and a «unique dissident voice.»»",
    "url": "https://anotherlook.stanford.edu/?p=2391"
   }
  ]
 },
 {
  "id": "popper-adorno",
  "ilu_a": [
   "popper"
  ],
  "ilu_b": [
   "adorno"
  ],
  "a": "Popper",
  "b": "Adorno",
  "fechas": "1961-1969",
  "lugar": "Tubinga, congreso de la Sociedad Alemana de Sociología (1961), y después por escrito",
  "pol_via": "cara",
  "pol_epoca": "con",
  "temas": [
   "hf-metodos",
   "fil-t3"
  ],
  "pregunta": "¿Deben las ciencias sociales usar el mismo método que las naturales, o la sociedad exige un pensamiento crítico de la totalidad?",
  "contexto": "En 1961 los organizadores del congreso de Tubinga pidieron a Popper y a Adorno, exiliados de la época nazi, dos ponencias sobre «la lógica de las ciencias sociales». Popper defendía el «racionalismo crítico»; Adorno era la cabeza de la Escuela de Fráncfort. Después entraron Habermas y Hans Albert, y la polémica siguió hasta 1969.",
  "tesis_a": "Popper sostenía que toda ciencia, también la social, avanza proponiendo hipótesis y sometiéndolas a crítica y refutación. La objetividad no depende de cada investigador, sino de la crítica pública.",
  "tesis_b": "Adorno respondía que la sociedad es una totalidad contradictoria. Limitarse a hechos medibles reproduce lo que existe; la teoría social debe criticar esa sociedad, no solo comprobar hipótesis sobre ella.",
  "fuerte_a": "Si una teoría social no puede ponerse a prueba con hechos, nadie puede mostrar que se equivoca, y entonces vale tanto como una opinión. La crítica pública es el mejor control contra el dogmatismo.",
  "fuerte_b": "Los «hechos» sociales ya están moldeados por la sociedad que los produce: el paro o el consumo no son como las piedras. Estudiarlos sin preguntar por el conjunto acaba justificando el orden existente.",
  "desenlace": "En Tubinga hubo menos choque del esperado, y Dahrendorf, que comentó las ponencias, lo lamentó. La disputa se endureció entre Habermas y Albert, y en 1969 salió el volumen «La disputa del positivismo en la sociología alemana». Popper rechazó siempre la etiqueta, porque él no se consideraba positivista.",
  "trucos": "El nombre mismo fue un arma: el bando de Fráncfort llamó «positivistas» a Popper y Albert, que se tenían por críticos del positivismo.",
  "fuentes": [
   {
    "t": "Wikipedia (en inglés), «Positivism dispute»",
    "url": "https://en.wikipedia.org/wiki/Positivism_dispute"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «Critical Theory (Frankfurt School)»",
    "url": "https://plato.stanford.edu/entries/critical-theory/"
   }
  ]
 },
 {
  "id": "arendt-scholem",
  "ilu_a": [
   "arendt"
  ],
  "ilu_b": [],
  "a": "Arendt",
  "b": "Scholem",
  "fechas": "1963",
  "lugar": "por carta entre Jerusalén y Nueva York",
  "pol_via": "cartas",
  "pol_epoca": "con",
  "temas": [
   "fil-t5",
   "hf-siglo21"
  ],
  "pregunta": "¿Cómo se debe juzgar y contar el Holocausto: con distancia e ironía para entender a los culpables, o desde la lealtad al pueblo judío?",
  "contexto": "Arendt y Scholem, el gran estudioso de la mística judía, eran amigos desde los años treinta. En 1963 Arendt publicó «Eichmann en Jerusalén», su crónica del juicio a un organizador nazi de las deportaciones, donde habló de la «banalidad del mal» y criticó a los consejos judíos que colaboraron con los nazis. El libro levantó una enorme polémica.",
  "tesis_a": "Arendt sostenía que Eichmann no era un monstruo, sino un hombre incapaz de pensar desde el lugar de los demás, y que eso no le quitaba culpa. Juzgar exige independencia: ella no hablaba en nombre de ningún pueblo ni organización.",
  "tesis_b": "Scholem no discutía sobre todo los datos, sino el tono: lo veía frío, a veces burlón, ante una catástrofe reciente. Le reprochaba juzgar a los consejos judíos sin haber vivido aquella situación y le echaba en falta amor al pueblo judío.",
  "cita_a": {
   "t": "Ahora opino que el mal nunca es «radical», que solo es extremo, y que no tiene profundidad ni dimensión demoníaca alguna.",
   "ref": "Arendt, carta a Scholem, 24 de julio de 1963"
  },
  "cita_b": {
   "t": "En la tradición judía hay un concepto […] que conocemos como Ahabath Israel: amor al pueblo judío. En ti, querida Hannah, […] apenas encuentro rastro de él.",
   "ref": "Scholem, carta a Arendt, 23 de junio de 1963"
  },
  "fuerte_a": "Si al culpable lo pintamos como un monstruo, nos tranquilizamos pensando que no se parece a nosotros. Ver que gente corriente puede colaborar con el horror por no pensar es más incómodo, y más útil.",
  "fuerte_b": "Quien no vivió la persecución no puede juzgar con ligereza las decisiones de quienes estaban bajo amenaza de muerte. El tono también forma parte de la verdad que se cuenta.",
  "desenlace": "Las dos cartas se publicaron (en la prensa suiza en 1963 y en la revista Encounter en 1964) y la amistad de casi treinta años no se recuperó. La expresión «banalidad del mal» sigue discutiéndose hoy.",
  "trucos": "Arendt se defendió diciendo que Scholem le atribuía cosas que no había escrito: por ejemplo, no captó la ironía de una frase en la que ella repetía las palabras del propio Eichmann.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Hannah Arendt»",
    "url": "https://plato.stanford.edu/entries/arendt/"
   },
   {
    "t": "Hannah Arendt Center (Bard College), «Irony as an Antidote to Thoughtlessness» (2013)",
    "url": "https://hac.bard.edu/amor-mundi/irony-as-an-antidote-to-thoughtlessness-2013-10-07"
   }
  ]
 },
 {
  "id": "chomsky-foucault",
  "ilu_a": [],
  "ilu_b": [
   "foucault"
  ],
  "a": "Chomsky",
  "b": "Foucault",
  "fechas": "1971",
  "lugar": "Universidad Tecnológica de Eindhoven (Países Bajos), grabado el 22 de octubre de 1971 para la televisión neerlandesa",
  "pol_via": "cara",
  "pol_epoca": "con",
  "temas": [
   "hf-posmodernidad",
   "fil-t2",
   "fil-t6"
  ],
  "pregunta": "¿Existe una naturaleza humana? ¿La justicia es un ideal real o una máscara del poder?",
  "contexto": "El filósofo Fons Elders organizó para la televisión neerlandesa una serie de debates ante público. Chomsky, lingüista estadounidense, era conocido por su oposición a la guerra de Vietnam; Foucault, filósofo francés, estudiaba cómo el saber y el poder moldean a las personas. Fue tres años después de Mayo del 68.",
  "tesis_a": "Chomsky sostenía que los niños aprenden a hablar con tan pocos datos que deben nacer con una capacidad innata. Del mismo modo, hay una naturaleza humana con un deseo de creatividad y libertad, y desde ella se puede apelar a una justicia mejor que la de las leyes vigentes.",
  "tesis_b": "Foucault desconfiaba de la idea de «naturaleza humana»: la veía como un concepto que cada época fabrica. Las ideas de justicia nacen dentro de una sociedad de clases, y la lucha política se entiende mejor en términos de poder.",
  "cita_b": {
   "t": "Se hace la guerra para ganar, no porque sea justa.",
   "ref": "Foucault, debate con Chomsky en la televisión neerlandesa (1971), transcripción «Human Nature: Justice versus Power»"
  },
  "fuerte_a": "Si no hay ninguna idea de justicia que vaya más allá del poder, no podemos decir que una revolución es mejor que lo que derriba. Necesitamos algún criterio para criticar a los que ganan.",
  "fuerte_b": "Las «verdades eternas» sobre lo humano o lo justo han cambiado de una época a otra, y a menudo han servido a quien mandaba. Tomarlas como naturales impide ver cómo nos moldea el poder.",
  "desenlace": "No llegaron a ningún acuerdo. La televisión emitió el debate el 28 de noviembre de 1971 y la transcripción completa se publicó en 1974; hoy es un clásico del choque entre universalismo y crítica del poder.",
  "fuentes": [
   {
    "t": "chomsky.info, «Human Nature: Justice versus Power» (transcripción del debate)",
    "url": "https://chomsky.info/1971xxxx/"
   },
   {
    "t": "Cursor (Universidad Tecnológica de Eindhoven), «Chomsky & Foucault debate still inspires 50 years after the fact» (2022)",
    "url": "https://www.cursor.tue.nl/en/achtergrond/2022/september/week-3/chomsky-foucault-debate-still-inspires-50-years-after-the-fact"
   }
  ]
 },
 {
  "id": "rawls-nozick",
  "ilu_a": [
   "rawls"
  ],
  "ilu_b": [],
  "a": "Rawls",
  "b": "Nozick",
  "fechas": "1971-1977",
  "lugar": "por escrito, desde el departamento de Filosofía de Harvard",
  "pol_via": "libros",
  "pol_epoca": "con",
  "temas": [
   "hf-capitalismo",
   "fil-t6"
  ],
  "pregunta": "¿Es justo que el Estado redistribuya la riqueza para ayudar a los que menos tienen, o eso viola la libertad y la propiedad de las personas?",
  "contexto": "Rawls y Nozick eran colegas en Harvard. En 1971 Rawls publicó «Teoría de la justicia», que dio un fundamento filosófico al Estado de bienestar. En 1974 Nozick, más joven, le contestó con «Anarquía, Estado y utopía», defensa de un Estado mínimo, en años de crisis económica y de debate sobre los impuestos.",
  "tesis_a": "Rawls propone imaginar que elegimos las reglas de la sociedad tras un «velo de ignorancia», sin saber qué lugar ocuparemos. Así elegiríamos libertades iguales para todos y solo aceptaríamos desigualdades que beneficien a los menos favorecidos (el «principio de diferencia»).",
  "tesis_b": "Nozick sostiene que un reparto es justo si lo que cada uno tiene se adquirió y se transmitió de forma justa, sin robo ni fraude. Imponer un reparto ideal obliga a interferir sin cesar en los intercambios libres, y cobrar impuestos para redistribuir es usar a unos para los fines de otros.",
  "cita_a": {
   "t": "La justicia es la primera virtud de las instituciones sociales, como la verdad lo es de los sistemas de pensamiento.",
   "ref": "Rawls, Teoría de la justicia (1971), § 1"
  },
  "cita_b": {
   "t": "Los individuos tienen derechos, y hay cosas que ninguna persona ni grupo puede hacerles sin violarlos.",
   "ref": "Nozick, Anarquía, Estado y utopía (1974), prefacio"
  },
  "fuerte_a": "Nadie merece el talento ni la familia en que nace: son una lotería. Si nadie sabe qué le tocará, lo razonable es asegurar que al peor situado le vaya lo mejor posible.",
  "fuerte_b": "Imagina un reparto perfecto. Si miles de personas pagan libremente por ver jugar a un gran deportista, él acaba siendo rico y nadie ha sufrido injusticia. Mantener el reparto ideal exigiría impedir o corregir sin parar esas elecciones libres.",
  "desenlace": "Rawls respondió en 1977 que la justicia se aplica a la «estructura básica» de la sociedad, no a cada intercambio. Nozick admitió en 1989 que su postura libertaria le parecía ya insuficiente. Los dos libros siguen siendo los polos del debate entre igualitarismo y libertarismo.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Robert Nozick's Political Philosophy»",
    "url": "https://plato.stanford.edu/entries/nozick-political/"
   },
   {
    "t": "Stanford Encyclopedia of Philosophy, «John Rawls»",
    "url": "https://plato.stanford.edu/entries/rawls/"
   }
  ]
 },
 {
  "id": "habermas-posmodernos",
  "ilu_a": [
   "habermas"
  ],
  "ilu_b": [
   "lyotard",
   "derrida",
   "foucault"
  ],
  "a": "Habermas",
  "b": "Los posmodernos (Lyotard, Derrida, Foucault)",
  "fechas": "1979-1985",
  "lugar": "por escrito y en conferencias, entre Fráncfort y París",
  "pol_via": "libros",
  "pol_epoca": "con",
  "temas": [
   "hf-posmodernidad",
   "hf-ilustracion"
  ],
  "pregunta": "¿Se acabaron los grandes relatos de la modernidad, o la Ilustración es un proyecto inacabado que hay que corregir y continuar?",
  "contexto": "En 1979 Lyotard publicó «La condición posmoderna», que puso de moda la palabra. Tras el desencanto del 68 y con la memoria alemana del Holocausto muy presente, Habermas, heredero de la Escuela de Fráncfort, respondió en 1980 con el discurso «La modernidad, un proyecto inacabado», al recibir el Premio Adorno.",
  "tesis_a": "Habermas sostiene que los males modernos vienen de una razón deformada por el dinero y el poder, no de la razón misma. La salida es la «razón comunicativa»: normas que todos los afectados podrían aceptar en un diálogo libre.",
  "tesis_b": "Lyotard, Derrida y Foucault desconfiaban de los relatos que prometen emancipación universal (progreso, revolución, razón). Cada uno a su manera mostraba cómo esos discursos excluyen y dominan.",
  "cita_b": {
   "t": "Simplificando al máximo, se tiene por «posmoderna» la incredulidad con respecto a los metarrelatos.",
   "ref": "Lyotard, La condición posmoderna (1979), introducción"
  },
  "fuerte_a": "Quien critica la razón usa razones para hacerlo: si la razón fuera solo poder, su crítica tampoco valdría. Es una «contradicción performativa», y la Ilustración se corrige con más diálogo racional, no con menos.",
  "fuerte_b": "En nombre de la razón y del progreso también se colonizó, se encerró y se excluyó. Un consenso que pretende hablar por todos acaba silenciando a quien no cabe en su lenguaje.",
  "desenlace": "Habermas lo sistematizó en «El discurso filosófico de la modernidad» (1985) y Lyotard le respondió en 1982. Foucault murió en 1984, y Derrida y Habermas, tras años de reproches, firmaron juntos en 2003 un artículo sobre Europa.",
  "trucos": "Habermas llamó en 1980 «jóvenes conservadores» a Foucault y Derrida, una etiqueta política que ellos rechazaban; en 1988 Derrida le reprochó que lo había leído mal, o ni siquiera lo había leído.",
  "fuentes": [
   {
    "t": "Stanford Encyclopedia of Philosophy, «Postmodernism»",
    "url": "https://plato.stanford.edu/entries/postmodernism/"
   },
   {
    "t": "Philosophy Now, «Political Philosophy After Metaphysics: Habermas & Lyotard» (2010)",
    "url": "https://philosophynow.org/issues/77/Political_Philosophy_After_Metaphysics_Habermas_and_Lyotard"
   }
  ]
 }
];
