const mongoose = require("mongoose");

const specieSchema = new mongoose.Schema({
  nombre: {
    type: String,
    min: 3,
    max: 30,
  },
  familia: {
    type: String,

    required: true,
  },
  rama: {
    type: String,
    max: 30,
  },
  localizacion: {
    type: mongoose.Types.ObjectId,
    ref: "Location",
  },
  observaciones: {
    type: String,
    max: [300, "Estas al limite de caracteres"],
  },
});

module.exports = mongoose.model("Specie", specieSchema);
