const express = require("express");
const app = express();
const handlebars = require("express-handlebars").engine;
const { Cliente, cadastrarCliente } = require("sequelize"); // Substitua pelo caminho correto do seu arquivo Sequelize

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render("primeira_pagina");
});

app.post("/cadastrar", async function(req, res) {
    try {
        // Extrai os dados do corpo da requisição
        const { nome, endereco, email, telefone } = req.body;
        
        // Chama a função para cadastrar o cliente
        await cadastrarCliente({ nome, endereco, email, telefone });
        
        res.send("Cliente cadastrado com sucesso!");
    } catch (error) {
        res.status(500).send("Erro ao cadastrar cliente");
    }
});

app.listen(8081, function(req, res) {
    console.log("Servidor rodando na porta 8081");
});