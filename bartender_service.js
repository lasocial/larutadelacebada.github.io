// Service Worker for La Ruta de la cebada.
// It's in charge of setting up the requirements to have
// a service worker with push notifications available.


self.addEventListener('install', (evt) => {
  console.log('The Bartender is trying to serve you!');
});


self.addEventListener('push', (event) => {
  console.log('A new notification has been received');

  let title = '¡Nuevo post en La Ruta de la Cebada!';
  let data = { body: 'empty message' };

  if (event.data) {
    data = event.data.json();
  }

  let notificationConfig = {
    body: data.body,
    icon: '/favicon.ico',
    badge: '/assets/images/logo.png',
    tag: 'new-post-notification', // This serves as a unique notification id.
    lang: 'es',
    vibrate: [200, 100, 200],
    requireInteraction: true
  };

  event.waitUntil(self.registration.showNotification(title, notificationConfig));
});
