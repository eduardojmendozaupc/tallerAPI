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
      1. getAllWinners
      2. getOneWinner
      3. createNewWinner
      4. updateOneWinner
      5. deleteOneWinner
      
    Para ello deben ejecutar la sentencia SQL correspondiente a cada uno de los métodos, por ejemplo en el método **getAllWinners** 
    (el cuál ya se encuentra implementado en el código), se puede ver la sentencia 
