    function displayHand() {
        let firstCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iFirstCard = mazo.indexOf(firstCard); //busca el nuevo indice para que no se repita la carta
        mazo.splice(iFirstCard, 1)
    
    
        let secondCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iSecondCard = mazo.indexOf(secondCard);
        mazo.splice(iSecondCard, 1)
    
    
        let thirdCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iThirdCard = mazo.indexOf(thirdCard);
        mazo.splice((iThirdCard), 1)
    
    //Array mano del jugador
    let playerHand = [firstCard, secondCard, thirdCard]
    console.log("mano jugador :")
    console.log(playerHand)
    

//.html() remplaza a innerHTML en JQuery
$('#showing').html( `    
<div class="d-flex justify-content-around row" id="playerCards">
<div class="col-4">
<input type="image" src="${playerHand[0].imagen}" id="cardOne" class=" carta mano">
</div>
<div class="col-4">
<input type="image" src="${playerHand[1].imagen}" id="CardTwo" class=" carta mano" >
</div>
<div class="col-4">
<input type="image" src="${playerHand[2].imagen}" id="cardThree" class=" carta mano">
</div>
</div>
`   )


//-------------------------------------------------------//
//-----------  APARECER CARTAS CON UN EFECTO ------------//
//-------------------------------------------------------//


$('.mano').show("slow")


    console.log('primera')


    //tantos del envido
    tantosPlayer (firstCard, secondCard, thirdCard)
    botones()
    }
