/**
 * CREAR FUNCIÓN
 */
// function imprimirNombre() {
//     const nombre = prompt("Ingrese un nombre");
//     console.log("Hola! Su nombre es: " + nombre);
// }
//
// // Llamamos a la función varias veces para pedir un nombre e imprimirlo en consola
// imprimirNombre();
//
// console.log("Se inicia el programa");
//
// imprimirNombre();
//
// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }
//
// imprimirNombre();
//
//
// imprimirNombre();

/**
 * PARÁMETROS
 */

// function saludar(nombre) {
//     console.log("Hola! Su nombre es: " + nombre);
// }
//
// // saludar("Juan");
// // saludar("Pedro");
//
// const nombreDePersona = prompt("Ingrese un nombre");
//
// saludar(nombreDePersona);

/*
EJEMPLO DE FUNCIÓN CON DOS PARÁMETROS
 */

// function saludar(mensaje, nombre) {
//     console.log(mensaje + " " + nombre);
// }
//
// saludar("Hola! Tu nombre es:", "Rodrigo");
// saludar("Hi! How are you?", "Mike");

/*
EJEMPLO DE FUNCIONES CON NUMEROS
 */

// function sumar(numero1, numero2) {
//     const resultado = numero1 + numero2;
//
//     console.log("El resultado es: " + resultado);
// }
//
// // Pedir numeros por prompt y enviarlos a la función
// const numero1 = parseInt(prompt("Ingrese numero"));
// const numero2 = parseInt(prompt("Ingrese otro numero"));
//
// sumar(numero1, numero2);

// Llamar a la función con los números directamente
// sumar(10, 5);
// sumar(20, 10);
// sumar(80, 20);

// A los parámetros les puedo pasar cualquier tipo de valor ya que JavaScript no chequea el tipado de ellos
// sumar("hola", "todo bien?");

/**
 * RETURN
 */

// Ejemplo 1
// function obtenerSaludo(mensaje, nombre) {
//     return mensaje + " " + nombre;
// }
//
// const saludo = obtenerSaludo("Hola! Que tal", "Miguel");
//
// console.log(saludo);

// Ejemplo 2
// function multiplicar(numero1, numero2) {
//     const resultado = numero1 * numero2;
//
//     return resultado;
// }
//
// function restar(numero1, numero2) {
//     return numero1 - numero2;
// }
//
// const resultadoMultiplicacion = multiplicar(5, 2);
// const resultadoResta = restar(resultadoMultiplicacion, 3);
//
// console.log(resultadoResta);

/**
 * SCOPE
 */

// let nombre = "Damian";
// // let apellido = "Perez";
//
// if (true) {
//    nombre = "Pedro";
//
//    // let apellido = "Rodriguez";
//
//    if (true) {
//        // let apellido = "Gonzalez";
//        console.log(apellido);
//    }
// }
//
// console.log(nombre + " " + apellido);

/**
 * FUNCIONES ANÓNIMAS
 */

// const multiplicar = function(numero1, numero2) {
//     return numero1 * numero2;
// }
//
// const numero1 = parseInt(prompt("Ingrese el número"));
// const numero2 = parseInt(prompt("Ingrese otro número"));
//
// const resultadoMultiplicacion = multiplicar(numero1, numero2);
// console.log(resultadoMultiplicacion);

// const saludar = function(nombre) {
//     return "Hola como estás " + nombre;
// }
//
// const saludo = saludar("Pepe");
// console.log(saludo);

/**
 * FUNCION FLECHA
 */

// Declaración típica de función
// const multiplicar = function (numero1, numero2) {
//     return numero1 * numero2;
// }

// Declaración con función flecha
// const multiplicar = (numero1, numero2) => numero1 * numero2;
//
// const resultadoMultiplicacion = multiplicar(30, 3);
//
// console.log(resultadoMultiplicacion);

// Función flecha sin return implícito
// const saludar = (nombre) => {
//     console.log("Hola como estás");
//     console.log("Mi nombre es: " + nombre);
// }
//
// saludar("Pepe");

/**
 * EJERCICIOS
 */

/*
7) Escribir una función que reciba 4 números como parámetros y devuelva su
promedio.
 */

// Funciones
// function promedio(
//     nota1,
//     nota2,
//     nota3,
//     nota4,
// ) {
//     const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
//
//     return promedio;
// }
//
// // Inicio del programa
// const nota1 = parseInt(prompt("Ingrese la nota 1"));
// const nota2 = parseInt(prompt("Ingrese la nota 2"));
// const nota3 = parseInt(prompt("Ingrese la nota 3"));
// const nota4 = parseInt(prompt("Ingrese la nota 4"));
//
// const calculoPromedio = promedio(
//     nota1,
//     nota2,
//     nota3,
//     nota4,
// );
//
// console.log("Su promedio es: " + calculoPromedio);