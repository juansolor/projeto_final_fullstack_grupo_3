const { Sequelize } = require('sequelize');

// Conexão Sequelize com SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // cria o arquivo na raiz do backend
});

const Imagem = require('./Imagem')(sequelize, Sequelize.DataTypes);
db.Imagem = Imagem;

// Exporta o Sequelize para os modelos
module.exports = { sequelize, db };