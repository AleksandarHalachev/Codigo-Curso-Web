// console.log("Enviando petición al servidor");
// // setTimeout(()=>{},time)
// setTimeout(() => {
//   console.log("Estos son los datos que me has pedido");
// }, 3000); // Mediante la Web API
// console.log("Estoy en la última línea del código");

// const boton = document.querySelector(".boton");
// function haSidoPulsado() {
//   console.log("Pulsado!!!");
// }

// boton.addEventListener("click", haSidoPulsado);
// console.log("Fin de código");

// const arrayNuevo = [1, 3, 5, 7];

// arrayNuevo.map((elemento) => {
//   return elemento * 2;
// });

// const boton = document.querySelector(".boton");
// function localizacionUsuario() {
//   navigator.geolocation.getCurrentPosition(
//     (posData) => {
//       console.log(posData);
//     },
//     (error) => {
//       console.log(error);
//     }
//   );
//   console.log("Buscando posición actual...");
// }
// boton.addEventListener("click", localizacionUsuario);
// console.log("Buscando...");

// Ejemplo domótica
// const abrirPuertas = () => {
//   console.log("Puertas abiertas...");
// };
// const sacarCortaCesped = () => {
//   console.log("Cortacesped fuera...");
// };
// const meterCortaCesped = () => {
//   console.log("Cortacesped dentro...");
// };
// const cerrarPuertas = () => {
//   console.log("Puertas cerradas...");
// };

// const controlDomotico = () => {
//   setTimeout(() => {
//     abrirPuertas(), 3000;
//   });
//   setTimeout(() => {
//     sacarCortaCesped();
//   }, 2000); // Hemos simulado que tarda 2 segundos
//   setTimeout(() => {
//     meterCortaCesped();
//   }, 1000); // Hemos simulado que tarda 1 segundos
//   setTimeout(() => {
//     cerrarPuertas();
//   }, 700);
// };

// controlDomotico();

// const controlDomotico2 = () => {
//   setTimeout(() => {
//     abrirPuertas(),
//       setTimeout(() => {
//         sacarCortaCesped(),
//           setTimeout(() => {
//             meterCortaCesped(),
//               setTimeout(() => {
//                 cerrarPuertas();
//               }, 1000);
//           }, 1000);
//       }, 1000);
//   }, 1000);
// };

// controlDomotico2();

// Callback Hell

// Promises (Promesas)
// Pueden devolver dos valores : Cumplida (Resolve) y Rechazada (Reject)
// Pueden tener dos estados : Pediente (Pending) o Finalizada (Settled)

// mueveJugador(300, "Abajo", function () {
//   mueveJugador(100, "Derecha", function () {
//     mueveJugador(50, "Izquierda", function () {
//       mueveJugador(200, "Arriba", function () {
//         mueveJugador(75, "Abajo", function () {
//           mueveJugador(150, "Derecha", function () {});
//         });
//       });
//     });
//   });
// });

// Con Promises
// mueveJugador(300, "Abajo")
//   .then(() => mueveJugador(100, "Derecha"))
//   .then(() => mueveJugador(50, "Izquierda"))
//   .then(() => mueveJugador(200, "Arriba"))
//   .then(() => mueveJugador(75, "Abajo"))
//   .then(() => mueveJugador(150, "Derecha")).catch((error) => console.log(error))

const abrirPuertas = () => {
  return new Promise((resolve, reject) => {
    let errorGeo = true;
    setTimeout(() => {
      if (errorGeo) {
        reject("Ha habido un error en la Geolocalización");
      } else {
        resolve([1, 3, 5]);
      }
    }, 3000);
  });
};

// abrirPuertas().then(
//   (datos) => {
//     console.log(datos);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

abrirPuertas()
  .then((datos) => {
    console.log(datos);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Finalizado...");
  });
