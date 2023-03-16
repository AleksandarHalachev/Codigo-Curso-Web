//Ejercicio 1

const datos = `[
  {
    "id":1,
    "marca": "Ray-Ban",
    "modelo": "Aviator",
    "precio": 125,
    "fechaventa": "12/10/2023"
  },
  {
    "id":2,
    "marca": "Emporio Armani",
    "modelo": "Flexi",
    "precio": 200,
    "fechaventa": "11/11/2022"
  },
  {
    "id":3,
    "marca": "Ray-Ban",
    "modelo": "Wayfarer",
    "precio": 145,
    "fechaventa": "9/9/2022"
  },
  {
    "id":4,
    "marca": "Guess",
    "modelo": "GU7741",
    "precio": 99,
    "fechaventa": "20/10/2023"
  },
  {
    "id":5,
    "marca": "Maui Jim",
    "modelo": "Red Sands",
    "precio": 218,
    "fechaventa": "12/10/2023"
  }
]`;

const datosNuevos = JSON.parse(datos);
console.table(datosNuevos);

//Ejercicio 3.1

axios.get('https://640099ba29deaba5cb3b64d7.mockapi.io/clientes/6')
  .then(datos => {
    console.log(datos.data); 
  })
  .catch(err => {
    console.log('ERROR', err);
  })

//Ejercico 3.2

const crearCliente = async () => {
	try {
		const datos_cliente= {
			nombre: 'Alek',
			email: 'alek@alek.com',
			password: "aaaaa",
		};
		const datos = await axios.post(
			'https://640099ba29deaba5cb3b64d7.mockapi.io/api/v1/clientes/',
			{
				nombre: datos_cliente.nombre,
        email: datos_cliente.email,
        password: datos_cliente.password,
			}
		);
		return datos;
	} catch (error) {}
};

crearCliente()
	.then((datos) => {
		console.log(datos.data);
	})
	.catch((error) => {
		console.log(error);
	});

//Ejercico 3.3
  

  const modificarCliente = async (id, nombre, email, password) => {
    try {
      const datos = await axios.put(
        `https://640099ba29deaba5cb3b64d7.mockapi.io/api/v1/clientes/${id}`, {
          nombre: nombre,
          email: email,
          password: password
        }
      );
      return datos;
    } catch (error) {
      console.log('Error: ' + error);
    }
  };
  
  id = parseInt(prompt("Escriba el id de un usuario que desea modificar: "));
  modificarCliente(id, "Nuevo Men", "nuevomen@nuevomen", "asdasd")
    .then((datos) => {
      console.log(datos.data);
    })
    .catch((err) => {
      console.log(err);
    });

//Ejercicio 3.3

const eliminarCliente = async (id) => {
	try {
		const datos = await axios.delete(
			`https://640099ba29deaba5cb3b64d7.mockapi.io/api/v1/clientes/${id}`,
      {
        method: 'DELETE'
      }
		);
		return datos;
	} catch (error) {
		console.log(error);
	}
};

idEliminar = parseInt(prompt("Escriba el id de un usuario que desea eliminar: "));
eliminarCliente(idEliminar)
	.then((datos) => {
    console.log(datos);
	})
	.catch((error) => {
		console.log(error);
	});
  