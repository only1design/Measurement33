import getFooterHeight from './getFooterHeight.js'

function footerPlaceholder() {
  if ($('.footer-placeholder').length) {
    $('.footer-placeholder').css('height', getFooterHeight );

    $(window).on('resize', function() {
      $('.footer-placeholder').css('height', getFooterHeight );
    });
  }
}

export default footerPlaceholder;