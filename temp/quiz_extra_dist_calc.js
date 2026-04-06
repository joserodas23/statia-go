const EXTRA_DIST_CALC = [
  // ── NORMAL: estandarización y P(X < a) ──────────────────────────────────
  { q: 'X ~ N(170, 8²). El valor estandarizado de x = 186 es:',
    opts: ['Z = 2.00', 'Z = 0.50', 'Z = −2.00', 'Z = 1.25'],
    ans: 0, exp: 'Z = (186 − 170)/8 = 16/8 = 2.00.' },

  { q: 'X ~ N(50, 10²). P(X < 65) equivale a P(Z < ?):',
    opts: ['0.65', '1.50', '−1.50', '6.50'],
    ans: 1, exp: 'Z = (65 − 50)/10 = 15/10 = 1.50.' },

  { q: 'Si Z ~ N(0,1), P(Z < −1.645) es aproximadamente:',
    opts: ['0.9500', '0.1000', '0.8000', '0.0500'],
    ans: 3, exp: 'Por simetría, P(Z < −1.645) = 1 − P(Z < 1.645) = 1 − 0.95 = 0.05.' },

  { q: 'X ~ N(200, 25²). P(X < 150) equivale a P(Z < ?):',
    opts: ['2.00', '−0.50', '−2.00', '−6.00'],
    ans: 2, exp: 'Z = (150 − 200)/25 = −50/25 = −2.00.' },

  { q: '¿Cuál es P(Z < 0) en la distribución normal estándar?',
    opts: ['0.0000', '1.0000', '0.5000', '0.3413'],
    ans: 2, exp: 'La distribución normal es simétrica en μ=0, entonces P(Z < 0) = 0.50.' },

  { q: 'X ~ N(80, 5²). P(X < 80) es:',
    opts: ['0.5000', '0.8413', '0.1587', '0.9772'],
    ans: 0, exp: 'x = μ → Z = 0 → P(Z < 0) = 0.50 por simetría.' },

  { q: 'X ~ N(100, 20²). ¿Cuánto vale P(X < 120)?',
    opts: ['0.9772', '0.8413', '0.6915', '0.7257'],
    ans: 1, exp: 'Z = (120−100)/20 = 1.00 → P(Z < 1.00) = 0.8413.' },

  // ── NORMAL: P(X > a) ────────────────────────────────────────────────────
  { q: 'P(Z > 1.28) en N(0,1) es aproximadamente:',
    opts: ['0.1003', '0.8997', '0.9000', '0.0500'],
    ans: 0, exp: 'P(Z < 1.28) ≈ 0.8997 → P(Z > 1.28) = 1 − 0.8997 = 0.1003.' },

  { q: 'X ~ N(60, 4²). P(X > 68) es:',
    opts: ['0.9772', '0.1587', '0.0228', '0.8413'],
    ans: 2, exp: 'Z = (68−60)/4 = 2.00 → P(Z > 2.00) = 1 − 0.9772 = 0.0228.' },

  { q: 'X ~ N(30, 6²). P(X > 24) es:',
    opts: ['0.8413', '0.1587', '0.0228', '0.9772'],
    ans: 0, exp: 'Z = (24−30)/6 = −1.00 → P(Z > −1.00) = P(Z < 1.00) = 0.8413.' },

  { q: 'Para la normal N(0,1), P(Z > −2.00) es:',
    opts: ['0.0228', '0.9772', '0.9500', '0.9938'],
    ans: 1, exp: 'P(Z > −2.00) = P(Z < 2.00) = 0.9772 por simetría.' },

  { q: 'X ~ N(45, 9²). P(X > 54) es:',
    opts: ['0.8413', '0.0228', '0.1587', '0.3085'],
    ans: 2, exp: 'Z = (54−45)/9 = 1.00 → P(Z > 1.00) = 1 − 0.8413 = 0.1587.' },

  // ── NORMAL: P(a < X < b) ────────────────────────────────────────────────
  { q: 'P(−1.96 < Z < 1.96) en N(0,1) es:',
    opts: ['0.9545', '0.9500', '0.6827', '0.9973'],
    ans: 1, exp: 'El intervalo ±1.96σ corresponde al 95% de la distribución normal.' },

  { q: 'X ~ N(100, 10²). P(90 < X < 110) es aproximadamente:',
    opts: ['0.9500', '0.9545', '0.6827', '0.5000'],
    ans: 2, exp: 'Z₁ = −1, Z₂ = 1 → P(−1 < Z < 1) = 0.6827 (regla 68%).' },

  { q: 'P(−2 < Z < 0) en la distribución normal estándar es:',
    opts: ['0.9772', '0.0228', '0.4772', '0.5228'],
    ans: 2, exp: 'P(−2 < Z < 0) = P(Z < 0) − P(Z < −2) = 0.5000 − 0.0228 = 0.4772.' },

  { q: 'X ~ N(50, 5²). P(40 < X < 55) es aproximadamente:',
    opts: ['0.8185', '0.6827', '0.9772', '0.9500'],
    ans: 0, exp: 'Z₁=(40−50)/5=−2→0.0228; Z₂=(55−50)/5=1→0.8413. P=0.8413−0.0228=0.8185.' },

  { q: 'P(1.00 < Z < 2.00) en N(0,1) es aproximadamente:',
    opts: ['0.9772', '0.8413', '0.1359', '0.2718'],
    ans: 2, exp: 'P(Z < 2) − P(Z < 1) = 0.9772 − 0.8413 = 0.1359.' },

  { q: 'X ~ N(70, 10²). P(60 < X < 90) es:',
    opts: ['0.6827', '0.9545', '0.8185', '0.9750'],
    ans: 2, exp: 'Z₁=−1→0.1587; Z₂=2→0.9772. P=0.9772−0.1587=0.8185.' },

  // ── NORMAL: percentiles e inversa ───────────────────────────────────────
  { q: 'Si P(Z < c) = 0.025, el valor c es aproximadamente:',
    opts: ['−1.96', '1.96', '−1.28', '−2.33'],
    ans: 0, exp: 'Por simetría, P(Z < −1.96) = 0.025 ya que P(Z < 1.96) = 0.975.' },

  { q: 'X ~ N(100, 15²). El percentil 75 de X es aproximadamente:',
    opts: ['115.00', '107.50', '110.12', '125.00'],
    ans: 2, exp: 'El percentil 75 de N(0,1) es z≈0.674. X = 100 + 0.674·15 ≈ 110.12.' },

  { q: 'El valor z tal que P(Z < z) = 0.99 es aproximadamente:',
    opts: ['1.96', '2.33', '2.58', '1.645'],
    ans: 1, exp: 'El percentil 99 de la normal estándar es z ≈ 2.326 ≈ 2.33.' },

  { q: 'Si X ~ N(μ, σ²), P(X > 90) = 0.0228, σ = 5. ¿Cuánto vale μ?',
    opts: ['85', '80', '88', '75'],
    ans: 1, exp: 'P(X > 90) = 0.0228 → Z = 2.00. 90 = μ + 2·5 → μ = 80.' },

  // ── DISTRIBUCIÓN BINOMIAL ───────────────────────────────────────────────
  { q: 'X ~ Bin(10, 0.3). La media E(X) es:',
    opts: ['3.0', '0.3', '7.0', '10.0'],
    ans: 0, exp: 'E(X) = n·p = 10·0.3 = 3.0.' },

  { q: 'X ~ Bin(n=4, p=0.5). P(X = 2) es:',
    opts: ['0.2500', '0.3750', '0.5000', '0.1250'],
    ans: 1, exp: 'P(X=2) = C(4,2)·0.5²·0.5² = 6·0.0625 = 0.3750.' },

  { q: 'X ~ Bin(6, 0.4). La varianza Var(X) es:',
    opts: ['2.40', '1.44', '0.24', '6.00'],
    ans: 1, exp: 'Var(X) = n·p·(1−p) = 6·0.4·0.6 = 1.44.' },

  { q: 'X ~ Bin(n=3, p=0.2). P(X = 0) es:',
    opts: ['0.512', '0.096', '0.384', '0.008'],
    ans: 0, exp: 'P(X=0) = C(3,0)·0.2⁰·0.8³ = 0.8³ = 0.512.' },

  { q: 'X ~ Bin(n=5, p=0.6). P(X = 5) es:',
    opts: ['0.3456', '0.2592', '0.07776', '0.01024'],
    ans: 2, exp: 'P(X=5) = 0.6⁵ = 0.07776.' },

  { q: 'X ~ Bin(n=8, p=0.5). ¿Cuánto vale E(X)?',
    opts: ['0.5', '8.0', '4.0', '2.0'],
    ans: 2, exp: 'E(X) = n·p = 8·0.5 = 4.0.' },

  { q: 'Para usar la aproximación normal a la Binomial, deben cumplirse:',
    opts: ['n ≥ 30 siempre', 'p = 0.5', 'np ≥ 5 y n(1−p) ≥ 5', 'n·p > 1'],
    ans: 2, exp: 'Las condiciones clásicas son np≥5 y nq≥5 para que la curva normal sea buena aproximación.' },

  { q: 'X ~ Bin(n=10, p=0.1). P(X = 1) = C(10,1)·0.1¹·0.9⁹ ≈',
    opts: ['0.3874', '0.1000', '0.9000', '0.0100'],
    ans: 0, exp: 'P(X=1) = 10·0.1·0.9⁹ = 10·0.1·0.3874 ≈ 0.3874.' },

  { q: 'X ~ Bin(n=6, p=0.5). P(X ≤ 1) es:',
    opts: ['0.1094', '0.2344', '0.3438', '0.5000'],
    ans: 0, exp: 'P(X=0)=(0.5)⁶=0.015625; P(X=1)=6·0.5⁶=0.09375. Suma=0.109375≈0.1094.' },

  // ── DISTRIBUCIÓN POISSON ────────────────────────────────────────────────
  { q: 'X ~ Poisson(λ=4). La media y varianza son respectivamente:',
    opts: ['4 y 4', '4 y 2', '2 y 4', '16 y 4'],
    ans: 0, exp: 'En Poisson, E(X) = Var(X) = λ = 4.' },

  { q: 'X ~ Poisson(λ=2). P(X = 2) es:',
    opts: ['e⁻² ≈ 0.1353', '4e⁻² ≈ 0.5413', '2e⁻² ≈ 0.2707', '0.5000'],
    ans: 2, exp: 'P(X=2) = e⁻²·2²/2! = e⁻²·4/2 = 2e⁻² ≈ 0.2707.' },

  { q: 'X ~ Poisson(λ=1). P(X ≥ 1) es:',
    opts: ['0.5000', '1 − e⁻¹ ≈ 0.6321', 'e⁻¹ ≈ 0.3679', '1.0000'],
    ans: 1, exp: 'P(X ≥ 1) = 1 − P(X = 0) = 1 − e⁻¹ ≈ 0.6321.' },

  { q: 'X ~ Poisson(λ=5). P(X = 0) es:',
    opts: ['5e⁻⁵', 'e⁻⁵ ≈ 0.0067', '0.0500', '0.2500'],
    ans: 1, exp: 'P(X=0) = e⁻⁵·5⁰/0! = e⁻⁵ ≈ 0.0067.' },

  { q: 'X ~ Poisson(λ=3). P(X = 1) es:',
    opts: ['e⁻³ ≈ 0.0498', '0.3000', '3e⁻³ ≈ 0.1494', '9e⁻³/2'],
    ans: 2, exp: 'P(X=1) = e⁻³·3¹/1! = 3e⁻³ ≈ 0.1494.' },

  { q: 'La distribución Poisson es adecuada para modelar:',
    opts: ['Proporciones de éxito', 'Número de eventos raros en un intervalo fijo', 'Tiempos de vida', 'Medias de muestras grandes'],
    ans: 1, exp: 'Poisson modela conteos de eventos raros e independientes en tiempo/espacio fijo.' },

  { q: 'X ~ Poisson(λ=2). P(X = 3) = e⁻²·8/6 ≈',
    opts: ['0.2707', '0.0902', '0.1804', '0.3613'],
    ans: 2, exp: 'P(X=3) = e⁻²·2³/3! = e⁻²·8/6 ≈ 0.1353·1.333 ≈ 0.1804.' },

  // ── DISTRIBUCIÓN t de STUDENT ───────────────────────────────────────────
  { q: 'Una muestra de n = 15 observaciones. Los grados de libertad de la t son:',
    opts: ['15', '14', '13', '16'],
    ans: 1, exp: 'gl = n − 1 = 15 − 1 = 14.' },

  { q: 'La distribución t de Student se parece a N(0,1) cuando:',
    opts: ['La muestra es pequeña', 'Los grados de libertad tienden a infinito', 'σ es desconocida', 'p = 0.5'],
    ans: 1, exp: 'Con gl → ∞ la distribución t converge a la normal estándar N(0,1).' },

  { q: 'Comparando t y Z con el mismo α, el valor crítico t es:',
    opts: ['Mayor que z (colas más pesadas)', 'Igual a z', 'Menor que z', 'Depende del p-valor'],
    ans: 0, exp: 'La distribución t tiene colas más pesadas que Z → valor crítico mayor.' },

  { q: 'Para n = 25 y α = 0.05 bilateral, el t crítico (gl=24) es aproximadamente:',
    opts: ['2.064', '1.711', '1.960', '2.492'],
    ans: 0, exp: 't₀.₀₂₅,₂₄ ≈ 2.064 (de tabla t de Student con 24 gl, cola bilateral).' },

  { q: 'Se usa t de Student (y no Z) cuando:',
    opts: ['n ≥ 30 y σ conocida', 'Se comparan proporciones', 'n < 30 y σ desconocida', 'Los datos son nominales'],
    ans: 2, exp: 'Con n pequeño y σ desconocida, la incertidumbre extra justifica usar la distribución t.' },

  { q: 'Con n=10 y S=8, el estadístico t para H₀:μ=50 con x̄=54 es:',
    opts: ['t = 0.50', 't = 3.16', 't = 1.58', 't = 5.00'],
    ans: 2, exp: 't = (54−50)/(8/√10) = 4/2.53 ≈ 1.58.' },

  // ── DISTRIBUCIÓN CHI-CUADRADO ───────────────────────────────────────────
  { q: 'La distribución Chi-cuadrado (χ²) con k grados de libertad tiene media:',
    opts: ['k', 'k/2', '√k', '2k'],
    ans: 0, exp: 'E(χ²) = k y Var(χ²) = 2k.' },

  { q: 'Para contrastar H₀: σ² = σ₀², el estadístico es:',
    opts: ['χ² = (n−1)S²/σ₀²', 'χ² = nS²/σ²', 'χ² = S²/σ₀²', 'χ² = (S−σ₀)/σ₀'],
    ans: 0, exp: 'El estadístico de prueba para varianza es (n−1)S²/σ₀² ~ χ²(n−1).' },

  { q: 'La distribución χ² es asimétrica y toma únicamente valores:',
    opts: ['Entre −1 y 1', 'No negativos (≥ 0)', 'Enteros positivos', 'Entre 0 y 1'],
    ans: 1, exp: 'χ² = suma de cuadrados de normales estándar → siempre ≥ 0.' },

  { q: 'Con n = 20, los grados de libertad del estadístico χ² para varianza son:',
    opts: ['20', '18', '19', '21'],
    ans: 2, exp: 'gl = n − 1 = 19.' },

  { q: 'Un IC al 95% para σ² con n=10 usa los percentiles χ²:',
    opts: ['χ²₀.₀₂₅,₉ y χ²₀.₉₇₅,₉', 'χ²₀.₀₅,₉ y χ²₀.₉₅,₉', 'χ²₀.₀₅,₁₀ y χ²₀.₉₅,₁₀', 'χ²₀.₀₂₅,₁₀ y χ²₀.₉₇₅,₁₀'],
    ans: 0, exp: 'Con n−1=9 gl, se usan los percentiles 2.5% y 97.5% de χ²(9).' },

  // ── DISTRIBUCIÓN F ──────────────────────────────────────────────────────
  { q: 'La distribución F de Fisher-Snedecor se define como cociente de:',
    opts: ['Dos variables χ² independientes divididas entre sus gl', 'Dos distribuciones t', 'Una t y una χ²', 'Dos normales'],
    ans: 0, exp: 'F = (χ²₁/gl₁)/(χ²₂/gl₂), cociente de dos chi-cuadrado independientes escaladas.' },

  { q: 'Para comparar varianzas σ₁² y σ₂² el estadístico es:',
    opts: ['F = (S₁−S₂)/S', 'F = S₁²/S₂²', 'F = S₁·S₂', 'F = σ₁/σ₂'],
    ans: 1, exp: 'Se construye F = S₁²/S₂² que sigue una distribución F bajo H₀: σ₁²=σ₂².' },

  { q: 'La distribución F con gl₁=5 y gl₂=10 tiene media:',
    opts: ['5/10 = 0.5', '10/8 = 1.25', '15/2 = 7.5', '1.00'],
    ans: 1, exp: 'E(F) = gl₂/(gl₂−2) = 10/8 = 1.25 (para gl₂ > 2).' },

  { q: 'En ANOVA, el estadístico F se calcula como:',
    opts: ['CME(dentro)/CME(entre)', 'SC(entre)/SC(total)', 'CME(entre)/CME(dentro)', 'gl(entre)/gl(dentro)'],
    ans: 2, exp: 'F = CM_Entre / CM_Dentro = (SC_entre/gl_entre) / (SC_dentro/gl_dentro).' },

  { q: 'Si F calculado es mucho mayor que 1 en ANOVA, indica:',
    opts: ['Los grupos son iguales', 'Mayor variabilidad entre grupos que dentro', 'La varianza es cero', 'Error en la prueba'],
    ans: 1, exp: 'F >> 1 señala que la varianza entre grupos domina a la varianza dentro → diferencias reales.' },

  // ── TEOREMA CENTRAL DEL LÍMITE ──────────────────────────────────────────
  { q: 'El Teorema Central del Límite establece que X̄ se distribuye aproximadamente normal cuando:',
    opts: ['n es suficientemente grande (n ≥ 30)', 'La población es normal', 'p = 0.5', 'σ es conocida'],
    ans: 0, exp: 'El TCL garantiza normalidad aproximada de X̄ para n grande, independiente de la distribución original.' },

  { q: 'Si X tiene μ=80 y σ=20, con n=100, la distribución de X̄ es:',
    opts: ['N(80, 20)', 'N(80, 400)', 'N(80, 4)', 'N(80, 2)'],
    ans: 2, exp: 'X̄ ~ N(μ, σ²/n) = N(80, 400/100) = N(80, 4). La desviación estándar de X̄ es σ/√n = 2.' },

  { q: 'El error estándar de X̄ es σ/√n. Si n se cuadruplica, el error estándar:',
    opts: ['Se duplica', 'Se reduce a la mitad', 'No cambia', 'Se cuadruplica'],
    ans: 1, exp: 'σ/√(4n) = σ/(2√n) = (σ/√n)/2 → se reduce a la mitad.' },

  { q: 'X ~ cualquier distribución con μ=50, σ=10. Para n=64, P(X̄ < 52) es P(Z < ?):',
    opts: ['0.20', '1.60', '0.80', '2.00'],
    ans: 1, exp: 'Z = (52−50)/(10/√64) = 2/(10/8) = 2/1.25 = 1.60.' },

  { q: 'La desviación estándar de la distribución muestral de X̄ se llama:',
    opts: ['Desviación estándar poblacional', 'Coeficiente de variación', 'Error estándar', 'Rango intercuartílico'],
    ans: 2, exp: 'σ_X̄ = σ/√n es el error estándar (standard error) de la media.' },

  { q: 'X ~ Exp(λ=1) → μ=1, σ=1. Con n=36, P(X̄ > 1.2) es P(Z > ?):',
    opts: ['0.20', '7.20', '1.20', '0.033'],
    ans: 2, exp: 'Por TCL: Z = (1.2−1)/(1/√36) = 0.2/0.167 ≈ 1.20.' },

  { q: 'El TCL es útil en inferencia estadística porque:',
    opts: ['Garantiza que la población sea normal', 'Permite usar tablas normales sin importar la distribución original', 'Aumenta el tamaño de muestra', 'Elimina errores de muestreo'],
    ans: 1, exp: 'El TCL justifica el uso de procedimientos basados en normal (Z, t) aunque la población no sea normal.' },

  // ── P(X < a) vs P(X ≤ a) en continuas ─────────────────────────────────
  { q: 'Para X continua, P(X < 5) y P(X ≤ 5) son:',
    opts: ['Diferentes siempre', 'P(X ≤ 5) es mayor', 'Solo iguales si X ~ N', 'Iguales (mismo valor)'],
    ans: 3, exp: 'En distribuciones continuas, P(X = c) = 0 para cualquier c, por lo que P(X < c) = P(X ≤ c).' },

  { q: 'Para X discreta ~ Bin(5, 0.5), P(X < 3) y P(X ≤ 3) son:',
    opts: ['Iguales', 'P(X<3) > P(X≤3)', 'Ambos son 0.5', 'Diferentes: P(X<3) = P(X≤2) mientras P(X≤3) incluye X=3'],
    ans: 3, exp: 'En distribuciones discretas P(X < 3) = P(X ≤ 2) ≠ P(X ≤ 3) porque P(X=3) > 0.' },

  { q: 'Cuando X ~ N(0,1) (continua), P(Z = 1.5) vale:',
    opts: ['0.1295', '0.9332', '0.0668', '0 (exactamente cero)'],
    ans: 3, exp: 'En distribuciones continuas, la probabilidad de un punto exacto es siempre 0.' },

  // ── CONDICIONES DE USO ──────────────────────────────────────────────────
  { q: 'Se debe usar la distribución t (y no Z) cuando:',
    opts: ['n ≥ 30 y σ conocida', 'Los datos son categoriales', 'Se modela conteo de eventos', 'σ es desconocida y n es pequeño'],
    ans: 3, exp: 'Con σ desconocida y muestra pequeña, S introduce variabilidad extra → se usa t con n−1 gl.' },

  { q: 'La distribución Poisson es una buena aproximación a la Binomial cuando:',
    opts: ['n pequeño y p grande', 'n·p ≥ 30', 'p = 0.5', 'n grande y p pequeño (np finito)'],
    ans: 3, exp: 'Poisson ≈ Bin cuando n → ∞, p → 0 con λ = np constante.' },

  { q: '¿Cuándo es apropiado usar la distribución chi-cuadrado?',
    opts: ['Para comparar dos medias', 'Para modelos de regresión múltiple', 'Para proporciones con n pequeño', 'Para pruebas sobre varianza o bondad de ajuste'],
    ans: 3, exp: 'χ² se usa en pruebas de varianza, independencia y bondad de ajuste.' },

  { q: 'La distribución F es adecuada para:',
    opts: ['Comparar dos medias con σ desconocida', 'Modelar tiempos entre eventos', 'Calcular percentiles de la normal', 'Comparar dos varianzas o en ANOVA'],
    ans: 3, exp: 'F se usa cuando se compara la razón de dos varianzas o en tablas ANOVA.' },

  { q: '¿En qué situación se usa la distribución Binomial?',
    opts: ['Conteo de eventos en tiempo continuo', 'n ensayos independientes con probabilidad p constante de éxito', 'Muestras con reemplazo de población infinita', 'Comparación de k medias'],
    ans: 1, exp: 'La Binomial requiere: n fijo, cada ensayo independiente, solo dos resultados, p constante.' },

  // ── ERRORES COMUNES ──────────────────────────────────────────────────────
  { q: 'Un estudiante calcula P(X < 120) para X ~ N(100,20) sin estandarizar. ¿Cuál es el error?',
    opts: ['No usó Z=(X−μ)/σ para pasar a N(0,1)', 'Usó la fórmula correcta', 'Debió usar la distribución t', 'El error es no usar la tabla binomial'],
    ans: 0, exp: 'Hay que estandarizar: Z=(120−100)/20=1.00 y luego consultar la tabla N(0,1).' },

  { q: 'Si σ es desconocida y n=12, usar Z en lugar de t produce:',
    opts: ['Intervalos más amplios de lo necesario', 'Ninguna diferencia práctica', 'Error de tipo I reducido', 'Intervalos de confianza demasiado estrechos (subestima la incertidumbre)'],
    ans: 3, exp: 'Z da valores críticos menores que t → IC más angostos → subestima la variabilidad real.' },

  { q: 'Usar Binomial cuando los ensayos no son independientes produce:',
    opts: ['Solo un pequeño sesgo', 'Resultados idénticos a Poisson', 'IC más amplios', 'Probabilidades incorrectas (modelo inaplicable)'],
    ans: 3, exp: 'La independencia es requisito de la Binomial. Sin ella el modelo no es válido.' },

  { q: 'El error de aplicar la fórmula de Poisson con λ variable en el tiempo es:',
    opts: ['Poisson requiere λ constante; con λ variable se necesita otro modelo', 'Solo cambia la media', 'Da la misma probabilidad', 'No existe tal error'],
    ans: 0, exp: 'Poisson asume tasa λ constante. Con λ variable el modelo deja de ser válido.' },

  // ── CÁLCULOS NUMÉRICOS ADICIONALES ──────────────────────────────────────
  { q: 'X ~ N(170, 64). P(X < 162) = P(Z < ?):',
    opts: ['1.00', '−0.50', '2.00', '−1.00'],
    ans: 3, exp: 'σ = √64 = 8. Z = (162−170)/8 = −8/8 = −1.00.' },

  { q: 'X ~ N(200, 100). P(185 < X < 215) es:',
    opts: ['0.6827', '0.9500', '0.7734', '0.8664'],
    ans: 3, exp: 'σ=10. Z₁=(185−200)/10=−1.5; Z₂=(215−200)/10=1.5. P=0.9332−0.0668=0.8664.' },

  { q: 'X ~ Bin(n=20, p=0.3). E(X) y Var(X) son:',
    opts: ['6 y 6', '4.2 y 6', '0.3 y 0.21', '6 y 4.2'],
    ans: 3, exp: 'E(X)=20·0.3=6; Var(X)=20·0.3·0.7=4.2.' },

  { q: 'X ~ Poisson(λ=6). La desviación estándar de X es:',
    opts: ['6', '36', '3', '√6 ≈ 2.449'],
    ans: 3, exp: 'Var(X)=λ=6 → DE = √6 ≈ 2.449.' },

  { q: 'X ~ N(0,1). P(|Z| < 2.576) es aproximadamente:',
    opts: ['0.9500', '0.9950', '0.9545', '0.9900'],
    ans: 3, exp: 'El intervalo ±2.576 corresponde al 99% de la distribución normal estándar.' },

  { q: 'Si X ~ N(μ, σ²) y Z = (X−μ)/σ, entonces Z tiene distribución:',
    opts: ['N(μ, σ²)', 't con n−1 gl', 'χ² con 1 gl', 'N(0,1)'],
    ans: 3, exp: 'La estandarización transforma cualquier normal en la normal estándar N(0,1).' },

  { q: 'X ~ N(50, 25). El percentil 84.13 de X es:',
    opts: ['60', '45', '75', '55'],
    ans: 3, exp: 'P(Z < 1) ≈ 0.8413 → x = μ + z·σ = 50 + 1·5 = 55.' },

  { q: 'Con μ=10, σ=2, n=16: el error estándar de X̄ es:',
    opts: ['2.0', '0.5', '0.125', '4.0'],
    ans: 1, exp: 'EE = σ/√n = 2/√16 = 2/4 = 0.5.' },

  { q: 'X ~ N(100, 9). P(X > 103) = P(Z > ?):',
    opts: ['3.00', '0.33', '0.11', '1.00'],
    ans: 3, exp: 'σ=√9=3. Z = (103−100)/3 = 3/3 = 1.00.' },

  { q: 'X ~ Bin(10, 0.2). P(X = 0) = 0.8¹⁰ ≈',
    opts: ['0.1074', '0.2000', '0.8000', '0.0000'],
    ans: 0, exp: 'P(X=0) = C(10,0)·0.2⁰·0.8¹⁰ = 0.8¹⁰ ≈ 0.1074.' },

  { q: 'X ~ N(75, 100). ¿Cuál es P(65 < X < 85)?',
    opts: ['0.9545', '0.9500', '0.7734', '0.6827'],
    ans: 3, exp: 'σ=10. Z₁=(65−75)/10=−1; Z₂=(85−75)/10=1. P(−1<Z<1)=0.6827.' },

  { q: 'X ~ Poisson(λ=0.5). P(X = 0) es:',
    opts: ['0.5000', '1−e⁻⁰·⁵', '0.3679', 'e⁻⁰·⁵ ≈ 0.6065'],
    ans: 3, exp: 'P(X=0) = e⁻⁰·⁵ ≈ 0.6065.' },

  { q: 'Para n=9, x̄=42, S=6, t con μ₀=39:',
    opts: ['t = 0.50', 't = 3.00', 't = 9.00', 't = 1.50'],
    ans: 3, exp: 't = (42−39)/(6/√9) = 3/(6/3) = 3/2 = 1.50.' },

  { q: 'X ~ N(60, 16). P(X < 56) = P(Z < ?):',
    opts: ['1.00', '−0.25', '−4.00', '−1.00'],
    ans: 3, exp: 'σ=√16=4. Z=(56−60)/4=−4/4=−1.00.' },

  { q: 'X ~ Bin(n=4, p=0.3). P(X = 1) = C(4,1)·0.3¹·0.7³ es:',
    opts: ['0.0081', '0.2401', '0.3087', '0.4116'],
    ans: 3, exp: 'P(X=1) = 4·0.3·0.343 = 4·0.1029 = 0.4116.' },

  { q: 'X ~ N(25, 4). P(X > 27) es:',
    opts: ['0.8413', '0.0228', '0.6915', '0.1587'],
    ans: 3, exp: 'Z=(27−25)/2=1.00 → P(Z>1.00)=1−0.8413=0.1587.' },

  { q: 'X ~ Poisson(λ=4). P(X ≤ 0) es:',
    opts: ['0.0400', '1−e⁻⁴', '0.5000', 'e⁻⁴ ≈ 0.0183'],
    ans: 3, exp: 'P(X≤0) = P(X=0) = e⁻⁴ ≈ 0.0183.' },

  { q: 'X ~ N(0,1). P(Z < 2.58) es aproximadamente:',
    opts: ['0.9900', '0.9750', '0.9938', '0.9951'],
    ans: 3, exp: 'De la tabla normal, P(Z < 2.58) ≈ 0.9951.' },

  { q: 'X ~ N(100, 225). El valor de σ es:',
    opts: ['225', '√100 = 10', '7.5', '15'],
    ans: 3, exp: 'La notación N(μ, σ²) con σ²=225 → σ=√225=15.' },

  { q: 'X ~ N(40, 36). P(34 < X < 46) es:',
    opts: ['0.9545', '0.9500', '0.8186', '0.6827'],
    ans: 3, exp: 'σ=6. Z₁=(34−40)/6=−1; Z₂=(46−40)/6=1. P(−1<Z<1)=0.6827.' },

  { q: 'X ~ N(μ=500, σ=50). P(X > 600) ≈',
    opts: ['0.9772', '0.9500', '0.0500', '0.0228'],
    ans: 3, exp: 'Z=(600−500)/50=2.00. P(Z>2.00)=1−0.9772=0.0228.' },

  { q: 'Para la distribución t con 30 gl, el valor t₀.₀₂₅ es aproximadamente:',
    opts: ['1.960', '2.750', '1.697', '2.042'],
    ans: 3, exp: 'Con 30 gl, el percentil 97.5% de la t es ≈ 2.042 (se acerca a 1.96 de N).' },

  { q: 'X ~ N(1000, 400). P(980 < X < 1020) es:',
    opts: ['0.9545', '0.9500', '0.3829', '0.6827'],
    ans: 3, exp: 'σ=20. Z₁=(980−1000)/20=−1; Z₂=(1020−1000)/20=1. P(−1<Z<1)=0.6827.' },

  { q: 'La regla "68-95-99.7" dice que P(μ−3σ < X < μ+3σ) ≈:',
    opts: ['0.9545', '0.6827', '0.9500', '0.9973'],
    ans: 3, exp: 'El intervalo ±3σ contiene aproximadamente el 99.73% de la distribución.' },

  { q: 'Si X̄ ~ N(μ, σ²/n), al aumentar n el IC se vuelve:',
    opts: ['Más ancho', 'Igual', 'Depende de μ', 'Más estrecho (más preciso)'],
    ans: 3, exp: 'Mayor n → menor σ/√n → IC más estrecho → mayor precisión.' },

  { q: 'X ~ N(90, 100). Para P(X < c) = 0.95, c es:',
    opts: ['96.45', '91.645', '108.00', '106.45'],
    ans: 3, exp: 'z₀.₉₅ ≈ 1.645. c = 90 + 1.645·10 = 90 + 16.45 = 106.45.' },

  { q: 'X ~ Bin(n=100, p=0.02). Usando Poisson como aproximación, λ =',
    opts: ['0.02', '98', '100', '2'],
    ans: 3, exp: 'λ = n·p = 100·0.02 = 2. Poisson ≈ Binomial cuando n grande y p pequeño.' },

  { q: 'X ~ N(30, 16). P(X < 22) = P(Z < −2.00) ≈',
    opts: ['0.9772', '0.0500', '0.1587', '0.0228'],
    ans: 3, exp: 'σ=4. Z=(22−30)/4=−2.00. P(Z<−2.00)=0.0228.' },

  { q: 'Con n=25, S=10, x̄=105 y μ₀=100, t = (x̄−μ₀)/(S/√n) =',
    opts: ['0.50', '5.00', '1.00', '2.50'],
    ans: 3, exp: 't = (105−100)/(10/√25) = 5/(10/5) = 5/2 = 2.50.' },
];
