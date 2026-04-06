const EXTRA_REGRESION = [
  // --- CORRELACION DE PEARSON ---
  { q: '¿Cuál es el rango de valores posibles del coeficiente de correlación de Pearson r?',
    opts: ['0 a 1', '−1 a 0', '−1 a 1', '−∞ a +∞'],
    ans: 2, exp: 'r siempre está entre −1 y 1. r = 1 correlación perfecta positiva, r = −1 perfecta negativa, r = 0 sin correlación lineal.' },

  { q: 'Si r = 0, se puede concluir que:',
    opts: ['No existe relación lineal entre X e Y, pero puede haber relación no lineal', 'No existe ningún tipo de relación entre X e Y', 'Y disminuye cuando X aumenta', 'El modelo de regresión es perfecto'],
    ans: 0, exp: 'r mide solo correlación lineal. r = 0 no descarta relaciones curvilíneas o de otro tipo entre las variables.' },

  { q: 'Un r = 0.35 entre horas de estudio y calificación indica:',
    opts: ['Correlación positiva débil', 'Correlación negativa moderada', 'Correlación positiva perfecta', 'Sin correlación'],
    ans: 0, exp: 'Valores de |r| entre 0.20 y 0.39 se consideran correlación débil. El signo positivo indica que más horas de estudio se asocia con mayor calificación.' },

  { q: '¿Qué supuesto requiere la correlación de Pearson que NO requiere Spearman?',
    opts: ['Que ambas variables sean ordinales', 'Que la relación sea monotónica', 'Que ambas variables sean aproximadamente normales y la relación lineal', 'Que n sea mayor a 30'],
    ans: 2, exp: 'Pearson asume normalidad bivariada y relación lineal. Spearman solo requiere datos ordinales y monotonía, sin supuesto de normalidad.' },

  { q: 'La fórmula de r de Pearson es r = Σ(xᵢ−x̄)(yᵢ−ȳ) / [√Σ(xᵢ−x̄)² · √Σ(yᵢ−ȳ)²]. Esta expresión equivale a:',
    opts: ['La covarianza de X e Y dividida entre el producto de sus desviaciones estándar', 'La varianza de X dividida entre la varianza de Y', 'El promedio de los productos XY', 'La pendiente de la recta de regresión'],
    ans: 0, exp: 'r = Cov(X,Y) / (sₓ · sᵧ). La covarianza estandarizada produce un valor sin unidades que varía entre −1 y 1.' },

  { q: 'Si r = 0.60 entre peso y talla, ¿cuánta varianza de la talla explica el peso?',
    opts: ['60%', '40%', '0.60%', '36%'],
    ans: 3, exp: 'R² = r² = 0.60² = 0.36 = 36%. El coeficiente de determinación es el cuadrado de r, no r mismo.' },

  { q: 'Dos investigadores calculan r = 0.90 entre temperatura y ventas de helados. ¿Podemos concluir que la temperatura CAUSA el aumento de ventas?',
    opts: ['Sí, porque r es muy alto', 'Solo si el p-valor < 0.01', 'Sí, si la muestra fue aleatoria', 'No, la correlación no implica causalidad'],
    ans: 3, exp: 'Correlación ≠ causalidad. r elevado indica asociación estadística, pero factores de confusión, variables omitidas u otras explicaciones pueden ser responsables.' },

  { q: 'Para probar H₀: ρ = 0 usando r = 0.45 con n = 25, el estadístico t es t = r√(n−2)/√(1−r²). ¿Cuántos grados de libertad tiene este test?',
    opts: ['25', '24', '23', '22'],
    ans: 2, exp: 'El test t para r tiene gl = n − 2 = 25 − 2 = 23, porque se estiman dos parámetros (media de X y media de Y).' },

  { q: 'El coeficiente r es sensible a:',
    opts: ['La escala de medición de las variables', 'El tamaño de la muestra únicamente', 'La varianza de los errores', 'Los valores atípicos (outliers)'],
    ans: 3, exp: 'Un solo outlier puede inflar o deflactar notablemente r. Spearman es más robusto ante valores extremos.' },

  { q: 'Si se calcula r = −0.78 entre precio y demanda, la pendiente b₁ de la regresión de demanda sobre precio será:',
    opts: ['Positiva', 'Cero', 'Igual a −0.78', 'Negativa'],
    ans: 3, exp: 'El signo de r y de b₁ siempre coinciden: r negativo implica b₁ negativo (relación inversa entre precio y demanda).' },

  // --- CORRELACION DE SPEARMAN ---
  { q: '¿Cuál es la diferencia principal entre los coeficientes r de Pearson y ρ de Spearman?',
    opts: ['Ambos usan rangos pero con fórmulas distintas', 'Spearman solo aplica a muestras grandes', 'Pearson usa los datos originales; Spearman usa los rangos de los datos', 'Spearman usa los datos originales; Pearson usa rangos'],
    ans: 2, exp: 'Pearson trabaja con valores reales. Spearman convierte los datos a rangos antes de calcular la correlación, haciéndolo robusto ante outliers y no normalidad.' },

  { q: 'La fórmula simplificada de Spearman es ρ = 1 − 6ΣD²/[n(n²−1)], donde D es:',
    opts: ['La diferencia entre cada valor de X e Y', 'La desviación estándar de los rangos', 'El cuadrado de la correlación de Pearson', 'La diferencia entre los rangos de cada par (xᵢ, yᵢ)'],
    ans: 3, exp: 'Dᵢ = rango(xᵢ) − rango(yᵢ). Se eleva al cuadrado y se suma para calcular ρ.' },

  { q: 'Un estudio clasifica 8 estudiantes por rendimiento académico y habilidad musical (ambas en escala 1 a 8). ¿Qué coeficiente es más apropiado?',
    opts: ['R² de regresión', 'VIF', 'r de Pearson', 'ρ de Spearman'],
    ans: 3, exp: 'Los datos son ordinales (rangos del 1 al 8). Spearman es el coeficiente adecuado para datos ordinales o cuando no se puede asumir normalidad.' },

  { q: 'Si ρ de Spearman = 1, la relación entre X e Y es:',
    opts: ['Sin relación', 'Siempre lineal pero negativa', 'Lineal perfecta con pendiente positiva', 'Monotónica perfectamente creciente'],
    ans: 3, exp: 'ρ = 1 indica que el orden de los rangos es idéntico: cuando X sube, Y siempre sube (relación perfectamente monotónica creciente, no necesariamente lineal).' },

  { q: 'Spearman es preferible a Pearson cuando:',
    opts: ['Las variables son cuantitativas y normales', 'Se quiere calcular R²', 'Los datos contienen outliers graves o la distribución es muy asimétrica', 'La muestra tiene más de 1000 observaciones'],
    ans: 2, exp: 'Spearman es más robusto ante outliers y no requiere normalidad, siendo preferido cuando los datos no cumplen los supuestos de Pearson.' },

  // --- REGRESION LINEAL SIMPLE: ECUACION, b0, b1 ---
  { q: 'En la ecuación ŷ = 5.2 + 0.8x, si x = 10, el valor predicho de y es:',
    opts: ['5.2', '8.0', '16.0', '13.2'],
    ans: 3, exp: 'ŷ = 5.2 + 0.8(10) = 5.2 + 8.0 = 13.2.' },

  { q: 'La pendiente b₁ se calcula como b₁ = Σ(xᵢ−x̄)(yᵢ−ȳ) / Σ(xᵢ−x̄)². En un conjunto con Σ(xᵢ−x̄)(yᵢ−ȳ) = 120 y Σ(xᵢ−x̄)² = 40, entonces b₁ vale:',
    opts: ['0.33', '4800', '3.0', '80'],
    ans: 2, exp: 'b₁ = 120 / 40 = 3.0.' },

  { q: 'Una vez calculada b₁ = 3.0, con x̄ = 5 e ȳ = 20, el intercepto b₀ es:',
    opts: ['5.0', '−5.0', '20.0', '35.0'],
    ans: 0, exp: 'b₀ = ȳ − b₁·x̄ = 20 − 3.0·5 = 20 − 15 = 5.0.' },

  { q: 'En ŷ = 12 − 2.5x, la interpretación de b₁ = −2.5 es:',
    opts: ['El intercepto es −2.5', 'R² = 0.25', 'Por cada unidad que aumenta y, x disminuye en 2.5', 'Por cada unidad que aumenta x, y disminuye en 2.5 unidades en promedio'],
    ans: 3, exp: 'La pendiente b₁ indica el cambio medio en ŷ por cada incremento de una unidad en x. Al ser negativo, y disminuye.' },

  { q: 'El método de mínimos cuadrados minimiza:',
    opts: ['La suma de los residuos Σeᵢ', 'La suma de los valores predichos Σŷᵢ', 'La suma de los cuadrados de los residuos Σeᵢ²', 'El coeficiente r'],
    ans: 2, exp: 'MCO (Mínimos Cuadrados Ordinarios) minimiza Σ(yᵢ − ŷᵢ)² = Σeᵢ². Esto garantiza que la recta sea la mejor aproximación lineal.' },

  { q: 'Si x̄ = 4, ȳ = 10 y b₁ = 2, la recta de regresión pasa por el punto:',
    opts: ['(4, 10)', '(0, 0)', '(2, 10)', '(0, 2)'],
    ans: 0, exp: 'La recta de regresión siempre pasa por el punto (x̄, ȳ). Con x̄ = 4, ȳ = 10, el punto (4, 10) está garantizado en la recta.' },

  { q: '¿Cuál es el signo de b₁ cuando r de Pearson es negativo?',
    opts: ['Siempre positivo', 'Puede ser positivo o negativo', 'Siempre negativo', 'Igual a cero'],
    ans: 2, exp: 'b₁ = r · (sᵧ/sₓ). Como sᵧ y sₓ son siempre positivas, el signo de b₁ es idéntico al signo de r.' },

  { q: 'Un investigador usa la ecuación ŷ = 3 + 0.5x para predecir ventas (y) con publicidad (x, en miles de soles). ¿Qué significa b₀ = 3?',
    opts: ['Sin publicidad, se esperan 3 000 soles de ventas en promedio', 'Cada sol invertido genera 3 de ventas', 'r = 3', 'SCE = 3'],
    ans: 0, exp: 'b₀ = 3 (miles de soles) cuando x = 0 (sin publicidad). El intercepto tiene significado práctico solo si x = 0 es posible y razonable.' },

  { q: 'Dado ŷ = 50 + 4x (ingresos en miles), si x = 0 no tiene sentido en la realidad, el intercepto b₀ = 50:',
    opts: ['Indica que R² = 0.50', 'Es siempre interpretable y tiene significado directo', 'Significa que la varianza del error es 50', 'Es solo un parámetro matemático de ajuste sin interpretación práctica necesaria'],
    ans: 3, exp: 'Cuando x = 0 está fuera del rango observado, b₀ pierde interpretación práctica y funciona como constante de ajuste matemático.' },

  // --- COEFICIENTE DE DETERMINACION R² ---
  { q: 'R² = 0.90 en un modelo de regresión indica que:',
    opts: ['r = 0.90', 'El error del modelo es 90%', 'n = 90', 'El 90% de la variabilidad de Y es explicada por el modelo'],
    ans: 3, exp: 'R² = SCR/SCT = proporción de varianza de Y explicada por X. R² = 0.90 es un ajuste muy bueno.' },

  { q: 'Si SCT = 200 y SCE = 50, ¿cuánto vale R²?',
    opts: ['0.25', '0.50', '0.75', '4.0'],
    ans: 2, exp: 'R² = 1 − SCE/SCT = 1 − 50/200 = 1 − 0.25 = 0.75.' },

  { q: '¿Cuál es el rango de valores posible para R²?',
    opts: ['−1 a 1', '−∞ a +∞', '0 a 1', '0 a 100'],
    ans: 2, exp: 'R² ∈ [0, 1]. R² = 0 indica que el modelo no explica nada; R² = 1 indica ajuste perfecto.' },

  { q: 'En regresión lineal simple (una sola variable X), ¿qué relación existe entre r y R²?',
    opts: ['R² = r', 'R² = 2r', 'R² = √r', 'R² = r²'],
    ans: 3, exp: 'En regresión simple, R² = r² (el cuadrado del coeficiente de Pearson). En regresión múltiple R² se calcula directamente de las sumas de cuadrados.' },

  { q: 'Un modelo tiene R² = 0.45. El porcentaje de varianza NO explicada por el modelo es:',
    opts: ['45%', '0.55%', '55%', '0.45%'],
    ans: 2, exp: '1 − R² = 1 − 0.45 = 0.55 = 55%. La varianza no explicada corresponde a SCE/SCT.' },

  { q: 'Si se agrega una variable irrelevante a un modelo de regresión múltiple, R² generalmente:',
    opts: ['Disminuye', 'Permanece exactamente igual', 'Aumenta o se mantiene igual, nunca disminuye', 'Se vuelve negativo'],
    ans: 2, exp: 'R² nunca puede disminuir al agregar variables. Por eso existe el R² ajustado, que penaliza la inclusión de variables sin poder explicativo real.' },

  { q: '¿Qué limitación tiene R² para comparar modelos con diferente número de predictores?',
    opts: ['R² no tiene limitaciones en modelos múltiples', 'R² negativo indica un mal modelo', 'R² no puede superar 0.5 en modelos múltiples', 'R² siempre aumenta al agregar variables, aunque sean irrelevantes, por lo que sobrevalora modelos con más predictores'],
    ans: 3, exp: 'Para comparar modelos con distinto número de predictores se usa R² ajustado = 1 − [(1−R²)(n−1)/(n−k−1)], que penaliza la adición de variables no significativas.' },

  // --- PRUEBA t PARA b₁ ---
  { q: 'La hipótesis nula en la prueba t para la pendiente b₁ es:',
    opts: ['H₀: b₁ > 0', 'H₀: R² = 1', 'H₀: β₁ = 0 (la pendiente poblacional es cero)', 'H₀: b₀ = 0'],
    ans: 2, exp: 'H₀: β₁ = 0 → x no tiene efecto lineal sobre y. Si se rechaza, el predictor x es estadísticamente significativo.' },

  { q: 'El estadístico t para b₁ se calcula como t = b₁ / SE(b₁). Si b₁ = 4.2 y SE(b₁) = 1.4, entonces t es:',
    opts: ['5.88', '2.80', '3.00', '1.40'],
    ans: 2, exp: 't = 4.2 / 1.4 = 3.0. Se compara con el valor crítico t(α/2, n−2).' },

  { q: 'Con t = 3.0 y n = 22 (gl = 20), si t crítico al 5% bilateral es 2.086, se concluye:',
    opts: ['El modelo no es válido', 'r = 0', 'No se rechaza H₀: β₁ = 0', 'Se rechaza H₀: β₁ = 0; b₁ es significativo'],
    ans: 3, exp: 'Como |t| = 3.0 > 2.086 (valor crítico), se rechaza H₀. La pendiente β₁ ≠ 0 es estadísticamente significativa al 5%.' },

  { q: 'El error estándar de b₁, SE(b₁), mide:',
    opts: ['La variabilidad del estimador b₁ de muestra a muestra', 'La suma de cuadrados del error del modelo', 'El valor de la pendiente en la población', 'R² del modelo'],
    ans: 0, exp: 'SE(b₁) = √[SCE/(n−2)] / √Σ(xᵢ−x̄)². Cuanto menor sea, más preciso es el estimador b₁.' },

  { q: 'Si el p-valor asociado a b₁ es 0.001 con α = 0.05, la conclusión es:',
    opts: ['No hay evidencia de relación lineal', 'El modelo explica el 99.9% de la varianza', 'Existe evidencia estadística significativa de que β₁ ≠ 0', 'b₀ es significativo'],
    ans: 2, exp: 'p-valor (0.001) < α (0.05) → se rechaza H₀: β₁ = 0. La variable X es un predictor significativo de Y.' },

  // --- ANOVA PARA REGRESION ---
  { q: 'En la tabla ANOVA de regresión simple, SCT = SCR + SCE, donde SCR es:',
    opts: ['Suma de cuadrados de los residuos', 'Suma de cuadrados totales', 'Suma de cuadrados explicada por la regresión', 'Desviación estándar de los errores'],
    ans: 2, exp: 'SCR (regresión) es la variación de Y explicada por X. SCE (error) es la variación no explicada. SCT = SCR + SCE.' },

  { q: 'En ANOVA de regresión simple (n = 20, 1 predictor), los grados de libertad del error son:',
    opts: ['1', '19', '20', '18'],
    ans: 3, exp: 'gl(error) = n − k − 1 = 20 − 1 − 1 = 18, donde k = número de predictores.' },

  { q: 'El estadístico F en ANOVA de regresión se calcula como F = MSR/MSE. Si SCR = 900 (gl=1) y SCE = 300 (gl=18), entonces F vale:',
    opts: ['3.0', '0.333', '54.0', '18.0'],
    ans: 2, exp: 'MSR = 900/1 = 900; MSE = 300/18 = 16.67; F = 900/16.67 ≈ 54.0.' },

  { q: 'Si el p-valor del estadístico F del ANOVA es 0.03 con α = 0.05, se concluye que:',
    opts: ['Los residuos son normales', 'Hay multicolinealidad', 'El modelo no es significativo', 'El modelo es globalmente significativo: X explica de forma significativa la variabilidad de Y'],
    ans: 3, exp: 'p-valor (0.03) < α (0.05) → se rechaza H₀ del ANOVA. Al menos una variable (en este caso X) tiene efecto significativo sobre Y.' },

  { q: 'En regresión lineal simple, la prueba F del ANOVA y la prueba t para β₁ son:',
    opts: ['Completamente independientes', 'Diferentes pruebas que nunca coinciden en conclusión', 'Solo equivalentes cuando n > 100', 'Equivalentes: F = t²'],
    ans: 3, exp: 'En regresión simple, F = t². Ambas prueban exactamente lo mismo: si β₁ = 0. En regresión múltiple la prueba F es global y la t evalúa cada coeficiente por separado.' },

  { q: 'El cuadrado medio del error (MSE) en regresión es un estimador insesgado de:',
    opts: ['La varianza de los errores σ²', 'La varianza de Y', 'b₁²', 'SCT/n'],
    ans: 0, exp: 'MSE = SCE/(n−k−1) estima σ² (varianza del error poblacional). Es la base para calcular el error estándar de los coeficientes.' },

  // --- PREDICCION Y RESIDUOS ---
  { q: 'Con ŷ = 10 + 2x, para x = 7 se obtiene ŷ = 24. Si el valor observado es y = 21, el residuo eᵢ es:',
    opts: ['3', '24', '−3', '45'],
    ans: 2, exp: 'eᵢ = yᵢ − ŷᵢ = 21 − 24 = −3. El residuo negativo indica sobreestimación del modelo.' },

  { q: '¿Qué representa el residuo eᵢ = yᵢ − ŷᵢ?',
    opts: ['La correlación entre X e Y', 'El valor predicho por el modelo', 'La parte de Y no explicada por el modelo de regresión', 'La pendiente del modelo'],
    ans: 2, exp: 'El residuo es la diferencia entre el valor observado y el predicho. Representa la variación de Y no capturada por la recta de regresión.' },

  { q: 'La suma de los residuos Σeᵢ en MCO siempre es:',
    opts: ['Igual a SCE', 'Igual a SCR', 'Igual a cero', 'Mayor que cero'],
    ans: 2, exp: 'Una propiedad algebraica de MCO es que Σeᵢ = 0, es decir, los residuos positivos y negativos se cancelan.' },

  { q: 'Si una observación tiene residuo muy grande en valor absoluto, esto podría indicar:',
    opts: ['Que el modelo tiene R² = 1', 'Homocedasticidad perfecta', 'Que b₁ = 0', 'Un valor atípico (outlier) o que el modelo no ajusta bien en esa región'],
    ans: 3, exp: 'Residuos grandes señalan observaciones con valores inusualmente alejados de la recta. Pueden indicar outliers, errores de medición o deficiencias del modelo.' },

  { q: 'La predicción ŷ = 80 para x = 50, cuando los datos de x van de 10 a 40, es un ejemplo de:',
    opts: ['Extrapolación fuera del rango observado, con resultados poco confiables', 'Interpolación válida dentro del rango', 'Aplicación correcta de R²', 'Prueba de significancia del modelo'],
    ans: 0, exp: 'Extrapolar más allá del rango de x (10 a 40) es arriesgado. La relación lineal observada puede no mantenerse para x = 50.' },

  { q: 'El error estándar de la estimación (Sₑ) se define como Sₑ = √[SCE/(n−2)]. Si SCE = 72 y n = 20, Sₑ vale:',
    opts: ['2.0', '3.6', '4.0', '6.0'],
    ans: 0, exp: 'Sₑ = √(72/18) = √4 = 2.0.' },

  // --- SELECCION DE MODELO y CRITERIOS ---
  { q: 'Al comparar dos modelos, ¿cuál de los siguientes criterios favorece modelos más parsimoniosos (menos variables)?',
    opts: ['SCT', 'Sₑ absoluto', 'R²', 'R² ajustado'],
    ans: 3, exp: 'R² ajustado = 1 − [(1−R²)(n−1)/(n−k−1)] penaliza variables adicionales. Puede disminuir si se agrega una variable sin aporte real.' },

  { q: 'Modelo A: R² = 0.80, p(F) = 0.001. Modelo B: R² = 0.82, p(F) = 0.08. Con α = 0.05, ¿cuál es preferible?',
    opts: ['Ambos son equivalentes', 'Modelo A porque es estadísticamente significativo', 'Ninguno porque R² < 0.90', 'Modelo B porque tiene mayor R²'],
    ans: 1, exp: 'El Modelo B no es significativo (p = 0.08 > 0.05). El Modelo A es significativo y explica el 80% de la varianza, siendo más confiable.' },

  { q: 'Un modelo tiene F = 0.8 con p-valor = 0.38. Esto indica:',
    opts: ['El modelo tiene buen ajuste', 'R² = 0.38', 'Los residuos son normales', 'El modelo no es significativamente mejor que el modelo sin predictores'],
    ans: 3, exp: 'p(F) = 0.38 > 0.05. No se rechaza H₀ del ANOVA: el modelo no mejora significativamente la predicción respecto a usar solo ȳ.' },

  // --- CAUSALIDAD Y ERRORES COMUNES ---
  { q: 'Estudios muestran que ciudades con más hospitales tienen mayor tasa de mortalidad. La correlación positiva entre número de hospitales y mortalidad indica que:',
    opts: ['Los hospitales causan muertes y se deben eliminar', 'El modelo de regresión es inválido', 'r > 0 siempre implica causalidad positiva', 'La correlación puede ser espuria; ciudades más grandes tienen más hospitales Y más muertes por tamaño'],
    ans: 3, exp: 'Es una correlación espuria. El tamaño de la ciudad es una variable de confusión. Esto ilustra por qué correlación no implica causalidad.' },

  { q: 'Un error común al interpretar r = 0.70 es afirmar que:',
    opts: ['Existe correlación positiva moderada-fuerte entre X e Y', 'r es mayor que 0', 'El modelo explica el 70% de la varianza (confundir r con R²)', 'La pendiente b₁ tiene el mismo signo que r'],
    ans: 2, exp: 'r = 0.70 no significa que el modelo explique el 70%. R² = r² = 0.49, es decir el 49% de la varianza. Confundir r con R² es un error frecuente.' },

  { q: 'Un modelo de regresión lineal fue ajustado para x entre 20 y 80. Usar el modelo para predecir y cuando x = 200 es problemático porque:',
    opts: ['Se extrapola fuera del rango, y la relación lineal puede no aplicarse en esa región', 'R² caerá a cero automáticamente', 'b₁ cambia de signo', 'El intercepto deja de ser válido en cualquier punto'],
    ans: 0, exp: 'La extrapolación asume que la tendencia lineal continúa más allá del rango observado, lo cual puede ser incorrecto. El modelo solo es confiable dentro del rango de entrenamiento.' },

  { q: 'La diferencia entre correlación y causalidad es que:',
    opts: ['No existe diferencia práctica', 'La causalidad se establece cuando p-valor < 0.001', 'La causalidad implica r = 1', 'La correlación mide asociación estadística; la causalidad requiere también diseño experimental, temporalidad y exclusión de confusores'],
    ans: 3, exp: 'Para afirmar causalidad se necesita: correlación, precedencia temporal, ausencia de terceras variables y sustento teórico. La sola correlación no es suficiente.' },

  // --- CALCULOS CON FORMULA b₁ ---
  { q: 'Dados n=5, ΣX=15, ΣY=25, ΣXY=85, ΣX²=55, x̄=3, ȳ=5. La pendiente b₁ = (ΣXY − n·x̄·ȳ)/(ΣX² − n·x̄²) es:',
    opts: ['1.0', '2.0', '0.5', '3.0'],
    ans: 0, exp: 'b₁ = (85 − 5·3·5)/(55 − 5·9) = (85 − 75)/(55 − 45) = 10/10 = 1.0.' },

  { q: 'Con n=4, ΣXY=200, n·x̄·ȳ=160, ΣX²=100, n·x̄²=64, la pendiente b₁ es:',
    opts: ['1.11', '2.50', '1.00', '0.40'],
    ans: 0, exp: 'b₁ = (200 − 160)/(100 − 64) = 40/36 ≈ 1.11.' },

  { q: 'Si b₁ = 1.11, x̄ = 4 e ȳ = 10, entonces b₀ = ȳ − b₁·x̄ es aproximadamente:',
    opts: ['14.44', '6.44', '1.44', '5.56'],
    ans: 3, exp: 'b₀ = 10 − 1.11·4 = 10 − 4.44 = 5.56.' },

  { q: 'Con ŷ = 5.56 + 1.11x, para x = 6 el valor predicho es aproximadamente:',
    opts: ['12.22', '6.66', '11.22', '16.00'],
    ans: 0, exp: 'ŷ = 5.56 + 1.11·6 = 5.56 + 6.66 = 12.22.' },

  // --- MAS PREGUNTAS DE CONCEPTOS ---
  { q: '¿Cuál de estas afirmaciones sobre la recta de regresión de MCO es FALSA?',
    opts: ['Minimiza la suma de cuadrados de los residuos', 'La recta pasa siempre por (x̄, ȳ)', 'La suma de los residuos es siempre cero', 'Maximiza el coeficiente de determinación R²'],
    ans: 3, exp: 'MCO minimiza SCE; maximizar R² y minimizar SCE son equivalentes, pero MCO maximiza R² de forma indirecta como consecuencia. La opción D no es la propiedad definitoria de MCO.' },

  { q: 'Si r = 0 y se ajusta una regresión lineal simple, entonces:',
    opts: ['R² = 0 y b₁ = 0', 'R² = 1 y b₁ = 1', 'b₀ = 0', 'El modelo no puede ajustarse'],
    ans: 0, exp: 'r = 0 implica R² = r² = 0 y b₁ = r·(sᵧ/sₓ) = 0. La recta de regresión es horizontal: ŷ = ȳ.' },

  { q: 'La correlación parcial entre X₁ e Y controlando X₂ mide:',
    opts: ['La correlación bruta entre X₁ e Y sin considerar otras variables', 'El VIF de X₁', 'La pendiente de X₁ en la regresión múltiple', 'La asociación entre X₁ e Y eliminando el efecto lineal de X₂'],
    ans: 3, exp: 'La correlación parcial remueve el efecto de X₂ tanto de X₁ como de Y, midiendo la relación "neta" entre X₁ e Y.' },

  { q: '¿Qué indica un gráfico de dispersión con puntos muy dispersos alrededor de la recta de regresión?',
    opts: ['Homocedasticidad perfecta', 'Que b₁ es grande', 'R² alto y buen ajuste', 'R² bajo: la recta explica poca variación de Y'],
    ans: 3, exp: 'Mayor dispersión alrededor de la recta → mayor SCE → menor R². Los puntos alejados de la recta implican que el modelo explica poco.' },

  { q: 'La regresión lineal simple asume que la relación entre X e Y es:',
    opts: ['Exponencial', 'Cuadrática', 'Lineal', 'Logarítmica'],
    ans: 2, exp: 'El modelo ŷ = b₀ + b₁x asume linealidad: cada unidad de cambio en X produce el mismo cambio constante en Y, independiente del nivel de X.' },

  { q: 'La recta de regresión de Y sobre X y la recta de X sobre Y son:',
    opts: ['Siempre idénticas', 'La misma recta rotada 90°', 'Generalmente distintas, coincidiendo solo cuando r = ±1', 'Siempre perpendiculares'],
    ans: 2, exp: 'Regresar Y sobre X minimiza residuos verticales; regresar X sobre Y minimiza residuos horizontales. Solo cuando |r| = 1 ambas rectas coinciden.' },

  { q: 'Si se duplican todos los valores de X, el coeficiente r de Pearson:',
    opts: ['Se duplica', 'Se divide entre 2', 'No cambia', 'Se vuelve negativo'],
    ans: 2, exp: 'r es invariante a transformaciones lineales de escala (multiplicar o sumar constante). El signo y magnitud de r no cambian si se duplican todos los X.' },

  { q: 'En una muestra de 30 países, r entre PIB per cápita y esperanza de vida es 0.78. La prueba de significancia (H₀: ρ = 0) usa una distribución:',
    opts: ['Normal estándar', 'F con 1 y 28 gl', 'Chi-cuadrado con 1 gl', 't de Student con 28 grados de libertad'],
    ans: 3, exp: 't = r√(n−2)/√(1−r²) ~ t(n−2) = t(28) bajo H₀. Es la distribución apropiada para probar correlación en muestras pequeñas.' },

  { q: 'Una regresión lineal de notas (Y) sobre horas de sueño (X) da b₁ = −0.5 con p-valor = 0.20. La conclusión es:',
    opts: ['R² = 0.20', 'El modelo es globalmente significativo', 'Las horas de sueño tienen efecto significativo negativo sobre las notas', 'No hay evidencia estadística de que las horas de sueño predigan linealmente las notas (α = 0.05)'],
    ans: 3, exp: 'p = 0.20 > 0.05: no se rechaza H₀: β₁ = 0. No hay suficiente evidencia para afirmar relación lineal significativa entre horas de sueño y notas.' },

  { q: 'Si en una regresión simple se tiene SCR = 400, SCE = 100, n = 25, entonces R² es:',
    opts: ['0.80', '0.20', '0.40', '4.0'],
    ans: 0, exp: 'SCT = SCR + SCE = 400 + 100 = 500. R² = SCR/SCT = 400/500 = 0.80.' },

  { q: 'El intervalo de predicción para una nueva observación es _______ que el intervalo de confianza para el valor medio de Y.',
    opts: ['Igual de amplio', 'Más estrecho', 'Más amplio', 'No comparable'],
    ans: 2, exp: 'El intervalo de predicción incluye la incertidumbre de la media más la variabilidad de la nueva observación individual, siendo siempre más amplio que el intervalo para la media.' },

  { q: 'La transformación logarítmica Y* = ln(Y) en regresión se usa principalmente para:',
    opts: ['Aumentar el tamaño de la muestra', 'Hacer que b₀ = 0', 'Eliminar la multicolinealidad', 'Linearizar relaciones curvilíneas y estabilizar la varianza de los residuos'],
    ans: 3, exp: 'ln(Y) puede convertir relaciones exponenciales en lineales y reducir la heterocedasticidad. Es una transformación Box-Cox con λ = 0.' },

  { q: 'Un modelo de regresión de salario (en soles) sobre años de experiencia tiene b₁ = 250. Esto significa:',
    opts: ['Por cada año más de experiencia, el salario esperado aumenta en 250 soles', 'El salario promedio es 250 soles', 'r = 2.50', 'SCR = 250'],
    ans: 0, exp: 'b₁ = 250 soles/año: por cada año adicional de experiencia, el salario predicho aumenta 250 soles en promedio.' },

  { q: 'Si agregamos un segundo predictor X₂ al modelo y R² pasa de 0.60 a 0.62, pero R² ajustado baja de 0.58 a 0.57, la conclusión es:',
    opts: ['X₂ mejora significativamente el modelo', 'Se debe eliminar X₁ del modelo', 'El modelo original era inválido', 'X₂ no aporta suficiente para compensar la penalización por el parámetro adicional'],
    ans: 3, exp: 'El R² ajustado bajó: el incremento en R² bruto (2 puntos) no compensa la penalización por añadir un parámetro extra. X₂ probablemente no sea significativa.' },

  { q: 'La covarianza entre X e Y puede tomar cualquier valor real, mientras que r está acotado. ¿Por qué r es más útil?',
    opts: ['r es siempre positivo', 'r siempre es mayor que la covarianza', 'r no tiene unidades y permite comparar relaciones entre diferentes pares de variables', 'r mide causalidad directa'],
    ans: 2, exp: 'r = Cov(X,Y)/(sₓ·sᵧ) estandariza la covarianza. Al no tener unidades (adimensional), r es comparable entre estudios con distintas variables y escalas.' },

  { q: 'En el contexto de regresión, la multicolinealidad afecta principalmente:',
    opts: ['El valor de R²', 'La predicción general del modelo', 'La estabilidad e interpretación de los coeficientes b₁, b₂, ... individualmente', 'El valor de b₀'],
    ans: 2, exp: 'La multicolinealidad infla los errores estándar de los coeficientes individuales, haciendo difícil separar el efecto de cada predictor. R² y las predicciones pueden seguir siendo aceptables.' },

  { q: '¿Cuál es la unidad de medida de b₁ en la regresión de ingresos (soles) sobre educación (años)?',
    opts: ['Años²', 'Adimensional', 'Soles·años', 'Soles/año'],
    ans: 3, exp: 'b₁ = ΔY/ΔX, entonces sus unidades son unidades de Y / unidades de X = soles/año.' },

  { q: 'En un gráfico de residuos versus valores ajustados, un patrón en forma de embudo (residuos que se amplían) indica:',
    opts: ['Normalidad de los residuos', 'Autocorrelación positiva', 'Heterocedasticidad: la varianza del error no es constante', 'Buen ajuste del modelo'],
    ans: 2, exp: 'El patrón de embudo es la señal clásica de heterocedasticidad. La varianza de los residuos aumenta con los valores ajustados, violando el supuesto de varianza constante.' },

  { q: 'Si b₁ = 3.5 y SE(b₁) = 0.5, el intervalo de confianza del 95% para β₁ con z crítico = 1.96 aproximadamente es:',
    opts: ['(2.52, 4.48)', '(3.0, 4.0)', '(0.5, 6.5)', '(3.5, 5.0)'],
    ans: 0, exp: 'IC: b₁ ± 1.96·SE = 3.5 ± 1.96·0.5 = 3.5 ± 0.98 = (2.52, 4.48).' },

  { q: 'El modelo de regresión de MCO asume que los errores εᵢ son:',
    opts: ['Perfectamente predecibles a partir de X', 'Siempre positivos', 'Independientes, con media cero y varianza constante (homocedasticidad)', 'Iguales para todas las observaciones'],
    ans: 2, exp: 'Los supuestos clásicos son: E(εᵢ) = 0, Var(εᵢ) = σ² (homocedasticidad), Cov(εᵢ, εⱼ) = 0 (independencia), y εᵢ ~ Normal.' },

  { q: 'En una empresa, x = precio (soles) e y = unidades vendidas. Con b₁ = −12.3 y SE = 2.1, t = −5.86, p < 0.001. La conclusión es:',
    opts: ['El precio no afecta las ventas', 'El modelo no es válido', 'b₀ es el único coeficiente relevante', 'Por cada sol adicional de precio, se venden 12.3 unidades menos en promedio (significativo al 0.1%)'],
    ans: 3, exp: 'b₁ = −12.3 (significativo al 0.1%) indica que aumentar el precio en 1 sol reduce las ventas en 12.3 unidades en promedio. Relación inversa estadísticamente muy significativa.' },

  { q: 'Para verificar si la relación es lineal, el gráfico más útil ANTES de ajustar el modelo es:',
    opts: ['Histograma de Y', 'Q-Q plot de los residuos', 'Gráfico de barras de X', 'Gráfico de dispersión de Y versus X'],
    ans: 3, exp: 'El gráfico de dispersión permite ver visualmente si la relación entre X e Y tiene forma lineal, cuadrática u otra forma antes de ajustar el modelo.' },

  { q: 'Si r = 0.95 entre consumo de café (tazas/día) y productividad, un consultor recomienda beber más café para ser más productivo. El principal error es:',
    opts: ['Está confundiendo correlación con causalidad; puede existir una variable de confusión', 'r debería ser mayor a 0.99 para hacer esa recomendación', 'El cálculo de r está mal', 'La muestra es insuficiente por definición'],
    ans: 0, exp: 'Alta correlación no implica causalidad. Una variable de confusión (por ejemplo, tipo de trabajo, horas laborales) podría explicar la asociación sin que el café cause productividad.' },

  { q: 'Dado r = 0.80 entre X e Y. Si la desviación estándar de X es 5 y la de Y es 10, la pendiente b₁ vale:',
    opts: ['0.40', '4.0', '1.60', '0.80'],
    ans: 2, exp: 'b₁ = r·(sᵧ/sₓ) = 0.80·(10/5) = 0.80·2 = 1.60.' },

  { q: 'La estimación puntual de Y para un nuevo valor x₀ = 15 con ŷ = 3 + 2x₀ da:',
    opts: ['30', '45', '18', '33'],
    ans: 3, exp: 'ŷ = 3 + 2·15 = 3 + 30 = 33.' },

  { q: '¿Qué se entiende por "regresión a la media"?',
    opts: ['La recta de regresión siempre pasa por el origen', 'b₀ siempre es igual a ȳ', 'Valores extremos de X tienden a producir predicciones de Y más cercanas a la media de Y', 'La regresión minimiza la varianza de X'],
    ans: 2, exp: 'La "regresión a la media" (Galton) dice que predicciones de Y para valores extremos de X tienden a ser menos extremas, acercándose a ȳ, especialmente cuando |r| < 1.' },

  { q: 'Si n = 10 y Σ(xᵢ−x̄)² = 0, ¿qué ocurre al intentar calcular b₁?',
    opts: ['b₁ = 0 automáticamente', 'b₁ = 1', 'b₁ es indeterminado porque se divide entre cero', 'b₁ = n'],
    ans: 2, exp: 'b₁ = Σ(xᵢ−x̄)(yᵢ−ȳ)/Σ(xᵢ−x̄)². Si Σ(xᵢ−x̄)² = 0, todos los xᵢ son iguales; no hay variación en X y la pendiente es indeterminada (división entre cero).' },

  { q: 'Un modelo de regresión tiene ŷ = 100 − 3x (donde x = temperatura en °C, y = consumo eléctrico en kWh). Para x = 30:',
    opts: ['ŷ = 10', '10 kWh sería el consumo predicho, pero si está fuera del rango hay que considerar extrapolación', '190 kWh', 'Los resultados no son válidos sin R²'],
    ans: 0, exp: 'ŷ = 100 − 3·30 = 100 − 90 = 10 kWh.' },

  { q: 'Un r² = 0.64 significa que la correlación de Pearson r es:',
    opts: ['0.64', '0.41', '1.28', '±0.80'],
    ans: 3, exp: 'r = √R² = √0.64 = 0.80 (el signo depende de la pendiente). Si b₁ > 0, r = +0.80; si b₁ < 0, r = −0.80.' },

  { q: '¿Qué ocurre con R² si se centra X (restando x̄ a todos los valores)?',
    opts: ['R² aumenta', 'R² disminuye', 'R² no cambia', 'R² se vuelve negativo'],
    ans: 2, exp: 'Centrar X es una transformación lineal que no altera la correlación ni el ajuste del modelo. R², b₁ y los residuos permanecen iguales; solo cambia b₀.' },

  { q: 'En un estudio con n = 100 parejas de datos, r = 0.20 resulta significativo (p = 0.045). ¿Cómo interpretar este resultado?',
    opts: ['La correlación es fuerte y prácticamente relevante', 'El modelo explica el 20% de la varianza', 'La correlación es estadísticamente significativa pero débil; la significancia depende de n', 'Se debe repetir el estudio con n mayor'],
    ans: 2, exp: 'Con n = 100 hay mucho poder estadístico para detectar correlaciones pequeñas. r = 0.20 es estadísticamente significativo pero corresponde a R² = 0.04 (4% de varianza): relevancia práctica baja.' },

  { q: 'La fórmula alternativa de la pendiente b₁ = r·(sᵧ/sₓ) muestra que si sₓ es muy grande comparado a sᵧ, entonces b₁ será:',
    opts: ['Negativo siempre', 'Igual a r', 'Mayor que r', 'Menor que r en valor absoluto'],
    ans: 3, exp: 'Si sₓ >> sᵧ, el cociente sᵧ/sₓ < 1, y por tanto |b₁| = |r|·(sᵧ/sₓ) < |r|.' },

  { q: 'En regresión, el término "parsimonia" se refiere a:',
    opts: ['Ajustar el modelo con n muy grande', 'Preferir el modelo más simple que explique bien los datos sin variables innecesarias', 'Usar siempre el mayor número de variables posible para maximizar R²', 'Lograr residuos exactamente iguales a cero'],
    ans: 1, exp: 'El principio de parsimonia (navaja de Occam) favorece modelos simples. Más variables no siempre es mejor: el sobreajuste reduce la generalización a nuevos datos.' },

  { q: 'Cuando se agrega una variable de control Z al modelo y b₁ cambia notablemente, esto sugiere:',
    opts: ['Que b₁ original estaba bien calculado', 'Que R² = 0', 'Que Z es una variable de confusión que estaba sesgando la estimación original de β₁', 'Que b₁ nuevo es menos confiable'],
    ans: 2, exp: 'Un cambio notable en b₁ al incluir Z sugiere confusión: Z estaba correlacionada tanto con X como con Y, sesgando la estimación de β₁ en el modelo simple.' },
];
