import scrollHandler from './scrollHandler.js';

function modals() {
  const bindModal = (modalSelector, btnSelector, sideBtnSelector = false, boxSelector = false, boxItemsSelector = false, boxItemsForResize = 0, showAnimationClass = 'popup-show-animation', hideAnimationClass = 'popup-hide-animation', hideModalClass = 'hidden', color = '#ff7200', modalScreenClass = false) => {
    if ($(modalSelector).length){
      const modal = $(modalSelector),
        btn = $(btnSelector);
      const sideBtn = $(sideBtnSelector).length ? $(sideBtnSelector) : false;
      const screen = $(modalScreenClass).length ? $(modalScreenClass) : false;

      const showModal = () => {
        if (showAnimationClass) {
          modal.addClass(showAnimationClass);
          modal.removeClass(hideAnimationClass);
        }
        modal.removeClass(hideModalClass);

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

      const hideModal = () => {
        if (hideAnimationClass) {
          modal.addClass(hideAnimationClass);
          modal.removeClass(showAnimationClass);

          setTimeout(function(){
            modal.addClass(hideModalClass)
          }, 500);
        } else {
          modal.addClass(hideModalClass)
        }

        btn.css('color', '');
        scrollHandler.unlock();
      }

      const modalHandler = () => {
        if (modal.hasClass(hideModalClass)) {
          showModal();
        } else {
          hideModal();
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
        if (!modal.hasClass(hideModalClass)) {
          
          if (sideBtn) {
            if (modal.has(e.target).length === 0 &
            modal.filter(e.target).length === 0 &
            btn.has(e.target).length === 0 &
            btn.filter(e.target).length === 0 &
            sideBtn.has(e.target).length === 0 &
            sideBtn.filter(e.target).length === 0){
              hideModal();
            }
          } else {
            if (screen) {
              if (screen.has(e.target).length === 0 &
              screen.filter(e.target).length === 0 &
              btn.has(e.target).length === 0 &
              btn.filter(e.target).length === 0){
                hideModal();
              }
            } else if (modal.has(e.target).length === 0 &
            modal.filter(e.target).length === 0 &
            btn.has(e.target).length === 0 &
            btn.filter(e.target).length === 0){
              hideModal();
            }
          }
          
        }
      });

    }
  }

  bindModal('#account-modal', '.toolbar .toolbar__item--account', '#side-menu-account');
  bindModal('#wishlist-modal', '.toolbar__item--wishlist', '#side-menu-wishlist', '.wishlist-box', '.wishlist-box .product-item', 1);
  bindModal('#cart-modal', '.toolbar .toolbar__item--cart', false, '.cart-box', '.cart-box .product-item-alt', 2);
  bindModal('.subscribe-window', '.side-menu__subscribe', false, false, false, false, '', '', 'hidden', '', '.subscribe-window__screen')
}

export default modals;