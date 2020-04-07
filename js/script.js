
//////////////////////////////
// menu click event side menu
$(function() {
  $(".header__menu-btn").click(function() {
    $(".header__menu_sidebar").toggleClass("active");
    $(console.log("hey"));
  });

});

////////////////////////
// slider for header
$(".header__slider").slick({
  dots: true,
  infinite: true,
  // autoplay: true,
  speed: 700,
  fade: true,
  cssEase: "linear",
});

$(".header__smallSlider").slick({
  dots: true,
  infinite: true,
  // autoplay: true,
  speed: 700,
  fade: true,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});
/////////////////////
// slider for header
$(".doctor__slider").slick({
  infinite: true,
  autoplay: true,
  dots: false,
  speed: 700,
  fade: true,
  cssEase: "linear",
});


//////////////////////////
$(document).ready(function() {
  // scroll to next btn
  $(".header__slider-down").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".about").offset().top
      },
      1000
    );
  });
  $(".footer__up-btn").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".header").offset().top
      },
      3000
    );
  });
});


//sticky menu on scrolling 
window.onscroll = function () { myFunction() };
var navbar = document.getElementById("sticky_nav");
var sticky = navbar.offsetTop; 
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("container")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("container")
  }
}

// wow js
new WOW().init();
