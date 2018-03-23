$(document).ready(function() {
  $("#trackChooser").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();


    if (nameInput) {

    } else {
      $(".error").show();
    }
  });
});
