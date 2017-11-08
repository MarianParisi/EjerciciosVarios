/*El ejercicio consiste en seleccionar quien entra a un club.
Si no son un miembro o si son menores de 21 años, 
dirigite a ellos como señor o señora, según corresponda y 
negales el acceso al club.
Si no, saludalos como el señor o la señora (en su caso por género) 
y su nombre, y dales la bienvenida. Si tienen sed, 
preguntale la bebida que les gustaría tomar.
Si su bebida favorita es cualquier cosa menos "Coors Light", deciles 
"sí" (nombre) "un" (drinkName) " viniendo!". Si piden una Coors,
 echalos del bar.*/
var nombre;
var preguntaBebida;
var preguntaGenero;
var genero;
var edad;
var isMember;
var thirsty;
var drinkName;

nombre = prompt("Cual es su nombre?");
edad = prompt("Cual es su edad?"); 
preguntaGenero = prompt("Es usted hombre o mujer?");
genero=preguntaGenero.toLowerCase();
isMember = confirm("Es usted miembro?"); 

if (edad < 21 || isMember == false){
  if (genero == "mujer") {
    alert("Disculpe señora " + nombre + " pero no puede ingresar");
  } else if (genero == "hombre") {
    alert("Disculpe señor " + nombre + " pero no puede ingresar");
  }
} else {
  if (genero == "mujer") {
    alert("Bienvenida " + nombre);
  } else if (genero == "hombre"){
    alert("Bienvenido " + nombre);
  }
  thirsty = confirm("desea algo de beber?");
  if (thirsty == true) {
    preguntaBebida = prompt("que bebida desea?");
    drinkName=preguntaBebida.toLowerCase();
    if (drinkName == "coors light"){
      alert(nombre + " retirese de este bar por favor");
    } else {
      alert("si " + nombre + " un " + drinkName + " viniendo!");
    }
  } else {
    alert(nombre + " si desea alguna bebida mas tarde llame al mozo");
  }
}
