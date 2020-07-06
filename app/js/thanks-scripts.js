document.addEventListener("DOMContentLoaded", function() {

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
  let formAuthor = $('.form__author');
  let desc = $('.author__decs');

  formAuthor.on('mouseleave', function() {
    desc.fadeOut(200);   
  });
   
  formAuthor.on('mouseenter', function() {
    desc.fadeIn(200);
  });


});