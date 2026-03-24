# STATIA_CONTEXT.md
# Contexto completo del proyecto para el agente de Antigravity
# Creado por: Jose Luis Rodas Cobos (JLRodas)
# Última actualización: Marzo 2026

---

## 🎯 IDENTIDAD DEL PROYECTO

**Marca:** STATIA  
**Creador:** Jose Luis Rodas Cobos — JLRodas  
**Rol:** Docente universitario de estadística — DAMEI (Departamento Académico de Matemática, Estadística e Informática), Perú  
**Firma obligatoria en todos los productos:** `by Jose Rodas`  
**Idioma:** Todo en español

---

## 🌐 ECOSISTEMA DE PRODUCTOS

| Producto | Nombre | Estado | Tecnología |
|----------|--------|--------|-----------|
| Marca madre | **STATIA** | ✅ Logo listo | — |
| Software escritorio | **Statia Desktop** | ✅ Funcionando | R + Shiny |
| Página web | **Statia Academy** | 🔨 En desarrollo | — |
| App móvil | **Statia Go** | 🔨 En construcción | HTML/CSS/JS |

---

## 📱 ESTE PROYECTO: Statia Go

App web progresiva (PWA) de estadística con IA para celular.  
Diseñada para **estudiantes y docentes universitarios** de Perú y Ecuador.

### Modelo de negocio: Freemium
- **Gratis:** Estadística descriptiva + 5 consultas IA/día
- **Estudiante $2.99/mes:** IA ilimitada + inferencial + offline + historial
- **Docente $6.99/mes:** Todo anterior + modo docente + exportar PDF
- **Universidad:** Licencia institucional negociada
- **Pagos iniciales:** Yape (manual) → luego Culqi → Stripe

### IA integrada
- **Claude API** (Anthropic) — modelo: `claude-sonnet-4-20250514`
- Max tokens: 1500
- Los prompts están en `js/core/ai.js`

---

## 🏗️ ARQUITECTURA DEL PROYECTO

```
statia-go/
├── index.html                          ← estructura HTML + carga de scripts
├── css/
│   └── styles.css                      ← todos los estilos
├── js/
│   ├── core/
│   │   ├── utils.js                    ← funciones compartidas (parseNums, fmt, uid...)
│   │   ├── stats.js                    ← cálculos estadísticos (Stats object)
│   │   ├── charts.js                   ← gráficos Chart.js (Charts object)
│   │   ├── ai.js                       ← Claude API + prompts (AI object)
│   │   └── app.js                      ← navegación + estado global (App object)
│   └── modulos/
│       ├── 01_descriptiva/
│       │   ├── nominal.js              ✅ Listo
│       │   ├── ordinal.js              ✅ Listo
│       │   ├── discreta.js             ✅ Listo
│       │   └── continua.js             ✅ Listo
│       ├── 02_distribuciones/          🔜 Pendiente
│       ├── 03_hipotesis/               🔜 Pendiente
│       ├── 04_no_parametrica/          🔜 Pendiente
│       ├── 05_regresion/               🔜 Pendiente
│       └── 06_anova/                   🔜 Pendiente
└── assets/
    └── (logo, íconos futuros)
```

### Regla de arquitectura
- Cada módulo es un objeto JS independiente: `ModNominal`, `ModOrdinal`, etc.
- Cada módulo tiene 3 métodos: `renderTutorial()`, `renderForm()`, `calcular()`
- El estado global vive en `App.state`
- Los cálculos van en `Stats`, los gráficos en `Charts`, la IA en `AI`
- Para agregar un módulo nuevo: crear el archivo JS + agregar `<script>` en index.html

---

## 🎨 DISEÑO Y ESTILOS

### Paleta de colores (tema oscuro)
```css
--bg: #0d0f14          /* fondo principal */
--surface: #161a24     /* tarjetas */
--surface2: #1e2433    /* inputs, fondo secundario */
--border: #2a3045      /* bordes */
--accent: #4fffb0      /* verde — color principal */
--accent2: #7b8cff     /* morado/azul — secundario */
--accent3: #ff6b6b     /* rojo — errores */
--text: #e8ecf4        /* texto principal */
--muted: #6b7494       /* texto secundario */
--gold: #ffd166        /* dorado — discreta */
--warn: #ffaa44        /* naranja — continua */
```

### Colores por tipo de variable
- 🏷️ **Nominal** → `var(--accent)` verde
- 📶 **Ordinal** → `var(--accent2)` azul/morado
- 🔢 **Discreta** → `var(--gold)` dorado
- 📏 **Continua** → `var(--warn)` naranja

### Fuentes
- Títulos: `Syne` (Google Fonts) — weight 700/800
- Números y código: `DM Mono` — weight 400/500
- Texto general: `Lora` — serif

### Firma
Aparece en el header: `by Jose Rodas` con color `var(--accent2)`

---

## 📊 MÓDULOS ACTUALES — Descriptiva

### Todos los módulos tienen:
1. `renderTutorial()` — teoría completa con fórmulas antes de calcular
2. `renderForm()` — formulario con nombre de variable + descripción + datos
3. `calcular()` — ejecuta el análisis y llama a la IA
4. Los datos del formulario se conservan siempre después de calcular

