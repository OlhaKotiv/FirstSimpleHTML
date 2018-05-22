
/*************scroll button****************/
$(window).load(function() {
  var winHeight = $(document).height();
  var step = 4;
  var timeToScroll = winHeight / step;

  $(".scrolltop").on("click", function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      timeToScroll
    );
  });
});

