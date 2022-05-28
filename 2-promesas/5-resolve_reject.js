const promesa = new Promise((resolve, reject)=>{
    // resolve('este es un mensaje');
    reject('algo esta mal')
});

promesa
.then((element)=>{
console.log('resultado:', element)
})
.catch((error)=>{
console.log('el error es :',error)
})