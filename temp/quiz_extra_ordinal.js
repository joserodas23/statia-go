const EXTRA_ORDINAL = [
  // ── BLOQUE 1: Definición y concepto ──
  { q: '¿Cuál es la característica que distingue a la escala ordinal de la nominal?',
    opts: ['La escala ordinal admite un orden o jerarquía entre categorías', 'La escala ordinal siempre tiene cero absoluto', 'La escala ordinal tiene distancias iguales entre categorías', 'La escala ordinal es siempre numérica'],
    ans: 0, exp: 'La diferencia clave entre ordinal y nominal es que en ordinal existe un orden o jerarquía entre las categorías.' },

  { q: 'La escala ordinal NO tiene la propiedad de:',
    opts: ['Orden entre categorías', 'Identidad entre categorías', 'Distancias iguales entre categorías sucesivas', 'Clasificación de los sujetos'],
    ans: 2, exp: 'En la escala ordinal se puede ordenar, pero las distancias entre categorías no son necesariamente iguales ni medibles.' },

  { q: 'Un estudiante puntúa su satisfacción con el curso como 4 sobre 5. La diferencia entre "4" y "5" en una escala Likert:',
    opts: ['Es exactamente igual a la diferencia entre "1" y "2"', 'No puede asumirse igual a la diferencia entre "1" y "2"', 'Representa medio punto de satisfacción', 'Es cero porque ambos son positivos'],
    ans: 1, exp: 'En escala Likert (ordinal), los intervalos entre categorías no son necesariamente iguales; solo existe orden.' },

  { q: '¿Qué operaciones matemáticas son válidas en variables ordinales?',
    opts: ['Suma y multiplicación', 'Suma, resta, división', 'Comparación de orden (mayor, menor, igual) únicamente', 'Resta y división'],
    ans: 2, exp: 'En ordinal solo podemos establecer si una categoría está por encima o por debajo de otra; no se realizan operaciones aritméticas.' },

  { q: 'La principal ventaja de la escala ordinal sobre la nominal es que:',
    opts: ['Tiene un cero absoluto', 'Las distancias entre categorías son iguales', 'Permite calcular la media aritmética', 'Permite establecer una jerarquía entre las categorías'],
    ans: 3, exp: 'La escala ordinal añade la propiedad de orden a la simple clasificación de la escala nominal.' },

  { q: 'En la escala ordinal, si A > B y B > C, ¿qué se puede concluir sobre la relación entre A y C?',
    opts: ['A > C (propiedad de transitividad)', 'A = C', 'A < C', 'No se puede concluir nada'],
    ans: 0, exp: 'El orden en escala ordinal es transitivo: si A > B y B > C, necesariamente A > C.' },

  // ── BLOQUE 2: Ejemplos con contexto Peru/Ecuador ──
  { q: 'El nivel de pobreza de un distrito peruano clasificado como "no pobre, pobre, pobreza extrema" es:',
    opts: ['Ordinal, porque existe una jerarquía de menor a mayor pobreza', 'Cuantitativa discreta', 'Continua', 'Nominal, porque son nombres'],
    ans: 0, exp: 'Existe un orden claro (no pobre < pobre < pobreza extrema) aunque sin distancias numéricas fijas → ordinal.' },

  { q: 'La calificación de riesgo crediticio de un cliente bancario en Lima (bajo, medio, alto, muy alto) es:',
    opts: ['Ordinal', 'Continua', 'Nominal', 'Discreta cuantitativa'],
    ans: 0, exp: 'Existe orden entre los niveles de riesgo (bajo < medio < alto < muy alto) pero sin distancias cuantificadas → ordinal.' },

  { q: 'El puesto obtenido en un concurso de matemáticas nacional (1°, 2°, 3°…) es una variable:',
    opts: ['Continua', 'Nominal', 'Ordinal', 'De razón'],
    ans: 2, exp: 'El ranking de posiciones tiene orden pero la diferencia entre 1° y 2° no equivale a la diferencia entre 2° y 3° → ordinal.' },

  { q: 'La clasificación de la calidad del agua en ríos de la Amazonía ecuatoriana (excelente, buena, aceptable, deficiente, mala) es:',
    opts: ['Nominal', 'Ordinal', 'Discreta', 'Continua'],
    ans: 1, exp: 'Las categorías de calidad tienen orden (mala < deficiente < aceptable < buena < excelente) → ordinal.' },

  { q: 'La clasificación de sismos según la escala de Mercalli (I al XII) en Perú es:',
    opts: ['Ordinal, porque los grados tienen orden pero las distancias no son iguales', 'De razón, porque hay un cero absoluto', 'Nominal, porque son categorías', 'Continua, porque puede tomar cualquier valor'],
    ans: 0, exp: 'La escala Mercalli clasifica la intensidad percibida con orden, pero el grado IV no es exactamente el doble del II → ordinal.' },

  { q: 'El nivel de urgencia de atención en emergencias hospitalarias de Guayaquil (prioridad 1, 2, 3, 4) es:',
    opts: ['Continua', 'Ordinal', 'Nominal', 'Discreta cuantitativa'],
    ans: 1, exp: 'Los niveles de urgencia tienen jerarquía (1 es más urgente que 4) pero no implican distancias iguales → ordinal.' },

  { q: 'La categoría de hotel asignada por MINCETUR en Perú (1 estrella, 2 estrellas, … 5 estrellas) es:',
    opts: ['Ordinal', 'Continua', 'Nominal', 'De intervalo'],
    ans: 0, exp: 'Las estrellas de hotel tienen orden (más estrellas = mayor categoría) pero la diferencia entre 1★ y 2★ no equivale a la de 4★ y 5★ → ordinal.' },

  // ── BLOQUE 3: Mediana en variables ordinales ──
  { q: 'Para datos ordinales con n impar, la mediana es:',
    opts: ['El valor en la posición (n+1)/2 cuando los datos están ordenados', 'El valor más frecuente', 'El promedio de los dos valores centrales', 'La suma de todos los valores dividida entre n'],
    ans: 0, exp: 'La mediana es el valor central al ordenar los datos; con n impar está en la posición (n+1)/2.' },

  { q: 'Para la distribución ordinal {bajo, bajo, medio, alto, alto, alto, muy alto}, la mediana es:',
    opts: ['Bajo', 'Alto', 'Medio', 'Muy alto'],
    ans: 1, exp: '7 datos; posición central = 4°. Ordenados: bajo, bajo, medio, alto, alto, alto, muy alto → mediana = alto.' },

  { q: '¿Por qué la mediana es preferible a la media en variables ordinales?',
    opts: ['La mediana no requiere distancias numéricas iguales entre categorías', 'La mediana solo aplica a datos pares', 'La mediana es siempre mayor que la media', 'La mediana requiere que los datos sean continuos'],
    ans: 0, exp: 'La mediana solo necesita ordenar los datos; la media requiere operaciones aritméticas que asumen distancias iguales.' },

  { q: 'En un grupo de 8 encuestados cuya satisfacción es: {3,4,2,5,3,4,4,5}, la mediana es:',
    opts: ['3.5', '3', '4', '4.5'],
    ans: 2, exp: 'Ordenados: 2,3,3,4,4,4,5,5. Con n=8 par, mediana = promedio de posiciones 4 y 5 = (4+4)/2 = 4.' },

  { q: 'La mediana en datos ordinales se interpreta como:',
    opts: ['El valor promedio de las categorías', 'La categoría más repetida', 'El valor más extremo', 'La categoría que divide la distribución en dos mitades iguales'],
    ans: 3, exp: 'La mediana es el punto medio de la distribución ordenada: el 50% de las observaciones están por debajo y el 50% por encima.' },

  // ── BLOQUE 4: Moda en ordinales ──
  { q: 'En la distribución ordinal {regular, bueno, excelente, bueno, regular, bueno}, la moda es:',
    opts: ['No hay moda', 'Regular', 'Excelente', 'Bueno'],
    ans: 3, exp: '"Bueno" aparece 3 veces, "regular" 2 veces, "excelente" 1 vez → moda = bueno.' },

  { q: '¿Cuándo es especialmente útil la moda en una variable ordinal?',
    opts: ['Cuando las categorías son igualmente frecuentes', 'Cuando los datos son simétricos', 'Cuando la mediana no puede calcularse', 'Cuando se quiere identificar la categoría más típica o común'],
    ans: 3, exp: 'La moda identifica la categoría más representativa o "típica" en una distribución ordinal.' },

  // ── BLOQUE 5: Rango intercuartil ──
  { q: 'El rango intercuartil (RIC o IQR) en variables ordinales se define como:',
    opts: ['La diferencia entre el valor máximo y mínimo', 'La mediana dividida entre 2', 'La suma de todos los cuartiles', 'Q3 − Q1, el rango del 50% central de los datos'],
    ans: 3, exp: 'IQR = Q3 − Q1, representa la amplitud del intervalo que contiene el 50% central de las observaciones.' },

  { q: 'Para una distribución ordinal con Q1 = "malo" y Q3 = "bueno", el IQR es:',
    opts: ['No puede calcularse numéricamente porque son categorías sin distancia numérica', '"Regular" (la categoría entre ellas)', '2 (diferencia de posiciones)', 'Igual a la mediana'],
    ans: 0, exp: 'El IQR en ordinales identifica los cuartiles como categorías, pero no se puede restar "malo" de "bueno" → no hay valor numérico exacto.' },

  { q: 'En variables ordinales, el IQR es útil porque:',
    opts: ['Describe la variabilidad del 50% central sin necesitar distancias numéricas', 'Coincide siempre con la desviación estándar', 'Requiere que los datos sean normales', 'Es más sensible a valores extremos que el rango'],
    ans: 0, exp: 'El IQR es una medida de dispersión robusta que solo requiere orden, adecuada para datos ordinales.' },

  // ── BLOQUE 6: Percentiles ──
  { q: 'El percentil 75 (P75 o Q3) en una distribución ordinal indica que:',
    opts: ['El 75% de los datos está por encima de ese valor', 'El 75% de los datos está por debajo o igual a ese valor', 'Ese valor es la mediana', 'La distribución es simétrica'],
    ans: 1, exp: 'El percentil Pk es el valor tal que el k% de las observaciones está por debajo o igual a él.' },

  { q: 'En una encuesta de satisfacción con escala {1=muy insatisfecho … 5=muy satisfecho} aplicada a 100 estudiantes de la UNMSM, el P25 = 3 significa:',
    opts: ['El 25% de los estudiantes está muy insatisfecho', '25 estudiantes eligieron la opción 3', 'El 25% de los estudiantes tiene satisfacción ≤ 3', 'La media es 3'],
    ans: 2, exp: 'P25 = 3 indica que el 25% de los estudiantes reportó una satisfacción de 3 o menos.' },

  { q: 'La diferencia entre Q3 y Q1 en percentiles ordinales describe:',
    opts: ['La asimetría de la distribución', 'El valor más frecuente', 'La media de la distribución', 'La dispersión del 50% central de los datos'],
    ans: 3, exp: 'Q3 − Q1 = IQR mide la dispersión del 50% central; es la medida de variabilidad preferida para datos ordinales.' },

  { q: '¿Puede calcularse la desviación estándar para datos ordinales?',
    opts: ['Solo si n > 30', 'Sí, siempre', 'Solo si la distribución es normal', 'No, porque requiere distancias numéricas iguales que la escala ordinal no garantiza'],
    ans: 3, exp: 'La desviación estándar requiere restar valores y elevarlos al cuadrado, operaciones que implican distancias iguales — no válidas en ordinal.' },

  // ── BLOQUE 7: Escala Likert ──
  { q: 'La escala Likert con opciones "totalmente en desacuerdo, en desacuerdo, neutral, de acuerdo, totalmente de acuerdo" es técnicamente:',
    opts: ['Nominal', 'De razón', 'Ordinal', 'Continua'],
    ans: 2, exp: 'La escala Likert tiene categorías ordenadas pero sin distancias iguales garantizadas → ordinal.' },

  { q: 'En la práctica de la investigación social en Ecuador, los puntajes Likert se promedian con frecuencia. Esto es:',
    opts: ['Estadísticamente riguroso porque la escala Likert es de intervalo', 'Una práctica cuestionable porque asume distancias iguales entre opciones, lo que no está garantizado en ordinal', 'Correcto solo si n > 100', 'Incorrecto únicamente si hay más de 5 opciones'],
    ans: 1, exp: 'Promediar puntuaciones Likert asume que la distancia entre cada par de opciones es igual, supuesto cuestionable en escala ordinal.' },

  { q: 'Una escala Likert de 7 puntos es:',
    opts: ['Siempre de intervalo', 'Continua porque tiene más puntos', 'Nominal porque tiene más opciones', 'Ordinal, con las mismas limitaciones de distancias desiguales pero más graduaciones'],
    ans: 3, exp: 'Más puntos en Likert aumentan la granularidad pero la escala sigue siendo ordinal; no garantiza distancias iguales.' },

  { q: 'En una encuesta de clima laboral en una empresa de Lima, la pregunta "Mi jefe me da retroalimentación constructiva" se responde en escala de 1 a 5. ¿Qué tipo de variable es la respuesta?',
    opts: ['Continua', 'Discreta cuantitativa', 'Ordinal (Likert)', 'Nominal'],
    ans: 2, exp: 'La respuesta en escala Likert tiene orden pero sin distancias iguales garantizadas → ordinal.' },

  { q: 'Cuando se suman ítems individuales de una escala Likert para crear un "puntaje total", el resultado se trata como:',
    opts: ['Nominal', 'Ordinal estricto', 'Cuasi-cuantitativo o de intervalo aproximado, asumiendo que la suma mejora la escala', 'Siempre de razón'],
    ans: 2, exp: 'El puntaje total de múltiples ítems Likert suele tratarse como cuasi-intervalo porque la suma "promedia" las imprecisiones ordinales.' },

  // ── BLOQUE 8: Comparación con nominal y de intervalo ──
  { q: '¿Cuál de las siguientes es la diferencia entre escala ordinal y escala de intervalo?',
    opts: ['No hay diferencia práctica', 'La ordinal es numérica; la de intervalo es cualitativa', 'La ordinal tiene cero absoluto; la de intervalo no', 'La de intervalo tiene distancias iguales y medibles entre valores; la ordinal solo tiene orden'],
    ans: 3, exp: 'La escala de intervalo (ej. temperatura en °C) tiene distancias iguales; la ordinal solo garantiza orden entre categorías.' },

  { q: 'La temperatura en la escala de Celsius es de intervalo y NO ordinal porque:',
    opts: ['No puede tener valores negativos', 'Sus valores tienen distancias iguales y significativas (10°C − 5°C = 5°C − 0°C)', 'Es siempre positiva', 'Tiene más categorías que una escala ordinal'],
    ans: 1, exp: 'En Celsius la distancia entre cualquier par de valores adyacentes es equivalente → escala de intervalo.' },

  { q: '¿En qué se parece la escala ordinal a la nominal?',
    opts: ['Ambas tienen distancias numéricas entre categorías', 'Ambas tienen cero absoluto', 'Ambas clasifican observaciones en grupos', 'Ambas permiten calcular la media'],
    ans: 2, exp: 'Tanto nominal como ordinal clasifican sujetos en grupos; la diferencia es que ordinal añade el orden.' },

  { q: 'Una variable de intervalo contiene más información que una variable ordinal porque:',
    opts: ['Sus diferencias numéricas son significativas e interpretables', 'Es más fácil de medir', 'Tiene más categorías', 'No requiere estadísticos no paramétricos'],
    ans: 0, exp: 'En escala de intervalo, los "gaps" entre valores son iguales y medibles, lo que permite operaciones aritméticas más ricas.' },

  // ── BLOQUE 9: Prueba de Mann-Whitney ──
  { q: 'La prueba de Mann-Whitney U se usa para:',
    opts: ['Comparar medias de dos grupos con datos normales', 'Comparar las distribuciones de dos grupos independientes con datos ordinales', 'Correlacionar dos variables continuas', 'Comparar varianzas de dos grupos'],
    ans: 1, exp: 'Mann-Whitney U es la alternativa no paramétrica a la prueba t para comparar dos grupos con variables ordinales o no normales.' },

  { q: 'La prueba de Mann-Whitney trabaja con:',
    opts: ['Las medias de cada grupo', 'Los residuales de un modelo de regresión', 'Los rangos de las observaciones combinadas de ambos grupos', 'Los valores originales de la variable'],
    ans: 2, exp: 'Mann-Whitney convierte los datos en rangos y compara la suma de rangos entre los grupos.' },

  { q: 'Si la prueba de Mann-Whitney da p = 0.02 y α = 0.05, se concluye:',
    opts: ['No hay diferencia significativa entre grupos', 'Hay diferencia significativa en las distribuciones de los dos grupos', 'Los grupos tienen la misma mediana', 'Se debe usar ANOVA'],
    ans: 1, exp: 'p = 0.02 < α = 0.05 → se rechaza H₀ → hay diferencia estadísticamente significativa entre los dos grupos.' },

  { q: 'La prueba de Mann-Whitney es equivalente no paramétrico de:',
    opts: ['ANOVA', 'La prueba t de Student para muestras independientes', 'La prueba F de Fisher', 'La prueba chi-cuadrado'],
    ans: 1, exp: 'Mann-Whitney es la alternativa no paramétrica a la prueba t para dos muestras independientes.' },

  { q: 'La hipótesis nula en la prueba de Mann-Whitney establece que:',
    opts: ['La correlación es cero', 'Las medias de ambos grupos son iguales', 'Las distribuciones de ambos grupos son idénticas (no hay desplazamiento sistemático)', 'Las varianzas son iguales'],
    ans: 2, exp: 'H₀ en Mann-Whitney: las dos poblaciones tienen la misma distribución (ningún grupo tiende a tener valores más altos).' },

  // ── BLOQUE 10: Prueba de Kruskal-Wallis ──
  { q: 'La prueba de Kruskal-Wallis se usa para comparar:',
    opts: ['Dos grupos con datos normales', 'Tres o más grupos independientes con variable ordinal o no normal', 'La correlación entre dos variables ordinales', 'Datos pareados en dos momentos'],
    ans: 1, exp: 'Kruskal-Wallis es la extensión de Mann-Whitney a k ≥ 3 grupos independientes; no requiere normalidad.' },

  { q: 'La prueba de Kruskal-Wallis es el equivalente no paramétrico de:',
    opts: ['La prueba t de Student', 'La correlación de Pearson', 'El ANOVA de un factor', 'La regresión lineal'],
    ans: 2, exp: 'Kruskal-Wallis generaliza Mann-Whitney a más de dos grupos, siendo la alternativa no paramétrica al ANOVA.' },

  { q: 'Si la prueba de Kruskal-Wallis es significativa (p < α), el siguiente paso es:',
    opts: ['Concluir que todos los grupos son diferentes entre sí', 'Calcular la media de cada grupo', 'Aplicar ANOVA paramétrico', 'Realizar comparaciones post-hoc por pares (ej. Dunn) para identificar qué grupos difieren'],
    ans: 3, exp: 'Una p significativa en Kruskal-Wallis solo indica que al menos un par de grupos difiere; las pruebas post-hoc (Dunn, etc.) identifican cuáles.' },

  { q: 'La prueba de Kruskal-Wallis trabaja con:',
    opts: ['Las frecuencias de cada categoría', 'Los rangos combinados de todas las observaciones', 'La varianza intragrupo', 'Las medias de cada grupo'],
    ans: 1, exp: 'Kruskal-Wallis asigna rangos a todas las observaciones combinadas y compara la suma de rangos entre grupos.' },

  // ── BLOQUE 11: Correlación de Spearman ──
  { q: 'El coeficiente de correlación de Spearman (rₛ) mide:',
    opts: ['La correlación lineal entre dos variables cuantitativas', 'La fuerza y dirección de la relación monotónica entre dos variables ordinales (o de rango)', 'La frecuencia de co-ocurrencia de dos categorías nominales', 'La diferencia de medias entre dos grupos'],
    ans: 1, exp: 'Spearman evalúa si cuando una variable ordinal sube, la otra tiende a subir (o bajar) de manera consistente.' },

  { q: 'rₛ = −0.75 indica:',
    opts: ['Correlación positiva fuerte', 'Sin correlación entre las variables', 'Correlación negativa fuerte; cuando una variable sube, la otra tiende a bajar', 'Correlación positiva débil'],
    ans: 2, exp: 'rₛ negativo indica correlación inversa; −0.75 es una correlación negativa de magnitud fuerte.' },

  { q: 'La correlación de Spearman se basa en:',
    opts: ['Las frecuencias de cada categoría', 'Los valores originales de las variables', 'Las medias de los grupos', 'Los rangos asignados a las observaciones de cada variable'],
    ans: 3, exp: 'Spearman convierte los datos en rangos y aplica la fórmula de correlación de Pearson a esos rangos.' },

  { q: 'La fórmula simplificada de rₛ incluye el término "d²" donde d es:',
    opts: ['La diferencia entre los rangos de cada par de observaciones', 'La desviación estándar de los rangos', 'El cuadrado del valor original', 'La frecuencia de cada categoría'],
    ans: 0, exp: 'En la fórmula de Spearman, dᵢ = diferencia entre el rango de la observación i en la variable X y su rango en la variable Y.' },

  { q: 'Un valor de rₛ = 0 indica:',
    opts: ['Que las variables son negativamente correlacionadas', 'Que no hay relación monotónica entre las dos variables ordinales', 'Que las variables son idénticas', 'Que la correlación es lineal perfecta'],
    ans: 1, exp: 'rₛ = 0 indica ausencia de relación monotónica; puede existir otro tipo de relación no monotónica.' },

  { q: 'Spearman es preferible a Pearson cuando:',
    opts: ['Los datos son normalmente distribuidos', 'Los datos son ordinales o presentan valores atípicos que distorsionan la relación lineal', 'La muestra es mayor de 1000', 'Las variables son nominales'],
    ans: 1, exp: 'Spearman es más robusto que Pearson ante datos ordinales o distribuciones no normales con valores extremos.' },

  // ── BLOQUE 12: Errores comunes ──
  { q: '¿Por qué es inadecuado calcular la media aritmética de las respuestas a la pregunta "¿Qué tan satisfecho está con el servicio? (1=nada, 5=totalmente)"?',
    opts: ['Porque la suma de las respuestas no tiene sentido', 'Porque la escala es ordinal y asumir distancias iguales entre puntos puede ser incorrecto', 'Porque la pregunta tiene solo 5 opciones', 'Porque los encuestados no pueden sumar'],
    ans: 1, exp: 'La escala 1-5 de satisfacción es ordinal; calcular la media asume que "2-1 = 3-2 = 4-3 = 5-4", lo cual no está garantizado.' },

  { q: 'Un error común en el análisis de encuestas ordinales es:',
    opts: ['Calcular la media y la desviación estándar ignorando la naturaleza ordinal de los datos', 'Usar la mediana como medida de tendencia central', 'Usar Mann-Whitney para comparar grupos', 'Usar tablas de frecuencia'],
    ans: 0, exp: 'Aplicar media y desviación estándar a datos ordinales asume distancias iguales entre categorías, supuesto no garantizado en ordinal.' },

  { q: 'Un investigador concluye que "el promedio de nivel de instrucción en la muestra es 2.3 (entre secundaria=2 y técnico=3)". ¿Qué error comete?',
    opts: ['Usa una muestra muy pequeña', 'No calcula la mediana', 'Trata una variable ordinal como cuantitativa, asumiendo que existe "2.3 niveles de instrucción"', 'Usa la moda incorrectamente'],
    ans: 2, exp: 'El nivel de instrucción es ordinal; un promedio de 2.3 implica interpolación entre categorías, lo que carece de significado.' },

  { q: 'Usar ANOVA para comparar grupos en una variable ordinal es cuestionable porque:',
    opts: ['ANOVA requiere muestras pareadas', 'ANOVA solo funciona con datos nominales', 'ANOVA no calcula la media correctamente', 'ANOVA asume normalidad y escala de intervalo; en ordinal estas condiciones rara vez se cumplen'],
    ans: 3, exp: 'ANOVA es paramétrico y requiere distribución normal y escala de intervalo; lo correcto para ordinales es Kruskal-Wallis.' },

  // ── BLOQUE 13: Ranking ──
  { q: 'Un "ranking" de universidades peruanas publicado por una revista es:',
    opts: ['Nominal, porque son nombres de universidades', 'Ordinal, porque establece un orden de posiciones sin que la distancia entre ellas sea fija', 'De intervalo, porque hay diferencias numéricas', 'De razón, porque hay un cero absoluto'],
    ans: 1, exp: 'El ranking posiciona universidades de mejor a peor, pero la diferencia entre el puesto 1 y 2 no equivale necesariamente a la de 5 y 6 → ordinal.' },

  { q: 'En una competencia de atletismo en los Juegos Panamericanos, el orden de llegada (1°, 2°, 3°…) es:',
    opts: ['Cuantitativo continuo', 'Nominal', 'Ordinal', 'De razón'],
    ans: 2, exp: 'El orden de llegada tiene jerarquía pero la diferencia de tiempo entre atletas no está capturada → ordinal.' },

  { q: 'Si se asignan rangos a los datos {15, 30, 22, 8, 30}, el rango de los valores empatados (30, 30) es:',
    opts: ['3 y 4 respectivamente', '4 y 5 respectivamente', '4.5 (promedio de rangos 4 y 5)', '5 para ambos'],
    ans: 2, exp: 'Cuando hay empates, se asigna el rango promedio: (4+5)/2 = 4.5 a cada uno de los dos valores iguales.' },

  { q: 'El "rango promedio" en pruebas no paramétricas ordinales se usa para:',
    opts: ['Convertir datos ordinales en nominales', 'Aumentar el poder estadístico de la prueba', 'Manejar empates al asignar rangos sin alterar la suma total', 'Calcular la media de los datos originales'],
    ans: 2, exp: 'El rango promedio garantiza que la suma de rangos se mantiene correcta cuando hay observaciones empatadas.' },

  // ── BLOQUE 14: Variables ordinales en encuestas ──
  { q: 'En una encuesta sobre calidad educativa aplicada en universidades de Trujillo, la pregunta "¿Cómo califica la infraestructura?" con opciones (muy mala, mala, regular, buena, muy buena) es:',
    opts: ['Ordinal, porque las opciones tienen un orden claro', 'Nominal, porque son categorías', 'Continua', 'Discreta cuantitativa'],
    ans: 0, exp: 'Muy mala < mala < regular < buena < muy buena → orden claro sin distancias iguales garantizadas → ordinal.' },

  { q: 'La variable "frecuencia de consumo de quinua" con opciones (nunca, a veces, frecuentemente, siempre) en una encuesta nutricional de Puno es:',
    opts: ['Nominal', 'Continua', 'Ordinal', 'De razón'],
    ans: 2, exp: 'Las opciones de frecuencia tienen un orden (nunca < a veces < frecuentemente < siempre) → ordinal.' },

  { q: 'En un cuestionario de salud mental aplicado en Guayaquil, la pregunta "¿Con qué frecuencia se siente ansioso?" (nunca, raramente, a veces, frecuentemente, siempre) genera una variable:',
    opts: ['Ordinal', 'Continua', 'Nominal dicotómica', 'Discreta cuantitativa'],
    ans: 0, exp: 'La frecuencia de ansiedad tiene orden entre categorías pero sin distancias numéricas exactas → ordinal.' },

  { q: 'Las preguntas de "escala de calificación" en encuestas de satisfacción de clientes peruanos (1 a 10) técnicamente generan una variable:',
    opts: ['Continua', 'Nominal, porque los números son etiquetas', 'De razón, porque empieza en 1', 'Ordinal, aunque con tantos puntos se trata a menudo como cuasi-intervalo'],
    ans: 3, exp: 'Escalas de 1-10 son ordinales; con muchos puntos algunos estadísticos las tratan como cuasi-intervalo, pero formalmente son ordinales.' },

  // ── BLOQUE 15: Datos agrupados ordinales ──
  { q: 'Cuando se agrupa una variable ordinal en clases más amplias (por ejemplo, bajo/medio/alto), se:',
    opts: ['Pierde información sobre el orden original', 'Gana información de orden', 'Convierte la variable en nominal', 'Pierde orden y se convierte en nominal automáticamente'],
    ans: 0, exp: 'Agrupar en clases más amplias reduce la granularidad del orden → se pierde información, aunque la variable sigue siendo ordinal.' },

  { q: 'En un estudio sobre nivel socioeconómico en Lima (A, B, C, D, E), si se agrupan B y C en "medio", la variable resultante:',
    opts: ['Se convierte en cuantitativa', 'Pierde su carácter estadístico', 'Pasa a ser nominal', 'Sigue siendo ordinal con menos categorías'],
    ans: 3, exp: 'La agrupación reduce categorías pero mantiene el orden (A > medio > D > E) → sigue siendo ordinal.' },

  { q: 'Una tabla de frecuencias acumuladas para datos ordinales es útil porque:',
    opts: ['Convierte los datos en continuos', 'Permite calcular la media', 'Elimina los valores extremos', 'Permite identificar percentiles y la mediana directamente'],
    ans: 3, exp: 'La frecuencia acumulada ordinal permite encontrar la mediana (50%), cuartiles (25%, 75%) y otros percentiles.' },

  // ── BLOQUE 16: Diferencias entre ordinal e intervalo ──
  { q: 'La principal limitación de la escala ordinal frente a la de intervalo es:',
    opts: ['No tiene cero absoluto', 'Las distancias entre categorías no son iguales ni medibles', 'No puede usarse en encuestas', 'No tiene categorías ordenadas'],
    ans: 1, exp: 'Sin distancias iguales no se pueden hacer operaciones como "diferencia entre grupos" de forma interpretable.' },

  { q: '¿Cuál de las siguientes medidas es válida en intervalo pero NO en ordinal?',
    opts: ['Rango intercuartil', 'Moda', 'Mediana', 'Media aritmética'],
    ans: 3, exp: 'La media aritmética requiere distancias numéricas iguales → válida en intervalo pero no en ordinal.' },

  { q: 'La temperatura en Kelvin es de escala de razón porque, a diferencia del ordinal:',
    opts: ['Tiene categorías ordenadas', 'Tiene un cero absoluto y distancias iguales', 'No tiene orden', 'Es siempre positiva'],
    ans: 1, exp: 'Kelvin tiene cero absoluto (0 K = ausencia de movimiento molecular) y distancias iguales → razón, no ordinal.' },

  { q: 'La escala ordinal es suficiente para:',
    opts: ['Calcular ratios entre valores', 'Calcular la desviación estándar', 'Determinar si un valor es mayor, menor o igual que otro', 'Determinar cuánto mayor es un valor que otro numéricamente'],
    ans: 2, exp: 'La escala ordinal permite establecer relaciones de mayor/menor pero no cuantificar cuánto mayor → suficiente para ordenar.' },

  { q: 'La diferencia entre el 1° y 2° puesto en un ranking NO equivale necesariamente a la diferencia entre el 2° y 3° porque:',
    opts: ['La escala ordinal no garantiza distancias iguales entre posiciones', 'Los jueces no son objetivos', 'Depende del número de participantes', 'Los rankings siempre tienen errores de medición'],
    ans: 0, exp: 'En escala ordinal las posiciones tienen orden pero las "distancias" entre ellas no son equivalentes.' },

  // ── BLOQUE 17: Pruebas adicionales para ordinales ──
  { q: 'La prueba de Wilcoxon de rangos con signo se usa para:',
    opts: ['Comparar dos mediciones dependientes (pareadas) con datos ordinales', 'Analizar tablas de contingencia', 'Comparar dos grupos independientes con datos ordinales', 'Correlacionar dos variables ordinales'],
    ans: 0, exp: 'La prueba de Wilcoxon es el equivalente no paramétrico de la prueba t pareada, para muestras relacionadas con datos ordinales.' },

  { q: 'La tau de Kendall (τ) es una medida de:',
    opts: ['La dispersión de una variable ordinal', 'La diferencia de medias entre grupos ordinales', 'La asociación entre dos variables nominales', 'La concordancia o correlación entre dos variables ordinales basada en pares concordantes y discordantes'],
    ans: 3, exp: 'La tau de Kendall mide la proporción de pares de observaciones que están en el mismo orden en ambas variables.' },

  { q: 'La prueba de Friedman es la extensión a varios grupos de:',
    opts: ['La correlación de Spearman', 'Kruskal-Wallis', 'La prueba de Wilcoxon para muestras relacionadas', 'Mann-Whitney para grupos independientes'],
    ans: 2, exp: 'Friedman analiza k ≥ 3 mediciones relacionadas (bloques) con datos ordinales; es equivalente al ANOVA de medidas repetidas no paramétrico.' },

  { q: 'La tau-b de Kendall se prefiere a la tau-a cuando:',
    opts: ['Existen empates en los datos', 'La muestra es pequeña', 'Solo hay dos grupos de comparación', 'Los datos tienen distribución normal'],
    ans: 0, exp: 'Tau-b corrige la fórmula de tau cuando hay empates, produciendo estimaciones más precisas de la asociación ordinal.' },

  // ── BLOQUE 18: Aplicaciones prácticas ──
  { q: 'Un psicólogo en Quito evalúa el nivel de depresión (leve, moderada, severa) de 50 pacientes. La prueba adecuada para comparar el nivel de depresión entre hombres y mujeres es:',
    opts: ['Prueba t de Student', 'ANOVA', 'Mann-Whitney U', 'Chi-cuadrado de independencia'],
    ans: 2, exp: 'Nivel de depresión es ordinal; dos grupos independientes → Mann-Whitney U.' },

  { q: 'Un docente de la UNI ordena a los 30 estudiantes de mayor a menor desempeño usando una rúbrica (insuficiente, regular, bueno, destacado). Desea saber si la distribución difiere por género. La prueba adecuada es:',
    opts: ['ANOVA', 'Regresión lineal', 'Correlación de Pearson', 'Mann-Whitney U'],
    ans: 3, exp: 'Variable ordinal (desempeño) y dos grupos independientes (género) → Mann-Whitney U.' },

  { q: 'Se compara la percepción de seguridad ciudadana (muy insegura, insegura, regular, segura, muy segura) entre tres ciudades del Ecuador. La prueba más adecuada es:',
    opts: ['ANOVA de un factor', 'Prueba t de Student', 'Kruskal-Wallis', 'Chi-cuadrado de bondad'],
    ans: 2, exp: 'Variable ordinal y tres grupos independientes → Kruskal-Wallis.' },

  { q: 'Se aplica una escala Likert de 5 puntos a 200 estudiantes universitarios de Lima antes y después de un curso. Para comparar la satisfacción pre y post, se usa:',
    opts: ['Prueba de Wilcoxon de rangos con signo', 'Prueba t pareada', 'ANOVA', 'Chi-cuadrado'],
    ans: 0, exp: 'Datos ordinales pareados (mismo grupo antes y después) → Prueba de Wilcoxon de rangos con signo.' },

  { q: 'Un nutricionista en Arequipa quiere saber si el nivel de adherencia a la dieta (nulo, bajo, medio, alto) se correlaciona con la percepción de salud (mala, regular, buena, excelente). La medida adecuada es:',
    opts: ['Correlación de Pearson', 'Coeficiente V de Cramér', 'Chi-cuadrado de independencia', 'Correlación de Spearman'],
    ans: 3, exp: 'Dos variables ordinales → correlación de Spearman (o tau de Kendall) para medir relación monotónica.' },

  // ── BLOQUE 19: Conceptos complementarios ──
  { q: 'Una variable ordinal con solo tres categorías (bajo, medio, alto) tiene una mediana que siempre será:',
    opts: ['Imposible de calcular en tres categorías', 'Una de las tres categorías, dependiendo de la distribución', 'Bajo', 'Alto'],
    ans: 1, exp: 'La mediana en una variable ordinal es siempre una de las categorías existentes; cuál depende de la distribución.' },

  { q: 'Si todos los valores de una variable ordinal son iguales, la mediana es:',
    opts: ['Imposible de calcular', 'Cero', 'El promedio de los valores', 'Ese mismo valor único'],
    ans: 3, exp: 'Si todos los datos son idénticos, el valor central también es ese mismo valor.' },

  { q: 'La moda y la mediana pueden coincidir en una variable ordinal cuando:',
    opts: ['La distribución es unimodal y simétrica', 'Los datos son uniformes', 'Hay muchas categorías', 'La muestra es muy pequeña'],
    ans: 0, exp: 'En una distribución unimodal y simétrica, la categoría central (mediana) es también la más frecuente (moda).' },

  { q: 'El nivel educativo de jefes de hogar en el censo peruano (sin instrucción, primaria, secundaria, superior no universitaria, superior universitaria, posgrado) es:',
    opts: ['Nominal, porque son categorías cualitativas', 'Continua', 'Ordinal, porque existe jerarquía de menor a mayor nivel educativo', 'Cuantitativa discreta'],
    ans: 2, exp: 'Los niveles educativos tienen una jerarquía clara (sin instrucción < primaria < … < posgrado) → ordinal.' },

  { q: 'La escala APGAR para evaluar la condición de un recién nacido (0-10) técnicamente es:',
    opts: ['De razón porque el 0 indica ausencia de respuesta y los intervalos son fijos', 'Ordinal porque los cambios entre puntajes no representan diferencias iguales en la condición clínica', 'Nominal, porque son categorías', 'Continua'],
    ans: 1, exp: 'Aunque la escala APGAR usa números, en la práctica los intervalos no son clínicamente equivalentes → ordinal.' },

  { q: 'La diferencia entre el percentil 90 y el percentil 10 en una distribución ordinal se llama:',
    opts: ['Desviación estándar', 'Rango intercuartil', 'Varianza', 'Rango interdecil'],
    ans: 3, exp: 'P90 − P10 = rango interdecil; mide la amplitud del 80% central de la distribución.' },

  { q: 'La prueba de Ji-cuadrado de independencia puede usarse con datos ordinales cuando:',
    opts: ['Se quiere usar toda la información del orden', 'Se trata la variable ordinal como nominal (categórica), perdiendo la información de orden', 'Los datos tienen distribución normal', 'La muestra tiene n > 1000'],
    ans: 1, exp: 'Chi-cuadrado puede aplicarse a ordinales tratándolas como nominales, pero se pierde la información de orden; mejor usar Mann-Whitney o Kruskal-Wallis.' },

  { q: 'La correlación de Spearman entre el ranking de calidad de vida y el ranking de ingreso per cápita de 20 ciudades ecuatorianas es rₛ = 0.82. Esto indica:',
    opts: ['La correlación no es significativa', 'El ingreso determina causalmente la calidad de vida', 'No hay relación entre calidad de vida e ingreso', 'Las ciudades con mayor ingreso tienden a tener mejor calidad de vida (relación positiva fuerte)'],
    ans: 3, exp: 'rₛ = 0.82 indica correlación positiva fuerte: ciudades con mayor ranking de ingreso tienden a tener mayor ranking de calidad de vida.' },

  { q: 'En una variable ordinal con categorías 1, 2, 3, 4, 5; la mediana de {1, 2, 2, 3, 4, 4, 4, 5} es:',
    opts: ['3.5', '4', '3', '2'],
    ans: 0, exp: 'Con n=8, la mediana es el promedio de los valores en las posiciones 4 y 5. Ordenados: 1,2,2,3,4,4,4,5 → (3+4)/2 = 3.5.' },

  { q: 'Si la mediana de una escala Likert de 1-5 en una encuesta es 4 (de acuerdo), ¿qué significa en términos descriptivos?',
    opts: ['Al menos el 50% de los encuestados seleccionó "de acuerdo" o una opción superior', 'El promedio de las respuestas es 4', 'La moda es 4', 'Todos respondieron "de acuerdo"'],
    ans: 0, exp: 'Mediana = 4 significa que el valor central de la distribución es 4, es decir, el 50% respondió 4 o más.' },
];
