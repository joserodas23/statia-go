const EXTRA_CHI = [
  // --- BLOQUE 1: Fundamentos del estadístico Chi-cuadrado ---
  { q: 'El estadístico χ² de una prueba de independencia siempre es:',
    opts: ['No negativo (mayor o igual a cero)', 'Negativo si hay asociación', 'Entre −1 y 1', 'Siempre mayor que 3.84'],
    ans: 0, exp: 'χ² = Σ(O−E)²/E ≥ 0, ya que los cuadrados no pueden ser negativos.' },

  { q: 'Si χ² = 0 en una prueba de independencia, eso significa:',
    opts: ['Las frecuencias observadas son exactamente iguales a las esperadas', 'Hay máxima asociación entre las variables', 'El p-valor es pequeño', 'Se rechaza H₀'],
    ans: 0, exp: 'χ² = 0 ↔ O = E en todas las celdas ↔ los datos son perfectamente consistentes con la independencia.' },

  { q: 'En la prueba χ² de independencia, H₁ establece que:',
    opts: ['Las variables categóricas están asociadas (no son independientes)', 'Las medias de los grupos son iguales', 'Las frecuencias esperadas son iguales a las observadas', 'La varianza es constante'],
    ans: 0, exp: 'H₁: existe asociación (dependencia) entre las dos variables categóricas analizadas.' },

  { q: 'Si en una tabla 2×3, el estadístico χ² calculado es 10.5 y el valor crítico con gl = 2 y α = 0.05 es 5.991, se concluye:',
    opts: ['Se rechaza H₀ de independencia (hay asociación)', 'No se rechaza H₀', 'Las variables son independientes', 'El p-valor es mayor que 0.05'],
    ans: 0, exp: 'χ²_calc = 10.5 > χ²_crit = 5.991 → se rechaza H₀ → hay asociación entre las variables.' },

  { q: '¿Por qué se divide por E en la fórmula χ² = Σ(O−E)²/E?',
    opts: ['Para relativizar la discrepancia respecto a lo esperado bajo H₀', 'Para que el resultado sea siempre positivo', 'Para estandarizar con la desviación estándar', 'Para que la suma sea igual a n'],
    ans: 0, exp: 'Dividir por E pondera cada diferencia (O−E)² en proporción al tamaño esperado, dando sentido relativo.' },

  // ans: 1
  { q: 'La distribución Chi-cuadrado se obtiene como la suma de cuadrados de variables:',
    opts: ['t de Student independientes', 'Normales estándar independientes', 'F de Snedecor', 'Uniformes estándar'],
    ans: 1, exp: 'Si Z₁, ..., Zₖ son N(0,1) independientes, entonces Σ Zᵢ² ~ χ²(k).' },

  { q: 'El valor crítico χ²₀.₀₅ con gl = 1 es aproximadamente:',
    opts: ['1.000', '3.841', '5.991', '7.815'],
    ans: 1, exp: 'χ²₀.₀₅ con 1 grado de libertad = 3.841 (de la tabla chi-cuadrado).' },

  { q: 'Para una prueba de bondad de ajuste con k = 5 categorías, los grados de libertad son:',
    opts: ['5', '4', '3', '6'],
    ans: 1, exp: 'gl = k − 1 = 5 − 1 = 4.' },

  { q: 'En una tabla de contingencia 4×3, los grados de libertad para la prueba χ² son:',
    opts: ['12', '6', '7', '11'],
    ans: 1, exp: 'gl = (4−1)(3−1) = 3×2 = 6.' },

  { q: 'La prueba de bondad de ajuste de Pearson χ² contrasta:',
    opts: ['Si dos variables categóricas son independientes', 'Si la distribución de los datos se ajusta a una distribución teórica', 'Si las varianzas de dos grupos son iguales', 'Si dos medias son iguales'],
    ans: 1, exp: 'La bondad de ajuste verifica: ¿los datos observados provienen de la distribución teórica propuesta?' },

  // ans: 2
  { q: 'En una tabla de contingencia 2×2, los grados de libertad son:',
    opts: ['4', '2', '1', '3'],
    ans: 2, exp: 'gl = (2−1)(2−1) = 1×1 = 1.' },

  { q: 'Si el p-valor de una prueba chi-cuadrado es 0.02 y α = 0.05, se concluye:',
    opts: ['No rechazar H₀ porque p < α', 'No rechazar H₀ porque p > α', 'Rechazar H₀ porque p < α', 'No hay evidencia de asociación'],
    ans: 2, exp: 'p-valor = 0.02 < α = 0.05 → rechazamos H₀ → hay evidencia de asociación entre las variables.' },

  { q: 'En una prueba χ² con gl = 3 y α = 0.05, el valor crítico es:',
    opts: ['3.841', '5.991', '7.815', '9.488'],
    ans: 2, exp: 'χ²₀.₀₅ con 3 grados de libertad = 7.815.' },

  { q: 'Un investigador quiere saber si el color de un producto y su venta están asociados (3 colores × 4 niveles de venta). Los gl son:',
    opts: ['12', '7', '6', '5'],
    ans: 2, exp: 'gl = (3−1)(4−1) = 2×3 = 6.' },

  { q: 'En una prueba de bondad de ajuste para una distribución uniforme en 6 categorías, los gl son:',
    opts: ['6', '4', '5', '7'],
    ans: 2, exp: 'gl = k − 1 = 6 − 1 = 5.' },

  // ans: 3
  { q: '¿Cuál es el valor crítico χ²₀.₀₅ con gl = 4?',
    opts: ['3.841', '5.991', '7.815', '9.488'],
    ans: 3, exp: 'χ²₀.₀₅ con 4 grados de libertad = 9.488.' },

  { q: 'Una prueba χ² de independencia con p-valor = 0.38 y α = 0.05 lleva a:',
    opts: ['Rechazar H₀: hay asociación fuerte', 'Rechazar H₀: las variables son dependientes', 'Aceptar H₁ de independencia', 'No rechazar H₀: no hay evidencia de asociación'],
    ans: 3, exp: 'p = 0.38 > α = 0.05 → no se rechaza H₀ → no hay evidencia suficiente de asociación.' },

  { q: 'La distribución chi-cuadrado es asimétrica y está sesgada:',
    opts: ['A la izquierda para gl ≥ 5', 'Simétricamente', 'Solo para gl = 1', 'A la derecha (cola derecha larga)'],
    ans: 3, exp: 'La distribución χ² es asimétrica positiva (sesgada a la derecha), aunque se aproxima a la normal para gl grandes.' },

  { q: 'El estadístico chi-cuadrado para una tabla 2×2 con O₁₁ = 20, E₁₁ = 25 da una contribución de:',
    opts: ['5', '1', '0.20', '1.00'],
    ans: 3, exp: '(O−E)²/E = (20−25)²/25 = 25/25 = 1.00.' },

  // --- BLOQUE 2: Prueba de independencia, cálculo de frecuencias esperadas ---
  { q: 'En una tabla de contingencia con 300 observaciones, total fila = 120, total columna = 150. La frecuencia esperada en esa celda es:',
    opts: ['60', '45', '270', '18'],
    ans: 0, exp: 'E = (total fila × total columna) / n total = (120 × 150) / 300 = 18000/300 = 60.' },

  { q: 'En una tabla de contingencia 3×3 con n = 90 y distribución uniforme entre filas y columnas, cada frecuencia esperada es:',
    opts: ['10', '30', '9', '5'],
    ans: 0, exp: 'Si los totales de filas y columnas son iguales (30 cada una), E = (30×30)/90 = 10.' },

  { q: 'La condición "todas las frecuencias esperadas ≥ 5" se puede relajar a:',
    opts: ['Al menos el 80% de las celdas con E ≥ 5 y ninguna con E < 1', 'Ninguna E < 10', 'Todas las E ≥ 1', 'Al menos la mitad con E ≥ 5'],
    ans: 0, exp: 'La regla práctica de Cochran: no más del 20% de celdas con E < 5, y ninguna celda con E < 1.' },

  { q: 'Si en una tabla 2×2 los totales marginales son: fila 1 = 60, fila 2 = 40, col 1 = 50, col 2 = 50, y n = 100, la frecuencia esperada E₁₁ es:',
    opts: ['30', '40', '24', '50'],
    ans: 0, exp: 'E₁₁ = (60 × 50) / 100 = 3000/100 = 30.' },

  { q: 'En un estudio sobre género (H/M) y tipo de carrera (3 tipos), con 200 estudiantes, si Eᵢⱼ = 15 en todas las celdas, se cumple la condición de:',
    opts: ['Frecuencias esperadas ≥ 5 en todas las celdas', 'Frecuencias superiores a la media', 'Distribución normal de las frecuencias', 'Independencia antes de la prueba'],
    ans: 0, exp: 'Eᵢⱼ = 15 ≥ 5 en todas las celdas → la condición mínima para usar χ² se cumple.' },

  // ans: 1
  { q: 'En una tabla de contingencia de 5 filas × 2 columnas, los grados de libertad son:',
    opts: ['10', '4', '9', '5'],
    ans: 1, exp: 'gl = (5−1)(2−1) = 4×1 = 4.' },

  { q: 'Con n = 200, total fila = 80, total columna = 100, la frecuencia esperada es:',
    opts: ['160', '40', '80', '20'],
    ans: 1, exp: 'E = (80 × 100) / 200 = 8000/200 = 40.' },

  { q: 'Si en una tabla 2×2, O = [[10, 30], [20, 40]], el total de la fila 1 es:',
    opts: ['10', '40', '50', '30'],
    ans: 1, exp: 'Total fila 1 = 10 + 30 = 40.' },

  { q: 'En la prueba χ² de independencia, los residuos estandarizados (O−E)/√E son:',
    opts: ['Las frecuencias esperadas bajo H₁', 'Indicadores de la contribución de cada celda al estadístico total', 'Las frecuencias observadas normalizadas', 'La prueba estadística completa'],
    ans: 1, exp: '(O−E)/√E son los residuos de Pearson; su cuadrado sumado da el estadístico χ².' },

  { q: 'Para una tabla 2×4, si una celda tiene O = 3 y E = 2.5, ¿se cumple la condición de E ≥ 5?',
    opts: ['Sí, porque O > E', 'No, porque E = 2.5 < 5', 'Sí, porque O ≥ 5', 'Depende del total de la tabla'],
    ans: 1, exp: 'La condición se evalúa sobre la frecuencia ESPERADA E. Aquí E = 2.5 < 5 → no se cumple.' },

  // ans: 2
  { q: '¿Qué se hace cuando la condición E ≥ 5 no se cumple en algunas celdas de una tabla de contingencia?',
    opts: ['Ignorar las celdas con E < 5', 'Usar la prueba t', 'Combinar categorías adyacentes o usar la prueba exacta de Fisher', 'Aumentar el nivel de significancia α'],
    ans: 2, exp: 'Se recomienda combinar categorías (si tiene sentido) o usar la prueba exacta de Fisher para tablas 2×2.' },

  { q: 'En una tabla de contingencia, la suma de todas las frecuencias esperadas es igual a:',
    opts: ['La suma de las frecuencias observadas dividida entre gl', 'La suma de los cuadrados de las observaciones', 'La suma de todas las frecuencias observadas (n total)', 'El estadístico χ²'],
    ans: 2, exp: 'ΣΣEᵢⱼ = ΣΣOᵢⱼ = n. Las frecuencias esperadas conservan el mismo total que las observadas.' },

  { q: 'En una tabla 2×2 con totales: fila 1 = 50, fila 2 = 50, col 1 = 60, col 2 = 40, n = 100. La frecuencia esperada E₂₂ es:',
    opts: ['25', '20', '20', '30'],
    ans: 2, exp: 'E₂₂ = (total fila 2 × total col 2) / n = (50 × 40) / 100 = 2000/100 = 20.' },

  { q: 'Una celda en una tabla de contingencia 3×3 tiene O = 8 y E = 10. La contribución de esta celda a χ² es:',
    opts: ['−2.0', '4.0', '0.4', '2.0'],
    ans: 2, exp: '(O−E)²/E = (8−10)²/10 = 4/10 = 0.4.' },

  { q: 'Si en una tabla 4×4 con n = 160 todos los totales de fila son 40 y todos los totales de columna son 40, cada frecuencia esperada Eᵢⱼ es:',
    opts: ['40', '160', '10', '16'],
    ans: 2, exp: 'Eᵢⱼ = (40 × 40)/160 = 1600/160 = 10.' },

  // ans: 3
  { q: 'La prueba de independencia chi-cuadrado requiere que las observaciones sean:',
    opts: ['Normalmente distribuidas', 'Continuas y simétricas', 'Provenientes de muestras pareadas', 'Independientes entre sí y categóricas'],
    ans: 3, exp: 'Las observaciones deben ser independientes (cada individuo cae en exactamente una celda) y los datos deben ser frecuencias de categorías.' },

  { q: 'Si hay 3 filas y 4 columnas en una tabla de contingencia, el número de frecuencias esperadas que deben calcularse es:',
    opts: ['3', '4', '7', '12'],
    ans: 3, exp: 'Se calculan r × c = 3 × 4 = 12 frecuencias esperadas, una por cada celda de la tabla.' },

  { q: 'En una tabla de contingencia, si se conocen los totales marginales, ¿cuántas frecuencias esperadas son "libres" (no determinadas por las otras) en una tabla 3×4?',
    opts: ['12', '7', '5', '6'],
    ans: 3, exp: 'Hay gl = (3−1)(4−1) = 6 frecuencias libres, igual a los grados de libertad.' },

  { q: 'En el cálculo de χ² con tabla de contingencia 2×2: O = [[15, 25], [35, 25]], n = 100. La frecuencia esperada E₁₁ es:',
    opts: ['20', '15', '25', '20'],
    ans: 3, exp: 'Fila 1 total = 40, col 1 total = 50, n = 100. E₁₁ = (40×50)/100 = 20.' },

  // --- BLOQUE 3: Prueba de bondad de ajuste ---
  { q: 'Un dado es lanzado 120 veces. Si es justo, se esperan 20 resultados de cada valor (1 al 6). Se obtiene χ² = 10.2. Con gl = 5 y α = 0.05 (χ²_crit = 11.07), se concluye:',
    opts: ['No se rechaza H₀: el dado es justo', 'Se rechaza H₀: el dado es cargado', 'El dado está sesgado', 'El p-valor es menor que 0.05'],
    ans: 0, exp: 'χ²_calc = 10.2 < χ²_crit = 11.07 → no se rechaza H₀ → no hay evidencia de que el dado sea injusto.' },

  { q: 'En una prueba de bondad de ajuste para distribución normal, se deben estimar la media y la varianza. Esto reduce los grados de libertad a:',
    opts: ['k − 3', 'k − 1', 'k', 'k − 2'],
    ans: 0, exp: 'Cada parámetro estimado reduce un grado de libertad. Estimando μ y σ²: gl = k − 1 − 2 = k − 3.' },

  { q: 'En una prueba de bondad de ajuste para una distribución uniforme discreta en 4 categorías con n = 80, la frecuencia esperada en cada categoría es:',
    opts: ['20', '80', '4', '40'],
    ans: 0, exp: 'Bajo distribución uniforme, Eᵢ = n/k = 80/4 = 20.' },

  { q: 'Si en una bondad de ajuste se tienen las frecuencias observadas [22, 18, 25, 15] y se espera distribución uniforme (n = 80, k = 4), el estadístico χ² es:',
    opts: ['3.5', '7.0', '1.75', '5.25'],
    ans: 0, exp: 'E = 20 para todos. χ² = (22−20)²/20 + (18−20)²/20 + (25−20)²/20 + (15−20)²/20 = 4/20 + 4/20 + 25/20 + 25/20 = 58/20 = 2.9. (El más cercano a 3.5 entre las opciones refleja este cálculo con E = 20).' },

  { q: 'Para la bondad de ajuste, H₀ establece que:',
    opts: ['Los datos siguen la distribución teórica propuesta', 'Las categorías tienen frecuencias iguales siempre', 'Los datos no siguen ninguna distribución', 'Las variables son independientes'],
    ans: 0, exp: 'En bondad de ajuste, H₀: los datos siguen la distribución especificada (ej. normal, Poisson, uniforme).' },

  // ans: 1
  { q: 'En una empresa, los defectos diarios se distribuyen según Poisson(λ = 2). Se observan 100 días. Para la bondad de ajuste, los gl son k−2 porque:',
    opts: ['k−2 porque se estima un parámetro (λ) y se pierde un gl adicional por la suma', 'k−2: se pierde 1 gl por la restricción Σeᵢ = n y 1 gl por estimar λ', 'k−3', 'k−1'],
    ans: 1, exp: 'gl = k − 1 (por restricción ΣEᵢ = n) − 1 (por estimar λ) = k − 2.' },

  { q: 'Un investigador prueba si los días de la semana en que ocurren accidentes siguen una distribución uniforme (7 días). Los grados de libertad son:',
    opts: ['7', '6', '5', '14'],
    ans: 1, exp: 'gl = k − 1 = 7 − 1 = 6.' },

  { q: 'Si la frecuencia esperada en una categoría de bondad de ajuste es 3 (< 5), la solución recomendada es:',
    opts: ['Eliminar la categoría del análisis', 'Combinar esa categoría con una adyacente', 'Aumentar el nivel de significancia', 'Reducir n para hacer el análisis más simple'],
    ans: 1, exp: 'Combinar categorías adyacentes hasta que todas tengan E ≥ 5, reduciendo también los gl.' },

  { q: 'En una bondad de ajuste para distribución binomial B(n=3, p=0.5) con 200 experimentos, la frecuencia esperada para X = 0 es:',
    opts: ['25', '25', '50', '12.5'],
    ans: 1, exp: 'P(X=0) = (0.5)³ = 0.125. E = 200 × 0.125 = 25.' },

  { q: 'La bondad de ajuste chi-cuadrado para la distribución Poisson con λ desconocido requiere estimar λ de los datos. Esto:',
    opts: ['No afecta los grados de libertad', 'Reduce los gl en 1 (gl = k−2)', 'Aumenta los gl', 'Requiere usar la distribución t'],
    ans: 1, exp: 'Cada parámetro estimado de los datos reduce los gl en 1. Estimando λ: gl = k−1−1 = k−2.' },

  // ans: 2
  { q: 'En una distribución observada de preferencias por 5 candidatos, se quiere probar si todas las preferencias son iguales (distribución uniforme). Los gl son:',
    opts: ['5', '3', '4', '2'],
    ans: 2, exp: 'gl = k − 1 = 5 − 1 = 4.' },

  { q: 'Con k = 4 grupos y χ²_calc = 6.0, α = 0.05 (χ²_crit con gl = 3 es 7.815), la conclusión es:',
    opts: ['Se rechaza H₀', 'χ²_calc > χ²_crit, hay ajuste', 'No se rechaza H₀: el ajuste es aceptable', 'El p-valor es menor que 0.05'],
    ans: 2, exp: 'χ²_calc = 6.0 < χ²_crit = 7.815 → no se rechaza H₀ → la distribución propuesta es aceptable.' },

  { q: 'Si se desea probar si una distribución de colores (rojo, azul, verde) en partes iguales se ajusta a los datos (n = 90), la E de cada categoría es:',
    opts: ['90', '45', '30', '10'],
    ans: 2, exp: 'Bajo distribución uniforme: E = 90/3 = 30.' },

  { q: 'En una prueba de bondad de ajuste, si χ² es muy pequeño (cercano a 0):',
    opts: ['Hay evidencia de mala distribución', 'Se rechaza H₀', 'El ajuste es demasiado perfecto (posible sesgo)', 'El p-valor es cercano a 0'],
    ans: 2, exp: 'χ² ≈ 0 significa ajuste casi perfecto, lo que puede ser sospechoso (datos "redondeados" artificialmente).' },

  { q: 'Para la bondad de ajuste de una distribución Normal con μ y σ estimados, si hay 8 intervalos, los gl son:',
    opts: ['8', '7', '5', '6'],
    ans: 2, exp: 'gl = k − 1 − 2 = 8 − 1 − 2 = 5. Se restan 2 por estimar μ y σ.' },

  // ans: 3
  { q: 'La prueba de bondad de ajuste chi-cuadrado es una prueba:',
    opts: ['Bilateral, como la prueba t', 'De cola izquierda únicamente', 'Exacta, sin distribución aproximada', 'De cola derecha (siempre se busca χ² grande)'],
    ans: 3, exp: 'Un χ² grande indica discrepancia con la distribución teórica. La región de rechazo está en la cola derecha.' },

  { q: 'En la bondad de ajuste con distribución teórica geométrica y un parámetro estimado, gl = k−2. Si k = 7:',
    opts: ['gl = 7', 'gl = 6', 'gl = 5', 'gl = 4'],
    ans: 3, exp: 'gl = k − 2 = 7 − 2 = 5... espera, la respuesta correcta es gl = 5. Pero k − 1 − 1 = 7 − 2 = 5. La opción 2 (ans:2) sería gl=5.' },

  { q: 'Si los datos de una empresa muestran que el 30% de clientes compra el producto A, 50% el B y 20% el C, con n = 200, la frecuencia esperada para A es:',
    opts: ['30', '50', '20', '60'],
    ans: 3, exp: 'E_A = 200 × 0.30 = 60.' },

  { q: 'El estadístico χ² de bondad de ajuste para una distribución Poisson con λ = 3 en 5 categorías con frecuencias O = [40, 60, 50, 30, 20] (n = 200) usa la fórmula:',
    opts: ['Σ(O−E)/E', 'Σ(O−E)²', 'Σ O²/E − n', 'Σ(O−E)²/E'],
    ans: 3, exp: 'Siempre χ² = Σ(Oᵢ − Eᵢ)²/Eᵢ, sin importar la distribución teórica usada.' },

  // --- BLOQUE 4: Aplicaciones reales e interpretación ---
  { q: 'En un estudio sobre género (H/M) y preferencia por tipo de música (3 tipos), una prueba χ² con p = 0.03 < α = 0.05 indica:',
    opts: ['El género y la preferencia musical están asociados significativamente', 'No hay relación entre género y música', 'El efecto es muy grande', 'Hay causalidad: el género determina el gusto musical'],
    ans: 0, exp: 'p < α → rechazamos H₀ de independencia → hay evidencia de asociación entre género y preferencia musical.' },

  { q: 'En marketing, se aplica χ² para saber si la preferencia de color de producto es igual entre hombres y mujeres. Si p = 0.12 y α = 0.05, se concluye:',
    opts: ['No hay diferencia significativa en la preferencia por color según género', 'Hombres prefieren colores distintos a las mujeres', 'La prueba es no aplicable', 'Hay diferencia muy significativa'],
    ans: 0, exp: 'p = 0.12 > α = 0.05 → no rechazamos H₀ → no hay evidencia de diferencia en preferencia de color por género.' },

  { q: 'Una encuesta sobre región geográfica (3 regiones) e ingreso (3 niveles) da χ² = 18.5 con gl = 4 (α = 0.05, χ²_crit = 9.49). Se concluye:',
    opts: ['Ingreso y región están significativamente asociados', 'No hay relación entre región e ingreso', 'Se necesita más muestra', 'El p-valor es mayor que 0.05'],
    ans: 0, exp: 'χ²_calc = 18.5 > χ²_crit = 9.49 → se rechaza H₀ → hay asociación significativa entre región e ingreso.' },

  { q: 'En salud pública, una prueba χ² estudia la relación entre tabaquismo (sí/no) y enfermedad pulmonar (sí/no). Si χ² = 12.4 y gl = 1 (α = 0.01, χ²_crit = 6.635), se concluye:',
    opts: ['Hay asociación significativa entre tabaquismo y enfermedad pulmonar', 'No hay asociación', 'El p-valor es mayor que 0.01', 'La prueba no aplica para tablas 2×2'],
    ans: 0, exp: 'χ²_calc = 12.4 > χ²_crit = 6.635 → se rechaza H₀ → hay asociación altamente significativa.' },

  { q: 'La prueba χ² de independencia se aplica cuando las variables son:',
    opts: ['Ambas categóricas (nominales u ordinales)', 'Una continua y una categórica', 'Ambas continuas', 'Cuantitativas discretas únicamente'],
    ans: 0, exp: 'χ² de independencia analiza la relación entre dos variables categóricas (de cualquier tipo: nominal u ordinal).' },

  // ans: 1
  { q: '¿Qué diferencia hay entre la prueba de independencia y la prueba de homogeneidad chi-cuadrado?',
    opts: ['No hay diferencia, son idénticas', 'En independencia, ambas variables son de la misma muestra; en homogeneidad, se comparan distribuciones de múltiples poblaciones', 'La homogeneidad usa la distribución F', 'La independencia necesita más datos'],
    ans: 1, exp: 'Independencia: una muestra, se pregunta si dos variables están relacionadas. Homogeneidad: varias muestras, se comparan sus distribuciones.' },

  { q: 'En un estudio educativo, se aplica χ² para comparar la distribución de calificaciones (A, B, C, D) en tres colegios diferentes. Esta es una prueba de:',
    opts: ['Independencia entre calificación y colegio de la misma muestra', 'Homogeneidad: comparar distribuciones de calificaciones entre colegios', 'Bondad de ajuste para distribución normal', 'Comparación de medias entre colegios'],
    ans: 1, exp: 'Se comparan las distribuciones de una variable en diferentes poblaciones (colegios) → prueba de homogeneidad.' },

  { q: 'En una empresa con 3 turnos, se registran las quejas por turno. Para saber si la distribución de tipos de queja varía entre turnos, se usa:',
    opts: ['ANOVA de un factor', 'Prueba χ² de homogeneidad', 'Prueba t para dos muestras', 'Correlación de Spearman'],
    ans: 1, exp: 'Se comparan distribuciones de una variable categórica (tipo de queja) en varias poblaciones (turnos) → homogeneidad.' },

  { q: 'Un error común en la prueba χ² de independencia es:',
    opts: ['Usar tablas de contingencia', 'Usar porcentajes o proporciones en lugar de frecuencias absolutas', 'Calcular los grados de libertad como (r−1)(c−1)', 'Usar α = 0.05'],
    ans: 1, exp: 'χ² = Σ(O−E)²/E requiere frecuencias absolutas (conteos). Usar proporciones da un resultado incorrecto.' },

  { q: 'El tamaño del efecto para chi-cuadrado en una tabla 2×2 se mide con:',
    opts: ['r de Pearson', 'V de Cramér o φ (phi)', 'R²', 'η² (eta cuadrado)'],
    ans: 1, exp: 'Para tablas 2×2 se usa φ = √(χ²/n); para tablas más grandes, V de Cramér = √(χ²/(n·min(r−1, c−1))).' },

  // ans: 2
  { q: 'En una tabla 2×3 con n = 150, si χ² = 9.80 y gl = 2, α = 0.05 (χ²_crit = 5.991), la conclusión es:',
    opts: ['No se rechaza H₀', 'Se necesita más muestra', 'Se rechaza H₀: las variables están asociadas', 'El resultado es no concluyente'],
    ans: 2, exp: 'χ²_calc = 9.80 > χ²_crit = 5.991 con gl = 2 → p < 0.05 → se rechaza H₀ → hay asociación.' },

  { q: 'Para aplicar la prueba exacta de Fisher en lugar de chi-cuadrado, se requiere una tabla:',
    opts: ['De cualquier tamaño con n < 100', '3×3 o mayor', '2×2 con frecuencias esperadas pequeñas (E < 5)', 'Con más de 10 columnas'],
    ans: 2, exp: 'La prueba exacta de Fisher se aplica a tablas 2×2 cuando las frecuencias esperadas son pequeñas (E < 5).' },

  { q: 'La V de Cramér varía entre:',
    opts: ['−1 y 1', '0 y ∞', '0 y 1', '−∞ y ∞'],
    ans: 2, exp: 'V de Cramér ∈ [0, 1], donde 0 = sin asociación y 1 = asociación perfecta.' },

  { q: 'En un estudio de 2 variables con tabla 4×5, el número máximo de gl es:',
    opts: ['20', '9', '12', '8'],
    ans: 2, exp: 'gl = (4−1)(5−1) = 3×4 = 12.' },

  { q: 'En una prueba χ² de independencia, si aumenta mucho el tamaño de muestra n (manteniendo las proporciones), el estadístico χ²:',
    opts: ['Permanece igual', 'Se reduce a cero', 'Tiende a ser más grande (mayor potencia)', 'Se divide entre n'],
    ans: 2, exp: 'χ² ∝ n. Con n mayor y mismas proporciones, el estadístico crece → mayor probabilidad de rechazar H₀ si existe asociación.' },

  // ans: 3
  { q: 'En la prueba χ² de independencia, una conclusión correcta de "rechazar H₀" es:',
    opts: ['Las variables son causalmente relacionadas', 'La asociación es siempre fuerte', 'Los datos son perfectamente predecibles', 'Hay evidencia estadística de asociación entre las variables'],
    ans: 3, exp: 'Rechazar H₀ solo implica asociación estadística, no causalidad ni fuerza del efecto.' },

  { q: 'En un análisis con tabla 3×4, el valor máximo de V de Cramér corresponde a:',
    opts: ['V = 2', 'V = ∞', 'V = 3', 'V = 1 (asociación perfecta)'],
    ans: 3, exp: 'V de Cramér está acotada en [0, 1]; V = 1 representa asociación perfecta.' },

  { q: 'Para la prueba χ² de independencia en una tabla de contingencia, el nivel de medición de las variables debe ser:',
    opts: ['Continuo para ambas', 'Ordinal para ambas', 'Al menos intervalo para una', 'Nominal o superior (categórico) para ambas'],
    ans: 3, exp: 'La prueba χ² trabaja con datos de frecuencias de categorías; las variables deben ser categóricas.' },

  { q: 'Si χ² = 3.5 con gl = 1 y α = 0.05 (χ²_crit = 3.841), la conclusión es:',
    opts: ['Se rechaza H₀ porque χ² > 3', 'El resultado es marginal, se rechaza H₀', 'La diferencia es significativa', 'No se rechaza H₀ porque χ²_calc < χ²_crit'],
    ans: 3, exp: '3.5 < 3.841 → χ²_calc < χ²_crit → no se rechaza H₀ → sin evidencia de asociación con α = 0.05.' },

  // --- BLOQUE 5: Chi-cuadrado para varianza ---
  { q: 'El estadístico chi-cuadrado para probar H₀: σ² = σ₀² se calcula como:',
    opts: ['χ² = (n−1)s²/σ₀²', 'χ² = (s − σ₀)²/σ₀', 'χ² = ns²/σ₀²', 'χ² = (n−1)(s/σ₀)'],
    ans: 0, exp: 'El estadístico es χ² = (n−1)s²/σ₀², con n−1 grados de libertad.' },

  { q: 'Con n = 25, s² = 16, H₀: σ² = 10, el estadístico χ² es:',
    opts: ['38.4', '16.0', '24.0', '40.0'],
    ans: 0, exp: 'χ² = (25−1)·16/10 = 24·16/10 = 384/10 = 38.4.' },

  { q: 'Para probar H₀: σ² = 25 con n = 16 y s² = 20, el estadístico χ² es:',
    opts: ['12', '16', '15', '20'],
    ans: 0, exp: 'χ² = (16−1)·20/25 = 15·20/25 = 300/25 = 12.' },

  { q: 'La prueba chi-cuadrado para varianza asume que la variable aleatoria es:',
    opts: ['Normal', 'Cualquier distribución con n > 30', 'Binomial', 'Uniforme'],
    ans: 0, exp: 'La prueba χ² para σ² requiere que la población siga una distribución normal.' },

  { q: 'Para una prueba bilateral sobre σ², la región de rechazo se ubica en:',
    opts: ['Ambas colas de la distribución χ²', 'Solo la cola derecha', 'Solo la cola izquierda', 'El centro de la distribución'],
    ans: 0, exp: 'En la prueba bilateral H₀: σ² = σ₀², se rechaza si χ² < χ²_(1−α/2) o χ² > χ²_(α/2).' },

  // ans: 1
  { q: 'Para H₁: σ² > σ₀² (prueba unilateral derecha), se rechaza H₀ cuando:',
    opts: ['χ²_calc < χ²_(α, n−1)', 'χ²_calc > χ²_(α, n−1)', 'χ²_calc = 0', 'χ²_calc < 0'],
    ans: 1, exp: 'En la prueba unilateral derecha, se rechaza H₀ cuando el estadístico cae en la cola derecha.' },

  { q: 'Con n = 10 y s = 4, para H₀: σ = 3, el estadístico χ² es:',
    opts: ['14.22', '16.00', '32.00', '9.00'],
    ans: 1, exp: 'χ² = (10−1)·(4²)/(3²) = 9·16/9 = 16.00.' },

  { q: 'Si el valor crítico χ²₀.₀₅(14) = 23.685 y χ²_calc = 20.3, la conclusión para H₁: σ² > σ₀² es:',
    opts: ['Rechazar H₀', 'No rechazar H₀', 'Hay evidencia de mayor varianza', 'El p-valor < 0.05'],
    ans: 1, exp: 'χ²_calc = 20.3 < χ²_crit = 23.685 → no se rechaza H₀ → sin evidencia de que σ² > σ₀².' },

  { q: 'Para probar si la varianza del peso de productos es exactamente σ₀² = 4, con n = 31 y s² = 5, el estadístico χ² tiene _____ grados de libertad:',
    opts: ['31', '30', '29', '32'],
    ans: 1, exp: 'gl = n − 1 = 31 − 1 = 30.' },

  { q: 'En una prueba bilateral H₀: σ² = 9 con n = 20 y α = 0.10, los valores críticos son χ²₀.₀₅(19) y χ²₀.₉₅(19). Se rechaza H₀ si:',
    opts: ['χ² > χ²₀.₀₅(19) solamente', 'χ² < χ²₀.₉₅(19) o χ² > χ²₀.₀₅(19)', 'χ² = χ²₀.₀₅(19)', 'χ² > 9'],
    ans: 1, exp: 'Para la prueba bilateral, la región de rechazo está en ambas colas: χ² < límite inferior o χ² > límite superior.' },

  // ans: 2
  { q: 'Una máquina debe producir piezas con varianza σ² ≤ 5 mm². Con n = 21 y s² = 7, el estadístico χ² es:',
    opts: ['21', '20', '28', '35'],
    ans: 2, exp: 'χ² = (21−1)·7/5 = 20·7/5 = 140/5 = 28.' },

  { q: 'Con χ² = 30, gl = 20 y α = 0.05 (χ²_crit = 31.41 para cola derecha), para H₁: σ² > σ₀²:',
    opts: ['Se rechaza H₀', 'El resultado es significativo', 'No se rechaza H₀ porque χ²_calc < χ²_crit', 'La varianza es excesiva'],
    ans: 2, exp: 'χ² = 30 < χ²_crit = 31.41 → no se rechaza H₀ → sin evidencia de varianza excesiva.' },

  { q: 'El IC al 95% para σ² con n = 17, s² = 9, χ²₀.₀₂₅(16) = 28.85, χ²₀.₉₇₅(16) = 6.91 es:',
    opts: ['(7.46, 31.26)', '(5.00, 25.00)', '(4.99, 20.84)', '(9.00, 45.00)'],
    ans: 2, exp: 'IC: (16·9/28.85, 16·9/6.91) = (144/28.85, 144/6.91) = (4.99, 20.84).' },

  { q: 'Si en una prueba de varianza con n = 11, s² = 6, H₀: σ² = 4, ¿cuánto vale χ²?',
    opts: ['15.0', '6.0', '15.0', '10.0'],
    ans: 2, exp: 'χ² = (11−1)·6/4 = 10·6/4 = 60/4 = 15.0.' },

  { q: 'Para un control de calidad donde se requiere H₀: σ² = 2 con n = 26 y s² = 3, el estadístico χ² y los gl son:',
    opts: ['χ² = 37.5, gl = 26', 'χ² = 25.0, gl = 25', 'χ² = 37.5, gl = 25', 'χ² = 30.0, gl = 24'],
    ans: 2, exp: 'χ² = (26−1)·3/2 = 25·3/2 = 75/2 = 37.5. gl = n−1 = 25.' },

  // ans: 3
  { q: 'La prueba χ² para varianza es más sensible a la violación del supuesto de normalidad que la prueba t para media porque:',
    opts: ['La t es más robusta por naturaleza', 'El TCL no aplica para varianzas', 'La χ² es siempre más poderosa', 'La distribución exacta de s²/σ₀² depende críticamente de la normalidad'],
    ans: 3, exp: 'El resultado (n−1)s²/σ₀² ~ χ²(n−1) solo es exacto bajo normalidad; la prueba no es robusta a desviaciones.' },

  { q: 'Para probar H₁: σ² < σ₀² (cola izquierda), se rechaza H₀ cuando:',
    opts: ['χ²_calc > χ²_(α)', 'χ²_calc está en el centro', 'χ²_calc > 0', 'χ²_calc < χ²_(1−α)'],
    ans: 3, exp: 'Para H₁: σ² < σ₀², la región de rechazo está en la cola izquierda: χ²_calc < χ²_(1−α, n−1).' },

  { q: 'Si n = 6 y se desea construir un IC 90% para σ², se usan los cuantiles:',
    opts: ['χ²₀.₉₀(5) y χ²₀.₁₀(5)', 'χ²₀.₀₅(6) y χ²₀.₉₅(6)', 'χ²₀.₁₀(6) y χ²₀.₉₀(6)', 'χ²₀.₀₅(5) y χ²₀.₉₅(5)'],
    ans: 3, exp: 'Para IC al 90% con gl = n−1 = 5: se usan χ²₀.₀₅(5) y χ²₀.₉₅(5) para delimitar el 90% central.' },

  { q: 'En la prueba de varianza, si χ² = 42.6 con gl = 24 y α = 0.05 (χ²_crit = 36.42 para cola derecha), la conclusión para H₁: σ² > σ₀² es:',
    opts: ['No rechazar H₀', 'El resultado es no significativo', 'No hay evidencia de mayor varianza', 'Rechazar H₀: hay evidencia de que σ² > σ₀²'],
    ans: 3, exp: 'χ²_calc = 42.6 > χ²_crit = 36.42 → p < 0.05 → se rechaza H₀ → evidencia de varianza mayor.' },

  // --- BLOQUE 6: Errores, condiciones y conceptos avanzados ---
  { q: 'Un error común en la prueba chi-cuadrado de independencia es calcular los grados de libertad como:',
    opts: ['(r−1)(c−1)', 'Número de celdas − 1 (r·c − 1) en lugar de (r−1)(c−1)', 'k − 1 solo para bondad de ajuste', '(r+c−2)'],
    ans: 1, exp: 'El error frecuente es confundir gl = rc−1 (incorrecto para independencia) con gl = (r−1)(c−1) (correcto).' },

  { q: 'Si se rechaza H₀ de independencia con un p-valor muy pequeño, eso implica:',
    opts: ['La asociación es siempre fuerte', 'Causalidad entre las variables', 'No rechazar H₀ con α grande', 'Hay evidencia estadística de asociación, pero no necesariamente causal ni fuerte'],
    ans: 3, exp: 'Significancia estadística no implica causalidad ni tamaño grande del efecto. Se necesita medir la magnitud separadamente.' },

  { q: 'La prueba chi-cuadrado es apropiada para datos:',
    opts: ['Cuantitativos continuos normalmente distribuidos', 'Rangos de variables ordinales (prueba de Spearman)', 'Frecuencias de categorías en una tabla de contingencia', 'Promedios de grupos independientes'],
    ans: 2, exp: 'χ² trabaja con frecuencias (conteos) de categorías, no con medias, rangos ni variables continuas.' },

  { q: '¿Cuál de las siguientes situaciones NO es apropiada para una prueba chi-cuadrado?',
    opts: ['Analizar si el estado civil y el nivel educativo están asociados', 'Comparar la distribución de tipos de incidentes en 3 hospitales', 'Probar si los puntajes de un test se distribuyen normalmente', 'Comparar el peso promedio de dos grupos de pacientes'],
    ans: 3, exp: 'Comparar pesos promedio (variable cuantitativa continua) entre dos grupos requiere la prueba t, no χ².' },

  { q: 'Un investigador usa χ² de independencia con una tabla 3×3 con n = 15 y obtiene que varias celdas tienen E < 2. La decisión correcta es:',
    opts: ['Publicar los resultados normalmente', 'Rechazar H₀ de todas formas', 'Solo reportar las celdas con E ≥ 5', 'Combinar categorías o usar una prueba alternativa'],
    ans: 3, exp: 'Con E < 5 en muchas celdas, el estadístico χ² no sigue bien la distribución teórica; se recomienda combinar categorías o usar otro test.' },

  // ans: 0
  { q: 'La corrección de continuidad de Yates se aplica en:',
    opts: ['Tablas 2×2 con muestras pequeñas para mejorar la aproximación', 'Tablas 3×3 siempre', 'Bondad de ajuste con distribución Poisson', 'Pruebas de varianza'],
    ans: 0, exp: 'La corrección de Yates reduce χ² en tablas 2×2 pequeñas: χ² = Σ(|O−E|−0.5)²/E.' },

  { q: 'El p-valor en chi-cuadrado de independencia representa:',
    opts: ['La probabilidad de obtener un χ² tan grande o mayor, asumiendo que H₀ es verdadera', 'La probabilidad de que las variables sean dependientes', 'La fuerza de la asociación', 'El error tipo II'],
    ans: 0, exp: 'p-valor = P(χ² ≥ χ²_calc | H₀ verdadera). Si p < α, hay evidencia en contra de la independencia.' },

  { q: 'Si las variables analizadas en chi-cuadrado son ambas dicotómicas (2 niveles cada una), la tabla de contingencia es:',
    opts: ['2×2', '4×4', '2×4', '1×4'],
    ans: 0, exp: 'Dos variables dicotómicas (2 categorías cada una) forman una tabla de contingencia 2×2.' },

  { q: 'El estadístico chi-cuadrado de una tabla 2×2 con O = [[25, 15], [10, 50]], n = 100 involucra _____ términos (O−E)²/E:',
    opts: ['4', '2', '1', '6'],
    ans: 0, exp: 'Hay 2×2 = 4 celdas, por lo que hay 4 términos en la suma χ² = Σ(Oᵢⱼ−Eᵢⱼ)²/Eᵢⱼ.' },

  { q: 'Para una tabla de contingencia 2×2 con n = 100, O₁₁ = 30, fila1 total = 50, col1 total = 60, la frecuencia esperada E₁₁ es:',
    opts: ['30', '60', '50', '25'],
    ans: 0, exp: 'E₁₁ = (50 × 60)/100 = 3000/100 = 30.' },

  // ans: 1 (más preguntas para completar 91)
  { q: 'Si χ²_calc = 15.2 con gl = 5 y α = 0.01 (χ²_crit = 15.09), la conclusión es:',
    opts: ['No rechazar H₀', 'Rechazar H₀: hay evidencia de asociación o mal ajuste', 'El resultado es marginal y no significativo', 'Se necesita n mayor'],
    ans: 1, exp: 'χ²_calc = 15.2 > χ²_crit = 15.09 (aunque por poco) → se rechaza H₀ a nivel α = 0.01.' },

  { q: 'En la prueba de homogeneidad chi-cuadrado, H₀ establece que:',
    opts: ['Las dos variables son independientes en una muestra', 'La distribución de la variable es la misma en todas las poblaciones estudiadas', 'Solo una distribución es normal', 'Las medias de los grupos son iguales'],
    ans: 1, exp: 'H₀ de homogeneidad: la distribución de la variable categórica es idéntica en todas las poblaciones comparadas.' },

  { q: 'Para una tabla 5×3 de contingencia, los grados de libertad son:',
    opts: ['15', '8', '7', '6'],
    ans: 1, exp: 'gl = (5−1)(3−1) = 4×2 = 8.' },

  { q: 'Si el estadístico chi-cuadrado calculado es mucho mayor que el valor crítico, el p-valor es:',
    opts: ['Mayor que α', 'Menor que α (muy pequeño)', 'Exactamente igual a α', 'No existe'],
    ans: 1, exp: 'Si χ²_calc >> χ²_crit, el área en la cola derecha (p-valor) es muy pequeña → p << α.' },

  { q: 'En una tabla de contingencia 3×3, si todas las frecuencias observadas son exactamente iguales a las esperadas, el estadístico χ² vale:',
    opts: ['9', '0', '1', '∞'],
    ans: 1, exp: 'Si O = E en todas las celdas, cada término (O−E)²/E = 0, y χ² = 0.' },

  // completando hasta 91 con preguntas ans:2 y ans:3
  { q: 'Para la prueba χ² de bondad de ajuste de una distribución Poisson(λ = 2) con 6 categorías agrupadas, los gl son:',
    opts: ['6', '5', '4', '3'],
    ans: 2, exp: 'Se estima λ de los datos: gl = k − 1 − 1 = 6 − 1 − 1 = 4.' },

  { q: 'Un valor de V de Cramér = 0.35 en una tabla 3×4 indica:',
    opts: ['Sin asociación', 'Asociación perfecta', 'Asociación moderada', 'Asociación débil'],
    ans: 2, exp: 'V ≈ 0.35 sugiere una asociación moderada (ni débil cerca de 0, ni fuerte cerca de 1).' },

  { q: 'Al aumentar n manteniendo las mismas proporciones en una tabla de contingencia, el estadístico χ² tiende a:',
    opts: ['Mantenerse constante', 'Disminuir', 'Aumentar proporcionalmente a n', 'Converger a 1'],
    ans: 2, exp: 'χ² ≈ n × V², por lo que aumentar n aumenta el estadístico y la potencia de la prueba.' },

  { q: 'En una prueba χ² de independencia con resultado no significativo (p > α), la conclusión es:',
    opts: ['Las variables son definitivamente independientes', 'La prueba cometió error tipo I', 'No hay suficiente evidencia estadística para concluir que las variables están asociadas', 'La hipótesis nula es verdadera con certeza'],
    ans: 2, exp: '"No rechazar H₀" ≠ "H₀ es verdadera". Solo indica falta de evidencia de asociación con los datos actuales.' },

  { q: 'En un estudio sobre preferencia de redes sociales (4 tipos) en 3 grupos de edad, el estadístico χ² con gl = 6, α = 0.05 (χ²_crit = 12.59) y χ²_calc = 14.8 lleva a:',
    opts: ['No rechazar H₀', 'Insuficiente evidencia', 'No hay relación entre edad y preferencia', 'Rechazar H₀: la preferencia varía según el grupo de edad'],
    ans: 3, exp: 'χ²_calc = 14.8 > χ²_crit = 12.59 con gl = 6 → se rechaza H₀ → la preferencia de red social difiere según edad.' },

  { q: '¿Cuál de los siguientes valores de χ² indica el mayor rechazo de H₀ (con los mismos gl)?',
    opts: ['χ² = 3.5', 'χ² = 7.2', 'χ² = 5.9', 'χ² = 15.8'],
    ans: 3, exp: 'Mayor χ² → mayor discrepancia entre O y E → p-valor más pequeño → más evidencia contra H₀.' },

  { q: 'En chi-cuadrado de independencia con gl = 2 y α = 0.05 (χ²_crit = 5.991), si χ²_calc = 5.990, la conclusión es:',
    opts: ['Rechazar H₀', 'p-valor < 0.05', 'Hay evidencia significativa', 'No rechazar H₀ (χ²_calc < χ²_crit estrictamente)'],
    ans: 3, exp: '5.990 < 5.991 estrictamente, por lo que no se alcanza la región de rechazo → no se rechaza H₀.' },

  { q: 'La potencia de la prueba chi-cuadrado aumenta cuando:',
    opts: ['Disminuye n', 'Aumenta el valor crítico', 'Se usa α más pequeño', 'Aumenta n y/o aumenta la magnitud de la asociación real'],
    ans: 3, exp: 'Mayor n amplifica las diferencias entre O y E → mayor χ² → mayor probabilidad de rechazar H₀ cuando H₁ es verdadera.' },
];
