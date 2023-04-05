const express = require("express");
const router = express.Router();
const Joi = require("joi");

const discografia4EverWithYou = [
  {
    id: 1,
    nombreProyecto: "Thriller",
    grupoSolista: "Michael Jackson",
    estiloMusical: "Pop",
    fechaLanzamiento: "11/30/1982",
    ventasPrevistas: 110000000,
  },
  {
    id: 2,
    nombreProyecto: "Nevermind",
    grupoSolista: "Nirvana",
    estiloMusical: "Grunge",
    fechaLanzamiento: "09/24/1991",
    ventasPrevistas: 30000000,
  },
  {
    id: 3,
    nombreProyecto: "The Dark Side of the Moon",
    grupoSolista: "Pink Floyd",
    estiloMusical: "Rock progresivo",
    fechaLanzamiento: "03/01/1973",
    ventasPrevistas: 50000000,
  },
  {
    id: 4,
    nombreProyecto: "21",
    grupoSolista: "Adele",
    estiloMusical: "Pop soul",
    fechaLanzamiento: "01/24/2011",
    ventasPrevistas: 30000000,
  },
  {
    id: 5,
    nombreProyecto: "Back in Black",
    grupoSolista: "AC/DC",
    estiloMusical: "Hard rock",
    fechaLanzamiento: "07/25/1980",
    ventasPrevistas: 50000000,
  },
];

router.get("/", (req, res, next) => {
  res.json({
    message:
      "Este es el endpoint origen de la api de proyectos. Accede a /api2/proyectos para ver todos los proyectos, /api2/proyectos/:nombre para ver un proyecto en concreto. Los mismos enpoints se usan para añadir, modificar (solo el estado) o borrar.",
  });
  next();
});

router.get("/proyectos", (req, res, next) => {
  res.send(discografia4EverWithYou);
  next();
});

router.get("/proyectos/:id", (req, res, next) => {
  let idProyecto = parseInt(req.params.id);
  let elProyecto = discografia4EverWithYou.find((proyecto) => {
    return proyecto.id === idProyecto;
  });
  if (!elProyecto) {
    res.status(404).json({
      message: "No se ha podido encontrar el proyecto",
    });
  } else {
    res.send(elProyecto);
  }
  next();
});

router.post("/proyectos/", (req, res, next) => {
  const schema = Joi.object({
    nombreProyecto: Joi.string().min(6).max(25).required(),
    grupoSolista: Joi.string().max(20).required(),
    estiloMusical: Joi.string().required(),
    fechaLanzamiento: Joi.date().required(),
    ventasPrevistas: Joi.number().integer().min(1000).required(),
  });
  const validation = schema.validate(req.body);
  if (validation.error) {
    console.log(validation.error.details[0].message);
    res.status(400).send(validation.error.details[0].message);
    return;
  }
  const nuevoProyecto = {
    id: discografia4EverWithYou.length + 1,
    nombreProyecto: req.body.nombreProyecto,
    grupoSolista: req.body.grupoSolista,
    estiloMusical: req.body.estiloMusical,
    fechaLanzamiento: req.body.fechaLanzamiento,
    ventasPrevistas: req.body.ventasPrevistas,
  };
  discografia4EverWithYou.push(nuevoProyecto);
  res.status(200).send(discografia4EverWithYou);
  next();
});

router.put("/proyectos/:nombreProyecto", (req, res, next) => {
  let nombreProyecto = req.params.nombreProyecto;
  const elProyecto = discografia4EverWithYou.find((proyecto) => {
    return proyecto.nombreProyecto === nombreProyecto;
  });
  if (!elProyecto) {
    res.status(404).send("Nombre de proyecto no encontrado ");
    return;
  } else {
    const schema = Joi.object({
      fechaLanzamiento: Joi.date().required(),
      ventasPrevistas: Joi.number().integer().min(0).required(),
    });
    const validation = schema.validate(req.body);
    if (validation.error) {
      console.log(validation.error.details[0].message);
      res.status(400).send(validation.error.details[0].message);
      return;
    }
    elProyecto.fechaLanzamiento = req.body.fechaLanzamiento;
    elProyecto.ventasPrevistas = req.body.ventasPrevistas;
    res.status(200).send(elProyecto);
  }
  next();
});

router.delete("/proyectos/:id", (req, res, next) => {
  let idProyecto = parseInt(req.params.id);
  const elProyecto = discografia4EverWithYou.find((proyecto) => {
    return proyecto.id === idProyecto;
  });
  if (!elProyecto) {
    res.status(404).send("No hemos encontrado un proyecto con ese id");
    return;
  }
  const posicion = discografia4EverWithYou.indexOf(elProyecto);
  discografia4EverWithYou.splice(posicion, 1);
  res.status(200).send("Proyecto eliminado");
  next();
});

module.exports = router;
