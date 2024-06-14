const db = require("./banco.js")

const Agendamentos = db.sequelize.define("agendamentos",{
    nome:{
        type: db.Sequelize.STRING
    },
    veiculo:{
        type: db.Sequelize.STRING
    },
    marca:{
        type: db.Sequelize.STRING
    },
    ano:{
        type: db.Sequelize.INTEGER
    },
    endereco:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    }
    
})

Agendamentos.sync({force:true})

module.exports = Agendamentos