/**
 * FOR
 */

// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let i = 0; i < 5; i++) {
//     const nombre = prompt("Ingrese un nombre");
//     console.log("Su nombre es: " + nombre);
// }

// Sentencia Break

// for(let i = 0; i < 5; i++) {
//     const nombre = prompt("Ingrese un nombre");
//
//     if(nombre == "Matias") {
//         console.log("Se ingresó Matías");
//         break;
//     }
//
//     console.log("Su nombre es: " + nombre);
// }
//
// console.log("Finalizó el for");

// Sentencia continue
// for(let i = 0; i < 5; i++) {
//     const nombre = prompt("Ingrese un nombre");
//
//     if(nombre == "Juan" || nombre == "Pedro") {
//         continue;
//     }
//
//     console.log("Su nombre es: " + nombre);
// }
//
// console.log("Finalizó el for");

// Ciclo for mostrando pares
// for(let i = 0; i <= 10; i = i + 2) {
//     console.log(i);
// }

/**
 * WHILE
 */

// let nombre = prompt("Ingrese un nombre");
//
// while(nombre != "SALIR") {
//     console.log("Su nombre es: " + nombre);
//
//     nombre = prompt("Ingrese un nuevo nombre, o 'SALIR' para salir");
// }
//
// console.log("Fin del ciclo");

// Break y continue en while
// let nombre = prompt("Ingrese un nombre");
// let i = 0;
//
// while (nombre != "SALIR") {
//     console.log("Su nombre es: " + nombre);
//
//     i++;
//
//     // Sentencia break
//     // if(i == 3) {
//     //     break;
//     // }
//
//     // Sentencia continue
//     // if(i % 2 == 0) {
//     //     console.log("El i es par");
//     //     continue;
//     // }
//
//     nombre = prompt("Ingrese un nuevo nombre, o 'SALIR' para salir");
// }
//
// console.log("Fin del ciclo");

// Ejemplo de while
// let opcion = parseInt(prompt("Ingrese la opción. 1- Atención al cliente, 2- Soporte técnico, 3- Ventas, 0- Salir"));
//
// while(opcion != 0) {
//
//     if(opcion == 1) {
//         console.log("Atención al cliente");
//     } else if(opcion == 2) {
//         console.log("Soporte técnico");
//     } else if(opcion == 3) {
//         console.log("Ventas");
//     } else {
//         console.log("Opción inválida");
//     }
//
//     opcion = parseInt(prompt("Ingrese la opción. 1- Atención al cliente, 2- Soporte técnico, 3- Ventas, 0- Salir"));
// }

/**
 * DO WHILE
 */

// let nombre = prompt("Ingrese un nombre");

// CON WHILE SE EVALÚA LA CONDICIÓN ANTES DE ENTRAR
// while(nombre != "SALIR") {
//     console.log("Su nombre es: " + nombre);
//
//     nombre = prompt("Ingrese un nuevo nombre, o 'SALIR' para salir");
// }

// CON DO WHILE SE EVALÚA LA CONDICIÓN AL FINAL, POR LO TANTO LO QUE ESTÁ ADENTRO SE EJECUTA AL MENOS UNA VEZ
// do {
//     console.log("Su nombre es: " + nombre);
//
//     nombre = prompt("Ingrese un nuevo nombre, o 'SALIR' para salir");
// } while(nombre != "SALIR");

/**
 * SWITCH
 */

// let opcion = parseInt(prompt("Ingrese la opción. 1- Atención al cliente, 2- Soporte técnico, 3- Ventas, 0- Salir"));
//
// while(opcion != 0) {
//
//     // Evaluar opciones
//     switch (opcion) {
//         case 1:
//             console.log("Atención al cliente");
//             break;
//
//         case 2:
//
//             let opcionSoporteTecnico = parseInt(prompt("Ingrese la opción. 1- Soporte de internet, 2- Soporte de TV, 0- Volver al menu anterior"));
//
//             while (opcionSoporteTecnico != 0) {
//
//                 // Opción #1 con IF
//                 if(opcionSoporteTecnico == 1) {
//                     console.log("Soporte de internet");
//                 } else if(opcionSoporteTecnico == 2) {
//                     console.log("Soporte de TV");
//                 } else {
//                     console.log("Opción inválida");
//                 }
//
//                 // Opción #2 con switch
//                 // switch (opcionSoporteTecnico) {
//                 //     case 1:
//                 //         console.log("Soporte de internet");
//                 //         break;
//                 //
//                 //     case 2:
//                 //         console.log("Soporte de TV");
//                 //         break;
//                 //
//                 //     default:
//                 //         console.log("Opción inválida");
//                 //         break;
//                 // }
//
//                 opcionSoporteTecnico = parseInt(prompt("Ingrese la opción. 1- Soporte de internet, 2- Soporte de TV, 0- Volver al menu anterior"));
//             }
//
//             break;
//
//         case 3:
//             console.log("Ventas");
//             break;
//
//         default:
//             console.log("Opción inválida");
//             break;
//     }
//
//     opcion = parseInt(prompt("Ingrese la opción. 1- Atención al cliente, 2- Soporte técnico, 3- Ventas, 0- Salir"));
// }