var searchBtn = document.getElementById("search");
var searchField = document.getElementById("input");
var movie;

// YouTube API
var v1El = document.querySelector('#video-1');

var v1Input = 'ghostbusters';
var v1id;
var v1Url;

var trailerAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${v1Input}_official_trailer`;

// Movie API
var movieName = "cabin in the woods";
var movieID = "tt1259521"
//tmdb
var tmdbAPI = `https://api.themoviedb.org/3/movie/550?api_key=32d3014b4c0bf100be1034a9bed533d5`
//omdb
var omdbAPI = `http://www.omdbapi.com/?apikey=f9b9102e&t=${movieName}`



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
        });
      } else {
        console.log(response);
        alert('Error: ' + response.statusText);
      }
    })

  v1id = "w3ugHP-yZXw";

  // v1Url = `https://www.youtube.com/watch?v=${v1id}`;

  displayV1(v1id);
};

getVideo1();


function displayV1(v1id) {
  // if (!v1Url) {
  //   v1El.textContent = 'Error: Video Not Found.';
  //   return;
  // }

  v1El.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${v1id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;

};


// MOVIE FUNCTIONS // 

//load random movie posters on landing page upon opening the website 
// window.onload = function () {
//   showPosters()
// }

// showPosters()
// 

//   });


// // return a response by searching a movie name
function searchMovie() {
  movie = input.value;
  input.value = "";

  fetch(`http://www.omdbapi.com/?apikey=f9b9102e&t=${movie}`)
    .then(response => response.json())
    .then(json => console.log(json))
};


// //pull out the ID of the movie that was searched, (index 23 in this instance)
// // json.forEach((repo) => {

// // });


// // return 3 similar movies with movie ID
fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=32d3014b4c0bf100be1034a9bed533d5&language=en-US&page=1&`)
  .then(response => response.json())
  .then(json => console.log(json))

function changePage() {

  document.location.href = "results.html";

}

searchBtn.addEventListener("click", searchMovie, changePage);

