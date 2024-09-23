// controllers/clientesController.js 
const clienteModel = require('../models/clienteModel');// Importa o  //modelo clienteModel que contém as funções para interagir com o banco  //de dados 
// Listar todos os clientes 
// Esta função é chamada quando uma requisição GET é feita para  //api/clientes 
exports.listarTodos = (req, res) => {
    clienteModel.findAll((err, clientes) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao buscar clientes' });// Envia um status HTTP 500 se ocorrer um erro 
        } else {
            res.send(clientes);// Envia os dados dos clientes como  
            //resposta JSON 
        }
    });
};
// Buscar cliente por ID 
// Esta função é chamada quando uma requisição GET é feita para  //api/clientes/:id 
exports.buscarPorId = (req, res) => {
    clienteModel.findById(req.params.id, (err, cliente) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao buscar cliente' });// Envia um status HTTP 500 se ocorrer um erro 
        } else if (!cliente) {
            res.status(404).send({ message: 'Cliente não encontrado' });// Envia um status HTTP 404 se nenhum cliente for encontrado } else { 
            res.send(cliente); // Envia os dados do cliente como  //resposta JSON 
        }
    });
};
// Criar um novo cliente 
// Esta função é chamada quando uma requisição POST é feita para  //api/clientes 
exports.criar = (req, res) => {
    if (!req.body.nome || !req.body.email || !req.body.telefone) {
        res.status(400).send({ message: 'Dados incompletos!' }); //  //Envia um status HTTP 400 se os dados necessários não forem  //fornecidos 
        return;
    }
    clienteModel.create(req.body, (err) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao criar cliente' });
        } else {
            res.status(201).send({ message: 'Cliente criado com  sucesso' });// Envia um status HTTP 201 como resposta de sucesso 
        }
    });
};
// Atualizar um cliente 
// Esta função é chamada quando uma requisição PUT é feita para  //api/clientes/:id 
exports.atualizar = (req, res) => {
    if (!req.body.nome || !req.body.email || !req.body.telefone) {
        res.status(400).send({ message: 'Dados incompletos para  atualização!' });
        return;
    }
    clienteModel.update(req.params.id, req.body, (err) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao atualizar  cliente' });
        } else {
            res.status(200).send({ message: 'Cliente atualizado com  sucesso' });
        }
    });
};
// Excluir um cliente 
// Esta função é chamada quando uma requisição DELETE é feita para  //api/clientes/:id 
exports.excluir = (req, res) => {
    clienteModel.delete(req.params.id, (err) => {
        if (err) {
            res.status(500).send({ message: 'Erro ao excluir cliente' });
        } else {
            res.status(200).send({ message: 'Cliente excluído com sucesso' });
        }
    });
}; 