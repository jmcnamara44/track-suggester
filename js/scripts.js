$(document).ready(function() {

  $("#portland").click(function(event) {
    event.preventDefault();
    $("#location").hide();
    $(".epicodus").fadeIn(1000);
    $(".portland").fadeIn(1000);

  });

  $("#seattle").click(function(event) {
    event.preventDefault();
    $("#location").hide();
    $(".epicodus").fadeIn(1000);
    $(".seattle").fadeIn(1000);

  });

  $("#trackChooser").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var language = $("input:radio[name=language]:checked").val();
    var siteLayout = $("#layout").val();
    var subject = $("#schoolSubject").val();
    var picture = $("input:radio[name=picture]:checked").val();

    $(".name").text(nameInput);

    if (nameInput && language && siteLayout && subject && picture) {

      $(".error").hide();

      if (subject === "6") {


        if (picture === "lake") {
          $(".results").hide();
          $("#ruby").show();
          $("#noCode").show();
        } else if (picture === "mountain"){
          $(".results").hide();
          $("#cSharp").show();
          $("#noCode").show();
        } else if (picture === "bridge"){
          $(".results").hide();
          $("#java").show();
          $("#noCode").show();
        } else  if (picture === "field"){
          $(".results").hide();
          $("#css").show();
          $("#noCode").show();
        } else {
          $("#error").show();
        }

      } else {


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
          $("#error").show();
        }
      }

    } else {
      $(".results").hide();
      $("#notComplete").show();
    }
  });
});
