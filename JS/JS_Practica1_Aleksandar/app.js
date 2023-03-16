  // Ejercicio 1
a = 3;
b = 5;
suma = a + b;
console.log("La suma es: " + suma);

// Ejercicio 2
time = prompt("Tiempo en minutos:");
time = parseInt(time);
seg = time * 60;
console.log(seg + " segundos");

// Ejercicio 3
base = parseFloat(prompt("Base del triángulo:"));
altura = parseFloat(prompt("Altura del triángulo:"));
area = (base * altura) / 2;
console.log("El área del triángulo es: " + area);

//Ejercicio 4
edad = prompt("¿Cuántos años tienes?: ");
edad = parseInt(edad);
edadEnDias = edad * 365.25;
console.log("Tu edad en días es: " + edadEnDias);

//Ejercicio 5
base = prompt("Base del rectángulo:");
altura = prompt("Base del rectángulo:");
perimetro = base * 2 + altura * 2;
console.log("El perímetro del rectángulo es: " + perimetro);

//Ejercicio 6
nombre = prompt("Escriba su nombre:");
apellido = prompt("Escriba su apellido:");
nombreApellido = nombre + " " + apellido;
console.log("El nombre y apellido introducidos son: "+ nombreApellido)

//Ejercicio 7
aciertosDeDos = parseInt(prompt("Introduce número de aciertos de 2: "));
aciertosDeTres = parseInt(prompt("Introduce número de aciertos de 3: "));
puntosTotales = aciertosDeDos * 2 + aciertosDeTres * 3;
console.log("Los puntos totales del partido de baloncesto son: " + puntosTotales);

//Ejercicio 8
partidosGanados = parseInt(prompt("Partidos ganados en 20 jornadas:"));
partidosEmpatados = parseInt(prompt("Partidos empatados en 20 jornadas:"));
puntosLiga = partidosGanados * 3 + partidosEmpatados;
console.log("Los puntos de Liga totales son: " + puntosLiga)

//Ejercicio 9
numeroPositivo = prompt("Introduzca un número: ");
numeroNegativo = -Math.abs(numeroPositivo);
console.log("El número en negativo es: " + numeroNegativo);

//Ejercicio 10
temperaturaFahrenheit = parseInt(prompt("Introduzca la temperatura en Fahrenheit: "));
tempCelsius = (temperaturaFahrenheit - 32) *(5/9);
tempCelsius = tempCelsius.toFixed(2);
tempKelvin = 5/9 * temperaturaFahrenheit + 459.67;
tempKelvin = tempKelvin.toFixed(2);
console.log("La temperatura en Celsius es: " + tempCelsius+ "ºC");
console.log("La temperatura en Kelvin es: " + tempKelvin + "K");

//Ejercicio 11
precioProducto = parseInt(prompt("Precio del producto en euros: "));
cantidadProducto = parseInt(prompt("Cantidad del producto: "));
descuento = 20/100;
precioFinal = precioProducto * cantidadProducto - precioProducto * cantidadProducto * descuento;
console.log("El precio por unidad es: "+ precioProducto);
console.log("El descuento aplicado es: " + descuento * 100 + "%");
console.log("La cantidad del producto que compró es: "+ cantidadProducto);
console.log("El precio final es: " + precioFinal + "€");

//Ejercicio 12
tiempoViaje = 10000 / 0.3;
console.log("La nave viaja: " + tiempoViaje + " años.");
