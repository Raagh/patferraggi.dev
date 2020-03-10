---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-03-09"
title: 5 técnicas de Clean Code que puedes comenzar a aplicar hoy mismo
description:
enTitle: 5 Clean Code techniques you can start doing today
enDescription:
enPostUrl: https://dev.to/patferraggi/5-clean-code-techniques-you-can-start-doing-today-2ifh
thumbnail: ./cover.jpg
---

Hace dos años comencé a buscar formas de mejorar mis habilidades de programación, hasta ese momento estaba totalmente conforme con aprender el siguiente framework, experimentar constantemente con las nuevas tecnologías y no me malinterpreten, todavía lo hago, soy un gran creyente de que debe mantener sus habilidades actualizadas, pero hace dos años leí [Clean Code: A Handbook of Agile Software Craftsmanship](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?keywords=clean+code&qid=1583780721&sr=8-1) y mi carrera cambió para siempre, incluso me atrevería a decir que mi opinión sobre el software cambió para siempre.

Después de ese libro, comencé a pensar realmente en el código que estaba produciendo, cómo era una expresión de mí mismo y lo importante que era para mí tener en cuenta la calidad del software que estaba creando.

No voy a hablar sobre nuestras responsabilidades como desarrolladores, lo haré en el siguiente artículo, así que comencemos con una pequeña introducción.

---

### ¿Qué es exactamente el Código limpio o Clean Code?

No hay una única definición, probablemente haya tantas definiciones como desarrolladores en el mundo, pero algunas personalidades clave en nuestra industria tienen su propia opinión y voy a enumerar aquí las que más me gustan:

> "El código limpio siempre parece haber sido escrito por alguien a quien le importa. No hay nada obvio que se pueda hacer para mejorarlo".
> -- Michael Feathers

Michael Feathers está en lo cierto, el código limpio es un código que ha sido escrito por alguien que se preocupa profundamente por su oficio, él / ella ha considerado todas las posibilidades, ha escrito pruebas para el código y ha hecho que sea más fácil para la próxima persona que le toque trabajar en el.

> El código limpio es simple y directo. Código limpio
> se lee como una prosa bien escrita.
> -- Grady Booch

Grady Booch se enfoca en la legibilidad, leer código limpio es muy fácil, expresivo e incluso se podría llegar a decir que hasta hermoso. Observe cómo no mencionó la escritura del código.

> Sabes que estás trabajando en código limpio cuando cada
> la rutina que lees resulta ser más o menos lo que
> que esperabas. Puedes llamarlo código hermoso cuando
> el código también hace que parezca que el lenguaje de programación fue
> hecho para resolver ese problema
> -- Ward Cunningham

Esta es una gran definición, ¿cuándo fue la última vez que buscaste dentro de un método o módulo y el código fue "más o menos lo que esperaba"? generalmente es al revés, nombres raros, comentarios antiguos, responsabilidades ocultas.

> El código limpio se puede leer y mejorar fácilmente mediante un
> desarrollador que no sea su autor original. Tiene
> pruebas unitarias y de aceptación. Tiene sentido con
> nombres. Proporciona una forma en lugar de muchas
> formas de hacer una cosa. Tiene dependencias mínimas, que se definen explícitamente, y proporciona una API clara y mínima.
> -- Dave Thomas

Dave, en comparación con los otros autores, es mucho más pragmático, establece claramente que el código limpio debe ser fácil de leer, debe tener pruebas, una buena estrategia de nombres, entre otras cosas.

---

Este artículo se relaciona más con la última definición, voy a dar 5 cosas que puedes comenzar a hacer hoy para mejorar tu código y comenzar a recorrer el camino del "Código Limpio".

# 1. Escribir nombres significativos

> Solo hay dos cosas difíciles en informática: invalidación de caché y nombrar cosas.
> -- Phil Karlton

¿Nombrar cosas es difícil? de qué está hablando este tipo, nombrar bien las cosas es bastante difícil si lo piensas bien, recuerda lo que dijo Grady Booch: "El código limpio se lee como una prosa bien escrita" si quieres llegar a ese nivel, tendrás que seguir ciertas restricciones e intentar nombrar variables, métodos y clases de la forma más expresiva posible.

