/* the app moved to /tskmngr/: this worker clears its cache and removes itself */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('one-table-v')).map(k => caches.delete(k))))
  .then(() => self.registration.unregister()).then(() => self.clients.matchAll()).then(cs => cs.forEach(c => c.navigate('/tskmngr/')))));
