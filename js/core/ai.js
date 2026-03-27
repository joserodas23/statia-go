/* ============================================
   STATIA GO — js/core/ai.js
   Conexión con Claude API e interpretación IA
   by Jose Rodas
   ============================================ */

const AI = {

  MODEL: 'claude-sonnet-4-20250514',
  MAX_TOKENS: 2500,

  // ===== SISTEMA DE LÍMITES =====

  _getDeviceId() {
    let id = localStorage.getItem('statia_device_id');
    if (!id) {
      const rand = () => Math.random().toString(36).slice(2, 6).toUpperCase();
      id = `SGO-${rand()}${rand()}`;
      localStorage.setItem('statia_device_id', id);
    }
    return id;
  },

  _isPremium() {
    const code = localStorage.getItem('statia_premium_code');
    if (!code) return false;
    const deviceId = this._getDeviceId();
    return code === deviceId + '1905';
  },

  _getLimit() {
    return this._isPremium() ? 50 : 5;
  },

  _getUsage() {
    const today = new Date().toISOString().split('T')[0];
    try {
      const stored = JSON.parse(localStorage.getItem('statia_usage') || '{}');
      if (stored.date !== today) return { date: today, count: 0 };
      return stored;
    } catch { return { date: today, count: 0 }; }
  },

  _saveUsage(usage) {
    localStorage.setItem('statia_usage', JSON.stringify(usage));
  },

  _increment() {
    const usage = this._getUsage();
    usage.count = (usage.count || 0) + 1;
    this._saveUsage(usage);
    this.updateHeaderIndicator();
  },

  updateHeaderIndicator() {
    const el = document.getElementById('aiIndicator');
    if (!el) return;
    const usage = this._getUsage();
    const limit = this._getLimit();
    const used = usage.count || 0;
    const remaining = Math.max(0, limit - used);
    const isPremium = this._isPremium();
    el.style.display = 'block';
    el.textContent = `IA: ${used}/${limit} hoy`;
    el.className = 'ai-ind';
    if (isPremium) el.classList.add('premium');
    else if (remaining <= 2) el.classList.add('warn');
  },

  showUsageInfo() {
    const usage = this._getUsage();
    const limit = this._getLimit();
    const used = usage.count || 0;
    const isPremium = this._isPremium();
    const type = isPremium ? 'Premium' : 'Gratuita';
    alert(`📊 Uso de IA — Statia Go\n\nCuenta: ${type}\nUsadas hoy: ${used} / ${limit}\nDisponibles: ${Math.max(0, limit - used)}\n\nSe renueva automáticamente a medianoche.\n\n─ by Jose Rodas`);
  },

  activatePremium() {
    const deviceId = this._getDeviceId();
    const code = prompt(`Ingresa tu código de activación Premium:\n\n(Tu ID de dispositivo: ${deviceId})`);
    if (!code) return;
    if (code.trim() === deviceId + '1905') {
      localStorage.setItem('statia_premium_code', code.trim());
      this.updateHeaderIndicator();
      alert('🎉 ¡Cuenta Premium activada!\nAhora tienes 50 interpretaciones diarias.\n\n─ Statia Go by Jose Rodas');
    } else {
      alert('❌ Código incorrecto. Verifica el código que te envió Jose Rodas.');
    }
  },

  _limitCard(blockId) {
    const el = document.getElementById(blockId);
    if (!el) return;
    const isPremium = this._isPremium();
    const deviceId = this._getDeviceId();

    if (isPremium) {
      el.innerHTML = `
        <div class="ai-block">
          <div class="upgrade-card">
            <div class="uc-limit">Límite diario alcanzado</div>
            <div class="uc-sub">Has usado tus 50 interpretaciones Premium de hoy</div>
            <div class="uc-renew">Se renueva automáticamente mañana a medianoche — by Jose Rodas</div>
          </div>
        </div>`;
    } else {
      el.innerHTML = `
        <div class="ai-block">
          <div class="upgrade-card">
            <div class="uc-limit">Alcanzaste tu límite diario gratuito</div>
            <div class="uc-sub">Has usado tus 5 interpretaciones de hoy</div>
            <ul class="uc-perks">
              <li>50 interpretaciones diarias</li>
              <li>Acceso completo a todos los módulos</li>
              <li>Sin interrupciones</li>
            </ul>
            <button class="uc-btn-main" onclick="AI._showPaymentInfo()">Quiero ser Premium</button>
            <div class="uc-pay" id="ucPayBlock">
              <div class="uc-pay-title">Instrucciones de pago</div>
              <div class="uc-pay-text">
                1. Paga por <strong>Yape</strong> a <strong>Jose Rodas</strong><br>
                2. Envíame tu <strong>ID de dispositivo</strong> por WhatsApp<br>
                3. Te envío tu código de activación en minutos
              </div>
              <div class="uc-device" id="ucDeviceId" onclick="AI._copyDeviceId()">${deviceId}</div>
              <div class="uc-copied" id="ucCopied">¡Copiado!</div>
            </div>
            <button class="uc-btn-sec" onclick="AI._showDeviceId()">Ver mi ID de dispositivo</button>
            <button class="uc-btn-sec" style="margin-top:4px" onclick="AI.activatePremium()">Ingresar código de activación</button>
            <div class="uc-renew">Tu límite se renueva mañana a medianoche</div>
          </div>
        </div>`;
    }
  },

  _showPaymentInfo() {
    const pay = document.getElementById('ucPayBlock');
    if (pay) { pay.style.display = pay.style.display === 'block' ? 'none' : 'block'; }
  },

  _showDeviceId() {
    const deviceId = this._getDeviceId();
    prompt('Tu ID de dispositivo (cópialo y envíalo a Jose Rodas por WhatsApp):', deviceId);
  },

  _copyDeviceId() {
    const deviceId = this._getDeviceId();
    navigator.clipboard?.writeText(deviceId).catch(() => {});
    const copied = document.getElementById('ucCopied');
    if (copied) { copied.style.display = 'block'; setTimeout(() => { copied.style.display = 'none'; }, 2000); }
  },

  async call(prompt) {
    const isLocal = ['localhost', '127.0.0.1', ''].includes(window.location.hostname);

    if (isLocal) {
      // Desarrollo local: llama directo a Gemini con key de config.js
      const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${CONFIG.GEMINI_KEY}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { maxOutputTokens: 2500 }
        })
      });
      const d = await res.json();
      return d.candidates?.[0]?.content?.parts?.[0]?.text || 'No se pudo generar la interpretación.';
    } else {
      // Producción (Vercel): key oculta en el servidor
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || `Error del servidor: ${res.status}`);
      }
      const d = await res.json();
      return d.text || 'No se pudo generar la interpretación.';
    }
  },

  // ===== RENDERIZAR RESPUESTA EN DOM =====
  async render(prompt, blockId) {
    const el = document.getElementById(blockId);

    // Bloqueo por Modo Examen
    if (typeof App !== 'undefined' && App.state?.modoExamen) {
      if (el) el.innerHTML = `
        <div class="ai-block">
          <div class="ai-tag" style="color:#f87171"><div class="ai-dot" style="background:#f87171"></div> 🔒 IA desactivada — Modo Examen</div>
          <div class="ai-text" style="color:var(--muted)">La interpretación con IA está desactivada durante el modo examen. Analiza los resultados estadísticos con tus propios conocimientos: interpreta la media, mediana, dispersión, forma de la distribución y valores atípicos según lo aprendido en clase.</div>
        </div>`;
      return;
    }

    // Verificar límite de uso
    const usage = this._getUsage();
    const limit = this._getLimit();
    if ((usage.count || 0) >= limit) {
      this._limitCard(blockId);
      return;
    }

    try {
      const text = await this.call(prompt);
      if (el) {
        el.innerHTML = `
          <div class="ai-tag"><div class="ai-dot"></div> Interpretación con IA</div>
          <div class="ai-text">${this.format(text)}</div>
          <div style="margin-top:10px;padding-top:8px;border-top:1px solid var(--border);font-family:'DM Mono',monospace;font-size:0.55rem;color:rgba(255,255,255,0.18);text-align:right">Interpretado por StatIA · Statia Go by Jose Rodas</div>`;
        Object.values(Chart.instances || {}).forEach(c => c.resize());
      }
      this._increment();
    } catch (e) {
      if (el) el.innerHTML = `<div class="err">Error IA: ${e.message}</div>`;
    }
  },

  // ===== FORMATEAR TEXTO =====
  format(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/###\s*(.*)/g, '<div class="ai-section-title">$1</div>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  },

  // ===== BLOQUE LOADING =====
  loadingBlock(id) {
    return `<div class="ai-block" id="${id}">
      <div class="ai-tag"><div class="ai-dot"></div> IA analizando...</div>
      <div class="ld"><span></span><span></span><span></span></div>
    </div>`;
  },

  // ===== PROMPTS POR MÓDULO =====

  // ----- NOMINAL -----
  promptNominal(varName, varDesc, n, moda, keys, freq) {
    const pcts = keys.map(k => `${k}: fi=${freq[k]}, ${((freq[k] / n) * 100).toFixed(1)}%`).join(' | ');
    return `Eres StatIA, asistente estadístico educativo para universidades de Perú y Ecuador.
Realiza una interpretación completa y académica de esta variable cualitativa NOMINAL.

Variable: "${varName}"${varDesc ? ` — ${varDesc}` : ''}
N total = ${n} observaciones
Categorías: ${pcts}
Moda: ${moda.join(', ')}

Responde en español con estas secciones. Sé detallado y usa los valores reales en tu interpretación:

**1. Descripción general del conjunto de datos**
Describe qué tipo de variable es, cuántas categorías tiene y qué representa cada una en el contexto.

**2. Análisis de la moda**
Explica por qué "${moda[0]}" es la categoría modal con fi=${freq[moda[0]]} (${((freq[moda[0]] / n) * 100).toFixed(1)}%). ¿Qué significa que esta categoría predomine? ¿Es una diferencia marcada respecto a las demás?

**3. Distribución y concentración**
Analiza si la distribución es equilibrada o hay concentración en pocas categorías. Compara las proporciones entre categorías. Menciona cuáles son las categorías minoritarias y qué representan.

**4. Análisis de proporciones**
Interpreta las frecuencias relativas. Si alguna categoría supera el 50%, menciona que es mayoritaria. Si ninguna supera el 33%, la distribución es relativamente uniforme.

**5. Implicaciones para la investigación**
¿Qué conclusiones estadísticas se pueden extraer? ¿Qué decisiones o recomendaciones se derivan de esta distribución? ¿Hay algún sesgo de selección o representatividad que considerar?

**6. Recomendaciones metodológicas**
¿Qué análisis complementarios se recomiendan? (tablas cruzadas, prueba Chi-cuadrado de bondad de ajuste, etc.)

Mínimo 300 palabras. Usa **negritas** para valores numéricos clave. Sin saludos ni despedidas.`;
  },

  // ----- ORDINAL -----
  promptOrdinal(varName, varDesc, n, moda, mediana, keys, freq) {
    const pcts = keys.map(k => `${k}: fi=${freq[k] || 0}, ${(((freq[k] || 0) / n) * 100).toFixed(1)}%`).join(' | ');
    return `Eres StatIA, asistente estadístico educativo universitario.
Realiza una interpretación completa de esta variable cualitativa ORDINAL.

Variable: "${varName}"${varDesc ? ` — ${varDesc}` : ''}
Escala ordenada de menor a mayor: ${keys.join(' < ')}
N = ${n} observaciones
Frecuencias: ${pcts}
Moda: ${moda.join(', ')} | Mediana: ${mediana}

Responde en español con estas secciones detalladas:

**1. Descripción de la escala**
Describe la naturaleza ordinal de la variable, los niveles de la escala y qué representa cada categoría.

**2. Tendencia central**
Interpreta la moda (${moda[0]}) y la mediana (${mediana}). ¿Coinciden? Si son diferentes, ¿qué nos dice eso sobre la distribución? ¿Hacia qué extremo de la escala tiende la muestra?

**3. Distribución por categorías**
Analiza detalladamente cada categoría. ¿Hay polarización (concentración en extremos)? ¿O centralización (concentración en categorías medias)? Describe el patrón de respuesta.

**4. Frecuencias acumuladas**
Interpreta las frecuencias acumuladas. ¿Qué porcentaje de la muestra está en la categoría mediana o por debajo? ¿Cuántos están en las categorías favorables vs desfavorables?

**5. Sesgo de la distribución**
¿La distribución está sesgada hacia valores altos (positivo) o bajos (negativo)? ¿O es aproximadamente simétrica? Justifica con los datos.

**6. Implicaciones prácticas**
¿Qué conclusiones se derivan para la investigación, la toma de decisiones o la intervención? Si es una encuesta de satisfacción, ¿qué se recomienda?

**7. Recomendaciones metodológicas**
¿Qué pruebas no paramétricas u otros análisis complementarios se recomiendan con este tipo de variable?

Mínimo 320 palabras. **negritas** para valores clave. Sin saludos.`;
  },

  // ----- DISCRETA SIMPLE -----
  promptDiscreta(varName, varDesc, s, medianaDesc) {
    const f2 = v => Utils.fmt(v, 2);
    const difMedMed = f2(Math.abs(s.mean - s.median));
    const tukeyInf = f2(s.q1 - 1.5 * s.iqr);
    const tukeySup = f2(s.q3 + 1.5 * s.iqr);
    const g1tipo = Math.abs(s.g1) < 0.1 ? 'distribución simétrica' : s.g1 > 0 ? 'sesgo positivo (cola derecha)' : 'sesgo negativo (cola izquierda)';
    const g2tipo = Math.abs(s.g2) < 0.5 ? 'mesocúrtica (similar a la normal)' : s.g2 > 0 ? 'leptocúrtica (puntiaguda, colas pesadas)' : 'platicúrtica (plana, colas ligeras)';
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta esta variable cuantitativa DISCRETA usando exactamente los valores proporcionados.

Variable: "${varName}"${varDesc ? ` — ${varDesc}` : ''}

DATOS CALCULADOS:
n = ${s.n} (${s.n % 2 === 0 ? 'par' : 'impar'}) | Mín = ${f2(s.min)} | Máx = ${f2(s.max)} | Rango = ${f2(s.range)}
Media (x̄) = ${f2(s.mean)} | Mediana = ${f2(s.median)} (${medianaDesc}) | Moda = ${s.moda.join(', ')}
Diferencia |media − mediana| = ${difMedMed}
S = ${f2(s.sd)} | S² = ${f2(s.variance)} | CV = ${f2(s.cv)}%
Q1 = ${f2(s.q1)} | Q3 = ${f2(s.q3)} | IQR = ${f2(s.iqr)}
Límites de Tukey: inferior = ${tukeyInf} | superior = ${tukeySup}
Asimetría de Fisher g1 = ${f2(s.g1)} → ${g1tipo}
Curtosis de Fisher g2 = ${f2(s.g2)} → ${g2tipo}

Responde en español con estas 6 secciones. Cita los valores exactos de arriba en cada sección:

### Descripción general
Indica que se analizan n = ${s.n} observaciones de la variable "${varName}". Describe el rango de valores observados: de ${f2(s.min)} a ${f2(s.max)}, con un rango total de ${f2(s.range)}.

### Tendencia central
Compara media (${f2(s.mean)}) y mediana (${f2(s.median)}). La diferencia exacta es ${difMedMed}. Si la diferencia es pequeña → distribución aproximadamente simétrica. Si media > mediana → sesgo positivo. Si media < mediana → sesgo negativo. Menciona también la moda (${s.moda.join(', ')}).

### Dispersión
Explica que los datos varían ±${f2(s.sd)} respecto a la media. Interpreta CV = ${f2(s.cv)}% con este criterio: CV < 15% → homogéneo, 15–30% → moderadamente variable, > 30% → heterogéneo.

### Cuartiles
El 50% central de los datos se encuentra entre Q1 = ${f2(s.q1)} y Q3 = ${f2(s.q3)}, con IQR = ${f2(s.iqr)}. Interpreta qué tan concentrado o disperso es ese intervalo respecto al rango total.

### Outliers
Los límites de Tukey son: inferior = ${tukeyInf} y superior = ${tukeySup}. Compara con el mínimo real (${f2(s.min)}) y el máximo real (${f2(s.max)}). Indica si hay o no valores atípicos.

### Deformación
Interpreta g1 = ${f2(s.g1)}: criterio |g1| < 0.1 → simétrica; g1 > 0 → sesgo positivo; g1 < 0 → sesgo negativo. El resultado es: ${g1tipo}.
Interpreta g2 = ${f2(s.g2)}: criterio |g2| < 0.5 → mesocúrtica; g2 > 0 → leptocúrtica; g2 < 0 → platicúrtica. El resultado es: ${g2tipo}.
Concluye si la distribución se aproxima a la normalidad.

Mínimo 300 palabras. Usa máximo 2 decimales en todos los valores numéricos. **negritas** para valores. Sin saludos.`;
  },

  // ----- DISCRETA AGRUPADA -----
  promptDiscretaAgrupada(varName, varDesc, g) {
    const claseModal = g.classes.reduce((a, b) => a.fi > b.fi ? a : b);
    const clase50 = g.classes.find(c => c.Hi >= 0.5) || g.classes[g.classes.length - 1];
    const clase75 = g.classes.find(c => c.Hi >= 0.75) || g.classes[g.classes.length - 1];
    const f2 = v => Utils.fmt(v, 2);
    const difMedMed = f2(Math.abs(g.mean - g.median));
    const liMin = g.classes[0].li;
    const lsMax = g.classes[g.classes.length - 1].ls;
    const g1tipo = Math.abs(g.g1) < 0.1 ? 'distribución simétrica' : g.g1 > 0 ? 'sesgo positivo (cola derecha)' : 'sesgo negativo (cola izquierda)';
    const g2tipo = Math.abs(g.g2) < 0.5 ? 'mesocúrtica (similar a la normal)' : g.g2 > 0 ? 'leptocúrtica (puntiaguda, colas pesadas)' : 'platicúrtica (plana, colas ligeras)';
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta esta variable cuantitativa DISCRETA con datos AGRUPADOS usando exactamente los valores proporcionados.

Variable: "${varName}"${varDesc ? ` — ${varDesc}` : ''}

DATOS CALCULADOS:
n = ${g.n} | k = ${g.k} clases | Amplitud A = ${f2(g.amp)} | Rango cubierto: ${liMin} a ${lsMax}
Media = ${f2(g.mean)} | Mediana = ${f2(g.median)} | Moda de Czuber = ${f2(g.mode)}
Diferencia |media − mediana| = ${difMedMed}
S = ${f2(g.sd)} | CV = ${f2(g.cv)}%
Clase modal: [${claseModal.li}–${claseModal.ls}) con fi = ${claseModal.fi} (${((claseModal.fi / g.n) * 100).toFixed(1)}%)
50% acumulado alcanzado en clase [${clase50.li}–${clase50.ls}) | 75% en clase [${clase75.li}–${clase75.ls})
Asimetría de Fisher g1 = ${f2(g.g1)} → ${g1tipo}
Curtosis de Fisher g2 = ${f2(g.g2)} → ${g2tipo}

TABLA DE CLASES:
${g.classes.map(c => `[${c.li}–${c.ls}): fi=${c.fi}, hi=${c.hi}, Hi=${c.Hi}`).join('\n')}

Responde en español con estas 6 secciones. Cita los valores exactos de arriba en cada sección:

### Descripción general
Indica que se agruparon n = ${g.n} observaciones de "${varName}" en k = ${g.k} clases con amplitud A = ${f2(g.amp)} (regla de Sturges). Los valores van de ${liMin} a ${lsMax}.

### Tendencia central
Compara media (${f2(g.mean)}), mediana (${f2(g.median)}) y moda de Czuber (${f2(g.mode)}). La diferencia exacta |media − mediana| = ${difMedMed}. Si es pequeña → distribución aproximadamente simétrica. Si media > mediana → sesgo positivo. Si media < mediana → sesgo negativo.

### Dispersión
Los datos varían ±${f2(g.sd)} respecto a la media. Interpreta CV = ${f2(g.cv)}%: CV < 15% → homogéneo, 15–30% → moderadamente variable, > 30% → heterogéneo.

### Cuartiles — distribución acumulada
La clase modal concentra el ${((claseModal.fi / g.n) * 100).toFixed(1)}% de los datos en [${claseModal.li}–${claseModal.ls}). El 50% acumulado se alcanza en la clase [${clase50.li}–${clase50.ls}) y el 75% en [${clase75.li}–${clase75.ls}). Interpreta la concentración de las observaciones.

### Outliers — valores extremos de la tabla
Los datos se distribuyen entre ${liMin} (límite inferior de la primera clase) y ${lsMax} (límite superior de la última clase). Analiza si las clases extremas tienen frecuencias bajas que sugieran valores alejados del centro de la distribución.

### Deformación
Interpreta g1 = ${f2(g.g1)}: criterio |g1| < 0.1 → simétrica; g1 > 0 → sesgo positivo; g1 < 0 → sesgo negativo. Resultado: ${g1tipo}.
Interpreta g2 = ${f2(g.g2)}: criterio |g2| < 0.5 → mesocúrtica; g2 > 0 → leptocúrtica; g2 < 0 → platicúrtica. Resultado: ${g2tipo}.
Concluye si el histograma se aproxima a la distribución normal.

Mínimo 300 palabras. Usa máximo 2 decimales en todos los valores numéricos. **negritas** para valores. Sin saludos.`;
  },

  // ----- CONTINUA SIMPLE -----
  promptContinua(varName, varDesc, s, medianaDesc) {
    const f2 = v => Utils.fmt(v, 2);
    const difMedMed = f2(Math.abs(s.mean - s.median));
    const tukeyInf = f2(s.q1 - 1.5 * s.iqr);
    const tukeySup = f2(s.q3 + 1.5 * s.iqr);
    const g1tipo = Math.abs(s.g1) < 0.1 ? 'distribución simétrica' : s.g1 > 0 ? 'sesgo positivo (cola derecha)' : 'sesgo negativo (cola izquierda)';
    const g2tipo = Math.abs(s.g2) < 0.5 ? 'mesocúrtica (similar a la normal)' : s.g2 > 0 ? 'leptocúrtica (puntiaguda, colas pesadas)' : 'platicúrtica (plana, colas ligeras)';
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta esta variable cuantitativa CONTINUA usando exactamente los valores proporcionados.

Variable: "${varName}"${varDesc ? ` — ${varDesc}` : ''}

DATOS CALCULADOS:
n = ${s.n} (${s.n % 2 === 0 ? 'par' : 'impar'}) | Mín = ${f2(s.min)} | Máx = ${f2(s.max)} | Rango = ${f2(s.range)}
Media (x̄) = ${f2(s.mean)} | Mediana = ${f2(s.median)} (${medianaDesc}) | Moda = ${s.moda.length > 3 ? 'múltiple' : s.moda.map(v => f2(v)).join(', ')}
Diferencia |media − mediana| = ${difMedMed}
S = ${f2(s.sd)} | S² = ${f2(s.variance)} | CV = ${f2(s.cv)}%
Q1 = ${f2(s.q1)} | Q3 = ${f2(s.q3)} | IQR = ${f2(s.iqr)}
Límites de Tukey: inferior = ${tukeyInf} | superior = ${tukeySup}
Asimetría de Fisher g1 = ${f2(s.g1)} → ${g1tipo}
Curtosis de Fisher g2 = ${f2(s.g2)} → ${g2tipo}

Responde en español con estas 6 secciones. Cita los valores exactos de arriba en cada sección:

### Descripción general
Indica que se analizan n = ${s.n} observaciones de la variable "${varName}". Describe el rango de valores observados: de ${f2(s.min)} a ${f2(s.max)}, con un rango total de ${f2(s.range)}.

### Tendencia central
Compara media (${f2(s.mean)}) y mediana (${f2(s.median)}). La diferencia exacta es ${difMedMed}. Si la diferencia es pequeña → distribución aproximadamente simétrica. Si media > mediana → sesgo positivo. Si media < mediana → sesgo negativo. Menciona también la moda.

### Dispersión
Explica que los datos varían ±${f2(s.sd)} respecto a la media. Interpreta CV = ${f2(s.cv)}% con este criterio: CV < 15% → homogéneo, 15–30% → moderadamente variable, > 30% → heterogéneo.

### Cuartiles
El 50% central de los datos se encuentra entre Q1 = ${f2(s.q1)} y Q3 = ${f2(s.q3)}, con IQR = ${f2(s.iqr)}. Interpreta qué tan concentrado o disperso es ese intervalo respecto al rango total.

### Outliers
Los límites de Tukey son: inferior = ${tukeyInf} y superior = ${tukeySup}. Compara con el mínimo real (${f2(s.min)}) y el máximo real (${f2(s.max)}). Indica si hay o no valores atípicos.

### Deformación
Interpreta g1 = ${f2(s.g1)}: criterio |g1| < 0.1 → simétrica; g1 > 0 → sesgo positivo; g1 < 0 → sesgo negativo. El resultado es: ${g1tipo}.
Interpreta g2 = ${f2(s.g2)}: criterio |g2| < 0.5 → mesocúrtica; g2 > 0 → leptocúrtica; g2 < 0 → platicúrtica. El resultado es: ${g2tipo}.
Concluye si la distribución se aproxima a la normalidad.

Mínimo 300 palabras. Usa máximo 2 decimales en todos los valores numéricos. **negritas** para valores. Sin saludos.`;
  },

  // ----- CONTINUA AGRUPADA -----
  promptContinuaAgrupada(varName, varDesc, g) {
    const intS = g.intType === 'cerrado' ? ']' : ')';
    const claseModal = g.classes.reduce((a, b) => a.fi > b.fi ? a : b);
    const clase50 = g.classes.find(c => c.Hi >= 0.5) || g.classes[g.classes.length - 1];
    const clase75 = g.classes.find(c => c.Hi >= 0.75) || g.classes[g.classes.length - 1];
    const f2 = v => Utils.fmt(v, 2);
    const difMedMed = f2(Math.abs(g.mean - g.median));
    const liMin = g.classes[0].li;
    const lsMax = g.classes[g.classes.length - 1].ls;
    const g1tipo = Math.abs(g.g1) < 0.1 ? 'distribución simétrica' : g.g1 > 0 ? 'sesgo positivo (cola derecha)' : 'sesgo negativo (cola izquierda)';
    const g2tipo = Math.abs(g.g2) < 0.5 ? 'mesocúrtica (similar a la normal)' : g.g2 > 0 ? 'leptocúrtica (puntiaguda, colas pesadas)' : 'platicúrtica (plana, colas ligeras)';
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta esta variable cuantitativa CONTINUA con datos AGRUPADOS usando exactamente los valores proporcionados.

Variable: "${varName}"${varDesc ? ` — ${varDesc}` : ''}

DATOS CALCULADOS:
n = ${g.n} | k = ${g.k} clases | Amplitud A = ${f2(g.amp)} | Intervalo: [a,b${intS} | Rango cubierto: ${liMin} a ${lsMax}
Media = ${f2(g.mean)} | Mediana = ${f2(g.median)} | Moda de Czuber = ${f2(g.mode)}
Diferencia |media − mediana| = ${difMedMed}
S = ${f2(g.sd)} | CV = ${f2(g.cv)}%
Clase modal: [${claseModal.li}–${claseModal.ls}${intS} con fi = ${claseModal.fi} (${((claseModal.fi / g.n) * 100).toFixed(1)}%)
50% acumulado alcanzado en clase [${clase50.li}–${clase50.ls}${intS} | 75% en clase [${clase75.li}–${clase75.ls}${intS}
Asimetría de Fisher g1 = ${f2(g.g1)} → ${g1tipo}
Curtosis de Fisher g2 = ${f2(g.g2)} → ${g2tipo}

TABLA DE CLASES:
${g.classes.map(c => `[${c.li}–${c.ls}${intS}: xi=${c.xi}, fi=${c.fi}, Fi=${c.Fi}, hi=${c.hi}, Hi=${c.Hi}`).join('\n')}

Responde en español con estas 6 secciones. Cita los valores exactos de arriba en cada sección:

### Descripción general
Indica que se agruparon n = ${g.n} observaciones de "${varName}" en k = ${g.k} clases con amplitud A = ${f2(g.amp)} (regla de Sturges), tipo [a,b${intS}. Los valores van de ${liMin} a ${lsMax}.

### Tendencia central
Compara media (${f2(g.mean)}), mediana (${f2(g.median)}) y moda de Czuber (${f2(g.mode)}). La diferencia exacta |media − mediana| = ${difMedMed}. Si es pequeña → distribución aproximadamente simétrica. Si media > mediana → sesgo positivo. Si media < mediana → sesgo negativo.

### Dispersión
Los datos varían ±${f2(g.sd)} respecto a la media. Interpreta CV = ${f2(g.cv)}%: CV < 15% → homogéneo, 15–30% → moderadamente variable, > 30% → heterogéneo.

### Cuartiles — distribución acumulada
La clase modal concentra el ${((claseModal.fi / g.n) * 100).toFixed(1)}% en [${claseModal.li}–${claseModal.ls}${intS}. El 50% acumulado se alcanza en [${clase50.li}–${clase50.ls}${intS} y el 75% en [${clase75.li}–${clase75.ls}${intS}. Interpreta la concentración de los datos.

### Outliers — valores extremos de la tabla
Los datos se distribuyen entre ${liMin} (límite inferior de la primera clase) y ${lsMax} (límite superior de la última). Analiza si las clases extremas tienen frecuencias bajas que sugieran valores alejados del centro.

### Deformación
Interpreta g1 = ${f2(g.g1)}: criterio |g1| < 0.1 → simétrica; g1 > 0 → sesgo positivo; g1 < 0 → sesgo negativo. Resultado: ${g1tipo}.
Interpreta g2 = ${f2(g.g2)}: criterio |g2| < 0.5 → mesocúrtica; g2 > 0 → leptocúrtica; g2 < 0 → platicúrtica. Resultado: ${g2tipo}.
Concluye si el histograma se aproxima a la distribución normal.

Mínimo 300 palabras. Usa máximo 2 decimales en todos los valores numéricos. **negritas** para valores. Sin saludos.`;
  },

  // ----- DISTRIBUCIONES -----
  promptDistribuciones(varName, varUnit, varDesc, distribucion, parametros, tipoProbabilidad, valorA, valorB, probabilidad, estadistico, descripcion) {
    const f4 = v => (Math.round(v * 10000) / 10000).toFixed(4);
    const unidad = varUnit ? ` (${varUnit})` : '';
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta este cálculo de probabilidad usando exactamente los valores proporcionados.

Variable: "${varName}"${unidad}${varDesc ? ` — ${varDesc}` : ''}
Distribución: ${distribucion}
Parámetros: ${parametros}
Tipo de probabilidad: ${tipoProbabilidad}
Valor a = ${valorA}${valorB !== undefined && !isNaN(valorB) ? ` | Valor b = ${valorB}` : ''}
${estadistico ? `Estadístico calculado: ${estadistico}` : ''}
Probabilidad calculada: ${descripcion} = ${f4(probabilidad)}
Complemento (1 − P) = ${f4(1 - probabilidad)}

Responde en español con estas 5 secciones. Usa los valores exactos de arriba:

### Descripción de la variable y distribución
Explica qué tipo de variable es "${varName}"${unidad} y por qué se usa la distribución ${distribucion} con los parámetros dados (${parametros}). Justifica la elección de la distribución en el contexto descrito.

### Interpretación de la probabilidad calculada
Explica en términos reales qué significa ${descripcion} = ${f4(probabilidad)} para la variable "${varName}"${unidad}. Usa frases como "existe un X% de probabilidad de que...". Si hay complemento relevante, interprétalo también.

### Significado en el contexto
Relaciona el resultado con el contexto "${varDesc || varName}". ¿Qué implica este valor para la investigación, la toma de decisiones o la práctica profesional? ¿Es una probabilidad alta, moderada o baja?

### Comparación con valores críticos
Compara el estadístico calculado${estadistico ? ` (${estadistico})` : ''} con los valores críticos estándar para la distribución ${distribucion}. Para la Normal: Z=±1.96 para 95%, Z=±2.576 para 99%. Para t y Chi²: menciona los valores típicos según gl. ¿El valor cae en zona de rechazo o aceptación?

### Recomendaciones para la investigación
¿Qué análisis complementarios se recomiendan? ¿Se justifica continuar con pruebas de hipótesis? ¿Qué precauciones hay que tener con los supuestos de la distribución elegida?

Mínimo 300 palabras. Usa máximo 2 decimales. **negritas** para valores. Sin saludos.`;
  },

  videoBlock(tema) {
    return `<div class="video-block"><div class="video-play-icon"></div><div class="video-info"><div class="video-title">Video tutorial — ${tema}</div><div class="video-sub">Statia Academy</div></div><a href="TU_LINK_AQUI" target="_blank" class="video-btn">Ver en YouTube</a></div>`;
  },

  // ----- HIPÓTESIS -----
  promptHipotesis(titulo, stat, statLabel, df, pval, alpha, cola, rechazar, detalle, grupos_info) {
    const f4 = v => typeof v === 'number' ? Utils.fmt(v, 4) : v;
    const dfStr = Array.isArray(df) ? `(${df[0]}, ${df[1]})` : df != null ? df : 'N/A';
    const decisionTexto = rechazar
      ? `Se rechaza H₀ con α = ${alpha}. Existe evidencia estadísticamente significativa.`
      : `No se rechaza H₀ con α = ${alpha}. No hay evidencia estadística suficiente.`;
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta los resultados de esta prueba de hipótesis de forma completa y académica.

PRUEBA: ${titulo}
Estadístico ${statLabel} = ${f4(stat)} | Valor p = ${f4(pval)} | α = ${alpha} | Cola: ${cola}
${dfStr !== 'N/A' ? `Grados de libertad: ${dfStr}` : ''}
${detalle}
${grupos_info ? `Grupos: ${grupos_info}` : ''}

Decisión: ${decisionTexto}

Responde en español con estas secciones:

### Planteamiento
Describe las hipótesis H₀ y H₁ en palabras, el tipo de prueba utilizada y cuándo es apropiada usarla. Explica el nivel de significancia α = ${alpha} y qué tipo de error controla.

### Estadístico y valor p
Interpreta el estadístico ${statLabel} = ${f4(stat)}. Explica el valor p = ${f4(pval)}: la probabilidad de obtener un resultado tan extremo si H₀ fuera verdadera. Compara con α = ${alpha}.

### Decisión estadística
Explica detalladamente la decisión tomada. ¿Por qué se rechaza o no se rechaza H₀? ¿Qué implica esta decisión en términos prácticos? Menciona el nivel de confianza (${((1-alpha)*100).toFixed(0)}%).

### Conclusión aplicada
Traduce los resultados estadísticos a una conclusión comprensible en el contexto de la investigación. ${rechazar ? 'Dado que se rechaza H₀, ¿qué significa esto para la variable estudiada?' : '¿Qué significa no encontrar evidencia suficiente?'}

### Consideraciones metodológicas
Menciona supuestos de la prueba, tamaño de muestra, si el resultado es estadísticamente significativo vs. prácticamente significativo, y qué análisis complementarios se recomiendan.

Mínimo 300 palabras. Usa **negritas** para valores numéricos. Sin saludos.`;
  },

  // ----- CHI-CUADRADO -----
  promptChi(tipo, chi2, df, pval, alpha, rechazar, cramer, n) {
    const f4 = v => Utils.fmt(v, 4);
    const tipoNombre = tipo === 'independencia' ? 'Independencia' : 'Bondad de Ajuste';
    const cramerStr = cramer !== null ? `V de Cramér = ${f4(cramer)} (${Math.abs(cramer) > 0.5 ? 'asociación fuerte' : Math.abs(cramer) > 0.3 ? 'asociación moderada' : 'asociación débil'})` : '';
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta los resultados de esta prueba Chi-cuadrado de ${tipoNombre}.

RESULTADOS:
χ² calculado = ${f4(chi2)} | Grados de libertad = ${df} | Valor p = ${f4(pval)} | α = ${alpha}
n total = ${n} ${cramerStr}
Decisión: ${rechazar ? `Se rechaza H₀ (p < α)` : `No se rechaza H₀ (p ≥ α)`}

Responde en español con estas secciones:

### ¿Qué mide esta prueba?
Explica qué es la prueba Chi-cuadrado de ${tipoNombre}, cuándo se usa y qué hipótesis contrasta. Describe H₀ y H₁ en palabras simples.

### Estadístico χ² y valor p
Interpreta χ² = ${f4(chi2)} con ${df} grados de libertad. Explica el valor p = ${f4(pval)}: probabilidad de observar esta discrepancia entre frecuencias si H₀ fuera verdadera. Compara con α = ${alpha}.

### Decisión y conclusión
Explica la decisión tomada y su significado. ${rechazar ? `Se rechaza H₀: existe asociación/discrepancia estadísticamente significativa.` : `No se rechaza H₀: no hay evidencia de asociación/discrepancia.`} Interpreta en términos prácticos para la investigación.

${cramer !== null ? `### Fuerza de la asociación\nInterpreta la V de Cramér = ${f4(cramer)}: ${Math.abs(cramer) > 0.5 ? 'asociación fuerte' : Math.abs(cramer) > 0.3 ? 'asociación moderada' : 'asociación débil'}. Recuerda que chi-cuadrado indica si hay asociación, pero no su magnitud; para eso se usa la V de Cramér.` : ''}

### Supuestos y limitaciones
Menciona el supuesto de frecuencias esperadas ≥ 5, tamaño de muestra adecuado, cuándo usar la prueba exacta de Fisher, y qué análisis complementarios se recomiendan.

Mínimo 300 palabras. Usa **negritas** para valores. Sin saludos.`;
  },

  // ----- REGRESIÓN -----
  promptRegresion(nx, ny, n, r, rho, r2, b0, b1, se, pPearson, pSpearman, alpha, SSR, SSE, SST, F, pF) {
    const f4 = v => Utils.fmt(v, 4);
    const f2 = v => Utils.fmt(v, 2);
    const rLabel = v => Math.abs(v) > 0.7 ? 'fuerte' : Math.abs(v) > 0.3 ? 'moderada' : 'débil';
    const rDir   = v => v > 0 ? 'positiva (directa)' : 'negativa (inversa)';
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta estos resultados de regresión lineal y correlación de forma completa y académica.

VARIABLES: X = "${nx}" | Y = "${ny}" | n = ${n} pares | α = ${alpha}

CORRELACIÓN:
Pearson r = ${f4(r)} → ${rLabel(r)} ${rDir(r)} | p = ${f4(pPearson)} | ${pPearson < alpha ? 'SIGNIFICATIVA' : 'no significativa'}
Spearman ρ = ${f4(rho)} → ${rLabel(rho)} ${rDir(rho)} | p = ${f4(pSpearman)} | ${pSpearman < alpha ? 'SIGNIFICATIVA' : 'no significativa'}

REGRESIÓN LINEAL:
Ecuación: Ŷ = ${f4(b0)} + ${f4(b1)} × X
R² = ${f2(r2*100)}% de variabilidad explicada
Error estándar Sₑ = ${f4(se)}

ANOVA DE LA REGRESIÓN:
SC_Regresión = ${f4(SSR)} | gl = 1 | CM = ${f4(SSR)}
SC_Error = ${f4(SSE)} | gl = ${n-2} | CM = ${f4(SSE/(n-2))}
SC_Total = ${f4(SST)} | gl = ${n-1}
F(1, ${n-2}) = ${f4(F)} | p = ${f4(pF)} | ${pF < alpha ? 'Modelo SIGNIFICATIVO' : 'Modelo NO significativo'} (α = ${alpha})

Responde en español con estas secciones:

### Correlación de Pearson
Interpreta r = ${f4(r)}: fuerza (${rLabel(r)}), dirección (${rDir(r)}), y significancia (p = ${f4(pPearson)}). ¿Qué tan confiable es para estos datos?

### Correlación de Spearman
Interpreta ρ = ${f4(rho)} y compáralo con Pearson. ¿Son similares? ¿Qué indica la diferencia? ¿Cuándo es preferible Spearman?

### Modelo de regresión
Interpreta Ŷ = ${f4(b0)} + ${f4(b1)} × X en palabras: qué significan b₀ = ${f4(b0)} (intercepto) y b₁ = ${f4(b1)} (pendiente) en el contexto de "${nx}" y "${ny}".

### R² y error estándar
R² = ${f2(r2*100)}%: evalúa si es buen ajuste (< 25% débil, 25–64% moderado, > 64% fuerte). Interpreta Sₑ = ${f4(se)}.

### ANOVA de la regresión
Interpreta la prueba F(1, ${n-2}) = ${f4(F)}, p = ${f4(pF)}. ¿Es el modelo estadísticamente significativo en su conjunto? ¿Qué concluimos sobre β₁?

### Supuestos del modelo
Comenta brevemente los 4 supuestos: linealidad, independencia de errores, homocedasticidad y normalidad de residuos. Con n = ${n} pares, ¿qué precauciones se deben tomar?

### Conclusión
Resume los hallazgos. ¿Es útil el modelo para predecir? ¿Qué análisis adicionales se recomiendan? Recuerda: correlación no implica causalidad.

Mínimo 350 palabras. Usa **negritas** para valores. Sin saludos.`;
  },

  // ----- CONTEO -----
  promptConteo(contexto, formula, resultado) {
    const resFmt = resultado >= 1e15 ? resultado.toExponential(4) : resultado.toLocaleString('es');
    return `Eres StatIA, asistente estadístico educativo universitario.
Interpreta el siguiente resultado de técnicas de conteo de forma didáctica y académica.

CÁLCULO: ${contexto}
FÓRMULA: ${formula}
RESULTADO: ${resFmt}

Responde en español con estas secciones:

### ¿Qué significa este resultado?
Explica en lenguaje claro qué representa el número ${resFmt}. Usa un ejemplo concreto si ayuda a entenderlo mejor.

### ¿Por qué se usó esta técnica?
Explica brevemente cuándo es correcto aplicar esta fórmula (si el orden importa o no, si hay repetición o no) y por qué es la adecuada para este caso.

### Aplicaciones reales
Menciona 2–3 situaciones reales donde este tipo de cálculo es útil (seguridad informática, probabilidad, selección de equipos, genética, etc.).

Máximo 200 palabras. Usa **negritas** para el resultado. Sin saludos.`;
  },
};