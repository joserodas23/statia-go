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
    distribuciones: { label: 'Distribuciones', icon: '📐', col: 'var(--accent2)', tb: 'tb-dist', miCls: 'sel-b', section: 'distribuciones' },
    // Futuros módulos se registran aquí
  },

  // ===== MODO EXAMEN =====
  activarModoExamen() {
    if (this.state.modoExamen) { this.closeDrawer(); return; }
    const ok = confirm('¿Activar Modo Examen?\n\n• La interpretación con IA quedará desactivada.\n• Se iniciará un contador de 2 horas.\n• Para salir necesitarás la contraseña del día.\n\n¿Confirmas?');
    if (!ok) return;
    this.state.modoExamen = true;
    this._examenSegundos = 7200;
    this.closeDrawer();

    // Bloquear botón atrás del navegador
    window.history.pushState({ modoExamen: true }, '');
    window.addEventListener('popstate', this._handlePopState);

    // Mostrar banner
    const banner = document.getElementById('examenBanner');
    if (banner) banner.style.display = 'flex';

    // Iniciar contador
    this._tickExamen();
    this._examenTimer = setInterval(() => this._tickExamen(), 1000);
  },

  _handlePopState() {
    if (App.state.modoExamen) window.history.pushState({ modoExamen: true }, '');
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
      clearInterval(this._examenTimer);
      this._examenTimer = null;
      this.state.modoExamen = false;
      window.removeEventListener('popstate', this._handlePopState);
      const banner = document.getElementById('examenBanner');
      if (banner) banner.style.display = 'none';
      alert('⏰ Tiempo terminado.\n\nEl modo examen ha finalizado. La interpretación con IA está nuevamente disponible.');
    }
  },

  desactivarModoExamen() {
    const now = new Date();
    const dd   = String(now.getDate()).padStart(2, '0');
    const mm   = String(now.getMonth() + 1).padStart(2, '0');
    const aaaa = now.getFullYear();
    const pass = `${dd}${mm}${aaaa}1905`;

    const input = prompt('Ingresa la contraseña para salir del Modo Examen:');
    if (input === null) return; // canceló
    if (input.trim() === pass) {
      clearInterval(this._examenTimer);
      this._examenTimer = null;
      this.state.modoExamen = false;
      window.removeEventListener('popstate', this._handlePopState);
      const banner = document.getElementById('examenBanner');
      if (banner) banner.style.display = 'none';
      alert('✅ Modo Examen desactivado. La interpretación con IA está nuevamente disponible.');
    } else {
      alert('❌ Contraseña incorrecta. El Modo Examen continúa activo.');
    }
  },

  // ===== INIT =====
  init() {
    this.renderDrawer();
    this.renderHomeGrid();
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
        <div class="ms-title">Distribuciones</div>
        <div class="mi" id="mi-distribuciones" onclick="App.selectType('distribuciones')">
          <div class="mi-icon">📐</div>
          <div><div class="mi-name" style="color:var(--accent2)">Distribuciones</div><div class="mi-sub">Normal, t, Chi², F, Binomial, Poisson</div></div>
        </div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">Pruebas de Hipótesis</div>
        <div class="mi off"><div class="mi-icon">🧪</div><div><div class="mi-name">Prueba t</div><div class="mi-sub">Una y dos muestras</div></div><div class="mi-badge">Pronto</div></div>
        <div class="mi off"><div class="mi-icon">χ²</div><div><div class="mi-name">Chi-cuadrado</div><div class="mi-sub">Independencia</div></div><div class="mi-badge">Pronto</div></div>
        <div class="mi off"><div class="mi-icon">🔬</div><div><div class="mi-name">ANOVA</div><div class="mi-sub">Comparación de grupos</div></div><div class="mi-badge">Pronto</div></div>
      </div>

      <div class="mdiv"></div>

      <div class="ms">
        <div class="ms-title">Regresión y Correlación</div>
        <div class="mi off"><div class="mi-icon">📈</div><div><div class="mi-name">Regresión lineal</div><div class="mi-sub">Simple</div></div><div class="mi-badge">Pronto</div></div>
        <div class="mi off"><div class="mi-icon">🔗</div><div><div class="mi-name">Correlación</div><div class="mi-sub">Pearson y Spearman</div></div><div class="mi-badge">Pronto</div></div>
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
        <div class="mi" onclick="App.activarModoExamen()" style="border-top:1px solid rgba(255,80,80,0.2);margin-top:4px;padding-top:8px">
          <div class="mi-icon">🔒</div>
          <div>
            <div class="mi-name" style="color:#f87171">Modo Examen</div>
            <div class="mi-sub">Bloquea la IA — 2 horas</div>
          </div>
        </div>
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
    document.getElementById('hdrSub').textContent = 'Estadística con IA';
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
    document.getElementById('pillName').textContent = 'Variable ' + mod.label;
    document.getElementById('mpill').classList.add('show');
    document.getElementById('hdrSub').textContent = mod.label;

    this.showScreen('analysisScreen');
    this.setNav('calc');

    // Clear results
    Utils.clearResults();

    // Render tutorial and form via module
    const moduleMap = {
      nominal: ModNominal,
      ordinal: ModOrdinal,
      discreta: ModDiscreta,
      continua: ModContinua,
      distribuciones: ModDistribuciones,
    };

    const mod2 = moduleMap[type];
    if (mod2) {
      mod2.renderTutorial();
      mod2.renderForm();
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
