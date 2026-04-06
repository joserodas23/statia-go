const EXTRA_DISCRETA = [

  // ─── ans: 0 (23 preguntas) ─────────────────────────────────────────────────
  { q: '¿Cuál de los siguientes es un ejemplo de variable discreta?',
    opts: ['Número de estudiantes en un aula', 'Peso corporal en kg', 'Temperatura en °C', 'Tiempo de espera en minutos'],
    ans: 0, exp: 'El número de estudiantes se cuenta en enteros no negativos → variable discreta.' },

  { q: '¿Cuál es la fórmula del valor esperado E(X) para una variable discreta?',
    opts: ['Σ xᵢ · P(xᵢ)', 'Σ xᵢ / n', 'Σ P(xᵢ)²', 'Σ xᵢ² / n'],
    ans: 0, exp: 'E(X) = Σ xᵢ·P(xᵢ): promedio ponderado de los valores por sus probabilidades.' },

  { q: 'La varianza de una distribución Binomial B(n, p) es:',
    opts: ['n · p · (1 − p)', 'n · p', 'n · p²', '(n · p)²'],
    ans: 0, exp: 'Var(X) = n·p·(1−p) para la distribución Binomial.' },

  { q: 'La propiedad de "sin memoria" en distribuciones discretas pertenece a la distribución:',
    opts: ['Geométrica', 'Binomial', 'Poisson', 'Hipergeométrica'],
    ans: 0, exp: 'La distribución Geométrica es la única discreta con la propiedad de falta de memoria.' },

  { q: 'Para los datos discretos {1, 1, 2, 3, 3, 3, 4}, la moda es:',
    opts: ['3', '1', '2', '4'],
    ans: 0, exp: '3 aparece 3 veces, más que cualquier otro valor → moda = 3.' },

  { q: 'Si P(X=1)=0.4, P(X=2)=0.3, P(X=3)=0.2, P(X=4)=k, entonces k vale:',
    opts: ['0.1', '0.2', '0.3', '0.4'],
    ans: 0, exp: 'La suma de probabilidades debe ser 1: 0.4+0.3+0.2+k=1 → k=0.1.' },

  { q: 'Si X ~ B(n=20, p=0.1), el número esperado de éxitos es:',
    opts: ['2', '10', '4', '0.1'],
    ans: 0, exp: 'E(X) = n·p = 20·0.1 = 2.' },

  { q: 'La suma de dos variables independientes X~Poisson(λ₁) e Y~Poisson(λ₂) sigue:',
    opts: ['Poisson(λ₁ + λ₂)', 'Binomial(λ₁+λ₂, 0.5)', 'Normal(λ₁+λ₂, σ)', 'Geométrica(λ₁+λ₂)'],
    ans: 0, exp: 'Propiedad reproductiva de Poisson: X+Y ~ Poisson(λ₁+λ₂).' },

  { q: 'P(X=0) en B(n, p) es igual a:',
    opts: ['(1−p)ⁿ', 'pⁿ', 'n·p·(1−p)ⁿ⁻¹', '1 − pⁿ'],
    ans: 0, exp: 'P(X=0) = C(n,0)·p⁰·(1−p)ⁿ = (1−p)ⁿ.' },

  { q: 'Un juego paga $9 si sale cara en una moneda y cobra $3 si sale sello. El valor esperado de la ganancia es:',
    opts: ['$3', '$6', '$9', '$0'],
    ans: 0, exp: 'E = 9·(1/2) + (−3)·(1/2) = 4.5 − 1.5 = $3.' },

  { q: 'La distribución geométrica modela el número de fracasos antes del primer éxito. Su media es:',
    opts: ['(1−p)/p', '1/p', 'p/(1−p)', 'p·(1−p)'],
    ans: 0, exp: 'Para la versión que cuenta fracasos antes del primer éxito: E(X) = (1−p)/p.' },

  { q: 'La función generatriz de momentos de B(n,p) es:',
    opts: ['[(1−p)+p·eᵗ]ⁿ', '[p·eᵗ]ⁿ', '[(p+(1−p)·eᵗ)]ⁿ', 'e^(λ(eᵗ−1))'],
    ans: 0, exp: 'La FGM de B(n,p) es M(t) = [(1−p) + p·eᵗ]ⁿ.' },

  { q: 'El número de llegadas de clientes a una tienda en 2 horas, con tasa de 3/hora, sigue Poisson con λ =',
    opts: ['6', '3', '1.5', '9'],
    ans: 0, exp: 'Para 2 horas con tasa 3/hora: λ = 3×2 = 6.' },

  { q: 'Para datos discretos {2, 4, 6} con frecuencias iguales, la varianza poblacional es:',
    opts: ['8/3', '4/3', '16/3', '2/3'],
    ans: 0, exp: 'Media=4; Var = [(2−4)²+(4−4)²+(6−4)²]/3 = (4+0+4)/3 = 8/3 ≈ 2.67.' },

  { q: 'Para X con P(X=1)=0.5 y P(X=3)=0.5, la varianza Var(X) es:',
    opts: ['1', '2', '4', '0.5'],
    ans: 0, exp: 'E(X)=2; Var(X) = (1−2)²·0.5 + (3−2)²·0.5 = 0.5+0.5 = 1.' },

  { q: 'El valor de C(6, 2) que aparece en la fórmula binomial P(X=2) con n=6 es:',
    opts: ['15', '12', '30', '6'],
    ans: 0, exp: 'C(6,2) = 6!/(2!·4!) = (6×5)/2 = 15.' },

  { q: 'Para B(n=10, p=0.2), la varianza es:',
    opts: ['1.6', '2', '0.2', '4'],
    ans: 0, exp: 'Var = n·p·(1−p) = 10·0.2·0.8 = 1.6.' },

  { q: '¿Cuántos valores puede tomar una variable aleatoria discreta?',
    opts: ['Finitos o infinitos contables', 'Solo dos valores', 'Infinitos no contables', 'Solo valores positivos'],
    ans: 0, exp: 'Discreta incluye finitos (ej. cara/cruz) e infinitos contables (0,1,2,…).' },

  { q: 'La distribución Binomial B(n,p) es simétrica cuando:',
    opts: ['p = 0.5', 'p > 0.5', 'n es grande', 'p < 0.5'],
    ans: 0, exp: 'Cuando p=0.5, la distribución es perfectamente simétrica alrededor de n/2.' },

  { q: 'El gráfico más apropiado para representar la distribución de una variable discreta es:',
    opts: ['Diagrama de barras separadas', 'Histograma con clases continuas', 'Polígono de frecuencias', 'Gráfico circular'],
    ans: 0, exp: 'Las barras separadas reflejan la naturaleza discreta (valores aislados) de la variable.' },

  { q: 'Para X~Poisson(λ=1), la probabilidad P(X≤1) es:',
    opts: ['2e⁻¹ ≈ 0.7358', 'e⁻¹ ≈ 0.3679', '1 − e⁻¹ ≈ 0.6321', '0.5'],
    ans: 0, exp: 'P(X≤1) = P(X=0)+P(X=1) = e⁻¹+e⁻¹ = 2e⁻¹ ≈ 0.7358.' },

  { q: 'En datos discretos con sesgo a la derecha (asimetría positiva), el orden es:',
    opts: ['Moda ≤ Mediana ≤ Media', 'Media ≤ Mediana ≤ Moda', 'Media = Mediana = Moda', 'Mediana < Moda < Media'],
    ans: 0, exp: 'Con sesgo positivo (cola derecha), la media es jalada hacia arriba: Moda ≤ Mediana ≤ Media.' },

  { q: 'Para X~B(n=50, p=0.4), la media E(X) y varianza Var(X) son:',
    opts: ['E=20, Var=12', 'E=12, Var=20', 'E=20, Var=20', 'E=12, Var=12'],
    ans: 0, exp: 'E(X)=n·p=50·0.4=20; Var(X)=n·p·(1−p)=50·0.4·0.6=12.' },

  // ─── ans: 1 (23 preguntas) ─────────────────────────────────────────────────
  { q: 'El número de llamadas recibidas por un call center en una hora es:',
    opts: ['Variable continua', 'Variable discreta', 'Variable nominal', 'Variable ordinal'],
    ans: 1, exp: 'Las llamadas se cuentan en enteros (0,1,2,…) → variable discreta.' },

  { q: 'El parámetro λ en la distribución de Poisson representa:',
    opts: ['La probabilidad de éxito', 'El número promedio de eventos en el intervalo', 'La varianza únicamente', 'El número de ensayos'],
    ans: 1, exp: 'λ es la tasa media de ocurrencia de eventos por unidad de tiempo o espacio.' },

  { q: 'En la distribución de Poisson, media y varianza son:',
    opts: ['Distintas siempre', 'Iguales a λ', 'Media=λ², Varianza=λ', 'Media=0, Varianza=λ'],
    ans: 1, exp: 'Propiedad fundamental de Poisson: E(X) = Var(X) = λ.' },

  { q: 'Si X ~ B(5, 0.5), la probabilidad P(X=3) es:',
    opts: ['0.1562', '0.3125', '0.2500', '0.5000'],
    ans: 1, exp: 'P(X=3) = C(5,3)·0.5³·0.5² = 10·0.125·0.25 = 0.3125.' },

  { q: 'Un experimento de Bernoulli tiene exactamente:',
    opts: ['Resultados ordenados jerárquicamente', 'Dos resultados posibles: éxito o fracaso', 'Tres o más resultados', 'Solo resultados numéricos continuos'],
    ans: 1, exp: 'Bernoulli es dicotómico: éxito (prob p) o fracaso (prob 1−p).' },

  { q: 'El número de fallas de un servidor por día sigue Poisson(λ=0.5). P(exactamente 0 fallas) ≈',
    opts: ['0.5000', '0.6065', '0.3033', '0.9000'],
    ans: 1, exp: 'P(X=0) = e^(−0.5) ≈ 0.6065.' },

  { q: 'La distribución Binomial B(n,p) se aproxima a Poisson cuando:',
    opts: ['n es pequeño y p es grande', 'n es grande, p es pequeño y λ=np moderado', 'n=p', 'p=0.5'],
    ans: 1, exp: 'Para n→∞, p→0 con np=λ constante, B(n,p) → Poisson(λ).' },

  { q: 'Si lanzas una moneda 8 veces, ¿cuántas "caras" se esperan en promedio?',
    opts: ['2', '4', '6', '8'],
    ans: 1, exp: 'E(X) = n·p = 8·0.5 = 4 caras esperadas.' },

  { q: 'El número de veces que se debe vacunar a un paciente es una variable:',
    opts: ['Continua, porque depende del tiempo', 'Discreta, porque se cuentan dosis enteras', 'Ordinal, porque hay jerarquía', 'Nominal, porque es una categoría'],
    ans: 1, exp: 'Las dosis se cuentan: 1, 2, 3 → valores enteros → variable discreta.' },

  { q: 'Para los datos discretos {3, 5, 7, 9, 11}, la mediana es:',
    opts: ['5', '7', '9', '3'],
    ans: 1, exp: 'Con 5 datos ordenados, la mediana es el 3er valor: 7.' },

  { q: 'La distribución hipergeométrica difiere de la binomial porque:',
    opts: ['No tiene parámetros', 'El muestreo es sin reposición, por lo que las pruebas no son independientes', 'La P(éxito) siempre es 0.5', 'Solo aplica con n>100'],
    ans: 1, exp: 'En la hipergeométrica se muestrea sin reposición → probabilidades cambian → ensayos dependientes.' },

  { q: 'La frecuencia acumulada de un valor en una tabla discreta representa:',
    opts: ['La frecuencia relativa del valor', 'El número de observaciones menores o iguales a ese valor', 'La media de las frecuencias', 'La diferencia entre frecuencias'],
    ans: 1, exp: 'Fᵢ = Σfⱼ para j ≤ i; cuenta cuántos datos son ≤ xᵢ.' },

  { q: '¿Cuál distribución modela el número de intentos hasta el primer éxito?',
    opts: ['Binomial', 'Poisson', 'Geométrica', 'Hipergeométrica'],
    ans: 2, exp: 'La distribución Geométrica modela el número de ensayos (incluyendo el éxito) hasta obtener el primer éxito.' },

  { q: 'Una función de probabilidad discreta P(X=xᵢ) debe cumplir:',
    opts: ['Σ P(xᵢ)=0', 'Σ P(xᵢ)=1 y P(xᵢ)≥0 para todo i', 'P(xᵢ) puede ser negativa', 'Σ P(xᵢ)=n'],
    ans: 1, exp: 'Condiciones axiomáticas: P(xᵢ)≥0 y la suma total de probabilidades = 1.' },

  { q: 'Para E(aX + b) con a y b constantes reales:',
    opts: ['a·E(X)', 'a·E(X) + b', 'E(X) + b', 'a + E(X)·b'],
    ans: 1, exp: 'Linealidad de la esperanza: E(aX+b) = a·E(X) + b.' },

  { q: '¿Puede λ tomar valores no enteros en Poisson?',
    opts: ['No, λ solo puede ser entero', 'Sí, λ puede ser cualquier número positivo real', 'Solo si λ<1', 'Solo si λ>1'],
    ans: 1, exp: 'λ es una tasa media y puede ser cualquier real positivo (ej. λ=2.5 accidentes/semana).' },

  { q: 'Si X es discreta y E(X)=4, Var(X)=2, el coeficiente de variación es:',
    opts: ['50%', '35.36%', '25%', '100%'],
    ans: 1, exp: 'CV=(σ/μ)×100=(√2/4)×100=(1.414/4)×100≈35.36%.' },

  { q: 'Cuando el número de datos es par, la mediana de datos discretos ordenados se calcula como:',
    opts: ['El valor central exacto', 'El promedio de los dos valores centrales', 'El valor mínimo', 'La moda'],
    ans: 1, exp: 'Con n par, la mediana es el promedio de los datos en posiciones n/2 y n/2+1.' },

  { q: 'El parámetro "n" en la distribución B(n,p) representa:',
    opts: ['La probabilidad de fracaso', 'El número de ensayos de Bernoulli', 'La varianza', 'El valor esperado'],
    ans: 1, exp: 'n es el número fijo de ensayos independientes en el experimento binomial.' },

  { q: 'Si λ=4 eventos/hora, la varianza del número de eventos en 1 hora según Poisson es:',
    opts: ['16', '4', '2', '8'],
    ans: 1, exp: 'En Poisson, Var(X) = λ = 4.' },

  { q: 'En una distribución discreta uniforme con valores {1,2,3,4,5}, P(X=k) para cada k es:',
    opts: ['1/10', '1/5', '1/25', '5'],
    ans: 1, exp: 'Distribución uniforme discreta con 5 valores: P(X=k) = 1/5 = 0.2 para cada valor.' },

  { q: 'Para X~B(n=15, p=0.1), la probabilidad de al menos un éxito P(X≥1) es:',
    opts: ['0.1¹⁵', '1 − 0.9¹⁵', '1 − 0.1¹⁵', '0.9¹⁵'],
    ans: 1, exp: 'P(X≥1) = 1 − P(X=0) = 1 − (0.9)^15.' },

  { q: 'La distribución discreta uniforme en {1, 2, ..., N} tiene media:',
    opts: ['N/2', '(N+1)/2', 'N', '(N−1)/2'],
    ans: 1, exp: 'E(X) = (1+N)/2, el punto medio del rango.' },

  { q: 'Para la distribución X con P(X=0)=0.2, P(X=1)=0.5, P(X=2)=0.3, E(X) es:',
    opts: ['1.00', '1.10', '1.20', '0.90'],
    ans: 1, exp: 'E(X) = 0(0.2)+1(0.5)+2(0.3) = 0+0.5+0.6 = 1.10.' },

  // ─── ans: 2 (23 preguntas) ─────────────────────────────────────────────────
  { q: '¿Cuál de las siguientes variables NO es discreta?',
    opts: ['Número de accidentes de tráfico', 'Número de hijos por familia', 'Temperatura corporal en °C', 'Número de errores en un examen'],
    ans: 2, exp: 'La temperatura puede tomar cualquier valor real → es continua, no discreta.' },

  { q: 'La fórmula de probabilidad de Poisson P(X=k) es:',
    opts: ['eᵏ · λᵏ / k!', 'e^λ · λᵏ / k!', 'e^(−λ) · λᵏ / k!', '(1−λ)ᵏ / k!'],
    ans: 2, exp: 'P(X=k) = e^(−λ)·λᵏ/k! es la fórmula clásica de la distribución de Poisson.' },

  { q: 'El número de errores en una auditoría contable se clasifica como variable:',
    opts: ['Cuantitativa continua', 'Cualitativa nominal', 'Cuantitativa discreta', 'Cualitativa ordinal'],
    ans: 2, exp: 'Los errores se cuentan en enteros → cuantitativa discreta.' },

  { q: 'Si E(X)=3 y E(X²)=13, entonces Var(X) es:',
    opts: ['10', '16', '4', '6'],
    ans: 2, exp: 'Var(X) = E(X²) − [E(X)]² = 13 − 9 = 4.' },

  { q: '¿Cuál de los siguientes experimentos NO es binomial?',
    opts: ['Lanzar una moneda 20 veces y contar caras', 'Aplicar vacuna a 100 personas independientes y contar inmunes', 'Extraer sin reposición 5 cartas de una baraja y contar ases', 'Contar éxitos en 50 preguntas V/F independientes'],
    ans: 2, exp: 'Sin reposición, las probabilidades cambian → ensayos dependientes → no es binomial (es hipergeométrica).' },

  { q: 'La desviación estándar de X~B(n=20, p=0.4) es aproximadamente:',
    opts: ['4.8', '8', '2.19', '4'],
    ans: 2, exp: 'Var = 20·0.4·0.6 = 4.8; σ = √4.8 ≈ 2.19.' },

  { q: 'La varianza de la variable aleatoria discreta es 0 cuando:',
    opts: ['Todos los valores son distintos', 'La media es 0', 'Todos los valores son iguales', 'La distribución es uniforme'],
    ans: 2, exp: 'Var=0 implica que no hay dispersión → todos los valores son idénticos.' },

  { q: 'Para Var(aX + b) con a y b constantes:',
    opts: ['a²·Var(X)+b', 'Var(X)+b²', 'a²·Var(X)', 'a·Var(X)+b'],
    ans: 2, exp: 'Las constantes aditivas no afectan la varianza; la multiplicativa se eleva al cuadrado: a²·Var(X).' },

  { q: 'La distribución Binomial Negativa generaliza a la distribución:',
    opts: ['Poisson', 'Normal', 'Geométrica', 'Uniforme'],
    ans: 2, exp: 'Con r=1, la Binomial Negativa reduce a la distribución Geométrica.' },

  { q: '¿Cuál distribución discreta se usa para artículos defectuosos en muestra sin reposición?',
    opts: ['Binomial', 'Poisson', 'Hipergeométrica', 'Geométrica'],
    ans: 2, exp: 'Extracción sin reposición de población finita → distribución Hipergeométrica.' },

  { q: 'Para la distribución B(n=6, p=0.3), P(X=2) =',
    opts: ['0.0595', '0.2100', 'C(6,2)·0.3²·0.7⁴ ≈ 0.3241', '0.3⁶'],
    ans: 2, exp: 'P(X=2)=C(6,2)·(0.3)²·(0.7)⁴=15·0.09·0.2401≈0.3241.' },

  { q: 'El número de impactos de meteoros en una región por año, siendo eventos raros e independientes, se modela con:',
    opts: ['Distribución Normal', 'Distribución Binomial', 'Distribución de Poisson', 'Distribución t'],
    ans: 2, exp: 'Eventos raros, independientes en un continuo de tiempo → modelo de Poisson.' },

  { q: 'La mediana de la distribución discreta {P(X=1)=0.3, P(X=2)=0.4, P(X=3)=0.3} es:',
    opts: ['1', '3', '2', '1.5'],
    ans: 2, exp: 'F(1)=0.3<0.5; F(2)=0.7≥0.5 → la mediana es 2.' },

  { q: 'Si X~B(4, 0.5), ¿cuánto vale P(X ≤ 1)?',
    opts: ['0.5000', '0.6875', '0.3125', '0.0625'],
    ans: 2, exp: 'P(X=0)=0.0625; P(X=1)=4·(0.5)⁴=0.25; P(X≤1)=0.3125.' },

  { q: '¿Cuál es la moda de Poisson(λ=3)?',
    opts: ['Solo 3', 'Solo 2', '2 y 3 (bimodal)', '4'],
    ans: 2, exp: 'Cuando λ es entero, Poisson tiene dos modas: λ−1 y λ, es decir 2 y 3.' },

  { q: 'El inspector encuentra en promedio 1.5 defectos por metro de tela. En 2 metros el modelo es:',
    opts: ['Binomial(2, 1.5)', 'Poisson(λ=1.5)', 'Poisson(λ=3)', 'Normal(1.5, 1)'],
    ans: 2, exp: 'Para 2 metros: λ=1.5×2=3 → Poisson(3).' },

  { q: 'En una tabla de frecuencias discreta con datos {1,1,2,3,3,3,4}, ¿cuántos valores distintos (clases) hay?',
    opts: ['7', '3', '4', '5'],
    ans: 2, exp: 'Los valores distintos son: 1, 2, 3, 4 → cuatro clases.' },

  { q: 'La distribución de Poisson se usa cuando los eventos son:',
    opts: ['Dependientes y frecuentes', 'Continuos y normales', 'Raros, independientes y ocurren en un continuo', 'Dependientes y periódicos'],
    ans: 2, exp: 'Poisson modela eventos raros e independientes en tiempo/espacio continuo.' },

  { q: 'El rango de la variable discreta {1, 3, 5, 7, 9} es:',
    opts: ['5', '4', '8', '9'],
    ans: 2, exp: 'Rango = Máximo − Mínimo = 9 − 1 = 8.' },

  { q: 'La función de distribución acumulada F(k) en B(n,p) representa:',
    opts: ['P(X=k)', 'P(X>k)', 'P(X≤k)', 'P(X=n)'],
    ans: 2, exp: 'F(k)=P(X≤k) es la probabilidad acumulada hasta k en la distribución binomial.' },

  { q: 'Si X~Poisson(λ=2), entonces P(X=0) es:',
    opts: ['2e⁻²', '0.5e⁻²', 'e⁻²', 'e²'],
    ans: 2, exp: 'P(X=0)=e^(−2)·2⁰/0!=e^(−2)≈0.1353.' },

  { q: 'La condición para que X~B(n,p) aproxime a la Normal es:',
    opts: ['p=0.5 siempre', 'n<10', 'n·p≥5 y n·(1−p)≥5', 'p>0.9'],
    ans: 2, exp: 'La aproximación Normal es válida cuando np≥5 y n(1−p)≥5.' },

  { q: 'El número de premios en una lotería, si compras 10 de 1000 boletos con 5 premios, sigue:',
    opts: ['Distribución Binomial', 'Distribución de Poisson', 'Distribución Hipergeométrica', 'Distribución Normal'],
    ans: 2, exp: 'Muestra sin reposición de población finita con M éxitos → distribución Hipergeométrica.' },

  // ─── ans: 3 (22 preguntas) ─────────────────────────────────────────────────
  { q: 'El número de veces que una moneda cae en "cara" al lanzarla 10 veces es:',
    opts: ['Variable continua', 'Variable nominal', 'Variable ordinal', 'Variable discreta'],
    ans: 3, exp: 'El resultado puede ser 0,1,2,…,10 — valores enteros → discreta.' },

  { q: 'Si lanzas un dado 60 veces, el número de veces que sale "3" es:',
    opts: ['Variable continua', 'Variable ordinal', 'Variable nominal', 'Variable discreta'],
    ans: 3, exp: 'El conteo de resultados (0,1,2,…,60) es un entero → variable discreta.' },

  { q: 'La principal diferencia entre variable discreta y continua es:',
    opts: ['La discreta siempre es menor que la continua', 'La discreta no puede tener media', 'La continua no puede graficarse', 'La discreta toma valores contables; la continua cualquier valor en un intervalo'],
    ans: 3, exp: 'Discreta: valores aislados y contables. Continua: cualquier valor real en un rango.' },

  { q: 'El parámetro "p" en B(n,p) debe satisfacer:',
    opts: ['p > 1', 'p < 0', 'p = n', '0 ≤ p ≤ 1'],
    ans: 3, exp: 'p es una probabilidad y debe estar en [0, 1].' },

  { q: 'Si la distribución de una variable discreta tiene dos modas, se llama:',
    opts: ['Unimodal', 'Amodal', 'Multimodal asimétrica', 'Bimodal'],
    ans: 3, exp: 'Una distribución con dos valores de frecuencia máxima es bimodal.' },

  { q: 'Una empresa produce lotes de 500 unidades. El número de unidades defectuosas por lote es:',
    opts: ['Continua, pues va de 0 a 500', 'Ordinal, por jerarquía de defectos', 'Nominal, pues el defecto es una categoría', 'Discreta, pues toma valores enteros de 0 a 500'],
    ans: 3, exp: 'El conteo de defectuosas solo toma valores enteros → cuantitativa discreta.' },

  { q: 'En una fábrica el 5% de los tornillos son defectuosos. Si se toman 20, el número esperado de defectuosos es:',
    opts: ['5', '0.05', '4', '1'],
    ans: 3, exp: 'E(X) = n·p = 20·0.05 = 1 tornillo defectuoso esperado.' },

  { q: 'La desviación estándar de X si Var(X)=9 es:',
    opts: ['81', '9', '4.5', '3'],
    ans: 3, exp: 'σ = √9 = 3.' },

  { q: 'Para X e Y variables aleatorias discretas independientes, E(X·Y) =',
    opts: ['E(X) + E(Y)', 'E(X) − E(Y)', 'E(X²)·E(Y²)', 'E(X) · E(Y)'],
    ans: 3, exp: 'Para variables independientes: E(X·Y) = E(X)·E(Y).' },

  { q: 'Si la varianza de una variable discreta es 0, entonces:',
    opts: ['Todos los valores son distintos', 'La media es 0', 'La distribución es uniforme', 'Todos los valores son iguales'],
    ans: 3, exp: 'Var=0 → no hay dispersión → todos los valores son iguales.' },

  { q: 'Para X~B(n=5, p=0.3), la moda es ⌊(n+1)p⌋ =',
    opts: ['0', '2', '3', '1'],
    ans: 3, exp: '⌊(5+1)·0.3⌋ = ⌊1.8⌋ = 1.' },

  { q: 'El rango intercuartílico (RIC) de {1,2,3,4,5,6,7,8} es:',
    opts: ['7', '3', '5', '4'],
    ans: 3, exp: 'Q1=2.5, Q3=6.5; RIC = Q3−Q1 = 4.' },

  { q: 'La suma de todas las frecuencias relativas en una tabla discreta es:',
    opts: ['Igual al número de clases', 'Igual a n', 'Igual a 0', 'Igual a 1'],
    ans: 3, exp: 'Σ(fᵢ/n) = 1, ya que la suma de todas las proporciones siempre es 1.' },

  { q: 'La P(X=c) para una variable continua X es siempre:',
    opts: ['Mayor que 0', 'Igual a f(c)', 'Igual a 1', '0'],
    ans: 3, exp: 'Para variables continuas, la probabilidad de un valor exacto es siempre 0.' },

  { q: 'La esperanza de una constante c es:',
    opts: ['0', '1', 'c²', 'c'],
    ans: 3, exp: 'E(c) = c, pues una constante siempre toma el mismo valor.' },

  { q: 'Para X~Poisson(λ=5), P(X=0) es:',
    opts: ['5e⁻⁵ ≈ 0.0337', '1 − e⁻⁵ ≈ 0.9933', 'e⁵ ≈ 148.4', 'e⁻⁵ ≈ 0.0067'],
    ans: 3, exp: 'P(X=0) = e^(−5)·5⁰/0! = e^(−5) ≈ 0.0067.' },

  { q: 'El coeficiente de variación para media=5 y desviación estándar=1 es:',
    opts: ['5%', '1%', '50%', '20%'],
    ans: 3, exp: 'CV=(σ/μ)×100=(1/5)×100=20%.' },

  { q: 'La función de masa de probabilidad (FMP) asigna probabilidades a:',
    opts: ['Intervalos de valores', 'Densidades de probabilidad', 'Funciones continuas', 'Valores específicos y aislados'],
    ans: 3, exp: 'La FMP P(X=x) asigna probabilidad a cada valor discreto específico de la variable.' },

  { q: '¿Cuál distribución discreta modela el número de artículos en una muestra extraída sin reposición?',
    opts: ['Binomial', 'Poisson', 'Geométrica', 'Hipergeométrica'],
    ans: 3, exp: 'Extracción sin reposición de población finita → distribución Hipergeométrica.' },

  { q: 'Si X~Poisson(λ) y λ se duplica, la varianza del nuevo X:',
    opts: ['Se cuadruplica', 'No cambia', 'Se reduce a la mitad', 'También se duplica'],
    ans: 3, exp: 'Var=λ → al duplicar λ, la varianza también se duplica.' },

  { q: 'Si X~B(100, 0.5), la aproximación Normal es válida porque:',
    opts: ['n·p = 50 ≥ 5 solo', 'σ = 5 > 1', 'p = 0.5 exactamente', 'n·p=50 y n·(1−p)=50, ambos ≥ 5'],
    ans: 3, exp: 'Criterio: np≥5 y n(1−p)≥5; aquí np=50 y n(1−p)=50 → excelente aproximación Normal.' },
];
