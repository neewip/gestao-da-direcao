// models/clienteModel.js
const { Connection, Request } = require('tedious');
const config = require('../config/dbconfig'); // Importa diretamente
//o objeto de configuração
// Função auxiliar para executar uma consulta SQL
function executeSQL(sql, callback) {
  const connection = new Connection(config);
  connection.on('connect', err => {
    if (err) {
      console.error('Erro de conexão:', err);
      callback(err, null);
      return;
    }
    const request = new Request(sql, (err, rowCount) => {
      if (err) {
        console.error('Erro ao executar a consulta:', err);
        return;
      }
      if (rowCount === 0) {

        callback(null, []); // Se não há linhas, retorna um

        //array vazio

        return;
      }
    });
    let clientes = [];
    request.on('row', columns => {
      let cliente = {};
      columns.forEach(column => {
        cliente[column.metadata.colName] = column.value;
      });
      clientes.push(cliente);
    });
    request.on('requestCompleted', () => {
      callback(null, clientes); // Retorna o array de clientes
    });
    request.on('error', err => {
      console.error('Erro durante a requisição:', err);
      callback(err, null);
    });
    request.on('done', () => {
      connection.close(); // Garante que a conexão seja fechada

      //após completar ou errar
    });
    connection.execSql(request);
  });
  connection.connect();
}
// Lista todos os clientes
exports.findAll = (callback) => {
  const sql = "SELECT * FROM AvaliaExt";
  executeSQL(sql, callback);
};
// Busca um cliente pelo ID
exports.findById = (RM, callback) => {
  const sql = `SELECT * FROM AvaliaExt WHERE RM = ${RM}`;
  executeSQL(sql, (err, clientes) => {
    if (err) {
      callback(err, null);
    } else {

      // Verifica se a consulta retornou algum cliente
      const cliente = clientes.length > 0 ? clientes[0] : null;
      callback(null, cliente);
    }
  });
};
// Cria um novo cliente
exports.create = (cliente, callback) => {
  const sql = `INSERT INTO AvaliaExt (rm, etapa, ano, tipoprova, notaExt) VALUES
('${cliente.rm}', '${cliente.etapa}', '${cliente.ano}', '${cliente.tipoprova}', '${cliente.notaExt}')`;
  executeSQL(sql, callback);
};
// Atualiza um cliente pelo ID
exports.update = (rm, cliente, callback) => {
  const sql = `UPDATE AvaliaExt SET etapa = '${cliente.etapa}', ano =
'${cliente.ano}', tipoprova = '${cliente.tipoprova}', notaExt = '${cliente.notaExt}' WHERE rm =
${rm}`;
  executeSQL(sql, callback);
};
// Exclui um cliente pelo ID
exports.delete = (rm, callback) => {
  const sql = `DELETE FROM AvaliaExt WHERE rm = ${rm}`;
  executeSQL(sql, callback);
};