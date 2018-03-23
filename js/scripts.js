$(document).ready(function() {
  $("#trackChooser").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var picture = $("input:radio[name=picture]:checked").val();

    // if (nameInput) {
    //   $(".error").hide();
      if (picture === "lake") {
        $(".results").hide();
        $("#ruby").show();
      } else {
        $(".results").hide();
        $("#cSharp").show();
      }
    // } else {
    //   $(".error").show();
    // }
  });
});
