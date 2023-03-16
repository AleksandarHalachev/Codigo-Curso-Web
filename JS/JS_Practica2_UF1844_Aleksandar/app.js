
const tareas = [
	{
		hora: '01:00',
		tarea: 'Planchar',
		prioridad: 'urgente',
	},
	{
		hora: '08:00',
		tarea: 'Desayuno',
		prioridad: 'alta',
	},
	{
		hora: '08:30',
		tarea: 'Revisar llamadas',
		prioridad: 'alta',
	},
	{
		hora: '10:00',
		tarea: 'Reunión con plantilla',
		prioridad: 'media',
	},
	{
		hora: '12:00',
		tarea: 'Llamar a Hacienda',
		prioridad: 'baja',
	},
	{
		hora: '14:00',
		tarea: 'Almuerzo',
		prioridad: 'media',
	},
	{
		hora: '16:00',
		tarea: 'Cita con abogado',
		prioridad: 'media',
	},
	{
		hora: '18:00',
		tarea: 'Café',
		prioridad: 'alta',
	},
	{
		hora: '18:30',
		tarea: 'Reunión proyecto ',
		prioridad: 'alta',
	},
	{
		hora: '19:00',
		tarea: 'Agenda de mañana',
		prioridad: 'media',
	},
	{
		hora: '20:10',
		tarea: 'Supermercado',
		prioridad: 'media',
	},
];

//Ejercicio 1

const prioridadAlta = tareas.filter((tareas) =>{
  return tareas.prioridad === 'alta';
})

console.table(prioridadAlta);

//Ejercicio 2


tareas.forEach((tarea) =>{
  tipo = prompt("Selecciona el tipo de la tarea " + tarea.tarea + " (personal o trabajo)");
  tarea.tipo = tipo;
})

console.table(tareas) 

const personales = tareas.filter((tareas) =>{
  return tareas.tipo === 'personal';
})

console.table(personales);

const trabajo = tareas.filter((tareas) =>{
  return tareas.tipo === 'trabajo';
})

console.table(trabajo);

//Ejercico 3

hayBajas = tareas.some((tarea) =>{
  return tarea.prioridad === "baja";
})

console.log(hayBajas);

const bajas = tareas.filter((tareas) =>{
  return tareas.prioridad === 'baja';
})

console.table(bajas);

//Ejercicio 4

const reuniones = tareas.filter((tareas) =>{
  return tareas.tarea.includes("Reunión");
})

console.table(reuniones);

const horaReuniones = reuniones.map((reuniones) =>{
  console.log(`Tiene la reunión: ${reuniones.tarea} a las ${reuniones.hora}`);
})

//Ejercicio 5

const despues12 = tareas.filter((tareas) =>{
  return tareas.hora > '12:00';
})

console.log("Las tareas después de las 12 son:");
console.table(despues12);

