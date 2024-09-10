/**
 * CEIL, FLOOR Y ROUND
 */

// console.log(Math.ceil(3.000001));

// console.log(Math.floor(3.99999999999));

// console.log(Math.round(3.5));

/**
 * RANDOM
 */

// const techo = parseInt(prompt("Ingrese hasta que número quiere un random"));
//
// const random = Math.round(Math.random() * techo);
//
// console.log(random);

/**
 * EJEMPLO DE RANDOM
 */

// class Producto {
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.precio = Math.round(Math.random() * 20 + 10);
//     }
// }
//
// const producto1 = new Producto("Tomates");
// const producto2 = new Producto("Yogurt");
//
// console.log(producto1);
// console.log(producto2);

/**
 * OBJETO DATE
 */

// Instanciar fecha de hoy
// const fechaHoy = new Date();
//
// console.log(fechaHoy);

// Instanciar fecha de ayer
// const fechaAyer = new Date(2024, 8, 9, 8, 30);
//
// console.log(fechaAyer);

// Obtener propiedades de una fecha
// const fechaAyer = new Date(2024, 8, 9, 8, 30);

// console.log(fechaAyer.getMinutes());

// Formatear fechas
// console.log(fechaAyer.toLocaleDateString());

/**
 * DIFERENCIA ENTRE FECHAS
 */

const fecha1 = new Date(2024, 7, 5, 10, 30); // Agosto
const fecha2 = new Date(2024, 8, 5, 10, 30); // Septiembre

// const diferencia = fecha2 - fecha1;
const diferencia = Math.abs(fecha1 - fecha2);

console.log(diferencia);

// Calculo de dias
// const milisegundosPorDia = 86400000;

// console.log(diferencia / milisegundosPorDia);