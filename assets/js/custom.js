

// prelaoder
$(window).on('load', function () { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({ 'overflow': 'visible' });
})



// header

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
});



$('.banner-slider').slick({
    dots: true,
    infinite: false,
    arrows:false,
    speed: 2000,
    autoplay:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  });


  // products slider
  $('.product_slider').slick({
    dots: false,
    infinite: false,
    arrows:true,
    speed: 2000,
    autoplay:false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows:true,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767,
        settings: "unslick",
      }
    ]
  });




// shop look slider

$('.shop_look_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// in-the-press-slider
$('.in-the-press-slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0"
      }
    }
  ]
});
  



// dropdown
$("#open_dropdown").click(function(){
  $(".dropdown_cutsom").toggleClass("active");
});

$(".li_link").click(function(){
  $(".dropdown_cutsom").removeClass("active");
});

// dropdown
$(".humburger-menu").click(function(){
  $(".header").toggleClass("active");
});

$(".header .search svg").click(function(){
  $(".header .search").toggleClass("active");
});


// $(".figure").hover(
//   function () {
//     $(".content-overlay").addClass("visible");
//   },
//   function () {
//     $(".content-overlay").removeClass("visible");
//   }
// );




if(window.outerWidth < 767) {
  $(document).ready(function(){
    $(".product_slider .product_outer:nth-child(4) ~ div").remove();
});
}

$("#view_products").click(function(){
  $(".slider_wrapper .row > div").addClass("active");
});
$("#view_products").click(function(){
  $(".shop_the_look ").addClass("active");
  $(this).hide();

});
$(".close_products").click(function(){
  $(".slider_wrapper .row > div").removeClass("active");
  $("#view_products").show();
});
