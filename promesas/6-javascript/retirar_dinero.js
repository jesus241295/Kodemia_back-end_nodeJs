function retirarDinero(cantidad){
    return new Promise((resolve, reject)=>{
        console.log('procesando peticion ');
        console.log(`la cantidad a retirar es ${cantidad}`);
        if(cantidad < 100){
            reject('solo puedo darte mas de 100')
        }
        resolve(`$${cantidad}.00`);
    });
}
const promesaDinero = retirarDinero(1000);
promesaDinero
.then((dinero)=>{
        console.log('el cajero me dio: ',dinero)
    })
.catch((error)=>{
    console.log('el cajero fallo hay un error',error)
})
