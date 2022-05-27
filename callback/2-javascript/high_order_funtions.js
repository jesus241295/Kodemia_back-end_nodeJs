// reciben como parametro otra funcion map, filter, reduce, for  
/*
  Vamos a crear nuestra propia funcion map
  usando higher-order functions
  La firma de map se verá así:
​
  map(array, callback) => array
*/


/*
  Vamos a recibir un arreglo y un callback
  Vamos a ejecutar el callback a cada elemento del arreglo
  y el resultado lo vamos a guardar en otro arreglo
*/
// function map(array, callback) {
//   const resultados = [];

//   for (let i = 0; i < array.length; i++) {
//     const resultado = callback(array[i]);
//     resultados.push(resultado)
//   }

//   return resultados;
// }


// // Vamos a usar nuestro map

// const arreglo = [1, 2, 5, 10, 20];

// function negativo(numero) {
//   return numero * -1;
// }
// const resultados = map(arreglo, negativo)
// console.log(resultados)

// const otrosResultados = map(arreglo, x => x+10)
// console.log(otrosResultados)

// // ------------------------------------------------------------------------------------------------------

 // ------metodo every

// const array1 = [101, 102, 150, 200];
// const arrayPar = [2, 4, 8, 10, 20, 21]

// const numero = 100;

// function every(arreglo, callback){
//     const result = [];
    
//     for(let i= 0; i<arreglo.length; i++){
//         const primerElemento = callback(arreglo[i]);
//         result.push(primerElemento)
        
//     };
//     for (let i = 0; i < result.length; i++){
//         if(result[i] === true){
//             continue;

//         } 
//         else{
//             return false;
//         }
//     }
// return true;

// }
// function elemento(cumpleCondicion){
//     return cumpleCondicion > numero
// }
// let funcionEvery = every(array1, elemento);

// console.log (funcionEvery)

// function numeroPar(numero){
//     return numero %2 === 0

// }
// const resultadoPar = every(arrayPar, numeroPar);
// console.log(resultadoPar);

//--------------------------------------------------------------------------------------------------- 

//------- metedo filter 
// function filter (arreglo, callback){
//   let numeros = [];
//   for(let i = 0; i < arreglo.length; i++){
//    const resultado = callback(arreglo[i])
//    if(resultado){
//    numeros.push(arreglo[i])
//    }
//   }
 
//   return numeros
// }
// const array = [-2, -5, 10, 30, -10 -120, 200, -1, -50, 40, 80];
//  const positivo = (a)=>{ 
// return a >= 0 
//  }
//  const negativo = (b)=>{
//    return b < 0 
//  }
  
// const numPositivo = filter(array, positivo)
// const numNegativo = filter(array, negativo)

// console.log(numPositivo)
// console.log(numNegativo)

// ---------------------------------------------------------------------------------------------------------------

// metodo find

function find(arreglo, callback){
  // const result = [];
  for(let i = 0; i < arreglo.length; i++){
      const resultado = callback(arreglo[i])
       console.log(resultado)
      if(resultado){
        return arreglo[i];
      };
  };
  
};
const estados = ['tlaxcala', 'mexico', 'monterrey', 'jalisco'];

const buscarCiudad = (element) =>{
  return element === 'monterrey'

}
const buscar = find(estados, buscarCiudad);
console.log(buscar)