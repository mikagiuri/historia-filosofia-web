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
                           La ficha lo dice («Fronteras de 1880»); lo que haga falta aclarar va en «nota»
     detalle               … con «internos»: true, el recuadro traza además los estados de dentro (Prusia, Sajonia…)
     rotulos               los nombres del mapa, con el nombre DE LA ÉPOCA («Imperio alemán», no «Alemania»); el texto no
                           va en la imagen: lo pone lugaresview.js. tipo: "pais", "menor" (país pequeño, letra menor),
                           "interno" (estado de dentro de otro) o "mar"; det: true si va en el recuadro ampliado;
                           partir: true si el nombre es largo y va en dos líneas
     internos              true: el mapa general traza también los estados de dentro (en línea de puntos)
     ruta                  solo si volvió a algún sitio: los números de las paradas en el orden real del viaje, con
                           repeticiones ([1, 2, 3, 2, 4]). Sin «ruta», la línea une las paradas por su orden
     paradas               en orden de llegada; el número es su posición. lugar, fechas, t (qué hizo o escribió allí),
                           lon, lat reales; det: true si se dibuja en el recuadro ampliado
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
 }
};
