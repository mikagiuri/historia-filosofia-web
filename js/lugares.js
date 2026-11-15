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
                           "interno" (estado de dentro de otro) o "mar"; det: true si va en el recuadro ampliado
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
 }
};
