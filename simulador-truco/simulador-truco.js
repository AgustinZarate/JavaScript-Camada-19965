//simulador truco
//modular--
//cartas.js
//mazo
//jugador

console.log ("mazo :")
console.log (mazo)
console.log("\n\n\n\n\n\n\n\n\n")




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



}






//el 1 es el numero mas alto en jerarquia (ancho de espada)
function truco(jugador, rival) {
    if (jugador.jerarquia < rival.jerarquia) {
        console.log("gana jugador")
    } else if (jugador.jerarquia === rival.jerarquia) {
        console.log("emapte")
    } else if (jugador.jerarquia > rival.jerarquia) {
        console.log("gana el rival")
    }

}