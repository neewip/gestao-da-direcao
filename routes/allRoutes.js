// routes/clienteRoutes.js 
const express = require('express');
const router = express.Router(); // Cria um novo router como uma  //instância de middleware e rotas 

const alunosController =
    require('../controllers/AlunosGeralController'); // Importa o controller  //que contém a lógica de negócio 
// Rota para listar todos os clientes 
// GET /api/clientes 
router.get('/alunos', alunosController.listarTodos); // Esta rota responde a requisições GET e utiliza a função listarTodos  //do controller de clientes 
// para obter e retornar todos os clientes do banco de dados. 
// Rota para buscar um cliente específico por ID 
// GET /api/clientes/:id 
router.get('/alunos/:rm', alunosController.buscarPorId); // Esta rota responde a requisições GET para um ID específico de  //cliente. 
// Utiliza a função buscarPorId do controller de clientes para  //encontrar e retornar um cliente específico. 
// Rota para criar um novo cliente 
// POST /api/clientes 
router.post('/alunos', alunosController.criar);
// Esta rota responde a requisições POST, criando um novo cliente com  //os dados fornecidos no corpo da requisição. 
// Utiliza a função criar do controller de clientes para adicionar o  //novo cliente ao banco de dados. 
// Rota para atualizar um cliente existente 
// PUT /api/clientes/:id 
router.put('/alunos/:rm', alunosController.atualizar);
// Esta rota responde a requisições PUT, atualizando os dados de um  //cliente existente baseado no ID fornecido. 
// Utiliza a função atualizar do controller de clientes para modificar  //o cliente especificado no banco de dados. 
// Rota para deletar um cliente 
// DELETE /api/clientes/:id 
router.delete('/alunos/:rm', alunosController.excluir); // Esta rota responde a requisições DELETE, removendo um cliente do  //banco de dados baseado no ID fornecido. 
// Utiliza a função excluir do controller de clientes para deletar o  //cliente especificado. 

//

const avaliaController =
    require('../controllers/AvaliaExtController'); // Importa o controller  //que contém a lógica de negócio 
// Rota para listar todos os clientes 
// GET /api/clientes 
router.get('/avalia', avaliaController.listarTodos); // Esta rota responde a requisições GET e utiliza a função listarTodos  //do controller de clientes 
// para obter e retornar todos os clientes do banco de dados. 
// Rota para buscar um cliente específico por ID 
// GET /api/clientes/:id 
router.get('/avalia/:rm', avaliaController.buscarPorId); // Esta rota responde a requisições GET para um ID específico de  //cliente. 
// Utiliza a função buscarPorId do controller de clientes para  //encontrar e retornar um cliente específico. 
// Rota para criar um novo cliente 
// POST /api/clientes 
router.post('/avalia', avaliaController.criar);
// Esta rota responde a requisições POST, criando um novo cliente com  //os dados fornecidos no corpo da requisição. 
// Utiliza a função criar do controller de clientes para adicionar o  //novo cliente ao banco de dados. 
// Rota para atualizar um cliente existente 
// PUT /api/clientes/:id 
router.put('/avalia/:rm', avaliaController.atualizar);
// Esta rota responde a requisições PUT, atualizando os dados de um  //cliente existente baseado no ID fornecido. 
// Utiliza a função atualizar do controller de clientes para modificar  //o cliente especificado no banco de dados. 
// Rota para deletar um cliente 
// DELETE /api/clientes/:id 
router.delete('/avalia/:rm', avaliaController.excluir); // Esta rota responde a requisições DELETE, removendo um cliente do  //banco de dados baseado no ID fornecido. 
// Utiliza a função excluir do controller de clientes para deletar o  //cliente especificado. 

//

const avaliasesiController =
    require('../controllers/AvaliaSESIController'); // Importa o controller  //que contém a lógica de negócio 
