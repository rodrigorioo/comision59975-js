// const boton = document.getElementById("botonsito");

// Forma 1 - Con función anónima
// boton.addEventListener("click", () => {
//     console.log("Clickeame");
// });

// Forma 2 - Con función ya definida
// function callbackClickeame() {
//     console.log("Clickeame 2");
// }
//
// boton.addEventListener("click", callbackClickeame);

/**
 * EVENTOS DEL MOUSE
 */

// const cajita = document.getElementById("cajita");

// cajita.addEventListener("mousedown", () => {
//     // Cuando se oprime el mouse...
//     cajita.className = "caja caja-verde";
// });
//
// cajita.addEventListener("mouseup", () => {
//     // Cuando se suelta el mouse...
//     cajita.className = "caja";
// });

// let elementoNuevo;
//
// cajita.addEventListener("mouseover", () => {
//     // Puntero entra al elemento...
//     cajita.className = "caja";
//
//     elementoNuevo = document.createElement("div");
//     elementoNuevo.className = "caja-chiquita caja-verde";
//
//     cajita.append(elementoNuevo);
// });
//
// cajita.addEventListener("mouseout", () => {
//     // Puntero sale del elemento...
//     cajita.className = "caja";
//
//     elementoNuevo.remove();
// });

// cajita.addEventListener("mousemove", () => {
//     console.log("Se movió");
// });

// cajita.addEventListener("click", () => {
//     console.log("se clickeo el div");
// });

/**
 * EVENTOS DEL TECLADO
 */

// const input = document.getElementById("inputsito");

// input.addEventListener("keydown", () => {
//     console.log("Se oprime una tecla");
// });
//
// input.addEventListener("keyup", () => {
//     console.log("Suelto la tecla");
// });

// input.addEventListener("change", () => {
//     console.log("El valor del input es: " + input.value);
// });
//
// input.addEventListener("input", () => {
//     console.log("Se tecleó: " + input.value);
// });

/**
 * EVENTO SUBMIT
 */

// const formulario = document.getElementById("formsito");
// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
//
// formulario.addEventListener("submit", (e) => {
//
//     e.preventDefault();
//
//     console.log("Valor del input1: " + input1.value);
//     console.log("Valor del input2: " + input2.value);
// });

/**
 * OBJETO EVENT Y PREVENT DEFAULT
 */

// const input1 = document.getElementById("input1");

// Input que no acepta vocales
// input1.addEventListener("keydown", (e) => {
//
//     const vocales = ["a", "e", "i", "o", "u"];
//     const key = e.key;
//
//     if(vocales.includes(key)) {
//         e.preventDefault();
//     }
// });

// Input que formatee el valor a un CUIT (20-11111111-1)
// input1.addEventListener("keydown", (e) => {
//
//     const val = input1.value;
//     const key = e.key;
//
//     if(
//         (val.length === 1 || val.length === 10) &&
//         key !== "Backspace"
//     ) {
//         e.preventDefault();
//         input1.value = `${val}${key}-`;
//     }
// });

/**
 * EJEMPLO COMPLETO
 */

// Objetos
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    generarTR() {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${this.nombre}</td>
            <td>$${this.precio}</td>
        `;

        return tr;
    }
}

// Funciones
function renderizarProductos() {

    tbodyTablaProductos.innerHTML = "";

    for(const producto of productosFiltrados) {
        tbodyTablaProductos.append(producto.generarTR());
    }
}

function ordenarProductos() {

    productosFiltrados.sort( (a, b) => {

        if(ordenarPrecioAsc) {
            // Ordenar ascendentemente...

            if(a.precio > b.precio) {
                return 1;
            } else if(a.precio < b.precio) {
                return -1;
            }

            return 0;

        } else {

            // Ordenar descendentemente...
            if(a.precio > b.precio) {
                return -1;
            } else if(a.precio < b.precio) {
                return 1;
            }

            return 0;
        }

    });

    renderizarProductos();
}

// Inicio del programa
const listaDeProductos = [
    new Producto("Tomates", 50),
    new Producto("Papa", 15),
    new Producto("Yogurt", 25),
    new Producto("Lechuga", 30),
];
let productosFiltrados = listaDeProductos;
let ordenarPrecioAsc = true;

const formularioAgregarProducto = document.getElementById("formAgregarProducto");
const nombreProducto = document.getElementById("nombreProducto");
const precioProducto = document.getElementById("precioProducto");
const tbodyTablaProductos = document.getElementById("tbodyTablaProductos");
const inputBuscarProducto = document.getElementById("buscarProducto");
const thPrecio = document.getElementById("thPrecio");

formularioAgregarProducto.addEventListener("submit", (e) => {
    e.preventDefault();

    // Creamos el objeto
    const producto = new Producto(
        nombreProducto.value,
        parseFloat(precioProducto.value),
    );

    // Lo agregamos a la lista
    listaDeProductos.push(producto);

    // Limpiamos los input
    nombreProducto.value = "";
    precioProducto.value = "";

    // Renderizamos la tabla
    renderizarProductos();
});

inputBuscarProducto.addEventListener("input", () => {

    // Obtener el valor del input cada vez que se ejecuta el evento
    const val = inputBuscarProducto.value;

    productosFiltrados = listaDeProductos.filter( (el) => {
         return el.nombre.toLowerCase().includes(val.toLowerCase());
    });

    renderizarProductos();
});

thPrecio.addEventListener("click", () => {
    ordenarPrecioAsc = !ordenarPrecioAsc;

    ordenarProductos();
});

// Renderizar productos
renderizarProductos();
