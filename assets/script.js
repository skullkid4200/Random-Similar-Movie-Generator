// MUSIC API

var musicInput = 'ghostbusters';

var musicAPI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=${ytApiKey}&q=${musicInput}`;

fetch(musicAPI, {
  method: 'GET',
//   mode: 'no-cors',
  credentials: 'same-origin',
  redirect: 'follow',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
});

