//simulador truco

class Carta {

    constructor(numero, palo, jerarquia, imagen, reverso) {
        
        this.numero = numero;
        this.palo = palo;
        this.jerarquia = jerarquia
        this.imagen = imagen
        this.reverso = reverso
        this.id = Carta.ID++
        
    }

    static ID = 1
}

mazo = [];
//Espada
mazo.push(new Carta(1, "espada", 1, "../img/1-espada.png", "../img/reverso.png"))
mazo.push(new Carta(2, "espada", 6, "../img/2-espada.png", "../img/reverso.png"))
mazo.push(new Carta(3, "espada", 5, "../img/3-espada.png", "../img/reverso.png"))
mazo.push(new Carta(4, "espada", 14, "../img/4-espada.png", "../img/reverso.png"))
mazo.push(new Carta(5, "espada", 13, "../img/5-espada.png", "../img/reverso.png"))
mazo.push(new Carta(6, "espada", 12, "../img/6-espada.png", "../img/reverso.png"))
mazo.push(new Carta(7, "espada", 3, "../img/7-espada.png", "../img/reverso.png"))
mazo.push(new Carta(10, "espada", 10, "../img/10-espada.png", "../img/reverso.png"))
mazo.push(new Carta(11, "espada", 9, "../img/11-espada.png", "../img/reverso.png"))
mazo.push(new Carta(12, "espada", 8, "../img/12-espada.png", "../img/reverso.png"))
//Basto
mazo.push(new Carta(1, "basto", 2, "../img/1-basto.png", "../img/reverso.png"))
mazo.push(new Carta(2, "basto", 6, "../img/2-basto.png", "../img/reverso.png"))
mazo.push(new Carta(3, "basto", 5, "../img/3-basto.png", "../img/reverso.png"))
mazo.push(new Carta(4, "basto", 14, "../img/4-basto.png", "../img/reverso.png"))
mazo.push(new Carta(5, "basto", 13, "../img/5-basto.png", "../img/reverso.png"))
mazo.push(new Carta(6, "basto", 12, "../img/6-basto.png", "../img/reverso.png"))
mazo.push(new Carta(7, "basto", 11, "../img/7-basto.png", "../img/reverso.png"))
mazo.push(new Carta(10, "basto", 10, "../img/10-basto.png", "../img/reverso.png"))
mazo.push(new Carta(11, "basto", 9, "../img/11-basto.png", "../img/reverso.png"))
mazo.push(new Carta(12, "basto", 8, "../img/12-basto.png", "../img/reverso.png"))
//Oro
mazo.push(new Carta(1, "oro", 7, "../img/1-oro.png", "../img/reverso.png"))
mazo.push(new Carta(2, "oro", 6, "../img/2-oro.png", "../img/reverso.png"))
mazo.push(new Carta(3, "oro", 5, "../img/3-oro.png", "../img/reverso.png"))
mazo.push(new Carta(4, "oro", 14, "../img/4-oro.png", "../img/reverso.png"))
mazo.push(new Carta(5, "oro", 13, "../img/5-oro.png", "../img/reverso.png"))
mazo.push(new Carta(6, "oro", 12, "../img/6-oro.png", "../img/reverso.png"))
mazo.push(new Carta(7, "oro", 4, "../img/7-oro.png", "../img/reverso.png"))
mazo.push(new Carta(10, "oro", 10, "../img/10-oro.png", "../img/reverso.png"))
mazo.push(new Carta(11, "oro", 9, "../img/11-oro.png", "../img/reverso.png"))
mazo.push(new Carta(12, "oro", 8, "../img/12-oro.png", "../img/reverso.png"))
//Copa
mazo.push(new Carta(1, "copa", 7, "../img/1-copa.png", "../img/reverso.png"))
mazo.push(new Carta(2, "copa", 6, "../img/2-copa.png", "../img/reverso.png"))
mazo.push(new Carta(3, "copa", 5, "../img/3-copa.png", "../img/reverso.png"))
mazo.push(new Carta(4, "copa", 14, "../img/4-copa.png", "../img/reverso.png"))
mazo.push(new Carta(5, "copa", 13, "../img/5-copa.png", "../img/reverso.png"))
mazo.push(new Carta(6, "copa", 12, "../img/6-copa.png", "../img/reverso.png"))
mazo.push(new Carta(7, "copa", 11, "../img/7-copa.png", "../img/reverso.png"))
mazo.push(new Carta(10, "copa", 10, "../img/10-copa.png", "../img/reverso.png"))
mazo.push(new Carta(11, "copa", 9, "../img/11-copa.png", "../img/reverso.png"))
mazo.push(new Carta(12, "copa", 8, "../img/12-copa.png", "../img/reverso.png"))



