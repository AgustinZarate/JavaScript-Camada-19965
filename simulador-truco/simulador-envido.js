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

let usuario = localStorage.getItem('nombreUsuario')
function cantarEnvido() {
    if (mesa.length === 0) {
        if (juegoEnvido === false) {
            juegoEnvido = true
            if (envido[0] === "flor" && envido[1] === "flor"){
                VanillaToasts.create({
                    title:'Envido',
                    text: `${usuario} tiene ${envido[0]} <br>
                    Estalinslao tiene ${envido[1]} <br>
                    Gana ${usuario} por ser mano <br>
                    suma 2pt`,
                    type: 'success',
                    icon: 'img/success.png',
                    timeout: 3000,
                 });
                sumarPuntosPlayer(2)
                usarLocalStorage()
            } else if (envido[0] === "flor") {
                VanillaToasts.create({
                    title:'Envido',
                    text: `Gana ${usuario} por tener ${envido[0]} <br>
                    suma 2pt`,
                    type: 'success',
                    icon: 'img/success.png',
                    timeout: 3000,
                 });
                sumarPuntosPlayer(2)
                usarLocalStorage()
            } else if (envido[1] === "flor") {
                VanillaToasts.create({
                    title:'Envido',
                    text: `Estalinslao gana con  ${envido[1]} <br>
                    suma 2pt`,
                    type: 'success',
                    icon: 'img/error.png',
                    timeout: 3000,
                 });
                sumarPuntosRival(2)
                usarLocalStorage()
            } else if (envido[0] === envido[1]) {
                VanillaToasts.create({
                    title:'Envido',
                    text: `Tantos ${usuario}  ${envido[0]} <br>
                    tantos Estalinslao ${envido[1]} <br>
                    gana ${usuario} por ser mano <br>
                    suma 2pt`,
                    type: 'success',
                    icon: 'img/success.png',
                    timeout: 3000,
                 });
                sumarPuntosPlayer(2)
                usarLocalStorage()
            } else if (envido[0] > envido[1]) {
                VanillaToasts.create({
                    title:'Envido',
                    text: `${usuario} gana con  ${envido[0]}, <br>
                    sobre los ${envido[1]} de Estalinslao <br>
                    suma 2pt`,
                    type: 'success',
                    icon: 'img/success.png',
                    timeout: 3000,
                 });
                sumarPuntosPlayer(2)
                usarLocalStorage()
            } else if (envido[0] < envido[1]) {
                VanillaToasts.create({
                    title:'Envido',
                    text: `Estalinslao gana con  ${envido[1]}, <br>
                    sobre los ${envido[0]} de ${usuario}
                    suma 2pt`,
                    type: 'error',
                    icon: 'img/error.png',
                    timeout: 3000,
                 });
                sumarPuntosRival(2)
                usarLocalStorage()
            }
            localStorage.setItem('puntosPlayer',puntosPlayer)
            localStorage.setItem('puntosRival', puntosRival)
        }else{
            VanillaToasts.create({
                title:`Envido`,
                text: `Envido ya a sido cantado`,
                type: `error`,
                icon: `img/error.png`,
                timeout: 3000,
             });
            
        }
    } else {
        VanillaToasts.create({
            title:`Envido`,
            text: `El Envido solo puede cantarse en la primer mano`,
            type: `error`,
            icon: `img/error.png`,
            timeout: 3000,
         });
    }
}
function reiniciarEnvido() {
    juegoEnvido = false
}