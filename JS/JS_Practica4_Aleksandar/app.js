let numPrimitiva = [];
let sumaAciertos = 0;
for (i = 0; i<6; i++){
  numPrimitiva[i] = Math.floor(Math.random()*49)+1;
  if(numPrimitiva[i]===numPrimitiva[i-1]){
    i--;
  }
}

for (i=0; i<6 ; i++){
  numero = prompt("Indique un número (1 - 49) para la lotería:");
  numero = +numero;
  if(numero === numPrimitiva[i]){
    console.log("Has acertado este número!: " + numPrimitiva[i]);
    sumaAciertos++;
  }
  else if(numero < 1){
    console.log("¡El número debe ser entre 1 y 49!");
    i--;
  }
  else if(numero > 49){
    console.log("¡El número debe ser entre 1 y 49!");
    i--;
  }
  else if (numero != numPrimitiva[i]){ 
    console.log("No has acertado este número");
  }
}
console.log("Has acertado " + sumaAciertos + "/" + numPrimitiva.length + " números de la primitiva.");
console.log("Los números ganadores son: " + numPrimitiva);