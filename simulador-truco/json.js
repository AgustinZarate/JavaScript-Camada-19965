const URLJSON = "data/mazo.json"
$.getJSON(URLJSON, function (respuesta, estado) {
    if(estado === "success"){
        let mazo = respuesta;
        for(const carta of mazo) {
        $("#barajaEspañola").append(`
            <div class="cartas-españolas">
                <img src="${carta.imagen}" class="presentation-card" alt="">
            </div>
    `)
    
    }  
    }
    });

$("#españolas").click(() => { 
    $(".cartas-españolas").toggle();
});


