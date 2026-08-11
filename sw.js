const CACHE = 'polygo-v2';
const files = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icon.svg','./icon-512.png','./icon-180.png'];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(files)));
});
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => e.respondWith(
  fetch(e.request).then(response => {
    if (e.request.method === 'GET' && response.ok) {
      const copy = response.clone();
      caches.open(CACHE).then(cache => cache.put(e.request, copy));
    }
    return response;
  }).catch(() => caches.match(e.request))
));
