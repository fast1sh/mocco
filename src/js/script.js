// Sticky menu
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("nav");
var main = document.getElementById("main");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed");
    main.classList.add("fixed-main");
  } else {
    navbar.classList.remove("fixed");
    main.classList.remove("fixed-main");
  }
};
// Convenience slider
$('.convenience-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button class="convenience-slider__prev convenience-slider__arrow"><i class="fas fa-chevron-circle-left"></i></button>',
  nextArrow: '<button class="convenience-slider__next convenience-slider__arrow"><i class="fas fa-chevron-circle-right"></i></button>'
});

$('.packages-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button class="convenience-slider__prev convenience-slider__arrow"><i class="fas fa-chevron-circle-left"></i></button>',
  nextArrow: '<button class="convenience-slider__next convenience-slider__arrow"><i class="fas fa-chevron-circle-right"></i></button>'
});