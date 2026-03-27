/* ============================================
   STATIA GO — js/modulos/01_descriptiva/ordinal.js
   Módulo: Variable Cualitativa Ordinal
   by Jose Rodas
   ============================================ */

const ModOrdinal = {

  renderTutorial() {
    document.getElementById('tutorialArea').innerHTML = `
      <div class="card">
        <div class="tb-o tb">📶 Variable Ordinal</div>
        <div class="card-title">📖 Teoría y fórmulas</div>
        <div class="card-sub">Lee antes de calcular</div>

        <div class="step">
          <div class="step-num">¿Qué es?</div>
          <div class="step-title">Variable cualitativa ordinal</div>
          Categorías con un orden natural definido, pero la distancia entre categorías no es igual ni medible.
          <div class="step-note">Ejemplos: escala Likert (Nunca/A veces/Siempre), nivel educativo, grado de satisfacción, ranking</div>
        </div>

        <div class="fml-section">Tendencia central</div>
        <div class="fml-grid">
          <div class="fml-card">
            <div class="fml-name">Moda</div>
            <div class="fml-formula">${Utils.tex('Mo = \\text{categoría con mayor } f_i', true)}</div>
            <div class="fml-desc">La categoría que aparece más veces en los datos.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Mediana ordinal</div>
            <div class="fml-formula">${Utils.tex('Me = \\text{categoría en posición } \\dfrac{n+1}{2} \\text{ (ordenada)}', true)}</div>
            <div class="fml-desc">La categoría que divide los datos ordenados en dos mitades iguales. Solo válida porque hay un orden definido.</div>
          </div>
        </div>
        <div class="step-note" style="margin-bottom:8px">❌ La media NO es válida — las distancias entre categorías no son iguales</div>

        <div class="fml-section">Frecuencias</div>
        <div class="fml-grid">
          <div class="fml-card g">
            <div class="fml-name">Frecuencia acumulada</div>
            <div class="fml-formula">${Utils.tex('F_i = f_1 + f_2 + \\cdots + f_k', true)}</div>
            <div class="fml-desc">Suma de frecuencias desde la primera categoría hasta la i-ésima. Tiene sentido porque las categorías tienen orden.</div>
          </div>
          <div class="fml-card b">
            <div class="fml-name">Frecuencias relativas</div>
            <div class="fml-formula">${Utils.tex('h_i = \\dfrac{f_i}{n} \\qquad H_i = \\dfrac{F_i}{n}', true)}</div>
            <div class="fml-desc">hi es la proporción de cada categoría. Hi es la proporción acumulada hasta esa categoría.</div>
          </div>
        </div>

        <div class="step">
          <div class="step-num">Gráfico válido</div>
          <div class="step-title">Barras en orden natural</div>
          Las barras deben ir en el orden de la escala (de menor a mayor), no ordenadas por frecuencia.<br>
          ❌ Circular — pierde información sobre el orden
        </div>

        <button class="btn" onclick="Utils.scrollTo('theForm')">✓ Entendido — ir al formulario ↓</button>
      </div>`;
  },

  renderForm() {
    document.getElementById('formArea').innerHTML = `
      <div class="card" id="theForm">
        <div class="tb-o tb">📶 Ordinal — Ingreso de datos</div>
        <div class="card-title">Datos del análisis</div>
        <div class="card-sub">Los datos se conservan al calcular</div>


        <div class="field">
          <span class="lbl a">Nombre de la variable</span>
          <input type="text" id="varName" placeholder="Ej: Nivel de satisfacción docente">
        </div>
        <div class="field">
          <span class="lbl b">Descripción (opcional)</span>
          <input type="text" id="varDesc" placeholder="Ej: Encuesta a 50 estudiantes">
        </div>
        <div class="field">
          <span class="lbl a">Datos (categorías o códigos numéricos)</span>
          <textarea id="dataInput" rows="3" placeholder="Ej: 1, 2, 3, 1, 2  — o texto: Nunca, A veces, Siempre, Nunca" oninput="document.getElementById('calcBtn').disabled=!this.value.trim()"></textarea>
          <div class="hint">💡 Si tu base de datos usa números (1, 2, 3...) ingrésalos aquí y define abajo qué significa cada uno.</div>
        </div>
        <div class="field">
          <span class="lbl b">Orden de menor a mayor (obligatorio)</span>
          <input type="text" id="orderInput" placeholder="Ej: 1, 2, 3  — o texto: Nunca, A veces, Siempre">
          <div class="hint">💡 Define el orden correcto de menor a mayor. Si usas números coincide con los códigos.</div>
        </div>

        <div class="field">
          <span class="lbl g">Codificación <span style="font-weight:400;opacity:0.7">(opcional — si ingresaste números)</span></span>
          <div class="hint">💡 Define qué significa cada número. Ej: 1 = Nunca, 2 = A veces, 3 = Siempre.</div>
          <button class="btn btn-s" type="button" onclick="ModOrdinal.generarCodigos()" style="margin-top:6px">🔢 Detectar códigos y definir etiquetas</button>
          <div id="codigoPanel"></div>
        </div>

        <div id="formErr" class="err" style="display:none"></div>
        <button class="btn" id="calcBtn" onclick="ModOrdinal.calcular()" disabled>✨ Analizar con IA</button>
        <button class="btn btn-s" style="margin-top:6px" onclick="ModOrdinal.ejemplo()">📋 Cargar ejemplo</button>
        <button class="btn btn-s" style="margin-top:6px" onclick="Utils.scrollTo('tutorialArea')">← Ver teoría de nuevo</button>
      </div>`;

    Utils.restoreFormData(App.state);
  },

  generarCodigos() {
    const rawInput = document.getElementById('dataInput')?.value.trim() || '';
    if (!rawInput) { Utils.showErr('⚠️ Ingresa los datos primero.'); return; }
    const vals = rawInput.split(/[,\s]+/).map(v => v.trim()).filter(v => v !== '');
    const orderRaw = document.getElementById('orderInput')?.value.trim() || '';
    const orderVals = orderRaw ? orderRaw.split(/[,\s]+/).map(v => v.trim()).filter(v => v !== '') : [];
    // Usar el orden si está definido, si no ordenar numéricamente
    const unique = orderVals.length
      ? [...new Set([...orderVals, ...vals])].filter(v => vals.includes(v))
      : [...new Set(vals)].sort((a, b) => Number(a) - Number(b) || a.localeCompare(b));
    document.getElementById('codigoPanel').innerHTML = `
      <div class="cod-table">
        <div class="cod-header"><span>Código</span><span>Etiqueta (qué significa)</span></div>
        ${unique.map(val => `
          <div class="cod-row">
            <span class="cod-label">${val}</span>
            <input type="text" class="cod-input-label" id="cod-${CSS.escape(val)}" placeholder="Ej: Nunca">
          </div>`).join('')}
      </div>`;
  },

  async calcular() {
    Utils.saveFormData(App.state);
    Utils.hideErr();
    const varName = document.getElementById('varName')?.value.trim() || 'Variable';
    const varDesc = document.getElementById('varDesc')?.value.trim() || '';
    const rawInput = document.getElementById('dataInput')?.value.trim() || '';
    const orderRaw = document.getElementById('orderInput')?.value.trim() || '';
    if (!rawInput) { Utils.showErr('⚠️ Ingresa los datos primero.'); return; }

    // Detectar valores y leer codificación si existe
    const rawVals = rawInput.split(/[,\s]+/).map(v => v.trim()).filter(v => v !== '');
    if (rawVals.length < 3) { Utils.showErr('⚠️ Necesitas al menos 3 valores.'); return; }
    const uniqueVals = [...new Set(rawVals)];
    const decodeMap = {};
    uniqueVals.forEach(val => {
      const inp = document.getElementById(`cod-${CSS.escape(val)}`);
      if (inp && inp.value.trim() !== '') decodeMap[val] = inp.value.trim();
    });
    const hasCodigos = Object.keys(decodeMap).length > 0;
    // Decodificar si hay etiquetas
    const cats = rawVals.map(v => decodeMap[v] || v);
    if (cats.length < 3) { Utils.showErr('⚠️ Necesitas al menos 3 valores.'); return; }

    // Decodificar también el orden si se ingresaron números
    const orderValsRaw = orderRaw.split(/[,\s]+/).map(v => v.trim()).filter(v => v !== '');
    const order = orderValsRaw.map(v => decodeMap[v] || v);
    const { freq, n, keys, moda } = Stats.frecuencias(cats, order);

    const btn = document.getElementById('calcBtn');
    btn.disabled = true; btn.textContent = '⏳ Analizando...';
    Utils.clearResults();

    // Mediana ordinal
    const allIdx = cats.map(c => keys.indexOf(c)).sort((a, b) => a - b);
    const mIdx = allIdx.length % 2 !== 0
      ? allIdx[(allIdx.length - 1) / 2]
      : Math.round((allIdx[allIdx.length / 2 - 1] + allIdx[allIdx.length / 2]) / 2);
    const mediana_ord = keys[mIdx] || '—';

    let Fi = 0;
    const rows = keys.map(k => {
      const fi = freq[k] || 0;
      Fi += fi;
      return `<tr><td>${k}</td><td>${fi}</td><td>${Fi}</td><td>${(fi/n).toFixed(4)}</td><td>${(Fi/n).toFixed(4)}</td></tr>`;
    });
    const total = `<td>Total</td><td>${n}</td><td>${n}</td><td>1.0000</td><td>1.0000</td>`;
    const cId = Utils.uid(), aiId = 'ai-' + Utils.uid();

    Utils.addResult(`
      <div class="card">
        <div class="tb-o tb">📶 Ordinal</div>
        <div class="card-title">${varName}</div>
        ${varDesc ? `<div class="card-sub">${varDesc}</div>` : ''}

        ${Utils.freqTable(['Categoría', 'fi', 'Fi', 'hi', 'Hi'], rows, total)}

        ${Utils.statsGrid([
          ['N total', n],
          ['Moda', moda.join(', ')],
          ['Mediana', mediana_ord],
          ['Categorías', keys.length],
        ], 'var(--accent2)')}

        ${hasCodigos ? `
        <div class="cod-result">
          <div class="cod-result-title">🔢 Referencia de codificación</div>
          <div class="cod-result-sub">Código numérico de tu base de datos → etiqueta real (orden de menor a mayor)</div>
          <table class="freq-table"><thead><tr><th>Código</th><th>Etiqueta</th><th>fi</th><th>%</th></tr></thead><tbody>
            ${uniqueVals.filter(v => decodeMap[v]).map(v => `<tr><td><strong>${v}</strong></td><td>${decodeMap[v]}</td><td>${freq[decodeMap[v]] || 0}</td><td>${(((freq[decodeMap[v]] || 0)/n)*100).toFixed(1)}%</td></tr>`).join('')}
          </tbody></table>
        </div>` : ''}

        <div class="cw">
          <div class="ct">Barras ordenadas — frecuencias absolutas (fi)</div>
          <div style="position:relative;height:${Math.max(150, keys.length * 32)}px">
            <canvas id="${cId}"></canvas>
          </div>
        </div>

        ${AI.loadingBlock(aiId)}
        ${AI.videoBlock('Variable Ordinal')}
      </div>`);

    Charts.barras(cId, keys, keys.map(k => freq[k] || 0));

    await AI.render(AI.promptOrdinal(varName, varDesc, n, moda, mediana_ord, keys, freq), aiId);

    App.addHistory({
      type: 'Ordinal — ' + varName,
      preview: rawInput.substring(0, 45),
      n, stat: 'Moda: ' + moda[0],
    });

    btn.disabled = false; btn.textContent = '✨ Analizar con IA';
    setTimeout(() => Utils.scrollTo('resultsArea'), 200);
  },

  ejemplo() {
    document.getElementById('varName').value = 'Nivel de satisfacción docente';
    document.getElementById('varDesc').value = 'Encuesta a 25 estudiantes — escala 1 a 5';
    document.getElementById('orderInput').value = '1, 2, 3, 4, 5';
    const ta = document.getElementById('dataInput');
    ta.value = '3, 4, 5, 2, 4, 3, 5, 4, 4, 3, 2, 5, 4, 3, 4, 5, 3, 4, 2, 4, 5, 3, 4, 4, 3';
    ta.dispatchEvent(new Event('input'));
  },
};
