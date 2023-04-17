const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Usuario = require("../models/usuarios-model");

router.get("/", async (req, res, next) => {
  let usuarios;
  try {
    usuarios = await Usuario.find({}, "-password");
  } catch (err) {
    const error = new Error(
      "Error. No se han podido recuperar los datos de los usuarios."
    );
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    mensaje: "Todos los usuarios:",
    usuarios: usuarios,
  });
});

router.get("/:id", async (req, res, next) => {
  let usuario;
  const idUsuario = req.params.id;
  try {
    usuario = await Usuario.findById(idUsuario);
  } catch (err) {
    const error = new Error("Error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  if (!usuario) {
    const error = new Error("No se ha encontrado el usuario");
    error.code = 404;
    return next(error);
  }
  res.status(200).json({
    mensaje: "Usuario:",
    usuario: usuario,
  });
});

router.post("/", async (req, res, next) => {
  const { nombre, email, password } = req.body;
  let existeUsuario;
  try {
    existeUsuario = await Usuario.findOne({ email: email });
  } catch (err) {
    const error = new Error("Email ya existe");
    error.code = 500;
    return next(error);
  }

  if (existeUsuario) {
    const error = new Error("Ya existe un usuario con ese email");
    error.code = 401;
    return next(error);
  } else {
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 12);
    } catch (error) {
      const err = new Error("Error en la encripción de la contraseña");
      err.code = 500;
      return next(err);
    }
    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password: hashedPassword,
    });
    try {
      await nuevoUsuario.save();
    } catch (error) {
      const err = new Error("Error al guardar el usuario");
      err.code = 500;
      return next(err);
    }
    res.status(201).json({
      mensaje: "Usuario creado",
      usuario: nuevoUsuario,
    });
  }
});

module.exports = router;
