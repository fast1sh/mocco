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