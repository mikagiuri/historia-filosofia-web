"use strict";
/* ===== «Rayuela filosófica» (Historia de la Filosofía 2.º) — datos =====
   Idea y grafo del profesor (12-2025): «El camino de la filosofía» / «Metro filosófico»
   (documento original: ver docs/13_diseno_narrativa_marco_HF.md, que es también el diseño).
   Red 1 (de Sócrates a Descartes) y Red 2 (25-09: los modernos, de Galileo a Mill; transbordos desde 5, 7 y 9 como 4.ª opción con "red": 2). Enlaces revisados el 24-09-2026: 46.2 iba a una página 37 inexistente (→ 47);
   43, 44, 45 y 47 no tenían entrada (→ 7.2, 6.1, 9.3 y 46.2); 3.1 lleva al Jardín (48); 41.3 → 46.
   Sin bucles (24-09, v2): la red siempre avanza hacia los finales; 43.2→40, 93.1→10, 41.1→5, 91.1→5, 45.2→46,
   92.1→10, 94.2→10, 90.1→F, 90.2→B. Validar con: node tools/validar_rayuela.js (comprueba también que no haya ciclos)
   estaciones: { "<n>": { tipo: pregunta|vida|contradiccion, red, linea, xy:[x,y], titulo, texto, pregunta,
                 opciones:[{t, to, marca}], temas:[clave THEORY], autores:[{id: clave ILUSTRES}], choque:[marcas] } }
   terminales: { "<letra>": { titulo, texto, abierto, reflexion, autores, temas, xy } }  · to = "<n>" o "F<letra>" */
