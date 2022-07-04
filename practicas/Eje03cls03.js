//--Ejercicio 03 Clase 03
//Identificar el numero mayor de tres
//Condicion usando el operador ternary
//Hint: Anidar


let num1 = parseInt(prompt('Ingresa Numero:'))
let num2 = parseInt(prompt('Ingresa Numero:'))
let num3 = parseInt(prompt('Ingresa Numero:'))
console.log(num1)
console.log(num2)
console.log(num3)
console.log ("el mayor es")

let resultado = num1 > num2 &&  num1 > num3 ? num1 : num2 > num1 &&  num2 > num3 ? num2: num3 > num2 &&  num3 > num1 ? num3 : "todos son iguales";
console.log(resultado);