//tantos en el envido
let tantos = 0

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
        if (firstCard.envido < 19) {
            //primera carta no es una figura entoces, evaluamos segunda carta no sea una figura
                if (secondCard.envido < 19) {
                    //segunda carta TAMPOCO es una figura, entonces evaluamos los tantos
                    let tantos = (firstCard.envido + secondCard.envido) + 20
                    console.log(firstCard.numero + " " + firstCard.palo + " + " + secondCard.numero + " " +  secondCard.palo + " / tantos = " + tantos)
                } else {
                    //segunda carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = firstCard.envido + secondCard.envido
                    console.log(firstCard.numero + " " + firstCard.palo + " + " + secondCard.numero + " " + secondCard.palo + " / tantos = " + tantos)
                }
    
    
                
        //-----------------------------------
        //-- primer carta ES es una figura --
        //-----------------------------------
            } else {
                //evaluamos la segunda
                if (secondCard.envido < 19) {
                    //segunda carta NO es una figura, entonces evaluamos los tantos
                    let tantos = firstCard.envido + secondCard.envido
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
        if (secondCard.envido < 19) {
            //segunda carta no es una figura entoces, evaluamos segunda carta no sea una figura
                if (thirdCard.envido < 19) {
                    //tercera carta TAMPOCO es una figura, entonces evaluamos los tantos
                    let tantos = (secondCard.envido + thirdCard.envido) + 20
                    console.log(secondCard.numero + " " + secondCard.palo + " + " + thirdCard.numero + " " + thirdCard.palo + " / tantos = " + tantos)
                } else {
                    //tercera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = secondCard.envido + thirdCard.envido
                    console.log(secondCard.numero + " " + secondCard.palo + " + " + thirdCard.numero + " " + thirdCard.palo + " / tantos = " + tantos)
                }
        
        
                    
        //-----------------------------------
        //-- segunda carta ES es una figura --
        //-----------------------------------
            } else {
                //evaluamos la tercera
                if (thirdCard.envido < 19) {
                    //tercera carta NO es una figura, entonces evaluamos los tantos
                    let tantos = secondCard.envido + thirdCard.envido
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
        if (thirdCard.envido < 19) {
            //TERCERA carta no es una figura entoces, evaluamos primera carta no sea una figura
                if (firstCard.envido < 19) {
                    //primera carta TAMPOCO es una figura, entonces evaluamos los tantos
                    let tantos = (thirdCard.envido + firstCard.envido) + 20
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                } else {
                    //primera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = thirdCard.envido + firstCard.envido
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                }
    
    
                
        //-----------------------------------
        //-- TERCERA carta ES es una figura --
        //-----------------------------------
            } else {
                //evaluamos la primera
                if (firstCard.envido < 19) {
                    //primera carta NO es una figura, entonces evaluamos los tantos
                    let tantos = thirdCard.envido + firstCard.envido
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

function tantosRival (rivalFirstCard,rivalSecondCard,rivalThirdCard) {
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
            if (rivalFirstCard.envido < 19) {
                //primera carta no es una figura entoces, evaluamos segunda carta no sea una figura
                    if (rivalSecondCard.envido < 19) {
                        //segunda carta TAMPOCO es una figura, entonces evaluamos los tantos
                        let tantos = (rivalFirstCard.envido + rivalSecondCard.envido) + 20
                        console.log(rivalFirstCard.numero + " " + rivalFirstCard.palo + " + " + rivalSecondCard.numero + " " +  rivalSecondCard.palo + " / tantos = " + tantos)
                    } else {
                        //segunda carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = rivalFirstCard.envido + rivalSecondCard.envido
                        console.log(rivalFirstCard.numero + " " + rivalFirstCard.palo + " + " + rivalSecondCard.numero + " " + rivalSecondCard.palo + " / tantos = " + tantos)
                    }
        
        
                    
            //-----------------------------------
            //-- primer carta ES es una figura --
            //-----------------------------------
                } else {
                    //evaluamos la segunda
                    if (rivalSecondCard.envido < 19) {
                        //segunda carta NO es una figura, entonces evaluamos los tantos
                        let tantos = rivalFirstCard.envido + rivalSecondCard.envido
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
            if (rivalSecondCard.envido < 19) {
                //segunda carta no es una figura entoces, evaluamos segunda carta no sea una figura
                    if (rivalThirdCard.envido < 19) {
                        //tercera carta TAMPOCO es una figura, entonces evaluamos los tantos
                        let tantos = (rivalSecondCard.envido + rivalThirdCard.envido) + 20
                        console.log(rivalSecondCard.numero + " " + rivalSecondCard.palo + " + " + rivalThirdCard.numero + " " + rivalThirdCard.palo + " / tantos = " + tantos)
                    } else {
                        //tercera carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = rivalSecondCard.envido + rivalThirdCard.envido
                        console.log(rivalSecondCard.numero + " " + rivalSecondCard.palo + " + " + rivalThirdCard.numero + " " + rivalThirdCard.palo + " / tantos = " + tantos)
                    }
            
            
                        
            //-----------------------------------
            //-- segunda carta ES es una figura --
            //-----------------------------------
                } else {
                    //evaluamos la tercera
                    if (rivalThirdCard.envido < 19) {
                        //tercera carta NO es una figura, entonces evaluamos los tantos
                        let tantos = rivalSecondCard.envido + rivalThirdCard.envido
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
            if (rivalThirdCard.envido < 19) {
                //TERCERA carta no es una figura entoces, evaluamos primera carta no sea una figura
                    if (rivalFirstCard.envido < 19) {
                        //primera carta TAMPOCO es una figura, entonces evaluamos los tantos
                        let tantos = (rivalThirdCard.envido + rivalFirstCard.envido) + 20
                        console.log(rivalThirdCard.numero + " " + rivalThirdCard.palo + " + " + rivalFirstCard.numero + " " + rivalFirstCard.palo + " / tantos = " + tantos)
                    } else {
                        //primera carta TAMBIEN ES una figura, evaluamos tantos
                        let tantos = rivalThirdCard.envido + rivalFirstCard.envido
                        console.log(rivalThirdCard.numero + " " + rivalThirdCard.palo + " + " + rivalFirstCard.numero + " " + rivalFirstCard.palo + " / tantos = " + tantos)
                    }
        
        
                    
            //-----------------------------------
            //-- TERCERA carta ES es una figura --
            //-----------------------------------
                } else {
                    //evaluamos la primera
                    if (rivalFirstCard.envido < 19) {
                        //primera carta NO es una figura, entonces evaluamos los tantos
                        let tantos = rivalThirdCard.envido + rivalFirstCard.envido
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
