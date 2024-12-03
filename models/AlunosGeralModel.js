// models/userModel.js

// Importa o Request e os tipos de dados (TYPES) do pacote "tedious" para criar e executar consultas SQL

// Importa a função que conecta ao banco de dados
const connectDatabase = require("../database/connection");

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const result = await connectDatabase.query("SELECT * FROM AlunosGeral;");  // Define a query SQL para obter todos os registros da tabela "Users"
  return result.rows;;  // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(RM) {
  const query = "SELECT * FROM AlunosGeral WHERE RM = @RM";  // Query SQL com um parâmetro para filtrar pelo ID
  const params = [{ name: "RM", type: TYPES.Int, value: RM }];  // Define o parâmetro @id para ser passado na query
  const users = await executeQuery(query, params);  // Executa a query com os parâmetros
  return users.length > 0 ? users[0] : null;  // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

// Função para criar um novo usuário
async function createUser(RM, NomeAluno, Turma, Ano) {
  const query = `INSERT INTO AlunosGeral (RM, NomeAluno, Turma, Ano) VALUES (@RM, @NomeAluno, @Turma, @Ano);`;  // Query SQL para inserir um novo registro
  const params = [
    { name: "RM", type: TYPES.Int, value: RM},  // Define o parâmetro @name
    { name: "NomeAluno", type: TYPES.NVarChar, value: NomeAluno },  // Define o parâmetro @email
    { name: "Turma", type: TYPES.NVarChar, value: Turma || null },
    { name: "Ano", type: TYPES.Int, value: Ano || null },  // Define o parâmetro @age, sendo nulo caso não seja fornecido
  ];
  await executeQuery(query, params);  // Executa a query com os parâmetros
}

// Função para atualizar um usuário existente
async function updateUser(RM, NomeAluno, Turma, Ano) {
  const query = `UPDATE AlunosGeral SET NomeAluno = @NomeAluno, Turma = @Turma, Ano = @Ano WHERE RM = @RM;`;  // Query SQL para atualizar o registro
  const params = [
    { name: "RM", type: TYPES.Int, value: RM},  // Define o parâmetro @name
    { name: "NomeAluno", type: TYPES.NVarChar, value: NomeAluno },  // Define o parâmetro @email
    { name: "Turma", type: TYPES.NVarChar, value: Turma || null },
    { name: "Ano", type: TYPES.Int, value: Ano || null },   // Define o parâmetro @age
  ];
  await executeQuery(query, params);  // Executa a query com os parâmetros
}

// Função para deletar um usuário pelo ID
async function deleteUser(RM) {
  const query = "DELETE FROM AlunosGeral WHERE RM = @RM;";  // Query SQL para deletar o usuário pelo ID
  const params = [{ name: "RM", type: TYPES.Int, value: RM }];  // Define o parâmetro @id
  await executeQuery(query, params);  // Executa a query com o parâmetro
}

async function getUserByFilter(Turma, ano) {
  const query = "select * from AlunosGeral WHERE Turma LIKE @Turma AND ano = @ano ORDER BY NomeAluno";
  const params = [
    { name: "Turma", type: TYPES.VarChar, value: Turma },
    { name: "ano", type: TYPES.Int, value: ano },
    
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