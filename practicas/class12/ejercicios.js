/**
* Practica
* 1. Agregar en nuestro index.html ok
*  1.1. Un elemento lista <ul></ul> o <ol></ol> ok
*  1.2 Agregar varios list items dentro de nuestra lista <li></li> con la clase "item" ok
* 2. Usando Javascript realizamos lo siguiente
*  2.1. A nuestro elemento list debemos agregarle la clase 'lista' y el id 'lista'
*  2.2. A todos los elementos de la lista debemos retirarle la clase "item"
*  2.3. A todos los elementos de la lista debemos agregar la clase  'list__item'
*/

// let listado = document.getElementById("listado")
// const cambio =(listado)=>{

// }
// console.log(cambio)


// Ejercicio 1 - Repicar este markup (HTML) usando JS

// <ul id="menu" class="menu">
//        <li class="item__menu">Home</li>
//        <li class="item__menu">Products</li>
//        <li class="item__menu">About Us</li>
// </ul>

let list = document.createElement('ul')
let body = document.querySelector('body')
body.appendChild(list)
list.setAttribute('classs', "menu")
list.setAttribute("id", "menu")

{

    let item = document.createElement('li')
    let item2 = document.createElement('li')
    let item3 = document.createElement('li')
    item.textContent = "home"
    item2.textContent = "productos"
    item3.textContent = "abouts"
    list.appendChild(item)
    list.appendChild(item2)
    list.appendChild(item3)
}

