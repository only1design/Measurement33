import scrollHandler from "./modules/scrollHandler.js";
import pagePreloader from "./modules/pagePreloader.js";
import getHeaderHeight from "./modules/getHeaderHeight.js";
import getFooterHeight from "./modules/getFooterHeight.js"; //TODO clear modules
import errorWindow from "./modules/errorWindow.js";
import headerPlaceholder from "./modules/headerPlaceholder.js";
import footerPlaceholder from "./modules/footerPlaceholder.js";
import modals from "./modules/modals.js";
import bindNicescroll from "./modules/bindNicescroll.js";
import bindSlider from "./modules/bindSlider.js";
import sideMenu from "./modules/sideMenu.js";
import catalogFilter from "./modules/catalogFilter.js";
import formValidators from "./modules/formValidators.js";
import modalSizeChart from "./modules/modalSizeChart.js";

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
  catalogFilter();
  formValidators();
  modalSizeChart();

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