const trabajadores = new Array(1835, "Victor Gomez", true, 3462, "Álvaro Gonzalez", true, 1242, "Fernando Mesa", false, 8375, "Carlos Santana", false);

//Buscar usuario por id

id = parseInt(prompt("Buscar usuario por id: "));
indiceUsuario = trabajadores.indexOf(id);
datosUsuario = trabajadores.slice(indiceUsuario, indiceUsuario + 3);

if (indiceUsuario != -1){
  console.log(datosUsuario);
}else{
  console.log("Usuario no encontrado, recargue la página y vuelva a intentarlo.");
}

//Eliminar usuario por id

id = parseInt(prompt("Buscar usuario por id para eliminarlo: "));
indiceUsuario = trabajadores.indexOf(id);
trabajadores.splice(indiceUsuario, 3);

if (indiceUsuario != -1){
  console.log("Usuario con id: "+ id + " ha sido eliminado. Resultado:" + trabajadores);
}else{
  console.log("Usuario no encontrado, recargue la página y vuelva a intentarlo.");
}

//Desactivar usuario

id = parseInt(prompt("Buscar usuario por id para desactivarlo: "));
indiceUsuario = trabajadores.indexOf(id);
trabajadores.splice(indiceUsuario + 2, 1, false);

if (indiceUsuario != -1){
  console.log("Usuario con id: "+ id + " ha sido desactivado. Resultado:" + trabajadores);
}else{
  console.log("Usuario no encontrado, recargue la página y vuelva a intentarlo.");
}

//Crear nuevo usuario

id = parseInt(prompt("Id de nuevo usuario: "));
nombre = prompt("Nombre de nuevo usuario: ");
activo = prompt("Estado de nuevo usuario (true si está activo, false si está inactivo): ");
activo === "true"?activo = true: activo = false;

trabajadores.push(id, nombre, activo);
console.log("Nueva lista: " + trabajadores);

