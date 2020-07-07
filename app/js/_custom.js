document.addEventListener("DOMContentLoaded", function() {

  $('.section-title').attr("data-aos", "fade-up");
  $('.learn-item').attr("data-aos", "fade-up");
  $('.audience__item').attr("data-aos", "zoom-out-up");

    AOS.init({
      offset: 100,
      duration: 500,
      // easing: 'ease-in-sine',
      delay: 50,
      // once: true
    });
  

	$('.select-occupation').niceSelect();

  //paralax mouse
  if($('.program__paralax')) {
    var scene = document.querySelector('.program__paralax');
var parallaxInstance = new Parallax(scene, {
  // relativeInput: true
});

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
