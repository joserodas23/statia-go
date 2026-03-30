/* ============================================
   STATIA GO — js/core/quiz.js
   Sistema de quizzes gamificados tipo Duolingo
   Banco de preguntas por módulo, XP y niveles
   by Jose Rodas
   ============================================ */

const Quiz = {

  // ===== NIVELES =====
  levels: [
    { name: 'Aprendiz',       icon: '🌱', min: 0    },
    { name: 'Estudiante',     icon: '📚', min: 100  },
    { name: 'Estadístico',    icon: '📊', min: 300  },
    { name: 'Data Scientist', icon: '💡', min: 600  },
    { name: 'Maestro',        icon: '🎓', min: 1000 },
  ],

  // ===== ESTADO (localStorage) =====
  _state: { xp: 0, completed: {} },

  init() {
    try {
      const saved = JSON.parse(localStorage.getItem('statia_quiz') || '{}');
      this._state.xp        = saved.xp        || 0;
      this._state.completed = saved.completed  || {};
    } catch { this._state = { xp: 0, completed: {} }; }
  },

  _save() {
    localStorage.setItem('statia_quiz', JSON.stringify(this._state));
  },

  getLevel(xp) {
    let lv = this.levels[0];
    for (const l of this.levels) { if (xp >= l.min) lv = l; }
    return lv;
  },

  nextLevel(xp) {
    for (const l of this.levels) { if (xp < l.min) return l; }
    return null;
  },

  addXP(amount) {
    this._state.xp += amount;
    this._save();
  },

  isCompleted(mod) { return !!this._state.completed[mod]; },

  markCompleted(mod, score) {
    if (!this._state.completed[mod] || score > (this._state.completed[mod].best || 0)) {
      this._state.completed[mod] = { best: score, date: new Date().toLocaleDateString() };
      this._save();
    }
  },

  // ===== BANCO DE PREGUNTAS =====
  // Formato: { q, opts:[4 opciones], ans: índice correcto (0-3), exp: explicación }
  banks: {

    nominal: [
      { q: '¿Cuál de las siguientes es una variable nominal?',
        opts: ['Color de ojos', 'Temperatura corporal', 'Número de hijos', 'Calificación de 1 a 10'],
        ans: 0, exp: 'El color de ojos es una categoría sin orden ni valor numérico — típica variable nominal.' },
      { q: '¿Qué medida de tendencia central corresponde a la variable nominal?',
        opts: ['Moda', 'Media', 'Mediana', 'Varianza'],
        ans: 0, exp: 'Solo la moda tiene sentido en nominal; la media y mediana requieren orden o valores numéricos.' },
      { q: 'En el conjunto {A, B, A, C, A, B, C, A}, la moda es:',
        opts: ['A', 'B', 'C', 'No hay moda'],
        ans: 0, exp: 'A aparece 4 veces, B 2 veces, C 2 veces. La moda es A.' },
      { q: '¿Cuál NO es una variable nominal?',
        opts: ['Nivel de satisfacción (malo, regular, bueno)', 'Género', 'Color de cabello', 'Marca de automóvil'],
        ans: 0, exp: 'Nivel de satisfacción tiene un orden implícito → es ordinal, no nominal.' },
      { q: '¿Qué gráfico es más adecuado para resumir una variable nominal?',
        opts: ['Diagrama de barras o pastel', 'Histograma', 'Box plot', 'Diagrama de dispersión'],
        ans: 0, exp: 'Barras y pastel muestran frecuencias de categorías. El histograma es para variables continuas.' },
      { q: 'El estado civil (soltero, casado, divorciado) es una variable:',
        opts: ['Nominal', 'Ordinal', 'Discreta', 'Continua'],
        ans: 0, exp: 'Las categorías no tienen orden natural entre sí → es nominal.' },
      { q: 'Una encuesta registra el deporte favorito de 50 estudiantes. El tipo de variable es:',
        opts: ['Nominal', 'Ordinal', 'Discreta', 'Continua'],
        ans: 0, exp: 'Deporte favorito es una categoría sin orden → nominal.' },
      { q: 'La frecuencia relativa en nominal se calcula como:',
        opts: ['nᵢ / n', 'nᵢ × n', 'nᵢ − n', '√nᵢ'],
        ans: 0, exp: 'Frecuencia relativa = conteo de la categoría / total de observaciones.' },
      { q: 'Un gráfico de pastel es apropiado cuando:',
        opts: ['Hay pocas categorías nominales y se quiere mostrar proporción del total', 'Los datos son continuos', 'Se comparan tendencias en el tiempo', 'Los valores son negativos'],
        ans: 0, exp: 'El pastel muestra partes de un todo — ideal para ≤5 categorías nominales sin orden.' },
      { q: '¿Puede calcularse la media aritmética en una variable nominal?',
        opts: ['No, las categorías no tienen valor numérico real', 'Sí, siempre', 'Sí, si hay más de 2 categorías', 'Solo si hay orden implícito'],
        ans: 0, exp: 'En nominal no existe distancia entre categorías, por lo que la media no tiene sentido.' },
    ],

    ordinal: [
      { q: '¿Cuál de las siguientes es una variable ordinal?',
        opts: ['Nivel de satisfacción (muy insatisfecho … muy satisfecho)', 'Peso en kg', 'Número de hermanos', 'Color de ojos'],
        ans: 0, exp: 'Nivel de satisfacción tiene categorías con orden pero sin distancia fija → ordinal.' },
      { q: 'La escala Likert de 5 puntos (1 = muy en desacuerdo … 5 = muy de acuerdo) es:',
        opts: ['Ordinal', 'Continua', 'Discreta exacta', 'Nominal'],
        ans: 0, exp: 'Los puntos tienen orden pero la distancia entre "1 y 2" no es necesariamente igual a la de "4 y 5".' },
      { q: '¿Qué medidas son válidas para variable ordinal?',
        opts: ['Moda y mediana', 'Media y varianza', 'Solo la media', 'Solo la moda'],
        ans: 0, exp: 'La mediana tiene sentido porque los datos pueden ordenarse; la media aritmética no es apropiada.' },
      { q: 'El nivel educativo (primaria, secundaria, universidad) es:',
        opts: ['Ordinal', 'Nominal', 'Continua', 'Discreta'],
        ans: 0, exp: 'Existe un orden claro entre los niveles, pero la distancia entre ellos no es fija → ordinal.' },
      { q: 'En datos ordinales con valores {1,2,3,2,1,3,3}, la mediana es:',
        opts: ['2', '1', '3', 'No existe'],
        ans: 0, exp: 'Ordenados: 1,1,2,2,3,3,3 → el valor central (posición 4) es 2.' },
      { q: '¿Cuál es la principal diferencia entre ordinal y nominal?',
        opts: ['Ordinal tiene orden entre categorías; nominal no', 'Ordinal es numérica; nominal es cualitativa', 'Son iguales', 'Nominal tiene orden; ordinal no'],
        ans: 0, exp: 'La clave es el orden: en ordinal las categorías tienen jerarquía, en nominal no.' },
      { q: 'Rango de una distribución ordinal {bajo, medio, alto, alto, bajo}: la moda es:',
        opts: ['Alto', 'Bajo', 'Medio', 'No hay moda'],
        ans: 0, exp: '"Alto" y "Bajo" aparecen 2 veces cada uno — hay dos modas (bimodal). Se acepta "alto" como primera respuesta.' },
      { q: 'Para comparar dos grupos en variable ordinal, la prueba más adecuada es:',
        opts: ['Mann-Whitney U', 'Prueba t de Student', 'ANOVA', 'Chi² de bondad de ajuste'],
        ans: 0, exp: 'Mann-Whitney es no paramétrico y funciona con rangos, adecuado para ordinales.' },
      { q: '¿Puede haber más de una moda en una distribución ordinal?',
        opts: ['Sí, se llama bimodal o multimodal', 'No, siempre hay solo una moda', 'Solo si los datos son pares', 'No existe moda en ordinal'],
        ans: 0, exp: 'Si dos o más categorías tienen la misma frecuencia máxima, la distribución es bimodal o multimodal.' },
      { q: 'Temperatura en escala de valoración (frío, tibio, caliente) es:',
        opts: ['Ordinal', 'Continua', 'Discreta', 'Nominal'],
        ans: 0, exp: 'Hay orden (frío < tibio < caliente) pero no distancia numérica exacta → ordinal.' },
    ],

    discreta: [
      { q: '¿Cuál es una variable discreta?',
        opts: ['Número de hijos por familia', 'Temperatura en °C', 'Peso en kg', 'Talla en cm'],
        ans: 0, exp: 'El número de hijos solo toma valores enteros no negativos → discreta.' },
      { q: 'El número de defectos por página en un libro es:',
        opts: ['Discreta', 'Continua', 'Nominal', 'Ordinal'],
        ans: 0, exp: 'Los defectos se cuentan en enteros (0, 1, 2, …) → discreta.' },
      { q: '¿Qué distribución modela mejor el número de llegadas por hora a una tienda?',
        opts: ['Poisson', 'Normal', 't de Student', 'F de Fisher'],
        ans: 0, exp: 'Poisson modela el conteo de eventos en un intervalo de tiempo o espacio fijo.' },
      { q: 'Para datos discretos {0,1,2,3} con frecuencias {5,10,8,2}, la media es:',
        opts: ['1.44', '1.50', '2.00', '1.00'],
        ans: 0, exp: 'Media = (0·5 + 1·10 + 2·8 + 3·2) / 25 = (0+10+16+6)/25 = 32/25 = 1.44' },
      { q: 'La varianza de una variable discreta se calcula como:',
        opts: ['Σ(xᵢ − x̄)² · fᵢ / n', 'Σ xᵢ · fᵢ / n', 'Σ fᵢ / n', 'Σ(xᵢ)² / n'],
        ans: 0, exp: 'Es el promedio ponderado de las desviaciones cuadráticas respecto a la media.' },
      { q: 'El número de goles en un partido de fútbol sigue distribución:',
        opts: ['Poisson (aproximadamente)', 'Normal', 'Uniforme', 'Exponencial'],
        ans: 0, exp: 'Los goles son eventos discretos en tiempo fijo → Poisson es la aproximación clásica.' },
      { q: '¿Cuántos valores puede tomar una variable discreta?',
        opts: ['Finitos o infinitos contables', 'Infinitos no contables', 'Solo finitos', 'Solo infinitos'],
        ans: 0, exp: 'Discreta incluye finitos (cara/cruz) e infinitos contables (0, 1, 2, …).' },
      { q: 'El coeficiente de variación CV sirve para:',
        opts: ['Comparar dispersión relativa entre variables con distinta escala', 'Calcular la mediana', 'Encontrar la moda', 'Determinar percentiles'],
        ans: 0, exp: 'CV = (S/x̄)×100%. Permite comparar dispersión aunque las unidades sean distintas.' },
      { q: 'Si lanzas un dado 60 veces, ¿el número de veces que sale "3" es?',
        opts: ['Variable discreta', 'Variable continua', 'Variable nominal', 'Variable ordinal'],
        ans: 0, exp: 'El conteo de resultados (0, 1, 2, …, 60) es un entero → variable discreta.' },
    ],

    continua: [
      { q: '¿Cuál es una variable continua?',
        opts: ['Temperatura en grados Celsius', 'Número de hijos', 'Género', 'Nivel de satisfacción'],
        ans: 0, exp: 'La temperatura puede tomar cualquier valor real en un rango → continua.' },
      { q: '¿Qué gráfico es exclusivo para resumir variables continuas?',
        opts: ['Histograma', 'Diagrama de barras', 'Gráfico de pastel', 'Pictograma'],
        ans: 0, exp: 'El histograma agrupa datos en clases (intervalos) y muestra frecuencias → propio de continua.' },
      { q: 'La curtosis mide:',
        opts: ['El peso de las colas de la distribución', 'La simetría', 'El centro de los datos', 'La dispersión'],
        ans: 0, exp: 'Curtosis alta → colas pesadas (leptocúrtica). Baja → colas ligeras (platicúrtica).' },
      { q: 'El coeficiente de asimetría de Pearson negativo indica:',
        opts: ['Cola a la izquierda (sesgo negativo)', 'Cola a la derecha', 'Distribución simétrica', 'Curtosis alta'],
        ans: 0, exp: 'Negativo → la cola izquierda es más larga; la media está a la izquierda de la mediana.' },
      { q: 'Si x̄ = 50 y S = 10, el coeficiente de variación es:',
        opts: ['20%', '5%', '50%', '10%'],
        ans: 0, exp: 'CV = (S / x̄) × 100 = (10/50) × 100 = 20%' },
      { q: 'El percentil 75 (Q3) representa:',
        opts: ['El valor por debajo del cual está el 75% de los datos', 'El 75% de la media', 'La moda al 75%', 'El máximo reducido 25%'],
        ans: 0, exp: 'Q3 divide los datos de forma que el 75% está por debajo y el 25% por encima.' },
      { q: 'La regla empírica (68-95-99.7) aplica a distribuciones:',
        opts: ['Normales', 'Sesgadas', 'Uniformes', 'Cualquier tipo'],
        ans: 0, exp: '68% de datos dentro de ±1σ, 95% en ±2σ, 99.7% en ±3σ — solo en distribución normal.' },
      { q: 'La desviación estándar muestral usa (n−1) en el denominador para:',
        opts: ['Corregir el sesgo del estimador (corrección de Bessel)', 'Simplificar el cálculo', 'Aumentar la varianza', 'Reducir el error'],
        ans: 0, exp: 'Dividir por n−1 hace que S² sea un estimador insesgado de σ² poblacional.' },
      { q: '¿Qué indica el box plot (diagrama de caja) sobre la distribución?',
        opts: ['Mediana, cuartiles, rango intercuartílico y valores atípicos', 'Solo la media y la moda', 'La frecuencia de cada valor', 'La correlación entre variables'],
        ans: 0, exp: 'El box plot resume: mínimo, Q1, mediana, Q3, máximo y detecta outliers.' },
    ],

    conteo: [
      { q: 'C(5, 2) (combinaciones de 5 tomadas de 2) es igual a:',
        opts: ['10', '20', '5', '25'],
        ans: 0, exp: 'C(5,2) = 5! / (2! · 3!) = (5×4)/(2×1) = 10.' },
      { q: 'P(4, 2) (permutaciones de 4 tomadas de 2) es igual a:',
        opts: ['12', '6', '24', '8'],
        ans: 0, exp: 'P(4,2) = 4! / (4−2)! = 4×3 = 12.' },
      { q: '¿Cuántas contraseñas de 3 letras distintas existen con {A, B, C, D, E}?',
        opts: ['60', '125', '10', '15'],
        ans: 0, exp: 'P(5,3) = 5×4×3 = 60. El orden importa y no se repiten.' },
      { q: '¿Qué diferencia a una permutación de una combinación?',
        opts: ['En permutación el orden importa; en combinación no', 'Son iguales', 'En combinación el orden importa', 'Solo el factorial cambia'],
        ans: 0, exp: 'AB ≠ BA en permutación, pero {A,B} = {B,A} en combinación.' },
      { q: '5! (factorial de 5) es:',
        opts: ['120', '60', '24', '720'],
        ans: 0, exp: '5! = 5×4×3×2×1 = 120.' },
      { q: 'Un equipo de 3 personas se elige de un grupo de 8. ¿Cuántos equipos posibles hay?',
        opts: ['56', '336', '24', '512'],
        ans: 0, exp: 'C(8,3) = 8!/(3!·5!) = (8×7×6)/(3×2×1) = 56.' },
      { q: 'Si se deben ocupar 4 puestos distintos con 7 candidatos, ¿cuántas formas hay?',
        opts: ['840', '35', '28', '5040'],
        ans: 0, exp: 'P(7,4) = 7×6×5×4 = 840. Los puestos son distintos → importa el orden.' },
      { q: '¿Cuántas formas de ordenar las letras de "DATO" (sin repetir)?',
        opts: ['24', '12', '4', '16'],
        ans: 0, exp: '4 letras distintas → 4! = 4×3×2×1 = 24 ordenaciones.' },
      { q: 'En un grupo de 5 personas se forman parejas para un proyecto. ¿Cuántas parejas posibles hay?',
        opts: ['10', '20', '5', '25'],
        ans: 0, exp: 'C(5,2) = 10. El orden no importa (la pareja AB es la misma que BA).' },
    ],

    dist_tablas: [
      { q: 'El valor crítico z para un nivel de confianza del 95% (bilateral) es:',
        opts: ['1.96', '1.645', '2.576', '1.28'],
        ans: 0, exp: 'Para NC=95% bilateral, α/2=0.025 → z₀.₀₂₅ = 1.96.' },
      { q: 'En la tabla t de Student, los grados de libertad (gl) dependen de:',
        opts: ['El tamaño de muestra n (gl = n−1)', 'La media', 'La varianza', 'El nivel de confianza'],
        ans: 0, exp: 'gl = n−1. Con más datos, la t se aproxima a la normal estándar.' },
      { q: 'La distribución Chi-cuadrado se usa para:',
        opts: ['Pruebas de independencia y bondad de ajuste', 'Comparar dos medias', 'Calcular intervalos de μ', 'Regresión lineal'],
        ans: 0, exp: 'Chi² prueba si dos variables categóricas son independientes o si una distribución se ajusta a datos observados.' },
      { q: 'La distribución F de Fisher-Snedecor tiene:',
        opts: ['Dos parámetros de grados de libertad (gl₁, gl₂)', 'Un solo parámetro', 'Media igual a 0', 'Valores negativos'],
        ans: 0, exp: 'F = (χ²₁/gl₁) / (χ²₂/gl₂) — necesita gl del numerador y denominador.' },
      { q: 'Si X ~ Binomial(n=10, p=0.3), P(X=3) se calcula como:',
        opts: ['C(10,3) · 0.3³ · 0.7⁷', '0.3³ · 0.7⁷', 'C(10,3) · 0.3³', '10 · 0.3 · 0.7'],
        ans: 0, exp: 'Fórmula binomial: P(X=k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ.' },
      { q: 'La distribución de Poisson tiene la propiedad de que su media y varianza son:',
        opts: ['Iguales (ambas = λ)', 'La varianza es λ²', 'La media es √λ', 'Siempre 1'],
        ans: 0, exp: 'En Poisson, E(X) = Var(X) = λ. Esto la distingue de otras distribuciones.' },
      { q: 'Para n grande (n ≥ 30) y σ conocida, se usa la distribución:',
        opts: ['Normal estándar (Z)', 't de Student', 'F de Fisher', 'Chi-cuadrado'],
        ans: 0, exp: 'Con n≥30 y σ conocida, el TCL garantiza normalidad → usamos Z.' },
      { q: 'El valor crítico t con gl=10 y α=0.05 (bilateral) es aproximadamente:',
        opts: ['2.228', '1.812', '1.960', '2.576'],
        ans: 0, exp: 't(10, 0.025) ≈ 2.228. Con menos gl, el valor crítico es mayor que 1.96.' },
      { q: 'A medida que los grados de libertad de t aumentan, la distribución t:',
        opts: ['Se aproxima a la distribución normal estándar', 'Se vuelve más sesgada', 'Sus colas se hacen más pesadas', 'Su media aumenta'],
        ans: 0, exp: 'Con gl→∞ la t converge a Z ~ N(0,1). Con pocos gl, las colas son más anchas.' },
    ],

    dist_calc: [
      { q: 'Si Z ~ N(0,1), P(Z < 1.96) es aproximadamente:',
        opts: ['0.975', '0.950', '0.025', '0.680'],
        ans: 0, exp: 'La tabla normal da P(Z < 1.96) = 0.9750. El área a la derecha es 0.025.' },
      { q: 'P(−1 < Z < 1) en la distribución normal estándar es aproximadamente:',
        opts: ['0.6827', '0.9545', '0.9973', '0.5000'],
        ans: 0, exp: 'La regla empírica: ±1σ cubre el 68.27% de la distribución.' },
      { q: 'Si X ~ N(μ=100, σ=15), para hallar P(X < 115) se estandariza como:',
        opts: ['Z = (115−100)/15 = 1.00', 'Z = 115/100', 'Z = 100/15', 'Z = (100−115)/15'],
        ans: 0, exp: 'Z = (x − μ)/σ = (115−100)/15 = 1.00. Luego P(Z < 1) ≈ 0.8413.' },
      { q: 'P(Z > 2.33) en N(0,1) es aproximadamente:',
        opts: ['0.0099', '0.9901', '0.0500', '0.9500'],
        ans: 0, exp: 'P(Z < 2.33) ≈ 0.9901 → P(Z > 2.33) = 1 − 0.9901 = 0.0099.' },
      { q: '¿Qué representa el área bajo la curva normal entre dos valores a y b?',
        opts: ['P(a < X < b)', 'La media entre a y b', 'La varianza del intervalo', 'La moda'],
        ans: 0, exp: 'El área bajo la curva en [a,b] es la probabilidad de que X tome valores en ese rango.' },
      { q: 'Si P(X < c) = 0.90 en N(0,1), el valor c es aproximadamente:',
        opts: ['1.28', '1.645', '1.96', '2.33'],
        ans: 0, exp: 'El percentil 90 de la normal estándar es z ≈ 1.28.' },
      { q: 'X ~ Poisson(λ=3). P(X = 0) es:',
        opts: ['e⁻³ ≈ 0.0498', '3·e⁻³', '1/3', '0.3'],
        ans: 0, exp: 'P(X=0) = e⁻λ·λ⁰/0! = e⁻³ ≈ 0.0498.' },
      { q: 'Para X ~ Binomial(n=5, p=0.5), P(X ≥ 4) es:',
        opts: ['0.1875', '0.3125', '0.0625', '0.5000'],
        ans: 0, exp: 'P(X=4) = C(5,4)·0.5⁵ = 5/32; P(X=5) = 1/32. Suma = 6/32 = 0.1875.' },
      { q: 'Si X ~ N(μ=50, σ=5), ¿entre qué valores está el 95% de los datos?',
        opts: ['40 y 60', '45 y 55', '35 y 65', '48 y 52'],
        ans: 0, exp: 'Regla empírica: μ ± 2σ = 50 ± 10 → (40, 60) contiene el 95.45% ≈ 95%.' },
    ],

    hipotesis: [
      { q: 'Si p-valor = 0.03 y α = 0.05, la decisión es:',
        opts: ['Rechazar H₀', 'No rechazar H₀', 'Aceptar H₀', 'Aumentar α'],
        ans: 0, exp: 'p-valor (0.03) < α (0.05) → evidencia suficiente para rechazar H₀.' },
      { q: 'H₀: μ = 50, H₁: μ ≠ 50 es una prueba:',
        opts: ['Bilateral', 'Unilateral derecha', 'Unilateral izquierda', 'No es prueba de hipótesis'],
        ans: 0, exp: 'H₁: μ ≠ 50 incluye ambas colas → bilateral.' },
      { q: 'El error tipo I ocurre cuando:',
        opts: ['Se rechaza H₀ siendo verdadera', 'No se rechaza H₀ siendo falsa', 'El p-valor es grande', 'La muestra es pequeña'],
        ans: 0, exp: 'Error tipo I (α) = rechazar H₀ cuando en realidad es verdadera ("falso positivo").' },
      { q: 'La prueba t de Student se usa cuando:',
        opts: ['σ poblacional es desconocida', 'n es muy grande y σ es conocida', 'Los datos son nominales', 'Se comparan tres medias o más'],
        ans: 0, exp: 'Cuando σ es desconocida usamos S muestral → distribución t con gl=n−1.' },
      { q: 'Si p-valor = 0.08 y α = 0.05, se concluye:',
        opts: ['No hay evidencia suficiente para rechazar H₀', 'Se rechaza H₀', 'Se acepta H₁', 'La prueba no es válida'],
        ans: 0, exp: 'p-valor (0.08) > α (0.05) → no rechazamos H₀.' },
      { q: 'En ANOVA de una vía, H₀ establece que:',
        opts: ['Todas las medias grupales son iguales (μ₁=μ₂=…=μₖ)', 'Todas son diferentes', 'Al menos una media es cero', 'Las varianzas son iguales'],
        ans: 0, exp: 'ANOVA prueba si existe diferencia significativa entre k medias.' },
      { q: 'El estadístico Z para una prueba de proporción (p̂ − p₀) / √(p₀(1−p₀)/n) requiere:',
        opts: ['n·p₀ ≥ 5 y n·(1−p₀) ≥ 5', 'n ≥ 100 siempre', 'Distribución normal de la población', 'Muestras pareadas'],
        ans: 0, exp: 'La condición n·p₀≥5 y n·(1−p₀)≥5 garantiza la aproximación normal.' },
      { q: 'El nivel de significancia α representa:',
        opts: ['La probabilidad máxima de cometer error tipo I', 'El p-valor mínimo aceptable', 'La potencia de la prueba', 'La confianza en H₀'],
        ans: 0, exp: 'α = P(rechazar H₀ | H₀ verdadera). Típicamente α = 0.05 ó 0.01.' },
      { q: 'La "potencia" de una prueba estadística es:',
        opts: ['P(rechazar H₀ | H₀ falsa) — detectar diferencias reales', 'P(error tipo I)', 'El valor de α', 'El p-valor observado'],
        ans: 0, exp: 'Potencia = 1 − β = probabilidad de rechazar H₀ cuando de verdad es falsa.' },
    ],

    intervalos: [
      { q: 'Un IC del 95% para μ significa que:',
        opts: ['El 95% de los IC construidos así contienen al verdadero μ', 'μ está dentro con 95% de certeza siempre', 'La muestra es 95% representativa', 'El error es del 5%'],
        ans: 0, exp: 'La interpretación frecuentista correcta: si repetimos el muestreo, el 95% de los IC capturarían μ.' },
      { q: 'Si el IC 95% para μ es (48, 52), ¿se rechaza H₀: μ = 50 con α = 0.05?',
        opts: ['No, porque 50 está dentro del IC', 'Sí, porque el IC es estrecho', 'Depende del n', 'Sí, siempre'],
        ans: 0, exp: 'Si μ₀ está dentro del IC del (1−α)×100%, no rechazamos H₀ bilateral a nivel α.' },
      { q: 'El margen de error E = z·(σ/√n). Si n aumenta 4 veces, E:',
        opts: ['Se reduce a la mitad', 'Se duplica', 'No cambia', 'Se cuadruplica'],
        ans: 0, exp: 'E ∝ 1/√n. Si n·4 → √(4n) = 2√n → E se divide entre 2.' },
      { q: 'Para IC de proporción p̂, la condición n·p̂ ≥ 5 garantiza:',
        opts: ['Que la aproximación normal es válida', 'Que n es suficientemente grande en general', 'Que p̂ es exacta', 'El nivel de confianza'],
        ans: 0, exp: 'La condición n·p̂≥5 y n·(1−p̂)≥5 permite usar la distribución normal.' },
      { q: 'Un IC más ancho corresponde a:',
        opts: ['Mayor nivel de confianza (ej. 99% vs 95%)', 'Mayor tamaño de muestra n', 'Menor varianza S', 'Menor nivel de confianza'],
        ans: 0, exp: 'Mayor confianza → z o t más grande → margen más amplio → IC más ancho.' },
      { q: 'Se usa distribución t (en lugar de Z) en IC de μ cuando:',
        opts: ['σ poblacional es desconocida', 'n ≥ 30 y σ conocida', 'Se trabaja con proporciones', 'Los datos son nominales'],
        ans: 0, exp: 'Cuando no conocemos σ, la estimamos con S y usamos t con gl = n−1.' },
      { q: 'El IC para diferencia de medias incluye 0. Esto indica:',
        opts: ['No hay diferencia significativa entre las medias', 'Las medias son iguales con certeza', 'Hay diferencia significativa', 'Error en el cálculo'],
        ans: 0, exp: 'Si 0 ∈ IC → μ₁ − μ₂ podría ser 0 → no rechazamos H₀: μ₁ = μ₂.' },
      { q: 'Con x̄ = 80, σ = 10, n = 25, el IC 95% es:',
        opts: ['(76.08, 83.92)', '(78, 82)', '(70, 90)', '(79.02, 80.98)'],
        ans: 0, exp: 'E = 1.96·(10/√25) = 1.96·2 = 3.92. IC: (80−3.92, 80+3.92) = (76.08, 83.92).' },
      { q: 'Para reducir el margen de error E a la mitad, manteniendo el mismo nivel de confianza, se debe:',
        opts: ['Multiplicar n por 4', 'Duplicar n', 'Reducir σ a la mitad', 'Cambiar α'],
        ans: 0, exp: 'E ∝ 1/√n. Para E/2 se necesita √n·2, es decir n·4.' },
    ],

    chi: [
      { q: 'La prueba Chi-cuadrado de independencia requiere que los datos sean:',
        opts: ['Categóricos en una tabla de contingencia', 'Continuos y normales', 'Dos muestras de medias', 'Pareados'],
        ans: 0, exp: 'Chi² de independencia trabaja con frecuencias de categorías en filas × columnas.' },
      { q: 'Si χ² calculado > χ² crítico, se concluye:',
        opts: ['Las variables son dependientes (rechazar H₀ de independencia)', 'Las variables son independientes', 'El p-valor es grande', 'La muestra es pequeña'],
        ans: 0, exp: 'χ²_calc > χ²_crítico → p < α → evidencia de asociación entre variables.' },
      { q: 'Los grados de libertad en una tabla de contingencia de 3 filas × 4 columnas son:',
        opts: ['6', '12', '7', '5'],
        ans: 0, exp: 'gl = (filas−1)(columnas−1) = (3−1)(4−1) = 2×3 = 6.' },
      { q: 'La frecuencia esperada Eᵢⱼ se calcula como:',
        opts: ['(total fila i × total col j) / total general', 'Frecuencia observada / n', 'fila × columna', 'Observada − esperada'],
        ans: 0, exp: 'Eᵢⱼ = (Rᵢ × Cⱼ) / N. Es la frecuencia si las variables fueran independientes.' },
      { q: 'La prueba de bondad de ajuste Chi² compara:',
        opts: ['Distribución observada vs una distribución teórica esperada', 'Dos medias', 'Dos proporciones', 'Correlación lineal'],
        ans: 0, exp: 'Bondad de ajuste: ¿se ajustan los datos observados a una distribución propuesta?' },
      { q: 'Una condición importante para aplicar Chi² de independencia es:',
        opts: ['Eᵢⱼ ≥ 5 en todas las celdas', 'n ≥ 100 siempre', 'Las variables son continuas', 'La muestra es normal'],
        ans: 0, exp: 'Si Eᵢⱼ < 5, el estadístico Chi² no sigue bien la distribución teórica.' },
      { q: 'El estadístico Chi-cuadrado se calcula como:',
        opts: ['Σ (Oᵢⱼ − Eᵢⱼ)² / Eᵢⱼ', 'Σ (Oᵢⱼ − Eᵢⱼ) / Eᵢⱼ', 'Σ Oᵢⱼ² / Eᵢⱼ', 'Σ (Oᵢⱼ − Eᵢⱼ)'],
        ans: 0, exp: 'χ² = Σ(O−E)²/E. Mide qué tan lejos están las frecuencias observadas de las esperadas.' },
      { q: 'H₀ en la prueba de independencia Chi² establece que:',
        opts: ['Las dos variables categóricas son independientes', 'Las variables están correlacionadas', 'Las medias son iguales', 'Las varianzas son iguales'],
        ans: 0, exp: 'H₀: las variables son independientes. Rechazar H₀ implica asociación.' },
      { q: 'Si en una tabla de contingencia todos los residuos (O−E) son cercanos a 0, ¿qué sugiere?',
        opts: ['Las variables son independientes (χ² pequeño)', 'Las variables están fuertemente asociadas', 'El p-valor es pequeño', 'Se debe rechazar H₀'],
        ans: 0, exp: 'Si O ≈ E en todas las celdas, el estadístico χ² ≈ 0 → no hay evidencia de asociación.' },
    ],

    regresion: [
      { q: 'r = 0.85 indica:',
        opts: ['Correlación positiva fuerte', 'Correlación negativa', 'Sin correlación', 'Correlación perfecta negativa'],
        ans: 0, exp: 'r cercano a 1 indica correlación positiva fuerte. r cercano a 0 indica sin correlación.' },
      { q: 'En ŷ = 2 + 3x, si x aumenta en 1 unidad, y:',
        opts: ['Aumenta 3 unidades', 'Aumenta 2 unidades', 'Disminuye 3 unidades', 'No cambia'],
        ans: 0, exp: 'La pendiente b₁ = 3 indica el cambio en ŷ por cada unidad de cambio en x.' },
      { q: 'R² = 0.72 significa que:',
        opts: ['El modelo explica el 72% de la variabilidad de y', '72% de los datos son precisos', 'r = 0.72', 'El error es del 72%'],
        ans: 0, exp: 'R² = SSR/SST = proporción de variabilidad de y explicada por el modelo.' },
      { q: 'El ANOVA en regresión lineal prueba:',
        opts: ['Si el modelo es globalmente significativo (F)', 'Si los residuos son normales', 'Si hay multicolinealidad', 'La linealidad exacta'],
        ans: 0, exp: 'F = MSR/MSE. Si F es grande (p < α), el modelo explica significativamente la variabilidad.' },
      { q: 'La correlación de Spearman se usa cuando:',
        opts: ['Los datos son ordinales o la relación no es lineal', 'Solo hay datos normales', 'n ≥ 100', 'Las variables son nominales'],
        ans: 0, exp: 'Spearman usa rangos → funciona con ordinales y relaciones monótonas no lineales.' },
      { q: 'El supuesto de homocedasticidad en regresión significa:',
        opts: ['La varianza de los residuos es constante para todos los valores de x', 'Los residuos son normales', 'No hay autocorrelación', 'La media de residuos es cero'],
        ans: 0, exp: 'Homocedasticidad: Var(εᵢ) = σ² constante. Su violación se llama heterocedasticidad.' },
      { q: 'Si r = −0.92, la relación entre X e Y es:',
        opts: ['Negativa muy fuerte', 'Positiva muy fuerte', 'Sin relación', 'Negativa débil'],
        ans: 0, exp: 'r negativo → relación inversa. |r| = 0.92 → muy fuerte.' },
      { q: 'El intercepto b₀ en ŷ = b₀ + b₁x representa:',
        opts: ['El valor estimado de y cuando x = 0', 'La pendiente de la recta', 'El coeficiente de correlación', 'El error estándar'],
        ans: 0, exp: 'b₀ es el punto donde la recta corta el eje y (cuando x = 0).' },
      { q: 'Si b₁ = 0 en la recta de regresión, ¿qué indica?',
        opts: ['No hay relación lineal entre x e y', 'La correlación es perfecta', 'y crece con x', 'R² = 1'],
        ans: 0, exp: 'b₁ = 0 significa pendiente cero → x no aporta información para predecir y.' },
    ],

  },

  // ===== SELECCIÓN ALEATORIA =====
  getQuestions(mod, n = 20) {
    const bank = this.banks[mod] || [];
    const shuffled = [...bank].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(n, shuffled.length));
  },

  // ===== RENDER QUIZ =====
  render(mod, container) {
    const questions = this.getQuestions(mod, 20);
    if (!questions.length) { container.innerHTML = '<p style="color:var(--muted)">Sin preguntas disponibles.</p>'; return; }

    const qsHtml = questions.map((q, i) => `
      <div class="quiz-q" id="qq-${i}" style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:14px;margin-bottom:12px">
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.76rem;color:var(--text);margin-bottom:10px">
          ${i + 1}. ${q.q}
        </div>
        ${q.opts.map((opt, j) => `
          <label style="display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;border:1px solid var(--border);margin-bottom:6px;cursor:pointer;font-family:'DM Mono',monospace;font-size:0.65rem;color:var(--muted)" id="ql-${i}-${j}">
            <input type="radio" name="q${i}" value="${j}" style="accent-color:var(--accent)"> ${opt}
          </label>`).join('')}
        <div id="qfb-${i}" style="display:none;margin-top:8px;font-family:'DM Mono',monospace;font-size:0.62rem;border-radius:8px;padding:8px 10px"></div>
      </div>`).join('');

    container.innerHTML = `
      <div style="margin-top:4px">
        <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:0.8rem;color:var(--text);margin-bottom:12px">
          🎯 Quiz — ${questions.length} preguntas
        </div>
        ${qsHtml}
        <button class="btn-calc" id="quiz-verify-btn" onclick="Quiz._verify(${JSON.stringify(questions).replace(/"/g, '&quot;')}, '${mod}', this.parentElement.parentElement)">
          Verificar respuestas →
        </button>
      </div>`;

    // Guardar preguntas en el contenedor para acceso posterior
    container.dataset.questions = JSON.stringify(questions);
    container.dataset.mod = mod;
  },

  _verify(questions, mod, container) {
    let correct = 0;
    const results = [];

    questions.forEach((q, i) => {
      const sel = document.querySelector(`input[name="q${i}"]:checked`);
      const ans = sel ? parseInt(sel.value) : -1;
      const ok  = ans === q.ans;
      if (ok) correct++;
      results.push({ ok, ans, correct: q.ans, exp: q.exp });
    });

    // Mostrar feedback visual por pregunta
    questions.forEach((q, i) => {
      const fb = document.getElementById(`qfb-${i}`);
      const { ok, correct: ca, exp } = results[i];

      // Colorear opciones
      q.opts.forEach((_, j) => {
        const lbl = document.getElementById(`ql-${i}-${j}`);
        if (!lbl) return;
        if (j === ca) lbl.style.cssText += ';border-color:var(--accent);background:rgba(79,255,176,0.1);color:var(--accent)';
        else if (j === (results[i].ans) && !ok) lbl.style.cssText += ';border-color:var(--accent3);background:rgba(255,107,107,0.1);color:var(--accent3)';
      });

      // Bloquear radios
      document.querySelectorAll(`input[name="q${i}"]`).forEach(r => r.disabled = true);

      // Mostrar explicación
      if (fb) {
        fb.style.display = 'block';
        fb.style.background = ok ? 'rgba(79,255,176,0.08)' : 'rgba(255,107,107,0.08)';
        fb.style.border = `1px solid ${ok ? 'rgba(79,255,176,0.25)' : 'rgba(255,107,107,0.25)'}`;
        fb.style.color = ok ? 'var(--accent)' : 'var(--accent3)';
        fb.innerHTML = `${ok ? '✓ Correcto' : '✗ Incorrecto'} — ${exp}`;
      }
    });

    // Calcular XP
    const passed   = correct >= Math.ceil(questions.length * 0.60);
    const xpBase   = correct * 15;
    const xpBonus  = passed ? 30 : 0;
    const xpTotal  = xpBase + xpBonus;
    const wasCompleted = this.isCompleted(mod);

    let xpGained = xpTotal;
    if (wasCompleted && !passed) xpGained = Math.floor(xpTotal * 0.5);

    this.addXP(xpGained);
    if (passed) this.markCompleted(mod, correct);

    // Nivel actualizado
    const lv = this.getLevel(this._state.xp);
    const nl = this.nextLevel(this._state.xp);

    // Mostrar resultado final
    const btn = document.getElementById('quiz-verify-btn');
    if (btn) btn.style.display = 'none';

    const resDiv = document.createElement('div');
    resDiv.innerHTML = `
      <div style="background:${passed ? 'rgba(79,255,176,0.07)' : 'rgba(255,209,102,0.07)'};border:1px solid ${passed ? 'rgba(79,255,176,0.25)' : 'rgba(255,209,102,0.25)'};border-radius:12px;padding:16px;margin-top:12px;text-align:center">
        <div style="font-size:1.8rem;margin-bottom:4px">${passed ? '🎉' : '💪'}</div>
        <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:0.9rem;color:${passed ? 'var(--accent)' : 'var(--gold)'}">
          ${correct}/${questions.length} correctas — ${passed ? '¡Módulo completado!' : 'Sigue practicando'}
        </div>
        <div style="font-family:'DM Mono',monospace;font-size:0.65rem;color:var(--muted);margin-top:6px">
          +${xpGained} XP ganados · Total: ${this._state.xp} XP
        </div>
        <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.75rem;color:var(--accent2);margin-top:4px">
          ${lv.icon} ${lv.name} ${nl ? `→ ${nl.icon} ${nl.name} (faltan ${nl.min - this._state.xp} XP)` : '🏆 Nivel máximo'}
        </div>
      </div>`;
    container.appendChild(resDiv);

    // Actualizar tarjeta XP en home si existe
    const xpEl = document.getElementById('hdr-xp');
    if (xpEl) xpEl.textContent = `${lv.icon} ${lv.name} · ${this._state.xp} XP`;
  },

  // ===== HTML BADGE XP para home / header =====
  badgeHtml() {
    const lv = this.getLevel(this._state.xp);
    const nl = this.nextLevel(this._state.xp);
    const pct = nl ? Math.round(((this._state.xp - lv.min) / (nl.min - lv.min)) * 100) : 100;
    return `
      <div style="background:var(--surface2);border:1px solid var(--border);border-radius:12px;padding:12px 14px;margin-bottom:8px;grid-column:1/-1">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
          <div>
            <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:0.78rem;color:var(--text)">${lv.icon} ${lv.name}</div>
            <div style="font-family:'DM Mono',monospace;font-size:0.6rem;color:var(--muted)">${this._state.xp} XP${nl ? ` · faltan ${nl.min - this._state.xp} para ${nl.icon} ${nl.name}` : ' · ¡Nivel máximo!'}</div>
          </div>
          <div id="hdr-xp" style="font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--accent);font-weight:700">${this._state.xp} XP</div>
        </div>
        <div style="height:6px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:var(--accent);border-radius:4px;transition:width 0.5s"></div>
        </div>
      </div>`;
  },
};
