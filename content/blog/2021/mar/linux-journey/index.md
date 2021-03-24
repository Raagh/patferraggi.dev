---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2021-03-24"
title: Nuevo portátil, nuevo sistema operativo. Mi aventura en Linux comienza aquí.
description:
enTitle: New laptop, new OS. My adventure going Linux starts here.
enDescription:
enPostUrl: https://dev.to/patferraggi/new-laptop-new-os-my-adventure-going-linux-starts-here-4697
thumbnail: ./cover.jpeg
---

Durante bastante tiempo he estado pensando en comprarme mi propia computadora portátil. Durante los últimos 3 años y medio he estado usando una Macbook Pro que pertenece a mi empleador (bueno, ahora mi empleador anterior).
La computadora funcionó bien, tiene un gran rendimiento, una gran pantalla, un trackpad increíble (aunque un teclado terrible), Windows 10 funcionó muy bien usando `Parallels`. Pero durante bastante tiempo no me sentí cómodo con varias cosas.

## El problema

0. La computadora no era mía. Alguien tenía un dicho sobre lo que podía y no podía hacer con la computadora.
1. El sistema operativo funcionaba muy bien cuando no lo tocaba demasiado, una vez que quería instalar un conjunto de herramientas poco populares (hola `haskell-language-server` 👋) se te acaba la suerte.
1. Sabía que tendría que devolver mi computadora una vez que cambiara de trabajo, lo que hizo que me diera pocas ganas de personalizar e instalar cosas porque sabía que tendría que comenzar desde cero luego.
1. MacOS, como la mayoría de los sistemas operativos, no son personalizables, aparte del fondo de pantalla, tal vez un fondo oscuro y algún tinte que generalmente no hay mucho mas que haer. Siendo un tipo que pasó años probando ROMs personalizadas en Android hasta el punto de compilar las suyas propias, no podia soportarlo más.

Entonces, después de considerar mis opciones y verificar mi cuenta de ahorros, decidí que era hora de comprar una computadora portátil, la primera en mi vida, e instalar Linux una vez que la tenga.

---

## La búsqueda

De hecho, pase meses buscando la computadora portátil adecuada, soy un bastardo quisquilloso, así que no iba a comprar cualquier computadora portátil Linux.

Debo decir que viniendo de un MacBook Pro, la búsqueda fue más difícil de lo que pensé. Puedo haber odiado a Apple en los párrafos anteriores, pero la verdad es que Apple fabrica productos excelentes, probablemente no la mejor computadora portátil en ninguna categoría específica, pero sí un paquete atractivo en general.
Solo me di cuenta de esto una vez que comencé a buscar una alternativa de Win/Linux.

Estas son las cosas que quería en orden de importancia:

0. I7 o AMD Ryzen 7/9
1. 32 GB de RAM (en mi MacBook pro tenía 32 GB y sentí la diferencia al ejecutar toda mi configuración de desarrollo con 16GB)
1. Buen soporte de Linux
1. Teclado en inglés de EE. UU. (Vivo en Bélgica y es muy difícil encontrar uno, la mayoría de las computadoras portátiles Win10 vienen con AZERTY belga/francés 🤮; Apple te permite elegir la distribución de teclado que desees sin importar donde vivas).
1. Pantalla >= 13,4 pulgadas de relación 16:10 y resolución 2k+(una vez que pruebas esto no hay vuelta atrás)
1. Cuerpo completo de aluminio (digan lo que quiera, pero la calidad de construcción de Apple es increíble, excepto por el teclado)
1. Lo suficientemente ligero para llevar a todos lados en mi mochila.
1. Buen teclado, gran trackpad
1. Linda

Después de meses de búsqueda, encontre solo dos opciones que cumplirían más o menos con estos requisitos.

