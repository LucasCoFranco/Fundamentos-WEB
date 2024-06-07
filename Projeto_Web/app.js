const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine

app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req, res){
    res.render("primeira_pagina")
})

app.get("/cadastro", function(req, res){
    res.render("cadastrar")
})

app.post("/cadastrar", function(req, res){
    res.send("Formulário Recebido")
})

app.listen(8081, function(){
    console.log("Servidor Ativo")
})
