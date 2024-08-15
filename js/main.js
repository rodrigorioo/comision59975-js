// Crear variable con var (NO USAR)
// var profesor = "Rodrigo";

// Crear variables con let y const
// let edad;
// const nombre = "Pedro";

// Cambiar el valor de una variable let
// edad = 40;
// edad = 50;
// edad = 60;

// Cambiar de valor una variable const
// nombre = "óñqwjkeqkwjekjwq";

/*
    OPERACIONES CON VARIABLES
 */

// const numero1 = 10;
// const numero2 = 20;
// const numero3 = 30;
// const numero4 = 40;
//
// const resultadoSuma = numero1 + numero2; // 30
// const resultadoResta = numero3 - numero1; // 20
// const resultadoMultiplicacion = numero1 * numero2; // 200
// const resultadoDivision = numero3 / numero1; // 3
//
// const resultadoSuma2 = numero1 + numero2 + numero4 * numero3 / numero1 + 50;
// // 10 + 20 + 40 * 30 / 10 + 50

// Operaciones con strings

// const nombre = "Pepe";
// const segundoNombre = "Juan";
// const apellido = "Rodriguez";
// const espacio = " ";
//
// const nombreCompleto = nombre + apellido; // "PepeRodriguez"
// const nombreCompleto2 = nombre + segundoNombre + apellido; // "PepeJuanRodriguez"
//
// const nombreCompletoConEspacios = nombre + espacio + segundoNombre + espacio + apellido; // "Pepe Juan Rodriguez"

/*
    PROMPT, CONSOLA Y ALERT
 */

// const numero1 = 10;
// const numero2 = 20;
// const numero3 = 30;
// const numero4 = 40;
//
// const resultadoSuma = numero1 + numero2; // 30
// const resultadoResta = numero3 - numero1; // 20
// const resultadoMultiplicacion = numero1 * numero2; // 200
// const resultadoDivision = numero3 / numero1; // 3
//
// console.log(resultadoSuma);
// console.log(resultadoResta);
// console.log(resultadoMultiplicacion);
// console.log(resultadoDivision);
//
// const nombre = "Fernando";
//
// console.log(nombre);
//
// const edad = "50";
//
// console.log(edad);

// let numero = 50;
//
// console.log(numero);
//
// numero = 60;
//
// console.log(numero);

/*
    PROMPT
 */

// const nombre = prompt("Ingrese el nombre");
// const apellido = prompt("Ingrese el apellido");
//
// const nombreCompleto = nombre + " " + apellido;
//
// console.log("Bienvenido " + nombreCompleto);

// PROMPT CON LOS NUMEROS
// const numero1 = parseInt(prompt("Ingrese un numero"));
// const numero2 = parseInt(prompt("Ingrese otro numero"));
//
// const resultadoSuma = numero1 + numero2;
//
// console.log(resultadoSuma);

// ALERT
// const numero1 = parseInt(prompt("Ingrese un numero"));
// alert("Se ingresó el número 1");
// const numero2 = parseInt(prompt("Ingrese otro numero"));
//
// const resultadoSuma = numero1 + numero2;
//
// alert("El resultado de la suma es: " + resultadoSuma);

// DECIMALES CON PROMPT Y PARSE INT
// const numero1 = parseFloat(prompt("Ingrese un numero"));
// const numero2 = parseFloat(prompt("Ingrese otro número"));
//
// // Suma con decimales
// const resultadoNumero = numero1 + numero2;
// // Suma con enteros
// const resultadoEntero = parseInt(numero1) + parseInt(numero2);
//
// console.log("Resultado con decimales: " + resultadoNumero);
// console.log("Resultado con enteros: " + resultadoEntero);

/**
 * EJERCICIOS
 *
 * 2) Escriba un programa en dónde el usuario ingrese el lado de un cuadrado y se
 * calcule el perímetro
 */

const ladoCuadrado = parseFloat(prompt("Ingrese el lado de un cuadrado"));

const perimetroCuadrado = ladoCuadrado * 4;

alert("El perímetro del cuadrado es: " + perimetroCuadrado);