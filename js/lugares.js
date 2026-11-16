"use strict";
/* ===== «Los lugares de…»: itinerario vital de un pensador, en su ficha de Biografías (lugaresview.js) =====
   Una entrada por pensador, con la misma clave que en BIOGRAFIAS. Añadir otro mapa es añadir aquí sus datos y
   lanzar «node tools/build_mapa.js», que dibuja el mapa (js/lugares_svg.js) con las costas de Natural Earth.
     titulo, intro, nota   textos de la ficha (notaFronteras: la frase sobre las fronteras de la época, que va justo bajo el mapa) (se traducen: este fichero está en DATA_FILES de web_i18n/i18n_lib.js)
     marco                 [lonO, latS, lonE, latN] del mapa
     detalle               recuadro ampliado para las paradas que caen muy juntas: su marco, dónde se dibuja (en: esquina de
                           arriba a la izquierda, en partes del ancho y del alto del mapa) y qué parte del ancho ocupa
     fronteras             año de las fronteras del mapa: las de la época del pensador, no las de hoy. Qué formaba cada
                           estado ese año está en tools/fronteras_epoca.js (si el año no está allí, hay que añadirlo).
                           La ficha lo dice («Fronteras de 1880»); lo que haga falta aclarar va en «nota».
                           Un año antes de Cristo va con signo menos (-387) y la ficha dice «Hacia 387 a. C.»
     detalle               … con «internos»: true, el recuadro traza además los estados de dentro (Prusia, Sajonia…)
     rotulos               los nombres del mapa, con el nombre DE LA ÉPOCA («Imperio alemán», no «Alemania»); el texto no
                           va en la imagen: lo pone lugaresview.js. tipo: "pais", "menor" (país pequeño, letra menor),
                           "interno" (estado de dentro de otro), "pueblo" (pueblos sin Estado, en la tierra sin color:
                           cursiva gris) o "mar"; det: true si va en el recuadro ampliado;
                           partir: true si el nombre es largo y va en dos líneas
     lagoMin               (opcional) superficie mínima, en unidades del dibujo, de los lagos que se pintan en el mapa
                           general (si no, 1,2): para un mapa pequeño de una tierra de muchos lagos
     internos              true: el mapa general traza también los estados de dentro (en línea de puntos)
     ciudades              (opcional) puntos sueltos [lon, lat], sin número ni nombre: las ciudades de un poder en tierra
                           de otro (las polis griegas de Asia Menor, Italia o Tracia). El nombre va solo en el comentario
     leyenda               (opcional) lo que significa cada color, en HTML bajo el mapa: { t, tono } con el tono del
                           estado en tools/fronteras_epoca.js (0: la tierra sin color) o { t, ciudad: true } para los
                           puntos de «ciudades»; con «trama» (el tono de otro estado), la muestra lleva además
                           sus rayas, como el estado que la lleva en el mapa. build_mapa.js avisa si la leyenda no casa con el mapa
     ruta                  solo si volvió a algún sitio: los números de las paradas en el orden real del viaje, con
                           repeticiones ([1, 2, 3, 2, 4]). Sin «ruta», la línea une las paradas por su orden
     curvas                (opcional) la comba de un tramo, si su arco pasa por debajo del número de otra parada:
                           { "1>2": -0.25 } (de la parada 1 a la 2; la de siempre es 0.1; negativo: hacia el otro lado)
     paradas               en orden de llegada; el número es su posición. lugar, fechas, t (qué hizo o escribió allí),
                           lon, lat reales; det: true si se dibuja en el recuadro ampliado
     sinRuta, sinFronteras (15-11) para un mapa de VARIOS pensadores (los presocráticos): sin línea de viaje y sin
                           fronteras (ni de época ni de hoy: solo tierra, mar y rótulos de tipo "region")
     biografia             (en cada parada de un mapa de varios) las claves de BIOGRAFIAS de quienes nacieron o enseñaron
                           allí: en su ficha sale este mapa con esa ciudad elegida. Se llama así porque ese campo no se traduce
     grupos                (opcional) botones por escuela bajo el mapa: { t: nombre, paradas: [números], d: una frase };
                           al pulsar uno, solo quedan a la vista sus ciudades
     zonas                 (opcional) regiones rayadas: { tipo: "h" (horizontal) o "d" (diagonal), poly: [[lon, lat]…] }
     grupos[].viajes       flechas en granate que salen al pulsar el grupo: { de, a: número de parada o [lon, lat], dudoso, comba }
     anio (en una parada)  su año (negativo: antes de Cristo), para la línea del tiempo de un mapa con «grupos»;
                           anioGrupo: { "índice del grupo": año } si con ese grupo pulsado cuenta otro año (Samos: Pitágoras
                           hacia el 570, Meliso hacia el 440)
   Un mapa se pone también en la teoría con <div class="lg-teoria" data-lug="clave"></div> (lugaresEn, en lugaresview.js).
   Los textos de «t» pueden llevar <em> para los títulos de obras. */
