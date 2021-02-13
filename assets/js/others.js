
$(function () {
  $(document).scroll(function () {
    if ($(document).scrollTop()) { // check if user scrolled more than 50 from top of the browser window
      $(".sticky-top").css("background-color", "#13161F"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $(".sticky-top").css("background-color", "transparent"); // if not, change it back to transparent
    }
  });
});


/*================================ End ====================================*/