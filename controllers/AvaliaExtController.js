// controllers/usersController.js

// Importa o modelo de usuário que contém a lógica de interação com o banco de dados
const userModel = require("../models/AvaliaExtModel");

// Função para obter todos os usuários
async function getUsers(req, res) {
  try {
    // Chama o método do modelo para obter todos os usuários do banco de dados
    const users = await userModel.getAllUsers();
    
    // Retorna a lista de usuários em formato JSON
    res.json(users);
  } catch (err) {
    // Exibe o erro no console, se houver, e retorna uma resposta com status 500
    console.error(err.message);
    res.status(500).send("Erro ao obter os usuários");
  }
}

// Função para obter um usuário específico pelo ID
async function getUser(req, res) {
  // Extrai o ID do usuário da requisição (usado na URL: /users/:id)
  const RM = req.params.RM;
  const Ano = req.params.Ano;
  try {
    // Chama o método do modelo para obter o usuário com base no ID fornecido
    const user = await userModel.getUserById(RM, Ano);
    
    // Se o usuário não for encontrado, retorna um status 404 (não encontrado)
    if (!user) {
      res.status(404).send("Usuário não encontrado");
    } else {
      // Se o usuário for encontrado, retorna os dados em formato JSON
      res.json(user);
    }
  } catch (err) {
    // Exibe o erro no console e retorna uma resposta com status 500
    console.error(err.message);
    res.status(500).send("Erro ao obter o usuário");
  }
}

// Função para criar um novo usuário
async function createUser(req, res) {
  // Extrai as informações do novo usuário a partir do corpo da requisição (name, email, age)
  const { rm, etapa, ano, tipoprova, notaExt } = req.body;
  try {
    // Chama o método do modelo para criar o novo usuário com os dados fornecidos
    await userModel.createUser(rm, etapa, ano, tipoprova, notaExt );
    
    // Retorna um status 201 (criado com sucesso)
    res.status(201).send("Usuário criado com sucesso");
  } catch (err) {
    // Exibe o erro no console e retorna uma resposta com status 500
    console.error(err.message);
    res.status(500).send("Erro ao criar o usuário");
  }
}

// Função para atualizar um usuário existente
async function updateUser(req, res) {
  // Extrai o ID do usuário da URL e os novos dados do corpo da requisição
  const rm = req.params.rm;
  const ano = req.params.ano;
  const tipoprova = req.params.tipoprova;
  const {etapa, notaExt } = req.body;
  try {
    // Chama o método do modelo para atualizar o usuário com base no ID e nos dados fornecidos
    await userModel.updateUser(rm, etapa, ano, tipoprova, notaExt );
    
    // Retorna uma mensagem de sucesso após a atualização
    res.send("Usuário atualizado com sucesso");
  } catch (err) {
    // Exibe o erro no console e retorna uma resposta com status 500
    console.error(err.message);
    res.status(500).send("Erro ao atualizar o usuário");
  }
}

// Função para deletar um usuário
async function deleteUser(req, res) {
  // Extrai o ID do usuário da URL
  const rm = req.params.rm;
  try {
    // Chama o método do modelo para deletar o usuário com base no ID fornecido
    await userModel.deleteUser(rm);
    
    // Retorna uma mensagem de sucesso após a exclusão
    res.send("Usuário deletado com sucesso");
  } catch (err) {
    // Exibe o erro no console e retorna uma resposta com status 500
    console.error(err.message);
    res.status(500).send("Erro ao deletar o usuário");
  }
}

async function getUserByFilter(req, res) {
  // Extrai o ID do usuário da requisição (usado na URL: /users/:id)
  const etapa = req.params.etapa;
  const turma = req.params.Turma;
  const ano = req.params.ano;
  const tipoprova = req.params.tipoprova;


  try {
    // Chama o método do modelo para obter o usuário com base no ID fornecido
    const user = await userModel.getUserByFilter(etapa, turma, ano, tipoprova);
    

    
    // Se o usuário não for encontrado, retorna um status 404 (não encontrado)
    if (!user) {
      res.status(404).send("Usuário não encontrado");
    } else {
      // Se o usuário for encontrado, retorna os dados em formato JSON
      res.json(user);
    }
  } catch (err) {
    // Exibe o erro no console e retorna uma resposta com status 500
    console.error(err.message);
    res.status(500).send("Erro ao obter o usuário");
  }
}



// Exporta as funções do controller para serem usadas nas rotas da aplicação
module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUserByFilter,
};