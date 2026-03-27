/* ============================================
   STATIA GO — js/modulos/03_hipotesis/hipotesis.js
   Módulo: Pruebas de Hipótesis
   Z, t una/dos muestras, t pareada, ANOVA
   by Jose Rodas
   ============================================ */

const ModHipotesis = {

  _normalCDF: x => ModDistribuciones._normalCDF(x),
  _tCDF:      (t, df) => ModDistribuciones._tCDF(t, df),
  _fCDF:      (f, d1, d2) => ModDistribuciones._fCDF(f, d1, d2),

  _pval(stat, df, cola, tipo) {
    let p;
    if (tipo === 'Z') {
      const c = this._normalCDF(stat);
      p = cola === 'bilateral' ? 2*Math.min(c,1-c) : cola === 'izquierda' ? c : 1-c;
    } else if (tipo === 'F') {
      p = 1 - this._fCDF(stat, df[0], df[1]);
    } else {
      const c = this._tCDF(stat, df);
      p = cola === 'bilateral' ? 2*Math.min(c,1-c) : cola === 'izquierda' ? c : 1-c;
    }
    return Math.max(0, Math.min(1, p));
  },

  render(area) {
    area.innerHTML = `
      <div class="card" style="margin-top:0">
        <div class="tb tb-hip">🧪 Pruebas de Hipótesis</div>
        <div class="mod-tabs">
          <button class="mod-tab active" onclick="ModHipotesis._tab('teoria',this)">📖 Teoría</button>
          <button class="mod-tab" onclick="ModHipotesis._tab('calc',this)">🧪 Calculador</button>
        </div>
        <div id="hip-teoria">${this._teoria()}</div>
        <div id="hip-calc" style="display:none">${this._form()}</div>
      </div>`;
    Utils.renderKaTeX(area);
  },

  _tab(id, btn) {
    ['teoria','calc'].forEach(t =>
      document.getElementById('hip-'+t).style.display = t===id ? '' : 'none'
    );
    document.querySelectorAll('#hip-teoria').forEach(()=>{});
    btn.closest('.mod-tabs').querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  },

  _teoria() {
    return `
    <div class="step" style="border-left-color:var(--accent)">
      <div class="step-num">Concepto base</div>
      <div class="step-title">¿Qué es una prueba de hipótesis?</div>
      Procedimiento que permite tomar decisiones sobre parámetros poblacionales a partir de datos muestrales. Se plantean dos hipótesis opuestas y los datos determinan cuál es más compatible con la evidencia.
    </div>

    <div class="fml-section">Hipótesis y error</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">H₀ vs H₁</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">H₀ (nula)</span><span class="fml-val">No hay efecto. Ej: μ = μ₀. Siempre incluye igualdad.</span></div>
          <div class="fml-row"><span class="fml-label">H₁ (alterna)</span><span class="fml-val">Hay efecto. Ej: μ ≠ μ₀ / μ > μ₀ / μ < μ₀</span></div>
          <div class="fml-row"><span class="fml-label">Valor p</span><span class="fml-val">Si p &lt; α → Rechazar H₀ · Si p ≥ α → No rechazar H₀</span></div>
          <div class="fml-row"><span class="fml-label">α (sig.)</span><span class="fml-val">Probabilidad de error tipo I. Valores: 0.01, 0.05, 0.10</span></div>
        </div>
      </div>
      <div class="fml-card b">
        <div class="fml-name">Tipos de error</div>
        <div class="fml-body">
          <div class="fml-row"><span class="fml-label">Error tipo I (α)</span><span class="fml-val">Rechazar H₀ cuando es verdadera (falso positivo)</span></div>
          <div class="fml-row"><span class="fml-label">Error tipo II (β)</span><span class="fml-val">No rechazar H₀ cuando es falsa (falso negativo)</span></div>
          <div class="fml-row"><span class="fml-label">Potencia (1−β)</span><span class="fml-val">Prob. de detectar un efecto real cuando existe</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section">Prueba Z — Media con σ conocida o n ≥ 30</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">Estadístico</div>
        <div class="fml-formula"><span class="ktx" data-f="Z = \\dfrac{\\bar{x} - \\mu_0}{\\sigma / \\sqrt{n}}"></span></div>
        <div class="fml-desc">Usa σ poblacional si se conoce. Para n ≥ 30 puedes usar S como aproximación. Distribuye N(0,1).</div>
      </div>
    </div>

    <div class="fml-section">Prueba t — Una muestra (σ desconocida)</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">Estadístico · gl = n − 1</div>
        <div class="fml-formula"><span class="ktx" data-f="t = \\dfrac{\\bar{x} - \\mu_0}{S / \\sqrt{n}}"></span></div>
        <div class="fml-desc">Usa la desviación muestral S. Especialmente útil con muestras pequeñas (n &lt; 30).</div>
      </div>
    </div>

    <div class="fml-section">Prueba t — Dos muestras independientes</div>
    <div class="fml-grid">
      <div class="fml-card b">
        <div class="fml-name">Estadístico · gl = n₁ + n₂ − 2</div>
        <div class="fml-formula"><span class="ktx" data-f="t = \\dfrac{\\bar{x}_1 - \\bar{x}_2}{S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}}"></span></div>
        <div class="fml-desc">Compara medias de dos grupos distintos. Sp es la desviación combinada asumiendo varianzas iguales.</div>
      </div>
    </div>

    <div class="fml-section">Prueba t — Muestras pareadas</div>
    <div class="fml-grid">
      <div class="fml-card g">
        <div class="fml-name">Estadístico · gl = n − 1</div>
        <div class="fml-formula"><span class="ktx" data-f="t = \\dfrac{\\bar{d}}{S_d / \\sqrt{n}}, \\quad d_i = x_{1i} - x_{2i}"></span></div>
        <div class="fml-desc">Para antes/después o mismo sujeto medido dos veces. Se trabaja con las diferencias dᵢ.</div>
      </div>
    </div>

    <div class="fml-section">ANOVA — Comparar 3 o más grupos</div>
    <div class="fml-grid">
      <div class="fml-card w">
        <div class="fml-name">Estadístico F · H₀: μ₁ = μ₂ = … = μk</div>
        <div class="fml-formula"><span class="ktx" data-f="F = \\dfrac{CME}{CMD} = \\dfrac{SCE/(k-1)}{SCD/(N-k)}"></span></div>
        <div class="fml-desc">gl₁ = k−1 (entre grupos) · gl₂ = N−k (dentro de grupos). Si F grande → diferencias entre grupos.</div>
      </div>
    </div>

    <div class="fml-section">Prueba Z — Una proporción</div>
    <div class="fml-grid">
      <div class="fml-card g">
        <div class="fml-name">Estadístico · H₀: p = p₀</div>
        <div class="fml-formula"><span class="ktx" data-f="Z = \\dfrac{\\hat{p} - p_0}{\\sqrt{p_0(1-p_0)/n}}"></span></div>
        <div class="fml-body" style="margin-top:8px">
          <div class="fml-row"><span class="fml-label">p̂</span><span class="fml-val">Proporción muestral = x/n</span></div>
          <div class="fml-row"><span class="fml-label">p₀</span><span class="fml-val">Proporción hipotética bajo H₀</span></div>
          <div class="fml-row"><span class="fml-label">Ejemplo</span><span class="fml-val">¿El % de aprobados es diferente de 70%?</span></div>
        </div>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--accent2)">
      <div class="step-num">Tipos de cola</div>
      <div class="step-title">¿Cómo plantear H₁?</div>
      <strong>Bilateral (H₁: ≠)</strong> — Se rechaza en ambos extremos de la distribución.<br>
      <strong>Cola derecha (H₁: &gt;)</strong> — Solo se rechaza si el estadístico es muy grande.<br>
      <strong>Cola izquierda (H₁: &lt;)</strong> — Solo se rechaza si el estadístico es muy pequeño.
    </div>`;
  },

  _form() {
    return `
      <div class="section-title">Configurar prueba</div>

      <label class="inp-label">Tipo de prueba</label>
      <select class="inp-sel" id="hip-tipo" onchange="ModHipotesis._updateForm()">
        <option value="z1">Prueba Z — Una muestra</option>
        <option value="t1">Prueba t — Una muestra</option>
        <option value="t2">Prueba t — Dos muestras independientes</option>
        <option value="tp">Prueba t — Muestras pareadas</option>
        <option value="anova">ANOVA — Una vía</option>
        <option value="zp">Prueba Z — Una proporción</option>
      </select>

      <div id="hip-params"></div>

      <div class="row2" id="hip-cola-row">
        <div>
          <label class="inp-label">Nivel de significancia α</label>
          <select class="inp-sel" id="hip-alpha" style="margin-bottom:0">
            <option value="0.01">α = 0.01 (1%)</option>
            <option value="0.05" selected>α = 0.05 (5%)</option>
            <option value="0.10">α = 0.10 (10%)</option>
          </select>
        </div>
        <div>
          <label class="inp-label">Tipo de cola</label>
          <select class="inp-sel" id="hip-cola" style="margin-bottom:0">
            <option value="bilateral">Bilateral (H₁: ≠)</option>
            <option value="derecha">Cola derecha (H₁: >)</option>
            <option value="izquierda">Cola izquierda (H₁: <)</option>
          </select>
        </div>
      </div>

      <button class="btn-calc" onclick="ModHipotesis.calcular()">Calcular prueba →</button>
      <button class="btn-s" onclick="ModHipotesis.ejemplo()" style="width:100%;padding:9px;background:transparent;border:1px solid var(--border);border-radius:9px;color:var(--muted);font-family:'DM Mono',monospace;font-size:0.72rem;cursor:pointer;margin-top:6px">📋 Cargar ejemplo</button>
      <div id="hip-resultado"></div>`;
  },

  _updateForm() {
    const tipo = document.getElementById('hip-tipo').value;
    const p = document.getElementById('hip-params');
    const colaRow = document.getElementById('hip-cola-row');
    if (colaRow) colaRow.style.display = tipo === 'anova' ? 'none' : '';

    if (tipo === 'z1') {
      p.innerHTML = `
        <div class="row2">
          <div><label class="inp-label">Media muestral (x̄)</label><input class="inp" id="hip-xbar" type="number" step="any" placeholder="Ej: 52.3"></div>
          <div><label class="inp-label">Media hipotética (μ₀)</label><input class="inp" id="hip-mu0" type="number" step="any" placeholder="Ej: 50"></div>
        </div>
        <div class="row2">
          <div><label class="inp-label">Desv. estándar pobl. (σ)</label><input class="inp" id="hip-sigma" type="number" step="any" placeholder="Ej: 8"></div>
          <div><label class="inp-label">Tamaño de muestra (n)</label><input class="inp" id="hip-n1" type="number" step="any" placeholder="Ej: 36"></div>
        </div>`;
    } else if (tipo === 't1') {
      p.innerHTML = `
        <div class="row2">
          <div><label class="inp-label">Media muestral (x̄)</label><input class="inp" id="hip-xbar" type="number" step="any" placeholder="Ej: 52.3"></div>
          <div><label class="inp-label">Media hipotética (μ₀)</label><input class="inp" id="hip-mu0" type="number" step="any" placeholder="Ej: 50"></div>
        </div>
        <div class="row2">
          <div><label class="inp-label">Desv. estándar muest. (S)</label><input class="inp" id="hip-s1" type="number" step="any" placeholder="Ej: 8.5"></div>
          <div><label class="inp-label">Tamaño de muestra (n)</label><input class="inp" id="hip-n1" type="number" step="any" placeholder="Ej: 20"></div>
        </div>`;
    } else if (tipo === 't2') {
      p.innerHTML = `
        <div class="row2">
          <div><label class="inp-label">Media muestra 1 (x̄₁)</label><input class="inp" id="hip-xbar" type="number" step="any" placeholder="Ej: 75.2"></div>
          <div><label class="inp-label">Media muestra 2 (x̄₂)</label><input class="inp" id="hip-xbar2" type="number" step="any" placeholder="Ej: 71.8"></div>
        </div>
        <div class="row2">
          <div><label class="inp-label">Desv. estándar S₁</label><input class="inp" id="hip-s1" type="number" step="any" placeholder="Ej: 6.4"></div>
          <div><label class="inp-label">Desv. estándar S₂</label><input class="inp" id="hip-s2" type="number" step="any" placeholder="Ej: 5.9"></div>
        </div>
        <div class="row2">
          <div><label class="inp-label">Tamaño muestra n₁</label><input class="inp" id="hip-n1" type="number" step="any" placeholder="Ej: 25"></div>
          <div><label class="inp-label">Tamaño muestra n₂</label><input class="inp" id="hip-n2" type="number" step="any" placeholder="Ej: 30"></div>
        </div>`;
    } else if (tipo === 'tp') {
      p.innerHTML = `
        <label class="inp-label">Datos antes (muestra 1) — separados por coma</label>
        <textarea class="inp" id="hip-datos1" rows="2" placeholder="Ej: 85, 90, 78, 92, 88"></textarea>
        <label class="inp-label">Datos después (muestra 2) — mismo orden</label>
        <textarea class="inp" id="hip-datos2" rows="2" placeholder="Ej: 91, 95, 83, 97, 94"></textarea>`;
    } else if (tipo === 'anova') {
      p.innerHTML = `
        <label class="inp-label">Grupos — un grupo por línea, valores separados por coma</label>
        <div class="ib" style="margin-bottom:8px">Ejemplo: Grupo 1: 85, 90, 78 → siguiente línea: 70, 75, 68</div>
        <textarea class="inp" id="hip-grupos" rows="6" placeholder="85, 90, 78&#10;70, 75, 68&#10;92, 88, 95"></textarea>`;
    } else if (tipo === 'zp') {
      p.innerHTML = `
        <div class="row2">
          <div><label class="inp-label">Éxitos observados (x)</label><input class="inp" id="hip-x" type="number" placeholder="Ej: 48" min="0"></div>
          <div><label class="inp-label">Tamaño de muestra (n)</label><input class="inp" id="hip-np" type="number" placeholder="Ej: 80" min="2"></div>
        </div>
        <label class="inp-label">Proporción hipotética (p₀)</label>
        <input class="inp" id="hip-p0" type="number" step="0.01" min="0.01" max="0.99" placeholder="Ej: 0.50">`;
    }
  },

  _parseNums(str) {
    return str.split(/[\s,;]+/).map(Number).filter(v => !isNaN(v));
  },

  calcular() {
    const tipo = document.getElementById('hip-tipo').value;
    const alpha = parseFloat(document.getElementById('hip-alpha').value);
    const cola = document.getElementById('hip-cola')?.value || 'bilateral';
    const res = document.getElementById('hip-resultado');

    let stat, df, pval, titulo, detalle = '', grupos_info = '';

    try {
      if (tipo === 'z1') {
        const xbar = +document.getElementById('hip-xbar').value;
        const mu0  = +document.getElementById('hip-mu0').value;
        const sig  = +document.getElementById('hip-sigma').value;
        const n    = +document.getElementById('hip-n1').value;
        if ([xbar,mu0,sig,n].some(isNaN)) throw new Error('Completa todos los campos.');
        stat = (xbar - mu0) / (sig / Math.sqrt(n));
        pval = this._pval(stat, null, cola, 'Z');
        titulo = 'Prueba Z — Una muestra';
        detalle = `x̄ = ${Utils.fmt(xbar,4)} | μ₀ = ${mu0} | σ = ${sig} | n = ${n}`;

      } else if (tipo === 't1') {
        const xbar = +document.getElementById('hip-xbar').value;
        const mu0  = +document.getElementById('hip-mu0').value;
        const s    = +document.getElementById('hip-s1').value;
        const n    = +document.getElementById('hip-n1').value;
        if ([xbar,mu0,s,n].some(isNaN)) throw new Error('Completa todos los campos.');
        stat = (xbar - mu0) / (s / Math.sqrt(n));
        df = n - 1;
        pval = this._pval(stat, df, cola, 't');
        titulo = 'Prueba t — Una muestra';
        detalle = `x̄ = ${Utils.fmt(xbar,4)} | μ₀ = ${mu0} | S = ${s} | n = ${n} | gl = ${df}`;

      } else if (tipo === 't2') {
        const xbar1 = +document.getElementById('hip-xbar').value;
        const xbar2 = +document.getElementById('hip-xbar2').value;
        const s1    = +document.getElementById('hip-s1').value;
        const s2    = +document.getElementById('hip-s2').value;
        const n1    = +document.getElementById('hip-n1').value;
        const n2    = +document.getElementById('hip-n2').value;
        if ([xbar1,xbar2,s1,s2,n1,n2].some(isNaN)) throw new Error('Completa todos los campos.');
        const sp = Math.sqrt(((n1-1)*s1*s1 + (n2-1)*s2*s2) / (n1+n2-2));
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
        const dbar = diffs.reduce((a,b)=>a+b,0) / diffs.length;
        const sd = Math.sqrt(diffs.reduce((a,d)=>a+(d-dbar)**2,0) / (diffs.length-1));
        stat = dbar / (sd / Math.sqrt(diffs.length));
        df = diffs.length - 1;
        pval = this._pval(stat, df, cola, 't');
        titulo = 'Prueba t — Muestras pareadas';
        detalle = `n = ${diffs.length} pares | d̄ = ${Utils.fmt(dbar,4)} | Sd = ${Utils.fmt(sd,4)} | gl = ${df}`;

      } else if (tipo === 'anova') {
        const lines = document.getElementById('hip-grupos').value.split('\n').filter(l => l.trim());
        if (lines.length < 2) throw new Error('Ingresa al menos 2 grupos (un grupo por línea).');
        const groups = lines.map(l => this._parseNums(l));
        if (groups.some(g => g.length < 2)) throw new Error('Cada grupo debe tener al menos 2 datos.');
        const k = groups.length;
        const N = groups.reduce((a,g)=>a+g.length,0);
        const means = groups.map(g => g.reduce((a,b)=>a+b,0)/g.length);
        const grandMean = groups.flat().reduce((a,b)=>a+b,0)/N;
        const SSB = groups.reduce((a,g,i)=>a+g.length*(means[i]-grandMean)**2,0);
        const SSW = groups.reduce((a,g,i)=>a+g.reduce((b,v)=>b+(v-means[i])**2,0),0);
        const MSB = SSB/(k-1), MSW = SSW/(N-k);
        stat = MSB/MSW;
        df = [k-1, N-k];
        pval = this._pval(stat, df, 'derecha', 'F');
        titulo = 'ANOVA — Una vía';
        grupos_info = groups.map((g,i)=>`G${i+1}: n=${g.length}, x̄=${Utils.fmt(means[i],2)}`).join(' | ');
        detalle = `k=${k} grupos | N=${N} | CME=${Utils.fmt(MSB,4)} | CMD=${Utils.fmt(MSW,4)}`;
      }

      if (tipo === 'zp') {
        const x   = +document.getElementById('hip-x').value;
        const n   = +document.getElementById('hip-np').value;
        const p0  = +document.getElementById('hip-p0').value;
        if ([x,n,p0].some(isNaN)||n<2||p0<=0||p0>=1||x<0||x>n) throw new Error('Verifica los datos (0 < p₀ < 1, x ≤ n).');
        const phat = x / n;
        stat  = (phat - p0) / Math.sqrt(p0*(1-p0)/n);
        pval  = this._pval(stat, null, cola, 'Z');
        titulo = 'Prueba Z — Una proporción';
        detalle = `p̂ = ${x}/${n} = ${Utils.fmt(phat,4)} | p₀ = ${p0} | n = ${n}`;
      }

      const rechazar = pval < alpha;
      const statLabel = tipo === 'anova' ? 'F' : (tipo === 'z1' || tipo === 'zp') ? 'Z' : 't';
      const dfLabel = Array.isArray(df) ? `(${df[0]}, ${df[1]})` : df != null ? String(df) : '—';

      res.innerHTML = `
        <div class="section-title">Resultados</div>
        <div class="stats-grid" style="grid-template-columns:repeat(${df != null ? 4 : 3},1fr)">
          <div class="stat-box">
            <span class="stat-val" style="color:var(--accent)">${Utils.fmt(stat,4)}</span>
            <span class="stat-lbl">Estadístico ${statLabel}</span>
          </div>
          <div class="stat-box">
            <span class="stat-val" style="color:${pval < 0.05 ? 'var(--accent)' : 'var(--warn)'}">${Utils.fmt(pval,4)}</span>
            <span class="stat-lbl">Valor p</span>
          </div>
          <div class="stat-box">
            <span class="stat-val">${alpha}</span>
            <span class="stat-lbl">Nivel α</span>
          </div>
          ${df != null ? `<div class="stat-box"><span class="stat-val">${dfLabel}</span><span class="stat-lbl">Grados de libertad</span></div>` : ''}
        </div>

        ${grupos_info ? `<div class="ib" style="margin:0 0 8px">${grupos_info}</div>` : ''}

        <div class="decision-box ${rechazar ? 'ok' : 'warn'}">
          <div class="dec-title">${rechazar ? '✅ Se rechaza H₀' : '⚠️ No se rechaza H₀'}</div>
          p = ${Utils.fmt(pval,4)} ${rechazar ? '<' : '≥'} α = ${alpha} — Confianza ${((1-alpha)*100).toFixed(0)}%<br>
          <span style="color:var(--muted);font-size:0.65rem">${titulo} · ${detalle}</span>
        </div>

        ${AI.loadingBlock('hip-ai')}`;

      await AI.render(AI.promptHipotesis(titulo, stat, statLabel, df, pval, alpha, cola, rechazar, detalle, grupos_info), 'hip-ai');

    } catch(e) {
      res.innerHTML = `<div class="err">${e.message}</div>`;
    }
  },

  init() { this._updateForm(); },

  ejemplo() {
    // Prueba t una muestra — ¿La media difiere de 70?
    const tipo = document.getElementById('hip-tipo');
    if (tipo) { tipo.value = 't1'; tipo.dispatchEvent(new Event('change')); }
    setTimeout(() => {
      const xbar = document.getElementById('hip-xbar');
      const s    = document.getElementById('hip-s');
      const n    = document.getElementById('hip-n');
      const mu0  = document.getElementById('hip-mu0');
      if (xbar) xbar.value = '73.5';
      if (s)    s.value    = '8.2';
      if (n)    n.value    = '25';
      if (mu0)  mu0.value  = '70';
    }, 50);
  },
};
