const express = require("express");
const router = express.Router();

router.get("/api/", (req, res) => {
  res.json({
    message:
      "Este es el endpoint origen. Accede a /api/usuarios para ver todos los usuarios, /api/usuarios/:id para ver un usuario en concreto",
  });
});

module.exports = router;
