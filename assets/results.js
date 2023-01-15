// YouTube API
var v1El = document.querySelector('#video-1');

var v1Input = 'ghostbusters';
var v1id;
var v1Url;

var trailerAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${v1Input}_official_trailer`;



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
  // if (!v1Url) {
  //   v1El.textContent = 'Error: Video Not Found.';
  //   return;
  // }

  v1El.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${v1id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;

};


// // return 3 similar movies with movie ID
fetch(`https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=32d3014b4c0bf100be1034a9bed533d5&language=en-US&page=1&`)
  .then(response => response.json())
  .then(json => console.log(json))

// function changePage() {

//   document.location.href = "file:///C:/Users/Jack/Desktop/BOOTCAMP_WORK/FIRST%20GROUP%20PROJECT/Atomic-Cats-Project-1/results.html";

// }

// searchBtn.addEventListener("click", searchMovie, changePage);

