// 1 – Desarrollar una aplicación en JS que simule un corrector de exámenes, 
// de tal manera que en función del valor numérico de la nota devuelva 
// insuficiente, suficiente, bien, notable o sobresaliente.
// Insuficiente: Hasta 4,99
// Suficiente: desde 5,00 hasta 5,50
// Bien: desde 5,51 hasta 7,49
// Notable: desde 7,50 hasta 9,00
// Sobresaliente: Desde 9,01 hasta 10

nota=parseFloat(prompt("Digame la nota obtenida "));

    if (nota>0 && nota<4.99){
        console.log("Insuficiente");
    }
    else if (nota>=5 && nota<5.5){
        console.log("Suficiente");
    }
    else if(nota>5.5 && nota<7.49){
        console.log("Bien");
    }
    else if(nota>7.50 && nota<9){
        console.log("Notable")
    }
    else if (nota>9.01 && nota<10){
        console.log("Sobresaliente")
    }
    else{
        console.log("La nota introducida no es la correcta")
    }

// 2- Crear una aplicación en JS que simule un carrito de compra
// que contemple los siguientes casos en sus diferentes combinaciones:
// cliente logueado, cliente con crédito.
// En cada caso emitirá un mensaje indicativo del resultado de la condición. 
// Ejemplo: Cliente está en el sistema (logueado) y no tiene crédito.


lg=Math.round(Math.random()*10);
cr=Math.round(Math.random()*10);


if((lg%2)===0 && (cr%2)===0){
    console.log("El cliente está logeado y tiene credito")
}else if((lg%2)===0 && (cr%2)!=0){
    console.log("El cliente está logeado y no tiene credito")
}else if((lg%2)!=0 && (cr%2)===0){
    console.log("El cliente no está logeado pero tiene credito")
}else if((lg%2)!=0 && (cr%2)!=0){
    console.log("El cliente ni está logeado y ni tiene credito")
}