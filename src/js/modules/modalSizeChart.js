import scrollHandler from "./scrollHandler.js";
import getHeaderHeight from "./getHeaderHeight.js";

function modalSizeChart() {
  if ($('.sp-options__size-chart').length) {
    const modal = $('.sp-options__size-chart'),
      closeBtn = $('.sp-options__size-chart-close'),
      btn = $('.sp-options__info--size-chart'),
      hideClass = 'hidden';

    function modalShow() {
      modal.removeClass(hideClass);
      modal.animate({'opacity': '1'}, 200);
      scrollHandler.lock();
    }

    function modalHide() {
      modal.animate({'opacity': '0'},
      200, function(){
        modal.addClass(hideClass);  
      });
      scrollHandler.unlock();
    }

    function modalSetHeight() {
      let modalHeight = window.innerHeight - parseInt(getHeaderHeight()) + 'px';
      modal.css('height', modalHeight);
      modal.css('top', getHeaderHeight());
    }

    modalSetHeight();

    $(window).on('resize', function(){
      modalSetHeight();
    });

    btn.on('click', function(){
      if(modal.hasClass(hideClass)) {
        modalShow();
      }
    });
    
    closeBtn.on('click', function(){
      if(!modal.hasClass(hideClass)) {
        modalHide();
      }
    });
  }
}

export default modalSizeChart;