import getHeaderHeight from './getHeaderHeight.js';
import scrollHandler from './scrollHandler.js';

function catalogFilter() {
  if ($('.catalog-filter').length) {
    const filter = $('.catalog-filter'),
      filterOpenClass = 'catalog-filter--opened',
      filterCloseClass = 'catalog-filter--closed',
      btn = $('.catalog-filter-btn__btn'),
      closeBtn = $('.catalog-filter__close-btn'),
      filterContainer = $('.catalog-filter__categories-container');

    function filterSetHeight() {
      let filterHeight = window.innerHeight - parseInt(getHeaderHeight()) + 'px';
      let filterContainerHeight = window.innerHeight - parseInt(getHeaderHeight()) - 74 + 'px';

      filter.css('height', filterHeight);
      filterContainer.css('height', filterContainerHeight);
    }

    function showFilter() {
      filter.addClass(filterOpenClass);
      filter.removeClass(filterCloseClass);

      if(window.innerWidth <= 1024) {
        filter.css({'top': getHeaderHeight()});
        scrollHandler.lock();
      }
    }

    function hideFilter() {
      filter.addClass(filterCloseClass);
      filter.removeClass(filterOpenClass);
      
      scrollHandler.unlock();
    }

    btn.on('click', function(){
      if (filter.hasClass(filterCloseClass)) {
        showFilter();
      } else {
        hideFilter();
      }
    })

    closeBtn.on('click', function() {
      hideFilter();
    })

    $(window).on('resize', function() {
      if (window.innerWidth <= 1024) {
        filterSetHeight();
      }
    })
    if (window.innerWidth <= 1024) {
      filterSetHeight();
    }
  }
}

export default catalogFilter;