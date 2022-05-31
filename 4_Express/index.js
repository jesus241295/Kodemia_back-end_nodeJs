const express = require ('express');
const server = express();

server.get('/', (req, res)=>{
    res.send('Hola Mundo')
})

server.listen(8000, () =>{
    console.log('servidor');
})