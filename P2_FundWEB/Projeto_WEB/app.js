const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post.js")

app.engine("handlebars", handlebars({ defaultLayout: "main", runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
} }))
app.set("view engine", "handlebars")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", function (req, res) {
    res.render("primeira_pagina")
})

app.post("/cadastrar", function (req, res) {
    console.log("Dados recebidos:", req.body);
    post.create({
        nome: req.body.nome,
        veiculo: req.body.veiculo,
        marca: req.body.marca,
        ano: req.body.ano,
        endereco: req.body.endereco,
        email: req.body.email,
        telefone: req.body.telefone

    }).then(function () {
        res.json({ message: "Dados cadastrados com sucesso!" });
    }).catch(function (erro) {
        console.error("Falha ao cadastrar os dados:", erro);
        res.status(500).json({ error: "Falha ao cadastrar os dados" });
    })
})

    app.get("/visualizar", function (req, res) {
    post.findAll().then(function (dados) {
        res.render("visualizar", { dados: dados });
    }).catch(function (error) {
        res.status(500).send("Erro ao visualizar os dados: " + error.message);
    });
});

    app.get("/alterar/:id", function (req, res) {
        const id = req.params.id;
        post.findByPk(id).then(function (dados) {
            if (!dados) {
                return res.status(404).send("Dados não encontrados");
            }
            res.render("alterar", { dados: dados });
        }).catch(function (error) {
            res.status(500).send("Erro ao buscar os dados: " + error.message);
        });
    })

    app.post("/alterar/:id", function (req, res) {
        const id = req.params.id;
        post.findByPk(id).then(function (dados) {
            if (!dados) {
                return res.status(404).send("Dados não encontrados");
            }
            dados.nome = req.body.nome;
            dados.veiculo = req.body.veiculo;
            dados.marca = req.body.marca;
            dados.ano = req.body.ano;
            dados.endereco = req.body.endereco;
            dados.email = req.body.email;
            dados.telefone = req.body.telefone;
            return dados.save();
        }).then(function () {
            res.redirect("/visualizar");
        }).catch(function (error) {
            res.status(500).send("Erro ao atualizar os dados: " + error.message);
        });
    });

    /* coisas que eu preciso colocar
    
    <form id="formulario">
    
    .then(function(data) {
    console.log('Dados cadastrados com sucesso:', data);
    alert('Dados cadastrados com sucesso!');
    document.getElementById('formulario').reset(); // Corrigido para 'formulario'
})
*/

app.listen(8081, function (req, res) {
    console.log("Servidor rodando na porta 8081");
})