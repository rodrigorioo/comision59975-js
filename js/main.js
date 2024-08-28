/*
EJEMPLO DE PREENTREGA

AL MENOS UN CONDICIONAL - ✅
AL MENOS UN CICLO - ✅
AL MENOS UNA FUNCIÓN - ✅
 */

// Funciones
// function obtenerPrecioDelProducto() {
//     let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
//
//     // Mientras el precio del producto sea menor o igual a cero
//     while(precioProducto <= 0) {
//         alert("PRECIO DEL PRODUCTO INVÁLIDO, VUELVA A INGRESAR OTRO");
//
//         precioProducto = parseFloat(prompt("Ingrese el precio del producto"));
//     }
//
//     return precioProducto;
// }

//
// // Inicio del programa
// let nombreProducto = prompt("Ingrese el nombre de un producto - ESCRIBA EXIT PARA SALIR DEL PROGRAMA");
// let listaDeProductos = "";
// let totalProductos = 0;
//
// while(nombreProducto !== "EXIT") {
//
//     // Pedimos y validamos precio del producto
//     const precioProducto = obtenerPrecioDelProducto();
//
//     // Sumar el precio del producto al total
//     totalProductos = totalProductos + precioProducto;
//
//     if(listaDeProductos !== '') {
//         listaDeProductos = listaDeProductos + " - ";
//     }
//
//     listaDeProductos = listaDeProductos + nombreProducto;
//
//     // Volvemos a pedir nombre del producto
//     nombreProducto = prompt("Ingrese el nombre de un producto - ESCRIBA EXIT PARA SALIR DEL PROGRAMA");
// }
//
// console.log("Total de productos: $" + totalProductos);
// console.log("Lista de productos: " + listaDeProductos);

/**
 * EJERCICIOS CICLOS
 * 5) Realizar un programa en donde se le pida al usuario 2 números y realice su división mediante restas sucesivas (Ej.: El usuario ingresa los números 6 y 3, por lo cual la división sería: 6 - 3 - 3 y tendría que devolver 2).
 */

// let numero1 = parseInt(prompt("Ingrese un número"));
// const numero2 = parseInt(prompt("Ingrese otro número"));
// let resultado = 0;
//
// while (numero1 >= numero2) {
//     numero1 = numero1 - numero2;
//     resultado++;
// }
//
// console.log("El resultado de la división: " + resultado);

/**
 * 9) Realice un programa en donde se le solicite un número al usuario y le muestre en pantalla cuántos dígitos tiene. (Ej: Si ingreso 27, tiene que mostrarme 2. Si ingreso 115 me tiene que mostrar 3).
 *  AYUDA: Dividir por 10 a un número le remueve un dígito.
 */

// let numero = parseInt(prompt("Ingrese un número"));
// let cantidadDeDigitos = 0;
//
// while (numero > 0) {
//     numero = parseInt(numero / 10);
//
//     cantidadDeDigitos++;
// }
//
// console.log("La cantidad de digitos es: " + cantidadDeDigitos);

/**
 * EJERCICIOS FUNCIONES
 *
 * 10) Escribir una función que le pida al usuario un número entero entre 1 y 20 y devuelva el número que ingresó. Se necesita validar que el número sea entre 1 y 20, por lo que si el usuario ingresa un número erróneo se le tiene que volver a pedir hasta que ingrese un número correcto.
 */

// Funciones
function obtenerNumero () {
    let numero = parseFloat(prompt("Ingrese un número"));

    while(numero < 1 || numero > 20) {
        alert("El número tiene que estar entre 1 y 20");

        numero = parseFloat(prompt("Ingrese un número"));
    }

    return numero;
}

// Inicio del programa
const numeroIngresado = obtenerNumero();

console.log("El número que ingresó el usuario es: " + numeroIngresado);

