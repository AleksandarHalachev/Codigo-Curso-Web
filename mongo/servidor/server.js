const express = require("express");
const app = express();
const mongoose = require("mongoose");
port = 5000;

app.use(express.json());

// Gestión de las rutas
const rutasCursos = require("./routes/rutas-cursos");
app.use("/api/cursos", rutasCursos);

app.use((req, res) => {
  // Middleware que se ejecuta cuando el servidor no tiene la ruta que se ha enviado desde el cliente
  res.status(404);
  res.json({
    mensaje: "Información no encontrada",
  });
});

mongoose
  .connect(
    "mongodb+srv://frandavila:cife1234@clusterio.3fznd.mongodb.net/academia?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => console.log(`Escuchando en puerto ${port}`));
  })
  .catch((error) => console.log(error));
