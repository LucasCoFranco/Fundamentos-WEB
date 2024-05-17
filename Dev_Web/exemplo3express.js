const express = require("express")
const app = express()

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/ex1js.html")
})

app.get("/produtos/:item/:quantidade", function(req, res) {
    res.send("Item " + req.params.item + "<br> Quantidade:  " + req.params.quantidade)
})

app.listen(8081, function() {
    console.log("Servidor Rodando na porta 8081");
})