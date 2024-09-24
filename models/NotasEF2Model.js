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
  const sql = "SELECT * FROM Clientes";
  executeSQL(sql, callback);
};
// Busca um cliente pelo ID
exports.findById = (id, callback) => {
  const sql = `SELECT * FROM Clientes WHERE ID = ${id}`;
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
  const sql = `INSERT INTO NotasEF1 (RM, [1EtapaCN],	[2EtapaCN],	[3EtapaCN],	NotaFinalCN,	[1EtapaMAT],	[2EtapaMAT],	[3EtapaMAT],	NotaFinalMAT,	[1EtapaLP],	[2EtapaLP],	[3EtapaLP],	NotaFinalLP,	[1EtapaAR],	[2EtapaAR],	[3EtapaAR],	NotaFinalAR,	[1EtapaEF],	[2EtapaEF],	[3EtapaEF],	NotaFinalEF,	[1EtapaHIS],	[2EtapaHIS],	[3EtapaHIS],	NotaFinalHIS,	[1EtapaGEO],	[2EtapaGEO], [3EtapaGEO],	NotaFinalGEO,	[1EtapaLI],	[2EtapaLI],	[3EtapaLI],	NotaFinalLI,	[1EtapaEIXO],	[2EtapaEIXO],	[3EtapaEIXO],	NotaFinalEIXO,	[1EtapaPR],	[2EtapaPR],	[3EtapaPR], NotaFinalPR) VALUES
('${cliente.RM}', '${cliente['1EtapaCN']}','${cliente['2EtapaCN']}, '${cliente['3EtapaCN']}, '${cliente.NotaFinalCN}', '${cliente['1EtapaMAT']}, '${cliente['2EtapaMAT']}, '${cliente['3EtapaMAT']}, '${cliente.NotaFinalLP}', '${cliente['1EtapaAR']}, '${cliente['2EtapaAR']}, '${cliente['3EtapaAR']}, '${cliente.NotaFinalAR}', '${cliente['1EtapaEF']}, '${cliente['2EtapaEF']}, '${cliente['3EtapaEF']}, '${cliente.NotaFinalEF}'),  '${cliente['1EtapaHIS']}, '${cliente['2EtapaHIS']}, '${cliente['3EtapaHIS']}, '${cliente.NotaFinalHIS}'), '${cliente['1EtapaGEO']}, '${cliente['2EtapaGEO']}, '${cliente['3EtapaGEO']}, '${cliente.NotaFinalGEO}'), '${cliente['1EtapaLI']}, '${cliente['2EtapaLI']}, '${cliente['3EtapaLI']}, '${cliente.NotaFinalLI}'), '${cliente['1EtapaEIXO']}, '${cliente['2EtapaEIXO']}, '${cliente['3EtapaEIXO']}, '${cliente.NotaFinalEIXO}'), '${cliente['1EtapaPR']}, '${cliente['2EtapaPR']}, '${cliente['3EtapaPR']}, '${cliente.NotaFinalPR}') `;
  executeSQL(sql, callback);
};
// Atualiza um cliente pelo ID
exports.update = (RM, cliente, callback) => {
  const sql = `UPDATE NotasEF1 SET RM = '${cliente.RM}', [1EtapaCN] = '${cliente['1EtapaCN']}', [2EtapaCN] = '${cliente['2EtapaCN']},  [3EtapaCN] = '${cliente['3EtapaCN']},  NotaFinalCN = '${cliente.NotaFinalCN}', [1EtapaMAT] = '${cliente['1EtapaMAT']}, [2EtapaMAT] = '${cliente['2EtapaMAT']}, [3EtapaMAT] = '${cliente['3EtapaMAT']}, NotaFinalMAT = '${cliente.NotaFinalMAT}', [1EtapaLP] = '${cliente['1EtapaLP']}, [2EtapaLP] = '${cliente['2EtapaLP']}, [3EtapaLP] = '${cliente['3EtapaLP']}, NotaFinalLP = '${cliente.NotaFinalLP}', [1EtapaAR] = '${cliente['1EtapaAR']}, [2EtapaAR] = '${cliente['2EtapaAR']}, [3EtapaAR] = '${cliente['3EtapaAR']}, NotaFinalAR = '${cliente.NotaFinalAR}', [1EtapaEF] = '${cliente['1EtapaEF']}, [2EtapaEF] = '${cliente['2EtapaEF']}, [3EtapaEF] = '${cliente['3EtapaEF']}, NotaFinalEF = '${cliente.NotaFinalEF}'), [1EtapaHIS] = '${cliente['1EtapaHIS']}, [2EtapaHIS] = '${cliente['2EtapaHIS']}, [3EtapaHIS] = '${cliente['3EtapaHIS']}, NotaFinalHIS = '${cliente.NotaFinalHIS}'), [1EtapaGEO] = '${cliente['1EtapaGEO']}, [2EtapaGEO] = '${cliente['2EtapaGEO']}, [3EtapaGEO] = '${cliente['3EtapaGEO']}, NotaFinalGEO = '${cliente.NotaFinalGEO}'), [1EtapaLI] = '${cliente['1EtapaLI']}, [2EtapaLI] = '${cliente['2EtapaLI']}, [3EtapaLI] = '${cliente['3EtapaLI']}, NotaFinalLI = '${cliente.NotaFinalLI}'), [1EtapaEIXO] = '${cliente['1EtapaEIXO']}, [2EtapaEIXO] = '${cliente['2EtapaEIXO']}, [3EtapaEIXO] = '${cliente['3EtapaEIXO']}, NotaFinalEIXO = '${cliente.NotaFinalEIXO}'), [1EtapaPR] = '${cliente['1EtapaPR']},  [2EtapaPR] = '${cliente['2EtapaPR']},  [3EtapaPR] = '${cliente['3EtapaPR']}, NotaFinalPR = '${cliente.NotaFinalPR}') WHERE RM = ${RM}`;
  executeSQL(sql, callback);
};
// Exclui um cliente pelo RM
exports.delete = (RM, callback) => {
  const sql = `DELETE FROM NotasEF2 WHERE RM = ${RM}`;
  executeSQL(sql, callback);
};