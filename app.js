// app.js 
// habilitar o express 
const express = require('express');
const clienteRoutes = require('./routes/clienteRoutes'); const app = express();
app.use(express.json()); // Habilitar Middleware para manuseio de JSON 
app.use('/api', clienteRoutes); // uso das rotas definidas em  //clienteRoutes.js 
const port = process.env.PORT || 3000;
// Define a porta em que o servidor irá rodar.  
// `process.env.PORT` permite que a porta seja configurada pelo ambiente  //de execução, útil em ambientes de produção, 
// como quando o aplicativo é implantado em plataformas de hospedagem que  //atribuem portas dinamicamente (por exemplo, Heroku, AWS Elastic  //Beanstalk). 
// Se `process.env.PORT` não estiver definido, o servidor usará a porta  //3000 por padrão, o que é comum para desenvolvimento local. app.listen(port, () => { 
console.log(`Servidor rodando na porta ${port}`);
// Inicia o servidor para escutar na porta especificada. // Quando o servidor estiver pronto e escutando, ele imprimirá uma  //mensagem no console indicando em qual porta está rodando. }); 
