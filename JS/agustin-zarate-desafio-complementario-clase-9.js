for (carta of JSON.parse(localStorage.getItem("allCartas"))) {
    let containerCatasMazo = document.createElement("div")
    containerCatasMazo.classList.add('col-1');
    containerCatasMazo.innerHTML = `
    <input class="allCartas" type="image" src="${carta.imagen}" ">
`
document.getElementById("cartasMazo").appendChild(containerCatasMazo);


}  ;
