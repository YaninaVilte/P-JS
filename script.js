var min = 0;
var max = 2;

function escogerNumeroRandom(min, max)
{
    var numero = Math.round(Math.random()*(max - min) + min);
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];

var seleccionUsuario;
var seleccionRandom = escogerNumeroRandom(0,2);

seleccionUsuario = Number(prompt("¡Juguemos al piedra, papel o tijera! \nSelecciona una opción \nPiedra = 0 \nPapel = 1 \nTijera = 2", 0));

alert("Elegiste " + opciones[seleccionUsuario])

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
