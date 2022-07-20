
// let album = document.getElementById('albums')

// ? resolucion con reduce
// let template = albumes.reduce((acc, cv, index, arr) => {
//     acc += `
//      <div class="col">
//      <div class="card">
//        <img src="${cv.url}" class="card-img-top" alt="..." />
//        <div class="card-body">
//          <h5 class="card-title">${cv.id}</h5>
//          <p class="card-text">
//            ${cv.title}
//          </p>
//        </div>
//      </div>
//     </div>
    
//     `
//     return acc
// }, '')


// {
//     "albumId": 1,
//     "id": 10,
//     "title": "beatae et provident et ut vel",
//     "url": "https://via.placeholder.com/600x300/810b14",
//     "thumbnailUrl": "https://via.placeholder.com/150/810b14"
//   }

// // ? resolucion con forEach
// let template = ''
// albumes.forEach((album) => {
//     template += `
//     <div class="col">
//          <div class="card">
//            <img src="${album.url}" class="card-img-top" alt="..." />
//            <div class="card-body">
//              <h5 class="card-title">${album.id}</h5>
//              <p class="card-text">
//                ${album.title}
//              </p>
//            </div>
//          </div>
//         </div>
//     `
// })


// console.log(template)

// album.innerHTML = template