/* ============================================
   STATIA GO — js/modulos/02_distribuciones/distribuciones.js
   Módulo: Distribuciones de Probabilidad
   Normal, t Student, Chi², F, Binomial, Poisson, Uniforme
   by Jose Rodas
   ============================================ */

const ModDistribuciones = {

  // ============================================
  // FUNCIONES MATEMÁTICAS
  // ============================================

  // Función error (Abramowitz & Stegun 7.1.26, error < 1.5e-7)
  _erf(x) {
    const t = 1 / (1 + 0.3275911 * Math.abs(x));
    const p = t * (0.254829592 + t * (-0.284496736 + t * (1.421413741 + t * (-1.453152027 + t * 1.061405429))));
    const r = 1 - p * Math.exp(-x * x);
    return x >= 0 ? r : -r;
  },

  // Log-Gamma (Lanczos g=7)
  _gammaLn(z) {
    if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - this._gammaLn(1 - z);
    z -= 1;
    const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
    let x = c[0];
    for (let i = 1; i < 9; i++) x += c[i] / (z + i);
    const t = z + 7.5;
    return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(x);
  },

  _gamma(z) { return Math.exp(this._gammaLn(z)); },

  // Gamma incompleta regularizada P(a, x)
  _regGamma(a, x) {
    if (x <= 0) return 0;
    if (x < a + 1) {
      let ap = a, sum = 1 / a, del = sum;
      for (let n = 1; n <= 300; n++) {
        ap++; del *= x / ap; sum += del;
        if (Math.abs(del) < 1e-12 * Math.abs(sum)) break;
      }
      return Math.min(1, sum * Math.exp(-x + a * Math.log(x) - this._gammaLn(a)));
    }
    const FPMIN = 1e-300;
    let b = x + 1 - a, c = 1 / FPMIN, d = 1 / b, h = d;
    for (let i = 1; i <= 300; i++) {
      const an = -i * (i - a);
      b += 2; d = an * d + b;
      if (Math.abs(d) < FPMIN) d = FPMIN;
      c = b + an / c;
      if (Math.abs(c) < FPMIN) c = FPMIN;
      d = 1 / d; const del = d * c;
      h *= del;
      if (Math.abs(del - 1) < 1e-12) break;
    }
    return Math.max(0, 1 - Math.exp(-x + a * Math.log(x) - this._gammaLn(a)) * h);
  },

  // Beta incompleta regularizada I_x(a, b) — Lentz continued fraction
  _regBeta(x, a, b) {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    const lbeta = this._gammaLn(a) + this._gammaLn(b) - this._gammaLn(a + b);
    const sym = x > (a + 1) / (a + b + 2);
    const [xx, aa, bb] = sym ? [1 - x, b, a] : [x, a, b];
    const front = Math.exp(aa * Math.log(xx) + bb * Math.log(1 - xx) - lbeta) / aa;
    const FPMIN = 1e-300;
    let c = 1, d = 1 - (aa + bb) * xx / (aa + 1);
    if (Math.abs(d) < FPMIN) d = FPMIN;
    d = 1 / d; let cf = d;
    for (let m = 1; m <= 300; m++) {
      let num = m * (bb - m) * xx / ((aa + 2 * m - 1) * (aa + 2 * m));
      d = 1 + num * d; if (Math.abs(d) < FPMIN) d = FPMIN;
      c = 1 + num / c; if (Math.abs(c) < FPMIN) c = FPMIN;
      d = 1 / d; cf *= c * d;
      num = -(aa + m) * (aa + bb + m) * xx / ((aa + 2 * m) * (aa + 2 * m + 1));
      d = 1 + num * d; if (Math.abs(d) < FPMIN) d = FPMIN;
      c = 1 + num / c; if (Math.abs(c) < FPMIN) c = FPMIN;
      d = 1 / d; const del = c * d; cf *= del;
      if (Math.abs(del - 1) < 1e-12) break;
    }
    const r = front * cf;
    return sym ? Math.max(0, 1 - r) : Math.min(1, r);
  },

  // Log-factorial
  _logFact(n) {
    let s = 0;
    for (let i = 2; i <= n; i++) s += Math.log(i);
    return s;
  },

  // Inverse normal (rational approximation)
  _invNorm(p) {
    if (p <= 0) return -Infinity; if (p >= 1) return Infinity;
    const c = [2.515517, 0.802853, 0.010328];
    const d = [1.432788, 0.189269, 0.001308];
    const t = p < 0.5 ? Math.sqrt(-2 * Math.log(p)) : Math.sqrt(-2 * Math.log(1 - p));
    const x = t - (c[0] + c[1] * t + c[2] * t * t) / (1 + d[0] * t + d[1] * t * t + d[2] * t * t * t);
    return p < 0.5 ? -x : x;
  },

  // Binary search for inverse CDF
  _invCDF(cdfFn, p, lo = 0, hi = 100) {
    for (let i = 0; i < 80; i++) {
      const mid = (lo + hi) / 2;
      if (cdfFn(mid) < p) lo = mid; else hi = mid;
    }
    return (lo + hi) / 2;
  },

  // ============================================
  // PDF / CDF por distribución
  // ============================================

  _normalCDF(x) { return 0.5 * (1 + this._erf(x / Math.SQRT2)); },
  _normalPDF(x) { return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI); },

  _tCDF(t, df) {
    const x = df / (df + t * t);
    const p = 0.5 * this._regBeta(x, df / 2, 0.5);
    return t >= 0 ? 1 - p : p;
  },
  _tPDF(t, df) {
    return Math.exp(
      this._gammaLn((df + 1) / 2) - this._gammaLn(df / 2)
    ) / (Math.sqrt(df * Math.PI) * Math.pow(1 + t * t / df, (df + 1) / 2));
  },

  _chiCDF(x, df) { return x <= 0 ? 0 : this._regGamma(df / 2, x / 2); },
  _chiPDF(x, df) {
    if (x <= 0) return 0;
    return Math.exp((df / 2 - 1) * Math.log(x) - x / 2 - (df / 2) * Math.log(2) - this._gammaLn(df / 2));
  },

  _fCDF(x, d1, d2) {
    if (x <= 0) return 0;
    return this._regBeta(d1 * x / (d1 * x + d2), d1 / 2, d2 / 2);
  },
  _fPDF(x, d1, d2) {
    if (x <= 0) return 0;
    return Math.exp(
      (d1 / 2) * Math.log(d1) + (d2 / 2) * Math.log(d2) +
      (d1 / 2 - 1) * Math.log(x) -
      ((d1 + d2) / 2) * Math.log(d1 * x + d2) +
      this._gammaLn((d1 + d2) / 2) - this._gammaLn(d1 / 2) - this._gammaLn(d2 / 2)
    );
  },

  _binomPMF(k, n, p) {
    if (k < 0 || k > n || p <= 0 || p >= 1) return k === 0 && p === 0 ? 1 : 0;
    return Math.exp(this._logFact(n) - this._logFact(k) - this._logFact(n - k) +
      k * Math.log(p) + (n - k) * Math.log(1 - p));
  },
  _binomCDF(k, n, p) {
    let s = 0;
    for (let i = 0; i <= Math.floor(k); i++) s += this._binomPMF(i, n, p);
    return Math.min(1, s);
  },

  _poissonPMF(k, lam) {
    if (k < 0 || lam <= 0) return 0;
    return Math.exp(k * Math.log(lam) - lam - this._logFact(k));
  },
  _poissonCDF(k, lam) {
    let s = 0;
    for (let i = 0; i <= Math.floor(k); i++) s += this._poissonPMF(i, lam);
    return Math.min(1, s);
  },

  _uniformPDF(x, a, b) { return (x >= a && x <= b) ? 1 / (b - a) : 0; },
  _uniformCDF(x, a, b) {
    if (x <= a) return 0; if (x >= b) return 1;
    return (x - a) / (b - a);
  },

  // ============================================
  // CÁLCULO PRINCIPAL
  // ============================================

  compute(dist, params, tipo, va, vb) {
    const f4 = v => Math.round(v * 10000) / 10000;
    const isDiscrete = dist === 'binomial' || dist === 'poisson';

    const cdf = x => {
      switch (dist) {
        case 'normal':   return this._normalCDF((x - params.mu) / params.sigma);
        case 't':        return this._tCDF(x, params.gl);
        case 'chi2':     return this._chiCDF(x, params.gl);
        case 'F':        return this._fCDF(x, params.gl1, params.gl2);
        case 'uniforme': return this._uniformCDF(x, params.a, params.b);
        case 'binomial': return this._binomCDF(Math.floor(x), params.n, params.p);
        case 'poisson':  return this._poissonCDF(Math.floor(x), params.lam);
        default: return 0;
      }
    };
    const pmf = k => {
      switch (dist) {
        case 'binomial': return this._binomPMF(k, params.n, params.p);
        case 'poisson':  return this._poissonPMF(k, params.lam);
        default: return 0;
      }
    };

    let prob = 0, stat = '', desc = '';

    if (tipo === 'menor') {
      prob = cdf(va);
      desc = `P(X < ${va})`;
      if (dist === 'normal') stat = `Z = ${f4((va - params.mu) / params.sigma)}`;
      else if (dist === 't')   stat = `t = ${f4(va)}`;
      else if (dist === 'chi2') stat = `χ² = ${f4(va)}`;
      else if (dist === 'F')   stat = `F = ${f4(va)}`;
    } else if (tipo === 'mayor') {
      prob = 1 - cdf(va);
      desc = `P(X > ${va})`;
      if (dist === 'normal') stat = `Z = ${f4((va - params.mu) / params.sigma)}`;
    } else if (tipo === 'entre') {
      prob = cdf(vb) - cdf(va);
      desc = `P(${va} < X < ${vb})`;
      if (dist === 'normal') stat = `Z₁=${f4((va-params.mu)/params.sigma)}, Z₂=${f4((vb-params.mu)/params.sigma)}`;
    } else if (tipo === 'exacto' && isDiscrete) {
      prob = pmf(Math.floor(va));
      desc = `P(X = ${Math.floor(va)})`;
    }

    return {
      prob: Math.max(0, Math.min(1, prob)),
      complement: Math.max(0, Math.min(1, 1 - prob)),
      stat, desc
    };
  },

  // ============================================
  // GRÁFICO
  // ============================================

  _getRange(dist, params) {
    switch (dist) {
      case 'normal': return [params.mu - 4 * params.sigma, params.mu + 4 * params.sigma];
      case 't':   { const s = params.gl > 2 ? Math.sqrt(params.gl / (params.gl - 2)) : 2; return [-Math.min(8, 5*s), Math.min(8, 5*s)]; }
      case 'chi2':  return [0, Math.max(20, params.gl + 5 * Math.sqrt(2 * params.gl))];
      case 'F':     return [0, 6];
      case 'uniforme': { const w = params.b - params.a; return [params.a - w * 0.3, params.b + w * 0.3]; }
      default: return [-5, 5];
    }
  },

  _getPDF(x, dist, params) {
    switch (dist) {
      case 'normal':   return this._normalPDF((x - params.mu) / params.sigma) / params.sigma;
      case 't':        return this._tPDF(x, params.gl);
      case 'chi2':     return this._chiPDF(x, params.gl);
      case 'F':        return this._fPDF(x, params.gl1, params.gl2);
      case 'uniforme': return this._uniformPDF(x, params.a, params.b);
      default: return 0;
    }
  },

  drawChart(cId, dist, params, tipo, va, vb) {
    const isDiscrete = dist === 'binomial' || dist === 'poisson';
    if (isDiscrete) this._drawDiscrete(cId, dist, params, tipo, va, vb);
    else this._drawContinuous(cId, dist, params, tipo, va, vb);
  },

  _drawContinuous(cId, dist, params, tipo, va, vb) {
    const [xMin, xMax] = this._getRange(dist, params);
    const N = 250;
    const step = (xMax - xMin) / N;
    const xs = Array.from({ length: N + 1 }, (_, i) => xMin + i * step);
    const ys = xs.map(x => this._getPDF(x, dist, params));

    let lo = xMin, hi = xMax;
    if (tipo === 'menor') hi = va;
    else if (tipo === 'mayor') lo = va;
    else if (tipo === 'entre') { lo = va; hi = vb; }

    const shaded = xs.map((x, i) => (x >= lo && x <= hi) ? { x, y: ys[i] } : { x, y: 0 });

    if (window._distChart) { try { window._distChart.destroy(); } catch (e) {} }
    window._distChart = new Chart(document.getElementById(cId), {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Curva', data: xs.map((x, i) => ({ x, y: ys[i] })),
            borderColor: 'rgba(79,255,176,0.9)', borderWidth: 2,
            pointRadius: 0, fill: false, tension: 0.3
          },
          {
            label: 'Área', data: shaded,
            borderColor: 'transparent', backgroundColor: 'rgba(79,255,176,0.22)',
            fill: 'origin', pointRadius: 0, tension: 0.3
          },
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false, animation: false,
        plugins: { legend: { display: false }, tooltip: { enabled: false } },
        scales: {
          x: { type: 'linear', ticks: { color: '#aaa', font: { size: 9 }, maxTicksLimit: 8 }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#aaa', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });
  },

  _drawDiscrete(cId, dist, params, tipo, va, vb) {
    const maxK = dist === 'binomial'
      ? params.n
      : Math.min(40, Math.max(20, Math.floor(params.lam + 5 * Math.sqrt(params.lam))));
    const ks = Array.from({ length: maxK + 1 }, (_, i) => i);
    const pmf = k => dist === 'binomial'
      ? this._binomPMF(k, params.n, params.p)
      : this._poissonPMF(k, params.lam);

    const isShaded = k => {
      if (tipo === 'menor')  return k < va;
      if (tipo === 'mayor')  return k > va;
      if (tipo === 'entre')  return k > va && k < vb;
      if (tipo === 'exacto') return k === Math.floor(va);
      return false;
    };

    const colors = ks.map(k => isShaded(k) ? 'rgba(79,255,176,0.75)' : 'rgba(99,140,255,0.30)');
    const borders = ks.map(k => isShaded(k) ? 'rgba(79,255,176,1)' : 'rgba(99,140,255,0.6)');

    if (window._distChart) { try { window._distChart.destroy(); } catch (e) {} }
    window._distChart = new Chart(document.getElementById(cId), {
      type: 'bar',
      data: {
        labels: ks.map(String),
        datasets: [{ data: ks.map(pmf), backgroundColor: colors, borderColor: borders, borderWidth: 1 }]
      },
      options: {
        responsive: true, maintainAspectRatio: false, animation: false,
        plugins: {
          legend: { display: false },
          tooltip: { callbacks: { label: ctx => `P(X=${ctx.dataIndex}) = ${ctx.raw.toFixed(4)}` } }
        },
        scales: {
          x: { ticks: { color: '#aaa', font: { size: 9 }, maxTicksLimit: 15 }, grid: { display: false } },
          y: { ticks: { color: '#aaa', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });
  },

  // ============================================
  // TABLAS DE VALORES CRÍTICOS
  // ============================================

  renderTableZ() {
    let html = '<div class="tbl-scroll"><table class="freq-table"><thead><tr><th>z</th>';
    for (let d = 0; d <= 9; d++) html += `<th>.0${d}</th>`;
    html += '</tr></thead><tbody>';
    for (let z0 = 0; z0 <= 3.9; z0 = Math.round((z0 + 0.1) * 10) / 10) {
      html += `<tr><td><strong>${z0.toFixed(1)}</strong></td>`;
      for (let d = 0; d <= 9; d++) {
        const z = z0 + d * 0.01;
        html += `<td>${this._normalCDF(z).toFixed(4)}</td>`;
      }
      html += '</tr>';
    }
    return html + '</tbody></table></div>';
  },

  renderTableT() {
    const alphas = [0.10, 0.05, 0.025, 0.01, 0.005];
    const tCrit = (df, alpha) => this._invCDF(x => this._tCDF(x, df), 1 - alpha, 0, 20);
    let html = '<div class="tbl-scroll"><table class="freq-table"><thead><tr><th>gl</th>';
    alphas.forEach(a => { html += `<th>α=${a}</th>`; });
    html += '</tr></thead><tbody>';
    for (let df = 1; df <= 30; df++) {
      html += `<tr><td><strong>${df}</strong></td>`;
      alphas.forEach(a => { html += `<td>${tCrit(df, a).toFixed(3)}</td>`; });
      html += '</tr>';
    }
    const zRow = [1.282, 1.645, 1.960, 2.326, 2.576];
    html += '<tr><td><strong>∞</strong></td>' + zRow.map(v => `<td>${v.toFixed(3)}</td>`).join('') + '</tr>';
    return html + '</tbody></table></div>';
  },

  renderTableChi() {
    const probs = [0.995, 0.99, 0.975, 0.95, 0.05, 0.025, 0.01, 0.005];
    const chiCrit = (df, p) => this._invCDF(x => this._chiCDF(x, df), p, 0.001, df + 10 * Math.sqrt(2 * df));
    let html = '<div class="tbl-scroll"><table class="freq-table"><thead><tr><th>gl</th>';
    probs.forEach(p => { html += `<th>χ²<sub>${p}</sub></th>`; });
    html += '</tr></thead><tbody>';
    for (let df = 1; df <= 30; df++) {
      html += `<tr><td><strong>${df}</strong></td>`;
      probs.forEach(p => { html += `<td>${chiCrit(df, p).toFixed(3)}</td>`; });
      html += '</tr>';
    }
    return html + '</tbody></table></div>';
  },

  renderTableF() {
    const d1Vals = [1, 2, 3, 4, 5, 6];
    const fCrit = (d1, d2) => this._invCDF(x => this._fCDF(x, d1, d2), 0.95, 0.001, 30);
    let html = '<div class="tbl-scroll"><table class="freq-table"><thead><tr><th>gl₂ \\ gl₁</th>';
    d1Vals.forEach(d1 => { html += `<th>${d1}</th>`; });
    html += '</tr></thead><tbody>';
    for (let d2 = 1; d2 <= 30; d2++) {
      html += `<tr><td><strong>${d2}</strong></td>`;
      d1Vals.forEach(d1 => { html += `<td>${fCrit(d1, d2).toFixed(2)}</td>`; });
      html += '</tr>';
    }
    return html + '</tbody></table></div>';
  },

  renderTableBinomial() {
    const nVals = [5, 8, 10, 12, 15, 20];
    const pVals = [0.10, 0.20, 0.25, 0.30, 0.40, 0.50, 0.60, 0.70, 0.75, 0.80, 0.90];
    let html = '<div style="font-family:\'DM Mono\',monospace;font-size:0.6rem;color:var(--muted);padding:6px 2px 10px">P(X ≤ k) — Función de distribución acumulada Binomial B(n, p)</div>';
    for (const n of nVals) {
      html += `<div class="tbl-label">n = ${n}</div>`;
      html += '<div class="tbl-scroll"><table class="freq-table"><thead><tr><th>k</th>';
      pVals.forEach(p => { html += `<th>p=${p}</th>`; });
      html += '</tr></thead><tbody>';
      for (let k = 0; k <= n; k++) {
        html += `<tr><td><strong>${k}</strong></td>`;
        pVals.forEach(p => { html += `<td>${this._binomCDF(k, n, p).toFixed(4)}</td>`; });
        html += '</tr>';
      }
      html += '</tbody></table></div>';
    }
    return html;
  },

  renderTablePoisson() {
    const lambdas = [0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 6.0, 7.0, 8.0];
    const maxK = 18;
    let html = '<div style="font-family:\'DM Mono\',monospace;font-size:0.6rem;color:var(--muted);padding:6px 2px 10px">P(X ≤ k) — Función de distribución acumulada Poisson P(λ)</div>';
    html += '<div class="tbl-scroll"><table class="freq-table"><thead><tr><th>k</th>';
    lambdas.forEach(lam => { html += `<th>λ=${lam}</th>`; });
    html += '</tr></thead><tbody>';
    for (let k = 0; k <= maxK; k++) {
      html += `<tr><td><strong>${k}</strong></td>`;
      lambdas.forEach(lam => { html += `<td>${this._poissonCDF(k, lam).toFixed(4)}</td>`; });
      html += '</tr>';
    }
    return html + '</tbody></table></div>';
  },

  // ============================================
  // TUTORIAL
  // ============================================

  renderTutorial() {
    document.getElementById('tutorialArea').innerHTML = `
      <div class="card">
        <div class="tb" style="background:var(--accent2)">📐 Distribuciones de Probabilidad</div>

        <div class="mode-tabs" style="margin-bottom:16px">
          <button class="mode-tab on" id="main-tab-teoria" onclick="ModDistribuciones.showMainTab('teoria')">📖 Teoría</button>
          <button class="mode-tab" id="main-tab-tablas" onclick="ModDistribuciones.showMainTab('tablas')">📋 Tablas</button>
        </div>

        <!-- Pestaña: Teoría -->
        <div id="panel-teoria">
          <div class="card-title">Guía de distribuciones</div>
          <div class="card-sub">¿Cuándo usar cada distribución?</div>

          <div class="step">
            <div class="step-num">Continuas vs Discretas</div>
            <div class="step-title">Diferencia fundamental</div>
            <strong>Distribuciones continuas</strong> (Normal, t, Chi², F, Uniforme): la variable puede tomar cualquier valor real dentro de un rango. La probabilidad se calcula como <em>área bajo la curva</em>.<br><br>
            <strong>Distribuciones discretas</strong> (Binomial, Poisson): la variable toma valores enteros contables. La probabilidad se calcula con la <em>función de masa de probabilidad (PMF)</em>.
            <div class="step-note">⚠️ En distribuciones continuas, P(X = valor exacto) = 0 — solo tiene sentido calcular P(X &lt; a), P(X &gt; a) o P(a &lt; X &lt; b)</div>
          </div>

          <div class="fml-section" style="background:var(--accent2)20">Distribuciones Continuas</div>
          <div class="fml-grid">
            <div class="fml-card">
              <div class="fml-name">Normal — N(μ, σ²)</div>
              <div class="fml-formula">${Utils.tex('f(x) = \\dfrac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}', true)}</div>
              <div class="fml-desc"><strong>Parámetros:</strong> μ = media, σ = desviación estándar.<br><strong>Cuándo usar:</strong> peso, talla, notas, presión arterial — variable simétrica en campana.<br><strong>Estandarización:</strong> Z = (X − μ) / σ</div>
            </div>
            <div class="fml-card b">
              <div class="fml-name">t de Student — t(gl)</div>
              <div class="fml-formula">${Utils.tex('f(t) = \\dfrac{\\Gamma\\left(\\frac{\\nu+1}{2}\\right)}{\\sqrt{\\nu\\pi}\\,\\Gamma\\left(\\frac{\\nu}{2}\\right)}\\left(1+\\dfrac{t^2}{\\nu}\\right)^{-\\frac{\\nu+1}{2}}', true)}</div>
              <div class="fml-desc"><strong>Parámetros:</strong> ν = grados de libertad (n−1).<br><strong>Cuándo usar:</strong> prueba de media con n &lt; 30 o σ desconocida. A mayor gl, se aproxima a la Normal.</div>
            </div>
            <div class="fml-card g">
              <div class="fml-name">Chi-cuadrado — χ²(gl)</div>
              <div class="fml-formula">${Utils.tex('f(x) = \\dfrac{x^{\\frac{k}{2}-1} e^{-x/2}}{2^{k/2}\\,\\Gamma\\left(\\frac{k}{2}\\right)}, \\quad x > 0', true)}</div>
              <div class="fml-desc"><strong>Parámetros:</strong> k = grados de libertad.<br><strong>Cuándo usar:</strong> prueba de independencia entre variables categóricas, bondad de ajuste, estimación de varianzas.</div>
            </div>
            <div class="fml-card w">
              <div class="fml-name">F de Snedecor — F(gl₁, gl₂)</div>
              <div class="fml-formula">${Utils.tex('f(x) = \\dfrac{\\sqrt{\\dfrac{(d_1 x)^{d_1} d_2^{d_2}}{(d_1 x+d_2)^{d_1+d_2}}}}{x\\,B\\!\\left(\\frac{d_1}{2},\\frac{d_2}{2}\\right)}', true)}</div>
              <div class="fml-desc"><strong>Parámetros:</strong> d₁ = gl numerador, d₂ = gl denominador.<br><strong>Cuándo usar:</strong> comparar varianzas entre grupos, ANOVA.</div>
            </div>
            <div class="fml-card b">
              <div class="fml-name">Uniforme — U(a, b)</div>
              <div class="fml-formula">${Utils.tex('f(x) = \\dfrac{1}{b-a}, \\quad a \\leq x \\leq b', true)}</div>
              <div class="fml-desc"><strong>Parámetros:</strong> a = mínimo, b = máximo.<br><strong>Cuándo usar:</strong> todos los valores en [a, b] igualmente probables.</div>
            </div>
          </div>

          <div class="fml-section" style="background:var(--gold)20">Distribuciones Discretas</div>
          <div class="fml-grid">
            <div class="fml-card g">
              <div class="fml-name">Binomial — B(n, p)</div>
              <div class="fml-formula">${Utils.tex('P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}', true)}</div>
              <div class="fml-desc"><strong>Parámetros:</strong> n = ensayos, p = prob. éxito.<br><strong>Cuándo usar:</strong> éxito/fracaso en n ensayos independientes.<br><strong>Media:</strong> μ = np &nbsp;|&nbsp; <strong>Varianza:</strong> σ² = np(1−p)</div>
            </div>
            <div class="fml-card w">
              <div class="fml-name">Poisson — P(λ)</div>
              <div class="fml-formula">${Utils.tex('P(X=k) = \\dfrac{\\lambda^k e^{-\\lambda}}{k!}', true)}</div>
              <div class="fml-desc"><strong>Parámetros:</strong> λ = tasa media por intervalo.<br><strong>Cuándo usar:</strong> eventos raros en intervalo fijo de tiempo o espacio.<br><strong>Media = Varianza:</strong> μ = σ² = λ</div>
            </div>
          </div>

          <div class="step">
            <div class="step-num">Guía rápida</div>
            <div class="step-title">¿Qué distribución elegir?</div>
            <table style="width:100%;border-collapse:collapse;font-size:0.7rem;font-family:'DM Mono',monospace">
              <thead><tr style="background:var(--surface2)"><th style="padding:5px 8px;border:1px solid var(--border)">Situación</th><th style="padding:5px 8px;border:1px solid var(--border)">Distribución</th></tr></thead>
              <tbody>
                <tr><td style="padding:5px 8px;border:1px solid var(--border)">Variable continua simétrica, σ conocida</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>Normal</strong></td></tr>
                <tr><td style="padding:5px 8px;border:1px solid var(--border)">Prueba de media con n &lt; 30 o σ desconocida</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>t Student</strong></td></tr>
                <tr><td style="padding:5px 8px;border:1px solid var(--border)">Prueba de independencia o bondad de ajuste</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>Chi-cuadrado</strong></td></tr>
                <tr><td style="padding:5px 8px;border:1px solid var(--border)">Comparar varianzas / ANOVA</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>F de Snedecor</strong></td></tr>
                <tr><td style="padding:5px 8px;border:1px solid var(--border)">Éxito/fracaso en n ensayos independientes</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>Binomial</strong></td></tr>
                <tr><td style="padding:5px 8px;border:1px solid var(--border)">Eventos raros en intervalo fijo</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>Poisson</strong></td></tr>
                <tr><td style="padding:5px 8px;border:1px solid var(--border)">Todos los valores igualmente probables</td><td style="padding:5px 8px;border:1px solid var(--border)"><strong>Uniforme</strong></td></tr>
              </tbody>
            </table>
          </div>

          <button class="btn" onclick="Utils.scrollTo('formArea')">✓ Entendido — ir al calculador ↓</button>
        </div>

        <!-- Pestaña: Tablas -->
        <div id="panel-tablas" style="display:none">
          <div class="card-title">Tablas de valores críticos</div>
          <div class="card-sub">Referencias para pruebas de hipótesis</div>
          <div class="mode-tabs sc" style="margin-bottom:12px">
            <button class="mode-tab on" id="stab-z" onclick="ModDistribuciones.showStaticTable('z')">Tabla Z</button>
            <button class="mode-tab" id="stab-t" onclick="ModDistribuciones.showStaticTable('t')">t Student</button>
            <button class="mode-tab" id="stab-chi" onclick="ModDistribuciones.showStaticTable('chi')">Chi²</button>
            <button class="mode-tab" id="stab-f" onclick="ModDistribuciones.showStaticTable('f')">F (α=0.05)</button>
            <button class="mode-tab" id="stab-binom" onclick="ModDistribuciones.showStaticTable('binom')">Binomial</button>
            <button class="mode-tab" id="stab-pois" onclick="ModDistribuciones.showStaticTable('pois')">Poisson</button>
          </div>
          <div id="staticTableContent"><div class="ld"><span></span><span></span><span></span></div></div>
          <div style="height:8px"></div>
          <button class="btn btn-s" style="margin-top:6px" onclick="Utils.scrollTo('formArea')">✓ Ir al calculador ↓</button>
        </div>

      </div>`;
  },

  renderTablasOnly() {
    this.renderTutorial();
    document.getElementById('formArea').innerHTML = '';
  },

  renderCalcOnly() {
    document.getElementById('tutorialArea').innerHTML = '';
    this.renderForm();
  },

  showMainTab(tab) {
    ['teoria', 'tablas'].forEach(t => {
      const btn = document.getElementById('main-tab-' + t);
      const panel = document.getElementById('panel-' + t);
      if (btn) btn.className = 'mode-tab' + (t === tab ? ' on' : '');
      if (panel) panel.style.display = t === tab ? '' : 'none';
    });
    if (tab === 'tablas') {
      const content = document.getElementById('staticTableContent');
      if (content && !content.dataset.loaded) {
        this.showStaticTable('z');
        content.dataset.loaded = '1';
      }
    }
  },

  showStaticTable(which) {
    ['z', 't', 'chi', 'f', 'binom', 'pois'].forEach(t => {
      const el = document.getElementById('stab-' + t);
      if (el) el.className = 'mode-tab' + (t === which ? ' on' : '');
    });
    const container = document.getElementById('staticTableContent');
    if (!container) return;
    container.innerHTML = '<div class="ld"><span></span><span></span><span></span></div>';
    setTimeout(() => {
      try {
        switch (which) {
          case 'z':     container.innerHTML = this.renderTableZ();        break;
          case 't':     container.innerHTML = this.renderTableT();        break;
          case 'chi':   container.innerHTML = this.renderTableChi();      break;
          case 'f':     container.innerHTML = this.renderTableF();        break;
          case 'binom': container.innerHTML = this.renderTableBinomial(); break;
          case 'pois':  container.innerHTML = this.renderTablePoisson();  break;
        }
      } catch (e) {
        container.innerHTML = `<div class="err">Error: ${e.message}</div>`;
      }
    }, 30);
  },

  // ============================================
  // FORMULARIO
  // ============================================

  renderForm() {
    document.getElementById('formArea').innerHTML = `
      <div class="card" id="theForm">
        <div class="tb" style="background:var(--accent2)">📐 Calculadora de Probabilidades</div>

        <div class="calc-section">
          <div class="calc-section-title">Variable</div>
          <div class="field">
            <span class="lbl a">Nombre de la variable</span>
            <input type="text" id="varName" placeholder="Ej: Peso de estudiantes">
          </div>
          <div class="row3">
            <div>
              <span class="lbl b">Unidad</span>
              <input type="text" id="varUnit" placeholder="kg, cm, pts...">
            </div>
            <div>
              <span class="lbl g">Descripción (opcional)</span>
              <input type="text" id="varDesc" placeholder="Ej: n=40, 2025">
            </div>
          </div>
        </div>

        <div class="calc-section">
          <div class="calc-section-title">Distribución</div>
          <input type="hidden" id="distSelect" value="normal">
          <div class="dist-grid">
            <button class="dist-btn on" onclick="ModDistribuciones.selectDist(this,'normal')">
              <div class="dist-btn-name">Normal</div><div class="dist-btn-params">N(μ, σ²)</div>
            </button>
            <button class="dist-btn" onclick="ModDistribuciones.selectDist(this,'t')">
              <div class="dist-btn-name">t Student</div><div class="dist-btn-params">t(gl)</div>
            </button>
            <button class="dist-btn" onclick="ModDistribuciones.selectDist(this,'chi2')">
              <div class="dist-btn-name">Chi²</div><div class="dist-btn-params">χ²(gl)</div>
            </button>
            <button class="dist-btn" onclick="ModDistribuciones.selectDist(this,'F')">
              <div class="dist-btn-name">F</div><div class="dist-btn-params">F(gl₁,gl₂)</div>
            </button>
            <button class="dist-btn" onclick="ModDistribuciones.selectDist(this,'binomial')">
              <div class="dist-btn-name">Binomial</div><div class="dist-btn-params">B(n, p)</div>
            </button>
            <button class="dist-btn" onclick="ModDistribuciones.selectDist(this,'poisson')">
              <div class="dist-btn-name">Poisson</div><div class="dist-btn-params">P(λ)</div>
            </button>
            <button class="dist-btn" onclick="ModDistribuciones.selectDist(this,'uniforme')">
              <div class="dist-btn-name">Uniforme</div><div class="dist-btn-params">U(a, b)</div>
            </button>
          </div>
        </div>

        <div class="calc-section">
          <div class="calc-section-title">Parámetros</div>
          <div id="paramsPanel"></div>
        </div>

        <div class="calc-section">
          <div class="calc-section-title">Tipo de probabilidad</div>
          <input type="hidden" id="tipoProb" value="menor">
          <div class="prob-grid">
            <button class="prob-btn on" onclick="ModDistribuciones.selectTipo(this,'menor')">P(X &lt; a)</button>
            <button class="prob-btn" onclick="ModDistribuciones.selectTipo(this,'mayor')">P(X &gt; a)</button>
            <button class="prob-btn" onclick="ModDistribuciones.selectTipo(this,'entre')">P(a &lt; X &lt; b)</button>
            <button class="prob-btn" id="probBtnExacto" style="display:none" onclick="ModDistribuciones.selectTipo(this,'exacto')">P(X = k)</button>
          </div>
        </div>

        <div class="calc-section">
          <div class="calc-section-title">Valores</div>
          <div class="row3">
            <div>
              <span class="lbl a">Valor a</span>
              <input type="number" id="valorA" step="any" placeholder="Ej: 70">
            </div>
            <div id="vbField" style="display:none">
              <span class="lbl b">Valor b</span>
              <input type="number" id="valorB" step="any" placeholder="Ej: 80">
            </div>
          </div>
        </div>

        <div id="formErr" class="err" style="display:none"></div>
        <button class="btn" id="calcBtn" onclick="ModDistribuciones.calcular()">📐 Calcular probabilidad con IA</button>
        <button class="btn btn-s" style="margin-top:6px" onclick="Utils.scrollTo('tutorialArea')">← Ver teoría / tablas</button>
      </div>`;

    this.updateParams();
  },

  selectDist(btn, dist) {
    document.querySelectorAll('.dist-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById('distSelect').value = dist;
    this.updateParams();
  },

  selectTipo(btn, tipo) {
    document.querySelectorAll('.prob-btn').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById('tipoProb').value = tipo;
    this.updateTipo();
  },

  updateParams() {
    const dist = document.getElementById('distSelect')?.value || 'normal';
    const lbl = (cls, txt) => `<span class="lbl ${cls}">${txt}</span>`;
    let html = '';
    if (dist === 'normal') {
      html = `<div class="row3" style="margin-bottom:8px">
        <div>${lbl('a','Media μ')}<input type="number" id="p_mu" step="any" value="0" placeholder="Ej: 68.3"></div>
        <div>${lbl('g','Desv. Est. σ')}<input type="number" id="p_sigma" step="any" value="1" min="0.0001" placeholder="Ej: 8.2"></div>
      </div>`;
    } else if (dist === 't') {
      html = `<div class="field">${lbl('b','Grados de libertad (gl)')}<input type="number" id="p_gl" value="10" min="1" step="1" placeholder="Ej: 9"></div>`;
    } else if (dist === 'chi2') {
      html = `<div class="field">${lbl('g','Grados de libertad (gl)')}<input type="number" id="p_gl" value="5" min="1" step="1" placeholder="Ej: 4"></div>`;
    } else if (dist === 'F') {
      html = `<div class="row3" style="margin-bottom:8px">
        <div>${lbl('a','gl₁ (numerador)')}<input type="number" id="p_gl1" value="3" min="1" step="1"></div>
        <div>${lbl('b','gl₂ (denominador)')}<input type="number" id="p_gl2" value="20" min="1" step="1"></div>
      </div>`;
    } else if (dist === 'binomial') {
      html = `<div class="row3" style="margin-bottom:8px">
        <div>${lbl('a','n (ensayos)')}<input type="number" id="p_n" value="10" min="1" step="1"></div>
        <div>${lbl('g','p (probabilidad)')}<input type="number" id="p_p" value="0.5" min="0" max="1" step="0.01"></div>
      </div>`;
    } else if (dist === 'poisson') {
      html = `<div class="field">${lbl('w','Tasa λ (lambda)')}<input type="number" id="p_lam" value="3" min="0.0001" step="any" placeholder="Ej: 2.5"></div>`;
    } else if (dist === 'uniforme') {
      html = `<div class="row3" style="margin-bottom:8px">
        <div>${lbl('b','Mínimo a')}<input type="number" id="p_ua" value="0" step="any"></div>
        <div>${lbl('g','Máximo b')}<input type="number" id="p_ub" value="10" step="any"></div>
      </div>`;
    }
    document.getElementById('paramsPanel').innerHTML = html;

    // Mostrar/ocultar P(X=k) según si es discreta
    const isDiscrete = dist === 'binomial' || dist === 'poisson';
    const exactBtn = document.getElementById('probBtnExacto');
    if (exactBtn) {
      exactBtn.style.display = isDiscrete ? '' : 'none';
      if (!isDiscrete && document.getElementById('tipoProb')?.value === 'exacto') {
        document.getElementById('tipoProb').value = 'menor';
        document.querySelectorAll('.prob-btn').forEach((b, i) => b.classList.toggle('on', i === 0));
      }
    }
    this.updateTipo();
  },

  updateTipo() {
    const tipo = document.getElementById('tipoProb')?.value || 'menor';
    const vbField = document.getElementById('vbField');
    if (vbField) vbField.style.display = tipo === 'entre' ? 'block' : 'none';
  },

  _getParams() {
    const dist = document.getElementById('distSelect')?.value || 'normal';
    const g = id => parseFloat(document.getElementById(id)?.value) || 0;
    switch (dist) {
      case 'normal':   return { mu: g('p_mu'), sigma: Math.max(0.0001, g('p_sigma')) };
      case 't':        return { gl: Math.max(1, Math.round(g('p_gl'))) };
      case 'chi2':     return { gl: Math.max(1, Math.round(g('p_gl'))) };
      case 'F':        return { gl1: Math.max(1, Math.round(g('p_gl1'))), gl2: Math.max(1, Math.round(g('p_gl2'))) };
      case 'binomial': return { n: Math.max(1, Math.round(g('p_n'))), p: Math.min(1, Math.max(0, g('p_p'))) };
      case 'poisson':  return { lam: Math.max(0.0001, g('p_lam')) };
      case 'uniforme': { const ua = g('p_ua'), ub = g('p_ub'); return { a: Math.min(ua,ub), b: Math.max(ua,ub) }; }
      default: return {};
    }
  },

  // ============================================
  // CALCULAR
  // ============================================

  async calcular() {
    Utils.hideErr();
    const varName = document.getElementById('varName')?.value.trim() || 'Variable';
    const varUnit = document.getElementById('varUnit')?.value.trim() || '';
    const varDesc = document.getElementById('varDesc')?.value.trim() || '';
    const dist    = document.getElementById('distSelect')?.value || 'normal';
    const tipo    = document.getElementById('tipoProb')?.value || 'menor';
    const va      = parseFloat(document.getElementById('valorA')?.value);
    const vb      = parseFloat(document.getElementById('valorB')?.value);

    if (isNaN(va)) { Utils.showErr('⚠️ Ingresa el valor a.'); return; }
    if (tipo === 'entre' && isNaN(vb)) { Utils.showErr('⚠️ Ingresa el valor b.'); return; }
    if (tipo === 'entre' && vb <= va) { Utils.showErr('⚠️ El valor b debe ser mayor que a.'); return; }

    const params = this._getParams();
    const result = this.compute(dist, params, tipo, va, vb);
    const f4 = v => (Math.round(v * 10000) / 10000).toFixed(4);

    const btn = document.getElementById('calcBtn');
    btn.disabled = true; btn.textContent = '⏳ Calculando...';
    Utils.clearResults();

    const cId  = Utils.uid();
    const aiId = 'ai-' + Utils.uid();

    const distNames = {
      normal: 'Normal', t: 't de Student', chi2: 'Chi-cuadrado',
      F: 'F de Snedecor', binomial: 'Binomial', poisson: 'Poisson', uniforme: 'Uniforme'
    };
    const paramsStr = Object.entries(params).map(([k, v]) => `${k} = ${v}`).join(' | ');

    const tipoLabels = { menor: 'P(X < a)', mayor: 'P(X > a)', entre: 'P(a < X < b)', exacto: 'P(X = k)' };

    Utils.addResult(`
      <div class="card">
        <div class="tb" style="background:var(--accent2)">📐 ${distNames[dist]}</div>
        <div class="card-title">${varName}${varUnit ? ' (' + varUnit + ')' : ''}</div>
        ${varDesc ? `<div class="card-sub">${varDesc}</div>` : ''}

        ${Utils.statsGrid([
          ['Distribución', distNames[dist]],
          ['Parámetros', paramsStr],
          ['Tipo', tipoLabels[tipo]],
          ['Valor a', va],
          ...(tipo === 'entre' ? [['Valor b', vb]] : []),
          ...(result.stat ? [['Estadístico', result.stat]] : []),
          [result.desc, f4(result.prob)],
          ['Complemento 1−P', f4(result.complement)],
          ['Porcentaje %', (result.prob * 100).toFixed(2) + '%'],
        ], 'var(--accent2)')}

        <div class="ib">${result.desc} = <strong>${f4(result.prob)}</strong> &nbsp;|&nbsp; Complemento = <strong>${f4(result.complement)}</strong></div>

        <div class="cw">
          <div class="ct">Distribución ${distNames[dist]} — área sombreada = probabilidad calculada</div>
          <div style="position:relative;height:200px"><canvas id="${cId}"></canvas></div>
        </div>

        ${AI.loadingBlock(aiId)}
      </div>`);

    this.drawChart(cId, dist, params, tipo, va, vb, result);

    // Tablas
    const tabId = Utils.uid();
    Utils.addResult(`
      <div class="card">
        <div class="tb" style="background:var(--accent2)">📋 Tablas de valores críticos</div>
        <div class="card-title">Referencias estadísticas</div>
        <div class="mode-tabs" style="margin-bottom:12px">
          <button class="mode-tab on" id="tab-z" onclick="ModDistribuciones.showTable('z','${tabId}')">Tabla Z</button>
          <button class="mode-tab" id="tab-t" onclick="ModDistribuciones.showTable('t','${tabId}')">Tabla t</button>
          <button class="mode-tab" id="tab-chi" onclick="ModDistribuciones.showTable('chi','${tabId}')">Tabla χ²</button>
          <button class="mode-tab" id="tab-f" onclick="ModDistribuciones.showTable('f','${tabId}')">Tabla F (α=0.05)</button>
        </div>
        <div id="${tabId}"><div class="ld"><span></span><span></span><span></span></div></div>
      </div>`);

    // Render Z table by default (fast)
    setTimeout(() => this.showTable('z', tabId), 50);

    await AI.render(AI.promptDistribuciones(varName, varUnit, varDesc, distNames[dist], paramsStr, tipoLabels[tipo], va, vb, result.prob, result.stat, result.desc), aiId);

    App.addHistory({
      type: `${distNames[dist]} — ${varName}`,
      preview: `${result.desc} = ${f4(result.prob)}`,
      n: 1, stat: f4(result.prob),
    });

    btn.disabled = false; btn.textContent = '📐 Calcular probabilidad con IA';
    setTimeout(() => Utils.scrollTo('resultsArea'), 200);
  },

  showTable(which, containerId) {
    ['z', 't', 'chi', 'f'].forEach(t => {
      const el = document.getElementById('tab-' + t);
      if (el) el.className = 'mode-tab' + (t === which ? ' on' : '');
    });
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '<div class="ld"><span></span><span></span><span></span></div>';
    setTimeout(() => {
      try {
        switch (which) {
          case 'z':   container.innerHTML = this.renderTableZ();   break;
          case 't':   container.innerHTML = this.renderTableT();   break;
          case 'chi': container.innerHTML = this.renderTableChi(); break;
          case 'f':   container.innerHTML = this.renderTableF();   break;
        }
      } catch (e) {
        container.innerHTML = `<div class="err">Error generando tabla: ${e.message}</div>`;
      }
    }, 30);
  },
};
