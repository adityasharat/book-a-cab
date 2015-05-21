(function ($) {

  function init() {
    var classes = {
      SELECTED_CAB_TYPE: 'selected'
    };
    var $body = $('body');
    var $wrapper = $('.wrapper');

    var $elementReturnTime = $('#r-time-elem');
    var $elementFormContainer = $('.cab-form-container');
    var $elementTripPlan = $('#trip-plan-elem');
    var $elementsCabTypeContainer = $('.cab-type-container');

    var $formTripPlan = $('#trip-plan');
    var $formCabSelection = $('#cab-selection');
    var $formContactInfo = $('#contact-info');

    var $checkboxReturnTrip = $('#chkbx-r-trip');
    //var $buttonFindCabs = $('#btn-search');

    var beenHere = false;

    $checkboxReturnTrip.on('click', function () {
      $elementReturnTime.toggle(this.checked);
    });

    $formTripPlan.on('submit', function () {
      var formHeight = $elementFormContainer.height();

      $formCabSelection.fadeIn(300);
      $elementFormContainer.animate({
        height: formHeight +
          ($formCabSelection.outerHeight(false) > $body.height() ? $formCabSelection.outerHeight(false) : $body.height()) +
          88
      }, 900);

      if (beenHere) {
        $wrapper.animate({
          scrollTop: $formCabSelection.offset().top
        }, 1210);
      } else {
        $wrapper.animate({
          scrollTop: $body.height()
        }, 1210);
      }

      return false;
    });

    $elementsCabTypeContainer.on('click', function (event) {
      var $elementSelectedCabType = $(event.currentTarget);
      var formHeight = $elementFormContainer.height();
      //var elementTripPlanHeight = $elementTripPlan.outerHeight(false);
      //var formCabSelectionHeight = $formCabSelection.outerHeight(false);
      //var contactInfoContainerHeight = $formContactInfo.outerHeight(false);

      $elementsCabTypeContainer.removeClass(classes.SELECTED_CAB_TYPE);
      $elementSelectedCabType.addClass(classes.SELECTED_CAB_TYPE);

      $formContactInfo.fadeIn(300);
      /*if (contactInfoContainerHeight + formCabSelectionHeight + elementTripPlanHeight > formHeight) {
        $elementFormContainer.animate({
          height: elementTripPlanHeight + contactInfoContainerHeight + formCabSelectionHeight
        }, 900);
      }*/
      $elementFormContainer.animate({
        height: formHeight +
          ($formContactInfo.outerHeight(false) > $body.height() ? $formContactInfo.outerHeight(false) : $body.height()) -
          88
      }, 900);
      $wrapper.animate({
        scrollTop: $body.height()
      }, 1210);

    });
  }

  $(document).ready(init);
}($));