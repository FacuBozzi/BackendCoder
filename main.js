class Contenedor {

    function save(archivo) {
        var contenido = document.getElementById("editor").value;
        var blob = new Blob([contenido], {type: "text/plain;charset=utf-8"});
        saveAs(blob, archivo);
    }

}