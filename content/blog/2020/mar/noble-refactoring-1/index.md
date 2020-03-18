---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-03-17"
title: El noble arte del refactoring
description: Parte 1
enTitle: The noble art of refactoring
enDescription: Part 1
enPostUrl: https://dev.to/patferraggi/the-noble-art-of-refactoring-part-1-1d1b
thumbnail: ./cover.jpeg
---

¿Hey, como estas? Espero que estuvieras esperando para ver cómo hacemos esta refactorización. Si no has leido el artículo anterior, definitivamente deberías hacerlo en [este link](https://www.patferraggi.dev/blog/2020/mar/noble-refactoring-0/), ya que hoy haremos la refactorización y agregaremos esa `feature` pendiente en nuestro backlog.

---

## La refactorización

Entonces, sin más preámbulos, comencemos.
Primero, no se vos, pero a mi no me gusta ese `for loop` y acceder a los elementos mediante _i_, así que eliminemos eso usando un `forEach` para hacer que el código sea mas claro.

```javascript
this.items.forEach(item => {
  if (item.name != "Sulfuras, Hand of Ragnaros") {
    item.sellIn = item.sellIn - 1
  }
  if (
    item.name != "Aged Brie" &&
    item.name != "Backstage passes to a TAFKAL80ETC concert"
  ) {
    if (item.quality > 0) {
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.quality = item.quality - 1
      }
    }
  } else {
    if (item.quality < 50) {
      item.quality = item.quality + 1
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            item.quality = item.quality + 1
          }
        }
      }
    }
  }
  if (item.sellIn < 0) {
    if (item.name != "Aged Brie") {
      if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1
          }
        }
      } else {
        item.quality = item.quality - item.quality
      }
    } else {
      if (item.quality < 50) {
        item.quality = item.quality + 1
      }
    }
  }
})
```

Ahora, me gustaría extraer cada expresión booleana en su propia variable para que quede de manera explícita, esto se llama [Extraer Variable](https://refactoring.guru/extract-variable) y de esta manera podemos evitar tener que llevar toda esa complejidad dentro de la cabeza.
Al dar nombres significativos a las expresiones, el código se vuelve mas limpio automáticamente, si te interesa el código limpio o `clean code`, te recomiendo que leas mi artículo anterior, puedes encontrarlo [aquí](https://dev.to/patferraggi/5-clean-code-technologies-you-can-start-doing-today-2ifh).
También me gustaría cambiar los aumentos y disminuciones por algo como ++ y -.

```javascript
this.items.forEach(item => {
  const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros"

  if (!isSulfuras) {
    item.sellIn--
  }

  const isAgedBrie = item.name == "Aged Brie"
  const isBackstagePasses =
    item.name == "Backstage passes to a TAFKAL80ETC concert"
  const isQualityBiggerThan0 = item.quality > 0
  const isQualityLessThan50 = item.quality < 50
  // notice how I changed this 2 properties so
  // they look more to what we are expecting from them
  const tenDaysOrLessToSell = item.sellIn <= 10
  const fiveDaysOrLessToSell = item.sellIn <= 5
  const areNoMoreDaysToSell = item.sellIn < 0

  if (!isAgedBrie && !isBackstagePasses) {
    if (isQualityBiggerThan0) {
      if (!isSulfuras) {
        item.quality--
      }
    }
  } else {
    if (isQualityLessThan50) {
      item.quality++
      if (isBackstagePasses) {
        if (tenDaysOrLessToSell) {
          if (isQualityLessThan50) {
            item.quality++
          }
        }
        if (fiveDaysOrLessToSell) {
          if (isQualityLessThan50) {
            item.quality++
          }
        }
      }
    }
  }

  if (areNoMoreDaysToSell) {
    if (!isAgedBrie) {
      if (!isBackstagePasses) {
        if (isQualityBiggerThan0) {
          if (!isSulfuras) {
            item.quality--
          }
        }
      } else {
        item.quality = 0
      }
    } else {
      if (isQualityBiggerThan0) {
        item.quality++
      }
    }
  }
})
```

Mucho mejor, aunque la lógica sigue siendo muy fea, ya comenzamos a ver algo de expresividad en el código. Todas las pruebas estan en `verde` así que sigamos adelante.
Ahora, me gustaría comenzar a unificar `ifs`, esto es parte de [Simplificar Expresiones Condicionales](https://refactoring.guru/refactoring/techniques/simplifying-conditional-expressions), como ya puedes ver tenemos algunas líneas de código como la siguiente:

```javascript
if (tenDaysOrLessToSell) {
  if (isQualityLessThan50) {
    item.quality++
  }
}
```

Como solo hay una ruta para que el código siga al ingresar a este bloque, podemos unificar esos `ifs` en algo como esto:

```javascript
if (tenDaysOrLessToSell && isQualityLessThan50) {
  item.quality++
}
```

así que unifiquemos todos los `ifs` que podamos:

```javascript
this.items.forEach(item => {
  const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros"

  if (!isSulfuras) {
    item.sellIn--
  }

  const isAgedBrie = item.name == "Aged Brie"
  const isBackstagePasses =
    item.name == "Backstage passes to a TAFKAL80ETC concert"
  const isQualityBiggerThan0 = item.quality > 0
  const isQualityLessThan50 = item.quality < 50
  // notice how I changed this 2 properties so
  // they look more to what we are expecting from them
  const tenDaysOrLessToSell = item.sellIn <= 10
  const fiveDaysOrLessToSell = item.sellIn <= 5
  const areNoMoreDaysToSell = item.sellIn < 0
  const isNormalItem = !isAgedBrie && !isBackstagePasses && !isSulfuras

  if (isNormalItem) {
    if (isQualityBiggerThan0) {
      item.quality--
    }
  } else if (isQualityLessThan50) {
    item.quality++
    if (isBackstagePasses) {
      if (tenDaysOrLessToSell) {
        item.quality++
      }

      if (fiveDaysOrLessToSell) {
        item.quality++
      }
    }
  }

  if (areNoMoreDaysToSell) {
    if (!isAgedBrie) {
      if (!isBackstagePasses) {
        if (isQualityBiggerThan0 && !isSulfuras) {
          item.quality--
        }
      } else {
        item.quality = 0
      }
    } else if (isQualityBiggerThan0) {
      item.quality++
    }
  }
})
```

Como puedes ver, después de unificar todos los `ifs`, algunos patrones comunes comenzaron a aparecer y hacen notar que cierta lógica para las expresiones booleanas se encuentra duplicada en muchas partes de este método, por lo que las extraeremos.

```javascript
const isNormalItem = !isAgedBrie && !isBackstagePasses && !isSulfuras
```

Una vez que llegamos a este punto, nos damos cuenta de que hay algunos problemas con este código, básicamente lo que está sucediendo es que tenemos lógica para múltiples casos dispersos por todo el método, estamos verificando `Brie` y `Backstage passes` en muchos lugares diferentes, debemos organizar esa lógica con una refactorización similar a [Consolidar Expresiónes Condicionales](https://refactoring.guru/consolidate-conditional-expression). Este será un gran movimiento, pero hará que nuestro código sea increíblemente más fácil de leer.

```javascript
    this.items.forEach(item => {
      const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros";

      if (!isSulfuras) {
        item.sellIn--;
      }

      const isAgedBrie = item.name == "Aged Brie";
      const isBackstagePasses =
        item.name == "Backstage passes to a TAFKAL80ETC concert";
      const isQualityBiggerThan0 = item.quality > 0;
      const isQualityLessThan50 = item.quality < 50;
      const tenDaysOrLessToSell = item.sellIn <= 10;
      const fiveDaysOrLessToSell = item.sellIn <= 5;
      const areNoMoreDaysToSell = item.sellIn < 0;
      const isNormalItem = !isAgedBrie && !isBackstagePasses && !isSulfuras;

      if (isNormalItem) {
        if (isQualityBiggerThan0) {
          item.quality--;

          if (areNoMoreDaysToSell) {
            item.quality--;
          }
        }
      } else if (isBackstagePasses) {
        item.quality++;
        if (tenDaysOrLessToSell) {
          item.quality++;
        }

        if (fiveDaysOrLessToSell) {
          item.quality++;
        }

        if (areNoMoreDaysToSell) {
          item.quality = 0;
        }
      } else if (isAgedBrie && isQualityLessThan50) {
        item.quality++;
      }
```

Como puedes ver ahora, está bastante claro lo que está sucediendo, un artículo puede ser `Sulfuras` que no se preocupa por la `Quality` o `SellIn`, puede ser un `Normal Item`, puede ser `Backstage Passes` pasa o puede ser `Aged Brie`, cada uno de esos casos tiene su lógica contenida en su propio `if`. Aún queda trabajo por hacer.

¿Por qué no continuamos extrayendo los diferentes comportamientos en funciones separadas?, para ser claros, también podría hacer una orientación clásica de objetos y separar los comportamientos en una jerarquía de clases con un `factory design pattern` para hacer una refactorización como [Reemplazar Condicional con Polimorfismo](https://refactoring.guru/replace-conditional-with-polymorphism) pero pensé que ya que estamos usando _JavaScript_ sigamos usando funciones.

```javascript
const calculateQualityDifferenceNormalItem = ({ sellIn, quality }) => {
  const isQualityBiggerThan0 = quality > 0
  const areNoMoreDaysToSell = sellIn < 0

  if (isQualityBiggerThan0 && areNoMoreDaysToSell) return -2
  if (isQualityBiggerThan0) return -1

  return 0
}

const calculateQualityDifferenceBackstagePasses = ({ sellIn, quality }) => {
  const tenDaysOrLessToSell = sellIn <= 10
  const fiveDaysOrLessToSell = sellIn <= 5
  const areNoMoreDaysToSell = sellIn < 0

  if (areNoMoreDaysToSell) return -quality
  if (fiveDaysOrLessToSell) return +3
  if (tenDaysOrLessToSell) return +2

  return +1
}

const calculateSellinDifference = ({ sellIn, name }) => {
  const isSulfuras = name == "Sulfuras, Hand of Ragnaros"
  return !isSulfuras ? -1 : 0
}
```

Observa cómo también intenté eliminar un poco la mutación de estado haciendo que estas funciones fueran puras simplemente procesando el `Quality` o `SellIn` y devolviendo un resultado sin modificar el item en sí. Ahora nuestro método `updateQuality` se ve así:

```javascript
  updateQuality() {
    this.items.forEach(item => {
      item.sellIn += getUpdatedSellin(item);

      const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros";
      const isAgedBrie = item.name == "Aged Brie";
      const isBackstagePasses =
        item.name == "Backstage passes to a TAFKAL80ETC concert";
      const isQualityLessThan50 = item.quality < 50;
      const isNormalItem = !isAgedBrie && !isBackstagePasses && !isSulfuras;

      if (isNormalItem) {
        item.quality += getUpdatedQualityNormalItem(item);
      } else if (isBackstagePasses) {
        item.quality += getUpdatedQualityBackstagePasses(item);
      } else if (isAgedBrie && isQualityLessThan50) {
        item.quality++;
      }
    });

    return this.items;
  }
```

Ahora, hagamos lo mismo y extraigamos la lógica con respecto al `Quality`, cambiemos ese `foreach` por un `map`, y veamos la version final del método `updateQuality`:

```javascript
class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

const calculateQualityDifferenceNormalItem = ({ sellIn, quality }) => {
  const isQualityBiggerThan0 = quality > 0
  const areNoMoreDaysToSell = sellIn < 0

  if (isQualityBiggerThan0 && areNoMoreDaysToSell) return -2
  if (isQualityBiggerThan0) return -1

  return 0
}

const calculateQualityDifferenceBackstagePasses = ({ sellIn, quality }) => {
  const tenDaysOrLessToSell = sellIn <= 10
  const fiveDaysOrLessToSell = sellIn <= 5
  const areNoMoreDaysToSell = sellIn < 0

  if (areNoMoreDaysToSell) return -quality
  if (fiveDaysOrLessToSell) return +3
  if (tenDaysOrLessToSell) return +2

  return +1
}

const calculateSellinDifference = ({ sellIn, name }) => {
  const isSulfuras = name == "Sulfuras, Hand of Ragnaros"
  return !isSulfuras ? -1 : 0
}

const calculateQualityDifference = item => {
  const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros"
  const isAgedBrie = item.name == "Aged Brie"
  const isBackstagePasses =
    item.name == "Backstage passes to a TAFKAL80ETC concert"
  const isQualityLessThan50 = item.quality < 50
  const isNormalItem =
    !isAgedBrie && !isBackstagePasses && !isSulfuras && !isConjuredItem

  if (isNormalItem) return calculateQualityDifferenceNormalItem(item)
  if (isBackstagePasses) return calculateQualityDifferenceBackstagePasses(item)
  if (isAgedBrie && isQualityLessThan50) return +1

  return 0
}

class Shop {
  constructor(items = []) {
    this.items = items
  }

  updateQuality() {
    return this.items.map(item => {
      item.sellIn += calculateSellinDifference(item)
      item.quality += calculateQualityDifference(item)

      return item
    })
  }
}
```

Eso es todo, ahora que estamos aqui ya podemos comenzar a trabajar en la parte de agregar la nueva funcionalidad.

## Agregar la función

¿De qué se trataba esta funcionalidad?

> Recientemente hemos firmado un proveedor de artículos conjurados. Esto requiere una actualización de nuestro sistema:
> Los elementos `Conjured` se degradan en calidad dos veces más rápido que los elementos normales

¿Qué cambiamos primero?

** INCORRECTO **

Primero, escribimos una prueba.

```javascript
it("the quality of conjured items should decrease twice as fast", () => {
  const storeItems = [new Item("Conjured Mana Cake", 10, 20)]
  const expectedResult = [new Item("Conjured Mana Cake", 9, 18)]
  const gildedRose = new Shop(storeItems)
  const items = gildedRose.updateQuality()

  expect(items).toStrictEqual(expectedResult)
})
```

Obviamente, esto fallará, un poco de Test Driven Development para darnos seguridad. Ahora podemos comenzar a agregar la nueva funcionalidad de manera segura.

- Agregamos una forma de buscar elementos conjurados, esos elementos tendrán la palabra `Conjured` en su nombre, así que:

```javascript
const isConjuredItem = item.name.includes("Conjured")
```

- Declaramos explícitamente en nuestro código que los elementos conjurados no son elementos normales al hacer lo siguiente:

```javascript
const isNormalItem =
  !isAgedBrie && !isBackstagePasses && !isSulfuras && !isConjuredItem
```

- Agregamos la condición para calcular la diferencia en `Quality`, aquí solo reutilizamos código para hacernos la vida mucho más fácil:

```javascript
if (isConjuredItem) return calculateQualityDifferenceNormalItem(item) * 2
```

- Montamos todo junto en el método que calcula la diferencia de `Quality`:

```javascript
const calculateQualityDifference = item => {
  const isSulfuras = item.name == "Sulfuras, Hand of Ragnaros"
  const isAgedBrie = item.name == "Aged Brie"
  const isConjuredItem = item.name.includes("Conjured")
  const isBackstagePasses =
    item.name == "Backstage passes to a TAFKAL80ETC concert"
  const isQualityLessThan50 = item.quality < 50
  const isNormalItem =
    !isAgedBrie && !isBackstagePasses && !isSulfuras && !isConjuredItem

  if (isNormalItem) return calculateQualityDifferenceNormalItem(item)
  if (isBackstagePasses) return calculateQualityDifferenceBackstagePasses(item)
  if (isAgedBrie && isQualityLessThan50) return +1
  if (isConjuredItem) return calculateQualityDifferenceNormalItem(item) * 2

  return 0
}
```

- Corremos las pruebas

![prueba verde](https://dev-to-uploads.s3.amazonaws.com/i/quibo81aolj60j9yu2zt.png)

## ¡HEMOS TERMINADO!

Felicitaciones, después de largas horas refactorizando este código, agregamos la función especificada, no solo eso, sino que aumentamos mucho la calidad general del software.

Si estás interesado en refactorizar, te recomiendo [Refactorización: Mejora del diseño del código existente](https://www.amazon.com/-/es/Martin-Fowler/dp/0134757599/ref=pd_sbs_14_t_0/133-9591133-9013653?_encoding=UTF8&pd_rd_i=0134757599&pd_rd_r=6d5cfc6d-3bc8-44ef-a4df-4926f04f8adf&pd_rd_w=iZeJC&pd_rd_wg=582cX&pf_rd_p=5cfcfe89-300f-47d2-b1ad-a4e27203a02a&pf_rd_r=3VA8TRMT2V5QYYG5JJ3N&psc=1&refRID=3VA8TRMT2V5QYYG5JJ3N) por Martin Fowler o si prefieres algo más interactivo puedes ver [Refactoring Guru](https://refactoring.guru/). Ambos lugares contienen muchas técnicas excelentes para mejorar el código existente.

Espero que hayas disfrutado este artículo, fue un trabajo duro refactorizar ese desastre, pero creo que hicimos un gran trabajo, y sé lo que estás pensando, ¿por qué usaste funciones libres en lugar de usar métodos de clase? ¿No deberías evitar modificar las instancias y simplemente devolver un nuevo conjunto de objetos? todas estas son preocupaciones válidas, y no estoy afirmando de ninguna manera que esta sea la solución perfecta, pero hemos recorrido un largo camino desde nuestro código original, y también tenemos algunas pruebas que verifican nuestro comportamiento, desde aquí podemos ir a cualquier parte y seguir mejorando este código hasta que sea perfecto.

Por favor, avísame en los comentarios si te gustó este ejemplo y también si harías algo de otra manera.
Si realmente te gustó esto, no olvides compartir &#128512;.
