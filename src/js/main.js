$(window).on('load', function() {
  "use strict";

  //page loading
  if ($('.page-loading').length) {
    let page_loading = $('.page-loading');
    page_loading.animate({opacity: 0},400, function(){
      page_loading.css({display: 'none', opacity: 1});
    });
    scroll_unlock();
  }

  //global functions
  let header_height = $('header.header .header__bar').css('height');
  $(window).on('resize', function() {
    header_height = $('header.header .header__bar').css('height');
  });

  let footer_height = $('.footer').css('height');
  $(window).on('resize', function() {
    footer_height = $('.footer').css('height');
  });

  function scroll_lock() {
    if($('html').css('overflow', '')) {
      $('html').css('overflow', 'hidden');
      setTimeout(function() {
        $('html').css('overflow', 'hidden');
      },1);
    }
  }
  function scroll_unlock() {
    if ( $('html').css('overflow', 'hidden')) {
      $('html').css('overflow', 'unset');
    }
  }

  //errors close
  if ($('.errors .errors__close').length) {
    $('.errors .errors__close').on('click', function() {
      $('.errors').slideUp(200);
    })
  }

  //header placeholder
  if($('.header-placeholder').length) {  
    function header_placeholder() {
      $('.header-placeholder').css('height', header_height );
    }

    header_placeholder();
    $(window).on('resize', function() {
      header_placeholder();
    });
  }

  //footer placeholder
  if ($('.footer-placeholder').length) {
    function footer_placeholder() {
      $('.footer-placeholder').css('height', footer_height );
    }

    footer_placeholder();
    $(window).on('resize', function() {
      footer_placeholder();
    });
  }

  //account menu
  if ($('#account-modal').length){
    var account_menu = $("#account-modal"),
    account_menu_btn = $('.toolbar .toolbar__item .i-user'),
    account_menu_side_btn = $("#side-menu-account"),
    account_menu_close_btn = $('.header .account_menu .close'),
    account_menu_animation_show_class = 'popup-show-animation',
    account_menu_animation_hide_class = 'popup-hide-animation',
    account_menu_hide_class = 'hidden';

    function account_menu_show() {
      account_menu.addClass(account_menu_animation_show_class);
      account_menu.removeClass(account_menu_animation_hide_class);
      account_menu.removeClass('hidden')
      account_menu_btn.css('color', '#ff7200');

      if (window.innerWidth <= 1024) {
        scroll_lock();
      }
    }
    function account_menu_hide() {
      account_menu.addClass(account_menu_animation_hide_class);
      account_menu.removeClass(account_menu_animation_show_class);
      setTimeout(function(){
        account_menu.addClass('hidden')
      }, 500);
      account_menu_btn.css('color', '');

      scroll_unlock();
    }

    account_menu_btn.on('click', function() {
      if (account_menu.hasClass(account_menu_hide_class)) {
        account_menu_show();
      } else {
        account_menu_hide();
      }
    });

    account_menu_side_btn.on('click', function() {
      if (account_menu.hasClass(account_menu_hide_class)) {
        account_menu_show();
      } else {
        account_menu_hide();
      }
    });

    account_menu_close_btn.on('click', function() {
      account_menu_hide();
    });

    $(document).on('click', function (e) {
      if (!account_menu.hasClass('hidden')) {

        if (account_menu.has(e.target).length === 0 &
          account_menu.filter(e.target).length === 0 &
          account_menu_btn.has(e.target).length === 0 &
          account_menu_btn.filter(e.target).length === 0 &
          account_menu_side_btn.has(e.target).length === 0 &
          account_menu_side_btn.filter(e.target).length === 0){
          account_menu_hide();
      }
    }
  });
  }

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
  //wishlist menu
  if ($('#wishlist-modal').length){
    var wishlist_menu = $("#wishlist-modal"),
    wishlist_menu_btn = $('.toolbar .toolbar__item .i-like'),
    wishlist_menu_side_btn = $("#side-menu-wishlist"),
    wishlist_menu_close_btn = $('.header .wishlist_menu .close'),
    wishlist_menu_animation_show_class = 'popup-show-animation',
    wishlist_menu_animation_hide_class = 'popup-hide-animation',
    wishlist_menu_hide_class = 'hidden',
    wishlist_menu_counter = $('#wishlist-counter');


    function wishlist_menu_show() {
      wishlist_menu.addClass(wishlist_menu_animation_show_class);
      wishlist_menu.removeClass(wishlist_menu_animation_hide_class);
      wishlist_menu.removeClass('hidden')
      wishlist_menu_btn.css('color', '#ff7200');
      wishlist_menu_counter.css('color', '#ff7200');
      setTimeout(function(){
        if ($('.wishlist-box .product-item').length>1) {
          $(".wishlist-box").getNiceScroll().resize();
        }
      },200);

      if (window.innerWidth <= 1024) {
        scroll_lock();
      }
    }
    function wishlist_menu_hide() {
      wishlist_menu.addClass(wishlist_menu_animation_hide_class);
      wishlist_menu.removeClass(wishlist_menu_animation_show_class);
      setTimeout(function(){
        wishlist_menu.addClass('hidden')
      }, 500);
      wishlist_menu_btn.css('color', '');
      wishlist_menu_counter.css('color', '');

      scroll_unlock();
    }

    wishlist_menu_btn.on('click', function() {
      if (wishlist_menu.hasClass(wishlist_menu_hide_class)) {
        wishlist_menu_show();
      } else {
        wishlist_menu_hide();
      }
    });

    wishlist_menu_side_btn.on('click', function() {
      if (wishlist_menu.hasClass(wishlist_menu_hide_class)) {
        wishlist_menu_show();
      } else {
        wishlist_menu_hide();
      }
    });

    wishlist_menu_close_btn.on('click', function() {
      wishlist_menu_hide();
    });

    $(document).on('click', function (e) {
      if (!wishlist_menu.hasClass('hidden')) {

        if (wishlist_menu.has(e.target).length === 0 &
          wishlist_menu.filter(e.target).length === 0 &
          wishlist_menu_btn.has(e.target).length === 0 &
          wishlist_menu_btn.filter(e.target).length === 0 &
          wishlist_menu_side_btn.has(e.target).length === 0 &
          wishlist_menu_side_btn.filter(e.target).length === 0){
          wishlist_menu_hide();
      }
    }
  });
  }

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
  //cart menu
  if ($('#cart-modal').length){
    var cart_menu = $("#cart-modal"),
    cart_menu_btn = $('.toolbar .toolbar__item .i-bag'),
    cart_menu_side_btn = $(".header .side_menu .my_cart"),
    cart_menu_close_btn = $('.header .cart_menu .close'),
    cart_menu_animation_show_class = 'popup-show-animation',
    cart_menu_animation_hide_class = 'popup-hide-animation',
    cart_menu_hide_class = 'hidden',
    cart_menu_counter = $('#cart-counter');


    function cart_menu_show() {
      cart_menu.addClass(cart_menu_animation_show_class);
      cart_menu.removeClass(cart_menu_animation_hide_class);
      cart_menu.removeClass('hidden')
      cart_menu_btn.css('color', '#ff7200');
      cart_menu_counter.css('color', '#ff7200');
      setTimeout(function(){
        if ($('.cart-box .product-item-alt').length > 2) {
          $(".cart-box").getNiceScroll().resize();
        }
      },200);

      if (window.innerWidth <= 1024) {
        scroll_lock();
      }
    }
    function cart_menu_hide() {
      cart_menu.addClass(cart_menu_animation_hide_class);
      cart_menu.removeClass(cart_menu_animation_show_class);
      setTimeout(function(){
        cart_menu.addClass('hidden')
      }, 500);
      cart_menu_btn.css('color', '');
      cart_menu_counter.css('color', '');

      scroll_unlock();
    }

    cart_menu_btn.on('click', function() {
      if (cart_menu.hasClass(cart_menu_hide_class)) {
        cart_menu_show();
      } else {
        cart_menu_hide();
      }
    });

    cart_menu_side_btn.on('click', function() {
      if (cart_menu.hasClass(cart_menu_hide_class)) {
        cart_menu_show();
      } else {
        cart_menu_hide();
      }
    });

    cart_menu_close_btn.on('click', function() {
      cart_menu_hide();
    });

    $(document).on('click', function (e) {
      if (!cart_menu.hasClass('hidden')) {
        if (cart_menu.has(e.target).length === 0 &
          cart_menu.filter(e.target).length === 0 &
          cart_menu_btn.has(e.target).length === 0 &
          cart_menu_btn.filter(e.target).length === 0 &
          cart_menu_side_btn.has(e.target).length === 0 &
          cart_menu_side_btn.filter(e.target).length === 0){
          cart_menu_hide();
      }
    }
  });
  }

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
      scroll_lock();
    }
    function subscribe_window_hide() {
      subscribe_window.addClass('hidden');
      scroll_unlock();
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
        scroll_lock();
      }
    };
    function side_menu_hide() {
      scroll_unlock();

      side_menu.addClass(side_menu_hidden);
      side_menu.removeClass(side_menu_showed);
      side_menu_bg.removeClass(side_menu_bg_animate);
      
      side_menu_burger.css('color','');

      scroll_unlock();
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
      side_menu_h = (window_height - parseInt(header_height));

      side_menu.css('height', side_menu_h + 'px');
    }

    let window_height = window.innerHeight,
    side_menu_h = (window_height - parseInt(header_height));

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
      let filter_h = window.innerHeight - parseInt(header_height) + 'px';
      let filter_cat_h = window.innerHeight - parseInt(header_height) - 74 + 'px';
      filter.css('height', filter_h);
      filter_cat_container.css('height', filter_cat_h);
    }
    function filter_show() {
      filter.addClass(filter_opened);
      filter.removeClass(filter_closed);

      if(window.innerWidth <= 1024) {
        filter.css({'top': header_height});
        scroll_lock();
      }
    }
    function filter_close() {
      filter.addClass(filter_closed);
      filter.removeClass(filter_opened);
      scroll_unlock();
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
      scroll_lock();
    }
    function si_ch_hide() {
      si_ch_window.animate({'opacity': '0'}, 200, function(){
        si_ch_window.addClass('hidden');  
      });
      scroll_unlock();
    }
    function si_ch_height() {
      let si_ch_h = window.innerHeight - parseInt(header_height) + 'px';
      si_ch_window.css('height', si_ch_h);
      si_ch_window.css('top', header_height);
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



