const precachedAssets = [
  '/manifest.json'
];


self.addEventListener('fetch', (event) => {
  // Check if this is a request for an image
if (event.request.destination === 'image' || event.request.destination === 'font') {
    event.respondWith(caches.open('MyFancyCacheName_v1').then((cache) => {
      // Go to the cache first
    return cache.match(event.request.url).then((cachedResponse) => {
        // Return a cached response if we have one
        if (cachedResponse) {
        return cachedResponse;
        }
        // Otherwise, hit the network
        return fetch(event.request).then((fetchedResponse) => {
          // Add the network response to the cache for later visits
        cache.put(event.request, fetchedResponse.clone());

          // Return the network response
        return fetchedResponse;
        });
    });
    }));
}
if (event.request.url.endsWith('json')) {
  event.respondWith(caches.open('precache').then((cache) => {
    // Go to the cache first
  return cache.match(event.request.url).then((cachedResponse) => {
      // Return a cached response if we have one
      if (cachedResponse) {
      return cachedResponse;
      }
      // Otherwise, hit the network
      return fetch(event.request).then((fetchedResponse) => {
        // Add the network response to the cache for later visits
      cache.put(event.request, fetchedResponse.clone());

        // Return the network response
      return fetchedResponse;
      });
  });
  }));
}
if (event.request.url.endsWith('.scss')) {
    event.respondWith(caches.open('staticPrecache').then((cache) => {
      // Go to the cache first
    return cache.match(event.request.url).then((cachedResponse) => {
        // Return a cached response if we have one
        if (cachedResponse) {
        return cachedResponse;
        }
        // Otherwise, hit the network
        return fetch(event.request).then((fetchedResponse) => {
          // Add the network response to the cache for later visits
        cache.put(event.request, fetchedResponse.clone());

          // Return the network response
        return fetchedResponse;
        });
    });
    }));
}

else {
    return;
}
});