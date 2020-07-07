document.addEventListener("DOMContentLoaded", function() {

  $('.section-title').attr("data-aos", "fade-up");
  $('.learn-item').attr("data-aos", "fade-up");
  $('.audience__item').attr("data-aos", "zoom-out-up");

    AOS.init({
      offset: 100,
      duration: 500,
      // easing: 'ease-in-sine',
      delay: 50,
      once: true
    });
  
  // video play
  let videoWrap = $('.video-wrap'),
  videoContainer = videoWrap.find('.video-container');
  let videoClose = videoWrap.find('.video-close');
  
 

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
    
      if($('.program__paralax').length && $(window).innerWidth > 767) {
      var scene = document.querySelector('.program__paralax');
  var parallaxInstance = new Parallax(scene, {
    // relativeInput: true
  });
  var scene2 = document.querySelector('.audience__mockup');
  var parallaxInstance2 = new Parallax(scene2);
  }
    
 
 
  
    
    
  


  

  // animate css
  // function callbackFunc(entries, observer)
  // {
  //   entries.forEach(entry => {
  //     var txt = entry.target.id + " visibility: " + entry.isIntersecting;
      
  //     document.getElementById('log').appendChild(document.createTextNode(txt));
  //     document.getElementById('log').appendChild(document.createElement("br"));
  //   });
  // }

  // let options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.3
  //   };

  // let observer = new IntersectionObserver(callbackFunc, options);

  // observer.observe(document.querySelector('firstBlock'));
  // observer.observe(document.getElementById('secondBlock'));



  // Change date in hero
  let dateOnPage = $('.date__bold'),
  monthOnPage = $('.date__month');
  let now = new Date();
  let userDay = now.getDate();
  let userHours = now.getHours();

    function getMonth(date) {
      let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
      return months[date.getMonth()];
    }

  $(monthOnPage).text(getMonth(now));
  $(dateOnPage).text(userDay);
  if (userHours >= 19) {
    (dateOnPage).text(userDay+1);
  }

  // form__author hover
  let formAuthor = $('.author__info');
  let desc = $('.author__decs');

  formAuthor.on('mouseleave', function() {
    desc.fadeOut(200);   
  });
   
  formAuthor.on('mouseenter', function() {
    desc.fadeIn(200);
  });

  
  
});
