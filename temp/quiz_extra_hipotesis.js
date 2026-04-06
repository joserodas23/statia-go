const EXTRA_HIPOTESIS = [
  // ── H₀ vs H₁ ────────────────────────────────────────────────────────────
  { q: 'En una prueba de hipótesis, H₀ es la hipótesis que:',
    opts: ['Se asume verdadera hasta que la evidencia la contradiga', 'Siempre se rechaza al final', 'Establece que hay diferencia significativa', 'Corresponde a la afirmación del investigador'],
    ans: 0, exp: 'H₀ es la hipótesis nula: postura conservadora que se sostiene en ausencia de evidencia.' },

  { q: 'H₀: μ ≥ 500 vs H₁: μ < 500 es una prueba:',
    opts: ['Bilateral', 'Unilateral izquierda', 'Unilateral derecha', 'Sin región de rechazo'],
    ans: 1, exp: 'H₁: μ < 500 señala la cola izquierda → prueba unilateral izquierda.' },

  { q: 'La hipótesis alternativa H₁ representa:',
    opts: ['La situación de no efecto', 'Lo que el investigador quiere demostrar', 'Siempre una igualdad', 'El valor del estadístico de prueba'],
    ans: 1, exp: 'H₁ (hipótesis de investigación) es la afirmación que se busca respaldar con los datos.' },

  { q: '¿Cuál de los siguientes pares es incorrecto para plantear hipótesis?',
    opts: ['H₀: μ = 10, H₁: μ ≠ 10', 'H₀: μ ≥ 10, H₁: μ < 10', 'H₀: μ ≤ 10, H₁: μ > 10', 'H₀: μ = 10, H₁: μ = 12'],
    ans: 3, exp: 'H₁ debe ser complementaria a H₀ y no puede establecer igualdad con un valor específico distinto.' },

  { q: 'En H₀: p = 0.30 vs H₁: p > 0.30, la región de rechazo se encuentra:',
    opts: ['En la cola izquierda', 'En ambas colas', 'En la cola derecha', 'No existe región de rechazo'],
    ans: 2, exp: 'H₁: p > 0.30 → prueba unilateral derecha → región de rechazo en cola derecha.' },

  // ── ERROR TIPO I Y TIPO II ───────────────────────────────────────────────
  { q: 'El error tipo II (β) ocurre cuando:',
    opts: ['No se rechaza H₀ cuando en realidad es falsa', 'Se rechaza H₀ siendo verdadera', 'El p-valor es menor que α', 'La muestra es demasiado grande'],
    ans: 0, exp: 'Error tipo II (β) = "falso negativo": H₀ es falsa pero no tenemos evidencia para rechazarla.' },

  { q: 'La potencia de una prueba es 1 − β. Si β = 0.20, la potencia es:',
    opts: ['0.20', '0.80', '1.20', '0.05'],
    ans: 1, exp: 'Potencia = 1 − β = 1 − 0.20 = 0.80 (80% de probabilidad de detectar el efecto real).' },

  { q: 'Si aumentamos α de 0.05 a 0.10, el error tipo II β:',
    opts: ['Aumenta', 'Se vuelve igual a α', 'No cambia', 'Disminuye (menor probabilidad de no detectar el efecto)'],
    ans: 3, exp: 'Aumentar α reduce la región de no rechazo → más fácil rechazar → β disminuye.' },

  { q: 'Para reducir AMBOS tipos de error simultáneamente, la mejor estrategia es:',
    opts: ['Aumentar el tamaño de muestra n', 'Reducir α', 'Aumentar α', 'Cambiar de prueba bilateral a unilateral'],
    ans: 0, exp: 'Con mayor n, los estadísticos son más precisos → se reducen ambos errores (mayor potencia sin sacrificar α).' },

  { q: 'Una farmacéutica no quiere comercializar un medicamento ineficaz. Debe controlar principalmente:',
    opts: ['La potencia al máximo', 'El p-valor exacto', 'Error tipo II (β)', 'Error tipo I (α): rechazar falsamente que el medicamento no funciona'],
    ans: 3, exp: 'Aprobar un medicamento ineficaz = rechazar H₀ siendo verdadera = Error tipo I. Se controla fijando α pequeño.' },

  // ── NIVEL DE SIGNIFICANCIA Y P-VALOR ────────────────────────────────────
  { q: 'El p-valor se define como:',
    opts: ['Probabilidad de obtener un estadístico tan extremo o más, dado que H₀ es verdadera', 'La probabilidad de que H₀ sea verdadera', 'El nivel de confianza', 'La probabilidad del error tipo II'],
    ans: 0, exp: 'p-valor = P(estadístico ≥ observado | H₀). No es la probabilidad de que H₀ sea cierta.' },

  { q: 'Si el p-valor = 0.001 y α = 0.05, se concluye:',
    opts: ['Hay evidencia muy fuerte para rechazar H₀', 'No se rechaza H₀', 'El resultado no es significativo', 'Se necesita más datos'],
    ans: 0, exp: 'p = 0.001 << α = 0.05 → resultado altamente significativo → se rechaza H₀.' },

  { q: '¿Cuál afirmación sobre el p-valor es INCORRECTA?',
    opts: ['Un p-valor < α lleva a rechazar H₀', 'El p-valor no es la probabilidad de que H₀ sea cierta', 'El p-valor depende del estadístico observado', 'Un p-valor pequeño prueba que H₀ es falsa con certeza'],
    ans: 3, exp: 'El p-valor solo cuantifica evidencia contra H₀; no "prueba" ni "acepta" nada con certeza.' },

  { q: 'Con α = 0.01 y p-valor = 0.04, la decisión correcta es:',
    opts: ['No rechazar H₀ (p > α)', 'Rechazar H₀', 'Aceptar H₁ con certeza', 'Aumentar α a 0.05'],
    ans: 0, exp: 'p = 0.04 > α = 0.01 → no hay suficiente evidencia para rechazar H₀ a nivel 0.01.' },

  { q: 'Un investigador obtiene p = 0.049 con α = 0.05. La conclusión correcta es:',
    opts: ['No se rechaza porque p ≈ α', 'El resultado es no significativo', 'Se necesita mayor α', 'Se rechaza H₀ ya que p < α'],
    ans: 3, exp: 'p = 0.049 < α = 0.05 → criterio formal: se rechaza H₀, aunque el margen es estrecho.' },

  // ── PRUEBA Z PARA UNA MUESTRA ─────────────────────────────────────────
  { q: 'La prueba Z para una media se usa cuando:',
    opts: ['σ poblacional es conocida', 'σ es desconocida', 'n < 30 siempre', 'Los datos son ordinales'],
    ans: 0, exp: 'La prueba Z requiere σ conocida (o n grande por TCL con S ≈ σ).' },

  { q: 'Z_calc = (x̄ − μ₀)/(σ/√n). Con x̄=105, μ₀=100, σ=10, n=25:',
    opts: ['Z = 0.50', 'Z = 2.50', 'Z = 5.00', 'Z = 1.00'],
    ans: 1, exp: 'Z = (105−100)/(10/√25) = 5/2 = 2.50.' },

  { q: 'Para H₀:μ=50 vs H₁:μ>50 con α=0.05, el valor crítico Z es:',
    opts: ['1.960', '2.326', '1.645', '−1.645'],
    ans: 2, exp: 'Prueba unilateral derecha, α=0.05 → Z_crítico = z₀.₀₅ = 1.645.' },

  { q: 'Con Z_calculado = 2.80 y Z_crítico = 1.96 (bilateral, α=0.05), la decisión es:',
    opts: ['No rechazar H₀', 'Aceptar H₀ con 95% de confianza', 'Necesitar más información', 'Rechazar H₀ porque |Z_calc| > Z_crit'],
    ans: 3, exp: '|2.80| > 1.96 → el estadístico cae en la región de rechazo → se rechaza H₀.' },

  { q: 'En una prueba bilateral con α=0.05, los valores críticos Z son:',
    opts: ['±1.645', '±2.326', '±2.576', '±1.96'],
    ans: 3, exp: 'Para prueba bilateral α=0.05, cada cola tiene 0.025 → z₀.₀₂₅ = ±1.96.' },

  { q: 'Muestra n=64, x̄=48, σ=8, H₀:μ=50. Z_calc es:',
    opts: ['2.00', '−0.25', '−1.00', '−2.00'],
    ans: 3, exp: 'Z = (48−50)/(8/√64) = −2/(8/8) = −2/1 = −2.00.' },

  // ── PRUEBA t PARA UNA MUESTRA ──────────────────────────────────────────
  { q: 'Para n=16, S=4, x̄=22, H₀:μ=20. El estadístico t es:',
    opts: ['0.50', '8.00', '1.00', '2.00'],
    ans: 3, exp: 't = (22−20)/(4/√16) = 2/(4/4) = 2/1 = 2.00; gl = 15.' },

  { q: 'Con n=10 y t_calc=2.30 en prueba bilateral α=0.05, t_crit(gl=9)≈2.262. Se:',
    opts: ['No rechaza H₀', 'Concluye que H₁ es verdadera con certeza', 'Cambia a prueba Z', 'Rechaza H₀ porque t_calc > t_crit'],
    ans: 3, exp: '2.30 > 2.262 → el estadístico supera el valor crítico → se rechaza H₀.' },

  { q: 'Los grados de libertad de la prueba t para una muestra de n=18 son:',
    opts: ['18', '17', '16', '9'],
    ans: 1, exp: 'gl = n − 1 = 18 − 1 = 17.' },

  { q: 'Un docente afirma que el promedio de notas es 14. Se extrae n=25 con x̄=13 y S=2. t = ?',
    opts: ['2.50', '−0.50', '−1.00', '−2.50'],
    ans: 3, exp: 't = (13−14)/(2/√25) = −1/(2/5) = −1/0.4 = −2.50.' },

  { q: 'En la prueba t de una muestra, si el IC 95% para μ NO incluye μ₀, entonces:',
    opts: ['No se rechaza H₀', 'El IC es incorrecto', 'Hay error tipo II', 'Se rechaza H₀: μ = μ₀ a nivel α = 0.05'],
    ans: 3, exp: 'IC y prueba t bilateral son equivalentes: si μ₀ ∉ IC₉₅%, se rechaza H₀ con α = 0.05.' },

  // ── PRUEBA t DOS MUESTRAS INDEPENDIENTES ─────────────────────────────
  { q: 'Para comparar las medias de dos grupos independientes con σ desconocida, se usa:',
    opts: ['Prueba t de dos muestras independientes', 'Prueba Z bilateral', 'ANOVA de dos vías', 'Prueba χ² de independencia'],
    ans: 0, exp: 'Con dos grupos independientes y σ desconocida, el estadístico sigue la distribución t.' },

  { q: 'En prueba t para dos muestras independientes con n₁=n₂=10 y varianzas iguales, los gl son:',
    opts: ['20', '19', '9', '18'],
    ans: 3, exp: 'gl = n₁ + n₂ − 2 = 10 + 10 − 2 = 18.' },

  { q: 'H₀: μ₁=μ₂ vs H₁: μ₁≠μ₂. t_calc=−1.85, t_crit=±2.101 (gl=18, α=0.05). Se:',
    opts: ['Rechaza H₀', 'Concluye μ₁ < μ₂', 'No rechaza H₀ porque |t_calc| < t_crit', 'Usa prueba unilateral'],
    ans: 2, exp: '|−1.85| = 1.85 < 2.101 → no se cae en la región de rechazo → no se rechaza H₀.' },

  { q: 'La prueba t de Welch (varianzas desiguales) se distingue porque:',
    opts: ['Asume igual varianza', 'Solo aplica para n ≥ 30', 'No requiere normalidad', 'Usa grados de libertad aproximados (fórmula de Satterthwaite)'],
    ans: 3, exp: 'Cuando las varianzas son distintas, los gl se aproximan con la fórmula de Welch-Satterthwaite.' },

  { q: 'Grupos: A(x̄=80, S=5, n=16) y B(x̄=75, S=5, n=16) con varianzas iguales. Sp² = ?',
    opts: ['50', '5', '10', '25'],
    ans: 3, exp: 'Sp² = [(15·25+15·25)]/30 = 750/30 = 25.' },

  // ── PRUEBA t PAREADA ────────────────────────────────────────────────────
  { q: 'La prueba t pareada se usa cuando:',
    opts: ['Las dos mediciones provienen del mismo sujeto (antes/después)', 'Las muestras son independientes', 'n ≥ 30 en ambos grupos', 'Las varianzas son conocidas'],
    ans: 0, exp: 'La prueba pareada aplica cuando hay correlación natural entre pares (mismo individuo, etc.).' },

  { q: 'En prueba t pareada: d̄=3, Sd=6, n=9. El estadístico t es:',
    opts: ['0.50', '3.00', '1.50', '0.17'],
    ans: 2, exp: 't = d̄/(Sd/√n) = 3/(6/√9) = 3/(6/3) = 3/2 = 1.50; gl = 8.' },

  { q: 'Los grados de libertad de la prueba t pareada con n=12 pares son:',
    opts: ['12', '22', '10', '11'],
    ans: 3, exp: 'En prueba pareada, gl = n − 1 = 12 − 1 = 11 (n es el número de pares).' },

  { q: 'Ventaja de la prueba t pareada sobre la de muestras independientes:',
    opts: ['Requiere menos supuestos', 'No necesita normalidad', 'Usa más grados de libertad', 'Controla la variabilidad entre sujetos, aumentando la potencia'],
    ans: 3, exp: 'Al trabajar con diferencias, se elimina la varianza inter-sujetos → mayor potencia.' },

  { q: 'Se mide la presión arterial antes y después de un tratamiento en 20 pacientes. Se debe usar:',
    opts: ['Prueba t pareada', 'Prueba t de dos muestras independientes', 'ANOVA de una vía', 'Prueba Z bilateral'],
    ans: 0, exp: 'Los mismos 20 pacientes se miden dos veces → datos pareados → prueba t pareada.' },

  // ── ANOVA DE UNA VÍA ────────────────────────────────────────────────────
  { q: 'ANOVA de una vía con k=4 grupos y N=40 observaciones totales. gl(entre) y gl(dentro) son:',
    opts: ['4 y 36', '3 y 40', '4 y 35', '3 y 36'],
    ans: 3, exp: 'gl(entre) = k−1 = 3; gl(dentro) = N−k = 40−4 = 36.' },

  { q: 'Si ANOVA produce F_calc=0.85 con F_crit=3.10, se concluye:',
    opts: ['No hay diferencia significativa entre las medias (no se rechaza H₀)', 'Hay diferencia significativa', 'Al menos una media es diferente', 'Los grupos son homogéneos con certeza'],
    ans: 0, exp: 'F_calc < F_crit → no se rechaza H₀ → no hay evidencia de diferencias entre grupos.' },

  { q: 'El supuesto de ANOVA que exige igualdad de varianzas en los grupos se llama:',
    opts: ['Normalidad', 'Independencia', 'Aleatoriedad', 'Homocedasticidad'],
    ans: 3, exp: 'Homocedasticidad: σ₁²=σ₂²=…=σₖ². Se verifica con prueba de Levene.' },

  { q: 'Cuando ANOVA rechaza H₀, para identificar qué pares de medias difieren se usa:',
    opts: ['Prueba post hoc (Tukey, Bonferroni, etc.)', 'Otra ANOVA', 'Solo la tabla F', 'Una nueva muestra'],
    ans: 0, exp: 'ANOVA solo indica que al menos una media es diferente; las pruebas post hoc determinan cuáles.' },

  { q: 'En ANOVA, CM_Entre = SC_Entre / gl_Entre. Con SC_Entre=120 y k=4, CM_Entre es:',
    opts: ['30', '120', '480', '40'],
    ans: 3, exp: 'gl_Entre = k−1 = 3. CM_Entre = 120/3 = 40.' },

  { q: 'La SC_Total en ANOVA se descompone como:',
    opts: ['SC_Entre × SC_Dentro', 'SC_Dentro − SC_Entre', 'Solo SC_Entre', 'SC_Entre + SC_Dentro'],
    ans: 3, exp: 'Descomposición fundamental: SC_T = SC_Entre + SC_Dentro.' },

  // ── PRUEBA F PARA VARIANZAS ──────────────────────────────────────────────
  { q: 'Para H₀: σ₁²=σ₂² con S₁²=36, S₂²=9, el estadístico F es:',
    opts: ['0.25', '27', '45', '4.00'],
    ans: 3, exp: 'F = S₁²/S₂² = 36/9 = 4.00.' },

  { q: 'Si F_calc=1.20 y F_crit=3.50 (α=0.05), para H₀: σ₁²=σ₂²:',
    opts: ['No se rechaza H₀ (no hay evidencia de varianzas distintas)', 'Se rechaza H₀', 'σ₁² > σ₂² significativamente', 'La prueba no es válida'],
    ans: 0, exp: 'F_calc < F_crit → no se rechaza H₀ → no hay evidencia estadística de varianzas diferentes.' },

  { q: 'La prueba F para varianzas requiere el supuesto de:',
    opts: ['Muestras grandes (n ≥ 30)', 'Varianzas iguales a priori', 'Datos pareados', 'Normalidad de ambas poblaciones'],
    ans: 3, exp: 'La prueba F es muy sensible a la normalidad. Sin normalidad, la prueba no es robusta.' },

  // ── REGIÓN DE RECHAZO ────────────────────────────────────────────────────
  { q: 'En una prueba unilateral izquierda (H₁: μ < μ₀) con α=0.05, la región de rechazo es:',
    opts: ['Z < −1.645', 'Z > 1.645', 'Z > 1.96 o Z < −1.96', 'Z > 2.326'],
    ans: 0, exp: 'Prueba unilateral izquierda → región de rechazo en cola izquierda: Z < −z_α = −1.645.' },

  { q: 'Para una prueba bilateral con α = 0.01, los valores críticos Z son:',
    opts: ['±1.960', '±2.326', '±1.645', '±2.576'],
    ans: 3, exp: 'Prueba bilateral α = 0.01 → cada cola tiene 0.005 → z₀.₀₀₅ = 2.576.' },

  { q: 'En una prueba unilateral derecha, si Z_calc=1.50 y Z_crit=1.645 (α=0.05):',
    opts: ['Se rechaza H₀', 'El resultado es altamente significativo', 'Se usa prueba bilateral', 'No se rechaza H₀ porque Z_calc < Z_crit'],
    ans: 3, exp: '1.50 < 1.645 → no alcanza la región de rechazo → no se rechaza H₀.' },

  { q: 'El valor crítico Z para una prueba unilateral con α = 0.01 es:',
    opts: ['1.645', '1.960', '2.576', '2.326'],
    ans: 3, exp: 'Para una sola cola α = 0.01 → z₀.₀₁ ≈ 2.326.' },

  // ── GRADOS DE LIBERTAD ────────────────────────────────────────────────
  { q: 'En una prueba t para una muestra con n=30, los grados de libertad son:',
    opts: ['29', '30', '28', '31'],
    ans: 0, exp: 'gl = n − 1 = 30 − 1 = 29.' },

  { q: 'En una prueba χ² de bondad de ajuste con 5 categorías, los gl son:',
    opts: ['5', '6', '3', '4'],
    ans: 3, exp: 'gl = número de categorías − 1 = 5 − 1 = 4.' },

  { q: 'En ANOVA con k=3 grupos y n=7 obs. por grupo (N=21), gl(error)=:',
    opts: ['20', '2', '6', '18'],
    ans: 3, exp: 'gl_Dentro = N − k = 21 − 3 = 18.' },

  { q: 'En tabla de contingencia 3×4, los gl del χ² de independencia son:',
    opts: ['12', '7', '8', '6'],
    ans: 3, exp: 'gl = (r−1)(c−1) = (3−1)(4−1) = 2·3 = 6.' },

  // ── INTERPRETACIÓN DE RESULTADOS ────────────────────────────────────────
  { q: '"No rechazar H₀" significa:',
    opts: ['H₀ es verdadera con certeza', 'H₁ es falsa', 'La prueba no es significativa nunca', 'No hay evidencia suficiente contra H₀, no que H₀ sea verdadera'],
    ans: 3, exp: 'La estadística frecuentista NO acepta H₀; solo dice que no hay evidencia suficiente para rechazarla.' },

  { q: 'Un resultado estadísticamente significativo implica:',
    opts: ['Evidencia contra H₀ a nivel α, no necesariamente importancia práctica', 'El efecto es grande y relevante', 'H₀ es definitivamente falsa', 'El p-valor es exactamente α'],
    ans: 0, exp: 'Significancia estadística ≠ significancia práctica. Con n grande, diferencias triviales pueden ser significativas.' },

  { q: 'Se prueba H₀: μ=70 en puntaje de examen. t_calc=2.8, p=0.007, α=0.05. Conclusión:',
    opts: ['No se rechaza H₀', 'La media es exactamente 70', 'Se necesita más muestra', 'Se rechaza H₀; hay evidencia de que la media ≠ 70'],
    ans: 3, exp: 'p = 0.007 < α = 0.05 → se rechaza H₀. Hay evidencia estadística de que μ ≠ 70.' },

  { q: 'Si ANOVA rechaza H₀, la interpretación correcta es:',
    opts: ['Al menos una de las medias grupales es diferente a las demás', 'Todas las medias son iguales', 'Todas las medias son diferentes entre sí', 'Solo la media mayor difiere'],
    ans: 0, exp: 'ANOVA solo garantiza que AL MENOS UNA media difiere. Las pruebas post hoc identifican cuáles.' },

  { q: 'Con p-valor=0.2513 y α=0.05, el reporte correcto es:',
    opts: ['Se rechaza H₀', 'La diferencia es altamente significativa', 'Hay error de cálculo', 'No se rechaza H₀ (p=0.2513>0.05); sin evidencia significativa'],
    ans: 3, exp: 'p > α → no se rechaza H₀. Se reporta el p-valor y se concluye ausencia de evidencia significativa.' },

  // ── ERRORES COMUNES ──────────────────────────────────────────────────────
  { q: 'El error de decir "el p-valor es la probabilidad de que H₀ sea cierta" es:',
    opts: ['Incorrecto: el p-valor es P(datos tan extremos | H₀ verdadera), no P(H₀)', 'Correcto en todos los casos', 'Correcto solo con α=0.05', 'Correcto en muestras grandes'],
    ans: 0, exp: 'p-valor = probabilidad de los datos dado que H₀ es verdadera, no de H₀ dado los datos.' },

  { q: 'Usar prueba t cuando n=200 y σ es desconocida versus usar Z produce:',
    opts: ['Grandes diferencias', 'Error tipo I inflado', 'IC más estrechos', 'Resultados casi idénticos (t → Z para n grande)'],
    ans: 3, exp: 'Para n grande, t_(n−1) ≈ N(0,1), por lo que ambas pruebas dan resultados prácticamente iguales.' },

  { q: 'Invertir H₀ y H₁ (poner la afirmación de investigación en H₀) produce:',
    opts: ['Ningún cambio práctico', 'Mayor potencia', 'Menor error tipo I', 'Se protege lo contrario: habría que "probar" H₀ en lugar de rechazarla'],
    ans: 3, exp: 'Nunca se "prueba" H₀; solo se rechaza. Si la afirmación de interés va en H₀, no hay manera de confirmarla estadísticamente.' },

  { q: 'Realizar múltiples pruebas t por pares en lugar de ANOVA infla:',
    opts: ['La tasa de error tipo I familiar (α acumulado)', 'La potencia individual', 'Los grados de libertad', 'El tamaño del efecto'],
    ans: 0, exp: 'Con k comparaciones de α=0.05 cada una, el error real supera 0.05 → ANOVA controla el error familiar.' },

  { q: 'Confundir nivel de significancia α con el p-valor puede llevar a:',
    opts: ['Mayor precisión', 'Mejor control del error tipo II', 'Resultados reproducibles', 'Tomar decisiones incorrectas de rechazo o no rechazo'],
    ans: 3, exp: 'α es fijo a priori; el p-valor es calculado a posteriori. Confundirlos distorsiona la interpretación.' },

  // ── APLICACIONES CONTEXTUALES ────────────────────────────────────────────
  { q: 'Una universidad ecuatoriana desea saber si el promedio de ingreso de egresados supera S/.3000. H₁ correcta:',
    opts: ['H₁: μ > 3000', 'H₁: μ < 3000', 'H₁: μ ≠ 3000', 'H₁: μ = 3000'],
    ans: 0, exp: '"Supera 3000" → H₁: μ > 3000. Prueba unilateral derecha.' },

  { q: 'Un investigador compara el rendimiento de alumnos de Lima vs Arequipa. n₁=20, n₂=22, σ desconocida. Prueba adecuada:',
    opts: ['t pareada', 'Z bilateral', 'χ² de bondad de ajuste', 't de dos muestras independientes'],
    ans: 3, exp: 'Dos grupos independientes, σ desconocida → prueba t de dos muestras independientes.' },

  { q: 'Se evalúa a 15 estudiantes antes y después de un curso intensivo. Prueba adecuada:',
    opts: ['t de dos muestras independientes', 'ANOVA', 'Prueba F', 't pareada (mismos sujetos en dos momentos)'],
    ans: 3, exp: 'Los mismos 15 estudiantes medidos antes y después → datos pareados → t pareada.' },

  { q: 'Se comparan los promedios de notas de 4 facultades de una universidad peruana. Prueba adecuada:',
    opts: ['Prueba t de dos muestras', 'Prueba Z bilateral', 'χ² de independencia', 'ANOVA de una vía'],
    ans: 3, exp: 'Comparar k=4 medias simultáneamente → ANOVA de una vía.' },

  { q: 'Una empresa farmacéutica prueba si la variabilidad en dosis supera σ²=4 mg². H₀ y estadístico correcto:',
    opts: ['H₀: σ²=4; F=S²/4', 'H₀: μ=4; t=(x̄−4)/(S/√n)', 'H₀: σ=2; Z=(S−2)/σ', 'H₀: σ²=4; χ²=(n−1)S²/4'],
    ans: 3, exp: 'Para varianza con valor hipotético, se usa el estadístico chi-cuadrado (n−1)S²/σ₀².' },

  { q: 'Un banco afirma que el tiempo de espera promedio es 5 min. n=36, x̄=5.8, S=2.4. t = ?',
    opts: ['0.33', '3.00', '1.00', '2.00'],
    ans: 3, exp: 't = (5.8−5)/(2.4/√36) = 0.8/(2.4/6) = 0.8/0.4 = 2.00; gl=35.' },

  { q: 'Con t=2.00, gl=35 y α=0.05 bilateral (t_crit≈2.030), la conclusión es:',
    opts: ['No se rechaza H₀: la diferencia no es significativa a α=0.05', 'Se rechaza H₀ claramente', 'El tiempo sí supera 5 min significativamente', 'Se necesita prueba no paramétrica'],
    ans: 0, exp: '|2.00| < 2.030 → no se rechaza H₀. No hay evidencia suficiente a α=0.05.' },

  { q: 'Si se desea una potencia del 90% para detectar una diferencia de 0.5 DE, el tamaño de muestra debe ser:',
    opts: ['Menor que si se aceptara 80% de potencia', 'Igual', 'No depende de la potencia deseada', 'Mayor que si se aceptara 80% de potencia'],
    ans: 3, exp: 'Mayor potencia deseada → mayor n necesario. Potencia 90% > 80% → se necesita más muestra.' },

  // ── PRUEBA Z PARA PROPORCIONES ───────────────────────────────────────────
  { q: 'H₀: p=0.40 vs H₁: p≠0.40, n=100, p̂=0.50. Z_calc = ?',
    opts: ['0.10', '1.00', '0.25', '2.04'],
    ans: 3, exp: 'Z = (0.50−0.40)/√(0.40·0.60/100) = 0.10/0.04899 ≈ 2.04.' },

  { q: 'Para la prueba de proporción, la condición de validez requiere:',
    opts: ['n·p₀ ≥ 5 y n·(1−p₀) ≥ 5', 'n ≥ 100 siempre', 'p₀ = 0.5', 'Distribución t de Student'],
    ans: 0, exp: 'Las condiciones np₀≥5 y n(1−p₀)≥5 garantizan la aproximación normal del estadístico Z.' },

  { q: 'Con H₀: p=0.25, n=200, p̂=0.20, el error estándar bajo H₀ es:',
    opts: ['√(0.20·0.80/200) ≈ 0.0283', '0.25/200', '0.05/√200', '√(0.25·0.75/200) ≈ 0.0306'],
    ans: 3, exp: 'Bajo H₀ se usa p₀=0.25: EE = √(p₀(1−p₀)/n) = √(0.25·0.75/200) ≈ 0.0306.' },

  // ── SUPUESTOS Y CONDICIONES ──────────────────────────────────────────────
  { q: 'El supuesto central de todas las pruebas paramétricas es:',
    opts: ['Las muestras deben tener n ≥ 100', 'No se requiere aleatoriedad', 'Los datos son nominales', 'Los datos provienen de distribuciones específicas (normalmente normalidad)'],
    ans: 3, exp: 'Las pruebas paramétricas (t, Z, F, χ²) asumen distribuciones específicas, principalmente normalidad.' },

  { q: 'Si los datos tienen distribución muy sesgada y n=8, la alternativa a la prueba t es:',
    opts: ['Una prueba no paramétrica (ej. Wilcoxon)', 'Prueba Z con σ conocida', 'ANOVA', 'Prueba F'],
    ans: 0, exp: 'Con n pequeño y no normalidad, las pruebas no paramétricas son más apropiadas.' },

  { q: 'El Teorema Central del Límite permite que la prueba t sea robusta cuando:',
    opts: ['Siempre que σ sea conocida', 'Los datos sean ordinales', 'p ≈ 0.5', 'n es suficientemente grande (ej. n ≥ 30), aunque la población no sea normal'],
    ans: 3, exp: 'Para n grande, X̄ es aproximadamente normal por el TCL, independientemente de la distribución original.' },

  { q: 'En la prueba t de dos muestras independientes, el supuesto de varianzas iguales se verifica con:',
    opts: ['La prueba t misma', 'El valor del p-valor', 'La diferencia de medias', 'Prueba de Levene o prueba F de varianzas'],
    ans: 3, exp: 'Antes de la prueba t de varianzas iguales, se verifica homocedasticidad con la prueba de Levene o F.' },

  // ── RELACIÓN IC Y PRUEBA DE HIPÓTESIS ───────────────────────────────────
  { q: 'IC del 95% para μ₁−μ₂ es (2.5, 8.3). Prueba H₀: μ₁−μ₂=0 con α=0.05:',
    opts: ['No se rechaza H₀', 'El IC es demasiado ancho', 'Se necesita calcular el p-valor', 'Se rechaza H₀ porque 0 no está en el IC'],
    ans: 3, exp: '0 ∉ (2.5, 8.3) → se rechaza H₀: μ₁=μ₂ a nivel α=0.05.' },

  { q: 'IC 99% para μ es (45.1, 54.9). H₀: μ=50 con α=0.01:',
    opts: ['No se rechaza H₀ porque 50 ∈ IC₉₉%', 'Se rechaza H₀', 'El IC confirma que μ=50', 'Se necesita prueba bilateral'],
    ans: 0, exp: '50 ∈ (45.1, 54.9) → no se rechaza H₀: μ=50 a nivel α=0.01.' },

  // ── CÁLCULOS ADICIONALES ────────────────────────────────────────────────
  { q: 'H₀: μ=120 vs H₁: μ<120. n=25, x̄=115, S=10. t_calc y gl son:',
    opts: ['t=2.50, gl=24', 't=−0.50, gl=25', 't=−5.00, gl=24', 't=−2.50, gl=24'],
    ans: 3, exp: 't = (115−120)/(10/√25) = −5/2 = −2.50; gl = n−1 = 24.' },

  { q: 'Con t_calc=−2.50 y t_crit=−1.711 (unilateral izquierda, gl=24, α=0.05):',
    opts: ['No rechazar H₀', 'Usar prueba bilateral', 'Aumentar α', 'Rechazar H₀ porque t_calc < t_crit'],
    ans: 3, exp: '−2.50 < −1.711 → t_calc cae en la región de rechazo (cola izquierda) → se rechaza H₀.' },

  { q: 'ANOVA: k=3, n=5 por grupo, SC_Entre=80, SC_Dentro=60. F_calc=?',
    opts: ['F = 1.33', 'F = 6.00', 'F = 4.00', 'F = 8.00'],
    ans: 3, exp: 'CM_Entre=80/2=40; CM_Dentro=60/12=5; F=40/5=8.00.' },

  { q: 'H₀: p=0.5, n=50, X=30 éxitos. p̂=0.60, Z_calc≈?',
    opts: ['2.00', '0.71', '0.10', '1.41'],
    ans: 3, exp: 'Z = (0.60−0.50)/√(0.5·0.5/50) = 0.10/0.07071 ≈ 1.41.' },

  { q: 'Para una prueba bilateral con Z_calc=−2.80 y α=0.05 (Z_crit=±1.96):',
    opts: ['No se rechaza H₀', 'Solo se rechaza en cola derecha', 'Z_calc está en zona de no rechazo', 'Se rechaza H₀ porque |−2.80| > 1.96'],
    ans: 3, exp: '|−2.80| = 2.80 > 1.96 → cae en la cola izquierda de la región de rechazo → se rechaza H₀.' },

  { q: 'Dos muestras: n₁=n₂=16, x̄₁=50, x̄₂=44, Sp=8. t_calc=?',
    opts: ['0.75', '4.24', '1.06', '2.12'],
    ans: 3, exp: 'EE = Sp·√(1/n₁+1/n₂) = 8·√(2/16) = 8/2.828 ≈ 2.828. t = (50−44)/2.828 ≈ 2.12.' },

  // ── PREGUNTAS ADICIONALES PARA LLEGAR A 91 ───────────────────────────────
  { q: 'El p-valor en una prueba unilateral derecha se calcula como:',
    opts: ['P(Z < z_obs)', 'P(Z > z_obs)', '2·P(Z > |z_obs|)', '1 − α'],
    ans: 1, exp: 'En prueba unilateral derecha, el p-valor = P(Z ≥ z_obs) = área en la cola derecha.' },

  { q: 'Un resultado con p = 0.001 comparado con p = 0.04 (ambos < 0.05) indica:',
    opts: ['p=0.001 tiene mayor evidencia contra H₀ que p=0.04', 'Ambos son igualmente significativos', 'p=0.04 es más significativo', 'Son equivalentes en decisión y evidencia'],
    ans: 0, exp: 'Aunque ambos llevan a rechazar H₀ a α=0.05, p=0.001 representa evidencia mucho más fuerte contra H₀.' },

  { q: 'H₀: μ₁=μ₂=μ₃ rechazada en ANOVA. Una prueba post hoc de Tukey revela que solo μ₁≠μ₃. ¿Qué implica?',
    opts: ['Los tres grupos son diferentes entre sí', 'μ₂ es igual a ambas μ₁ y μ₃', 'La ANOVA fue incorrecta', 'Solo μ₁ y μ₃ difieren significativamente; μ₂ no difiere de ninguna'],
    ans: 3, exp: 'Tukey reveló una sola diferencia significativa: μ₁≠μ₃. Los pares μ₁−μ₂ y μ₂−μ₃ no son significativos.' },

  { q: 'En el contexto universitario peruano, α=0.05 significa que aceptamos una probabilidad del ___ de rechazar una hipótesis verdadera:',
    opts: ['95%', '0.5%', '50%', '5%'],
    ans: 3, exp: 'α=0.05 = 5% de probabilidad máxima de cometer error tipo I (rechazar H₀ cuando es verdadera).' },

  { q: 'Un estadístico Z calculado en una prueba bilateral cae en la zona de no rechazo. Esto significa que:',
    opts: ['H₀ es verdadera con certeza', 'H₁ queda descartada para siempre', 'El experimento falló', 'Los datos no proveen evidencia suficiente para rechazar H₀ a ese nivel α'],
    ans: 3, exp: 'No rechazar H₀ es una conclusión provisional: los datos actuales no contradicen H₀, no que H₀ sea cierta.' },
];
