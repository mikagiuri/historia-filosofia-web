"use strict";
/* (08-10) Ejes comunes de cada bloque para la tabla «Sinóptica» de los Esquemas de autor.
   Cada fila apunta por «i» a su esquema en ESQUEMAS_AUTOR (esquemas_autor.js); celdas en el orden de «ejes».
   Redactado a partir de theory.js y de cada esquema; euskera en web_i18n/tm/eu.json. */
const EA_EJES = {
 "A": {
  "ejes": [
   "Autores",
   "Realidad",
   "Conocimiento y método",
   "Ser humano",
   "Ética",
   "Política",
   "Legado"
  ],
  "filas": [
   {
    "i": 0,
    "c": [
     "Sócrates (diálogo), Platón (dialéctica) y Aristóteles (tratado); después, Descartes, Kant, Hegel, Marx y Nietzsche.",
     "Los presocráticos buscan una explicación racional del cosmos; Aristóteles define, clasifica y busca las causas.",
     "Argumentar con premisas y detectar falacias; principio de caridad; delimitar la pregunta, aclarar los conceptos y construir una posición razonada.",
     "Historicidad: todo pensamiento nace situado en una época, una sociedad y una cultura; hay preguntas universales que reaparecen.",
     "Sócrates y Platón trabajan la justicia y la verdad mediante el diálogo: preguntar, refutar y ascender a las Ideas.",
     "El canon no es neutro: relaciones de poder patriarcales y colonialistas han dejado fuera a mujeres y a pensadores no europeos.",
     "Cada época, su método y su género: quaestio y disputatio medievales, duda metódica, crítica, genealogía, hermenéutica."
    ]
   },
   {
    "i": 1,
    "c": [
     "Homero y Hesíodo (mito); Jenófanes de Colofón, crítico de la religión tradicional; los primeros filósofos de Mileto.",
     "La physis deja de ser un caos y se entiende como cosmos, un orden necesario; el arché, principio del que todo procede.",
     "Del «¿quién lo hizo?» al «¿por qué ocurre necesariamente?»: razón, observación y argumentación frente al relato aceptado y transmitido.",
     "La filosofía nace del asombro; Jenófanes: los dioses son una proyección humana (antropomorfismo).",
     "Jenófanes denuncia que Homero y Hesíodo atribuyen a los dioses las peores acciones humanas; defiende un dios único, principio racional.",
     "Polis y ágora: debate público, isegoría e isonomía; pero la palabra pública excluía a mujeres, esclavos y extranjeros.",
     "Hegel: el mito ya es pensamiento; Eliade, Cassirer y Lévi-Strauss lo revalorizan; se cuestiona el «milagro griego»."
    ]
   },
   {
    "i": 2,
    "c": [
     "Tales, Anaximandro y Anaxímenes; Pitágoras; Heráclito y Parménides; Empédocles, Anaxágoras y Demócrito.",
     "El arché: monismo (agua, ápeiron, aire) o pluralismo (raíces, semillas, átomos); Heráclito afirma el devenir y Parménides, el ser inmutable.",
     "Parménides: vía de la verdad (razón) frente a vía de la opinión (sentidos), con uno de los primeros argumentos deductivos; apariencia y realidad.",
     "Pitagóricos: alma inmortal que transmigra y cuerpo cárcel; si todo cambia, ¿qué permanece en el «yo»?",
     "—",
     "—",
     "Platón hereda el problema del cambio: Heráclito anticipa el mundo sensible y Parménides, el de las Ideas; con Parménides nace la ontología."
    ]
   },
   {
    "i": 3,
    "c": [
     "Protágoras, Gorgias e Hipias (sofistas); Sócrates, conocido por Platón; Aspasia de Mileto.",
     "Physis (lo natural, que no varía) frente a nomos (ley, costumbre y valores acordados); Gorgias: «nada hay».",
     "Relativismo (Protágoras) y escepticismo (Gorgias) frente a las definiciones universales de Sócrates, buscadas con ironía y mayéutica.",
     "Giro antropológico: del cosmos al ser humano y la polis; «el hombre es la medida de todas las cosas».",
     "Intelectualismo moral: solo quien conoce el bien obra bien y el mal se comete por ignorancia; Sócrates niega la akrasía.",
     "Democracia ateniense: retórica para triunfar en la asamblea; leyes convencionales que pueden cambiarse; ciudadanía solo de los varones libres.",
     "Sócrates, condenado a muerte en el 399 a. C., marca a Platón; Aristóteles replicará que la akrasía es real; Aspasia, «maestra» de Sócrates."
    ]
   },
   {
    "i": 4,
    "c": [
     "Platón (Academia) y Aristóteles (Liceo); Platón sintetiza a Sócrates, los pitagóricos, Heráclito y Parménides.",
     "Platón: dualismo ontológico, Ideas eternas con el Bien en la cima; Aristóteles: sustancia concreta de materia y forma, acto y potencia.",
     "Platón: reminiscencia y dialéctica, de la doxa a la episteme; Aristóteles: abstracción a partir de los sentidos y silogismo (Órganon).",
     "Platón: alma inmortal que contempló las Ideas antes de encarnarse; Aristóteles: el alma, forma del cuerpo vivo.",
     "La Idea del Bien orienta la vida buena; para Aristóteles no basta saber qué es el bien: la virtud nace del hábito.",
     "Caverna: el liberado vuelve para liberar a los demás, misión política del filósofo; Aristóteles busca la mejor organización posible en cada situación.",
     "El tercer hombre critica las Ideas; Aristóteles, «el Filósofo» de la escolástica; su física, superada tras Galileo y Newton."
    ]
   },
   {
    "i": 5,
    "c": [
     "Sócrates; Platón (Fedón, Fedro); Aristóteles (Acerca del alma).",
     "Platón: dualismo de alma y cuerpo; Aristóteles: hilemorfismo, el alma es acto (entelequia) y causa formal, eficiente y final del cuerpo.",
     "«Conócete a ti mismo»; Platón: conocer es recordar (reminiscencia); Aristóteles: conocer es abstraer a partir de los sentidos.",
     "Alma inmortal presa en el cuerpo, con tres partes (carro alado), frente a una sola sustancia con funciones vegetativa, sensitiva y racional.",
     "Libertad es conocerse y gobernarse; justo es quien deja gobernar a la razón; filosofar es prepararse para morir (Fedón).",
     "Las tres partes del alma son el puente entre la ética y la política platónicas: se corresponden con las tres clases de la ciudad.",
     "Metempsicosis heredada del orfismo y el pitagorismo; el entendimiento agente de Aristóteles, leído de forma opuesta por Averroes y Tomás de Aquino."
    ]
   },
   {
    "i": 6,
    "c": [
     "Sócrates; Platón (República, mito de Er); Aristóteles (Ética a Nicómaco).",
     "Platón: la Idea del Bien, cima de lo real; Aristóteles: todo se hace por un fin, y los fines se ordenan a un fin último.",
     "La virtud es conocimiento (intelectualismo); Aristóteles: las virtudes dianoéticas se enseñan y la prudencia delibera en cada caso concreto.",
     "Alma en tres partes, cada una con su virtud (Platón); función propia del ser humano: ejercer la razón (Aristóteles).",
     "La justicia, salud del alma; la eudaimonía, vida entera conforme a la virtud; la virtud ética, término medio entre dos vicios.",
     "Vida política o práctica frente a vida contemplativa; el carácter se educa desde la infancia, dentro de las leyes y costumbres de la ciudad.",
     "Aristóteles responde a la aporía socrática: la akrasía existe; la ética de la virtud ha llegado hasta hoy."
    ]
   },
   {
    "i": 7,
    "c": [
     "Platón (República) y Aristóteles (Política); en el siglo XX, Popper como crítico de Platón.",
     "Platón diseña una ciudad ideal (utopía); Aristóteles parte de la polis real: familia, aldea y polis son asociaciones naturales.",
     "Solo quien conoce la Idea del Bien puede gobernar, y la educación forma a los gobernantes; Aristóteles observa y clasifica los regímenes.",
     "La ciudad es el alma escrita en grande; el ser humano, zoon politikón: fuera de la comunidad, «una bestia o un dios».",
     "Justicia: cada clase en su función; la política continúa la ética: la polis busca no solo vivir, sino vivir bien.",
     "Rey filósofo y ciclo de degeneración hasta la tiranía; regímenes justos y degenerados; politeia apoyada en la clase media.",
     "Aristóteles rechaza la comunidad de bienes; Popper ve en Platón una semilla del autoritarismo; la esclavitud natural, hoy inaceptable."
    ]
   },
   {
    "i": 8,
    "c": [
     "Antístenes y Diógenes (cinismo), Zenón de Citio (estoicismo), Epicuro, Pirrón de Elis (escepticismo); Hipatia de Alejandría.",
     "Estoicos: un logos divino ordena el universo y todo está determinado por el destino; Epicuro: átomos, vacío y desviación (clinamen).",
     "Escepticismo: a cada afirmación se opone otra igual de válida y se suspende el juicio (epojé); Epicuro: las sensaciones, criterio de verdad.",
     "El individuo, «uno más» en un mundo incierto; la filosofía, terapia del alma; para Epicuro, el alma es material y se disgrega al morir.",
     "Autarquía cínica, apatía y ataraxia estoicas, placer como ausencia de dolor (tetrafármaco) y epojé, de la que nace la ataraxia.",
     "Desaparece la polis: los cínicos rechazan las convenciones, los estoicos son cosmopolitas y los epicúreos prefieren apartarse de la vida pública.",
     "La ley natural y el cosmopolitismo estoicos pasan al derecho romano y al cristianismo; neoplatonismo de Alejandría, hasta el cierre de la escuela de Atenas (529)."
    ]
   }
  ]
 },
 "B": {
  "ejes": [
   "Autores",
   "Dios y realidad",
   "Fe, razón y conocimiento",
   "Ser humano y libertad",
   "Sociedad y poder",
   "Ciencia y método",
   "Legado"
  ],
  "filas": [
   {
    "i": 9,
    "c": [
     "Agustín de Hipona (patrística); Anselmo y Tomás de Aquino (escolástica); Abelardo y Ockham en el problema de los universales; Hildegarda de Bingen.",
     "Dios crea libremente un mundo inteligible y bueno. Universales: en la mente de Dios (realismo), conceptos de la mente (Abelardo) o nombres; solo hay individuos (Ockham).",
     "El problema que define la época: la patrística defiende el dogma con la filosofía griega; la escolástica sintetiza fe y razón, con la razón subordinada a la fe.",
     "Unidad de cuerpo y alma hecha a imagen de Dios, capaz de distinguir el bien del mal y responsable de sus actos; Hildegarda: el ser humano como microcosmos.",
     "El cristianismo pasa de perseguido a religión oficial del Imperio (Tesalónica, 380); el saber se organiza en universidades; Ockham defiende límites al poder del papa.",
     "Método escolástico: lectio, quaestio y disputatio; trivium y quadrivium como currículo; navaja de Ockham: no multiplicar los entes sin necesidad.",
     "El nominalismo de Ockham, al dejar solo individuos, rompe la síntesis escolástica y anuncia la modernidad; Hildegarda muestra que el saber medieval tuvo otras formas."
    ]
   },
   {
    "i": 10,
    "c": [
     "Tertuliano, Agustín de Hipona, Avicena, Averroes, Tomás de Aquino y Guillermo de Ockham.",
     "Agustín: Dios es la Verdad misma, hallada en el interior; Avicena y Tomás: Dios, ser necesario en quien coinciden esencia y existencia; cinco vías a posteriori.",
     "De «creo porque es absurdo» (Tertuliano) y «cree para entender» (Agustín) a la colaboración de Tomás y la separación de Ockham; Averroes: doble verdad.",
     "Agustín: el mal es privación de bien y nace de una voluntad desordenada; Tomás: el alma es la forma del cuerpo (hilemorfismo); Avicena: el hombre volante.",
     "Agustín: dos ciudades, ningún imperio sustituye el sentido último del ser humano; Tomás: ley natural que la razón descubre; Ockham: límites del poder del papa.",
     "Las cinco vías parten de la experiencia: movimiento, causas, contingencia, grados y orden; navaja de Ockham; Avicena, «príncipe de los médicos», y su Canon.",
     "Ockham separa fe y razón: la teología deja de ser ciencia y se abre paso la modernidad; la interioridad agustiniana anticipa el cogito de Descartes."
    ]
   },
   {
    "i": 11,
    "c": [
     "Pico della Mirandola, Erasmo, Tomás Moro, Lutero y Maquiavelo; Copérnico, Kepler, Galileo, Bacon y Newton.",
     "Del teocentrismo al antropocentrismo; el cosmos deja de ser una jerarquía simbólica cerrada y pasa a ser una máquina regida por leyes matemáticas (mecanicismo).",
     "Crisis de la autoridad: la Reforma defiende la libre interpretación de la Biblia; la observación y el experimento sustituyen la autoridad de Aristóteles y de la Biblia.",
     "Dignitas hominis: el ser humano no tiene una naturaleza fija y puede elegir su propio destino (Pico); la Reforma aumenta el peso de la conciencia individual.",
     "Monarquías y Estados modernos sustituyen al feudalismo; comercio, banca y burguesía; la imprenta difunde el saber; Maquiavelo libera la política de la moral teológica.",
     "Revolución científica: heliocentrismo (Copérnico), órbitas elípticas (Kepler), método experimental y matematización (Galileo), gravitación universal (Newton).",
     "Humanismo cristiano, no ateísmo; una secularización lenta; la pregunta por un conocimiento seguro prepara la epistemología moderna de Descartes y Hume."
    ]
   },
   {
    "i": 12,
    "c": [
     "Racionalistas: Descartes, Spinoza y Leibniz; empiristas: Bacon (antecedente), Locke, Berkeley y Hume.",
     "Descartes: un Dios que no engaña garantiza las ideas claras y distintas y el mundo; Hume: la metafísica queda limitada por la experiencia; Berkeley: ser es ser percibido.",
     "Origen: la razón y sus ideas innatas o la experiencia y sus impresiones; la causalidad, evidente a la razón o fruto de la costumbre; certeza o probabilidad.",
     "El yo, cosa que piensa y primera certeza (Descartes), o haz de percepciones (Hume); Descartes: el error nace de una voluntad que va más allá del entendimiento.",
     "Descartes: una moral provisional de prudencia; Hume: moral del sentimiento y la simpatía (emotivismo); ley de Hume: del «es» no se deduce el «debe».",
     "Matemática, deducción y cuatro reglas (evidencia, análisis, síntesis, revisión) frente a observación e inducción; Hume: la inducción no puede probarse lógicamente.",
     "Ninguno basta solo: el racionalismo arriesga el dogmatismo y el empirismo, el escepticismo; Hume despierta a Kant de su «sueño dogmático» y prepara la filosofía crítica."
    ]
   },
   {
    "i": 13,
    "c": [
     "Descartes, Malebranche, Spinoza, Leibniz, Hobbes y La Mettrie; también d'Holbach y, desde el empirismo, Locke.",
     "Tres sustancias (Descartes); Dios, única causa (Malebranche); una sola sustancia, Deus sive Natura (Spinoza); mónadas en armonía preestablecida (Leibniz); solo materia (materialismo).",
     "¿Cuántos tipos de realidad hacen falta para explicar la experiencia? Spinoza escribe su Ética con método geométrico; Locke: tabula rasa, todas las ideas vienen de la experiencia.",
     "¿Espíritu y libertad o materia y necesidad? Alma libre e inmortal (Descartes); libertad como comprensión de la necesidad (Spinoza); hombre-máquina y determinismo: la libertad, una ilusión.",
     "Si no hay libertad, ¿tienen sentido la responsabilidad y la justicia? ¿Cárcel u hospital para quien actuó por un tumor cerebral?",
     "La ciencia nueva explica la naturaleza por extensión, movimiento y leyes mecánicas; el materialismo encaja con ella, pero le cuesta explicar la conciencia.",
     "El problema mente-cuerpo llega a hoy: neurociencia, funcionalismo (Putnam, Fodor), la prueba de Turing y la habitación china de Searle."
    ]
   },
   {
    "i": 14,
    "c": [
     "Maquiavelo; los contractualistas Hobbes, Locke y Rousseau; Montesquieu, que piensa cómo limitar el poder.",
     "Ruptura con el origen divino o natural del poder: la sociedad es producto de la voluntad humana. Locke funda los derechos naturales en Dios; Hobbes razona mecánicamente.",
     "El estado de naturaleza no es un hecho histórico, sino un experimento filosófico: un modelo para justificar racionalmente el poder político.",
     "Lobo para el hombre, egoísta (Hobbes); razonable, con derechos a la vida, la libertad y la propiedad (Locke); bueno por naturaleza, corrompido por la sociedad (Rousseau).",
     "Poder absoluto que da seguridad (Leviatán), gobierno limitado y revocable (Locke), soberanía popular y voluntad general (Rousseau), separación de poderes (Montesquieu).",
     "Maquiavelo describe el poder tal como es, no como debería ser (fortuna y virtù); Hobbes explica la política con la mirada mecánica de la ciencia nueva.",
     "Base del liberalismo y del Estado de derecho; eco en la Declaración de Independencia de EE. UU. (1776); criterio de legitimidad: origen, fin y límite del poder."
    ]
   },
   {
    "i": 15,
    "c": [
     "Hobbes y Locke (liberalismo), Bentham y Mill (utilitarismo), Adam Smith (liberalismo económico); Joxe Azurmendi, con Kropotkin y Wilson.",
     "Movimiento laico y empirista: la moral y las leyes se juzgan por sus consecuencias, no por la tradición; el Estado neutral no impone una idea del bien.",
     "Cálculo de placeres y dolores (intensidad, duración, número de afectados); Azurmendi: la moral no es un producto frío de la razón, sino del corazón.",
     "Individuo con derechos que busca su interés (visión antropológica pesimista); Mill: placeres superiores y principio del daño; Azurmendi: la cooperación también es natural.",
     "Primacía del individuo y sociedad como producto del contrato; mano invisible y mínima intervención del Estado (defensa, justicia, obras públicas); mayor felicidad del mayor número.",
     "División del trabajo (fábrica de alfileres) y precios fijados por la oferta y la demanda; Wilson: el éxito evolutivo humano se debe a la cooperación.",
     "Bases teóricas del capitalismo; queda abierta la pregunta por la justicia: la libertad jurídica no produce por sí sola igualdad material (crítica del capitalismo, tema 22)."
    ]
   }
  ]
 },
 "C": {
  "ejes": [
   "Autores",
   "Razón y conocimiento",
   "Ser humano y sujeto",
   "Ética y valores",
   "Sociedad, poder y economía",
   "Crítica de la tradición",
   "Legado y vigencia"
  ],
  "filas": [
   {
    "i": 16,
    "c": [
     "Kant; Diderot y D'Alembert; Locke, Montesquieu, Rousseau, Voltaire; Olympe de Gouges, Mary Wollstonecraft y Condorcet.",
     "Razón crítica y autónoma: «sapere aude», salir de la minoría de edad; somete a examen la religión, la política, la ciencia y a sí misma.",
     "Del súbdito al ciudadano con derechos naturales; pero ¿quién entra en el sujeto universal? Mujeres, esclavos y pueblos colonizados quedan fuera.",
     "Tolerancia frente al fanatismo, libertad de conciencia y de expresión; Wollstonecraft: la razón no tiene sexo y la virtud no es privilegio de los hombres.",
     "Contra el absolutismo: derechos previos al Estado (Locke), división de poderes (Montesquieu), soberanía popular (Rousseau) y Declaración de 1789.",
     "Contra la tradición, la superstición y la autoridad ciega; deísmo sin dogmas ni milagros; el primer feminismo pone a prueba la Ilustración desde dentro.",
     "Vocabulario moderno de los derechos, tolerancia, secularización y educación; una herencia que no debe volverse dogma: abre la autocrítica de Kant."
    ]
   },
   {
    "i": 17,
    "c": [
     "Kant, frente a Descartes y Leibniz (racionalismo) y Hume (empirismo), que lo despertó del «sueño dogmático»; Rousseau como segundo despertar.",
     "Todo conocimiento comienza con la experiencia, pero no todo procede de ella: materia a posteriori y formas a priori; juicios sintéticos a priori.",
     "Revolución copernicana: el objeto se ajusta al sujeto, que pone espacio, tiempo y categorías; ser de conocimiento limitado: solo conoce fenómenos.",
     "Limita el saber para dejar sitio a la fe práctica: lo que la razón no puede conocer (libertad, Dios, alma) puede exigirlo en la acción moral.",
     "Uso público de la razón: argumentar, debatir y criticar las instituciones; riesgo de reducir la autonomía política a mera administración.",
     "Contra la metafísica dogmática: Dios, el alma y el mundo no pueden demostrarse; supera el dogmatismo racionalista y el escepticismo empirista.",
     "La razón se examina a sí misma: la ciencia es posible y la metafísica no; abre el camino al idealismo, el positivismo y la fenomenología."
    ]
   },
   {
    "i": 18,
    "c": [
     "Kant (ética del deber) frente a Bentham y Mill (utilitarismo); Joxe Azurmendi, que sigue a Max Weber.",
     "Razón práctica: la ley moral es a priori y formal; la libertad, Dios y la inmortalidad son postulados prácticos, no conocimiento teórico.",
     "La persona, fin en sí misma: autonomía y dignidad sin precio; para el utilitarismo, un ser que busca el placer y evita el dolor.",
     "Deber frente a consecuencias: buena voluntad e imperativo categórico; principio de utilidad y cálculo hedónico; Azurmendi: relativismo relativo.",
     "Riesgo utilitarista: sacrificar a la minoría al bienestar de la mayoría; Kant: constitución republicana, federación de Estados libres y paz perpetua.",
     "Kant rechaza las éticas materiales (empíricas, hipotéticas y heterónomas); Azurmendi, los fundamentos absolutos: el mal nace del dogmatismo, no del relativismo.",
     "¿Qué no podemos hacer con una persona, aunque sea útil? Derechos humanos, bioética, datos personales e inteligencia artificial."
    ]
   },
   {
    "i": 19,
    "c": [
     "Marx, Nietzsche y Freud, «maestros de la sospecha» según Ricoeur; antecedentes: Hegel, Feuerbach, Schopenhauer y Darwin.",
     "La conciencia no es transparente: ideología y falsa conciencia (Marx), perspectivismo (Nietzsche); la conciencia, solo la punta del iceberg (Freud).",
     "El sujeto no es «dueño de su propia casa»: trabajador alienado (Marx), voluntad de poder (Nietzsche), ello, yo y superyó (Freud).",
     "La moral como superestructura (Marx); moral de esclavos y transvaloración (Nietzsche); el superyó, normas morales interiorizadas (Freud).",
     "Infraestructura económica, lucha de clases, plusvalía y alienación (Marx); malestar en la cultura: la civilización exige reprimir deseos (Freud).",
     "«Dios ha muerto»: caen los valores supremos; genealogía contra Platón y el cristianismo; contra el sujeto transparente de la modernidad.",
     "Revolución sin clases, superhombre, salud mental y autoconocimiento; preparan la posmodernidad; Ricoeur: tras la sospecha, la hermenéutica."
    ]
   },
   {
    "i": 20,
    "c": [
     "Marx; Gramsci; Adorno, Horkheimer y Marcuse (Fráncfort); Habermas y Popper; Lenin, Luxemburg y Zetkin; Fanon, Pasolini; Hannah Arendt; John Rawls.",
     "Razón instrumental: eficacia y cálculo sin preguntar por los fines; Habermas: razón comunicativa e interés emancipatorio del conocimiento.",
     "Obrero alienado; consumidor pasivo con necesidades falsas (Marcuse); masa atomizada (Arendt); colonizado herido en su dignidad (Fanon).",
     "Banalidad del mal: renunciar a pensar (Arendt); justicia como equidad: velo de ignorancia y principio de diferencia (Rawls).",
     "Plusvalía y revolución; hegemonía cultural, industria cultural, imperialismo, totalitarismo; democracia deliberativa, ingeniería fragmentaria y Estado de bienestar.",
     "Dialéctica de la Ilustración: la razón se vuelve dominio; Popper contra el historicismo; Arendt contra los relatos teleológicos de Hegel y Marx.",
     "Plataformas digitales, consumo y redes; esfera pública frente al populismo; Rawls da base moral al Estado de bienestar: no es caridad, sino justicia."
    ]
   },
   {
    "i": 21,
    "c": [
     "Nietzsche; Lyotard, Derrida, Foucault, Baudrillard, Deleuze y Guattari, Vattimo; Habermas frente a los rupturistas; Rorty.",
     "Perspectivismo: solo hay interpretaciones; fin de los metarrelatos, différance, poder/saber; Habermas: razón comunicativa frente a razón instrumental.",
     "El superhombre crea sus propios valores; yo, sustancia y causa son ficciones útiles; muerte del sujeto (Foucault): el yo, construcción del poder.",
     "Moral de esclavos y transvaloración de los valores; tras la muerte de Dios, el nihilismo; pensamiento débil y ética de la tolerancia (Vattimo).",
     "Todo saber produce poder: panóptico y biopolítica (Foucault); simulacro e hiperrealidad (Baudrillard); esfera pública y situación ideal de habla (Habermas).",
     "Método genealógico: el «mundo verdadero» es una ficción de Platón y el cristianismo; incredulidad hacia los metarrelatos de la modernidad.",
     "Pluralidad y diferencia frente a las verdades universales; Habermas: la modernidad, proyecto inacabado que hay que reparar; noticias falsas y redes."
    ]
   },
   {
    "i": 22,
    "c": [
     "Wittgenstein (primero y segundo); Russell, Austin y Searle; Círculo de Viena, Popper, Kuhn, Lakatos y Feyerabend; Txillardegi; Azurmendi.",
     "Giro lingüístico: el lenguaje es el límite de lo pensable; teoría pictórica e isomorfismo; el significado es el uso; verificabilidad y falsabilidad.",
     "Pensamos porque tenemos lenguaje: la lengua, estructurador inconsciente (Txillardegi); seguir una regla es una práctica compartida, no un lenguaje privado.",
     "Ética y metafísica intentan decir lo indecible: lo místico (la ética, el sentido de la vida) no se puede decir, se muestra.",
     "Juegos de lenguaje dentro de formas de vida; hablar es hacer (Austin); el euskera, columna vertebral de una comunidad; normalización lingüística como cuestión política.",
     "Muchos problemas filosóficos son pseudoproblemas del mal uso del lenguaje; la metafísica es un sinsentido; el lenguaje «se va de vacaciones».",
     "La filosofía como clarificación y terapia lingüística; actos de habla en derecho e inteligencia artificial; perder una lengua es perder una cosmovisión."
    ]
   },
   {
    "i": 23,
    "c": [
     "Heidegger, Sartre y Camus; precursores: Kierkegaard, Nietzsche y Husserl; Unamuno, Ortega y Gasset y María Zambrano.",
     "La razón pura no basta: razón vital desde la vida concreta (Ortega), razón poética (Zambrano); la razón niega la inmortalidad (Unamuno).",
     "La existencia precede a la esencia: Dasein arrojado y ser-para-la-muerte; proyecto «condenado a ser libre»; «yo soy yo y mi circunstancia».",
     "Vida auténtica frente a inautenticidad; responsabilidad total y mala fe; compromiso; rebelión ante el absurdo (Camus).",
     "Tras las guerras mundiales, los totalitarismos y las bombas atómicas; diluirse en la masa (Heidegger); el hombre-masa (Ortega); el exilio de Zambrano.",
     "Contra la filosofía esencialista y de sistema (Kierkegaard); sin Dios que dicte normas; Unamuno invierte a Descartes: «soy, luego pienso».",
     "Una filosofía del peso de la libertad, no un pesimismo; el intelectual comprometido (Sartre); Beauvoir lleva el existencialismo al feminismo."
    ]
   },
   {
    "i": 24,
    "c": [
     "Simone de Beauvoir, con Sartre y Hegel de fondo; después, Judith Butler, Nancy Fraser y Martha Nussbaum; Betty Friedan y Kate Millett.",
     "Examina la biología, el psicoanálisis y el materialismo histórico desde el existencialismo; los mitos de la feminidad presentan como natural lo histórico.",
     "«No se nace mujer: se llega a serlo»: sin esencia ni «eterno femenino»; la mujer, «lo otro» del Sujeto masculino; libertad en situación.",
     "Ética de la ambigüedad: querer ser libre es querer libres a los demás; mala fe y complicidad; reciprocidad entre dos libertades.",
     "Matrimonio, maternidad y trabajo doméstico como herramientas de opresión; inmanencia frente a trascendencia; independencia económica y autonomía reproductiva.",
     "Contra el destino biológico y la exclusión de la mujer del sujeto universal; la dialéctica del amo y el esclavo explica la alteridad.",
     "Abre la segunda ola; Butler: performatividad y teoría queer; Fraser: redistribución y reconocimiento; Nussbaum: capacidades; interseccionalidad y ética del cuidado."
    ]
   }
  ]
 }
};
