const express = require('express') //Framework da aplicação
const cors = require('cors') // Biblioteca utilizada para inserir headers http
const { connection } = require('./dataBase/connection') // Configuração de acesso ao banco de dados

class Server {
    constructor (server) { // Remova a atribuição padrão da instância do Express
        this.middlewares(server)
        this.database()  
        this.initializeServer(server)
      }
      async middlewares(app) {
        console.log("middlewares called");
        app.use(cors()) // Utilização da função cors dentro do servidor
        app.use(express.json()) // Habilitar entrada de dados como json no servidor
      }
      async database() {
        try {
          await connection.authenticate();
          console.log('Conexão bem sucedida!');
        } catch (error) {
          console.error('Não foi possível conectar no banco de dados.', error);
        }
      }
      async initializeServer(app) {
        const PORT = 4444 // Valor da porta do servidor
        app.listen(PORT, () => console.log(`Servidor executando na porta ${PORT}`)) // Execução do servidor
      }

    }
module.exports = { Server } 
