/* ============================================
   STATIA GO — js/modulos/04_chi/chi.js
   Módulo: Chi-cuadrado
   Independencia + Bondad de ajuste
   by Jose Rodas
   ============================================ */

const ModChi = {

  _chiCDF: (x, df) => ModDistribuciones._chiCDF(x, df),

  render(area) {
    area.innerHTML = `
      <div class="mod-tabs">
        <button class="mod-tab active" onclick="ModChi._tab('teoria',this)">📖 Teoría</button>
        <button class="mod-tab" onclick="ModChi._tab('calc',this)">χ² Calculador</button>
      </div>
      <div id="chi-teoria">${this._teoria()}</div>
      <div id="chi-calc" style="display:none">${this._form()}</div>`;
    area.querySelectorAll('.ktx').forEach(el => {
      try { katex.render(el.dataset.f, el, { throwOnError: false }); } catch(e) {}
    });
  },

  _tab(id, btn) {
    ['teoria','calc'].forEach(t => {
      document.getElementById('chi-'+t).style.display = t === id ? '' : 'none';
    });
    document.querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  },

  _teoria() {
    return `
    <div class="tut-section">
      <div class="tut-title">¿Qué es Chi-cuadrado?</div>
      <div class="tut-body">La prueba Chi-cuadrado (χ²) es una prueba no paramétrica que compara frecuencias <strong>observadas</strong> con las que se esperarían bajo la hipótesis nula. Se usa con variables cualitativas (nominales u ordinales) y no requiere supuestos sobre la distribución de los datos.</div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Estadístico Chi-cuadrado</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Fórmula</span><span class="fml-val ktx" data-f="\\chi^2 = \\sum \\dfrac{(O - E)^2}{E}"></span></div>
        <div class="fml-row"><span class="fml-label">O</span><span class="fml-val">Frecuencia observada en cada celda</span></div>
        <div class="fml-row"><span class="fml-label">E</span><span class="fml-val">Frecuencia esperada bajo H₀</span></div>
        <div class="fml-row"><span class="fml-label">Distribución</span><span class="fml-val">Chi-cuadrado con gl grados de libertad</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Prueba de Independencia</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">¿Existe relación entre dos variables cualitativas?</span></div>
        <div class="fml-row"><span class="fml-label">H₀</span><span class="fml-val">Las variables son independientes (no hay relación)</span></div>
        <div class="fml-row"><span class="fml-label">H₁</span><span class="fml-val">Las variables están asociadas</span></div>
        <div class="fml-row"><span class="fml-label">Frecuencia esperada</span><span class="fml-val ktx" data-f="E_{ij} = \\dfrac{(\\text{total fila}_i)(\\text{total col}_j)}{N}"></span></div>
        <div class="fml-row"><span class="fml-label">Grados de libertad</span><span class="fml-val">gl = (filas − 1) × (columnas − 1)</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Prueba de Bondad de Ajuste</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">¿Siguen los datos una distribución teórica esperada?</span></div>
        <div class="fml-row"><span class="fml-label">H₀</span><span class="fml-val">Los datos siguen la distribución esperada</span></div>
        <div class="fml-row"><span class="fml-label">H₁</span><span class="fml-val">Los datos NO siguen esa distribución</span></div>
        <div class="fml-row"><span class="fml-label">Grados de libertad</span><span class="fml-val">gl = k − 1 (categorías menos 1)</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">⚠️ Supuestos y limitaciones</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Frecuencia esperada</span><span class="fml-val">Debe ser ≥ 5 en al menos el 80% de las celdas</span></div>
        <div class="fml-row"><span class="fml-label">Alternativa</span><span class="fml-val">Si E < 5 en celdas: usar prueba exacta de Fisher (tablas 2×2)</span></div>
        <div class="fml-row"><span class="fml-label">Prueba exacta de Fisher</span><span class="fml-val">Recomendada cuando n < 20 o alguna E < 5 en tabla 2×2</span></div>
        <div class="fml-row"><span class="fml-label">Tamaño mínimo</span><span class="fml-val">n total ≥ 20 para que la aproximación sea válida</span></div>
      </div>
    </div>

    <div class="tut-section">
      <div class="tut-title">Medidas de asociación</div>
      <div class="tut-body">
        Si se rechaza H₀ en la prueba de independencia, medir la fuerza de la asociación:<br><br>
        <strong>V de Cramér:</strong> <span class="ktx" data-f="V = \\sqrt{\\dfrac{\\chi^2}{N \\cdot \\min(r-1,c-1)}}"></span><br><br>
        Interpretación: 0.10 débil | 0.30 moderada | 0.50 fuerte
      </div>
    </div>`;
  },

  _form() {
    return `
    <div class="calc-card">
      <div class="calc-title">χ² Prueba Chi-cuadrado</div>

      <label class="inp-label">Tipo de prueba</label>
      <select class="inp-sel" id="chi-tipo" onchange="ModChi._updateForm()">
        <option value="independencia">Independencia (tabla de contingencia)</option>
        <option value="bondad">Bondad de ajuste</option>
      </select>

      <div id="chi-params">
        <label class="inp-label">Filas de la tabla (una por línea, valores separados por coma)</label>
        <div class="ib" style="margin-bottom:8px;font-size:0.68rem">Ejemplo para tabla 2×2:<br>Fila 1: 30, 20<br>Fila 2: 15, 35</div>
        <textarea class="inp" id="chi-tabla" rows="5" placeholder="30, 20&#10;15, 35"></textarea>
      </div>

      <label class="inp-label">Nivel de significancia α</label>
      <select class="inp-sel" id="chi-alpha">
        <option value="0.01">0.01 (1%)</option>
        <option value="0.05" selected>0.05 (5%)</option>
        <option value="0.10">0.10 (10%)</option>
      </select>

      <button class="btn-calc" onclick="ModChi.calcular()">Calcular χ²</button>
    </div>
    <div id="chi-resultado"></div>`;
  },

  _updateForm() {
    const tipo = document.getElementById('chi-tipo').value;
    const p = document.getElementById('chi-params');
    if (tipo === 'independencia') {
      p.innerHTML = `
        <label class="inp-label">Filas de la tabla de contingencia (una fila por línea, valores separados por coma)</label>
        <div class="ib" style="margin-bottom:8px;font-size:0.68rem">Ejemplo tabla 2×3:<br>40, 25, 15<br>20, 30, 10</div>
        <textarea class="inp" id="chi-tabla" rows="5" placeholder="40, 25, 15&#10;20, 30, 10"></textarea>`;
    } else {
      p.innerHTML = `
        <label class="inp-label">Frecuencias observadas (separadas por coma)</label>
        <input class="inp" id="chi-obs" type="text" placeholder="Ej: 52, 38, 60, 50">
        <label class="inp-label">Frecuencias esperadas o proporciones teóricas (separadas por coma)</label>
        <input class="inp" id="chi-exp" type="text" placeholder="Ej: 50, 50, 50, 50  ó  0.25, 0.25, 0.25, 0.25">`;
    }
  },

  _parseRow(str) {
    return str.split(/[\s,;]+/).map(Number).filter(v => !isNaN(v));
  },

  calcular() {
    const tipo = document.getElementById('chi-tipo').value;
    const alpha = parseFloat(document.getElementById('chi-alpha').value);
    const res = document.getElementById('chi-resultado');

    try {
      let chi2, df, tabla_html = '', advertencia = '', n_total, cramer = null;

      if (tipo === 'independencia') {
        const lines = document.getElementById('chi-tabla').value.split('\n').filter(l => l.trim());
        if (lines.length < 2) throw new Error('Ingresa al menos 2 filas.');
        const O = lines.map(l => this._parseRow(l));
        const cols = O[0].length;
        if (O.some(r => r.length !== cols)) throw new Error('Todas las filas deben tener el mismo número de columnas.');
        if (cols < 2) throw new Error('Debe haber al menos 2 columnas.');

        const rowTotals = O.map(r => r.reduce((a,b)=>a+b,0));
        const colTotals = O[0].map((_,j) => O.reduce((a,r)=>a+r[j],0));
        n_total = rowTotals.reduce((a,b)=>a+b,0);
        df = (O.length-1)*(cols-1);

        let lowE = 0, totalCells = O.length * cols;
        let E = O.map((row,i) => row.map((_,j) => rowTotals[i]*colTotals[j]/n_total));
        chi2 = O.reduce((s,row,i) => s + row.reduce((ss,o,j) => {
          const e = E[i][j];
          if (e < 5) lowE++;
          return ss + (o-e)**2/e;
        }, 0), 0);

        if (lowE/totalCells > 0.2) advertencia = `⚠️ ${lowE} celdas tienen E < 5 (${Utils.fmt(lowE/totalCells*100,0)}% del total). Considera la prueba exacta de Fisher si es tabla 2×2.`;
        const minDim = Math.min(O.length-1, cols-1);
        cramer = Math.sqrt(chi2/(n_total*minDim));

        // Tabla HTML
        tabla_html = `<div class="tbl-scroll"><table class="freq-table" style="margin:10px 0;font-size:0.7rem">
          <tr><th>Obs / Esp</th>${colTotals.map((_,j)=>`<th>Col ${j+1}</th>`).join('')}<th>Total</th></tr>
          ${O.map((row,i) => `<tr><th>Fila ${i+1}</th>${row.map((o,j)=>`<td>${o}<br><span style="color:var(--muted)">${Utils.fmt(E[i][j],2)}</span></td>`).join('')}<td>${rowTotals[i]}</td></tr>`).join('')}
          <tr><th>Total</th>${colTotals.map(c=>`<td>${c}</td>`).join('')}<td>${n_total}</td></tr>
        </table></div>`;

      } else {
        const obs = this._parseRow(document.getElementById('chi-obs').value);
        let exp = this._parseRow(document.getElementById('chi-exp').value);
        if (obs.length < 2) throw new Error('Ingresa al menos 2 categorías.');
        if (exp.length !== obs.length) throw new Error('Las frecuencias observadas y esperadas deben tener el mismo número de categorías.');
        n_total = obs.reduce((a,b)=>a+b,0);
        // Si son proporciones (suma ~1), convertir a frecuencias
        const sumExp = exp.reduce((a,b)=>a+b,0);
        if (Math.abs(sumExp - 1) < 0.01) exp = exp.map(e => e * n_total);
        df = obs.length - 1;
        chi2 = obs.reduce((s,o,i) => s + (o-exp[i])**2/exp[i], 0);
      }

      const pval = 1 - this._chiCDF(chi2, df);
      const rechazar = pval < alpha;
      const decision = rechazar
        ? `✅ Se rechaza H₀ (p = ${Utils.fmt(pval,4)} < α = ${alpha})`
        : `⚠️ No se rechaza H₀ (p = ${Utils.fmt(pval,4)} ≥ α = ${alpha})`;

      res.innerHTML = `
        ${tabla_html}
        <div class="stats-grid">
          <div class="stat-box"><div class="stat-val">${Utils.fmt(chi2,4)}</div><div class="stat-lbl">χ² calculado</div></div>
          <div class="stat-box"><div class="stat-val">${Utils.fmt(pval,4)}</div><div class="stat-lbl">Valor p</div></div>
          <div class="stat-box"><div class="stat-val">${df}</div><div class="stat-lbl">Grados de libertad</div></div>
          ${cramer !== null ? `<div class="stat-box"><div class="stat-val">${Utils.fmt(cramer,4)}</div><div class="stat-lbl">V de Cramér</div></div>` : ''}
        </div>
        ${advertencia ? `<div class="ib" style="border-color:var(--warn);margin:8px 0;font-size:0.72rem">${advertencia}</div>` : ''}
        <div class="ib" style="margin:10px 0;${rechazar ? 'border-color:var(--accent)' : 'border-color:var(--warn)'}">
          <strong>${tipo === 'independencia' ? 'Chi-cuadrado de Independencia' : 'Chi-cuadrado de Bondad de Ajuste'}</strong><br>
          <span style="font-size:0.72rem;color:var(--muted)">n = ${n_total} | χ² = ${Utils.fmt(chi2,4)} | gl = ${df}</span><br><br>
          <strong>${decision}</strong>
        </div>
        ${AI.loadingBlock('chi-ai')}`;

      const prompt = AI.promptChi(tipo, chi2, df, pval, alpha, rechazar, cramer, n_total);
      AI.render(prompt, 'chi-ai');

    } catch(e) {
      res.innerHTML = `<div class="err">${e.message}</div>`;
    }
  },

  init() { this._updateForm(); }
};
