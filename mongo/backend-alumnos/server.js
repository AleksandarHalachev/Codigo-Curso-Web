// index.js
const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

const rutasCursos = require("./routes/rutas-cursos");
app.use("/api/cursos", rutasCursos);

const rutasDocentes = require("./routes/rutas-docentes");
app.use("/api/docentes", rutasDocentes);

app.use((req, res) => {
  // Middleware que se ejecuta cuando el servidor no tiene la ruta que se ha enviado desde el cliente
  res.status(404);
  res.json({
    mensaje: "Información no encontrada",
  });
});

mongoose
  .connect(
    "mongodb+srv://alekbalek1:pass@clusterprueba.suxokql.mongodb.net/colegio?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("💯 Conectado con éxito a Atlas");
    app.listen(5000, () => console.log(`🧏‍♀️ Escuchando en puerto 5000`));
  })
  .catch((error) => console.log(error));
