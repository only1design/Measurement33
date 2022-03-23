function getFooterHeight() {
  let footerHeight = $('.footer').css('height');
  $(window).on('resize', function() {
    footerHeight = $('.footer').css('height');
  });
  return footerHeight;
}

export default getFooterHeight;