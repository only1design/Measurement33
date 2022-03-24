import pagePreloader from './modules/pagePreloader.js';
import errorWindow from './modules/errorWindow.js';
import headerPlaceholder from './modules/headerPlaceholder.js';
import footerPlaceholder from './modules/footerPlaceholder.js';
import modals from './modules/modals.js';
import bindNicescroll from './modules/bindNicescroll.js';
import bindSlider from './modules/bindSlider.js';
import sideMenu from './modules/sideMenu.js';
import catalogFilter from './modules/catalogFilter.js';
import formValidators from './modules/formValidators.js';
import modalSizeChart from './modules/modalSizeChart.js';
import simpleProductTabs from './modules/simpleProductTabs.js';
import settingsTabs from './modules/settingsTabs.js';

$(window).on('load', function() {
  'use strict';

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
  settingsTabs();
});