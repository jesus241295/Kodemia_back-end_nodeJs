const http = require("http");

// creando un servidor usando el metodo crateServer
const server = http.createServer((request, response)=>{
    console.log('URL:', request.url)
    console.log('METODO:', request.method)
    // responder al cliente, escribimos la respuesta
    response.write('Hola desde mi serve!');
     response.end()//terminamos la respuesta y la enviamos
});
// ponemos al servidor a escuchar en un puerto
server.listen(8000, () => {
    console.log('servidor iniciado en el puerto 8000')

});
