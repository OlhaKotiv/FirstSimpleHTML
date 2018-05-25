/*login*/
$(document).ready(function() {
  //---------------------------- filters for invalid symbols

  var filterUsername = /^([a-zA-Z0-9_\-])+$/;
  var filterPassword = /^[a-zA-Z0-9!%&@#$\^*?_~+]+$/;

  $("#pass").on("keyup", function(e) {
//---------------------------- if enter button was pressed
    if (e.keyCode == 13) {
      $(".b-login").click();
    }
  });

//------------------------ enter button

  $(".b-login").on("click", function() {
//---------------------------- autorization parameters
    var data = {};
    data.username = $("#username").val();
    data.password = $("#pass").val();

    if (data.username == "") {
//-------------------- showError(text, top)
      showError("Будь ласка введіть своє ім'я!", 50);
    } else if (data.password == "") {
      showError("Будь ласка введіть свій пароль!", 50);
    } else if (!filterUsername.test(data.username)) {
      showError("Недопустимі символи в імені", 50);
    } else if (!filterPassword.test(data.password)) {
      showError("Недопустимі символи в паролі", 50);
    } else {
      showSuccess("Авторизація", 50);
    }
  });
});
