const express = require('express');
const { Server } = require('./server.js');

const app = express(); // cria uma instância do Express
const server = new Server(app); // passa a instância para a classe Server

// inicia o servidor
