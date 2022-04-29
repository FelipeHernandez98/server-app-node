const http = require('http');

http.createServer((req, res)=>{
    res.write('Hola mundo');
    res.end();
})
.listen(4000);

console.log('Escuchando en el puerto 4000');