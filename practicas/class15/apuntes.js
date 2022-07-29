//! AJAX 

//! ARQUITECTURA
// estructura monolitica 

// visualizacion en network de la pagina a inspeccionar
// el servidor no sabe que hacer que estas haciendo  internal server error.
// status code:200 signfica que el codigo salio correcto

// el cliente hace request al servidor y nos da el status de acuerdo al request del cliente
// es importante saber el status code que arrojara para condicionar el codigo a salir cierta informacion

// ! Paso a paso para su uso 
// ? Instanciamos nuestro objeto
// const xRe = new XMLHttpRequest()
// console.log(xRe)

// ? Definir un callback en nuestro evento onload 
// xRe.onload = (data) => {
//     console.log(data)
//     if (data.target.readyState === 4)   {
//         if (
//             data.target.status >= 200 ||
//             data.target.status <= 399 
//             ){
//             console.log(data.target.responseText)
//         }
//         else if (data.target.status === 400)    {
//             console.log('sucedio un error')
//         }
//     }
// } 

//? Abrir y setear nuestra peticion 
//? request.open(<Metodo htto>, <Direccion objetivo>)

// xRe.open("GET", "https://dummyjson.com/carts", false)
// console.log(xRe)

//? Enviar nuestra peticion 
// xRe.send()

const newdate = new XMLHttpRequest()
newdate.onload = (e) => {
    console.log(e)
    if (
        data.target.status >= 200 ||
        data.target.status <= 399
    ) {
        console.log(data.target.responseText)
    }
    else if (data.target.status === 400) {
        console.log('sucedio un error')
    }
    xRe.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto", false)
    xRe.send()
    }
