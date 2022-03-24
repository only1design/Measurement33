function errorWindow() {

  if ($('.errors .errors__close').length) {
    $('.errors .errors__close').on('click', function() {
      $('.errors').slideUp(200);
    })
  }
  
}

export default errorWindow;