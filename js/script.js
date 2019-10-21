$('.slider-one').slick({
  slidesToShow: 8,
  slidesToScroll: 8,
  // autoplay: true,
  // autoplaySpeed: 5000,
  arrows: false,
  dots: true,
  // responsive: [{
  //   breakpoint: 768,
  //   settings: {
  //     arrows: true,
  //     slidesToShow: 1,
  //     dots: false
  //   }
  // }]
});
// $('.slider-two').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 5000,
//   arrows: false,
//   dots: true,
//   responsive: [{
//     breakpoint: 768,
//     settings: {
//       arrows: true,
//       slidesToShow: 1,
//       dots: false
//     }
//   }]
// });

// $(document).ready(function(){
// });

// $('.tabone').on('click', function () {
//   $('.slider-one').slick();
// });

$('.data-product .info .info__link').on('click', function () {
  $('#modal-form').modal('show');
});

$(function () {
  $("#tabs").tabs();
});

$('.tabtwo').on('click', function () {
  $('.assortment__line').addClass('line-right');
});

$('.tabone').on('click', function () {
  $('.assortment__line').removeClass('line-right');
});
