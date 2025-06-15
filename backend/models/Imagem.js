module.exports = (sequelize, DataTypes) => {
  const Imagem = sequelize.define('Imagem', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isOferta: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    imagemUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Imagem;
};