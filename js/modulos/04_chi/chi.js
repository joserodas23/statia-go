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
      <div class="card" style="margin-top:0">
        <div class="tb tb-chi">χ² Chi-cuadrado</div>
        <div class="mod-tabs">
          <button class="mod-tab active" onclick="ModChi._tab('teoria',this)">📖 Teoría</button>
          <button class="mod-tab" onclick="ModChi._tab('calc',this)">χ² Calculador</button>
        </div>
        <div id="chi-teoria">${this._teoria()}</div>
        <div id="chi-calc" style="display:none">${this._form()}</div>
      </div>`;
    Utils.renderKaTeX(area);
  },

  _tab(id, btn) {
    ['teoria','calc'].forEach(t =>
      document.getElementById('chi-'+t).style.display = t===id ? '' : 'none'
    );
    btn.closest('.mod-tabs').querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  },

  _teoria() {
    return `
    <div class="step" style="border-left-color:var(--accent2)">
      <div class="step-num">Concepto base</div>
      <div class="step-title">¿Qué es Chi-cuadrado (χ²)?</div>
      Prueba no paramétrica que compara frecuencias <strong>observadas</strong> con las <strong>esperadas</strong> bajo H₀. Se usa con variables cualitativas (nominales u ordinales) y no requiere supuestos sobre distribución normal de los datos.
    </div>

    <div class="fml-section">Estadístico y fórmulas</div>
    <div class="fml-grid">
      <div class="fml-card b">
        <div class="fml-name">Estadístico χ²</div>
        <div class="fml-formula"><span class="ktx" data-f="\\chi^2 = \\sum \\dfrac{(O - E)^2}{E}"></span></div>
        <div class="fml-desc">O = frecuencia observada · E = frecuencia esperada bajo H₀. Distribución chi-cuadrado con gl grados de libertad.</div>
      </div>
    </div>

    <div class="fml-section">Prueba de independencia</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">¿Existe relación entre dos variables cualitativas?</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">H₀</span><span class="fml-val">Las variables son independientes (no hay asociación)</span></div>
          <div class="fml-row"><span class="fml-label">H₁</span><span class="fml-val">Las variables están asociadas</span></div>
          <div class="fml-row"><span class="fml-label">Frec. esperada</span><span class="fml-val"><span class="ktx" data-f="E_{ij} = \\frac{(\\text{total}_i)(\\text{total}_j)}{N}"></span></span></div>
          <div class="fml-row"><span class="fml-label">Grados libertad</span><span class="fml-val">gl = (filas − 1) × (columnas − 1)</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section">Prueba de bondad de ajuste</div>
    <div class="fml-grid">
      <div class="fml-card g">
        <div class="fml-name">¿Siguen los datos una distribución teórica?</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">H₀</span><span class="fml-val">Los datos siguen la distribución esperada</span></div>
          <div class="fml-row"><span class="fml-label">H₁</span><span class="fml-val">Los datos NO siguen esa distribución</span></div>
          <div class="fml-row"><span class="fml-label">Grados libertad</span><span class="fml-val">gl = k − 1 (número de categorías menos 1)</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section">Medidas de asociación y supuestos</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">V de Cramér — Fuerza de la asociación</div>
        <div class="fml-formula"><span class="ktx" data-f="V = \\sqrt{\\dfrac{\\chi^2}{N \\cdot \\min(r-1,\\,c-1)}}"></span></div>
        <div class="fml-desc">0.10 débil · 0.30 moderada · 0.50 fuerte. Úsala solo si se rechaza H₀.</div>
      </div>
      <div class="fml-card w">
        <div class="fml-name">⚠️ Supuestos y limitaciones</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">Frec. esperada</span><span class="fml-val">≥ 5 en al menos el 80% de las celdas</span></div>
          <div class="fml-row"><span class="fml-label">Si E &lt; 5</span><span class="fml-val">En tabla 2×2: usar prueba exacta de Fisher</span></div>
          <div class="fml-row"><span class="fml-label">Tamaño mínimo</span><span class="fml-val">n total ≥ 20 para validez de la aproximación</span></div>
        </div>
      </div>
    </div>`;
  },

  _form() {
    return `
      <div class="section-title">Configurar prueba</div>

      <label class="inp-label">Tipo de prueba</label>
      <select class="inp-sel" id="chi-tipo" onchange="ModChi._updateForm()">
        <option value="independencia">Independencia (tabla de contingencia)</option>
        <option value="bondad">Bondad de ajuste</option>
      </select>

      <div id="chi-params">
        <label class="inp-label">Filas de la tabla — una fila por línea, valores separados por coma</label>
        <div class="ib" style="margin-bottom:8px;font-size:0.65rem">
          <strong>Ejemplo tabla 2×2:</strong><br>30, 20<br>15, 35
        </div>
        <textarea class="inp" id="chi-tabla" rows="5" placeholder="30, 20&#10;15, 35"></textarea>
      </div>

      <label class="inp-label">Nivel de significancia α</label>
      <select class="inp-sel" id="chi-alpha">
        <option value="0.01">α = 0.01 (1%)</option>
        <option value="0.05" selected>α = 0.05 (5%)</option>
        <option value="0.10">α = 0.10 (10%)</option>
      </select>

      <button class="btn-calc" onclick="ModChi.calcular()">Calcular χ² →</button>
      <button class="btn-s" onclick="ModChi.ejemplo()" style="width:100%;padding:9px;background:transparent;border:1px solid var(--border);border-radius:9px;color:var(--muted);font-family:'DM Mono',monospace;font-size:0.72rem;cursor:pointer;margin-top:6px">📋 Cargar ejemplo</button>
      <div id="chi-resultado"></div>`;
  },

  _updateForm() {
    const tipo = document.getElementById('chi-tipo').value;
    const p = document.getElementById('chi-params');
    if (tipo === 'independencia') {
      p.innerHTML = `
        <label class="inp-label">Filas de la tabla de contingencia — una fila por línea, valores por coma</label>
        <div class="ib" style="margin-bottom:8px;font-size:0.65rem"><strong>Ejemplo tabla 2×3:</strong><br>40, 25, 15<br>20, 30, 10</div>
        <textarea class="inp" id="chi-tabla" rows="5" placeholder="40, 25, 15&#10;20, 30, 10"></textarea>`;
    } else {
      p.innerHTML = `
        <label class="inp-label">Frecuencias observadas — separadas por coma</label>
        <input class="inp" id="chi-obs" type="text" placeholder="Ej: 52, 38, 60, 50">
        <label class="inp-label">Frecuencias esperadas o proporciones teóricas — separadas por coma</label>
        <input class="inp" id="chi-exp" type="text" placeholder="Ej: 50, 50, 50, 50  ó  0.25, 0.25, 0.25, 0.25">`;
    }
  },

  _parseRow(str) {
    return str.split(/[\s,;]+/).map(Number).filter(v => !isNaN(v));
  },

  async calcular() {
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
        const E = O.map((row,i) => row.map((_,j) => rowTotals[i]*colTotals[j]/n_total));
        let lowE = 0;
        chi2 = O.reduce((s,row,i) => s + row.reduce((ss,o,j) => {
          if (E[i][j] < 5) lowE++;
          return ss + (o-E[i][j])**2/E[i][j];
        }, 0), 0);

        if (lowE/(O.length*cols) > 0.2)
          advertencia = `⚠️ ${lowE} celdas tienen frecuencia esperada < 5. Considera la prueba exacta de Fisher si es tabla 2×2.`;
        cramer = Math.sqrt(chi2/(n_total*Math.min(O.length-1, cols-1)));

        tabla_html = `
          <div class="section-title">Tabla observada / esperada</div>
          <div class="tbl-scroll"><table class="freq-table">
            <thead><tr><th>Obs / Esp</th>${colTotals.map((_,j)=>`<th>Col ${j+1}</th>`).join('')}<th>Total</th></tr></thead>
            <tbody>
              ${O.map((row,i) => `<tr><th>Fila ${i+1}</th>${row.map((o,j)=>`<td>${o}<br><span style="color:var(--muted);font-size:0.6rem">(${Utils.fmt(E[i][j],2)})</span></td>`).join('')}<td><strong>${rowTotals[i]}</strong></td></tr>`).join('')}
              <tr><th>Total</th>${colTotals.map(c=>`<td><strong>${c}</strong></td>`).join('')}<td><strong>${n_total}</strong></td></tr>
            </tbody>
          </table></div>`;

      } else {
        const obs = this._parseRow(document.getElementById('chi-obs').value);
        let exp = this._parseRow(document.getElementById('chi-exp').value);
        if (obs.length < 2) throw new Error('Ingresa al menos 2 categorías.');
        if (exp.length !== obs.length) throw new Error('Las frecuencias observadas y esperadas deben tener el mismo número de categorías.');
        n_total = obs.reduce((a,b)=>a+b,0);
        const sumExp = exp.reduce((a,b)=>a+b,0);
        if (Math.abs(sumExp - 1) < 0.01) exp = exp.map(e => e * n_total);
        df = obs.length - 1;
        chi2 = obs.reduce((s,o,i) => s + (o-exp[i])**2/exp[i], 0);
      }

      const pval = 1 - this._chiCDF(chi2, df);
      const rechazar = pval < alpha;

      res.innerHTML = `
        ${tabla_html}
        ${advertencia ? `<div class="ib" style="border-color:var(--warn);margin:8px 0">${advertencia}</div>` : ''}

        <div class="section-title">Resultados</div>
        <div class="stats-grid" style="grid-template-columns:repeat(${cramer!==null?4:3},1fr)">
          <div class="stat-box">
            <span class="stat-val" style="color:var(--accent2)">${Utils.fmt(chi2,4)}</span>
            <span class="stat-lbl">χ² calculado</span>
          </div>
          <div class="stat-box">
            <span class="stat-val" style="color:${pval<0.05?'var(--accent)':'var(--warn)'}">${Utils.fmt(pval,4)}</span>
            <span class="stat-lbl">Valor p</span>
          </div>
          <div class="stat-box">
            <span class="stat-val">${df}</span>
            <span class="stat-lbl">Grados de libertad</span>
          </div>
          ${cramer !== null ? `<div class="stat-box"><span class="stat-val" style="color:var(--gold)">${Utils.fmt(cramer,4)}</span><span class="stat-lbl">V de Cramér</span></div>` : ''}
        </div>

        <div class="decision-box ${rechazar ? 'ok' : 'warn'}">
          <div class="dec-title">${rechazar ? '✅ Se rechaza H₀' : '⚠️ No se rechaza H₀'}</div>
          p = ${Utils.fmt(pval,4)} ${rechazar?'<':'≥'} α = ${alpha}<br>
          <span style="color:var(--muted);font-size:0.65rem">
            ${tipo==='independencia' ? 'Chi-cuadrado de Independencia' : 'Chi-cuadrado de Bondad de Ajuste'} ·
            χ² = ${Utils.fmt(chi2,4)} · gl = ${df} · n = ${n_total}
          </span>
        </div>

        ${AI.loadingBlock('chi-ai')}`;

      await AI.render(AI.promptChi(tipo, chi2, df, pval, alpha, rechazar, cramer, n_total), 'chi-ai');

    } catch(e) {
      res.innerHTML = `<div class="err">${e.message}</div>`;
    }
  },

  init() { this._updateForm(); },

  ejemplo() {
    // Independencia: género vs preferencia de carrera (2x3)
    const tipo = document.getElementById('chi-tipo');
    if (tipo) { tipo.value = 'independencia'; tipo.dispatchEvent(new Event('change')); }
    setTimeout(() => {
      const filas = document.getElementById('chi-filas');
      const cols  = document.getElementById('chi-cols');
      if (filas) { filas.value = '2'; filas.dispatchEvent(new Event('input')); }
      if (cols)  { cols.value  = '3'; cols.dispatchEvent(new Event('input'));  }
      setTimeout(() => {
        const datos = document.getElementById('chi-datos');
        if (datos) datos.value = '30, 20, 10\n15, 25, 20';
      }, 100);
    }, 50);
  },
};
