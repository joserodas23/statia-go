/* ============================================
   STATIA GO — js/core/charts.js
   Funciones de gráficos reutilizables
   by Jose Rodas
   ============================================ */

const Charts = {

  COLORS: ['#4fffb044','#7b8cff44','#ffd16644','#ffaa4444','#ff6b6b44','#00d68f44'],
  BORDER: ['#4fffb0','#7b8cff','#ffd166','#ffaa44','#ff6b6b','#00d68f'],

  OPTS_BASE: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  },

  SCALE_DARK: {
    ticks: { color: '#6b7494', font: { size: 9 } },
    grid: { color: '#2a3045' },
  },

  SCALE_DARK_Y: {
    ticks: { color: '#e8ecf4', font: { size: 9 } },
    grid: { color: '#2a3045' },
  },

  SCALE_DARK_ROT: {
    ticks: { color: '#6b7494', font: { size: 8 }, maxRotation: 45 },
    grid: { color: '#2a3045' },
  },

  // Barras horizontales (nominal/ordinal)
  barras(canvasId, labels, data, height = 150) {
    return new Chart(document.getElementById(canvasId), {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: this.COLORS,
          borderColor: this.BORDER,
          borderWidth: 1.5,
          borderRadius: 4,
        }]
      },
      options: {
        ...this.OPTS_BASE,
        indexAxis: 'y',
        scales: { x: this.SCALE_DARK, y: this.SCALE_DARK_Y },
      }
    });
  },

  // Circular (nominal)
  circular(canvasId, labels, data) {
    return new Chart(document.getElementById(canvasId), {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: this.COLORS,
          borderColor: this.BORDER,
          borderWidth: 1.5,
        }]
      },
      options: {
        ...this.OPTS_BASE,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: { color: '#6b7494', font: { size: 9 }, padding: 8 }
          }
        }
      }
    });
  },

  // Barras separadas (discreta)
  barrasSeparadas(canvasId, labels, data, color = '#ffd166') {
    return new Chart(document.getElementById(canvasId), {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: color + '44',
          borderColor: color,
          borderWidth: 1.5,
          borderRadius: 4,
        }]
      },
      options: {
        ...this.OPTS_BASE,
        scales: { x: this.SCALE_DARK, y: this.SCALE_DARK },
      }
    });
  },

  // Distribución simple (continua sin agrupar)
  distribucion(canvasId, sortedData, mean, sd) {
    return new Chart(document.getElementById(canvasId), {
      type: 'bar',
      data: {
        labels: sortedData.map((_, i) => i + 1),
        datasets: [{
          data: sortedData,
          backgroundColor: sortedData.map(v =>
            Math.abs(v - mean) < sd ? '#4fffb044' : '#7b8cff44'
          ),
          borderColor: sortedData.map(v =>
            Math.abs(v - mean) < sd ? '#4fffb0' : '#7b8cff'
          ),
          borderWidth: 1,
          borderRadius: 2,
        }]
      },
      options: {
        ...this.OPTS_BASE,
        scales: { x: this.SCALE_DARK, y: this.SCALE_DARK },
      }
    });
  },

  // Histograma (continua agrupada — barras UNIDAS)
  histograma(canvasId, labels, data, color = '#ffaa44') {
    return new Chart(document.getElementById(canvasId), {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data,
          backgroundColor: color + '33',
          borderColor: color,
          borderWidth: 1.5,
          borderRadius: 0,
          barPercentage: 1,
          categoryPercentage: 1,
        }]
      },
      options: {
        ...this.OPTS_BASE,
        scales: { x: this.SCALE_DARK_ROT, y: this.SCALE_DARK },
      }
    });
  },

  // Polígono de frecuencias
  poligono(canvasId, labels, data, color = '#7b8cff') {
    return new Chart(document.getElementById(canvasId), {
      type: 'line',
      data: {
        labels,
        datasets: [{
          data,
          borderColor: color,
          backgroundColor: color + '18',
          pointBackgroundColor: color,
          pointRadius: 4,
          tension: 0.3,
          fill: true,
          borderWidth: 2,
        }]
      },
      options: {
        ...this.OPTS_BASE,
        scales: { x: this.SCALE_DARK_ROT, y: this.SCALE_DARK },
      }
    });
  },
};
