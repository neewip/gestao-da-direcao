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

async function getUserByFilter(etapa, Turma, Ano) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);

  Ano = parseInt(Ano); // Parse etapa as an integer
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
        WHERE table_name = 'tabelageralefum'  
        AND column_name LIKE word || '%';

        -- Montando a consulta SQL
        sql := 'SELECT 
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
        Turma, ' 
        || column_list || '
        FROM tabelageralefum 
        WHERE Turma LIKE $2 
        AND Ano = $3';

        -- Executando a consulta
        EXECUTE sql;
    END $$;
  `;

  const params = [etapa, Turma, Ano];

  console.log('Query:', query);

  const users = await executeQuery(query, params);
  return users;
}

async function getUserByFilterNota(etapa, Turma, Ano, nota) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);
  console.log('Valor de Nota:', nota);

  Ano = parseInt(Ano); // Parse etapa as an integer
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
        WHERE table_name = 'tabelageralefum'  
        AND column_name LIKE word || '%';

        -- Montando a consulta SQL
        sql := 'SELECT 
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
        Turma, ' 
        || column_list || '
        FROM tabelageralefum 
        WHERE Turma LIKE $2 
        AND Ano = $3 
        AND (NotaFinalCN < $4 OR NotaFinalLP < $4 OR NotaFinalAR < $4 OR NotaFinalEF < $4 OR NotaFinalCCE < $4 OR NotaFinalLI < $4 OR NotaFinalPF < $4 OR NotaFinalROB < $4 OR NotaFinalPR < $4 OR NotaFinalPSC < $4) 
        ORDER BY NomeAluno;';

        -- Executando a consulta
        EXECUTE sql;
    END $$;
  `;

  const params = [etapa, Turma, Ano, nota];

  console.log('Query:', query);

  const users = await executeQuery(query, params);
  return users;
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  getUserByFilter,
  getUserByFilterNota,
};