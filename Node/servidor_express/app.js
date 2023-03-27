//Raíz : /api/
const usuarios = [
  {
    id: 1,
    nombre: "Juan",
    apellidos: "Perez Garcia",
    actividad: "Fútbol",
  },
  {
    id: 2,
    nombre: "Maria",
    apellidos: "Gonzalez Rodriguez",
    actividad: "Tenis",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellidos: "Lopez Fernandez",
    actividad: "Baloncesto",
  },
  {
    id: 4,
    nombre: "Ana",
    apellidos: "Martinez Gomez",
    actividad: "Natación",
  },
];

const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/", (req, res) => {
  res.send(
    "Este es el endpoint origen. Accede a /api/usuarios para ver todos los usuarios, /api/usuarios/:id para ver un usuario en concreto"
  );
});

app.get("/api/usuarios", (req, res) => {
  res.send(usuarios);
});

app.get("/api/usuarios/:id", (req, res) => {
  let idUsuario = parseInt(req.params.id);
  let usuario = usuarios.find((usuario) => {
    return idUsuario === usuario.id;
  });
  if (!usuario) {
    res.status(404).send("Id de usuario inválido.");
  } else {
    res.send(usuario);
  }
});

app.post("/api/usuarios/", (req, res) => {
  let usuario = {
    id: usuarios.length + 1,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    actividad: req.body.actividad,
  };
  usuarios.push(usuario);
  res.status(200).send(usuarios);
});

app.listen(3000, () => {
  console.log("Escuchando en puerto 3000...");
});
