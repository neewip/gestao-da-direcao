// models/userModel.js

// Importa o Request e os tipos de dados (TYPES) do pacote "tedious" para criar e executar consultas SQL
const { Request, TYPES } = require("tedious");

// Importa a função que conecta ao banco de dados
const connectDatabase = require("../database/connection");

// Função genérica para executar uma query SQL
async function executeQuery(query, params = []) {
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
  const query = "SELECT * FROM AvaliaExt;";  // Define a query SQL para obter todos os registros da tabela "Users"
  return await executeQuery(query);  // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(RM, Ano) {
  console.log('Valor de RM:', RM);
  console.log('Valor de Ano:', Ano);

  const query = "SELECT * FROM AlunosGeral WHERE RM = @RM AND Ano = @Ano";  // Query SQL com um parâmetro para filtrar pelo ID
  const params = [
    { name: "RM", type: TYPES.Int, value: RM },
    { name: "Ano", type: TYPES.Int, value: Ano }
  ];  // Define o parâmetro @id para ser passado na query
  const users = await executeQuery(query, params);  // Executa a query com os parâmetros
  return users.length > 0 ? users[0] : null;  // Retorna o primeiro usuário se houver algum resultado, ou null se não houver


}

// Função para criar um novo usuário
async function createUser(rm, etapa, ano, tipoprova, notaExt) {
  const query = `INSERT INTO AvaliaExt (rm, etapa, ano, tipoprova, notaExt) VALUES (@rm, @etapa, @ano, @tipoprova, @notaExt);`;  // Query SQL para inserir um novo registro
  const params = [
    { name: "rm", type: TYPES.Int, value: rm },  // Define o parâmetro @name
    { name: "etapa", type: TYPES.Int, value: etapa },  // Define o parâmetro @email
    { name: "ano", type: TYPES.Int, value: ano },
    { name: "tipoprova", type: TYPES.NVarChar, value: tipoprova },  // Define o parâmetro @age, sendo nulo caso não seja fornecido
    { name: "notaExt", type: TYPES.Decimal, value: notaExt },  // Define o parâmetro @age, sendo nulo caso não seja fornecido

  ];
  await executeQuery(query, params);  // Executa a query com os parâmetros
}

// Função para atualizar um usuário existente
async function updateUser(rm, etapa, ano, tipoprova, notaExt) {
  const query = `UPDATE AvaliaExt SET etapa = @etapa, ano = @ano, tipoprova = @tipoprova, notaExt = @notaExt WHERE rm = @rm AND ano = @ano and tipoprova = @tipoprova;`;  // Query SQL para atualizar o registro
  const params = [
    { name: "rm", type: TYPES.Int, value: rm },  // Define o parâmetro @name
    { name: "etapa", type: TYPES.Int, value: etapa },  // Define o parâmetro @email
    { name: "ano", type: TYPES.Int, value: ano },
    { name: "tipoprova", type: TYPES.NVarChar, value: tipoprova },   // Define o parâmetro @age
    { name: "notaExt", type: TYPES.Decimal, value: notaExt },  //
  ];
  await executeQuery(query, params);  // Executa a query com os parâmetros
}

// Função para deletar um usuário pelo ID
async function deleteUser(rm) {
  const query = "DELETE FROM AvaliaExt WHERE rm = @rm;";  // Query SQL para deletar o usuário pelo ID
  const params = [{ name: "rm", type: TYPES.Int, value: rm }];  // Define o parâmetro @id
  await executeQuery(query, params);  // Executa a query com o parâmetro
}

async function getUserByFilter(etapa, Turma, ano, tipoprova) {
  etapa = parseInt(etapa, 10); // Parse etapa as an integer
  const query = "select rm, NomeAluno, notaExt from AvaliaExtFilter where etapa = @etapa and Turma LIKE @Turma AND ano = @ano and tipoprova = @tipoprova";
  const params = [
    { name: "etapa", type: TYPES.Int, value: etapa },
    { name: "Turma", type: TYPES.VarChar, value: Turma },
    { name: "ano", type: TYPES.Int, value: ano },
    { name: "tipoprova", type: TYPES.VarChar, value: tipoprova },

  ];
  const users = await executeQuery(query, params);
  return users;
}





// Exporta as funções para serem usadas nos controllers
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByFilter,
};