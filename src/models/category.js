'use strict';
const { connection } = require('../dataBase/connection');
const { Sequelize } = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
  const Category = Sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};