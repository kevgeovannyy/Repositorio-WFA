## Instalación y Configuración de Docker

Para ejecutar los proyectos de este repositorio, es necesario tener Docker instalado en tu máquina. A continuación se detalla cómo instalar Docker en los principales sistemas operativos.

### 1. **Instalar Docker en Windows**

1. **Descargar Docker Desktop**:
   - Ve al sitio oficial de Docker: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).
   - Haz clic en **Download for Windows** para descargar el instalador de Docker Desktop.

2. **Instalar Docker Desktop**:
   - Ejecuta el instalador y sigue las instrucciones en pantalla.
   - Asegúrate de habilitar la opción para utilizar **WSL 2** durante la instalación (si es aplicable).

3. **Reiniciar la computadora** (si es necesario):
   - Después de la instalación, es posible que necesites reiniciar tu computadora.

4. **Verificar la instalación**:
   - Abre **PowerShell** o **Símbolo del sistema** y ejecuta el siguiente comando para verificar que Docker se haya instalado correctamente:
   
     ```bash
     docker --version
     ```

   - Si Docker está correctamente instalado, deberías ver la versión de Docker instalada.

### 2. **Instalar Docker en macOS**

1. **Descargar Docker Desktop**:
   - Ve al sitio oficial de Docker: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).
   - Haz clic en **Download for Mac**.

2. **Instalar Docker Desktop**:
   - Abre el archivo descargado `.dmg` y arrastra el icono de Docker a la carpeta de **Aplicaciones**.
   - Inicia Docker desde la carpeta de **Aplicaciones**.

3. **Verificar la instalación**:
   - Abre la **Terminal** y ejecuta el siguiente comando para verificar que Docker se haya instalado correctamente:

     ```bash
     docker --version
     ```

   - Deberías ver la versión de Docker instalada.

### 3. **Instalar Docker en Linux (Ubuntu/Debian)**

1. **Actualizar los repositorios del sistema**:
   - Abre la terminal y ejecuta los siguientes comandos:

     ```bash
     sudo apt-get update
     sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
     ```

2. **Agregar la clave GPG de Docker**:
   - Ejecuta este comando para agregar la clave GPG de Docker:

     ```bash
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
     ```

3. **Agregar el repositorio oficial de Docker**:
   - Añade el repositorio de Docker con el siguiente comando:

     ```bash
     sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
     ```

4. **Instalar Docker**:
   - Ejecuta los siguientes comandos para instalar Docker:

     ```bash
     sudo apt-get update
     sudo apt-get install docker-ce
     ```

5. **Verificar la instalación**:
   - Verifica la instalación ejecutando el siguiente comando:

     ```bash
     docker --version
     ```

   - Si Docker está instalado correctamente, verás la versión instalada.

6. **Configurar Docker para ejecutarse sin `sudo`** (opcional):
   - Para ejecutar Docker sin permisos de administrador, agrega tu usuario al grupo `docker`:

     ```bash
     sudo usermod -aG docker ${USER}
     ```

   - Cierra la sesión y vuelve a iniciarla para que los cambios surtan efecto.

### 4. **Configurar Docker**

#### Iniciar Docker
   - En Windows y macOS, Docker Desktop se iniciará automáticamente después de la instalación. Verifica que Docker esté corriendo en la barra de tareas (Windows) o en la barra de menús (macOS).
   - En Linux, puedes iniciar Docker con el siguiente comando:

     ```bash
     sudo systemctl start docker
     ```

#### Verificar la configuración
   - Ejecuta el siguiente comando para probar que Docker está configurado correctamente y puede ejecutar contenedores:

     ```bash
     docker run hello-world
     ```

   - Si Docker está correctamente instalado y configurado, deberías ver un mensaje indicando que el contenedor `hello-world` se ejecutó exitosamente.

### 5. **Instalar Docker Compose (si no está incluido)**

En algunos sistemas (especialmente Linux), Docker Compose puede no estar incluido en la instalación por defecto. Aquí te muestro cómo instalarlo.

1. **Descargar Docker Compose**:
   - Ejecuta el siguiente comando para descargar la última versión de Docker Compose:

     ```bash
     sudo curl -L "https://github.com/docker/compose/releases/download/$(curl -s https://api.github.com/repos/docker/compose/releases/latest | grep -Po '"tag_name": "\K.*?(?=")')/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
     ```

2. **Aplicar permisos de ejecución**:
   - Asigna los permisos adecuados:

     ```bash
     sudo chmod +x /usr/local/bin/docker-compose
     ```

3. **Verificar la instalación**:
   - Verifica que Docker Compose esté correctamente instalado:

     ```bash
     docker-compose --version
     ```

## Listo
Con Docker correctamente instalado y configurado, ya puedes seguir las instrucciones de cada proyecto en este repositorio para ejecutar los contenedores Docker.


# Repositorio General de Proyectos

## Descripción General
Este repositorio contiene múltiples proyectos desarrollados con **Vue.js** y **Docker**. Cada proyecto está organizado en carpetas individuales y puede ser ejecutado de manera independiente. Se proporciona una guía detallada para la instalación y ejecución de cada uno, junto con las dependencias necesarias para ponerlos en marcha.

El proyecto **Proyecto-Profesores** utiliza un archivo `docker-compose.yml` para su ejecución, mientras que los demás proyectos utilizan un archivo `Dockerfile` que se puede ejecutar directamente con Docker.

## Estructura del Repositorio

- **mysite/**: Un proyecto web que utiliza Vue.js para la creación de una aplicación interactiva.
- **proyectorickmorty/**: Una aplicación basada en Vue.js que consume una API de Rick y Morty.
- **Prueba-Docker/**: Un entorno de prueba para aprender y aplicar conocimientos de Docker.
- **Proyecto-Profesores/**: Una aplicación para la gestión de profesores utilizando base de datos.
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
### **Crear Base de datos**
   - CREATE DATABASE profesores_db;

      USE profesores_db;
      
      CREATE TABLE profesores (
          id INT AUTO_INCREMENT PRIMARY KEY,
          nombre VARCHAR(100) NOT NULL
      );

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


