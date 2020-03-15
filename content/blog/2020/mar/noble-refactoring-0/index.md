---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-03-14"
title: El noble arte del refactoring
description: Parte 0
enTitle: The noble art of refactoring
enDescription: Part 0
enPostUrl: https://dev.to/patferraggi/the-noble-art-of-refactoring-part-0-2k58
thumbnail: ./cover.jpg
---

Por lo general, cuando estudiamos programación o desarrollamos nuestros propios proyectos, nunca nos damos cuenta de que este no es el flujo regular que vamos a seguir cuando trabajamos como parte de un equipo en un proyecto que se ha desarrollado a lo largo de los años, el 90% del tiempo vamos a estar trabajando en el código que ya está allí, el desarrollador original podría no estar más en el equipo, tal vez no hay documentación, tal vez no hay pruebas, hay muchas posibilidades diferentes aquí, pero dado que estaremos involucrados en este entorno es crucial saber cómo mejorar código existente, este proceso se llama _Refactoring_ o _Refactorización_.

## Introducción

Primero, comencemos con una definición:

> Un cambio realizado en la estructura interna del software para que sea más fácil de entender y más barato de modificar sin cambiar su comportamiento observable. - Martin Fowler

En resumen, refactorizar significa reestructurar el código existente sin cambiar la salida. Es posible que hayas escuchado el término "refactorización" ser utilizado vagamente para referirse a cualquier modificación de código existente. Sin embargo, la refactorización es en realidad una técnica basada en transformaciones que mejoran el código sin afectar el comportamiento.

Una consideración importante es que la refactorización no corrige errores intencionalmente, altera ninguna funcionalidad ni mejora directamente el rendimiento. Se supone que el código está funcionando antes de comenzar.

---

Esta será una serie de artículos puramente prácticos, profundizaremos en un ejemplo de código existente, lo refactorizaremos y luego agregaremos una nueva característica.

## El ejemplo

