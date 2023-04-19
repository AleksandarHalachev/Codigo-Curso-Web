// rutas-cursos.js
const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Curso = require("../models/modelo-curso");
const Docente = require("../models/modelo-docente");

// * Recuperar cursos desde la BDD en Atlas
router.get("/", async (req, res, next) => {
  let cursos;
  try {
    cursos = await Curso.find({}).populate("docente");
  } catch (err) {
    const error = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    mensaje: "Todos los cursos",
    cursos: cursos,
  });
});

// * Recuperar un curso por su Id
router.get("/:id", async (req, res, next) => {
  const idCurso = req.params.id;
  let curso;
  try {
    curso = await Curso.findById(idCurso).populate("docente");
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido recuperar los datos"
    );
    error.code = 500;
    return next(error);
  }
  if (!curso) {
    const error = new Error(
      "No se ha podido encontrar un curso con el id proporcionado"
    );
    error.code = 404;
    return next(error);
  }
  res.json({
    mensaje: "Curso encontrado",
    curso: curso,
  });
});

// * Buscar un curso en función del parámetro de búsqueda
router.get("/buscar/:busca", async (req, res, next) => {
  const search = req.params.busca;
  console.log(search);
  let cursos;
  try {
    cursos = await Curso.find({
      curso: { $regex: search, $options: "i" },
    }).populate("docente");
  } catch (err) {
    const error = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({ mensaje: "Todos los cursos", cursos: cursos });
});

router.post("/", async (req, res, next) => {
  const { curso, docente, opcion, aula, precio } = req.body;
  const nuevoCurso = new Curso({
    curso: curso,
    docente: docente,
    opcion: opcion,
    aula: aula,
    precio: precio,
  });

  let docenteBusca;
  try {
    docenteBusca = await Docente.findById(req.body.docente);
  } catch (error) {
    const err = new Error("Ha fallado la operación de creación");
    err.code = 500;
    return next(err);
  }
  console.log(docenteBusca);

  if (!docenteBusca) {
    const error = new Error(
      "No se ha podido encontrar un docente con el id proporcionado"
    );
    error.code = 404;
    return next(error);
  }
  console.log(docenteBusca);
  try {
    await nuevoCurso.save();
    docenteBusca.cursos.push(nuevoCurso);
    await docenteBusca.save();
  } catch (error) {
    const err = new Error("Ha fallado la creación del nuevo curso");
    err.code = 500;
    return next(err);
  }
  res.status(201).json({
    mensaje: "Curso añadido a la BDD",
    curso: nuevoCurso,
  });
});

router.patch("/:id", async (req, res, next) => {
  const idCurso = req.params.id;
  let cursoBuscar;
  try {
    cursoBuscar = await Curso.findById(idCurso).populate("docente");
  } catch (error) {
    const err = new Error(
      "Ha habido algún problema. No se ha podido actualizar la información del curso"
    );
    err.code = 500;
    throw err;
  }

  try {
    cursoBuscar = await Curso.findById(idCurso).populate("docente");

    if (req.body.docente) {
      cursoBuscar.docente.cursos.pull(cursoBuscar);
      await cursoBuscar.docente.save();
      docenteBuscar = await Docente.findById(req.body.docente);
      docenteBuscar.cursos.push(cursoBuscar);
      docenteBuscar.save();
    }

    cursoBuscar = await Curso.findByIdAndUpdate(idCurso, req.body, {
      new: true,
      runValidators: true,
    }).populate("docente");
  } catch (err) {
    console.log(err.message);
    const error = new Error(
      "Ha habido algún error. No se han podido modificar los datos"
    );
    error.code = 500;
    return next(error);
  }
  res.json({
    message: "Curso modificado",
    curso: cursoBuscar,
  });
});

router.delete("/:id", async (req, res, next) => {
  const idCurso = req.params.id;
  let curso;
  try {
    curso = await Curso.findById(idCurso).populate("docente");
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido recuperar los datos para eliminación"
    );
    error.code = 500;
    return next(error);
  }
  if (!curso) {
    const error = new Error(
      "No se ha podido encontrar un curso con el id proporcionado"
    );
    error.code = 404;
    return next(error);
  }

  try {
    await curso.deleteOne();
    curso.docente.cursos.pull(curso);
    await curso.docente.save();
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido eliminar los datos"
    );
    error.code = 500;
    return next(error);
  }
  res.json({
    message: "Curso eliminado",
  });
});

module.exports = router;
