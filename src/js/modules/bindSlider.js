function bindSlider() {

  // Main page products slider
  function bindMainPageSlider() {
    if ($('.products-slider--main-page').length) {
      const prevArrow = document.querySelector('.products-slider--main-page .products-slider__arrow-left'),
        nextArrow = document.querySelector('.products-slider--main-page .products-slider__arrow-right');
      prevArrow.remove();
      nextArrow.remove();
  
      $('.products-slider--main-page').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: prevArrow.outerHTML,
        nextArrow: nextArrow.outerHTML,
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
  
      let deleteSlidesStatus = false;
      const deleteSlides = (deleteCount) => {
        if (!deleteSlidesStatus) {
          function getLastSlide(){
            return ($('.products-slider--main-page').slick('getSlick').slideCount - 1);
          }
          for (let i = 0; i < deleteCount; i++) { 
            $('.products-slider--main-page').slick('slickRemove', getLastSlide());
          }
          deleteSlidesStatus = true;
        }
      }
  
      if (window.innerWidth < 1024) {
        deleteSlides(6);
      }
      
      $(window).on('resize', function() {
        if (window.innerWidth < 1024) {
          deleteSlides(6);
        }
      })
  
    }
  }

  // Simple page slider
  function bindSimplePageSlider() {
    if ($('.sp-slider').length) {
      const prevArrow = document.querySelector('.sp-slider__arrow-btn--left'),
        nextArrow = document.querySelector('.sp-slider__arrow-btn--right');
      prevArrow.remove();
      nextArrow.remove();
  
      $('.sp-slider__slider-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: prevArrow.outerHTML,
        nextArrow: nextArrow.outerHTML,
        draggable:false,
        speed:400,
        touchThreshold:10,
        waitForAnimate:false,
        dots: true,
        appendDots: '.sp-slider__dots-box',
        fade: true
      });
    }
  }
  
  bindMainPageSlider();
  bindSimplePageSlider();
}

export default bindSlider;