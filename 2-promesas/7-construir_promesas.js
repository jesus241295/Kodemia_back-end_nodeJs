const muro = {
    construido: false,
    aplanado: false,
    pintado: false,
};
function construir(muro){
    console.log('Construyendo..');
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        muro.construido = true;
        if(muro.construido == false){
            reject(new Error('no se puedo construir el muro'))
        }
        resolve(muro); //El muro esta construido
    }, 500);
  });
};
function aplanar(muro){
    console.log('Aplanando..');
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            muro.aplanado = true;
            if(muro.aplanado == false){
                reject(new Error('no se puedo aplanar el muro'))
            }
            resolve(muro);// El muro esta aplanado
        }, 500)
    });
};
function pintar(muro){
    console.log('Pintando..');
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            muro.pintado = true;
            if(muro.pintado == false){
                reject(new Error('no se puedo pintar el muro'))
            }
            resolve(muro);// El muro esta pintado
        }, 500)
    });
};
// construir(muro)
// .then((muroConstruido)=>{
//      console.log('el muro se esta construido', muroConstruido);
//      return aplanar(muroConstruido);
// })
// .then((muroAplanado)=>{
//     console.log('muro se esta aplanando', muroAplanado);
//     return pintar(muroAplanado)
// })
// .then((muroPintado)=>{
//     console.log('muro quedo pintado', muroPintado)
//     console.log('se termino la construccion')
// })
// .catch((error)=>{
//     console.log('algo salio mal estamos en catch',error)
// })
async function ordenarConstruccion(){
   
    try{
        await construir(muro)
        await aplanar(muro)
        await pintar(muro)
    console.log('se termino la obra', muro)
    }catch(error){
        console.log('otro error', error)

    }

}
ordenarConstruccion();