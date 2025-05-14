$(document).ready(function () {
  $(".info-toggle").click(function () {
    $(".info").slideToggle(300);
    $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
  });

  $(".sidebar-toggle").click(function () {
    $(".sidebar").toggleClass("hidden");
  });

  $(".menu button").click(function () {
    if ($(this).hasClass("sidebar-toggle")) {
      return;
    }

    var target = $(this).data("target");
    $(".section").removeClass("active");
    $("#" + target).addClass("active");
    $(".sidebar").addClass("hidden");
  });

  $(".project-content").click(function () {
    $(this).find("p").toggleClass("expanded");
  });
});
