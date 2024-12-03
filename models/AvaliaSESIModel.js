// models/userModel.js

// Importa a conexão existente
const db = require('../database/connection'); // Certifique-se de que o caminho está correto

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const result = await db.query('SELECT * FROM AvaliaSESI;'); // Executa a query para obter todos os registros
  return result.rows; // Retorna os registros
}

// Função para obter um usuário pelo ID
async function getUserById(rm) {
  const query = 'SELECT * FROM AvaliaSESI WHERE rm = $1'; // Query SQL com um parâmetro para filtrar pelo ID
  const result = await db.query(query, [rm]); // Executa a query com o parâmetro
  return result.rows.length > 0 ? result.rows[0] : null; // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

// Função para atualizar um usuário existente
async function updateInc(rm, ComDeficiencia) {
  console.log('Valor de rm:', rm);
  console.log('Valor de ComDeficiencia:', ComDeficiencia);

  // Acesse o valor de ComDeficiencia corretamente, caso seja um objeto
  if (typeof ComDeficiencia === 'object' && ComDeficiencia !== null) {
    ComDeficiencia = ComDeficiencia.ComDeficiencia; // Acesse a propriedade correta
  }

  const query = `UPDATE AvaliaSESI SET ComDeficiencia = $1 WHERE rm = $2;`;
  const params = [ComDeficiencia, rm];
  await db.query(query, params); // Executa a query com os parâmetros
  console.log('Query:', query);
}

// Função para obter usuários por filtro
async function getUserByFilter(etapa, Turma, Ano) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);

  Ano = parseInt(Ano); // Converte Ano para inteiro

  // Obtendo a lista de colunas que começam com o valor de 'etapa'
  const columnListQuery = `
    SELECT string_agg(quote_ident(column_name), ', ')
    FROM information_schema.columns
    WHERE table_name = 'avaliasesifilter'  
    AND column_name LIKE $1;
  `;

  const columnListResult = await db.query(columnListQuery, [etapa + '%']);
  const column_list = columnListResult.rows[0] ? columnListResult.rows[0].string_agg : null; // Verifica se o resultado não é undefined

  if (!column_list) {
    throw new Error('Nenhuma coluna encontrada que corresponda ao filtro especificado.');
  }

  // Montando a consulta SQL
  const sql = `
    SELECT NomeAluno, Turma,
      ${column_list}
    FROM avaliasesifilter  
    WHERE Turma LIKE $1 
    AND Ano = $2
    ORDER BY NomeAluno;
  `;

  const params = [`%${Turma}%`, Ano]; // Note o uso de `%${Turma}%` para fazer a busca LIKE

  console.log('Query:', sql);

  const users = await db.query(sql, params); // Usando db.query diretamente
  return users.rows; // Retorna os resultados
}
// Exporta as funções para serem usadas nos controllers
module.exports = {
  updateInc,
  getUserByFilter,
  getAllUsers,
  getUserById,
};