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
    var $elementContactInfoContainer = $('.contact-details-form');

    $checkboxReturnTrip.on('click', function () {
      $elementReturnTime.toggle(this.checked);
    });

    $formTripPlan.on('submit', function () {
      var formHeight = $elementFormContainer.height();

      $elementCabSelection.fadeIn(300);
      $elementFormContainer.animate({
        height: formHeight + 40 +
          ($elementCabSelection.height() > $body.height() ? $elementCabSelection.height() : $body.height())
      }, 900);
      $wrapper.animate({
        scrollTop: $elementCabSelection.offset().top
      }, 1210);

      return false;
    });

    $elementsCabTypeContainer.on('click', function (event) {
      var $elementSelectedCabType = $(event.currentTarget);
      var formHeight = $elementFormContainer.height();

      $elementsCabTypeContainer.removeClass(classes.SELECTED_CAB_TYPE);
      $elementSelectedCabType.addClass(classes.SELECTED_CAB_TYPE);

      $elementContactInfoContainer.fadeIn(300);
      $elementFormContainer.animate({
        height: formHeight +
          ($elementContactInfoContainer.height() > $body.height() ? $elementContactInfoContainer.height() : $body.height())
      }, 900);
      $wrapper.animate({
        scrollTop: $elementCabSelection.offset().top + $elementContactInfoContainer.offset().top
      }, 1250);

    });
  }

  $(document).ready(init);
}($));