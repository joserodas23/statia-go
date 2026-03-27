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
      <div class="card" style="margin-top:0">
        <div class="tb tb-reg">📈 Regresión y Correlación</div>
        <div class="mod-tabs">
          <button class="mod-tab active" onclick="ModRegresion._tab('teoria',this)">📖 Teoría</button>
          <button class="mod-tab" onclick="ModRegresion._tab('calc',this)">📈 Calculador</button>
        </div>
        <div id="reg-teoria">${this._teoria()}</div>
        <div id="reg-calc" style="display:none">${this._form()}</div>
      </div>`;
    Utils.renderKaTeX(area);
  },

  _tab(id, btn) {
    ['teoria','calc'].forEach(t =>
      document.getElementById('reg-'+t).style.display = t===id ? '' : 'none'
    );
    btn.closest('.mod-tabs').querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  },

  _teoria() {
    return `
    <div class="step" style="border-left-color:var(--gold)">
      <div class="step-num">Concepto base</div>
      <div class="step-title">¿Qué es regresión y correlación?</div>
      La <strong>correlación</strong> mide la fuerza y dirección de la relación lineal entre dos variables cuantitativas. La <strong>regresión</strong> construye una ecuación para predecir Y a partir de X. Ambas trabajan con pares de datos (xᵢ, yᵢ).
    </div>

    <div class="fml-section">Correlación de Pearson</div>
    <div class="fml-grid">
      <div class="fml-card g">
        <div class="fml-name">r de Pearson — Variables continuas con relación lineal</div>
        <div class="fml-formula"><span class="ktx" data-f="r = \\dfrac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sqrt{\\sum(x_i-\\bar{x})^2 \\cdot \\sum(y_i-\\bar{y})^2}}"></span></div>
        <div class="fml-body" style="margin-top:8px">
          <div class="fml-row"><span class="fml-label">Rango</span><span class="fml-val">−1 ≤ r ≤ 1</span></div>
          <div class="fml-row"><span class="fml-label">Interpretación</span><span class="fml-val">|r| &lt; 0.3 débil · 0.3–0.7 moderada · &gt; 0.7 fuerte</span></div>
          <div class="fml-row"><span class="fml-label">Dirección</span><span class="fml-val">r &gt; 0 directa (↑↑) · r &lt; 0 inversa (↑↓)</span></div>
          <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">Variables cuantitativas, relación lineal, sin outliers extremos</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section">Correlación de Spearman</div>
    <div class="fml-grid">
      <div class="fml-card b">
        <div class="fml-name">ρ de Spearman — Variables ordinales o no normales</div>
        <div class="fml-formula"><span class="ktx" data-f="\\rho = 1 - \\dfrac{6\\sum d_i^2}{n(n^2-1)}"></span></div>
        <div class="fml-body" style="margin-top:8px">
          <div class="fml-row"><span class="fml-label">d</span><span class="fml-val">Diferencia entre rangos de xᵢ e yᵢ</span></div>
          <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">Variables ordinales, distribución no normal, presencia de outliers</span></div>
          <div class="fml-row"><span class="fml-label">Ventaja</span><span class="fml-val">Más robusta que Pearson ante valores extremos</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section">Regresión lineal simple</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">Modelo de predicción</div>
        <div class="fml-formula"><span class="ktx" data-f="\\hat{Y} = b_0 + b_1 X"></span></div>
        <div class="fml-body" style="margin-top:8px">
          <div class="fml-row"><span class="fml-label">Pendiente b₁</span><span class="fml-val"><span class="ktx" data-f="b_1 = \\frac{\\sum(x_i-\\bar{x})(y_i-\\bar{y})}{\\sum(x_i-\\bar{x})^2}"></span></span></div>
          <div class="fml-row"><span class="fml-label">Intercepto b₀</span><span class="fml-val"><span class="ktx" data-f="b_0 = \\bar{y} - b_1\\bar{x}"></span></span></div>
          <div class="fml-row"><span class="fml-label">R² interpretación</span><span class="fml-val">&lt; 25% débil · 25–64% moderado · &gt; 64% fuerte</span></div>
        </div>
      </div>
      <div class="fml-card">
        <div class="fml-name">Prueba de significancia (H₀: ρ = 0)</div>
        <div class="fml-formula"><span class="ktx" data-f="t = \\dfrac{r\\sqrt{n-2}}{\\sqrt{1-r^2}}, \\quad gl = n-2"></span></div>
        <div class="fml-desc">Si p &lt; α → la correlación es estadísticamente significativa en la población.</div>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--warn)">
      <div class="step-num">⚠️ Advertencia importante</div>
      <div class="step-title">Correlación ≠ causalidad</div>
      Un r o ρ alto indica asociación estadística, pero NO prueba que X cause Y. Pueden existir variables confusoras o relaciones espurias. Siempre interpretar en el contexto teórico del estudio.
    </div>`;
  },

  _form() {
    return `
      <div class="section-title">Ingresar datos</div>

      <label class="inp-label">Tipo de análisis</label>
      <select class="inp-sel" id="reg-tipo">
        <option value="todo">Regresión + Pearson + Spearman</option>
        <option value="pearson">Solo correlación de Pearson</option>
        <option value="spearman">Solo correlación de Spearman</option>
      </select>

      <div class="row2">
        <div>
          <label class="inp-label">Nombre variable X</label>
          <input class="inp" id="reg-nx" type="text" placeholder="Ej: Estatura (cm)">
        </div>
        <div>
          <label class="inp-label">Nombre variable Y</label>
          <input class="inp" id="reg-ny" type="text" placeholder="Ej: Peso (kg)">
        </div>
      </div>

      <label class="inp-label">Datos de X — separados por coma o espacio</label>
      <textarea class="inp" id="reg-x" rows="2" placeholder="Ej: 165, 170, 175, 160, 180"></textarea>

      <label class="inp-label">Datos de Y — mismo orden que X</label>
      <textarea class="inp" id="reg-y" rows="2" placeholder="Ej: 60, 70, 75, 55, 85"></textarea>

      <label class="inp-label">Nivel de significancia α</label>
      <select class="inp-sel" id="reg-alpha">
        <option value="0.01">α = 0.01 (1%)</option>
        <option value="0.05" selected>α = 0.05 (5%)</option>
        <option value="0.10">α = 0.10 (10%)</option>
      </select>

      <button class="btn-calc" onclick="ModRegresion.calcular()">Calcular →</button>
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
      const avg = (i + j - 1) / 2 + 1;
      for (let k = i; k < j; k++) ranks[sorted[k].i] = avg;
      i = j;
    }
    return ranks;
  },

  calcular() {
    const x = this._parseNums(document.getElementById('reg-x').value);
    const y = this._parseNums(document.getElementById('reg-y').value);
    const alpha = parseFloat(document.getElementById('reg-alpha').value);
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
    const sxy = x.reduce((s,xi,i) => s+(xi-xbar)*(y[i]-ybar),0);
    const sxx = x.reduce((s,xi) => s+(xi-xbar)**2,0);
    const syy = y.reduce((s,yi) => s+(yi-ybar)**2,0);

    const r    = sxy / Math.sqrt(sxx * syy);
    const r2   = r * r;
    const tP   = r * Math.sqrt(n-2) / Math.sqrt(1-r2);
    const pP   = 2 * Math.min(this._tCDF(tP,n-2), 1-this._tCDF(tP,n-2));

    const rx   = this._rank(x);
    const ry   = this._rank(y);
    const d2   = rx.reduce((s,ri,i)=>s+(ri-ry[i])**2,0);
    const rho  = 1 - 6*d2/(n*(n*n-1));
    const tS   = rho * Math.sqrt(n-2) / Math.sqrt(1-rho*rho);
    const pS   = 2 * Math.min(this._tCDF(tS,n-2), 1-this._tCDF(tS,n-2));

    const b1   = sxy / sxx;
    const b0   = ybar - b1 * xbar;
    const SST  = syy;
    const SSR  = b1 * sxy;
    const SSE  = SST - SSR;
    const MSE  = SSE / (n-2);
    const Se   = Math.sqrt(MSE);

    const rLbl = v => Math.abs(v)>0.7?'fuerte':Math.abs(v)>0.3?'moderada':'débil';
    const rDir = v => v>0?'positiva':'negativa';
    const sig  = p => p<alpha ? `<span style="color:var(--accent)">✅ Significativa</span>` : `<span style="color:var(--warn)">⚠️ No significativa</span>`;

    res.innerHTML = `
      <div class="section-title">Correlación</div>
      <div class="stats-grid">
        <div class="stat-box">
          <span class="stat-val" style="color:var(--accent)">${Utils.fmt(r,4)}</span>
          <span class="stat-lbl">r de Pearson<br>${rLbl(r)} ${rDir(r)}</span>
        </div>
        <div class="stat-box">
          <span class="stat-val" style="color:var(--accent2)">${Utils.fmt(rho,4)}</span>
          <span class="stat-lbl">ρ de Spearman<br>${rLbl(rho)} ${rDir(rho)}</span>
        </div>
        <div class="stat-box">
          <span class="stat-val" style="color:var(--gold)">${Utils.fmt(r2*100,2)}%</span>
          <span class="stat-lbl">R² varianza<br>explicada</span>
        </div>
        <div class="stat-box">
          <span class="stat-val">${Utils.fmt(Se,4)}</span>
          <span class="stat-lbl">Error estándar Sₑ</span>
        </div>
      </div>

      <div class="ib" style="margin:10px 0">
        <strong>Pearson:</strong> r = ${Utils.fmt(r,4)}, p = ${Utils.fmt(pP,4)} → ${sig(pP)} (α = ${alpha})<br>
        <strong>Spearman:</strong> ρ = ${Utils.fmt(rho,4)}, p = ${Utils.fmt(pS,4)} → ${sig(pS)}
      </div>

      <div class="section-title">Modelo de regresión</div>
      <div class="decision-box ok">
        <div class="dec-title">Ŷ = ${Utils.fmt(b0,4)} + ${Utils.fmt(b1,4)} × X</div>
        Por cada unidad que aumenta <strong>${nx}</strong>, <strong>${ny}</strong> cambia en <strong>${Utils.fmt(b1,4)}</strong> unidades.<br>
        El modelo explica el <strong>${Utils.fmt(r2*100,2)}%</strong> de la variabilidad de ${ny}.
      </div>

      <div class="section-title">Tabla ANOVA de la regresión</div>
      <div class="tbl-scroll"><table class="freq-table">
        <thead><tr><th>Fuente</th><th>SC</th><th>gl</th><th>CM</th></tr></thead>
        <tbody>
          <tr><td>Regresión</td><td>${Utils.fmt(SSR,4)}</td><td>1</td><td>${Utils.fmt(SSR,4)}</td></tr>
          <tr><td>Error</td><td>${Utils.fmt(SSE,4)}</td><td>${n-2}</td><td>${Utils.fmt(MSE,4)}</td></tr>
          <tr><td><strong>Total</strong></td><td>${Utils.fmt(SST,4)}</td><td>${n-1}</td><td>—</td></tr>
        </tbody>
      </table></div>

      ${AI.loadingBlock('reg-ai')}`;

    await AI.render(AI.promptRegresion(nx, ny, n, r, rho, r2, b0, b1, Se, pP, pS, alpha), 'reg-ai');
  }
};
