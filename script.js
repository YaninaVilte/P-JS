let min = 0;
let max = 2;

function escogerNumeroRandom(min, max)
{
    let numero = Math.round(Math.random()*(max - min) + min);
    return numero;
}

let piedra = 0;
let papel = 1;
let tijera = 2;

let opciones = ["Piedra", "Papel", "Tijera"];

let seleccionUsuario;
let seleccionRandom = escogerNumeroRandom(0,2);

function seleccionarNumero () {
    seleccionUsuario = Number(prompt("¡Juguemos al piedra, papel o tijera! \nSelecciona una opción \nPiedra = 0 \nPapel = 1 \nTijera = 2", 0));
    if ((seleccionUsuario == 0) || (seleccionUsuario == 1) || (seleccionUsuario == 2)) {
        alert("Elegiste " + opciones[seleccionUsuario]);
    }
    else{
        alert("El número ingresado no es válido");
        seleccionUsuario = Number(prompt("¡Juguemos al piedra, papel o tijera! \nSelecciona una opción \nPiedra = 0 \nPapel = 1 \nTijera = 2", 0));
    }
    if(seleccionUsuario == piedra)
    {
        if(seleccionRandom == piedra)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste piedra. \nYani eligió piedra. \n¡Empatamos! 😅");
        }
        else if(seleccionRandom == papel)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste piedra. \nYani eligió papel. \nEl papel envuelve a la piedra, perdiste 😔");
        }
        else if(seleccionRandom == tijera)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste piedra. \nYani eligió tijera. \nLa piedra aplasta la tijera. ¡Felicitaciones ganaste! 🥳");
        }
    }
    else if(seleccionUsuario == papel)
    {
        if(seleccionRandom == piedra)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste papel. \nYani eligió piedra. \nEl papel envuelve a la piedra. ¡Felicitaciones ganaste! 🥳");
        }
        else if(seleccionRandom == papel)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste papel. \nYani eligió papel. \n¡Empatamos! 😅");
        }
        else if(seleccionRandom == tijera)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste papel. \nYani eligió tijera. \nLa tijera corta el papel, perdiste 😔");
        }
    }
    else if(seleccionUsuario == tijera)
    {
        if(seleccionRandom == piedra)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste tijera. \nYani eligió piedra. \nLa piedra aplasta el papel, perdiste 😔");
        }
        else if(seleccionRandom == papel)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste tijera. \nYani eligió papel. \nLa tijera corta el papel. ¡Felicitaciones ganaste! 🥳");
        }
        else if(seleccionRandom == tijera)
        {
            alert("Dejame pensar 🧠");
            alert("Listo 💡")
            alert("Elegiste tijera. \nYani eligió tijera. \n¡Empatamos! 😅");
        }
    }
}

seleccionarNumero ()

let seguirJugando;

function continuar () {
    seguirJugando = prompt("¿Seguir jugando? \nSi para seguir jugando \nCualquier letra para salir").toUpperCase();
    if(seguirJugando === "SI") {
        seleccionarNumero ();
    }
    else {
        prompt("¡Gracias por tu tiempo!")
    }
}

continuar ()