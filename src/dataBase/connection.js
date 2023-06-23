const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database.config');
const connection = new Sequelize(databaseConfig);

async function testConnection() {
  try {
    await connection.authenticate();
  } catch (error) {
    console.error('Não foi possível conectar no banco de dados.', error);
  }
}

module.exports = { connection, testConnection };

