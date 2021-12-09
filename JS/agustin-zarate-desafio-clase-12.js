//simulador truco

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



//tantos en el envido
let tantos = 0



// CLICK CON JQUERY
$('#btn').on('click', displayHand())

//ERROR = EXISTE LA POSIBILIDAD QUE DEVUELVA DOS CARTAS IGUALES
/* SOLICION La solucion fue poner el indexOf(), antes de hacer el splice() 
que ubica el indice del objeto en el array, porque cuando en la primer
carta se sacaba una del array cambiaba el valor del indice */

//Funcion displayHand() devuelve 6 cartas (dos manos, jugador y rival) 
function displayHand() {
        /* ---------------- CARTAS ----------------- 
        --------------------- DEL ------------------
        ------------------- JUGADOR ----------------*/

       

        let firstCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iFirstCard = mazo.indexOf(firstCard);
        //console.log("indice de la primera carta: ", iFirstCard)
        //console.log(firstCard)
        mazo.splice(iFirstCard, 1)


        let secondCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iSecondCard = mazo.indexOf(secondCard);
        //console.log("indice de la segunda carta: ", iSecondCard)
        //console.log(secondCard)
        mazo.splice(iSecondCard, 1)


        let thirdCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iThirdCard = mazo.indexOf(thirdCard);
        //console.log("indice de la segunda carta: ", iThirdCard)
        //console.log(thirdCard)
        mazo.splice((iThirdCard), 1)

    //quita un objeto del array para que no se repita en la siguiente carta
/*     mazo.splice((firstCard.id - 1), 1)
    mazo.splice((secondCard.id - 1), 1)
    mazo.splice((thirdCard.id - 1), 1) */
    //ERROR Los indices 38 y 39 no se quitan
    //SOLUCION Era que no encontraba esos indices, porque al sacar cartes cambiaba el valor
    
    //Array mano del jugador
    let playerHand = [firstCard, secondCard, thirdCard]
    console.log("mano jugador :")
    console.log(playerHand)

    //-------------------------------//
    //-----------JQUERY-------------//
    //-----------------------------//

    //Dejo el inner en una variable para que las cartas en el html cambien y no se sigan agreando mas div's de cartas
    let showCard =  `    
    <div class="d-flex justify-content-around row" id="playerCards">
    <div class="col-4">
    <input type="image" src="${playerHand[0].imagen}" id="cardOne" class=" carta igual">
    </div>
    <div class="col-4">
    <input type="image" src="${playerHand[1].imagen}" id="CardTwo" class=" carta igual" >
    </div>
    <div class="col-4">
    <input type="image" src="${playerHand[2].imagen}" id="cardThree" class=" carta igual">
    </div>
    </div>
`   
$('#showing').append(showCard)



    //TANTOS JUGADOR
    if (firstCard.palo === secondCard.palo && firstCard.palo === thirdCard.palo ) {
        console.log("tenes flor")
    } else {
    
    //------------------------------------------
    //COMPARACION PRIMER CARTA CON SEGUNDA CARTA
    //-------------------------------------------
    
    
    
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
                    console.log(firstCard.numero + " " + firstCard.palo + " + " + secondCard.numero + " " +  secondCard.palo + " / tantos = " + tantos)
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
    
    //------------------------------------------
    //COMPARACION SEGUNDA CARTA CON TERCERA CARTA
    //-------------------------------------------



    //evaluamos que la SEGUNDA carta tenga el mismo palo que la TERCERA
    if (secondCard.palo === thirdCard.palo) {
    
        //-----------------------------------
        //-- segunda carta NO es una figura --
        //-----------------------------------
        if (secondCard.valor < 19) {
            //segunda carta no es una figura entoces, evaluamos segunda carta no sea una figura
                if (thirdCard.valor < 19) {
                    //tercera carta TAMPOCO es una figura, entonces evaluamos los tantos
                    let tantos = (secondCard.valor + thirdCard.valor) + 20
                    console.log(secondCard.numero + " " + secondCard.palo + " + " + thirdCard.numero + " " + thirdCard.palo + " / tantos = " + tantos)
                } else {
                    //tercera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = secondCard.valor + thirdCard.valor
                    console.log(secondCard.numero + " " + secondCard.palo + " + " + thirdCard.numero + " " + thirdCard.palo + " / tantos = " + tantos)
                }
        
        
                    
        //-----------------------------------
        //-- segunda carta ES es una figura --
        //-----------------------------------
            } else {
                //evaluamos la tercera
                if (thirdCard.valor < 19) {
                    //tercera carta NO es una figura, entonces evaluamos los tantos
                    let tantos = secondCard.valor + thirdCard.valor
                    console.log(secondCard.numero + " " + secondCard.palo + " + " + thirdCard.numero + " " + thirdCard.palo + " / tantos = " + tantos)
                } 
                else { 
                    //tercera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = 20
                    console.log(secondCard.numero + " " + secondCard.palo + " + " + thirdCard.numero + " " + thirdCard.palo + " / tantos = " + tantos)
                }
            }
        
        } 
    
    
    //----------------------------------------------
    //COMPARACION TERCERA CARTA CON LA PRIMERA CARTA
    //----------------------------------------------


    //evaluamos que la TERCERA carta tenga el mismo palo que la PRIMERA
    if (thirdCard.palo === firstCard.palo) {
    
        //-----------------------------------
        //-- TERCERA carta NO es una figura --
        //-----------------------------------
        if (thirdCard.valor < 19) {
            //TERCERA carta no es una figura entoces, evaluamos primera carta no sea una figura
                if (firstCard.valor < 19) {
                    //primera carta TAMPOCO es una figura, entonces evaluamos los tantos
                    let tantos = (thirdCard.valor + firstCard.valor) + 20
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                } else {
                    //primera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = thirdCard.valor + firstCard.valor
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                }
    
    
                
        //-----------------------------------
        //-- TERCERA carta ES es una figura --
        //-----------------------------------
            } else {
                //evaluamos la primera
                if (firstCard.valor < 19) {
                    //primera carta NO es una figura, entonces evaluamos los tantos
                    let tantos = thirdCard.valor + firstCard.valor
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                } 
                else { 
                    //primera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = 20
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                }
            }
        
        } 
    }


    console.log("\n\n\n\n\n\n\n\n\n")


    /* ------------------- CARTAS ----------------- 
        -------------------- DEL ------------------
        ------------------- RIVAL ----------------*/

        //console.log("mano rival: ")

        let rivalFirstCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iRivalFirstCard = mazo.indexOf(rivalFirstCard);
        //console.log("indice de la primera carta: ", iRivalFirstCard)
        //console.log(rivalFirstCard)
        mazo.splice(iRivalFirstCard, 1)


        let rivalSecondCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iRivalSecondCard = mazo.indexOf(rivalSecondCard);
        //console.log("indice de la segunda carta: ", iRivalSecondCard)
        //console.log(rivalSecondCard)
        mazo.splice(iRivalSecondCard, 1)

        
        let rivalThirdCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iRivalThirdCard = mazo.indexOf(rivalThirdCard);
        //console.log("indice de la tercera carta: ", iRivalThirdCard)
        //console.log(rivalThirdCard)
        mazo.splice((iRivalThirdCard), 1)



    
    //Array mano del rival
    let rivalHand = [rivalFirstCard, rivalSecondCard, rivalThirdCard]
    console.log("mano rival :")
    console.log(rivalHand)

    $('#rivalCards').append(`    
    <div class="d-flex justify-content-around row"" id="rivalCards">
    <div class="col-4">
        <input type="image" src="${rivalHand[0].imagen}" id="btn" class="btn carta" onclick="">
        </div>
        <div class="col-4">
        <input type="image" src="${rivalHand[1].imagen}" id="btn" class="btn carta" onclick="">
        </div>
        <div class="col-4">
        <input type="image" src="${rivalHand[2].imagen}" id="btn" class="btn carta" onclick="">
        </div>
    </div>
    
    
    `)
    



        //TANTOS RIVAL
        if (rivalFirstCard.palo === rivalSecondCard.palo && rivalFirstCard.palo === rivalThirdCard.palo ) {
            console.log("tenes flor")
        } else {
        
        //------------------------------------------
        //COMPARACION PRIMER CARTA CON SEGUNDA CARTA
        //-------------------------------------------
        
        
        
        //evaluamos que la primera carta tenga el mismo palo que la segunda
        if (rivalFirstCard.palo === rivalSecondCard.palo) {
        
            //-----------------------------------
            //-- primer carta NO es una figura --
            //-----------------------------------
            if (rivalFirstCard.valor < 19) {
                //primera carta no es una figura entoces, evaluamos segunda carta no sea una figura
                    if (rivalSecondCard.valor < 19) {
                        //segunda carta TAMPOCO es una figura, entonces evaluamos los tantos
                        let tantos = (rivalFirstCard.valor + rivalSecondCard.valor) + 20
                        console.log(rivalFirstCard.numero + " " + rivalFirstCard.palo + " + " + rivalSecondCard.numero + " " +  rivalSecondCard.palo + " / tantos = " + tantos)
                    } else {
                        //segunda carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = rivalFirstCard.valor + rivalSecondCard.valor
                        console.log(rivalFirstCard.numero + " " + rivalFirstCard.palo + " + " + rivalSecondCard.numero + " " + rivalSecondCard.palo + " / tantos = " + tantos)
                    }
        
        
                    
            //-----------------------------------
            //-- primer carta ES es una figura --
            //-----------------------------------
                } else {
                    //evaluamos la segunda
                    if (rivalSecondCard.valor < 19) {
                        //segunda carta NO es una figura, entonces evaluamos los tantos
                        let tantos = rivalFirstCard.valor + rivalSecondCard.valor
                        console.log(rivalFirstCard.numero + " " + rivalFirstCard.palo + " + " + rivalSecondCard.numero + " " + rivalSecondCard.palo + " / tantos = " + tantos)
                    } 
                    else { 
                        //segunda carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = 20
                        console.log(rivalFirstCard.numero + " " + rivalFirstCard.palo + " + " + rivalSecondCard.numero + " " + rivalSecondCard.palo + " / tantos = " + tantos)
                    }
                }
            
            } 
        
        //------------------------------------------
        //COMPARACION SEGUNDA CARTA CON TERCERA CARTA
        //-------------------------------------------
    
    
    
        //evaluamos que la SEGUNDA carta tenga el mismo palo que la TERCERA
        if (rivalSecondCard.palo === rivalThirdCard.palo) {
        
            //-----------------------------------
            //-- segunda carta NO es una figura --
            //-----------------------------------
            if (rivalSecondCard.valor < 19) {
                //segunda carta no es una figura entoces, evaluamos segunda carta no sea una figura
                    if (rivalThirdCard.valor < 19) {
                        //tercera carta TAMPOCO es una figura, entonces evaluamos los tantos
                        let tantos = (rivalSecondCard.valor + rivalThirdCard.valor) + 20
                        console.log(rivalSecondCard.numero + " " + rivalSecondCard.palo + " + " + rivalThirdCard.numero + " " + rivalThirdCard.palo + " / tantos = " + tantos)
                    } else {
                        //tercera carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = rivalSecondCard.valor + rivalThirdCard.valor
                        console.log(rivalSecondCard.numero + " " + rivalSecondCard.palo + " + " + rivalThirdCard.numero + " " + rivalThirdCard.palo + " / tantos = " + tantos)
                    }
            
            
                        
            //-----------------------------------
            //-- segunda carta ES es una figura --
            //-----------------------------------
                } else {
                    //evaluamos la tercera
                    if (rivalThirdCard.valor < 19) {
                        //tercera carta NO es una figura, entonces evaluamos los tantos
                        let tantos = rivalSecondCard.valor + rivalThirdCard.valor
                        console.log(rivalSecondCard.numero + " " + rivalSecondCard.palo + " + " + rivalThirdCard.numero + " " + rivalThirdCard.palo + " / tantos = " + tantos)
                    } 
                    else { 
                        //tercera carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = 20
                        console.log(rivalSecondCard.numero + " " + rivalSecondCard.palo + " + " + rivalThirdCard.numero + " " + rivalThirdCard.palo + " / tantos = " + tantos)
                    }
                }
            
            } 
        
        
        //----------------------------------------------
        //COMPARACION TERCERA CARTA CON LA PRIMERA CARTA
        //----------------------------------------------
    
    
        //evaluamos que la TERCERA carta tenga el mismo palo que la PRIMERA
        if (rivalThirdCard.palo === rivalFirstCard.palo) {
        
            //-----------------------------------
            //-- TERCERA carta NO es una figura --
            //-----------------------------------
            if (rivalThirdCard.valor < 19) {
                //TERCERA carta no es una figura entoces, evaluamos primera carta no sea una figura
                    if (rivalFirstCard.valor < 19) {
                        //primera carta TAMPOCO es una figura, entonces evaluamos los tantos
                        let tantos = (rivalThirdCard.valor + rivalFirstCard.valor) + 20
                        console.log(rivalThirdCard.numero + " " + rivalThirdCard.palo + " + " + rivalFirstCard.numero + " " + rivalFirstCard.palo + " / tantos = " + tantos)
                    } else {
                        //primera carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = rivalThirdCard.valor + rivalFirstCard.valor
                        console.log(rivalThirdCard.numero + " " + rivalThirdCard.palo + " + " + rivalFirstCard.numero + " " + rivalFirstCard.palo + " / tantos = " + tantos)
                    }
        
        
                    
            //-----------------------------------
            //-- TERCERA carta ES es una figura --
            //-----------------------------------
                } else {
                    //evaluamos la primera
                    if (rivalFirstCard.valor < 19) {
                        //primera carta NO es una figura, entonces evaluamos los tantos
                        let tantos = rivalThirdCard.valor + rivalFirstCard.valor
                        console.log(rivalThirdCard.numero + " " + rivalThirdCard.palo + " + " + rivalFirstCard.numero + " " + rivalFirstCard.palo + " / tantos = " + tantos)
                    } 
                    else { 
                        //primera carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = 20
                        console.log(rivalThirdCard.numero + " " + rivalThirdCard.palo + " + " + rivalFirstCard.numero + " " + rivalFirstCard.palo + " / tantos = " + tantos)
                    }
                }
            
            } 
        }


        console.log("\n\n\n\n\n\n\n\n\n")
        console.log ("mazo acrualizado :")
        console.log(mazo)
       
        botones()


}





//modular--
//cartas.js
//mazo
//jugador

console.log ("mazo :")
console.log (mazo)
console.log("\n\n\n\n\n\n\n\n\n")


function botones() {
    let btn = $('.igual')
    /* console.log(btn) */
    for(let botones of btn) {
        /* console.log(botones); */
        botones.addEventListener('click', ()=> {
            selectedCardOne(botones.id)
        })
    }
}


function selectedCardOne(id) {
    console.log(id)
}


//-------------------
//Storage y JSON
//--------------------
//session
/* sessionStorage.setItem('nombreUsuario', prompt("por favor ingrese su nombre"));
console.log("Nombre del Usuario: ", sessionStorage.getItem('nombreUsuario') ) */
/* sessionStorage.setItem('edadUsuario', prompt("por favor ingrese su edad"));
console.log("Edad del Usuario: ", sessionStorage.getItem('edadUsuario') ) */

//usuario
/* let usuario = document.getElementById("usuario");
let pUsuario = document.createElement("p");
pUsuario.innerHTML = `Mano de <b>${sessionStorage.getItem("nombreUsuario")}</b>`;
usuario.appendChild(pUsuario); */


//local
const allCartasJSON = JSON.stringify(mazo)
localStorage.setItem("allCartas", allCartasJSON);