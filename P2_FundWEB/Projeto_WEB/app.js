const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine
const bodyParser = require("body-parser")
const post = require("./models/post.js")
const router = express.Router();
const { agendamentos } = require('./models/banco.js');
const { Sequelize, DataTypes, Op } = require('sequelize');

app.engine("handlebars", handlebars({
    defaultLayout: "main", runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))
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
});

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

app.get('/buscar', async (req, res) => {
    const { nome, veiculo, marca, ano, endereco, email, telefone } = req.query;
    const filtro = {};
    
    if(nome) filtro.nome = {[Op.like]:  `%${nome}%` }; 
    if(veiculo) filtro.veiculo = {[Op.like]:  `%${veiculo}%` }; 
    if(marca) filtro.marca = {[Op.like]:  `%${marca}%` }; 
    if(ano) filtro.ano = {[Op.like]:  `%${ano}%` }; 
    if(endereco) filtro.endereco = {[Op.like]:  `%${endereco}%` }; 
    if(email) filtro.email = {[Op.like]:  `%${email}%` }; 
    if(telefone) filtro.telefone = {[Op.like]:  `%${telefone}%` }; 


    try {
        const dados = await agendamentos.findAll({
            where: filtro 
        });

        res.render("visualizar", { dados: dados }); // Renderiza a página de visualização com os dados filtrados
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        res.status(500).send('Erro ao buscar dados');
    }
});


app.get('/excluir/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Encontra o registro pelo ID
        const dados = await agendamentos.findByPk(id);

        if (!dados) {
            return res.status(404).send('Dados não encontrados para exclusão');
        }

        // Renderiza a página de confirmação de exclusão
        res.render("excluir", { dados: dados });
    } catch (error) {
        console.error('Erro ao buscar dados para exclusão:', error);
        res.status(500).send('Erro ao buscar dados para exclusão');
    }
});

// Rota para lidar com a exclusão
app.post('/excluir/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Encontra o registro pelo ID e o exclui
        const dados = await agendamentos.findByPk(id);
        
        if (!dados) {
            return res.status(404).send('Dados não encontrados para exclusão');
        }

        await dados.destroy();

        // Redireciona para uma página ou rota após a exclusão
        res.redirect('/visualizar'); // Por exemplo, redireciona para a página inicial
    } catch (error) {
        console.error('Erro ao excluir dados:', error);
        res.status(500).send('Erro ao excluir dados');
    }
});

app.listen(8081, function (req, res) {
    console.log("Servidor rodando na porta 8081");
})

module.exports = router;
