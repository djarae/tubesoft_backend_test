'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chronometer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Chronometer.init({
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Chronometer',
  });
  return Chronometer;
};