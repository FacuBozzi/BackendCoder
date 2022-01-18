const fs = require("fs").promises

class Contenedor {

    
    constructor(rutaArchivo, id){
        this.rutaArchivo = rutaArchivo
        this.id = id
    }

    rutaArchivo = "./texto.txt"
    id = 0
    // constructor(archivo, id){
    //     this.archivo = archivo
    //     this.id = id
    // }


    async save(object) {
        try {
          const miObjeto = objeto
          await fs.writeFile(rutaArchivo, miObjeto, "utf-8");
          return this.id + 1
        } catch (error) {
          console.error(`Error intentando modificar el archivo: ${error.message}`);
        }
      }
      
      async agregarObjeto(object) {
        try {
          const miObjeto = object
          await fs.writeFile(this.rutaArchivo, miObjeto, "utf-8",{ flag: 'a' });
        } catch (error) {
          console.error(`Error intentando modificar el archivo: ${error.message}`);
        }
      }

    async getById(id) {
        try {
          const data = await fs.readFile(this.rutaArchivo,"utf-8");
          if (data == id) {
              return data
          } else {
              console.log("id no encontrado")
          }
        } catch (error) {
          console.error(`Error intentando modificar el archivo: ${error.message}`);
        }
      }

      
      async getAll(rutaArchivo) {
          try {
              const data = await fs.readFile(rutaArchivo, "utf-8");
              console.log(data.toString());
        } catch (error) {
          console.error(`Error intentando modificar el archivo: ${error.message}`);
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.rutaArchivo, " ", "utf-8");
            console.log("todo borrado!")
          } catch (error) {
            console.error(`Error intentando modificar el archivo: ${error.message}`);
          }
    }

    async deleteById(id) {
        try {
            const data = await fs.readFile(this.rutaArchivo,"utf-8");
            if (data.id == id) {
                await fs.writeFile(this.rutaArchivo, " ", "utf-8");
                console.log("contenido por id borrado!")
            } else {
                console.log("id no encontrado")
            }
          } catch (error) {
            console.error(`Error intentando modificar el archivo: ${error.message}`);
          }
    }
    

}

const miContenedor = new Contenedor("./texto.txt")
miContenedor.save([])
