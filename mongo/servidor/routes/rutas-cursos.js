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

module.exports = router;
