
var v1El = document.querySelector('#video-1');
var refreshButton = document.getElementById("refresh");
var returnButton = document.getElementById("return");
var v1Input;
var v2Input;
var v3Input;

var v1Title = document.getElementById("movie-title-1");
var v2Title = document.getElementById("movie-title-2");
var v3Title = document.getElementById("movie-title-3");

var v1Plot = document.getElementById("movie-plot-1");
var v2Plot = document.getElementById("movie-plot-2");
var v3Plot = document.getElementById("movie-plot-3");

var v1Year = document.getElementById("movie-year-1");
var v2Year = document.getElementById("movie-year-2");
var v3Year = document.getElementById("movie-year-3");

var obj = localStorage.getItem('imdbID');
var v1id;
var v1Url;

var number = Math.trunc(Math.random() * 500) + 1;

var trailerAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${v1Input}_official_trailer`;
var tmdbAPI = `https://api.themoviedb.org/3/movie/${obj}/similar?api_key=${tmdbApiKey}&language=en-US&page=${number}`;


function generateAgainBtn(event) {
  event.preventDefault();
  window.location.reload();
}




function getSimilarMovies() {

  obj = localStorage.getItem('imdbID');
  console.log(obj);

  fetch(tmdbAPI, {
    method: 'GET',
    // mode: 'no-cors',
    credentials: 'same-origin',
    redirect: 'follow',
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

          v1Input = data.results[0].title;
          v2Input = data.results[1].title;
          v3Input = data.results[2].title;

          v1Title.innerHTML = data.results[0].title;
          v2Title.innerHTML = data.results[1].title;
          v3Title.innerHTML = data.results[2].title;

          v1Plot.innerHTML = "Plot: " + data.results[0].overview;
          v2Plot.innerHTML = "Plot: " + data.results[1].overview;
          v3Plot.innerHTML = "Plot: " + data.results[2].overview;

          v1Year.innerHTML = "Release Date: " + data.results[0].release_date;
          v2Year.innerHTML = "Release Date: " + data.results[1].release_date;
          v3Year.innerHTML = "Release Date: " + data.results[2].release_date;


          console.log(v1Input + v2Input + v3Input);
        });
      }
    })
}

function returnHome() {
  document.location.href = "file:///Users/priyankaagrawal/Desktop/bootcamp/Atomic-Cats-Project-1/index.html";
}


getSimilarMovies();
refreshButton.addEventListener("click", generateAgainBtn);
returnButton.addEventListener("click", returnHome)








// function getVideo1() {

//   fetch(trailerAPI, {
//     method: 'GET',
//     // mode: 'no-cors',
//     credentials: 'same-origin',
//     redirect: 'follow',
//   })
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           console.log(data);
//           v1id = data.items[0].id.videoId;
//           displayV1(v1id);
//         });
//       } else {
//         console.log(response);
//         alert('Error: ' + response.statusText);
//       }
//     })
// };


// getVideo1();



//   // console.log(v1id);

//   v1El.innerHTML = `
//     <iframe width="560" height="315" src="https://www.youtube.com/embed/${v1id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//     `;

// };
