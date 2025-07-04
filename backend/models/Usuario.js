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
    },
    endereco: {
      type: DataTypes.STRING,
    },
    cep: {
      type: DataTypes.STRING,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'usuarios'
  });

  return Usuario;
};