const LUGARES = {
 "nietzsche": {
  "titulo": "Los lugares de Nietzsche",
  "intro": "Nietzsche nació y murió en el centro de Alemania, pero pensó en camino. Tras dejar su cátedra de Basilea pasó diez años sin casa fija, buscando el clima que su salud toleraba: los veranos en los Alpes y los inviernos junto al Mediterráneo.",
  "nota": "La línea une las paradas por orden de llegada. Entre 1881 y 1888 no hubo un solo camino: cada año iba y venía entre los Alpes y la costa.",
  "notaFronteras": "Las fronteras son las de 1880. Cuando Nietzsche nació no existían ni el Imperio alemán (1871) ni el Reino de Italia (1861): Röcken y Naumburg pertenecían al reino de Prusia, y Leipzig, al de Sajonia.",
  "marco": [4.4, 42.95, 14.3, 52.05],
  "fronteras": 1880,
  "detalle": { "marco": [10.95, 50.78, 12.75, 51.52], "en": [0.585, 0.2], "ancho": 0.4, "internos": true },
  "rotulos": [
   { "t": "Imperio alemán", "tipo": "pais", "lon": 8.35, "lat": 50.0 },
   { "t": "Francia", "tipo": "pais", "lon": 5.6, "lat": 47.35 },
   { "t": "Suiza", "tipo": "pais", "lon": 8.1, "lat": 46.82 },
   { "t": "Reino de Italia", "tipo": "pais", "lon": 10.9, "lat": 44.95 },
   { "t": "Austria-Hungría", "tipo": "pais", "lon": 12.45, "lat": 47.2 },
   { "t": "Bélgica", "tipo": "pais", "lon": 5.1, "lat": 50.55 },
   { "t": "Países Bajos", "tipo": "pais", "lon": 5.3, "lat": 51.75 },
   { "t": "Luxemburgo", "tipo": "menor", "lon": 6.1, "lat": 49.75 },
   { "t": "Prusia", "tipo": "interno", "lon": 11.45, "lat": 51.4, "det": true },
   { "t": "Sajonia", "tipo": "interno", "lon": 12.5, "lat": 51.05, "det": true },
   { "t": "Ducados turingios", "tipo": "interno", "lon": 12.0, "lat": 50.93, "det": true },
   { "t": "Mar de Liguria", "tipo": "mar", "lon": 8.75, "lat": 43.55 }
  ],
  "paradas": [
   { "lugar": "Röcken", "fechas": "1844-1850", "lon": 12.131, "lat": 51.241, "det": true,
     "t": "Nace el 15 de octubre de 1844 en la casa parroquial: su padre es el pastor luterano del pueblo. El padre muere en 1849 y, al año siguiente, la familia se traslada a Naumburg. En Röcken está enterrado." },
   { "lugar": "Naumburg y Pforta", "fechas": "1850-1864", "lon": 11.810, "lat": 51.152, "det": true,
     "t": "Infancia en Naumburg, con su madre y su hermana. De 1858 a 1864 estudia interno en la escuela de Pforta, a pocos kilómetros, donde recibe una sólida formación en lenguas clásicas. Tras su colapso, su madre lo cuidará en Naumburg de 1890 a 1897." },
   { "lugar": "Bonn", "fechas": "1864-1865", "lon": 7.100, "lat": 50.735,
     "t": "Empieza en la universidad Teología y Filología clásica; pronto abandona la Teología. Al cabo de un año sigue a su profesor Friedrich Ritschl a Leipzig." },
   { "lugar": "Leipzig", "fechas": "1865-1869", "lon": 12.375, "lat": 51.340, "det": true,
     "t": "Estudia Filología clásica con Ritschl. En 1865 descubre en una librería de viejo <em>El mundo como voluntad y representación</em>, de Schopenhauer, y en noviembre de 1868 conoce a Richard Wagner." },
   { "lugar": "Basilea", "fechas": "1869-1879", "lon": 7.588, "lat": 47.558,
     "t": "Con 24 años, y sin haberse doctorado todavía, es nombrado profesor de Filología clásica de la universidad. Escribe <em>El nacimiento de la tragedia</em> (1872) y <em>Humano, demasiado humano</em> (1878). En 1879 deja la cátedra por enfermedad y empieza su vida errante." },
   { "lugar": "Génova", "fechas": "inviernos de 1880 a 1883", "lon": 8.934, "lat": 44.407,
     "t": "Su primer refugio de invierno junto al Mediterráneo. Aquí termina <em>Aurora</em> (1881) y escribe <em>La gaya ciencia</em> (1882); en la cercana Rapallo compone, en enero de 1883, la primera parte de <em>Así habló Zaratustra</em>." },
   { "lugar": "Sils-Maria", "fechas": "veranos de 1881 y de 1883 a 1888", "lon": 9.764, "lat": 46.429,
     "t": "Siete veranos en la Alta Engadina, a 1800 metros de altitud. En agosto de 1881, paseando junto al lago de Silvaplana, concibe la idea del eterno retorno. Aquí escribe la segunda parte de <em>Así habló Zaratustra</em> (1883) y <em>La genealogía de la moral</em> (1887)." },
   { "lugar": "Niza", "fechas": "inviernos de 1883 a 1888", "lon": 7.266, "lat": 43.703,
     "t": "Cinco inviernos seguidos en la Costa Azul. Aquí termina la tercera parte de <em>Así habló Zaratustra</em> (1884) y trabaja en <em>Más allá del bien y del mal</em> (1886)." },
   { "lugar": "Turín", "fechas": "1888-1889", "lon": 7.687, "lat": 45.070,
     "t": "Pasa aquí la primavera y el otoño de 1888, su último año de trabajo: escribe <em>El caso Wagner</em> y <em>Ecce homo</em>, y termina <em>El Anticristo</em>. En los primeros días de enero de 1889 sufre el colapso mental del que ya no se recuperará." },
   { "lugar": "Weimar", "fechas": "1897-1900", "lon": 11.329, "lat": 50.979, "det": true,
     "t": "Tras el colapso es internado en una clínica de Basilea y después en la de Jena (1889-1890); luego vive al cuidado de su madre en Naumburg. Muerta ella, en 1897 su hermana Elisabeth lo lleva a Weimar, a la sede del Archivo Nietzsche. Muere el 25 de agosto de 1900." }
  ]
 },
 "marx": {
  "titulo": "Los lugares de Marx",
  "intro": "Marx nació prusiano y murió apátrida. La censura y las expulsiones lo llevaron de Prusia a París, de París a Bruselas y, tras la revolución de 1848, a Londres, donde pasó exiliado la segunda mitad de su vida.",
  "nota": "La línea sigue el orden del viaje. A Colonia y a París volvió: en 1848 fue de Bruselas a Colonia, tras unas semanas en París, y en 1849, de Colonia a París y de allí a Londres.",
  "notaFronteras": "Las fronteras son las de 1849. Alemania no existía como Estado: había una Confederación Germánica, una liga de unos cuarenta estados soberanos encabezada por Austria y Prusia. Tréveris, Bonn y Colonia pertenecían desde 1815 al reino de Prusia, cuyo territorio estaba partido en dos. Los demás estados alemanes (Hannover, Sajonia, Baviera, Wurtemberg…) van aquí en un mismo color, separados por líneas de puntos.",
  "marco": [-1.1, 47.9, 15.6, 54.5],
  "fronteras": 1849,
  "internos": true,
  "detalle": { "marco": [6.4, 50.58, 7.3, 51.08], "en": [0.21, 0.03], "ancho": 0.17 },
  "ruta": [1, 2, 3, 4, 5, 6, 4, 5, 7],
  "rotulos": [
   { "t": "Reino de Prusia", "tipo": "pais", "lon": 12.3, "lat": 53.15, "partir": true },
   { "t": "Prusia", "tipo": "pais", "lon": 8.0, "lat": 51.75 },
   { "t": "Francia", "tipo": "pais", "lon": 4.6, "lat": 48.5 },
   { "t": "Reino Unido", "tipo": "pais", "lon": 0.35, "lat": 52.75, "partir": true },
   { "t": "Bélgica", "tipo": "pais", "lon": 4.6, "lat": 50.4 },
   { "t": "Países Bajos", "tipo": "pais", "lon": 5.65, "lat": 52.4, "partir": true },
   { "t": "Luxemburgo", "tipo": "menor", "lon": 5.6, "lat": 49.26 },
   { "t": "Imperio austriaco", "tipo": "pais", "lon": 13.9, "lat": 49.6, "partir": true },
   { "t": "Hannover", "tipo": "interno", "lon": 9.5, "lat": 52.8 },
   { "t": "Sajonia", "tipo": "interno", "lon": 13.2, "lat": 51.0 },
   { "t": "Baviera", "tipo": "interno", "lon": 11.5, "lat": 49.0 },
   { "t": "Wurtemberg", "tipo": "interno", "lon": 9.2, "lat": 48.5 },
   { "t": "Mar del Norte", "tipo": "mar", "lon": 6.7, "lat": 54.1 },
   { "t": "Canal de la Mancha", "tipo": "mar", "lon": 0.1, "lat": 50.45, "partir": true }
  ],
  "paradas": [
   { "lugar": "Tréveris", "fechas": "1818-1835", "lon": 6.641, "lat": 49.757,
     "t": "Nace el 5 de mayo de 1818, hijo de un abogado de origen judío convertido al protestantismo. Estudia en el instituto de la ciudad hasta 1835. Aquí conoce a Jenny von Westphalen, con quien se casará en 1843." },
   { "lugar": "Bonn", "fechas": "1835-1836", "lon": 7.099, "lat": 50.734, "det": true,
     "t": "Empieza Derecho en la universidad. Pasa un año de vida estudiantil más que de estudio, y su padre lo manda a continuar la carrera en Berlín." },
   { "lugar": "Berlín", "fechas": "1836-1841", "lon": 13.405, "lat": 52.520,
     "t": "Deja el Derecho por la Filosofía y se une a los jóvenes hegelianos. En 1841 se doctora con una tesis sobre Demócrito y Epicuro: la presenta en la Universidad de Jena, sin pasar por ella." },
   { "lugar": "Colonia", "fechas": "1842-1843 y 1848-1849", "lon": 6.958, "lat": 50.938, "det": true,
     "t": "Dirige la <em>Gaceta Renana</em> (<em>Rheinische Zeitung</em>), un diario liberal que el Gobierno prusiano prohíbe en 1843. Vuelve con la revolución de 1848 y funda la <em>Nueva Gaceta Renana</em>; en mayo de 1849 lo expulsan de Prusia, y el último número sale impreso en tinta roja." },
   { "lugar": "París", "fechas": "1843-1845 y 1849", "lon": 2.352, "lat": 48.857,
     "t": "Recién casado, llega para publicar una revista con Arnold Ruge. Escribe los <em>Manuscritos económico-filosóficos</em> (1844) y, ese mismo año, comienza su amistad con Friedrich Engels. Francia lo expulsa en 1845, a petición de Prusia; en 1849 vuelve unos meses, camino de Londres." },
   { "lugar": "Bruselas", "fechas": "1845-1848", "lon": 4.352, "lat": 50.847,
     "t": "Aquí escribe las <em>Tesis sobre Feuerbach</em> (1845) y, con Engels, <em>La ideología alemana</em> y el <em>Manifiesto comunista</em>, que se publica en Londres en febrero de 1848. Días después estalla la revolución en París, y Bélgica lo expulsa." },
   { "lugar": "Londres", "fechas": "1849-1883", "lon": -0.128, "lat": 51.507,
     "t": "Su exilio definitivo: más de treinta años, muchos de ellos en la pobreza y con la ayuda económica de Engels. Estudia economía en la biblioteca del Museo Británico y publica el primer libro de <em>El capital</em> (1867). Muere el 14 de marzo de 1883 y está enterrado en el cementerio de Highgate." }
  ]
 },
 "descartes": {
  "titulo": "Los lugares de Descartes",
  "intro": "Descartes nació en Francia, pero escribió casi toda su obra en las Provincias Unidas, la república holandesa donde vivió veinte años buscando tranquilidad y libertad para pensar. Antes había recorrido media Europa como soldado y como viajero; al final aceptó la invitación de la reina Cristina de Suecia y murió en Estocolmo, a los pocos meses de llegar.",
  "nota": "La línea une las paradas por orden de llegada y simplifica mucho. Entre 1620 y 1625 Descartes viajó sin residencia fija por Alemania, Francia e Italia, y en las Provincias Unidas cambió a menudo de casa (Franeker, Deventer, Utrecht, Santpoort…): aquí solo se señalan tres de sus residencias. Las fechas del colegio y el lugar exacto de la noche de los sueños no se conocen con seguridad.",
  "notaFronteras": "Las fronteras son las de 1648, el año de la Paz de Westfalia. Alemania no existía como Estado: el Sacro Imperio Romano Germánico era un mosaico de más de trescientos principados, obispados y ciudades libres; aquí va en un solo color, con algunos de sus estados mayores separados por líneas de puntos. Holanda era la provincia principal de una república, las Provincias Unidas; los Países Bajos del sur, el Franco Condado y Milán (los tres, en un mismo color) eran del rey de España. Francia era más pequeña que hoy: le faltaban Lorena, Estrasburgo y el Artois.",
  "marco": [-4.8, 45.35, 20.8, 60.7],
  "fronteras": 1648,
  "lagoMin": 5,
  "internos": true,
  "detalle": { "marco": [3.75, 51.2, 6.5, 52.95], "en": [0.03, 0.02], "ancho": 0.39, "internos": true },
  "rotulos": [
   { "t": "Reino de Francia", "tipo": "pais", "lon": 2.9, "lat": 47.6, "partir": true },
   { "t": "Sacro Imperio Romano Germánico", "tipo": "pais", "lon": 10.6, "lat": 51.9, "partir": true },
   { "t": "Inglaterra", "tipo": "pais", "lon": -1.4, "lat": 52.4 },
   { "t": "Países Bajos españoles", "tipo": "menor", "lon": 4.3, "lat": 50.6, "partir": true },
   { "t": "Franco Condado", "tipo": "menor", "lon": 5.8, "lat": 47.3, "partir": true },
   { "t": "Confederación Suiza", "tipo": "menor", "lon": 8.8, "lat": 46.85, "partir": true },
   { "t": "Saboya", "tipo": "menor", "lon": 6.85, "lat": 45.85 },
   { "t": "Milán", "tipo": "menor", "lon": 9.0, "lat": 45.75 },
   { "t": "Venecia", "tipo": "menor", "lon": 11.9, "lat": 45.85 },
   { "t": "Dinamarca-Noruega", "tipo": "pais", "lon": 9.0, "lat": 57.85, "partir": true },
   { "t": "Suecia", "tipo": "pais", "lon": 14.7, "lat": 58.0 },
   { "t": "Polonia-Lituania", "tipo": "pais", "lon": 17.6, "lat": 52.6, "partir": true },
   { "t": "Reino de Hungría", "tipo": "menor", "lon": 18.05, "lat": 48.5, "partir": true },
   { "t": "Imperio otomano", "tipo": "menor", "lon": 18.1, "lat": 46.65, "partir": true },
   { "t": "Baviera", "tipo": "interno", "lon": 12.3, "lat": 48.05 },
   { "t": "Sajonia", "tipo": "interno", "lon": 13.5, "lat": 50.95 },
   { "t": "Brandeburgo", "tipo": "interno", "lon": 13.2, "lat": 52.5 },
   { "t": "Pomerania", "tipo": "interno", "lon": 15.6, "lat": 53.75 },
   { "t": "Bohemia", "tipo": "interno", "lon": 14.8, "lat": 49.8 },
   { "t": "Austria", "tipo": "interno", "lon": 14.6, "lat": 47.5 },
   { "t": "Lorena", "tipo": "interno", "lon": 6.2, "lat": 48.75 },
   { "t": "Mar del Norte", "tipo": "mar", "lon": 2.9, "lat": 53.55 },
   { "t": "Mar Báltico", "tipo": "mar", "lon": 17.6, "lat": 55.7 },
   { "t": "Canal de la Mancha", "tipo": "mar", "lon": -1.6, "lat": 50.0, "partir": true },
   { "t": "Provincias Unidas", "tipo": "pais", "lon": 5.75, "lat": 52.2, "partir": true, "det": true },
   { "t": "Holanda", "tipo": "interno", "lon": 4.75, "lat": 51.95, "det": true },
   { "t": "Zuiderzee", "tipo": "mar", "lon": 5.42, "lat": 52.57, "det": true }
  ],
  "paradas": [
   { "lugar": "La Haye en Touraine", "fechas": "1596", "lon": 0.700, "lat": 46.972,
     "t": "Nace el 31 de marzo de 1596, en una familia de la pequeña nobleza: su padre es consejero del Parlamento de Bretaña. Su madre muere al año siguiente y lo cría su abuela. El pueblo se llama hoy Descartes, en su honor." },
   { "lugar": "La Flèche", "fechas": "1607-1615", "lon": -0.075, "lat": 47.699,
     "t": "Estudia unos ocho años en el colegio de los jesuitas, fundado por Enrique IV y uno de los más célebres de Europa. De lo que aprende allí solo le convencen las matemáticas, «por la certeza y evidencia de sus razones». En 1616 se licencia en Derecho en la Universidad de Poitiers." },
   { "lugar": "Breda", "fechas": "1618-1619", "lon": 4.776, "lat": 51.589, "det": true,
     "t": "Se alista como voluntario en el ejército protestante de Mauricio de Nassau. En noviembre de 1618 conoce al científico holandés Isaac Beeckman, que despierta su interés por aplicar las matemáticas a la física; para él escribe su primera obra, el <em>Compendio de música</em>." },
   { "lugar": "Neuburg del Danubio", "fechas": "invierno de 1619-1620", "lon": 11.181, "lat": 48.737,
     "t": "Al comienzo de la guerra de los Treinta Años sirve en el ejército católico del duque de Baviera y pasa el invierno encerrado en una habitación caldeada por una estufa. La noche del 10 al 11 de noviembre de 1619 tiene tres sueños que interpreta como la llamada a fundar una ciencia nueva, con un método único. La tradición sitúa la escena aquí, en Neuburg; otros, cerca de Ulm." },
   { "lugar": "París", "fechas": "1625-1628", "lon": 2.352, "lat": 48.857,
     "t": "Tras varios años de viajes, el último por Italia, se instala en París. Frecuenta al padre Mersenne, que será su corresponsal y su enlace con los sabios de Europa, y trabaja en óptica y matemáticas. Escribe, sin llegar a terminarlas, las <em>Reglas para la dirección del espíritu</em>, y decide retirarse a un país donde pueda pensar en paz." },
   { "lugar": "Ámsterdam", "fechas": "1629-1635", "lon": 4.893, "lat": 52.373, "det": true,
     "t": "A finales de 1628 se traslada a las Provincias Unidas, donde vivirá veinte años. Tras unos meses en Franeker reside sobre todo en Ámsterdam: estudia anatomía y escribe <em>El mundo</em>, un tratado de física que defiende el movimiento de la Tierra. En 1633, al saber que Galileo ha sido condenado en Roma, renuncia a publicarlo." },
   { "lugar": "Leiden", "fechas": "1636-1637 y 1640-1643", "lon": 4.497, "lat": 52.160, "det": true,
     "t": "Aquí se imprime en 1637, en francés y sin nombre de autor, el <em>Discurso del método</em>, con tres ensayos científicos: la <em>Dióptrica</em>, los <em>Meteoros</em> y la <em>Geometría</em>. Vuelve en 1640 y, desde el cercano castillo de Endegeest, ve publicadas en París las <em>Meditaciones metafísicas</em> (1641). Son también los años de su disputa con Voetius, teólogo de Utrecht, que lo acusa de ateísmo." },
   { "lugar": "Egmond", "fechas": "1643-1649", "lon": 4.654, "lat": 52.610, "det": true,
     "t": "Sus años más tranquilos, en dos aldeas de la costa de Holanda. Publica <em>Los principios de la filosofía</em> (1644), dedicados a la princesa Isabel de Bohemia; de las cartas que se cruza con ella nace <em>Las pasiones del alma</em> (1649). Desde aquí hace tres viajes a Francia." },
   { "lugar": "Estocolmo", "fechas": "1649-1650", "lon": 18.069, "lat": 59.329,
     "t": "Llega en octubre de 1649, invitado por la reina Cristina de Suecia, que quiere recibir sus lecciones de filosofía a las cinco de la mañana, en pleno invierno. A los pocos meses enferma de pulmonía y muere el 11 de febrero de 1650. Sus restos se trasladaron a París años después." }
  ]
 },
 "platon": {
  "titulo": "Los lugares de Platón",
  "intro": "Platón fue ateniense toda su vida, pero salió de su ciudad para aprender y para intentar llevar la filosofía al gobierno. Tras la muerte de Sócrates se refugió en la vecina Mégara; hacia los cuarenta años viajó al sur de Italia y a Sicilia, adonde volvió dos veces, ya mayor, con la esperanza de educar a un tirano. Su mundo no era un país: lo formaban cientos de ciudades griegas independientes, repartidas por las costas del Mediterráneo, de Sicilia a Asia Menor.",
  "nota": "La línea sigue el primer viaje: de los otros dos a Siracusa, de ida y vuelta desde Atenas, no se dibuja el camino. Casi todas las fechas son aproximadas. La estancia en Mégara y la venta como esclavo en Egina las cuentan biógrafos muy posteriores, como Diógenes Laercio; los viajes a Sicilia, la «Carta VII», cuya autenticidad se discute. Los mismos biógrafos hablan de viajes a Cirene y a Egipto, que son dudosos y no se dibujan.",
  "notaFronteras": "El mapa enseña quién mandaba dónde hacia el 387 a. C., el año de la Paz del Rey. El color de las polis griegas no es un Estado: eran cientos de ciudades independientes, aliadas o enfrentadas según el momento (Atenas, Esparta, Tebas, Corinto…). Jonia y las demás ciudades griegas de Asia Menor estaban entonces bajo el rey persa. Sicilia se la repartían Cartago y Siracusa, cuyo tirano, Dionisio I, dominaba también la punta de Italia; Macedonia era todavía un reino pequeño. Los puntos son ciudades griegas en tierras de otros pueblos. En la Antigüedad no había fronteras trazadas: los límites son orientativos.",
  "marco": [11.2, 33.6, 30.0, 42.4],
  "fronteras": -387,
  "detalle": { "marco": [22.92, 37.52, 24.02, 38.2], "en": [0.25, 0.648], "ancho": 0.26 },
  "ruta": [1, 2, 1, 3, 4, 5, 1],
  "rotulos": [
   { "t": "Imperio persa", "tipo": "pais", "lon": 28.4, "lat": 39.05, "partir": true },
   { "t": "Polis griegas", "tipo": "pais", "lon": 22.5, "lat": 39.5, "partir": true },
   { "t": "Macedonia", "tipo": "menor", "lon": 22.2, "lat": 40.72 },
   { "t": "Cartago", "tipo": "menor", "lon": 12.7, "lat": 37.95 },
   { "t": "Siracusa", "tipo": "menor", "lon": 14.2, "lat": 37.6 },
   { "t": "Pueblos itálicos", "tipo": "pueblo", "lon": 15.3, "lat": 41.2 },
   { "t": "Ilirios", "tipo": "pueblo", "lon": 20.2, "lat": 41.75 },
   { "t": "Epiro", "tipo": "pueblo", "lon": 20.35, "lat": 40.0 },
   { "t": "Tracios", "tipo": "pueblo", "lon": 25.6, "lat": 41.75 },
   { "t": "Mar Egeo", "tipo": "mar", "lon": 25.05, "lat": 38.85 },
   { "t": "Mar Jónico", "tipo": "mar", "lon": 18.6, "lat": 38.75 },
   { "t": "Mar Tirreno", "tipo": "mar", "lon": 13.2, "lat": 39.9 },
   { "t": "Golfo Sarónico", "tipo": "mar", "lon": 23.81, "lat": 37.7, "det": true, "partir": true },
   { "t": "Ática", "tipo": "interno", "lon": 23.88, "lat": 38.12, "det": true }
  ],
  "ciudades": [
   [14.25, 40.84],   // Neápolis (Nápoles)
   [15.15, 40.16],   // Elea
   [16.49, 39.72],   // Turios
   [17.12, 39.08],   // Crotona
   [19.45, 41.32],   // Epidamno
   [19.47, 40.72],   // Apolonia
   [20.98, 39.16],   // Ambracia
   [23.85, 40.82],   // Anfípolis
   [24.97, 40.95],   // Abdera
   [25.52, 40.88],   // Maronea
   [26.08, 40.72],   // Eno
   [26.40, 40.28],   // Sestos
   [27.95, 40.97],   // Perinto
   [28.98, 41.01],   // Bizancio
   [26.69, 40.35],   // Lámpsaco
   [27.88, 40.39],   // Cícico
   [26.75, 38.67],   // Focea
   [26.77, 38.36],   // Clazómenas
   [27.34, 37.94],   // Éfeso
   [27.28, 37.53],   // Mileto
   [27.42, 37.04]    // Halicarnaso
  ],
  "leyenda": [
   { "t": "Polis griegas (ciudades independientes)", "tono": 4 },
   { "t": "Imperio persa", "tono": 2 },
   { "t": "Reino de Macedonia", "tono": 8 },
   { "t": "Cartago", "tono": 9 },
   { "t": "Siracusa (Dionisio I)", "tono": 1 },
   { "t": "Otros pueblos", "tono": 0 },
   { "t": "Ciudad griega en tierra de otros", "ciudad": true }
  ],
  "paradas": [
   { "lugar": "Atenas", "fechas": "h. 427-347 a. C.", "lon": 23.727, "lat": 37.984, "det": true,
     "t": "Nace hacia el 427 a. C., en una familia aristocrática y en plena guerra del Peloponeso. Hacia los veinte años se hace discípulo de Sócrates, cuya condena a muerte, en el 399, lo aparta de la política. Hacia el 387, de vuelta de Sicilia, funda la Academia en un jardín de las afueras: allí enseña cuarenta años, tiene por alumno a Aristóteles y escribe diálogos como el <em>Banquete</em>, el <em>Fedón</em>, la <em>República</em> y el <em>Fedro</em>. Muere en el 347 a. C." },
   { "lugar": "Mégara", "fechas": "399 a. C.", "lon": 23.344, "lat": 37.996, "det": true,
     "t": "Tras la muerte de Sócrates, Platón y otros discípulos se retiran un tiempo a casa de Euclides de Mégara, que también lo había sido. Mégara estaba a un día de camino, pero era otra polis, y del bando de Esparta en la guerra que Atenas acababa de perder. De vuelta en su ciudad escribe sus primeros diálogos, como la <em>Apología de Sócrates</em> y el <em>Critón</em>." },
   { "lugar": "Tarento", "fechas": "h. 388 a. C.", "lon": 17.24, "lat": 40.47,
     "t": "Con unos cuarenta años viaja a la Magna Grecia, el sur de Italia poblado de ciudades griegas, para conocer a los pitagóricos. En Tarento, colonia fundada por espartanos, se hace amigo de Arquitas, matemático y político pitagórico que llegará a gobernar la ciudad. De ellos aprende a ver en las matemáticas el camino hacia lo que no cambia, y comparte su creencia en la inmortalidad del alma." },
   { "lugar": "Siracusa", "fechas": "h. 388, 367 y 361 a. C.", "lon": 15.29, "lat": 37.07,
     "t": "Tres viajes y tres fracasos. En el primero conoce la corte del tirano Dionisio I y gana para la filosofía al joven Dion, cuñado del tirano. Muerto este, Dion lo llama en el 367 para educar a Dionisio II como rey filósofo; pero el nuevo tirano destierra a Dion y retiene a Platón, que vuelve todavía en el 361, sin más éxito, y logra salir gracias a Arquitas. Lo cuenta la <em>Carta VII</em>, atribuida a Platón." },
   { "lugar": "Egina", "fechas": "h. 387 a. C.", "lon": 23.428, "lat": 37.747, "det": true,
     "t": "Según la tradición, Dionisio I, molesto por su franqueza, lo entregó a un embajador espartano, que lo llevó a Egina para venderlo como esclavo. La isla, a la vista de Atenas, era entonces su enemiga y servía de base a la flota de Esparta. Lo compró y lo dejó libre Aníceris de Cirene, y Platón pudo volver a casa. No es seguro que ocurriera." }
  ]
 },
 "aristoteles": {
  "titulo": "Los lugares de Aristóteles",
  "intro": "Aristóteles no era ateniense: nació en Estagira, una pequeña ciudad griega del norte, vecina del reino de Macedonia, y en Atenas vivió siempre como extranjero. Pasó veinte años en la Academia de Platón y otros doce de viaje, por la costa de Asia Menor, la isla de Lesbos y la corte macedonia, antes de volver a Atenas para fundar su propia escuela, el Liceo. Su vida coincide con el ascenso de Macedonia, cuyos reyes, Filipo II y su hijo Alejandro, acabaron mandando sobre toda Grecia.",
  "nota": "Las fechas son las que se suelen dar; las de Aso, Mitilene y la corte macedonia son aproximadas. El número 5 está en Mieza: que las lecciones se dieran allí lo cuenta Plutarco, más de cuatro siglos después. La vuelta a Estagira hacia el 340 a. C. y la reconstrucción de la ciudad a petición suya son tradición: la línea pasa por allí, pero no es seguro.",
  "notaFronteras": "El mapa enseña quién mandaba dónde hacia el 335 a. C., el año en que Aristóteles funda el Liceo. Filipo II había hecho de Macedonia la primera potencia de Grecia: venció a Atenas y a Tebas en Queronea (338 a. C.) y reunió a las polis en la Liga de Corinto. Las rayas significan hegemonía: esas ciudades conservaban sus leyes y su gobierno, pero estaban obligadas a seguir al rey macedonio en la guerra y en la política exterior; Tebas se rebeló y Alejandro la destruyó ese mismo año. Esparta no entró en la Liga, y de las islas cercanas a Asia no consta que lo hicieran. Los tracios, vencidos por Filipo, pagaban tributo a Macedonia. Asia Menor, con sus ciudades griegas, seguía bajo el Imperio persa: al año siguiente Alejandro cruzó el estrecho y la invadió. Los puntos son ciudades griegas en tierras de otros. En la Antigüedad no había fronteras trazadas: los límites son orientativos.",
  "marco": [20.6, 36.0, 28.6, 41.7],
  "fronteras": -335,
  "ruta": [1, 2, 3, 4, 5, 1, 2, 6],
  "curvas": { "1>2": -0.24, "4>5": -0.1, "5>1": -0.12 },   // de Estagira a Atenas, por el mar y sin pasar bajo el 6 (Calcis); de Mitilene a Mieza, sin rozar el 1
  "rotulos": [
   { "t": "Reino de Macedonia", "tipo": "pais", "lon": 22.95, "lat": 41.0, "partir": true },
   { "t": "Imperio persa", "tipo": "pais", "lon": 28.0, "lat": 39.2, "partir": true },
   { "t": "Liga de Corinto", "tipo": "pais", "lon": 22.0, "lat": 39.45, "partir": true },
   { "t": "Esparta", "tipo": "menor", "lon": 22.5, "lat": 36.95 },
   { "t": "Tracios", "tipo": "pueblo", "lon": 26.2, "lat": 41.42 },
   { "t": "Epiro", "tipo": "pueblo", "lon": 20.98, "lat": 39.72 },
   { "t": "Peonios", "tipo": "pueblo", "lon": 21.95, "lat": 41.5 },
   { "t": "Mar Egeo", "tipo": "mar", "lon": 25.0, "lat": 38.2 },
   { "t": "Mar Jónico", "tipo": "mar", "lon": 21.05, "lat": 37.05, "partir": true }
  ],
  "ciudades": [
   [20.98, 39.16],   // Ambracia
   [24.97, 40.95],   // Abdera
   [25.52, 40.88],   // Maronea
   [26.08, 40.72],   // Eno
   [26.40, 40.28],   // Sestos
   [27.95, 40.97],   // Perinto
   [26.69, 40.35],   // Lámpsaco
   [27.88, 40.39],   // Cícico
   [26.92, 39.09],   // Atarneo
   [26.75, 38.67],   // Focea
   [26.77, 38.36],   // Clazómenas
   [27.34, 37.94],   // Éfeso
   [27.28, 37.53],   // Mileto
   [27.42, 37.04]    // Halicarnaso
  ],
  "leyenda": [
   { "t": "Reino de Macedonia", "tono": 8 },
   { "t": "Polis de la Liga de Corinto (hegemonía macedonia)", "tono": 4, "trama": 8 },
   { "t": "Polis griegas fuera de la Liga", "tono": 4 },
   { "t": "Imperio persa", "tono": 2 },
   { "t": "Tracios, sometidos a Macedonia", "tono": 0, "trama": 8 },
   { "t": "Otros pueblos", "tono": 0 },
   { "t": "Ciudad griega en tierra de otros", "ciudad": true }
  ],
  "paradas": [
   { "lugar": "Estagira", "fechas": "384-367 y h. 340-335 a. C.", "lon": 23.795, "lat": 40.592,
     "t": "Nace en el 384 a. C. en esta pequeña ciudad de la Calcídica, fundada por colonos de la isla de Andros. Su padre, Nicómaco, era médico de Amintas III, rey de Macedonia y abuelo de Alejandro: de ahí le viene el trato con la corte. Filipo II arrasó la ciudad en el 348; según la tradición, la reconstruyó a petición de Aristóteles, que habría vivido aquí otra vez antes de volver a Atenas." },
   { "lugar": "Atenas", "fechas": "367-347 y 335-323 a. C.", "lon": 23.727, "lat": 37.984,
     "t": "Llega con diecisiete años para estudiar en la Academia de Platón y se queda veinte, hasta la muerte del maestro. Vuelve en el 335, con Grecia ya bajo el dominio de Macedonia, y funda su escuela en el Liceo, un gimnasio de las afueras; a sus miembros se los llamó «peripatéticos», seguramente por los paseos cubiertos del lugar. De sus lecciones proceden las obras que conservamos, como la <em>Metafísica</em>, la <em>Ética a Nicómaco</em>, la <em>Política</em> y <em>Acerca del alma</em>. Como extranjero, no podía tener en Atenas casa ni tierras propias." },
   { "lugar": "Aso", "fechas": "347-345 a. C.", "lon": 26.337, "lat": 39.49,
     "t": "Muerto Platón, la Academia queda en manos de su sobrino Espeusipo y Aristóteles se marcha a Aso, en la costa de Asia Menor. Lo acoge Hermias, señor de Atarneo y de Aso, que había tenido trato con la Academia y gobernaba casi por su cuenta bajo el rey persa. Aquí reúne a un pequeño grupo de filósofos y se casa con Pitias, sobrina o hija adoptiva de Hermias." },
   { "lugar": "Mitilene (Lesbos)", "fechas": "345-343 a. C.", "lon": 26.555, "lat": 39.105,
     "t": "Pasa a la isla de Lesbos, la tierra de Teofrasto, que será su colaborador y su sucesor al frente del Liceo. Aquí estudia de cerca a los animales, sobre todo a los marinos: muchas observaciones de la <em>Historia de los animales</em> vienen de estas costas y de la laguna de Pirra. Por eso se lo considera el fundador de la biología." },
   { "lugar": "Pela y Mieza", "fechas": "h. 343-340 a. C.", "lon": 22.05, "lat": 40.64,
     "t": "Filipo II lo llama a la corte de Macedonia, en Pela, para que eduque a su hijo Alejandro, que tiene trece años. Según Plutarco, las lecciones se daban en Mieza, un lugar retirado a unos treinta kilómetros de la capital. Duran unos tres años: en el 340 Alejandro empieza a gobernar en ausencia de su padre. De lo que le enseñó no sabemos casi nada." },
   { "lugar": "Calcis (Eubea)", "fechas": "323-322 a. C.", "lon": 23.595, "lat": 38.463,
     "t": "Al morir Alejandro, en el 323, Atenas se levanta contra Macedonia, y Aristóteles, amigo de los macedonios, es acusado de impiedad. Deja el Liceo a Teofrasto y se retira a Calcis, en la isla de Eubea, donde la familia de su madre tenía una casa. Allí muere al año siguiente, de una enfermedad, a los sesenta y dos años." }
  ]
 },
 "presocraticos": {
  "titulo": "Los lugares de los presocráticos",
  "intro": "La filosofía griega no nació en Atenas, sino en las ciudades de la periferia: primero en Jonia, en la costa de Asia Menor, y después en la Magna Grecia, el sur de Italia y Sicilia, adonde llegaron muchos jonios huyendo de los persas. Eran puertos y colonias, abiertos al comercio y a otras culturas. El mapa sigue a los presocráticos ciudad a ciudad, más o menos por orden de aparición.",
  "nota": "Cada número es una ciudad: la de nacimiento de un pensador o aquella en la que enseñó. Las fechas son aproximadas, y buena parte de lo que se sabe de sus vidas lo cuentan biógrafos muy posteriores, como Diógenes Laercio.",
  "notaFronteras": "El mapa no dibuja fronteras: entre los siglos VI y V a. C. el mundo griego eran cientos de ciudades independientes, repartidas por las costas del Mediterráneo, y desde el 546 a. C. las de Jonia estaban bajo el rey persa. Solo se nombran las regiones.",
  "marco": [11.6, 33.4, 29.6, 42.3],
  "sinRuta": true,
  "sinFronteras": true,
  "detalle": { "marco": [26.2, 37.35, 27.75, 38.55], "en": [0.25, 0.52], "ancho": 0.3 },
  "zonas": [
   { "tipo": "h", "poly": [[26.15, 38.85], [27.15, 38.85], [27.75, 38.55], [28.0, 38.1], [27.95, 37.6], [27.6, 37.3], [27.1, 37.28], [26.5, 37.55], [25.8, 38.1], [25.8, 38.65]] },
   { "tipo": "d", "poly": [[14.75, 40.72], [15.6, 40.95], [16.6, 40.85], [17.5, 40.75], [18.7, 40.45], [18.7, 39.6], [17.6, 37.7], [15.66, 37.7], [15.66, 38.32], [15.4, 38.9], [15.25, 39.55], [14.55, 39.95]] },
   { "tipo": "d", "poly": [[13.1, 38.4], [15.75, 38.4], [15.75, 36.5], [12.9, 36.9]] }
  ],
  "grupos": [
   { "t": "Milesios", "paradas": [1],
     "d": "Tales, Anaximandro y Anaxímenes, de Mileto, buscan el <em>arjé</em>, el principio del que está hecho todo." },
   { "t": "Pitagóricos", "paradas": [2, 4], "viajes": [{ "de": 2, "a": 4 }],
     "d": "Pitágoras nace en Samos y funda su comunidad en Crotona; sus seguidores, como Filolao, ven en los números la clave del universo." },
   { "t": "Heráclito", "paradas": [5],
     "d": "Heráclito de Éfeso no tuvo escuela: todo cambia, pero según una ley, el <em>logos</em>." },
   { "t": "Eléatas", "paradas": [3, 6, 2], "viajes": [{ "de": 3, "a": [15.08, 37.5] }, { "de": [15.08, 37.5], "a": 6, "dudoso": true }],
     "d": "Parménides y Zenón, de Elea, y Meliso, de Samos: el ser no puede cambiar y los sentidos engañan. La tradición hace de Jenófanes, de Colofón, su precursor." },
   { "t": "Pluralistas", "paradas": [7, 8, 9], "viajes": [{ "de": 7, "a": 9 }],
     "d": "Empédocles, de Acragas, y Anaxágoras, de Clazómenas, que enseñó en Atenas: todo está hecho de muchos elementos que se mezclan y se separan." },
   { "t": "Atomistas", "paradas": [10], "viajes": [{ "de": 1, "a": 10, "dudoso": true }, { "de": 6, "a": 10, "dudoso": true, "comba": -0.12 }],
     "d": "Leucipo y Demócrito, en Abdera: todo está hecho de átomos que se mueven en el vacío." }
  ],
  "rotulos": [
   { "t": "Magna Grecia", "tipo": "region", "lon": 16.55, "lat": 40.55, "partir": true },
   { "t": "Sicilia", "tipo": "region", "lon": 14.35, "lat": 37.85 },
   { "t": "Grecia", "tipo": "region", "lon": 21.9, "lat": 39.45 },
   { "t": "Tracia", "tipo": "region", "lon": 25.6, "lat": 41.55 },
   { "t": "Asia Menor", "tipo": "region", "lon": 28.9, "lat": 39.35, "partir": true },
   { "t": "Mar Egeo", "tipo": "mar", "lon": 25.0, "lat": 38.95 },
   { "t": "Mar Jónico", "tipo": "mar", "lon": 19.0, "lat": 38.95 },
   { "t": "Mar Tirreno", "tipo": "mar", "lon": 13.2, "lat": 39.9 },
   { "t": "Jonia", "tipo": "region", "lon": 27.45, "lat": 38.3, "det": true }
  ],
  "paradas": [
   { "lugar": "Mileto", "anio": -585, "fechas": "s. VI a. C.", "lon": 27.28, "lat": 37.53, "det": true, "biografia": ["tales", "anaximandro", "anaximenes"],
     "t": "La ciudad más rica de Jonia, un puerto abierto a Egipto, Fenicia y Babilonia. Aquí empiezan la filosofía y la ciencia griegas con tres pensadores que buscan el <em>arjé</em>, el principio de todas las cosas: Tales (el agua), Anaximandro (el <em>ápeiron</em>, lo ilimitado) y Anaxímenes (el aire). Los persas arrasaron Mileto en el 494 a. C. Hoy sus ruinas quedan a unos ocho kilómetros del mar: los sedimentos del río Meandro cegaron la bahía." },
   { "lugar": "Samos", "anio": -570, "anioGrupo": { "3": -440 }, "fechas": "h. 570-530 a. C. y s. V a. C.", "lon": 26.94, "lat": 37.69, "det": true, "biografia": ["pitagoras", "meliso"],
     "t": "En esta isla, frente a Mileto, nace Pitágoras hacia el 570 a. C. Hacia el 530 se marcha a Italia, según se cuenta, huyendo del tirano Polícrates. En el siglo siguiente es de Samos Meliso, seguidor de Parménides, que además mandó la flota de la isla contra Atenas." },
   { "lugar": "Colofón", "anio": -546, "fechas": "h. 570-546 a. C.", "lon": 27.14, "lat": 38.12, "det": true, "biografia": ["jenofanes"],
     "t": "Patria de Jenófanes. Cuando los persas conquistan Jonia, en el 546 a. C., la deja con unos veinticinco años y pasa el resto de su larga vida viajando por las ciudades griegas, sobre todo de Sicilia, recitando sus versos. En ellos se burla de los dioses con forma humana: si los bueyes supieran pintar, pintarían dioses con forma de buey." },
   { "lugar": "Crotona", "anio": -530, "fechas": "desde h. 530 a. C.", "lon": 17.12, "lat": 39.08, "biografia": ["pitagoras", "filolao"],
     "t": "En esta colonia del sur de Italia funda Pitágoras una comunidad de vida en común, con reglas sobre la comida y el silencio, que estudia los números como clave del universo y llega a gobernar la ciudad. Una revuelta acaba con su poder y Pitágoras muere en la vecina Metaponto. De Crotona es también Filolao (s. V a. C.), el primer pitagórico que escribió un libro." },
   { "lugar": "Éfeso", "anio": -500, "fechas": "h. 540-480 a. C.", "lon": 27.34, "lat": 37.94, "det": true, "biografia": ["heraclito"],
     "t": "Heráclito, de familia noble, vive aquí apartado de la política y de la gente. Dice que todo cambia, como un río en el que no podemos bañarnos dos veces, pero que el cambio sigue una ley, el <em>logos</em>. Lo llamaban «el Oscuro» por su estilo, y según la tradición dejó su libro en el templo de Ártemis." },
   { "lugar": "Elea", "anio": -480, "fechas": "s. V a. C.", "lon": 15.15, "lat": 40.16, "biografia": ["parmenides", "zenon_elea"],
     "t": "Colonia fundada hacia el 540 a. C. en el sur de Italia por jonios de Focea que huían de los persas. Aquí Parménides escribe un poema sobre el ser: lo que es, es, y no puede cambiar ni dejar de ser; los sentidos engañan. Según la tradición dio leyes a la ciudad. Su discípulo Zenón lo defiende con paradojas como la de Aquiles y la tortuga." },
   { "lugar": "Clazómenas", "anio": -500, "fechas": "h. 500 a. C.", "lon": 26.77, "lat": 38.36, "det": true, "biografia": ["anaxagoras"],
     "t": "Ciudad jonia en la que nace Anaxágoras, de familia rica. Según se cuenta, deja sus bienes a sus parientes para dedicarse a estudiar la naturaleza. Para él, todo está en todo, mezclado en partes diminutas, y lo ordena una inteligencia, el <em>noûs</em>." },
   { "lugar": "Acragas (Agrigento)", "anio": -465, "fechas": "h. 495-435 a. C.", "lon": 13.58, "lat": 37.31, "biografia": ["empedocles"],
     "t": "Rica ciudad griega del sur de Sicilia. Empédocles, de familia noble, defiende aquí la democracia y, según la tradición, rechaza ser rey. Enseña que todo está hecho de cuatro raíces (tierra, agua, aire y fuego), que unen el Amor y separan el Odio. La leyenda dice que murió arrojándose al Etna." },
   { "lugar": "Atenas", "anio": -455, "fechas": "h. 460-430 a. C.", "lon": 23.73, "lat": 37.98, "biografia": ["anaxagoras"],
     "t": "Anaxágoras trae la filosofía de Jonia a Atenas, donde vive unos treinta años y es amigo de Pericles. Acusado de impiedad por decir que el Sol es una piedra incandescente, se va a Lámpsaco, donde muere hacia el 428 a. C. Según Platón, hacia el 450 visitaron Atenas Parménides y Zenón; Demócrito, en cambio, contaba que estuvo allí y nadie lo conoció." },
   { "lugar": "Abdera", "anio": -430, "fechas": "s. V a. C.", "lon": 24.98, "lat": 40.94, "biografia": ["leucipo", "democrito"],
     "t": "Colonia jonia en la costa de Tracia. Aquí enseña Demócrito (h. 460-370 a. C.): todo está hecho de átomos, partículas indivisibles que se mueven en el vacío. Aprendió la idea de Leucipo, de quien se sabe muy poco; la tradición lo sitúa en Abdera, aunque otros lo hacen de Mileto o de Elea. También era de Abdera el sofista Protágoras." }
  ]
 }
};
