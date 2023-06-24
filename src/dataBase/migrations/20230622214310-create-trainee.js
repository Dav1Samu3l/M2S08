'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('trainees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      rg: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      primary_phone_contact: {
        type: Sequelize.STRING,
        allowNull: false
      },
      secondary_phone_contact: {
        type: Sequelize.STRING
      },
      date_birth: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      father_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      mother_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      have_special_needs: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('trainees');
  }
};
