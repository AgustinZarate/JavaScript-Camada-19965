function tantosPlayer (firstCard, secondCard, thirdCard) {


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
}
