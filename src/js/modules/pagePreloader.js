import scrollHandler from './scrollHandler.js';

function pagePreloader() {
  if ($('.page-loading').length) {
    let page_loading = $('.page-loading');

    page_loading.animate({opacity: 0},400, function(){
      page_loading.css({display: 'none', opacity: 1});
    });
    
    scrollHandler.unlock();
  }
}
export default pagePreloader;