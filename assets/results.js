
var v1El = document.querySelector('#video-1');
var v2El = document.querySelector('#video-2');
var v3El = document.querySelector('#video-3');

var v1Input;
var v2Input;
var v3Input;
var inputs;
var v1id;
var v2id;
var v3id;

var videoFetch;
var dataObj;

var obj = localStorage.getItem('imdbID');

var number = Math.trunc(Math.random() * 50) + 1;

var tmdbAPI = `https://api.themoviedb.org/3/movie/${obj}/similar?api_key=${tmdbApiKey}&language=en-US&page=${number}`;



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
          console.log(v1Input + v2Input + v3Input);
          getVideo1();
          getVideo2();
          getVideo3();
        });
      }
    })
}

getSimilarMovies()


function getVideo1() {

  var trailer1API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${v1Input}_official_trailer`

  fetch(trailer1API, {
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

function getVideo2() {

  var trailer2API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${v2Input}_official_trailer`

  fetch(trailer2API, {
    method: 'GET',
    // mode: 'no-cors',
    credentials: 'same-origin',
    redirect: 'follow',
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          v2id = data.items[0].id.videoId;
          displayV2(v2id);
        });
      } else {
        console.log(response);
        alert('Error: ' + response.statusText);
      }
    })
};

function getVideo3() {

  var trailer3API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${v3Input}_official_trailer`

  fetch(trailer3API, {
    method: 'GET',
    // mode: 'no-cors',
    credentials: 'same-origin',
    redirect: 'follow',
  })
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          v3id = data.items[0].id.videoId;
          displayV3(v3id);
        });
      } else {
        console.log(response);
        alert('Error: ' + response.statusText);
      }
    })
};


function displayV1(v1id) {

  v1El.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${v1id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

};

function displayV2(v2id) {

  v2El.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${v2id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

};

function displayV3(v3id) {

  v3El.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${v3id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

};




// async function getVideos () {
//   inputs = [];
//   inputs.push(v1Input, v2Input, v3Input);
//   console.log(inputs);

//   // for (let i = 0; i < inputs.length; i++) {
//   //   trailerUrls = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${inputs[i]}_official_trailer`;
      
//   //   console.log(trailerUrls);
//   // };

//   videoFetch = await Promise.allSettled(
// 	  inputs.map(async inputs => {
// 		  const response = await fetch(
// 		  	`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${inputs[i]}_official_trailer`
// 	  	);
//   	})
//   );

//   await Promise.allSettled(console.log(response));

//   // dataObj = await response.json();


//   // let { id: {videoId} } = trailer.list[0];

//   // var stuff = JSON.stringify(dataObj);
//   // var data = JSON.parse(dataObj);

//   // v1id = data.items[0].id.videoId;

// };