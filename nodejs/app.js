const http = require('http');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'fullcycle'
});

const server = http.createServer((req, res) => {
  connection.query('SELECT * FROM people', (err, results) => {
    if (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Erro interno');
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Full Cycle Rocks!</h1>');
    res.write('<ul>');
    results.forEach(row => {
      res.write(`<li>${row.name}</li>`);
    });
    res.write('</ul>');
    res.end();
  });
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  }

  console.log('Conectado ao banco de dados MySQL');
});

server.listen(3000, () => {
  console.log('Servidor Node.js ouvindo na porta 3000');
});
