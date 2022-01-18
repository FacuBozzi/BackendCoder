const fs = require("fs").promises

class Contenedor {

    
    constructor(rutaArchivo, id){
        this.rutaArchivo = rutaArchivo
        this.id = id
    }

    rutaArchivo = "./productos.txt"
    id = 0
      
    async getAll(rutaArchivo) {
          try {
              const data = await fs.readFile(rutaArchivo, "utf-8");
              console.log(data.toString());
        } catch (error) {
          console.error(`Error intentando modificar el archivo: ${error.message}`);
        }
    }

    async getRandom(rutaArchivo) {
          try {
              const data = await fs.readFile(rutaArchivo, "utf-8");
              const dataString = data.toString();
              const dataRandom = dataString[Math.floor(Math.random() * dataString.length)];
              console.log(dataRandom);
        } catch (error) {
          console.error(`Error intentando modificar el archivo: ${error.message}`);
        }
    }
 

}

const miContenedor = new Contenedor("./productos.txt")
miContenedor.getAll("./productos.txt")
miContenedor.getRandom("./productos.txt")
