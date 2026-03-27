/* ============================================
   STATIA GO — js/core/utils.js
   Funciones utilitarias compartidas por todos los módulos
   by Jose Rodas
   ============================================ */

const Utils = {

  // Parsear números desde texto
  parseNums(raw) {
    return raw
      .split(/[\s,;\n\t]+/)
      .map(s => s.replace(/[^0-9.\-]/g, ''))
      .filter(s => s !== '' && !isNaN(parseFloat(s)))
      .map(Number);
  },

  // Parsear categorías desde texto
  parseCats(raw) {
    return raw.split(/[,;\n]+/).map(s => s.trim()).filter(s => s !== '');
  },

  // Formatear número con decimales
  fmt(v, d = 4) {
    if (typeof v !== 'number') return v;
    return Number.isInteger(v) ? v.toString() : v.toFixed(d);
  },

  // ID único para elementos DOM
  uid() {
    return 'c' + Date.now() + Math.floor(Math.random() * 9999);
  },

  // Mostrar error en formulario
  showErr(msg) {
    const el = document.getElementById('formErr');
    if (el) { el.textContent = msg; el.style.display = 'block'; }
  },

  // Ocultar error
  hideErr() {
    const el = document.getElementById('formErr');
    if (el) el.style.display = 'none';
  },

  // HTML stats grid
  statsGrid(pairs, col = 'var(--accent)') {
    return `<div class="sg">${pairs.map(([l, v]) =>
      `<div class="sc"><span class="sv" style="color:${col}">${v}</span><div class="sl">${l}</div></div>`
    ).join('')}</div>`;
  },

  // HTML tabla de frecuencias
  freqTable(headers, rows, totalRow) {
    return `<div class="tw"><table class="ft">
      <thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${rows.join('')}<tr class="tot">${totalRow}</tr></tbody>
    </table></div>`;
  },

  // HTML type badge
  typeBadge(cls, icon, label) {
    return `<div class="${cls} tb">${icon} ${label}</div>`;
  },

  // Agregar resultado al área de resultados
  addResult(html) {
    const block = document.getElementById('resultsArea');
    if (block) block.insertAdjacentHTML('beforeend', html);
  },

  // Limpiar resultados
  clearResults() {
    const block = document.getElementById('resultsArea');
    if (block) block.innerHTML = '';
  },

  // Guardar datos del formulario
  saveFormData(state) {
    ['varName', 'varDesc', 'dataInput', 'orderInput', 'kInput', 'ampInput', 'decInput'].forEach(id => {
      const el = document.getElementById(id);
      if (el) state.savedData[id] = el.value;
    });
  },

  // Restaurar datos del formulario
  restoreFormData(state) {
    ['varName', 'varDesc', 'dataInput', 'orderInput', 'kInput', 'ampInput', 'decInput'].forEach(id => {
      const el = document.getElementById(id);
      if (el && state.savedData[id]) el.value = state.savedData[id];
    });
  },

  // Renderizar fórmula con KaTeX
  tex(formula, display = false) {
    try {
      return katex.renderToString(formula, { throwOnError: false, displayMode: display });
    } catch (e) {
      return formula;
    }
  },

  // Scroll a elemento
  scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  // Renderizar fórmulas KaTeX en un contenedor
  renderKaTeX(container) {
    (container || document).querySelectorAll('.ktx').forEach(el => {
      try { katex.render(el.dataset.f, el, { throwOnError: false, displayMode: false }); } catch(e) {}
    });
  },
};
