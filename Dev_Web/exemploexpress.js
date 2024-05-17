const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.send("Seja bem vindo ao NODE JS")
})

app.get("/contato", function(req, res) {
    res.send("Página de Contato")
})

app.listen(8081, function() {
    console.log("Servidor Rodando na porta 8081");
})