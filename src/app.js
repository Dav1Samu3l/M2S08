const express = require('express');
const { Server } = require('./server.js');
const {categories} = require('./models/category.js');
const category = require('./models/category.js');
const app = express();
app.use('/categories', category);

const server = new Server(app);


// inicia o servidor
