(function ($) {

  function init() {
    var $checkboxReturnTrip = $('#chkbx-r-trip');
    var $elementReturnTime = $('#r-time-elem');
    var $buttonFindCabs = $('#btn-search');
    var $elementCabSelection = $('#cab-selection-elem');

    $checkboxReturnTrip.on('click', function () {
      $elementReturnTime.toggle(this.checked);
      console.log(this.checked);
    });

    $buttonFindCabs.on('click', function () {
      $elementCabSelection.show();
    });
  }

  $(document).ready(init);

}($));