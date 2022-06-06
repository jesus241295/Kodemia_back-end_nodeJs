const express = require("express");
const routerKoders = require("./routers/koders");
const routerMentores = require("./routers/mentores");
const PORT = 8080;
const FILENAME = 'koders.json';
const ENCODING = 'utf8';
const URL = "/koders";

const server = express();

// middleware para convertir request a JSON
server.use(express.json());



// rutas Web
server.use('/koders', routerKoders);

server.use('/mentores', routerMentores);

server.get("/", (request, response) => {
  response.send("Hola Koders!");
});



server.get("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui estan todos los koders",
  };

  res.json(respuesta);
});

server.post("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes crear koders",
  };

  res.json(respuesta);
});

server.put("/koder", (req, res) => {
  const respuesta = {
    mensaje: "Aqui puedes sustituir un koder",
  };

  res.json(respuesta);
});

server.listen(PORT, () => {
  console.log("Servidor ejecutandose");
});

