"use strict";
/* ===== Taller de Leibniz: ¿se puede calcular el pensamiento? (08-10, Bachillerato) =====
   Textos de la vista #leibniz (leibnizview.js). Puente de la filosofía con la ingeniería, las matemáticas y
   la informática: la máquina de calcular (1673), el sistema binario (1679/1703), los números característicos
   (1679), el «calculemos» y lo que vino después, hasta la objeción del molino (Monadología, § 17).
   Las piezas interactivas (rueda escalonada, hexagramas, divisibilidad) están en leibnizview.js; aquí solo prosa.
   Fuentes comprobadas: Gerhardt, Philosophische Schriften VII, 200 (calculemos); la carta de Bouvet del
   4-11-1701 (llegó en 1703); el ejemplar superviviente de la máquina, en la biblioteca de Hannover. */

const LEIBNIZ = {
  retrato: "Gottfried Wilhelm Leibniz (Leipzig, 1646 – Hannover, 1716), retratado por Christoph Bernhard Francke hacia 1695.",
  intro: "Leibniz fue filósofo, matemático, jurista, diplomático e inventor. Tuvo un sueño muy ambicioso: que <strong>pensar fuera tan seguro como calcular</strong>. Si las ideas se pudieran escribir con signos exactos, una discusión se resolvería igual que una suma, sin gritos ni trampas.",
  pista: "Su sueño no se cumplió del todo, pero por el camino inventó una máquina de calcular y el sistema de ceros y unos que hoy usa cualquier ordenador. Aquí vas a recorrerlo.",

  maquina: {
    titulo: "Una máquina que multiplica",
    texto: [
      "En 1642, Pascal había construido una máquina que sumaba y restaba. Leibniz quiso más: una que también <strong>multiplicara y dividiera</strong>. Presentó un modelo de madera en la Royal Society de Londres en 1673 y siguió perfeccionándola durante veinte años.",
      "El secreto es la <strong>rueda escalonada</strong>: un cilindro con nueve dientes de longitud creciente. Una rueda pequeña se coloca a lo largo del cilindro y, según dónde esté, en cada vuelta engancha 0, 1, 2… hasta 9 dientes. Así cada vuelta de manivela suma de golpe la cifra elegida.",
      "Solo se construyeron dos ejemplares y no funcionaban del todo bien: el mecanismo de «me llevo una» fallaba. Pero la rueda escalonada se siguió usando en las calculadoras mecánicas hasta bien entrado el siglo XX."
    ],
    cita: "Es indigno de personas excelentes perder horas como esclavos en el trabajo de calcular, que podría confiarse a cualquiera si se usaran máquinas.",
    citaPie: "Leibniz, sobre su máquina aritmética (1685)",
    ruedaTit: "Prueba la rueda",
    ruedaTxt: "Mueve la rueda pequeña a lo largo del cilindro: los dientes que engancha son la cifra que se suma en cada vuelta.",
    multTit: "Multiplica como Leibniz",
    multTxt: "La máquina no multiplica «de golpe»: suma el primer número tantas veces como diga cada cifra del segundo y, entre una cifra y otra, desplaza el carro una posición (como cuando multiplicas a mano y corres un hueco).",
    multFin: "Hecho: {a} × {b} = {r}. Has necesitado {v} vueltas de manivela, en lugar de {b} sumas seguidas."
  },

  binario: {
    titulo: "Todo con dos cifras: 0 y 1",
    texto: [
      "Contamos de diez en diez porque tenemos diez dedos. Leibniz se preguntó qué pasaría si contáramos <strong>de dos en dos</strong>: solo harían falta dos cifras, 0 y 1. En binario, 2 se escribe 10; 3 es 11; 4 es 100… y 1 + 1 = 10.",
      "Ya lo tenía estudiado en 1679, pero lo publicó en 1703. Para Leibniz tenía también un sentido religioso: todo puede salir del uno (Dios) y de la nada (el cero).",
      "Entre tanto, un jesuita que vivía en Pekín, Joachim Bouvet, le envió un diagrama con los <strong>64 hexagramas</strong> del <em>Yijing</em> (el «Libro de los cambios» chino), atribuido al legendario Fuxi. Cada hexagrama son seis líneas, enteras o partidas. Si se lee la línea entera como 1 y la partida como 0, el diagrama ordena los números del 0 al 63. Leibniz quedó fascinado."
    ],
    cuidado: "Ojo con las conclusiones rápidas: Leibniz <strong>no copió</strong> el binario de China, porque ya lo tenía antes de recibir la carta. Y leer los hexagramas como números fue interpretación suya y de Bouvet: en China se usaban para adivinar y reflexionar, no para contar.",
    hexTit: "Un hexagrama es un número",
    hexTxt: "Pulsa las líneas para cambiarlas (entera = 1, partida = 0) o escribe un número del 0 al 63. Aquí, la línea de arriba es la cifra que más vale.",
    puente: "Hoy, cada 1 y cada 0 es un circuito que deja pasar la corriente o no. Mira cómo se calcula con ellos en las <a href=\"#logica/puertas\">puertas lógicas del Rincón de lógica</a>."
  },

  alfabeto: {
    titulo: "Un alfabeto de los pensamientos",
    texto: [
      "De joven, Leibniz leyó el <em>Arte magna</em> de Ramon Llull, un mallorquín del siglo XIII que combinaba conceptos con ruedas giratorias. Le dio una idea: si todos los conceptos complejos están hechos de conceptos simples, bastaría un <strong>«alfabeto de los pensamientos humanos»</strong> para escribir cualquier idea combinando sus letras.",
      "En 1679 probó a usar números. A cada concepto simple le dio un <strong>número primo</strong> y a cada concepto compuesto, el producto de sus partes. Su ejemplo: animal = 2, racional = 3, así que ser humano (animal racional) = 2 × 3 = 6.",
      "Y ahora viene lo bueno: «Todo ser humano es animal» es verdad porque <strong>6 se puede dividir entre 2</strong>. Comprobar una frase se convierte en hacer una división."
    ],
    /* simples: un primo cada uno; compuestos: el producto (ser humano = animal racional, la definición que usa Leibniz) */
    conceptos: [
      { t: "animal", n: 2 }, { t: "racional", n: 3 }, { t: "bípedo", n: 5 }, { t: "con plumas", n: 7 },
      { t: "volador", n: 11 }, { t: "corredor", n: 13 },
      { t: "ser humano", n: 6, de: "animal × racional" }, { t: "ave", n: 70, de: "animal × bípedo × con plumas" },
      { t: "gorrión", n: 770, de: "ave × volador" }, { t: "avestruz", n: 910, de: "ave × corredor" },
      { t: "murciélago", n: 22, de: "animal × volador" }
    ],
    probTit: "Pruébalo tú",
    probTxt: "Elige un sujeto y un predicado. La frase «Todo… es…» será verdadera si el número del predicado divide exactamente al del sujeto.",
    problema: "El problema: ¿qué conceptos son de verdad simples? ¿Qué número le darías a «justicia» o a «libertad»? Leibniz nunca consiguió completar su alfabeto, y para frases como «ningún…» o «algún…» tuvo que complicar el sistema con parejas de números."
  },

  tratados: {
    titulo: "Sus escritos de lógica",
    texto: "Leibniz no escribió un gran libro de lógica, sino cientos de borradores. La mayoría <strong>quedaron sin publicar</strong> durante más de dos siglos: el filósofo francés Louis Couturat los sacó a la luz entre 1901 y 1903. Por eso, cuando Boole y Frege reinventaron la lógica en el siglo XIX, no sabían que Leibniz había llegado antes a muchas de sus ideas.",
    lista: [
      { y: "1666", t: "<em>Disertación sobre el arte combinatoria</em>", d: "Su tesis de juventud: inspirado en Llull, propone combinar conceptos simples para obtener todos los compuestos." },
      { y: "1679", t: "<em>Elementos de la característica universal</em> y otros escritos", d: "Los números característicos: cada concepto, un número; cada frase, una cuenta." },
      { y: "1686", t: "<em>Investigaciones generales sobre el análisis de las nociones y las verdades</em>", d: "Su cálculo lógico más completo. Defiende que en toda verdad el predicado está contenido en el sujeto: decir «Todo S es P» es decir que la noción de S contiene la de P." },
      { y: "h. 1686", t: "<em>Sobre la comprobación de la forma lógica mediante el trazado de líneas</em>", d: "El borrador de los diagramas: comprueba los silogismos dibujando círculos y líneas." },
      { y: "1704", t: "<em>Nuevos ensayos sobre el entendimiento humano</em>", d: "Su respuesta a Locke, en forma de diálogo. Defiende el valor de la lógica de Aristóteles y de las formas del razonamiento. No se publicó hasta 1765." }
    ]
  },

  diagramas: {
    titulo: "Los diagramas de Euler… que dibujó Leibniz",
    texto: [
      "Los círculos que usamos para comprobar silogismos se llaman <strong>diagramas de Euler</strong>, porque el matemático Leonhard Euler los popularizó en sus <em>Cartas a una princesa de Alemania</em> (escritas en 1761). Pero Leibniz ya los había dibujado hacia 1686, cuando Euler ni había nacido. Y tampoco fue el primero: él mismo cuenta que de joven los había visto en un libro de Johann Christoph Sturm (1661).",
      "Leibniz probó además otra forma: representar cada concepto como una <strong>línea</strong>. Si la línea de S queda dentro de la de P, todo S es P. Son los <strong>diagramas lineales</strong>, menos famosos pero igual de útiles."
    ],
    probTit: "Compara las dos versiones",
    probTxt: "Elige una proposición o un silogismo y mira cómo lo dibujaría Leibniz con círculos y con líneas. En las líneas, el tramo de puntos es la parte que puede existir o no.",
    casos: [
      { id: "A", t: "Todo S es P", d: "S está entero dentro de P." },
      { id: "E", t: "Ningún S es P", d: "S y P no se tocan." },
      { id: "I", t: "Algún S es P", d: "S y P comparten una parte." },
      { id: "O", t: "Algún S no es P", d: "Una parte de S queda fuera de P." },
      { id: "barbara", t: "Todo M es P; todo S es M; luego todo S es P", d: "Silogismo Barbara: si S está dentro de M y M dentro de P, S queda dentro de P sin remedio." },
      { id: "celarent", t: "Ningún M es P; todo S es M; luego ningún S es P", d: "Silogismo Celarent: S está dentro de M, y M no toca a P, así que S tampoco." }
    ],
    circulos: "Círculos (como Euler)", lineas: "Líneas (solo Leibniz)",
    puente: "Practica con muchos más silogismos en el <a href=\"#logica/silogismos\">Rincón de lógica</a>."
  },

  calculo: {
    titulo: "El cálculo: Leibniz inventa los signos ∫ y d",
    partes: [
      { h: "Dos viejos problemas", texto: [
        "Desde Arquímedes, los matemáticos se enfrentaban a dos problemas. Uno era hallar la <strong>tangente</strong> a una curva en un punto, es decir, su inclinación: de ahí sale, por ejemplo, la velocidad en cada instante. El otro era hallar el <strong>área</strong> que encierra una curva, la «cuadratura». En el siglo XVII, Cavalieri, Fermat, Pascal o Barrow resolvieron muchos casos, cada uno con un truco distinto. Faltaban dos cosas: un método general, que sirviera para cualquier curva, y darse cuenta de que los dos problemas son uno el inverso del otro. Newton y Leibniz lo consiguieron, cada uno por su cuenta."
      ] },
      { h: "París, 1672-1676: sumar diferencias", texto: [
        "Leibniz llegó a París en 1672 sabiendo muy poca matemática moderna, y el físico holandés Christiaan Huygens le hizo de maestro. Para ponerlo a prueba, le pidió que sumara los inversos de los números triangulares: 1 + 1/3 + 1/6 + 1/10 + … Leibniz vio que cada término es el doble de una diferencia, 2 × (1/n − 1/(n+1)), así que al sumarlos casi todo se cancela y el resultado es 2.",
        "De ahí sacó la idea que guía todo su cálculo: <strong>sumar las diferencias deshace la diferencia</strong>. Si algo va cambiando poco a poco, la suma de todos sus pequeños cambios es lo que ha cambiado en total. El cálculo infinitesimal es esa misma idea, llevada a cambios infinitamente pequeños."
      ] },
      { h: "El triángulo característico y la serie de π", texto: [
        "En 1673, leyendo a Pascal, Leibniz se fijó en un triángulo diminuto pegado a la curva: un lado es un aumento infinitamente pequeño de x, otro el de y, y el tercero un trocito de la propia curva. Lo llamó <strong>triángulo característico</strong>. La razón entre sus dos primeros lados es la inclinación de la tangente, lo que hoy escribimos dy/dx.",
        "Con él inventó un método para convertir un área en otra más fácil de calcular, el <strong>teorema de transmutación</strong> (1673-1674). Aplicado al círculo, le dio una fórmula asombrosa: π/4 = 1 − 1/3 + 1/5 − 1/7 + … La publicó en 1682 en la revista <em>Acta Eruditorum</em>. Después reconoció que el escocés James Gregory había llegado antes, y hoy sabemos que en la India, en Kerala, el matemático Madhava ya la conocía hacia 1400."
      ] },
      { h: "29 de octubre de 1675: nace la ∫", texto: [
        "Hasta entonces, para sumar infinitas líneas y obtener un área, Leibniz escribía <em>omn.</em>, de <em>omnes lineae</em> («todas las líneas»), la expresión de Cavalieri. En un manuscrito del 29 de octubre de 1675 anotó: «será útil escribir ∫ en lugar de <em>omn.</em>». El signo es una <strong>S alargada</strong>, la inicial de <em>summa</em>, porque una integral es una suma de infinitos sumandos infinitamente pequeños.",
        "En las semanas siguientes añadió la <strong>d</strong>, de <em>differentia</em>, para la diferencia infinitamente pequeña: dx, dy. El 21 de noviembre ya escribía la integral con su dx detrás, como hoy, y en el mismo manuscrito aparece la regla del producto: d(xy) = x dy + y dx. En 1676 halló la regla de las potencias, d(xⁿ) = n·xⁿ⁻¹ dx, tanto para exponentes enteros como fraccionarios."
      ] },
      { h: "El teorema fundamental: d y ∫ se deshacen", texto: [
        "La idea central es que la d y la ∫ se deshacen la una a la otra, como sumar y restar: ∫ dy = y, y d(∫ y dx) = y dx. Es el <strong>teorema fundamental del cálculo</strong>. Para hallar un área no hace falta sumar de verdad infinitos rectángulos: basta con encontrar una cantidad cuya diferencia sea la que nos dan.",
        "Por ejemplo, como d(x³/3) = x² dx, el área bajo la parábola y = x² entre 0 y 1 es ∫ x² dx = 1/3. Puedes comprobarlo abajo, sumando rectángulos cada vez más finos: la suma se acerca a 1/3 tanto como quieras.",
        "Leibniz publicó una demostración geométrica en 1693, en <em>Acta Eruditorum</em> (<em>Suplemento de la geometría de las medidas</em>): todo problema de áreas se reduce a encontrar una curva con una «ley de tangentes» dada. Su prueba se parece mucho a una de Isaac Barrow, el maestro de Newton, en sus <em>Lecciones geométricas</em> (1670), un libro que Leibniz había conseguido en Londres en 1673 y que nunca citó."
      ] },
      { h: "Publicar: un enigma de seis páginas", texto: [
        "El primer artículo, <em>Nuevo método para los máximos y los mínimos…</em>, salió en 1684 en <em>Acta Eruditorum</em>: seis páginas con las reglas de la d y sin demostraciones. Jacob Bernoulli dijo que era «más un enigma que una explicación». El signo ∫ apareció impreso por primera vez en 1686, en <em>Sobre la geometría oculta</em>.",
        "La palabra <strong>integral</strong> no es de Leibniz: la empezó a usar Jacob Bernoulli en 1690. Leibniz prefería «cálculo sumatorio», pero en 1696 aceptó, con Johann Bernoulli, que «cálculo integral» era mejor."
      ] },
      { h: "Por qué ganó su notación", texto: [
        "Los signos de Leibniz piensan por nosotros. dy/dx se comporta casi como una fracción: la regla de la cadena se escribe dy/dx = (dy/du) · (du/dx), como si los du se cancelaran. Es justo lo que buscaba con su «característica universal»: signos que hagan visible el razonamiento. Los hermanos Bernoulli y el marqués de L’Hôpital, autor del primer manual de cálculo (1696), los difundieron por toda Europa.",
        "En Inglaterra, por lealtad a Newton, se mantuvo su notación de puntos, y las matemáticas británicas se quedaron atrás durante un siglo. Hacia 1812, unos estudiantes de Cambridge, entre ellos Charles Babbage, fundaron la Sociedad Analítica para traer los signos de Leibniz. Babbage propuso en broma un lema: «los principios de la D pura frente a la <em>dot-age</em> de la universidad», un juego de palabras entre <em>dot</em> («punto») y <em>dotage</em> («chochez»)."
      ] },
      { h: "¿Qué es un dx? Un problema filosófico", texto: [
        "Un dx no puede ser cero, porque entonces dy/dx sería 0/0, pero tampoco es una cantidad corriente: es más pequeño que cualquier número que podamos dar. Leibniz decía que las cantidades infinitamente pequeñas son «ficciones útiles», como las raíces imaginarias del álgebra: no existen como cosas, pero permiten calcular bien.",
        "El obispo George Berkeley se burló de ellas en <em>El analista</em> (1734): serían «los fantasmas de cantidades desaparecidas». La respuesta llegó en el siglo XIX, cuando Cauchy y Weierstrass reconstruyeron el cálculo con la idea de <strong>límite</strong>, sin infinitesimales. Y en la década de 1960, Abraham Robinson demostró, con el llamado análisis no estándar, que los infinitesimales de Leibniz también se pueden tratar con todo rigor."
      ] }
    ],
    rectTit: "La integral es una suma",
    rectTxt: "Mueve el control: el área bajo y = x² entre 0 y 1 se calcula sumando rectángulos. Cuantos más hay, más finos son y más se acerca la suma al área exacta, ∫ x² dx = 1/3. Esa suma de infinitos rectángulos infinitamente finos es lo que Leibniz escribió con una S alargada.",
    serieTit: "La serie de Leibniz",
    serieTxt: "Suma los primeros términos de 1 − 1/3 + 1/5 − 1/7 + … y multiplica por 4: el resultado se acerca a π, pero muy despacio, saltando a un lado y a otro.",
    cuidado: "Caso trampa: «Leibniz inventó el cálculo» es verdad a medias. Newton lo tenía antes, hacia 1665-1666, aunque no lo publicó, y muchos resultados sueltos venían de Arquímedes, Cavalieri, Fermat, Pascal o Barrow. Lo que es solo de Leibniz es la notación: la ∫, la d y la manera de calcular con ellas que todavía usamos."
  },
  calculemos: {
    titulo: "¡Calculemos!",
    cita: "Cuando surjan controversias, no hará falta más discusión entre dos filósofos que entre dos contables. Bastará con tomar la pluma, sentarse ante el ábaco y decirse el uno al otro (llamando a un amigo, si se quiere): calculemos.",
    citaPie: "Leibniz, escrito de hacia 1685",
    texto: "Ese era el sueño completo: un lenguaje exacto para escribir las ideas (la «característica universal») y unas reglas para calcular con ellas (el «cálculo del razonamiento»). Puedes probar una versión pequeña de ese sueño: en el <a href=\"#logica/tablas\">Rincón de lógica</a>, una tabla de verdad decide, haciendo cuentas, si un argumento es válido.",
    lineaTit: "Lo que vino después"
  },

  linea: [
    { y: "1666", t: "Leibniz, con 20 años, escribe sobre el «arte de combinar», inspirado en Llull." },
    { y: "1673", t: "Presenta su máquina de calcular en la Royal Society." },
    { y: "1679", t: "Aritmética binaria y números característicos." },
    { y: "1684", t: "Publica el cálculo infinitesimal, que sabe sumar infinitos trozos cada vez más pequeños: la respuesta matemática a <a href=\"#logica/paradojas/aquiles\">Aquiles y la tortuga</a>." },
    { y: "1854", t: "George Boole convierte la lógica en un álgebra de 0 y 1." },
    { y: "1879", t: "Gottlob Frege inventa una escritura lógica para todo razonamiento matemático: lo más cerca que se ha estado del alfabeto de Leibniz." },
    { y: "1931", t: "Kurt Gödel demuestra un límite: en cualquier sistema así hay verdades que no se pueden demostrar dentro de él." },
    { y: "1936", t: "Alan Turing describe la máquina que puede hacer cualquier cálculo… y prueba que hay preguntas que ninguna máquina puede resolver." },
    { y: "1938", t: "Claude Shannon muestra que el álgebra de Boole sirve para diseñar circuitos eléctricos. Nace el ordenador digital." },
    { y: "Hoy", t: "La inteligencia artificial redacta, traduce y conversa haciendo cuentas con ceros y unos." }
  ],

  molino: {
    titulo: "Pero… ¿calcular es pensar?",
    texto: "Lo curioso es que el propio Leibniz pensaba que <strong>una máquina no puede sentir ni percibir</strong>. Lo explicó con un experimento mental:",
    cita: "Si imaginamos una máquina cuya estructura le hiciera pensar, sentir y percibir, podríamos agrandarla manteniendo sus proporciones, de modo que pudiéramos entrar en ella como en un molino. Al recorrerla por dentro, solo encontraríamos piezas que se empujan unas a otras, y nunca nada que explique una percepción.",
    citaPie: "Leibniz, Monadología, § 17 (1714)"
  },

  reverso: {
    titulo: "El reverso: un genio maltratado",
    intro: "Hasta aquí, el Leibniz brillante. Pero su vida acabó mal: enfrentado al hombre más poderoso de la ciencia inglesa y, después de muerto, convertido en el hazmerreír de media Europa."
  },

  newton: {
    titulo: "La guerra del cálculo: Newton, juez y parte",
    pie: "Isaac Newton, presidente de la Royal Society desde 1703.",
    texto: [
      "Newton y Leibniz inventaron el cálculo infinitesimal <strong>cada uno por su cuenta</strong>. Newton lo tenía hacia 1665-1666, pero no lo publicó; Leibniz llegó a él en 1675 y lo publicó en 1684, con una notación tan buena (dx, ∫) que es la que seguimos usando. Hoy los historiadores coinciden: ninguno copió al otro.",
      "Pero entonces la cosa acabó en guerra. En 1711 Leibniz pidió a la Royal Society de Londres que lo defendiera de una acusación de plagio. El presidente de la Royal Society era… <strong>Newton</strong>. Él eligió a los miembros de la comisión, que en 1712 publicó su informe, el <em>Commercium epistolicum</em>, sin pedir a Leibniz su versión. Le daba la razón a Newton.",
      "En 1715 apareció en la revista de la Royal Society una reseña anónima que elogiaba el informe. La había escrito <strong>el propio Newton</strong>. Y en 1726, diez años después de la muerte de Leibniz, Newton borró de su gran obra, los <em>Principia</em>, el párrafo en el que reconocía que Leibniz había llegado al cálculo por su cuenta."
    ],
    cuidado: "Para ser justos, Leibniz tampoco jugó limpio: en 1705 una reseña anónima, escrita por él, insinuaba que Newton había copiado su método, y en 1713 hizo circular otra hoja anónima contra Newton. Lo que los distingue es el poder: Newton fue <strong>juez y parte</strong>.",
    final: "Leibniz murió en Hannover en 1716, caído en desgracia. A su entierro solo fue su secretario. Un testigo escribió que lo enterraron «más como a un ladrón que como lo que de verdad era: el orgullo de su país». Su tumba estuvo sin lápida más de cincuenta años."
  },

  voltaire: {
    titulo: "Cándido: la burla de Voltaire",
    pie: "Voltaire, que publicó Cándido en 1759.",
    texto: [
      "En la <em>Teodicea</em> (1710), Leibniz intentó responder a una pregunta muy antigua: si Dios es bueno y todopoderoso, ¿por qué existe el mal? Su respuesta: Dios eligió, entre todos los mundos posibles, <strong>el mejor de los mundos posibles</strong>. No un mundo sin males, sino el que tiene la mejor combinación posible de bienes y males.",
      "El 1 de noviembre de 1755, un terremoto, un maremoto y un incendio destruyeron Lisboa y mataron a decenas de miles de personas. Voltaire escribió un poema furioso: ¿de verdad este es el mejor de los mundos? (Rousseau le contestó que la naturaleza no había construido veinte mil casas de seis y siete pisos: buena parte del desastre era obra humana.)",
      "En 1759, Voltaire publicó <em>Cándido</em>, una novela corta en la que un joven ingenuo recorre el mundo encadenando desgracias: guerras, naufragios, la Inquisición, el propio terremoto de Lisboa. Su maestro, <strong>Pangloss</strong>, repite ante cada catástrofe que todo está bien en el mejor de los mundos posibles."
    ],
    cita: "Pangloss enseñaba la metafísico-teólogo-cosmolo-bobología. Demostraba de maravilla que no hay efecto sin causa y que, en este mejor de los mundos posibles…",
    citaPie: "Voltaire, Cándido, cap. 1. En francés, «cosmolonigologie»: dentro va escondido nigaud, «bobo».",
    nombre: "Y Leibniz sale con su nombre: en el capítulo 28, Pangloss, después de haber sido ahorcado, diseccionado y condenado a galeras, dice que no piensa cambiar de opinión, porque «Leibniz no puede equivocarse».",
    matiz: "Ojo: Voltaire ridiculiza una versión simplificada. Leibniz no decía que cada desgracia sea buena, sino que el conjunto del mundo es el mejor posible. Y hay un dato curioso: Émilie du Châtelet, la científica con la que Voltaire vivió años, era leibniziana y defendió sus ideas en un libro de física (1740).",
    pangloss: "¿Y el nombre? «Pangloss» viene del griego <em>pan</em> (todo) y <em>glossa</em> (lengua): «todo lengua», es decir, un charlatán. Hay quien ve ahí una burla del alfabeto universal de Leibniz, el idioma que iba a servir para todas las lenguas. Es una lectura tentadora, pero no hay pruebas de que Voltaire lo pensara así. ¿Qué haría falta para demostrarlo?",
    final: "La novela acaba con una frase que se ha hecho famosa: «Hay que cultivar nuestro jardín». Menos teorías sobre el conjunto del mundo y más trabajo concreto para mejorarlo."
  },

  preguntas: {
    titulo: "Para pensar",
    lista: [
      "¿Puede alguien ser juez en su propia causa? ¿Qué debería haber hecho la Royal Society?",
      "Newton y Leibniz llegaron a lo mismo por separado. ¿Por qué crees que les importaba tanto quién fue el primero?",
      "¿Es justa la burla de Voltaire si ataca una versión simplificada de Leibniz? ¿Para qué sirve la sátira en filosofía?",
      "¿Se podría resolver un dilema moral calculando? ¿Qué parte se podría calcular y qué parte no?",
      "Cuando traducimos una idea a números, ¿qué ganamos y qué perdemos?",
      "Si entraras en el «molino» de una inteligencia artificial, ¿qué encontrarías? ¿Le da eso la razón a Leibniz?",
      "Leibniz quería acabar con las discusiones. ¿Sería bueno un mundo en el que nunca hubiera que discutir?"
    ]
  }
};
