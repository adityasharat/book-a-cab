(function ($) {

  function init() {
    var classes = {
      SELECTED_CAB_TYPE: 'selected'
    };
    var $body = $('body');
    var $wrapper = $('.wrapper');
    var $elementFormContainer = $('.cab-form-container');
    var $formTripPlan = $('form.cab-form');
    var $checkboxReturnTrip = $('#chkbx-r-trip');
    var $elementReturnTime = $('#r-time-elem');
    //var $buttonFindCabs = $('#btn-search');
    var $elementCabSelection = $('#cab-selection-elem');
    var $elementsCabTypeContainer = $('.cab-type-container');
    var $elementContactInfoContainer = $('#contact-details-elem');

    $checkboxReturnTrip.on('click', function () {
      $elementReturnTime.toggle(this.checked);
    });

    $formTripPlan.on('submit', function () {
      var formHeight = $elementFormContainer.height();

      $elementCabSelection.fadeIn(300);
      $elementFormContainer.animate({
        height: formHeight +
          ($elementCabSelection.outerHeight(false) > $body.height() ? $elementCabSelection.outerHeight(false) : $body.height()) +
          parseInt($elementFormContainer.css('padding-bottom'), 10)
      }, 900);
      $wrapper.animate({
        scrollTop: $elementCabSelection.offset().top
      }, 1210);

      return false;
    });

    $elementsCabTypeContainer.on('click', function (event) {
      var $elementSelectedCabType = $(event.currentTarget);
      var formHeight = $elementFormContainer.height();
      var contactInfoContainerHeight = $elementContactInfoContainer.outerHeight(false);
      var elementCabSelectionHeight = $elementCabSelection.outerHeight(false);

      $elementsCabTypeContainer.removeClass(classes.SELECTED_CAB_TYPE);
      $elementSelectedCabType.addClass(classes.SELECTED_CAB_TYPE);

      $elementContactInfoContainer.fadeIn(300);
      if (contactInfoContainerHeight + elementCabSelectionHeight > formHeight) {
        $elementFormContainer.animate({
          height: contactInfoContainerHeight + elementCabSelectionHeight + parseInt($elementFormContainer.css('padding-bottom'), 10)
        }, 900);
      }
      $wrapper.animate({
        scrollTop: $elementContactInfoContainer.offset().top
      }, 2000);

    });
  }

  $(document).ready(init);
}($));