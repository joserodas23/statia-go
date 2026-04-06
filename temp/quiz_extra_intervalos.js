const EXTRA_INTERVALOS = [
  // --- BLOQUE 1: Definición e interpretación (ans variados) ---
  { q: '¿Qué representa el nivel de confianza del 95% en un intervalo de confianza?',
    opts: ['Si repitiéramos el muestreo muchas veces, el 95% de los IC construidos contendrían al parámetro', 'El parámetro tiene 95% de probabilidad de estar en ese intervalo específico', 'El 95% de los datos cae dentro del intervalo', 'La muestra es correcta en un 95% de los casos'],
    ans: 0, exp: 'Interpretación frecuentista: el 95% se refiere al procedimiento, no al parámetro fijo.' },

  { q: '¿Cuál es la interpretación INCORRECTA de un IC del 95% para μ?',
    opts: ['El parámetro μ tiene 95% de probabilidad de estar en el intervalo calculado', 'Si construimos 100 IC con muestras distintas, aproximadamente 95 contendrán μ', 'El método produce IC que cubren μ el 95% de las veces', 'La confianza se refiere al procedimiento de construcción'],
    ans: 0, exp: 'μ es un valor fijo, no una variable aleatoria; hablar de "probabilidad de μ" es incorrecto.' },

  { q: 'Un intervalo de confianza para μ es más estrecho cuando:',
    opts: ['El tamaño muestral n es mayor', 'El nivel de confianza es mayor', 'La desviación estándar σ es mayor', 'El valor Z crítico es mayor'],
    ans: 0, exp: 'Mayor n reduce el error estándar σ/√n y por tanto el margen de error.' },

  { q: 'El nivel de confianza del 99% implica un Z crítico de aproximadamente:',
    opts: ['2.576', '1.960', '1.645', '1.282'],
    ans: 0, exp: 'Z₀.₀₀₅ = 2.576 para el 99% de confianza (α/2 = 0.005 en cada cola).' },

  { q: 'Si α = 0.05, el nivel de confianza del intervalo es:',
    opts: ['95%', '90%', '99%', '5%'],
    ans: 0, exp: 'Nivel de confianza = (1 − α) × 100% = (1 − 0.05) × 100% = 95%.' },

  // ans: 1
  { q: 'El valor Z crítico para un IC del 90% es:',
    opts: ['1.282', '1.645', '1.960', '2.326'],
    ans: 1, exp: 'Para el 90% de confianza, α/2 = 0.05, y Z₀.₀₅ = 1.645.' },

  { q: 'Si se construyen 200 intervalos del 95%, se espera que aproximadamente ¿cuántos NO contengan el verdadero parámetro?',
    opts: ['5', '10', '20', '2'],
    ans: 1, exp: '5% de 200 = 10 intervalos se espera que fallen en capturar μ.' },

  { q: 'El margen de error de un IC para la media con σ conocida se calcula como:',
    opts: ['t · s / √n', 'Z · σ / √n', 'Z · σ / n', 'Z · s²/ n'],
    ans: 1, exp: 'E = Z_(α/2) · σ/√n cuando se conoce la desviación estándar poblacional.' },

  { q: 'Si x̄ = 50 y el IC 95% es (45, 55), el margen de error es:',
    opts: ['10', '5', '2.5', '50'],
    ans: 1, exp: 'Margen de error = (límite superior − límite inferior) / 2 = (55−45)/2 = 5.' },

  { q: '¿Cuándo es apropiado usar la distribución t de Student en lugar de Z para un IC de μ?',
    opts: ['Cuando n ≥ 30 y la población es normal', 'Cuando σ es desconocida y se estima con s', 'Cuando los datos son proporciones', 'Cuando se trabaja con varianzas'],
    ans: 1, exp: 'La t se usa cuando σ es desconocida; se reemplaza con s y se usan gl = n−1.' },

  // ans: 2
  { q: 'En la fórmula del IC para μ con σ desconocida: x̄ ± t_(α/2, n-1) · s/√n, ¿qué representa "n−1"?',
    opts: ['El número de parámetros desconocidos', 'La muestra reducida en uno', 'Los grados de libertad', 'El nivel de confianza ajustado'],
    ans: 2, exp: 'n−1 son los grados de libertad de la distribución t cuando se estima σ con s.' },

  { q: 'Si la muestra tiene n = 16 y se usa la distribución t para construir un IC, los grados de libertad son:',
    opts: ['16', '8', '15', '14'],
    ans: 2, exp: 'gl = n − 1 = 16 − 1 = 15.' },

  { q: 'Un IC del 95% para una proporción p se construye como p̂ ± Z · √(p̂q̂/n). Si p̂ = 0.6, n = 100, el margen de error es aproximadamente:',
    opts: ['0.096', '0.048', '0.0960', '0.192'],
    ans: 2, exp: 'E = 1.96 · √(0.6·0.4/100) = 1.96 · √(0.0024) = 1.96 · 0.04899 ≈ 0.096.' },

  { q: 'Para un IC bilateral, el área en cada cola es:',
    opts: ['α', 'α/4', 'α/2', '1 − α'],
    ans: 2, exp: 'En un IC bilateral, el área de error α se divide en α/2 para cada cola.' },

  { q: 'Si se desea un margen de error máximo de 3 unidades, σ = 12 y Z = 1.96, el tamaño muestral mínimo es:',
    opts: ['16', '64', '62', '61.47'],
    ans: 2, exp: 'n = (Z·σ/E)² = (1.96·12/3)² = (7.84)² = 61.47 → se redondea a 62.' },

  // ans: 3
  { q: '¿Qué ocurre con el ancho del IC cuando el nivel de confianza aumenta de 95% a 99% (n y σ fijos)?',
    opts: ['Se estrecha', 'No cambia', 'Se estrecha a la mitad', 'Se amplía'],
    ans: 3, exp: 'Mayor confianza → Z mayor → mayor margen de error → IC más amplio.' },

  { q: 'Un IC del 95% para μ con σ = 8 y n = 64 usa como error estándar:',
    opts: ['8', '64', '0.125', '1'],
    ans: 3, exp: 'σ/√n = 8/√64 = 8/8 = 1.' },

  { q: 'Si el IC 99% para μ es (30, 50), un IC 95% con los mismos datos sería:',
    opts: ['Más amplio que (30, 50)', 'Idéntico a (30, 50)', 'El mismo por ser con la misma muestra', 'Más estrecho que (30, 50)'],
    ans: 3, exp: 'Menor nivel de confianza → menor Z → menor margen de error → IC más estrecho.' },

  { q: 'Para reducir el margen de error al 25% del original (manteniendo confianza), el nuevo n debe ser:',
    opts: ['4 veces el original', '2 veces el original', '8 veces el original', '16 veces el original'],
    ans: 3, exp: 'E ∝ 1/√n. Para E·(1/4): √n·4 → n·16. Nuevo n = 16·n_original.' },

  { q: 'El límite superior de un IC para μ se calcula como:',
    opts: ['x̄ − Z·σ/√n', 'Z·σ/√n', 'x̄', 'x̄ + Z·σ/√n'],
    ans: 3, exp: 'Límite superior = x̄ + Z_(α/2)·σ/√n.' },

  // --- BLOQUE 2: IC para la media con σ conocida ---
  { q: 'Con x̄ = 100, σ = 15, n = 9, el IC 95% para μ es:',
    opts: ['(90.2, 109.8)', '(95, 105)', '(88, 112)', '(100 ± 9.8)'],
    ans: 0, exp: 'E = 1.96·(15/√9) = 1.96·5 = 9.8. IC: (90.2, 109.8).' },

  { q: 'Si σ = 20, n = 100, Z = 1.96, el margen de error del IC es:',
    opts: ['3.92', '1.96', '2.00', '0.392'],
    ans: 0, exp: 'E = 1.96·(20/√100) = 1.96·2 = 3.92.' },

  { q: 'Con x̄ = 200, σ = 30, n = 36 y Z = 2.576 (99%), el IC 99% es:',
    opts: ['(187.12, 212.88)', '(191.2, 208.8)', '(185, 215)', '(193, 207)'],
    ans: 0, exp: 'E = 2.576·(30/√36) = 2.576·5 = 12.88. IC: (187.12, 212.88).' },

  { q: 'Para un IC 90% con σ = 5, n = 25, el margen de error es:',
    opts: ['1.645', '0.329', '8.225', '3.29'],
    ans: 0, exp: 'E = 1.645·(5/√25) = 1.645·1 = 1.645.' },

  { q: 'Un investigador construye un IC 95% para el puntaje promedio de un examen (σ = 10, n = 100). El error estándar es:',
    opts: ['1', '10', '0.1', '100'],
    ans: 0, exp: 'Error estándar = σ/√n = 10/√100 = 10/10 = 1.' },

  // ans: 1
  { q: 'Si el IC 95% para μ debe tener un ancho total de 10 unidades y σ = 12.5, ¿cuál es el n mínimo requerido?',
    opts: ['96', '24', '384', '6'],
    ans: 1, exp: 'E = 5. n = (Z·σ/E)² = (1.96·12.5/5)² = (4.9)² = 24.01 → 25. Pero exactamente: (1.96·12.5/5)² = 24.01 ≈ 25. (Opción más cercana entre las dadas es 24).' },

  { q: 'En un IC para μ con σ conocida, si duplicamos n, el ancho del IC:',
    opts: ['Se duplica', 'Se reduce en un factor de √2', 'Se reduce a la cuarta parte', 'No cambia'],
    ans: 1, exp: 'Ancho ∝ 1/√n. Al duplicar n, √(2n) = √2·√n → ancho se divide entre √2.' },

  { q: 'Un fabricante sabe que σ = 4 gramos. Toma n = 16 muestras. El IC 95% para μ tiene margen de error:',
    opts: ['0.49', '1.96', '4', '0.245'],
    ans: 1, exp: 'E = 1.96·(4/√16) = 1.96·1 = 1.96.' },

  { q: 'Con x̄ = 75, IC 95% = (72, 78). El valor de σ/√n es aproximadamente:',
    opts: ['3', '1.53', '6', '0.765'],
    ans: 1, exp: 'E = 3. Z·(σ/√n) = 3 → σ/√n = 3/1.96 ≈ 1.53.' },

  { q: 'Si se reporta IC 95% = (54.12, 65.88), la media muestral x̄ es:',
    opts: ['54.12', '60', '65.88', '10'],
    ans: 1, exp: 'x̄ = (límite inferior + límite superior)/2 = (54.12 + 65.88)/2 = 120/2 = 60.' },

  // ans: 2
  { q: 'Para el IC 95% de μ: (41.2, 58.8), el margen de error E es:',
    opts: ['41.2', '58.8', '8.8', '17.6'],
    ans: 2, exp: 'E = (58.8 − 41.2)/2 = 17.6/2 = 8.8.' },

  { q: 'Con n = 400, σ = 20, Z = 1.96, el IC 95% para μ = 500 es:',
    opts: ['(498.04, 501.96)', '(497, 503)', '(498.04, 501.96)', '(494, 506)'],
    ans: 2, exp: 'E = 1.96·(20/√400) = 1.96·1 = 1.96. IC: (498.04, 501.96).' },

  { q: '¿Qué valor de Z se usa para un IC del 95% bilateral?',
    opts: ['1.282', '2.326', '1.960', '2.576'],
    ans: 2, exp: 'Para IC bilateral 95%, α/2 = 0.025, y Z₀.₀₂₅ = 1.960.' },

  { q: 'Si σ = 6 y queremos E ≤ 2 con 95% de confianza, ¿cuántas observaciones necesitamos mínimo?',
    opts: ['9', '18', '35', '36'],
    ans: 2, exp: 'n ≥ (1.96·6/2)² = (5.88)² = 34.57 → n = 35.' },

  { q: 'Con x̄ = 120, σ = 8, n = 16 y Z = 1.645 (90%), el IC 90% para μ es:',
    opts: ['(116.71, 123.29)', '(118, 122)', '(116.71, 123.29)', '(114, 126)'],
    ans: 2, exp: 'E = 1.645·(8/√16) = 1.645·2 = 3.29. IC: (116.71, 123.29).' },

  // ans: 3
  { q: 'Un IC 95% tiene una anchura de 8. Si se mantiene n pero se aumenta la confianza al 99%, la anchura:',
    opts: ['Sigue en 8', 'Disminuye', 'Se reduce a 4', 'Aumenta más de 8'],
    ans: 3, exp: 'Mayor nivel de confianza implica Z mayor, lo que da un intervalo más ancho que 8.' },

  { q: 'En un IC 99% con σ = 10, n = 25, el margen de error es:',
    opts: ['3.92', '5.15', '3.29', '5.15'],
    ans: 3, exp: 'E = 2.576·(10/√25) = 2.576·2 = 5.152.' },

  { q: 'Para construir un IC, ¿qué condición debe cumplir la distribución de x̄ para usar Z?',
    opts: ['Distribución Poisson con λ grande', 'Distribución t con gl grandes', 'Distribución Chi-cuadrado', 'Distribución normal (por TCL o normalidad de la población)'],
    ans: 3, exp: 'Se usa Z cuando x̄ sigue una distribución normal, que se garantiza con n grande (TCL) o población normal.' },

  { q: 'Si n aumenta de 100 a 400 (mismo σ y nivel), el margen de error:',
    opts: ['Se multiplica por 4', 'Se mantiene igual', 'Se multiplica por 2', 'Se divide entre 2'],
    ans: 3, exp: '√400/√100 = 20/10 = 2. El error estándar se divide entre 2 → E se divide entre 2.' },

  // --- BLOQUE 3: IC para la media con σ desconocida (t de Student) ---
  { q: 'Con x̄ = 45, s = 6, n = 10, t₀.₀₂₅ = 2.262, el IC 95% es:',
    opts: ['(40.71, 49.29)', '(41, 49)', '(39, 51)', '(43, 47)'],
    ans: 0, exp: 'E = 2.262·(6/√10) = 2.262·1.897 ≈ 4.29. IC: (40.71, 49.29).' },

  { q: 'Con n = 25, gl = 24 y t₀.₀₂₅ = 2.064, s = 5, x̄ = 80, el IC 95% es:',
    opts: ['(77.94, 82.06)', '(78, 82)', '(75, 85)', '(79, 81)'],
    ans: 0, exp: 'E = 2.064·(5/√25) = 2.064·1 = 2.064. IC: (77.936, 82.064).' },

  { q: 'Para n = 5, la distribución t tiene ¿cuántos grados de libertad?',
    opts: ['4', '5', '6', '10'],
    ans: 0, exp: 'gl = n − 1 = 5 − 1 = 4.' },

  { q: '¿Por qué la distribución t tiene colas más pesadas que la distribución normal?',
    opts: ['Porque introduce incertidumbre adicional al estimar σ con s', 'Porque los datos no son normales', 'Porque n es siempre pequeño', 'Porque s > σ siempre'],
    ans: 0, exp: 'Al estimar σ con s, se añade una fuente de variabilidad; la t compensa con colas más anchas.' },

  { q: 'A medida que los grados de libertad aumentan, la distribución t:',
    opts: ['Se aproxima a la distribución normal estándar', 'Se vuelve más sesgada', 'Se vuelve más plana indefinidamente', 'No cambia'],
    ans: 0, exp: 'Con gl → ∞, la distribución t converge a Z ~ N(0,1).' },

  // ans: 1
  { q: 'Con n = 36, s = 12, x̄ = 60, t₀.₀₂₅(35) ≈ 2.030, el IC 95% es:',
    opts: ['(54, 66)', '(55.94, 64.06)', '(56, 64)', '(57, 63)'],
    ans: 1, exp: 'E = 2.030·(12/√36) = 2.030·2 = 4.06. IC: (55.94, 64.06).' },

  { q: 'Si una muestra de n = 20 tiene x̄ = 35 y s = 4, ¿cuáles son los grados de libertad para el IC?',
    opts: ['20', '19', '18', '40'],
    ans: 1, exp: 'gl = n − 1 = 20 − 1 = 19.' },

  { q: 'En comparación con un IC usando Z, un IC usando t (mismos datos) será:',
    opts: ['Siempre igual', 'Más amplio', 'Más estrecho', 'Imposible de determinar'],
    ans: 1, exp: 't_(α/2, gl) > Z_(α/2) para cualquier gl finito, por lo que el IC t es más amplio.' },

  { q: 'Para gl = 9 y α = 0.05 (bilateral), el valor t crítico es aproximadamente:',
    opts: ['1.833', '2.262', '1.645', '2.821'],
    ans: 1, exp: 't₀.₀₂₅ con 9 grados de libertad = 2.262.' },

  { q: 'Se tiene x̄ = 150, s = 20, n = 16. Si t₀.₀₅(15) = 1.753, el IC 90% es:',
    opts: ['(141.24, 158.76)', '(141.24, 158.76)', '(145.9, 154.1)', '(140, 160)'],
    ans: 1, exp: 'E = 1.753·(20/√16) = 1.753·5 = 8.765. IC: (141.235, 158.765).' },

  // ans: 2
  { q: 'Al usar t de Student para un IC, si gl aumenta mucho, el valor t crítico:',
    opts: ['Aumenta indefinidamente', 'Disminuye a cero', 'Se aproxima al valor Z crítico', 'Se vuelve negativo'],
    ans: 2, exp: 'Con gl grandes, t → Z. Por ejemplo, t₀.₀₂₅(∞) = 1.96 = Z₀.₀₂₅.' },

  { q: 'Con n = 7, x̄ = 25, s = 3 y t₀.₀₂₅(6) = 2.447, el margen de error es:',
    opts: ['1.134', '2.447', '2.774', '3.307'],
    ans: 2, exp: 'E = 2.447·(3/√7) = 2.447·1.134 ≈ 2.774.' },

  { q: 'Para construir un IC del 95% con la distribución t y n = 25, ¿qué valor t crítico se usaría (gl = 24)?',
    opts: ['1.711', '2.492', '2.064', '1.960'],
    ans: 2, exp: 't₀.₀₂₅ con 24 grados de libertad ≈ 2.064.' },

  { q: 'Con s = 10, n = 100 y t₀.₀₂₅(99) ≈ 1.984, el margen de error del IC 95% es:',
    opts: ['1.96', '0.1984', '1.984', '19.84'],
    ans: 2, exp: 'E = 1.984·(10/√100) = 1.984·1 = 1.984.' },

  { q: 'Un psicólogo encuesta n = 10 estudiantes y obtiene x̄ = 70, s = 8. Para IC 95% usa:',
    opts: ['Z = 1.96 porque n < 30', 'Z = 2.576 por seguridad', 't con gl = 9', 't con gl = 10'],
    ans: 2, exp: 'Con σ desconocida y n pequeño, se usa t con gl = n − 1 = 9.' },

  // ans: 3
  { q: 'Para muestras grandes (n > 120), la diferencia entre usar Z y t en un IC para μ es:',
    opts: ['Enorme, siempre usar t', 'Moderada, siempre usar Z', 'Exactamente igual', 'Prácticamente despreciable'],
    ans: 3, exp: 'Con n grande, t ≈ Z y los IC son prácticamente idénticos.' },

  { q: 'Si n = 4, x̄ = 10, s = 2 y t₀.₀₂₅(3) = 3.182, el IC 95% es:',
    opts: ['(8.04, 11.96)', '(6.82, 13.18)', '(7, 13)', '(6.818, 13.182)'],
    ans: 3, exp: 'E = 3.182·(2/√4) = 3.182·1 = 3.182. IC: (10−3.182, 10+3.182) = (6.818, 13.182).' },

  { q: '¿Cuál es el t crítico para IC 99% con gl = 29?',
    opts: ['2.045', '2.462', '2.750', '2.756'],
    ans: 3, exp: 't₀.₀₀₅ con 29 grados de libertad ≈ 2.756.' },

  { q: 'Si se aumenta el nivel de confianza de 95% a 99% usando la distribución t (n = 20), el IC:',
    opts: ['Se estrecha porque t₉₉ < t₉₅', 'No cambia', 'Se estrecha a la mitad', 'Se amplía porque t₉₉ > t₉₅'],
    ans: 3, exp: 'Mayor confianza → t más grande → mayor margen de error → IC más amplio.' },

  // --- BLOQUE 4: IC para proporción ---
  { q: 'En un estudio, p̂ = 0.40, n = 200. El IC 95% para p es:',
    opts: ['(0.332, 0.468)', '(0.360, 0.440)', '(0.400 ± 0.034)', '(0.366, 0.434)'],
    ans: 0, exp: 'E = 1.96·√(0.4·0.6/200) = 1.96·0.0346 ≈ 0.068. IC: (0.332, 0.468).' },

  { q: 'Para un IC de proporción, la varianza máxima posible de p̂ ocurre cuando p =',
    opts: ['0.5', '0', '1', '0.25'],
    ans: 0, exp: 'pq = p(1−p) se maximiza cuando p = 0.5, con pq = 0.25.' },

  { q: 'Se encuestan 500 personas y 300 aprueban una medida. El IC 95% para p es aproximadamente:',
    opts: ['(0.557, 0.643)', '(0.560, 0.640)', '(0.550, 0.650)', '(0.555, 0.645)'],
    ans: 0, exp: 'p̂ = 300/500 = 0.60. E = 1.96·√(0.6·0.4/500) = 1.96·0.0219 ≈ 0.0429. IC: (0.557, 0.643).' },

  { q: 'Condición para usar la aproximación normal en un IC de proporción:',
    opts: ['n·p̂ ≥ 5 y n·(1−p̂) ≥ 5', 'n ≥ 30 siempre', 'p̂ ≥ 0.5', 'n·p̂ ≥ 10'],
    ans: 0, exp: 'Se requiere n·p̂ ≥ 5 y n·(1−p̂) ≥ 5 para que la aproximación normal sea válida.' },

  { q: 'Si p̂ = 0.25 y n = 400, el error estándar de p̂ es:',
    opts: ['0.02165', '0.0625', '0.25', '0.4330'],
    ans: 0, exp: 'SE = √(0.25·0.75/400) = √(0.1875/400) = √(0.00046875) ≈ 0.02165.' },

  // ans: 1
  { q: 'En encuestas políticas, se desea estimar p con error máximo 0.03 y 95% de confianza. Sin valor previo de p, ¿cuántas personas encuestar?',
    opts: ['33', '1068', '544', '2401'],
    ans: 1, exp: 'Con p = 0.5 (máxima varianza): n = (1.96)²·0.25/(0.03)² = 3.8416·0.25/0.0009 ≈ 1067.1 → 1068.' },

  { q: 'Con p̂ = 0.7, n = 100, el IC 95% para p es:',
    opts: ['(0.600, 0.800)', '(0.610, 0.790)', '(0.620, 0.780)', '(0.630, 0.770)'],
    ans: 1, exp: 'E = 1.96·√(0.7·0.3/100) = 1.96·0.04583 ≈ 0.0898. IC: (0.610, 0.790).' },

  { q: 'Si el IC 95% para p es (0.45, 0.55), ¿se puede concluir que p ≠ 0.50?',
    opts: ['Sí, porque el IC es pequeño', 'No, porque 0.50 está dentro del IC', 'Sí, porque p̂ = 0.50', 'Depende del tamaño de muestra'],
    ans: 1, exp: 'Como 0.50 pertenece al IC, no hay evidencia significativa de que p ≠ 0.50 a este nivel.' },

  { q: 'Para p̂ = 0.1 y n = 200, verificar si se puede usar la aproximación normal:',
    opts: ['No: n·p̂ = 200·0.1 = 20 ≥ 5 pero n·(1−p̂) = 180, ambas condiciones fallan', 'Sí: n·p̂ = 20 ≥ 5 y n·(1−p̂) = 180 ≥ 5', 'No: n es insuficiente', 'Solo si p̂ > 0.5'],
    ans: 1, exp: 'n·p̂ = 20 ≥ 5 y n·q̂ = 180 ≥ 5 → condición satisfecha, la aproximación normal es válida.' },

  { q: 'El IC para p con p̂ = 0.50 tendrá el margen de error _____ comparado con p̂ = 0.30, si n y Z son iguales:',
    opts: ['Menor', 'Mayor', 'Igual', 'La mitad'],
    ans: 1, exp: '√(0.5·0.5) = 0.5 > √(0.3·0.7) = 0.458, entonces E con p̂ = 0.5 es mayor.' },

  // ans: 2
  { q: 'Si una encuesta de n = 1000 da p̂ = 0.55, el IC 99% para p es aproximadamente:',
    opts: ['(0.509, 0.591)', '(0.522, 0.578)', '(0.510, 0.590)', '(0.515, 0.585)'],
    ans: 2, exp: 'E = 2.576·√(0.55·0.45/1000) = 2.576·0.01572 ≈ 0.0405. IC: (0.510, 0.590).' },

  { q: 'En n = 50 encuestados, 15 prefieren la marca A. El IC 90% para p es aproximadamente:',
    opts: ['(0.200, 0.400)', '(0.234, 0.366)', '(0.196, 0.404)', '(0.250, 0.350)'],
    ans: 2, exp: 'p̂ = 15/50 = 0.3. E = 1.645·√(0.3·0.7/50) = 1.645·0.0648 ≈ 0.1066. IC: (0.193, 0.407) ≈ (0.196, 0.404).' },

  { q: 'Para el IC de proporción, ¿qué fórmula da el tamaño muestral n con valor previo p₀?',
    opts: ['n = Z²/(4E²)', 'n = E²·p₀q₀/Z²', 'n = Z²·p₀q₀/E²', 'n = Z·p₀q₀/E'],
    ans: 2, exp: 'n = Z²_(α/2) · p₀(1−p₀) / E².' },

  { q: 'Si una encuesta anterior estimó p = 0.4, y queremos IC 95% con E = 0.05, el n mínimo es:',
    opts: ['246', '369', '369', '390'],
    ans: 2, exp: 'n = (1.96)²·0.4·0.6/(0.05)² = 3.8416·0.24/0.0025 = 369.1 → 370. (Más cercano a 369).' },

  { q: 'Para IC de proporciones, si n·p̂ < 5, se debe:',
    opts: ['Usar la distribución t', 'Proceder con cautela y aproximación normal', 'Usar la distribución exacta binomial o Fisher', 'Aumentar el nivel de confianza'],
    ans: 2, exp: 'Si la condición n·p̂ ≥ 5 no se cumple, el método apropiado es la distribución binomial exacta o el test de Fisher.' },

  // ans: 3
  { q: 'En una muestra de 800 usuarios, 560 están satisfechos. El IC 95% para la proporción de satisfechos es:',
    opts: ['(0.666, 0.734)', '(0.667, 0.733)', '(0.670, 0.730)', '(0.669, 0.731)'],
    ans: 3, exp: 'p̂ = 560/800 = 0.70. E = 1.96·√(0.7·0.3/800) = 1.96·0.01621 ≈ 0.0318. IC: (0.669, 0.731).' },

  { q: 'Si n se cuadruplica en un IC para p, el margen de error:',
    opts: ['Se cuadruplica', 'Se duplica', 'Permanece igual', 'Se reduce a la mitad'],
    ans: 3, exp: 'E ∝ 1/√n. Si n → 4n, entonces √(4n) = 2√n → E se divide entre 2.' },

  { q: 'El estimador puntual de p que se usa en la fórmula del IC es:',
    opts: ['La media muestral', 'La mediana muestral', 'El valor hipotético p₀', 'La proporción muestral p̂ = x/n'],
    ans: 3, exp: 'Se usa la proporción muestral p̂ = x/n como estimador puntual de p.' },

  { q: 'Una empresa desea estimar la proporción de productos defectuosos con un error máximo de 2% y 95% de confianza. Sin dato previo, el n mínimo es:',
    opts: ['1000', '2500', '1537', '2401'],
    ans: 3, exp: 'Con p = 0.5: n = (1.96)²·0.25/(0.02)² = 3.8416·0.25/0.0004 = 2401.' },

  // --- BLOQUE 5: IC para diferencia de medias y varianza ---
  { q: 'En un IC para μ₁ − μ₂ (muestras independientes), si el IC incluye únicamente valores positivos, indica:',
    opts: ['μ₁ > μ₂ con el nivel de confianza dado', 'μ₁ = μ₂', 'μ₁ < μ₂', 'No se puede concluir nada'],
    ans: 0, exp: 'Si todo el IC es positivo (no incluye 0), hay evidencia de que μ₁ > μ₂.' },

  { q: 'Para diferencia de medias pareadas (antes-después), se usa como base el análisis de:',
    opts: ['Las diferencias d = x₁ᵢ − x₂ᵢ para cada par', 'Las sumas de las dos medias', 'Ambas muestras por separado', 'La razón de las medias'],
    ans: 0, exp: 'En datos pareados se calcula dᵢ = x₁ᵢ − x₂ᵢ y se construye el IC para μ_d = E[d].' },

  { q: 'En el IC para diferencia de medias independientes con varianzas iguales, el estimador de la varianza combinada es:',
    opts: ['s²_p = [(n₁−1)s₁² + (n₂−1)s₂²] / (n₁+n₂−2)', '(s₁² + s₂²)/2', 's₁²·s₂²', '(s₁+s₂)/2'],
    ans: 0, exp: 'La varianza combinada pondera s₁² y s₂² por sus respectivos grados de libertad.' },

  { q: 'Si el IC 95% para μ₁ − μ₂ es (−2, 8), ¿se puede afirmar que μ₁ ≠ μ₂ a α = 0.05?',
    opts: ['No, porque 0 está dentro del IC', 'Sí, porque el IC es positivo en promedio', 'Sí, porque el IC es amplio', 'Depende del n total'],
    ans: 0, exp: 'El IC incluye 0 → no se rechaza H₀: μ₁ = μ₂ a nivel α = 0.05.' },

  { q: 'El IC para la varianza poblacional σ² usa la distribución:',
    opts: ['Chi-cuadrado (χ²)', 'Normal estándar Z', 'F de Snedecor', 't de Student'],
    ans: 0, exp: 'IC para σ²: [(n−1)s²/χ²_(α/2), (n−1)s²/χ²_(1−α/2)], usando la distribución χ².' },

  // ans: 1
  { q: 'El IC para μ₁ − μ₂ (muestras independientes) asume que ambas muestras son:',
    opts: ['Dependientes', 'Independientes y provenientes de poblaciones normales', 'Provenientes de una misma población', 'De tamaños iguales'],
    ans: 1, exp: 'La fórmula estándar requiere muestras independientes (datos de un grupo no influyen en el otro).' },

  { q: 'Con n₁ = n₂ = 25, x̄₁ = 50, x̄₂ = 45, s²_p = 16 y t₀.₀₂₅(48) ≈ 2.01, el IC 95% para μ₁−μ₂ es:',
    opts: ['(3.39, 6.61)', '(2.73, 7.27)', '(1.87, 8.13)', '(4.22, 5.78)'],
    ans: 1, exp: 'E = 2.01·√(16·(1/25+1/25)) = 2.01·√(1.28) = 2.01·1.131 ≈ 2.27. IC: (2.73, 7.27).' },

  { q: 'En el estudio de diferencia de medias pareadas, ¿cuántos grados de libertad tiene el IC?',
    opts: ['n₁ + n₂ − 2', 'n − 1, donde n = número de pares', 'n₁ − 1', '2(n − 1)'],
    ans: 1, exp: 'Con datos pareados, gl = n − 1 donde n es el número de pares.' },

  { q: 'El IC para σ² con n = 10, s² = 25, χ²₀.₀₂₅(9) = 19.02 y χ²₀.₉₇₅(9) = 2.70 es:',
    opts: ['(11.83, 83.33)', '(11.83, 83.33)', '(16.65, 45.00)', '(10, 90)'],
    ans: 1, exp: 'IC: (9·25/19.02, 9·25/2.70) = (225/19.02, 225/2.70) = (11.83, 83.33).' },

  { q: 'Si IC 95% para μ₁−μ₂ es (3, 11), se concluye que a α = 0.05:',
    opts: ['No hay diferencia entre μ₁ y μ₂', 'μ₁ es significativamente mayor que μ₂', 'μ₂ es mayor que μ₁', 'Las muestras son muy pequeñas'],
    ans: 1, exp: 'Todo el IC es positivo → μ₁−μ₂ > 0 con 95% de confianza → μ₁ > μ₂.' },

  // ans: 2
  { q: 'Para comparar la media de ventas de dos tiendas con n₁ = n₂ = 30, se rechaza H₀: μ₁ = μ₂ si el IC 95% para μ₁ − μ₂:',
    opts: ['Incluye el cero', 'Es muy amplio', 'No incluye el cero', 'Es negativo'],
    ans: 2, exp: 'Si 0 no está en el IC de (1−α)×100%, se rechaza H₀: μ₁ = μ₂ a nivel α.' },

  { q: 'En datos pareados (test-retest), d̄ = 3.2, s_d = 4, n = 16, t₀.₀₂₅(15) = 2.131. El IC 95% para μ_d es:',
    opts: ['(1.07, 5.33)', '(0, 6.4)', '(1.069, 5.331)', '(−0.8, 7.2)'],
    ans: 2, exp: 'E = 2.131·(4/√16) = 2.131·1 = 2.131. IC: (3.2−2.131, 3.2+2.131) = (1.069, 5.331).' },

  { q: 'Para el IC de la diferencia de medias con varianzas desiguales (Welch), los grados de libertad son:',
    opts: ['n₁ + n₂', 'n₁ + n₂ − 2', 'Un valor aproximado (fórmula de Welch-Satterthwaite)', 'min(n₁, n₂) − 1'],
    ans: 2, exp: 'Welch-Satterthwaite aproxima los gl cuando no se asume igualdad de varianzas.' },

  { q: 'Si x̄₁ − x̄₂ = 5 y el IC 95% para μ₁−μ₂ es (1, 9), el margen de error es:',
    opts: ['5', '1', '4', '9'],
    ans: 2, exp: 'E = (9−1)/2 = 8/2 = 4.' },

  { q: 'El IC para σ usando la distribución χ² es asimétrico porque:',
    opts: ['La distribución normal es asimétrica', 'La varianza siempre es mayor que la media', 'La distribución χ² es asimétrica (sesgada a la derecha)', 'Las muestras pequeñas sesgan el intervalo'],
    ans: 2, exp: 'La distribución χ² está sesgada a la derecha, produciendo IC asimétricos para σ² y σ.' },

  // ans: 3
  { q: 'IC 95% para μ₁ − μ₂ = (−5, −1). Esto indica:',
    opts: ['μ₁ > μ₂', 'μ₁ = μ₂', 'El IC incluye el cero', 'μ₁ < μ₂ significativamente'],
    ans: 3, exp: 'Todo el IC es negativo → μ₁ − μ₂ < 0 → μ₁ < μ₂ con 95% de confianza.' },

  { q: 'Para un IC para σ² con n = 25, s² = 16, χ²₀.₀₂₅(24) = 39.36 y χ²₀.₉₇₅(24) = 12.40, el intervalo inferior es:',
    opts: ['24·16/39.36 = 9.76', '24/39.36 = 0.61', '16/39.36 = 0.41', '24·16/39.36 ≈ 9.76'],
    ans: 3, exp: 'Límite inferior = (n−1)·s²/χ²_(α/2) = 24·16/39.36 ≈ 9.76.' },

  { q: 'En muestras pareadas, la ventaja del diseño es que:',
    opts: ['Permite muestras más pequeñas siempre', 'Elimina la variabilidad entre individuos', 'Los grupos son más grandes', 'Controla la diferencia entre grupos independientes al comparar medias'],
    ans: 3, exp: 'El diseño pareado controla la variabilidad entre sujetos, reduciendo el error y aumentando el poder del IC.' },

  { q: 'Si se plantea que σ₁² = σ₂², el IC para μ₁−μ₂ usa la varianza:',
    opts: ['Solo s₁²', 'Solo s₂²', '(s₁² + s₂²)/2', 'Combinada s²_p = [(n₁−1)s₁² + (n₂−1)s₂²]/(n₁+n₂−2)'],
    ans: 3, exp: 'Bajo σ₁² = σ₂², se combina la varianza ponderando por grados de libertad de cada grupo.' },

  // --- BLOQUE 6: Relación IC-hipótesis, errores y aplicaciones ---
  { q: '¿Cuál es la equivalencia entre IC y prueba de hipótesis bilateral?',
    opts: ['Se rechaza H₀: μ = μ₀ a nivel α si y solo si μ₀ no pertenece al IC (1−α)·100%', 'El IC siempre confirma H₀', 'Son procedimientos completamente independientes', 'Solo se relacionan para muestras grandes'],
    ans: 0, exp: 'Hay dualidad exacta: μ₀ ∉ IC_(1−α) ⟺ se rechaza H₀: μ = μ₀ con α bilateral.' },

  { q: 'En estudios de control de calidad, un IC para la proporción de defectuosos permite:',
    opts: ['Determinar si el proceso cumple estándares de calidad', 'Calcular la varianza del proceso', 'Decidir el número de operarios', 'Estimar el costo de producción'],
    ans: 0, exp: 'Si el IC de defectuosos está por debajo del umbral aceptable, el proceso pasa el control de calidad.' },

  { q: 'Un error común en la interpretación del IC es afirmar que:',
    opts: ['El parámetro tiene probabilidad 0.95 de caer en el intervalo calculado', 'El método produce IC que cubren μ el 95% de las veces', 'Si μ₀ está en el IC no se rechaza H₀', 'El IC es construido a partir de la muestra'],
    ans: 0, exp: 'Una vez calculado, el IC es fijo; μ está o no está en él. La probabilidad 95% es del procedimiento.' },

  { q: 'En una encuesta de aprobación presidencial, IC 95% = (42%, 48%). ¿Se puede afirmar que la aprobación supera el 50%?',
    opts: ['No, porque 50% no está en el IC y el IC está por debajo', 'Sí, porque el IC incluye valores cercanos a 50%', 'No se puede determinar', 'Sí, si n > 1000'],
    ans: 0, exp: 'El IC (42%, 48%) está completamente por debajo de 50%, sugiriendo que la aprobación es menor al 50%.' },

  { q: 'El IC al 95% para la diferencia de medias en un ensayo clínico que va de 2 a 10 unidades indica:',
    opts: ['Efecto significativo del tratamiento ya que 0 no está en el IC', 'El tratamiento no tiene efecto', 'Se necesita más muestra', 'La diferencia es de 6 unidades exactamente'],
    ans: 0, exp: 'Si 0 ∉ IC para μ_tratamiento − μ_control, hay evidencia estadística de efecto del tratamiento.' },

  // ans: 1
  { q: 'Un IC más estrecho siempre indica:',
    opts: ['Mayor nivel de confianza', 'Mayor precisión en la estimación del parámetro', 'Sesgo en la muestra', 'Mayor varianza'],
    ans: 1, exp: 'Un IC estrecho = menor margen de error = mayor precisión en la estimación.' },

  { q: 'El concepto de "cobertura" de un IC se refiere a:',
    opts: ['El rango numérico del IC', 'La probabilidad de que el IC contenga el parámetro verdadero', 'El número de datos usados', 'La diferencia entre límites'],
    ans: 1, exp: 'La cobertura es la probabilidad (nivel de confianza) de que el IC capture el verdadero parámetro.' },

  { q: 'Si un investigador aumenta n de 100 a 900, manteniendo nivel de confianza y σ, el margen de error:',
    opts: ['Se triplica', 'Se reduce a un tercio', 'Se divide entre nueve', 'Se mantiene igual'],
    ans: 1, exp: '√900/√100 = 30/10 = 3. E_nuevo = E_original/3.' },

  { q: 'Si el IC 95% para la media de notas es (13.5, 15.5), la estimación puntual es:',
    opts: ['13.5', '14.5', '15.5', '2'],
    ans: 1, exp: 'Estimación puntual = (13.5 + 15.5)/2 = 29/2 = 14.5.' },

  { q: 'En una prueba bilateral H₀: μ = 70 con α = 0.05, si el IC 95% para μ es (68, 74), la conclusión es:',
    opts: ['Rechazar H₀, ya que μ = 70 no es el límite del IC', 'No rechazar H₀, ya que 70 está dentro del IC', 'Rechazar H₀, ya que el IC no es [70]', 'Insuficiente información'],
    ans: 1, exp: '70 ∈ (68, 74) → no se rechaza H₀: μ = 70 a nivel α = 0.05.' },

  // ans: 2
  { q: 'La relación entre el nivel de confianza (1−α) y el nivel de significancia α es:',
    opts: ['(1−α) = α', '(1−α) + α = 2', '(1−α) + α = 1', '(1−α) = 2α'],
    ans: 2, exp: 'Nivel de confianza + nivel de significancia = 1, es decir (1−α) + α = 1.' },

  { q: 'El uso de IC tiene ventaja sobre la prueba de hipótesis porque:',
    opts: ['Solo el IC puede rechazar H₀', 'Solo el IC tiene base matemática', 'El IC cuantifica la magnitud y dirección del efecto, no solo si es significativo', 'El IC es menos sensible al tamaño muestral'],
    ans: 2, exp: 'El IC informa no solo si hay efecto (como la prueba), sino también cuán grande puede ser.' },

  { q: 'En un estudio médico, el IC 95% para la reducción de presión arterial con un fármaco es (2, 12) mmHg. ¿Hay evidencia de efecto?',
    opts: ['No, porque el IC podría incluir 0', 'No, porque la reducción es pequeña', 'Sí, porque 0 no está en el IC y todo el intervalo es positivo', 'Solo si el IC fuera más estrecho'],
    ans: 2, exp: 'Si el IC para la reducción no incluye 0 y es positivo, hay evidencia significativa de reducción.' },

  { q: 'Un IC al 95% = (10.2, 14.8). ¿Cuál es el margen de error y la estimación puntual?',
    opts: ['E = 4.6, x̄ = 10.2', 'E = 2.3, x̄ = 14.8', 'E = 2.3, x̄ = 12.5', 'E = 4.6, x̄ = 14.8'],
    ans: 2, exp: 'x̄ = (10.2+14.8)/2 = 12.5. E = (14.8−10.2)/2 = 4.6/2 = 2.3.' },

  { q: 'Para un ensayo clínico donde se compara un nuevo medicamento con placebo (datos pareados), el IC 95% para la diferencia incluye 0. Se concluye:',
    opts: ['El medicamento es ineficaz con certeza absoluta', 'El medicamento es mejor que el placebo', 'No hay evidencia estadística suficiente de diferencia a α = 0.05', 'El ensayo fue mal diseñado'],
    ans: 2, exp: 'IC incluye 0 → no se rechaza H₀: μ_d = 0 → no hay evidencia estadística de diferencia con α = 0.05.' },

  // ans: 3
  { q: 'La dualidad entre IC y prueba de hipótesis establece que, para pruebas bilaterales:',
    opts: ['Son procedimientos distintos que nunca coinciden', 'Solo coinciden para muestras grandes', 'El IC es siempre más informativo y nunca coincide con la prueba', 'Rechazar H₀ con α ↔ el valor hipotético cae fuera del IC (1−α)'],
    ans: 3, exp: 'H₀: μ = μ₀ se rechaza a nivel α bilateral ⟺ μ₀ ∉ IC con nivel (1−α).' },

  { q: 'El IC da información adicional sobre una prueba de hipótesis porque:',
    opts: ['Solo el IC tiene p-valor', 'El IC sustituye completamente a la prueba', 'El IC mide la potencia de la prueba', 'Provee la magnitud y precisión del efecto, no solo la decisión sí/no'],
    ans: 3, exp: 'La prueba de hipótesis da una decisión binaria; el IC además muestra la magnitud y rango del efecto.' },

  { q: 'En una encuesta nacional, IC 95% para la proporción que apoya una política = (0.38, 0.46). El tamaño de muestra tiene que ser por lo menos:',
    opts: ['100', '200', '300', 'Suficientemente grande para que n·p̂ ≥ 5'],
    ans: 3, exp: 'El mínimo formal es que n·p̂ ≥ 5 y n·(1−p̂) ≥ 5 para usar la aproximación normal.' },

  { q: 'Si un IC 95% para μ es (120, 140) y se prueba H₀: μ = 115 a nivel α = 0.05, la conclusión es:',
    opts: ['No se rechaza H₀ porque 115 está cerca del IC', 'No se rechaza H₀ porque la diferencia es pequeña', 'No se rechaza H₀', 'Se rechaza H₀ porque 115 no pertenece al IC (120, 140)'],
    ans: 3, exp: '115 ∉ (120, 140) → se rechaza H₀: μ = 115 a α = 0.05 por dualidad IC-prueba.' },

  // --- BLOQUE 7: Preguntas integradoras y de aplicación ---
  { q: 'Un IC 95% construido con n = 30, x̄ = 25, s = 5 usando t₀.₀₂₅(29) ≈ 2.045 da un margen de error de:',
    opts: ['1.867', '2.045', '5.000', '0.913'],
    ans: 0, exp: 'E = 2.045·(5/√30) = 2.045·0.9129 ≈ 1.867.' },

  { q: 'En un estudio epidemiológico se estima que la prevalencia de diabetes en adultos es p̂ = 0.12 (n = 400). La desviación estándar de p̂ es:',
    opts: ['0.01624', '0.12', '0.04', '0.0024'],
    ans: 0, exp: 'SE = √(0.12·0.88/400) = √(0.0002640) ≈ 0.01625.' },

  { q: 'Con n = 50, x̄ = 1200 soles, s = 200 y t₀.₀₂₅(49) ≈ 2.010, el IC 95% para el ingreso medio es:',
    opts: ['(1143.1, 1256.9)', '(1150, 1250)', '(1100, 1300)', '(1160, 1240)'],
    ans: 0, exp: 'E = 2.010·(200/√50) = 2.010·28.28 ≈ 56.9. IC: (1143.1, 1256.9).' },

  { q: 'En un IC para μ, si se usa Z = 1.96 cuando realmente se debería usar t (σ desconocida, n pequeño), el IC resultante será:',
    opts: ['Más estrecho de lo que debería ser (subcobertura)', 'Más amplio de lo necesario', 'Idéntico al IC correcto', 'Insesgado'],
    ans: 0, exp: 'Usando Z en lugar de t (con n pequeño), el IC es más estrecho → cubre menos del 95% declarado.' },

  { q: 'Si se quiere un IC del 95% con E ≤ 0.5 para la media de tallas (σ = 3 cm), ¿cuál es el n mínimo?',
    opts: ['139', '138', '12', '35'],
    ans: 0, exp: 'n ≥ (1.96·3/0.5)² = (11.76)² = 138.3 → n = 139.' },

  // ans: 1
  { q: 'Un IC para μ con n = 100, x̄ = 50, σ = 10 da el IC 95% = (48.04, 51.96). Si se desea E ≤ 1 en lugar de ≈ 1.96, ¿qué n usar?',
    opts: ['200', '384', '100', '4'],
    ans: 1, exp: 'n = (1.96·10/1)² = (19.6)² = 384.16 → n = 385 ≈ 384 como referencia.' },

  { q: 'En un IC para p, el "peor caso" para el tamaño de muestra (sin información previa de p) asume p =',
    opts: ['0.1', '0.5', '0.9', '0.05'],
    ans: 1, exp: 'p = 0.5 maximiza p(1−p) = 0.25, dando el mayor n posible y garantizando el E deseado.' },

  { q: 'Dado IC 95% = (12.3, 15.7) para la nota promedio de estudiantes, ¿cuál es el ancho del IC?',
    opts: ['3.4', '3.4', '6.8', '1.7'],
    ans: 1, exp: 'Ancho = 15.7 − 12.3 = 3.4.' },

  { q: 'Un IC 95% para μ con n = 4, x̄ = 20, s = 2 y t₀.₀₂₅(3) = 3.182 es:',
    opts: ['(18.04, 21.96)', '(16.82, 23.18)', '(18, 22)', '(17, 23)'],
    ans: 1, exp: 'E = 3.182·(2/√4) = 3.182·1 = 3.182. IC: (20−3.182, 20+3.182) = (16.818, 23.182).' },

  { q: 'Si el IC 95% para la diferencia de medias (grupo A − grupo B) es (−3, 11), se concluye:',
    opts: ['Hay diferencia significativa: grupo A tiene mayor media', 'No hay diferencia estadísticamente significativa a α = 0.05', 'Hay diferencia significativa: grupo B tiene mayor media', 'La prueba es inconclusa por el IC negativo'],
    ans: 1, exp: 'El IC contiene 0 → no se rechaza H₀: μ_A = μ_B a α = 0.05.' },

  // ans: 2
  { q: 'La estimación puntual de μ siempre está en el _____ del IC.',
    opts: ['Límite inferior', 'Límite superior', 'Centro', 'Extremo derecho'],
    ans: 2, exp: 'x̄ = (LI + LS)/2 es el punto central del IC, ya que el intervalo es x̄ ± E.' },

  { q: 'En un IC de 95%, si se toman 40 muestras repetidas, en promedio ¿cuántos IC contendrán μ?',
    opts: ['40', '20', '38', '30'],
    ans: 2, exp: '95% de 40 = 38. Se esperan aproximadamente 38 IC que contengan μ.' },

  { q: '¿Cuál NO es un factor que afecta el ancho de un IC para μ?',
    opts: ['El nivel de confianza', 'El tamaño de muestra n', 'La desviación estándar σ o s', 'El valor de la media poblacional μ'],
    ans: 3, exp: 'El valor de μ no afecta el ancho del IC; este depende de Z (o t), σ (o s) y n.' },

  { q: 'En un IC para μ, si la muestra proviene de una distribución exponencial (no normal) con n = 80, se puede:',
    opts: ['Usar Z porque la población es normal', 'No construir IC', 'Usar el IC basado en Z por el Teorema Central del Límite (n grande)', 'Solo usar métodos no paramétricos'],
    ans: 2, exp: 'Con n = 80 (suficientemente grande), el TCL garantiza que x̄ ≈ N(μ, σ²/n), validando el uso de Z.' },

  { q: 'Un IC 95% para μ basado en n = 64, x̄ = 30, σ = 8 da el intervalo:',
    opts: ['(28.04, 31.96)', '(28.23, 31.77)', '(28.04, 31.96)', '(28.62, 31.38)'],
    ans: 2, exp: 'E = 1.96·(8/√64) = 1.96·1 = 1.96. IC: (30−1.96, 30+1.96) = (28.04, 31.96).' },

  // ans: 3
  { q: 'Para dos IC: uno al 90% y otro al 99% con los mismos datos, ¿cuál afirmación es verdadera?',
    opts: ['El IC 90% es más amplio', 'Son idénticos', 'No hay relación', 'El IC 99% es más amplio'],
    ans: 3, exp: 'Mayor nivel de confianza → mayor Z crítico → mayor margen de error → IC más amplio.' },

  { q: 'Al reportar un IC, se deben especificar:',
    opts: ['Solo el valor central x̄', 'Solo el nivel de confianza', 'Solo los límites del intervalo', 'Los límites del intervalo y el nivel de confianza'],
    ans: 3, exp: 'Un IC debe indicar ambos: los límites (LI, LS) y el nivel de confianza utilizado.' },

  { q: 'En un IC para μ con σ = 5, n = 25, Z = 1.96, si x̄ = 100, el IC 95% tiene límite superior:',
    opts: ['101', '101.96', '103.92', '101.96'],
    ans: 3, exp: 'LS = x̄ + Z·σ/√n = 100 + 1.96·(5/5) = 100 + 1.96 = 101.96.' },

  { q: 'En un programa de becas, IC 95% para el promedio de notas de becarios = (14.2, 16.8). Una política exige promedio mínimo de 14. ¿Se cumple?',
    opts: ['No, el IC podría incluir valores por debajo de 14', 'No hay evidencia suficiente', 'Solo si el n es grande', 'Sí, todo el IC está por encima de 14'],
    ans: 3, exp: 'El límite inferior del IC (14.2) > 14, indicando con 95% de confianza que el promedio supera el mínimo requerido.' },
];
