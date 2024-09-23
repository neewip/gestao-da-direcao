// routes/clienteRoutes.js 
const express = require('express');
const router = express.Router(); // Cria um novo router como uma  //instância de middleware e rotas 

const clientesController =
    require('../controllers/AlunosGeralController'); // Importa o controller  //que contém a lógica de negócio 
// Rota para listar todos os clientes 
// GET /api/clientes 
router.get('/clientes', clientesController.listarTodos); // Esta rota responde a requisições GET e utiliza a função listarTodos  //do controller de clientes 
// para obter e retornar todos os clientes do banco de dados. 
// Rota para buscar um cliente específico por ID 
// GET /api/clientes/:id 
router.get('/clientes/:id', clientesController.buscarPorId); // Esta rota responde a requisições GET para um ID específico de  //cliente. 
// Utiliza a função buscarPorId do controller de clientes para  //encontrar e retornar um cliente específico. 
// Rota para criar um novo cliente 
// POST /api/clientes 
router.post('/clientes', clientesController.criar);
// Esta rota responde a requisições POST, criando um novo cliente com  //os dados fornecidos no corpo da requisição. 
// Utiliza a função criar do controller de clientes para adicionar o  //novo cliente ao banco de dados. 
// Rota para atualizar um cliente existente 
// PUT /api/clientes/:id 
router.put('/clientes/:id', clientesController.atualizar);
// Esta rota responde a requisições PUT, atualizando os dados de um  //cliente existente baseado no ID fornecido. 
// Utiliza a função atualizar do controller de clientes para modificar  //o cliente especificado no banco de dados. 
// Rota para deletar um cliente 
// DELETE /api/clientes/:id 
router.delete('/clientes/:id', clientesController.excluir); // Esta rota responde a requisições DELETE, removendo um cliente do  //banco de dados baseado no ID fornecido. 
// Utiliza a função excluir do controller de clientes para deletar o  //cliente especificado. 
module.exports = router; // Exporta o router configurado para ser  //usado pelo aplicativo principal 