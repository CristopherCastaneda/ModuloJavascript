// * Ejercicio 1
// * Realizar una función que reciba como parametro 1 array de numeros ok
// * Y devuelva un array con solo los elementos Pares de ese array
// * p.ej.
// * -> evenOnly( [1,2,3,4,18] ) -> [2,4,18]
// * -> evenOnly( [10, 2, 5] ) -> [10,2]
// * -> evenOnly() -> 'Se necesita un array'
// *
// * Pista / Hint, debemos iterar el array (iterar = ${})
// }

// const arrayNumbers= [6, 8, 10, 7, 12, 7, 4, 10];
// const functionNumbers = (array)=>{
//     let result=[]
//         for(i=0; i<array.length; i++){
//             if(array[i] %2===0){
//                 result.push(array[i])
//             }
//         }
//         return result;
// }
// let result=functionNumbers(arrayNumbers)
// console.log(result)

// * Ejercicio 2 *Opcional
// * Función que reciba como parámetro una array de strings
// * y devuelva el primer y último carácter de cada string
// * p.ej.
// * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
// *
// * Pista / Hint, debemos iterar el array


// Ejercicio 1 
// * Función que reciba una palabra
// * Retorna la palabra invertida
// * La reversa del string lo haremos usando métodos de array
// *  hint :  a un string no podemos aplicarle métodos array pero hay métodos de string que nos devuelve un array
// *
// * reverseStr('hola mundo')
// * -> 'odnum aloh'

// let capitci = prompt("palabra")
// const reversa = (usuario) => {
//     return Array.from(usuario).reverse().join("");
// }
// console.log(reversa(capitci));

// Ejercicio 2 
// * Dado el siguiente arreglo de ciudades
// *   ['méXicO', 'PErÚ', 'eSpAña', 'inGlaterrA']
// * Generar una función que capitalize cada elemento del array
// * => Se puede resolver con .forEach() o .map()

const capitalize = (spaceholder) => {                                // esta es una funcion lo que esta en parentesis es el space holder
    let capCities = [];                                      // se asigna una variabla para colocar el resultado se deja en blanco con estilo array []
    spaceholder.forEach((city) => {                                  // (spaceholder.forEach) = se le asigna al spaceholder el metodo de for each y le asignas  ((otro nombre))                       
       if(city.length>2)
        let cityCapitalized = `${city[0].toUpperCase()}${city       // esto es un  
        .slice(1)
        .toLowerCase()}`;
  
      capCities.push(cityCapitalized);
    });
  
    return capCities;
  };
  console.log(capitalize(["méxicO", "RIo", "Los AngelEs"]));



// Ejercicio 3
// * Dado un arreglo con nombres de personas,
// * Función que devuelva un arreglo con los nombres de las personas que empiezan con vocales y además capitalizados
// *
// * onlyNamesVowels( ['jorge','ana','ivan','sergio','oscar' ] )
// * -> ['Ana','Ivan','Oscar']
// *
// * => Se puede resolver con .forEach() o .filter() stringmetodo search
// */