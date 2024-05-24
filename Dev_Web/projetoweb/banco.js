const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("exemplo", "lucas", " ", {
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
    }
})

Agendamentos.sync({force: true}).then(() => {
    console.log("Tabela criada com sucesso!")
}).catch((error) => {
    console.log("Erro ao criar tabela: " + error)
}) //isso acima é a criação da tabela "agendamentos" no banco de dados que foi criado logo acima
