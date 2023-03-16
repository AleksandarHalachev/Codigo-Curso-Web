//Ejercicio 1

const sus = document.querySelector('#sus');
sus.style.backgroundColor = 'black';
sus.style.padding = '1rem';
sus.style.color = 'white';

sus.onclick = () =>{
  if(sus.style.backgroundColor === 'black'){
    sus.innerHTML = "Suscrito"
    sus.style.backgroundColor = 'red';  
    sus.style.padding = '1rem';
  }else if(sus.style.backgroundColor === 'red'){
    sus.innerHTML = "Suscribirse"
    sus.style.color = 'white';
    sus.style.backgroundColor = 'black';
    sus.style.padding = '1rem';
  }
}

//Ejercicio 2

cafe = document.getElementById("cafe");
cafe.style.padding = "1rem";
cafe.style.backgroundColor = 'orange';

infoCafe = document.createElement('div');
cafe.append(infoCafe);

cafe.addEventListener('mouseenter', () =>{
  infoCafe.innerText = 'los granos tostados y molidos de los frutos de la planta del café (cafeto); es altamente estimulante por su contenido de cafeína, una sustancia psicoactiva, Es uno de los productos más comercializados a nivel mundial, además de estar entre las tres bebidas más consumidas por el ser humano (junto con el agua y el té). Suele tomarse durante o después del desayuno, y puede llegar a ser considerado para muchas personas como único desayuno, aunque también se toma en diferentes ocasiones y a diversas horas del día, como en la merienda, después del almuerzo o cena; y es ideal para entablar conversaciones, y en muchos países por costumbre o tradición se reparte en reuniones familiares como funerales; Es por ello que es valorada en diferentes países del mundo como una de las bebidas sin alcohol más socializadoras que existen. El gusto por el café no siempre ha sido espontáneo en las culturas mundiales y las nuevas generaciones, sino que casi siempre debe ser cultivado, puesto que su sabor original es fuerte y amargo.';
  infoCafe.style.display = 'block';
})

cafe.addEventListener('mouseout', () =>{
  infoCafe.style.display = 'none';
})

//Ejercicio 3

productos = [];

añadirProd = document.getElementById("producto");
producto = document.getElementById("escribirProd");
añadirProd.onclick = () =>{
  productos.push(producto.value);
  producto.value = "";
  console.table(productos);
}

//Ejercicio 4

color = document.getElementById("color");
cajas = document.querySelectorAll(".parrafos");

cajas.forEach(element =>{
  element.addEventListener("mouseenter", () =>{
    element.style.backgroundColor = color.value;
  })
  element.addEventListener("mouseout", () =>{
    element.style.backgroundColor = "grey";
  })
  element.addEventListener("click",() =>{
    element.style.backgroundColor = color.value;
    element.addEventListener("mouseout", () =>{
      element.style.backgroundColor = color.value;
    })
  })
  
})

//Ejercicio 5

enviar = document.getElementById("enviar");
datos = document.getElementById("datos");
nombre = document.getElementById("nombre");
email = document.getElementById("email");
password = document.getElementById("password");

enviar.addEventListener("submit", (evento) => {
  evento.preventDefault();
  datos.innerHTML = `Datos: <br> ${nombre.value} <br> ${email.value} <br> ${password.value}`;
})

