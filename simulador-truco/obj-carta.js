class Carta {

    constructor(numero, palo, valor, jerarquia, imagen, reverso) {
        
        this.numero = numero;
        this.palo = palo;
        this.valor = valor;
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