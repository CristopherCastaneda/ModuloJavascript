
// update data => Post Crea usuario o elementos unicos
const creatUser = (user) => {
    const httpRequest = new XMLHttpRequest()
    httpRequest.onload = (e) => {

    }
    httpRequest.open("post", 'https://kodemia-js-g20-default-rtdb.firebaseio.com/Usuarios/.json', false)
    let userJson = JSON.stringify(user)
    httpRequest.send(userJson)
}
const userToCreate = {
    titulo: 'la vida es bella',
    Body: 'las cosas no son lo que parecen cuando uno cree que parecen',
    Date: '27/07/2022'
}

// creatUser(userToCreate) invoca la funcion

// update data -> Put = hace una sobre-escritura del campo ya creado, no crea un id

const updateData = (date, userID) => {
    const httpRequest = new XMLHttpRequest()
    httpRequest.onload = (e) => {
        console.log(e.target.responseText)
    }
    httpRequest.open("PUT",`https://kodemia-js-g20-default-rtdb.firebaseio.com/Usuarios${userID}.json`, false)
    httpRequest.send(JSON.stringify(date))
}
const newData = {
    titulo: 'la vida es bella',
    Body: 'las cosas no son lo que parecen cuando uno cree que parecen',
    Date: '27/07/2022'
}
// updateData(newData,'codigo del usuario')

//update data -> Patch = Update parcil sobre escribe los valores en los campos que esten seleccionados en la ConstantSourceNode.

const updateData = (date, userID) => {
    const httpRequest = new XMLHttpRequest()
    httpRequest.onload = (e) => {
        console.log(e.target.responseText)
    }
    httpRequest.open("PUT", `https://kodemia-js-g20-default-rtdb.firebaseio.com/Usuarios${userID}.json`, false)
    httpRequest.send(JSON.stringify(date))
}
const newData = {
    titulo: 'la vida es bella',

}


//update data -> DELETE= ELIMINA EL ID COMPLETO

const updateData = (userID) => {
    const httpRequest = new XMLHttpRequest()
    httpRequest.onload = (e) => {
        console.log(e.target.responseText)
    }
    httpRequest.open("DELETE", `https://kodemia-js-g20-default-rtdb.firebaseio.com/Usuarios${userID}.json`, false)
    httpRequest.send()
}

// updateData(newData,'codigo del usuario')