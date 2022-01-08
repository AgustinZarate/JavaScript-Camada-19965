/* const preciosCamisetas = camisetas.filter(function (camiseta) {   //-----------Se hace un array con filter para capturar los objetos----------//
    return camiseta.precio > 0

}); */ 

//------------------------------------------------------//  //------- SIRVE PARA ORDENAR LOS ARRAYS SEGUN SU "UNICODE"-----//
//-------------------- METODO .SORT -------------------//   //------- CON LOS N° Y OBJETOS SE DEBE DE USAR UNA FUNCION ----//
//----------------------------------------------------//   //------ let numeros = [5, 1, 20, 65, 10]    |     let numerosOrdenados = numeros.sort(function(a, b) {return a-b}); ---//


/* let preciosOrdenados = preciosCamisetas.sort(function(a, b) {
    return a.precio - b.precio
}); */

const jerarquiasMazo = mazo.filter(function (carta) {
    return carta.jerarquia > 0
});

let cartasOrdenadasJerarquia = jerarquiasMazo.sort(function(a, b) {
    return a.jerarquia - b.jerarquia
});
console.log("Ordenadas:");
console.log(cartasOrdenadasJerarquia);

$("#cartasJerarquia").append(`
<div class="toogle-2">
    <div class="row">
        <p >Lista para entender mejor las jerarquias de las cartas. <br>
        <span>Llamese "ancho" a el 1 de espada y el 1 de basto</span>
        </p>
        <div class="col-4">
        <h4>Cartas mas altas</h4>
            <ol>
                <li> El ancho de espada 🗡️ es la carta mas alta del juego 🤩</li>


                <li> El ancho de basto 🧹 es la segunda carta mas alta del juego 😉</li>

                <li> El 7 de espadas ⚔️ es la tercer carta mas alta del juego 😎</li>
            

                <li> El 7 de Oro 🟡 es la cuarta carta mas alta del juego 😏</li>

                <hr style="color: black; border: 2px solid;">
            
            </ol>
        </div>
        <div class="col-4">
        <h4>Cartas buenas para jugar</h4>
        <ol start="5">
            <li> Todos los 3️⃣ 😝</li>

            <li> Todos los 2️⃣ 😗</li>

            <li> Los 1️⃣ restantes (Copa y Oro) 😒</li>
        
        </ol>

        <hr style="color: black; border: 2px solid;">
        <ol start="6">
            <li> Todos los 12 👑 😐</li>
        
        </ol>
        </div>


        <div class="col-4">
        <h4>Resto de cartas</h4>
        <hr style="color: black; border: 2px solid;">
        <span class="span-gris">*En orden numero del mayor al menor</span>
        
        <ol start="7">
                <li> Todos los 11 🐴 🙃</li>
                <li> Todos los 10 💁🏻‍♂️ 🤨</li>
                <li> Los 7️⃣ restantes (Basto y Copa) 🙁</li>
                <li> Todos los 6️⃣ 🥺</li>
                <li> Todos los 5️⃣ 😢</li>
                <li> Todos los 4️⃣ 😭</li>
            </ol>
        </div>
        <hr style="color: black; border: 2px solid;">
        
    </div>

    <h4 class="text-center" >Representadas de izquierda a derecha estan colocadas las cartas
    con mayor jerarquia.</h4>
`)

for(const carta of cartasOrdenadasJerarquia) {
    $("#cartasJerarquia").append(`
    
        <div class="col-1 toogle-2">
            <img src="${carta.imagen}" class="presentation-card hover-card" alt="">
        </div>
`)
} 

$("#jerarquias").click(() => { 
    $(".toogle-2").toggle();
});
