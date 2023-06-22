
const { Sequelize } = require('sequelize');
const routes = require('./src/routers');
const config = require('./src/config/database.config.js');
const express = require('express');

const sequelize = new Sequelize(config.development);

const app = express();


if (typeof routes === 'function') {
  app.use(routes);
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});


