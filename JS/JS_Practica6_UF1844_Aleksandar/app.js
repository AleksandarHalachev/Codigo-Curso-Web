geoloc = [
	{
		lugar: 'Tokyo',
		posicion: [35.6828387, 139.7594549],
	},
	{
		lugar: 'Berlín',
		posicion: [52.5170365, 13.3888599],
	},
	{
		lugar: 'Praga',
		posicion: [50.0874654, 14.4212535],
	},
	{
		lugar: 'Las Palmas de Gran Canaria',
		posicion: [28.12584114074707, -15.434992790222168],
	},
	{
		lugar: 'Viena',
		posicion: [48.239460835879946, 16.276373828906145],
	},
];

//Ejercicio 1

const mostrarDatos =  () => {
  setTimeout(() => {
    console.log("Datos:");
    geoloc.forEach((element) => {
        console.log(element.lugar + " (Lat: " + element.posicion[0] + ", Lon: " +  element.posicion[1] + ")");
    })   
  }, 2000)
}

boton = document.getElementById("boton"); 
boton.onclick = () => {
  mostrarDatos();
}

//Ejercicio 2

const insertarDatos =  () => {
  setTimeout(() => {
		insertar = parseInt(prompt("¿Desea insertar otra ciudad? Pulse 1 para insertar u otra tecla para no insertar más."));
		while(insertar === 1){
			ciudad = prompt("Inserte nombre de la ciudad");
			latitud = parseFloat(prompt("Inserte la latitud"));
			longitud = parseFloat(prompt("Inserte la longitud"));
			geoloc.push({lugar: ciudad, posicion:[latitud, longitud]});
			insertar = parseInt(prompt("¿Desea insertar otra ciudad? Pulse 1 para insertar u otra tecla para no insertar más."));
		}  
		mostrarDatos();
  }, 3000)
}

boton2 = document.getElementById("boton2"); 
boton2.onclick = () => {
  insertarDatos();
}

//Ejercicio 3.1

const mostrarDatosPromesa = () => {
	return new Promise((resolve, reject) => {
		datos = [];
		console.log("Datos:");
		geoloc.forEach((element) => {
			if(element.lugar != ""){
				datos.push(element.lugar + " (Lat: " + element.posicion[0] + ", Lon: " +  element.posicion[1] + ")");
				if(geoloc.indexOf(element) === (geoloc.length - 1)){
					resolve(datos);
				}
			}else{
				geoloc.pop(1);
				reject("No puede haber datos vacíos.");
			}
		})
	})
}

boton3 = document.getElementById("boton3");
boton3.onclick = () => {
	mostrarDatosPromesa()
		.then((datos) => {
			datos.forEach((element) =>{
				console.log(element);
			})
		})
		.catch((err) => {
			console.log(err)
		});
}

//Ejercicio 3.2

const insertarDatosPromesa = () => {
	return new Promise((resolve, reject) => {
		insertar = parseInt(prompt("¿Desea insertar otra ciudad? Pulse 1 para insertar u otra tecla para no insertar más."));
		if(insertar === 1){
			ciudad = prompt("Inserte nombre de la ciudad");
			latitud = parseFloat(prompt("Inserte la latitud"));
			longitud = parseFloat(prompt("Inserte la longitud"));
			geoloc.push({lugar: ciudad, posicion:[latitud, longitud]});
			resolve();
		} 
		else if(insertar != 1){
			reject("No se han hecho cambios");
		} 
	})
}

boton4 = document.getElementById("boton4");
boton4.onclick = () => {
	insertarDatosPromesa()
		.then(console.log(mostrarDatos()))
		.catch((err) => {
			console.log(err);
		})
}

//Ejercicio 4

const eliminarLoc = (locIndex) => {
	return new Promise((resolve, reject) => {
		if(locIndex >= 0){
			geoloc.splice(locIndex, 1);
			resolve("Se ha eliminado el elemento.");
		}else {
			reject("No se ha encontrado el elemento.");
		}
	})
}


boton5 = document.getElementById("boton5");
boton5.onclick = () => {
	ciudad = prompt("Escribe el nombre de una ciudad para eliminar su registro:");
	indiceCiudad = geoloc.findIndex((elemento) => {
		return elemento.lugar === ciudad;
	})
	eliminarLoc(indiceCiudad)
		.then(console.log(mostrarDatos()))
		.catch((err) => {
			console.log(err);
		})
}

//Ejercicio 5

const modLoc = (locIndex, lugar, latitud, longitud) => {
	return new Promise((resolve, reject) => {
		if(locIndex >= 0){
			geoloc.splice(locIndex, 1, {lugar: lugar, posicion:[latitud, longitud]});
			resolve("Se ha modificado el elemento.");
		}else {
			reject("No se ha encontrado el elemento.");
		}
	})
}

boton6 = document.getElementById("boton6");
boton6.onclick = () => {
	ciudad = prompt("Escribe el nombre de una ciudad para modificar su localización:");
	indiceCiudad = geoloc.findIndex((elemento) => {
		return elemento.lugar === ciudad;
	})
	latitud = parseFloat(prompt("Inserte la latitud"));
	longitud = parseFloat(prompt("Inserte la longitud"));
	modLoc(indiceCiudad, ciudad, latitud, longitud)
		.then(console.log(mostrarDatos()))
		.catch((err) => {
			console.log(err);
		})
}