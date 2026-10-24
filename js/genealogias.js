"use strict";
/* ===== Genealogías: líneas de pensamiento a lo largo de la historia (vista diacrónica) =====
   (29-09) Complemento de los Cronogramas (sincronía): aquí no hay eje de años, sino el orden en que
   una tradición pasa de unos pensadores a otros. Relaciones deliberadamente aproximadas.
   lineas: {id, name, color, desc, biografia: [ids de BIOGRAFIAS en orden]}; un mismo pensador en varias
   líneas es un «transbordo». op: [{biografia: [idA, idB]}] oposiciones clave (línea roja discontinua). Los ids van en campos «biografia», que la traducción no toca.
   Solo ids con ficha en Biografías de Historia de la Filosofía (los nombres salen de BIOGRAFIAS). */
const GENEALOGIAS = {
 lineas: [
  { id: "idea", name: "Razón e Ideas", color: "#2f6fd6",
    desc: "El verdadero conocimiento viene de la razón, no de los sentidos.",
    biografia: ["parmenides", "platon", "plotino", "agustin", "anselmo", "descartes", "spinoza", "leibniz", "kant", "hegel"] },
  { id: "dual", name: "Dualismo alma-cuerpo", color: "#1b9e9e",
    desc: "El ser humano es dos cosas distintas: un alma o mente inmaterial y un cuerpo material.",
    biografia: ["pitagoras", "platon", "plotino", "agustin", "avicena", "descartes", "malebranche", "leibniz", "chalmers"] },
  { id: "exp", name: "Experiencia y ciencia", color: "#d95f02",
    desc: "Todo conocimiento empieza por la experiencia y se comprueba con ella.",
    biografia: ["aristoteles", "roger_bacon", "ockham", "francis_bacon", "galileo", "locke", "berkeley", "hume", "mill", "russell", "popper"] },
  { id: "mat", name: "Materia y naturaleza", color: "#7a5230",
    desc: "Solo existe la materia; también el ser humano se explica por la naturaleza.",
    biografia: ["leucipo", "democrito", "epicuro", "hobbes", "lamettrie", "holbach", "feuerbach", "darwin", "marx"] },
  { id: "fe", name: "Fe y razón", color: "#8a4b84",
    desc: "Cómo armonizar lo que se cree con lo que se demuestra.",
    biografia: ["plotino", "agustin", "escoto_erigena", "avicena", "anselmo", "averroes", "maimonides", "alberto_magno", "tomas", "duns_escoto", "ockham"] },
  { id: "esc", name: "Escepticismo", color: "#6b7a8f",
    desc: "No podemos alcanzar certezas: lo sensato es suspender el juicio o conformarse con lo probable.",
    biografia: ["gorgias", "pirron", "timon", "arcesilao", "carneades", "nicolas_cusa", "hume"] },
  { id: "duda", name: "Duda metódica y crítica", color: "#8f6600",
    desc: "Dudar para saber: la duda como método y la crítica de los límites del conocimiento.",
    biografia: ["socrates", "descartes", "hume", "kant", "popper"] },
  { id: "vida", name: "Felicidad y vida buena", color: "#2e9e6b",
    desc: "La ética como arte de vivir bien: virtud, placer, utilidad.",
    biografia: ["socrates", "aristipo", "aristoteles", "diogenes", "epicuro", "zenon", "spinoza", "hume", "bentham", "mill", "nussbaum"] },
  { id: "pol", name: "Poder y Estado", color: "#c0392b",
    desc: "Quién debe mandar y por qué obedecemos: de la polis al contrato y la democracia.",
    biografia: ["platon", "aristoteles", "maquiavelo", "hobbes", "locke", "montesquieu", "rousseau", "hamilton", "marx", "arendt", "rawls", "habermas"] },
  { id: "dia", name: "Devenir, dialéctica y crítica social", color: "#b44fc4",
    desc: "La realidad cambia por el choque de contrarios; la filosofía como crítica de la sociedad.",
    biografia: ["heraclito", "hegel", "feuerbach", "marx", "horkheimer", "adorno", "habermas"] },
  { id: "sos", name: "Sospecha y posmodernidad", color: "#e377c2",
    desc: "Detrás de la verdad y la conciencia hay intereses, pulsiones y poder.",
    biografia: ["nietzsche", "freud", "heidegger", "foucault", "lyotard", "baudrillard", "derrida", "vattimo"] },
  { id: "ex", name: "Existencia y libertad", color: "#3fa7c9",
    desc: "El ser humano concreto, su libertad y su angustia.",
    biografia: ["agustin", "nietzsche", "unamuno", "ortega", "heidegger", "zambrano", "sartre", "beauvoir"] },
  { id: "fem", name: "Mujeres y feminismo", color: "#a8b82e",
    desc: "De las filósofas olvidadas a la crítica del patriarcado y del género.",
    biografia: ["aspasia", "hipatia", "hildegarda", "eloisa", "isabel", "gouges", "wollstonecraft", "mill", "beauvoir", "butler", "herrero", "preciado"] },
  { id: "len", name: "Lógica y lenguaje", color: "#5b4fc4",
    desc: "Pensar bien es hablar con rigor: de la lógica al giro lingüístico.",
    biografia: ["aristoteles", "ockham", "llull", "leibniz", "russell", "wittgenstein", "carnap", "ryle", "popper"] }
 ],
 op: [
  { biografia: ["heraclito", "parmenides"] },
  { biografia: ["protagoras", "socrates"] },
  { biografia: ["platon", "aristoteles"] },
  { biografia: ["epicuro", "zenon"] },
  { biografia: ["tomas", "averroes"] },
  { biografia: ["tomas", "ockham"] },
  { biografia: ["descartes", "hume"] },
  { biografia: ["hobbes", "rousseau"] },
  { biografia: ["rousseau", "wollstonecraft"] },
  { biografia: ["kant", "bentham"] },
  { biografia: ["hegel", "marx"] },
  { biografia: ["hegel", "nietzsche"] },
  { biografia: ["marx", "popper"] },
  { biografia: ["habermas", "foucault"] },
  { biografia: ["sartre", "foucault"] },
  { biografia: ["descartes", "isabel"] },
  { biografia: ["descartes", "spinoza"] },
  { biografia: ["descartes", "ryle"] },
  { biografia: ["descartes", "pirron"] },
  { biografia: ["arcesilao", "zenon"] }
 ]
};

