/* ============================================
   STATIA GO — js/core/teorias.js
   Contenido teórico enriquecido para rutas de aprendizaje
   by Jose Rodas
   ============================================ */

const Teorias = {

  _html: {

/* ─────────────────────────────────────────────
   NOMINAL
───────────────────────────────────────────── */
nominal: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar variables nominales?</h3>
    <p>Usa una variable <strong>nominal</strong> cuando los datos son categorías <em>sin ningún orden natural</em> entre ellas. La única operación válida es preguntar si dos datos son iguales o diferentes — no puedes decir que uno es "mayor" o "mejor" que otro.</p>
    <p><strong>Situaciones reales:</strong></p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li>Encuestas de color favorito (rojo, azul, verde…)</li>
      <li>Género declarado por estudiantes</li>
      <li>Marca de celular que usa cada cliente</li>
      <li>País de origen de turistas en Machu Picchu</li>
      <li>Tipo de sangre (A, B, AB, O)</li>
      <li>Deporte favorito en una encuesta universitaria</li>
    </ul>
    <p style="margin-top:.8rem;">La pregunta clave es: <em>"¿Importa el orden entre las categorías?"</em> Si la respuesta es NO, la variable es nominal. Si el color azul no es "más" que el rojo, es nominal.</p>
    <p>Las medidas de resumen adecuadas son la <strong>moda</strong> (categoría más frecuente) y las <strong>frecuencias relativas</strong> (porcentajes). La media y la mediana no tienen sentido aquí.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — Deporte favorito</h3>
    <p>Se encuestó a <span style="color:var(--accent);font-family:'DM Mono',monospace;">30 estudiantes</span> universitarios preguntando: <em>"¿Cuál es tu deporte favorito?"</em> Los resultados fueron:</p>
    <div style="overflow-x:auto;margin:.8rem 0;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.88rem;">
        <thead>
          <tr style="background:rgba(79,255,176,0.1);">
            <th style="border:1px solid var(--border);padding:.5rem .9rem;text-align:left;">Deporte</th>
            <th style="border:1px solid var(--border);padding:.5rem .9rem;text-align:center;">Frecuencia (f)</th>
            <th style="border:1px solid var(--border);padding:.5rem .9rem;text-align:center;">Frec. relativa (f/n)</th>
            <th style="border:1px solid var(--border);padding:.5rem .9rem;text-align:center;">Porcentaje (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.45rem .9rem;">Fútbol</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">12</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">0.40</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;color:var(--accent);">40%</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.45rem .9rem;">Vóley</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">7</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">0.23</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">23%</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.45rem .9rem;">Básquet</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">0.17</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">17%</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.45rem .9rem;">Natación</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">4</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">0.13</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">13%</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.45rem .9rem;">Tenis</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">2</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">0.07</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;">7%</td></tr>
          <tr style="background:rgba(79,255,176,0.06);font-weight:700;"><td style="border:1px solid var(--border);padding:.45rem .9rem;">TOTAL</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;color:var(--accent);">30</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;color:var(--accent);">1.00</td><td style="border:1px solid var(--border);padding:.45rem .9rem;text-align:center;color:var(--accent);">100%</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Paso 1 — Contar frecuencias:</strong> Se contó cuántos estudiantes eligieron cada deporte.</p>
    <p><strong>Paso 2 — Calcular frecuencia relativa:</strong> <span style="font-family:'DM Mono',monospace;">f/n = 12/30 = 0.40</span> para fútbol.</p>
    <p><strong>Paso 3 — Identificar la moda:</strong> La categoría más frecuente es <span style="color:var(--accent);font-family:'DM Mono',monospace;">Fútbol (40%)</span>. Esta es la única medida de tendencia central válida para variables nominales.</p>
    <p><strong>Conclusión:</strong> El deporte favorito predominante entre los estudiantes es el fútbol, elegido por 4 de cada 10 encuestados. El gráfico más apropiado para visualizar estos datos es un <strong>gráfico de barras</strong> o un <strong>gráfico circular (pie)</strong>.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Calcular la media de categorías codificadas:</strong> Asignar números a categorías (1=Fútbol, 2=Vóley…) y luego calcular un promedio es un error grave. El resultado <span style="font-family:'DM Mono',monospace;">1.7</span> no significa nada — no existe el "deporte 1.7".</li>
      <li style="margin-bottom:.7rem;"><strong>Ordenar las barras arbitrariamente:</strong> No hay razón estadística para poner Fútbol antes que Vóley. Por convención se ordenan de mayor a menor frecuencia (gráfico de Pareto), pero nunca porque una categoría sea "mejor".</li>
      <li style="margin-bottom:.7rem;"><strong>Confundir nominal con ordinal:</strong> Si la variable tiene un orden implícito (como "bajo, medio, alto"), ya NO es nominal sino ordinal. El error de clasificar mal afecta qué análisis se puede aplicar.</li>
      <li><strong>Ignorar las categorías minoritarias:</strong> Agrupar categorías pequeñas en "Otros" es válido, pero hacerlo sin criterio puede ocultar información relevante. Documenta siempre qué incluye "Otros".</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead>
          <tr style="background:rgba(123,140,255,0.12);">
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:left;">Aspecto</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:left;">Variable Nominal</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">¿Tiene orden?</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">❌ No</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Medida de tendencia central</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Moda</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Medida de dispersión</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">No aplica</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Gráficos adecuados</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Barras, Circular (pie)</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Operación válida</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">= / ≠ (igual o diferente)</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Ejemplos</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Color, género, marca, país, sangre</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   ORDINAL
───────────────────────────────────────────── */
ordinal: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar variables ordinales?</h3>
    <p>Una variable es <strong>ordinal</strong> cuando las categorías tienen un <em>orden lógico claro</em>, pero la distancia entre categorías no es uniforme ni medible. Puedes decir que A es mayor que B, pero no puedes decir cuánto mayor.</p>
    <p><strong>Situaciones reales:</strong></p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li>Escala de satisfacción: Muy insatisfecho → Insatisfecho → Neutral → Satisfecho → Muy satisfecho</li>
      <li>Nivel educativo: Primaria → Secundaria → Técnico → Universidad → Posgrado</li>
      <li>Posición en una carrera: 1.º, 2.º, 3.º (no sabemos si el 1.º ganó por mucho o poco)</li>
      <li>Escala de dolor médica del 1 al 10</li>
      <li>Calificación de una película: ★☆☆☆☆ a ★★★★★</li>
      <li>Estrato socioeconómico: bajo, medio, alto</li>
    </ul>
    <p style="margin-top:.8rem;">La pregunta clave: <em>"¿Puedo ordenar las categorías, pero la diferencia entre ellas no es constante?"</em> Si la respuesta es SÍ, es ordinal. La diferencia entre "satisfecho" y "muy satisfecho" no es necesariamente la misma que entre "neutral" y "satisfecho".</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — Encuesta de satisfacción</h3>
    <p>Una empresa aplicó una encuesta de satisfacción a <span style="color:var(--accent);font-family:'DM Mono',monospace;">25 clientes</span>. Escala de Likert de 5 puntos:</p>
    <div style="overflow-x:auto;margin:.8rem 0;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.88rem;">
        <thead>
          <tr style="background:rgba(79,255,176,0.1);">
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Nivel</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">f</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">f acumulada</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">% acumulado</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Muy insatisfecho</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">2</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">2</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">8%</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Insatisfecho</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">4</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">6</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">24%</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Neutral</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">11</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">44%</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Satisfecho</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">9</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">20</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">80%</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Muy satisfecho</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">25</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">100%</td></tr>
          <tr style="font-weight:700;background:rgba(79,255,176,0.06);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">TOTAL</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">25</td><td style="border:1px solid var(--border);padding:.4rem .8rem;"></td><td style="border:1px solid var(--border);padding:.4rem .8rem;"></td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Paso 1 — Mediana:</strong> Con n=25, la mediana es el dato en la posición <span style="font-family:'DM Mono',monospace;">(25+1)/2 = 13</span>. El dato 13 cae en la categoría "Satisfecho" (posiciones 12 a 20). <span style="color:var(--accent);">Mediana = Satisfecho.</span></p>
    <p><strong>Paso 2 — Moda:</strong> La categoría con mayor frecuencia es "Satisfecho" (9 respuestas). <span style="color:var(--accent);">Moda = Satisfecho.</span></p>
    <p><strong>Paso 3 — Análisis acumulado:</strong> El <span style="font-family:'DM Mono',monospace;">80%</span> de los clientes respondió "Satisfecho" o menos. Solo el <span style="font-family:'DM Mono',monospace;">20%</span> (5 clientes) marcó "Muy satisfecho".</p>
    <p><strong>Conclusión:</strong> La empresa tiene un nivel de satisfacción mayoritariamente positivo. El 56% se declaró satisfecho o muy satisfecho (14 de 25). Solo el 24% mostró insatisfacción en algún grado.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Promediar puntajes de Likert como si fueran continuos:</strong> Calcular "el promedio es 3.8" asume que la distancia entre niveles es igual. Esto es estadísticamente incorrecto para datos ordinales puros. Usa mediana y moda.</li>
      <li style="margin-bottom:.7rem;"><strong>Invertir el orden al codificar:</strong> Asignar 1=Muy satisfecho y 5=Muy insatisfecho al ingresar datos en Excel invierte el significado. Siempre documenta la dirección de la escala.</li>
      <li style="margin-bottom:.7rem;"><strong>Aplicar correlación de Pearson:</strong> Para medir la relación entre dos variables ordinales, se debe usar <strong>correlación de Spearman</strong> o <strong>Kendall's tau</strong>, no Pearson (que asume distancias iguales).</li>
      <li><strong>Comparar rangos entre grupos sin prueba adecuada:</strong> Para comparar medianas ordinales entre dos grupos independientes, la prueba correcta es <strong>Mann-Whitney U</strong>, no la prueba t.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead>
          <tr style="background:rgba(123,140,255,0.12);">
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Aspecto</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Nominal</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Ordinal</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">¿Tiene orden?</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">No</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Sí</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">¿Distancia fija?</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">No</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">No</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Tendencia central</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Moda</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Moda, Mediana</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Gráficos</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Barras, Pie</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Barras ordenadas</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Correlación</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">No aplica</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Spearman</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Ejemplos</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Color, marca</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Satisfacción, ranking</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   DISCRETA
───────────────────────────────────────────── */
discreta: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar variables discretas?</h3>
    <p>Una variable es <strong>discreta</strong> cuando toma valores enteros contables — no puede tomar decimales porque representa <em>unidades indivisibles</em>. No existe "1.5 hijos" ni "2.7 goles".</p>
    <p><strong>Situaciones reales:</strong></p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li>Número de hijos por familia</li>
      <li>Número de goles en un partido de fútbol</li>
      <li>Cantidad de errores en un examen</li>
      <li>Número de accidentes de tráfico por día</li>
      <li>Cantidad de productos defectuosos en un lote</li>
      <li>Número de llamadas recibidas por hora en un call center</li>
    </ul>
    <p style="margin-top:.8rem;">La pregunta clave: <em>"¿Los valores posibles son enteros contables?"</em> Si puedo listar los valores posibles (0, 1, 2, 3…), la variable es discreta. En cambio, si el valor puede ser cualquier número real en un rango, es continua.</p>
    <p>Para variables discretas son válidas la media, la mediana, la moda y la desviación estándar. También se pueden modelar con distribuciones como <strong>Binomial</strong> o <strong>Poisson</strong>.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — Número de hijos</h3>
    <p>Se registró el número de hijos de <span style="color:var(--accent);font-family:'DM Mono',monospace;">20 familias</span>:</p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.6rem 1rem;border-radius:8px;font-size:.88rem;">2, 0, 3, 1, 2, 4, 1, 2, 0, 3, 2, 1, 5, 2, 1, 3, 0, 2, 1, 2</p>
    <div style="overflow-x:auto;margin:.8rem 0;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.88rem;">
        <thead>
          <tr style="background:rgba(79,255,176,0.1);">
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Hijos (x)</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">f</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">x · f</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">f acum.</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">0</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">3</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">0</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">3</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">1</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">8</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">2</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">7</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">14</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">15</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">3</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">3</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">9</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">18</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">4</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">1</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">4</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">19</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">5</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">1</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">20</td></tr>
          <tr style="font-weight:700;background:rgba(79,255,176,0.06);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">TOTAL</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">20</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">37</td><td style="border:1px solid var(--border);padding:.4rem .8rem;"></td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Media:</strong> <span style="font-family:'DM Mono',monospace;">x̄ = Σ(x·f) / n = 37 / 20 = <span style="color:var(--accent);">1.85 hijos</span></span> (la media puede ser decimal aunque la variable sea discreta).</p>
    <p><strong>Mediana:</strong> n=20, posición media entre datos 10 y 11. Dato 10 y 11 están ambos en la fila de 2 (f acum. llega a 15). <span style="color:var(--accent);">Mediana = 2 hijos.</span></p>
    <p><strong>Moda:</strong> La categoría con mayor frecuencia es 2 (7 familias). <span style="color:var(--accent);">Moda = 2 hijos.</span></p>
    <p><strong>Conclusión:</strong> La familia típica de esta muestra tiene 2 hijos. La media de 1.85 confirma que el promedio está entre 1 y 2. El gráfico adecuado es un <strong>diagrama de bastones</strong> o barras.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Confundir discreta con continua:</strong> La edad en años cumplidos es discreta; en años exactos con decimales es continua. La diferencia importa al elegir el gráfico y la distribución de probabilidad.</li>
      <li style="margin-bottom:.7rem;"><strong>Usar histograma en lugar de diagrama de bastones:</strong> El histograma es para datos continuos agrupados en intervalos. Para discretos, usa barras separadas (sin contacto entre barras) o diagrama de bastones.</li>
      <li style="margin-bottom:.7rem;"><strong>Reportar la media como el valor "típico" sin verificar la distribución:</strong> Si los datos son muy sesgados (muchos ceros y algún valor extremo), la mediana es más representativa que la media.</li>
      <li><strong>Olvidar que la media puede ser decimal:</strong> Que la media sea 1.85 hijos es perfectamente válido — representa el promedio teórico, no un valor real posible.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead>
          <tr style="background:rgba(123,140,255,0.12);">
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Medida</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">¿Aplica?</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Nota</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Media</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">✔ Sí</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Puede ser decimal</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Mediana</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">✔ Sí</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Valor central ordenado</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Moda</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">✔ Sí</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Valor más frecuente</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Desv. estándar</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">✔ Sí</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Dispersión alrededor de la media</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Gráfico ideal</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);">Bastones / Barras</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Barras separadas, no histograma</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Distribuciones</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Binomial, Poisson</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Según el contexto</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   CONTINUA
───────────────────────────────────────────── */
continua: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar variables continuas?</h3>
    <p>Una variable es <strong>continua</strong> cuando puede tomar <em>cualquier valor real</em> dentro de un rango — incluyendo decimales — y el nivel de precisión solo depende del instrumento de medición.</p>
    <p><strong>Situaciones reales:</strong></p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li>Peso de estudiantes (68.3 kg, 72.15 kg…)</li>
      <li>Temperatura corporal (36.8 °C, 37.2 °C…)</li>
      <li>Tiempo de respuesta de un servidor (0.243 segundos)</li>
      <li>Estatura en centímetros (165.5 cm)</li>
      <li>Concentración de glucosa en sangre (mg/dL)</li>
      <li>Distancia recorrida por un vehículo (km)</li>
    </ul>
    <p style="margin-top:.8rem;">La pregunta clave: <em>"¿Podría existir un valor entre dos valores cualesquiera de esta variable?"</em> Entre 68 kg y 69 kg existe 68.5, y entre 68.5 y 69 existe 68.75 — infinitos valores posibles.</p>
    <p>Para análisis de datos continuos se usan histogramas (con clases/intervalos), polígonos de frecuencia, y la <strong>distribución normal</strong> es la más usada para modelar este tipo de datos.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — Peso de estudiantes</h3>
    <p>Se midió el peso (en kg) de <span style="color:var(--accent);font-family:'DM Mono',monospace;">15 estudiantes</span>:</p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.6rem 1rem;border-radius:8px;font-size:.88rem;">58.2, 63.5, 71.0, 68.4, 55.8, 74.2, 62.1, 69.3, 57.6, 80.5, 66.7, 60.0, 72.8, 64.4, 59.9</p>
    <p><strong>Paso 1 — Ordenar los datos:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.6rem 1rem;border-radius:8px;font-size:.88rem;">55.8, 57.6, 58.2, 59.9, 60.0, 62.1, 63.5, 64.4, 66.7, 68.4, 69.3, 71.0, 72.8, 74.2, 80.5</p>
    <p><strong>Paso 2 — Media:</strong> <span style="font-family:'DM Mono',monospace;">x̄ = Σx / n = 984.4 / 15 = <span style="color:var(--accent);">65.63 kg</span></span></p>
    <p><strong>Paso 3 — Mediana:</strong> Con n=15, el dato central es el 8.º: <span style="color:var(--accent);font-family:'DM Mono',monospace;">64.4 kg</span></p>
    <p><strong>Paso 4 — Rango:</strong> <span style="font-family:'DM Mono',monospace;">R = 80.5 − 55.8 = <span style="color:var(--gold);">24.7 kg</span></span></p>
    <p><strong>Paso 5 — Desviación estándar (s):</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.6rem 1rem;border-radius:8px;font-size:.85rem;">s = √[Σ(xᵢ − x̄)² / (n−1)]<br>Suma de cuadrados ≈ 568.47<br>s = √(568.47/14) = √40.605 ≈ <span style="color:var(--accent);">6.37 kg</span></p>
    <p><strong>Agrupación en intervalos</strong> (para histograma, con 4 clases):</p>
    <div style="overflow-x:auto;margin:.6rem 0;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.86rem;">
        <thead><tr style="background:rgba(79,255,176,0.1);"><th style="border:1px solid var(--border);padding:.4rem .7rem;">Intervalo (kg)</th><th style="border:1px solid var(--border);padding:.4rem .7rem;text-align:center;">f</th><th style="border:1px solid var(--border);padding:.4rem .7rem;text-align:center;">%</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.35rem .7rem;">[55 – 61)</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">4</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">26.7%</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.35rem .7rem;">[61 – 67)</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">33.3%</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.35rem .7rem;">[67 – 73)</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">4</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">26.7%</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.35rem .7rem;">[73 – 81]</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">2</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">13.3%</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Conclusión:</strong> El peso promedio es <span style="color:var(--accent);">65.63 kg</span> con una desviación de ±6.37 kg. La distribución se concentra entre 61 y 67 kg. El valor de 80.5 kg es un posible valor atípico.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Elegir mal el número de clases para el histograma:</strong> Pocas clases ocultan la forma de la distribución; demasiadas clases hacen el histograma ruidoso. Usa la regla de Sturges: <span style="font-family:'DM Mono',monospace;">k ≈ 1 + 3.322 · log₁₀(n)</span>. Para n=15, k≈5.</li>
      <li style="margin-bottom:.7rem;"><strong>Confundir histograma con gráfico de barras:</strong> En el histograma las barras están pegadas (no hay espacio entre ellas) porque representan un continuo. El espacio entre barras indica que los valores no son contiguos (variable discreta/nominal).</li>
      <li style="margin-bottom:.7rem;"><strong>No detectar outliers antes de calcular la media:</strong> Un solo valor extremo puede sesgar significativamente la media. Siempre revisa con un boxplot o con la regla de 1.5·IQR antes de reportar.</li>
      <li><strong>Redondear demasiado pronto:</strong> Si redondeas datos continuos al entero más cercano antes de calcular, introduces error de medición. Mantén la precisión original durante los cálculos.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead><tr style="background:rgba(123,140,255,0.12);"><th style="border:1px solid var(--border);padding:.5rem .8rem;">Medida / Herramienta</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Variable Continua</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Tendencia central</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Media, Mediana, Moda</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Dispersión</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Rango, Varianza, Desv. estándar, IQR</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Gráficos</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Histograma, Boxplot, Polígono</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Distribución común</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Normal, Exponencial, Uniforme</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Regla clases (Sturges)</td><td style="border:1px solid var(--border);padding:.4rem .8rem;font-family:'DM Mono',monospace;">k = 1 + 3.322·log₁₀(n)</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   CONTEO
───────────────────────────────────────────── */
conteo: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar técnicas de conteo?</h3>
    <p>La <strong>combinatoria</strong> responde a preguntas del tipo: <em>"¿De cuántas formas puedo…?"</em> Aparece en probabilidad, criptografía, planificación, y análisis de riesgo. Las tres herramientas fundamentales son:</p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li><strong>Factorial (n!):</strong> Total de formas de ordenar n objetos distintos. ej. ¿De cuántas formas pueden sentarse 5 personas en 5 sillas?</li>
      <li><strong>Permutaciones P(n,r):</strong> Ordenar r objetos de n disponibles. El orden SÍ importa. ej. Podio de una carrera.</li>
      <li><strong>Combinaciones C(n,r):</strong> Seleccionar r objetos de n. El orden NO importa. ej. Elegir un comité.</li>
    </ul>
    <p style="margin-top:.8rem;"><strong>La pregunta clave para distinguirlos:</strong> <em>"¿Importa el orden en que selecciono?"</em> Si elegir a Ana primero y luego a Carlos da un resultado diferente que elegir a Carlos primero → Permutaciones. Si es lo mismo → Combinaciones.</p>
    <p>Fórmulas fundamentales:</p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.7rem 1rem;border-radius:8px;font-size:.9rem;">n! = n × (n−1) × (n−2) × … × 1<br>P(n,r) = n! / (n−r)!<br>C(n,r) = n! / [r! × (n−r)!]</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — Equipos, contraseñas y comités</h3>

    <p><strong>Caso 1 — Factorial: Asientos</strong></p>
    <p>¿De cuántas formas pueden sentarse <span style="font-family:'DM Mono',monospace;">6 estudiantes</span> en 6 sillas diferentes?</p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">6! = 6 × 5 × 4 × 3 × 2 × 1 = <span style="color:var(--accent);">720 formas</span></p>

    <p style="margin-top:1rem;"><strong>Caso 2 — Permutaciones: Podio de carrera</strong></p>
    <p>En una carrera de <span style="font-family:'DM Mono',monospace;">10 atletas</span>, ¿de cuántas formas se puede asignar oro, plata y bronce?</p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">P(10,3) = 10! / (10−3)! = 10! / 7!<br>= 10 × 9 × 8 = <span style="color:var(--accent);">720 formas</span></p>
    <p>Aquí el orden importa: oro para Ana ≠ plata para Ana.</p>

    <p style="margin-top:1rem;"><strong>Caso 3 — Combinaciones: Comité</strong></p>
    <p>De un grupo de <span style="font-family:'DM Mono',monospace;">8 estudiantes</span>, ¿de cuántas formas se puede formar un comité de 3?</p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">C(8,3) = 8! / [3! × 5!]<br>= (8 × 7 × 6) / (3 × 2 × 1)<br>= 336 / 6 = <span style="color:var(--accent);">56 comités posibles</span></p>
    <p>El orden no importa: {Ana, Bo, Carlos} = {Carlos, Ana, Bo}.</p>

    <p style="margin-top:1rem;"><strong>Caso 4 — Contraseña con dígitos sin repetición</strong></p>
    <p>¿Cuántas contraseñas de 4 dígitos diferentes se pueden formar con los números del 0 al 9?</p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">P(10,4) = 10 × 9 × 8 × 7 = <span style="color:var(--accent);">5,040 contraseñas</span></p>
    <p>Si se permitiera repetición: <span style="font-family:'DM Mono',monospace;">10⁴ = 10,000</span> — casi el doble.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Usar permutaciones cuando el orden no importa:</strong> Para un comité de 3 presidentes intercambiables, usar P(n,r) sobreestima el resultado por r! veces. Siempre pregunta si el rol de cada persona elegida importa.</li>
      <li style="margin-bottom:.7rem;"><strong>Olvidar si hay repetición permitida:</strong> La fórmula cambia radicalmente. Con repetición: <span style="font-family:'DM Mono',monospace;">n^r</span>. Sin repetición: <span style="font-family:'DM Mono',monospace;">P(n,r)</span>. Leer bien el enunciado es clave.</li>
      <li style="margin-bottom:.7rem;"><strong>Calcular 0! como 0:</strong> Por definición, <span style="font-family:'DM Mono',monospace;color:var(--accent);">0! = 1</span>. Este valor es esencial para que las fórmulas de combinaciones funcionen cuando r=0 o r=n.</li>
      <li><strong>No aplicar el principio multiplicativo:</strong> Si un evento A puede ocurrir de m formas Y luego un evento B de n formas, el total es m×n. Muchos estudiantes suman en lugar de multiplicar.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead><tr style="background:rgba(123,140,255,0.12);"><th style="border:1px solid var(--border);padding:.5rem .8rem;">Técnica</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">¿Orden importa?</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Fórmula</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Ejemplo</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Factorial</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Sí (todos)</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">n!</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Asientos en fila</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Permutación</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Sí</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">n!/(n−r)!</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Podio, contraseña</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Combinación</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">No</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">n!/[r!(n−r)!]</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Comité, lotería</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Con repetición</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Sí</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">n^r</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Contraseña c/repetición</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   HIPOTESIS
───────────────────────────────────────────── */
hipotesis: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar pruebas de hipótesis?</h3>
    <p>Una prueba de hipótesis es un procedimiento estadístico que permite tomar una <strong>decisión basada en datos</strong> sobre una afirmación acerca de una población. Se usa cuando quieres saber si una diferencia observada en tu muestra es real o producto del azar.</p>
    <p><strong>Situaciones reales:</strong></p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li>¿El nuevo método de enseñanza mejora el promedio de notas?</li>
      <li>¿La temperatura promedio de Lima cambió respecto a décadas anteriores?</li>
      <li>¿El tiempo de atención promedio en una clínica supera los 20 minutos?</li>
      <li>¿Un medicamento reduce la presión arterial promedio?</li>
    </ul>
    <p style="margin-top:.8rem;"><strong>Estructura de toda prueba de hipótesis:</strong></p>
    <ul style="margin:.3rem 0 0 1rem;">
      <li><strong>H₀ (hipótesis nula):</strong> Lo que asumimos verdadero inicialmente. Generalmente indica "no hay diferencia" o "es igual a".</li>
      <li><strong>H₁ (hipótesis alternativa):</strong> Lo que queremos demostrar. Puede ser bilateral (≠) o unilateral (> o <).</li>
      <li><strong>Nivel de significancia α:</strong> Probabilidad de rechazar H₀ cuando es verdadera. Comúnmente α = 0.05.</li>
      <li><strong>p-valor:</strong> Probabilidad de obtener resultados tan extremos como los observados si H₀ fuera cierta. Si p < α → rechazar H₀.</li>
    </ul>
    <p style="margin-top:.9rem;"><strong>¿Bilateral o unilateral?</strong> Depende de lo que quieres demostrar:</p>
    <ul style="margin:.3rem 0 .7rem 1rem;">
      <li><strong>Bilateral (H₁: μ ≠ μ₀):</strong> No sabes si el cambio es hacia arriba o hacia abajo. Ejemplo: ¿cambió el promedio? → zona crítica en ambas colas.</li>
      <li><strong>Unilateral derecha (H₁: μ > μ₀):</strong> Sospechas que aumentó. Ejemplo: ¿mejoró la nota tras el curso?</li>
      <li><strong>Unilateral izquierda (H₁: μ &lt; μ₀):</strong> Sospechas que disminuyó. Ejemplo: ¿redujo el tiempo de espera?</li>
    </ul>
    <p><strong>¿Cómo sé si uso Z o t?</strong> La clave es si conoces la desviación estándar de toda la población (σ). En la práctica esto casi nunca ocurre — casi siempre usas <strong>t</strong>. La excepción es cuando trabajas con datos históricos muy grandes donde σ está establecida.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">🔍 ¿Qué prueba usar? — Tabla de decisión</h3>
    <p style="margin-bottom:.8rem;">Esta es la pregunta clave antes de cualquier prueba. Respóndelas en orden:</p>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.8rem;">
        <thead><tr style="background:rgba(79,255,176,0.12);">
          <th style="border:1px solid var(--border);padding:.5rem .7rem;text-align:left;">Situación</th>
          <th style="border:1px solid var(--border);padding:.5rem .7rem;">Prueba</th>
          <th style="border:1px solid var(--border);padding:.5rem .7rem;">Estadístico</th>
          <th style="border:1px solid var(--border);padding:.5rem .7rem;">GL</th>
        </tr></thead>
        <tbody>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">1 muestra, σ conocida <em>o</em> n ≥ 30</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent);font-weight:700;">Z-test</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">Z = (x̄ − μ₀) / (σ/√n)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">—</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">1 muestra, σ desconocida, cualquier n</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);font-weight:700;">t-test</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">t = (x̄ − μ₀) / (s/√n)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">n − 1</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">2 grupos independientes (ej: hombres vs mujeres)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);font-weight:700;">t independiente</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">t = (x̄₁−x̄₂) / Sp√(1/n₁+1/n₂)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">n₁+n₂−2</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">2 medidas del mismo sujeto (antes/después)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);font-weight:700;">t pareada</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">t = d̄ / (sd/√n)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">n − 1</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">3 o más grupos, comparar medias</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent2);font-weight:700;">ANOVA (F)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">F = CM_entre / CM_error</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">k−1, N−k</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">Comparar variabilidad de 2 grupos</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent2);font-weight:700;">F de Snedecor</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">F = S₁² / S₂²</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">n₁−1, n₂−1</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="margin-top:1rem;background:rgba(79,255,176,0.06);border-left:3px solid var(--accent);padding:.7rem 1rem;border-radius:0 8px 8px 0;">
      <p style="font-family:'DM Mono',monospace;font-size:.8rem;"><strong>Bilateral (≠):</strong> Z crítico α=0.05 → ±1.96 &nbsp;|&nbsp; <strong>Unilateral (> o <):</strong> Z crítico α=0.05 → 1.645<br>
      Con t, usa la tabla t con los GL correspondientes para obtener el valor crítico exacto.</p>
    </div>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — ¿Cambió el promedio de notas?</h3>
    <p>Una universidad afirma que el promedio histórico de notas es <span style="font-family:'DM Mono',monospace;">μ₀ = 13.5</span>. Una muestra de <span style="font-family:'DM Mono',monospace;">36 estudiantes</span> del año actual tiene <span style="font-family:'DM Mono',monospace;">x̄ = 14.2</span> con desviación estándar muestral <span style="font-family:'DM Mono',monospace;">s = 2.1</span>. ¿El promedio cambió? (α = 0.05)</p>

    <p><strong>Paso 1 — Hipótesis:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">H₀: μ = 13.5 (no cambió)<br>H₁: μ ≠ 13.5 (cambió) → prueba bilateral</p>

    <p><strong>Paso 2 — Estadístico de prueba (Z, ya que n=36 ≥ 30):</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">Z = (x̄ − μ₀) / (s / √n)<br>Z = (14.2 − 13.5) / (2.1 / √36)<br>Z = 0.7 / (2.1 / 6)<br>Z = 0.7 / 0.35 = <span style="color:var(--accent);">2.00</span></p>

    <p><strong>Paso 3 — Valor crítico:</strong> Para α=0.05 bilateral, Z crítico = <span style="font-family:'DM Mono',monospace;color:var(--gold);">±1.96</span></p>

    <p><strong>Paso 4 — Decisión:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">|Z calculado| = 2.00 > Z crítico = 1.96<br>→ <span style="color:var(--accent);">Se rechaza H₀</span></p>

    <p><strong>Paso 5 — p-valor:</strong> P(Z > 2.00) = 0.0228. Para bilateral: p = 2 × 0.0228 = <span style="font-family:'DM Mono',monospace;color:var(--accent);">0.0456</span>. Como 0.0456 < 0.05 → confirma el rechazo de H₀.</p>

    <p><strong>Conclusión en lenguaje simple:</strong> Con un 95% de confianza, hay evidencia estadística suficiente para afirmar que el promedio de notas cambió. El incremento de 13.5 a 14.2 no se debe al azar.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Confundir "rechazar H₀" con "H₁ es verdad":</strong> Rechazar H₀ solo indica que los datos son inconsistentes con H₀ bajo α. No prueba definitivamente H₁. La estadística trabaja con evidencia, no con certeza.</li>
      <li style="margin-bottom:.7rem;"><strong>Usar Z cuando debería usarse t:</strong> Si n < 30 y no conoces σ poblacional, debes usar la distribución t con n−1 grados de libertad, no Z. La t tiene colas más pesadas, lo que da zonas críticas más amplias.</li>
      <li style="margin-bottom:.7rem;"><strong>Interpretar p-valor incorrectamente:</strong> El p-valor NO es la probabilidad de que H₀ sea verdadera. Es la probabilidad de observar datos tan extremos si H₀ fuera cierta. Son cosas muy distintas.</li>
      <li><strong>Elegir H₁ después de ver los datos:</strong> Las hipótesis deben plantearse antes de recolectar datos. Ajustar H₁ para que coincida con los resultados observados (p-hacking) invalida la prueba.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead><tr style="background:rgba(123,140,255,0.12);"><th style="border:1px solid var(--border);padding:.5rem .8rem;">Condición</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Prueba a usar</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Distribución</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">n ≥ 30, σ conocida</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Z-test</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Normal estándar</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">n < 30, σ desconocida</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);">t-test</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">t Student (gl = n−1)</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">α = 0.05, bilateral</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Z crítico = ±1.96</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Rechazar si |Z| > 1.96</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">α = 0.05, unilateral</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Z crítico = ±1.645</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Rechazar si Z > 1.645</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">p-valor < α</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">Rechazar H₀</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Hay evidencia estadística</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   CHI
───────────────────────────────────────────── */
chi: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar Chi-cuadrado (χ²)?</h3>
    <p>La prueba <strong>chi-cuadrado</strong> se usa con variables categóricas (nominales u ordinales) para responder dos tipos de preguntas:</p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li><strong>Prueba de independencia:</strong> ¿Están relacionadas dos variables categóricas? ej. ¿El género influye en la preferencia de carrera?</li>
      <li><strong>Bondad de ajuste:</strong> ¿Se ajusta mi distribución observada a una distribución teórica esperada? ej. ¿El dado está equilibrado?</li>
    </ul>
    <p style="margin-top:.8rem;"><strong>Condición fundamental:</strong> Cada celda de la tabla de contingencia debe tener una frecuencia esperada de al menos 5. Si no se cumple, usa la prueba exacta de Fisher.</p>
    <p><strong>Fórmula:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.6rem 1rem;border-radius:8px;">χ² = Σ [(O − E)² / E]<br>donde O = frecuencia observada, E = frecuencia esperada</p>
    <p>Los grados de libertad para independencia son: <span style="font-family:'DM Mono',monospace;">gl = (filas − 1) × (columnas − 1)</span></p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — ¿Género y preferencia son independientes?</h3>
    <p>Se preguntó a <span style="font-family:'DM Mono',monospace;">100 estudiantes</span> si prefieren estudiar de día o de noche, clasificados por género. (α = 0.05)</p>
    <p><strong>Tabla de frecuencias observadas (O):</strong></p>
    <div style="overflow-x:auto;margin:.6rem 0;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.88rem;">
        <thead><tr style="background:rgba(79,255,176,0.1);"><th style="border:1px solid var(--border);padding:.5rem .8rem;"></th><th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">Día</th><th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">Noche</th><th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:center;">Total</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;font-weight:700;">Masculino</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">30</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">20</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">50</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;font-weight:700;">Femenino</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">25</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;">25</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">50</td></tr>
          <tr style="font-weight:700;"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Total</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">55</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">45</td><td style="border:1px solid var(--border);padding:.4rem .8rem;text-align:center;color:var(--accent);">100</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Paso 1 — Frecuencias esperadas:</strong> <span style="font-family:'DM Mono',monospace;">E = (total fila × total columna) / N</span></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;font-size:.87rem;">E(Masc, Día) = 50×55/100 = 27.5<br>E(Masc, Noche) = 50×45/100 = 22.5<br>E(Fem, Día) = 50×55/100 = 27.5<br>E(Fem, Noche) = 50×45/100 = 22.5</p>
    <p><strong>Paso 2 — Cálculo de χ²:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;font-size:.87rem;">χ² = (30−27.5)²/27.5 + (20−22.5)²/22.5 + (25−27.5)²/27.5 + (25−22.5)²/22.5<br>= 6.25/27.5 + 6.25/22.5 + 6.25/27.5 + 6.25/22.5<br>= 0.227 + 0.278 + 0.227 + 0.278 = <span style="color:var(--accent);">1.01</span></p>
    <p><strong>Paso 3 — Valor crítico:</strong> gl = (2−1)×(2−1) = 1. Para α=0.05, χ² crítico = <span style="font-family:'DM Mono',monospace;color:var(--gold);">3.841</span></p>
    <p><strong>Decisión:</strong> χ² calculado = 1.01 < χ² crítico = 3.841 → <span style="color:var(--accent);">No se rechaza H₀.</span></p>
    <p><strong>Conclusión:</strong> No hay evidencia estadística de que el género y la preferencia horaria de estudio estén relacionados (p > 0.05). Las variables son independientes.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Frecuencias esperadas menores a 5:</strong> Si alguna celda esperada es menor a 5, la aproximación chi-cuadrado no es válida. Combina categorías o usa la prueba exacta de Fisher para tablas 2×2.</li>
      <li style="margin-bottom:.7rem;"><strong>Usar porcentajes en lugar de frecuencias absolutas:</strong> La fórmula χ² requiere conteos (frecuencias absolutas), no porcentajes. Usar porcentajes directamente distorsiona el resultado.</li>
      <li style="margin-bottom:.7rem;"><strong>Confundir asociación con causalidad:</strong> Rechazar H₀ solo indica que las variables están relacionadas, no que una cause a la otra. Chi-cuadrado es una prueba de asociación, no de causalidad.</li>
      <li><strong>Errores en los grados de libertad:</strong> Para bondad de ajuste, gl = k−1 (k categorías). Para independencia, gl = (f−1)(c−1). Son diferentes y confundirlos da un valor crítico equivocado.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead><tr style="background:rgba(123,140,255,0.12);"><th style="border:1px solid var(--border);padding:.5rem .8rem;">Tipo</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">H₀</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">gl</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Condición</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">Independencia</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Variables independientes</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">(f−1)(c−1)</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">E ≥ 5 en cada celda</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Bondad de ajuste</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Sigue dist. esperada</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">k − 1</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">E ≥ 5 por categoría</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">χ²(1), α=0.05</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);">Crítico = 3.841</td><td style="border:1px solid var(--border);padding:.4rem .8rem;"></td><td style="border:1px solid var(--border);padding:.4rem .8rem;"></td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">Alternativa</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Fisher exacto</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">—</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Cuando E < 5</td></tr>
        </tbody>
      </table>
    </div>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   INTERVALOS
───────────────────────────────────────────── */
intervalos: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar intervalos de confianza?</h3>
    <p>Un <strong>intervalo de confianza</strong> (IC) es un rango de valores que, con cierta probabilidad (nivel de confianza), contiene el parámetro poblacional verdadero. Se usa cuando tienes datos de una muestra y quieres hacer inferencias sobre la población completa.</p>
    <p><strong>Situaciones reales:</strong></p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li>Estimar el gasto promedio mensual de familias en Lima a partir de 200 encuestas</li>
      <li>Calcular el porcentaje de aprobación de un candidato con ±3% de margen</li>
      <li>Estimar el tiempo promedio de entrega de un e-commerce</li>
      <li>Determinar la estatura promedio de estudiantes peruanos</li>
    </ul>
    <p style="margin-top:.8rem;"><strong>Interpretación correcta:</strong> Un IC del 95% significa que si repitieras el muestreo 100 veces, aproximadamente 95 de los intervalos calculados contendrían el verdadero parámetro. No significa que hay 95% de probabilidad de que el valor esté en ese intervalo específico.</p>
    <p style="margin-top:.8rem;"><strong>¿Qué factores afectan el ancho del IC?</strong></p>
    <ul style="margin:.3rem 0 .7rem 1rem;">
      <li><strong>Mayor n →</strong> intervalo más estrecho (más preciso). El error estándar baja porque divide por √n.</li>
      <li><strong>Mayor confianza (99% vs 95%) →</strong> intervalo más ancho. Ser más conservador tiene un costo en precisión.</li>
      <li><strong>Mayor variabilidad (s grande) →</strong> intervalo más ancho. Datos dispersos generan más incertidumbre.</li>
    </ul>
    <p><strong>Diferencia con prueba de hipótesis:</strong> El IC <em>estima</em> dónde está el parámetro. La prueba de hipótesis <em>decide</em> si el parámetro es igual a un valor específico. Ambos están relacionados: si μ₀ no cae dentro del IC al 95%, entonces se rechaza H₀ con α = 0.05.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">🔍 ¿Qué IC construir? — Tabla de decisión</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.79rem;">
        <thead><tr style="background:rgba(79,255,176,0.12);">
          <th style="border:1px solid var(--border);padding:.5rem .7rem;text-align:left;">Parámetro a estimar</th>
          <th style="border:1px solid var(--border);padding:.5rem .7rem;">Condición</th>
          <th style="border:1px solid var(--border);padding:.5rem .7rem;">Fórmula del IC</th>
          <th style="border:1px solid var(--border);padding:.5rem .7rem;">Dist.</th>
        </tr></thead>
        <tbody>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent);font-weight:700;">Media μ</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">σ conocida <em>o</em> n ≥ 30</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">x̄ ± Z·(σ/√n)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent);">Z</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);font-weight:700;">Media μ</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">σ desconocida, cualquier n</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">x̄ ± t·(s/√n)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);">t (gl=n−1)</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent);font-weight:700;">Proporción p</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">np̂ ≥ 5 y n(1−p̂) ≥ 5</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">p̂ ± Z·√(p̂·q̂/n)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent);">Z</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);font-weight:700;">Dif. de medias μ₁−μ₂</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">2 muestras independientes</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">(x̄₁−x̄₂) ± t·Sp√(1/n₁+1/n₂)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);">t (gl=n₁+n₂−2)</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);font-weight:700;">Diferencia pareada μd</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">Mismo sujeto, 2 momentos</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">d̄ ± t·(sd/√n)</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--gold);">t (gl=n−1)</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent2);font-weight:700;">Varianza σ²</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">Datos normales</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;">[(n−1)s²/χ²α/2 , (n−1)s²/χ²₁₋α/2]</td>
            <td style="border:1px solid var(--border);padding:.4rem .7rem;color:var(--accent2);">χ² (gl=n−1)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="margin-top:1rem;background:rgba(79,255,176,0.06);border-left:3px solid var(--accent);padding:.7rem 1rem;border-radius:0 8px 8px 0;">
      <p style="font-family:'DM Mono',monospace;font-size:.8rem;"><strong>Regla práctica:</strong> Si no conoces σ (lo más común en la realidad), siempre usa t. Con n grande (≥30), t ≈ Z — el resultado es casi idéntico.<br>
      <strong>Nivel de confianza → Z:</strong> 90% → 1.645 &nbsp;|&nbsp; 95% → 1.960 &nbsp;|&nbsp; 99% → 2.576</p>
    </div>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — Estimar promedio de notas</h3>
    <p>Una muestra de <span style="font-family:'DM Mono',monospace;">40 estudiantes</span> tiene una nota promedio de <span style="font-family:'DM Mono',monospace;">x̄ = 14.6</span> con desviación estándar muestral <span style="font-family:'DM Mono',monospace;">s = 2.3</span>. Construye un IC al 95% para la nota promedio poblacional.</p>

    <p><strong>Paso 1 — Identificar los valores:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">n = 40, x̄ = 14.6, s = 2.3, confianza = 95%</p>

    <p><strong>Paso 2 — Valor Z para 95%:</strong> α = 0.05, α/2 = 0.025. <span style="font-family:'DM Mono',monospace;color:var(--gold);">Z₀.₀₂₅ = 1.96</span></p>

    <p><strong>Paso 3 — Error estándar:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">SE = s / √n = 2.3 / √40 = 2.3 / 6.32 = <span style="color:var(--accent);">0.364</span></p>

    <p><strong>Paso 4 — Margen de error:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">E = Z × SE = 1.96 × 0.364 = <span style="color:var(--accent);">0.713</span></p>

    <p><strong>Paso 5 — Intervalo de confianza:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">IC = x̄ ± E = 14.6 ± 0.713<br>Límite inferior: 14.6 − 0.713 = <span style="color:var(--accent);">13.887</span><br>Límite superior: 14.6 + 0.713 = <span style="color:var(--accent);">15.313</span><br><br>IC 95%: <span style="color:var(--gold);">(13.89, 15.31)</span></p>

    <p><strong>Conclusión:</strong> Estamos 95% seguros de que la nota promedio real de todos los estudiantes está entre <span style="color:var(--accent);font-family:'DM Mono',monospace;">13.89 y 15.31</span> puntos. El margen de error es de ±0.71 puntos.</p>

    <p style="margin-top:.8rem;"><strong>Bonus — IC para proporción:</strong> En una encuesta de 200 personas, 130 aprobaron una ley (p̂ = 0.65).</p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;">IC = 0.65 ± 1.96·√[0.65×0.35/200]<br>= 0.65 ± 1.96·0.0337 = 0.65 ± 0.066<br><span style="color:var(--gold);">IC 95%: (58.4%, 71.6%)</span></p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Interpretar el IC como "probabilidad del parámetro":</strong> El parámetro (μ) es fijo, no tiene probabilidad. Lo que varía es el intervalo. Decir "hay 95% de probabilidad de que μ esté aquí" es incorrecto. El correcto es: "este método produce intervalos que capturan μ el 95% de las veces".</li>
      <li style="margin-bottom:.7rem;"><strong>Confundir nivel de confianza con nivel de significancia:</strong> Confianza = 1 − α. Un IC al 95% usa α = 0.05. Un IC al 99% usa α = 0.01 y tiene un intervalo más ancho.</li>
      <li style="margin-bottom:.7rem;"><strong>Aumentar n sin considerar el costo:</strong> Cuadruplicar n reduce el margen de error a la mitad (√n en el denominador). Es eficiente hasta cierto punto, pero costoso. Hay un trade-off entre precisión y recursos.</li>
      <li><strong>Usar Z cuando n es pequeño y σ desconocida:</strong> Con n < 30 y σ desconocida, usa el valor t con gl = n−1 (tablas t de Student). El valor t es siempre mayor que Z, dando un intervalo más conservador y honesto.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead><tr style="background:rgba(123,140,255,0.12);"><th style="border:1px solid var(--border);padding:.5rem .8rem;">Confianza</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">α</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Z (Z-tabla)</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Ancho IC</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">90%</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">0.10</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">1.645</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Estrecho (menos seguro)</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">95%</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">0.05</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);">1.960</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Estándar en investigación</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">99%</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">0.01</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">2.576</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">Ancho (más seguro)</td></tr>
        </tbody>
      </table>
    </div>
    <p style="margin-top:.8rem;font-size:.9rem;">⬆ Mayor confianza → intervalo más ancho → menos preciso. Siempre hay un trade-off entre confianza y precisión.</p>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   REGRESION
