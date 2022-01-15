function tantosEnvido (firstCard, secondCard, thirdCard) {
    if (firstCard.palo === secondCard.palo && firstCard.palo === thirdCard.palo ) {
        tantos = "flor"
        envido.push(tantos)
    } else if (firstCard.palo !== secondCard.palo && secondCard.palo !== thirdCard.palo && firstCard.palo !== thirdCard.palo ) { 
        if (firstCard.envido >= secondCard.envido) {
            if (firstCard.envido >= thirdCard.envido) {
                tantos = firstCard.envido
                envido.push(tantos)
            } else {
                tantos = thirdCard.envido
                envido.push(tantos)
            }
        } else if(secondCard.envido >= thirdCard.envido) {
            tantos = secondCard.envido
            envido.push(tantos)
        } else {
            tantos = thirdCard.envido
            envido.push(tantos)
        }
    } else {
    if (firstCard.palo === secondCard.palo) {
        if (firstCard.envido < 19) {
                if (secondCard.envido < 19) {
                    let tantos = (firstCard.envido + secondCard.envido) + 20
                    envido.push(tantos)
                } else {
                    let tantos = firstCard.envido + secondCard.envido
                    envido.push(tantos)
                }
        } else {
                if (secondCard.envido < 19) {
                    let tantos = firstCard.envido + secondCard.envido
                    envido.push(tantos)
                } 
                else { 
                    let tantos = 20
                    envido.push(tantos)
                }
            }
        } 
    if (secondCard.palo === thirdCard.palo) {
        if (secondCard.envido < 19) {
                if (thirdCard.envido < 19) {
                    let tantos = (secondCard.envido + thirdCard.envido) + 20
                    envido.push(tantos)
                } else {
                    let tantos = secondCard.envido + thirdCard.envido
                    envido.push(tantos)
                }
        } else {
                if (thirdCard.envido < 19) {
                    let tantos = secondCard.envido + thirdCard.envido
                    envido.push(tantos)
                } 
                else { 
                    let tantos = 20
                    envido.push(tantos)
                }
            }
        }
    if (thirdCard.palo === firstCard.palo) {
        if (thirdCard.envido < 19) {
                if (firstCard.envido < 19) {
                    let tantos = (thirdCard.envido + firstCard.envido) + 20
                    envido.push(tantos)
                } else {
                    let tantos = thirdCard.envido + firstCard.envido
                    envido.push(tantos)
                }
        } else {
                if (firstCard.envido < 19) {
                    let tantos = thirdCard.envido + firstCard.envido
                    envido.push(tantos)
                } 
                else { 
                    let tantos = 20
                    envido.push(tantos)
                }
            }
        
        }
    }
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
}