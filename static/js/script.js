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

var hellopreloader = document.getElementById('hellopreloader_preload');
function fadeOutnojquery(el) {
  el.style.opacity = 1;
  var interhellopreloader = setInterval(function() {
    el.style.opacity = el.style.opacity - 0.05;
    if (el.style.opacity <= 0.05){ 
      clearInterval(interhellopreloader);
      hellopreloader.style.display = 'none';
    }
  },16);
}

window.onload = function() {
  setTimeout(function() {
    fadeOutnojquery(hellopreloader);
  }, 100);
};
