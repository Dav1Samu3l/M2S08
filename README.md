# M2S08

Este projeto é uma API backend desenvolvida em Node.js utilizando Express e Sequelize para gerenciamento de contratos de estágio.

## Visão geral

O sistema gerencia as seguintes entidades:
- **Estagiários (Trainees):** Cadastro de dados pessoais de estagiários.
- **Empresas (Companies):** Cadastro de empresas e responsáveis.
- **Categorias (Categories):** Áreas ou tipos de contratos.
- **Contratos (Contracts):** Relação entre estagiários, empresas e categorias, com dados de vigência e remuneração.

A API utiliza banco de dados relacional (ex: PostgreSQL) e contém rotas RESTful para gerenciamento das entidades.

## Tecnologias utilizadas

- Node.js
- Express
- Sequelize (ORM)
- Banco de dados relacional (configurável, exemplo: PostgreSQL)
- CORS

## Funcionalidades principais

- Cadastro, consulta, atualização e exclusão de estagiários, empresas, categorias e contratos.
- Relacionamento entre tabelas via Sequelize.
- Middleware para CORS e JSON.
- Migrations para estruturação do banco de dados.

## Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Dav1Samu3l/M2S08.git
   cd M2S08
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   Crie um arquivo `.env` na raiz do projeto e preencha com as informações do seu banco de dados, por exemplo:
   ```
   DIALECT=postgres
   HOST=localhost
   USERNAMEDB=seu_usuario
   PASSWORDDB=sua_senha
   DATABASE=nome_do_banco
   PORT=5432
   ```

4. **Execute as migrations**
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor**
   ```bash
   node src/app.js
   ```
   O servidor estará disponível em `http://localhost:4444`.

## Estrutura das principais rotas

- `/categories` - Gerenciamento de categorias
- `/companies` - Gerenciamento de empresas
- `/trainees` - Gerenciamento de estagiários
- `/contracts` - Gerenciamento de contratos

## Contribuição

Sinta-se à vontade para abrir issues e pull requests para melhorias e correções!

---
Desenvolvido por [Dav1Samu3l](https://github.com/Dav1Samu3l).
