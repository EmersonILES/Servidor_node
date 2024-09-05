const http = require('http'); // Importar el módulo http

// Crear un servidor
const server = http.createServer((req, res) => {
  // Establecer el código de estado y el tipo de contenido de la respuesta
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola, Mundo a todos!\n'); // Enviar la respuesta
});

// Asignar un puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () => {
    // Usar backticks para interpolar la variable "port"
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});
