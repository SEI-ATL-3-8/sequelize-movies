'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.movie.belongsTo(models.director)
      models.movie.belongsToMany(models.user, {through: 'userMovie'})

    }
  };
  movie.init({
    title: DataTypes.STRING,
    releaseDate: DataTypes.INTEGER,
    synopsis: DataTypes.STRING,
    directorId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};