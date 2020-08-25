---
path: "{{year}}/{{month}}/{{slug}}/index"
date: "2020-08-25"
title: Creando un microservicio con C#, .NET Core y MongoDB
description: Parte 1
enTitle: Building a microservice with C#, .NET Core and MongoDB
enDescription: Part 1
enPostUrl: https://dev.to/patferraggi/building-a-microservice-with-c-net-core-and-mongodb-part-1-28ca
thumbnail: ./cover.jpeg
---

¡Hola chicos! ¿como han estado? En las últimas semanas, he estado en proceso de entrevistas para puestos de desarrollador de **C#**.

Trabajo con **ASP.NET Core** todos los días, lo que significa que cuando estoy en casa no elijo **C#** como lenguaje de practicas. Por esto mismo, el código **C#** que tengo en mi Github es bastante antiguo y pertenece a los primeros años de mi carrera.

Así que decidí usar los desafíos de programación que me brindan los empleadores para crear un código **C#** más nuevo para mi Github y, al mismo tiempo, crear una buena guía que puedan seguir mejorando su desarrollo personal.

---

## ¿Qué esperar de este tutorial?

Al final de la serie, tendremos un microservicio con las siguientes características:

- Integrado a `MongoDB`
- Arquitectura en capas con una clara separación de responsabilidades
- Documentación de la API
- Soporte de Docker
- Tests unitarios

## Introducción

Tenemos una pequeña empresa, vendemos 💻. Cada vez que se vende una computadora nueva debemos registrar el pedido con el monto y el cliente que lo compró.