───────────────────────────────────────────── */
regresion: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo usar regresión lineal?</h3>
    <p>La <strong>regresión lineal simple</strong> permite modelar la relación entre una variable independiente (X) y una variable dependiente (Y), y usarla para <em>predecir</em> valores de Y dado un X. La correlación mide la fuerza y dirección de esa relación.</p>
    <p><strong>Situaciones reales:</strong></p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li>Predecir la nota de un examen según las horas de estudio</li>
      <li>Estimar el salario según los años de experiencia</li>
      <li>Prever las ventas de una tienda según el gasto en publicidad</li>
      <li>Relacionar temperatura con consumo de energía eléctrica</li>
      <li>Predecir el precio de una casa según sus metros cuadrados</li>
    </ul>
    <p style="margin-top:.8rem;"><strong>Modelo:</strong> <span style="font-family:'DM Mono',monospace;">Ŷ = a + b·X</span> donde:</p>
    <ul style="margin:.3rem 0 0 1rem;">
      <li><strong>b (pendiente):</strong> Por cada unidad que aumenta X, Y cambia en b unidades</li>
      <li><strong>a (intercepto):</strong> Valor de Y cuando X = 0</li>
      <li><strong>r (correlación de Pearson):</strong> Entre −1 y +1. Cerca de ±1 = relación fuerte; cerca de 0 = relación débil</li>
      <li><strong>R² (coeficiente de determinación):</strong> Porcentaje de variabilidad de Y explicada por X</li>
    </ul>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Ejemplo resuelto — Horas de estudio vs. Nota</h3>
    <p>Se registraron las horas de estudio (X) y la nota del examen (Y) de <span style="font-family:'DM Mono',monospace;">8 estudiantes</span>:</p>
    <div style="overflow-x:auto;margin:.6rem 0;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.86rem;">
        <thead><tr style="background:rgba(79,255,176,0.1);"><th style="border:1px solid var(--border);padding:.4rem .7rem;">Estudiante</th><th style="border:1px solid var(--border);padding:.4rem .7rem;text-align:center;">X (horas)</th><th style="border:1px solid var(--border);padding:.4rem .7rem;text-align:center;">Y (nota)</th><th style="border:1px solid var(--border);padding:.4rem .7rem;text-align:center;">X²</th><th style="border:1px solid var(--border);padding:.4rem .7rem;text-align:center;">XY</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.35rem .7rem;">A</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">2</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">9</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">4</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">18</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.35rem .7rem;">B</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">3</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">11</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">9</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">33</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.35rem .7rem;">C</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">4</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">12</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">16</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">48</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.35rem .7rem;">D</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">13</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">25</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">65</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.35rem .7rem;">E</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">5</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">14</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">25</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">70</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.35rem .7rem;">F</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">6</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">15</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">36</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">90</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.35rem .7rem;">G</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">7</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">16</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">49</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">112</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.35rem .7rem;">H</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">8</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">17</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">64</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;">136</td></tr>
          <tr style="font-weight:700;background:rgba(79,255,176,0.06);"><td style="border:1px solid var(--border);padding:.35rem .7rem;">Σ</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;color:var(--accent);">40</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;color:var(--accent);">107</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;color:var(--accent);">228</td><td style="border:1px solid var(--border);padding:.35rem .7rem;text-align:center;color:var(--accent);">572</td></tr>
        </tbody>
      </table>
    </div>
    <p><strong>Paso 1 — Pendiente b:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;font-size:.86rem;">b = [n·ΣXY − ΣX·ΣY] / [n·ΣX² − (ΣX)²]<br>b = [8·572 − 40·107] / [8·228 − 40²]<br>b = [4576 − 4280] / [1824 − 1600]<br>b = 296 / 224 = <span style="color:var(--accent);">1.321</span></p>
    <p><strong>Paso 2 — Intercepto a:</strong></p>
    <p style="font-family:'DM Mono',monospace;background:rgba(0,0,0,0.3);padding:.5rem 1rem;border-radius:8px;font-size:.86rem;">ȳ = 107/8 = 13.375 ; x̄ = 40/8 = 5<br>a = ȳ − b·x̄ = 13.375 − 1.321·5 = 13.375 − 6.607 = <span style="color:var(--accent);">6.768</span></p>
    <p><strong>Modelo final:</strong> <span style="font-family:'DM Mono',monospace;color:var(--gold);">Ŷ = 6.768 + 1.321·X</span></p>
    <p><strong>Interpretación:</strong> Por cada hora adicional de estudio, la nota sube en promedio <span style="color:var(--accent);font-family:'DM Mono',monospace;">1.321 puntos</span>.</p>
    <p><strong>Predicción:</strong> Si un estudiante estudia 6 horas: <span style="font-family:'DM Mono',monospace;">Ŷ = 6.768 + 1.321×6 = 6.768 + 7.927 = <span style="color:var(--accent);">14.7 puntos</span></span></p>
    <p><strong>Correlación r ≈ 0.98</strong> → relación muy fuerte y positiva. <strong>R² ≈ 0.96</strong> → el 96% de la variación en notas se explica por las horas de estudio.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Extrapolar fuera del rango de los datos:</strong> El modelo es válido solo dentro del rango de X observado. Predecir para X=20 horas con datos que van de 2 a 8 horas es una extrapolación no confiable.</li>
      <li style="margin-bottom:.7rem;"><strong>Confundir correlación con causalidad:</strong> r=0.98 entre horas de estudio y nota no prueba que estudiar más cause mejores notas — podría haber una variable oculta (motivación, inteligencia). La correlación no implica causalidad.</li>
      <li style="margin-bottom:.7rem;"><strong>No verificar supuestos del modelo:</strong> La regresión lineal asume: linealidad de la relación, normalidad de los residuos, homocedasticidad (varianza constante) e independencia. Si estos supuestos se violan, las predicciones son sesgadas.</li>
      <li><strong>Confundir r con R²:</strong> r = 0.7 significa correlación moderada-alta. R² = 0.49 significa que solo el 49% de la variación se explica. Reportar r pero interpretarlo como si fuera R² sobreestima el modelo.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual — Interpretación de r</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.85rem;">
        <thead><tr style="background:rgba(123,140,255,0.12);"><th style="border:1px solid var(--border);padding:.5rem .8rem;">Valor de |r|</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">Interpretación</th><th style="border:1px solid var(--border);padding:.5rem .8rem;">R²</th></tr></thead>
        <tbody>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">0.00 – 0.20</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--muted);">Muy débil o nula</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">0–4%</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">0.20 – 0.50</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--warn);">Débil</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">4–25%</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">0.50 – 0.75</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);">Moderada</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">25–56%</td></tr>
          <tr style="background:rgba(255,255,255,0.03);"><td style="border:1px solid var(--border);padding:.4rem .8rem;">0.75 – 0.90</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Fuerte</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">56–81%</td></tr>
          <tr><td style="border:1px solid var(--border);padding:.4rem .8rem;">0.90 – 1.00</td><td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Muy fuerte</td><td style="border:1px solid var(--border);padding:.4rem .8rem;">81–100%</td></tr>
        </tbody>
      </table>
    </div>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">🔬 Supuestos del modelo lineal</h3>
    <p>La regresión lineal no funciona bien si se violan sus supuestos. Antes de confiar en cualquier resultado, verifica estos cinco:</p>
    <div style="overflow-x:auto;margin:.8rem 0;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.84rem;">
        <thead>
          <tr style="background:rgba(123,140,255,0.12);">
            <th style="border:1px solid var(--border);padding:.45rem .8rem;text-align:left;">Supuesto</th>
            <th style="border:1px solid var(--border);padding:.45rem .8rem;text-align:left;">¿Qué exige?</th>
            <th style="border:1px solid var(--border);padding:.45rem .8rem;text-align:left;">Cómo detectarlo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);font-weight:700;">Linealidad</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Relación X–Y lineal</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Gráfico de dispersión X vs Y</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent2);font-weight:700;">Normalidad de residuos</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Errores ~ N(0,σ²)</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Histograma, Q-Q plot, Jarque-Bera</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);font-weight:700;">Homocedasticidad</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Varianza constante de errores</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Residuos vs valores ajustados</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);font-weight:700;">Independencia</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Errores sin autocorrelación</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Durbin-Watson (DW ≈ 2 = OK)</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--muted);font-weight:700;">No multicolinealidad</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Predictores no correlacionados (múltiple)</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">VIF &lt; 5 = aceptable; &gt; 10 = grave</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="font-size:.88rem;color:var(--muted);margin-top:.6rem;">Para aprenderlos en profundidad y calcular la prueba Jarque-Bera con tus propios datos, visita el módulo <strong style="color:var(--accent2);">Supuestos Estadísticos</strong> en el menú principal.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🚀 ¿Qué estudiar después?</h3>
    <p>Dominar la regresión lineal simple te abre la puerta a una familia completa de modelos. Esta es la ruta natural de progresión:</p>
    <div style="overflow-x:auto;margin:.8rem 0;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.83rem;">
        <thead>
          <tr style="background:rgba(255,209,102,0.1);">
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:left;">Tema</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:left;">Para qué sirve</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;text-align:left;">Cuándo aprenderlo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);font-weight:700;">Regresión múltiple</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Varios predictores simultáneos: Ŷ = a + b₁X₁ + b₂X₂ + …</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Paso inmediato siguiente</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent2);font-weight:700;">Regresión logística</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Clasificación binaria (0/1): aprobado/no aprobado, sano/enfermo</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent2);">Cuando Y es categórica</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);font-weight:700;">Validación cruzada (K-Fold)</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Evaluar el modelo en datos no vistos, detectar overfitting</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);">Al evaluar cualquier modelo</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);font-weight:700;">Regularización Lasso y Ridge</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Penalizar complejidad, prevenir overfitting, selección de variables</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">Con muchos predictores</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--muted);font-weight:700;">Métricas de evaluación</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">MAE, RMSE, R², AUC-ROC — cuantificar qué tan bueno es el modelo</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--muted);">Siempre, junto al modelo</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent2);font-weight:700;">Árboles y Random Forest</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Relaciones no lineales, interacciones automáticas entre variables</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent2);">Machine learning introductorio</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);font-weight:700;">Redes neuronales</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Patrones complejos en grandes datasets, Deep Learning básico</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);">Tras dominar los anteriores</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="margin-top:.9rem;font-style:italic;color:var(--accent);font-family:'Lora',serif;">Dominar regresión lineal es el primer paso sólido. Todos los modelos complejos se construyen sobre estas bases.</p>
  </div>

