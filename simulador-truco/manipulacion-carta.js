function botones() {
    let cartas = $('.mano')
    for(let carta of cartas) {
        $(carta).on('click', ()=> {
            selectedCard(carta.id)
            positionArray(carta.id)
        })
    }
    
}

function selectedCard(card) {
    let carta = "#" + card
    $(carta).slideUp()
    cartasEnMesa(card)
} 







