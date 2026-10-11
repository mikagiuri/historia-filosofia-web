"use strict";
/* ===== Rincón de lógica · «Lógica moderna»: Formalizar y Reglas de inferencia (12-10-2026) =====
   Petición del profesor: el Rincón tenía lógica proposicional (tablas de verdad, puertas) pero sin pestaña de lógica
   moderna. Las pestañas de arriba pasan a ser «Lógica clásica» (silogismos, cuadrado, conjuntos) y «Lógica moderna»
   (tablas de verdad, formalizar, reglas de inferencia, cuantificadores, puertas lógicas); ver logRender en logicaview.js.
   · Cuantificadores: A, E, I, O en lógica de predicados, un «mundo pequeño» para evaluarlas (sujeto vacío incluido) y
     un ejercicio de elegir la fórmula de cada frase.
   · Formalizar: frases en castellano que el alumno pasa a fórmula con el teclado de conectivas; se corrige por
     EQUIVALENCIA (misma tabla de verdad), así que vale cualquier forma correcta, y si no lo es se enseña la fila en
     que difieren. Cada frase trae su pista y su caso trampa («solo si», «a menos que», «o… o…», «ni… ni…»).
   · Reglas de inferencia: las reglas válidas y las falacias formales que se les parecen, con su forma, un ejemplo y
     un botón para comprobarlas en la tabla de verdad; y un ejercicio «¿regla o trampa?» con argumentos en castellano.
   Usa las funciones de logicaview.js (logParse, logVars, logFilas, logEval, logStr, logEsc, logTeclado, LOG).
   Textos en LOGM_TXT y en los datos de abajo: cadenas enteras, que traduce el diccionario de interfaz (ui/<lang>.json). */
