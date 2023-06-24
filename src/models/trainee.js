const { Model, DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

class Trainee extends Model {}

Trainee.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rg: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  primary_phone_contact: {
    type: DataTypes.STRING,
    allowNull: false
  },
  secondary_phone_contact: {
    type: DataTypes.STRING
  },
  date_birth: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  father_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mother_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  have_special_needs: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Trainee'
});

module.exports = Trainee;
