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
router.get("/avalia/:RM", AvaliaController.getUser);

// Rota POST para criar um novo usuário
// Chama o método "createUser" do controller ao acessar "/users" com dados no corpo da requisição
router.post("/avalia/", AvaliaController.createUser);

// Rota PUT para atualizar um usuário existente pelo ID
// Chama o método "updateUser" do controller ao acessar "/users/:id" e fornecer novos dados no corpo da requisição
router.put("/avalia/:RM", AvaliaController.updateUser);

// Rota DELETE para deletar um usuário específico pelo ID
// Chama o método "deleteUser" do controller ao acessar "/users/:id"
router.delete("avalia/:RM", AvaliaController.deleteUser);

//






// Importa o controller de usuários que contém a lógica para cada rota
const AvaliaSESIController = require("../controllers/AvaliaSESIController");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/avaliasesi", AvaliaSESIController .getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/avaliasesi/:RM", AvaliaSESIController .getUser);

// Rota POST para criar um novo usuário
// Chama o método "createUser" do controller ao acessar "/users" com dados no corpo da requisição
router.post("/avaliasesi", AvaliaSESIController .createUser);

// Rota PUT para atualizar um usuário existente pelo ID
// Chama o método "updateUser" do controller ao acessar "/users/:id" e fornecer novos dados no corpo da requisição
router.put("/avaliasesi/:RM", AvaliaSESIController .updateUser);

// Rota DELETE para deletar um usuário específico pelo ID
// Chama o método "deleteUser" do controller ao acessar "/users/:id"
router.delete("/avaliasesi/:RM", AvaliaSESIController .deleteUser);

//





// Importa o controller de usuários que contém a lógica para cada rota
const CursoTecController = require("../controllers/CursoTecController");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/cursotec", CursoTecController.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/cursotec/:RM", CursoTecController.getUser);

// Rota POST para criar um novo usuário
// Chama o método "createUser" do controller ao acessar "/users" com dados no corpo da requisição
router.post("/cursotec", CursoTecController.createUser);

// Rota PUT para atualizar um usuário existente pelo ID
// Chama o método "updateUser" do controller ao acessar "/users/:id" e fornecer novos dados no corpo da requisição
router.put("/cursotec/:RM", CursoTecController.updateUser);

// Rota DELETE para deletar um usuário específico pelo ID
// Chama o método "deleteUser" do controller ao acessar "/users/:id"
router.delete("/cursotec/:RM", CursoTecController.deleteUser);

//






// Importa o controller de usuários que contém a lógica para cada rota
const NotasEF1Controller = require("../controllers/NotasEF1Controller");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/notasEF1", NotasEF1Controller.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/notasEF1/:RM", NotasEF1Controller.getUser);

// Rota POST para criar um novo usuário
// Chama o método "createUser" do controller ao acessar "/users" com dados no corpo da requisição
router.post("/notasEF1", NotasEF1Controller.createUser);

// Rota PUT para atualizar um usuário existente pelo ID
// Chama o método "updateUser" do controller ao acessar "/users/:id" e fornecer novos dados no corpo da requisição
router.put("/notasEF1/:RM",NotasEF1Controller.updateUser);

// Rota DELETE para deletar um usuário específico pelo ID
// Chama o método "deleteUser" do controller ao acessar "/users/:id"
router.delete("/notasEF1/:RM", NotasEF1Controller.deleteUser);

//








// Importa o controller de usuários que contém a lógica para cada rota
const NotasEF2Controller = require("../controllers/NotasEF2Controller");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/notasEF2", NotasEF2Controller.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/notasEF2/:RM", NotasEF2Controller.getUser);

// Rota POST para criar um novo usuário
// Chama o método "createUser" do controller ao acessar "/users" com dados no corpo da requisição
router.post("/notasEF2", NotasEF2Controller.createUser);

// Rota PUT para atualizar um usuário existente pelo ID
// Chama o método "updateUser" do controller ao acessar "/users/:id" e fornecer novos dados no corpo da requisição
router.put("/notasEF2/:RM", NotasEF2Controller.updateUser);

// Rota DELETE para deletar um usuário específico pelo ID
// Chama o método "deleteUser" do controller ao acessar "/users/:id"
router.delete("/notasEF2/:RM", NotasEF2Controller.deleteUser);

//








// Importa o controller de usuários que contém a lógica para cada rota
const NotasEMController = require("../controllers/NotasEMController");

// Rota GET para obter todos os usuários
// Chama o método "getUsers" do controller quando a rota raiz "/users" for acessada
router.get("/notasEM", NotasEMController.getUsers);

// Rota GET para obter um usuário específico pelo ID
// Chama o método "getUser" do controller ao acessar "/users/:id", onde ":id" é o ID do usuário
router.get("/notasEM/:RM", NotasEMController.getUser);

// Rota POST para criar um novo usuário
// Chama o método "createUser" do controller ao acessar "/users" com dados no corpo da requisição
router.post("/notasEM",NotasEMController.createUser);

// Rota PUT para atualizar um usuário existente pelo ID
// Chama o método "updateUser" do controller ao acessar "/users/:id" e fornecer novos dados no corpo da requisição
router.put("/notasEM/:RM", NotasEMController.updateUser);

// Rota DELETE para deletar um usuário específico pelo ID
// Chama o método "deleteUser" do controller ao acessar "/users/:id"
router.delete("/NotasEM/:RM", NotasEMController.deleteUser);