### Nominal
- Tabla: fi, hi, %
- Medidas: solo Moda
- Gráficos: barras horizontales + circular
- NO histograma, NO media, NO mediana

### Ordinal
- Tabla: fi, Fi, hi, Hi (con orden definido por el usuario)
- Medidas: Moda + Mediana ordinal
- Gráfico: barras ordenadas según escala
- NO media

### Discreta
- 3 modos: Simple / Agrupado / Resumen (ambos juntos)
- Tabla simple: fi por valor único
- Tabla agrupada: intervalos con Sturges, amplitud configurable
- Medidas: media, mediana (fórmula par/impar), moda, S, S², CV, Q1, Q3, IQR
- Gráficos: barras SEPARADAS (no histograma)

### Continua
- 3 modos: Simple / Agrupado / Resumen (ambos juntos)
- Tabla agrupada: intervalos [a,b) semiabiertos o [a,b] cerrados
- Opciones: amplitud entera o exacta, número de clases manual o Sturges
- Medidas completas: media, mediana (par/impar), moda, S, S², CV, Q1, Q2, Q3, IQR
- Gráficos: distribución simple + histograma (barras UNIDAS) + polígono

---

## 🤖 PROMPTS DE IA

Los prompts están en `js/core/ai.js` y tienen esta estructura por módulo:
- Contexto: tipo de variable + nombre + descripción
- Datos calculados: todas las medidas
- Instrucción: responde en secciones numeradas
- Secciones: tendencia central / dispersión / posición / distribución / conclusión práctica
- Máximo: 220-270 palabras según el módulo
- Formato: **negritas** para valores clave

---

## 📋 MÓDULOS PENDIENTES (orden de construcción)

### Siguiente: 02_distribuciones/
- `normal.js` — distribución normal, Z, probabilidades, tabla Z
- `binomial.js` — n, p, P(X=k), P(X≤k), media, varianza
- `poisson.js` — λ, P(X=k), P(X≤k)
- `t_student.js` — grados de libertad, probabilidades

### Después: 03_hipotesis/
- `t_una_muestra.js`
- `t_dos_muestras.js`
- `z_proporciones.js`
- `chi_independencia.js`

### Luego: 04_no_parametrica/
- `mann_whitney.js`
- `wilcoxon.js`
- `kruskal_wallis.js`

### Luego: 05_regresion/
- `lineal_simple.js` — ecuación, R², gráfico dispersión + recta
- `correlacion.js` — Pearson, Spearman

### Finalmente: 06_anova/
- `anova_una_via.js`

### NO van en Statia Go (van en Statia Desktop — R Shiny):
- Series de tiempo (ARIMA, SARIMA)
- Regresión múltiple y logística
- Redes neuronales
- Modelos ML avanzados
- ANOVA dos vías

---

## 🔧 CÓMO AGREGAR UN MÓDULO NUEVO

1. Crear archivo en la carpeta correspondiente, ej: `js/modulos/02_distribuciones/normal.js`
2. Seguir la estructura del objeto JS:
```javascript
const ModNormal = {
  renderTutorial() { /* teoría + fórmulas */ },
  renderForm() { /* formulario de entrada */ },
  async calcular() { /* cálculos + gráficos + IA */ },
};
```
3. Agregar en `app.js` dentro del `moduleMap`:
```javascript
normal: ModNormal,
```
4. Agregar en `index.html`:
```html
<script src="js/modulos/02_distribuciones/normal.js"></script>
```
5. Agregar la entrada en el drawer dentro de `app.js` → `renderDrawer()`

---

## ⚠️ REGLAS IMPORTANTES

1. **Todo en español** — variables, mensajes, tutoriales, interpretaciones IA
2. **Firma `by Jose Rodas`** siempre visible en header y footer
3. **Datos del formulario se conservan** después de calcular — no limpiar
4. **IDs únicos** siempre con `Utils.uid()` para evitar conflictos entre cálculos
5. **Fórmula mediana correcta**: par e impar por separado — siempre mostrarla
6. **Gráficos correctos por tipo**: barras unidas=continua, separadas=discreta, barras/pie=cualitativa
7. **IA siempre en secciones** con interpretación real, no solo definiciones
8. **No usar alert()** — usar el elemento `#formErr` para errores
9. **Modo resumen** = simple + agrupado juntos en pantalla

---

## 🚀 ESTADO ACTUAL

- [x] Arquitectura modular completa
- [x] Módulo descriptiva: nominal, ordinal, discreta, continua
- [x] Menú drawer con todos los módulos futuros visibles (marcados "Pronto")
- [x] Pantalla de inicio con logo grande y frase motivadora
- [x] Sistema de historial
- [ ] PWA (manifest.json + service-worker.js) — pendiente
- [ ] Módulo distribuciones
- [ ] Módulo pruebas de hipótesis
- [ ] Módulo regresión
- [ ] Módulo ANOVA
- [ ] Módulo no paramétrica
- [ ] Publicación en Netlify

---

*STATIA — Plataforma Académica de Estadística e IA · by Jose Rodas*
