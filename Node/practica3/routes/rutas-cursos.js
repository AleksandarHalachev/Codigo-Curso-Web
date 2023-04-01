const express = require("express");
const router = express.Router();
const Joi = require("joi");

const cursos = [
  {
    id: 1,
    curso: "Conceptos básicos GraphQL",
    docente: "Fran 'the Master' Dávila",
    precio: 5000,
  },
  {
    id: 2,
    curso: "Conceptos básicos de Docker",
    docente: "Fran 'the Master' Dávila",
    precio: 5000,
  },
  {
    id: 3,
    curso: "Master en Node.js",
    docente: "Fran 'the Master' Dávila",
    precio: 8000,
  },
];

router.get("/", (req, res, next) => {
  res.json({
    message:
      "Este es el endpoint origen de la api de cursos. Accede a /api/cursos para ver todos los cursos, /api/cursos/:id para ver un curso en concreto",
  });
  next();
});

router.get("/cursos", (req, res, next) => {
  res.json({ cursos: cursos });
  next();
});

router.get("/cursos/:id", (req, res, next) => {
  let idCurso = parseInt(req.params.id);
  let elCurso = cursos.find((curso) => {
    return curso.id === idCurso;
  });
  if (!elCurso) {
    res.status(404).json({
      message: "No se ha podido encontrar el curso",
    });
  } else {
    res.json({
      curso: elCurso,
    });
  }
  next();
});

router.post("/cursos/", (req, res, next) => {
  const schema = Joi.object({
    curso: Joi.string().required(),
    docente: Joi.string().min(6).required(),
    precio: Joi.number().min(0).max(10000).integer().required(),
  });
  const validation = schema.validate(req.body);
  if (validation.error) {
    console.log(validation.error.details[0].message);
    res.status(400).send(validation.error.details[0].message);
    return;
  }
  const nuevoCurso = {
    id: cursos.length + 1,
    curso: req.body.curso,
    docente: req.body.docente,
    precio: req.body.precio,
  };
  cursos.push(nuevoCurso);
  res.status(200).send(cursos);
  next();
});

router.put("/cursos/:id", (req, res, next) => {
  let idCurso = parseInt(req.params.id);
  const elCurso = cursos.find((curso) => {
    return curso.id === idCurso;
  });
  if (!elCurso) {
    res.status(404).send("Id de curso no encontrado ");
    return;
  } else {
    const schema = Joi.object({
      curso: Joi.string().required(),
      docente: Joi.string().min(6).required(),
      precio: Joi.number().min(0).max(10000).integer().required(),
    });
    const validation = schema.validate(req.body);
    if (validation.error) {
      console.log(validation.error.details[0].message);
      res.status(400).send(validation.error.details[0].message);
      return;
    }
    elCurso.curso = req.body.curso;
    elCurso.docente = req.body.docente;
    elCurso.precio = req.body.precio;
    res.status(200).send(elCurso);
  }
  next();
});

router.delete("/cursos/:id", (req, res, next) => {
  let idCurso = parseInt(req.params.id);
  const elCurso = cursos.find((curso) => {
    return curso.id === idCurso;
  });
  if (!elCurso) {
    res.status(404).send("No hemos encontrado un curso con ese id");
    return;
  }
  const posicion = cursos.indexOf(elCurso);
  cursos.splice(posicion, 1);
  res.status(200).send("Curso eliminado");
  next();
});

module.exports = router;
