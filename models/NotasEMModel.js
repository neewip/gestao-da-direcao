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

        callback(null, []); // Se não há linhas, retorna um array vazio

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
  const sql = "SELECT * FROM NotasEM";
  executeSQL(sql, callback);
};
// Busca um cliente pelo ID
exports.findById = (rm, callback) => {
  const sql = `SELECT * FROM NotasEM WHERE RM = ${rm}`;
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
  const sql = `INSERT INTO NotasEM (rm, [1EtapaBIO],	[2EtapaBIO],	[3EtapaBIO],	NotaFinalBIO,	[1EtapaFIS],	[2EtapaFIS],	[3EtapaFIS],	NotaFinalFIS,	[1EtapaQUI],	[2EtapaQUI],	[3EtapaQUI],	NotaFinalQUI,	[1EtapaMA],	[2EtapaMA],	[3EtapaMA],	NotaFinalMA,	[1EtapaLP],	[2EtapaLP],	[3EtapaLP],	NotaFinalLP,	[1EtapaAR],	[2EtapaAR],	[3EtapaAR],	NotaFinalAR,	[1EtapaEF],	[2EtapaEF], [3EtapaEF],	NotaFinalEF,	[1EtapaLI],	[2EtapaLI],	[3EtapaLI],	NotaFinalLI,	[1EtapaHI],	[2EtapaHI],	[3EtapaHI],	NotaFinalHI,	[1EtapaGE],	[2EtapaGE],	[3EtapaGE], NotaFinalGE,	[1EtapaSOC],	[2EtapaSOC],	[3EtapaSOC], NotaFinalSOC,	[1EtapaFIL],	[2EtapaFIL],	[3EtapaFIL], NotaFinalFIL) VALUES
('${cliente.rm}', '${cliente['1EtapaBIO']}','${cliente['2EtapaBIO']}, '${cliente['3EtapaBIO']}, '${cliente.NotaFinalBIO}', '${cliente['1EtapaFIS']}, '${cliente['2EtapaFIS']}, '${cliente['3EtapaFIS']}, '${cliente.NotaFinalFIS}', '${cliente['1EtapaQUI']}, '${cliente['2EtapaQUI']}, '${cliente['3EtapaQUI']}, '${cliente.NotaFinalQUI}', '${cliente['1EtapaMA']}, '${cliente['2EtapaMA']}, '${cliente['3EtapaMA']}, '${cliente.NotaFinalMA}'),  '${cliente['1EtapaLP']}, '${cliente['2EtapaLP']}, '${cliente['3EtapaLP']}, '${cliente.NotaFinalLP}'), '${cliente['1EtapaAR']}, '${cliente['2EtapaAR']}, '${cliente['3EtapaAR']}, '${cliente.NotaFinalAR}'), '${cliente['1EtapaLI']}, '${cliente['2EtapaLI']}, '${cliente['3EtapaLI']}, '${cliente.NotaFinalLI}'), '${cliente['1EtapaHI']}, '${cliente['2EtapaHI']}, '${cliente['3EtapaHI']}, '${cliente.NotaFinalHI}'), '${cliente['1EtapaGE']}, '${cliente['2EtapaGE']}, '${cliente['3EtapaGE']}, '${cliente.NotaFinalGE}'), '${cliente['1EtapaSOC']}','${cliente['2EtapaSOC']}, '${cliente['3EtapaSOC']}, '${cliente.NotaFinalSOC}', '${cliente['1EtapaFIL']}','${cliente['2EtapaFIL']}, '${cliente['3EtapaFIL']}, '${cliente.NotaFinalFIL}', '${cliente['1EtapaEF']}','${cliente['2EtapaEF']}, '${cliente['3EtapaEF']}, '${cliente.NotaFinalEF}')`;
  executeSQL(sql, callback);
};
// Atualiza um cliente pelo ID
exports.update = (rm, cliente, callback) => {
  const sql = `UPDATE NotasEM SET rm = '${cliente.rm}', [1EtapaBIO] = '${cliente['1EtapaBIO']}', [2EtapaBIO] = '${cliente['2EtapaBIO']},  [3EtapaBIO] = '${cliente['3EtapaBIO']},  NotaFinalBIO = '${cliente.NotaFinalBIO}', [1EtapaFIS] = '${cliente['1EtapaFIST']}, [2EtapaFIS] = '${cliente['2EtapaFIS']}, [3EtapaFIS] = '${cliente['3EtapaFIS']}, NotaFinalFIS = '${cliente.NotaFinalFIS}', [1EtapaQUI] = '${cliente['1EtapaQUI']}, [2EtapaQUI] = '${cliente['2EtapaQUI']}, [3EtapaQUI] = '${cliente['3EtapaQUI']}, NotaFinalQUI = '${cliente.NotaFinalQUI}', [1EtapaMA] = '${cliente['1EtapaMA']}, [2EtapaMA] = '${cliente['2EtapaMA']}, [3EtapaMA] = '${cliente['3EtapaMA']}, NotaFinalMA = '${cliente.NotaFinalMA}'), [1EtapaLP] = '${cliente['1EtapaLP']}, [2EtapaLP] = '${cliente['2EtapaLP']}, [3EtapaLP] = '${cliente['3EtapaLP']}, NotaFinalLP = '${cliente.NotaFinalLP}'), [1EtapaAR] = '${cliente['1EtapaAR']}, [2EtapaAR] = '${cliente['2EtapaAR']}, [3EtapaAR] = '${cliente['3EtapaAR']}, NotaFinalAR = '${cliente.NotaFinalAR}'), [1EtapaEF] = '${cliente['1EtapaEF']}, [2EtapaEF] = '${cliente['2EtapaEF']}, [3EtapaEF] = '${cliente['3EtapaEF']}, NotaFinalEF = '${cliente.NotaFinalEF}'), [1EtapaLI] = '${cliente['1EtapaLI']}, [2EtapaLI] = '${cliente['2EtapaLI']}, [3EtapaLI] = '${cliente['3EtapaLI']}, NotaFinalLI = '${cliente.NotaFinalLI}', [1EtapaHI] = '${cliente['1EtapaHI']},  [2EtapaHI] = '${cliente['2EtapaHI']},  [3EtapaHI] = '${cliente['3EtapaHI']}, NotaFinalHI = '${cliente.NotaFinalHI}', [1EtapaGE] = '${cliente['1EtapaGE']},  [2EtapaGE] = '${cliente['2EtapaGE']},  [3EtapaGE] = '${cliente['3EtapaGE']}, NotaFinalGE = '${cliente.NotaFinalGE}', [1EtapaSOC] = '${cliente['1EtapaSOC']},  [2EtapaSOC] = '${cliente['2EtapaSOC']},  [3EtapaSOC] = '${cliente['3EtapaSOC']}, NotaFinalSOC = '${cliente.NotaFinalSOC}', [1EtapaFIL] = '${cliente['1EtapaFIL']},  [2EtapaFIL] = '${cliente['2EtapaFIL']},  [3EtapaFIL] = '${cliente['3EtapaFIL']}, NotaFinalFIL = '${cliente.NotaFinalFIL}') WHERE rm = ${rm}`;
  executeSQL(sql, callback);
};
// Exclui um cliente pelo RM
exports.delete = (rm, callback) => {
  const sql = `DELETE FROM NotasEM WHERE rm = ${rm}`;
  executeSQL(sql, callback);
};