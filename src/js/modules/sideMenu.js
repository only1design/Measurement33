import scrollHandler from './scrollHandler.js';
import getHeaderHeight from './getHeaderHeight.js';

function sideMenu () {
  if ($('.side-menu').length) {
    const sideMenu = $('.side-menu'),
      sideMenuContainer = $('.side-menu__block'),
      sideMenuShowedClass = 'side-menu--showed',
      sideMenuHiddenClass = 'side-menu--hidden',
      sideMenuBtn = $('.header__burger-btn'),
      sideMenuBackground = $('.side-menu__bg'),
      sideMenuBgAnimateClass = 'side-menu__bg-animate',
      sideMenuContentBox = $('.side-menu__content-box'),
      sideMenuItems = $('.side-menu__nav-item'),
      sideMenuSubscribeBtn = $('.side-menu__subscribe');
  
    const sideMenuShow = () => {
      sideMenu.addClass(sideMenuShowedClass);
      sideMenuBackground.addClass(sideMenuBgAnimateClass);
      sideMenu.removeClass(sideMenuHiddenClass);
  
      sideMenuBtn.css('color','#ff7200');

      setTimeout(function() {
        sideMenuContentBox.getNiceScroll().resize();
      }, 200);
  
      if (window.innerWidth <= 1024) {
        scrollHandler.lock();
      }
    }

    const sideMenuHide = () => {
      scrollHandler.unlock();
  
      sideMenu.addClass(sideMenuHiddenClass);
      sideMenu.removeClass(sideMenuShowedClass);
      sideMenuBackground.removeClass(sideMenuBgAnimateClass);
      
      sideMenuBtn.css('color','');
  
      scrollHandler.unlock();
    };
  
    sideMenuContentBox.niceScroll({
      cursorcolor:'#ff8e32',
      cursorwidth:'6px',
      autohidemode:'leave',
      cursoropacitymin: 0.3,
      horizrailenabled: false,
      spacebarenabled: false,
      touchbehavior: true
    }); 
  
    sideMenuBtn.on('click', function() {
      if (sideMenu.hasClass(sideMenuHiddenClass)) {
        sideMenuShow();
      } else {
        sideMenuHide();
      }
    });
  
    sideMenuItems.on('click', function() {
      sideMenuHide();
    });
  
    sideMenuSubscribeBtn.on('click', function() {
      sideMenuHide();
    });
  
    $(document).on('click', function (e) {
      if (sideMenu.hasClass(sideMenuShowedClass)) {

        if (sideMenuContainer.filter(e.target).length === 0 &
        sideMenuContainer.has(e.target).length === 0 &
        sideMenuBtn.filter(e.target).length === 0 &
        sideMenuBtn.has(e.target).length === 0) {
          sideMenuHide();
        }
      }
    });
  
    let windowHeight = window.innerHeight,
      sideMenuHeight = (windowHeight - parseInt(getHeaderHeight()));

    const sideMenuSetHeight = () => {
      windowHeight = window.innerHeight,
      sideMenuHeight = (windowHeight - parseInt(getHeaderHeight()));
  
      sideMenu.css('height', sideMenuHeight + 'px');
    }
  
    sideMenu.css('height', sideMenuHeight + 'px');
  
    $(window).on('resize', function() {
      sideMenuSetHeight();
    });
  }
}

export default sideMenu;
