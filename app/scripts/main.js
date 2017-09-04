$(function() {


  $('.js-show').on('click', function(e) {
    e.preventDefault();    
    $('.js-hidden-content').slideDown(); 
  });

  

  $('.js-slide').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items: 2,
    dots: false,
    slideBy: 2,
    navText: ['<i class="flabio-angle-left"></i>', '<i class="flabio-angle-right"></i>']
    
  })

  $('.js-about-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    dots: true,

  })


  $('.js-step-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1,
    navText: ['<i class="flabio-angle-left"></i>', '<i class="flabio-angle-right"></i>'],
    dotsContainer: '.steps__thumbnail',
    dots: false,
    thumbs: true,
    thumbsPrerendered: true,
  })


  //E-mail Ajax Send
  $('form').submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: '../mail.php', //Change
      data: th.serialize()
    }).done(function() {
      alert('Thank you!');
      setTimeout(function() {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });

  $('.popup-content').magnificPopup({
    type: 'inline'
  });

  $('#js-nav a').on('click', function(e) {

    e.preventDefault();

    var currentBlock = $(this).attr('href'),
    currentBlockOffset = $(currentBlock).offset().top;

    $('html, body').animate({
      scrollTop: currentBlockOffset - 0
    }, 500);

  }); 




  var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
  );
  wow.init();


  $('.js-phone').mask('+7 (999) 999-99-99');



  $('.header__nav ul').clone().appendTo('.mmenu-nav');

  var $menu = $('.mmenu-nav').mmenu({
    navbar: {
      title: 'Меню'
    },
    extensions: [
    'fx-menu-slide',
    'fx-listitems-slide',
    'border-full',
    'pagedim-black'

    ],
    offCanvas: {
      'position': 'right'
    },
    counters: true
  });

  var $icon = $('.js-navtrigger');
  var API = $menu.data('mmenu');

  $icon.on('click', function() {
    API.open();
  });

  API.bind('open:start', function($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  API.bind('close:start', function($panel) {
    $('.js-navtrigger').toggleClass('-active');
  });

  if (Modernizr.mq('(max-width: 767px)')) {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function() {
      API.close();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return true;
        }
      }
    });
    var myMap, myPlacemark;

    ymaps.ready(init);

    function init(data) {
      $('#map').html('');
      myMap = new ymaps.Map('map', {
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
        center: [59.925655, 30.312032],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([59.925655, 30.312032], {
          balloonContentHeader: '',
          balloonContentBody: ''

        });
        myMap.geoObjects.add(myPlacemark);
        return true;
      };
    };
  } else {
    $('a.-pagescroll[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return true;
        }
      }
    });
    var myMap, myPlacemark;

    ymaps.ready(init);

    function init(data) {
      $('#map').html('');
      myMap = new ymaps.Map('map', {
        controls: ['zoomControl', 'fullscreenControl', 'geolocationControl'],
        center: [59.925655, 30.312032],
        behaviors: ['drag'],
        zoom: 17
      });

      if (!data.type) {
        myPlacemark = new ymaps.Placemark([59.925655, 30.312032], {
          balloonContentHeader: '',
          balloonContentBody: 'г. Санкт-Петербург, м. Садовая, наб. канала Грибоедова, 70'
        });
        myMap.geoObjects.add(myPlacemark);
        return true;
      };
    };
  }

$(function() {
    // All Variable =======================================================================
    var body        = $('body'),
        slider      = $('.slider'),
        sliderUl    = slider.find('ul'),
        sliderUlLi  = sliderUl.find('li'),
        sliderOl    = slider.find('ol'),
        sliderOlLi  = sliderOl.find('li'),
        controlFa   = $('.control .fa'),
        sliderTime  = 900,
        sliderWait  = 4000,
        clickHere   = 'yes click',
        autoPlay;

    // All Functions =====================================================================
    sliderUl.append('<li>' + sliderUlLi.first().html() + '</li>');
    sliderUl.prepend('<li>' + sliderUlLi.last().html() + '</li>');
    
    function runSlider() {
        if (clickHere === 'yes click') {
            clickHere = 'no click';
            sliderUl.animate({
                marginLeft: -sliderUlLi.width() * ($('.slider .active').index() + 1)
            }, sliderTime, function () { clickHere = 'yes click'; });
        }
    }
    function addActive(param) {
        if (clickHere === 'yes click') {
            param.addClass('active').siblings('li').removeClass('active');
        }
    }

    // Click Point =======================================================================
    sliderOlLi.on('click', function() {
        addActive($(this));
        runSlider();
    });

    // Click Arrow Left
    controlFa.first().on('click', function() {
        if ($('.slider .active').is(':first-of-type')) {
            addActive(sliderOlLi.last());
            if (clickHere === 'yes click') {
                clickHere = 'no click';
                sliderUl.animate({
                    marginLeft: '+=' + sliderUlLi.first().width()
                }, sliderTime, function() {
                    sliderUl.css( 'margin-left', -sliderUlLi.width() * ($('.slider .active').index() + 1));
                    clickHere = 'yes click';
                });
            }
        } else {
            addActive($('.slider .active').prev('li'));
            runSlider();
        }
    });

    // Click Arrow Right
    controlFa.last().on('click', function() {
        if ($('.slider .active').is(':last-of-type')) {
            addActive(sliderOlLi.first());
            if (clickHere === 'yes click') {
                clickHere = 'no click';
                sliderUl.animate({
                    marginLeft: '-=' + sliderUlLi.first().width()
                }, sliderTime, function() { 
                    sliderUl.css('margin-left', -sliderUlLi.width() * ($('.slider .active').index() + 1));
                    clickHere = 'yes click';
                });
            }
        } else {
            addActive($('.slider .active').next('li'));
            runSlider();
        }
    });
                
    // Start Set =======================================================================
    sliderOlLi.first().click();
    
    // Keyboard ========================================================================
    $('body').keydown(function(e) {
        if (e.keyCode == 37) { // left
            controlFa.first().click();
        } else if (e.keyCode == 39) { // right
            controlFa.last().click();
        }
    });

    // Auto Run Slider ==============================================================
    // function autoRunSlider() {
    //     if (body.css('direction') === 'ltr') {
    //         autoPlay = setInterval(function() { controlFa.last().click(); }, sliderWait);
    //     } else if (body.css('direction') === 'rtl') {
    //         autoPlay = setInterval(function() { controlFa.first().click(); }, sliderWait);
    //     }
    // }
    // autoRunSlider();
    
    // When Hover fa ==============================================================
    // slider.find('.fa').on('mouseenter', function() { clearInterval(autoPlay); });
    // slider.find('.fa').on('mouseleave', function() { autoRunSlider(); });
});

// Em An
// 8-2017
// https://codepen.io/collection/AGNJNB

});





























