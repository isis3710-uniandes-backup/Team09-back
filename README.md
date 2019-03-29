# Español

*Este proyecto hace parte del curso "Programación con Tecnologías Web" de Ingeniería de Sistemas de la Universidad de los Andes.
Fue desarollado en el periodo 2019-1. El equipo 9 está conformado por:  
James Lake 201531545  
José Daniel Cárdenas 201313488*

## 1) Descripción del projecto.
La aplicación a desarrollar se llamará Logic Drawing. Logic Drawing es un espacio colaborativo de diseño, que iniciará como un canvas blanco similar a paint en el cual los usuarios podrán dibujar de manera colaborativa en una sala privada. 
Logic Drawing parte de la premisa de "Divide y Truinfarás". Nuestro propósito es resolver el problema de "Necesito realizar un dibujo en conjunto con otras personas de manera que pueda compartir en tiempo real este dibujo." Logic Drawing parte de los supuestos que: El dibujo es privado, tiene un administrador que distrubuye tres permisos a los usuarios con los que comparte el dibujo: Read, Write, y Comment, un dibujo debe estar disponible en todos sus estados anteriores, y los usuarios deben ser capaces de comunicarse en alguna forma.
  
Logic Drawing ofrece además la posibilidad de exportar de maneras intuitivas los diseños hechos, ver los cambios que se hicieron como un historial de cambios, comentar y chatear en las salas. Logic Drawing pretende expandirse a otras funcionalidades en el tiempo próximo.

## 2) Decisiones de construcción de aplicación:
Decidimos usar una base de datos relacional desplegada con SQLite, ya que para nuestro problema, necesitabamos hacer muchas consultas de manera rápida. Además, siguiendo el modelo UML (ver imagen), era fácil visualizar las relaciones mediante una base de datos.
![alt text](https://github.com/isis3710-uniandes/Team09-back/blob/master/docs/Class%20Model.png)

Por consiguiente, NO se está persistiendo con JSON si no diréctamente en un archivo .db, visualizable con cualquier editor de bases de datos (Recomendamos SQLite Studio). 



## 3) Despliegue 

#### Para el despliegue de la aplicación, se deben seguir los siguientes pasos: 

#### a) Asegurar tener node en la versión 10.0.0 o mayor, y NPM en la versión 6.0.0 o mayor.

#### b) Clonar el repositorio a su equipo. Los caminos que se usan son relativos a 1 directorio. Deben de estar en el mismo directorio padre el back y el front.

#### c) Instalar las dependencias de Node. Correr el comando npm install

#### d) Abrir terminal, y moverse hacia el directorio en donde se encuentra el proyecto. Luego, inicializar el servidor.
> cd ../Team09-back  
> npm start

#### e) Nuestro servidor estará corriendo en localhost sobre el puerto 3001. Las colecciones de Postman automáticamente tienen esto configurado, pero se pueden probar todas las conexiones manualmente con las direcciones del API descritas en nuestra documentación.

## 4) Pruebas (no funcionales en release 3 por los cambios)

### En las pruebas, hemos incluído dos tipos de pruebas: Las automatizadas y las no automatizadas.

### Las pruebas "DELETE" NUNCA son automatizadas por lo que ella conlleva más procesamiento. Recomendamos hacerlas sólo 1 vez y luego restaurar la base de datos para mantener la integridad de esta.

### a) Todas las pruebas en su versión NO automatizada se encuentran en la colección "Entrega2Web". 

### b) Las pruebas "GET", "POST" y "PUT" son completamente automatizadas en su colección correspondiente.

Dejamos a discreción de la persona probando usar las pruebas automáticas o no, por eso incluímos ambos tipos de pruebas en nuestras colecciones.





# English

*This project belongs to the course "Web Development" from the Systems Engineering major in the Universidad de los Andes, Colombia.
It was developed in the first semester of 2019. Team 9 is conformed by:  
James Lake 201531545  
José Daniel Cárdenas 201313488*

## 1) Project description
The application we're developing is called "Logic Drawing". Logic Drawing will be an online collaborative design space, which will begin as a white canvas alike to paint, in which users will be able to draw in a collaborative manner in a private room.
Logic Drawing parts from the premise "Divide and Conquer". Our purpose is to resolve the problem "I need to draw with a group of people in such a way that we can share in real time our drawing." Logic Drawing begins from the allignments: A drawing must be private, it must have administrators who can distribute three basic permitions to other users: Read Write and comment, a drawing must be available at all times in all of it's previous states, and users must be able to communicate in someway.
  
Logic Drawing offers the possibility to export your designs in intuitive manners, and in different formats. We also offer an option to view past changes, comment, and chat in your private room. Logic Drawing pretends to expand to other functionalities in the near future.

## 2) Application design decisions: 
We decided to use a relational database deployed with SQLite, since our problem requires plenty of queries in a quick response manner. We also designed a UML (see image) in which it is easy to visualize the relationships of our resources as a database.
![alt text](https://github.com/isis3710-uniandes/Team09-back/blob/master/docs/Class%20Model.png)

As a consequence, we are NOT persisting our information with JSON files, instead, we are using a .db archive, which is able to be visualized in any database editor (although we recommend SQLite Studio).


## 3) Deployment

#### To deploy our application, you must follow the steps below:

#### a) Make sure you have node installed with version 10.0.0 or above, and NPM in version 6.0.0 or above.

#### b) Clone the repository to your machine. The paths set to run are relative to 1 directory. Parent directory of front and back must be the same.

#### c) Install Node dependencies. Run command npm install

#### d) Open terminal and move to the directory in which the repository was downloaded into. Then, execute the server:
> cd ../Team09-back  
> npm start 

#### e) Our server will be running on localhost on the port 3001. The collections within Postman have this preconfigured, but you can test all addresses with the API described in our documentation.

## 4) Tests (non functional as of release 3)

### Within the tests, we have included two types: Automatic and not automatic.

### The DELETE tests are NEVER automatic, as they require more processing power. We recommend doing these only once, and then re-downloading the database to maintain it's integrity.

### a) All tests in their non automatic form are located in the collection "Entrega2Web".

### b) The tests for "GET", "POST" and "PUT" are completely automatic, and are located in their respetive collections.

We choose to leave the person who is testing the API to decide whether to use the automatic versions or not, hence, both are included in the repository.
