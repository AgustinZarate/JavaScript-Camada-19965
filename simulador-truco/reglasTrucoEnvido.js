$("#reglasTruco").append(`
<div class="toogle-3">
<ol>
    <td>Puntos en juego</td>
    <li><b class="b-azul">Truco:</b> 2pts</li>
</ol>
<p>El jugador que cante <b class="b-azul">truco</b> poner en juego los puntos.<br>
</p>
<p>Las manos se juegan al mejor de 3 cartas</p>
<p><span class="b-gris">Ej: Jugador gana la primer mano / Rival gana la segunda mano / Jugador gana la tercer mano. <br> Jugador se lleva los puntos</span></p>
<p>Te recomendamos siempre ganar la primer mano, de esta manera el rival debera ganar la segunda mano obligatoriamente para no perder</p>
<p><b class="b-azul">¿Que pasa si empardamos (empatamos)? </b></p>
<p><b class="b-azul">Si se emparda la primer mano</b>, la siguiente mano es la definitoria! Entonces SIEMPRE se tira la mejor carta restante</p>
<p><b class="b-azul">Si se emparda la segunda mano</b>, ganara quien haya hecho "primera" (Quien haya ganado la primer mano)</p>
<p><b class="b-azul">Si se emparda la tercer mano</b>, ganara quien haya hecho "primera" (Quien haya ganado la primer mano)</p>
<hr>
<h2><b class="b-azul">¿Como ganar la partida?</b></h2>
<h3>Ganara la partida quien primero llego a 15 puntos</h3>
</div>
`)

$("#truco").click(() => { 
    $(".toogle-3").toggle();
});

$("#reglasEnvido").append(`
<div class="toogle-4">
<h3>El envido solo se puede cantar en la primer mano del juego</h3>
<h2><b>Si ya se ha jugado una carta en la mesa el envido no se podra cantar</b></h2>
<p>Cuando el jugador canta <b>ENVIDO</b> se pondran en juego 2 pts</p>
<p>Para determinar quien se lleva los puntos es necesario comparar los tantos del rival y los del jugador</p>
<p><b>¿Que son los tantos?</b>  <br>
Sencillo los tantos son la suma de dos cartas del mismo palo</p>
<ul>
    <li>El valor de cada carta es su numero <br>
    <p><span>Ej: 1 de espada = 1 // 2 de espada = 2 // 3 de espada = 3 // etc..</span></p></li>
    <li>Exceptuando las figuras, todas ellas <b>por si solas valen 0</b></li>
    <p><span>10 de espada = 0 // 11 de espada = 0 // 12 de espada = 0 // etc..</span></p>
</ul>
<p> <span>*Ej: tenemos en mano 1 Espada / 3 Copa / 7 Espada y nuestro rival 2 copa / 5 copa / 4 copa <br>
como 1 de espara y 7 de espada comparten <b>palo</b> se suman y se le agrega +20 <br>
entonces el jugador tiene: 7 + 1 = 8 // 8 + 20 = 28 ---- el rival 2 + 4 = 7 // 7 + 20 = 27<br>
el jugador cuenta con 28 tantos y el rival con 27. En este caso gana el jugador</span> </p>
<p><b>¿Que pasa si nos toca una figura y una carta con el mismo palo? <br>
¿Como se suma?</b></p>
<p>El valor de la figura <span>(imaginemos 12 de basto)</span>  es 0 + el valor de la carta <span>(imaginemos un 7 de basto)</span>  <br>
0 + 7 = 7 // 7 + 20 = 27</p>
<p><b>¿Pero si mis cartas del mismo palo son figuras?</b></p>
<p>El valor automatico es 20 <span>0 + 0 = 0 // 0 + 20 = 20</span></p>
<p>Y si todas mis cartas son del mismo palo? <br>
Ej: 7 de oro + 6 de oro + 4 de oro. Usted tiene <b>FLOR</b>. La mano mas alta en envido </p>
<p><b>¿Que pasa si tanto el rival como yo compartimos los mismos tantos?</b> <br>
Ganara quien sea mano (<span>"mano" el de la derecha de quien reparte</span>) <br>
<span>*Dejese constancia de que en este humilde proyecto el jugador siempre sera mano hasta proximas actualizaciones</span></p>
</div>
</div>
`)

$("#envido").click(() => { 
    $(".toogle-4").toggle();
});

