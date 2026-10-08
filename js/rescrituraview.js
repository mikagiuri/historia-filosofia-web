"use strict";
/* ===== «Rescritura» (09-10, Bachillerato) =====
   Dos pestañas sobre los datos de rescritura.js:
   · «Distinguir»: un fragmento clásico y sus cuatro versiones barajadas; el alumno etiqueta cada una (rescritura,
     copia, sinonimia, malinterpretación) y, al comprobar, ve por qué lo es.
   · «Escribe la tuya»: el alumno rescribe el fragmento y un análisis mecánico le marca los trozos copiados (cuatro
     palabras seguidas iguales) y el esqueleto calcado (las mismas palabras gramaticales en el mismo orden, señal de
     sinonimia). El sentido no lo puede juzgar la máquina: para eso, una lista de preguntas y una rescritura modelo.
   Enlace profundo: #rescritura/distinguir|escribir[/texto]. */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const RES_TXT = {
  tabDist: "Distinguir", tabEscr: "Escribe la tuya", texto: "Texto:", original: "El original",
  version: "Versión {l}", comprobar: "Comprobar", otraVez: "Barajar de nuevo", siguiente: "Siguiente texto →",
  faltan: "Clasifica las cuatro versiones antes de comprobar.", acierto: "Correcto", fallo: "No: es {t}",
  puntos: "Has acertado {n} de 4.", todo: "¡Las cuatro! Ya distingues bien las trampas.",
  terminos: "Términos técnicos que puedes conservar:", tusPalabras: "Tu rescritura",
  ayudaEscr: "Lee el original las veces que necesites, tápalo y escribe con tus palabras lo que dice. Después pulsa «Analizar».",
  analizar: "Analizar", corta: "Escribe un poco más para poder analizarlo: al menos {n} palabras.", nPal: "{n} palabras",
  copiado: "Trozos copiados del original", sinCopia: "No hay trozos copiados: ninguna secuencia de cuatro palabras coincide con el original.",
  pctCopia: "{p} % de tu texto coincide literalmente con el original.",
  esqueleto: "Estructura", esqAlto: "Tu texto sigue el esqueleto del original: las mismas palabras gramaticales en el mismo orden ({p} % de coincidencia). Es la señal de la sinonimia: cambia la construcción de las frases, no solo las palabras.",
  esqBajo: "La estructura de tus frases es propia ({p} % de coincidencia con el esqueleto del original).",
  vCopia: "Diagnóstico: <strong>copia</strong>. Demasiado texto literal. Si quieres usar una frase del autor, ponla entre comillas; si no, dila de otra manera.",
  vSinon: "Diagnóstico: <strong>posible sinonimia</strong>. Has cambiado palabras, pero no la forma de decirlo.",
  vMezcla: "Diagnóstico: <strong>casi</strong>. Tu texto es propio en general, pero tiene algún trozo copiado: rescríbelo o ponlo entre comillas.",
  vBien: "Diagnóstico: <strong>la forma es tuya</strong>. Ni copia ni calco de la estructura. Ahora falta lo más importante, que la máquina no puede comprobar: que digas lo mismo que el autor.",
  sentido: "Comprueba tú el sentido",
  p1: "¿Está la idea principal del autor, y no otra parecida?", p2: "¿Has mantenido las condiciones y los matices («solo», «no… sino», «casi», «condiciona»)?",
  p3: "¿Has evitado añadir ideas que no están en el texto (consecuencias, opiniones, ejemplos que cambian el sentido)?",
  p4: "¿Has conservado los términos técnicos del autor en vez de cambiarlos por sinónimos?", p5: "¿Entendería el texto alguien que no ha leído el original?",
  verModelo: "Ver una rescritura posible", modelo: "Una rescritura posible (no la única)",
  guiaTit: "Guía: cómo se usa y para qué sirve", guia: "<h3>Para qué sirve</h3><p>En un comentario de texto o en un examen hay que explicar con tus palabras lo que dice un autor. Hay tres maneras de hacerlo mal sin darte cuenta: copiar, cambiar palabras por sinónimos y entender otra cosa. Aquí aprendes a reconocerlas en textos ajenos y a evitarlas en los tuyos.</p><h3>Cómo se usa</h3><ol><li>Lee las cuatro definiciones de arriba.</li><li>En «Distinguir», elige un texto, lee el original y clasifica cada una de las cuatro versiones con los botones. Pulsa «Comprobar» y lee por qué es cada una. Con «Barajar de nuevo» cambian de orden; con «Siguiente texto», pasas a otro autor.</li><li>En «Escribe la tuya», rescribe tú el mismo fragmento y pulsa «Analizar». Verás resaltados los trozos copiados y si has calcado la estructura. Después repasa la lista «Comprueba tú el sentido» y compara con la rescritura modelo.</li></ol><h3>Trucos para rescribir bien</h3><ul><li>Lee el texto hasta entenderlo, tápalo y escríbelo de memoria, como se lo explicarías a alguien.</li><li>Empieza de otra manera: «Para Kant…», «Según el autor…», «El texto sostiene que…».</li><li>Cambia la construcción: une o separa frases, cambia el orden de las ideas, convierte un ejemplo en una idea general o al revés.</li><li>Conserva los términos técnicos («minoría de edad», «virtud», «modo de producción»): no son copia, son el vocabulario del autor. Si hace falta, explícalos.</li><li>Si una frase es tan buena que quieres usarla tal cual, ponla entre comillas.</li></ul>",
  aviso: "El análisis es mecánico: cuenta palabras, no entiende lo que dices. Un texto puede salir «sin copia» y ser una malinterpretación."
};
const resT = (k, v) => String(RES_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const resEsc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const RES = { tab: "distinguir", id: "", orden: [], resp: {}, hecho: false, escrito: {} };
const resBox = () => document.getElementById("rescriturabox");
/* (09-10) de la frase más corta al texto más largo (hasta la longitud de la PAU); se cuenta en el idioma de la web */
const resLargo = t => String(t.original).replace(/<[^>]+>/g, " ").split(/\s+/).filter(w => /[\wÀ-ÿ]/.test(w)).length;
let RES_ORD = null;
const resTextos = () => RES_ORD || (RES_ORD = (typeof RESCRITURA_TEXTOS !== "undefined" ? RESCRITURA_TEXTOS : []).slice().sort((a, b) => resLargo(a) - resLargo(b)));
const resTipos = () => (typeof RESCRITURA_TIPOS !== "undefined" ? RESCRITURA_TIPOS : {});
const RES_ORDEN_TIPOS = ["rescritura", "copia", "sinonimia", "malinterpretacion"];
const resActual = () => resTextos().find(t => t.id === RES.id) || resTextos()[0];
function resBarajar(){
  const a = [0, 1, 2, 3];
  for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  RES.orden = a; RES.resp = {}; RES.hecho = false;
}

/* ---------- análisis mecánico ---------- */
/* palabras gramaticales (castellano y euskera): forman el «esqueleto» de una frase y no cuentan como contenido */
const RES_GRAM = new Set(("el la los las lo un una unos unas de del al a ante en y e o u ni que no se su sus le les me te nos mi tu con por para sin sobre entre hasta desde como pero sino si es son ha han hay ser era fue está están este esta esto estos estas ese esa eso esos esas cada todo toda todos todas otro otra otros otras mismo misma él ella ellos ellas uno quien cual cuando donde más menos muy ya también solo porque pues así tan tanto ese cuyo cuya mientras entonces aunque hacia tras " +
  "eta da dira ez bat ere du dute dio zen ziren baina edo hau hori hura honek horrek hark beste bere gure zer nola bezala baino oso baita izan dago daude ditu dituzte gabe arte guztiak guztia ezin dela duela zuen dituen den diren beraz orduan baldin bada badira").split(" "));
function resPalabras(s){
  return String(s).replace(/<[^>]+>/g, " ").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").match(/[a-zñ0-9]+/g) || [];
}
function resLCS(a, b){
  const m = a.length, n = b.length, d = Array(n + 1).fill(0);
  for (let i = 1; i <= m; i++){ let prev = 0; for (let j = 1; j <= n; j++){ const t = d[j]; d[j] = a[i - 1] === b[j - 1] ? prev + 1 : Math.max(d[j], d[j - 1]); prev = t; } }
  return d[n];
}
/* devuelve: palabras del alumno, marcas de copia (índices), % copiado y % de esqueleto común */
function resAnalizar(original, escrito, terminos){
  const o = resPalabras(original), w = resPalabras(escrito), N = 4;
  const grams = new Set(); for (let i = 0; i + N <= o.length; i++) grams.add(o.slice(i, i + N).join(" "));
  const marca = new Array(w.length).fill(false);
  for (let i = 0; i + N <= w.length; i++) if (grams.has(w.slice(i, i + N).join(" "))) for (let k = i; k < i + N; k++) marca[k] = true;
  /* un trozo coincidente hecho solo de palabras gramaticales y términos técnicos («hacia lo que es») no es copia */
  const tec = new Set(resPalabras((terminos || []).join(" ")));
  for (let i = 0; i < w.length;){
    if (!marca[i]){ i++; continue; }
    let j = i; while (j < w.length && marca[j]) j++;
    if (w.slice(i, j).every(x => RES_GRAM.has(x) || tec.has(x))) for (let k = i; k < j; k++) marca[k] = false;
    i = j;
  }
  const copia = w.length ? Math.round(100 * marca.filter(Boolean).length / w.length) : 0;
  const go = o.filter(x => RES_GRAM.has(x)), gw = w.filter(x => RES_GRAM.has(x));
  const esq = go.length && gw.length ? Math.round(100 * resLCS(go, gw) / Math.max(go.length, gw.length)) : 0;
  const ratio = o.length ? w.length / o.length : 0;
  return { n: w.length, marca, copia, esq, ratio };
}
function resVeredicto(a){
  if (a.copia >= 40) return "vCopia";
  if (a.esq >= 60 && a.ratio > 0.75 && a.ratio < 1.35) return "vSinon";
  if (a.copia > 0) return "vMezcla";
  return "vBien";
}
/* el texto del alumno con los trozos copiados resaltados (se recorre el texto original para conservar mayúsculas y signos) */
function resResaltar(escrito, marca){
  let i = 0, out = "", last = 0;
  String(escrito).replace(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ0-9]+/g, (m, pos) => { out += resEsc(escrito.slice(last, pos)) + (marca[i++] ? "<mark>" + m + "</mark>" : m); last = pos + m.length; return m; });
  return (out + resEsc(escrito.slice(last))).replace(/<\/mark>(\s+)<mark>/g, "$1");
}

