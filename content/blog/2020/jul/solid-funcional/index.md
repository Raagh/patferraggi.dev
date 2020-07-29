---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-07-29"
title: ¿Los principios SOLID se aplican a la programación funcional?
description:
enTitle: Do the SOLID principles apply to Functional Programming?
enDescription:
enPostUrl: https://dev.to/patferraggi/do-the-solid-principles-apply-to-functional-programming-56lm
thumbnail: ./cover.jpeg
---

Ayer estuve navegando en una de las comunidades de desarrolladores en línea donde suelo pasar el rato y noté que había un debate muy intenso sobre de qué se trata escribir buen código. Como de costumbre, los términos [Patrones de diseño](https://en.m.wikipedia.org/wiki/Design_pattern), [Código limpio](https://en.m.wikipedia.org/wiki/Robert_C._Martin) y [SOLID](https://en.m.wikipedia.org/wiki/SOLID) eran lanzados en una lucha feroz de términos de programación. Estaba claro que el público era principalmente programadores orientados a objetos. De repente, alguien comenzó a hablar sobre Programación Funcional, yo al ser programador de OOP que está en su camino para absorber todo lo que pueda de la manera Funcional, me senti intrigado.

Esta persona argumentó que SOLID y los patrones de diseño son cosas de programación orientada a objetos (OOP) y que no se relacionan bien con la programación funcional (FP).

Este argumento quedó atrapado en mi cabeza, así que decidí escribir sobre él para expresar mi opinión personal. Dado que tengo dos opiniones diferentes sobre SOLID y Patrones de diseño, hoy, solo cubriré SOLID, aunque seguro cubriré los Patrones de diseño en un futuro cercano.

Comencemos con algunas introducciones.

---

## ¿Qué es SOLID?

> SOLID es un acrónimo mnemónico para cinco principios de diseño destinados a hacer que los diseños de software sean más comprensibles, flexibles y mantenibles

Fueron introducidos por primera vez por Robert C. Martin a principios de la década de 2000 en su paper [Principios de diseño y Patrones de diseño](https://fi.ort.edu.uy/innovaportal/file/2032/1/design_principles.pdf) y son los siguientes:

- Principio de responsabilidad única

- Principio abierto-cerrado

- Principio de sustitución de Liskov

- Principio de segregación de interfaz

- Principio de inversión de dependencias

## ¿Cómo se usan en OOP y FP?

Vayamos uno por uno y veamos cómo se aplican a ambos paradigmas.

### Principio de responsabilidad única

**"Un objeto solo debe tener una única responsabilidad, es decir, solo los cambios en una parte de la especificación del software deben poder afectar la especificación del objeto".**

Tradicionalmente, cuando las personas hablan sobre este principio, piensan en las clases (aunque la idea original proviene del desarrollo de UNIX), piensan en extraer el comportamiento en múltiples clases y manejar una separación adecuada de las preocupaciones.
Aunque los lenguajes de programación funcionales no tienen clases, el mismo principio es válido. Las funciones deben ser pequeñas piezas de código reutilizables que puedes componer libremente para crear un comportamiento complejo.

Esto se puede extraer de casi cualquier cosa, una vez que sus funciones son pequeñas, los módulos donde se ubican también deben formar un cierre cohesivo que solo hace una cosa y lo hace bien.

Mientras una función, clase o módulo tenga solo una razón para cambiar, entonces está aplicando este principio.

### Principio abierto-cerrado

**"Las entidades de software ... deberían estar abiertas para la extensión, pero cerradas para la modificación".**

Este principio generalmente se relaciona instantáneamente con la herencia. Una clase padre bien definida que tiene funcionalidad y los hijos de esta clase extienden o reutilizan la funcionalidad mencionada. En realidad, solo significa que deberíamos poder reutilizar y extender el código sin tener que modificar la implementación original.

En lugar de usar la herencia, la Programación Funcional logra esto usando dos herramientas. Composición para crear nuevos comportamientos a partir de funciones previamente definidas y funciones de orden superior para cambiar la funcionalidad en tiempo de ejecución. Por cierto, si estas interesado en leer más sobre estos temas, puedes consultar mi serie [Programación funcional para el desarrollador orientado a objetos](https://www.patferraggi.dev/blog/2020/jan/programacion-funcional-para-oop/).

### Principio de sustitución de Liskov

**"Los objetos en un programa deben ser reemplazables con instancias de sus subtipos sin alterar el funcionamiento de ese programa".**

Nuevamente, cuando las personas piensan en este principio generalmente la primera idea que se les ocurre es que si la clase de los padres tiene algún comportamiento, sus hijos no deberían romper ese comportamiento, pero este no es el único caso aplicable. LSP también se aplica en caso de que usemos programación genérica o paramétrica donde creamos funciones que funcionan en una variedad de tipos, todos tienen una verdad común que los hace intercambiables.

Este patrón es muy común en la programación funcional, donde se crean funciones que abarcan tipos polimórficos (también conocidos como genéricos) para garantizar que un conjunto de entradas se pueda sustituir sin problemas por otro sin ningún cambio en el código subyacente.

### Principio de segregación de interfaz

**"Muchas interfaces específicas del cliente son mejores que una interfaz de propósito general".**

Esta es fácil, pero muchas personas, incluidas las que me llamaron la atención sobre el tema, se apegan demasiado a la palabra "interfaz" y se refieren automáticamente al concepto de interfaces en lenguajes como C# o Java, piensan que si no tienes interfaces, entonces este principio no se puede aplicar.

En realidad, cada interacción entre componentes se realiza mediante una interfaz. Cuando utilizas funciones de un módulo, estas utilizando la interfaz eliminada de ese módulo, incluso si estamos en un lenguaje de tipo dinámico, esa interfaz todavía existe. El punto de esto es que la forma de crear módulos (o clases o interfaces o API o lo que sea) debe ser coherente, debe proporcionar una forma clara de hacer las cosas en lugar de muchas, y debe exponer solo lo que es necesario para que los usuarios puedan realizar la tarea específica.

### Principio de inversión de dependencia

**"Uno debe depender de abstracciones, [no] de concreciones".**

En lenguajes como C#, esto se logra mediante el uso de dos herramientas. Una es crear interfaces para definir contratos de una funcionalidad predefinida. El otro es usar la inyección de dependencias para que los usuarios de esa funcionalidad no creen instancias manuales de la clase concreta, sino que reciban una instancia de la interfaz a través de su constructor y solo llamen a los métodos apropiados en la instancia.

En la programación funcional, las abstracciones son la forma predeterminada de manejar el código, las funciones también son abstracciones, especialmente en la programación funcional donde nos preocupamos más por la "forma" de los datos en lugar de a qué tipo específico están conectados. Esto crea la posibilidad de cambiar libremente la implementación en tiempo de ejecución pasando funciones como parámetros a otras funciones o incluso devolviendo funciones como resultado del cálculo.

---

Espero que les haya gustado mi opinión sobre SOLID y la Programación Funcional. Si deseas ver una comparación directa entre implementaciones de patrones de diseño en OOP y FP, hágamelo saber a continuación en los comentarios
&#128512;

Como siempre, si te gustó esta publicación, compártela en las redes sociales.
