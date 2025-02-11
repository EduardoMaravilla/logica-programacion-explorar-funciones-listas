
// Desafíos

// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del Desafío";

// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function functionConsole(){
    console.log("El botón fue clicado");
}

// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
//  Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function functionPrompt(){
    let ciudad = prompt("Escribe una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function functionAlert(){
    alert("Yo amo JS");
}

// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function functionSuma(){
    let numero1 = parseInt(prompt("Ingresa un número"));
    let numero2 = parseInt(prompt("Ingresa otro número"));
    let suma = numero1 + numero2;
    alert(`La suma de ${numero1} y ${numero2} es ${suma}`);
}