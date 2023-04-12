const express = require("express");
const Disco = require("../models/models-discos");
const router = express.Router();

router.get("/", async (req, res, next) => {
  let discos;
  try {
    discos = await Disco.find({});
  } catch (err) {
    const error = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    discos: discos,
  });
});

router.get("/:nombre", async (req, res, next) => {
  const nombreDisco = req.params.nombre;
  let disco;
  try {
    disco = await Disco.findOne({ nombre: nombreDisco });
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido recuperar los datos"
    );
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    disco: disco,
  });
});

router.post("/", async (req, res, next) => {
  const { nombre, grupo, estilo, fechaLanzamiento, ventas } = req.body;
  const nuevoDisco = new Disco({
    nombre,
    grupo,
    estilo,
    fechaLanzamiento,
    ventas,
  });
  try {
    await nuevoDisco.save();
  } catch (error) {
    const err = new Error("No se han podido guardar los datos");
    err.code = 500;
    return next(err);
  }
  res.status(201).json({
    disco: nuevoDisco,
  });
});

router.put("/estilo/:nombre", async (req, res, next) => {
  const camposPorCambiar = req.body.estilo;
  const nombreDisco = req.params.nombre;
  let discoBuscar;
  try {
    discoBuscar = await Disco.findOneAndUpdate(
      { nombre: nombreDisco },
      { estilo: camposPorCambiar },
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(404).json({
      mensaje: "No se han podido actualizar los datos del disco",
      error: error.message,
    });
    return next(error);
  }
  res.status(200).json({
    mensaje: "Datos de disco modificados",
    disco: discoBuscar,
  });
});

router.put("/fecha/:nombre", async (req, res, next) => {
  const camposPorCambiar = req.body.fechaLanzamiento;
  const nombreDisco = req.params.nombre;
  let discoBuscar;
  try {
    discoBuscar = await Disco.findOneAndUpdate(
      { nombre: nombreDisco },
      { fechaLanzamiento: camposPorCambiar },
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(404).json({
      mensaje: "No se han podido actualizar los datos del disco",
      error: error.message,
    });
    return next(error);
  }
  res.status(200).json({
    mensaje: "Datos de disco modificados",
    disco: discoBuscar,
  });
});

router.delete("/:id", async (req, res, next) => {
  let disco;
  try {
    disco = await Disco.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se ha podido eliminar el disco con ese id",
      error: error.message,
    });
    return next(error);
  }
  res.status(204).json({
    mensaje: "Disco eliminado",
    disco: disco,
  });
});

module.exports = router;
