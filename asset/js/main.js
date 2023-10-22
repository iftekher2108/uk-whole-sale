console.log($("h1").text())


// slick slider 

$('.product-slider').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
});

$('.hero-slider').slick({
  // arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // dots: true
});
// slick slider

$(".hero-slider .slick-prev").css({"top":"47%","left":"3%","z-index":"30"});
$(".hero-slider .slick-next").css({"top":"47%","right":"8%"});