/* ---------- pintado ---------- */
function resSelector(){
  return '<label class="res-sel">' + resT("texto") + ' <select id="res-texto" class="lg-sel">' +
    resTextos().map(t => '<option value="' + t.id + '"' + (t.id === resActual().id ? " selected" : "") + ">" + t.autor + " · " + resT("nPal", { n: resLargo(t) }) + "</option>").join("") + "</select></label>";
}
function resOriginal(t){
  return '<div class="res-original"><p class="res-eti">' + resT("original") + '</p><blockquote>' + t.original + '</blockquote><p class="res-ref">' + t.autor + ", " + t.obra + "</p></div>";
}
function resDistinguir(){
  const t = resActual(), tipos = resTipos(); if (!RES.orden.length) resBarajar();
  const ok = RES.hecho ? RES.orden.filter((v, i) => RES.resp[i] === t.versiones[v].tipo).length : 0;
  return resOriginal(t) + RES.orden.map((v, i) => {
    const ver = t.versiones[v], r = RES.resp[i], bien = r === ver.tipo;
    return '<article class="res-version' + (RES.hecho ? (bien ? " res-ok" : " res-mal") : "") + '"><p class="res-eti">' + resT("version", { l: "ABCD"[i] }) + "</p><p>" + ver.texto + '</p><div class="fgroup res-opc">' +
      RES_ORDEN_TIPOS.map(k => '<button type="button" class="fbtn" data-resv="' + i + '" data-rest="' + k + '" aria-pressed="' + (r === k) + '"' + (RES.hecho ? " disabled" : "") + ">" + tipos[k].nombre + "</button>").join("") + "</div>" +
      (RES.hecho ? '<p class="res-fb"><strong>' + (bien ? resT("acierto") : resT("fallo", { t: tipos[ver.tipo].nombre.toLowerCase() })) + ".</strong> " + ver.porque + "</p>" : "") + "</article>";
  }).join("") +
    '<p class="res-acciones">' + (RES.hecho ? '<strong class="res-punt">' + (ok === 4 ? resT("todo") : resT("puntos", { n: ok })) + "</strong> " +
      '<button type="button" class="btn ghost" data-res="barajar">' + resT("otraVez") + '</button> <button type="button" class="btn" data-res="sig">' + resT("siguiente") + "</button>"
      : '<button type="button" class="btn" data-res="comprobar">' + resT("comprobar") + '</button> <span id="res-aviso" class="res-aviso"></span>') + "</p>";
}
function resEscribir(){
  const t = resActual(), val = RES.escrito[t.id] || "";
  return resOriginal(t) + '<p class="res-terminos">' + resT("terminos") + " " + t.terminos.map(x => "<em>" + x + "</em>").join(", ") + "</p>" +
    '<label class="res-eti" for="res-area">' + resT("tusPalabras") + '</label><p class="res-ayuda">' + resT("ayudaEscr") + "</p>" +
    '<textarea id="res-area" class="res-area" rows="6">' + resEsc(val) + '</textarea><p><button type="button" class="btn" data-res="analizar">' + resT("analizar") + '</button></p><div id="res-resultado"></div>';
}
function resResultado(){
  const t = resActual(), escrito = (document.getElementById("res-area") || {}).value || "", out = document.getElementById("res-resultado");
  if (!out) return; RES.escrito[t.id] = escrito;
  const a = resAnalizar(t.original, escrito, t.terminos);
  const minimo = Math.min(12, Math.ceil(0.6 * resLargo(t)));   // un original de una frase corta admite una rescritura corta
  if (a.n < minimo){ out.innerHTML = '<p class="res-aviso">' + resT("corta", { n: minimo }) + "</p>"; return; }
  const modelo = t.versiones.find(v => v.tipo === "rescritura");
  out.innerHTML = '<div class="res-diag res-' + resVeredicto(a) + '"><p>' + resT(resVeredicto(a)) + "</p></div>" +
    "<h3>" + resT("copiado") + "</h3>" + (a.copia ? "<p>" + resT("pctCopia", { p: a.copia }) + '</p><p class="res-tuyo">' + resResaltar(escrito, a.marca) + "</p>" : "<p>" + resT("sinCopia") + "</p>") +
    "<h3>" + resT("esqueleto") + "</h3><p>" + resT(a.esq >= 60 && a.ratio > 0.75 && a.ratio < 1.35 ? "esqAlto" : "esqBajo", { p: a.esq }) + "</p>" +
    "<h3>" + resT("sentido") + '</h3><ul class="res-lista">' + ["p1", "p2", "p3", "p4", "p5"].map(k => '<li><label><input type="checkbox"> ' + resT(k) + "</label></li>").join("") + "</ul>" +
    '<details class="res-modelo"><summary>' + resT("verModelo") + "</summary><p>" + modelo.texto + '</p><p class="res-ayuda">' + modelo.porque + "</p></details>" +
    '<p class="res-ayuda">' + resT("aviso") + "</p>";
}
function resRender(){
  const box = resBox(); if (!box || !resTextos().length) return;
  if (!RES.id) RES.id = resTextos()[0].id;
  const tipos = resTipos();
  box.innerHTML = '<details class="res-guia"><summary>' + resT("guiaTit") + "</summary>" + resT("guia") + "</details>" + '<div class="res-tipos">' + RES_ORDEN_TIPOS.map(k => '<div class="res-tipo res-t-' + k + '"><strong>' + tipos[k].nombre + "</strong><span>" + tipos[k].def + "</span></div>").join("") + "</div>" +
    '<div class="fgroup res-tabs" role="tablist">' + [["distinguir", "tabDist"], ["escribir", "tabEscr"]].map(([k, l]) => '<button type="button" class="fbtn" data-restab="' + k + '" aria-pressed="' + (RES.tab === k) + '">' + resT(l) + "</button>").join("") + "</div>" +
    '<div class="res-panel">' + resSelector() + (RES.tab === "escribir" ? resEscribir() : resDistinguir()) + "</div>";
}

