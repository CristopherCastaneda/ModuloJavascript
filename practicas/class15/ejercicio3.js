const result = document.querySelector(".posts-container");

const getPosts = (url) => {
    let posts = [];
    const postRequest = new XMLHttpRequest();

    postRequest.onload = (data) => {

        if (data.target.readyState === 4) {
            if (
                data.target.status >= 200 ||
                data.target.status <= 399
            ) {
                posts = JSON.parse(data.target.response);
            }
            else if (data.target.status === 400) {
                console.log('sucedio un error')
            }
        }
    }
    postRequest.open("GET", url, false);
    postRequest.send();
    return posts;
}

const printPosts = () => {

    let posts = getPosts("https://kodemia-js-g20-default-rtdb.firebaseio.com/Posts.json");

    let template = "";
    for (let post in posts) {
        console.log(post)
        template += `
            <div class="col">
                <div class="card">
                    <img src="https://picsum.photos/200" class="card-img-top" alt="${posts[post].title}">
                    <div class="card-body">
                        <h5 class="card-title">${posts[post].title}</h5>
                        <p class="card-text">${posts[post].body}</p>  
                        <small>${posts[post].date}</small>   
                        <a href="detailPost.html?id=${post}" class="btn btn-primary">Detalle</a>               
                    </div>
                </div>
            </div>
          `;
    }
    //     //   posts.forEach(({title, body, tags}) => {

    //     //     template +=`
    //     //             <div class="col">
    //     //                 <div class="card">
    //     //                     <img src="https://picsum.photos/200/80" class="card-img-top" alt="${title}">
    //     //                     <div class="card-body">
    //     //                         <h5 class="card-title">${title}</h5>
    //     //                         <p class="card-text">${body}</p>  
    //     //                         ${tagHTML}                      
    //     //                     </div>
    //     //                 </div>
    //     //             </div>
    //     //           `; 
    //     //   });

    return template;
}

result.innerHTML = printPosts();

//! Crear usuario

// const createUser = (user) => {

//     const createRequest = new XMLHttpRequest();

//     createRequest.onload = (data) => { 
//         console.log(data.target.responseText);
//     } 

//     createRequest.open("POST", "https://kodemia-js-g20-default-rtdb.firebaseio.com/Usuarios.json", false);
//     createRequest.send(JSON.stringify(user));

// }

// const userTest = {
//     firstName: "Sofy",
//     lastName: "Arreguin"
// }


const createUser = (user) => {
    const httpRequest = new XMLHttpRequest()
    httpRequest.onload = (e) => {
        console.log(e.target.responseText)
    }
    httpRequest.open("POST", `https://kodemia-js-g20-default-rtdb.firebaseio.com/Usuarios.json`, false)
    let userJson = JSON.stringify(user)
    httpRequest.send(userJson)
}
const userToCreate = {
    title: 'Prueba11',
    Body: 'las cosas no son lo que parecen cuando uno cree que parecen',
    Date: '27/07/2022'
}



// update data -> Put = hace una sobre-escritura del campo ya creado, no crea un id

// const updateData = (date, userID) => {
//     const httpRequest = new XMLHttpRequest()
//     httpRequest.onload = (e) => {
//         console.log(e.target.responseText)
//     }
//     httpRequest.open("PUT",`https://kodemia-js-g20-default-rtdb.firebaseio.com/Usuarios${userID}.json`, false)
//     httpRequest.send(JSON.stringify(date))
// }

//update data -> Patch = Update parcil sobre escribe los valores en los campos que esten seleccionados en la ConstantSourceNode.
const updateData = (data, userID) => {
    const httpRequest = new XMLHttpRequest()
    httpRequest.onload = (e) => {
        console.log(e.target.responseText)
    }
    httpRequest.open("PATCH", `https://kodemia-js-g20-default-rtdb.firebaseio.com/Usuarios/${userID}.json`, false)
    httpRequest.send(JSON.stringify(data))
}
const userTest = {
    title: "Mi Sueño",

}
updateData(userTest,'-N85KiII79FPkPogLuJB')

