function displayRival () {
    let rivalFirstCard = mazo[Math.floor(Math.random() * mazo.length)];
    let iRivalFirstCard = mazo.indexOf(rivalFirstCard);
    mazo.splice(iRivalFirstCard, 1)
    rivalHand.push(rivalFirstCard)


    let rivalSecondCard = mazo[Math.floor(Math.random() * mazo.length)];
    let iRivalSecondCard = mazo.indexOf(rivalSecondCard);
    mazo.splice(iRivalSecondCard, 1)
    rivalHand.push(rivalSecondCard)
    
    let rivalThirdCard = mazo[Math.floor(Math.random() * mazo.length)];
    let iRivalThirdCard = mazo.indexOf(rivalThirdCard);
    mazo.splice((iRivalThirdCard), 1)
    rivalHand.push(rivalThirdCard)
//Array mano del rival
/* let rivalHand = [rivalFirstCard, rivalSecondCard, rivalThirdCard] */
console.log("mano rival :")
console.log(rivalHand)

let rivalCards = 
$('#rivalCards').html(`    
<div class="d-flex justify-content-around row"" id="rivalCards">
<div class="col-4">
    <input type="image" src="${rivalHand[0].imagen}" id="btn" class="btn carta" onclick="">
    </div>
    <div class="col-4">
    <input type="image" src="${rivalHand[1].imagen}" id="btn" class="btn carta" onclick="">
    </div>
    <div class="col-4">
    <input type="image" src="${rivalHand[2].imagen}" id="btn" class="btn carta" onclick="">
    </div>
</div>
`)

tantosRival (rivalFirstCard,rivalSecondCard,rivalThirdCard)
}