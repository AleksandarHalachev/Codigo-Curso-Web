clientes = [
  {
    nombre: "Maria",
    clasificacion: "medio",
    carteras: "NIKKEI",
    inversion: 10000,
    activo: true
  },
  {
    nombre: "Jose",
    clasificacion: "bajo",
    carteras: "IBEX",
    inversion: 20000,
    activo: true
  },
  {
    nombre: "Marta",
    clasificacion: "alto",
    carteras: "NIKKEI",
    inversion: -40000,
    activo: false
  },
  {
    nombre: "Josefa",
    clasificacion: "vip",
    carteras: "S&P",
    inversion: 100000,
    activo: true
  }
]

//Apartado 2
console.table(clientes);

nombre = prompt("Indique el nombre de un usuario para cambiar su cartera:");
cartera = prompt("Indique la cartera a la que quiere cambiar: ");

for (let objetos of clientes){
  if (objetos.nombre === nombre) {
    objetos.carteras = cartera;
  }
}
console.table(clientes);

//Apartado 3

nombre = prompt("Indique el nombre de un usuario para eliminarlo:");

for (let objetos of clientes){
  if (objetos.nombre === nombre) {
    delete clientes[clientes.indexOf(objetos)];
  }
}
console.table(clientes);

//Apartado 4

nombre = prompt("Indique el nombre de un usuario nuevo:");
clasificacion = prompt("Indique la clasificacion del nuevo usuario: ");
carteras = prompt("Indique la cartera de un usuario nuevo:");
inversion = parseInt(prompt("Indique la inversion de un usuario nuevo: "));
activo = prompt("Indique si el usuario está activo (true o false): ");

clientes.push({nombre, clasificacion, carteras, inversion, activo});
console.table(clientes);

//Apartado 5

console.log("Los clientes con inversion positiva son:");
for(i = 0; i < clientes.length; i++){
  if (clientes[i]) {
    if(clientes[i].inversion > 0){
      console.log(clientes[i]);
    }
  }
}