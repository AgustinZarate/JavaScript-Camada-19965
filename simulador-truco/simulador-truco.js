$(()=>{
    $("html, body").animate({
        scrollTop:$("#mesaJuego").offset.top
    },2000)
})
console.log ("mazo :")
console.log (mazo)
console.log("\n\n\n\n\n\n\n\n\n")

let truco = false
//al presionar un input (manipulacion de carta -funcion Botones-)
//capturar un objeto
function positionArray(i) {
    console.log("\n\n\n\n\n")
    console.log("------SIMULADOR TRUCO--------")
    let number = numeros[Math.floor(Math.random() * numeros.length)];
    console.log("----- ESTE ES EL NUMERO AL AZAR -----------")
    console.log(number)
    let iNumber = numeros.indexOf(number);
    numeros.splice(iNumber, 1)
    
    let cardSelected = playerHand[i]
    let rivalCard = rivalHand[number]

    console.log("carta seleccionada: ")
    console.log(cardSelected)
    console.log("\n\n\n\n\n")
    console.log("(rivalCard) carta RIVAL: ")
    console.log(rivalCard)
/*     console.log("(rivalCard.jerarquia) jerarquia RIVAL: ")
    console.log(rivalCard.jerarquia) */

    
    mesa.push(cardSelected)
    mesa.push(rivalCard)
    cartasEnMesaRival(rivalCard)


    let rivalCarta = "#" + rivalCard.id
    console.log("i rival:")
    console.log(rivalCarta)
    $(rivalCarta).slideUp()
    console.log("array mesa:")
    console.log(mesa)   
    jugada(cardSelected, rivalCard)


}


let puntosPlayerTruco = 0
let puntosRivalTruco = 0


//el 1 es el numero mas alto en jerarquia (ancho de espada)
function jugada(jugador, rival) {
    if (jugador.jerarquia < rival.jerarquia) {
        console.log("gana jugador")
        puntosPlayerTruco += 1
        console.log(puntosPlayerTruco)
    } else if (jugador.jerarquia === rival.jerarquia) {
        console.log("emapte")
        puntosPlayerTruco += 1
        puntosRivalTruco += 1
    } else if (jugador.jerarquia > rival.jerarquia) {
        console.log("gana el rival")
        puntosRivalTruco += 1
        console.log(puntosRivalTruco)
    }
    mazo.push(jugador)
    mazo.push(rival)
    ganadorTruco()
}

function ganadorTruco(){
    if (puntosPlayerTruco == 2 ) {
        console.log("gano jugador PARTIDA")
        if (truco) {
            
            sumarPuntosPlayer(2)
            alert("Ganaste")
            playerHand = []
            rivalHand = []
            envido = []
            numeros = [0,1,2]
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
            /* setTimeout(() => {
                location.reload()
            }, 2000); */
            playerHand = []
            rivalHand = []
            envido = []
            numeros = [0,1,2]
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
            /* setTimeout(() => {
                location.reload()
            }, 2000); */
            playerHand = []
            rivalHand = []
            envido = []
            numeros = [0,1,2]
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
        console.log("let Truco es: " + truco)
    }else{
        alert("truco ya a sido cantado")
    }

}
function reiniciarTruco() {
    truco = false
    console.log("let Truco es: " + truco)
}



