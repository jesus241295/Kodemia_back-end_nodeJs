const http = require('http');
// se crea servidor con createServer
const servidor = http.createServer((request, response)=>{ 
    // mensaje tipo objeto
    const holaMundo = {
        hola: 'mundo'
    }   
    const URL = request.url;
    console.log('URL:',URL)
    const respuesta = request.method
    console.log('METODO:', respuesta);

    if(URL === '/hola'){
        response.write((JSON.stringify(holaMundo)))
    };

    const headers = request.headers;

    response.end();

});
// se mnada a llamar el servidor en el puerto 6000
servidor.listen(7000, () => {
 console.log('Servidor iniciado en el puerto 7000 ')
})