//----------------
//--- CLASE:
//----------------
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

//----------------------------------------------------------------//
//--- VARIABLES DE LOS PRODUCTOS CON SU CONSTRUCTOR (OBJETOS) ---//
//--------------------------------------------------------------//

let camisetaTitular = new Producto("Camiseta titular", "azul y rojo", 10, 800, "camiseta")
let camisetaSuplente = new Producto("Camista suplente", "blanco", 15, 700, "camiseta")


//------------------------------------------------------//
//--- ARRAY DONDE GUARDAR LOS OBJETOS ---//
//----------------------------------------------------//

let camisetas = []
camisetas.push (camisetaTitular, camisetaSuplente)

//COLOCAR DIRECTAMENTE UN OBJETO NUEVO AL ARRAY
camisetas.push(new Producto("Camiseta arquero", "negra", 5, 500, "camiseta"))
camisetas.push(new Producto("Camiseta entrenamiento", "negra", 5, 250, "camiseta"))




//------------------------------------------------------//     
//--------------------- METODO .MAP -------------------//       //--- EL UNICO PROBLEMA ACA ES QUE AL SABER EXACTAMENTE DONDE ESTA UBICADO CADA OBJETO EN EL ARRAY ---//
//----------------------------------------------------//        
//map precio camiseta
const precioCamiseta = camisetas.map(function (camiseta) {
    return camiseta.precio
});
//map stock camiseta
const stockCamiseta = camisetas.map(function (camiseta) {            
    return camiseta.stock
});
const nombreCamiseta = camisetas.map(function (camiseta) {
    return camiseta.nombre
});
//ahora llevar precioCamisetas[0/1/3] al while para usar la variable  

//------------------------------------------------------//    
//------------------- METODO .FILTER ------------------//    //--- USO EL FILTER PARA TENER UN ARRAY APARTE Y NO MODIFICAR EL ORIGINAL --//
//----------------------------------------------------//    

const preciosCamisetas = camisetas.filter(function (camiseta) {
    return camiseta.precio > 0

});

//------------------------------------------------------//  //------- SIRVE PARA ORDENAR LOS ARRAYS SEGUN SU "UNICODE"-----//
//-------------------- METODO .SORT -------------------//   //------- CON LOS N° Y OBJETOS SE DEBE DE USAR UNA FUNCION ----//
//----------------------------------------------------//   //------ let numeros = [5, 1, 20, 65, 10]    |     let numerosOrdenados = numeros.sort(function(a, b) {return a-b}); ---//


let preciosOrdenados = preciosCamisetas.sort(function(a, b) {
    return a.precio - b.precio
});

console.log ("precios desorneado = ")
console.log (camisetas)
console.log ("precios ordenados con sort = ")
console.log(preciosOrdenados)





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
                let cantidadCompraTitular = (parseInt(prompt("las camisetas titulares valen $"+   precioCamiseta[0] +", ¿cuantas desean comprar?")));
                if (cantidadCompraTitular <= stockCamiseta[0]) {
                    alert("el precio a abonar por " + cantidadCompraTitular + " camisetas es de " + (precioCamiseta[0] * cantidadCompraTitular))
                    let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                    if (formaDePago == 1) {



                        /* FUNCION DINERO SUFICIENTE */
                        function dineroSuficiente(){
                            let dineroUsuario = parseInt(prompt("Ingrese un valor igual o mayor a $" + (precioCamiseta[0] * cantidadCompraTitular)))
                            if (dineroUsuario == (precioCamiseta[0] * cantidadCompraTitular)) {
                                alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")
                            /* ------------ Funcion venta---------*/
                                
                            camisetaTitular.venta (cantidadCompraTitular);


                            } else if (dineroUsuario > (precioCamiseta[0] * cantidadCompraTitular)) {
                                alert("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (precioCamiseta[0] * cantidadCompraTitular)))
                                
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
                        let cantidadCuotas = prompt("El valor de su pedido es de $" + (precioCamiseta[0] * cantidadCompraTitular) + "puedes hacerlo en 3 o 6 cuotas")
                        if (cantidadCuotas === 3) {
                            let pedido = ((precioCamiseta[0] * cantidadCompraTitular) / 3)
                            alert("el valor de las cuotas es de $" + pedido)
                            /* ------------ Funcion venta---------*/
                                
                            camisetaTitular.venta(cantidadCompraTitular);

                        } else(cantidadCuotas === 6); {
                            let pedido = ((precioCamiseta[0] * cantidadCompraTitular) / 6)
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
                    let cantidadCompraSuplente = (parseInt(prompt("las camisetas titulares valen $"+ precioCamiseta[1] +", ¿cuantas desean comprar?")));
                    if (cantidadCompraSuplente <= stockCamiseta[1]) {
                        alert("el precio a abonar por " + cantidadCompraSuplente + " camisetas es de " + (precioCamiseta[1] * cantidadCompraSuplente))
                        let formaDePago = prompt("desea abonar con 1.efectivo o 2.tarjeta de credito?")
                        if (formaDePago == 1) {


                            /* FUNCION DINERO SUFICIENTE */
                            function dineroSuficiente(){
                                let dineroUsuario = parseInt(prompt("Ingrese un valor iguil o mayor a $" + (precioCamiseta[1] * cantidadCompraSuplente)))

                                /* SI INGRESA EL VALOR NECESARIO PARA PAGAR */
                                if (dineroUsuario === (precioCamiseta[1] * cantidadCompraSuplente)) {
                                    alert("Perfecto, su compra fue efectuada con exito. Muchas Gracias!")


                                    /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaSuplente (cantidadCompraSuplente);


                                /* SI INGRESA MAS DEL VALOR NECESARIO PARA PAGAR */
                                } else if (dineroUsuario > (precioCamiseta[1] * cantidadCompraSuplente)) {
                                    alert("Perfecto, su compra fue efectuada con exito, su vuelto es de $" + (dineroUsuario - (precioCamiseta[1] * cantidadCompraSuplente)))
                                    

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
                            let cantidadCuotas = prompt("El valor de su pedido es de $" + (precioCamiseta[1] * cantidadCompraSuplente) + "puedes hacerlo en 3 o 6 cuotas")
                            if (cantidadCuotas === 3) {
                                let pedido = ((precioCamiseta[1] * cantidadCompraSuplente) / 3)
                                alert("el valor de las cuotas es de $" + pedido)
                                /* ------------ Funcion venta---------*/
                                
                                ventaStockCamisetaSuplente (cantidadCompraSuplente);
                            } else(cantidadCuotas === 6); {
                                let pedido = ((precioCamiseta[1] * cantidadCompraSuplente) / 6)
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
    
