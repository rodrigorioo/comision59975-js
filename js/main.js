// const peticion = fetch("https://rickandmortyapi.com/api/character")
//     .then( (response) => {
//         const responseJson = response.json();
//
//         responseJson.then( (json) => {
//
//             console.log(json);
//             // ...
//         });
//     });

// fetch("https://rickandmortyapi.com/api/character")
//     .then( (response) => {
//         return response.json();
//     })
//     .then( (json) => {
//
//         const results = json.results;
//
//         for(const personaje of results) {
//             console.log(personaje.name);
//         }
//
//     });

/**
 * CONSUMIR UNA API Y MOSTRAR LOS RESULTADOS EN EL DOM
 */

// Funciones

// async function obtenerPokemones() {
//     // Código asincrónico
//     fetch(next)
//         .then( (response) => {
//             return response.json();
//         })
//         .then( (json) => {
//
//             console.log("se terminó de ejecutar");
//             next = json.next;
//             renderizarPokemones(json.results);
//         });
//
//     console.log("asd");
//     console.log("asd2");
//
//     // Código sincrónico
//     // const response = await fetch(next);
//     // const json = await response.json();
//     //
//     // console.log("se terminó de ejecutar");
//     // next = json.next;
//     // renderizarPokemones(json.results);
//
//     console.log("asd");
//     console.log("asd2");
// }
//
// function obtenerInformacionPokemon(
//     nombrePokemon,
//     divPokemon
// ) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
//         .then( (response) => {
//             return response.json();
//         })
//         .then( (json) => {
//
//             const p1 = document.createElement("p");
//             p1.innerHTML = `<strong>Peso:</strong> ${json.weight}`;
//
//             const p2 = document.createElement("p");
//             p2.innerHTML = `<strong>Altura:</strong> ${json.height}`;
//
//             divPokemon.append(p1, p2);
//         });
//
// }
//
// function renderizarPokemones(pokemones) {
//     // divPokemones.innerHTML = "";
//
//     for(const pokemon of pokemones) {
//
//         const divPokemon = document.createElement("div");
//         divPokemon.innerHTML = `<h5>${pokemon.name}</h5>`;
//
//         divPokemon.addEventListener("click", () => {
//
//             obtenerInformacionPokemon(pokemon.name, divPokemon);
//
//         });
//
//         divPokemones.append(divPokemon);
//     }
// }
//
// // Inicio del programa
//
// let next = "https://pokeapi.co/api/v2/pokemon";
// const divPokemones = document.getElementById("pokemones");
// const botonVerMas = document.getElementById("verMas");
//
// botonVerMas.addEventListener("click", () => {
//     obtenerPokemones();
// });
//
// obtenerPokemones();

/**
 * CONSUMIR ARCHIVO JSON CON FETCH
 */

// fetch('/productos.json')
//     .then( (response) => {
//         return response.json();
//     })
//     .then( (json) => {
//         // renderizarProductos(json);
//     });

/**
 * ENVIAR POST CON FETCH
 */

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "Post nuevo",
        body: "Body del post nuevo",
        userId: 1,
    }),
    headers: {
        "Content-Type": "application/json",
    }
})
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        console.log(json);
    });

fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
        title: "Actualizar post",
        body: "Body del post actualizado",
        userId: 1,
    }),
    headers: {
        "Content-Type": "application/json",
    }
})
    .then( (response) => {
        return response.json();
    })
    .then( (json) => {
        console.log(json);
    })
