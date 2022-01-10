class Carta {
    constructor(numero, palo, envido, jerarquia, imagen, reverso) {
        this.numero = numero;
        this.palo = palo;
        this.envido = envido;
        this.jerarquia = jerarquia
        this.imagen = imagen
        this.reverso = reverso
        this.id = Carta.ID++
    }
    static ID = 1
        playerTantos(carta) {
        carta + 10
        }
    }