'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trainee = sequelize.define('Trainee', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Trainee.associate = function(models) {
    // associations can be defined here
  };
  return Trainee;
};