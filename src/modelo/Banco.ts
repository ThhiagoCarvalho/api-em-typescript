import mysql from 'mysql2/promise';

// Configurações da conexão com o banco de dados
const pool = mysql.createPool({
  host: 'localhost',        // Endereço do banco de dados
  user: 'root',      // Usuário do banco
  password: 'root123',    // Senha do banco
  database: 'testeTS',    // Nome do banco de dados
  waitForConnections: true, // Aguarda conexões caso o pool esteja cheio
  connectionLimit: 10,      // Número máximo de conexões no pool
  queueLimit: 0             // Sem limite na fila de conexões pendentes
});

// Testa a conexão
(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão com MySQL bem-sucedida!');
    connection.release(); // Libera a conexão de volta para o pool
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

export default pool;
