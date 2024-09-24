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
  const sql = "SELECT * FROM NotasEF1";
  executeSQL(sql, callback);
};
// Busca um cliente pelo ID
exports.findById = (RM, callback) => {
  const sql = `SELECT * FROM NotasEF1 WHERE RM = ${RM}`;
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
  const sql = `INSERT INTO NotasEF1 (RM, [1EtapaCN],	[2EtapaCN],	[3EtapaCN],	NotaFinalCN,	[1EtapaMAT],	[2EtapaMAT],	[3EtapaMAT],	NotaFinalMAT,	[1EtapaLP],	[2EtapaLP],	[3EtapaLP],	NotaFinalLP,	[1EtapaAR],	[2EtapaAR],	[3EtapaAR],	NotaFinalAR,	[1EtapaEF],	[2EtapaEF],	[3EtapaEF],	NotaFinalEF,	[1EtapaCH],	[2EtapaCH],	[3EtapaCH],	NotaFinalCH,	[1EtapaCCE],	[2EtapaCCE], [3EtapaCCE],	NotaFinalCCE,	[1EtapaLI],	[2EtapaLI],	[3EtapaLI],	NotaFinalLI,	[1EtapaPF],	[2EtapaPF],	[3EtapaPF],	NotaFinalPF,	[1EtapaROB],	[2EtapaROB],	[3EtapaROB], NotaFinalROB,	[1EtapaPR],	[2EtapaPR],	[3EtapaPR],	NotaFinalPR,	[1EtapaPSC],	[2EtapaPSC],	[3EtapaPSC],	NotaFinalPSC) VALUES
('${cliente.RM}', '${cliente['1EtapaCN']}','${cliente['2EtapaCN']}, '${cliente['3EtapaCN']}, '${cliente.NotaFinalCN}', '${cliente['1EtapaMAT']}, '${cliente['2EtapaMAT']}, '${cliente['3EtapaMAT']}, '${cliente.NotaFinalLP}', '${cliente['1EtapaAR']}, '${cliente['2EtapaAR']}, '${cliente['3EtapaAR']}, '${cliente.NotaFinalAR}', '${cliente['1EtapaEF']}, '${cliente['2EtapaEF']}, '${cliente['3EtapaEF']}, '${cliente.NotaFinalEF}'),  '${cliente['1EtapaCCE']}, '${cliente['2EtapaCCE']}, '${cliente['3EtapaCCE']}, '${cliente.NotaFinalCCE}'), '${cliente['1EtapaLI']}, '${cliente['2EtapaLI']}, '${cliente['3EtapaLI']}, '${cliente.NotaFinalLI}'), '${cliente['1EtapaPF']}, '${cliente['2EtapaPF']}, '${cliente['3EtapaPF']}, '${cliente.NotaFinalPF}'), '${cliente['1EtapaROB']}, '${cliente['2EtapaROB']}, '${cliente['3EtapaROB']}, '${cliente.NotaFinalROB}'), '${cliente['1EtapaPR']}, '${cliente['2EtapaPR']}, '${cliente['3EtapaPR']}, '${cliente.NotaFinalPR}'), '${cliente['1EtapaPSC']}, '${cliente['2EtapaPSC']}, '${cliente['3EtapaPSC']}, '${cliente.NotaFinalPSC}'), `;
  executeSQL(sql, callback);
};
// Atualiza um cliente pelo ID
exports.update = (RM, cliente, callback) => {
  const sql = `UPDATE NotasEF1 SET RM = '${cliente.RM}', [1EtapaCN] = '${cliente['1EtapaCN']}', [2EtapaCN] = '${cliente['2EtapaCN']},  [3EtapaCN] = '${cliente['3EtapaCN']},  NotaFinalCN = '${cliente.NotaFinalCN}', [1EtapaMAT] = '${cliente['1EtapaMAT']}, [2EtapaMAT] = '${cliente['2EtapaMAT']}, [3EtapaMAT] = '${cliente['3EtapaMAT']}, NotaFinalLP = '${cliente.NotaFinalLP}', [1EtapaAR] = '${cliente['1EtapaAR']}, [2EtapaAR] = '${cliente['2EtapaAR']}, [3EtapaAR] = '${cliente['3EtapaAR']}, NotaFinalAR = '${cliente.NotaFinalAR}', [1EtapaEF] = '${cliente['1EtapaEF']}, [2EtapaEF] = '${cliente['2EtapaEF']}, [3EtapaEF] = '${cliente['3EtapaEF']}, NotaFinalEF = '${cliente.NotaFinalEF}'), [1EtapaCCE] = '${cliente['1EtapaCCE']}, [2EtapaCCE] = '${cliente['2EtapaCCE']}, [3EtapaCCE] = '${cliente['3EtapaCCE']}, NotaFinalCCE = '${cliente.NotaFinalCCE}'), [1EtapaLI] = '${cliente['1EtapaLI']}, [2EtapaLI] = '${cliente['2EtapaLI']}, [3EtapaLI] = '${cliente['3EtapaLI']}, NotaFinalLI = '${cliente.NotaFinalLI}'), [1EtapaPF] = '${cliente['1EtapaPF']}, [2EtapaPF] = '${cliente['2EtapaPF']}, [3EtapaPF] = '${cliente['3EtapaPF']}, NotaFinalPF = '${cliente.NotaFinalPF}'), [1EtapaROB] = '${cliente['1EtapaROB']}, [2EtapaROB] = '${cliente['2EtapaROB']}, [3EtapaROB] = '${cliente['3EtapaROB']}, NotaFinalROB = '${cliente.NotaFinalROB}'), [1EtapaPR] = '${cliente['1EtapaPR']},  [2EtapaPR] = '${cliente['2EtapaPR']},  [3EtapaPR] = '${cliente['3EtapaPR']}, NotaFinalPR = '${cliente.NotaFinalPR}'),  [1EtapaPSC] = '${cliente['1EtapaPSC']}, [2EtapaPSC] = '${cliente['2EtapaPSC']}, [3EtapaPSC] = '${cliente['3EtapaPSC']}, NotaFinalPSC = '${cliente.NotaFinalPSC}') WHERE RM = ${RM}`;
  executeSQL(sql, callback);
};
// Exclui um cliente pelo RM
exports.delete = (RM, callback) => {
  const sql = `DELETE FROM NotasEF1 WHERE RM = ${RM}`;
  executeSQL(sql, callback);
};