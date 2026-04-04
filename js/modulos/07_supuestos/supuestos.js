/* ============================================
   STATIA GO — js/modulos/07_supuestos/supuestos.js
   Módulo: Supuestos Estadísticos
   Verificación de supuestos para modelos estadísticos
   by Jose Rodas
   ============================================ */

const ModSupuestos = {

  render(area) {
    area.innerHTML = `
      <div class="card" style="margin-top:0">
        <div class="tb tb-sup">🔬 Supuestos Estadísticos</div>
        <div class="mod-tabs">
          <button class="mod-tab active" onclick="ModSupuestos._tab('teoria',this)">📖 Teoría</button>
          <button class="mod-tab" onclick="ModSupuestos._tab('calc',this)">📊 Verificar Normalidad</button>
        </div>
        <div id="sup-teoria">${this._teoria()}</div>
        <div id="sup-calc" style="display:none">${this._form()}</div>
      </div>`;
    Utils.renderKaTeX(area);
  },

  _tab(id, btn) {
    ['teoria','calc'].forEach(t =>
      document.getElementById('sup-'+t).style.display = t===id ? '' : 'none'
    );
    btn.closest('.mod-tabs').querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    if (id !== 'calc') Utils.clearResults();
  },

  _teoria() {
    return `
    <div class="step" style="border-left-color:var(--accent)">
      <div class="step-num">¿Por qué importan los supuestos?</div>
      <div class="step-title">La base de la inferencia estadística</div>
      Todo modelo estadístico descansa sobre supuestos. Cuando esos supuestos se cumplen, las pruebas y predicciones son válidas. Cuando se violan, los resultados pueden ser completamente engañosos aunque los cálculos sean correctos. Verificar supuestos <strong>no es opcional</strong>: es parte del análisis.
    </div>

    <div class="fml-section" style="color:var(--accent)">Supuesto 1 — Linealidad</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">¿Qué significa?</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">Definición</span><span class="fml-val">La relación entre X (predictor) e Y (respuesta) debe ser lineal: cada unidad de cambio en X produce el mismo cambio en Y sin importar el nivel de X.</span></div>
          <div class="fml-row"><span class="fml-label">Si se viola</span><span class="fml-val">El modelo subestima o sobreestima sistemáticamente. Los residuos mostrarán un patrón curvo, la predicción será sesgada.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo detectar</span><span class="fml-val">Gráfico de dispersión X vs Y (debe parecer una nube alrededor de una línea recta). Gráfico de residuos vs valores ajustados (debe ser aleatorio, sin curva).</span></div>
          <div class="fml-row"><span class="fml-label">Cómo corregir</span><span class="fml-val">Transformaciones: log(Y), √Y, 1/Y, log(X). Regresión polinómica: añadir X² o X³ al modelo. Regresión no lineal.</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section" style="color:var(--accent2)">Supuesto 2 — Normalidad de residuos</div>
    <div class="fml-grid">
      <div class="fml-card b">
        <div class="fml-name">¿Qué significa?</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">Definición</span><span class="fml-val">Los residuos del modelo (errores: Y − Ŷ) deben seguir una distribución normal con media 0. No son los datos originales los que deben ser normales, sino los <em>residuos</em>.</span></div>
          <div class="fml-row"><span class="fml-label">Si se viola</span><span class="fml-val">Los intervalos de confianza y los valores p dejan de ser exactos. Las pruebas t y F sobre coeficientes son inválidas con muestras pequeñas.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo detectar</span><span class="fml-val">Histograma de residuos (¿forma de campana?). Gráfico Q-Q (¿puntos sobre la línea diagonal?). Prueba de Shapiro-Wilk (n &lt; 50) o Jarque-Bera (usa asimetría g₁ y curtosis g₂). Usa la pestaña "Verificar Normalidad" de este módulo.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo corregir</span><span class="fml-val">Con n grande (&gt; 30): el Teorema Central del Límite rescata el análisis. Transformaciones: log(Y), Box-Cox. Modelos alternativos: GLM con distribución apropiada.</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section" style="color:var(--gold)">Supuesto 3 — Homocedasticidad</div>
    <div class="fml-grid">
      <div class="fml-card w">
        <div class="fml-name">¿Qué significa?</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">Definición</span><span class="fml-val">La varianza de los residuos debe ser constante para todos los valores de X. "Homo" = igual, "cedasticidad" = dispersión. Lo opuesto es heterocedasticidad.</span></div>
          <div class="fml-row"><span class="fml-label">Si se viola</span><span class="fml-val">Los errores estándar de los coeficientes son incorrectos. Afecta directamente a los valores p y los intervalos de confianza. El estimador MCO sigue siendo insesgado pero ya no es eficiente.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo detectar</span><span class="fml-val">Gráfico de residuos vs valores ajustados: busca un patrón "embudo" (varianza que crece o decrece). Prueba de Breusch-Pagan o prueba de Levene para grupos.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo corregir</span><span class="fml-val">Transformar Y (log o raíz cuadrada suelen estabilizar varianza). Regresión por mínimos cuadrados ponderados (WLS). Errores estándar robustos de Huber-White.</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section" style="color:var(--accent3)">Supuesto 4 — Independencia</div>
    <div class="fml-grid">
      <div class="fml-card r">
        <div class="fml-name">¿Qué significa?</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">Definición</span><span class="fml-val">Las observaciones (y sus residuos) deben ser independientes entre sí. El error de una observación no debe predecir el error de la siguiente. Es crítico en datos de series de tiempo o datos con estructura jerárquica.</span></div>
          <div class="fml-row"><span class="fml-label">Si se viola</span><span class="fml-val">Autocorrelación positiva: se subestima la varianza, se sobreestima la significancia. Los resultados parecen más precisos de lo que son realmente. Riesgo de falsos positivos.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo detectar</span><span class="fml-val">Gráfico de residuos vs tiempo/orden de observación. Estadístico Durbin-Watson (DW): DW ≈ 2 → sin autocorrelación; DW &lt; 1 → autocorrelación positiva fuerte; DW &gt; 3 → autocorrelación negativa.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo corregir</span><span class="fml-val">Incluir términos de retardo (lag) en el modelo. Modelos ARIMA para series de tiempo. Modelos de efectos mixtos para datos jerárquicos o repetidos.</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section" style="color:var(--muted)">Supuesto 5 — No multicolinealidad (regresión múltiple)</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">¿Qué significa?</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">Definición</span><span class="fml-val">En regresión múltiple (más de un predictor), los predictores no deben estar altamente correlacionados entre sí. Si X₁ y X₂ miden casi lo mismo, el modelo no puede separar su efecto individual.</span></div>
          <div class="fml-row"><span class="fml-label">Si se viola</span><span class="fml-val">Los coeficientes se vuelven inestables y difíciles de interpretar. Los errores estándar se inflan enormemente. Los valores p son grandes (no significativos) aunque el modelo en conjunto sí prediga bien.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo detectar</span><span class="fml-val">Matriz de correlación entre predictores (|r| &gt; 0.8 es señal de alerta). Factor de Inflación de Varianza (VIF): VIF &lt; 5 = aceptable; VIF 5–10 = moderado; VIF &gt; 10 = problema grave.</span></div>
          <div class="fml-row"><span class="fml-label">Cómo corregir</span><span class="fml-val">Eliminar uno de los predictores redundantes. Combinar predictores correlacionados (PCA). Regularización: Ridge (L2) penaliza coeficientes y reduce el efecto de la multicolinealidad.</span></div>
        </div>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--gold)">
      <div class="step-num">Regla de oro</div>
      <div class="step-title">¿En qué orden verificar?</div>
      <strong>1. Linealidad</strong> → Gráfico X vs Y antes de ajustar.<br>
      <strong>2. Normalidad de residuos</strong> → Tras ajustar: histograma + Q-Q + Jarque-Bera.<br>
      <strong>3. Homocedasticidad</strong> → Residuos vs valores ajustados: ¿hay embudo?<br>
      <strong>4. Independencia</strong> → Durbin-Watson si los datos tienen orden temporal.<br>
      <strong>5. Multicolinealidad</strong> → VIF solo si usas múltiples predictores.<br><br>
      <span style="color:var(--muted);font-size:.88rem;">Usa la pestaña <strong>Verificar Normalidad</strong> para calcular Jarque-Bera y analizar tus residuos con ayuda de IA.</span>
    </div>`;
  },

  _form() {
    return `
      <div class="section-title">Verificar normalidad — Prueba de Jarque-Bera</div>

      <div class="step" style="border-left-color:var(--accent2);margin-bottom:1rem">
        <div class="step-num">¿Qué hace esta calculadora?</div>
        A partir de tus datos (o residuos de un modelo), calcula la <strong>asimetría g₁</strong>, la <strong>curtosis en exceso g₂</strong> y el <strong>estadístico Jarque-Bera</strong> para evaluar si la muestra es compatible con una distribución normal.
      </div>

      <label class="inp-label">Datos — separados por coma (pueden ser residuos de una regresión)</label>
      <textarea class="inp" id="sup-datos" rows="3" placeholder="Ej: 2.3, 4.5, 3.1, 5.2, 4.8, 3.7, 4.1, 5.0"></textarea>

      <button class="btn-calc" onclick="ModSupuestos.calcular()">Calcular normalidad →</button>
      <button class="btn-s" onclick="ModSupuestos.ejemplo()" style="width:100%;padding:9px;background:transparent;border:1px solid var(--border);border-radius:9px;color:var(--muted);font-family:'DM Mono',monospace;font-size:0.72rem;cursor:pointer;margin-top:6px">📋 Cargar ejemplo</button>
      <div id="sup-resultado"></div>`;
  },

  _parseNums(str) {
    return str.split(/[\s,;]+/).map(Number).filter(v => !isNaN(v) && v !== null && v !== undefined);
  },

  _chiCDFApprox(x, df) {
    // Chi-square CDF approximation with df degrees of freedom
    // Using regularized incomplete gamma function approximation
    if (x <= 0) return 0;
    // For df=2: CDF = 1 - exp(-x/2)
    if (df === 2) return 1 - Math.exp(-x / 2);
    // General: use Wilson-Hilferty normal approximation
    const k = df / 2;
    const mu = df;
    const sigma = Math.sqrt(2 * df);
    const z = (Math.pow(x / df, 1/3) - (1 - 2/(9*df))) / Math.sqrt(2/(9*df));
    // Fallback: aproximación normal estándar via erf
    if (typeof ModDistribuciones !== 'undefined' && ModDistribuciones._normalCDF) {
      return ModDistribuciones._normalCDF(z);
    }
    // Aproximación propia si ModDistribuciones no está disponible
    return 0.5 * (1 + Math.sign(z) * Math.sqrt(1 - Math.exp(-2 * z * z / Math.PI)));
  },

  async calcular() {
    const res = document.getElementById('sup-resultado');
    try {
      const raw = document.getElementById('sup-datos').value.trim();
      if (!raw) throw new Error('Ingresa los datos en el campo de texto.');
      const datos = this._parseNums(raw);
      if (datos.length < 4) throw new Error('Se necesitan al menos 4 observaciones para calcular Jarque-Bera.');

      const n = datos.length;

      // Mean
      const mean = datos.reduce((a, b) => a + b, 0) / n;

      // Standard deviation (sample)
      const variance = datos.reduce((a, v) => a + Math.pow(v - mean, 2), 0) / (n - 1);
      const std = Math.sqrt(variance);

      if (std === 0) throw new Error('Todos los datos son iguales — la varianza es cero, no se puede calcular la prueba.');

      // Standardized values
      const z = datos.map(v => (v - mean) / std);

      // Skewness g1 (Fisher's moment coefficient)
      const sumZ3 = z.reduce((a, zi) => a + Math.pow(zi, 3), 0);
      const g1 = (n / ((n - 1) * (n - 2))) * sumZ3;

      // Excess kurtosis g2
      const sumZ4 = z.reduce((a, zi) => a + Math.pow(zi, 4), 0);
      const g2 = (n * (n + 1) / ((n - 1) * (n - 2) * (n - 3))) * sumZ4
               - 3 * Math.pow(n - 1, 2) / ((n - 2) * (n - 3));

      // Jarque-Bera statistic
      const JB = (n / 6) * (Math.pow(g1, 2) + Math.pow(g2, 2) / 4);

      // p-value using chi-square CDF with 2 df
      const pval = 1 - this._chiCDFApprox(JB, 2);

      // Interpretation
      const normalG1 = Math.abs(g1) < 0.5;
      const normalG2 = Math.abs(g2) < 1;
      const normalJB  = pval > 0.05;
      const esNormal  = normalG1 && normalG2 && normalJB;

      // Min and Max for histogram
      const minVal = Math.min(...datos);
      const maxVal = Math.max(...datos);

      // Build histogram bins (Sturges rule)
      const bins = Math.max(5, Math.ceil(1 + 3.322 * Math.log10(n)));
      const binWidth = (maxVal - minVal) / bins;
      const counts = Array(bins).fill(0);
      datos.forEach(v => {
        let idx = Math.floor((v - minVal) / binWidth);
        if (idx >= bins) idx = bins - 1;
        counts[idx]++;
      });
      const labels = counts.map((_, i) => Utils.fmt(minVal + i * binWidth + binWidth / 2, 2));

      // Render results
      res.innerHTML = `
        <div class="section-title">Resultados</div>
        <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
          <div class="stat-box">
            <span class="stat-val" style="color:var(--accent)">${n}</span>
            <span class="stat-lbl">n (observaciones)</span>
          </div>
          <div class="stat-box">
            <span class="stat-val">${Utils.fmt(mean, 4)}</span>
            <span class="stat-lbl">Media (x̄)</span>
          </div>
          <div class="stat-box">
            <span class="stat-val">${Utils.fmt(std, 4)}</span>
            <span class="stat-lbl">Desv. estándar (S)</span>
          </div>
        </div>

        <div class="stats-grid" style="grid-template-columns:repeat(3,1fr);margin-top:8px">
          <div class="stat-box">
            <span class="stat-val" style="color:${normalG1 ? 'var(--accent)' : 'var(--accent3)'}">${Utils.fmt(g1, 4)}</span>
            <span class="stat-lbl">Asimetría g₁</span>
          </div>
          <div class="stat-box">
            <span class="stat-val" style="color:${normalG2 ? 'var(--accent)' : 'var(--accent3)'}">${Utils.fmt(g2, 4)}</span>
            <span class="stat-lbl">Curtosis en exceso g₂</span>
          </div>
          <div class="stat-box">
            <span class="stat-val" style="color:${normalJB ? 'var(--accent)' : 'var(--accent3)'}">${Utils.fmt(JB, 4)}</span>
            <span class="stat-lbl">Estadístico JB</span>
          </div>
        </div>

        <div class="stats-grid" style="grid-template-columns:repeat(2,1fr);margin-top:8px">
          <div class="stat-box">
            <span class="stat-val" style="color:${normalJB ? 'var(--accent)' : 'var(--accent3)'}">${Utils.fmt(pval, 4)}</span>
            <span class="stat-lbl">Valor p (χ² gl=2)</span>
          </div>
          <div class="stat-box">
            <span class="stat-val" style="color:var(--muted)">0.05</span>
            <span class="stat-lbl">α (nivel de significancia)</span>
          </div>
        </div>

        <div class="decision-box ${esNormal ? 'ok' : 'warn'}" style="margin-top:10px">
          <div class="dec-title">${esNormal ? '✅ Compatible con normalidad' : '⚠️ Posible desviación de normalidad'}</div>
          ${normalJB
            ? `p = ${Utils.fmt(pval,4)} &gt; 0.05 — No hay evidencia suficiente para rechazar la normalidad.`
            : `p = ${Utils.fmt(pval,4)} ≤ 0.05 — Los datos presentan evidencia contra la normalidad.`
          }<br>
          <span style="color:var(--muted);font-size:.65rem">
            |g₁| = ${Utils.fmt(Math.abs(g1),3)} ${normalG1 ? '&lt; 0.5 ✓' : '≥ 0.5 ✗ (asimetría notable)'} ·
            |g₂| = ${Utils.fmt(Math.abs(g2),3)} ${normalG2 ? '&lt; 1 ✓' : '≥ 1 ✗ (curtosis notable)'}
          </span>
        </div>

        <div class="fml-section">Histograma de los datos</div>
        <div style="position:relative;height:220px;margin-bottom:1rem">
          <canvas id="sup-chart"></canvas>
        </div>

        <div class="fml-section">Guía de interpretación</div>
        <div class="fml-grid">
          <div class="fml-card">
            <div class="fml-name">Asimetría g₁</div>
            <div class="fml-body">
              <div class="fml-row"><span class="fml-label">|g₁| &lt; 0.5</span><span class="fml-val">Aproximadamente simétrica ✓</span></div>
              <div class="fml-row"><span class="fml-label">0.5 ≤ |g₁| &lt; 1</span><span class="fml-val">Asimetría moderada — precaución</span></div>
              <div class="fml-row"><span class="fml-label">|g₁| ≥ 1</span><span class="fml-val">Asimetría fuerte ✗</span></div>
            </div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Curtosis en exceso g₂</div>
            <div class="fml-body">
              <div class="fml-row"><span class="fml-label">|g₂| &lt; 1</span><span class="fml-val">Curtosis similar a normal ✓</span></div>
              <div class="fml-row"><span class="fml-label">g₂ &gt; 1</span><span class="fml-val">Leptocúrtica — colas pesadas</span></div>
              <div class="fml-row"><span class="fml-label">g₂ &lt; -1</span><span class="fml-val">Platicúrtica — colas ligeras</span></div>
            </div>
          </div>
        </div>

        ${AI.loadingBlock('sup-ai')}`;

      // Draw histogram
      const ctx = document.getElementById('sup-chart').getContext('2d');
      if (window._supChart) { window._supChart.destroy(); }
      window._supChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            label: 'Frecuencia',
            data: counts,
            backgroundColor: counts.map((_, i) => `hsla(${150 + i * 15}, 80%, 60%, 0.7)`),
            borderColor: 'rgba(79,255,176,0.9)',
            borderWidth: 1,
            borderRadius: 4,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                title: (items) => `Centro: ${items[0].label}`,
                label: (item) => `Frecuencia: ${item.raw}`
              }
            }
          },
          scales: {
            x: {
              ticks: { color: '#8b9bb4', font: { family: "'DM Mono', monospace", size: 11 } },
              grid: { color: 'rgba(255,255,255,0.05)' },
              title: { display: true, text: 'Valor', color: '#8b9bb4' }
            },
            y: {
              ticks: { color: '#8b9bb4', font: { family: "'DM Mono', monospace", size: 11 } },
              grid: { color: 'rgba(255,255,255,0.05)' },
              title: { display: true, text: 'Frecuencia', color: '#8b9bb4' }
            }
          }
        }
      });

      // AI prompt
      const prompt = `Eres un profesor de estadística. Analiza los siguientes resultados de una prueba de normalidad Jarque-Bera para un conjunto de ${n} datos:

Estadísticas descriptivas:
- n = ${n}
- Media = ${Utils.fmt(mean, 4)}
- Desviación estándar = ${Utils.fmt(std, 4)}

Resultados de normalidad:
- Asimetría g₁ = ${Utils.fmt(g1, 4)} (|g₁| ${normalG1 ? '< 0.5 → simétrica' : '≥ 0.5 → asimétrica'})
- Curtosis en exceso g₂ = ${Utils.fmt(g2, 4)} (|g₂| ${normalG2 ? '< 1 → curtosis normal' : '≥ 1 → curtosis notable'})
- Estadístico Jarque-Bera = ${Utils.fmt(JB, 4)}
- p-valor = ${Utils.fmt(pval, 4)} (${normalJB ? 'p > 0.05: no se rechaza normalidad' : 'p ≤ 0.05: se rechaza normalidad'})

Por favor:
1. Interpreta cada indicador (g₁, g₂, JB) en términos simples
2. Da una conclusión clara sobre si los datos son normales o no
3. Si no son normales, sugiere qué pasos seguir (transformaciones, mayor n, cambio de modelo)
4. Menciona la diferencia entre normalidad de los datos brutos y normalidad de los residuos de un modelo
Responde en español, de manera clara y didáctica para un estudiante universitario.`;

      await AI.render(prompt, 'sup-ai');

    } catch(e) {
      res.innerHTML = `<div class="err">${e.message}</div>`;
    }
  },

  init() {},

  ejemplo() {
    const inp = document.getElementById('sup-datos');
    if (inp) inp.value = '2.3, 4.5, 3.1, 5.2, 4.8, 3.7, 4.1, 5.0, 3.4, 4.6, 2.9, 5.5, 3.8, 4.3, 4.7';
  },

  _error(msg) {
    const res = document.getElementById('sup-resultado');
    if (res) res.innerHTML = `<div class="err">${msg}</div>`;
  },
};
