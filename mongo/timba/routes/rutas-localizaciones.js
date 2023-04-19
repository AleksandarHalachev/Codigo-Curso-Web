const express = require("express");
const router = express.Router();
const Localizacion = require("../models/modelo-localizaciones");
const Specie = require("../models/modelo-especies");

router.get("/", async (req, res, next) => {
  let localizaciones;
  try {
    localizaciones = await Localizacion.find({}).populate("especies");
  } catch (error) {
    const err = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(err);
  }
  res.status(200).json({
    mensaje: "Listado de todas las localizaciones",
    localizaciones: localizaciones,
  });
});

//* Recuperar localizaciones por id
router.get("/:id", async (req, res, next) => {
  const idLocalizacion = req.params.id;
  let localizacion;
  try {
    localizacion = await Localizacion.findById(idLocalizacion).populate(
      "species"
    );
  } catch (error) {
    const err = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(err);
  }
  res.status(200).json({
    mensaje: "Localizacion recibida",
    localizacion: localizacion,
  });
});

//* Crear nueva localizacion
router.post("/", async (req, res, next) => {
  const { pais, zona, fechaInicio, fechaFin } = req.body;
  let compruebaLocalizacion;

  try {
    compruebaLocalizacion = await Localizacion.findOne({ zona });
  } catch (err) {
    const error = new Error(err);
    error.code = 500;
    return next(error);
  }

  if (compruebaLocalizacion) {
    const error = new Error("Ya existe una localizacion con esa zona.");
    error.code = 401;
    return next(error);
  }

  const nuevaLocalizacion = new Localizacion({
    pais,
    zona,
    fechaInicio,
    fechaFin,
    especies: [],
  });

  try {
    await nuevaLocalizacion.save(); // Guardar en MongoDB Atlas
  } catch (error) {
    const err = new Error(
      "No ha podido añadirse, fallo al conectar al servidor"
    );
    err.code = 500;
    return next(err);
  }
  res.status(201).json({
    mensaje: "Localizacion añadida con exito.",
    localizacion: nuevaLocalizacion,
  });
});

router.patch("/:id", async (req, res, next) => {
  const { pais, zona, fechaInicio, fechaFin, especies } = req.body;
  const idLocalizacion = req.params.id;
  buscarEspecie = await Specie.findOne({ nombre: especies });
  if (buscarEspecie) {
    const err = new Error("La especie que quiere añadir ya existe");
    err.code = 400; // Error
    return next(err);
  } else {
    console.log(buscarEspecie);
    let buscarLocalizacion;
    try {
      buscarLocalizacion = await Localizacion.findById(idLocalizacion);
    } catch (error) {
      const err = new Error(
        "Ha ocurrido un error. No se han podido modificar los datos"
      );
      error.code = 500;
      return next(err);
    }

    console.log(buscarEspecie);

    try {
      buscarEspecie = await Specie.findOne({ nombre: especies }); // ! Solo añadir una nueva  especie al array de especies
      if (especies) {
        buscarLocalizacion.especies.push(buscarEspecie.id);
        await buscarLocalizacion.save();
      } else {
        buscarLocalizacion = await Location.findByIdAndUpdate(
          idLocalizacion,
          req.body,
          {
            new: true,
            runValidators: true,
          }
        ).populate("specie");
      }
    } catch (error) {
      console.log(error);
      const err = new Error("Ha fallado la modificación de la localización");
      err.code = 500;
      return next(err);
    }
    res.status(200).json({
      mensaje: "Datos de localización modificados",
      localizacion: buscarLocalizacion,
    });
  }
});

// * Eliminar una localizacion por su id
router.delete("/:id", async (req, res, next) => {
  let eliminarLocalizacion;
  try {
    eliminarLocalizacion = await Localizacion.findByIdAndDelete(req.params.id);
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido eliminar los datos"
    );
    error.code = 500;
    return next(error);
  }
  res.json({
    mensaje: "Localizacion eliminada",
    mostrarLocalizacionEliminada: eliminarLocalizacion,
  });
});

module.exports = router;
