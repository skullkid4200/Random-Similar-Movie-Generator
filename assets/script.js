// YouTube API
var v1El = document.querySelector('#video-1');

var v1Input = 'ghostbusters';
var v1id;
var v1Url;

var trailerAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${ytApiKey}&q=${v1Input}_official_trailer`;


function getVideo1 () {

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

getVideo1 ();


function displayV1 (v1id) {
    // if (!v1Url) {
    //   v1El.textContent = 'Error: Video Not Found.';
    //   return;
    // }

    v1El.innerHTML = `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${v1id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;

};

