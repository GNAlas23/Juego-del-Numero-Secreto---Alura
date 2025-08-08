
let listaNumeroSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número! Lo hiciste en ${intentos} ${(intentos === 1) ? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");

        }
    } intentos++
    limpiarCaja();
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log("NUMERO GENERADO " + numeroGenerado);
    //si ya sorteamos todos los numeros

    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        // si el numero generado esta incluido en la lista
        if (listaNumeroSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            console.log("NUMEROS EN EL ARREGLO" + listaNumeroSorteados.length);
            console.log("NUMERO GUARDADO " + numeroGenerado);
            listaNumeroSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }


}

function condicionesIniciales() {
    asignarTextoElemento("h1", "El juego del número secreto!");
    asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio 
    condicionesIniciales();
    //generar el numero secreto
    //dejar el boton del nuevo juego deshabilitado
    //inicializar intentos
    document.querySelector("#reiniciar").setAttribute("disabled", true)
}

condicionesIniciales();
