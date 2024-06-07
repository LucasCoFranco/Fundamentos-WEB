const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("exemplo", "lucas", "", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso");
}).catch((erro) => {
    console.error("Falha ao conectar: ", erro);
}); //isso acima é a criação do banco de dados com o xampp

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso");
}).catch((erro) => {
    console.error("Falha ao conectar: ", erro);
});

const Agendamentos = sequelize.define('agendamentos',{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.INTEGER
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    observacao: {
        type: Sequelize.TEXT
    }
});
