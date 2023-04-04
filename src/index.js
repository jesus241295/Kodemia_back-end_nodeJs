require("dotenv").config(); // las variables del .env se agregan al process.env

//  importamos los paquetes que requiere
const express = require("express");
const mongoose = require("mongoose");
mongoose.pluralize(null);

const Koder = require("./models/koder.model");

// iniciamos constantes de configuracion
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const URL = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;
const app = express();
app.use(express.json);

app.get("/acerca", async (req, res) => {
  try {
    console.log("paso 1");
    const koders = await Koder.find({});

    res.json(koders);
  } catch (err) {
    const { message } = err;
    console.log(err);
    res.status(500).json({ ok: false, message });
  }
});

//  ejecutamos servidor y conectamos Base de datos
app.listen(PORT, () => {
  console.log("El servidor esta ejecutandose en el puerto :", PORT);
  mongoose
    .connect(URL)
    .then(() => {
      console.log("Estamos conectados a nuestra DB");
    })
    .catch((error) => {
      console.log("algo salio mal, no nos pudimos conectar ", error);
    });
});
