/*FizzBuzz. El ejercicio consiste en imprimir la palabra Fizz para todos los multiplos de 3
y la palabra Buzz para los multiplos de 5. Ademas si se cumplen ambas condiciones
debe imprimir FizzBuzz. */
var n = 1;
while (n <= 100) {
  if (n % 3 == 0) {
    console.log("Fizz");
  }
  if (n % 5 == 0) {
    console.log("Buzz");
  }
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("FizzBuzz");
  }
  n++;
}
