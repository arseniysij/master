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


// PopupExit

  const popupWrap = $('#popup-wrap'),
  popupClose = $('#popup__close');
  popupClose.on('click', function() {
    popupWrap.fadeOut(300);
  });

  function ShowExitPopup() {
    if (
    event.clientY < 50 &&
    event.relatedTarget == null &&
    event.target.nodeName.toLowerCase() !== 'select' &&
    event.target.nodeName.toLowerCase() !== 'input') {
      popupWrap.fadeIn(300);
      $(document).unbind();
    }
  }
  // $(document).on( 'mouseleave' , ShowExitPopup);



// Redirect Timer
$('form.thanks-form').on('submit', function(e){
  e.preventDefault();
  $('.sell__redirect').fadeIn(300).css('display', 'flex');
  setInterval(redirectCountdowm, 1000);
});


// Timer


if (window.location.pathname=='/thanks.html') {
  const timerBlock = $('.timer__itis'),
  timerMinutes = $(timerBlock).find('.timer__minutes'),
  timerSeconds = $(timerBlock).find('.timer__seconds'),
  startingMinutes = 3;
  let time = startingMinutes * 60 ;
  let timerInterval = setInterval(updateCountdown, 1000);
  console.log("ранится");

  function updateCountdown() {
  if (localStorage.getItem('time') !== null && localStorage.getItem('time') >= '0')  {
    if(localStorage.getItem('time') == '0') {
      clearInterval(timerInterval);
      $('.thanks__form-sect').remove();
      $('.after-form').fadeIn(400);
    }
    time = localStorage.getItem('time');
    let minutes = Math.floor(time / 60),
  seconds = time % 60;
  if (minutes < 10) {
    $(timerMinutes).html("0" + minutes);
  } else {
  $(timerMinutes).html(minutes);
  }
  if (seconds < 10) {
    $(timerSeconds).html("0" + seconds);
  } else {
  $(timerSeconds).html(seconds);
  }
  time--;
  time = time < 0 ? 0 : time; 
  localStorage.setItem('time', time);
  if (time < 30) {
    timerBlock.find('span').css('color', 'red');
  }
    } else if (localStorage.getItem('time') == null) {
      localStorage.setItem('time', time);
    } 
}
}
 



// redirect Timer
const redirectTimer = $('.redirect__timer'),
redirectSeconds = 4;
let redirectTime = redirectSeconds;

// setInterval(redirectCountdowm, 1000); вызвать с появлением окна
function redirectCountdowm() {
  redirectTime--;
  redirectTime = redirectTime < 0 ? 0 : redirectTime;
  redirectTimer.html(redirectTime);
  console.log(redirectTime);
  if (redirectTime == 0) {
    window.location.replace("https://youtu.be/dQw4w9WgXcQ?t=42");
  }
}



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
  let thanksVideoLink = $('.video__play-link');
 

  $('.play-btn').add(thanksVideoLink).click(function(e) {
    e.preventDefault();
    $('body').css('overflow', 'hidden');
    videoWrap.fadeIn(200);
    videoContainer.html($(videoWrap).attr("data-frame"));
    // $('.ytp-icon').delay(1000).trigger('click');
    videoClose.click(function() {
      videoContainer.html('');
      videoWrap.fadeOut(200);
      $('body').css('overflow', '');
    });
  });

//  thanks video
  


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
  // let desc = $('.author__decs');  //включить чтобы объект скрывался
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
