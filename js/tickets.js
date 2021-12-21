let ticket = 200;

let cantTickets = document.getElementById('cantidadTickets');
let opcionElegida = document.getElementById('categoriaSelect');
console.log(opcionElegida);

function resumen() {
    switch (opcionElegida.value) {
        case '1':
            ticket = 40;
            break;
        case '2':
            ticket = 100;
            break;
        case '3':
            ticket = 170;
            break;
    }
    let subtotal = ticket * cantTickets.value;
    console.log(subtotal);
    //return subTotal;
    totalPago.innerHTML = subtotal;
}
function borrar() {
    totalPago.innerHTML = "";
}

let botonResumen = document.getElementById('btnResumen');
let botonBorrar = document.getElementById('btnBorrar');

// Botón Resumen recibe un escuchador y la funcion del cálculo
botonResumen.addEventListener('click',resumen)

// Botón Borrar recibe un escuchador y la funcion de borrar
botonBorrar.addEventListener('click',borrar)