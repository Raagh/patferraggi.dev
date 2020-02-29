---
path: "{{year}}/{{month}}/{{slug}}/index"
title: Como encontré un problema con el Testing en Angular y decidí solucionarlo yo mismo
date: "2019-10-26"
description: ""
thumbnail: ./cover.jpeg
---

Hola, me llamo Patricio y, como tú, soy desarrollador de software. Hace aproximadamente un año comencé a trabajar con _Angular_ en mi trabajo actual, ya que quería volver a ser desarrollador full stack. Trabajé profesionalmente con Angular.js antes e hice algunos proyectos de prueba con Angular pero nada serio.

Con conocimientos en _C#/JavaScript_ hacer _TypeScript_ no fue un problema en absoluto. Me sentí como en casa y desarrollé las habilidades necesarias rápidamente. Tenía mi entorno de desarrollo en Visual Studio Code listo, así que seguí adelante y comencé a desarrollar utilizando TDD, como estaba acostumbrado a hacer en C#.

---

Creé mis primeras pruebas usando Jasmine y Karma, ya que viene por defecto con _Angular_ cuando noté un problema por primera vez. Tuve que ejecutar "ng test" para ejecutar pruebas en el proyecto, ver el resultado en la consola o abrir un navegador y ver los resultados en Karma. Si quería ejecutar una sola prueba por defecto, tenía que modificar el código para que solo ejecutara esa prueba.

Estaba completamente asombrado, no podía creer que así es como trabajaban los desarrolladores en _Angular_. El flujo de testing entero se sintió extraño, contraproducente y realmente me retrasó. Viniendo de Visual Studio, estaba tan acostumbrado a tener una interfaz de usuario interactiva agradable donde ves todas las pruebas: ejecutas la "Suite" entera o ejecutas tests individualmente y obtienes resultados inmediatos. Necesitaba algo similar para que _Angular_ funcionara tan eficientemente como lo hago en _C#_, pero no pude encontrarlo (WebStorm de Jetbrains tenía algo similar, pero yo soy fanático de VS Code y tampoco quería comprar una licencia de producto) .

Entonces, ¿qué decidí hacer? Construir mi propia solución.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/tmfv22164xb8ngg8i2gh.png)

Así es como mi extensión "Angular/Karma Test Explorer" se hizo realidad.

Con la extensión, puedes abrir un proyecto _Angular_ en Visual Studio Code e inmediatamente ver todas sus pruebas dentro del explorador.
También puedes ejecutar todo el conjunto de pruebas o pruebas individuales y ver los resultados de inmediato, incluso ver decoraciones en el archivo o ejecutar las pruebas directamente desde el archivo.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/7nsmr183g6szwk2ervrp.png)

Todo comenzó como un problema personal que tuve y no pude encontrar una solución, pero finalmente la gente comenzó a responder a la extensión. Comenzó a usarse en mi lugar de trabajo y en otras compañías, y la gente mostró su aprecio por el proyecto. Los usuarios comenzaron a solicitar funciones e incluso enviaron "pull requests" para cosas que jamas hubiese considerado yo.

![Alt Text](https://thepracticaldev.s3.amazonaws.com/i/fwg87ttoqs0zgiipo81f.png)

No era competente en _Angular_ o _TypeScript_ (la extensión esta hecha en _TypeScript_, así que ahora me siento mucho más confiado con el lenguaje), ni siquiera me consideraba un desarrollador senior, pero vi un problema y tomé el desafío personal de construir algo que yo y otras personas podrían disfrutar.

---

Y esta es la conclusión de este artículo. Como desarrolladores, creamos soluciones, y no importa las habilidades que tengas, probablemente ya hayas visto una característica faltante o un problema que no se está resolviendo. No esperes a que alguien lo arregle por vos, hacelo vos mismo. Ayuda a alguien más y aumenta tus propias habilidades en el proceso, te prometo que será muy divertido.

Si deseas contribuir al proyecto, puedes encontrarlo directamente en VSCode o en el Marketplace, antes de contribuir, echa un vistazo al repositorio de Github o si solo quieres conversar conmigo, no dudes en ponerte en contacto conmigo en Twitter. Gracias por tomarte el tiempo de leer esto y, con suerte, te aliente a comenzar a construir nuevos productos &#128512;.
