import scrollHandler from "./modules/scrollHandler.js";
import pagePreloader from "./modules/pagePreloader.js";
import getHeaderHeight from "./modules/getHeaderHeight.js";
import getFooterHeight from "./modules/getFooterHeight.js";
import errorWindow from "./modules/errorWindow.js";
import headerPlaceholder from "./modules/headerPlaceholder.js";
import footerPlaceholder from "./modules/footerPlaceholder.js";
import modals from "./modules/modals.js";

$(window).on('load', function() {
  "use strict";

  pagePreloader();
  errorWindow();
  headerPlaceholder();
  footerPlaceholder();
  modals();

  //wishlist nicescroll
  $(".wishlist-box").niceScroll({
    cursorcolor:"#ff8e32",
    cursorwidth:"6px",
    autohidemode:'leave',
    cursoropacitymin: 0.3,
    horizrailenabled: false,
    spacebarenabled: false,
    touchbehavior: true
  });
  
  //cart nicescroll
  $(".cart-box").niceScroll({
    cursorcolor:"#ff8e32",
    cursorwidth:"6px",
    autohidemode:'leave',
    cursoropacitymin: 0.3,
    horizrailenabled: false,
    spacebarenabled: false,
    touchbehavior: true
  }); 

  //main products slider
  if ($('.products-slider--main-page').length) {
    let prev_arrow = document.querySelector(".products-slider--main-page .products-slider__arrow-left"),
    next_arrow = document.querySelector(".products-slider--main-page .products-slider__arrow-right");
    prev_arrow.remove();
    next_arrow.remove();

    $('.products-slider--main-page').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: prev_arrow.outerHTML,
      nextArrow: next_arrow.outerHTML,
      draggable:false,
      speed:400,
      touchThreshold:10,
      waitForAnimate:false,
      dots: true,
      appendDots: '.products-slider-dots-main-page',
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }]
    });

    let slider_mobile = false;
    if (window.innerWidth < 1024) {
      if (!slider_mobile) {
        for (let c=1;c<=6;c++) { 
          $('.products-slider--main-page').slick('slickRemove', 12-c);
        }
        slider_mobile = true;
      }
    }
    
    $(window).on('resize', function() {

      if (window.innerWidth < 1024) {
        if (!slider_mobile) {
          for (let c=1;c<=6;c++) { 
            $('.products-slider--main-page').slick('slickRemove', 12-c);
          }
          slider_mobile = true;
        }
      }
      
    })
  }
  //subscribe window
  if ($('.subscribe-window').length) {
    let subscribe_window = $('.subscribe-window');

    function subscribe_window_show() {
      subscribe_window.removeClass('hidden');
      scrollHandler.lock();
    }
    function subscribe_window_hide() {
      subscribe_window.addClass('hidden');
      scrollHandler.unlock();
    }

    $('.side-menu__subscribe').on('click', function() {
      subscribe_window_show();
    })

    $(document).on('click', function (e) {
      if (!subscribe_window.hasClass('hidden')) {

        if ($('.subscribe-window__screen').filter(e.target).length === 0 &
          $('.subscribe-window__screen').has(e.target).length === 0 &
          $('.side-menu__subscribe').filter(e.target).length === 0 &
          $('.side-menu__subscribe').has(e.target).length === 0) {
          subscribe_window_hide();
      }

    }
  });
  }

  //side menu
  if ($('.side-menu').length) {

    let side_menu = $('.side-menu'),
    side_menu_showed = 'side-menu--showed',
    side_menu_hidden = 'side-menu--hidden',
    side_menu_burger = $('.header__burger-btn'),
    side_menu_bg = $('.side-menu__bg'),
    side_menu_bg_animate = 'side-menu__bg-animate';

    function side_menu_show() {
      side_menu.addClass(side_menu_showed);
      side_menu_bg.addClass(side_menu_bg_animate);
      side_menu.removeClass(side_menu_hidden);

      side_menu_burger.css('color','#ff7200');
      setTimeout(function() {
        $(".side-menu__content-box").getNiceScroll().resize();
      },200);

      if (window.innerWidth <= 1024) {
        scrollHandler.lock();
      }
    };
    function side_menu_hide() {
      scrollHandler.unlock();

      side_menu.addClass(side_menu_hidden);
      side_menu.removeClass(side_menu_showed);
      side_menu_bg.removeClass(side_menu_bg_animate);
      
      side_menu_burger.css('color','');

      scrollHandler.unlock();
    };



    $(".side-menu__content-box").niceScroll({
      cursorcolor:"#ff8e32",
      cursorwidth:"6px",
      autohidemode:'leave',
      cursoropacitymin: 0.3,
      horizrailenabled: false,
      spacebarenabled: false,
      touchbehavior: true
    }); 

    side_menu_burger.on('click', function() {

      if (side_menu.hasClass(side_menu_hidden)) {
        side_menu_show();
      } else {
        side_menu_hide();
      }
    });

    $('.side-menu__nav-item').on('click', function() {
      side_menu_hide();
    });

    $('.side-menu__subscribe').on('click', function() {
      side_menu_hide();
    });

    $(document).on('click', function (e) {

      if (side_menu.hasClass(side_menu_showed)) {

        if ($('.side-menu__block').filter(e.target).length === 0 &
          $('.side-menu__block').has(e.target).length === 0 &
          $('.header__burger-btn').filter(e.target).length === 0 &
          $('.header__burger-btn').has(e.target).length === 0) {
          side_menu_hide();
      }
    }
  });

    function side_menu_height() {
      window_height = window.innerHeight,
      side_menu_h = (window_height - parseInt(getHeaderHeight()));

      side_menu.css('height', side_menu_h + 'px');
    }

    let window_height = window.innerHeight,
    side_menu_h = (window_height - parseInt(getHeaderHeight()));

    side_menu.css('height', side_menu_h + 'px');

    $(window).on('resize', function() {
      side_menu_height();
    });
  }

  //catalog filter
  if ($('.catalog-filter').length) {
    let filter = $('.catalog-filter'),
    filter_opened = 'catalog-filter--opened',
    filter_closed = 'catalog-filter--closed',
    filter_btn = $('.catalog-filter-btn__btn'),
    filter_close_btn = $('.catalog-filter__close-btn'),
    filter_cat_container = $('.catalog-filter__categories-container');

    function filter_height() {
      let filter_h = window.innerHeight - parseInt(getHeaderHeight()) + 'px';
      let filter_cat_h = window.innerHeight - parseInt(getHeaderHeight()) - 74 + 'px';
      filter.css('height', filter_h);
      filter_cat_container.css('height', filter_cat_h);
    }
    function filter_show() {
      filter.addClass(filter_opened);
      filter.removeClass(filter_closed);

      if(window.innerWidth <= 1024) {
        filter.css({'top': getHeaderHeight()});
        scrollHandler.lock();
      }
    }
    function filter_close() {
      filter.addClass(filter_closed);
      filter.removeClass(filter_opened);
      scrollHandler.unlock();
    }

    filter_btn.on('click', function(){
      if (filter.hasClass(filter_closed)) {
        filter_show();
      } else {
        filter_close();
      }
    })

    filter_close_btn.on('click', function() {
      filter_close();
    })

    $(window).on('resize', function() {
      if (window.innerWidth <= 1024) {
        filter_height();
      }
    })
    if (window.innerWidth <= 1024) {
      filter_height();
    }
  }

  //simple page slider
  if ($('.sp-slider').length) {
    let sp_prev_arrow = document.querySelector(".sp-slider__arrow-btn--left"),
    sp_next_arrow = document.querySelector(".sp-slider__arrow-btn--right");
    sp_prev_arrow.remove();
    sp_next_arrow.remove();

    $('.sp-slider__slider-box').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: sp_prev_arrow.outerHTML,
      nextArrow: sp_next_arrow.outerHTML,
      draggable:false,
      speed:400,
      touchThreshold:10,
      waitForAnimate:false,
      dots: true,
      appendDots: '.sp-slider__dots-box',
      fade: true
    });

    let slider_mobile = false;
    if (window.innerWidth < 1024) {
      if (!slider_mobile) {
        for (let c=1;c<=6;c++) { 
          $('.products-slider--main-page').slick('slickRemove', 12-c);
        }
        slider_mobile = true;
      }
    }

    $(window).on('resize', function() {

      if (window.innerWidth < 1024) {
        if (!slider_mobile) {
          for (let c=1;c<=6;c++) { 
            $('.products-slider--main-page').slick('slickRemove', 12-c);
          }
          slider_mobile = true;
        }
      }

    })
  }

  //simple product form validation
  if ($(".sp-options form").length) {
    let add_to_cart_btn = $('.sp-options__add-btn'),
    checkout_btn = $('.sp-options__checkout-btn');

    $(".sp-options form").validate({
      submitHandler: function() {
        add_to_cart_btn.animate({
          'opacity': '0'},
          200, function() {
            add_to_cart_btn.addClass('hidden');
            checkout_btn.removeClass('hidden').css('opacity','0').animate({'opacity':'1'}, 200);
            if ($('.sp-options__invalid').length) {
              $('.sp-options__invalid').remove();
            }
          });
      },
      invalidHandler: function() {
        if (!$('.sp-options__invalid').length) {
          $('.sp-options__bottom-btn-box').before('<span class="sp-options__invalid">Select color and size</span>');
        }
      },
      showErrors: function(){}
    });
  }

  //simple product size chart modal window
  if ($('.sp-options__size-chart').length) {
    let si_ch_window = $('.sp-options__size-chart'),
    si_ch_close_btn = $('.sp-options__size-chart-close'),
    si_ch_btn = $('.sp-options__info--size-chart');

    function si_ch_show() {
      si_ch_window.removeClass('hidden');
      si_ch_window.animate({'opacity': '1'}, 200);
      scrollHandler.lock();
    }
    function si_ch_hide() {
      si_ch_window.animate({'opacity': '0'}, 200, function(){
        si_ch_window.addClass('hidden');  
      });
      scrollHandler.unlock();
    }
    function si_ch_height() {
      let si_ch_h = window.innerHeight - parseInt(getHeaderHeight()) + 'px';
      si_ch_window.css('height', si_ch_h);
      si_ch_window.css('top', getHeaderHeight());
    }

    si_ch_height();

    $(window).on('resize', function(){
      si_ch_height();
    });

    si_ch_btn.on('click', function(){

      if(si_ch_window.hasClass('hidden')) {
        si_ch_show();
      }
    });
    si_ch_close_btn.on('click', function(){
      if(!si_ch_window.hasClass('hidden')) {
        si_ch_hide();
      }
    });
  }

  //simple product description
  if($('.sp-desc').length) {
    let desc_about_btn = $('.sp-desc__item--about'),
    desc_return_btn = $('.sp-desc__item--return'),
    desc_about_content = $('.sp-desc__desc--about'),
    desc_return_content = $('.sp-desc__desc--return'),
    desc_btn_active = 'sp-desc__item--active',
    desc_btn = $('.sp-desc__item'),
    desc_content = $('.sp-desc__desc');

    desc_about_btn.on('click', function(){
      if (!desc_about_btn.hasClass(desc_btn_active)) {
        desc_btn.removeClass(desc_btn_active);
        desc_about_btn.addClass(desc_btn_active);

        desc_content.addClass('hidden');
        desc_about_content.removeClass('hidden');
      }
    });

    desc_return_btn.on('click', function(){
      if (!desc_return_btn.hasClass(desc_btn_active)) {
        desc_btn.removeClass(desc_btn_active);
        desc_return_btn.addClass(desc_btn_active);

        desc_content.addClass('hidden');
        desc_return_content.removeClass('hidden');
      }
    });
  }
  //checkout step 1 validate
  if ($("#checkout-step-1").length) {
    $("#checkout-step-1").validate({
      highlight: function(element, errorClass) {
        $(element).addClass('checkout-main-box__field-input--invalid');

        $(element).on('click', function() {
          $(element).removeClass('checkout-main-box__field-input--invalid');
        });
      },
      errorPlacement: function() {
        return false;
      }
    });
  }

  //checkout step 2 validate
  if ($("#checkout-step-2").length) {
    $("#checkout-step-2").validate({
      highlight: function(element, errorClass) {
        $(element).addClass('checkout-main-box__field-input--invalid');

        $(element).on('click', function() {
          $(element).removeClass('checkout-main-box__field-input--invalid');
        });
      },
      errorPlacement: function() {
        return false;
      }
    });
  }

  //settings sections
  if ($('.settings__section').length) {
    function set_section_open(s_id) {
      $('.settings__section-bottom').not('#'+ s_id +' .settings__section-bottom').slideUp();
      $('.settings__section-top').not('#'+ s_id +' .settings__section-top').css('color', '');
      $('.settings__section-top .settings__section-arrow').not('#'+ s_id +' .settings__section-top .settings__section-arrow').css('transform', 'scale(1,1)');

      $('#'+ s_id +' .settings__section-bottom').slideDown();
      $('#'+ s_id +' .settings__section-top').css('color', '#ff7200');
      $('#'+ s_id +' .settings__section-top .settings__section-arrow').css('transform', 'scale(1,-1)');
    }
    function set_section_close(s_id) {
      $('#'+ s_id +' .settings__section-bottom').slideUp();
      $('#'+ s_id +' .settings__section-top').css('color', '');
      $('#'+ s_id +' .settings__section-top .settings__section-arrow').css('transform', 'scale(1,1)');
    }

    $('.settings__section-top').on('click', function(e) {
      let set_section_id = ($(this).parent().attr('id'));

      if ($('#' + set_section_id +' .settings__section-bottom').css('display') == 'none') {
        set_section_open(set_section_id);
      } else {
        set_section_close(set_section_id);
      }
    })
  }

});



