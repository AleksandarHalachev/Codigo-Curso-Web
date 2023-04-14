const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  pais: {
    type: String,
    maxLength: 50,
    required: true,
  },
  zona: {
    type: String,
    minLength: 1,
    maxLength: 100,
    required: true,
  },
  fechaInicio: {
    type: String,
    required: true,
  },
  fechaFin: {
    type: String,
    required: true,
  },
  especies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Specie",
    },
  ],
});

module.exports = mongoose.model("Location", locationSchema);
