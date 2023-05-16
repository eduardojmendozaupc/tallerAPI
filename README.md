# Instrucciones tallerAPI

### 1. Crear una tabla llamada winners en una base de datos MySql con la siguiente estructura.
   ```sql
   CREATE TABLE `winners` (
   `id` int(10) UNSIGNED NOT NULL,
   `nombre` varchar(25) DEFAULT NULL,
   `fecha` varchar(255) DEFAULT NULL,
   `actualizado` varchar(255) DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
   ```
### 2. Clonar el repositorio con el siguiente comando 
   ```git
   git clone https://github.com/eduardojmendozaupc/tallerAPI.git
   ```
### 3. Instalar las dependencias con el siguiente comando
   ```node
   npm install
   ```
### 4. Configurar las variables de entorno con la información de conexión a la base de datos, esto se dege hacer en el archivo `.env` que se encuentra en la raíz del proyecto
   ![image](https://github.com/eduardojmendozaupc/tallerAPI/assets/132233607/ab97cefb-2301-4916-9c02-6f84820f3c87)
### 5. Ejecutar el proyecto con el siguiente comando
   ```node
   npm run dev
   ```
### 6. Analizar y entender el código para consultar todos los ganadores, esto se hace en el método `getAllWinners` en el controlador (winnerController), servicio (winnerService) y acceso a datos (Winner)
### 7. Modificar los demás métodos para que se integren con la base de datos, luego de esto la aplicación debe permitir leer y escribir en la base de datos MySql a trvaés de los siguientes métodos:
Pueden mirar el siguiente video para que les ayude a comprender el uso de promesas, async y await para manejar asincronía en javascript [Ver video](https://www.youtube.com/watch?v=6O8ax3JYboc&t=1s&ab_channel=CarlosAzaustre-AprendeJavaScript)
```
1. getAllWinners (retorna todos los ganadores)
2. getOneWinner (retorna el ganador cuyo id es pasado por parámetros)
3. createNewWinner (crea un nuevo ganador)
4. updateOneWinner (actualiza el ganador cuyo id es pasado por parámetros)
5. deleteOneWinner (elimina el ganador cuyo id es pasado por parámetros)
```
Para ello deben ejecutar la sentencia SQL correspondiente a cada una de las operaciones (consultar, crear, actualizar y eliminar), por ejemplo en el método **getAllWinners** (el cuál ya se encuentra implementado en el código), se puede ver el query en el archivo `Winner.js`
```js
const getAllWinners = (filterParams) => {
  return new Promise((resolve, reject) => {
    let query = "SELECT * FROM winners";
    if (filterParams.name) {
      query += " where nombre='" + filterParams.name + "'";
    }
    console.log(query);
    connection.query(query, (error, results) => {
      if (error) reject({ status: 500, message: error });
      resolve(Object.values(JSON.parse(JSON.stringify(results))));
    });
  });
};
```
### 8. Para probar los métodos del API pueden utilizar Postman o cualquier otro cliente similar.
