aviones = [
  {
    id: "A-0121",
    modelo: "A-350",
    version: "900",
    clientes: ["Iberia", "Qatar Airways", "Delta Airlines"],
    fase: "prueba de vuelo",
    matricula: "F-WFAB",
    precio: 300000000,
  },
  {
    id: "A-0122",
    modelo: "A-350",
    version: "1000",
    clientes: ["Iberia", "United", "American"],
    fase: "entrega",
    matricula: "F-WXCD",
    precio: 370000000,
  },
  {
    id: "A-0123",
    modelo: "A-321",
    version: "neo",
    clientes: ["Iberia", "Air France", "British Airways", "Lufthansa"],
    fase: "entrega",
    matricula: "F-WXAC",
    precio: 280000000,
  },
  {
    id: "A-0124",
    modelo: "A321",
    version: "ceo",
    clientes: ["Iberia", "Lufthansa"],
    fase: "prueba de vuelo",
    matricula: "F-WCCB",
    precio: 250000000,
  },
  {
    id: "A-0125",
    modelo: "A220",
    version: "100",
    clientes: ["Air France", "American"],
    fase: "montaje",
    matricula: "F-WFAW",
    precio: 190000000,
  },
  {
    id: "A-0126",
    modelo: "A330",
    version: "300",
    clientes: ["Iberia", "American", "Delta", "Etihad"],
    fase: "montaje",
    matricula: "F-EWED",
    precio: 317000000,
  },
];

//Ejercicio 1

avionesQatar = aviones.filter(element => {
  return element.clientes.includes("Qatar Airways");
});

console.log("Los aviones de Qatar Airways son:")
console.table(avionesQatar);

//Ejercicio 2

console.log("¿Existe algún A330 en la línea de montaje?");

existeA330 = aviones.some(element => {
  return element.modelo === "A330" && element.fase === "montaje";
});

console.log(existeA330);

avionesA330 = aviones.filter(element => {
  return element.modelo === "A330";
});

console.table(avionesA330);

//Ejercicio 3

aviones.forEach(element => {
  if(aviones.indexOf(element) === (aviones.length -1)){
    aviones.push({id: "A-0122", modelo: "A330", version: "900", clientes: ["Lufthansa"], fase: "montaje", matricula: "DE-AF3D", precio: 300000000})
  }
});

console.log("Nuevo avión añadido a lista:");
console.table(aviones);

//Ejercicio 4

todosFranceses = aviones.every(element => {
  return element.matricula.startsWith("F-");
})

console.log("¿Todos los aviones tienen matrícula francesa?");
console.log(todosFranceses);

//Ejercicio 5

encontrarPorId = aviones.find(element => {
  return element.id === "A-0125";
})

console.log("El avión con id A-0125 es:");
console.table(encontrarPorId);

//Ejercicio 6

encontrarIberia = aviones.filter(element => {
  return element.clientes.includes("Iberia");
})

let valorTotal = 0;

calcularValor = encontrarIberia.forEach(element => {
  valorTotal += element.precio;
  if(encontrarIberia.indexOf(element) === (encontrarIberia.length -1)){
    console.log(`El valor total de los aviones de Iberia es: ${valorTotal}`);
  }
})

