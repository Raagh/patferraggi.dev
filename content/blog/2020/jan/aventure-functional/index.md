---
path: "{{year}}/{{month}}/{{slug}}/index"
title: Vamonos hacia una aventura, una aventura funcional.
date: "2020-01-06"
description: ""
---

![adventure](./adventure.gif)

Como probablemente sabras si leíste mis artículos anteriores, yo no soy un conocedor de la Programación Funcional, estoy muy lejos de serlo. Toda mi experiencia en desarrollo se encuentra en las profundidades de la Programación Orientada a Objectos. Bueno, no mas, hace unas semanas decidí que quería ver que eso de lo que hablan todos los programadores senior, experimentar por mi mismo si los supuestos beneficios de la programación funcional son ciertos o solo rumores.

Como pronto descubriría, decirlo fue mucho mas fácil que hacerlo.

---

Existen tantos lenguajes funcionales que elegir uno para comenzar no fue una tarea fácil. Para sacarme las dudas primero decidí leer el libro [Structure and Interpretation of Computer programs](https://web.mit.edu/alexmv/6.037/sicp.pdf) lo cual me llevo a conocer la sintaxis de LISP y a apreciar la simplicidad de Clojure, luego lei [Mostly adequate guide to functional programming](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/) lo cual me hizo pensar que quizás JavaScript seria suficiente para esta aventura. También resulta que soy un programador de C# en mi dia a dia por lo que F# fue mencionado multiples veces en distintas conversaciones.

Al final decidí tomar el camino difícil, necesitaba tener a alguien a mi lado que me golpease directo en la cara si acaso si quiera pensaba en hacer algo en un estilo orientado a objectos o estructurado, asi fue como el santo grial de la Programación Funcional se presento ante mi.

## Haskell

Un poco de contexto, esta es la primera vez que intento aprender algo remotamente parecido a la Programación Funcional, es la primera vez que intento aprender un lenguaje que no utiliza la conocida sintaxis estilo C y también es la primera vez que intento aprender un lenguaje sin tener un proyecto real para guiarme y ensuciarme las manos.

Esta de mas aclarar que no fue un comienzo fácil, pase horas buscando en foros y blogs y llegue a la conclusion de que no existía una IDE o herramienta que todo desarrollador de Haskell utilizase, si iba a recorrer este viaje debería ingeniármelas solo. Lo mas parecido que encontré fue [Haskell for mac IDE](http://haskellformac.com/) asi que después de pasar mediodía luchando con instalaciones de VSCode que no funcionaban decidí abrir mi billetera y comprarla.

![Haskell](https://thepracticaldev.s3.amazonaws.com/i/72lqto1aiijvmcwbr5z5.jpg)

Como me sugirieron multiples personas decidí seguir el libro [Learn you a Haskell for great good](http://learnyouahaskell.com/) y para ser perfectamente honesto, no me había sentido tan perdido y abrumado en años, a pesar de que entiendo los conceptos básicos de la Programación Funcional, las funciones puras, la transparencia referencias y demás, cada vez que quería hacer algo por mi cuenta sin leer el libro, mi mente se ponía en blanco.

Yo no me rindo fácilmente, pero quede sorprendido al darme cuenta lo lento que estaba progresando, tan lento que incluso llegue a expresar mi frustración en twitter preguntándole a otra gente si esto era normal o estaba haciendo algo mal.

![Meltdown](https://thepracticaldev.s3.amazonaws.com/i/z81liau0yfay0rhjtlz6.png)

Luego de luchar medio dia mas con la IDE de Haskell -en realidad 2 IDEs, IntelliJ con el plugin the Haskell para el desarrollo "Real" y Haskell For Mac para pruebas y usar el REPL- comencé a leer los comentarios que la gente me escribía y gracias a ellos conocí una gran cantidad de recursos extra:

- [Zero Bullshit Haskell](https://github.com/alpacaaa/zero-bullshit-haskell)
- [Haskell programming from first principles](https://haskellbook.com/)
- [Exercism.io Haskell Track](https://exercism.io/tracks/haskell)
- [Dive Into Haskell](https://github.com/politrons/Dive_into_Haskell)
- [Category theory book](https://bartoszmilewski.com/)
- [A Type of programming](https://atypeofprogramming.com/)

También recibí palabras de aliento que me hicieron darme cuenta que mis sentimientos eran perfectamente normales. Fue en ese momento cuando me di cuenta: No me había sentido asi desde que aprendí a programar, aprender Haskell es básicamente como aprender a hacer todo de nuevo.

No se puede asignar variables, no hay loops, no se puede cambiar el estado de las variables, no hay clases ni objetos, recursion? ni siquiera se como hacer un simple hello world.

Muy despacio comencé a escribir mis propias funciones y a hacer un pequeño progreso:

![MyFunctions](https://thepracticaldev.s3.amazonaws.com/i/u2uzndrny114btn7baj6.png)

Y a pesar de que todavía no puedo escribir nada en la consola, simplemente porque no se como ya que no llegue a eso en los libros, eso no me detuvo para comenzar a modelar mi propio [SnakeGame](https://elgoog.im/snake/)

![SnakeGame Implementation](https://thepracticaldev.s3.amazonaws.com/i/nsbpocena561oan3zbj1.png)

---

Se lo que están pensando, tenes algo positivo para contarme de esta experiencia? no me estas vendiendo demasiado bien la aventura.

Solo te puedo comentar lo que note hasta ahora:

1. En vez de modelar objectos de dominio con complicadas clases, y comportamientos con métodos en esos objetos, mi código fluye naturalmente hacia la implementación de funciones muy muy muy chicas, y es por estas pequeñas y combinables funciones que creo que seria sumamente difícil romper el [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
2. En vez de escribir código que dicta los pasos para llevar acabo una acción, mi código simplemente define que es cada parte del dominio y como se comporta, se siente muy extraño.
3. La mayoría de los patrones de diseño que utilizo todo el tiempo parecen ser completamente inútiles, porque crearía una Factory si simplemente puedo devolver una función? porque crearía varias Strategy si simplemente puedo pasar funciones para reemplazar implementaciones?
4. El sistema de Tipos de Haskell es extremadamente inteligente, bastante mas inteligente que los de otros lenguajes que conozco. Me encontré en varias situaciones que Haskell mismo entiende que quiero hacer y simplemente se mantiene fuera de mi camino, siempre y cuando las funciones tengan sentido.

Tengo que aceptar que esto es una de las tareas mas difícil que tuve en mucho tiempo, pero honestamente creo que esta aventura puede llevarme a conocer un lugar del que probablemente nunca me quiera ir.

Siempre y cuando no me coma un dragon, estaré aquí escribiendo y compartiendo mis aventuras con cualquiera que este interesado
Unless I get eaten by a dragon I will be writing often to share what I have learned in this journey &#128512;
