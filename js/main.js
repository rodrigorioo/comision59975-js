/**
 * DECLARAR ARRAY
 */

// const nombres = ["Pedro", "Juan", "Mariano"];
//
// const segundoNombre = nombres[1];
//
// const saludo = "Hola " + segundoNombre + " cómo estás";
//
// console.log(saludo);

/**
 * RECORRER LISTA
 */

// const nombresDeProductos = [
//     'Yogurt',
//     'Leche',
//     'Manteca',
//     'Lechuga',
//     'Tomate',
//     'Papa',
// ];
//
// for(let i = 0; i < nombresDeProductos.length; i++) {
//     console.log(nombresDeProductos[i]);
// }

/**
 * AGREGAR ELEMENTOS A LA LISTA
 */

// const nombres = ["Juan", "Pedro"];

// Forma 1
// nombres.push("Mariano");
// nombres.push("Pepe");

// Forma 2 - Varios elementos a la vez
// nombres.push("Mariano", "Pepe");

// nombres.unshift("Andres");
//
// console.log(nombres);

/**
 * ELIMINAR ELEMENTOS DEL ARRAY
 */

// const productos = [
//     'Leche',
//     'Tomates',
//     'Papa',
//     'Crema',
// ];
//
// // Elimina al final
// productos.pop();
//
// // Elimina al principio
// productos.shift();
//
// console.log(productos);

/**
 * SPLICE
 */

// const productos = [
//     'Leche',
//     'Tomates',
//     'Papa',
//     'Crema',
//     'Jabon',
// ];

// Eliminar elementos del medio
// productos.splice(1, 3);

// Eliminar desde el índice en adelante
// productos.splice(2);

// Eliminar los 2 primeros elementos
// productos.splice(0, 2);

// Esto no elimina nada
// productos.splice(1, 0);

// El método splice me devuelve un nuevo array con los elementos eliminados
// const eliminados = productos.splice(1, 2);

// console.log(productos);

/**
 * JOIN
 */

// const productos = [
//     'Leche',
//     'Tomates',
//     'Papa',
//     'Crema',
//     'Jabon',
// ];
//
// const listaDeProductos = productos.join("___");
//
// console.log(listaDeProductos);

/**
 * CONCAT
 */

// const productos1 = [
//     "Tomates",
//     "Leche",
// ];
// const productos2 = [
//     "Jabon",
//     "Papa",
// ];

// Forma 1
// for(let i = 0; i < productos2.length; i++) {
//     productos1.push(productos2[i]);
// }

// Forma 2 con concat
// const productos = productos1.concat(productos2);

// console.log(productos1);
// console.log(productos2);

// console.log(productos);

/**
 * SLICE
 */

// const productos = [
//     'Leche',
//     'Tomates',
//     'Papa',
//     'Crema',
//     'Jabon',
// ];

// const productosDelMedio = productos.slice(1, 4);

// Esto copia desde el índice hasta el final
// const productosDelMedio = productos.slice(1);

// Esto no copia nada, ya que el segundo índice tiene que ser mayor al primero
// const productosDelMedio = productos.slice(2, 0);

// console.log(productosDelMedio);

/**
 * INDEX OF
 */

// const nombres = [
//     'pedro',
//     'juan',
//     'miguel',
// ];
//
// const nombreABuscar = prompt("Ingrese el nombre");
//
// console.log(
//     nombres.indexOf(
//         nombreABuscar.toLowerCase()
//     )
// );

/**
 * INCLUDES
 */

// const nombres = [
//     'pedro',
//     'juan',
//     'miguel',
// ];
//
// console.log(
//     nombres.includes('juan')
// );

/**
 * REVERSE
 */

// const nombres = [
//     "Papa",
//     "Yogurt",
//     "Jabon",
//     "Manzana",
//     "Arroz",
// ];
//
// nombres.reverse();
//
// console.log(nombres);

/**
 * ARRAYS CON OBJETOS
 */

// Objetos
// class Producto {
//     constructor (nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
//
//     calcularSubtotal(cantidad) {
//         return cantidad * this.precio;
//     }
// }
//
// // Funciones
//
// // Versión 1
// // function encontrarProducto(nombreProducto) {
// //     let indice = -1;
// //
// //     for(let i = 0; i < listaDeProductos.length; i++) {
// //
// //         const producto = listaDeProductos[i];
// //
// //         if(producto.nombre === nombreProducto) {
// //             indice = i;
// //             break;
// //         }
// //
// //     }
// //
// //     return indice;
// // }
//
// // Versión 2 - CON FOR OF
// function encontrarProducto(nombreProducto) {
//     let elemento = false;
//
//     for(const producto of listaDeProductos) {
//         if(
//             producto.nombre.toLowerCase() === nombreProducto.toLowerCase()
//         ) {
//             elemento = producto;
//             break;
//         }
//     }
//
//     return elemento;
// }
//
// // Inicio del programa
// const producto1 = new Producto("Arroz", 15);
// const producto2 = new Producto("Jabon", 25);
// const producto3 = new Producto("Tomate", 50);
//
// const listaDeProductos = [
//     producto1,
//     producto2,
//     producto3,
// ];
//
// let nombreDeProducto = prompt("Ingrese el nombre del producto - ESC PARA SALIR");
//
// while(nombreDeProducto !== "ESC") {
//
//     const productoEncontrado = encontrarProducto(nombreDeProducto);
//
//     // El producto fue encontrado
//     if(productoEncontrado !== false) {
//
//         const cantidad = parseInt(prompt("Ingrese la cantidad"));
//
//         const subtotal = productoEncontrado.calcularSubtotal(cantidad);
//
//         alert("EL SUBTOTAL ES: $" + subtotal);
//
//     } else {
//         alert("PRODUCTO NO EXISTE");
//     }
//
//     nombreDeProducto = prompt("Ingrese el nombre del producto - ESC PARA SALIR");
// }

/**
 * EJERCICIO
 * 7) Escriba una función que tome un array de números y devuelva un nuevo array solo con los números pares. Ej: Si se le da el array [1, 3, 4, 6, 8, 9] tiene que devolver el array [4, 6, 8]
 */

// function devolverNumerosPares(array) {
//     const devolver = [];
//
//     for(const numero of array) {
//
//         // Si el número es par
//         if(numero % 2 === 0) {
//             devolver.push(numero);
//         }
//
//     }
//
//     return devolver;
// }
//
// const array = [1, 3, 4, 6, 8, 9];
//
// const numerosPares = devolverNumerosPares(array);
//
// console.log(numerosPares);

/**
 * MISMO EJERCICIO PERO QUE EL USUARIO INGRESE LOS NUMEROS
 */

function devolverNumerosPares(array) {
    const devolver = [];

    for(const numero of array) {

        // Si el número es par
        if(numero % 2 === 0) {
            devolver.push(numero);
        }

    }

    return devolver;
}

const array = [];

let numero = parseInt(prompt("Ingrese un número - Ingrese 0 para salir"));

while(numero !== 0) {
    array.push(numero);

    numero = parseInt(prompt("Ingrese un número - Ingrese 0 para salir"));
}

console.log(array);

const numerosPares = devolverNumerosPares(array);

console.log(numerosPares);