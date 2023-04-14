const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());

const rutasLocalizaciones = require("./routes/rutas-localizaciones");
app.use("/api/localizaciones", rutasLocalizaciones);

const rutasEspecies = require("./routes/rutas-especies");
app.use("/api/especies", rutasEspecies);

app.use((req, res) => {
  res.status(404).json({
    mensaje: "Localizacion no encontrado",
  });
});

mongoose
  .connect(
    "mongodb+srv://alekbalek1:pass@clusterprueba.suxokql.mongodb.net/timba?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => console.log("Servidor corriendo en puerto 5000"));
  })
  .catch((error) => console.log(error.message));
