// const player = {
//     score: 88888,
//     level: 7,
//     lives: 2,
//     vitalEnergy: 100,
//     isAlive: true,
//    };
    
//    console.log(jugador);
    
    
   // ! 1 Jugador recibe un golpe crítico que le resta 25 puntos de energía vital "vital Energy"
   // Realizar código para llevar a cabo las operaciones
  
//    player.vitalEnergy = player.vitalEnergy - 25;
//    console.log(player["vitalEnergy"]);

//    if(player.vitalEnergy == 0){
//     console.log("estas muerto")
//    }
//    if(player.isAlive == false  && player.lives > 0 ){
//     player.score: 000,
//     player.level: 0,
//     lives: 2,
//     vitalEnergy: 100,
//     isAlive: true,

//    }


    
   // ! 2 Si la energía vital del jugador es menor a 0 pasado "isAlive" = false
   // Realizar código para llevar a cabo las operaciones


    
   // ! 3 Revisamos nuestro jugador
   // Realizar código para llevar a cabo las operaciones
   
   // ! 4  Si No está vivo pero tienen más vidas entonces -> Puntaje = 0, Vida -1, nivel = 0, energia vital = 100
   // Realizar código para llevar a cabo las operaciones

//!practica 2
//    Un log donde veamos la suma total de notas
//    Opcional - Un log donde veamos el promedio de las notas a dos decimales
//    Hint, use toFixed() method

// const grandes = {
//     first_test: 7.5,
//     second_test: 10,
//     third_test: 6,
//    };

//    grandes.total = {grandes.total, +grandes.first_test, + grandes.second_test, + grandes.third_test}

//    console.log(grandes["total"]);

   
// const grandes = {
//     first_test: 7.5,
//     second_test: 10,
//     third_test: 6,
//    };

// let suma = 0;
// let iteraciones = 0;
// for(promedio in grandes){
//     suma += grandes[promedio]
//     iteraciones++
// }
// console.log((suma/iteraciones).toFixed(2));

// const negocio = {
//    horario: "9-10pm",
//    empleados: 15,
//    comida:[
//       "pollo",
//       "chilaquil",
//       "pozole",
//    ]
// }
// let negocio1 = Object.keys(negocio);
// console.log(negocio1);


// Ejercicio 1.
// * Realizar una funcion que tome como parametro un objeto
// * y devuelva un array de arrays con la siguiente estructura
// * [ [key, value], [key, value] ]
// * makePairs( { a: 1, b: 2 } )
// * => [ ['a', 1], ['b', 2]]
    
// * Se tiene que realizar 2 soluciones,
// * 1 con Object.entries() y
// *  Otra con .map()

// let makePairs = {a: 1, b: 2};
// const ejercicio =(makePairs) => {
//    const makePairs2 = Object.entries(makePairs)
//    return makePairs2;
// } 
// console.log(ejercicio(makePairs));

// let makePairs3 = {a: 1, b: 2};
// const ejercicio2 =(arr) => {
//    let compuesto = arr.map((makePairs3)=>{
//       makePairs3 += arr
      
//    });return compuesto;
// }
// console.log(ejercicio2(makePairs3))








/**
* Dado un objeto de salarios
* Crear una funcion que retorne una lista
* con los salarios ordenados de menor a mayor
* orderSalary( salarios)
* -> [4000, 5000, 7000]
hint -> Usar metodo de objetos y luego un metodo de array para ordenar
*/
    