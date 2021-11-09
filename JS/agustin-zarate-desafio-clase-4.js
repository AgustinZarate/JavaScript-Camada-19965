const descripcion = "elija el numero del apartado para saber el precio: \n" +
    " 1.Titular \n" + 
    " 2.Suplente \n" +
    " para salir escriba (esc)";

let stockCamisetaTitular = 10
let valorCamisetaTitular = 800

let stockCamisetaSuplente = 15
let valorCamisetaSuplente = 500


/* Funciones */
function ventaStockCamisetaTitular (cantidad) {
    stockCamisetaTitular -= cantidad
    console.log (stockCamisetaTitular)
}
function ventaStockCamisetaSuplente (cantidad) {
    stockCamisetaSuplente -= cantidad
    console.log (stockCamisetaSuplente)
}


    
    let opcion = prompt(descripcion)
    
    while (opcion != "esc") {
        switch (opcion) {
            case "1":
                // camisetas titular
                let cantidadCompraTitular = (parseInt(prompt("las camisetas titulares valen $"+ valorCamisetaTitular +", ¿cuantas desean comprar?")));
                if (cantidadCompraTitular <= stockCamisetaTitular) {
                    alert("el precio a abonar por " + cantidadCompraTitular + " camisetas es de " + (valorCamisetaTitular * cantidadCompraTitular))
                    let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                    if (formaDePago == 1) {



                        /* FUNCION DINERO SUFICIENTE */
                        function dineroSuficiente(){
                            let dineroUsuario = parseInt(prompt("Ingrese un valor igual o mayor a $" + (valorCamisetaTitular * cantidadCompraTitular)))
                            if (dineroUsuario == (valorCamisetaTitular * cantidadCompraTitular)) {
                                alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                            /* ------------ Funcion venta---------*/
                                
                            ventaStockCamisetaTitular (cantidadCompraTitular);


                            } else if (dineroUsuario > (valorCamisetaTitular * cantidadCompraTitular)) {
                                alert("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (valorCamisetaTitular * cantidadCompraTitular)))
                                
                                /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaTitular (cantidadCompraTitular);

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
                        let cantidadCuotas = prompt("El valor de su pedido es de $" + (valorCamisetaTitular * cantidadCompraTitular) + "puedes hacerlo en 3 o 6 cuotas")
                        if (cantidadCuotas === 3) {
                            let pedido = ((valorCamisetaTitular * cantidadCompraTitular) / 3)
                            alert("el valor de las cuotas es de $" + pedido)
                            /* ------------ Funcion venta---------*/
                                
                            ventaStockCamisetaTitular (cantidadCompraTitular);

                        } else(cantidadCuotas === 6); {
                            let pedido = ((valorCamisetaTitular * cantidadCompraTitular) / 6)
                            alert("el valor de las cuotas es de $" + pedido)

                            /* ------------ Funcion venta---------*/
                                
                            ventaStockCamisetaTitular (cantidadCompraTitular);
                        }
    
                    }
                    
                } else {
                    alert("La cantidad de camisetas supera al stock existente")
                }
                break;
    
            case "2":
                    // camisetas Suplente
                    let cantidadCompraSuplente = (parseInt(prompt("las camisetas titulares valen $"+ valorCamisetaSuplente +", ¿cuantas desean comprar?")));
                    if (cantidadCompraSuplente <= stockCamisetaSuplente) {
                        alert("el precio a abonar por " + cantidadCompraSuplente + " camisetas es de " + (valorCamisetaSuplente * cantidadCompraSuplente))
                        let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                        if (formaDePago == 1) {


                            /* FUNCION DINERO SUFICIENTE */
                            function dineroSuficiente(){
                                let dineroUsuario = parseInt(prompt("Ingrese un valor iguil o mayor a $" + (valorCamisetaSuplente * cantidadCompraSuplente)))

                                /* SI INGRESA EL VALOR NECESARIO PARA PAGAR */
                                if (dineroUsuario === (valorCamisetaSuplente * cantidadCompraSuplente)) {
                                    alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")


                                    /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaSuplente (cantidadCompraSuplente);


                                /* SI INGRESA MAS DEL VALOR NECESARIO PARA PAGAR */
                                } else if (dineroUsuario > (valorCamisetaSuplente * cantidadCompraSuplente)) {
                                    alert("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (valorCamisetaSuplente * cantidadCompraSuplente)))
                                    

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
                            let cantidadCuotas = prompt("El valor de su pedido es de $" + (valorCamisetaSuplente * cantidadCompraSuplente) + "puedes hacerlo en 3 o 6 cuotas")
                            if (cantidadCuotas === 3) {
                                let pedido = ((valorCamisetaSuplente * cantidadCompraSuplente) / 3)
                                alert("el valor de las cuotas es de $" + pedido)
                                /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaSuplente (cantidadCompraSuplente);
                            } else(cantidadCuotas === 6); {
                                let pedido = ((valorCamisetaSuplente * cantidadCompraSuplente) / 6)
                                alert("el valor de las cuotas es de $" + pedido)
                                /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaSuplente (cantidadCompraSuplente);
                            }
        
                        }
                        
                    } else {
                        alert("La cantidad de camisetas supera al stock existente")
                    }
                    break;
        
            default:
                alert("Por favor elija una opcion correcta al colocar 1 (camiseta titular) o 2 (camiseta suplente)")
                break;
        }
        opcion = prompt(descripcion)
    }
    
