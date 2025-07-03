<<<<<<< HEAD

module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    products: {
=======
// Modelo Sequelize para a tabela 'Pedido' (compra finalizada)

module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    produtos: {
>>>>>>> origin/main
      type: DataTypes.JSON,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
<<<<<<< HEAD
  });
=======
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario, { foreignKey: 'usuarioId' });
  };
>>>>>>> origin/main
  return Pedido;
};
