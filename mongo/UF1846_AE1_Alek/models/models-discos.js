const mongoose = require("mongoose");

const discoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  grupo: {
    type: String,
    required: true,
    trim: true,
  },
  estilo: {
    type: String,
    maxLength: 20,
    required: true,
    trim: true,
  },
  fechaLanzamiento: {
    type: Date,
    default: Date.now,
    required: true,
  },
  ventas: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Disco", discoSchema);
