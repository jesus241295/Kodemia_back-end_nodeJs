const fs = require('fs');

// fs.writeFile('otrosDos.txt', 'mi segundo archivo',(err)=>{
// if(err){
//     console.error('algo salio mal no ', err)
// }else{
//     console.log('todo bien si')
// }
//})
function callback(otro){
if(otro){
    console.error('hay', otro)
}else{
    console.log('se creo otro callback')
}
}
// fs.writeFile('otroCallback.txt', 'segundo archivo', callback);



function crearArchivo(nombre, contenido){
    fs.writeFile(nombre, contenido,(err)=>{
        if(err){
            console.error('algo salio mal', err)
        }else{
            console.log('todo bien')
        }
    
        
})
}
// crearArchivo('tercerArchivo.txt ', 'nuevo archivo' );

function leerarchivo(nombre){
fs.readFile(nombre, 'utf8',  (err, data)=>{
    if (err){
        console.error('algo esta mal' )
    }else{
        console.log(data)
    }
})
}
leerarchivo ('otrosDos.txt');

function borrarArchivo(nombre){
    fs.unlink(nombre,  (err)=>{
        if(err){
            console.error('no se encontro el archivo')
        }else{
            console.log('archivo', nombre ,'encontrado')
        }
    })
}
// borrarArchivo('otroCallback.txt')