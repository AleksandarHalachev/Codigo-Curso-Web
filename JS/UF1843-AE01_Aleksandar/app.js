clientes = [{
  nombre: "Vaelin Al Sorna",
  password: "34rft%&",
  estaDentro: false,
  carrito: [560, 600, 122, 1400],
  credito: 3000,
},
{
  nombre: "Locke Lamora",
  password: "lockito89",
  estaDentro: true,
  carrito: [100, 1200, 345, 612, 72],
  credito: 2000,
},
{
  nombre: "Addie LaRue",
  password: "adla?¿*",
  estaDentro: true,
  carrito: [1000, 1500, 2000],
  credito: 1000,
},
{
  nombre: "Tomas Piety",
  password: "Toty+012?",
  estaDentro: true,
  carrito: [125, 200, 50, 2],
  credito: 1000,
},
{
  nombre: "Ryland Grace",
  password: "spa*?34A",
  estaDentro: true,
  carrito: [10, 10, 15, 15],
  credito: 400,
},
];

//Ejercicio 1

// Dado un nombre determinado por consola, comprobar si existe en la BDD principal. Si es así pedir importe y añadirlo a su carrito. En caso contrario, crear nuevo cliente con su importe (en el carrito) y crédito 1000 (en este caso la contraseña estará vacía)

const add = function (nombre){
  for(let objetos of clientes){
    if(nombre === objetos.nombre){
      console.log("Ya existe el nombre " + objetos.nombre);
      objetos.carrito.push( parseInt(prompt("Introduzca un importe en el carrito: ")));
      return clientes;
    }
  }
  
  clientes.push({nombre: nombre, carrito: [], credito: 1000, estaDentro: true, password: ""})
  clientes[clientes.length - 1].carrito.push(parseInt(prompt("Introduzca un importe en el carrito: ")));
  return clientes;
}

nom = prompt("Escriba  el nombre de un usuario existente o no: ");

add(nom);
console.log(clientes);

//Ejercicio 2

//Crear el código necesario para pedir por consola el nombre de un cliente existente, de tal manera que el programa devuelva la suma total de los importes de su carrito. O sea, el total de la compra.

const suma = function(nombre){
  
  for(let objetos of clientes){
    
    if(nombre === objetos.nombre){
      console.log(objetos.nombre)
      let adicion = 0;
      for(i = 0; i < objetos.carrito.length; i++){
        adicion = adicion + objetos.carrito[i];  
      } 
      return adicion; 
    }   
  }   
}

nom1 = prompt("Escriba  el nombre de un usuario existente: ");

sumaTotal = suma(nom1);
console.log("La suma total de los importes de su carrito es:" + sumaTotal);