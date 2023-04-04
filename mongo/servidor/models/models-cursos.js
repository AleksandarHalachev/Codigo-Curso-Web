const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema({
  curso: {
    type: String,
    required: true,
    trim: true,
  },
  docente: {
    type: String,
    required: true,
    trim: true,
  },
  precio: {
    type: Number,
    min: 1000,
    max: 10000,
    enum: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
  },
});

module.exports = mongoose.model("Curso", cursoSchema);
