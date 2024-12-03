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

  // Estabelece uma conexão com o banco de dados
  const connection = await connectDatabase();
  
  // Retorna uma Promise para lidar com a execução assíncrona da query
  return new Promise((resolve, reject) => {
    // Cria uma nova requisição SQL com a query passada e um callback para erros
    const request = new Request(query, (err) => {
      if (err) {
        // Se ocorrer um erro, a Promise é rejeitada e a conexão é fechada
        reject(err);
        connection.close();
      }
    });

    // Adiciona parâmetros à requisição SQL (nome, tipo e valor)
    params.forEach(({ name, type, value }) => {
      request.addParameter(name, type, value);
    });

    // Array para armazenar os resultados retornados pela query
    let results = [];

    // Evento "row" é disparado para cada linha retornada pela query
    request.on("row", (columns) => {
      // Cria um objeto para cada linha e armazena suas colunas e valores
      let row = {};
      columns.forEach((column) => {
        row[column.metadata.colName] = column.value;
      });
      results.push(row);
    });

    // Evento "requestCompleted" é disparado quando a query é completamente executada
    request.on("requestCompleted", () => {
      // Fecha a conexão com o banco de dados e resolve a Promise com os resultados
      connection.close();
      resolve(results);
    });

    // Executa a requisição SQL
    connection.execSql(request);
  });
}

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const query = "SELECT * FROM TabelaGeralEFDOIS;";  // Define a query SQL para obter todos os registros da tabela "Users"
  return await executeQuery(query);  // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(RM) {
  const query = "SELECT * FROM TabelaGeralEFDOIS WHERE RM = @RM";  // Query SQL com um parâmetro para filtrar pelo ID
  const params = [{ name: "RM", type: TYPES.Int, value: RM }];  // Define o parâmetro @id para ser passado na query
  const users = await executeQuery(query, params);  // Executa a query com os parâmetros
  return users.length > 0 ? users[0] : null;  // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

  async function getUserByFilterNota(etapa, Turma, Ano, nota) {
    console.log('Valor de etapam:', etapa);
    console.log('Valor de Turmam:', Turma);
    console.log('Valor de Anom:', Ano);
    console.log('Valor de nota:', nota);

    
  
    Ano = parseInt(Ano); // Parse etapa as an integer
    const query = `
        DO $$
DECLARE
    word TEXT := '${etapa}';  -- Substitua pelo valor desejado
    column_list TEXT;
    sql TEXT;
BEGIN
    -- Obtendo a lista de colunas que começam com o valor de 'word'
    SELECT string_agg(quote_ident(column_name), ', ')
    INTO column_list
    FROM information_schema.columns
    WHERE table_name = 'tabelageralefdois'  -- Lembre-se de que os nomes de tabelas são sensíveis a maiúsculas e minúsculas se estiverem entre aspas
    AND column_name LIKE word || '%';

    -- Montando a consulta SQL
    sql := 'SELECT 
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
    Turma, ' 
	|| column_list || '
FROM tabelageralefdois 
WHERE Turma LIKE ''' || '${Turma}' || ''' 
AND Ano = ' || ${Ano} || '
AND (NotaFinalCN <  ' || ${nota} || ' OR NotaFinalLP <  ' || ${nota} || ' OR NotaFinalAR <  ' || ${nota} || ' OR NotaFinalEF < ' || ${nota} || ' OR NotaFinalHIS < ' || ${nota} || ' OR NotaFinalGEO < ' || ${nota} || ' OR NotaFinalEIXO < ' || ${nota} || ' OR NotaFinalLI < ' || ${nota} || ' OR NotaFinalPR < ' || ${nota} || ') ORDER BY NomeAluno;';

    -- Executando a consulta
    EXECUTE sql;
END $$;
    `;
    const params = [
      { name: "etapa", type: TYPES.NVarChar, value: etapa },
      { name: "Turma", type: TYPES.NVarChar, value: Turma },
      { name: "Ano", type: TYPES.Int, value: Ano },
      { name: "Nota", type: TYPES.Int, value: nota }

  ];
  
    console.log('Query:', query);
  
    const users = await executeQuery(query, params);
    return users;
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
};