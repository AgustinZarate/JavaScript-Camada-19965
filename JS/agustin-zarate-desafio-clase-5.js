
class Producto {

    constructor(nombre, color, stock, precio, tipo, vendido) {
        this.nombre = nombre;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
        this.tipo = tipo;
        this.vendido = false;
    }
    venta(venta) {
        this.stock -= venta;
    };
    compra(compra) {
        this.stock += compra;
    };
    vendido() {
        if (this.stock === 0) {
            this.vendido = true
        }
    }
}

let camisetaTitular = new Producto("Camiseta titular", "azul y rojo", 10, 800, "camiseta")
let camisetaSuplente = new Producto("Camista suplente", "blanco", 15, 700, "camiseta")
let stockCamisetaTitular = 10
let valorCamisetaTitular = 800

let stockCamisetaSuplente = 15
let valorCamisetaSuplente = 500


const descripcion = "elija el numero del apartado para saber el precio: \n" +
    " 1.Titular \n" + 
    " 2.Suplente \n" +
    " 3.Proveedor (venta de camisetas al por mayor) \n" +
    " para salir escriba (esc)";



/* Funciones */
function ventaStockCamisetaTitular (cantidad) {
    stockCamisetaTitular -= cantidad
    console.log (stockCamisetaTitular)
}
function ventaStockCamisetaSuplente (cantidad) {
    stockCamisetaSuplente -= cantidad
    console.log (stockCamisetaSuplente)
}

