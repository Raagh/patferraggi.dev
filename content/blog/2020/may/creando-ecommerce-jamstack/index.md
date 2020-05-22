---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-05-15"
title: Creando una Aplicación de E-commerce con el JAMstack
description: Parte 1
enTitle: Let's build a custom e-commerce with the JAMstack
enDescription: Part 2
enPostUrl: https://dev.to/patferraggi/let-s-build-a-custom-e-commerce-with-the-jamstack-part-1-5dd7
thumbnail: ./cover.jpeg
---

Hola chicos, he estado un poco ausente últimamente, es porque he estado trabajando en la configuración de un proyecto que estoy abordando, un sitio web de comercio electrónico personalizado.

## Antecedentes

**Mi hermana tiene un negocio local en Argentina** llamado [By Maruja](https://www.instagram.com/bymaruja/) que lleva el nombre de mi abuela. Ella **vende accesorios para mujeres como aretes, collares** y cosas por el estilo. Por el momento, **tiene una tienda de [Tienda Nube](https://www.tiendanube.com/), este proveedor** es como Shopify y otros en el sentido de que **le permite crear su propia tienda con una plantilla predefinida y hacer un poco de personalización ligera, agregue sus productos y tenga todo configurado sin contratar a un diseñador, un desarrollador o pagar por separado los costos del servidor**.

Desafortunadamente, después de un tiempo llega a un punto en que **sitios como este no cubren sus necesidades o simplemente agregan demasiado costo mensual** para que sea viable para las pequeñas empresas en condiciones económicas inciertas. Entonces, dado que mi esposa es Diseñadora Gráfica (ella ya diseñó la marca) y yo soy un Desarrollador de Software, **decidimos echarle una mano y crear una solución** que satisfaga las necesidades de su negocio mientras que nosotros tengamos un proyecto realmente agradable para mostrar en nuestros portfolios.

## Las necesidades

- **Estilo y experiencia a medida**.
- **Fácil de agregar nuevos productos y cambiar el texto y las imágenes del sitio**.
- **MercadoPago como la principal plataforma de pago** (¿qué demonios es MercadoPago?).
- **Menos de 5 dolares al mes** de mantenimiento (espera, ¿qué?) (Sin el costo del dominio).

Ahora, te estarás preguntando qué demonios está pasando, ¿no? Quédate conmigo, voy a dar las presentaciones adecuadas.

Los dos primeros son bastante normales, ¿verdad? ella quiere tener un sitio web/tienda que coincida con la marca de la empresa, que pueda personalizarse fácilmente cuando haya nuevos productos en existencia o cuando entren en juego las promociones.

### MercadoPago

[MercadoPago](https://www.mercadopago.com.ar/) es el primero que los lectores de EE. UU./UE podrían preguntarse qué demonios es esto. En América Latina, no tenemos ningún sitio web designado para [Amazon](https://www.amazon.com/) al que podamos recurrir cuando queremos comprar cosas en línea. La mayoría de las veces los vendedores no envían a América Latina, o si lo hacen, aplican tarifas gigantescas. Incluso si pasas por alto todos estos problemas, algunos países, como Argentina, tienen restricciones muy fuertes sobre los productos importados, debes pagar una multa de hasta el 50% del precio del producto y, a veces, los productos quedan varados en la aduana y pierdes tu dinero.

No se pierde toda esperanza, hay otra opción, una compañía llamada [MercadoLibre](https://www.mercadolibre.com.ar/). Básicamente tienen el monopolio de las compras en línea en muchos países latinoamericanos. Tienen oficinas en 18 países y emplean a unas 8000 personas. Esta compañía tiene su propia plataforma de pago llamada **MercadoPago que admite la mayoría de las tarjetas de crédito, transferencias directas e incluso pagos en cuotas mensuales**. Al menos en Argentina, la mayoría de las personas usan este servicio para comprar en línea, en su sitio web u otras plataformas (también debido al hecho de que el gobierno cobra una tarifa del 30% sobre los pagos realizados con sistemas de pago extranjeros).

### Por debajo de 5 dólares al mes

Puedes estar pensando, este tipo se volvió loco, finalmente sucedió. Escúchame, **para una pequeña empresa que recién está comenzando, los costos fijos pueden ser mortales**, especialmente en un país que tuvo una inflación del 54% en el último año. El costo actual es simplemente demasiado teniendo en cuenta el hecho de que las posibilidades que ofrecen estos sitios son limitadas.

## El análisis

Comencé reduciendo las opciones en función de las limitaciones que tiene el proyecto:

**MercadoPago como plataforma de pago**.

- Shopify
- Wordpress + Woocommerce
- Sitio web personalizado con integración a la API de MercadoPago

**Por debajo de 5 dolares al mes de mantenimiento**.

- Woocommerce (Tal vez)
- Sitio web personalizado con integración a la API de MercadoPago

**Estilo y experiencia a medida**.

- Wordpress + Woocommerce (tengo que aprender WordPress y es stack)
- Sitio web personalizado con integración a la API de MercadoPago

**Fácil de agregar nuevos productos y cambiar el texto y las imágenes del sitio**.

- Wordpress + Woocommerce
- Otras soluciones de comercio electrónico/CMS
- Sitio de administración personalizado

Después de mirar varias posibilidades, me pareció que mis dos opciones principales eran Wordpress + Woocommerce o crear algo personalizado.
**Mi principal problema con Wordpress fue que primero no sé nada al respecto. Me iba a llevar mucho tiempo aprender cómo construir un sitio web completamente funcional y desplegarlo de forma segura en un servidor**, tampoco estaba seguro de poder mantener los costos por debajo de los 5 dólares.

**Decidí ir a un sitio web personalizado**. Pero no todo va a ser personalizado, todavía quiero evitar tener que lidiar con la autenticación de administrador, tener un sitio de administración personalizado para mantener o tener un servidor con una base de datos para mantener.

## El tech stack

En el último año, he estado construyendo mi propio sitio web/blog con Gatsby y deployando en Netlify, así que aprendí a amar el poder del [JAMstack](https://jamstack.org/). Pensé que esto podría encajar bien con el patrón, así que comencé a evaluar opciones que cumplirían los requisitos mencionados anteriormente.

**Sitio web**

- Gatsby
- Next.js

**Capacidades de comercio electrónico / CMS**

- Sanity.io (generosa cuota gratuita)
- DatoCMS (generosa cuota gratuita)
- Prismic (generosa cuota gratuita)

**API para la integración**

- Funciones serverless de Next.js (generosa cuota gratuita)
- Funciones de Netlify (generosa cuota gratuita)

**Hosting**

- Netlify (mayormente gratis)
- Vercel/Now.sh (mayormente gratis)

**No importa el camino que tome, me dara un sitio web súper elegante y rápido, con capacidades de administración, implementado en un alojamiento de calidad con prácticamente 0 costos**.

Al final, **fueron las diferencias entre Gatsby y Next.js las que definieron la decisión, Gatsby es un generador de sitio estático**, lo que significa que el sitio se construye cuando se envía un commit al repositorio y luego se sirve como contenido estático cada vez que alguien llama a nuestra URL, esto es excelente para los costos y el rendimiento del servidor, pero se vuelve complicado cuando hay información que puede cambiar a menudo, en nuestro caso, ese cambio es el stock de nuestros productos.

Cada vez que se realiza una compra, el stock se actualiza en nuestro CMS y se debe activar una compilación en el sitio web de Gatsby para mostrar el stock correcto. **Next.js, por otro lado, es una navaja suiza, tiene generación de sitios estáticos, pero también tiene renderización del lado del servidor e incluso puede funcionar como una aplicación de normal de React**, esto significa que podemos adaptar las páginas a nuestras necesidades específicas y solo usar recursos del servidor cuando sea necesario.

Entonces, aunque Gatsby tiene algunas ventajas bastante buenas, como complementos para la carga de imágenes de manera performante y la integración con Sanity, decidí que Next.js era el más adecuado para lo que queremos construir.

El tech stack completo en el momento de escribir es:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/) + [Enzyme](https://enzymejs.github.io/enzyme/) para probar
- [Sanity.io](https://www.sanity.io/)
- [Vercel/Now.sh](https://vercel.com/)

Y fui por la siguiente arquitectura:

![Arquitectura](https://dev-to-uploads.s3.amazonaws.com/i/f3kqwpj038hie186ttlu.png)

Cuando un usuario accede al sitio web, los productos se renderizaran en el servidor desde Sanity y se cargarán en el sitio web.
Cuando un usuario quiere comprar algo, una función serverless se pondrá en contacto con la API de MercadoPago y generará el enlace apropiado para pagar en su plataforma.
Una vez completado el pago, el hook de la API de MercadoPago notificará a otra función serverless que actualizará el stock en Sanity.

## El equipo

He estado haciendo sesiones de programación en pares de manera semanal con un amigo que durante los últimos 6 meses ha estado tratando de cambiar las carreras de la enseñanza al desarrollo de software, es un tipo increíblemente apasionado y tiene un futuro brillante por delante, pero hemos estado luchando por encontrar ejemplos reales para trabajar. Por el lado de mi esposa, durante los últimos meses, ha estado ayudando a una amiga común, principalmente mejorando su CV como Diseñadora y dando un ojo extra a sus proyectos independientes.

Me sentí muy aliviado cuando nos ofrecieron una mano en este proyecto, ya que tenía dudas de que pudiéramos llevarlo a cabo por nosotros mismos en un tiempo razonable. Entonces nuestro equipo es:

- [Yo](https://www.patferraggi.dev/), desarrollador de software.
- [Manuel Aceituno](https://github.com/Acemanu412), desarrollador de software.
- [Sofia Toso](https://sofiatoso.com/), diseñadora visual /UX.
- [Thanh-Hông LÊ (Camille)](https://medium.com/@thanhHong0702) diseñadora de UX.

## Próximos pasos

En las próximas semanas, haremos un buen progreso en diseño e implementación. Escribiré una serie de artículos que explicarán cómo creamos la estructura del proyecto, cómo nos integramos con Sanity y MercadoPago, cargamos datos reales en nuestro sitio web, creando el carrito y el pago, y finalmente deployando. Si te gusta a dónde va esto, házmelo saber a continuación en los comentarios. Si tienes alguna sugerencia para el proyecto, soy todo oídos, hágamelo saber a continuación. Como siempre, si te gustó este artículo, comparte y subscribite a mi newsletter &#128512;
