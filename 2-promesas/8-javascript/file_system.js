import { writeFile,  readFile, unlink} from 'fs/promises';



async function crearArchivo(archivo, contenido){
    try{
        await writeFile(archivo, contenido);
            console.log('se creo el archivo')
    
}catch(error){
        console.log('no se creo el archivo',error);
    }
}
async function leerArchivo(archivo){
    try{
        const contenido = await readFile(archivo, 'utf8');
        console.log('Contenido:', contenido)
    }catch(error){
        console.log('no se encontro el archivo')
    }
}

async function borrarArchivo(nombre){
    try{
        await unlink(nombre);
        console.log(`el archivo ${nombre} fue eliminado`);
    }catch(error){
        console.error('no se encontro archivo');
        console.error(error)
    }  
}
async function funciones(){
    await crearArchivo('texto.txt', 'esto es un nuevo archivo');
    await leerArchivo('texto.txt');
    await borrarArchivo('archivo.txt');
}
funciones();