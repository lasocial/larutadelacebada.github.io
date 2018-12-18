---
layout: post
title:  "Cambios de infraestructura en La Ruta de la Cebada"
description: "Cambios pequeños, pero sustanciosos"
date:   2018-12-18 06:00:00 -0500
categories: blog
lang: es
image: '/assets/images/posts/2018-12-18-infraestructura.jpg'
author: estebanz01
---
![left-intro](/assets/images/posts/2018-12-18-infraestructura.jpg){: .align-left}
Algunos cambios pequeños, pero sustanciosos que mejoran las condiciones en que presentamos el blog. :grin:

¡Hola! El día de ayer fue un momento muy importante para este pequeño y loco cervecero, pues apliqué unos cambios importantes
en el blog, que permitirán que todo sea más rápido y seguro. Así que haré un pequeño resumen de lo que pasó:

### CloudFlare es el nuevo Registar

[Cloudflare](https://cloudflare.com) es una compañía muy importante en temas de dominio (la dirección de una página web) y algo
que se llama [DNS (Domain Name System)](https://en.wikipedia.org/wiki/Domain_Name_System). Empecemos explicando qué es DNS y por qué
es importante:

Cuando alguien escribe en el navegador `https://www.larutadelacebada.com`, el sistema va y le pregunta a un servidor público por la dirección IP que traduce esa URL y,
si existe, el servidor devuelve la información y así el navegador puede mostrar la página de cervezas que tanto te gusta :sweat_smile:.

Es como cuando existían las operadoras telefónicas (el servidor público): Tú levantabas el teléfono (navegador), le decías a la operadora que
querías comunicarte con La Ruta de la Cebada (URL) y la operadora movía los cables para que tu voz se pudiera conectar con el teléfono de la otra
persona. Este flujo de trabajo, es casi igual a como funciona el DNS y sin ese sistema, pues el internet no podría ser lo que es ahora.

Cloudflare se encarga de prestar ese servicio y La Ruta de la Cebada, desde su inicio, le pidió a esta compañía que se encargara de manejar
esa comunicación tan importante.

Ahora bien, si uno quiere tener un número de teléfono (URL), uno debe pagarle a una empresa prestadora de este servicio ya sea anual, mensual o de alguna forma con tal que ese número siempre esté disponible para que las operadoras lo usen.
La Ruta de la Cebada le pagaba a una empresa llamada GoDaddy, que se encarga de cobrar un precio (variable y dependiente de la publicidad y tráfico que
el sitio maneja), y unos impuestos. Para nosotros, ese precio estaba en apróximadamente unos 50 dólares al año, lo cual no es mucho, pero sigue siendo
alto. Aquí es donde comienza la diversión:

Nuestra querida Cloudflare decidió atacar ese problema de comisión SEM (Según el Marrano :pig:), y lanzó un producto llamado [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/), el cual cobra sólo los impuestos y el registro ¡y nos regala la renovación! Ya no más precios variables ni comisiones extrañas. Así que, después de inscribirnos en la lista de espera, ayer se pudo mover la URL y ya estamos en el nuevo Registrar, lo que trae una mayor velocidad y seguridad de encriptación de datos.

### TLS 1.2 es la versión mínima requerida para conexiones HTTPS

Este tema es un poco muchísimo más técnico y maluco de explicar, pero trataré de resumirlo de forma concisa y sin obviar detalles importantes.

Resulta que cuando alguien se conecta a una página web, utiliza un protocolo o serie de reglas, llamado [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol). Estas reglas le dicen al navegador cómo comunicarse con los servidores de La Ruta de la Cebada, permitiendo que se vean imágenes, vídeos, texto y demás. Ahora bien, esa comunicación también se puede hacer de forma segura (que sólo tu navegador y mi servidor lo vea) o insegura (todo el internet, incluyendo el presidente de los EE.UU. los vea). Como en La Ruta de la Cebada somos súper conscientes de que sólo tú y mis servidores son los únicos que pueden saber cómo se conectan y qué comparten, utilizamos la comunicación segura.

Resulta que esta comunicación segura también tiene un protocolo o serie de reglas que se deben seguir, llamado [TLS (Transport Layer Security)](https://en.wikipedia.org/wiki/Transport_Layer_Security) y, a partir del 2017 existe una versión llamada 1.2, qué es una mejora de la 1.1 y de la 1.0.

Cuando nació La Ruta de la Cebada, se comenzó utilizando la versión 1.1, pero desde que nos movimos a CloudFlare, es posible soportar la versión 1.3, que salió en agosto del 2018.
El problema es que si tu navegador no está actualizado, no sabrá como comunicarse con el sitio y no podrás ingresar a leer sobre cerveza ¡cosa que obviamente no queremos! Es por eso que
decidimos aceptar sólo navegadores que soporten 1.2 en adelante, permitiendo que los usuarios actualicen sus navegadores a las últimas versiones y así garantizar mayor seguridad y una mejor
experiencia, pues nuevas características podrán ser implementadas.

### Conclusiones

En conclusión:
* Soy un nerd :nerd_face:.
* Nos movimos a un servicio muchísimo mejor y por un precio justo.
* Mejoramos la seguridad de las conexiones, lo que garantiza una mejor calidad de contenido.
* La página web se cargará muchísimo más rápido.
* DNS es como un sistema de operadoras :sweat_smile:.

¡Gracias por llegar hasta acá! sé que es algo aburridor, pero es siempre por mejorar en todo.

¡Salud! :beers:.
