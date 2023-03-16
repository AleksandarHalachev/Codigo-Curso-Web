//Ejercicio 1

const ingresos = [
  {
    nombre : "Juan Velasco",
    ganancias : 4000,
    necesidades : 4000 * 0.5,
    caprichos : 4000*0.3,
    ahorros: 4000 *0.2
  },
  {
    nombre : "Pepe Chiringo",
    ganancias : 3000,
    necesidades : 3000 * 0.5,
    caprichos : 3000*0.3,
    ahorros: 3000 *0.2
  },
  {
    nombre : "Isabel Ruiz",
    ganancias : 4500,
    necesidades : 4500 * 0.5,
    caprichos : 4500*0.3,
    ahorros: 4500 *0.2
  }
]
console.table(ingresos);

//Ejercicio 2

nombres  = ["Pablo", "Juan", "Pedro"];
ocupaciones = ["Policia", "Bombero", "Profesor"];

const trabajadores  = [];
for (i = 0; i < nombres.length && ocupaciones.length; i++){
  trabajadores[i] = {
    nombre: nombres[i],
    ocupacion: ocupaciones[i]
  }
}
console.table(trabajadores);

// Ejercicio 3

const a1 = [
  {
    id: 1,
    nombre: "Jose",
    suscripcion: "básica",
    credito: 20,
    activo: true
  },
  {
    id: 2,
    nombre: "Alonso",
    suscripcion: "básica",
    credito: 0,
    activo: false
  },
  {
    id: 3,
    nombre: "María",
    suscripcion: "premium",
    credito: 30,
    activo: false
  },
  {
    id: 4,
    nombre: "Silvia",
    suscripcion: "plus",
    credito: 10,
    activo: true
  }
]
console.log("Todos los datos:");
console.table(a1);
 idUsuario = parseInt(prompt("Indique el id de un usuario:"));

  if (idUsuario === a1[0].id){
    console.log(a1[0]);
  }else if(idUsuario === a1[1].id){
    console.log(a1[1]);
  }else if (idUsuario === a1[2].id){
    console.log(a1[2]);
  }else if(idUsuario === a1[3].id){
    console.log(a1[3]);
  }else{
    console.log("Usuario no encontrado.");
  }

idUsuario = parseInt(prompt("Indique su id para cambiar credito y suscripción: "));
suscripciones = prompt("Escriba el tipo de suscripción que quiera: ");
creditos = parseInt(prompt("Indique el credito que quiere almacenar:"));


if (idUsuario === a1[0].id){
  a1[0].suscripcion = suscripciones;
  a1[0].credito = creditos;
  console.log("Datos actualizados: ");
  console.table(a1[0]);
}else if(idUsuario === a1[1].id){
  a1[1].suscripcion = suscripciones;
  a1[1].credito = creditos;
  console.log("Datos actualizados: ");
  console.table(a1[1]);
}else if (idUsuario === a1[2].id){
  a1[2].suscripcion = suscripciones;
  a1[2].credito = creditos;
  console.log("Datos actualizados: ");
  console.table(a1[2]);
}else if(idUsuario === a1[3].id){
  a1[3].suscripcion = suscripciones;
  a1[3].credito = creditos;
  console.log("Datos actualizados: ");
  console.table(a1[3]);
}
else{
  console.log("Usuario no encontrado.");
}
console.table(a1);

nombre = prompt("Escriba el nombre de un usuario que desea eliminar: ");

for(let objetos of a1){
  if(nombre === objetos.nombre){
     a1.splice(a1.indexOf(objetos), 1);
     console.log("Usuario borrado:")
     console.table(a1);
     break;
     }
  else if(nombre != objetos.nombre){
    if(a1.indexOf(objetos)=== a1.length-1){
      console.log("Usuario no encontrado.");
      }
    continue;
  }
}


id = parseInt(prompt("Escriba el id de un usuario que desea desactivar: "));

for(let objetos of a1){
  if(id === objetos.id){
     a1[a1.indexOf(objetos)].activo = false;
     console.log("Usuario desactivado: ")
     console.table(a1);
     break;
     }
     else if(id != objetos.id){
      if(a1.indexOf(objetos)=== a1.length-1){
      console.log("Usuario no encontrado.");
      }
    continue;
    }
}


idNuevo = parseInt(prompt("Escriba el id de un nuevo usuario: "));
nombreNuevo = prompt("Escriba el nombre de un nuevo usuario: ");
suscripcionNuevo = prompt("Escriba la suscripcion de un nuevo usuario: ");
creditoNuevo = parseInt(prompt("Escriba el credito de un nuevo usuario: "));
activoNuevo = prompt("Escriba si el usuario está activo (true o false):  ");
let iguales;

for(let objetos of a1){
  if(objetos.id === idNuevo){
    iguales = true;
    break;
  }
  else{
    iguales= false;
  }
}


a1.push({id: idNuevo, 
nombre: nombreNuevo,
suscripcion: suscripcionNuevo,
credito: creditoNuevo,
activo: activoNuevo });
        
console.log("Nuevo usuario añadido: ");
console.table(a1);




