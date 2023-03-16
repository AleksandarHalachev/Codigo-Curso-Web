// Demostración del DOM
console.log(window);
console.log(window.document);
console.dir(document);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.links);

// Seleccionar elemento por su id
const titulo = document.getElementById('titulo');

const divId = document.getElementById('div-id');
console.log(divId);

// Seleccionar elemento por su nombre de etiqueta
const boton = document.getElementsByTagName('button');
console.log(boton);

const listado = document.getElementsByTagName('li')[1];
console.log('🚀 ~ file: dom.js ~ line 25 ~ listado', listado);

// Seleccionar elemento por su clase
const enlaces = document.getElementsByClassName('elemento');
listaEnlaces = Array.from(enlaces);
console.log('🚀 ~ file: dom.js ~ line 30 ~ listaEnlaces', listaEnlaces);

// Seleccionar mediante consulta (query)
parrafo = document.querySelector('p');
console.log('🚀 ~ file: dom.js ~ line 34 ~ parrafo', parrafo);

elemento = document.querySelector('.elemento a');
console.log('🚀 ~ file: dom.js ~ line 37 ~ elemento', elemento);

// Seleccionando elementos contigüos
// elementoTres = document.querySelector('.elemento:last-child');
// console.log('🚀 ~ file: dom.js ~ line 40 ~ elementoTres', elementoTres);
// elementoTres.style.backgroundColor = 'blue';

elementoCuatro = document.querySelector('.elemento:nth-child(1)');
console.log('🚀 ~ file: dom.js ~ line 45 ~ elementoCuatro', elementoCuatro);
elementoCuatro.style.backgroundColor = '#456556';

// Seleccionar mediante consulta (query) - (bis)
parrafoDos = document.querySelectorAll('p');
console.log('🚀 ~ file: dom.js ~ line 38 ~ parrafoDos', parrafoDos);

// Manipulando los elementos del DOM
// Como trabaja JS con los atributos en CSS
// font-size => fontSize
// background-color => backgroundColor

// Propiedad style
// document.querySelector('h1').style.color = '#567689';
// document.querySelector('h1').style.backgroundColor = 'black';

// Propiedad style
// Estamos cambiando el selector color del h1 mediante la propiedad style.
document.querySelector('h1').style.color = 'blue';

// Insertar estilos en el html sin que sean in-line
// Crear previamente los estilos en la hoja CSS.
// Métodos getAttribute y  setAttrbute
const h1 = document.querySelector('h1');
h1.getAttribute('class'); // solicitamos si el elemento h1 tiene un atributo class. No es necesario.
h1.setAttribute('class', 'fondo'); // Atención: El nombre de la clase  sin el punto.

const enlace = document.querySelector('li a');
enlace.setAttribute('class', 'duckduckgo');

// Haciéndolo con classList
h1.classList; // devuelve las clases que contiene el elemento
/* h1.classList.remove('fondo');  // quitamos la clase fondo del elemento h1*/
h1.classList.add('fondo'); // la volvemos a añadir

console.log(h1.classList);
h1.classList.remove('fondo');
h1.classList.add('fondo');
console.log(h1.classList.contains('fondo'));
const lista = document.querySelectorAll('li');
lista[2].classList.remove('elemento');

// Añadir texto
// Método textContent
const tituloDos = document.querySelector('.uno');
tituloDos.textContent = 'Otro Título Principal';

// Método innerHTML
tituloDos.innerHTML = '<em>Título Dos</em>';

// Método innerText
tituloDos.innerText = 'Máaaaaas título';

/**
 * Adjuntar elementos al DOM
 */

// Como crear un nuevo elemento en el DOM
nuevoElemento = document.createElement('h2');
console.log('🚀 ~ file: dom.js ~ line 45 ~ nuevoElemento', nuevoElemento);
nuevoElemento.innerHTML = 'Este h2 se ha creado por generación espontánea';
document.body.appendChild(nuevoElemento);
document.getElementById('div-id').appendChild(nuevoElemento);

// Eliminar elementos del DOM
parrafo = document.querySelector('.parrafo');
parrafo.remove();

const padre = document.createElement('div');
const hijo = document.createElement('p');

// Método .append()
// Añadir nodo elemento
padre.append(hijo);
// <div><p>...</p></div>

// Añadir nodo texto
padre.append('Texto Añadido');

// Método .appendChild()
const padreDos = document.createElement('div');
const hijoDos = document.createElement('p');
// <div><p>...</p></div>

padreDos.appendChild(hijoDos);
// padreDos.appendChild('Nuevo texto'); // No válido.

/**
 * Eliminar elementos del DOM
 */

// Directamente
parrafo = document.querySelector('.parrafo');
parrafo.remove();

// Desde su elemento padre
const listaEnlacesDos = document.querySelector('#enlaces');
console.log(listaEnlacesDos.children);
listaEnlacesDos.removeChild(listaEnlacesDos.children[2]);

// Método parentElement
const elLi = document.querySelectorAll('li')[1].parentElement;
console.log(elLi);

// Método toggle
h1.classList.toggle('fondo'); // asigna y quita alternativamente la clase al elemento, cada vez que llamamos al método.
