$(".toggled-span").hide();
$(".toggled-span:first").show();

$(".service-toggle").click(function(event) {
  event.preventDefault();

  $(".toggled-span").hide();
  var activeTab = $(this).attr("rel");
  $("#"+activeTab).show();

  $(".service-toggle").removeClass("active");
  $(this).addClass("active");
});
