"use strict";
/* ===== «Rayuela filosófica» (Historia de la Filosofía 2.º) — datos =====
   Idea y grafo del profesor (12-2025): «El camino de la filosofía» / «Metro filosófico»
   (documento original: ver docs/13_diseno_narrativa_marco_HF.md, que es también el diseño).
   Red 1 (de Sócrates a Descartes) y Red 2 (25-09: los modernos, de Galileo a Mill; transbordos desde 5, 7 y 9 como 4.ª opción con "red": 2) y Red 3 (25-09: los contemporáneos, de Kant a Beauvoir; transbordos desde 6, 10, 12, 15, 16 y 54) y Red 4 (25-09: el siglo XXI; transbordos desde 18, 20, 23 y 24; finales de dos letras AA-AB). Enlaces revisados el 24-09-2026: 46.2 iba a una página 37 inexistente (→ 47);
   43, 44, 45 y 47 no tenían entrada (→ 7.2, 6.1, 9.3 y 46.2); 3.1 lleva al Jardín (48); 41.3 → 46.
   Sin bucles (24-09, v2): la red siempre avanza hacia los finales; 43.2→40, 93.1→10, 41.1→5, 91.1→5, 45.2→46,
   92.1→10, 94.2→10, 90.1→F, 90.2→B. Validar con: node tools/validar_rayuela.js (comprueba también que no haya ciclos)
   estaciones: { "<n>": { tipo: pregunta|vida|contradiccion, red, linea, xy:[x,y], titulo, texto, pregunta,
                 opciones:[{t, to, marca}], temas:[clave THEORY], autores:[{id: clave ILUSTRES}], choque:[marcas] } }
   terminales: { "<letra>": { titulo, texto, abierto, reflexion, autores, temas, xy } }  · to = "<n>" o "F<letra>"
   inicio: la estación 1 (el andén de salida; desde ella se llega a toda la red). inicios (25-09): estaciones de
   pregunta desde las que puede salir un viaje de la web, al azar (solo las de redes abiertas; todas con al menos
   2 estaciones hasta un final y recorridos largos posibles). */
