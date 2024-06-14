const Sequelize = require("sequelize")
const sequelize = new Sequelize("formulario", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

const Agendamentos = sequelize.define('agendamentos',{
    nome:{
        type: Sequelize.STRING
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

//Agendamentos.sync({force:true})