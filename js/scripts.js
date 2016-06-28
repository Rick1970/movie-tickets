// var inputtedTitle = '';
// var inpuddedAge = '';

// function Customer(title, age) {
//   this.movieTitle = inputtedTitle;
//   this.movieAge = inputtedAge;
// }

function Movie(title, director, year, cast, time) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.cast = cast;
  this.time = time;
}

var allAboutEve = new Movie("All About Eve","Joseph L. Mankiewicz", 1950, ["Betty Davis", "Anne Baxter"], "07:00");
var citizeKane = new Movie("Citizen Kane","Orson Welles", 1941, ["Orson Welles", "Joseph Cotton"], "09:00");
var currentMovies = [];
var title1 = '';

$(document).ready(function() {
  currentMovies.push(allAboutEve, citizeKane);
  console.log(currentMovies);



  currentMovies.forEach(function(movie) {
    $("#test").append("<li>" + movie.title + "</li>");
  });



  // });
});