- Las clases y los objetos deben tener nombres o frases nominales como Cliente, WikiPage, Cuenta y AddressParser. Evite palabras como _Manager_, _Processor_, _Data_ o _Info_ en el nombre de una clase. Un nombre de clase no debe ser un verbo
- Los métodos deben tener nombres de verbos o frases verbales como "postPayment", "deletePage" o "save". Los descriptores de acceso, mutadores y predicados deben nombrarse por su valor y tener el prefijo "get", "set"
- No abrevies los nombres
- No uses números mágicos
- Elige una palabra para un concepto abstracto y manténelo. Por ejemplo, es confuso tener los métodos "buscar", "recuperar" y "obtener" que son equivalentes en diferentes clases. ¿Cómo recuerdas qué nombre de método va con qué clase? Del mismo modo, es confuso tener un controlador y un administrador en la misma base de código. ¿Cuál es la diferencia esencial entre un DeviceManager y un Protocol-Controller?
- Usar variables o métodos para describir expresiones:

```javascript
if (person.age < 18 || person.driverLicense == null) {
  arrest(person)
}

// o podemos escribir
const isUnderAgeOrNoDriverLicense =
  pperson.age < 18 || person.driverLicense == null

if (isUnderAgeOrNoDriverLicense) {
  arrest(person)
}
```

# 2. Escribir funciones, clases y módulos lo más pequeños posible

> LAS FUNCIONES DEBEN HACER UNA COSA. DEBEN HACERLO BIEN.
> DEBEN HACER SOLO ESO.

Sé lo que te preguntas, qué consideras "una cosa", generalmente considero una cosa como lo explica "Uncle Bob", "Una sola razón para cambiar", si el código dentro de esa función, clase o módulo puede cambiar por diferentes razones , entonces está haciendo más de una cosa. La razón por la que escribimos funciones es para descomponer un concepto grande en un conjunto de pasos más pequeños. Si una función está recuperando datos, asignándolos, componiendo un objeto diferente, entonces todas esas responsabilidades diferentes deben separarse en diferentes abstracciones.

Hacer esto también ayudará a separar la lógica y hacer más fácil crear las pruebas unitarias de los componentes.

Este concepto está profundamente relacionado con el "Principio de responsabilidad única" o "Single Responsibility Principle" en Inglés, que probablemente trataré más a fondo en otra publicación.

# 3. Evitar los efectos secundarios

Este es un concepto del que soy muy fanático últimamente ya que he estado estudiando programación funcional, pero básicamente significa que tu código no debe modificarse ni depender de un estado fuera de su control.

Tu función promete hacer una cosa, pero también hace otras cosas ocultas. Algunas veces hará cambios inesperados a las variables de su propia clase.
Otras veces convertirá los parámetros pasados ​​en globales del sistema. En cualquier caso, son falsedades engañosas y dañinas que a menudo resultan en acoplamientos extraños y problemas de dependencias.

