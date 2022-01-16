/* 
function sumarPuntosStorage(nombre , puntos) {
    localStorage.setItem(nombre, puntos)
} */

function usarLocalStorage() {
    localStorage.setItem('puntosPlayer', puntosPlayer)
    localStorage.setItem('puntosRival', puntosRival)
    let nuevosPuntosJugador = localStorage.getItem('puntosPlayer')
    let nuevosPuntosRival = localStorage.getItem('puntosRival')
    $("#puntosPlayer").text(nuevosPuntosJugador)
    $("#puntosRival").text(nuevosPuntosRival)
}

usarLocalStorage()

function termimarPartida () {
    let ptsJugador = localStorage.getItem('puntosPlayer')
    let ptsRival = localStorage.getItem('puntosRival')
    if (ptsJugador > 14) {
        alert("Partida terminada, el gandar es player")
        puntosPlayer = 0
        puntosRival = 0
        usarLocalStorage()
    } else if (ptsRival > 14) {
        alert("Partida terminada, el gandar es rival")
        puntosRival = 0
        puntosPlayer = 0
        usarLocalStorage()
    }
    $('.desaparecer').remove()
    $('.remove').remove()
}


function btnRegistrarse() {
    let usuario = document.getElementById('from_name').value
    localStorage.setItem('nombreUsuario', usuario)
    let nombreUsuario = localStorage.getItem('nombreUsuario')
    VanillaToasts.create({
        title:`Registro`,
        text: `Usuario nuevo registrado como: <br> ${nombreUsuario} <br> ¡Gracias por registrarte!`,
        type: `success`,
        icon: `img/success.png`,
        timeout: 3000,
     });

    }
    let nombreUsuario = localStorage.getItem('nombreUsuario')
    $('#usuario').append(`
    <p><span class="span-rojo">${nombreUsuario}</span> esta es tu mano</p>
`)

$('#nombre').text(`${nombreUsuario}`)