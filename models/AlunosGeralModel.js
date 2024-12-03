// models/userModel.js

// Importa a conexão existente
const pool = require('../database/connection');  // Ajuste o caminho conforme necessário

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const result = await pool.query("SELECT * FROM AlunosGeral;");  // Define a query SQL para obter todos os registros da tabela "AlunosGeral"
  return result.rows;  // Retorna os registros
}

// Função para obter um usuário pelo ID
async function getUserById(RM) {
  const query = "SELECT * FROM AlunosGeral WHERE RM = $1";  // Query SQL com um parâmetro para filtrar pelo ID
  const result = await pool.query(query, [RM]);  // Executa a query com o parâmetro
  return result.rows.length > 0 ? result.rows[0] : null;  // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

// Função para criar um novo usuário
async function createUser (RM, NomeAluno, Turma, Ano) {
  const query = `INSERT INTO AlunosGeral (RM, NomeAluno, Turma, Ano) VALUES ($1, $2, $3, $4);`;  // Query SQL para inserir um novo registro
  const params = [RM, NomeAluno, Turma || null, Ano || null];  // Define os parâmetros
  await pool.query(query, params);  // Executa a query com os parâmetros
}

// Função para atualizar um usuário existente
async function updateUser (RM, NomeAluno, Turma, Ano) {
  const query = `UPDATE AlunosGeral SET NomeAluno = $2, Turma = $3, Ano = $4 WHERE RM = $1;`;  // Query SQL para atualizar o registro
  const params = [RM, NomeAluno, Turma || null, Ano || null];  // Define os parâmetros
  await pool.query(query, params);  // Executa a query com os parâmetros
}

// Função para deletar um usuário pelo ID
async function deleteUser (RM) {
  const query = "DELETE FROM AlunosGeral WHERE RM = $1;";  // Query SQL para deletar o usuário pelo ID
  await pool.query(query, [RM]);  // Executa a query com o parâmetro
}

// Função para obter usuários por filtro
async function getUserByFilter(Turma, ano) {
  const query = "SELECT * FROM AlunosGeral WHERE Turma LIKE $1 AND Ano = $2 ORDER BY NomeAluno";  // Query SQL para filtrar usuários
  const params = [Turma, ano];  // Define os parâmetros
  const result = await pool.query(query, params);  // Executa a query com os parâmetros
  return result.rows;  // Retorna os registros filtrados
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  createUser ,
  updateUser ,
  deleteUser ,
  getUserByFilter,
};