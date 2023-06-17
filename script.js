let marcadorJugador = 0;
let marcadorYani = 0;

let resultadoGanador = document.querySelector("#resultadoGanador");
let mensajeOpciones = document.querySelector("#mensajeOpciones");
let turnoJugador = document.querySelectorAll(".turnoJugador");

let turnoYani = document.querySelector("#turnoYani");
let opcionYani = document.querySelector("#opcionYani");

let opcionesElegidas = document.querySelector("#opcionesElegidas");
let opcionDelJugador = document.querySelector("#opcionDelJugador");
let opcionDeYani = document.querySelector("#opcionDeYani");

let resultadoParcial = document.querySelector("#resultadoParcial");

let puntosJugador = document.querySelector("#puntosJugador");
let puntosYani = document.querySelector("#puntosYani");

let resultadoFinal = document.querySelector("#resultadoFinal");
let jugarNuevamente = document.querySelector("#jugarNuevamente");



turnoJugador.forEach(boton => {
    boton.addEventListener("click", iniciarPartida);
});

function iniciarPartida (e) {

    let min = 0;
    let max = 2;

    let opcionRandom = Math.round(Math.random()*(max - min) + min);
    let opcionJugador = e.currentTarget.id;

    if (opcionRandom === 0) {
        opcionRandom = "Piedra";
    } else if (opcionRandom === 1) {
        opcionRandom = "Papel"
    } else if (opcionRandom === 2) {
        opcionRandom = "Tijera"
    }

    if (
        (opcionJugador === "Piedra" && opcionRandom === "Tijera") ||
        (opcionJugador === "Papel" && opcionRandom === "Piedra") ||
        (opcionJugador === "Tijera" && opcionRandom === "Papel")
    ) {
        ganaJugador();
    } else if (
        (opcionJugador === "Piedra" && opcionRandom === "Papel") ||
        (opcionJugador === "Papel" && opcionRandom === "Tijera") ||
        (opcionJugador === "Tijera" && opcionRandom === "Piedra")
    ) {
        ganaYani();
    } else {
        empate();
    }

    opcionDelJugador.innerText = opcionJugador;
    opcionDeYani.innerText = opcionRandom;
    opcionYani.innerText = opcionRandom;

    if (marcadorJugador === 3 || marcadorYani === 3) {

        if (marcadorJugador === 3) {
            resultadoGanador.innerText = "¡Ganaste!"
        }

        if (marcadorYani === 3) {
            resultadoGanador.innerText = "¡Yani ganó el juego!"
        }

        mensajeOpciones.classList.add("disabled");
        turnoYani.classList.add("disabled");
        opcionesElegidas.classList.add("disabled");
        opcionYani.classList.add("disabled");
        resultadoParcial.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaJugador() {
    marcadorJugador++;
    puntosJugador.innerText = marcadorJugador;
    resultadoParcial.innerText = "¡Ganaste un punto!"
}

function ganaYani() {
    marcadorYani++;
    puntosYani.innerText = marcadorYani;
    resultadoParcial.innerText = "¡Yani gana un punto!"
}

function empate() {
    resultadoParcial.innerText = "¡Empate!"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    mensajeOpciones.classList.remove("disabled");
    turnoYani.classList.remove("disabled");
    opcionesElegidas.classList.remove("disabled");
    opcionYani.classList.remove("disabled");
    resultadoParcial.classList.remove("disabled");;

    marcadorJugador = 0;
    marcadorYani = 0;
    
    puntosJugador.innerText = marcadorJugador;
    puntosYani.innerText = marcadorYani;

    resultadoGanador.innerText = "El primero en llegar a 3 puntos gana."
}