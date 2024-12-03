// Importa a conexão existente
const pool = require("../database/connection"); // Importa a conexão existente

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

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const query = "SELECT * FROM TabelaGeralEFDOIS;"; // Define a query SQL para obter todos os registros da tabela
  return await executeQuery(query); // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(RM) {
  const query = "SELECT * FROM TabelaGeralEFDOIS WHERE RM = $1"; // Query SQL com um parâmetro para filtrar pelo ID
  const users = await executeQuery(query, [RM]); // Executa a query com os parâmetros
  return users.length > 0 ? users[0] : null; // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

// Função para obter um usuário por filtro de nota
async function getUserByFilterNota(etapa, Turma, Ano, nota) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);
  console.log('Valor de nota:', nota);

  Ano = parseInt(Ano); // Parse etapa as an integer
  const query = `
    SELECT 
      NomeAluno, 
      RM, 
      NotaFinalCN,
      NotaFinalLP,
      NotaFinalAR,
      NotaFinalEF,
      NotaFinalHIS,
      NotaFinalGEO,
      NotaFinalEIXO,
      NotaFinalLI,
      NotaFinalPR,
      ComDeficiencia, 
      Ano, 
      Turma
    FROM TabelaGeralEFDOIS 
    WHERE Turma LIKE $1 
      AND Ano = $2
      AND (NotaFinalCN < $3 OR NotaFinalLP < $3 OR NotaFinalAR < $3 OR NotaFinalEF < $3 OR NotaFinalHIS < $3 OR NotaFinalGEO < $3 OR NotaFinalEIXO < $3 OR NotaFinalLI < $3 OR NotaFinalPR < $3)
    ORDER BY NomeAluno;
  `;
  
  const params = [`%${Turma}%`, Ano, nota]; // Define os parâmetros a serem passados na query
  const users = await executeQuery(query, params); // Executa a query com os parâmetros
  return users; // Retorna os usuários filtrados
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
  
  const params = [`%${turma}%`, ano, etapa]; // Define os parâmetros a serem passados na query
  return await executeQuery(query, params); // Execut ```javascript
  // Executa a query e retorna os registros filtrados
}

// Exporta as funções para serem utilizadas em outros módulos
module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilterNota,
  getAllRecords,
  getRecordById,
  updateField,
  getRecordsByFilter,
};