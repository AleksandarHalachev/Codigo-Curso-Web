//Especie (nombre, familia (aves, mamíferos, etc...), rama (dentro de la familia, la rama a la que pertenece), notas, location)
const mongoose = require("mongoose");

const especieSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: mongoose.Types.ObjectId,
    trim: true,
    ref: "Especie",
  },
  familia: {
    type: String,
    required: true,
    enum: ["aves", "mamíferos", "reptiles"],
  },
  rama: {
    type: String,
    trim: true,
  },
  notas: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Especie", especieSchema);
