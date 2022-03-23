const scrollHandler = {
  lock() {
    if($('html').css('overflow', '')) {
      $('html').css('overflow', 'hidden');
      setTimeout(function() {
        $('html').css('overflow', 'hidden');
      },1);
    }
  },
  unlock() {
    if ( $('html').css('overflow', 'hidden')) {
      $('html').css('overflow', 'unset');
    }
  }
}

export default scrollHandler;