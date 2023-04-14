const express = require("express");
const router = express.Router();
const Specie = require("../models/modelo-especies");
const Localizacion = require("../models/modelo-localizaciones");

router.get("/", async (req, res, next) => {
  let especies;
  try {
    especies = await Specie.find({}).populate("localizacion");
  } catch (error) {
    const err = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(err);
  }
  res.status(200).json({
    mensaje: "Todas las especies",
    mostrarEspecies: especies,
  });
});

router.get("/:id", async (req, res, next) => {
  const idEspecie = req.params.id;
  let especie;
  try {
    especie = await Specie.findById(idEspecie).populate("localizacion");
  } catch (error) {
    const err = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(err);
  }
  res.status(200).json({
    mensaje: "Especie recibida",
    mostrarEspecie: especie,
  });
});

// * Crear nueva especie
router.post("/", async (req, res, next) => {
  const { nombre, familia, rama, localizacion, observaciones } = req.body;
  let compruebaEspecie;
  let buscarLocalizacion;

  try {
    buscarLocalizacion = await Localizacion.findById(localizacion);
    compruebaEspecie = await Specie.findOne({
      nombre: nombre,
      familia: familia,
      rama: rama,
    });
  } catch (err) {
    const error = new Error(err);
    error.code = 500;
    return next(error);
  }

  if (compruebaEspecie) {
    const error = new Error("Ya existe esa especie en la base de datos.");
    error.code = 404;
    return next(error);
  }

  const nuevaEspecie = new Specie({
    nombre,
    familia,
    rama,
    localizacion,
    observaciones,
  });

  try {
    await nuevaEspecie.save(); // Guardar la especie nueva
    buscarLocalizacion.especies.push(nuevaEspecie); //Añadimos la nueva especie a localizacion
    await buscarLocalizacion.save(); // Guardar localizaciones con la especie añadida
  } catch (error) {
    console.log(error);
    const err = new Error(
      "No ha podido añadirse, fallo al conectar al servidor"
    );
    err.code = 500;
    return next(err);
  }
  res.status(201).json({
    mensaje: "Especie añadida con exito.",
    mostrarEspecie: nuevaEspecie,
  });
});

// * Modificar una especie
router.patch("/:id", async (req, res, next) => {
  const { nombre, familia, rama, localizacion, observaciones } = req.body;
  const idEspecie = req.params.id;
  let buscarEspecie;
  try {
    buscarEspecie = await Specie.findByIdAndUpdate(idEspecie, req.body, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    // console.log(error.message);
    // return next(error);
    const err = new Error(
      "Ha ocurrido un error. No se han podido modificar los datos"
    );
    error.code = 500;
    return next(err);
  }
  console.log(buscarEspecie);
  console.log(localizacion);

  // try {
  //   // await nuevoCurso.save(); // ? (1)
  //   buscarEspecie.localizacion = localizacion; // ? (2)
  //   buscarEspecie.save(); // ? (3)
  // } catch (error) {
  //   console.log(error);
  //   const err = new Error("Ha fallado la modificación de la localización");
  //   err.code = 500;
  //   return next(err);
  // }
  res.status(200).json({
    mensaje: "Especie modificada",
    especie: buscarEspecie,
  });
});

// * Eliminar un especie por su id
router.delete("/:id", async (req, res, next) => {
  idEliminar = req.params.id;
  let eliminarEspecie;
  try {
    eliminarEspecie = await Specie.findById(idEliminar).populate(
      "localizacion"
    );
  } catch (error) {
    const err = new Error(
      "Ha ocurrido un error. No se ha podido realizar la operación"
    );
    error.code = 500;
    return next(err);
  }
  // Si no se encuenta el especie
  if (!eliminarEspecie) {
    const error = new Error("No se ha podido encontrar una especie con ese id");
    error.code = 404;
    return next(error);
  }
  // Si existe el especie
  try {
    // IMPORTANTE, Eliminar la especie de la colección
    await eliminarEspecie.deleteOne();
    // IMPORTANTE, Eliminar del array de especies de la colección localizacion  la especie que se ha eliminado
    eliminarEspecie.localizacion.species.pull(eliminarEspecie);
    // IMPORTANTE, Actualizar colección localizacion con la especie eliminando la localizacion.
    await eliminarEspecie.localizacion.save();
  } catch (error) {
    const err = new Error(
      "Ha ocurrido un error. No se ha podido eliminar el especie"
    );
    console.log(error.message);
    error.code = 500;
    return next(err);
  }
  res.json({
    mensaje: "Especie eliminada",
    verEspecieEliminada: eliminarEspecie,
  });
});

module.exports = router;
