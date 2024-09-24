/**
 * SUGAR SYNTAX
 */

// let var1 = 5;

// var1 = var1 + 5;
// var1 += 5;

// var1 = var1 + 1;
// var1++;

// var1--;
// var1 -= 3;

// console.log(var1);

/**
 * OPERADOR TERNARIO
 */

// const numero = 15;
//
// if(numero === 10) {
//     console.log("Numero es igual a 10");
// } else {
//     console.log("NUmero no es igual a 10");
// }
//
// (numero === 10) ? console.log("Numero es igual a 10") : console.log("Numero no es igual a 10");

// Return implícito

// const persona = {
//     nombre: "Pedro",
//     edad: 26,
// };

// let acceso = false;
// if(persona.nombre === "Pedro" && persona.edad === 25) {
//     acceso = true;
// } else {
//     acceso = false;
// }

// const acceso = (persona.nombre === "Pedro" && persona.edad === 25) ? true : false;
//
// console.log(acceso);

/**
 * OPERADOR AND
 */

// const persona = {
//     nombre: "Juan",
//     edad: 25,
// };

// if(persona.edad === 25) {
//     console.log("TIene 25 años");
// }

// (persona.edad === 25) && console.log("TIene 25 años");

// Return implícito

// let acceso = false;
// if(persona.nombre === "Pedro") {
//     acceso = true;
// }

// const acceso = (persona.nombre === "Pedro") && true;
// const acceso = (persona.nombre === "Pedro") && "Tiene acceso permitido";

// console.log(acceso);

/**
 * OPERADOR OR
 */

// const string = "1500";

// const numero = parseInt(string);
// const numero = parseInt(string) || 0;

// console.log(numero);

// let productos = [];
// const productosJSON = localStorage.getItem("productos2");
//
// if(productosJSON === null) {
//     productos = [];
// } else {
//     productos = JSON.parse(productosJSON);
// }

// const productos = JSON.parse(localStorage.getItem("productos2")) || [];
//
// console.log(productos);

/**
 * ACCESO CONDICIONAL A UN OBJETO
 */

// const persona = {
//     nombre: "Juan",
//     edad: 20,
//     profesion: {
//         nombreProfesion: "Maestro",
//     },
//     trabajo: {
//         nombreTrabajo: "Profesor",
//         fechaDeIngreso: {
//             fecha: "20/05/2021",
//         }
//     }
// }
//
// const fecha = persona.trabajo?.fechaDeIngreso?.fecha;

// if(fecha === undefined) {
//     console.log("No tiene definida la fecha");
// } else {
//     console.log(fecha);
// }

// (fecha === undefined) ? console.log("No tiene definida la fecha") : console.log(fecha);
//
// console.log("fin del programa");

/**
 * DESESTRUCTURACIÓN
 */

// const producto = {
//     nombre: "Yogurt",
//     precio: 20,
//     categoria: {
//         nombre: "Lacteos",
//         almacen: {
//             nombre: "Almacen 1",
//         }
//     }
// }

// const nombre = producto.nombre;
// const precio = producto.precio;
// const categoria = producto.categoria;

// const { nombre, precio, categoria } = producto;

// console.log(nombre);
// console.log(precio);
// console.log(categoria);

// const { nombre, precio, categoria: { nombreCategoria } } = producto;
//
// console.log(nombre);
// console.log(precio);
// console.log(nombreCategoria);

// const {
//     nombre,
//     precio,
//     categoria: {
//         nombre: nombreCategoria,
//         almacen: {
//             nombre: nombreAlmacen,
//         }
//     }
// } = producto;
//
// console.log(nombre);
// console.log(precio);
// console.log(nombreCategoria);
// console.log(nombreAlmacen);

// function test() {
//     const {
//         nombre,
//         precio,
//         categoria: {
//             nombre: nombreCategoria,
//             almacen: {
//                 nombre: nombreAlmacen,
//             }
//         }
//     } = producto;
//
//     console.log(nombre);
//     console.log(precio);
//     console.log(nombreCategoria);
//     console.log(nombreAlmacen);
// }

/**
 * DESESTRUCTURACIÓN EN PARÁMETROS
 */

// function mostrarPersona({nombre, edad}) {
//
//     console.log(`El nombre es: ${nombre}`);
//     console.log(`La edad es: ${edad}`);
// }
//
// const persona = {
//     nombre: "Juan",
//     edad: 20,
// }
//
// mostrarPersona(persona);

// const cuadrado = document.getElementById("cuadrado");
//
// cuadrado.addEventListener("click", ({x, y}) => {
//
//     // const x = e.x;
//     // const y = e.y;
//
//     console.log(x);
//     console.log(y);
// })

/**
 * DESESTRUCTURACIÓN DE ARRAYS
 */

// class Producto {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }
//
// const productos = [
//     new Producto("Yogurt", 25),
//     new Producto("Pescado", 50),
//     new Producto("Leche", 20),
//     new Producto("Lechuga", 40),
// ];

// const [producto1,,,producto4] = productos;
//
// console.log(producto1);
// console.log(producto4);

// const [producto1,,,,producto5] = productos;
//
// console.log(producto1);
// console.log(producto5);