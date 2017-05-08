// Business Logic

function Destination (place, time, landmark1, landmark2, landmark3, landmark4, note) {
  // var landmark = [];
  this.place = place;
  this.timeOfYear = time;
  this.landmark1 = landmark1;
  this.landmark2 = landmark2;
  this.landmark3 = landmark3;
  this.landmark4 = landmark4;
  this.notes = note;
}

Destination.prototype.landmarkList = function() {
  return this.landmark1 + ", " + this.landmark2 + ", " + this.landmark3 + " , and " + this.landmark4 + ".";
}

// UI Logic

$(function() {
  $("form#newPlace").submit(function(event) {
    event.preventDefault();

    var newPlace = $("input#place").val();
    var newTime = $("select#timeOfYear").val();
    var newLandmark1 = $("input#landmark1").val();
    var newLandmark2 = $("input#landmark2").val();
    var newLandmark3 = $("input#landmark3").val();
    var newLandmark4 = $("input#landmark4").val();
    var newNote = $("textarea#notes").val();

    var newDestination = new Destination (newPlace, newTime, newLandmark1, newLandmark2, newLandmark3, newLandmark4, newNote);

    $("ul#destinations").append("<li>" + newDestination.place + "</li>");

    $("input#place").val("");
    $("select#timeOfYear").val("");
    $("input#landmark1").val("");
    $("input#landmark2").val("");
    $("input#landmark3").val("");
    $("input#landmark4").val("");
    $("textarea#notes").val("");

    $("#destinations li").last().click(function() {
      $("#showDestination").show();
      $("#showDestination h2").text(newDestination.place);
      $(".place").text(newDestination.place);
      $(".timeOfYear").text(newDestination.timeOfYear);
      $(".landmark").text(newDestination.landmarkList());
      $(".notes").text(newDestination.notes);
    });

  });
});
