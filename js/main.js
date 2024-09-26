// const nombres = ["Juan", "Pedro", "Matias"];

// console.log(nombres);

// console.log(...nombres);
// console.log(nombres[0], nombres[1], nombres[2]);

/*
    MAX & MIN
 */

// const numeros = [1, 5, 60, 15, 20, 50, 75];

// const maximo = Math.max(1, 5, 10, 15, 20);

// const maximo = Math.max(numeros[0], numeros[1], numeros[2], numeros[3], numeros[4], numeros[5]);
// const maximo = Math.max(...numeros);
// const minimo = Math.min(...numeros);
//
// console.log(maximo);
// console.log(minimo);

/*
    SPREAD EN ARRAYS
 */

// const nombres = ["Juan", "Ramiro", "Gaston"];

// const nuevosNombres = ["Juan", "Ramiro", "Gaston", "Pedro", "Matias"];
// const nuevosNombres = [...nombres, "Pedro", "Matias"];
//
// console.log(nuevosNombres);

/**
 * SPREAD EN OBJETOS
 */

// const persona1 = {
//     nombre: "Pedro",
//     edad: 25,
// }
//
// const persona2 = {
//     ...persona1,
// };
//
// persona2.nombre = "Juan";
// console.log(persona2);

// const persona1 = {
//     nombre: "Pedro",
//     edad: 25,
//     profesion: "Profesor",
// }
//
// const persona2 = {
//     ...persona1,
//     nombre: "Juan",
//     edad: 30,
// }
//
// console.log(persona2);

/**
 * REST PARAMETERS
 */

// function funcion1(...parametros) {
//     console.log(parametros);
// }
//
// funcion1("nombre", "nombre2", "nombre3", "nombre4", "nombre5")

// function realizarOperacion(operacion, ...numeros) {
//
//     let resultado = 0;
//
//     if(operacion === "+") {
//         resultado = numeros.reduce( (acc, el) => {
//             return acc + el;
//         }, 0);
//     } else if(operacion === "-") {
//         resultado = numeros.reduce( (acc, el) => {
//             return acc - el;
//         }, 0);
//     }
//
//     console.log("El resultado es: " + resultado);
// }
//
// realizarOperacion("+", 2, 5, 8, 10, 15);
// realizarOperacion("-", 5, 10, 5);

/**
 * EJEMPLO DE PREENTREGA 3
 */

// Objetos
class Asiento {
    constructor(id, seleccionado, comprado) {
        this.id = id;
        this.seleccionado = seleccionado;
        this.comprado = comprado;

        this.divAsiento = this.generarHTML();
    }

    generarHTML() {
        const divAsiento = document.createElement("div");
        divAsiento.className = "asiento";

        // Si el asiento fue comprado
        if(this.comprado) {
            divAsiento.className += " comprado";
        }

        divAsiento.addEventListener("click", () => {
            this.clickear();
        });

        return divAsiento;
    }

    comprar() {
        this.comprado = true;
        this.divAsiento.className += " comprado";
    }

    clickear() {

        // Si el asiento fue comprado, imprimo mensaje y no hago nada más
        if(this.comprado) {
            alertaError("ESTE ASIENTO YA FUE COMPRADO");
            return;
        }

        if(this.seleccionado) {

            // Deseleccionar asiento
            this.seleccionado = false;

            asientosSeleccionados = asientosSeleccionados.filter( (el) => {
                return el.id !== this.id;
            });

            this.divAsiento.className = "asiento";

        } else {

            // Seleccionar asiento
            this.seleccionado = true;

            asientosSeleccionados.push(this);

            this.divAsiento.className = "asiento seleccionado";
        }

        calcularTotales();
    }
}


// Funciones
function alertaError(mensaje) {
    divAlertaError.innerHTML = `<p>${mensaje}</p>`;
}

function alertaBueno(mensaje) {
    divAlertaBueno.innerHTML = `<p>${mensaje}</p>`;
}

function calcularTotales() {

    const total = asientosSeleccionados.length * 50;

    pTotal.innerHTML = `$${total}`;
}

function asientoComprado(idAsiento) {
    return asientosComprados.some( (el) => {
        return el === idAsiento;
    });
}

function obtenerAsientosComprados() {
    return JSON.parse(localStorage.getItem("asientos_comprados")) || [];
}

function guardarAsientosComprados() {
    localStorage.setItem("asientos_comprados", JSON.stringify(asientosComprados));
}

function comprarAsientos() {

    if(asientosSeleccionados.length === 0) {
        alertaError("No tiene asientos seleccionados");
        return;
    }

    for(const asientoSeleccionado of asientosSeleccionados) {
        asientosComprados.push(asientoSeleccionado.id);

        // Compramos el asiento
        asientoSeleccionado.comprar();
    }

    // Guardamos en local Storage los asientos comprados
    guardarAsientosComprados();

    // Limpiamos el array de asientos seleccionados
    asientosSeleccionados = [];

    // Calcular total
    calcularTotales();

    // Mostrar mensaje
    alertaBueno("LOS ASIENTOS FUERON COMPRADOS");
}

function renderizarAsientos() {
    divAsientos.innerHTML = "";
    asientos = [];

    // Recorro la fila de asientos
    for(const filaAsientos of idsAsientos) {

        const divFila = document.createElement("div");
        divFila.className = "fila";

        // Recorro los IDs de asientos
        for(const idAsiento of filaAsientos) {

            const asientoFueComprado = asientoComprado(idAsiento);

            // Creo el objeto asiento y agrego el asiento a la fila
            const asiento = new Asiento(
                idAsiento,
                false,
                asientoFueComprado,
            );

            // Agrego el objeto a mi array de asientos
            asientos.push(asiento);

            divFila.append(asiento.divAsiento);
        }

        // Agrego la fila al div de asientos
        divAsientos.append(divFila);
    }
}

// Inicio del programa

const divAsientos = document.getElementById("asientos");
const botonComprar = document.getElementById("comprar");
const pTotal = document.getElementById("total");
const divAlertaError = document.getElementById("alertaError");
const divAlertaBueno = document.getElementById("alertaBueno");

const idsAsientos = [
    ["A1", "A2", "A3", "A4", "A5", "A6"],
    ["B1", "B2", "B3", "B4", "B5", "B6"],
    ["C1", "C2", "C3", "C4", "C5", "C6"],
    ["D1", "D2", "D3", "D4", "D5", "D6"],
    ["E1", "E2", "E3", "E4", "E5", "E6"],
];
let asientos = [];
let asientosSeleccionados = [];
let asientosComprados = obtenerAsientosComprados();

// Renderizar asientos
renderizarAsientos();

botonComprar.addEventListener("click", comprarAsientos);