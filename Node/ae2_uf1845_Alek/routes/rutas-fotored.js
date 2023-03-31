const express = require("express");
const router = express.Router();
const Joi = require("joi");

const fotored = [
  {
    id: 1,
    nombre: "John Doe",
    email: "johndoe@fotored.es",
    conectado: true,
    mensajes: ["Hola a todos!", "Buen día", "Feliz fin de semana"],
    seguidores: 1000,
    siguiendo: 500,
    puntuacion: 8,
  },
  {
    id: 2,
    nombre: "Jane Smith",
    email: "janesmith@fotored.es",
    conectado: false,
    mensajes: ["Nuevo proyecto en marcha!", "Próximamente..."],
    seguidores: 2000,
    siguiendo: 1000,
    puntuacion: 9,
  },
  {
    id: 3,
    nombre: "Bob Johnson",
    email: "bobjohnson@fotored.es",
    conectado: true,
    mensajes: [
      "Hola, amigos!",
      "Qué tal están?",
      "Compartiendo un poco de diversión",
    ],
    seguidores: 500,
    siguiendo: 200,
    puntuacion: 7,
  },
  {
    id: 4,
    nombre: "Sara Lee",
    email: "saralee@fotored.es",
    conectado: true,
    mensajes: ["Compartiendo una nueva receta!", "Buen provecho!"],
    seguidores: 1500,
    siguiendo: 750,
    puntuacion: 9,
  },
  {
    id: 5,
    nombre: "David Kim",
    email: "davidkim@fotored.es",
    conectado: false,
    mensajes: ["Trabajando duro", "Sin descanso", "Persiguiendo mis sueños"],
    seguidores: 800,
    siguiendo: 400,
    puntuacion: 6,
  },
];

router.get("/", (req, res, next) => {
  res.json({
    message:
      "Este es el endpoint origen de la api de usuarios. Accede a /api2/usuarios para ver todos los usuarios, /api2/usuarios/:nombre para ver un usuario en concreto. Los mismos enpoints se usan para añadir, modificar (solo el estado) o borrar.",
  });
  next();
});

router.get("/usuarios", (req, res, next) => {
  res.send(fotored);
  next();
});

router.get("/usuarios/:nombre", (req, res, next) => {
  let nombreUsuario = req.params.nombre;
  let elUsuario = fotored.find((usuario) => {
    return usuario.nombre === nombreUsuario;
  });
  if (!elUsuario) {
    res.status(404).json({
      message: "No se ha podido encontrar el usuario",
    });
  } else {
    res.send(elUsuario);
  }
  next();
});

router.post("/usuarios/", (req, res, next) => {
  const schema = Joi.object({
    nombre: Joi.string().min(6).max(25).required(),
    email: Joi.string()
      .regex(/^[A-Za-z0-9._%+-]+@fotored\.es$/)
      .required(),
    conectado: Joi.boolean().falsy("No").truthy("Sí").required(),
    mensajes: Joi.array().items(Joi.string()).required(),
    seguidores: Joi.number().integer().min(0).max(10000).required(),
    siguiendo: Joi.number().integer().min(0).max(5000).required(),
    puntuacion: Joi.number().integer().min(0).max(10).required(),
  });
  const validation = schema.validate(req.body);
  if (validation.error) {
    console.log(validation.error.details[0].message);
    res.status(400).send(validation.error.details[0].message);
    return;
  }
  const nuevoUsuario = {
    id: fotored.length + 1,
    nombre: req.body.nombre,
    email: req.body.email,
    conectado: req.body.conectado,
    mensajes: req.body.mensajes,
    seguidores: req.body.seguidores,
    siguiendo: req.body.siguiendo,
    puntuacion: req.body.puntuacion,
  };
  fotored.push(nuevoUsuario);
  res.status(200).send(fotored);
  next();
});

router.put("/usuarios/:nombre", (req, res, next) => {
  let nombreUsuario = req.params.nombre;
  const elUsuario = fotored.find((usuario) => {
    return usuario.nombre === nombreUsuario;
  });
  if (!elUsuario) {
    res.status(404).send("Nombre de usuario no encontrado ");
    return;
  } else {
    const schema = Joi.object({
      conectado: Joi.boolean().falsy("No").truthy("Sí"),
      mensaje: Joi.string(),
    });
    const validation = schema.validate(req.body);
    if (validation.error) {
      console.log(validation.error.details[0].message);
      res.status(400).send(validation.error.details[0].message);
      return;
    }
    elUsuario.conectado = req.body.conectado;
    elUsuario.mensajes.push(req.body.mensaje);
    res.status(200).send(elUsuario);
  }
  next();
});

router.delete("/usuarios/:nombre", (req, res, next) => {
  let nombreUsuario = req.params.nombre;
  const elUsuario = fotored.find((usuario) => {
    return usuario.nombre === nombreUsuario;
  });
  if (!elUsuario) {
    res.status(404).send("No hemos encontrado un usuario con ese nombre");
    return;
  }
  const posicion = fotored.indexOf(elUsuario);
  fotored.splice(posicion, 1);
  res.status(200).send("Usuario eliminado");
  next();
});

module.exports = router;
