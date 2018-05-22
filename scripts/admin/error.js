var timer = null;

function hideError() {
  //------------ clear timer
  if (timer != null) {
    window.clearTimeout(timer);
  }

  //------------ timeout 5 sec
  timer = window.setTimeout(function() {
    $(".error-holder").fadeOut();
  }, 5000);
}

//********** showError - error message  **********//

function showError(text, top) {
  $(".error-holder").removeClass("error-holder-success");
  $(".error-holder").css({ top: "" + top + "px", "z-index": "999999" });
  $(".error-holder span").text(text);

  $(".error-holder").fadeIn(function() {
    hideError();
  });
}

//*********showSuccess - success message*********//

function showSuccess(text, top) {
  $(".error-holder").addClass("error-holder-success");
  $(".error-holder").css({ top: "" + top + "px", "z-index": "999999" });
  $(".error-holder span").text(text);

  $(".error-holder").fadeIn(function() {
    hideError();
  });
}

$(document).ready(function() {
  //************hide message on click****************//
  $(".error-holder").on("click", function() {
    $(this).fadeOut();
  });
});
