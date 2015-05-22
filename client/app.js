(function ($) {

  function init() {
    var classes = {
      SELECTED_CAB_TYPE: 'selected'
    };
    var $body = $('body');
    var $wrapper = $('.wrapper');

    var $elementReturnTime = $('#r-time-elem');
    var $elementFormContainer = $('.cab-form-container');
    //var $elementTripPlan = $('#trip-plan-elem');
    var $elementsCabTypeContainer = $('.cab-type-container');

    var $formTripPlan = $('#trip-plan');
    var $formCabSelection = $('#cab-selection');
    var $formContactInfo = $('#contact-info');

    var $checkboxReturnTrip = $('#chkbx-r-trip');
    //var $buttonFindCabs = $('#btn-search');

    var step = 0;

    $checkboxReturnTrip.on('click', function () {
      $elementReturnTime.toggle(this.checked);
    });

    $formTripPlan.on('submit', function () {
      var formHeight = $elementFormContainer.height();

      $formCabSelection.fadeIn(300);
      if (step < 1) {
        $elementFormContainer.animate({
          height: formHeight +
            ($formCabSelection.outerHeight(false) > $body.height() ? $formCabSelection.outerHeight(false) : $body.height()) + 40
        }, 900);
        step++;
      }

      $wrapper.animate({
        scrollTop: $formCabSelection.offset().top - $wrapper.offset().top + $wrapper.scrollTop()
      }, 1210);

      return false;
    });

    $elementsCabTypeContainer.on('click', function (event) {
      var $elementSelectedCabType = $(event.currentTarget);
      var formHeight = $elementFormContainer.outerHeight(false);
      var formCabSelectionHeight = $formCabSelection.outerHeight(false);

      $elementsCabTypeContainer.removeClass(classes.SELECTED_CAB_TYPE);
      $elementSelectedCabType.addClass(classes.SELECTED_CAB_TYPE);

      $formContactInfo.fadeIn(300);

      if (step < 2) {
        $elementFormContainer.animate({
          height: formHeight +
            ($formContactInfo.outerHeight(false) > $body.height() ? $formContactInfo.outerHeight(false) : $body.height()) -
            ($body.height() > formCabSelectionHeight ? formCabSelectionHeight : 0) +
            parseInt($elementFormContainer.css('padding-bottom'), 10)
        }, 900);
        step++;
      }

      $wrapper.animate({
        scrollTop: $formContactInfo.offset().top - $wrapper.offset().top + $wrapper.scrollTop()
      }, 1210);
    });

    $formContactInfo.on('submit', function () {

      var promise = $.post('bookings', {
        blah: 'blah'
      }, 'json');

      promise.done(function (data) {
        console.log(data);
      });

      return false;
    });
  }

  $(document).ready(init);
}($));