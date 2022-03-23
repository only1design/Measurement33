import getHeaderHeight from "./getHeaderHeight.js";

function headerPlaceholder() {
  if($('.header-placeholder').length) {  

    $('.header-placeholder').css('height', getHeaderHeight() );
    $(window).on('resize', function() {
      $('.header-placeholder').css('height', getHeaderHeight() );
    });
    
  }
}

export default headerPlaceholder;