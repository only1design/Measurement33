function getHeaderHeight() {
  let headerHeight = $('header.header .header__bar').css('height');
  $(window).on('resize', function() {
    headerHeight = $('header.header .header__bar').css('height');
  });
  return headerHeight
}

export default getHeaderHeight;