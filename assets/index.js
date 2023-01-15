var searchBtn = document.getElementById("search");
var searchField = document.getElementById("input");
var movie;
var movie1ID;

// Movie API testing
var movieName = "cabin in the woods";
var movieID = "tt1259521"
//tmdb
var tmdbAPI = `https://api.themoviedb.org/3/movie/550?api_key=32d3014b4c0bf100be1034a9bed533d5`
//omdb
var omdbAPI = `http://www.omdbapi.com/?apikey=f9b9102e&t=${movieName}`



function searchMovie() {
  movie = input.value;
  input.value = "";

  fetch(`http://www.omdbapi.com/?apikey=f9b9102e&t=${movie}`, {
    method: 'GET',
    // mode: 'no-cors',
    credentials: 'same-origin',
    redirect: 'follow',
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

          var obj = data.imdbID

          console.log(obj)
          localStorage.setItem('imdbID', obj);
          changePage();
        });
      }


      else {
        console.log(response);
        alert('Error: ' + response.statusText);
      }
    })
};


function changePage() {
  document.location.href = "file:///C:/Users/Jack/Desktop/BOOTCAMP_WORK/FIRST%20GROUP%20PROJECT/Atomic-Cats-Project-1/results.html";
}

searchBtn.addEventListener("click", searchMovie, changePage);

// MOVIE FUNCTIONS //

//load random movie posters on landing page upon opening the website
// window.onload = function () {
//   showPosters()
// }

// showPosters()
//

//   });