Vamos a crear un pequeño microservicio que se conecta a una instancia de [MongoDB](https://www.mongodb.com/) y nos permite crear/leer/actualizar/eliminar pedidos y también obtener algunos cálculos adicionales sobre el gasto de los usuarios.

Nuestro modelo de `Order` o `Pedido` será el siguiente:

```json
{
  "id": "guid",
  "userId": "guid",
  "cantidad": "int"
}
```

## Definición básica

Comenzamos creando una aplicación web **ASP.NET Core 3.1** con la plantilla de API y la compatibilidad con Docker habilitada en Visual Studio 2019.

![ApplicationTemplate](https://dev-to-uploads.s3.amazonaws.com/i/0sldfc9i411ztnje7t6c.png)

Una vez creado, veran un modelo y un `Controller` para un `WeatherForecast`, que es la forma de la plantilla predeterminada de mostrarles que hay una API lista para usar.

![InitialStatus](https://dev-to-uploads.s3.amazonaws.com/i/20daydhqd7cjp13vhhg6.png)

Después de eliminar el código predeterminado, comenzamos creando nuestro modelo y un `OrdersController` básico. Comenzaremos por el `POST` y el `GET`, entonces podremos probar la creación y obtención de pedidos.

```csharp
    [Route("v1/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        /// <summary>
        /// Retrieves all orders
        /// </summary>
        /// <returns>a list with all the orders available</returns>
        [HttpGet]
        public async Task<IEnumerable<Order>> GetAll()
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Retrieves the order that matches the id supplied
        /// </summary>
        /// <returns>one order model</returns>
        [HttpGet("{orderId}")]
        public async Task<ActionResult<Order>> Get(Guid orderId)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Creates a new order
        /// </summary>
        /// <returns>the newly created order</returns>
        [HttpPost]
        public async Task<ActionResult<Order>> Post([FromBody]OrderCreateUpdate orderRequest)
        {
            throw new NotImplementedException();
        }
    }
```

En el código anterior, creamos los endpoints `GetAll`,`Get` y `Post`, también incluimos comentarios para la API pública y ya hemos versionado nuestra API usando la nomenclatura `v1/[controller]` en los endpoints. Si estan prestando atención, es posible que hayan notado que el `Post` tiene un modelo que aún no hemos definido, `OrderCreateUpdate`.

Cuando creas elementos en una base de datos, no se debe proporcionar un `OrderId`, ya que el pedido aún no existe, entonces es una buena práctica separar el modelo de API en dos para que estos puedan cambiar de forma independiente. Este es el modelo para `OrderCreateUpdate`:

```json
{
  "userId": "guid",
  "cantidad": "int"
}
```

```csharp
        public Guid UserId { get; set; }
        public int Amount { get; set; }
```

## Conexión a la base de datos

Por ahora, en lugar de crear una base de datos local o jugar con Docker desde el comienzo, usaremos una base de datos en línea como las proporcionadas por [MongoDBAtlas](https://www.mongodb.com/try).

De vuelta en el proyecto, necesitamos encontrar una manera de configurar los ajustes para conectarnos a nuestra base de datos, lo hacemos usando el [Patrón de opciones](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/options?view=aspnetcore-3.1) que trae **ASP.NET Core**. Definimos la siguiente configuración:

```csharp
    public class OrdersServiceOptions
    {
        public string DatabaseConnectionString { get; set; }
        public string DatabaseName { get; set; }
        public string CollectionName { get; set; }
    }
```

Ahora que tenemos nuestra configuración lista, podemos pasar a crear nuestro primer [Repositorio](https://docs.microsoft.com/en-us/aspnet/mvc/overview/older-versions/getting-started-with-ef-5-using-mvc-4/implementing-the-repository-and-unit-of-work-patterns-in-an-asp-net-mvc-application) que tendrá la responsabilidad de conectarse a nuestra instancia `MongoDB`.

Este es el código de nuestro `OrdersRepository`:

```csharp
    public class OrdersRespository
    {
        private readonly IMongoDatabase database;
        private readonly IMongoCollection<Order> collection;
        private readonly ILogger<OrdersRespository> logger;

        public OrdersRespository(IOptions<OrdersProcessingServiceOptions> options, ILogger<OrdersRespository> logger)
        {
            if (options == null)
            {
                throw new ArgumentNullException(nameof(options));
            }

            var configuration = options.Value;
            var client = new MongoClient(configuration.DatabaseConnectionString);

            this.database = client.GetDatabase(configuration.DatabaseName);
            this.collection = database.GetCollection<Order>(configuration.CollectionName);
            this.logger = logger;
        }
    }
```

Como pueden ver, el `Repositorio` crea la conexión con a `MongoDB` usando las opciones de configuración que definimos anteriormente, también acepta un `logger` que vamos a usar mas tarde. A continuación, crearemos los métodos que usaremos para obtener y crear `Pedidos`.

```csharp
        public async Task<Order> GetOrder(Guid orderId) => await collection.Find(x => x.Id == orderId).FirstOrDefaultAsync();

        public async Task<IEnumerable<Order>> GetAll() => await collection.Find(_ => true).ToListAsync();

        public async Task<Order> CreateOrder(Order order)
        {
            try
            {
                await collection.InsertOneAsync(order);

                return order;
            }
            catch (Exception ex)
            {
                logger.LogError(ex.Message, ex);
                return null;
            }
        }
```

Los 3 métodos son muy simples, obtenemos un solo pedido por id, obtenemos todos los pedidos y creamos un nuevo pedido (con el `logging` adecuado si falla la creación). Después de agregar estos métodos, creamos una interfaz de este repositorio para que podamos comenzar a usar la [Inyección de dependencias](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1) que viene con **.NET Core**.

```csharp
   public interface IOrdersRespository
    {
        Task<Order> GetOrder(Guid orderId);
        Task<IEnumerable<Order>> GetAll();
        Task<Order> CreateOrder(Order order);
    }
```

## Conectando las piezas

Volvamos a nuestro `Controller` y hagamos las llamadas adecuadas a nuestro `Repository`.

```csharp
    [ApiController]
    [Route("v1/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly IOrdersRepository ordersRepository;

        public OrdersController(IOrdersRepository ordersRepository)
        {
            this.ordersRepository = ordersRepository;
        }

        /// <summary>
        /// Retrieves all orders
        /// </summary>
        /// <returns>a list with all the orders available</returns>
        [HttpGet]
        public async Task<IEnumerable<Order>> GetAll()
        {
            return await ordersRepository.GetAll();
        }

        /// <summary>
        /// Retrieves the order that matches the id supplied
        /// </summary>
        /// <returns>one order model</returns>
        [HttpGet("{orderId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Order>> Get(Guid orderId)
        {
            var result = await ordersRepository.GetOrder(orderId);

            if (result == null) return NotFound();

            return Ok(result);
        }

        /// <summary>
        /// Creates a new order
        /// </summary>
        /// <returns>the newly created order</returns>
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Order>> Post([FromBody]OrderCreateUpdate orderRequest)
        {
            var order = new Order()
            {
                Amount = orderRequest.Amount,
                UserId = orderRequest.UserId
            };

            var result = await ordersRepository.CreateOrder(order);

            if (result == null) return BadRequest();

            return StatusCode(201, result);
        }
    }
```

Agregamos la dependencia del `IOrdersRepository` en el constructor y lo usamos desde los endpoints. También manejamos diferentes respuestas dependiendo del resultado del `Repositorio` y definimos explícitamente las posibles respuestas usando los `ProducesResponseType`.

## ¿El resultado de hoy?

`POST`

![POST](https://dev-to-uploads.s3.amazonaws.com/i/4idtrl7pjox48hhr8s4p.png)

`GET`

![OBTENER](https://dev-to-uploads.s3.amazonaws.com/i/puhluqh6303n6elif4pj.png)

`GET ALL`

![OBTENER TODOS](https://dev-to-uploads.s3.amazonaws.com/i/zvr7b6z43jap340sbtx7.png)

Si tienen algo de experiencia en la construcción de API modernas, probablemente esten en shock. ¿Este tipo realmente va a usar el mismo modelo para la API y la base de datos? ¿va a llamar al repositorio desde el controlador? ¿Por qué todo está en el mismo proyecto?

No se preocupen, nos encargaremos de todo antes de que termine esta serie, les prometo que va a ser algo que valga la pena poner en su Github 😉

---

Eso fue mucho, lo sé, tampoco entré en detalles de todos los patrones de aplicación usados ​​ya que hubiera sido imposible, pero en cada patrón usado hay un enlace a la guía oficial sobre cómo implementarlo en **ASP.NET Core**, los tutoriales de Microsoft son muy buenos y les darán los detalles que faltan.

Espero que les haya gustado esta primera parte, en la siguiente agregaremos `Actualizar`, `Eliminar`, el endpoint de información combinada y si hay tiempo también comenzaremos a separar mejor las responsabilidades y puliremos nuestro servicio.

Como siempre, si te gustó o no, házmelo saber en los comentarios y compártelo en las redes sociales &#128512;
