"use strict";
/* ===== «Nudos: ¿encajan tus razones?» (09-10, Bachillerato) — datos =====
   Cada módulo: afirmaciones (afs, por identificador) y nudos entre pares de respuestas.
   k = "M1=A|M3=A": el nudo salta si la afirmación M1 se contesta A (de acuerdo) y la M3, A.
   tipo "real" (hay que deshacerlo escribiendo) o "aparente" (parece contradicción y no lo es).
   por = por qué chocan; distinguir = pista para la salida «hay una diferencia relevante»;
   fuente = para saber más. Inspirado en philosophyexperiments.com y corregido con los criterios
   de criba de actividades gamificadas (sin perfil, sin datos, pidiendo razones). Vista: nudosview.js. */
const NUDOS = [
{
  id:"mentir", titulo:"¿Es siempre malo mentir?",
  sub:"Ética · Filosofía 1.º (las preguntas de la ética) e Historia de la Filosofía (Kant frente al utilitarismo)",
  afs:{
    M1:"Mentir está mal en sí mismo, aunque la mentira no haga daño a nadie.",
    M2:"Lo que hace buena o mala una acción son sus consecuencias.",
    M3:"Si un asesino te pregunta dónde se esconde tu amigo, está bien mentirle.",
    M4:"Una mentira piadosa (decir que te encanta un regalo que no te gusta) es aceptable.",
    M5:"Un gobierno puede mentir a la población si es por el bien de esa población.",
    M6:"Si todo el mundo mintiera cuando le conviene, nadie podría fiarse de nadie.",
    M7:"Una norma moral, si es válida, vale sin excepciones.",
    M8:"Callar u ocultar información no es mentir.",
    M9:"Engañar a alguien está mal aunque todo lo que le digas sea verdad."
  },
  nudos:[
    { k:"M1=A|M3=A", tipo:"real",
      por:"Si mentir está mal «en sí mismo», con independencia de lo que provoque, también está mal mentirle al asesino. Si en ese caso está bien, entonces mentir no está mal en sí, sino según las circunstancias o las consecuencias.",
      distinguir:"Pista: ¿hay en el caso del asesino otro deber en juego, proteger a un inocente, que pesa más? Eso no niega que mentir esté mal en sí: dice que a veces chocan dos deberes.",
      fuente:"Kant, «Sobre un presunto derecho a mentir por filantropía» (1797): ni siquiera al asesino. W. D. Ross, los deberes prima facie (1930)." },
    { k:"M7=A|M3=A", tipo:"real",
      por:"Si las normas válidas no admiten excepciones y «no mentir» es una norma válida, no puedes mentir al asesino. Si puedes, o «no mentir» no es una norma válida tal cual, o las normas sí admiten excepciones.",
      distinguir:"Pista: ¿podría la norma válida ser más precisa, por ejemplo «no mentir a quien tiene derecho a la verdad»? Entonces no habría una excepción, sino una norma mejor formulada.",
      fuente:"Kant, Fundamentación de la metafísica de las costumbres (1785): el imperativo categórico no admite excepciones por inclinación." },
    { k:"M2=A|M5=D", tipo:"real",
      por:"Si solo cuentan las consecuencias, una mentira del gobierno que de verdad beneficie a la población debería ser aceptable. Si la rechazas, quizá no solo cuentan las consecuencias, o crees que esas mentiras nunca salen bien.",
      distinguir:"Pista: ¿cuentas como consecuencia la pérdida de confianza a largo plazo? Entonces puedes mantener las dos sin contradicción, pero tendrás que explicarlo.",
      fuente:"Platón, República III (414b-415d): la «noble mentira» de los gobernantes. Mill, El utilitarismo (1863), sobre las reglas que protegen la confianza." },
    { k:"M8=A|M9=A", tipo:"real",
      por:"Si lo malo es engañar, es decir, hacer que otro crea algo falso, y se puede engañar diciendo solo verdades, también se puede engañar callando. Entonces callar no siempre sería inocente.",
      distinguir:"Pista: ¿hay diferencia entre no decir algo y hacer que el otro crea algo falso? Piensa en un médico que no da un dato y en un vendedor que lo esconde.",
      fuente:"La distinción entre mentir y engañar: entrada «The Definition of Lying and Deception» de la Stanford Encyclopedia of Philosophy." },
    { k:"M1=A|M4=A", tipo:"real",
      por:"La mentira piadosa sigue siendo una mentira. Si mentir está mal en sí mismo, la piadosa también lo está, aunque sea poco.",
      distinguir:"Pista: ¿es la mentira piadosa realmente una mentira? ¿Engaña a alguien que conoce la costumbre de agradecer los regalos?",
      fuente:"Agustín de Hipona, Sobre la mentira (De mendacio, hacia 395): clasifica las mentiras y condena también las piadosas." },
    { k:"M2=A|M6=A", tipo:"aparente",
      por:"Parece que chocan («solo cuentan las consecuencias» frente a una razón de principio para no mentir), pero no es una contradicción: la afirmación sobre la confianza es justamente un argumento consecuencialista. Lo malo de mentir sería que destruye la confianza, y eso es una consecuencia.",
      fuente:"Es el núcleo del utilitarismo de la regla: conviene seguir reglas como no mentir por sus buenas consecuencias generales." }
  ]
},
{
  id:"creer", titulo:"¿Cuándo es razonable creer algo?",
  sub:"Conocimiento · Filosofía 1.º (¿qué podemos conocer?) e Historia de la Filosofía (fe y razón)",
  afs:{
    C1:"Si estoy completamente seguro de algo, tengo derecho a creerlo.",
    C2:"Una creencia sin pruebas no vale más que la creencia contraria.",
    C3:"Cada uno tiene su verdad.",
    C4:"La Tierra gira alrededor del Sol, lo crea quien lo crea.",
    C5:"Si nadie puede demostrar que algo es falso, es razonable creerlo.",
    C6:"Que mucha gente crea algo es una buena razón para creerlo.",
    C7:"Los expertos también se equivocan, así que su opinión vale lo mismo que la de cualquiera.",
    C8:"Es razonable seguir lo que dice mi médico aunque yo no entienda sus razones."
  },
  nudos:[
    { k:"C1=A|C2=A", tipo:"real",
      por:"La seguridad interior no es una prueba: mucha gente ha estado totalmente segura de cosas falsas. Si una creencia sin pruebas no vale más que su contraria, tu seguridad no te da derecho a ella.",
      distinguir:"Pista: ¿hay creencias que no se apoyan en pruebas pero tampoco son arbitrarias, como que existe el mundo exterior o que el pasado existió?",
      fuente:"W. K. Clifford, «La ética de la creencia» (1877), frente a William James, «La voluntad de creer» (1896)." },
    { k:"C3=A|C4=A", tipo:"real",
      por:"Si cada uno tiene su verdad, quien cree que el Sol gira alrededor de la Tierra tiene la suya, tan verdadera como la tuya. Pero la otra afirmación dice que hay verdades que no dependen de lo que crea nadie.",
      distinguir:"Pista: ¿«su verdad» quiere decir «su opinión» o «su experiencia»? ¿Puede alguien tener razón sobre sus gustos y no sobre astronomía?",
      fuente:"Platón, Teeteto (161c-171c): la refutación del «el hombre es la medida de todas las cosas» de Protágoras." },
    { k:"C5=A|C2=A", tipo:"real",
      por:"Que no se pueda demostrar que algo es falso no prueba que sea verdadero (la falacia de apelar a la ignorancia). Si fuera razonable creerlo, también lo sería creer lo contrario de muchas cosas que tampoco se pueden refutar.",
      distinguir:"Pista: ¿importa quién tiene que demostrar (la carga de la prueba)? ¿Y si se ha buscado a fondo y no se ha encontrado nada?",
      fuente:"Bertrand Russell, la tetera celeste («¿Hay un Dios?», 1952)." },
    { k:"C7=A|C8=A", tipo:"real",
      por:"Si la opinión del experto vale lo mismo que la de cualquiera, no hay razón para seguir a tu médico más que a tu vecino. Si es razonable seguirle sin entenderle, su opinión vale más.",
      distinguir:"Pista: «puede equivocarse» no significa «se equivoca tanto como cualquiera». ¿Qué diferencia hay entre falible e igual de fiable?",
      fuente:"La autoridad epistémica: John Hardwig, «Epistemic Dependence» (1985)." },
    { k:"C6=A|C4=A", tipo:"real",
      por:"Durante siglos casi todo el mundo creyó que el Sol giraba alrededor de la Tierra. Si la mayoría fuera una buena razón, habría sido razonable creerlo; pero la otra afirmación dice que la verdad no depende de cuántos lo crean.",
      distinguir:"Pista: ¿puede ser razonable creer algo falso si las razones eran buenas en su momento? Separa «verdadero» de «razonable».",
      fuente:"La falacia de apelar a la mayoría; el caso de Galileo." },
    { k:"C2=A|C8=A", tipo:"aparente",
      por:"Parece que chocan (sigues al médico sin entender sus pruebas), pero no es una contradicción: que lo afirme un experto fiable ya es una prueba. El testimonio de alguien con buena trayectoria es una razón, aunque tú no veas sus datos.",
      fuente:"La epistemología del testimonio: confiar en quien sabe no es creer sin pruebas, siempre que haya razones para considerarlo fiable." }
  ]
}];
