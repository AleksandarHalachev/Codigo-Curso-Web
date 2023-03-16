// Ejercicio 1
const ganancias = [1000, 2000, 3000, 4000];

cliente1 = {
  nombre: "Antonio S.",
  ganancias: ganancias[0],
  ingresos20: ganancias[0] * 0.2,
  ingresos30: ganancias[0] * 0.3,
  ingresos50: ganancias[0] * 0.5,
};
cliente2 = {
  nombre: "Julio R.",
  ganancias: ganancias[1],
  ingresos20: ganancias[1] * 0.2,
  ingresos30: ganancias[1] * 0.3,
  ingresos50: ganancias[1] * 0.5,
};
cliente3 = {
  nombre: "Jose p.",
  ganancias: ganancias[2],
  ingresos20: ganancias[2] * 0.2,
  ingresos30: ganancias[2] * 0.3,
  ingresos50: ganancias[2] * 0.5,
};
cliente4 = {
  nombre: "Josefa K.",
  ganancias: ganancias[3],
  ingresos20: ganancias[3] * 0.2,
  ingresos30: ganancias[3] * 0.3,
  ingresos50: ganancias[3] * 0.5,
};

const gananciasClientes = [];
const clientes = [
  "Julio Rodríguez",
  "Jose Manuel Pérez",
  "María Dueñas",
  "Elsa Sánchez",
];
for (let i = 0; i <= ganancias.length - 1; i++) {
  gananciasClientes.push({
    cliente: clientes[i],
    ingresos20: ganancias[i] * 0.2,
    ingresos30: ganancias[i] * 0.3,
    ingresos50: ganancias[i] * 0.5,
  });
}

clientes = [cliente1, cliente2, cliente3, cliente4];

// Ej.2
const empleados = [
  "Julio Rodríguez",
  "Jose Manuel Pérez",
  "María Dueñas",
  "Elsa Sánchez",
];
const ocupacion = ["Jardiner@", "Taxidermista", "Programador@", "Piloto"];

const trabajadores = [];

for (let i = 0; i < empleados.length; i++) {
  trabajadores[i] = {
    nombre: empleados[i],
    suOcupacion: ocupacion[i],
  };
}

// Ej.3 
const usuarios = [
  {
    id: 94,
    nombre: "Antoine",
    apellido: "LaRue",
    suscripcion: "Básica",
    credito: 1000,
    activo: true,
  },
  {
    id: 95,
    nombre: "Mario",
    apellido: "González",
    suscripcion: "Plus",
    credito: 400,
    activo: false,
  },
  {
    id: 96,
    nombre: "Rodrigo",
    apellido: "Reyes",
    suscripcion: "Premium",
    credito: 2000,
    activo: true,
  },
];

// Parte 3.1 - Parte READ del CRUD
let nuevoUsuarios = [...usuarios];
idNuevo = prompt("Introduzca id de usuario");
let usuarioBuscado = null;
for (nuevoUsuario of nuevoUsuarios) {
  if (nuevoUsuario.id === idNuevo) {
    usuarioBuscado = nuevoUsuario;
  }
}

if (usuarioBuscado == null) {
  console.log("id no encontrado");
} else {
  console.log(usuarioBuscado);
}

// Parte 3.1 - Opción 2
for (i = 0; i < nuevoUsuarios.length; i++) {
  if (nuevoUsuarios[i].id === idNuevo) {
    usuarioBuscado = nuevoUsuarios[i];
  }
}

console.log(usuarioBuscado);

// Parte 3.2 - Parte UPDATE del CRUD
idDatos = prompt("Introduzca id de usuario");
suscripcion = prompt("Introduzca suscripción: Básico, Plus, Premium");
credito = parseInt(prompt("Introduzca crédito"));
for (i = 0; i < nuevoUsuarios.length; i++) {
  if (nuevoUsuarios[i].id === idDatos) {
    nuevoUsuarios[i].credito = credito;
    nuevoUsuarios[i].suscripcion = suscripcion;
  }
}

// Parte 3.3 - Parte DELETE del CRUD
// usuarioEliminar = 'Rodrigo'; // hacer con el prompt
// for (i = 0; i <= nuevoUsuarios.length - 1; i++) {
//   if (nuevoUsuarios[i].nombre === usuarioEliminar) {
//     nuevoUsuarios.splice(i, 1);
//   }
// }
// console.log(nuevoUsuarios);

// Parte 3.4 - Desactivar
// usuarioDesactivar = 'Antoine';
// for (i = 0; i <= nuevoUsuarios.length - 1; i++) {
//   if (nuevoUsuarios[i].nombre === usuarioDesactivar) {
//     nuevoUsuarios[i].activo = false;
//   }
// }

idDesactiva = prompt('Introduzca id de usuario a desactivar');
let usuarioDesactivar = null;
for (desactivaUsuario of nuevoUsuarios) {
  if (desactivaUsuario.id == idDesactiva) {
    desactivaUsuario.activo = false;
  }
}

console.log(nuevoUsuarios);

// Parte 3.5 - Crear un nuevo usuario - Parte CREATE del CRUD
usuarioAdd = {
	id: 97,
	nombre: 'Jonathan',
	apellido: 'Johnson',
	suscripcion: 'VIP',
	credito: 10000,
	activo: true,
};

nuevoUsuarios.push(usuarioAdd);
console.log(nuevoUsuarios);