import { writeFile,  readFile, unlink, mkdir, rmdir, readdir } from 'fs/promises';

async function crearCarpeta(carpeta){
    try{
        await mkdir(carpeta);
        console.log(`se creo la carpeta de nombre: ${carpeta}`)
    }catch(error){
        console.log('no se pudo crear la carpeta')
    }
}
//  crearCarpeta('prueba_2');

async function borrarCarpeta(carpeta){
    try{
        await rmdir(carpeta);
        console.log(`carpeta ${carpeta} a sido eliminada`)
    }catch(error){
        console.error('no se encontro la carpeta', error)
    }
}
//borrarCarpeta('pruebas_de_carpeta');

async function leerCaperta(carpeta){
    try{
        const leer = await readdir(carpeta);
        console.log(`la carpeta es ${carpeta} y contiene los archivos: ${leer}`)
    }catch(error){
        console.error('no se puedo leer carpeta', error);
    }
}
 leerCaperta('prueba_2')

// async function crearArchivo(archivo, contenido){
//     try{
//         await writeFile(archivo, contenido);
//             console.log('se creo el archivo')
    
// }catch(error){
//         console.log('no se creo el archivo',error);
//     }
// }
// async function leerArchivo(archivo){
//     try{
//         const contenido = await readFile(archivo, 'utf8');
//         console.log('Contenido:', contenido)
//     }catch(error){
//         console.log('no se encontro el archivo')
//     }
// }

// async function borrarArchivo(nombre){
//     try{
//         await unlink(nombre);
//         console.log(`el archivo ${nombre} fue eliminado`);
//     }catch(error){
//         console.error('no se encontro archivo');
//         console.error(error)
//     }  
// }
// async function funciones(){
//     await crearArchivo('texto.txt', 'esto es un nuevo archivo');
//     await leerArchivo('texto.txt');
//     await borrarArchivo('archivo.txt');
// }
// funciones();