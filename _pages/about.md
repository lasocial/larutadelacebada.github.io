---
layout: page
title: Nosotros
permalink: /about/
---

¿Quiénes somos? Un par de peludos y una peluda que les gusta compartir cerveza con amigos y, a veces, con desconocidos.
Intentamos lo posible por divulgar lo poco que sabemos, promoviendo alternativas interesantes y llamativas. En este caso, ¡pues es la cerveza!

- [Catalina Lopez](https://www.twitter.com/catalojara88).
- [Esteban Zapata](https://www.twitter.com/estebanz01).
- [Sebastián Grisales](https://www.twitter.com/sebasgrisalesr).

<script>
  // Basic Slider
  let imagePaths = [];
  {% for image in site.static_files %}
    {% if image.path contains 'images/posts' %}
      imagePaths.push("{{ site.url }}{{ image.path }}");
    {% endif %}
  {% endfor %}

  function slider() {
    let introPlaceHolder = document.querySelector('.intro-image');
    let selectedIdx = Math.floor(Math.random() * (imagePaths.length - 1));
    let selectedImage = imagePaths[selectedIdx];

    introPlaceHolder.children[0].src = selectedImage;
  }

  setInterval(slider, 5000);
</script>

<style>
  body {font-family: Arial, Helvetica, sans-serif;}

  /* The Modal (background) */
  .modal {
      display: none; /* Hidden by default */
      position: fixed; /* Stay in place */
      z-index: 1; /* Sit on top */
      padding-top: 100px; /* Location of the box */
      left: 0;
      top: 0;
      width: 100%; /* Full width */
      height: 100%; /* Full height */
      overflow: auto; /* Enable scroll if needed */
      background-color: rgb(0,0,0); /* Fallback color */
      background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  /* Modal Content */
  .modal-content {
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 80%;
  }

  /* The Close Button */
  .close {
      color: #aaaaaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
  }

  .close:hover,
  .close:focus {
      color: #000;
      text-decoration: none;
      cursor: pointer;
  }
</style>
<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <p>Gracias por visitarnos ! Recuerda que nos puedes apoyar a trav&eacute;s de una donaci&oacute;n</p>
  </div>

</div>
<script>
// Modal
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // When the user clicks the button, open the modal
  setTimeout(() => {
    modal.style.display = "block";
  }, 500);
</script>

Este es un proyecto de amigos para amigos. Nuestros contenidos son elaborados con amor y pensamiento voluntario, pero si quieres, puedes aportar una donación en criptomonedas, el monto que quieras:

<figure style="width: 150px; margin-left: 3em;" class="align-center">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/ethereum.png" alt="Ethereum Address">
    <figcaption><strong>Ethereum (ETH)</strong><br />0xb5aa5d8c3a88d42e856fa34adeb33b5d37e591e4</figcaption>
</figure>

<figure style="width: 150px; margin-left: 3em;" class="align-center">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/ethereum.png" alt="BitcoinCash Address">
    <figcaption><strong>Bitcoin Cash legacy (BCH)</strong> 3GmDp1DgHfW4g3s1a8ueGSBQgBPNsHe3JH</figcaption>
    <figcaption><strong>Bitcoin Cash (BCH)</strong> bitcoincash:pzj427fuuzllmuy9nejugdlyd0qrtgq7hvxyne4n29</figcaption>
</figure>

<figure style="width: 150px; margin-left: 3em;" class="align-center">
  <img src="{{ site.url }}{{ site.baseurl }}/assets/images/bitcoin.png" alt="BitcoinCash Address">
    <figcaption><strong>Bitcoin (BTC)</strong> 3BQ7F4cWpgKqjT8kL8oYsUCpUWch33g7CB</figcaption>
</figure>

<hr />
<small>Todas las imágenes utilizadas que no son elaboración propia de los autores del sitio, poseen licencia Creative Commons CC0. Algunas imágenes también son autoría de los autores del blog y al ser utilizadas en el sitio, están cediendo derechos únicamente a La Ruta de La Cebada. Algunas imágenes han sido extraídas, de forma legal y legítima, a tráves del sitio web https://pixabay.com/ </small>
