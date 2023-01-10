var movieName = "cabin in the woods";




fetch(`http://www.omdbapi.com/?apikey=f9b9102e&t=${movieName}`)
    .then(response => response.json())
    .then(json => console.log(json))

