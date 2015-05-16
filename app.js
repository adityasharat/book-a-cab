(function ($) {

    function init() {
        var $returnTripCheckbox = $('#chkbx-r-trip');
        var $returnTimeElement = $("#r-time-elem");

        $returnTripCheckbox.on('click', function () {
            $returnTimeElement.toggle(this.checked);
            console.log(this.checked);
        });
    }

    $(document).ready(init);

}($));