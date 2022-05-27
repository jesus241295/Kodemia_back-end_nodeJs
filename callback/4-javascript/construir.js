const muro = {
    construido: false,
    aplanado: false,
    pintado: false,
};
function construir(muro, callback){
    console.log('Construyendo..');
    setTimeout(()=>{
        muro.construido = true;
        callback(muro); //El muro esta construido
    }, 700)
};
function aplanar(muro, callback){
    console.log('Aplanando..');
    setTimeout(()=>{
        muro.aplanado = true;
        callback(muro);// El muro esta aplanado
    }, 300)
    
};
function pintar(muro, callback){
    console.log('Pintando..');
    setTimeout(()=>{
        muro.pintado = true;
        callback(muro);// El muro esta pintado
    }, 200)
};
// construir(muro, (muroConstruido)=>{
//     aplanar(muroConstruido,(muroAplanado)=>{
//         pintar(muroAplanado,(muroPintado)=>{
//             console.log('Muro terminado', muroPintado);
//         });
//     });
// });

const muroConstruido = construir(muro);
console.log('muro construido', muroConstruido);

const muroAplanado = aplanar(muroConstruido);
console.log('muro aplanado', muroAplanado);

const muroPinatdo = pintar(muroAplanado);
console.log('muro pintado', muroPinatdo);