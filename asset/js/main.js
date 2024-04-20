$(document).ready(function () {

  $('#loader').fadeOut('slow');
  
  // scroll functionality
  $(document).scroll(function () {
    if ($(document).scrollTop() > 10) {
      $('.top-banner').slideUp('fast');
    } else {
      $('.top-banner').slideDown('fast');
    }
  })


// slick slider 
$('.product-slider').slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: true,
  infinite: false,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.brand-slider').slick({
  arrows: true,
  slidesToShow: 7,
  slidesToScroll: 4,
  dots: true,
  infinite: true,
  autoPlay: true,
  autoplaySpeed: 1500,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.hero-slider').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // dots: true,
  infinite: true,
  autoPlay: true,
  autoplaySpeed: 2000,
});
// slick slider

// hero slide arrow  css
$(".hero-slider .slick-prev").css({
  "top": "47%",
  "left": "3%",
  "z-index": "30"
});
$(".hero-slider .slick-next").css({
  "top": "47%",
  "right": " 5.5%"
});
// hero slide arrow css


// catagory hide show
$(".main-cat-btn").click(function () {
$(".menu").toggle(400)
})
// catagory hide show






})