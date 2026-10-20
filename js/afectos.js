"use strict";
/* ===== Talleres · «Los afectos de Spinoza» (20-10-2026): textos =====
   Origen: mesa «Afectos» del artefacto «Laboratorio de lógica» del profesor (20-10-2026), separada del Rincón de lógica
   y llevada a «Talleres» (conmutador con Leibniz, el Universo y la Palabra). Solo datos (memoria de traducción); los
   motores y el dibujo están en afectosview.js.
   REVISIÓN (sesión art-logica, 20-10): cada referencia de la Ética cotejada con la traducción de Elwes en Wikisource
   (Partes II-V): las 13 definiciones de los afectos, III 11, 13 esc., 17 esc., 23, 27, 43, 44; IV 3, 7, 14, 15, 45, 46,
   54, 59; V 3, 4, 6, 10, 20 esc. Corregido: «Razón» citaba IV 65 (el mayor de dos bienes) → IV 59; «Acción» citaba
   IV 67-73 (el hombre libre) → III 1 y 3; esperanza, miedo, seguridad y desesperación: «algo pasado o futuro» (def.
   12-15); el refuerzo del odio y el desgaste ya no se presentan como tesis de Spinoza. Los NÚMEROS son del modelo
   (aviso «modelo» en la cabecera): Spinoza no cuantifica los afectos.
   Claves con identificadores: id, tipo (KEY_BLACKLIST). Las {llaves} son huecos que rellena la vista. */
