"use strict";
/* ===== «Adagios» (09-10, Bachillerato) — vista sobre adagios.js (ADAGIOS) =====
   Repertorio de lemas clásicos al modo de los cuadernos de lugares comunes del Renacimiento. Cada ficha: la versión
   española y, solo al pulsar el botón λ de su línea (como en el glosario), el lema latino y, si lo hay, el original
   griego con su transliteración; luego qué quiere decir, cuándo usarlo, el caso trampa si lo hay, de dónde viene y los temas.
   Los nombres de pensadores con ficha en Ilustres (en esta web) abren su biografía: el primero de cada ficha.
   Filtro por ámbito y modo «Ponte a prueba» (solo el lema en español; el resto se descubre al pulsar). Arriba solo las fichas:
   la historia (Erasmo, florilegios, Montaigne) y el cuaderno de lugares comunes van al final, plegados.
   Enlace profundo: #adagios/<id>. Los temas se enlazan solo si existen en la web (THEORY filtrado). */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const ADG_TXT = {
  ambito: "Ámbito", todos: "Todos",
  saber: "Saber", realidad: "Realidad", etica: "Ética y vida", politica: "Política", humano: "Ser humano",
  modo: "Modo", leer: "Leer", prueba: "Ponte a prueba",
  pruebaAyuda: "Intenta explicar qué quiere decir, de dónde viene y cuándo lo usarías; luego pulsa «Descubrir».",
  descubrir: "Descubrir", ocultar: "Ocultar",
  originalBtn: "Ver el original en latín", originalBtnGr: "Ver el original en latín y en griego, y cómo se lee el griego",
  latin: "En latín:", griego: "En griego:",
  origen: "De dónde viene:", erasmo: "Erasmo, Adagia {n}",
  sentido: "Qué quiere decir:", uso: "Úsalo:", trampa: "Caso trampa", temas: "En los temas:",
  verBio: "Ver la biografía de {n}",
  cuenta: "{n} adagios", cuenta1: "1 adagio",
  hTit: "De dónde viene esto: el lenguaje común del Renacimiento",
  h1: "En el Renacimiento, quien había estudiado sabía de memoria cientos de lemas, adagios y sentencias de los clásicos. No era un adorno: funcionaban como un idioma compartido. Bastaba con decir «Festina lente» o «Nosce te ipsum» para evocar una idea entera, con su historia y sus matices, y el lector culto la reconocía al instante.",
  h2t: "Los Adagia de Erasmo",
  h2: "La colección más influyente fue la de Erasmo de Róterdam. Empezó en 1500 con una antología de 818 proverbios griegos y latinos y la fue ampliando toda su vida: la edición de 1536 tiene 4.151. Cada adagio va con un comentario sobre su origen, su sentido y su uso, y algunos comentarios son verdaderos ensayos, como el de «Dulce bellum inexpertis», contra la guerra, o el de «Sileni Alcibiadis», sobre las apariencias.",
  h3t: "Florilegios y lugares comunes",
  h3: "Junto a Erasmo circulaban los florilegios («selección de flores»), antologías de pasajes escogidos como la Polyanthea de Domenico Nani Mirabelli (1503) o las Illustrium poetarum flores de Octaviano Mirandula. Y en la escuela cada estudiante llevaba su propio cuaderno de lugares comunes (loci communes): copiaba las frases que encontraba al leer y las ordenaba por temas (la amistad, la fortuna, la muerte, la justicia…) para tener argumentos a mano al escribir o al hablar. Erasmo, en De copia, y Juan Luis Vives explicaron cómo hacerlo.",
  h3b: "Ojo con una confusión frecuente: los Loci communes de Melanchthon (1521) se llaman igual, pero son un manual de teología protestante ordenado por temas, no una colección de citas.",
  h4t: "Las vigas de Montaigne",
  h4: "Montaigne mandó pintar en las vigas del techo de su biblioteca más de cincuenta sentencias en griego y en latín, muchas de la Biblia, de Sexto Empírico y de la antología de Estobeo, para tenerlas a la vista mientras escribía sus Ensayos. Todavía se conservan en su torre del Périgord, en el suroeste de Francia.",
  h4b: "Él mismo se hizo con su propio lema. En 1576 mandó acuñar una medalla con una balanza en equilibrio y una palabra griega de los escépticos, ἐπέχω (epékho, «me abstengo», es decir, suspendo el juicio). En los Ensayos (II, 12) la traduce en forma de pregunta: «Que sçay-je?», «¿qué sé yo?».",
  pieDivisa: "La divisa de Montaigne: «Que sçay-je?» sobre una balanza en equilibrio",
  pieMedalla: "Medalla de Montaigne de los Gatteaux (siglo XIX; Biblioteca Nacional de Francia)",
  cTit: "Haz tu cuaderno de lugares comunes",
  c0: "Un cuaderno de lugares comunes es un fichero de frases ordenadas por temas para tenerlas a mano al escribir. Así se hace:",
  c1t: "Prepáralo.",
  c1: "Una libreta o un documento con cinco apartados, uno por ámbito: Saber, Realidad, Ética y vida, Política y Ser humano. Deja al menos dos páginas por apartado.",
  c2t: "Copia cada adagio siempre con las mismas cinco líneas:",
  c2a: "el lema en latín o en griego;", c2b: "la traducción;", c2c: "de dónde viene: autor y obra;",
  c2d: "qué quiere decir, en una frase tuya (no copies la de la web);",
  c2e: "una frase tuya en la que lo uses sobre un tema del curso.",
  cEjT: "Ejemplo:",
  cEj: "Homo homini lupus · «El hombre es un lobo para el hombre» · Plauto, Asinaria; lo retoma Hobbes en De cive · Sin leyes que nos protejan, los demás son una amenaza · «Para Hobbes, en el estado de naturaleza homo homini lupus; por eso los individuos aceptan un soberano que garantice la paz».",
  c3t: "Llévalo al día.",
  c3: "Dos adagios por semana: el que haya salido en clase y otro que elijas tú, de esta sección o de tus lecturas. Al final del trimestre tendrás unos veinticinco.",
  c4t: "Repásalo.",
  c4: "Una vez por semana, con el modo «Ponte a prueba» o tapando la traducción en tu cuaderno: di en voz alta qué significa y en qué tema lo usarías. Marca con un punto los que falles y vuelve a ellos la semana siguiente.",
  c5t: "Úsalo al escribir.",
  c5: "En un comentario o una disertación, un adagio funciona al principio, para presentar el problema, o al final, para cerrar la tesis. No pongas más de uno o dos por texto y explícalo siempre: «Como escribió Plauto, y repetiría Hobbes, homo homini lupus: …». Si no sabes explicar por qué viene al caso, no lo pongas."
};
const adgT = (k, v) => String(ADG_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));

