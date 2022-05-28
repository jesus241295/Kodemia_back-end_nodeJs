const http = require("http");


const server = http.createServer((request, response)=>{
    const URL =  request.url
    const respuesta =  request.method
    console.log(respuesta)
    if( URL == '/koder'){
        // console.log('Aqui solo hay un koder')
        response.write('Aqui hay un solo koder');
    }
    else if(URL == '/koders'){
        // console.log('Aqui estan todos los koders')
        response.write('Aqui estan todos los koders')
    }else{
        // console.log('no se que hacer aiuuda')
        response.write('Nose que hacer aiuuuda');
    }
     response.end()
});

server.listen(8000, () => {
    console.log('servidor iniciado en el puerto 8000')

});
