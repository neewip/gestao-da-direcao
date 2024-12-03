// models/TabelaGeralEMModel.js

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

// Função para obter todos os registros da tabela TabelaGeralEM
async function getAllRecords() {
  const query = "SELECT * FROM TabelaGeralEM;";  // Define a query SQL para obter todos os registros
  return await executeQuery(query);  // Executa a query usando a função executeQuery
}

// Função para obter um registro pelo ID
async function getRecordById(RM) {
  const query = "SELECT * FROM TabelaGeralEM WHERE RM = $1";  // Query SQL com um parâmetro para filtrar pelo ID
  const params = [RM];  // Define o parâmetro para ser passado na query
  const records = await executeQuery(query, params);  // Executa a query com os parâmetros
  return records.length > 0 ? records[0] : null;  // Retorna o primeiro registro se houver algum resultado, ou null se não houver
}

// Função para filtrar registros com base em critérios
async function getRecordsByFilter(etapa, turma, ano) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', turma);
  console.log('Valor de Ano:', ano);

  ano = parseInt(ano); // Converte ano para inteiro
  const query = `
    DO $$
    DECLARE
        word TEXT := $1;  
        column_list TEXT;
        sql TEXT;
    BEGIN
        -- Obtendo a lista de colunas que começam com o valor de 'word'
        SELECT string_agg(quote_ident(column_name), ', ')
        INTO column_list
        FROM information_schema.columns
        WHERE table_name = 'TabelaGeralEM'  
        AND column_name LIKE word || '%';

        -- Montando a consulta SQL
        sql := 'SELECT 
        NomeAluno, 
        RM, 
        NotaFinalBIO, 
        NotaFinalFIS, 
        NotaFinalQUI, 
        NotaFinalMA, 
        NotaFinalLP, 
        NotaFinalAR, 
        NotaFinalEF, 
        NotaFinalLI, 
        NotaFinalHI, 
        NotaFinalGE, 
        NotaFinalSOC, 
        NotaFinalFIL,
        ComDeficiencia, 
        Ano, 
        Turma, ' 
        || column_list || '
        FROM TabelaGeralEM 
        WHERE Turma LIKE $2 
        AND Ano = $3';

        -- Executando a consulta
        EXECUTE sql;
    END $$;
  `;

  const params = [etapa, turma, ano];

  console.log('Query:', query);

  const records = await executeQuery(query, params);
  return records;
}

// Função para filtrar registros com base em notas
async function getRecordsByFilterNota(etapa, turma, ano, nota) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', turma);
  console.log('Valor de Ano:', ano);
  console.log('Valor de Nota:', nota);

  ano = parseInt(ano); // Converte ano para inteiro
  const query = `
    DO $$
    DECLARE
        word TEXT := $1;  
        column_list TEXT;
        sql TEXT;
    BEGIN
        -- Obtendo a lista de colunas que começam com o valor de 'word'
        SELECT string_agg(quote_ident(column_name), ', ')
        INTO column_list
        FROM information_schema.columns
        WHERE table_name = 'TabelaGeralEM'  
        AND column_name LIKE word || '%';

        -- Montando a consulta SQL
        sql := 'SELECT 
        NomeAluno, 
        RM, 
        NotaFinalBIO, 
        NotaFinalFIS, 
        NotaFinalQUI, 
        NotaFinalMA, 
        NotaFinalLP, 
        NotaFinalAR, 
        NotaFinalEF, 
        NotaFinalLI, 
        NotaFinalHI, 
        NotaFinalGE, 
        NotaFinalSOC, 
        NotaFinalFIL,
        ComDeficiencia, 
        Ano, 
        Turma, ' 
        || column_list || '
        FROM TabelaGeralEM 
        WHERE Turma LIKE $2 
        AND Ano = $3 
        AND (NotaFinalBIO < $4 OR NotaFinalFIS < $4 OR NotaFinalQUI < $4 OR NotaFinalMA < $4 OR NotaFinalLP < $4 OR NotaFinalAR < $4 OR NotaFinalEF < $4 OR NotaFinalLI < $4 OR NotaFinalHI < $4 OR NotaFinalGE < $4 OR NotaFinalSOC < $4 OR NotaFinalFIL < $4) 
        ORDER BY NomeAluno;';

        -- Executando a consulta
        EXECUTE sql;
    END $$;
  `;

  const params = [etapa, turma, ano, nota];

  console.log('Query:', query);

  const records = await executeQuery(query, params);
  return records;
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllRecords,
  getRecordById,
  getRecordsByFilter,
  getRecordsByFilterNota,
};