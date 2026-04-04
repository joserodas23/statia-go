/* ============================================
   STATIA GO — js/core/app.js
   Navegación, estado global y menú drawer
   by Jose Rodas
   ============================================ */

const App = {

  // ===== ESTADO GLOBAL =====
  state: {
    curType: null,
    curMode: 'simple',
    chipState: { interval: 'semiab', ampEntera: 'no' },
    history: [],
    savedData: {
      varName: '', varDesc: '', dataInput: '',
      orderInput: '', kInput: '', ampInput: '', decInput: '2'
    },
    modoExamen: false,
  },

  _examenTimer: null,
  _examenSegundos: 7200,

  // ===== CONFIGURACIÓN DE MÓDULOS =====
  modules: {
    // Descriptiva
    nominal:  { label: 'Nominal',  icon: '🏷️', col: 'var(--accent)',  tb: 'tb-n', miCls: 'sel-g', section: 'descriptiva' },
    ordinal:  { label: 'Ordinal',  icon: '📶', col: 'var(--accent2)', tb: 'tb-o', miCls: 'sel-b', section: 'descriptiva' },
    discreta: { label: 'Discreta', icon: '🔢', col: 'var(--gold)',    tb: 'tb-d', miCls: 'sel-y', section: 'descriptiva' },
    continua: { label: 'Continua', icon: '📏', col: 'var(--warn)',    tb: 'tb-c', miCls: 'sel-w', section: 'descriptiva' },
    conteo:      { label: 'Técnicas de Conteo',  icon: '🎲', col: 'var(--accent3)', tb: 'tb-comb', miCls: 'sel-r', section: 'conteo' },
    dist_tablas: { label: 'Tablas estadísticas', icon: '📋', col: 'var(--accent2)', tb: 'tb-dist', miCls: 'sel-b', section: 'distribuciones', pill: 'Tablas' },
    dist_calc:   { label: 'Probabilidades',      icon: '📐', col: 'var(--accent)',  tb: 'tb-calc', miCls: 'sel-g', section: 'distribuciones', pill: 'Probabilidades' },
    hipotesis:   { label: 'Hipótesis',           icon: '🧪', col: 'var(--accent)',  tb: 'tb-hip',  miCls: 'sel-g', section: 'hipotesis' },
    chi:         { label: 'Chi-cuadrado',        icon: 'χ²', col: 'var(--accent2)',tb: 'tb-chi',  miCls: 'sel-b', section: 'hipotesis' },
    intervalos:  { label: 'Intervalos de Confianza', icon: '📊', col: 'var(--accent2)', tb: 'tb-ic', miCls: 'sel-b', section: 'inferencia' },
    regresion:   { label: 'Regresión',           icon: '📈', col: 'var(--gold)',    tb: 'tb-reg',  miCls: 'sel-y', section: 'regresion' },
    supuestos:   { label: 'Supuestos Estadísticos', icon: '🔬', col: 'var(--accent2)', tb: 'tb-sup',  miCls: 'sel-b', section: 'regresion' },
  },

  _examenSalidas: 0,
  _examenLog: [],

  // ===== RUTAS DE APRENDIZAJE =====
  _paths: {
    principiante: {
      label: '🟢 Ruta Principiante', color: 'var(--accent)',
      bg: 'rgba(79,255,176,0.07)', border: 'rgba(79,255,176,0.2)',
      desc: 'Estadística descriptiva — aprende a describir y resumir datos antes de inferir.',
      steps: [
        { type: 'nominal',  icon: '🏷️', name: 'Nominal',  desc: 'Variables cualitativas sin orden — categorías' },
        { type: 'ordinal',  icon: '📶', name: 'Ordinal',  desc: 'Variables con orden pero sin distancia fija' },
        { type: 'discreta', icon: '🔢', name: 'Discreta', desc: 'Conteos enteros — hijos, errores, goles' },
        { type: 'continua', icon: '📏', name: 'Continua', desc: 'Mediciones con decimales — peso, temperatura' },
      ]
    },
    inferencial: {
      label: '🔵 Estadística Inferencial', color: 'var(--accent2)',
      bg: 'rgba(123,140,255,0.07)', border: 'rgba(123,140,255,0.2)',
      desc: 'Toma decisiones estadísticas a partir de muestras — el núcleo de la estadística aplicada.',
      steps: [
        { type: 'conteo',     icon: '🎲', name: 'Conteo',               desc: 'Factorial, permutaciones y combinaciones' },
        { type: 'dist_tablas',icon: '📋', name: 'Tablas',                desc: 'Tablas Z, t, Chi², F, Binomial, Poisson' },
        { type: 'dist_calc',  icon: '📐', name: 'Probabilidades',        desc: 'Calcular P(X<a), P(a<X<b) con IA' },
        { type: 'supuestos',  icon: '🔬', name: 'Supuestos Estadísticos', desc: 'Verificar normalidad e independencia antes de aplicar pruebas' },
        { type: 'hipotesis',  icon: '🧪', name: 'Hipótesis',             desc: 'Pruebas Z, t, ANOVA — una y dos muestras' },
        { type: 'intervalos', icon: '📊', name: 'Intervalos IC',         desc: 'IC para μ, proporción y diferencia de medias' },
        { type: 'chi',        icon: 'χ²', name: 'Chi-cuadrado',          desc: 'Independencia y bondad de ajuste' },
      ]
    },
    ciencia: {
      label: '🟡 Ciencia de Datos', color: 'var(--gold)',
      bg: 'rgba(255,209,102,0.07)', border: 'rgba(255,209,102,0.2)',
      desc: 'De la estadística clásica al modelado predictivo — la ruta completa para trabajar con datos reales.',
      steps: [
        { type: 'dist_calc',    icon: '📐', name: 'Probabilidades',           desc: 'Distribuciones como base del modelado estadístico' },
        { type: 'hipotesis',    icon: '🧪', name: 'Pruebas de Hipótesis',      desc: 'Tomar decisiones con evidencia estadística' },
        { type: 'intervalos',   icon: '📊', name: 'Intervalos de Confianza',   desc: 'Estimar parámetros poblacionales con incertidumbre' },
        { type: 'supuestos',    icon: '🔬', name: 'Supuestos Estadísticos',    desc: 'Verificar normalidad, homocedasticidad e independencia antes de modelar' },
        { type: 'regresion',    icon: '📈', name: 'Regresión y ANOVA',         desc: 'Modelado predictivo — aplica los supuestos aprendidos' },
        { type: 'validacion',   icon: '🔁', name: 'Validación Cruzada',        desc: 'K-Fold CV — detectar overfitting y evaluar generalización', coming: true },
        { type: 'logistica',    icon: '🎯', name: 'Regresión Logística',       desc: 'Clasificación binaria — predecir 0 o 1 con probabilidades', coming: true },
        { type: 'regulariz',    icon: '⚖️', name: 'Regularización Lasso/Ridge', desc: 'Penalizar complejidad del modelo — L1 y L2', coming: true },
        { type: 'arboles',      icon: '🌳', name: 'Árboles y Random Forest',   desc: 'Modelos no lineales, robustos y explicables', coming: true },
        { type: 'redes',        icon: '🧠', name: 'Introducción a Redes Neuronales', desc: 'Perceptrón, capas ocultas y backpropagation', coming: true },
      ]
    }
  },

  showPath(pathId) {
    const path = this._paths[pathId];
    if (!path) return;

    this.closeDrawer();
    this.showScreen('analysisScreen');
    this.setNav('calc');
    document.getElementById('mpill').classList.remove('show');
    document.getElementById('hdrSub').textContent = path.label;

    const visited   = new Set(this.state.history.map(h => h.type));
    const active    = path.steps.filter(s => !s.coming);
    const total     = active.length;
    const done      = active.filter(s => Quiz.isCompleted(s.type)).length;
    const pct       = total ? Math.round((done / total) * 100) : 0;

    const stepsHtml = path.steps.map((step, i) => {
      if (step.coming) return `
        <div style="display:flex;align-items:center;gap:10px;padding:11px 12px;
                    opacity:0.45;border:1px dashed var(--border);border-radius:10px;margin-bottom:8px">
          <div style="font-size:1.2rem;min-width:28px;text-align:center">${step.icon}</div>
          <div style="flex:1;min-width:0">
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.74rem;color:var(--muted)">
              ${i + 1}. ${step.name}
            </div>
            <div style="font-family:'DM Mono',monospace;font-size:0.58rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${step.desc}</div>
          </div>
          <div style="font-family:'DM Mono',monospace;font-size:0.58rem;padding:3px 8px;border:1px solid var(--border);border-radius:6px;color:var(--muted);white-space:nowrap">
            🔒 Próximamente
          </div>
        </div>`;

      const visto     = visited.has(step.type);
      const completed = Quiz.isCompleted(step.type);
      const hasQuiz   = !!(Quiz.banks && Quiz.banks[step.type]);
      return `
        <div style="display:flex;align-items:center;gap:10px;padding:11px 12px;
                    background:${completed ? path.bg : 'transparent'};
                    border:1px solid ${completed ? path.border : 'var(--border)'};
                    border-radius:10px;margin-bottom:8px">
          <div style="font-size:1.2rem;min-width:28px;text-align:center">${step.icon}</div>
          <div style="flex:1;min-width:0">
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.74rem;color:${path.color}">
              ${i + 1}. ${step.name}
              ${completed ? '<span style="color:var(--accent);font-size:0.58rem;margin-left:5px">✓ Quiz OK</span>'
                          : visto ? '<span style="color:var(--muted);font-size:0.58rem;margin-left:5px">Visto</span>' : ''}
            </div>
            <div style="font-family:\'DM Mono\',monospace;font-size:0.58rem;color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${step.desc}</div>
          </div>
          <div class="path-step-btns" style="display:flex;gap:5px;flex-wrap:wrap;flex-shrink:0">
            <button onclick="App._showTeoria('${step.type}','${pathId}')"
                    style="font-size:0.58rem;padding:5px 8px;background:transparent;border:1px solid var(--border);border-radius:7px;color:var(--muted);cursor:pointer;font-family:\'DM Mono\',monospace">
              📖 Teoría
            </button>
            ${hasQuiz ? `<button onclick="App._showQuiz('${step.type}','${pathId}')"
                    style="font-size:0.58rem;padding:5px 8px;background:var(--accent2);border:none;border-radius:7px;color:var(--bg);cursor:pointer;font-family:\'DM Mono\',monospace;font-weight:700">
              🎯 Quiz
            </button>` : ''}
            <button onclick="App._showCalc('${step.type}','${pathId}')"
                    style="font-size:0.58rem;padding:5px 8px;background:rgba(255,209,102,0.15);border:1px solid rgba(255,209,102,0.3);border-radius:7px;color:var(--gold);cursor:pointer;font-family:\'DM Mono\',monospace;font-weight:700">
              🔢 Calcular
            </button>
          </div>
        </div>`;
    }).join('');

    const area     = document.getElementById('tutorialArea');
    const formArea = document.getElementById('formArea');
    if (formArea) formArea.innerHTML = '';
    Utils.clearResults();
    if (area) area.innerHTML = `
      <div class="card" style="margin-top:0">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
          <button onclick="App.goHome()"
                  style="font-size:0.62rem;padding:6px 12px;background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--muted);cursor:pointer;font-family:'DM Mono',monospace;flex-shrink:0">
            ← Rutas
          </button>
          <div class="tb" style="background:${path.bg};border:1px solid ${path.border};color:${path.color};font-family:'Syne',sans-serif;font-weight:800;font-size:0.78rem;padding:6px 12px;border-radius:8px;margin:0;flex:1">
            ${path.label}
          </div>
        </div>
        <div style="font-family:'DM Mono',monospace;font-size:0.63rem;color:var(--muted);margin-bottom:14px">${path.desc}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
          <div style="flex:1;height:6px;background:var(--surface2);border-radius:4px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${path.color};border-radius:4px;transition:width 0.4s"></div>
          </div>
          <div style="font-family:'DM Mono',monospace;font-size:0.62rem;color:${path.color};white-space:nowrap">
            ${done}/${total} quiz completados
          </div>
        </div>
        ${stepsHtml}
      </div>`;
  },

  _showCalc(type, pathId) {
    this.showScreen('analysisScreen');
    this.setNav('calc');
    document.getElementById('mpill').classList.remove('show');
    const mod = this.modules[type];
    document.getElementById('hdrSub').textContent = mod ? mod.label : type;
    Utils.clearResults();

    const area     = document.getElementById('tutorialArea');
    const formArea = document.getElementById('formArea');

    const backBtn = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding:0 2px">
        <button onclick="App.showPath('${pathId}')" style="font-size:0.62rem;padding:6px 12px;background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--muted);cursor:pointer;font-family:'DM Mono',monospace;flex-shrink:0">← Ruta</button>
        <span style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.72rem;color:var(--gold);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">🔢 ${mod ? mod.label : type}</span>
      </div>`;

    const fullRenderMap = {
      conteo: ModConteo, hipotesis: ModHipotesis,
      chi: ModChi, intervalos: ModIntervalos, regresion: ModRegresion,
      supuestos: ModSupuestos,
    };
    const moduleMap = {
      nominal: ModNominal, ordinal: ModOrdinal,
      discreta: ModDiscreta, continua: ModContinua,
    };

    if (type === 'dist_tablas' || type === 'dist_calc') {
      if (area) area.innerHTML = '';
      if (formArea) formArea.innerHTML = '';
      ModDistribuciones.renderTutorial();
      ModDistribuciones.renderCalcOnly();
      if (type === 'dist_calc') ModDistribuciones.showMainTab('calc');
      if (area) area.insertAdjacentHTML('afterbegin', backBtn);
    } else if (fullRenderMap[type]) {
      if (area)     area.innerHTML = backBtn;
      if (formArea) formArea.innerHTML = '';
      fullRenderMap[type].render(formArea || area);
      if (fullRenderMap[type].init) fullRenderMap[type].init();
    } else if (moduleMap[type]) {
      if (area)     area.innerHTML = backBtn;
      if (formArea) formArea.innerHTML = '';
      moduleMap[type].renderForm();
    }
  },

  _showTeoria(type, pathId) {
    this.showScreen('analysisScreen');
    this.setNav('calc');
    document.getElementById('mpill').classList.remove('show');
    const mod = this.modules[type];
    document.getElementById('hdrSub').textContent = (mod ? mod.label : type) + ' — Teoría';
    Utils.clearResults();

    const area     = document.getElementById('tutorialArea');
    const formArea = document.getElementById('formArea');
    if (formArea) formArea.innerHTML = '';

    // Botón volver a la ruta
    if (area) area.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding:0 2px">
        <button onclick="App.showPath('${pathId}')"
                style="font-size:0.62rem;padding:6px 12px;background:transparent;border:1px solid var(--border);border-radius:8px;color:var(--muted);cursor:pointer;font-family:'DM Mono',monospace">
          ← Ruta
        </button>
        <span style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.72rem;color:var(--text)">
          📖 Teoría — ${mod ? mod.label : type}
        </span>
      </div>
      <div id="teoria-content"></div>`;

    const container = document.getElementById('teoria-content');
    if (container) {
      if (typeof Teorias !== 'undefined' && Teorias.has(type)) {
        Teorias.render(type, container);
      } else {
        container.innerHTML = '<p style="font-family:\'DM Mono\',monospace;font-size:0.7rem;color:var(--muted);padding:16px">Teoría no disponible para este módulo.</p>';
      }
    }
  },

  _showQuiz(type, pathId) {
    this.showScreen('analysisScreen');
    this.setNav('calc');
    document.getElementById('mpill').classList.remove('show');
    const mod = this.modules[type];
    document.getElementById('hdrSub').textContent = (mod ? mod.label : type) + ' — Quiz';
    Utils.clearResults();

    const area     = document.getElementById('tutorialArea');
    const formArea = document.getElementById('formArea');
    if (area)     area.innerHTML = '';
    if (formArea) formArea.innerHTML = '';

    if (formArea) {
      formArea.innerHTML = `
        <div class="card" style="margin-top:8px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
            <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:0.8rem;color:var(--text)">🎯 Quiz — ${mod ? mod.label : type}</div>
            <div style="display:flex;gap:6px">
              <button onclick="App._showTeoria('${type}','${pathId}')"
                      style="font-size:0.58rem;padding:5px 8px;background:transparent;border:1px solid var(--border);border-radius:7px;color:var(--muted);cursor:pointer;font-family:'DM Mono',monospace">
                📖 Ver teoría
              </button>
              <button onclick="App.showPath('${pathId}')"
                      style="font-size:0.58rem;padding:5px 8px;background:transparent;border:1px solid var(--border);border-radius:7px;color:var(--muted);cursor:pointer;font-family:'DM Mono',monospace">
                ← Ruta
              </button>
            </div>
          </div>
          <div id="quiz-container"></div>
        </div>`;
      Quiz.render(type, document.getElementById('quiz-container'));
    }
  },

  // ===== MODO EXAMEN =====
  activarModoExamen() {
    if (this.state.modoExamen) { this.closeDrawer(); return; }

    // Elegir duración
    const durInput = prompt('¿Duración del examen?\n\n1 → 1 hora\n2 → 1 hora 30 min\n3 → 2 horas\n4 → 2 horas 30 min\n5 → 3 horas\n6 → Personalizado (minutos)');
    if (!durInput) return;
    const durMap = { '1': 60, '2': 90, '3': 120, '4': 150, '5': 180 };
    let minutos;
    if (durMap[durInput.trim()]) {
      minutos = durMap[durInput.trim()];
    } else if (durInput.trim() === '6') {
      const custom = prompt('Ingresa la duración en minutos:');
      minutos = parseInt(custom);
      if (!minutos || minutos < 1) { alert('Duración inválida.'); return; }
    } else {
      alert('Opción inválida.'); return;
    }

    const durTexto = minutos >= 60
      ? `${Math.floor(minutos/60)}h${minutos%60 > 0 ? ' '+minutos%60+'min' : ''}`
      : `${minutos} minutos`;

    const ok = confirm(`¿Activar Modo Examen?\n\nDuración: ${durTexto}\n\n• IA desactivada.\n• Se registran salidas con hora exacta.\n• Los resultados se borran si el alumno sale.\n• Copiar/pegar bloqueado.\n• Contraseña del día para salir.\n\n¿Confirmas?`);
    if (!ok) return;

    this.state.modoExamen = true;
    this._examenSegundos = minutos * 60;
    this._examenSalidas = 0;
    this._examenLog = [];
    this.closeDrawer();

    // Bloquear copiar/pegar/seleccionar/clic derecho
    document.addEventListener('copy',        this._handleCopy);
    document.addEventListener('cut',         this._handleCopy);
    document.addEventListener('contextmenu', this._handleCopy);
    document.addEventListener('selectstart', this._handleCopy);
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    // Bloquear botón atrás
    window.history.pushState({ modoExamen: true }, '');
    window.addEventListener('popstate', this._handlePopState);

    // Detectar salida/regreso
    document.addEventListener('visibilitychange', this._handleVisibility);

    // Advertir al cerrar
    window.addEventListener('beforeunload', this._handleBeforeUnload);

    // Pantalla completa
    document.documentElement.requestFullscreen?.().catch(() => {});

    const banner = document.getElementById('examenBanner');
    if (banner) banner.style.display = 'flex';

    this._tickExamen();
    this._examenTimer = setInterval(() => this._tickExamen(), 1000);
  },

  _handleCopy(e) {
    e.preventDefault();
    return false;
  },

  _handlePopState() {
    if (App.state.modoExamen) window.history.pushState({ modoExamen: true }, '');
  },

  _handleBeforeUnload(e) {
    if (!App.state.modoExamen) return;
    e.preventDefault();
    e.returnValue = '🔒 Modo Examen activo. ¿Seguro que quieres salir?';
    return e.returnValue;
  },

  _handleVisibility() {
    if (!App.state.modoExamen) return;
    const hora = new Date().toLocaleTimeString('es-GT');
    if (document.hidden) {
      // Salió
      App._examenLog.push({ tipo: 'salida', hora });
    } else {
      // Regresó
      App._examenSalidas++;
      App._examenLog.push({ tipo: 'regreso', hora });

      // Borrar resultados
      Utils.clearResults?.();
      const tutArea = document.getElementById('tutorialArea');
      const formArea = document.getElementById('formArea');
      if (tutArea) tutArea.innerHTML = '';
      if (formArea) formArea.innerHTML = '';

      // Overlay de advertencia
      document.getElementById('examenWarning')?.remove();
      const w = document.createElement('div');
      w.id = 'examenWarning';
      w.style.cssText = 'position:fixed;inset:0;background:rgba(127,29,29,0.97);z-index:9990;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:28px;text-align:center';
      w.innerHTML = `
        <div style="font-size:3rem">⚠️</div>
        <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.15rem;color:#fff">Salida detectada</div>
        <div style="font-family:'DM Mono',monospace;font-size:0.72rem;color:rgba(255,255,255,0.7);line-height:1.8;max-width:280px">
          Saliste de la aplicación durante el examen.<br>
          <strong style="color:#f87171;font-size:0.85rem">Salida #${App._examenSalidas} — ${hora}</strong><br>
          <span style="color:rgba(255,255,255,0.45);font-size:0.65rem">Los resultados han sido borrados.</span>
        </div>
        <div style="background:rgba(0,0,0,0.35);border-radius:10px;padding:10px 18px;font-family:'DM Mono',monospace;font-size:0.6rem;color:rgba(255,255,255,0.45);line-height:1.7">
          El registro queda guardado para el profesor.
        </div>
        <button onclick="document.getElementById('examenWarning').remove();document.documentElement.requestFullscreen?.().catch(()=>{})"
          style="margin-top:6px;padding:13px 32px;background:#ef4444;border:none;border-radius:11px;color:#fff;font-family:'Syne',sans-serif;font-weight:800;font-size:0.9rem;cursor:pointer">
          🔒 Volver al examen
        </button>`;
      document.body.appendChild(w);
    }
  },

  _tickExamen() {
    this._examenSegundos--;
    const s = Math.max(0, this._examenSegundos);
    const hh = String(Math.floor(s / 3600)).padStart(2, '0');
    const mm = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    const clock = document.getElementById('examenClock');
    if (clock) clock.textContent = `${hh}:${mm}:${ss}`;
    if (s <= 0) {
      this._finalizarExamen();
      alert('⏰ Tiempo terminado. El modo examen ha finalizado.');
    }
  },

  _finalizarExamen() {
    clearInterval(this._examenTimer);
    this._examenTimer = null;
    this.state.modoExamen = false;
    document.removeEventListener('copy',        this._handleCopy);
    document.removeEventListener('cut',         this._handleCopy);
    document.removeEventListener('contextmenu', this._handleCopy);
    document.removeEventListener('selectstart', this._handleCopy);
    document.body.style.userSelect = '';
    document.body.style.webkitUserSelect = '';
    window.removeEventListener('popstate',    this._handlePopState);
    document.removeEventListener('visibilitychange', this._handleVisibility);
    window.removeEventListener('beforeunload', this._handleBeforeUnload);
    document.exitFullscreen?.().catch(() => {});
    document.getElementById('examenBanner').style.display = 'none';
    document.getElementById('examenWarning')?.remove();
  },

  desactivarModoExamen() {
    const now = new Date();
    const dd   = String(now.getDate()).padStart(2, '0');
    const mm   = String(now.getMonth() + 1).padStart(2, '0');
    const aaaa = now.getFullYear();
    const pass = `${dd}${mm}${aaaa}1905`;
    const input = prompt('Ingresa la contraseña para salir del Modo Examen:');
    if (input === null) return;
    if (input.trim() === pass) {
      const salidas = this._examenSalidas;
      const log = [...this._examenLog];
      this._finalizarExamen();
      let logTxt = '';
      if (log.length) {
        logTxt = '\n\n📋 Registro de movimientos:\n' +
          log.map((e, i) => `  ${i+1}. ${e.tipo === 'salida' ? '🔴 Salió' : '🟢 Regresó'} a las ${e.hora}`).join('\n');
      }
      alert(`✅ Modo Examen desactivado.\n\n📊 Resumen:\n• Total de salidas: ${salidas}${logTxt}\n\nLa IA está nuevamente disponible.`);
    } else {
      alert('❌ Contraseña incorrecta. El Modo Examen continúa activo.');
    }
  },

  // ===== INIT =====
  init() {
    this._loadHistory();
    if (typeof Quiz !== 'undefined') Quiz.init();
    this.renderDrawer();
    this.renderHomeGrid();
    if (typeof AI !== 'undefined') AI.updateHeaderIndicator();
    setTimeout(() => {
      const splash = document.getElementById('splash');
      if (splash) { splash.style.opacity = '0'; setTimeout(() => splash.remove(), 500); }
    }, 3500);

    // Estado inicial para poder capturar el botón atrás
    window.history.pushState({ screen: 'homeScreen' }, '');

    window.addEventListener('popstate', () => {
      if (this.state.modoExamen) {
        // En modo examen el popstate ya está manejado
        window.history.pushState({ screen: 'examen' }, '');
        return;
      }
      if (this._currentScreen === 'homeScreen') {
        // Ya estamos en el inicio — preguntar si quiere salir
        window.history.pushState({ screen: 'homeScreen' }, '');
        const salir = confirm('¿Salir de Statia Go?');
        if (salir) window.close();
      } else {
        // En cualquier otra pantalla → volver al inicio
        this.goHome();
      }
    });
  },

  // ===== ACERCA DE =====
  showAbout() {
    this.closeDrawer();
    const m = document.getElementById('aboutModal');
    if (m) m.style.display = 'flex';
  },

  closeAbout() {
    const m = document.getElementById('aboutModal');
    if (m) m.style.display = 'none';
  },

  // ===== DRAWER =====
  openDrawer() {
    document.getElementById('drawer').classList.add('open');
    document.getElementById('overlay').classList.add('open');
  },

  closeDrawer() {
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('overlay').classList.remove('open');
  },

  renderDrawer() {
    document.getElementById('drawerBody').innerHTML = `
      <div class="ms">
        <div class="ms-title">📚 Rutas de Aprendizaje</div>
        <div class="mi" onclick="App.closeDrawer();App.showPath('principiante')">
          <div class="mi-icon">🟢</div>
          <div><div class="mi-name" style="color:var(--accent)">Principiante</div><div class="mi-sub">Nominal → Ordinal → Discreta → Continua</div></div>
        </div>
        <div class="mi" onclick="App.closeDrawer();App.showPath('inferencial')">
          <div class="mi-icon">🔵</div>
          <div><div class="mi-name" style="color:var(--accent2)">Estadística Inferencial</div><div class="mi-sub">Conteo → Distribuciones → Hipótesis → IC</div></div>
        </div>
        <div class="mi" onclick="App.closeDrawer();App.showPath('ciencia')">
          <div class="mi-icon">🟡</div>
          <div><div class="mi-name" style="color:var(--gold)">Ciencia de Datos</div><div class="mi-sub">Regresión y Correlación</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">🔢 Calculadoras — Estadística Descriptiva</div>
        <div class="mi" id="mi-nominal" onclick="App.selectType('nominal')">
          <div class="mi-icon">🏷️</div>
          <div><div class="mi-name" style="color:var(--accent)">Nominal</div><div class="mi-sub">Categorías sin orden</div></div>
        </div>
        <div class="mi" id="mi-ordinal" onclick="App.selectType('ordinal')">
          <div class="mi-icon">📶</div>
          <div><div class="mi-name" style="color:var(--accent2)">Ordinal</div><div class="mi-sub">Categorías con orden</div></div>
        </div>
        <div class="mi" id="mi-discreta" onclick="App.selectType('discreta')">
          <div class="mi-icon">🔢</div>
          <div><div class="mi-name" style="color:var(--gold)">Discreta</div><div class="mi-sub">Números enteros</div></div>
        </div>
        <div class="mi" id="mi-continua" onclick="App.selectType('continua')">
          <div class="mi-icon">📏</div>
          <div><div class="mi-name" style="color:var(--warn)">Continua</div><div class="mi-sub">Mediciones, decimales</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">🔢 Calculadoras — Técnicas de Conteo</div>
        <div class="mi" id="mi-conteo" onclick="App.selectType('conteo')">
          <div class="mi-icon">🎲</div>
          <div><div class="mi-name" style="color:var(--accent3)">Técnicas de Conteo</div><div class="mi-sub">Factorial, Permutaciones, Combinaciones</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">🔢 Calculadoras — Distribuciones</div>
        <div class="mi" id="mi-dist_tablas" onclick="App.selectType('dist_tablas')">
          <div class="mi-icon">📋</div>
          <div><div class="mi-name" style="color:var(--accent2)">Tablas estadísticas</div><div class="mi-sub">Z, t, Chi², F, Binomial, Poisson</div></div>
        </div>
        <div class="mi" id="mi-dist_calc" onclick="App.selectType('dist_calc')">
          <div class="mi-icon">📐</div>
          <div><div class="mi-name" style="color:var(--accent)">Cálculo de probabilidades</div><div class="mi-sub">Calcular P(X&lt;a), P(X&gt;a), P(a&lt;X&lt;b) con IA</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">🔢 Calculadoras — Inferencia</div>
        <div class="mi" id="mi-hipotesis" onclick="App.selectType('hipotesis')">
          <div class="mi-icon">🧪</div>
          <div><div class="mi-name" style="color:var(--accent)">Pruebas de Hipótesis</div><div class="mi-sub">Z, t, ANOVA — una y dos muestras</div></div>
        </div>
        <div class="mi" id="mi-chi" onclick="App.selectType('chi')">
          <div class="mi-icon">χ²</div>
          <div><div class="mi-name" style="color:var(--accent2)">Chi-cuadrado</div><div class="mi-sub">Independencia y bondad de ajuste</div></div>
        </div>
        <div class="mi" id="mi-intervalos" onclick="App.selectType('intervalos')">
          <div class="mi-icon">📊</div>
          <div><div class="mi-name" style="color:var(--accent2)">Intervalos de Confianza</div><div class="mi-sub">IC para μ, proporción, diferencia</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">🔢 Calculadoras — Regresión</div>
        <div class="mi" id="mi-regresion" onclick="App.selectType('regresion')">
          <div class="mi-icon">📈</div>
          <div><div class="mi-name" style="color:var(--gold)">Regresión y Correlación</div><div class="mi-sub">Lineal simple, Pearson, Spearman</div></div>
        </div>
        <div class="mi" id="mi-supuestos" onclick="App.selectType('supuestos')">
          <div class="mi-icon">🔬</div>
          <div><div class="mi-name" style="color:var(--accent2)">Supuestos Estadísticos</div><div class="mi-sub">Jarque-Bera, normalidad, Durbin-Watson, VIF</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">No Paramétrica</div>
        <div class="mi off"><div class="mi-icon">🏔️</div><div><div class="mi-name">Mann-Whitney</div><div class="mi-sub">2 muestras independientes</div></div><div class="mi-badge">Pronto</div></div>
        <div class="mi off"><div class="mi-icon">🔄</div><div><div class="mi-name">Wilcoxon</div><div class="mi-sub">Muestras relacionadas</div></div><div class="mi-badge">Pronto</div></div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">App</div>
        <div class="mi" onclick="App.closeDrawer(); App.goHome()">
          <div class="mi-icon">🏠</div>
          <div><div class="mi-name">Inicio</div><div class="mi-sub">Pantalla principal</div></div>
        </div>
        <div class="mi" onclick="App.closeDrawer(); App.showHist()">
          <div class="mi-icon">🕓</div>
          <div><div class="mi-name">Historial</div><div class="mi-sub">Análisis anteriores</div></div>
        </div>
        <div class="mi" onclick="App.showAbout()">
          <div class="mi-icon">👤</div>
          <div><div class="mi-name">Acerca de</div><div class="mi-sub">Jose Rodas · Statia Go v1.0</div></div>
        </div>
        <div class="mi" onclick="App.activarModoExamen()" style="border-top:1px solid rgba(255,80,80,0.2);margin-top:4px;padding-top:8px">
          <div class="mi-icon">🔒</div>
          <div>
            <div class="mi-name" style="color:#f87171">Modo Examen</div>
            <div class="mi-sub">Bloquea la IA — 2 horas</div>
          </div>
        </div>
      </div>

      <div class="mdiv"></div>

      <!-- PREMIUM CTA -->
      <div style="padding:12px 8px 20px">
        <div onclick="App.closeDrawer(); AI.activatePremium()" style="background:linear-gradient(135deg,rgba(79,255,176,0.12),rgba(102,153,255,0.12));border:1px solid rgba(79,255,176,0.3);border-radius:12px;padding:14px 16px;cursor:pointer;text-align:center">
          <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:0.82rem;color:var(--accent);margin-bottom:3px">⭐ Activar Premium</div>
          <div style="font-family:'DM Mono',monospace;font-size:0.6rem;color:var(--muted);line-height:1.5">50 interpretaciones/día<br>sin interrupciones</div>
        </div>
        <div style="font-family:'DM Mono',monospace;font-size:0.55rem;color:var(--muted);text-align:center;margin-top:8px">Statia Go · by Jose Rodas</div>
      </div>

      <!-- FOOTER DRAWER -->
      <div style="padding:0 12px 24px;text-align:center;border-top:1px solid var(--border);margin-top:8px;padding-top:16px">
        <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:0.85rem;color:var(--text)">Jose <span style="color:var(--accent)">Rodas</span></div>
        <div style="font-family:'DM Mono',monospace;font-size:0.55rem;color:var(--muted);margin-top:2px">Desarrollador · Estadístico</div>
        <div style="display:flex;justify-content:center;gap:6px;margin-top:10px">
          <div onclick="App.showAbout()" style="background:var(--surface2);border:1px solid var(--border);border-radius:7px;padding:5px 12px;font-family:'DM Mono',monospace;font-size:0.58rem;color:var(--muted);cursor:pointer">👤 Acerca de</div>
          <div onclick="App.closeDrawer();AI.activatePremium()" style="background:rgba(79,255,176,0.1);border:1px solid rgba(79,255,176,0.25);border-radius:7px;padding:5px 12px;font-family:'DM Mono',monospace;font-size:0.58rem;color:var(--accent);cursor:pointer">⭐ Premium</div>
        </div>
        <div style="font-family:'DM Mono',monospace;font-size:0.5rem;color:rgba(255,255,255,0.12);margin-top:12px">© 2025 Statia Go · v1.0</div>
      </div>`;
  },

  // ===== HOME GRID =====
  renderHomeGrid() {
    const xpBadge = (typeof Quiz !== 'undefined') ? Quiz.badgeHtml() : '';
    document.getElementById('homeGrid').innerHTML = `

      ${xpBadge}

      <!-- RUTAS DE APRENDIZAJE -->
      <div style="grid-column:1/-1;background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:14px 16px;margin-bottom:4px">
        <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:0.8rem;color:var(--text);margin-bottom:10px">🗺️ Rutas de aprendizaje</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div onclick="App.showPath('principiante')" style="cursor:pointer;background:rgba(79,255,176,0.07);border:1px solid rgba(79,255,176,0.15);border-radius:10px;padding:10px 12px">
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.72rem;color:var(--accent);margin-bottom:3px">🟢 Principiante</div>
            <div style="font-family:'DM Mono',monospace;font-size:0.6rem;color:var(--muted)">Nominal → Ordinal → Discreta → Continua</div>
          </div>
          <div onclick="App.showPath('inferencial')" style="cursor:pointer;background:rgba(123,140,255,0.07);border:1px solid rgba(123,140,255,0.15);border-radius:10px;padding:10px 12px">
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.72rem;color:var(--accent2);margin-bottom:3px">🔵 Estadística Inferencial</div>
            <div style="font-family:'DM Mono',monospace;font-size:0.6rem;color:var(--muted)">Conteo → Distribuciones → Hipótesis → IC → Chi²</div>
          </div>
          <div onclick="App.showPath('ciencia')" style="cursor:pointer;background:rgba(255,209,102,0.07);border:1px solid rgba(255,209,102,0.15);border-radius:10px;padding:10px 12px">
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.72rem;color:var(--gold);margin-bottom:3px">🟡 Ciencia de Datos</div>
            <div style="font-family:'DM Mono',monospace;font-size:0.6rem;color:var(--muted)">Regresión → Correlación → Análisis predictivo</div>
          </div>
        </div>
      </div>
      <div class="home-card" onclick="App.selectType('nominal')">
        <div class="hc-icon">🏷️</div>
        <div class="hc-name" style="color:var(--accent)">Nominal</div>
        <div class="hc-sub">Categorías sin orden</div>
        <div class="hc-tag" style="background:rgba(79,255,176,0.1);color:var(--accent);border:1px solid rgba(79,255,176,0.2)">Cualitativa</div>
      </div>
      <div class="home-card" onclick="App.selectType('ordinal')">
        <div class="hc-icon">📶</div>
        <div class="hc-name" style="color:var(--accent2)">Ordinal</div>
        <div class="hc-sub">Categorías con orden</div>
        <div class="hc-tag" style="background:rgba(123,140,255,0.1);color:var(--accent2);border:1px solid rgba(123,140,255,0.2)">Cualitativa</div>
      </div>
      <div class="home-card" onclick="App.selectType('discreta')">
        <div class="hc-icon">🔢</div>
        <div class="hc-name" style="color:var(--gold)">Discreta</div>
        <div class="hc-sub">Números enteros</div>
        <div class="hc-tag" style="background:rgba(255,209,102,0.1);color:var(--gold);border:1px solid rgba(255,209,102,0.2)">Cuantitativa</div>
      </div>
      <div class="home-card" onclick="App.selectType('continua')">
        <div class="hc-icon">📏</div>
        <div class="hc-name" style="color:var(--warn)">Continua</div>
        <div class="hc-sub">Mediciones y decimales</div>
        <div class="hc-tag" style="background:rgba(255,170,68,0.1);color:var(--warn);border:1px solid rgba(255,170,68,0.2)">Cuantitativa</div>
      </div>
      <div class="home-card" onclick="App.selectType('conteo')">
        <div class="hc-icon">🎲</div>
        <div class="hc-name" style="color:var(--accent3)">Conteo</div>
        <div class="hc-sub">Factorial, Permut., Combinaciones</div>
        <div class="hc-tag" style="background:rgba(255,107,107,0.1);color:var(--accent3);border:1px solid rgba(255,107,107,0.2)">Conteo</div>
      </div>
      <div class="home-card" onclick="App.selectType('dist_tablas')">
        <div class="hc-icon">📋</div>
        <div class="hc-name" style="color:var(--accent2)">Tablas</div>
        <div class="hc-sub">Z, t, Chi², F, Binomial, Poisson</div>
        <div class="hc-tag" style="background:rgba(123,140,255,0.1);color:var(--accent2);border:1px solid rgba(123,140,255,0.2)">Distribuciones</div>
      </div>
      <div class="home-card" onclick="App.selectType('dist_calc')">
        <div class="hc-icon">📐</div>
        <div class="hc-name" style="color:var(--accent)">Probabilidades</div>
        <div class="hc-sub">Calcular P(X&lt;a), P(a&lt;X&lt;b)…</div>
        <div class="hc-tag" style="background:rgba(79,255,176,0.1);color:var(--accent);border:1px solid rgba(79,255,176,0.2)">Distribuciones</div>
      </div>
      <div class="home-card" onclick="App.selectType('hipotesis')">
        <div class="hc-icon">🧪</div>
        <div class="hc-name" style="color:var(--accent)">Hipótesis</div>
        <div class="hc-sub">Z, t, ANOVA — con IA</div>
        <div class="hc-tag" style="background:rgba(79,255,176,0.1);color:var(--accent);border:1px solid rgba(79,255,176,0.2)">Inferencia</div>
      </div>
      <div class="home-card" onclick="App.selectType('chi')">
        <div class="hc-icon">χ²</div>
        <div class="hc-name" style="color:var(--accent2)">Chi-cuadrado</div>
        <div class="hc-sub">Independencia y bondad de ajuste</div>
        <div class="hc-tag" style="background:rgba(123,140,255,0.1);color:var(--accent2);border:1px solid rgba(123,140,255,0.2)">Inferencia</div>
      </div>
      <div class="home-card" onclick="App.selectType('intervalos')">
        <div class="hc-icon">📊</div>
        <div class="hc-name" style="color:var(--accent2)">Intervalos IC</div>
        <div class="hc-sub">Media, proporción, diferencia</div>
        <div class="hc-tag" style="background:rgba(123,140,255,0.1);color:var(--accent2);border:1px solid rgba(123,140,255,0.2)">Inferencia</div>
      </div>
      <div class="home-card" onclick="App.selectType('regresion')">
        <div class="hc-icon">📈</div>
        <div class="hc-name" style="color:var(--gold)">Regresión</div>
        <div class="hc-sub">Lineal simple, Pearson, Spearman</div>
        <div class="hc-tag" style="background:rgba(255,209,102,0.1);color:var(--gold);border:1px solid rgba(255,209,102,0.2)">Regresión</div>
      </div>
      <div class="home-card" onclick="App.selectType('supuestos')">
        <div class="hc-icon">🔬</div>
        <div class="hc-name" style="color:var(--accent2)">Supuestos</div>
        <div class="hc-sub">Jarque-Bera, normalidad residuos</div>
        <div class="hc-tag" style="background:rgba(123,140,255,0.1);color:var(--accent2);border:1px solid rgba(123,140,255,0.2)">Regresión</div>
      </div>`;
  },

  // ===== NAVIGATION =====
  setNav(id) {
    ['home', 'calc', 'hist'].forEach(n =>
      document.getElementById('nb-' + n).classList.remove('on')
    );
    document.getElementById('nb-' + id).classList.add('on');
  },

  _currentScreen: 'homeScreen',

  showScreen(id) {
    ['homeScreen', 'analysisScreen', 'histScreen'].forEach(s =>
      document.getElementById(s).style.display = 'none'
    );
    document.getElementById(id).style.display = 'block';
    document.getElementById('scroll').scrollTop = 0;
    this._currentScreen = id;
    window.history.pushState({ screen: id }, '');
  },

  goHome() {
    this.showScreen('homeScreen');
    document.getElementById('mpill').classList.remove('show');
    document.getElementById('hdrSub').textContent = 'Estadística · Ciencia de Datos · IA';
    this.setNav('home');
  },

  goCalc() {
    if (!this.state.curType) { this.openDrawer(); return; }
    this.showScreen('analysisScreen');
    this.setNav('calc');
  },

  showHist() {
    this.showScreen('histScreen');
    this.setNav('hist');
    document.getElementById('mpill').classList.remove('show');
    document.getElementById('hdrSub').textContent = 'Historial';
    this.renderHist();
  },

  // ===== SELECT TYPE =====
  selectType(type) {
    this.state.curType = type;
    this.state.curMode = 'simple';
    this.closeDrawer();

    const mod = this.modules[type];

    // Highlight drawer item
    Object.keys(this.modules).forEach(t => {
      const el = document.getElementById('mi-' + t);
      if (el) el.className = 'mi' + (t === type ? ' ' + this.modules[t].miCls : '');
    });

    // Update pill
    document.getElementById('pillIco').textContent = mod.icon;
    document.getElementById('pillName').textContent = mod.pill || ('Variable ' + mod.label);
    document.getElementById('mpill').classList.add('show');
    document.getElementById('hdrSub').textContent = mod.label;

    this.showScreen('analysisScreen');
    this.setNav('calc');

    // Clear results
    Utils.clearResults();

    // Render tutorial and form via module
    const area = document.getElementById('tutorialArea');
    const formArea = document.getElementById('formArea');

    // Módulos con render() propio (usan área completa)
    const fullRenderMap = {
      conteo:     ModConteo,
      hipotesis:  ModHipotesis,
      chi:        ModChi,
      intervalos: ModIntervalos,
      regresion:  ModRegresion,
      supuestos:  ModSupuestos,
    };

    if (fullRenderMap[type]) {
      if (area) area.innerHTML = '';
      if (formArea) formArea.innerHTML = '';
      const container = area || formArea;
      if (container) {
        fullRenderMap[type].render(container);
        if (fullRenderMap[type].init) fullRenderMap[type].init();
      }
      return;
    }

    const moduleMap = {
      nominal: ModNominal,
      ordinal: ModOrdinal,
      discreta: ModDiscreta,
      continua: ModContinua,
      dist_tablas: ModDistribuciones,
      dist_calc:   ModDistribuciones,
    };

    const mod2 = moduleMap[type];
    if (mod2) {
      if (type === 'dist_tablas' || type === 'dist_calc') {
        mod2.renderTutorial();
        mod2.renderCalcOnly();
        if (type === 'dist_calc') mod2.showMainTab('calc');
      } else {
        mod2.renderTutorial();
        mod2.renderForm();
      }
    }
  },

  // ===== MODE =====
  setMode(mode) {
    this.state.curMode = mode;
    ['simple', 'agrupado', 'resumen'].forEach(m => {
      const el = document.getElementById('mt-' + m);
      if (el) el.className = 'mode-tab' + (m === mode ? ' on' : '');
    });
    const ap = document.getElementById('agrupadoPanel');
    const ri = document.getElementById('resumenInfo');
    if (ap) ap.style.display = (mode === 'agrupado' || mode === 'resumen') ? 'block' : 'none';
    if (ri) ri.style.display = mode === 'resumen' ? 'block' : 'none';
  },

  setChip(group, val) {
    this.state.chipState[group] = val;
    if (group === 'ampEntera') {
      const si = document.getElementById('c-ampSi');
      const no = document.getElementById('c-ampNo');
      if (si) si.className = 'chip' + (val === 'si' ? ' on' : '');
      if (no) no.className = 'chip' + (val === 'no' ? ' on' : '');
    } else if (group === 'interval') {
      const s = document.getElementById('c-semiab');
      const c = document.getElementById('c-cerrado');
      if (s) s.className = 'chip' + (val === 'semiab' ? ' on' : '');
      if (c) c.className = 'chip' + (val === 'cerrado' ? ' on' : '');
    }
  },

  // ===== HISTORIAL =====
  _loadHistory() {
    try {
      const saved = JSON.parse(localStorage.getItem('statia_history') || '[]');
      this.state.history = Array.isArray(saved) ? saved.slice(0, 50) : [];
    } catch { this.state.history = []; }
  },

  _saveHistory() {
    try {
      localStorage.setItem('statia_history', JSON.stringify(this.state.history.slice(0, 50)));
    } catch {}
  },

  addHistory(entry) {
    this.state.history.unshift({ ...entry, fecha: new Date().toLocaleDateString('es-GT') });
    this._saveHistory();
  },

  clearHistory() {
    if (!confirm('¿Borrar todo el historial?')) return;
    this.state.history = [];
    localStorage.removeItem('statia_history');
    this.renderHist();
  },

  renderHist() {
    const el = document.getElementById('histContent');
    if (!this.state.history.length) {
      el.innerHTML = `<div class="empty"><div class="ico">📭</div><p>Aún no hay cálculos guardados</p></div>`;
      return;
    }
    el.innerHTML = `
      <div style="display:flex;justify-content:flex-end;padding:0 4px 8px">
        <button onclick="App.clearHistory()" style="background:rgba(255,107,107,0.1);border:1px solid rgba(255,107,107,0.2);border-radius:8px;padding:5px 12px;font-family:'DM Mono',monospace;font-size:0.6rem;color:var(--accent3);cursor:pointer">🗑️ Limpiar historial</button>
      </div>
      ${this.state.history.map(h => `
      <div class="hi">
        <div class="hid">${h.preview}…</div>
        <div class="him">${h.type} · n=${h.n} · ${h.stat}${h.fecha ? ' · ' + h.fecha : ''}</div>
      </div>`).join('')}`;
  },
};

// ===== INIT AL CARGAR =====
document.addEventListener('DOMContentLoaded', () => App.init());