Como expliqué en mi artículo sobre programación funcional que puedes leer [aquí](https://www.patferraggi.dev/blog/2020/jan/programacion-funcional-para-oop/) deberías probar de apegarte tanto como sea posible a "Funciones puras", funciones que para los mismos argumentos siempre producen el mismo resultado, al hacer esto se aislará el comportamiento que produce efectos secundarios (porque queremos guardar en la base de datos o llamar a una API eventualmente) del código que es "Puro".

# 4. No te repitas

También conocido como el principio DRY, por sus siglas en Inglés, básicamente explica que debe evitar la duplicación.

La duplicación puede ser la raíz de todo mal en el software. Se han creado muchos principios y prácticas con el propósito de controlarla o eliminarla. Considera cómo la programación orientada a objetos sirve para concentrar el código en clases base que de otro modo serían redundantes. Parece que desde la invención de la subrutina, las innovaciones en el desarrollo de software han sido un intento continuo de eliminar la duplicación de nuestro código fuente.

Sé que es bastante obvio, pero a veces no nos damos cuenta de que la duplicación también viene en el sentido de la información, no solo el código duplicado sino también al proporcionar múltiples formas de hacer lo mismo.

Sin pensar conscientemente en las formas de implementación que brindamos, podemos tener rápidamente una clase con múltiples métodos, todos con fines similares, todos con diferentes implementaciones donde los errores pueden esconderse, errores que tendremos que corregir y código que tendremos que mantener.

# 5. Los comentarios son mentiras

Este es un tema controvertido, generalmente digo que no debes escribir comentarios en absoluto. Cada vez que menciono esto, a la gente le encanta criticar.
Antes de saltar directo a mi cuello, escúchame.

En general, creo que los comentarios son innecesarios, los desarrolladores los usamos como una excusa para no hacer que nuestro código sea comprensible, ya que eso es sumamente difícil. Creamos un gran desastre con abstracciones sucias, malos nombres y responsabilidades ocultas e intentamos compensarlo escribiendo un comentario.

> Una falacia común es suponer que los autores de código incomprensible podrán expresarse de manera lúcida y clara en los comentarios.
> -- Kevlin Henney

Lo peor, en algunos casos, los comentarios son mentiras, fueron escritos hace mucho tiempo por un desarrollador que ya no trabaja en el equipo, pero nadie se atreve a eliminar el comentario en caso de que aún sea importante, de esta manera el comentario en realidad proporciona información incorrecta sobre la implementación actual del método.

Así que tengo la siguiente recomendación en lugar de usar comentarios:

> Explícate en código

```javascript

// Chequear si el empleado deberá recibir beneficios completos
if ((employee.flags & HOURLY_FLAG) &&
(employee.age > 65))


// O esto?
if (employee.isEligibleForFullBenefits())

```

Una vez más, en la mayoría de los casos, si escribes un comentario, es una señal de que deberías centrarte en extraer esa función, darle un nombre propio o utilizar otras técnicas de refactorización.

Pero como siempre, hay algunas excepciones:

- Si estás escribiendo una API pública, los comentarios pueden expresar intención y documentación para algunas herramientas automatizadas como [Swagger](https://swagger.io/)
- Si estás escribiendo código que necesita ser extremadamente eficiente, generalmente significa manejar cosas de muy bajo nivel y usar pocas abstracciones, en ese caso, un comentario puede ser útil
- A veces hay razones legales para incluir comentarios en nuestro código

# 6. Escribir pruebas

Espera, ¿no dijiste cinco? Demándame. Este es tan importante que te lo voy a dar gratis. Aún así, aunque es clave para nuestra industria, todavía me sorprende cuando la gente me pregunta cuál es el propósito de escribir pruebas o tests.

Me cuentan historias de cómo trabajan en un proyecto nuevo donde el código es excelente y que no ven el beneficio. Si no tienes pruebas, lamento decirte amigo mío que ya no es un proyecto nuevo o como dice Michael Feathers:

> El código _legacy_ es todo código sin pruebas

Las pruebas simplemente me retrasarán, dicen.
Incluso he trabajado con personas que decidieron remover todas las pruebas fallidas en el proyecto para que pudieran cumplir una fecha límite.

Déjenme ser claro sobre esto, si no tiene pruebas, no sabes si su código funciona. Si estás fingiendo que conoces tu código, estas asumiendo que estas entregando el producto especificado. En este momento hay mucho miedo en el mundo debido al "Coronavirus", ¿usarías una nueva vacuna si aún no se ha probado? Apuesto a que no lo harías, pero te sientes muy cómodo entregando software que no ha sido probado adecuadamente.

Ese comportamiento y abandono han llevado a la muerte de personas y millones de dólares en pérdidas. Algunos ejemplos son:

- [Knight Capital](https://en.wikipedia.org/wiki/Knight_Capital_Group)
- [Boeing 737 MAX](https://en.wikipedia.org/wiki/Boeing_737_MAX_groundings)

---

Este es un tema muy querido para mi. Desde que leí el libro, un libro que recomiendo que todo desarrollador lea, comencé a ver mi carrera de una manera muy diferente. En caso de que estes interesado puedes leer mi lista completa de libros [aquí](https://www.patferraggi.dev/blog/2019/nov/five-books-every-developer-should-read/),

Es a partir de estas lecturas que llegue a la siguiente conclusión sobre mi.

> Soy un artesano del software y trataré de mostrar el amor por mi oficio con cada línea de código que escribo.
