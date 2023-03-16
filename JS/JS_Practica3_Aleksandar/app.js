
//Ejercicio 1

miAlfabeto = ['A', 'B', 'C', 'D','E','F', 'G'];
console.log(miAlfabeto.length);

if (miAlfabeto.length < 4){
  console.log("La longitud de miAlfabeto es menor que 4.");
}
else{
  console.log("La longitud de miAlfabeto es mayor que 4.");
}

//Ejercicio 2

planetas = ['Mercurio', 'Venus', 'Tierra', 'Marte','Jupiter','Saturno', 'Urano', 'Neptuno'];

for(let i = 0; i < planetas.length; i++){
  console.log(planetas[i]);
}
planetas.splice(3, 1);
console.log("Planetas sin Marte; "+ planetas)

//Ejercicio 3

p1 = prompt("Escriba un producto médico:");
p2 = prompt("Escriba otro producto médico:");


productosMedicos = new Array(p1, p2);
productosMedicos.push("vitaminas", "antibioticos");
masProductos = ["vendas", "tiritas", ...productosMedicos];

console.log("Estos son los productos: ");

for(let i = 0; i < masProductos.length; i++){
  console.log(masProductos[i]);
}

//Ejercicio 4
const numeros = ['1', '2', '3', '4', '5'];

for(let i = 0; i < numeros.length; i++){
  parseInt(numeros[i]);
  console.log(numeros[i]);
}

//Ejercicio 5
const valores = [1, -2, 3.4, 4, 5];
num = parseFloat(prompt("Escriba un número para ver si está en la base de datos: "));
if (valores.includes(num)){
  console.log("está en la base de datos")
}else{
  console.log("no está en la base de datos")
}

//Ejercicio 6

const valores2 = [1, -2, 3.4, 4, 5];
let suma = 0;
for(i=0; i< valores2.length; i++){
  suma = suma + valores2[i];
}
console.log("la suma total es:" + suma); 

suma2 = valores2.shift() + valores[valores2.length];
console.log(valores2.length)
console.log("la suma del primer y el último número es:" + suma2);

//Ejercicio 7

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
numSemana = parseInt(prompt("Escriba un número del 1 al 7 para ver el día de la semana correspondiente: "));

console.log("El día es: " + diasSemana[numSemana-1]);

//Ejercicio 8

const pelis = ['Shrek', 'Evil Dead', 'Star Wars', 'Monstruos SA', 'John Wick'];
elimina = parseInt(prompt("Escribe la posición de la película que deseas eliminar: "));
pelis.splice(elimina, 1);
console.log(pelis);

añade = prompt("Escribe la película que deseas añadir: ");
añadePos = parseInt(prompt("Escribe la posición de la película que deseas añadir: "));
pelis.splice(añadePos, 0, añade)
console.log(pelis);

//Ejercicio 9

const listaNumeros = [1, 16, 22, 43, 55, 7, 14, 8, 9];
const pares = [];
const impares = [];
for (i = 0; i < listaNumeros.length; i++){
  if (listaNumeros[i] % 2 === 0){
    pares.push(listaNumeros[i]);
  }
  else if(listaNumeros[i] % 2 != 0){
    impares.push(listaNumeros[i])
  }
}
console.log("Lista de pares: " + pares);
console.log("Lista de impares: " + impares);

// Ejercicio 10

const positivoNegativo = [-1, -16, 22, 43, -55, 7, 14, -8, -9];
console.log('Lista con positivos y negativos: ' + positivoNegativo)
console.log('Los negativos son:')
for (i = 0; i < positivoNegativo.length; i++){
  if(positivoNegativo[i] <= 0){
    console.log(positivoNegativo[i])
  }
}