/* (18-10) Planos temáticos además del general: mismo dibujo (líneas, transbordos, oposiciones), con su propio
   conjunto de líneas. Se eligen con el selector «Plano» y tienen enlace propio (#genealogias/plano/<id>).
   «dios»: la historia de los argumentos sobre la existencia de Dios (exploración hf-cinco-vias, tema 12 de HF).
   Las líneas son argumentos; «Los críticos» reúne a quienes los atacaron, y las oposiciones marcan los choques. */
const GENEALOGIAS_PLANOS = [
 { id: "dios", name: "Pruebas de la existencia de Dios",
   desc: "Cómo pasaron los argumentos sobre Dios de unos pensadores a otros, de Platón al siglo XX, y quién los atacó.",
   lineas: [
  { id: "mov", name: "1.ª vía: el movimiento", color: "#e0a526",
    desc: "Todo lo que se mueve es movido por otro, y la cadena no puede ser infinita: hay un primer motor.",
    biografia: ["platon", "aristoteles", "averroes", "maimonides", "tomas"] },
  { id: "cau", name: "2.ª vía: la causa", color: "#3fa7c9",
    desc: "Nada es causa de sí mismo, y sin una primera causa no habría ninguna: hay una causa primera.",
    biografia: ["aristoteles", "avicena", "tomas", "duns_escoto", "ockham"] },
  { id: "con", name: "3.ª vía: la contingencia", color: "#7b61d9",
    desc: "Lo que podría no existir necesita otra cosa para existir: hay un ser necesario por sí mismo.",
    biografia: ["avicena", "maimonides", "tomas", "leibniz", "copleston"] },
  { id: "gra", name: "4.ª vía: los grados", color: "#b44fc4",
    desc: "Si hay cosas más o menos buenas y verdaderas, hay un máximo que es su medida y su causa.",
    biografia: ["platon", "agustin", "boecio", "anselmo", "tomas"] },
  { id: "ord", name: "5.ª vía: el orden", color: "#2e9e6b",
    desc: "Las cosas sin conocimiento actúan por un fin, como la flecha que dirige el arquero: hay una inteligencia que ordena la naturaleza.",
    biografia: ["ciceron", "tomas", "paley"] },
  { id: "ont", name: "Argumento ontológico", color: "#d95f02",
    desc: "Del solo concepto de Dios, «aquello mayor que lo cual nada puede pensarse», se seguiría que existe.",
    biografia: ["anselmo", "descartes", "leibniz"] },
  { id: "kal", name: "Kalam: el mundo empezó", color: "#9a7b5f",
    desc: "El mundo tuvo un comienzo, y todo lo que empieza a existir tiene una causa.",
    biografia: ["al_kindi", "al_ghazali", "buenaventura"] },
  { id: "cri", name: "Los críticos", color: "#6e6e78",
    desc: "Quienes pusieron en duda que la razón pueda demostrar la existencia de Dios.",
    biografia: ["hume", "kant", "darwin", "russell"] }
   ],
   op: [
  { biografia: ["anselmo", "tomas"] },
  { biografia: ["tomas", "buenaventura"] },
  { biografia: ["avicena", "averroes"] },
  { biografia: ["al_ghazali", "averroes"] },
  { biografia: ["descartes", "kant"] },
  { biografia: ["hume", "paley"] },
  { biografia: ["paley", "darwin"] },
  { biografia: ["russell", "copleston"] }
   ] }
];
