mediciones = [2, 5, 3, 2.5, 3, 3.5, 3.75, 4, 5, 7, 8, 8, 8, 7, 6, 5, 4, 3, 2, 1]

const diasSemana = ['Lunes', 'Martes'];

// id = 094;
// tipo = 'Dúplex';
fecha = 2000;
precioVenta = 200000;
propietario = 'Arturo Pérez';
enVenta = false;
// key:value => llave, clave o propiedad : valor
// id: 094
// tipo: 'Dúplex'

const vivienda1 = {
    id:94,
    tipo: 'Dúplex',
    fecha: 2000,
    precioVenta: 200000,
    propietario: 'Arturo Pérez',
    enVenta: false
}

const vivienda2 = {
    id: 95,
    tipo: 'Dúplex',
    fecha: 2010,
    precioVenta: 300000,
    propietario: 'Gabriel Medina',
    enVenta: true
}

// Array de objetos
//const viviendas = [vivienda1, vivienda2];

// El mismo array con los objetos y sus key:value
const viviendas = [
    {
        id:94,
        tipo: 'Dúplex',
        fecha: 2000,
        precioVenta: 200000,
        propietario: 'Arturo Pérez',
        enVenta: false
    },
    {
        id: 95,
        tipo: 'Dúplex',
        fecha: 2010,
        precioVenta: 300000,
        propietario: 'Gabriel Medina',
        enVenta: true
    },
    {
        id: 96,
        tipo: 'Chajlen',
        fecha: 2015,
        precio: {
            precioCompra: 800000,
            precioVenta: 1000000
        },
        propietario: 'Fran Dávila',
        enVenta: true
    }
]

const viviendas2 = [
    {
        id:97,
        tipo: 'Ático',
        fecha: 2000,
        precioVenta: 200000,
        propietario: 'Arturo Pérez',
        enVenta: false
    },
    {
        id: 98,
        tipo: 'Apartamento',
        fecha: 2010,
        precioVenta: 300000,
        propietario: 'Gabriel Medina',
        enVenta: true
    }
]

// Mostrar objetos dentro del array
console.log(viviendas[0]);
console.log(viviendas[1]);

// Mostrar propiedades de los objetos dentro del array
console.log(viviendas[0].precioVenta);
console.log(viviendas[1].precioVenta);
console.log(`La vivienda 1 tiene un valor de mercado de ${viviendas[0].precioVenta}€`);
console.log(`La vivienda 2 tiene un valor de mercado de ${viviendas[1].precioVenta}€`);

// Modificar el valor de una propiedad
viviendas[1].precioVenta = 350000;
console.log(viviendas[1].precioVenta)

console.log(viviendas);

viviendas[0].precioCompra = 150000;

// Eliminar par key:value dentro de un objeto
delete viviendas[0].precioCompra;

// Destructuring de objetos
const [medicion1, medicion2, medicion3,,medicion5] = mediciones;
console.log(medicion1, medicion2, medicion3, medicion5);

const {id, tipo} = vivienda2;
console.log(id, tipo);

console.log(viviendas[2].precio.precioCompra);

//const inmobiliaria = [...viviendas1,...viviendas2];

datosAdicionales = {
    financiacion: 'obtenida',
    plazo: 30
}

const propiedades = {...vivienda1,...datosAdicionales};
console.log(propiedades)
