

function botones() {
    let cartas = $('.mano')
    //console.log(cartas) // recupera el inner de los nodo con clase "igual" 
    for(let carta of cartas) {
        console.log(carta);
        $(carta).on('click', ()=> {
            selectedCard(carta.id)
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
/*     playerHand.splice(carta, 1) */
} 