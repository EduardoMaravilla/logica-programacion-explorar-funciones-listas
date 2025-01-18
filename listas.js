// Desafíos
// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
// Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguagesDeProgramacion);
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
console.log(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarTodosLosElementos(lista) {
  for (let lenguaje of lenguagesDeProgramacion) {
    console.log(lenguaje);
  }
}
mostrarTodosLosElementos(lenguagesDeProgramacion);
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarTodosLosElementosEnOrdenInverso(lista) {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}
mostrarTodosLosElementosEnOrdenInverso(lenguagesDeProgramacion);
// Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(lista) {
  let suma = 0;
  for (let numero of lista) {
    suma += numero;
  }
  return suma / lista.length;
}
let numeros = [10, 7, 3, 4, 5];
console.log(`El promedio de los números es: ${calcularPromedio(numeros)}`);
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function mostrarNumerosMaximoMinimo(lista) {
  let maximo = lista[0];
  let minimo = lista[0];
  for (let numero of lista) {
    if (numero > maximo) {
      maximo = numero;
    }
    if (numero < minimo) {
      minimo = numero;
    }
  }
  console.log(`El número más grande es: ${maximo}`);
  console.log(`El número más pequeño es: ${minimo}`);
}
mostrarNumerosMaximoMinimo(numeros);
// Crea una función que devuelva la suma de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let numero of lista) {
    suma += numero;
  }
  return suma;
}
console.log(`La suma de todos los números es: ${calcularSuma(numeros)}`);
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarEnLista(lista, numero) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return i;
    }
  }
  return -1;
}
console.log(
  `El número 4 se encuentra en la posición ${buscarEnLista(numeros, 4)}`
);
console.log(
  `El número 6 no se encuentra en la lista ${buscarEnLista(numeros, 6)}`
);
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarDosListas(lista1, lista2) {
  let resultado = [];
  for (let i = 0; i < lista1.length; i++) {
    resultado.push(lista1[i] + lista2[i]);
  }
  return resultado;
}
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
let sumaListas = sumarDosListas(lista1, lista2);
console.log(`La suma de las listas es: ${sumaListas.join(',')}`);
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
function calcularCuadrados(lista) {
  let resultado = [];
  for (let numero of lista) {
    resultado.push(numero * numero);
  }
  return resultado;
}
let lista3 = [1, 2, 3, 4, 5];
let cuadradosListas = calcularCuadrados(lista3);
console.log(`Los cuadrados de los números son: ${cuadradosListas.join(",")}`);
