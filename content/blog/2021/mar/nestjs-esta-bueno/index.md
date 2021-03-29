---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2021-03-29"
title: Una semana con Nest.js, ¿está bueno?
description:
enTitle: One week with Nest.js, is it good?
enDescription:
enPostUrl: https://dev.to/patferraggi/one-week-with-nest-js-is-it-good-5hgo
thumbnail: ./cover.jpeg
---

Hola chicos, ¿cómo han estado? ¿yo? He estado trabajando mucho en un nuevo proyecto que estoy construyendo con la ayuda de un amigo, no discutiré los detalles aquí, pero probablemente me escucharán hablar de ello muy pronto. Hoy quiero hablar sobre una de las selecciones tecnológicas que hice para construir este proyecto.

Necesita construir una API, usando node, usando TypeScript, he escuchado muchas cosas geniales de este framework de backend llamado [Nest.js](https://nestjs.com/) pero no lo había probado yo mismo. Ahora, después de una semana de programar la API, tener varios endpoints, autenticarse, conectarse a una base de datos y todo eso, les daré mi opinion. Pero comencemos desde el principio.

---

## ¿Qué es Nest.js?

De la documentación en sí obtenemos esta respuesta:

> Un marco progresivo de Node.js para crear aplicaciones del lado del servidor eficientes, confiables y escalables.

Eso no dice mucho, ¿verdad? bueno, en mis propias palabras, Nest.js es un framework de Node.js construido sobre [express.js](https://expressjs.com/) y [TypeScript](https://www.typescriptlang.org/) que viene con una fuerte opinión sobre cómo se deben construirse las API. Dado que es muy opinionado, proporciona una estructura, una CLI y una cantidad casi infinita de herramientas que te permiten crear API profesionales muy, muy rápido.

Supongo que sería como Django para Python o asp.net Core para C#.

## ¿A qué se parece?

Bueno, como con la mayoría de los frameworks de API, Nest.js define los endpoints a través de una entidad llamada `Controller`.

```typescript
import { Controller, Get } from "@nestjs/common"

@Controller("cats")
export class CatsController {
  @Get()
  findAll(): string {
    return "This action returns all cats"
  }

  @Get(":id")
  findOne(@Param("id") id: string): string {
    return "This action returns one cat"
  }
}
```

Para mí, viniendo de C#, ver esto en JavaScript es un placer, pero supongo que puede ser extraño para ustedes, los noders, así que permítanme explicarles todas las cosas magicas que están sucediendo allí.

Este `Controller` creará 2 endpoints en las rutas `{url}/cats` y `{url}/cats/{id}`, el id de la url en el segundo endpoint se asignará automáticamente al parámetro id en el método. Estos tipos de etiquetas `@Get()` se llaman decoradores y hay un montón de ellos, puedes usarlos para definir el método HTTP, para obtener propiedades, para definir la autenticación, básicamente lo que quieras.

**Pero, ¿dónde escribes tu lógica de negocio? podras preguntar.** Bueno, Nest.js te tiene cubierto, para eso usarás una entidad llamada `Service`

```typescript
import { Injectable } from "@nestjs/common"
import { Cat } from "./interfaces/cat.interface"

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll(): Cat[] {
    return this.cats
  }
}
```

Nada demasiado extraño aquí, excepto, ¿qué está haciendo ese decorador `@Injectable` ?. Nest.js viene con `Dependency Injection` de forma predeterminada, este decorador define qué dependencias se pueden inyectar en otros componentes a través de sus constructores.

**Esto parece que va a terminar siendo una gran cantidad de código, ¿hay una manera fácil de administrar las dependencias?** sí, la hay. Puedes empaquetar la funcionalidad usando Módulos, son como Módulos de node, pero en Nest.js puedes tener `Controllers`, `Services` y más dentro de un Módulo que representa una funcionalidad especifica, luego inyectar ese módulo completo en otros para usarlo allí.

```typescript
import { Module } from "@nestjs/common"
import { CatsController } from "./cats.controller"
import { CatsService } from "./cats.service"

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
```

**No veo ninguna mención de cómo conectar una base de datos, ¿hay algo así?**. ¿No te dije que Nest.js es bastante obstinado? como tal, viene con una forma de trabajar con bases de datos. Entra [TypeORM](https://typeorm.io/#/) a la cancha.

En lugar de hacer consultas manualmente usando SQL, usamos un Modelo Relacional de Objetos. Para trabajar con la base de datos, definimos las entidades de la base de datos que luego se usarán para crear las tablas al iniciar la API y usamos los `Repositorios` creados en base a nuestro modelo de base de datos.

```typescript
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ length: 500 })
  name: string

  @Column("text")
  color: string
}
```

## Parece súper complicado, ¿para quién es?

Mentiría si dijera que todos los que empiecen a jugar con Nest.js serán productivos de inmediato.

- Nest.js sigue un patrón muy orientado a objetos, que no es algo que veamos muy a menudo en el mundo de JavaScript.
- Si solo conoces los lenguajes tipados dinámicamente, será difícil hacer un cambio debido a que Nest.js usa TypeScript.

Por otro lado, si vienes de un lenguaje como C#, TypeScript te hara sentir como en casa (en realidad fueron diseñados por el mismo programador). Además de eso, si vienes de esa rama probablemente usaste un framework como asp.net Core y sabes exactamente qué es un `Controller`, probablemente creaste una arquitectura en capas y usaste la palabra `Service` para definir tu lógica de negocio incluso antes de ver una sola línea de código usando Nest.js.

**Pero nunca he hecho backend, ¿puedo tomar Nest.js como mi primer proyecto?** Depende.

Nest.js será más fácil para ti si vienes de Angular que si vienes de React.

Todos los patrones arquitectónicos de Module, Dependency Injection, Decorator que utiliza Nest.js están muy inspirados en Angular, son casi como primos, y si vienes de Angular, ya conocerás TypeScript, por lo que elegir Nest.js será una decision obvia.

---

## Conclusión

Probablemente sepas que voy a decir que realmente me gusta Nest.js, bueno, sí, parece un gran framework para crear API's de node.js confiables, proporciona toneladas de funcionalidad lista para usar, y si deseas hacer algo especial, su documentación es simplemente excepcional. Si vienes de uno de los orígenes que mencioné anteriormente o simplemente quieres aprender algo nuevo, definitivamente te recomendaría que pruebes Nest.js 🤞.

Como siempre, si te gustó esta publicación, compártela, ¿has probado Nest.js? ¿Quieres saber algo específico? avísame a continuación en los comentarios 🙂
