const personal = [
	{
		id: 101,
		nombre: 'Santiago Goñi',
		puesto: 'Programador Junior',
		salario: 12000,
		status: 'Para despido',
		activo: true,
		proyectos: ['Fooofle Pixtel'],
	},
	{
		id: 102,
		nombre: 'Caridad Navarrete',
		puesto: 'Programadora Junior',
		salario: 12000,
		status: 'Prueba',
		activo: true,
		proyectos: ['Editor de texto'],
	},
	{
		id: 103,
		nombre: 'Isabel Almedia',
		puesto: 'Programadora Senior',
		salario: 120000,
		status: 'Óptimo',
		activo: true,
		proyectos: ['Fooofle Pixtel', 'Gestión VA'],
	},
	{
		id: 104,
		nombre: 'Cara Lana',
		puesto: 'Gestora de Proyectos',
		salario: 360000,
		status: 'Óptimo',
		activo: true,
		proyectos: ['Fooofle Pixtel', 'Gestión VA', 'R3D3', 'Backend SpaceY'],
	},
	{
		id: 105,
		nombre: 'Alberto Serrano',
		puesto: 'Especialista Front-End',
		salario: 240000,
		status: 'Superior',
		activo: true,
		proyectos: ['Fooofle Pixtel', 'Gestión VA', 'R3D3'],
	},
	{
		id: 106,
		nombre: 'Simón Escrivá',
		puesto: 'Director Ejecutivo',
		salario: 400000,
		status: 'Pobre',
		activo: true,
		proyectos: ['Fooofle Pixtel', 'Gestión VA', 'R3D3', 'Backend SpaceY'],
	},
];

//Ejercicio 1

console.table(personal.filter((empleados) =>{
  return empleados.status === 'Prueba';
}));

//Ejercicio 2

id = personal.findIndex((empleados) =>{
  return empleados.id === 102;
});

personal[id].status = "Revisión";
console.log(personal[id]);

//Ejercicio 3

console.log(personal.some((empleados) =>{
  return empleados.salario > 12000;
}))

console.table(personal.filter((empleados) =>{
  return empleados.salario > 12000;
}))

//Ejercicio 4

junior = personal.filter((empleados) =>{
  return empleados.puesto.includes("Junior");
})
console.table(junior);

console.table(junior.map((empleados) =>{
  return empleados.salario + 2000;
}))

//Ejercicio 5

console.log(personal.every(empleados =>{
  return empleados.activo === true;
}))

personal.forEach(empleados =>{
  if (empleados.puesto === "Director Ejecutivo"){
    empleados.activo = false;
  } 
})

console.log(personal.find(empleados =>{
  return empleados.puesto == "Director Ejecutivo";
}))

//Ejercico 6

empleados = [...personal];
empleados.pop();

indexGestora = empleados.findIndex((empleados) =>{
  return empleados.puesto === "Gestora de Proyectos";
});

empleados.splice(indexGestora, 1);

console.table(empleados.filter((empleados) =>{
  return empleados.proyectos.includes("Fooofle Pixtel");
}))

personal.forEach((empleados) =>{
  if(empleados.puesto === "Programador Junior" || empleados.puesto === "Programadora Junior"){
    empleados.proyectos.push("Working Title");
  }
})

console.table(personal.filter((empleados) =>{
  return (empleados.puesto === "Programador Junior" || empleados.puesto === "Programadora Junior");
}))

santiagoIndex = personal.findIndex((empleados) =>{
  return empleados.nombre === "Santiago Goñi";
})

delete personal[santiagoIndex].proyectos;
console.log(personal[santiagoIndex]);

//Ejercicio 7

personalDesactivado = [...personal];

personalDesactivado.map((empleados) =>{
  return empleados.activo = false;
})

console.table(personalDesactivado);
