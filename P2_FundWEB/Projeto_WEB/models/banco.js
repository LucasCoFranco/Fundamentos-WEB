const Sequelize = require("sequelize")
const sequelize = new Sequelize("formulario", "lucas", "", {
    host: "localhost",
    dialect: "mysql"
})

const Agendamentos = sequelize.define('agendamentos',{
    nome:{
        type: Sequelize.STRING
    },
    veiculo:{
        type: Sequelize.STRING
    },
    marca:{
        type: Sequelize.STRING
    },
    ano:{
        type: Sequelize.INTEGER
    },
    endereco:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.INTEGER
    }
})

Agendamentos.sync({force:true}) //essa linha cria o banco de dados e NÃO pode estar comentada

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}