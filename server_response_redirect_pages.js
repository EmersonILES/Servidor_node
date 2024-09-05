const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/old-page') {
    res.writeHead(301, { 'Location': '/new-page' });
    res.end();
  } else if (req.url === '/new-page') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Esta es la nueva página.');
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página no encontrada');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
