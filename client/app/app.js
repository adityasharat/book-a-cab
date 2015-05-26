/*global window, alert*/
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

    var step = 0;

    var booking = {
      name: undefined,
      email: undefined,
      number: undefined,
      pickupTime: undefined,
      returnTime: undefined,
      fromCity: undefined,
      toCity: undefined,
      isReturn: false,
      cabType: undefined,
      pickupAddress: undefined,
      comments: undefined,
    };

    function createBooking() {
      booking.fromCity = $('#fromCity').val();
      booking.toCity = $('#toCity').val();
      booking.pickupTime = $('#s-time').val().toString();
      booking.returnTime = $('#r-time').val().toString();
      booking.cabType = $('[data-cab-type].selected').data('cab-type');
      booking.name = $('#input-name').val();
      booking.email = $('#input-email').val();
      booking.pickupAddress = $('#input-address').val();
      booking.comments = $('#input-comments').val();
      booking.isReturn = $checkboxReturnTrip[0].checked;
      booking.number = $('#input-number').val();
      return booking;
    }

    $checkboxReturnTrip.on('click', function () {
      $elementReturnTime.toggle(this.checked);
      /*booking.isReturn = this.checked;*/
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
      var elementTripPlanHeight = $elementTripPlan.outerHeight(false);
      var formCabSelectionHeight = $formCabSelection.outerHeight(false);

      $elementsCabTypeContainer.removeClass(classes.SELECTED_CAB_TYPE);
      $elementSelectedCabType.addClass(classes.SELECTED_CAB_TYPE);

      $formContactInfo.fadeIn(300);

      if (step < 2) {
        $elementFormContainer.animate({
          height: formHeight +
            ($formContactInfo.outerHeight(false) > $body.height() ? $formContactInfo.outerHeight(false) : $body.height()) -
            ($body.height() > formCabSelectionHeight ? formHeight - elementTripPlanHeight - formCabSelectionHeight : 0) +
            parseInt($elementFormContainer.css('padding-bottom'), 10)
        }, 900);
        step++;
      }

      $wrapper.animate({
        scrollTop: $formContactInfo.offset().top - $wrapper.offset().top + $wrapper.scrollTop()
      }, 1210);
    });

    $formContactInfo.on('submit', function () {
      // get form values and return booking
      var finalBooking = createBooking();

      var promise = $.ajax('bookings', {
        'data': JSON.stringify(finalBooking),
        'type': 'POST',
        'processData': false,
        'contentType': 'application/json'
      });

      promise.done(function (data) {
        $('#bid').html(data.id);
        $('.confirm').show();
        alert('Your booking has been received ' + data.id + '. We will contact you soon.');
      });

      return false;
    });

    window.onresize = function () {
      console.log($elementFormContainer.attr('style'));
      $elementFormContainer.attr('style', '');
      console.log($elementFormContainer.attr('style'));
    };
  }

  $(document).ready(init);
}($));
