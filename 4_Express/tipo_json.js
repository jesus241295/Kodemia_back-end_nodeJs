const express = require ( 'express' );

const app = express();
 
const port = 3500

app.get("/koder", (req, res) =>{
    const tipoJson ={
        typo: 'Aqui estan todos los koders'
    } ;
    res.json(tipoJson)
})
app.post("/koder", (req, res) =>{
    const tipoJson ={
        typo: 'Aqui puedes crear koders'
    } ;
    res.json(tipoJson)
})
app.put("/koder", (req, res) =>{
    const tipoJson ={
        typo: 'Aqui puedes sustituir un koder'
    } ;
    res.json(tipoJson)
})

app.listen(port, () =>{
    console.log('corriendo servidor en el puerto', port)
})