---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-04-13"
title: Crea un juego de la serpiente en JavaScript funcional
description: Parte 1
enTitle: Build a Snake Game in functional JavaScript
enDescription: Part 1
enPostUrl: https://dev.to/patferraggi/build-a-snake-game-in-functional-javascript-part-1-2cnh
thumbnail: ./cover.jpeg
---

Hola chicos, espero que les vaya bien y que estén aprendiendo nuevas habilidades mientras están en cuarentena. Si ese es el caso, entonces están de suerte porque hoy vamos a terminar nuestro querido _Snake Game_ escrito en _JavaScript_ funcional. Si no has leído el artículo anterior, puedes hacerlo [aquí](https://www.patferraggi.dev/blog/2020/mar/functional-snake-0/).

En nuestro artículo anterior, terminamos teniendo la `UI` lista y un pequeño modelo de nuestra serpiente. Hoy vamos a extender eso y completar el juego, comencemos por deshacernos de las partes feas.

## Efectos secundarios

**Todo software necesita producir efectos secundarios. Si se evitarían los efectos secundarios, no habría pruebas de que el programa realmente se ejecutó**. En nuestro caso, tenemos 2 tipos de efectos secundarios:

- El output del juego (lo que ves en la pantalla).
- El estado interno del juego que debe actualizarse (la posición de la serpiente, la manzana, etc.).

Los lenguajes de programación funcionales puros vienen con ciertas herramientas que nos ayudan a manejar esto de una manera elegante. _JavaScript_, por otro lado, no tiene estas herramientas, se pueden agregar usando librerias como [Ramda Fantasy](https://github.com/ramda/ramda-fantasy), pero en nuestro caso, vamos a usar un enfoque llamado `Functional Core Imperative Shell`, que básicamente dice que podemos tratar nuestro código en su mayoría funcional manteniendo todo lo puro en un lugar y todo lo que no es puro cerca de los límites de nuestro software, si deseas leer más al respecto, puedes consultar la publicación original [aquí](https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell).

Entonces, siguiendo ese enfoque, voy a ser muy explícito sobre qué partes del juego producen efectos secundarios y cuáles no.

### El output del juego

Este es nuestro módulo actual `UI`

```javascript
const r = require("ramda")
const { intercalate, update } = require("./helper")

const createWorld = (rows, columns, state) => {
  const repeatDot = r.repeat(".")

  const map = r.map(r.thunkify(repeatDot)(rows), repeatDot(columns))

  return r.pipe(addSnake(state), addApple(state))(map)
}

const addSnake = state => r.pipe(...r.map(update("X"), state.snake))

const addApple = state => update("O")(state.apple)

const displayWorld = matrix => {
  console.clear()
  console.log(intercalate("\r\n", r.map(intercalate(" "), matrix)))
}

const display = r.curry((rows, columns, state) => {
  return r.pipe(createWorld, displayWorld)(rows, columns, state)
})

module.exports = {
  display,
}
```

Si miras este código, solo hay un único lugar donde producimos efectos secundarios y ese es el procedimiento `displayWorld`:

```javascript
const displayWorld = matrix => {
  console.clear()
  console.log(intercalate("\r\n", r.map(intercalate(" "), matrix)))
}
```

El resto del código toma parametros de entrada y produce resultados, eso es todo.

### El estado interno del juego que necesita ser actualizado

Este es el archivo `index.js` desde donde se inicia nuestro juego:

```javascript
const COLUMNS = 15
const ROWS = 15
const SPEED = 125
let uglyMutableState = initialState

const displayState = display(COLUMNS, ROWS)

const runGameLoop = () => {
  setInterval(() => {
    displayState(uglyMutableState)
  }, SPEED)
}

runGameLoop()
```

Como puedes ver aquí, tomamos el estado inicial del juego y luego tenemos un intervalo que se ejecuta cada pocos segundos y muestra constantemente el mundo del juego, **en el futuro aquí tendremos que llamar a la lógica para crear un nuevo estado basado en el anterior y actualizar nuestra variable `uglyMutableState`**. Vamos a mantener pura toda la lógica del juego y solo modificaremos esta variable de estado dentro de este archivo.

**En un lenguaje de programación funcional, haríamos esto con `Recursión` pero dado que los motores de _JavaScript_ carecen de `Tail Call Optimization`, hacer esto aquí volaría la pila casi de inmediato**, tendríamos que usar algunos hacks como devolver funciones sobre funciones para evitar este problema, pero pensé que en este punto era más fácil ser pragmático y seguir el enfoque mencionado anteriormente.

## Obteniendo input

Obtener información es una de esas cosas que modificará nuestro estado, específicamente el estado que dice dónde debe moverse la serpiente.

```javascript
// index.js
const setupInput = () => {
  readline.emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") process.exit()

    const options = {
      UP: addMove(direction.NORTH),
      LEFT: addMove(direction.WEST),
      DOWN: addMove(direction.SOUTH),
      RIGHT: addMove(direction.EAST),
    }

    const move = options[key.name.toUpperCase()]
    uglyMutableState = move(uglyMutableState)
  })
}

// snake.js
const direction = {
  NORTH: point(0, -1),
  SOUTH: point(0, 1),
  WEST: point(-1, 0),
  EAST: point(1, 0),
}

const initialState = {
  snake: [point(4, 3)],
  apple: point(5, 5),
  move: direction.EAST,
}

const addMove = r.curry((direction, state) =>
  isValidMove(direction, state.move) ? { ...state, move: direction } : state
)

// Comprueba que la serpiente siempre se mueve hacia adelante y
// no pueda cambiar a la dirección opuesta
const isValidMove = (direction, move) =>
  direction.x + move.x !== 0 && direction.y + move.y !== 0
```

Esta función lee los eventos del teclado y solo agrega una nueva dirección a nuestro estado mutable. Puedes ver que `addMove` y `isValidMove` no mutan nada, `addMove` recibe un estado y produce uno nuevo con la nueva dirección de nuestra serpiente, observa cómo agregamos una propiedad llamada `move` a nuestro estado inicial y cómo modelamos las direcciones usando la estructura `point` definida en el artículo anterior.

## La serpiente

Ahora queremos calcular el lugar donde la serpiente estará en cada intervalo de nuestro ciclo de juego **es decir mover la serpiente**. Entonces hagamos eso:

```javascript
const nextSnake = r.curry((cols, rows, state) => {
  return willCrash(cols, rows, state)
    ? initialState
    : {
        ...state,
        snake: willEat(nextHead(cols, rows, state), state.apple)
          ? [nextHead(cols, rows, state), ...state.snake]
          : [nextHead(cols, rows, state), ...r.dropLast(1, state.snake)],
      }
})
```

Imagina que ya definimos todas las funciones utilizadas aquí, vamos una por una, primero, preguntamos si la serpiente se estrellará contra alguna parte de su cuerpo, si lo hace, devolveremos el estado inicial para que el juego comience nuevamente, si no se estrella, entonces devolvemos un nuevo estado. Dentro del nuevo estado, revisamos nuevamente, ¿la serpiente se va a comer la manzana? en caso afirmativo, movemos la serpiente y agregamos un punto más en su cabeza para que la serpiente crezca. Si, por otro lado, la serpiente no se come la manzana, entonces agregamos un punto en la cabeza de la serpiente y retiramos uno de la parte posterior para dar la impresión de que la serpiente se mueve sin crecer. Ahora echemos un vistazo a esas funciones que faltaba definir:

```javascript
const willEat = r.equals
const willCrash = (cols, rows, state) =>
  r.find(r.equals(nextHead(cols, rows, state)))(state.snake)

const nextHead = (cols, rows, { move, snake }) =>
  point(
    modulo(cols)(r.head(snake).x + move.x),
    modulo(rows)(r.head(snake).y + move.y)
  )
```

`willEat` sólo comprueba si los objetos son iguales, por lo que podemos pasar la función [equals](https://ramdajs.com/docs/#equals) de ramda.js utilizando la notación `point-free`.
`nextHead` tomará la cabeza de la serpiente y la dirección actual y simplemente creará un nuevo punto al lado. Aquí usamos 'módulo' para que cuando la serpiente llegue a un lado del mapa, salga por el otro.
`willCrash` comprueba si la nueva cabeza de la serpiente coincidirá con cualquier punto del cuerpo.

## La manzana

Ahora que la serpiente se está moviendo, podemos verificar si la cabeza de la serpiente se va a comer la manzana y si ese es el caso, generamos un nuevo estado donde la manzana está en una nueva posición aleatoria.

```javascript
const nextApple = r.curry((cols, rows, state) =>
  willEat(r.head(state.snake), state.apple)
    ? { ...state, apple: point(randomPos(cols), randomPos(rows)) }
    : state
)
```

Vale la pena aclarar que aquí técnicamente no estamos haciendo programación funcional, ya que `nextApple` producirá diferentes manzanas con la misma entrada usando la función `randomPos`.

## Armando nuestra lógica de juego

Ahora finalmente tenemos todo lo que necesitamos para armar nuestra lógica de juego, ¿cómo vamos a hacer eso? vamos a **crear una función que recibe el estado actual y calcula la nueva** en función de las funciones que acabamos de definir.

```javascript
const step = r.curry((cols, rows, state) =>
  r.pipe(nextSnake(cols, rows), nextApple(cols, rows))(state)
)
```

Como puede ver, primero creamos la serpiente, luego creamos la manzana y devolvimos el estado calculado. Ahora tenemos que llamar a esto desde nuestro `index.js` impuro

```javascript
const COLUMNS = 15
const ROWS = 15
const SPEED = 125
let uglyMutableState = initialState

const setupInput = () => {
  readline.emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)
  process.stdin.on("keypress", (str, key) => {
    if (key.ctrl && key.name === "c") process.exit()

    const options = {
      UP: addMove(direction.NORTH),
      LEFT: addMove(direction.WEST),
      DOWN: addMove(direction.SOUTH),
      RIGHT: addMove(direction.EAST),
    }

    const move = options[key.name.toUpperCase()]
    uglyMutableState = move(uglyMutableState)
  })
}

const displayState = display(COLUMNS, ROWS)
const nextState = step(COLUMNS, ROWS)

const runGameLoop = () => {
  setInterval(() => {
    displayState(uglyMutableState)
    uglyMutableState = nextState(uglyMutableState)
  }, SPEED)
}

setupInput()
runGameLoop()
```

Ahora puedes ver lo que quise decir acerca de que nuestro estado de juego es impuro, en cada ciclo obtenemos el nuevo estado y actualizamos nuestro estado mutable dentro de nuestro índice. Vamos a ver el resultado final, ¿de acuerdo?

![gamerunning](https://media.giphy.com/media/j77lvKqWHyMQPhH1qL/giphy.gif)

Ese es un juego bastante bonito, ¿verdad? &#128512;.

## Conclusión

Este ejemplo tiene algunas advertencias. Está claro que podríamos haber sido más funcionales si hubiéramos querido.

- Podríamos haber incorporado tipos de datos algebraicos de ramda-fantasy.
- Usar funciones en todas partes usando `r.merge` en lugar de destrucción de objetos y `r.ifElse` en lugar de operadores ternarios.
- Usar hacks para poder hacer recursión en lugar de usar `setInterval`.
- Usar `monads` para IO.

Pero creo que **el punto de hacer _JavaScript_ de una manera funcional es que no sientas la presión inmediata de hacer todo como un lenguaje como _Haskell_ te obligaría a hacer**. Creo que es una buena forma de practicar la programación funcional en un lenguaje que no es estrictamente funcional.

Realmente espero que hayas disfrutado este pequeño tutorial, fue muy difícil al principio, pero lentamente creo que empiezo a entender los conceptos básicos de la programación funcional, espero que tú también lo hagas. Si te gustó este artículo, compártelo y avísame a continuación en los comentarios. Si tienes alguna duda o necesitas ayuda, no dudes en ponerte en contacto conmigo.
