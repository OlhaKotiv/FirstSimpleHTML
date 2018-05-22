$(document).ready(function() {
  //*********** cancel buton ***********//

  $("body").on("click", ".p-cancel", function() {
    $(".popup-holder.dynamic").fadeOut("fast", function() {
      $(this).remove();
    });
  });

  //*********** CHECKERS ***********//

  $("body").on("click", ".checker", function() {
    $(this).toggleClass("active");
    var relative = $(this).attr("data-relna");
    if (relative) {
      $("." + relative).toggleClass("na");
    }
  });

  $(".check-holder").on("click", ".check", function() {
    if (
      !$(this)
        .parent(".check-holder")
        .hasClass("na")
    ) {
      if (
        $(this)
          .parents(".check-holder")
          .hasClass("single")
      ) {
        $(this)
          .parents(".check-holder")
          .find(".check")
          .removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).toggleClass("active");
      }
    }
  });

  $("body").on("click", ".open-bayan", function() {
    if ($(this).hasClass("up")) {
      $(this)
        .next()
        .slideUp("fast");
      $(this).removeClass("up");
    } else {
      $(this).addClass("up");
      $(this)
        .next()
        .slideDown("fast");
    }
  });
});
