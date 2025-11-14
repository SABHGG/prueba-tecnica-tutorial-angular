# prueba-tecnica-tutorial-angular

## Introduction

para instalar Angular primero debemos tener instalado node.js, luego en la terminal debemos copiar el siguiente comando `npm install -g @angular/cli` para instalar el cli luego para crear un proyecto de Angular debemos utilizar el cli que descargamos y colocar el siguiente comando `ng new <nombre del proyecto>` nos pide detalles del proyecto y luego se instalan los paquetes.

## Hello world!

En este episodio nos enseñan a instalar las dependencias y la estructura de carpetas de un proyecto Angular. para instalar las dependencias utilizamos `npm install o npm i` para instalar las dependencias para ejecutar el proyecto luego desplegamos localmente la aplicación con el comando `ng serve` y colocamos en el navegador `http://localhost:4200` para ver la aplicación creada por defecto por angular.

Los archivos de más alto nivel en un proyecto de angular son `index.html, styles.css y main.ts` estos archivos si modificamos algo puede verse refregado en toda la aplicación, luego está la carpeta `app` donde se alojan todos los bloques que componen toda la aplicación y el archivo más importante es `app.ts` es el punto de entrada de todos los bloques que componen la aplicación.

## Create home component

en esta sección se creo el primer componente de la aplicación usando el comando `ng generate component <nombre del componente>` el componente se crea en la carpeta `app` con el nombre seleccionado por ejemplo `app/home` dentro de la carpeta se crea un archivo `home.ts` donde tiene las siguientes propiedades selector para identificar como se llama el componente en los archivos que contengan html, imports son para declarar si nuestro componente tiene dependencias de otros archivos, template o templateUrl es para definir la estructura del componente con html y por ultimo styles o styleUrls es para definir el diseño del componente ya sea en línea o con un archivo separado.

## Create housing location component

en este episodio se creó un nuevo componente llamado `housing-location` para añadir los resultados de busqueda de las casas, crearle un archivo css separado, enlazarlo con la propiedad `styleUrls` e importarlos en el componente de `home`.

## Create an interface

las interfaces son una parte importante en el modelado de entrada de datos para una aplicación en angular. esta nos permite definir que campos, su tipo y cuales son sus restricciones tiene para tener la certeza de que los datos que entran al componente sean los correctos para despues visualizar los datos.

## Add inputs to components

en esta sección nos enseñan como añadir entradas en los componentes con el método `{ input }` de angular core y como hacer que las propiedades de la interfaz sean requeridas cuando se colocan en el elemento padre del componente este es la propiedad del método input para definir si es requerido o no `input.required<Interfaz de datos>()`

## Add property binding to components

en esta sección nos enseñan a agregar la propiedad que definimos en la clase del componente hijo para que cuando se defina en el componente padre no sea tratado como una cadena de texto y si como una propiedad del componente usando la sintaxis `<componente [atributo] = "valor" />`.

## Add dynamic values to template

la interpolación es la forma en que angular puede tomar los datos leídos por el método `input` y expresiones de JavaScript para hacer que el componente adquiera valores dinámicos enviados desde del componente padre o definidos desde el propio componente con la condición de que siempre están validados por el interfaz. para utilizar la interpolación debemos utilizar la expresión `{{ }}`.
