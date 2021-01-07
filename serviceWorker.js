const site_name = "test-pwa";
const assets = ["api2.html", "api2.css", "api2.js"];

self.addEventListener("install", (installEvent) => {
    installEvent.waitUntil(
        caches.open(site_name).then((cache) => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", (fetchEvent) => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then((res) => {
            return res || fetch(fetchEvent.request);
        })
    );
});