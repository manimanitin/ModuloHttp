const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain');
    res.end('hola mundo\n');
});

server.listen(port, hostname, () => {
    console.log(`el servidor se esta ejecutando en http:${hostname}:${port}`);
});