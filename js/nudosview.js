"use strict";
/* ===== «Nudos: ¿encajan tus razones?» (09-10, Bachillerato) — vista sobre nudos.js (NUDOS) =====
   El alumno contesta afirmaciones (de acuerdo / en desacuerdo / depende, diciendo de qué). Cuando dos respuestas
   chocan aparece un nudo, y se deshace ESCRIBIENDO: cambiar una respuesta (y decir qué te hizo cambiar),
   distinguir (nombrar la diferencia relevante) o morder la bala (aceptar la consecuencia). Hay nudos aparentes,
   que parecen contradicción y no lo son. Sin nota, sin perfil, sin comparar con nadie y sin guardar nada:
   al final, un «cuaderno de razones» para imprimir o copiar. Enlace profundo: #nudos/<módulo>. */

/* textos de interfaz: cadenas enteras (así los traduce web_i18n/ui/<lang>.json) */
const NUD_TXT = {
  intro: "Vas a leer unas afirmaciones y decir si estás de acuerdo, en desacuerdo o si depende, y de qué. Cuando dos de tus respuestas choquen, aparecerá un nudo. Para deshacerlo tendrás que escribir una razón.",
  intro2: "No hay respuestas correctas, no hay nota y nadie compara tus respuestas con las de otros. Nada se guarda ni sale de este navegador. Al final tendrás tu cuaderno de razones para imprimir o copiar.",
  nAfs: "{n} afirmaciones · {m} nudos posibles", empezar: "Empezar",
  afirmacion: "Afirmación {i} de {n}", piensas: "¿Qué piensas?",
  vA: "De acuerdo", vD: "En desacuerdo", vP: "Depende",
  deQue: "¿De qué depende? Pon al menos un caso en que sí y otro en que no.",
  nPal: "{n} palabras (mínimo {m})", siguiente: "Siguiente", volver: "Volver", salir: "Salir",
  tuResp: "Tu respuesta: {v}",
  nudo: "Nudo", nudoAp: "Nudo aparente",
  nudoTit: "Estas dos respuestas tiran en sentidos opuestos", nudoApTit: "Esto parece una contradicción…",
  apExplica: "Explícalo con tus palabras: ¿por qué no es una contradicción?", seguir: "Seguir",
  elige: "Elige cómo lo deshaces. No hay opción correcta: lo que cuenta es la razón que des.",
  oCa: "✏️ Cambio mi respuesta a la primera afirmación", oCb: "✏️ Cambio mi respuesta a la segunda afirmación",
  oDi: "🔍 Mantengo las dos: hay una diferencia relevante que lo explica",
  oBa: "🦷 Mantengo las dos y acepto la consecuencia («muerdo la bala»)",
  pCambio: "¿Qué te ha hecho cambiar de opinión?",
  pDist: "¿Cuál es la diferencia relevante entre los dos casos? Nómbrala y explica por qué importa.",
  pBala: "¿Qué consecuencia aceptas exactamente, y por qué te parece asumible?",
  reContestar: "Volver a contestar esa afirmación", guardar: "Guardar mi razón",
  saberMas: "Para saber más:",
  cuaderno: "Tu cuaderno de razones", cuadSub: "Sin nota y sin perfil: lo que importa es lo que has escrito.",
  misResp: "Mis respuestas", dependeDe: "Depende de: {t}",
  misNudos: "Mis nudos y cómo los deshice",
  lCambio: "Cambié de opinión sobre «{a}»: de «{de}» a «{x}».", porQue: "Por qué: {t}",
  lDist: "Distinguí entre «{a}» y «{b}».", lBala: "Mordí la bala entre «{a}» y «{b}».", lAp: "Nudo aparente entre «{a}» y «{b}».",
  miRazon: "Mi razón: {t}",
  sinNudos: "No apareció ningún nudo con tus respuestas. ¿Es porque eres coherente o porque has contestado mucho «Depende»? Las dos cosas pueden ser verdad.",
  sinNudosPocoP: "No ha saltado ninguno de nuestros nudos, pero eso no prueba que no los haya: busca tú alguno entre tus respuestas y escríbelo en el último reto.",
  reto: "Último reto", retoTxt: "Elige la respuesta de la que estés más seguro y escribe la mejor objeción que se le podría hacer. Después contéstala.",
  imprimir: "Imprimir o guardar en PDF", copiar: "Copiar como texto", inicio: "Volver al inicio",
  copiado: "Copiado.", noCopia: "No se ha podido copiar; usa «Imprimir».",
  guiaTit: "Guía: cómo se usa y para qué sirve",
  guia: "<h3>Para qué sirve</h3><p>Pensar bien no es tener muchas opiniones, sino que encajen entre sí y saber dar razones de ellas. Aquí descubres dónde chocan tus propias respuestas y practicas las tres maneras honradas de resolver un choque: cambiar de opinión, señalar una diferencia relevante entre los casos o aceptar una consecuencia incómoda. En los tres casos tienes que escribir por qué.</p><h3>Cómo se usa</h3><ol><li>Elige un módulo y contesta las afirmaciones una a una. Si eliges «Depende», explica de qué.</li><li>Cuando aparezca un nudo, lee por qué chocan tus respuestas y elige cómo deshacerlo. Si cambias una respuesta, volverás a esa afirmación y después seguirás por donde ibas.</li><li>Algunos nudos son aparentes: parecen contradicción y no lo son. Explica con tus palabras por qué.</li><li>Al final, revisa tu cuaderno de razones, responde al último reto e imprímelo si te lo piden.</li></ol><h3>Ten en cuenta</h3><ul><li>No hay respuestas correctas ni puntuación: un nudo no es un error, es una invitación a pensar.</li><li>No todo choque es una contradicción. Distinguir bien dos casos es tan valioso como cambiar de opinión.</li><li>Tus respuestas no se envían a ninguna parte ni se comparan con las de nadie.</li></ul>"
};
const nudT = (k, v) => String(NUD_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const nudEsc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const nudPal = s => (String(s).trim().match(/\S+/g) || []).length;
const nudBox = () => document.getElementById("nudosbox");
let NUD = null;   // estado del recorrido: { m, orden, pos, resp, hechos, log, volverA }

function nudVal(v){ return nudT({ A: "vA", D: "vD", P: "vP" }[v]); }
function nudPar(n){ const [a, b] = n.k.split("|").map(x => x.split("=")); return { a: a[0], av: a[1], b: b[0], bv: b[1] }; }

function nudInicio(){
  NUD = null;
  const box = nudBox(); if (!box) return;
  box.innerHTML = '<details class="nud-guia"><summary>' + nudT("guiaTit") + "</summary>" + nudT("guia") + "</details>" +
    '<div class="nud-card"><p>' + nudT("intro") + '</p><p class="nud-muted">' + nudT("intro2") + "</p></div>" +
    '<div class="nud-mods">' + NUDOS.map(m => '<button type="button" class="nud-mod" data-nudmod="' + m.id + '"><strong>' + m.titulo + '</strong><span class="nud-muted">' + m.sub + '</span><span class="nud-small">' +
      nudT("nAfs", { n: Object.keys(m.afs).length, m: m.nudos.length }) + "</span></button>").join("") + "</div>";
  box.querySelectorAll("[data-nudmod]").forEach(b => b.onclick = () => nudEmpezar(b.dataset.nudmod));
}

function nudEmpezar(id){
  const m = NUDOS.find(x => x.id === id) || NUDOS[0];
  NUD = { m, orden: Object.keys(m.afs), pos: 0, resp: {}, hechos: new Set(), log: [], volverA: null };
  nudPregunta();
}

function nudPregunta(motivo){
  const box = nudBox(), id = NUD.orden[NUD.pos], r = motivo != null ? {} : (NUD.resp[id] || {});
  box.innerHTML = '<div class="nud-card"><p class="nud-small nud-muted">' + NUD.m.titulo + " · " + nudT("afirmacion", { i: NUD.pos + 1, n: NUD.orden.length }) + "</p>" +
    '<p class="nud-stmt" id="nud-enun">' + NUD.m.afs[id] + "</p>" +
    '<fieldset class="nud-fs" aria-labelledby="nud-enun"><legend class="nud-small nud-muted">' + nudT("piensas") + '</legend><div class="nud-opts">' +
    ["A", "D", "P"].map(v => '<label class="nud-opt"><input type="radio" name="nud-v" value="' + v + '"' + (r.v === v ? " checked" : "") + "><span>" + nudVal(v) + "</span></label>").join("") +
    '</div></fieldset><div id="nud-dep"' + (r.v === "P" ? "" : " hidden") + '><label class="nud-lab" for="nud-deptx">' + nudT("deQue") + '</label><textarea id="nud-deptx">' + nudEsc(r.dep || "") + '</textarea><div class="nud-count" id="nud-depc"></div></div>' +
    '<p class="nud-row"><button type="button" class="btn" id="nud-sig" disabled>' + nudT("siguiente") + "</button>" +
    (NUD.pos > 0 && motivo == null ? ' <button type="button" class="btn ghost" id="nud-atr">' + nudT("volver") + "</button>" : "") +
    ' <button type="button" class="btn ghost" id="nud-sal">' + nudT("salir") + "</button></p></div>";
  const val = () => (box.querySelector("input[name=nud-v]:checked") || {}).value;
  const ok = () => {
    const v = val(), n = nudPal(document.getElementById("nud-deptx").value);
    document.getElementById("nud-dep").hidden = v !== "P";
    document.getElementById("nud-depc").textContent = v === "P" ? nudT("nPal", { n, m: 8 }) : "";
    document.getElementById("nud-sig").disabled = !v || (v === "P" && n < 8);
  };
  box.querySelectorAll("input[name=nud-v]").forEach(x => x.onchange = ok);
  document.getElementById("nud-deptx").oninput = ok; ok();
  document.getElementById("nud-sal").onclick = nudInicio;
  const atr = document.getElementById("nud-atr"); if (atr) atr.onclick = () => { NUD.pos--; nudPregunta(); };
  document.getElementById("nud-sig").onclick = () => {
    const v = val(), antes = NUD.resp[id];
    NUD.resp[id] = { v, dep: v === "P" ? document.getElementById("nud-deptx").value.trim() : "" };
    if (antes && antes.v !== v){
      NUD.log.push({ tipo: "cambio", id, de: antes.v, a: v, razon: motivo || "" });
      for (const k of [...NUD.hechos]) if (k.split("|").some(x => x.split("=")[0] === id)) NUD.hechos.delete(k);   // sus nudos se vuelven a evaluar
    }
    nudSiguiente();
  };
  window.scrollTo({ top: box.offsetTop - 80 });
}

function nudPendiente(){
  return NUD.m.nudos.find(n => {
    if (NUD.hechos.has(n.k)) return false;
    const p = nudPar(n), ra = NUD.resp[p.a], rb = NUD.resp[p.b];
    return ra && rb && ra.v === p.av && rb.v === p.bv;
  });
}

function nudSiguiente(){
  const n = nudPendiente();
  if (n) return nudNudo(n);
  if (NUD.volverA != null){ NUD.pos = NUD.volverA; NUD.volverA = null; }
  if (NUD.pos < NUD.orden.length - 1){ NUD.pos++; return nudPregunta(); }
  nudCuaderno();
}

function nudNudo(n){
  const box = nudBox(), p = nudPar(n), ap = n.tipo === "aparente";
  const fila = id => "<div><strong>" + NUD.m.afs[id] + '</strong><br><span class="nud-small nud-muted">' + nudT("tuResp", { v: nudVal(NUD.resp[id].v) }) + "</span></div>";
  box.innerHTML = '<div class="nud-card nud-knot' + (ap ? " nud-ap" : "") + '" role="region" aria-live="polite"><span class="nud-tag">' + nudT(ap ? "nudoAp" : "nudo") + "</span>" +
    "<h3>" + nudT(ap ? "nudoApTit" : "nudoTit") + '</h3><div class="nud-pair">' + fila(p.a) + fila(p.b) + "</div><p>" + n.por + "</p>" +
    (ap ? '<label class="nud-lab" for="nud-tx">' + nudT("apExplica") + '</label><textarea id="nud-tx"></textarea><div class="nud-count" id="nud-cnt"></div><p class="nud-row"><button type="button" class="btn" id="nud-ok" disabled>' + nudT("seguir") + "</button></p>"
      : '<p class="nud-small nud-muted">' + nudT("elige") + '</p><div class="nud-choices">' +
        [["ca", "oCa"], ["cb", "oCb"], ["di", "oDi"], ["ba", "oBa"]].map(([c, l]) => '<button type="button" class="nud-choice" data-nudc="' + c + '" aria-pressed="false">' + nudT(l) + "</button>").join("") +
        '</div><div id="nud-extra"></div>') +
    '<p class="nud-src">' + nudT("saberMas") + " " + n.fuente + "</p>" +
    (typeof cruTesisHtml === "function" ? cruTesisHtml(cruNudoTesis(NUD.m.id, n.k)) : "") + "</div>";   // (11-10) cruces_tesis.js
  if (ap){
    nudTexto(10, () => { NUD.hechos.add(n.k); NUD.log.push({ tipo: "aparente", n, razon: document.getElementById("nud-tx").value.trim() }); nudSiguiente(); });
    return;
  }
  box.querySelectorAll("[data-nudc]").forEach(b => b.onclick = () => {
    box.querySelectorAll("[data-nudc]").forEach(x => x.setAttribute("aria-pressed", x === b ? "true" : "false"));
    nudOpcion(n, b.dataset.nudc);
  });
}

function nudTexto(min, alPulsar){
  const tx = document.getElementById("nud-tx"), b = document.getElementById("nud-ok");
  tx.oninput = () => { const w = nudPal(tx.value); document.getElementById("nud-cnt").textContent = nudT("nPal", { n: w, m: min }); b.disabled = w < min; };
  tx.oninput(); b.onclick = alPulsar;
}

function nudOpcion(n, c){
  const p = nudPar(n), cambio = c === "ca" || c === "cb", min = cambio ? 8 : 15;
  document.getElementById("nud-extra").innerHTML = (c === "di" && n.distinguir ? '<p class="nud-hint">' + n.distinguir + "</p>" : "") +
    '<label class="nud-lab" for="nud-tx">' + nudT(cambio ? "pCambio" : (c === "di" ? "pDist" : "pBala")) + '</label><textarea id="nud-tx"></textarea><div class="nud-count" id="nud-cnt"></div>' +
    '<p class="nud-row"><button type="button" class="btn" id="nud-ok" disabled>' + nudT(cambio ? "reContestar" : "guardar") + "</button></p>";
  document.getElementById("nud-tx").focus();
  nudTexto(min, () => {
    const razon = document.getElementById("nud-tx").value.trim();
    if (cambio){
      if (NUD.volverA == null) NUD.volverA = NUD.pos;
      NUD.pos = NUD.orden.indexOf(c === "ca" ? p.a : p.b);
      nudPregunta(razon);   // si la respuesta no cambia, el nudo vuelve a aparecer
      return;
    }
    NUD.hechos.add(n.k); NUD.log.push({ tipo: c === "di" ? "distingo" : "bala", n, razon }); nudSiguiente();
  });
}

function nudCuaderno(){
  const box = nudBox(), af = id => NUD.m.afs[id], afc = id => af(id).replace(/\.\s*$/, "");   // (09-10) afc: al citarla entre comillas, sin su punto final (evita «….».)
  const lineas = NUD.log.map(e => {
    if (e.tipo === "cambio") return "<li>" + nudT("lCambio", { a: afc(e.id), de: nudVal(e.de), x: nudVal(e.a) }) + (e.razon ? "<br>" + nudT("porQue", { t: nudEsc(e.razon) }) : "") + "</li>";
    const p = nudPar(e.n), k = { distingo: "lDist", bala: "lBala", aparente: "lAp" }[e.tipo];
    return "<li>" + nudT(k, { a: afc(p.a), b: afc(p.b) }) + "<br>" + nudT("miRazon", { t: nudEsc(e.razon) }) + "</li>";
  }).join("") || '<li class="nud-muted">' + nudT(NUD.orden.filter(id => NUD.resp[id].v === "P").length >= 3 ? "sinNudos" : "sinNudosPocoP") + "</li>";   // (09-10) el mensaje de «mucho Depende» solo si de verdad lo hay
  box.innerHTML = '<div class="nud-card nud-cuaderno"><h3>' + nudT("cuaderno") + '</h3><p class="nud-small nud-muted">' + NUD.m.titulo + " · " + new Date().toLocaleDateString(document.documentElement.lang || "es") + ". " + nudT("cuadSub") + "</p>" +
    "<h4>" + nudT("misResp") + "</h4><ul>" + NUD.orden.map(id => "<li>" + af(id) + " — <strong>" + nudVal(NUD.resp[id].v) + "</strong>" + (NUD.resp[id].dep ? '<br><span class="nud-small">' + nudT("dependeDe", { t: nudEsc(NUD.resp[id].dep) }) + "</span>" : "") + "</li>").join("") + "</ul>" +
    "<h4>" + nudT("misNudos") + '</h4><ul class="nud-log">' + lineas + "</ul>" +
    (typeof cruNudoRayuela === "function" ? cruNudoRayuela(NUD.m.id) : "") +   // (11-10) «Vívelo en la Rayuela»
    "<h4>" + nudT("reto") + '</h4><label class="nud-lab" for="nud-reto">' + nudT("retoTxt") + '</label><textarea id="nud-reto" class="nud-reto"></textarea>' +
    '<p class="nud-row nud-noprint"><button type="button" class="btn" id="nud-imp">' + nudT("imprimir") + '</button> <button type="button" class="btn ghost" id="nud-cop">' + nudT("copiar") +
    '</button> <button type="button" class="btn ghost" id="nud-ini">' + nudT("inicio") + '</button> <span class="nud-small nud-muted" id="nud-msg" aria-live="polite"></span></p></div>';
  document.getElementById("nud-imp").onclick = () => void 0 /* sin imprimir en la web de alumnado */;
  document.getElementById("nud-ini").onclick = nudInicio;
  document.getElementById("nud-cop").onclick = async () => {
    const t = box.querySelector(".nud-cuaderno").innerText.replace(/\n{3,}/g, "\n\n") + "\n\n" + nudT("reto") + ": " + document.getElementById("nud-reto").value;
    try { await navigator.clipboard.writeText(t); document.getElementById("nud-msg").textContent = nudT("copiado"); }
    catch (e){ document.getElementById("nud-msg").textContent = nudT("noCopia"); }
  };
  window.scrollTo({ top: box.offsetTop - 80 });
}

function loadNudos(arg){
  const id = String(arg || "").split("/")[0];
  if (id && NUDOS.some(m => m.id === id)) nudEmpezar(id); else nudInicio();
}
if (nudBox() && typeof NUDOS !== "undefined") nudInicio();
