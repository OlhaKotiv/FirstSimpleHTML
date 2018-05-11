$(document).ready(function() {
  $("body").on("click", ".moreItems", function() {
    var button = $(this);

    //------------- container for add articles
    var container = $(".articles");

    //------------- link for backend for request "more articles"
    var postLink = "/";

    if (!button.hasClass("working")) {
      button.addClass("working");

      //------------- atributs for giving to backend
      var data = {};
      data.action = "moreItems";

      //------------- ajax-request
      $.ajax({
        url: postLink,
        type: "POST",
        dataType: "json",
        data: data,
        success: function(data) {},
        error: function(data) {
          button.removeClass("working");
        }
      }).done(function(data) {
        //---------------- results from backend
        //---------------- data.html - articles array for insert
        //---------------- data.last - did we need the button "more"
        container.append(data.html);
        if (data.last) {
          button.removeClass("working");
        } else {
          button.remove();
        }
      });
    }
  });
}); 

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
