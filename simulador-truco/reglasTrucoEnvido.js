$("#reglasTruco").append(`
<div class="toogle-3">
<ol>
    <td>Puntos en juego</td>
    <li><b class="b-azul">Truco:</b> 2pts</li>
</ol>
<p>El jugador que cante <b class="b-azul">truco</b> poner en juego los puntos.<br>
</p>
<p>Al decir <b class="b-azul">Quiero</b> se juegan los tantos al mejor de 3 cartas</p>
<p><span class="b-gris">Ej: Jugador gana la primer mano / Rival gana la segunda mano / Jugador gana la tercer mano. <br> Jugador se lleva los puntos</span></p>
<p>Solamente la persona a la que le cantan puede elevarlo el juego</p>
<p><span class="span-gris">Ej: Yo: ¡Truco! / Rival: ¡Quiero RE TRUCO! / Yo: ¡Quiero VALE 4!</span> </p>
<p>A diferencia del <b class="b-rojo">Envido</b> no se pueden adelantar juegos. Primero se canta truco y el rival decide si elevar el juego o no.</p> 
</div>
`)

$("#truco").click(() => { 
    $(".toogle-3").toggle();
});

$("#reglasEnvido").append(`
<div class="toogle-4">
<h3>El envido solo se puede cantar en la primer mano del juego</h3>
<p><span>*Si ya se ha jugado las dos primeras cartas el envido ya no se podra jugar</span></p>
<p>Cuando el jugador canta <b>ENVIDO</b> se pondran en juego 2 pts</p>
<p>Para determinar quien se lleva los puntos es necesario comparar los tantos del rival y los del jugador</p>
<p>¿Que son los tantos? Sencillo <br>
Los tantos son la suma de dos cartas del mismo palo</p>
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
<p>¿Que pasa si nos toca una figura y una carta con el mismo palo? <br>
¿Como se suma?</p>
<p>El valor de la figura <span>(imaginemos 12 de basto)</span>  es 0 + el valor de la carta <span>(imaginemos un 7 de basto)</span>  <br>
0 + 7 = 7 // 7 + 20 = 27</p>
<p>¿Pero si mis cartas del mismo palo son figuras?</p>
<p>El valor automatico es 20 <span>0 + 0 = 0 // 0 + 20 = 20</span></p>
<p>Y si todas mis cartas son del mismo palo? <br>
Ej: 7 de oro + 6 de oro + 4 de oro. Usted tiene <b>FLOR</b>. La mano mas alta en envido </p>
<p>¿Que pasa si tanto el rival como yo compartimos los mismos tantos? <br>
Ganara quien sea mano (<span> <b>mano</b> el de la derecha de quien reparte</span>) <br>
<span>*Dejese constancia de que en este humilde proyecto el jugador siempre sera mano hasta proximas actualizaciones</span></p>
</div>
</div>
`)

$("#envido").click(() => { 
    $(".toogle-4").toggle();
});

