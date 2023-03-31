// index01.js
// endpoint /api/cursos
// endpoint /api/cursos/:id
const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
const rutasCursos = require("./routes/rutas-cursos");

app.use("/api", rutasCursos);

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
