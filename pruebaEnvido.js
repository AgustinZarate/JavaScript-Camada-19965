
class Carta {

    constructor(numero, palo, valor, jerarquia, imagen, reverso) {
        
        this.numero = numero;
        this.palo = palo;
        this.valor = valor;
        this.jerarquia = jerarquia
        this.imagen = imagen
        this.reverso = reverso
        this.id = Carta.ID++
        
    }
    static ID = 1

        playerTantos(carta) {
        carta + 10
        }
    }


    

mazo = [];
//Espada
mazo.push(new Carta(1, "espada", 1,  1, "../img/1-espada.png", "../img/reverso.png"))
mazo.push(new Carta(2, "espada", 2,  6, "../img/2-espada.png", "../img/reverso.png"))
mazo.push(new Carta(3, "espada", 3,   5, "../img/3-espada.png", "../img/reverso.png"))
mazo.push(new Carta(4, "espada", 4,   14, "../img/4-espada.png", "../img/reverso.png"))
mazo.push(new Carta(5, "espada", 5,   13, "../img/5-espada.png", "../img/reverso.png"))
mazo.push(new Carta(6, "espada", 6,   12, "../img/6-espada.png", "../img/reverso.png"))
mazo.push(new Carta(7, "espada", 7,   3, "../img/7-espada.png", "../img/reverso.png"))
mazo.push(new Carta(10, "espada", 20,  10, "../img/10-espada.png", "../img/reverso.png"))
mazo.push(new Carta(11, "espada", 20,  9, "../img/11-espada.png", "../img/reverso.png"))
mazo.push(new Carta(12, "espada", 20,  8, "../img/12-espada.png", "../img/reverso.png"))
//Basto
mazo.push(new Carta(1, "basto",1,   2, "../img/1-basto.png", "../img/reverso.png"))
mazo.push(new Carta(2, "basto",2,   6, "../img/2-basto.png", "../img/reverso.png"))
mazo.push(new Carta(3, "basto",3,   5, "../img/3-basto.png", "../img/reverso.png"))
mazo.push(new Carta(4, "basto",4,   14, "../img/4-basto.png", "../img/reverso.png"))
mazo.push(new Carta(5, "basto",5,   13, "../img/5-basto.png", "../img/reverso.png"))
mazo.push(new Carta(6, "basto",6,   12, "../img/6-basto.png", "../img/reverso.png"))
mazo.push(new Carta(7, "basto",7,   11, "../img/7-basto.png", "../img/reverso.png"))
mazo.push(new Carta(10, "basto",20,   10, "../img/10-basto.png", "../img/reverso.png"))
mazo.push(new Carta(11, "basto",20,   9, "../img/11-basto.png", "../img/reverso.png"))
mazo.push(new Carta(12, "basto",20,   8, "../img/12-basto.png", "../img/reverso.png"))
//Oro
mazo.push(new Carta(1, "oro", 1, 7, "../img/1-oro.png", "../img/reverso.png"))
mazo.push(new Carta(2, "oro", 2, 6, "../img/2-oro.png", "../img/reverso.png"))
mazo.push(new Carta(3, "oro", 3, 5, "../img/3-oro.png", "../img/reverso.png"))
mazo.push(new Carta(4, "oro", 4, 14, "../img/4-oro.png", "../img/reverso.png"))
mazo.push(new Carta(5, "oro", 5, 13, "../img/5-oro.png", "../img/reverso.png"))
mazo.push(new Carta(6, "oro", 6, 12, "../img/6-oro.png", "../img/reverso.png"))
mazo.push(new Carta(7, "oro", 7, 4, "../img/7-oro.png", "../img/reverso.png"))
mazo.push(new Carta(10, "oro", 20, 10, "../img/10-oro.png", "../img/reverso.png"))
mazo.push(new Carta(11, "oro", 20, 9, "../img/11-oro.png", "../img/reverso.png"))
mazo.push(new Carta(12, "oro", 20, 8, "../img/12-oro.png", "../img/reverso.png"))
//Copa
mazo.push(new Carta(1, "copa", 1, 7, "../img/1-copa.png", "../img/reverso.png"))
mazo.push(new Carta(2, "copa", 2, 6, "../img/2-copa.png", "../img/reverso.png"))
mazo.push(new Carta(3, "copa", 3, 5, "../img/3-copa.png", "../img/reverso.png"))
mazo.push(new Carta(4, "copa", 4, 14, "../img/4-copa.png", "../img/reverso.png"))
mazo.push(new Carta(5, "copa", 5, 13, "../img/5-copa.png", "../img/reverso.png"))
mazo.push(new Carta(6, "copa", 6, 12, "../img/6-copa.png", "../img/reverso.png"))
mazo.push(new Carta(7, "copa", 7, 11, "../img/7-copa.png", "../img/reverso.png"))
mazo.push(new Carta(10, "copa", 20, 10, "../img/10-copa.png", "../img/reverso.png"))
mazo.push(new Carta(11, "copa", 20, 11, "../img/11-copa.png", "../img/reverso.png"))
mazo.push(new Carta(12, "copa", 20, 12, "../img/12-copa.png", "../img/reverso.png"))






let tantos = 0

//la primer carta mismo palo que la segunda 👌
//segunda carta igual que la tercera
//tercer carta igual que la primera

//ningun juego, carta de mayo jerarqui toma el lugar de tantos

//dos cartas que no son figuras 👌
//una figura y una carta no 👌
//dos figuras 👌


//tantos

firstCard = mazo[15]
console.log(firstCard)
secondCard = mazo[16]
console.log(secondCard)



//COMPARACION PRIMER CARTA CON SEGUNDA CARTA

//evaluamos que la primera carta tenga el mismo palo que la segunda
if (firstCard.palo === secondCard.palo) {

    //-----------------------------------
    //-- primer carta NO es una figura --
    //-----------------------------------
    if (firstCard.valor < 19) {
        //primera carta no es una figura entoces, evaluamos segunda carta no sea una figura
            if (secondCard.valor < 19) {
                //segunda carta TAMPOCO es una figura, entonces evaluamos los tantos
                let tantos = (firstCard.valor + secondCard.valor) + 20
                console.log(firstCard.numero + firstCard.palo + " + " + secondCard.numero + secondCard.palo + " / tantos = " + tantos)
            } else {
                //segunda carta TAMBIEN ES una figura, evaluamos tantos
                let tantos = firstCard.valor + secondCard.valor
                console.log(firstCard.numero + " " + firstCard.palo + " + " + secondCard.numero + " " + secondCard.palo + " / tantos = " + tantos)
            }


            
    //-----------------------------------
    //-- primer carta ES es una figura --
    //-----------------------------------
        } else {
            //evaluamos la segunda
            if (secondCard.valor < 19) {
                //segunda carta NO es una figura, entonces evaluamos los tantos
                let tantos = firstCard.valor + secondCard.valor
                console.log(firstCard.numero + " " + firstCard.palo + " + " + secondCard.numero + " " + secondCard.palo + " / tantos = " + tantos)
            } 
            else { 
                //segunda carta TAMBIEN ES una figura, evaluamos tantos
                let tantos = 20
                console.log(firstCard.numero + " " + firstCard.palo + " + " + secondCard.numero + " " + secondCard.palo + " / tantos = " + tantos)
            }
        }
    
    } 





/* if (mazo[39].palo === mazo[38].palo) {
    if (mazo[39].valor < 20) {
        console.log(mazo[39])
        console.log(mazo[34])
        let tantos = (mazo[39].valor + mazo[34].valor) + 20
        console.log("tantos = " + tantos)
    } else {
        console.log("ahre que no mori")
    } 
    

}*/