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
    regresion:   { label: 'Regresión',           icon: '📈', col: 'var(--gold)',    tb: 'tb-reg',  miCls: 'sel-y', section: 'regresion' },
  },

  _examenSalidas: 0,

  // ===== MODO EXAMEN =====
  activarModoExamen() {
    if (this.state.modoExamen) { this.closeDrawer(); return; }
    const ok = confirm('¿Activar Modo Examen?\n\n• IA desactivada por 2 horas.\n• Pantalla completa bloqueada.\n• Se registran las salidas de la app.\n• Contraseña del día para salir.\n\n¿Confirmas?');
    if (!ok) return;
    this.state.modoExamen = true;
    this._examenSegundos = 7200;
    this._examenSalidas = 0;
    this.closeDrawer();

    // Bloquear botón atrás
    window.history.pushState({ modoExamen: true }, '');
    window.addEventListener('popstate', this._handlePopState);

    // Detectar salida/regreso a la app
    document.addEventListener('visibilitychange', this._handleVisibility);

    // Advertir al cerrar la app
    window.addEventListener('beforeunload', this._handleBeforeUnload);

    // Pantalla completa
    document.documentElement.requestFullscreen?.().catch(() => {});

    // Mostrar banner
    const banner = document.getElementById('examenBanner');
    if (banner) banner.style.display = 'flex';

    this._tickExamen();
    this._examenTimer = setInterval(() => this._tickExamen(), 1000);
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
    if (!App.state.modoExamen || document.hidden) return;
    // El estudiante regresó a la app
    App._examenSalidas++;
    document.getElementById('examenWarning')?.remove();
    const w = document.createElement('div');
    w.id = 'examenWarning';
    w.style.cssText = 'position:fixed;inset:0;background:rgba(127,29,29,0.97);z-index:9990;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:28px;text-align:center';
    w.innerHTML = `
      <div style="font-size:3rem">⚠️</div>
      <div style="font-family:'Syne',sans-serif;font-weight:800;font-size:1.15rem;color:#fff">Salida detectada</div>
      <div style="font-family:'DM Mono',monospace;font-size:0.72rem;color:rgba(255,255,255,0.7);line-height:1.8;max-width:280px">
        Saliste de la aplicación durante el examen.<br>
        <strong style="color:#f87171;font-size:0.85rem">Salida #${App._examenSalidas} registrada</strong>
      </div>
      <div style="background:rgba(0,0,0,0.35);border-radius:10px;padding:10px 18px;font-family:'DM Mono',monospace;font-size:0.6rem;color:rgba(255,255,255,0.45);line-height:1.7">
        El número de salidas queda registrado.<br>El profesor puede verlo al desactivar el examen.
      </div>
      <button onclick="document.getElementById('examenWarning').remove();document.documentElement.requestFullscreen?.().catch(()=>{})"
        style="margin-top:6px;padding:13px 32px;background:#ef4444;border:none;border-radius:11px;color:#fff;font-family:'Syne',sans-serif;font-weight:800;font-size:0.9rem;cursor:pointer">
        🔒 Volver al examen
      </button>`;
    document.body.appendChild(w);
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
    window.removeEventListener('popstate', this._handlePopState);
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
      this._finalizarExamen();
      alert(`✅ Modo Examen desactivado.\n\n📊 Resumen del examen:\n• Salidas de la app: ${salidas}\n\nLa IA está nuevamente disponible.`);
    } else {
      alert('❌ Contraseña incorrecta. El Modo Examen continúa activo.');
    }
  },

  // ===== INIT =====
  init() {
    this.renderDrawer();
    this.renderHomeGrid();
    if (typeof AI !== 'undefined') AI.updateHeaderIndicator();
    setTimeout(() => {
      const splash = document.getElementById('splash');
      if (splash) { splash.style.opacity = '0'; setTimeout(() => splash.remove(), 500); }
    }, 2000);
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
        <div class="ms-title">Estadística Descriptiva</div>
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
        <div class="ms-title">Técnicas de Conteo</div>
        <div class="mi" id="mi-conteo" onclick="App.selectType('conteo')">
          <div class="mi-icon">🎲</div>
          <div><div class="mi-name" style="color:var(--accent3)">Técnicas de Conteo</div><div class="mi-sub">Factorial, Permutaciones, Combinaciones</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">Distribuciones de Probabilidad</div>
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
        <div class="ms-title">Pruebas de Hipótesis</div>
        <div class="mi" id="mi-hipotesis" onclick="App.selectType('hipotesis')">
          <div class="mi-icon">🧪</div>
          <div><div class="mi-name" style="color:var(--accent)">Pruebas de Hipótesis</div><div class="mi-sub">Z, t, ANOVA — una y dos muestras</div></div>
        </div>
        <div class="mi" id="mi-chi" onclick="App.selectType('chi')">
          <div class="mi-icon">χ²</div>
          <div><div class="mi-name" style="color:var(--accent2)">Chi-cuadrado</div><div class="mi-sub">Independencia y bondad de ajuste</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">Regresión y Correlación</div>
        <div class="mi" id="mi-regresion" onclick="App.selectType('regresion')">
          <div class="mi-icon">📈</div>
          <div><div class="mi-name" style="color:var(--gold)">Regresión y Correlación</div><div class="mi-sub">Lineal simple, Pearson, Spearman</div></div>
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
    document.getElementById('homeGrid').innerHTML = `
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
      <div class="home-card" onclick="App.selectType('regresion')">
        <div class="hc-icon">📈</div>
        <div class="hc-name" style="color:var(--gold)">Regresión</div>
        <div class="hc-sub">Lineal simple, Pearson, Spearman</div>
        <div class="hc-tag" style="background:rgba(255,209,102,0.1);color:var(--gold);border:1px solid rgba(255,209,102,0.2)">Regresión</div>
      </div>`;
  },

  // ===== NAVIGATION =====
  setNav(id) {
    ['home', 'calc', 'hist'].forEach(n =>
      document.getElementById('nb-' + n).classList.remove('on')
    );
    document.getElementById('nb-' + id).classList.add('on');
  },

  showScreen(id) {
    ['homeScreen', 'analysisScreen', 'histScreen'].forEach(s =>
      document.getElementById(s).style.display = 'none'
    );
    document.getElementById(id).style.display = 'block';
    document.getElementById('scroll').scrollTop = 0;
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
      conteo:    ModConteo,
      hipotesis: ModHipotesis,
      chi:       ModChi,
      regresion: ModRegresion,
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
      if (type === 'dist_tablas') {
        mod2.renderTablasOnly();
      } else if (type === 'dist_calc') {
        mod2.renderCalcOnly();
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
  addHistory(entry) {
    this.state.history.unshift(entry);
  },

  renderHist() {
    const el = document.getElementById('histContent');
    if (!this.state.history.length) {
      el.innerHTML = `<div class="empty"><div class="ico">📭</div><p>Aún no hay cálculos guardados</p></div>`;
      return;
    }
    el.innerHTML = this.state.history.map(h => `
      <div class="hi">
        <div class="hid">${h.preview}…</div>
        <div class="him">${h.type} · n=${h.n} · ${h.stat}</div>
      </div>`).join('');
  },
};

// ===== INIT AL CARGAR =====
document.addEventListener('DOMContentLoaded', () => App.init());
