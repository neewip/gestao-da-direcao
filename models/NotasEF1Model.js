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
  const query = "SELECT * FROM NotasEF1;";  // Define a query SQL para obter todos os registros da tabela "NotasEF1"
  return await executeQuery(query);  // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(RM) {
  const query = "SELECT * FROM NotasEF1 WHERE RM = $1";  // Query SQL com um parâmetro para filtrar pelo ID
  const params = [RM];  // Define os parâmetros para a query
  const users = await executeQuery(query, params);  // Executa a query com os parâmetros
  return users.length > 0 ? users[0] : null;  // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

async function getUserByFilter(etapa, Turma, Ano) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);

  Ano = parseInt(Ano); // Parse Ano as an integer
  const query = `
   DO $$
DECLARE
    word TEXT := $1;  -- Substitua pelo valor desejado
    column_list TEXT;
    sql TEXT;
BEGIN
    -- Obtendo a lista de colunas que começam com o valor de 'word'
    SELECT string_agg(quote_ident(column_name), ', ')
    INTO column_list
    FROM information_schema.columns
    WHERE table_name = 'notasef1filter'  -- Lembre-se de que os nomes de tabelas são sensíveis a maiúsculas e minúsculas se estiverem entre aspas
    AND column_name LIKE word || '%';

    -- Montando a consulta SQL
    sql := 'SELECT NomeAluno, ' || column_list || ' FROM NotasEF1Filter WHERE Turma LIKE $2 AND Ano = $3 ORDER BY NomeAluno;';

    -- Executando a consulta
    EXECUTE sql USING Turma, Ano;
END $$;
  `;

  console.log('Query:', query);

  const users = await executeQuery(query, [etapa, Turma, Ano]);
  console.log('Resultado:', users);
  return users;
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
};