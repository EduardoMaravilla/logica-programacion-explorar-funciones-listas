# Lógica de programación: explorar funciones y listas

Desafíos del curso [Lógica de programación: explorar funciones y listas](https://app.aluracursos.com/course/logica-programacion-explorar-funciones-listas)

## Índice

1.  [Interactiando con HTML](#1-interactuando-con-html-desafíos)
2.  [Funciones](#2-funciones-desafíos)
3.  [Reiniciando el juego](#3-reiniciando-el-juego-desafíos)
4.  [Listas](#4-listas-desafíos)

---

## 1. Interactuando con HTML [Desafíos](app.js)

1.  Descarga otro proyecto haciendo clic en [este enlace](https://github.com/alura-es-cursos/js-curso-2/tree/main) y ábrelo en Visual Studio Code.

2.  Cambia el contenido de la etiqueta `h1` con `document.querySelector` y asigna el siguiente texto: "Hora del Desafío".

```javascript
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";
```

3.  Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

```javascript
function functionConsole() {
  console.log("El botón fue clicado");
}
```

4.  Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

```javascript
function functionPrompt() {
  let ciudad = prompt("Escribe una ciudad de Brasil");
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}
```

5.  Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

```javascript
function functionAlert() {
  alert("Yo amo JS");
}
```

6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

```javascript
function functionSuma() {
  let numero1 = parseInt(prompt("Ingresa un número"));
  let numero2 = parseInt(prompt("Ingresa otro número"));
  let suma = numero1 + numero2;
  alert(`La suma de ${numero1} y ${numero2} es ${suma}`);
}
```

---

## 2. Funciones [Desafíos](funciones.js)

1.  Crear una función que muestre "¡Hola, mundo!" en la consola.

```javascript
function holaMundo() {
  console.log("Hola Mundo!");
}
holaMundo();
```

2.  Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

```javascript
function holaUsuario(usuario) {
  console.log(`¡Hola, ${usuario}!`);
}
holaUsuario("Juan");
```

3.  Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

```javascript
function dobleNumero(numero) {
  return numero * 2;
}
let resultado = dobleNumero(5);
console.log(resultado);
```

4.  Crear una función que reciba tres números como parámetros y devuelva su promedio.

```javascript
function numeroPromedio(numero1, numero2, numero3) {
  let suma = numero1 + numero2 + numero3;
  return suma / 3;
}
let promedio = numeroPromedio(5, 10, 15);
console.log(promedio);
```

5.  Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

```javascript
function numeroMayor(numero1, numero2) {
  if (numero1 > numero2) {
    return numero1;
  } else {
    return numero2;
  }
}
let mayor = numeroMayor(5, 10);
console.log(mayor);
```

6.  Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

```javascript
function numeroPorSiMismo(numero) {
  return numero * numero;
}
let cuadrado = numeroPorSiMismo(5);
console.log(cuadrado);
```

---

## 3. Reiniciando el juego [Desafíos](reiniciando_el_juego.js)

1.  Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

```javascript
function calcularIMC(alturaMetros, pesoKg) {
  let imc = pesoKg / alturaMetros ** 2;
  return imc.toFixed(2);
}

let alturaEnMetros = 1.75;
let pesoEnKilos = 75;

let imc = calcularIMC(alturaEnMetros, pesoEnKilos);
console.log(`Tu IMC es: ${imc}`);
```

2.  Crea una función que calcule el valor del factorial de un número pasado como parámetro.

```javascript
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
```

3.  Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

```javascript
function convertidorDolarARealesBrasilenos(valorenDolares) {
  let valorEnRealesBrasileños = valorenDolares * 4.8;
  return valorEnRealesBrasileños.toFixed(2);
}

let valorEnDolares = 100;

let valorEnRealesBrasileños = convertidorDolarARealesBrasilenos(valorEnDolares);
console.log(`El valor en reales brasileños es: $ ${valorEnRealesBrasileños}`);
```

4.  Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

```javascript
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
```

5.  Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

```javascript
function calularAreaCirculo(radio) {
  let area = Math.PI * radio ** 2;
  return area.toFixed(2);
}

function calcularPerimetroCirculo(radio) {
  let perimetro = 2 * Math.PI * radio;
  return perimetro.toFixed(2);
}

let radio = 3;

let areaCirculo = calularAreaCirculo(radio);
let perimetroCirculo = calcularPerimetroCirculo(radio);

console.log(`El área del círculo es: ${areaCirculo}`);
console.log(`El perímetro del círculo es: ${perimetroCirculo}`);
```

6.  Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

```javascript
function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

let numero = 6;

tablaMultiplicar(numero);
```

---

## 4. Listas [Desafíos](listas.js)

1.  Crea una lista vacía llamada "listaGenerica".

```javascript
let listaGenerica = [];
```

2.  Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

```javascript
let lenguagesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(lenguagesDeProgramacion);
```

3.  Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

```javascript
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");
console.log(lenguagesDeProgramacion);
```

4.  Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

```javascript
function mostrarTodosLosElementos(lista) {
  for (let lenguaje of lenguagesDeProgramacion) {
    console.log(lenguaje);
  }
}
mostrarTodosLosElementos(lenguagesDeProgramacion);
```

5.  Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

```javascript
function mostrarTodosLosElementosEnOrdenInverso(lista) {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}
mostrarTodosLosElementosEnOrdenInverso(lenguagesDeProgramacion);
```

6.  Crea una función que calcule el promedio de los elementos en una lista de números.

```javascript
function calcularPromedio(lista) {
  let suma = 0;
  for (let numero of lista) {
    suma += numero;
  }
  return suma / lista.length;
}
let numeros = [10, 7, 3, 4, 5];
console.log(`El promedio de los números es: ${calcularPromedio(numeros)}`);
```

7.  Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

```javascript
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
let numeros = [10, 7, 3, 4, 5];
mostrarNumerosMaximoMinimo(numeros);
```

8.  Crea una función que devuelva la suma de todos los elementos en una lista.

```javascript
function calcularSuma(lista) {
  let suma = 0;
  for (let numero of lista) {
    suma += numero;
  }
  return suma;
}
console.log(`La suma de todos los números es: ${calcularSuma(numeros)}`);
```

9.  Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

```javascript
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
```

10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

```javascript
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
console.log(`La suma de las listas es: ${sumaListas.join(",")}`);
```

11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

```javascript
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
```