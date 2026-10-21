"use strict";
/* (21-10) Étimos: del latín y el griego a la filosofía (Bachillerato) — transversalidad con Latín.
   Para cada concepto clave, su raíz griega (transliterada) y su raíz latina, y su forma en castellano
   y en euskera. La explicación etimológica va en `def`. Cumple la SA2 de Latín (etimología, evolución
   latín→castellano/euskera) y la reflexión interlingüística. Griego siempre transliterado y en cursiva;
   latín citado con rigor; euskera según el Hiztegia de Euskaltzaindia (ver «Para saber más»).
   Copiado igual a fil y hf (no lleva `subject`): las raíces valen para las dos materias.
   Solo `t` y `def` se traducen (tm); gr/lat/cast/eusk son formas de comparación y NO se traducen
   (añadidos a KEY_BLACKLIST en web_i18n/i18n_lib.js). */
const ETIMOS = [
 {"t": "Sustancia", "id": "et-sustancia", "area": "Metafísica",
  "gr": "οὐσία (*ousía*); ὑπόστασις (*hypóstasis*)", "lat": "substantia", "cast": "sustancia", "eusk": "substantzia",
  "def": "El latín *substantia* —de *sub-*, «debajo», y *stare*, «estar»— calca el griego *hypóstasis*, «lo que está debajo». Nombra lo que permanece bajo los cambios y existe por sí mismo; en Aristóteles, el sujeto último del que todo lo demás se predica."},
 {"t": "Accidente", "id": "et-accidente", "area": "Metafísica",
  "gr": "συμβεβηκός (*symbebēkós*)", "lat": "accidens", "cast": "accidente", "eusk": "akzidente",
  "def": "Del latín *accidere*, «caer sobre, sobrevenir» (*ad-* + *cadere*, «caer»), que traduce el griego *symbebēkós*, «lo que acompaña». Es lo que una cosa tiene pero podría no tener sin dejar de ser lo que es (el color, el tamaño), frente a la sustancia."},
 {"t": "Esencia", "id": "et-esencia", "area": "Metafísica",
  "gr": "τὸ τί ἦν εἶναι (*to tí ên eînai*); οὐσία (*ousía*)", "lat": "essentia", "cast": "esencia", "eusk": "esentzia",
  "def": "Los romanos formaron *essentia* sobre *esse*, «ser», para traducir la difícil fórmula griega de Aristóteles «lo que era ser». Es aquello que hace que algo sea lo que es y no otra cosa: su definición."},
 {"t": "Causa", "id": "et-causa", "area": "Metafísica",
  "gr": "αἰτία (*aitía*)", "lat": "causa", "cast": "causa", "eusk": "kausa",
  "def": "El latín *causa* significaba «motivo» y también «pleito judicial». Traduce el griego *aitía*, que une el sentido de «causa» y el de «culpa». Es aquello por lo que algo es o llega a ser; Aristóteles distinguió cuatro: material, formal, eficiente y final."},
 {"t": "Materia", "id": "et-materia", "area": "Metafísica",
  "gr": "ὕλη (*hýlē*)", "lat": "materia", "cast": "materia", "eusk": "materia",
  "def": "Tanto el griego *hýlē* como el latín *materia* significaron primero «madera»: la materia prima del carpintero sirvió de metáfora. Es aquello de lo que algo está hecho, lo indeterminado que recibe una forma."},
 {"t": "Forma", "id": "et-forma", "area": "Metafísica",
  "gr": "μορφή (*morphḗ*); εἶδος (*eîdos*)", "lat": "forma", "cast": "forma", "eusk": "forma",
  "def": "El latín *forma* traduce a la vez el griego *morphḗ*, «figura», y *eîdos*, «aspecto, especie» (de donde también «idea»). Es lo que determina la materia y hace que una cosa sea tal cosa: su estructura o esencia."},
 {"t": "Naturaleza", "id": "et-naturaleza", "area": "Metafísica",
  "gr": "φύσις (*physis*)", "lat": "natura", "cast": "naturaleza", "eusk": "natura",
  "def": "El latín *natura* —de *nasci*, «nacer»— traduce con exactitud el griego *physis*, de *phýō*, «brotar, nacer». Es el principio interno por el que las cosas crecen, se mueven y son lo que son."},
 {"t": "Razón", "id": "et-razon", "area": "Epistemología",
  "gr": "λόγος (*lógos*)", "lat": "ratio", "cast": "razón (y «ración», «racional»)", "eusk": "arrazoi",
  "def": "El latín *ratio* —de *reri*, «calcular, pensar»— traduce el griego *lógos*, que significaba a la vez «palabra», «cálculo» y «medida». Es la facultad de pensar y dar cuenta de las cosas, y también la proporción o el cálculo."},
 {"t": "Virtud", "id": "et-virtud", "area": "Ética",
  "gr": "ἀρετή (*aretḗ*)", "lat": "virtus", "cast": "virtud", "eusk": "bertute",
  "def": "El latín *virtus* nació de *vir*, «varón», ligado al valor guerrero; traduce el griego *aretḗ*, «excelencia», que valía para cualquier cosa (también un buen caballo tiene su *aretḗ*). Es la disposición que hace bueno a quien la tiene y buena su obra."},
 {"t": "Conciencia", "id": "et-conciencia", "area": "Antropología",
  "gr": "συνείδησις (*syneídēsis*)", "lat": "conscientia", "cast": "conciencia", "eusk": "kontzientzia",
  "def": "El latín *conscientia* —de *con-*, «con», y *scire*, «saber»— calca el griego *syneídēsis*: un saber que se tiene «con» uno mismo. Es el saber del sujeto sobre sí y sobre sus actos, incluida la conciencia moral."},
 {"t": "Alma", "id": "et-alma", "area": "Antropología",
  "gr": "ψυχή (*psykhḗ*)", "lat": "anima", "cast": "alma", "eusk": "arima",
  "def": "Tanto el griego *psykhḗ* como el latín *anima* nacen de la imagen del aliento (*anima* se emparenta con el griego *ánemos*, «viento»): el ser vivo es el que respira. Nombra el principio de la vida y de la actividad psíquica."},
 {"t": "Verdad", "id": "et-verdad", "area": "Epistemología",
  "gr": "ἀλήθεια (*alḗtheia*)", "lat": "veritas", "cast": "verdad", "eusk": "egia",
  "def": "El griego *alḗtheia* —de *a-* privativa y *lḗthē*, «olvido»— es «desvelamiento», lo que se muestra sin ocultarse; el latín *veritas*, de *verus*, «verdadero», mira más bien a la fidelidad. Es la concordancia del juicio con la realidad."},
 {"t": "Entendimiento", "id": "et-entendimiento", "area": "Epistemología",
  "gr": "νοῦς (*noûs*)", "lat": "intellectus", "cast": "entendimiento, intelecto", "eusk": "adimen",
  "def": "El latín *intellectus* —de *intus*, «dentro», y *legere*, «leer, recoger»— es «leer por dentro», y traduce el griego *noûs*, «mente». Es la facultad de captar lo inteligible, la parte más alta del alma para Platón y Aristóteles."},
 {"t": "Principio", "id": "et-principio", "area": "Metafísica",
  "gr": "ἀρχή (*arkhḗ*)", "lat": "principium", "cast": "principio", "eusk": "hastapen, printzipio",
  "def": "El griego *arkhḗ* une «comienzo» y «mando», como el latín *principium* —de *princeps*, «el primero»— une «lo primero» y «lo que rige». Es aquello de lo que algo procede, en el ser, en el conocer o en el obrar; para los presocráticos, el origen de todo."}
];
