


$(function() {
  $("#countUp").submit(function(event) {
    event.preventDefault();
    var numberLow = parseInt($("input#numberLow").val());
    var numberHigh = parseInt($("input#numberHigh").val());
    var interval = parseInt($("input#interval").val());

    if (Number.isNaN(numberLow) || Number.isNaN(numberHigh) || Number.isNaN(interval)){
      alert("You neglected a value, please enter a number in each field");
    }
    else if (interval > numberHigh) {
      alert("ERROR, DOES NOT COMPUTER: the interval needs to be lower than the high number");
    }
    else if (numberLow > numberHigh && interval < 0) {
      alert("Thank you for thinking outside of the box, but for this exercise please have the lower number actually be lower");
    }
    else {
      for (var index = numberLow; index <= numberHigh; index += interval) {
      console.log(index);
      $("ul#numCountOutput").append("<li>" + index + "</li>");
      }
    }
  });
});
