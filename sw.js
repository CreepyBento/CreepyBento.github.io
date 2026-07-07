self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => clients.claim());
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
self.addEventListener("install", e => {
  e.waitUntil(caches.open("hq-v1").then(c => c.addAll(["./index.html", "./manifest.json"])));
});
