const pool = require('../database/connection');  // Ajuste o caminho conforme necessário

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const query = "SELECT * FROM AvaliaExt;"; // Define a query SQL para obter todos os registros da tabela "AvaliaExt"
  const result = await pool.query(query); // Executa a query usando o pool
  return result.rows; // Retorna todos os registros
}

// Função para obter um usuário pelo ID
async function getUserById(rm, ano) {
  console.log('Valor de RM:', rm);
  console.log('Valor de Ano:', ano);

  const result = await pool.query("SELECT * FROM AvaliaExt WHERE rm = $1 AND ano = $2", [rm, ano]); // Query SQL com parâmetros
  return result.rows[0]; // Retorna o primeiro registro
}

// Função para criar um novo usuário
async function createUser (rm, etapa, ano, tipoprova, notaExt) {
  const query = `INSERT INTO AvaliaExt (rm, etapa, ano, tipoprova, notaExt) VALUES ($1, $2, $3, $4, $5);`; // Query SQL para inserir um novo registro
  const params = [rm, etapa, ano, tipoprova, notaExt]; // Parâmetros a serem passados
  await pool.query(query, params); // Executa a query com os parâmetros
}

// Função para atualizar um usuário existente
async function updateUser (rm, etapa, ano, tipoprova, notaExt) {
  console.log('Valor de RM:', rm);
  console.log('Valor de Ano:', ano);
  console.log('Valor de TIPOPROVA:', tipoprova);

  const query = `UPDATE AvaliaExt SET etapa = $1, notaExt = $2 WHERE rm = $3 AND ano = $4 AND tipoprova = $5;`; // Query SQL para atualizar o registro
  const params = [etapa, notaExt, rm, ano, tipoprova]; // Parâmetros a serem passados
  await pool.query(query, params); // Executa a query com os parâmetros
}

// Função para deletar um usuário pelo ID
async function deleteUser (rm) {
  const query = "DELETE FROM AvaliaExt WHERE rm = $1;"; // Query SQL para deletar o usuário pelo ID
  const params = [rm]; // Parâmetro a ser passado
  await pool.query(query, params); // Executa a query com o parâmetro
}

// Função para obter um usuário pelo filtro
async function getUserByFilter(etapa, Turma, ano, tipoprova) {
  etapa = parseInt(etapa, 10); // Parse etapa as an integer
  const query = "SELECT rm, NomeAluno, notaExt, ano FROM AvaliaExtFilter WHERE etapa = $1 AND Turma LIKE $2 AND ano = $3 AND tipoprova = $4 ORDER BY NomeAluno"; // Query SQL
  const params = [etapa, Turma, ano, tipoprova]; // Parâmetros a serem passados
  const users = await pool.query(query, params); // Executa a query
  return users.rows; // Retorna os usuários
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