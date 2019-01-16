---
layout: page
title: Notificaciones Web
permalink: /web_notifications/
---
<style>
  .button-disabled {
    background-color: rgb(112,128,144);
  }

  .button-disabled:hover {
    background-color: rgb(105,105,105);
  }
</style>
<h2>¡Sé el primero en leer nuestros posts!</h2>

No te pierdas la posibilidad de ser el primero de nuestro lectores. Activando las notificaciones
en tu celular, podrás recibir alertas cada que se publique una nueva entrada ¡Genial! ¿No?

Si ya estás suscrito, pero deseas desactivarlas, no hay ningún problema, por acá también lo podrás
realizar.

<script src="{{ site.url }}{{ site.baseurl }}/bartender_service.js"></script>

<button class='btn subscribe' onclick='subscribeMe();'>Recibir notificaciones</button>
<button class='btn unsubscribe' onclick='removeMe();'>Dejar de recibir notificaciones</button>

<h3 class='msg' style='display: none'>
Lastimosamente, tu navegador no soporta la tecnología que permite enviar notificaciones.
Actualmente sólo soportamos navegadores Firefox, Google Chrome y Opera.
</h3>

<script src="{{ site.url }}{{ site.baseurl }}/assets/javascripts/bartender_main.js"></script>
<script>
  validateSubscription();
</script>

