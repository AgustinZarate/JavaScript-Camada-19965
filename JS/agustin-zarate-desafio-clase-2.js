//Desafio clase 2
//Crear un algoritmo con un condicional
let heladoChocolate = 80
let stockHeladoCholoclate = 5
let pedido = parseInt(prompt("Bienvenido a nuestra heladeria, el helado de chocolate cuesta $" + heladoChocolate +  " , ¿Cuantos helados quiere llevar?"))
if (pedido <= stockHeladoCholoclate) {
    let valorPedido = (heladoChocolate * pedido)
alert ("el valor de su pedido es de " + valorPedido)
stockHeladoCholoclate = stockHeladoCholoclate - pedido
console.log (stockHeladoCholoclate) 
} else {
    alert ("lo sentimos pero no contamos con el stock necesario \n" +
            "el stock actual es de " + stockHeladoCholoclate)
}




