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

var allAboutEve = new Movie("All About Eve","Joseph L. Mankiewicz", 1950, ["Betty Davis", "Anne Baxter"], ["11:00am", "1:30pm", "4:30pm", "7:30pm"]);
var citizeKane = new Movie("Citizen Kane","Orson Welles", 1941, ["Orson Welles", "Joseph Cotton"], ["11:15am", "1:45pm", "5:10pm", "8:00pm"]);
var starWars = new Movie("Star Wars","George Lucas",1977, ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "James Earl Jones"], ["12:00pm", "2:45pm", "5:00pm", "8:15pm"])
var touchOfEvil = new Movie("Touch of Evil", "Orson Welles", 1958, ["Charlton Heston", "Janet Leigh", "Orson Welles", "Joseph Calleia"], ["5:00pm", "8:00pm"])
var currentMovies = [];
var title1 = '';

$(document).ready(function() {
  currentMovies.push(allAboutEve, citizeKane, starWars, touchOfEvil);
  console.log(currentMovies);

  currentMovies.forEach(function(movie) {
    $("#titles").append("<li>" + movie.title + "</li>");

  $(".clickable").click(function(event) {
    event.preventDefault();
    alert("testing")





    });



  });
});
