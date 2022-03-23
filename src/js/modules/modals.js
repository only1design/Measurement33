import scrollHandler from "./scrollHandler.js";

function modals() {
  const bindModal = (modalSelector, btnSelector, sideBtnSelector = false, boxSelector = false, boxItemsSelector = false, boxItemsForResize = 0, showAnimationClass = 'popup-show-animation', hideAnimationClass = 'popup-hide-animation', modalHideClass = 'hidden', color = '#ff7200') => {
    if ($(modalSelector).length){
      const modal = $(modalSelector),
        btn = $(btnSelector);
      const sideBtn = $(sideBtnSelector).length ? $(sideBtnSelector) : false;

      const modalShow = () => {
        modal.addClass(showAnimationClass);
        modal.removeClass(hideAnimationClass);
        modal.removeClass(modalHideClass);

        btn.css('color', color);

        if (boxItemsForResize) {
          setTimeout(function(){
            if ($(boxItemsSelector).length > boxItemsForResize) {
              $(boxSelector).getNiceScroll().resize();
            }
          },200);
        }

        if (window.innerWidth <= 1024) {
          scrollHandler.lock();
        }
      }

      const modalHide = () => {
        modal.addClass(hideAnimationClass);
        modal.removeClass(showAnimationClass);
        setTimeout(function(){
          modal.addClass(modalHideClass)
        }, 500);

        btn.css('color', '');
        scrollHandler.unlock();
      }

      const modalHandler = () => {
        if (modal.hasClass(modalHideClass)) {
          modalShow();
        } else {
          modalHide();
        }
      }

      btn.on('click', function() {
        modalHandler();
      });

      if (sideBtn) {
        sideBtn.on('click', function() {
          modalHandler();
        })
      }

      $(document).on('click', function (e) {
        if (!modal.hasClass(modalHideClass)) {
          
          if (sideBtn) {
            if (modal.has(e.target).length === 0 &
            modal.filter(e.target).length === 0 &
            btn.has(e.target).length === 0 &
            btn.filter(e.target).length === 0 &
            sideBtn.has(e.target).length === 0 &
            sideBtn.filter(e.target).length === 0){
              modalHide();
            }
          } else {
            if (modal.has(e.target).length === 0 &
            modal.filter(e.target).length === 0 &
            btn.has(e.target).length === 0 &
            btn.filter(e.target).length === 0){
              modalHide();
            }
          }
          
        }
      });

    }
  }

  bindModal('#account-modal', '.toolbar .toolbar__item--account', '#side-menu-account');
  bindModal('#wishlist-modal', '.toolbar__item--wishlist', '#side-menu-wishlist', '.wishlist-box', '.wishlist-box .product-item', 1);
  bindModal('#cart-modal', '.toolbar .toolbar__item--cart', false, '.cart-box', '.cart-box .product-item-alt', 2);
}

export default modals;