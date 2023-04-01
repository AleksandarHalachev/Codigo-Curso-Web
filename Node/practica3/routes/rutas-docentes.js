const express = require("express");
const router = express.Router();
const Joi = require("joi");

const docentes = [
  {
    id: 1,
    nombre: "Juan",
    apellidos: "Pérez García",
    email: "juan@example.com",
    password: "contraseña1",
  },
  {
    id: 2,
    nombre: "María",
    apellidos: "López Martínez",
    email: "maria@example.com",
    password: "contraseña2",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellidos: "González Sánchez",
    email: "pedro@example.com",
    password: "contraseña3",
  },
];

router.get("/", (req, res, next) => {
  res.json({
    message:
      "Este es el endpoint origen de la api de docentes. Accede a /api2/docentes para ver todos los docentes, /api2/docentes/:id para ver un docente en concreto",
  });
  next();
});

router.get("/docentes", (req, res, next) => {
  res.json({ docentes: docentes });
  next();
});

router.get("/docentes/:id", (req, res, next) => {
  let idDocente = parseInt(req.params.id);
  let elDocente = docentes.find((docente) => {
    return docente.id === idDocente;
  });
  if (!elDocente) {
    res.status(404).json({
      message: "No se ha podido encontrar el docente",
    });
  } else {
    res.json({
      docente: elDocente,
    });
  }
  next();
});

router.post("/docentes/", (req, res, next) => {
  const schema = Joi.object({
    nombre: Joi.string().min(6).max(12).required(),
    apellidos: Joi.string().min(10).required(),
    email: Joi.string().email({ tlds: { allow: ["es"] } }),
    password: Joi.string().min(6).max(12).alphanum(),
  });
  const validation = schema.validate(req.body);
  if (validation.error) {
    console.log(validation.error.details[0].message);
    res.status(400).send(validation.error.details[0].message);
    return;
  }
  const nuevoDocente = {
    id: docentes.length + 1,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    password: req.body.password,
  };
  docentes.push(nuevoDocente);
  res.status(200).send(docentes);
  next();
});

router.put("/docentes/:id", (req, res, next) => {
  let idDocente = parseInt(req.params.id);
  const elDocente = docentes.find((docente) => {
    return docente.id === idDocente;
  });
  if (!elDocente) {
    res.status(404).send("Id de docente no encontrado ");
    return;
  } else {
    const schema = Joi.object({
      nombre: Joi.string().min(6).max(12).required(),
      apellidos: Joi.string().min(10).required(),
      email: Joi.string().email({ tlds: { allow: ["es"] } }),
      password: Joi.string().min(6).max(12).alphanum(),
    });
    const validation = schema.validate(req.body);
    if (validation.error) {
      console.log(validation.error.details[0].message);
      res.status(400).send(validation.error.details[0].message);
      return;
    }
    elDocente.nombre = req.body.nombre;
    elDocente.apellidos = req.body.apellidos;
    elDocente.email = req.body.email;
    elDocente.password = req.body.password;

    res.status(200).send(elDocente);
  }
  next();
});

router.delete("/docentes/:id", (req, res, next) => {
  let idDocente = parseInt(req.params.id);
  const elDocente = docentes.find((docente) => {
    return docente.id === idDocente;
  });
  if (!elDocente) {
    res.status(404).send("No hemos encontrado un docente con ese id");
    return;
  }
  const posicion = docentes.indexOf(elDocente);
  docentes.splice(posicion, 1);
  res.status(200).send("Docente eliminado");
  next();
});

module.exports = router;
