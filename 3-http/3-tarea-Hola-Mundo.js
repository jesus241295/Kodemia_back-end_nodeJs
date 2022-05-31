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


    if( respuesta === 'GET' && URL === '/hola'){
        response.setHeader('Content-Type', 'aplication/json');
        response.write((JSON.stringify(holaMundo)))
   
    }else if (respuesta === 'POST' && URL === '/koders')
    {   response.statusCode = 201;
        response.end('Aqui estan los koders'); 
    }else{
        response.statusCode = 404;
        response.end('Ruta no encontrada');
        response.end()
    }

    

    
    
});
// se mnada a llamar el servidor en el puerto 6000
servidor.listen(7000, () => {
 console.log('Servidor iniciado en el puerto 7000 ')
})