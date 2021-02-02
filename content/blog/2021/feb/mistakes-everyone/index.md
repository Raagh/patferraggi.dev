---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2021-02-02"
title: Los errores vienen tanto para los Junior como para los Senior
description:
enTitle: Mistakes come for Juniors and Seniors alike
enDescription:
enPostUrl: https://dev.to/patferraggi/mistakes-come-for-juniors-and-seniors-alike-41de
thumbnail: ./cover.jpg
---


Cuando comencé mi carrera como desarrollador de software hace más de 6 años, estaba asustado, asustado por cometer un error, borrar algo que no debía, hacer mal código o perderme algunas cosas importantes mientras desarrollaba una función nueva del producto.

Si esperabas una historia en la que contara cómo no sucedió ninguna de estas cosas y todo estuvo bien y no deberías preocuparte, este no es ese tipo de historia, no habrá ningún final feliz e irreal aquí.

----

### Algunos errores que cometí hasta ahora

Tomé mi segundo trabajo como desarrollador cuando tenía menos de un año de experiencia. En mi primera semana, rompí con éxito la base de datos de producción, siendo un consultor, lo que provocó que algunos empleados del cliente y yo mismo tuviéramos que quedarnos durante el fin de semana comprobando el alcance del daño que causé. Pasé un sábado entero arreglando entradas rotas en otros sistemas y restaurando copias de seguridad de bases de datos. ¿Qué estaba haciendo exactamente con el acceso de producción en mi primera semana?, hasta el día de hoy todavía no lo sé.

Durante años he escrito código que no funciona, produje errores y entregue las features incorrectas. Construcciones defectuosas, entornos dañados, bloqueo del trabajo de otras personas y lanzamientos retrasados.

En mi tercer trabajo (menos de 2 años de experiencia) no logré lanzar a producción una característica en la que habiamos estado trabajando durante meses, cuando finalmente la puse en producción, estaba plagada de errores, algunas partes del flujo de trabajo no se podían usar en absoluto.

En mi cuarto trabajo (alrededor de 3 años de experiencia) asumí la tarea de construir un microservicio para una función que nuestra empresa necesitaba para sobrevivir los años siguientes.
Aunque estaba a cargo de construirlo, tenía miedo de fallar, así que dejé muchas decisiones a alguien técnicamente más capaz que yo, alguien con años y años de experiencia.
Esa decisión nos guio a través de una fase de implementación increíblemente complicada con toneladas de características que en realidad no necesitábamos y no hicieron más que complicar el código y la implementación. Antes de dejar esa empresa, me encargué de "Refactorizar" ese servicio y de simplificar en gran medida la cantidad de cosas que tenía que hacer, la implementación fue excelente y quedamos muy contentos con la implementación.

### ¿Aprendí algo?

Todos estos errores que cometí me dieron algunas experiencias que nunca olvidaré, y seguro que aprendí de esos errores. 
Aprendí a verificar 20 veces antes de ir a la implementación, aprendí a escribir pruebas unitarias y pruebas de integración, cómo hacer pruebas de humo en entornos de ensayo, cómo hacer que mi código sea resistente para que las fallas en una función no hagan caer todo el sistema.

Aprendí cómo interactuar con el equipo control de calidad, obtuve algunas ideas sobre cómo prueban el producto para que pueda hacer verificaciones adicionales antes de que el problema le salga a otra persona.

Aprendí a responsabilizarme del código en el que trabajo, a responsabilizarme de los errores y hacer un esfuerzo adicional para corregirlos.

Aprendí a cuestionar los requerimientos y no solo a construir ciegamente una especificación que me tiran en el escritorio, a hacer preguntas y tratar de resolver problemas en lugar de ser solo un mono que programa.

También me ha enseñado qué tipo de desarrollador senior quiero ser: 
¿quieres ser el tipo que le grita al desarrollador jr por cometer un error? (sí, esto, lamentablemente, pasa) 
¿o prefieres ser tú quien lo entienda y lo haga crecer? 
¿Ves un problema causado por un miembro del equipo como su culpa o como un problema causado por un proceso que NOSOTROS, como equipo, debemos solucionar?

Gracias a esos errores y a las personas que me han ayudado en el camino, aprendí el tipo de desarrollador que quiero ser:

Alguien que se enorgullece de su oficio, alguien que ama ayudar a los demás y ve los errores no como fracasos sino como nuevas oportunidades de aprendizaje, alguien que se preocupa deliberadamente de asegurarse de que las funciones se entreguen a tiempo con la calidad adecuada.

### Eres un senior, ¿y ahora qué?

Me encantaría decirte que los errores dejan de suceder cuando te conviertes en senior, desafortunadamente, ese no es el caso, nunca dejarán de suceder, la espada de Damocles siempre estará ahí colgando sobre tu cabeza.

Incluso hoy casi tengo un ataque al corazón cuando por un momento pensé que uno de mis scripts de base de datos locales se estaba ejecutando en la base de datos de staging en lugar de en mi instancia local de Docker, todo en mi segunda semana en un nuevo trabajo.

No pasó nada, sabía que tenía el archivo de configuración adecuado apuntando a mi instancia local, estaba verificando la base de datos mientras se ejecutaba el script y tomé las medidas adecuadas para revertirlo si algo hubiera estado mal, pero cuando vi registros de errores en el canal de staging digamos que dudé un poco de mí mismo 😂. Al final, fue solo que los logs para el entorno de desarrollo y el de staging iban a parar al mismo canal, eso es todo.

-----

Mi punto con esta publicación de blog no es asustarte, es para hacerte saber que todos cometemos errores, lo que diferencia a los desarrolladores es cómo toman esos errores y qué hacen con las lecciones aprendidas.

Si le gustó esta publicación del blog, compártala y contamelo a continuación en los comentarios. ¿Qué errores ha cometido en su carrera? Me encantaría escucharlos para que podamos reírnos juntos.

Hasta pronto &#128512;