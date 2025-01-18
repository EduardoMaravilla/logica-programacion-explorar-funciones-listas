// Desafíos:
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC(alturaMetros, pesoKg) {
  let imc = pesoKg / alturaMetros ** 2;
  return imc.toFixed(2);
}

let alturaEnMetros = 1.75;
let pesoEnKilos = 75;

let imc = calcularIMC(alturaEnMetros, pesoEnKilos);
console.log(`Tu IMC es: ${imc}`);
// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function numeroFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * numeroFactorial(numero - 1);
  }
}

let numero = 5;

let factorial = numeroFactorial(numero);
console.log(`El factorial de ${numero} es: ${factorial}`);
// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertidorDolarARealesBrasilenos(valorenDolares) {
  let valorEnRealesBrasileños = valorenDolares * 4.8;
  return valorEnRealesBrasileños.toFixed(2);
}

let valorEnDolares = 100;

let valorEnRealesBrasileños = convertidorDolarARealesBrasilenos(valorEnDolares);
console.log(`El valor en reales brasileños es: $ ${valorEnRealesBrasileños}`);
// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function calcularAreaRectangulo(base, altura) {
  let area = base * altura;
  return area;
}
function calcularPerimetroRectangulo(base, altura) {
  let perimetro = 2 * (base + altura);
  return perimetro;
}

let base = 5;
let altura = 10;

let areaRectangulo = calcularAreaRectangulo(base, altura);
let perimetroRectangulo = calcularPerimetroRectangulo(base, altura);

console.log(`El área del rectángulo es: ${areaRectangulo}`);
console.log(`El perímetro del rectángulo es: ${perimetroRectangulo}`);
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function calularAreaCirculo(radio){
    let area = Math.PI * radio ** 2;
    return area.toFixed(2);
}

function calcularPerimetroCirculo(radio){
    let perimetro = 2 * Math.PI * radio;
    return perimetro.toFixed(2);
}

let radio = 3;

let areaCirculo = calularAreaCirculo(radio);
let perimetroCirculo = calcularPerimetroCirculo(radio);

console.log(`El área del círculo es: ${areaCirculo}`);
console.log(`El perímetro del círculo es: ${perimetroCirculo}`);
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

numero = 6;

tablaMultiplicar(numero);