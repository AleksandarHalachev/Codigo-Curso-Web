//Ejercio 1

const titulo = document.getElementById("titulo");
titulo.innerText = "Título Nuevo";

//Ejercicio 2

(document.getElementById("titulo").style.fontFamily = "Oxygen");

//Ejercicio 3

const linkChange = document.getElementsByTagName("a")[0];
linkChange.setAttribute("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");

const liChange = document.getElementsByTagName("li")[0];
liChange.innerHTML = "Enlace Secreto";

//Ejercicio 4

const pStyle = document.querySelectorAll("p");

pStyle.forEach(element => {
  element.setAttribute("class", "parrafo");
})

//Ejercicio 5

nuevoParrafo = document.createElement('p');
nuevoParrafo.innerText = "Párrafo Nuevo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis odio facere rem quis ut quisquam mollitia sint perspiciatis. Fuga quaerat facilis esse! Voluptas consectetur molestiae dolore maxime libero id facilis. Atque excepturi harum beatae voluptatem ea ullam odit quod. Assumenda tempore, neque hic ea commodi mollitia dolorum praesentium laboriosam blanditiis incidunt, ullam accusamus molestias pariatur eligendi, in aut temporibus totam. Magni beatae nisi in consequatur temporibus blanditiis molestiae quo dolore doloremque facere reprehenderit recusandae quam ratione molestias eaque, iusto, ad consequuntur officiis accusamus incidunt a! Iusto ratione beatae expedita voluptatum.";
main = document.querySelector("#main");
main.appendChild(nuevoParrafo);
nuevoParrafo.setAttribute("class", "nuevo-p");
nuevoParrafo.setAttribute("id", "segundo-p");
nuevoParrafo.style.color = "red";

//Ejercicio 6

const cambiaContenido = document.getElementsByTagName("p")[0];
cambiaContenido.textContent = "";

//Ejercicio 7

nuevoParrafo.innerText = "Contenido Diferente";
nuevoParrafo.style.visibility = "hidden";

//Ejercicio 8

productos = ["Oro", "Plata", "Cobre", "Gofio"];

productos.forEach(element => {
  ul = document.querySelector("#lista");
  nuevoLi = document.createElement('li');
  ul.appendChild(nuevoLi);
  nuevoLi.innerText = element;
})



