

function botones() {
    let btn = $('.igual')
    //console.log(btn) // recupera el inner de los nodo con clase "igual" 
    for(let botones of btn) {
        //console.log(botones);
        botones.addEventListener('click', ()=> {
            selectedCard(botones.id)
        })
    }
}


function selectedCard(id) {

    let carta = playerHand[id]
    console.log("carta selecionada : " + carta)
/*     let playerHand = [firstCard, secondCard, thirdCard] */
/*     let iCard = mazo.indexOf();
    mazo.splice(iCard, 1) */
}