const fs = require("fs").promises

class Contenedor {

    
    constructor(rutaArchivo, id){
        this.rutaArchivo = rutaArchivo
        this.id = id
    }

    rutaArchivo = "./productos.txt"
    id = 0

    dataRandom
      
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
              dataRandom = dataString[Math.floor(Math.random() * dataString.length)];
              console.log(dataRandom);
        } catch (error) {
          console.error(`Error intentando modificar el archivo: ${error.message}`);
        }
    }
 

}

const miContenedor = new Contenedor("./productos.txt")
miContenedor.getAll("./productos.txt")
miContenedor.getRandom("./productos.txt")


//PARTE SERVIDOR
const express = require('express');

const app = express();

const PORT = 8080

app.get("/products", async (req, res) => {
    // ESTA DEVUELVE UNA PROMESA (POR ESO TRATE DE HACERLO ASYNC) PERO LA FUNCION ASI NO FUNCIONA Y NO TRAE LOS PRODUCTOS
    // SINO LOS TRAE EXITOSAMENTE
    res.send(await miContenedor.getAll("./productos.txt"));
})

app.get("/productsRandom", async (req, res) => {
    // ESTA DEVUELVE UNA PROMESA (POR ESO TRATE DE HACERLO ASYNC) PERO LA FUNCION ASI NO FUNCIONA Y NO TRAE LOS PRODUCTOS
    // SINO LOS TRAE EXITOSAMENTE
    res.send(await miContenedor.getRandom("./productos.txt"));
})

const server = app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: " + PORT);
})

server.on("error", error => {
    console.error(error)
})