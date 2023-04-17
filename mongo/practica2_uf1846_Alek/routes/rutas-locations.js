const { response } = require("express");
const express = require("express");
const router = express.Router();

const Location = require("../models/location-models");

// * Listar todos los locations
router.get("/", async (req, res, next) => {
  let locations;
  try {
    locations = await Location.find({}).populate("especies");
  } catch (err) {
    const error = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    mensaje: "Todos los locations",
    locations: locations,
  });
});

// * Listar un location en concreto
router.get("/:id", async (req, res, next) => {
  const idLocation = req.params.id;
  let location;
  try {
    location = await Location.findById(idLocation);
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido recuperar los datos"
    );
    error.code = 500;
    return next(error);
  }
  if (!location) {
    const error = new Error(
      "No se ha podido encontrar un location con el id proporcionado"
    );
    error.code = 404;
    return next(error);
  }
  res.json({
    mensaje: "Location encontrado",
    location: location,
  });
});

module.exports = router;
