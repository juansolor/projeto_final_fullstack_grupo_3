const { Sequelize } = require('sequelize');
const path = require('path');

// Conexão Sequelize com SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'), // cria o arquivo na raiz do backend
});

const db = {};

db.Imagem = require('./Imagem')(sequelize, Sequelize.DataTypes);
db.Usuario = require('./Usuario')(sequelize, Sequelize.DataTypes);
db.Carrinho = require('./Carrinho')(sequelize, Sequelize.DataTypes);
// // Se você tiver mais modelos, adicione-os aqui, por exemplo:
// db.Usuario = require('./Usuario')(sequelize, Sequelize.DataTypes);

db.Produto = require('./Produto')(sequelize, Sequelize.DataTypes);
db.Pedido = require('./Pedido')(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;

module.exports = db;