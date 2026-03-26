/* ============================================
   STATIA GO — js/modulos/03_hipotesis/hipotesis.js
   Módulo: Pruebas de Hipótesis
   Z, t una/dos muestras, t pareada, ANOVA
   by Jose Rodas
   ============================================ */

const ModHipotesis = {

  // ===== MATEMÁTICAS (delega a ModDistribuciones) =====
  _normalCDF: x => ModDistribuciones._normalCDF(x),
  _tCDF: (t, df) => ModDistribuciones._tCDF(t, df),
  _fCDF: (f, d1, d2) => ModDistribuciones._fCDF(f, d1, d2),

  // p-valor según cola
  _pval(stat, df, cola, tipo) {
    let p;
    if (tipo === 'Z') {
      const cdf = this._normalCDF(stat);
      p = cola === 'bilateral' ? 2 * Math.min(cdf, 1 - cdf)
        : cola === 'izquierda' ? cdf : 1 - cdf;
    } else if (tipo === 'F') {
      p = 1 - this._fCDF(stat, df[0], df[1]);
    } else {
      const cdf = this._tCDF(stat, df);
      p = cola === 'bilateral' ? 2 * Math.min(cdf, 1 - cdf)
        : cola === 'izquierda' ? cdf : 1 - cdf;
    }
    return Math.max(0, Math.min(1, p));
  },

  // ===== RENDER PRINCIPAL =====
  render(area) {
    area.innerHTML = `
      <div class="mod-tabs">
        <button class="mod-tab active" onclick="ModHipotesis._tab('teoria',this)">📖 Teoría</button>
        <button class="mod-tab" onclick="ModHipotesis._tab('calc',this)">🧪 Calculador</button>
      </div>
      <div id="hip-teoria">${this._teoria()}</div>
      <div id="hip-calc" style="display:none">${this._form()}</div>`;
    if (typeof Utils !== 'undefined' && Utils.tex) {
      area.querySelectorAll('.ktx').forEach(el => {
        try { katex.render(el.dataset.f, el, { throwOnError: false }); } catch(e) {}
      });
    }
  },

  _tab(id, btn) {
    ['teoria','calc'].forEach(t => {
      document.getElementById('hip-'+t).style.display = t === id ? '' : 'none';
    });
    document.querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  },

  // ===== TEORÍA =====
  _teoria() {
    return `
    <div class="tut-section">
      <div class="tut-title">¿Qué es una prueba de hipótesis?</div>
      <div class="tut-body">Una prueba de hipótesis es un procedimiento estadístico que permite tomar decisiones sobre parámetros poblacionales a partir de una muestra. Se plantean dos hipótesis opuestas y se determina cuál es más compatible con los datos observados.</div>
    </div>

    <div class="fml-card">
      <div class="fml-title">H₀ vs H₁ — Hipótesis</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">H₀ (nula)</span><span class="fml-val">No hay efecto o diferencia. Ej: μ = μ₀</span></div>
        <div class="fml-row"><span class="fml-label">H₁ (alterna)</span><span class="fml-val">Hay efecto o diferencia. Ej: μ ≠ μ₀, μ > μ₀, μ < μ₀</span></div>
        <div class="fml-row"><span class="fml-label">α (significancia)</span><span class="fml-val">Probabilidad de error tipo I. Valores típicos: 0.01, 0.05, 0.10</span></div>
        <div class="fml-row"><span class="fml-label">Valor p</span><span class="fml-val">Si p &lt; α → rechazar H₀. Si p ≥ α → no rechazar H₀</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Tipos de error</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Error tipo I (α)</span><span class="fml-val">Rechazar H₀ cuando es verdadera (falso positivo)</span></div>
        <div class="fml-row"><span class="fml-label">Error tipo II (β)</span><span class="fml-val">No rechazar H₀ cuando es falsa (falso negativo)</span></div>
        <div class="fml-row"><span class="fml-label">Potencia (1−β)</span><span class="fml-val">Probabilidad de rechazar H₀ cuando es falsa</span></div>
      </div>
    </div>

    <div class="tut-section">
      <div class="tut-title">Tipos de cola</div>
      <div class="tut-body">
        <strong>Bilateral (≠):</strong> H₁: μ ≠ μ₀ → rechazar si estadístico está en cualquier extremo.<br>
        <strong>Cola derecha (>):</strong> H₁: μ > μ₀ → rechazar solo si estadístico es muy grande.<br>
        <strong>Cola izquierda (<):</strong> H₁: μ < μ₀ → rechazar solo si estadístico es muy pequeño.
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Prueba Z — Media con σ conocida o n ≥ 30</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">σ poblacional conocida o muestra grande (n ≥ 30)</span></div>
        <div class="fml-row"><span class="fml-label">Estadístico</span><span class="fml-val ktx" data-f="Z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}"></span></div>
        <div class="fml-row"><span class="fml-label">Distribución</span><span class="fml-val">Normal estándar N(0,1)</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Prueba t — Una muestra (σ desconocida)</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">σ desconocida, cualquier n (especialmente n < 30)</span></div>
        <div class="fml-row"><span class="fml-label">Estadístico</span><span class="fml-val ktx" data-f="t = \\dfrac{\\bar{x} - \\mu_0}{S / \\sqrt{n}}"></span></div>
        <div class="fml-row"><span class="fml-label">Grados de libertad</span><span class="fml-val">gl = n − 1</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Prueba t — Dos muestras independientes</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">Comparar medias de dos grupos distintos e independientes</span></div>
        <div class="fml-row"><span class="fml-label">Estadístico</span><span class="fml-val ktx" data-f="t = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}"></span></div>
        <div class="fml-row"><span class="fml-label">Varianza combinada</span><span class="fml-val ktx" data-f="S_p^2 = \\dfrac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}"></span></div>
        <div class="fml-row"><span class="fml-label">Grados de libertad</span><span class="fml-val">gl = n₁ + n₂ − 2</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">Prueba t — Muestras pareadas</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">Antes/después, mismo sujeto medido dos veces</span></div>
        <div class="fml-row"><span class="fml-label">Diferencias</span><span class="fml-val ktx" data-f="d_i = x_{1i} - x_{2i}"></span></div>
        <div class="fml-row"><span class="fml-label">Estadístico</span><span class="fml-val ktx" data-f="t = \\dfrac{\\bar{d}}{S_d / \\sqrt{n}}"></span></div>
        <div class="fml-row"><span class="fml-label">Grados de libertad</span><span class="fml-val">gl = n − 1</span></div>
      </div>
    </div>

    <div class="fml-card">
      <div class="fml-title">ANOVA de una vía — Comparar 3+ grupos</div>
      <div class="fml-body">
        <div class="fml-row"><span class="fml-label">Cuándo usarla</span><span class="fml-val">Comparar medias de 3 o más grupos independientes</span></div>
        <div class="fml-row"><span class="fml-label">Estadístico F</span><span class="fml-val ktx" data-f="F = \\dfrac{CME}{CMD}=\\dfrac{SCE/(k-1)}{SCD/(N-k)}"></span></div>
        <div class="fml-row"><span class="fml-label">H₀</span><span class="fml-val">μ₁ = μ₂ = ... = μk (todas las medias iguales)</span></div>
        <div class="fml-row"><span class="fml-label">Grados de libertad</span><span class="fml-val">gl₁ = k−1 (entre grupos) | gl₂ = N−k (dentro)</span></div>
      </div>
    </div>`;
  },

  // ===== FORMULARIO =====
  _form() {
    return `
    <div class="calc-card">
      <div class="calc-title">🧪 Prueba de Hipótesis</div>

      <label class="inp-label">Tipo de prueba</label>
      <select class="inp-sel" id="hip-tipo" onchange="ModHipotesis._updateForm()">
        <option value="z1">Prueba Z — una muestra</option>
        <option value="t1">Prueba t — una muestra</option>
        <option value="t2">Prueba t — dos muestras independientes</option>
        <option value="tp">Prueba t — muestras pareadas</option>
        <option value="anova">ANOVA una vía</option>
      </select>

      <div id="hip-params"></div>

      <label class="inp-label">Nivel de significancia α</label>
      <select class="inp-sel" id="hip-alpha">
        <option value="0.01">0.01 (1%)</option>
        <option value="0.05" selected>0.05 (5%)</option>
        <option value="0.10">0.10 (10%)</option>
      </select>

      <label class="inp-label">Tipo de cola</label>
      <select class="inp-sel" id="hip-cola">
        <option value="bilateral">Bilateral (H₁: ≠)</option>
        <option value="derecha">Cola derecha (H₁: >)</option>
        <option value="izquierda">Cola izquierda (H₁: <)</option>
      </select>

      <button class="btn-calc" onclick="ModHipotesis.calcular()">Calcular prueba</button>
    </div>
    <div id="hip-resultado"></div>`;
  },

  _updateForm() {
    const tipo = document.getElementById('hip-tipo').value;
    const p = document.getElementById('hip-params');
    const colaEl = document.getElementById('hip-cola');
    if (tipo === 'anova') {
      colaEl.parentElement.style.display = 'none';
      colaEl.parentElement.previousElementSibling.style.display = 'none';
    } else {
      colaEl.parentElement.style.display = '';
      colaEl.parentElement.previousElementSibling.style.display = '';
    }
    const inp = (id, lbl, ph, val='') =>
      `<label class="inp-label">${lbl}</label><input class="inp" id="${id}" type="number" step="any" placeholder="${ph}" value="${val}">`;

    if (tipo === 'z1') {
      p.innerHTML = `
        ${inp('hip-xbar','Media muestral (x̄)','Ej: 52.3')}
        ${inp('hip-mu0','Media hipotética (μ₀)','Ej: 50')}
        ${inp('hip-sigma','Desviación estándar poblacional (σ)','Ej: 8')}
        ${inp('hip-n1','Tamaño de muestra (n)','Ej: 36')}`;
    } else if (tipo === 't1') {
      p.innerHTML = `
        ${inp('hip-xbar','Media muestral (x̄)','Ej: 52.3')}
        ${inp('hip-mu0','Media hipotética (μ₀)','Ej: 50')}
        ${inp('hip-s1','Desviación estándar muestral (S)','Ej: 8.5')}
        ${inp('hip-n1','Tamaño de muestra (n)','Ej: 20')}`;
    } else if (tipo === 't2') {
      p.innerHTML = `
        ${inp('hip-xbar','Media muestra 1 (x̄₁)','Ej: 75.2')}
        ${inp('hip-xbar2','Media muestra 2 (x̄₂)','Ej: 71.8')}
        ${inp('hip-s1','Desv. estándar muestra 1 (S₁)','Ej: 6.4')}
        ${inp('hip-s2','Desv. estándar muestra 2 (S₂)','Ej: 5.9')}
        ${inp('hip-n1','Tamaño muestra 1 (n₁)','Ej: 25')}
        ${inp('hip-n2','Tamaño muestra 2 (n₂)','Ej: 30')}`;
    } else if (tipo === 'tp') {
      p.innerHTML = `
        <label class="inp-label">Datos muestra 1 (antes) — separados por coma o espacio</label>
        <textarea class="inp" id="hip-datos1" rows="2" placeholder="Ej: 85, 90, 78, 92, 88"></textarea>
        <label class="inp-label">Datos muestra 2 (después) — mismo orden</label>
        <textarea class="inp" id="hip-datos2" rows="2" placeholder="Ej: 91, 95, 83, 97, 94"></textarea>`;
    } else if (tipo === 'anova') {
      p.innerHTML = `
        <label class="inp-label">Grupos (un grupo por línea, valores separados por coma)</label>
        <textarea class="inp" id="hip-grupos" rows="5" placeholder="Grupo 1: 85, 90, 78&#10;Grupo 2: 70, 75, 68&#10;Grupo 3: 92, 88, 95"></textarea>`;
    }
  },

  _parseNums(str) {
    return str.split(/[\s,;]+/).map(Number).filter(v => !isNaN(v) && v !== null && v !== undefined && str.trim() !== '');
  },

  // ===== CALCULAR =====
  calcular() {
    const tipo = document.getElementById('hip-tipo').value;
    const alpha = parseFloat(document.getElementById('hip-alpha').value);
    const cola = document.getElementById('hip-cola')?.value || 'bilateral';
    const res = document.getElementById('hip-resultado');

    let stat, df, pval, titulo, detalle, grupos_info = '';

    try {
      if (tipo === 'z1') {
        const xbar = parseFloat(document.getElementById('hip-xbar').value);
        const mu0  = parseFloat(document.getElementById('hip-mu0').value);
        const sig  = parseFloat(document.getElementById('hip-sigma').value);
        const n    = parseFloat(document.getElementById('hip-n1').value);
        if ([xbar,mu0,sig,n].some(isNaN)) throw new Error('Completa todos los campos.');
        stat = (xbar - mu0) / (sig / Math.sqrt(n));
        pval = this._pval(stat, null, cola, 'Z');
        titulo = 'Prueba Z — Una muestra';
        detalle = `x̄ = ${Utils.fmt(xbar,4)} | μ₀ = ${mu0} | σ = ${sig} | n = ${n}`;

      } else if (tipo === 't1') {
        const xbar = parseFloat(document.getElementById('hip-xbar').value);
        const mu0  = parseFloat(document.getElementById('hip-mu0').value);
        const s    = parseFloat(document.getElementById('hip-s1').value);
        const n    = parseFloat(document.getElementById('hip-n1').value);
        if ([xbar,mu0,s,n].some(isNaN)) throw new Error('Completa todos los campos.');
        stat = (xbar - mu0) / (s / Math.sqrt(n));
        df = n - 1;
        pval = this._pval(stat, df, cola, 't');
        titulo = 'Prueba t — Una muestra';
        detalle = `x̄ = ${Utils.fmt(xbar,4)} | μ₀ = ${mu0} | S = ${s} | n = ${n} | gl = ${df}`;

      } else if (tipo === 't2') {
        const xbar1 = parseFloat(document.getElementById('hip-xbar').value);
        const xbar2 = parseFloat(document.getElementById('hip-xbar2').value);
        const s1    = parseFloat(document.getElementById('hip-s1').value);
        const s2    = parseFloat(document.getElementById('hip-s2').value);
        const n1    = parseFloat(document.getElementById('hip-n1').value);
        const n2    = parseFloat(document.getElementById('hip-n2').value);
        if ([xbar1,xbar2,s1,s2,n1,n2].some(isNaN)) throw new Error('Completa todos los campos.');
        const sp2 = ((n1-1)*s1*s1 + (n2-1)*s2*s2) / (n1+n2-2);
        const sp  = Math.sqrt(sp2);
        stat = (xbar1 - xbar2) / (sp * Math.sqrt(1/n1 + 1/n2));
        df = n1 + n2 - 2;
        pval = this._pval(stat, df, cola, 't');
        titulo = 'Prueba t — Dos muestras independientes';
        detalle = `x̄₁=${Utils.fmt(xbar1,2)} | x̄₂=${Utils.fmt(xbar2,2)} | S₁=${s1} | S₂=${s2} | n₁=${n1} | n₂=${n2} | Sp=${Utils.fmt(sp,4)} | gl=${df}`;

      } else if (tipo === 'tp') {
        const d1 = this._parseNums(document.getElementById('hip-datos1').value);
        const d2 = this._parseNums(document.getElementById('hip-datos2').value);
        if (d1.length < 2 || d1.length !== d2.length) throw new Error('Las muestras deben tener el mismo tamaño (mínimo 2).');
        const diffs = d1.map((v,i) => v - d2[i]);
        const dbar = diffs.reduce((a,b) => a+b,0) / diffs.length;
        const sd = Math.sqrt(diffs.reduce((a,d) => a+(d-dbar)**2,0) / (diffs.length-1));
        stat = dbar / (sd / Math.sqrt(diffs.length));
        df = diffs.length - 1;
        pval = this._pval(stat, df, cola, 't');
        titulo = 'Prueba t — Muestras pareadas';
        detalle = `n = ${diffs.length} pares | d̄ = ${Utils.fmt(dbar,4)} | Sd = ${Utils.fmt(sd,4)} | gl = ${df}`;

      } else if (tipo === 'anova') {
        const lines = document.getElementById('hip-grupos').value.split('\n').filter(l => l.trim());
        if (lines.length < 2) throw new Error('Ingresa al menos 2 grupos (un grupo por línea).');
        const groups = lines.map(l => this._parseNums(l.replace(/^[^:]*:/,'')));
        if (groups.some(g => g.length < 2)) throw new Error('Cada grupo debe tener al menos 2 datos.');
        const k = groups.length;
        const N = groups.reduce((a,g) => a+g.length, 0);
        const means = groups.map(g => g.reduce((a,b)=>a+b,0)/g.length);
        const grandMean = groups.flat().reduce((a,b)=>a+b,0)/N;
        const SSB = groups.reduce((a,g,i) => a + g.length*(means[i]-grandMean)**2, 0);
        const SSW = groups.reduce((a,g,i) => a + g.reduce((b,v) => b+(v-means[i])**2, 0), 0);
        const MSB = SSB/(k-1), MSW = SSW/(N-k);
        stat = MSB/MSW;
        df = [k-1, N-k];
        pval = this._pval(stat, df, 'derecha', 'F');
        titulo = 'ANOVA — Una vía';
        grupos_info = groups.map((g,i) => `G${i+1}: n=${g.length}, x̄=${Utils.fmt(means[i],2)}`).join(' | ');
        detalle = `k=${k} grupos | N=${N} total | SCE=${Utils.fmt(SSB,2)} | SCD=${Utils.fmt(SSW,2)} | CME=${Utils.fmt(MSB,2)} | CMD=${Utils.fmt(MSW,2)} | gl₁=${k-1} | gl₂=${N-k}`;
      }

      const rechazar = pval < alpha;
      const decision = rechazar
        ? `✅ Se rechaza H₀ (p = ${Utils.fmt(pval,4)} < α = ${alpha})`
        : `⚠️ No se rechaza H₀ (p = ${Utils.fmt(pval,4)} ≥ α = ${alpha})`;

      const statLabel = tipo === 'anova' ? 'F' : tipo === 'z1' ? 'Z' : 't';
      const dfLabel = Array.isArray(df) ? `(${df[0]}, ${df[1]})` : df != null ? `gl = ${df}` : '';

      res.innerHTML = `
        <div class="stats-grid">
          <div class="stat-box"><div class="stat-val">${Utils.fmt(stat,4)}</div><div class="stat-lbl">Estadístico ${statLabel}</div></div>
          <div class="stat-box"><div class="stat-val">${Utils.fmt(pval,4)}</div><div class="stat-lbl">Valor p</div></div>
          <div class="stat-box"><div class="stat-val">${alpha}</div><div class="stat-lbl">Nivel α</div></div>
          ${dfLabel ? `<div class="stat-box"><div class="stat-val">${dfLabel}</div><div class="stat-lbl">Grados libertad</div></div>` : ''}
        </div>
        <div class="ib" style="margin:10px 0;${rechazar ? 'border-color:var(--accent);' : 'border-color:var(--warn);'}">
          <strong>${titulo}</strong><br>
          <span style="font-size:0.72rem;color:var(--muted)">${grupos_info ? grupos_info+'<br>' : ''}${detalle}</span><br><br>
          <strong>${decision}</strong>
        </div>
        ${AI.loadingBlock('hip-ai')}`;

      const aiPrompt = AI.promptHipotesis(titulo, stat, statLabel, df, pval, alpha, cola, rechazar, detalle, grupos_info);
      AI.render(aiPrompt, 'hip-ai');

    } catch(e) {
      res.innerHTML = `<div class="err">${e.message}</div>`;
    }
  },

  init() { this._updateForm(); }
};
