const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("Veiculos", "lucas", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso");
}).catch((erro) => {
    console.error("Falha ao conectar: ", erro);
});

const Veiculo = sequelize.define('veiculo',{
    nome:{
        type: Sequelize.STRING
    },
    ano:{
        type: Sequelize.INTEGER
    },
    marca:{
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    combustivel: {
        type: Sequelize.STRING
    }
});

Veiculo.sync({force: true}).then(() => {
    console.log("Tabela criada com sucesso!")
}).catch((error) => {
    console.log("Erro ao criar tabela: " + error)
});

const Moto = sequelize.define('moto',{
    nome:{
        type: Sequelize.STRING
    },
    ano:{
        type: Sequelize.INTEGER
    },
    marca:{
        type: Sequelize.STRING
    },
    modelo: {
        type: Sequelize.STRING
    },
    combustivel: {
        type: Sequelize.STRING
    }
});

Veiculo.sync({force: true}).then(() => {
    console.log("Tabela criada com sucesso!")
}).catch((error) => {
    console.log("Erro ao criar tabela: " + error)
});

//Veiculo.sync({force: true})
Veiculo.create({
    nome: "Gol",
    ano: 1999,
    marca: "VolksVagem",
    modelo: "hatch",
    combustivel: "Gasolina"
});

Veiculo.create({
    nome: "Corolla",
    ano: 2015,
    marca: "Toyota",
    modelo: "sedan",
    combustivel: "Flex"
});

Moto.create({
    nome: "Sahara",
    ano: 2009,
    marca: "Honda",
    modelo: "standart",
    combustivel: "Gasolina"
});
