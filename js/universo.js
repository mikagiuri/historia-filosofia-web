"use strict";
/* ===== El universo aristotélico (19-10, Bachillerato) =====
   Unidad transversal de biología, química, física y filosofía, con el patrón del Taller de Leibniz:
   la prosa aquí (UNIVERSO) y las piezas interactivas en universoview.js. Plan y fuentes en
   lab_iesmdb\encargos\plan_universo_aristotelico_2026-10-19.md; imágenes y créditos en
   recursos\imagenes_museos\universo_aristotelico\ (manifest.json) y web/media/galeria_museo/universo/.
   Referencias comprobadas: Sobre la generación y la corrupción II 3, 330b3-5 y 331a4-6 (C. Mirrione, Peitho 2021;
   trad. de H. H. Joachim, 1922); J. de Acosta, Historia natural y moral de las Indias (1590), libro II, cap. IX
   (Project Gutenberg 70219); carta de Darwin a William Ogle, 22-2-1882 (Darwin Correspondence Project).
   El resto de Aristóteles se cita por libro y capítulo: las líneas Bekker quedan pendientes de cotejo. */

const UNIVERSO = {
  retrato: "Aristóteles, grabado de Enea Vico para el <em>Speculum Romanae Magnificentiae</em> (1553). Metropolitan Museum of Art, CC0.",
  intro: "Aristóteles no separaba la filosofía de las ciencias: quería saber <strong>por qué cambian las cosas</strong>, ya fuera una piedra que cae, el agua que hierve o un pollo que crece dentro del huevo. Para él, física, química, biología y filosofía eran una misma pregunta.",
  pista: "Aquí vas a recorrer su universo pieza a pieza: qué vio, cómo lo explicó, qué acertó, qué se abandonó después y por qué.",

  indice: [
    { id: "cambio", t: "Cómo se explica un cambio", m: "Filosofía" },
    { id: "elementos", t: "Cuatro elementos, dos pares de cualidades", m: "Química" },
    { id: "lugares", t: "Cada cosa a su sitio", m: "Física" },
    { id: "alma", t: "El alma, forma del viviente", m: "Biología" },
    { id: "naturalista", t: "Aristóteles en Lesbos: el primer naturalista", m: "Biología" },
    { id: "grietas", t: "Las grietas: lo que no encajaba", m: "Ciencia moderna" },
    { id: "puente", t: "Qué se quedó y qué se fue", m: "Ciencia moderna" },
    { id: "preguntas", t: "Para pensar", m: "Todas" }
  ],

  /* imágenes: f (fichero), pie (qué es) y cred (autor, colección y licencia); url = ficha en Commons */
  img: {
    alejandro: { f: "media/galeria_museo/universo/aristoteles_alejandro.jpg", pie: "Aristóteles enseña al joven Alejandro.", cred: "Charles Laplante, grabado del siglo XIX · dominio público", url: "https://commons.wikimedia.org/wiki/File:Alexander_and_Aristotle.jpg" },
    fuego: { f: "media/galeria_museo/universo/fuego_arcimboldo.jpg", pie: "<em>El fuego</em>, de la serie de los cuatro elementos (1566).", cred: "Giuseppe Arcimboldo · Kunsthistorisches Museum, Viena · dominio público", url: "https://commons.wikimedia.org/wiki/File:Giuseppe_Arcimboldo,_,_Kunsthistorisches_Museum_Wien,_Gem%C3%A4ldegalerie_-_Feuer_-_GG_1585_-_Kunsthistorisches_Museum.jpg" },
    agua: { f: "media/galeria_museo/universo/agua_arcimboldo.jpg", pie: "<em>El agua</em>, de la misma serie (1566).", cred: "Giuseppe Arcimboldo · Kunsthistorisches Museum, Viena · dominio público", url: "https://commons.wikimedia.org/wiki/File:Giuseppe_Arcimboldo,_,_Kunsthistorisches_Museum_Wien,_Gem%C3%A4ldegalerie_-_Wasser_-_GG_1586_-_Kunsthistorisches_Museum.jpg" },
    diagrama: { f: "media/galeria_museo/universo/elementos_diagrama.jpg", pie: "Los cuatro elementos, las estaciones y las edades de la vida en un diagrama medieval (h. 1110).", cred: "Byrhtferth de Ramsey · St John's College, Oxford · dominio público", url: "https://commons.wikimedia.org/wiki/File:Medieval_four_elements.jpg" },
    transmutaciones: { f: "media/galeria_museo/universo/alt_elementos_diagrama.jpg", pie: "«Diagrama de las transmutaciones de los cuatro elementos», en un manuscrito persa.", cred: "Muhammad Shirin Maghribi, <em>al-Nuzha al-Sasaniyya</em> · Colección Schøyen · dominio público", url: "https://commons.wikimedia.org/wiki/File:%22Diagram_of_the_Transmutations_of_Four_Elements.%22_Folio_from_a_copy_of_the_al-Nuzha_al-Sasaniyya_by_Muhammad_Shirin_Maghribi._Part_of_the_Sch%C3%B8yen_Collection.jpg" },
    humores: { f: "media/galeria_museo/universo/humores_elementos.jpg", pie: "Los humores del cuerpo, herederos de las cualidades de los elementos, en un manuscrito del siglo XI.", cred: "Anónimo · Burgo de Osma · dominio público", url: "https://commons.wikimedia.org/wiki/File:The_humors_(11th_c.,_Burgos_de_Osma).jpg" },
    lavoisier: { f: "media/galeria_museo/universo/lavoisier_david.jpg", pie: "Antoine-Laurent Lavoisier y Marie-Anne Paulze, que trabajaba con él en el laboratorio (1788).", cred: "Jacques-Louis David · Metropolitan Museum of Art · dominio público", url: "https://commons.wikimedia.org/wiki/File:David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg" },
    traite: { f: "media/galeria_museo/universo/lavoisier_traite.jpg", pie: "Una lámina de aparatos del <em>Tratado elemental de química</em> (1789): medir y pesar.", cred: "Antoine-Laurent Lavoisier · dominio público", url: "https://commons.wikimedia.org/wiki/File:Trait%C3%A9_%C3%89l%C3%A9mentaire_de_Chimie_-_DPLA_-_7f69f306652cefd113d85b858be8b900_(page_8).jpg" },
    cellarius: { f: "media/galeria_museo/universo/cosmos_cellarius.jpg", pie: "El universo con la Tierra en el centro, rodeada por las esferas de los planetas (1660).", cred: "Andreas Cellarius, <em>Harmonia macrocosmica</em> · Bibliothèque nationale de France · dominio público", url: "https://commons.wikimedia.org/wiki/File:Scenographia_systematis_mundani_Ptolemaici_-_btv1b101003595.jpg" },
    apian: { f: "media/galeria_museo/universo/cosmos_apian.jpg", pie: "Las esferas: tierra, agua, aire y fuego en el centro; después, la Luna, los planetas y las estrellas fijas.", cred: "Según Petrus Apianus, <em>Cosmographia</em> (1539) · dominio público", url: "https://commons.wikimedia.org/wiki/File:Ptolemaicsystem-small.png" },
    fludd: { f: "media/galeria_museo/universo/fludd_cosmos.jpg", pie: "El ser humano en el centro de las esferas del cosmos, en la portada de la <em>Historia de los dos mundos</em> (1617).", cred: "Robert Fludd · dominio público", url: "https://commons.wikimedia.org/wiki/File:Frontpage_-_Robert_Fludd_-_Utriusque_cosmi_Historia_-_1617-19.png" },
    galileo: { f: "media/galeria_museo/universo/galileo_discorsi.jpg", pie: "Portada de los <em>Discursos sobre dos nuevas ciencias</em> (Leiden, 1638).", cred: "Galileo Galilei · Library of Congress · dominio público", url: "https://commons.wikimedia.org/wiki/File:Title_page_of_Discorsi_e_dimostrazioni_matematiche,_intorno_a_due_nuove_scienze;_with_device_showing_man_picking_fruit_from_tree_marked_%22non_Solus%22_LCCN92518460.tif" },
    valades: { f: "media/galeria_museo/universo/escala_valades.jpg", pie: "La gran cadena de los seres, de las piedras y las plantas a los animales, los seres humanos y los ángeles (1579).", cred: "Diego Valadés, <em>Rhetorica christiana</em> · dominio público", url: "https://commons.wikimedia.org/wiki/File:Great_Chain_of_Being_2.png" },
    llull: { f: "media/galeria_museo/universo/alma_escala_natura.jpg", pie: "La escalera de los seres: piedra, llama, planta, animal, ser humano, cielo, ángel y Dios (edición de 1512).", cred: "Ramon Llull, <em>Liber de ascensu et descensu intellectus</em> · dominio público", url: "https://commons.wikimedia.org/wiki/File:Die_Leiter_des_Auf-_und_Abstiegs.jpg" },
    porfirio: { f: "media/galeria_museo/universo/arbol_porfirio.jpg", pie: "El árbol de Porfirio: de la sustancia, el género más general, a la especie «ser humano» (1730).", cred: "Edmond Pourchot, <em>Institutiones philosophicae</em> · dominio público", url: "https://commons.wikimedia.org/wiki/File:Arbor_porphyrii_(from_Purchotius%27_Institutiones_philosophicae_I,_1730).png" },
    porfirio2: { f: "media/galeria_museo/universo/alt_arbol_porfirio.jpg", pie: "Otra versión del árbol, con los géneros a un lado y las diferencias al otro.", cred: "Tradición de las traducciones de Boecio · dominio público", url: "https://commons.wikimedia.org/wiki/File:Arbor_porphyrii_(probably_from_one_of_Boethius%27_translations).png" },
    linneo: { f: "media/galeria_museo/universo/arbol_linneo.jpg", pie: "El reino animal en la primera edición del <em>Systema naturae</em> (1735): clases, órdenes y géneros.", cred: "Carl von Linné · dominio público", url: "https://commons.wikimedia.org/wiki/File:Linnaeus_-_Regnum_Animale_(1735).png" },
    haeckel: { f: "media/galeria_museo/universo/arbol_haeckel.jpg", pie: "El árbol genealógico de los seres vivos (1874).", cred: "Ernst Haeckel · dominio público", url: "https://commons.wikimedia.org/wiki/File:Pedigree_of_man_(Haeckel_1874).jpg" },
    darwin: { f: "media/galeria_museo/universo/arbol_darwin.jpg", pie: "«I think» («Creo»): el primer árbol de la vida en el cuaderno B de Darwin (1837).", cred: "Charles Darwin · Biblioteca de la Universidad de Cambridge · dominio público", url: "https://commons.wikimedia.org/wiki/File:Darwin_Tree_1837.png" },
    gesner: { f: "media/galeria_museo/universo/gesner_historia.jpg", pie: "Un erizo en la <em>Historia de los animales</em> de Conrad Gesner (1551), que retoma el título de Aristóteles.", cred: "Conrad Gesner · Biblioteca Nacional de Polonia (Polona) · dominio público", url: "https://commons.wikimedia.org/wiki/File:Historiae_animalium_liber_I_1551_-_page_400.jpg" },
    ptolomeo: { f: "media/galeria_museo/universo/mapa_ptolomeo.jpg", pie: "El mundo conocido según la <em>Geografía</em> de Ptolomeo, en la edición de Ulm (1482): el océano Índico aparece cerrado, porque se creía que una tierra desconocida unía el sur de África con Asia.", cred: "Según Claudio Ptolomeo · dominio público", url: "https://commons.wikimedia.org/wiki/File:1482_Ulm_Ptolemy_World_Map.jpg" },
    macrobio: { f: "media/galeria_museo/universo/mapa_zonas.jpg", pie: "Las zonas de la Tierra según Macrobio: la franja central, la tórrida, lleva el rótulo <em>perusta</em>, «abrasada».", cred: "Macrobio, <em>Comentario al sueño de Escipión</em> (ed. impresa) · dominio público", url: "https://commons.wikimedia.org/wiki/File:Macrobius%27_world_map_(cropped).jpg" },
    sacrobosco: { f: "media/galeria_museo/universo/mapa_zonas_sacrobosco.jpg", pie: "Las cinco zonas en la <em>Esfera</em> de Sacrobosco: la del centro es la «zona calida inhabitabilis».", cred: "Johannes de Sacrobosco, <em>De sphaera</em> · dominio público", url: "https://commons.wikimedia.org/wiki/File:Sacrobosco_-_sphaera_(five_zones).jpg" }
  },

  /* ---------- 1 · Filosofía ---------- */
  cambio: {
    titulo: "Cómo se explica un cambio",
    materia: "Filosofía",
    texto: [
      "Parménides había planteado un problema que parecía no tener salida: nada puede salir de la nada; si cambiar es pasar de no ser a ser, entonces el cambio es imposible y lo que vemos es una ilusión. Aristóteles responde con una distinción: hay muchas maneras de «no ser».",
      "El que no sabe música no es músico, pero <strong>puede llegar a serlo</strong>: le falta algo que podría tener. A esa falta la llama <strong>privación</strong>. Así, todo cambio tiene tres principios: algo que permanece (la <strong>materia</strong> o sujeto), lo que se gana (la <strong>forma</strong>) y lo que faltaba (la privación). El cambio no sale de la nada: sale de lo que ya estaba ahí (<em>Física</em> I 7-8).",
      "De ahí sale una pareja de conceptos que lo atraviesa todo: <strong>potencia</strong> y <strong>acto</strong>. La bellota es un roble en potencia; el roble crecido, un roble en acto. El bloque de bronce es una estatua en potencia. Moverse o cambiar es precisamente ir de la potencia al acto."
    ],
    cita: "El movimiento es la realización de lo que está en potencia, en cuanto que está en potencia.",
    citaPie: "Aristóteles, <em>Física</em> III 1 (traducción propia)",
    causasTit: "Cuatro maneras de preguntar «por qué»",
    causasTxt: [
      "Para explicar algo, dice Aristóteles, hay que contestar a cuatro preguntas distintas (<em>Física</em> II 3): ¿de qué está hecho? (la causa <strong>material</strong>), ¿qué es, qué forma tiene? (la <strong>formal</strong>), ¿quién o qué lo produjo? (la <strong>eficiente</strong>) y ¿para qué es? (la <strong>final</strong>).",
      "En las cosas fabricadas, las cuatro causas suelen estar separadas: el escultor está fuera del bronce. En los seres vivos, en cambio, tres coinciden: la forma del roble, lo que lo hace crecer y aquello a lo que tiende son lo mismo, ser roble (<em>Física</em> II 7). Por eso la naturaleza, para Aristóteles, actúa «para algo»: es la <strong>teleología</strong>."
    ],
    piezaTit: "Encuentra las cuatro causas",
    piezaTxt: "Elige un objeto y asigna a cada causa la respuesta que le corresponde. Después, comprueba.",
    objetos: [
      { id: "estatua", t: "Una estatua de bronce", r: ["El bronce", "La figura de la diosa", "El escultor", "Honrar a la diosa en el templo"] },
      { id: "casa", t: "Una casa", r: ["Las piedras y la madera", "El plano de la casa", "El albañil", "Dar cobijo a quien la habite"] },
      { id: "roble", t: "Un roble", r: ["La bellota y lo que absorbe de la tierra", "La forma de roble", "El roble que dio la bellota", "Llegar a ser un roble adulto"] }
    ],
    causas: ["Material", "Formal", "Eficiente", "Final"],
    roble: "Fíjate en el roble: la forma, el que lo engendra (otro roble) y el fin son, en el fondo, lo mismo. En los seres vivos las causas se juntan.",
    cuidado: "Ojo con la palabra. Hoy «causa» suele significar solo lo que produce algo (la causa eficiente). Para Aristóteles, una causa es <strong>cualquier respuesta a un «por qué»</strong>. Y caso trampa: que la naturaleza actúe «para algo» no quiere decir que alguien lo planee; el roble no piensa en ser roble.",
    puente: "La física moderna, desde Galileo y Descartes, se quedó con la causa material y la eficiente y dejó de preguntar «para qué» cae una piedra. Pero la biología sigue usando una versión de esa pregunta: «¿para qué sirve el corazón?» se contesta con su <strong>función</strong>, bombear la sangre, y Darwin explicó cómo pueden aparecer funciones sin que nadie las diseñe."
  },

  /* ---------- 2 · Química ---------- */
  elementos: {
    titulo: "Cuatro elementos, dos pares de cualidades",
    materia: "Química",
    texto: [
      "Antes de Aristóteles, Empédocles había dicho que todo está hecho de cuatro «raíces»: tierra, agua, aire y fuego. Aristóteles acepta los cuatro, pero da un paso más: <strong>no son lo último</strong>. Debajo de ellos hay dos parejas de cualidades contrarias que se notan con el tacto: <strong>caliente y frío</strong>, que actúan, y <strong>seco y húmedo</strong>, que padecen (<em>Meteorológicos</em> IV 1).",
      "Cada elemento es una combinación de una cualidad de cada pareja. Con cuatro cualidades se pueden hacer seis parejas, pero dos son imposibles, porque juntan contrarios: nada puede ser a la vez caliente y frío, ni seco y húmedo. Quedan <strong>cuatro combinaciones</strong>, y por eso hay cuatro elementos, ni uno más (<em>Sobre la generación y la corrupción</em> II 3).",
      "Además, cada uno destaca por una de sus dos cualidades: la tierra es sobre todo seca; el agua, sobre todo fría; el aire, sobre todo húmedo; y el fuego, sobre todo caliente (II 3, 331a4-6)."
    ],
    cita: "El fuego es caliente y seco; el aire, caliente y húmedo, porque el aire es como un vapor; el agua, fría y húmeda; y la tierra, fría y seca.",
    citaPie: "Aristóteles, <em>Sobre la generación y la corrupción</em> II 3, 330b3-5 (traducción propia)",
    transTit: "Los elementos se transforman",
    transTxt: [
      "Si un elemento está hecho de cualidades, basta con que cambie una para que se convierta en otro. Cuando el fuego pierde lo seco y gana lo húmedo, se hace aire. Por eso los elementos <strong>vecinos</strong>, que comparten una cualidad, se transforman <strong>deprisa</strong> el uno en el otro; los <strong>opuestos</strong>, que no comparten ninguna, lo hacen <strong>despacio</strong>, porque han de cambiar las dos (II 4).",
      "Lo que Aristóteles tenía delante era la experiencia diaria: el agua que hierve se va al aire; la leña que arde da fuego, humo y ceniza; el vapor que toca algo frío vuelve a ser agua. Su teoría explicaba todo eso con muy pocos principios."
    ],
    piezaTit: "Prueba el cuadrado de las cualidades",
    piezaTxt: "Elige un elemento y cambia una de sus cualidades: verás en qué se convierte. Los lados del cuadrado unen los elementos que comparten una cualidad; las diagonales, los opuestos.",
    retoTit: "Reto: de fuego a agua",
    retoTxt: "El fuego y el agua no comparten ninguna cualidad. ¿Cuántos cambios hacen falta, como mínimo, para pasar del uno al otro? Pruébalo en el cuadrado empezando por el fuego.",
    mixtosTit: "Y lo que vemos son mezclas",
    mixtos: "Casi nada de lo que tocamos es un elemento puro. La carne, el hueso, la madera o los metales son <strong>mixtos</strong>: mezclas de los cuatro en distinta proporción. Un trozo de leña tiene mucho de tierra (por eso deja ceniza), algo de agua (por eso suda savia al arder) y algo de aire y de fuego (por eso humea y arde). La misma idea pasó a la medicina: los cuatro <strong>humores</strong> del cuerpo se pensaron con las mismas cualidades, y la salud era su buena mezcla.",
    cuidado: "Ojo con la caricatura. No es que Aristóteles «creyera que el agua es un elemento» por ingenuo. Su «agua» no es la del grifo, sino <strong>lo frío y húmedo</strong> en estado puro. Y caso trampa: los cuatro elementos se parecen a nuestros tres estados de la materia (sólido, líquido y gas), <strong>pero no son lo mismo</strong>. Para Aristóteles, el agua que hierve se convierte en otro elemento; para la química actual, el vapor sigue siendo agua, H₂O.",
    puenteTit: "Lo que vino después",
    puente: [
      "La teoría duró unos dos mil años, en la medicina de los cuatro humores, en la alquimia y en los manuales universitarios. Empezó a caer en el siglo XVII: Robert Boyle, en <em>El químico escéptico</em> (1661), pidió que se llamara elemento solo a lo que de verdad no puede separarse en otras cosas.",
      "El golpe vino con Antoine-Laurent Lavoisier. En 1783 obtuvo agua quemando juntos dos gases, el «aire inflamable» (hidrógeno) y el oxígeno, y al año siguiente, con Meusnier, la descompuso: <strong>el agua no era un elemento</strong>, sino un compuesto. En su <em>Tratado elemental de química</em> (1789), elemento es la última sustancia a la que llega el análisis.",
      "Sin caricaturas, también aquí: la lista de 33 «sustancias simples» de Lavoisier incluía todavía la luz y el «calórico», el fluido del calor. Toda ciencia trabaja con lo que puede medir en su tiempo."
    ],
    acertoTit: "Qué se quedó y qué se fue",
    acerto: [
      ["Explicar mucha variedad con pocos principios, y pensar el cambio como una combinación que se rehace.", "Se quedó: es el ideal de cualquier teoría química."],
      ["Fijarse en lo que se observa (hervir, arder, condensarse) y no solo en lo que se razona.", "Se quedó: la química moderna nace de medir esos mismos procesos, pesando."],
      ["Los elementos son cualidades sensibles (caliente, frío, seco, húmedo) que pueden intercambiarse.", "Se fue: los elementos de hoy se definen por la estructura del átomo, no por cómo se sienten al tacto."],
      ["El agua, el aire, el fuego y la tierra son los elementos.", "Se fue: el agua y el aire son compuestos y mezclas; el fuego es una reacción."]
    ]
  },

  /* ---------- 3 · Física ---------- */
  lugares: {
    titulo: "Cada cosa a su sitio",
    materia: "Física",
    texto: [
      "El universo de Aristóteles es una gran esfera, sin vacío y sin nada fuera. En el centro está la Tierra, quieta. Alrededor giran las esferas que llevan la Luna, el Sol, los planetas y, al final, las estrellas fijas (<em>Sobre el cielo</em> I-II).",
      "La órbita de la Luna parte el universo en dos. <strong>Por debajo</strong> está el mundo de los cuatro elementos, donde todo nace, cambia y muere. <strong>Por encima</strong>, los cielos están hechos de un quinto cuerpo, el <strong>éter</strong>, que no se transforma: solo gira en círculo, eternamente. Por eso los cielos parecían perfectos e inmutables.",
      "Cada elemento tiene su <strong>lugar natural</strong>: la tierra, en el centro; encima, el agua; luego, el aire, y arriba, el fuego. Una piedra cae y el humo sube porque cada cosa vuelve a su sitio. Ese es el <strong>movimiento natural</strong>. Lanzar una piedra hacia arriba, en cambio, es un <strong>movimiento violento</strong>: va contra su naturaleza y necesita algo que la empuje."
    ],
    cita: "Todo lo que se mueve es movido por algo.",
    citaPie: "Aristóteles, <em>Física</em> VII 1 (traducción propia)",
    motorTit: "El primer motor",
    motor: "Si todo lo que se mueve es movido por otra cosa, la cadena de motores no puede seguir hasta el infinito: tiene que haber un <strong>primer motor que no es movido</strong>, que ya está «en acto» (<em>Física</em> VIII 5; <em>Metafísica</em> XII 6-7). Aristóteles lo pensaba como lo que mueve las esferas del cielo por atracción, como mueve lo que se desea. Siglos después, Tomás de Aquino usó este argumento como la primera de sus cinco vías hacia Dios.",
    piezaTit: "¿Cuál cae antes?",
    piezaTxt: "Elige dos cuerpos y el medio por el que caen. Compara lo que predice la física de Aristóteles con lo que observaron Galileo y la física moderna.",
    cuerpos: [
      { id: "piedra", t: "Una piedra", p: 2 },
      { id: "piedra2", t: "Una piedra el doble de pesada", p: 4 },
      { id: "bola", t: "Una bola de madera del mismo tamaño", p: 1 },
      { id: "pluma", t: "Una pluma", p: 0.01 }
    ],
    medios: [
      { id: "aire", t: "Aire" },
      { id: "agua", t: "Agua" },
      { id: "vacio", t: "Vacío" }
    ],
    predAri: "Según Aristóteles: {a} cae unas {x} veces más deprisa, porque la velocidad crece con el peso y disminuye con la resistencia del medio.",
    predAriVacio: "Según Aristóteles, la pregunta no tiene sentido: el vacío no puede existir, porque en él no habría resistencia y todo caería a una velocidad infinita (<em>Física</em> IV 8).",
    predIgual: "Según Aristóteles: caen a la vez, porque pesan lo mismo.",
    obsVacio: "Lo que se observa: en el vacío caen exactamente a la vez, sea cual sea su peso (Galileo lo razonó; los astronautas del Apolo 15 lo grabaron en la Luna en 1971 con un martillo y una pluma).",
    obsCasi: "Lo que se observa: llegan casi a la vez. La diferencia es muy pequeña, nada que ver con «{x} veces más deprisa».",
    obsMedio: "Lo que se observa: aquí Aristóteles no iba tan desencaminado. En un medio que frena mucho, o con un cuerpo muy ligero, el más pesado sí llega antes. Lo que falla es la regla: la diferencia no es proporcional al peso.",
    cuidado: "Sin caricaturas. Aristóteles observaba caídas en el aire y en el agua, donde el medio frena, y ahí las cosas pesadas suelen llegar antes. Y la crítica empezó muy pronto, dentro de la propia tradición: en el siglo VI, Juan Filópono escribió que, si se sueltan dos pesos muy distintos desde la misma altura, la diferencia de tiempo es pequeñísima. En el siglo XIV, Buridan explicó el movimiento de los proyectiles con un «ímpetu» que el lanzador les imprime.",
    puenteTit: "Lo que vino después",
    puente: [
      "Galileo, en sus <em>Discursos</em> (1638), usó un experimento mental: si atamos una piedra pesada a una ligera, ¿caerán más deprisa (pesan más juntas) o más despacio (la ligera frena a la pesada)? Las dos respuestas no pueden ser verdad a la vez; la salida es que, sin resistencia, todos los cuerpos caen igual.",
      "Descartes y Newton añadieron la <strong>inercia</strong>: un cuerpo sigue moviéndose en línea recta si nada lo frena. Ya no hace falta un motor que empuje todo el rato; hace falta una fuerza para <strong>cambiar</strong> el movimiento. Y Newton (1687) usó la misma ley de la gravedad para la manzana y para la Luna: se acabó la frontera entre el cielo y la Tierra."
    ]
  },

  /* ---------- 4 · Biología: el alma ---------- */
  alma: {
    titulo: "El alma, forma del viviente",
    materia: "Biología",
    texto: [
      "Para Aristóteles, el <strong>alma</strong> no es un fantasma metido en el cuerpo, como pensaba Platón. Es la <strong>forma</strong> de un cuerpo vivo: lo que hace que ese cuerpo viva, se alimente, sienta o piense. Ponía un ejemplo: si el ojo fuera un animal, la vista sería su alma (<em>Acerca del alma</em> II 1).",
      "Por eso, para él, <strong>todo ser vivo tiene alma</strong>, también las plantas. Lo que cambia es lo que ese ser puede hacer. Distingue tres grados (II 2-3): el alma <strong>nutritiva</strong> (alimentarse, crecer, reproducirse), que tienen todos los vivientes; la <strong>sensitiva</strong> (sentir, desear y, en muchos animales, desplazarse), que tienen los animales; y la <strong>racional</strong> (pensar), que es propia del ser humano. Cada grado incluye los anteriores."
    ],
    cita: "El alma es la primera realización de un cuerpo natural dotado de órganos.",
    citaPie: "Aristóteles, <em>Acerca del alma</em> II 1 (traducción propia)",
    sensTit: "Cómo sentimos",
    sens: [
      "Aristóteles estudió los sentidos con detalle. Cada sentido tiene su objeto <strong>propio</strong>: la vista, el color; el oído, el sonido; el gusto, el sabor. Pero hay cosas que captamos con varios sentidos a la vez, los <strong>sensibles comunes</strong>: el movimiento, la figura, el tamaño, el número (II 6; III 1). Para coordinarlo todo habla de un <strong>sentido común</strong>.",
      "Además, entre la cosa y el órgano hay un <strong>medio</strong>: el aire o el agua llevan el color y el sonido. Y sentir es recibir la forma de lo sentido sin su materia, «como la cera recibe la marca del anillo sin el hierro» (II 12)."
    ],
    piezaTit: "¿Qué puede hacer cada viviente?",
    piezaTxt: "Marca las capacidades que Aristóteles atribuiría a cada ser vivo y comprueba.",
    funciones: ["Alimentarse y reproducirse", "Sentir", "Desplazarse", "Pensar"],
    seres: [
      { id: "planta", t: "Una planta", r: [1, 0, 0, 0] },
      { id: "esponja", t: "Una esponja de mar", r: [1, 2, 0, 0] },
      { id: "pulpo", t: "Un pulpo", r: [1, 1, 1, 0] },
      { id: "perro", t: "Un perro", r: [1, 1, 1, 0] },
      { id: "humano", t: "Un ser humano", r: [1, 1, 1, 1] }
    ],
    esponja: "La esponja es un caso dudoso, y Aristóteles lo sabía: vive pegada a la roca como una planta, pero dice que parece sentir algo, porque se contrae cuando intentan arrancarla. Para él, la naturaleza pasa poco a poco de lo inanimado a los animales, y en la frontera es difícil decir dónde está cada ser (<em>Historia de los animales</em> VIII 1).",
    escalaTit: "La escala de los seres",
    escala: "Esa idea de una naturaleza que sube por grados se convirtió, en la Edad Media y el Renacimiento, en la <strong>escala de los seres</strong> o «gran cadena del ser»: de la piedra a la planta, al animal, al ser humano y, por encima, a los ángeles y a Dios. Aristóteles no la dibujó así, pero la escala salió de su biología.",
    cuidado: "Caso trampa: «alma» no significa aquí lo mismo que en la religión ni que en Platón. Si dices que una lechuga «tiene alma», para Aristóteles no es una frase poética: solo quiere decir que está viva, que se alimenta y crece.",
    puente: "La biología actual no habla de «alma», pero conserva la idea de ordenar a los seres vivos por lo que hacen: lo que en el colegio llamamos <strong>funciones vitales</strong> (nutrición, relación y reproducción) se parece mucho a los grados de Aristóteles. La gran diferencia es que hoy no se piensa en una escala con un escalón más alto, sino en un árbol con muchas ramas."
  },

  /* ---------- 5 · Biología: el naturalista ---------- */
  naturalista: {
    titulo: "Aristóteles en Lesbos: el primer naturalista",
    materia: "Biología",
    texto: [
      "Hacia el año 345 a. C., Aristóteles vivió unos años en la isla de Lesbos, junto a su discípulo Teofrasto. Allí, en la gran laguna de Pirra (hoy Kalloni), observó peces, moluscos, aves y plantas, habló con pescadores y abrió animales para ver cómo estaban hechos por dentro.",
      "De ese trabajo salieron libros como la <strong>Historia de los animales</strong>, las <strong>Partes de los animales</strong> y la <strong>Reproducción de los animales</strong>, donde aparecen unas quinientas clases de animales. Nadie antes había hecho algo parecido: describir, comparar y clasificar a partir de la observación."
    ],
    aciertosTit: "Lo que vio bien",
    aciertos: [
      "El <strong>delfín</strong> no es un pez: respira aire, pare crías vivas y las amamanta. Aristóteles lo puso aparte de los peces, dos mil años antes de que se hablara de mamíferos.",
      "El macho del <strong>pulpo</strong> usa uno de sus brazos para fecundar a la hembra. La observación pareció un cuento hasta el siglo XIX, cuando se confirmó: ese brazo se llama hoy <strong>hectocótilo</strong>.",
      "Abrió <strong>huevos de gallina</strong> en distintos días de incubación y vio aparecer el corazón como un punto de sangre que late."
    ],
    falloTit: "Lo que vio mal, y un debate abierto",
    fallos: [
      "Creía que algunos animales, como ciertos insectos o las anguilas, nacían solos del barro o de la materia en descomposición: la <strong>generación espontánea</strong>. Tardó dos mil años en caer (Redi, 1668; Pasteur, 1859-1862).",
      "En la reproducción pensaba que la hembra aporta la materia y el macho, la forma y el movimiento; llegó a describir a la hembra como un macho incompleto (<em>Reproducción de los animales</em> II 3). Hoy sabemos que madre y padre aportan la mitad de la información genética. Queda abierta una pregunta para discutir: ¿cuánto de esa idea venía de la observación y cuánto de la sociedad en la que vivía?"
    ],
    piezaTit: "¿Con sangre o sin sangre?",
    piezaTxt: "Aristóteles dividía los animales en dos grandes grupos: con sangre y sin sangre. Clasifica estos como lo haría él.",
    animales: [
      { id: "sardina", t: "Sardina", r: 1 }, { id: "delfin", t: "Delfín", r: 1 }, { id: "murcielago", t: "Murciélago", r: 1 },
      { id: "serpiente", t: "Serpiente", r: 1 }, { id: "pulpo", t: "Pulpo", r: 0 }, { id: "cangrejo", t: "Cangrejo", r: 0 },
      { id: "abeja", t: "Abeja", r: 0 }, { id: "caracol", t: "Caracol", r: 0 }
    ],
    conSangre: "Con sangre", sinSangre: "Sin sangre",
    trampa: "Caso trampa: el pulpo, el cangrejo y el caracol sí tienen un líquido que circula, pero es azulado o incoloro, no rojo. Aristóteles llamaba «sangre» solo a la roja. Y su división coincide casi exactamente con la actual entre <strong>vertebrados</strong> e <strong>invertebrados</strong>.",
    arbolTit: "Del árbol de los conceptos al árbol de la vida",
    arbol: [
      "En las <strong>Categorías</strong>, Aristóteles distingue el <strong>género</strong> (animal) de la <strong>especie</strong> (ser humano) y de la <strong>diferencia</strong> que separa una especie de otra (racional). Seis siglos después, Porfirio lo ordenó en una escalera que los manuales dibujaron como un árbol: el <strong>árbol de Porfirio</strong>. Era un árbol de conceptos: servía para definir, no para contar la historia de los seres vivos.",
      "Linneo, en el <strong>Systema naturae</strong> (1735), aplicó esa lógica a toda la naturaleza: reino, clase, orden, género y especie. Las especies, para él, eran fijas. El cambio decisivo llegó con Darwin: en 1837 dibujó en su cuaderno un árbol con la frase «I think» («creo»), y en 1859 explicó que las ramas son <strong>parentescos</strong>, especies que descienden unas de otras. Haeckel lo popularizó en grandes árboles genealógicos.",
      "Del árbol de Porfirio al de Darwin, el dibujo se parece, pero la idea es otra: el primero ordena definiciones que no cambian; el segundo cuenta una historia."
    ],
    darwinCita: "Linneo y Cuvier han sido mis dos dioses, aunque de maneras muy distintas, pero no eran más que colegiales al lado del viejo Aristóteles.",
    darwinPie: "Charles Darwin, carta a William Ogle, 22 de febrero de 1882 (traducción propia)",
    cuidado: "Ojo: Aristóteles no clasificó «en reinos» ni hizo un árbol de especies. Usaba géneros y especies de forma flexible, según lo que quería comparar. La clasificación en niveles fijos es de Linneo."
  },

  /* ---------- 6 · Las grietas ---------- */
  grietas: {
    titulo: "Las grietas: lo que no encajaba",
    materia: "Ciencia moderna",
    intro: "Durante siglos, el universo de Aristóteles fue el marco de la ciencia en Europa y en el mundo islámico. No cayó de golpe ni porque alguien lo leyera mal: cayó porque, una a una, aparecieron observaciones que no encajaban. Abre cada grieta para ver qué decía la teoría, qué se encontró y quién lo encontró.",
    lista: [
      { id: "torrida", t: "La zona tórrida estaba habitada", dijo: "La Tierra tiene cinco zonas: dos heladas en los polos, dos templadas y una central, la tórrida, tan caliente que no se puede vivir en ella (<em>Meteorológicos</em> II 5).", paso: "Los navegantes portugueses cruzaron el ecuador en la década de 1470 y encontraron tierras pobladas. El jesuita José de Acosta, camino de América, pasó frío justo bajo el ecuador.", quien: "Navegantes portugueses (h. 1470-1475); José de Acosta, 1590", cita: "Aquí yo confieso que me reí e hice donaire de los <em>Meteoros</em> de Aristóteles y de su filosofía, viendo que en el lugar y en el tiempo que, conforme a sus reglas, había de arder todo y ser un fuego, yo y todos mis compañeros teníamos frío.", citaPie: "José de Acosta, <em>Historia natural y moral de las Indias</em> (1590), libro II, cap. IX", img: ["macrobio", "sacrobosco", "ptolomeo"] },
      { id: "cielos", t: "Los cielos cambiaban", dijo: "Por encima de la Luna todo es éter: nada nace ni muere, y los cielos son perfectos.", paso: "En 1572 apareció una estrella nueva, y en 1577 un cometa pasó muy por encima de la Luna. Galileo, con el telescopio (1610), vio montañas en la Luna, satélites girando alrededor de Júpiter y fases en Venus; poco después, manchas en el Sol.", quien: "Tycho Brahe (1572-1577); Galileo Galilei (1610-1613)", img: ["cellarius", "apian"] },
      { id: "caida", t: "Los pesados no caían más deprisa", dijo: "La velocidad de caída es proporcional al peso.", paso: "Sin resistencia, todos los cuerpos caen igual; para mantener un movimiento no hace falta un motor, solo para cambiarlo (inercia).", quien: "Galileo, <em>Discursos</em> (1638); Descartes; Newton, <em>Principios</em> (1687)", img: ["galileo"] },
      { id: "vacio", t: "El vacío sí existía", dijo: "La naturaleza no admite el vacío: si lo hubiera, el movimiento sería infinitamente rápido.", paso: "Torricelli dejó un espacio vacío sobre el mercurio de un tubo (1643); Pascal hizo subir el barómetro al Puy de Dôme (1648); Guericke y Boyle sacaron el aire de recipientes con bombas (1654-1660).", quien: "Torricelli, Pascal, Guericke, Boyle" },
      { id: "agua", t: "El agua no era un elemento", dijo: "El agua es uno de los cuatro elementos.", paso: "Se obtuvo agua quemando hidrógeno con oxígeno (1783) y se descompuso (1784).", quien: "Lavoisier, Laplace y Meusnier", img: ["lavoisier", "traite"] },
      { id: "espontanea", t: "Los gusanos no nacían de la carne", dijo: "Algunos animales nacen solos de la materia en descomposición.", paso: "Francesco Redi tapó con una gasa unos frascos con carne: no salieron gusanos, porque las moscas no podían dejar sus huevos (1668). Pasteur cerró la cuestión para los microbios (1859-1862).", quien: "Redi (1668); Pasteur (1859-1862)" },
      { id: "final", t: "La causa final dejó de explicar", dijo: "Para entender la naturaleza hay que preguntar «para qué».", paso: "Francis Bacon comparó las causas finales con las vírgenes consagradas a Dios: no dan fruto. Spinoza las criticó como proyecciones humanas sobre la naturaleza. Darwin explicó cómo pueden surgir órganos útiles sin un fin previo: por selección natural.", quien: "Bacon (1623); Spinoza, <em>Ética</em> I, apéndice (1677); Darwin (1859)" }
    ],
    dijoTxt: "Lo que decía el aristotelismo", pasoTxt: "Lo que se encontró", quienTxt: "Quién y cuándo",
    mapasTit: "El mundo que se fue ensanchando",
    mapas: "La grieta de la zona tórrida se ve en los mapas. En los esquemas de zonas medievales, la franja del ecuador lleva el rótulo «abrasada» o «inhabitable». En el mapa de Ptolomeo impreso en 1482, el océano Índico aún aparece cerrado por el sur. Veinte años después, los mapas de Juan de la Cosa (1500) y de Cantino (1502) ya dibujan la vuelta a África y la costa de América. En la Galería de la web puedes seguir esa historia mapa a mapa.",
    cuidado: "Sin caricaturas. Muchas grietas las abrieron personas formadas en Aristóteles y que lo admiraban: Harvey descubrió la circulación de la sangre (1628) con un método muy aristotélico, y Darwin lo llamaba «el viejo Aristóteles» con admiración. Y algunas ideas volvieron: la biología habla de funciones y la filosofía de la mente discute de nuevo qué es la forma de un ser vivo."
  },

  /* ---------- 7 · El puente ---------- */
  puente: {
    titulo: "Qué se quedó y qué se fue",
    materia: "Ciencia moderna",
    intro: "Una línea del tiempo de dos mil años: de Aristóteles a la ciencia moderna.",
    linea: [
      { y: "h. 345 a. C.", t: "Aristóteles en Lesbos", d: "Observa, describe y clasifica animales en la laguna de Pirra." },
      { y: "s. VI", t: "Juan Filópono", d: "Critica la física de la caída y del proyectil desde dentro de la tradición." },
      { y: "s. XII-XIII", t: "Averroes y las universidades", d: "Aristóteles, comentado en árabe y traducido al latín, se convierte en «el Filósofo»." },
      { y: "s. XIV", t: "Juan Buridan", d: "El ímpetu: el lanzador imprime al proyectil una fuerza que dura." },
      { y: "1543", t: "Copérnico", d: "El Sol, en el centro; la Tierra, un planeta más." },
      { y: "1572-1577", t: "Tycho Brahe", d: "Una estrella nueva y un cometa: los cielos cambian." },
      { y: "1610", t: "Galileo, <em>El mensajero sideral</em>", d: "Montañas en la Luna y satélites de Júpiter." },
      { y: "1628", t: "William Harvey", d: "La circulación de la sangre." },
      { y: "1638", t: "Galileo, <em>Discursos</em>", d: "La caída de los cuerpos y la nueva ciencia del movimiento." },
      { y: "1643-1660", t: "Torricelli, Pascal, Boyle", d: "El vacío existe." },
      { y: "1668", t: "Francesco Redi", d: "Contra la generación espontánea de los gusanos." },
      { y: "1687", t: "Isaac Newton", d: "Una misma ley para el cielo y la Tierra." },
      { y: "1735", t: "Carl von Linné", d: "Reino, clase, orden, género y especie." },
      { y: "1789", t: "Lavoisier", d: "El agua es un compuesto; nueva idea de elemento." },
      { y: "1859", t: "Charles Darwin", d: "El origen de las especies: el árbol de la vida." },
      { y: "1862", t: "Louis Pasteur", d: "Tampoco los microbios nacen solos." }
    ],
    tablaTit: "En resumen",
    tabla: [
      ["Observar, describir y clasificar antes de teorizar", "Se quedó: es la base de la biología."],
      ["Explicar el cambio con pocos principios", "Se quedó como ideal; los principios cambiaron."],
      ["Preguntar por la función de los órganos", "Se quedó en biología, sin un diseñador detrás."],
      ["Cuatro elementos y cuatro cualidades", "Se fue con Boyle y Lavoisier."],
      ["Lugares naturales, éter y esferas", "Se fueron con Galileo, Kepler y Newton."],
      ["Especies fijas ordenadas en una escala", "Se fueron con Darwin."]
    ]
  },

  preguntas: {
    titulo: "Para pensar",
    lista: [
      "¿Por qué, según Aristóteles, no puede haber un quinto elemento hecho de cualidades? (Pista: cuenta las parejas posibles.) ¿Y por qué entonces hay un quinto cuerpo, el éter, en los cielos?",
      "Elige un fenómeno de tu cocina y explícalo como lo haría Aristóteles y como lo haría la química actual.",
      "Busca las cuatro causas de un objeto tuyo (tu móvil, tu mochila). ¿Cuál de las cuatro preguntas te parece más difícil de contestar?",
      "Si la física de Aristóteles era falsa, ¿por qué duró casi dos mil años? ¿Qué tiene que tener una teoría para durar tanto?",
      "Acosta «se rió» de Aristóteles cuando pasó frío en el ecuador. ¿Basta una sola observación para tumbar una teoría? Piensa en lo que dice Popper sobre la falsación.",
      "¿Es lo mismo un árbol de conceptos (Porfirio) que un árbol de parentesco (Darwin)? ¿Qué cambia cuando el árbol cuenta una historia?"
    ],
    enlaces: "En la web: los presocráticos y Empédocles (Filosofía 1.º, tema 1 · HF, tema 4); el alma (Filosofía 1.º, tema 2 · HF, tema 7); la ciencia y sus revoluciones (Filosofía 1.º, tema 3); Aristóteles, el sistema completo (HF); las cinco vías de Tomás de Aquino (HF, tema 12); el nacimiento de la ciencia moderna (HF, tema 13)."
  }
};
