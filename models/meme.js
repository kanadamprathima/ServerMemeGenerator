"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class meme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      meme.belongsTo(models.user, { foreignKey: "userId" });
      meme.belongsToMany(models.user, {
        through: "favorites",
        foreignKey: "memeId",
      });
    }
  }
  meme.init(
    {
      imgUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "meme",
    }
  );
  return meme;
};
