// ASTRO4 Service Worker
// Cache-first strategy for offline support

const CACHE_NAME = 'astro4-v1768010500';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/app.html',
  '/styles.css',
  '/astro4-enhancements.css',
  '/js/astro-calc.js',
  '/js/sign-descriptions.js',
  '/js/mini-insights.js',
  '/js/share-utils.js',
  '/js/stripe-checkout.js',
  '/js/astro4-copy.js',
  '/js/astro4-disclaimer.js',
  '/manifest.json',
  '/Sol.jpeg',
  '/Luna.jpeg',
  '/Dragon.jpeg',
  '/Numeros.jpeg'
];

// Install - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - cache-first for assets, network-first for API
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // API calls - network only (no cache)
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Static assets - cache-first
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request)
          .then((response) => {
            // Cache new responses
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => cache.put(event.request, responseClone));
            }
            return response;
          });
      })
  );
});