Para nuestra práctica, utilizaremos la [Gilded Rose Refactoring Kata](https://github.com/NotMyself/GildedRose), este es un ejemplo de código bastante malo hecho con el solo proposito de practicar nuestra habilidad de refactorizar. En nuestro caso, no vamos a usar la implementación original escrita en C#, ya que soy un desarrollador de C# que se está moviendo al mundo del frontend, decidí probar algo diferente y usar la versión _JavaScript_ de [este repositorio](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/js-jest) y como framework de testing vamos a utilizar [Jest](https://jestjs.io/), arranquemos.

## Requisitos

Afortunadamente, esta vez hay documentación de lo que debe hacer nuestro código.

> #### Gilded Rose Refactoring Kata
>
> Hola y bienvenidos al equipo de Gilded Rose. Como sabes, somos una pequeña posada con una
> ubicación privilegiada en una ciudad prominente dirigida por un amable posadero llamado
> Allison. También compramos y vendemos solo los mejores productos. Lamentablemente, nuestros
> bienes se degradan constantemente en calidad a medida que se acercan a su
> fecha de venta. Tenemos un sistema que actualiza nuestro inventario para nosotros. Era
> desarrollado por un tipo sin sentido del humor llamado Leeroy, que se mudó a un nuevo lugar para seguir nuevas
> aventuras. Tu tarea es agregar una nueva característica a nuestro sistema para que podamos
> comenzar a vender una nueva categoría de artículos. Primero una introducción a nuestro
> sistema:
>
> - Todos los artículos tienen un valor SellIn que indica la cantidad de días que tenemos
>   para vender el artículo
> - Todos los artículos tienen un valor de Quality que indica lo valioso que es el artículo
> - Al final de cada día, nuestro sistema reduce ambos valores para cada artículo
>
> Bastante simple, ¿verdad? Bueno, aquí es donde se pone interesante:
>
> - Una vez que la fecha de caducidad ha pasado, la Quality se degrada el doble de rápido
> - La Quality de un artículo nunca es negativa
> - "Agied Brie" en realidad aumenta en calidad cuanto más viejo se hace
> - La calidad de un artículo nunca supera los 50
> - "Sulfuras", siendo un artículo legendario, nunca tiene que ser vendido o disminuye
>   en calidad
> - "Los Backstages passes", como el queso "Agied Brie", aumentan la calidad a medida que se acerca la fecha de venga,
>   aumenta en 2 cuando hay 10 días o menos
>   y en 3 cuando hay 5 días o menos, pero la calidad cae a 0 después del
>   concierto
>
> Recientemente hemos firmado un acuerdo con un mago que actua como proveedor de artículos conjurados. Esto requiere un
> actualizar a nuestro sistema:
>
> - Los elementos "Conjured" se degradan en Calidad dos veces más rápido que los elementos normales
>
> Siéntase libre de hacer cualquier cambio en el método UpdateQuality y agregar cualquier
> nuevo código siempre y cuando todo siga funcionando correctamente. Sin embargo, no puede
> alterar la clase Item o la propiedad Items ya que pertenecen al duende
> en la esquina, quien te ira y te disparará ya que no
> cree en la propiedad del código compartido.
>
> Solo para aclarar, un artículo nunca puede tener una calidad
> por encima de 50, sin embargo, "Sulfuras" es un elemento legendario y como tal
> su calidad es 80 y nunca se altera.

## El código

```javascript
class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
      ) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (
            this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        this.items[i].sellIn = this.items[i].sellIn - 1
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != "Aged Brie") {
          if (
            this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
          ) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality =
              this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items
  }
}
```

No soy religioso, pero esto exige un ** ¡JESUCRISTO! **. Después del shock inicial, ¿qué modificamos primero?

** MALLLLLL! **

No modificamos nada, cuando estamos en una situación como esta, modificar el código directamente es una de las peores cosas que podemos hacer, ya que será muy difícil para nosotros saber si mantenemos el comportamiento original, se volvera una bolsa gigante de errores en poco tiempo. Entonces, primero escribimos algunas pruebas que capturen el comportamiento del código y luego procedemos con las modificaciones.

## Escribiendo las pruebas

Aquí tenemos dos enfoques, podemos comenzar a escribir una prueba para cada comportamiento esperado, solo posible porque tenemos la documentación, o podemos hacer una prueba basada en texto. Este tipo de prueba no es más que capturar la salida existente del código y usar esto para verificar cada vez que hacemos una modificación, este es un término llamado _Golden Master_.

Entonces comencemos con ese:

```javascript
it("should return correct result", () => {
  // The original items passed to the method
  const storeItems = [
    new Item("+5 Dexterity Vest", 10, 20),
    new Item("Aged Brie", 2, 0),
    new Item("Elixir of the Mongoose", 5, 7),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  ]
  // The result the code returned
  const expectedResult = [
    new Item("+5 Dexterity Vest", 9, 19),
    new Item("Aged Brie", 1, 1),
    new Item("Elixir of the Mongoose", 4, 6),
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
  ]
  const gildedRose = new Shop(storeItems)
  const items = gildedRose.updateQuality()

  expect(items).toStrictEqual(expectedResult)
})
```

Esta prueba compara los elementos originales que se pasaron al código funcionando, con el resultado que dio el mismo, gracias a esta prueba siempre podemos verificar que se mantiene el comportamiento existente.
Para estar más seguro de que mis cambios no alterarán el comportamiento, escribiré unas pruebas extras para los casos que no están representados correctamente en la entrada actual del método.

```javascript
it("for normal items quality should never be below 0", () => {
  const storeItems = [new Item("+5 Dexterity Vest", 10, 0)]
  const expectedResult = [new Item("+5 Dexterity Vest", 9, 0)]
  const gildedRose = new Shop(storeItems)
  const items = gildedRose.updateQuality()

  expect(items).toStrictEqual(expectedResult)
})

it("when the sellIn date passes, quality should degrade twice as fast", () => {
  const storeItems = [new Item("+5 Dexterity Vest", 0, 4)]
  const expectedResult = [new Item("+5 Dexterity Vest", -1, 2)]
  const gildedRose = new Shop(storeItems)
  const items = gildedRose.updateQuality()

  expect(items).toStrictEqual(expectedResult)
})

it("the quality of an item can never be more than 50", () => {
  const storeItems = [new Item("Aged Brie", 1, 50)]
  const expectedResult = [new Item("Aged Brie", 0, 50)]
  const gildedRose = new Shop(storeItems)
  const items = gildedRose.updateQuality()

  expect(items).toStrictEqual(expectedResult)
})

it("the quality of an aged brie should increase by 1", () => {
  const storeItems = [new Item("Aged Brie", 1, 0)]
  const expectedResult = [new Item("Aged Brie", 0, 1)]
  const gildedRose = new Shop(storeItems)
  const items = gildedRose.updateQuality()

  expect(items).toStrictEqual(expectedResult)
})

describe("Backstage passes", () => {
  it("increases in Quality as it's SellIn value approaches", () => {
    const storeItems = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 14, 0),
    ]
    const expectedResult = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 13, 1),
    ]
    const gildedRose = new Shop(storeItems)
    const items = gildedRose.updateQuality()

    expect(items).toStrictEqual(expectedResult)
  })

  it("Quality increases by 2 when there are 10 days or less", () => {
    const storeItems = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0),
    ]
    const expectedResult = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 9, 2),
    ]
    const gildedRose = new Shop(storeItems)
    const items = gildedRose.updateQuality()

    expect(items).toStrictEqual(expectedResult)
  })

  it("Quality increases by 3 when there are 5 days or less", () => {
    const storeItems = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0),
    ]
    const expectedResult = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 4, 3),
    ]
    const gildedRose = new Shop(storeItems)
    const items = gildedRose.updateQuality()

    expect(items).toStrictEqual(expectedResult)
  })

  it("Quality drops to 0 after concert", () => {
    const storeItems = [
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30),
    ]
    const expectedResult = [
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 0),
    ]
    const gildedRose = new Shop(storeItems)
    const items = gildedRose.updateQuality()

    expect(items).toStrictEqual(expectedResult)
  })
})
```

Esto puede parecer una gran preparación para cambiar algún código, pero al tomarnos nuestro tiempo y prepararnos adecuadamente antes de realizar los cambios, podemos tener la certeza de que no vamos a introducir errores con nuestra refactorización.

---

Sé que deseas comenzar a refactorizar de inmediato, pero sería demasiado en un solo artículo, en unos días comenzaremos y refactorizaremos todo el código desde cero, mientras tanto, te sugiero que tomes este código y las pruebas que hicimos hoy y las lleves a dar una vuelta, hace tu propia refactorización y compararemos con mi solución en el próximo artículo &#128512;.

Después de terminar con la refactorización, agregaremos la característica que solicitaron en la especificación, será pan comido, lo prometo.

Si te gustó esto, hacemelo saber en los comentarios y no te olvides de compartir, si tiene algunos comentarios o sugerencias sobre cómo tomar este ejemplo, no te olvide de comentar abajo.
Hasta la proxima.
