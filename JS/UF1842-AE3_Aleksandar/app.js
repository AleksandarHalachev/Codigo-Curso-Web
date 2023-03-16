superHeroes = ['Superman', 'Capitán América', 'Hellboy', 'Invincible', 'Shadowman']; 

editoriales = ['DC Comics', 'Marvel', 'Dark Horse', 'Skybound', 'Valiant']; 

combinado=[];
let n = 0;
while(n < superHeroes.length){
  
  combinado.push(superHeroes[n]); 
  combinado.push(editoriales[n]);
  
  n++;
}
console.log(combinado);

heroe = prompt("Escribe un superhéroe que quieres eliminar junto con su editorial: ");

switch (heroe != null){

  case (combinado.includes(heroe)):
    combinado.splice(combinado.indexOf(heroe), 1 + 1  )
    break;
}

console.log("Registro eliminado. Lista nueva: " + combinado);

if (combinado.indexOf("Invincible") != -1){
  combinado.splice(combinado.indexOf("Invincible"), 1, "FD Comics");
  console.log("Invincible cambiado por FD Comics: " + combinado);}
else{
  console.log("Error, Invincible no está en la lista");
}

if (combinado.indexOf("Dark Horse") != -1){

nuevoHeroe = prompt("Escribe un nuevo superhéroe que quieres añadir: ");
nuevoEdit = prompt("Escribe la editorial de dicho superhéroe: ");
combinado.splice(combinado.indexOf("Dark Horse") + 1, 0, nuevoHeroe);
combinado.splice(combinado.indexOf(nuevoHeroe) + 1, 0, nuevoEdit);

console.log("Nuevo héroe con editorial añadidos después de Dark Horse: " + combinado);
}
else{
  console.log("Error, Dark Horse no está en la lista");
}
b = true || false 
c = !true && !false   
console.log(b)
console.log(c)