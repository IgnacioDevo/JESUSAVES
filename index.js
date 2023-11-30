/* Funcion Card */
function showImage(cartita) {
    cartita.querySelector('.initial-image').style.display = 'none';
    cartita.querySelector('.hover-image').style.display = 'block';
}

function hideImage(cartita) {
    cartita.querySelector('.initial-image').style.display = 'block';
    cartita.querySelector('.hover-image').style.display = 'none';
}

/* Objetos Remeras */

let RemeraColecction1 = {
    nombre: "Remera 1",
    talle: "S",
    stock: 10
}


let RemeraColecction2 = {
    nombre: "Remera 2",
    talle: "M",
    stock: 5
}


let RemeraColecction3 = {
    nombre: "Remera 1",
    talle: "XL",
    stock: 2
}


let RemeraColecction4 = {
    nombre: "Remera 1",
    talle: "XS",
    stock: 40
}


let RemeraColecction5 = {
    nombre: "Remera 1",
    talle: "XXL",
    stock: 3
}

let catalogoRemeras = [RemeraColecction1, RemeraColecction2, RemeraColecction3, RemeraColecction4, RemeraColecction5];

console.log(catalogoRemeras);