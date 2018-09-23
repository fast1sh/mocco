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
// Packages slider
$('.packages-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button class="convenience-slider__prev convenience-slider__arrow"><i class="fas fa-chevron-circle-left"></i></button>',
  nextArrow: '<button class="convenience-slider__next convenience-slider__arrow"><i class="fas fa-chevron-circle-right"></i></button>'
});
// Selects
$('.packages-form__select-first').ikSelect({
  customClass: 'packages-form__select-first',
  filter: true
});
$('.packages-form__select-second').ikSelect({
  customClass: 'packages-form__select-second'
});
$('.packages-form__select-third').ikSelect({
  customClass: 'packages-form__select-third'
});
$('.packages-form__select-fourth').ikSelect({
  customClass: 'packages-form__select-fourth',
});