</div>
`,

/* ─────────────────────────────────────────────
   SUPUESTOS
───────────────────────────────────────────── */
supuestos: `
<div style="font-family:'Lora',serif;color:var(--text);line-height:1.75;">

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent);margin:0 0 .8rem;">📌 ¿Cuándo verificar supuestos estadísticos?</h3>
    <p>Verifica los supuestos <strong>siempre</strong> que vayas a usar un modelo estadístico para inferir, predecir o tomar decisiones. No es un paso opcional: es la diferencia entre resultados válidos y conclusiones engañosas.</p>
    <p><strong>Situaciones donde son críticos:</strong></p>
    <ul style="margin:.4rem 0 0 1rem;">
      <li>Antes de confiar en los valores p de una regresión lineal</li>
      <li>Al usar pruebas t o ANOVA (asumen normalidad y homocedasticidad)</li>
      <li>Con datos de series de tiempo (riesgo de autocorrelación)</li>
      <li>Al construir modelos predictivos con múltiples variables</li>
      <li>Cuando los residuos de un modelo muestran patrones sospechosos</li>
    </ul>
    <p style="margin-top:.8rem;"><strong>La regla:</strong> si el supuesto se viola, los resultados pueden ser técnicamente correctos pero estadísticamente inválidos. Números bonitos sobre bases rotas no valen nada.</p>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--gold);margin:0 0 .8rem;">🧮 Los 5 supuestos — resumen con ejemplo</h3>
    <p>Imagina que ajustas un modelo de regresión para predecir el <strong>salario mensual</strong> (Y) en función de los <strong>años de experiencia</strong> (X) de 50 empleados.</p>

    <div style="margin:.8rem 0;">
      <p style="font-family:'DM Mono',monospace;background:rgba(79,255,176,0.07);padding:.6rem 1rem;border-radius:8px;margin-bottom:.5rem;">
        <strong style="color:var(--accent);">1. Linealidad</strong><br>
        El gráfico de X vs Y muestra que a mayor experiencia, el salario sube de forma aproximadamente recta. Si en lugar de eso vieras una curva (crece rápido al inicio y se aplana), la relación es no lineal → transformar X con log(X) o añadir X².
      </p>
      <p style="font-family:'DM Mono',monospace;background:rgba(123,140,255,0.07);padding:.6rem 1rem;border-radius:8px;margin-bottom:.5rem;">
        <strong style="color:var(--accent2);">2. Normalidad de residuos</strong><br>
        Tras ajustar el modelo, calculas los residuos (salario real − salario predicho). El histograma de esos residuos debe parecerse a una campana. La prueba Jarque-Bera mide asimetría y curtosis: si p &gt; 0.05, no hay evidencia contra normalidad.
      </p>
      <p style="font-family:'DM Mono',monospace;background:rgba(255,209,102,0.07);padding:.6rem 1rem;border-radius:8px;margin-bottom:.5rem;">
        <strong style="color:var(--gold);">3. Homocedasticidad</strong><br>
        Graficas los residuos vs los salarios predichos. Si la dispersión es similar en todo el rango → OK. Si los residuos se ensanchan (más variación para salarios altos) → heterocedasticidad. Solución: transformar Y con log(Y).
      </p>
      <p style="font-family:'DM Mono',monospace;background:rgba(255,107,107,0.07);padding:.6rem 1rem;border-radius:8px;margin-bottom:.5rem;">
        <strong style="color:var(--accent3);">4. Independencia</strong><br>
        Los residuos del empleado #1 no deben predecir los del #2. Si los datos son de una misma empresa y los empleados fueron encuestados en orden por departamento, podría haber correlación. Durbin-Watson: DW ≈ 2 es ideal.
      </p>
      <p style="font-family:'DM Mono',monospace;background:rgba(139,155,180,0.07);padding:.6rem 1rem;border-radius:8px;">
        <strong style="color:var(--muted);">5. No multicolinealidad</strong><br>
        Si al modelo le añades "años de experiencia" Y "edad", estas dos variables están muy correlacionadas (a más experiencia, más edad). El VIF de ambas subirá por encima de 10. Solución: eliminar una de las dos o crear un índice combinado.
      </p>
    </div>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;margin-bottom:1.2rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent3);margin:0 0 .8rem;">⚠️ Errores comunes</h3>
    <ol style="margin:0 0 0 1rem;">
      <li style="margin-bottom:.7rem;"><strong>Verificar normalidad de los datos en lugar de los residuos:</strong> El supuesto de normalidad en regresión es sobre los residuos del modelo, no sobre los datos originales X o Y. Puedes tener datos sesgados y residuos perfectamente normales.</li>
      <li style="margin-bottom:.7rem;"><strong>Ignorar los supuestos con muestras grandes:</strong> Es cierto que el Teorema Central del Límite ayuda con la normalidad cuando n es grande. Pero heterocedasticidad y autocorrelación siguen siendo problemas graves sin importar el tamaño de muestra.</li>
      <li style="margin-bottom:.7rem;"><strong>Corregir el supuesto sin re-verificar:</strong> Si transformas Y para corregir heterocedasticidad, los demás supuestos pueden cambiar. Siempre re-verifica todos los supuestos tras aplicar una corrección.</li>
      <li><strong>Confundir VIF alto con correlación alta:</strong> VIF mide la inflación de varianza considerando todos los predictores juntos, no solo pares. Dos variables pueden tener r = 0.5 (moderado) pero VIF alto si hay colinealidad combinada con otras variables del modelo.</li>
    </ol>
  </div>

  <div style="background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:1.4rem 1.6rem;">
    <h3 style="font-family:'Syne',sans-serif;font-weight:800;color:var(--accent2);margin:0 0 .8rem;">📊 Resumen visual — Tests y umbrales</h3>
    <div style="overflow-x:auto;">
      <table style="width:100%;border-collapse:collapse;font-family:'DM Mono',monospace;font-size:.84rem;">
        <thead>
          <tr style="background:rgba(123,140,255,0.12);">
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Supuesto</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Test principal</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Umbral de alarma</th>
            <th style="border:1px solid var(--border);padding:.5rem .8rem;">Corrección habitual</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent);">Linealidad</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Gráfico X vs Y</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Patrón curvo visible</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">log(X), X², regresión polinómica</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent2);">Normalidad residuos</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Jarque-Bera</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">p &lt; 0.05</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Transformar Y, aumentar n</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--gold);">Homocedasticidad</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Breusch-Pagan</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Patrón embudo en residuos</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">log(Y), WLS, errores robustos</td>
          </tr>
          <tr style="background:rgba(255,255,255,0.03);">
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--accent3);">Independencia</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Durbin-Watson</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">DW &lt; 1 o DW &gt; 3</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Lags, modelos ARIMA</td>
          </tr>
          <tr>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;color:var(--muted);">No multicolinealidad</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">VIF</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">VIF &gt; 5 (grave: &gt; 10)</td>
            <td style="border:1px solid var(--border);padding:.4rem .8rem;">Eliminar variable, Ridge (L2)</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style="margin-top:.8rem;font-size:.88rem;">Los supuestos no son obstáculos — son herramientas para que confíes en tus resultados. Usa el módulo <strong style="color:var(--accent);">Supuestos Estadísticos</strong> para calcular Jarque-Bera y obtener interpretación con IA.</p>
  </div>

</div>
`,

  },  // end _html

  render(type, container) {
    const html = this._html[type];
    if (!html || !container) return;
    container.innerHTML = html;
  },

  has(type) {
    return !!this._html[type];
  }

};
