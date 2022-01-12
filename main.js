const fs = require("fs")

class Contenedor {

    constructor(archivo, id){
        this.archivo = archivo
        this.id = id
    }


    save(archivo) {
        fs.writeFile("./texto.txt", archivo, error => {
            if (error) {
                console.log(error)
            } else {
                console.log("Archivo guardado exitosamente")
                return this.id + 1
            }
        })
    }

    getById(id) {
        fs.readFile("./texto.txt", (error, data) => {
            if (error) {
                console.log(error)
            } else {
                data == id 
                id = this.id + 1
                return data
            }
        })
    }

    getAll() {
        fs.readFile("./texto.txt", (error, data) => {
            if (error) {
                console.log(error)
            } else {
                id = this.id + 1
                return data
            }
        })  
    }

    deleteById(id) {
        fs.readFile("./texto.txt", (error, data) => {
            if (error) {
                console.log(error)
            } else {
                if (data == id) {
                    return fs.unlink("./texto.txt", error => {
                        if (error) {
                            console.log(error)
                        } else {
                            id = this.id + 1
                            console.log("Archivo eliminado exitosamente")
                        }
                    })
                }
            }
        })
    }

    deleteAll() {
        fs.unlink("./texto.txt", error => {
            if (error) {
                console.log(error)
            } else {
                id = this.id + 1
                console.log("Archivo eliminado exitosamente")
            }
        })
    }

}