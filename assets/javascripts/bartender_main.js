if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('/bartender_service.js')
  .then((registration) => {
    console.log('Registration succeeded. Scope is', registration.scope);

    Notification.requestPermission((permission) => {
      if (permission == 'granted') {
        console.log('Notifications allowed');
      }
    });
  })
  .catch((error) => console.log('Error trying to register service worker:', error));

} else {
  console.log('Service workers not supported');
  document.querySelectorAll('.btn').forEach((btn) => btn.style.display = 'none');
  document.querySelector('.msg').style.display = 'block';
}

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


function ajax(method, url, data) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        resolve(xhttp.responseText);
      } else if (xhttp.status >= 400) {
        reject(xhttp);
      }
    };

    xhttp.open(method, url);

    if (data) {
      xhttp.send(JSON.stringify(data));
    } else {
      xhttp.send();
    }
  });
}

const VAPID_PUBLIC_KEY = 'BNuuYA7LQ9qjrs1leWDGSg2YTXGaKqkMaQ4GXfQ0vAwEfxagOwfHXlPka8wqwnRdSsS35IfqJA9xsQj9JObSy9E=';
const VAPID_PRIVATE_KEY = 'gQIdJKiZOTZmNF8OVKSStSKJUJ7lznR_GX8MYBCxUYg=';

function validateSubscription() {
  let subscribeBtn = document.querySelector('.subscribe');
  let unSubscribeBtn = document.querySelector('.unsubscribe');

  navigator.serviceWorker.ready.then((registration) => {
    registration.pushManager.getSubscription().then((subscription) => {
      if (subscription) {
        unSubscribeBtn.classList.toggle('button-disabled', false);
        unSubscribeBtn.disabled = false;

        subscribeBtn.classList.toggle('button-disabled', true);
        subscribeBtn.disabled = true;
      } else {
        unSubscribeBtn.classList.toggle('button-disabled', true);
        unSubscribeBtn.disabled = true;

        subscribeBtn.classList.toggle('button-disabled', false);
        subscribeBtn.disabled = false;
      }
    });
  });
}

function subscribeMe() {
  navigator.serviceWorker.ready.then((registration) => {
    // Get VAPI public key.
    ajax('GET', '/assets/push_public_key.txt')
      .then((key) => {
        let public_key = key.replace(/\r?\n|\r/g, ''); // Clean result from any new line.

        registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(public_key.replace(/\r?\n|\r/g, ''))
        }).then((subscription) => {
          console.log('Subscription successful', subscription);
          ajax('POST', 'http://localhost:4567/pushme', subscription);
          validateSubscription();
        }).catch((error) => console.log('Error trying to subscribe user', error));
      }).catch((e) => console.log('Error inside AJAX request', e));
  }).catch((error) => console.log('Service worker is not ready', error));
}

function removeMe() {
  navigator.serviceWorker.ready.then((registration) => {
    registration.pushManager.getSubscription()
      .then((subscription) => {
        if (subscription) {
          subscription.unsubscribe().then((success) => {
            console.log('Subscription removed correctly', success);
            validateSubscription();
          }).catch((error) => console.log('Cannot unsubscribe. Try again', error));
        } else {
          console.log('User is not subscribed');
        }
      })
  }).catch((error) => console.log('Service worker is not ready', error));
}
