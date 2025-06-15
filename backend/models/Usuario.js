// Modelo Sequelize para a tabela 'usuarios'

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    comportamento: {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'usuarios'
  });

  return Usuario;
};