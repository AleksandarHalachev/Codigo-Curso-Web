const express = require("express");
const Curso = require("../models/models-cursos");
const router = express.Router();

// * Recuperar cursos desde la BDD en Atlas
router.get("/", async (req, res, next) => {
  let cursos;
  try {
    cursos = await Curso.find({});
  } catch (err) {
    const error = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    cursos: cursos,
  });
});

// * Recuperar un curso en base a su id desde la BDD en Atlas
router.get("/:id", async (req, res, next) => {
  const idCurso = req.params.id;
  let curso;
  try {
    curso = await Curso.findById(idCurso);
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido recuperar los datos"
    );
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    curso: curso,
  });
});

// * Como crear un nuevo curso y guardarlo en la BDD
router.post("/", async (req, res, next) => {
  const { curso, docente, precio } = req.body; // destructuring
  // Nuevo documento basado en el Modelo del Curso
  const nuevoCurso = new Curso({
    curso,
    docente,
    precio,
  });
  try {
    await nuevoCurso.save(); // Guardar en MongoDB Atlas
  } catch (error) {
    const err = new Error("No se han podido guardar los datos");
    err.code = 500;
    return next(err);
  }
  res.status(201).json({
    curso: nuevoCurso,
  });
});

router.put("/:id", async (req, res, next) => {
  const camposPorCambiar = req.body;
  const idCurso = req.params.id;
  let cursoBuscar;
  try {
    cursoBuscar = await Curso.findByIdAndUpdate(idCurso, camposPorCambiar, {
      new: true,
      runValidators: true,
    });
  } catch (error) {
    res.status(404).json({
      mensaje: "No se han podido actualizar los datos del curso",
      error: error.message,
    });
    return next(error);
  }
  res.status(200).json({
    mensaje: "Datos de curso modificados",
    curso: cursoBuscar,
  });
});

router.delete("/:id", async (req, res, next) => {
  let curso;
  try {
    curso = await Curso.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se ha podido eliminar el curso con ese id",
      error: error.message,
    });
    return next(error);
  }
  res.status(204).json({
    mensaje: "Curso eliminado",
    curso: curso,
  });
});

module.exports = router;
