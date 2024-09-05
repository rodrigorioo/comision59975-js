/**
 * FUNCIONES QUE RETORNAN FUNCIONES
 */

/** SIN FUNCIONES DE ÓRDEN SUPERIOR */

// function mayorQueDiez(numero) {
//     return numero > 10;
// }
//
// function mayorQueVeinte(numero) {
//     return numero > 20;
// }
//
// function mayorQueQuince(numero) {
//     return numero > 15;
// }
//
// function mayorQueTreinta(numero) {
//     return numero > 30;
// }

/** LO MISMO CON FUNCIÓN DE ÓRDEN SUPERIOR */

// function mayorQue (numeroAComparar) {
//     return function(numero) {
//         return numero > numeroAComparar;
//     }
// }
//
// const mayorQueDiez = mayorQue(10);
// /*
// function(numero) {
//     return numero > 10;
// }
//  */
// const mayorQueVeinte = mayorQue(20);
// /*
// function(numero) {
//     return numero > 20;
// }
//  */
// const mayorQueQuince = mayorQue(15);
// /*
// function(numero) {
//     return numero > 15;
// }
//  */
// const mayorQueTreinta = mayorQue(30);
// /*
// function(numero) {
//     return numero > 30;
// }
//  */
//
// /*
// INICIO DEL PROGRAMA
//  */
//
// console.log(mayorQueDiez(20));
// console.log(mayorQueVeinte(20));
// console.log(mayorQueQuince(20));

/**
 * FUNCIONES QUE RECIBAN OTRA FUNCIÓN COMO PARAMÉTRO
 */

// function porCadaUno (arr, funcion) {
//     for(const elemento of arr) {
//         funcion(elemento);
//     }
// }
//
// const numeros = [1, 2, 3, 4, 5];

// porCadaUno(numeros, function (el) {
//     console.log(el * 2);
// });

// porCadaUno(numeros, function (el) {
//     console.log("Se está recorriendo el elemento: " + el);
// });

/**
 * EJEMPLO 2
 */

/* FORMA VIEJA CON FUNCIONES */

// function mostrarMensajeDeBienvenida(nombre) {
//     console.log("Bienvenido " + nombre);
// }
//
// function mostrarMensajeDeError(nombre) {
//     console.log("El nombre de usuario " + nombre + " es inválido");
// }
//
// function autenticarUsuario(nombreUsuario) {
//     return nombreUsuario === "Juan";
// }

/* FORMA NUEVA CON FUNCIONES DE ÓRDEN SUPERIOR */

// function autenticarUsuario(
//     nombreUsuario,
//     funcionAutenticacionValida,
//     funcionAutenticacionFalla,
// ) {
//
//     if(nombreUsuario === "Juan") {
//         funcionAutenticacionValida(nombreUsuario);
//     } else {
//         funcionAutenticacionFalla(nombreUsuario);
//     }
// }

// Inicio del programa
// const nombreDelUsuario = "Martin";

/* FORMA CON FUNCIONES */
// const usuarioAutenticado = autenticarUsuario(nombreDelUsuario);
//
// if(!usuarioAutenticado) {
//     mostrarMensajeDeError(nombreDelUsuario);
// } else {
//     mostrarMensajeDeBienvenida(nombreDelUsuario);
// }

/* FORMA CON FUNCIONES DE ÓRDEN SUPERIOR */

// autenticarUsuario(
//     nombreDelUsuario,
//     function(nombre) {
//         console.log("Bienvenido " + nombre);
//     },
//     function(nombre) {
//         console.log("Nombre de usuario " + nombre + " incorrecto.");
//     }
// )

// ...
// ...
// ...
// ...
// ...

// const usuarioAutenticado2 = autenticarUsuario(nombreDelUsuario);
//
// if(!usuarioAutenticado2) {
//     mostrarMensajeDeError(nombreDelUsuario);
// } else {
//     mostrarMensajeDeBienvenida(nombreDelUsuario);
// }

// autenticarUsuario(
//     nombreDelUsuario,
//     function(nombre) {
//         console.log("Bienvenido " + nombre);
//     },
//     function(nombre) {
//         alert("NOMBRE DE USUARIO INCORRECTO");
//         console.log("Nombre de usuario " + nombre + " incorrecto.");
//     }
// )

/**
 * FUNCIONES DE ÓRDEN SUPERIOR
 */

// FOR EACH

// const personas = [
//     {
//         nombre: "Pepe",
//         edad: 15,
//         profesion: "Plomero",
//     },
//     {
//         nombre: "Juan",
//         edad: 25,
//         profesion: "Gasista",
//     },
//     {
//         nombre: "Pedro",
//         edad: 20,
//         profesion: "Electricista",
//     },
//     {
//         nombre: "Juan",
//         edad: 45,
//         profesion: "Barrendero",
//     },
// ];

// personas.forEach( (el) => {
//      console.log("El nombre es: " + el.nombre);
// });

// FIND

// const juan = personas.find( (el) => {
//     return el.nombre === "Juan";
// });

// FILTER

// const juanes = personas.filter( (el) => {
//     return el.nombre === "Juan";
// });

// SOME

// const existePepe = personas.some( (el) => {
//     return el.nombre === "qwjkeqwjkeqwkjeqwjk";
// });

// MAP

// const edades = personas.map( (el) => {
//     return el.edad;
// });

// const personasSinEdad = personas.map( (el) => {
//     return {
//         nombre: el.nombre,
//         profesion: el.profesion,
//     }
// });
//
// console.log(personasSinEdad);

// REDUCE

const carrito = [
    {
        nombre: "Yogurt",
        precio: 15,
        cantidad: 2,
    },
    {
        nombre: "Pepino",
        precio: 20,
        cantidad: 4,
    },
    {
        nombre: "Leche",
        precio: 25,
        cantidad: 3,
    },
    {
        nombre: "Lechuga",
        precio: 20,
        cantidad: 1,
    },
    {
        nombre: "laurel",
        precio: 40,
        cantidad: 2,
    },
];

// const subtotal = carrito.reduce( (acc, el) => {
//     return acc + (el.precio * el.cantidad);
// }, 0);
//
// console.log(subtotal);

// SORT

// ORDENAR POR PRECIO
// carrito.sort( (a, b) => {
//     if(a.precio > b.precio) {
//         return 1;
//     } else if(a.precio < b.precio) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// ORDENAR POR NOMBRE
carrito.sort( (a, b) => {
    if(a.nombre.toLowerCase() > b.nombre.toLowerCase()) {
        return 1;
    } else if(a.nombre.toLowerCase() < b.nombre.toLowerCase()) {
        return -1;
    } else {
        return 0;
    }
});

console.log(carrito);