const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
  nombre: String,
  genero: String,
  edad: Number,
});

const Koder = mongoose.model("about-me", koderSchema);

// exportar modelo de koder
module.exports = Koder;
