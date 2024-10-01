/**
 * SWEET ALERT
 */

// Swal.fire({
//     title: 'Eliminar producto',
//     text: '¿Está seguro que desea eliminar el producto?',
//     icon: 'warning',
//     confirmButtonText: 'Si',
//     showDenyButton: true,
//     denyButtonText: "Cancelar",
// }).then( (result) => {
//
//     if(result.isConfirmed) {
//         // Eliminar el producto...
//
//         Swal.fire({
//             title: 'Producto eliminado',
//             text: 'El producto fue eliminado',
//             icon: 'success',
//         });
//     } else {
//         Swal.fire({
//             title: 'Producto no eliminado',
//             text: 'Usted no eliminó el producto',
//             icon: 'error',
//         });
//     }
// });

/**
 * TOASTIFY
 */

// Toastify({
//     text: "This is a toast",
//     duration: 1000,
//     // destination: "https://github.com/apvarun/toastify-js",
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "right", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//         // background: "linear-gradient(to right, #00b09b, #96c93d)",
//         background: "red",
//     },
//     onClick: function() {
//         Toastify({
//             text: "Nueva notificación",
//             duration: 1000,
//             newWindow: true,
//             close: true,
//             gravity: "top",
//             position: "right",
//             stopOnFocus: true,
//             style: {
//                 background: "green",
//             },
//         }).showToast();
//     } // Callback after click
// }).showToast();

/**
 * LUXON
 */

const DateTime = luxon.DateTime;

// Instanciar fechas
// const ayer = DateTime.local(2024, 9, 30, 10, 30);
// const hoy = DateTime.now();

// Mostrar fecha
// console.log(ayer.day);
// console.log(ayer.zoneName);

// Formatear fechas
// console.log(ayer.toLocaleString());
// console.log(ayer.setLocale('es').toLocaleString(DateTime.DATE_FULL));

// Operaciones
// const nuevoAyer = ayer.plus({
//     hours: 5,
//     minutes: 30,
// });

// const nuevaFecha = ayer.plus({
//     minutes: 190,
// });

// const nuevaFecha = ayer.minus({
//     days: 5,
// });
//
// console.log(ayer.toString());
// console.log(nuevaFecha.toString());

// const fecha = DateTime.local(2024, 9, 30, 11, 30);
//
// const nuevaFecha = fecha.set({
//     hour: 13,
//     minute: 45,
// });
//
// console.log(nuevaFecha.toString());

/**
 * CLASE DURATION
 */

// const Duration = luxon.Duration;

// const hora = Duration.fromObject({
//     hour: 10,
//     minute: 30,
// });
//
// const nuevaHora = hora.plus({
//     hours: 5,
//     minutes: 31,
// });

/**
 * INTERVAL
 */

const Interval = luxon.Interval;

const fecha1 = DateTime.local(2024, 9, 25, 10);
const fecha2 = DateTime.local(2024, 9, 28, 10);

const i = Interval.fromDateTimes(fecha1, fecha2);

console.log(i.length('milliseconds'));