
var v1El = document.querySelector('#video-1');

var v1Input = 'hunger games';
var v1id;
var v1Url;

var trailerAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${v1Input}_official_trailer`;

<<<<<<< HEAD:assets/results.js
=======

// // Movie API
// var movieName = "cabin in the woods";
// var movieID = "tt1259521"
// //tmdb
// var movieAPI = `https://api.themoviedb.org/3/movie/550?api_key=32d3014b4c0bf100be1034a9bed533d5`
// //omdb
>>>>>>> main:assets/script.js


function getVideo1() {

  fetch(trailerAPI, {
    method: 'GET',
    // mode: 'no-cors',
    credentials: 'same-origin',
    redirect: 'follow',
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          v1id = data.items[0].id.videoId;
          displayV1(v1id);
        });
      } else {
        console.log(response);
        alert('Error: ' + response.statusText);
      }
    })
};


getVideo1();


function displayV1(v1id) {
  // if (!v1id) {
  //   v1El.textContent = 'Error: Video Not Found.';
  //   return;
  // }

  // console.log(v1id);

  v1El.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${v1id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

};


<<<<<<< HEAD:assets/results.js
// // return 3 similar movies with movie ID
fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=32d3014b4c0bf100be1034a9bed533d5&language=en-US&page=1&`)
  .then(response => response.json())
  .then(json => console.log(json))
=======
// // MOVIE FUNCTIONS // 

// //load random movie posters on landing page upon opening the website 
// // window.onload = function () {
// //   showPosters()
// // }

// // showPosters()
// // 

// //   });



// // return a response by searching a movie name
// fetch(`http://www.omdbapi.com/?apikey=f9b9102e&t=${movieName}`)
//   .then(response => response.json())
//   .then(json => console.log(json))

// //pull out the ID of the movie that was searched, (index 23 in this instance)
// json.forEach((repo) => {

// });


// // return 3 similar movies with movie ID
// fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=32d3014b4c0bf100be1034a9bed533d5&language=en-US&page=1&`)
//   .then(response => response.json())
//   .then(json => console.log(json))
>>>>>>> main:assets/script.js

// function changePage() {

//   document.location.href = "file:///C:/Users/Jack/Desktop/BOOTCAMP_WORK/FIRST%20GROUP%20PROJECT/Atomic-Cats-Project-1/results.html";

// }

// searchBtn.addEventListener("click", searchMovie, changePage);

<<<<<<< HEAD:assets/results.js
=======
// // Genres to choose from
// // ==============================
// // Action
// // Adventure
// // Animation
// // Biography
// // Comedy
// // Crime	
// // Documentary
// // Drama
// // Family
// // Fantasy
// // Film Noir
// // History	
// // Horror
// // Music
// // Musical
// // Mystery
// // Romance
// // Sci-Fi	
// // Short Film
// // Sport
// // Superhero
// // Thriller
// // War
// // Western
>>>>>>> main:assets/script.js
