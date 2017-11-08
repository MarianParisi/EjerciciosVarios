//Una forma de jugar Piedra, Papel o Tijera.

alert("A jugar piedra, papel o tijera!");
var pregunta = prompt("elija una opcion");
var respuesta = pregunta.toLowerCase();
while (
  !(respuesta == "piedra" || respuesta == "papel" || respuesta == "tijera")
) {
  alert("A jugar piedra, papel o tijera!");
  var pregunta = prompt("elija una opcion");
  var respuesta = pregunta.toLowerCase();
}
var opciones = ["piedra", "papel", "tijera"];
var aleatorio = Math.floor(Math.random() * 3);
var posicionAleatoria = opciones[aleatorio];
alert("el resultado de la maquina fue " + posicionAleatoria);
if (respuesta == "piedra" && posicionAleatoria == "papel") {
  alert("perdiste");
} else if (respuesta == "papel" && posicionAleatoria == "tijera") {
  alert("perdiste");
} else if (respuesta == "tijera" && posicionAleatoria == "piedra") {
  alert("perdiste");
} else if (respuesta == "piedra" && posicionAleatoria == "tijera") {
  alert("ganaste!");
} else if (respuesta == "papel" && posicionAleatoria == "piedra") {
  alert("ganaste!");
} else if (respuesta == "tijera" && posicionAleatoria == "papel") {
  alert("ganaste!");
} else {
  alert("empate!");
}
alert("si desea seguir jugando refresque la página");
