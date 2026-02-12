import Mustache from "mustachejs";
import { createApp } from "vue";

const url = "https://www.omdbapi.com/?s=thumb&apikey=adf1f2d7"

// console.log("hi from application js");



// Vanilla JS

// 1. select elements I need (div results)
// const results = document.querySelector("#results");
// // 2. Event listener (no need here)
// // 2.5 Fetch the data
// fetch(url)
// .then(response => response.json())
// .then((data) => {
//   console.log(data);
//   data.Search.forEach((movie) => {
//     // 3. Change the dom (insert movie data)
//     // console.log(movie);
    
//     const movieCard = `
//      <div class="col-6">
//       <div class="card">
//         <img src="${movie.Poster}" alt="${movie.Title} Poster" class="card-img">
//         <div class="card-body">
//           <h2 class="card-title">${movie.Title}</h2>
//           <p class="card-text">${movie.Year}</p>
//           <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary">More info on IMDB</a>
//         </div>
//       </div>`

//     // console.log(movieCard);
//     results.insertAdjacentHTML("beforeend", movieCard);
    

//   })
// });





// JS with Templates

// const template = document.querySelector("#movieCardTemplate");
// const results = document.querySelector("#results");

// fetch(url)
// .then(response => response.json())
// .then((data) => {
//   console.log(data);
//   data.Search.forEach((movie) => {
//     // console.log(movie);
//     const clone = template.content.cloneNode(true);
//     // console.log(clone);
//     clone.querySelector("img").src = movie.Poster;
//     clone.querySelector("img").alt =`${movie.Title} Poster`;
//     clone.querySelector("h2").textContent = movie.Title;
//     clone.querySelector("p").textContent = movie.Year;
//     // "https://www.imdb.com/title/tt0052427"
//     clone.querySelector("a").href = `https://www.imdb.com/title/${movie.imdbID}`

//     results.appendChild(clone);
//   });
// });



// Moustache JS

// const output = Mustache.render("<h1>{{title}}</h1>", {"title": "Hi from Mustache"});
// console.log(output);
// results.insertAdjacentHTML("beforeend", output);

const results = document.querySelector("#results");
const template = document.querySelector("#movieCardTemplate").innerHTML;
// console.log(template);

// const fruits = {
//   "fruits": [
//     { "name": "apple", "price": 3 },
//     { "name": "pear", "price": 2 },
//     { "name": "banana", "price": 5 }
//   ]
// }

// const templateTwo = "<ul>{{#fruits}}<li>{{name}}: {{price}} EUR</li>{{/fruits}}</ul>"

// const result = Mustache.render(templateTwo, fruits);
// console.log(result);

// Mustache with JS iteration


// fetch(url)
// .then(response => response.json())
// .then((data) => {
//   console.log(data);
//   data.Search.forEach((movie) => {
//     // {
//     //   "Title": "Tom Thumb",
//     //   "Year": "1958",
//     //   "imdbID": "tt0052427",
//     //   "Type": "movie",
//     //   "Poster": "https://m.media-amazon.com/images/M/MV5BZTBmYWY0ZmEtMmM2Yi00Njk1LTkxNjEtYmNhMTFhYzA3ODE0XkEyXkFqcGc@._V1_SX300.jpg"
//     // }
//     const output = Mustache.render(template, movie)
//     // console.log(output);
//     results.insertAdjacentHTML("beforeend", output);
    
//   });
// });


// with Mustache Iteration

fetch(url)
.then(response => response.json())
.then((data) => {
  console.log(data);
  const movieData = { "movies": data.Search }
  const output = Mustache.render(template, movieData)
  // console.log(output);
  // results.insertAdjacentHTML("beforeend", output);
  results.innerHTML = output;
});




// Vue JS


// createApp({
//   data() {
//     return {
//       message: "Hello batch 2198, from Vue JS!"
//     }
//   }
// }).mount("#results")
