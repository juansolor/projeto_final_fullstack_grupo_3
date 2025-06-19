// Modelo Sequelize para a tabela 'carrinho'

module.exports = (sequelize, DataTypes) => {
  const Carrinho = sequelize.define('Carrinho', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });
  return Carrinho;
};
