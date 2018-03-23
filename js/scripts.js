$(document).ready(function() {

  $("#portland").click(function(event) {
    event.preventDefault();
    $("#location").hide();
    $(".epicodus").show();
    $(".portland").show();

  });

  $("#seattle").click(function(event) {
    event.preventDefault();
    $("#location").hide();
    $(".epicodus").show();
    $(".seattle").show();

  });

  $("#trackChooser").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var picture = $("input:radio[name=picture]:checked").val();
    $(".name").text(nameInput);

    if (nameInput) {
      $(".error").hide();

      if (picture === "lake") {
        $(".results").hide();
        $("#ruby").show();
      } else if (picture === "mountain"){
        $(".results").hide();
        $("#cSharp").show();
      } else if (picture === "bridge"){
        $(".results").hide();
        $("#java").show();
      } else  if (picture === "field"){
        $(".results").hide();
        $("#css").show();
      } else {
        $("#notComplete").show();
      }

    } else {
      $(".error").show();
    }
  });
});
