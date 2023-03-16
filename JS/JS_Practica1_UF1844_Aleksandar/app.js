//Ejercicio 1

const aplicarDescuento = function(nombre, precio, descuento){
  console.log("El producto es: " + nombre);
  console.log("El precio original es: " + precio);
  console.log("El descuento es: " + descuento + "%");
  precioFinal = precio - (precio * (descuento/100));
  console.log("El precio con el descuento aplicado es: " + precioFinal);
}

nom = "Pizza con piña";
precio = 5;
porcentajeDescuento = 20;

aplicarDescuento(nom, precio, porcentajeDescuento);

//Ejercicio 2

const recogerUsuario = function(nombre, contraseña, departamento){
  datosUsuario = [nombre, contraseña, departamento];
  return datosUsuario;
}

nom = prompt("Introduzca el nombre del usuario:");
contr = prompt("Introduzca la contraseña:");
dep = prompt("Nombre del departamento:");

datos = recogerUsuario(nom, contr, dep);
console.table(datos);

//Ejercicio 3

const recogerUsuarioObjeto = function(nombre, contraseña, departamento){
  datosUsuario = {nombre: nombre, contraseña: contraseña, departamento: departamento};
  return datosUsuario;
}

nom = prompt("Introduzca el nombre del usuario:");
contr = prompt("Introduzca la contraseña:");
dep = prompt("Nombre del departamento:");

datos = recogerUsuarioObjeto(nom, contr, dep);
console.table(datos);

//Ejercicio 4

const valorarTweets = function(tweets){
  tweets.length <= 5 ? console.log("Se han enviado como mucho 5 tweets."): console.log("Se han enviado más de 5 tweets.");
}
const tweets = ["tweet1", "tweet2", "tweet3", "tweet4", "tweet5", "tweet6"];
valorarTweets(tweets);

//Ejercicio 5

const separarString = function(string){
  const elementos = string.split(", ");
  return elementos;
}

nombres = "Alek, Musa, Javi";
array = separarString(nombres);
console.table(array);

//Ejercicio 6

const cambiarSigno = function(numeros){
  for(i = 0; i < numeros.length; i++){
    numeros[i] = -numeros[i];
  }
  console.table(numeros);
}

const numeros =  [1, 2, -3, -4, 5];
cambiarSigno(numeros);

//Ejercicio 7

const tirarDado = function(numero){
  
  while(numero){
    if(numero<1){
      console.log("El número introducido es menor que 1. Introduce un número entre 1 y 100.");
      numero = parseInt(prompt("Introduce un número entero del 1 al 100"));
    }else if(numero>100){
      console.log("El número introducido es mayor que 100. Introduce un número entre 1 y 100");
      numero = parseInt(prompt("Introduce un número entero del 1 al 100"));
    }else{
      const dado = Math.floor(Math.random() * numero +1);
      return dado;
    }
  }
}

numero = parseInt(prompt("Introduce un número entero del 1 al 100"));

dado = tirarDado(numero);
console.log(dado);

//Ejercicio 8

const tareas = [
  {
  hora: "23:32:11",
  tarea: "Limpiar",
  prioridad: "media"
  },
  {
  hora: "10:00:00",
  tarea: "Desayunar",
  prioridad: "media"
  },
  {
  hora: "14:22:51",
  tarea: "Programar",
  prioridad: "alta"
  },
  {
  hora: "16:10:30",
  tarea: "Jugar",
  prioridad: "baja"
  }
]
console.table(tareas);

const tareasVencidas = function(tareas){
  horaActual = prompt("Introduce la hora actual en formato hh:mm:ss");
  console.log("La hora introducida es: " + horaActual);
  const hora = horaActual.split(":");

  while((hora[0] > 23) || (hora[0] < 0)){
    console.log("La hora tiene que ser entre 0 y 23.");
    hora[0] = prompt("Introduce la hora de nuevo:");
  } 
  while((hora[1] > 60) || (hora[1] < 0)){
    console.log("Los minutos tienen que ser entre 0 y 60.");
    hora[1] = prompt("Introduce los minutos de nuevo:");
  } 
  while((hora[2] > 60) || (hora[2] < 0)){
    console.log("Los segundos tienen que ser entre 0 y 60");
    hora[2] = prompt("Introduce los segundos otra vez:");
  } 

  for(objeto of tareas){
    const horaObjeto = objeto.hora.split(":");
   
    if(horaObjeto[0] < hora[0]){
      console.log(`La tarea ${objeto.tarea} está vencida.`);
    
    }else if((horaObjeto[0] === hora[0]) && (horaObjeto[1] < hora[1])){
      console.log(`La tarea ${objeto.tarea} está vencida.`);
    
    }else if((horaObjeto[0] === hora[0]) && (horaObjeto[1] === hora[1]) && (horaObjeto[0] < hora[0])){
      console.log(`La tarea ${objeto.tarea} está vencida.`);
    
    }else{
      console.log(`La tarea ${objeto.tarea} no está vencida.`);
    }
  }
}

tareasVencidas(tareas);

//Ejercicio 9


const comprobarContr = function(usuario, contraseña){
  console.log(contraseña.length);
  switch (contraseña != null){
    case(contraseña.length < 8):
      pass = "Contraseña debe tener al menos 8 caracteres";
      console.log(contraseña.length);
      return pass;
    case(contraseña.includes(" ")):
      pass = "Contraseña no debe contener espacios.";
      return pass;
    case(contraseña === usuario):
      pass = "Contraseña no debe ser igual que el usuario.";
      return pass;
    case (contraseña.length >= 8 && contraseña.includes(" ") === false && contraseña != usuario):
      pass = "Contraseña correcta.";
      return pass;
  }
}

usuario = prompt("Escriba el nombre de usuario:");
contraseña = prompt("Escriba la contraseña:");
pass = comprobarContr(usuario, contraseña);
console.log(pass);