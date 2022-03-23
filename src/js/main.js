import scrollHandler from "./modules/scrollHandler.js";
import pagePreloader from "./modules/pagePreloader.js";
import getHeaderHeight from "./modules/getHeaderHeight.js";
import getFooterHeight from "./modules/getFooterHeight.js";
import errorWindow from "./modules/errorWindow.js";
import headerPlaceholder from "./modules/headerPlaceholder.js";
import footerPlaceholder from "./modules/footerPlaceholder.js";
import modals from "./modules/modals.js";
import bindNicescroll from "./modules/bindNicescroll.js";
import bindSlider from "./modules/bindSlider.js";
import sideMenu from "./modules/sideMenu.js";

$(window).on('load', function() {
  "use strict";

  pagePreloader();
  errorWindow();
  headerPlaceholder();
  footerPlaceholder();
  modals();
  bindNicescroll();
  bindSlider();
  sideMenu();
  

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



