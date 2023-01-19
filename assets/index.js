var searchBtn = document.getElementById("search");
var searchField = document.getElementById("input");
var movie;
var movie1ID;


searchField.focus();


var tmdbAPI = `https://api.themoviedb.org/3/movie/550?api_key=32d3014b4c0bf100be1034a9bed533d5`


function searchMovie() {
  movie = input.value;
  input.value = "";

  fetch(`https://www.omdbapi.com/?apikey=f9b9102e&t=${movie}`, {
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
  document.location.href = "https://skullkid4200.github.io/Atomic-Cats-Project-1/results";
}


searchBtn.addEventListener("click", searchMovie, changePage);



