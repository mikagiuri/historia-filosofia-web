"use strict";
/* ===== Imprescindibles para la Historia de la Filosofía: nivel 5-1 (GENERADO, no editar a mano) =====
   node tools/build_imprescindibles.js · fuente: tools/imprescindibles_escala_2026-10-19.csv (escala del informe del 19-10-2026, §4).
   Criterio: primero la ley (decreto 76/2023: con asterisco = 4, nombrado = 3, no nombrado = 2 como mucho), después la PAU
   (lecturas = 5) y los criterios propios (±1, escritos en el motivo). Cada entrada: [nivel, motivo]. */
const IMPRESCINDIBLES = {
 "autores": {
  "platon": [
   5,
   "Lectura PAU (República VII) y eje del bloque A"
  ],
  "descartes": [
   5,
   "Lectura PAU (Discurso II-IV); texto del Ej. 1 en la PAU ordinaria 2026"
  ],
  "kant": [
   5,
   "Lectura PAU (¿Qué es la Ilustración?); Ilustración y autonomía, lo que más cae"
  ],
  "nietzsche": [
   5,
   "Lectura PAU (Ecce Homo, «Por qué soy un destino»)"
  ],
  "beauvoir": [
   5,
   "Lectura PAU (El segundo sexo, Conclusión); texto del Ej. 1 en la extraordinaria 2026"
  ],
  "protagoras": [
   4,
   "Decreto 5*: «los sofistas y Sócrates»; Ej. 3 PAU 2026 (críticas a los sofistas)"
  ],
  "gorgias": [
   4,
   "Sofistas (decreto 5*); mismo Ej. 3 PAU 2026"
  ],
  "socrates": [
   4,
   "Decreto 5* y 8*; intelectualismo moral (disertación PAU 2026) y crítica a los sofistas (Ej. 3 PAU 2026)"
  ],
  "aspasia": [
   4,
   "Nombrada en el decreto (5*); la extraordinaria 2026 pidió «la mujer en la cultura griega y medieval»"
  ],
  "diogenes": [
   4,
   "P1: figura del cinismo (escuela con asterisco, 10*)"
  ],
  "aristoteles": [
   4,
   "Decreto 6*-9; contrapunto obligado de Platón en la 1.2 A"
  ],
  "pirron": [
   4,
   "P1: fundador del escepticismo (escuela con asterisco, 10*)"
  ],
  "epicuro": [
   4,
   "P1: fundador del epicureísmo (escuela con asterisco, 10*); disertaciones sobre la felicidad"
  ],
  "zenon": [
   4,
   "P1: fundador del estoicismo (escuela con asterisco, 10*)"
  ],
  "agustin": [
   4,
   "Decreto 11*; Ciudad de Dios y problema del mal, de lo más preguntado"
  ],
  "tomas": [
   4,
   "Decreto 11*-12*; fe y razón (Ej. 3 extraordinaria 2026) y cinco vías"
  ],
  "ockham": [
   4,
   "Nombrado en el decreto 11*; separación fe-razón"
  ],
  "hobbes": [
   4,
   "Decreto 15 y 16*: materialismo y contrato"
  ],
  "locke": [
   4,
   "Decreto 16*: contrato y derechos naturales; empirismo para comparar con Descartes"
  ],
  "hume": [
   4,
   "Decreto 14*: pareja de Descartes en racionalismo-empirismo (Ej. 3 extraordinaria 2026)"
  ],
  "rousseau": [
   4,
   "Decreto 16*: voluntad general"
  ],
  "bentham": [
   4,
   "Decreto 17* y 20*: utilitarismo"
  ],
  "gouges": [
   4,
   "Decreto 18*: primera ola feminista"
  ],
  "wollstonecraft": [
   4,
   "Decreto 18*: primera ola feminista; Ej. 3 PAU 2026 «aportaciones del pensamiento feminista»"
  ],
  "mill": [
   4,
   "Decreto 17* y 20*: utilitarismo frente a Kant"
  ],
  "marx": [
   4,
   "Decreto 21*-22*; alienación (PAU 2025), lo más preguntado del siglo XIX"
  ],
  "freud": [
   4,
   "Decreto 21*: maestros de la sospecha"
  ],
  "ortega": [
   4,
   "Decreto 25 (3) + P2: «proyecto abierto», disertación de la extraordinaria 2026"
  ],
  "horkheimer": [
   4,
   "Decreto 22*: Escuela de Fráncfort"
  ],
  "adorno": [
   4,
   "Decreto 22*: Escuela de Fráncfort"
  ],
  "zambrano": [
   4,
   "Decreto 25 con asterisco propio (razón poética)"
  ],
  "sartre": [
   4,
   "Decreto 25; comparación natural de Beauvoir; disertación extraordinaria 2026 (proyecto abierto)"
  ],
  "arendt": [
   5,
   "Revisión del profesor (20-10-2026): Hannah Arendt, PAU"
  ],
  "habermas": [
   4,
   "Decreto 22-23*: polémica con Popper y reforma de la modernidad"
  ],
  "tales": [
   3,
   "Decreto 3-4; paso del mito al logos"
  ],
  "anaximandro": [
   3,
   "Presocrático: el decreto nombra «los presocráticos» (4); ápeiron"
  ],
  "anaximenes": [
   3,
   "Presocrático (grupo nombrado en el decreto, 4)"
  ],
  "pitagoras": [
   3,
   "Decreto 4; matemática y alma en Platón"
  ],
  "jenofanes": [
   3,
   "Presocrático (grupo nombrado, 3-4): crítica de la religión"
  ],
  "heraclito": [
   3,
   "Decreto 4; el devenir, la otra mitad del problema de Platón"
  ],
  "parmenides": [
   3,
   "Decreto 4 (presocráticos); P1: sin el ser inmutable no se entiende la teoría de las Ideas"
  ],
  "anaxagoras": [
   3,
   "Presocrático (grupo nombrado, 4): nous"
  ],
  "empedocles": [
   3,
   "Presocrático (grupo nombrado, 4)"
  ],
  "zenon_elea": [
   3,
   "Presocrático (grupo nombrado, 4): paradojas"
  ],
  "meliso": [
   3,
   "Presocrático eleata (grupo nombrado, 4)"
  ],
  "leucipo": [
   3,
   "Presocrático (grupo nombrado, 4): atomismo"
  ],
  "filolao": [
   3,
   "Presocrático pitagórico (grupo nombrado, 4)"
  ],
  "democrito": [
   3,
   "Decreto 4; atomismo, raíz del materialismo moderno (15)"
  ],
  "antistenes": [
   3,
   "Cínico (10*)"
  ],
  "arquitas": [
   3,
   "Presocrático pitagórico (grupo nombrado, 4)"
  ],
  "crates": [
   3,
   "Cínico (10*)"
  ],
  "cleantes": [
   3,
   "Estoico (10*)"
  ],
  "timon": [
   3,
   "Escéptico (10*)"
  ],
  "arcesilao": [
   3,
   "Escéptico académico (10*)"
  ],
  "crisipo": [
   3,
   "Estoico (10*)"
  ],
  "carneades": [
   3,
   "Escéptico académico (10*)"
  ],
  "seneca": [
   3,
   "Decreto 10*: estoicismo; disertación sobre la felicidad"
  ],
  "epicteto": [
   3,
   "Estoico (escuela con asterisco en el decreto, 10*)"
  ],
  "marco_aurelio": [
   3,
   "Estoico (10*)"
  ],
  "hipatia": [
   3,
   "Nombrada en el decreto 10"
  ],
  "anselmo": [
   3,
   "Decreto 11: existencia de Dios «en los distintos autores»"
  ],
  "hildegarda": [
   3,
   "Nombrada en el decreto 11; mujer medieval (extraordinaria 2026)"
  ],
  "averroes": [
   3,
   "Decreto 12*: fe y razón (doble verdad)"
  ],
  "maquiavelo": [
   3,
   "Nombrado en el decreto 16*"
  ],
  "copernico": [
   3,
   "Decreto 13*: revolución científica"
  ],
  "lutero": [
   3,
   "Decreto 13*: protestantismo"
  ],
  "calvino": [
   3,
   "Decreto 13: protestantismo"
  ],
  "francis_bacon": [
   3,
   "Decreto 13*: método inductivo; comparación con Descartes"
  ],
  "galileo": [
   3,
   "Decreto 13*: revolución científica"
  ],
  "kepler": [
   3,
   "Decreto 13: revolución científica"
  ],
  "newton": [
   3,
   "Decreto 13*: revolución científica"
  ],
  "montesquieu": [
   3,
   "Decreto 16 y 18: separación de poderes"
  ],
  "voltaire": [
   3,
   "Decreto 18: proyecto ilustrado"
  ],
  "lamettrie": [
   3,
   "Decreto 15: «el materialismo desde Hobbes a la Ilustración»"
  ],
  "diderot": [
   3,
   "Decreto 18: proyecto ilustrado (la Enciclopedia)"
  ],
  "helvetius": [
   3,
   "Decreto 15: materialismo ilustrado"
  ],
  "dalembert": [
   3,
   "Decreto 18: proyecto ilustrado (la Enciclopedia)"
  ],
  "holbach": [
   3,
   "Decreto 15: materialismo ilustrado"
  ],
  "smith": [
   3,
   "Decreto 17*: liberalismo y origen del capitalismo"
  ],
  "condorcet": [
   3,
   "Decreto 18: proyecto ilustrado, progreso y derechos"
  ],
  "hegel": [
   3,
   "No nombrado (2) + P1: llave de la dialéctica de Marx (21-22)"
  ],
  "comte": [
   3,
   "Nombrado en el decreto 13"
  ],
  "feuerbach": [
   3,
   "No nombrado (2) + P1: alienación religiosa, puente a Marx (21)"
  ],
  "unamuno": [
   3,
   "Nombrado en el decreto 25"
  ],
  "russell": [
   3,
   "Decreto 24: filosofía analítica"
  ],
  "moore": [
   3,
   "Decreto 24: filosofía analítica"
  ],
  "schlick": [
   3,
   "Decreto 24: filosofía analítica (Círculo de Viena)"
  ],
  "wittgenstein": [
   3,
   "Nombrado en el decreto 24"
  ],
  "heidegger": [
   3,
   "Nombrado en el decreto 25"
  ],
  "carnap": [
   3,
   "Decreto 24: filosofía analítica (Círculo de Viena)"
  ],
  "benjamin": [
   3,
   "Escuela de Fráncfort (22*)"
  ],
  "marcuse": [
   3,
   "Escuela de Fráncfort (22*)"
  ],
  "popper": [
   3,
   "Decreto 22: polémica Popper-Habermas"
  ],
  "camus": [
   3,
   "Decreto 25: existencialismo"
  ],
  "rawls": [
   3,
   "Nombrado en el decreto 22"
  ],
  "lyotard": [
   3,
   "Fin de los metarrelatos (23*)"
  ],
  "bauman": [
   3,
   "Decreto 27* (4) − P3: basta uno de la lista"
  ],
  "deleuze": [
   3,
   "Decreto 23: herencia posmoderna"
  ],
  "foucault": [
   3,
   "Rupturistas frente a Habermas (23*)"
  ],
  "txillardegi": [
   3,
   "Nombrado en el decreto 24"
  ],
  "baudrillard": [
   3,
   "Decreto 23: herencia posmoderna, simulacro"
  ],
  "derrida": [
   3,
   "Decreto 23: herencia posmoderna, deconstrucción"
  ],
  "rorty": [
   3,
   "Decreto 23: herencia posmoderna"
  ],
  "vattimo": [
   3,
   "Decreto 23: herencia posmoderna, pensamiento débil"
  ],
  "azurmendi": [
   3,
   "Nombrado en el decreto 20"
  ],
  "nussbaum": [
   3,
   "Decreto 27* (4) − P3: basta uno de la lista"
  ],
  "butler": [
   3,
   "Decreto 27* (4) − P3 (basta uno de la lista); continuidad de Beauvoir (26)"
  ],
  "han": [
   3,
   "Decreto 27* (4) − P3: basta uno de la lista"
  ],
  "herrero": [
   3,
   "Decreto 27* (4) − P3: basta uno de la lista"
  ],
  "klein": [
   3,
   "Decreto 27* (4) − P3: basta uno de la lista"
  ],
  "preciado": [
   3,
   "Decreto 27* (4) − P3: basta uno de la lista"
  ],
  "homero": [
   2,
   "Contexto del mito (3)"
  ],
  "hesiodo": [
   2,
   "Contexto del mito (3)"
  ],
  "plotino": [
   2,
   "Puente de Platón a Agustín (11-12)"
  ],
  "boecio": [
   2,
   "Universales y fe-razón (11)"
  ],
  "avicena": [
   2,
   "Fe y razón en el islam (12)"
  ],
  "abelardo": [
   2,
   "Problema de los universales (11)"
  ],
  "maimonides": [
   2,
   "Fe y razón en el judaísmo (12)"
  ],
  "pizan": [
   2,
   "Mujer medieval (11) y utopías"
  ],
  "pico": [
   2,
   "Dignidad humana en el Renacimiento (13)"
  ],
  "erasmo": [
   2,
   "Humanismo (13)"
  ],
  "tomas_moro": [
   2,
   "Utopía (13, 16)"
  ],
  "montaigne": [
   2,
   "Escepticismo moderno, contexto de Descartes (13-14)"
  ],
  "isabel": [
   2,
   "Interlocutora de Descartes (14-15)"
  ],
  "spinoza": [
   2,
   "Debate de la sustancia (15): monismo frente a Descartes"
  ],
  "leibniz": [
   2,
   "Debate de la sustancia (15) y racionalismo (14)"
  ],
  "berkeley": [
   2,
   "Empirismo (14)"
  ],
  "schopenhauer": [
   2,
   "Fondo de Nietzsche (21, 23)"
  ],
  "darwin": [
   2,
   "Fondo de la sospecha (21)"
  ],
  "kierkegaard": [
   2,
   "Precursor del existencialismo (25)"
  ],
  "zetkin": [
   2,
   "Crítica del capitalismo (22)"
  ],
  "husserl": [
   2,
   "Fenomenología, fondo de Heidegger (25)"
  ],
  "salome": [
   2,
   "Interlocutora de Nietzsche (23)"
  ],
  "luxemburgo": [
   2,
   "Crítica del capitalismo (22)"
  ],
  "maeztu": [
   2,
   "Filosofía en Euskal Herria (25)"
  ],
  "gramsci": [
   2,
   "Hegemonía, crítica del capitalismo (22)"
  ],
  "gaos": [
   2,
   "Escuela de Madrid y exilio (25)"
  ],
  "ricoeur": [
   2,
   "Acuñó «maestros de la sospecha» (21)"
  ],
  "kuhn": [
   2,
   "Filosofía de la ciencia (24)"
  ],
  "solon": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "lao_zi": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "confucio": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "policleto": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "buda": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "trasimaco": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "hipias": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "aristipo": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "espeusipo": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "mencio": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "teofrasto": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "hiparquia": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "straton": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "ciceron": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "quintiliano": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "tertuliano": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "isidoro": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "al_kindi": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "escoto_erigena": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "al_ghazali": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "avempace": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "eloisa": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "alberto_magno": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "buenaventura": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "roger_bacon": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "llull": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "porete": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "dante": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "duns_escoto": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "nicolas_cusa": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "leonardo": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "vitoria": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "las_casas": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "sepulveda": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "vives": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "servet": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "giordano_bruno": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "suarez": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "campanella": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "harvey": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "gracian": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "pascal": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "malebranche": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "bayle": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "feijoo": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "du_chatelet": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "euler": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "mably": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "baumgarten": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "morelly": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "lessing": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "mendelssohn": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "hamann": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "jefferson": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "jacobi": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "paley": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "lamarck": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "herder": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "jovellanos": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "goethe": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "roux": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "hamilton": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "godwin": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "hebert": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "schiller": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "babeuf": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "saint-simon": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "buonarroti": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "fichte": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "malthus": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "schleiermacher": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "holderlin": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "leclerc": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "owen": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "fourier": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "novalis": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "schlegel": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "laborde": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "thompson": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "schelling": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "lamennais": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "cabet": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "heine": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "balzac": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "de_morgan": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "gay": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "considerant": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "dezamy": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "proudhon": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "balmes": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "dickens": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "buchner": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "boole": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "mendel": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "wallace": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "tylor": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "venn": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "kropotkin": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "james": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "frege": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "bergson": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "dewey": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "whitehead": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "weber": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "curie": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "kollontai": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "scheler": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "einstein": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "jaspers": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "sapir": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "duchamp": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "whorf": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "gadamer": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "ryle": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "copleston": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "weil": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "turing": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "shannon": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "franklin": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "danto": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "feyerabend": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "dickie": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "wilson": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "heller": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "debord": [
   1,
   "No aparece en la teoría de HF (curiosidad o 1.º)"
  ],
  "ingham": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "chalmers": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ],
  "bostrom": [
   1,
   "Solo en exploraciones o de contexto (ampliación)"
  ]
 },
 "temasHf": {
  "1": [
   3,
   "Saber del decreto sin asterisco: punto de partida del curso"
  ],
  "2": [
   3,
   "Revisión del profesor (20-10-2026)"
  ],
  "3": [
   3,
   "Revisión del profesor (20-10-2026)"
  ],
  "4": [
   3.5,
   "Revisión del profesor (20-10-2026)"
  ],
  "5": [
   4,
   "Decreto: «los sofistas y Sócrates*»; Ej. 3 de la PAU 2026"
  ],
  "6": [
   5,
   "Lectura PAU: República VII"
  ],
  "7": [
   5,
   "Revisión del profesor (20-10-2026)"
  ],
  "8": [
   5,
   "Revisión del profesor (20-10-2026)"
  ],
  "9": [
   5,
   "Revisión del profesor (20-10-2026)"
  ],
  "10": [
   4,
   "Decreto: «estoicismo, epicureísmo, cinismo y escepticismo*»"
  ],
  "11": [
   3,
   "Revisión del profesor (20-10-2026)"
  ],
  "12": [
   3.5,
   "Revisión del profesor (20-10-2026)"
  ],
  "13": [
   3.5,
   "Revisión del profesor (20-10-2026)"
  ],
  "14": [
   5,
   "Lectura PAU: Discurso del método II-IV"
  ],
  "15": [
   5,
   "Revisión del profesor (20-10-2026)"
  ],
  "16": [
   4,
   "Decreto: «origen y fundamento de la sociedad y el poder*»"
  ],
  "17": [
   3.5,
   "Revisión del profesor (20-10-2026)"
  ],
  "18": [
   5,
   "Lectura PAU: ¿Qué es la Ilustración?"
  ],
  "19": [
   5,
   "Revisión del profesor (20-10-2026)"
  ],
  "20": [
   4,
   "Decreto: «la ética kantiana frente al utilitarismo*»"
  ],
  "21": [
   5,
   "Lectura PAU: Ecce Homo (Nietzsche) y Marx; revisión del profesor (20-10-2026)"
  ],
  "22": [
   4,
   "Decreto: «Escuela de Fráncfort*» y «Hannah Arendt*»"
  ],
  "23": [
   3,
   "Revisión del profesor (20-10-2026): la lectura PAU de Nietzsche se trabaja en el tema 21"
  ],
  "24": [
   3,
   "Decreto, sin asterisco"
  ],
  "25": [
   3.5,
   "Revisión del profesor (20-10-2026)"
  ],
  "26": [
   5,
   "Lectura PAU: El segundo sexo (Simone de Beauvoir)"
  ],
  "27": [
   3,
   "Revisión del profesor (20-10-2026)"
  ],
  "hf-ap": [
   5,
   "Revisión del profesor (20-10-2026): Platón, lectura PAU (República VII)"
  ],
  "hf-aa": [
   5,
   "Revisión del profesor (20-10-2026): Aristóteles, el sistema completo"
  ],
  "hf-descartes-makro": [
   5,
   "Revisión del profesor (20-10-2026): lectura PAU (Discurso del método II-IV)"
  ]
 },
 "diccionarioGrupos": {
  "1": [
   5,
   "Vocabulario de República VII, lectura de la PAU"
  ],
  "2": [
   5,
   "El alma en Platón: el epígrafe que más ha caído en la PAU"
  ],
  "3": [
   5,
   "Intelectualismo moral: decreto (con asterisco) y disertación de la PAU de 2026"
  ],
  "4": [
   5,
   "Vocabulario del Discurso del método, lectura de la PAU"
  ],
  "5": [
   5,
   "Vocabulario de ¿Qué es la Ilustración? y de la filosofía de Kant, lectura de la PAU"
  ],
  "6": [
   5,
   "Vocabulario de Ecce Homo, lectura de la PAU"
  ],
  "7": [
   5,
   "Vocabulario de El segundo sexo, lectura de la PAU"
  ],
  "8": [
   4,
   "Nietzsche: ha caído en la PAU o lo pide su lectura"
  ],
  "9": [
   4,
   "Saber con asterisco del decreto (bloque A: de Grecia al helenismo)"
  ],
  "10": [
   4,
   "Saber con asterisco del decreto (bloque B: de la Edad Media a la Modernidad)"
  ],
  "11": [
   4,
   "Saber con asterisco del decreto (bloque C: de la Modernidad a la posmodernidad)"
  ],
  "12": [
   3,
   "Lo nombra el currículo sin asterisco, o hace falta para entender lo anterior"
  ],
  "13": [
   2,
   "Contexto o ampliación útil para argumentar en la disertación"
  ],
  "14": [
   1,
   "Curiosidad o ampliación"
  ],
  "15": [
   4,
   "Vocabulario básico de la Ética de Spinoza (tema 15, nivel 5 en la revisión del profesor del 20-10-2026)"
  ]
 }
};
