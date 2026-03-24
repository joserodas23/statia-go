/* ============================================
   STATIA GO — js/modulos/01_descriptiva/continua.js
   Módulo: Variable Cuantitativa Continua
   by Jose Rodas
   ============================================ */

const ModContinua = {

  renderTutorial() {
    document.getElementById('tutorialArea').innerHTML = `
      <div class="card">
        <div class="tb-c tb">📏 Variable Continua</div>
        <div class="card-title">📖 Teoría y fórmulas</div>
        <div class="card-sub">Lee antes de calcular — todas las fórmulas</div>

        <div class="step">
          <div class="step-num">¿Qué es?</div>
          <div class="step-title">Variable cuantitativa continua</div>
          Puede tomar cualquier valor dentro de un intervalo, incluyendo decimales. No hay saltos entre valores.
          <div class="step-note">Ejemplos: peso, talla, temperatura, salario, tiempo, notas con decimales</div>
        </div>

        <div class="fml-section">Tendencia central</div>
        <div class="fml-grid">
          <div class="fml-card">
            <div class="fml-name">Media aritmética</div>
            <div class="fml-formula">${Utils.tex('\\bar{x} = \\dfrac{\\sum x_i}{n}', true)}</div>
            <div class="fml-desc">Suma de todos los valores dividida entre n. Si media ≈ mediana, la distribución es simétrica.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Mediana</div>
            <div class="fml-formula">${Utils.tex('Me_{impar} = X_{\\frac{n+1}{2}}', true)}</div>
            <div class="fml-formula">${Utils.tex('Me_{par} = \\dfrac{X_{\\frac{n}{2}} + X_{\\frac{n}{2}+1}}{2}', true)}</div>
            <div class="fml-desc">Valor central al ordenar los datos. Si media &gt; mediana → sesgo positivo (cola derecha).</div>
          </div>
        </div>

        <div class="fml-section">Dispersión</div>
        <div class="fml-grid">
          <div class="fml-card g">
            <div class="fml-name">Varianza</div>
            <div class="fml-formula">${Utils.tex('S^2 = \\dfrac{\\sum(x_i - \\bar{x})^2}{n-1}', true)}</div>
            <div class="fml-desc">Mide la dispersión promedio al cuadrado. A mayor varianza, más dispersos están los datos.</div>
          </div>
          <div class="fml-card g">
            <div class="fml-name">Desviación estándar</div>
            <div class="fml-formula">${Utils.tex('S = \\sqrt{S^2}', true)}</div>
            <div class="fml-desc">Dispersión en las mismas unidades que los datos. Más interpretable que la varianza.</div>
          </div>
          <div class="fml-card w">
            <div class="fml-name">Coeficiente de variación</div>
            <div class="fml-formula">${Utils.tex('CV = \\dfrac{S}{\\bar{x}} \\times 100\\%', true)}</div>
            <div class="fml-desc">CV &lt;15% homogéneo · 15–30% moderado · &gt;30% heterogéneo.<br><strong>⚠️ Precaución:</strong> este criterio solo es válido cuando la variable tiene suficiente rango de variación y la media es razonablemente grande. Si los valores son muy cercanos entre sí o la media es muy pequeña (cercana a 0), el CV puede ser artificialmente alto y no refleja heterogeneidad real — interpreta con cautela.</div>
          </div>
        </div>

        <div class="fml-section">Posición</div>
        <div class="fml-grid">
          <div class="fml-card b">
            <div class="fml-name">Cuartiles</div>
            <div class="fml-formula">${Utils.tex('Q_1 = X_{n \\times 0.25} \\qquad Q_2 = Me \\qquad Q_3 = X_{n \\times 0.75}', true)}</div>
            <div class="fml-desc">Dividen los datos en cuatro partes iguales. Q1 = 25%, Q2 = 50% (mediana), Q3 = 75%.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Rango intercuartílico</div>
            <div class="fml-formula">${Utils.tex('IQR = Q_3 - Q_1', true)}</div>
            <div class="fml-desc">Concentración del 50% central de los datos. Robusto ante valores atípicos.</div>
          </div>
        </div>

        <div class="fml-section">Datos agrupados</div>
        <div class="fml-grid">
          <div class="fml-card">
            <div class="fml-name">Regla de Sturges — clases y amplitud</div>
            <div class="fml-formula">${Utils.tex('k = 1 + 3.322 \\cdot \\log_{10}(n) \\qquad A = \\dfrac{X_{max} - X_{min}}{k}', true)}</div>
            <div class="fml-desc">k = número de clases (intervalos). A = amplitud de cada intervalo.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Marca de clase y frecuencias</div>
            <div class="fml-formula">${Utils.tex('x_i = \\dfrac{L_i + L_s}{2} \\qquad h_i = \\dfrac{f_i}{n} \\qquad H_i = \\dfrac{F_i}{n}', true)}</div>
            <div class="fml-desc">xi representa el valor central de cada intervalo. Se usa para calcular la media agrupada.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Mediana agrupada</div>
            <div class="fml-formula">${Utils.tex('Me = L_i + \\dfrac{\\frac{n}{2} - F_{i-1}}{f_i} \\times A', true)}</div>
            <div class="fml-desc">Li = límite inferior de la clase mediana · Fi₋₁ = frecuencia acumulada anterior a esa clase.</div>
          </div>
          <div class="fml-card g">
            <div class="fml-name">Moda de Czuber</div>
            <div class="fml-formula">${Utils.tex('Mo = L_i + \\dfrac{\\Delta_1}{\\Delta_1 + \\Delta_2} \\times A', true)}</div>
            <div class="fml-desc">Δ₁ = fi modal − fi anterior · Δ₂ = fi modal − fi siguiente.</div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">Gráficos</div>
          <div class="step-title">¿Cuándo usar histograma?</div>
          El histograma (barras <strong>unidas</strong>) refleja la continuidad de los datos — no hay saltos entre valores. Para continua agrupada se añade el polígono de frecuencias relativas.<br><br>
          <table style="width:100%;border-collapse:collapse;font-size:0.7rem;font-family:'DM Mono',monospace">
            <thead><tr style="background:var(--surface2)"><th style="padding:5px 8px;text-align:left;border:1px solid var(--border)">Tipo de variable</th><th style="padding:5px 8px;text-align:left;border:1px solid var(--border)">Gráfico correcto</th></tr></thead>
            <tbody>
              <tr><td style="padding:5px 8px;border:1px solid var(--border)">Nominal</td><td style="padding:5px 8px;border:1px solid var(--border)">Barras separadas + circular</td></tr>
              <tr><td style="padding:5px 8px;border:1px solid var(--border)">Ordinal</td><td style="padding:5px 8px;border:1px solid var(--border)">Barras ordenadas</td></tr>
              <tr><td style="padding:5px 8px;border:1px solid var(--border)">Discreta simple</td><td style="padding:5px 8px;border:1px solid var(--border)">Barras separadas</td></tr>
              <tr style="background:rgba(99,179,237,0.08)"><td style="padding:5px 8px;border:1px solid var(--border)">Discreta agrupada</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>Histograma ✅</strong> — datos tratados como rangos continuos</td></tr>
              <tr><td style="padding:5px 8px;border:1px solid var(--border)">Continua simple</td><td style="padding:5px 8px;border:1px solid var(--border)">Distribución de puntos</td></tr>
              <tr style="background:rgba(99,179,237,0.08)"><td style="padding:5px 8px;border:1px solid var(--border)">Continua agrupada</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>Histograma ✅</strong> + polígono de frecuencias</td></tr>
            </tbody>
          </table>
        </div>

        <button class="btn" onclick="Utils.scrollTo('theForm')">✓ Entendido — ir al formulario ↓</button>
      </div>`;
  },

  renderForm() {
    document.getElementById('formArea').innerHTML = `
      <div class="card" id="theForm">
        <div class="tb-c tb">📏 Continua — Ingreso de datos</div>
        <div class="card-title">Datos del análisis</div>
        <div class="card-sub">Los datos se conservan al calcular</div>

        <div class="field">
          <span class="lbl a">Nombre de la variable</span>
          <input type="text" id="varName" placeholder="Ej: Peso de los estudiantes (kg)">
        </div>
        <div class="field">
          <span class="lbl b">Descripción (opcional)</span>
          <input type="text" id="varDesc" placeholder="Ej: 40 estudiantes universitarios, 2025">
        </div>
        <div class="field">
          <span class="lbl a">Datos numéricos</span>
          <textarea id="dataInput" rows="3" placeholder="Ej: 65.2, 72.5, 58.1, 80.3, 67.4, 55.9, 74.2..."></textarea>
          <div class="hint">💡 Separa con coma o espacio. Puedes pegar desde Excel.</div>
        </div>

        <div class="field">
          <span class="lbl b">Modo de análisis</span>
          <div class="mode-tabs">
            <button class="mode-tab on" id="mt-simple" onclick="App.setMode('simple')">Simple</button>
            <button class="mode-tab" id="mt-agrupado" onclick="App.setMode('agrupado')">Agrupado</button>
            <button class="mode-tab" id="mt-resumen" onclick="App.setMode('resumen')">Resumen</button>
          </div>
        </div>

        <div id="agrupadoPanel" style="display:none">
          <div class="ib">📌 La app construirá la tabla con intervalos. Deja en blanco para valores automáticos (Sturges).</div>
          <div class="row3" style="margin-top:10px">
            <div><span class="lbl g">N° clases</span><input type="number" id="kInput" placeholder="Auto" min="2" max="20"></div>
            <div><span class="lbl g">Amplitud</span><input type="number" id="ampInput" placeholder="Auto" step="0.01"></div>
            <div><span class="lbl g">Decimales</span><input type="number" id="decInput" value="2" min="0" max="4"></div>
          </div>
          <div class="field">
            <span class="lbl">Amplitud entera</span>
            <div class="chips">
              <div class="chip" id="c-ampSi" onclick="App.setChip('ampEntera','si')">Sí, redondear</div>
              <div class="chip on" id="c-ampNo" onclick="App.setChip('ampEntera','no')">No, exacta</div>
            </div>
          </div>
          <div class="field">
            <span class="lbl">Tipo de intervalo</span>
            <div class="chips">
              <div class="chip on" id="c-semiab" onclick="App.setChip('interval','semiab')">[a, b) semiabierto</div>
              <div class="chip" id="c-cerrado" onclick="App.setChip('interval','cerrado')">[a, b] cerrado</div>
            </div>
          </div>
        </div>

        <div id="resumenInfo" style="display:none">
          <div class="ib">📊 Modo resumen: análisis simple Y agrupado juntos con todas las medidas y gráficos.</div>
        </div>

        <div id="formErr" class="err" style="display:none"></div>
        <button class="btn" id="calcBtn" onclick="ModContinua.calcular()">✨ Analizar con IA</button>
        <button class="btn btn-s" style="margin-top:6px" onclick="Utils.scrollTo('tutorialArea')">← Ver teoría de nuevo</button>
      </div>`;

    Utils.restoreFormData(App.state);
  },

  async calcular() {
    Utils.saveFormData(App.state);
    Utils.hideErr();
    const varName = document.getElementById('varName')?.value.trim() || 'Variable';
    const varDesc = document.getElementById('varDesc')?.value.trim() || '';
    const rawInput = document.getElementById('dataInput')?.value.trim() || '';
    if (!rawInput) { Utils.showErr('⚠️ Ingresa los datos primero.'); return; }

    const data = Utils.parseNums(rawInput);
    if (data.length < 3) { Utils.showErr('⚠️ Necesitas al menos 3 valores numéricos.'); return; }

    const btn = document.getElementById('calcBtn');
    btn.disabled = true; btn.textContent = '⏳ Analizando...';
    Utils.clearResults();

    const s = Stats.cuantitativa(data);
    const kIn = parseInt(document.getElementById('kInput')?.value) || 0;
    const ampIn = parseFloat(document.getElementById('ampInput')?.value) || 0;
    const decIn = document.getElementById('decInput')?.value || '2';
    const mode = App.state.curMode;

    if (mode === 'simple') await this.doSimple(data, s, varName, varDesc);
    else if (mode === 'agrupado') await this.doAgrupado(data, varName, varDesc, kIn, ampIn, decIn);
    else {
      await this.doSimple(data, s, varName, varDesc, true);
      await this.doAgrupado(data, varName, varDesc, kIn, ampIn, decIn, true);
    }

    App.addHistory({
      type: `Continua (${mode}) — ${varName}`,
      preview: data.slice(0, 8).join(', '),
      n: s.n, stat: 'x̄=' + Utils.fmt(s.mean),
    });

    Utils.addResult(`<div class="card" style="padding:12px 14px">${AI.videoBlock('Variable Continua')}</div>`);

    btn.disabled = false; btn.textContent = '✨ Analizar con IA';
    setTimeout(() => Utils.scrollTo('resultsArea'), 200);
  },

  async doSimple(data, s, varName, varDesc, isResumen = false) {
    const cId = Utils.uid();
    const aiId = 'ai-' + Utils.uid();
    const medDesc = Stats.medianaDesc(s.n);

    Utils.addResult(`
      <div class="card">
        <div class="tb-c tb">📏 Continua${isResumen ? ' — Simple' : ''}</div>
        <div class="card-title">${varName}${isResumen ? ' (simple)' : ''}</div>
        ${varDesc ? `<div class="card-sub">${varDesc}</div>` : ''}

        ${Utils.statsGrid([
          ['Media (x̄)', Utils.fmt(s.mean)],
          ['Mediana', Utils.fmt(s.median)],
          ['Moda', s.moda.length > 3 ? 'Múltiple' : s.moda.map(v => Utils.fmt(v)).join(', ')],
          ['N', s.n],
          ['Desv. Est. S', Utils.fmt(s.sd)],
          ['Varianza S²', Utils.fmt(s.variance)],
          ['CV (%)', Utils.fmt(s.cv) + '%'],
          ['Rango', Utils.fmt(s.range)],
          ['Mínimo', Utils.fmt(s.min)],
          ['Máximo', Utils.fmt(s.max)],
          ['Q1', Utils.fmt(s.q1)],
          ['Q2 (Med.)', Utils.fmt(s.median)],
          ['Q3', Utils.fmt(s.q3)],
          ['IQR', Utils.fmt(s.iqr)],
          ['Tukey inf', Utils.fmt(s.q1 - 1.5 * s.iqr)],
          ['Tukey sup', Utils.fmt(s.q3 + 1.5 * s.iqr)],
          ['Asimetría g1', Utils.fmt(s.g1)],
          ['Curtosis g2', Utils.fmt(s.g2)],
        ], 'var(--warn)')}

        <div class="ib">Mediana: ${medDesc}</div>
        <div class="ib">Outliers (Tukey): L.inf = Q1 − 1.5×IQR = <strong>${Utils.fmt(s.q1)} − ${Utils.fmt(1.5 * s.iqr)} = ${Utils.fmt(s.q1 - 1.5 * s.iqr)}</strong> &nbsp;|&nbsp; L.sup = Q3 + 1.5×IQR = <strong>${Utils.fmt(s.q3)} + ${Utils.fmt(1.5 * s.iqr)} = ${Utils.fmt(s.q3 + 1.5 * s.iqr)}</strong>${s.min < s.q1 - 1.5 * s.iqr || s.max > s.q3 + 1.5 * s.iqr ? ' ⚠️ Posibles outliers detectados' : ' ✓ Sin outliers'}</div>

        <div class="cw">
          <div class="ct">Distribución — verde: dentro de ±1 SD respecto a la media</div>
          <div style="position:relative;height:150px"><canvas id="${cId}"></canvas></div>
        </div>

        ${AI.loadingBlock(aiId)}
      </div>`);

    Charts.distribucion(cId, s.sorted, s.mean, s.sd);
    await AI.render(AI.promptContinua(varName, varDesc, s, medDesc), aiId);
  },

  async doAgrupado(data, varName, varDesc, kIn, ampIn, decIn, isResumen = false) {
    const g = Stats.agrupados(
      data, kIn, ampIn, decIn,
      App.state.chipState.interval,
      App.state.chipState.ampEntera
    );
    const intS = g.intType === 'cerrado' ? ']' : ')';
    const rows = g.classes.map(c =>
      `<tr><td>[${c.li}–${c.ls}${intS}</td><td>${c.xi}</td><td>${c.fi}</td><td>${c.Fi}</td><td>${c.hi}</td><td>${c.Hi}</td></tr>`
    );
    const total = `<td>Total</td><td>—</td><td>${g.n}</td><td>${g.n}</td><td>1.0000</td><td>1.0000</td>`;
    const cId = Utils.uid(), cId2 = Utils.uid();
    const aiId = 'ai-' + Utils.uid();
    const labels = g.classes.map(c => `[${c.li}-${c.ls}${intS}`);

    Utils.addResult(`
      <div class="card">
        <div class="tb-c tb">📏 Continua${isResumen ? ' — Agrupada' : ''}</div>
        <div class="card-title">${varName}${isResumen ? ' (agrupada)' : ''}</div>
        <div class="card-sub">n=${g.n} · k=${g.k} · A=${Utils.fmt(g.amp)} · [a,b${intS}</div>

        ${Utils.freqTable(['Intervalo', 'xi', 'fi', 'Fi', 'hi', 'Hi'], rows, total)}

        ${Utils.statsGrid([
          ['Media', Utils.fmt(g.mean)],
          ['Mediana', Utils.fmt(g.median)],
          ['Moda', Utils.fmt(g.mode)],
          ['N', g.n],
          ['k clases', g.k],
          ['Amplitud A', Utils.fmt(g.amp)],
          ['Desv. Est.', Utils.fmt(g.sd)],
          ['CV (%)', Utils.fmt(g.cv) + '%'],
        ], 'var(--warn)')}

        <div class="cw">
          <div class="ct">Histograma — fi (barras unidas)</div>
          <div style="position:relative;height:170px"><canvas id="${cId}"></canvas></div>
        </div>
        <div class="cw">
          <div class="ct">Polígono de frecuencias relativas — hi</div>
          <div style="position:relative;height:150px"><canvas id="${cId2}"></canvas></div>
        </div>

        ${AI.loadingBlock(aiId)}
      </div>`);

    Charts.histograma(cId, labels, g.classes.map(c => c.fi), '#ffaa44');
    Charts.poligono(cId2, labels, g.classes.map(c => c.hi));
    await AI.render(AI.promptContinuaAgrupada(varName, varDesc, g), aiId);
  },
};
