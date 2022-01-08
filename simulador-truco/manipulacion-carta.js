

function botones() {
    let cartas = $('.mano')
    //console.log(cartas) // recupera el inner de los nodo con clase "igual" 
    for(let carta of cartas) {
/*         console.log(carta); */
        $(carta).on('click', ()=> {
            selectedCard(carta.id)
            positionArray(carta.id)
        })
    }
}


//----------------------------------------------------------//
//-----------  DESAPARECER CARTAS CON UN EFECTO ------------//
//----------------------------------------------------------//

function selectedCard(card) {
    console.log(card)
    let carta = "#" + card
    $(carta).slideUp()
} 

//numero aleatorio
/* function genateRandom(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (1 + max - min) + min)
    
}
console.log(genateRandom(1,3)) */






