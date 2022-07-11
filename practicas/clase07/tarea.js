// Practica
// tomar los tres ejercicios y factorizarlos como funciones
// Condiciones, tiene argumentos y tiene que hacer un return

// * Ejercicio 1
// * Escribir un programa de arroje la suma de los múltiplos de 3, 5 o 7
// * que hay entre 1 y 100
// * Resolver con cualquiera de: For, While y do While

// function multiplos(){
// let result = 0;
// for(let i = 1; i<= 100; i++)
// { 
//     if (i % 3 == 0|| i % 5 == 0 || i % 7 == 0)
//     {result += i;}
    
// }
// return (`suma multiplos: ${result}`)
// }

// console.log(multiplos());

 // * Ejercicio 2
    // * Pedir el usuario 1 numero entre 1 y 100 ok
    // * sumar todos los números entre el 1 y este numero
    // * Mandar un alert con el  total
    // * Resolver con cualquiera de: For, While y do While
    // * p.ej. 5
    // * ->  15
// function sumas(){
// let num =parseInt(prompt("numero"))
// let result =0;
// for(let i= 0;i<=num;i++){
//     result += i
// } 
// alert(`suma de conjuntos: ${result}`)
// }
// console.log(sumas())






//* Ejercicio 3
    // * pedir una oracion al usuario  ok
    // * Contar las letras "a" y "e" y espacios,
    // * Resolver con cualquier de  For, While y do While
    // *
    // * p.ej. 'hola kodErs'
    // * ->  A -> 1
    // * ->  E -> 1
    // * ->  Espacios -> 1

// function conteo(){
// let ora = prompt("una oracion:");
// let a = 0;
// let e = 0;
// let espacios = 0;
// for(let i=0; i<ora.length;i++)
// {
//     if(ora[i]=="a"){
//         a++
//     }
//     else if (ora[i]=="e"){
//         e++
//     }
//     else if (ora[i]==" "){
//         espacios ++
//     }
// }
// console.log(`${ora}\n suma de a :${a} \n suma de e ${e}\n suma de espacios: ${espacios} `);
// }

// console.log(conteo());

    //  Tarea de la sesion
    //  Ejercicio 1 ->
    //  Función que pida una palabra al usuario
    //  Invierta la palabra
    //  y la retorna, almacenamos ese retorno en una variable y al interpolamos en un alert usando template literals
    //  reversedString('hola') -> 'aloh'

// let palabra = prompt("una palabra")
// let reverse = () => {
//     for(let i=0;i<palabra.length;i++)
//     return palabra.reverse();
     
// }
// alert(`palabra invertida: ${reverse()}`);





    //!  Ejercicio 2 ->
    //  Función que pida 3 numeros como parametro
    //  2 números obligatorios y 1 opcional con valor de 3
    //  Arroje la suma de esos 3 números
    //  Posibles resultados
    //  -> addThreeNumbers(3,4,5) -> 12
    //  -> addThreeNumbers(3,4) -> 10
    //  -> addThreeNumbers(3) -> 'Faltan datos'
    //  -> addThreeNumbers() -> 'Faltan datos'




    //!  ejercicio 3 ->
    //  Función que pida al usuario los grados Centigrados en su localidad
    //  Convertirlos a grados fahrenheit
    //  Retornar el valor y ese valor usarlo para
    //  Arrojar un alert con el resultado
    //  -> convertTemp(25) -> La temperatura es de 77 ºF
    //  -> convertTemp() -> 'Faltan datos'


    
    //!  Ejercicio 4 ->
    //  Función que reciba una numero e imprima las tablas de ese numeri, validamos que ese numero este entre 1 y 10
    
    
    
    //!  Ejercicio 5 ->
    //  Función que pida al usuario un número (N) entre 1 y 100
    //  Mandar un alert con suma desde el 1 hasta N
    //  N debe tener un valor por defecto =  3
    //  addNumberLimit() -> 6
    //  addNumberLimit(4) -> 10
    //  addNumberLimit(5) -> 15