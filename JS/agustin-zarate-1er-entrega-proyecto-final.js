





//----------------
//--- CLASE:
//----------------
class Producto {

    constructor(id, nombre, color, stock, precio, tipo, imagen, vendido) {
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.stock = stock;
        this.precio = precio;
        this.tipo = tipo;
        this.imagen = imagen;
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



//------------------------------------------------------//
//--- ARRAY DONDE GUARDAR LOS OBJETOS ---//
//----------------------------------------------------//


//COLOCAR DIRECTAMENTE UN OBJETO NUEVO AL ARRAY


//ARRAY CON TODOS LOS PRODUCTOS

const allProductos = []
//camisetas
allProductos.push(new Producto(1, "Camiseta titular", "azul y rojo", 10, 800, "camiseta", "/img/camiseta_titular.webp"))
allProductos.push(new Producto(2, "Camista suplente", "blanco", 15, 700, "camiseta", "/img/camiseta_suplente.png"))
allProductos.push(new Producto(3, "Camiseta arquero", "negra", 5, 500, "camiseta", "/img/camiseta_arquero.jpg"))
/* indumentaria */
allProductos.push(new Producto(4, "bolso", "negro", 3, 500, "indumentaria", "/img/bolso.png"))
allProductos.push(new Producto(5, "short", "azul", 5, 400, "indumentaria","/img/short.jpg"))
allProductos.push(new Producto(6, "remera entrenamiento", "azul", 3, 500, "indumentaria","/img/remera_entrenamiento.webp"))
allProductos.push(new Producto(7, "canilleras", "azul y rojo", 7, 600, "indumentaria","/img/canilleras.jpg"))
/* accesorios */
allProductos.push(new Producto(8, "barbijo", "azul y rojo", 10, 150, "accesorio", "/img/barbijo.jpg"))
allProductos.push(new Producto(9, "reloj", "negro", 2, 1500, "accesorio","/img/reloj.jpg"))




//------------------------------------------------------//     
//--------------------- METODO .MAP -------------------//       //--- EL UNICO PROBLEMA ACA ES QUE AL SABER EXACTAMENTE DONDE ESTA UBICADO CADA OBJETO EN EL ARRAY ---//
//----------------------------------------------------//        
//map precio camiseta
const precioCamiseta = allProductos.map(function (producto) {
    return producto.precio
});
//map stock producto
const stockCamiseta = allProductos.map(function (producto) {            
    return producto.stock
});
const nombreCamiseta = allProductos.map(function (producto) {
    return producto.nombre
});
//ahora llevar precioCamisetas[0/1/3] al while para usar la variable  

//------------------------------------------------------//    
//------------------- METODO .FILTER ------------------//    //--- USO EL FILTER PARA TENER UN ARRAY APARTE Y NO MODIFICAR EL ORIGINAL --//
//----------------------------------------------------//    

const preciosProductos = allProductos.filter(function (producto) {
    return producto.precio > 0

});

//------------------------------------------------------//  //------- SIRVE PARA ORDENAR LOS ARRAYS SEGUN SU "UNICODE"-----//
//-------------------- METODO .SORT -------------------//   //------- CON LOS N° Y OBJETOS SE DEBE DE USAR UNA FUNCION ----//
//----------------------------------------------------//   //------ let numeros = [5, 1, 20, 65, 10]    |     let numerosOrdenados = numeros.sort(function(a, b) {return a-b}); ---//


let preciosOrdenados = preciosProductos.sort(function(a, b) {
    return a.precio - b.precio
});

console.log ("precios desorneado = ")
console.log (allProductos)
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
    




    //Ingresar datos en el storage


//session
/* sessionStorage.setItem('nombreUsuario', prompt("por favor ingrese su nombre"));
console.log("Nombre del Usuario: ", sessionStorage.getItem('nombreUsuario') )
sessionStorage.setItem('edadUsuario', prompt("por favor ingrese su edad"));
console.log("Edad del Usuario: ", sessionStorage.getItem('edadUsuario') ) */


//local
const allProductosJSON = JSON.stringify(allProductos)
localStorage.setItem("allProductos", allProductosJSON);
//console.log("Productos: ", JSON.parse( localStorage.getItem("allProductos")) )

/* 
1)transformamos el objeto "allProductos" en JSON, con stringify (transforma el objeto en string)
2)guardarlo en el localStorage
3)usar JSON.parse para transformarlo de vuelta a objeto y usarlo correctamente
*/