const RAYUELA_HF = {
 "inicio": "1",
 "inicios": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "11", "12", "13", "14", "17", "19"],
 "lineas": [
  { "id": "l-inicio", "nombre": "Salida", "color": "#9b4a4f" },
  { "id": "l-felicidad", "nombre": "Línea de la felicidad", "color": "#d99a00" },
  { "id": "l-ciudad", "nombre": "Línea de la ciudad", "color": "#5b6770" },
  { "id": "l-conocimiento", "nombre": "Línea del conocimiento", "color": "#2f6db5" },
  { "id": "l-alma", "nombre": "Línea del alma", "color": "#2e9b5b" },
  { "id": "l-dios", "nombre": "Línea de Dios", "color": "#7d4fb5" },
  { "id": "l-cosmos", "nombre": "Línea del cosmos", "color": "#e0701b" },
  { "id": "l-igualdad", "nombre": "Línea de la igualdad", "color": "#c2185b" },
  { "id": "l-siglo21", "nombre": "Línea del siglo XXI", "color": "#0f8b8d" },
  { "id": "l-contradiccion", "nombre": "Contradicciones", "color": "#d23a2b" }
 ],
 "redes": [
  { "n": 1, "nombre": "Red 1 · De Sócrates a Descartes", "abre": "2026-09-01" },
  { "n": 2, "nombre": "Red 2 · Los modernos: de Galileo a Mill", "abre": "2026-09-25" },
  { "n": 3, "nombre": "Red 3 · Los contemporáneos: de Kant a Beauvoir", "abre": "2026-09-25" },
  { "n": 4, "nombre": "Red 4 · El siglo XXI: los retos de hoy", "abre": "2026-09-25" }
 ],
 "tensiones": [
  {
   "id": "t-verdad-perspectiva", "grado": "contradiccion",
   "a": ["m-verdad-objetiva", "m-logos", "m-autonomia", "m-universalidad"], "b": ["m-perspectivismo", "m-interpretaciones"],
   "titulo": "¿Una verdad para todos, o una para cada cual?",
   "texto": "En una respuesta afirmas que hay algo que vale para todos: una verdad, un logos que lo gobierna todo, una razón común o unos derechos universales. En otra, que cada época y cada cultura tiene su razón, o que no hay hechos, solo interpretaciones. Es el viejo pleito de Sócrates con Protágoras, y tiene trampa: si todo es interpretación, también lo es esa misma frase."
  },
  {
   "id": "t-sentido-nihilismo", "grado": "contradiccion",
   "a": ["m-verdad-objetiva", "m-alma-orden", "m-felicidad-dios", "m-logos", "m-orden-divino", "m-fines", "m-inmortal"], "b": ["m-nada-vale", "m-todo-se-hunde", "m-absurdo"],
   "titulo": "¿Hay un sentido, o nada vale?",
   "texto": "En una respuesta dices que existe un Bien, un orden o un fin —en el alma, en Dios o en el cosmos—; en otra, que nada vale la pena o que la vida es absurda. Las dos no pueden ser verdad a la vez: un mundo ordenado hacia un fin no es absurdo. Camus decía que lo absurdo nace del choque entre nuestra sed de sentido y un mundo que calla. ¿Qué ha cambiado entre una respuesta y la otra?"
  },
  {
   "id": "t-logos-serenidad", "grado": "tension",
   "a": ["m-logos", "m-orden-divino"], "b": ["m-duda-serenidad", "m-evitar-muerte"],
   "titulo": "Crees en el orden, pero no te fías de él",
   "texto": "En una respuesta dices que una razón universal (el logos o una providencia divina) lo gobierna todo; en otra desconfías de la calma de Séneca ante la muerte. Pero esa calma es justo la conclusión estoica: si todo ocurre según el logos, lo razonable es aceptar lo que no depende de nosotros. ¿Se puede creer en ese orden y rebelarse a la vez contra lo que trae?"
  },
  {
   "id": "t-alma-materia", "grado": "contradiccion",
   "a": ["m-alma-separada", "m-inmortal", "m-dualismo", "m-dualismo-firme"], "b": ["m-materialismo", "m-solo-cuerpo", "m-nada-miedo"],
   "titulo": "¿Alma inmortal o solo materia?",
   "texto": "En una respuesta dices que el alma es algo distinto del cuerpo, o que sobrevive a la muerte; en otra, que solo hay materia, o que tras la muerte no queda nada. Si todo es materia, cuando el cuerpo se deshace no queda nada que sobreviva. Platón y Descartes defendían lo primero; Demócrito, Epicuro y Hobbes, lo segundo. No se puede estar en los dos bandos a la vez."
  },
  {
   "id": "t-cuidar-alma-materia", "grado": "tension",
   "a": ["m-alma-orden", "m-alma-forma", "m-interioridad"], "b": ["m-materialismo", "m-solo-cuerpo"],
   "titulo": "¿Qué alma cuidas si solo hay materia?",
   "texto": "En una respuesta hablas del alma: de tenerla en orden, de que es la forma del cuerpo o de buscar la verdad dentro de ti. En otra, de que todo es materia. No es imposible juntar las dos cosas: Epicuro pensaba que el alma está hecha de átomos, y aun así había que cuidarla. Pero te toca explicar qué es ese «alma» si no es más que materia, y cómo puede conocer el bien."
  },
  {
   "id": "t-ciudad-corrompe", "grado": "tension",
   "a": ["m-participar", "m-obedecer", "m-habitos"], "b": ["m-bondad-natural"],
   "titulo": "¿La ciudad te hace mejor o te corrompe?",
   "texto": "En una respuesta dices que participar en la ciudad y cumplir sus leyes forma parte de vivir bien; en otra, que es la sociedad la que nos corrompe. Si la sociedad corrompe, ¿por qué obedecer sus leyes, incluso cuando se equivocan? Aristóteles veía en la ciudad el lugar natural de la virtud; Rousseau, el origen de nuestros males, y por eso quería refundarla con un contrato nuevo."
  },
  {
   "id": "t-ciudad-retiro", "grado": "tension",
   "a": ["m-participar", "m-obedecer", "m-habitos", "m-desapego-limites", "m-retiro-politica", "m-politica-necesaria", "m-vida-comun", "m-transformar", "m-compromiso", "m-refundar"], "b": ["m-apartarse", "m-autarquia", "m-aparte", "m-no-pertenecer"],
   "titulo": "¿Con los demás o aparte?",
   "texto": "En una respuesta dices que la vida buena se juega con los demás: en la ciudad, en sus leyes o en el compromiso político. En otra, que lo mejor es apartarse y bastarse con poco. Aristóteles decía que quien puede vivir sin la ciudad «o es una bestia o es un dios»; Diógenes y Epicuro eligieron vivir al margen. Puede haber un término medio, pero tendrás que decir cuál."
  },
  {
   "id": "t-autoridad-pensar", "grado": "tension",
   "a": ["m-autoridad", "m-absolutismo", "m-obedecer"], "b": ["m-autonomia", "m-tolerancia", "m-verdad-ciencia"],
   "titulo": "¿Obedecer o pensar por tu cuenta?",
   "texto": "En una respuesta aceptas que la autoridad decida: qué se enseña, qué leyes valen aunque se equivoquen o cuánto poder tiene el soberano. En otra, que cada uno debe pensar por sí mismo, sin tutores. Kant intentó conciliarlo: «razonad cuanto queráis y sobre lo que queráis, pero obedeced». Sócrates obedeció las leyes, pero nunca dejó de preguntar. ¿Te basta con esa salida?"
  },
  {
   "id": "t-fe-razon", "grado": "contradiccion",
   "a": ["m-solo-fe", "m-razon-inutil"], "b": ["m-razon", "m-razon-valida", "m-ontologico", "m-certeza-sin-dios", "m-autonomia", "m-cientificismo", "m-interioridad-razon"],
   "titulo": "¿Solo la fe, o también la razón?",
   "texto": "En una respuesta dices que solo la fe da certeza, o que la razón no sirve para nada; en otra te apoyas en la razón para conocer o demostrar algo. Si la razón no sirve, tampoco sirve para eso. Agustín y Tomás de Aquino buscaron otra salida: creer para entender y entender para creer; la razón llega hasta un punto y la fe va más allá, pero no se contradicen."
  },
  {
   "id": "t-sentidos-razon", "grado": "tension",
   "a": ["m-sentidos-razon", "m-tabula-rasa"], "b": ["m-razon", "m-innatismo"],
   "titulo": "¿Los sentidos o la razón?",
   "texto": "En una respuesta dices que el conocimiento empieza por los sentidos, o que al nacer la mente es una hoja en blanco; en otra, que la verdad está en lo que piensa la razón y no en lo que se ve, o que algunas ideas nacen con nosotros. Es la gran discusión entre empiristas y racionalistas. Kant intentó unir los dos bandos: los pensamientos sin contenido están vacíos, y las intuiciones sin conceptos, ciegas."
  },
  {
   "id": "t-duda-certeza", "grado": "contradiccion",
   "a": ["m-suspender", "m-escepticismo-total", "m-duda-esteril"], "b": ["m-cogito", "m-ontologico", "m-dios-veraz", "m-certeza-sin-dios", "m-causa-necesaria", "m-cientificismo"],
   "titulo": "¿Nada es seguro… salvo esto?",
   "texto": "En una respuesta prefieres no afirmar nada con seguridad; en otra afirmas algo como absolutamente cierto. Es la objeción de siempre contra los escépticos: quien dice «no se puede saber nada» ya está afirmando algo. Sexto Empírico respondía que el escéptico no afirma, solo cuenta cómo le parecen las cosas. ¿Es tu caso, o has cambiado de opinión por el camino?"
  },
  {
   "id": "t-util-verdad", "grado": "tension",
   "a": ["m-utilidad", "m-utilidad-politica", "m-funciona"], "b": ["m-verdad-ciencia"],
   "titulo": "¿La verdad vale por sí misma o por lo que sirve?",
   "texto": "En una respuesta dices que lo verdadero es lo que funciona, o que con que algo funcione te basta; en otra, que la verdad no se negocia, cueste lo que cueste. Si la verdad fuera solo lo útil, a Galileo le habría convenido callarse: abjurar le salvó la vida. ¿La verdad vale por sí misma o por sus efectos?"
  },
  {
   "id": "t-placer-deber", "grado": "tension",
   "a": ["m-bienestar", "m-placer-tranquilo", "m-placer-intenso", "m-ataraxia"], "b": ["m-imperativo", "m-regla-universal"],
   "titulo": "¿El placer o el deber?",
   "texto": "En una respuesta pones el bienestar o el placer como lo que de verdad importa; en otra, que hay que actuar según una regla que valga para todos, aunque no te convenga. Para Epicuro, el placer es el principio y el fin de la vida feliz; para Kant, una acción hecha por lo bien que nos hace sentir no tiene valor moral. ¿Qué pesa más para ti?"
  },
  {
   "id": "t-suma-derechos", "grado": "tension",
   "a": ["m-mayor-numero", "m-consecuencias", "m-riqueza-total"], "b": ["m-derechos", "m-derechos-naturales", "m-imperativo", "m-libertad-individual", "m-universalidad", "m-poder-limitado"],
   "titulo": "¿La suma de felicidad o los derechos de cada uno?",
   "texto": "En una respuesta juzgas lo correcto por sus consecuencias: la mayor felicidad para el mayor número. En otra, que hay derechos o reglas que no se tocan aunque salgan las cuentas. Bentham y Kant no pueden tener razón a la vez. Mill intentó salvar las dos cosas: la mayor felicidad, sí, pero sin dañar la libertad de nadie."
  },
  {
   "id": "t-valores-universales", "grado": "tension",
   "a": ["m-valores-propios", "m-crear-valores"], "b": ["m-imperativo", "m-regla-universal", "m-universalidad", "m-derechos-todas", "m-dialogo", "m-derechos"],
   "titulo": "¿Valores de cada uno o para todos?",
   "texto": "En una respuesta dices que los valores los crea o los decide cada uno; en otra, que hay reglas o derechos que valen para todas las personas. Si cada uno crea sus propios valores, ¿con qué derecho exigimos a otro que respete los nuestros? Nietzsche y Kant no pueden tener razón a la vez; Habermas buscó un camino entre los dos: normas que todos podrían aceptar dialogando."
  },
  {
   "id": "t-necesidad-libertad", "grado": "tension",
   "a": ["m-libertad-necesidad", "m-materialismo"], "b": ["m-condenado-libre", "m-actos"],
   "titulo": "¿Todo está determinado, o eres libre?",
   "texto": "En una respuesta describes un mundo en el que todo ocurre por causas necesarias: la sustancia única de Spinoza o la materia en movimiento de Hobbes. En otra, que estás condenado a ser libre y eres lo que haces. Para Spinoza, creernos libres es ignorar las causas que nos mueven; para Sartre, ninguna causa sirve de excusa. ¿Cómo encaja tu libertad en ese mundo?"
  },
  {
   "id": "t-dios-muerte", "grado": "tension",
   "a": ["m-felicidad-dios", "m-fe-supera", "m-solo-fe", "m-dios-veraz", "m-inmortal", "m-mal-privacion", "m-interioridad"], "b": ["m-muerte-dios"],
   "titulo": "¿Dios en el centro… o Dios ha muerto?",
   "texto": "En una respuesta pones a Dios en el centro: de la felicidad, del conocimiento o de lo que hay tras la muerte. En otra te preguntas si Dios ha muerto. Preguntárselo no es contradictorio: pensar es eso. Pero si Dios ha muerto, ¿qué queda de todo lo que apoyabas en Él? Es justo lo que inquietaba a Nietzsche."
  },
  {
   "id": "t-politica-moral", "grado": "tension",
   "a": ["m-alma-orden", "m-habitos", "m-participar", "m-obedecer"], "b": ["m-realismo-politico", "m-solo-poder"],
   "titulo": "¿La política tiene que ser justa?",
   "texto": "En una respuesta unes la vida buena con la justicia y con la ciudad; en otra, que en política solo cuentan el poder o el resultado, no la moral. Para Sócrates y Aristóteles, la política es la continuación de la ética; Maquiavelo las separó. ¿Se puede exigir justicia a una persona y no a un gobierno?"
  },
  {
   "id": "t-dinero-mercado", "grado": "tension",
   "a": ["m-explotacion", "m-poder-economico", "m-igualdad-real", "m-residuo", "m-transformar"], "b": ["m-mercado", "m-riqueza-total"],
   "titulo": "¿Explotación o beneficio merecido?",
   "texto": "En una respuesta denuncias que manda quien tiene el dinero, o que unos viven del trabajo de otros; en otra, que el beneficio del mercado es merecido, o que lo que cuenta es la riqueza total, se reparta como se reparta. Marx y Locke no pueden tener razón a la vez sobre la propiedad: para uno, nace del trabajo que otros no cobran; para el otro, es un derecho natural."
  },
  {
   "id": "t-vinculos-libertad", "grado": "tension",
   "a": ["m-vinculos", "m-cuidar-vida", "m-vulnerables", "m-libertad-otros", "m-libertad-todos"], "b": ["m-nada-me-ata", "m-no-pertenecer"],
   "titulo": "¿Libre de todo o unido a otros?",
   "texto": "En una respuesta pides vínculos sólidos y cuidarnos unos a otros; en otra celebras que nada te ate. Bauman diría que esa libertad sin lazos es la del turista: ligera mientras todo va bien, solitaria cuando las cosas se tuercen. Beauvoir añadiría que nadie es libre del todo si los demás no lo son."
  },
  {
   "id": "t-azar-necesidad", "grado": "contradiccion",
   "a": ["m-azar"], "b": ["m-monismo", "m-causa-necesaria", "m-determinismo", "m-libertad-necesidad"],
   "titulo": "¿Azar o necesidad?",
   "texto": "En una respuesta dices que todo es fruto del azar y del choque de átomos; en otra, que todo ocurre por necesidad, según causas que no podrían ser de otra manera. Las dos no pueden ser verdad a la vez: si todo es necesario, nada es casual. Demócrito pensaba que los átomos se mueven por necesidad; Epicuro les añadió una pequeña desviación al azar para dejar sitio a la libertad, y para Spinoza el azar es solo el nombre de nuestra ignorancia."
  },
  {
   "id": "t-determinismo-deber", "grado": "contradiccion",
   "a": ["m-determinismo"], "b": ["m-imperativo", "m-regla-universal", "m-autonomia", "m-actos", "m-condenado-libre"],
   "titulo": "Nadie es responsable… pero hay deberes",
   "texto": "En una respuesta dices que, si todo ocurre por necesidad, nadie es responsable de nada; en otra, que hay que actuar según una regla que valga para todos, o que eres lo que haces. Pero no se le puede pedir a nadie que cumpla un deber si no puede elegir cumplirlo. Kant lo resumía así: «debes, luego puedes». Sartre iba más lejos: el determinismo es una excusa de mala fe."
  },
  {
   "id": "t-desobedecer-autoridad", "grado": "tension",
   "a": ["m-desobedecer"], "b": ["m-autoridad", "m-absolutismo"],
   "titulo": "¿Desobedecer la ley injusta, o que decida la autoridad?",
   "texto": "En una respuesta dices que, si una ley es injusta, a veces lo correcto es desobedecerla; en otra, que la autoridad tiene derecho a decidir qué se enseña, o que es mejor un soberano con todo el poder que el caos. Si el soberano lo decide todo, ¿quién juzga cuándo una ley es injusta? Para Hobbes, desobedecer nos devuelve a la guerra de todos contra todos; para Thoreau, ante una ley injusta, el lugar de una persona justa es la cárcel."
  },
  {
   "id": "t-costumbre-ciencia", "grado": "tension",
   "a": ["m-habito", "m-fenomeno"], "b": ["m-cientificismo"],
   "titulo": "Si la causa es costumbre, ¿qué nos da la ciencia?",
   "texto": "En una respuesta dices que la conexión entre causa y efecto la pone la costumbre, o que solo conocemos el mundo tal como se nos aparece; en otra, que la ciencia nos da el mundo tal como es y lo demás es palabrería. Pero la ciencia se apoya en causas y leyes: si su necesidad la pone nuestra mente, la ciencia no puede darnos las cosas tal como son en sí. Hume y Kant no despreciaban la ciencia, pero le ponían límites."
  },
  {
   "id": "t-sospecha-razon", "grado": "tension",
   "a": ["m-sospecha"], "b": ["m-autonomia", "m-razon", "m-certeza-sin-dios", "m-cientificismo"],
   "titulo": "Sospechas de la razón… y te fías de ella",
   "texto": "En una respuesta sospechas de la razón: quizá te engaña, o esconde intereses; en otra te fías de ella para conocer con certeza o para pensar por tu cuenta. Se puede hacer, pero con cuidado: para sospechar de la razón también hay que usarla. Descartes dudó de todo para encontrar algo seguro; Marx, Nietzsche y Freud, los «maestros de la sospecha», enseñaron a preguntar a quién beneficia lo que llamamos razonable."
  },
  {
   "id": "t-tecnica-dominio", "grado": "tension",
   "a": ["m-razon-dominio"], "b": ["m-tecnologia-neutra", "m-tecno-libera", "m-tecno-solucion"],
   "titulo": "¿La técnica es neutral o sirve para dominar?",
   "texto": "En una respuesta avisas de que la razón ilustrada también ha servido para dominar a la naturaleza y a las personas; en otra, que la tecnología es neutra, que nos hace más libres o que resolverá los problemas del planeta. Adorno y Horkheimer dirían que la técnica nunca es solo una herramienta: lleva dentro una manera de mirar el mundo como algo que explotar. ¿Por qué confías ahora en lo que antes te hacía sospechar?"
  },
  {
   "id": "t-libertad-agota", "grado": "tension",
   "a": ["m-autoexplotacion", "m-cansancio"], "b": ["m-nada-me-ata", "m-tecno-libera"],
   "titulo": "Una libertad que agota",
   "texto": "En una respuesta dices que te explotas a ti mismo creyendo que eres libre, o que el móvil y el cansancio te roban la vida; en otra celebras que nada te ata, o que la tecnología te hace más libre. Byung-Chul Han diría que es la misma libertad vista desde dos lados: nadie nos obliga, y por eso no paramos nunca. ¿Qué clase de libertad es la que te deja agotado?"
  },
  {
   "id": "t-sistema-individuo", "grado": "tension",
   "a": ["m-plataformas", "m-privilegio", "m-consumidores", "m-residuo", "m-explotacion", "m-global"], "b": ["m-cada-uno", "m-tecnologia-neutra"],
   "titulo": "¿Problema del sistema o de cada uno?",
   "texto": "En una respuesta señalas un problema del sistema: plataformas diseñadas para engancharnos, un mercado que nos quiere consumidores, el trabajo que otros no cobran o personas tratadas como residuo; en otra, que basta con que cada uno haga su parte o use bien la tecnología. Si el problema es de estructura, las soluciones individuales se quedan cortas; si todo depende de cada uno, la crítica al sistema sobra. Bauman y Yayo Herrero piden cambios colectivos, sin olvidar lo que hace cada persona."
  },
  {
   "id": "t-consumo-mercado", "grado": "tension",
   "a": ["m-consumidores", "m-global"], "b": ["m-mercado", "m-libertad-elegir", "m-riqueza-total"],
   "titulo": "¿Criticas el consumo y confías en el mercado?",
   "texto": "En una respuesta criticas que el mercado nos quiera consumidores y no ciudadanos, o que compremos marcas en lugar de cosas; en otra, que el beneficio del mercado es merecido, o que la justicia se mide por la riqueza total o por la libertad de cada uno para elegir. Pero lo que elegimos también lo moldea la publicidad. Bauman diría que en la sociedad de consumo la libertad de elegir se ha convertido en la obligación de comprar."
  },
  {
   "id": "t-callar-poetica", "grado": "tension",
   "a": ["m-callar"], "b": ["m-razon-poetica"],
   "titulo": "¿Callar lo indecible o decirlo de otra manera?",
   "texto": "En una respuesta dices que lo que no se puede decir con claridad es mejor callarlo; en otra, que la razón tiene que hacerse poética para abrirse a lo que sentimos y no sabemos decir. Wittgenstein cerró su primer libro pidiendo silencio ante lo que no se puede decir; María Zambrano pensaba que la razón poética podía acercarse a lo que no cabe en los conceptos. ¿Con cuál de los dos te quedas?"
  },
  {
   "id": "t-dios-limites", "grado": "tension",
   "a": ["m-felicidad-dios", "m-ontologico", "m-dios-veraz", "m-orden-divino"], "b": ["m-limites-razon"],
   "titulo": "Dios en el centro, pero de Dios no sabemos nada",
   "texto": "En una respuesta pones a Dios en el centro: de la felicidad, del orden del mundo o de la certeza; en otra, que la razón tiene límites y que de Dios o del alma no podemos saber nada. No tiene por qué ser una contradicción: Kant escribió que tuvo que suprimir el saber para dejar sitio a la fe. Pero entonces tu Dios ya no es algo que se demuestra, sino algo en lo que se cree."
  },
  {
   "id": "t-lobos-dialogo", "grado": "tension",
   "a": ["m-guerra-todos"], "b": ["m-dialogo"],
   "titulo": "Si somos lobos, ¿cómo vamos a dialogar?",
   "texto": "En una respuesta dices que, sin Estado, viviríamos en una guerra de todos contra todos; en otra, que el diálogo racional entre todos puede darnos normas comunes. Hobbes no creía que llegáramos a un acuerdo sin un poder que nos diera miedo; para Habermas, una norma solo es válida si todos los afectados podrían aceptarla en un diálogo libre. ¿Qué tendría que cambiar en las personas para que el diálogo funcione?"
  },
  {
   "id": "t-sereno-miedo", "grado": "tension",
   "a": ["m-estoico", "m-ataraxia", "m-serenidad"], "b": ["m-nada-miedo", "m-evitar-muerte"],
   "titulo": "Admiras la calma ante la muerte… y te da miedo",
   "texto": "En una respuesta admiras la serenidad ante la muerte, o dices que lo importante es vivir sin miedo; en otra, que la muerte te da miedo, o que hay que evitarla a toda costa. No es raro: casi todos pensamos una cosa y sentimos otra. Epicuro razonaba que la muerte no es nada para nosotros, porque cuando ella está, nosotros ya no estamos; Séneca, que hay que pasarse la vida aprendiendo a morir. ¿Te convencen, o el miedo pesa más que los argumentos?"
  },
  {
   "id": "t-construccion-resuelto", "grado": "tension",
   "a": ["m-lenguaje-poder", "m-construccion"], "b": ["m-resuelto"],
   "titulo": "¿Construcción social… y problema resuelto?",
   "texto": "En una respuesta dices que el lenguaje nombra a unos como la norma y a otras como «lo otro», o que lo femenino es una construcción social; en otra, que lo que se jugaba Beauvoir ya no importa hoy. Si algo es una construcción social, no desaparece solo porque cambien las leyes: sigue en las costumbres, en el lenguaje y en el reparto del trabajo en casa. Para Beauvoir, la igualdad ante la ley era solo el primer paso."
  },
  {
   "id": "t-nada-vale-cuidar", "grado": "tension",
   "a": ["m-nada-vale", "m-todo-se-hunde"], "b": ["m-cuidar-vida", "m-vinculos", "m-vulnerables"],
   "titulo": "Nada vale… pero hay que cuidar la vida",
   "texto": "En una respuesta dices que nada vale la pena, o que sin Dios todo se hunde; en otra, que hay que cuidar la vida, tejer vínculos sólidos o proteger a los más vulnerables. Si nada valiera, cuidar tampoco valdría. Quizá has descubierto por el camino que algo sí vale: para Camus, incluso en un mundo sin sentido, la solidaridad con los demás es una respuesta al absurdo."
  }
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
    { "t": "Quizá Dios no sea tan bueno: podría estar engañándonos.", "to": "92", "marca": "m-dios-engana" },
    { "t": "¿Y si Dios ha muerto y el mal no necesita explicación?", "to": "21", "marca": "m-muerte-dios", "red": 3 }
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
    { "t": "No hay nada… aunque, por si acaso, me da miedo.", "to": "90", "marca": "m-nada-miedo" },
    { "t": "¿Y si lo que importa no es qué hay después, sino qué hago con la vida que tengo?", "to": "23", "marca": "m-que-hago", "red": 3 }
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
    { "t": "No lo sé, pero la ciencia funciona, y con eso me basta.", "to": "16", "marca": "m-funciona" },
    { "t": "¿Y si la necesidad de las causas no la pone la costumbre, sino nuestra propia mente?", "to": "19", "marca": "m-a-priori", "red": 3 }
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
    { "t": "El poder es del pueblo: las leyes deben expresar la voluntad general.", "to": "FP", "marca": "m-voluntad-general" },
    { "t": "¿Y si el poder de verdad no está en el gobierno, sino en quien tiene el dinero?", "to": "20", "marca": "m-poder-economico", "red": 3 }
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
    { "t": "Depende: no todos los placeres ni todas las vidas se miden igual.", "to": "55", "marca": "m-calidad" },
    { "t": "Busco una regla que valga para todos, sin hacer cuentas.", "to": "18", "marca": "m-regla-universal", "red": 3 }
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
    { "t": "Que, si la sociedad corrompe, lo mejor es vivir aparte.", "to": "FC", "marca": "m-aparte" },
    { "t": "Quiero saber qué significa atreverse a pensar por uno mismo, como pedía la Ilustración.", "to": "17", "marca": "m-ilustracion", "red": 3 }
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
  },
  "17": {
   "tipo": "pregunta", "red": 3, "linea": "l-conocimiento", "xy": [20.2, 12.8],
   "titulo": "¡Atrévete a pensar!",
   "texto": "Königsberg, 1784. Kant define la Ilustración como la salida del ser humano de su minoría de edad: la incapacidad de servirse de su propio entendimiento sin la guía de otro. Su lema es «Sapere aude»: atrévete a pensar.",
   "pregunta": "¿Te atreves a pensar por ti mismo?",
   "opciones": [
    { "t": "Sí: la razón es la misma para todos y puedo usarla sin tutores.", "to": "19", "marca": "m-autonomia" },
    { "t": "Con cuidado: la razón ilustrada también ha servido para dominar a la naturaleza y a las personas.", "to": "20", "marca": "m-razon-dominio" },
    { "t": "¿Qué razón? Cada época y cada cultura tiene la suya.", "to": "21", "marca": "m-perspectivismo" }
   ],
   "temas": ["hf-ilustracion"], "autores": [{ "id": "kant" }, { "id": "adorno" }]
  },
  "18": {
   "tipo": "pregunta", "red": 3, "linea": "l-felicidad", "xy": [25.4, 10.6],
   "titulo": "El deber",
   "texto": "Has prometido a una amiga guardar un secreto. Ahora contarlo te vendría muy bien: nadie se enteraría de que fuiste tú.",
   "pregunta": "¿Qué haces?",
   "opciones": [
    { "t": "Lo guardo: solo actúo según una regla que pudiera valer para todos.", "to": "FR", "marca": "m-imperativo" },
    { "t": "Lo cuento si así es más feliz más gente.", "to": "55", "marca": "m-consecuencias" },
    { "t": "Ni deber ni cálculo: los valores los decido yo.", "to": "21", "marca": "m-valores-propios" },
    { "t": "¿Tenemos deberes con el planeta y con quienes aún no han nacido?", "to": "28", "marca": "m-generaciones", "red": 4 }
   ],
   "temas": ["hf-etica-deber"], "autores": [{ "id": "kant" }, { "id": "mill" }]
  },
  "19": {
   "tipo": "pregunta", "red": 3, "linea": "l-conocimiento", "xy": [22.2, 12.8],
   "titulo": "Los límites de la razón",
   "texto": "Kant se pregunta qué puede conocer la razón y dónde están sus límites. Su respuesta cambia la filosofía: no es el conocimiento el que se adapta a las cosas, sino las cosas las que se adaptan a nuestra manera de conocer.",
   "pregunta": "¿Conocemos el mundo tal como es?",
   "opciones": [
    { "t": "Solo como se nos aparece: nuestra mente pone el espacio, el tiempo y las causas.", "to": "60", "marca": "m-fenomeno" },
    { "t": "Sí, y cada vez mejor: la ciencia nos da el mundo tal como es y lo demás es palabrería.", "to": "22", "marca": "m-cientificismo" },
    { "t": "No hay hechos, solo interpretaciones.", "to": "21", "marca": "m-interpretaciones" }
   ],
   "temas": ["hf-kant"], "autores": [{ "id": "kant" }, { "id": "nietzsche" }]
  },
  "20": {
   "tipo": "pregunta", "red": 3, "linea": "l-ciudad", "xy": [19.4, 10.8],
   "titulo": "La fábrica",
   "texto": "Manchester, 1845. Trabajas catorce horas al día en una fábrica textil, igual que tus hijos pequeños, y cobras lo justo para no morirte de hambre. El dueño de la fábrica se hace cada año más rico.",
   "pregunta": "¿Qué está pasando?",
   "opciones": [
    { "t": "Explotación: unos viven del trabajo que otros no cobran.", "to": "61", "marca": "m-explotacion" },
    { "t": "Es el mercado: quien arriesga su capital merece el beneficio.", "to": "FO", "marca": "m-mercado" },
    { "t": "Una injusticia que se arreglaría con un reparto que cualquiera aceptaría sin saber qué lugar le iba a tocar.", "to": "FX", "marca": "m-velo" },
    { "t": "¿Y hoy? La fábrica es el mundo entero y compramos marcas, no cosas.", "to": "26", "marca": "m-global", "red": 4 }
   ],
   "temas": ["hf-capitalismo", "hf-sospecha"], "autores": [{ "id": "marx" }, { "id": "rawls" }]
  },
  "21": {
   "tipo": "pregunta", "red": 3, "linea": "l-dios", "xy": [21.6, 9.4],
   "titulo": "Dios ha muerto",
   "texto": "«Dios ha muerto, y nosotros lo hemos matado», escribe Nietzsche en 1882. No habla de religión, sino de algo más grave: ya no hay un fundamento seguro —Dios, la razón, la verdad— que diga qué vale y qué no.",
   "pregunta": "¿Y ahora qué?",
   "opciones": [
    { "t": "Crear mis propios valores y decir sí a la vida, también a lo que duele.", "to": "62", "marca": "m-crear-valores" },
    { "t": "Si nada tiene fundamento, nada vale la pena.", "to": "95", "marca": "m-nada-vale" },
    { "t": "Sin Dios, el diálogo racional entre todos puede darnos normas comunes.", "to": "FW", "marca": "m-dialogo" }
   ],
   "temas": ["hf-sospecha", "hf-posmodernidad"], "autores": [{ "id": "nietzsche" }, { "id": "habermas" }]
  },
  "22": {
   "tipo": "pregunta", "red": 3, "linea": "l-conocimiento", "xy": [23.2, 10.6],
   "titulo": "El lenguaje",
   "texto": "A comienzos del siglo XX, muchos filósofos llegan a una sospecha: quizá buena parte de los problemas de la filosofía no sean problemas del mundo, sino malentendidos del lenguaje.",
   "pregunta": "¿Qué piensas del lenguaje?",
   "opciones": [
    { "t": "Que lo que no se puede decir con claridad, mejor callarlo.", "to": "63", "marca": "m-callar" },
    { "t": "Que el significado de una palabra es su uso: aprendemos a hablar jugando juegos de lenguaje.", "to": "FW", "marca": "m-uso" },
    { "t": "Que no es neutral: nombra a unos como la norma y a otras como «lo otro».", "to": "24", "marca": "m-lenguaje-poder" }
   ],
   "temas": ["hf-analitica"], "autores": [{ "id": "wittgenstein" }]
  },
  "23": {
   "tipo": "pregunta", "red": 3, "linea": "l-alma", "xy": [23.4, 6.6],
   "titulo": "La existencia",
   "texto": "Nadie te preguntó si querías nacer. Estás aquí, en un tiempo y un lugar que no elegiste, y tienes que decidir qué hacer con tu vida sin que nadie te dé el manual de instrucciones.",
   "pregunta": "¿Qué haces con tu existencia?",
   "opciones": [
    { "t": "Estoy condenado a ser libre: soy lo que hago.", "to": "64", "marca": "m-condenado-libre" },
    { "t": "La vida es absurda, y aun así hay que vivirla con rebeldía.", "to": "FU", "marca": "m-absurdo" },
    { "t": "La entiendo desde mi circunstancia, y con una razón que escuche también lo que siento.", "to": "66", "marca": "m-circunstancia" },
    { "t": "¿Y si hoy lo que me roba la vida es el móvil y el cansancio?", "to": "25", "marca": "m-cansancio", "red": 4 }
   ],
   "temas": ["hf-existencialismo"], "autores": [{ "id": "sartre" }, { "id": "camus" }, { "id": "ortega" }]
  },
  "24": {
   "tipo": "pregunta", "red": 3, "linea": "l-igualdad", "xy": [22.6, 4.6],
   "titulo": "No se nace mujer",
   "texto": "«No se nace mujer: se llega a serlo», escribe Simone de Beauvoir en 1949. La frase se convierte en uno de los puntos de partida del feminismo contemporáneo.",
   "pregunta": "¿Qué quiere decir?",
   "opciones": [
    { "t": "Que lo femenino es una construcción social, no un destino biológico.", "to": "65", "marca": "m-construccion" },
    { "t": "Que hombres y mujeres son iguales en derechos, y hay que reconocerlo en las leyes.", "to": "67", "marca": "m-derechos-todas" },
    { "t": "Que exagera: cada sexo tiene su naturaleza y su papel.", "to": "100", "marca": "m-naturaleza-sexo" },
    { "t": "¿Y el género? ¿También se aprende?", "to": "27", "marca": "m-genero", "red": 4 }
   ],
   "temas": ["hf-beauvoir"], "autores": [{ "id": "beauvoir" }, { "id": "wollstonecraft" }]
  },
  "60": {
   "tipo": "vida", "red": 3, "linea": "l-conocimiento", "xy": [24.2, 12.2],
   "titulo": "El paseo de Kant",
   "texto": "Königsberg, hacia 1780. Kant nunca sale de su ciudad. Se levanta a las cinco, da clase, escribe y, cada tarde, sale a pasear a la misma hora por la misma avenida; los vecinos, dicen, ponían el reloj en hora al verlo pasar. Solo una vez faltó al paseo: se quedó en casa leyendo el Emilio de Rousseau.",
   "pregunta": "¿Qué te parece una vida tan regular?",
   "opciones": [
    { "t": "Coherente: ser libre es darse a uno mismo la ley y cumplirla.", "to": "18", "marca": "m-autonomia" },
    { "t": "Honrada: pone límites a la razón; de Dios o del alma no podemos saber nada.", "to": "21", "marca": "m-limites-razon" },
    { "t": "Demasiado orden: la vida no cabe en reglas.", "to": "23", "marca": "m-vida-sin-reglas" }
   ],
   "temas": ["hf-kant", "hf-etica-deber"], "autores": [{ "id": "kant" }]
  },
  "61": {
   "tipo": "vida", "red": 3, "linea": "l-ciudad", "xy": [19.2, 8.6],
   "titulo": "Marx en el Museo Británico",
   "texto": "Londres, década de 1850. Marx vive exiliado y en la pobreza; tres de sus hijos mueren pequeños. Cada día va a la sala de lectura del Museo Británico a estudiar economía para escribir El capital. Ya lo había dejado escrito: los filósofos no han hecho más que interpretar el mundo; de lo que se trata es de transformarlo.",
   "pregunta": "¿Qué te parece su tesis?",
   "opciones": [
    { "t": "Tiene razón: hay que cambiar el mundo, no solo pensarlo.", "to": "FS", "marca": "m-transformar" },
    { "t": "Transformarlo, sí, pero nunca a costa de la libertad de cada uno.", "to": "99", "marca": "m-libertad-primero" },
    { "t": "La sospecha puede ir más lejos: también la moral y la razón esconden intereses.", "to": "21", "marca": "m-sospecha" }
   ],
   "temas": ["hf-capitalismo", "hf-sospecha"], "autores": [{ "id": "marx" }]
  },
  "62": {
   "tipo": "vida", "red": 3, "linea": "l-dios", "xy": [22.6, 8],
   "titulo": "Nietzsche en Turín",
   "texto": "Turín, enero de 1889. Nietzsche ve cómo un cochero azota a su caballo en la plaza. Corre hacia el animal, se abraza a su cuello llorando y se desploma. Ya no recuperará la razón. El filósofo que había criticado la compasión termina sus días lúcidos abrazado a un caballo.",
   "pregunta": "¿Qué ves en la escena?",
   "opciones": [
    { "t": "Al hombre que quiso decir sí a toda la vida, también al dolor.", "to": "FT", "marca": "m-si-a-la-vida" },
    { "t": "La prueba de que, sin Dios, todo se hunde.", "to": "95", "marca": "m-todo-se-hunde" },
    { "t": "Que la compasión que criticaba estaba dentro de él.", "to": "23", "marca": "m-compasion" }
   ],
   "temas": ["hf-sospecha", "hf-posmodernidad"], "autores": [{ "id": "nietzsche" }]
  },
  "63": {
   "tipo": "vida", "red": 3, "linea": "l-conocimiento", "xy": [24.6, 8.8],
   "titulo": "Wittgenstein en la trinchera",
   "texto": "Frente oriental, 1916. Wittgenstein, hijo de una de las familias más ricas de Europa, se ha alistado como soldado raso. Pide los puestos más peligrosos y, entre combate y combate, escribe en un cuaderno el Tractatus. Al volver de la guerra regala toda su fortuna y se hace maestro en una escuela de pueblo.",
   "pregunta": "¿Qué piensas?",
   "opciones": [
    { "t": "Que lo más importante —la ética, el sentido de la vida— no se dice: se muestra viviendo.", "to": "23", "marca": "m-mostrar" },
    { "t": "Que, si todo lo importante es indecible, la filosofía no sirve para nada.", "to": "FD", "marca": "m-filosofia-inutil" },
    { "t": "Que hizo bien en cambiar de vida y, más tarde, de ideas: pensar es corregirse.", "to": "FW", "marca": "m-corregirse" }
   ],
   "temas": ["hf-analitica"], "autores": [{ "id": "wittgenstein" }]
  },
  "64": {
   "tipo": "vida", "red": 3, "linea": "l-alma", "xy": [24.8, 6.8],
   "titulo": "Sartre rechaza el Nobel",
   "texto": "París, 1964. La Academia sueca concede el Premio Nobel de Literatura a Jean-Paul Sartre. Él lo rechaza: un escritor no debe dejarse convertir en una institución. Es el primero en renunciar voluntariamente al premio.",
   "pregunta": "¿Qué te parece su gesto?",
   "opciones": [
    { "t": "Coherente: nadie puede definirme, salvo mis actos.", "to": "FU", "marca": "m-actos" },
    { "t": "Bien, pero mi libertad depende también de la de los demás, como decía Beauvoir.", "to": "24", "marca": "m-libertad-otros" },
    { "t": "Prefiero una razón más humilde, que se deje tocar por lo que vive.", "to": "66", "marca": "m-razon-humilde" }
   ],
   "temas": ["hf-existencialismo"], "autores": [{ "id": "sartre" }]
  },
  "65": {
   "tipo": "vida", "red": 3, "linea": "l-igualdad", "xy": [21.2, 3.6],
   "titulo": "Beauvoir en el Índice",
   "texto": "París, 1949. Simone de Beauvoir publica El segundo sexo. Vende veintidós mil ejemplares en una semana, recibe insultos y cartas furiosas, y el Vaticano incluye el libro en su Índice de libros prohibidos. Hoy se lee en todo el mundo.",
   "pregunta": "¿Qué se jugaba con ese libro?",
   "opciones": [
    { "t": "La libertad de las mujeres: nadie debe definirlas desde fuera.", "to": "FV", "marca": "m-libertad-mujeres" },
    { "t": "La libertad de todos: la opresión de unas personas limita la libertad de las demás.", "to": "FU", "marca": "m-libertad-todos" },
    { "t": "Nada que siga importando hoy: es un problema resuelto.", "to": "100", "marca": "m-resuelto" }
   ],
   "temas": ["hf-beauvoir"], "autores": [{ "id": "beauvoir" }]
  },
  "66": {
   "tipo": "vida", "red": 3, "linea": "l-alma", "xy": [25.6, 5.2],
   "titulo": "Zambrano cruza la frontera",
   "texto": "Pirineos, enero de 1939. María Zambrano, discípula de Ortega, cruza a pie la frontera con su madre entre la multitud que huye de la Guerra Civil. Empieza un exilio de cuarenta y cinco años en México, Cuba, Italia y Suiza. Allí piensa una «razón poética»: una razón que no desprecie lo que se siente.",
   "pregunta": "¿Qué aprendes de ella?",
   "opciones": [
    { "t": "Que la razón tiene que hacerse poética y abrirse a lo que sentimos y no sabemos decir.", "to": "FY", "marca": "m-razon-poetica" },
    { "t": "Que yo soy yo y mi circunstancia: hay que pensar desde la propia vida, como decía Ortega.", "to": "FY", "marca": "m-razon-vital" },
    { "t": "Que la política decide nuestras vidas: hay que comprometerse.", "to": "FU", "marca": "m-compromiso" }
   ],
   "temas": ["hf-existencialismo"], "autores": [{ "id": "zambrano" }, { "id": "ortega" }]
  },
  "67": {
   "tipo": "vida", "red": 3, "linea": "l-igualdad", "xy": [23.8, 3.4],
   "titulo": "Olympe de Gouges",
   "texto": "París, 1791. La Revolución ha proclamado los derechos del hombre y del ciudadano. Olympe de Gouges responde con la Declaración de los Derechos de la Mujer y de la Ciudadana: «La mujer tiene derecho a subir al cadalso; debe tener también el de subir a la tribuna». En 1793 es guillotinada.",
   "pregunta": "¿Qué concluyes?",
   "opciones": [
    { "t": "Que tenía razón: los derechos, o son de todas las personas, o no son derechos.", "to": "FV", "marca": "m-universalidad" },
    { "t": "Que la igualdad ante la ley no basta si sigue la desigualdad en la economía y en casa.", "to": "FS", "marca": "m-igualdad-real" },
    { "t": "Que las declaraciones no sirven sin instituciones que protejan los derechos.", "to": "FO", "marca": "m-instituciones" }
   ],
   "temas": ["hf-ilustracion", "hf-beauvoir"], "autores": [{ "id": "gouges" }, { "id": "wollstonecraft" }]
  },
  "95": {
   "tipo": "contradiccion", "red": 3, "linea": "l-contradiccion", "xy": [21.4, 5.8],
   "titulo": "Contradicción: nada vale, pero eliges",
   "texto": "Dices que nada vale la pena, pero sigues eligiendo, discutiendo y queriendo cosas: con cada elección dices que algo vale más que otra cosa. Nietzsche llamaba a esa actitud nihilismo pasivo, y quería superarla.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Creo mis propios valores.", "to": "FT" },
    { "t": "Busco el sentido en lo que hago con mi vida.", "to": "23" },
    { "t": "Mantengo que nada vale nada.", "to": "FJ" }
   ],
   "choque": ["m-nada-vale", "m-todo-se-hunde", "m-valores-propios", "m-crear-valores", "m-autonomia", "m-imperativo"],
   "temas": ["hf-posmodernidad"], "autores": [{ "id": "nietzsche" }]
  },
  "99": {
   "tipo": "contradiccion", "red": 3, "linea": "l-contradiccion", "xy": [20.4, 7.2],
   "titulo": "Contradicción: igualdad o propiedad",
   "texto": "Denuncias la explotación y, a la vez, defiendes que la propiedad y el mercado son intocables; o quieres transformarlo todo sin que nadie pierda nada. Marx y Locke no pueden tener razón a la vez sobre la propiedad.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "La igualdad va primero.", "to": "FS" },
    { "t": "La libertad va primero.", "to": "FO" },
    { "t": "Busco un reparto que pueda aceptar todo el mundo.", "to": "FX" }
   ],
   "choque": ["m-explotacion", "m-transformar", "m-libertad-primero", "m-mercado", "m-derechos-naturales", "m-poder-limitado", "m-libertad-individual", "m-poder-economico"],
   "temas": ["hf-capitalismo"], "autores": [{ "id": "marx" }, { "id": "locke" }, { "id": "rawls" }]
  },
  "100": {
   "tipo": "contradiccion", "red": 3, "linea": "l-contradiccion", "xy": [25, 2.8],
   "titulo": "Contradicción: libertad o destino",
   "texto": "Has defendido que somos libres, que los derechos son de todos o que cada cual se hace a sí mismo; y ahora, que el sexo marca un destino, o que la desigualdad ya no existe. Beauvoir preguntaría: ¿libres todos, o solo algunos?",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Corrijo: nadie nace con un destino escrito.", "to": "FV" },
    { "t": "Acepto que somos libres, aunque la biología también cuenta.", "to": "FU" },
    { "t": "Mantengo que cada sexo tiene su destino natural.", "to": "FK" }
   ],
   "choque": ["m-naturaleza-sexo", "m-resuelto", "m-condenado-libre", "m-autonomia", "m-derechos-todas", "m-libertad-otros", "m-actos", "m-derechos-naturales"],
   "temas": ["hf-beauvoir", "hf-existencialismo"], "autores": [{ "id": "beauvoir" }]
  },
  "25": {
   "tipo": "pregunta", "red": 4, "linea": "l-siglo21", "xy": [28.2, 12.8],
   "titulo": "Las dos de la madrugada",
   "texto": "Son las dos de la madrugada y sigues con el móvil: un vídeo más, una notificación más, un mensaje que contestar. Mañana tienes examen y estás agotado, pero nadie te obliga a seguir.",
   "pregunta": "¿Qué está pasando?",
   "opciones": [
    { "t": "Que me exploto a mí mismo creyendo que soy libre: nadie me obliga, y aun así no paro.", "to": "68", "marca": "m-autoexplotacion" },
    { "t": "Que las plataformas están diseñadas para engancharme: la culpa es de quien las diseña.", "to": "26", "marca": "m-plataformas" },
    { "t": "Nada grave: la tecnología es neutra; depende de cómo la use cada uno.", "to": "101", "marca": "m-tecnologia-neutra" }
   ],
   "temas": ["hf-siglo21"], "autores": [{ "id": "han" }]
  },
  "26": {
   "tipo": "pregunta", "red": 4, "linea": "l-siglo21", "xy": [27.6, 10.2],
   "titulo": "La vida líquida",
   "texto": "Cambias de móvil cada dos años, de trabajo cada pocos meses y de identidad en cada red social. Las marcas no te venden zapatillas, sino un estilo de vida. Nada dura mucho.",
   "pregunta": "¿Cómo lo vives?",
   "opciones": [
    { "t": "Como libertad: nada me ata y puedo reinventarme cuando quiera.", "to": "27", "marca": "m-nada-me-ata" },
    { "t": "Como precariedad: vínculos, trabajos e identidades de usar y tirar.", "to": "69", "marca": "m-precariedad" },
    { "t": "Como un negocio: el mercado nos quiere consumidores, no ciudadanos.", "to": "28", "marca": "m-consumidores" }
   ],
   "temas": ["hf-siglo21"], "autores": [{ "id": "bauman" }, { "id": "klein" }, { "id": "chomsky" }]
  },
  "27": {
   "tipo": "pregunta", "red": 4, "linea": "l-siglo21", "xy": [30.4, 8.8],
   "titulo": "El género",
   "texto": "Desde que naces te dicen cómo vestir, cómo moverte, a qué jugar y qué debe gustarte según tu sexo. Judith Butler dice que el género se aprende repitiendo esos gestos, como un papel.",
   "pregunta": "¿Qué es el género?",
   "opciones": [
    { "t": "Un papel que se aprende repitiendo gestos, y que por eso se puede cambiar.", "to": "70", "marca": "m-performatividad" },
    { "t": "Un hecho biológico: viene dado con el cuerpo.", "to": "100", "marca": "m-genero-biologico" },
    { "t": "Una construcción social que sirve para repartir el poder.", "to": "FV", "marca": "m-genero-poder" }
   ],
   "temas": ["hf-siglo21", "hf-beauvoir"], "autores": [{ "id": "butler" }, { "id": "preciado" }]
  },
  "28": {
   "tipo": "pregunta", "red": 4, "linea": "l-siglo21", "xy": [29.2, 6.4],
   "titulo": "El planeta",
   "texto": "El termómetro sube, los ríos se secan y cada verano arde más bosque. Mientras tanto, la economía tiene que crecer cada año. Yayo Herrero recuerda que somos ecodependientes (vivimos de la naturaleza) e interdependientes (vivimos de los cuidados de otros).",
   "pregunta": "¿Qué hacemos?",
   "opciones": [
    { "t": "Cambiar de rumbo: poner en el centro la vida y los cuidados, no el dinero.", "to": "FZ", "marca": "m-cuidar-vida" },
    { "t": "Confiar en la tecnología: la ciencia encontrará la solución sin cambiar nuestra forma de vivir.", "to": "102", "marca": "m-tecno-solucion" },
    { "t": "Que cada uno haga su parte: reciclar y consumir un poco menos.", "to": "29", "marca": "m-cada-uno" }
   ],
   "temas": ["hf-siglo21"], "autores": [{ "id": "herrero" }]
  },
  "29": {
   "tipo": "pregunta", "red": 4, "linea": "l-siglo21", "xy": [28.2, 4.2],
   "titulo": "¿Qué es un país justo?",
   "texto": "Dos países tienen la misma riqueza por habitante. En uno, las niñas no van a la escuela, no hay hospital cerca y nadie tiene tiempo libre. En el otro, sí.",
   "pregunta": "¿Cómo se mide la justicia?",
   "opciones": [
    { "t": "Por lo que la gente puede hacer y ser de verdad: salud, educación, afecto, juego, voz.", "to": "FAA", "marca": "m-capacidades" },
    { "t": "Por la riqueza y la felicidad totales, se repartan como se repartan.", "to": "FQ", "marca": "m-riqueza-total" },
    { "t": "Por la libertad de cada uno para elegir su propia vida.", "to": "FO", "marca": "m-libertad-elegir" }
   ],
   "temas": ["hf-siglo21"], "autores": [{ "id": "nussbaum" }]
  },
  "68": {
   "tipo": "vida", "red": 4, "linea": "l-siglo21", "xy": [30.2, 12.2],
   "titulo": "El jardín de Byung-Chul Han",
   "texto": "Berlín, hacia 2016. Byung-Chul Han, el filósofo que habla de la sociedad del cansancio, pasa tres primaveras cuidando un jardín: aprende los nombres de las flores, espera a que broten, se ensucia las manos. Lo cuenta en Loa a la tierra: la tierra enseña un tiempo lento que la pantalla no conoce.",
   "pregunta": "¿Qué te parece?",
   "opciones": [
    { "t": "Que tiene razón: hay que recuperar el tiempo lento, el silencio y el contacto con lo real.", "to": "FAB", "marca": "m-tiempo-lento" },
    { "t": "Que es un privilegio: no todo el mundo puede permitirse desconectar.", "to": "26", "marca": "m-privilegio" },
    { "t": "Que exagera: la tecnología también nos conecta y nos hace más libres.", "to": "101", "marca": "m-tecno-libera" }
   ],
   "temas": ["hf-siglo21"], "autores": [{ "id": "han" }]
  },
  "69": {
   "tipo": "vida", "red": 4, "linea": "l-siglo21", "xy": [28.4, 8.6],
   "titulo": "El exilio de Bauman",
   "texto": "Varsovia, 1968. Durante una campaña antisemita del régimen comunista, Zygmunt Bauman pierde su cátedra en la universidad y tiene que abandonar Polonia. De joven ya había tenido que huir de los nazis. Acaba en Leeds, en Inglaterra, y dedica su vida a pensar un mundo en el que nada es sólido: ni los empleos, ni los vínculos, ni las identidades.",
   "pregunta": "¿Qué aprendes de él?",
   "opciones": [
    { "t": "Que en un mundo líquido hacen falta vínculos sólidos: cuidarnos unos a otros.", "to": "28", "marca": "m-vinculos" },
    { "t": "Que quien no es útil al mercado se convierte en «residuo humano»: hay que cambiar el sistema.", "to": "FS", "marca": "m-residuo" },
    { "t": "Que no pertenecer a nada también es una forma de libertad.", "to": "27", "marca": "m-no-pertenecer" }
   ],
   "temas": ["hf-siglo21"], "autores": [{ "id": "bauman" }]
  },
  "70": {
   "tipo": "vida", "red": 4, "linea": "l-siglo21", "xy": [31.6, 7.2],
   "titulo": "Butler en São Paulo",
   "texto": "São Paulo, noviembre de 2017. Judith Butler llega para un congreso sobre democracia. En la calle, un grupo de manifestantes quema un muñeco con su cara, vestido de bruja, contra lo que llaman «ideología de género». Después, en un artículo, Butler responde que de lo que se trata es de que todas las personas puedan vivir sin violencia.",
   "pregunta": "¿Qué te dice la escena?",
   "opciones": [
    { "t": "Que las normas sobre el cuerpo son políticas: se pueden discutir y cambiar.", "to": "FV", "marca": "m-cuerpo-politico" },
    { "t": "Que el tema da miedo porque toca lo más íntimo: hay que hablarlo con razones y con respeto.", "to": "FW", "marca": "m-hablar-respeto" },
    { "t": "Que hay que proteger los cuerpos de todos, empezando por los más vulnerables.", "to": "28", "marca": "m-vulnerables" }
   ],
   "temas": ["hf-siglo21"], "autores": [{ "id": "butler" }]
  },
  "101": {
   "tipo": "contradiccion", "red": 4, "linea": "l-contradiccion", "xy": [29.2, 10.8],
   "titulo": "Contradicción: la libertad conectada",
   "texto": "Dices que la tecnología es neutra o que te hace libre, pero también que no puedes soltar el móvil o que las plataformas te enganchan. Si una herramienta decide por ti cuánto tiempo la usas, ¿sigue siendo solo una herramienta?",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Reconozco que no es neutra: también me cambia a mí.", "to": "26" },
    { "t": "Desconecto un tiempo para comprobarlo.", "to": "FAB" },
    { "t": "Mantengo que es solo una herramienta, y confío en que también resolverá lo demás.", "to": "28" }
   ],
   "choque": ["m-tecnologia-neutra", "m-tecno-libera", "m-autoexplotacion", "m-plataformas", "m-cansancio"],
   "temas": ["hf-siglo21"], "autores": [{ "id": "han" }]
  },
  "102": {
   "tipo": "contradiccion", "red": 4, "linea": "l-contradiccion", "xy": [30.8, 4.8],
   "titulo": "Contradicción: crecer sin límites",
   "texto": "Quieres cuidar el planeta y, a la vez, que la economía crezca sin fin o que la técnica lo arregle todo sin cambiar nada de nuestra vida. Pero en un planeta con recursos limitados no se puede crecer para siempre.",
   "pregunta": "¿Cómo sales de aquí?",
   "opciones": [
    { "t": "Acepto que hay límites: hay que dejar de crecer en lo que sobra.", "to": "FZ" },
    { "t": "Mantengo que el mercado y la técnica lo resolverán.", "to": "FO" },
    { "t": "Me pregunto qué necesita de verdad la gente para vivir bien.", "to": "29" }
   ],
   "choque": ["m-tecno-solucion", "m-tecnologia-neutra", "m-consumidores", "m-vinculos", "m-vulnerables", "m-generaciones", "m-cuidar-vida"],
   "temas": ["hf-siglo21"], "autores": [{ "id": "herrero" }]
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
  },
  "R": {
   "xy": [19.2, 0.9], "titulo": "Autonomía",
   "texto": "Crees que la moral no depende de las consecuencias ni de lo que te apetece, sino de actuar según una regla que pudiera valer para todos, y de tratar a las personas siempre como fines y nunca solo como medios. Es el imperativo categórico de Kant.",
   "abierto": "¿Y si cumplir una regla universal hace daño en un caso concreto, como no mentir a quien busca a alguien para hacerle daño?",
   "reflexion": "¿Debemos cumplir nuestro deber aunque las consecuencias sean malas?",
   "autores": [{ "id": "kant" }], "temas": ["hf-kant", "hf-etica-deber"]
  },
  "S": {
   "xy": [20.2, 0.9], "titulo": "Emancipación",
   "texto": "Para ti la filosofía no basta con entender el mundo: hay que cambiarlo. La desigualdad no es natural, sino fruto de cómo se organiza el trabajo y la propiedad, y puede superarse. Es la línea de Marx y, en el siglo XX, de la Escuela de Fráncfort.",
   "abierto": "¿Cómo se transforma la sociedad sin que la transformación acabe en una nueva opresión?",
   "reflexion": "¿Es posible una sociedad sin desigualdades?",
   "autores": [{ "id": "marx" }, { "id": "adorno" }], "temas": ["hf-capitalismo", "hf-sospecha"]
  },
  "T": {
   "xy": [21.2, 0.9], "titulo": "Crear valores",
   "texto": "Sin un fundamento absoluto, no te hundes: decides crear tus propios valores y decir sí a la vida entera, también al dolor. Es el reto que Nietzsche planteó con la figura del superhombre.",
   "abierto": "Si cada uno crea sus valores, ¿con qué criterio podemos criticar los valores de otro?",
   "reflexion": "¿Existen valores universales o los crea cada persona?",
   "autores": [{ "id": "nietzsche" }], "temas": ["hf-posmodernidad", "hf-sospecha"]
  },
  "U": {
   "xy": [22.2, 0.9], "titulo": "Existencialista",
   "texto": "Para ti la existencia precede a la esencia: no naces con una naturaleza fija, te haces con lo que eliges, y eres responsable de ello. Es la línea de Sartre, Camus y Beauvoir.",
   "abierto": "Si somos totalmente libres, ¿cómo pesan la clase social, la educación o el cuerpo en lo que llegamos a ser?",
   "reflexion": "¿Somos lo que hacemos?",
   "autores": [{ "id": "sartre" }, { "id": "camus" }, { "id": "beauvoir" }], "temas": ["hf-existencialismo"]
  },
  "V": {
   "xy": [23.2, 0.9], "titulo": "Feminista",
   "texto": "Crees que la desigualdad entre mujeres y hombres no es natural, sino construida, y que los derechos o son de todas las personas o no son derechos. Es la línea que va de Olympe de Gouges y Mary Wollstonecraft a Simone de Beauvoir.",
   "abierto": "¿Basta con la igualdad en las leyes, o hay que cambiar también la vida cotidiana?",
   "reflexion": "¿Es el género una construcción social?",
   "autores": [{ "id": "beauvoir" }, { "id": "wollstonecraft" }, { "id": "gouges" }], "temas": ["hf-beauvoir"]
  },
  "W": {
   "xy": [24.2, 0.9], "titulo": "Razón dialógica",
   "texto": "Sin un fundamento absoluto, confías en que el diálogo entre todos, sin coacciones y dando razones, puede llevarnos a normas comunes. Es la propuesta de Habermas frente a quienes dicen que todo vale.",
   "abierto": "¿Qué pasa con quienes no pueden participar en el diálogo en igualdad de condiciones?",
   "reflexion": "¿Puede el diálogo resolver los desacuerdos morales?",
   "autores": [{ "id": "habermas" }, { "id": "wittgenstein" }], "temas": ["hf-posmodernidad", "hf-analitica"]
  },
  "X": {
   "xy": [25.2, 0.9], "titulo": "Justicia como equidad",
   "texto": "Crees que una sociedad justa es la que elegiríamos si no supiéramos qué lugar nos iba a tocar en ella: libertades iguales para todos y desigualdades solo si benefician a quienes están peor. Es el velo de ignorancia de Rawls.",
   "abierto": "¿Cuánta desigualdad es aceptable para que una sociedad siga siendo justa?",
   "reflexion": "¿Qué hace justa a una sociedad?",
   "autores": [{ "id": "rawls" }], "temas": ["hf-capitalismo"]
  },
  "Y": {
   "xy": [26.2, 0.9], "titulo": "Razón vital y poética",
   "texto": "Para ti pensar es pensar desde la propia vida y su circunstancia, con una razón que no desprecie los sentimientos ni lo que no sabemos decir. Es la filosofía de Ortega y Gasset, de María Zambrano y, a su manera, de Unamuno.",
   "abierto": "Si la razón se abre a los sentimientos, ¿cómo evitamos que acabe dándole la razón a lo que simplemente nos apetece?",
   "reflexion": "¿Puede la razón comprender la vida?",
   "autores": [{ "id": "ortega" }, { "id": "zambrano" }, { "id": "unamuno" }], "temas": ["hf-existencialismo"]
  },
  "Z": {
   "xy": [27.2, 0.9], "titulo": "Poner la vida en el centro",
   "texto": "Para ti la economía debe estar al servicio de la vida, y no al revés: dependemos de la naturaleza y de los cuidados de otras personas, y un sistema que olvida las dos cosas está en guerra contra la vida. Es el ecofeminismo de Yayo Herrero.",
   "abierto": "¿Cómo se cambia un sistema entero sin dejar a nadie atrás?",
   "reflexion": "¿Tenemos deberes con la naturaleza y con las generaciones futuras?",
   "autores": [{ "id": "herrero" }], "temas": ["hf-siglo21"]
  },
  "AA": {
   "xy": [28.2, 0.9], "titulo": "Capacidades",
   "texto": "Crees que una sociedad es justa si garantiza a todas las personas las capacidades para una vida digna: salud, educación, afecto, razón práctica, juego, participación. La riqueza de un país no basta para saberlo. Es el enfoque de Martha Nussbaum.",
   "abierto": "¿Quién decide qué capacidades son básicas para todas las culturas?",
   "reflexion": "¿Qué necesita una persona para vivir una vida digna?",
   "autores": [{ "id": "nussbaum" }], "temas": ["hf-siglo21"]
  },
  "AB": {
   "xy": [29.2, 0.9], "titulo": "Tiempo lento",
   "texto": "Te das cuenta de que nadie te explota tanto como tú mismo cuando crees que siempre puedes rendir más. Eliges recuperar el tiempo lento, el silencio y el contacto con lo real. Es la crítica de Byung-Chul Han a la sociedad del cansancio.",
   "abierto": "¿Se puede desconectar sin quedarse fuera del mundo?",
   "reflexion": "¿Nos hace más libres la tecnología?",
   "autores": [{ "id": "han" }], "temas": ["hf-siglo21"]
  }
 }
};
