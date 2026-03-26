/* ============================================
   STATIA GO — sw.js
   Service Worker — PWA offline cache
   by Jose Rodas
   ============================================ */

const CACHE = 'statia-go-v3';

const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/styles.css',
  '/js/core/utils.js',
  '/js/core/stats.js',
  '/js/core/charts.js',
  '/js/core/ai.js',
  '/js/core/app.js',
  '/js/modulos/01_descriptiva/nominal.js',
  '/js/modulos/01_descriptiva/ordinal.js',
  '/js/modulos/01_descriptiva/discreta.js',
  '/js/modulos/01_descriptiva/continua.js',
  '/js/modulos/02_distribuciones/distribuciones.js',
  '/js/modulos/03_hipotesis/hipotesis.js',
  '/js/modulos/04_chi/chi.js',
  '/js/modulos/05_regresion/regresion.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Instalar: guarda los archivos en caché
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activar: borra cachés viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: sirve desde caché, si no desde red
self.addEventListener('fetch', e => {
  // Las llamadas a la API siempre van a la red
  if (e.request.url.includes('/api/') || e.request.url.includes('generativelanguage')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
