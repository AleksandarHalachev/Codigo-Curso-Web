const http = require("http");
const url = "localhost:3001";
const port = 3001;

server = http.createServer((request, response) => {
  pathName = request.url;
  if (pathName === "/") {
    response.end("Endpoint raíz");
  } else if (pathName === "/cursos") {
    response.end("Endpoint cursos");
  } else {
    response.writeHead(404);
    response.end("<h1>Not found</h1>");
  }
});

server.listen(port, (err) => {
  if (err) {
    return console.log("Algo malo está pasando", err);
  }
  console.log(`Servidor escuchando en puerto ${port}`);
});
