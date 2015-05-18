(function ($) {

  function init() {
    var $body = $('body');
    var $wrapper = $('.wrapper');
    var $checkboxReturnTrip = $('#chkbx-r-trip');
    var $elementReturnTime = $('#r-time-elem');
    var $buttonFindCabs = $('#btn-search');
    var $elementCabSelection = $('#cab-selection-elem');

    $checkboxReturnTrip.on('click', function () {
      $elementReturnTime.toggle(this.checked);
      console.log(this.checked);
    });

    $buttonFindCabs.on('click', function () {
      $elementCabSelection
        .fadeIn(300)
        .animate({
          height: $body.height()
        }, 900);
      $wrapper.animate({
        scrollTop: $elementCabSelection.offset().top
      }, 1210);
    });
  }

  $(document).ready(init);
}($));