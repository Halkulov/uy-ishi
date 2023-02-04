$(document).ready(function () {
  var $search = $(".search");

  $("#close").click(function () {
    cb("-150");
  });

  $("#search").click(function () {
    cb(0);
  });

  function cb(value) {
    $search.animate({
      top: value,
    });
  }
});
