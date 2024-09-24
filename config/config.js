// config/config.js

// Carrega o arquivo .env e adiciona as variáveis de ambiente ao process.env
require("dotenv").config();

// Exporta a configuração do banco de dados
module.exports = {
  // Pega o endereço do servidor de banco de dados da variável de ambiente DB_SERVER
  server: process.env.DB_SERVER,
  
  // Configurações de autenticação para o banco de dados
  authentication: {
    // Define o tipo de autenticação, aqui é "default" (padrão)
    type: "default",
    
    // Opções de autenticação: nome de usuário e senha
    options: {
      // Pega o nome de usuário da variável de ambiente DB_USERNAME
      userName: process.env.DB_USERNAME,
      
      // Pega a senha da variável de ambiente DB_PASSWORD
      password: process.env.DB_PASSWORD,
    },
  },

  // Outras opções de configuração do banco de dados
  options: {
    // Pega o nome do banco de dados da variável de ambiente DB_DATABASE
    database: process.env.DB_DATABASE,

    // Habilita a confiança no certificado do servidor (útil para evitar erros SSL em ambientes de desenvolvimento)
    trustServerCertificate: true,
  },
};