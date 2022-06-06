const mongoose = require ("mongoose");

const DB_USER = 'jesus241295';
const DB_PASS = 'jesus01.*';
const DB_HOST = 'cluster0.smalkez.mongodb.net'
const URL =`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/?retryWrites=true&w=majority`;

mongoose.connect(URL)
.then((connection) => {
    console.log('estamos conectados a base de datos')
}).catch((error) => {
    console.error('no nos conectamos a base de datos')
});