// Rota para listar todos os clientes 
// GET /api/clientes 
router.get('/avaliasesi', avaliasesiController.listarTodos); // Esta rota responde a requisições GET e utiliza a função listarTodos  //do controller de clientes 
// para obter e retornar todos os clientes do banco de dados. 
// Rota para buscar um cliente específico por ID 
// GET /api/clientes/:id 
router.get('/avaliasesi/:rm', avaliasesiController.buscarPorId); // Esta rota responde a requisições GET para um ID específico de  //cliente. 
// Utiliza a função buscarPorId do controller de clientes para  //encontrar e retornar um cliente específico. 
// Rota para criar um novo cliente 
// POST /api/clientes 
router.post('/avaliasesi', avaliasesiController.criar);
// Esta rota responde a requisições POST, criando um novo cliente com  //os dados fornecidos no corpo da requisição. 
// Utiliza a função criar do controller de clientes para adicionar o  //novo cliente ao banco de dados. 
// Rota para atualizar um cliente existente 
// PUT /api/clientes/:id 
router.put('/avaliasesi/:rm', avaliasesiController.atualizar);
// Esta rota responde a requisições PUT, atualizando os dados de um  //cliente existente baseado no ID fornecido. 
// Utiliza a função atualizar do controller de clientes para modificar  //o cliente especificado no banco de dados. 
// Rota para deletar um cliente 
// DELETE /api/clientes/:id 
router.delete('/avaliasesi/:rm', avaliasesiController.excluir); // Esta rota responde a requisições DELETE, removendo um cliente do  //banco de dados baseado no ID fornecido. 
// Utiliza a função excluir do controller de clientes para deletar o  //cliente especificado. 

//

const cursotecController =
    require('../controllers/CursoTecController'); // Importa o controller  //que contém a lógica de negócio 
// Rota para listar todos os clientes 
// GET /api/clientes 
router.get('/cursotec/', cursotecControlle.listarTodos); // Esta rota responde a requisições GET e utiliza a função listarTodos  //do controller de clientes 
// para obter e retornar todos os clientes do banco de dados. 
// Rota para buscar um cliente específico por ID 
// GET /api/clientes/:id 
router.get('/cursotec/:id', cursotecControlle.buscarPorId); // Esta rota responde a requisições GET para um ID específico de  //cliente. 
// Utiliza a função buscarPorId do controller de clientes para  //encontrar e retornar um cliente específico. 
// Rota para criar um novo cliente 
// POST /api/clientes 
router.post('/cursotec', cursotecControlle.criar);
// Esta rota responde a requisições POST, criando um novo cliente com  //os dados fornecidos no corpo da requisição. 
// Utiliza a função criar do controller de clientes para adicionar o  //novo cliente ao banco de dados. 
// Rota para atualizar um cliente existente 
// PUT /api/clientes/:id 
router.put('/cursotec/:id', cursotecControlle.atualizar);
// Esta rota responde a requisições PUT, atualizando os dados de um  //cliente existente baseado no ID fornecido. 
// Utiliza a função atualizar do controller de clientes para modificar  //o cliente especificado no banco de dados. 
// Rota para deletar um cliente 
// DELETE /api/clientes/:id 
router.delete('cursotec/:rm', cursotecControlle.excluir); // Esta rota responde a requisições DELETE, removendo um cliente do  //banco de dados baseado no ID fornecido. 
// Utiliza a função excluir do controller de clientes para deletar o  //cliente especificado. 

//

const NotasEF1Controller =
    require('../controllers/NotasEF1Controller'); // Importa o controller  //que contém a lógica de negócio 
// Rota para listar todos os clientes 
// GET /api/clientes 
router.get('/notasEF1',  NotasEF1Controller.listarTodos); // Esta rota responde a requisições GET e utiliza a função listarTodos  //do controller de clientes 
// para obter e retornar todos os clientes do banco de dados. 
// Rota para buscar um cliente específico por ID 
// GET /api/clientes/:id 
router.get('/notasEF1/:rm', NotasEF1Controller.buscarPorId); // Esta rota responde a requisições GET para um ID específico de  //cliente. 
// Utiliza a função buscarPorId do controller de clientes para  //encontrar e retornar um cliente específico. 
// Rota para criar um novo cliente 
// POST /api/clientes 
router.post('/notasEF1', NotasEF1Controller.criar);
// Esta rota responde a requisições POST, criando um novo cliente com  //os dados fornecidos no corpo da requisição. 
// Utiliza a função criar do controller de clientes para adicionar o  //novo cliente ao banco de dados. 
// Rota para atualizar um cliente existente 
// PUT /api/clientes/:id 
router.put('/notasEF1/:rm', NotasEF1Controller.atualizar);
// Esta rota responde a requisições PUT, atualizando os dados de um  //cliente existente baseado no ID fornecido. 
// Utiliza a função atualizar do controller de clientes para modificar  //o cliente especificado no banco de dados. 
// Rota para deletar um cliente 
// DELETE /api/clientes/:id 
router.delete('/notasEF1/:rm', NotasEF1Controller.excluir); // Esta rota responde a requisições DELETE, removendo um cliente do  //banco de dados baseado no ID fornecido. 
// Utiliza a função excluir do controller de clientes para deletar o  //cliente especificado. 

