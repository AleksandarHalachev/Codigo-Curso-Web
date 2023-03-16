const llamadas = [
	{
		id: 1,
		nombre: 'Camila Cabello',
		problema: 'streaming',
		ciclo: ['recibido', 'pasado a', 'en proceso', 'solucionado', 'cerrado'],
		resuelto: true,
	},
	{
		id: 2,
		nombre: 'Ariana Grande',
		problema: 'velocidad',
		ciclo: ['recibido', 'pasado a'],
		resuelto: false,
	},
	{
		id: 3,
		nombre: 'Lola Flores',
		problema: 'velocidad',
		ciclo: ['recibido', 'pasado a', 'en proceso', 'solucionado'],
		resuelto: false,
	},
	{
		id: 4,
		nombre: 'Estrellita Castro',
		problema: 'desconexiones',
		ciclo: ['recibido'],
		resuelto: false,
	},
	{
		id: 5,
		nombre: 'Adele',
		problema: 'velocidad',
		ciclo: ['recibido'],
		resuelto: false,
	},
	{
		id: 6,
		nombre: 'La Chicha del Callejón',
		problema: 'desconexiones',
		ciclo: ['recibido', 'pasado a', 'en proceso', 'solucionado', 'cerrado'],
		resuelto: true,
	},
];

//Ejercicio 1

const mostrarDatos = () => {
  return new Promise((resolve, reject) => {
    try{
      setTimeout(() => {
    
        llamadas.forEach((llamada) =>{
          console.log(`id: ${llamada.id}, nombre: ${llamada.nombre}, problema: ${llamada.problema}, ciclo: (${llamada.ciclo}), resuelto: ${llamada.resuelto}`);
        });
        const error = false;
        if (!error) {
          resolve();
        } else {
          reject("Ha habido algún error");
        }
      
      }, 2000);
    }catch(error){
      console.log('Error: ' + error);
    }
  });
}

boton = document.getElementById("boton");
boton.onclick = () => {
  const procesarMostrar = async () => {
    try {
      console.log("Lista completa:");
      const respuesta = await mostrarDatos() 
      console.log(respuesta);
    } catch (error) {
      console.log('Error: ' + error);
    }
  }
  procesarMostrar();
}


//Ejercicio 2

const cerrarLlamadas = () => {
  
    return new Promise((resolve, reject) => {
      try{
        setTimeout(() => {
          llamadasSolucionadas = llamadas.forEach((llamada) => {
            if (llamada.ciclo.includes("solucionado") && !llamada.ciclo.includes("cerrado")){
              llamada.ciclo.push("cerrado");
            };
          })
          const error = false;
          if (!error) {
            resolve("Llamadas cerradas correctamente");
          }else {
            reject("Ha habido algún error");
          }
        }, 2000)
      }catch(error){
        console.log('Error: ' + error);
      }
    })
}

boton2 = document.getElementById("boton2");
boton2.onclick = () => {
	
	const procesarCerrar = async () =>{
		try{
      const respuesta = await cerrarLlamadas()
      console.log(respuesta);
    }catch(error){
        console.log('Error: ' + error);
    }
  }
  procesarCerrar();
}

//Ejercico 3

function nuevoCliente(cliente) {
  return new Promise((resolve, reject) => {
    try{
      setTimeout(() => {
        llamadas.push(cliente);
        const error = false;
          if (!error) {
            resolve("Cliente añadido correctamente");
          }else {
            reject("Ha habido algún error");
          }
      }, 2000);
    }catch(error){
      console.log('Error: ' + error);
    }
  });
}

boton3 = document.getElementById("boton3");
boton3.onclick = () => {
	
	const procesarCrear = async () =>{
		try{
      const respuesta = await nuevoCliente({id: 7, nombre: "Alek", problema:"streaming", ciclo:['recibido'], resuelto: false})
      console.log(respuesta);
    }catch(error){
        console.log('Error: ' + error);
    }
  }
  procesarCrear();
}

//Ejercicio 4

/**
 * 4- Crear una promesa que permita eliminar a cualquier cliente mediante su id.
 */

function eliminarCliente(indiceCliente) {
  return new Promise((resolve, reject) => {
    try{
      setTimeout(() => {
        console.log(indiceCliente)
        llamadas.splice(indiceCliente, 1);
        const error = false;
        if (!error) {
          resolve("Cliente eliminado correctamente");
        }else {
          reject("Ha habido algún error");
        }
      }, 2000);
    }catch(error){
      console.log('Error: ' + error);
    }
  });
}

boton4 = document.getElementById("boton4");
boton4.onclick = () => {
	
	const procesarEliminar = async () =>{
		try{
      idUsuario = parseInt(prompt("Indique el id de un usuario:"));
      indiceUsuario = llamadas.findIndex((elemento) =>{
        return (elemento.id === idUsuario);
      })
      console.log(indiceUsuario);
      const respuesta = await eliminarCliente(indiceUsuario);
      console.log(respuesta);
    }catch(error){
        console.log('Error: ' + error);
    }
  }
  procesarEliminar();
}