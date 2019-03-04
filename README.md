# Nuestro equipo está conformado por James Lake y José Daniel Cárdenas.

## 1) Descripción del projecto.
La aplicación a desarrollar se llamará Logic Drawing. Logic Drawing es un espacio colaborativo de diseño, que iniciará como un canvas blanco similar a paint en el cual los usuarios podrán dibujar de manera colaborativa en una sala privada. 
Logic Drawing parte de la premisa de "Divide y Truinfarás". Nuestro propósito es resolver el problema de "Necesito realizar un dibujo en conjunto con otras personas de manera que pueda compartir en tiempo real este dibujo." Logic Drawing parte de los supuestos que: El dibujo es privado, y tiene un administrador que distrubuye tres permisos a los usuarios con los que comparte el dibujo: Read, Write, y Comment.
  
Logic Drawing ofrece además la posibilidad de exportar de maneras intuitivas los diseños hechos, ver los cambios que se hicieron como un historial de cambios, comentar y chatear en las salas. Logic Drawing pretende expandirse a otras funcionalidades en el tiempo próximo.

### 2) Decisiones de construcción de aplicación:
Decidimos usar una base de datos relacional desplegada con SQLite, ya que para nuestro problema, necesitabamos hacer muchas consultas de manera rápida. Además, siguiendo el modelo UML (ver imagen), era fácil visualizar las relaciones mediante una base de datos.
![alt text](https://github.com/isis3710-uniandes/Team09-back/blob/master/Design%20Constraints/Class%20Model.png)

Por consiguiente, NO se está persistiendo con JSON si no diréctamente en un archivo .db, visualizable con cualquier editor de bases de datos (Recomendamos SQLite Studio). 



## 3) Despliegue 

#### Para el despliegue de la aplicación, se deben seguir los siguientes pasos: 

#### a) Asegurar tener node en la versión 10.0.0 o mayor, y NPM en la versión 6.0.0 o mayor.

#### b) Tener instalado sqlite, sqlite3, sequelize, sequelize-cly, npm-pre-gyp, npm-gyp, express y body-parser. Incluímos todas en el repositorio de manera configurada para que corra, sin embargo es recomendable instalar al menos las últimas 4 de manera global.

#### c) Clonar el repositorio a su equipo. Los caminos que se usan son relativos por lo que no importa la dirección en donde se clone.

#### d) Abrir terminal, y moverse hacia el directorio en donde se encuentra el proyecto. Luego, inicializar el servidor.
> cd ../Team09-back && node index.js 

#### e) Nuestro servidor estará corriendo en localhost sobre el puerto 3000. Las colecciones de Postman automáticamente tienen esto configurado, pero se pueden probar todas las conexiones manualmente con las direcciones del API descritas en nuestra documentación.
