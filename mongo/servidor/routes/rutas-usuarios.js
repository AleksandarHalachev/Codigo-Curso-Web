const express = require("express");
const Usuario = require("../models/models-usuarios");
const router = express.Router();

router.get("/", async (req, res, next) => {
  let usuarios;
  try {
    usuarios = await Usuario.find({});
  } catch (err) {
    const error = new Error("Ha ocurrido un error en la recuperación de datos");
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    usuarios: usuarios,
  });
});

router.get("/:id", async (req, res, next) => {
  const idUsuario = req.params.id;
  let usuario;
  try {
    usuario = await Usuario.findById(idUsuario);
  } catch (err) {
    const error = new Error(
      "Ha habido algún error. No se han podido recuperar los datos"
    );
    error.code = 500;
    return next(error);
  }
  res.status(200).json({
    usuario: usuario,
  });
});

router.post("/", async (req, res, next) => {
  const { nombre, email, contraseña } = req.body;
  const nuevoUsuario = new Usuario({
    nombre,
    email,
    contraseña,
  });
  try {
    await nuevoUsuario.save();
  } catch (error) {
    const err = new Error("No se han podido guardar los datos");
    err.code = 500;
    return next(err);
  }
  res.status(201).json({
    usuario: nuevoUsuario,
  });
});

router.put("/:id", async (req, res, next) => {
  const camposPorCambiar = req.body;
  const idUsuario = req.params.id;
  let usuarioBuscar;
  try {
    usuarioBuscar = await Usuario.findByIdAndUpdate(
      idUsuario,
      camposPorCambiar,
      {
        new: true,
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(404).json({
      mensaje: "No se han podido actualizar los datos del usuario",
      error: error.message,
    });
    return next(error);
  }
  res.status(200).json({
    mensaje: "Datos de usuario modificados",
    usuario: usuarioBuscar,
  });
});

router.delete("/:id", async (req, res, next) => {
  let usuario;
  try {
    usuario = await Usuario.findByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(404).json({
      mensaje: "No se ha podido eliminar el usuario con ese id",
      error: error.message,
    });
    return next(error);
  }
  res.status(204).json({
    mensaje: "Usuario eliminado",
    usuario: usuario,
  });
});

module.exports = router;
