// Modelo Sequelize para a tabela 'Pedido' (compra finalizada)

module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    produtos: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
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
  return Pedido;
};
