// Practico 1
// imprimir vocales de string usando for loop
// *Usando solo ciclos y condicionales *




// let palabra = prompt('Ingresa tu cancion favorita:');
// let vocales = palabra.match(/[aeiou]/gi);
// let result="";
// for(let i=0; i>vocales.length;i++)
// {
 

// }
// console.log(vocales) //imprime en consola el resultado



// let palabra = prompt("Ingrese una oración");
// let vocales = palabra.toLowerCase().replace(" ","");
// for(let i = 0; i < vocales.length; i++){
//     if (vocales[i] === 'a' ||
//         vocales[i] === 'e' ||
//         vocales[i] === 'i' || 
//         vocales[i] === 'o' || 
//         vocales[i] === 'u'
//         ) {
//           console.log(vocales[i]);// arrojas la cadena de strigns debido a que esta dentro de la condicion if si se pone fuera arroja error.
//     }   
//   } 


// palabra=nuevos
// vocales=5
// i=0 ; i"0" < 5 =true (vocales(nuevos)[0="n"]===a)
//                      (vocales(nuevos)[0="n"]===e)
//                      (vocales(nuevos)[0="n"]===i)
//                      (vocales(nuevos)[0="n"]===o)
//                      (vocales(nuevos)[0="n"]===u)
// i=1 ; i"1" < 5 =true (vocales(nuevos)[1="u"]===a)
//                      (vocales(nuevos)[1="u"]===e)
//                      (vocales(nuevos)[1="u"]===i)
//                      (vocales(nuevos)[1="u"]===o)
//                      (vocales(nuevos)[1="u"]===u) 
// i=2 ; i"2" < 5 =true (vocales(nuevos)[2="e"]===a)
//                      (vocales(nuevos)[2="e"]===e)
//                      (vocales(nuevos)[2="e"]===i)
//                      (vocales(nuevos)[2="e"]===o)
//                      (vocales(nuevos)[2="e"]===u)
// i=3 ; i"3" < 5 =true (vocales(nuevos)[3="v"]===a)
//                      (vocales(nuevos)[3="v"]===e)
//                      (vocales(nuevos)[3="v"]===i)
//                      (vocales(nuevos)[3="v"]===o)
//                      (vocales(nuevos)[3="v"]===u)
// i=1 ; i"1" < 5 =true (vocales(nuevos)[1="u"]===a)  





// Practica2
// imprimir solo las consonantes de un string usando for loop
// *ojo ciclos y condicionales *

// let palabra = prompt("Ingrese una oración");
// let vocales = palabra.toLowerCase().replace(" ","");
// for(let i = 0; i < vocales.length; i++){    
//     if (vocales[i] !== 'a' &&
//         vocales[i] !== 'e' &&
//         vocales[i] !== 'i' && 
//         vocales[i] !== 'o' && 
//         vocales[i] !== 'u'
//         ) {
//         console.log(vocales[i]);
//     } 


// Practica3
// Pedir al usuario un numero del 1 al 10 e imprimir la tabla de multiplicar de ese número
// Usando loops

// let numero = prompt('un numero a multiplicar:');
// let variable =numero
// for(let numero=0; numero<=10; numero++)
// {
//     console.log(`${variable}X${numero}= ${(numero*variable)}`)
// }

// Practica Grupal 1 ciclo for
// Ejercicio 1
// Pedir el usuario un número entre 10 y 100
// * Imprimir todos los números pares que existen entre 1 y ese número
// * p.ej. 12 -> 2,4,6,8,10,12
// * Usar loops, condicionales...
// hint -> %

// let number = prompt('enter one number between that 10 and 100:');
// for(let index=0; index<=number ; index+=2)  //"+="Significa que agregara ese valor
// {
//   console.log(index)
// }

// Ejercicio 2
// Pedir al usaurio una oracion
// Imprimir un string con todas las vocales
// Imprimir un string con todas las consonantes
// Resultado de ejemplo
// p.ej. "Hola mundo"
// Consonantes -> hlmnd
// Vocales -> oauo


// let str = prompt("Ingrese una oración"); // pedimos al usuario informacion
// let strLower = str.toLowerCase().replace(" ",""); //la informacion del usuario quita los espacios y los junta todos
// let vocales = ""; // variable con valor reservado para una asignacion
// let consonante = ""; // variable con valor reservado para una asignacion
// for(let i = 0; i < strLower.length; i++) // variable i=0 para empezar, condicion 1; numero de caracteres tiene la informacion del usuario sea mayor que i
// {
//     if (strLower[i] === 'a' ||
//         strLower[i] === 'e' ||
//         strLower[i] === 'i' || 
//         strLower[i] === 'o' || 
//         strLower[i] === 'u'
//         ) {
//         vocales = vocales + strLower[i];
//     } 
//     else{
//         consonante = consonante + strLower[i];
//     }
// }
// console.log(`Vocales ${vocales} \nConsonantes ${consonante}`);




// Ejercicio 3
//  Pedir el usuario una palabra
// Invertir esa palabra e imprimirla en consola
//  p.ej. 'Hola' -> 'aloh'

// let palabra = prompt('dame una palabra:');
// let reversa = "";
// for(let index=palabra.length-1; index>=0; index--)
// {
//     reversa += palabra[index] // es la accion  que va a realizar
// }
// console.log(reversa) //imprime en consola el resultado

// palabra=nuevo
// reversa =""
// index=5-1
// index=4 (4>0=true); (reversa=""+"o");
// index=3 (3>0=true); (reversa="o"+"v");
// index=2 (2>0=true); (reversa="ov"+"e");
// index=1 (1>0=true); (reversa="ove"+"u");
// index=0 (0>0=true); (reversa="oveu"+"n");

// tarea hacerlo reversa en los metodos

// ciclos, bloques de codigo, while, do while, 