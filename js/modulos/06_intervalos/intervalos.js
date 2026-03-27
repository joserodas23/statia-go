/* ============================================
   STATIA GO — js/modulos/06_intervalos/intervalos.js
   Módulo: Intervalos de Confianza
   IC para μ (Z/t), proporción, diferencia de medias
   by Jose Rodas
   ============================================ */

const ModIntervalos = {

  _normalCDF: x => ModDistribuciones._normalCDF(x),
  _tCDF:      (t, df) => ModDistribuciones._tCDF(t, df),

  // Valor crítico Z por bisección
  _zCrit(alpha) {
    const target = 1 - alpha / 2;
    let lo = 0, hi = 5;
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2;
      this._normalCDF(mid) < target ? lo = mid : hi = mid;
    }
    return (lo + hi) / 2;
  },

  // Valor crítico t por bisección
  _tCrit(alpha, df) {
    const target = 1 - alpha / 2;
    let lo = 0, hi = 12;
    for (let i = 0; i < 60; i++) {
      const mid = (lo + hi) / 2;
      1 - this._tCDF(mid, df) > alpha / 2 ? lo = mid : hi = mid;
    }
    return (lo + hi) / 2;
  },

  render(area) {
    area.innerHTML = `
      <div class="card" style="margin-top:0">
        <div class="tb tb-ic">📊 Intervalos de Confianza</div>
        <div class="mod-tabs">
          <button class="mod-tab active" onclick="ModIntervalos._tab('teoria',this)">📖 Teoría</button>
          <button class="mod-tab" onclick="ModIntervalos._tab('calc',this)">📊 Calculador</button>
        </div>
        <div id="ic-teoria">${this._teoria()}</div>
        <div id="ic-calc" style="display:none">${this._form()}</div>
      </div>`;
    Utils.renderKaTeX(area);
  },

  _tab(id, btn) {
    ['teoria','calc'].forEach(t =>
      document.getElementById('ic-'+t).style.display = t === id ? '' : 'none'
    );
    btn.closest('.mod-tabs').querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  },

  _teoria() {
    return `
    <div class="step" style="border-left-color:var(--accent2)">
      <div class="step-num">Concepto clave</div>
      <div class="step-title">¿Qué es un intervalo de confianza?</div>
      Un intervalo de confianza (IC) es un rango de valores que, con una probabilidad determinada (nivel de confianza), contiene el verdadero parámetro poblacional. Es más informativo que una prueba de hipótesis porque indica <strong>dónde está</strong> el parámetro, no solo si es diferente de un valor.
      <br><br>
      <strong>IC del 95%</strong> significa: si repitiéramos el muestreo muchas veces, el 95% de los intervalos construidos contendrían el verdadero parámetro.
    </div>

    <div class="fml-section">IC para la media μ — σ conocida (Z)</div>
    <div class="fml-grid">
      <div class="fml-card g">
        <div class="fml-name">Intervalo — Distribución Normal</div>
        <div class="fml-formula"><span class="ktx" data-f="IC: \\bar{x} \\pm z_{\\alpha/2} \\cdot \\dfrac{\\sigma}{\\sqrt{n}}"></span></div>
        <div class="fml-body" style="margin-top:8px">
          <div class="fml-row"><span class="fml-label">z al 90%</span><span class="fml-val">z = 1.645</span></div>
          <div class="fml-row"><span class="fml-label">z al 95%</span><span class="fml-val">z = 1.960</span></div>
          <div class="fml-row"><span class="fml-label">z al 99%</span><span class="fml-val">z = 2.576</span></div>
          <div class="fml-row"><span class="fml-label">Cuándo usarlo</span><span class="fml-val">σ poblacional conocida o n ≥ 30</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section">IC para la media μ — σ desconocida (t)</div>
    <div class="fml-grid">
      <div class="fml-card b">
        <div class="fml-name">Intervalo — Distribución t de Student · gl = n − 1</div>
        <div class="fml-formula"><span class="ktx" data-f="IC: \\bar{x} \\pm t_{\\alpha/2,\\,n-1} \\cdot \\dfrac{S}{\\sqrt{n}}"></span></div>
        <div class="fml-body" style="margin-top:8px">
          <div class="fml-row"><span class="fml-label">S</span><span class="fml-val">Desviación estándar muestral</span></div>
          <div class="fml-row"><span class="fml-label">gl</span><span class="fml-val">Grados de libertad = n − 1</span></div>
          <div class="fml-row"><span class="fml-label">Cuándo usarlo</span><span class="fml-val">σ desconocida — el caso más común</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section">IC para una proporción p</div>
    <div class="fml-grid">
      <div class="fml-card">
        <div class="fml-name">Intervalo de Wilson aproximado</div>
        <div class="fml-formula"><span class="ktx" data-f="IC: \\hat{p} \\pm z_{\\alpha/2} \\sqrt{\\dfrac{\\hat{p}(1-\\hat{p})}{n}}"></span></div>
        <div class="fml-body" style="margin-top:8px">
          <div class="fml-row"><span class="fml-label">p̂</span><span class="fml-val">Proporción muestral = x/n</span></div>
          <div class="fml-row"><span class="fml-label">Condición</span><span class="fml-val">n·p̂ ≥ 5 y n·(1−p̂) ≥ 5</span></div>
          <div class="fml-row"><span class="fml-label">Ejemplo</span><span class="fml-val">% de aprobados, % que prefieren X</span></div>
        </div>
      </div>
    </div>

    <div class="fml-section">IC para diferencia de medias (dos muestras)</div>
    <div class="fml-grid">
      <div class="fml-card w">
        <div class="fml-name">Intervalo — Varianzas iguales · gl = n₁ + n₂ − 2</div>
        <div class="fml-formula"><span class="ktx" data-f="IC: (\\bar{x}_1 - \\bar{x}_2) \\pm t_{\\alpha/2} \\cdot S_p\\sqrt{\\frac{1}{n_1}+\\frac{1}{n_2}}"></span></div>
        <div class="fml-body" style="margin-top:8px">
          <div class="fml-row"><span class="fml-label">Sp</span><span class="fml-val"><span class="ktx" data-f="S_p = \\sqrt{\\frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}}"></span></span></div>
          <div class="fml-row"><span class="fml-label">Si IC incluye 0</span><span class="fml-val">No hay diferencia significativa entre medias</span></div>
        </div>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--accent)">
      <div class="step-num">IC vs Hipótesis</div>
      <div class="step-title">¿Cuándo usar cada uno?</div>
      <strong>Prueba de hipótesis:</strong> responde "¿hay diferencia?" (sí/no).<br>
      <strong>Intervalo de confianza:</strong> responde "¿cuánto es la diferencia?" (rango).<br><br>
      Son equivalentes: si el IC del 95% no incluye μ₀, la prueba bilateral al α = 0.05 rechazará H₀.
      <strong>Los IC son preferibles en reportes científicos</strong> porque aportan más información.
    </div>`;
  },

  _form() {
    return `
      <div class="section-title">Configurar intervalo</div>

      <label class="inp-label">Tipo de intervalo</label>
      <select class="inp-sel" id="ic-tipo" onchange="ModIntervalos._updateForm()">
        <option value="muz">IC para μ — σ conocida (Z)</option>
        <option value="mut">IC para μ — σ desconocida (t)</option>
        <option value="prop">IC para proporción p</option>
        <option value="dif">IC para diferencia de medias</option>
      </select>

      <div id="ic-params"></div>

      <label class="inp-label">Nivel de confianza</label>
      <select class="inp-sel" id="ic-nc">
        <option value="0.10">90% (α = 0.10)</option>
        <option value="0.05" selected>95% (α = 0.05)</option>
        <option value="0.01">99% (α = 0.01)</option>
      </select>

      <button class="btn-calc" onclick="ModIntervalos.calcular()">Calcular IC →</button>
      <button class="btn-s" onclick="ModIntervalos.ejemplo()" style="width:100%;padding:9px;background:transparent;border:1px solid var(--border);border-radius:9px;color:var(--muted);font-family:'DM Mono',monospace;font-size:0.72rem;cursor:pointer;margin-top:6px">📋 Cargar ejemplo</button>
      <div id="ic-resultado"></div>`;
  },

  _updateForm() {
    const tipo = document.getElementById('ic-tipo').value;
    const p = document.getElementById('ic-params');
    if (tipo === 'muz') {
      p.innerHTML = `
        <label class="inp-label">Media muestral x̄</label>
        <input class="inp" id="ic-xbar" type="number" placeholder="Ej: 72.5">
        <label class="inp-label">Desviación estándar poblacional σ</label>
        <input class="inp" id="ic-sigma" type="number" placeholder="Ej: 10.2" min="0.001">
        <label class="inp-label">Tamaño de muestra n</label>
        <input class="inp" id="ic-n" type="number" placeholder="Ej: 36" min="2">`;
    } else if (tipo === 'mut') {
      p.innerHTML = `
        <label class="inp-label">Media muestral x̄</label>
        <input class="inp" id="ic-xbar" type="number" placeholder="Ej: 72.5">
        <label class="inp-label">Desviación estándar muestral S</label>
        <input class="inp" id="ic-s" type="number" placeholder="Ej: 8.3" min="0.001">
        <label class="inp-label">Tamaño de muestra n</label>
        <input class="inp" id="ic-n" type="number" placeholder="Ej: 25" min="2">`;
    } else if (tipo === 'prop') {
      p.innerHTML = `
        <label class="inp-label">Número de éxitos x</label>
        <input class="inp" id="ic-x" type="number" placeholder="Ej: 48" min="0">
        <label class="inp-label">Tamaño de muestra n</label>
        <input class="inp" id="ic-n" type="number" placeholder="Ej: 100" min="2">`;
    } else if (tipo === 'dif') {
      p.innerHTML = `
        <div class="row2">
          <div>
            <label class="inp-label">Media muestra 1 x̄₁</label>
            <input class="inp" id="ic-x1" type="number" placeholder="Ej: 75.2">
            <label class="inp-label">Desv. estándar S₁</label>
            <input class="inp" id="ic-s1" type="number" placeholder="Ej: 8.1" min="0.001">
            <label class="inp-label">n₁</label>
            <input class="inp" id="ic-n1" type="number" placeholder="Ej: 30" min="2">
          </div>
          <div>
            <label class="inp-label">Media muestra 2 x̄₂</label>
            <input class="inp" id="ic-x2" type="number" placeholder="Ej: 70.8">
            <label class="inp-label">Desv. estándar S₂</label>
            <input class="inp" id="ic-s2" type="number" placeholder="Ej: 9.4" min="0.001">
            <label class="inp-label">n₂</label>
            <input class="inp" id="ic-n2" type="number" placeholder="Ej: 28" min="2">
          </div>
        </div>`;
    }
  },

  async calcular() {
    const tipo  = document.getElementById('ic-tipo').value;
    const alpha = parseFloat(document.getElementById('ic-nc').value);
    const nc    = ((1 - alpha) * 100).toFixed(0);
    const res   = document.getElementById('ic-resultado');

    try {
      let li, ls, punto, margen, html = '';

      if (tipo === 'muz') {
        const xbar  = parseFloat(document.getElementById('ic-xbar').value);
        const sigma = parseFloat(document.getElementById('ic-sigma').value);
        const n     = parseInt(document.getElementById('ic-n').value);
        if (isNaN(xbar)||isNaN(sigma)||isNaN(n)||n<2||sigma<=0) throw new Error('Verifica los datos ingresados.');
        const z = this._zCrit(alpha);
        margen  = z * sigma / Math.sqrt(n);
        li = xbar - margen; ls = xbar + margen; punto = xbar;
        html = this._resultado('Z', nc, z, margen, li, ls, punto, null,
          `x̄ = ${Utils.fmt(xbar,4)} · σ = ${Utils.fmt(sigma,4)} · n = ${n}`,
          `Error estándar: σ/√n = ${Utils.fmt(sigma/Math.sqrt(n),4)}`);

      } else if (tipo === 'mut') {
        const xbar = parseFloat(document.getElementById('ic-xbar').value);
        const s    = parseFloat(document.getElementById('ic-s').value);
        const n    = parseInt(document.getElementById('ic-n').value);
        if (isNaN(xbar)||isNaN(s)||isNaN(n)||n<2||s<=0) throw new Error('Verifica los datos ingresados.');
        const t = this._tCrit(alpha, n-1);
        margen  = t * s / Math.sqrt(n);
        li = xbar - margen; ls = xbar + margen; punto = xbar;
        html = this._resultado('t', nc, t, margen, li, ls, punto, n-1,
          `x̄ = ${Utils.fmt(xbar,4)} · S = ${Utils.fmt(s,4)} · n = ${n}`,
          `Error estándar: S/√n = ${Utils.fmt(s/Math.sqrt(n),4)}`);

      } else if (tipo === 'prop') {
        const x = parseInt(document.getElementById('ic-x').value);
        const n = parseInt(document.getElementById('ic-n').value);
        if (isNaN(x)||isNaN(n)||n<2||x<0||x>n) throw new Error('Verifica los datos (x ≤ n).');
        const phat = x / n;
        if (n*phat < 5 || n*(1-phat) < 5)
          res.innerHTML = `<div class="ib" style="border-color:var(--warn);color:var(--warn)">⚠️ Advertencia: n·p̂ o n·(1−p̂) &lt; 5 — el IC normal puede no ser fiable.</div>`;
        const z = this._zCrit(alpha);
        margen  = z * Math.sqrt(phat*(1-phat)/n);
        li = Math.max(0, phat - margen); ls = Math.min(1, phat + margen); punto = phat;
        html = this._resultado('Z', nc, z, margen, li, ls, punto, null,
          `p̂ = ${x}/${n} = ${Utils.fmt(phat,4)} · n = ${n}`,
          `Error estándar: √(p̂(1−p̂)/n) = ${Utils.fmt(Math.sqrt(phat*(1-phat)/n),4)}`,
          true);

      } else if (tipo === 'dif') {
        const x1 = parseFloat(document.getElementById('ic-x1').value);
        const s1 = parseFloat(document.getElementById('ic-s1').value);
        const n1 = parseInt(document.getElementById('ic-n1').value);
        const x2 = parseFloat(document.getElementById('ic-x2').value);
        const s2 = parseFloat(document.getElementById('ic-s2').value);
        const n2 = parseInt(document.getElementById('ic-n2').value);
        if ([x1,s1,n1,x2,s2,n2].some(v=>isNaN(v))||n1<2||n2<2||s1<=0||s2<=0)
          throw new Error('Verifica todos los datos ingresados.');
        const sp  = Math.sqrt(((n1-1)*s1*s1 + (n2-1)*s2*s2) / (n1+n2-2));
        const df  = n1 + n2 - 2;
        const t   = this._tCrit(alpha, df);
        margen    = t * sp * Math.sqrt(1/n1 + 1/n2);
        const dif = x1 - x2;
        li = dif - margen; ls = dif + margen; punto = dif;
        html = this._resultado('t', nc, t, margen, li, ls, punto, df,
          `x̄₁ = ${Utils.fmt(x1,4)}, S₁ = ${Utils.fmt(s1,4)}, n₁ = ${n1} · x̄₂ = ${Utils.fmt(x2,4)}, S₂ = ${Utils.fmt(s2,4)}, n₂ = ${n2}`,
          `Sp = ${Utils.fmt(sp,4)} · Diferencia puntual = ${Utils.fmt(dif,4)}`);
      }

      res.innerHTML += html;
      await AI.render(AI.promptIC(tipo, nc, alpha, li, ls, punto, margen), 'ic-ai');

    } catch(e) {
      res.innerHTML = `<div class="err">${e.message}</div>`;
    }
  },

  _resultado(dist, nc, crit, margen, li, ls, punto, df, datos, ee, esProp = false) {
    const incluye0 = li <= 0 && ls >= 0;
    const decision = esProp
      ? (li <= 0.5 && ls >= 0.5 ? 'El IC incluye p = 0.5 (no se puede descartar una proporción del 50%)' : `El IC NO incluye p = 0.5`)
      : (incluye0 ? 'El IC incluye 0 — no hay diferencia significativa entre grupos' : 'El IC no incluye 0 — hay diferencia significativa');

    return `
      <div class="section-title">Resultado del IC al ${nc}%</div>

      <div class="decision-box ${incluye0 && !esProp ? '' : 'ok'}" style="text-align:center;padding:18px">
        <div style="font-family:'DM Mono',monospace;font-size:0.65rem;color:var(--muted);margin-bottom:6px">${nc}% de confianza</div>
        <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;color:var(--accent)">
          ${Utils.fmt(li,4)} &nbsp;≤&nbsp; ${esProp ? 'p' : 'μ'} &nbsp;≤&nbsp; ${Utils.fmt(ls,4)}
        </div>
        <div style="font-family:'DM Mono',monospace;font-size:0.62rem;color:var(--muted);margin-top:6px">
          Punto estimado: ${Utils.fmt(punto,4)} ± ${Utils.fmt(margen,4)}
        </div>
      </div>

      <div class="stats-grid">
        <div class="stat-box">
          <span class="stat-val" style="color:var(--accent)">${Utils.fmt(li,4)}</span>
          <span class="stat-lbl">Límite inferior</span>
        </div>
        <div class="stat-box">
          <span class="stat-val" style="color:var(--accent2)">${Utils.fmt(ls,4)}</span>
          <span class="stat-lbl">Límite superior</span>
        </div>
        <div class="stat-box">
          <span class="stat-val" style="color:var(--gold)">${Utils.fmt(margen,4)}</span>
          <span class="stat-lbl">Margen de error E</span>
        </div>
        <div class="stat-box">
          <span class="stat-val">${Utils.fmt(crit,4)}</span>
          <span class="stat-lbl">${dist === 'Z' ? 'z' : `t (gl=${df})`} crítico</span>
        </div>
      </div>

      <div class="ib" style="margin:8px 0">
        <strong>Datos:</strong> ${datos}<br>
        <strong>${ee}</strong>
      </div>

      <div class="decision-box ${incluye0 && !esProp ? 'warn' : 'ok'}">
        <div class="dec-title">${decision}</div>
      </div>

      ${AI.loadingBlock('ic-ai')}`;
  },

  ejemplo() {
    const sel = document.getElementById('ic-tipo');
    if (sel) { sel.value = 'mut'; sel.dispatchEvent(new Event('change')); }
    setTimeout(() => {
      const xbar = document.getElementById('ic-xbar');
      const s    = document.getElementById('ic-s');
      const n    = document.getElementById('ic-n');
      if (xbar) xbar.value = '73.5';
      if (s)    s.value    = '8.2';
      if (n)    n.value    = '25';
    }, 50);
  },

  init() { this._updateForm(); },
};