const ADG_AMB = ["saber", "realidad", "etica", "politica", "humano"];
/* pensadores con ficha en Ilustres: nombre tal como aparece en los textos → id (solo se enlaza si la ficha existe en esta web) */
const ADG_ILU = [
  ["Agustín de Hipona", "agustin"], ["Anselmo de Canterbury", "anselmo"], ["Tomás de Aquino", "tomas"], ["Francis Bacon", "francis_bacon"],
  ["Erasmo de Róterdam", "erasmo"], ["Erasmo", "erasmo"], ["Sócrates", "socrates"], ["Platón", "platon"], ["Aristóteles", "aristoteles"],
  ["Heráclito", "heraclito"], ["Parménides", "parmenides"], ["Protágoras", "protagoras"], ["Epicuro", "epicuro"], ["Séneca", "seneca"],
  ["Tertuliano", "tertuliano"], ["Ockham", "ockham"], ["Maquiavelo", "maquiavelo"], ["Hobbes", "hobbes"], ["Spinoza", "spinoza"],
  ["Locke", "locke"], ["Leibniz", "leibniz"], ["Kant", "kant"], ["Heidegger", "heidegger"],
  ["Averroes", "averroes"], ["Hegel", "hegel"], ["Marx", "marx"], ["Darwin", "darwin"]
];
let adgAmb = "all", adgPrueba = false;