function adquisicionStockCamisetaTitular(cantidad) {
    stockCamisetaTitular += cantidad
    console.log (stockCamisetaTitular)
}
function adquisicionStockCamisetaSuplente(cantidad) {
    stockCamisetaSuplente += cantidad
    console.log (stockCamisetaSuplente)
}


    
    let opcion = prompt(descripcion)
    
    while (opcion != "esc") {
        switch (opcion) {
            case "1":
                // camisetas titular
                let cantidadCompraTitular = (parseInt(prompt("las camisetas titulares valen $"+ camisetaTitular.precio +", ¿cuantas desean comprar?")));
                if (cantidadCompraTitular <= camisetaTitular.stock) {
                    alert("el precio a abonar por " + cantidadCompraTitular + " camisetas es de " + (camisetaTitular.precio * cantidadCompraTitular))
                    let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                    if (formaDePago == 1) {



                        /* FUNCION DINERO SUFICIENTE */
                        function dineroSuficiente(){
                            let dineroUsuario = parseInt(prompt("Ingrese un valor igual o mayor a $" + (camisetaTitular.precio * cantidadCompraTitular)))
                            if (dineroUsuario == (camisetaTitular.precio * cantidadCompraTitular)) {
                                alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                            /* ------------ Funcion venta---------*/
                                
                            camisetaTitular.venta (cantidadCompraTitular);


                            } else if (dineroUsuario > (camisetaTitular.precio * cantidadCompraTitular)) {
                                alert("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (camisetaTitular.precio * cantidadCompraTitular)))
                                
                                /* ------------ Funcion venta---------*/
                                
                                camisetaTitular.venta(cantidadCompraTitular);

                                } 
                                else {
                                    alert("Dinero insuficiente")
                                    dineroSuficiente()
                                }
                                
                    }
                    /* RECURSIVIDAD */
                    dineroSuficiente()

                    /* Tarjeta de Credito */
                    } else if (formaDePago == 2) {
                        let cantidadCuotas = prompt("El valor de su pedido es de $" + (camisetaTitular.precio * cantidadCompraTitular) + "puedes hacerlo en 3 o 6 cuotas")
                        if (cantidadCuotas === 3) {
                            let pedido = ((camisetaTitular.precio * cantidadCompraTitular) / 3)
                            alert("el valor de las cuotas es de $" + pedido)
                            /* ------------ Funcion venta---------*/
                                
                            camisetaTitular.venta(cantidadCompraTitular);

                        } else(cantidadCuotas === 6); {
                            let pedido = ((camisetaTitular.precio * cantidadCompraTitular) / 6)
                            alert("el valor de las cuotas es de $" + pedido)

                            /* ------------ Funcion venta---------*/
                                
                            camisetaTitular.venta(cantidadCompraTitular);
                        }
    
                    }
                    
                } else {
                    alert("La cantidad de camisetas supera al stock existente")
                }
                break;
    
            case "2":
                    // camisetas Suplente
                    let cantidadCompraSuplente = (parseInt(prompt("las camisetas titulares valen $"+ camisetaSuplente.precio +", ¿cuantas desean comprar?")));
                    if (cantidadCompraSuplente <= stockCamisetaSuplente) {
                        alert("el precio a abonar por " + cantidadCompraSuplente + " camisetas es de " + (camisetaSuplente.precio * cantidadCompraSuplente))
                        let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                        if (formaDePago == 1) {


                            /* FUNCION DINERO SUFICIENTE */
                            function dineroSuficiente(){
                                let dineroUsuario = parseInt(prompt("Ingrese un valor iguil o mayor a $" + (camisetaSuplente.precio * cantidadCompraSuplente)))

                                /* SI INGRESA EL VALOR NECESARIO PARA PAGAR */
                                if (dineroUsuario === (camisetaSuplente.precio * cantidadCompraSuplente)) {
                                    alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")


                                    /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaSuplente (cantidadCompraSuplente);


                                /* SI INGRESA MAS DEL VALOR NECESARIO PARA PAGAR */
                                } else if (dineroUsuario > (camisetaSuplente.precio * cantidadCompraSuplente)) {
                                    alert("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (camisetaSuplente.precio * cantidadCompraSuplente)))
                                    

                                    /* ------------ Funcion venta---------*/
                                
                                    ventaStockCamisetaSuplente (cantidadCompraSuplente);

                                    /* SI NO LLEGA AL DINERO NECESARIO */
                                }else {
                                        alert("Dinero insuficiente")
                                        dineroSuficiente()
                                    }
                            }
                            dineroSuficiente()
                            

                            /* Tarjeta de Credito */
                        } else if (formaDePago == 2) {
                            let cantidadCuotas = prompt("El valor de su pedido es de $" + (camisetaSuplente.precio * cantidadCompraSuplente) + "puedes hacerlo en 3 o 6 cuotas")
                            if (cantidadCuotas === 3) {
                                let pedido = ((camisetaSuplente.precio * cantidadCompraSuplente) / 3)
                                alert("el valor de las cuotas es de $" + pedido)
                                /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaSuplente (cantidadCompraSuplente);
                            } else(cantidadCuotas === 6); {
                                let pedido = ((camisetaSuplente.precio * cantidadCompraSuplente) / 6)
                                alert("el valor de las cuotas es de $" + pedido)
                                /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaSuplente (cantidadCompraSuplente);
                            }
        
                        }
                        
                    } else {
                        alert("La cantidad de camisetas supera al stock existente")
                    }
                    break;

            case "3": 
                    let ventaCamisetas = parseInt(prompt("Bienvenido, usted nos quiere vender camisetas \n 1. Titulares \n o 2. Suplentes" ))
                    if (ventaCamisetas = 1) {
                        let compraStockTitular = parseInt(prompt ("Por camiseta nosotros entregaremos $650, cuantas camisetas quiere vendernos"))
                        if (compraStockTitular > 0) {
                            alert ("Muchas grcias, el valor de su venta es de " + (compraStockTitular * 650))
                            adquisicionStockCamisetaTitular(compraStockTitular)
                        }

                    } else if (ventaCamisetas = 2) {
                        let compraStockSuplente = parseInt(prompt ("Por camiseta nosotros entregaremos $500, cuantas camisetas quiere vendernos"))
                        if (compraStockSuplente > 0) {
                            alert ("Muchas grcias, el valor de su venta es de " + (compraStockSuplente * 500))
                            adquisicionStockCamisetaSuplente(compraStockSuplente)
                        }


                    }
                break;


            default:
                alert("Por favor elija una opcion correcta al colocar 1 (camiseta titular), 2 (camiseta suplente) o 3 (Venta de camisetas al por mayor)")
                break;
        }
        opcion = prompt(descripcion)
    }
    
