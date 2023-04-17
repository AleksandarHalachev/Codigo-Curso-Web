// Location (país, zona, fechaInicio, fechaFin, especie)

const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  pais: {
    type: String,
    required: true,
    trim: true,
    minLength: 6,
    maxLength: 50,
  },
  zona: {
    type: String,
    trim: true,
    unique: true,
  },
  fechaInicio: {
    type: String,
    trim: true,
  },
  fechaFin: {
    type: String,
    trim: true,
  },
  especies: [
    {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Especie",
    },
  ],
});

module.exports = mongoose.model("Location", locationSchema);
