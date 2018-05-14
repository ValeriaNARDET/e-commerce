$(".toggle-menu").click(function() {
  $(this).toggleClass("on");
  $(".menu").slideToggle();
  $(".navigation").toggleClass("long-nav")
 });

$(".slider-block.owl-carousel").owlCarousel({
  items : 1,
  nav : true,
  navText : " ",
  loop : true,
  autoplay : true,
  autoplayHoverPause : true,
  fluidSpeed : 800,
  autoplaySpeed : 800,
  navSpeed : 800,
  dotsSpeed : 800,
  dragEndSpeed : 800
 });
