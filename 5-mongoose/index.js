require ("dotenv").config();
const mongoose = require ("mongoose");

const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const URL =`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/?retryWrites=true&w=majority`;

mongoose.connect(URL)
.then((connection) => {
    console.log('estamos conectados a base de datos')
}).catch((error) => {
    console.error('no nos conectamos a base de datos');
    console.error(error)
});
