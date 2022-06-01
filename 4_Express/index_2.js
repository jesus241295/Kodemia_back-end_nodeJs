const express = require ( 'express' );

const app = express();
 
const puerto = 3000

app.get('/', (req, res) => {
    res.send('Hola...Mundo... desde Express ')
});

app.post('/users', (rep, res) => {
    res.send('Aqui estan los usuarios')
});

app.get('/koders', (req, res) =>{
    const mandandoJson = {
        ok:'endpoint funcionando',
        type: 'JSON',
        super: 'bueno'
    };
    res.json(mandandoJson)
})

app.listen(puerto, () =>{
    console.log('corriendo servidor en el puerto', puerto)
})