# Repositorio General de Proyectos

## Descripción General
Este repositorio contiene múltiples proyectos desarrollados con **Vue.js** y **Docker**. Cada proyecto está organizado en carpetas individuales y puede ser ejecutado de manera independiente. Se proporciona una guía detallada para la instalación y ejecución de cada uno, junto con las dependencias necesarias para ponerlos en marcha.

El proyecto **Proyecto-Profesores** utiliza un archivo `docker-compose.yml` para su ejecución, mientras que los demás proyectos utilizan un archivo `Dockerfile` que se puede ejecutar directamente con Docker.

## Estructura del Repositorio

- **mysite/**: Un proyecto web que utiliza Vue.js para la creación de una aplicación interactiva.
- **proyectorickmorty/**: Una aplicación basada en Vue.js que consume una API de Rick y Morty.
- **Prueba-Docker/**: Un entorno de prueba para aprender y aplicar conocimientos de Docker.
- **Proyecto-Profesores/**: Una aplicación para la gestión de profesores utilizando tecnologías web modernas y Docker Compose.
- **cart-app/**: Una aplicación de carrito de compras simple.

## Requisitos Previos

Para ejecutar los proyectos, se requiere tener instalados los siguientes programas:

- **Docker**: La herramienta de contenedorización utilizada para desplegar cada proyecto.
- **Node.js** (v14 o superior): Para proyectos basados en Vue.js, se requiere Node.js para manejar las dependencias y el servidor de desarrollo.
- **Vue CLI**: Para la creación y administración de los proyectos Vue.js. Si no lo tienes instalado, puedes instalarlo con:

    ```bash
    npm install -g @vue/cli
    ```

## Instrucciones de Ejecución

### 1. **mysite**
   - **Descripción**: Aplicación web interactiva con Vue.js.
   - **Pasos para ejecutar**:
     1. Navega a la carpeta `mysite`:
        ```bash
        cd mysite
        ```
     2. Construye la imagen de Docker:
        ```bash
        docker build -t mysite-app .
        ```
     3. Ejecuta el contenedor:
        ```bash
        docker run -p 8080:8080 mysite-app
        ```
     4. Accede a la aplicación en `http://localhost:8080`.

### 2. **proyectorickymorty**
   - **Descripción**: Una aplicación que consume la API de Rick y Morty.
   - **Pasos para ejecutar**:
     1. Navega a la carpeta `proyectorickymorty`:
        ```bash
        cd proyectorickymorty
        ```
     2. Construye la imagen de Docker:
        ```bash
        docker build -t proyectorickymorty-app .
        ```
     3. Ejecuta el contenedor:
        ```bash
        docker run -p 8080:8080 proyectorickymorty-app
        ```
     4. Accede a la aplicación en `http://localhost:8080`.

### 3. **Prueba-Docker**
   - **Descripción**: Proyecto de pruebas para aprender Docker.
   - **Pasos para ejecutar**:
     1. Navega a la carpeta `Prueba-Docker`:
        ```bash
        cd Prueba-Docker
        ```
     2. Construye la imagen de Docker:
        ```bash
        docker build -t prueba-docker-app .
        ```
     3. Ejecuta el contenedor:
        ```bash
        docker run -it prueba-docker-app
        ```

### 4. **Proyecto-Profesores**
   - **Descripción**: Sistema de gestión de profesores utilizando Vue.js y Docker Compose.
   - **Pasos para ejecutar**:
     1. Navega a la carpeta `Proyecto-Profesores`:
        ```bash
        cd Proyecto-Profesores
        ```
     2. Levanta el contenedor usando Docker Compose:
        ```bash
        docker-compose up --build
        ```
     3. Accede a la aplicación en `http://localhost:8080`.

### 5. **cart-app**
   - **Descripción**: Una aplicación de carrito de compras simple.
   - **Pasos para ejecutar**:
     1. Navega a la carpeta `cart-app`:
        ```bash
        cd cart-app
        ```
     2. Construye la imagen de Docker:
        ```bash
        docker build -t cart-app .
        ```
     3. Ejecuta el contenedor:
        ```bash
        docker run -p 8080:8080 cart-app
        ```
     4. Accede a la aplicación en `http://localhost:8080`.

## Docker

Cada uno de los proyectos incluye un archivo `Dockerfile` que permite construir la imagen de Docker de manera individual. Solo el proyecto **Proyecto-Profesores** utiliza un archivo `docker-compose.yml` para gestionar la ejecución de múltiples servicios. 

### Instrucciones Generales para Docker

- **Construir una imagen**: Para cada proyecto (excepto "Proyecto-Profesores"), usa el comando:

    ```bash
    docker build -t nombre-de-la-imagen .
    ```

- **Ejecutar un contenedor**: Usa este comando para ejecutar el contenedor:

    ```bash
    docker run -p 8080:8080 nombre-de-la-imagen
    ```

- **Docker Compose (para Proyecto-Profesores)**: Usa este comando para levantar todos los servicios del proyecto:

    ```bash
    docker-compose up --build
    ```

- **Detener los contenedores**: Para detener los contenedores en ejecución, usa:

    ```bash
    docker-compose down
    ```

## Contribución

Si deseas contribuir a este repositorio, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Agregar nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature-nueva-funcionalidad`).
5. Abre un Pull Request.

---

Este README proporciona una guía general para cada proyecto, su propósito y las instrucciones necesarias para ejecutarlos correctamente utilizando Docker y Vue.js. Cualquier duda adicional puede ser resuelta en la sección de issues del repositorio.
