'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contract = sequelize.define('Contract', {
    trainee_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {});
  Contract.associate = function(models) {
    // associations can be defined here
  };
  return Contract;
};