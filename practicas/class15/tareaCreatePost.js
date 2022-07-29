let createBtn = document.querySelector('.btn_create_post')
let inputTitlePost = document.querySelector('.post_title_input')
let inputBodyPost = document.querySelector('.post_body_input')
let inputDatePost = document.querySelector('.post_date_input')

// Todo Create ajax function to create the post in firebase/post

createBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const title = {
        title:document.getElementById("titlePost").value,
        body:document.getElementById('bodyPost').value,
        date:document.getElementById('datePost').value
    }
    console.log(title)
    newPost(title)
    //! Todo
    // ! Funcion para hacer un POST en mi BD de mi nuevo post
    // ! construir mi post a enviar 

})

const newPost = (newComment) => {
    const box = new XMLHttpRequest()
    box.onload = (data) => {
        console.log(data.target.responseText);
    }
    box.open('POST', 'https://kodemia-js-g20-default-rtdb.firebaseio.com/Posts.json', false)
    box.send(JSON.stringify(newComment));
}



// newPost(title)


