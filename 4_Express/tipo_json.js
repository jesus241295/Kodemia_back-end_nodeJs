const express = require ( 'express' );
const fs = require("fs/promises");

const app = express();
// middleware convierte request a json 
app.use(express.json())
 
const port = 3500;

app.get("/koders", async (req, res) => {
    const archivo = await fs.readFile("koders.json", "utf8"); //el archivo es un string
    const kodersObjet = JSON.parse(archivo);
    const koders = kodersObjet.koders;


    res.json(koders);
});

app.get("/koder", (req, res) =>{
    const tipoJson ={
        mensaje: 'Aqui estan todos los koders'
    } ;
    res.json(tipoJson);
});


// aqui se crea el verbo post en express-------------------------------------------------------------

app.post("/koders", async (req, res) => {
    const koder = req.body;
    const archivo = await fs.readFile("koders.json", "utf8"); //el archivo es un string
    const kodersObjet = JSON.parse(archivo);
    const koders = kodersObjet.koders;

//   agregamos un nuevo koder
    koders.push(koder);
// guardamos cambios de los nuevos koders
const nuevoArchivo = JSON.stringify(kodersObjet, null, 4);
// escribimos en archivo asincrono, lleva el await
await fs.writeFile("koders.json", nuevoArchivo, "utf8");

// Aqui se envia la respuesta
res.status(201); //estado creado 

res.json(koders);
    
})
app.post("/koder", (req, res) =>{
    const tipoJson ={
        mensaje: 'Aqui puedes crear koders'
    } ;
    res.json(tipoJson)
});
app.put("/koder", (req, res) =>{
    const tipoJson ={
        mensaje: 'Aqui puedes sustituir un koder'
    } ;
    res.json(tipoJson)
});

app.listen(port, () =>{
    console.log('corriendo servidor en el puerto', port)
});