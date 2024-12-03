const executeQuery = require("../config/config"); // Importa a função executeQuery do arquivo de configuração

// Função para obter todos os usuários do banco de dados
async function getAllUsers() {
  const query = "SELECT * FROM AvaliaSESI;"; // Define a query SQL para obter todos os registros da tabela "AvaliaSESI"
  return await executeQuery(query); // Executa a query usando a função executeQuery
}

// Função para obter um usuário pelo ID
async function getUserById(rm) {
  const query = "SELECT * FROM AvaliaSESI WHERE rm = $1"; // Query SQL com um parâmetro para filtrar pelo ID
  const users = await executeQuery(query, [rm]); // Executa a query com o parâmetro
  return users.length > 0 ? users[0] : null; // Retorna o primeiro usuário se houver algum resultado, ou null se não houver
}

async function updateInc(rm, ComDeficiencia) {
  console.log('Valor de rm:', rm);
  console.log('Valor de ComDeficiencia:', ComDeficiencia);

  // Acesse o valor de ComDeficiencia corretamente, caso seja um objeto
  if (typeof ComDeficiencia === 'object' && ComDeficiencia !== null) {
    ComDeficiencia = ComDeficiencia.ComDeficiencia; // Acesse a propriedade correta
  }

  const query = `UPDATE AvaliaSESI SET ComDeficiencia = $1 WHERE rm = $2;`;
  await executeQuery(query, [ComDeficiencia, rm]); // Executa a query com os parâmetros
  console.log('Query:', query);
}

async function getUserByFilter(etapa, Turma, Ano) {
  console.log('Valor de etapa:', etapa);
  console.log('Valor de Turma:', Turma);
  console.log('Valor de Ano:', Ano);

  Ano = parseInt(Ano);
  const query = `
    SELECT NomeAluno, Turma, *
    FROM AvaliaSESIFilter 
    WHERE Turma LIKE $1 AND Ano = $2 AND column_name LIKE $3
    ORDER BY NomeAluno;
  `;
  
  console.log('Query:', query);

  const users = await executeQuery(query, [`%${Turma}%`, Ano, `${etapa}%`]); // Executa a query com os parâmetros
  console.log('Resultado:', users);
  return users;
}

// Exporta as funções para serem usadas nos controllers
module.exports = {
  updateInc,
  getUserByFilter,
  getAllUsers,
  getUserById,
};