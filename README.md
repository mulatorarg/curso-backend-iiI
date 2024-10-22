# Curso Backend III

Un repo público para compartir experiencia del curso 😅.

## Primeros Pasos

Para la ejecución del proyectos, debemos descargar el repo, acceder a la carpeta creada,
instalar las dependencias y ejecutar.

```sh
# Clonamos el Proyecto
git clone https://github.com/mulatorarg/curso-backend-iii.git

# Accedemos a la carpeta creada
cd curso-backend-iii

# Instalamos las dependencias
npm i

# Ejecutamos la API
npm run dev # http://localhost:8003

# ó, podemos ejecutar Test de Chai
npm run test

# ó, también ejecutar Test de Node
npm run test:node
```


## Primera entrega


### Se debe entregar

* Crear un router llamado mocks.router.js que funcione bajo la ruta base /api/mocks.

* Mover el endpoint "/mockingpets" (Desarrollado en el primer Desafío Entregable) dentro de este router.

* Crear un módulo de Mocking para generar usuarios de acuerdo a un parámetro numérico. Dichos usuarios generados deberán tener las siguientes características:
  * En "password" debe tener la contraseña "coder123" encriptada.
  * "role" puede variar entre "user" y "admin".
  * "pets" debe ir como array vacío.

* Dentro del router mocks.router.js, utilizar este módulo en un endpoint GET llamado "/mockingusers", y generar 50 usuarios con el mismo formato que entregaría una petición de Mongo.

* Dentro del router mocks.router.js, desarrollar un endpoint POST llamado /generateData que reciba los parámetros numéricos "users" y "pets" para generar e insertar en la base de datos la cantidad de registros indicados.

* Comprobar dichos registros insertados mediante los servicios GET de users y pets


### Formato

Link al repositorio de Github con el proyecto completo, sin la carpeta de node_modules.


## Entrega final


### Dockerizando nuestro Proyecto


#### Objetivos generales

* Implementar las últimas mejoras en nuestro proyecto y Dockerizarlo.


#### Objetivos específicos

* Documentar las rutas restantes de nuestro proyecto.
* Añadir los últimos tests
* Crear una imagen de Docker.

#### Se debe entregar

* Documentar con Swagger el módulo de "Users".
* Desarrollar los tests funcionales para todos los endpoints del router "adoption.router.js".
* Desarrollar el Dockerfile para generar una imagen del proyecto.
* Subir la imagen de Docker a Dockerhub y añadir en un ReadMe.md al proyecto que contenga el link de dicha imagen.


#### Formato

* Link al repositorio de Github con el proyecto (sin node_modules)
* Además, archivo .env para poder correr el proyecto.

#### Sugerencias

* Para repasar Docker, se recomienda revisar la clase 5 "Clusters & Escalabilidad".


## Docker Hub

https://hub.docker.com/r/mulator/backend-iii/tags
