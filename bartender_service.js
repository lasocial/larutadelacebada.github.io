// Service Worker for La Ruta de la cebada.
// It's in charge of setting up the requirements to have
// a service worker with push notifications available.

/**
 * urlBase64ToUint8Array
 *
 * @param {string} base64String a public vavid key
 */
function urlBase64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);

    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

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

self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked!');

  event.waitUntil(
    self.clients.matchAll().then((clientList) => {
      if (clientList.length > 0) {
        return clientList[0].focus(); // Return focus when page is open in browser, but no focus.
      }

      return self.clients.openWindow('/');
    })
  );
});

self.addEventListener('pushsubscriptionchange', (event) => {
  console.log('Subscription expired by browser');

  event.waitUntil(
    fetch('https://lossless-ezapata.dev.vhlcentral.com/pubkey').then((key) => {
      let public_key = key.replace(/\r?\n|\r/g, ''); // Clean result from any new line.

      self.registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(public_key)
      }).then((subscription) => {
        console.log('Subscription renewed.');
        return fetch('https://lossless-ezapata.dev.vhlcentral.com/subscribe', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(subscription)
        })
      });
    })
  );
});
