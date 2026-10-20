"use strict";
/* ===== Vídeos en euskera de Ikusgela (18-10-2026) =====
   Vídeos de filosofía del canal de YouTube Ikusgela (lista «Filosofia» y cuatro afines), enlazados en la caja
   «Para seguir con este tema» (bloque «Ampliar», itinerario.js) de los temas de «temas» y en la ficha de Biografías
   (biografiasview.js) de cada «ilustre». Inventario y criterios: lab_iesmdb\encargos\ikusgela_videos_filosofia_2026-10-18.md.
   eu_titulo = título original del vídeo (no se traduce: KEY_BLACKLIST de web_i18n/i18n_lib.js); es = qué es, en
   castellano (se traduce por tm); en la web en euskera se muestra eu_titulo. Solo Bachillerato (build_eso.js lo excluye). */
const VIDEOS_EU = [
 { "id": "hLMqL4f1Cps", "eu_titulo": "PLATON ulertzeko gakoak", "es": "Claves para entender a Platón", "dur": "7:23", "ilustre": ["platon"], "temas": ["hf-platon", "hf-ap"] },
 { "id": "_R7q0Y4nbpo", "eu_titulo": "ARISTOTELES ulertzeko gakoak", "es": "Claves para entender a Aristóteles", "dur": "8:23", "ilustre": ["aristoteles"], "temas": ["hf-aa"] },
 { "id": "Je80djyzcKw", "eu_titulo": "DESCARTES ulertzeko gakoak", "es": "Claves para entender a Descartes", "dur": "6:38", "ilustre": ["descartes"], "temas": ["hf-racionalismo", "hf-descartes-makro"] },
 { "id": "Kohc7lE4xZ0", "eu_titulo": "KANT ulertzeko gakoak", "es": "Claves para entender a Kant", "dur": "7:32", "ilustre": ["kant"], "temas": ["hf-kant", "hf-etica-deber"] },
 { "id": "Aix3EsAoVbE", "eu_titulo": "NIETZSCHE ulertzeko gakoak", "es": "Claves para entender a Nietzsche", "dur": "6:54", "ilustre": ["nietzsche"], "temas": ["hf-sospecha", "hf-posmodernidad"] },
 { "id": "lZoRDLXywVM", "eu_titulo": "HANNAH ARENDT ulertzeko gakoak", "es": "Claves para entender a Hannah Arendt", "dur": "7:20", "ilustre": ["arendt"], "temas": ["fil-t6"] },
 { "id": "dG-ZQNMre1M", "eu_titulo": "SIMONE DE BEAUVOIR ulertzeko gakoak", "es": "Claves para entender a Simone de Beauvoir", "dur": "8:29", "ilustre": ["beauvoir"], "temas": ["hf-beauvoir", "fil-t1-filosofia-mujer"] },
 { "id": "Iy4c700Xhg4", "eu_titulo": "KARL MARX ulertzeko gakoak", "es": "Claves para entender a Karl Marx", "dur": "8:19", "ilustre": ["marx"], "temas": ["hf-sospecha", "hf-capitalismo"] },
 { "id": "-5FsijWPFmo", "eu_titulo": "MARY WOLLSTONECRAFT ulertzeko gakoak", "es": "Claves para entender a Mary Wollstonecraft", "dur": "6:56", "ilustre": ["wollstonecraft"], "temas": ["hf-ilustracion", "fil-t1-filosofia-mujer"] },
 { "id": "VjYP_sbg-b4", "eu_titulo": "MICHEL FOUCAULT ulertzeko gakoak", "es": "Claves para entender a Michel Foucault", "dur": "8:42", "ilustre": ["foucault"], "temas": ["hf-posmodernidad"] },
 { "id": "JIRC0qZJDws", "eu_titulo": "bell hooks ulertzeko gakoak", "es": "Claves para entender a bell hooks", "dur": "7:08", "ilustre": [], "temas": ["hf-beauvoir"] },
 { "id": "UqBGCUcbm-U", "eu_titulo": "SALLY HASLANGER ulertzeko gakoak", "es": "Claves para entender a Sally Haslanger", "dur": "8:36", "ilustre": [], "temas": ["hf-beauvoir"] },
 { "id": "nCPzALE1dr8", "eu_titulo": "JOXE AZURMENDI ulertzeko gakoak", "es": "Claves para entender a Joxe Azurmendi", "dur": "8:33", "ilustre": ["azurmendi"], "temas": ["hf-euskal-herria"] },
 { "id": "04HIWwv1cD4", "eu_titulo": "TXILLARDEGI ulertzeko gakoak", "es": "Claves para entender a Txillardegi", "dur": "6:46", "ilustre": ["txillardegi"], "temas": ["hf-euskal-herria"] },
 { "id": "KBifHbWze5w", "eu_titulo": "JUDITH BUTLER ulertzeko gakoak", "es": "Claves para entender a Judith Butler", "dur": "7:47", "ilustre": ["butler"], "temas": ["hf-beauvoir"] },
 { "id": "mq3mxGCVGOQ", "eu_titulo": "BYUNG-CHUL HAN ulertzeko gakoak", "es": "Claves para entender a Byung-Chul Han", "dur": "7:44", "ilustre": ["han"], "temas": ["hf-siglo21"] },
 { "id": "Epnly550qzE", "eu_titulo": "MIGUEL UNAMUNO ulertzeko gakoak", "es": "Claves para entender a Miguel de Unamuno", "dur": "8:32", "ilustre": ["unamuno"], "temas": ["hf-existencialismo", "hf-euskal-herria"] },
 { "id": "oGq25jquffk", "eu_titulo": "LUDWIG WITTGENSTEIN ulertzeko gakoak", "es": "Claves para entender a Ludwig Wittgenstein", "dur": "8:43", "ilustre": ["wittgenstein"], "temas": ["hf-analitica"] },
 { "id": "i4fqB-UH8qc", "eu_titulo": "Ideia jakin batzuk barneratuta jaiotzen gara? | ENPIRISMOA", "es": "¿Nacemos con algunas ideas ya dentro? El empirismo", "dur": "8:01", "ilustre": [], "temas": ["hf-racionalismo", "fil-t3"] },
 { "id": "rdt7Nktw1UE", "eu_titulo": "Arauak behar ditugu gizartean bizitzeko? | KONTRAKTUALISMOA", "es": "¿Necesitamos normas para vivir en sociedad? El contractualismo", "dur": "8:53", "ilustre": [], "temas": ["hf-contrato", "fil-t6"] },
 { "id": "XMEhVUZEON0", "eu_titulo": "Nola izan zoriontsu? | ESTOIZISMOA", "es": "¿Cómo ser feliz? El estoicismo", "dur": "7:33", "ilustre": [], "temas": ["hf-helenismo", "fil-helenismo"] },
 { "id": "BF0ZX6H2ENw", "eu_titulo": "Nola dakigu ez garela simulazio batean bizi? | ESZEPTIZISMO KARTESIARRA", "es": "¿Cómo sabemos que no vivimos en una simulación? El escepticismo cartesiano", "dur": "7:13", "ilustre": [], "temas": ["hf-descartes-simulacion", "hf-racionalismo"] },
 { "id": "OfDEvg5MHOg", "eu_titulo": "MARI LUZ ESTEBAN ulertzeko gakoak", "es": "Claves para entender a Mari Luz Esteban", "dur": "9:10", "ilustre": [], "temas": ["hf-beauvoir"] },
 { "id": "SWufM6vrbuI", "eu_titulo": "Ezin bada frogatu, ez da nire iraultza | POSITIBISMOA", "es": "Si no se puede probar, no es mi revolución: el positivismo", "dur": "8:36", "ilustre": [], "temas": ["hf-sospecha", "hf-analitica", "fil-t3"] },
 { "id": "ZzUk0BSvcGw", "eu_titulo": "DAVID HUME ulertzeko gakoak", "es": "Claves para entender a David Hume", "dur": "7:03", "ilustre": ["hume"], "temas": ["hf-racionalismo"] },
 { "id": "9WYd6Zm8Yik", "eu_titulo": "SIGMUND FREUD ulertzeko gakoak", "es": "Claves para entender a Sigmund Freud", "dur": "8:14", "ilustre": ["freud"], "temas": ["hf-sospecha"] },
 { "id": "4YDjEghhQYU", "eu_titulo": "Zoriontsu izateko formula? | EPIKUREISMOA", "es": "¿Una fórmula para ser feliz? El epicureísmo", "dur": "8:09", "ilustre": [], "temas": ["hf-helenismo", "fil-helenismo"] },
 { "id": "e-l8L6EzsFg", "eu_titulo": "Nork urratu du emakumeen askapen bidea? | EMAKUMEEN AUZIA", "es": "¿Quién abrió el camino de la liberación de las mujeres? La cuestión de las mujeres", "dur": "9:37", "ilustre": [], "temas": ["fil-t1-filosofia-mujer", "hf-filosofas-dialogo"] },
 { "id": "tmVR1LAubs8", "eu_titulo": "AYN RAND ulertzeko gakoak", "es": "Claves para entender a Ayn Rand", "dur": "9:06", "ilustre": [], "temas": ["hf-silicon-valley"] },
 { "id": "BHKYDCE3Qss", "eu_titulo": "Utopiak, zergatik eta zertarako? | UTOPIAK", "es": "Utopías: ¿por qué y para qué?", "dur": "8:28", "ilustre": [], "temas": ["hf-utopias-autoras", "hf-modernidad"] },
 { "id": "Dtr9H_OpVaU", "eu_titulo": "Mary Shelley-en Frankenstein, eleberri beldurgarri bezain filosofikoa", "es": "El Frankenstein de Mary Shelley, una novela tan terrorífica como filosófica", "dur": "8:35", "ilustre": [], "temas": ["fil-t2"] },
 { "id": "N6tM9u5OwN0", "eu_titulo": "Adimen artifizialak artea egin dezake?", "es": "¿Puede la inteligencia artificial hacer arte?", "dur": "6:53", "ilustre": [], "temas": ["fil-t7"] },
 { "id": "9AO8Vg3UuAI", "eu_titulo": "Teknozientzia: zientzia enpresa teknologiko handien esku?", "es": "Tecnociencia: ¿la ciencia en manos de las grandes empresas tecnológicas?", "dur": "6:07", "ilustre": [], "temas": ["hf-siglo21", "hf-silicon-valley"] },
 { "id": "puKloEvxJ0k", "eu_titulo": "Teknologiari begiratzeko bi modu: teknopositibismoa vs luddismoa", "es": "Dos maneras de mirar la tecnología: tecnopositivismo frente a ludismo", "dur": "4:21", "ilustre": [], "temas": ["hf-siglo21", "hf-silicon-valley"] }
];
