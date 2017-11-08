//Ejercicio para utilizar Jquey + evento
var boton = document.querySelector("button");
var cuerpo = document.querySelector("body");

var seEjecutaunEvento = function() {
  var parrafo = document.createElement("p");
  parrafo.textContent = "Beep";
  cuerpo.appendChild(parrafo);
  cuerpo.classList.toggle("color");
};
boton.addEventListener("click", seEjecutaunEvento);
