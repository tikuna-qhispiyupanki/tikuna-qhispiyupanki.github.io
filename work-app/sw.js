// Remplace l'ancien service worker d'ARBOS (…github.io/work-app/) : efface ses copies hors-ligne,
// se désinscrit et recharge les fenêtres ouvertes, qui affichent alors « ARBOS a déménagé ».
// Les données du téléphone (IndexedDB) ne sont pas effacées.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      for (const k of await caches.keys()) await caches.delete(k);
      await self.registration.unregister();
      for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url);
    })()
  );
});
