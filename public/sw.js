const CACHE = 'network-or-cache-v2';
const assetUrl = [
	'/src/index.css',
    '/src/main.tsx',
    '/src/Entities/home/ui/Cards/cards.module.scss',
    '/src/shared/assets/logo/LogoSvg.tsx',
    '/node_modules/.vite/deps/chunk-EY5S3FDG.js?v=d03ec107',
    '/src/shared/assets/heroImg/heroImg.webp'
]
// При установке воркера мы должны закешировать часть данных (статику).
self.addEventListener('install', async (event) => {
    const cache = await caches.open(CACHE)
    await cache.addAll(assetUrl)
});

self.addEventListener('activate', async event => {
	const cacheNames = await caches.keys()
    await Promise.all(
        cacheNames.filter(name => name !== CACHE)
        .map(name => caches.delete(name))
    )
})

self.addEventListener('fetch', event => {
    event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request){
    const cached = await caches.match(request)
    return cached ?? fetch(request)
}

