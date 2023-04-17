const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Especie = require("../models/especies-models");
const Location = require("../models/location-models");

router.get("/", async (req, res, next) => {
  let especies;
  try {
    especies = await Especie.find({}).populate("location");
  } catch (err) {
    const error = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    mensaje: "Todos los especies",
    especies: especies,
  });
});

router.get("/:id", async (req, res, next) => {
  const idEspecie = req.params.id;
  let especie;
  try {
    especie = await Especie.findById(idEspecie).populate("location");
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido recuperar los datos"
    );
    error.code = 500;
    return next(error);
  }
  if (!especie) {
    const error = new Error(
      "No se ha podido encontrar una especie con el id proporcionado"
    );
    error.code = 404;
    return next(error);
  }
  res.json({
    mensaje: "Especie encontrada",
    especie: especie,
  });
});

module.exports = router;
