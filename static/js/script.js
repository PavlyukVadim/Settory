var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

$('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  touchEnabled: false,
  controls: false,
  pause: 3000
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

setTimeout(function() {
  fadeOutnojquery(hellopreloader);
}, 100);

(function scrollToComponent() {
  $('body').append('<div class="totop"><div class="arrow"></div><span>Наверх</span></div>');
  $('.totop').click(() => {
    $('body').animate({'scrollTop': 0}, 1000);
    $('html').animate({'scrollTop': 0}, 1000);
  });
  $('.logo').click(() => {
    $('body').animate({'scrollTop': 0}, 1000);
    $('html').animate({'scrollTop': 0}, 1000);
  });
  $(window).scroll(() => {
    if ($(window).scrollTop() > 200 && $(window).scrollTop() < $(document).height() - $(window).height()) {
      $('.totop').addClass('active');
    } else {
      $('.totop').removeClass('active');
    }
  });
})();

(function sliderComponent() {
  var slider = {
    titleArr: ['для житлових кімнат','для кухні', 'для ванної та туалету', 'для коридору'],
    indexOfSlides: 0,
    set: function (title) {
      setTimeout(function () {
        document.getElementById('sliderTitle').style.opacity = '1';
        document.getElementById('sliderTitle').innerHTML = title;
        document.getElementById('sliderTitle').style.transition = 'opacity 0.3s linear';
      }, 500);
    },
    init: function () {
      this.set(this.titleArr[this.indexOfSlides]);
    },
    left: function () {
      this.indexOfSlides--;
      if (this.indexOfSlides < 0) {
        this.indexOfSlides = this.titleArr.length - 1;
      }
      this.set(this.titleArr[this.indexOfSlides]);
    },
    right: function () {
      this.indexOfSlides++;
      if (this.indexOfSlides === this.titleArr.length) {
        this.indexOfSlides = 0;
      }
      document.getElementById('sliderTitle').style.opacity = '0';
      document.getElementById('sliderTitle').style.transition = 'opacity 0.3s linear';
      this.set(this.titleArr[this.indexOfSlides]);
    }
  };

  slider.init();
  setInterval(function () {
    slider.right();
  }, 3000);

})();

(function scrollToComponent() {
  var navLinks = document.getElementsByClassName('nav-link');
  var navbar = document.getElementsByClassName('navbar')[0];
  var mapOfTargetElements = {};
  var i;
  var selector;
  var element;

  var scrolled = 0 || window.pageYOffset || document.documentElement.scrollTop;
  var SCROLL_TIME = 400; // ms
  var acceleration = true;
  var isScrolling = false;
  var shift = 10;

  for (i = 0; i < navLinks.length; i++) {
    selector = navLinks[i].dataset.scrollTo;
    element = document.querySelectorAll(selector)[0];
    mapOfTargetElements[selector] = element;

    navLinks[i].onclick = (function(i) {
      return function() {
        if (!isScrolling) {
          toggleScroll(mapOfTargetElements[navLinks[i].dataset.scrollTo].offsetTop, scrolled);
        }
      }
    })(i);
  }

  document.addEventListener('scroll', function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
  });

  function toggleScroll(to, scrolled) {
    if (!isMobile) {
      to = to - navbar.clientHeight;
    }

    var distance = Math.abs(to - scrolled);
    var initialDistance = distance;
    var speed = distance / SCROLL_TIME * 10; // pixels/10ms
    var step;
    isScrolling = true;
    isScrollingViaMenu = true;

    if (acceleration) {
      speed = 0;
      step = 2 * distance / Math.pow(SCROLL_TIME, 2) * 10;
    }
    var scrollInterval = setInterval(function() {
      distance -= speed;
      if (acceleration && distance >= initialDistance / 2) {
        speed += step;
      } else if (acceleration && distance < initialDistance / 2) {
        speed = speed > step * 3 ? speed - step : speed;
      }
      var positionY = scrolled < to ? to - distance : to + distance;
      window.scrollTo(0, positionY);
      if (distance <= shift) {
        isScrolling = false;
        isScrollingViaMenu = false;
        isScrollToContacts = false;
        isScrollToClients = false;
        clearInterval(scrollInterval);
      }
    }, 10);
  }

})();
