"use strict";
/* ===== Señalética de importancia para la Historia de la Filosofía (19-10) =====
   Insignia de nivel 5-1 (puntos ●●●●○ + nombre) para Biografías, la lista de temas y el glosario de HF. Datos en imprescindibles.js
   (generado con tools/build_imprescindibles.js). Solo variables de styles.css; legible en modo noche; no desplaza nada:
   la insignia se pinta con la ficha o la tarjeta, nunca después. Textos de interfaz como cadenas enteras (ui/<lang>.json). */

const IMP_TXT = {
  n5: "Imprescindible", n4: "Esencial", n3: "Importante", n2: "Complemento", n1: "Ampliación",
  aria: "Importancia para la PAU: {n} de 5, {t}.", por: "Por qué",
  leyTit: "Qué significan los puntos",
  ley5: "Lectura o autor de la PAU, o algo sin lo que no se entienden.",
  ley4: "Lo que el currículo marca como imprescindible (con asterisco) o lo que ya ha caído en la PAU.",
  ley3: "Lo que nombra el currículo, o lo que hace falta para entender lo anterior.",
  ley2: "Útil como contexto o para argumentar en la disertación.",
  ley1: "Curiosidad o ampliación: para saber más.",
  leyPie: "Criterio: primero el currículo vasco (Decreto 76/2023), después la PAU de la UPV/EHU.",
  filtro: "Solo imprescindibles y esenciales",
  leyMedio: "Medio punto: entre dos niveles. Un 3,5 no cuenta todavía como esencial."   /* (20-10) */
};
const impT = (k, v) => String(IMP_TXT[k] || k).replace(/\{(\w+)\}/g, (_, x) => (v && v[x] != null ? v[x] : ""));
const impEsc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* nivel de un autor (clave de Biografías) o de un tema de HF (número); null si no hay dato */
function impNivel(tipo, k){
  if (typeof IMPRESCINDIBLES === "undefined") return null;
  if (tipo === "glo"){ const g = k, gr = g && g.imp && (IMPRESCINDIBLES.glosarioGrupos || {})[g.impg]; return gr ? { n: g.imp, motivo: gr[1] } : null; }   // k = entrada del glosario
  const d = tipo === "tema" ? IMPRESCINDIBLES.temasHf[k] : IMPRESCINDIBLES.autores[k];
  return d ? { n: d[0], motivo: d[1] } : null;
}
/* (20-10) medios puntos: 3.5 = ●●●◐○; el nombre es el del nivel entero de abajo; la cifra, con coma salvo en inglés y árabe */
const impDec = n => n % 1 ? String(n).replace(".", /^(en|ar)/.test(document.documentElement.lang || "") ? "." : ",") : String(n);
const impPts = n => [1, 2, 3, 4, 5].map(i => '<i class="imp-p' + (i <= n ? " imp-on" : i - 0.5 === n ? " imp-half" : "") + '"></i>').join("");
/* insignia: modo "puntos" (solo puntos, para tarjetas y listas) o "completa" (puntos + nombre) */
function impBadge(tipo, k, modo){
  const d = impNivel(tipo, k); if (!d) return "";
  const nombre = impT("n" + Math.floor(d.n)), lab = impT("aria", { n: impDec(d.n), t: nombre.toLowerCase() }) + " " + d.motivo;
  const pts = impPts(d.n);
  return '<span class="imp imp-' + Math.floor(d.n) + (modo === "completa" ? " imp-full" : "") + '" role="img" aria-label="' + impEsc(lab) + '" title="' + impEsc(nombre + ": " + d.motivo) + '">' +
    '<span class="imp-pts" aria-hidden="true">' + pts + "</span>" + (modo === "completa" ? '<span class="imp-nom" aria-hidden="true">' + impEsc(nombre) + "</span>" : "") + "</span>";
}
/* motivo visible (para la ficha) */
function impMotivo(tipo, k){
  const d = impNivel(tipo, k); if (!d) return "";
  return '<p class="imp-motivo"><span>' + impEsc(impT("por")) + ":</span> " + impEsc(d.motivo) + "</p>";
}
/* leyenda plegada */
function impLeyenda(){
  if (typeof IMPRESCINDIBLES === "undefined") return "";
  return '<details class="imp-leyenda"><summary>' + impEsc(impT("leyTit")) + '</summary><ul>' +
    [5, 4, 3, 2, 1].map(n => '<li><span class="imp imp-' + n + ' imp-full" aria-hidden="true"><span class="imp-pts">' +
      [1, 2, 3, 4, 5].map(i => '<i class="imp-p' + (i <= n ? " imp-on" : "") + '"></i>').join("") + '</span><span class="imp-nom">' + impEsc(impT("n" + n)) + "</span></span> " +
      impEsc(impT("ley" + n)) + "</li>").join("") +
    '<li><span class="imp imp-3 imp-full" aria-hidden="true"><span class="imp-pts">' + impPts(3.5) + '</span></span> ' + impEsc(impT("leyMedio")) + '</li>' +
    '</ul><p class="imp-leypie">' + impEsc(impT("leyPie")) + "</p></details>";
}
