const EXTRA_CONTEO = [
  // --- FACTORIAL ---
  { q: '0! (factorial de cero) es igual a:',
    opts: ['1', '0', 'indefinido', '∞'],
    ans: 0, exp: 'Por definición, 0! = 1. Es necesario para que las fórmulas combinatorias funcionen.' },

  { q: '7! (factorial de 7) es igual a:',
    opts: ['720', '5040', '2520', '40320'],
    ans: 1, exp: '7! = 7×6×5×4×3×2×1 = 5040.' },

  { q: '6! (factorial de 6) es igual a:',
    opts: ['120', '360', '720', '5040'],
    ans: 2, exp: '6! = 6×5×4×3×2×1 = 720.' },

  { q: '¿Cuánto es 8!/6!?',
    opts: ['48', '64', '40320', '56'],
    ans: 3, exp: '8!/6! = (8×7×6!)/(6!) = 8×7 = 56.' },

  { q: '¿Cuánto es 10!/8!?',
    opts: ['100', '90', '45', '3628800'],
    ans: 1, exp: '10!/8! = 10×9 = 90.' },

  { q: 'Si n! = 24, ¿cuál es el valor de n?',
    opts: ['3', '5', '6', '4'],
    ans: 3, exp: '4! = 4×3×2×1 = 24.' },

  { q: 'Si n! = 720, ¿cuánto es n?',
    opts: ['5', '7', '6', '8'],
    ans: 2, exp: '6! = 720.' },

  { q: '¿Cuánto es 5!/3!?',
    opts: ['60', '15', '20', '10'],
    ans: 2, exp: '5!/3! = (5×4×3!)/(3!) = 5×4 = 20.' },

  // --- PERMUTACIONES SIN REPETICIÓN ---
  { q: 'La fórmula de permutaciones P(n, r) es:',
    opts: ['n! / (r! · (n−r)!)', 'n! / (n−r)!', 'n! · r!', 'n / r'],
    ans: 1, exp: 'P(n,r) = n!/(n−r)!. El orden importa y no se repiten elementos.' },

  { q: 'P(6, 2) es igual a:',
    opts: ['15', '30', '12', '36'],
    ans: 1, exp: 'P(6,2) = 6!/(6−2)! = 6×5 = 30.' },

  { q: 'P(5, 3) es igual a:',
    opts: ['10', '30', '60', '120'],
    ans: 2, exp: 'P(5,3) = 5×4×3 = 60.' },

  { q: 'P(7, 3) es igual a:',
    opts: ['35', '105', '343', '210'],
    ans: 3, exp: 'P(7,3) = 7×6×5 = 210.' },

  { q: '¿De cuántas maneras pueden sentarse 6 personas en 6 sillas distintas?',
    opts: ['720', '36', '120', '360'],
    ans: 0, exp: 'P(6,6) = 6! = 720.' },

  { q: 'En una carrera de 8 atletas, ¿de cuántas formas se pueden otorgar los tres primeros lugares?',
    opts: ['336', '56', '512', '24'],
    ans: 0, exp: 'P(8,3) = 8×7×6 = 336. Oro, plata y bronce son puestos distintos.' },

  { q: '¿De cuántas maneras se puede elegir un presidente, vicepresidente y secretario de un grupo de 10 personas?',
    opts: ['120', '720', '1000', '30'],
    ans: 1, exp: 'P(10,3) = 10×9×8 = 720. Los cargos son distintos.' },

  { q: 'P(n, 1) siempre es igual a:',
    opts: ['n', '1', 'n!', 'n−1'],
    ans: 0, exp: 'P(n,1) = n!/(n−1)! = n.' },

  { q: 'P(n, n) siempre es igual a:',
    opts: ['1', 'n', 'n!', '0'],
    ans: 2, exp: 'P(n,n) = n!/0! = n!/1 = n!.' },

  // --- PERMUTACIONES CON REPETICIÓN ---
  { q: '¿Cuántos números de 4 dígitos se pueden formar con {1, 2, 3, 4, 5} si se permite repetir dígitos?',
    opts: ['120', '625', '100', '256'],
    ans: 1, exp: 'Con repetición: 5⁴ = 625. Cada posición tiene 5 opciones independientes.' },

  { q: '¿Cuántas claves de 3 dígitos (0–9) se pueden formar con repetición?',
    opts: ['1000', '720', '504', '100'],
    ans: 0, exp: '10³ = 1000. Cada dígito puede ser cualquiera de los 10.' },

  { q: '¿Cuántas "palabras" de 2 letras se pueden formar con {a, b, c} permitiendo repetición?',
    opts: ['6', '3', '9', '8'],
    ans: 2, exp: '3² = 9. aa, ab, ac, ba, bb, bc, ca, cb, cc.' },

  { q: 'La fórmula de permutaciones CON repetición de n elementos tomados de r en r es:',
    opts: ['n!/r!', 'n!/(n−r)!', 'nʳ', 'C(n,r)'],
    ans: 2, exp: 'Con repetición permitida, cada posición tiene n opciones: nʳ.' },

  { q: '¿Cuántos códigos binarios (0 ó 1) de 8 bits existen?',
    opts: ['64', '128', '256', '16'],
    ans: 2, exp: '2⁸ = 256. Cada bit tiene 2 opciones.' },

  // --- COMBINACIONES ---
  { q: 'La fórmula de combinaciones C(n, r) es:',
    opts: ['n! / (n−r)!', 'n! / (r! · (n−r)!)', 'n! · r!', 'r! / (n−r)!'],
    ans: 1, exp: 'C(n,r) = n! / (r! · (n−r)!). El orden NO importa.' },

  { q: 'C(6, 2) es igual a:',
    opts: ['30', '12', '15', '36'],
    ans: 2, exp: 'C(6,2) = 6!/(2!·4!) = (6×5)/(2×1) = 15.' },

  { q: 'C(7, 3) es igual a:',
    opts: ['210', '70', '35', '21'],
    ans: 2, exp: 'C(7,3) = (7×6×5)/(3×2×1) = 210/6 = 35.' },

  { q: 'C(10, 4) es igual a:',
    opts: ['5040', '840', '120', '210'],
    ans: 3, exp: 'C(10,4) = (10×9×8×7)/(4×3×2×1) = 5040/24 = 210.' },

  { q: 'C(n, 0) para cualquier n ≥ 0 es igual a:',
    opts: ['0', 'n', '1', 'n!'],
    ans: 2, exp: 'C(n,0) = n!/(0!·n!) = 1. Solo hay una forma de no elegir nada.' },

  { q: 'C(n, n) para cualquier n es igual a:',
    opts: ['0', '1', 'n', 'n!'],
    ans: 1, exp: 'C(n,n) = n!/(n!·0!) = 1. Solo hay una forma de elegir todos.' },

  { q: 'C(8, 5) es igual a:',
    opts: ['336', '28', '6720', '56'],
    ans: 3, exp: 'C(8,5) = C(8,3) = (8×7×6)/(3×2×1) = 56.' },

  { q: '¿De cuántas maneras se pueden elegir 5 preguntas de un examen de 12?',
    opts: ['792', '95040', '120', '60'],
    ans: 0, exp: 'C(12,5) = (12×11×10×9×8)/(5!) = 95040/120 = 792.' },

  { q: '¿Cuántos comités de 4 personas se pueden formar de un grupo de 9?',
    opts: ['36', '126', '3024', '504'],
    ans: 1, exp: 'C(9,4) = (9×8×7×6)/(4×3×2×1) = 3024/24 = 126.' },

  { q: 'C(6, 3) es igual a:',
    opts: ['20', '120', '15', '30'],
    ans: 0, exp: 'C(6,3) = 6!/(3!·3!) = 720/36 = 20.' },

  // --- PRINCIPIO DE MULTIPLICACIÓN ---
  { q: 'El principio fundamental de multiplicación establece que si hay m formas de hacer A y n formas de hacer B, entonces:',
    opts: ['Hay m+n formas', 'Hay m×n formas de hacer A y luego B', 'Hay m/n formas', 'Hay mⁿ formas'],
    ans: 1, exp: 'El principio de multiplicación: tareas independientes → se multiplican las opciones.' },

  { q: 'Un menú ofrece 4 entradas, 5 platos principales y 3 postres. ¿Cuántos menús completos distintos hay?',
    opts: ['12', '45', '60', '20'],
    ans: 2, exp: '4×5×3 = 60 combinaciones posibles de menú.' },

  { q: 'Para ir de la ciudad A a la B hay 3 rutas, y de B a C hay 4 rutas. ¿Cuántas formas de ir de A a C pasando por B?',
    opts: ['12', '7', '3', '4'],
    ans: 0, exp: 'Principio de multiplicación: 3×4 = 12 rutas.' },

  // --- PRINCIPIO DE ADICIÓN ---
  { q: 'El principio de adición se aplica cuando:',
    opts: ['Dos tareas se realizan simultáneamente', 'Dos eventos son mutuamente excluyentes y se realiza solo uno', 'Se permiten repeticiones', 'Los eventos son dependientes'],
    ans: 1, exp: 'Si A o B (sin ambos a la vez), el total de formas es m + n.' },

  { q: 'Un estudiante puede ir al laboratorio (5 PCs) o a la sala de estudio (8 mesas). ¿De cuántas formas puede elegir un lugar?',
    opts: ['3', '8', '40', '13'],
    ans: 3, exp: 'Son opciones excluyentes: 5 + 8 = 13 lugares posibles.' },

  // --- ANAGRAMAS ---
  { q: '¿Cuántos anagramas tiene la palabra "AMOR" (4 letras distintas)?',
    opts: ['24', '12', '4', '16'],
    ans: 0, exp: '4 letras sin repetir → 4! = 24 ordenaciones posibles.' },

  { q: '¿Cuántos anagramas tiene la palabra "MESA"?',
    opts: ['12', '48', '6', '24'],
    ans: 3, exp: 'M, E, S, A son 4 letras distintas → 4! = 24.' },

  { q: '¿Cuántos anagramas distintos tiene la palabra "PATA" (P, A, T, A)?',
    opts: ['24', '4', '12', '6'],
    ans: 2, exp: 'Con 2 letras iguales (A repetida): 4!/2! = 24/2 = 12.' },

  { q: '¿Cuántas ordenaciones distintas tiene la palabra "LEVEL" (L, E, V, E, L)?',
    opts: ['120', '60', '30', '10'],
    ans: 2, exp: '5 letras con L×2 y E×2: 5!/(2!·2!) = 120/4 = 30.' },

  { q: '¿Cuántos anagramas tiene "PAPA" (P, A, P, A)?',
    opts: ['6', '24', '12', '4'],
    ans: 0, exp: '4!/(2!·2!) = 24/4 = 6. Dos P y dos A repetidas.' },

  { q: 'La palabra "TIERRA" tiene las letras T, I, E, R, R, A. ¿Cuántos anagramas tiene?',
    opts: ['720', '120', '360', '180'],
    ans: 2, exp: '6 letras con R repetida 2 veces: 6!/2! = 720/2 = 360.' },

  // --- PERMUTACIONES CIRCULARES ---
  { q: 'La fórmula para permutaciones circulares de n elementos es:',
    opts: ['n!', 'n!/(n−1)!', '(n−1)!', 'nⁿ'],
    ans: 2, exp: 'En una disposición circular, una posición es fija → (n−1)! arreglos distintos.' },

  { q: '¿De cuántas maneras pueden sentarse 5 personas alrededor de una mesa circular?',
    opts: ['120', '60', '20', '24'],
    ans: 3, exp: '(5−1)! = 4! = 24.' },

  { q: '¿De cuántas maneras pueden sentarse 6 personas alrededor de una mesa circular?',
    opts: ['720', '360', '120', '30'],
    ans: 2, exp: '(6−1)! = 5! = 120.' },

  { q: '¿De cuántas maneras pueden sentarse 4 personas alrededor de una mesa circular?',
    opts: ['24', '12', '4', '6'],
    ans: 3, exp: '(4−1)! = 3! = 6.' },

  { q: 'En una permutación circular, ¿por qué se divide entre n?',
    opts: ['Porque las rotaciones del mismo arreglo se cuentan como iguales', 'Para evitar duplicar personas', 'Por el principio de adición', 'Por el principio de multiplicación'],
    ans: 0, exp: 'Girar toda la disposición n posiciones da el mismo arreglo circular → se fija un elemento.' },

  // --- SELECCIÓN DE COMITÉS/EQUIPOS ---
  { q: 'Se quiere formar un comité de 3 hombres y 2 mujeres de un grupo de 7 hombres y 5 mujeres. ¿De cuántas formas?',
    opts: ['2520', '350', '210', '60'],
    ans: 1, exp: 'C(7,3)×C(5,2) = 35×10 = 350.' },

  { q: 'De 10 jugadores se elige un equipo de 5. ¿Cuántos equipos distintos se pueden formar?',
    opts: ['30240', '100', '252', '120'],
    ans: 2, exp: 'C(10,5) = 252.' },

  { q: 'Un jurado se forma con 4 personas de un grupo de 12. ¿Cuántos jurados distintos hay?',
    opts: ['11880', '495', '48', '220'],
    ans: 1, exp: 'C(12,4) = (12×11×10×9)/(4×3×2×1) = 11880/24 = 495.' },

  { q: 'Un equipo de fútbol necesita elegir 11 titulares de 15 jugadores disponibles. ¿De cuántas formas?',
    opts: ['165', '1365', '32 432 400', '455'],
    ans: 1, exp: 'C(15,11) = C(15,4) = (15×14×13×12)/(4×3×2×1) = 1365.' },

  // --- PROBABILIDAD CLÁSICA CON CONTEO ---
  { q: 'Se lanza un dado de 6 caras. ¿Cuál es la probabilidad de obtener un número par?',
    opts: ['1/3', '1/2', '2/3', '1/6'],
    ans: 1, exp: 'Pares: {2,4,6} → 3 casos favorables de 6. P = 3/6 = 1/2.' },

  { q: 'En una bolsa hay 4 bolas rojas y 6 azules. Se extrae una al azar. ¿Probabilidad de roja?',
    opts: ['4/6', '2/5', '1/4', '3/5'],
    ans: 1, exp: 'P(roja) = 4/10 = 2/5.' },

  { q: '¿Cuál es la probabilidad de que al lanzar dos monedas salgan ambas caras?',
    opts: ['1/4', '1/2', '3/4', '1/8'],
    ans: 0, exp: 'Espacio muestral: {CC, CS, SC, SS}. Un solo caso favorable: CC. P = 1/4.' },

  { q: 'De un grupo de 5 hombres y 5 mujeres se elige una persona al azar. ¿P(mujer)?',
    opts: ['1/5', '2/5', '1/2', '5/9'],
    ans: 2, exp: '5 mujeres de 10 personas: P = 5/10 = 1/2.' },

  // --- CASOS PRÁCTICOS VARIADOS ---
  { q: '¿De cuántas formas se pueden elegir 3 libros de una colección de 10 para colocarlos en una estantería (el orden importa)?',
    opts: ['210', '30', '120', '720'],
    ans: 3, exp: 'P(10,3) = 10×9×8 = 720. El orden en la estantería importa.' },

  { q: 'Un PIN de cajero tiene 4 dígitos distintos (0–9). ¿Cuántos PINs posibles hay?',
    opts: ['5040', '10000', '4096', '210'],
    ans: 0, exp: 'P(10,4) = 10×9×8×7 = 5040. Dígitos distintos y el orden importa.' },

  { q: '¿Cuántos números de 3 cifras se pueden formar con los dígitos {1,2,3,4,5} sin repetición?',
    opts: ['125', '60', '15', '30'],
    ans: 1, exp: 'P(5,3) = 5×4×3 = 60.' },

  { q: 'En una clase de 20 alumnos se deben elegir 2 para representantes iguales. ¿Cuántos pares posibles hay?',
    opts: ['190', '380', '40', '400'],
    ans: 0, exp: 'C(20,2) = (20×19)/2 = 190. El orden no importa.' },

  { q: 'Una pizzería ofrece 8 ingredientes y el cliente puede elegir exactamente 3. ¿Cuántas pizzas distintas?',
    opts: ['336', '24', '56', '512'],
    ans: 2, exp: 'C(8,3) = (8×7×6)/(3×2×1) = 56.' },

  { q: '¿Cuántas formas hay de repartir 10 premios distintos entre 10 personas (uno por persona)?',
    opts: ['3 628 800', '100', '1000', '10'],
    ans: 0, exp: '10! = 3 628 800. Cada asignación es una permutación completa.' },

  // --- ERRORES COMUNES P vs C ---
  { q: 'Para elegir un delegado y un subdelegado de un grupo de 10, ¿qué técnica es correcta?',
    opts: ['Permutación, porque los cargos son distintos', 'Combinación, porque son solo 2 personas', 'Factorial de 10', 'Potencia 10²'],
    ans: 0, exp: 'Como hay dos cargos distintos (delegado ≠ subdelegado), el orden importa → P(10,2) = 90.' },

  { q: 'Para elegir 2 representantes iguales de un grupo de 10, ¿qué técnica es correcta?',
    opts: ['Permutación, porque hay 2 personas', 'Combinación, porque no hay diferencia entre los dos elegidos', 'Factorial de 10', 'Potencia 10²'],
    ans: 1, exp: 'Si los dos representantes tienen el mismo rol, el orden no importa → C(10,2) = 45.' },

  { q: 'Al resolver "¿de cuántas formas se pueden ordenar 4 libros en un estante?", un estudiante calcula C(4,4). ¿Qué error comete?',
    opts: ['Aplica el principio de adición en vez de multiplicación', 'Usa combinaciones cuando debería usar permutaciones (el orden importa)', 'Usa un factorial incorrecto', 'No considera la repetición'],
    ans: 1, exp: 'Ordenar en estante sí depende del orden → P(4,4) = 4! = 24, no C(4,4) = 1.' },

  { q: 'Un estudiante calcula P(6,2) = 30 para saber cuántos grupos de 2 se forman de 6 personas. ¿Es correcto?',
    opts: ['No, debe usar C(6,2) = 15 porque los grupos no tienen orden', 'Sí, siempre se usa P', 'No, debe usar 6² = 36', 'Sí, porque hay 6 personas'],
    ans: 0, exp: 'Un "grupo" no tiene orden interno: {A,B} = {B,A} → C(6,2) = 15.' },

  // --- MÁS CÁLCULOS NUMÉRICOS CONCRETOS ---
  { q: 'C(4, 2) es igual a:',
    opts: ['12', '8', '4', '6'],
    ans: 3, exp: 'C(4,2) = 4!/(2!·2!) = 24/4 = 6.' },

  { q: 'P(3, 3) es igual a:',
    opts: ['9', '3', '6', '1'],
    ans: 2, exp: 'P(3,3) = 3! = 6.' },

  { q: 'C(9, 2) es igual a:',
    opts: ['36', '72', '18', '81'],
    ans: 0, exp: 'C(9,2) = (9×8)/(2×1) = 72/2 = 36.' },

  { q: 'P(8, 2) es igual a:',
    opts: ['28', '56', '64', '16'],
    ans: 1, exp: 'P(8,2) = 8×7 = 56.' },

  { q: '¿De cuántas formas se pueden alinear 5 personas para una foto?',
    opts: ['120', '60', '20', '25'],
    ans: 0, exp: '5! = 120. Todas las personas se ubican en fila.' },

  { q: '¿Cuántos subconjuntos de 2 elementos tiene un conjunto de 8 elementos?',
    opts: ['56', '28', '16', '64'],
    ans: 1, exp: 'C(8,2) = (8×7)/2 = 28.' },

  { q: 'C(5, 5) es igual a:',
    opts: ['120', '1', '5', '25'],
    ans: 1, exp: 'C(5,5) = 5!/(5!·0!) = 1.' },

  { q: 'P(9, 1) es igual a:',
    opts: ['1', '0', '9!', '9'],
    ans: 3, exp: 'P(9,1) = 9!/(9−1)! = 9!/8! = 9.' },

  { q: '¿Cuántas diagonales tiene un polígono de 6 lados?',
    opts: ['9', '15', '12', '6'],
    ans: 0, exp: 'Diagonales = C(6,2) − 6 = 15 − 6 = 9. Se restan los lados del polígono.' },

  { q: '¿Cuántas diagonales tiene un polígono convexo de 8 lados?',
    opts: ['28', '16', '20', '56'],
    ans: 2, exp: 'C(8,2) − 8 = 28 − 8 = 20 diagonales.' },

  { q: 'En un torneo de fútbol con 6 equipos donde todos se enfrentan una vez, ¿cuántos partidos hay?',
    opts: ['15', '30', '36', '12'],
    ans: 0, exp: 'C(6,2) = 15. Cada par de equipos juega un partido.' },

  { q: 'Si hay 5 puntos en el plano, no tres colineales, ¿cuántos triángulos se pueden formar?',
    opts: ['10', '60', '20', '15'],
    ans: 0, exp: 'C(5,3) = 10. Cada subconjunto de 3 puntos forma un triángulo.' },

  { q: 'Si hay 6 puntos en el plano, no tres colineales, ¿cuántos segmentos distintos se pueden trazar?',
    opts: ['15', '30', '12', '36'],
    ans: 0, exp: 'C(6,2) = 15. Cada par de puntos determina un segmento.' },

  // --- RELACIONADOS CON PROBABILIDAD COMBINATORIA ---
  { q: 'De una baraja de 52 cartas se extrae una. ¿Cuál es la probabilidad de obtener un as?',
    opts: ['1/13', '4/52', '1/52', '4/13'],
    ans: 0, exp: 'Hay 4 ases en 52 cartas: 4/52 = 1/13.' },

  { q: '¿Cuántos resultados posibles hay al lanzar 3 dados?',
    opts: ['216', '18', '729', '36'],
    ans: 0, exp: '6³ = 216. Cada dado tiene 6 resultados independientes.' },

  { q: 'Se elige al azar un número de 1 a 20. ¿Cuál es la probabilidad de que sea múltiplo de 3?',
    opts: ['1/3', '1/4', '3/10', '6/20'],
    ans: 2, exp: 'Múltiplos de 3 en [1,20]: 3,6,9,12,15,18 → 6 casos. P = 6/20 = 3/10.' },

  { q: 'Se forman todas las posibles parejas de un grupo de 6 estudiantes. ¿Cuántas parejas hay?',
    opts: ['30', '36', '12', '15'],
    ans: 3, exp: 'C(6,2) = (6×5)/2 = 15 parejas.' },

  { q: 'Un dado se lanza 4 veces. ¿Cuántos resultados posibles hay en total?',
    opts: ['24', '1296', '256', '360'],
    ans: 1, exp: '6⁴ = 1296 resultados posibles.' },

  { q: 'En un salón de 30 alumnos se sortean 3 premios distintos (1.°, 2.° y 3.° lugar). ¿Cuántos resultados posibles?',
    opts: ['4060', '24360', '27000', '900'],
    ans: 1, exp: 'P(30,3) = 30×29×28 = 24 360.' },

  { q: 'Una persona tiene 5 camisas, 4 pantalones y 2 zapatos. ¿Cuántos atuendos distintos puede formar?',
    opts: ['11', '40', '20', '80'],
    ans: 1, exp: '5×4×2 = 40. Principio de multiplicación.' },

  { q: '¿De cuántas formas distintas se pueden asignar 3 tareas diferentes a 3 empleados distintos (una tarea por empleado)?',
    opts: ['6', '9', '3', '27'],
    ans: 0, exp: '3! = 6. Es una permutación completa.' },

  { q: 'En un examen de 10 preguntas de V/F, ¿cuántos patrones de respuestas distintos hay?',
    opts: ['1024', '20', '100', '512'],
    ans: 0, exp: '2¹⁰ = 1024. Cada pregunta tiene 2 opciones independientes.' },

  { q: 'Un restaurante ofrece menú fijo: 3 sopas, 4 segundos y 2 bebidas. ¿Cuántos menús distintos se pueden armar?',
    opts: ['9', '24', '12', '48'],
    ans: 1, exp: '3×4×2 = 24 menús distintos.' },

  { q: 'En una competencia de 10 equipos, ¿cuántos resultados posibles de 1.°, 2.° y 3.° lugar hay?',
    opts: ['120', '30', '1000', '720'],
    ans: 3, exp: 'P(10,3) = 10×9×8 = 720.' },

  { q: 'C(10, 2) + C(10, 3) es igual a:',
    opts: ['165', '120', '210', '45'],
    ans: 0, exp: 'C(10,2) = 45 y C(10,3) = 120 → 45+120 = 165. También es C(11,3) por la identidad de Pascal.' },

  { q: 'La identidad de Pascal establece que C(n,r) + C(n,r+1) es igual a:',
    opts: ['C(n+1, r+1)', 'C(n+1, r)', 'C(n, r+1)', '2·C(n,r)'],
    ans: 0, exp: 'Identidad de Pascal: C(n,r) + C(n,r+1) = C(n+1, r+1). Base del triángulo de Pascal.' },

];
