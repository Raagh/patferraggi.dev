---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-05-04"
title: Programación funcional para el desarrollador orientado a objetos
description: Parte 2
enTitle: Functional Programming for the Object-Oriented Developer
enDescription: Part 2
enPostUrl: https://dev.to/patferraggi/functional-programming-for-the-object-oriented-developer-part-2-3109
thumbnail: ./cover.png
---

Hola chicos, ¿cómo han estado? Ha pasado un tiempo desde que le dedicamos tiempo a la programación funcional, ¿verdad? incluso podrías haber pensado que perdí el interés y estoy aprendiendo algo nuevo, algo más genial, bueno, piénsalo de nuevo ahah.

Todavía estoy en este proceso y es largo, les digo, aprender a programar funcionalmente ha sido uno de los desafíos más difíciles que he tomado en bastante tiempo.

Hoy hablaremos de dos temas que a veces se pasan por alto al aprender programación funcional, Inmutabilidad y Recursión. Entonces, sin más preámbulos, comencemos.

---

## Inmutabilidad

Entonces, ¿qué queremos decir con inmutable? Veamos primero la definición formal:

> Un objeto inmutable es un objeto cuyo estado no puede modificarse después de su creación. Esto contrasta con un objeto mutable (objeto modificable), que se puede modificar después de crearlo.

Bien ... entonces **un objeto no puede cambiar después de ser creado**. Eso parece muy extraño, ¿verdad? Quiero decir, hacemos esto todo el tiempo, aquí hay un ejemplo:

```javascript
let john = { name: "John", age: 18 }
john.name = "Patricio"
```

Entonces, ¿qué hay exactamente de malo en esto? además del hecho de que ahora tenemos un objeto llamado `john` que en realidad se refiere a una persona diferente, el resto parece estar bien, pero ¿qué sucede cuando comienzas a pasar `john` a otras funciones?

```javascript
const newName = person => {
  person.name = "Patricio"
}

let john = { name: "John", age: 18 }
newName(john)
```

Ahora, **el usuario de la función `newName` debe tener en cuenta que el estado de `john` ha cambiado, ya no es el valor que originalmente configuró**, sino que una función lo cambió por debajo de sus pies sin que él lo supiera. Esto causa problemas muy simples pero difíciles de encontrar cuando este tipo de mutación ocurre por todo el lugar en objetos muy complejos. **Cuando comienzas a refactorizar y mover cosas, tu código ya no funciona como se esperaba porque la lógica dependía de la mutación del objeto**.

¿Cómo podemos solucionar esto? así es cómo:

```javascript
const newName = person => {
  return { ...person, name: "Patricio" }
}

let john = { name: "John", age: 18 }
const patricio = newName(john)
```

Ahora, cuando llamamos a la función `newName`, **se devuelve un nuevo objeto persona con todos los datos de `john` pero con el nombre diferente, se conserva el estado del objeto original `john`**.

En los lenguajes de programación funcionales, este comportamiento se aplica de forma predeterminada, muchos requieren una palabra clave específica para permitir la mutación en una estructura de datos o simplemente prohiben mutar un objeto por completo. Esto tiene los siguientes beneficios:

- **No es necesario mantener un seguimiento mental del estado de sus objetos**.
- No debes preocuparte por el cambio de estado cuando trabajes **en entornos _multi-threaded_, todos los subprocesos tendrán los mismos valores**.
- **Los tests se vuelven muy sencillos** ya que todo el estado que una función necesita para ser probada se pasa cuando se la llama y la prueba solo verifica el resultado.

¿Podemos hacer esto en JavaScript? Más o menos, no hay una característica de tiempo de ejecución que nos impida modificar el estado, una cosa que podemos comenzar a hacer es usar `const` tanto como podamos, esto no se aplicará a las propiedades internas de los objetos, pero es un comienzo. Si queremos profundizar en este camino, recomiendo una biblioteca de terceros como [Immutable JS](https://immutable-js.github.io/immutable-js/) o [Mori](https://github.com/swannodette/mori), con estas bibliotecas podemos tener listas, registros y otros tipos de estructuras de datos con la certeza de inmutabilidad.

## Recursión

Nuevamente, comencemos con la definición formal:

> La recursión ocurre cuando una cosa se define en términos de sí misma o de su tipo.

Espera, ¿que? 🤯

![Recursion](./recursion.gif)

En términos prácticos básicos, esto **significa que una función se llamará a sí misma hasta que finalice el proceso y pueda terminar sin problemas**. Quizás te estés preguntando, ¿por qué demonios querríamos hacer eso? Teniendo en cuenta lo que aprendimos sobre la inmutabilidad, echemos un vistazo a este ejemplo. Queremos imprimir los números del 0 al 999 en la consola:

```javascript
for (let i = 0; i < 1000; i++) {
  console.log(i)
}
```

¿Notaste el problema con esto? **no cumplimos nuestra promesa de no mutar. La variable `i` está cambiando su valor con cada vuelta de ese ciclo**. Sí, me escuchaste bien, si vamos a ser inmutables, entonces los bucles for son un negocio sucio. Podemos estar de acuerdo en que mientras el alcance mutable sea muy pequeño, deberíamos estar bien.

Pero, ¿qué sucede si trabajamos en un lenguaje de programación puramente funcional, cómo podríamos hacer eso? bueno aquí entra la recursión.

```javascript
const sumOneAndLog = sum => {
  const newSum = sum + 1
  console.log(newSum)
  if (newSum < 1000) sumOneAndLog(newSum)
}

sumOneAndLog(0)
```

Aquí definimos una función llamada `sumOneAndLog` que se define en términos de sí misma, siempre que la suma sea inferior a 1000, seguirá llamándose a sí misma y registrando el siguiente número. Este también es un caso muy común en cosas como el desarrollo de juegos, donde queremos ejecutar nuestro juego indefinidamente hasta que el juego termine, podemos calcular el estado del juego y seguir avanzando sin tener un estado global.

Una última consideración, en JavaScript, este tipo de comportamiento no está muy bien soportado. Si intenta hacer recursiones muy pesadas, probablemente explote la pila muy rápidamente, esto se debe al hecho de que los motores de JavaScript carecen de una función llamada [Optimización de llamadas de cola](https://en.wikipedia.org/wiki/Tail_call) que permite que esto se maneje sin problemas, una solución es usar algo como un [trampolín](http://raganwald.com/2013/03/28/trampolines-in-javascript.html).

---

## Conclusión

Hoy revisamos algunas características clave de la programación funcional que pueden hacer que nuestro JavaScript se ejecute mucho más seguro y sea más legible, lo que apunto con esta serie es que entiendan que no es una lucha sobre qué paradigma es mejor, son diferentes y se comportan mejor en diferentes situaciones.

Realmente creo que **un gran programador es el que es capaz de escribir código orientado a objetos, funcional y estructurado al mismo tiempo** (no hay mención a la programación lógica, lo siento, ajaj).

Si te gustó este artículo, por favor comparta y hágamelo saber a continuación en los comentarios, si crees que hay algo que me perdí, avísame &#128512;