/* ---------- eventos ---------- */
document.addEventListener("click", e => {
  const box = resBox(); if (!box || !box.contains(e.target)) return;
  const b = e.target.closest("button"); if (!b) return;
  if (b.dataset.restab){ RES.tab = b.dataset.restab; resRender(); return; }
  if (b.dataset.resv != null){ RES.resp[b.dataset.resv] = b.dataset.rest; resRender(); return; }
  const a = b.dataset.res;
  if (a === "comprobar"){
    if (Object.keys(RES.resp).length < 4){ const av = document.getElementById("res-aviso"); if (av) av.textContent = resT("faltan"); return; }
    RES.hecho = true; resRender();
  } else if (a === "barajar"){ resBarajar(); resRender(); }
  else if (a === "sig"){ const ts = resTextos(), i = ts.findIndex(t => t.id === resActual().id); RES.id = ts[(i + 1) % ts.length].id; resBarajar(); resRender(); window.scrollTo({ top: box.offsetTop - 80 }); }
  else if (a === "analizar") resResultado();
});
document.addEventListener("change", e => {
  if (e.target.id !== "res-texto") return;
  RES.id = e.target.value; resBarajar(); resRender();
});
document.addEventListener("input", e => { if (e.target.id === "res-area") RES.escrito[resActual().id] = e.target.value; });

function loadRescritura(arg){
  const [modo, id] = String(arg || "").split("/");
  if (modo === "distinguir" || modo === "escribir") RES.tab = modo;
  if (id && resTextos().some(t => t.id === id)){ RES.id = id; resBarajar(); }
  resRender();
}
if (resBox()) resRender();
