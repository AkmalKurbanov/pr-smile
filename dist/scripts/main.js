"use strict";$(function(){$(".js-show").on("click",function(e){e.preventDefault(),$(".js-hidden-content").slideDown()}),$(".js-slide").owlCarousel({loop:!0,margin:20,nav:!0,items:2,dots:!1,slideBy:2,navText:['<i class="flabio-angle-left"></i>','<i class="flabio-angle-right"></i>']}),$(".js-about-slide").owlCarousel({loop:!0,margin:10,nav:!1,items:1,dots:!0}),$(".js-step-slider").owlCarousel({loop:!0,margin:10,nav:!0,items:1,navText:['<i class="flabio-angle-left"></i>','<i class="flabio-angle-right"></i>'],dotsContainer:".steps__thumbnail",dots:!1,thumbs:!0,thumbsPrerendered:!0}),$("form").submit(function(){var e=$(this);return $.ajax({type:"POST",url:"../mail.php",data:e.serialize()}).done(function(){alert("Thank you!"),setTimeout(function(){e.trigger("reset")},1e3)}),!1}),$(".popup-content").magnificPopup({type:"inline"}),$("#js-nav a").on("click",function(e){e.preventDefault();var t=$(this).attr("href"),n=$(t).offset().top;$("html, body").animate({scrollTop:n-0},500)}),new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:function(e){},scrollContainer:null}).init(),$(".js-phone").mask("+7 (999) 999-99-99"),$(".header__nav ul").clone().appendTo(".mmenu-nav");var e=$(".mmenu-nav").mmenu({navbar:{title:"Меню"},extensions:["fx-menu-slide","fx-listitems-slide","border-full","pagedim-black"],offCanvas:{position:"right"},counters:!0}),t=$(".js-navtrigger"),n=e.data("mmenu");if(t.on("click",function(){n.open()}),n.bind("open:start",function(e){$(".js-navtrigger").toggleClass("-active")}),n.bind("close:start",function(e){$(".js-navtrigger").toggleClass("-active")}),Modernizr.mq("(max-width: 767px)")){var a=function(e){if($("#map").html(""),o=new ymaps.Map("map",{controls:["zoomControl","fullscreenControl","geolocationControl"],center:[59.925655,30.312032],behaviors:["drag"],zoom:17}),!e.type)return l=new ymaps.Placemark([59.925655,30.312032],{balloonContentHeader:"",balloonContentBody:""}),o.geoObjects.add(l),!0};$('a.-pagescroll[href*="#"]:not([href="#"])').click(function(){if(n.close(),location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!0}});var o,l;ymaps.ready(a)}else{var i=function(e){if($("#map").html(""),o=new ymaps.Map("map",{controls:["zoomControl","fullscreenControl","geolocationControl"],center:[59.925655,30.312032],behaviors:["drag"],zoom:17}),!e.type)return l=new ymaps.Placemark([59.925655,30.312032],{balloonContentHeader:"",balloonContentBody:"г. Санкт-Петербург, м. Садовая, наб. канала Грибоедова, 70"}),o.geoObjects.add(l),!0};$('a.-pagescroll[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!0}});var o,l;ymaps.ready(i)}});