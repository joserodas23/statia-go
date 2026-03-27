/* ============================================
   STATIA GO — js/modulos/01_descriptiva/nominal.js
   Módulo: Variable Cualitativa Nominal
   by Jose Rodas
   ============================================ */

const ModNominal = {

  renderTutorial() {
    document.getElementById('tutorialArea').innerHTML = `
      <div class="card">
        <div class="tb-n tb">🏷️ Variable Nominal</div>
        <div class="card-title">📖 Teoría y fórmulas</div>
        <div class="card-sub">Lee antes de calcular</div>

        <div class="step">
          <div class="step-num">¿Qué es?</div>
          <div class="step-title">Variable cualitativa nominal</div>
          Sus valores son categorías sin orden natural. No se pueden sumar, restar ni ordenar.
          <div class="step-note">Ejemplos: género, color de ojos, carrera universitaria, marca de celular, región</div>
        </div>

        <div class="fml-section">Tendencia central</div>
        <div class="fml-grid">
          <div class="fml-card">
            <div class="fml-name">Moda</div>
            <div class="fml-formula">${Utils.tex('Mo = \\text{categoría con mayor } f_i', true)}</div>
            <div class="fml-desc">La categoría que aparece con mayor frecuencia. Es la única medida de tendencia central válida para variables nominales.</div>
          </div>
        </div>

        <div class="fml-section">Frecuencias</div>
        <div class="fml-grid">
          <div class="fml-card b">
            <div class="fml-name">Frecuencia relativa</div>
            <div class="fml-formula">${Utils.tex('h_i = \\dfrac{f_i}{n}', true)}</div>
            <div class="fml-desc">Proporción de veces que aparece cada categoría respecto al total. Valor entre 0 y 1.</div>
          </div>
          <div class="fml-card g">
            <div class="fml-name">Porcentaje</div>
            <div class="fml-formula">${Utils.tex('\\% = h_i \\times 100', true)}</div>
            <div class="fml-desc">Expresa la frecuencia relativa en porcentaje. Más fácil de interpretar en contextos aplicados.</div>
          </div>
        </div>
        <div class="step-note" style="margin-bottom:8px">❌ No se calculan Fi ni Hi — no hay orden entre las categorías</div>

        <div class="step">
          <div class="step-num">Gráficos válidos</div>
          <div class="step-title">Barras y circular</div>
          ✅ Gráfico de barras — comparar frecuencias entre categorías<br>
          ✅ Gráfico circular (pie) — visualizar proporciones<br>
          ❌ Histograma — NO aplica para nominales (es para continuas)<br>
          ❌ Polígono — NO aplica (requiere orden o continuidad)
        </div>

        <button class="btn" onclick="Utils.scrollTo('theForm')">✓ Entendido — ir al formulario ↓</button>
      </div>`;
  },

  renderForm() {
    document.getElementById('formArea').innerHTML = `
      <div class="card" id="theForm">
        <div class="tb-n tb">🏷️ Nominal — Ingreso de datos</div>
        <div class="card-title">Datos del análisis</div>
        <div class="card-sub">Los datos se conservan al calcular</div>


        <div class="field">
          <span class="lbl a">Nombre de la variable</span>
          <input type="text" id="varName" placeholder="Ej: Género de los estudiantes">
        </div>
        <div class="field">
          <span class="lbl b">Descripción (opcional)</span>
          <input type="text" id="varDesc" placeholder="Ej: 40 estudiantes del ciclo 2025-I">
        </div>
        <div class="field">
          <span class="lbl a">Datos (categorías o códigos numéricos)</span>
          <textarea id="dataInput" rows="3" placeholder="Ej: 1, 2, 1, 3, 2, 1  — o texto: Masculino, Femenino, Masculino" oninput="document.getElementById('calcBtn').disabled=!this.value.trim()"></textarea>
          <div class="hint">💡 Si tu base de datos usa números (1, 2, 3...) ingrésalos aquí y define abajo qué significa cada uno.</div>
        </div>

        <div class="field">
          <span class="lbl g">Codificación <span style="font-weight:400;opacity:0.7">(opcional — si ingresaste números)</span></span>
          <div class="hint">💡 Define qué significa cada número. Ej: 1 = Masculino, 2 = Femenino.</div>
          <button class="btn btn-s" type="button" onclick="ModNominal.generarCodigos()" style="margin-top:6px">🔢 Detectar códigos y definir etiquetas</button>
          <div id="codigoPanel"></div>
        </div>

        <div id="formErr" class="err" style="display:none"></div>
        <button class="btn" id="calcBtn" onclick="ModNominal.calcular()" disabled>✨ Analizar con IA</button>
        <button class="btn btn-s" style="margin-top:6px" onclick="ModNominal.ejemplo()">📋 Cargar ejemplo</button>
        <button class="btn btn-s" style="margin-top:6px" onclick="Utils.scrollTo('tutorialArea')">← Ver teoría de nuevo</button>
      </div>`;

    Utils.restoreFormData(App.state);
  },

  generarCodigos() {
    const rawInput = document.getElementById('dataInput')?.value.trim() || '';
    if (!rawInput) { Utils.showErr('⚠️ Ingresa los datos primero.'); return; }
    const vals = rawInput.split(/[,\s]+/).map(v => v.trim()).filter(v => v !== '');
    const unique = [...new Set(vals)].sort((a, b) => Number(a) - Number(b) || a.localeCompare(b));
    document.getElementById('codigoPanel').innerHTML = `
      <div class="cod-table">
        <div class="cod-header"><span>Código</span><span>Etiqueta (qué significa)</span></div>
        ${unique.map(val => `
          <div class="cod-row">
            <span class="cod-label">${val}</span>
            <input type="text" class="cod-input-label" id="cod-${CSS.escape(val)}" placeholder="Ej: Masculino">
          </div>`).join('')}
      </div>`;
  },

  async calcular() {
    Utils.saveFormData(App.state);
    Utils.hideErr();
    const varName = document.getElementById('varName')?.value.trim() || 'Variable';
    const varDesc = document.getElementById('varDesc')?.value.trim() || '';
    const rawInput = document.getElementById('dataInput')?.value.trim() || '';
    if (!rawInput) { Utils.showErr('⚠️ Ingresa los datos primero.'); return; }

    // Detectar valores únicos y leer etiquetas de codificación si existen
    const rawVals = rawInput.split(/[,\s]+/).map(v => v.trim()).filter(v => v !== '');
    if (rawVals.length < 3) { Utils.showErr('⚠️ Necesitas al menos 3 valores.'); return; }
    const uniqueVals = [...new Set(rawVals)];
    const decodeMap = {};
    uniqueVals.forEach(val => {
      const inp = document.getElementById(`cod-${CSS.escape(val)}`);
      if (inp && inp.value.trim() !== '') decodeMap[val] = inp.value.trim();
    });
    const hasCodigos = Object.keys(decodeMap).length > 0;
    // Decodificar: si hay etiquetas, reemplazar códigos por etiquetas
    const cats = rawVals.map(v => decodeMap[v] || v);
    if (cats.length < 3) { Utils.showErr('⚠️ Necesitas al menos 3 valores.'); return; }

    const btn = document.getElementById('calcBtn');
    btn.disabled = true; btn.textContent = '⏳ Analizando...';
    Utils.clearResults();

    const { freq, n, keys, moda } = Stats.frecuencias(cats);

    const rows = keys.map(k => `
      <tr><td>${k}</td><td>${freq[k]}</td><td>${(freq[k]/n).toFixed(4)}</td><td>${((freq[k]/n)*100).toFixed(1)}%</td></tr>`);
    const total = `<td>Total</td><td>${n}</td><td>1.0000</td><td>100%</td>`;
    const cId = Utils.uid(), cId2 = Utils.uid(), aiId = 'ai-' + Utils.uid();

    Utils.addResult(`
      <div class="card">
        <div class="tb-n tb">🏷️ Nominal</div>
        <div class="card-title">${varName}</div>
        ${varDesc ? `<div class="card-sub">${varDesc}</div>` : ''}

        ${Utils.freqTable(['Categoría', 'fi', 'hi', '%'], rows, total)}

        ${Utils.statsGrid([
          ['N total', n],
          ['Moda', moda.join(', ')],
          ['Categorías', keys.length],
          ['% moda', ((freq[moda[0]]/n)*100).toFixed(1) + '%'],
        ])}

        ${hasCodigos ? `
        <div class="cod-result">
          <div class="cod-result-title">🔢 Referencia de codificación</div>
          <div class="cod-result-sub">Código numérico usado en tu base de datos → etiqueta real</div>
          <table class="freq-table"><thead><tr><th>Código</th><th>Etiqueta</th><th>fi</th><th>%</th></tr></thead><tbody>
            ${uniqueVals.filter(v => decodeMap[v]).map(v => `<tr><td><strong>${v}</strong></td><td>${decodeMap[v]}</td><td>${freq[decodeMap[v]] || 0}</td><td>${(((freq[decodeMap[v]] || 0)/n)*100).toFixed(1)}%</td></tr>`).join('')}
          </tbody></table>
        </div>` : ''}

        <div class="cw">
          <div class="ct">Gráfico de barras — frecuencias absolutas (fi)</div>
          <div style="position:relative;height:${Math.max(150, keys.length * 32)}px">
            <canvas id="${cId}"></canvas>
          </div>
        </div>

        <div class="cw">
          <div class="ct">Gráfico circular — proporciones</div>
          <div style="position:relative;height:200px">
            <canvas id="${cId2}"></canvas>
          </div>
        </div>

        ${AI.loadingBlock(aiId)}
        ${AI.videoBlock('Variable Nominal')}
      </div>`);

    Charts.barras(cId, keys, keys.map(k => freq[k]));
    Charts.circular(cId2, keys, keys.map(k => freq[k]));

    await AI.render(AI.promptNominal(varName, varDesc, n, moda, keys, freq), aiId);

    App.addHistory({
      type: 'Nominal — ' + varName,
      preview: rawInput.substring(0, 45),
      n, stat: 'Moda: ' + moda[0],
    });

    btn.disabled = false; btn.textContent = '✨ Analizar con IA';
    setTimeout(() => Utils.scrollTo('resultsArea'), 200);
  },

  ejemplo() {
    document.getElementById('varName').value = 'Género de los estudiantes';
    document.getElementById('varDesc').value = 'Encuesta a 30 estudiantes del ciclo 2025-I';
    const ta = document.getElementById('dataInput');
    ta.value = '1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1';
    ta.dispatchEvent(new Event('input'));
  },
};
