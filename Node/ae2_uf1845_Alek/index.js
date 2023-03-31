// endpoints:
// /api/usuarios
// /api/usuarios/:nombre

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
const rutasUsuarios = require("./routes/rutas-fotored");

app.use("/api", rutasUsuarios);

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
