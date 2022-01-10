function cartasEnMesa(dato) {
    $('#mesaJugador').append(`
    <input type="image" src="${playerHand[dato].imagen}" class="carta-mesa remove">
    `)
}

function cartasEnMesaRival(dato) {
    $('#mesaRival').append(`
    <input type="image" src="${dato.imagen}" class="carta-mesa remove">
    `)
}