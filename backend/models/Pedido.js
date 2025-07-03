
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    products: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });
  return Pedido;
};
