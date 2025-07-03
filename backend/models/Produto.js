
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    promotionalPrice: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
  return Produto;
};
