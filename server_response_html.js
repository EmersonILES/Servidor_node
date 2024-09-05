const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (req.method === 'GET') {
    if (parsedUrl.pathname === '/') {
      const format = parsedUrl.query.format;

      if (format === 'json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/plain');
        res.end(JSON.stringify({ message: 'Esta es la página principal' }));
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Esta es la página principal');
      }
    } else if (parsedUrl.pathname === '/text') {
      const format = parsedUrl.query.format;

      if (format === 'json') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Esta es la página "Acerca de"' }));
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Esta es la página "Acerca de"');
      }
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Página no encontrada');
    }
  } else {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Método no permitido');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
