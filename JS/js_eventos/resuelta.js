// Ejercicio 1
const btnYou = document.querySelector(".btnYoutube");
suscrito = true;
btnYou.addEventListener("click", (e) => {
  suscrito = !suscrito;
  if (suscrito) {
    btnYou.textContent = "SUSCRITO";
    btnYou.setAttribute("class", "btnYouSuscrito");
  }
});

// Ejercicio 2

const infoNormal = document.querySelector("#info");
const infoAmpliada = document.querySelector("#amp");

infoNormal.addEventListener(
  "mouseover",
  () => (infoAmpliada.style.visibility = "visible")
);
infoNormal.addEventListener(
  "mouseout",
  () => (infoAmpliada.style.visibility = "hidden")
);

//Ejercicio 3
producto = document.getElementById("producto");
boton = document.getElementById("boton");
lista = document.getElementById("lista");

boton.addEventListener("click", (e) => {
  itemLista = document.createElement("li");
  itemLista.textContent = producto.value;
  lista.appendChild(itemLista);
});

// Ejercicio 4
const caja = document.querySelectorAll(".caja");
const color = document.querySelector("#color");
caja.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.style.backgroundColor = color.value;
  });

  element.addEventListener("mouseout", () => {
    if (!element.colorCambiado) {
      element.style.backgroundColor = "gray";
    } else {
      element.style.backgroundColor = element.color2;
    }
  });

  element.addEventListener("click", () => {
    element.style.backgroundColor = color.value;
    element.color2 = color.value;
    element.colorCambiado = true;
  });
});

// Ejercicio 5
const nombreFormulario = document.querySelector("#nombre");
const emailFormulario = document.querySelector("#email");
const passFormulario = document.querySelector("#password");
const btnFormulario = document.querySelector("#enviar-form");

btnFormulario.addEventListener("click", () => {
  const divDatos = document.createElement("div");
  const parrafoNombre = document.createElement("p");
  const parrafoEmail = document.createElement("p");
  const parrafoPass = document.createElement("p");
  parrafoNombre.textContent = `Nombre: ${nombreFormulario.value}`;
  parrafoEmail.textContent = `Email: ${emailFormulario.value}`;
  parrafoPass.textContent = `Contraseña: ${passFormulario.value}`;
  divDatos.appendChild(parrafoNombre);
  divDatos.appendChild(parrafoEmail);
  divDatos.appendChild(parrafoPass);
  divDatos.style.backgroundColor = "lightblue";
  divDatos.style.padding = "10px";
  divDatos.style.border = "1px solid black";
  document.body.appendChild(divDatos);
});

espera = setTimeOut("espera", 3000);
