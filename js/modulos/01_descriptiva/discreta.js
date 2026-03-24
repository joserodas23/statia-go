/* ============================================
   STATIA GO — js/modulos/01_descriptiva/discreta.js
   Módulo: Variable Cuantitativa Discreta
   by Jose Rodas
   ============================================ */

const ModDiscreta = {

  renderTutorial() {
    document.getElementById('tutorialArea').innerHTML = `
      <div class="card">
        <div class="tb-d tb">🔢 Variable Discreta</div>
        <div class="card-title">📖 Teoría y fórmulas</div>
        <div class="card-sub">Lee antes de calcular — todas las fórmulas</div>

        <div class="step">
          <div class="step-num">¿Qué es?</div>
          <div class="step-title">Variable cuantitativa discreta</div>
          Toma valores numéricos enteros y contables. No puede tomar valores intermedios entre dos enteros.
          <div class="step-note">Ejemplos: número de hijos, materias aprobadas, puntaje en examen de 20 pts, número de defectos</div>
        </div>

        <div class="fml-section">Tendencia central</div>
        <div class="fml-grid">
          <div class="fml-card">
            <div class="fml-name">Media aritmética</div>
            <div class="fml-formula">${Utils.tex('\\bar{x} = \\dfrac{\\sum x_i}{n}', true)}</div>
            <div class="fml-desc">Suma de todos los valores dividida entre el número de datos. Representa el "centro de gravedad" de los datos.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Mediana</div>
            <div class="fml-formula">${Utils.tex('Me_{impar} = X_{\\frac{n+1}{2}}', true)}</div>
            <div class="fml-formula">${Utils.tex('Me_{par} = \\dfrac{X_{\\frac{n}{2}} + X_{\\frac{n}{2}+1}}{2}', true)}</div>
            <div class="fml-desc">Valor central al ordenar los datos de menor a mayor. No se ve afectada por valores extremos.</div>
          </div>
          <div class="fml-card g">
            <div class="fml-name">Moda</div>
            <div class="fml-formula">${Utils.tex('Mo = \\text{valor con mayor } f_i', true)}</div>
            <div class="fml-desc">El valor que más se repite. Puede haber más de una moda (bimodal, multimodal) o ninguna.</div>
          </div>
        </div>

        <div class="fml-section">Dispersión</div>
        <div class="fml-grid">
          <div class="fml-card g">
            <div class="fml-name">Varianza</div>
            <div class="fml-formula">${Utils.tex('S^2 = \\dfrac{\\sum(x_i - \\bar{x})^2}{n-1}', true)}</div>
            <div class="fml-desc">Promedio de las desviaciones al cuadrado respecto a la media. Mide qué tan dispersos están los datos.</div>
          </div>
          <div class="fml-card g">
            <div class="fml-name">Desviación estándar</div>
            <div class="fml-formula">${Utils.tex('S = \\sqrt{S^2}', true)}</div>
            <div class="fml-desc">Raíz cuadrada de la varianza. Está en las mismas unidades que los datos originales.</div>
          </div>
          <div class="fml-card w">
            <div class="fml-name">Coeficiente de variación</div>
            <div class="fml-formula">${Utils.tex('CV = \\dfrac{S}{\\bar{x}} \\times 100\\%', true)}</div>
            <div class="fml-desc">Dispersión relativa. CV &lt;15% homogéneo · 15–30% moderado · &gt;30% heterogéneo.<br><strong>⚠️ Precaución:</strong> este criterio solo es válido cuando la variable tiene suficiente rango de variación y la media es razonablemente grande. Si los valores son muy cercanos entre sí o la media es muy pequeña (cercana a 0), el CV puede ser artificialmente alto y no refleja heterogeneidad real — interpreta con cautela.</div>
          </div>
        </div>

        <div class="fml-section">Posición</div>
        <div class="fml-grid">
          <div class="fml-card b">
            <div class="fml-name">Cuartiles</div>
            <div class="fml-formula">${Utils.tex('Q_1 = X_{n \\times 0.25} \\qquad Q_2 = Me \\qquad Q_3 = X_{n \\times 0.75}', true)}</div>
            <div class="fml-desc">Dividen los datos ordenados en cuatro partes iguales. Q2 coincide con la mediana.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Rango intercuartílico</div>
            <div class="fml-formula">${Utils.tex('IQR = Q_3 - Q_1', true)}</div>
            <div class="fml-desc">Amplitud del 50% central de los datos. Un IQR grande indica mayor variabilidad en la zona central.</div>
          </div>
        </div>

        <div class="fml-section">Datos agrupados — Regla de Sturges</div>
        <div class="fml-grid">
          <div class="fml-card">
            <div class="fml-name">Número de clases</div>
            <div class="fml-formula">${Utils.tex('k = 1 + 3.322 \\cdot \\log_{10}(n)', true)}</div>
            <div class="fml-desc">Determina cuántos intervalos usar para agrupar los datos según el tamaño de la muestra.</div>
          </div>
          <div class="fml-card">
            <div class="fml-name">Amplitud del intervalo</div>
            <div class="fml-formula">${Utils.tex('A = \\dfrac{X_{max} - X_{min}}{k}', true)}</div>
            <div class="fml-desc">Ancho de cada clase. Se redondea al entero superior para datos discretos.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Mediana agrupada</div>
            <div class="fml-formula">${Utils.tex('Me = L_i + \\dfrac{\\frac{n}{2} - F_{i-1}}{f_i} \\times A', true)}</div>
            <div class="fml-desc">Li = límite inferior de la clase mediana · Fi₋₁ = frecuencia acumulada anterior.</div>
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
          El histograma (barras <strong>unidas</strong>) solo se usa cuando los datos son continuos <em>o</em> cuando datos discretos están agrupados en intervalos. <strong>Nunca</strong> para datos discretos sin agrupar ni para variables cualitativas.<br><br>
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
        <div class="tb-d tb">🔢 Discreta — Ingreso de datos</div>
        <div class="card-title">Datos del análisis</div>
        <div class="card-sub">Los datos se conservan al calcular</div>


        <div class="field">
          <span class="lbl a">Nombre de la variable</span>
          <input type="text" id="varName" placeholder="Ej: Número de hijos por familia">
        </div>
        <div class="field">
          <span class="lbl b">Descripción (opcional)</span>
          <input type="text" id="varDesc" placeholder="Ej: 40 familias del distrito, 2025">
        </div>
        <div class="field">
          <span class="lbl a">Datos numéricos (enteros)</span>
          <textarea id="dataInput" rows="3" placeholder="Ej: 0, 1, 2, 2, 3, 1, 0, 4, 2, 1, 3, 2, 1, 0, 2"></textarea>
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
          <div class="ib">📌 La app construirá la tabla de frecuencias con intervalos. Deja en blanco para valores automáticos (Sturges).</div>
          <div class="row3" style="margin-top:10px">
            <div><span class="lbl g">N° clases</span><input type="number" id="kInput" placeholder="Auto" min="2" max="20"></div>
            <div><span class="lbl g">Amplitud</span><input type="number" id="ampInput" placeholder="Auto" step="1"></div>
            <div><span class="lbl g">Decimales</span><input type="number" id="decInput" value="0" min="0" max="2"></div>
          </div>
          <div class="field">
            <span class="lbl">Amplitud entera</span>
            <div class="chips">
              <div class="chip on" id="c-ampSi" onclick="App.setChip('ampEntera','si')">Sí, redondear</div>
              <div class="chip" id="c-ampNo" onclick="App.setChip('ampEntera','no')">No, exacta</div>
            </div>
          </div>
        </div>

        <div id="resumenInfo" style="display:none">
          <div class="ib">📊 Modo resumen: análisis simple Y agrupado juntos con todos los gráficos.</div>
        </div>

        <div id="formErr" class="err" style="display:none"></div>
        <button class="btn" id="calcBtn" onclick="ModDiscreta.calcular()">✨ Analizar con IA</button>
        <button class="btn btn-s" style="margin-top:6px" onclick="Utils.scrollTo('tutorialArea')">← Ver teoría de nuevo</button>
      </div>`;

    Utils.restoreFormData(App.state);
    // Reset chips
    App.state.chipState.ampEntera = 'si';
    const si = document.getElementById('c-ampSi');
    const no = document.getElementById('c-ampNo');
    if (si) si.className = 'chip on';
    if (no) no.className = 'chip';
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
    const decIn = document.getElementById('decInput')?.value || '0';
    const mode = App.state.curMode;

    if (mode === 'simple') await this.doSimple(data, s, varName, varDesc);
    else if (mode === 'agrupado') await this.doAgrupado(data, s, varName, varDesc, kIn, ampIn, decIn);
    else {
      await this.doSimple(data, s, varName, varDesc, true);
      await this.doAgrupado(data, s, varName, varDesc, kIn, ampIn, decIn, true);
    }

    App.addHistory({
      type: `Discreta (${mode}) — ${varName}`,
      preview: data.slice(0, 10).join(', '),
      n: s.n, stat: 'x̄=' + Utils.fmt(s.mean),
    });

    Utils.addResult(`<div class="card" style="padding:12px 14px">${AI.videoBlock('Variable Discreta')}</div>`);

    btn.disabled = false; btn.textContent = '✨ Analizar con IA';
    setTimeout(() => Utils.scrollTo('resultsArea'), 200);
  },

  async doSimple(data, s, varName, varDesc, isResumen = false) {
    const freq = {};
    data.forEach(v => freq[v] = (freq[v] || 0) + 1);
    const keys = Object.keys(freq).map(Number).sort((a, b) => a - b);
    let Fi = 0;
    const rows = keys.map(k => {
      Fi += freq[k];
      return `<tr><td>${k}</td><td>${freq[k]}</td><td>${Fi}</td><td>${(freq[k]/s.n).toFixed(4)}</td><td>${(Fi/s.n).toFixed(4)}</td></tr>`;
    });
    const total = `<td>Total</td><td>${s.n}</td><td>${s.n}</td><td>1.0000</td><td>1.0000</td>`;
    const cId = Utils.uid();
    const aiId = 'ai-' + Utils.uid();
    const medDesc = Stats.medianaDesc(s.n);

    Utils.addResult(`
      <div class="card">
        <div class="tb-d tb">🔢 Discreta${isResumen ? ' — Simple' : ''}</div>
        <div class="card-title">${varName}${isResumen ? ' (simple)' : ''}</div>
        ${varDesc ? `<div class="card-sub">${varDesc}</div>` : ''}

        ${Utils.freqTable(['xi', 'fi', 'Fi', 'hi', 'Hi'], rows, total)}

        ${Utils.statsGrid([
          ['Media (x̄)', Utils.fmt(s.mean)],
          ['Mediana', Utils.fmt(s.median)],
          ['Moda', s.moda.join(', ')],
          ['N', s.n],
          ['Desv. Est. S', Utils.fmt(s.sd)],
          ['Varianza S²', Utils.fmt(s.variance)],
          ['CV (%)', Utils.fmt(s.cv) + '%'],
          ['Rango', Utils.fmt(s.range)],
          ['Mínimo', Utils.fmt(s.min)],
          ['Máximo', Utils.fmt(s.max)],
          ['Q1', Utils.fmt(s.q1)],
          ['Q3', Utils.fmt(s.q3)],
          ['IQR', Utils.fmt(s.iqr)],
          ['Tukey inf', Utils.fmt(s.q1 - 1.5 * s.iqr)],
          ['Tukey sup', Utils.fmt(s.q3 + 1.5 * s.iqr)],
          ['Asimetría g1', Utils.fmt(s.g1)],
          ['Curtosis g2', Utils.fmt(s.g2)],
        ], 'var(--gold)')}

        <div class="ib">Mediana: ${medDesc}</div>
        <div class="ib">Outliers (Tukey): L.inf = Q1 − 1.5×IQR = <strong>${Utils.fmt(s.q1)} − ${Utils.fmt(1.5 * s.iqr)} = ${Utils.fmt(s.q1 - 1.5 * s.iqr)}</strong> &nbsp;|&nbsp; L.sup = Q3 + 1.5×IQR = <strong>${Utils.fmt(s.q3)} + ${Utils.fmt(1.5 * s.iqr)} = ${Utils.fmt(s.q3 + 1.5 * s.iqr)}</strong>${s.min < s.q1 - 1.5 * s.iqr || s.max > s.q3 + 1.5 * s.iqr ? ' ⚠️ Posibles outliers detectados' : ' ✓ Sin outliers'}</div>

        <div class="cw">
          <div class="ct">Gráfico de barras separadas — fi</div>
          <div style="position:relative;height:160px"><canvas id="${cId}"></canvas></div>
        </div>

        ${AI.loadingBlock(aiId)}
      </div>`);

    Charts.barrasSeparadas(cId, keys, keys.map(k => freq[k]), '#ffd166');
    await AI.render(AI.promptDiscreta(varName, varDesc, s, medDesc), aiId);
  },

  async doAgrupado(data, s, varName, varDesc, kIn, ampIn, decIn, isResumen = false) {
    const g = Stats.agrupados(data, kIn, ampIn, decIn, 'semiab', App.state.chipState.ampEntera);
    const rows = g.classes.map(c =>
      `<tr><td>[${c.li}–${c.ls})</td><td>${c.xi}</td><td>${c.fi}</td><td>${c.Fi}</td><td>${c.hi}</td><td>${c.Hi}</td></tr>`
    );
    const total = `<td>Total</td><td>—</td><td>${g.n}</td><td>${g.n}</td><td>1.0000</td><td>1.0000</td>`;
    const cId = Utils.uid(), cId2 = Utils.uid();
    const aiId = 'ai-' + Utils.uid();
    const labels = g.classes.map(c => `[${c.li}-${c.ls})`);

    Utils.addResult(`
      <div class="card">
        <div class="tb-d tb">🔢 Discreta${isResumen ? ' — Agrupada' : ''}</div>
        <div class="card-title">${varName}${isResumen ? ' (agrupada)' : ''}</div>
        <div class="card-sub">n=${g.n} · k=${g.k} clases · A=${Utils.fmt(g.amp)}</div>

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
        ], 'var(--gold)')}

        <div class="cw">
          <div class="ct">Histograma — fi</div>
          <div style="position:relative;height:160px"><canvas id="${cId}"></canvas></div>
        </div>
        <div class="cw">
          <div class="ct">Polígono de frecuencias relativas — hi</div>
          <div style="position:relative;height:140px"><canvas id="${cId2}"></canvas></div>
        </div>

        ${AI.loadingBlock(aiId)}
      </div>`);

    Charts.histograma(cId, labels, g.classes.map(c => c.fi), '#ffd166');
    Charts.poligono(cId2, labels, g.classes.map(c => c.hi));
    await AI.render(AI.promptDiscretaAgrupada(varName, varDesc, g), aiId);
  },
};
