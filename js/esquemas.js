// Generado por tools/build_subject.js (hf) — alumnado, sin material del profesor.
const ESQUEMAS = {
 "AA-REL-02": {
  "subject": "hf",
  "block": "A",
  "tema": "Aristóteles",
  "title": "Las causas del cambio",
  "mermaid": "flowchart TD\n  center[\"LAS CAUSAS DEL CAMBIO\"]:::axis\n  intr[\"intrínsecas\"]\n  estr[\"extrínsecas\"]\n  mat[\"material\"]:::key\n  mat_e[\"el sustrato en que ocurre\"]\n  form[\"formal\"]:::key\n  form_e[\"la figura que se adopta\"]\n  erag[\"eficiente\"]:::key\n  erag_e[\"lo que lo pone en marcha\"]\n  xede[\"final\"]:::key\n  xede_e[\"el fin del cambio\"]\n  center -->|\"son estas\"| intr\n  center -->|\"son estas\"| estr\n  intr --> mat\n  intr --> form\n  estr --> erag\n  estr --> xede\n  mat -->|\"es\"| mat_e\n  form -->|\"es\"| form_e\n  erag -->|\"es\"| erag_e\n  xede -->|\"es\"| xede_e\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "BH-REL-01": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "Hume y el empirismo",
  "mermaid": "flowchart TD\n  n0[\"HUME\"]\n  n1[\"Examen del conocimiento\"]\n  n2[\"percepciones\"]:::axis\n  n3[\"impresiones\"]\n  n4[\"ideas\"]\n  n5[\"organizadas por las leyes de asociación de la imaginación\"]\n  n6[\"contigüidad\"]\n  n7[\"causalidad\"]:::key\n  n8[\"semejanza\"]\n  n9[\"conocimiento fáctico\"]:::key\n  n10[\"relaciones entre ideas\"]:::key\n  n11[\"creencia basada en el hábito\"]\n  n12[\"conocimiento universal, necesario\"]\n  n13[\"crítica de la metafísica y la ciencia\"]:::axis\n  n14[\"base de la moral: emotivismo moral\"]:::key\n  n15[\"la idea de sustancia: mundo, dios, yo\"]\n  n16[\"la idea de conexión necesaria\"]\n  n17[\"en el sentimiento\"]\n  n18[\"fenomenismo\"]\n  n19[\"escepticismo\"]\n  n20[\"lo bueno\"]\n  n21[\"la acción\"]\n  n22[\"tolerancia: norma y actitud para la convivencia\"]\n  n23[\"en el pacto\"]\n  n0 --> n1\n  n1 -->|\"su base\"| n2\n  n2 -->|\"se dividen en dos\"| n3\n  n2 --> n4\n  n2 -->|\"son causa de:\"| n5\n  n5 --> n6\n  n5 --> n7\n  n5 --> n8\n  n7 -->|\"se aplican en:\"| n9\n  n8 -->|\"se aplican en:\"| n10\n  n9 -->|\"su base\"| n11\n  n10 -->|\"forman\"| n12\n  n11 --> n13\n  n13 --> n15\n  n13 --> n16\n  n12 --> n14\n  n14 -->|\"¿dónde?\"| n17\n  n15 -->|\"produce\"| n18\n  n16 -->|\"produce\"| n19\n  n17 -->|\"decide\"| n20\n  n17 --> n21\n  n19 -->|\"produce\"| n22\n  n20 -->|\"se expresa\"| n23\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "BH-REL-02": {
  "subject": "hf",
  "block": "B",
  "tema": "Hume",
  "title": "El conocimiento en Hume",
  "mermaid": "flowchart TD\n  ezag[\"CONOCIMIENTO\"]:::axis\n  lock[\"Locke y Descartes\"]:::key\n  pertz[\"PERCEPCIONES\"]:::axis\n  eduk[\"todos los contenidos mentales\"]\n  inpr[\"impresiones\"]:::key\n  trin[\"intensas y vivas\"]\n  ideiak[\"ideas\"]:::key\n  ahul[\"débiles y no nítidas\"]\n  esper[\"EXPERIENCIA\"]:::axis\n  desc[\"Descartes\"]:::key\n  sortz[\"ideas innatas, adventicias y facticias\"]\n  ezag -->|\"como para estos\"| lock\n  ezag -->|\"es tener esto\"| pertz\n  pertz -->|\"son estos\"| eduk\n  pertz -->|\"pueden ser estas\"| inpr\n  pertz -->|\"pueden ser estas\"| ideiak\n  inpr -->|\"si son así\"| trin\n  inpr -->|\"producen estas\"| ideiak\n  ideiak -->|\"si son así\"| ahul\n  pertz -->|\"tienen este origen\"| esper\n  esper -->|\"a diferencia de este\"| desc\n  desc -->|\"que aceptaba esto\"| sortz\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CK-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Kant y la Ilustración",
  "mermaid": "flowchart TD\n  n0[\"LA FILOSOFÍA DE KANT\"]\n  n1[\"¿Qué es el hombre?\"]\n  n2[\"¿Qué puedo conocer?\"]:::axis\n  n3[\"¿Qué debo hacer?\"]:::axis\n  n4[\"¿Qué puedo esperar?\"]:::axis\n  n5[\"la libertad\"]\n  n6[\"la inmortalidad del alma\"]\n  n7[\"la existencia de Dios\"]\n  n8[\"condición de la moralidad\"]\n  n9[\"garantía del cumplimiento del deber\"]\n  n10[\"garantía del bien supremo: virtud + felicidad\"]\n  n11[\"partir del hecho de la ciencia\"]\n  n12[\"partir del hecho moral\"]\n  n13[\"uso teórico de la razón\"]\n  n14[\"uso práctico de la razón\"]\n  n15[\"sus condiciones\"]\n  n16[\"sus límites\"]\n  n17[\"condiciones a priori: universales de la ley moral\"]\n  n18[\"condiciones formales a priori\"]\n  n19[\"condiciones materiales: la experiencia\"]\n  n20[\"en el deber como forma de la ley\"]\n  n21[\"de la sensibilidad\"]\n  n22[\"del entendimiento\"]\n  n23[\"de la razón\"]\n  n24[\"en el imperativo categórico\"]:::key\n  n25[\"formas a priori: espacio y tiempo\"]:::key\n  n26[\"categorías\"]:::key\n  n27[\"ideas\"]\n  n0 --> n1\n  n1 --> n2\n  n2 -->|\"hace posible\"| n3\n  n3 -->|\"postula\"| n4\n  n4 --> n5\n  n4 --> n6\n  n4 --> n7\n  n5 --> n8\n  n6 --> n9\n  n7 --> n10\n  n2 --> n11\n  n3 --> n12\n  n11 -->|\"para examinar\"| n13\n  n12 -->|\"para examinar\"| n14\n  n13 -->|\"hace posible\"| n14\n  n13 --> n15\n  n13 -->|\"los constituyen\"| n16\n  n14 -->|\"las establece\"| n17\n  n15 -->|\"¿síntesis de qué son?\"| n18\n  n18 --> n21\n  n18 --> n22\n  n18 --> n23\n  n21 --> n25\n  n22 --> n26\n  n23 --> n27\n  n19 -->|\"no es conocimiento, pues las deja aparte\"| n16\n  n17 -->|\"las encuentra\"| n20\n  n20 -->|\"se expresa\"| n24\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CK-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El conocimiento sensible (Kant)",
  "mermaid": "flowchart TD\n  erreal[\"LA REALIDAD\"]:::axis\n  gbera[\"la cosa en sí\"]:::key\n  noum[\"el noúmeno\"]:::key\n  kaos[\"caos de sensaciones\"]:::axis\n  subj[\"el sujeto\"]:::key\n  forma[\"formas a priori de la sensibilidad\"]:::axis\n  puru[\"intuiciones puras\"]:::key\n  espa[\"espacio y tiempo\"]\n  objl[\"objeto del conocimiento sensible\"]:::key\n  enp[\"intuición empírica\"]\n  fen[\"fenómeno sensible\"]\n  niret[\"la cosa para mí\"]\n  erreal -->|\"es\"| gbera\n  erreal -->|\"es\"| noum\n  erreal -->|\"envía\"| kaos\n  kaos -->|\"lo componen\"| objl\n  objl -->|\"se llama así\"| enp\n  enp -->|\"o\"| fen\n  fen -->|\"esto es\"| niret\n  kaos -->|\"los organizan\"| forma\n  forma -->|\"se llaman así\"| puru\n  puru -->|\"son estas\"| espa\n  subj -->|\"las tiene\"| forma\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CC-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Comte: la sociedad, la ley de los tres estadios y la ciencia positiva",
  "mermaid": "flowchart TD\n  co[\"COMTE\"]\n  giz[\"LA SOCIEDAD\"]:::axis\n  ord[\"ORDEN\"]:::key\n  aur[\"PROGRESO\"]:::key\n  lege[\"LEY DE LOS TRES ESTADIOS\"]:::axis\n  teo[\"teológico\"]\n  met[\"metafísico\"]\n  pos[\"POSITIVO\"]:::key\n  zient[\"LA CIENCIA\"]:::key\n  gert[\"HECHOS Y LEYES\"]:::key\n  feno[\"explica los fenómenos desde ellos\"]\n  co --> giz\n  giz -->|\"organizada por dos principios\"| ord\n  giz -->|\"organizada por dos principios\"| aur\n  ord -->|\"siguiendo\"| lege\n  aur -->|\"siguiendo\"| lege\n  lege --> teo\n  lege --> met\n  lege --> pos\n  pos -->|\"de ahí\"| zient\n  zient -->|\"investiga\"| gert\n  gert --> feno\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CM-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Hegel y Karl Marx",
  "mermaid": "flowchart TD\n  n0[\"LA FILOSOFÍA DE MARX\"]:::axis\n  n1[\"filosofía alemana\"]\n  n2[\"economía política\"]\n  n3[\"socialismo utópico\"]\n  n4[\"Hegel\"]\n  n5[\"Smith, Ricardo\"]\n  n6[\"Owen · Saint-Simon · Fourier\"]\n  n7[\"Feuerbach\"]\n  n8[\"dialéctica\"]\n  n9[\"materialismo\"]\n  n10[\"teoría del valor-trabajo\"]\n  n11[\"socialismo\"]\n  n12[\"el ser humano\"]\n  n13[\"la naturaleza\"]\n  n14[\"la historia\"]\n  n15[\"actividad creadora: el trabajo\"]\n  n16[\"crea su vida en sociedad\"]\n  n17[\"creación de herramientas (tecnología)\"]\n  n18[\"crece la fuerza productiva\"]\n  n19[\"relación contradictoria\"]\n  n20[\"cambia las relaciones de producción\"]\n  n21[\"relaciones de propiedad\"]\n  n22[\"modo de producción capitalista\"]\n  n23[\"propiedad privada de los medios de producción\"]\n  n24[\"alienación o desposesión de su ser\"]:::axis\n  n25[\"social\"]:::key\n  n26[\"política\"]:::key\n  n27[\"religiosa\"]:::key\n  n28[\"económica\"]:::key\n  n29[\"división en clases sociales\"]\n  n30[\"burguesía\"]\n  n31[\"proletarios\"]\n  n32[\"revolución\"]:::axis\n  n33[\"sociedad sin clases sociales\"]\n  n34[\"fin de la explotación\"]\n  n35[\"superar la alienación y realizar al ser humano\"]\n  n1 --> n4\n  n2 --> n5\n  n3 --> n6\n  n4 --> n8\n  n4 -->|\"Feuerbach\"| n7\n  n7 --> n9\n  n5 --> n10\n  n6 --> n11\n  n8 --> n0\n  n9 --> n0\n  n10 --> n0\n  n11 --> n0\n  n0 --> n12\n  n12 -->|\"es su esencia\"| n15\n  n15 -->|\"mediante ella\"| n16\n  n16 -->|\"la transforma y socializa\"| n13\n  n16 -->|\"aquí se desarrolla dialécticamente\"| n14\n  n16 -->|\"se desarrolla\"| n18\n  n16 --> n19\n  n18 -->|\"por esto\"| n17\n  n20 -->|\"las produce\"| n21\n  n18 -->|\"eso crea\"| n22\n  n20 --> n22\n  n21 --> n23\n  n22 -->|\"eso provoca\"| n24\n  n24 -->|\"provoca\"| n25\n  n24 --> n26\n  n24 --> n27\n  n24 --> n28\n  n24 -->|\"provoca\"| n29\n  n29 -->|\"eso crea\"| n30\n  n29 --> n31\n  n31 -->|\"eso hace\"| n32\n  n32 -->|\"eso trae\"| n33\n  n32 --> n34\n  n33 -->|\"condición para ello\"| n35\n  n34 -->|\"condición para ello\"| n35\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CM-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Las ideologías en el marxismo",
  "mermaid": "flowchart TD\n  ideo[\"LAS IDEOLOGÍAS\"]:::axis\n  kausak[\"causas\"]:::key\n  funtz[\"funciones\"]:::key\n  k1[\"la situación económica de los individuos\"]\n  k2[\"su posición en el proceso de producción\"]\n  k3[\"las relaciones de producción en que están inmersos\"]\n  f1[\"hacer una representación imaginaria de la realidad\"]\n  f2[\"reconstruir la realidad de forma deformada\"]\n  f3[\"cohesionar la estructura social\"]\n  f4[\"legitimar el poder de la clase dirigente\"]\n  osag[\"componentes: Estado, derecho, moral, economía política, religión, filosofía, arte\"]:::key\n  ideo -->|\"causas\"| kausak\n  ideo -->|\"funciones\"| funtz\n  ideo -->|\"componentes\"| osag\n  kausak --> k1\n  kausak --> k2\n  kausak --> k3\n  funtz --> f1\n  funtz --> f2\n  funtz --> f3\n  funtz --> f4\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CF-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Feuerbach: de la alienación religiosa a la república democrática",
  "mermaid": "flowchart TD\n  fe[\"FEUERBACH\"]\n  giz[\"el ser humano es esto\"]:::axis\n  nahi[\"LA VOLUNTAD\"]:::key\n  arr[\"LA RAZÓN\"]:::key\n  sent[\"EL SENTIMIENTO\"]:::key\n  perf[\"pensados como PERFECCIONES DE DIOS\"]:::axis\n  ali[\"el ser humano se ALIENA DE SÍ MISMO\"]:::key\n  bot[\"debe recuperar su poder\"]\n  erre[\"LA REPÚBLICA DEMOCRÁTICA\"]:::key\n  fe --> giz\n  giz --> nahi\n  giz --> arr\n  giz --> sent\n  nahi -->|\"son pensados\"| perf\n  arr -->|\"son pensados\"| perf\n  sent -->|\"son pensados\"| perf\n  perf -->|\"en consecuencia\"| ali\n  ali -->|\"por tanto\"| bot\n  bot -->|\"en ella\"| erre\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5A-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Gramsci: la hegemonía cultural",
  "mermaid": "flowchart TD\n  gra[\"GRAMSCI\"]\n  heg[\"hegemonía cultural\"]:::axis\n  ind[\"la fuerza: el Estado y la ley\"]\n  bai[\"consentimiento y acuerdo\"]:::key\n  intel[\"intelectuales orgánicos\"]:::key\n  zen[\"el sentido común\"]:::key\n  zib[\"la sociedad civil\"]:::axis\n  bloke[\"el bloque histórico\"]\n  ideo[\"interés de clase como interés general\"]\n  ohi[\"costumbre tomada como normal\"]\n  gerra[\"guerra de posiciones\"]:::axis\n  kontra[\"un sentido común nuevo\"]:::key\n  eman[\"la emancipación\"]\n  gra -->|\"concepto central\"| heg\n  heg -->|\"no solo la fuerza\"| ind\n  heg -->|\"también el consentimiento\"| bai\n  heg -->|\"agentes\"| intel\n  bai -->|\"mediante\"| zen\n  bai -->|\"donde\"| zib\n  zib -->|\"escuela, prensa\"| ohi\n  zen -->|\"consecuencia\"| ideo\n  intel -->|\"alianza\"| bloke\n  intel -->|\"lucha cultural\"| gerra\n  gerra -->|\"construir\"| kontra\n  ideo -->|\"romper\"| kontra\n  kontra -->|\"objetivo\"| eman\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5A-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "La Escuela de Frankfurt: la teoría crítica",
  "mermaid": "flowchart TD\n  frk[\"ESCUELA DE FRANKFURT\"]\n  teo[\"Teoría crítica\"]:::axis\n  trad[\"contra la teoría tradicional\"]\n  marx[\"Marx\"]\n  freud[\"Freud\"]\n  weber[\"Weber\"]\n  helb[\"la emancipación\"]:::key\n  hoad[\"Horkheimer y Adorno\"]:::axis\n  mar[\"Marcuse\"]:::axis\n  hab[\"Habermas\"]:::axis\n  ains[\"razón instrumental\"]:::key\n  dial[\"Dialéctica de la Ilustración\"]:::key\n  indk[\"industria cultural\"]\n  uni[\"sociedad unidimensional\"]:::key\n  behf[\"necesidades falsas\"]\n  erre[\"represión excedente\"]\n  komu[\"razón comunicativa\"]:::key\n  elka[\"diálogo y consenso\"]\n  esp[\"la esfera pública\"]\n  frk -->|\"programa\"| teo\n  marx -->|\"fuente\"| teo\n  freud --> teo\n  weber --> teo\n  teo -->|\"objetivo\"| helb\n  teo -->|\"se distingue\"| trad\n  teo --> hoad\n  teo --> mar\n  teo --> hab\n  hoad -->|\"diagnóstico\"| ains\n  ains -->|\"se convierte\"| dial\n  dial -->|\"por ejemplo\"| indk\n  mar -->|\"la sociedad\"| uni\n  uni -->|\"creando\"| behf\n  behf --> erre\n  hab -->|\"salida\"| komu\n  komu -->|\"mediante\"| elka\n  elka --> esp\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5B-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Arendt: el análisis del totalitarismo",
  "mermaid": "flowchart TD\n  tot[\"TOTALITARISMO\"]\n  ideo[\"ideología totalizadora\"]:::key\n  ter[\"la lógica del terror\"]:::key\n  masa[\"sociedad de masas\"]\n  bak[\"soledad y atomización\"]:::key\n  sus[\"raíces\"]:::axis\n  anti[\"antisemitismo (Dreyfus)\"]\n  inp[\"imperialismo\"]\n  ban[\"la banalidad del mal\"]:::key\n  eich[\"Eichmann: renuncia a pensar\"]\n  tot --> ideo\n  tot --> ter\n  ideo --> masa\n  ter --> bak\n  tot -->|\"origen\"| sus\n  sus --> anti\n  sus --> inp\n  tot -->|\"consecuencia\"| ban\n  ban --> eich\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C5B-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Arendt: vita activa y acción política",
  "mermaid": "flowchart TD\n  vit[\"VITA ACTIVA\"]\n  lan[\"labor (animal laborans)\"]\n  egi[\"trabajo (homo faber)\"]\n  eki[\"acción (zoon politikon)\"]:::axis\n  bizi[\"sobrevivir\"]\n  mundu[\"el mundo de los objetos\"]\n  plu[\"natalidad y pluralidad\"]:::key\n  esp[\"el espacio público\"]:::key\n  bot[\"poder: actuar juntos\"]:::key\n  ind[\"la violencia\"]\n  vit --> lan\n  vit --> egi\n  vit -->|\"la suprema\"| eki\n  lan --> bizi\n  egi --> mundu\n  eki -->|\"fundamento\"| plu\n  eki -->|\"donde\"| esp\n  esp --> bot\n  bot -->|\"se distingue\"| ind\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CdB-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Beauvoir: la mujer, la alteridad y la libertad",
  "mermaid": "flowchart TD\n  be[\"BEAUVOIR\"]\n  tez[\"no se nace mujer, se llega a serlo\"]:::axis\n  best[\"la mujer como la Otra\"]:::key\n  aska[\"la libertad en situación\"]:::key\n  mit[\"los mitos de la feminidad\"]\n  obj[\"dialéctica objeto/sujeto\"]\n  trans[\"trascendencia\"]\n  inm[\"inmanencia\"]\n  gor[\"el cuerpo y la situación\"]\n  be -->|\"tesis\"| tez\n  tez -->|\"la mujer\"| best\n  tez -->|\"proyecto\"| aska\n  best --> mit\n  best -->|\"Hegel\"| obj\n  aska --> trans\n  aska -->|\"contra\"| inm\n  aska --> gor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "CdB-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Después de Beauvoir: género y justicia",
  "mermaid": "flowchart TD\n  gen[\"LA CONSTRUCCIÓN DEL GÉNERO\"]\n  but[\"Butler\"]:::axis\n  fra[\"Fraser\"]:::axis\n  nus[\"Nussbaum\"]:::axis\n  perf[\"la performatividad\"]:::key\n  queer[\"la teoría queer\"]\n  bir[\"la redistribución\"]\n  ait[\"el reconocimiento\"]:::key\n  gait[\"las capacidades humanas\"]:::key\n  just[\"justicia de género\"]:::key\n  gen --> but\n  gen --> fra\n  gen --> nus\n  but --> perf\n  perf --> queer\n  fra --> bir\n  fra --> ait\n  nus --> gait\n  bir --> just\n  ait --> just\n  gait --> just\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C8-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El existencialismo: libertad, absurdo y ser",
  "mermaid": "flowchart TD\n  ext[\"EXISTENCIALISMO\"]\n  tesi[\"la existencia precede a la esencia\"]:::axis\n  fen[\"fenomenología\"]\n  kier[\"Kierkegaard\"]\n  hei[\"HEIDEGGER\"]:::axis\n  sar[\"SARTRE\"]:::axis\n  cam[\"CAMUS\"]:::axis\n  das[\"Dasein: estar-en-el-mundo\"]:::key\n  her[\"ser-para-la-muerte\"]\n  den[\"la temporalidad\"]\n  ask[\"la libertad\"]:::key\n  era[\"la responsabilidad\"]\n  ang[\"la angustia\"]\n  abs[\"el absurdo\"]:::key\n  mat[\"la rebeldía\"]\n  zen[\"dar sentido a la vida\"]\n  aut[\"autenticidad: autor de la propia vida\"]:::key\n  ext -->|\"tesis central\"| tesi\n  fen -->|\"fuente\"| ext\n  kier -->|\"precedente\"| ext\n  tesi -->|\"como ontología\"| hei\n  tesi -->|\"como libertad\"| sar\n  tesi -->|\"como absurdo\"| cam\n  hei -->|\"la pregunta del ser\"| das\n  das -->|\"estructura\"| her\n  her -->|\"base\"| den\n  sar -->|\"el hombre es libertad\"| ask\n  ask -->|\"de ahí\"| era\n  era -->|\"y\"| ang\n  cam -->|\"el mundo es absurdo\"| abs\n  abs -->|\"respuesta\"| mat\n  mat -->|\"creando\"| zen\n  den -->|\"vivir auténticamente\"| aut\n  ang --> aut\n  zen --> aut\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C8K-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Kierkegaard: la angustia de la libertad y el salto de la fe",
  "mermaid": "flowchart TD\n  kk[\"KIERKEGAARD\"]\n  giz[\"el hombre se caracteriza así\"]:::axis\n  ezdet[\"su esencia no lo determina de antemano\"]:::key\n  elegi[\"debe elegirse a sí mismo\"]:::key\n  ezdeus[\"por sí mismo no es nada\"]\n  ahalg[\"toda opción es mera posibilidad\"]\n  angus[\"LA ANGUSTIA\"]:::key\n  etsip[\"LA DESESPERACIÓN\"]:::key\n  fede[\"el salto de la fe: a la pura realidad\"]:::key\n  jaink[\"DIOS\"]:::axis\n  kk --> giz\n  giz --> ezdet\n  giz --> elegi\n  ezdet -->|\"por tanto\"| ezdeus\n  elegi -->|\"pero\"| ahalg\n  ezdeus -->|\"produce\"| angus\n  ahalg -->|\"produce\"| etsip\n  angus -->|\"salimos\"| fede\n  etsip -->|\"salimos\"| fede\n  fede -->|\"es\"| jaink\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C6-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "La posmodernidad: los ejes del fin de los metarrelatos",
  "mermaid": "flowchart TD\n  pm[\"POSMODERNIDAD\"]\n  meta[\"el fin de los metarrelatos\"]\n  niet[\"la herencia de Nietzsche\"]\n  lyo[\"Lyotard\"]:::axis\n  der[\"Derrida\"]:::axis\n  fou[\"Foucault\"]:::axis\n  bau[\"Baudrillard\"]:::axis\n  del[\"Deleuze y Guattari\"]:::axis\n  jak[\"la pérdida de legitimación del saber\"]:::key\n  desk[\"deconstrucción y différance\"]:::key\n  bot[\"poder / saber, biopolítica\"]:::key\n  sim[\"el simulacro\"]:::key\n  erri[\"rizoma y líneas de fuga\"]:::key\n  haber[\"Habermas: modernidad inacabada\"]:::axis\n  vat[\"Vattimo: pensamiento débil\"]\n  ror[\"Rorty: conversación e ironía\"]\n  pm -->|\"diagnóstico central\"| meta\n  pm -->|\"punto de partida\"| niet\n  meta --> lyo\n  meta --> der\n  meta --> fou\n  meta --> bau\n  meta --> del\n  lyo -->|\"el saber\"| jak\n  der -->|\"el texto\"| desk\n  fou -->|\"genealogía\"| bot\n  bau -->|\"hiperrealidad\"| sim\n  del -->|\"no jerárquico\"| erri\n  jak -->|\"contrarrespuesta\"| haber\n  desk -->|\"debilitar el ser\"| vat\n  erri -->|\"conversación\"| ror\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C7-REL-02": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "Los cambios de paradigma",
  "mermaid": "flowchart TD\n  arist[\"Aristóteles\"]:::key\n  org[\"paradigma organicista\"]:::axis\n  magik[\"Paradigma mágico-animista\"]:::axis\n  mek[\"paradigma mecanicista\"]:::axis\n  esp[\"basado en la experiencia\"]:::key\n  anim[\"la naturaleza = un gran animal\"]\n  ezoh[\"acepta fenómenos extraordinarios\"]\n  inoz[\"mentalidad ingenua\"]\n  makin[\"la naturaleza = máquinas\"]:::key\n  hedad[\"lo real: extensión y movimiento\"]\n  ezind[\"no acepta fuerzas ocultas\"]\n  ondor[\"consecuencias: descubrimientos y matemática en la ciencia\"]:::key\n  arist -->|\"este es su origen\"| org\n  org -->|\"sustituyó a este\"| magik\n  magik -->|\"este lo sustituyó\"| mek\n  magik -->|\"se basa\"| esp\n  esp -->|\"cree\"| anim\n  anim -->|\"acepta\"| ezoh\n  ezoh -->|\"produce\"| inoz\n  mek -->|\"la naturaleza es\"| makin\n  makin -->|\"solo lo real\"| hedad\n  makin -->|\"no acepta\"| ezind\n  mek -->|\"la consecuencia es\"| ondor\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "C9-REL-01": {
  "subject": "hf",
  "block": "C",
  "tema": "La crisis de la modernidad",
  "title": "El feminismo: género, alteridad y debates actuales",
  "mermaid": "flowchart TD\n  fem[\"FEMINISMO\"]\n  sgb[\"distinción sexo-género\"]:::axis\n  ola[\"las olas\"]\n  bea[\"Simone de Beauvoir\"]:::axis\n  but[\"Judith Butler\"]:::axis\n  gaur[\"debates actuales\"]\n  alt[\"la alteridad\"]\n  ezda[\"no se nace mujer, se llega a serlo\"]:::key\n  traz[\"trascendencia e inmanencia\"]\n  perf[\"performatividad del género\"]:::key\n  queer[\"teoría queer\"]\n  deseg[\"deshacer el género\"]\n  fra[\"Fraser: redistribución y reconocimiento\"]:::key\n  nus[\"Nussbaum: capacidades\"]:::key\n  inter[\"interseccionalidad\"]:::key\n  zain[\"ética del cuidado e interdependencia\"]:::key\n  fem -->|\"base\"| sgb\n  fem -->|\"contexto\"| ola\n  sgb --> bea\n  sgb --> but\n  sgb --> gaur\n  bea -->|\"el hombre sujeto, la mujer Otra\"| alt\n  alt -->|\"de ahí\"| ezda\n  ezda -->|\"quiere superar\"| traz\n  but -->|\"el género es acto\"| perf\n  perf -->|\"de ahí\"| queer\n  queer --> deseg\n  gaur --> fra\n  gaur --> nus\n  gaur --> inter\n  traz --> zain\n  deseg --> zain\n  inter --> zain\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A2": {
  "subject": "hf",
  "block": "A",
  "tema": "Métodos del filósofo",
  "title": "Métodos y herramientas del filósofo",
  "mermaid": "flowchart TD\n  center[\"MÉTODOS Y HERRAMIENTAS<br>DEL FILÓSOFO\"]:::axis\n  fu[\"Fuentes de información\"]:::key\n  he[\"Herramientas del filósofo\"]:::key\n  center -->|\"parte de\"| fu\n  center -->|\"las trabaja con\"| he\n  fu --> f1[\"documentos · conferencias<br>· huellas digitales\"]\n  f1 -->|\"se someten a\"| h1[\"1· análisis crítico de las fuentes\"]\n  he --> h1\n  h1 --> h2[\"2· interpretación de documentos\"]\n  h2 --> h3[\"3· identificar problemas filosóficos\"]\n  h3 --> h4[\"4· diálogo basado en argumentos\"]\n  h4 --> h5[\"5· investigación filosófica\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A3": {
  "subject": "hf",
  "block": "A",
  "tema": "Origen de la filosofía",
  "title": "El nacimiento de la filosofía en Grecia",
  "mermaid": "flowchart TD\n  center[\"EL NACIMIENTO DE LA FILOSOFÍA<br>EN GRECIA (s. VI a. C.)\"]:::axis\n  paso[\"Paso del mito al logos\"]:::key\n  fac[\"Factores que lo hacen posible\"]:::key\n  center -->|\"consiste en\"| paso\n  center -->|\"lo explican\"| fac\n  paso --> mito[\"MITO:<br>explicación imaginativa (dioses)\"]\n  paso --> logos[\"LOGOS:<br>explicación racional (causas)\"]\n  mito -->|\"da paso al\"| logos\n  fac --> c1[\"democracia de la polis → debate en el ágora\"]\n  fac --> c2[\"esclavitud → tiempo libre para pensar\"]\n  fac --> c3[\"religión sin dogmas → libertad de crítica\"]\n  fac --> c4[\"comercio → contacto con otras culturas\"]\n  fac --> c5[\"leyes escritas → debate sistemático\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A4": {
  "subject": "hf",
  "block": "A",
  "tema": "Presocráticos",
  "title": "Presocráticos: la búsqueda del arché",
  "mermaid": "flowchart TD\n  center[\"PRESOCRÁTICOS:<br>¿cuál es el arché (principio) de todo?\"]:::axis\n  fis[\"Físicos:<br>un principio material\"]:::key\n  otros[\"Otras respuestas\"]:::key\n  deb[\"El gran debate:<br>cambio vs permanencia\"]:::key\n  center --> fis\n  center --> otros\n  center --> deb\n  fis --> t1[\"Tales → agua\"]\n  fis --> t2[\"Anaximandro → ápeiron\"]\n  fis --> t3[\"Anaxímenes → aire\"]\n  fis --> t4[\"Demócrito → átomos + vacío\"]\n  otros --> p1[\"Pitágoras → números\"]\n  otros --> emp[\"Empédocles → 4 elementos\"]\n  otros --> ana[\"Anaxágoras → nous\"]\n  deb --> her[\"Heráclito → todo fluye (fuego)\"]\n  deb --> par[\"Parménides → el ser es inmutable\"]\n  her -->|\"se opone a\"| par\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A5": {
  "subject": "hf",
  "block": "A",
  "tema": "Sofistas y Sócrates",
  "title": "Los sofistas y Sócrates",
  "mermaid": "flowchart TD\n  center[\"LOS SOFISTAS Y SÓCRATES\"]:::axis\n  sof[\"SOFISTAS<br>(Protágoras, Gorgias)\"]:::key\n  soc[\"SÓCRATES\"]:::key\n  asp[\"ASPASIA DE MILETO\"]:::key\n  center --> sof\n  center --> soc\n  center --> asp\n  sof -->|\"se enfrentan a\"| soc\n  sof --> s1[\"escepticismo epistemológico\"]\n  sof --> s2[\"relativismo moral\"]\n  sof --> s3[\"las leyes son convención\"]\n  soc --> c1[\"universalismo moral\"]\n  soc --> c2[\"busca definiciones universales\"]\n  soc --> c3[\"intelectualismo moral: saber = virtud\"]\n  soc -->|\"método\"| c4[\"ironía + mayéutica\"]\n  asp --> a1[\"maestra de retórica\"]\n  asp -->|\"influye en\"| soc\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A6": {
  "subject": "hf",
  "block": "A",
  "tema": "Platón y Aristóteles",
  "title": "Platón y Aristóteles",
  "mermaid": "flowchart TD\n  center[\"PLATÓN Y ARISTÓTELES\"]:::axis\n  pla[\"PLATÓN\"]:::key\n  ari[\"ARISTÓTELES\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"critica a\"| pla\n  pla --> p1[\"dualismo: mundo de las Ideas<br>vs mundo físico\"]\n  pla --> p2[\"anamnesis (reminiscencia)\"]\n  pla --> p3[\"episteme (saber) vs doxa (opinión)\"]\n  ari --> a1[\"hilemorfismo: materia + forma\"]\n  ari --> a2[\"teoría de las cuatro causas\"]\n  ari --> a3[\"de la potencia al acto\"]\n  a1 -->|\"frente al dualismo\"| p1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A7": {
  "subject": "hf",
  "block": "A",
  "tema": "Antropología clásica",
  "title": "Antropología clásica: la psique",
  "mermaid": "flowchart TD\n  center[\"ANTROPOLOGÍA CLÁSICA:<br>¿qué es la psique (el alma)?\"]:::axis\n  soc[\"SÓCRATES\"]:::key\n  pla[\"PLATÓN\"]:::key\n  ari[\"ARISTÓTELES\"]:::key\n  center --> soc\n  soc -->|\"desarrollado por\"| pla\n  pla -->|\"corregido por\"| ari\n  soc --> s1[\"«conócete a ti mismo»\"]\n  soc --> s2[\"el alma es lo más valioso\"]\n  soc --> s3[\"conocimiento = virtud\"]\n  pla --> p1[\"alma inmortal, tres partes\"]\n  pla --> p2[\"el cuerpo es su cárcel\"]\n  pla --> p3[\"dualismo antropológico\"]\n  ari --> a1[\"el alma es forma: no existe sin cuerpo\"]\n  ari --> a2[\"tres almas: vegetativa,<br>sensitiva, racional\"]\n  ari --> a3[\"unidad sustancial (cuerpo + alma)\"]\n  p3 -->|\"rechazado por\"| a3\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A8": {
  "subject": "hf",
  "block": "A",
  "tema": "Ética clásica",
  "title": "El debate ético",
  "mermaid": "flowchart TD\n  center[\"EL DEBATE ÉTICO CLÁSICO\"]:::axis\n  sp[\"SÓCRATES Y PLATÓN:<br>intelectualismo moral\"]:::key\n  ari[\"ARISTÓTELES:<br>ética de la virtud\"]:::key\n  center --> sp\n  center --> ari\n  ari -->|\"se distancia de\"| sp\n  sp --> s1[\"conocer el bien → obrar bien\"]\n  sp --> s2[\"nadie obra mal a propósito<br>(solo por ignorancia)\"]\n  ari --> a1[\"la virtud se cultiva con el hábito\"]\n  ari --> a2[\"término medio entre dos extremos\"]\n  ari --> a3[\"eudaimonía: la felicidad como fin\"]\n  s1 -->|\"saber no basta:<br>hay que habituarse\"| a1\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A9": {
  "subject": "hf",
  "block": "A",
  "tema": "Política clásica",
  "title": "El debate político",
  "mermaid": "flowchart TD\n  center[\"EL DEBATE POLÍTICO CLÁSICO\"]:::axis\n  pla[\"PLATÓN:<br>la ciudad ideal (utopía)\"]:::key\n  ari[\"ARISTÓTELES:<br>política realista\"]:::key\n  center --> pla\n  center --> ari\n  ari -->|\"más pragmático que\"| pla\n  pla --> p1[\"tres clases sociales\"]\n  pla --> p2[\"gobierno de reyes filósofos\"]\n  pla --> p3[\"crítica de la democracia\"]\n  ari --> a0[\"el ser humano es zoon politikon<br>(animal político)\"]\n  ari --> rectos[\"Gobiernos rectos:<br>monarquía · aristocracia · república\"]\n  ari --> desv[\"Gobiernos desviados:<br>tiranía · oligarquía · demagogia\"]\n  rectos -->|\"se corrompen en\"| desv\n  ari -->|\"la mejor forma\"| a4[\"la república\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-A10": {
  "subject": "hf",
  "block": "A",
  "tema": "Helenismo",
  "title": "Las escuelas helenísticas",
  "mermaid": "flowchart TD\n  center[\"ESCUELAS HELENÍSTICAS\"]:::axis\n  meta[\"Meta común: la felicidad<br>como serenidad (ataraxia)\"]:::key\n  center -->|\"todas buscan\"| meta\n  epi[\"EPICUREÍSMO\"]:::key\n  est[\"ESTOICISMO\"]:::key\n  cin[\"CINISMO\"]:::key\n  esc[\"ESCEPTICISMO\"]:::key\n  meta --> epi\n  meta --> est\n  meta --> cin\n  meta --> esc\n  epi -->|\"vía\"| e1[\"placer moderado,<br>evitar el dolor\"]\n  est -->|\"vía\"| s1[\"aceptar el destino<br>(apatía)\"]\n  cin -->|\"vía\"| c1[\"vivir según la naturaleza<br>(autarquía)\"]\n  esc -->|\"vía\"| x1[\"suspender el juicio<br>(epojé)\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B1": {
  "subject": "hf",
  "block": "B",
  "tema": "Filosofía medieval",
  "title": "La filosofía medieval",
  "mermaid": "flowchart TD\n  center[\"LA FILOSOFÍA MEDIEVAL\"]:::axis\n  hilo[\"Tema central:<br>¿puede la razón demostrar a Dios?\"]:::key\n  et[\"Cuatro etapas\"]:::key\n  center -->|\"gira en torno a\"| hilo\n  center --> et\n  et --> e1[\"Patrística → Agustín\"]\n  e1 --> e2[\"Escolástica temprana → Anselmo\"]\n  e2 --> e3[\"Escolástica tardía → Tomás de Aquino\"]\n  e3 --> e4[\"Nominalismo → Ockham\"]\n  e1 -->|\"prueba\"| p1[\"la verdad interior (Agustín)\"]\n  e3 -->|\"prueba\"| p2[\"las cinco vías (Tomás)\"]\n  e4 -->|\"pone en duda\"| p3[\"las pruebas racionales (Ockham)\"]\n  p3 -->|\"acaba separando\"| sep[\"fe y razón\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B2": {
  "subject": "hf",
  "block": "B",
  "tema": "Fe y razón",
  "title": "Fe y razón",
  "mermaid": "flowchart TD\n  center[\"FE Y RAZÓN\"]:::axis\n  q[\"¿Pueden fe y razón<br>ir juntas hacia la verdad?\"]\n  center --> q\n  agus[\"AGUSTÍN\"]:::key\n  tom[\"TOMÁS DE AQUINO\"]:::key\n  ter[\"TERTULIANO\"]:::key\n  q -->|\"unión\"| agus\n  q -->|\"armonía\"| tom\n  q -->|\"oposición\"| ter\n  agus -->|\"lema\"| a1[\"«Cree para entender,<br>entiende para creer»\"]\n  agus --> a2[\"fe y razón se necesitan\"]\n  tom --> t1[\"dos ámbitos:<br>teología y filosofía\"]\n  tom -->|\"no se contradicen\"| t2[\"la razón prepara la fe<br>(preámbulos)\"]\n  ter -->|\"«Creo porque es absurdo»\"| te1[\"la fe basta,<br>la razón sobra\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B3": {
  "subject": "hf",
  "block": "B",
  "tema": "Renacimiento",
  "title": "El Renacimiento",
  "mermaid": "flowchart TD\n  center[\"EL RENACIMIENTO\"]:::axis\n  soc[\"Cambios sociales\"]:::key\n  ant[\"Antropocentrismo\"]:::key\n  cie[\"Revolución científica\"]:::key\n  center --> soc\n  soc -->|\"hacen posible\"| ant\n  ant -->|\"desemboca en\"| cie\n  soc --> s1[\"crisis del feudalismo\"]\n  soc --> s2[\"auge de la burguesía\"]\n  soc --> s3[\"la imprenta (Gutenberg)\"]\n  ant --> a1[\"el ser humano en el centro\"]\n  ant --> a2[\"humanismo\"]\n  cie --> c1[\"heliocentrismo<br>(Copérnico, Galileo)\"]\n  cie --> c2[\"método empírico\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B4": {
  "subject": "hf",
  "block": "B",
  "tema": "Racionalismo y empirismo",
  "title": "Racionalismo y empirismo",
  "mermaid": "flowchart TD\n  center[\"RACIONALISMO Y EMPIRISMO\"]:::axis\n  rac[\"RACIONALISMO<br>(Descartes)\"]:::key\n  emp[\"EMPIRISMO<br>(Hume)\"]:::key\n  center --> rac\n  center --> emp\n  rac -->|\"¿razón o experiencia?\"| emp\n  rac --> r1[\"la fuente es la razón\"]\n  rac --> r2[\"hay ideas innatas (a priori)\"]\n  rac --> r3[\"método matemático-deductivo\"]\n  rac --> r4[\"«cogito ergo sum»\"]\n  emp --> e1[\"la fuente es la experiencia\"]\n  emp --> e2[\"la mente es una tabula rasa\"]\n  emp --> e3[\"conocimiento solo probable\"]\n  emp --> e4[\"crítica de la causalidad\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B5": {
  "subject": "hf",
  "block": "B",
  "tema": "Sustancia (modernos)",
  "title": "El debate moderno sobre la sustancia",
  "mermaid": "flowchart TD\n  center[\"EL DEBATE MODERNO<br>SOBRE LA SUSTANCIA\"]:::axis\n  des[\"DESCARTES:<br>dualismo (tres sustancias)\"]:::key\n  spi[\"SPINOZA:<br>panteísmo\"]:::key\n  lei[\"LEIBNIZ:<br>monadología\"]:::key\n  center --> des\n  des --> d1[\"alma y cuerpo separados\"]\n  des --> d2[\"interacción en la glándula pineal\"]\n  des -->|\"problema no resuelto\"| pr[\"¿cómo se relacionan<br>alma y cuerpo?\"]\n  pr -->|\"una sola sustancia\"| spi\n  pr -->|\"infinitas mónadas\"| lei\n  spi --> s1[\"una sola sustancia:<br>Dios o Naturaleza\"]\n  spi --> s2[\"cuerpo y alma:<br>dos aspectos de lo mismo\"]\n  lei --> l1[\"mónadas: sustancias simples\"]\n  lei --> l2[\"armonía preestablecida\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B6": {
  "subject": "hf",
  "block": "B",
  "tema": "Contrato social",
  "title": "El contrato social",
  "mermaid": "flowchart TD\n  center[\"EL CONTRATO SOCIAL\"]:::axis\n  idea[\"Del estado de naturaleza a la sociedad<br>por un pacto\"]:::key\n  hob[\"HOBBES\"]:::key\n  loc[\"LOCKE\"]:::key\n  rou[\"ROUSSEAU\"]:::key\n  center -->|\"tesis común\"| idea\n  idea --> hob\n  idea --> loc\n  idea --> rou\n  hob --> h1[\"«homo homini lupus»\"]\n  hob -->|\"pacto que da\"| h2[\"Leviatán:<br>monarquía absoluta\"]\n  loc --> l1[\"derechos naturales:<br>vida, libertad, propiedad\"]\n  loc -->|\"pacto que da\"| l2[\"monarquía parlamentaria<br>+ separación de poderes\"]\n  rou --> r1[\"la voluntad general\"]\n  rou -->|\"pacto que da\"| r2[\"democracia asamblearia\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-B7": {
  "subject": "hf",
  "block": "B",
  "tema": "Utilitarismo y liberalismo",
  "title": "Utilitarismo, liberalismo y capitalismo",
  "mermaid": "flowchart TD\n  center[\"UTILITARISMO, LIBERALISMO<br>Y CAPITALISMO\"]:::axis\n  uti[\"UTILITARISMO<br>(Bentham, Mill)\"]:::key\n  lib[\"LIBERALISMO\"]:::key\n  cap[\"CAPITALISMO<br>(Adam Smith)\"]:::key\n  azu[\"AZURMENDI: crítica\"]:::key\n  center --> uti\n  center --> lib\n  center --> cap\n  center --> azu\n  uti --> u1[\"la mayor felicidad para<br>el mayor número\"]\n  uti --> u2[\"balance de placer vs dolor\"]\n  lib --> l1[\"primacía del individuo\"]\n  lib --> l2[\"propiedad privada\"]\n  lib --> l3[\"Estado neutral\"]\n  lib -->|\"fundamenta\"| cap\n  cap --> c1[\"la «mano invisible»\"]\n  cap --> c2[\"el interés personal trae<br>el bienestar general\"]\n  azu -->|\"replica a\"| c2\n  azu --> az1[\"el ser humano también es<br>cooperativo por naturaleza\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C1": {
  "subject": "hf",
  "block": "C",
  "tema": "Ilustración",
  "title": "La Ilustración: razón y derechos",
  "mermaid": "flowchart TD\n  center[\"LA ILUSTRACIÓN:<br>razón y derechos\"]:::axis\n  raz[\"Un nuevo modelo de razón\"]:::key\n  der[\"Derechos naturales\"]:::key\n  fem[\"Primera ola del feminismo\"]:::key\n  center --> raz\n  raz -->|\"lleva a exigir\"| der\n  der -->|\"se amplía al reclamar\"| fem\n  raz --> r1[\"razón crítica\"]\n  raz --> r2[\"razón autónoma («atrévete a saber»)\"]\n  der --> d1[\"rechazo del absolutismo\"]\n  der --> d2[\"separación de poderes (Montesquieu)\"]\n  der --> d3[\"soberanía popular (Rousseau)\"]\n  fem --> f1[\"Mary Wollstonecraft\"]\n  fem --> f2[\"Olympe de Gouges\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C2": {
  "subject": "hf",
  "block": "C",
  "tema": "Kant",
  "title": "La filosofía crítica de Kant",
  "mermaid": "flowchart TD\n  center[\"LA FILOSOFÍA CRÍTICA DE KANT\"]:::axis\n  cri[\"Criticismo\"]:::key\n  fn[\"Fenómeno / Noúmeno\"]:::key\n  met[\"El problema de la metafísica\"]:::key\n  center --> cri\n  cri -->|\"distingue\"| fn\n  fn -->|\"conclusión\"| met\n  cri --> c1[\"une racionalismo + empirismo\"]\n  cri --> c2[\"conocer = materia (a posteriori)<br>+ forma (a priori)\"]\n  fn --> fe[\"FENÓMENO: la realidad que aparece<br>(se puede conocer)\"]\n  fn --> no[\"NOÚMENO: la cosa en sí<br>(incognoscible)\"]\n  no -->|\"por eso\"| met\n  met --> m1[\"la metafísica no puede ser ciencia\"]\n  met --> m2[\"los objetos trascendentes<br>no se pueden demostrar\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C3": {
  "subject": "hf",
  "block": "C",
  "tema": "Ética moderna",
  "title": "Ética: Kant frente al utilitarismo",
  "mermaid": "flowchart TD\n  center[\"ÉTICA: KANT FRENTE<br>AL UTILITARISMO\"]:::axis\n  kant[\"KANT:<br>ética deontológica (del deber)\"]:::key\n  uti[\"UTILITARISMO<br>(Bentham, Mill)\"]:::key\n  azu[\"AZURMENDI:<br>relativismo relativo\"]:::key\n  center --> kant\n  center --> uti\n  kant -->|\"se opone a\"| uti\n  kant --> k1[\"mira el deber y la intención\"]\n  kant --> k2[\"imperativo categórico\"]\n  kant --> k3[\"la persona como fin, no como medio\"]\n  uti --> u1[\"mira las consecuencias\"]\n  uti --> u2[\"la mayor felicidad para<br>el mayor número\"]\n  center --> azu\n  azu -->|\"matiza a ambos\"| kant\n  azu -->|\"matiza a ambos\"| uti\n  azu --> az1[\"no hay un fundamento ético absoluto\"]\n  azu --> az2[\"los valores dependen del contexto\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C4": {
  "subject": "hf",
  "block": "C",
  "tema": "Filósofos de la sospecha",
  "title": "Los filósofos de la sospecha",
  "mermaid": "flowchart TD\n  center[\"LOS FILÓSOFOS DE LA SOSPECHA\"]:::axis\n  idea[\"La conciencia no es transparente:<br>algo oculto la determina\"]\n  center -->|\"tesis común\"| idea\n  marx[\"MARX\"]:::key\n  niet[\"NIETZSCHE\"]:::key\n  freud[\"FREUD\"]:::key\n  idea --> marx\n  idea --> niet\n  idea --> freud\n  marx -->|\"desenmascara\"| eco[\"la economía\"]\n  eco -->|\"produce\"| ideo[\"ideología y alienación\"]\n  ideo -->|\"se supera con\"| rev[\"revolución → comunismo\"]\n  niet -->|\"desenmascara\"| moral[\"la moral y sus valores\"]\n  moral -->|\"conduce al\"| nih[\"nihilismo · muerte de Dios\"]\n  nih -->|\"respuesta\"| super[\"voluntad de poder · superhombre\"]\n  freud -->|\"desenmascara\"| incon[\"el inconsciente\"]\n  incon --> yo[\"ello · yo · superyó\"]\n  incon --> pul[\"Eros y Thanatos\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C5": {
  "subject": "hf",
  "block": "C",
  "tema": "Crítica del capitalismo",
  "title": "La crítica del capitalismo",
  "mermaid": "flowchart TD\n  center[\"LA CRÍTICA DEL CAPITALISMO<br>Y LA SOCIEDAD DE MASAS\"]:::axis\n  fra[\"ESCUELA DE FRANKFURT\"]:::key\n  are[\"HANNAH ARENDT\"]:::key\n  raw[\"JOHN RAWLS\"]:::key\n  center --> fra\n  center --> are\n  center --> raw\n  fra --> f1[\"razón instrumental\"]\n  fra --> f2[\"industria cultural\"]\n  fra -->|\"produce\"| f3[\"deshumanización\"]\n  are --> a1[\"análisis del totalitarismo\"]\n  are --> a2[\"ideología totalizadora\"]\n  are -->|\"provoca\"| a3[\"anulación de la esfera<br>pública y privada\"]\n  raw -->|\"respuesta: reformar, no destruir\"| r1[\"la justicia como equidad\"]\n  raw --> r2[\"el Estado del bienestar\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C6": {
  "subject": "hf",
  "block": "C",
  "tema": "Postmodernidad",
  "title": "Nietzsche y la postmodernidad",
  "mermaid": "flowchart TD\n  center[\"NIETZSCHE Y LA POSTMODERNIDAD\"]:::axis\n  niet[\"NIETZSCHE:<br>deconstrucción\"]:::key\n  post[\"POSTMODERNIDAD\"]:::key\n  hab[\"HABERMAS:<br>defensa de la modernidad\"]:::key\n  center --> niet\n  niet -->|\"inspira\"| post\n  niet --> n1[\"crítica de la verdad objetiva\"]\n  niet --> n2[\"crítica de la metafísica\"]\n  niet --> n3[\"crítica del dualismo\"]\n  post --> p1[\"crítica de las verdades universales<br>(fin de los metarrelatos)\"]\n  post --> p2[\"pluralidad y diferencia\"]\n  center --> hab\n  hab -->|\"responde a\"| post\n  hab --> h1[\"razón comunicativa\"]\n  hab --> h2[\"la modernidad no se ha agotado\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C7": {
  "subject": "hf",
  "block": "C",
  "tema": "Filosofía del lenguaje",
  "title": "La filosofía del lenguaje",
  "mermaid": "flowchart TD\n  center[\"LA FILOSOFÍA DEL LENGUAJE\"]:::axis\n  w1[\"WITTGENSTEIN I<br>(el primero)\"]:::key\n  w2[\"WITTGENSTEIN II<br>(el segundo)\"]:::key\n  txi[\"TXILLARDEGI\"]:::key\n  center --> w1\n  w1 -->|\"se corrige a sí mismo en\"| w2\n  w1 --> a1[\"el lenguaje es imagen del mundo\"]\n  w1 --> a2[\"la metafísica no tiene sentido\"]\n  w1 --> a3[\"«de lo que no se puede hablar,<br>hay que callar»\"]\n  w2 --> b1[\"el significado es el uso\"]\n  w2 --> b2[\"juegos de lenguaje\"]\n  w2 --> b3[\"filosofía terapéutica\"]\n  center --> txi\n  txi -->|\"desde el euskera\"| w2\n  txi --> c1[\"la lengua condiciona el pensamiento\"]\n  txi --> c2[\"es un estructurador inconsciente\"]\n  txi --> c3[\"la supervivencia del euskera,<br>difícil sin un Estado vasco\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C8": {
  "subject": "hf",
  "block": "C",
  "tema": "Existencialismo",
  "title": "El existencialismo",
  "mermaid": "flowchart TD\n  center[\"EL EXISTENCIALISMO\"]:::axis\n  idea[\"Parte de la existencia concreta,<br>no de esencias abstractas\"]:::key\n  center -->|\"tesis común\"| idea\n  sar[\"SARTRE (ateo)\"]:::key\n  hei[\"HEIDEGGER\"]:::key\n  ort[\"ORTEGA Y GASSET\"]:::key\n  una[\"UNAMUNO (cristiano)\"]:::key\n  idea --> sar\n  idea --> hei\n  idea --> ort\n  idea --> una\n  sar --> s1[\"la existencia precede a la esencia\"]\n  sar --> s2[\"condenados a ser libres\"]\n  hei --> h1[\"distinguir el ser y los entes\"]\n  hei --> h2[\"Dasein: proyectado en el mundo\"]\n  ort --> o1[\"la razón vital\"]\n  ort --> o2[\"«yo soy yo y mi circunstancia»\"]\n  una --> u1[\"el sentimiento trágico de la vida\"]\n  una --> u2[\"el ansia de inmortalidad\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 },
 "ds-C9": {
  "subject": "hf",
  "block": "C",
  "tema": "Beauvoir / feminismo",
  "title": "Simone de Beauvoir: el feminismo",
  "mermaid": "flowchart TD\n  center[\"SIMONE DE BEAUVOIR:<br>el feminismo\"]:::axis\n  tesis[\"«No se nace mujer,<br>se llega a serlo»\"]:::key\n  alt[\"La alteridad: el segundo sexo\"]:::key\n  eman[\"La emancipación\"]:::key\n  center --> tesis\n  tesis -->|\"explica\"| alt\n  alt -->|\"se supera con\"| eman\n  tesis --> t1[\"no hay una esencia femenina fija\"]\n  tesis --> t2[\"la cultura construye «lo femenino»\"]\n  alt --> a1[\"el hombre = sujeto absoluto\"]\n  alt --> a2[\"la mujer = «la otra», lo complementario\"]\n  alt --> a3[\"dialéctica del amo y el esclavo\"]\n  eman --> e1[\"educación igualitaria\"]\n  eman --> e2[\"derecho al aborto y a la anticoncepción\"]\n  eman --> e3[\"autonomía económica\"]\nclassDef axis fill:#1f5d5a,color:#fff,stroke:#1f5d5a;\nclassDef key fill:#9a6a22,color:#fff,stroke:#9a6a22;"
 }
};
