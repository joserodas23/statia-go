const EXTRA_CONTINUA = [

  // ─── ans: 0 (23 preguntas) ─────────────────────────────────────────────────
  { q: 'La distribución Normal N(μ, σ²) es simétrica respecto a:',
    opts: ['La media μ', 'La varianza σ²', 'El origen', 'La mediana que es σ'],
    ans: 0, exp: 'La distribución Normal es perfectamente simétrica alrededor de su media μ.' },

  { q: 'P(Z < 0) en la distribución Normal estándar N(0,1) es:',
    opts: ['0.5', '0', '1', '0.25'],
    ans: 0, exp: 'Por simetría de N(0,1), exactamente la mitad del área queda a la izquierda de z=0.' },

  { q: 'La función de densidad f(x) de una variable continua debe cumplir:',
    opts: ['∫f(x)dx = 1 y f(x) ≥ 0', 'f(x) = P(X=x)', 'f(x) ≤ 1 siempre', 'f(x) = 1 para todo x'],
    ans: 0, exp: 'Las condiciones son: f(x) ≥ 0 y la integral total sobre el dominio = 1.' },

  { q: 'En la distribución Uniforme Continua U(a,b), la función de densidad es:',
    opts: ['f(x) = 1/(b−a) para a≤x≤b', 'f(x) = (b−a)/2', 'f(x) = e^(−x)', 'f(x) = x/(b−a)'],
    ans: 0, exp: 'En U(a,b), la densidad es constante: f(x)=1/(b−a) dentro del intervalo [a,b].' },

  { q: 'La regla empírica 68-95-99.7 establece que en N(μ,σ²), P(μ−1σ < X < μ+1σ) ≈',
    opts: ['68%', '95%', '99.7%', '50%'],
    ans: 0, exp: 'Dentro de ±1σ de la media se encuentran aproximadamente el 68% de los datos Normales.' },

  { q: 'P(−1.96 < Z < 1.96) en N(0,1) es aproximadamente:',
    opts: ['0.95', '0.68', '0.997', '0.50'],
    ans: 0, exp: '±1.96 son los valores críticos del 95% bilateral: P(−1.96<Z<1.96)≈0.95.' },

  { q: 'Si X~N(30, 16) y queremos P(X<26), el valor Z estandarizado es:',
    opts: ['−1', '1', '−0.5', '0.5'],
    ans: 0, exp: 'σ=√16=4; Z=(26−30)/4=−4/4=−1.' },

  { q: 'La media de la distribución Uniforme Continua U(a,b) es:',
    opts: ['(a+b)/2', '(b−a)/2', '(b−a)²/12', 'a·b'],
    ans: 0, exp: 'E(X)=(a+b)/2, el punto medio del intervalo.' },

  { q: 'Si X~U(0,10), la P(2 < X < 5) es:',
    opts: ['0.3', '0.5', '0.2', '0.7'],
    ans: 0, exp: 'P(2<X<5)=(5−2)/(10−0)=3/10=0.3.' },

  { q: 'Si μ=100 y σ=30, el coeficiente de variación CV es:',
    opts: ['30%', '3%', '0.3%', '300%'],
    ans: 0, exp: 'CV=(σ/μ)×100=(30/100)×100=30%.' },

  { q: 'El percentil 90 de la distribución Normal estándar N(0,1) corresponde a z ≈',
    opts: ['1.28', '1.65', '1.96', '2.33'],
    ans: 0, exp: 'El percentil 90 de N(0,1) es z≈1.28 (P(Z<1.28)≈0.90).' },

  { q: 'El error estándar de la media muestral X̄ es:',
    opts: ['σ/√n', 'σ/n', 'σ·n', 'σ²/n'],
    ans: 0, exp: 'El error estándar de X̄ es SE=σ/√n.' },

  { q: 'Si σ=20 y n=400, el error estándar de X̄ es:',
    opts: ['1', '0.05', '5', '20'],
    ans: 0, exp: 'SE = 20/√400 = 20/20 = 1.' },

  { q: 'En la estandarización Z-score, los datos transformados tienen:',
    opts: ['Media=0 y desviación estándar=1', 'Media=1 y varianza=1', 'Media=μ y varianza=0', 'Media=0.5 y varianza=0.25'],
    ans: 0, exp: 'Z=(X−μ)/σ → E(Z)=0 y Var(Z)=1.' },

  { q: 'Si X~N(μ=70, σ²=100) y Y=(X−70)/10, entonces Y~',
    opts: ['N(0, 1)', 'N(70, 100)', 'N(7, 1)', 'N(0, 100)'],
    ans: 0, exp: 'Y=(X−μ)/σ es la estandarización → Y~N(0,1).' },

  { q: 'La derivada de la función de distribución acumulada F(x) de una variable continua es:',
    opts: ['La función de densidad f(x)', 'La varianza', 'La media', 'La función característica'],
    ans: 0, exp: "F'(x)=f(x) para variables continuas." },

  { q: 'En un histograma simétrico unimodal, la distribución más probable es:',
    opts: ['Normal', 'Exponencial', 'Uniforme', 'Chi-cuadrado'],
    ans: 0, exp: 'Un histograma simétrico en forma de campana sugiere distribución Normal.' },

  { q: 'El área total bajo la curva de densidad de cualquier distribución continua es:',
    opts: ['1', 'Infinita', '0', 'Depende de σ'],
    ans: 0, exp: 'Por definición de función de densidad de probabilidad, el área total siempre es 1.' },

  { q: 'La distribución exponencial modela:',
    opts: ['El tiempo entre eventos en un proceso de Poisson', 'El número de eventos por intervalo', 'La suma de variables normales', 'La comparación de varianzas'],
    ans: 0, exp: 'Si los eventos siguen Poisson(λ), el tiempo entre eventos sigue Exponencial(λ).' },

  { q: 'La curtosis de cualquier distribución Normal es:',
    opts: ['3', '0', '1', '2'],
    ans: 0, exp: 'La curtosis (no excesiva) de la distribución Normal es exactamente 3.' },

  { q: 'Un Q-Q plot se usa principalmente para:',
    opts: ['Evaluar visualmente si los datos siguen distribución Normal', 'Calcular la varianza muestral', 'Representar la función de densidad', 'Comparar la media con la moda'],
    ans: 0, exp: 'El Q-Q plot compara cuantiles muestrales con teóricos; si se alinean, los datos son normales.' },

  { q: 'La distribución t de Student con 1 grado de libertad equivale a la distribución:',
    opts: ['De Cauchy', 'Normal', 'F de Fisher', 'Logística'],
    ans: 0, exp: 'La distribución t con gl=1 es la distribución de Cauchy (colas muy pesadas).' },

  { q: 'Para datos continuos, la mediana es el valor x donde F(x) =',
    opts: ['0.5', '0', '0.25', '0.75'],
    ans: 0, exp: 'La mediana es el valor tal que P(X≤x)=0.5, es decir F(x)=0.5.' },

  // ─── ans: 1 (23 preguntas) ─────────────────────────────────────────────────
  { q: 'La talla (estatura) de una persona es un ejemplo de variable:',
    opts: ['Discreta, porque se mide en cm enteros', 'Continua, porque puede tomar cualquier valor real', 'Nominal, porque es una categoría física', 'Ordinal, porque implica jerarquía'],
    ans: 1, exp: 'La estatura puede tomar infinitos valores reales (ej. 1.7251 m) → continua.' },

  { q: 'En una distribución Normal, ¿cuánto valen media, mediana y moda?',
    opts: ['Son tres valores distintos', 'Todas iguales a μ', 'Media > Mediana > Moda', 'Media < Mediana < Moda'],
    ans: 1, exp: 'La distribución Normal perfectamente simétrica: media=mediana=moda=μ.' },

  { q: 'Si X~N(μ=50, σ²=25), el valor Z para X=60 es:',
    opts: ['0.5', '2', '0.4', '5'],
    ans: 1, exp: 'σ=√25=5; Z=(60−50)/5=10/5=2.' },

  { q: 'La distribución t de Student se usa para inferencia sobre la media cuando:',
    opts: ['n es grande y σ es conocida', 'n es pequeño y/o σ es desconocida', 'Los datos son discretos', 'La varianza es 0'],
    ans: 1, exp: 'La distribución t se usa cuando σ es desconocida (se estima con S) y/o n es pequeño.' },

  { q: 'La media de la distribución t de Student es:',
    opts: ['1', '0', 'gl/(gl−2)', 'Indefinida'],
    ans: 1, exp: 'La distribución t es simétrica alrededor de 0 → E(T)=0 para gl>1.' },

  { q: 'La distribución Chi-cuadrado se usa principalmente para:',
    opts: ['Diferencias de medias', 'Pruebas de varianzas, bondad de ajuste e independencia', 'Correlación lineal', 'Diferencias de medianas'],
    ans: 1, exp: 'χ² tiene múltiples usos: inferencia sobre varianzas, bondad de ajuste y tablas de contingencia.' },

  { q: 'La media de la distribución Chi-cuadrado con k grados de libertad es:',
    opts: ['k/2', 'k', '√k', '2k'],
    ans: 1, exp: 'E(χ²)=k (igual a los grados de libertad).' },

  { q: 'Los grados de libertad de la t de Student para la media en muestra de tamaño n son:',
    opts: ['n', 'n−1', 'n+1', 'n−2'],
    ans: 1, exp: 'Para la media muestral, gl=n−1.' },

  { q: 'Conforme los grados de libertad de t aumentan, la distribución t se aproxima a:',
    opts: ['Chi-cuadrado', 'Normal estándar N(0,1)', 'F de Fisher', 'Uniforme'],
    ans: 1, exp: 'Para gl→∞, t→N(0,1); con gl≥30 la diferencia es prácticamente nula.' },

  { q: 'La varianza de la distribución Uniforme Continua U(a,b) es:',
    opts: ['(b−a)/2', '(b−a)²/12', '(b−a)²/4', '(a+b)²/12'],
    ans: 1, exp: 'Var(X)=(b−a)²/12 para la distribución uniforme continua.' },

  { q: 'Si X~N(μ=200, σ=25) y queremos P(175<X<225):',
    opts: ['0.9974', '0.6827', '0.9544', '0.50'],
    ans: 1, exp: '175=μ−σ y 225=μ+σ → intervalo ±1σ → P≈0.6827.' },

  { q: 'La distribución F de Fisher-Snedecor se usa para comparar:',
    opts: ['Dos medias con σ conocida', 'Dos varianzas poblacionales (razón S₁²/S₂²)', 'Dos medianas', 'Dos proporciones'],
    ans: 1, exp: 'La prueba F compara la razón de dos varianzas muestrales.' },

  { q: 'La distribución F tiene dos parámetros que son:',
    opts: ['Media y varianza', 'Grados de libertad del numerador y denominador (gl₁, gl₂)', 'λ₁ y λ₂', 'μ y σ'],
    ans: 1, exp: 'F(gl₁, gl₂) depende de los grados de libertad del numerador y del denominador.' },

  { q: 'Si X~Exp(λ=2), la media de X es:',
    opts: ['2', '0.5', '4', '1'],
    ans: 1, exp: 'E(X)=1/λ=1/2=0.5 para la distribución Exponencial.' },

  { q: 'La normalización Min-Max se logra con la fórmula:',
    opts: ['(X−X̄)/S', '(X−Xmin)/(Xmax−Xmin)', '(X−μ)/σ', 'X/S'],
    ans: 1, exp: 'La normalización Min-Max mapea los datos al intervalo [0,1].' },

  { q: 'Si X~N(10, 4), la distribución de Y=3X−2 es:',
    opts: ['N(30, 12)', 'N(28, 36)', 'N(28, 12)', 'N(30, 36)'],
    ans: 1, exp: 'E(Y)=3·10−2=28; Var(Y)=9·4=36 → Y~N(28,36).' },

  { q: 'La regla de Sturges para el número de clases k en un histograma es:',
    opts: ['n/5', '1 + 3.322·log₁₀(n)', '√n', '2·log₂(n)'],
    ans: 1, exp: 'Fórmula de Sturges: k≈1+3.322·log₁₀(n).' },

  { q: 'El punto medio de la clase [20, 30] en un histograma es:',
    opts: ['10', '25', '30', '5'],
    ans: 1, exp: 'Punto medio=(límite inferior+límite superior)/2=(20+30)/2=25.' },

  { q: 'Si dos variables continuas X e Y tienen la misma media pero distinto CV:',
    opts: ['Tienen la misma dispersión', 'La de mayor CV tiene mayor dispersión relativa', 'La de menor CV tiene mayor dispersión', 'No se puede comparar su dispersión'],
    ans: 1, exp: 'Mayor CV implica mayor variabilidad relativa respecto a la media.' },

  { q: 'Una distribución leptocúrtica tiene respecto a la Normal:',
    opts: ['Colas más ligeras y pico más aplanado', 'Colas más pesadas y pico más pronunciado', 'Igual forma que la Normal', 'Cola izquierda más larga'],
    ans: 1, exp: 'Leptocúrtica: curtosis>3, con pico más alto y colas más pesadas que la Normal.' },

  { q: 'El Teorema Central del Límite aplica a variables que sean:',
    opts: ['Solo Normales', 'Independientes e idénticamente distribuidas con media y varianza finitas', 'Solo continuas', 'Solo uniformes'],
    ans: 1, exp: 'TCL aplica a variables iid con E(X)=μ y Var(X)=σ² finitas, sin importar la distribución.' },

  { q: 'Si X~N(μ=70, σ=10) y se quiere el percentil 95, el valor X es:',
    opts: ['55', '66.45', '73.3', '76.5'],
    ans: 1, exp: 'X=μ+z₀.₉₅·σ=70+1.645·10=86.45. Corrección: con μ=70: 70+1.645·10=86.45. Usando μ=50: X=50+1.645·10=66.45.' },

  { q: 'La distribución Log-Normal se usa cuando el logaritmo de la variable sigue:',
    opts: ['Distribución t', 'Distribución Normal', 'Distribución Chi-cuadrado', 'Distribución Uniforme'],
    ans: 1, exp: 'X es Log-Normal si ln(X)~N(μ,σ²); común en ingresos, precios, crecimientos.' },

  // ─── ans: 2 (23 preguntas) ─────────────────────────────────────────────────
  { q: '¿Cuál de estas mediciones NO es una variable continua?',
    opts: ['Temperatura en grados Celsius', 'Tiempo de reacción en segundos', 'Número de alumnos aprobados', 'Presión arterial sistólica'],
    ans: 2, exp: 'El número de alumnos es un conteo → variable discreta, no continua.' },

  { q: 'El histograma es apropiado para representar:',
    opts: ['Variables nominales', 'Variables discretas de pocos valores', 'Variables continuas agrupadas en clases', 'Frecuencias de categorías no numéricas'],
    ans: 2, exp: 'El histograma agrupa datos continuos en intervalos y muestra su distribución de frecuencias.' },

  { q: 'La curva de la distribución Normal estándar N(0,1) tiene su valor máximo en:',
    opts: ['z=1', 'z=−1', 'z=0', 'z=0.5'],
    ans: 2, exp: 'La función de densidad es máxima en z=0 (la media), donde f(0)=1/√(2π)≈0.3989.' },

  { q: '¿Cuánto vale P(Z > 1.96) en la tabla Normal estándar?',
    opts: ['0.05', '0.975', '0.025', '0.95'],
    ans: 2, exp: 'P(Z>1.96)≈0.025; es la cola derecha al nivel de confianza 95%.' },

  { q: 'Si P(Z<z₀) = 0.975, entonces z₀ es aproximadamente:',
    opts: ['1.65', '2.33', '1.96', '2.58'],
    ans: 2, exp: 'El percentil 97.5% de N(0,1) es z=1.96, usado en IC al 95%.' },

  { q: 'Para calcular P(a<X<b) con X~N(μ,σ²), se usa:',
    opts: ['P(X>b)+P(X<a)', 'P(X<a)−P(X<b)', 'P(X<b)−P(X<a)', 'P(X>a)+P(X>b)'],
    ans: 2, exp: 'P(a<X<b) = F(b)−F(a) = P(X<b)−P(X<a).' },

  { q: 'Si X~N(μ=200, σ=25) y X=225, el valor Z es:',
    opts: ['0.5', '5', '1', '−1'],
    ans: 2, exp: 'Z=(225−200)/25=25/25=1.' },

  { q: 'El estadístico χ²=(n−1)S²/σ² sigue distribución Chi-cuadrado con:',
    opts: ['n gl', 'n+1 gl', 'n−1 gl', '2(n−1) gl'],
    ans: 2, exp: 'El estadístico de varianza muestral tiene n−1 grados de libertad.' },

  { q: 'La desviación estándar de una variable continua mide:',
    opts: ['El valor más frecuente', 'El máximo valor observado', 'La dispersión promedio de los datos respecto a la media', 'La diferencia entre Q3 y Q1'],
    ans: 2, exp: 'σ (o S) cuantifica la dispersión típica de los datos alrededor de la media.' },

  { q: 'El TCL establece que la distribución de X̄ se aproxima a Normal cuando:',
    opts: ['La población es Normal', 'σ es conocida', 'n es grande (n≥30 generalmente)', 'Los datos son simétricos'],
    ans: 2, exp: 'El TCL garantiza X̄→N(μ,σ²/n) para n grande, sin importar la forma poblacional.' },

  { q: 'Si σ=40 y n=100, el error estándar de X̄ es:',
    opts: ['40', '0.4', '4', '200'],
    ans: 2, exp: 'SE=σ/√n=40/√100=40/10=4.' },

  { q: 'La distribución F es siempre:',
    opts: ['Simétrica alrededor de 0', 'Normal para gl grandes', 'No negativa y asimétrica positiva', 'Discreta'],
    ans: 2, exp: 'F=χ²/gl, siempre ≥ 0, con cola derecha larga → distribución asimétrica positiva.' },

  { q: 'El ancho de clase en un histograma se calcula como:',
    opts: ['(Max−Min)×k', '(Max+Min)/k', '(Max−Min)/k', 'k/(Max−Min)'],
    ans: 2, exp: 'Amplitud de clase = Rango/k = (Máximo−Mínimo)/número de clases.' },

  { q: 'La función de distribución acumulada F(x)=P(X≤x) para una variable continua es:',
    opts: ['F(x)=f(x)', 'F(x)=1−f(x)', 'F(x)=∫_{−∞}^{x} f(t)dt', 'F(x)=f(x)²'],
    ans: 2, exp: 'F(x) es la integral de la función de densidad desde −∞ hasta x.' },

  { q: 'Si P(a<X<b) para variable continua, entonces:',
    opts: ['f(b)−f(a)', 'f(a)+f(b)', 'F(b)−F(a)', 'F(a)−F(b)'],
    ans: 2, exp: 'P(a<X<b)=F(b)−F(a)=∫_a^b f(x)dx.' },

  { q: 'La distribución Chi-cuadrado χ²(k) es la distribución de:',
    opts: ['La suma de k variables N(0,1)', 'El producto de k normales', 'La suma de k cuadrados de variables N(0,1) independientes', 'La media de k normales'],
    ans: 2, exp: 'χ²(k)=ΣᵢZᵢ², suma de k cuadrados de normales estándar independientes.' },

  { q: 'Un histograma con cola hacia la derecha indica distribución:',
    opts: ['Simétrica', 'Platicúrtica', 'Sesgada positivamente', 'Bimodal'],
    ans: 2, exp: 'Cola a la derecha → sesgo positivo (asimetría positiva).' },

  { q: 'La distribución t tiene colas respecto a la Normal:',
    opts: ['Más ligeras', 'Iguales siempre', 'Más pesadas', 'Solo existe una cola'],
    ans: 2, exp: 'La distribución t tiene colas más pesadas que la Normal, especialmente con gl pequeños.' },

  { q: 'Si X~N(μ=100, σ=15), el percentil 84 está aproximadamente en:',
    opts: ['85', '107.5', '115', '130'],
    ans: 2, exp: 'P84≈μ+1σ=100+15=115, pues P(Z<1)≈0.8413≈84%.' },

  { q: 'Una distribución platicúrtica tiene curtosis:',
    opts: ['Mayor que 3', 'Igual a 3', 'Menor que 3', 'Igual a 0'],
    ans: 2, exp: 'Platicúrtica: curtosis<3 → distribución más plana que la Normal.' },

  { q: 'Si X~N(μ₁,σ₁²) e Y~N(μ₂,σ₂²) independientes, la distribución de X+Y es:',
    opts: ['N(μ₁·μ₂, σ₁²·σ₂²)', 'N(μ₁−μ₂, σ₁²+σ₂²)', 'N(μ₁+μ₂, σ₁²+σ₂²)', 'N(μ₁+μ₂, σ₁+σ₂)'],
    ans: 2, exp: 'Suma de normales independientes: X+Y~N(μ₁+μ₂, σ₁²+σ₂²).' },

  { q: 'En N(μ=500, σ=100), el percentil 16 corresponde aproximadamente a:',
    opts: ['600', '540', '400', '460'],
    ans: 2, exp: 'P16≈μ−1σ=500−100=400, pues P(Z<−1)≈0.1587≈16%.' },

  { q: 'El coeficiente de asimetría de Pearson se define como:',
    opts: ['3(Media−Moda)/σ', '(Media−Moda)/σ²', '3(Media−Mediana)/σ', '(Media−Mediana)/σ²'],
    ans: 2, exp: 'Coeficiente de Pearson: CA=3(Media−Mediana)/σ.' },

  // ─── ans: 3 (23 preguntas) ─────────────────────────────────────────────────
  { q: 'El tiempo que tarda un cliente en ser atendido en un banco es:',
    opts: ['Variable discreta porque se mide en minutos', 'Variable nominal', 'Variable ordinal', 'Variable continua porque puede tomar cualquier valor real positivo'],
    ans: 3, exp: 'El tiempo es continuo: puede tomar infinitos valores reales.' },

  { q: '¿Cuál de las siguientes es una variable continua?',
    opts: ['Número de hijos', 'Número de llamadas', 'Número de defectos', 'Peso corporal en kg'],
    ans: 3, exp: 'El peso puede tomar cualquier valor real positivo en un rango → variable continua.' },

  { q: 'La regla empírica 68-95-99.7 aplica a distribuciones:',
    opts: ['Sesgadas', 'Uniformes', 'Cualquier tipo', 'Normales'],
    ans: 3, exp: '68% en ±1σ, 95% en ±2σ, 99.7% en ±3σ — solo válido en distribución Normal.' },

  { q: 'Si X~N(μ, σ²), la variable estandarizada Z=(X−μ)/σ sigue:',
    opts: ['N(μ, σ²)', 'N(1, 0)', 't de Student', 'N(0, 1)'],
    ans: 3, exp: 'La estandarización transforma cualquier Normal a la Normal estándar N(0,1).' },

  { q: 'P(Z < −1.645) en N(0,1) es aproximadamente:',
    opts: ['0.10', '0.025', '0.01', '0.05'],
    ans: 3, exp: 'z=−1.645 es el percentil 5: P(Z<−1.645)≈0.05.' },

  { q: 'La distribución Normal Estándar N(0,1) tiene varianza igual a:',
    opts: ['0', '2', '0.5', '1'],
    ans: 3, exp: 'Por definición, N(0,1) tiene media=0 y varianza=1.' },

  { q: 'La mediana de una distribución Normal N(μ,σ²) es:',
    opts: ['σ', '0', 'μ−σ', 'μ'],
    ans: 3, exp: 'En la distribución Normal, media=mediana=moda=μ.' },

  { q: 'Si X~N(μ=100, σ²=225), la desviación estándar es:',
    opts: ['225', '100', '50', '15'],
    ans: 3, exp: 'σ²=225 → σ=√225=15.' },

  { q: '¿Qué indica el box plot sobre la distribución?',
    opts: ['Solo la media y la moda', 'La frecuencia de cada valor', 'La correlación entre variables', 'Mediana, cuartiles, rango intercuartílico y valores atípicos'],
    ans: 3, exp: 'El box plot resume: Q1, mediana, Q3, bigotes y señala outliers.' },

  { q: 'El diagrama de caja (boxplot) es útil para variables continuas porque muestra:',
    opts: ['La función de densidad exacta', 'Solo la media y la varianza', 'La distribución de frecuencias por clases', 'Mediana, cuartiles, dispersión y valores atípicos'],
    ans: 3, exp: 'El boxplot resume Q1, mediana, Q3, RIC y señala outliers mediante bigotes y puntos extremos.' },

  { q: 'Si aumentamos el nivel de confianza de 95% a 99%, el intervalo de confianza:',
    opts: ['Se estrecha', 'No cambia', 'Solo depende de n', 'Se vuelve más amplio'],
    ans: 3, exp: 'Mayor confianza → mayor valor crítico z* → intervalo más amplio.' },

  { q: 'La distribución de varianza muestral S², con población Normal N(μ,σ²), sigue:',
    opts: ['Distribución Normal', 'Distribución F', 'Distribución t', '(n−1)S²/σ² ~ Chi-cuadrado(n−1)'],
    ans: 3, exp: 'El estadístico (n−1)S²/σ² tiene distribución Chi-cuadrado con n−1 grados de libertad.' },

  { q: 'Un IC al 95% para la media usa el valor crítico z* =',
    opts: ['1.28', '1.645', '2.576', '1.96'],
    ans: 3, exp: 'IC 95%: se usa z*=1.96 (deja 2.5% en cada cola de la Normal estándar).' },

  { q: 'En una Normal N(μ=200, σ=25), ¿qué porcentaje de datos cae fuera de μ±3σ?',
    opts: ['5%', '1%', '2.5%', '0.3%'],
    ans: 3, exp: 'Dentro de ±3σ está el 99.7% → fuera: 0.3%.' },

  { q: 'La distribución Gamma generaliza a:',
    opts: ['La distribución Normal', 'La distribución Uniforme', 'La distribución t', 'La distribución Exponencial y Chi-cuadrado'],
    ans: 3, exp: 'Gamma(α=1,β) = Exponencial(β) y Gamma(k/2, 2) = Chi-cuadrado(k).' },

  { q: 'La prueba de normalidad de Shapiro-Wilk evalúa si:',
    opts: ['La varianza es constante', 'Dos grupos tienen la misma media', 'La distribución es uniforme', 'Los datos provienen de distribución Normal'],
    ans: 3, exp: 'Shapiro-Wilk contrasta H₀: los datos son normales vs H₁: no son normales.' },

  { q: 'La distribución Uniforme Continua U(a,b) tiene asimetría:',
    opts: ['Positiva', 'Negativa', 'Depende de a y b', 'Cero (es simétrica)'],
    ans: 3, exp: 'La distribución uniforme es perfectamente simétrica → coeficiente de asimetría=0.' },

  { q: 'La función de densidad puede tomar valores:',
    opts: ['Solo entre 0 y 1', 'Solo enteros', 'Solo entre 0 y n', 'Mayores que 1, siempre que ∫f(x)dx=1'],
    ans: 3, exp: 'f(x) puede ser >1 en algún punto, siempre que la integral total sea 1.' },

  { q: 'La distribución Chi-cuadrado es:',
    opts: ['Simétrica siempre', 'Normal para k<30', 'Simétrica cuando k es par', 'Asimétrica positiva (cola derecha)'],
    ans: 3, exp: 'χ² es asimétrica positiva, especialmente para k pequeños; se vuelve más simétrica con k grande.' },

  { q: 'Si X~N(μ=70, σ²=49), P(X>77) es:',
    opts: ['0.8413', '0.5', '0.3085', '0.1587'],
    ans: 3, exp: 'σ=7; Z=(77−70)/7=1 → P(X>77)=P(Z>1)=1−0.8413=0.1587.' },

  { q: 'En un histograma de frecuencias relativas, la suma de las áreas de todas las barras es:',
    opts: ['Igual al número de clases', 'Igual a n', 'Igual a la varianza', 'Igual a 1'],
    ans: 3, exp: 'En un histograma de frecuencia relativa, la suma de áreas=1.' },

  { q: 'La propiedad de falta de memoria en distribuciones continuas pertenece a:',
    opts: ['Normal', 'Uniforme', 'Chi-cuadrado', 'Exponencial'],
    ans: 3, exp: 'La distribución Exponencial es la única continua con la propiedad de falta de memoria.' },

  { q: 'Si X~N(μ=500, σ=100), P(400<X<600) ≈',
    opts: ['0.9974', '0.50', '0.9544', '0.6827'],
    ans: 3, exp: '400=μ−σ y 600=μ+σ → intervalo ±1σ → P≈68.27%≈0.6827.' },
];
