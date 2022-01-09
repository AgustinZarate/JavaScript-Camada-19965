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
    let iNumber = numeros.indexOf(number);
    numeros.splice(iNumber, 1)
    
    let cardSelected = playerHand[i]
    let rivalCard = rivalHand[number]

    console.log("carta seleccionada: ")
    console.log(cardSelected)
/*     console.log("jerarquia: ")
    console.log(playerHand[i].jerarquia) */

    console.log("\n\n\n\n\n")

    console.log("(rivalCard) carta RIVAL: ")
    console.log(rivalCard)
    console.log("(rivalCard.jerarquia) jerarquia RIVAL: ")
    console.log(rivalCard.jerarquia)

    
    mesa.push(cardSelected)
    mesa.push(rivalCard)


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
    ganadorTruco()
}

function ganadorTruco(){
    if (puntosPlayerTruco == 2 ) {
        console.log("gano jugador PARTIDA")
        if (truco) {
            
            $("#puntosPlayer").text(sumarPuntosPlayer(2))
            alert("Ganaste")
            setTimeout(() => {
                location.reload()
            }, 2000);
           
        } else {
            
            $("#puntosPlayer").text(sumarPuntosPlayer(1))
            alert("Ganaste")
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    } else if (puntosRivalTruco == 2 ) {
        if (truco) {
            $("#puntosRival").text(sumarPuntosRival(2))
            alert("Gano el rival")
            setTimeout(() => {
                location.reload()
            }, 2000);
        } else {
            $("#puntosRival").text(sumarPuntosRival(1))
            alert("Gano el rival")
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }
}

function btnTruco() {
    truco = true
}