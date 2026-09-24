// Generado por tools/build_subject.js (hf) — alumnado, sin material del profesor.
const ESQUEMAS = {
 "AA-REL-02": {
  "subject": "hf",
  "block": "A",
  "tema": "Aristóteles",
  "title": "Las causas del cambio",
  "mermaid": "flowchart TD\n  center[\"LAS CAUSAS DEL CAMBIO\"]:::axis\n  intr[\"intrínsecas\"]\n  estr[\"extrínsecas\"]\n  mat[\"material\"]:::key\n  mat_e[\"el sustrato en que ocurre\"]\n  form[\"formal\"]:::key\n  form_e[\"la figura que se adopta\"]\n  erag[\"eficiente\"]:::key\n  erag_e[\"lo que lo pone en marcha\"]\n  xede[\"final\"]:::key\n  xede_e[\"el fin del cambio\"]\n  center -->|\"son estas\"| intr\n  center -->|\"son estas\"| estr\n  intr --> mat\n  intr --> form\n  estr --> erag\n  estr --> xede\n  mat -->|\"es\"| mat_e\n  form -->|\"es\"| form_e\n  erag -->|\"es\"| erag_e\n  xede -->|\"es\"| xede_e\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Por qué cambian las cosas y qué hace falta para explicar un cambio?",
   "raiz": "LAS CAUSAS DEL CAMBIO",
   "raiz_d": "Aristóteles responde a Parménides: el cambio es real y se puede explicar por sus causas.",
   "ramas": [
    {
     "rel": "se entiende como",
     "t": "Paso de la potencia al acto",
     "k": true,
     "a": "Aristóteles",
     "d": "La potencia es la posibilidad de ser; el acto, esa posibilidad ya realizada.",
     "c": [
      {
       "rel": "por ejemplo",
       "t": "El bronce llega a ser estatua",
       "d": "El bronce es estatua en potencia; una vez esculpido, lo es en acto."
      }
     ]
    },
    {
     "rel": "dentro de la cosa",
     "t": "Causas intrínsecas",
     "d": "Forman parte de la sustancia misma: su materia y su forma (hilemorfismo).",
     "c": [
      {
       "rel": "de qué está hecho",
       "t": "Causa material",
       "k": true,
       "d": "El sustrato que permanece durante el cambio: el bronce."
      },
      {
       "rel": "qué es",
       "t": "Causa formal",
       "k": true,
       "d": "La estructura o esencia que adquiere: la figura de la estatua."
      }
     ]
    },
    {
     "rel": "fuera de la cosa",
     "t": "Causas extrínsecas",
     "d": "No forman parte de la cosa, pero la producen y la orientan.",
     "c": [
      {
       "rel": "qué lo produce",
       "t": "Causa eficiente",
       "k": true,
       "d": "El agente que pone en marcha el cambio: el escultor."
      },
      {
       "rel": "para qué",
       "t": "Causa final",
       "k": true,
       "d": "El fin al que tiende el cambio: la estatua acabada y su propósito."
      }
     ]
    },
    {
     "rel": "de ahí una visión",
     "t": "Teleología",
     "d": "Todos los seres, también la naturaleza, tienden a un fin (finalismo).",
     "c": [
      {
       "rel": "su principio último",
       "t": "Motor inmóvil",
       "d": "Acto puro que, sin moverse, atrae todo lo demás como causa final."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Causa formal",
     "rel": "actualiza la potencia de la",
     "a": "Causa material"
    },
    {
     "de": "Causa final",
     "rel": "se generaliza en la",
     "a": "Teleología"
    }
   ],
   "idea": "Para Aristóteles, cambiar es pasar de la potencia al acto, y un cambio solo queda explicado del todo con sus cuatro causas: de qué, qué, quién y para qué. Todo en la naturaleza tiende a un fin."
  }
 },
 "BH-REL-01": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Hume y el empirismo",
  "mermaid": "flowchart TD\n  n0[\"HUME\"]\n  n1[\"Examen del conocimiento\"]\n  n2[\"percepciones\"]:::axis\n  n3[\"impresiones\"]\n  n4[\"ideas\"]\n  n5[\"organizadas por las leyes de asociación de la imaginación\"]\n  n6[\"contigüidad\"]\n  n7[\"causalidad\"]:::key\n  n8[\"semejanza\"]\n  n9[\"conocimiento fáctico\"]:::key\n  n10[\"relaciones entre ideas\"]:::key\n  n11[\"creencia basada en el hábito\"]\n  n12[\"conocimiento universal, necesario\"]\n  n13[\"crítica de la metafísica y la ciencia\"]:::axis\n  n14[\"base de la moral: emotivismo moral\"]:::key\n  n15[\"la idea de sustancia: mundo, dios, yo\"]\n  n16[\"la idea de conexión necesaria\"]\n  n17[\"en el sentimiento\"]\n  n18[\"fenomenismo\"]\n  n19[\"escepticismo\"]\n  n20[\"lo bueno\"]\n  n21[\"la acción\"]\n  n22[\"tolerancia: norma y actitud para la convivencia\"]\n  n23[\"en el pacto\"]\n  n0 --> n1\n  n1 -->|\"su base\"| n2\n  n2 -->|\"se dividen en dos\"| n3\n  n2 --> n4\n  n2 -->|\"son causa de:\"| n5\n  n5 --> n6\n  n5 --> n7\n  n5 --> n8\n  n7 -->|\"se aplican en:\"| n9\n  n8 -->|\"se aplican en:\"| n10\n  n9 -->|\"su base\"| n11\n  n10 -->|\"forman\"| n12\n  n11 --> n13\n  n13 --> n15\n  n13 --> n16\n  n12 --> n14\n  n14 -->|\"¿dónde?\"| n17\n  n15 -->|\"produce\"| n18\n  n16 -->|\"produce\"| n19\n  n17 -->|\"decide\"| n20\n  n17 --> n21\n  n19 -->|\"produce\"| n22\n  n20 -->|\"se expresa\"| n23\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué queda de la causalidad, la sustancia y la moral si solo vale lo que viene de una impresión?",
   "raiz": "LA CRÍTICA DE HUME",
   "raiz_d": "Hume aplica a las grandes ideas de la filosofía una prueba: ¿de qué impresión procede esta idea? Si no hay impresión, la idea no tiene fundamento.",
   "ramas": [
    {
     "rel": "primer blanco",
     "t": "La causalidad",
     "k": true,
     "d": "Creemos que la causa produce necesariamente el efecto.",
     "c": [
      {
       "rel": "la experiencia muestra",
       "t": "Sucesión y conjunción constante",
       "d": "Vemos que un hecho sigue a otro, una y otra vez."
      },
      {
       "rel": "pero no muestra",
       "t": "La conexión necesaria",
       "d": "No hay ninguna impresión del «tiene que ocurrir»: esa idea no procede de la experiencia."
      },
      {
       "rel": "se explica por",
       "t": "La costumbre",
       "k": true,
       "d": "La repetición crea en nosotros el hábito de esperar el efecto: es una creencia, no una razón."
      }
     ]
    },
    {
     "rel": "segundo blanco",
     "t": "La sustancia",
     "d": "Algo permanente que estaría debajo de las percepciones.",
     "c": [
      {
       "rel": "del mundo exterior",
       "t": "Solo tenemos percepciones",
       "d": "No podemos salir de ellas para comprobar que hay cuerpos que las causan."
      },
      {
       "rel": "del yo",
       "t": "Un haz de percepciones",
       "d": "No hay impresión de un yo fijo, solo un flujo de percepciones que se suceden."
      },
      {
       "rel": "de Dios",
       "t": "Dios como causa del mundo",
       "d": "No hay impresión de Dios, y deducirlo como causa exige una conexión necesaria que no conocemos."
      }
     ]
    },
    {
     "rel": "consecuencias",
     "t": "Límites del conocimiento",
     "k": true,
     "c": [
      {
       "rel": "en metafísica",
       "t": "Fenomenismo",
       "d": "Solo conocemos fenómenos, no la realidad en sí."
      },
      {
       "rel": "en ciencia",
       "t": "Conocimiento solo probable",
       "d": "Las leyes naturales generalizan lo observado; que se cumplan mañana no es necesario."
      },
      {
       "rel": "actitud final",
       "t": "Escepticismo moderado",
       "d": "No podemos fundar racionalmente estas creencias, pero la vida nos obliga a seguirlas."
      }
     ]
    },
    {
     "rel": "también en la moral",
     "t": "Emotivismo",
     "k": true,
     "d": "Los juicios morales expresan sentimientos de aprobación o rechazo, no hechos.",
     "c": [
      {
       "rel": "porque",
       "t": "La razón no mueve a actuar",
       "d": "«La razón es, y solo debe ser, esclava de las pasiones.»"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La costumbre",
     "rel": "hace que sea",
     "a": "Conocimiento solo probable"
    },
    {
     "de": "La conexión necesaria",
     "rel": "sin ella cae la prueba de",
     "a": "Dios como causa del mundo"
    }
   ],
   "idea": "Hume no niega que creamos en causas, cuerpos o un yo: muestra que esas creencias nacen de la costumbre y la imaginación, no de la razón ni de ninguna impresión."
  }
 },
 "BH-REL-02": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "El conocimiento en Hume",
  "mermaid": "flowchart TD\n  ezag[\"CONOCIMIENTO\"]:::axis\n  lock[\"Locke y Descartes\"]:::key\n  pertz[\"PERCEPCIONES\"]:::axis\n  eduk[\"todos los contenidos mentales\"]\n  inpr[\"impresiones\"]:::key\n  trin[\"intensas y vivas\"]\n  ideiak[\"ideas\"]:::key\n  ahul[\"débiles y no nítidas\"]\n  esper[\"EXPERIENCIA\"]:::axis\n  desc[\"Descartes\"]:::key\n  sortz[\"ideas innatas, adventicias y facticias\"]\n  ezag -->|\"como para estos\"| lock\n  ezag -->|\"es tener esto\"| pertz\n  pertz -->|\"son estos\"| eduk\n  pertz -->|\"pueden ser estas\"| inpr\n  pertz -->|\"pueden ser estas\"| ideiak\n  inpr -->|\"si son así\"| trin\n  inpr -->|\"producen estas\"| ideiak\n  ideiak -->|\"si son así\"| ahul\n  pertz -->|\"tienen este origen\"| esper\n  esper -->|\"a diferencia de este\"| desc\n  desc -->|\"que aceptaba esto\"| sortz\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿De dónde proceden nuestras ideas y qué tipos de conocimiento podemos alcanzar con ellas?",
   "raiz": "EL CONOCIMIENTO EN HUME",
   "raiz_d": "Empirismo: no hay ideas innatas; todo contenido de la mente procede de la experiencia.",
   "ramas": [
    {
     "rel": "materia prima",
     "t": "Percepciones",
     "a": "Hume",
     "d": "Todo lo que hay en la mente: ver, oír, recordar, imaginar, pensar.",
     "c": [
      {
       "rel": "las más vivas",
       "t": "Impresiones",
       "k": true,
       "d": "Percepciones vivas de la experiencia: lo que sentimos al ver, oír o desear."
      },
      {
       "rel": "copias débiles de ellas",
       "t": "Ideas",
       "d": "Lo que queda en la mente al recordar o pensar lo que antes sentimos."
      }
     ]
    },
    {
     "rel": "regla que se deduce",
     "t": "Criterio de la impresión",
     "k": true,
     "d": "Toda idea válida procede de una impresión previa.",
     "c": [
      {
       "rel": "consecuencia",
       "t": "Idea sin impresión: idea vacía",
       "d": "Para saber si una idea tiene sentido, hay que buscar la impresión de la que viene."
      },
      {
       "rel": "rechaza",
       "t": "Las ideas innatas",
       "a": "Descartes",
       "d": "La mente no trae contenidos de nacimiento."
      }
     ]
    },
    {
     "rel": "la imaginación las une",
     "t": "Asociación de ideas",
     "d": "Las ideas no se enlazan al azar: la imaginación las asocia según tres leyes.",
     "c": [
      {
       "rel": "por",
       "t": "Semejanza",
       "d": "Un retrato nos hace pensar en la persona retratada."
      },
      {
       "rel": "por",
       "t": "Contigüidad",
       "d": "Pensar en una calle nos lleva a la de al lado (en el espacio o en el tiempo)."
      },
      {
       "rel": "por",
       "t": "Causa y efecto",
       "d": "Ver humo nos hace pensar en el fuego."
      }
     ]
    },
    {
     "rel": "dos tipos de saber",
     "t": "Tipos de conocimiento",
     "k": true,
     "c": [
      {
       "rel": "a priori",
       "t": "Relaciones de ideas",
       "d": "Matemáticas y lógica: verdades necesarias; negarlas es contradictorio.",
       "c": [
        {
         "rel": "pero",
         "t": "No informan de los hechos",
         "d": "Solo comparan ideas entre sí."
        }
       ]
      },
      {
       "rel": "a posteriori",
       "t": "Cuestiones de hecho",
       "d": "Verdades contingentes, basadas en la experiencia: podrían ser de otro modo.",
       "c": [
        {
         "rel": "ejemplo",
         "t": "«El sol saldrá mañana»",
         "d": "Negarlo no es contradictorio: solo la experiencia lo respalda."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Cuestiones de hecho",
     "rel": "se apoyan en la relación de",
     "a": "Causa y efecto"
    }
   ],
   "idea": "Para Hume todo empieza en las impresiones: las ideas son sus copias, y solo hay dos saberes, las relaciones de ideas (necesarias) y las cuestiones de hecho (contingentes)."
  }
 },
 "CK-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Kant y la Ilustración",
  "mermaid": "flowchart TD\n  n0[\"LA FILOSOFÍA DE KANT\"]\n  n1[\"¿Qué es el hombre?\"]\n  n2[\"¿Qué puedo conocer?\"]:::axis\n  n3[\"¿Qué debo hacer?\"]:::axis\n  n4[\"¿Qué puedo esperar?\"]:::axis\n  n5[\"la libertad\"]\n  n6[\"la inmortalidad del alma\"]\n  n7[\"la existencia de Dios\"]\n  n8[\"condición de la moralidad\"]\n  n9[\"garantía del cumplimiento del deber\"]\n  n10[\"garantía del bien supremo: virtud + felicidad\"]\n  n11[\"partir del hecho de la ciencia\"]\n  n12[\"partir del hecho moral\"]\n  n13[\"uso teórico de la razón\"]\n  n14[\"uso práctico de la razón\"]\n  n15[\"sus condiciones\"]\n  n16[\"sus límites\"]\n  n17[\"condiciones a priori: universales de la ley moral\"]\n  n18[\"condiciones formales a priori\"]\n  n19[\"condiciones materiales: la experiencia\"]\n  n20[\"en el deber como forma de la ley\"]\n  n21[\"de la sensibilidad\"]\n  n22[\"del entendimiento\"]\n  n23[\"de la razón\"]\n  n24[\"en el imperativo categórico\"]:::key\n  n25[\"formas a priori: espacio y tiempo\"]:::key\n  n26[\"categorías\"]:::key\n  n27[\"ideas\"]\n  n0 --> n1\n  n1 --> n2\n  n2 -->|\"hace posible\"| n3\n  n3 -->|\"postula\"| n4\n  n4 --> n5\n  n4 --> n6\n  n4 --> n7\n  n5 --> n8\n  n6 --> n9\n  n7 --> n10\n  n2 --> n11\n  n3 --> n12\n  n11 -->|\"para examinar\"| n13\n  n12 -->|\"para examinar\"| n14\n  n13 -->|\"hace posible\"| n14\n  n13 --> n15\n  n13 -->|\"los constituyen\"| n16\n  n14 -->|\"las establece\"| n17\n  n15 -->|\"¿síntesis de qué son?\"| n18\n  n18 --> n21\n  n18 --> n22\n  n18 --> n23\n  n21 --> n25\n  n22 --> n26\n  n23 --> n27\n  n19 -->|\"no es conocimiento, pues las deja aparte\"| n16\n  n17 -->|\"las encuentra\"| n20\n  n20 -->|\"se expresa\"| n24\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué es el hombre, según Kant, y qué tiene que ver su filosofía con la Ilustración?",
   "raiz": "KANT: LA RAZÓN ILUSTRADA SE EXAMINA",
   "raiz_d": "El criticismo analiza los límites y alcances de la razón con tres preguntas que se resumen en una: ¿qué es el hombre?",
   "ramas": [
    {
     "rel": "actitud de partida",
     "t": "Sapere aude",
     "k": true,
     "a": "Kant",
     "d": "Lema de ¿Qué es la Ilustración? (1784): atrévete a pensar por ti mismo, sin la guía de otro.",
     "c": [
      {
       "rel": "para salir de la",
       "t": "Minoría de edad culpable",
       "d": "No es falta de inteligencia, sino de valor: la mantienen la pereza, la cobardía y los tutores."
      },
      {
       "rel": "solo necesita libertad para el",
       "t": "Uso público de la razón",
       "d": "Razonar como erudito ante el público lector. En el cargo (uso privado) se obedece."
      }
     ]
    },
    {
     "rel": "primera pregunta",
     "t": "¿Qué puedo conocer?",
     "d": "Uso teórico de la razón: parte del hecho de la ciencia.",
     "c": [
      {
       "rel": "conocer exige",
       "t": "Formas a priori y categorías",
       "d": "Espacio y tiempo (sensibilidad) y categorías (entendimiento) ordenan lo que da la experiencia."
      },
      {
       "rel": "límite",
       "t": "Solo conocemos fenómenos",
       "d": "No las cosas en sí: por eso la metafísica no puede ser ciencia."
      }
     ]
    },
    {
     "rel": "segunda pregunta",
     "t": "¿Qué debo hacer?",
     "d": "Uso práctico de la razón: parte del hecho moral.",
     "c": [
      {
       "rel": "responde con el",
       "t": "Imperativo categórico",
       "k": true,
       "d": "Mandato universal e incondicional: obrar por deber, no por interés ni por inclinación."
      },
      {
       "rel": "supone la",
       "t": "Autonomía moral",
       "d": "La razón se da a sí misma la ley, sin depender de Dios, de la autoridad ni de la felicidad."
      }
     ]
    },
    {
     "rel": "tercera pregunta",
     "t": "¿Qué puedo esperar?",
     "d": "La moral exige admitir lo que la razón teórica no puede demostrar.",
     "c": [
      {
       "rel": "responde con los",
       "t": "Postulados de la razón práctica",
       "k": true,
       "c": [
        {
         "rel": "primero",
         "t": "La libertad",
         "d": "Condición de la moralidad: si debo, es que puedo."
        },
        {
         "rel": "segundo",
         "t": "La inmortalidad del alma",
         "d": "Permite acercarse sin fin a la virtud plena."
        },
        {
         "rel": "tercero",
         "t": "La existencia de Dios",
         "d": "Garantiza el bien supremo: que virtud y felicidad vayan unidas."
        }
       ]
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Sapere aude",
     "rel": "es la misma exigencia que la",
     "a": "Autonomía moral"
    },
    {
     "de": "Solo conocemos fenómenos",
     "rel": "deja sitio a los",
     "a": "Postulados de la razón práctica"
    }
   ],
   "idea": "Kant es la Ilustración que se examina a sí misma: la razón reconoce que no puede conocer más allá de la experiencia, pero se da a sí misma la ley moral. Pensar y obrar por uno mismo es su núcleo."
  }
 },
 "CK-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El conocimiento sensible (Kant)",
  "mermaid": "flowchart TD\n  erreal[\"LA REALIDAD\"]:::axis\n  gbera[\"la cosa en sí\"]:::key\n  noum[\"el noúmeno\"]:::key\n  kaos[\"caos de sensaciones\"]:::axis\n  subj[\"el sujeto\"]:::key\n  forma[\"formas a priori de la sensibilidad\"]:::axis\n  puru[\"intuiciones puras\"]:::key\n  espa[\"espacio y tiempo\"]\n  objl[\"objeto del conocimiento sensible\"]:::key\n  enp[\"intuición empírica\"]\n  fen[\"fenómeno sensible\"]\n  niret[\"la cosa para mí\"]\n  erreal -->|\"es\"| gbera\n  erreal -->|\"es\"| noum\n  erreal -->|\"envía\"| kaos\n  kaos -->|\"lo componen\"| objl\n  objl -->|\"se llama así\"| enp\n  enp -->|\"o\"| fen\n  fen -->|\"esto es\"| niret\n  kaos -->|\"los organizan\"| forma\n  forma -->|\"se llaman así\"| puru\n  puru -->|\"son estas\"| espa\n  subj -->|\"las tiene\"| forma\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Cuando percibimos algo, ¿qué pone la realidad y qué pone el sujeto?",
   "raiz": "EL CONOCIMIENTO SENSIBLE",
   "raiz_d": "Primer paso del conocimiento según Kant (Estética trascendental): la sensibilidad recibe y ordena lo que nos llega.",
   "ramas": [
    {
     "rel": "lo que viene de fuera",
     "t": "La materia: las sensaciones",
     "d": "Lo que se recibe a posteriori, por la experiencia.",
     "c": [
      {
       "rel": "llega como",
       "t": "Un caos de impresiones",
       "d": "Datos sueltos, todavía sin orden."
      },
      {
       "rel": "procede de",
       "t": "La cosa en sí (noúmeno)",
       "k": true,
       "d": "La realidad tal como es en sí misma: nos afecta, pero nunca la conocemos."
      }
     ]
    },
    {
     "rel": "lo que pone el sujeto",
     "t": "Las formas a priori de la sensibilidad",
     "k": true,
     "d": "Estructuras previas a la experiencia que la hacen posible.",
     "c": [
      {
       "rel": "son",
       "t": "Espacio y tiempo",
       "d": "Todo lo que percibimos está en algún lugar y en algún momento."
      },
      {
       "rel": "por eso son también",
       "t": "Intuiciones puras",
       "d": "No se sacan de la experiencia: están en toda experiencia."
      },
      {
       "rel": "fundamentan",
       "t": "Las matemáticas",
       "d": "Geometría (espacio) y aritmética (tiempo) son conocimiento universal y necesario."
      }
     ]
    },
    {
     "rel": "resultado",
     "t": "El fenómeno",
     "k": true,
     "d": "La cosa tal como se me aparece: la cosa para mí.",
     "c": [
      {
       "rel": "se capta en la",
       "t": "Intuición empírica",
       "d": "Sensaciones ya situadas en el espacio y en el tiempo."
      },
      {
       "rel": "después lo piensa el",
       "t": "Entendimiento",
       "d": "Con sus categorías (causalidad, sustancia…) convierte el fenómeno en objeto conocido."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Espacio y tiempo",
     "rel": "ordenan",
     "a": "Un caos de impresiones"
    },
    {
     "de": "El fenómeno",
     "rel": "nunca coincide con",
     "a": "La cosa en sí (noúmeno)"
    }
   ],
   "idea": "Nunca percibimos la realidad «en sí»: percibimos fenómenos, es decir, sensaciones ordenadas por el espacio y el tiempo, que pone el propio sujeto."
  }
 },
 "CC-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Comte: la sociedad, la ley de los tres estadios y la ciencia positiva",
  "mermaid": "flowchart TD\n  co[\"COMTE\"]\n  giz[\"LA SOCIEDAD\"]:::axis\n  ord[\"ORDEN\"]:::key\n  aur[\"PROGRESO\"]:::key\n  lege[\"LEY DE LOS TRES ESTADIOS\"]:::axis\n  teo[\"teológico\"]\n  met[\"metafísico\"]\n  pos[\"POSITIVO\"]:::key\n  zient[\"LA CIENCIA\"]:::key\n  gert[\"HECHOS Y LEYES\"]:::key\n  feno[\"explica los fenómenos desde ellos\"]\n  co --> giz\n  giz -->|\"organizada por dos principios\"| ord\n  giz -->|\"organizada por dos principios\"| aur\n  ord -->|\"siguiendo\"| lege\n  aur -->|\"siguiendo\"| lege\n  lege --> teo\n  lege --> met\n  lege --> pos\n  pos -->|\"de ahí\"| zient\n  zient -->|\"investiga\"| gert\n  gert --> feno\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cómo progresa el conocimiento humano y cómo quiere Comte ordenar la sociedad con la ciencia?",
   "raiz": "EL POSITIVISMO",
   "raiz_d": "Auguste Comte (siglo XIX): solo es conocimiento verdadero el que se basa en hechos observables y verificables.",
   "ramas": [
    {
     "rel": "la humanidad avanza según la",
     "t": "Ley de los tres estadios",
     "k": true,
     "a": "Comte",
     "d": "Cada ciencia y la humanidad entera pasan por tres formas de explicar la realidad.",
     "c": [
      {
       "rel": "primero",
       "t": "Estadio teológico",
       "d": "Explica los fenómenos por la acción de dioses."
      },
      {
       "rel": "después",
       "t": "Estadio metafísico",
       "d": "Explica por esencias y fuerzas abstractas."
      },
      {
       "rel": "por último",
       "t": "Estadio positivo",
       "k": true,
       "d": "Explica por leyes científicas."
      }
     ]
    },
    {
     "rel": "su método",
     "t": "La ciencia positiva",
     "k": true,
     "c": [
      {
       "rel": "parte de",
       "t": "Hechos observables",
       "d": "Solo vale lo que puede verificarse empíricamente."
      },
      {
       "rel": "busca",
       "t": "Leyes, no causas últimas",
       "d": "Relaciones constantes entre los fenómenos, no su «porqué» último."
      },
      {
       "rel": "por eso",
       "t": "Rechaza la metafísica",
       "d": "La especulación sin hechos no es conocimiento."
      }
     ]
    },
    {
     "rel": "su última ciencia",
     "t": "La sociología",
     "d": "Una «física social»: estudiar la sociedad con el método de las ciencias naturales.",
     "c": [
      {
       "rel": "estudia el",
       "t": "Orden",
       "d": "Estática social: lo que mantiene unida a la sociedad."
      },
      {
       "rel": "y el",
       "t": "Progreso",
       "d": "Dinámica social: cómo evoluciona la sociedad."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Estadio positivo",
     "rel": "es el de la",
     "a": "La ciencia positiva"
    },
    {
     "de": "Progreso",
     "rel": "sigue la",
     "a": "Ley de los tres estadios"
    }
   ],
   "idea": "Comte lleva al extremo la confianza moderna en la ciencia: la humanidad madura al pasar de explicar por dioses a explicar por leyes, y hasta la sociedad debe estudiarse científicamente."
  }
 },
 "CM-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Hegel y Karl Marx",
  "mermaid": "flowchart TD\n  n0[\"LA FILOSOFÍA DE MARX\"]:::axis\n  n1[\"filosofía alemana\"]\n  n2[\"economía política\"]\n  n3[\"socialismo utópico\"]\n  n4[\"Hegel\"]\n  n5[\"Smith, Ricardo\"]\n  n6[\"Owen · Saint-Simon · Fourier\"]\n  n7[\"Feuerbach\"]\n  n8[\"dialéctica\"]\n  n9[\"materialismo\"]\n  n10[\"teoría del valor-trabajo\"]\n  n11[\"socialismo\"]\n  n12[\"el ser humano\"]\n  n13[\"la naturaleza\"]\n  n14[\"la historia\"]\n  n15[\"actividad creadora: el trabajo\"]\n  n16[\"crea su vida en sociedad\"]\n  n17[\"creación de herramientas (tecnología)\"]\n  n18[\"crece la fuerza productiva\"]\n  n19[\"relación contradictoria\"]\n  n20[\"cambia las relaciones de producción\"]\n  n21[\"relaciones de propiedad\"]\n  n22[\"modo de producción capitalista\"]\n  n23[\"propiedad privada de los medios de producción\"]\n  n24[\"alienación o desposesión de su ser\"]:::axis\n  n25[\"social\"]:::key\n  n26[\"política\"]:::key\n  n27[\"religiosa\"]:::key\n  n28[\"económica\"]:::key\n  n29[\"división en clases sociales\"]\n  n30[\"burguesía\"]\n  n31[\"proletarios\"]\n  n32[\"revolución\"]:::axis\n  n33[\"sociedad sin clases sociales\"]\n  n34[\"fin de la explotación\"]\n  n35[\"superar la alienación y realizar al ser humano\"]\n  n1 --> n4\n  n2 --> n5\n  n3 --> n6\n  n4 --> n8\n  n4 -->|\"Feuerbach\"| n7\n  n7 --> n9\n  n5 --> n10\n  n6 --> n11\n  n8 --> n0\n  n9 --> n0\n  n10 --> n0\n  n11 --> n0\n  n0 --> n12\n  n12 -->|\"es su esencia\"| n15\n  n15 -->|\"mediante ella\"| n16\n  n16 -->|\"la transforma y socializa\"| n13\n  n16 -->|\"aquí se desarrolla dialécticamente\"| n14\n  n16 -->|\"se desarrolla\"| n18\n  n16 --> n19\n  n18 -->|\"por esto\"| n17\n  n20 -->|\"las produce\"| n21\n  n18 -->|\"eso crea\"| n22\n  n20 --> n22\n  n21 --> n23\n  n22 -->|\"eso provoca\"| n24\n  n24 -->|\"provoca\"| n25\n  n24 --> n26\n  n24 --> n27\n  n24 --> n28\n  n24 -->|\"provoca\"| n29\n  n29 -->|\"eso crea\"| n30\n  n29 --> n31\n  n31 -->|\"eso hace\"| n32\n  n32 -->|\"eso trae\"| n33\n  n32 --> n34\n  n33 -->|\"condición para ello\"| n35\n  n34 -->|\"condición para ello\"| n35\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué toma Marx de Hegel y de Feuerbach, y cómo explica con ello la historia y el capitalismo?",
   "raiz": "EL MATERIALISMO HISTÓRICO",
   "raiz_d": "Marx convierte la dialéctica idealista de Hegel en una dialéctica de la materia: la economía mueve la historia.",
   "ramas": [
    {
     "rel": "hereda de sus fuentes",
     "t": "Las fuentes de Marx",
     "c": [
      {
       "rel": "de Hegel",
       "t": "La dialéctica",
       "a": "Hegel",
       "d": "La realidad avanza por contradicciones. En Hegel es la Idea; en Marx, la vida material."
      },
      {
       "rel": "de Feuerbach",
       "t": "El materialismo",
       "a": "Feuerbach",
       "d": "Lo real es lo material; Dios es una proyección del ser humano."
      },
      {
       "rel": "de la economía política",
       "t": "El valor-trabajo",
       "a": "Smith, Ricardo",
       "d": "El valor de las mercancías procede del trabajo."
      },
      {
       "rel": "del socialismo utópico",
       "t": "El ideal socialista",
       "a": "Owen, Saint-Simon, Fourier"
      }
     ]
    },
    {
     "rel": "explica la historia",
     "t": "La estructura económica",
     "k": true,
     "d": "Determina la organización social, política e ideológica.",
     "c": [
      {
       "rel": "parte del",
       "t": "Trabajo",
       "d": "Esencia humana: transformando la naturaleza, el ser humano se hace a sí mismo."
      },
      {
       "rel": "choque entre",
       "t": "Fuerzas y relaciones de producción",
       "d": "Cuando la técnica crece, las relaciones de propiedad la frenan y estalla la contradicción."
      },
      {
       "rel": "levanta una",
       "t": "Superestructura",
       "d": "Derecho, política, religión, filosofía: ideas que justifican a la clase dominante."
      },
      {
       "rel": "motor de la historia",
       "t": "Lucha de clases",
       "k": true
      }
     ]
    },
    {
     "rel": "lo aplica a su época",
     "t": "El capitalismo",
     "c": [
      {
       "rel": "se basa en la",
       "t": "Propiedad privada de los medios",
       "d": "La burguesía tiene los medios de producción; el proletariado, solo su fuerza de trabajo."
      },
      {
       "rel": "de ahí la",
       "t": "Plusvalía",
       "d": "Valor que el trabajador produce y no recibe."
      },
      {
       "rel": "provoca",
       "t": "Alienación",
       "k": true,
       "d": "El obrero se separa del producto, del proceso, de su esencia y de los demás."
      }
     ]
    },
    {
     "rel": "salida",
     "t": "Revolución proletaria",
     "c": [
      {
       "rel": "lleva a la",
       "t": "Sociedad sin clases",
       "d": "Comunismo: fin de la explotación y de la alienación."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La dialéctica",
     "rel": "se vuelve",
     "a": "Lucha de clases"
    },
    {
     "de": "El valor-trabajo",
     "rel": "le permite explicar la",
     "a": "Plusvalía"
    },
    {
     "de": "Alienación",
     "rel": "se supera con la",
     "a": "Revolución proletaria"
    }
   ],
   "idea": "«Los filósofos no han hecho más que interpretar de diversos modos el mundo; de lo que se trata, sin embargo, es de transformarlo» (Marx): la dialéctica, aplicada a la economía, explica la historia y anuncia su cambio."
  }
 },
 "CM-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Las ideologías en el marxismo",
  "mermaid": "flowchart TD\n  ideo[\"LAS IDEOLOGÍAS\"]:::axis\n  kausak[\"causas\"]:::key\n  funtz[\"funciones\"]:::key\n  k1[\"la situación económica de los individuos\"]\n  k2[\"su posición en el proceso de producción\"]\n  k3[\"las relaciones de producción en que están inmersos\"]\n  f1[\"hacer una representación imaginaria de la realidad\"]\n  f2[\"reconstruir la realidad de forma deformada\"]\n  f3[\"cohesionar la estructura social\"]\n  f4[\"legitimar el poder de la clase dirigente\"]\n  osag[\"componentes: Estado, derecho, moral, economía política, religión, filosofía, arte\"]:::key\n  ideo -->|\"causas\"| kausak\n  ideo -->|\"funciones\"| funtz\n  ideo -->|\"componentes\"| osag\n  kausak --> k1\n  kausak --> k2\n  kausak --> k3\n  funtz --> f1\n  funtz --> f2\n  funtz --> f3\n  funtz --> f4\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué es una ideología, de dónde sale y para qué sirve?",
   "raiz": "LA IDEOLOGÍA",
   "raiz_d": "Para Marx, una «falsa conciencia»: un sistema de ideas que oculta la explotación.",
   "ramas": [
    {
     "rel": "nace de",
     "t": "La estructura económica",
     "k": true,
     "d": "Las ideas dependen de cómo se produce y de quién posee los medios de producción.",
     "c": [
      {
       "rel": "cada cual piensa desde su",
       "t": "Posición de clase",
       "d": "El lugar que ocupa en las relaciones de producción."
      },
      {
       "rel": "sobre ella se levanta la",
       "t": "Superestructura",
       "d": "Instituciones e ideas: Estado y derecho, moral, religión, filosofía, arte."
      }
     ]
    },
    {
     "rel": "se expresa en",
     "t": "Sus formas",
     "c": [
      {
       "rel": "la más clara",
       "t": "La religión",
       "d": "«El opio del pueblo»: consuela con el más allá e impide rebelarse."
      },
      {
       "rel": "también",
       "t": "Moral y derecho",
       "d": "Presentan como justo y eterno lo que conviene a la clase dominante."
      },
      {
       "rel": "también",
       "t": "Filosofía y economía burguesas",
       "d": "Presentan el orden capitalista como natural."
      }
     ]
    },
    {
     "rel": "cumple",
     "t": "Sus funciones",
     "c": [
      {
       "rel": "primero",
       "t": "Deformar la realidad",
       "d": "Da una imagen invertida: lo histórico parece natural."
      },
      {
       "rel": "sobre todo",
       "t": "Legitimar a la clase dominante",
       "k": true,
       "d": "Su interés particular pasa por interés de todos."
      },
      {
       "rel": "así logra",
       "t": "Cohesionar la sociedad",
       "d": "Hace aceptar el orden social y evita el conflicto."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Posición de clase",
     "rel": "explica que convenga",
     "a": "Legitimar a la clase dominante"
    },
    {
     "de": "La religión",
     "rel": "es un caso claro de",
     "a": "Deformar la realidad"
    }
   ],
   "idea": "Las ideas no flotan en el aire: nacen de la economía y, como falsa conciencia, hacen pasar por natural y justo el dominio de una clase. Cambiar la estructura económica cambia las ideas."
  }
 },
 "CF-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Feuerbach: de la alienación religiosa a la república democrática",
  "mermaid": "flowchart TD\n  fe[\"FEUERBACH\"]\n  giz[\"el ser humano es esto\"]:::axis\n  nahi[\"LA VOLUNTAD\"]:::key\n  arr[\"LA RAZÓN\"]:::key\n  sent[\"EL SENTIMIENTO\"]:::key\n  perf[\"pensados como PERFECCIONES DE DIOS\"]:::axis\n  ali[\"el ser humano se ALIENA DE SÍ MISMO\"]:::key\n  bot[\"debe recuperar su poder\"]\n  erre[\"LA REPÚBLICA DEMOCRÁTICA\"]:::key\n  fe --> giz\n  giz --> nahi\n  giz --> arr\n  giz --> sent\n  nahi -->|\"son pensados\"| perf\n  arr -->|\"son pensados\"| perf\n  sent -->|\"son pensados\"| perf\n  perf -->|\"en consecuencia\"| ali\n  ali -->|\"por tanto\"| bot\n  bot -->|\"en ella\"| erre\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué es Dios, según Feuerbach, y cómo recupera el ser humano lo que ha puesto en él?",
   "raiz": "LA ALIENACIÓN RELIGIOSA",
   "raiz_d": "Ludwig Feuerbach (siglo XIX), discípulo crítico de Hegel y materialista: la religión es obra del ser humano.",
   "ramas": [
    {
     "rel": "punto de partida",
     "t": "La esencia humana",
     "a": "Feuerbach",
     "d": "Las facultades que definen al ser humano como especie.",
     "c": [
      {
       "rel": "es",
       "t": "Razón"
      },
      {
       "rel": "es",
       "t": "Voluntad"
      },
      {
       "rel": "es",
       "t": "Sentimiento (amor)"
      }
     ]
    },
    {
     "rel": "el ser humano hace una",
     "t": "Proyección",
     "k": true,
     "d": "Toma sus propias cualidades, las lleva al infinito y las atribuye a un ser fuera de él.",
     "c": [
      {
       "rel": "así nace",
       "t": "Dios",
       "d": "La esencia humana idealizada y puesta fuera del ser humano."
      },
      {
       "rel": "consecuencia",
       "t": "Alienación",
       "k": true,
       "d": "Cuanto más pone en Dios, más pobre queda: se separa de su propio ser y se somete a él."
      }
     ]
    },
    {
     "rel": "salida",
     "t": "Recuperar la esencia humana",
     "c": [
      {
       "rel": "descubriendo que",
       "t": "La teología es antropología",
       "k": true,
       "d": "Hablar de Dios es hablar, sin saberlo, del ser humano."
      },
      {
       "rel": "en la vida social",
       "t": "Amor entre los seres humanos",
       "d": "El amor al prójimo ocupa el lugar del amor a Dios."
      },
      {
       "rel": "en política",
       "t": "República democrática",
       "d": "Comunidad de iguales, sin tutela divina ni monárquica."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La esencia humana",
     "rel": "se proyecta en",
     "a": "Dios"
    },
    {
     "de": "La teología es antropología",
     "rel": "deshace la",
     "a": "Alienación"
    }
   ],
   "idea": "Dios no crea al ser humano: el ser humano crea a Dios con sus mejores cualidades y se empobrece. Marx aprovechará esta idea, pero buscará la raíz de la alienación en la economía."
  }
 },
 "C5A-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Gramsci: la hegemonía cultural",
  "mermaid": "flowchart TD\n  gra[\"GRAMSCI\"]\n  heg[\"hegemonía cultural\"]:::axis\n  ind[\"la fuerza: el Estado y la ley\"]\n  bai[\"consentimiento y acuerdo\"]:::key\n  intel[\"intelectuales orgánicos\"]:::key\n  zen[\"el sentido común\"]:::key\n  zib[\"la sociedad civil\"]:::axis\n  bloke[\"el bloque histórico\"]\n  ideo[\"interés de clase como interés general\"]\n  ohi[\"costumbre tomada como normal\"]\n  gerra[\"guerra de posiciones\"]:::axis\n  kontra[\"un sentido común nuevo\"]:::key\n  eman[\"la emancipación\"]\n  gra -->|\"concepto central\"| heg\n  heg -->|\"no solo la fuerza\"| ind\n  heg -->|\"también el consentimiento\"| bai\n  heg -->|\"agentes\"| intel\n  bai -->|\"mediante\"| zen\n  bai -->|\"donde\"| zib\n  zib -->|\"escuela, prensa\"| ohi\n  zen -->|\"consecuencia\"| ideo\n  intel -->|\"alianza\"| bloke\n  intel -->|\"lucha cultural\"| gerra\n  gerra -->|\"construir\"| kontra\n  ideo -->|\"romper\"| kontra\n  kontra -->|\"objetivo\"| eman\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Por qué la clase dominante no manda solo con la fuerza?",
   "raiz": "LA HEGEMONÍA CULTURAL",
   "raiz_d": "Antonio Gramsci (marxista italiano, 1891-1937): el poder se sostiene también con el consentimiento de los dominados.",
   "ramas": [
    {
     "rel": "por un lado",
     "t": "Coerción",
     "a": "Gramsci",
     "d": "Sociedad política: el Estado, la ley, la policía. Se impone por la fuerza.",
     "c": [
      {
       "rel": "se ataca con la",
       "t": "Guerra de maniobras",
       "d": "Asalto frontal y rápido al Estado, como en Rusia en 1917."
      }
     ]
    },
    {
     "rel": "por otro",
     "t": "Consenso",
     "k": true,
     "d": "Sociedad civil: escuela, Iglesia, prensa, familia. Convence en lugar de obligar.",
     "c": [
      {
       "rel": "produce un",
       "t": "Sentido común",
       "k": true,
       "d": "Lo que todos ven como normal: el interés de una clase pasa por interés general."
      },
      {
       "rel": "lo elaboran los",
       "t": "Intelectuales orgánicos",
       "k": true,
       "d": "Organizan y difunden la visión del mundo de una clase social.",
       "c": [
        {
         "rel": "cohesionan el",
         "t": "Bloque histórico",
         "d": "Unión de la base económica y la cultura que sostiene un orden social."
        }
       ]
      }
     ]
    },
    {
     "rel": "respuesta",
     "t": "Contrahegemonía",
     "d": "Las clases subalternas deben ganar la cultura antes que el poder.",
     "c": [
      {
       "rel": "estrategia",
       "t": "Guerra de posiciones",
       "d": "Lucha cultural lenta, trinchera a trinchera, dentro de la sociedad civil."
      },
      {
       "rel": "objetivo",
       "t": "Un nuevo sentido común",
       "d": "Una visión del mundo propia que haga posible la emancipación."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Guerra de posiciones",
     "rel": "sustituye en Occidente a la",
     "a": "Guerra de maniobras"
    },
    {
     "de": "Un nuevo sentido común",
     "rel": "disputa el",
     "a": "Sentido común"
    }
   ],
   "idea": "En las sociedades modernas el poder se apoya sobre todo en el consentimiento: quien consigue que su visión del mundo parezca «sentido común» domina. Por eso el cambio empieza en la cultura."
  }
 },
 "C5A-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "La Escuela de Frankfurt: la teoría crítica",
  "mermaid": "flowchart TD\n  frk[\"ESCUELA DE FRANKFURT\"]\n  teo[\"Teoría crítica\"]:::axis\n  trad[\"contra la teoría tradicional\"]\n  marx[\"Marx\"]\n  freud[\"Freud\"]\n  weber[\"Weber\"]\n  helb[\"la emancipación\"]:::key\n  hoad[\"Horkheimer y Adorno\"]:::axis\n  mar[\"Marcuse\"]:::axis\n  hab[\"Habermas\"]:::axis\n  ains[\"razón instrumental\"]:::key\n  dial[\"Dialéctica de la Ilustración\"]:::key\n  indk[\"industria cultural\"]\n  uni[\"sociedad unidimensional\"]:::key\n  behf[\"necesidades falsas\"]\n  erre[\"represión excedente\"]\n  komu[\"razón comunicativa\"]:::key\n  elka[\"diálogo y consenso\"]\n  esp[\"la esfera pública\"]\n  frk -->|\"programa\"| teo\n  marx -->|\"fuente\"| teo\n  freud --> teo\n  weber --> teo\n  teo -->|\"objetivo\"| helb\n  teo -->|\"se distingue\"| trad\n  teo --> hoad\n  teo --> mar\n  teo --> hab\n  hoad -->|\"diagnóstico\"| ains\n  ains -->|\"se convierte\"| dial\n  dial -->|\"por ejemplo\"| indk\n  mar -->|\"la sociedad\"| uni\n  uni -->|\"creando\"| behf\n  behf --> erre\n  hab -->|\"salida\"| komu\n  komu -->|\"mediante\"| elka\n  elka --> esp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Por qué la razón que prometía liberarnos se ha convertido en instrumento de dominación?",
   "raiz": "LA ESCUELA DE FRÁNCFORT",
   "raiz_d": "Filósofos alemanes del siglo XX que, tras las guerras, el holocausto y el totalitarismo, critican la sociedad y la cultura.",
   "ramas": [
    {
     "rel": "su programa",
     "t": "La teoría crítica",
     "k": true,
     "a": "Horkheimer",
     "d": "No se limita a describir la sociedad, como la teoría tradicional: la analiza para emancipar.",
     "c": [
      {
       "rel": "combina",
       "t": "Marx, Freud y Weber",
       "d": "Economía, psicoanálisis y racionalización."
      }
     ]
    },
    {
     "rel": "su diagnóstico",
     "t": "La razón instrumental",
     "k": true,
     "a": "Horkheimer, Adorno",
     "d": "Pregunta por los medios (cómo lograrlo), no por los fines (qué es justo): eficacia y cálculo.",
     "c": [
      {
       "rel": "lo explica la",
       "t": "Dialéctica de la Ilustración",
       "d": "Obra de 1944: el progreso técnico no garantiza una sociedad más justa; la razón se vuelve dominio."
      },
      {
       "rel": "se ve en la",
       "t": "Industria cultural",
       "d": "Entretenimiento estandarizado que fomenta la pasividad y el conformismo."
      }
     ]
    },
    {
     "rel": "en la sociedad de consumo",
     "t": "La sociedad unidimensional",
     "a": "Marcuse",
     "d": "El sistema integra a todos y apaga la capacidad de oponerse.",
     "c": [
      {
       "rel": "crea",
       "t": "Necesidades falsas",
       "d": "Deseos impuestos por el mercado que nos atan al consumo."
      }
     ]
    },
    {
     "rel": "su salida (2.ª generación)",
     "t": "La razón comunicativa",
     "k": true,
     "a": "Habermas",
     "d": "No solo producimos: también nos comunicamos.",
     "c": [
      {
       "rel": "busca el",
       "t": "Consenso por el diálogo",
       "d": "Acuerdo que nace del diálogo honesto, no de la manipulación."
      },
      {
       "rel": "exige una",
       "t": "Esfera pública libre",
       "d": "Base de la democracia deliberativa."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Industria cultural",
     "rel": "fabrica",
     "a": "Necesidades falsas"
    },
    {
     "de": "La razón comunicativa",
     "rel": "responde a",
     "a": "La razón instrumental"
    }
   ],
   "idea": "El progreso técnico no trae por sí solo una sociedad justa: la razón reducida a cálculo domina a las personas. Habermas propone recuperarla como diálogo orientado al entendimiento."
  }
 },
 "C5B-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Arendt: el análisis del totalitarismo",
  "mermaid": "flowchart TD\n  tot[\"TOTALITARISMO\"]\n  ideo[\"ideología totalizadora\"]:::key\n  ter[\"la lógica del terror\"]:::key\n  masa[\"sociedad de masas\"]\n  bak[\"soledad y atomización\"]:::key\n  sus[\"raíces\"]:::axis\n  anti[\"antisemitismo (Dreyfus)\"]\n  inp[\"imperialismo\"]\n  ban[\"la banalidad del mal\"]:::key\n  eich[\"Eichmann: renuncia a pensar\"]\n  tot --> ideo\n  tot --> ter\n  ideo --> masa\n  ter --> bak\n  tot -->|\"origen\"| sus\n  sus --> anti\n  sus --> inp\n  tot -->|\"consecuencia\"| ban\n  ban --> eich\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué es el totalitarismo y cómo pudo llegar a existir?",
   "raiz": "EL TOTALITARISMO (ARENDT)",
   "raiz_d": "Una forma de poder nueva del siglo XX, distinta de la tiranía clásica: busca el dominio total del individuo.",
   "ramas": [
    {
     "rel": "nace de",
     "t": "Raíces históricas",
     "d": "Dos procesos que prepararon la crisis del Estado-nación.",
     "c": [
      {
       "rel": "primera",
       "t": "El antisemitismo moderno",
       "d": "El caso Dreyfus muestra cómo el odio a los judíos se convierte en fuerza política."
      },
      {
       "rel": "segunda",
       "t": "El imperialismo",
       "d": "La expansión colonial ensaya el dominio sin límites sobre otros pueblos."
      }
     ]
    },
    {
     "rel": "se apoya en",
     "t": "La sociedad de masas",
     "k": true,
     "d": "Individuos aislados, sin lazos comunes, fáciles de manipular.",
     "c": [
      {
       "rel": "su base",
       "t": "La soledad política",
       "d": "Quien pierde los lazos con los demás queda indefenso ante la propaganda y la obediencia."
      }
     ]
    },
    {
     "rel": "funciona con",
     "t": "Ideología y terror",
     "k": true,
     "d": "Los dos instrumentos del dominio total.",
     "c": [
      {
       "rel": "lo explica todo con",
       "t": "Una ideología totalizadora",
       "d": "Una sola idea (la raza, la clase) que pretende explicar toda la historia."
      },
      {
       "rel": "la difunde",
       "t": "La propaganda",
       "d": "Encauza masivamente la conciencia y la imaginación política."
      },
      {
       "rel": "la impone",
       "t": "El terror",
       "d": "Elimina la oposición y la pluralidad; convierte a la población en una masa indiferenciada."
      }
     ]
    },
    {
     "rel": "revela",
     "t": "La banalidad del mal",
     "k": true,
     "d": "El mal puede nacer no de una intención perversa, sino de la renuncia a pensar.",
     "c": [
      {
       "rel": "ejemplo",
       "t": "Eichmann",
       "d": "Un burócrata obediente, no un monstruo: cumplía órdenes sin juzgarlas."
      },
      {
       "rel": "remedio",
       "t": "Pensar y juzgar por uno mismo",
       "d": "El pensamiento crítico y el espacio público protegen contra el dominio total."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La soledad política",
     "rel": "deja indefenso ante",
     "a": "La propaganda"
    },
    {
     "de": "Pensar y juzgar por uno mismo",
     "rel": "resiste a",
     "a": "Una ideología totalizadora"
    }
   ],
   "idea": "El totalitarismo no es una tiranía más: con ideología y terror convierte a individuos aislados en masa, y su mal lo ejecutan personas corrientes que renuncian a pensar."
  }
 },
 "C5B-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Arendt: vita activa y acción política",
  "mermaid": "flowchart TD\n  vit[\"VITA ACTIVA\"]\n  lan[\"labor (animal laborans)\"]\n  egi[\"trabajo (homo faber)\"]\n  eki[\"acción (zoon politikon)\"]:::axis\n  bizi[\"sobrevivir\"]\n  mundu[\"el mundo de los objetos\"]\n  plu[\"natalidad y pluralidad\"]:::key\n  esp[\"el espacio público\"]:::key\n  bot[\"poder: actuar juntos\"]:::key\n  ind[\"la violencia\"]\n  vit --> lan\n  vit --> egi\n  vit -->|\"la suprema\"| eki\n  lan --> bizi\n  egi --> mundu\n  eki -->|\"fundamento\"| plu\n  eki -->|\"donde\"| esp\n  esp --> bot\n  bot -->|\"se distingue\"| ind\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué hacemos los seres humanos cuando actuamos, y qué actividad nos hace libres?",
   "raiz": "LA VITA ACTIVA (ARENDT)",
   "raiz_d": "En La condición humana (1958), Arendt distingue tres actividades humanas, de la más ligada a la necesidad a la más libre.",
   "ramas": [
    {
     "rel": "nivel biológico",
     "t": "La labor",
     "d": "Mantener la vida: producir y consumir. Se repite sin fin y no deja huella.",
     "c": [
      {
       "rel": "la realiza el",
       "t": "Animal laborans",
       "d": "El ser humano como especie que necesita sobrevivir."
      }
     ]
    },
    {
     "rel": "nivel artificial",
     "t": "El trabajo",
     "d": "Fabricar objetos duraderos: casas, herramientas, obras.",
     "c": [
      {
       "rel": "lo realiza el",
       "t": "Homo faber"
      },
      {
       "rel": "crea",
       "t": "Un mundo estable de objetos",
       "d": "Un hogar común que dura más que cada vida humana."
      }
     ]
    },
    {
     "rel": "nivel político",
     "t": "La acción",
     "k": true,
     "d": "Actuar y hablar con otros, sin objetos de por medio: la actividad propiamente libre.",
     "c": [
      {
       "rel": "se funda en",
       "t": "La natalidad",
       "k": true,
       "d": "Cada nacimiento trae un comienzo nuevo: podemos iniciar algo imprevisto."
      },
      {
       "rel": "exige",
       "t": "La pluralidad",
       "d": "Somos iguales y a la vez únicos: actuamos entre distintos."
      },
      {
       "rel": "ocurre en",
       "t": "El espacio público",
       "d": "Donde los ciudadanos hablan, se escuchan y aparecen ante los demás."
      }
     ]
    },
    {
     "rel": "de la acción nace",
     "t": "El poder",
     "k": true,
     "d": "Surge cuando la gente actúa junta y se pone de acuerdo.",
     "c": [
      {
       "rel": "no confundir con",
       "t": "La violencia",
       "d": "Instrumento que sustituye al poder o cubre su vacío: puede destruirlo, no crearlo."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "El poder",
     "rel": "solo existe en",
     "a": "El espacio público"
    },
    {
     "de": "Animal laborans",
     "rel": "en la modernidad invade",
     "a": "El espacio público"
    }
   ],
   "idea": "Para Arendt la libertad no está en producir ni en consumir, sino en actuar con otros en el espacio público: de ahí nace el poder, que es lo contrario de la violencia."
  }
 },
 "CdB-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Beauvoir: la mujer, la alteridad y la libertad",
  "mermaid": "flowchart TD\n  be[\"BEAUVOIR\"]\n  tez[\"no se nace mujer, se llega a serlo\"]:::axis\n  best[\"la mujer como la Otra\"]:::key\n  aska[\"la libertad en situación\"]:::key\n  mit[\"los mitos de la feminidad\"]\n  obj[\"dialéctica objeto/sujeto\"]\n  trans[\"trascendencia\"]\n  inm[\"inmanencia\"]\n  gor[\"el cuerpo y la situación\"]\n  be -->|\"tesis\"| tez\n  tez -->|\"la mujer\"| best\n  tez -->|\"proyecto\"| aska\n  best --> mit\n  best -->|\"Hegel\"| obj\n  aska --> trans\n  aska -->|\"contra\"| inm\n  aska --> gor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si somos libres, ¿por qué la mujer ha vivido como «lo Otro»?",
   "raiz": "LA MUJER, LA ALTERIDAD Y LA LIBERTAD",
   "raiz_d": "El argumento de El segundo sexo (texto PAU: la Conclusión), leído desde el existencialismo que Beauvoir comparte con Sartre.",
   "ramas": [
    {
     "rel": "parte de",
     "t": "La libertad en situación",
     "a": "Beauvoir, Sartre",
     "d": "No hay esencia previa: cada ser humano se hace con sus actos, pero siempre dentro de una situación.",
     "c": [
      {
       "rel": "de ahí la tesis",
       "t": "«No se nace mujer: se llega a serlo»",
       "k": true,
       "d": "La identidad femenina es producto de la cultura y la sociedad, no de la biología."
      },
      {
       "rel": "en la Conclusión",
       "t": "«En la sociedad humana nada es natural»",
       "d": "La mujer es un producto de la civilización: su destino no lo fijan las hormonas."
      }
     ]
    },
    {
     "rel": "diagnóstico",
     "t": "La mujer como «lo Otro»",
     "k": true,
     "d": "El hombre se ha definido como Sujeto; a ella se la define siempre en relación con él.",
     "c": [
      {
       "rel": "lo explica con",
       "t": "La dialéctica del amo y el esclavo",
       "a": "Hegel",
       "d": "La identidad se construye en la lucha por el reconocimiento del otro."
      },
      {
       "rel": "la encierra en",
       "t": "La inmanencia",
       "d": "Tareas repetitivas que no dejan huella; la trascendencia queda para el hombre."
      },
      {
       "rel": "lo justifican",
       "t": "Los mitos del «eterno femenino»",
       "d": "Presentan como esencias eternas lo que es una situación histórica."
      }
     ]
    },
    {
     "rel": "la mantiene",
     "t": "La complicidad y la mala fe",
     "k": true,
     "d": "La libertad angustia, y ambos sexos se autoengañan para no afrontarla.",
     "c": [
      {
       "rel": "en la mujer",
       "t": "Aceptar ser «objeto protegido»",
       "d": "Una educación que ensalza la abnegación la invita a la facilidad y la dependencia."
      },
      {
       "rel": "en el hombre",
       "t": "Convertir su privilegio en «naturaleza»"
      }
     ]
    },
    {
     "rel": "salida",
     "t": "La reciprocidad",
     "k": true,
     "d": "Reconocerse como dos libertades que se encuentran: una fraternidad entre iguales.",
     "c": [
      {
       "rel": "exige",
       "t": "Transformar economía y cultura",
       "d": "No basta la independencia económica: hay que cambiar también la educación y las costumbres."
      },
      {
       "rel": "logra",
       "t": "La liberación de ambos sexos",
       "d": "«Querer ser libre es también querer libres a los demás.»"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "«En la sociedad humana nada es natural»",
     "rel": "desmonta",
     "a": "Los mitos del «eterno femenino»"
    },
    {
     "de": "La inmanencia",
     "rel": "se rompe al",
     "a": "Transformar economía y cultura"
    }
   ],
   "idea": "La mujer no es «lo Otro» por naturaleza, sino por una situación histórica que a veces acepta por mala fe; la salida es la reciprocidad entre dos libertades."
  }
 },
 "CdB-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Después de Beauvoir: género y justicia",
  "mermaid": "flowchart TD\n  gen[\"LA CONSTRUCCIÓN DEL GÉNERO\"]\n  but[\"Butler\"]:::axis\n  fra[\"Fraser\"]:::axis\n  nus[\"Nussbaum\"]:::axis\n  perf[\"la performatividad\"]:::key\n  queer[\"la teoría queer\"]\n  bir[\"la redistribución\"]\n  ait[\"el reconocimiento\"]:::key\n  gait[\"las capacidades humanas\"]:::key\n  just[\"justicia de género\"]:::key\n  gen --> but\n  gen --> fra\n  gen --> nus\n  but --> perf\n  perf --> queer\n  fra --> bir\n  fra --> ait\n  nus --> gait\n  bir --> just\n  ait --> just\n  gait --> just\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Después de Beauvoir, ¿qué es el género y qué exige la justicia entre los sexos?",
   "raiz": "DESPUÉS DE BEAUVOIR: GÉNERO Y JUSTICIA",
   "raiz_d": "Las herederas de Beauvoir abren dos debates: qué es el género (identidad) y qué debe cambiar en la sociedad (justicia).",
   "ramas": [
    {
     "rel": "qué es el género",
     "t": "El género como performance",
     "k": true,
     "a": "Judith Butler",
     "d": "No es una esencia biológica: lo hacemos al repetir gestos, ropa y formas de hablar.",
     "c": [
      {
       "rel": "por tanto",
       "t": "Puede subvertirse",
       "d": "Si el género es un guion que se repite, también puede reescribirse."
      },
      {
       "rel": "de ahí",
       "t": "La teoría queer",
       "d": "Cuestiona que solo haya dos identidades fijas y «normales»."
      }
     ]
    },
    {
     "rel": "qué exige la justicia",
     "t": "Redistribución y reconocimiento",
     "k": true,
     "a": "Nancy Fraser",
     "d": "La justicia de género necesita a la vez dos ejes; uno solo no basta.",
     "c": [
      {
       "rel": "eje económico",
       "t": "Redistribución",
       "d": "Repartir recursos, tiempo y oportunidades."
      },
      {
       "rel": "eje cultural",
       "t": "Reconocimiento",
       "d": "Respetar la dignidad y la voz de quienes sufren opresión."
      }
     ]
    },
    {
     "rel": "cómo medirla",
     "t": "El enfoque de las capacidades",
     "k": true,
     "a": "Martha Nussbaum",
     "d": "Una sociedad es justa si garantiza a todas las personas lo que realmente pueden ser y hacer.",
     "c": [
      {
       "rel": "no se mide por",
       "t": "El PIB",
       "d": "La riqueza media oculta lo que cada persona puede hacer de verdad con su vida."
      },
      {
       "rel": "sino por",
       "t": "Capacidades básicas",
       "d": "Vida, salud, integridad, emociones, razón práctica, afiliación, juego…"
      }
     ]
    },
    {
     "rel": "qué poner en el centro",
     "t": "El ecofeminismo",
     "a": "Yayo Herrero",
     "d": "Une la crisis ecológica y la opresión de las mujeres.",
     "c": [
      {
       "rel": "porque somos",
       "t": "Ecodependientes e interdependientes",
       "d": "Dependemos de la naturaleza y de los cuidados de otros."
      },
      {
       "rel": "propone",
       "t": "Poner la vida y los cuidados en el centro"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Poner la vida y los cuidados en el centro",
     "rel": "exige",
     "a": "Redistribución"
    }
   ],
   "idea": "Beauvoir mostró que la mujer se hace; Butler añade que el género se rehace en cada acto, y Fraser, Nussbaum y Herrero preguntan qué debe cambiar en la sociedad para que haya justicia."
  }
 },
 "C8-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El existencialismo: libertad, absurdo y ser",
  "mermaid": "flowchart TD\n  ext[\"EXISTENCIALISMO\"]\n  tesi[\"la existencia precede a la esencia\"]:::axis\n  fen[\"fenomenología\"]\n  kier[\"Kierkegaard\"]\n  hei[\"HEIDEGGER\"]:::axis\n  sar[\"SARTRE\"]:::axis\n  cam[\"CAMUS\"]:::axis\n  das[\"Dasein: estar-en-el-mundo\"]:::key\n  her[\"ser-para-la-muerte\"]\n  den[\"la temporalidad\"]\n  ask[\"la libertad\"]:::key\n  era[\"la responsabilidad\"]\n  ang[\"la angustia\"]\n  abs[\"el absurdo\"]:::key\n  mat[\"la rebeldía\"]\n  zen[\"dar sentido a la vida\"]\n  aut[\"autenticidad: autor de la propia vida\"]:::key\n  ext -->|\"tesis central\"| tesi\n  fen -->|\"fuente\"| ext\n  kier -->|\"precedente\"| ext\n  tesi -->|\"como ontología\"| hei\n  tesi -->|\"como libertad\"| sar\n  tesi -->|\"como absurdo\"| cam\n  hei -->|\"la pregunta del ser\"| das\n  das -->|\"estructura\"| her\n  her -->|\"base\"| den\n  sar -->|\"el hombre es libertad\"| ask\n  ask -->|\"de ahí\"| era\n  era -->|\"y\"| ang\n  cam -->|\"el mundo es absurdo\"| abs\n  abs -->|\"respuesta\"| mat\n  mat -->|\"creando\"| zen\n  den -->|\"vivir auténticamente\"| aut\n  ang --> aut\n  zen --> aut\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si nacemos sin una esencia fijada, ¿qué hacemos con nuestra libertad?",
   "raiz": "EL EXISTENCIALISMO",
   "raiz_d": "Corriente de los años 40-50, tras las guerras mundiales: la pregunta por el sentido de la vida se vuelve urgente. Precedente: Kierkegaard.",
   "ramas": [
    {
     "rel": "punto de partida",
     "t": "La existencia precede a la esencia",
     "k": true,
     "a": "Sartre",
     "d": "No nacemos con una naturaleza fija: nos construimos con nuestros actos.",
     "c": [
      {
       "rel": "el ser humano es",
       "t": "Un proyecto",
       "d": "Un ser que se hace a sí mismo eligiendo."
      },
      {
       "rel": "se centra en",
       "t": "El individuo concreto",
       "a": "Unamuno",
       "d": "El «hombre de carne y hueso», no abstracciones."
      }
     ]
    },
    {
     "rel": "consecuencia",
     "t": "La libertad radical",
     "k": true,
     "a": "Sartre",
     "d": "«El hombre está condenado a ser libre»: siempre hay opción; no elegir ya es elegir.",
     "c": [
      {
       "rel": "implica",
       "t": "La responsabilidad",
       "d": "Sin Dios ni naturaleza que nos excusen, respondemos de lo que somos."
      },
      {
       "rel": "produce",
       "t": "La angustia",
       "d": "Sentimos la falta de fundamentos absolutos y el peso de elegir."
      }
     ]
    },
    {
     "rel": "trasfondo",
     "t": "La finitud y el sinsentido",
     "d": "La vida no tiene un propósito prefijado.",
     "c": [
      {
       "rel": "se vive como",
       "t": "Ser-para-la-muerte",
       "a": "Heidegger",
       "d": "Estamos arrojados a un mundo que no elegimos y somos finitos."
      },
      {
       "rel": "se vive como",
       "t": "La náusea y la nada",
       "a": "Sartre, Heidegger",
       "d": "La existencia aparece sin razón ni fundamento."
      },
      {
       "rel": "se vive como",
       "t": "El absurdo",
       "a": "Camus",
       "d": "Choque entre nuestra ansia de sentido y un mundo que no la satisface."
      }
     ]
    },
    {
     "rel": "dos modos de vivir",
     "t": "Autenticidad o huida",
     "k": true,
     "d": "Qué hacemos ante la libertad y la muerte.",
     "c": [
      {
       "rel": "huir es",
       "t": "Mala fe e inautenticidad",
       "d": "Autoengañarse («yo soy así», «no tuve opción») o hacer lo que «se» hace, como la masa."
      },
      {
       "rel": "asumir es",
       "t": "La vida auténtica",
       "d": "Aceptar la finitud y elegir conscientemente, asumiendo las consecuencias."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La angustia",
     "rel": "lleva a refugiarse en",
     "a": "Mala fe e inautenticidad"
    },
    {
     "de": "Ser-para-la-muerte",
     "rel": "aceptado, abre",
     "a": "La vida auténtica"
    }
   ],
   "idea": "No hay esencia ni Dios que decidan por nosotros: estamos condenados a ser libres, y vivir auténticamente es asumir esa libertad y nuestra finitud sin excusas."
  }
 },
 "C8K-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Kierkegaard: la angustia de la libertad y el salto de la fe",
  "mermaid": "flowchart TD\n  kk[\"KIERKEGAARD\"]\n  giz[\"el hombre se caracteriza así\"]:::axis\n  ezdet[\"su esencia no lo determina de antemano\"]:::key\n  elegi[\"debe elegirse a sí mismo\"]:::key\n  ezdeus[\"por sí mismo no es nada\"]\n  ahalg[\"toda opción es mera posibilidad\"]\n  angus[\"LA ANGUSTIA\"]:::key\n  etsip[\"LA DESESPERACIÓN\"]:::key\n  fede[\"el salto de la fe: a la pura realidad\"]:::key\n  jaink[\"DIOS\"]:::axis\n  kk --> giz\n  giz --> ezdet\n  giz --> elegi\n  ezdet -->|\"por tanto\"| ezdeus\n  elegi -->|\"pero\"| ahalg\n  ezdeus -->|\"produce\"| angus\n  ahalg -->|\"produce\"| etsip\n  angus -->|\"salimos\"| fede\n  etsip -->|\"salimos\"| fede\n  fede -->|\"es\"| jaink\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué significa existir como individuo que tiene que elegirse a sí mismo?",
   "raiz": "KIERKEGAARD",
   "raiz_d": "Pensador danés del siglo XIX, precedente del existencialismo: frente a los grandes sistemas abstractos (Hegel), el individuo concreto.",
   "ramas": [
    {
     "rel": "punto de partida",
     "t": "El individuo singular",
     "k": true,
     "d": "Lo que importa no es la humanidad en abstracto, sino mi existencia concreta.",
     "c": [
      {
       "rel": "no viene dado",
       "t": "El yo es una tarea",
       "d": "El individuo tiene que llegar a ser sí mismo."
      },
      {
       "rel": "por eso",
       "t": "Elegirse: «o esto o lo otro»",
       "d": "Existir es decidir, y nadie puede elegir por mí."
      }
     ]
    },
    {
     "rel": "la libertad produce",
     "t": "La angustia",
     "k": true,
     "d": "El vértigo de la libertad: sentirse ante la pura posibilidad, sin nada que garantice la elección.",
     "c": [
      {
       "rel": "nace de",
       "t": "La posibilidad",
       "d": "Todo puede ser y nada está asegurado de antemano."
      }
     ]
    },
    {
     "rel": "modos de existir",
     "t": "Los tres estadios",
     "d": "Tres formas de vida entre las que no se pasa por razonamiento, sino eligiendo.",
     "c": [
      {
       "rel": "primero",
       "t": "Estético",
       "d": "Vivir para el placer del instante, sin compromiso (el seductor).",
       "c": [
        {
         "rel": "acaba en",
         "t": "La desesperación",
         "d": "No querer ser uno mismo: la vida dispersa se vacía."
        }
       ]
      },
      {
       "rel": "segundo",
       "t": "Ético",
       "d": "Compromiso con el deber y las normas universales (el matrimonio)."
      },
      {
       "rel": "tercero",
       "t": "Religioso",
       "d": "Relación personal y absoluta del individuo con Dios."
      }
     ]
    },
    {
     "rel": "única salida",
     "t": "El salto de la fe",
     "k": true,
     "d": "La fe no se demuestra con la razón: se decide, arriesgándolo todo.",
     "c": [
      {
       "rel": "es",
       "t": "Una paradoja",
       "d": "Está por encima de la ética y de toda lógica."
      },
      {
       "rel": "modelo",
       "t": "Abraham",
       "d": "Acepta sacrificar a Isaac por obediencia a Dios, contra toda razón ética."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La desesperación",
     "rel": "empuja hacia",
     "a": "El salto de la fe"
    },
    {
     "de": "El salto de la fe",
     "rel": "da acceso al estadio",
     "a": "Religioso"
    }
   ],
   "idea": "Para Kierkegaard existir es elegirse: esa libertad angustia, la vida estética acaba en desesperación y solo el salto de la fe, que la razón no justifica, reconcilia al individuo consigo mismo ante Dios."
  }
 },
 "C6-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "La posmodernidad: los ejes del fin de los metarrelatos",
  "mermaid": "flowchart TD\n  pm[\"POSMODERNIDAD\"]\n  meta[\"el fin de los metarrelatos\"]\n  niet[\"la herencia de Nietzsche\"]\n  lyo[\"Lyotard\"]:::axis\n  der[\"Derrida\"]:::axis\n  fou[\"Foucault\"]:::axis\n  bau[\"Baudrillard\"]:::axis\n  del[\"Deleuze y Guattari\"]:::axis\n  jak[\"la pérdida de legitimación del saber\"]:::key\n  desk[\"deconstrucción y différance\"]:::key\n  bot[\"poder / saber, biopolítica\"]:::key\n  sim[\"el simulacro\"]:::key\n  erri[\"rizoma y líneas de fuga\"]:::key\n  haber[\"Habermas: modernidad inacabada\"]:::axis\n  vat[\"Vattimo: pensamiento débil\"]\n  ror[\"Rorty: conversación e ironía\"]\n  pm -->|\"diagnóstico central\"| meta\n  pm -->|\"punto de partida\"| niet\n  meta --> lyo\n  meta --> der\n  meta --> fou\n  meta --> bau\n  meta --> del\n  lyo -->|\"el saber\"| jak\n  der -->|\"el texto\"| desk\n  fou -->|\"genealogía\"| bot\n  bau -->|\"hiperrealidad\"| sim\n  del -->|\"no jerárquico\"| erri\n  jak -->|\"contrarrespuesta\"| haber\n  desk -->|\"debilitar el ser\"| vat\n  erri -->|\"conversación\"| ror\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Podemos seguir confiando en la razón, la verdad y el progreso?",
   "raiz": "LA POSMODERNIDAD",
   "raiz_d": "Tras las guerras y los totalitarismos, el escepticismo sustituye a la fe moderna en el progreso. Su gran precursor es Nietzsche.",
   "ramas": [
    {
     "rel": "diagnóstico",
     "t": "El fin de los metarrelatos",
     "k": true,
     "a": "Lyotard",
     "d": "«Incredulidad hacia los metarrelatos»: ya no creemos en narraciones que expliquen toda la realidad.",
     "c": [
      {
       "rel": "ejemplos",
       "t": "Cristianismo, marxismo, progreso",
       "d": "Grandes relatos que prometían una meta a la historia."
      },
      {
       "rel": "los sustituyen",
       "t": "Pequeños relatos locales",
       "d": "Fragmentación y pluralismo: no hay una «Gran Historia»."
      }
     ]
    },
    {
     "rel": "radicalizan la crítica",
     "t": "El pensamiento rupturista",
     "d": "Abandonan el proyecto moderno de una razón y una verdad universales.",
     "c": [
      {
       "rel": "desmonta los conceptos",
       "t": "La deconstrucción",
       "a": "Derrida",
       "d": "No hay nada «fuera del texto»: todo concepto esconde contradicciones y jerarquías de poder."
      },
      {
       "rel": "desmonta el yo",
       "t": "La muerte del sujeto",
       "a": "Foucault",
       "d": "El yo es una construcción de redes de poder y discursos: todo saber produce poder."
      },
      {
       "rel": "renuncia a la verdad fuerte",
       "t": "El pensamiento débil",
       "a": "Vattimo",
       "d": "Asume la pluralidad de interpretaciones: una ética de la tolerancia."
      },
      {
       "rel": "desmonta lo real",
       "t": "La hiperrealidad",
       "a": "Baudrillard",
       "d": "El simulacro sustituye a lo real: «el mapa ha sustituido al territorio»."
      }
     ]
    },
    {
     "rel": "réplica",
     "t": "Reparar la modernidad",
     "k": true,
     "a": "Habermas",
     "d": "Si renunciamos a la razón universal, nos quedamos sin herramientas para criticar la injusticia.",
     "c": [
      {
       "rel": "el problema es",
       "t": "La razón instrumental",
       "d": "La razón usada solo como medio para dominar y calcular."
      },
      {
       "rel": "propone",
       "t": "La razón dialógica",
       "k": true,
       "d": "Acuerdos racionales en una comunidad ideal de habla, sin coacciones."
      }
     ]
    },
    {
     "rel": "aporía",
     "t": "¿Todo vale?",
     "d": "Sin verdad objetiva, ¿cómo distinguimos una noticia real de una fake news, o a un experto de un influencer?"
    }
   ],
   "cruces": [
    {
     "de": "La razón dialógica",
     "rel": "responde a",
     "a": "El pensamiento rupturista"
    },
    {
     "de": "La hiperrealidad",
     "rel": "agudiza",
     "a": "¿Todo vale?"
    }
   ],
   "idea": "La posmodernidad declara el fin de los grandes relatos y de la verdad única; Habermas responde que sin una razón dialógica nos quedamos sin herramientas para criticar la injusticia."
  }
 },
 "C7-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Los cambios de paradigma",
  "mermaid": "flowchart TD\n  arist[\"Aristóteles\"]:::key\n  org[\"paradigma organicista\"]:::axis\n  magik[\"Paradigma mágico-animista\"]:::axis\n  mek[\"paradigma mecanicista\"]:::axis\n  esp[\"basado en la experiencia\"]:::key\n  anim[\"la naturaleza = un gran animal\"]\n  ezoh[\"acepta fenómenos extraordinarios\"]\n  inoz[\"mentalidad ingenua\"]\n  makin[\"la naturaleza = máquinas\"]:::key\n  hedad[\"lo real: extensión y movimiento\"]\n  ezind[\"no acepta fuerzas ocultas\"]\n  ondor[\"consecuencias: descubrimientos y matemática en la ciencia\"]:::key\n  arist -->|\"este es su origen\"| org\n  org -->|\"sustituyó a este\"| magik\n  magik -->|\"este lo sustituyó\"| mek\n  magik -->|\"se basa\"| esp\n  esp -->|\"cree\"| anim\n  anim -->|\"acepta\"| ezoh\n  ezoh -->|\"produce\"| inoz\n  mek -->|\"la naturaleza es\"| makin\n  makin -->|\"solo lo real\"| hedad\n  makin -->|\"no acepta\"| ezind\n  mek -->|\"la consecuencia es\"| ondor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cómo ha cambiado la manera de entender la naturaleza?",
   "raiz": "LOS CAMBIOS DE PARADIGMA",
   "raiz_d": "Un paradigma es el marco que comparte una época para explicar la naturaleza; cuando entra en crisis, otro lo sustituye.",
   "ramas": [
    {
     "rel": "Antigüedad y Edad Media",
     "t": "Paradigma organicista",
     "k": true,
     "a": "Aristóteles",
     "d": "La naturaleza es como un gran organismo vivo en el que todo tiende a un fin.",
     "c": [
      {
       "rel": "se basa en",
       "t": "La experiencia de los sentidos",
       "d": "Observación cualitativa y sentido común, sin medir ni experimentar."
      },
      {
       "rel": "explica por",
       "t": "Causas finales",
       "d": "Cada cosa se mueve hacia su lugar natural o su fin (teleología)."
      }
     ]
    },
    {
     "rel": "Renacimiento",
     "t": "Paradigma mágico-animista",
     "k": true,
     "a": "Ficino, Paracelso, Bruno",
     "d": "La naturaleza es un ser animado, lleno de almas, simpatías y antipatías.",
     "c": [
      {
       "rel": "admite",
       "t": "Fuerzas ocultas y hechos extraordinarios",
       "d": "Correspondencias secretas entre astros, cuerpos y plantas."
      },
      {
       "rel": "el sabio es",
       "t": "El mago",
       "d": "Quien conoce esas fuerzas puede dominar la naturaleza (alquimia, astrología)."
      }
     ]
    },
    {
     "rel": "siglo XVII",
     "t": "Paradigma mecanicista",
     "k": true,
     "a": "Galileo, Descartes, Newton",
     "d": "La naturaleza es una máquina regida por leyes matemáticas.",
     "c": [
      {
       "rel": "solo acepta",
       "t": "Extensión y movimiento",
       "d": "Lo real es lo medible; se rechazan las fuerzas ocultas y los fines."
      },
      {
       "rel": "método",
       "t": "Experimento y matemáticas",
       "d": "Base de la ciencia moderna y de sus grandes descubrimientos."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Paradigma mágico-animista",
     "rel": "rompe con",
     "a": "Paradigma organicista"
    },
    {
     "de": "Paradigma mecanicista",
     "rel": "sustituye a",
     "a": "Paradigma mágico-animista"
    },
    {
     "de": "Extensión y movimiento",
     "rel": "elimina",
     "a": "Causas finales"
    }
   ],
   "idea": "La naturaleza pasa de ser un organismo con fines (Aristóteles) a un ser animado lleno de fuerzas ocultas (Renacimiento) y, por fin, a una máquina medible con matemáticas: nace la ciencia moderna."
  }
 },
 "C9-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El feminismo: género, alteridad y debates actuales",
  "mermaid": "flowchart TD\n  fem[\"FEMINISMO\"]\n  sgb[\"distinción sexo-género\"]:::axis\n  ola[\"las olas\"]\n  bea[\"Simone de Beauvoir\"]:::axis\n  but[\"Judith Butler\"]:::axis\n  gaur[\"debates actuales\"]\n  alt[\"la alteridad\"]\n  ezda[\"no se nace mujer, se llega a serlo\"]:::key\n  traz[\"trascendencia e inmanencia\"]\n  perf[\"performatividad del género\"]:::key\n  queer[\"teoría queer\"]\n  deseg[\"deshacer el género\"]\n  fra[\"Fraser: redistribución y reconocimiento\"]:::key\n  nus[\"Nussbaum: capacidades\"]:::key\n  inter[\"interseccionalidad\"]:::key\n  zain[\"ética del cuidado e interdependencia\"]:::key\n  fem -->|\"base\"| sgb\n  fem -->|\"contexto\"| ola\n  sgb --> bea\n  sgb --> but\n  sgb --> gaur\n  bea -->|\"el hombre sujeto, la mujer Otra\"| alt\n  alt -->|\"de ahí\"| ezda\n  ezda -->|\"quiere superar\"| traz\n  but -->|\"el género es acto\"| perf\n  perf -->|\"de ahí\"| queer\n  queer --> deseg\n  gaur --> fra\n  gaur --> nus\n  gaur --> inter\n  traz --> zain\n  deseg --> zain\n  inter --> zain\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cómo ha cambiado el feminismo lo que entendemos por «ser mujer»?",
   "raiz": "EL FEMINISMO",
   "raiz_d": "Teoría y movimiento que denuncia la desigualdad entre los sexos y muestra que es histórica, no natural. Se suele contar por «olas».",
   "ramas": [
    {
     "rel": "primera ola",
     "t": "La igualdad de derechos",
     "a": "Las sufragistas",
     "d": "Siglos XIX y XX: voto, educación y derechos legales para las mujeres.",
     "c": [
      {
       "rel": "límite",
       "t": "Cambiar las leyes no basta",
       "d": "La desigualdad sigue en la familia, el trabajo y la cultura."
      }
     ]
    },
    {
     "rel": "segunda ola",
     "t": "La crítica de toda la cultura",
     "k": true,
     "a": "Simone de Beauvoir",
     "d": "Años 60-80: la opresión no es solo legal, sino estructural.",
     "c": [
      {
       "rel": "punto de partida",
       "t": "«No se nace mujer: se llega a serlo»"
      },
      {
       "rel": "diagnóstico",
       "t": "La mujer como «lo otro»",
       "d": "Definida siempre en relación con el hombre, que se presenta como Sujeto."
      },
      {
       "rel": "de ahí surge",
       "t": "La distinción sexo / género",
       "k": true,
       "d": "El sexo es biológico; el género (lo femenino y lo masculino) es una construcción social."
      }
     ]
    },
    {
     "rel": "debates actuales",
     "t": "Género, diversidad y cuidados",
     "d": "Desde los años 90 el feminismo se amplía y se pluraliza.",
     "c": [
      {
       "rel": "cuestiona",
       "t": "El género como performance",
       "k": true,
       "a": "Judith Butler",
       "d": "El género se hace al repetir actos; no hay una esencia detrás que lo explique."
      },
      {
       "rel": "añade",
       "t": "La interseccionalidad",
       "k": true,
       "d": "La opresión de género se cruza con la clase, la raza, la sexualidad o la migración."
      },
      {
       "rel": "exige",
       "t": "Redistribución y reconocimiento",
       "a": "Nancy Fraser",
       "d": "Justicia económica y respeto a la dignidad, a la vez."
      },
      {
       "rel": "propone",
       "t": "Los cuidados en el centro",
       "a": "Yayo Herrero (ecofeminismo)",
       "d": "Somos vulnerables e interdependientes: la vida y los cuidados deben guiar la política."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Cambiar las leyes no basta",
     "rel": "da paso a",
     "a": "La crítica de toda la cultura"
    },
    {
     "de": "El género como performance",
     "rel": "pone en duda",
     "a": "La distinción sexo / género"
    }
   ],
   "idea": "El feminismo pasa de reclamar derechos a desmontar la idea de una «naturaleza» femenina; hoy discute qué es el género y cómo se cruza con otras desigualdades."
  }
 },
 "ds-A2": {
  "subject": "hf",
  "block": "A",
  "tema": "Métodos del filósofo",
  "title": "Métodos y herramientas del filósofo",
  "mermaid": "flowchart TD\n  center[\"MÉTODOS Y HERRAMIENTAS<br>DEL FILÓSOFO\"]:::axis\n  fu[\"Fuentes de información\"]:::key\n  he[\"Herramientas del filósofo\"]:::key\n  center -->|\"parte de\"| fu\n  center -->|\"las trabaja con\"| he\n  fu --> f1[\"documentos · conferencias<br>· huellas digitales\"]\n  f1 -->|\"se someten a\"| h1[\"1· análisis crítico de las fuentes\"]\n  he --> h1\n  h1 --> h2[\"2· interpretación de documentos\"]\n  h2 --> h3[\"3· identificar problemas filosóficos\"]\n  h3 --> h4[\"4· diálogo basado en argumentos\"]\n  h4 --> h5[\"5· investigación filosófica\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cómo trabaja un filósofo: con qué materiales y con qué herramientas?",
   "raiz": "LOS MÉTODOS DE LA FILOSOFÍA",
   "raiz_d": "Hacer filosofía no es opinar: es formular bien una pregunta, aclarar los conceptos y defender una respuesta con razones.",
   "ramas": [
    {
     "rel": "parte de",
     "t": "Las fuentes",
     "d": "Documentos, conferencias, huellas digitales: textos que hay que leer con espíritu crítico.",
     "c": [
      {
       "rel": "se leen en",
       "t": "Su contexto (historicidad)",
       "k": true,
       "d": "Todo pensamiento nace en una época, una sociedad y una cultura concretas."
      },
      {
       "rel": "obliga a revisar",
       "t": "El canon",
       "d": "Qué es «clásico» no es neutro: se ha dejado fuera a mujeres y a pensadores no europeos."
      }
     ]
    },
    {
     "rel": "las interpreta con",
     "t": "Interpretación",
     "d": "Leer un texto filosófico es interpretarlo.",
     "c": [
      {
       "rel": "su regla",
       "t": "Principio de caridad",
       "k": true,
       "d": "Reconstruir la versión más sólida del autor antes de criticarlo. No es darle la razón."
      }
     ]
    },
    {
     "rel": "defiende sus tesis con",
     "t": "Argumentación",
     "k": true,
     "d": "Defender una conclusión a partir de premisas, mostrando por qué se llega a ella.",
     "c": [
      {
       "rel": "debe detectar la",
       "t": "Falacia",
       "d": "Razonamiento que parece sólido, pero no justifica su conclusión."
      }
     ]
    },
    {
     "rel": "lo ordena todo en la",
     "t": "Investigación filosófica",
     "k": true,
     "d": "Delimitar una pregunta, elegir las fuentes, aclarar los conceptos y construir una posición razonada.",
     "c": [
      {
       "rel": "sigue un orden",
       "t": "Problema, conceptos, tesis, argumentos",
       "d": "Y conclusión, sin olvidar la crítica: las debilidades propias y las posturas contrarias."
      }
     ]
    },
    {
     "rel": "varían con la historia",
     "t": "Métodos y géneros",
     "d": "Cada época trabaja los problemas a su modo y los escribe en su propia forma.",
     "c": [
      {
       "rel": "en la Antigüedad",
       "t": "Diálogo, dialéctica y tratado",
       "a": "Sócrates, Platón, Aristóteles",
       "d": "Preguntar y refutar; ascender a las Ideas; definir, clasificar y buscar causas."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Principio de caridad",
     "rel": "permite criticar con justicia en la",
     "a": "Argumentación"
    },
    {
     "de": "Su contexto (historicidad)",
     "rel": "explica por qué cambian los",
     "a": "Métodos y géneros"
    }
   ],
   "idea": "Hacer filosofía es convertir la opinión en una posición razonable: leer las fuentes en su contexto y con caridad, argumentar con premisas y ordenar la respuesta a una pregunta bien delimitada."
  }
 },
 "ds-A3": {
  "subject": "hf",
  "block": "A",
  "tema": "Origen de la filosofía",
  "title": "El nacimiento de la filosofía en Grecia",
  "mermaid": "flowchart TD\n  center[\"EL NACIMIENTO DE LA FILOSOFÍA<br>EN GRECIA (s. VI a. C.)\"]:::axis\n  paso[\"Paso del mito al logos\"]:::key\n  fac[\"Factores que lo hacen posible\"]:::key\n  center -->|\"consiste en\"| paso\n  center -->|\"lo explican\"| fac\n  paso --> mito[\"MITO:<br>explicación imaginativa (dioses)\"]\n  paso --> logos[\"LOGOS:<br>explicación racional (causas)\"]\n  mito -->|\"da paso al\"| logos\n  fac --> c1[\"democracia de la polis → debate en el ágora\"]\n  fac --> c2[\"esclavitud → tiempo libre para pensar\"]\n  fac --> c3[\"religión sin dogmas → libertad de crítica\"]\n  fac --> c4[\"comercio → contacto con otras culturas\"]\n  fac --> c5[\"leyes escritas → debate sistemático\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Por qué nació la filosofía en Grecia y qué cambió al pasar del mito al logos?",
   "raiz": "DEL MITO AL LOGOS",
   "raiz_d": "Siglo VI a. C., colonias griegas de Jonia (Mileto) y Magna Grecia: primeros intentos de explicar la realidad sin lo sobrenatural.",
   "ramas": [
    {
     "rel": "antes",
     "t": "Mito",
     "k": true,
     "a": "Homero, Hesíodo",
     "d": "Narraciones tradicionales de los poetas sobre el mundo, los seres humanos y los dioses.",
     "c": [
      {
       "rel": "responde a",
       "t": "¿Quién lo hizo?",
       "d": "Lo que ocurre depende de la voluntad caprichosa de los dioses. Se acepta y se transmite."
      },
      {
       "rel": "lo pone en duda la",
       "t": "Crítica de Jenófanes",
       "a": "Jenófanes",
       "d": "Los dioses son una proyección humana: si los bueyes pintaran, pintarían dioses semejantes a bueyes."
      }
     ]
    },
    {
     "rel": "después",
     "t": "Logos",
     "k": true,
     "d": "La razón: buscar las causas en la propia naturaleza (physis), no en los dioses.",
     "c": [
      {
       "rel": "responde a",
       "t": "¿Por qué ocurre necesariamente?",
       "k": true,
       "d": "Las cosas no pasan por capricho: hay necesidad y la physis es un cosmos, un orden."
      },
      {
       "rel": "busca",
       "t": "El arché",
       "d": "El principio del que todo procede."
      },
      {
       "rel": "se somete a",
       "t": "Crítica y discusión",
       "d": "Las explicaciones se critican y se ponen a prueba."
      }
     ]
    },
    {
     "rel": "lo hicieron posible",
     "t": "Condiciones en Grecia",
     "k": true,
     "c": [
      {
       "rel": "hubo",
       "t": "Ocio para pensar",
       "d": "El trabajo de los esclavos daba tiempo libre a los ciudadanos."
      },
      {
       "rel": "no hubo",
       "t": "Libros sagrados ni casta sacerdotal",
       "d": "Ni dogmas ni verdad revelada que imponer."
      },
      {
       "rel": "se extendieron",
       "t": "La polis y el comercio",
       "d": "El contacto con Egipto, Asia y otras culturas relativizó las creencias propias."
      },
      {
       "rel": "nacieron",
       "t": "El ciudadano y el ágora",
       "d": "En la plaza pública se debate y cobra valor la argumentación."
      },
      {
       "rel": "se desarrolló",
       "t": "La escritura alfabética",
       "d": "Fija el pensamiento y permite criticarlo y transmitirlo."
      }
     ]
    },
    {
     "rel": "con sus límites",
     "t": "Un origen con sombras",
     "c": [
      {
       "rel": "dejó fuera a",
       "t": "Mujeres, esclavos y extranjeros",
       "d": "La palabra pública no era para todos."
      },
      {
       "rel": "desmiente el",
       "t": "«Milagro griego»",
       "d": "Grecia heredó saberes de Egipto, Mesopotamia o Fenicia; su novedad fue discutir las explicaciones en público."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Crítica de Jenófanes",
     "rel": "abre el paso al",
     "a": "Logos"
    },
    {
     "de": "El ciudadano y el ágora",
     "rel": "hace posible la",
     "a": "Crítica y discusión"
    }
   ],
   "idea": "El paso del mito al logos no sustituye unas historias por otras: cambia el tipo de explicación, de «¿quién lo hizo?» a «¿por qué ocurre necesariamente?». La novedad griega fue volver discutibles las explicaciones en público."
  }
 },
 "ds-A4": {
  "subject": "hf",
  "block": "A",
  "tema": "Presocráticos",
  "title": "Presocráticos: la búsqueda del arché",
  "mermaid": "flowchart TD\n  center[\"PRESOCRÁTICOS:<br>¿cuál es el arché (principio) de todo?\"]:::axis\n  fis[\"Físicos:<br>un principio material\"]:::key\n  otros[\"Otras respuestas\"]:::key\n  deb[\"El gran debate:<br>cambio vs permanencia\"]:::key\n  center --> fis\n  center --> otros\n  center --> deb\n  fis --> t1[\"Tales → agua\"]\n  fis --> t2[\"Anaximandro → ápeiron\"]\n  fis --> t3[\"Anaxímenes → aire\"]\n  fis --> t4[\"Demócrito → átomos + vacío\"]\n  otros --> p1[\"Pitágoras → números\"]\n  otros --> emp[\"Empédocles → 4 elementos\"]\n  otros --> ana[\"Anaxágoras → nous\"]\n  deb --> her[\"Heráclito → todo fluye (fuego)\"]\n  deb --> par[\"Parménides → el ser es inmutable\"]\n  her -->|\"se opone a\"| par\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si todo cambia, ¿qué permanece? ¿Cuál es el principio (arché) de la realidad?",
   "raiz": "LOS PRESOCRÁTICOS Y EL ARCHÉ",
   "raiz_d": "La physis es un cosmos, un orden. Detrás del cambio debe haber algo que permanezca: el arché, origen, sustrato y causa de todo.",
   "ramas": [
    {
     "rel": "un solo principio material",
     "t": "Monistas de Mileto",
     "k": true,
     "d": "Una única sustancia natural, viva por sí misma (hilozoísmo), que se transforma.",
     "c": [
      {
       "rel": "para Tales",
       "t": "El agua",
       "a": "Tales",
       "d": "Todo lo vivo la necesita y de ella brota."
      },
      {
       "rel": "para Anaximandro",
       "t": "El ápeiron",
       "a": "Anaximandro",
       "d": "Lo indefinido e ilimitado, de donde todo sale y adonde todo vuelve."
      },
      {
       "rel": "para Anaxímenes",
       "t": "El aire",
       "a": "Anaxímenes",
       "d": "Por condensación y rarefacción: primer mecanismo que explica el cambio."
      }
     ]
    },
    {
     "rel": "un principio no material",
     "t": "Pitagóricos",
     "a": "Pitágoras",
     "d": "El número y la proporción: las cosas son como son porque guardan proporciones.",
     "c": [
      {
       "rel": "enseñan",
       "t": "Alma inmortal, cuerpo cárcel",
       "d": "El alma transmigra de un cuerpo a otro. Influirá en Platón."
      }
     ]
    },
    {
     "rel": "el gran debate",
     "t": "El problema del cambio",
     "c": [
      {
       "rel": "lo afirma",
       "t": "Todo fluye",
       "k": true,
       "a": "Heráclito",
       "d": "Devenir continuo y lucha de contrarios, regidos por un logos (el fuego)."
      },
      {
       "rel": "lo niega",
       "t": "El ser es, el no ser no es",
       "k": true,
       "a": "Parménides",
       "d": "El ser es eterno, único e inmutable; el cambio es apariencia de los sentidos.",
       "c": [
        {
         "rel": "de ahí",
         "t": "Razón frente a sentidos",
         "d": "Vía de la verdad (razón) y vía de la opinión (sentidos): nace el problema del conocimiento."
        }
       ]
      }
     ]
    },
    {
     "rel": "varios principios eternos",
     "t": "Pluralistas",
     "k": true,
     "d": "Los principios no nacen ni mueren; cambiar es mezclarse y separarse.",
     "c": [
      {
       "rel": "para Empédocles",
       "t": "Cuatro raíces",
       "a": "Empédocles",
       "d": "Tierra, agua, aire y fuego, que el Amor une y el Odio separa."
      },
      {
       "rel": "para Anaxágoras",
       "t": "Semillas y Nous",
       "a": "Anaxágoras",
       "d": "Infinitas semillas (homeomerías) que una mente, el Nous, pone en movimiento."
      },
      {
       "rel": "para Demócrito",
       "t": "Átomos y vacío",
       "a": "Demócrito",
       "d": "Todo es materia y movimiento, sin finalidad (mecanicismo)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Pluralistas",
     "rel": "toman la eternidad del ser de",
     "a": "El ser es, el no ser no es"
    },
    {
     "de": "Pluralistas",
     "rel": "salvan el cambio de",
     "a": "Todo fluye"
    },
    {
     "de": "Átomos y vacío",
     "rel": "admite un no-ser (el vacío) contra",
     "a": "El ser es, el no ser no es"
    }
   ],
   "idea": "Todos buscan el arché, pero el problema de fondo es el cambio: Heráclito lo afirma, Parménides lo niega y los pluralistas lo salvan con varios principios eternos. Platón heredará el problema."
  }
 },
 "ds-A5": {
  "subject": "hf",
  "block": "A",
  "tema": "Sofistas y Sócrates",
  "title": "Los sofistas y Sócrates",
  "mermaid": "flowchart TD\n  center[\"LOS SOFISTAS Y SÓCRATES\"]:::axis\n  sof[\"SOFISTAS<br>(Protágoras, Gorgias)\"]:::key\n  soc[\"SÓCRATES\"]:::key\n  asp[\"ASPASIA DE MILETO\"]:::key\n  center --> sof\n  center --> soc\n  center --> asp\n  sof -->|\"se enfrentan a\"| soc\n  sof --> s1[\"escepticismo epistemológico\"]\n  sof --> s2[\"relativismo moral\"]\n  sof --> s3[\"las leyes son convención\"]\n  soc --> c1[\"universalismo moral\"]\n  soc --> c2[\"busca definiciones universales\"]\n  soc --> c3[\"intelectualismo moral: saber = virtud\"]\n  soc -->|\"método\"| c4[\"ironía + mayéutica\"]\n  asp --> a1[\"maestra de retórica\"]\n  asp -->|\"influye en\"| soc\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Las leyes y los valores son naturales o convencionales? ¿Hay una verdad válida para todos?",
   "raiz": "SOFISTAS, SÓCRATES Y ASPASIA",
   "raiz_d": "Siglo V a. C., Atenas democrática: con el giro antropológico la filosofía pasa de la physis a la polis.",
   "ramas": [
    {
     "rel": "debate de fondo",
     "t": "Physis frente a nomos",
     "k": true,
     "d": "Lo natural, que no varía, frente a lo acordado por los seres humanos: ley, costumbre, valores.",
     "c": [
      {
       "rel": "según Hipias",
       "t": "Las leyes son convención",
       "a": "Hipias",
       "d": "Varían de una comunidad a otra y, por eso, pueden cambiarse."
      }
     ]
    },
    {
     "rel": "enseñan retórica",
     "t": "Los sofistas",
     "d": "Maestros itinerantes que enseñaban, cobrando, a triunfar en la asamblea.",
     "c": [
      {
       "rel": "defiende el",
       "t": "Relativismo",
       "k": true,
       "a": "Protágoras",
       "d": "«El hombre es la medida de todas las cosas»: no hay una verdad ni una justicia únicas."
      },
      {
       "rel": "defiende el",
       "t": "Escepticismo",
       "a": "Gorgias",
       "d": "Nada hay; si lo hubiera, no se conocería; si se conociera, no se comunicaría."
      },
      {
       "rel": "reducen el lenguaje a",
       "t": "Persuasión",
       "d": "Retórica y erística: convencer, no decir lo que las cosas son."
      }
     ]
    },
    {
     "rel": "combate a los sofistas",
     "t": "Sócrates",
     "d": "No cobra, dialoga en vez de dar discursos y parte de «Solo sé que no sé nada».",
     "c": [
      {
       "rel": "frente al relativismo",
       "t": "Definiciones universales",
       "k": true,
       "d": "Conceptos que expresan lo común a todas las cosas de una clase."
      },
      {
       "rel": "en moral",
       "t": "Intelectualismo moral",
       "d": "Solo quien conoce el bien obra bien; el mal se comete por ignorancia."
      },
      {
       "rel": "con el método",
       "t": "Ironía y mayéutica",
       "k": true,
       "d": "Descubrir la propia ignorancia (aporía) y ayudar a «dar a luz» la verdad."
      }
     ]
    },
    {
     "rel": "excepción en la polis patriarcal",
     "t": "Aspasia de Mileto",
     "d": "Oradora y maestra de retórica cuando la ciudadanía era solo de los varones libres.",
     "c": [
      {
       "rel": "Sócrates la llama",
       "t": "«Mi maestra»",
       "d": "Así la nombra en el Menéxeno de Platón."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Definiciones universales",
     "rel": "refutan el",
     "a": "Relativismo"
    },
    {
     "de": "Ironía y mayéutica",
     "rel": "diálogo que busca la verdad, no la",
     "a": "Persuasión"
    },
    {
     "de": "Aspasia de Mileto",
     "rel": "enseña retórica a",
     "a": "Sócrates"
    }
   ],
   "idea": "Los sofistas hacen de las leyes y los valores una convención (nomos) y de la verdad algo relativo; Sócrates busca, dialogando, definiciones universales que valgan para todos."
  }
 },
 "ds-A6": {
  "subject": "hf",
  "block": "A",
  "tema": "Platón y Aristóteles",
  "title": "Platón y Aristóteles",
  "mermaid": "flowchart TD\n  center[\"PLATÓN Y ARISTÓTELES\"]:::axis\n  pla[\"PLATÓN\"]:::key\n  ari[\"ARISTÓTELES\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"critica a\"| pla\n  pla --> p1[\"dualismo: mundo de las Ideas<br>vs mundo físico\"]\n  pla --> p2[\"anamnesis (reminiscencia)\"]\n  pla --> p3[\"episteme (saber) vs doxa (opinión)\"]\n  ari --> a1[\"hilemorfismo: materia + forma\"]\n  ari --> a2[\"teoría de las cuatro causas\"]\n  ari --> a3[\"de la potencia al acto\"]\n  a1 -->|\"frente al dualismo\"| p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Dónde está lo verdaderamente real y cómo lo conocemos?",
   "raiz": "PLATÓN Y ARISTÓTELES: LA REALIDAD",
   "raiz_d": "Dos respuestas al problema heredado de Heráclito y Parménides: cómo pensar a la vez lo que cambia y lo que permanece.",
   "ramas": [
    {
     "rel": "separa dos mundos",
     "t": "Platón: dualismo ontológico",
     "k": true,
     "a": "Platón",
     "c": [
      {
       "rel": "lo real son",
       "t": "Las Ideas",
       "k": true,
       "d": "Modelos eternos, inmutables y universales. En la cima, la Idea del Bien."
      },
      {
       "rel": "sus copias son",
       "t": "Las cosas sensibles",
       "d": "Cambiantes y múltiples; participan de las Ideas y las imitan."
      },
      {
       "rel": "se conoce por",
       "t": "Reminiscencia",
       "d": "Conocer es recordar lo que el alma contempló antes de encarnarse."
      },
      {
       "rel": "se asciende",
       "t": "De la doxa a la episteme",
       "d": "De la opinión sobre lo sensible a la ciencia de lo inteligible (dialéctica).",
       "c": [
        {
         "rel": "lo narra la",
         "t": "Alegoría de la caverna",
         "d": "República VII: subir de las sombras hasta el Sol, la Idea del Bien."
        }
       ]
      }
     ]
    },
    {
     "rel": "une materia y forma",
     "t": "Aristóteles: hilemorfismo",
     "k": true,
     "a": "Aristóteles",
     "c": [
      {
       "rel": "lo real es",
       "t": "La sustancia concreta",
       "k": true,
       "d": "Cada cosa individual, compuesta de materia y forma."
      },
      {
       "rel": "la forma está",
       "t": "En las cosas mismas",
       "d": "No en un mundo aparte: es la estructura de la propia cosa."
      },
      {
       "rel": "el cambio es",
       "t": "Paso de la potencia al acto",
       "d": "Real y explicable por sus causas (ver «Las causas del cambio»)."
      },
      {
       "rel": "se conoce por",
       "t": "Abstracción",
       "d": "El entendimiento extrae la forma a partir de lo que dan los sentidos."
      }
     ]
    },
    {
     "rel": "Aristóteles objeta",
     "t": "Crítica de las Ideas",
     "d": "Separar las formas de las cosas duplica la realidad sin explicarla.",
     "c": [
      {
       "rel": "por ejemplo",
       "t": "El tercer hombre",
       "d": "Si la cosa y la Idea se parecen, haría falta otra Idea para explicarlo, y así al infinito."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Abstracción",
     "rel": "frente a la",
     "a": "Reminiscencia"
    },
    {
     "de": "En las cosas mismas",
     "rel": "no en un mundo aparte como",
     "a": "Las Ideas"
    },
    {
     "de": "Crítica de las Ideas",
     "rel": "rechaza la separación de",
     "a": "Las Ideas"
    }
   ],
   "idea": "Platón pone lo real en un mundo de Ideas separado, y conocer es recordar; Aristóteles lo pone en las sustancias concretas, compuestas de materia y forma, y conocer es abstraer a partir de los sentidos."
  }
 },
 "ds-A7": {
  "subject": "hf",
  "block": "A",
  "tema": "Antropología clásica",
  "title": "Antropología clásica: la psique",
  "mermaid": "flowchart TD\n  center[\"ANTROPOLOGÍA CLÁSICA:<br>¿qué es la psique (el alma)?\"]:::axis\n  soc[\"SÓCRATES\"]:::key\n  pla[\"PLATÓN\"]:::key\n  ari[\"ARISTÓTELES\"]:::key\n  center --> soc\n  soc -->|\"desarrollado por\"| pla\n  pla -->|\"corregido por\"| ari\n  soc --> s1[\"«conócete a ti mismo»\"]\n  soc --> s2[\"el alma es lo más valioso\"]\n  soc --> s3[\"conocimiento = virtud\"]\n  pla --> p1[\"alma inmortal, tres partes\"]\n  pla --> p2[\"el cuerpo es su cárcel\"]\n  pla --> p3[\"dualismo antropológico\"]\n  ari --> a1[\"el alma es forma: no existe sin cuerpo\"]\n  ari --> a2[\"tres almas: vegetativa,<br>sensitiva, racional\"]\n  ari --> a3[\"unidad sustancial (cuerpo + alma)\"]\n  p3 -->|\"rechazado por\"| a3\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué es el alma (psique) y qué relación tiene con el cuerpo?",
   "raiz": "LA PSIQUE EN LA GRECIA CLÁSICA",
   "raiz_d": "Con el giro antropológico la pregunta pasa a ser «¿quién soy yo y cómo debo vivir?».",
   "ramas": [
    {
     "rel": "hay que cuidar el alma",
     "t": "Sócrates",
     "a": "Sócrates",
     "d": "La verdadera libertad es conocerse y gobernarse a uno mismo.",
     "c": [
      {
       "rel": "su lema",
       "t": "«Conócete a ti mismo»",
       "d": "Del templo de Delfos: vivir sin examinarse es vivir dormido."
      }
     ]
    },
    {
     "rel": "separa alma y cuerpo",
     "t": "Platón: dualismo antropológico",
     "k": true,
     "a": "Platón",
     "c": [
      {
       "rel": "el alma es",
       "t": "Inmortal y preexistente",
       "d": "Contempló las Ideas antes de nacer y transmigra (metempsicosis), herencia pitagórica."
      },
      {
       "rel": "el cuerpo es",
       "t": "Cárcel del alma",
       "k": true,
       "d": "La distrae con deseos y temores y le impide alcanzar la verdad."
      },
      {
       "rel": "se divide en",
       "t": "Tres partes del alma",
       "d": "Racional (el auriga), irascible y concupiscible: el mito del carro alado."
      }
     ]
    },
    {
     "rel": "une alma y cuerpo",
     "t": "Aristóteles: hilemorfismo",
     "k": true,
     "a": "Aristóteles",
     "c": [
      {
       "rel": "el alma es",
       "t": "Forma del cuerpo vivo",
       "k": true,
       "d": "No existe sin él, como la figura de la estatua no existe sin el bronce."
      },
      {
       "rel": "el ser humano es",
       "t": "Una sola sustancia",
       "d": "Materia (el cuerpo) y forma (el alma) unidas."
      },
      {
       "rel": "el alma tiene",
       "t": "Tres funciones",
       "d": "Vegetativa (todo ser vivo), sensitiva (animales) y racional (solo el ser humano)."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Sócrates",
     "rel": "su cuidado del alma inspira el",
     "a": "Platón: dualismo antropológico"
    },
    {
     "de": "Forma del cuerpo vivo",
     "rel": "rechaza la idea de",
     "a": "Cárcel del alma"
    }
   ],
   "idea": "Para Platón somos un alma inmortal presa en un cuerpo; para Aristóteles, una sola sustancia en la que el alma es la forma del cuerpo y no existe sin él."
  }
 },
 "ds-A8": {
  "subject": "hf",
  "block": "A",
  "tema": "Ética clásica",
  "title": "El debate ético",
  "mermaid": "flowchart TD\n  center[\"EL DEBATE ÉTICO CLÁSICO\"]:::axis\n  sp[\"SÓCRATES Y PLATÓN:<br>intelectualismo moral\"]:::key\n  ari[\"ARISTÓTELES:<br>ética de la virtud\"]:::key\n  center --> sp\n  center --> ari\n  ari -->|\"se distancia de\"| sp\n  sp --> s1[\"conocer el bien → obrar bien\"]\n  sp --> s2[\"nadie obra mal a propósito<br>(solo por ignorancia)\"]\n  ari --> a1[\"la virtud se cultiva con el hábito\"]\n  ari --> a2[\"término medio entre dos extremos\"]\n  ari --> a3[\"eudaimonía: la felicidad como fin\"]\n  s1 -->|\"saber no basta:<br>hay que habituarse\"| a1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué es la virtud y cómo se alcanza la felicidad?",
   "raiz": "LA ÉTICA CLÁSICA",
   "raiz_d": "Areté (virtud) y eudaimonía (felicidad): el intelectualismo las une en el saber; Aristóteles, en el hábito.",
   "ramas": [
    {
     "rel": "la virtud es saber",
     "t": "Sócrates: intelectualismo moral",
     "k": true,
     "a": "Sócrates",
     "c": [
      {
       "rel": "por eso",
       "t": "«Nadie hace el mal voluntariamente»",
       "d": "Quien obra mal lo hace por ignorancia."
      },
      {
       "rel": "une",
       "t": "Ciencia, virtud y felicidad",
       "d": "Quien conoce el bien lo practica y es feliz."
      }
     ]
    },
    {
     "rel": "matiza el intelectualismo",
     "t": "Platón: virtud y purificación",
     "a": "Platón",
     "d": "El alma se libera del cuerpo para contemplar la Idea del Bien; la virtud suprema es la sabiduría.",
     "c": [
      {
       "rel": "una virtud por parte",
       "t": "Prudencia, valor, templanza",
       "d": "De la parte racional, la irascible y la concupiscible del alma."
      },
      {
       "rel": "su armonía es",
       "t": "La justicia",
       "d": "Cada parte cumple su función bajo el gobierno de la razón."
      }
     ]
    },
    {
     "rel": "la virtud es hábito",
     "t": "Aristóteles: ética de la virtud",
     "k": true,
     "a": "Aristóteles",
     "c": [
      {
       "rel": "fin último",
       "t": "Eudaimonía",
       "k": true,
       "d": "Vida plena: actividad del alma conforme a la virtud a lo largo de toda una vida."
      },
      {
       "rel": "distingue",
       "t": "Virtudes dianoéticas y éticas",
       "d": "Las del entendimiento se aprenden; las del carácter se adquieren repitiendo actos."
      },
      {
       "rel": "la virtud ética es",
       "t": "Término medio",
       "k": true,
       "d": "Entre dos vicios: la valentía, entre cobardía y temeridad. Lo fija la prudencia."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Aristóteles: ética de la virtud",
     "rel": "saber no basta, hay que habituarse:",
     "a": "Sócrates: intelectualismo moral"
    },
    {
     "de": "Término medio",
     "rel": "lo fija la prudencia, no una Idea:",
     "a": "Platón: virtud y purificación"
    }
   ],
   "idea": "Para Sócrates y Platón basta conocer el bien para obrarlo; Aristóteles responde que la virtud ética es un hábito, el término medio que fija la prudencia, y que la felicidad es una vida entera conforme a la virtud."
  }
 },
 "ds-A9": {
  "subject": "hf",
  "block": "A",
  "tema": "Política clásica",
  "title": "El debate político",
  "mermaid": "flowchart TD\n  center[\"EL DEBATE POLÍTICO CLÁSICO\"]:::axis\n  pla[\"PLATÓN:<br>la ciudad ideal (utopía)\"]:::key\n  ari[\"ARISTÓTELES:<br>política realista\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"más pragmático que\"| pla\n  pla --> p1[\"tres clases sociales\"]\n  pla --> p2[\"gobierno de reyes filósofos\"]\n  pla --> p3[\"crítica de la democracia\"]\n  ari --> a0[\"el ser humano es zoon politikon<br>(animal político)\"]\n  ari --> rectos[\"Gobiernos rectos:<br>monarquía · aristocracia · república\"]\n  ari --> desv[\"Gobiernos desviados:<br>tiranía · oligarquía · demagogia\"]\n  rectos -->|\"se corrompen en\"| desv\n  ari -->|\"la mejor forma\"| a4[\"la república\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cuál es el mejor orden político y quién debe gobernar?",
   "raiz": "LA POLÍTICA CLÁSICA",
   "raiz_d": "Tras la condena de Sócrates (399 a. C.): si la democracia pudo matar al más justo, ¿cuál es el mejor orden social?",
   "ramas": [
    {
     "rel": "diseña la ciudad ideal",
     "t": "Platón: la República",
     "k": true,
     "a": "Platón",
     "d": "Una utopía: la ciudad es el alma escrita en grande.",
     "c": [
      {
       "rel": "se divide en",
       "t": "Tres clases sociales",
       "d": "Productores (templanza), guardianes (valor) y gobernantes-filósofos (prudencia)."
      },
      {
       "rel": "la justicia es",
       "t": "Cada clase en su función",
       "d": "Sin invadir la función de las demás."
      },
      {
       "rel": "debe gobernar",
       "t": "El rey filósofo",
       "k": true,
       "d": "Solo quien conoce la Idea del Bien. Por eso critica la democracia de su época."
      },
      {
       "rel": "si se corrompe",
       "t": "Ciclo de degeneración",
       "d": "Timocracia, oligarquía, democracia y, la peor de todas, tiranía."
      }
     ]
    },
    {
     "rel": "estudia la polis real",
     "t": "Aristóteles: la Política",
     "k": true,
     "a": "Aristóteles",
     "c": [
      {
       "rel": "parte de que",
       "t": "Zoon politikón",
       "k": true,
       "d": "El ser humano es un animal político: solo vive plenamente en comunidad."
      },
      {
       "rel": "se organiza en",
       "t": "Familia, aldea y polis",
       "d": "La polis es la comunidad perfecta: busca no solo vivir, sino vivir bien."
      },
      {
       "rel": "clasifica",
       "t": "Regímenes justos y degenerados",
       "d": "Según quién gobierna (uno, pocos, muchos) y para quién.",
       "c": [
        {
         "rel": "buscan el bien común",
         "t": "Monarquía, aristocracia, república"
        },
        {
         "rel": "buscan el interés propio",
         "t": "Tiranía, oligarquía, demagogia"
        }
       ]
      },
      {
       "rel": "prefiere",
       "t": "El régimen que evita los extremos",
       "d": "Adaptado a cada pueblo y apoyado en la clase media: la política también es término medio."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "El régimen que evita los extremos",
     "rel": "frente al gobierno del sabio:",
     "a": "El rey filósofo"
    },
    {
     "de": "Tiranía, oligarquía, demagogia",
     "rel": "también son corrupciones, como el",
     "a": "Ciclo de degeneración"
    }
   ],
   "idea": "Platón diseña la ciudad justa ideal, gobernada por quien conoce el Bien; Aristóteles parte de la polis real y del ser humano como animal político, y prefiere el régimen que busca el bien común evitando los extremos."
  }
 },
 "ds-A10": {
  "subject": "hf",
  "block": "A",
  "tema": "Helenismo",
  "title": "Las escuelas helenísticas",
  "mermaid": "flowchart TD\n  center[\"ESCUELAS HELENÍSTICAS\"]:::axis\n  meta[\"Meta común: la felicidad<br>como serenidad (ataraxia)\"]:::key\n  center -->|\"todas buscan\"| meta\n  epi[\"EPICUREÍSMO\"]:::key\n  est[\"ESTOICISMO\"]:::key\n  cin[\"CINISMO\"]:::key\n  esc[\"ESCEPTICISMO\"]:::key\n  meta --> epi\n  meta --> est\n  meta --> cin\n  meta --> esc\n  epi -->|\"vía\"| e1[\"placer moderado,<br>evitar el dolor\"]\n  est -->|\"vía\"| s1[\"aceptar el destino<br>(apatía)\"]\n  cin -->|\"vía\"| c1[\"vivir según la naturaleza<br>(autarquía)\"]\n  esc -->|\"vía\"| x1[\"suspender el juicio<br>(epojé)\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cómo ser feliz cuando la polis desaparece y el mundo se vuelve incierto?",
   "raiz": "LAS ESCUELAS HELENÍSTICAS",
   "raiz_d": "Tras Alejandro Magno, la polis da paso a grandes reinos: la filosofía se vuelve hacia el individuo y su felicidad interior.",
   "ramas": [
    {
     "rel": "renunciar a lo artificial",
     "t": "Cinismo",
     "a": "Antístenes, Diógenes de Sínope",
     "c": [
      {
       "rel": "su ideal",
       "t": "Autarquía",
       "k": true,
       "d": "Autosuficiencia: no depender de nada ni de nadie."
      },
      {
       "rel": "su camino",
       "t": "Vivir conforme a la naturaleza",
       "d": "Rechazar convenciones, riqueza, poder y fama: son necesidades artificiales."
      }
     ]
    },
    {
     "rel": "aceptar el orden del mundo",
     "t": "Estoicismo",
     "a": "Zenón de Citio",
     "c": [
      {
       "rel": "su ideal",
       "t": "Apatía y ataraxia",
       "k": true,
       "d": "Sin pasiones que perturben el alma; paz interior."
      },
      {
       "rel": "su camino",
       "t": "Aceptar el logos y el destino",
       "d": "Solo importa lo que depende de nosotros: nuestros juicios y actitudes."
      },
      {
       "rel": "de ahí",
       "t": "Cosmopolitismo",
       "d": "Todos somos ciudadanos del mismo mundo."
      }
     ]
    },
    {
     "rel": "buscar el placer sereno",
     "t": "Epicureísmo",
     "a": "Epicuro",
     "c": [
      {
       "rel": "su ideal",
       "t": "Placer como ausencia de dolor",
       "k": true,
       "d": "Sin dolor en el cuerpo (aponía) ni turbación en el alma (ataraxia); nada de excesos."
      },
      {
       "rel": "su camino",
       "t": "El tetrafármaco",
       "d": "No temer a los dioses ni a la muerte; el bien es fácil de lograr y el mal, de soportar."
      }
     ]
    },
    {
     "rel": "renunciar a la certeza",
     "t": "Escepticismo",
     "a": "Pirrón de Elis",
     "c": [
      {
       "rel": "parte de que",
       "t": "No hay conocimiento seguro",
       "d": "A cada afirmación se le opone otra con razones igual de válidas."
      },
      {
       "rel": "su camino",
       "t": "Epojé",
       "k": true,
       "d": "Suspender el juicio, no afirmar ni negar nada: de ahí nace la ataraxia."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Placer como ausencia de dolor",
     "rel": "comparte la ataraxia con",
     "a": "Apatía y ataraxia"
    },
    {
     "de": "Epojé",
     "rel": "también desemboca en la",
     "a": "Apatía y ataraxia"
    }
   ],
   "idea": "Sin una polis que dé sentido, las cuatro escuelas buscan la felicidad del individuo: la autarquía cínica, la apatía estoica, el placer sereno de Epicuro y la suspensión del juicio escéptica."
  }
 },
 "ds-B1": {
  "subject": "hf",
  "block": "B",
  "tema": "Filosofía medieval",
  "title": "La filosofía medieval",
  "mermaid": "flowchart TD\n  center[\"LA FILOSOFÍA MEDIEVAL\"]:::axis\n  hilo[\"Tema central:<br>¿puede la razón demostrar a Dios?\"]:::key\n  et[\"Cuatro etapas\"]:::key\n  center -->|\"gira en torno a\"| hilo\n  center --> et\n  et --> e1[\"Patrística → Agustín\"]\n  e1 --> e2[\"Escolástica temprana → Anselmo\"]\n  e2 --> e3[\"Escolástica tardía → Tomás de Aquino\"]\n  e3 --> e4[\"Nominalismo → Ockham\"]\n  e1 -->|\"prueba\"| p1[\"la verdad interior (Agustín)\"]\n  e3 -->|\"prueba\"| p2[\"las cinco vías (Tomás)\"]\n  e4 -->|\"pone en duda\"| p3[\"las pruebas racionales (Ockham)\"]\n  p3 -->|\"acaba separando\"| sep[\"fe y razón\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cómo se organizó la filosofía medieval y qué grandes problemas discutió?",
   "raiz": "LA FILOSOFÍA MEDIEVAL",
   "raiz_d": "Nace con el cristianismo y gira en torno a un problema nuevo: la relación entre fe y razón.",
   "ramas": [
    {
     "rel": "primera etapa",
     "t": "Patrística",
     "k": true,
     "a": "Agustín de Hipona",
     "d": "Siglos II-VIII: los Padres de la Iglesia.",
     "c": [
      {
       "rel": "tarea",
       "t": "Defender el dogma cristiano",
       "d": "Frente a las herejías, apoyándose en la filosofía griega."
      },
      {
       "rel": "se inspira en",
       "t": "El neoplatonismo",
       "a": "Plotino",
       "d": "Reinterpretación de Platón que une filosofía y experiencia religiosa."
      }
     ]
    },
    {
     "rel": "segunda etapa",
     "t": "Escolástica",
     "k": true,
     "a": "Anselmo, Tomás de Aquino",
     "d": "Siglos IX-XIV: filosofía de las universidades.",
     "c": [
      {
       "rel": "busca",
       "t": "Una síntesis entre fe y razón",
       "d": "Sistemática; la razón se ejercita, pero subordinada a la fe."
      },
      {
       "rel": "con un método",
       "t": "Lectio, quaestio, disputatio",
       "d": "Leer y comentar las autoridades, plantear la cuestión con argumentos a favor y en contra, y debatirla."
      }
     ]
    },
    {
     "rel": "gran debate",
     "t": "El problema de los universales",
     "k": true,
     "d": "¿Qué son los conceptos generales, como «humanidad» o «blancura»?",
     "c": [
      {
       "rel": "existen realmente",
       "t": "Realismo",
       "a": "Platón, Agustín",
       "d": "En las Ideas o en la mente de Dios."
      },
      {
       "rel": "existen en la mente",
       "t": "Conceptualismo",
       "a": "Abelardo",
       "d": "Son conceptos que la mente forma."
      },
      {
       "rel": "son solo nombres",
       "t": "Nominalismo",
       "a": "Ockham",
       "d": "Solo existen los individuos."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Patrística",
     "rel": "defiende el",
     "a": "Realismo"
    },
    {
     "de": "Nominalismo",
     "rel": "pone en crisis la",
     "a": "Una síntesis entre fe y razón"
    }
   ],
   "idea": "Dos etapas, patrística y escolástica, con un mismo problema de fondo (fe y razón); el nominalismo de Ockham, al dejar solo individuos, rompe la síntesis y anuncia la modernidad."
  }
 },
 "ds-B2": {
  "subject": "hf",
  "block": "B",
  "tema": "Fe y razón",
  "title": "Fe y razón",
  "mermaid": "flowchart TD\n  center[\"FE Y RAZÓN\"]:::axis\n  q[\"¿Pueden fe y razón<br>ir juntas hacia la verdad?\"]\n  center --> q\n  agus[\"AGUSTÍN\"]:::key\n  tom[\"TOMÁS DE AQUINO\"]:::key\n  ter[\"TERTULIANO\"]:::key\n  q -->|\"unión\"| agus\n  q -->|\"armonía\"| tom\n  q -->|\"oposición\"| ter\n  agus -->|\"lema\"| a1[\"«Cree para entender,<br>entiende para creer»\"]\n  agus --> a2[\"fe y razón se necesitan\"]\n  tom --> t1[\"dos ámbitos:<br>teología y filosofía\"]\n  tom -->|\"no se contradicen\"| t2[\"la razón prepara la fe<br>(preámbulos)\"]\n  ter -->|\"«Creo porque es absurdo»\"| te1[\"la fe basta,<br>la razón sobra\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Puede la razón llegar a las verdades de la fe, o van por caminos distintos?",
   "raiz": "FE Y RAZÓN",
   "raiz_d": "De la oposición a la separación: cinco respuestas medievales, también sobre si se puede demostrar que Dios existe.",
   "ramas": [
    {
     "rel": "oposición",
     "t": "Tertuliano",
     "d": "«Creo porque es absurdo»: la fe no necesita de la razón."
    },
    {
     "rel": "la fe guía",
     "t": "Agustín",
     "k": true,
     "d": "«Cree para entender»: la fe guía y la razón comprende.",
     "c": [
      {
       "rel": "busca a Dios en",
       "t": "La interioridad",
       "d": "«En el interior del hombre habita la verdad»: el alma se eleva a Dios."
      },
      {
       "rel": "conoce por",
       "t": "Iluminación",
       "d": "Dios ilumina el alma para que conozca las verdades eternas."
      }
     ]
    },
    {
     "rel": "dos verdades",
     "t": "Averroes",
     "d": "Doble verdad: una para la fe y otra para la razón."
    },
    {
     "rel": "colaboración",
     "t": "Tomás de Aquino",
     "k": true,
     "d": "La razón prepara y defiende la fe; no pueden contradecirse.",
     "c": [
      {
       "rel": "distingue",
       "t": "Verdades naturales y sobrenaturales",
       "d": "Unas las alcanza la razón; otras solo se conocen por revelación."
      },
      {
       "rel": "demuestra a Dios con",
       "t": "Las cinco vías",
       "d": "Pruebas a posteriori: parten del movimiento, las causas, la contingencia, los grados y el orden."
      }
     ]
    },
    {
     "rel": "separación",
     "t": "Ockham",
     "k": true,
     "d": "La razón no puede demostrar las verdades de la fe.",
     "c": [
      {
       "rel": "con su navaja",
       "t": "No multiplicar los entes",
       "d": "Elimina todo lo que no sea estrictamente necesario."
      },
      {
       "rel": "resultado",
       "t": "La teología deja de ser ciencia",
       "d": "Fe y razón siguen caminos distintos: se abre paso la modernidad."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Las cinco vías",
     "rel": "parten del mundo, no de",
     "a": "La interioridad"
    },
    {
     "de": "La teología deja de ser ciencia",
     "rel": "rompe la síntesis de",
     "a": "Tomás de Aquino"
    }
   ],
   "idea": "Agustín busca a Dios dentro y Tomás lo demuestra desde el mundo; ambos creen que fe y razón colaboran. Ockham las separa: la razón no alcanza las verdades de la fe."
  }
 },
 "ds-B3": {
  "subject": "hf",
  "block": "B",
  "tema": "Renacimiento",
  "title": "El Renacimiento",
  "mermaid": "flowchart TD\n  center[\"EL RENACIMIENTO\"]:::axis\n  soc[\"Cambios sociales\"]:::key\n  ant[\"Antropocentrismo\"]:::key\n  cie[\"Revolución científica\"]:::key\n  center --> soc\n  soc -->|\"hacen posible\"| ant\n  ant -->|\"desemboca en\"| cie\n  soc --> s1[\"crisis del feudalismo\"]\n  soc --> s2[\"auge de la burguesía\"]\n  soc --> s3[\"la imprenta (Gutenberg)\"]\n  ant --> a1[\"el ser humano en el centro\"]\n  ant --> a2[\"humanismo\"]\n  cie --> c1[\"heliocentrismo<br>(Copérnico, Galileo)\"]\n  cie --> c2[\"método empírico\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cómo pasa Europa de un mundo centrado en Dios a uno centrado en el ser humano?",
   "raiz": "EL RENACIMIENTO",
   "raiz_d": "Siglos XIV-XVI: del teocentrismo medieval al antropocentrismo; raíces de la modernidad.",
   "ramas": [
    {
     "rel": "base material",
     "t": "Cambios sociales",
     "d": "Se hunde el orden feudal y agrario.",
     "c": [
      {
       "rel": "en política",
       "t": "Monarquías y estados-nación",
       "d": "Sustituyen al feudalismo."
      },
      {
       "rel": "en economía",
       "t": "Comercio, banca, burguesía",
       "d": "Primeros pasos del capitalismo."
      },
      {
       "rel": "en la cultura",
       "t": "La imprenta",
       "a": "Gutenberg",
       "d": "Revoluciona la difusión del conocimiento."
      }
     ]
    },
    {
     "rel": "nueva mirada",
     "t": "Humanismo",
     "k": true,
     "d": "Se redescubren los textos griegos y latinos.",
     "c": [
      {
       "rel": "pone en el centro",
       "t": "Antropocentrismo",
       "d": "El ser humano, no Dios, es el centro de la reflexión."
      },
      {
       "rel": "valora",
       "t": "Dignitas hominis",
       "d": "La dignidad y el potencial de cada individuo."
      }
     ]
    },
    {
     "rel": "ruptura religiosa",
     "t": "Reforma protestante",
     "a": "Lutero (1517)",
     "d": "Cuestiona la autoridad de la Iglesia.",
     "c": [
      {
       "rel": "defiende",
       "t": "Libre interpretación de la Biblia",
       "d": "Relación directa del creyente con Dios."
      },
      {
       "rel": "impulsa",
       "t": "Secularización",
       "d": "La cultura se va independizando de la religión."
      }
     ]
    },
    {
     "rel": "nueva ciencia",
     "t": "Revolución científica",
     "k": true,
     "a": "Copérnico, Kepler, Galileo, Newton",
     "d": "Siglos XVI-XVII.",
     "c": [
      {
       "rel": "cosmos",
       "t": "Heliocentrismo",
       "d": "El Sol en el centro; la Tierra gira a su alrededor."
      },
      {
       "rel": "método",
       "t": "Observación y experimentación",
       "d": "Sustituyen la autoridad de Aristóteles y de la Biblia."
      },
      {
       "rel": "naturaleza",
       "t": "Mecanicismo",
       "d": "Una máquina regida por leyes matemáticas, no un organismo con fines."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La imprenta",
     "rel": "hace posible la",
     "a": "Libre interpretación de la Biblia"
    },
    {
     "de": "Antropocentrismo",
     "rel": "da confianza para la",
     "a": "Observación y experimentación"
    }
   ],
   "idea": "Humanismo, Reforma y nueva ciencia empujan en la misma dirección: menos autoridad (de la Iglesia, de Aristóteles) y más confianza en el individuo y su razón."
  }
 },
 "ds-B4": {
  "subject": "hf",
  "block": "B",
  "tema": "Racionalismo y empirismo",
  "title": "Racionalismo y empirismo",
  "mermaid": "flowchart TD\n  center[\"RACIONALISMO Y EMPIRISMO\"]:::axis\n  rac[\"RACIONALISMO<br>(Descartes)\"]:::key\n  emp[\"EMPIRISMO<br>(Hume)\"]:::key\n  center --> rac\n  center --> emp\n  rac -->|\"¿razón o experiencia?\"| emp\n  rac --> r1[\"la fuente es la razón\"]\n  rac --> r2[\"hay ideas innatas (a priori)\"]\n  rac --> r3[\"método matemático-deductivo\"]\n  rac --> r4[\"«cogito ergo sum»\"]\n  emp --> e1[\"la fuente es la experiencia\"]\n  emp --> e2[\"la mente es una tabula rasa\"]\n  emp --> e3[\"conocimiento solo probable\"]\n  emp --> e4[\"crítica de la causalidad\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿En qué se oponen exactamente Descartes y Hume cuando explican el conocimiento?",
   "raiz": "DESCARTES FRENTE A HUME",
   "raiz_d": "Siglos XVII-XVIII: la epistemología pasa al centro. Racionalismo y empirismo, punto por punto.",
   "ramas": [
    {
     "rel": "primera diferencia",
     "t": "Origen del conocimiento",
     "k": true,
     "c": [
      {
       "rel": "según Descartes",
       "t": "La razón y sus ideas innatas",
       "d": "Dios, las verdades matemáticas: la mente las posee desde el nacimiento."
      },
      {
       "rel": "según Hume",
       "t": "La experiencia: las impresiones",
       "d": "No hay ideas innatas; toda idea copia una impresión."
      }
     ]
    },
    {
     "rel": "segunda diferencia",
     "t": "Modelo y método",
     "c": [
      {
       "rel": "según Descartes",
       "t": "Matemática y deducción",
       "d": "De lo claro y distinto se deducen las demás verdades."
      },
      {
       "rel": "según Hume",
       "t": "Observación e inducción",
       "d": "Se generaliza a partir de casos observados."
      }
     ]
    },
    {
     "rel": "tercera diferencia",
     "t": "La causalidad",
     "k": true,
     "c": [
      {
       "rel": "según Descartes",
       "t": "Evidente a la razón",
       "d": "La causa tiene al menos tanta realidad como su efecto: con ese principio prueba que Dios existe."
      },
      {
       "rel": "según Hume",
       "t": "Costumbre, no necesidad",
       "d": "Solo vemos que un hecho sigue a otro; la conexión la pone el hábito."
      }
     ]
    },
    {
     "rel": "cuarta diferencia",
     "t": "El yo",
     "c": [
      {
       "rel": "según Descartes",
       "t": "Una cosa que piensa",
       "d": "«Pienso, luego existo»: el yo es sustancia pensante, la primera certeza."
      },
      {
       "rel": "según Hume",
       "t": "Un haz de percepciones",
       "d": "No hay impresión de un yo permanente."
      }
     ]
    },
    {
     "rel": "resultado",
     "t": "Alcance del conocimiento",
     "k": true,
     "c": [
      {
       "rel": "según Descartes",
       "t": "Certeza y metafísica",
       "d": "La metafísica es la raíz del árbol del saber."
      },
      {
       "rel": "según Hume",
       "t": "Probabilidad y escepticismo",
       "d": "La metafísica queda limitada por la experiencia."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La razón y sus ideas innatas",
     "rel": "permite la",
     "a": "Matemática y deducción"
    },
    {
     "de": "Costumbre, no necesidad",
     "rel": "conduce a",
     "a": "Probabilidad y escepticismo"
    },
    {
     "de": "Evidente a la razón",
     "rel": "sostiene la",
     "a": "Certeza y metafísica"
    }
   ],
   "idea": "Descartes busca en la razón una certeza absoluta que funde la metafísica; Hume, partiendo de las impresiones, concluye que sobre los hechos solo cabe un saber probable."
  }
 },
 "ds-B5": {
  "subject": "hf",
  "block": "B",
  "tema": "Sustancia (modernos)",
  "title": "El debate moderno sobre la sustancia",
  "mermaid": "flowchart TD\n  center[\"EL DEBATE MODERNO<br>SOBRE LA SUSTANCIA\"]:::axis\n  des[\"DESCARTES:<br>dualismo (tres sustancias)\"]:::key\n  spi[\"SPINOZA:<br>panteísmo\"]:::key\n  lei[\"LEIBNIZ:<br>monadología\"]:::key\n  center --> des\n  des --> d1[\"alma y cuerpo separados\"]\n  des --> d2[\"interacción en la glándula pineal\"]\n  des -->|\"problema no resuelto\"| pr[\"¿cómo se relacionan<br>alma y cuerpo?\"]\n  pr -->|\"una sola sustancia\"| spi\n  pr -->|\"infinitas mónadas\"| lei\n  spi --> s1[\"una sola sustancia:<br>Dios o Naturaleza\"]\n  spi --> s2[\"cuerpo y alma:<br>dos aspectos de lo mismo\"]\n  lei --> l1[\"mónadas: sustancias simples\"]\n  lei --> l2[\"armonía preestablecida\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si alma y cuerpo son sustancias distintas, ¿cómo se relacionan? ¿Y si solo hay una?",
   "raiz": "EL DEBATE SOBRE LA SUSTANCIA",
   "raiz_d": "Sustancia: lo que existe por sí mismo, sin necesitar de otro. ¿Cuántas hay y de qué tipo?",
   "ramas": [
    {
     "rel": "punto de partida",
     "t": "Dualismo",
     "k": true,
     "a": "Descartes",
     "d": "Tres sustancias: Dios (infinita), el alma y el cuerpo.",
     "c": [
      {
       "rel": "el alma es",
       "t": "Res cogitans",
       "d": "Sustancia pensante: inextensa, libre e inmortal."
      },
      {
       "rel": "el cuerpo es",
       "t": "Res extensa",
       "d": "Sustancia material: extensa y mecánica."
      },
      {
       "rel": "deja abierto",
       "t": "El problema de la comunicación",
       "k": true,
       "d": "¿Cómo actúan entre sí? La glándula pineal no lo resuelve."
      }
     ]
    },
    {
     "rel": "solución 1",
     "t": "Ocasionalismo",
     "a": "Malebranche",
     "d": "Las sustancias no actúan entre sí: Dios produce en cada ocasión el efecto."
    },
    {
     "rel": "solución 2",
     "t": "Monismo",
     "k": true,
     "a": "Spinoza",
     "d": "Una sola sustancia: «Dios, o sea, la Naturaleza».",
     "c": [
      {
       "rel": "pensamiento y extensión son",
       "t": "Dos atributos de lo mismo",
       "d": "No dos sustancias: por eso no hay problema alma-cuerpo."
      }
     ]
    },
    {
     "rel": "solución 3",
     "t": "Monadología",
     "a": "Leibniz",
     "d": "Infinitas mónadas: sustancias simples, activas e indivisibles.",
     "c": [
      {
       "rel": "no se influyen, pero",
       "t": "Armonía preestablecida",
       "d": "Dios las sincronizó desde el principio, como dos relojes bien hechos."
      }
     ]
    },
    {
     "rel": "alternativa",
     "t": "Materialismo",
     "a": "Hobbes, La Mettrie",
     "d": "Solo existe la materia; el pensamiento es movimiento de la materia.",
     "c": [
      {
       "rel": "el ser humano es",
       "t": "Hombre-máquina",
       "d": "Un autómata complejo: el alma es el resultado de los órganos, sobre todo del cerebro."
      },
      {
       "rel": "de ahí se sigue",
       "t": "Determinismo",
       "d": "Todo acto está causado por lo anterior: la libertad sería una ilusión."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ocasionalismo",
     "rel": "responde a",
     "a": "El problema de la comunicación"
    },
    {
     "de": "Dos atributos de lo mismo",
     "rel": "disuelve",
     "a": "El problema de la comunicación"
    },
    {
     "de": "Materialismo",
     "rel": "niega la",
     "a": "Res cogitans"
    }
   ],
   "idea": "El dualismo de Descartes deja un problema (¿cómo se comunican alma y cuerpo?); los racionalistas lo resuelven con Dios o con una única sustancia, y el materialismo lo elimina a costa de la libertad."
  }
 },
 "ds-B6": {
  "subject": "hf",
  "block": "B",
  "tema": "Contrato social",
  "title": "El contrato social",
  "mermaid": "flowchart TD\n  center[\"EL CONTRATO SOCIAL\"]:::axis\n  idea[\"Del estado de naturaleza a la sociedad<br>por un pacto\"]:::key\n  hob[\"HOBBES\"]:::key\n  loc[\"LOCKE\"]:::key\n  rou[\"ROUSSEAU\"]:::key\n  center -->|\"tesis común\"| idea\n  idea --> hob\n  idea --> loc\n  idea --> rou\n  hob --> h1[\"«homo homini lupus»\"]\n  hob -->|\"pacto que da\"| h2[\"Leviatán:<br>monarquía absoluta\"]\n  loc --> l1[\"derechos naturales:<br>vida, libertad, propiedad\"]\n  loc -->|\"pacto que da\"| l2[\"monarquía parlamentaria<br>+ separación de poderes\"]\n  rou --> r1[\"la voluntad general\"]\n  rou -->|\"pacto que da\"| r2[\"democracia asamblearia\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "Si la sociedad no es natural, ¿por qué obedecemos al poder y qué límites tiene?",
   "raiz": "EL CONTRATO SOCIAL",
   "raiz_d": "La modernidad rompe con la sociabilidad natural de Aristóteles: la sociedad es un producto de la voluntad humana, un pacto.",
   "ramas": [
    {
     "rel": "precursor",
     "t": "Maquiavelo",
     "d": "Realismo político: separa la política de la moral y de la religión.",
     "c": [
      {
       "rel": "el gobernante busca",
       "t": "El orden y la seguridad",
       "d": "Puede usar la fuerza y el engaño si es necesario."
      }
     ]
    },
    {
     "rel": "pacto por miedo",
     "t": "Hobbes",
     "k": true,
     "c": [
      {
       "rel": "estado de naturaleza",
       "t": "Guerra de todos contra todos",
       "d": "«El hombre es un lobo para el hombre.»"
      },
      {
       "rel": "el contrato crea",
       "t": "Un soberano absoluto: el Leviatán",
       "d": "Todos le ceden su poder a cambio de seguridad."
      }
     ]
    },
    {
     "rel": "pacto por los derechos",
     "t": "Locke",
     "k": true,
     "c": [
      {
       "rel": "estado de naturaleza",
       "t": "Derechos naturales inseguros",
       "d": "Vida, libertad y propiedad existen ya, pero nadie las garantiza."
      },
      {
       "rel": "el contrato crea",
       "t": "Un gobierno limitado",
       "d": "Si viola los derechos, el pueblo puede resistir y cambiarlo. Base del liberalismo."
      }
     ]
    },
    {
     "rel": "pacto por la libertad",
     "t": "Rousseau",
     "k": true,
     "c": [
      {
       "rel": "estado de naturaleza",
       "t": "El ser humano es bueno",
       "d": "Es la sociedad la que lo corrompe."
      },
      {
       "rel": "el contrato crea",
       "t": "La voluntad general",
       "d": "El interés común, no la suma de intereses: la soberanía reside en el pueblo."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Un gobierno limitado",
     "rel": "frente al poder de",
     "a": "Un soberano absoluto: el Leviatán"
    },
    {
     "de": "El orden y la seguridad",
     "rel": "es también el fin del",
     "a": "Un soberano absoluto: el Leviatán"
    }
   ],
   "idea": "Los tres parten de un estado de naturaleza y de un pacto; lo que cambia es la visión del ser humano, y de ella depende el poder: absoluto (Hobbes), limitado (Locke) o del pueblo (Rousseau)."
  }
 },
 "ds-B7": {
  "subject": "hf",
  "block": "B",
  "tema": "Utilitarismo y liberalismo",
  "title": "Utilitarismo, liberalismo y capitalismo",
  "mermaid": "flowchart TD\n  center[\"UTILITARISMO, LIBERALISMO<br>Y CAPITALISMO\"]:::axis\n  uti[\"UTILITARISMO<br>(Bentham, Mill)\"]:::key\n  lib[\"LIBERALISMO\"]:::key\n  cap[\"CAPITALISMO<br>(Adam Smith)\"]:::key\n  azu[\"AZURMENDI: crítica\"]:::key\n  center --> uti\n  center --> lib\n  center --> cap\n  center --> azu\n  uti --> u1[\"la mayor felicidad para<br>el mayor número\"]\n  uti --> u2[\"balance de placer vs dolor\"]\n  lib --> l1[\"primacía del individuo\"]\n  lib --> l2[\"propiedad privada\"]\n  lib --> l3[\"Estado neutral\"]\n  lib -->|\"fundamenta\"| cap\n  cap --> c1[\"la «mano invisible»\"]\n  cap --> c2[\"el interés personal trae<br>el bienestar general\"]\n  azu -->|\"replica a\"| c2\n  azu --> az1[\"el ser humano también es<br>cooperativo por naturaleza\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué ideas filosóficas sostienen el capitalismo y qué imagen del ser humano supone?",
   "raiz": "LAS BASES DEL CAPITALISMO",
   "raiz_d": "Liberalismo y utilitarismo son sus bases teóricas; Adam Smith los une. Azurmendi discute su visión del ser humano.",
   "ramas": [
    {
     "rel": "base política",
     "t": "Liberalismo",
     "k": true,
     "a": "Hobbes, Locke",
     "d": "Primacía del individuo: la sociedad es secundaria, producto del contrato.",
     "c": [
      {
       "rel": "defiende",
       "t": "Derechos individuales",
       "d": "Entre ellos, la propiedad privada."
      },
      {
       "rel": "exige",
       "t": "Estado neutral",
       "d": "No impone una idea del bien: garantiza la libertad de cada uno."
      }
     ]
    },
    {
     "rel": "base moral",
     "t": "Utilitarismo",
     "k": true,
     "a": "Bentham, Mill",
     "d": "Una acción es buena si produce placer y evita el dolor: criterio de utilidad.",
     "c": [
      {
       "rel": "Bentham",
       "t": "Medir las consecuencias",
       "d": "La felicidad se calcula por los efectos de las acciones."
      },
      {
       "rel": "Mill",
       "t": "Principio de la mayor felicidad",
       "d": "«La mayor felicidad para el mayor número de personas»; los placeres psíquicos valen más."
      }
     ]
    },
    {
     "rel": "síntesis económica",
     "t": "Adam Smith",
     "d": "La riqueza de las naciones (1776).",
     "c": [
      {
       "rel": "el mercado actúa como",
       "t": "Mano invisible",
       "k": true,
       "d": "El interés propio conduce, sin quererlo, al bienestar común."
      },
      {
       "rel": "por eso",
       "t": "El Estado no debe intervenir",
       "d": "Su intervención sería un obstáculo para el crecimiento."
      }
     ]
    },
    {
     "rel": "crítica",
     "t": "Azurmendi",
     "d": "El capitalismo supone un ser humano competitivo; hay otra tradición.",
     "c": [
      {
       "rel": "rechaza",
       "t": "El darwinismo social",
       "d": "Justificar la supremacía de unos sobre otros."
      },
      {
       "rel": "defiende",
       "t": "La cooperación es natural",
       "a": "Kropotkin, Wilson",
       "d": "La moral nace del sentido de comunidad, no del cálculo frío de la razón."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Liberalismo",
     "rel": "se une en Smith al",
     "a": "Utilitarismo"
    },
    {
     "de": "Principio de la mayor felicidad",
     "rel": "se lograría, según Smith, con la",
     "a": "Mano invisible"
    },
    {
     "de": "La cooperación es natural",
     "rel": "discute el egoísmo que supone la",
     "a": "Mano invisible"
    }
   ],
   "idea": "El capitalismo se apoya en un individuo con derechos (liberalismo) que busca su utilidad (utilitarismo); Smith confía en que el mercado armonice los egoísmos. Azurmendi pregunta si somos tan egoístas."
  }
 },
 "ds-C1": {
  "subject": "hf",
  "block": "C",
  "tema": "Ilustración",
  "title": "La Ilustración: razón y derechos",
  "mermaid": "flowchart TD\n  center[\"LA ILUSTRACIÓN:<br>razón y derechos\"]:::axis\n  raz[\"Un nuevo modelo de razón\"]:::key\n  der[\"Derechos naturales\"]:::key\n  fem[\"Primera ola del feminismo\"]:::key\n  center --> raz\n  raz -->|\"lleva a exigir\"| der\n  der -->|\"se amplía al reclamar\"| fem\n  raz --> r1[\"razón crítica\"]\n  raz --> r2[\"razón autónoma («atrévete a saber»)\"]\n  der --> d1[\"rechazo del absolutismo\"]\n  der --> d2[\"separación de poderes (Montesquieu)\"]\n  der --> d3[\"soberanía popular (Rousseau)\"]\n  fem --> f1[\"Mary Wollstonecraft\"]\n  fem --> f2[\"Olympe de Gouges\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué promete la razón ilustrada y a quién dejó fuera?",
   "raiz": "LA ILUSTRACIÓN",
   "raiz_d": "Siglo XVIII: la confianza en que la razón libera de prejuicios y autoridad ciega y lleva al progreso y a la libertad.",
   "ramas": [
    {
     "rel": "punto de partida",
     "t": "Un nuevo modelo de razón",
     "k": true,
     "c": [
      {
       "rel": "su lema",
       "t": "«Sapere aude»",
       "a": "Kant",
       "d": "Atrévete a pensar por ti mismo: salir de la minoría de edad."
      },
      {
       "rel": "es",
       "t": "Razón crítica",
       "d": "Somete a examen la religión, la política, la ciencia y a sí misma."
      },
      {
       "rel": "es",
       "t": "Razón autónoma",
       "d": "No depende de la teología ni de la autoridad."
      },
      {
       "rel": "confía en el",
       "t": "Progreso",
       "a": "Diderot, D'Alembert",
       "d": "La Enciclopedia quiere ordenar todo el saber al servicio de la sociedad."
      }
     ]
    },
    {
     "rel": "consecuencia política",
     "t": "Derechos naturales",
     "k": true,
     "d": "Derechos que se tienen por nacer, previos al Estado: se rompe con el absolutismo.",
     "c": [
      {
       "rel": "concretados en",
       "t": "Vida, libertad y propiedad",
       "a": "Locke"
      },
      {
       "rel": "exige",
       "t": "División de poderes",
       "a": "Montesquieu"
      },
      {
       "rel": "exige",
       "t": "Soberanía popular",
       "a": "Rousseau"
      },
      {
       "rel": "convierte al súbdito en",
       "t": "Ciudadano",
       "d": "Quien participa y legitima el poder, en lugar de obedecer ciegamente."
      },
      {
       "rel": "se hacen ley en la",
       "t": "Declaración de 1789",
       "d": "Declaración de los Derechos del Hombre y del Ciudadano."
      }
     ]
    },
    {
     "rel": "su contradicción",
     "t": "Primera ola feminista",
     "k": true,
     "d": "La igualdad se proclama universal, pero excluye a las mujeres.",
     "c": [
      {
       "rel": "denuncia",
       "t": "La exclusión de las mujeres",
       "a": "Rousseau, Voltaire, Kant",
       "d": "Las destinaban por naturaleza a la vida doméstica."
      },
      {
       "rel": "responde con la",
       "t": "Declaración de los Derechos de la Mujer",
       "a": "Olympe de Gouges (1791)"
      },
      {
       "rel": "defiende que",
       "t": "«La razón no tiene sexo»",
       "a": "Mary Wollstonecraft (1792)",
       "d": "La desigualdad es cultural, por falta de educación: pide educación igualitaria e independencia económica."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Razón autónoma",
     "rel": "funda los",
     "a": "Derechos naturales"
    },
    {
     "de": "Declaración de los Derechos de la Mujer",
     "rel": "reescribe para incluir a la mujer la",
     "a": "Declaración de 1789"
    }
   ],
   "idea": "La razón ilustrada funda los derechos naturales y convierte al súbdito en ciudadano; pero, si la razón es universal, excluir a las mujeres es una incoherencia que denuncia la primera ola feminista."
  }
 },
 "ds-C2": {
  "subject": "hf",
  "block": "C",
  "tema": "Kant",
  "title": "La filosofía crítica de Kant",
  "mermaid": "flowchart TD\n  center[\"LA FILOSOFÍA CRÍTICA DE KANT\"]:::axis\n  cri[\"Criticismo\"]:::key\n  fn[\"Fenómeno / Noúmeno\"]:::key\n  met[\"El problema de la metafísica\"]:::key\n  center --> cri\n  cri -->|\"distingue\"| fn\n  fn -->|\"conclusión\"| met\n  cri --> c1[\"une racionalismo + empirismo\"]\n  cri --> c2[\"conocer = materia (a posteriori)<br>+ forma (a priori)\"]\n  fn --> fe[\"FENÓMENO: la realidad que aparece<br>(se puede conocer)\"]\n  fn --> no[\"NOÚMENO: la cosa en sí<br>(incognoscible)\"]\n  no -->|\"por eso\"| met\n  met --> m1[\"la metafísica no puede ser ciencia\"]\n  met --> m2[\"los objetos trascendentes<br>no se pueden demostrar\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué podemos conocer y por qué la metafísica no puede ser ciencia?",
   "raiz": "EL CRITICISMO DE KANT",
   "raiz_d": "Crítica de la razón pura (1781): la razón examina sus propios límites y alcances.",
   "ramas": [
    {
     "rel": "parte de",
     "t": "Dos corrientes insuficientes",
     "c": [
      {
       "rel": "cae en el dogmatismo",
       "t": "Racionalismo",
       "a": "Descartes",
       "d": "Cree que todo se deduce a priori de la razón."
      },
      {
       "rel": "cae en el escepticismo",
       "t": "Empirismo",
       "a": "Hume",
       "d": "Todo viene de la experiencia; despertó a Kant del «sueño dogmático»."
      }
     ]
    },
    {
     "rel": "propone",
     "t": "La revolución copernicana",
     "k": true,
     "d": "No es el sujeto quien se adapta al objeto: el objeto se ajusta a las estructuras del sujeto.",
     "c": [
      {
       "rel": "conocer une la",
       "t": "Materia (a posteriori)",
       "d": "Lo que viene de la experiencia."
      },
      {
       "rel": "y la",
       "t": "Forma (a priori)",
       "d": "Lo que pone el sujeto: espacio y tiempo, y las categorías del entendimiento."
      },
      {
       "rel": "se llama",
       "t": "Idealismo trascendental"
      }
     ]
    },
    {
     "rel": "de ahí distingue",
     "t": "Los límites del conocimiento",
     "c": [
      {
       "rel": "conocemos el",
       "t": "Fenómeno",
       "k": true,
       "d": "La realidad tal como se nos aparece."
      },
      {
       "rel": "no conocemos el",
       "t": "Noúmeno",
       "k": true,
       "d": "La realidad en sí misma, fuera de toda experiencia: incognoscible."
      }
     ]
    },
    {
     "rel": "conclusión",
     "t": "La metafísica no puede ser ciencia",
     "c": [
      {
       "rel": "porque",
       "t": "Dios, el alma y el mundo",
       "d": "No pueden demostrarse por la experiencia."
      },
      {
       "rel": "en cambio",
       "t": "La ciencia sí es posible",
       "d": "Física y matemáticas tratan de fenómenos."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La revolución copernicana",
     "rel": "une lo mejor de",
     "a": "Dos corrientes insuficientes"
    },
    {
     "de": "Forma (a priori)",
     "rel": "organiza el",
     "a": "Fenómeno"
    },
    {
     "de": "Dios, el alma y el mundo",
     "rel": "quedan del lado del",
     "a": "Noúmeno"
    }
   ],
   "idea": "«Todo conocimiento comienza con la experiencia, pero no todo procede de ella» (Kant): solo conocemos fenómenos, por eso la ciencia es posible y la metafísica no."
  }
 },
 "ds-C3": {
  "subject": "hf",
  "block": "C",
  "tema": "Ética moderna",
  "title": "Ética: Kant frente al utilitarismo",
  "mermaid": "flowchart TD\n  center[\"ÉTICA: KANT FRENTE<br>AL UTILITARISMO\"]:::axis\n  kant[\"KANT:<br>ética deontológica (del deber)\"]:::key\n  uti[\"UTILITARISMO<br>(Bentham, Mill)\"]:::key\n  azu[\"AZURMENDI:<br>relativismo relativo\"]:::key\n  center --> kant\n  center --> uti\n  kant -->|\"se opone a\"| uti\n  kant --> k1[\"mira el deber y la intención\"]\n  kant --> k2[\"imperativo categórico\"]\n  kant --> k3[\"la persona como fin, no como medio\"]\n  uti --> u1[\"mira las consecuencias\"]\n  uti --> u2[\"la mayor felicidad para<br>el mayor número\"]\n  center --> azu\n  azu -->|\"matiza a ambos\"| kant\n  azu -->|\"matiza a ambos\"| uti\n  azu --> az1[\"no hay un fundamento ético absoluto\"]\n  azu --> az2[\"los valores dependen del contexto\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué hace buena una acción: la intención con que se hace o sus consecuencias?",
   "raiz": "ÉTICAS DEL DEBER Y DE LA FELICIDAD",
   "raiz_d": "A finales del siglo XVIII chocan dos respuestas: lo que es correcto por principio y lo que nos conviene.",
   "ramas": [
    {
     "rel": "juzga la acción misma",
     "t": "Ética del deber",
     "k": true,
     "a": "Kant",
     "d": "Ética deontológica, formal y autónoma: no dice qué hacer, sino la forma que debe tener la norma.",
     "c": [
      {
       "rel": "lo único bueno sin restricción",
       "t": "La buena voluntad",
       "d": "Actuar por deber, no solo conforme al deber, ni por interés o inclinación."
      },
      {
       "rel": "se expresa en el",
       "t": "Imperativo categórico",
       "k": true,
       "d": "Mandato moral universal e incondicional.",
       "c": [
        {
         "rel": "fórmula",
         "t": "Ley universal",
         "d": "Obra según una máxima que puedas querer como ley para todos."
        },
        {
         "rel": "fórmula",
         "t": "Fin en sí mismo",
         "d": "Trata a la humanidad siempre como fin, nunca solo como medio: base de la dignidad."
        }
       ]
      }
     ]
    },
    {
     "rel": "juzga las consecuencias",
     "t": "Utilitarismo",
     "k": true,
     "a": "Bentham, Mill",
     "d": "Ética consecuencialista (teleológica): es buena la acción que aumenta el placer y reduce el dolor.",
     "c": [
      {
       "rel": "se guía por el",
       "t": "Principio de utilidad",
       "d": "La mayor felicidad para el mayor número."
      },
      {
       "rel": "en Bentham, cuantitativo",
       "t": "Cálculo hedónico",
       "d": "Mide el placer: intensidad, duración, certeza, extensión…"
      },
      {
       "rel": "en Mill, cualitativo",
       "t": "Placeres superiores e inferiores",
       "d": "Los intelectuales y morales valen más que los físicos."
      }
     ]
    },
    {
     "rel": "tercera vía vasca",
     "t": "Relativismo relativo",
     "a": "Joxe Azurmendi",
     "c": [
      {
       "rel": "rechaza",
       "t": "Fundamentos absolutos",
       "d": "Ni Dios ni la razón pueden fundamentar una ética universal."
      },
      {
       "rel": "sin caer en el nihilismo",
       "t": "Validez dentro de cada comunidad",
       "d": "Los valores dependen del contexto, pero en él valen casi absolutamente."
      },
      {
       "rel": "combina",
       "t": "Convicción y responsabilidad",
       "a": "Max Weber",
       "d": "Principios y consecuencias, distinguiendo caso por caso."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ética del deber",
     "rel": "la intención frente a las consecuencias",
     "a": "Utilitarismo"
    },
    {
     "de": "Fundamentos absolutos",
     "rel": "pone en duda el",
     "a": "Imperativo categórico"
    },
    {
     "de": "Convicción y responsabilidad",
     "rel": "mira las consecuencias, como el",
     "a": "Utilitarismo"
    }
   ],
   "idea": "Para Kant, una acción es moral por la intención de cumplir el deber, no por sus resultados; para el utilitarismo, por la felicidad que produce. Azurmendi rechaza los absolutos sin aceptar que todo dé igual."
  }
 },
 "ds-C4": {
  "subject": "hf",
  "block": "C",
  "tema": "Filósofos de la sospecha",
  "title": "Los filósofos de la sospecha",
  "mermaid": "flowchart TD\n  center[\"LOS FILÓSOFOS DE LA SOSPECHA\"]:::axis\n  idea[\"La conciencia no es transparente:<br>algo oculto la determina\"]\n  center -->|\"tesis común\"| idea\n  marx[\"MARX\"]:::key\n  niet[\"NIETZSCHE\"]:::key\n  freud[\"FREUD\"]:::key\n  idea --> marx\n  idea --> niet\n  idea --> freud\n  marx -->|\"desenmascara\"| eco[\"la economía\"]\n  eco -->|\"produce\"| ideo[\"ideología y alienación\"]\n  ideo -->|\"se supera con\"| rev[\"revolución → comunismo\"]\n  niet -->|\"desenmascara\"| moral[\"la moral y sus valores\"]\n  moral -->|\"conduce al\"| nih[\"nihilismo · muerte de Dios\"]\n  nih -->|\"respuesta\"| super[\"voluntad de poder · superhombre\"]\n  freud -->|\"desenmascara\"| incon[\"el inconsciente\"]\n  incon --> yo[\"ello · yo · superyó\"]\n  incon --> pul[\"Eros y Thanatos\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué se esconde detrás de lo que creemos pensar y querer libremente?",
   "raiz": "LOS MAESTROS DE LA SOSPECHA",
   "raiz_d": "Según Ricoeur, Marx, Nietzsche y Freud muestran que el sujeto no es «dueño de su propia casa».",
   "ramas": [
    {
     "rel": "sospecha económica",
     "t": "Marx",
     "k": true,
     "c": [
      {
       "rel": "sospecha de",
       "t": "Las ideas y la religión",
       "d": "No son verdades universales, sino superestructura."
      },
      {
       "rel": "detrás hay",
       "t": "Ideología",
       "d": "Falsa conciencia que justifica a la clase dominante y oculta la explotación."
      },
      {
       "rel": "propone",
       "t": "Revolución sin clases",
       "d": "Para superar la alienación del trabajador."
      }
     ]
    },
    {
     "rel": "sospecha moral",
     "t": "Nietzsche",
     "k": true,
     "c": [
      {
       "rel": "sospecha de",
       "t": "La moral y la verdad",
       "d": "Piedad, humildad e igualdad: moral de esclavos."
      },
      {
       "rel": "detrás hay",
       "t": "Resentimiento del débil",
       "d": "Odio a la vida y a los fuertes, desde Platón y el cristianismo."
      },
      {
       "rel": "al caer los valores",
       "t": "Nihilismo",
       "d": "«Dios ha muerto»: el ser humano queda sin sentido."
      },
      {
       "rel": "propone el",
       "t": "Superhombre",
       "d": "Crea sus propios valores con la voluntad de poder: transvaloración."
      }
     ]
    },
    {
     "rel": "sospecha psíquica",
     "t": "Freud",
     "k": true,
     "c": [
      {
       "rel": "sospecha de",
       "t": "La racionalidad consciente",
       "d": "La conciencia es solo la punta del iceberg."
      },
      {
       "rel": "detrás hay",
       "t": "El inconsciente",
       "d": "Deseos reprimidos que nos gobiernan; pulsiones de Eros (vida) y Tánatos (muerte).",
       "c": [
        {
         "rel": "se estructura en",
         "t": "Ello, yo y superyó",
         "d": "Instintos, razón que media con la realidad, normas morales interiorizadas."
        }
       ]
      },
      {
       "rel": "busca",
       "t": "Salud mental y autoconocimiento"
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Resentimiento del débil",
     "rel": "oculta intereses, como la",
     "a": "Ideología"
    }
   ],
   "idea": "Marx, Nietzsche y Freud desenmascaran la conciencia: debajo de nuestras ideas, valores y razones actúan fuerzas que no controlamos (la economía, el resentimiento, el inconsciente)."
  }
 },
 "ds-C5": {
  "subject": "hf",
  "block": "C",
  "tema": "Crítica del capitalismo",
  "title": "La crítica del capitalismo",
  "mermaid": "flowchart TD\n  center[\"LA CRÍTICA DEL CAPITALISMO<br>Y LA SOCIEDAD DE MASAS\"]:::axis\n  fra[\"ESCUELA DE FRANKFURT\"]:::key\n  are[\"HANNAH ARENDT\"]:::key\n  raw[\"JOHN RAWLS\"]:::key\n  center --> fra\n  center --> are\n  center --> raw\n  fra --> f1[\"razón instrumental\"]\n  fra --> f2[\"industria cultural\"]\n  fra -->|\"produce\"| f3[\"deshumanización\"]\n  are --> a1[\"análisis del totalitarismo\"]\n  are --> a2[\"ideología totalizadora\"]\n  are -->|\"provoca\"| a3[\"anulación de la esfera<br>pública y privada\"]\n  raw -->|\"respuesta: reformar, no destruir\"| r1[\"la justicia como equidad\"]\n  raw --> r2[\"el Estado del bienestar\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Cómo cambia la crítica del capitalismo de Marx a los filósofos del siglo XX?",
   "raiz": "LA CRÍTICA DEL CAPITALISMO",
   "raiz_d": "Marx critica la explotación de la Revolución Industrial; tras el totalitarismo, el siglo XX critica también la cultura, la razón y el Estado.",
   "ramas": [
    {
     "rel": "siglo XIX",
     "t": "Explotación y alienación",
     "a": "Marx",
     "c": [
      {
       "rel": "se basa en la",
       "t": "Plusvalía",
       "d": "El capitalista se apropia del valor que el obrero produce y no recibe."
      },
      {
       "rel": "se supera con la",
       "t": "Revolución proletaria",
       "d": "Hacia una sociedad comunista sin clases."
      }
     ]
    },
    {
     "rel": "crítica cultural",
     "t": "La razón instrumental",
     "k": true,
     "a": "Adorno, Horkheimer (Fráncfort)",
     "d": "Eficacia y cálculo sin preguntar por los fines: la razón se vuelve dominio.",
     "c": [
      {
       "rel": "se ve en la",
       "t": "Industria cultural",
       "d": "Entretenimiento estandarizado: pasividad y conformismo."
      }
     ]
    },
    {
     "rel": "el papel del Estado",
     "t": "Democracia y reforma",
     "c": [
      {
       "rel": "Popper propone",
       "t": "Ingeniería social fragmentaria",
       "a": "Popper",
       "d": "Reformas pequeñas y graduales que se corrigen si fallan; contra el historicismo."
      },
      {
       "rel": "Habermas propone",
       "t": "Democracia deliberativa",
       "a": "Habermas",
       "d": "Consenso por el diálogo, en una esfera pública libre."
      }
     ]
    },
    {
     "rel": "el peligro extremo",
     "t": "El totalitarismo",
     "a": "Hannah Arendt",
     "d": "Dominio total por el terror y la propaganda: la población se vuelve masa.",
     "c": [
      {
       "rel": "frente a él",
       "t": "Recuperar el espacio público",
       "d": "Pensamiento crítico y pluralidad."
      }
     ]
    },
    {
     "rel": "fundamento moral",
     "t": "La justicia como equidad",
     "k": true,
     "a": "John Rawls",
     "c": [
      {
       "rel": "se elige bajo un",
       "t": "Velo de ignorancia",
       "d": "Sin saber qué lugar ocuparemos: elegiríamos proteger al peor situado."
      },
      {
       "rel": "de ahí el",
       "t": "Principio de diferencia",
       "k": true,
       "d": "Las desigualdades solo son justas si benefician a los peor situados: base del Estado de bienestar."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "Ingeniería social fragmentaria",
     "rel": "reforma gradual frente a la",
     "a": "Revolución proletaria"
    },
    {
     "de": "Democracia deliberativa",
     "rel": "responde a",
     "a": "La razón instrumental"
    }
   ],
   "idea": "De Marx al siglo XX la crítica pasa de la explotación económica a la cultura y la razón; y la respuesta, de la revolución a la reforma: democracia deliberativa y justicia como equidad."
  }
 },
 "ds-C6": {
  "subject": "hf",
  "block": "C",
  "tema": "Postmodernidad",
  "title": "Nietzsche y la postmodernidad",
  "mermaid": "flowchart TD\n  center[\"NIETZSCHE Y LA POSTMODERNIDAD\"]:::axis\n  niet[\"NIETZSCHE:<br>deconstrucción\"]:::key\n  post[\"POSTMODERNIDAD\"]:::key\n  hab[\"HABERMAS:<br>defensa de la modernidad\"]:::key\n  center --> niet\n  niet -->|\"inspira\"| post\n  niet --> n1[\"crítica de la verdad objetiva\"]\n  niet --> n2[\"crítica de la metafísica\"]\n  niet --> n3[\"crítica del dualismo\"]\n  post --> p1[\"crítica de las verdades universales<br>(fin de los metarrelatos)\"]\n  post --> p2[\"pluralidad y diferencia\"]\n  center --> hab\n  hab -->|\"responde a\"| post\n  hab --> h1[\"razón comunicativa\"]\n  hab --> h2[\"la modernidad no se ha agotado\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Por qué Nietzsche es el punto de partida de la crítica posmoderna a la modernidad?",
   "raiz": "NIETZSCHE Y LA POSMODERNIDAD",
   "raiz_d": "Nietzsche, que se llama a sí mismo «dinamita», demuele la tradición occidental; la posmodernidad hereda su sospecha y Habermas le responde.",
   "ramas": [
    {
     "rel": "demolición",
     "t": "La crítica de la tradición",
     "k": true,
     "a": "Nietzsche",
     "d": "Con el método genealógico muestra que las creencias no son eternas: nacen de intereses, resentimiento y poder.",
     "c": [
      {
       "rel": "contra la verdad objetiva",
       "t": "El perspectivismo",
       "k": true,
       "d": "Todo conocimiento depende del punto de vista: solo hay perspectivas e interpretaciones."
      },
      {
       "rel": "contra la metafísica",
       "t": "El «mundo verdadero» es una ficción",
       "d": "Platón y el cristianismo inventaron un más allá para despreciar el único mundo que existe."
      },
      {
       "rel": "contra la moral",
       "t": "La moral de esclavos",
       "d": "Tras la «bondad», la humildad y la igualdad se esconde el resentimiento contra la vida."
      }
     ]
    },
    {
     "rel": "propuesta",
     "t": "La transvaloración de los valores",
     "k": true,
     "a": "Nietzsche",
     "d": "Invertir los valores que niegan la vida y crear otros que la afirmen.",
     "c": [
      {
       "rel": "parte de",
       "t": "La muerte de Dios",
       "d": "«Dios ha muerto»: cae el fundamento de los valores absolutos y llega el nihilismo."
      },
      {
       "rel": "la encarna",
       "t": "El superhombre",
       "d": "Quien crea sus propios valores mediante la voluntad de poder."
      }
     ]
    },
    {
     "rel": "hereda la sospecha",
     "t": "La posmodernidad",
     "a": "Lyotard, Derrida, Foucault, Vattimo",
     "d": "Aplica la sospecha de Nietzsche a la cultura del siglo XX.",
     "c": [
      {
       "rel": "rechaza",
       "t": "Las verdades universales",
       "d": "Fin de los metarrelatos: no hay una única historia ni una verdad para todos."
      },
      {
       "rel": "defiende",
       "t": "La pluralidad y la diferencia"
      }
     ]
    },
    {
     "rel": "responde",
     "t": "La defensa de la modernidad",
     "k": true,
     "a": "Habermas",
     "d": "La modernidad es un proyecto que no se ha agotado: hay que repararlo, no abandonarlo.",
     "c": [
      {
       "rel": "propone",
       "t": "La razón comunicativa",
       "d": "El diálogo sin coacciones permite alcanzar acuerdos racionales y criticar la injusticia."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "El perspectivismo",
     "rel": "anticipa la crítica de",
     "a": "Las verdades universales"
    },
    {
     "de": "La razón comunicativa",
     "rel": "busca un acuerdo frente a",
     "a": "La pluralidad y la diferencia"
    }
   ],
   "idea": "Nietzsche demuele la verdad, la metafísica y la moral de Occidente para afirmar la vida; la posmodernidad hereda su sospecha, y Habermas responde que la razón, si es dialógica, aún puede salvarse."
  }
 },
 "ds-C7": {
  "subject": "hf",
  "block": "C",
  "tema": "Filosofía del lenguaje",
  "title": "La filosofía del lenguaje",
  "mermaid": "flowchart TD\n  center[\"LA FILOSOFÍA DEL LENGUAJE\"]:::axis\n  w1[\"WITTGENSTEIN I<br>(el primero)\"]:::key\n  w2[\"WITTGENSTEIN II<br>(el segundo)\"]:::key\n  txi[\"TXILLARDEGI\"]:::key\n  center --> w1\n  w1 -->|\"se corrige a sí mismo en\"| w2\n  w1 --> a1[\"el lenguaje es imagen del mundo\"]\n  w1 --> a2[\"la metafísica no tiene sentido\"]\n  w1 --> a3[\"«de lo que no se puede hablar,<br>hay que callar»\"]\n  w2 --> b1[\"el significado es el uso\"]\n  w2 --> b2[\"juegos de lenguaje\"]\n  w2 --> b3[\"filosofía terapéutica\"]\n  center --> txi\n  txi -->|\"desde el euskera\"| w2\n  txi --> c1[\"la lengua condiciona el pensamiento\"]\n  txi --> c2[\"es un estructurador inconsciente\"]\n  txi --> c3[\"la supervivencia del euskera,<br>difícil sin un Estado vasco\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Dónde están los límites de lo que podemos decir y pensar?",
   "raiz": "LA FILOSOFÍA DEL LENGUAJE",
   "raiz_d": "El giro lingüístico: muchos problemas filosóficos nacen del mal uso del lenguaje, que marca el límite de lo que podemos pensar.",
   "ramas": [
    {
     "rel": "Tractatus (1921)",
     "t": "El primer Wittgenstein",
     "k": true,
     "d": "Busca la estructura lógica que comparten el lenguaje y el mundo.",
     "c": [
      {
       "rel": "sostiene",
       "t": "La teoría pictórica",
       "d": "Las proposiciones son «figuras» de los hechos, como un mapa refleja el terreno."
      },
      {
       "rel": "concluye",
       "t": "La metafísica es un sinsentido",
       "d": "Metafísica y ética intentan decir lo que no se puede decir; lo místico solo se muestra."
      },
      {
       "rel": "por eso",
       "t": "Callar ante lo indecible",
       "d": "«De lo que no se puede hablar, hay que callar.» La filosofía es una actividad de clarificación."
      }
     ]
    },
    {
     "rel": "Investigaciones filosóficas",
     "t": "El segundo Wittgenstein",
     "k": true,
     "d": "El lenguaje no es un espejo de los hechos, sino una caja de herramientas.",
     "c": [
      {
       "rel": "sostiene",
       "t": "El significado es el uso"
      },
      {
       "rel": "distingue",
       "t": "Los juegos de lenguaje",
       "d": "Dar órdenes, contar un chiste, rezar…: actividades con reglas propias y «parecidos de familia»."
      },
      {
       "rel": "la filosofía es",
       "t": "Una terapia lingüística",
       "d": "Los problemas no se resuelven: se disuelven al ver cómo usamos las palabras."
      }
     ]
    },
    {
     "rel": "desde el euskera",
     "t": "La lengua estructura el pensamiento",
     "k": true,
     "a": "Txillardegi",
     "d": "Influido por Sapir-Whorf: pensamos porque tenemos lenguaje, y cada lengua lleva una cosmovisión.",
     "c": [
      {
       "rel": "actúa como",
       "t": "Un estructurador inconsciente",
       "d": "Organiza la realidad antes de que nos demos cuenta."
      },
      {
       "rel": "por eso",
       "t": "El euskera, columna vertebral",
       "d": "Si desaparece, se pierde una forma propia de ver el mundo; para él, sobreviviría con dificultad sin un Estado vasco."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "El segundo Wittgenstein",
     "rel": "corrige a",
     "a": "El primer Wittgenstein"
    }
   ],
   "idea": "Para el primer Wittgenstein el lenguaje dibuja el mundo; para el segundo, es un conjunto de usos; para Txillardegi, cada lengua da forma al pensamiento de un pueblo."
  }
 },
 "ds-C8": {
  "subject": "hf",
  "block": "C",
  "tema": "Existencialismo",
  "title": "El existencialismo",
  "mermaid": "flowchart TD\n  center[\"EL EXISTENCIALISMO\"]:::axis\n  idea[\"Parte de la existencia concreta,<br>no de esencias abstractas\"]:::key\n  center -->|\"tesis común\"| idea\n  sar[\"SARTRE (ateo)\"]:::key\n  hei[\"HEIDEGGER\"]:::key\n  ort[\"ORTEGA Y GASSET\"]:::key\n  una[\"UNAMUNO (cristiano)\"]:::key\n  idea --> sar\n  idea --> hei\n  idea --> ort\n  idea --> una\n  sar --> s1[\"la existencia precede a la esencia\"]\n  sar --> s2[\"condenados a ser libres\"]\n  hei --> h1[\"distinguir el ser y los entes\"]\n  hei --> h2[\"Dasein: proyectado en el mundo\"]\n  ort --> o1[\"la razón vital\"]\n  ort --> o2[\"«yo soy yo y mi circunstancia»\"]\n  una --> u1[\"el sentimiento trágico de la vida\"]\n  una --> u2[\"el ansia de inmortalidad\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué es el ser humano para cada pensador existencialista?",
   "raiz": "EL EXISTENCIALISMO",
   "raiz_d": "Tesis común: se parte de la existencia concreta, no de esencias abstractas.",
   "ramas": [
    {
     "rel": "ontología",
     "t": "El Dasein",
     "k": true,
     "a": "Heidegger",
     "d": "«Ser-ahí»: el ser humano, el ente que se pregunta por el ser.",
     "c": [
      {
       "rel": "distingue",
       "t": "El ser y los entes",
       "d": "Las cosas concretas no agotan la pregunta por el ser."
      },
      {
       "rel": "existe como",
       "t": "Ser-en-el-mundo, arrojado",
       "d": "Lanzado a la existencia sin haberlo pedido."
      },
      {
       "rel": "se sabe",
       "t": "Ser-para-la-muerte",
       "d": "Aceptar la finitud abre la vida auténtica."
      }
     ]
    },
    {
     "rel": "existencialismo ateo",
     "t": "La libertad radical",
     "k": true,
     "a": "Sartre",
     "d": "Sin Dios que dicte normas, somos totalmente responsables de lo que somos.",
     "c": [
      {
       "rel": "porque",
       "t": "La existencia precede a la esencia"
      },
      {
       "rel": "de ahí",
       "t": "«Condenados a ser libres»",
       "d": "Siempre hay opción: no elegir ya es una elección."
      },
      {
       "rel": "se huye con",
       "t": "La mala fe",
       "d": "Autoengaño: «yo soy así», «no tuve opción»."
      }
     ]
    },
    {
     "rel": "existencialismo cristiano",
     "t": "El sentimiento trágico de la vida",
     "k": true,
     "a": "Unamuno",
     "d": "El ser humano es un ser en agonía.",
     "c": [
      {
       "rel": "lucha entre",
       "t": "Razón y corazón",
       "d": "La razón niega la inmortalidad; el corazón la anhela."
      },
      {
       "rel": "lo mueve",
       "t": "El ansia de inmortalidad"
      }
     ]
    },
    {
     "rel": "raciovitalismo",
     "t": "La razón vital",
     "a": "Ortega y Gasset",
     "d": "La razón pura no basta: hay que pensar desde la vida concreta.",
     "c": [
      {
       "rel": "porque",
       "t": "«Yo soy yo y mi circunstancia»"
      },
      {
       "rel": "de ahí",
       "t": "El perspectivismo",
       "d": "Nadie tiene la verdad absoluta: la verdad es la suma de todas las perspectivas."
      }
     ]
    },
    {
     "rel": "discípula de Ortega",
     "t": "La razón poética",
     "a": "María Zambrano",
     "d": "Une filosofía y poesía para llegar a las «entrañas» del ser humano: sueños, sentimientos, esperanza."
    }
   ],
   "cruces": [
    {
     "de": "La razón poética",
     "rel": "amplía",
     "a": "La razón vital"
    }
   ],
   "idea": "Todos parten del individuo concreto: Heidegger lo ve arrojado hacia la muerte, Sartre condenado a ser libre, Unamuno en agonía, Ortega unido a su circunstancia y Zambrano necesitado de la palabra poética."
  }
 },
 "ds-C9": {
  "subject": "hf",
  "block": "C",
  "tema": "Beauvoir / feminismo",
  "title": "Simone de Beauvoir: el feminismo",
  "mermaid": "flowchart TD\n  center[\"SIMONE DE BEAUVOIR:<br>el feminismo\"]:::axis\n  tesis[\"«No se nace mujer,<br>se llega a serlo»\"]:::key\n  alt[\"La alteridad: el segundo sexo\"]:::key\n  eman[\"La emancipación\"]:::key\n  center --> tesis\n  tesis -->|\"explica\"| alt\n  alt -->|\"se supera con\"| eman\n  tesis --> t1[\"no hay una esencia femenina fija\"]\n  tesis --> t2[\"la cultura construye «lo femenino»\"]\n  alt --> a1[\"el hombre = sujeto absoluto\"]\n  alt --> a2[\"la mujer = «la otra», lo complementario\"]\n  alt --> a3[\"dialéctica del amo y el esclavo\"]\n  eman --> e1[\"educación igualitaria\"]\n  eman --> e2[\"derecho al aborto y a la anticoncepción\"]\n  eman --> e3[\"autonomía económica\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;",
  "v2": {
   "pregunta": "¿Qué significa «ser mujer» y cómo puede la mujer llegar a ser libre?",
   "raiz": "SIMONE DE BEAUVOIR: EL FEMINISMO",
   "raiz_d": "Existencialista como Sartre, en El segundo sexo (1949) inicia la segunda ola del feminismo.",
   "ramas": [
    {
     "rel": "tesis",
     "t": "«No se nace mujer: se llega a serlo»",
     "k": true,
     "d": "La identidad femenina es una construcción cultural, no un destino biológico.",
     "c": [
      {
       "rel": "niega",
       "t": "Una esencia femenina fija",
       "d": "La existencia precede a la esencia: tampoco hay un «eterno femenino»."
      },
      {
       "rel": "afirma",
       "t": "La cultura construye «lo femenino»",
       "d": "Maternidad, matrimonio y tareas domésticas funcionan como herramientas de opresión."
      }
     ]
    },
    {
     "rel": "diagnóstico",
     "t": "La alteridad: el segundo sexo",
     "k": true,
     "d": "La mujer ha sido definida siempre en relación con el hombre: hija, esposa, madre.",
     "c": [
      {
       "rel": "el hombre, como",
       "t": "El Sujeto, lo esencial"
      },
      {
       "rel": "la mujer, como",
       "t": "El Objeto, «lo otro»"
      },
      {
       "rel": "se explica con",
       "t": "La dialéctica del amo y el esclavo",
       "a": "Hegel",
       "d": "La identidad se construye a través del reconocimiento del otro."
      },
      {
       "rel": "no se rebela por",
       "t": "La inmanencia de su trabajo",
       "d": "El trabajo doméstico se repite y no deja huella; la trascendencia queda para el hombre."
      }
     ]
    },
    {
     "rel": "propuesta",
     "t": "La emancipación",
     "k": true,
     "d": "Que la mujer sea un ser humano pleno, no que se convierta en hombre.",
     "c": [
      {
       "rel": "primera vía",
       "t": "Educación en igualdad"
      },
      {
       "rel": "segunda vía",
       "t": "Independencia económica"
      },
      {
       "rel": "tercera vía",
       "t": "Autonomía reproductiva",
       "d": "Control de la natalidad (anticoncepción, aborto) y maternidad libre."
      },
      {
       "rel": "meta",
       "t": "La reciprocidad",
       "d": "Reconocerse como dos libertades: la liberación de la mujer es también la del hombre."
      }
     ]
    }
   ],
   "cruces": [
    {
     "de": "La inmanencia de su trabajo",
     "rel": "se rompe con",
     "a": "Independencia económica"
    }
   ],
   "idea": "«No se nace mujer: se llega a serlo»: lo femenino es una construcción que ha hecho de la mujer «lo otro»; si es construido, puede transformarse."
  }
 }
};