const RAYUELA_HF = {
 "inicio": "1",
 "lineas": [
  { "id": "l-inicio", "nombre": "Salida", "color": "#9b4a4f" },
  { "id": "l-felicidad", "nombre": "Línea de la felicidad", "color": "#d99a00" },
  { "id": "l-ciudad", "nombre": "Línea de la ciudad", "color": "#5b6770" },
  { "id": "l-conocimiento", "nombre": "Línea del conocimiento", "color": "#2f6db5" },
  { "id": "l-alma", "nombre": "Línea del alma", "color": "#2e9b5b" },
  { "id": "l-dios", "nombre": "Línea de Dios", "color": "#7d4fb5" },
  { "id": "l-cosmos", "nombre": "Línea del cosmos", "color": "#e0701b" },
  { "id": "l-contradiccion", "nombre": "Contradicciones", "color": "#d23a2b" }
 ],
 "redes": [
  { "n": 1, "nombre": "Red 1 · De Sócrates a Descartes", "abre": "2026-09-01" },
  { "n": 2, "nombre": "Red 2 · Los modernos: de Galileo a Mill", "abre": "2026-09-25" }
 ],
 "estaciones": {
  "1": {
   "tipo": "pregunta", "red": 1, "linea": "l-inicio", "xy": [5.8, 14.4],
   "titulo": "El inicio",
   "texto": "Estás en el andén de salida. Antes de subir al tren, alguien te hace la pregunta con la que empezó la filosofía en Grecia: ¿hay algo que valga para todos, o cada uno tiene su verdad?",
   "pregunta": "¿Existen un Bien y una Verdad objetivos, iguales para todos?",
   "opciones": [
    { "t": "Sí: existen, aunque cueste descubrirlos.", "to": "2", "marca": "m-verdad-objetiva" },
    { "t": "No lo sé; lo que importa es sentirse bien y evitar el dolor.", "to": "3", "marca": "m-bienestar" },
    { "t": "No lo creo: lo verdadero es lo que funciona.", "to": "4", "marca": "m-utilidad" }
   ],
   "temas": ["hf-mito", "hf-sofistas"], "autores": [{ "id": "socrates" }]
  },
  "2": {
   "tipo": "pregunta", "red": 1, "linea": "l-felicidad", "xy": [3.0, 12.6],
   "titulo": "Virtud y felicidad",
   "texto": "Si existe un Bien, vivir bien debe consistir en acercarse a él. Los griegos lo llamaban eudaimonía: una vida lograda, no un rato de alegría.",
   "pregunta": "¿En qué consiste para ti la felicidad?",
   "opciones": [
    { "t": "En tener el alma en orden: conocer el bien y obrar con justicia.", "to": "7", "marca": "m-alma-orden" },
    { "t": "En cultivar buenos hábitos y crecer junto a otros, en comunidad.", "to": "7", "marca": "m-habitos" },
    { "t": "En Dios: sin Él ninguna felicidad dura.", "to": "6", "marca": "m-felicidad-dios" }
   ],
   "temas": ["hf-etica"], "autores": [{ "id": "platon" }, { "id": "aristoteles" }]
  },
  "3": {
   "tipo": "pregunta", "red": 1, "linea": "l-felicidad", "xy": [5.8, 12.6],
   "titulo": "Placer y dolor",
   "texto": "Has dicho que lo importante es sentirse bien. Pero hay muchas formas de bienestar: la fiesta que acaba en resaca, la tarde tranquila con amigos, la calma de quien acepta lo que no depende de él.",
   "pregunta": "¿Qué tipo de placer te convence más?",
   "opciones": [
    { "t": "Un placer tranquilo, sin sobresaltos: comer sencillo, pensar, estar con amigos.", "to": "48", "marca": "m-placer-tranquilo" },
    { "t": "Un placer intenso, aunque traiga riesgos.", "to": "90", "marca": "m-placer-intenso" },
    { "t": "Ninguno por sí mismo: el placer debe obedecer a la razón que gobierna el mundo.", "to": "8", "marca": "m-logos" }
   ],
   "temas": ["hf-helenismo"], "autores": [{ "id": "epicuro" }]
  },
  "4": {
   "tipo": "pregunta", "red": 1, "linea": "l-conocimiento", "xy": [8.6, 12.6],
   "titulo": "Duda y utilidad",
   "texto": "Si no hay una verdad para todos, ¿con qué te quedas? Algunos griegos decidieron no afirmar nada; siglos después, Descartes dudó de todo para encontrar algo seguro.",
   "pregunta": "¿Qué haces con la duda?",
   "opciones": [
    { "t": "Suspendo el juicio: prefiero no afirmar nada.", "to": "9", "marca": "m-suspender" },
    { "t": "Hay algo de lo que no puedo dudar: que existo y pienso.", "to": "5", "marca": "m-cogito" },
    { "t": "La verdad me da igual: importa lo que funcione en la vida en común.", "to": "7", "marca": "m-utilidad-politica" }
   ],
   "temas": ["hf-sofistas", "hf-racionalismo"], "autores": [{ "id": "pirron" }, { "id": "descartes" }]
  },
  "5": {
   "tipo": "pregunta", "red": 1, "linea": "l-alma", "xy": [8.0, 10.6],
   "titulo": "Alma y cuerpo",
   "texto": "Estás seguro de que existes. Pero ¿qué es eso que existe: un cuerpo, algo más que un cuerpo, las dos cosas a la vez?",
   "pregunta": "¿Qué eres?",
   "opciones": [
    { "t": "Un alma que usa un cuerpo, como un piloto su nave.", "to": "10", "marca": "m-alma-separada" },
    { "t": "Una unidad: el alma es la forma del cuerpo vivo.", "to": "10", "marca": "m-alma-forma" },
    { "t": "Solo un cuerpo: materia bien organizada.", "to": "94", "marca": "m-solo-cuerpo" },
    { "t": "Quiero saber cómo pueden relacionarse el alma y el cuerpo, si son tan distintos.", "to": "52", "marca": "m-problema-union", "red": 2 }
   ],
   "temas": ["hf-antropologia", "hf-metafisica"], "autores": [{ "id": "platon" }, { "id": "aristoteles" }, { "id": "descartes" }]
  },
  "6": {
   "tipo": "pregunta", "red": 1, "linea": "l-dios", "xy": [3.4, 10.0],
   "titulo": "Dios y el mal",
   "texto": "Si Dios es bueno y todopoderoso, ¿de dónde sale el mal? Es la pregunta que no dejó dormir a los pensadores cristianos durante siglos.",
   "pregunta": "¿Por qué existe el mal?",
   "opciones": [
    { "t": "El mal no es una cosa: es ausencia de bien, alejarse de él.", "to": "44", "marca": "m-mal-privacion" },
    { "t": "Hay un orden racional divino, aunque no lo veamos entero.", "to": "8", "marca": "m-orden-divino" },
    { "t": "Quizá Dios no sea tan bueno: podría estar engañándonos.", "to": "92", "marca": "m-dios-engana" }
   ],
   "temas": ["hf-fe-razon"], "autores": [{ "id": "agustin" }, { "id": "tomas" }]
  },
  "7": {
   "tipo": "pregunta", "red": 1, "linea": "l-ciudad", "xy": [1.2, 10.6],
   "titulo": "La ciudad",
   "texto": "Llegas a las puertas de la ciudad. Dentro se discute en la asamblea, se juzga y se hacen leyes. Fuera, el campo y el silencio.",
   "pregunta": "¿Qué haces con la ciudad?",
   "opciones": [
    { "t": "Entro: participar para mejorar las leyes es parte de vivir bien.", "to": "40", "marca": "m-participar" },
    { "t": "Me aparto de la ciudad y de sus convenciones: me basta con poco.", "to": "43", "marca": "m-apartarse" },
    { "t": "Entro, pero sé que la política es solo lucha por el poder.", "to": "93", "marca": "m-solo-poder" },
    { "t": "Quiero entender el poder tal como es, no como debería ser.", "to": "56", "marca": "m-poder-real", "red": 2 }
   ],
   "temas": ["hf-politica"], "autores": [{ "id": "socrates" }, { "id": "platon" }, { "id": "aristoteles" }]
  },
  "8": {
   "tipo": "pregunta", "red": 1, "linea": "l-cosmos", "xy": [5.6, 9.0],
   "titulo": "El orden del mundo",
   "texto": "Es de noche y miras el cielo: las estrellas giran con una regularidad asombrosa. Pero también caen rayos, hay terremotos y nacen seres deformes.",
   "pregunta": "¿Hay orden en el cosmos?",
   "opciones": [
    { "t": "Sí: cada cosa tiene sus causas y tiende a un fin.", "to": "41", "marca": "m-fines" },
    { "t": "Sí: una razón universal, el logos, lo gobierna todo.", "to": "42", "marca": "m-logos" },
    { "t": "No: todo es fruto del azar y del choque de átomos.", "to": "91", "marca": "m-azar" }
   ],
   "temas": ["hf-preso", "hf-helenismo"], "autores": [{ "id": "aristoteles" }, { "id": "democrito" }, { "id": "zenon" }]
  },
  "9": {
   "tipo": "pregunta", "red": 1, "linea": "l-conocimiento", "xy": [10.4, 10.6],
   "titulo": "Razón y sentidos",
   "texto": "Los sentidos te dicen que el sol es pequeño y que el palo metido en el agua está roto. La razón te dice otra cosa.",
   "pregunta": "¿De qué te fías para conocer?",
   "opciones": [
    { "t": "De la razón, como en las matemáticas: de lo claro y distinto.", "to": "46", "marca": "m-razon" },
    { "t": "De los sentidos, pero ordenados por la razón.", "to": "41", "marca": "m-sentidos-razon" },
    { "t": "De ninguna de las dos: solo la fe da certeza.", "to": "45", "marca": "m-solo-fe" },
    { "t": "Antes de fiarme de nada, quiero saber de dónde vienen nuestras ideas.", "to": "11", "marca": "m-origen-ideas", "red": 2 }
   ],
   "temas": ["hf-racionalismo"], "autores": [{ "id": "descartes" }, { "id": "aristoteles" }, { "id": "hume" }]
  },
  "10": {
   "tipo": "pregunta", "red": 1, "linea": "l-alma", "xy": [5.8, 5.4],
   "titulo": "Muerte e inmortalidad",
   "texto": "Al final de muchas líneas espera la misma estación. Sócrates decía que filosofar es aprender a morir.",
   "pregunta": "¿Qué pasa después de la muerte?",
   "opciones": [
    { "t": "El alma es inmortal: la muerte es el paso a una vida más verdadera.", "to": "FA", "marca": "m-inmortal" },
    { "t": "No lo sé; lo importante es vivir con serenidad mientras tanto.", "to": "FB", "marca": "m-serenidad" },
    { "t": "No hay nada… aunque, por si acaso, me da miedo.", "to": "90", "marca": "m-nada-miedo" }
   ],
   "temas": ["hf-antropologia", "hf-helenismo"], "autores": [{ "id": "socrates" }, { "id": "platon" }, { "id": "epicuro" }]
  },
  "40": {
   "tipo": "vida", "red": 1, "linea": "l-ciudad", "xy": [0.8, 8.2],
   "titulo": "Sócrates en la cárcel",
   "texto": "Atenas, 399 a. C. Sócrates ha sido condenado a muerte por «corromper a los jóvenes». Su amigo Critón ha sobornado a los guardias: puede escapar esta noche. Sócrates se niega: huir sería romper el pacto con las leyes que lo han protegido toda su vida.",
   "pregunta": "¿Qué harías tú en su lugar?",
   "opciones": [
    { "t": "Me quedaría: obedecer las leyes, incluso cuando se equivocan, es parte de ser justo.", "to": "8", "marca": "m-obedecer" },
    { "t": "Escaparía si la ley es injusta: a veces desobedecer es lo correcto.", "to": "9", "marca": "m-desobedecer" },
    { "t": "Huiría sin dudarlo: es absurdo morir por una ciudad.", "to": "93", "marca": "m-escapar" }
   ],
   "temas": ["hf-sofistas", "hf-etica"], "autores": [{ "id": "socrates" }, { "id": "platon" }]
  },
  "41": {
   "tipo": "vida", "red": 1, "linea": "l-cosmos", "xy": [7.6, 7.4],
   "titulo": "Aristóteles y los insectos",
   "texto": "Isla de Lesbos, hacia el 345 a. C. Aristóteles pasa días enteros abriendo peces, observando pulpos y dibujando alas de insectos. Quiere saber para qué sirve cada órgano: está convencido de que la naturaleza no hace nada en vano.",
   "pregunta": "¿Qué piensas de su trabajo?",
   "opciones": [
    { "t": "Tiene razón: comprender el mundo es descubrir sus causas y sus fines.", "to": "5", "marca": "m-fines" },
    { "t": "Observa muy bien, pero quizá la naturaleza no persiga ningún fin.", "to": "91", "marca": "m-sin-fines" },
    { "t": "Pierde el tiempo: la verdad no está en lo que se ve, sino en lo que se piensa.", "to": "46", "marca": "m-razon" }
   ],
   "temas": ["hf-antropologia", "hf-platon"], "autores": [{ "id": "aristoteles" }]
  },
  "42": {
   "tipo": "vida", "red": 1, "linea": "l-alma", "xy": [4.2, 7.4],
   "titulo": "Séneca sereno",
   "texto": "Roma, año 65. Nerón ordena a Séneca, su antiguo maestro, que se quite la vida. Séneca consuela a sus amigos, dicta sus últimas palabras y espera la muerte en un baño caliente, sin perder la calma: hay que aceptar lo que no depende de nosotros.",
   "pregunta": "¿Qué te parece su serenidad?",
   "opciones": [
    { "t": "Admirable: la paz depende de la actitud, no de lo que nos pasa.", "to": "10", "marca": "m-estoico" },
    { "t": "No sé si tanta calma tiene sentido: ¿no se estará engañando?", "to": "5", "marca": "m-duda-serenidad" },
    { "t": "Un error: la muerte hay que evitarla a toda costa.", "to": "90", "marca": "m-evitar-muerte" }
   ],
   "temas": ["hf-helenismo"], "autores": [{ "id": "seneca" }, { "id": "zenon" }]
  },
  "43": {
   "tipo": "vida", "red": 1, "linea": "l-ciudad", "xy": [2.2, 7.4],
   "titulo": "Diógenes y la sombra",
   "texto": "Corinto, 336 a. C. Diógenes vive en una tinaja y toma el sol. Alejandro Magno, el hombre más poderoso del mundo, se planta delante de él y le ofrece lo que quiera. «Apártate, que me tapas el sol», le contesta.",
   "pregunta": "¿Qué piensas de Diógenes?",
   "opciones": [
    { "t": "Es libre de verdad: la libertad consiste en necesitar poco.", "to": "FC", "marca": "m-autarquia" },
    { "t": "Tiene algo de razón, pero sin los demás no se puede vivir bien.", "to": "40", "marca": "m-desapego-limites" },
    { "t": "Es un maleducado que vive a costa de los demás.", "to": "93", "marca": "m-desprecio-cinico" }
   ],
   "temas": ["hf-helenismo"], "autores": [{ "id": "diogenes" }]
  },
  "44": {
   "tipo": "vida", "red": 1, "linea": "l-dios", "xy": [3.0, 5.8],
   "titulo": "Agustín en el jardín",
   "texto": "Milán, año 386. Agustín lleva años buscando la verdad en los placeres, en la fama y en varias filosofías. Llorando en un jardín, oye una voz de niño que canta: «Toma y lee». Abre las cartas de san Pablo y siente que la verdad no estaba fuera, sino dentro de él.",
   "pregunta": "¿Cómo lo interpretas?",
   "opciones": [
    { "t": "La verdad está en el interior: hay que entrar en uno mismo.", "to": "10", "marca": "m-interioridad" },
    { "t": "La interioridad está bien, pero hace falta también la razón.", "to": "9", "marca": "m-interioridad-razon" },
    { "t": "Fue sugestión: estaba agotado y oyó lo que quería oír.", "to": "92", "marca": "m-sugestion" }
   ],
   "temas": ["hf-fe-razon", "hf-medieval"], "autores": [{ "id": "agustin" }]
  },
  "45": {
   "tipo": "vida", "red": 1, "linea": "l-dios", "xy": [9.0, 8.6],
   "titulo": "Tomás y la paja",
   "texto": "Nápoles, 1273. Tomás de Aquino ha escrito miles de páginas para mostrar que la fe y la razón no se contradicen. Un día, tras una experiencia mística durante la misa, deja de escribir: «Todo lo que he escrito me parece paja».",
   "pregunta": "¿Qué concluyes?",
   "opciones": [
    { "t": "Que la fe llega más lejos que la razón.", "to": "10", "marca": "m-fe-supera" },
    { "t": "Que su obra sigue valiendo: la razón llega hasta donde llega.", "to": "46", "marca": "m-razon-valida" },
    { "t": "Que la razón no sirve para nada.", "to": "93", "marca": "m-razon-inutil" }
   ],
   "temas": ["hf-fe-razon"], "autores": [{ "id": "tomas" }]
  },
  "46": {
   "tipo": "vida", "red": 1, "linea": "l-conocimiento", "xy": [10.8, 8.2],
   "titulo": "Descartes y el ser perfecto",
   "texto": "Holanda, 1641. Descartes quiere fundar la ciencia sobre certezas. Tiene en la mente la idea de un ser perfecto y razona: a un ser perfecto no le puede faltar nada, tampoco la existencia; luego Dios existe. Es casi el mismo argumento que san Anselmo propuso en el siglo XI.",
   "pregunta": "¿Te convence?",
   "opciones": [
    { "t": "Sí: si su esencia es perfecta, tiene que existir.", "to": "10", "marca": "m-ontologico" },
    { "t": "Me parece sospechoso: critica a los escolásticos y usa un argumento medieval… ¿y si la razón me engaña?", "to": "47", "marca": "m-sospecha" },
    { "t": "No: de una idea no se sigue que algo exista.", "to": "FD", "marca": "m-idea-no-prueba" }
   ],
   "temas": ["hf-racionalismo", "hf-fe-razon"], "autores": [{ "id": "descartes" }, { "id": "anselmo" }]
  },
  "47": {
   "tipo": "vida", "red": 1, "linea": "l-conocimiento", "xy": [10.8, 5.8],
   "titulo": "Descartes y el genio maligno",
   "texto": "Descartes lleva la duda al extremo: ¿y si un genio maligno, muy poderoso, lo engañara incluso cuando suma dos y tres? Solo resiste una certeza: si me engaña, es que pienso; luego existo. Pero para salir de sí mismo y fiarse del mundo necesita algo más.",
   "pregunta": "¿Cómo sales de la duda?",
   "opciones": [
    { "t": "Necesito un Dios veraz que garantice que no me engaño.", "to": "FE", "marca": "m-dios-veraz" },
    { "t": "Una duda tan radical es estéril: prefiero no afirmar nada seguro.", "to": "FD", "marca": "m-duda-esteril" },
    { "t": "Puedo tener certezas sin Dios: me basta la razón.", "to": "92", "marca": "m-certeza-sin-dios" }
   ],
   "temas": ["hf-racionalismo"], "autores": [{ "id": "descartes" }]
  },
  "48": {
   "tipo": "vida", "red": 1, "linea": "l-felicidad", "xy": [4.4, 11.2],
   "titulo": "Epicuro en el Jardín",
   "texto": "Atenas, 306 a. C. Epicuro compra un huerto a las afueras y funda allí su escuela, abierta también a mujeres y a esclavos. Te invita a comer pan, agua y un poco de queso con sus amigos: no hace falta más para ser feliz, dice, si no temes a los dioses ni a la muerte.",
   "pregunta": "¿Te quedas en el Jardín?",
   "opciones": [
    { "t": "Sí: la amistad y vivir sin miedo bastan.", "to": "FF", "marca": "m-ataraxia" },
    { "t": "Un tiempo; pero quizá la vida en común también importa.", "to": "7", "marca": "m-retiro-politica" },
    { "t": "No: una vida apartada de la política es inútil.", "to": "93", "marca": "m-politica-necesaria" }
   ],
   "temas": ["hf-helenismo"], "autores": [{ "id": "epicuro" }]
  },
  "90": {
   "tipo": "contradiccion", "red": 1, "linea": "l-contradiccion", "xy": [4.2, 3.8],
   "titulo": "Contradicción: placer y miedo",
   "texto": "Buscas el placer, o dices que tras la muerte no hay nada… y aun así tienes miedo. Epicuro diría que esa mezcla es la receta de la infelicidad: si la muerte no es nada para nosotros, no hay por qué temerla.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Busco la serenidad en lugar de la intensidad.", "to": "FF" },
    { "t": "Acepto el miedo, pero vivo con virtud.", "to": "FB" },
    { "t": "Ignoro la contradicción.", "to": "FG" }
   ],
   "choque": ["m-placer-intenso", "m-nada-miedo", "m-evitar-muerte", "m-bienestar"],
   "temas": ["hf-helenismo"], "autores": [{ "id": "epicuro" }]
  },
  "91": {
   "tipo": "contradiccion", "red": 1, "linea": "l-contradiccion", "xy": [7.6, 3.8],
   "titulo": "Contradicción: fines o azar",
   "texto": "El orden y el azar tiran de ti en direcciones opuestas. Si todo tiende a un fin, el azar es solo apariencia; si todo es azar, los fines los ponemos nosotros. Aristóteles y los atomistas no pueden tener razón a la vez.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Mantengo que hay orden y fines.", "to": "5" },
    { "t": "Acepto el azar hasta el final.", "to": "FD" },
    { "t": "Intento reconciliar el orden y el azar.", "to": "FH" }
   ],
   "choque": ["m-fines", "m-logos", "m-orden-divino", "m-azar", "m-sin-fines"],
   "temas": ["hf-preso", "hf-antropologia"], "autores": [{ "id": "aristoteles" }, { "id": "democrito" }]
  },
  "92": {
   "tipo": "contradiccion", "red": 1, "linea": "l-contradiccion", "xy": [9.6, 3.8],
   "titulo": "Contradicción: el Dios engañador",
   "texto": "Has hablado de un Dios bueno o de certezas firmes y, a la vez, de un Dios que podría engañarte o de una fe que sería pura sugestión. Las dos cosas no pueden sostenerse juntas sin más.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Vuelvo a un Dios que es el Bien.", "to": "10" },
    { "t": "Acepto que no hay garantías.", "to": "FD" },
    { "t": "Mantengo las dos cosas a la vez.", "to": "FI" }
   ],
   "choque": ["m-felicidad-dios", "m-mal-privacion", "m-orden-divino", "m-dios-engana", "m-sugestion", "m-certeza-sin-dios", "m-ontologico", "m-interioridad"],
   "temas": ["hf-fe-razon", "hf-racionalismo"], "autores": [{ "id": "descartes" }, { "id": "agustin" }]
  },
  "93": {
   "tipo": "contradiccion", "red": 1, "linea": "l-contradiccion", "xy": [1.6, 4.4],
   "titulo": "Contradicción: justicia o poder",
   "texto": "Por un lado defiendes la justicia, la virtud o la razón; por otro, que solo cuenta el poder, que la razón no sirve o que las normas no valen nada. Trasímaco decía que la justicia es lo que conviene al más fuerte; Sócrates pasó la vida intentando refutarlo.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Corrijo: la justicia importa.", "to": "10" },
    { "t": "Me quedo con el cinismo: desprecio todas las convenciones.", "to": "FC" },
    { "t": "Mantengo que solo cuenta el poder.", "to": "FJ" }
   ],
   "choque": ["m-alma-orden", "m-habitos", "m-participar", "m-obedecer", "m-solo-poder", "m-escapar", "m-razon-inutil", "m-politica-necesaria", "m-desprecio-cinico", "m-utilidad-politica"],
   "temas": ["hf-politica", "hf-sofistas"], "autores": [{ "id": "socrates" }, { "id": "platon" }]
  },
  "94": {
   "tipo": "contradiccion", "red": 1, "linea": "l-contradiccion", "xy": [10.2, 12.4],
   "titulo": "Contradicción: materia o alma",
   "texto": "Dices que eres solo cuerpo. Pero entonces, ¿qué es eso que piensa, que duda y que se pregunta qué le pasará al morir? Si todo es materia, hay que explicar también la conciencia.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Mantengo el materialismo hasta el final.", "to": "FK" },
    { "t": "Acepto que hay algo más: un alma.", "to": "10" },
    { "t": "No decido.", "to": "FD" }
   ],
   "choque": ["m-solo-cuerpo", "m-cogito", "m-inmortal", "m-alma-separada", "m-alma-forma"],
   "temas": ["hf-metafisica", "hf-antropologia"], "autores": [{ "id": "democrito" }, { "id": "descartes" }]
  },
  "11": {
   "tipo": "pregunta", "red": 2, "linea": "l-conocimiento", "xy": [13.6, 12.8],
   "titulo": "El origen de las ideas",
   "texto": "Siglo XVII. La ciencia nueva de Galileo y de Newton cambia la imagen del mundo, y los filósofos se preguntan de dónde sale lo que sabemos. Descartes confía en la razón; Locke dice que al nacer la mente es una hoja en blanco.",
   "pregunta": "¿De dónde vienen nuestras ideas?",
   "opciones": [
    { "t": "Algunas nacen con nosotros: la razón las encuentra en sí misma.", "to": "13", "marca": "m-innatismo" },
    { "t": "Todas vienen de la experiencia: la mente es una hoja en blanco.", "to": "12", "marca": "m-tabula-rasa" },
    { "t": "Me da igual de dónde vengan: lo que importa es comprobarlas con experimentos.", "to": "50", "marca": "m-experimento" }
   ],
   "temas": ["hf-modernidad", "hf-racionalismo"], "autores": [{ "id": "descartes" }, { "id": "locke" }, { "id": "galileo" }]
  },
  "12": {
   "tipo": "pregunta", "red": 2, "linea": "l-conocimiento", "xy": [13.2, 10.4],
   "titulo": "La causa y el efecto",
   "texto": "Una bola de billar golpea a otra y la segunda se mueve. Lo has visto mil veces. Pero ¿has visto alguna vez la causa, esa fuerza que obliga a la segunda bola a moverse? ¿O solo has visto que una cosa sigue a la otra?",
   "pregunta": "¿Qué ves cuando ves una causa?",
   "opciones": [
    { "t": "La conexión misma: la causa produce el efecto necesariamente.", "to": "97", "marca": "m-causa-necesaria" },
    { "t": "Solo que una cosa sigue a otra; la necesidad la pone mi costumbre.", "to": "51", "marca": "m-habito" },
    { "t": "No lo sé, pero la ciencia funciona, y con eso me basta.", "to": "16", "marca": "m-funciona" }
   ],
   "temas": ["hf-racionalismo"], "autores": [{ "id": "hume" }]
  },
  "13": {
   "tipo": "pregunta", "red": 2, "linea": "l-alma", "xy": [16.8, 12.8],
   "titulo": "La sustancia",
   "texto": "Si la razón puede conocer cómo es el mundo, la siguiente pregunta es de qué está hecho. Los modernos la llamaron sustancia: lo que existe por sí mismo, sin depender de otra cosa.",
   "pregunta": "¿De qué está hecho todo lo que existe?",
   "opciones": [
    { "t": "De dos cosas distintas: la mente, que piensa, y la materia, que ocupa lugar.", "to": "52", "marca": "m-dualismo" },
    { "t": "De una sola sustancia infinita: Dios o, lo que es lo mismo, la Naturaleza.", "to": "53", "marca": "m-monismo" },
    { "t": "Solo de materia en movimiento: también el pensamiento.", "to": "14", "marca": "m-materialismo" }
   ],
   "temas": ["hf-metafisica"], "autores": [{ "id": "descartes" }, { "id": "spinoza" }, { "id": "hobbes" }]
  },
  "14": {
   "tipo": "pregunta", "red": 2, "linea": "l-ciudad", "xy": [14, 6.2],
   "titulo": "El estado de naturaleza",
   "texto": "Imagina que mañana desaparecen el Estado, la policía y las leyes. Hobbes, Locke y Rousseau hicieron este mismo experimento mental para explicar por qué obedecemos a un gobierno.",
   "pregunta": "¿Cómo sería la vida sin Estado?",
   "opciones": [
    { "t": "Una guerra de todos contra todos: una vida solitaria, pobre, brutal y corta.", "to": "15", "marca": "m-guerra-todos" },
    { "t": "Tendríamos derechos naturales —vida, libertad, propiedad—, pero nadie que los protegiera.", "to": "15", "marca": "m-derechos-naturales" },
    { "t": "Seríamos más libres y más felices: es la sociedad la que nos corrompe.", "to": "54", "marca": "m-bondad-natural" }
   ],
   "temas": ["hf-contrato"], "autores": [{ "id": "hobbes" }, { "id": "locke" }, { "id": "rousseau" }]
  },
  "15": {
   "tipo": "pregunta", "red": 2, "linea": "l-ciudad", "xy": [14.6, 4.2],
   "titulo": "El contrato social",
   "texto": "Para salir del estado de naturaleza, las personas hacen un pacto: ceden algo a cambio de vivir en paz. La cuestión es qué ceden y a quién.",
   "pregunta": "¿Qué poder debe tener el gobierno?",
   "opciones": [
    { "t": "Todo el poder, en manos de un soberano: mejor un amo que el caos.", "to": "96", "marca": "m-absolutismo" },
    { "t": "Un poder limitado y dividido, que respete nuestros derechos.", "to": "FO", "marca": "m-poder-limitado" },
    { "t": "El poder es del pueblo: las leyes deben expresar la voluntad general.", "to": "FP", "marca": "m-voluntad-general" }
   ],
   "temas": ["hf-contrato"], "autores": [{ "id": "hobbes" }, { "id": "locke" }, { "id": "rousseau" }]
  },
  "16": {
   "tipo": "pregunta", "red": 2, "linea": "l-felicidad", "xy": [16.8, 5],
   "titulo": "El tranvía",
   "texto": "Un tranvía sin frenos va directo hacia cinco personas atadas a la vía. Tú estás junto a una palanca: si la accionas, el tranvía se desvía hacia otra vía donde hay una sola persona.",
   "pregunta": "¿Accionas la palanca?",
   "opciones": [
    { "t": "Sí: lo correcto es lo que produce más felicidad para el mayor número.", "to": "55", "marca": "m-mayor-numero" },
    { "t": "No: hay cosas que no se le hacen a nadie, aunque salgan las cuentas.", "to": "FO", "marca": "m-derechos" },
    { "t": "Depende: no todos los placeres ni todas las vidas se miden igual.", "to": "55", "marca": "m-calidad" }
   ],
   "temas": ["hf-utilitarismo"], "autores": [{ "id": "bentham" }, { "id": "mill" }]
  },
  "50": {
   "tipo": "vida", "red": 2, "linea": "l-cosmos", "xy": [15.6, 11.8],
   "titulo": "Galileo ante la Inquisición",
   "texto": "Roma, 1633. Galileo tiene casi setenta años. Sus observaciones con el telescopio apoyan que la Tierra gira alrededor del Sol, y la Inquisición lo obliga a arrodillarse y renegar de ello. Él abjura y pasa el resto de su vida recluido en su casa. La leyenda dice que, al levantarse, murmuró: «Y sin embargo, se mueve».",
   "pregunta": "¿Qué habrías hecho tú?",
   "opciones": [
    { "t": "Abjurar: salvo la vida y sigo investigando en silencio.", "to": "56", "marca": "m-prudencia" },
    { "t": "Mantenerme firme: la verdad de la ciencia no se negocia.", "to": "12", "marca": "m-verdad-ciencia" },
    { "t": "Obedecer: la autoridad tiene derecho a decidir qué se enseña.", "to": "96", "marca": "m-autoridad" }
   ],
   "temas": ["hf-modernidad"], "autores": [{ "id": "galileo" }]
  },
  "51": {
   "tipo": "vida", "red": 2, "linea": "l-conocimiento", "xy": [12.8, 7.8],
   "titulo": "Hume y el backgammon",
   "texto": "Edimburgo, 1739. Hume ha llevado la duda tan lejos que ya no sabe si puede fiarse de nada: ni de las causas, ni del mundo, ni de su propio yo. Confiesa que entonces cena, juega una partida de backgammon, charla con sus amigos, y a las tres o cuatro horas sus especulaciones le parecen frías y ridículas.",
   "pregunta": "¿Qué te parece?",
   "opciones": [
    { "t": "Sensato: la naturaleza nos hace creer, aunque la razón no pueda demostrarlo.", "to": "FL", "marca": "m-naturalismo" },
    { "t": "Tramposo: si no puede probar nada, que no afirme nada.", "to": "FD", "marca": "m-escepticismo-total" },
    { "t": "Me interesa más cómo vivimos juntos que lo que podemos saber.", "to": "14", "marca": "m-vida-comun" }
   ],
   "temas": ["hf-racionalismo"], "autores": [{ "id": "hume" }]
  },
  "52": {
   "tipo": "vida", "red": 2, "linea": "l-alma", "xy": [17.8, 10.6],
   "titulo": "Isabel de Bohemia escribe a Descartes",
   "texto": "La Haya, 1643. Isabel de Bohemia, una princesa exiliada de veinticuatro años, escribe a Descartes una pregunta que él no sabe responder bien: si el alma no ocupa lugar ni tiene extensión, ¿cómo puede mover el cuerpo? Descartes habla de la glándula pineal; ella no queda convencida.",
   "pregunta": "¿Quién tiene razón?",
   "opciones": [
    { "t": "Isabel: algo falla si alma y cuerpo son sustancias tan distintas.", "to": "53", "marca": "m-critica-dualismo" },
    { "t": "Descartes: son dos sustancias, aunque no sepamos cómo se unen.", "to": "10", "marca": "m-dualismo-firme" },
    { "t": "Ninguno: si el alma no explica nada, solo queda la materia.", "to": "14", "marca": "m-materialismo" }
   ],
   "temas": ["hf-metafisica", "hf-racionalismo"], "autores": [{ "id": "isabel" }, { "id": "descartes" }]
  },
  "53": {
   "tipo": "vida", "red": 2, "linea": "l-dios", "xy": [16.2, 9],
   "titulo": "Spinoza pule lentes",
   "texto": "Ámsterdam, 1656. La comunidad judía expulsa a Spinoza, con veintitrés años, por sus ideas sobre Dios. Se gana la vida puliendo lentes para microscopios y telescopios. En 1673 le ofrecen una cátedra en Heidelberg y la rechaza: teme perder la libertad de filosofar.",
   "pregunta": "¿Qué te parece su elección?",
   "opciones": [
    { "t": "La entiendo: ser libre es comprender por qué ocurren las cosas, no tener un cargo.", "to": "FM", "marca": "m-libertad-necesidad" },
    { "t": "Admiro su libertad de pensar: defendería la tolerancia para todos.", "to": "15", "marca": "m-tolerancia" },
    { "t": "Si todo ocurre por necesidad, nadie es responsable de nada.", "to": "16", "marca": "m-determinismo" }
   ],
   "temas": ["hf-metafisica"], "autores": [{ "id": "spinoza" }]
  },
  "54": {
   "tipo": "vida", "red": 2, "linea": "l-ciudad", "xy": [15.6, 7.2],
   "titulo": "Rousseau camino de Vincennes",
   "texto": "Afueras de París, 1749. Rousseau va a pie a visitar a su amigo Diderot, encarcelado en Vincennes. Por el camino lee en un periódico la pregunta de un concurso: ¿han mejorado las ciencias y las artes las costumbres? Tiene que sentarse bajo un árbol, conmovido: el ser humano es bueno por naturaleza y la sociedad lo corrompe.",
   "pregunta": "¿Qué sacas de su intuición?",
   "opciones": [
    { "t": "Que hay que refundar la sociedad desde la voluntad de todos.", "to": "15", "marca": "m-refundar" },
    { "t": "Que exagera: la ciencia y las artes también nos han hecho mejores.", "to": "16", "marca": "m-progreso" },
    { "t": "Que, si la sociedad corrompe, lo mejor es vivir aparte.", "to": "FC", "marca": "m-aparte" }
   ],
   "temas": ["hf-contrato", "hf-ilustracion"], "autores": [{ "id": "rousseau" }]
  },
  "55": {
   "tipo": "vida", "red": 2, "linea": "l-felicidad", "xy": [17.8, 7.2],
   "titulo": "La crisis de Mill",
   "texto": "Londres, 1826. John Stuart Mill tiene veinte años. Su padre y Bentham lo han educado desde niño para calcular la mayor felicidad para el mayor número. Un día se pregunta: si todas las reformas que deseas se cumplieran ahora mismo, ¿serías feliz? Y la respuesta es no. Cae en una depresión de la que le saca la poesía de Wordsworth.",
   "pregunta": "¿Qué aprende Mill?",
   "opciones": [
    { "t": "Que la felicidad sigue siendo el criterio, pero hay placeres más altos que otros.", "to": "FQ", "marca": "m-placeres-superiores" },
    { "t": "Que por la felicidad de la mayoría se puede sacrificar a quien haga falta.", "to": "98", "marca": "m-sacrificio" },
    { "t": "Que la libertad de cada uno importa más que cualquier suma de felicidad.", "to": "FO", "marca": "m-libertad-individual" }
   ],
   "temas": ["hf-utilitarismo"], "autores": [{ "id": "mill" }, { "id": "bentham" }]
  },
  "56": {
   "tipo": "vida", "red": 2, "linea": "l-ciudad", "xy": [12.6, 5],
   "titulo": "Maquiavelo en el exilio",
   "texto": "San Casciano, cerca de Florencia, 1513. Maquiavelo ha perdido su cargo, ha sido torturado y vive desterrado. De día discute en la taberna; de noche se pone ropa de gala y conversa con los antiguos en sus libros. Así escribe El príncipe: a un gobernante le conviene más ser temido que amado.",
   "pregunta": "¿Qué piensas de su consejo?",
   "opciones": [
    { "t": "Tiene razón: en política cuenta el resultado, no la moral.", "to": "14", "marca": "m-realismo-politico" },
    { "t": "Describe bien el poder, pero hay que ponerle límites.", "to": "15", "marca": "m-limites" },
    { "t": "Es inmoral: un gobernante debe ser justo antes que eficaz.", "to": "16", "marca": "m-moral-politica" }
   ],
   "temas": ["hf-contrato"], "autores": [{ "id": "maquiavelo" }]
  },
  "96": {
   "tipo": "contradiccion", "red": 2, "linea": "l-contradiccion", "xy": [13, 2.8],
   "titulo": "Contradicción: libertad o soberano absoluto",
   "texto": "Defiendes la libertad, los derechos o la bondad natural del ser humano y, a la vez, un poder sin límites. Locke se lo reprochaba a Hobbes: si el soberano puede hacer lo que quiera, ¿de qué nos protege el contrato? Sería como huir de los zorros para refugiarse en la guarida de un león.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Corrijo: el poder debe estar limitado.", "to": "FO" },
    { "t": "Mantengo que el orden va antes que la libertad.", "to": "FN" },
    { "t": "Que el soberano sea el pueblo entero.", "to": "FP" }
   ],
   "choque": ["m-derechos-naturales", "m-bondad-natural", "m-refundar", "m-absolutismo", "m-autoridad", "m-limites", "m-tolerancia"],
   "temas": ["hf-contrato"], "autores": [{ "id": "hobbes" }, { "id": "locke" }]
  },
  "97": {
   "tipo": "contradiccion", "red": 2, "linea": "l-contradiccion", "xy": [14.8, 9.2],
   "titulo": "Contradicción: experiencia y necesidad",
   "texto": "Dices que todo lo que sabes viene de la experiencia, pero también que ves la necesidad de las causas. Hume lo señaló: la experiencia solo muestra que una cosa sigue a otra, nunca que tenga que seguirla. O la necesidad no viene de la experiencia, o no la vemos.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Acepto que la necesidad la pone la costumbre.", "to": "51" },
    { "t": "Acepto que algunas ideas no vienen de la experiencia.", "to": "13" },
    { "t": "Me quedo sin certezas: no puedo saber nada seguro.", "to": "FD" }
   ],
   "choque": ["m-tabula-rasa", "m-causa-necesaria", "m-verdad-ciencia"],
   "temas": ["hf-racionalismo"], "autores": [{ "id": "hume" }, { "id": "locke" }]
  },
  "98": {
   "tipo": "contradiccion", "red": 2, "linea": "l-contradiccion", "xy": [17.4, 2.8],
   "titulo": "Contradicción: la mayoría o los derechos",
   "texto": "Hablas de derechos, de libertad o de tolerancia y, a la vez, aceptas sacrificar a cualquiera si así gana la mayoría. Mill intentó conciliarlo en Sobre la libertad: solo se puede limitar la libertad de alguien para evitar que dañe a otros.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Acepto el principio de Mill: la libertad, salvo que dañe a otros.", "to": "FQ" },
    { "t": "Pongo los derechos por delante de cualquier cálculo.", "to": "FO" },
    { "t": "Mantengo que solo cuenta la suma de felicidad.", "to": "FQ" }
   ],
   "choque": ["m-sacrificio", "m-mayor-numero", "m-derechos-naturales", "m-poder-limitado", "m-tolerancia", "m-libertad-individual", "m-derechos"],
   "temas": ["hf-utilitarismo"], "autores": [{ "id": "mill" }]
  }
 },
 "terminales": {
  "A": {
   "xy": [4.8, 0.9], "titulo": "Vida más verdadera",
   "texto": "Crees que hay un Bien y una Verdad que no dependen de nosotros, que el alma vale más que el cuerpo y que esta vida apunta a otra más auténtica. Es la gran línea que va de Platón a san Agustín, santo Tomás y Descartes.",
   "abierto": "¿Cómo podemos conocer algo que no se ve? ¿Y qué valor le queda entonces al mundo de los sentidos?",
   "reflexion": "¿Puede haber verdades que no dependan de nuestra opinión ni de nuestra cultura? Razona tu respuesta.",
   "autores": [{ "id": "platon" }, { "id": "agustin" }, { "id": "tomas" }, { "id": "descartes" }], "temas": ["hf-platon", "hf-fe-razon"]
  },
  "B": {
   "xy": [5.8, 0.9], "titulo": "Serenidad filosófica",
   "texto": "Buscas la paz interior: aceptar lo que no depende de ti y vivir sin miedo. Es el ideal que compartieron, cada uno a su manera, estoicos, epicúreos y escépticos.",
   "abierto": "¿Es la serenidad una forma de sabiduría o de resignación? ¿Hay que aceptar también las injusticias?",
   "reflexion": "¿Es posible ser feliz aceptando todo lo que nos ocurre?",
   "autores": [{ "id": "seneca" }, { "id": "zenon" }, { "id": "epicuro" }, { "id": "pirron" }], "temas": ["hf-helenismo"]
  },
  "C": {
   "xy": [0.8, 0.9], "titulo": "Camino cínico",
   "texto": "Te basta con poco y desconfías de las normas, los honores y el dinero. Como Diógenes, crees que la libertad es no depender de nada ni de nadie, y que la naturaleza vale más que las convenciones.",
   "abierto": "¿Se puede vivir al margen de la sociedad sin aprovecharse de ella?",
   "reflexion": "¿Tener menos nos hace más libres?",
   "autores": [{ "id": "diogenes" }], "temas": ["hf-helenismo"]
  },
  "D": {
   "xy": [8.8, 0.9], "titulo": "Escéptico racional",
   "texto": "No crees que podamos alcanzar certezas definitivas. Prefieres suspender el juicio y examinar cada afirmación: la duda es tu método. Te acompañan Pirrón y, siglos después, Hume.",
   "abierto": "Si nada es seguro, ¿cómo decidimos qué hacer?",
   "reflexion": "¿Es la duda el comienzo o el final del conocimiento?",
   "autores": [{ "id": "pirron" }, { "id": "hume" }], "temas": ["hf-helenismo", "hf-racionalismo"]
  },
  "E": {
   "xy": [10.8, 0.9], "titulo": "Dios veraz",
   "texto": "Como Descartes, piensas que la razón puede alcanzar certezas, pero necesita una garantía: un Dios que no engaña y que asegura que el mundo que conocemos es real.",
   "abierto": "Si hace falta Dios para confiar en la razón, pero la razón es la que demuestra que Dios existe, ¿no estamos en un círculo? (Es el llamado «círculo cartesiano».)",
   "reflexion": "¿Necesita el conocimiento un fundamento absoluto?",
   "autores": [{ "id": "descartes" }], "temas": ["hf-racionalismo", "hf-fe-razon"]
  },
  "F": {
   "xy": [2.8, 0.9], "titulo": "Ataraxia",
   "texto": "Como Epicuro, crees que la felicidad es la ausencia de dolor en el cuerpo y de inquietud en el alma: pocos placeres, bien elegidos, amigos y ningún miedo a los dioses ni a la muerte.",
   "abierto": "¿Es egoísta retirarse al jardín mientras la ciudad tiene problemas?",
   "reflexion": "¿Es el placer el fin de la vida humana?",
   "autores": [{ "id": "epicuro" }], "temas": ["hf-helenismo"]
  },
  "G": {
   "xy": [3.8, 0.9], "titulo": "Hedonista inconsistente",
   "texto": "Quieres el placer intenso y, a la vez, vivir sin miedo; pero las dos cosas se estorban: el exceso trae dolor y el miedo no desaparece. Has preferido no resolver la contradicción.",
   "abierto": "¿Por qué los placeres intensos no suelen dar una felicidad duradera?",
   "reflexion": "¿Puede ser feliz una vida incoherente?",
   "autores": [{ "id": "epicuro" }], "temas": ["hf-helenismo", "hf-etica"]
  },
  "H": {
   "xy": [7.8, 0.9], "titulo": "Cosmos paradójico",
   "texto": "Ves en el mundo orden y azar a la vez, y no quieres renunciar a ninguno. No es una mala intuición: la ciencia moderna habla de leyes y de probabilidades; lo difícil es explicar cómo encajan.",
   "abierto": "¿Puede haber fines en una naturaleza en la que también hay azar?",
   "reflexion": "¿Tiene la naturaleza un sentido o un propósito?",
   "autores": [{ "id": "aristoteles" }, { "id": "democrito" }], "temas": ["hf-preso", "hf-modernidad"]
  },
  "I": {
   "xy": [9.8, 0.9], "titulo": "Teísmo contradictorio",
   "texto": "Mantienes a la vez un Dios bueno y la posibilidad de que te engañe, o una fe firme y la sospecha de que es sugestión. Es una tensión real, que la filosofía medieval y Descartes intentaron resolver.",
   "abierto": "¿Pueden conciliarse la bondad de Dios y la existencia del mal o del engaño?",
   "reflexion": "¿Puede la razón demostrar la existencia de Dios?",
   "autores": [{ "id": "agustin" }, { "id": "descartes" }], "temas": ["hf-fe-razon"]
  },
  "J": {
   "xy": [1.8, 0.9], "titulo": "Nihilismo práctico",
   "texto": "Para ti, la justicia es una palabra bonita: lo que mueve el mundo es el poder. Es la tesis de Trasímaco en la República de Platón y, siglos después, la mirada de Maquiavelo sobre la política.",
   "abierto": "Si la justicia es solo lo que conviene al más fuerte, ¿con qué derecho criticamos a un tirano?",
   "reflexion": "¿Es la justicia algo más que la ley del más fuerte?",
   "autores": [{ "id": "platon" }, { "id": "maquiavelo" }], "temas": ["hf-politica", "hf-contrato"]
  },
  "K": {
   "xy": [6.8, 0.9], "titulo": "Materialista coherente",
   "texto": "Eres materia y nada más, y lo sostienes hasta el final: el alma es una función del cuerpo y la muerte es el fin. Es la línea de Demócrito y Epicuro y, en la época moderna, de Hobbes.",
   "abierto": "Si solo somos materia, ¿qué es la conciencia? ¿Y la libertad?",
   "reflexion": "¿Somos solo nuestro cuerpo?",
   "autores": [{ "id": "democrito" }, { "id": "epicuro" }, { "id": "hobbes" }], "temas": ["hf-preso", "hf-metafisica"]
  },
  "L": {
   "xy": [12.8, 0.9], "titulo": "Empirista",
   "texto": "Todo lo que sabes viene de la experiencia, y la experiencia no da certezas absolutas: la causalidad es un hábito y el yo, un haz de percepciones. Locke empezó el camino; Hume lo llevó hasta el final.",
   "abierto": "Si la ciencia se basa en la costumbre, ¿por qué funciona tan bien?",
   "reflexion": "¿Puede la experiencia darnos un conocimiento seguro?",
   "autores": [{ "id": "locke" }, { "id": "hume" }], "temas": ["hf-racionalismo"]
  },
  "M": {
   "xy": [13.8, 0.9], "titulo": "Dios o la Naturaleza",
   "texto": "Para ti todo es una sola realidad —Dios o la Naturaleza— y todo ocurre por necesidad. Como Spinoza, crees que ser libre no es hacer lo que quieres, sino comprender por qué ocurren las cosas.",
   "abierto": "Si todo es necesario, ¿tiene sentido premiar o castigar?",
   "reflexion": "¿Somos libres o está todo determinado?",
   "autores": [{ "id": "spinoza" }], "temas": ["hf-metafisica"]
  },
  "N": {
   "xy": [14.8, 0.9], "titulo": "El Leviatán",
   "texto": "Sin un poder fuerte, la vida sería una guerra de todos contra todos. Prefieres ceder tu libertad a un soberano a cambio de seguridad. Es la respuesta de Hobbes al miedo, y tiene algo del realismo de Maquiavelo.",
   "abierto": "¿Quién nos protege del soberano?",
   "reflexion": "¿Está justificado renunciar a la libertad a cambio de seguridad?",
   "autores": [{ "id": "hobbes" }, { "id": "maquiavelo" }], "temas": ["hf-contrato"]
  },
  "O": {
   "xy": [15.8, 0.9], "titulo": "Liberal",
   "texto": "Crees que tenemos derechos anteriores al Estado —vida, libertad, propiedad— y que el poder debe estar limitado y dividido para protegerlos. Es la línea de Locke y, en el siglo XIX, de Mill.",
   "abierto": "¿Qué pasa con quienes no tienen propiedad ni poder para hacer valer sus derechos?",
   "reflexion": "¿Cuáles deben ser los límites del poder del Estado?",
   "autores": [{ "id": "locke" }, { "id": "mill" }], "temas": ["hf-contrato", "hf-utilitarismo"]
  },
  "P": {
   "xy": [16.8, 0.9], "titulo": "La voluntad general",
   "texto": "Para ti el poder es del pueblo: una ley solo es legítima si expresa la voluntad general. Como Rousseau, crees que la sociedad puede corromper, pero también que un buen contrato nos hace ciudadanos libres.",
   "abierto": "¿Qué pasa con la minoría que no está de acuerdo con la voluntad general?",
   "reflexion": "¿Qué hace legítima una ley?",
   "autores": [{ "id": "rousseau" }], "temas": ["hf-contrato"]
  },
  "Q": {
   "xy": [17.8, 0.9], "titulo": "Utilitarista",
   "texto": "Juzgas las acciones por sus consecuencias: lo correcto es lo que produce más felicidad para el mayor número. Como Mill, distingues placeres superiores e inferiores, y pones un límite: no dañar a otros.",
   "abierto": "¿Se puede sacrificar a una persona si así se salva a muchas?",
   "reflexion": "¿Deben juzgarse las acciones solo por sus consecuencias?",
   "autores": [{ "id": "bentham" }, { "id": "mill" }], "temas": ["hf-utilitarismo"]
  }
 }
};
