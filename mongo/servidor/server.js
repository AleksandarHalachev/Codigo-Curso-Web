const express = require("express");
const app = express();
const mongoose = require("mongoose");
port = 5000;

app.use(express.json());

const rutasCursos = require("./routes/rutas-cursos");
app.use("/api/cursos", rutasCursos);

const rutasUsuarios = require("./routes/rutas-usuarios");
app.use("/api/usuarios", rutasUsuarios);

app.use((req, res) => {
  res.status(404);
  res.json({
    mensaje: "Información no encontrada",
  });
});

mongoose
  .connect(
    `mongodb+srv://alekbalek1:Bubarak1@clusterprueba.suxokql.mongodb.net/academia?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => console.log(`Escuchando en puerto ${port}`));
  })
  .catch((error) => console.log(error));
