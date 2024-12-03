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

async function getUserByFilter(etapa, turma, ano) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', turma);
  console.log('Valor de Ano:', ano);

  ano = parseInt(ano); // Converte ano para inteiro
  const columnListQuery = `
    SELECT string_agg(quote_ident(column_name), ', ')
    FROM information_schema.columns
    WHERE table_name = 'TabelaGeralEFUM'  
    AND column_name LIKE $1;
  `;

  const columnListResult = await executeQuery(columnListQuery, [etapa + '%']);
  const column_list = columnListResult[0].string_agg; // Obtém a lista de colunas

  // Montando a consulta SQL
  const sql = `
    SELECT 
      NomeAluno, 
      RM, 
      "NotaFinalBIO", 
      "NotaFinalFIS", 
      "NotaFinalQUI", 
      "NotaFinalMA", 
      "NotaFinalLP", 
      "NotaFinalAR", 
      "NotaFinalEF", 
      "NotaFinalLI", 
      "NotaFinalHI", 
      "NotaFinalGE", 
      "NotaFinalSOC", 
      "NotaFinalFIL",
      ComDeficiencia, 
      Ano, 
      Turma, 
      ${column_list}
    FROM TabelaGeralEM 
    WHERE Turma LIKE $1 
    AND Ano = $2;
  `;

  const params = [turma, ano];

  console.log('Query:', sql);

  const records = await executeQuery(sql, params);
  return records;
}

// Função para filtrar registros com base em notas
async function getUserByFilterNota(etapa, turma, ano, nota) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', turma);
  console.log('Valor de Ano:', ano);
  console.log('Valor de Nota:', nota);

  ano = parseInt(ano); // Converte ano para inteiro
  const columnListQuery = `
    SELECT string_agg(quote_ident(column_name), ', ')
    FROM information_schema.columns
    WHERE table_name = 'TabelaGeralEM'  
    AND column_name LIKE $1;
  `;

  const columnListResult = await executeQuery(columnListQuery, [etapa + '%']);
  const column_list = columnListResult[0].string_agg; // Obtém a lista de colunas

  // Montando a consulta SQL
  const sql = `
    SELECT 
      NomeAluno, 
      RM, 
      "NotaFinalBIO", 
      "NotaFinalFIS", 
      "NotaFinalQUI", 
      "NotaFinalMA", 
      "NotaFinalLP", 
      "NotaFinalAR", 
      "NotaFinalEF", 
      "NotaFinalLI", 
      "NotaFinalHI", 
      "NotaFinalGE", 
      "NotaFinalSOC", 
      "NotaFinalFIL",
      ComDeficiencia, 
      Ano, 
      Turma, 
      ${column_list}
    FROM TabelaGeralEM 
    WHERE Turma LIKE $1 
    AND Ano = $2 
    AND (NotaFinalBIO < $3 OR NotaFinalFIS < $3 OR NotaFinalQUI < $3 OR NotaFinalMA < $3 OR NotaFinalLP < $3 OR NotaFinalAR < $3 OR NotaFinalEF < $3 OR NotaFinalLI < $3 OR NotaFinalHI < $3 OR NotaFinalGE < $3 OR NotaFinalSOC < $3 OR NotaFinalFIL < $3) 
    ORDER BY NomeAluno;
  `;

  const params = [turma, ano, nota];

  console.log('Query:', sql);

  const records = await executeQuery(sql, params);
  return records;
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
  getUserByFilterNota,
};