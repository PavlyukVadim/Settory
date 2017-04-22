$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    touchEnabled: false,
    controls: false,
    pause: 5000
  });
});

$(function() {
  $('body').append('<button class="totop" />');

  $('.totop').click(() => {
    $('body').animate({'scrollTop': 0}, 1000);
    $('html').animate({'scrollTop': 0}, 1000);
  });

  $(window).scroll(() => {
    ($(window).scrollTop() > 200) ? $('.totop').addClass('active'):$('.totop').removeClass('active');
  });
});
