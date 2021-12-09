function tantosRival () {
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
    }
    