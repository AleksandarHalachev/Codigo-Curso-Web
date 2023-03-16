// Un cliente nos ha pedido la creación de una webapp para su estudio fotográfico. Las características de cada fotografía que toma en su estudio son las siguientes.

// - Nombre Foto: String

// - Cámara: String

// - Características: [{ISO: 100, objetivo: ‘50mm’, obturación: ‘1/125’, apertura: ‘1.4’}, {...}, {...}]

// - Fecha captura: String

// - Lugar: String



const coleccionFotos = [{
  nombre: 'Hot Roque Nublo',
  camara: 'Canon',
  caracteristicas: ['ISO 200', '50mm', '1/125', '1.4'],
  fecha: '20/01/2019',
  lugar: 'Gran Canaria'
},
{
  nombre: 'Snowy Teide',
  camara: 'Sony',
  caracteristicas: ['ISO 400', '11mm', '1/50', '8'],
  fecha: '21/01/2019',
  lugar: 'Tenerife'
},
{
  nombre: 'Beautiful Fataga',
  camara: 'Nikon',
  caracteristicas: ['ISO 1000', '22mm', '1/250', '1.2'],
  fecha: '20/01/2019',
  lugar: 'Gran Canaria'
},
{
  nombre: 'Sunny El Cotillo',
  camara: 'Olympus',
  caracteristicas: ['ISO 2000', '35mm', '1/2000', '3.5'],
  fecha: '22/01/2019',
  lugar: 'Fuerteventura'
},
{
  nombre: 'Marvellous Valle Gran Rey',
  camara: 'Canon',
  caracteristicas: ['ISO 100', '22mm', '1/125', '2.8'],
  fecha: '23/01/2019',
  lugar: 'La Gomera'
},
]

// 1- Crear un script que muestre todas las fotografías con ISO de 100

console.log("Las fotos con ISO de 100: ");
for(objeto of coleccionFotos){
  if(objeto.caracteristicas.includes("ISO 100")){
    console.log(objeto);
  }
}

// 2- Crear un script que añada nuevas fotos a la base de datos. Los datos de cada nueva foto se pedirán por consola.

nom = prompt("Escriba  el nombre de una foto nueva:");
cam = prompt("Escriba  el nombre de la cámara:");
iso = prompt("Escriba  el ISO de la foto:");
objetivo = prompt("Escriba el objetivo de la cámara:");
obturacion = prompt("Escriba la obturación de la cámara:");
apertura = prompt("Escriba la apertura de la cámara:");
fecha = prompt("Escriba  la fecha:");
lugar = prompt("Escriba  el lugar:");

coleccionFotos.push({nombre:nom, camara:cam, caracteristicas:[iso, objetivo, obturacion, apertura], fecha: fecha, lugar:lugar });

console.table(coleccionFotos);

// 3- En base al nombre de la foto, el script podrá eliminar cualquier foto de la BDD (Base de Datos)

fotoEliminar = prompt("Escriba el nombre de una foto para eliminarla de la base de datos: ");

for(objeto of coleccionFotos){
  if(objeto.nombre === fotoEliminar){
    coleccionFotos.splice(coleccionFotos.indexOf(objeto), 1);
    console.log("La foto se ha eliminado correctamente.");
    break;
  }
  if(coleccionFotos.indexOf(objeto) === (coleccionFotos.length -1)){
    console.log("No se ha encontrado la foto");
  }
}
console.table(coleccionFotos);

// 4- Modificar la fecha de ‘Sunny el Cotillo’ (localizándolo), cambiándola por la fecha actual.

for(objeto of coleccionFotos){
  if(objeto.nombre === "Sunny El Cotillo"){
    objeto.fecha = "17/02/2023";
    console.log("La fecha de " + objeto.nombre + " ha sido cambiada.");
    break;
  }
  if(coleccionFotos.indexOf(objeto) === (coleccionFotos.length -1)){
    console.log("No se ha encontrado la foto ");
  }
}
console.table(coleccionFotos);