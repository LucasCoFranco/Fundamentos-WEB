const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("exemplo", "lucas", " ", {
    host: "localhost",
    dialect: "mysql"
});

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso");
}).catch((erro) => {
    console.error("Falha ao conectar: ", erro);
});
