function formValidators() {
  
  // Simple product form
  function simpleProductFormValidation() {
    if ($('.sp-options form').length) {
      const addToCartBtn = $('.sp-options__add-btn'),
        checkoutBtn = $('.sp-options__checkout-btn'),
        form = $('.sp-options form'),
        hideBtnClass = 'hidden',
        errorMessage = $('.sp-options__invalid'),
        errorMessageHTML = '<span class="sp-options__invalid">Select color and size</span>',
        btnContainer =  $('.sp-options__bottom-btn-box');
  
  
      form.validate({
        submitHandler: function() {
          addToCartBtn.animate({'opacity': '0'},
          200, function() {
            addToCartBtn.addClass(hideBtnClass);
            checkoutBtn.removeClass(hideBtnClass).css('opacity','0').animate({'opacity':'1'}, 200);
            if (errorMessage.length) {
              errorMessage.remove();
            }
          });
        },
        invalidHandler: function() {
          if (!errorMessage.length) {
            btnContainer.before(errorMessageHTML);
          }
        },
        showErrors: function(){}
      });
    }
  }

  // Checkout form
  function checkoutFormValidation(formSelector, inputInvalidClass) {
    if ($(formSelector).length) {

      $(formSelector).validate({
        highlight: function(element, errorClass) {
          $(element).addClass(inputInvalidClass);
  
          $(element).on('click', function() {
            $(element).removeClass(inputInvalidClass);
          });
        },
        errorPlacement: function() {
          return false;
        }
      });
    }
  }

  simpleProductFormValidation();
  checkoutFormValidation('#checkout-step-1', 'checkout-main-box__field-input--invalid');
  checkoutFormValidation('#checkout-step-2', 'checkout-main-box__field-input--invalid');

}

export default formValidators;