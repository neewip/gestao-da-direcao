// Importa a conexão existente
const pool = require("../database/connection"); 

// Função genérica para executar uma query SQL
async function executeQuery(query, params = []) {
  const client = await pool.connect(); // Estabelece uma conexão com o banco de dados
  try {
    const res = await client.query(query, params); // Executa a query com os parâmetros
    return res.rows; // Retorna as linhas do resultado
  } catch (err) {
    throw err; // Lança erro se ocorrer
  } finally {
    client.release(); // Libera o cliente de volta ao pool
  }
}

// Função para obter todos os registros da tabela TabelaGeralEFDOIS
async function getAllRecords() {
  const query = "SELECT * FROM TabelaGeralEFDOIS;"; // Query para obter todos os registros
  return await executeQuery(query); // Executa a query
}

// Função para obter um registro pelo ID
async function getRecordById(rm) {
  const query = "SELECT * FROM TabelaGeralEFDOIS WHERE RM = $1"; // Query SQL com um parâmetro para filtrar pelo ID
  const records = await executeQuery(query, [rm]); // Executa a query com o parâmetro
  return records.length > 0 ? records[0] : null; // Retorna o primeiro registro se houver algum resultado, ou null se não houver
}

// Função para atualizar um campo específico
async function updateField(rm, fieldName, fieldValue) {
  const query = `UPDATE TabelaGeralEFDOIS SET ${fieldName} = $1 WHERE RM = $2;`; // Query para atualizar um campo
  await executeQuery(query, [fieldValue, rm]); // Executa a query com os parâmetros
}

// Função para filtrar registros com base em critérios específicos
async function getRecordsByFilter(etapa, turma, ano) {
  const query = `
    SELECT *
    FROM TabelaGeralEFDOIS
    WHERE Turma LIKE $1 AND Ano = $2 AND etapa = $3
    ORDER BY NomeAluno;
  `;
  
  const records = await executeQuery(query, [`%${turma}%`, ano, etapa]); // Executa a query com os parâmetros
  return records; // Retorna os registros filtrados
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllRecords,
  getRecordById,
  updateField,
  getRecordsByFilter,
};const executeQuery = require("../config/config"); // Importa a função executeQuery do arquivo de configuração