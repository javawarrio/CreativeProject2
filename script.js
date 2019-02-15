document.getElementById("movieSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("movieInput").value;
  if (value == "")
    return;
  console.log(value);
  const url = "http://www.omdbapi.com/?t=" + value + "&apikey=1ea645fb";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

  results += '<h1>Title: ' + json.Title + "</h1>";
  results +=  '<img class = "border" src=' + json.Poster + '.png"/>';
      document.getElementById("movieResults").innerHTML = results;
      let results2 = "";
      results2 += '<p>ACTORS: ' + json.Actors + '</p>';
      results2 += '<p>RATING: ' + json.Rated + '</p>';
      results2 += '<p>PLOT: ' + json.Plot + '</p>';
      results2 += '<p>RUNTIME: ' + json.Runtime + '</p>';
      document.getElementById("movieResults2").innerHTML = results2;
    });
  });
