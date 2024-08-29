/*
    CREAR OBJETO PERSONA QUE CONTENGA LAS 3 PROPIEDADES
 */

// const nombre = "Pepe";
// const apellido = "Rodriguez";
// const edad = 30;

// ...
// ...

// const persona = {
//     nombre: "Pepe",
//     apellido: "Rodriguez",
//     edad: 30,
// }

// console.log(persona);
// console.log("Nombre: " + persona.nombre + " - Apellido: " + persona.apellido);

/*
    ACCEDER A PROPIEDADES DEL OBJETO
 */

// console.log(persona.apellido);
// console.log(persona["edad"]);

// ACCEDER PROPIEDADES QUE NO EXISTEN
// console.log(persona.jwqkejkqwejk);
// console.log(persona["jkwekjqwekjqwkj"]);

/*
    MODIFICAR PROPIEDADES DE UN OBJETO
 */

// const persona = {
//     nombre: "Pepe",
//     apellido: "Rodriguez",
//     edad: 30,
// }
//
// persona.edad = 31;
// persona.edad++;
//
// persona.nombre = "Gonzalo";

// console.log(persona.edad);
// console.log(persona.nombre);

// console.log(persona);

/*
    CREAR OBJETOS CON PROMPTS
 */

// Forma 1
// const producto = {
//     nombre: "",
//     precio: 0,
//     stock: 0,
// }
//
// const nombreProducto = prompt("Ingrese nombre de producto");
// const precioProducto = parseFloat(prompt("Ingrese precio"));
// const stockProducto = parseInt(prompt("Ingrese stock"));
//
// producto.nombre = nombreProducto;
// producto.precio = precioProducto;
// producto.stock = stockProducto;

// Forma 2

// const nombreProducto = prompt("Ingrese nombre de producto");
// const precioProducto = parseFloat(prompt("Ingrese precio"));
// const stockProducto = parseInt(prompt("Ingrese stock"));
//
// const producto = {
//     nombre: nombreProducto,
//     precio: precioProducto,
//     stock: stockProducto,
// }
//
// console.log(producto);

/**
 * CONSTRUCTORES
 */

// const persona1 = {
//     nombre: "Pepe",
//     apellido: "Gonzalez",
//     edad: 30,
// }
//
// const persona2 = {
//     nombre: "Gonzalo",
//     apellido: "Rodriguez",
//     edad: 40,
// }
//
// const persona3 = {
//     // ...
// }

// function Persona (nombre, apellido, edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// }

// const persona1 = new Persona("Pepe", "Gonzalez", 30);
// const persona2 = new Persona("Gonzalo", "Rodriguez", 40);
// const persona3 = new Persona("Juan", "Ramirez", 50);
//
// console.log(persona1);
// console.log(persona2);
// console.log(persona3);

// Creo objeto dónde la propiedad edad es undefined porque no le paso ningún valor
// const persona4 = new Persona("Pepe", "Gonzalez");
//
// console.log(persona4);

/**
 * MÉTODOS
 */

// function Persona (nombre, apellido, edad) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
//
//     this.saludar = function(nombre) {
//         console.log("Hola!" + nombre);
//     }
// }
//
// const persona1 = new Persona("Pepe", "Gonzalez", 32);
//
// // console.log(persona1);
// persona1.saludar("Lautaro");

/*
    OBJETO STRING
 */

// const nombre = "Hola Pepe";

// console.log(typeof nombre);

// Utilizar propiedades y métodos de los strings
// console.log(nombre.length);
// console.log(nombre.toUpperCase());
// console.log(nombre.toLowerCase());
// console.log(nombre);

// const nuevoString = nombre.concat(" ¿Cómo estás?");
// console.log(nuevoString);

// Objeto número
// const numero = 5;
//
// console.log(typeof numero);

/**
 * OPERADOR IN Y FOR IN
 */

// const persona = {
//     nombre: "Pepe",
//     edad: 20,
//     apellido: "Gonzalez",
//     profesion: "Programador",
// }
//
// // console.log("jkqwekjqwekj" in persona);
//
// for(const nombrePropiedad in persona) {
//     console.log("Propiedad: " + nombrePropiedad + " - Valor: " + persona[nombrePropiedad]);
// }

/**
 * CLASES
 */

/*
function Persona (nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.saludar = function(nombre) {
        console.log("Hola!" + nombre);
    }
}
 */

// class Persona {
//     constructor (nombre, apellido, edad) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//     }
//
//     saludar() {
//         console.log("Hola! " + this.nombre);
//     }
//
//     cambiarNombre(nombre) {
//         this.nombre = nombre;
//     }
// }
//
// const persona1 = new Persona("Pepe", "Gonzalez", 40);
// const persona2 = new Persona("Lautaro", "Rodriguez", 35);
//
// console.log(persona1);
// console.log(persona2);
//
// persona1.cambiarNombre("Martin");
// persona1.saludar();
//
// persona2.saludar();

/*
    CLASE PRODUCTO
 */
// class Producto {
//
//     constructor(nombre, precio, cantidad) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.cantidad = cantidad;
//         this.stock = 5;
//     }
//
//     descontarStock() {
//         this.stock--;
//     }
//
//     sumarStock() {
//         this.stock++;
//     }
//
//     devolverSubtotal() {
//         return this.cantidad * this.precio;
//     }
//
//     total() {
//         return this.devolverSubtotal() * 1.21;
//     }
// }
//
// const producto = new Producto("Jabon", 50, 3);
//
// // ...
// // ...
//
// producto.descontarStock();
//
// const subtotal = producto.devolverSubtotal();
// console.log(subtotal);
//
// const total = producto.total();
// console.log(total);

/**
 * VALORES POR REFERENCIA
 */

// Copiar valores en variables
// let numero1 = 10;
// let numero2 = numero1;
//
// numero1 = 20;
//
// console.log(numero1); // 20
// console.log(numero2); // 10

// Con los objetos...
let persona1 = {
    nombre: "Gonzalo",
    edad: 30,
}
let persona2 = persona1;

persona1.nombre = "Pepe";

persona2.nombre = "Lautaro";

console.log(persona1.nombre); // "Pepe"
console.log(persona2.nombre); // "Pepe"