//dbconfig.js
const { Connection } = require('tedious');
const express = require('express');
// Configuração de conexão com o banco de dados SQL Server.
// Este objeto 'config' contém todos os detalhes necessários para
//estabelecer uma conexão com o banco de dados.
var config = {
"server": "localhost",
"authentication": {
"type": "default",// Tipo de autenticação, 'default' é a
//autenticação com nome de usuário e senha
"options": {
"userName": "sa",
"password": "0512"
}
},
"options": {
"port": 1433,
"database": "VENDASX",
"trustServerCertificate": true
}
}
// Criação de um novo objeto de conexão usando a configuração definida
//acima.
var connection = new Connection(config);
// Event listener para o evento 'connect' para lidar com os resultados
//da tentativa de conexão.
connection.on('connect', function (err) {
if (err) {
console.log('Falhou a conexão');// Loga falha caso a conexão
//não seja bem-sucedida
throw err;
}
// Se a conexão for bem-sucedida, loga no console que a conexão
//foi estabelecida.

console.log("Connectado !");
});
// Inicia a conexão com o banco de dados.
connection.connect();
// Exporta a configuração para ser usada em outras partes do
//aplicativo.
module.exports = config;