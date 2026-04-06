const EXTRA_NOMINAL = [
  // ── BLOQUE 1: Definición y concepto ──
  { q: '¿Cuál es la característica principal de una escala nominal?',
    opts: ['Las categorías no tienen orden ni jerarquía', 'Las categorías tienen un orden definido', 'Existe un cero absoluto', 'Las diferencias entre categorías son iguales'],
    ans: 0, exp: 'En la escala nominal solo se distinguen categorías; no existe relación de mayor/menor entre ellas.' },

  { q: 'En estadística, "nominal" proviene del latín "nomen" que significa:',
    opts: ['Orden', 'Nombre', 'Número', 'Intervalo'],
    ans: 1, exp: 'Nominal viene de "nombre": las categorías son simplemente etiquetas o nombres sin valor numérico.' },

  { q: '¿Cuál de las siguientes afirmaciones sobre variables nominales es CORRECTA?',
    opts: ['Permiten calcular la media aritmética', 'Solo permiten calcular la moda', 'Permiten calcular el rango intercuartil', 'Sus categorías tienen distancias iguales'],
    ans: 1, exp: 'En variables nominales solo la moda tiene sentido estadístico; la media y el rango requieren orden o valores numéricos.' },

  { q: 'Asignar códigos 1 = Lima, 2 = Arequipa, 3 = Cusco a la variable "ciudad de nacimiento" implica que:',
    opts: ['Lima vale más que Arequipa estadísticamente', 'Los números son solo etiquetas sin valor cuantitativo', 'Se puede calcular la media de ciudades', 'La variable se convierte en continua'],
    ans: 1, exp: 'La codificación numérica de categorías nominales es solo por conveniencia; los números no representan cantidad ni orden.' },

  { q: '¿Cuántas operaciones aritméticas son válidas en la escala nominal?',
    opts: ['Todas (+, −, ×, ÷)', 'Solo suma', 'Ninguna; solo igualdad/desigualdad entre categorías', 'Solo multiplicación'],
    ans: 2, exp: 'En nominal solo podemos preguntar si dos observaciones pertenecen a la misma categoría (=) o a diferente (≠).' },

  { q: 'En un estudio sobre tipos de sangre (A, B, AB, O), el tipo de sangre es una variable:',
    opts: ['Discreta', 'Ordinal', 'Continua', 'Nominal'],
    ans: 3, exp: 'Los tipos de sangre son categorías sin orden ni distancia numérica — escala nominal.' },

  { q: '¿Qué significa que una variable nominal sea "exhaustiva"?',
    opts: ['Que tiene infinitas categorías', 'Que toda observación cabe en al menos una categoría', 'Que las categorías tienen orden', 'Que la variable es cuantitativa'],
    ans: 1, exp: 'Una clasificación nominal debe ser exhaustiva: ningún sujeto puede quedar sin categoría.' },

  { q: '¿Qué significa que las categorías nominales sean "mutuamente excluyentes"?',
    opts: ['Cada observación pertenece a una y solo una categoría', 'Las categorías tienen el mismo tamaño', 'Se pueden ordenar de menor a mayor', 'La variable tiene cero absoluto'],
    ans: 0, exp: 'Mutuamente excluyente significa que un individuo no puede estar en dos categorías al mismo tiempo.' },

  { q: 'El género (masculino, femenino, no binario) en una encuesta universitaria peruana es:',
    opts: ['Ordinal', 'Nominal', 'Discreta cuantitativa', 'Continua'],
    ans: 1, exp: 'Las categorías de género son etiquetas sin orden ni jerarquía → variable nominal.' },

  { q: 'El partido político por el que votó un ciudadano de Guayaquil es:',
    opts: ['Ordinal', 'Discreta', 'Nominal', 'Continua'],
    ans: 2, exp: 'Los partidos políticos son categorías sin relación de orden entre sí → nominal.' },

  // ── BLOQUE 2: Ejemplos con contexto Peru/Ecuador ──
  { q: '¿Cuál de las siguientes variables registradas en un hospital de Lima es nominal?',
    opts: ['Temperatura del paciente en °C', 'Diagnóstico médico (diabetes, hipertensión, etc.)', 'Número de días de hospitalización', 'Edad del paciente en años'],
    ans: 1, exp: 'El diagnóstico médico es una categoría sin orden numérico → nominal.' },

  { q: 'Un investigador en Quito clasifica los barrios de la ciudad por zona (norte, sur, centro, valles). Esta variable es:',
    opts: ['Continua', 'Discreta', 'Nominal', 'Ordinal'],
    ans: 2, exp: 'Las zonas de la ciudad son categorías geográficas sin orden jerárquico → nominal.' },

  { q: 'La lengua materna de un estudiante universitario de Huancayo (español, quechua, aimara, otro) es:',
    opts: ['Ordinal', 'Discreta', 'Continua', 'Nominal'],
    ans: 3, exp: 'Las lenguas son etiquetas sin orden ni distancia numérica → nominal.' },

  { q: 'En una encuesta a turistas que visitan Machu Picchu, el país de origen es una variable:',
    opts: ['Nominal', 'Ordinal', 'Discreta', 'Continua'],
    ans: 0, exp: 'El país de origen es una categoría sin jerarquía entre países → nominal.' },

  { q: 'El tipo de empresa (pública, privada, mixta, ONG) en un registro empresarial ecuatoriano es:',
    opts: ['Continua', 'Nominal', 'Ordinal', 'Discreta'],
    ans: 1, exp: 'Los tipos de empresa son categorías sin orden natural entre ellas → nominal.' },

  { q: 'Un banco de Lima clasifica a sus clientes por tipo de cuenta (ahorros, corriente, plazo fijo). Esta clasificación es:',
    opts: ['Ordinal porque hay diferencias entre cuentas', 'Nominal porque son categorías sin jerarquía', 'Discreta porque el dinero se cuenta', 'Continua porque el saldo varía'],
    ans: 1, exp: 'Tipo de cuenta es una categoría nominal: no hay orden inherente entre ahorros, corriente y plazo fijo.' },

  { q: 'La marca de celular que usa un estudiante de la PUCP (Samsung, Apple, Xiaomi, otro) es:',
    opts: ['Discreta', 'Ordinal', 'Nominal', 'Continua'],
    ans: 2, exp: 'Las marcas son etiquetas sin valor ni orden → nominal.' },

  { q: 'El tipo de vivienda (casa, departamento, cuarto alquilado, otro) en el censo peruano 2017 es:',
    opts: ['Ordinal', 'Continua', 'Discreta', 'Nominal'],
    ans: 3, exp: 'Los tipos de vivienda son categorías sin orden jerárquico → nominal.' },

  { q: 'La religión que practica un poblador de Iquitos es una variable:',
    opts: ['Nominal', 'Ordinal', 'Continua', 'Discreta'],
    ans: 0, exp: 'Las religiones son categorías sin orden numérico ni jerarquía inherente → nominal.' },

  { q: 'El color de la flor de la papa nativa cultivada en Puno se clasifica como variable:',
    opts: ['Continua', 'Discreta', 'Ordinal', 'Nominal'],
    ans: 3, exp: 'El color es una característica categórica sin orden → nominal.' },

  // ── BLOQUE 3: Moda en nominal ──
  { q: 'En una encuesta sobre deporte favorito: fútbol (30), vóley (18), básquet (22), natación (10). La moda es:',
    opts: ['Fútbol', 'Básquet', 'Vóley', 'Natación'],
    ans: 0, exp: 'La moda es la categoría más frecuente: fútbol con 30 menciones.' },

  { q: '¿Por qué la moda es la única medida de tendencia central válida en variables nominales?',
    opts: ['Porque es la más fácil de calcular', 'Porque no requiere orden ni operaciones aritméticas entre categorías', 'Porque siempre existe y es única', 'Porque coincide con la mediana'],
    ans: 1, exp: 'La moda solo requiere contar frecuencias; no necesita orden ni suma — operaciones imposibles en nominal.' },

  { q: 'Si en un registro de 100 pacientes, 40 tienen tipo de sangre O, 30 tipo A, 20 tipo B y 10 tipo AB, la moda es:',
    opts: ['Tipo A', 'Tipo O', 'Tipo B', 'Tipo AB'],
    ans: 1, exp: 'La categoría más frecuente (40 casos) es el tipo de sangre O → moda = O.' },

  { q: 'Distribución nominal: {rojo:15, azul:15, verde:10}. ¿Cuántas modas tiene?',
    opts: ['Ninguna', 'Una (rojo)', 'Dos (rojo y azul)', 'Tres (todas)'],
    ans: 2, exp: 'Rojo y azul tienen la misma frecuencia máxima (15) → distribución bimodal.' },

  { q: 'En variables nominales, ¿puede ocurrir que no haya moda?',
    opts: ['Nunca, siempre existe moda', 'Sí, si todas las categorías tienen la misma frecuencia', 'Solo si hay más de 10 categorías', 'Solo con datos continuos'],
    ans: 1, exp: 'Si todas las categorías son igualmente frecuentes, algunos estadísticos consideran que no hay moda.' },

  // ── BLOQUE 4: Frecuencias y tablas ──
  { q: 'En una tabla de frecuencias nominales, la suma de todas las frecuencias relativas debe ser:',
    opts: ['Igual al número de categorías', '0', '1 (o 100%)', 'La frecuencia de la moda'],
    ans: 2, exp: 'Las frecuencias relativas son proporciones del total; su suma siempre es 1 (o 100%).' },

  { q: 'De 200 encuestados en Guayaquil, 80 prefieren ceviche, 70 seco de pollo y 50 llapingachos. La frecuencia relativa del ceviche es:',
    opts: ['0.40', '0.35', '0.25', '0.80'],
    ans: 0, exp: 'Frecuencia relativa = 80/200 = 0.40.' },

  { q: '¿Qué información adicional aporta la frecuencia acumulada en una tabla nominal?',
    opts: ['Indica el orden de las categorías', 'Muy poca, porque las categorías no tienen orden natural', 'Permite calcular la mediana', 'Indica la variabilidad'],
    ans: 1, exp: 'La frecuencia acumulada tiene poco sentido en nominal ya que las categorías no tienen orden obligatorio.' },

  { q: 'En una tabla de distribución nominal, la columna "porcentaje" se obtiene multiplicando la frecuencia relativa por:',
    opts: ['100', '10', 'El número de categorías', 'La moda'],
    ans: 0, exp: 'Porcentaje = frecuencia relativa × 100.' },

  { q: 'Un investigador registró el idioma extranjero que estudian 150 universitarios: inglés (90), francés (35), portugués (25). ¿Cuál es el porcentaje de estudiantes de inglés?',
    opts: ['50%', '60%', '45%', '75%'],
    ans: 1, exp: '90/150 × 100 = 60%.' },

  // ── BLOQUE 5: Gráficos ──
  { q: '¿Por qué NO se usa un histograma para representar una variable nominal?',
    opts: ['Porque el histograma requiere datos ordenados en intervalos continuos', 'Porque el histograma solo sirve para datos ordinales', 'Porque es demasiado complejo', 'Porque no muestra frecuencias'],
    ans: 0, exp: 'El histograma representa distribuciones de variables continuas con intervalos; en nominal las barras no deben tocar.' },

  { q: '¿Cuál es la diferencia visual clave entre un gráfico de barras para nominal y un histograma?',
    opts: ['En el de barras las barras están separadas; en el histograma están juntas', 'No hay diferencia', 'El histograma usa colores y el de barras no', 'El de barras usa el eje Y para categorías'],
    ans: 0, exp: 'Las barras separadas en el gráfico nominal reflejan que las categorías son discretas e independientes.' },

  { q: 'Para mostrar la distribución de marcas de cerveza consumidas en una fiesta universitaria de Lima, ¿qué gráfico es más apropiado?',
    opts: ['Histograma', 'Box plot', 'Diagrama de barras', 'Polígono de frecuencias'],
    ans: 2, exp: 'Las marcas son categorías nominales; el diagrama de barras es el gráfico estándar para este tipo de datos.' },

  { q: 'El gráfico de pastel NO es recomendable cuando:',
    opts: ['Hay menos de 5 categorías', 'Hay muchas categorías con proporciones similares y pequeñas', 'Se quiere mostrar el total', 'Se trabaja con porcentajes'],
    ans: 1, exp: 'Con muchas categorías similares el pastel se fragmenta y es difícil de leer; mejor usar barras.' },

  { q: 'En un diagrama de barras para variable nominal, el eje horizontal (X) representa:',
    opts: ['Las frecuencias', 'Los intervalos de clase', 'Las categorías de la variable', 'El rango'],
    ans: 2, exp: 'En el eje X se colocan las categorías nominales; en el eje Y las frecuencias o porcentajes.' },

  { q: '¿En qué tipo de gráfico la altura de cada barra es proporcional a la frecuencia de la categoría?',
    opts: ['Gráfico de líneas', 'Diagrama de dispersión', 'Diagrama de barras', 'Diagrama de caja'],
    ans: 2, exp: 'En el diagrama de barras la altura representa la frecuencia (o porcentaje) de cada categoría.' },

  { q: 'Un gráfico de barras apiladas al 100% es útil para variables nominales cuando se desea:',
    opts: ['Comparar distribuciones de proporciones entre subgrupos', 'Mostrar datos continuos', 'Calcular la media', 'Representar la correlación'],
    ans: 0, exp: 'Las barras apiladas al 100% permiten comparar la composición relativa de categorías entre grupos.' },

  // ── BLOQUE 6: Chi-cuadrado bondad de ajuste ──
  { q: 'La prueba chi-cuadrado de bondad de ajuste (goodness-of-fit) se usa para:',
    opts: ['Comparar la media de dos grupos', 'Verificar si una distribución observada se ajusta a una distribución esperada', 'Calcular la correlación entre dos variables', 'Determinar la mediana de una variable ordinal'],
    ans: 1, exp: 'La prueba χ² de bondad de ajuste contrasta frecuencias observadas vs. esperadas bajo un modelo teórico.' },

  { q: 'En la prueba χ² de bondad de ajuste, si la hipótesis nula es verdadera, se espera que χ² calculado sea:',
    opts: ['Muy grande', 'Igual a n', 'Cercano a cero', 'Mayor que el valor crítico'],
    ans: 2, exp: 'Si las frecuencias observadas se acercan a las esperadas, χ² ≈ 0; un χ² grande indica discrepancia.' },

  { q: 'En la prueba χ² de bondad de ajuste con k categorías, los grados de libertad son:',
    opts: ['k', 'k + 1', 'k − 1', 'n − 1'],
    ans: 2, exp: 'Los grados de libertad = k − 1, donde k es el número de categorías.' },

  { q: 'Un requisito importante para aplicar χ² de bondad de ajuste es que la frecuencia esperada de cada celda sea:',
    opts: ['Al menos 5', 'Al menos 1', 'Al menos 10', 'Al menos 30'],
    ans: 0, exp: 'La regla general es que cada frecuencia esperada sea ≥ 5 para que la aproximación chi-cuadrado sea válida.' },

  { q: 'La fórmula del estadístico chi-cuadrado es χ² = Σ[(Oᵢ − Eᵢ)² / Eᵢ]. ¿Qué representa Oᵢ?',
    opts: ['Frecuencia esperada en la categoría i', 'Frecuencia observada en la categoría i', 'Número de categorías', 'Grados de libertad'],
    ans: 1, exp: 'Oᵢ = frecuencia observada (contada en los datos); Eᵢ = frecuencia esperada bajo H₀.' },

  { q: 'Se lanza un dado 120 veces y se obtiene: {1:18, 2:22, 3:19, 4:21, 5:20, 6:20}. Si el dado es justo, la frecuencia esperada para cada cara es:',
    opts: ['18', '22', '20', '21'],
    ans: 2, exp: '120 lanzamientos / 6 caras = 20 por cara si el dado es equilibrado.' },

  { q: 'En una prueba χ² con p-valor = 0.03 y α = 0.05, la decisión es:',
    opts: ['No rechazar H₀', 'Rechazar H₀', 'Aumentar los grados de libertad', 'Usar otra prueba'],
    ans: 1, exp: 'p = 0.03 < α = 0.05 → se rechaza H₀; la distribución observada difiere de la esperada.' },

  { q: '¿Qué hipótesis nula plantea la prueba χ² de bondad de ajuste?',
    opts: ['Las variables son independientes', 'La distribución observada sigue la distribución teórica propuesta', 'La media es igual a cero', 'Las varianzas son iguales'],
    ans: 1, exp: 'H₀ en goodness-of-fit: los datos siguen la distribución teórica especificada.' },

  // ── BLOQUE 7: Variables cualitativas vs cuantitativas ──
  { q: '¿En qué se diferencia una variable cualitativa nominal de una variable cuantitativa?',
    opts: ['La nominal tiene categorías sin valor numérico; la cuantitativa tiene valores numéricos con significado matemático', 'La nominal siempre tiene más categorías', 'La cuantitativa no puede graficarse', 'No hay diferencia práctica'],
    ans: 0, exp: 'Las variables cualitativas nominales clasifican sin medir; las cuantitativas miden con números que admiten operaciones.' },

  { q: '¿Cuál de las siguientes es una variable CUANTITATIVA y NO nominal?',
    opts: ['Nombre del distrito', 'Tipo de contrato laboral', 'Salario mensual en soles', 'Etnia del encuestado'],
    ans: 2, exp: 'El salario mensual es un valor numérico continuo; las demás son categorías sin valor numérico.' },

  { q: 'Un estudiante afirma: "la variable \'número de habitaciones de una vivienda\' es nominal porque no tiene orden". ¿Es correcto?',
    opts: ['Sí, cualquier variable sin orden es nominal', 'No, es una variable cuantitativa discreta; los números sí tienen significado matemático', 'Sí, si los valores son pequeños', 'No, es continua'],
    ans: 1, exp: 'El número de habitaciones es cuantitativa discreta: admite operaciones aritméticas. Nominal aplica a categorías cualitativas.' },

  { q: '¿Cuál es la escala de medición más baja en la jerarquía de Stevens (1946)?',
    opts: ['Ordinal', 'Intervalo', 'Razón', 'Nominal'],
    ans: 3, exp: 'Stevens propuso 4 escalas (nominal, ordinal, intervalo, razón) en orden ascendente de información; nominal es la más básica.' },

  { q: 'Una variable nominal puede convertirse en cuantitativa si:',
    opts: ['Se le asignan números a las categorías', 'Se cuenta la frecuencia de cada categoría', 'Solo si tiene exactamente dos categorías', 'Nunca; las escalas son fijas'],
    ans: 1, exp: 'Al contar cuántas veces aparece cada categoría, obtenemos una variable cuantitativa (frecuencia). Los códigos numéricos solos no la hacen cuantitativa.' },

  // ── BLOQUE 8: Errores comunes ──
  { q: 'Un analista calcula la "media" de los códigos 1=mestizo, 2=indígena, 3=afroperuano obteniendo 1.8. Este resultado:',
    opts: ['Es válido y representa la etnia promedio', 'No tiene sentido; los códigos son nominales, no cuantitativos', 'Es válido si la muestra es grande', 'Representa la etnia más común'],
    ans: 1, exp: 'Los códigos numéricos de categorías nominales son etiquetas. "1.8 etnias" no tiene significado estadístico.' },

  { q: '¿Cuál es el error estadístico en la afirmación: "el promedio de los tipos de sangre de los pacientes es 1.4"?',
    opts: ['El error es usar la moda en vez de la media', 'El tipo de sangre es nominal; calcular la media de sus códigos carece de significado', 'Debería ser 1.5 para ser correcto', 'No hay error si se usan códigos numéricos'],
    ans: 1, exp: 'Los tipos de sangre son categorías nominales; aunque se codifiquen con números, su "media" no es interpretable.' },

  { q: 'Para comparar si dos categorías nominales son "más" o "menos" que otra, ¿qué se puede concluir?',
    opts: ['Que una categoría es superior a otra', 'Nada; en nominal no hay relación de orden', 'Que la primera es el doble de la segunda', 'Que existe correlación entre ellas'],
    ans: 1, exp: 'La escala nominal no admite relaciones de orden; solo se puede afirmar igualdad o diferencia entre categorías.' },

  { q: 'Un estudiante ordena las carreras universitarias de "mayor a menor importancia" usando sus códigos (1, 2, 3…). ¿Qué error comete?',
    opts: ['Usa la escala nominal como si fuera ordinal o cuantitativa', 'Usa demasiadas categorías', 'Calcula mal la frecuencia', 'No comete ningún error'],
    ans: 0, exp: 'Ordenar categorías nominales por su código numérico asigna falsamente un orden que no existe en la variable.' },

  // ── BLOQUE 9: Codificación numérica ──
  { q: 'En un formulario digital de la SUNAT, "régimen tributario" se codifica: 1=RUS, 2=RER, 3=General. Esta codificación:',
    opts: ['Convierte la variable en cuantitativa discreta', 'Es solo para facilitar el ingreso de datos; la variable sigue siendo nominal', 'Permite calcular la media del régimen tributario', 'Establece que el Régimen General es 3 veces el RUS'],
    ans: 1, exp: 'La codificación numérica es operativa/computacional; no altera la naturaleza nominal de la variable.' },

  { q: 'Al codificar regiones del Perú con números (1=Costa, 2=Sierra, 3=Selva), ¿se puede afirmar que Sierra (2) está entre Costa y Selva en algún sentido numérico?',
    opts: ['Sí, 2 está entre 1 y 3', 'No, los códigos son arbitrarios; no representan distancias reales', 'Solo si las regiones tienen igual tamaño', 'Solo si el investigador lo decide'],
    ans: 1, exp: 'Los códigos numéricos son asignaciones arbitrarias; 2 no significa que Sierra esté "entre" Costa y Selva.' },

  { q: 'Una variable dicotómica codificada como 0/1 (por ejemplo, tiene seguro de salud: No=0, Sí=1) puede tratarse como:',
    opts: ['Únicamente nominal', 'Nominal o, en ciertos análisis, cuantitativa dummy', 'Siempre cuantitativa continua', 'Siempre ordinal'],
    ans: 1, exp: 'Las variables dummy 0/1 son nominales dicotómicas pero en regresión lineal se tratan como cuantitativas por convención.' },

  { q: 'El proceso de crear variables dummy (0/1) a partir de una variable nominal con k categorías requiere:',
    opts: ['k variables dummy', 'k − 1 variables dummy', '2k variables dummy', '1 sola variable dummy'],
    ans: 1, exp: 'Para evitar multicolinealidad perfecta, se crean k − 1 variables dummy (una categoría es la referencia).' },

  // ── BLOQUE 10: Variables dicotómicas ──
  { q: 'Una variable nominal con exactamente dos categorías se llama:',
    opts: ['Policotómica', 'Continua', 'Dicotómica', 'Ordinal'],
    ans: 2, exp: 'Dicotómica = dos categorías (ej. sí/no, éxito/fracaso, hombre/mujer).' },

  { q: 'El resultado de un examen médico (positivo / negativo) es una variable:',
    opts: ['Ordinal', 'Dicotómica nominal', 'Cuantitativa continua', 'Cuantitativa discreta'],
    ans: 1, exp: 'Dos categorías sin orden intrínseco → nominal dicotómica.' },

  { q: 'La variable "¿posee smartphone? (sí/no)" aplicada en una encuesta rural ecuatoriana es:',
    opts: ['Continua', 'Dicotómica nominal', 'Ordinal', 'Discreta cuantitativa'],
    ans: 1, exp: 'Sí/No son dos categorías sin orden ni valor numérico → dicotómica nominal.' },

  { q: '¿Cuál es un ejemplo de variable policotómica nominal?',
    opts: ['Aprobado / Reprobado', 'Temperatura en Celsius', 'Región natural de nacimiento (Costa, Sierra, Selva, Amazonía)', 'Número de cursos aprobados'],
    ans: 2, exp: 'Una variable policotómica tiene más de dos categorías sin orden → región natural con 4 categorías.' },

  // ── BLOQUE 11: Variables policotómicas ──
  { q: 'La variable "especialidad médica" (cardiología, pediatría, neurología, oncología…) es un ejemplo de:',
    opts: ['Variable ordinal', 'Variable cuantitativa discreta', 'Variable nominal policotómica', 'Variable continua'],
    ans: 2, exp: 'Varias especialidades sin jerarquía entre ellas → nominal policotómica.' },

  { q: 'Si una variable nominal tiene 8 categorías, se llama:',
    opts: ['Dicotómica', 'Tricotómica', 'Policotómica', 'Continua'],
    ans: 2, exp: 'Más de dos categorías → policotómica (sin importar cuántas sean).' },

  { q: 'Al aumentar el número de categorías en una variable nominal policotómica, el gráfico de pastel:',
    opts: ['Se vuelve más fácil de interpretar', 'Se complica; se prefiere un gráfico de barras', 'No cambia de utilidad', 'Se convierte en histograma'],
    ans: 1, exp: 'Con muchas categorías, el pastel tiene demasiados sectores pequeños; las barras son más legibles.' },

  // ── BLOQUE 12: Prueba chi-cuadrado de independencia ──
  { q: 'La prueba chi-cuadrado de independencia se aplica cuando se quiere determinar si:',
    opts: ['Dos variables nominales están asociadas', 'La media de dos grupos es igual', 'Una variable tiene distribución normal', 'La varianza de dos grupos es igual'],
    ans: 0, exp: 'La prueba χ² de independencia analiza si dos variables categóricas (nominales u ordinales) están asociadas.' },

  { q: 'En una tabla de contingencia 3×4, los grados de libertad para la prueba χ² de independencia son:',
    opts: ['6', '8', '12', '11'],
    ans: 0, exp: 'gl = (filas−1) × (columnas−1) = (3−1) × (4−1) = 2 × 3 = 6.' },

  { q: 'En una tabla de contingencia, la frecuencia esperada de la celda (i, j) se calcula como:',
    opts: ['(fila i total × columna j total) / n total', '(fila i total + columna j total) / n total', 'fila i total × columna j total', '(n total)² / (fila i × columna j)'],
    ans: 0, exp: 'Eᵢⱼ = (total fila i × total columna j) / n; bajo H₀ de independencia.' },

  { q: 'Si χ² calculado es menor que χ² crítico, la decisión es:',
    opts: ['Rechazar H₀ de independencia', 'No rechazar H₀; no hay evidencia de asociación', 'Las variables son dependientes', 'Aumentar el tamaño muestral'],
    ans: 1, exp: 'χ² < χ² crítico → no se rechaza H₀ → no hay evidencia estadística de asociación entre las variables.' },

  { q: 'Se investiga si el tipo de colegio (público/privado) está asociado con la carrera elegida en universidades de Lima. La prueba adecuada es:',
    opts: ['ANOVA', 'Prueba t', 'Chi-cuadrado de independencia', 'Correlación de Pearson'],
    ans: 2, exp: 'Dos variables nominales (tipo de colegio y carrera) → chi-cuadrado de independencia.' },

  // ── BLOQUE 13: Proporciones y porcentajes ──
  { q: 'La proporción de estudiantes zurdos en una universidad de Trujillo es 0.12. ¿Qué porcentaje son zurdos?',
    opts: ['1.2%', '12%', '0.12%', '120%'],
    ans: 1, exp: 'Porcentaje = proporción × 100 = 0.12 × 100 = 12%.' },

  { q: 'De 500 familias encuestadas en Arequipa, 175 tienen mascotas. El porcentaje de familias con mascotas es:',
    opts: ['30%', '35%', '25%', '40%'],
    ans: 1, exp: '175/500 × 100 = 35%.' },

  { q: 'Si el 40% de los encuestados prefiere la chicha morada, ¿cuántos son de una muestra de 250?',
    opts: ['80', '100', '60', '120'],
    ans: 1, exp: '40% × 250 = 0.40 × 250 = 100 encuestados.' },

  { q: 'La diferencia entre proporción y porcentaje es:',
    opts: ['El porcentaje es la proporción dividida entre 100', 'El porcentaje es la proporción multiplicada por 100', 'Son exactamente lo mismo', 'La proporción siempre es mayor'],
    ans: 1, exp: 'Porcentaje = proporción × 100; por ejemplo, proporción 0.25 = 25%.' },

  { q: 'En un gráfico de pastel, cada sector cubre un ángulo proporcional a la frecuencia relativa. Si una categoría tiene 25%, su ángulo es:',
    opts: ['25°', '45°', '90°', '72°'],
    ans: 2, exp: '360° × 0.25 = 90°.' },

  // ── BLOQUE 14: Escala nominal vs otras escalas ──
  { q: '¿Cuál de las siguientes variables es de escala de RAZÓN y no nominal?',
    opts: ['Sexo', 'Color de piel', 'Peso en kilogramos', 'Partido político'],
    ans: 2, exp: 'El peso en kg tiene cero absoluto y admite todas las operaciones aritméticas → escala de razón.' },

  { q: '¿Cuál es la diferencia entre escala nominal y escala de intervalo?',
    opts: ['La de intervalo tiene categorías ordenadas con distancias iguales; la nominal no tiene orden ni distancias', 'Solo el nombre', 'La nominal es más precisa', 'La de intervalo solo aplica a datos cualitativos'],
    ans: 0, exp: 'La escala de intervalo (ej. temperatura en °C) tiene distancias iguales entre valores; la nominal carece de orden y distancias.' },

  { q: 'La temperatura en Celsius (0°C, 10°C, 20°C…) pertenece a la escala de:',
    opts: ['Nominal', 'Ordinal', 'Intervalo', 'Razón'],
    ans: 2, exp: 'Celsius tiene distancias iguales entre grados pero no tiene cero absoluto → escala de intervalo.' },

  { q: 'Si un investigador tiene datos nominales y desea compararlos con datos de razón, ¿qué debe tener en cuenta?',
    opts: ['Pueden analizarse con las mismas técnicas sin problema', 'Las técnicas estadísticas deben adecuarse a cada escala; no son intercambiables', 'Los datos nominales deben convertirse en cuantitativos primero', 'No es posible compararlos en ningún caso'],
    ans: 1, exp: 'Cada escala de medición tiene sus propias técnicas; mezclarlas sin cuidado lleva a conclusiones erróneas.' },

  { q: 'La escala nominal tiene menor "cantidad de información" que las demás escalas porque:',
    opts: ['Solo permite clasificar, sin ordenar ni medir distancias ni ratios', 'Sus categorías son más difíciles de entender', 'Siempre tiene pocas categorías', 'Sus datos no pueden graficarse'],
    ans: 0, exp: 'La escala nominal solo permite clasificar (igual/diferente); no transmite información sobre magnitud u orden.' },

  // ── BLOQUE 15: Pruebas no paramétricas ──
  { q: '¿Por qué se usan pruebas no paramétricas para variables nominales?',
    opts: ['Porque las pruebas paramétricas son más fáciles', 'Porque las pruebas paramétricas requieren supuestos (normalidad, escala de intervalo/razón) que los datos nominales no cumplen', 'Porque las nominales siempre tienen muchas categorías', 'Porque las pruebas paramétricas no existen para categorías'],
    ans: 1, exp: 'Las pruebas paramétricas como la t o ANOVA requieren datos numéricos con distribución normal; los nominales no los tienen.' },

  { q: 'La prueba de McNemar se aplica a variables nominales dicotómicas cuando los datos son:',
    opts: ['Independientes en dos grupos', 'Pareados o dependientes (antes-después)', 'Más de dos categorías', 'De escala ordinal'],
    ans: 1, exp: 'McNemar compara proporciones en muestras relacionadas (diseño antes-después con variable dicotómica).' },

  { q: 'La V de Cramér mide:',
    opts: ['La correlación de Pearson entre nominales', 'La fuerza de asociación entre dos variables nominales (basada en χ²)', 'La mediana de una variable nominal', 'La varianza de las frecuencias'],
    ans: 1, exp: 'V de Cramér = √(χ²/[n·(min(k,r)−1)]) es una medida estandarizada de asociación para tablas de contingencia.' },

  { q: 'El coeficiente de contingencia C se usa para medir la asociación entre:',
    opts: ['Dos variables cuantitativas', 'Una variable nominal y una ordinal', 'Dos variables nominales', 'Dos variables de razón'],
    ans: 2, exp: 'El coeficiente de contingencia C (basado en χ²) mide la asociación entre dos variables categóricas nominales.' },

  { q: 'La prueba de razón de verosimilitud G² (G-test) es una alternativa a:',
    opts: ['La prueba t', 'El ANOVA de un factor', 'La prueba chi-cuadrado para tablas de contingencia', 'La correlación de Spearman'],
    ans: 2, exp: 'G² o likelihood ratio test es alternativa a χ² para analizar tablas de contingencia con variables nominales.' },

  // ── BLOQUE 16: Aplicaciones prácticas ──
  { q: 'En un estudio de mercado en Miraflores, Lima, se pregunta "¿Cuál es tu canal de compra favorito?" (tienda física, app, web, redes sociales). ¿Qué estadístico resume mejor la preferencia dominante?',
    opts: ['La media de los códigos', 'La moda', 'El rango', 'La desviación estándar'],
    ans: 1, exp: 'La moda identifica el canal más elegido; no tiene sentido calcular media o rango en una variable nominal.' },

  { q: 'Un epidemiólogo en Quito registra el tipo de parasitosis (Giardia, Ascaris, Taenia, otro) en 300 pacientes. ¿Cuál es la escala de medición?',
    opts: ['Ordinal', 'Discreta', 'Nominal', 'Continua'],
    ans: 2, exp: 'Los tipos de parásitos son categorías sin orden jerárquico → nominal.' },

  { q: 'Un sociólogo en Cusco registra el tipo de familia (nuclear, extensa, monoparental, reconstituida). Para visualizar la distribución más frecuente, usaría:',
    opts: ['Histograma de frecuencias', 'Polígono de frecuencias acumuladas', 'Diagrama de barras o pastel', 'Diagrama de caja y bigotes'],
    ans: 2, exp: 'Para tipos de familia (variable nominal), el diagrama de barras o pastel es el gráfico apropiado.' },

  { q: 'En una base de datos del INEI, la variable "departamento de residencia" está codificada del 01 al 25. Al calcular la "media" de esta variable se obtiene 13. ¿Qué significa este valor?',
    opts: ['El departamento número 13 es el más representativo', 'Nada; la media no es interpretable en una variable nominal codificada', 'El 50% de la población vive en departamentos con código ≤ 13', 'Es la mediana de los departamentos'],
    ans: 1, exp: 'Los códigos de departamentos son nominales; la media de 13 no tiene significado estadístico.' },

  { q: 'Se desea saber si la preferencia por marcas de quinua envasada difiere entre regiones del Perú. La prueba estadística adecuada es:',
    opts: ['Correlación de Pearson', 'Chi-cuadrado de independencia', 'ANOVA de dos factores', 'Prueba t de dos muestras'],
    ans: 1, exp: 'Marca de quinua (nominal) vs región (nominal) → chi-cuadrado de independencia.' },

  // ── BLOQUE 17: Conceptos adicionales ──
  { q: 'Una escala nominal satisface la propiedad de:',
    opts: ['Orden entre categorías', 'Distancias iguales entre categorías', 'Identidad (categorías distintas son distinguibles)', 'Cero absoluto'],
    ans: 2, exp: 'La única propiedad de la escala nominal es la identidad: podemos decir si dos observaciones son iguales o diferentes.' },

  { q: 'La razón de prevalencia entre dos categorías nominales (ej. proporción de diabéticos vs. no diabéticos) es un estadístico:',
    opts: ['Válido, porque compara proporciones dentro de la escala nominal', 'Inválido, porque en nominal no se comparan proporciones', 'Solo válido si las categorías están ordenadas', 'Solo válido si n > 100'],
    ans: 0, exp: 'Comparar proporciones (frecuencias relativas) entre categorías es perfectamente válido en escala nominal.' },

];
