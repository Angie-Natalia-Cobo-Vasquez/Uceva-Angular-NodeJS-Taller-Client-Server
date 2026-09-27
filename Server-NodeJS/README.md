# Server-NodeJS

Backend desarrollado con Node.js, Express y TypeScript para el taller de Arquitecturas Frontend y Client-Server de UCEVA.

El servidor expone APIs REST que generan datos ficticios mediante Faker.js y permite su consumo desde el cliente Angular. También cuenta con documentación de las APIs mediante Swagger.

## Tecnologías utilizadas

* Node.js
* TypeScript
* Express
* Faker.js
* Swagger / OpenAPI
* CORS
* dotenv
* env-var
* ts-node-dev

## Estructura del proyecto

```text
Server-NodeJS/
├── src/
│   ├── app.ts
│   │
│   ├── config/
│   │   ├── envs.ts
│   │   ├── swagger.schemas.ts
│   │   └── swagger.ts
│   │
│   ├── domain/
│   │   ├── erros/
│   │   │   ├── custom.error.ts
│   │   │   └── handle.error.ts
│   │   │
│   │   └── interfaces/
│   │       ├── libro.interface.ts
│   │       ├── musica.interface.ts
│   │       ├── product.interface.ts
│   │       ├── server.interface.ts
│   │       ├── user.interface.ts
│   │       └── vuelo.interface.ts
│   │
│   └── presentation/
│       ├── routes.ts
│       ├── server.ts
│       │
│       └── modules/
│           ├── libros/
│           │   ├── libros.controller.ts
│           │   ├── libros.routes.ts
│           │   └── libros.service.ts
│           │
│           ├── musica/
│           │   ├── musica.controller.ts
│           │   ├── musica.routes.ts
│           │   └── musica.service.ts
│           │
│           ├── products/
│           │   ├── products.controller.ts
│           │   ├── products.routes.ts
│           │   └── products.service.ts
│           │
│           ├── users/
│           │   ├── users.controller.ts
│           │   ├── users.routes.ts
│           │   └── users.service.ts
│           │
│           └── vuelos/
│               ├── vuelos.controller.ts
│               ├── vuelos.routes.ts
│               └── vuelos.service.ts
│
├── package.json
└── README.md
```

## Arquitectura

El backend está organizado siguiendo una separación por responsabilidades:

* **config:** contiene la configuración del servidor y la documentación de Swagger.
* **domain:** contiene las interfaces de los datos y el manejo de errores.
* **presentation:** contiene la configuración del servidor, las rutas y los módulos de las APIs.
* **modules:** cada módulo contiene sus propias rutas, controlador y servicio.

Cada módulo sigue una estructura similar:

```text
módulo/
├── módulo.controller.ts
├── módulo.routes.ts
└── módulo.service.ts
```

El servicio se encarga de generar los datos, el controlador procesa las solicitudes y las rutas definen los endpoints disponibles.

## Instalación

Ubicarse en la carpeta del servidor:

```bash
cd Server-NodeJS
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

Para iniciar el servidor:

```bash
npm start
```

El servidor queda disponible en:

```text
http://localhost:3000
```

Al iniciar correctamente se muestra:

```text
Server Running on Port 3000
```

## APIs desarrolladas

Para este taller se desarrollaron tres nuevos módulos en el backend:

* Libros
* Música
* Vuelos

### Libros

Endpoint:

```http
GET /api/libros/{countLibros}
```

Ejemplo:

```text
http://localhost:3000/api/libros/10
```

Permite solicitar una cantidad determinada de libros ficticios.

Cada libro contiene:

* `id`
* `titulo`
* `autor`
* `genero`
* `anio`

### Música

Endpoint:

```http
GET /api/musica/{countMusica}
```

Ejemplo:

```text
http://localhost:3000/api/musica/10
```

Permite solicitar una cantidad determinada de canciones ficticias.

Cada registro contiene:

* `id`
* `cancion`
* `artista`
* `genero`
* `anio`

### Vuelos

Endpoint:

```http
GET /api/vuelos/{countVuelos}
```

Ejemplo:

```text
http://localhost:3000/api/vuelos/10
```

Permite solicitar una cantidad determinada de vuelos ficticios.

Cada vuelo contiene:

* `id`
* `aerolinea`
* `aeropuerto`
* `avion`
* `numeroVuelo`
* `asiento`
* `codigoReserva`

## Generación de datos con Faker.js

Los datos de los tres módulos desarrollados se generan dinámicamente mediante Faker.js.

Esto permite que la API entregue información ficticia sin utilizar una base de datos.

Los servicios utilizan proveedores de Faker relacionados con el tipo de información que genera cada módulo.

Por ejemplo:

* **Libros:** información ficticia de libros.
* **Música:** nombres de canciones, artistas y géneros.
* **Vuelos:** aerolíneas, aeropuertos, aviones, números de vuelo, asientos y códigos de reserva.

Cada solicitud puede generar datos diferentes.

## Validación de cantidad

Los endpoints de los módulos desarrollados reciben la cantidad de registros mediante un parámetro en la URL.

Ejemplo válido:

```text
/api/vuelos/10
```

El valor debe ser un número entero mayor que cero.

Por ejemplo:

```text
/api/vuelos/0
```

devuelve un error de validación indicando que `countVuelos` debe ser un entero mayor que cero.

## Swagger

La documentación de las APIs está disponible mediante Swagger UI:

```text
http://localhost:3000/api/docs/
```

Swagger permite consultar y probar los endpoints disponibles del servidor.

Los módulos desarrollados para este taller cuentan con los siguientes endpoints:

* `GET /api/libros/{countLibros}`
* `GET /api/musica/{countMusica}`
* `GET /api/vuelos/{countVuelos}`

También se encuentran definidos los esquemas correspondientes a:

* `Libro`
* `Musica`
* `Vuelo`

## Consumo desde Angular

El backend es consumido por el cliente Angular mediante solicitudes HTTP.

La comunicación se realiza de la siguiente forma:

```text
Angular Client
localhost:4200
      │
      │ HTTP
      ▼
Node.js Server
localhost:3000
      │
      ▼
Servicio del módulo
      │
      ▼
Faker.js
      │
      ▼
Datos ficticios
```

Los módulos desarrollados pueden consultarse desde Angular en:

```text
http://localhost:4200/libros
http://localhost:4200/musica
http://localhost:4200/vuelos
```

## Verificación del proyecto

El backend fue verificado mediante la compilación de TypeScript:

```bash
npx tsc --noEmit
```

El comando finaliza sin errores.

También se verificó el funcionamiento de las APIs mediante el servidor local y Swagger.

## Módulos desarrollados

Para el taller se implementaron tres nuevos módulos:

1. **Libros**
2. **Música**
3. **Vuelos**

Los tres módulos fueron integrados en la rama `develop` del proyecto.


