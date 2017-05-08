// Business Logic

function Destination (place, time, landmark1, landmark2, note) {
  // var landmark = [];
  this.place = place;
  this.timeOfYear = time;
  this.landmark1 = landmark1;
  this.landmark2 = landmark2;
  this.notes = note;
}

// UI Logic

$(function() {
  $("form#newPlace").submit(function(event) {
    event.preventDefault();

    var newPlace = $("input#place").val();
    var newTime = $("select#timeOfYear").val();
    var newLandmark1 = $("input#landmark1").val();
    var newLandmark2 = $("input#landmark2").val();
    var newNote = $("textarea#notes").val();

    var newDestination = new Destination (newPlace, newTime, newLandmark1, newLandmark2, newNote);

    $("ul#destinations").append("<li>" + newDestination.place + "</li>");

    $("input#place").val("");
    $("select#timeOfYear").val("");
    $("input#landmark1").val("");
    $("input#landmark2").val("");
    $("textarea#notes").val("");

  });
});
