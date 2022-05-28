import { mkdir, rmdir, readdir } from 'fs/promises';

async function crearCarpeta(carpeta){
    try{
        await mkdir(carpeta);
        console.log(`se creo la carpeta de nombre: ${carpeta}`)
    }catch(error){
        console.log('no se pudo crear la carpeta')
    }
}
crearCarpeta('prueba_2');

async function borrarCarpeta(carpeta){
    try{
        await rmdir(carpeta);
        console.log(`carpeta ${carpeta} a sido eliminada`)
    }catch(error){
        console.error('no se encontro la carpeta', error);
    }
};
borrarCarpeta('pruebas_de_carpeta');

async function leerCaperta(carpeta){
    try{
        const leer = await readdir(carpeta);
        console.log(`la carpeta es ${carpeta} y contiene los archivos: ${leer}`)
    }catch(error){
        console.error('no se puedo leer carpeta', error);
    }
};
leerCaperta('prueba_2')