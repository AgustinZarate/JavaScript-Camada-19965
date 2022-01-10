//tantos en el envido
function tantosEnvido (firstCard, secondCard, thirdCard) {
    //TANTOS JUGADOR
    //SI TODAS LAS CARTAS SON IGUALES
    if (firstCard.palo === secondCard.palo && firstCard.palo === thirdCard.palo ) {
        tantos = "flor"
        envido.push(tantos)
        console.log("tenes flor")
    } else if (firstCard.palo !== secondCard.palo && secondCard.palo !== thirdCard.palo && firstCard.palo !== thirdCard.palo ) { 
        //SI NINGUNA CARTA ES IGUAL
        if (firstCard.envido >= secondCard.envido) {
            if (firstCard.envido >= thirdCard.envido) {
                tantos = firstCard.envido
                envido.push(tantos)
                console.log("tantos = " + tantos)
            } else {
                tantos = thirdCard.envido
                envido.push(tantos)
                console.log("tantos = " + tantos)
            }
        } else if(secondCard.envido >= thirdCard.envido) {
            tantos = secondCard.envido
            envido.push(tantos)
            console.log("tantos = " + tantos)
        } else {
            tantos = thirdCard.envido
            envido.push(tantos)
            console.log("tantos = " + tantos)
        }
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
                    envido.push(tantos)
                    console.log(firstCard.numero + " " + firstCard.palo + " + " + secondCard.numero + " " +  secondCard.palo + " / tantos = " + tantos)
                } else {
                    //segunda carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = firstCard.envido + secondCard.envido
                    envido.push(tantos)
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
                    envido.push(tantos)
                    console.log(firstCard.numero + " " + firstCard.palo + " + " + secondCard.numero + " " + secondCard.palo + " / tantos = " + tantos)
                } 
                else { 
                    //segunda carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = 20
                    envido.push(tantos)
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
                    envido.push(tantos)
                    console.log(secondCard.numero + " " + secondCard.palo + " + " + thirdCard.numero + " " + thirdCard.palo + " / tantos = " + tantos)
                } else {
                    //tercera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = secondCard.envido + thirdCard.envido
                    envido.push(tantos)
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
                    envido.push(tantos)
                    console.log(secondCard.numero + " " + secondCard.palo + " + " + thirdCard.numero + " " + thirdCard.palo + " / tantos = " + tantos)
                } 
                else { 
                    //tercera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = 20
                    envido.push(tantos)
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
                    envido.push(tantos)
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                } else {
                    //primera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = thirdCard.envido + firstCard.envido
                    envido.push(tantos)
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
                    envido.push(tantos)
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                } 
                else { 
                    //primera carta TAMBIEN ES una figura, evaluamos tantos
                    let tantos = 20
                    envido.push(tantos)
                    console.log(thirdCard.numero + " " + thirdCard.palo + " + " + firstCard.numero + " " + firstCard.palo + " / tantos = " + tantos)
                }
            }
        
        }
    }
    console.log("\n\n\n\n\n\n\n\n\n")
    }

let juegoEnvido = false

function cantarEnvido() {
    if (mesa.length === 0) {
        if (juegoEnvido === false) {
            juegoEnvido = true
            if (envido[0] === "flor" && envido[1] === "flor"){
                alert(` 
                Player tiene ${envido[0]} 
                Rival tiene ${envido[1]}
                Gana player por ser mano`)
                sumarPuntosPlayer(2)
                usarLocalStorage()
            } else if (envido[0] === "flor") {
                alert(` 
                Gana Player por tener ${envido[0]} `)
                sumarPuntosPlayer(2)
                usarLocalStorage()
            } else if (envido[1] === "flor") {
                alert(`  Rival gana con  ${envido[1]}`)
                sumarPuntosRival(2)
                usarLocalStorage()
            } else if (envido[0] === envido[1]) {
                alert(` 
                Tantos Player  ${envido[0]} 
                tantos rival ${envido[1]}
                gana player por ser mano`)
                sumarPuntosPlayer(2)
                usarLocalStorage()
            } else if (envido[0] > envido[1]) {
                alert(`  Player gana con  ${envido[0]}, sobre los ${envido[1]} del rival `)
                sumarPuntosPlayer(2)
                usarLocalStorage()
            } else if (envido[0] < envido[1]) {
                alert(`  Rival gana con  ${envido[1]}, sobre los ${envido[0]} del Player `)
                sumarPuntosRival(2)
                usarLocalStorage()
            }
        
            localStorage.setItem('puntosPlayer',puntosPlayer)
            localStorage.setItem('puntosRival', puntosRival)
        }else{
            alert("Envido ya a sido cantado")
        }
    } else {
        alert('El Envido solo puede cantarse en la primer mano')
    }

}

function reiniciarEnvido() {
    juegoEnvido = false
    console.log("let juegoEnvido es: " + juegoEnvido)
}