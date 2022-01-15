$(()=>{
    $("html, body").animate({
        scrollTop:$("#mesaJuego").offset.top
    },2000)
})
console.log ("mazo :")
console.log (mazo)
console.log("\n\n\n\n\n\n\n\n\n")
let truco = false
function positionArray(i) {
    let number = numeros[Math.floor(Math.random() * numeros.length)];
    let iNumber = numeros.indexOf(number);
    numeros.splice(iNumber, 1)
    let cardSelected = playerHand[i]
    let rivalCard = rivalHand[number]
    mesa.push(cardSelected)
    mesa.push(rivalCard)
    cartasEnMesaRival(rivalCard)
    let rivalCarta = "#" + rivalCard.id
    $(rivalCarta).slideUp()
    jugada(cardSelected, rivalCard)
}
let puntosPlayerTruco = 0
let puntosRivalTruco = 0
function jugada(jugador, rival) {
    if (jugador.jerarquia < rival.jerarquia) {
        puntosPlayerTruco += 1
    } else if (jugador.jerarquia === rival.jerarquia) {
        puntosPlayerTruco += 1
        puntosRivalTruco += 1
    } else if (jugador.jerarquia > rival.jerarquia) {
        puntosRivalTruco += 1
    }
    mazo.push(jugador)
    mazo.push(rival)
    ganadorTruco()
}
function ganadorTruco(){
    if (puntosPlayerTruco == 2 ) {
        if (truco) {
            sumarPuntosPlayer(2)
            alert("Ganaste")
            playerHand = []
            rivalHand = []
            envido = []
            numeros = [0,1,2]
            mesa = []
            puntosPlayerTruco = 0
            puntosRivalTruco = 0
            $('.carta').slideUp()
            usarLocalStorage()
            termimarPartida ()
            reiniciarTruco()
            reiniciarEnvido()
            
        } else {
            sumarPuntosPlayer(1)
            alert("Ganaste")
            playerHand = []
            rivalHand = []
            envido = []
            numeros = [0,1,2]
            mesa = []
            puntosPlayerTruco = 0
            puntosRivalTruco = 0
            $('.carta').slideUp()
            usarLocalStorage()
            termimarPartida ()
            reiniciarTruco()
            reiniciarEnvido()
            
        }
    } else if (puntosRivalTruco == 2 ) {
        if (truco) {
            sumarPuntosRival(2)
            alert("Gano el rival")
            playerHand = []
            rivalHand = []
            envido = []
            numeros = [0,1,2]
            mesa = []
            puntosPlayerTruco = 0
            puntosRivalTruco = 0
            $('.carta').slideUp()
            usarLocalStorage()
            termimarPartida ()
            reiniciarTruco()
            reiniciarEnvido()
            
        } else {
            sumarPuntosRival(1)
            alert("Gano el rival")
            playerHand = []
            rivalHand = []
            envido = []
            numeros = [0,1,2]
            mesa = []
            puntosPlayerTruco = 0
            puntosRivalTruco = 0
            $('.carta').slideUp()
            usarLocalStorage()
            termimarPartida ()
            reiniciarTruco()
            reiniciarEnvido()
            
        }
    }
}
function btnTruco() {
    if (truco === false) {
        truco = true
        alert("cantaste truco")
    }else{
        alert("truco ya a sido cantado")
    }

}
function reiniciarTruco() {
    truco = false
}