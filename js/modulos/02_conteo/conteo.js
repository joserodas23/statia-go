/* ============================================
   STATIA GO — js/modulos/02_conteo/conteo.js
   Módulo: Técnicas de Conteo
   Factorial, Permutaciones, Variaciones, Combinaciones
   by Jose Rodas
   ============================================ */

const ModConteo = {

  _fact(n) {
    if (n < 0 || !Number.isInteger(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  },

  _perm(n, r)   { return this._fact(n) / this._fact(n - r); },
  _comb(n, r)   { return this._fact(n) / (this._fact(r) * this._fact(n - r)); },
  _vr(n, r)     { return Math.pow(n, r); },
  _permRep(n, ks) { return this._fact(n) / ks.reduce((a, k) => a * this._fact(k), 1); },
  _combRep(n, r){ return this._comb(n + r - 1, r); },

  render(area) {
    area.innerHTML = `
      <div class="card" style="margin-top:0">
        <div class="tb tb-comb">🎲 Técnicas de Conteo</div>
        <div class="mod-tabs">
          <button class="mod-tab active" onclick="ModConteo._tab('teoria',this)">📖 Teoría</button>
          <button class="mod-tab" onclick="ModConteo._tab('calc',this)">🧮 Calculador</button>
        </div>
        <div id="cnt-teoria">${this._teoria()}</div>
        <div id="cnt-calc" style="display:none">${this._form()}</div>
      </div>`;
    Utils.renderKaTeX(area);
  },

  _tab(id, btn) {
    ['teoria', 'calc'].forEach(t =>
      document.getElementById('cnt-' + t).style.display = t === id ? '' : 'none'
    );
    btn.closest('.mod-tabs').querySelectorAll('.mod-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  },

  _teoria() {
    return `
    <div class="step" style="border-left-color:var(--accent)">
      <div class="step-num">Principio fundamental</div>
      <div class="step-title">Principio Multiplicativo</div>
      Si un evento A puede ocurrir de <em>m</em> maneras y un evento B de <em>n</em> maneras, entonces ambos eventos juntos pueden ocurrir de <strong>m × n</strong> maneras.
      <div class="fml-card" style="margin-top:10px">
        <div class="fml-row"><div class="fml-label">Total</div><div class="fml-val"><span class="ktx" data-f="m \\times n \\times \\cdots"></span></div></div>
      </div>
      <div style="font-family:'DM Mono',monospace;font-size:0.67rem;color:var(--muted);margin-top:8px">
        Ejemplo: 3 camisas y 4 pantalones → 3 × 4 = <strong>12</strong> combinaciones de ropa.
      </div>
    </div>

    <div class="step" style="border-left-color:var(--gold)">
      <div class="step-num">Operación base</div>
      <div class="step-title">Factorial (n!)</div>
      Producto de todos los enteros positivos desde 1 hasta n. Representa las formas de ordenar n elementos.
      <div class="fml-card" style="margin-top:10px">
        <div class="fml-row"><div class="fml-label">Fórmula</div><div class="fml-val"><span class="ktx" data-f="n! = n \\times (n-1) \\times \\cdots \\times 2 \\times 1"></span></div></div>
        <div class="fml-row"><div class="fml-label">Caso especial</div><div class="fml-val"><span class="ktx" data-f="0! = 1"></span></div></div>
      </div>
      <div style="font-family:'DM Mono',monospace;font-size:0.67rem;color:var(--muted);margin-top:8px">
        5! = 5 × 4 × 3 × 2 × 1 = <strong>120</strong>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--accent2)">
      <div class="step-num">El orden importa · sin repetición</div>
      <div class="step-title">Permutaciones P(n, r)</div>
      Formas de ordenar <em>r</em> elementos elegidos de un total de <em>n</em>, cuando el <strong>orden importa</strong> y no se repiten.
      <div class="fml-card" style="margin-top:10px">
        <div class="fml-row"><div class="fml-label">Fórmula</div><div class="fml-val"><span class="ktx" data-f="P(n,r) = \\dfrac{n!}{(n-r)!}"></span></div></div>
      </div>
      <div style="font-family:'DM Mono',monospace;font-size:0.67rem;color:var(--muted);margin-top:8px">
        Ej: ¿De cuántas formas pueden ocupar el 1°, 2° y 3° puesto 8 corredores?<br>
        P(8,3) = 8!/(8-3)! = 8×7×6 = <strong>336</strong>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--warn)">
      <div class="step-num">El orden importa · con repetición</div>
      <div class="step-title">Variaciones con Repetición VR(n, r)</div>
      Formas de elegir <em>r</em> elementos de <em>n</em> cuando el orden importa y <strong>se puede repetir</strong>.
      <div class="fml-card" style="margin-top:10px">
        <div class="fml-row"><div class="fml-label">Fórmula</div><div class="fml-val"><span class="ktx" data-f="VR(n,r) = n^r"></span></div></div>
      </div>
      <div style="font-family:'DM Mono',monospace;font-size:0.67rem;color:var(--muted);margin-top:8px">
        Ej: ¿Cuántas contraseñas de 4 dígitos (0-9) existen?<br>
        VR(10,4) = 10⁴ = <strong>10 000</strong>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--accent)">
      <div class="step-num">Permutación especial</div>
      <div class="step-title">Permutaciones con Repetición PR</div>
      Formas de ordenar <em>n</em> elementos donde algunos se repiten (k₁ de un tipo, k₂ de otro…).
      <div class="fml-card" style="margin-top:10px">
        <div class="fml-row"><div class="fml-label">Fórmula</div><div class="fml-val"><span class="ktx" data-f="PR = \\dfrac{n!}{k_1! \\cdot k_2! \\cdots k_m!}"></span></div></div>
      </div>
      <div style="font-family:'DM Mono',monospace;font-size:0.67rem;color:var(--muted);margin-top:8px">
        Ej: ¿Cuántas palabras se forman con MISSISSIPPI (11 letras)?<br>
        11!/(4!·4!·2!·1!) = <strong>34 650</strong>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--gold)">
      <div class="step-num">El orden no importa · sin repetición</div>
      <div class="step-title">Combinaciones C(n, r)</div>
      Formas de elegir <em>r</em> elementos de <em>n</em> cuando el <strong>orden no importa</strong>.
      <div class="fml-card" style="margin-top:10px">
        <div class="fml-row"><div class="fml-label">Fórmula</div><div class="fml-val"><span class="ktx" data-f="C(n,r) = \\binom{n}{r} = \\dfrac{n!}{r!(n-r)!}"></span></div></div>
      </div>
      <div style="font-family:'DM Mono',monospace;font-size:0.67rem;color:var(--muted);margin-top:8px">
        Ej: ¿De cuántas formas elegir 3 integrantes de un grupo de 10?<br>
        C(10,3) = 10!/(3!·7!) = <strong>120</strong>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--accent2)">
      <div class="step-num">El orden no importa · con repetición</div>
      <div class="step-title">Combinaciones con Repetición CR(n, r)</div>
      Formas de elegir <em>r</em> elementos de <em>n</em> cuando el orden no importa y <strong>se puede repetir</strong>.
      <div class="fml-card" style="margin-top:10px">
        <div class="fml-row"><div class="fml-label">Fórmula</div><div class="fml-val"><span class="ktx" data-f="CR(n,r) = \\binom{n+r-1}{r} = \\dfrac{(n+r-1)!}{r!(n-1)!}"></span></div></div>
      </div>
      <div style="font-family:'DM Mono',monospace;font-size:0.67rem;color:var(--muted);margin-top:8px">
        Ej: ¿De cuántas formas pedir 3 sabores de helado de 5 disponibles (se puede repetir)?<br>
        CR(5,3) = C(7,3) = <strong>35</strong>
      </div>
    </div>

    <div class="step" style="border-left-color:var(--accent3)">
      <div class="step-num">Resumen</div>
      <div class="step-title">¿Cuándo usar cada fórmula?</div>
      <div class="fml-card" style="margin-top:6px">
        <div class="fml-row"><div class="fml-label" style="min-width:90px">Técnica</div><div class="fml-val">¿Orden importa? · ¿Repetición?</div></div>
        <div class="fml-row"><div class="fml-label" style="color:var(--accent2)">Permutación</div><div class="fml-val">✅ Sí orden · ❌ Sin repetición</div></div>
        <div class="fml-row"><div class="fml-label" style="color:var(--warn)">Var. c/Rep.</div><div class="fml-val">✅ Sí orden · ✅ Con repetición</div></div>
        <div class="fml-row"><div class="fml-label" style="color:var(--gold)">Combinación</div><div class="fml-val">❌ No orden · ❌ Sin repetición</div></div>
        <div class="fml-row"><div class="fml-label" style="color:var(--accent2)">Comb. c/Rep.</div><div class="fml-val">❌ No orden · ✅ Con repetición</div></div>
        <div class="fml-row"><div class="fml-label" style="color:var(--accent)">Perm. c/Rep.</div><div class="fml-val">✅ Sí orden · Elementos repetidos en el grupo</div></div>
      </div>
    </div>`;
  },

  _form() {
    return `
    <div style="margin-top:8px">
      <div class="inp-label">Tipo de cálculo</div>
      <select class="inp-sel" id="cnt-tipo" onchange="ModConteo._updateForm()">
        <option value="fact">n! — Factorial</option>
        <option value="perm">P(n,r) — Permutaciones</option>
        <option value="vr">VR(n,r) — Variaciones con repetición</option>
        <option value="permrep">PR — Permutaciones con repetición</option>
        <option value="comb">C(n,r) — Combinaciones</option>
        <option value="combrep">CR(n,r) — Combinaciones con repetición</option>
      </select>
    </div>
    <div id="cnt-inputs" style="margin-top:4px"></div>
    <div id="cnt-desc" style="font-family:'DM Mono',monospace;font-size:0.65rem;color:var(--muted);margin-top:8px;line-height:1.7;padding:8px 10px;background:var(--surface2);border-radius:8px"></div>
    <button class="btn-calc" onclick="ModConteo.calcular()" style="margin-top:14px">Calcular</button>
    <button class="btn-s" onclick="ModConteo.ejemplo()" style="width:100%;padding:9px;background:transparent;border:1px solid var(--border);border-radius:9px;color:var(--muted);font-family:'DM Mono',monospace;font-size:0.72rem;cursor:pointer;margin-top:6px">📋 Cargar ejemplo</button>
    <div id="cnt-result"></div>
    <div id="cnt-ai"></div>`;
  },

  init() {
    this._updateForm();
  },

  _updateForm() {
    const tipo = document.getElementById('cnt-tipo')?.value;
    const inp = document.getElementById('cnt-inputs');
    const desc = document.getElementById('cnt-desc');
    if (!inp || !desc) return;

    const descTexts = {
      fact:    'Calcula el factorial de un número entero no negativo. Útil para contar arreglos totales.',
      perm:    'Elige r elementos de n donde el <strong>orden importa</strong> y no hay repetición. Ej: pódium, cargos.',
      vr:      'Elige r elementos de n donde el <strong>orden importa</strong> y sí hay repetición. Ej: contraseñas, códigos.',
      permrep: 'Ordena n elementos donde algunos se repiten. Escribe las frecuencias separadas por coma. Ej: AABBC → 2,2,1',
      comb:    'Elige r elementos de n donde el <strong>orden NO importa</strong> y no hay repetición. Ej: comités, grupos.',
      combrep: 'Elige r elementos de n donde el <strong>orden NO importa</strong> y sí hay repetición. Ej: sabores, monedas.',
    };
    desc.innerHTML = descTexts[tipo] || '';

    if (tipo === 'fact') {
      inp.innerHTML = `<div class="inp-label">n (número)</div><input class="inp" id="cnt-n" type="number" min="0" max="20" value="5" placeholder="0–20">`;
    } else if (tipo === 'permrep') {
      inp.innerHTML = `
        <div class="inp-label">n (total de elementos)</div>
        <input class="inp" id="cnt-n" type="number" min="1" max="20" value="11" placeholder="Ej: 11">
        <div class="inp-label" style="margin-top:8px">Frecuencias de repetición (separadas por coma)</div>
        <input class="inp" id="cnt-ks" type="text" value="4,4,2,1" placeholder="Ej: 4,4,2,1">`;
    } else {
      inp.innerHTML = `
        <div class="inp-label">n (total de elementos)</div>
        <input class="inp" id="cnt-n" type="number" min="1" max="30" value="10" placeholder="Ej: 10">
        <div class="inp-label" style="margin-top:8px">r (elementos a elegir)</div>
        <input class="inp" id="cnt-r" type="number" min="0" max="30" value="3" placeholder="Ej: 3">`;
    }
  },

  async calcular() {
    const tipo = document.getElementById('cnt-tipo')?.value;
    const n = parseInt(document.getElementById('cnt-n')?.value);
    const rEl = document.getElementById('cnt-r');
    const r = rEl ? parseInt(rEl.value) : null;
    const resDiv = document.getElementById('cnt-result');
    const aiDiv = document.getElementById('cnt-ai');

    if (!resDiv) return;
    aiDiv.innerHTML = '';

    // Validaciones
    if (isNaN(n) || n < 0) { resDiv.innerHTML = this._error('n debe ser un entero ≥ 0.'); return; }
    if (n > 20 && tipo === 'fact') { resDiv.innerHTML = this._error('n muy grande para factorial exacto (máx. 20).'); return; }

    let resultado, formula, label, ctx;

    try {
      if (tipo === 'fact') {
        resultado = this._fact(n);
        formula = `${n}!`;
        label = 'Factorial';
        ctx = `Factorial de ${n}`;
      } else if (tipo === 'perm') {
        if (isNaN(r) || r < 0 || r > n) { resDiv.innerHTML = this._error('r debe ser 0 ≤ r ≤ n.'); return; }
        resultado = this._perm(n, r);
        formula = `P(${n}, ${r})`;
        label = 'Permutaciones';
        ctx = `Permutaciones de ${n} elementos tomados de ${r} en ${r}`;
      } else if (tipo === 'vr') {
        if (isNaN(r) || r < 0) { resDiv.innerHTML = this._error('r debe ser ≥ 0.'); return; }
        resultado = this._vr(n, r);
        formula = `VR(${n}, ${r}) = ${n}^${r}`;
        label = 'Variaciones con Rep.';
        ctx = `Variaciones con repetición de ${n} elementos tomados de ${r} en ${r}`;
      } else if (tipo === 'permrep') {
        const ksRaw = document.getElementById('cnt-ks')?.value || '';
        const ks = ksRaw.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x) && x > 0);
        if (!ks.length) { resDiv.innerHTML = this._error('Ingresa las frecuencias separadas por coma.'); return; }
        const suma = ks.reduce((a, b) => a + b, 0);
        if (suma !== n) { resDiv.innerHTML = this._error(`La suma de frecuencias (${suma}) debe ser igual a n (${n}).`); return; }
        resultado = this._permRep(n, ks);
        formula = `PR(${n}; ${ks.join(', ')})`;
        label = 'Perm. con Repetición';
        ctx = `Permutaciones con repetición de ${n} elementos con frecuencias [${ks.join(', ')}]`;
      } else if (tipo === 'comb') {
        if (isNaN(r) || r < 0 || r > n) { resDiv.innerHTML = this._error('r debe ser 0 ≤ r ≤ n.'); return; }
        resultado = this._comb(n, r);
        formula = `C(${n}, ${r})`;
        label = 'Combinaciones';
        ctx = `Combinaciones de ${n} elementos tomados de ${r} en ${r}`;
      } else if (tipo === 'combrep') {
        if (isNaN(r) || r < 0) { resDiv.innerHTML = this._error('r debe ser ≥ 0.'); return; }
        resultado = this._combRep(n, r);
        formula = `CR(${n}, ${r}) = C(${n + r - 1}, ${r})`;
        label = 'Comb. con Repetición';
        ctx = `Combinaciones con repetición de ${n} elementos tomados de ${r} en ${r}`;
      }

      if (!isFinite(resultado) || isNaN(resultado)) {
        resDiv.innerHTML = this._error('El resultado es demasiado grande o los valores son inválidos.');
        return;
      }

      const resFmt = resultado >= 1e15
        ? resultado.toExponential(4)
        : resultado.toLocaleString('es');

      resDiv.innerHTML = `
        <div class="stats-grid" style="margin-top:14px">
          <div class="stat-box">
            <div class="stat-val" style="color:var(--accent);font-size:1.5rem">${resFmt}</div>
            <div class="stat-lbl">${label}</div>
          </div>
          <div class="stat-box">
            <div class="stat-val" style="font-size:1rem;color:var(--muted)">${formula}</div>
            <div class="stat-lbl">Fórmula aplicada</div>
          </div>
        </div>`;

      await AI.render(AI.promptConteo(ctx, formula, resultado), 'cnt-ai');

    } catch(e) {
      resDiv.innerHTML = this._error('Error en el cálculo: ' + e.message);
    }
  },

  _error(msg) {
    return `<div style="background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.25);border-radius:10px;padding:12px 14px;font-family:'DM Mono',monospace;font-size:0.7rem;color:var(--accent3);margin-top:12px">⚠️ ${msg}</div>`;
  },

  ejemplo() {
    // Carga ejemplo: C(10, 3) — Combinaciones
    const sel = document.getElementById('cnt-tipo');
    if (sel) { sel.value = 'comb'; sel.dispatchEvent(new Event('change')); }
    setTimeout(() => {
      const n = document.getElementById('cnt-n');
      const r = document.getElementById('cnt-r');
      if (n) n.value = '10';
      if (r) r.value = '3';
    }, 50);
  },
};
