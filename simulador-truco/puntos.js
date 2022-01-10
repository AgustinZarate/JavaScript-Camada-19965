let puntosPlayer = 0
let puntosRival = 0
localStorage.setItem('puntosPlayer',JSON.stringify(puntosPlayer))
localStorage.setItem('puntosRival', JSON.stringify(puntosRival))

function sumarPuntosPlayer(puntos) {
    return puntosPlayer += puntos;
};
function sumarPuntosRival(puntos) {
    return puntosRival += puntos;
};

if (puntosPlayer > 0) {
    puntosPlayer = localStorage.getItem('puntosPlayer')
    puntosRival = localStorage.getItem('puntosRival')
}
if (puntosRival > 0) {
    puntosPlayer = localStorage.getItem('puntosPlayer')
    puntosRival = localStorage.getItem('puntosRival')
}
