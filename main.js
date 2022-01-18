const fs = require("fs").promises

class Contenedor {

    rutaArchivo = "./texto.txt"

    constructor(rutaArchivo, id){
        this.rutaArchivo = rutaArchivo
        this.id = id
    }
    // constructor(archivo, id){
    //     this.archivo = archivo
    //     this.id = id
    // }


    async save(objeto) {
        const archivo = await fs.promises.writeFile(this.rutaArchivo, objeto, "utf-8", error => {
            try{

            }
        });
            
      
        await fs.promises.writeFile('./text', JSON.stringify(archivo));
    }
      

    async getById(id) {
        const archivo = await fs.promises.readFile(this.rutaArchivo, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                archivo.find(el => el.id === id) (
                    console.log(data)
                )
            }
        })
    }

    async getAll() {
        const archivo = await fs.promises.readFile(this.rutaArchivo, (error, data) => {
            if (error) {
                console.log(error)
            } else {
                return data
            }
        })  
    }

 
    //ESTA FUNCION LA COMENTO PORQUE NO SE DE DONDE VIENE EL ERROR

    // async deleteById(id) {
    //     const archivo = await fs.promises.readFile(rutaArchivo, (error, data) => {
    //         if (error) {
    //             console.log(error)
    //         }
    //         else {
    //             archivo.find(el => el.id === id) {
    //                 await fs.promises.unlink(this.rutaArchivo, error => {
    //                     console.log("hola")
    //                 })
    //             }
    //         }
    //     }
    // }


    deleteAll() {
        const archivo = await fs.promises.unlink("./texto.txt", error => {
            if (error) {
                console.log(error)
            } else {
                await fs.promises.unlink(this.rutaArchivo, error => {
                    console.log(error)
                })
            }
        })
    }


}

const miContenedor = new Contenedor("./texto.txt")
miContenedor.save([])
