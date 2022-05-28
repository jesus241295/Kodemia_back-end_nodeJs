function saludar(nombre){
    return `Hola ${nombre}, saludos bro`
}
const saludo = saludar('Jesus');
console.log(saludo)
const saludo1 = saludar('Daniel');
console.log(saludo1)
const saludo2 = saludar('Eduardo');
console.log(saludo2)

//iterar array devolver el num mas grande 
 const numMayor = (mayor) => {
     let numeroMayor = mayor[0];
  
     for (let index = 0; index < mayor.length; index++) {
         if(mayor[index] > numeroMayor   ){
            console.log( `el numero ${mayor[index]} es mas grande que ${numeroMayor}`)
             numeroMayor = mayor[index]
         }
         
     }


 }
//  string Reverse
 numMayor([160, 101, 3 ,150 ,1, 100])

 const reves = (letras) => letras.split('').reverse().join('') 
 console.log(reves('aloh'))

// crear una funcion que divida dos numeros  
// crear un if para comprovar 
 const dividir = (a, b) =>{
    if(b == 0){
        return 'Error'
}else{
    return a / b
}
   }
 console.log(dividir(20,0))