> [La Lenovo Yoga Slim 7i Pro](https://www.ubergizmo.com/2021/01/lenovo-yoga-slim-7i-pro-ces-2021/) y la [Dell XPS 9310](https://www.dell.com/en-us/shop/dell-laptops/new-xps-13-laptop/spd/xps-13-9310-laptop).

Sí, sé que me van a recomendar otra computadora portátil, como una Thinkpad. La Yoga Slim 7Pro con AMD? tal vez la Razr Book? el Slimbook 14? Los he mirado todos y si consideras todas las cosas en la lista, notaras que todas las demás computadoras portátiles no cumplen algo.

## El ganador es...

Este viaje comenzó alrededor de junio de 2020, en diciembre todavía no tenía computadora portátil. Estaba atrapado en un ciclo de investigación y espera a que saliera un nuevo modelo o algún proveedor oscuro me ofreciera lo que estaba buscando y que pueda ser entregado a Bélgica. Finalmente, después de unas vacaciones refrescantes, decidí no esperar más y compré mi Dell XPS 9310 i7 32GB 4k 1TB NVME. Es perfecto, ¿verdad?

No tan rápido, hay cosas que desearía que fueran diferentes. 4k es demasiado, 2/3k hubiera sido perfecto para una computadora portátil de este tamaño. El modelo de 32GB viene con algunos problemas en Linux que explicaré más adelante. Realmente no me gusta la fibra de carbono que Dell usa en el interior, preferiría que se quedara con todo de metal, Dell tardó un mes en entregarla.

Pero esas son quejas menores. La computadora portátil me está brindando algunos momentos felices que me gustaría compartir con ustedes.

Después de recibir mi computadora portátil, opté por Windows 10 y Ubuntu 20.04 en dual boot.
Oye, si quieres ir a Linux, ¿por qué no ir a Arch? o Arco? o Manjaro? o PopOS?. Bueno, de nuevo, la computadora portátil no es perfecta.

Antes de comprarla, sabía que el modelo de 32 GB era un poco diferente del modelo Developer Edition de 16 GB con soporte oficial de Linux.

Solo Dios sabe por qué, pero Dell tuvo la brillante idea de utilizar otra tarjeta inalámbrica para el modelo de 32 GB. En lugar de optar por el antiguo y totalmente compatible AX201 o el AX1650, Dell decidió incluir el AX500-DBS, que cuando se lanzó el portátil aún no estaba incluido en el kernel de Linux. Sabía que se estaba trabajando para incluirlo, así que seguí adelante y lo compré de todos modos.

El controlador ahora está incluido y de a poco las distribuciones están fusionando los cambios tanto en el kernel de Linux como en el paquete de firmware de Linux. Probé muchas distribuciones y hasta ahora solo he logrado WiFi y Bluetooth completamente funcionales en Ubuntu 20.04, ni siquiera en 20.10.

Eso ya fue toda una experiencia, una patada frontal en los dientes de lo que es vivir bajo Linux, múltiples formateos, varias distribuciones, red mediante usb tethering, kernels, firmware, heathers, de todo. Después de establecerme con algo funcional, esta es mi configuración actual:

![Linux desktop](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jj6a3k1y5uosbjntz5ce.png)

![Linux tiling](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mvb7mdg5nlbz31r1l38e.png)

- Ubuntu 20.04
- Dracula Theme: GTK, GnomeShell, Vscode, GnomeTerminal, Chrome.
- PopOS Shell (tiling and app searcher)
- Eliminado atajo de actividades

# El exterior también cuenta

Una de las cosas que odiaba de la idea de cambiar de portátil era que use muchos stickers geniales en mi portátil de trabajo (como un tonto).
Suena estúpido, pero para mí, eso fue un gran problema. Afortunadamente, guardé duplicados de/logré sacar los stickers que más valoro (algunos de conferencias y meetups en mi país de origen que no volvere a conseguir).

Aquí hay una imagen de la vieja computadora portátil:

![Old laptop](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/byup38df0p15cxs87cwi.jpg)

Y este es mi nuevo bebé:

![My baby](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5r3urnt5tydcm5u68d9c.jpg)

Realmente me encanta ese nuevo aspecto, tengo un sticker de [TUX](https://en.wikipedia.org/wiki/Tux_%28mascot%29) guardado para el centro de la computadora y estoy esperando conferencias para conseguir el resto.

---

## Conclusión

Después de toda esa lucha, debes estar pensando, wow, este tipo realmente se está arrepintiendo de su decisión. Bueno, para nada, la computadora es mía. Gane la libertad de hacer lo que quiera con ella y tener una configuración de desarrollo bastante agradable que puedo llevar conmigo a todas partes. Las posibilidades de tener un entorno que me haga feliz de usar todos los días están simplemente ligadas a mi interés en aprender más sobre el sistema operativo.

Continuaré explorando y configurando, esta computadora estará conmigo durante muchos años y este viaje solo ha comenzado.

Espero les haya gustado este post, si les gustó o quieren contarme su propia historia por favor háganlo en los comentarios. Y no olviden compartirlo 🙂
