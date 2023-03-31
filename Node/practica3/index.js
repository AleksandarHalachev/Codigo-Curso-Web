// index01.js
// endpoint /api/cursos
// endpoint /api/cursos/:id
// endpoint /api2/docentes
// endpoint /api2/docentes/:id

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
const rutasCursos = require("./routes/rutas-cursos");
const rutasDocentes = require("./routes/rutas-docentes");

app.use("/api", rutasCursos);
app.use("/api2", rutasDocentes);

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});
