const CACHE = 'network-or-cache-v1';
const assetUrl = [
	'/src/index.css',
    '/src/main.tsx'
]
// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE).then((cache) => cache.addAll(assetUrl)
        ));
});

self.addEventListener('activate', event => {
	console.log('[SW]: activate')
})