const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());

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
    `mongodb+srv://alekbalek1:pass@clusterprueba.suxokql.mongodb.net/ToDo?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000, () => console.log("Escuchando en puerto 5000"));
  })
  .catch((error) => console.log(error));
