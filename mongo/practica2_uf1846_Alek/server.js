// index.js
const mongoose = require("mongoose");
const express = require("express");

const app = express();

app.use(express.json());

const rutasLocations = require("./routes/rutas-locations");
app.use("/api/timba/locations", rutasLocations);

const rutasEspecies = require("./routes/rutas-especies");
app.use("/api/timba/especies", rutasEspecies);

app.use((req, res) => {
  res.status(404);
  res.json({
    mensaje: "Información no encontrada",
  });
});

mongoose
  .connect(
    "mongodb+srv://alekbalek1:pass@clusterprueba.suxokql.mongodb.net/timba?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("💯 Conectado con éxito a Atlas");
    app.listen(5000, () => console.log(`🧏‍♀️ Escuchando en puerto 5000`));
  })
  .catch((error) => console.log(error));