const AFE = {
  t: {
    titulo: "Los afectos de Spinoza",
    intro: "Para Spinoza solo hay tres afectos primarios: deseo, alegría (pasar a más potencia de obrar) y tristeza (pasar a menos). Todos los demás nacen de una alegría o una tristeza unida a una idea. Cada suceso es una ficha: elige la puerta correcta y mira cómo el afecto que nace tiñe lo que viene después.",
    modeloTit: "Esto es un modelo, no la Ética",
    modelo: "Las definiciones y las tesis que se citan son de Spinoza, con su referencia (libro y proposición de la <em>Ética</em>). Los números, en cambio, son del juego: Spinoza no mide los afectos ni dice cuánto pesa una tristeza, cuánto sube la potencia o a qué ritmo se comprende algo. Cuando una pieza lleva una referencia, quiere decir «inspirada en esta idea de la Ética», no «Spinoza dice este número». Por eso los parámetros se pueden cambiar: discutir si el modelo es fiel es parte del ejercicio.",
    modoRetos: "Retos · para empezar", modoCaja: "Caja de arena · avanzado", modo: "Modo",
    /* retos */
    potencia: "Potencia de obrar", memoria: "Memoria afectiva",
    memoriaAyuda: "Como un biestable (latch): el amor fija el estado, el odio lo cambia, y el estado se queda guardado y tiñe los sucesos siguientes.",
    remedios: "Remedios de la razón", entender: "Entender la causa ({n})", amar: "Responder con amor ({n})",
    nadie: "Todavía no sientes nada especial por nadie.", estAmor: "amor", estOdio: "odio", estFluct: "fluctúa",
    leAmas: "le amas", leOdias: "le odias", fluctua: "tu ánimo fluctúa",
    suceso: "Suceso {n} de {m}", elige: "¿Qué afecto nace? Elige la puerta.", libre: "Partida libre",
    objetivo: "Objetivo: {m}", libreMeta: "Diez sucesos al azar. Objetivo: terminar con la potencia de obrar lo más alta posible.",
    conseguido: "¡Reto conseguido!", noConseguido: "Reto no conseguido.", terminada: "Partida terminada.",
    final: "<strong>{r}</strong> Potencia de obrar final: <b>{p}</b>. Puertas acertadas: {a} de {m}. Pasiones entendidas: {e}.<br>Para Spinoza, la libertad no consiste en dejar de sentir, sino en entender lo que sentimos: pasar de padecer a obrar.",
    otraVez: "Jugar otra vez",
    puertaOk: "<strong>Puerta correcta: {a}.</strong> Nombrarlo bien ya es empezar a entenderlo", puertaOkTriste: ": en el juego, la tristeza pesa un poco menos.",
    puertaMal: "<strong>Era {a}, no {b}.</strong> El afecto nace igual, lo nombres bien o no.",
    entendido: "<strong>Entender (+{n}).</strong> Has comprendido las causas de tu {a}. «Un afecto que es una pasión deja de ser pasión en cuanto nos formamos de él una idea clara y distinta» (V, prop. 3): sigue ahí, pero ya no te arrastra.",
    amado: "<strong>Responder con amor (+15).</strong> Quien vive guiado por la razón procura devolver amor al odio de los demás (IV, prop. 46), y el odio vencido del todo por el amor se convierte en amor, y mayor que si no lo hubiera precedido el odio (III, prop. 44).",
    respondes: "Respondes al odio de {p} con amor.",
    cadena: "La cadena de fichas", cadenaVacia: "Aquí se irán encadenando las fichas: cada una une un afecto primario y una idea, y su resultado tiñe lo que viene después.",
    alegria: "alegría", tristeza: "tristeza", contrarios: "afectos contrarios", fichaEntendida: " · entendida", fichaRazon: " · razón",
    balanzaAria: "Balanza de la potencia de obrar: {p} de 100", oscilando: ", oscilando",
    pensarTit: "Para pensar: padecer y obrar",
    pensar1: "Spinoza llama <em>pasiones</em> a los afectos de los que somos causa solo en parte: nos pasan. Obramos cuando somos causa adecuada de lo que ocurre en nosotros (III, def. 2), y eso solo se consigue entendiendo (III, prop. 1 y 3). Por eso el remedio no es reprimir los afectos tristes, sino conocer sus causas: un afecto solo puede ser reprimido o suprimido por otro afecto contrario y más fuerte (IV, prop. 7), y el conocimiento verdadero solo vence a una pasión en cuanto es también un afecto (IV, prop. 14).",
    pensar2: "Compara con Descartes, que en <em>Las pasiones del alma</em> (1649) confía en que la voluntad, bien entrenada, domine las pasiones. Spinoza le responde en el prefacio de la parte V: no cree en esa voluntad libre, y para él entender es la única forma de libertad.",
    /* notas de los sucesos y del motor de los retos */
    notaFluct: "Ya sentías {ant} por {p}, y ahora {p} te causa {s}: dos afectos contrarios hacia la misma persona. Es la fluctuación del ánimo (III, prop. 17, esc.).",
    notaOdioAlegra: "Quien imagina que aquello que odia está triste, se alegra (III, prop. 23). Tu odio hacia {p} ha teñido la escena: donde habría conmiseración, aparece una alegría turbia, la de la envidia (def. de los afectos 23). Spinoza advierte que el odio nunca puede ser bueno (IV, prop. 45).",
    notaOdioCrece: "En el juego, un nuevo golpe de quien ya odias pesa más: es una regla del modelo. Lo que Spinoza dice es que el odio aumenta cuando es recíproco (III, prop. 43): si imaginas que {p} también te odia, tu odio crece.",
    /* caja de arena */
    escenarios: "Escenarios", generar: "Generar un ejemplo", generarAyuda: "Monta un circuito al azar con dos o tres mecanismos y te explica qué mirar.",
    pistas: "Pistas", crecenTit: "Cómo crecen «Entender» y «Razón»",
    crece1: "<b>Entender</b> (inspirado en V, 3, 4 y 10). Cada tic que un suceso pasa por «Entender», su comprensión sube, deprisa al principio y más despacio después. Lo comprendido queda comprendido en todo el circuito, aunque ya no pase por «Entender»: su tristeza pesa hasta un {alivio} % menos y, desde el {umbral} %, su afecto cuenta como activo. Por eso tu libertad sube.",
    crece2: "<b>Ideas.</b> Un suceso lleva ideas si tiene datos. «Deliberar» convierte en ideas lo que junta de dos entradas o más (tarda {retardo} tics), y «Entender» también produce ideas.",
    crece3: "<b>Razón</b> (inspirada en II, 38-40). Solo funciona si todo lo que le llega son ideas y no hay fuentes ocultas. Cuando le llegan juntas ideas de dos sucesos distintos, aprende una noción común: lo que tienen en común. Su fuerza es {base} + {nocion} por noción, hasta {max}: al principio, la razón es débil frente a las pasiones (IV, 14-15).",
    crece4: "<b>Actuar</b> (IV, 7). A una acción le gana el afecto más fuerte que le llega. Si las pasiones pesan más que la razón, la arrastran. Libertad = parte activa de lo que la mueve.",
    crece5: "Todos los números de esta lista son valores de partida del modelo, no de Spinoza: se pueden cambiar en «Parámetros del modelo».",
    crece6: "<b>Libertad acumulada</b>: la parte activa de todo lo que te ha llegado desde el tic 0. Sube despacio, como en la vida.",
    crece7: "<b>Desgaste</b> (solo en el circuito libre). Spinoza dice que la fuerza con que perseveramos es limitada y que la superan infinitamente las causas exteriores (IV, 3); el modelo lo traduce en que cada tic pierdes un {desgaste} % de tu potencia. Mantenerla alta exige un circuito que funcione.",
    parTit: "Parámetros del modelo", parAyuda: "Cada control es una relación del circuito. Los valores de partida son una propuesta del juego: cámbialos, pulsa «Repetir con este circuito» y compara las trayectorias.",
    parRestaurar: "Restaurar los valores de partida",
    marcha: "Poner en marcha", parar: "Parar el reloj", unTic: "Un tic", diezTics: "+10 tics", velocidad: "Velocidad",
    repetir: "Repetir con este circuito", repetirAyuda: "Vuelve al tic 0 conservando tus piezas y conexiones", cero: "Empezar de cero", ceroAyuda: "Vuelve al circuito original del escenario",
    leyendaMapa: "Verde: alegría · rojo: tristeza · borde morado: afecto activo. Pulsa una pieza para ir a su tarjeta.", mapaAria: "Mapa del circuito",
    piezas: "Las piezas del circuito", anadir: "Añadir", anadirPieza: "Añadir pieza", loQuePasa: "Lo que ha pasado",
    tic: "Tic {t}", ticDe: "Tic {t} de {f}", ticCuenta: "Tic {t} · quedan {q} tics", ticHecho: "Tic {t} · has actuado",
    tuPotencia: "Tu potencia de obrar", tuLibertad: "Tu libertad acumulada", libertadAccion: "Libertad de tu acción",
    grafPot: "Tu potencia de obrar (0-1000)", grafLib: "Tu libertad acumulada (%)", sinDatos: "sin datos", ticN: "tic {t}",
    guardar: "Guardar esta trayectoria para comparar", borrarComp: "Borrar comparaciones", ahora: "Ahora (línea continua)",
    resumen: "{esc}, {n} piezas, tic {t}: potencia {p}, libertad {l} % · {par}", parCambiados: "parámetros cambiados: {l}", parPartida: "parámetros de partida",
    libAhora: "libertad ahora {a} % · acumulada {b} %", desgasteNota: "Desgaste del modelo: cada tic pierdes un {d} % de tu potencia (inspirado en IV, 3).",
    sinAfecto: "sin afecto", sale: "sale {v}", saleIdeas: "sale {v} (ideas)", deliberando: "deliberando…",
    entSale: "sale {v} · idea · activa", comprension: "Comprensión de cada suceso (activo desde el {u} %)", nadaAqui: "Todavía no ha pasado nada por aquí.",
    razActiva: "activa · fuerza {f}", enEspera: "en espera", nociones: "Nociones comunes: {n} · fuerza {f} de {m}",
    arrastran: "la arrastran las pasiones", mueveActivo: "la mueve lo activo", noLlega: "no le llega nada", queMueve: "Lo que la mueve (IV, 7: gana el más fuerte)",
    activo: "activo", pasivo: "pasivo", idea: "idea", imagen: "imagen", activa: "activa", comprendido: "comprendido {c} %",
    nomSuceso: "Nombre del suceso", valor: "Valor", ritmo: "Ritmo", ticCampo: "Tic",
    estaPasando: "Está pasando", apagado: "Apagado", activoSi: "Activo", conDatos: "Lleva datos (ideas)", sinDatosIdeas: "Sin datos (imágenes)", llevaDatos: "lleva datos",
    quitar: "Quitar {n}", queHace: "Qué hace", entradas: "Entradas:", ninguna: "ninguna", desconectar: "Desconectar", conectar: "+ conectar entrada…", conectarA: "Conectar una entrada a {n}",
    siMisma: "sí misma", siMismaBucle: "sí misma (bucle)", aQuien: "¿A quién imitas? (si lo odias, su tristeza te alegra)", semejante: "a un semejante cualquiera", segun: "según: {n}",
    actuar: "Actuar", hecho: "Hecho", ocultaNom: "Fuente oculta: {n}", propaganda: "Fuente oculta (propaganda)", sucesoBlanco: "Suceso en blanco", sucesoTuyo: "Suceso (lo describes tú)",
    piezasGrupo: "Piezas", sucesosGrupo: "Sucesos · {g}", algoPasa: "Algo que pasa", propagandaNom: "Propaganda", propagandaReal: "una propaganda que alimentaba el miedo",
    queTiene: "Qué tiene este ejemplo. ", queTieneAyuda: "Pon en marcha el reloj (mejor en «Rápido») y mira:",
    ejGenerado: "Ejemplo generado: {l}.", volvemos: "Volvemos a empezar con el mismo circuito. La comprensión y las nociones comunes también vuelven a cero.",
    logEstado: "{n}: {q}.", logComprendes: "Comprendes «{n}»: su afecto ya es activo.", logDestapada: "Has destapado una fuente oculta: {r}.",
    logNocion: "La razón aprende una noción común: lo que tienen en común «{a}» y «{b}».", logActuado: "Has actuado: {n}. Libertad de la acción: {l}.",
    logTarde: "Se acabó el tiempo: el tranvía siguió su curso mientras nadie decidía.",
    motOculta: "detrás hay una fuente oculta", motNada: "no le llegaba nada: nadie la movía", motPasiones: "las pasiones que le llegaban pesaban más que lo activo ({p} frente a {a})", motAlguna: "todavía le llegaba alguna pasión",
    razNada: "No le llega nada.", razOculta: "Hay una fuente oculta detrás de lo que le llega.", razImagenes: "Solo le llegan imágenes: le faltan datos.",
    finTarde: "<strong>No decidiste a tiempo.</strong> El tranvía siguió su curso mientras el miedo y las imágenes lo ocupaban todo: libertad <b>0</b>. No elegir también es algo que se hace, y aquí lo hizo la situación por ti.",
    finActuado: "<strong>Has actuado: {n}.</strong> Libertad de la acción: <b>{l}</b>.", finNoLibre: " No fue del todo libre porque {m}.", finLibre: " La movía un afecto activo, nacido de ideas y sin fuentes ocultas.",
    finNoPuntua: " Lo que hiciste no se puntúa; lo que se mide es desde dónde lo hiciste.",
    finBucleOk: "¡Conseguido! Has roto el bucle.", finBucleNo: "El bucle ha seguido su curso. Pulsa «Repetir con este circuito» y cámbialo.",
    finLibreOk: "Lo has conseguido: más libre, con una razón que ya sabe cosas y con la potencia alta. Ahora prueba a quitar piezas y mira cuánto aguanta."
  },
  /* afectos (Ética III, «Definiciones de los afectos»; cotejadas con Elwes) */
  afectos: {
    amor: { nom: "Amor", def: "Alegría acompañada de la idea de una causa exterior.", ref: "Ética III, def. de los afectos 6" },
    odio: { nom: "Odio", def: "Tristeza acompañada de la idea de una causa exterior.", ref: "Ética III, def. de los afectos 7" },
    esperanza: { nom: "Esperanza", def: "Alegría inconstante, nacida de la idea de algo futuro o pasado de cuyo resultado dudamos.", ref: "Ética III, def. de los afectos 12" },
    miedo: { nom: "Miedo", def: "Tristeza inconstante, nacida de la idea de algo futuro o pasado de cuyo resultado dudamos.", ref: "Ética III, def. de los afectos 13" },
    seguridad: { nom: "Seguridad", def: "Alegría nacida de la idea de algo futuro o pasado del que ya no hay motivo de duda.", ref: "Ética III, def. de los afectos 14" },
    desesperacion: { nom: "Desesperación", def: "Tristeza nacida de la idea de algo futuro o pasado del que ya no hay motivo de duda.", ref: "Ética III, def. de los afectos 15" },
    conmiseracion: { nom: "Conmiseración", def: "Tristeza acompañada de la idea de un mal que le ha ocurrido a otro que imaginamos semejante a nosotros.", ref: "Ética III, def. de los afectos 18" },
    favor: { nom: "Favor", def: "Amor hacia alguien que ha hecho bien a otro.", ref: "Ética III, def. de los afectos 19" },
    indignacion: { nom: "Indignación", def: "Odio hacia alguien que ha hecho mal a otro.", ref: "Ética III, def. de los afectos 20" },
    envidia: { nom: "Envidia", def: "Odio que nos entristece con la felicidad de otro y nos alegra con su mal.", ref: "Ética III, def. de los afectos 23" },
    contento: { nom: "Contento de sí", def: "Alegría nacida de que uno se considera a sí mismo y su potencia de obrar.", ref: "Ética III, def. de los afectos 25" },
    humildad: { nom: "Humildad", def: "Tristeza nacida de que uno considera su impotencia o debilidad.", ref: "Ética III, def. de los afectos 26" },
    arrepentimiento: { nom: "Arrepentimiento", def: "Tristeza acompañada de la idea de algo que creemos haber hecho por libre decisión.", ref: "Ética III, def. de los afectos 27" },
    fluctuacion: { nom: "Fluctuación del ánimo", def: "Amar y odiar a la vez la misma cosa: el ánimo oscila entre dos afectos contrarios.", ref: "Ética III, prop. 17, escolio" }
  },
  ideas: { causa: "una causa exterior", futuro_dudoso: "algo futuro dudoso", futuro_seguro: "algo futuro seguro", mal_semejante: "el mal de un semejante",
    bien_otro: "la felicidad de otro", hizo_mal: "alguien que hizo mal a otro", hizo_bien: "alguien que hizo bien a otro",
    potencia: "mi propia potencia", debilidad: "mi propia debilidad", hecho_libre: "un acto mío que creo libre" },
  /* retos: quien = persona (o vacío); sg = alegría (+) o tristeza (−); tipo = idea que acompaña; m = intensidad del juego */
  retos: [
    { nom: "1 · Primeras puertas", meta: "Acierta al menos 6 de las 7 puertas.", mazo: [
      { txt: "Laura te presta sus apuntes justo antes del examen.", quien: "Laura", sg: "+", tipo: "causa", m: 10 },
      { txt: "Mañana sale la lista de admitidos. Te imaginas dentro.", quien: "", sg: "+", tipo: "futuro_dudoso", m: 6, nota: "Spinoza añade que no hay esperanza sin miedo, ni miedo sin esperanza: quien duda espera y teme a la vez (def. de los afectos 13, explicación)." },
      { txt: "…y a la vez te imaginas fuera.", quien: "", sg: "-", tipo: "futuro_dudoso", m: 6 },
      { txt: "Iker, que se sienta a tu lado, está hundido porque su abuela está enferma.", quien: "Iker", sg: "-", tipo: "mal_semejante", m: 6, nota: "Es la imitación de los afectos (III, prop. 27): al imaginar triste a alguien semejante a nosotros, nos entristecemos." },
      { txt: "Resuelves tú solo un problema que parecía imposible.", quien: "", sg: "+", tipo: "potencia", m: 10 },
      { txt: "Recuerdas que ayer le dijiste algo cruel a Iker.", quien: "", sg: "-", tipo: "hecho_libre", m: 8, nota: "Para Spinoza el arrepentimiento no es una virtud, es decir, no nace de la razón (IV, prop. 54): nace de creer que actuamos por libre decisión (def. de los afectos 27)." },
      { txt: "Ya es seguro: te han admitido.", quien: "", sg: "+", tipo: "futuro_seguro", m: 12 }] },
    { nom: "2 · La fluctuación", meta: "Termina sin ningún ánimo fluctuando: entiende lo que te pasa.", mazo: [
      { txt: "Laura te presta sus apuntes justo antes del examen.", quien: "Laura", sg: "+", tipo: "causa", m: 10 },
      { txt: "Laura cuenta a todo el grupo un secreto tuyo.", quien: "Laura", sg: "-", tipo: "causa", m: 12 },
      { txt: "Mikel saca un 10 y lo celebra; a ti te molesta su alegría.", quien: "Mikel", sg: "-", tipo: "bien_otro", m: 6 },
      { txt: "Ves que Laura defiende a un compañero nuevo al que todos ignoran.", quien: "Laura", sg: "+", tipo: "hizo_bien", m: 6 },
      { txt: "Terminas tu parte del trabajo antes que nadie.", quien: "", sg: "+", tipo: "potencia", m: 8 }] },
    { nom: "3 · Vencer el odio", meta: "Termina con la potencia de obrar en 55 o más.", mazo: [
      { txt: "Iker se ríe de ti delante de toda la clase.", quien: "Iker", sg: "-", tipo: "causa", m: 10 },
      { txt: "Iker vuelve a burlarse de ti en el recreo.", quien: "Iker", sg: "-", tipo: "causa", m: 10 },
      { txt: "Iker suspende y está hundido.", quien: "Iker", sg: "-", tipo: "mal_semejante", m: 6 },
      { txt: "Un compañero estropea a propósito el mural de Laura.", quien: "Mikel", sg: "-", tipo: "hizo_mal", m: 6 },
      { txt: "Iker te da las gracias por algo que hiciste por él.", quien: "Iker", sg: "+", tipo: "causa", m: 10 }] }
  ],
  pool: [
    { txt: "Laura te invita a su cumpleaños.", quien: "Laura", sg: "+", tipo: "causa", m: 8 }, { txt: "Iker te deja en ridículo en el grupo de clase.", quien: "Iker", sg: "-", tipo: "causa", m: 9 },
    { txt: "No sabes si mañana lloverá el día de la excursión; te imaginas un día de sol.", quien: "", sg: "+", tipo: "futuro_dudoso", m: 5 }, { txt: "Te imaginas que la excursión se suspende.", quien: "", sg: "-", tipo: "futuro_dudoso", m: 5 },
    { txt: "Es seguro: suspenden la excursión.", quien: "", sg: "-", tipo: "futuro_seguro", m: 8 }, { txt: "Mikel ayuda a un niño perdido a encontrar a sus padres.", quien: "Mikel", sg: "+", tipo: "hizo_bien", m: 6 },
    { txt: "Alguien empuja a Laura por la escalera.", quien: "", sg: "-", tipo: "hizo_mal", m: 7 }, { txt: "A Mikel le regalan la bicicleta que tú querías.", quien: "Mikel", sg: "-", tipo: "bien_otro", m: 6 },
    { txt: "Te sale por fin la canción que llevas meses ensayando.", quien: "", sg: "+", tipo: "potencia", m: 9 }, { txt: "No consigues entender un ejercicio después de una hora.", quien: "", sg: "-", tipo: "debilidad", m: 7 },
    { txt: "Laura se cae y se hace daño en la rodilla.", quien: "Laura", sg: "-", tipo: "mal_semejante", m: 6 }, { txt: "Iker te ayuda a recoger los libros que se te han caído.", quien: "Iker", sg: "+", tipo: "causa", m: 8 },
    { txt: "Mikel te critica sin motivo.", quien: "Mikel", sg: "-", tipo: "causa", m: 8 }, { txt: "Recuerdas que no fuiste a ver a tu abuelo cuando te lo pidió.", quien: "", sg: "-", tipo: "hecho_libre", m: 7 },
    { txt: "Iker pierde el móvil y está muy agobiado.", quien: "Iker", sg: "-", tipo: "mal_semejante", m: 5 }, { txt: "Laura te dice que tu redacción es la mejor que ha leído.", quien: "Laura", sg: "+", tipo: "causa", m: 9 }
  ],
  /* caja de arena: piezas («ref» = idea de Spinoza que inspira la pieza) */
  piezas: {
    suceso: { nom: "Suceso", def: "Algo que nos pasa: produce alegría o tristeza. Si lleva datos sobre la situación transporta ideas; si no, solo imágenes.", ref: "inspirado en Ética III, 11" },
    oculto: { nom: "Fuente oculta", def: "Alguien mete un afecto en el circuito sin que se vea de dónde viene. Con la prisa empuja más fuerte. Entender la destapa.", ref: "inspirada en el Tratado teológico-político, prefacio" },
    balanza: { nom: "Balanza", def: "La potencia de obrar de una persona (0-1000 en el modelo). Suma lo que le llega; su salida es cuánto ha subido o bajado en este tic.", ref: "inspirada en Ética III, 11" },
    biestable: { nom: "Afecto hacia alguien", def: "Memoria afectiva (biestable): la alegría que nos causa alguien fija el amor, la tristeza fija el odio, y las dos a la vez hacen fluctuar el ánimo. En el modelo, el odio mantenido crece tic a tic.", ref: "inspirado en Ética III, 13 esc., 17 esc. y 43" },
    imitacion: { nom: "Imitación", def: "Sentimos lo que imaginamos que siente un semejante. Pero si lo odiamos, su tristeza nos alegra.", ref: "Ética III, 27 y 23" },
    amor: { nom: "Responder con amor", def: "Devuelve amor al odio: lo que entra triste sale alegre, y algo mayor.", ref: "inspirado en Ética IV, 46; III, 44" },
    entender: { nom: "Entender", def: "Cada tic que un suceso pasa por aquí, sube su comprensión. Lo comprendido queda comprendido en todo el circuito: su tristeza pesa menos y, desde el umbral, su afecto es activo. También destapa fuentes ocultas y convierte lo que pasa en ideas.", ref: "inspirado en Ética V, 3, 4 y 10" },
    deliberar: { nom: "Deliberar", def: "Junta lo que saben varios. Tarda unos tics, pero si recibe al menos dos entradas, convierte las imágenes en ideas.", ref: "inspirado en el Tratado político, cap. IX, § 14" },
    razon: { nom: "Razón", def: "Solo funciona si todo lo que le llega son ideas y no hay fuentes ocultas. Cuando le llegan juntas ideas de sucesos distintos aprende nociones comunes, y cada una la hace más fuerte. Produce un afecto activo.", ref: "inspirada en Ética II, 38-40; IV, 59" },
    rumiar: { nom: "Rumiar", def: "La tristeza de lo hecho vuelve a entrar en sí misma: un bucle que no se apaga solo.", ref: "inspirado en Ética IV, 54" },
    accion: { nom: "Acción", def: "Lo que se hace. La mueve el afecto más fuerte que le llega: si las pasiones pesan más que lo activo, la arrastran. Libertad = parte activa de lo que la mueve.", ref: "Ética IV, 7; III, 1 y 3" }
  },
  /* parámetros del modelo (los valores, en la vista) */
  parGrupos: { comprender: "Comprender", razon: "Razón", memoria: "Memoria afectiva", personas: "Entre personas", tiempo: "Tiempo y presión" },
  par: {
    comp: { nom: "Ritmo de comprensión", def: "Cuánto sube la comprensión de un suceso en cada tic que pasa por «Entender».", ref: "V, 3-4" },
    umbralActivo: { nom: "Umbral de actividad", def: "Comprensión a partir de la cual el afecto de un suceso deja de ser pasión y cuenta como activo.", ref: "V, 3" },
    alivio: { nom: "Alivio de lo comprendido", def: "Cuánto pesa menos la tristeza de un suceso del todo comprendido (1 = desaparece).", ref: "V, 3; V, 20 esc." },
    entenderResto: { nom: "Tristeza que deja pasar «Entender»", def: "Parte de la tristeza que sigue saliendo de «Entender» (0 = ninguna).", ref: "V, 6" },
    razBase: { nom: "Fuerza inicial de la razón", def: "Fuerza de la razón antes de aprender ninguna noción común.", ref: "IV, 14-15" },
    razNocion: { nom: "Fuerza por noción común", def: "Cuánto se fortalece la razón con cada noción común aprendida.", ref: "II, 38-40" },
    razMax: { nom: "Fuerza máxima de la razón", def: "Hasta dónde puede llegar la fuerza de la razón.", ref: "IV, 7" },
    umbralBiestable: { nom: "Umbral de la memoria afectiva", def: "Cuánta alegría o tristeza causada por alguien hace falta para fijar amor u odio hacia él.", ref: "III, 13 esc." },
    amorSale: { nom: "Fuerza del amor guardado", def: "Alegría que da en cada tic el amor ya fijado.", ref: "III, def. de los afectos 6" },
    odioCrece: { nom: "Crecimiento del odio", def: "Cuánto aumenta el odio en cada tic que se mantiene (regla del modelo; Spinoza: el odio crece si es recíproco).", ref: "III, 43" },
    fluct: { nom: "Amplitud de la fluctuación", def: "Cuánto oscila el ánimo cuando ama y odia a la vez a alguien.", ref: "III, 17 esc." },
    imitacion: { nom: "Intensidad de la imitación", def: "Qué parte de lo que siente un semejante sentimos nosotros.", ref: "III, 27" },
    amorFactor: { nom: "Fuerza de responder con amor", def: "Cuánto mayor sale el amor que el odio que recibe.", ref: "III, 44" },
    desgaste: { nom: "Desgaste por las causas exteriores", def: "Parte de la potencia que se pierde en cada tic (solo en el circuito libre).", ref: "IV, 3" },
    retardo: { nom: "Lo que tarda deliberar (tics)", def: "Cuántos tics necesita «Deliberar» antes de que salga algo.", ref: "Tratado político, IX, 14" },
    urgencia: { nom: "Presión de la prisa", def: "Cuánto más empuja una fuente oculta en cada tic de cuenta atrás.", ref: "Tratado teológico-político, prefacio" }
  },
  velocidades: ["Lento", "Normal", "Rápido", "Muy rápido"],
  patrones: { siempre: "en cada tic", una: "una vez, en el tic…", cada: "cada … tics", desde: "desde el tic…", inconstante: "inconstante (va y viene)", creciente: "creciente" },
  catGrupos: ["Alegrías", "Tristezas", "Con datos (ideas)"],
  catalogo: [
    ["Un amigo te ayuda sin que se lo pidas", "Entiendes por fin algo difícil", "Música con amigos los viernes", "Un paseo por el monte", "Te elogian en público", "Comes algo muy rico",
      "Esperas buenas noticias (no sabes si llegarán)", "Te sale bien algo que has preparado mucho", "Alguien te explica por qué pasó lo que te dolía", "Lees un buen libro sobre lo que te preocupa"],
    ["Te critican injustamente", "Temes un examen dudoso (no sabes cómo saldrá)", "Pierdes algo que querías mucho", "Te molesta el éxito de un compañero", "Noticias alarmantes sin datos",
      "Te dejan de lado en el grupo", "Cansancio acumulado", "Una discusión en casa", "Recuerdas algo que hiciste mal"],
    ["Una conversación sincera", "Te dan las cifras reales de lo que temías", "Un profesor te explica el contexto", "Investigas tú mismo el problema"]
  ],
  /* escenarios: nodos = nombre de cada pieza (por su id); objetivos y pistas en orden */
  esc: {
    bucle: { nom: "1 · El bucle del odio",
      intro: "Iker se burla de ti una sola vez. Desde entonces, lo que sientes por él y lo que él siente por ti se alimentan uno a otro: un bucle de realimentación. Pon en marcha el reloj y mira las balanzas. Después pulsa «Repetir con este circuito» e intenta romper el bucle metiendo una pieza entre los dos afectos.",
      pistas: ["Cada «afecto hacia alguien» es un biestable: guarda lo último que sintió. Mira qué entra en cada uno.", "Añade una pieza «Responder con amor» y ponla en el camino: que lo que sientes por Iker le llegue a él a través de ella.", "Para Spinoza, el odio vencido del todo por el amor se convierte en amor, y mayor (III, 44)."],
      nodos: { ev: "Iker se burla de ti", lt: "Lo que sientes por Iker", li: "Lo que Iker siente por ti", tu: "Tú", ik: "Iker" },
      objetivos: ["Que al final ninguno de los dos odie al otro", "Que las dos balanzas terminen por encima de 500"] },
    tranvia: { nom: "2 · El tranvía",
      intro: "Un tranvía sin frenos va hacia cinco personas. En la otra vía hay una. Tienes 10 tics antes de que llegue. Aquí no se gana eligiendo la palanca o no: se gana entendiendo qué te mueve, consiguiendo datos y no dejándote arrastrar. Algo que no ves tira de tu balanza.",
      pistas: ["La Razón está en gris: solo le llegan imágenes. ¿Quién sabe algo de verdad sobre la situación? Junta lo que saben con «Deliberar» y llévalo a la Razón.", "Hay algo que tira de tu balanza y no aparece en el mapa. Conecta tu balanza a «Entender» para ver de dónde viene lo que sientes.", "Las acciones reciben por defecto lo que sale de tu balanza: la imaginación y el miedo. La acción sigue al afecto más fuerte (IV, 7): cambia su entrada.", "Después de actuar, la tristeza vuelve a entrar en «Rumiar» una y otra vez. ¿Qué pieza puedes poner en ese bucle?", "Puedes parar el reloj… pero en un dilema real casi nunca se puede."],
      nodos: { t1: "El tranvía va hacia cinco personas", t2: "En la otra vía hay una persona", oc: "Una voz", rum: "Rumiar lo hecho", tu: "Tú", tes: "Otros testigos saben quiénes son y por qué están ahí", del: "Deliberar", raz: "Razón", ent: "Entender", pal: "Accionar la palanca", noi: "No intervenir" },
      ocReal: "una voz que alguien ha puesto ahí y grita «¡decide ya o morirán por tu culpa!»",
      objetivos: ["Destapar la fuente oculta", "Que la Razón funcione antes de actuar", "Actuar con una libertad de 60 o más", "Después, cerrar el bucle de rumiar (que baje de 10)"],
      nota: "Ningún objetivo depende de si accionas la palanca o no." },
    libre: { nom: "3 · Libre",
      intro: "Tu propio circuito, sin límite de tiempo. Añade sucesos del catálogo (alegrías, tristezas, sucesos con datos, cada uno con su ritmo) y piezas, conéctalos y deja correr el reloj: las gráficas muestran cómo evolucionan tu potencia y tu libertad. Intenta subir la libertad acumulada por encima del 50 % sin que la potencia se hunda.",
      pistas: ["Para subir la libertad, los sucesos tienen que llegar a ti comprendidos: haz que pasen un tiempo por «Entender».", "Para que la Razón crezca, llévale ideas de varios sucesos a la vez (con «Deliberar» o «Entender»): cada pareja nueva es una noción común.", "Un bucle necesita que la salida de una pieza vuelva, directa o indirectamente, a su propia entrada. Prueba dos balanzas unidas por «Imitación».", "Un suceso «inconstante» es como la esperanza o el miedo: va y viene sin que sepas cuándo (III, def. de los afectos 12-13)."],
      nodos: { tu: "Tú", base: "Lo que te sostiene cada día (amigos, comida, sueño)", s1: "Un amigo te ayuda sin que se lo pidas", s2: "Temes un examen dudoso (no sabes cómo saldrá)" },
      objetivos: ["Libertad acumulada por encima del 50 %", "Una razón con al menos 3 nociones comunes", "Potencia por encima de 700"] }
  },
  /* ejemplos al azar: mecanismos */
  mec: {
    comprender: { nom: "Comprender lo que duele", mirar: "La tristeza llega a tu balanza y la hunde; pero «Entender» la va comprendiendo. Mira en su tarjeta cómo sube la comprensión y, al pasar el umbral, cómo sube tu libertad acumulada.", n1: "Entender" },
    razon: { nom: "Una razón que aprende", mirar: "A la Razón le llegan ideas de varios sucesos a la vez. Cada pareja nueva es una noción común: mira cómo crece su fuerza en la tarjeta y en el registro.", n1: "Entender (para la razón)", n2: "Razón" },
    imitacion: { nom: "Imitación entre dos", mirar: "Ane y tú os imitáis: lo que siente una pasa a la otra y vuelve. Cuando a Ane le pasa algo malo, mira cómo tu balanza baja también (III, 27).", n1: "Ane", n2: "A Ane le pasa algo malo", n3: "Imitas a Ane", n4: "Ane te imita" },
    odio: { nom: "El bucle del odio", mirar: "Una burla pone en marcha dos memorias afectivas que se alimentan entre sí. Mira cómo el odio crece tic a tic en las dos tarjetas «Afecto hacia alguien» (regla del modelo; Spinoza: III, 43).", n1: "Iker se burla de ti", n2: "Lo que sientes por Iker", n3: "Lo que Iker siente por ti" },
    propaganda: { nom: "Propaganda", mirar: "Una fuente oculta empuja tu balanza hacia abajo sin que sepas de dónde viene; si lo que sale de tu balanza llegara a una Razón, la bloquearía. Conecta el «Entender» que está suelto a tu balanza para destaparla y mira cómo pierde fuerza.", n1: "Propaganda", n2: "Entender (sin conectar)" },
    rumiar: { nom: "Rumiar", mirar: "Un recuerdo triste entra en «Rumiar» y vuelve a entrar en sí mismo: el bucle no se apaga solo. Prueba a meter «Entender» dentro del bucle (IV, 54).", n1: "Recuerdas algo que hiciste mal", n2: "Rumiar" },
    esperanza: { nom: "Esperanza y miedo", mirar: "Dos sucesos inconstantes, uno alegre y otro triste, van y vienen sin aviso. Mira en la gráfica de potencia cómo la línea tiembla: no hay esperanza sin miedo (III, def. de los afectos 13, explicación).", n1: "Esperas buenas noticias", n2: "Temes que no lleguen" },
    deliberar: { nom: "Deliberar", mirar: "Dos sucesos sin datos pasan por «Deliberar»: tarda unos tics, pero lo que sale ya son ideas, y la Razón puede trabajar con ellas (Tratado político, IX, 14).", n1: "Deliberar", n2: "Razón" }
  },
  sostiene: "Lo que te sostiene cada día (amigos, comida, sueño)"
};
