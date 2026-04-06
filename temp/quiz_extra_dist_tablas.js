const EXTRA_DIST_TABLAS = [
  // --- TABLA Z: LECTURAS DIRECTAS ---
  { q: 'Según la tabla Z, P(Z < 1.28) es aproximadamente:',
    opts: ['0.8997', '0.9750', '0.8413', '0.9500'],
    ans: 0, exp: 'De la tabla normal estándar: Φ(1.28) ≈ 0.8997.' },

  { q: 'Según la tabla Z, P(Z < 0.00) es:',
    opts: ['0.0000', '1.0000', '0.5000', '0.3989'],
    ans: 2, exp: 'Por simetría, la mitad del área queda a la izquierda de z=0: Φ(0) = 0.5000.' },

  { q: 'Según la tabla Z, P(Z < −1.96) es aproximadamente:',
    opts: ['0.0250', '0.9750', '0.0500', '0.4750'],
    ans: 0, exp: 'Por simetría: P(Z < −1.96) = 1 − P(Z < 1.96) = 1 − 0.9750 = 0.0250.' },

  { q: 'P(Z > 1.645) en la tabla normal estándar es aproximadamente:',
    opts: ['0.0250', '0.0500', '0.9500', '0.1587'],
    ans: 1, exp: 'Φ(1.645) ≈ 0.9500 → P(Z > 1.645) = 1 − 0.9500 = 0.0500.' },

  { q: '¿Qué valor de z satisface P(Z < z) = 0.9750?',
    opts: ['1.28', '1.96', '1.645', '2.576'],
    ans: 1, exp: 'El percentil 97.5 de la normal estándar es z = 1.96.' },

  { q: 'P(Z < 2.33) según la tabla Z es aproximadamente:',
    opts: ['0.9901', '0.9750', '0.9772', '0.9938'],
    ans: 0, exp: 'Φ(2.33) ≈ 0.9901.' },

  { q: 'P(−1.645 < Z < 1.645) es aproximadamente:',
    opts: ['0.9545', '0.9000', '0.9500', '0.8000'],
    ans: 1, exp: 'Área central simétrica: 1 − 2×0.05 = 0.90.' },

  { q: 'P(Z < 1.65) según la tabla Z es aproximadamente:',
    opts: ['0.9495', '0.9505', '0.9500', '0.9750'],
    ans: 1, exp: 'Φ(1.65) ≈ 0.9505.' },

  { q: '¿Qué valor de z cumple P(Z < z) = 0.9990?',
    opts: ['2.576', '3.09', '2.33', '3.50'],
    ans: 1, exp: 'El percentil 99.9% corresponde a z ≈ 3.09.' },

  { q: 'P(Z < 0.50) según la tabla Z es aproximadamente:',
    opts: ['0.7500', '0.5000', '0.6915', '0.6000'],
    ans: 2, exp: 'Φ(0.50) ≈ 0.6915.' },

  { q: 'P(Z > −1.28) en la distribución normal estándar es:',
    opts: ['0.8997', '0.1003', '0.5000', '0.6915'],
    ans: 0, exp: 'P(Z > −1.28) = P(Z < 1.28) = 0.8997 por simetría.' },

  // --- COLA DERECHA VS COLA IZQUIERDA ---
  { q: 'Al usar la tabla Z acumulada (de cola izquierda), para hallar P(Z > z) se debe:',
    opts: ['Calcular 1 − Φ(z)', 'Leer directamente el valor de la tabla', 'Dividir Φ(z) entre 2', 'Multiplicar Φ(z) por 2'],
    ans: 0, exp: 'La tabla da P(Z < z) = Φ(z). La cola derecha es 1 − Φ(z).' },

  { q: 'Para hallar P(Z > 1.50) con la tabla acumulada, se calcula:',
    opts: ['0.9332/2', '1 − 0.9332 = 0.0668', '0.9332', '2×0.9332'],
    ans: 1, exp: 'Φ(1.50) = 0.9332 → P(Z > 1.50) = 1 − 0.9332 = 0.0668.' },

  { q: 'En una prueba unilateral izquierda con α=0.05, el valor crítico z es:',
    opts: ['1.96', '1.645', '−1.645', '−1.96'],
    ans: 2, exp: 'Cola izquierda: se busca z tal que Φ(z) = 0.05 → z = −1.645.' },

  { q: 'En una prueba bilateral con α=0.01, los valores críticos z son:',
    opts: ['±2.576', '±1.96', '±2.33', '±1.645'],
    ans: 0, exp: 'α/2 = 0.005 → z₀.₀₀₅ = 2.576. Se usan ±2.576.' },

  { q: '¿Cuál es el valor crítico z para una prueba unilateral derecha con α=0.01?',
    opts: ['1.96', '1.645', '2.326', '2.576'],
    ans: 2, exp: 'Cola derecha α=0.01: Φ(z)=0.99 → z ≈ 2.326.' },

  // --- LECTURA BILATERAL (α/2) ---
  { q: 'Para un intervalo de confianza del 90% bilateral, el valor z es:',
    opts: ['2.576', '1.28', '1.645', '1.96'],
    ans: 2, exp: 'NC=90% → α=0.10 → α/2=0.05 → z₀.₀₅ = 1.645.' },

  { q: 'Para un IC del 99% bilateral, el valor z es:',
    opts: ['2.576', '1.96', '1.645', '2.33'],
    ans: 0, exp: 'NC=99% → α=0.01 → α/2=0.005 → z₀.₀₀₅ = 2.576.' },

  { q: 'Si α=0.05 en una prueba bilateral, cada cola tiene un área de:',
    opts: ['0.10', '0.025', '0.975', '0.05'],
    ans: 1, exp: 'Prueba bilateral: α se divide entre 2 → cada cola = α/2 = 0.025.' },

  { q: 'Para un IC del 98% bilateral, el valor crítico z es:',
    opts: ['1.960', '2.054', '2.326', '2.576'],
    ans: 2, exp: 'NC=98% → α/2=0.01 → z₀.₀₁ ≈ 2.326.' },

  // --- TABLA t DE STUDENT ---
  { q: 'El valor crítico t con gl=5 y α=0.05 (bilateral) es aproximadamente:',
    opts: ['2.571', '2.015', '1.960', '4.032'],
    ans: 0, exp: 't(5, 0.025) = 2.571. Con pocos grados de libertad, el valor crítico aumenta.' },

  { q: 'El valor crítico t con gl=20 y α=0.05 (bilateral) es aproximadamente:',
    opts: ['2.086', '1.725', '2.228', '1.960'],
    ans: 0, exp: 't(20, 0.025) = 2.086.' },

  { q: 'El valor crítico t con gl=30 y α=0.05 (bilateral) es aproximadamente:',
    opts: ['2.228', '2.042', '1.960', '1.697'],
    ans: 1, exp: 't(30, 0.025) = 2.042. Muy próximo ya al z = 1.96.' },

  { q: 'Con gl=1 y α=0.05 bilateral, el valor t es:',
    opts: ['12.706', '6.314', '2.571', '63.656'],
    ans: 0, exp: 't(1, 0.025) = 12.706. Con un solo grado de libertad las colas son muy pesadas.' },

  { q: 'En la tabla t, para gl=∞ y α=0.05 bilateral, el valor es:',
    opts: ['2.576', '1.960', '1.645', '2.326'],
    ans: 1, exp: 'Con gl→∞ la t converge a Z: t(∞, 0.025) = 1.960.' },

  { q: 'Si n=16 observaciones, ¿cuántos grados de libertad tiene la distribución t para una media?',
    opts: ['16', '17', '14', '15'],
    ans: 3, exp: 'gl = n − 1 = 16 − 1 = 15.' },

  { q: 'El valor crítico t con gl=15 y α=0.10 (bilateral) es aproximadamente:',
    opts: ['1.341', '1.753', '2.131', '2.947'],
    ans: 1, exp: 't(15, 0.05) = 1.753.' },

  { q: 'En una prueba t unilateral derecha con gl=12 y α=0.05, el valor crítico es:',
    opts: ['1.645', '2.228', '1.782', '2.179'],
    ans: 2, exp: 't(12, 0.05) una cola = 1.782.' },

  { q: '¿Por qué la distribución t tiene colas más pesadas que la normal?',
    opts: ['Porque se estima σ con S, lo que añade incertidumbre', 'Porque su media no es cero', 'Porque solo se usa con n < 10', 'Por el principio central del límite'],
    ans: 0, exp: 'Al estimar σ con S existe incertidumbre adicional, produciendo colas más amplias que la normal estándar.' },

  { q: 'Para una prueba t con dos muestras independientes de n₁=10 y n₂=12, los grados de libertad son:',
    opts: ['22', '20', '21', '10'],
    ans: 1, exp: 'gl = n₁ + n₂ − 2 = 10 + 12 − 2 = 20.' },

  // --- TABLA CHI-CUADRADO ---
  { q: 'El valor χ² con gl=5 y α=0.05 (cola derecha) es aproximadamente:',
    opts: ['11.07', '9.49', '12.59', '7.81'],
    ans: 0, exp: 'χ²(5, 0.05) = 11.07.' },

  { q: 'El valor χ² con gl=10 y α=0.05 (cola derecha) es aproximadamente:',
    opts: ['15.99', '16.92', '20.48', '18.31'],
    ans: 3, exp: 'χ²(10, 0.05) = 18.31.' },

  { q: 'En una prueba chi-cuadrado de independencia con una tabla 3×4, los grados de libertad son:',
    opts: ['12', '6', '11', '7'],
    ans: 1, exp: 'gl = (filas−1)×(columnas−1) = (3−1)×(4−1) = 2×3 = 6.' },

  { q: 'En una prueba chi-cuadrado de bondad de ajuste con 5 categorías, los grados de libertad son:',
    opts: ['5', '6', '3', '4'],
    ans: 3, exp: 'gl = k − 1 = 5 − 1 = 4.' },

  { q: 'La distribución chi-cuadrado es:',
    opts: ['Asimétrica hacia la derecha y solo toma valores positivos', 'Simétrica como la normal', 'Puede tomar valores negativos', 'Siempre tiene media = 1'],
    ans: 0, exp: 'Chi-cuadrado: suma de cuadrados de normales → solo valores ≥ 0, sesgada a la derecha.' },

  { q: 'La media de la distribución chi-cuadrado con gl grados de libertad es:',
    opts: ['gl', 'gl/2', '√(2·gl)', '1'],
    ans: 0, exp: 'E(χ²) = gl. La varianza es 2·gl.' },

  { q: 'En una tabla chi-cuadrado, la columna α=0.025 representa:',
    opts: ['El valor χ² que deja un 2.5% de área a la derecha', 'El valor con 2.5% a la izquierda', 'La mitad del nivel de significancia', 'El intervalo bilateral'],
    ans: 0, exp: 'La tabla chi-cuadrado es de cola derecha: χ²(gl, 0.025) deja P=0.025 en la cola superior.' },

  { q: 'El valor χ² con gl=1 y α=0.05 (cola derecha) es:',
    opts: ['3.841', '5.991', '2.706', '7.879'],
    ans: 0, exp: 'χ²(1, 0.05) = 3.841.' },

  // --- TABLA F DE SNEDECOR ---
  { q: 'En ANOVA con k=4 grupos y n=20 observaciones totales, los grados de libertad del numerador son:',
    opts: ['3', '4', '16', '19'],
    ans: 0, exp: 'gl₁ = k − 1 = 4 − 1 = 3.' },

  { q: 'En ANOVA con k=4 grupos y n=20 observaciones totales, los grados de libertad del denominador son:',
    opts: ['19', '3', '16', '20'],
    ans: 2, exp: 'gl₂ = n − k = 20 − 4 = 16.' },

  { q: 'El valor crítico F con gl₁=3, gl₂=16 y α=0.05 es aproximadamente:',
    opts: ['2.93', '3.24', '4.49', '5.29'],
    ans: 1, exp: 'F(3, 16, 0.05) ≈ 3.24 (de tabla F estándar).' },

  { q: 'La distribución F de Snedecor se usa en ANOVA para:',
    opts: ['Comparar varianzas y contrastar medias de varios grupos', 'Probar una sola media', 'Calcular intervalos para proporciones', 'Probar independencia en tablas de contingencia'],
    ans: 0, exp: 'F = CMentre / CMdentro. Mide si la variabilidad entre grupos supera la variabilidad interna.' },

  { q: '¿Qué relación existe entre F y t de Student?',
    opts: ['F = t/2', 't = F²', 'No tienen relación', 'F(1, gl₂) = t²(gl₂)'],
    ans: 3, exp: 'Cuando gl₁=1, la distribución F con (1, n−1) grados de libertad es igual al cuadrado de t(n−1).' },

  // --- TABLA BINOMIAL ---
  { q: 'Si X ~ Binomial(n=10, p=0.5), P(X = 5) es aproximadamente:',
    opts: ['0.3125', '0.1667', '0.5000', '0.2461'],
    ans: 3, exp: 'P(X=5) = C(10,5)·0.5¹⁰ = 252/1024 ≈ 0.2461.' },

  { q: 'Si X ~ Binomial(n=5, p=0.4), P(X = 2) es:',
    opts: ['0.2304', '0.2592', '0.1296', '0.3456'],
    ans: 3, exp: 'C(5,2)·0.4²·0.6³ = 10·0.16·0.216 = 0.3456.' },

  { q: 'Si X ~ Binomial(n=8, p=0.3), la media E(X) es:',
    opts: ['3.0', '2.0', '4.0', '2.4'],
    ans: 3, exp: 'E(X) = n·p = 8×0.3 = 2.4.' },

  { q: 'Si X ~ Binomial(n=10, p=0.2), la varianza Var(X) es:',
    opts: ['2.0', '0.16', '2.4', '1.6'],
    ans: 3, exp: 'Var(X) = n·p·q = 10×0.2×0.8 = 1.6.' },

  { q: 'La distribución Binomial se aplica cuando:',
    opts: ['Los ensayos tienen más de dos resultados posibles', 'El número de ensayos varía', 'La probabilidad de éxito cambia en cada ensayo', 'Hay n ensayos independientes con éxito (p) o fracaso (1−p)'],
    ans: 3, exp: 'Binomial: n fijo, ensayos independientes, P(éxito)=p constante, solo dos resultados.' },

  { q: 'Si X ~ Binomial(n=6, p=0.5), P(X = 0) es:',
    opts: ['0.5000', '0.0625', '0.1562', '0.0156'],
    ans: 3, exp: 'P(X=0) = (0.5)⁶ = 1/64 ≈ 0.0156.' },

  { q: 'Si X ~ Binomial(n=4, p=0.3), P(X ≤ 1) es:',
    opts: ['0.3483', '0.2401', '0.7599', '0.6517'],
    ans: 3, exp: 'P(X=0) = 0.7⁴ = 0.2401; P(X=1) = C(4,1)·0.3·0.7³ = 0.4116. Suma = 0.6517.' },

  { q: 'Para X ~ Binomial(n=3, p=0.5), P(X = 3) es:',
    opts: ['0.375', '0.250', '0.500', '0.125'],
    ans: 3, exp: 'P(X=3) = C(3,3)·0.5³ = 0.125.' },

  { q: 'La desviación estándar de X ~ Binomial(n=25, p=0.4) es:',
    opts: ['√10 ≈ 3.162', '10', '6', '√6 ≈ 2.449'],
    ans: 3, exp: 'σ = √(n·p·q) = √(25·0.4·0.6) = √6 ≈ 2.449.' },

  // --- TABLA POISSON ---
  { q: 'Si X ~ Poisson(λ=4), P(X = 0) es:',
    opts: ['4·e⁻⁴', '1/4', '0.40', 'e⁻⁴ ≈ 0.0183'],
    ans: 3, exp: 'P(X=0) = e⁻λ = e⁻⁴ ≈ 0.0183.' },

  { q: 'Si X ~ Poisson(λ=2), P(X = 2) es:',
    opts: ['e⁻² ≈ 0.1353', '4e⁻²/2 = 0.2707', '1/2', '2e⁻² ≈ 0.2707'],
    ans: 3, exp: 'P(X=2) = e⁻²·2²/2! = e⁻²·4/2 = 2e⁻² ≈ 0.2707.' },

  { q: 'Para X ~ Poisson(λ=3), la media y la varianza son respectivamente:',
    opts: ['3 y 9', '√3 y 3', '3 y √3', '3 y 3'],
    ans: 3, exp: 'En Poisson E(X) = Var(X) = λ = 3.' },

  { q: 'Si X ~ Poisson(λ=1), P(X = 1) es:',
    opts: ['1 − e⁻¹', 'e⁻²', '0.5000', 'e⁻¹ ≈ 0.3679'],
    ans: 3, exp: 'P(X=1) = e⁻¹·1¹/1! = e⁻¹ ≈ 0.3679.' },

  { q: 'La distribución de Poisson es apropiada para modelar:',
    opts: ['Proporción de éxitos en n ensayos', 'Duración de un proceso continuo', 'Diferencias entre dos medias', 'Número de eventos raros en un intervalo fijo de tiempo o espacio'],
    ans: 3, exp: 'Poisson modela conteos de eventos raros: llamadas por hora, defectos por metro, etc.' },

  { q: 'Si X ~ Poisson(λ=5), E(X²) es:',
    opts: ['25', '5', '10', '30'],
    ans: 3, exp: 'E(X²) = Var(X) + [E(X)]² = λ + λ² = 5 + 25 = 30.' },

  // --- VALOR CRÍTICO vs VALOR DE TABLA ---
  { q: 'El "valor crítico" en una prueba de hipótesis es:',
    opts: ['El p-valor calculado', 'La media muestral', 'El error estándar', 'El umbral de la estadística de prueba que separa la región de rechazo'],
    ans: 3, exp: 'El valor crítico proviene de la tabla de la distribución (z, t, F, χ²) según α y gl.' },

  { q: 'Si el estadístico de prueba z = 2.10 y el valor crítico (bilateral, α=0.05) es 1.96, se concluye:',
    opts: ['No rechazar H₀', 'Aumentar el tamaño de muestra', 'El p-valor es mayor que 0.05', 'Rechazar H₀ porque |z| > z_crítico'],
    ans: 3, exp: '|2.10| = 2.10 > 1.96 → el estadístico cae en la región de rechazo.' },

  { q: 'Si el estadístico t = 1.80 y el valor crítico (unilateral derecha, gl=15, α=0.05) es 1.753, se concluye:',
    opts: ['No rechazar H₀', 'Usar la tabla chi-cuadrado', 'Duplicar α', 'Rechazar H₀ porque t > t_crítico'],
    ans: 3, exp: '1.80 > 1.753 → cae en la región de rechazo de la cola derecha.' },

  // --- DISTRIBUCIONES CONTINUAS vs DISCRETAS EN TABLAS ---
  { q: '¿Cuál de las siguientes distribuciones es CONTINUA?',
    opts: ['Binomial', 'Poisson', 'Hipergeométrica', 'Normal estándar'],
    ans: 3, exp: 'La normal estándar es continua. Binomial, Poisson e Hipergeométrica son discretas.' },

  { q: '¿Cuál de las siguientes distribuciones es DISCRETA?',
    opts: ['Normal', 'Exponencial', 't de Student', 'Poisson'],
    ans: 3, exp: 'Poisson es discreta (cuenta eventos). Las otras tres son continuas.' },

  { q: 'En una distribución continua (como la Normal), P(X = a) es:',
    opts: ['0.5', 'depende de a', 'indefinido', '0'],
    ans: 3, exp: 'En distribuciones continuas, la probabilidad en un punto exacto es siempre cero.' },

  { q: 'Para una distribución discreta (como Binomial), P(X ≤ 3) se calcula como:',
    opts: ['P(X=3)', 'El área bajo la curva hasta 3', '1−P(X=3)', 'P(X=0)+P(X=1)+P(X=2)+P(X=3)'],
    ans: 3, exp: 'La FDA discreta acumula las probabilidades individuales hasta el valor dado.' },

  // --- INTERPOLACIÓN EN TABLAS ---
  { q: '¿Cuándo es necesario interpolar en una tabla estadística?',
    opts: ['Siempre que se use la tabla t', 'Solo en la tabla F', 'Cuando n < 30', 'Cuando el valor buscado no está exactamente en la tabla'],
    ans: 3, exp: 'La interpolación lineal aproxima valores intermedios no listados en la tabla.' },

  // --- GRADOS DE LIBERTAD ---
  { q: 'En una prueba t para una muestra con n=25, los grados de libertad son:',
    opts: ['25', '23', '26', '24'],
    ans: 3, exp: 'gl = n − 1 = 25 − 1 = 24.' },

  { q: 'En una prueba t para dos muestras pareadas con 20 pares, los grados de libertad son:',
    opts: ['38', '20', '18', '19'],
    ans: 3, exp: 'Muestras pareadas: gl = n_pares − 1 = 20 − 1 = 19.' },

  { q: 'En una prueba chi-cuadrado de independencia con tabla 2×2, los grados de libertad son:',
    opts: ['3', '4', '2', '1'],
    ans: 3, exp: 'gl = (2−1)×(2−1) = 1.' },

  { q: 'En una regresión lineal simple con n=20 observaciones, los grados de libertad del error son:',
    opts: ['19', '20', '17', '18'],
    ans: 3, exp: 'gl_error = n − 2 = 20 − 2 = 18 (se estiman β₀ y β₁).' },

  { q: 'En ANOVA con k=5 grupos y n=30 observaciones totales, los grados de libertad del error son:',
    opts: ['4', '29', '5', '25'],
    ans: 3, exp: 'gl_error = n − k = 30 − 5 = 25.' },

  // --- ERRORES COMUNES ---
  { q: 'Un error común al usar la tabla t es:',
    opts: ['Multiplicar el valor por 2 siempre', 'Usar los grados de libertad incorrectos', 'No encontrar el percentil 95', 'Sumar los gl de filas y columnas'],
    ans: 1, exp: 'El error más frecuente es calcular gl=n en lugar de gl=n−1.' },

  { q: 'Un error común al leer la tabla chi-cuadrado es:',
    opts: ['Usar gl = n', 'No encontrar el percentil 95', 'Sumar los gl de filas y columnas', 'Leer la cola izquierda cuando se necesita la derecha'],
    ans: 3, exp: 'La tabla χ² por defecto da cola derecha. Usar el área incorrecta cambia el valor crítico.' },

  { q: 'Cuando la tabla Z da P(Z < z) y se necesita P(Z > z), el error más común es:',
    opts: ['Dividir Φ(z) entre 2', 'Sumar 0.5 al valor de tabla', 'Usar grados de libertad', 'Usar el valor de tabla directamente sin calcular 1 − Φ(z)'],
    ans: 3, exp: 'Hay que calcular 1 − Φ(z) para la cola derecha. Omitir este paso es el error típico.' },

  { q: 'En la tabla t bilateral con α=0.05, se busca la columna α/2 = 0.025 porque:',
    opts: ['La prueba es más conservadora', 'El estadístico t es siempre positivo', 'La tabla solo tiene valores positivos', 'El área de rechazo se divide en dos colas simétricas'],
    ans: 3, exp: 'En prueba bilateral, cada cola tiene α/2 = 0.025. Se busca el valor t que deja 0.025 en cada extremo.' },

  // --- CÁLCULOS NUMÉRICOS USANDO TABLAS ---
  { q: 'Un IC del 95% para μ (σ conocida, n=36, x̄=50, σ=12) tiene límites:',
    opts: ['50 ± 1.96', '50 ± 5.88', '50 ± 2.00', '50 ± 3.92'],
    ans: 3, exp: 'Error = z·(σ/√n) = 1.96·(12/6) = 1.96·2 = 3.92.' },

  { q: 'Un IC del 90% para μ (σ conocida, n=25, x̄=80, σ=10) tiene margen de error:',
    opts: ['1.96', '3.92', '2.58', '3.29'],
    ans: 3, exp: 'Error = z·(σ/√n) = 1.645·(10/5) = 1.645·2 = 3.29.' },

  { q: 'Para X ~ Binomial(n=10, p=0.3), la media y varianza son respectivamente:',
    opts: ['3 y 3', '2.1 y 3', '0.3 y 2.1', '3 y 2.1'],
    ans: 3, exp: 'E(X) = np = 3; Var(X) = np(1−p) = 10·0.3·0.7 = 2.1.' },

  { q: 'Si X ~ N(μ=70, σ=8), P(X > 86) es igual a P(Z > z) donde z es:',
    opts: ['1.645', '1.96', '2.576', '2.00'],
    ans: 3, exp: 'z = (86−70)/8 = 16/8 = 2.00.' },

  { q: 'Si X ~ N(μ=100, σ=15), P(70 < X < 130) es aproximadamente:',
    opts: ['0.6827', '0.9973', '0.9500', '0.9545'],
    ans: 3, exp: 'z₁=(70−100)/15=−2 y z₂=(130−100)/15=2 → P(−2<Z<2) ≈ 0.9545 (regla de las 2 sigmas).' },

  { q: 'Una prueba chi-cuadrado arroja χ²=5.2 con gl=2. Con α=0.05 (valor crítico 5.991), la decisión es:',
    opts: ['Rechazar H₀', 'No hay suficiente información', 'Usar la tabla t', 'No rechazar H₀ porque 5.2 < 5.991'],
    ans: 3, exp: 'El estadístico (5.2) no supera el valor crítico (5.991) → no se rechaza H₀.' },

  { q: 'Para X ~ Poisson(λ=2), P(X ≥ 1) es:',
    opts: ['e⁻² ≈ 0.1353', '2e⁻²', '0.5000', '1 − e⁻² ≈ 0.8647'],
    ans: 3, exp: 'P(X≥1) = 1 − P(X=0) = 1 − e⁻² ≈ 1 − 0.1353 = 0.8647.' },

  { q: 'P(Z < −2.576) en la tabla normal estándar es aproximadamente:',
    opts: ['0.0100', '0.0250', '0.4950', '0.0050'],
    ans: 3, exp: 'Por simetría: P(Z < −2.576) = 1 − P(Z < 2.576) = 1 − 0.9950 = 0.0050.' },

  { q: 'Usando la tabla normal, ¿cuál es el percentil 75 de Z?',
    opts: ['0.500', '1.000', '0.750', '0.674'],
    ans: 3, exp: 'El percentil 75 de N(0,1) se lee en la tabla como Φ(z)=0.75 → z ≈ 0.674.' },

  { q: 'En la tabla t de Student, ¿por qué se busca α/2 para pruebas bilaterales?',
    opts: ['Porque gl = n/2', 'Para convertir t en Z', 'Porque la t es negativa', 'Porque la tabla da valores de cola derecha y la región de rechazo tiene dos colas iguales'],
    ans: 3, exp: 'La tabla t usa la probabilidad de una cola. Para bilateral, cada cola tiene α/2 del área total.' },

  { q: 'Si el p-valor de una prueba chi-cuadrado es 0.03 y α=0.05, se concluye:',
    opts: ['No rechazar H₀', 'Aumentar n', 'Usar la tabla F', 'Rechazar H₀ de independencia'],
    ans: 3, exp: 'p-valor (0.03) < α (0.05) → evidencia suficiente para rechazar H₀ de independencia.' },

  { q: 'En una tabla t de Student de dos colas, si se busca α=0.10, ¿en qué columna se lee?',
    opts: ['α = 0.10, una cola', 'α = 0.20, dos colas', 'α = 0.05, una cola', 'α = 0.05 en la columna de dos colas'],
    ans: 3, exp: 'Para bilateral α=0.10 → cada cola = 0.05 → se busca la columna "0.05 una cola" o "0.10 dos colas".' },

  { q: 'Si Z ~ N(0,1) y se busca z tal que P(−z < Z < z) = 0.99, ¿cuál es z?',
    opts: ['1.96', '2.326', '3.09', '2.576'],
    ans: 3, exp: 'P(−z < Z < z) = 0.99 → cada cola = 0.005 → z₀.₀₀₅ = 2.576.' },

  { q: 'La tabla Z estándar acumulada da siempre valores de:',
    opts: ['Cola derecha P(Z > z)', 'Cola bilateral P(−z < Z < z)', 'Densidad puntual f(z)', 'Cola izquierda P(Z < z)'],
    ans: 3, exp: 'La tabla normal más común es acumulada desde −∞ hasta z: P(Z < z) = Φ(z).' },

  { q: 'Si X ~ Binomial(n=20, p=0.5), la media E(X) y la desviación estándar σ son:',
    opts: ['μ=10, σ=5', 'μ=10, σ=2.5', 'μ=5, σ=√5', 'μ=10, σ=√5'],
    ans: 3, exp: 'E(X)=np=20·0.5=10; σ=√(np(1−p))=√(20·0.5·0.5)=√5 ≈ 2.236.' },

  { q: 'Al leer la tabla F para α=0.05 con gl₁=2 y gl₂=10, el valor crítico es aproximadamente:',
    opts: ['3.71', '5.46', '4.10', '4.46'],
    ans: 1, exp: 'F(2, 10, 0.05) ≈ 4.10. Este es el valor que deja 5% en la cola derecha.' },
];
