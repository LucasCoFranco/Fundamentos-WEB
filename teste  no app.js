const express = require('express');
const { Op } = require('sequelize');
const { Dados } = require('./models'); // ajuste o caminho conforme necessário
const app = express();

// Define a rota de busca
app.get('/buscar', async (req, res) => {
    const { nome, veiculo, marca, ano, endereco, email, telefone } = req.query;

    const filtros = {};

    if (nome) filtros.nome = { [Op.like]: `%${nome}%` };
    if (veiculo) filtros.veiculo = { [Op.like]: `%${veiculo}%` };
    if (marca) filtros.marca = { [Op.like]: `%${marca}%` };
    if (ano) filtros.ano = { [Op.like]: `%${ano}%` };
    if (endereco) filtros.endereco = { [Op.like]: `%${endereco}%` };
    if (email) filtros.email = { [Op.like]: `%${email}%` };
    if (telefone) filtros.telefone = { [Op.like]: `%${telefone}%` };

    try {
        const dados = await Dados.findAll({
            where: filtros
        });
        res.render('pagina', { dados });
    } catch (error) {
        res.status(500).send('Erro ao buscar dados: ' + error.message);
    }
});

// Outras configurações e rotas

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
