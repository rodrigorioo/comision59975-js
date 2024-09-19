/**
 * GUARDAR EN STORAGE
 */

// localStorage.setItem("cantidadProductosEnCarrito", 5);
// localStorage.setItem("nombre", "Rodrigo");
//
// localStorage.setItem("nombre", "Pedro");

/**
 * OBTENER VALOR DE STORAGE
 */

// const nombre = localStorage.getItem("nombre");

// const cantidadProductosEnCarrito = parseInt(localStorage.getItem("cantidadProductosEnCarrito"));
//
// console.log(cantidadProductosEnCarrito);

/**
 * ALMACENAR ARRAYS
 */
// const nombres = ["Pepe", "Juan", "Pedro"];
//
// localStorage.setItem("nombres", nombres);

// const nombres = localStorage.getItem("nombres").split(",");
//
// console.log(nombres);

/**
 * RECORRER STORAGE
 */

// for(let i = 0; i < localStorage.length; i++) {
//     const nombreClave = localStorage.key(i);
//     const valor = localStorage.getItem(nombreClave);
//
//     console.log(`Clave: ${nombreClave} - Valor: ${valor}`);
// }

/**
 * ELIMINAR DATOS STORAGE
 */

// localStorage.removeItem("cantidadProductosEnCarrito");
// localStorage.clear();

/**
 * ALMACENAR OBJETOS STORAGE
 */

const persona = {
    nombre: "Pedro",
    edad: 25,
    verNombre: () => {
        console.log(this.nombre);
    },
    profesion: "Profesor",
};
//
// const personaJSON = JSON.stringify(persona);
//
// localStorage.setItem("persona", personaJSON);

// Obtener objetos JSON en Storage

// const personaJSON = localStorage.getItem("persona");
//
// const persona = JSON.parse(personaJSON);
//
// console.log(persona);

// Guardar arrays como JSON
// const nombres = ["Pedro", "Gabriel", "Juan"];
//
// const nombresJSON = JSON.stringify(nombres);
//
// localStorage.setItem("nombres", nombresJSON);

// const nombresJSON = localStorage.getItem("nombres");
//
// const nombres = JSON.parse(nombresJSON);
//
// console.log(nombres);

// Parsear JSON con formato malo

// const persona = JSON.parse('{"nombre":"Pedro","edad":25,"profesion":Profesor"}');
//
// console.log(persona);

/**
 * EJEMPLO COMPLETO
 */

// Objetos
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Funciones
function eliminarProducto(nombre) {

    // Filtro los productos y obtengo todos menos el del nombre que quiero eliminar
    listaProductos = listaProductos.filter( (el) => {
        return el.nombre.toLowerCase() !== nombre.toLowerCase();
    });

    // Renderizar productos
    renderizarProductos();

    // Actualizar localStorage
    actualizarLS();
}

function actualizarLS() {
    const productosJSON = JSON.stringify(listaProductos);

    localStorage.setItem("productos", productosJSON);
}

function obtenerProductosLS() {
    const productosJSON = localStorage.getItem("productos");

    // Si el usuario no tiene nada en localstorage
    if(productosJSON === null) {

        return [
            new Producto("Yogurt", 25),
            new Producto("Tomates", 30),
            new Producto("Papa", 20),
        ];

    } else {

        // Si el usuario tiene algo guardado en localStorage, lo parseamos y lo devolvemos

        return JSON.parse(productosJSON);

    }
}

function renderizarProductos() {

    tbodyProductos.innerHTML = "";

    for(const producto of listaProductos) {

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${producto.nombre}</td>
        `;

        // Crear td con precio
        const tdPrecio = document.createElement("td");
        const p = document.createElement("p");
        p.innerText = `$${producto.precio}`;
        tdPrecio.append(p);

        p.addEventListener("click", () => {

            const inputNuevoPrecio = document.createElement("input");

            inputNuevoPrecio.addEventListener("change", () => {
                 const nuevoPrecio = inputNuevoPrecio.value;

                 producto.precio = parseFloat(nuevoPrecio);

                 // Actualizar LS
                 actualizarLS();

                 // Volver a agregar la etiqueta p actualizada
                p.innerText = `$${producto.precio}`;
                tdPrecio.innerHTML = "";
                tdPrecio.append(p);

                // Remover input
                inputNuevoPrecio.remove();
            });

            tdPrecio.innerHTML = "";
            tdPrecio.append(inputNuevoPrecio);
        });

        // Crear td con boton de eliminar
        const tdAcciones = document.createElement("td");
        const botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";

        botonEliminar.addEventListener("click", () => {

            eliminarProducto(producto.nombre);

        });

        tdAcciones.append(botonEliminar);

        // Agregar td al tr
        tr.append(tdPrecio);
        tr.append(tdAcciones);

        // Agregar tr al tbody
        tbodyProductos.append(tr);
    }
}

function agregarProducto(nombre, precio) {

    const buscarProducto = listaProductos.find( (el) => {
        return el.nombre.toLowerCase() === nombre.toLowerCase();
    });


    if(buscarProducto === undefined) {
        // Si el producto no existe

        listaProductos.push(
            new Producto(nombre, parseFloat(precio)),
        );
    } else {
        // Si el producto existe

        buscarProducto.precio = parseFloat(precio);
    }

    // Actualizar LocalStorage
    actualizarLS();

    // Renderizar productos
    renderizarProductos();
}

// Inicio del programa
let listaProductos = obtenerProductosLS();

const formAgregarProducto = document.getElementById("formAgregarProducto");
const inputNombreProducto = document.getElementById("nombreProducto");
const inputPrecioProducto = document.getElementById("precioProducto");
const tbodyProductos = document.getElementById("tbodyProductos");

formAgregarProducto.addEventListener("submit", (e) => {

    e.preventDefault();

    const nombre = inputNombreProducto.value;
    const precio = inputPrecioProducto.value;

    agregarProducto(nombre, precio);
});

renderizarProductos();