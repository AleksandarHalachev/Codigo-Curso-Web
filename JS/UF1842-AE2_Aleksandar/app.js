
//Ejercicio 1

nota = parseFloat(prompt("La nota es: "));

if(nota < 4.99){
  console.log("La nota es 'Insuficiente'.")
}
else if(nota >= 5 && nota <= 5.5){
  console.log("La nota es 'Suficiente'.")
}
else if(nota >= 5.51 && nota <= 7.49){
  console.log("La nota es 'Bien Superado'.")
}
else if(nota >= 7.5 && nota <= 9){
  console.log("La nota es 'Notable'.")
}
else if(nota >= 9 && nota <= 10){
  console.log("La nota es 'Sobresaliente'.")
}
else{
  console.log("Error, la nota introducida no es válida.")
}

//Ejercicio 2
logueado = Math.round(Math.random());
credito = Math.round(Math.random());

switch(true){
  case logueado === 1 && credito === 1:
    console.log("Felicidades, está usted logueado y con crédito y puede acceder a su carrito de compra.")
    break;
  case logueado === 0:
    console.log("Por favor inicie sesión para continuar con su compra.")
    break;
  case credito === 0:
    console.log("No tiene crédito suficiente para realizar la compra.")
}