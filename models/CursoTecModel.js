// Importando a conexão do banco de dados já configurada
const pool = require('./database'); // Ajuste o caminho conforme necessário

class CursoTec {
  // Método para criar um novo curso
  static async create(nome, duracao) {
    const query = 'INSERT INTO curso_tec (nome, duracao) VALUES ($1, $2) RETURNING *';
    const values = [nome, duracao];
    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna o curso recém-criado
  }

  // Método para buscar todos os cursos
  static async findAll() {
    const query = 'SELECT * FROM curso_tec';
    const res = await pool.query(query);
    return res.rows; // Retorna todos os cursos
  }

  // Método para buscar um curso pelo ID
  static async findById(id) {
    const query = 'SELECT * FROM curso_tec WHERE id = $1';
    const values = [id];
    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna o curso encontrado
  }

  // Método para atualizar um curso
  static async update(id, nome, duracao) {
    const query = 'UPDATE curso_tec SET nome = $1, duracao = $2 WHERE id = $3 RETURNING *';
    const values = [nome, duracao, id];
    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna o curso atualizado
  }

  // Método para deletar um curso
  static async delete(id) {
    const query = 'DELETE FROM curso_tec WHERE id = $1 RETURNING *';
    const values = [id];
    const res = await pool.query(query, values);
    return res.rows[0]; // Retorna o curso deletado
  }
}

module.exports = CursoTec;