// models/userModel.js

const { Client } = require('pg'); // Importa o Client da biblioteca pg
const connectDatabase = require('../database/connection'); // Importa a função que conecta ao banco de dados

// Função genérica para executar uma query SQL
async function executeQuery(query, params = []) {
  const client = await connectDatabase(); // Estabelece uma conexão com o banco de dados

  try {
    // Executa a consulta SQL com os parâmetros fornecidos
    const res = await client.query(query, params);
    return res.rows; // Retorna as linhas resultantes
  } catch (err) {
    throw err; // Lança o erro para ser tratado externamente
  } finally {
    client.end(); // Fecha a conexão com o banco de dados
  }
}

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const query = "SELECT * FROM NotasEF2;"; // Define a query SQL para obter todos os registros da tabela "NotasEF2"
  return await executeQuery(query); // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(RM) {
  const query = "SELECT * FROM NotasEF2 WHERE RM = $1"; // Query SQL com um parâmetro para filtrar pelo ID
  const params = [RM]; // Define o parâmetro a ser passado na query
  const users = await executeQuery(query, params); // Executa a query com os parâmetros
  return users.length > 0 ? users[0] : null; // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

// Função para obter usuários por filtro
async function getUserByFilter(etapa, Turma, Ano) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);

  Ano = parseInt(Ano); // Converte Ano para inteiro

  // Consulta para obter a lista de colunas que correspondem ao filtro
  const columnListQuery = `
    SELECT column_name 
    FROM information_schema.columns 
    WHERE table_name = 'NotasEF2Filter' 
    AND column_name LIKE $1;
  `;

  const columnParams = [`${etapa}%`];
  const columns = await executeQuery(columnListQuery, columnParams);
  const columnNames = columns.map(col => col.column_name).join(', ');

  const query = `
    SELECT NomeAluno, ${columnNames} 
    FROM NotasEF2Filter 
    WHERE Turma LIKE $1 AND Ano = $2;
  `;

  const users = await executeQuery(query, [`%${Turma}%`, Ano]); // Executa a consulta filtrando por Turma e Ano
  console.log('Resultado:', users);
  return users; // Retorna os usuários encontrados
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
};