let url = "http://logger.com";

const basico = (mensaje) => {
  console.log(mensaje);
};

// basico("Mensaje enviado a función.");

module.exports.basico = basico;
module.exports.url = url;
