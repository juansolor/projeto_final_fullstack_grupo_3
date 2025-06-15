const { Sequelize } = require('sequelize');

// Conexão Sequelize com SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // cria o arquivo na raiz do backend
});

const db = {};

db.Imagem = require('./Imagem')(sequelize, Sequelize.DataTypes);
db.Usuario = require('./Usuario')(sequelize, Sequelize.DataTypes);
// // Se você tiver mais modelos, adicione-os aqui, por exemplo:
// db.Usuario = require('./Usuario')(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;

module.exports = db;