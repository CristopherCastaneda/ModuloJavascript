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

const arr = [1,2,3,4,18]
const pract = (pares) => {
let cubo ="";
for(i=0;i<arr.length;i++){
    cubo += (arr[i]%2) == 0 ? cubo
}return cubo
}
console.log(pract(arr));

arr = [1,2,3,4,18]
i=(5)

cubo = (arr[1]%2) == 0 false (i++)
cubo = (arr[2]%2) == 0 true ()








// * Ejercicio 2 *Opcional
// * Función que reciba como parámetro una array de strings
// * y devuelva el primer y último carácter de cada string
// * p.ej.
// * -> firstAndLast ( ['hola', 'mundo'] ) -> ['ha', 'mo']
// *
// * Pista / Hint, debemos iterar el array
