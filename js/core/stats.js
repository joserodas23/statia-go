/* ============================================
   STATIA GO — js/core/stats.js
   Todos los cálculos estadísticos
   by Jose Rodas
   ============================================ */

const Stats = {

  // ===== MEDIANA =====
  mediana(sorted) {
    const n = sorted.length;
    return n % 2 !== 0
      ? sorted[(n - 1) / 2]
      : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
  },

  medianaDesc(n) {
    return n % 2 !== 0
      ? `n=${n} impar → X[${(n + 1) / 2}]`
      : `n=${n} par → (X[${n / 2}] + X[${n / 2 + 1}]) / 2`;
  },

  // ===== ESTADÍSTICA CUANTITATIVA SIMPLE =====
  cuantitativa(data) {
    const n = data.length;
    const sorted = [...data].sort((a, b) => a - b);
    const mean = data.reduce((s, v) => s + v, 0) / n;
    const med = this.mediana(sorted);
    const variance = data.reduce((s, v) => s + (v - mean) ** 2, 0) / (n - 1);
    const sd = Math.sqrt(variance);
    const cv = Math.abs(mean) > 0 ? (sd / mean) * 100 : 0;
    const q1 = sorted[Math.floor(n * 0.25)];
    const q3 = sorted[Math.floor(n * 0.75)];
    const freq = {};
    data.forEach(v => freq[v] = (freq[v] || 0) + 1);
    const maxF = Math.max(...Object.values(freq));
    const moda = Object.keys(freq).filter(k => freq[k] === maxF).map(Number);

    // Asimetría de Fisher (g1) — fórmula corregida
    const m3 = data.reduce((s, v) => s + (v - mean) ** 3, 0);
    const g1 = n >= 3 && sd > 0 ? (n / ((n - 1) * (n - 2))) * (m3 / sd ** 3) : 0;

    // Curtosis de Fisher (g2) — fórmula corregida (exceso)
    const m4 = data.reduce((s, v) => s + (v - mean) ** 4, 0);
    const g2 = n >= 4 && sd > 0
      ? ((n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3))) * (m4 / sd ** 4) - (3 * (n - 1) ** 2) / ((n - 2) * (n - 3))
      : 0;

    return {
      n, mean, median: med, moda, variance, sd, cv,
      q1, q3, iqr: q3 - q1,
      min: sorted[0], max: sorted[n - 1],
      range: sorted[n - 1] - sorted[0],
      g1, g2,
      sorted,
    };
  },

  // ===== DATOS AGRUPADOS =====
  agrupados(data, kIn, ampIn, decIn, intType = 'semiab', ampEntera = 'no') {
    const dec = parseInt(decIn) || 2;
    const n = data.length;
    const minV = Math.min(...data);
    const maxV = Math.max(...data);
    const k = kIn || Math.round(1 + 3.322 * Math.log10(n));
    let amp = ampIn || (maxV - minV) / k;

    if (ampEntera === 'si') amp = Math.ceil(amp);
    else amp = Math.ceil(amp * Math.pow(10, dec)) / Math.pow(10, dec);

    const classes = [];
    let li = minV;
    for (let i = 0; i < k; i++) {
      const ls = parseFloat((li + amp).toFixed(dec));
      const xi = parseFloat(((li + ls) / 2).toFixed(dec));
      const isLast = i === k - 1;
      const fi = data.filter(v =>
        isLast || intType === 'cerrado'
          ? v >= li && v <= ls
          : v >= li && v < ls
      ).length;
      classes.push({ li: parseFloat(li.toFixed(dec)), ls, xi, fi });
      li = parseFloat(ls.toFixed(dec));
    }

    let Fi = 0;
    classes.forEach(c => {
      Fi += c.fi;
      c.Fi = Fi;
      c.hi = parseFloat((c.fi / n).toFixed(4));
      c.Hi = parseFloat((Fi / n).toFixed(4));
    });

    // Media
    const mean = classes.reduce((s, c) => s + c.xi * c.fi, 0) / n;

    // Mediana
    const mc = classes.find(c => c.Fi >= n / 2) || classes[classes.length - 1];
    const mi = classes.indexOf(mc);
    const FiP = mi > 0 ? classes[mi - 1].Fi : 0;
    const median = mc.fi > 0 ? mc.li + ((n / 2 - FiP) / mc.fi) * amp : mc.li;

    // Moda (Czuber)
    const maxFi = Math.max(...classes.map(c => c.fi));
    const moI = classes.findIndex(c => c.fi === maxFi);
    const d1 = moI > 0 ? Math.max(0, maxFi - classes[moI - 1].fi) : 0;
    const d2 = moI < classes.length - 1 ? Math.max(0, maxFi - classes[moI + 1].fi) : 0;
    const mode = (d1 + d2) > 0
      ? classes[moI].li + (d1 / (d1 + d2)) * amp
      : classes[moI].li + amp / 2;

    // Dispersión
    const variance = classes.reduce((s, c) => s + c.fi * (c.xi - mean) ** 2, 0) / (n - 1);
    const sd = Math.sqrt(variance);
    const cv = Math.abs(mean) > 0 ? (sd / mean) * 100 : 0;

    // Asimetría de Fisher (g1) — con marcas de clase
    const m3g = classes.reduce((s, c) => s + c.fi * (c.xi - mean) ** 3, 0);
    const g1 = n >= 3 && sd > 0 ? (n / ((n - 1) * (n - 2))) * (m3g / sd ** 3) : 0;

    // Curtosis de Fisher (g2) — con marcas de clase
    const m4g = classes.reduce((s, c) => s + c.fi * (c.xi - mean) ** 4, 0);
    const g2 = n >= 4 && sd > 0
      ? ((n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3))) * (m4g / sd ** 4) - (3 * (n - 1) ** 2) / ((n - 2) * (n - 3))
      : 0;

    return { n, k, amp, mean, median, mode, variance, sd, cv, g1, g2, classes, dec, intType };
  },

  // ===== FRECUENCIAS CUALITATIVAS =====
  frecuencias(cats, order = []) {
    const freq = {};
    cats.forEach(c => freq[c] = (freq[c] || 0) + 1);
    const n = cats.length;
    let keys = order.length
      ? order.filter(k => freq[k] !== undefined)
      : Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
    Object.keys(freq).forEach(k => { if (!keys.includes(k)) keys.push(k); });
    const maxF = Math.max(...Object.values(freq));
    const moda = keys.filter(k => freq[k] === maxF);
    return { freq, n, keys, moda, maxF };
  },
};
