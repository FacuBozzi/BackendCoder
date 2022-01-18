const express = require('express');

const app = express();

const PORT = 8080

app.get("/products", (req, res) => {
    res.send("Productos");
})

const server = app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto: " + PORT);
})

server.on("error", error => {
    console.error(error)
})