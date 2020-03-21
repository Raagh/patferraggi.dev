---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-02-25"
title: Programación funcional para el desarrollador orientado a objetos
description: Parte 1
enTitle: Functional Programming for the Object-Oriented Developer
enDescription: Part 1
enPostUrl: https://dev.to/patferraggi/functional-programming-for-the-object-oriented-developer-g45
thumbnail: ./cover.png
---

Hola amigos!, ¿cuanto tiempo no?. Les pido mil disculpas si estuve ausente un tiempo y se quedaron con ganas de seguir aprendiendo programación funcional. O puede que estes pensando, ¿Otra vez escribiendo sobre programacional funcional?

![NotGoingToHappen](./not_going_to_happen.jpg)

Me encontraba trabajando muy duro en el re-diseño del sitio, espero que les guste.

Pero bueno ahora ya podemos volver a esta travesía, aprender programación funcional. En mí artículo introductorio hablamos un poco sobre conceptos básicos de la FP como que es una función en términos matemáticos,
que es la composición de funciones y porqué es importante, definimos funciones puras, todos conceptos que nos van a ser muy útiles hoy para seguir ahondando en el tema.

Si no leíste mi articulo anterior podes hacerlo [aquí](https://www.patferraggi.dev/blog/2020/jan/programacion-funcional-para-oop/).

Esta nueva parte es sumamente práctica, toneladas de ejemplos en _JavaScript_ así que arranquemos.

---

## Funciones como "Ciudadanos de Primer Orden"

¿Como? Vamos despacio, este concepto significa que en _JavaScript_ y en los lenguajes funcionales, las funciones son un elemento fundamental del lenguaje, al ser así estas pueden ser utilizadas como cualquier otro tipo de variable.

Podemos pasar funciones como parámetros a otras funciones, podemos devolver funciones como retorno de otras funciones. Un ejemplo clásico de esto son los _callbacks_ en _JavaScript_ :

```javascript
http.get("alguna/api/cualquiera", params, function(err, data, response) {
  if (!err) {
    // Acá estaría el código que
    // maneja una respuesta positiva de la API
  } else {
    console.log(err)
  }
})
```

En el ejemplo anterior, hacemos una llamada a una API, y le pasamos como parámetro una función, le decimos: "Cuando la llamada a esa API termine, por favor ejecuta esta función". Esto es posible solamente gracias a que las funciones son ciudadanos de primer orden y podemos pasarlas como un parámetro normal. ¿Cómo nos ayuda esto? volvamos a un tema que vimos en el artículo anterior.

## Volviendo a la composición de funciones

Como ya dijimos, la composición de funciones nos permite crear a partir de funciones genéricas y pequeñas, comportamientos mucho más complejos.  
Ahora, tradicionalmente la composición de funciones en javascript se logra ejecutando la función como podemos ver en el siguiente ejemplo:

```javascript
function isBiggerThanThree(value) {
  return value > 3
}

function mapBoolToHumanOutput(value) {
  return value ? "yes" : "no"
}

const result = mapBoolToHumanOutput(isBiggerThanThree(3))
```

Así logramos un resultado complejo en base a 2 pequeñas funciones, pero, ¿existe otra manera? SI ! podemos usar una función de ayuda como la siguiente:

```javascript
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x)
```

Esta función es clásica de los lenguajes funcionales, la mayoría ya la incluyen en la librería del lenguaje, _JavaScript_ lamentablemente no, afortunadamente librerias como [RamdaJs](https://ramdajs.com/docs/#compose) (o cualquier otra librería que implemente la [FantasyLand Specification](https://github.com/fantasyland/fantasy-land)) incorporan la funcion a _JavaScript_.
Esta función simplemente recibe muchas funciones como parámetros, y siempre y cuando cumpla con las reglas matemáticas de composición que vimos en el artículo anterior, devuelve una nueva función que tiene el comportamiento de todas las anteriores combinadas. Veamos un ejemplo:

```javascript
function isBiggerThanThree(value) {
  return value > 3
}

function mapBoolToHumanOutput(value) {
  return value ? "yes" : "no"
}

const biggerThanThreeAndMapOutput = compose(
  mapBoolToHumanOutput,
  isBiggerThanThree
)

biggerThanThreeAndMapOutput(3)
```

¿Esta buenisimo no? ¿y qué tal si también queremos logear los resultados?

```javascript
const biggerThanThreeAndMapOutputAndLogIt = compose(
  console.log,
  mapBoolToHumanOutput,
  isBiggerThanThree
)

biggerThanThreeAndMapOutputAndLogIt(3)
```

Si, asi como lo ves! composición de funciones y nada más. ¿Quien diría que la matemática nos iba a servir para algo no?.
También se lo que te estás preguntando, ¿qué sentido tiene esto? Bueno, unos cuantos:

1. Nos permite crear código más legible sin tener que estar concatenado 3 funciones una atrás de la otra para obtener un resultado
2. Nos permite crear esta función sin tener que ejecutarla, definimos una nueva función y podemos hacer con ella lo que queramos
3. Al ser las funciones en JavaScript y en los lenguajes funcionales, "Ciudadanos de primer orden"(_First Class Citizens_ en ingles) podemos pasar esta función a otras como parámetros,
   podemos componer distintas funciones en tiempo de ejecución y así alterar el funcionamiento de nuestro programa de acuerdo a las necesidades
4. Usando composición de funciones eliminamos la necesidad de definir variables intermedias, sin perder la legibilidad del código. Al momento de ejecutar nuestra función compuesta, el resultado es pasado de una función a otra automáticamente

Sigamos, hay mucho por descubrir &#128512;

## Currying

Me gusta la comida India pero no se si es el momento, ¿No te parece?. No, no, currying no es tirarle Curry a todo lo que se te ocurra.
Currying es un concepto importantísimo en la programación funcional, es el proceso inverso a la composición de funciones y se define de la siguiente manera:

_"Es la técnica que consiste en transformar una función que utiliza múltiples argumentos en una secuencia de funciones que utilizan un único argumento"_

Veamos un ejemplo para entenderlo:

```javascript
// Sin Currying
function sumTwoValues(x, y) {
  return x + y
}

sumTwoValues(2, 2) // = 4

// Con Currying
function sumTwoValues(x) {
  return y => {
    return x + y
  }
}

sumTwoValues(2)(2) // = 4
```

Uff pero ni ganas de hacer esto para cada función, bueno por suerte no hace falta, al igual que con _compose_, muchas librerías de JavaScript ya incorporan esto por default mediante la función de ayuda _curry_ de [RamdaJs](https://ramdajs.com/docs/#curry) podemos hacerlo siguiente:

```javascript
// Sin Currying
function sumTwoValues(x, y) {
  return x + y
}

sumTwoValues(2, 2) // = 4

// Con Currying - Usando R.curry de RamdaJs

const curryiedSum = R.curry(sumTwoValues)

curryiedSum(2)(2) // = 4
```

¿Cual es el beneficio de esto te preguntaras? Un poco mas, ya llegamos.

## Aplicación Parcial de una función

Aplicación parcial es simplemente ejecutar una función con menos argumentos de los que necesita y así crear un nuevo comportamiento. Nose si lo notaste pero cuando hacíamos _Currying_ básicamente estábamos agarrando una función que tiene 2 parametros y le pasabamos uno solo, ¿que paso con el otro parámetro?, veámoslo.

```javascript
// Usando R.curry de RamdaJs
function sumTwoValues(x, y) {
  return x + y
}

const curryiedSum = R.curry(sumTwoValues)

// curryiedSum es una función que recibe un solo parámetro,
// y devuelve una función que recibe el segundo parámetro,
// por lo tanto podríamos hacer esto

const addTen = curryiedSum(10)

// addTen es una nueva función, que al ejecutarla le va a sumar 10 al parámetro que nosotros elijamos.
// esto se conoce como aplicación parcial.
addTen(30) // = 40
```

Repasemos, esta función addTen es una nueva función, podemos hacer con ella lo que queramos, pasarla a otras partes del código o componerla con otras funciones.

---

Como dijimos antes la programación funcional es todo acerca de funciones, con cosas pequeñas y sencillas, lograr cosas grandes sin perder expresividad y adaptabilidad en nuestro software.
Hoy abarcamos una serie de conceptos fundamentales y muy interesantes, claves para nuestro viaje.

Nos van a permitir abrir puertas que antes no era posible o que requeriamos de inmensa fuerza fuerza para lograrlo.
En los próximos tutoriales seguiremos agregando nuevas herramientas a nuestro cinturón y utilizando estos elementos claves de nuevas maneras.

Por el momento, puedes estar orgulloso de ti mismo, si utilizas estos conocimientos básicos en tu dia a dia, ya estarás haciendo Programación Funcional.

![whatifFunctional](./what_if_functional.jpg)

Si te gusto este artículo, o si no te gusto, te pido que me lo hagas saber en los comentarios abajo. Si te quedaron dudas por favor tambien asi podemos dejar todo bien claro antes de pasar al siguiente tema.
