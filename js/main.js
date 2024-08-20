/**
 * CONDICIONALES FORZANDO LA CONDICIÓN A TRUE O FALSE
 */

// if (false) {
//     const nombre = prompt("Ingrese el nombre");
//
//     console.log("HOLA");
//     console.log("CÓMO ESTÁS?");
//     console.log("BIENVENIDOS A JAVASCRIPT");
// }
//
// if (true) {
//     console.log("Hola 2");
// }
//
// console.log("Fin del if");

/**
 * OPERADOR DE EQUIVALENCIA
 */

// ESTO ES VERDADERO
// const anio = 2024;
//
// if (anio == 2024) {
//     console.log("EL AÑO ES 2024");
// }

// ESTO ES FALSO
// const anio = 2024;
//
// if (anio == 2025) {
//     console.log("EL AÑO ES 2024");
// }

// COMPARACIÓN CON STRING
// const nombre = prompt("Ingrese el nombre");
//
// if(nombre == "Pepe") {
//     console.log("HOLA PEPE CÓMO ESTÁS?");
// }

/**
 * IF - ELSE
 */

// const nombre = prompt("Ingrese el nombre");
//
// if (nombre == "Pepe") {
//     console.log("HOLA PEPE CÓMO ESTÁS?");
// } else {
//     console.log("USTED NO ES PEPE");
// }

// ESTO ES UNA ESTRUCTURA CONDICIONAL APARTE DE LA DE ARRIBA ^
// if (nombre == "Juan") {
//     console.log("USTED ES JUAN");
// } else {
//     console.log("USTED NO ES JUAN");
// }

/**
 * IF, ELSE IF
 */

// const nombre = prompt("Ingrese el nombre");
//
// if (nombre == "Pepe") {
//     console.log("HOLA PEPE CÓMO ESTÁS?");
// } else if (nombre == "Juan") {
//     console.log("HOLA JUAN CÓMO ESTÁS?");
// } else if (nombre == "Pedro") {
//     console.log("HOLA PEDRO CÓMO ESTÁS?");
// } else {
//     console.log("USTED NO ES PEPE, NI JUAN NI PEDRO");
// }

/**
 * VALORES BOOLEANOS
 */

// const nombre = prompt("Ingrese el nombre");
// const esPepe = (nombre == "Pepe");
//
// console.log(esPepe);
//
// if (esPepe) {
//     console.log("HOLA PEPE CÓMO ESTÁS?");
// } else {
//     console.log("USTED NO ES PEPE");
// }

/**
 * OPERADORES LÓGICOS
 */

// ES DISTINTO
// const numero = 15;
//
// if (numero != 10) {
//     console.log("El número es distinto de 10");
// }

// MAYOR, MENOR O IGUAL
// const numero = 10;

// if (numero > 5) {
//     console.log("El numero es mayor a 5");
// }
//
// if (numero < 20) {
//     console.log("El numero es menor a 20");
// }

// if (numero >= 10) {
//     console.log("El numero es mayor o igual a 10");
// }
//
// if (numero <= 20) {
//     console.log("El numero es menor o igual a 20");
// }

/**
 * OPERADOR AND Y OR
 */

// AND
// const nombre = prompt("Ingres el nombre");
// const apellido = prompt("Ingrese el apellido");
//
// if ( (nombre == "Pepe") && (apellido == "Rodriguez") ) {
//     console.log("Bienvenido Pepe Rodriguez");
// }

// OR
// const nombre = prompt("Ingrese el nombre");
//
// if ( (nombre == "Pepe") || (nombre == "Juan") ) {
//     console.log("Bienvenido Juan o Pepe");
// }

/**
 * OPERADOR AND Y OR CONJUNTOS
 */

// OPERACIONES CONJUNTAS CON AND
// const nombre = prompt("Ingrese un nombre");
// const apellido = prompt("Ingrese un apellido");
// const edad = parseInt(prompt("Ingrese la edad"));
//
// if (
//     (nombre == "Pepe") &&
//     (apellido == "Rodriguez") &&
//     (edad >= 18)
// ) {
//     console.log("Bienvenido Pepe Rodriguez, que tiene más de 18");
// }

// OPERACIONES CONJUNTAS CON OR
// const nombre = prompt("Ingrese un nombre");
//
// if (
//     (nombre == "Juan") ||
//     (nombre == "Pedro") ||
//     (nombre == "Marcos")
// ) {
//     console.log("Bienvenido Juan, Pedro o Marcos");
// }

// COMBINAR AND Y OR
// const nombre = prompt("Ingrese un nombre");
// const edad = parseInt(prompt("Ingrese la edad"));

// ESTE ESTA BIEN
// if (
//     ( (nombre == "Pepe") || (nombre == "Juan") ) &&
//     ( edad >= 18 )
// ) {
//     console.log("Bienvenido Pepe o Juan, que tiene más de 18");
// }

// ESTE ESTA MAL!!!! CUIDADO CON LOS PARENTESIS
// if (
//     (nombre == "Pepe") ||
//     ( (nombre == "Juan") && ( edad >= 18 ) )
// ) {
//     console.log("Bienvenido Pepe o Juan, que tiene más de 18");
// }

/**
 * OPERADORES ESTRICTOS
 */

// IGUALES
// const numero1 = "15";
// const numero2 = "15";
//
// if (numero1 == numero2) {
//     console.log("Son iguales");
// }
//
// if (numero1 === numero2) {
//     console.log("Son estrictamente iguales");
// }

// DISTINTOS
// const numero1 = 15;
// const numero2 = "15";
//
// if (numero1 != numero2) {
//     console.log("Son distintos");
// }
//
// if (numero1 !== numero2) {
//     console.log("Son estrictamente distintos");
// }

/**
 * OPERADOR NOT
 */

// const numero1 = 20;
// const esNumero20 = (numero1 === 20);
//
// if (esNumero20) {
//     console.log("El numero es 20");
// }

// ........
// ....
// .........

// if (!esNumero20) {
//     console.log("No es número 20");
// }

/**
 * OPERADOR DE RESTO
 */

// const division = 5 % 2;
//
// console.log(division);
