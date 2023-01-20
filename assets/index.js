var searchBtn = document.getElementById("search");
var searchField = document.getElementById("input");
var movie;
var movie1Id;


searchField.focus();


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

          var obj = data.imdbID

          localStorage.setItem('imdbID', obj);
          changePage();
        });
      }
      
      else {
        console.log(response);
      }
    })
};


function changePage() {
  document.location.href = "https://skullkid4200.github.io/Atomic-Cats-Project-1/results";
}


searchBtn.addEventListener("click", searchMovie, changePage);



