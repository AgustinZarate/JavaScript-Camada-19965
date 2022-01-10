    function displayHand() {
        let firstCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iFirstCard = mazo.indexOf(firstCard);
        mazo.splice(iFirstCard, 1)
        playerHand.push(firstCard)
    
        let secondCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iSecondCard = mazo.indexOf(secondCard);
        mazo.splice(iSecondCard, 1)
        playerHand.push(secondCard)
    
        let thirdCard = mazo[Math.floor(Math.random() * mazo.length)];
        let iThirdCard = mazo.indexOf(thirdCard);
        mazo.splice((iThirdCard), 1)
        playerHand.push(thirdCard)
    
$('#showing').html( `    
<div class="d-flex justify-content-around row" id="playerCards">
<div class="col-4">
<input type="image" src="${playerHand[0].imagen}" id="0" class=" carta mano">
</div>
<div class="col-4">
<input type="image" src="${playerHand[1].imagen}" id="1" class=" carta mano" >
</div>
<div class="col-4">
<input type="image" src="${playerHand[2].imagen}" id="2" class=" carta mano">
</div>
</div>
`   )

$('#juegos').html(`
<div class="col-6">
<button id="truco" class="desaparecer" onclick="btnTruco()">Truco</button>
</div>
<div class="col-6">
<button id="envido" class="desaparecer" onclick="cantarEnvido()">Envido</button>
</div>
`)

$('.mano').show("slow")

    tantosEnvido (firstCard, secondCard, thirdCard)
    botones()
    }


