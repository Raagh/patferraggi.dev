---
path: "{{year}}/{{month}}/{{slug}}/index"
title: Vámonos a una aventura, una aventura funcional
date: "2020-01-06"
thumbnail: ./cover.jpg
---

Como probablemente sabrás si leíste mis artículos anteriores, no soy un gran conocedor de la Programación Funcional, estoy muy lejos de serlo. Toda mi experiencia en desarrollo se encuentra en las profundidades de la Programación Orientada a Objetos. Bueno, ya no más. Hace unas semanas decidí que quería ver qué eso de lo que hablan los programadores senior y experimentar por mi mismo si los supuestos beneficios de la programación funcional son ciertos o solo rumores.

## Como pronto descubriría, decirlo fue mucho mas fácil que hacerlo.

Existen tantos lenguajes funcionales que elegir uno para comenzar no fue una tarea fácil. Para sacarme las dudas, primero decidí leer el libro [Structure and Interpretation of Computer programs](https://web.mit.edu/alexmv/6.037/sicp.pdf) lo que me llevo a conocer la sintaxis de LISP y a apreciar la simplicidad de Clojure. Luego leí [Mostly adequate guide to functional programming](https://mostly-adequate.gitbooks.io/mostly-adequate-guide/) y me hizo pensar que quizás JavaScript podría ser suficiente para esta aventura. También resulta que soy un programador de C# en mi día a día, por lo que F# fue mencionado múltiples veces en distintas conversaciones.

Al final decidí tomar el camino difícil, necesitaba tener algo a mi lado que me golpease directo en la cara si siquiera pensase en hacer algo en un estilo orientado a objetos o estructurado, y así fue como el santo grial de la Programación Funcional se presento ante mi.

## Haskell

Un poco de contexto, esta es la primera vez que intento aprender algo remotamente parecido a la Programación Funcional, es la primera vez que intento aprender un lenguaje que no utiliza la conocida sintaxis estilo C y también es la primera vez que intento aprender un lenguaje sin tener un proyecto real para guiarme y ensuciarme las manos.

Está de mas aclarar que no fue un comienzo fácil, pasé horas buscando en foros y blogs, y llegué a la conclusión de que no existía una IDE o herramienta que todo desarrollador de Haskell utilizase. Si iba a recorrer este camino debería ingeniármelas solo. Lo más parecido que encontré fue [Haskell for mac IDE](http://haskellformac.com/), y después de pasar medio día luchando con instalaciones de VSCode que no funcionaban decidí abrir mi billetera y comprarla.

![Haskell](https://thepracticaldev.s3.amazonaws.com/i/72lqto1aiijvmcwbr5z5.jpg)

Como me sugirieron varias personas decidí seguir el libro [Learn you a Haskell for great good](http://learnyouahaskell.com/) y para ser perfectamente honesto, no me había sentido tan perdido y abrumado en años, a pesar de que entiendo los conceptos básicos de la Programación Funcional, las funciones puras, la transparencia referencias y demás, cada vez que quería hacer algo por mi cuenta sin leer el libro, mi mente se ponía en blanco. Yo no me rindo fácilmente, pero quedé sorprendido al darme cuenta lo lento que estaba progresando, tan lento que incluso llegue a expresar mi frustración en twitter preguntándole a otras personas si esto era normal o estaba haciendo algo mal.

![Meltdown](https://thepracticaldev.s3.amazonaws.com/i/z81liau0yfay0rhjtlz6.png)

Luego de luchar medio día más con la IDE de Haskell -en realidad 2 IDEs: IntelliJ con el plugin de Haskell para el desarrollo “Real” y Haskell For Mac para pruebas y usar el _REPL_- comencé a leer los comentarios que la gente me escribía y gracias a ellos conocí una gran cantidad de recursos extra:

- [Zero Bullshit Haskell](https://github.com/alpacaaa/zero-bullshit-haskell)
- [Haskell programming from first principles](https://haskellbook.com/)
- [Exercism.io Haskell Track](https://exercism.io/tracks/haskell)
- [Dive Into Haskell](https://github.com/politrons/Dive_into_Haskell)
- [Category theory book](https://bartoszmilewski.com/)
- [A Type of programming](https://atypeofprogramming.com/)

También recibí palabras de aliento que me hicieron dar cuenta de que mis sentimientos eran perfectamente normales. Fue en ese momento cuando me di cuenta: No me había sentido así desde que aprendí a programar, aprender Haskell es básicamente como aprender a hacer todo de nuevo.

No se pueden asignar variables, no hay loops, no se puede cambiar el estado de las variables, no hay clases ni objetos, ¿recursión? Ni siquiera sé cómo hacer un simple _hello world_.

Muy despacio, comencé a escribir mis propias funciones y a hacer un pequeño progreso:

![MyFunctions](https://thepracticaldev.s3.amazonaws.com/i/u2uzndrny114btn7baj6.png)

Y a pesar de que todavía no puedo escribir nada en la consola, simplemente porque no se cómo ya que no llegue a ello en los libros, eso no me detuvo para comenzar a modelar mi propio [SnakeGame](https://elgoog.im/snake/)

![SnakeGame Implementation](https://thepracticaldev.s3.amazonaws.com/i/nsbpocena561oan3zbj1.png)

---

Se lo que están pensando, ¿tenés algo positivo para contarme de ésta experiencia? No me estás vendiendo demasiado bien la aventura. Sólo te puedo comentar lo que note hasta ahora:

1. En vez de modelar objetos de dominio con complicadas clases y comportamientos con métodos en esos objetos, mi código fluye naturalmente hacia la implementación de funciones muy muy muy chicas, y es por estas pequeñas y combinables funciones que creo que sería sumamente difícil romper el [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)

2. En vez de escribir código que dicta los pasos para llevar acabo una acción, mi código simplemente define que es cada parte del dominio y como se comporta, se siente muy extraño.

3. La mayoría de los patrones de diseño que utilizo todo el tiempo parecen ser completamente inútiles, ¿porqué crearía una _Factory_ si simplemente puedo devolver una función? ¿porqué crearía varias _Strategy_ si simplemente puedo pasar funciones para reemplazar implementaciones?

4. El sistema de Tipos de Haskell es extremadamente inteligente, bastante más inteligente que los de otros lenguajes que conozco. Encontré en varias situaciones que Haskell mismo entiende qué quiero hacer y simplemente se mantiene fuera de mi camino, siempre y cuando las funciones tengan sentido.

Tengo que aceptar que esta es una de las tareas más difíciles que tuve en mucho tiempo, pero honestamente creo que esta aventura puede llevarme a conocer un lugar del que probablemente nunca me quiera ir. Siempre y cuando no me coma un dragón, estaré aquí escribiendo y compartiendo mis aventuras con cualquiera que esté interesado.
