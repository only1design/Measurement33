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
import simpleProductTabs from "./modules/simpleProductTabs.js";

$(window).on('load', function() {
  "use strict";

  pagePreloader();
  errorWindow();
  headerPlaceholder();
  footerPlaceholder();
  modals();
  modalSizeChart();
  bindNicescroll();
  bindSlider();
  sideMenu();
  catalogFilter();
  formValidators();
  simpleProductTabs();

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