// const variable1 = "hola";
//
// setTimeout( () => {
//     console.log(variable1);
// }, 3000);
//
// setTimeout( () => {
//     for(let i = 0; i < 10; i++) {
//         console.log(i);
//     }
// }, 2000);
//
// setTimeout( () => {
//     console.log("como estas");
// }, 1000);

/**
 * SINCRONISMO CON ASINCRONISMO
 */

// const variable1 = "hola";
//
// setTimeout( () => {
//     console.log(variable1);
// }, 2000);
//
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// setTimeout( () => {
//     console.log("como estas");
// }, 1000);

/**
 *
 */

// const variable1 = "hola";
//
// setTimeout( () => {
//     console.log(variable1);
// }, 0);
//
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// console.log("como estas");

/**
 * CALL STACK
 */

// function multiplicar(numero1, numero2) {
//
//     debugger;
//
//     return numero1 * numero2;
// }
//
// function calcular2(numero1, numero2) {
//
//     debugger;
//
//     const multiplo = multiplicar(numero1, numero2);
//
//     debugger;
//
//     return multiplo;
// }
//
// function calcular(numero1, numero2) {
//     debugger;
//
//     const calculo = calcular2(numero1, numero2);
//
//     debugger;
//
//     return calculi;
// }
//
// console.log(calcular(10, 20));

/**
 * EVENT LOOP
 */

// const variable1 = "hola";
//
// setTimeout( () => {
//     console.log(variable1);
// }, 2000);
//
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// setTimeout( () => {
//     console.log("como estas");
// }, 1000);

/**
 * SET INTERVAL
 */

// const interval = setInterval( () => {
//     for(let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }, 2000);
//
// const timeout = setTimeout( () => {
//     clearInterval(interval);
//     console.log("Se eliminó el intervalo");
// }, 3000);

/**
 * PROMESAS
 */

// const promesa = new Promise( (resolve, reject) => {
//
//     // Acción asincrónica
//     // Cuerpo de la promesa...
//
// });
//
// console.log(promesa);

// Login

// function login() {
//     return new Promise( (resolve, reject) => {
//
//         // Simular request a una API para el login
//         setTimeout( () => {
//
//             console.log("Se procesó el request...");
//
//             if(
//                 usuario === "rodri" &&
//                 password === "123"
//             ) {
//                 resolve({
//                     id: 4,
//                     email: "rodri@email.com",
//                 });
//             } else {
//                 reject("Usuario o contraseña inválidos");
//             }
//
//         }, 3000);
//
//     });
// }
//
// const usuario = "rodri";
// const password = "1234";
//
// // console.log(login());
//
// login()
//     .then( (response) => {
//
//         console.log(response);
//         console.log("La promesa se acepta");
//
//     })
//     .catch( (err) => {
//
//         console.log(err);
//         console.log("La promesa se rechaza");
//
//     })
//     .finally( () => {
//         console.log("Finalizó el proceso de login");
//     });

// console.log("1");
// console.log("2");
// console.log("3");

/**
 * EJEMPLO DE PROMESAS
 */

// Funciones
function obtenerProductos() {
    return new Promise( (resolve, reject) => {

        setTimeout( () => {

            const numeroRandom = Math.round(Math.random());

            // Si el número es 1, la API anda bien
            if(numeroRandom) {
                const productos = [
                    {nombre: "Pepino", precio: 20},
                    {nombre: "Tomates", precio: 50},
                    {nombre: "Jabón", precio: 75},
                    {nombre: "Lechuga", precio: 25},
                    {nombre: "Yogurt", precio: 30},
                ];
                const jsonProductos = JSON.stringify(productos);

                resolve(jsonProductos);
            } else {
                reject("Error en la API");
            }

        }, 1500);
    });
}

function renderizarProductos(productos) {

    tbodyProductos.innerHTML = "";

    for(const producto of productos) {

        tbodyProductos.innerHTML += `<tr>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            </tr>
        `;
    }
}

// Inicio del programa
const tbodyProductos = document.getElementById("tbodyProductos");

obtenerProductos()
    .then( (response) => {

        const productos = JSON.parse(response);

        renderizarProductos(productos);
    })
    .catch( (err) => {
        alert(err);
    });

// ...
// ...
// ...