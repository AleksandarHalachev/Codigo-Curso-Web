//Ejercicio 1
edad = parseInt(prompt("¿Cuántos años tienes?"));

switch(edad != null){
  case edad >= 18:
    console.log("Eres mayor de edad");
    break;
  case edad <18:
    console.log("Eres menor de edad")
    break;
  case isNaN(edad):
    console.log("Error, no has introducido una edad válida.")
}

//Ejercicio 2
numero1 = parseInt(prompt("Escribe un número: "));
numero2 = parseInt(prompt("Escribe otro número: "));

if (numero1 > numero2){
  console.log(numero1 + "es mayor que" + numero2)
}
else if (numero2 > numero1){
  console.log(numero2 + " es mayor que " + numero1)
}
else{
  console.log("Los números son iguales.")
}

//Ejercicio 3
parImpar = parseInt(prompt("Escribe un número para ver si es par o impar: "));

if(parImpar % 2 === 0){
  console.log("Es par")
}
else if (parImpar % 2 != 0){
  console.log("Es impar")
}

//Ejercicio 4
helado = prompt("¿Qué sabor de helado quieres: vainilla, chocolate o fresa? Escribe 'vainilla', 'chocolate' o'fresa'.");

precioNueces = 1.20;
precioNubes = 1;
precioChocolate = 1.50;

switch(helado != null){
  case helado === "vainilla":
    console.log("Viene con topping de nueces y cuesta " + precioNueces + "€");
    break;
  case helado === "chocolate":
    console.log("Viene con topping de nubes y cuesta " + precioNubes + "€");
    break;
  case helado === "fresa":
    console.log("Viene con topping de chocolate y cuesta " + precioChocolate + "€");
    break;
  default:
    console.log("Error. Escribe uno de los tres tipos de helado.");
}

//Ejercicio 5

usuario = "Pepe";

switch(usuario != 0){
  case usuario === "Pepe":
    console.log("Comprobación rutinaria")
    break;
  default:
    console.log("Se ha agotado el tiempo, vuelve a acceder con tu cuenta de usuario.")
}

//Ejercicio 6

suscripcion = parseInt(prompt("¿Qué tipo de suscripción desea? Teclee un número: básica(1), plus(2) o premium(3)"));

if(suscripcion ===1){
  console.log("La suscripción básica cuesta 5,99€")
}
else if(suscripcion ===2){
  console.log("La suscripción plus cuesta 12,99€")
}
else if(suscripcion ===3){
  console.log("La suscripción premium cuesta 19,99€")
}
else{
  console.log("Error. Teclee un número: básica(1), plus(2) o premium(3) ")
}

//Ejercicio 7

cuota = Math.round(Math.random());

if(cuota === 0){
  console.log("No ha pagado su cuota mensual.")
}
else if(cuota === 1){
  console.log("Ha pagado su cuota mensual.")
}

//Ejercicio 8
btcAeth = 14.31;
ethAbtc = 0.07;
btcAxmr = 133.43;

conversion = parseInt(prompt("¿Qué tipo de conversión desea realizar? De BTC a ETH (pulse '1'), de ETH a BTC (pulse '2'), de BTC a XMR (pulse '3')"));
cantidad =parseInt(prompt("¿Qué cantidad desea convertir?"));

if(conversion === 1 && cantidad > 0){
  console.log("Conversión realizada con éxito, " + (cantidad * btcAeth).toFixed(3) + " ETH se han añadido a su cartera" );
}
else if(conversion===2 && cantidad > 0){
  console.log("Conversión realizada con éxito, " + (cantidad * ethAbtc).toFixed(3) + " BTC se han añadido a su cartera" );
}
else if(conversion===3 && cantidad > 0){
  console.log("Conversión realizada con éxito, " + (cantidad * btcAxmr).toFixed(3) + " XMR se han añadido a su cartera" );
}
else if (cantidad <= 0){
  console.log("La cantidad introducida debe ser mayor que 0.");
}
else{
  console.log("Error, código de conversión inválido");
}