function simpleProductTabs() {
  if($('.sp-desc').length) {
    const btnTab1 = $('.sp-desc__item--about'),
      btnTab2 = $('.sp-desc__item--return'),
      btnActiveClass = 'sp-desc__item--active',
      btnItems = $('.sp-desc__item'),
      contentTab1 = $('.sp-desc__desc--about'),
      contentTab2 = $('.sp-desc__desc--return'),
      contentItems = $('.sp-desc__desc');

    function bindTab(btn, content) {
      btn.on('click', () => {
        if (!btn.hasClass(btnActiveClass)) {
          btnItems.removeClass(btnActiveClass);
          btn.addClass(btnActiveClass);
  
          contentItems.addClass('hidden');
          content.removeClass('hidden');
        }
      });
    }

    bindTab(btnTab1, contentTab1);
    bindTab(btnTab2, contentTab2);
  }
}

export default simpleProductTabs;