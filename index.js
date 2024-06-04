let a;
let b;
let resultado;
let seapreto = false;

let display = document.querySelector(".resultado");
let boton1 = document.querySelector(".uno");
boton1.addEventListener("click",() => {
    display.innerHTML = "1";
    if(seapreto){
        b = 1;
    } else { 
        a= 1;
    }
})
let boton2 = document.querySelector(".dos");
boton2.addEventListener("click",() => {
    display.innerHTML = "2";
    if(seapreto){
        b = 2;
    } else { 
        a= 2;
    }
    
})
let boton3 = document.querySelector(".tres");
boton3.addEventListener("click",() => {
    display.innerHTML = "3";
    if(seapreto){
        b = 3;
    } else { 
        a= 3;
    }
})

let botonmas = document.querySelector(".mas");
botonmas.addEventListener("click",() => {
    display.innerHTML = "+";
    seapreto = true;
})

let botonigual = document.querySelector(".igual");
botonigual.addEventListener("click",() => {
    sumar(a,b);
})

function sumar (a,b){
    resultado = a + b;
    display.innerHTML = resultado;
    a=0;
    b=0;
    seapreto = false;
}