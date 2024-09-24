// app.js

// Importa o módulo "express" para criar o servidor
const express = require("express");

// Cria uma instância do Express, que será usada como a aplicação principal
const app = express();

// Importa o middleware "cors" para habilitar o compartilhamento de recursos entre diferentes origens (Cross-Origin Resource Sharing)
const cors = require('cors');

// Define a porta em que o servidor vai rodar. Primeiro tenta usar a variável de ambiente PORT, senão usa a porta 3001
const port = process.env.PORT || 3001;

// Carrega as variáveis de ambiente do arquivo .env
require("dotenv").config();

// Middleware do Express para interpretar o corpo das requisições como JSON
app.use(express.json());

// Middleware "cors" para permitir requisições de diferentes origens (evita problemas de CORS)
app.use(cors());

// Importa as rotas de usuários definidas em "./routes/users"
const userRoutes = require("./routes/allRoutes");

// Associa as rotas de usuários ao caminho "/users"
// Todas as requisições que começarem com "/users" serão tratadas pelas rotas definidas em "userRoutes"
app.use("/", userRoutes);

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});