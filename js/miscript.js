// esta linea es un comentario
/*
 Comentario 
 en Bloque
 en javascript
 */
//Tipos de Datos
var numero = 20; // entero number
console.log(typeof numero);

const mensaje = "Bienvenidos a Javascript"; // cadena string
console.log(mensaje);
console.log(typeof mensaje);

let estado = true; // Booleano boolean
console.log(estado);
console.log(typeof estado);

var precio = 98.89; //number
console.log(precio);
console.log(typeof precio);

// Objetos (JSON)
var persona = {}; //object
console.log(persona);
console.log(typeof persona);

persona.nombre = "Juan";
persona.edad = 20;
console.log(persona);

// Array
var tecnologias = []; //array
console.log(tecnologias);
console.log(typeof tecnologias);

tecnologias.push("HTML");
tecnologias.push("Css");
tecnologias.push("Javascript");
tecnologias.push(persona);

console.log(tecnologias);

console.log(tecnologias[1]);
