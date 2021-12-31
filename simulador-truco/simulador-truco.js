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
    console.log("jerarquia: ")
    console.log(playerHand[i].jerarquia)

    console.log("\n\n\n\n\n")

    console.log("carta RIVAL: ")
    console.log(rivalCard)
    console.log("jerarquia RIVAL: ")
    console.log(rivalCard.jerarquia)
    mesa.push(cardSelected)
    console.log("array mesa:")
    console.log(mesa)
}