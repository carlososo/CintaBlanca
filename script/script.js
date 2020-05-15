'use strict'

//Empezamos!
console.log("Si estoy jalando");

const platillos = ["Enchiladas", "Taco", "Tamal", "Pozole", "Barbacoa", "Picada"];

document.getElementById('arregloPlatillos').innerHTML = (platillos.join(", "));

function mostrarPlatillos(platillos) {
    let arregloPlatillos = [];
    for (let i = 0; i < platillos.length; i++) {
        arregloPlatillos.push(platillos[i]);
    }
    return arregloPlatillos;

}
let listaUno = mostrarPlatillos(platillos);
console.log("Mostrando valores desde una function", listaUno);

//Mediante un ciclo FOR y condicional if, muestra solo el pozole y la barbacoa

function platilloComparacion(platillos) {
    const comparacion = [];
    for (let i = 0; i < platillos.length; i++) {
        if (platillos[i] === "Pozole" || platillos[i] === "Barbacoa") {
            comparacion.push(platillos[i]);
        }

    }
    return comparacion;
}
let listaDos = platilloComparacion(platillos);
console.log(listaDos);
document.getElementById('comparacion').innerHTML = ("comparación: " + listaDos.join(", "));

//Mediante un ciclo for y condicional IF, muestra los elementos Impares

function pares(platillos) {

    let cont = 1;
    let arregloPlatillos = [];
    for (let i = 0; i < platillos.length; i++) {
        if (cont % 2 == 0) {
            arregloPlatillos.push(platillos[i]);
        }
        cont++;
    }
    return arregloPlatillos;
}
let listaTres = pares(platillos);
console.log(listaTres);
document.getElementById('pares').innerHTML = ("Pares: " + listaTres.join(", "));

//Mediante un ciclo for y condicional IF, muestra los elementos pares


function impares(platillos) {

    let cont = 1;
    let arregloPlatillos = [];
    for (let i = 0; i < platillos.length; i++) {
        if (cont % 2 != 0) {
            arregloPlatillos.push(platillos[i]);
        }
        cont++;
    }
    return arregloPlatillos;
}
let listaCuatro = impares(platillos);
console.log(listaCuatro);
document.getElementById('impares').innerHTML = ("impares: " + listaCuatro.join(", "));