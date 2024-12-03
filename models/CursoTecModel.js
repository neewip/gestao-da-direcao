// models/userModel.js

// Importa o pool de conexão do banco de dados
const pool = require("../database/connection");

// Função genérica para executar uma query SQL
async function executeQuery(query, params = []) {
  // Executa a query usando o pool e retorna os resultados
  const { rows } = await pool.query(query, params);
  return rows; // Retorna as linhas retornadas pela query
}

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const query = "SELECT * FROM CursoTec;";  // Define a query SQL para obter todos os registros da tabela "CursoTec"
  return await executeQuery(query);  // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(rm) {
  const query = "SELECT * FROM CursoTec WHERE rm = $1";  // Query SQL com um parâmetro para filtrar pelo ID
  const users = await executeQuery(query, [rm]);  // Executa a query com o parâmetro
  return users.length > 0 ? users[0] : null;  // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

// Função para obter usuários pelo filtro
async function getUserByFilter(etapa, Turma, ano) {
  etapa = parseInt(etapa, 10); // Converte etapa para um inteiro
  const query = "SELECT * FROM CursoTecFilter WHERE etapa = $1 AND Turma LIKE $2 AND ano = $3 ORDER BY NomeAluno"; // Define a query SQL
  const params = [etapa, Turma, ano]; // Parâmetros a serem passados
  const users = await executeQuery(query, params); // Executa a query
  return users; // Retorna os usuários encontrados
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
};