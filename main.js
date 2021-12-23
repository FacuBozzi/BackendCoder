class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        console.log( `${this.nombre} ${this.apellido}`)
        return `${this.nombre} ${this.apellido}`
    }

    addMascotas(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas(){
        console.log( this.mascotas.length)
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({
            nombre,
            autor
        })
    }

    getBookNames() {
        console.log( this.libros.map(book => book.nombre))
        return this.libros.map(book => book.nombre)
    }

} 

const usuario = new Usuario('Pedro','Lopez',[{nombre:'El señor de los anillos', autor: "JR TOLKIEN"},{nombre:'El codigo Da Vinci', autor:"Dan Brown"}],['Perro','Gato'])


usuario.addMascotas("Zorro")
usuario.countMascotas()
usuario.getFullName()
usuario.addBook({nombre: 'Mi buen humano',autor:'Jolier Kang'})
usuario.getBookNames()