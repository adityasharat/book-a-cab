(function ($) {

  function init() {
    var classes = {
      SELECTED_CAB_TYPE: 'selected'
    };
    var $body = $('body');
    var $wrapper = $('.wrapper');
    var $formTripPlan = $('form.cab-form');
    var $checkboxReturnTrip = $('#chkbx-r-trip');
    var $elementReturnTime = $('#r-time-elem');
    //var $buttonFindCabs = $('#btn-search');
    var $elementCabSelection = $('#cab-selection-elem');
    var $elementsCabTypeContainer = $('.cab-type-container');

    $checkboxReturnTrip.on('click', function () {
      $elementReturnTime.toggle(this.checked);
    });

    $formTripPlan.on('submit', function () {
      $elementCabSelection
        .fadeIn(300)
        .animate({
          height: $elementCabSelection.height() > $body.height() ? $elementCabSelection - 80 : $body.height() - 80
        }, 900);
      $wrapper.animate({
        scrollTop: $elementCabSelection.offset().top
      }, 1210);
      return false;
    });

    $elementsCabTypeContainer.on('click', function (event) {
      var $elementSelectedCabType = $(event.currentTarget);
      $elementsCabTypeContainer.removeClass(classes.SELECTED_CAB_TYPE);
      $elementSelectedCabType.addClass(classes.SELECTED_CAB_TYPE);
    });
  }

  $(document).ready(init);
}($));