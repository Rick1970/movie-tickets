// var eve = {
//   time: ["11:00 a.m", "1:30 p.m.", "04:30 p.m.", "07:15 p.m."],
//   price: [5, 5, 5, 8],
//   rating
// };

// function Movie(title, age) {
//   this.movieTitle = title;
//   this.movieAge = age;
//
// }




$(document).ready(function() {
  $("form#blanks").submit(function(event) {
  event.preventDefault();

  var inputtedTitle = $("#movieTitle").val();
  var inputtedAge = parseInt($("input#age").val());
  alert(inputtedTitle);
  alert(inputtedAge);

  });
});
