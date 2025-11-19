const CACHE_NAME = "neurorefugio-v1";
const FILES_TO_CACHE = [
  "index.html",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

// Instala e armazena arquivos no cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Ativação
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Resposta offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(cachedFile => {
      return cachedFile || fetch(event.request);
    })
  );
});


