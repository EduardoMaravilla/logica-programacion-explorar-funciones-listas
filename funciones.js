// Desafíos:
// Crear una función que muestre "¡Hola, mundo!" en la consola.
function holaMundo() {
  console.log("Hola Mundo!");
}
holaMundo();
// Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function holaUsuario(usuario) {
  console.log(`¡Hola, ${usuario}!`);
}
holaUsuario("Juan");
// Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero) {
  return numero * 2;
}
let resultado = dobleNumero(5);
console.log(resultado);
// Crear una función que reciba tres números como parámetros y devuelva su promedio.
function numeroPromedio(numero1, numero2, numero3) {
  let suma = numero1 + numero2 + numero3;
  return suma / 3;
}
let promedio = numeroPromedio(5, 10, 15);
console.log(promedio);
// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}
let mayor = numeroMayor(5, 10);
console.log(mayor);
// Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function numeroPorSiMismo(numero) {
  return numero * numero;
}
let cuadrado = numeroPorSiMismo(5);
console.log(cuadrado);