function outCard () {
    if (cart.id === 39) {
        mazo.splice((cart.id - 1), 1)
    } if (cart.id === 40) {
        mazo.pop()
    } else {
        mazo.splice((cart.id - 1), 1)
    }
}






//ERROR = EXISTE LA POSIBILIDAD QUE DEVUELVA DOS CARTAS IGUALES
/* SOLICION La solucion fue poner el indexOf(), antes de hacer el splice() 
que ubica el indice del objeto en el array, porque cuando en la primer
carta se sacaba una del array cambiaba el valor del indice */

//Funcion displayHand() devuelve 3 cartas (una mano)
function displayHand() {
        /* ---------------- CARTAS ----------------- 
        --------------------- DEL ------------------
        ------------------- JUGADOR ----------------*/
        console.log("mano del jugador")

        let firstCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iFirstCard = mazo.indexOf(firstCard);
        console.log("indice de la primera carta: ", iFirstCard)
        console.log(firstCard)
        mazo.splice(iFirstCard, 1)


        let secondCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iSecondCard = mazo.indexOf(secondCard);
        console.log("indice de la segunda carta: ", iSecondCard)
        console.log(secondCard)
        mazo.splice(iSecondCard, 1)


        let thirdCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iThirdCard = mazo.indexOf(thirdCard);
        console.log("indice de la segunda carta: ", iThirdCard)
        console.log(thirdCard)
        mazo.splice((iThirdCard), 1)

    //quita un objeto del array para que no se repita en la siguiente carta
/*     mazo.splice((firstCard.id - 1), 1)
    mazo.splice((secondCard.id - 1), 1)
    mazo.splice((thirdCard.id - 1), 1) */
    //ERROR Los indices 38 y 39 no se quitan
    //SOLUCION Era que no encontraba esos indices, porque al sacar cartes cambiaba el valor
    

    let showCard = `
    
    <div class="d-flex justify-content-around">
    <img src="${firstCard.imagen}">
    <img src="${secondCard.imagen}">
    <img src="${thirdCard.imagen}">
    </div>
    
    `;



    /* ------------------- CARTAS ----------------- 
        -------------------- DEL ------------------
        ------------------- RIVAL ----------------*/

        let rivalFirstCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iRivalFirstCard = mazo.indexOf(rivalFirstCard);
        console.log("indice de la primera carta: ", iRivalFirstCard)
        mazo.splice(iRivalFirstCard, 1)


        let rivalSecondCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iRivalSecondCard = mazo.indexOf(rivalSecondCard);
        console.log("indice de la segunda carta: ", iRivalSecondCard)
        mazo.splice(iRivalSecondCard, 1)

        
        let rivalThirdCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iRivalThirdCard = mazo.indexOf(rivalThirdCard);
        console.log("indice de la tercera carta: ", iRivalThirdCard)
        mazo.splice((iRivalThirdCard), 1)


    let rivalCards = `
    
    <div class="d-flex justify-content-around">
    <img src="${rivalFirstCard.imagen}">
    <img src="${rivalSecondCard.imagen}">
    <img src="${rivalThirdCard.imagen} ">
    </div>
    
    `;

        document.getElementById("showing").innerHTML = showCard;
        document.getElementById("rivalCards").innerHTML = rivalCards;
    

    /* let tantos = 0 */

    console.log (mazo)



}

