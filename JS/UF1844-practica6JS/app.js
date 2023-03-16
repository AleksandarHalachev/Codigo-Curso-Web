geoloc = [
  {
    lugar: "Tokyo",
    posicion: [35.6828387, 139.7594549],
  },
  {
    lugar: "Berlín",
    posicion: [52.5170365, 13.3888599],
  },
  {
    lugar: "Praga",
    posicion: [50.0874654, 14.4212535],
  },
  {
    lugar: "Las Palmas de Gran Canaria",
    posicion: [28.12584114074707, -15.434992790222168],
  },
  {
    lugar: "Viena",
    posicion: [48.239460835879946, 16.276373828906145],
  },
];

/**
//  ** =============== EJERCICIO 1 ===================
//  */
// function listaPosiciones() {
//   setTimeout(() => {
//     // Función temporizadora
//     geoloc.forEach((posicion) => {
//       console.log(
//         `${posicion.lugar} - Latitud:${posicion.posicion[0]} - Longitud: ${posicion.posicion[1]}`
//       );
//     });
//   }, 2000);
// }

// listaPosiciones();
/**
 ** =============== EJERCICIO 2 ===================
 */
// function nuevaPosicion(nuevaLoc, nuevaPos) {
//   setTimeout(() => {
//     nueva = {
//       lugar: nuevaLoc,
//       posicion: nuevaPos,
//     };
//     geoloc.push(nueva);
//   }, 1000);
// }

// nuevaPosicion("Bruselas", [5, 6]);
// listaPosiciones();
/**
 ** =============== EJERCICIO 3 ===================
 */
// ***** Ej.1 Solicitar datos con promesas *****
// function prSolicitaDatos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       geoloc.forEach((posicion) => {
//         console.log(
//           `${posicion.lugar} - Latitud:${posicion.posicion[0]} - Longitud:${posicion.posicion[1]}`
//         );
//       });
//       const error = true; // simula que no se recibió error del servidor
//       if (!error) {
//         resolve();
//       } else {
//         reject("Ha habido algún error");
//       }
//     }, 2000);
//   });
// }

// prSolicitaDatos()
//   .then(console.log("Listado completo"))
//   .catch((err) => console.log(err));

// ***** Ej.2 Nueva posición con promesas *****
function nuevaPosicion(nuevaLoc, nuevaPos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      nueva = {
        lugar: nuevaLoc,
        posicion: nuevaPos,
      };
      geoloc.push(nueva);

      const error = false; // simula que no se recibió error del servidor
      if (!error) {
        resolve();
      } else {
        reject("Ha habido algún error");
      }
    }, 3000);
  });
}

nuevaPosicion("Bruselas", [50, 4])
  .then(listaPosiciones)
  .catch((err) => console.log(err)); // Ha habido algún error

/**
 ** =============== EJERCICIO 4 ===================
 */
// function eliminaPosicion(eliminaLoc) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       geoloc.forEach((element) => {
//         if (element.lugar === eliminaLoc) {
//           posCiudad = geoloc.indexOf(element);
//           geoloc.splice(posCiudad, 1);
//         }
//       });
//       const error = false; // simula que no se recibió error del servidor
//       if (!error) {
//         resolve();
//       } else {
//         reject("Ha habido algún error");
//       }
//     }, 3000);
//   });
// }

// eliminaPosicion("Praga")
//   .then(listaPosiciones)
//   .catch((err) => console.log(err));

/**
 ** =============== EJERCICIO 5 ===================
 */
function modificaPosicion(localizacion, nuevaPos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      nuevosdatos = {
        lugar: localizacion,
        posicion: nuevaPos,
      };
      geoloc.forEach((element) => {
        if (element.lugar === localizacion) {
          posCiudad = geoloc.indexOf(element);
          // console.log(posCiudad);
          geoloc.splice(posCiudad, 0, nuevosdatos);
        }
      });
      const error = false; // simula que no se recibió error del servidor
      if (!error) {
        resolve();
      } else {
        reject("Ha habido algún error");
      }
    }, 3000);
  });
}

modificaPosicion("Tokyo", [4, 4])
  .then(listaPosiciones)
//   .catch((error) => console.log(error));
