/* ============================================
   STATIA GO — js/modulos/05_regresion/regresion.js
   Módulo: Regresión y Correlación
   Regresión lineal simple, Pearson, Spearman
   by Jose Rodas
   ============================================ */

const ModRegresion = {

  _tCDF: (t, df) => ModDistribuciones._tCDF(t, df),

  render(area) {
    area.innerHTML = `
      <div class="mod-tabs">
        <button class="mod-tab active" onclick="ModRegresion._tab('teoria',this)">📖 Teoría</button>
        <button class="mod-tab" onclick="ModRegresion._tab('calc',this)">📈 Calculador</button>
      </div>
      <div id="reg-teoria">${this._teoria()}</div>
      <div id="reg-calc" style="display:none">${this._form()}</div>`;
    area.querySelectorAll('.ktx').forEach(el => {
      try { katex.render(el.dataset.f, el, { throwOnError: false }); } catch(e) {}
    });
  },

  _tab(id, btn) {
    ['teoria','calc'].forEach(t => {
      document.getElementById('reg-'+t).style.display = t === id ? '' : 'none';
    });
    document.querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  },

  _teoria() {
    return `
    <div class="tut-section">
      <div class="tut-title">¿Qué es la regresión y correlación?</div>
      <div class="tut-body">La <strong>correlación</strong> mide la fuerza y dirección de la relación lineal entre dos variables cuantitativas. La <strong>regresión lineal</strong> va más allá: construye una ecuación que permite predecir el valor de una variable (Y) a partir de otra (X).</div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Correlación de Pearson (r)</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">Variables cuantitativas con relación lineal, distribución aproximadamente normal</span></div>
        <div class="fml-row"><span class="fml-label">Fórmula</span><span class="fml-val ktx" data-f="r = \\dfrac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2 \\sum(y_i-\\bar{y})^2}}"></span></div>
        <div class="fml-row"><span class="fml-label">Rango</span><span class="fml-val">−1 ≤ r ≤ 1</span></div>
        <div class="fml-row"><span class="fml-label">Interpretación</span><span class="fml-val">|r| < 0.3 débil | 0.3–0.7 moderada | > 0.7 fuerte<br>r > 0 directa | r < 0 inversa</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Correlación de Spearman (ρ)</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">Variables ordinales o cuando no hay normalidad; más robusta ante outliers</span></div>
        <div class="fml-row"><span class="fml-label">Fórmula simplificada</span><span class="fml-val ktx" data-f="\\rho = 1 - \\dfrac{6\\sum d_i^2}{n(n^2-1)}"></span></div>
        <div class="fml-row"><span class="fml-label">d</span><span class="fml-val">Diferencia entre rangos de cada par (xᵢ, yᵢ)</span></div>
        <div class="fml-row"><span class="fml-label">Interpretación</span><span class="fml-val">Misma escala que Pearson: −1 a 1</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Regresión Lineal Simple</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Modelo</span><span class="fml-val ktx" data-f="\\hat{Y} = b_0 + b_1 X"></span></div>
        <div class="fml-row"><span class="fml-label">Pendiente b₁</span><span class="fml-val ktx" data-f="b_1 = \\dfrac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2}"></span></div>
        <div class="fml-row"><span class="fml-label">Intercepto b₀</span><span class="fml-val ktx" data-f="b_0 = \\bar{y} - b_1\\bar{x}"></span></div>
        <div class="fml-row"><span class="fml-label">R² (determinación)</span><span class="fml-val">% de variabilidad de Y explicada por X</span></div>
        <div class="fml-row"><span class="fml-label">Interpretación R²</span><span class="fml-val">< 0.25 débil | 0.25–0.64 moderado | > 0.64 fuerte</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Prueba de significancia</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">H₀</span><span class="fml-val">ρ = 0 (no hay correlación lineal en la población)</span></div>
        <div class="fml-row"><span class="fml-label">Estadístico t</span><span class="fml-val ktx" data-f="t = \\dfrac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}"></span></div>
        <div class="fml-row"><span class="fml-label">Grados de libertad</span><span class="fml-val">gl = n − 2</span></div>
      </div>
    </div>

    <div class="tut-section">
      <div class="tut-title">⚠️ Correlación no implica causalidad</div>
      <div class="tut-body">Un coeficiente de correlación alto solo indica asociación estadística. No prueba que X <em>cause</em> Y. Pueden existir variables de confusión o relaciones espurias (casuales). Siempre contextualizar los resultados con el marco teórico del estudio.</div>
    </div>`;
  },

  _form() {
    return `
    <div class="calc-card">
      <div class="calc-title">📈 Regresión y Correlación</div>

      <label class="inp-label">Tipo de análisis</label>
      <select class="inp-sel" id="reg-tipo">
        <option value="todo">Regresión + Pearson + Spearman</option>
        <option value="pearson">Solo correlación de Pearson</option>
        <option value="spearman">Solo correlación de Spearman</option>
      </select>

      <label class="inp-label">Variable X (separada por coma o espacio)</label>
      <textarea class="inp" id="reg-x" rows="2" placeholder="Ej: 165, 170, 175, 160, 180"></textarea>

      <label class="inp-label">Variable Y (mismo orden que X)</label>
      <textarea class="inp" id="reg-y" rows="2" placeholder="Ej: 60, 70, 75, 55, 85"></textarea>

      <label class="inp-label">Nombre variable X</label>
      <input class="inp" id="reg-nx" type="text" placeholder="Ej: Estatura (cm)">

      <label class="inp-label">Nombre variable Y</label>
      <input class="inp" id="reg-ny" type="text" placeholder="Ej: Peso (kg)">

      <label class="inp-label">Nivel de significancia α</label>
      <select class="inp-sel" id="reg-alpha">
        <option value="0.01">0.01 (1%)</option>
        <option value="0.05" selected>0.05 (5%)</option>
        <option value="0.10">0.10 (10%)</option>
      </select>

      <button class="btn-calc" onclick="ModRegresion.calcular()">Calcular</button>
    </div>
    <div id="reg-resultado"></div>`;
  },

  _parseNums(str) {
    return str.split(/[\s,;]+/).map(Number).filter(v => !isNaN(v));
  },

  _rank(arr) {
    const sorted = [...arr].map((v,i) => ({v,i})).sort((a,b) => a.v - b.v);
    const ranks = new Array(arr.length);
    let i = 0;
    while (i < sorted.length) {
      let j = i;
      while (j < sorted.length && sorted[j].v === sorted[i].v) j++;
      const avgRank = (i + j - 1) / 2 + 1;
      for (let k = i; k < j; k++) ranks[sorted[k].i] = avgRank;
      i = j;
    }
    return ranks;
  },

  calcular() {
    const x = this._parseNums(document.getElementById('reg-x').value);
    const y = this._parseNums(document.getElementById('reg-y').value);
    const alpha = parseFloat(document.getElementById('reg-alpha').value);
    const tipo = document.getElementById('reg-tipo').value;
    const nx = document.getElementById('reg-nx').value || 'X';
    const ny = document.getElementById('reg-ny').value || 'Y';
    const res = document.getElementById('reg-resultado');

    if (x.length < 3 || x.length !== y.length) {
      res.innerHTML = `<div class="err">Ambas variables deben tener el mismo número de datos (mínimo 3).</div>`;
      return;
    }

    const n = x.length;
    const xbar = x.reduce((a,b)=>a+b,0)/n;
    const ybar = y.reduce((a,b)=>a+b,0)/n;
    const sxy = x.reduce((s,xi,i) => s+(xi-xbar)*(y[i]-ybar), 0);
    const sxx = x.reduce((s,xi) => s+(xi-xbar)**2, 0);
    const syy = y.reduce((s,yi) => s+(yi-ybar)**2, 0);

    // Pearson
    const r = sxy / Math.sqrt(sxx * syy);
    const r2 = r * r;
    const tPearson = r * Math.sqrt(n-2) / Math.sqrt(1-r2);
    const dfPearson = n - 2;
    const pPearson = 2 * Math.min(this._tCDF(tPearson, dfPearson), 1 - this._tCDF(tPearson, dfPearson));

    // Spearman
    const rx = this._rank(x);
    const ry = this._rank(y);
    const d2 = rx.reduce((s,r,i) => s+(r-ry[i])**2, 0);
    const rho = 1 - 6*d2/(n*(n*n-1));
    const tSpearman = rho * Math.sqrt(n-2) / Math.sqrt(1-rho*rho);
    const pSpearman = 2 * Math.min(this._tCDF(tSpearman, dfPearson), 1 - this._tCDF(tSpearman, dfPearson));

    // Regresión
    const b1 = sxy / sxx;
    const b0 = ybar - b1 * xbar;
    const SST = syy;
    const SSR = b1 * sxy;
    const SSE = SST - SSR;
    const MSE = SSE / (n-2);
    const Se = Math.sqrt(MSE);

    const rLabel = r => Math.abs(r) > 0.7 ? 'fuerte' : Math.abs(r) > 0.3 ? 'moderada' : 'débil';
    const rDir   = r => r > 0 ? 'positiva (directa)' : 'negativa (inversa)';
    const sig    = p => p < alpha ? '✅ Significativa' : '⚠️ No significativa';

    res.innerHTML = `
      <div class="stats-grid">
        <div class="stat-box"><div class="stat-val">${Utils.fmt(r,4)}</div><div class="stat-lbl">r de Pearson</div></div>
        <div class="stat-box"><div class="stat-val">${Utils.fmt(rho,4)}</div><div class="stat-lbl">ρ de Spearman</div></div>
        <div class="stat-box"><div class="stat-val">${Utils.fmt(r2*100,2)}%</div><div class="stat-lbl">R² (varianza explicada)</div></div>
        <div class="stat-box"><div class="stat-val">${Utils.fmt(b1,4)}</div><div class="stat-lbl">Pendiente b₁</div></div>
        <div class="stat-box"><div class="stat-val">${Utils.fmt(b0,4)}</div><div class="stat-lbl">Intercepto b₀</div></div>
        <div class="stat-box"><div class="stat-val">${Utils.fmt(Se,4)}</div><div class="stat-lbl">Error estándar Sₑ</div></div>
      </div>

      <div class="ib" style="margin:10px 0">
        <strong>Ecuación de regresión:</strong><br>
        <span style="font-family:'DM Mono',monospace;font-size:0.85rem;color:var(--accent)">
          Ŷ = ${Utils.fmt(b0,4)} + ${Utils.fmt(b1,4)} × X
        </span><br><br>
        <strong>Pearson:</strong> r = ${Utils.fmt(r,4)} → correlación ${rLabel(r)} ${rDir(r)} | p = ${Utils.fmt(pPearson,4)} → ${sig(pPearson)}<br>
        <strong>Spearman:</strong> ρ = ${Utils.fmt(rho,4)} → correlación ${rLabel(rho)} ${rDir(rho)} | p = ${Utils.fmt(pSpearman,4)} → ${sig(pSpearman)}<br>
        <strong>R²:</strong> El modelo explica el ${Utils.fmt(r2*100,2)}% de la variabilidad de ${ny}.<br>
        <strong>Interpretación b₁:</strong> Por cada unidad que aumenta ${nx}, ${ny} cambia en ${Utils.fmt(b1,4)} unidades.
      </div>

      <div class="tbl-scroll">
        <table class="freq-table" style="margin:10px 0;font-size:0.7rem">
          <tr><th>Fuente</th><th>SC</th><th>gl</th><th>CM</th></tr>
          <tr><td>Regresión</td><td>${Utils.fmt(SSR,4)}</td><td>1</td><td>${Utils.fmt(SSR,4)}</td></tr>
          <tr><td>Error</td><td>${Utils.fmt(SSE,4)}</td><td>${n-2}</td><td>${Utils.fmt(MSE,4)}</td></tr>
          <tr><td>Total</td><td>${Utils.fmt(SST,4)}</td><td>${n-1}</td><td>—</td></tr>
        </table>
      </div>

      ${AI.loadingBlock('reg-ai')}`;

    const prompt = AI.promptRegresion(nx, ny, n, r, rho, r2, b0, b1, Se, pPearson, pSpearman, alpha);
    AI.render(prompt, 'reg-ai');
  }
};