const LOGM_TXT = {
  tabClasica: "Lógica clásica", tabModerna: "Lógica moderna", tabFormalizar: "Formalizar", tabInferencia: "Reglas de inferencia",
  introFormalizar: "Formalizar es traducir una frase a símbolos: cada frase simple es una letra (p, q, r…) y las palabras que las unen («no», «y», «o», «si… entonces») son conectivas. Escribe la fórmula con el teclado y pulsa «Comprobar»: vale cualquier fórmula equivalente, porque se compara su tabla de verdad con la de la solución.",
  introInferencia: "Una regla de inferencia es una forma de razonar que nunca falla: si las premisas son verdaderas, la conclusión también lo es. Algunas formas se parecen mucho a ellas, pero no son válidas: son las falacias formales. Aquí tienes las dos cosas, con un ejemplo de cada una, y un ejercicio para distinguirlas.",
  guiaTitF: "Cómo se traduce cada palabra",
  guiaF: "<ul><li><b>¬</b> (no): «no», «no es cierto que», «es falso que».</li><li><b>∧</b> (y): «y», «pero», «aunque», «sin embargo», «además». Todas dicen lo mismo en lógica: que las dos cosas son verdad.</li><li><b>∨</b> (o): «o». En lógica es inclusiva (una, otra o las dos); si la frase excluye las dos a la vez («o… o…, pero no las dos»), hay que añadirlo.</li><li><b>→</b> (si…, entonces): «si p, q», «q si p», «cuando p, q», «siempre que p, q», «basta con p para q» (p es condición <i>suficiente</i>).</li><li><b>Caso trampa</b>: «p solo si q» y «para p es necesario q» se escriben <b>p → q</b>: q es condición <i>necesaria</i>, no suficiente.</li><li><b>↔</b> (si y solo si): «p si y solo si q», «p cuando y solo cuando q».</li><li><b>Otras trampas</b>: «ni p ni q» es ¬p ∧ ¬q; «p a menos que q» es ¬q → p (o, lo que es lo mismo, p ∨ q).</li><li><b>«Luego» no es una conectiva</b>: «pienso, luego existo» no afirma «si pienso, existo», sino que <i>saca</i> una conclusión de una premisa. Eso es un argumento: se estudia en «Reglas de inferencia».</li></ul>",
  diccionario: "Diccionario:", tuFormula: "Tu fórmula", comprobar: "Comprobar", solucion: "Ver la solución", pista: "Pista",
  bien: "¡Correcto! Tu fórmula es equivalente a la solución: {s}", mal: "No es equivalente. Por ejemplo, cuando {fila}, tu fórmula da {a} y la frase dice {b}.",
  verdadero: "verdadero", falso: "falso", vacia: "Escribe una fórmula.", sol: "Solución: {s}", ejercicio: "Frase {n} de {m}",
  validas: "Reglas válidas", falacias: "Falacias formales (no son válidas)", forma: "Forma", ejemplo: "Ejemplo", porQue: "Por qué falla",
  verTabla: "Comprobarla en la tabla de verdad", ejTit: "¿Regla o trampa?", ejAyuda: "Lee cada argumento y elige qué forma tiene. No hay nota: lo que cuenta es entender por qué.",
  acierto: "¡Bien! Es {r}.", fallo: "No: es {r}.", formaArg: "Su forma: {f}"
};
const logmT = (k, v) => String(LOGM_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

/* ---------- Formalizar ---------- */
const LOGM_FZ = [
  { f: "Si llueve, el suelo se moja.", d: [["p", "llueve"], ["q", "el suelo se moja"]], s: "p → q", pista: "«Si p, q»: lo que va detrás de «si» es el antecedente." },
  { f: "Llueve y no llevo paraguas.", d: [["p", "llueve"], ["q", "llevo paraguas"]], s: "p ∧ ¬q", pista: "La letra es la frase afirmativa; el «no» se escribe con ¬." },
  { f: "Si llueve y no llevo paraguas, me mojo.", d: [["p", "llueve"], ["q", "llevo paraguas"], ["r", "me mojo"]], s: "(p ∧ ¬q) → r", pista: "Primero el antecedente completo, entre paréntesis; luego la flecha." },
  { f: "No estudio ni trabajo.", d: [["p", "estudio"], ["q", "trabajo"]], s: "¬p ∧ ¬q", pista: "«Ni… ni…» niega las dos cosas a la vez." },
  { f: "Iré a la excursión solo si no llueve.", d: [["p", "voy a la excursión"], ["q", "llueve"]], s: "p → ¬q", pista: "Caso trampa: «solo si» introduce la condición necesaria, que va detrás de la flecha." },
  { f: "Para votar es necesario ser mayor de edad.", d: [["p", "votas"], ["q", "eres mayor de edad"]], s: "p → q", pista: "Si votas, es que eres mayor de edad; pero ser mayor de edad no basta para votar." },
  { f: "Basta con pulsar el botón para que se encienda la luz.", d: [["p", "pulsas el botón"], ["q", "se enciende la luz"]], s: "p → q", pista: "«Basta con p» dice que p es condición suficiente: va delante de la flecha." },
  { f: "Saldremos a menos que llueva.", d: [["p", "salimos"], ["q", "llueve"]], s: "¬q → p", pista: "Caso trampa: «p a menos que q» quiere decir «si no q, p»." },
  { f: "Te llamaré si y solo si llegas tarde.", d: [["p", "te llamo"], ["q", "llegas tarde"]], s: "p ↔ q", pista: "«Si y solo si» une dos condicionales: p → q y q → p." },
  { f: "O estudias o trabajas, pero no las dos cosas.", d: [["p", "estudias"], ["q", "trabajas"]], s: "(p ∨ q) ∧ ¬(p ∧ q)", pista: "Caso trampa: la «o» lógica es inclusiva; aquí hay que añadir que no se dan las dos." },
  { f: "No es cierto que, si llueve, se suspenda el partido.", d: [["p", "llueve"], ["q", "se suspende el partido"]], s: "¬(p → q)", pista: "El «no es cierto que» niega todo el condicional: va delante del paréntesis." },
  { f: "Epicuro: «Cuando nosotros estamos, la muerte no está; y cuando la muerte está, nosotros ya no estamos».", d: [["p", "nosotros estamos"], ["q", "la muerte está"]], s: "(p → ¬q) ∧ (q → ¬p)", pista: "Son dos condicionales unidos por «y». (Carta a Meneceo, 125.)" }
];
function logmEquiv(a, b){
  const vars = logVars([a, b]);
  return logFilas(vars).find(v => logEval(a, v) !== logEval(b, v)) || null;
}
function logmFzRes(i){
  const z = LOGM_FZ[i], st = LOG.fz[i] || {};
  if (st.sol) return '<p class="lg-nota">' + logmT("sol", { s: logEsc(z.s) }) + "</p>";
  if (!st.hecho) return "";
  if (!String(st.f || "").trim()) return '<p class="lg-error">' + logmT("vacia") + "</p>";
  try {
    const a = logParse(st.f), b = logParse(z.s), dif = logmEquiv(a, b);
    if (!dif) return '<p class="lg-veredicto lg-tautologia">' + logmT("bien", { s: logEsc(z.s) }) + "</p>";
    const fila = Object.keys(dif).map(x => x + " = " + (dif[x] ? "V" : "F")).join(", ");
    return '<p class="lg-veredicto lg-contradiccion">' + logmT("mal", { fila, a: logmT(logEval(a, dif) ? "verdadero" : "falso"), b: logmT(logEval(b, dif) ? "verdadero" : "falso") }) +
      '</p><p class="lg-nota"><b>' + logmT("pista") + ":</b> " + logEsc(z.pista) + "</p>";
  } catch (err){ return '<p class="lg-error">' + logEsc(err.message) + "</p>"; }
}
function logRenderFormalizar(){
  const N = LOGM_FZ.length;
  return '<details class="lg-guia"><summary>' + logmT("guiaTitF") + "</summary>" + logmT("guiaF") + "</details>" +
    LOGM_FZ.map((z, i) => {
      const st = LOG.fz[i] || {};
      return '<div class="lg-panel lg-fz" id="lg-fz-' + i + '"><p class="lg-nota">' + logmT("ejercicio", { n: i + 1, m: N }) + '</p><p class="lg-fz-frase">' + logEsc(z.f) + "</p>" +
        '<p class="lg-nota">' + logmT("diccionario") + " " + z.d.map(([l, t]) => "<b>" + l + "</b> = " + logEsc(t)).join(" · ") + "</p>" +
        '<label class="lg-label" for="lg-fzi-' + i + '">' + logmT("tuFormula") + '</label><div class="lg-fila"><input id="lg-fzi-' + i + '" class="lg-input" data-fz="' + i + '" value="' + logEsc(st.f || "") + '" autocomplete="off" spellcheck="false">' +
        '<button type="button" class="btn" data-fzok="' + i + '">' + logmT("comprobar") + '</button></div>' + logTeclado("lg-fzi-" + i) +
        '<p><button type="button" class="btn ghost" data-fzsol="' + i + '">' + logmT("solucion") + '</button></p><div id="lg-fzr-' + i + '">' + logmFzRes(i) + "</div></div>";
    }).join("");
}

/* ---------- Reglas de inferencia ---------- */
const LOGM_REGLAS = [
  { k: "mp", n: "Modus ponens", p: "p → q; p", c: "q", ej: "Si llueve, el suelo se moja. Llueve. Luego el suelo se moja." },
  { k: "mt", n: "Modus tollens", p: "p → q; ¬q", c: "¬p", ej: "Si llueve, el suelo se moja. El suelo no está mojado. Luego no llueve." },
  { k: "sh", n: "Silogismo hipotético", p: "p → q; q → r", c: "p → r", ej: "Si estudio, apruebo; si apruebo, voy de viaje. Luego, si estudio, voy de viaje." },
  { k: "sd", n: "Silogismo disyuntivo", p: "p ∨ q; ¬p", c: "q", ej: "O está en casa o está en clase. No está en casa. Luego está en clase." },
  { k: "dc", n: "Dilema constructivo", p: "p → r; q → r; p ∨ q", c: "r", ej: "Si vas en tren, llegas tarde; si vas en bus, también. Irás en tren o en bus. Luego llegarás tarde." }
];
const LOGM_FALACIAS = [
  { k: "ac", n: "Afirmar el consecuente", p: "p → q; q", c: "p", ej: "Si llueve, el suelo se moja. El suelo está mojado. Luego ha llovido.", por: "El suelo puede estar mojado por otra causa: alguien lo ha regado. La condición suficiente no es la única posible." },
  { k: "na", n: "Negar el antecedente", p: "p → q; ¬p", c: "¬q", ej: "Si estudias, apruebas. No has estudiado. Luego no aprobarás.", por: "La regla no dice qué pasa si no estudias: quizá apruebes por otra razón." },
  { k: "ad", n: "Afirmar un disyunto", p: "p ∨ q; p", c: "¬q", ej: "O vamos al cine o vamos a cenar. Vamos al cine. Luego no vamos a cenar.", por: "La «o» lógica es inclusiva: se pueden hacer las dos cosas. Solo sería válido si la frase excluyera las dos a la vez." },
  { k: "nc", n: "Negar un conyunto", p: "¬(p ∧ q)", c: "¬p", ej: "No es verdad que esté en casa y en clase a la vez. Luego no está en casa.", por: "Basta con que no se cumpla una de las dos: puede estar en casa y no en clase. De ¬(p ∧ q) solo se sigue ¬p ∨ ¬q (De Morgan)." },
  { k: "cc", n: "Convertir el condicional", p: "p → q", c: "q → p", ej: "Si es un perro, es un mamífero. Luego, si es un mamífero, es un perro.", por: "Que p baste para q no quiere decir que q baste para p: un gato también es un mamífero. Es el mismo error que confundir «si» con «solo si»." }
];
const LOGM_EJ = [
  { t: "Si Sócrates es un ser humano, es mortal. Sócrates es un ser humano. Luego Sócrates es mortal.", r: "mp" },
  { t: "Si hay fuego, hay oxígeno. En la Luna no hay oxígeno. Luego en la Luna no hay fuego.", r: "mt" },
  { t: "Si un gobierno viola los derechos de los ciudadanos, el pueblo tiene derecho a resistir. El pueblo resiste. Luego el gobierno ha violado sus derechos.", r: "ac" },
  { t: "O el culpable es el mayordomo o es la cocinera. El mayordomo tiene coartada y no es el culpable. Luego es la cocinera.", r: "sd" },
  { t: "Si te esfuerzas, mejoras; si mejoras, apruebas. Luego, si te esfuerzas, apruebas.", r: "sh" },
  { t: "Si llueve, el partido se suspende. No llueve. Luego el partido no se suspende.", r: "na" },
  { t: "Si dudo, pienso. Dudo. Luego pienso.", r: "mp" },
  { t: "Ana estudia Filosofía o Historia. Estudia Filosofía. Luego no estudia Historia.", r: "ad" },
  { t: "Si el alma fuera material, se descompondría como el cuerpo. El alma no se descompone. Luego el alma no es material.", r: "mt" },
  { t: "Si la teoría es buena, sus predicciones se cumplen. Sus predicciones se cumplen. Luego la teoría es buena.", r: "ac" },
  { t: "Si llueve, hay nubes. Luego, si hay nubes, llueve.", r: "cc" },
  { t: "No es cierto que el acusado sea culpable y haya actuado solo. Luego el acusado no es culpable.", r: "nc" }
];
function logmTodas(){ return LOGM_REGLAS.concat(LOGM_FALACIAS); }
function logmForma(x){ return x.p.split(";").map(s => s.trim()).join(" · ") + " ⊢ " + x.c; }
function logmCarta(x, fal){
  return '<div class="lg-regla' + (fal ? " lg-falaz" : "") + '"><h3>' + logEsc(x.n) + '</h3><p class="lg-forma"><b>' + logmT("forma") + ":</b> " + logEsc(logmForma(x)) + "</p>" +
    '<p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p>" + (fal ? '<p><b>' + logmT("porQue") + ":</b> " + logEsc(x.por) + "</p>" : "") +
    '<p><button type="button" class="btn ghost" data-infp="' + logEsc(x.p) + '" data-infc="' + logEsc(x.c) + '">' + logmT("verTabla") + " →</button></p></div>";
}
function logRenderInferencia(){
  const T = logmTodas();
  return '<div class="lg-panel"><h2>' + logmT("validas") + '</h2><div class="lg-reglas">' + LOGM_REGLAS.map(x => logmCarta(x, false)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<p><button type="button" class="btn ghost" data-lgtab="falacias">' + logmT("falVer") + "</button></p>" +
    '<div class="lg-panel"><h2>' + logmT("ejTit") + '</h2><p class="lg-nota">' + logmT("ejAyuda") + "</p>" +
    LOGM_EJ.map((e, i) => {
      const r = LOG.inf[i], bien = T.find(x => x.k === e.r);
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.t) + '</p><div class="lg-teclas">' + T.map(x => '<button type="button" class="chip' + (r === x.k ? (x.k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + '" data-infej="' + i + '" data-infr="' + x.k + '"' + (r ? " disabled" : "") + ">" + logEsc(x.n) + "</button>").join("") + "</div>" +
        (r ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "acierto" : "fallo", { r: logEsc(bien.n) }) + " " + logmT("formaArg", { f: logEsc(logmForma(bien)) }) + "</p>" : "") + "</div>";
    }).join("") + "</div>";
}

/* ---------- Cuantificadores (lógica de predicados) ---------- */
/* Las cuatro proposiciones de Aristóteles en lógica de predicados, un «mundo pequeño» donde se evalúan (con el caso
   del sujeto vacío: el compromiso existencial del tema 4) y un ejercicio de elegir la fórmula de cada frase. */
const LOGM_CQ_TXT = {
  tabCuantificadores: "Cuantificadores",
  introCuantificadores: "La lógica de las tablas de verdad no puede analizar «Todos los humanos son mortales; Sócrates es humano; luego Sócrates es mortal», porque no ve lo que hay dentro de cada frase. Frege (1879) añadió los predicados (Hx = «x es humano») y los cuantificadores: ∀x, «para todo x», y ∃x, «existe al menos un x». Con ellos se escriben las cuatro proposiciones de Aristóteles y muchas cosas más.",
  cqCuatro: "Las cuatro proposiciones de Aristóteles", cqProp: "Proposición", cqFormula: "Fórmula", cqLee: "Se lee",
  cqTrampa: "Caso trampa: «Todo S es P» no es ∀x (Sx ∧ Px), que diría que todo es S y P a la vez; y «Algún S es P» no es ∃x (Sx → Px), que es verdad en cuanto haya algo que no sea S.",
  cqNeg: "Negar un cuantificador: ¬∀x Px equivale a ∃x ¬Px («no todos» = «alguno no»), y ¬∃x Px equivale a ∀x ¬Px («ninguno» = «todos no»). Por eso A y O son contradictorias, y también E e I.",
  cqMundo: "Un mundo pequeño", cqMundoAyuda: "Cinco individuos (a, b, c, d, e). Marca cuáles son S y cuáles son P y mira qué proposiciones resultan verdaderas.",
  cqInd: "Individuo", cqVacio: "Prueba a dejar S vacío: entonces «Todo S es P» y «Ningún S es P» son verdaderas a la vez, y «Algún S es P» es falsa. En la lógica moderna, la proposición universal no da por hecho que haya S: es el compromiso existencial del tema 4.",
  cqOrdenTit: "Una falacia de los cuantificadores: cambiar el orden",
  cqOrden: "«Todo el mundo tiene una madre» es ∀x ∃y Myx: para cada persona x hay alguien y que es su madre. «Hay una madre de todos» es ∃y ∀x Myx: existe un y que es madre de todos los x. Cambiar el orden de ∀ y ∃ cambia lo que se dice: de la primera no se sigue la segunda.",
  cqOrdenMadre: "su madre", cqOrdenContra: "Contraejemplo: en este mundo cada uno tiene su madre, así que ∀x ∃y Myx es verdadera; pero ninguna es madre de los tres, así que ∃y ∀x Myx es falsa. Premisa verdadera y conclusión falsa: la inferencia no es válida. (Al revés sí vale: si hay una madre de todos, cada uno tiene una madre).",
  cqOrdenFilo: "En filosofía: se discute si Aristóteles da este salto al comienzo de la «Ética a Nicómaco» (I 2), porque de que toda acción busque algún fin no se sigue que haya un único fin que buscan todas. Y algunos críticos de los argumentos cosmológicos lo ven en el paso de «todo tiene una causa» a «hay una causa de todo».",
  cqTesti: "Lo muestra: {x}", cqContra: "Falla en: {x}", cqNadie: "no hay ninguno", cqSinS: "verdadera porque no hay ningún S",
  cqPresets: "Mundos de ejemplo:", cqP1: "Todos los S son P", cqP2: "Ningún S es P", cqP3: "Algunos sí y otros no", cqP4: "No hay ningún S",
  cqEjTit: "¿Qué fórmula es?", cqEjAyuda: "Elige la fórmula que dice lo mismo que la frase. La letra mayúscula es el predicado y la minúscula, un individuo concreto.",
  cqBien: "¡Correcto!", cqMal: "No.", cqEjemplo: "Ejemplo resuelto: el silogismo de Sócrates",
  cqEjemploTxt: "Todos los humanos son mortales: ∀x (Hx → Mx). Sócrates es humano: Hs. Luego Sócrates es mortal: Ms. De la primera premisa se sigue Hs → Ms (lo que vale para todo x vale para Sócrates: «instanciación universal»), y de Hs → Ms y Hs se sigue Ms por modus ponens."
};
const LOGM_CQ4 = [
  ["A", "Todo S es P", "∀x (Sx → Px)", "para todo x, si x es S, entonces x es P"],
  ["E", "Ningún S es P", "∀x (Sx → ¬Px)", "para todo x, si x es S, entonces x no es P (o bien: ¬∃x (Sx ∧ Px))"],
  ["I", "Algún S es P", "∃x (Sx ∧ Px)", "existe al menos un x que es S y es P"],
  ["O", "Algún S no es P", "∃x (Sx ∧ ¬Px)", "existe al menos un x que es S y no es P"]
];
const LOGM_CQ_IND = ["a", "b", "c", "d", "e"];
const LOGM_CQ_PRE = {
  p1: [[1, 1], [1, 1], [0, 1], [0, 0], [1, 1]], p2: [[1, 0], [1, 0], [0, 1], [0, 1], [0, 0]],
  p3: [[1, 1], [1, 0], [0, 1], [1, 1], [0, 0]], p4: [[0, 1], [0, 0], [0, 1], [0, 0], [0, 1]]
};
const LOGM_CQ_EJ = [
  { f: "Todos los filósofos son curiosos.", d: "F = filósofo, C = curioso", o: ["∀x (Fx → Cx)", "∀x (Fx ∧ Cx)", "∃x (Fx ∧ Cx)", "∀x (Cx → Fx)"], r: 0, por: "Universal afirmativa (A). Con ∧ diría que todo el mundo es filósofo y curioso; con la flecha al revés, que todo curioso es filósofo." },
  { f: "Algún sofista cobraba por enseñar.", d: "S = sofista, C = cobraba por enseñar", o: ["∃x (Sx → Cx)", "∃x (Sx ∧ Cx)", "∀x (Sx → Cx)"], r: 1, por: "Particular afirmativa (I): existe alguien que es sofista y cobraba. Con la flecha bastaría con que existiera algo que no fuera sofista." },
  { f: "Ningún dios es mortal.", d: "D = dios, M = mortal", o: ["¬∀x (Dx → Mx)", "∀x (¬Dx → Mx)", "∀x (Dx → ¬Mx)"], r: 2, por: "Universal negativa (E). También vale ¬∃x (Dx ∧ Mx): «no existe nada que sea dios y mortal»." },
  { f: "No todos los griegos eran filósofos.", d: "G = griego, F = filósofo", o: ["∀x (Gx → ¬Fx)", "¬∀x (Gx → Fx)", "¬∃x (Gx ∧ Fx)"], r: 1, por: "Caso trampa: «no todos» no es «ninguno». Equivale a ∃x (Gx ∧ ¬Fx): algún griego no era filósofo (O)." },
  { f: "Solo los ciudadanos votaban en la asamblea.", d: "V = votaba en la asamblea, C = ciudadano", o: ["∀x (Cx → Vx)", "∀x (Vx → Cx)", "∃x (Vx ∧ Cx)"], r: 1, por: "Caso trampa: «solo los C» pone la condición necesaria detrás de la flecha: todo el que votaba era ciudadano (no todo ciudadano votaba)." },
  { f: "Hay algo que no ha sido causado por otra cosa.", d: "C = causado por otra cosa", o: ["¬∃x Cx", "∀x ¬Cx", "∃x ¬Cx"], r: 2, por: "Existe al menos un x que no es causado: es la idea del primer motor de Aristóteles o de la primera causa de Tomás de Aquino." },
  { f: "Sócrates es mortal.", d: "M = mortal, s = Sócrates", o: ["∃x Mx", "Ms", "∀x Mx"], r: 1, por: "Un individuo concreto se escribe con una letra minúscula (una constante): no hace falta cuantificador." },
  { f: "Todo el que piensa existe.", d: "P = piensa, E = existe", o: ["∀x (Px → Ex)", "∀x (Ex → Px)", "∃x (Px ∧ Ex)"], r: 0, por: "Universal afirmativa (A). Para sacar «yo existo» haría falta además la premisa «yo pienso» (Pi) y la instanciación universal, como con Sócrates." },
  { f: "Todo el mundo tiene una madre.", d: "M = «y es madre de x»", o: ["∃y ∀x Myx", "∀x ∃y Myx", "∀x ∀y Myx"], r: 1, por: "Para cada persona hay alguna madre (puede ser distinta en cada caso). ∃y ∀x Myx diría que hay una sola madre de todos: es el cambio de orden de los cuantificadores." },
  { f: "Hay alguien a quien todos admiran.", d: "A = «x admira a y»", o: ["∀x ∃y Axy", "∃y ∀x Axy", "∃x ∃y Axy"], r: 1, por: "Existe un y tal que todos lo admiran. ∀x ∃y Axy diría solo que cada uno admira a alguien, quizá a personas distintas." }
];
function logmCqEval(m){
  const ix = i => LOGM_CQ_IND[i], S = m.map(r => !!r[0]), P = m.map(r => !!r[1]), all = [0, 1, 2, 3, 4];
  const res = {
    A: { v: all.every(i => !S[i] || P[i]), malos: all.filter(i => S[i] && !P[i]) },
    E: { v: all.every(i => !S[i] || !P[i]), malos: all.filter(i => S[i] && P[i]) },
    I: { v: all.some(i => S[i] && P[i]), buenos: all.filter(i => S[i] && P[i]) },
    O: { v: all.some(i => S[i] && !P[i]), buenos: all.filter(i => S[i] && !P[i]) }
  };
  Object.values(res).forEach(r => { r.txt = r.malos ? (r.malos.length ? logmT("cqContra", { x: r.malos.map(ix).join(", ") }) : (S.some(Boolean) ? "" : logmT("cqSinS"))) : (r.buenos.length ? logmT("cqTesti", { x: r.buenos.map(ix).join(", ") }) : logmT("cqNadie")); });
  return res;
}
function logmCqMundo(){
  const m = LOG.cq.m, res = logmCqEval(m);
  return '<div class="tablewrap"><table class="lg-tabla lg-cq-mundo"><thead><tr><th>' + logmT("cqInd") + "</th>" + LOGM_CQ_IND.map(x => "<th>" + x + "</th>").join("") + "</tr></thead><tbody>" +
    ["S", "P"].map((k, j) => "<tr><th>" + k + "</th>" + m.map((r, i) => '<td><button type="button" class="chip lg-cq-cel' + (r[j] ? " on" : "") + '" data-cqi="' + i + '" data-cqj="' + j + '" aria-pressed="' + !!r[j] + '">' + (r[j] ? "✓" : "·") + "</button></td>").join("") + "</tr>").join("") +
    '</tbody></table></div><div class="tablewrap"><table class="lg-tabla"><tbody>' +
    LOGM_CQ4.map(([t, , f]) => '<tr><th>' + t + "</th><td>" + logEsc(f) + "</td>" + logVF(res[t].v) + '<td class="lg-cq-x">' + logEsc(res[t].txt) + "</td></tr>").join("") + "</tbody></table></div>";
}
function logRenderCuantificadores(){
  const ej = LOG.cq.ej;
  return '<div class="lg-panel"><h2>' + logmT("cqCuatro") + '</h2><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("cqProp") + "</th><th>" + logmT("cqFormula") + "</th><th>" + logmT("cqLee") + "</th></tr></thead><tbody>" +
    LOGM_CQ4.map(([t, p, f, l]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + '</td><td class="lg-forma">' + logEsc(f) + "</td><td>" + logEsc(l) + "</td></tr>").join("") + "</tbody></table></div>" +
    '<p class="lg-nota">' + logmT("cqTrampa") + '</p><p class="lg-nota">' + logmT("cqNeg") + "</p></div>" +
    '<div class="lg-panel"><h2>' + logmT("cqMundo") + '</h2><p class="lg-nota">' + logmT("cqMundoAyuda") + '</p><p class="lg-nota">' + logmT("cqPresets") + " " +
    [["p1", "cqP1"], ["p2", "cqP2"], ["p3", "cqP3"], ["p4", "cqP4"]].map(([k, l]) => '<button type="button" class="chip" data-cqpre="' + k + '">' + logmT(l) + "</button>").join(" ") + "</p>" +
    '<div id="lg-cq">' + logmCqMundo() + '</div><p class="lg-nota">' + logmT("cqVacio") + "</p></div>" +
    logmGeneralizacion() +
    /* (12-10) la falacia del cambio de orden de los cuantificadores, con su contraejemplo */
    logmCqOrden() +
    '<div class="lg-panel"><h2>' + logmT("cqEjTit") + '</h2><p class="lg-nota">' + logmT("cqEjAyuda") + "</p>" +
    LOGM_CQ_EJ.map((e, i) => {
      const r = ej[i];
      return '<div class="lg-infej"><p>' + (i + 1) + ". " + logEsc(e.f) + ' <span class="lg-nota">(' + logEsc(e.d) + ')</span></p><div class="lg-teclas">' +
        e.o.map((o, k) => '<button type="button" class="chip lg-forma' + (r != null && r === k ? (k === e.r ? " lg-chip-ok" : " lg-chip-no") : "") + (r != null && k === e.r && r !== k ? " lg-chip-ok" : "") + '" data-cqej="' + i + '" data-cqo="' + k + '"' + (r != null ? " disabled" : "") + ">" + logEsc(o) + "</button>").join("") + "</div>" +
        (r != null ? '<p class="lg-veredicto ' + (r === e.r ? "lg-tautologia" : "lg-contradiccion") + '">' + logmT(r === e.r ? "cqBien" : "cqMal") + " " + logEsc(e.por) + "</p>" : "") + "</div>";
    }).join("") + '<details class="lg-guia"><summary>' + logmT("cqEjemplo") + "</summary><p>" + logmT("cqEjemploTxt") + "</p></details></div>";
}

Object.assign(LOGM_TXT, LOGM_CQ_TXT);

/* ---------- (12-10) lo que faltaba: conversión ilícita, generalización apresurada y «lo que la lógica puede y no puede refutar» ---------- */
const LOGM_EXTRA_TXT = {
  convTit: "Conversión: ¿se puede dar la vuelta a una proposición?",
  convIntro: "Convertir es intercambiar el sujeto y el predicado. A veces se conserva la verdad y a veces no: dar la vuelta cuando no se puede es la falacia de la conversión ilícita.",
  convProp: "Proposición", convConv: "Convertida", convVale: "¿Vale?", convEj: "Ejemplo",
  convSi: "Sí", convNo: "No: conversión ilícita", convAcc: "Solo «Algún P es S» (si existen los S)",
  genTit: "De algunos a todos: la generalización apresurada",
  gen: "De ∃x (Sx ∧ Px), «algún S es P», no se sigue ∀x (Sx → Px), «todo S es P». La lógica lo muestra con un contraejemplo: en el mundo «Algunos sí y otros no», la I es verdadera y la A es falsa. Cuántos casos hacen falta para generalizar con prudencia ya no es una cuestión de lógica deductiva, sino de inducción: ningún número de casos lo garantiza.",
  genVer: "Verlo en el mundo pequeño",
  lpTit: "Lo que la lógica puede y no puede refutar",
  lpIntro: "Las falacias formales de arriba se refutan con la forma: basta un contraejemplo. Otras falacias no tienen un fallo de forma, pero formalizarlas ayuda a verlas; y otras no se pueden refutar con lógica, porque el problema está en el contenido.",
  lpAyuda: "La lógica ayuda, pero no basta", lpNo: "La lógica no las refuta", lpQueVe: "Qué muestra la lógica",
  lpNoIntro: "Su forma puede ser válida o ni siquiera ser un argumento: el fallo está en si las premisas son verdaderas o vienen a cuento. Para detectarlas hay que preguntar por el contenido.",
  lpDuelo: "Practícalas en el Duelo de razones →"
};
const LOGM_CONV = [
  ["A", "Todo S es P", "Todo P es S", "no", "Todo perro es mamífero; pero no todo mamífero es perro."],
  ["E", "Ningún S es P", "Ningún P es S", "si", "Ningún pez es mamífero; luego ningún mamífero es pez."],
  ["I", "Algún S es P", "Algún P es S", "si", "Algún filósofo es griego; luego algún griego es filósofo."],
  ["O", "Algún S no es P", "Algún P no es S", "no", "Algún animal no es perro; pero no se sigue que algún perro no sea animal."]
];
const LOGM_AYUDA = [
  { n: "Equívoco", ej: "El fin de una cosa es su perfección. La muerte es el fin de la vida. Luego la muerte es la perfección de la vida.", ve: "Al formalizar, «fin» como «finalidad» y «fin» como «final» reciben letras distintas: aparece un cuarto término y el silogismo deja de ser válido." },
  { n: "Petición de principio", ej: "Este libro dice la verdad, porque lo dice el propio libro.", ve: "El argumento es válido (p ⊢ p), pero la conclusión ya estaba en la premisa: no prueba nada que no se diera por supuesto." },
  { n: "Falso dilema", ej: "O estás conmigo o estás contra mí. No estás conmigo. Luego estás contra mí.", ve: "La forma es un silogismo disyuntivo, que es válido. Lo que falla es la premisa p ∨ q: hay más opciones." },
  { n: "Pendiente resbaladiza", ej: "Si dejamos usar el móvil en el recreo, lo usarán en clase; si lo usan en clase, nadie atenderá; si nadie atiende, todos suspenderán.", ve: "La cadena p → q, q → r, r → s es válida (silogismo hipotético), pero cada condicional es, como mucho, probable: la probabilidad se va perdiendo en cada paso." },
  { n: "Entimema", ej: "Es caro, así que será bueno.", ve: "Para que sea válido falta una premisa: «todo lo caro es bueno». Formalizar la saca a la luz, y entonces se ve que es falsa." }
];
const LOGM_NOFORMAL = [
  ["Ataque a la persona (ad hominem)", "Ataca a quien habla, no lo que dice."],
  ["Falsa autoridad", "Apoya la conclusión en alguien que no es experto en eso."],
  ["Apelar a la mayoría (ad populum)", "Que mucha gente lo crea no lo hace verdadero."],
  ["Apelar a la pena o al miedo", "Busca una emoción en lugar de dar una razón."],
  ["Hombre de paja", "Refuta una versión deformada de lo que el otro dijo."],
  ["Falsa causa", "Que algo pase después no prueba que lo cause."]
];
function logmConversion(){
  return '<div class="lg-panel"><h2>' + logmT("convTit") + '</h2><p class="lg-nota">' + logmT("convIntro") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th></th><th>' + logmT("convProp") + "</th><th>" + logmT("convConv") + "</th><th>" + logmT("convVale") + "</th><th>" + logmT("convEj") + "</th></tr></thead><tbody>" +
    LOGM_CONV.map(([t, p, c, v, e]) => "<tr><th>" + t + "</th><td>" + logEsc(p) + "</td><td>" + logEsc(c) + '</td><td class="lg-' + (v === "si" ? "v" : "f") + '">' + logmT(v === "si" ? "convSi" : "convNo") + (t === "A" ? "<br><small>" + logmT("convAcc") + "</small>" : "") + "</td><td>" + logEsc(e) + "</td></tr>").join("") + "</tbody></table></div></div>";
}
function logmGeneralizacion(){
  return '<div class="lg-panel"><h2>' + logmT("genTit") + "</h2><p>" + logmT("gen") + '</p><p><button type="button" class="btn ghost" data-cqpre="p3">' + logmT("genVer") + "</button></p></div>";
}
function logmPuedeNoPuede(){
  const duelo = document.getElementById("duelo") ? '<p><button type="button" class="btn ghost" data-igo="duelo" data-iarg="">' + logmT("lpDuelo") + "</button></p>" : "";
  return '<div class="lg-panel"><h2>' + logmT("lpTit") + '</h2><p class="lg-nota">' + logmT("lpIntro") + "</p><h3>" + logmT("lpAyuda") + '</h3><div class="lg-reglas">' +
    LOGM_AYUDA.map(x => '<div class="lg-regla lg-medio"><h3>' + logEsc(x.n) + '</h3><p><b>' + logmT("ejemplo") + ":</b> " + logEsc(x.ej) + "</p><p><b>" + logmT("lpQueVe") + ":</b> " + logEsc(x.ve) + "</p></div>").join("") + "</div>" +
    "<h3>" + logmT("lpNo") + '</h3><p class="lg-nota">' + logmT("lpNoIntro") + '</p><ul class="lg-nof">' + LOGM_NOFORMAL.map(([n, d]) => "<li><b>" + logEsc(n) + ":</b> " + logEsc(d) + "</li>").join("") + "</ul>" + duelo + "</div>";
}
Object.assign(LOGM_TXT, LOGM_EXTRA_TXT);

/* ---------- (12-10) pestaña «Falacias»: todas las falacias del Rincón, reunidas (estaban repartidas por Cuadrado, Reglas de inferencia y Cuantificadores) ---------- */
Object.assign(LOGM_TXT, {
  tabFalacias: "Falacias",
  introFalacias: "Una falacia es un razonamiento que parece correcto, pero no lo es. Aquí están reunidas todas las del Rincón de lógica: primero las formales, que se refutan con un contraejemplo; después, las que la lógica ayuda a ver, y por último, las que solo se descubren mirando el contenido.",
  falSilTit: "Falacias del silogismo",
  falSilIntro: "Un silogismo que incumple alguna de las reglas de Aristóteles no es válido. Cada una de estas falacias lleva un ejemplo que puedes abrir en la pestaña Silogismos para ver su diagrama de Venn.",
  falR1: "Término medio no distribuido", falR2P: "Ilícito mayor", falR2S: "Ilícito menor", falR3: "Dos premisas negativas", falR4a: "Premisa negativa y conclusión afirmativa", falR5: "Dos premisas particulares",
  falProbar: "Verlo en Silogismos →",
  falVer: "Todas las falacias, reunidas en la pestaña «Falacias» →"
});
const LOGM_FAL_SIL = [["r1", "AAA-2"], ["r2P", "AEE-1"], ["r2S", "AAA-3"], ["r3", "EEE-1"], ["r4a", "AEA-1"], ["r5", "III-1"]];
function logmCqOrden(){
  return '<div class="lg-panel"><h2>' + logmT("cqOrdenTit") + "</h2><p>" + logmT("cqOrden") + '</p><div class="tablewrap"><table class="lg-tabla"><thead><tr><th>x</th><th>' + logmT("cqOrdenMadre") + "</th></tr></thead><tbody>" +
    [["a", "m1"], ["b", "m2"], ["c", "m3"]].map(([x, y]) => "<tr><td>" + x + "</td><td>" + y + "</td></tr>").join("") + '</tbody></table></div><p class="lg-nota">' + logmT("cqOrdenContra") + '</p><p class="lg-nota">' + logmT("cqOrdenFilo") + "</p></div>";
}
function logRenderFalacias(){
  return '<div class="lg-panel"><h2>' + logmT("falacias") + '</h2><div class="lg-reglas">' + LOGM_FALACIAS.map(x => logmCarta(x, true)).join("") + "</div></div>" +
    '<div class="lg-panel"><h2>' + logmT("falSilTit") + '</h2><p class="lg-nota">' + logmT("falSilIntro") + '</p><div class="lg-reglas">' +
    LOGM_FAL_SIL.map(([r, m]) => '<div class="lg-regla lg-falaz"><h3>' + logmT("falR" + r.slice(1)) + "</h3><p>" + logT(r) + '</p><p class="lg-forma">' + m + '</p><p><button type="button" class="btn ghost" data-falsil="' + m + '">' + logmT("falProbar") + "</button></p></div>").join("") + "</div></div>" +
    logmConversion() + logmGeneralizacion() + logmCqOrden() + logmPuedeNoPuede();
}


/* ---------- eventos (delegados en la caja del Rincón; logicaview.js maneja los demás) ---------- */
(function(){
  const box = document.getElementById("logicabox"); if (!box) return;
  LOG.fz = LOG.fz || {}; LOG.inf = LOG.inf || {}; LOG.cq = LOG.cq || { m: LOGM_CQ_PRE.p3.map(r => r.slice()), ej: {} };
  Object.assign(LOG_TXT, LOGM_TXT);   // las pestañas nuevas usan logT() de logicaview.js
  logRender();
  box.addEventListener("click", ev => {
    const b = ev.target.closest("button"); if (!b) return;
    if (b.dataset.fzok != null){ const i = +b.dataset.fzok; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { hecho: true, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.fzsol != null){ const i = +b.dataset.fzsol; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { sol: true }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = logmFzRes(i); }
    else if (b.dataset.infp != null){ LOG.prem = b.dataset.infp; LOG.concl = b.dataset.infc; LOG.tab = "tablas"; logRender(); const a = document.getElementById("lg-arg"); if (a) a.scrollIntoView({ block: "center" }); }
    else if (b.dataset.cqi != null){ const r = LOG.cq.m[+b.dataset.cqi]; r[+b.dataset.cqj] = r[+b.dataset.cqj] ? 0 : 1; const c = document.getElementById("lg-cq"); if (c) c.innerHTML = logmCqMundo(); }
    else if (b.dataset.falsil){ const [m, f] = b.dataset.falsil.split("-"); Object.assign(LOG.sil, { may: m[0], men: m[1], con: m[2], fig: +f }); LOG.tab = "silogismos"; logRender(); const c = document.getElementById("lg-sil"); if (c) c.scrollIntoView({ block: "start" }); }
    else if (b.dataset.cqpre){ if (!document.getElementById("lg-cq")){ LOG.tab = "cuantificadores"; logRender(); } LOG.cq.m = LOGM_CQ_PRE[b.dataset.cqpre].map(r => r.slice()); const c = document.getElementById("lg-cq"); if (c){ c.innerHTML = logmCqMundo(); if (b.closest(".lg-panel") !== c.closest(".lg-panel")) c.scrollIntoView({ block: "center" }); } }
    else if (b.dataset.cqej != null){ LOG.cq.ej[+b.dataset.cqej] = +b.dataset.cqo; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
    else if (b.dataset.infej != null){ LOG.inf[+b.dataset.infej] = b.dataset.infr; const y = window.scrollY; logRender(); window.scrollTo(0, y); }
  });
  box.addEventListener("input", ev => { const t = ev.target; if (t.dataset && t.dataset.fz != null){ const i = +t.dataset.fz; LOG.fz[i] = Object.assign(LOG.fz[i] || {}, { f: t.value, hecho: false, sol: false }); const r = document.getElementById("lg-fzr-" + i); if (r) r.innerHTML = ""; } });
  box.addEventListener("keydown", ev => { const t = ev.target; if (ev.key === "Enter" && t.dataset && t.dataset.fz != null){ ev.preventDefault(); const ok = box.querySelector('[data-fzok="' + t.dataset.fz + '"]'); if (ok) ok.click(); } });
})();
