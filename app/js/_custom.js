document.addEventListener("DOMContentLoaded", function() {

	  Modernizr.on('webp', function (result) {
    if (result) {
      // supported
    } else {
      // not-supported
    }
  });

	$('#select-occupation').niceSelect();

});
