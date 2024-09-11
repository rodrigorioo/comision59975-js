// // Objetos
// class Cliente {
//     constructor(nombre, saldo) {
//         this.nombre = nombre;
//         this.saldo = saldo;
//     }
//
//     retirar(monto) {
//         this.saldo = this.saldo - monto;
//     }
//
//     depositar(monto) {
//         this.saldo = this.saldo + monto;
//     }
// }
//
// // Funciones
// function obtenerCliente(mensajePrompt) {
//     let nombreCliente = prompt(mensajePrompt);
//     let cliente = clientes.find( (el) => el.nombre.toLowerCase() === nombreCliente.toLowerCase());
//
//     while(cliente === undefined) {
//         alert("Nombre de cliente inválido, vuelva a ingresar otro");
//         nombreCliente = prompt(mensajePrompt);
//         cliente = clientes.find( (el) => el.nombre.toLowerCase() === nombreCliente.toLowerCase());
//     }
//
//     return cliente;
// }
//
// function transferirDinero() {
//     // Obtener objetos de cliente del array
//     const clienteTransfiere = obtenerCliente("Ingrese el nombre del cliente que va a realizar la transferencia");
//     const clienteQueRecibe = obtenerCliente("Ingrese el nombre del cliente que va a recibir la transferencia");
//
//     let montoTransferencia = parseFloat(prompt("Ingrese el monto de la transferencia"));
//
//     while(montoTransferencia <= 0 || montoTransferencia > clienteTransfiere.saldo) {
//         alert("VALOR INVÁLIDO");
//         montoTransferencia = parseFloat(prompt("Ingrese el monto de la transferencia"));
//     }
//
//     // Modificamos los saldos de los clientes
//     clienteTransfiere.retirar(montoTransferencia);
//     clienteQueRecibe.depositar(montoTransferencia);
// }
//
// function consultarSaldo() {
//     const cliente = obtenerCliente("Ingrese el nombre del cliente al que va a consultar el saldo");
//
//     alert("EL SALDO DEL CLIENTE ES: $" + cliente.saldo);
// }
//
// // Inicio del programa
// const clientes = [
//     new Cliente("Pedro", 5000),
//     new Cliente("Juan", 7500),
//     new Cliente("Marcos", 2000),
//     new Cliente("Gabriel", 3500),
// ];
//
// let mensajePrompt = "Ingrese el número de la operación que quiere realizar. 1- Transferir dinero, 2- Consultar saldo, 0- Salir";
// let opcion = parseInt(prompt(mensajePrompt));
//
// while(opcion !== 0) {
//
//     switch(opcion) {
//         case 1:
//             transferirDinero();
//             break;
//
//         case 2:
//             consultarSaldo();
//             break;
//     }
//
//     // Volvemos a pedir la opción al usuario
//     opcion = parseInt(prompt(mensajePrompt));
// }

/**
 * EJERCICIOS ÓRDEN SUPERIOR
 *
 * 8)
 */

// Función
function ordenarPorPropiedad(array, nombreDeLaPropiedad) {

    array.sort( (a, b) => {

        if(a[nombreDeLaPropiedad] > b[nombreDeLaPropiedad]) {
            return 1;
        } else if(a[nombreDeLaPropiedad] < b[nombreDeLaPropiedad]) {
            return -1;
        }

        return 0;
    });

    return array;
}

// Inicio del programa

const personas = [
    { nombre: 'Juan', apellido: "Fernandez", edad: 30 },
    { nombre: 'María', apellido: "Gomez", edad: 25 },
    { nombre: 'Pedro', apellido: "Rodriguez", edad: 35 },
    { nombre: 'Tomas', apellido: "Ramirez", edad: 20 },
    { nombre: 'Matias', apellido: "Mendez", edad: 40 },
];

const personasOrdenadasPorEdad = ordenarPorPropiedad(personas, 'edad');

console.log(personasOrdenadasPorEdad);