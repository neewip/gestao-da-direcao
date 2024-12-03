// models/userModel.js

// Importa a função de conexão do banco de dados (assumindo que já está configurada em outro arquivo)
const pool = require("../database/connection"); // Ajuste o caminho conforme necessário

// Função genérica para executar uma query SQL
async function executeQuery(query, params = []) {
  // Retorna uma Promise para lidar com a execução assíncrona da query
  return new Promise((resolve, reject) => {
    pool.query(query, params, (err, result) => {
      if (err) {
        // Se ocorrer um erro, a Promise é rejeitada
        reject(err);
      } else {
        // Resolve a Promise com os resultados
        resolve(result.rows);
      }
    });
  });
}

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const query = "SELECT * FROM TabelaGeralEFUM;";  // Define a query SQL para obter todos os registros da tabela "Users"
  return await executeQuery(query);  // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(RM) {
  const query = "SELECT * FROM TabelaGeralEFUM WHERE RM = $1";  // Query SQL com um parâmetro para filtrar pelo ID
  const params = [RM];  // Define o parâmetro para ser passado na query
  const users = await executeQuery(query, params);  // Executa a query com os parâmetros
  return users.length > 0 ? users[0] : null;  // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

// Função para filtrar registros com base em critérios
async function getUserByFilter(etapa, Turma, Ano) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);

  Ano = parseInt(Ano); // Converte Ano para inteiro

  // Obtendo a lista de colunas que começam com o valor de 'etapa'
  const columnListQuery = `
    SELECT string_agg(quote_ident(column_name), ', ')
    FROM information_schema.columns
    WHERE table_name = 'tabelageralefum'  
    AND column_name LIKE $1;
  `;

  const columnListResult = await executeQuery(columnListQuery, [etapa + '%']);
  const column_list = columnListResult[0].string_agg; // Obtém a lista de colunas

  // Montando a consulta SQL
  const sql = `
    SELECT 
      NomeAluno, 
      RM, 
      NotaFinalCN, 
      NotaFinalLP, 
      NotaFinalAR, 
      NotaFinalEF, 
      NotaFinalCCE, 
      NotaFinalLI, 
      NotaFinalPF, 
      NotaFinalROB, 
      NotaFinalPR, 
      NotaFinalPSC,
      ComDeficiencia, 
      Ano, 
      Turma, 
      ${column_list}
    FROM tabelageralefum 
    WHERE Turma LIKE $1 
    AND Ano = $2;
  `;

  const params = [Turma, Ano];

  console.log('Query:', sql);

  const users = await executeQuery(sql, params);
  return users;
}

// Função para filtrar registros com base em notas
async function getUserByFilterNota(etapa, Turma, Ano, nota) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);
  console.log('Valor de Nota:', nota);

  Ano = parseInt(Ano); // Converte Ano para inteiro

  // Obtendo a lista de colunas que começam com o valor de 'etapa'
  const columnListQuery = `
    SELECT string_agg(quote_ident(column_name), ', ')
    FROM information_schema.columns
    WHERE table_name = 'tabelageralefum'  
    AND column_name LIKE $1;
  `;

  const columnListResult = await executeQuery(columnListQuery, [etapa + '%']);
  const column_list = columnListResult[0].string_agg; // Obtém a lista de colunas

  // Montando a consulta SQL
  const sql = `
    SELECT 
      NomeAluno, RM, 
      NotaFinalCN, 
      NotaFinalLP, 
      NotaFinalAR, 
      NotaFinalEF, 
      NotaFinalCCE, 
      NotaFinalLI, 
      NotaFinalPF, 
      NotaFinalROB, 
      NotaFinalPR, 
      NotaFinalPSC,
      ComDeficiencia, 
      Ano, 
      Turma, 
      ${column_list}
    FROM tabelageralefum 
    WHERE Turma LIKE $1 
    AND Ano = $2 
    AND (NotaFinalCN < $3 OR NotaFinalLP < $3 OR NotaFinalAR < $3 OR NotaFinalEF < $3 OR NotaFinalCCE < $3 OR NotaFinalLI < $3 OR NotaFinalPF < $3 OR NotaFinalROB < $3 OR NotaFinalPR < $3 OR NotaFinalPSC < $3) 
    ORDER BY NomeAluno;
  `;

  const params = [Turma, Ano, nota];

  console.log('Query:', sql);

  const users = await executeQuery(sql, params);
  return users;
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
  getUserByFilterNota,
};