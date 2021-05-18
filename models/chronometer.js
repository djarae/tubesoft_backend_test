'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chronometer extends Model {
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

