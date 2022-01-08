const URLJSON = "data/mazo.json"
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
        let mazo = respuesta;
        for(const carta of mazo) {
        $("#barajaEspañola").append(`
            <div class="toogle">
                <img src="${carta.imagen}" class="presentation-card hover-card" alt="">
            </div>
    `)
    }
        $("#descritionEspañolas").prepend(` 
           
            <div class="toogle text-center">
                <p>Estas son las 40 cartas que se utilizan para jugar al Truco Argentino</p>
                <p>Es la habitual bajara española, <b style="color: red"> sin utilizar los  8, 9 ni comodines </b> </p>
            </div>
        `)   
    }
    });

$("#españolas").click(() => { 
    $(".toogle").toggle();
});




