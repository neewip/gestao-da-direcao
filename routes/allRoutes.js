// routes/users.js

// Importa o módulo "express" para criar um roteador
const express = require("express");

// Cria uma nova instância do roteador do Express
const router = express.Router();

// Importa o controller de usuários que contém a lógica para cada rota
const GeralController = require("../controllers/AlunosGeralController");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/alunos", GeralController.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/alunos/:RM", GeralController.getUser);

// Rota POST para criar um novo usuário
// Chama o método "createUser" do controller ao acessar "/users" com dados no corpo da requisição
router.post("/alunos", GeralController.createUser);

// Rota PUT para atualizar um usuário existente pelo ID
// Chama o método "updateUser" do controller ao acessar "/users/:id" e fornecer novos dados no corpo da requisição
router.put("/alunos/:RM", GeralController.updateUser);

// Rota DELETE para deletar um usuário específico pelo ID
// Chama o método "deleteUser" do controller ao acessar "/users/:id"
router.delete("/alunos/:RM", GeralController.deleteUser);

//






// Importa o controller de usuários que contém a lógica para cada rota
const AvaliaController = require("../controllers/AvaliaExtController");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/avalia", AvaliaController.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/avalia/:rm", AvaliaController.getUser);

// Rota POST para criar um novo usuário
// Chama o método "createUser" do controller ao acessar "/users" com dados no corpo da requisição
router.post("/avalia/", AvaliaController.createUser);

// Rota PUT para atualizar um usuário existente pelo ID
// Chama o método "updateUser" do controller ao acessar "/users/:id" e fornecer novos dados no corpo da requisição
router.put("/avalia/:rm", AvaliaController.updateUser);

// Rota DELETE para deletar um usuário específico pelo ID
// Chama o método "deleteUser" do controller ao acessar "/users/:id"
router.delete("avalia/:rm", AvaliaController.deleteUser);

//






// Importa o controller de usuários que contém a lógica para cada rota
const AvaliaSESIController = require("../controllers/AvaliaSESIController");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/avaliasesi", AvaliaSESIController .getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/avaliasesi/:rm", AvaliaSESIController .getUser);


//





// Importa o controller de usuários que contém a lógica para cada rota
const CursoTecController = require("../controllers/CursoTecController");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/cursotec", CursoTecController.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/cursotec/:rm", CursoTecController.getUser);


//






// Importa o controller de usuários que contém a lógica para cada rota
const NotasEF1Controller = require("../controllers/NotasEF1Controller");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/notasEF1", NotasEF1Controller.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/notasEF1/:RM", NotasEF1Controller.getUser);


//








// Importa o controller de usuários que contém a lógica para cada rota
const NotasEF2Controller = require("../controllers/NotasEF2Controller");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/notasEF2", NotasEF2Controller.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/notasEF2/:RM", NotasEF2Controller.getUser);



//








// Importa o controller de usuários que contém a lógica para cada rota
const NotasEMController = require("../controllers/NotasEMController");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/notasEM", NotasEMController.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/notasEM/:rm", NotasEMController.getUser);



module.exports = router;










