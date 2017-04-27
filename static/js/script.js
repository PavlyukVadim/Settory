$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto: true,
    autoControls: true,
    touchEnabled: false,
    controls: false,
    pause: 3000
  });
});

$(function() {
  $('body').append('<div class="totop"><div class="arrow"></div><span>Наверх</span></div>');

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

var slider = {
  slides: ['static/img/example_img_1.jpg', 'static/img/example_img_5.jpg', 'static/img/example_img_6.jpg'],
  titleArr: ['для житлових кімнат','для кухні', 'для ванної та туалету', 'для коридору'],
  frame: 0,
  set: function (image, title) { // установка нужного фона слайдеру
    setTimeout(function () {
    document.getElementById('sliderTitle').style.opacity = "1";
    document.getElementById('sliderTitle').innerHTML="" + title + "";
    document.getElementById('sliderTitle').style.transition = "opacity 0.5s linear"}, 500)
  },
  init: function () {
    this.set(this.slides[this.frame], this.titleArr[this.frame]);
  },
  left: function () {
    this.frame--;
    if (this.frame < 0) this.frame = this.slides.length - 1;
    this.set(this.slides[this.frame], this.titleArr[this.frame]);
  },
  right: function () {
    this.frame++;
    if (this.frame == this.slides.length) this.frame = 0;
    document.getElementById('sliderTitle').style.opacity = "0";
    document.getElementById('sliderTitle').style.transition = "opacity 0.5s linear";
    this.set(this.slides[this.frame], this.titleArr[this.frame]); 
  }
};

slider.init();
setInterval(function () {
  slider.right();
}, 3000);

setTimeout(function() {
  fadeOutnojquery(hellopreloader);
}, 100);
