// models/userModel.js

// Importa a conexão do banco de dados já estabelecida
const pool = require("../database/connection");

// Função genérica para executar uma query SQL
async function executeQuery(query, params = []) {
  try {
    const { rows } = await pool.query(query, params); // Executa a query e espera os resultados
    return rows; // Retorna as linhas retornadas pela query
  } catch (err) {
    throw err; // Lança o erro para ser tratado onde a função é chamada
  }
}

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const query = "SELECT * FROM NotasEM;"; // Define a query SQL para obter todos os registros da tabela "NotasEM"
  return await executeQuery(query); // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(RM) {
  const query = "SELECT * FROM NotasEM WHERE RM = $1"; // Query SQL com um parâmetro para filtrar pelo ID
  const params = [RM]; // Define os parâmetros para a query
  const users = await executeQuery(query, params); // Executa a query com os parâmetros
  return users.length > 0 ? users[0] : null; // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

// Função para obter usuários por filtro
async function getUserByFilter(etapa, Turma, Ano) {
  console.log('Valor original de etapa:', etapa);

  // NÃO precisa de decodeURIComponent
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);

  Ano = parseInt(Ano); // Converte Ano para inteiro

  // Obtendo a lista de colunas que começam com o valor de 'etapa'
  const columnListQuery = `
    SELECT string_agg(quote_ident(column_name), ', ') AS column_list
    FROM information_schema.columns
    WHERE table_name = 'notasemfilter'  
    AND column_name LIKE $1;
  `;

  const columnListParams = [`${etapa}%`];
  console.log('Parâmetro para consulta de colunas:', columnListParams);

  const columnListResult = await executeQuery(columnListQuery, columnListParams);

  if (!columnListResult || !columnListResult[0].column_list) {
    throw new Error("Nenhuma coluna encontrada para o filtro especificado.");
  }

  const column_list = columnListResult[0].column_list; // Obtém a lista de colunas
  console.log('Colunas selecionadas:', column_list);

  // Montando a consulta SQL
  const query = `
    SELECT NomeAluno, ${column_list} 
    FROM NotasEMFilter 
    WHERE Turma LIKE $1 AND Ano = $2 
    ORDER BY NomeAluno;
  `;

  const params = [`%${Turma}%`, Ano]; // Define os parâmetros para a consulta

  console.log('Query:', query);

  const users = await executeQuery(query, params);
  console.log('Resultado:', users);
  return users;
}



// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
};
