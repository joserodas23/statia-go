const EXTRA_SUPUESTOS = [
  // --- NORMALIDAD DE RESIDUOS ---
  { q: 'El supuesto de normalidad en regresión lineal dice que los residuos εᵢ siguen una distribución:',
    opts: ['Uniforme', 'Binomial', 'Normal con media 0 y varianza σ²', 'Chi-cuadrado'],
    ans: 2, exp: 'εᵢ ~ N(0, σ²). La normalidad de los residuos (no de Y ni de X) es lo que valida las pruebas t y F del modelo.' },

  { q: 'Si los residuos de un modelo de regresión tienen media diferente de cero, esto indica:',
    opts: ['Normalidad perfecta', 'Homocedasticidad', 'Alta multicolinealidad', 'Posible sesgo en el modelo o falta de un término constante (intercepto)'],
    ans: 3, exp: 'Una propiedad de MCO con intercepto es que Σeᵢ = 0 (media de residuos = 0). Si la media ≠ 0 con intercepto, hay un error de cálculo o el modelo está mal especificado.' },

  { q: '¿Qué gráfico permite evaluar visualmente la normalidad de los residuos?',
    opts: ['Gráfico de barras de X', 'Gráfico de dispersión X vs Y', 'Q-Q plot (gráfico cuantil-cuantil) de los residuos', 'Diagrama de Pareto'],
    ans: 2, exp: 'El Q-Q plot compara los cuantiles de los residuos con los cuantiles de una distribución normal. Si los puntos siguen la diagonal, los residuos son aproximadamente normales.' },

  { q: 'En un Q-Q plot de residuos, los puntos se alejan en forma de "S" de la línea diagonal. Esto indica:',
    opts: ['Normalidad perfecta de los residuos', 'Homocedasticidad', 'Autocorrelación positiva', 'Asimetría significativa (distribución sesgada)'],
    ans: 3, exp: 'Un patrón en "S" en el Q-Q plot es señal de asimetría. Las colas de la distribución son más ligeras o pesadas que la normal en distintos extremos.' },

  { q: 'La prueba de Jarque-Bera evalúa normalidad usando la asimetría S y la curtosis K. Bajo H₀ de normalidad, se espera:',
    opts: ['S = 1 y K = 0', 'S = 3 y K = 0', 'S = 0 y K = 0', 'S = 0 y K = 3'],
    ans: 3, exp: 'Una distribución normal tiene asimetría (skewness) = 0 y curtosis = 3 (o exceso de curtosis = 0). JB prueba si S y K se desvían significativamente de estos valores.' },

  { q: 'La fórmula de Jarque-Bera es JB = n/6·[S² + (K−3)²/4]. Con n = 60, S = 0.5 y K = 4, JB es:',
    opts: ['2.5', '5.0', '3.75', '10.0'],
    ans: 1, exp: 'JB = (60/6)·[0.5² + (4−3)²/4] = 10·[0.25 + 0.25] = 10·0.50 = 5.0.' },

  { q: 'Con n = 60, S = 0.5 y K = 4, JB = 5.0. Con α = 0.05 (χ²₂ crítico = 5.99), se concluye:',
    opts: ['JB no es aplicable con n < 100', 'Los residuos tienen curtosis normal', 'Se rechaza H₀: los residuos no son normales', 'No se rechaza H₀: los residuos son aproximadamente normales'],
    ans: 3, exp: 'JB = 5.0 < χ²₂ crítico = 5.99 → no se rechaza H₀. Hay evidencia insuficiente para concluir que los residuos no son normales.' },

  { q: 'Con n = 100, S = 1.2 y K = 5.5, JB = 100/6·[1.44 + (2.5)²/4] = 100/6·[1.44 + 1.5625] ≈ 50.07. Con χ²₂ crítico = 5.99, se concluye:',
    opts: ['Los residuos son normales', 'Falta información para decidir', 'Se rechaza H₀: los residuos no son normales', 'El modelo es válido'],
    ans: 2, exp: 'JB ≈ 50.07 >> 5.99 → p-valor ≈ 0. Se rechaza H₀ de normalidad. Los residuos tienen asimetría y curtosis excesivas.' },

  { q: 'El histograma de residuos es una forma _______ de verificar normalidad.',
    opts: ['La única válida para n < 30', 'Formal (con p-valor)', 'La más precisa disponible', 'Informal (visual, exploratoria)'],
    ans: 3, exp: 'El histograma es una herramienta exploratoria visual. Para un test formal con p-valor se usa Jarque-Bera, Shapiro-Wilk u otras pruebas estadísticas.' },

  { q: 'Cuando n es muy grande (n > 1000), las pruebas de normalidad como Jarque-Bera tienden a:',
    opts: ['Rechazar H₀ incluso con desviaciones pequeñas e irrelevantes de normalidad', 'Aceptar H₀ con mayor facilidad', 'No funcionar correctamente', 'Dar siempre JB = 0'],
    ans: 0, exp: 'Con n grande, el poder estadístico es altísimo. Cualquier desviación mínima de la normalidad produce JB significativo, aunque la desviación sea prácticamente irrelevante.' },

  { q: 'Si p-valor del test de Jarque-Bera = 0.38 con α = 0.05, la conclusión correcta es:',
    opts: ['Los residuos definitivamente son normales', 'Los residuos son asimétricos', 'No hay evidencia suficiente para rechazar la normalidad de los residuos', 'K = 3 exactamente'],
    ans: 2, exp: 'p = 0.38 > 0.05: no se rechaza H₀. Esto NO prueba normalidad, solo indica que los datos son compatibles con ella. La ausencia de evidencia contra H₀ ≠ evidencia a favor de H₀.' },

  { q: 'La asimetría (skewness) de una distribución normal es:',
    opts: ['3', '1', '0', '−1'],
    ans: 2, exp: 'La distribución normal es perfectamente simétrica, por lo que S = 0. La curtosis de la normal es 3 (o exceso de curtosis = 0).' },

  // --- ASIMETRIA Y CURTOSIS ---
  { q: 'Una distribución con S = −1.5 (asimetría negativa) tiene:',
    opts: ['Curtosis mayor que 3', 'Distribución perfectamente simétrica', 'Cola larga hacia la derecha y media > mediana', 'Cola larga hacia la izquierda y media < mediana'],
    ans: 3, exp: 'Asimetría negativa: cola larga a la izquierda. La media es arrastrada hacia los valores bajos, quedando por debajo de la mediana: media < mediana < moda.' },

  { q: 'La curtosis (K) mide:',
    opts: ['La posición del centro de la distribución', 'La dispersión de los datos alrededor de la media', 'La asimetría de la distribución', 'El apuntamiento de la distribución y el peso de las colas'],
    ans: 3, exp: 'La curtosis mide qué tan apuntada es la distribución y cuán pesadas son sus colas, comparado con la distribución normal (K = 3).' },

  { q: 'Una distribución platicúrtica tiene curtosis K:',
    opts: ['K > 3', 'K = 3', 'K < 3', 'K = 0'],
    ans: 2, exp: 'Platicúrtica (platy = plano): K < 3. La distribución es más aplanada que la normal, con colas más ligeras. Leptocúrtica: K > 3 (más apuntada, colas pesadas).' },

  { q: 'Una distribución leptocúrtica comparada con la distribución normal tiene:',
    opts: ['Exactamente las mismas colas', 'Colas más pesadas y pico más alto', 'Siempre asimetría positiva', 'Colas más ligeras y pico más bajo'],
    ans: 1, exp: 'Leptocúrtica (leptos = delgada): K > 3. La distribución es más apuntada en el centro y tiene colas más pesadas (más valores extremos que la normal).' },

  { q: 'El exceso de curtosis se define como K − 3. Para la distribución normal, el exceso de curtosis es:',
    opts: ['3', '−3', '0', '1'],
    ans: 2, exp: 'Exceso de curtosis = K − 3 = 3 − 3 = 0 para la normal. Muchos softwares reportan el exceso de curtosis: positivo = leptocúrtica, negativo = platicúrtica.' },

  { q: 'Los residuos de un modelo tienen S = 2.1 y K = 8.5. En términos de normalidad, estos residuos presentan:',
    opts: ['Distribución platicúrtica y simétrica', 'Curtosis normal con leve asimetría', 'Normalidad aceptable (S ≈ 0, K ≈ 3)', 'Asimetría positiva importante y curtosis leptocúrtica (muchos valores extremos)'],
    ans: 3, exp: 'S = 2.1 (lejos de 0): fuerte asimetría positiva. K = 8.5 (lejos de 3): distribución muy apuntada con colas pesadas (leptocúrtica). Ambos indican no-normalidad.' },

  // --- HOMOCEDASCTICIDAD ---
  { q: 'La heterocedasticidad ocurre cuando:',
    opts: ['Los residuos son normales', 'Los predictores están correlacionados entre sí', 'La varianza de los residuos cambia según el nivel de X o ŷ', 'Los residuos tienen autocorrelación'],
    ans: 2, exp: 'Heterocedasticidad: Var(εᵢ) no es constante. Es frecuente cuando Y tiene un rango amplio o en datos de ingresos, precios, etc.' },

  { q: 'La prueba de Breusch-Pagan y la prueba de White se usan para detectar:',
    opts: ['Normalidad de residuos', 'Autocorrelación serial', 'Heterocedasticidad', 'Multicolinealidad'],
    ans: 2, exp: 'Ambas pruebas evalúan si la varianza de los residuos es constante (homocedasticidad). La prueba de White es más general y no requiere supuestos sobre la forma de la heterocedasticidad.' },

  { q: 'En un gráfico de residuos vs valores ajustados, si los residuos se distribuyen aleatoriamente en una banda horizontal, indica:',
    opts: ['Heterocedasticidad severa', 'Autocorrelación positiva', 'Falta de linealidad', 'Homocedasticidad: varianza constante de los residuos'],
    ans: 3, exp: 'Distribución aleatoria en banda horizontal alrededor de cero → varianza constante → homocedasticidad. El patrón deseado en este gráfico diagnóstico.' },

  { q: 'Una consecuencia práctica de la heterocedasticidad en MCO es:',
    opts: ['R² se vuelve negativo', 'La prueba F pierde su distribución F', 'Los coeficientes b₁ dejan de ser calculables', 'Los estimadores siguen siendo insesgados pero ya no son los de mínima varianza (no son BLUE)'],
    ans: 3, exp: 'Con heterocedasticidad, los estimadores MCO siguen siendo insesgados pero no eficientes (no BLUE). Los errores estándar son incorrectos, afectando las pruebas de hipótesis.' },

  { q: 'Para corregir la heterocedasticidad, una solución común es:',
    opts: ['Aplicar mínimos cuadrados ponderados (MCP) o transformar Y (ej. ln(Y))', 'Eliminar la variable dependiente', 'Reducir el tamaño muestral', 'Usar correlación de Spearman'],
    ans: 0, exp: 'MCP (WLS) asigna menor peso a observaciones con mayor varianza. La transformación logarítmica también estabiliza la varianza cuando la heterocedasticidad es multiplicativa.' },

  { q: 'Si al graficar los residuos contra X se observa que los residuos aumentan en magnitud cuando X aumenta, el problema es:',
    opts: ['Normalidad violada', 'DW < 2', 'Heterocedasticidad: la varianza de los residuos no es constante', 'VIF > 10'],
    ans: 2, exp: 'El incremento de la dispersión de residuos con X es la señal típica de heterocedasticidad. La varianza de los errores depende del nivel del predictor.' },

  // --- DURBIN-WATSON Y AUTOCORRELACION ---
  { q: 'El estadístico de Durbin-Watson (DW) toma valores en el rango:',
    opts: ['−1 a 1', '0 a 2', '−2 a 2', '0 a 4'],
    ans: 3, exp: 'DW ∈ [0, 4]. DW ≈ 2: sin autocorrelación. DW < 1.5: autocorrelación positiva. DW > 2.5: autocorrelación negativa.' },

  { q: 'DW = 0.8 indica:',
    opts: ['Autocorrelación positiva fuerte en los residuos', 'Sin autocorrelación en los residuos', 'Autocorrelación negativa', 'Heterocedasticidad grave'],
    ans: 0, exp: 'DW = 0.8 << 2 → autocorrelación positiva: residuos consecutivos tienen el mismo signo con frecuencia. Frecuente en series de tiempo sin diferenciación.' },

  { q: 'DW = 3.6 en un modelo de series de tiempo sugiere:',
    opts: ['No hay autocorrelación', 'Autocorrelación positiva leve', 'Autocorrelación negativa: residuos que alternan de signo', 'Homocedasticidad perfecta'],
    ans: 2, exp: 'DW > 2.5 sugiere autocorrelación negativa: residuos alternan entre positivos y negativos. Indica que el modelo sobreajusta en ciertos periodos y subestima en otros.' },

  { q: 'La autocorrelación de los residuos es especialmente problemática en:',
    opts: ['Datos de corte transversal con n grande', 'Datos con variables ordinales', 'Datos de series de tiempo o datos con orden natural', 'Experimentos completamente aleatorizados'],
    ans: 2, exp: 'En series de tiempo los datos tienen orden cronológico. Si los errores de un periodo influyen en el siguiente, hay autocorrelación, violando la independencia de errores.' },

  { q: 'Si DW = 1.2 (autocorrelación positiva), una corrección común es:',
    opts: ['Eliminar la variable X del modelo', 'Aumentar el nivel de significancia a α = 0.10', 'Usar correlación de Spearman', 'Aplicar la transformación de Cochrane-Orcutt o incluir el retardo de la variable dependiente'],
    ans: 3, exp: 'Para autocorrelación positiva: Cochrane-Orcutt, Prais-Winsten u otras transformaciones de cuasi-diferenciación. También se puede incluir Yₜ₋₁ como predictor (modelo de retardo distribuido).' },

  { q: 'Si los residuos siguen el patrón (+, +, +, −, −, −, +, +, +, −, −, −), esto indica:',
    opts: ['Sin autocorrelación', 'Autocorrelación negativa', 'Homocedasticidad', 'Autocorrelación positiva: rachas de residuos del mismo signo'],
    ans: 3, exp: 'Rachas de residuos con el mismo signo (grupos de positivos y negativos) es señal de autocorrelación positiva. El DW será bajo (< 2).' },

  { q: 'El DW fue diseñado específicamente para detectar autocorrelación de orden:',
    opts: ['De cualquier orden', 'Orden 2 únicamente', 'Orden 1 (residuo actual correlacionado con el residuo anterior)', 'Orden superior a 5'],
    ans: 2, exp: 'DW detecta autocorrelación de primer orden: εₜ = ρεₜ₋₁ + uₜ. Para órdenes superiores se usan pruebas como Ljung-Box o Breusch-Godfrey.' },

  { q: 'Una consecuencia de violar la independencia de los errores (autocorrelación) es:',
    opts: ['R² se vuelve mayor que 1', 'b₀ deja de ser calculable', 'Los errores estándar de los coeficientes son incorrectos, afectando los p-valores', 'Los coeficientes MCO son sesgados'],
    ans: 2, exp: 'Con autocorrelación, los errores estándar MCO son típicamente subestimados, haciendo que los coeficientes parezcan más significativos de lo que realmente son.' },

  // --- MULTICOLINEALIDAD Y VIF ---
  { q: 'La multicolinealidad en regresión múltiple ocurre cuando:',
    opts: ['La variable Y tiene distribución sesgada', 'DW > 2', 'Los residuos no son normales', 'Dos o más variables predictoras están altamente correlacionadas entre sí'],
    ans: 3, exp: 'Multicolinealidad: alta correlación entre predictores. Dificulta separar los efectos individuales de cada X sobre Y e infla los errores estándar de los coeficientes.' },

  { q: 'VIF = Variance Inflation Factor. VIF de la variable Xⱼ se calcula como:',
    opts: ['VIF = R² del modelo completo', 'VIF = Cov(Xⱼ, Y)/Var(Y)', 'VIF = b²ⱼ / SE(bⱼ)', 'VIF = 1/(1 − R²ⱼ), donde R²ⱼ es el R² de regresar Xⱼ sobre las demás variables'],
    ans: 3, exp: 'VIF = 1/(1 − R²ⱼ). Si Xⱼ puede explicarse casi perfectamente por las otras variables (R²ⱼ ≈ 1), VIF → ∞. VIF = 1 significa sin multicolinealidad.' },

  { q: 'Si VIF de X₁ = 1.3 y VIF de X₂ = 2.1, la conclusión es:',
    opts: ['Los VIF son aceptables; no hay multicolinealidad problemática', 'Hay multicolinealidad grave en ambas variables', 'Se debe eliminar X₂ del modelo', 'El modelo es inválido'],
    ans: 0, exp: 'VIF < 5 se considera aceptable por la mayoría de autores. VIF entre 1 y 3 es bajo. VIF > 5 es preocupante y VIF > 10 es problemático.' },

  { q: 'VIF = 15 para la variable X₂. La acción más adecuada es:',
    opts: ['Ignorarlo si R² es alto', 'Aumentar n hasta 1000', 'Cambiar el nivel de significancia', 'Considerar eliminar X₂, combinarla con otra variable o usar regresión ridge para manejar la multicolinealidad'],
    ans: 3, exp: 'VIF > 10 es multicolinealidad grave. Opciones: eliminar la variable redundante, crear un índice combinado, usar regularización (ridge, lasso), o análisis de componentes principales.' },

  { q: 'La multicolinealidad perfecta ocurre cuando:',
    opts: ['r = 0 entre todos los predictores', 'VIF = 1 para todas las variables', 'Los residuos tienen media cero', 'Una variable predictora es combinación lineal exacta de otras (ej. X₃ = 2X₁ + X₂)'],
    ans: 3, exp: 'Multicolinealidad perfecta: X₃ = aX₁ + bX₂. En este caso la matriz X\'X es singular y los coeficientes MCO son incalculables (no invertible). Software como R reporta NA.' },

  { q: 'Una consecuencia de la multicolinealidad sobre los intervalos de confianza de los coeficientes es:',
    opts: ['Los IC se ensanchan porque los errores estándar están inflados', 'Los IC se vuelven más estrechos, dando mayor precisión', 'Los IC dejan de existir', 'Los IC se centran en cero'],
    ans: 0, exp: 'VIF alto → SE(bⱼ) alto → IC más amplios → mayor incertidumbre sobre el valor real del coeficiente. Puede hacer que coeficientes importantes parezcan no significativos.' },

  { q: 'Si la correlación entre X₁ y X₂ es r = 0.97, es probable que:',
    opts: ['No haya multicolinealidad porque son variables distintas', 'DW sea alto', 'VIF de X₁ y X₂ sean cercanos a 1', 'VIF de X₁ y X₂ sean mayores que 10, indicando multicolinealidad grave'],
    ans: 3, exp: 'r = 0.97 entre predictores → R²ⱼ ≈ 0.94 → VIF = 1/(1−0.94) = 1/0.06 ≈ 16.7. Multicolinealidad grave.' },

  // --- LINEALIDAD ---
  { q: 'El supuesto de linealidad en regresión establece que:',
    opts: ['Todas las variables deben ser cuantitativas continuas', 'Los residuos deben ser positivos', 'La relación entre X e Y es lineal en los parámetros (β)', 'n debe ser múltiplo de 10'],
    ans: 2, exp: 'Linealidad en los parámetros: E(Y|X) = β₀ + β₁X. El modelo puede ser no lineal en X (ej. β₀ + β₁X + β₂X²) pero sigue siendo lineal en los β.' },

  { q: 'Si el gráfico de residuos vs ŷ muestra un patrón curvo (parábola), el problema es:',
    opts: ['Autocorrelación', 'Normalidad violada', 'Falta de linealidad: la relación real no es lineal', 'Heterocedascticidad'],
    ans: 2, exp: 'Un patrón curvo en el gráfico residuos vs ŷ indica que la relación entre X e Y no es lineal. Una solución es agregar X² al modelo o aplicar transformación logarítmica.' },

  { q: 'Para corregir la falta de linealidad, ¿cuál de las siguientes opciones es apropiada?',
    opts: ['Aumentar el tamaño de la muestra', 'Usar la correlación de Spearman en lugar de regresión', 'Eliminar los residuos positivos', 'Agregar el término cuadrático X² al modelo o transformar X o Y (log, raíz)'],
    ans: 3, exp: 'Cuando la relación es curvilínea, se puede: (1) agregar X² (regresión polinómica), (2) transformar X (log X, √X), (3) transformar Y (log Y). La elección depende de la forma de la curvatura.' },

  { q: 'El componente Added Variable Plot (gráfico de variable parcial) se usa para:',
    opts: ['Detectar multicolinealidad entre predictores', 'Evaluar la contribución marginal de una variable a la regresión y verificar linealidad', 'Probar la normalidad de los residuos', 'Calcular el DW'],
    ans: 1, exp: 'Los Added Variable Plots (partial regression plots) muestran la relación de Xⱼ con Y después de remover los efectos de las otras variables, ayudando a verificar linealidad y detectar outliers influyentes.' },

  // --- INDEPENDENCIA DE ERRORES ---
  { q: 'El supuesto de independencia de los errores significa que:',
    opts: ['Los errores tienen todos el mismo valor', 'El error de una observación no está correlacionado con el error de otra observación', 'Los errores siguen distribución uniforme', 'Cada error es igual a cero'],
    ans: 1, exp: 'Independencia: Cov(εᵢ, εⱼ) = 0 para i ≠ j. Su violación (autocorrelación) suele ocurrir en datos con estructura temporal o espacial.' },

  { q: 'La independencia de los errores suele violarse principalmente en datos:',
    opts: ['Experimentales con aleatorización completa', 'De series de tiempo o con estructura espacial o longitudinal', 'Con n = 30 exactamente', 'Que provienen de una muestra aleatoria simple'],
    ans: 1, exp: 'En datos temporales (series de tiempo) o espaciales, observaciones cercanas (en tiempo o espacio) tienden a ser similares, generando autocorrelación en los errores.' },

  // --- CONSECUENCIAS DE VIOLAR SUPUESTOS ---
  { q: '¿Cuál de los siguientes supuestos clásicos de regresión, al ser violado, hace que los estimadores MCO sean SESGADOS (no solo ineficientes)?',
    opts: ['Homocedasticidad', 'Normalidad de los errores', 'Independencia (no autocorrelación de errores)', 'Endogeneidad (correlación entre X y ε)'],
    ans: 3, exp: 'Violar homocedascticidad o independencia produce estimadores MCO insesgados pero ineficientes. La endogeneidad (correlación X-ε) sí genera sesgo e inconsistencia en los estimadores.' },

  { q: 'Violar la normalidad de los residuos en muestras PEQUEÑAS (n < 30) tiene como consecuencia principal:',
    opts: ['Los coeficientes b₁ dejan de ser insesgados', 'Los p-valores e intervalos de confianza de las pruebas t y F no son confiables', 'R² deja de calcularse', 'La recta de regresión cambia completamente'],
    ans: 1, exp: 'En muestras pequeñas, las pruebas t y F dependen fuertemente del supuesto de normalidad. Con n grande, el TCL protege la validez asintótica de las pruebas.' },

  { q: 'Si se viola la homocedasticidad en MCO, los estimadores de los coeficientes son:',
    opts: ['Sesgados e inconsistentes', 'Insesgados pero no eficientes (no de mínima varianza)', 'Exactamente iguales que con varianza constante', 'Siempre menores que el valor verdadero'],
    ans: 1, exp: 'La heterocedasticidad no sesga los estimadores MCO, pero los hace ineficientes: ya no tienen la mínima varianza entre todos los estimadores lineales insesgados (no son BLUE).' },

  { q: 'Cuando hay multicolinealidad grave pero no perfecta, los estimadores MCO son:',
    opts: ['Sesgados y de varianza infinita', 'Insesgados pero con varianza muy alta (inestables)', 'Inconsistentes', 'Iguales a cero para las variables colineales'],
    ans: 1, exp: 'Multicolinealidad no perfecta: los coeficientes MCO siguen siendo insesgados, pero sus varianzas son muy grandes → estimadores poco precisos y sensibles a pequeños cambios en la muestra.' },

  // --- ORDEN DE VERIFICACION DE SUPUESTOS ---
  { q: '¿Cuál es el orden generalmente recomendado para verificar los supuestos de regresión?',
    opts: ['Normalidad → Linealidad → Homocedasticidad → Independencia', 'Linealidad → Independencia → Homocedasticidad → Normalidad', 'Multicolinealidad → DW → JB → VIF', 'No existe un orden estándar; todos se verifican simultáneamente'],
    ans: 1, exp: 'Primero linealidad (gráfico dispersión), luego independencia (DW), homocedasticidad (gráfico residuos) y normalidad (Q-Q plot, JB). La linealidad es fundamental porque afecta todos los demás.' },

  { q: 'En regresión múltiple, ¿cuándo se verifica la multicolinealidad?',
    opts: ['Solo después de detectar heterocedasticidad', 'Antes de interpretar los coeficientes individuales, como parte del diagnóstico inicial', 'Únicamente si p(F) < 0.05', 'Solo cuando n < 50'],
    ans: 1, exp: 'La multicolinealidad se revisa al diagnosticar el modelo, antes de interpretar b₁, b₂, etc. Un VIF alto invalida la interpretación individual de los coeficientes.' },

  // --- CORRECCIONES ---
  { q: 'Si los residuos de un modelo de regresión muestran asimetría positiva fuerte, una transformación apropiada de Y es:',
    opts: ['Y² (elevar al cuadrado)', 'ln(Y) o √Y para reducir la asimetría', '−Y (multiplicar por −1)', 'Y/X'],
    ans: 1, exp: 'La transformación logarítmica o raíz cuadrada comprime los valores grandes, reduciendo la asimetría positiva y frecuentemente normalizando los residuos.' },

  { q: 'La transformación de Box-Cox permite encontrar λ óptimo tal que Y^λ es aproximadamente normal. Cuando λ = 0, la transformación equivale a:',
    opts: ['Y² ', '√Y', 'ln(Y)', '1/Y'],
    ans: 2, exp: 'En Box-Cox, λ = 0 → transformación logarítmica ln(Y). λ = 0.5 → √Y. λ = −1 → 1/Y. Se elige λ que maximiza la log-verosimilitud.' },

  { q: 'La regresión robusta (por ejemplo, regresión de mínimos cuadrados ponderados iterativamente — IRLS) es preferible cuando:',
    opts: ['Todos los supuestos de MCO se cumplen perfectamente', 'Existen outliers o heterocedasticidad que afectan la estimación MCO', 'n es mayor que 1000', 'R² es mayor que 0.90'],
    ans: 1, exp: 'La regresión robusta asigna menor peso a observaciones con residuos grandes (outliers o varianza alta), siendo menos sensible a violaciones de supuestos que MCO.' },

  { q: 'Si VIF de X₃ = 18 y X₃ es teóricamente importante, una alternativa a eliminarla es:',
    opts: ['Aumentar el número de observaciones hasta reducir VIF', 'Usar regresión ridge (regularización L2) que maneja multicolinealidad sin eliminar variables', 'Cambiar el nivel α a 0.10', 'Transformar X₃ elevándola al cuadrado'],
    ans: 1, exp: 'Regresión ridge agrega una penalización a la suma de cuadrados, encogiendo los coeficientes y reduciendo la varianza inflada por multicolinealidad, conservando todas las variables.' },

  { q: 'Cuando los residuos muestran heterocedasticidad de la forma Var(εᵢ) = σ²·Xᵢ, los pesos apropiados para MCP son:',
    opts: ['wᵢ = Xᵢ', 'wᵢ = 1/Xᵢ', 'wᵢ = 1/Xᵢ²', 'wᵢ = √Xᵢ'],
    ans: 1, exp: 'Si Var(εᵢ) = σ²·Xᵢ, los pesos wᵢ = 1/Xᵢ dan a las observaciones con mayor varianza (mayor Xᵢ) un peso menor, corrigiendo la heterocedasticidad.' },

  // --- INTERPRETACION P-VALOR JB ---
  { q: 'JB = 1.2 con n = 50 tiene p-valor = 0.55. En un modelo de regresión, la conclusión sobre los residuos es:',
    opts: ['Asimetría grave detectada', 'No hay evidencia de falta de normalidad en los residuos a nivel α = 0.05', 'Multicolinealidad presente', 'Se debe aplicar transformación logarítmica'],
    ans: 1, exp: 'p = 0.55 >> 0.05: no se rechaza H₀ de normalidad. Los residuos son compatibles con una distribución normal; los supuestos de las pruebas t y F son válidos.' },

  { q: 'Si JB = 8.7 con p-valor = 0.013 y α = 0.05, ¿qué consecuencia tiene esto para el modelo?',
    opts: ['Ninguna, los supuestos son opcionales', 'Las pruebas t para los coeficientes y la prueba F podrían no ser válidas en muestras pequeñas', 'R² debe recalcularse', 'Se debe eliminar todas las observaciones con residuos negativos'],
    ans: 1, exp: 'Normalidad violada → los estadísticos t y F no siguen exactamente sus distribuciones teóricas en muestras pequeñas. Se recomienda transformar Y o usar métodos robustos/bootstrap.' },

  // --- PREGUNTAS NUMERICAS Y DE CALCULO ---
  { q: 'n = 40, S = 0.3, K = 3.5. JB = n/6·[S² + (K−3)²/4] = 40/6·[0.09 + 0.0625] = 6.67·0.1525 ≈:',
    opts: ['1.02', '0.15', '3.05', '6.67'],
    ans: 0, exp: 'JB = (40/6)·[0.3² + (3.5−3)²/4] = 6.667·[0.09 + 0.0625] = 6.667·0.1525 ≈ 1.02. Con χ²₂ crítico = 5.99, no se rechaza normalidad.' },

  { q: 'Con n = 80, S = 0.8 y K = 5.0, JB = (80/6)·[0.64 + (5−3)²/4] = 13.33·[0.64 + 1.0] ≈:',
    opts: ['21.9', '2.19', '10.0', '1.33'],
    ans: 0, exp: 'JB = 13.33·[0.64 + 1.0] = 13.33·1.64 ≈ 21.9. Con χ²₂ crítico = 5.99, JB = 21.9 >> 5.99: se rechaza normalidad.' },

  { q: 'DW = 1.95 con dL = 1.54 y dU = 1.75 (n=30, k=1). La conclusión es:',
    opts: ['Autocorrelación positiva', 'Autocorrelación negativa', 'Sin autocorrelación (DW > dU y DW < 4−dU)', 'Zona de indecisión'],
    ans: 2, exp: 'DW = 1.95 > dU = 1.75 y DW = 1.95 < 4 − dU = 2.25 → no se rechaza la hipótesis de no autocorrelación. Los residuos son independientes.' },

  { q: 'VIF = 1/(1 − R²ⱼ). Si X₂ se regresa sobre X₁ y el R² de esa regresión es 0.85, entonces VIF₂ = :',
    opts: ['6.67', '0.15', '1.85', '0.85'],
    ans: 0, exp: 'VIF₂ = 1/(1 − 0.85) = 1/0.15 = 6.67. VIF entre 5 y 10: multicolinealidad moderada a alta.' },

  { q: 'Si R²ⱼ = 0.95 al regresar Xⱼ sobre las demás variables, VIF = 1/(1−0.95) = :',
    opts: ['20', '0.05', '5', '19'],
    ans: 0, exp: 'VIF = 1/(1−0.95) = 1/0.05 = 20. VIF = 20 indica multicolinealidad muy grave. Los errores estándar de bⱼ estarán inflados √20 ≈ 4.5 veces respecto al caso sin colinealidad.' },

  { q: 'Con S = 1.5 y K = 6, el exceso de curtosis es K − 3 = 3 y el estadístico JB para n = 30 es JB = 5·[2.25 + 9/4] = 5·4.5 = :',
    opts: ['22.5', '4.5', '45.0', '9.0'],
    ans: 0, exp: 'JB = (30/6)·[1.5² + (6−3)²/4] = 5·[2.25 + 2.25] = 5·4.5 = 22.5. JB = 22.5 >> χ²₂ crítico (5.99): se rechaza normalidad.' },

  // --- PREGUNTAS INTEGRALES ---
  { q: 'Un investigador tiene DW = 0.9, JB p-valor = 0.001 y VIF = 12 en su modelo. ¿Cuántos supuestos están potencialmente violados?',
    opts: ['Uno', 'Dos', 'Tres', 'Ninguno'],
    ans: 2, exp: 'DW = 0.9 → autocorrelación positiva (independencia violada). p(JB) = 0.001 → normalidad violada. VIF = 12 → multicolinealidad grave. Tres supuestos comprometidos.' },

  { q: 'En un modelo con DW = 1.3 y patrón en embudo en el gráfico de residuos, las correcciones prioritarias son:',
    opts: ['Aplicar transformación logarítmica y revisar autocorrelación', 'Aumentar n y recalcular b₁', 'Eliminar todas las variables no significativas', 'Cambiar el nivel α'],
    ans: 0, exp: 'Patrón embudo → heterocedasticidad (transformación log o MCP). DW = 1.3 → autocorrelación positiva (Cochrane-Orcutt o diferenciación). Ambas correcciones son necesarias.' },

  { q: 'Si se aplica ln(Y) y los nuevos residuos muestran normalidad (p-JB = 0.40) y homocedasticidad, la interpretación de b₁ cambia: ahora representa:',
    opts: ['El cambio absoluto en Y por unidad de X', 'El cambio porcentual aproximado en Y por unidad de X (semielasticidad)', 'El cuadrado del efecto original', 'R² del modelo original'],
    ans: 1, exp: 'En el modelo ln(Y) = b₀ + b₁X, un cambio de 1 unidad en X produce un cambio de 100·b₁% en Y aproximadamente (semielasticidad). La interpretación es porcentual, no absoluta.' },

  { q: 'El teorema de Gauss-Markov establece que los estimadores MCO son BLUE cuando se cumplen:',
    opts: ['Solo la normalidad de los errores', 'Linealidad, errores con media cero, homocedasticidad e independencia (no requiere normalidad)', 'Multicolinealidad baja y n > 100', 'Normalidad y VIF < 5'],
    ans: 1, exp: 'BLUE = Best Linear Unbiased Estimator. Gauss-Markov requiere: E(ε) = 0, Var(ε) = σ² (homocedasticidad), Cov(εᵢ,εⱼ) = 0 (independencia). La normalidad NO es requerida para BLUE.' },

  { q: 'Si los supuestos de MCO se cumplen excepto la normalidad y n = 200, la inferencia es válida aproximadamente porque:',
    opts: ['Los supuestos no importan con n grande', 'El Teorema Central del Límite garantiza que b̂₁ es aproximadamente normal con muestras grandes', 'JB siempre acepta normalidad con n = 200', 'Los p-valores mejoran automáticamente'],
    ans: 1, exp: 'Por el TCL, con n grande los estimadores MCO siguen aproximadamente una distribución normal aunque los errores no sean normales, validando las pruebas t y F asintóticamente.' },

  { q: 'Un modelo tiene todos los supuestos cumplidos excepto linealidad (relación curvilínea). La consecuencia más grave es:',
    opts: ['VIF inflado', 'Sesgo en los estimadores: los coeficientes MCO son sesgados e inconsistentes', 'Solo pérdida de eficiencia, los coeficientes son insesgados', 'DW menor que 2'],
    ans: 1, exp: 'La mala especificación del modelo (omitir la curvatura) produce sesgo de especificación: los estimadores MCO no convergen al verdadero parámetro ni con n → ∞.' },

  { q: 'Para un modelo con 3 predictores y n = 50, si todos los VIF están entre 1.1 y 2.5 y DW = 2.0 y p(JB) = 0.12, la conclusión es:',
    opts: ['El modelo viola todos los supuestos', 'Los supuestos de independencia, multicolinealidad y normalidad parecen cumplirse', 'Hay autocorrelación severa', 'Falta verificar linealidad pero los demás supuestos están bien'],
    ans: 3, exp: 'VIF bajos → sin multicolinealidad. DW ≈ 2 → sin autocorrelación. p(JB) = 0.12 > 0.05 → normalidad aceptable. Falta verificar linealidad y homocedasticidad con gráficos de residuos.' },

  { q: 'La prueba RESET de Ramsey sirve para detectar:',
    opts: ['Autocorrelación de los residuos', 'Mala especificación del modelo por omisión de no linealidades o variables relevantes', 'Heterocedasticidad', 'Multicolinealidad entre predictores'],
    ans: 1, exp: 'RESET (Regression Equation Specification Error Test) detecta mala especificación al agregar potencias de ŷ (ŷ², ŷ³) al modelo y probar si mejoran el ajuste.' },

  { q: 'Al comparar un modelo con los supuestos cumplidos vs uno con heterocedasticidad, ¿cuál produce intervalos de confianza más confiables?',
    opts: ['El modelo con heterocedasticidad siempre tiene IC más confiables', 'El modelo con supuestos cumplidos produce IC correctos; la heterocedasticidad sesga los IC', 'Ambos son equivalentes si R² es similar', 'El modelo más parsimonioso siempre'],
    ans: 1, exp: 'La heterocedasticidad produce errores estándar incorrectos (generalmente subestimados), lo que hace que los IC sean demasiado estrechos: falsa precisión. El modelo con supuestos cumplidos es confiable.' },

  { q: 'Los errores estándar robustos de White (HC) se usan cuando:',
    opts: ['Todos los supuestos de MCO se cumplen', 'Hay heterocedasticidad pero se quiere mantener MCO con errores estándar correctos', 'VIF > 10', 'Los residuos son normales'],
    ans: 1, exp: 'Los errores estándar robustos (de White o sandwich) corrigen los SE de los coeficientes MCO en presencia de heterocedasticidad, sin necesidad de transformar la variable.' },

  { q: 'Una variable dummy (0/1) como predictor en regresión no viola ningún supuesto si:',
    opts: ['VIF = 1 exactamente', 'Los residuos del modelo final cumplen los supuestos (normalidad, homocedasticidad, independencia)', 'La variable dummy tiene distribución normal', 'Solo se usa en modelos con n > 200'],
    ans: 1, exp: 'Los supuestos aplican a los RESIDUOS, no a las variables predictoras. Una dummy como predictor es completamente válida; lo que importa es que los residuos del modelo cumplan los supuestos.' },

  { q: 'El leverage (influencia) de una observación en regresión mide:',
    opts: ['El tamaño del residuo de esa observación', 'Qué tan "extremo" es el valor de X de esa observación y cuánto puede influir en la recta', 'El VIF de esa observación', 'La distancia de y al intercepto'],
    ans: 1, exp: 'El leverage hᵢᵢ (diagonal de la matriz sombrero H) mide el potencial de influencia de cada observación basado en su valor de X. Leverage alto + residuo grande = observación muy influyente (distancia de Cook alta).' },

  { q: 'La distancia de Cook combina:',
    opts: ['R² y VIF para medir ajuste', 'El leverage y el residuo estudentizado para identificar observaciones influyentes', 'DW y JB para detectar autocorrelación y no normalidad juntos', 'MSE y SCT para calcular R²'],
    ans: 1, exp: 'Distancia de Cook = f(leverage, residuo²). Una observación con Dᵢ > 4/n (o > 1) es potencialmente influyente y puede estar afectando notablemente los estimadores.' },

  { q: 'Un investigador detecta dos outliers y los elimina, mejorando notablemente R² y cumpliendo todos los supuestos. ¿Es esto siempre válido?',
    opts: ['Sí, siempre es válido eliminar outliers si mejoran el modelo', 'No necesariamente; los outliers deben investigarse. Solo se eliminan si hay error de medición o dato inválido documentado', 'Sí, el criterio es únicamente estadístico', 'Solo es válido si n > 100'],
    ans: 1, exp: 'Eliminar outliers sin justificación es manipulación de datos. Se deben investigar: ¿error de digitación? ¿caso especial? Si son datos válidos, deben incluirse o usarse métodos robustos.' },

  { q: 'La correlación entre los residuos y los valores ajustados ŷ en MCO con intercepto es:',
    opts: ['Igual a r de Pearson', 'Siempre igual a cero', 'Igual a R²', 'Igual a DW − 2'],
    ans: 1, exp: 'Una propiedad algebraica de MCO es que Cor(eᵢ, ŷᵢ) = 0. Los residuos son ortogonales a los valores ajustados. También Cor(eᵢ, xᵢ) = 0.' },

  { q: 'Cuando se usan datos de panel (múltiples individuos observados en múltiples periodos), la autocorrelación y la heterocedasticidad simultánea se manejan con:',
    opts: ['Solo la prueba de Durbin-Watson estándar', 'Errores estándar robustos clusterizados o modelos de efectos fijos/aleatorios', 'Correlación de Spearman', 'Transformación de Box-Cox únicamente'],
    ans: 1, exp: 'Los datos de panel tienen estructura compleja: heterogeneidad entre individuos y autocorrelación temporal. Se usan errores estándar clusterizados y modelos de efectos fijos o aleatorios.' },

  { q: 'Si se grafica el histograma de residuos y muestra dos picos (distribución bimodal), esto podría indicar:',
    opts: ['Normalidad perfecta de los residuos', 'Que existen dos subgrupos distintos en la muestra o una variable omitida importante', 'Homocedasticidad', 'Autocorrelación negativa'],
    ans: 1, exp: 'Bimodalidad en los residuos sugiere heterogeneidad: pueden existir dos grupos con diferentes niveles de Y, o una variable omitida que separa la muestra en subgrupos.' },

  { q: 'La prueba de Shapiro-Wilk para normalidad es preferible a Jarque-Bera cuando:',
    opts: ['n es muy grande (n > 500)', 'n es pequeño (n < 50), ya que Shapiro-Wilk tiene mayor poder con muestras pequeñas', 'Solo hay una variable predictora', 'Los datos son ordinales'],
    ans: 1, exp: 'Shapiro-Wilk es más potente que Jarque-Bera en muestras pequeñas. JB requiere n moderado a grande para ser confiable. Para n < 30 se prefiere Shapiro-Wilk.' },

  { q: 'En el contexto de regresión logística, el supuesto de normalidad de residuos:',
    opts: ['Es idéntico al de regresión lineal', 'No aplica, ya que la variable dependiente es binaria y los residuos no son normales por definición', 'Es más estricto que en regresión lineal', 'Se verifica con la prueba de Jarque-Bera igualmente'],
    ans: 1, exp: 'En regresión logística los supuestos son distintos: se asume distribución binomial, linealidad del logit con las X, independencia de observaciones y ausencia de multicolinealidad. No se asume normalidad de residuos.' },

  { q: 'Un modelo con R² = 0.92 pero con DW = 0.7, VIF máximo = 25 y p(JB) = 0.002 es:',
    opts: ['Un modelo excelente porque R² es muy alto', 'Un modelo problemático: alto R² con supuestos severamente violados produce inferencias no confiables', 'Aceptable si la predicción es el único objetivo', 'Válido siempre que p(F) < 0.05'],
    ans: 1, exp: 'R² alto no garantiza validez de inferencias. Autocorrelación (DW = 0.7), multicolinealidad grave (VIF = 25) y no normalidad (p = 0.002) invalidan los p-valores e IC, aunque las predicciones puntuales puedan ser aceptables.' },

  { q: 'El índice de condición (condition number) en regresión múltiple es otra medida de multicolinealidad. Un índice mayor a 30 indica:',
    opts: ['Sin problema de multicolinealidad', 'Multicolinealidad moderada a severa que puede afectar la estabilidad de los estimadores', 'Normalidad perfecta de los residuos', 'Homocedasticidad perfecta'],
    ans: 1, exp: 'El índice de condición = √(λₘₐₓ/λₘᵢₙ) de la matriz X\'X. Valores > 15 indican posible colinealidad; > 30 indica multicolinealidad severa. Complementa al VIF en diagnóstico.' },

  { q: 'Cuando se aplica una transformación de raíz cuadrada √Y al modelo, el supuesto que principalmente se busca corregir es:',
    opts: ['Autocorrelación positiva de los residuos', 'Heterocedasticidad cuando la varianza crece proporcionalmente a la media de Y', 'Multicolinealidad entre predictores', 'Baja curtosis de los residuos'],
    ans: 1, exp: 'La transformación √Y es útil cuando Var(εᵢ) ∝ E(Yᵢ), situación frecuente en datos de conteo. Estabiliza la varianza y frecuentemente mejora la normalidad de los residuos.' },

  { q: 'Si los residuos de un modelo de regresión tienen autocorrelación positiva (DW < dL), los errores estándar de MCO son típicamente:',
    opts: ['Sobreestimados, haciendo los coeficientes parecer no significativos', 'Subestimados, haciendo los coeficientes parecer más significativos de lo que son', 'Exactos, la autocorrelación no afecta los SE', 'Iguales a cero'],
    ans: 1, exp: 'La autocorrelación positiva hace que los residuos sean más similares entre sí de lo esperado. MCO subestima los SE, produciendo valores t inflados y p-valores artificialmente bajos.' },

  { q: 'El bootstrap es útil en regresión cuando:',
    opts: ['Todos los supuestos de MCO se cumplen perfectamente', 'Los supuestos de normalidad o homocedasticidad no se cumplen y se necesitan inferencias válidas', 'n es exactamente 100', 'El modelo tiene un solo predictor'],
    ans: 1, exp: 'El bootstrap remuestrea los datos repetidamente para estimar la distribución empírica de los coeficientes, sin requerir supuesto de normalidad. Útil cuando los supuestos paramétricos son cuestionables.' },
];
