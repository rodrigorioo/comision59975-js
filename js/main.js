/**
 * GET ELEMENTS BY ID
 */

// const div = document.getElementById("divGeneral");
// const titulo = document.getElementById("tituloh1");

// console.log(div.innerHTML);
// console.log(titulo.innerHTML);

/**
 * GET ELEMENTS BY CLASS NAME
 */

// const parrafos = document.getElementsByClassName("parrafo");

/**
 * GET ELEMENTS BY TAG NAME
 */

// const parrafos = document.getElementsByTagName("p");

// console.log(parrafos);

// Recorrer Lista de nodos
// for (const etiquetaP of parrafos) {
//     console.log(etiquetaP.innerHTML);
// }

/**
 * MODIFICAR NODOS
 */

// const div = document.getElementById("divGeneral");

// div.innerHTML = '<h4>NUEVA ETIQUETA EDITADA</h4>';
// div.innerText = '<h4>NUEVA ETIQUETA EDITADA</h4>';

// Modificar clases

// const parrafos = document.getElementsByClassName("parrafo");
//
// for (const parrafo of parrafos) {
//     parrafo.innerHTML = "PARRAFO EDITADO";
//
//     // Pisamos todas las clases y asignamos una nueva
//     // parrafo.className = "parrafo2";
//
//     // Agregamos una clase nueva a las ya existentes
//     parrafo.className = parrafo.className + " negrita";
// }

/**
 * AGREGAR O QUITAR NODOS
 */

// const div = document.getElementById("divGeneral");
//
// const etiquetaH3 = document.createElement("h3");
// etiquetaH3.innerHTML = 'Texto etiqueta H3';
//
// const etiquetaP = document.createElement("p");
// etiquetaP.className = "parrafo2";
// etiquetaP.innerHTML = "PARRAFO DE LA ETIQUETA QUE ACABO DE AGREGAR";
//
// div.append(etiquetaH3);
// div.append(etiquetaP);

// const h1 = document.getElementById("tituloh1");
//
// const strong = document.createElement("strong");
// strong.innerHTML = "TEXTO EN NEGRITA";
//
// h1.append(strong);

/**
 * REMOVER ELEMENTO
 */

// const parrafos = document.getElementsByClassName("parrafo");
//
// for (const parrafo of parrafos) {
//     parrafo.remove();
// }

// const div = document.getElementById("divGeneral");
//
// const etiquetaH3 = document.createElement("h3");
// etiquetaH3.innerHTML = 'Texto etiqueta H3';
//
// div.append(etiquetaH3);
//
// // ...
// // ...
//
// // Eliminamos la etiqueta H3 que creamos previamente
// etiquetaH3.remove();

/**
 * OBTENER DATOS DE INPUT
 */

// const input = document.getElementById("inputDePrueba");
//
// input.value = "Pedro";

/**
 * PLANTILLAS LITERALES
 */

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }
//
// const producto = new Producto("Yogurt", 20);
//
// const p = document.getElementById("parrafoProducto");
// p.innerHTML = "Nombre del producto: " + producto.nombre + " - Precio: $" + producto.precio;
// p.innerHTML = `Nombre del producto: ${producto.nombre} - Precio: $${producto.precio}`;

// p.innerHTML = "Texto 1<br>" +
//     "Texto 2<br>" +
//     "Texto 3";
// p.innerHTML = `Texto 1<br>
// Texto 2<br>
// Texto 3`;

/**
 * QUERY SELECTORS
 */

// const p = document.querySelector("#divQuerySelector p.parrafo2");
//
// console.log(p);

// const parrafos = document.querySelectorAll("#divQuerySelector p.jqewkjew");
//
// console.log(parrafos);

/**
 * EJEMPLO DE DOM
 */

// Objetos
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Funciones
function renderizarProductos(productos) {
    const ul = document.createElement("ul");

    for (const producto of productos) {

        const li = document.createElement("li");
        li.innerHTML = `<strong>Nombre:</strong> ${producto.nombre} - <strong>Precio</strong> $${producto.precio}`;

        ul.append(li);
    }

    div.append(ul);
}


// Inicio del programa
const div = document.getElementById("contenedor");
const productos = [
    new Producto("Tomates", 50),
    new Producto("Yogurt", 90),
    new Producto("Jabon", 15),
    new Producto("Manteca", 25),
];

renderizarProductos(productos);