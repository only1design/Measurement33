function settingsTabs() {
  if ($('.settings__section').length) {
    const sectionTop = $('.settings__section-top'),
      sectionBottom = $('.settings__section-bottom'),
      sectionArrow = $('.settings__section-top .settings__section-arrow');

    function hideAllSectionsWithException(id) {
      sectionBottom.not('#'+ id +' .settings__section-bottom').slideUp();
      sectionTop.not('#'+ id +' .settings__section-top').css('color', '');
      sectionArrow.not('#'+ id +' .settings__section-top .settings__section-arrow').css('transform', 'scale(1,1)');
    }

    function showSection(id) {
      $('#'+ id +' .settings__section-bottom').slideDown();
      $('#'+ id +' .settings__section-top').css('color', '#ff7200');
      $('#'+ id +' .settings__section-top .settings__section-arrow').css('transform', 'scale(1,-1)');
    }
    
    function hideSection(id) {
      $('#'+ id +' .settings__section-bottom').slideUp();
      $('#'+ id +' .settings__section-top').css('color', '');
      $('#'+ id +' .settings__section-top .settings__section-arrow').css('transform', 'scale(1,1)');
    }

    sectionTop.on('click', function(e) {
      const sectionId = ($(this).parent().attr('id'));

      if ($('#' + sectionId +' .settings__section-bottom').css('display') == 'none') {
        hideAllSectionsWithException(sectionId);
        showSection(sectionId);
      } else {
        hideSection(sectionId);
      }
    });
  }
}

export default settingsTabs;