function adgEsc(s){ return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
function adgBox(){ return document.getElementById("adagiosbox"); }
function adgHayIlu(id){ return typeof ILUSTRES !== "undefined" && ILUSTRES[id] && typeof loadIlustre === "function"; }

/* texto escapado con el primer nombre de cada pensador convertido en botón (hechos = los ya enlazados en la ficha) */
function adgNombres(txt, hechos){
  let s = adgEsc(txt);
  ADG_ILU.forEach(([n, id]) => {
    if (hechos.has(id) || !adgHayIlu(id)) return;
    /* seguido de un número de pasaje es el título de una obra (Platón, «Protágoras 343b»), no la persona */
    const rx = new RegExp("(^|[^\\p{L}>])(" + n + ")(?![\\p{L}<])(?!\\s*\\d)", "u");
    if (!rx.test(s)) return;
    s = s.replace(rx, (m, a, b) => a + '<button class="adg-ilu" data-ilu="' + id + '" title="' + adgEsc(adgT("verBio", { n: ILUSTRES[id].name })) + '">' + b + '</button>');
    hechos.add(id);
  });
  return s;
}

function adgFiltro(){
  const f = document.getElementById("adagiosfilter");
  if (!f) return;
  f.innerHTML = '<div class="fgroup"><span class="flabel">' + adgT("ambito") + '</span>' +
    ["all"].concat(ADG_AMB).map(a => '<button class="fbtn" data-adg-a="' + a + '" aria-pressed="' + (a === adgAmb) + '">' +
      adgT(a === "all" ? "todos" : a) + '</button>').join("") + '</div>' +
    '<div class="fgroup"><span class="flabel">' + adgT("modo") + '</span>' +
    [["leer", false], ["prueba", true]].map(m => '<button class="fbtn" data-adg-m="' + m[0] + '" aria-pressed="' + (adgPrueba === m[1]) + '">' + adgT(m[0]) + '</button>').join("") + '</div>';
  f.querySelectorAll("[data-adg-a]").forEach(b => b.addEventListener("click", () => { adgAmb = b.dataset.adgA; adgFiltro(); adgRender(); }));
  f.querySelectorAll("[data-adg-m]").forEach(b => b.addEventListener("click", () => { adgPrueba = b.dataset.adgM === "prueba"; adgFiltro(); adgRender(); }));
}

function adgTemas(a){
  if (typeof THEORY === "undefined") return "";
  const ts = (a.t || []).filter(k => THEORY[k]);
  if (!ts.length) return "";
  return '<p class="adg-temas"><span class="adg-k">' + adgT("temas") + '</span> ' +
    ts.map(k => '<button class="adg-tema" data-th="' + adgEsc(k) + '" title="' + adgEsc(THEORY[k].title) + '">' + adgEsc(THEORY[k].title) + '</button>').join("") + '</p>';
}

function adgFicha(a){
  const h = new Set(), N = t => adgNombres(t, h);
  /* (09-10) el original (latín y, si lo hay, griego transliterado) solo se ve al pulsar λ, en la línea del español */
  const lb = adgT(a.gr ? "originalBtnGr" : "originalBtn");
  return '<article class="adg-card' + (adgPrueba ? ' adg-oculta' : '') + '" id="adg-' + adgEsc(a.id) + '" data-ep="' + adgEsc(a.e) + '">' +
    (a.img ? '<figure class="adg-fig' + (a.fit === "contain" ? ' adg-fig-c' : '') + '"><img src="' + adgEsc(a.img) + '" alt="' + adgEsc(a.pie) + '" loading="lazy" decoding="async"><figcaption>' + N(a.pie) + '</figcaption></figure>' : '') +
    '<h2 class="adg-es">' + adgEsc(a.es) + '<button type="button" class="adg-lam" aria-expanded="false" aria-label="' + lb + '" title="' + lb + '">λ</button></h2>' +
    '<div class="adg-orig" hidden><p class="adg-la"><span class="adg-k">' + adgT("latin") + '</span> <i lang="la">' + adgEsc(a.la) + '</i></p>' +
    (a.gr ? '<p class="adg-gr"><span class="adg-k">' + adgT("griego") + '</span> <span lang="grc">' + adgEsc(a.gr) + '</span> (<i>' + adgEsc(a.tr) + '</i>)</p>' : '') + '</div>' +
    (adgPrueba ? '<p class="adg-ayuda">' + adgT("pruebaAyuda") + '</p><button class="adg-desc" aria-expanded="false">' + adgT("descubrir") + '</button>' : '') +
    '<div class="adg-cuerpo">' +
      '<p class="adg-sen"><span class="adg-k">' + adgT("sentido") + '</span> ' + N(a.sen) + '</p>' +
      (a.uso ? '<p class="adg-uso"><span class="adg-k">' + adgT("uso") + '</span> ' + N(a.uso) + '</p>' : '') +
      (a.trampa ? '<p class="adg-trampa"><strong>' + adgT("trampa") + '.</strong> ' + N(a.trampa) + '</p>' : '') +
      '<p class="adg-o"><span class="adg-k">' + adgT("origen") + '</span> ' + N(a.o) + (a.er ? '. ' + N(adgT("erasmo", { n: a.er })) : '') + '.</p>' +
      adgTemas(a) +
    '</div></article>';
}

function adgHistoria(){
  const h = new Set(), p = k => '<p>' + adgNombres(adgT(k), h) + '</p>';
  return '<details class="adg-guia"><summary>' + adgT("hTit") + '</summary>' + p("h1") +
    '<h3>' + adgT("h2t") + '</h3>' + p("h2") + '<h3>' + adgT("h3t") + '</h3>' + p("h3") + p("h3b") +
    '<h3>' + adgT("h4t") + '</h3>' + p("h4") + p("h4b") +
    '<div class="adg-mont">' + [["montaigne_divisa", "pieDivisa"], ["montaigne_medalla", "pieMedalla"]].map(([f, k]) =>
      '<figure><img src="media/galeria_museo/adagios/' + f + '.jpg" alt="' + adgEsc(adgT(k)) + '" loading="lazy"><figcaption>' + adgT(k) + '</figcaption></figure>').join("") + '</div></details>' +
    '<details class="adg-guia"><summary>' + adgT("cTit") + '</summary><p>' + adgT("c0") + '</p><ol>' +
    '<li><strong>' + adgT("c1t") + '</strong> ' + adgT("c1") + '</li>' +
    '<li><strong>' + adgT("c2t") + '</strong><ol type="a">' + ["c2a", "c2b", "c2c", "c2d", "c2e"].map(k => '<li>' + adgT(k) + '</li>').join("") + '</ol>' +
      '<p class="adg-ej"><strong>' + adgT("cEjT") + '</strong> ' + adgNombres(adgT("cEj"), new Set()) + '</p></li>' +
    ["c3", "c4", "c5"].map(k => '<li><strong>' + adgT(k + "t") + '</strong> ' + adgT(k) + '</li>').join("") + '</ol></details>';
}

function adgRender(){
  const box = adgBox();
  if (!box) return;
  const l = ADAGIOS.filter(a => adgAmb === "all" || a.amb === adgAmb);
  box.innerHTML = '<div class="adg-grid">' + l.map(adgFicha).join("") + '</div>' +
    '<p class="adg-cuenta">' + (l.length === 1 ? adgT("cuenta1") : adgT("cuenta", { n: l.length })) + '</p>' + adgHistoria();
}

/* clics delegados (la caja se repinta con cada filtro) */
(() => {
  const box = adgBox();
  if (!box) return;
  box.addEventListener("click", e => {
    const d = e.target.closest(".adg-desc");
    if (d){ const c = d.closest(".adg-card"), oc = c.classList.toggle("adg-oculta");
      d.textContent = adgT(oc ? "descubrir" : "ocultar"); d.setAttribute("aria-expanded", String(!oc)); return; }
    const l = e.target.closest(".adg-lam");
    if (l){ const g = l.closest(".adg-card").querySelector(".adg-orig"); g.hidden = !g.hidden; l.setAttribute("aria-expanded", String(!g.hidden)); return; }
    const i = e.target.closest("[data-ilu]");
    if (i){ (window.show || show)("ilustres"); loadIlustre(i.dataset.ilu); return; }
    const t = e.target.closest("[data-th]");
    if (t){ (window.show || show)("teoria"); if (typeof window.loadTheory === "function") window.loadTheory(t.dataset.th); }
  });
})();

function loadAdagios(arg){
  const id = String(arg || "").split("/")[0];
  const a = ADAGIOS.find(x => x.id === id);
  if (a && adgAmb !== "all" && a.amb !== adgAmb){ adgAmb = "all"; adgFiltro(); }
  adgRender();
  const el = a && document.getElementById("adg-" + a.id);
  /* tras pintar: show() sube al principio de la vista y el enrutado inicial llega después */
  if (el){ el.classList.add("adg-marca"); setTimeout(() => el.scrollIntoView({ block: "center" }), 80); setTimeout(() => el.classList.remove("adg-marca"), 2600); }
}
window.loadAdagios = loadAdagios;
if (adgBox() && typeof ADAGIOS !== "undefined"){ adgFiltro(); adgRender(); }
