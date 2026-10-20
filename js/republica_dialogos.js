"use strict";
/* Datos del juego «La República» (platonview.js) — 20-10-2026.
   · regimenes: la degeneración del libro VIII (545c-569c). La ciudad empieza como aristocracia y baja un escalón
     cada vez que la armonía cae por debajo de «min»; no se sube nunca (para Platón, «todo lo que nace se corrompe», 546a).
   · dialogos: dilemas con un interlocutor de la República. Salen 3 por partida (antes de los turnos 2, 4 y 6).
     ef: arm (armonía), ap (puntos de acción), sj (sabiduría de cada guardián, ±), mov (productores que pasan a guerreros).
     req: condición de la ciudad («sabios»: algún guardián de sabiduría plena; «justos»: al menos la mitad de los
     guardianes son plenamente justos; «ejercito»: guerreros ≥ 2 × guardianes); con req, «si» y «no» llevan ef y r.
   · glo: ids del glosario (#glosario/<id>).
   Citas: traducción propia del griego (Burnet), con el lugar de Stephanus; el griego, siempre transliterado.
   Se traduce como dato (DATA_FILES de web_i18n/i18n_lib.js). */
const REP_DIAL = {
  regimenes: [
    { id:"aristocracia", emoji:"🏛️", min:8, name:"Aristocracia",
      lema:"Gobiernan los mejores: la razón manda en la ciudad como en el alma.",
      causa:"Es la ciudad justa: cada clase hace lo suyo, τὰ αὑτοῦ πράττειν (*tà hautoû práttein*).",
      cita:"«Hacer cada uno lo suyo y no meterse en muchas cosas es la justicia.»", loc:"República IV, 433a",
      glo:["g-la-ciudad-justa", "g-justicia"] },
    { id:"timocracia", emoji:"🛡️", min:6, name:"Timocracia",
      lema:"Gobierna el ánimo: el honor y la guerra pesan más que la razón.",
      causa:"La discordia entra entre los que gobiernan: los mejores pierden el mando y lo toman los amantes del honor.",
      cita:"«Toda constitución cambia por obra de quienes tienen el poder, cuando entre ellos mismos surge la discordia.»", loc:"República VIII, 545d",
      glo:["g-timocracia", "g-alma-irascible"] },
    { id:"oligarquia", emoji:"💰", min:4, name:"Oligarquía",
      lema:"Gobiernan los ricos: la riqueza sustituye al honor.",
      causa:"El amor al dinero desplaza a la virtud, y la ciudad se parte en dos: los ricos y los pobres.",
      cita:"«Cuanto más estiman la riqueza, menos estiman la virtud.»", loc:"República VIII, 550e",
      glo:["g-alma-concupiscible"] },
    { id:"democracia", emoji:"🗳️", min:2, name:"Democracia",
      lema:"Gobierna el pueblo: la libertad es el bien supremo.",
      causa:"Los pobres vencen a los ricos y reparten entre todos los cargos, muchas veces por sorteo.",
      cita:"«La ciudad se llena de libertad y de franqueza, y en ella cada cual puede hacer lo que quiera.»", loc:"República VIII, 557b",
      glo:[] },
    { id:"tirania", emoji:"⛓️", min:-999, name:"Tiranía",
      lema:"Gobierna uno solo, esclavo de sus deseos.",
      causa:"Un protector del pueblo se hace con la guardia y con el poder, y ya no lo suelta.",
      cita:"«La libertad excesiva no parece convertirse en otra cosa que en excesiva esclavitud, tanto para el particular como para la ciudad.»", loc:"República VIII, 564a",
      glo:["g-tirania"] }
  ],
  dialogos: [
    { id:"trasimaco", emoji:"🦁", quien:"Trasímaco", loc:"República I, 338c",
      situacion:"El sofista Trasímaco irrumpe en la asamblea y grita que tus guardianes son unos ingenuos.",
      cita:"«Yo digo que lo justo no es otra cosa que lo que le conviene al más fuerte.»",
      griego:"τὸ τοῦ κρείττονος συμφέρον (*tò toû kreíttonos symphéron*): «lo que conviene al más fuerte».",
      pregunta:"¿Qué le respondes?",
      opts:[
        { t:"Darle la razón: que los guardianes gobiernen en su propio provecho.", razon:"Así nunca les faltarán fuerza ni ganas de mandar.",
          ef:{ arm:-1, ap:2 }, r:"Los guardianes cobran por gobernar: tienes más recursos (+2 AP), pero el pueblo desconfía (−1 de armonía)." },
        { t:"Refutarle: quien gobierna bien busca el bien de los gobernados, como el médico el del enfermo.", razon:"Un arte mira por aquello de lo que se ocupa, no por quien lo ejerce.",
          ef:{ arm:1, ap:-1 }, r:"Convences a la asamblea (+1 de armonía), pero el debate te lleva tiempo (−1 AP)." },
        { t:"Expulsarlo: con un sofista no se discute.", razon:"Sus palabras siembran desorden entre los jóvenes.",
          ef:{ arm:1, sj:-1 }, r:"La asamblea calla (+1 de armonía), pero tus guardianes pierden la costumbre de dar razones (−1 de sabiduría cada uno)." }
      ],
      platon:{ txt:"«Ningún gobernante, en cuanto es gobernante, examina ni ordena lo que le conviene a él, sino lo que conviene al gobernado.»", loc:"República I, 342e" },
      critica:{ autor:"Trasímaco", txt:"«Crees que los pastores y los boyeros miran por el bien de las ovejas o de los bueyes, y los ceban y los cuidan pensando en otra cosa que en el bien de sus amos y en el suyo propio.»", loc:"República I, 343b" },
      glo:["g-justicia", "g-sofistas"] },

    { id:"giges", emoji:"💍", quien:"Glaucón", loc:"República II, 359c-360d",
      situacion:"Glaucón cuenta la historia de Giges, un pastor que encontró un anillo que lo hacía invisible y lo usó para hacerse con el poder. Ahora un guardián de tu ciudad ha encontrado uno igual.",
      cita:"«Nadie es justo por su voluntad, sino obligado.»",
      griego:"", pregunta:"¿Qué haces?",
      opts:[
        { t:"Más vigilancia y más castigos: que nadie escape a la mirada de la ciudad.", razon:"Si la justicia nace del miedo, hay que dar miedo.",
          ef:{ mov:1 }, r:"Un productor pasa a ser guerrero para vigilar. Pero ¿quién vigila a los vigilantes?" },
        { t:"Confiar en la educación: el justo lo es aunque nadie le vea.", razon:"La justicia es un orden del alma, no un miedo a ser visto.",
          req:"justos",
          si:{ ef:{ arm:2 }, r:"Tus guardianes son justos de verdad: el anillo no los tienta (+2 de armonía)." },
          no:{ ef:{ arm:-2 }, r:"Tus guardianes no están bien educados y el del anillo abusa de él (−2 de armonía)." } },
        { t:"Que los guardianes vivan a la vista de todos, sin casas cerradas ni oro.", razon:"Es lo que propone Platón para ellos (416d-417a).",
          ef:{ arm:1, ap:-1 }, r:"Nadie puede esconderse (+1 de armonía), pero vigilar cuesta (−1 AP)." }
      ],
      platon:{ txt:"«Yo la pongo entre los bienes más bellos: los que ha de amar, por sí mismos y por lo que resulta de ellos, quien vaya a ser dichoso.»", loc:"República II, 358a" },
      critica:{ autor:"Glaucón", txt:"«Si alguien con ese poder no quisiera cometer nunca injusticia ni tocar lo ajeno, a quienes lo vieran les parecería el más desgraciado y el más insensato.»", loc:"República II, 360d" },
      glo:["g-justicia", "g-virtud"] },

    { id:"adimanto", emoji:"🏠", quien:"Adimanto", loc:"República IV, 419a",
      situacion:"Adimanto se queja: tus guardianes no tienen tierras, ni casas, ni oro. Mandan en la ciudad, pero viven como soldados a sueldo.",
      cita:"«¿Qué dirías en tu defensa, Sócrates, si alguien dijera que no haces nada felices a estos hombres, y eso por culpa de ellos mismos?»",
      griego:"", pregunta:"¿Qué decides?",
      opts:[
        { t:"Darles casas, tierras y oro: quien gobierna merece su recompensa.", razon:"Un guardián feliz gobierna mejor.",
          ef:{ arm:-2, ap:2 }, r:"Están contentos (+2 AP), pero empiezan a mirar por su hacienda: según Platón, así se vuelven amos en vez de aliados (417a-b) (−2 de armonía)." },
        { t:"Mantenerlos sin propiedad: la ciudad no se funda para que una clase sea feliz.", razon:"Lo que importa es la felicidad de la ciudad entera.",
          ef:{ arm:1 }, r:"La ciudad sigue unida (+1 de armonía). Queda abierta la pregunta: ¿pueden ser felices así?" }
      ],
      platon:{ txt:"«No fundamos la ciudad mirando a que una sola clase fuera especialmente feliz, sino a que lo fuera al máximo la ciudad entera.»", loc:"República IV, 420b" },
      critica:{ autor:"Aristóteles", txt:"«No es posible que el todo sea feliz si no lo son la mayoría de sus partes, o todas, o algunas.»", loc:"Política II 5, 1264b17-19" },
      glo:["g-la-ciudad-justa"] },

    { id:"metales", emoji:"🥇", quien:"Sócrates", loc:"República III, 414b-c",
      situacion:"Hace falta que todos acepten su lugar en la ciudad. Sócrates propone contar un mito: todos nacisteis de la tierra y sois hermanos, pero el dios mezcló oro en unos, plata en otros, y hierro y bronce en los demás.",
      cita:"«¿Cómo podríamos inventar una sola mentira noble para persuadir, ante todo, a los gobernantes mismos y, si no, al resto de la ciudad?»",
      griego:"γενναῖον ψεῦδος (*gennaîon pseûdos*): «mentira noble», o «ficción noble», según quién traduzca.",
      pregunta:"¿Cuentas el mito?",
      opts:[
        { t:"Contar el mito de los metales.", razon:"Una ciudad unida necesita un relato común.",
          ef:{ arm:2 }, r:"La ciudad acepta su orden (+2 de armonía). Pero lo acepta porque cree un mito, no porque lo entienda." },
        { t:"Decir la verdad: las clases son un reparto de funciones que se puede discutir.", razon:"Quien obedece tiene derecho a saber por qué.",
          req:"sabios",
          si:{ ef:{ arm:1 }, r:"Tus guardianes saben explicarlo y la asamblea lo acepta (+1 de armonía)." },
          no:{ ef:{ arm:-1 }, r:"Nadie sabe explicar el porqué y crece el descontento (−1 de armonía)." } },
        { t:"Que cada cual elija su clase.", razon:"Nadie debería quedar atado a su nacimiento.",
          ef:{ arm:-1, ap:1 }, r:"Muchos quieren mandar y pocos trabajar: la ciudad pierde orden (−1 de armonía), aunque gana iniciativa (+1 AP)." }
      ],
      platon:{ txt:"«Todos los de la ciudad sois hermanos, pero el dios, al formaros, mezcló oro en quienes son capaces de gobernar, plata en los auxiliares, y hierro y bronce en los labradores y en los demás artesanos.» Y si de padres de oro nace un hijo de bronce, debe pasar a la clase que le corresponde, y al revés.", loc:"República III, 415a-c" },
      critica:{ autor:"Karl Popper", txt:"Ve en la mentira noble una propaganda que los gobernantes usan para que los gobernados acepten su lugar (paráfrasis). Otros lectores la entienden como un mito de fundación, como los que tiene toda comunidad.", loc:"La sociedad abierta y sus enemigos, I, cap. 8 (1945)" },
      glo:["g-las-tres-partes-del-alma"] },

    { id:"comunidad", emoji:"👪", quien:"Sócrates", loc:"República V, 457c-d",
      situacion:"Sócrates propone que los guardianes no tengan familia propia: así nadie dirá «esto es mío» y la ciudad será una sola familia.",
      cita:"«Estas mujeres serán todas comunes de todos estos hombres, y ninguna vivirá en privado con ninguno; y los hijos serán también comunes, y ni el padre conocerá a su hijo ni el hijo a su padre.»",
      griego:"", pregunta:"¿Lo aplicas a tus guardianes?",
      opts:[
        { t:"Aplicarlo: sin familias privadas, nada divide a los guardianes.", razon:"Lo que une a la ciudad es su mayor bien.",
          ef:{ arm:2, ap:-2 }, r:"Los guardianes forman un solo cuerpo (+2 de armonía), pero criar en común a todos los niños cuesta mucho esfuerzo (−2 AP)." },
        { t:"Respetar las familias de los guardianes.", razon:"Cada uno cuida mejor de lo que es suyo.",
          ef:{ arm:-1, ap:1 }, r:"Cada guardián cuida de los suyos (+1 AP), pero aparecen el «mío» y el «tuyo» (−1 de armonía)." }
      ],
      platon:{ txt:"«¿Tenemos algún mal mayor para la ciudad que lo que la desgarra y la hace muchas en vez de una? ¿O algún bien mayor que lo que la une y la hace una?»", loc:"República V, 462a-b" },
      critica:{ autor:"Aristóteles", txt:"«Lo que es común a muchísimos recibe el mínimo cuidado.»", loc:"Política II 3, 1261b33-34" },
      glo:["g-la-ciudad-justa"] },

    { id:"filosofo", emoji:"🦉", quien:"Glaucón", loc:"República V, 473c-d",
      situacion:"La asamblea discute quién debe gobernar. Sócrates lanza la propuesta que, según él mismo, hará reír a todos.",
      cita:"«Si los filósofos no reinan en las ciudades, o los que ahora se llaman reyes y soberanos no filosofan de verdad y como es debido, no habrá tregua de males para las ciudades, querido Glaucón, ni creo que para el género humano.»",
      griego:"", pregunta:"¿A quién das el poder?",
      opts:[
        { t:"A los más sabios.", razon:"Gobernar es un saber, como pilotar una nave.",
          req:"sabios",
          si:{ ef:{ arm:2 }, r:"Tienes guardianes de sabiduría plena: gobiernan con acierto (+2 de armonía)." },
          no:{ ef:{ arm:-1 }, r:"Ninguno de tus guardianes es plenamente sabio: los «sabios» decepcionan (−1 de armonía)." } },
        { t:"A quien salga por sorteo, como en la Atenas democrática.", razon:"Todos los ciudadanos valen lo mismo.",
          ef:{ arm:-1, ap:2 }, r:"La asamblea se implica (+2 AP), pero para Platón es dejar el timón a quien no sabe navegar (−1 de armonía)." },
        { t:"A los más valientes, como en Esparta.", razon:"Quien defiende la ciudad merece mandar en ella.",
          req:"ejercito",
          si:{ ef:{ arm:1 }, r:"Tu ejército es fuerte y mantiene el orden (+1 de armonía), aunque el honor empieza a pesar más que la razón." },
          no:{ ef:{ arm:-2 }, r:"Tus guerreros son pocos y nadie los respeta (−2 de armonía)." } }
      ],
      platon:{ txt:"«El verdadero piloto necesita ocuparse del año, de las estaciones, del cielo, de los astros, de los vientos y de todo lo que toca a su arte, si de verdad ha de gobernar una nave.»", loc:"República VI, 488d" },
      critica:{ autor:"Karl Popper", txt:"Propone cambiar la pregunta «¿quién debe gobernar?» por esta otra: ¿cómo organizar las instituciones para que los malos gobernantes hagan el menor daño posible? (paráfrasis)", loc:"La sociedad abierta y sus enemigos, I, cap. 7 (1945)" },
      glo:["g-el-bien", "g-sabiduria"] },

    { id:"caverna", emoji:"🕯️", quien:"Glaucón", loc:"República VII, 519c-520d",
      situacion:"Tus mejores guardianes han salido de la caverna y contemplan el Bien. No quieren volver abajo, a gobernar entre sombras.",
      cita:"«Así que tenéis que bajar, cada uno a su vez, a la morada común de los demás.»",
      griego:"καταβατέον (*katabatéon*): «hay que bajar».",
      pregunta:"¿Les obligas a volver?",
      opts:[
        { t:"Obligarles a bajar por turnos.", razon:"Deben a la ciudad la educación que recibieron.",
          ef:{ arm:2, sj:-1 }, r:"Vuelven a gobernar (+2 de armonía), aunque, de vuelta en la oscuridad, sus ojos tardan en acostumbrarse a las sombras (−1 de sabiduría cada uno)." },
        { t:"Dejarles contemplar: se han ganado esa libertad.", razon:"No hay vida más alta que la del que conoce.",
          ef:{ arm:-2, sj:1 }, r:"Son más sabios que nunca (+1 de sabiduría cada uno), pero la ciudad queda en manos de quienes no han salido (−2 de armonía)." }
      ],
      platon:{ txt:"«A la ley no le importa que una sola clase de la ciudad lo pase especialmente bien, sino que procura que eso ocurra en la ciudad entera.»", loc:"República VII, 519e" },
      critica:{ autor:"Aristóteles", txt:"La vida contemplativa es la más alta y la que más se basta a sí misma (paráfrasis): ¿por qué habría de abandonarla el sabio?", loc:"Ética a Nicómaco X 7, 1177a12-b1" },
      glo:["g-el-mito-de-la-caverna", "g-el-bien", "g-dialectica-ap"] },

    { id:"poetas", emoji:"🎭", quien:"Adimanto", loc:"República II, 377b-c",
      situacion:"Los niños de la ciudad escuchan a Homero y a Hesíodo: dioses que mienten, se pelean y se vengan. Sócrates propone vigilar los mitos que se cuentan.",
      cita:"«Primero, según parece, hemos de vigilar a los que componen mitos: aceptar el que compongan bien y rechazar el que no.»",
      griego:"", pregunta:"¿Qué haces con los poetas?",
      opts:[
        { t:"Censurar los mitos que muestran a los dioses injustos o cobardes.", razon:"Los niños imitan lo que oyen.",
          ef:{ arm:1, ap:-1 }, r:"Los jóvenes crecen con modelos de virtud (+1 de armonía), pero revisar los mitos cuesta (−1 AP)." },
        { t:"Dejar libres a los poetas.", razon:"La ciudad se piensa también con sus historias.",
          ef:{ arm:-1, ap:2 }, r:"Florecen el teatro y la poesía (+2 AP), pero los jóvenes aprenden de dioses que se vengan (−1 de armonía)." },
        { t:"Expulsar a toda la poesía, salvo los himnos a los dioses y los elogios de los buenos.", razon:"Es lo que acaba proponiendo Platón en el libro X.",
          ef:{ arm:2, sj:-1 }, r:"Reina el orden (+2 de armonía), pero la ciudad pierde una manera de aprender (−1 de sabiduría cada uno)." }
      ],
      platon:{ txt:"«De la poesía solo hay que admitir en la ciudad los himnos a los dioses y los elogios de los buenos.»", loc:"República X, 607a" },
      critica:{ autor:"Aristóteles", txt:"Imitar es connatural al ser humano desde niño, y por la imitación adquiere sus primeros conocimientos (paráfrasis).", loc:"Poética 4, 1448b5-9" },
      glo:["g-paideia"] }
  ],
  ui: {
    regTitulo:"Régimen de tu ciudad (República, libro VIII)",
    degenera:"Tu ciudad degenera",
    seguir:"Seguir →",
    dialogo:"Diálogo",
    elige:"Elige tu postura y su razón:",
    porque:"Porque",
    resultado:"Lo que pasa en tu ciudad",
    responde:"Lo que responde Platón",
    objeta:"Lo que se le objeta",
    abierto:"Debate abierto: el juego no dice qué postura es la buena. Tú decides, con razones.",
    finRegimen:"Régimen final",
    hunde:"La ciudad se hunde en la tiranía",
    escalera:"Así ordena Platón los regímenes, de mejor a peor. Aristóteles los ordena de otro modo: de las formas desviadas, la democracia es la más moderada y la tiranía la peor (Política IV 2, 1289a-b). ¿Es la democracia una degeneración o la mejor defensa contra el tirano?",
    posturas:"Tus posturas en los diálogos",
    disertacion:"Para tu disertación",
    dTesis:"Tesis: ¿puede una ciudad ser justa si cada clase se limita a hacer lo suyo?",
    dPlaton:"Argumento de Platón: la justicia es la armonía de las partes, en la ciudad como en el alma (República IV, 433a y 441d-e).",
    dObjecion:"Objeción: elige una de las críticas que salieron en tu partida (Trasímaco, Glaucón, Aristóteles, Popper…) y explícala con tus palabras.",
    dTuya:"Tu conclusión: ¿qué postura de tu partida defenderías por escrito, y por qué?",
    glosario:"Conceptos en el glosario",
    sinDialogos:"En esta partida no hubo diálogos.",
    hudReg:"Régimen"
  }
};
