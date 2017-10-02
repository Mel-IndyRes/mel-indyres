$(document).ready(function(){
  $(".menu-link").click(function() {
    $(".services-list").toggleClass("show-menu");
    $(".services-list > li").click(function() {
      $(".services-list").removeClass("show-menu");
    });
    $(".services-list > li").click(function() {
      $(".menu-link").html($(this).html());
    });
  });
});