//

const NotasEF2Controller =
    require('../controllers/NotasEF2Controller'); // Importa o controller  //que contém a lógica de negócio 
// Rota para listar todos os clientes 
// GET /api/clientes 
router.get('/NotasEF2', NotasEF2Controller.listarTodos); // Esta rota responde a requisições GET e utiliza a função listarTodos  //do controller de clientes 
// para obter e retornar todos os clientes do banco de dados. 
// Rota para buscar um cliente específico por ID 
// GET /api/clientes/:id 
router.get('/NotasEF2/:rm', NotasEF2Controller.buscarPorId); // Esta rota responde a requisições GET para um ID específico de  //cliente. 
// Utiliza a função buscarPorId do controller de clientes para  //encontrar e retornar um cliente específico. 
// Rota para criar um novo cliente 
// POST /api/clientes 
router.post('/NotasEF2', NotasEF2Controller.criar);
// Esta rota responde a requisições POST, criando um novo cliente com  //os dados fornecidos no corpo da requisição. 
// Utiliza a função criar do controller de clientes para adicionar o  //novo cliente ao banco de dados. 
// Rota para atualizar um cliente existente 
// PUT /api/clientes/:id 
router.put('/NotasEF2/:rm', NotasEF2Controller.atualizar);
// Esta rota responde a requisições PUT, atualizando os dados de um  //cliente existente baseado no ID fornecido. 
// Utiliza a função atualizar do controller de clientes para modificar  //o cliente especificado no banco de dados. 
// Rota para deletar um cliente 
// DELETE /api/clientes/:id 
router.delete('/NotasEF2/:rm', NotasEF2Controller.excluir); // Esta rota responde a requisições DELETE, removendo um cliente do  //banco de dados baseado no ID fornecido. 
// Utiliza a função excluir do controller de clientes para deletar o  //cliente especificado. 

//

const NotasEMController =
    require('../controllers/NotasEMController'); // Importa o controller  //que contém a lógica de negócio 
// Rota para listar todos os clientes 
// GET /api/clientes 
router.get('/NotasEM', NotasEMController.listarTodos); // Esta rota responde a requisições GET e utiliza a função listarTodos  //do controller de clientes 
// para obter e retornar todos os clientes do banco de dados. 
// Rota para buscar um cliente específico por ID 
// GET /api/clientes/:id 
router.get('/NotasEM/:rm', NotasEMController.buscarPorId); // Esta rota responde a requisições GET para um ID específico de  //cliente. 
// Utiliza a função buscarPorId do controller de clientes para  //encontrar e retornar um cliente específico. 
// Rota para criar um novo cliente 
// POST /api/clientes 
router.post('/NotasEM', NotasEMController.criar);
// Esta rota responde a requisições POST, criando um novo cliente com  //os dados fornecidos no corpo da requisição. 
// Utiliza a função criar do controller de clientes para adicionar o  //novo cliente ao banco de dados. 
// Rota para atualizar um cliente existente 
// PUT /api/clientes/:id 
router.put('/NotasEM/:rm', NotasEMController.atualizar);
// Esta rota responde a requisições PUT, atualizando os dados de um  //cliente existente baseado no ID fornecido. 
// Utiliza a função atualizar do controller de clientes para modificar  //o cliente especificado no banco de dados. 
// Rota para deletar um cliente 
// DELETE /api/clientes/:id 
router.delete('/NotasEM/:rm', NotasEMController.excluir); // Esta rota responde a requisições DELETE, removendo um cliente do  //banco de dados baseado no ID fornecido. 
// Utiliza a função excluir do controller de clientes para deletar o  //cliente especificado. 


module.exports = router; // Exporta o router configurado para ser  //usado pelo aplicativo principal 