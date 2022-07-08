// Ejercicio 1
// Escribir un programa de arroje la suma de los múltiplos de 3, 5 o 7 que hay entre 1 y 100
// Resolver con For, While y do While

// let m5="";
// let m3="";
// let m7="";
// for(let i=0; i<100; i++)
// {
//     if ((i%3) == 0)
//     {
//     m3 = m3 + i;
//     } 
//     else if((i%5)) == 0{
//     m5 = m5 + i;
//     }
//     else if((i%7) == 0)
//     m7 = m7 + i;
// }
//  console.log(`multiplo de 3 ${m3} \n  multiplo de 5${m5}`);

let result = 0;

for(let i = 1; i<= 100; i++)
{
    if (i % 3 == 0|| i % 5 == 0 || i % 7 == 0)
    {
        result += i;
    }
}
console.log(`Suma con for= ${result}`);
