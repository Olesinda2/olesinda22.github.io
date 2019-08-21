$(document).ready(function(){
  $('.carousel__inner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    adaptiveHeight: false,
    slidesToShow: 1
  });
});