window.onscroll = function () { myFunction() };
var navbar = document.getElementById("nav");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
};