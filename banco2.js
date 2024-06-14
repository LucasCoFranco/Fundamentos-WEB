const Sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

// Configurações do banco de dados
const sequelize = new Sequelize('formulario', 'root', '', {
  host: 'localhost',
  dialect: 'mysql', // ou o dialeto do seu banco de dados
  logging: false // opcional: desativa os logs do Sequelize
});

// Definição do modelo de Cliente
const Cliente = sequelize.define('cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Sincroniza o modelo com o banco de dados (cria a tabela se ainda não existir)
sequelize.sync()
  .then(() => {
    console.log('Tabela sincronizada com sucesso');
  })
  .catch(err => {
    console.error('Erro ao sincronizar tabela:', err);
  });

// Função para cadastrar um cliente
const cadastrarCliente = async (dadosCliente) => {
  try {
    const cliente = await Cliente.create(dadosCliente);
    console.log('Cliente cadastrado com sucesso:', cliente.toJSON());
    return cliente;
  } catch (err) {
    console.error('Erro ao cadastrar cliente:', err);
    throw err;
  }
};

// Função para excluir um cliente
const excluirCliente = async (clienteId) => {
  try {
    const cliente = await Cliente.findByPk(clienteId);
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    await cliente.destroy();
    console.log('Cliente excluído com sucesso');
  } catch (err) {
    console.error('Erro ao excluir cliente:', err);
    throw err;
  }
};

module.exports = {
  Cliente,
  cadastrarCliente,
  excluirCliente
};
