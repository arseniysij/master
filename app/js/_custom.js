window.onload = function() {
  AOS.init({
      offset: 100,
      duration: 1000,
      // easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
};



document.addEventListener("DOMContentLoaded", function() {

  var lazyLoadInstance = new LazyLoad({
  startEvent: 'DOMContentLoaded',
  
});

  $('.section-title').attr("data-aos", "fade-up");
  $('.learn-item').attr("data-aos", "fade-up");
  $('.audience__item').attr("data-aos", "zoom-out-up");

    
  
  // video play
  let videoWrap = $('.video-wrap'),
  videoContainer = videoWrap.find('.video-container');
  let videoClose = videoWrap.find('#video-close');
  
 

  $('.play-btn').click(function(e) {
    e.preventDefault();
    $('body').css('overflow', 'hidden');
    videoWrap.fadeIn(200);
    videoContainer.html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/vs5k_wLFaH4?autoplay=1" frameborder="0" allow="accelerometer" allow="autoplay"; autoplay;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
    // $('.ytp-icon').delay(1000).trigger('click');
    videoClose.click(function() {
      videoContainer.html('');
      videoWrap.fadeOut(200);
      $('body').css('overflow', '');
    });
  });

 

	$('.select-occupation').niceSelect();

  //paralax mouse
     
        if($('.program__paralax').css('display') == 'block' && window.innerWidth > 1200) {
        var scene = document.querySelector('.program__paralax');
        var parallaxInstance = new Parallax(scene, {
          // relativeInput: true
         });
        }
     



  // Change date in hero
  let dateOnPage = $('.date__bold'),
  monthOnPage = $('.date__month');
  let now = new Date();
  let userDay = now.getDate();
  let nextDay = new Date(now);
  nextDay.setDate(nextDay.getDate() + 1);
  let userHours = now.getHours();

    function getMonth(date) {
      let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
      return months[date.getMonth()];
    }

  $(monthOnPage).text(getMonth(now));
  
  if (userHours >= 19) {
    $(dateOnPage).text(nextDay.getDate());
    $(monthOnPage).text(getMonth(nextDay));
  } else {
    $(dateOnPage).text(userDay);
  }

  // form__author hover
  let formAuthor = $('.author__info');
  let desc = $('.author__decs');
  let formAuthorWidth = 1200;

  if (window.innerWidth >= formAuthorWidth) {
      formAuthor.on('mouseleave', function() {
        desc.fadeOut(200);   
      });
   
      formAuthor.on('mouseenter', function() {
        desc.fadeIn(200);
      });
    } else {
      formAuthor.unbind();
    }

  $(window).resize(function() {
    if (window.innerWidth >= formAuthorWidth) {
      formAuthor.on('mouseleave', function() {
        desc.fadeOut(200);   
      });
   
      formAuthor.on('mouseenter', function() {
        desc.fadeIn(200);
      });
    } if (window.innerWidth < formAuthorWidth) {
      formAuthor.unbind();
    }
  });



  
});
